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
var a = 'undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {},
    b = a.parcelRequire388b;
b.register('/G2V3', function(c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), _G(c.exports, 'default', function() {
        return _B;
    });
    var f = b('0hzx+');
    b('LEQ5w');
    var g = b('7f2Ay'),
        h = b('g/xOW'),
        i = b('hM9Ax'),
        j = b('RxO0l'),
        k = b('fpVk3'),
        l = b('dDSF8'),
        m = b('Yd+Kp'),
        n = b('sHRDd'),
        o = b('PMl60'),
        p = b('Axq+p'),
        q = b('8y7vq'),
        r = b('oBBW6'),
        s = b('dtquX'),
        t = b('8DzEw'),
        u = b('b5kvC'),
        v = b('ECzOP');
    let w, x, y, z, A = _w => _w;
    var _B = _G => {
        const {
            bulkId: C
        } = _G, {
            data: D,
            isLoading: E
        } = (0, t.default)(C);
        if (E)
            return (0, f.jsx)(_C, {
                children: (0, f.jsx)(r.default, {
                    paragraph: {
                        rows: 14
                    }
                })
            });
        const F = null == D ? void 0 : D.monthlyInfo;
        if (!F || !F.length) {
            const _G = Math.abs(_w(v)().diff(_w(v)((0, o.dateFromObjectId)(C)), 'months')) < 2;
            return (0, f.jsx)(_C, {
                children: (0, f.jsxs)('div', {
                    className: 'maxWidth flex-center flex-column',
                    style: {
                        minHeight: 400
                    },
                    children: [
                        (0, f.jsx)('div', {
                            style: {
                                fontSize: 54,
                                opacity: 0.8
                            },
                            children: (0, f.jsx)(s.default, {})
                        }),
                        (0, f.jsx)('div', {
                            style: {
                                fontSize: 19,
                                marginTop: 8,
                                textAlign: 'center'
                            },
                            children: _G ? 'No usage data is available for this group license yet. Check back soon!' : 'No usage data is available for this group license.'
                        })
                    ]
                })
            });
        }
        return (0, f.jsxs)(_C, {
            children: [
                (0, f.jsx)(_D, {
                    children: 'Group Usage'
                }),
                (0, f.jsx)(_E, {
                    children: 'The percentage of members have hosted a live game since the group license was activated'
                }),
                (0, f.jsx)('div', {
                    style: {
                        height: 15
                    }
                }),
                (0, f.jsx)(q.default, {
                    type: 'circle',
                    width: 200,
                    percent: Math.ceil(100 * D.percentageUsage),
                    format: () => Math.ceil(100 * D.percentageUsage) + '%',
                    strokeColor: '#66bb6a'
                }),
                (0, f.jsx)('div', {
                    style: {
                        height: 30
                    }
                }),
                (0, f.jsx)(_D, {
                    children: 'Monthly Usage'
                }),
                (0, f.jsx)(_E, {
                    children: 'Percentage of members who hosted a live game in a given month.'
                }),
                (0, f.jsx)('div', {
                    style: {
                        height: 15
                    }
                }),
                (0, f.jsx)(_F, {
                    children: (0, f.jsx)(j.ResponsiveContainer, {
                        height: 270,
                        children: (0, f.jsxs)(h.BarChart, {
                            margin: {
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0
                            },
                            data: F.map(_w => ({
                                name: _w.monthName,
                                Percentage: Math.ceil(100 * _w.percentageOfMembersWhoHosted)
                            })),
                            children: [
                                (0, f.jsx)(i.CartesianGrid, {
                                    strokeDasharray: '3 3'
                                }),
                                (0, f.jsx)(l.XAxis, {
                                    dataKey: 'name'
                                }),
                                (0, f.jsx)(m.YAxis, {
                                    tickFormatter: _w => _w + '%'
                                }),
                                (0, f.jsx)(k.Tooltip, {
                                    formatter: _w => (0, o.numberWithCommas)(_w) + '%'
                                }),
                                (0, f.jsx)(g.Bar, {
                                    dataKey: 'Percentage',
                                    fill: n.default.BackgroundPurple
                                })
                            ]
                        })
                    })
                }),
                (0, f.jsx)('div', {
                    style: {
                        height: 30
                    }
                }),
                (0, f.jsx)(_D, {
                    children: 'Monthly Usage Frequency'
                }),
                (0, f.jsx)(_E, {
                    children: 'Average live games hosted per active member each month'
                }),
                (0, f.jsx)('div', {
                    style: {
                        height: 15
                    }
                }),
                (0, f.jsx)(_F, {
                    children: (0, f.jsx)(j.ResponsiveContainer, {
                        height: 270,
                        children: (0, f.jsxs)(h.BarChart, {
                            margin: {
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0
                            },
                            data: F.map(_w => ({
                                name: _w.monthName,
                                'Average Live Games Hosted': Math.round(_w.averageGamesHosted)
                            })),
                            children: [
                                (0, f.jsx)(i.CartesianGrid, {
                                    strokeDasharray: '3 3'
                                }),
                                (0, f.jsx)(l.XAxis, {
                                    dataKey: 'name'
                                }),
                                (0, f.jsx)(m.YAxis, {}),
                                (0, f.jsx)(k.Tooltip, {
                                    formatter: _w => (0, o.numberWithCommas)(_w)
                                }),
                                (0, f.jsx)(g.Bar, {
                                    dataKey: 'Average Live Games Hosted',
                                    fill: n.default.BackgroundPurple
                                })
                            ]
                        })
                    })
                })
            ]
        });
    };
    const _C = p.default.div.attrs({
            className: 'maxWidth'
        })(w || (w = A`
  color: ${ 0 };
  font-family: ${ 0 };
  padding-top: 8px;
`), n.default.Black, u.Fonts.SFPro),
        _D = p.default.div(x || (x = A`
  font-size: 25px;
  font-weight: ${ 0 };
`), u.FontWeights.UltraBold),
        _E = p.default.div(y || (y = A`
  font-size: 17px;
`)),
        _F = p.default.div.attrs({
            className: 'maxWidth'
        })(z || (z = A`
  padding: 25px;
  background: rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  padding-bottom: 8px;
`));
}), b.register('7f2Ay', function(c, d) {
    _x(c.exports, 'Bar', function() {
        return _v;
    });
    var e = b('4Eoue'),
        f = b('4A0/8'),
        g = b('4R9wH'),
        h = b('iieiP0'),
        i = b('LEQ5w'),
        j = b('JrtKP'),
        k = b('gChmk'),
        l = b('bR0hn'),
        m = b('MXVYT'),
        n = b('z6NTj'),
        o = b('HfG4h'),
        p = b('rPBW3'),
        q = b('F2lA2'),
        r = b('7p4uL'),
        s = b('udXfZ'),
        t = b('2xCsV'),
        u = b('SLFbE');

    function v(_w) {
        return v = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(x) {
            return typeof x;
        } : function(x) {
            return x && 'function' == typeof Symbol && x.constructor === Symbol && x !== Symbol.prototype ? 'symbol' : typeof x;
        }, v(_w);
    }

    function v(w, _x) {
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
        }(w, _x);
        if (Object.getOwnPropertySymbols) {
            var B = Object.getOwnPropertySymbols(w);
            for (z = 0; z < B.length; z++)
                y = B[z], _x.indexOf(y) >= 0 || Object.prototype.propertyIsEnumerable.call(w, y) && (A[y] = w[y]);
        }
        return A;
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

    function v(w, x) {
        var y = Object.keys(w);
        if (Object.getOwnPropertySymbols) {
            var z = Object.getOwnPropertySymbols(w);
            x && (z = z.filter(function(A) {
                return Object.getOwnPropertyDescriptor(w, A).enumerable;
            })), y.push.apply(y, z);
        }
        return y;
    }

    function v(w) {
        for (var x = 1; x < arguments.length; x++) {
            var y = null != arguments[x] ? arguments[x] : {};
            x % 2 ? _P(Object(y), !0).forEach(function(z) {
                _v(w, z, y[z]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(w, Object.getOwnPropertyDescriptors(y)) : _P(Object(y)).forEach(function(z) {
                Object.defineProperty(w, z, Object.getOwnPropertyDescriptor(y, z));
            });
        }
        return w;
    }

    function _v(w, x, y) {
        return x in w ? Object.defineProperty(w, x, {
            value: y,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : w[x] = y, w;
    }

    function v(w, x) {
        if (!(w instanceof x))
            throw new TypeError('Cannot call a class as a function');
    }

    function v(w, x) {
        for (var y = 0; y < x.length; y++) {
            var z = x[y];
            z.enumerable = z.enumerable || !1, z.configurable = !0, 'value' in z && (z.writable = !0), Object.defineProperty(w, z.key, z);
        }
    }

    function v(w, x) {
        return v = Object.setPrototypeOf || function(y, z) {
            return y.__proto__ = z, y;
        }, v(w, x);
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
            var y, z = _v(w);
            if (x) {
                var A = _v(this).constructor;
                y = Reflect.construct(z, arguments, A);
            } else
                y = z.apply(this, arguments);
            return _v(this, y);
        };
    }

    function _v(w, x) {
        return !x || 'object' !== _R(x) && 'function' != typeof x ? function(y) {
            if (void 0 === y)
                throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return y;
        }(w) : x;
    }

    function _v(w) {
        return _v = Object.setPrototypeOf ? Object.getPrototypeOf : function(x) {
            return x.__proto__ || Object.getPrototypeOf(x);
        }, _v(w);
    }
    var _v = function(w) {
        ! function(x, y) {
            if ('function' != typeof y && null !== y)
                throw new TypeError('Super expression must either be null or a function');
            x.prototype = Object.create(y && y.prototype, {
                constructor: {
                    value: x,
                    writable: !0,
                    configurable: !0
                }
            }), y && _T(x, y);
        }(o, w);
        var x, y, z, A = _F(o);

        function B() {
            var C;
            _R(this, B);
            for (var D = arguments.length, E = new Array(D), F = 0; F < D; F++)
                E[F] = arguments[F];
            return (C = A.call.apply(A, [this].concat(E))).state = {
                isAnimationFinished: !1
            }, C.id = (0, q.uniqueId)('recharts-bar-'), C.handleAnimationEnd = function() {
                var G = C.props.onAnimationEnd;
                C.setState({
                    isAnimationFinished: !0
                }), G && G();
            }, C.handleAnimationStart = function() {
                var G = C.props.onAnimationStart;
                C.setState({
                    isAnimationFinished: !1
                }), G && G();
            }, C;
        }
        return x = o, z = [{
                key: 'getDerivedStateFromProps',
                value: function(B, C) {
                    return B.animationId !== C.prevAnimationId ? {
                        prevAnimationId: B.animationId,
                        curData: B.data,
                        prevData: C.curData
                    } : B.data !== C.curData ? {
                        curData: B.data
                    } : null;
                }
            },
            {
                key: 'renderRectangle',
                value: function(B, C) {
                    return _O(i).isValidElement(B) ? _O(i).cloneElement(B, C) : _O(g)(B) ? B(C) : _O(i).createElement(l.Rectangle, C);
                }
            }
        ], (y = [{
                key: 'renderRectanglesStatically',
                value: function(B) {
                    var C = this,
                        D = this.props.shape,
                        E = (0, u.filterProps)(this.props);
                    return B && B.map(function(F, G) {
                        var H = _E(_E(_E({}, E), F), {}, {
                            index: G
                        });
                        return _O(i).createElement(m.Layer, _O({
                            className: 'recharts-bar-rectangle'
                        }, (0, u.adaptEventsOfChild)(C.props, F, G), {
                            key: 'rectangle-'.concat(G)
                        }), o.renderRectangle(D, H));
                    });
                }
            },
            {
                key: 'renderRectanglesWithAnimation',
                value: function() {
                    var B = this,
                        C = this.props,
                        D = C.data,
                        E = C.layout,
                        F = C.isAnimationActive,
                        G = C.animationBegin,
                        H = C.animationDuration,
                        I = C.animationEasing,
                        J = C.animationId,
                        K = this.state.prevData;
                    return _O(i).createElement(k.default, {
                        begin: G,
                        duration: H,
                        isActive: F,
                        easing: I,
                        from: {
                            t: 0
                        },
                        to: {
                            t: 1
                        },
                        key: 'bar-'.concat(J),
                        onAnimationEnd: this.handleAnimationEnd,
                        onAnimationStart: this.handleAnimationStart
                    }, function(L) {
                        var M = L.t,
                            N = D.map(function(_O, P) {
                                var Q = K && K[P];
                                if (Q) {
                                    var R = (0, q.interpolateNumber)(Q.x, _O.x),
                                        S = (0, q.interpolateNumber)(Q.y, _O.y),
                                        T = (0, q.interpolateNumber)(Q.width, _O.width),
                                        U = (0, q.interpolateNumber)(Q.height, _O.height);
                                    return _E(_E({}, _O), {}, {
                                        x: R(M),
                                        y: S(M),
                                        width: T(M),
                                        height: U(M)
                                    });
                                }
                                if ('horizontal' === E) {
                                    var R = (0, q.interpolateNumber)(0, _O.height)(M);
                                    return _E(_E({}, _O), {}, {
                                        y: _O.y + _O.height - R,
                                        height: R
                                    });
                                }
                                var R = (0, q.interpolateNumber)(0, _O.width)(M);
                                return _E(_E({}, _O), {}, {
                                    width: R
                                });
                            });
                        return _B(i).createElement(m.Layer, null, B.renderRectanglesStatically(N));
                    });
                }
            },
            {
                key: 'renderRectangles',
                value: function() {
                    var B = this.props,
                        C = B.data,
                        D = B.isAnimationActive,
                        E = this.state.prevData;
                    return !(D && C && C.length) || E && _B(f)(E, C) ? this.renderRectanglesStatically(C) : this.renderRectanglesWithAnimation();
                }
            },
            {
                key: 'renderBackground',
                value: function() {
                    var _B = this,
                        C = this.props.data,
                        D = (0, u.filterProps)(this.props.background);
                    return C.map(function(E, F) {
                        E.value;
                        var G = E.background,
                            H = _N(E, [
                                'value',
                                'background'
                            ]);
                        if (!G)
                            return null;
                        var I = _E(_E(_E(_E(_E({}, H), {}, {
                            fill: '#eee'
                        }, G), D), (0, u.adaptEventsOfChild)(_B.props, E, F)), {}, {
                            index: F,
                            key: 'background-bar-'.concat(F),
                            className: 'recharts-bar-background-rectangle'
                        });
                        return o.renderRectangle(_B.props.background, I);
                    });
                }
            },
            {
                key: 'renderErrorBar',
                value: function() {
                    if (this.props.isAnimationActive && !this.state.isAnimationFinished)
                        return null;
                    var B = this.props,
                        C = B.data,
                        D = B.xAxis,
                        E = B.yAxis,
                        F = B.layout,
                        G = B.children,
                        H = (0, r.findAllByType)(G, n.ErrorBar.displayName);
                    if (!H)
                        return null;
                    var I = 'vertical' === F ? C[0].height / 2 : C[0].width / 2;

                    function J(K, L) {
                        return {
                            x: K.x,
                            y: K.y,
                            value: K.value,
                            errorVal: (0, t.getValueByDataKey)(K, L)
                        };
                    }
                    return H.map(function(J, K) {
                        return _c(i).cloneElement(J, {
                            key: 'error-bar-'.concat(K),
                            data: C,
                            xAxis: D,
                            yAxis: E,
                            layout: F,
                            offset: I,
                            dataPointFormatter: j
                        });
                    });
                }
            },
            {
                key: 'render',
                value: function() {
                    var B = this.props,
                        C = B.hide,
                        D = B.data,
                        E = B.className,
                        F = B.xAxis,
                        G = B.yAxis,
                        H = B.left,
                        I = B.top,
                        J = B.width,
                        K = B.height,
                        L = B.isAnimationActive,
                        M = B.background,
                        N = B.id;
                    if (C || !D || !D.length)
                        return null;
                    var O = this.state.isAnimationFinished,
                        P = _c(j)('recharts-bar', E),
                        Q = F && F.allowDataOverflow || G && G.allowDataOverflow,
                        _R = _c(e)(N) ? this.id : N;
                    return _c(i).createElement(m.Layer, {
                        className: P
                    }, Q ? _c(i).createElement('defs', null, _c(i).createElement('clipPath', {
                        id: 'clipPath-'.concat(_R)
                    }, _c(i).createElement('rect', {
                        x: H,
                        y: I,
                        width: J,
                        height: K
                    }))) : null, _c(i).createElement(m.Layer, {
                        className: 'recharts-bar-rectangles',
                        clipPath: Q ? 'url(#clipPath-'.concat(_R, ')') : null
                    }, M ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(), (!L || O) && p.LabelList.renderCallByParent(this.props, D));
                }
            }
        ]) && _S(x.prototype, y), z && _S(x, z), o;
    }(i.PureComponent);
    _v.displayName = 'Bar', _v.defaultProps = {
        xAxisId: 0,
        yAxisId: 0,
        legendType: 'rect',
        minPointSize: 0,
        hide: !1,
        data: [],
        layout: 'vertical',
        isAnimationActive: !s.Global.isSsr,
        animationBegin: 0,
        animationDuration: 400,
        animationEasing: 'ease'
    }, _v.getComposedData = function(w) {
        var x = w.props,
            y = w.item,
            z = w.barPosition,
            A = w.bandSize,
            B = w.xAxis,
            C = w.yAxis,
            D = w.xAxisTicks,
            E = w.yAxisTicks,
            F = w.stackedData,
            G = w.dataStartIndex,
            H = w.displayedData,
            I = w.offset,
            J = (0, t.findPositionOfBar)(z, y);
        if (!J)
            return null;
        var K = x.layout,
            L = y.props,
            M = L.dataKey,
            _N = L.children,
            _O = L.minPointSize,
            _P = 'horizontal' === K ? C : B,
            Q = F ? _P.scale.domain() : null,
            _R = (0, t.getBaseValueOfBar)({
                numericAxis: _P
            }),
            _S = (0, r.findAllByType)(_N, o.Cell.displayName),
            _T = H.map(function(U, V) {
                var W, X, Y, Z, $, ab;
                if (F ? W = (0, t.truncateByDomain)(F[G + V], Q) : (W = (0, t.getValueByDataKey)(U, M), _c(h)(W) || (W = [
                        _R,
                        W
                    ])), 'horizontal' === K) {
                    if (X = (0, t.getCateCoordinateOfBar)({
                            axis: B,
                            ticks: D,
                            bandSize: A,
                            offset: J.offset,
                            entry: U,
                            index: V
                        }), Y = C.scale(W[1]), Z = J.size, $ = C.scale(W[0]) - C.scale(W[1]), ab = {
                            x: X,
                            y: C.y,
                            width: Z,
                            height: C.height
                        }, Math.abs(_O) > 0 && Math.abs($) < Math.abs(_O)) {
                        var bb = (0, q.mathSign)($ || _O) * (Math.abs(_O) - Math.abs($));
                        Y -= bb, $ += bb;
                    }
                } else
                    X = B.scale(W[0]), Y = (0, t.getCateCoordinateOfBar)({
                        axis: C,
                        ticks: E,
                        bandSize: A,
                        offset: J.offset,
                        entry: U,
                        index: V
                    }), Z = B.scale(W[1]) - B.scale(W[0]), $ = J.size, ab = {
                        x: B.x,
                        y: Y,
                        width: B.width,
                        height: $
                    }, Math.abs(_O) > 0 && Math.abs(Z) < Math.abs(_O) && (Z += (0, q.mathSign)(Z || _O) * (Math.abs(_O) - Math.abs(Z)));
                return _E(_E(_E({}, U), {}, {
                    x: X,
                    y: Y,
                    width: Z,
                    height: $,
                    value: F ? W : W[1],
                    payload: U,
                    background: ab
                }, _S && _S[V] && _S[V].props), {}, {
                    tooltipPayload: [(0, t.getTooltipItem)(y, U)],
                    tooltipPosition: {
                        x: X + Z / 2,
                        y: Y + $ / 2
                    }
                });
            });
        return _E({
            data: _T,
            layout: K
        }, I);
    };
}), b.register('4Eoue', function(_c, d) {
    _c.exports = function(e) {
        return null == e;
    };
}), b.register('4A0/8', function(c, d) {
    var e = b('RqZnE');
    c.exports = function(f, g) {
        return e(f, g);
    };
}), b.register('RqZnE', function(c, d) {
    var e = b('aoXsB'),
        f = b('pQneJ0');
    c.exports = function c(g, h, i, j, k) {
        return g === h || (null == g || null == h || !f(g) && !f(h) ? g != g && h != h : e(g, h, i, j, c, k));
    };
}), b.register('aoXsB', function(c, d) {
    var e = b('RvQaj'),
        f = b('PwJKm'),
        g = b('r5CRs'),
        h = b('Ep7jZ'),
        i = b('QamRV'),
        j = b('iieiP0'),
        k = b('Gf8fT'),
        l = b('n6UXS'),
        m = '[object Arguments]',
        n = '[object Array]',
        o = '[object Object]',
        p = Object.prototype.hasOwnProperty;
    c.exports = function(q, r, s, t, u, v) {
        var w = j(q),
            x = j(r),
            y = w ? n : i(q),
            z = x ? n : i(r),
            A = (y = y == m ? o : y) == o,
            B = (z = z == m ? o : z) == o,
            C = y == z;
        if (C && k(q)) {
            if (!k(r))
                return !1;
            w = !0, A = !1;
        }
        if (C && !A)
            return v || (v = new e()), w || l(q) ? f(q, r, s, t, u, v) : g(q, r, y, s, t, u, v);
        if (!(1 & s)) {
            var D = A && p.call(q, '__wrapped__'),
                _E = B && p.call(r, '__wrapped__');
            if (D || _E) {
                var F = D ? q.value() : q,
                    G = _E ? r.value() : r;
                return v || (v = new e()), u(F, G, s, t, v);
            }
        }
        return !!C && (v || (v = new e()), h(q, r, s, t, u, v));
    };
}), b.register('RvQaj', function(c, d) {
    var e = b('tlOmS'),
        f = b('w0KFv'),
        g = b('pg30J0'),
        h = b('y1kL80'),
        i = b('f/HZ72'),
        j = b('n6uKl');

    function k(l) {
        var m = this.__data__ = new e(l);
        this.size = m.size;
    }
    _k.prototype.clear = f, _k.prototype.delete = g, _k.prototype.get = h, _k.prototype.has = i, _k.prototype.set = j, c.exports = _k;
}), b.register('tlOmS', function(c, d) {
    var e = b('IG5VF0'),
        f = b('9ytbm'),
        g = b('AhOvO'),
        h = b('/Vlot'),
        i = b('ggFr0');

    function j(k) {
        var l = -1,
            m = null == k ? 0 : k.length;
        for (this.clear(); ++l < m;) {
            var n = k[l];
            this.set(n[0], n[1]);
        }
    }
    _j.prototype.clear = e, _j.prototype.delete = f, _j.prototype.get = g, _j.prototype.has = h, _j.prototype.set = i, c.exports = _j;
}), b.register('IG5VF0', function(c, d) {
    c.exports = function() {
        this.__data__ = [], this.size = 0;
    };
}), b.register('9ytbm', function(c, d) {
    var e = b('irGMa'),
        f = Array.prototype.splice;
    c.exports = function(g) {
        var h = this.__data__,
            i = e(h, g);
        return !(i < 0) && (i == h.length - 1 ? h.pop() : f.call(h, i, 1), --this.size, !0);
    };
}), b.register('irGMa', function(c, d) {
    var e = b('A4nXK0');
    c.exports = function(f, g) {
        for (var h = f.length; h--;)
            if (e(f[h][0], g))
                return h;
        return -1;
    };
}), b.register('A4nXK0', function(c, d) {
    c.exports = function(e, f) {
        return e === f || e != e && f != f;
    };
}), b.register('AhOvO', function(c, d) {
    var e = b('irGMa');
    c.exports = function(f) {
        var g = this.__data__,
            h = e(g, f);
        return h < 0 ? void 0 : g[h][1];
    };
}), b.register('/Vlot', function(c, d) {
    var e = b('irGMa');
    c.exports = function(f) {
        return e(this.__data__, f) > -1;
    };
}), b.register('ggFr0', function(c, d) {
    var e = b('irGMa');
    c.exports = function(f, g) {
        var h = this.__data__,
            i = e(h, f);
        return i < 0 ? (++this.size, h.push([
            f,
            g
        ])) : h[i][1] = g, this;
    };
}), b.register('w0KFv', function(c, d) {
    var e = b('tlOmS');
    c.exports = function() {
        this.__data__ = new e(), this.size = 0;
    };
}), b.register('pg30J0', function(c, d) {
    c.exports = function(e) {
        var f = this.__data__,
            g = f.delete(e);
        return this.size = f.size, g;
    };
}), b.register('y1kL80', function(c, d) {
    c.exports = function(e) {
        return this.__data__.get(e);
    };
}), b.register('f/HZ72', function(c, d) {
    c.exports = function(e) {
        return this.__data__.has(e);
    };
}), b.register('n6uKl', function(c, d) {
    var e = b('tlOmS'),
        f = b('/t62W'),
        g = b('HYmse');
    c.exports = function(h, i) {
        var j = this.__data__;
        if (j instanceof e) {
            var k = j.__data__;
            if (!f || k.length < 199)
                return k.push([
                    h,
                    i
                ]), this.size = ++j.size, this;
            j = this.__data__ = new g(k);
        }
        return j.set(h, i), this.size = j.size, this;
    };
}), b.register('/t62W', function(c, d) {
    var e = b('GlOk0')(b('5iSxB'), 'Map');
    c.exports = e;
}), b.register('GlOk0', function(c, d) {
    var e = b('erO2X'),
        f = b('SJogX0');
    c.exports = function(g, h) {
        var i = f(g, h);
        return e(i) ? i : void 0;
    };
}), b.register('erO2X', function(c, d) {
    var e = b('4R9wH'),
        f = b('CJmOx'),
        g = b('pbpeS0'),
        h = b('1de4n0'),
        i = /^\[object .+?Constructor\]$/,
        _j = Function.prototype,
        _k = Object.prototype,
        l = _j.toString,
        m = _k.hasOwnProperty,
        n = RegExp('^' + l.call(m).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
    c.exports = function(o) {
        return !(!g(o) || f(o)) && (e(o) ? n : i).test(h(o));
    };
}), b.register('4R9wH', function(c, d) {
    var e = b('5H2CR'),
        f = b('pbpeS0');
    c.exports = function(g) {
        if (!f(g))
            return !1;
        var h = e(g);
        return '[object Function]' == h || '[object GeneratorFunction]' == h || '[object AsyncFunction]' == h || '[object Proxy]' == h;
    };
}), b.register('5H2CR', function(c, d) {
    var e = b('h30YM'),
        f = b('N+A7+'),
        g = b('6lNdS0'),
        h = e ? e.toStringTag : void 0;
    c.exports = function(i) {
        return null == i ? void 0 === i ? '[object Undefined]' : '[object Null]' : h && h in Object(i) ? f(i) : g(i);
    };
}), b.register('h30YM', function(c, d) {
    var e = b('5iSxB').Symbol;
    c.exports = e;
}), b.register('5iSxB', function(c, d) {
    var e = b('7TZWs0'),
        f = 'object' == typeof self && self && self.Object === Object && self,
        g = e || f || Function('return this')();
    c.exports = g;
}), b.register('7TZWs0', function(c, d) {
    var e = 'object' == typeof a && a && a.Object === Object && a;
    c.exports = e;
}), b.register('N+A7+', function(c, d) {
    var e = b('h30YM'),
        f = Object.prototype,
        g = f.hasOwnProperty,
        h = f.toString,
        i = e ? e.toStringTag : void 0;
    c.exports = function(j) {
        var k = g.call(j, i),
            l = j[i];
        try {
            j[i] = void 0;
            var m = !0;
        } catch (j) {}
        var m = h.call(j);
        return b && (k ? j[i] = l : delete j[i]), m;
    };
}), b.register('6lNdS0', function(c, d) {
    var e = Object.prototype.toString;
    c.exports = function(f) {
        return e.call(f);
    };
}), b.register('pbpeS0', function(c, d) {
    c.exports = function(e) {
        var f = typeof e;
        return null != e && ('object' == f || 'function' == f);
    };
}), b.register('CJmOx', function(c, d) {
    var e, f = b('zDKOY'),
        g = (e = /[^.]+$/.exec(f && f.keys && f.keys.IE_PROTO || '')) ? 'Symbol(src)_1.' + e : '';
    c.exports = function(h) {
        return !!g && g in h;
    };
}), b.register('zDKOY', function(c, d) {
    var e = b('5iSxB')['__core-js_shared__'];
    c.exports = e;
}), b.register('1de4n0', function(c, d) {
    var e = Function.prototype.toString;
    c.exports = function(f) {
        if (null != f) {
            try {
                return e.call(f);
            } catch (f) {}
            try {
                return f + '';
            } catch (f) {}
        }
        return '';
    };
}), b.register('SJogX0', function(c, d) {
    c.exports = function(e, f) {
        return null == e ? void 0 : e[f];
    };
}), b.register('HYmse', function(c, d) {
    var e = b('dKVFM'),
        f = b('eKO3L'),
        g = b('5z3k5'),
        h = b('i3dC2'),
        i = b('wSzrJ');

    function j(k) {
        var l = -1,
            m = null == k ? 0 : k.length;
        for (this.clear(); ++l < m;) {
            var n = k[l];
            this.set(n[0], n[1]);
        }
    }
    _j.prototype.clear = e, _j.prototype.delete = f, _j.prototype.get = g, _j.prototype.has = h, _j.prototype.set = i, c.exports = _j;
}), b.register('dKVFM', function(c, d) {
    var e = b('xOQZl'),
        f = b('tlOmS'),
        g = b('/t62W');
    c.exports = function() {
        this.size = 0, this.__data__ = {
            hash: new e(),
            map: new(g || f)(),
            string: new e()
        };
    };
}), b.register('xOQZl', function(c, d) {
    var e = b('xVhbU'),
        f = b('CJo/d0'),
        g = b('NBcId'),
        h = b('JBz96'),
        i = b('ukZue');

    function _j(k) {
        var l = -1,
            m = null == k ? 0 : k.length;
        for (this.clear(); ++l < m;) {
            var n = k[l];
            this.set(n[0], n[1]);
        }
    }
    _m.prototype.clear = e, _m.prototype.delete = f, _m.prototype.get = g, _m.prototype.has = h, _m.prototype.set = i, c.exports = _m;
}), b.register('xVhbU', function(c, d) {
    var e = b('RPsnV');
    c.exports = function() {
        this.__data__ = e ? e(null) : {}, this.size = 0;
    };
}), b.register('RPsnV', function(c, d) {
    var e = b('GlOk0')(Object, 'create');
    c.exports = e;
}), b.register('CJo/d0', function(c, d) {
    c.exports = function(e) {
        var f = this.has(e) && delete this.__data__[e];
        return this.size -= f ? 1 : 0, f;
    };
}), b.register('NBcId', function(c, d) {
    var e = b('RPsnV'),
        f = Object.prototype.hasOwnProperty;
    c.exports = function(g) {
        var h = this.__data__;
        if (e) {
            var i = h[g];
            return '__lodash_hash_undefined__' === i ? void 0 : i;
        }
        return f.call(h, g) ? h[g] : void 0;
    };
}), b.register('JBz96', function(c, d) {
    var e = b('RPsnV'),
        f = Object.prototype.hasOwnProperty;
    c.exports = function(g) {
        var h = this.__data__;
        return e ? void 0 !== h[g] : f.call(h, g);
    };
}), b.register('ukZue', function(c, d) {
    var e = b('RPsnV');
    c.exports = function(f, g) {
        var h = this.__data__;
        return this.size += this.has(f) ? 0 : 1, h[f] = e && void 0 === g ? '__lodash_hash_undefined__' : g, this;
    };
}), b.register('eKO3L', function(c, d) {
    var e = b('p7YqZ');
    c.exports = function(f) {
        var g = e(this, f).delete(f);
        return this.size -= g ? 1 : 0, g;
    };
}), b.register('p7YqZ', function(c, d) {
    var e = b('zxSld0');
    c.exports = function(f, g) {
        var h = f.__data__;
        return e(g) ? h['string' == typeof g ? 'string' : 'hash'] : h.map;
    };
}), b.register('zxSld0', function(c, d) {
    c.exports = function(e) {
        var f = typeof e;
        return 'string' == f || 'number' == f || 'symbol' == f || 'boolean' == f ? '__proto__' !== e : null === e;
    };
}), b.register('5z3k5', function(c, d) {
    var e = b('p7YqZ');
    c.exports = function(f) {
        return e(this, f).get(f);
    };
}), b.register('i3dC2', function(c, d) {
    var e = b('p7YqZ');
    c.exports = function(f) {
        return e(this, f).has(f);
    };
}), b.register('wSzrJ', function(c, d) {
    var e = b('p7YqZ');
    c.exports = function(f, g) {
        var h = e(this, f),
            i = h.size;
        return h.set(f, g), this.size += h.size == i ? 0 : 1, this;
    };
}), b.register('PwJKm', function(c, d) {
    var e = b('IdgqB'),
        f = b('18Cxu0'),
        g = b('n4ttj0');
    c.exports = function(h, i, j, k, l, _m) {
        var n = 1 & j,
            o = h.length,
            p = i.length;
        if (o != p && !(n && p > o))
            return !1;
        var q = _m.get(h),
            r = _m.get(i);
        if (q && r)
            return q == i && r == h;
        var s = -1,
            t = !0,
            u = 2 & j ? new e() : void 0;
        for (_m.set(h, i), _m.set(i, h); ++s < o;) {
            var v = h[s],
                w = i[s];
            if (k)
                var x = n ? k(w, v, s, i, h, _m) : k(v, w, s, h, i, _m);
            if (void 0 !== _w) {
                if (_w)
                    continue;
                t = !1;
                break;
            }
            if (u) {
                if (!f(i, function(x, y) {
                        if (!g(u, y) && (v === x || l(v, x, j, k, _m)))
                            return u.push(y);
                    })) {
                    t = !1;
                    break;
                }
            } else if (v !== w && !l(v, w, j, k, _m)) {
                t = !1;
                break;
            }
        }
        return _m.delete(h), _m.delete(i), t;
    };
}), b.register('IdgqB', function(c, d) {
    var e = b('HYmse'),
        f = b('hOQD10'),
        g = b('f/HZ71');

    function h(i) {
        var j = -1,
            k = null == i ? 0 : i.length;
        for (this.__data__ = new e(); ++j < k;)
            this.add(i[j]);
    }
    _h.prototype.add = _h.prototype.push = f, _h.prototype.has = g, c.exports = _h;
}), b.register('hOQD10', function(c, d) {
    c.exports = function(e) {
        return this.__data__.set(e, '__lodash_hash_undefined__'), this;
    };
}), b.register('f/HZ71', function(c, d) {
    c.exports = function(e) {
        return this.__data__.has(e);
    };
}), b.register('18Cxu0', function(c, d) {
    c.exports = function(e, f) {
        for (var g = -1, h = null == e ? 0 : e.length; ++g < h;)
            if (f(e[g], g, e))
                return !0;
        return !1;
    };
}), b.register('n4ttj0', function(c, d) {
    c.exports = function(e, f) {
        return e.has(f);
    };
}), b.register('r5CRs', function(c, d) {
    var e = b('h30YM'),
        f = b('inZue'),
        g = b('A4nXK0'),
        _h = b('PwJKm'),
        i = b('jwEKP0'),
        j = b('5jvg50'),
        k = e ? e.prototype : void 0,
        l = k ? k.valueOf : void 0;
    c.exports = function(m, n, o, p, q, r, s) {
        switch (o) {
            case '[object DataView]':
                if (m.byteLength != n.byteLength || m.byteOffset != n.byteOffset)
                    return !1;
                m = m.buffer, n = n.buffer;
            case '[object ArrayBuffer]':
                return !(m.byteLength != n.byteLength || !r(new f(m), new f(n)));
            case '[object Boolean]':
            case '[object Date]':
            case '[object Number]':
                return g(+m, +n);
            case '[object Error]':
                return m.name == n.name && m.message == n.message;
            case '[object RegExp]':
            case '[object String]':
                return m == n + '';
            case '[object Map]':
                var t = i;
            case '[object Set]':
                var u = 1 & p;
                if (t || (t = j), m.size != n.size && !u)
                    return !1;
                var v = s.get(m);
                if (v)
                    return v == n;
                p |= 2, s.set(m, n);
                var w = _h(t(m), t(n), p, q, r, s);
                return s.delete(m), w;
            case '[object Symbol]':
                if (l)
                    return l.call(m) == l.call(n);
        }
        return !1;
    };
}), b.register('inZue', function(c, d) {
    var e = b('5iSxB').Uint8Array;
    c.exports = e;
}), b.register('jwEKP0', function(c, d) {
    c.exports = function(e) {
        var f = -1,
            g = Array(e.size);
        return e.forEach(function(h, i) {
            g[++f] = [
                i,
                h
            ];
        }), g;
    };
}), b.register('5jvg50', function(c, d) {
    c.exports = function(e) {
        var f = -1,
            g = Array(e.size);
        return e.forEach(function(h) {
            g[++f] = h;
        }), g;
    };
}), b.register('Ep7jZ', function(c, d) {
    var e = b('NeGJY'),
        f = Object.prototype.hasOwnProperty;
    c.exports = function(g, h, i, j, k, l) {
        var m = 1 & i,
            n = e(g),
            o = n.length;
        if (o != e(h).length && !m)
            return !1;
        for (var p = o; p--;) {
            var q = n[p];
            if (!(m ? q in h : f.call(h, q)))
                return !1;
        }
        var q = l.get(g),
            r = l.get(h);
        if (q && r)
            return q == h && r == g;
        var s = !0;
        l.set(g, h), l.set(h, g);
        for (var t = m; ++p < o;) {
            var u = g[_q = n[p]],
                v = h[_q];
            if (j)
                var _w = m ? j(v, u, _q, h, g, l) : j(u, v, _q, g, h, l);
            if (!(void 0 === _u ? u === v || k(u, v, i, j, l) : _u)) {
                s = !1;
                break;
            }
            t || (t = 'constructor' == _q);
        }
        if (s && !t) {
            var u = g.constructor,
                v = h.constructor;
            u == v || !('constructor' in g) || !('constructor' in h) || 'function' == typeof u && u instanceof u && 'function' == typeof v && v instanceof v || (s = !1);
        }
        return l.delete(g), l.delete(h), s;
    };
}), b.register('NeGJY', function(c, d) {
    var e = b('lbShq'),
        f = b('YgF6l'),
        g = b('PccoD');
    c.exports = function(h) {
        return e(h, g, f);
    };
}), b.register('lbShq', function(c, d) {
    var e = b('iiZUc0'),
        f = b('iieiP0');
    c.exports = function(g, h, i) {
        var j = h(g);
        return f(g) ? j : e(j, i(g));
    };
}), b.register('iiZUc0', function(c, d) {
    c.exports = function(e, f) {
        for (var g = -1, h = f.length, i = e.length; ++g < h;)
            e[i + g] = f[g];
        return e;
    };
}), b.register('iieiP0', function(c, d) {
    var e = Array.isArray;
    c.exports = e;
}), b.register('YgF6l', function(c, d) {
    var e = b('40SOT0'),
        f = b('uJCaV0'),
        g = Object.prototype.propertyIsEnumerable,
        h = Object.getOwnPropertySymbols,
        i = h ? function(j) {
            return null == j ? [] : (j = Object(j), e(h(j), function(k) {
                return g.call(j, k);
            }));
        } : f;
    c.exports = i;
}), b.register('40SOT0', function(c, d) {
    c.exports = function(e, f) {
        for (var g = -1, h = null == e ? 0 : e.length, i = 0, j = []; ++g < h;) {
            var k = e[g];
            f(k, g, e) && (j[i++] = k);
        }
        return j;
    };
}), b.register('uJCaV0', function(c, d) {
    c.exports = function() {
        return [];
    };
}), b.register('PccoD', function(c, d) {
    var e = b('wgxyA'),
        f = b('1O+jW'),
        g = b('N1KO3');
    c.exports = function(h) {
        return g(h) ? e(h) : f(h);
    };
}), b.register('wgxyA', function(c, d) {
    var e = b('LEflv0'),
        f = b('p0Jhe'),
        g = b('iieiP0'),
        h = b('Gf8fT'),
        i = b('/Zt+X0'),
        j = b('n6UXS'),
        k = Object.prototype.hasOwnProperty;
    c.exports = function(l, m) {
        var n = g(l),
            o = !n && f(l),
            p = !n && !o && h(l),
            _q = !n && !o && !p && j(l),
            r = n || o || p || _q,
            s = r ? e(l.length, String) : [],
            t = s.length;
        for (var u in l)
            !m && !k.call(l, u) || r && ('length' == u || p && ('offset' == u || 'parent' == u) || _q && ('buffer' == u || 'byteLength' == u || 'byteOffset' == u) || i(u, t)) || s.push(u);
        return s;
    };
}), b.register('LEflv0', function(c, d) {
    c.exports = function(e, f) {
        for (var g = -1, h = Array(e); ++g < e;)
            h[g] = f(g);
        return h;
    };
}), b.register('p0Jhe', function(c, d) {
    var e = b('GxPay'),
        f = b('pQneJ0'),
        g = Object.prototype,
        h = g.hasOwnProperty,
        i = g.propertyIsEnumerable,
        j = e(function() {
            return arguments;
        }()) ? e : function(k) {
            return f(k) && h.call(k, 'callee') && !i.call(k, 'callee');
        };
    c.exports = j;
}), b.register('GxPay', function(c, d) {
    var e = b('5H2CR'),
        f = b('pQneJ0');
    c.exports = function(g) {
        return f(g) && '[object Arguments]' == e(g);
    };
}), b.register('pQneJ0', function(c, d) {
    c.exports = function(e) {
        return null != e && 'object' == typeof e;
    };
}), b.register('Gf8fT', function(c, d) {
    var e = b('5iSxB'),
        f = b('WN3Ih0'),
        g = d && !d.nodeType && d,
        h = g && c && !c.nodeType && c,
        i = h && h.exports === g ? e.Buffer : void 0,
        j = (i ? i.isBuffer : void 0) || f;
    c.exports = j;
}), b.register('WN3Ih0', function(c, d) {
    c.exports = function() {
        return !1;
    };
}), b.register('/Zt+X0', function(c, d) {
    var e = /^(?:0|[1-9]\d*)$/;
    c.exports = function(f, g) {
        var h = typeof f;
        return !!(g = null == g ? 9007199254740991 : g) && ('number' == h || 'symbol' != h && e.test(f)) && f > -1 && f % 1 == 0 && f < g;
    };
}), b.register('n6UXS', function(c, d) {
    var e = b('XYFbL'),
        f = b('FZyDp0'),
        g = b('E977Y'),
        h = g && g.isTypedArray,
        i = h ? f(h) : e;
    c.exports = i;
}), b.register('XYFbL', function(c, d) {
    var e = b('5H2CR'),
        f = b('IMuy/0'),
        g = b('pQneJ0'),
        h = {};
    h['[object Float32Array]'] = h['[object Float64Array]'] = h['[object Int8Array]'] = h['[object Int16Array]'] = h['[object Int32Array]'] = h['[object Uint8Array]'] = h['[object Uint8ClampedArray]'] = h['[object Uint16Array]'] = h['[object Uint32Array]'] = !0, h['[object Arguments]'] = h['[object Array]'] = h['[object ArrayBuffer]'] = h['[object Boolean]'] = h['[object DataView]'] = h['[object Date]'] = h['[object Error]'] = h['[object Function]'] = h['[object Map]'] = h['[object Number]'] = h['[object Object]'] = h['[object RegExp]'] = h['[object Set]'] = h['[object String]'] = h['[object WeakMap]'] = !1, c.exports = function(i) {
        return g(i) && f(i.length) && !!h[e(i)];
    };
}), b.register('IMuy/0', function(c, d) {
    c.exports = function(e) {
        return 'number' == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991;
    };
}), b.register('FZyDp0', function(c, d) {
    c.exports = function(e) {
        return function(f) {
            return e(f);
        };
    };
}), b.register('E977Y', function(c, d) {
    var e = b('7TZWs0'),
        f = d && !d.nodeType && d,
        g = f && c && !c.nodeType && c,
        h = g && g.exports === f && e.process,
        i = function() {
            try {
                var j = g && g.require && g.require('util').types;
                return j || h && h.binding && h.binding('util');
            } catch (c) {}
        }();
    c.exports = i;
}), b.register('1O+jW', function(c, d) {
    var e = b('cbabg0'),
        f = b('4X8JI'),
        g = Object.prototype.hasOwnProperty;
    c.exports = function(h) {
        if (!e(h))
            return f(h);
        var i = [];
        for (var j in Object(h))
            g.call(h, j) && 'constructor' != j && i.push(j);
        return i;
    };
}), b.register('cbabg0', function(c, d) {
    var e = Object.prototype;
    c.exports = function(f) {
        var g = f && f.constructor;
        return f === ('function' == typeof g && g.prototype || e);
    };
}), b.register('4X8JI', function(c, d) {
    var e = b('ySAQc0')(Object.keys, Object);
    c.exports = e;
}), b.register('ySAQc0', function(c, d) {
    c.exports = function(e, f) {
        return function(g) {
            return e(f(g));
        };
    };
}), b.register('N1KO3', function(c, d) {
    var e = b('4R9wH'),
        f = b('IMuy/0');
    c.exports = function(g) {
        return null != g && f(g.length) && !e(g);
    };
}), b.register('QamRV', function(c, d) {
    var e = b('ijN5t'),
        f = b('/t62W'),
        g = b('V85Oi'),
        h = b('Mtx8k'),
        i = b('dKnkR'),
        j = b('5H2CR'),
        k = b('1de4n0'),
        l = '[object Map]',
        m = '[object Promise]',
        n = '[object Set]',
        o = '[object WeakMap]',
        p = '[object DataView]',
        q = k(e),
        r = k(f),
        s = k(g),
        t = k(h),
        _u = k(i),
        v = j;
    (e && v(new e(new ArrayBuffer(1))) != p || f && v(new f()) != l || g && v(g.resolve()) != m || h && v(new h()) != n || i && v(new i()) != o) && (v = function(w) {
        var x = j(w),
            y = '[object Object]' == x ? w.constructor : void 0,
            z = y ? k(y) : '';
        if (z)
            switch (z) {
                case q:
                    return p;
                case r:
                    return l;
                case s:
                    return m;
                case t:
                    return n;
                case _u:
                    return o;
            }
        return x;
    }), c.exports = v;
}), b.register('ijN5t', function(c, d) {
    var e = b('GlOk0')(b('5iSxB'), 'DataView');
    c.exports = e;
}), b.register('V85Oi', function(c, d) {
    var e = b('GlOk0')(b('5iSxB'), 'Promise');
    c.exports = e;
}), b.register('Mtx8k', function(c, d) {
    var e = b('GlOk0')(b('5iSxB'), 'Set');
    c.exports = e;
}), b.register('dKnkR', function(c, d) {
    var e = b('GlOk0')(b('5iSxB'), 'WeakMap');
    c.exports = e;
}), b.register('gChmk', function(c, d) {
    _n(c.exports, 'default', function() {
        return _f;
    }), _n(c.exports, 'translateStyle', function() {
        return b('w9p5I').translateStyle;
    });
    var e = b('gLixs'),
        _f = (b('r7h41'), b('w9p5I'), b('nHCdZ'), e.default);
}), b.register('gLixs', function(c, d) {
    _n(c.exports, 'default', function() {
        return _m;
    });
    var e = b('LEQ5w'),
        f = b('WPpLv'),
        g = b('eVkZg'),
        h = b('LSeKp'),
        i = b('r7h41'),
        j = b('2QSG+'),
        k = b('w9p5I');

    function l(m) {
        return l = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(n) {
            return typeof n;
        } : function(n) {
            return n && 'function' == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? 'symbol' : typeof n;
        }, l(m);
    }

    function l(m, _n) {
        if (null == m)
            return {};
        var o, p, q = function(r, s) {
            if (null == r)
                return {};
            var t, u, v = {},
                w = Object.keys(r);
            for (u = 0; u < w.length; u++)
                t = w[u], s.indexOf(t) >= 0 || (v[t] = r[t]);
            return v;
        }(m, _n);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(m);
            for (p = 0; p < r.length; p++)
                o = r[p], _n.indexOf(o) >= 0 || Object.prototype.propertyIsEnumerable.call(m, o) && (q[o] = m[o]);
        }
        return q;
    }

    function l(m) {
        return function(n) {
            if (Array.isArray(n))
                return _l(n);
        }(m) || function(n) {
            if ('undefined' != typeof Symbol && Symbol.iterator in Object(n))
                return Array.from(n);
        }(m) || function(n, o) {
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
        }(m) || function() {
            throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }

    function _l(m, n) {
        (null == n || n > m.length) && (n = m.length);
        for (var o = 0, p = new Array(n); o < n; o++)
            p[o] = m[o];
        return p;
    }

    function l(m, n) {
        var o = Object.keys(m);
        if (Object.getOwnPropertySymbols) {
            var p = Object.getOwnPropertySymbols(m);
            n && (p = p.filter(function(q) {
                return Object.getOwnPropertyDescriptor(m, q).enumerable;
            })), o.push.apply(o, p);
        }
        return o;
    }

    function l(m) {
        for (var n = 1; n < arguments.length; n++) {
            var o = null != arguments[n] ? arguments[n] : {};
            n % 2 ? _M(Object(o), !0).forEach(function(p) {
                _l(m, p, o[p]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(m, Object.getOwnPropertyDescriptors(o)) : _M(Object(o)).forEach(function(p) {
                Object.defineProperty(m, p, Object.getOwnPropertyDescriptor(o, p));
            });
        }
        return m;
    }

    function _l(m, n, o) {
        return n in m ? Object.defineProperty(m, n, {
            value: o,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : m[n] = o, m;
    }

    function l(m, n) {
        for (var o = 0; o < n.length; o++) {
            var p = n[o];
            p.enumerable = p.enumerable || !1, p.configurable = !0, 'value' in p && (p.writable = !0), Object.defineProperty(m, p.key, p);
        }
    }

    function l(m, n) {
        return l = Object.setPrototypeOf || function(o, p) {
            return o.__proto__ = p, o;
        }, l(m, n);
    }

    function l(m) {
        var n = function() {
            if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ('function' == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
            } catch (m) {
                return !1;
            }
        }();
        return function() {
            var o, p = _l(m);
            if (n) {
                var q = _l(this).constructor;
                o = Reflect.construct(p, arguments, q);
            } else
                o = p.apply(this, arguments);
            return _l(this, o);
        };
    }

    function _l(m, n) {
        return !n || 'object' !== _r(n) && 'function' != typeof n ? _l(m) : n;
    }

    function _l(m) {
        if (void 0 === m)
            throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return m;
    }

    function _l(m) {
        return _l = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
            return n.__proto__ || Object.getPrototypeOf(n);
        }, _l(m);
    }
    var l = function(m) {
        ! function(n, o) {
            if ('function' != typeof o && null !== o)
                throw new TypeError('Super expression must either be null or a function');
            n.prototype = Object.create(o && o.prototype, {
                constructor: {
                    value: n,
                    writable: !0,
                    configurable: !0
                }
            }), o && _m(n, o);
        }(_r, m);
        var n, o, p, q = _n(_r);

        function _r(s, t) {
            var u;
            ! function(v, w) {
                if (!(v instanceof w))
                    throw new TypeError('Cannot call a class as a function');
            }(this, _r);
            var v = (u = q.call(this, s, t)).props,
                w = v.isActive,
                x = v.attributeName,
                y = v.from,
                z = v.to,
                A = v.steps,
                B = v.children;
            if (u.handleStyleChange = u.handleStyleChange.bind(_p(u)), u.changeStyle = u.changeStyle.bind(_p(u)), !w)
                return u.state = {
                    style: {}
                }, 'function' == typeof B && (u.state = {
                    style: z
                }), _o(u);
            if (A && A.length)
                u.state = {
                    style: A[0].style
                };
            else if (y) {
                if ('function' == typeof B)
                    return u.state = {
                        style: y
                    }, _o(u);
                u.state = {
                    style: x ? _l({}, x, y) : y
                };
            } else
                u.state = {
                    style: {}
                };
            return u;
        }
        return n = _J, (o = [{
                key: 'componentDidMount',
                value: function() {
                    var r = this.props,
                        s = r.isActive,
                        t = r.canBegin;
                    this.mounted = !0, s && t && this.runAnimation(this.props);
                }
            },
            {
                key: 'componentDidUpdate',
                value: function(r) {
                    var s = this.props,
                        t = s.isActive,
                        u = s.canBegin,
                        v = s.attributeName,
                        w = s.shouldReAnimate;
                    if (u)
                        if (t) {
                            if (!((0, g.deepEqual)(r.to, this.props.to) && r.canBegin && r.isActive)) {
                                var x = !r.canBegin || !r.isActive;
                                this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
                                var y = x || w ? this.props.from : r.to;
                                if (this.state && this.state.style) {
                                    var z = {
                                        style: v ? _l({}, v, y) : y
                                    };
                                    (v && this.state.style[v] !== y || !v && this.state.style !== y) && this.setState(z);
                                }
                                this.runAnimation(_k(_k({}, this.props), {}, {
                                    from: y,
                                    begin: 0
                                }));
                            }
                        } else {
                            var x = {
                                style: v ? _l({}, v, this.props.to) : this.props.to
                            };
                            this.state && this.state.style && (v && this.state.style[v] !== this.props.to || !v && this.state.style !== this.props.to) && this.setState(x);
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
                value: function(r) {
                    var s = this,
                        t = r.from,
                        u = r.to,
                        v = r.duration,
                        w = r.easing,
                        x = r.begin,
                        y = r.onAnimationEnd,
                        z = r.onAnimationStart,
                        A = (0, j.default)(t, u, (0, i.configEasing)(w), v, this.changeStyle);
                    this.manager.start([
                        z,
                        x,
                        function() {
                            s.stopJSAnimation = A();
                        },
                        v,
                        y
                    ]);
                }
            },
            {
                key: 'runStepAnimation',
                value: function(r) {
                    var s = this,
                        t = r.steps,
                        u = r.begin,
                        v = r.onAnimationStart,
                        w = t[0],
                        x = w.style,
                        y = w.duration,
                        z = void 0 === y ? 0 : y;
                    return this.manager.start([v].concat(_D(t.reduce(function(A, B, C) {
                        if (0 === C)
                            return A;
                        var D = B.duration,
                            E = B.easing,
                            F = void 0 === E ? 'ease' : E,
                            G = B.style,
                            H = B.properties,
                            I = B.onAnimationEnd,
                            _J = C > 0 ? t[C - 1] : B,
                            K = H || Object.keys(G);
                        if ('function' == typeof F || 'spring' === F)
                            return [].concat(_D(A), [
                                s.runJSAnimation.bind(s, {
                                    from: _J.style,
                                    to: G,
                                    duration: D,
                                    easing: F
                                }),
                                D
                            ]);
                        var L = (0, k.getTransitionVal)(K, D, F),
                            _M = _k(_k(_k({}, _J.style), G), {}, {
                                transition: L
                            });
                        return [].concat(_D(A), [
                            _M,
                            D,
                            I
                        ]).filter(k.identity);
                    }, [
                        x,
                        Math.max(z, u)
                    ])), [r.onAnimationEnd]));
                }
            },
            {
                key: 'runAnimation',
                value: function(r) {
                    this.manager || (this.manager = (0, h.default)());
                    var s = r.begin,
                        t = r.duration,
                        u = r.attributeName,
                        v = r.to,
                        w = r.easing,
                        x = r.onAnimationStart,
                        y = r.onAnimationEnd,
                        z = r.steps,
                        A = r.children,
                        B = this.manager;
                    if (this.unSubscribe = B.subscribe(this.handleStyleChange), 'function' != typeof w && 'function' != typeof A && 'spring' !== w)
                        if (z.length > 1)
                            this.runStepAnimation(r);
                        else {
                            var C = u ? _l({}, u, v) : v,
                                _D = (0, k.getTransitionVal)(Object.keys(C), t, w);
                            B.start([
                                x,
                                s,
                                _k(_k({}, C), {}, {
                                    transition: _D
                                }),
                                t,
                                y
                            ]);
                        }
                    else
                        this.runJSAnimation(r);
                }
            },
            {
                key: 'handleStyleChange',
                value: function(r) {
                    this.changeStyle(r);
                }
            },
            {
                key: 'changeStyle',
                value: function(r) {
                    this.mounted && this.setState({
                        style: r
                    });
                }
            },
            {
                key: 'render',
                value: function() {
                    var r = this.props,
                        s = r.children,
                        t = (r.begin, r.duration, r.attributeName, r.easing, r.isActive),
                        u = (r.steps, r.from, r.to, r.canBegin, r.onAnimationEnd, r.shouldReAnimate, r.onAnimationReStart, _j(r, [
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
                        v = e.Children.count(s),
                        w = (0, k.translateStyle)(this.state.style);
                    if ('function' == typeof s)
                        return s(w);
                    if (!t || 0 === v)
                        return s;
                    var x = function(y) {
                        var z = y.props,
                            A = z.style,
                            B = void 0 === A ? {} : A,
                            C = z.className;
                        return (0, e.cloneElement)(y, _k(_k({}, u), {}, {
                            style: _k(_k({}, B), w),
                            className: C
                        }));
                    };
                    return 1 === v ? x(e.Children.only(s)) : _y(e).createElement('div', null, e.Children.map(s, function(_y) {
                        return x(_y);
                    }));
                }
            }
        ]) && _m(n.prototype, o), p && _m(n, p), _i;
    }(e.PureComponent);
    l.displayName = 'Animate', l.propTypes = {
        from: _c(f).oneOfType([
            _c(f).object,
            _c(f).string
        ]),
        to: _c(f).oneOfType([
            _c(f).object,
            _c(f).string
        ]),
        attributeName: _c(f).string,
        duration: _c(f).number,
        begin: _c(f).number,
        easing: _c(f).oneOfType([
            _c(f).string,
            _c(f).func
        ]),
        steps: _c(f).arrayOf(_c(f).shape({
            duration: _c(f).number.isRequired,
            style: _c(f).object.isRequired,
            easing: _c(f).oneOfType([
                _c(f).oneOf([
                    'ease',
                    'ease-in',
                    'ease-out',
                    'ease-in-out',
                    'linear'
                ]),
                _c(f).func
            ]),
            properties: _c(f).arrayOf('string'),
            onAnimationEnd: _c(f).func
        })),
        children: _c(f).oneOfType([
            _c(f).node,
            _c(f).func
        ]),
        isActive: _c(f).bool,
        canBegin: _c(f).bool,
        onAnimationEnd: _c(f).func,
        shouldReAnimate: _c(f).bool,
        onAnimationStart: _c(f).func,
        onAnimationReStart: _c(f).func
    }, l.defaultProps = {
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
    var _m = l;
}), b.register('eVkZg', function(_c, d) {
    _c.exports,
        function(e) {
            var f = 'function' == typeof WeakSet,
                g = Object.keys;

            function h(i, j) {
                return i === j || i != i && j != j;
            }

            function h(i) {
                return i.constructor === Object || null == i.constructor;
            }

            function h(i) {
                return !!i && 'function' == typeof i.then;
            }

            function h(i) {
                return !(!i || !i.$$typeof);
            }

            function h() {
                var i = [];
                return {
                    add: function(j) {
                        i.push(j);
                    },
                    has: function(j) {
                        return -1 !== i.indexOf(j);
                    }
                };
            }
            var h = f ? function() {
                return new WeakSet();
            } : _s;

            function i(j) {
                return function(k) {
                    var l = j || k;
                    return function(m, n, o) {
                        void 0 === o && (o = h());
                        var p = !!m && 'object' == typeof m,
                            q = !!n && 'object' == typeof n;
                        if (p || q) {
                            var r = p && o.has(m),
                                _s = q && o.has(n);
                            if (r || _s)
                                return r && _s;
                            p && o.add(m), q && o.add(n);
                        }
                        return l(m, n, o);
                    };
                };
            }

            function i(j, k, l, m) {
                var n = j.length;
                if (k.length !== n)
                    return !1;
                for (; n-- > 0;)
                    if (!l(j[n], k[n], m))
                        return !1;
                return !0;
            }

            function i(j, k, l, m) {
                var n = j.size === k.size;
                if (n && j.size) {
                    var o = {};
                    j.forEach(function(p, q) {
                        if (n) {
                            var r = !1,
                                s = 0;
                            k.forEach(function(t, u) {
                                r || o[s] || (r = l(q, u, m) && l(p, t, m)) && (o[s] = !0), s++;
                            }), n = r;
                        }
                    });
                }
                return n;
            }
            var _i = '_owner',
                _j = Function.prototype.bind.call(Function.prototype.call, Object.prototype.hasOwnProperty);

            function k(l, m, n, o) {
                var p = g(l),
                    q = p.length;
                if (g(m).length !== q)
                    return !1;
                if (q)
                    for (var r = void 0; q-- > 0;) {
                        if ((r = p[q]) === _i) {
                            var s = _s(l),
                                t = _s(m);
                            if ((s || t) && s !== t)
                                return !1;
                        }
                        if (!_j(m, r) || !n(l[r], m[r], o))
                            return !1;
                    }
                return !0;
            }

            function k(l, m) {
                return l.source === m.source && l.global === m.global && l.ignoreCase === m.ignoreCase && l.multiline === m.multiline && l.unicode === m.unicode && l.sticky === m.sticky && l.lastIndex === m.lastIndex;
            }

            function k(l, m, n, o) {
                var p = l.size === m.size;
                if (p && l.size) {
                    var q = {};
                    l.forEach(function(r) {
                        if (p) {
                            var _s = !1,
                                t = 0;
                            m.forEach(function(u) {
                                _s || q[t] || (_s = n(r, u, o)) && (q[t] = !0), t++;
                            }), p = _s;
                        }
                    });
                }
                return p;
            }
            var _k = 'function' == typeof Map,
                _l = 'function' == typeof Set;

            function _m(n) {
                var o = 'function' == typeof n ? n(g) : g;

                function p(q, r, s) {
                    if (q === r)
                        return !0;
                    if (q && r && 'object' == typeof q && 'object' == typeof r) {
                        if (_e(q) && _e(r))
                            return _k(q, r, o, s);
                        var t = Array.isArray(q),
                            u = Array.isArray(r);
                        return t || u ? t === u && _g(q, r, o, s) : (t = q instanceof Date, u = r instanceof Date, t || u ? t === u && b(q.getTime(), r.getTime()) : (t = q instanceof RegExp, u = r instanceof RegExp, t || u ? t === u && _s(q, r) : _f(q) || _f(r) ? q === r : _k && (t = q instanceof Map, u = r instanceof Map, t || u) ? t === u && _h(q, r, o, s) : _l && (t = q instanceof Set, u = r instanceof Set, t || u) ? t === u && _t(q, r, o, s) : _k(q, r, o, s)));
                    }
                    return q != q && r != r;
                }
                return g;
            }
            var _m = _w(),
                _n = _w(function() {
                    return b;
                }),
                _o = _w(_m()),
                _p = _w(_m(b));
            e.circularDeepEqual = _o, e.circularShallowEqual = _p, e.createCustomEqual = _w, e.deepEqual = _m, e.sameValueZeroEqual = b, e.shallowEqual = _n, Object.defineProperty(e, '__esModule', {
                value: !0
            });
        }(_c.exports);
}), b.register('LSeKp', function(c, d) {
    _i(c.exports, 'default', function() {
        return _f;
    });
    var _e = b('CKs+h');

    function _f(g) {
        return _f = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(h) {
            return typeof h;
        } : function(h) {
            return h && 'function' == typeof Symbol && h.constructor === Symbol && h !== Symbol.prototype ? 'symbol' : typeof h;
        }, _f(g);
    }

    function f(g) {
        return function(h) {
            if (Array.isArray(h))
                return h;
        }(g) || function(h) {
            if ('undefined' != typeof Symbol && Symbol.iterator in Object(h))
                return Array.from(h);
        }(g) || function(h, _i) {
            if (!h)
                return;
            if ('string' == typeof h)
                return _f(h, _i);
            var j = Object.prototype.toString.call(h).slice(8, -1);
            'Object' === j && h.constructor && (j = h.constructor.name);
            if ('Map' === j || 'Set' === j)
                return Array.from(h);
            if ('Arguments' === j || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(j))
                return _f(h, _i);
        }(g) || function() {
            throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }

    function _f(g, h) {
        (null == h || h > g.length) && (h = g.length);
        for (var i = 0, j = new Array(h); i < h; i++)
            j[i] = g[i];
        return j;
    }

    function _f() {
        var g = function() {
                return null;
            },
            h = !1,
            i = function i(j) {
                if (!h) {
                    if (Array.isArray(j)) {
                        if (!j.length)
                            return;
                        var k = _o(j),
                            l = k[0],
                            _m = k.slice(1);
                        return 'number' == typeof l ? void(0, _e.default)(i.bind(null, _m), l) : (i(l), void(0, _e.default)(i.bind(null, _m)));
                    }
                    'object' === _f(j) && g(j), 'function' == typeof j && j();
                }
            };
        return {
            stop: function() {
                h = !0;
            },
            start: function(j) {
                h = !1, i(j);
            },
            subscribe: function(j) {
                return g = j,
                    function() {
                        g = function() {
                            return null;
                        };
                    };
            }
        };
    }
}), b.register('CKs+h', function(c, d) {
    function e(f) {
        var g = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            h = -1,
            i = function i(j) {
                h < 0 && (h = j), j - h > g ? (f(j), h = -1) : requestAnimationFrame(i);
            };
        requestAnimationFrame(i);
    }
    _h(c.exports, 'default', function() {
        return b;
    });
}), b.register('r7h41', function(c, d) {
    _h(c.exports, 'configEasing', function() {
        return _t;
    });
    var e = b('w9p5I');

    function _f(g, _h) {
        return function(i) {
            if (Array.isArray(i))
                return i;
        }(g) || function(i, j) {
            if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(i)))
                return;
            var k = [],
                l = !0,
                m = !1,
                n = void 0;
            try {
                for (var _o, p = i[Symbol.iterator](); !(l = (_o = p.next()).done) && (k.push(_o.value), !j || k.length !== j); l = !0);
            } catch (i) {
                m = !0, n = i;
            } finally {
                try {
                    l || null == _f.return || _f.return();
                } finally {
                    if (m)
                        throw n;
                }
            }
            return k;
        }(g, _h) || _f(g, _h) || function() {
            throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }

    function f(g) {
        return function(h) {
            if (Array.isArray(h))
                return _f(h);
        }(g) || function(h) {
            if ('undefined' != typeof Symbol && Symbol.iterator in Object(h))
                return Array.from(h);
        }(g) || _f(g) || function() {
            throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }

    function _f(g, h) {
        if (g) {
            if ('string' == typeof g)
                return _f(g, h);
            var i = Object.prototype.toString.call(g).slice(8, -1);
            return 'Object' === i && g.constructor && (i = g.constructor.name), 'Map' === i || 'Set' === i ? Array.from(g) : 'Arguments' === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? _f(g, h) : void 0;
        }
    }

    function _f(g, h) {
        (null == h || h > g.length) && (h = g.length);
        for (var i = 0, j = new Array(h); i < h; i++)
            j[i] = g[i];
        return j;
    }
    var f = 0.0001,
        _g = function(h, i) {
            return [
                0,
                3 * h,
                3 * i - 6 * h,
                3 * h - 3 * i + 1
            ];
        },
        _h = function(i, j) {
            return i.map(function(k, l) {
                return k * Math.pow(j, l);
            }).reduce(function(k, l) {
                return k + l;
            });
        },
        i = function(j, k) {
            return function(l) {
                var m = _g(j, k);
                return _h(m, l);
            };
        },
        j = function(k, l) {
            return function(m) {
                var n = _g(k, l),
                    o = [].concat(_p(n.map(function(p, q) {
                        return p * q;
                    }).slice(1)), [0]);
                return _h(o, m);
            };
        },
        _k = function() {
            for (var l = arguments.length, m = new Array(l), n = 0; n < l; n++)
                m[n] = arguments[n];
            var o = m[0],
                _p = m[1],
                q = m[2],
                r = m[3];
            if (1 === m.length)
                switch (m[0]) {
                    case 'linear':
                        o = 0, _p = 0, q = 1, r = 1;
                        break;
                    case 'ease':
                        o = 0.25, _p = 0.1, q = 0.25, r = 1;
                        break;
                    case 'ease-in':
                        o = 0.42, _p = 0, q = 1, r = 1;
                        break;
                    case 'ease-out':
                        o = 0.42, _p = 0, q = 0.58, r = 1;
                        break;
                    case 'ease-in-out':
                        o = 0, _p = 0, q = 0.58, r = 1;
                        break;
                    default:
                        var s = m[0].split('(');
                        if ('cubic-bezier' === s[0] && 4 === s[1].split(')')[0].split(',').length) {
                            var t = s[1].split(')')[0].split(',').map(function(u) {
                                    return parseFloat(u);
                                }),
                                u = _C(t, 4);
                            o = u[0], _p = u[1], q = u[2], r = u[3];
                        } else
                            (0, e.warn)(!1, '[configBezier]: arguments should be one of oneOf \'linear\', \'ease\', \'ease-in\', \'ease-out\', \'ease-in-out\',\'cubic-bezier(x1,y1,x2,y2)\', instead received %s', m);
                }
                (0, e.warn)([
                    o,
                    q,
                    _p,
                    r
                ].every(function(s) {
                    return 'number' == typeof s && s >= 0 && s <= 1;
                }), '[configBezier]: arguments should be x1, y1, x2, y2 of [0, 1] instead received %s', m);
            var _s = i(o, q),
                _t = i(_p, r),
                u = j(o, q),
                v = function(w) {
                    return w > 1 ? 1 : w < 0 ? 0 : w;
                },
                _w = function(x) {
                    for (var y = x > 1 ? 1 : x, z = y, A = 0; A < 8; ++A) {
                        var B = _s(z) - y,
                            _C = u(z);
                        if (Math.abs(B - y) < f || _C < f)
                            return _t(z);
                        z = v(z - B / _C);
                    }
                    return _t(z);
                };
            return _w.isStepper = !1, _w;
        },
        l = function() {
            var m = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                n = m.stiff,
                o = void 0 === n ? 100 : n,
                p = m.damping,
                q = void 0 === p ? 8 : p,
                r = m.dt,
                s = void 0 === r ? 17 : r,
                t = function(u, v, w) {
                    var x = w + (-(u - v) * o - w * q) * s / 1000,
                        y = w * s / 1000 + u;
                    return Math.abs(y - v) < f && Math.abs(x) < f ? [
                        v,
                        0
                    ] : [
                        y,
                        x
                    ];
                };
            return t.isStepper = !0, t.dt = s, t;
        },
        m = function() {
            for (var n = arguments.length, o = new Array(n), p = 0; p < n; p++)
                o[p] = arguments[p];
            var q = o[0];
            if ('string' == typeof q)
                switch (q) {
                    case 'ease':
                    case 'ease-in-out':
                    case 'ease-out':
                    case 'ease-in':
                    case 'linear':
                        return _k(q);
                    case 'spring':
                        return l();
                    default:
                        if ('cubic-bezier' === q.split('(')[0])
                            return _k(q);
                        (0, e.warn)(!1, '[configEasing]: first argument should be one of \'ease\', \'ease-in\', \'ease-out\', \'ease-in-out\',\'cubic-bezier(x1,y1,x2,y2)\', \'linear\' and \'spring\', instead  received %s', o);
                }
            return 'function' == typeof q ? q : ((0, e.warn)(!1, '[configEasing]: first argument type should be function or string, instead received %s', o), null);
        };
}), b.register('w9p5I', function(c, d) {
    function e(f, g) {
        var h = Object.keys(f);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(f);
            g && (i = i.filter(function(j) {
                return Object.getOwnPropertyDescriptor(f, j).enumerable;
            })), h.push.apply(h, i);
        }
        return h;
    }

    function e(f) {
        for (var g = 1; g < arguments.length; g++) {
            var h = null != arguments[g] ? arguments[g] : {};
            g % 2 ? b(Object(h), !0).forEach(function(i) {
                _e(f, i, h[i]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(f, Object.getOwnPropertyDescriptors(h)) : b(Object(h)).forEach(function(i) {
                Object.defineProperty(f, i, Object.getOwnPropertyDescriptor(h, i));
            });
        }
        return f;
    }

    function _e(f, g, h) {
        return g in f ? Object.defineProperty(f, g, {
            value: h,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : f[g] = h, f;
    }
    _j(c.exports, 'getIntersectionKeys', function() {
        return _h;
    }), _j(c.exports, 'identity', function() {
        return _i;
    }), _j(c.exports, 'mapObject', function() {
        return _j;
    }), _j(c.exports, 'translateStyle', function() {
        return _k;
    }), _j(c.exports, 'getTransitionVal', function() {
        return _l;
    }), _j(c.exports, 'warn', function() {
        return _m;
    });
    var e = [
            'Webkit',
            'Moz',
            'O',
            'ms'
        ],
        f = [
            '-webkit-',
            '-moz-',
            '-o-',
            '-ms-'
        ],
        g = [
            'transform',
            'transformOrigin',
            'transition'
        ],
        _h = function(i, _j) {
            return [
                Object.keys(i),
                Object.keys(_j)
            ].reduce(function(k, l) {
                return k.filter(function(m) {
                    return l.includes(m);
                });
            });
        },
        _i = function(j) {
            return j;
        },
        _j = function(k, l) {
            return Object.keys(l).reduce(function(m, n) {
                return _r(_r({}, m), {}, _s({}, n, k(n, l[n])));
            }, {});
        },
        _k = function(l) {
            return Object.keys(l).reduce(function(m, n) {
                return _r(_r({}, m), function(o, p) {
                    if (-1 === g.indexOf(o))
                        return _s({}, o, p);
                    var q = 'transition' === o,
                        r = o.replace(/(\w)/, function(s) {
                            return s.toUpperCase();
                        }),
                        s = p;
                    return e.reduce(function(t, u, v) {
                        return q && (s = p.replace(/(transform|transform-origin)/gim, ''.concat(f[v], '$1'))), _r(_r({}, t), {}, _s({}, u + r, s));
                    }, {});
                }(n, m[n]));
            }, l);
        },
        _l = function(m, n, o) {
            return m.map(function(p) {
                return ''.concat((b = p, b.replace(/([A-Z])/g, function(q) {
                    return '-'.concat(q.toLowerCase());
                })), ' ').concat(n, 'ms ').concat(o);
                var q;
            }).join(',');
        },
        _m = function(n, o, p, q, _r, _s, t, u) {};
}), b.register('2QSG+', function(c, d) {
    _h(c.exports, 'default', function() {
        return _i;
    });
    var e = b('w9p5I');

    function f(g) {
        return function(h) {
            if (Array.isArray(h))
                return _f(h);
        }(g) || function(h) {
            if ('undefined' != typeof Symbol && Symbol.iterator in Object(h))
                return Array.from(h);
        }(g) || _f(g) || function() {
            throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }

    function f(g, _h) {
        var i = Object.keys(g);
        if (Object.getOwnPropertySymbols) {
            var j = Object.getOwnPropertySymbols(g);
            _h && (j = j.filter(function(k) {
                return Object.getOwnPropertyDescriptor(g, k).enumerable;
            })), i.push.apply(i, j);
        }
        return i;
    }

    function f(g) {
        for (var h = 1; h < arguments.length; h++) {
            var i = null != arguments[h] ? arguments[h] : {};
            h % 2 ? _o(Object(i), !0).forEach(function(j) {
                _f(g, j, i[j]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(g, Object.getOwnPropertyDescriptors(i)) : _o(Object(i)).forEach(function(j) {
                Object.defineProperty(g, j, Object.getOwnPropertyDescriptor(i, j));
            });
        }
        return g;
    }

    function _f(g, h, i) {
        return h in g ? Object.defineProperty(g, h, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : g[h] = i, g;
    }

    function f(g, h) {
        return function(i) {
            if (Array.isArray(i))
                return i;
        }(g) || function(i, j) {
            if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(i)))
                return;
            var k = [],
                l = !0,
                m = !1,
                n = void 0;
            try {
                for (var _o, p = i[Symbol.iterator](); !(l = (_o = p.next()).done) && (k.push(_o.value), !j || k.length !== j); l = !0);
            } catch (i) {
                m = !0, n = i;
            } finally {
                try {
                    l || null == _h.return || _h.return();
                } finally {
                    if (m)
                        throw n;
                }
            }
            return k;
        }(g, h) || _f(g, h) || function() {
            throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }

    function _f(g, h) {
        if (g) {
            if ('string' == typeof g)
                return _f(g, h);
            var i = Object.prototype.toString.call(g).slice(8, -1);
            return 'Object' === i && g.constructor && (i = g.constructor.name), 'Map' === i || 'Set' === i ? Array.from(g) : 'Arguments' === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? _f(g, h) : void 0;
        }
    }

    function _f(g, h) {
        (null == h || h > g.length) && (h = g.length);
        for (var i = 0, j = new Array(h); i < h; i++)
            j[i] = g[i];
        return j;
    }
    var f = function(g, h, i) {
            return g + (h - g) * i;
        },
        g = function(h) {
            return h.from !== h.to;
        },
        h = function c(i, j, k) {
            var l = (0, e.mapObject)(function(m, n) {
                if (g(n)) {
                    var o = _o(i(n.from, n.to, n.velocity), 2),
                        p = o[0],
                        q = o[1];
                    return _h(_h({}, n), {}, {
                        from: p,
                        velocity: q
                    });
                }
                return n;
            }, j);
            return k < 1 ? (0, e.mapObject)(function(m, n) {
                return g(n) ? _h(_h({}, n), {}, {
                    velocity: f(n.velocity, l[m].velocity, k),
                    from: f(n.from, l[m].from, k)
                }) : n;
            }, j) : c(i, l, k - 1);
        },
        _i = function(j, k, l, m, n) {
            var _o, p, q = (0, e.getIntersectionKeys)(j, k),
                r = q.reduce(function(s, t) {
                    return _h(_h({}, s), {}, _v({}, t, [
                        j[t],
                        k[t]
                    ]));
                }, {}),
                s = q.reduce(function(t, u) {
                    return _h(_h({}, t), {}, _v({}, u, {
                        from: j[u],
                        velocity: 0,
                        to: k[u]
                    }));
                }, {}),
                t = -1,
                u = function() {
                    return null;
                };
            return u = l.isStepper ? function(v) {
                    _o || (_o = v);
                    var w = (v - _o) / l.dt;
                    s = h(l, s, w), n(_h(_h(_h({}, j), k), (0, e.mapObject)(function(x, y) {
                        return y.from;
                    }, s))), _o = v, Object.values(s).filter(g).length && (t = requestAnimationFrame(u));
                } : function(_v) {
                    p || (p = _v);
                    var w = (_v - p) / m,
                        x = (0, e.mapObject)(function(y, z) {
                            return f.apply(void 0, _f(z).concat([l(w)]));
                        }, r);
                    if (n(_h(_h(_h({}, j), k), x)), w < 1)
                        t = requestAnimationFrame(u);
                    else {
                        var y = (0, e.mapObject)(function(z, A) {
                            return f.apply(void 0, _f(A).concat([l(1)]));
                        }, r);
                        n(_h(_h(_h({}, j), k), y));
                    }
                },
                function() {
                    return requestAnimationFrame(u),
                        function() {
                            cancelAnimationFrame(t);
                        };
                };
        };
}), b.register('nHCdZ', function(c, d) {
    var e = b('LEQ5w'),
        _f = b('exphF'),
        g = b('WPpLv'),
        _h = b('xuFhh');

    function i(j) {
        var k = j.component,
            l = j.children,
            m = j.appear,
            n = j.enter,
            o = j.leave;
        return _j(e).createElement(_f.TransitionGroup, {
            component: k
        }, e.Children.map(l, function(p, q) {
            return _j(e).createElement(_h.default, {
                appearOptions: m,
                enterOptions: n,
                leaveOptions: o,
                key: 'child-'.concat(q)
            }, p);
        }));
    }
    _h.propTypes = {
        appear: _j(g).object,
        enter: _j(g).object,
        leave: _j(g).object,
        children: _j(g).oneOfType([
            _j(g).array,
            _j(g).element
        ]),
        component: _j(g).any
    }, _h.defaultProps = {
        component: 'span'
    };
}), b.register('xuFhh', function(c, d) {
    _k(c.exports, 'default', function() {
        return _k;
    });
    var e = b('LEQ5w'),
        f = b('exphF'),
        g = b('WPpLv'),
        _h = b('gLixs');

    function i(_j) {
        return i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(k) {
            return typeof k;
        } : function(k) {
            return k && 'function' == typeof Symbol && k.constructor === Symbol && k !== Symbol.prototype ? 'symbol' : typeof k;
        }, i(_j);
    }

    function i() {
        return i = Object.assign || function(j) {
            for (var _k = 1; _k < arguments.length; _k++) {
                var l = arguments[_k];
                for (var m in l)
                    Object.prototype.hasOwnProperty.call(l, m) && (j[m] = l[m]);
            }
            return j;
        }, i.apply(this, arguments);
    }

    function i(j, k) {
        if (null == j)
            return {};
        var l, m, n = function(o, p) {
            if (null == o)
                return {};
            var q, r, s = {},
                t = Object.keys(o);
            for (r = 0; r < t.length; r++)
                q = t[r], p.indexOf(q) >= 0 || (s[q] = o[q]);
            return s;
        }(j, k);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(j);
            for (m = 0; m < o.length; m++)
                l = o[m], k.indexOf(l) >= 0 || Object.prototype.propertyIsEnumerable.call(j, l) && (n[l] = j[l]);
        }
        return n;
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

    function i(j) {
        for (var k = 1; k < arguments.length; k++) {
            var l = null != arguments[k] ? arguments[k] : {};
            k % 2 ? _i(Object(l), !0).forEach(function(m) {
                _i(j, m, l[m]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(j, Object.getOwnPropertyDescriptors(l)) : _i(Object(l)).forEach(function(m) {
                Object.defineProperty(j, m, Object.getOwnPropertyDescriptor(l, m));
            });
        }
        return j;
    }

    function _i(j, k, l) {
        return k in j ? Object.defineProperty(j, k, {
            value: l,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : j[k] = l, j;
    }

    function i(j, k) {
        if (!(j instanceof k))
            throw new TypeError('Cannot call a class as a function');
    }

    function i(j, k) {
        for (var l = 0; l < k.length; l++) {
            var m = k[l];
            m.enumerable = m.enumerable || !1, m.configurable = !0, 'value' in m && (m.writable = !0), Object.defineProperty(j, m.key, m);
        }
    }

    function i(j, k) {
        return i = Object.setPrototypeOf || function(l, m) {
            return l.__proto__ = m, l;
        }, i(j, k);
    }

    function i(j) {
        var k = function() {
            if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ('function' == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
            } catch (j) {
                return !1;
            }
        }();
        return function() {
            var l, m = _i(j);
            if (k) {
                var n = _i(this).constructor;
                l = Reflect.construct(m, arguments, n);
            } else
                l = m.apply(this, arguments);
            return _i(this, l);
        };
    }

    function _i(j, k) {
        return !k || 'object' !== _p(k) && 'function' != typeof k ? function(l) {
            if (void 0 === l)
                throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return l;
        }(j) : k;
    }

    function _i(j) {
        return _i = Object.setPrototypeOf ? Object.getPrototypeOf : function(k) {
            return k.__proto__ || Object.getPrototypeOf(k);
        }, _i(j);
    }
    void 0 === Number.isFinite && (Number.isFinite = function(i) {
        return 'number' == typeof i && isFinite(i);
    });
    var i = function() {
            var j = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                k = j.steps,
                l = j.duration;
            return k && k.length ? k.reduce(function(m, n) {
                return m + (Number.isFinite(n.duration) && n.duration > 0 ? n.duration : 0);
            }, 0) : Number.isFinite(l) ? l : 0;
        },
        j = function(k) {
            ! function(l, m) {
                if ('function' != typeof m && null !== m)
                    throw new TypeError('Super expression must either be null or a function');
                l.prototype = Object.create(m && m.prototype, {
                    constructor: {
                        value: l,
                        writable: !0,
                        configurable: !0
                    }
                }), m && _i(l, m);
            }(_p, k);
            var l, m, n, o = _j(_p);

            function _p() {
                var q;
                _i(this, _p);
                for (var r = arguments.length, s = new Array(r), t = 0; t < r; t++)
                    s[t] = arguments[t];
                return (q = o.call.apply(o, [this].concat(s))).state = {
                    isActive: !1
                }, q.handleEnter = function(u, v) {
                    var w = q.props,
                        x = w.appearOptions,
                        y = w.enterOptions;
                    q.handleStyleActive(v ? x : y);
                }, q.handleExit = function() {
                    q.handleStyleActive(q.props.leaveOptions);
                }, q;
            }
            return l = _i, (m = [{
                    key: 'handleStyleActive',
                    value: function(p) {
                        if (p) {
                            var q = p.onAnimationEnd ? function() {
                                p.onAnimationEnd();
                            } : null;
                            this.setState(_i(_i({}, p), {}, {
                                onAnimationEnd: q,
                                isActive: !0
                            }));
                        }
                    }
                },
                {
                    key: 'parseTimeout',
                    value: function() {
                        var p = this.props,
                            q = p.appearOptions,
                            r = p.enterOptions,
                            s = p.leaveOptions;
                        return i(q) + i(r) + i(s);
                    }
                },
                {
                    key: 'render',
                    value: function() {
                        var p = this,
                            q = this.props,
                            r = q.children,
                            s = (q.appearOptions, q.enterOptions, q.leaveOptions, _i(q, [
                                'children',
                                'appearOptions',
                                'enterOptions',
                                'leaveOptions'
                            ]));
                        return _j(e).createElement(f.Transition, _i({}, s, {
                            onEnter: this.handleEnter,
                            onExit: this.handleExit,
                            timeout: this.parseTimeout()
                        }), function() {
                            return _j(e).createElement(_h.default, p.state, e.Children.only(r));
                        });
                    }
                }
            ]) && _i(l.prototype, m), n && _i(l, n), _i;
        }(e.Component);
    j.propTypes = {
        appearOptions: _j(g).object,
        enterOptions: _j(g).object,
        leaveOptions: _j(g).object,
        children: _j(g).element
    };
    var _k = j;
}), b.register('bR0hn', function(c, d) {
    _k(c.exports, 'isInRectangle', function() {
        return _j;
    }), _k(c.exports, 'Rectangle', function() {
        return _k;
    });
    var e = b('LEQ5w'),
        f = b('JrtKP'),
        g = b('gChmk'),
        h = b('SLFbE');

    function _i(_j) {
        return _i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(k) {
            return typeof k;
        } : function(k) {
            return k && 'function' == typeof Symbol && k.constructor === Symbol && k !== Symbol.prototype ? 'symbol' : typeof k;
        }, _i(_j);
    }

    function _i() {
        return _i = Object.assign || function(j) {
            for (var _k = 1; _k < arguments.length; _k++) {
                var l = arguments[_k];
                for (var m in l)
                    Object.prototype.hasOwnProperty.call(l, m) && (j[m] = l[m]);
            }
            return j;
        }, _i.apply(this, arguments);
    }

    function _i(j, k) {
        if (!(j instanceof k))
            throw new TypeError('Cannot call a class as a function');
    }

    function _i(j, k) {
        for (var l = 0; l < k.length; l++) {
            var m = k[l];
            m.enumerable = m.enumerable || !1, m.configurable = !0, 'value' in m && (m.writable = !0), Object.defineProperty(j, m.key, m);
        }
    }

    function _i(j, k) {
        return _i = Object.setPrototypeOf || function(l, m) {
            return l.__proto__ = m, l;
        }, _i(j, k);
    }

    function i(j) {
        var k = function() {
            if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ('function' == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
            } catch (j) {
                return !1;
            }
        }();
        return function() {
            var l, m = _i(j);
            if (k) {
                var n = _i(this).constructor;
                l = Reflect.construct(m, arguments, n);
            } else
                l = m.apply(this, arguments);
            return _i(this, l);
        };
    }

    function _i(j, k) {
        return !k || 'object' !== _s(k) && 'function' != typeof k ? function(l) {
            if (void 0 === l)
                throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return l;
        }(j) : k;
    }

    function _i(j) {
        return _i = Object.setPrototypeOf ? Object.getPrototypeOf : function(k) {
            return k.__proto__ || Object.getPrototypeOf(k);
        }, _i(j);
    }
    var _i = function(j, k, l, m, n) {
            var o, p = Math.min(Math.abs(l) / 2, Math.abs(m) / 2),
                q = m >= 0 ? 1 : -1,
                r = l >= 0 ? 1 : -1,
                _s = m >= 0 && l >= 0 || m < 0 && l < 0 ? 1 : 0;
            if (p > 0 && n instanceof Array) {
                for (var t = [
                        0,
                        0,
                        0,
                        0
                    ], u = 0; u < 4; u++)
                    t[u] = n[u] > p ? p : n[u];
                o = 'M'.concat(j, ',').concat(k + q * t[0]), t[0] > 0 && (o += 'A '.concat(t[0], ',').concat(t[0], ',0,0,').concat(_s, ',').concat(j + r * t[0], ',').concat(k)), o += 'L '.concat(j + l - r * t[1], ',').concat(k), t[1] > 0 && (o += 'A '.concat(t[1], ',').concat(t[1], ',0,0,').concat(_s, ',\n        ').concat(j + l, ',').concat(k + q * t[1])), o += 'L '.concat(j + l, ',').concat(k + m - q * t[2]), t[2] > 0 && (o += 'A '.concat(t[2], ',').concat(t[2], ',0,0,').concat(_s, ',\n        ').concat(j + l - r * t[2], ',').concat(k + m)), o += 'L '.concat(j + r * t[3], ',').concat(k + m), t[3] > 0 && (o += 'A '.concat(t[3], ',').concat(t[3], ',0,0,').concat(_s, ',\n        ').concat(j, ',').concat(k + m - q * t[3])), o += 'Z';
            } else if (p > 0 && n === +n && n > 0) {
                var t = Math.min(p, n);
                o = 'M '.concat(j, ',').concat(k + q * t, '\n            A ').concat(t, ',').concat(t, ',0,0,').concat(_s, ',').concat(j + r * t, ',').concat(k, '\n            L ').concat(j + l - r * t, ',').concat(k, '\n            A ').concat(t, ',').concat(t, ',0,0,').concat(_s, ',').concat(j + l, ',').concat(k + q * t, '\n            L ').concat(j + l, ',').concat(k + m - q * t, '\n            A ').concat(t, ',').concat(t, ',0,0,').concat(_s, ',').concat(j + l - r * t, ',').concat(k + m, '\n            L ').concat(j + r * t, ',').concat(k + m, '\n            A ').concat(t, ',').concat(t, ',0,0,').concat(_s, ',').concat(j, ',').concat(k + m - q * t, ' Z');
            } else
                o = 'M '.concat(j, ',').concat(k, ' h ').concat(l, ' v ').concat(m, ' h ').concat(-l, ' Z');
            return o;
        },
        _j = function(k, l) {
            if (!k || !l)
                return !1;
            var m = k.x,
                n = k.y,
                o = l.x,
                p = l.y,
                q = l.width,
                r = l.height;
            if (Math.abs(q) > 0 && Math.abs(r) > 0) {
                var s = Math.min(o, o + q),
                    t = Math.max(o, o + q),
                    u = Math.min(p, p + r),
                    v = Math.max(p, p + r);
                return m >= s && m <= t && n >= u && n <= v;
            }
            return !1;
        },
        _k = function(l) {
            ! function(m, n) {
                if ('function' != typeof n && null !== n)
                    throw new TypeError('Super expression must either be null or a function');
                m.prototype = Object.create(n && n.prototype, {
                    constructor: {
                        value: m,
                        writable: !0,
                        configurable: !0
                    }
                }), n && _x(m, n);
            }(_q, l);
            var m, n, o, p = _y(_q);

            function _q() {
                var r;
                _v(this, _q);
                for (var s = arguments.length, t = new Array(s), u = 0; u < s; u++)
                    t[u] = arguments[u];
                return (r = p.call.apply(p, [this].concat(t))).state = {
                    totalLength: -1
                }, r.node = void 0, r;
            }
            return m = _z, (n = [{
                    key: 'componentDidMount',
                    value: function() {
                        if (this.node && this.node.getTotalLength)
                            try {
                                var q = this.node.getTotalLength();
                                q && this.setState({
                                    totalLength: q
                                });
                            } catch (_L) {}
                    }
                },
                {
                    key: 'render',
                    value: function() {
                        var q = this,
                            r = this.props,
                            s = r.x,
                            t = r.y,
                            u = r.width,
                            _v = r.height,
                            w = r.radius,
                            _x = r.className,
                            _y = this.state.totalLength,
                            _z = this.props,
                            A = _z.animationEasing,
                            B = _z.animationDuration,
                            C = _z.animationBegin,
                            D = _z.isAnimationActive,
                            E = _z.isUpdateAnimationActive;
                        if (s !== +s || t !== +t || u !== +u || _v !== +_v || 0 === u || 0 === _v)
                            return null;
                        var F = _L(f)('recharts-rectangle', _x);
                        return E ? _L(e).createElement(g.default, {
                            canBegin: _y > 0,
                            from: {
                                width: u,
                                height: _v,
                                x: s,
                                y: t
                            },
                            to: {
                                width: u,
                                height: _v,
                                x: s,
                                y: t
                            },
                            duration: B,
                            animationEasing: A,
                            isActive: E
                        }, function(G) {
                            var H = G.width,
                                I = G.height,
                                J = G.x,
                                K = G.y;
                            return _L(e).createElement(g.default, {
                                canBegin: _y > 0,
                                from: '0px '.concat(-1 === _y ? 1 : _y, 'px'),
                                to: ''.concat(_y, 'px 0px'),
                                attributeName: 'strokeDasharray',
                                begin: C,
                                duration: B,
                                isActive: D,
                                easing: A
                            }, _L(e).createElement('path', _i({}, (0, h.filterProps)(q.props, !0), {
                                className: F,
                                d: _i(J, K, H, I, w),
                                ref: function(_L) {
                                    q.node = _L;
                                }
                            })));
                        }) : _h(e).createElement('path', _i({}, (0, h.filterProps)(this.props, !0), {
                            className: F,
                            d: _i(s, t, u, _v, w)
                        }));
                    }
                }
            ]) && _k(m.prototype, n), o && _k(m, o), _q;
        }(e.PureComponent);
    _k.defaultProps = {
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
}), b.register('SLFbE', function(c, d) {
    _k(c.exports, 'filterProps', function() {
        return _j;
    }), _k(c.exports, 'adaptEventHandlers', function() {
        return _k;
    }), _k(c.exports, 'adaptEventsOfChild', function() {
        return _l;
    });
    var e = b('pbpeS0'),
        f = b('LEQ5w');

    function g(_h) {
        return g = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(i) {
            return typeof i;
        } : function(i) {
            return i && 'function' == typeof Symbol && i.constructor === Symbol && i !== Symbol.prototype ? 'symbol' : typeof i;
        }, g(_h);
    }
    var g = [
            'viewBox',
            'children'
        ],
        h = [
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
        _i = [
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
        _j = function(_k, l, m) {
            if (!_k || 'function' == typeof _k || 'boolean' == typeof _k)
                return null;
            var n = _k;
            if ((0, f.isValidElement)(_k) && (n = _k.props), !_p(e)(n))
                return null;
            var o = {};
            return Object.keys(n).forEach(function(_p) {
                (h.includes(_p) || m && g.includes(_p) || l && _i.includes(_p)) && (o[_p] = n[_p]);
            }), o;
        },
        _k = function(l, m) {
            if (!l || 'function' == typeof l || 'boolean' == typeof l)
                return null;
            var n = l;
            if ((0, f.isValidElement)(l) && (n = l.props), !_p(e)(n))
                return null;
            var o = {};
            return Object.keys(n).forEach(function(_p) {
                _i.includes(_p) && (o[_p] = m || function(q) {
                    return n[_p](n, q);
                });
            }), o;
        },
        _l = function(m, n, o) {
            if (!_q(e)(m) || 'object' !== _g(m))
                return null;
            var p = null;
            return Object.keys(m).forEach(function(_q) {
                var r = m[_q];
                _i.includes(_q) && 'function' == typeof r && (p || (p = {}), p[_q] = function(s, t, u) {
                    return function(v) {
                        return s(t, u, v), null;
                    };
                }(r, n, o));
            }), p;
        };
}), b.register('MXVYT', function(c, d) {
    _j(c.exports, 'Layer', function() {
        return _h;
    });
    var e = b('LEQ5w'),
        f = b('JrtKP'),
        _g = b('SLFbE');

    function h() {
        return h = Object.assign || function(i) {
            for (var _j = 1; _j < arguments.length; _j++) {
                var k = arguments[_j];
                for (var l in k)
                    Object.prototype.hasOwnProperty.call(k, l) && (i[l] = k[l]);
            }
            return i;
        }, h.apply(this, arguments);
    }

    function h(i, j) {
        if (null == i)
            return {};
        var k, l, m = function(n, o) {
            if (null == n)
                return {};
            var p, q, r = {},
                s = Object.keys(n);
            for (q = 0; q < s.length; q++)
                p = s[q], o.indexOf(p) >= 0 || (r[p] = n[p]);
            return r;
        }(i, j);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(i);
            for (l = 0; l < n.length; l++)
                k = n[l], j.indexOf(k) >= 0 || Object.prototype.propertyIsEnumerable.call(i, k) && (m[k] = i[k]);
        }
        return m;
    }
    var _h = _i(e).forwardRef(function(i, j) {
        var k = i.children,
            l = i.className,
            m = _h(i, [
                'children',
                'className'
            ]),
            n = _i(f)('recharts-layer', l);
        return _i(e).createElement('g', _h({
            className: n
        }, (0, _g.filterProps)(m, !0), {
            ref: j
        }), k);
    });
}), b.register('z6NTj', function(c, d) {
    _j(c.exports, 'ErrorBar', function() {
        return _h;
    });
    var e = b('LEQ5w'),
        f = b('MXVYT'),
        g = b('SLFbE');

    function _h() {
        return _h = Object.assign || function(_i) {
            for (var _j = 1; _j < arguments.length; _j++) {
                var k = arguments[_j];
                for (var l in k)
                    Object.prototype.hasOwnProperty.call(k, l) && (_i[l] = k[l]);
            }
            return _i;
        }, _h.apply(this, arguments);
    }

    function _h(i, j) {
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
                    n || null == g.return || g.return();
                } finally {
                    if (o)
                        throw p;
                }
            }
            return m;
        }(i, j) || function(k, l) {
            if (!k)
                return;
            if ('string' == typeof k)
                return _h(k, l);
            var m = Object.prototype.toString.call(k).slice(8, -1);
            'Object' === m && k.constructor && (m = k.constructor.name);
            if ('Map' === m || 'Set' === m)
                return Array.from(k);
            if ('Arguments' === m || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m))
                return _h(k, l);
        }(i, j) || function() {
            throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }

    function _h(i, j) {
        (null == j || j > i.length) && (j = i.length);
        for (var k = 0, l = new Array(j); k < j; k++)
            l[k] = i[k];
        return l;
    }

    function h(i, j) {
        if (null == i)
            return {};
        var k, l, m = function(n, o) {
            if (null == n)
                return {};
            var p, q, r = {},
                s = Object.keys(n);
            for (q = 0; q < s.length; q++)
                p = s[q], o.indexOf(p) >= 0 || (r[p] = n[p]);
            return r;
        }(i, j);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(i);
            for (l = 0; l < n.length; l++)
                k = n[l], j.indexOf(k) >= 0 || Object.prototype.propertyIsEnumerable.call(i, k) && (m[k] = i[k]);
        }
        return m;
    }

    function _h(i) {
        var j = i.offset,
            k = i.layout,
            l = i.width,
            m = i.dataKey,
            n = i.data,
            o = i.dataPointFormatter,
            p = i.xAxis,
            _q = i.yAxis,
            r = _w(i, [
                'offset',
                'layout',
                'width',
                'dataKey',
                'data',
                'dataPointFormatter',
                'xAxis',
                'yAxis'
            ]),
            s = (0, g.filterProps)(r),
            t = n.map(function(u, v) {
                var _w = o(u, m),
                    x = _w.x,
                    y = _w.y,
                    z = _w.value,
                    A = _w.errorVal;
                if (!A)
                    return null;
                var B, C, D = [];
                if (Array.isArray(A)) {
                    var E = _i(A, 2);
                    B = E[0], C = E[1];
                } else
                    B = C = A;
                if ('vertical' === k) {
                    var E = p.scale,
                        F = y + j,
                        G = F + l,
                        H = F - l,
                        I = E(z - B),
                        J = E(z + C);
                    D.push({
                        x1: J,
                        y1: G,
                        x2: J,
                        y2: H
                    }), D.push({
                        x1: I,
                        y1: F,
                        x2: J,
                        y2: F
                    }), D.push({
                        x1: I,
                        y1: G,
                        x2: I,
                        y2: H
                    });
                } else if ('horizontal' === k) {
                    var E = _q.scale,
                        _F = x + j,
                        G = _F - l,
                        H = _F + l,
                        I = E(z - B),
                        J = E(z + C);
                    D.push({
                        x1: G,
                        y1: J,
                        x2: H,
                        y2: J
                    }), D.push({
                        x1: _F,
                        y1: I,
                        x2: _F,
                        y2: J
                    }), D.push({
                        x1: G,
                        y1: I,
                        x2: H,
                        y2: I
                    });
                }
                return _c(e).createElement(f.Layer, _h({
                    className: 'recharts-errorBar',
                    key: 'bar-'.concat(v)
                }, s), D.map(function(E, F) {
                    return _c(e).createElement('line', _h({}, E, {
                        key: 'line-'.concat(F)
                    }));
                }));
            });
        return _c(e).createElement(f.Layer, {
            className: 'recharts-errorBars'
        }, t);
    }
    _l.defaultProps = {
        stroke: 'black',
        strokeWidth: 1.5,
        width: 5,
        offset: 0,
        layout: 'horizontal'
    }, _l.displayName = 'ErrorBar';
}), b.register('HfG4h', function(_c, d) {
    _s(_c.exports, 'Cell', function() {
        return b;
    });
    var e = function(f) {
        return null;
    };
    e.displayName = 'Cell';
}), b.register('rPBW3', function(c, d) {
    _s(c.exports, 'LabelList', function() {
        return _q;
    });
    var e = b('pbpeS0'),
        f = b('4R9wH'),
        g = b('4Eoue'),
        _h = b('/jha9'),
        _i = b('iieiP0'),
        j = b('LEQ5w'),
        k = b('WUpxn'),
        _l = b('MXVYT'),
        m = b('7p4uL'),
        n = b('2xCsV'),
        o = b('SLFbE');

    function p(q) {
        return function(r) {
            if (Array.isArray(r))
                return _p(r);
        }(q) || function(r) {
            if ('undefined' != typeof Symbol && Symbol.iterator in Object(r))
                return Array.from(r);
        }(q) || function(r, _s) {
            if (!r)
                return;
            if ('string' == typeof r)
                return _p(r, _s);
            var t = Object.prototype.toString.call(r).slice(8, -1);
            'Object' === t && r.constructor && (t = r.constructor.name);
            if ('Map' === t || 'Set' === t)
                return Array.from(r);
            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                return _p(r, _s);
        }(q) || function() {
            throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }

    function _p(q, r) {
        (null == r || r > q.length) && (r = q.length);
        for (var s = 0, t = new Array(r); s < r; s++)
            t[s] = q[s];
        return t;
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

    function p(q) {
        for (var r = 1; r < arguments.length; r++) {
            var s = null != arguments[r] ? arguments[r] : {};
            r % 2 ? _o(Object(s), !0).forEach(function(t) {
                _p(q, t, s[t]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(q, Object.getOwnPropertyDescriptors(s)) : _o(Object(s)).forEach(function(t) {
                Object.defineProperty(q, t, Object.getOwnPropertyDescriptor(s, t));
            });
        }
        return q;
    }

    function _p(q, r, s) {
        return r in q ? Object.defineProperty(q, r, {
            value: s,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : q[r] = s, q;
    }

    function p(q, r) {
        if (null == q)
            return {};
        var s, t, u = function(v, w) {
            if (null == v)
                return {};
            var x, y, z = {},
                A = Object.keys(v);
            for (y = 0; y < A.length; y++)
                x = A[y], w.indexOf(x) >= 0 || (z[x] = v[x]);
            return z;
        }(q, r);
        if (Object.getOwnPropertySymbols) {
            var v = Object.getOwnPropertySymbols(q);
            for (t = 0; t < v.length; t++)
                s = v[t], r.indexOf(s) >= 0 || Object.prototype.propertyIsEnumerable.call(q, s) && (u[s] = q[s]);
        }
        return u;
    }
    var p = {
        valueAccessor: function(q) {
            return _q(_i)(q.value) ? _q(_h)(q.value) : q.value;
        }
    };

    function _q(r) {
        var s = r.data,
            t = r.valueAccessor,
            u = r.dataKey,
            v = r.clockWise,
            w = r.id,
            x = r.textBreakAll,
            y = _E(r, [
                'data',
                'valueAccessor',
                'dataKey',
                'clockWise',
                'id',
                'textBreakAll'
            ]);
        return s && s.length ? _q(j).createElement(_l.Layer, {
            className: 'recharts-label-list'
        }, s.map(function(z, A) {
            var B = _q(g)(u) ? t(z, A) : (0, n.getValueByDataKey)(z && z.payload, u),
                C = _q(g)(w) ? {} : {
                    id: ''.concat(w, '-').concat(A)
                };
            return _q(j).createElement(k.Label, _o({}, (0, o.filterProps)(z, !0), y, C, {
                parentViewBox: z.parentViewBox,
                index: A,
                value: B,
                textBreakAll: x,
                viewBox: k.Label.parseViewBox(_q(g)(v) ? z : _o(_o({}, z), {}, {
                    clockWise: v
                })),
                key: 'label-'.concat(A)
            }));
        })) : null;
    }

    function q(r, s) {
        return r ? !0 === r ? _q(j).createElement(_G, {
            key: 'labelList-implicit',
            data: s
        }) : _q(j).isValidElement(r) || _q(f)(r) ? _q(j).createElement(_G, {
            key: 'labelList-implicit',
            data: s,
            content: r
        }) : _q(e)(r) ? _q(j).createElement(_G, _o({
            data: s
        }, r, {
            key: 'labelList-implicit'
        })) : null : null;
    }
    _G.displayName = 'LabelList', _G.renderCallByParent = function(_q, r) {
        var s = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (!_q || !_q.children && s && !_q.label)
            return null;
        var t = _q.children,
            u = (0, m.findAllByType)(t, _G.displayName).map(function(v, w) {
                return (0, j.cloneElement)(v, {
                    data: r,
                    key: 'labelList-'.concat(w)
                });
            });
        if (!s)
            return u;
        var v = _H(_q.label, r);
        return [v].concat(_o(u));
    }, _G.defaultProps = p;
}), b.register('/jha9', function(c, d) {
    c.exports = function(e) {
        var f = null == e ? 0 : e.length;
        return f ? e[f - 1] : void 0;
    };
}), b.register('WUpxn', function(c, d) {
    _r(c.exports, 'Label', function() {
        return _E;
    });
    var e = b('pbpeS0'),
        f = b('4R9wH'),
        g = b('4Eoue'),
        h = b('LEQ5w'),
        i = b('JrtKP'),
        j = b('q+OoU'),
        k = b('7p4uL'),
        l = b('F2lA2'),
        m = b('zXKbN'),
        n = b('SLFbE');

    function o(p) {
        return function(q) {
            if (Array.isArray(q))
                return _o(q);
        }(p) || function(q) {
            if ('undefined' != typeof Symbol && Symbol.iterator in Object(q))
                return Array.from(q);
        }(p) || function(q, _r) {
            if (!q)
                return;
            if ('string' == typeof q)
                return _o(q, _r);
            var s = Object.prototype.toString.call(q).slice(8, -1);
            'Object' === s && q.constructor && (s = q.constructor.name);
            if ('Map' === s || 'Set' === s)
                return Array.from(q);
            if ('Arguments' === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))
                return _o(q, _r);
        }(p) || function() {
            throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }

    function _o(p, q) {
        (null == q || q > p.length) && (q = p.length);
        for (var r = 0, s = new Array(q); r < q; r++)
            s[r] = p[r];
        return s;
    }

    function o(p, q) {
        var r = Object.keys(p);
        if (Object.getOwnPropertySymbols) {
            var s = Object.getOwnPropertySymbols(p);
            q && (s = s.filter(function(t) {
                return Object.getOwnPropertyDescriptor(p, t).enumerable;
            })), r.push.apply(r, s);
        }
        return r;
    }

    function _o(p) {
        for (var q = 1; q < arguments.length; q++) {
            var r = null != arguments[q] ? arguments[q] : {};
            q % 2 ? _A(Object(r), !0).forEach(function(s) {
                _o(p, s, r[s]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(p, Object.getOwnPropertyDescriptors(r)) : _A(Object(r)).forEach(function(s) {
                Object.defineProperty(p, s, Object.getOwnPropertyDescriptor(r, s));
            });
        }
        return p;
    }

    function _o(p, q, r) {
        return q in p ? Object.defineProperty(p, q, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : p[q] = r, p;
    }

    function _o() {
        return _o = Object.assign || function(p) {
            for (var q = 1; q < arguments.length; q++) {
                var r = arguments[q];
                for (var s in r)
                    Object.prototype.hasOwnProperty.call(r, s) && (p[s] = r[s]);
            }
            return p;
        }, _o.apply(this, arguments);
    }
    var o = function(p, q, r) {
        var s, t, u = p.position,
            v = p.viewBox,
            w = p.offset,
            x = p.className,
            y = v,
            z = y.cx,
            _A = y.cy,
            B = y.innerRadius,
            C = y.outerRadius,
            D = y.startAngle,
            _E = y.endAngle,
            F = y.clockWise,
            _G = (B + C) / 2,
            _H = function(I, J) {
                return (0, l.mathSign)(J - I) * Math.min(Math.abs(J - I), 360);
            }(D, _E),
            I = _H >= 0 ? 1 : -1;
        'insideStart' === u ? (s = D + I * w, t = F) : 'insideEnd' === u ? (s = _E - I * w, t = !F) : 'end' === u && (s = _E + I * w, t = F), t = _H <= 0 ? t : !t;
        var J = (0, m.polarToCartesian)(z, _A, _G, s),
            K = (0, m.polarToCartesian)(z, _A, _G, s + 359 * (t ? 1 : -1)),
            L = 'M'.concat(J.x, ',').concat(J.y, '\n    A').concat(_G, ',').concat(_G, ',0,1,').concat(t ? 0 : 1, ',\n    ').concat(K.x, ',').concat(K.y),
            M = _B(g)(p.id) ? (0, l.uniqueId)('recharts-radial-line-') : p.id;
        return _B(h).createElement('text', _T({}, r, {
            dominantBaseline: 'central',
            className: _B(i)('recharts-radial-bar-label', x)
        }), _B(h).createElement('defs', null, _B(h).createElement('path', {
            id: M,
            d: L
        })), _B(h).createElement('textPath', {
            xlinkHref: '#'.concat(M)
        }, q));
    };

    function p(q) {
        var r, s = q.viewBox,
            t = q.position,
            u = q.value,
            v = q.children,
            w = q.content,
            x = q.className,
            y = void 0 === x ? '' : x,
            z = q.textBreakAll;
        if (!s || _B(g)(u) && _B(g)(v) && !(0, h.isValidElement)(w) && !_B(f)(w))
            return null;
        if ((0, h.isValidElement)(w))
            return (0, h.cloneElement)(w, q);
        if (_B(f)(w)) {
            if (r = (0, h.createElement)(w, q), (0, h.isValidElement)(r))
                return r;
        } else
            r = function(A) {
                var B = A.value,
                    C = A.formatter,
                    D = _B(g)(A.children) ? B : A.children;
                return _B(f)(C) ? C(D) : D;
            }(q);
        var A = function(_B) {
                return (0, l.isNumber)(_B.cx);
            }(s),
            B = (0, n.filterProps)(q, !0);
        if (A && ('insideStart' === t || 'insideEnd' === t || 'end' === t))
            return o(q, r, B);
        var C = A ? function(D) {
            var E = D.viewBox,
                F = D.offset,
                G = D.position,
                H = E,
                I = H.cx,
                J = H.cy,
                K = H.innerRadius,
                L = H.outerRadius,
                M = (H.startAngle + H.endAngle) / 2;
            if ('outside' === G) {
                var N = (0, m.polarToCartesian)(I, J, L + F, M),
                    O = N.x;
                return {
                    x: O,
                    y: N.y,
                    textAnchor: O >= I ? 'start' : 'end',
                    verticalAnchor: 'middle'
                };
            }
            if ('center' === G)
                return {
                    x: I,
                    y: J,
                    textAnchor: 'middle',
                    verticalAnchor: 'middle'
                };
            if ('centerTop' === G)
                return {
                    x: I,
                    y: J,
                    textAnchor: 'middle',
                    verticalAnchor: 'start'
                };
            if ('centerBottom' === G)
                return {
                    x: I,
                    y: J,
                    textAnchor: 'middle',
                    verticalAnchor: 'end'
                };
            var N = (K + L) / 2,
                O = (0, m.polarToCartesian)(I, J, N, M);
            return {
                x: O.x,
                y: O.y,
                textAnchor: 'middle',
                verticalAnchor: 'middle'
            };
        }(q) : function(D) {
            var E = D.viewBox,
                F = D.parentViewBox,
                G = D.offset,
                H = D.position,
                I = E,
                J = I.x,
                K = I.y,
                L = I.width,
                M = I.height,
                N = M >= 0 ? 1 : -1,
                O = N * G,
                P = N > 0 ? 'end' : 'start',
                Q = N > 0 ? 'start' : 'end',
                R = L >= 0 ? 1 : -1,
                S = R * G,
                _T = R > 0 ? 'end' : 'start',
                U = R > 0 ? 'start' : 'end';
            if ('top' === H)
                return _H(_H({}, {
                    x: J + L / 2,
                    y: K - N * G,
                    textAnchor: 'middle',
                    verticalAnchor: P
                }), F ? {
                    height: Math.max(K - F.y, 0),
                    width: L
                } : {});
            if ('bottom' === H)
                return _H(_H({}, {
                    x: J + L / 2,
                    y: K + M + O,
                    textAnchor: 'middle',
                    verticalAnchor: Q
                }), F ? {
                    height: Math.max(F.y + F.height - (K + M), 0),
                    width: L
                } : {});
            if ('left' === H) {
                var V = {
                    x: J - S,
                    y: K + M / 2,
                    textAnchor: _T,
                    verticalAnchor: 'middle'
                };
                return _H(_H({}, V), F ? {
                    width: Math.max(V.x - F.x, 0),
                    height: M
                } : {});
            }
            if ('right' === H) {
                var V = {
                    x: J + L + S,
                    y: K + M / 2,
                    textAnchor: U,
                    verticalAnchor: 'middle'
                };
                return _H(_H({}, V), F ? {
                    width: Math.max(F.x + F.width - V.x, 0),
                    height: M
                } : {});
            }
            var V = F ? {
                width: L,
                height: M
            } : {};
            return 'insideLeft' === H ? _H({
                x: J + S,
                y: K + M / 2,
                textAnchor: U,
                verticalAnchor: 'middle'
            }, V) : 'insideRight' === H ? _H({
                x: J + L - S,
                y: K + M / 2,
                textAnchor: _T,
                verticalAnchor: 'middle'
            }, V) : 'insideTop' === H ? _H({
                x: J + L / 2,
                y: K + O,
                textAnchor: 'middle',
                verticalAnchor: Q
            }, V) : 'insideBottom' === H ? _H({
                x: J + L / 2,
                y: K + M - O,
                textAnchor: 'middle',
                verticalAnchor: P
            }, V) : 'insideTopLeft' === H ? _H({
                x: J + S,
                y: K + O,
                textAnchor: U,
                verticalAnchor: Q
            }, V) : 'insideTopRight' === H ? _H({
                x: J + L - S,
                y: K + O,
                textAnchor: _T,
                verticalAnchor: Q
            }, V) : 'insideBottomLeft' === H ? _H({
                x: J + S,
                y: K + M - O,
                textAnchor: U,
                verticalAnchor: P
            }, V) : 'insideBottomRight' === H ? _H({
                x: J + L - S,
                y: K + M - O,
                textAnchor: _T,
                verticalAnchor: P
            }, V) : _q(e)(H) && ((0, l.isNumber)(H.x) || (0, l.isPercent)(H.x)) && ((0, l.isNumber)(H.y) || (0, l.isPercent)(H.y)) ? _H({
                x: J + (0, l.getPercentValue)(H.x, L),
                y: K + (0, l.getPercentValue)(H.y, M),
                textAnchor: 'end',
                verticalAnchor: 'end'
            }, V) : _H({
                x: J + L / 2,
                y: K + M / 2,
                textAnchor: 'middle',
                verticalAnchor: 'middle'
            }, V);
        }(q);
        return _q(h).createElement(j.Text, _m({
            className: _q(i)('recharts-label', y)
        }, B, C, {
            breakAll: z
        }), r);
    }
    _m.displayName = 'Label', _m.defaultProps = {
        offset: 5
    };
    var p = function(_q) {
            var r = _q.cx,
                s = _q.cy,
                t = _q.angle,
                u = _q.startAngle,
                v = _q.endAngle,
                w = _q.r,
                x = _q.radius,
                y = _q.innerRadius,
                z = _q.outerRadius,
                A = _q.x,
                B = _q.y,
                C = _q.top,
                D = _q.left,
                E = _q.width,
                F = _q.height,
                G = _q.clockWise,
                _H = _q.labelViewBox;
            if (_H)
                return _H;
            if ((0, l.isNumber)(E) && (0, l.isNumber)(F)) {
                if ((0, l.isNumber)(A) && (0, l.isNumber)(B))
                    return {
                        x: A,
                        y: B,
                        width: E,
                        height: F
                    };
                if ((0, l.isNumber)(C) && (0, l.isNumber)(D))
                    return {
                        x: C,
                        y: D,
                        width: E,
                        height: F
                    };
            }
            return (0, l.isNumber)(A) && (0, l.isNumber)(B) ? {
                x: A,
                y: B,
                width: 0,
                height: 0
            } : (0, l.isNumber)(r) && (0, l.isNumber)(s) ? {
                cx: r,
                cy: s,
                startAngle: u || t || 0,
                endAngle: v || t || 0,
                innerRadius: y || 0,
                outerRadius: z || x || w || 0,
                clockWise: G
            } : _q.viewBox ? _q.viewBox : {};
        },
        q = function(r, s) {
            return r ? !0 === r ? _r(h).createElement(_m, {
                key: 'label-implicit',
                viewBox: s
            }) : (0, l.isNumOrStr)(r) ? _r(h).createElement(_m, {
                key: 'label-implicit',
                viewBox: s,
                value: r
            }) : (0, h.isValidElement)(r) ? r.type === _m ? (0, h.cloneElement)(r, {
                key: 'label-implicit',
                viewBox: s
            }) : _r(h).createElement(_m, {
                key: 'label-implicit',
                content: r,
                viewBox: s
            }) : _r(f)(r) ? _r(h).createElement(_m, {
                key: 'label-implicit',
                content: r,
                viewBox: s
            }) : _r(e)(r) ? _r(h).createElement(_m, _m({
                viewBox: s
            }, r, {
                key: 'label-implicit'
            })) : null : null;
        };
    _m.parseViewBox = p, _m.renderCallByParent = function(_r, s) {
        var t = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (!_r || !_r.children && t && !_r.label)
            return null;
        var u = _r.children,
            v = p(_r),
            w = (0, k.findAllByType)(u, _m.displayName).map(function(x, y) {
                return (0, h.cloneElement)(x, {
                    viewBox: s || v,
                    key: 'label-'.concat(y)
                });
            });
        if (!t)
            return w;
        var x = q(_r.label, s || v);
        return [x].concat(_m(w));
    };
}), b.register('q+OoU', function(c, d) {
    _o(c.exports, 'Text', function() {
        return _q;
    });
    var e = b('4Eoue'),
        f = b('LEQ5w'),
        g = b('4gRym'),
        h = b('JrtKP'),
        i = b('F2lA2'),
        j = b('udXfZ'),
        k = b('SLFbE'),
        l = b('WWlCf');

    function m(n) {
        return m = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(o) {
            return typeof o;
        } : function(o) {
            return o && 'function' == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? 'symbol' : typeof o;
        }, m(n);
    }

    function m() {
        return m = Object.assign || function(n) {
            for (var _o = 1; _o < arguments.length; _o++) {
                var p = arguments[_o];
                for (var q in p)
                    Object.prototype.hasOwnProperty.call(p, q) && (n[q] = p[q]);
            }
            return n;
        }, m.apply(this, arguments);
    }

    function _m(n, o) {
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

    function m(n, o) {
        if (!(n instanceof o))
            throw new TypeError('Cannot call a class as a function');
    }

    function m(n, o) {
        for (var p = 0; p < o.length; p++) {
            var q = o[p];
            q.enumerable = q.enumerable || !1, q.configurable = !0, 'value' in q && (q.writable = !0), Object.defineProperty(n, q.key, q);
        }
    }

    function m(n, o) {
        return m = Object.setPrototypeOf || function(p, q) {
            return p.__proto__ = q, p;
        }, m(n, o);
    }

    function m(n) {
        var o = function() {
            if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ('function' == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
            } catch (n) {
                return !1;
            }
        }();
        return function() {
            var p, q = _m(n);
            if (o) {
                var r = _m(this).constructor;
                p = Reflect.construct(q, arguments, r);
            } else
                p = q.apply(this, arguments);
            return _m(this, p);
        };
    }

    function _m(n, o) {
        return !o || 'object' !== _F(o) && 'function' != typeof o ? function(p) {
            if (void 0 === p)
                throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return p;
        }(n) : o;
    }

    function _m(n) {
        return _m = Object.setPrototypeOf ? Object.getPrototypeOf : function(o) {
            return o.__proto__ || Object.getPrototypeOf(o);
        }, _m(n);
    }

    function _m(n, o) {
        return function(p) {
            if (Array.isArray(p))
                return p;
        }(n) || function(p, q) {
            if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(p)))
                return;
            var r = [],
                s = !0,
                t = !1,
                u = void 0;
            try {
                for (var v, w = p[Symbol.iterator](); !(s = (v = w.next()).done) && (r.push(v.value), !q || r.length !== q); s = !0);
            } catch (p) {
                t = !0, u = p;
            } finally {
                try {
                    s || null == g.return || g.return();
                } finally {
                    if (t)
                        throw u;
                }
            }
            return r;
        }(n, o) || function(p, q) {
            if (!p)
                return;
            if ('string' == typeof p)
                return _m(p, q);
            var r = Object.prototype.toString.call(p).slice(8, -1);
            'Object' === r && p.constructor && (r = p.constructor.name);
            if ('Map' === r || 'Set' === r)
                return Array.from(p);
            if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                return _m(p, q);
        }(n, o) || function() {
            throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }

    function _m(n, o) {
        (null == o || o > n.length) && (o = n.length);
        for (var p = 0, q = new Array(o); p < o; p++)
            q[p] = n[p];
        return q;
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

    function m(n) {
        for (var o = 1; o < arguments.length; o++) {
            var p = null != arguments[o] ? arguments[o] : {};
            o % 2 ? _M(Object(p), !0).forEach(function(q) {
                _m(n, q, p[q]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(p)) : _M(Object(p)).forEach(function(q) {
                Object.defineProperty(n, q, Object.getOwnPropertyDescriptor(p, q));
            });
        }
        return n;
    }

    function _m(n, o, p) {
        return o in n ? Object.defineProperty(n, o, {
            value: p,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : n[o] = p, n;
    }
    var m = /[ \f\n\r\t\v\u2028\u2029]+/,
        n = function(o) {
            try {
                var p = [];
                return _q(e)(o.children) || (p = o.breakAll ? o.children.toString().split('') : o.children.toString().split(m)), {
                    wordsWithComputedWidth: p.map(function(_q) {
                        return {
                            word: _q,
                            width: (0, l.getStringSize)(_q, o.style).width
                        };
                    }),
                    spaceWidth: o.breakAll ? 0 : (0, l.getStringSize)('\xA0', o.style).width
                };
            } catch (_q) {
                return null;
            }
        },
        o = function(p) {
            return [{
                words: _q(e)(p) ? [] : p.toString().split(m)
            }];
        },
        p = function(_q, r) {
            if ((_q.width || _q.scaleToFit) && !j.Global.isSsr && r) {
                var s = n(_q);
                return s ? function(t, u, v, w, x) {
                    var y = (0, i.isNumber)(t.maxLines),
                        z = t.children,
                        A = function() {
                            return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).reduce(function(B, C) {
                                var D = C.word,
                                    E = C.width,
                                    F = B[B.length - 1];
                                if (F && (null == w || x || F.width + E + v < w))
                                    F.words.push(D), F.width += E + v;
                                else {
                                    var G = {
                                        words: [D],
                                        width: E
                                    };
                                    B.push(G);
                                }
                                return B;
                            }, []);
                        },
                        B = A(u);
                    if (!y)
                        return B;
                    for (var C, D = function(E) {
                            var F = z.slice(0, E),
                                G = n(_N(_N({}, t), {}, {
                                    children: F + '\u2026'
                                })).wordsWithComputedWidth,
                                H = A(G),
                                I = H.length > t.maxLines || function(J) {
                                    return J.reduce(function(K, L) {
                                        return K.width > L.width ? K : L;
                                    });
                                }(H).width > w;
                            return [
                                I,
                                H
                            ];
                        }, E = 0, _F = z.length - 1, G = 0; E <= _F && G <= z.length - 1;) {
                        var H = Math.floor((E + _F) / 2),
                            I = _K(D(H - 1), 2),
                            J = I[0],
                            K = I[1],
                            L = _K(D(H), 1)[0];
                        if (J || L || (E = H + 1), J && L && (_F = H - 1), !J && L) {
                            C = K;
                            break;
                        }
                        G++;
                    }
                    return C || B;
                }(_q, s.wordsWithComputedWidth, s.spaceWidth, _q.width, _q.scaleToFit) : o(_q.children);
            }
            return o(_q.children);
        },
        _q = function(r) {
            ! function(s, t) {
                if ('function' != typeof t && null !== t)
                    throw new TypeError('Super expression must either be null or a function');
                s.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: s,
                        writable: !0,
                        configurable: !0
                    }
                }), t && _G(s, t);
            }(j, r);
            var s, t, u, v = _H(j);

            function w() {
                var x;
                _E(this, w);
                for (var y = arguments.length, z = new Array(y), A = 0; A < y; A++)
                    z[A] = arguments[A];
                return (x = v.call.apply(v, [this].concat(z))).state = {}, x;
            }
            return s = j, u = [{
                key: 'getDerivedStateFromProps',
                value: function(w, x) {
                    if (w.width !== x.prevWidth || w.scaleToFit !== x.prevScaleToFit || w.children !== x.prevChildren || w.style !== x.prevStyle || w.breakAll !== x.prevBreakAll) {
                        var y = w.children !== x.prevChildren || w.style !== x.prevStyle || w.breakAll !== x.prevBreakAll;
                        return {
                            prevWidth: w.width,
                            prevScaleToFit: w.scaleToFit,
                            prevChildren: w.children,
                            prevStyle: w.style,
                            wordsByLines: p(w, y)
                        };
                    }
                    return null;
                }
            }], (t = [{
                key: 'render',
                value: function() {
                    var w = this.props,
                        x = w.dx,
                        y = w.dy,
                        z = w.textAnchor,
                        A = w.verticalAnchor,
                        B = w.scaleToFit,
                        C = w.angle,
                        D = w.lineHeight,
                        _E = w.capHeight,
                        F = w.className,
                        _G = w.breakAll,
                        _H = _t(w, [
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
                        I = this.state.wordsByLines;
                    if (!(0, i.isNumOrStr)(_H.x) || !(0, i.isNumOrStr)(_H.y))
                        return null;
                    var J, _K = _H.x + ((0, i.isNumber)(x) ? x : 0),
                        L = _H.y + ((0, i.isNumber)(y) ? y : 0);
                    switch (A) {
                        case 'start':
                            J = _c(g)('calc('.concat(_E, ')'));
                            break;
                        case 'middle':
                            J = _c(g)('calc('.concat((I.length - 1) / 2, ' * -').concat(D, ' + (').concat(_E, ' / 2))'));
                            break;
                        default:
                            J = _c(g)('calc('.concat(I.length - 1, ' * -').concat(D, ')'));
                    }
                    var _M = [];
                    if (B) {
                        var _N = I[0].width,
                            O = this.props.width;
                        _M.push('scale('.concat(((0, i.isNumber)(O) ? O / _N : 1) / _N, ')'));
                    }
                    return C && _M.push('rotate('.concat(C, ', ').concat(_K, ', ').concat(L, ')')), _M.length && (_H.transform = _M.join(' ')), _c(f).createElement('text', _s({}, (0, k.filterProps)(_H, !0), {
                        x: _K,
                        y: L,
                        className: _c(h)('recharts-text', F),
                        textAnchor: z
                    }), I.map(function(N, O) {
                        return _c(f).createElement('tspan', {
                            x: _K,
                            dy: 0 === O ? J : D,
                            key: O
                        }, N.words.join(_G ? '' : ' '));
                    }));
                }
            }]) && _v(s.prototype, t), u && _v(s, u), j;
        }(f.Component);
    _q.defaultProps = {
        x: 0,
        y: 0,
        lineHeight: '1em',
        capHeight: '0.71em',
        scaleToFit: !1,
        textAnchor: 'start',
        verticalAnchor: 'end'
    };
}), b.register('4gRym', function(_c, d) {
    Object.defineProperty(_c.exports, '__esModule', {
        value: !0
    });
    var e = _i(b('D22E5')),
        f = b('F2Q8j'),
        g = _i(b('cnLfT')),
        h = _i(b('afpUU'));

    function _i(j) {
        return j && j.__esModule ? j : {
            default: j
        };
    }
    var i = /((?:\-[a-z]+\-)?calc)/;
    _c.exports.default = function(j) {
        var k = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5;
        return (0, e.default)(j).walk(function(l) {
            if ('function' === l.type && i.test(l.value)) {
                var m = e.default.stringify(l.nodes);
                if (!(m.indexOf('constant') >= 0 || m.indexOf('env') >= 0)) {
                    var n = f.parser.parse(m),
                        o = (0, g.default)(n, k);
                    l.type = 'word', l.value = (0, h.default)(l.value, o, k);
                }
            }
        }, !0).toString();
    }, _c.exports = _c.exports.default;
}), b.register('D22E5', function(c, d) {
    var e = b('pOX96'),
        f = b('G3LQM'),
        g = b('0Q8Ak');

    function h(i) {
        return this instanceof h ? (this.nodes = e(i), this) : new h(i);
    }
    _i.prototype.toString = function() {
        return Array.isArray(this.nodes) ? g(this.nodes) : '';
    }, _i.prototype.walk = function(h, i) {
        return f(this.nodes, h, i), this;
    }, _i.unit = b('cgQXb'), _i.walk = f, _i.stringify = g, c.exports = _i;
}), b.register('pOX96', function(c, d) {
    var e = '('.charCodeAt(0),
        f = ')'.charCodeAt(0),
        g = '\''.charCodeAt(0),
        h = '"'.charCodeAt(0),
        _i = '\\'.charCodeAt(0),
        j = '/'.charCodeAt(0),
        k = ','.charCodeAt(0),
        l = ':'.charCodeAt(0),
        m = '*'.charCodeAt(0);
    c.exports = function(n) {
        for (var o, p, q, r, _s, _t, u, _v, w = [], x = n, y = 0, z = x.charCodeAt(y), A = x.length, B = [{
                nodes: w
            }], C = 0, D = '', E = '', F = ''; y < A;)
            if (z <= 32) {
                o = y;
                do {
                    o += 1, z = x.charCodeAt(o);
                } while (z <= 32);
                r = x.slice(y, o), q = w[w.length - 1], z === f && C ? F = r : q && 'div' === q.type ? q.after = r : z === k || z === l || z === j && x.charCodeAt(o + 1) !== m ? E = r : w.push({
                    type: 'space',
                    sourceIndex: y,
                    value: r
                }), y = o;
            } else if (z === g || z === h) {
            o = y, r = {
                type: 'string',
                sourceIndex: y,
                quote: p = z === g ? '\'' : '"'
            };
            do {
                if (_s = !1, ~(o = x.indexOf(p, o + 1)))
                    for (_t = o; x.charCodeAt(_t - 1) === _i;)
                        _t -= 1, _s = !_s;
                else
                    o = (x += p).length - 1, r.unclosed = !0;
            } while (_s);
            r.value = x.slice(y + 1, o), w.push(r), y = o + 1, z = x.charCodeAt(y);
        } else if (z === j && x.charCodeAt(y + 1) === m)
            r = {
                type: 'comment',
                sourceIndex: y
            }, -1 === (o = x.indexOf('*/', y)) && (r.unclosed = !0, o = x.length), r.value = x.slice(y + 2, o), w.push(r), y = o + 2, z = x.charCodeAt(y);
        else if (z === j || z === k || z === l)
            r = x[y], w.push({
                type: 'div',
                sourceIndex: y - E.length,
                value: r,
                before: E,
                after: ''
            }), E = '', y += 1, z = x.charCodeAt(y);
        else if (e === z) {
            o = y;
            do {
                o += 1, z = x.charCodeAt(o);
            } while (z <= 32);
            if (r = {
                    type: 'function',
                    sourceIndex: y - D.length,
                    value: D,
                    before: x.slice(y + 1, o)
                }, y = o, 'url' === D && z !== g && z !== h) {
                o -= 1;
                do {
                    if (_s = !1, ~(o = x.indexOf(')', o + 1)))
                        for (_t = o; x.charCodeAt(_t - 1) === _i;)
                            _t -= 1, _s = !_s;
                    else
                        o = (x += ')').length - 1, r.unclosed = !0;
                } while (_s);
                u = o;
                do {
                    u -= 1, z = x.charCodeAt(u);
                } while (z <= 32);
                r.nodes = y !== u + 1 ? [{
                    type: 'word',
                    sourceIndex: y,
                    value: x.slice(y, u + 1)
                }] : [], r.unclosed && u + 1 !== o ? (r.after = '', r.nodes.push({
                    type: 'space',
                    sourceIndex: u + 1,
                    value: x.slice(u + 1, o)
                })) : r.after = x.slice(u + 1, o), y = o + 1, z = x.charCodeAt(y), w.push(r);
            } else
                C += 1, r.after = '', w.push(r), B.push(r), w = r.nodes = [], _v = r;
            D = '';
        } else if (f === z && C)
            y += 1, z = x.charCodeAt(y), _v.after = F, F = '', C -= 1, B.pop(), w = (_v = B[C]).nodes;
        else {
            o = y;
            do {
                z === _i && (o += 1), o += 1, z = x.charCodeAt(o);
            } while (o < A && !(z <= 32 || z === g || z === h || z === k || z === l || z === j || z === e || z === f && C));
            r = x.slice(y, o), e === z ? D = r : w.push({
                type: 'word',
                sourceIndex: y,
                value: r
            }), y = o;
        }
        for (y = B.length - 1; y; y -= 1)
            B[y].unclosed = !0;
        return B[0].nodes;
    };
}), b.register('G3LQM', function(c, d) {
    c.exports = function c(e, f, g) {
        var h, i, j, k;
        for (h = 0, i = e.length; h < i; h += 1)
            j = e[h], g || (k = f(j, h, e)), !1 !== k && 'function' === j.type && Array.isArray(j.nodes) && c(j.nodes, f, g), g && f(j, h, e);
    };
}), b.register('0Q8Ak', function(c, d) {
    function e(f, g) {
        var h, i, j = f.type,
            k = f.value;
        return g && void 0 !== (i = g(f)) ? i : 'word' === j || 'space' === j ? k : 'string' === j ? (h = f.quote || '') + k + (f.unclosed ? '' : h) : 'comment' === j ? '/*' + k + (f.unclosed ? '' : '*/') : 'div' === j ? (f.before || '') + k + (f.after || '') : Array.isArray(f.nodes) ? (h = b(f.nodes), 'function' !== j ? h : k + '(' + (f.before || '') + h + (f.after || '') + (f.unclosed ? '' : ')')) : k;
    }

    function e(f, g) {
        var h, i;
        if (Array.isArray(f)) {
            for (h = '', i = f.length - 1; ~i; i -= 1)
                h = a(f[i], g) + h;
            return h;
        }
        return a(f, g);
    }
    c.exports = b;
}), b.register('cgQXb', function(c, d) {
    var e = '-'.charCodeAt(0),
        f = '+'.charCodeAt(0),
        g = '.'.charCodeAt(0),
        h = 'e'.charCodeAt(0),
        i = 'E'.charCodeAt(0);
    c.exports = function(j) {
        for (var k, l = 0, m = j.length, n = !1, o = -1, p = !1; l < m;) {
            if ((k = j.charCodeAt(l)) >= 48 && k <= 57)
                p = !0;
            else if (k === h || k === i) {
                if (o > -1)
                    break;
                o = l;
            } else if (k === g) {
                if (n)
                    break;
                n = !0;
            } else {
                if (k !== f && k !== e)
                    break;
                if (0 !== l)
                    break;
            }
            l += 1;
        }
        return o + 1 === l && l--, !!p && {
            number: j.slice(0, l),
            unit: j.slice(l)
        };
    };
}), b.register('F2Q8j', function(c, d) {
    var e;
    _i(c.exports, 'parser', function() {
        return e;
    }, function(f) {
        return e = f;
    });
    var f = function() {
        function g(h, _i) {
            var j;
            if (Object.defineProperty(this, 'name', {
                    enumerable: !1,
                    writable: !1,
                    value: 'JisonParserError'
                }), null == h && (h = '???'), Object.defineProperty(this, 'message', {
                    enumerable: !1,
                    writable: !0,
                    value: h
                }), this.hash = _i, _i && _i.exception instanceof Error) {
                var k = _i.exception;
                this.message = k.message || h, j = k.stack;
            }
            j || (Error.hasOwnProperty('captureStackTrace') ? Error.captureStackTrace(this, this.constructor) : j = new Error(h).stack), j && Object.defineProperty(this, 'stack', {
                enumerable: !1,
                writable: !1,
                value: j
            });
        }

        function g(h, i, j) {
            j = j || 0;
            for (var k = 0; k < i; k++)
                this.push(h), h += j;
        }

        function g(h, i) {
            for (i += h = this.length - h; h < i; h++)
                this.push(this[h]);
        }

        function g(h) {
            for (var i = [], j = 0, k = h.length; j < k; j++) {
                var l = h[j];
                'function' == typeof l ? (j++, l.apply(i, h[j])) : i.push(l);
            }
            return i;
        }
        'function' == typeof Object.setPrototypeOf ? Object.setPrototypeOf(c.prototype, Error.prototype) : c.prototype = Object.create(Error.prototype), c.prototype.constructor = c, c.prototype.name = 'JisonParserError';
        var g = {
            trace: function() {},
            JisonParserError: c,
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
            quoteName: function(h) {
                return '"' + h + '"';
            },
            getSymbolName: function(h) {
                if (this.terminals_[h])
                    return this.terminals_[h];
                var i = this.symbols_;
                for (var j in i)
                    if (i[j] === h)
                        return j;
                return null;
            },
            describeSymbol: function(h) {
                if (h !== this.EOF && this.terminal_descriptions_ && this.terminal_descriptions_[h])
                    return this.terminal_descriptions_[h];
                if (h === this.EOF)
                    return 'end of input';
                var i = this.getSymbolName(h);
                return i ? this.quoteName(i) : null;
            },
            collect_expected_token_set: function(h, i) {
                var j = this.TERROR,
                    k = [],
                    l = {};
                if (!i && this.state_descriptions_ && this.state_descriptions_[h])
                    return [this.state_descriptions_[h]];
                for (var m in this.table[h])
                    if ((m = +m) !== j) {
                        var n = i ? m : this.describeSymbol(m);
                        n && !l[n] && (k.push(n), l[n] = !0);
                    }
                return k;
            },
            productions_: function(h) {
                for (var i = [], j = h.pop, k = h.rule, l = 0, m = j.length; l < m; l++)
                    i.push([
                        j[l],
                        k[l]
                    ]);
                return i;
            }({
                pop: e([
                    29,
                    _i,
                    [
                        30,
                        10
                    ],
                    31,
                    31,
                    32,
                    32,
                    _i,
                    [
                        33,
                        15
                    ]
                ]),
                rule: e([
                    2,
                    _i,
                    [
                        3,
                        5
                    ],
                    4,
                    7,
                    _i,
                    [
                        1,
                        4
                    ],
                    2,
                    4,
                    6,
                    _i,
                    [
                        1,
                        14
                    ],
                    2
                ])
            }),
            performAction: function(h, _i, j) {
                var k = this.yy;
                k.parser, k.lexer;
                switch (h) {
                    case 0:
                    case 6:
                        this.$ = j[_i - 1];
                        break;
                    case 1:
                        return this.$ = j[_i - 1], j[_i - 1];
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        this.$ = {
                            type: 'MathExpression',
                            operator: j[_i - 1],
                            left: j[_i - 2],
                            right: j[_i]
                        };
                        break;
                    case 7:
                        this.$ = {
                            type: 'Calc',
                            value: j[_i - 1]
                        };
                        break;
                    case 8:
                        this.$ = {
                            type: 'Calc',
                            value: j[_i - 1],
                            prefix: j[_i - 5]
                        };
                        break;
                    case 9:
                    case 10:
                    case 11:
                        this.$ = j[_i];
                        break;
                    case 12:
                        this.$ = {
                            type: 'Value',
                            value: parseFloat(j[_i])
                        };
                        break;
                    case 13:
                        this.$ = {
                            type: 'Value',
                            value: -1 * parseFloat(j[_i])
                        };
                        break;
                    case 14:
                        this.$ = {
                            type: 'CssVariable',
                            value: j[_i - 1]
                        };
                        break;
                    case 15:
                        this.$ = {
                            type: 'CssVariable',
                            value: j[_i - 3],
                            fallback: j[_i - 1]
                        };
                        break;
                    case 16:
                        this.$ = {
                            type: 'LengthValue',
                            value: parseFloat(j[_i]),
                            unit: /[a-z]+/.exec(j[_i])[0]
                        };
                        break;
                    case 17:
                        this.$ = {
                            type: 'AngleValue',
                            value: parseFloat(j[_i]),
                            unit: /[a-z]+/.exec(j[_i])[0]
                        };
                        break;
                    case 18:
                        this.$ = {
                            type: 'TimeValue',
                            value: parseFloat(j[_i]),
                            unit: /[a-z]+/.exec(j[_i])[0]
                        };
                        break;
                    case 19:
                        this.$ = {
                            type: 'FrequencyValue',
                            value: parseFloat(j[_i]),
                            unit: /[a-z]+/.exec(j[_i])[0]
                        };
                        break;
                    case 20:
                        this.$ = {
                            type: 'ResolutionValue',
                            value: parseFloat(j[_i]),
                            unit: /[a-z]+/.exec(j[_i])[0]
                        };
                        break;
                    case 21:
                        this.$ = {
                            type: 'EmValue',
                            value: parseFloat(j[_i]),
                            unit: 'em'
                        };
                        break;
                    case 22:
                        this.$ = {
                            type: 'ExValue',
                            value: parseFloat(j[_i]),
                            unit: 'ex'
                        };
                        break;
                    case 23:
                        this.$ = {
                            type: 'ChValue',
                            value: parseFloat(j[_i]),
                            unit: 'ch'
                        };
                        break;
                    case 24:
                        this.$ = {
                            type: 'RemValue',
                            value: parseFloat(j[_i]),
                            unit: 'rem'
                        };
                        break;
                    case 25:
                        this.$ = {
                            type: 'VhValue',
                            value: parseFloat(j[_i]),
                            unit: 'vh'
                        };
                        break;
                    case 26:
                        this.$ = {
                            type: 'VwValue',
                            value: parseFloat(j[_i]),
                            unit: 'vw'
                        };
                        break;
                    case 27:
                        this.$ = {
                            type: 'VminValue',
                            value: parseFloat(j[_i]),
                            unit: 'vmin'
                        };
                        break;
                    case 28:
                        this.$ = {
                            type: 'VmaxValue',
                            value: parseFloat(j[_i]),
                            unit: 'vmax'
                        };
                        break;
                    case 29:
                        this.$ = {
                            type: 'PercentageValue',
                            value: parseFloat(j[_i]),
                            unit: '%'
                        };
                        break;
                    case 30:
                        var l = j[_i];
                        l.value *= -1, this.$ = l;
                }
            },
            table: function(h) {
                for (var i = [], j = h.len, k = h.symbol, l = h.type, m = h.state, n = h.mode, o = h.goto, p = 0, q = j.length; p < q; p++) {
                    for (var r = j[p], s = {}, t = 0; t < r; t++) {
                        var u = k.shift();
                        switch (l.shift()) {
                            case 2:
                                s[u] = [
                                    n.shift(),
                                    o.shift()
                                ];
                                break;
                            case 0:
                                s[u] = m.shift();
                                break;
                            default:
                                s[u] = [3];
                        }
                    }
                    i.push(s);
                }
                return i;
            }({
                len: e([
                    24,
                    1,
                    5,
                    23,
                    1,
                    18,
                    _i,
                    [
                        0,
                        3
                    ],
                    1,
                    _i,
                    [
                        0,
                        16
                    ],
                    _i,
                    [
                        23,
                        4
                    ],
                    d,
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
                    _i,
                    [
                        0,
                        3
                    ],
                    5,
                    1,
                    2,
                    d,
                    [
                        37,
                        3
                    ],
                    d,
                    [
                        20,
                        3
                    ],
                    5,
                    0,
                    0
                ]),
                symbol: e([
                    4,
                    7,
                    9,
                    11,
                    12,
                    _i,
                    [
                        15,
                        19,
                        1
                    ],
                    1,
                    1,
                    _i,
                    [
                        3,
                        4,
                        1
                    ],
                    d,
                    [
                        30,
                        19
                    ],
                    d,
                    [
                        29,
                        4
                    ],
                    7,
                    4,
                    10,
                    11,
                    d,
                    [
                        22,
                        14
                    ],
                    d,
                    [
                        19,
                        3
                    ],
                    d,
                    [
                        43,
                        22
                    ],
                    d,
                    [
                        23,
                        69
                    ],
                    d,
                    [
                        139,
                        4
                    ],
                    8,
                    d,
                    [
                        51,
                        24
                    ],
                    4,
                    d,
                    [
                        138,
                        15
                    ],
                    13,
                    d,
                    [
                        186,
                        5
                    ],
                    8,
                    d,
                    [
                        6,
                        6
                    ],
                    d,
                    [
                        5,
                        5
                    ],
                    9,
                    8,
                    14,
                    d,
                    [
                        159,
                        47
                    ],
                    d,
                    [
                        60,
                        10
                    ]
                ]),
                type: e([
                    _i,
                    [
                        2,
                        19
                    ],
                    _i,
                    [
                        0,
                        5
                    ],
                    1,
                    _i,
                    [
                        2,
                        24
                    ],
                    _i,
                    [
                        0,
                        4
                    ],
                    d,
                    [
                        22,
                        19
                    ],
                    d,
                    [
                        43,
                        42
                    ],
                    d,
                    [
                        23,
                        70
                    ],
                    d,
                    [
                        28,
                        25
                    ],
                    d,
                    [
                        45,
                        25
                    ],
                    d,
                    [
                        113,
                        54
                    ]
                ]),
                state: e([
                    1,
                    2,
                    8,
                    6,
                    7,
                    30,
                    d,
                    [
                        4,
                        3
                    ],
                    33,
                    37,
                    d,
                    [
                        5,
                        3
                    ],
                    38,
                    d,
                    [
                        4,
                        3
                    ],
                    39,
                    d,
                    [
                        4,
                        3
                    ],
                    40,
                    d,
                    [
                        4,
                        3
                    ],
                    42,
                    d,
                    [
                        21,
                        4
                    ],
                    50,
                    d,
                    [
                        5,
                        3
                    ],
                    51,
                    d,
                    [
                        4,
                        3
                    ]
                ]),
                mode: e([
                    _i,
                    [
                        1,
                        179
                    ],
                    _i,
                    [
                        2,
                        3
                    ],
                    d,
                    [
                        5,
                        5
                    ],
                    d,
                    [
                        6,
                        4
                    ],
                    _i,
                    [
                        1,
                        57
                    ]
                ]),
                goto: e([
                    5,
                    3,
                    4,
                    24,
                    _i,
                    [
                        9,
                        15,
                        1
                    ],
                    _i,
                    [
                        25,
                        5,
                        1
                    ],
                    d,
                    [
                        24,
                        19
                    ],
                    31,
                    35,
                    32,
                    34,
                    d,
                    [
                        18,
                        14
                    ],
                    36,
                    d,
                    [
                        38,
                        19
                    ],
                    d,
                    [
                        19,
                        57
                    ],
                    d,
                    [
                        118,
                        4
                    ],
                    41,
                    d,
                    [
                        24,
                        19
                    ],
                    43,
                    35,
                    d,
                    [
                        16,
                        14
                    ],
                    44,
                    _i,
                    [
                        2,
                        3
                    ],
                    28,
                    29,
                    2,
                    _i,
                    [
                        3,
                        3
                    ],
                    28,
                    29,
                    3,
                    d,
                    [
                        53,
                        4
                    ],
                    _i,
                    [
                        45,
                        5,
                        1
                    ],
                    d,
                    [
                        100,
                        42
                    ],
                    52,
                    d,
                    [
                        5,
                        4
                    ],
                    53
                ])
            }),
            defaultActions: function(h) {
                for (var _i = {}, j = h.idx, k = h.goto, l = 0, m = j.length; l < m; l++) {
                    _i[j[l]] = k[l];
                }
                return _i;
            }({
                idx: e([
                    6,
                    7,
                    8,
                    _i,
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
                goto: e([
                    9,
                    10,
                    11,
                    _i,
                    [
                        16,
                        14,
                        1
                    ],
                    12,
                    1,
                    30,
                    13,
                    _i,
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
            parseError: function(h, _i, j) {
                if (!_i.recoverable)
                    throw 'function' == typeof this.trace && this.trace(h), j || (j = this.JisonParserError), new j(h, _i);
                'function' == typeof this.trace && this.trace(h), _i.destroy();
            },
            parse: function(h) {
                var i, j = this,
                    k = new Array(128),
                    l = new Array(128),
                    m = new Array(128),
                    n = this.table,
                    o = 0,
                    p = 0,
                    q = (this.TERROR, this.EOF),
                    r = (this.options.errorRecoveryTokenDiscardCount, [
                        0,
                        54
                    ]);
                i = this.__lexer__ ? this.__lexer__ : this.__lexer__ = Object.create(this.lexer);
                var s = {
                    parseError: void 0,
                    quoteName: void 0,
                    lexer: void 0,
                    parser: void 0,
                    pre_parse: void 0,
                    post_parse: void 0,
                    pre_lex: void 0,
                    post_lex: void 0
                };

                function t() {
                    var u = i.fastLex();
                    return 'number' != typeof u && (u = j.symbols_[u] || u), u || q;
                }
                'function' != typeof assert || assert, this.yyGetSharedState = function() {
                        return s;
                    },
                    function(t, u) {
                        for (var v in u)
                            void 0 === t[v] && Object.prototype.hasOwnProperty.call(u, v) && (t[v] = u[v]);
                    }(s, this.yy), s.lexer = i, s.parser = this, 'function' == typeof s.parseError ? this.parseError = function(t, u, v) {
                        return v || (v = this.JisonParserError), s.parseError.call(this, t, u, v);
                    } : this.parseError = this.originalParseError, 'function' == typeof s.quoteName ? this.quoteName = function(t) {
                        return s.quoteName.call(this, t);
                    } : this.quoteName = this.originalQuoteName, this.cleanupAfterParse = function(t, u, v) {
                        var w, x;
                        u && ((s.post_parse || this.post_parse) && (x = this.constructParseErrorInfo(null, null, null, !1)), s.post_parse && void 0 !== (w = s.post_parse.call(this, s, t, x)) && (t = w), this.post_parse && void 0 !== (w = this.post_parse.call(this, s, t, x)) && (t = w), x && x.destroy && x.destroy());
                        if (this.__reentrant_call_depth > 1)
                            return t;
                        if (i.cleanupAfterLex && i.cleanupAfterLex(v), s && (s.lexer = void 0, s.parser = void 0, i.yy === s && (i.yy = void 0)), s = void 0, this.parseError = this.originalParseError, this.quoteName = this.originalQuoteName, k.length = 0, l.length = 0, m.length = 0, o = 0, !v) {
                            for (var y = this.__error_infos.length - 1; y >= 0; y--) {
                                var z = this.__error_infos[y];
                                z && 'function' == typeof z.destroy && z.destroy();
                            }
                            this.__error_infos.length = 0;
                        }
                        return t;
                    }, this.constructParseErrorInfo = function(t, u, v, w) {
                        var x = {
                            errStr: t,
                            exception: u,
                            text: i.match,
                            value: i.yytext,
                            token: this.describeSymbol(p) || p,
                            token_id: p,
                            line: i.yylineno,
                            expected: v,
                            recoverable: w,
                            state: _t,
                            action: _u,
                            new_state: _A,
                            symbol_stack: k,
                            state_stack: l,
                            value_stack: m,
                            stack_pointer: o,
                            yy: s,
                            lexer: i,
                            parser: this,
                            destroy: function() {
                                var y = !!this.recoverable;
                                for (var z in this)
                                    this.hasOwnProperty(z) && 'object' == typeof z && (this[z] = void 0);
                                this.recoverable = y;
                            }
                        };
                        return this.__error_infos.push(x), x;
                    };
                var _t, _u, v, w, x, y, z, _A, B = function() {
                        var C = i.lex();
                        return 'number' != typeof C && (C = j.symbols_[C] || C), C || q;
                    },
                    C = {
                        $: !0,
                        _$: void 0,
                        yy: s
                    },
                    D = !1;
                try {
                    if (this.__reentrant_call_depth++, i.setInput(h, s), 'function' == typeof i.canIUse)
                        i.canIUse().fastLex && (B = _v);
                    for (m[o] = null, l[o] = 0, k[o] = 0, ++o, this.pre_parse && this.pre_parse.call(this, s), s.pre_parse && s.pre_parse.call(this, s), _A = l[o - 1];;) {
                        if (_t = _A, this.defaultActions[_t])
                            _u = 2, _A = this.defaultActions[_t];
                        else if (p || (p = B()), w = n[_t] && n[_t][p] || r, _A = w[1], !(_u = w[0])) {
                            var E, F = this.describeSymbol(p) || p,
                                G = this.collect_expected_token_set(_t);
                            E = 'number' == typeof i.yylineno ? 'Parse error on line ' + (i.yylineno + 1) + ': ' : 'Parse error: ', 'function' == typeof i.showPosition && (E += '\n' + i.showPosition(69, 10) + '\n'), G.length ? E += 'Expecting ' + G.join(', ') + ', got unexpected ' + F : E += 'Unexpected ' + F, x = this.constructParseErrorInfo(E, null, G, !1), void 0 !== (v = this.parseError(x.errStr, x, this.JisonParserError)) && (D = v);
                            break;
                        }
                        switch (_u) {
                            default:
                                if (_u instanceof Array) {
                                    x = this.constructParseErrorInfo('Parse Error: multiple actions possible at state: ' + _t + ', token: ' + p, null, null, !1), void 0 !== (v = this.parseError(x.errStr, x, this.JisonParserError)) && (D = v);
                                    break;
                                }
                                x = this.constructParseErrorInfo('Parsing halted. No viable error recovery approach available due to internal system failure.', null, null, !1), void 0 !== (v = this.parseError(x.errStr, x, this.JisonParserError)) && (D = v);
                                break;
                            case 1:
                                k[o] = p, m[o] = i.yytext, l[o] = _A, ++o, p = 0;
                                continue;
                            case 2:
                                if (y = (z = this.productions_[_A - 1])[1], void 0 !== (v = this.performAction.call(C, _A, o - 1, m))) {
                                    D = v;
                                    break;
                                }
                                o -= y;
                                var E = z[0];
                                k[o] = E, m[o] = C.$, _A = n[l[o - 1]][E], l[o] = _A, ++o;
                                continue;
                            case 3:
                                -2 !== o && (D = !0, o--, void 0 !== m[o] && (D = m[o]));
                        }
                        break;
                    }
                } catch (h) {
                    if (h instanceof this.JisonParserError)
                        throw h;
                    if (i && 'function' == typeof i.JisonLexerError && h instanceof i.JisonLexerError)
                        throw h;
                    x = this.constructParseErrorInfo('Parsing aborted due to exception.', h, null, !1), D = !1, void 0 !== (v = this.parseError(x.errStr, x, this.JisonParserError)) && (D = v);
                } finally {
                    D = this.cleanupAfterParse(D, !0, !0), this.__reentrant_call_depth--;
                }
                return D;
            }
        };
        g.originalParseError = g.parseError, g.originalQuoteName = g.quoteName;
        var h = function() {
            function i(j, k) {
                var l;
                if (Object.defineProperty(this, 'name', {
                        enumerable: !1,
                        writable: !1,
                        value: 'JisonLexerError'
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
            'function' == typeof Object.setPrototypeOf ? Object.setPrototypeOf(c.prototype, Error.prototype) : c.prototype = Object.create(Error.prototype), c.prototype.constructor = c, c.prototype.name = 'JisonLexerError';
            var i = {
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
                constructLexErrorInfo: function(j, k, l) {
                    if (j = '' + j, null == l && (l = !(j.indexOf('\n') > 0 && j.indexOf('^') > 0)), this.yylloc && l)
                        if ('function' == typeof this.prettyPrintRange) {
                            this.prettyPrintRange(this.yylloc);
                            /\n\s*$/.test(j) || (j += '\n'), j += '\n  Erroneous area:\n' + this.prettyPrintRange(this.yylloc);
                        } else if ('function' == typeof this.showPosition) {
                        var m = this.showPosition();
                        m && (j.length && '\n' !== j[j.length - 1] && '\n' !== m[0] ? j += '\n' + m : j += m);
                    }
                    var m = {
                        errStr: j,
                        recoverable: !!k,
                        text: this.match,
                        token: null,
                        line: this.yylineno,
                        loc: this.yylloc,
                        yy: this.yy,
                        lexer: this,
                        destroy: function() {
                            var n = !!this.recoverable;
                            for (var o in this)
                                this.hasOwnProperty(o) && 'object' == typeof o && (this[o] = void 0);
                            this.recoverable = n;
                        }
                    };
                    return this.__error_infos.push(m), m;
                },
                parseError: function(j, k, l) {
                    if (l || (l = this.JisonLexerError), this.yy) {
                        if (this.yy.parser && 'function' == typeof this.yy.parser.parseError)
                            return this.yy.parser.parseError.call(this, j, k, l) || this.ERROR;
                        if ('function' == typeof this.yy.parseError)
                            return this.yy.parseError.call(this, j, k, l) || this.ERROR;
                    }
                    throw new l(j, k);
                },
                yyerror: function(j) {
                    var k = '';
                    this.yylloc && (k = ' on line ' + (this.yylineno + 1));
                    var l = this.constructLexErrorInfo('Lexical error' + k + ': ' + j, this.options.lexerErrorsAreRecoverable),
                        m = Array.prototype.slice.call(arguments, 1);
                    return m.length && (l.extra_error_attributes = m), this.parseError(l.errStr, l, this.JisonLexerError) || this.ERROR;
                },
                cleanupAfterLex: function(j) {
                    if (this.setInput('', {}), !j) {
                        for (var k = this.__error_infos.length - 1; k >= 0; k--) {
                            var l = this.__error_infos[k];
                            l && 'function' == typeof l.destroy && l.destroy();
                        }
                        this.__error_infos.length = 0;
                    }
                    return this;
                },
                clear: function() {
                    this.yytext = '', this.yyleng = 0, this.match = '', this.matches = !1, this._more = !1, this._backtrack = !1;
                    var j = this.yylloc ? this.yylloc.last_column : 0;
                    this.yylloc = {
                        first_line: this.yylineno + 1,
                        first_column: j,
                        last_line: this.yylineno + 1,
                        last_column: j,
                        range: [
                            this.offset,
                            this.offset
                        ]
                    };
                },
                setInput: function(j, k) {
                    if (this.yy = k || this.yy || {}, !this.__decompressed) {
                        for (var l = this.rules, m = 0, n = l.length; m < n; m++) {
                            'number' == typeof(_v = l[m]) && (l[m] = l[_v]);
                        }
                        var o = this.conditions;
                        for (var p in o) {
                            var q = o[p],
                                r = q.rules,
                                s = (n = r.length, new Array(n + 1)),
                                t = new Array(n + 1);
                            for (m = 0; m < n; m++) {
                                var u = r[m],
                                    _v = l[u];
                                s[m + 1] = _v, t[m + 1] = u;
                            }
                            q.rules = t, q.__rule_regexes = s, q.__rule_count = n;
                        }
                        this.__decompressed = !0;
                    }
                    return this._input = j || '', this.clear(), this._signaled_error_token = !1, this.done = !1, this.yylineno = 0, this.matched = '', this.conditionStack = ['INITIAL'], this.__currentRuleSet__ = null, this.yylloc = {
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
                editRemainingInput: function(j, k) {
                    var l = j.call(this, this._input, k);
                    return 'string' != typeof l ? l && (this._input = '' + l) : this._input = l, this;
                },
                input: function() {
                    if (!this._input)
                        return null;
                    var j = this._input[0];
                    this.yytext += j, this.yyleng++, this.offset++, this.match += j, this.matched += j;
                    var k = 1,
                        l = !1;
                    if ('\n' === j)
                        l = !0;
                    else if ('\r' === j) {
                        l = !0;
                        var m = this._input[1];
                        '\n' === m && (k++, j += m, this.yytext += m, this.yyleng++, this.offset++, this.match += m, this.matched += m, this.yylloc.range[1]++);
                    }
                    return l ? (this.yylineno++, this.yylloc.last_line++, this.yylloc.last_column = 0) : this.yylloc.last_column++, this.yylloc.range[1]++, this._input = this._input.slice(k), j;
                },
                unput: function(j) {
                    var k = j.length,
                        l = j.split(/(?:\r\n?|\n)/g);
                    if (this._input = j + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - k), this.yyleng = this.yytext.length, this.offset -= k, this.match = this.match.substr(0, this.match.length - k), this.matched = this.matched.substr(0, this.matched.length - k), l.length > 1) {
                        this.yylineno -= l.length - 1, this.yylloc.last_line = this.yylineno + 1;
                        var m = this.match,
                            n = m.split(/(?:\r\n?|\n)/g);
                        1 === n.length && (n = (m = this.matched).split(/(?:\r\n?|\n)/g)), this.yylloc.last_column = n[n.length - 1].length;
                    } else
                        this.yylloc.last_column -= k;
                    return this.yylloc.range[1] = this.yylloc.range[0] + this.yyleng, this.done = !1, this;
                },
                more: function() {
                    return this._more = !0, this;
                },
                reject: function() {
                    if (this.options.backtrack_lexer)
                        this._backtrack = !0;
                    else {
                        var j = '';
                        this.yylloc && (j = ' on line ' + (this.yylineno + 1));
                        var k = this.constructLexErrorInfo('Lexical error' + j + ': You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).', !1);
                        this._signaled_error_token = this.parseError(k.errStr, k, this.JisonLexerError) || this.ERROR;
                    }
                    return this;
                },
                less: function(j) {
                    return this.unput(this.match.slice(j));
                },
                pastInput: function(j, k) {
                    var l = this.matched.substring(0, this.matched.length - this.match.length);
                    j < 0 ? j = l.length : j || (j = 20), k < 0 ? k = l.length : k || (k = 1);
                    var m = (l = l.substr(2 * -j - 2)).replace(/\r\n|\r/g, '\n').split('\n');
                    return (l = (m = m.slice(-k)).join('\n')).length > j && (l = '...' + l.substr(-j)), l;
                },
                upcomingInput: function(j, k) {
                    var l = this.match;
                    j < 0 ? j = l.length + this._input.length : j || (j = 20), k < 0 ? k = j : k || (k = 1), l.length < 2 * j + 2 && (l += this._input.substring(0, 2 * j + 2));
                    var m = l.replace(/\r\n|\r/g, '\n').split('\n');
                    return (l = (m = m.slice(0, k)).join('\n')).length > j && (l = l.substring(0, j) + '...'), l;
                },
                showPosition: function(j, k) {
                    var l = this.pastInput(j).replace(/\s/g, ' '),
                        m = new Array(l.length + 1).join('-');
                    return l + this.upcomingInput(k).replace(/\s/g, ' ') + '\n' + m + '^';
                },
                deriveLocationInfo: function(j, k, l, m) {
                    var n = {
                        first_line: 1,
                        first_column: 0,
                        last_line: 1,
                        last_column: 0,
                        range: [
                            0,
                            0
                        ]
                    };
                    return j && (n.first_line = 0 | j.first_line, n.last_line = 0 | j.last_line, n.first_column = 0 | j.first_column, n.last_column = 0 | j.last_column, j.range && (n.range[0] = 0 | j.range[0], n.range[1] = 0 | j.range[1])), (n.first_line <= 0 || n.last_line < n.first_line) && (n.first_line <= 0 && k && (n.first_line = 0 | k.last_line, n.first_column = 0 | k.last_column, k.range && (n.range[0] = 0 | j.range[1])), (n.last_line <= 0 || n.last_line < n.first_line) && l && (n.last_line = 0 | l.first_line, n.last_column = 0 | l.first_column, l.range && (n.range[1] = 0 | j.range[0])), n.first_line <= 0 && m && (n.last_line <= 0 || m.last_line <= n.last_line) && (n.first_line = 0 | m.first_line, n.first_column = 0 | m.first_column, m.range && (n.range[0] = 0 | m.range[0])), n.last_line <= 0 && m && (n.first_line <= 0 || m.first_line >= n.first_line) && (n.last_line = 0 | m.last_line, n.last_column = 0 | m.last_column, m.range && (n.range[1] = 0 | m.range[1]))), n.last_line <= 0 && (n.first_line <= 0 ? (n.first_line = this.yylloc.first_line, n.last_line = this.yylloc.last_line, n.first_column = this.yylloc.first_column, n.last_column = this.yylloc.last_column, n.range[0] = this.yylloc.range[0], n.range[1] = this.yylloc.range[1]) : (n.last_line = this.yylloc.last_line, n.last_column = this.yylloc.last_column, n.range[1] = this.yylloc.range[1])), n.first_line <= 0 && (n.first_line = n.last_line, n.first_column = 0, n.range[1] = n.range[0]), n.first_column < 0 && (n.first_column = 0), n.last_column < 0 && (n.last_column = n.first_column > 0 ? n.first_column : 80), n;
                },
                prettyPrintRange: function(j, k, l) {
                    j = this.deriveLocationInfo(j, k, l);
                    var m = (this.matched + this._input).split('\n'),
                        n = Math.max(1, k ? k.first_line : j.first_line - 3),
                        o = Math.max(1, l ? l.last_line : j.last_line + 1),
                        p = 1 + Math.log10(1 | o) | 0,
                        q = new Array(p).join(' '),
                        r = [],
                        s = m.slice(n - 1, o + 1).map(function(t, u) {
                            var v = u + n,
                                w = (q + v).substr(-p) + ': ' + t,
                                x = new Array(p + 1).join('^'),
                                y = 3,
                                z = 0;
                            (v === j.first_line ? (y += j.first_column, z = Math.max(2, (v === j.last_line ? j.last_column : t.length) - j.first_column + 1)) : v === j.last_line ? z = Math.max(2, j.last_column + 1) : v > j.first_line && v < j.last_line && (z = Math.max(2, t.length + 1)), z) && (w += '\n' + x + new Array(y).join('.') + new Array(z).join('^'), t.trim().length > 0 && r.push(u));
                            return w = w.replace(/\t/g, ' ');
                        });
                    if (r.length > 4) {
                        var t = r[1] + 1,
                            u = r[r.length - 2] - 1,
                            v = new Array(p + 1).join(' ') + '  (...continued...)';
                        v += '\n' + new Array(p + 1).join('-') + '  (---------------)', s.splice(t, u - t + 1, v);
                    }
                    return s.join('\n');
                },
                describeYYLLOC: function(j, k) {
                    var l, m = j.first_line,
                        n = j.last_line,
                        o = j.first_column,
                        p = j.last_column;
                    if (0 === n - m ? (l = 'line ' + m + ', ', l += p - o <= 1 ? 'column ' + o : 'columns ' + o + ' .. ' + p) : l = 'lines ' + m + '(column ' + o + ') .. ' + n + '(column ' + p + ')', j.range && k) {
                        var q = j.range[0],
                            r = j.range[1] - 1;
                        l += r <= q ? ' {String Offset: ' + q + '}' : ' {String Offset range: ' + q + ' .. ' + r + '}';
                    }
                    return l;
                },
                test_match: function(j, k) {
                    var l, m, n, o, p;
                    if (this.options.backtrack_lexer && (n = {
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
                        }), p = (o = j[0]).length, (m = o.split(/(?:\r\n?|\n)/g)).length > 1 ? (this.yylineno += m.length - 1, this.yylloc.last_line = this.yylineno + 1, this.yylloc.last_column = m[m.length - 1].length) : this.yylloc.last_column += p, this.yytext += o, this.match += o, this.matched += o, this.matches = j, this.yyleng = this.yytext.length, this.yylloc.range[1] += p, this.offset += p, this._more = !1, this._backtrack = !1, this._input = this._input.slice(p), l = this.performAction.call(this, this.yy, k, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), l)
                        return l;
                    if (this._backtrack) {
                        for (var q in n)
                            this[q] = n[q];
                        return this.__currentRuleSet__ = null, !1;
                    }
                    return !!this._signaled_error_token && (l = this._signaled_error_token, this._signaled_error_token = !1, l);
                },
                next: function() {
                    if (this.done)
                        return this.clear(), this.EOF;
                    var j, k, l, m;
                    this._input || (this.done = !0), this._more || this.clear();
                    var n = this.__currentRuleSet__;
                    if (!(n || (n = this.__currentRuleSet__ = this._currentRules()) && n.rules)) {
                        var o = '';
                        this.options.trackPosition && (o = ' on line ' + (this.yylineno + 1));
                        var p = this.constructLexErrorInfo('Internal lexer engine error' + o + ': The lex grammar programmer pushed a non-existing condition name "' + this.topState() + '"; this is a fatal error and should be reported to the application programmer team!', !1);
                        return this.parseError(p.errStr, p, this.JisonLexerError) || this.ERROR;
                    }
                    for (var o = n.rules, p = n.__rule_regexes, q = n.__rule_count, r = 1; r <= q; r++)
                        if ((l = this._input.match(p[r])) && (!k || l[0].length > k[0].length)) {
                            if (k = l, m = r, this.options.backtrack_lexer) {
                                if (!1 !== (j = this.test_match(l, o[r])))
                                    return j;
                                if (this._backtrack) {
                                    k = void 0;
                                    continue;
                                }
                                return !1;
                            }
                            if (!this.options.flex)
                                break;
                        }
                    if (k)
                        return !1 !== (j = this.test_match(k, o[m])) && j;
                    if (this._input) {
                        h = '';
                        this.options.trackPosition && (h = ' on line ' + (this.yylineno + 1));
                        _i = this.constructLexErrorInfo('Lexical error' + h + ': Unrecognized text.', this.options.lexerErrorsAreRecoverable);
                        var s = this._input,
                            t = this.topState(),
                            u = this.conditionStack.length;
                        return (j = this.parseError(_i.errStr, _i, this.JisonLexerError) || this.ERROR) === this.ERROR && (this.matches || s !== this._input || t !== this.topState() || u !== this.conditionStack.length || this.input()), j;
                    }
                    return this.done = !0, this.clear(), this.EOF;
                },
                lex: function() {
                    var j;
                    for ('function' == typeof this.pre_lex && (j = this.pre_lex.call(this, 0)), 'function' == typeof this.options.pre_lex && (j = this.options.pre_lex.call(this, j) || j), this.yy && 'function' == typeof this.yy.pre_lex && (j = this.yy.pre_lex.call(this, j) || j); !j;)
                        j = this.next();
                    return this.yy && 'function' == typeof this.yy.post_lex && (j = this.yy.post_lex.call(this, j) || j), 'function' == typeof this.options.post_lex && (j = this.options.post_lex.call(this, j) || j), 'function' == typeof this.post_lex && (j = this.post_lex.call(this, j) || j), j;
                },
                fastLex: function() {
                    for (var j; !j;)
                        j = this.next();
                    return j;
                },
                canIUse: function() {
                    return {
                        fastLex: !('function' == typeof this.pre_lex || 'function' == typeof this.options.pre_lex || this.yy && 'function' == typeof this.yy.pre_lex || this.yy && 'function' == typeof this.yy.post_lex || 'function' == typeof this.options.post_lex || 'function' == typeof this.post_lex) && 'function' == typeof this.fastLex
                    };
                },
                begin: function(j) {
                    return this.pushState(j);
                },
                pushState: function(j) {
                    return this.conditionStack.push(j), this.__currentRuleSet__ = null, this;
                },
                popState: function() {
                    return this.conditionStack.length - 1 > 0 ? (this.__currentRuleSet__ = null, this.conditionStack.pop()) : this.conditionStack[0];
                },
                topState: function(j) {
                    return (j = this.conditionStack.length - 1 - Math.abs(j || 0)) >= 0 ? this.conditionStack[j] : 'INITIAL';
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
                JisonLexerError: c,
                performAction: function(j, k, l) {
                    if (1 !== k)
                        return this.simpleCaseActionClusters[k];
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
            return i;
        }();

        function _i() {
            this.yy = {};
        }
        return g.lexer = h, _h.prototype = g, g.Parser = _h, new _h();
    }();
    e = f, f.Parser;
}), b.register('cnLfT', function(c, d) {
    Object.defineProperty(c.exports, '__esModule', {
        value: !0
    }), c.exports.flip = _h;
    var e, f = b('+U0iu'),
        g = (e = f) && e.__esModule ? e : {
            default: e
        };

    function _h(i, j) {
        return 'MathExpression' === i.type ? function(k, l) {
            switch (k = function(m, n) {
                    var o = (0, g.default)(m.left, m.right, n),
                        p = _h(o.left, n),
                        q = _h(o.right, n);
                    'MathExpression' === p.type && 'MathExpression' === q.type && ('/' === p.operator && '*' === q.operator || '-' === p.operator && '+' === q.operator || '*' === p.operator && '/' === q.operator || '+' === p.operator && '-' === q.operator) && (_h(p.right, q.right) ? o = (0, g.default)(p.left, q.left, n) : _h(p.right, q.left) && (o = (0, g.default)(p.left, q.right, n)), p = _h(o.left, n), q = _h(o.right, n));
                    return m.left = p, m.right = q, m;
                }(k, l), k.operator) {
                case '+':
                case '-':
                    return function(m, n) {
                        var o = m,
                            p = o.left,
                            q = o.right,
                            r = o.operator;
                        if ('CssVariable' === p.type || 'CssVariable' === q.type)
                            return m;
                        if (0 === q.value)
                            return p;
                        if (0 === p.value && '+' === r)
                            return q;
                        if (0 === p.value && '-' === r)
                            return _h(q);
                        p.type === q.type && _h(p.type) && ((m = Object.assign({}, p)).value = '+' === r ? p.value + q.value : p.value - q.value);
                        if (_h(p.type) && ('+' === q.operator || '-' === q.operator) && 'MathExpression' === q.type) {
                            if (p.type === q.left.type)
                                return (m = Object.assign({}, m)).left = _h({
                                    type: 'MathExpression',
                                    operator: r,
                                    left: p,
                                    right: q.left
                                }, n), m.right = q.right, m.operator = '-' === r ? _h(q.operator) : q.operator, _h(m, n);
                            if (p.type === q.right.type)
                                return (m = Object.assign({}, m)).left = _h({
                                    type: 'MathExpression',
                                    operator: '-' === r ? _h(q.operator) : q.operator,
                                    left: p,
                                    right: q.right
                                }, n), m.right = q.left, _h(m, n);
                        }
                        if ('MathExpression' === p.type && ('+' === p.operator || '-' === p.operator) && _h(q.type)) {
                            if (q.type === p.left.type)
                                return (m = Object.assign({}, p)).left = _h({
                                    type: 'MathExpression',
                                    operator: r,
                                    left: p.left,
                                    right: q
                                }, n), _h(m, n);
                            if (q.type === p.right.type)
                                return m = Object.assign({}, p), '-' === p.operator ? (m.right = _h({
                                    type: 'MathExpression',
                                    operator: '-' === r ? '+' : '-',
                                    left: q,
                                    right: p.right
                                }, n), m.operator = '-' === r ? '-' : '+') : m.right = _h({
                                    type: 'MathExpression',
                                    operator: r,
                                    left: p.right,
                                    right: q
                                }, n), m.right.value < 0 && (m.right.value *= -1, m.operator = '-' === m.operator ? '+' : '-'), _h(m, n);
                        }
                        return m;
                    }(k, l);
                case '/':
                    return function(m, n) {
                        if (!_h(m.right.type))
                            return m;
                        if ('Value' !== m.right.type)
                            throw new Error('Cannot divide by "' + m.right.unit + '", number expected');
                        if (0 === m.right.value)
                            throw new Error('Cannot divide by zero');
                        if ('MathExpression' === m.left.type)
                            return _h(m.left.left.type) && _h(m.left.right.type) ? (m.left.left.value /= m.right.value, m.left.right.value /= m.right.value, _h(m.left, n)) : m;
                        if (_h(m.left.type))
                            return m.left.value /= m.right.value, m.left;
                        return m;
                    }(k, l);
                case '*':
                    return function(m) {
                        if ('MathExpression' === m.left.type && 'Value' === m.right.type) {
                            if (_h(m.left.left.type) && _h(m.left.right.type))
                                return m.left.left.value *= m.right.value, m.left.right.value *= m.right.value, m.left;
                        } else {
                            if (_h(m.left.type) && 'Value' === m.right.type)
                                return m.left.value *= m.right.value, m.left;
                            if ('Value' === m.left.type && 'MathExpression' === m.right.type) {
                                if (_h(m.right.left.type) && _h(m.right.right.type))
                                    return m.right.left.value *= m.left.value, m.right.right.value *= m.left.value, m.right;
                            } else if ('Value' === m.left.type && _h(m.right.type))
                                return m.right.value *= m.left.value, m.right;
                        }
                        return m;
                    }(k);
            }
            return k;
        }(i, j) : 'Calc' === i.type ? _h(i.value, j) : i;
    }

    function _h(i, j) {
        return i.type === j.type && i.value === j.value;
    }

    function _h(i) {
        switch (i) {
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

    function _h(i) {
        return '+' === i ? '-' : '+';
    }

    function _h(i) {
        return _l(i.type) ? i.value = -i.value : 'MathExpression' == i.type && (i.left = _h(i.left), i.right = _h(i.right)), i;
    }
    c.exports.default = _g;
}), b.register('+U0iu', function(c, d) {
    Object.defineProperty(c.exports, '__esModule', {
        value: !0
    });
    var e, f = b('L6/8r'),
        g = (e = f) && e.__esModule ? e : {
            default: e
        };
    c.exports.default = function(h, i, j) {
        switch (h.type) {
            case 'LengthValue':
            case 'AngleValue':
            case 'TimeValue':
            case 'FrequencyValue':
            case 'ResolutionValue':
                return function(k, l, m) {
                    l.type === k.type && (l = {
                        type: k.type,
                        value: (0, g.default)(l.value, l.unit, k.unit, m),
                        unit: k.unit
                    });
                    return {
                        left: k,
                        right: l
                    };
                }(h, i, j);
            default:
                return {
                    left: h,
                        right: i
                };
        }
    }, c.exports = c.exports.default;
}), b.register('L6/8r', function(c, d) {
    var e = {
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
    c.exports = function(f, g, h, i) {
        if (!e.hasOwnProperty(h))
            throw new Error('Cannot convert to ' + h);
        if (!e[h].hasOwnProperty(g))
            throw new Error('Cannot convert from ' + g + ' to ' + h);
        var j = e[h][g] * f;
        return !1 !== i ? (i = Math.pow(10, parseInt(i) || 5), Math.round(j * i) / i) : j;
    };
}), b.register('afpUU', function(c, d) {
    Object.defineProperty(c.exports, '__esModule', {
        value: !0
    }), c.exports.default = function(e, f, g) {
        var h = _g(f, g);
        return 'MathExpression' === f.type && (h = e + '(' + h + ')'), h;
    };
    var e = b('cnLfT'),
        f = {
            '*': 0,
            '/': 0,
            '+': 1,
            '-': 1
        };

    function g(h, i) {
        if (!1 !== i) {
            var j = Math.pow(10, i);
            return Math.round(h * j) / j;
        }
        return h;
    }

    function _g(h, i) {
        switch (h.type) {
            case 'MathExpression':
                var j = h.left,
                    k = h.right,
                    _l = h.operator,
                    m = '';
                return 'MathExpression' === j.type && f[_l] < f[j.operator] ? m += '(' + _g(j, i) + ')' : m += _g(j, i), m += ' ' + h.operator + ' ', 'MathExpression' === k.type && f[_l] < f[k.operator] ? m += '(' + _g(k, i) + ')' : 'MathExpression' === k.type && '-' === _l && [
                    '+',
                    '-'
                ].includes(k.operator) ? (k.operator = (0, e.flip)(k.operator), m += _g(k, i)) : m += _g(k, i), m;
            case 'Value':
                return _e(h.value, i);
            case 'CssVariable':
                return h.fallback ? 'var(' + h.value + ', ' + _g(h.fallback, i) + ')' : 'var(' + h.value + ')';
            case 'Calc':
                return h.prefix ? '-' + h.prefix + '-calc(' + _g(h.value, i) + ')' : 'calc(' + _g(h.value, i) + ')';
            default:
                return _e(h.value, i) + h.unit;
        }
    }
    c.exports = c.exports.default;
}), b.register('F2lA2', function(c, d) {
    _l(c.exports, 'mathSign', function() {
        return _j;
    }), _l(c.exports, 'isPercent', function() {
        return _k;
    }), _l(c.exports, 'isNumber', function() {
        return _l;
    }), _l(c.exports, 'isNumOrStr', function() {
        return _m;
    }), _l(c.exports, 'uniqueId', function() {
        return _o;
    }), _l(c.exports, 'getPercentValue', function() {
        return _p;
    }), _l(c.exports, 'getAnyElementOfObject', function() {
        return _q;
    }), _l(c.exports, 'hasDuplicate', function() {
        return _r;
    }), _l(c.exports, 'interpolateNumber', function() {
        return _s;
    }), _l(c.exports, 'findEntryInArray', function() {
        return _t;
    });
    var _e = b('X82hY'),
        f = b('iieiP0'),
        g = b('aZXqS'),
        h = b('S334r'),
        i = b('ziHnI'),
        _j = function(k) {
            return 0 === k ? 0 : k > 0 ? 1 : -1;
        },
        _k = function(_l) {
            return _p(i)(_l) && _l.indexOf('%') === _l.length - 1;
        },
        _l = function(m) {
            return _p(h)(m) && !_p(g)(m);
        },
        _m = function(n) {
            return _l(n) || _p(i)(n);
        },
        n = 0,
        _o = function(_p) {
            var q = ++n;
            return ''.concat(_p || '').concat(q);
        },
        _p = function(q, r) {
            var s, t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                u = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (!_l(q) && !_r(i)(q))
                return t;
            if (_k(q)) {
                var v = q.indexOf('%');
                s = r * parseFloat(q.slice(0, v)) / 100;
            } else
                s = +q;
            return _r(g)(s) && (s = t), u && s > r && (s = r), s;
        },
        _q = function(_r) {
            if (!_r)
                return null;
            var s = Object.keys(_r);
            return s && s.length ? _r[s[0]] : null;
        },
        _r = function(s) {
            if (!_t(f)(s))
                return !1;
            for (var t = s.length, u = {}, v = 0; v < t; v++) {
                if (u[s[v]])
                    return !0;
                u[s[v]] = !0;
            }
            return !1;
        },
        _s = function(_t, u) {
            return _l(_t) && _l(u) ? function(v) {
                return _t + v * (u - _t);
            } : function() {
                return u;
            };
        };

    function _t(u, v, w) {
        return u && u.length ? u.find(function(x) {
            return x && ('function' == typeof v ? v(x) : _c(_e)(x, v)) === w;
        }) : null;
    }
}), b.register('X82hY', function(_c, d) {
    var e = b('hsO+d');
    _c.exports = function(f, g, h) {
        var i = null == f ? void 0 : e(f, g);
        return void 0 === i ? h : i;
    };
}), b.register('hsO+d', function(c, d) {
    var e = b('6me+x'),
        f = b('xFmyf');
    c.exports = function(g, h) {
        for (var i = 0, j = (h = e(h, g)).length; null != g && i < j;)
            g = g[f(h[i++])];
        return i && i == j ? g : void 0;
    };
}), b.register('6me+x', function(c, d) {
    var e = b('iieiP0'),
        f = b('p8ung'),
        g = b('lUwrs'),
        h = b('EMLag');
    c.exports = function(i, j) {
        return e(i) ? i : f(i, j) ? [i] : g(h(i));
    };
}), b.register('p8ung', function(c, d) {
    var e = b('iieiP0'),
        f = b('re1Y4'),
        g = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        h = /^\w*$/;
    c.exports = function(i, j) {
        if (e(i))
            return !1;
        var k = typeof i;
        return !('number' != k && 'symbol' != k && 'boolean' != k && null != i && !f(i)) || (h.test(i) || !g.test(i) || null != j && i in Object(j));
    };
}), b.register('re1Y4', function(c, d) {
    var e = b('5H2CR'),
        f = b('pQneJ0');
    c.exports = function(g) {
        return 'symbol' == typeof g || f(g) && '[object Symbol]' == e(g);
    };
}), b.register('lUwrs', function(c, d) {
    var e = b('rq552'),
        f = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        g = /\\(\\)?/g,
        h = e(function(i) {
            var j = [];
            return 46 === i.charCodeAt(0) && j.push(''), i.replace(f, function(k, l, m, n) {
                j.push(m ? n.replace(g, '$1') : l || k);
            }), j;
        });
    c.exports = h;
}), b.register('rq552', function(c, d) {
    var e = b('KbA2K');
    c.exports = function(f) {
        var g = e(f, function(h) {
                return 500 === b.size && b.clear(), h;
            }),
            h = g.cache;
        return g;
    };
}), b.register('KbA2K', function(c, d) {
    var e = b('HYmse');

    function f(g, h) {
        if ('function' != typeof g || null != h && 'function' != typeof h)
            throw new TypeError('Expected a function');
        var i = function() {
            var j = arguments,
                k = h ? h.apply(this, j) : j[0],
                l = i.cache;
            if (l.has(k))
                return l.get(k);
            var m = g.apply(this, j);
            return i.cache = l.set(k, m) || l, m;
        };
        return i.cache = new(f.Cache || e)(), i;
    }
    _f.Cache = e, c.exports = _f;
}), b.register('EMLag', function(c, d) {
    var e = b('JpNt6');
    c.exports = function(f) {
        return null == f ? '' : e(f);
    };
}), b.register('JpNt6', function(c, d) {
    var e = b('h30YM'),
        _f = b('w5x2T0'),
        g = b('iieiP0'),
        h = b('re1Y4'),
        i = e ? e.prototype : void 0,
        j = i ? i.toString : void 0;
    c.exports = function c(k) {
        if ('string' == typeof k)
            return k;
        if (g(k))
            return _f(k, c) + '';
        if (h(k))
            return j ? j.call(k) : '';
        var l = k + '';
        return '0' == l && 1 / k == -Infinity ? '-0' : l;
    };
}), b.register('w5x2T0', function(c, d) {
    c.exports = function(e, f) {
        for (var g = -1, h = null == e ? 0 : e.length, i = Array(h); ++g < h;)
            i[g] = f(e[g], g, e);
        return i;
    };
}), b.register('xFmyf', function(c, d) {
    var e = b('re1Y4');
    c.exports = function(f) {
        if ('string' == typeof f || e(f))
            return f;
        var g = f + '';
        return '0' == g && 1 / f == -Infinity ? '-0' : g;
    };
}), b.register('aZXqS', function(c, d) {
    var e = b('S334r');
    c.exports = function(f) {
        return e(f) && f != +f;
    };
}), b.register('S334r', function(c, d) {
    var e = b('5H2CR'),
        f = b('pQneJ0');
    c.exports = function(g) {
        return 'number' == typeof g || f(g) && '[object Number]' == e(g);
    };
}), b.register('ziHnI', function(c, d) {
    var e = b('5H2CR'),
        f = b('iieiP0'),
        g = b('pQneJ0');
    c.exports = function(h) {
        return 'string' == typeof h || !f(h) && g(h) && '[object String]' == e(h);
    };
}), b.register('udXfZ', function(c, d) {
    _g(c.exports, 'Global', function() {
        return b;
    });
    var e = {
        isSsr: !('undefined' != typeof window && window.document && window.document.createElement && window.setTimeout),
        get: function(f) {
            return e[f];
        },
        set: function(f, _g) {
            if ('string' == typeof f)
                e[f] = _g;
            else {
                var h = Object.keys(f);
                h && h.length && h.forEach(function(i) {
                    e[i] = f[i];
                });
            }
        }
    };
}), b.register('WWlCf', function(c, d) {
    _h(c.exports, 'getStringSize', function() {
        return _k;
    }), _h(c.exports, 'getOffset', function() {
        return _l;
    }), _h(c.exports, 'calculateChartCoordinate', function() {
        return _m;
    });
    var e = b('udXfZ');

    function f(g, _h) {
        var i = Object.keys(g);
        if (Object.getOwnPropertySymbols) {
            var j = Object.getOwnPropertySymbols(g);
            _h && (j = j.filter(function(k) {
                return Object.getOwnPropertyDescriptor(g, k).enumerable;
            })), i.push.apply(i, j);
        }
        return i;
    }

    function f(g) {
        for (var h = 1; h < arguments.length; h++) {
            var i = null != arguments[h] ? arguments[h] : {};
            h % 2 ? _p(Object(i), !0).forEach(function(j) {
                _f(g, j, i[j]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(g, Object.getOwnPropertyDescriptors(i)) : _p(Object(i)).forEach(function(j) {
                Object.defineProperty(g, j, Object.getOwnPropertyDescriptor(i, j));
            });
        }
        return g;
    }

    function _f(g, h, i) {
        return h in g ? Object.defineProperty(g, h, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : g[h] = i, g;
    }

    function f(g) {
        return function(h) {
            if (Array.isArray(h))
                return _f(h);
        }(g) || function(h) {
            if ('undefined' != typeof Symbol && Symbol.iterator in Object(h))
                return Array.from(h);
        }(g) || function(h, i) {
            if (!h)
                return;
            if ('string' == typeof h)
                return _f(h, i);
            var j = Object.prototype.toString.call(h).slice(8, -1);
            'Object' === j && h.constructor && (j = h.constructor.name);
            if ('Map' === j || 'Set' === j)
                return Array.from(h);
            if ('Arguments' === j || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(j))
                return _f(h, i);
        }(g) || function() {
            throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }

    function _f(g, h) {
        (null == h || h > g.length) && (h = g.length);
        for (var i = 0, j = new Array(h); i < h; i++)
            j[i] = g[i];
        return j;
    }
    var f = {
            widthCache: {},
            cacheCount: 0
        },
        g = {
            position: 'absolute',
            top: '-20000px',
            left: 0,
            padding: 0,
            margin: 0,
            border: 'none',
            whiteSpace: 'pre'
        },
        h = [
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
        i = 'recharts_measurement_span';
    var j = function(k) {
            return Object.keys(k).reduce(function(l, m) {
                return ''.concat(l).concat((_p = m, _p.split('').reduce(function(n, o) {
                    return o === o.toUpperCase() ? [].concat(_r(n), [
                        '-',
                        o.toLowerCase()
                    ]) : [].concat(_r(n), [o]);
                }, []).join('')), ':').concat((b = m, e = k[m], h.indexOf(b) >= 0 && e === +e ? ''.concat(e, 'px') : e), ';');
                var n, o, _p;
            }, '');
        },
        _k = function(l) {
            var m = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (null == l || e.Global.isSsr)
                return {
                    width: 0,
                    height: 0
                };
            var n = ''.concat(l),
                o = j(m),
                p = ''.concat(n, '-').concat(o);
            if (f.widthCache[p])
                return f.widthCache[p];
            try {
                var q = document.getElementById(i);
                q || ((q = document.createElement('span')).setAttribute('id', i), q.setAttribute('aria-hidden', 'true'), document.body.appendChild(q));
                var _r = _f(_f({}, g), m);
                Object.keys(_r).map(function(s) {
                    return q.style[s] = _r[s], s;
                }), q.textContent = n;
                var s = q.getBoundingClientRect(),
                    t = {
                        width: s.width,
                        height: s.height
                    };
                return f.widthCache[p] = t, ++f.cacheCount > 2000 && (f.cacheCount = 0, f.widthCache = {}), t;
            } catch (l) {
                return {
                    width: 0,
                    height: 0
                };
            }
        },
        _l = function(m) {
            var n = m.ownerDocument.documentElement,
                o = {
                    top: 0,
                    left: 0
                };
            return void 0 !== m.getBoundingClientRect && (o = m.getBoundingClientRect()), {
                top: o.top + window.pageYOffset - n.clientTop,
                left: o.left + window.pageXOffset - n.clientLeft
            };
        },
        _m = function(n, o) {
            return {
                chartX: Math.round(n.pageX - o.left),
                chartY: Math.round(n.pageY - o.top)
            };
        };
}), b.register('7p4uL', function(c, d) {
    _o(c.exports, 'getDisplayName', function() {
        return _n;
    }), _o(c.exports, 'findAllByType', function() {
        return _r;
    }), _o(c.exports, 'findChildByType', function() {
        return _s;
    }), _o(c.exports, 'validateWidthHeight', function() {
        return _t;
    }), _o(c.exports, 'isChildrenEqual', function() {
        return _w;
    }), _o(c.exports, 'renderByOrder', function() {
        return _y;
    }), _o(c.exports, 'getReactEventByType', function() {
        return _z;
    }), _o(c.exports, 'parseChildIndex', function() {
        return _A;
    });
    var e = b('ziHnI'),
        _f = b('X82hY'),
        g = b('4Eoue'),
        h = b('iieiP0'),
        i = b('LEQ5w'),
        j = b('FISDR'),
        k = b('F2lA2'),
        l = b('8/M1n');

    function m(n, _o) {
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
        }(n, _o);
        if (Object.getOwnPropertySymbols) {
            var s = Object.getOwnPropertySymbols(n);
            for (q = 0; q < s.length; q++)
                p = s[q], _o.indexOf(p) >= 0 || Object.prototype.propertyIsEnumerable.call(n, p) && (r[p] = n[p]);
        }
        return r;
    }
    var m = {
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
        _n = function(o) {
            return 'string' == typeof o ? o : o ? o.displayName || o.name || 'Component' : '';
        },
        o = null,
        p = null,
        q = function _s(r) {
            if (r === o && _w(h)(p))
                return p;
            var s = [];
            return i.Children.forEach(r, function(t) {
                _w(g)(t) || ((0, j.isFragment)(t) ? s = s.concat(_s(t.props.children)) : s.push(t));
            }), p = s, o = r, s;
        },
        _r = function(_s, t) {
            var u = [],
                v = [];
            return v = _w(h)(t) ? t.map(function(_w) {
                return _n(_w);
            }) : [_n(t)], q(_s).forEach(function(w) {
                var x = _t(_f)(w, 'type.displayName') || _t(_f)(w, 'type.name'); -
                1 !== v.indexOf(x) && u.push(w);
            }), u;
        },
        _s = function(_t, u) {
            var v = _r(_t, u);
            return v && v[0];
        },
        _t = function(u) {
            if (!u || !u.props)
                return !1;
            var v = u.props,
                w = v.width,
                x = v.height;
            return !(!(0, k.isNumber)(w) || w <= 0 || !(0, k.isNumber)(x) || x <= 0);
        },
        u = [
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
        v = function(w) {
            return w && w.type && _z(e)(w.type) && u.indexOf(w.type) >= 0;
        },
        _w = function _y(x, y) {
            if (x === y)
                return !0;
            var z = i.Children.count(x);
            if (z !== i.Children.count(y))
                return !1;
            if (0 === z)
                return !0;
            if (1 === z)
                return _x(_z(h)(x) ? x[0] : x, _z(h)(y) ? y[0] : y);
            for (var A = 0; A < z; A++) {
                var B = x[A],
                    C = y[A];
                if (_z(h)(B) || _z(h)(C)) {
                    if (!_y(B, C))
                        return !1;
                } else if (!_x(B, C))
                    return !1;
            }
            return !0;
        },
        _x = function(_y, z) {
            if (_z(g)(_y) && _z(g)(z))
                return !0;
            if (!_z(g)(_y) && !_z(g)(z)) {
                var A = _y.props || {},
                    B = A.children,
                    C = _u(A, ['children']),
                    D = z.props || {},
                    E = D.children,
                    F = _u(D, ['children']);
                return B && E ? (0, l.shallowEqual)(C, F) && _w(B, E) : !B && !E && (0, l.shallowEqual)(C, F);
            }
            return !1;
        },
        _y = function(_z, A) {
            var B = [],
                C = {};
            return q(_z).forEach(function(D, E) {
                if (v(D))
                    B.push(D);
                else if (D) {
                    var F = _n(D.type),
                        G = A[F] || {},
                        H = G.handler,
                        I = G.once;
                    if (H && (!I || !C[F])) {
                        var J = H(D, F, E);
                        B.push(J), C[F] = !0;
                    }
                }
            }), B;
        },
        _z = function(A) {
            var B = A && A.type;
            return B && m[B] ? m[B] : null;
        },
        _A = function(B, C) {
            return q(C).indexOf(B);
        };
}), b.register('8/M1n', function(c, d) {
    function e(f, g) {
        for (var h in f)
            if ({}.hasOwnProperty.call(f, h) && (!{}.hasOwnProperty.call(g, h) || f[h] !== g[h]))
                return !1;
        for (var i in g)
            if ({}.hasOwnProperty.call(g, i) && !{}.hasOwnProperty.call(f, i))
                return !1;
        return !0;
    }
    _g(c.exports, 'shallowEqual', function() {
        return b;
    });
}), b.register('zXKbN', function(c, d) {
    _g(c.exports, 'RADIAN', function() {
        return _e;
    }), _g(c.exports, 'polarToCartesian', function() {
        return _g;
    }), _g(c.exports, 'inRangeOfSector', function() {
        return _t;
    });
    b('4Eoue'), b('F2lA2'), b('2xCsV');

    function e(f, _g) {
        var h = Object.keys(f);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(f);
            _g && (i = i.filter(function(j) {
                return Object.getOwnPropertyDescriptor(f, j).enumerable;
            })), h.push.apply(h, i);
        }
        return h;
    }

    function e(f) {
        for (var g = 1; g < arguments.length; g++) {
            var h = null != arguments[g] ? arguments[g] : {};
            g % 2 ? _m(Object(h), !0).forEach(function(i) {
                _e(f, i, h[i]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(f, Object.getOwnPropertyDescriptors(h)) : _m(Object(h)).forEach(function(i) {
                Object.defineProperty(f, i, Object.getOwnPropertyDescriptor(h, i));
            });
        }
        return f;
    }

    function _e(f, g, h) {
        return g in f ? Object.defineProperty(f, g, {
            value: h,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : f[g] = h, f;
    }
    var _e = Math.PI / 180,
        f = function(g) {
            return 180 * g / Math.PI;
        },
        _g = function(h, i, j, k) {
            return {
                x: h + Math.cos(-_e * k) * j,
                y: i + Math.sin(-_e * k) * j
            };
        },
        h = function(i, j) {
            var k, l, _m, n, o, p, q = i.x,
                r = i.y,
                s = j.cx,
                _t = j.cy,
                _u = (l = {
                    x: s,
                    y: _t
                }, _m = (k = {
                    x: q,
                    y: r
                }).x, n = k.y, o = l.x, p = l.y, Math.sqrt(Math.pow(_m - o, 2) + Math.pow(n - p, 2)));
            if (_u <= 0)
                return {
                    radius: _u
                };
            var v = (q - s) / _u,
                w = Math.acos(v);
            return r > _t && (w = 2 * Math.PI - w), {
                radius: _u,
                angle: f(w),
                angleInRadian: w
            };
        },
        i = function(j, k) {
            var l = k.startAngle,
                m = k.endAngle,
                n = Math.floor(l / 360),
                o = Math.floor(m / 360);
            return j + 360 * Math.min(n, o);
        },
        j = function(k, l) {
            var m = k.x,
                n = k.y,
                o = h({
                    x: m,
                    y: n
                }, l),
                p = o.radius,
                q = o.angle,
                r = l.innerRadius,
                s = l.outerRadius;
            if (p < r || p > s)
                return !1;
            if (0 === p)
                return !0;
            var t, u = function(v) {
                    var w = v.startAngle,
                        x = v.endAngle,
                        y = Math.floor(w / 360),
                        z = Math.floor(x / 360),
                        A = Math.min(y, z);
                    return {
                        startAngle: w - 360 * A,
                        endAngle: x - 360 * A
                    };
                }(l),
                v = u.startAngle,
                w = u.endAngle,
                x = q;
            if (v <= w) {
                for (; x > w;)
                    x -= 360;
                for (; x < v;)
                    x += 360;
                t = x >= v && x <= w;
            } else {
                for (; x > v;)
                    x -= 360;
                for (; x < w;)
                    x += 360;
                t = x >= w && x <= v;
            }
            return t ? _e(_e({}, l), {}, {
                radius: p,
                angle: i(x, l)
            }) : null;
        };
}), b.register('2xCsV', function(c, d) {
    _F(c.exports, 'getValueByDataKey', function() {
        return _C;
    }), _F(c.exports, 'getDomainOfDataByKey', function() {
        return _C;
    }), _F(c.exports, 'calculateActiveTickIndex', function() {
        return _C;
    }), _F(c.exports, 'getMainColorOfGraphicItem', function() {
        return _D;
    }), _F(c.exports, 'getLegendProps', function() {
        return _E;
    }), _F(c.exports, 'getBarSizeList', function() {
        return _F;
    }), _F(c.exports, 'getBarPosition', function() {
        return _G;
    }), _F(c.exports, 'appendOffsetOfLegend', function() {
        return _H;
    }), _F(c.exports, 'parseErrorBarsOfAxis', function() {
        return _J;
    }), _F(c.exports, 'getDomainOfItemsWithSameAxis', function() {
        return _K;
    }), _F(c.exports, 'isCategoricalAxis', function() {
        return _L;
    }), _F(c.exports, 'getCoordinatesOfGrid', function() {
        return _M;
    }), _F(c.exports, 'getTicksOfAxis', function() {
        return _N;
    }), _F(c.exports, 'combineEventHandlers', function() {
        return _O;
    }), _F(c.exports, 'parseScale', function() {
        return _P;
    }), _F(c.exports, 'checkDomainOfScale', function() {
        return _R;
    }), _F(c.exports, 'findPositionOfBar', function() {
        return _S;
    }), _F(c.exports, 'truncateByDomain', function() {
        return _T;
    }), _F(c.exports, 'getStackGroupsByAxisId', function() {
        return _W;
    }), _F(c.exports, 'getTicksOfScale', function() {
        return _X;
    }), _F(c.exports, 'getCateCoordinateOfBar', function() {
        return _Y;
    }), _F(c.exports, 'getBaseValueOfBar', function() {
        return _Z;
    }), _F(c.exports, 'getStackedDataOfItem', function() {
        return _$;
    }), _F(c.exports, 'getDomainOfStackGroups', function() {
        return _ab;
    }), _F(c.exports, 'parseSpecifiedDomain', function() {
        return _db;
    }), _F(c.exports, 'getBandSizeOfAxis', function() {
        return _eb;
    }), _F(c.exports, 'parseDomainOfCategoryAxis', function() {
        return _fb;
    }), _F(c.exports, 'getTooltipItem', function() {
        return _gb;
    });
    var _e = b('4A0/8'),
        f = b('02bR4'),
        g = b('aZXqS'),
        h = b('MYM0h'),
        i = b('ziHnI'),
        j = b('iieiP0'),
        k = b('OhLNG'),
        l = b('KQxVJ'),
        m = b('rjFpa'),
        n = b('4R9wH'),
        o = b('X82hY'),
        p = b('4Eoue');
    b('slMQ8');
    var q = b('mqCU6'),
        r = b('nS6Rt'),
        s = b('S+bbB'),
        t = b('06FU7'),
        u = b('wbfug'),
        v = b('kCUYQ'),
        w = b('TVwoo'),
        x = b('NEzXZ'),
        y = b('F2lA2'),
        z = b('QJrdd'),
        A = b('7p4uL'),
        B = b('SLFbE');

    function C(D) {
        return function(E) {
            if (Array.isArray(E))
                return _C(E);
        }(D) || function(E) {
            if ('undefined' != typeof Symbol && Symbol.iterator in Object(E))
                return Array.from(E);
        }(D) || function(E, _F) {
            if (!E)
                return;
            if ('string' == typeof E)
                return _C(E, _F);
            var G = Object.prototype.toString.call(E).slice(8, -1);
            'Object' === G && E.constructor && (G = E.constructor.name);
            if ('Map' === G || 'Set' === G)
                return Array.from(E);
            if ('Arguments' === G || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(G))
                return _C(E, _F);
        }(D) || function() {
            throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }

    function _C(D, E) {
        (null == E || E > D.length) && (E = D.length);
        for (var F = 0, G = new Array(E); F < E; F++)
            G[F] = D[F];
        return G;
    }

    function C(D, E) {
        var F = Object.keys(D);
        if (Object.getOwnPropertySymbols) {
            var G = Object.getOwnPropertySymbols(D);
            E && (G = G.filter(function(H) {
                return Object.getOwnPropertyDescriptor(D, H).enumerable;
            })), F.push.apply(F, G);
        }
        return F;
    }

    function C(D) {
        for (var E = 1; E < arguments.length; E++) {
            var F = null != arguments[E] ? arguments[E] : {};
            E % 2 ? _S(Object(F), !0).forEach(function(G) {
                _C(D, G, F[G]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(D, Object.getOwnPropertyDescriptors(F)) : _S(Object(F)).forEach(function(G) {
                Object.defineProperty(D, G, Object.getOwnPropertyDescriptor(F, G));
            });
        }
        return D;
    }

    function _C(D, E, F) {
        return E in D ? Object.defineProperty(D, E, {
            value: F,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : D[E] = F, D;
    }

    function _C(D, E, F) {
        return _I(p)(D) || _I(p)(E) ? F : (0, y.isNumOrStr)(E) ? _I(o)(D, E, F) : _I(n)(E) ? E(D) : F;
    }

    function _C(D, E, F, G) {
        var H = _I(m)(D, function(_I) {
            return _o(_I, E);
        });
        if ('number' === F) {
            var I = H.filter(function(J) {
                return (0, y.isNumber)(J) || parseFloat(J);
            });
            return I.length ? [
                _I(l)(I),
                _I(k)(I)
            ] : [
                1 / 0,
                -1 / 0
            ];
        }
        return (G ? H.filter(function(I) {
            return !_I(p)(I);
        }) : H).map(function(_I) {
            return (0, y.isNumOrStr)(_I) || _I instanceof Date ? _I : '';
        });
    }
    var _C = function(D) {
            var E, F = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                G = arguments.length > 2 ? arguments[2] : void 0,
                H = arguments.length > 3 ? arguments[3] : void 0,
                I = -1,
                J = null !== (E = null == F ? void 0 : F.length) && void 0 !== E ? E : 0;
            if (J > 1) {
                if (H && 'angleAxis' === H.axisType && Math.abs(Math.abs(H.range[1] - H.range[0]) - 360) <= 0.000001)
                    for (var K = H.range, L = 0; L < J; L++) {
                        var M = L > 0 ? G[L - 1].coordinate : G[J - 1].coordinate,
                            N = G[L].coordinate,
                            O = L >= J - 1 ? G[0].coordinate : G[L + 1].coordinate,
                            P = void 0;
                        if ((0, y.mathSign)(N - M) !== (0, y.mathSign)(O - N)) {
                            var Q = [];
                            if ((0, y.mathSign)(O - N) === (0, y.mathSign)(K[1] - K[0])) {
                                P = O;
                                var R = N + K[1] - K[0];
                                Q[0] = Math.min(R, (R + M) / 2), Q[1] = Math.max(R, (R + M) / 2);
                            } else {
                                P = M;
                                var R = O + K[1] - K[0];
                                Q[0] = Math.min(N, (R + N) / 2), Q[1] = Math.max(N, (R + N) / 2);
                            }
                            var R = [
                                Math.min(N, (P + N) / 2),
                                Math.max(N, (P + N) / 2)
                            ];
                            if (D > R[0] && D <= R[1] || D >= Q[0] && D <= Q[1]) {
                                I = G[L].index;
                                break;
                            }
                        } else {
                            var Q = Math.min(M, O),
                                R = Math.max(M, O);
                            if (D > (Q + N) / 2 && D <= (R + N) / 2) {
                                I = G[L].index;
                                break;
                            }
                        }
                    }
                else
                    for (var M = 0; M < J; M++)
                        if (0 === M && D <= (F[M].coordinate + F[M + 1].coordinate) / 2 || M > 0 && M < J - 1 && D > (F[M].coordinate + F[M - 1].coordinate) / 2 && D <= (F[M].coordinate + F[M + 1].coordinate) / 2 || M === J - 1 && D > (F[M].coordinate + F[M - 1].coordinate) / 2) {
                            I = F[M].index;
                            break;
                        }
            } else
                I = 0;
            return I;
        },
        _D = function(E) {
            var F, G = E.type.displayName,
                H = E.props,
                I = H.stroke,
                J = H.fill;
            switch (G) {
                case 'Line':
                    F = I;
                    break;
                case 'Area':
                case 'Radar':
                    F = I && 'none' !== I ? I : J;
                    break;
                default:
                    F = J;
            }
            return F;
        },
        _E = function(F) {
            var G, H = F.children,
                I = F.formattedGraphicalItems,
                J = F.legendWidth,
                K = F.legendContent,
                L = (0, A.findChildByType)(H, z.Legend.displayName);
            return L ? (G = L.props && L.props.payload ? L.props && L.props.payload : 'children' === K ? (I || []).reduce(function(M, N) {
                var O = N.item,
                    P = N.props,
                    Q = P.sectors || P.data || [];
                return M.concat(Q.map(function(R) {
                    return {
                        type: L.props.iconType || O.props.legendType,
                        value: R.name,
                        color: R.fill,
                        payload: R
                    };
                }));
            }, []) : (I || []).map(function(M) {
                var N = M.item,
                    O = N.props,
                    P = O.dataKey,
                    Q = O.name,
                    R = O.legendType;
                return {
                    inactive: O.hide,
                    dataKey: P,
                    type: L.props.iconType || R || 'square',
                    color: _D(N),
                    value: Q || P,
                    payload: N.props
                };
            }), _T(_T(_T({}, L.props), z.Legend.getWithHeight(L, J)), {}, {
                payload: G,
                item: L
            })) : null;
        },
        _F = function(G) {
            var H = G.barSize,
                I = G.stackGroups,
                J = void 0 === I ? {} : I;
            if (!J)
                return {};
            for (var K = {}, L = Object.keys(J), M = 0, N = L.length; M < N; M++)
                for (var O = J[L[M]].stackGroups, P = Object.keys(O), Q = 0, R = P.length; Q < R; Q++) {
                    var S = O[P[Q]],
                        T = S.items,
                        U = S.cateAxisId,
                        V = T.filter(function(W) {
                            return (0, A.getDisplayName)(W.type).indexOf('Bar') >= 0;
                        });
                    if (V && V.length) {
                        var W = V[0].props.barSize,
                            X = V[0].props[U];
                        K[X] || (K[X] = []), K[X].push({
                            item: V[0],
                            stackList: V.slice(1),
                            barSize: _H(p)(W) ? H : W
                        });
                    }
                }
            return K;
        },
        _G = function(_H) {
            var I = _H.barGap,
                J = _H.barCategoryGap,
                K = _H.bandSize,
                L = _H.sizeList,
                M = void 0 === L ? [] : L,
                N = _H.maxBarSize,
                O = M.length;
            if (O < 1)
                return null;
            var P, Q = (0, y.getPercentValue)(I, K, 0, !0);
            if (M[0].barSize === +M[0].barSize) {
                var R = !1,
                    S = K / O,
                    T = M.reduce(function(U, V) {
                        return U + V.barSize || 0;
                    }, 0);
                (T += (O - 1) * Q) >= K && (T -= (O - 1) * Q, Q = 0), T >= K && S > 0 && (R = !0, T = O * (S *= 0.9));
                var U = {
                    offset: ((K - T) / 2 >> 0) - Q,
                    size: 0
                };
                P = M.reduce(function(V, W) {
                    var X = [].concat(_Q(V), [{
                        item: W.item,
                        position: {
                            offset: U.offset + U.size + Q,
                            size: R ? S : W.barSize
                        }
                    }]);
                    return U = X[X.length - 1].position, W.stackList && W.stackList.length && W.stackList.forEach(function(Y) {
                        X.push({
                            item: Y,
                            position: U
                        });
                    }), X;
                }, []);
            } else {
                var R = (0, y.getPercentValue)(J, K, 0, !0);
                K - 2 * R - (O - 1) * Q <= 0 && (Q = 0);
                var S = (K - 2 * R - (O - 1) * Q) / O;
                S > 1 && (S >>= 0);
                var T = N === +N ? Math.min(S, N) : S;
                P = M.reduce(function(U, V, W) {
                    var X = [].concat(_Q(U), [{
                        item: V.item,
                        position: {
                            offset: R + (S + Q) * W + (S - T) / 2,
                            size: T
                        }
                    }]);
                    return V.stackList && V.stackList.length && V.stackList.forEach(function(Y) {
                        X.push({
                            item: Y,
                            position: X[X.length - 1].position
                        });
                    }), X;
                }, []);
            }
            return P;
        },
        _H = function(I, J, K, L) {
            var M = K.children,
                N = K.width,
                O = K.margin,
                P = N - (O.left || 0) - (O.right || 0),
                Q = _E({
                    children: M,
                    legendWidth: P
                }),
                R = I;
            if (Q) {
                var S = L || {},
                    T = Q.align,
                    U = Q.verticalAlign,
                    V = Q.layout;
                ('vertical' === V || 'horizontal' === V && 'center' === U) && (0, y.isNumber)(I[T]) && (R = _T(_T({}, I), {}, _s({}, T, R[T] + (S.width || 0)))), ('horizontal' === V || 'vertical' === V && 'center' === T) && (0, y.isNumber)(I[U]) && (R = _T(_T({}, I), {}, _s({}, U, R[U] + (S.height || 0))));
            }
            return R;
        },
        I = function(J, K, L, M, N) {
            var O = K.props.children,
                P = (0, A.findAllByType)(O, 'ErrorBar').filter(function(Q) {
                    return function(R, S, T) {
                        return !!_R(p)(S) || ('horizontal' === R ? 'yAxis' === S : 'vertical' === R || 'x' === T ? 'xAxis' === S : 'y' !== T || 'yAxis' === S);
                    }(M, N, Q.props.direction);
                });
            if (P && P.length) {
                var Q = P.map(function(_R) {
                    return _R.props.dataKey;
                });
                return J.reduce(function(R, S) {
                    var T = _o(S, L, 0),
                        U = _Q(j)(T) ? [
                            _Q(l)(T),
                            _Q(k)(T)
                        ] : [
                            T,
                            T
                        ],
                        V = Q.reduce(function(W, X) {
                            var Y = _o(S, X, 0),
                                Z = U[0] - Math.abs(_Q(j)(Y) ? Y[0] : Y),
                                $ = U[1] + Math.abs(_Q(j)(Y) ? Y[1] : Y);
                            return [
                                Math.min(Z, W[0]),
                                Math.max($, W[1])
                            ];
                        }, [
                            1 / 0,
                            -1 / 0
                        ]);
                    return [
                        Math.min(V[0], R[0]),
                        Math.max(V[1], R[1])
                    ];
                }, [
                    1 / 0,
                    -1 / 0
                ]);
            }
            return null;
        },
        _J = function(K, L, M, N, O) {
            var P = L.map(function(_Q) {
                return I(K, _Q, M, O, N);
            }).filter(function(Q) {
                return !_Q(p)(Q);
            });
            return P && P.length ? P.reduce(function(_Q, R) {
                return [
                    Math.min(_Q[0], R[0]),
                    Math.max(_Q[1], R[1])
                ];
            }, [
                1 / 0,
                -1 / 0
            ]) : null;
        },
        _K = function(L, M, N, O, P) {
            var Q = M.map(function(R) {
                var S = R.props.dataKey;
                return 'number' === N && S && I(L, R, S, O) || _o(L, S, N, P);
            });
            if ('number' === N)
                return Q.reduce(function(R, S) {
                    return [
                        Math.min(R[0], S[0]),
                        Math.max(R[1], S[1])
                    ];
                }, [
                    1 / 0,
                    -1 / 0
                ]);
            var R = {};
            return Q.reduce(function(S, T) {
                for (var U = 0, V = T.length; U < V; U++)
                    R[T[U]] || (R[T[U]] = !0, S.push(T[U]));
                return S;
            }, []);
        },
        _L = function(M, N) {
            return 'horizontal' === M && 'xAxis' === N || 'vertical' === M && 'yAxis' === N || 'centric' === M && 'angleAxis' === N || 'radial' === M && 'radiusAxis' === N;
        },
        _M = function(N, O, P) {
            var Q, R, S = N.map(function(T) {
                return T.coordinate === O && (Q = !0), T.coordinate === P && (R = !0), T.coordinate;
            });
            return Q || S.push(O), R || S.push(P), S;
        },
        _N = function(O, P, Q) {
            if (!O)
                return null;
            var R = O.scale,
                S = O.duplicateDomain,
                T = O.type,
                U = O.range,
                V = 'scaleBand' === O.realScaleType ? R.bandwidth() / 2 : 2,
                W = (P || Q) && 'category' === T && R.bandwidth ? R.bandwidth() / V : 0;
            return W = 'angleAxis' === O.axisType ? 2 * (0, y.mathSign)(U[0] - U[1]) * W : W, P && (O.ticks || O.niceTicks) ? (O.ticks || O.niceTicks).map(function(X) {
                var Y = S ? S.indexOf(X) : X;
                return {
                    coordinate: R(Y) + W,
                    value: X,
                    offset: W
                };
            }) : O.isCategorical && O.categoricalDomain ? O.categoricalDomain.map(function(X, Y) {
                return {
                    coordinate: R(X) + W,
                    value: X,
                    index: Y,
                    offset: W
                };
            }) : R.ticks && !Q ? R.ticks(O.tickCount).map(function(X) {
                return {
                    coordinate: R(X) + W,
                    value: X,
                    offset: W
                };
            }) : R.domain().map(function(X, Y) {
                return {
                    coordinate: R(X) + W,
                    value: S ? S[X] : X,
                    index: Y,
                    offset: W
                };
            });
        },
        _O = function(P, Q, R) {
            var S;
            return _S(n)(R) ? S = R : _S(n)(Q) && (S = Q), _S(n)(P) || S ? function(T, U, V, W) {
                _S(n)(P) && P(T, U, V, W), _S(n)(S) && S(T, U, V, W);
            } : null;
        },
        _P = function(Q, R, S) {
            var T = Q.scale,
                U = Q.type,
                V = Q.layout,
                W = Q.axisType;
            if ('auto' === T)
                return 'radial' === V && 'radiusAxis' === W ? {
                    scale: r.scaleBand(),
                    realScaleType: 'band'
                } : 'radial' === V && 'angleAxis' === W ? {
                    scale: r.scaleLinear(),
                    realScaleType: 'linear'
                } : 'category' === U && R && (R.indexOf('LineChart') >= 0 || R.indexOf('AreaChart') >= 0 || R.indexOf('ComposedChart') >= 0 && !S) ? {
                    scale: r.scalePoint(),
                    realScaleType: 'point'
                } : 'category' === U ? {
                    scale: r.scaleBand(),
                    realScaleType: 'band'
                } : {
                    scale: r.scaleLinear(),
                    realScaleType: 'linear'
                };
            if (_S(i)(T)) {
                var X = 'scale'.concat(_S(h)(T));
                return {
                    scale: (r[X] || r.scalePoint)(),
                    realScaleType: r[X] ? X : 'point'
                };
            }
            return _S(n)(T) ? {
                scale: T
            } : {
                scale: r.scalePoint(),
                realScaleType: 'point'
            };
        },
        Q = 0.0001,
        _R = function(_S) {
            var T = _S.domain();
            if (T && !(T.length <= 2)) {
                var U = T.length,
                    V = _S.range(),
                    W = Math.min(V[0], V[1]) - Q,
                    X = Math.max(V[0], V[1]) + Q,
                    Y = _S(T[0]),
                    Z = _S(T[U - 1]);
                (Y < W || Y > X || Z < W || Z > X) && _S.domain([
                    T[0],
                    T[U - 1]
                ]);
            }
        },
        _S = function(T, U) {
            if (!T)
                return null;
            for (var V = 0, W = T.length; V < W; V++)
                if (T[V].item === U)
                    return T[V].position;
            return null;
        },
        _T = function(U, V) {
            if (!V || 2 !== V.length || !(0, y.isNumber)(V[0]) || !(0, y.isNumber)(V[1]))
                return U;
            var W = Math.min(V[0], V[1]),
                X = Math.max(V[0], V[1]),
                Y = [
                    U[0],
                    U[1]
                ];
            return (!(0, y.isNumber)(U[0]) || U[0] < W) && (Y[0] = W), (!(0, y.isNumber)(U[1]) || U[1] > X) && (Y[1] = X), Y[0] > X && (Y[0] = X), Y[1] < W && (Y[1] = W), Y;
        },
        U = {
            sign: function(V) {
                var W = V.length;
                if (!(W <= 0))
                    for (var X = 0, Y = V[0].length; X < Y; ++X)
                        for (var Z = 0, $ = 0, ab = 0; ab < W; ++ab) {
                            var bb = _W(g)(V[ab][X][1]) ? V[ab][X][0] : V[ab][X][1];
                            bb >= 0 ? (V[ab][X][0] = Z, V[ab][X][1] = Z + bb, Z = V[ab][X][1]) : (V[ab][X][0] = $, V[ab][X][1] = $ + bb, $ = V[ab][X][1]);
                        }
            },
            expand: t.default,
            none: u.default,
            silhouette: v.default,
            wiggle: w.default,
            positive: function(V) {
                var W = V.length;
                if (!(W <= 0))
                    for (var X = 0, Y = V[0].length; X < Y; ++X)
                        for (var Z = 0, $ = 0; $ < W; ++$) {
                            var ab = _W(g)(V[$][X][1]) ? V[$][X][0] : V[$][X][1];
                            ab >= 0 ? (V[$][X][0] = Z, V[$][X][1] = Z + ab, Z = V[$][X][1]) : (V[$][X][0] = 0, V[$][X][1] = 0);
                        }
            }
        },
        V = function(_W, X, Y) {
            var Z = X.map(function($) {
                return $.props.dataKey;
            });
            return (0, s.default)().keys(Z).value(function($, ab) {
                return +_o($, ab, 0);
            }).order(x.default).offset(U[Y])(_W);
        },
        _W = function(X, Y, Z, $, ab, bb) {
            if (!X)
                return null;
            var cb = (bb ? Y.reverse() : Y).reduce(function(db, eb) {
                var fb = eb.props,
                    gb = fb.stackId;
                if (fb.hide)
                    return db;
                var hb = eb.props[Z],
                    ib = db[hb] || {
                        hasStack: !1,
                        stackGroups: {}
                    };
                if ((0, y.isNumOrStr)(gb)) {
                    var jb = ib.stackGroups[gb] || {
                        numericAxisId: Z,
                        cateAxisId: $,
                        items: []
                    };
                    jb.items.push(eb), ib.hasStack = !0, ib.stackGroups[gb] = jb;
                } else
                    ib.stackGroups[(0, y.uniqueId)('_stackId_')] = {
                        numericAxisId: Z,
                        cateAxisId: $,
                        items: [eb]
                    };
                return _T(_T({}, db), {}, _s({}, hb, ib));
            }, {});
            return Object.keys(cb).reduce(function(db, eb) {
                var fb = cb[eb];
                return fb.hasStack && (fb.stackGroups = Object.keys(fb.stackGroups).reduce(function(gb, hb) {
                    var ib = fb.stackGroups[hb];
                    return _T(_T({}, gb), {}, _s({}, hb, {
                        numericAxisId: Z,
                        cateAxisId: $,
                        items: ib.items,
                        stackedData: V(X, ib.items, ab)
                    }));
                }, {})), _T(_T({}, db), {}, _s({}, eb, fb));
            }, {});
        },
        _X = function(Y, Z) {
            var $ = Z.realScaleType,
                ab = Z.type,
                bb = Z.tickCount,
                cb = Z.originalDomain,
                db = Z.allowDecimals,
                eb = $ || Z.scale;
            if ('auto' !== eb && 'linear' !== eb)
                return null;
            if (bb && 'number' === ab && cb && ('auto' === cb[0] || 'auto' === cb[1])) {
                var fb = Y.domain();
                if (!fb.length)
                    return null;
                var gb = (0, q.getNiceTickValues)(fb, bb, db);
                return Y.domain(function(hb, ib) {
                    return 'number' === ib ? [
                        _$(l)(hb),
                        _$(k)(hb)
                    ] : hb;
                }(gb, ab)), {
                    niceTicks: gb
                };
            }
            if (bb && 'number' === ab) {
                var fb = Y.domain();
                return {
                    niceTicks: (0, q.getTickValuesFixedDomain)(fb, bb, db)
                };
            }
            return null;
        },
        _Y = function(Z) {
            var $ = Z.axis,
                ab = Z.ticks,
                bb = Z.offset,
                cb = Z.bandSize,
                db = Z.entry,
                eb = Z.index;
            if ('category' === $.type)
                return ab[eb] ? ab[eb].coordinate + bb : null;
            var fb = _o(db, $.dataKey, $.domain[eb]);
            return _$(p)(fb) ? null : $.scale(fb) - cb / 2 + bb;
        },
        _Z = function(_$) {
            var ab = _$.numericAxis,
                bb = ab.scale.domain();
            if ('number' === ab.type) {
                var cb = Math.min(bb[0], bb[1]),
                    db = Math.max(bb[0], bb[1]);
                return cb <= 0 && db >= 0 ? 0 : db < 0 ? db : cb;
            }
            return bb[0];
        },
        _$ = function(ab, bb) {
            var cb = ab.props.stackId;
            if ((0, y.isNumOrStr)(cb)) {
                var db = bb[cb];
                if (db && db.items.length) {
                    for (var eb = -1, fb = 0, gb = db.items.length; fb < gb; fb++)
                        if (db.items[fb] === ab) {
                            eb = fb;
                            break;
                        }
                    return eb >= 0 ? db.stackedData[eb] : null;
                }
            }
            return null;
        },
        _ab = function(bb, cb, db) {
            return Object.keys(bb).reduce(function(eb, fb) {
                var gb = bb[fb].stackedData.reduce(function(hb, ib) {
                    var jb = ib.slice(cb, db + 1).reduce(function(kb, lb) {
                        return [
                            _eb(l)(lb.concat([kb[0]]).filter(y.isNumber)),
                            _eb(k)(lb.concat([kb[1]]).filter(y.isNumber))
                        ];
                    }, [
                        1 / 0,
                        -1 / 0
                    ]);
                    return [
                        Math.min(hb[0], jb[0]),
                        Math.max(hb[1], jb[1])
                    ];
                }, [
                    1 / 0,
                    -1 / 0
                ]);
                return [
                    Math.min(gb[0], eb[0]),
                    Math.max(gb[1], eb[1])
                ];
            }, [
                1 / 0,
                -1 / 0
            ]).map(function(_eb) {
                return _eb === 1 / 0 || _eb === -1 / 0 ? 0 : _eb;
            });
        },
        bb = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
        cb = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
        _db = function(eb, fb, gb) {
            if (_jb(n)(eb))
                return eb(fb, gb);
            if (!_jb(j)(eb))
                return fb;
            var hb = [];
            if ((0, y.isNumber)(eb[0]))
                hb[0] = gb ? eb[0] : Math.min(eb[0], fb[0]);
            else if (bb.test(eb[0])) {
                var ib = +bb.exec(eb[0])[1];
                hb[0] = fb[0] - ib;
            } else
                _jb(n)(eb[0]) ? hb[0] = eb[0](fb[0]) : hb[0] = fb[0];
            if ((0, y.isNumber)(eb[1]))
                hb[1] = gb ? eb[1] : Math.max(eb[1], fb[1]);
            else if (cb.test(eb[1])) {
                var ib = +cb.exec(eb[1])[1];
                hb[1] = fb[1] + ib;
            } else
                _jb(n)(eb[1]) ? hb[1] = eb[1](fb[1]) : hb[1] = fb[1];
            return hb;
        },
        _eb = function(fb, gb, hb) {
            if (fb && fb.scale && fb.scale.bandwidth) {
                var ib = fb.scale.bandwidth();
                if (!hb || ib > 0)
                    return ib;
            }
            if (fb && gb && gb.length >= 2) {
                for (var ib = _jb(f)(gb, function(_jb) {
                        return _jb.coordinate;
                    }), jb = 1 / 0, kb = 1, lb = ib.length; kb < lb; kb++) {
                    var mb = ib[kb],
                        nb = ib[kb - 1];
                    jb = Math.min((mb.coordinate || 0) - (nb.coordinate || 0), jb);
                }
                return jb === 1 / 0 ? 0 : jb;
            }
            return hb ? void 0 : 0;
        },
        _fb = function(gb, hb, ib) {
            return gb && gb.length ? _hb(_e)(gb, _hb(o)(ib, 'type.defaultProps.domain')) ? hb : gb : hb;
        },
        _gb = function(_hb, ib) {
            var jb = _hb.props,
                kb = jb.dataKey,
                lb = jb.name,
                mb = jb.unit,
                nb = jb.formatter,
                ob = jb.tooltipType,
                pb = jb.chartType;
            return _T(_T({}, (0, B.filterProps)(_hb)), {}, {
                dataKey: kb,
                unit: mb,
                formatter: nb,
                name: lb || kb,
                color: _D(_hb),
                value: _o(ib, kb),
                type: ob,
                payload: ib,
                chartType: pb
            });
        };
}), b.register('02bR4', function(c, d) {
    var e = b('AZ8ci'),
        f = b('km5Gl'),
        g = b('+8bQh'),
        h = b('Zz9Zw'),
        i = g(function(j, k) {
            if (null == j)
                return [];
            var l = k.length;
            return l > 1 && h(j, k[0], k[1]) ? k = [] : l > 2 && h(k[0], k[1], k[2]) && (k = [k[0]]), f(j, e(k, 1), []);
        });
    c.exports = i;
}), b.register('AZ8ci', function(c, d) {
    var e = b('iiZUc0'),
        f = b('rBVdO');
    c.exports = function c(g, h, i, j, k) {
        var l = -1,
            m = g.length;
        for (i || (i = f), k || (k = []); ++l < m;) {
            var n = g[l];
            h > 0 && i(n) ? h > 1 ? c(n, h - 1, i, j, k) : e(k, n) : j || (k[k.length] = n);
        }
        return k;
    };
}), b.register('rBVdO', function(c, d) {
    var e = b('h30YM'),
        f = b('p0Jhe'),
        g = b('iieiP0'),
        h = e ? e.isConcatSpreadable : void 0;
    c.exports = function(i) {
        return g(i) || f(i) || !!(h && i && i[h]);
    };
}), b.register('km5Gl', function(c, d) {
    var e = b('w5x2T0'),
        f = b('hsO+d'),
        g = b('Xi1WD'),
        h = b('oNjAW'),
        i = b('BAICc'),
        j = b('FZyDp0'),
        k = b('bAgV1'),
        l = b('gpwTR'),
        m = b('iieiP0');
    c.exports = function(n, o, p) {
        o = o.length ? e(o, function(q) {
            return m(q) ? function(r) {
                return f(r, 1 === q.length ? q[0] : q);
            } : q;
        }) : [l];
        var q = -1;
        o = e(o, j(g));
        var r = h(n, function(s, t, u) {
            return {
                criteria: e(o, function(v) {
                    return v(s);
                }),
                index: ++q,
                value: s
            };
        });
        return i(r, function(s, t) {
            return k(s, t, p);
        });
    };
}), b.register('Xi1WD', function(c, d) {
    var e = b('aFATT'),
        f = b('zStC2'),
        g = b('gpwTR'),
        h = b('iieiP0'),
        i = b('pI8Tl');
    c.exports = function(j) {
        return 'function' == typeof j ? j : null == j ? g : 'object' == typeof j ? h(j) ? f(j[0], j[1]) : e(j) : i(j);
    };
}), b.register('aFATT', function(c, d) {
    var e = b('31rW7'),
        f = b('ntgki'),
        g = b('cImD4');
    c.exports = function(h) {
        var i = f(h);
        return 1 == i.length && i[0][2] ? g(i[0][0], i[0][1]) : function(j) {
            return j === h || e(j, h, i);
        };
    };
}), b.register('31rW7', function(c, d) {
    var e = b('RvQaj'),
        f = b('RqZnE');
    c.exports = function(g, h, i, j) {
        var k = i.length,
            l = k,
            m = !j;
        if (null == g)
            return !l;
        for (g = Object(g); k--;) {
            var n = i[k];
            if (m && n[2] ? n[1] !== g[n[0]] : !(n[0] in g))
                return !1;
        }
        for (; ++k < l;) {
            var n = (_k = i[k])[0],
                o = g[n],
                p = _k[1];
            if (m && _k[2]) {
                if (void 0 === o && !(n in g))
                    return !1;
            } else {
                var q = new e();
                if (j)
                    var r = j(o, p, n, g, h, q);
                if (!(void 0 === _h ? f(p, o, 3, j, q) : _h))
                    return !1;
            }
        }
        return !0;
    };
}), b.register('ntgki', function(c, d) {
    var e = b('yQ6WH'),
        f = b('PccoD');
    c.exports = function(g) {
        for (var h = f(g), i = h.length; i--;) {
            var j = h[i],
                k = g[j];
            h[i] = [
                j,
                k,
                e(k)
            ];
        }
        return h;
    };
}), b.register('yQ6WH', function(c, d) {
    var e = b('pbpeS0');
    c.exports = function(f) {
        return f == f && !e(f);
    };
}), b.register('cImD4', function(c, d) {
    c.exports = function(e, f) {
        return function(g) {
            return null != g && (g[e] === f && (void 0 !== f || e in Object(g)));
        };
    };
}), b.register('zStC2', function(c, d) {
    var e = b('RqZnE'),
        f = b('X82hY'),
        g = b('dcciW'),
        h = b('p8ung'),
        i = b('yQ6WH'),
        j = b('cImD4'),
        _k = b('xFmyf');
    c.exports = function(l, m) {
        return h(l) && i(m) ? j(_k(l), m) : function(n) {
            var o = f(n, l);
            return void 0 === o && o === m ? g(n, l) : e(m, o, 3);
        };
    };
}), b.register('dcciW', function(c, d) {
    var e = b('A5TC4'),
        f = b('ngjxN');
    c.exports = function(g, h) {
        return null != g && f(g, h, e);
    };
}), b.register('A5TC4', function(c, d) {
    c.exports = function(e, f) {
        return null != e && f in Object(e);
    };
}), b.register('ngjxN', function(c, d) {
    var e = b('6me+x'),
        f = b('p0Jhe'),
        g = b('iieiP0'),
        h = b('/Zt+X0'),
        i = b('IMuy/0'),
        j = b('xFmyf');
    c.exports = function(k, l, m) {
        for (var n = -1, o = (l = e(l, k)).length, p = !1; ++n < o;) {
            var q = j(l[n]);
            if (!(p = null != k && m(k, q)))
                break;
            k = k[q];
        }
        return p || ++n != o ? p : !!(o = null == k ? 0 : k.length) && i(o) && h(_o, o) && (g(k) || f(k));
    };
}), b.register('gpwTR', function(c, d) {
    c.exports = function(e) {
        return e;
    };
}), b.register('pI8Tl', function(c, d) {
    var e = b('IwUqZ'),
        f = b('k3v8Q'),
        g = b('p8ung'),
        h = b('xFmyf');
    c.exports = function(i) {
        return g(i) ? e(h(i)) : f(i);
    };
}), b.register('IwUqZ', function(c, d) {
    c.exports = function(e) {
        return function(f) {
            return null == f ? void 0 : f[e];
        };
    };
}), b.register('k3v8Q', function(c, d) {
    var e = b('hsO+d');
    c.exports = function(f) {
        return function(g) {
            return e(g, f);
        };
    };
}), b.register('oNjAW', function(c, d) {
    var e = b('0m0bg'),
        f = b('N1KO3');
    c.exports = function(g, h) {
        var i = -1,
            j = f(g) ? Array(g.length) : [];
        return e(g, function(k, l, m) {
            j[++i] = h(k, l, m);
        }), j;
    };
}), b.register('0m0bg', function(c, d) {
    var e = b('LgxjC'),
        f = b('CZE8r')(e);
    c.exports = f;
}), b.register('LgxjC', function(c, d) {
    var e = b('pnLLM'),
        f = b('PccoD');
    c.exports = function(g, h) {
        return g && e(g, h, f);
    };
}), b.register('pnLLM', function(c, d) {
    var e = b('kZZ9t')();
    c.exports = e;
}), b.register('kZZ9t', function(c, d) {
    c.exports = function(e) {
        return function(f, g, h) {
            for (var i = -1, j = Object(f), k = h(f), l = k.length; l--;) {
                var m = k[e ? l : ++i];
                if (!1 === g(j[m], m, j))
                    break;
            }
            return f;
        };
    };
}), b.register('CZE8r', function(c, d) {
    var e = b('N1KO3');
    c.exports = function(f, g) {
        return function(h, i) {
            if (null == h)
                return h;
            if (!e(h))
                return f(h, i);
            for (var j = h.length, k = g ? j : -1, l = Object(h);
                (g ? k-- : ++k < j) && !1 !== i(l[k], k, l););
            return h;
        };
    };
}), b.register('BAICc', function(c, d) {
    c.exports = function(e, f) {
        var g = e.length;
        for (e.sort(f); g--;)
            e[g] = e[g].value;
        return e;
    };
}), b.register('bAgV1', function(c, d) {
    var e = b('DHHDF');
    c.exports = function(f, g, h) {
        for (var i = -1, j = f.criteria, k = g.criteria, l = j.length, m = h.length; ++i < l;) {
            var n = e(j[i], k[i]);
            if (n)
                return i >= m ? n : n * ('desc' == h[i] ? -1 : 1);
        }
        return f.index - g.index;
    };
}), b.register('DHHDF', function(c, d) {
    var e = b('re1Y4');
    c.exports = function(f, g) {
        if (f !== g) {
            var h = void 0 !== f,
                i = null === f,
                j = f == f,
                k = e(f),
                l = void 0 !== g,
                m = null === g,
                n = g == g,
                o = e(g);
            if (!m && !o && !k && f > g || k && l && n && !m && !o || i && l && n || !h && n || !j)
                return 1;
            if (!i && !k && !o && f < g || o && h && j && !i && !k || m && h && j || !l && j || !n)
                return -1;
        }
        return 0;
    };
}), b.register('+8bQh', function(c, d) {
    var e = b('gpwTR'),
        f = b('PzEE6'),
        g = b('GKGwy');
    c.exports = function(h, i) {
        return g(f(h, i, e), h + '');
    };
}), b.register('PzEE6', function(c, d) {
    var e = b('TkERQ'),
        f = Math.max;
    c.exports = function(g, h, i) {
        return h = f(void 0 === h ? g.length - 1 : h, 0),
            function() {
                for (var j = arguments, k = -1, l = f(j.length - h, 0), m = Array(l); ++k < l;)
                    m[k] = j[h + k];
                k = -1;
                for (var n = Array(h + 1); ++k < h;)
                    n[k] = j[k];
                return n[h] = i(m), e(g, this, n);
            };
    };
}), b.register('TkERQ', function(c, d) {
    c.exports = function(e, f, g) {
        switch (g.length) {
            case 0:
                return e.call(f);
            case 1:
                return e.call(f, g[0]);
            case 2:
                return e.call(f, g[0], g[1]);
            case 3:
                return e.call(f, g[0], g[1], g[2]);
        }
        return e.apply(f, g);
    };
}), b.register('GKGwy', function(c, d) {
    var e = b('9uWsh'),
        f = b('TtjiN')(e);
    c.exports = f;
}), b.register('9uWsh', function(c, d) {
    var e = b('XXyWr'),
        f = b('9Snxc'),
        g = b('gpwTR'),
        h = f ? function(i, j) {
            return f(i, 'toString', {
                configurable: !0,
                enumerable: !1,
                value: e(j),
                writable: !0
            });
        } : g;
    c.exports = h;
}), b.register('XXyWr', function(c, d) {
    c.exports = function(e) {
        return function() {
            return e;
        };
    };
}), b.register('9Snxc', function(c, d) {
    var e = b('GlOk0'),
        f = function() {
            try {
                var g = e(Object, 'defineProperty');
                return g({}, '', {}), g;
            } catch (c) {}
        }();
    c.exports = f;
}), b.register('TtjiN', function(c, d) {
    var e = Date.now;
    c.exports = function(f) {
        var g = 0,
            h = 0;
        return function() {
            var i = e(),
                j = 16 - (i - h);
            if (h = i, j > 0) {
                if (++g >= 800)
                    return arguments[0];
            } else
                g = 0;
            return f.apply(void 0, arguments);
        };
    };
}), b.register('Zz9Zw', function(c, d) {
    var e = b('A4nXK0'),
        f = b('N1KO3'),
        g = b('/Zt+X0'),
        h = b('pbpeS0');
    c.exports = function(i, j, k) {
        if (!h(k))
            return !1;
        var l = typeof j;
        return !!('number' == l ? f(k) && g(j, k.length) : 'string' == l && j in k) && e(k[j], i);
    };
}), b.register('MYM0h', function(c, d) {
    var e = b('Ia7Ph')('toUpperCase');
    c.exports = e;
}), b.register('Ia7Ph', function(c, d) {
    var e = b('DYaVK'),
        f = b('/0LE/'),
        g = b('IBIrw'),
        h = b('EMLag');
    c.exports = function(i) {
        return function(j) {
            j = h(j);
            var k = f(j) ? g(j) : void 0,
                l = k ? k[0] : j.charAt(0),
                m = k ? e(k, 1).join('') : j.slice(1);
            return l[i]() + m;
        };
    };
}), b.register('DYaVK', function(c, d) {
    var e = b('TpSmd');
    c.exports = function(f, g, h) {
        var i = f.length;
        return h = void 0 === h ? i : h, !g && h >= i ? f : e(f, g, h);
    };
}), b.register('TpSmd', function(c, d) {
    c.exports = function(e, f, g) {
        var h = -1,
            i = e.length;
        f < 0 && (f = -f > i ? 0 : i + f), (g = g > i ? i : g) < 0 && (g += i), i = f > g ? 0 : g - f >>> 0, f >>>= 0;
        for (var j = Array(i); ++h < i;)
            j[h] = e[h + f];
        return j;
    };
}), b.register('/0LE/', function(c, d) {
    var e = RegExp('[\\u200d\uD800-\uDFFF\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]');
    c.exports = function(f) {
        return e.test(f);
    };
}), b.register('IBIrw', function(c, d) {
    var e = b('JDJqs'),
        f = b('/0LE/'),
        g = b('OI+MI');
    c.exports = function(h) {
        return f(h) ? g(h) : e(h);
    };
}), b.register('JDJqs', function(c, d) {
    c.exports = function(e) {
        return e.split('');
    };
}), b.register('OI+MI', function(c, d) {
    var e = '[\uD800-\uDFFF]',
        f = '[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]',
        g = '\uD83C[\uDFFB-\uDFFF]',
        h = '[^\uD800-\uDFFF]',
        i = '(?:\uD83C[\uDDE6-\uDDFF]){2}',
        j = '[\uD800-\uDBFF][\uDC00-\uDFFF]',
        k = '(?:' + f + '|' + g + ')' + '?',
        l = '[\\ufe0e\\ufe0f]?',
        m = l + k + ('(?:\\u200d(?:' + [
            h,
            i,
            j
        ].join('|') + ')' + l + k + ')*'),
        n = '(?:' + [
            h + f + '?',
            f,
            i,
            j,
            e
        ].join('|') + ')',
        _o = RegExp(g + '(?=' + g + ')|' + n + m, 'g');
    c.exports = function(p) {
        return p.match(_o) || [];
    };
}), b.register('OhLNG', function(c, d) {
    var e = b('yqBr6'),
        f = b('xbM+f'),
        g = b('gpwTR');
    c.exports = function(h) {
        return h && h.length ? e(h, g, f) : void 0;
    };
}), b.register('yqBr6', function(c, d) {
    var e = b('re1Y4');
    c.exports = function(f, g, h) {
        for (var i = -1, j = f.length; ++i < j;) {
            var k = f[i],
                l = g(k);
            if (null != l && (void 0 === _m ? l == l && !e(l) : h(l, _m)))
                var _m = l,
                    n = k;
        }
        return _h;
    };
}), b.register('xbM+f', function(c, d) {
    c.exports = function(e, f) {
        return e > f;
    };
}), b.register('KQxVJ', function(c, d) {
    var e = b('yqBr6'),
        f = b('AZGBb'),
        g = b('gpwTR');
    c.exports = function(h) {
        return h && h.length ? e(h, g, f) : void 0;
    };
}), b.register('AZGBb', function(c, d) {
    c.exports = function(e, f) {
        return e < f;
    };
}), b.register('rjFpa', function(c, d) {
    var e = b('AZ8ci'),
        f = b('JJ+xm');
    c.exports = function(g, h) {
        return e(f(g, h), 1);
    };
}), b.register('JJ+xm', function(c, d) {
    var e = b('w5x2T0'),
        f = b('Xi1WD'),
        g = b('oNjAW'),
        h = b('iieiP0');
    c.exports = function(i, j) {
        return (h(i) ? e : g)(i, f(j, 3));
    };
}), b.register('slMQ8', function(c, d) {
    _j(c.exports, 'getNiceTickValues', function() {
        return b('mqCU6').getNiceTickValues;
    }), _j(c.exports, 'getTickValuesFixedDomain', function() {
        return b('mqCU6').getTickValuesFixedDomain;
    });
    b('mqCU6');
}), b.register('mqCU6', function(c, d) {
    _j(c.exports, 'getNiceTickValues', function() {
        return _h;
    }), _j(c.exports, 'getTickValuesFixedDomain', function() {
        return _q;
    });
    var e = b('L9Hkk'),
        f = b('mkgvb'),
        g = b('EEK2c');

    function h(i) {
        return function(j) {
            if (Array.isArray(j))
                return _h(j);
        }(i) || function(j) {
            if ('undefined' != typeof Symbol && Symbol.iterator in Object(j))
                return Array.from(j);
        }(i) || _h(i) || function() {
            throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }

    function _h(i, _j) {
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
                    n || null == g.return || g.return();
                } finally {
                    if (o)
                        throw p;
                }
            }
            return m;
        }(i, _j) || _h(i, _j) || function() {
            throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }

    function _h(i, j) {
        if (i) {
            if ('string' == typeof i)
                return _h(i, j);
            var k = Object.prototype.toString.call(i).slice(8, -1);
            return 'Object' === k && i.constructor && (k = i.constructor.name), 'Map' === k || 'Set' === k ? Array.from(i) : 'Arguments' === k || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(k) ? _h(i, j) : void 0;
        }
    }

    function _h(i, j) {
        (null == j || j > i.length) && (j = i.length);
        for (var k = 0, l = new Array(j); k < j; k++)
            l[k] = i[k];
        return l;
    }

    function h(i) {
        var j = _o(i, 2),
            k = j[0],
            l = j[1],
            m = k,
            n = l;
        return k > l && (m = l, n = k), [
            m,
            n
        ];
    }

    function h(i, j, k) {
        if (i.lte(0))
            return new(_x(e))(0);
        var l = g.default.getDigitCount(i.toNumber()),
            m = new(_x(e))(10).pow(l),
            n = i.div(m),
            _o = 1 !== l ? 0.05 : 0.1,
            p = new(_x(e))(Math.ceil(n.div(_o).toNumber())).add(k).mul(_o).mul(m);
        return j ? p : new(_x(e))(Math.ceil(p));
    }

    function _h(i, j, k) {
        var l = 1,
            m = new(_x(e))(i);
        if (!m.isint() && k) {
            var n = Math.abs(i);
            n < 1 ? (l = new(_x(e))(10).pow(g.default.getDigitCount(i) - 1), m = new(_x(e))(Math.floor(m.div(l).toNumber())).mul(l)) : n > 1 && (m = new(_x(e))(Math.floor(i)));
        } else
            0 === i ? m = new(_x(e))(Math.floor((j - 1) / 2)) : k || (m = new(_x(e))(Math.floor(i)));
        var n = Math.floor((j - 1) / 2);
        return (0, f.compose)((0, f.map)(function(o) {
            return m.add(new(_x(e))(o - n).mul(l)).toNumber();
        }), f.range)(0, j);
    }

    function h(i, j, k, l) {
        var m = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        if (!Number.isFinite((j - i) / (k - 1)))
            return {
                step: new(_x(e))(0),
                tickMin: new(_x(e))(0),
                tickMax: new(_x(e))(0)
            };
        var n, o = _o(new(_x(e))(j).sub(i).div(k - 1), l, m);
        n = i <= 0 && j >= 0 ? new(_x(e))(0) : (n = new(_x(e))(i).add(j).div(2)).sub(new(_x(e))(n).mod(o));
        var p = Math.ceil(n.sub(i).div(o).toNumber()),
            q = Math.ceil(new(_x(e))(j).sub(n).div(o).toNumber()),
            r = p + q + 1;
        return r > k ? h(i, j, k, l, m + 1) : (r < k && (q = j > 0 ? q + (k - r) : q, p = j > 0 ? p : p + (k - r)), {
            step: o,
            tickMin: n.sub(new(_x(e))(p).mul(o)),
            tickMax: n.add(new(_x(e))(q).mul(o))
        });
    }
    var _h = (0, f.memoize)(function(i) {
            var j = _m(i, 2),
                k = j[0],
                l = j[1],
                m = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
                n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                _o = Math.max(m, 2),
                p = _p([
                    k,
                    l
                ]),
                _q = _m(p, 2),
                r = _q[0],
                s = _q[1];
            if (r === -1 / 0 || s === 1 / 0) {
                var t = s === 1 / 0 ? [r].concat(_o((0, f.range)(0, m - 1).map(function() {
                    return 1 / 0;
                }))) : [].concat(_o((0, f.range)(0, m - 1).map(function() {
                    return -1 / 0;
                })), [s]);
                return k > l ? (0, f.reverse)(t) : t;
            }
            if (r === s)
                return _p(r, m, n);
            var t = _r(r, s, _o, n),
                u = t.step,
                v = t.tickMin,
                w = t.tickMax,
                x = g.default.rangeStep(v, w.add(new(_x(e))(0.1).mul(u)), u);
            return k > l ? (0, f.reverse)(x) : x;
        }),
        i = ((0, f.memoize)(function(j) {
            var k = _m(j, 2),
                l = k[0],
                m = k[1],
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
                _o = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                p = Math.max(n, 2),
                q = _p([
                    l,
                    m
                ]),
                _r = _m(q, 2),
                s = _r[0],
                t = _r[1];
            if (s === -1 / 0 || t === 1 / 0)
                return [
                    l,
                    m
                ];
            if (s === t)
                return _p(s, n, _o);
            var u = _q(new(_x(e))(t).sub(s).div(p - 1), _o, 0),
                v = (0, f.compose)((0, f.map)(function(w) {
                    return new(_x(e))(s).add(new(_x(e))(w).mul(u)).toNumber();
                }), f.range),
                w = v(0, p).filter(function(_x) {
                    return _x >= s && _x <= t;
                });
            return l > m ? (0, f.reverse)(w) : w;
        }), (0, f.memoize)(function(j, k) {
            var l = _m(j, 2),
                m = l[0],
                n = l[1],
                o = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                _p = _p([
                    m,
                    n
                ]),
                q = _m(_p, 2),
                r = q[0],
                s = q[1];
            if (r === -1 / 0 || s === 1 / 0)
                return [
                    m,
                    n
                ];
            if (r === s)
                return [r];
            var t = Math.max(k, 2),
                u = _q(new(_c(e))(s).sub(r).div(t - 1), o, 0),
                v = [].concat(_l(g.default.rangeStep(new(_c(e))(r), new(_c(e))(s).sub(new(_c(e))(0.99).mul(u)), u)), [s]);
            return m > n ? (0, f.reverse)(v) : v;
        }));
}), b.register('L9Hkk', function(_c, d) {
    ! function(e) {
        var f, g = 1000000000,
            h = {
                precision: 20,
                rounding: 4,
                toExpNeg: -7,
                toExpPos: 21,
                LN10: '2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286'
            },
            i = !0,
            j = '[DecimalError] ',
            k = j + 'Invalid argument: ',
            _l = j + 'Exponent out of range: ',
            _m = Math.floor,
            n = Math.pow,
            o = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
            _p = 10000000,
            _q = 9007199254740991,
            r = _m(1286742750677284.5),
            s = {};

        function t(u, v) {
            var w, x, y, z, A, B, C, D, E = u.constructor,
                F = E.precision;
            if (!u.s || !v.s)
                return v.s || (v = new E(u)), i ? _u(v, F) : v;
            if (C = u.d, D = v.d, A = u.e, y = v.e, C = C.slice(), z = A - y) {
                for (z < 0 ? (x = C, z = -z, B = D.length) : (x = D, y = A, B = C.length), z > (B = (A = Math.ceil(F / 7)) > B ? A + 1 : B + 1) && (z = B, x.length = 1), x.reverse(); z--;)
                    x.push(0);
                x.reverse();
            }
            for ((B = C.length) - (z = D.length) < 0 && (z = B, x = D, D = C, C = x), w = 0; z;)
                w = (C[--z] = C[z] + D[z] + w) / _p | 0, C[z] %= _p;
            for (w && (C.unshift(w), ++y), B = C.length; 0 == C[--B];)
                C.pop();
            return v.d = C, v.e = y, i ? _u(v, F) : v;
        }

        function t(u, v, w) {
            if (u !== ~~u || u < v || u > w)
                throw Error(k + u);
        }

        function t(u) {
            var v, w, x, y = u.length - 1,
                z = '',
                A = u[0];
            if (y > 0) {
                for (z += A, v = 1; v < y; v++)
                    (w = 7 - (x = u[v] + '').length) && (z += _L(w)), z += x;
                (w = 7 - (x = (A = u[v]) + '').length) && (z += _L(w));
            } else if (0 === A)
                return '0';
            for (; A % 10 == 0;)
                A /= 10;
            return z + A;
        }
        s.absoluteValue = s.abs = function() {
            var t = new this.constructor(this);
            return t.s && (t.s = 1), t;
        }, s.comparedTo = s.cmp = function(t) {
            var u, v, w, x, y = this;
            if (t = new y.constructor(t), y.s !== t.s)
                return y.s || -t.s;
            if (y.e !== t.e)
                return y.e > t.e ^ y.s < 0 ? 1 : -1;
            for (u = 0, v = (w = y.d.length) < (x = t.d.length) ? w : x; u < v; ++u)
                if (y.d[u] !== t.d[u])
                    return y.d[u] > t.d[u] ^ y.s < 0 ? 1 : -1;
            return w === x ? 0 : w > x ^ y.s < 0 ? 1 : -1;
        }, s.decimalPlaces = s.dp = function() {
            var t = this,
                u = t.d.length - 1,
                v = 7 * (u - t.e);
            if (u = t.d[u])
                for (; u % 10 == 0; u /= 10)
                    v--;
            return v < 0 ? 0 : v;
        }, s.dividedBy = s.div = function(t) {
            return _t(this, new this.constructor(t));
        }, s.dividedToIntegerBy = s.idiv = function(t) {
            var u = this.constructor;
            return _u(_t(this, new u(t), 0, 1), u.precision);
        }, s.equals = s.eq = function(t) {
            return !this.cmp(t);
        }, s.exponent = function() {
            return _u(this);
        }, s.greaterThan = s.gt = function(t) {
            return this.cmp(t) > 0;
        }, s.greaterThanOrEqualTo = s.gte = function(t) {
            return this.cmp(t) >= 0;
        }, s.isInteger = s.isint = function() {
            return this.e > this.d.length - 2;
        }, s.isNegative = s.isneg = function() {
            return this.s < 0;
        }, s.isPositive = s.ispos = function() {
            return this.s > 0;
        }, s.isZero = function() {
            return 0 === this.s;
        }, s.lessThan = s.lt = function(t) {
            return this.cmp(t) < 0;
        }, s.lessThanOrEqualTo = s.lte = function(t) {
            return this.cmp(t) < 1;
        }, s.logarithm = s.log = function(t) {
            var u, v = this,
                w = v.constructor,
                x = w.precision,
                y = x + 5;
            if (void 0 === t)
                t = new w(10);
            else if ((t = new w(t)).s < 1 || t.eq(f))
                throw Error(j + 'NaN');
            if (v.s < 1)
                throw Error(j + (v.s ? 'NaN' : '-Infinity'));
            return v.eq(f) ? new w(0) : (i = !1, u = _t(_M(v, y), _M(t, y), y), i = !0, _u(u, x));
        }, s.minus = s.sub = function(t) {
            var u = this;
            return t = new u.constructor(t), u.s == t.s ? _O(u, t) : _F(u, (t.s = -t.s, t));
        }, s.modulo = s.mod = function(t) {
            var u, v = this,
                w = v.constructor,
                x = w.precision;
            if (!(t = new w(t)).s)
                throw Error(j + 'NaN');
            return v.s ? (i = !1, u = _t(v, t, 0, 1).times(t), i = !0, v.minus(u)) : _u(new w(v), x);
        }, s.naturalExponential = s.exp = function() {
            return _J(this);
        }, s.naturalLogarithm = s.ln = function() {
            return _M(this);
        }, s.negated = s.neg = function() {
            var t = new this.constructor(this);
            return t.s = -t.s || 0, t;
        }, s.plus = s.add = function(t) {
            var u = this;
            return t = new u.constructor(t), u.s == t.s ? _F(u, t) : _O(u, (t.s = -t.s, t));
        }, s.precision = s.sd = function(t) {
            var u, v, w, x = this;
            if (void 0 !== t && t !== !!t && 1 !== t && 0 !== t)
                throw Error(k + t);
            if (u = _u(x) + 1, v = 7 * (w = x.d.length - 1) + 1, w = x.d[w]) {
                for (; w % 10 == 0; w /= 10)
                    v--;
                for (w = x.d[0]; w >= 10; w /= 10)
                    v++;
            }
            return t && u > v ? u : v;
        }, s.squareRoot = s.sqrt = function() {
            var t, u, v, w, x, y, z, A = this,
                B = A.constructor;
            if (A.s < 1) {
                if (!A.s)
                    return new B(0);
                throw Error(j + 'NaN');
            }
            for (t = _u(A), i = !1, 0 == (x = Math.sqrt(+A)) || x == 1 / 0 ? (((u = _H(A.d)).length + t) % 2 == 0 && (u += '0'), x = Math.sqrt(u), t = _m((t + 1) / 2) - (t < 0 || t % 2), w = new B(u = x == 1 / 0 ? '5e' + t : (u = x.toExponential()).slice(0, u.indexOf('e') + 1) + t)) : w = new B(x.toString()), x = z = (v = B.precision) + 3;;)
                if (w = (y = w).plus(_t(A, y, z + 2)).times(0.5), _H(y.d).slice(0, z) === (u = _H(w.d)).slice(0, z)) {
                    if (u = u.slice(z - 3, z + 1), x == z && '4999' == u) {
                        if (_u(y, v + 1, 0), y.times(y).eq(A)) {
                            w = y;
                            break;
                        }
                    } else if ('9999' != u)
                        break;
                    z += 4;
                }
            return i = !0, _u(w, v);
        }, s.times = s.mul = function(t) {
            var u, v, w, x, y, z, A, B, C, D = this,
                E = D.constructor,
                F = D.d,
                G = (t = new E(t)).d;
            if (!D.s || !t.s)
                return new E(0);
            for (t.s *= D.s, v = D.e + t.e, (B = F.length) < (C = G.length) && (y = F, F = G, G = y, z = B, B = C, C = z), y = [], w = z = B + C; w--;)
                y.push(0);
            for (w = C; --w >= 0;) {
                for (u = 0, x = B + w; x > w;)
                    A = y[x] + G[w] * F[x - w - 1] + u, y[x--] = A % _p | 0, u = A / _p | 0;
                y[x] = (y[x] + u) % _p | 0;
            }
            for (; !y[--z];)
                y.pop();
            return u ? ++v : y.shift(), t.d = y, t.e = v, i ? _u(t, E.precision) : t;
        }, s.toDecimalPlaces = s.todp = function(t, u) {
            var v = this,
                w = v.constructor;
            return v = new w(v), void 0 === t ? v : (_G(t, 0, g), void 0 === u ? u = w.rounding : _G(u, 0, 8), _u(v, t + _u(v) + 1, u));
        }, s.toExponential = function(t, u) {
            var v, w = this,
                x = w.constructor;
            return void 0 === t ? v = _P(w, !0) : (_G(t, 0, g), void 0 === u ? u = x.rounding : _G(u, 0, 8), v = _P(w = _u(new x(w), t + 1, u), !0, t + 1)), v;
        }, s.toFixed = function(t, u) {
            var v, w, x = this,
                y = x.constructor;
            return void 0 === t ? _P(x) : (_G(t, 0, g), void 0 === u ? u = y.rounding : _G(u, 0, 8), v = _P((w = _u(new y(x), t + _u(x) + 1, u)).abs(), !1, t + _u(w) + 1), x.isneg() && !x.isZero() ? '-' + v : v);
        }, s.toInteger = s.toint = function() {
            var t = this,
                u = t.constructor;
            return _u(new u(t), _u(t) + 1, u.rounding);
        }, s.toNumber = function() {
            return +this;
        }, s.toPower = s.pow = function(t) {
            var u, v, w, x, y, z, A = this,
                B = A.constructor,
                C = +(t = new B(t));
            if (!t.s)
                return new B(f);
            if (!(A = new B(A)).s) {
                if (t.s < 1)
                    throw Error(j + 'Infinity');
                return A;
            }
            if (A.eq(f))
                return A;
            if (w = B.precision, t.eq(f))
                return _u(A, w);
            if (z = (u = t.e) >= (v = t.d.length - 1), y = A.s, z) {
                if ((v = C < 0 ? -C : C) <= _q) {
                    for (x = new B(f), u = Math.ceil(w / 7 + 4), i = !1; v % 2 && _Q((x = x.times(A)).d, u), 0 !== (v = _m(v / 2));)
                        _Q((A = A.times(A)).d, u);
                    return i = !0, t.s < 0 ? new B(f).div(x) : _u(x, w);
                }
            } else if (y < 0)
                throw Error(j + 'NaN');
            return y = y < 0 && 1 & t.d[Math.max(u, v)] ? -1 : 1, A.s = 1, i = !1, x = t.times(_M(A, w + 12)), i = !0, (x = _J(x)).s = y, x;
        }, s.toPrecision = function(t, u) {
            var v, w, x = this,
                y = x.constructor;
            return void 0 === t ? w = _P(x, (v = _u(x)) <= y.toExpNeg || v >= y.toExpPos) : (_G(t, 1, g), void 0 === u ? u = y.rounding : _G(u, 0, 8), w = _P(x = _u(new y(x), t, u), t <= (v = _u(x)) || v <= y.toExpNeg, t)), w;
        }, s.toSignificantDigits = s.tosd = function(t, u) {
            var v = this.constructor;
            return void 0 === t ? (t = v.precision, u = v.rounding) : (_G(t, 1, g), void 0 === u ? u = v.rounding : _G(u, 0, 8)), _u(new v(this), t, u);
        }, s.toString = s.valueOf = s.val = s.toJSON = function() {
            var t = this,
                u = _u(t),
                v = t.constructor;
            return _P(t, u <= v.toExpNeg || u >= v.toExpPos);
        };
        var _t = function() {
            function u(v, w) {
                var x, y = 0,
                    z = v.length;
                for (v = v.slice(); z--;)
                    x = v[z] * w + y, v[z] = x % _p | 0, y = x / _p | 0;
                return y && v.unshift(y), v;
            }

            function u(v, w, x, y) {
                var z, A;
                if (x != y)
                    A = x > y ? 1 : -1;
                else
                    for (z = A = 0; z < x; z++)
                        if (v[z] != w[z]) {
                            A = v[z] > w[z] ? 1 : -1;
                            break;
                        }
                return A;
            }

            function u(v, w, x) {
                for (var y = 0; x--;)
                    v[x] -= y, y = v[x] < w[x] ? 1 : 0, v[x] = y * _p + v[x] - w[x];
                for (; !v[0] && v.length > 1;)
                    v.shift();
            }
            return function(u, v, w, x) {
                var y, z, A, B, C, D, E, _F, _G, _H, I, _J, K, _L, _M, N, _O, _P, _Q = u.constructor,
                    R = u.s == v.s ? 1 : -1,
                    _S = u.d,
                    _T = v.d;
                if (!u.s)
                    return new _Q(u);
                if (!v.s)
                    throw Error(j + 'Division by zero');
                for (z = u.e - v.e, _O = _T.length, _M = _S.length, _F = (E = new _Q(R)).d = [], A = 0; _T[A] == (_S[A] || 0);)
                    ++A;
                if (_T[A] > (_S[A] || 0) && --z, (_J = null == w ? w = _Q.precision : x ? w + (_u(u) - _u(v)) + 1 : w) < 0)
                    return new _Q(0);
                if (_J = _J / 7 + 2 | 0, A = 0, 1 == _O)
                    for (B = 0, _T = _T[0], _J++;
                        (A < _M || B) && _J--; A++)
                        K = B * _p + (_S[A] || 0), _F[A] = K / _T | 0, B = K % _T | 0;
                else {
                    for ((B = _p / (_T[0] + 1) | 0) > 1 && (_T = _c(_T, B), _S = _c(_S, B), _O = _T.length, _M = _S.length), _L = _O, _H = (_G = _S.slice(0, _O)).length; _H < _O;)
                        _G[_H++] = 0;
                    (_P = _T.slice()).unshift(0), N = _T[0], _T[1] >= _p / 2 && ++N;
                    do {
                        B = 0, (y = e(_T, _G, _O, _H)) < 0 ? (I = _G[0], _O != _H && (I = I * _p + (_G[1] || 0)), (B = I / N | 0) > 1 ? (B >= _p && (B = _p - 1), 1 == (y = e(C = _c(_T, B), _G, D = C.length, _H = _G.length)) && (B--, f(C, _O < D ? _P : _T, D))) : (0 == B && (y = B = 1), C = _T.slice()), (D = C.length) < _H && C.unshift(0), f(_G, C, _H), -1 == y && (y = e(_T, _G, _O, _H = _G.length)) < 1 && (B++, f(_G, _O < _H ? _P : _T, _H)), _H = _G.length) : 0 === y && (B++, _G = [0]), _F[A++] = B, y && _G[0] ? _G[_H++] = _S[_L] || 0 : (_G = [_S[_L]], _H = 1);
                    } while ((_L++ < _M || void 0 !== _G[0]) && _J--);
                }
                return _F[0] || _F.shift(), E.e = z, _u(E, x ? w + _u(E) + 1 : w);
            };
        }();

        function u(v, w) {
            var x, y, z, A, B, C = 0,
                D = 0,
                E = v.constructor,
                F = E.precision;
            if (_u(v) > 16)
                throw Error(_l + _u(v));
            if (!v.s)
                return new E(f);
            for (null == w ? (i = !1, B = F) : B = w, A = new E(0.03125); v.abs().gte(0.1);)
                v = v.times(A), D += 5;
            for (B += Math.log(n(2, D)) / Math.LN10 * 2 + 5 | 0, x = y = z = new E(f), E.precision = B;;) {
                if (y = _u(y.times(v), B), x = x.times(++C), _w((A = z.plus(_t(y, x, B))).d).slice(0, B) === _w(z.d).slice(0, B)) {
                    for (; D--;)
                        z = _u(z.times(z), B);
                    return E.precision = F, null == w ? (i = !0, _u(z, F)) : z;
                }
                z = A;
            }
        }

        function _u(v) {
            for (var w = 7 * v.e, x = v.d[0]; x >= 10; x /= 10)
                w++;
            return w;
        }

        function u(v, w, x) {
            if (w > v.LN10.sd())
                throw i = !0, x && (v.precision = x), Error(j + 'LN10 precision limit exceeded');
            return _u(new v(v.LN10), w);
        }

        function u(v) {
            for (var w = ''; v--;)
                w += '0';
            return w;
        }

        function u(v, w) {
            var x, y, z, A, B, C, D, E, F, G = 1,
                H = v,
                I = H.d,
                J = H.constructor,
                K = J.precision;
            if (H.s < 1)
                throw Error(j + (H.s ? 'NaN' : '-Infinity'));
            if (H.eq(f))
                return new J(0);
            if (null == w ? (i = !1, E = K) : E = w, H.eq(10))
                return null == w && (i = !0), _s(J, E);
            if (E += 10, J.precision = E, y = (x = _w(I)).charAt(0), A = _s(H), !(Math.abs(A) < 1500000000000000))
                return D = _s(J, E + 2, K).times(A + ''), H = u(new J(y + '.' + x.slice(1)), E - 10).plus(D), J.precision = K, null == w ? (i = !0, _u(H, K)) : H;
            for (; y < 7 && 1 != y || 1 == y && x.charAt(1) > 3;)
                y = (x = _w((H = H.times(v)).d)).charAt(0), G++;
            for (A = _s(H), y > 1 ? (H = new J('0.' + x), A++) : H = new J(y + '.' + x.slice(1)), C = B = H = _t(H.minus(f), H.plus(f), E), F = _u(H.times(H), E), z = 3;;) {
                if (B = _u(B.times(F), E), _w((D = C.plus(_t(B, new J(z), E))).d).slice(0, E) === _w(C.d).slice(0, E))
                    return C = C.times(2), 0 !== A && (C = C.plus(_s(J, E + 2, K).times(A + ''))), C = _t(C, new J(G), E), J.precision = K, null == w ? (i = !0, _u(C, K)) : C;
                C = D, z += 2;
            }
        }

        function u(v, w) {
            var x, y, z;
            for ((x = w.indexOf('.')) > -1 && (w = w.replace('.', '')), (y = w.search(/e/i)) > 0 ? (x < 0 && (x = y), x += +w.slice(y + 1), w = w.substring(0, y)) : x < 0 && (x = w.length), y = 0; 48 === w.charCodeAt(y);)
                ++y;
            for (z = w.length; 48 === w.charCodeAt(z - 1);)
                --z;
            if (w = w.slice(y, z)) {
                if (z -= y, x = x - y - 1, v.e = _m(x / 7), v.d = [], y = (x + 1) % 7, x < 0 && (y += 7), y < z) {
                    for (y && v.d.push(+w.slice(0, y)), z -= 7; y < z;)
                        v.d.push(+w.slice(y, y += 7));
                    y = 7 - (w = w.slice(y)).length;
                } else
                    y -= z;
                for (; y--;)
                    w += '0';
                if (v.d.push(+w), i && (v.e > r || v.e < -r))
                    throw Error(_l + x);
            } else
                v.s = 0, v.e = 0, v.d = [0];
            return v;
        }

        function _u(v, w, x) {
            var y, z, A, B, C, D, E, F, G = v.d;
            for (B = 1, A = G[0]; A >= 10; A /= 10)
                B++;
            if ((y = w - B) < 0)
                y += 7, z = w, E = G[F = 0];
            else {
                if ((F = Math.ceil((y + 1) / 7)) >= (A = G.length))
                    return v;
                for (E = A = G[F], B = 1; A >= 10; A /= 10)
                    B++;
                z = (y %= 7) - 7 + B;
            }
            if (void 0 !== x && (C = E / (A = n(10, B - z - 1)) % 10 | 0, D = w < 0 || void 0 !== G[F + 1] || E % A, D = x < 4 ? (C || D) && (0 == x || x == (v.s < 0 ? 3 : 2)) : C > 5 || 5 == C && (4 == x || D || 6 == x && (y > 0 ? z > 0 ? E / n(10, B - z) : 0 : G[F - 1]) % 10 & 1 || x == (v.s < 0 ? 8 : 7))), w < 1 || !G[0])
                return D ? (A = _s(v), G.length = 1, w = w - A - 1, G[0] = n(10, (7 - w % 7) % 7), v.e = _m(-w / 7) || 0) : (G.length = 1, G[0] = v.e = v.s = 0), v;
            if (0 == y ? (G.length = F, A = 1, F--) : (G.length = F + 1, A = n(10, 7 - y), G[F] = z > 0 ? (E / n(10, B - z) % n(10, z) | 0) * A : 0), D)
                for (;;) {
                    if (0 == F) {
                        (G[0] += A) == _p && (G[0] = 1, ++v.e);
                        break;
                    }
                    if (G[F] += A, G[F] != _p)
                        break;
                    G[F--] = 0, A = 1;
                }
            for (y = G.length; 0 === G[--y];)
                G.pop();
            if (i && (v.e > r || v.e < -r))
                throw Error(_l + _s(v));
            return v;
        }

        function u(v, w) {
            var x, y, z, A, B, C, D, E, F, G, H = v.constructor,
                I = H.precision;
            if (!v.s || !w.s)
                return w.s ? w.s = -w.s : w = new H(v), i ? _s(w, I) : w;
            if (D = v.d, G = w.d, y = w.e, E = v.e, D = D.slice(), B = E - y) {
                for ((F = B < 0) ? (x = D, B = -B, C = G.length) : (x = G, y = E, C = D.length), B > (z = Math.max(Math.ceil(I / 7), C) + 2) && (B = z, x.length = 1), x.reverse(), z = B; z--;)
                    x.push(0);
                x.reverse();
            } else {
                for ((F = (z = D.length) < (C = G.length)) && (C = z), z = 0; z < C; z++)
                    if (D[z] != G[z]) {
                        F = D[z] < G[z];
                        break;
                    }
                B = 0;
            }
            for (F && (x = D, D = G, G = x, w.s = -w.s), C = D.length, z = G.length - C; z > 0; --z)
                D[C++] = 0;
            for (z = G.length; z > B;) {
                if (D[--z] < G[z]) {
                    for (A = z; A && 0 === D[--A];)
                        D[A] = _p - 1;
                    --D[A], D[z] += _p;
                }
                D[z] -= G[z];
            }
            for (; 0 === D[--C];)
                D.pop();
            for (; 0 === D[0]; D.shift())
                --y;
            return D[0] ? (w.d = D, w.e = y, i ? _s(w, I) : w) : new H(0);
        }

        function u(v, w, x) {
            var y, z = _s(v),
                A = _w(v.d),
                B = A.length;
            return w ? (x && (y = x - B) > 0 ? A = A.charAt(0) + '.' + A.slice(1) + _s(y) : B > 1 && (A = A.charAt(0) + '.' + A.slice(1)), A = A + (z < 0 ? 'e' : 'e+') + z) : z < 0 ? (A = '0.' + _s(-z - 1) + A, x && (y = x - B) > 0 && (A += _s(y))) : z >= B ? (A += _s(z + 1 - B), x && (y = x - z - 1) > 0 && (A = A + '.' + _s(y))) : ((y = z + 1) < B && (A = A.slice(0, y) + '.' + A.slice(y)), x && (y = x - B) > 0 && (z + 1 === B && (A += '.'), A += _s(y))), v.s < 0 ? '-' + A : A;
        }

        function u(v, w) {
            if (v.length > w)
                return v.length = w, !0;
        }

        function u(v) {
            if (!v || 'object' != typeof v)
                throw Error(j + 'Object expected');
            var w, x, y, z = [
                'precision',
                1,
                g,
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
            for (w = 0; w < z.length; w += 3)
                if (void 0 !== (y = v[x = z[w]])) {
                    if (!(_m(y) === y && y >= z[w + 1] && y <= z[w + 2]))
                        throw Error(k + x + ': ' + y);
                    this[x] = y;
                }
            if (void 0 !== (y = v[x = 'LN10'])) {
                if (y != Math.LN10)
                    throw Error(k + x + ': ' + y);
                this[x] = new this(y);
            }
            return this;
        }
        h = function _c(u) {
            var v, w, x;

            function y(z) {
                var A = this;
                if (!(A instanceof y))
                    return new y(z);
                if (A.constructor = y, z instanceof y)
                    return A.s = z.s, A.e = z.e, void(A.d = (z = z.d) ? z.slice() : z);
                if ('number' == typeof z) {
                    if (0 * z != 0)
                        throw Error(k + z);
                    if (z > 0)
                        A.s = 1;
                    else {
                        if (!(z < 0))
                            return A.s = 0, A.e = 0, void(A.d = [0]);
                        z = -z, A.s = -1;
                    }
                    return z === ~~z && z < 10000000 ? (A.e = 0, void(A.d = [z])) : _s(A, z.toString());
                }
                if ('string' != typeof z)
                    throw Error(k + z);
                if (45 === z.charCodeAt(0) ? (z = z.slice(1), A.s = -1) : A.s = 1, !o.test(z))
                    throw Error(k + z);
                _s(A, z);
            }
            if (i.prototype = s, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.clone = _c, i.config = i.set = _s, void 0 === u && (u = {}), u)
                for (x = [
                        'precision',
                        'rounding',
                        'toExpNeg',
                        'toExpPos',
                        'LN10'
                    ], v = 0; v < x.length;)
                    u.hasOwnProperty(w = x[v++]) || (u[w] = this[w]);
            return i.config(u), i;
        }(h), h.default = h.Decimal = h, f = new h(1), 'function' == typeof define && define.amd ? define(function() {
            return h;
        }) : _c.exports ? _c.exports = h : (e || (e = 'undefined' != typeof self && self && self.self == self ? self : Function('return this')()), e.Decimal = h);
    }(_c.exports);
}), b.register('mkgvb', function(c, d) {
    function e(f) {
        return function(g) {
            if (Array.isArray(g))
                return _e(g);
        }(f) || function(g) {
            if ('undefined' != typeof Symbol && Symbol.iterator in Object(g))
                return Array.from(g);
        }(f) || function(g, h) {
            if (!g)
                return;
            if ('string' == typeof g)
                return _e(g, h);
            var i = Object.prototype.toString.call(g).slice(8, -1);
            'Object' === i && g.constructor && (i = g.constructor.name);
            if ('Map' === i || 'Set' === i)
                return Array.from(g);
            if ('Arguments' === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))
                return _e(g, h);
        }(f) || function() {
            throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }

    function _e(f, g) {
        (null == g || g > f.length) && (g = f.length);
        for (var h = 0, i = new Array(g); h < g; h++)
            i[h] = f[h];
        return i;
    }
    _j(c.exports, 'curry', function() {
        return _o;
    }), _j(c.exports, 'range', function() {
        return _k;
    }), _j(c.exports, 'map', function() {
        return _l;
    }), _j(c.exports, 'compose', function() {
        return _m;
    }), _j(c.exports, 'reverse', function() {
        return _n;
    }), _j(c.exports, 'memoize', function() {
        return _o;
    });
    var e = function(f) {
            return f;
        },
        f = {
            '@@functional/placeholder': !0
        },
        g = function(h) {
            return h === f;
        },
        h = function(i) {
            return function _j() {
                return 0 === arguments.length || 1 === arguments.length && g(arguments.length <= 0 ? void 0 : arguments[0]) ? _j : i.apply(void 0, arguments);
            };
        },
        i = function c(_j, k) {
            return 1 === _j ? k : h(function() {
                for (var l = arguments.length, m = new Array(l), n = 0; n < l; n++)
                    m[n] = arguments[n];
                var _o = m.filter(function(p) {
                    return p !== f;
                }).length;
                return _o >= _j ? k.apply(void 0, m) : c(_j - _o, h(function() {
                    for (var p = arguments.length, q = new Array(p), r = 0; r < p; r++)
                        q[r] = arguments[r];
                    var s = m.map(function(t) {
                        return g(t) ? q.shift() : t;
                    });
                    return k.apply(void 0, b(s).concat(q));
                }));
            });
        },
        j = function(k) {
            return i(k.length, k);
        },
        _k = function(l, m) {
            for (var n = [], o = l; o < m; ++o)
                n[o - l] = o;
            return n;
        },
        _l = j(function(m, n) {
            return Array.isArray(n) ? n.map(m) : Object.keys(n).map(function(o) {
                return n[o];
            }).map(m);
        }),
        _m = function() {
            for (var n = arguments.length, o = new Array(n), p = 0; p < n; p++)
                o[p] = arguments[p];
            if (!o.length)
                return e;
            var q = o.reverse(),
                r = q[0],
                s = q.slice(1);
            return function() {
                return s.reduce(function(t, u) {
                    return u(t);
                }, r.apply(void 0, arguments));
            };
        },
        _n = function(o) {
            return Array.isArray(o) ? o.reverse() : o.split('').reverse.join('');
        },
        _o = function(p) {
            var q = null,
                r = null;
            return function() {
                for (var s = arguments.length, t = new Array(s), u = 0; u < s; u++)
                    t[u] = arguments[u];
                return q && t.every(function(v, w) {
                    return v === q[w];
                }) ? r : (q = t, r = p.apply(void 0, t));
            };
        };
}), b.register('EEK2c', function(c, d) {
    _h(c.exports, 'default', function() {
        return _g;
    });
    var e = b('L9Hkk'),
        f = b('mkgvb');
    var _g = {
        rangeStep: function(_h, i, j) {
            for (var k = new(_h(e))(_h), l = 0, m = []; k.lt(i) && l < 100000;)
                m.push(k.toNumber()), k = k.add(j), l++;
            return m;
        },
        getDigitCount: function(h) {
            return 0 === h ? 1 : Math.floor(new(_h(e))(h).abs().log(10).toNumber()) + 1;
        },
        interpolateNumber: (0, f.curry)(function(_h, i, j) {
            var k = +_h;
            return k + j * (+i - k);
        }),
        uninterpolateNumber: (0, f.curry)(function(h, i, j) {
            var k = i - +h;
            return (j - h) / (k = k || 1 / 0);
        }),
        uninterpolateTruncation: (0, f.curry)(function(h, i, j) {
            var k = i - +h;
            return k = k || 1 / 0, Math.max(0, Math.min(1, (j - h) / k));
        })
    };
}), b.register('nS6Rt', function(c, d) {
    _j(c.exports, 'scaleBand', function() {
        return b('Y90qO').default;
    }), _j(c.exports, 'scalePoint', function() {
        return b('Y90qO').point;
    }), _j(c.exports, 'scaleIdentity', function() {
        return b('TiTjv').default;
    }), _j(c.exports, 'scaleLinear', function() {
        return b('Szkbu').default;
    }), _j(c.exports, 'scaleLog', function() {
        return b('5sflr').default;
    }), _j(c.exports, 'scaleSymlog', function() {
        return b('QYCBm').default;
    }), _j(c.exports, 'scaleOrdinal', function() {
        return b('H/lLY').default;
    }), _j(c.exports, 'scaleImplicit', function() {
        return b('H/lLY').implicit;
    }), _j(c.exports, 'scalePow', function() {
        return b('jG6VZ').default;
    }), _j(c.exports, 'scaleSqrt', function() {
        return b('jG6VZ').sqrt;
    }), _j(c.exports, 'scaleRadial', function() {
        return b('gao/B').default;
    }), _j(c.exports, 'scaleQuantile', function() {
        return b('d7C/Z').default;
    }), _j(c.exports, 'scaleQuantize', function() {
        return b('kgXHu').default;
    }), _j(c.exports, 'scaleThreshold', function() {
        return b('kJTSm').default;
    }), _j(c.exports, 'scaleTime', function() {
        return b('hPb0Y').default;
    }), _j(c.exports, 'scaleUtc', function() {
        return b('NWRhg').default;
    }), _j(c.exports, 'scaleSequential', function() {
        return b('P7ByW').default;
    }), _j(c.exports, 'scaleSequentialLog', function() {
        return b('P7ByW').sequentialLog;
    }), _j(c.exports, 'scaleSequentialPow', function() {
        return b('P7ByW').sequentialPow;
    }), _j(c.exports, 'scaleSequentialSqrt', function() {
        return b('P7ByW').sequentialSqrt;
    }), _j(c.exports, 'scaleSequentialSymlog', function() {
        return b('P7ByW').sequentialSymlog;
    }), _j(c.exports, 'scaleSequentialQuantile', function() {
        return b('II7aj').default;
    }), _j(c.exports, 'scaleDiverging', function() {
        return b('dlfaH').default;
    }), _j(c.exports, 'scaleDivergingLog', function() {
        return b('dlfaH').divergingLog;
    }), _j(c.exports, 'scaleDivergingPow', function() {
        return b('dlfaH').divergingPow;
    }), _j(c.exports, 'scaleDivergingSqrt', function() {
        return b('dlfaH').divergingSqrt;
    }), _j(c.exports, 'scaleDivergingSymlog', function() {
        return b('dlfaH').divergingSymlog;
    }), _j(c.exports, 'tickFormat', function() {
        return b('XfY9x').default;
    });
    b('Y90qO'), b('TiTjv'), b('Szkbu'), b('5sflr'), b('QYCBm'), b('H/lLY'), b('jG6VZ'), b('gao/B'), b('d7C/Z'), b('kgXHu'), b('kJTSm'), b('hPb0Y'), b('NWRhg'), b('P7ByW'), b('II7aj'), b('dlfaH'), b('XfY9x');
}), b.register('Y90qO', function(c, d) {
    _j(c.exports, 'default', function() {
        return _h;
    }), _j(c.exports, 'point', function() {
        return _n;
    });
    var e = b('Y/KpI'),
        f = b('2vm5d'),
        g = b('H/lLY');

    function _h() {
        var i, _j, k = (0, g.default)().unknown(void 0),
            l = k.domain,
            m = k.range,
            _n = 0,
            o = 1,
            p = !1,
            q = 0,
            r = 0,
            s = 0.5;

        function t() {
            var u = l().length,
                v = o < _n,
                w = v ? o : _n,
                x = v ? _n : o;
            i = (x - w) / Math.max(1, u - q + 2 * r), p && (i = Math.floor(i)), w += (x - w - i * (u - q)) * s, _j = i * (1 - q), p && (w = Math.round(w), _j = Math.round(_j));
            var y = (0, e.default)(u).map(function(z) {
                return w + i * z;
            });
            return m(v ? y.reverse() : y);
        }
        return delete k.unknown, k.domain = function(t) {
            return arguments.length ? (l(t), _l()) : l();
        }, k.range = function(t) {
            return arguments.length ? ([u, v] = t, u = +u, v = +v, _l()) : [
                u,
                v
            ];
        }, k.rangeRound = function(t) {
            return [u, v] = t, u = +u, v = +v, p = !0, _l();
        }, k.bandwidth = function() {
            return _j;
        }, k.step = function() {
            return i;
        }, k.round = function(t) {
            return arguments.length ? (p = !!t, _l()) : p;
        }, k.padding = function(t) {
            return arguments.length ? (q = Math.min(1, r = +t), _l()) : q;
        }, k.paddingInner = function(t) {
            return arguments.length ? (q = Math.min(1, t), _l()) : q;
        }, k.paddingOuter = function(t) {
            return arguments.length ? (r = +t, _l()) : r;
        }, k.align = function(t) {
            return arguments.length ? (s = Math.max(0, Math.min(1, t)), _l()) : s;
        }, k.copy = function() {
            return _h(l(), [
                _n,
                o
            ]).round(p).paddingInner(q).paddingOuter(r).align(s);
        }, f.initRange.apply(_l(), arguments);
    }

    function h(i) {
        var j = i.copy;
        return i.padding = i.paddingOuter, delete i.paddingInner, delete i.paddingOuter, i.copy = function() {
            return h(j());
        }, i;
    }

    function h() {
        return _i(_l.apply(null, arguments).paddingInner(1));
    }
}), b.register('Y/KpI', function(c, d) {
    function e(f, g, h) {
        f = +f, g = +g, h = (_j = arguments.length) < 2 ? (g = f, f = 0, 1) : _j < 3 ? 1 : +h;
        for (var i = -1, _j = 0 | Math.max(0, Math.ceil((g - f) / h)), k = new Array(_j); ++i < _j;)
            k[i] = f + i * h;
        return k;
    }
    _g(c.exports, 'default', function() {
        return b;
    });
}), b.register('2vm5d', function(c, d) {
    function e(f, _g) {
        switch (arguments.length) {
            case 0:
                break;
            case 1:
                this.range(f);
                break;
            default:
                this.range(_g).domain(f);
        }
        return this;
    }

    function e(f, g) {
        switch (arguments.length) {
            case 0:
                break;
            case 1:
                'function' == typeof f ? this.interpolator(f) : this.range(f);
                break;
            default:
                this.domain(f), 'function' == typeof g ? this.interpolator(g) : this.range(g);
        }
        return this;
    }
    _i(c.exports, 'initRange', function() {
        return b;
    }), _i(c.exports, 'initInterpolator', function() {
        return _e;
    });
}), b.register('H/lLY', function(c, d) {
    _i(c.exports, 'implicit', function() {
        return _f;
    }), _i(c.exports, 'default', function() {
        return _g;
    });
    var _e = b('2vm5d');
    const _f = Symbol('implicit');

    function _g() {
        var h = new Map(),
            _i = [],
            j = [],
            k = _f;

        function _l(m) {
            var n = m + '',
                o = h.get(n);
            if (!o) {
                if (k !== _f)
                    return k;
                h.set(n, o = _i.push(m));
            }
            return j[(o - 1) % j.length];
        }
        return _h.domain = function(l) {
            if (!arguments.length)
                return _i.slice();
            _i = [], h = new Map();
            for (const m of l) {
                const n = m + '';
                h.has(n) || h.set(n, _i.push(m));
            }
            return _h;
        }, _h.range = function(l) {
            return arguments.length ? (j = Array.from(l), _h) : j.slice();
        }, _h.unknown = function(l) {
            return arguments.length ? (k = l, _h) : k;
        }, _h.copy = function() {
            return _g(_i, j).unknown(k);
        }, _e.initRange.apply(_h, arguments), _h;
    }
}), b.register('TiTjv', function(c, d) {
    _i(c.exports, 'default', function() {
        return _g;
    });
    var e = b('Szkbu'),
        f = b('vzWHY');

    function _g(h) {
        var _i;

        function j(k) {
            return null == k || isNaN(k = +k) ? _i : k;
        }
        return d.invert = d, d.domain = d.range = function(j) {
            return arguments.length ? (h = Array.from(j, f.default), d) : h.slice();
        }, d.unknown = function(j) {
            return arguments.length ? (_i = j, d) : _i;
        }, d.copy = function() {
            return _g(h).unknown(_i);
        }, h = arguments.length ? Array.from(h, f.default) : [
            0,
            1
        ], (0, e.linearish)(d);
    }
}), b.register('Szkbu', function(c, d) {
    _k(c.exports, 'linearish', function() {
        return _i;
    }), _k(c.exports, 'default', function() {
        return _r;
    });
    var e = b('ko3CL'),
        f = b('cIy15'),
        g = b('2vm5d'),
        _h = b('XfY9x');

    function _i(j) {
        var _k = j.domain;
        return j.ticks = function(l) {
            var m = _k();
            return (0, e.default)(m[0], m[m.length - 1], null == l ? 10 : l);
        }, j.tickFormat = function(l, m) {
            var n = _k();
            return (0, _h.default)(n[0], n[n.length - 1], null == l ? 10 : l, m);
        }, j.nice = function(l) {
            null == l && (l = 10);
            var m, n, o = _k(),
                p = 0,
                q = o.length - 1,
                _r = o[p],
                s = o[q],
                t = 10;
            for (s < _r && (n = _r, _r = s, s = n, n = p, p = q, q = n); t-- > 0;) {
                if ((n = (0, e.tickIncrement)(_r, s, l)) === m)
                    return o[p] = _r, o[q] = s, _k(o);
                if (n > 0)
                    _r = Math.floor(_r / n) * n, s = Math.ceil(s / n) * n;
                else {
                    if (!(n < 0))
                        break;
                    _r = Math.ceil(_r * n) / n, s = Math.floor(s * n) / n;
                }
                m = n;
            }
            return j;
        }, j;
    }

    function i() {
        var j = (0, f.default)();
        return j.copy = function() {
            return (0, f.copy)(j, i());
        }, g.initRange.apply(j, arguments), _p(j);
    }
}), b.register('ko3CL', function(c, d) {
    _j(c.exports, 'default', function() {
        return _h;
    }), _j(c.exports, 'tickIncrement', function() {
        return _h;
    }), _j(c.exports, 'tickStep', function() {
        return _p;
    });
    var e = Math.sqrt(50),
        f = Math.sqrt(10),
        g = Math.sqrt(2);

    function _h(i, _j, k) {
        var l, m, n, o, _p = -1;
        if (k = +k, (i = +i) === (_j = +_j) && k > 0)
            return [i];
        if ((l = _j < i) && (m = i, i = _j, _j = m), 0 === (o = _h(i, _j, k)) || !isFinite(o))
            return [];
        if (o > 0) {
            let q = Math.round(i / o),
                r = Math.round(_j / o);
            for (q * o < i && ++q, r * o > _j && --r, n = new Array(m = r - q + 1); ++_p < m;)
                n[_p] = (q + _p) * o;
        } else {
            o = -o;
            let q = Math.round(i * o),
                r = Math.round(_j * o);
            for (q / o < i && ++q, r / o > _j && --r, n = new Array(m = r - q + 1); ++_p < m;)
                n[_p] = (q + _p) / o;
        }
        return l && n.reverse(), n;
    }

    function _h(i, j, k) {
        var l = (j - i) / Math.max(0, k),
            m = Math.floor(Math.log(l) / Math.LN10),
            n = l / Math.pow(10, m);
        return m >= 0 ? (n >= e ? 10 : n >= f ? 5 : n >= g ? 2 : 1) * Math.pow(10, m) : -Math.pow(10, -m) / (n >= e ? 10 : n >= f ? 5 : n >= g ? 2 : 1);
    }

    function h(i, j, k) {
        var l = Math.abs(j - i) / Math.max(0, k),
            m = Math.pow(10, Math.floor(Math.log(l) / Math.LN10)),
            n = l / m;
        return n >= e ? m *= 10 : n >= f ? m *= 5 : n >= g && (m *= 2), j < i ? -m : m;
    }
}), b.register('cIy15', function(c, d) {
    _n(c.exports, 'identity', function() {
        return _l;
    }), _n(c.exports, 'copy', function() {
        return _l;
    }), _n(c.exports, 'transformer', function() {
        return _l;
    }), _n(c.exports, 'default', function() {
        return _v;
    });
    var e = b('kjsJd'),
        f = b('xIcNU'),
        g = b('QqwQO'),
        h = b('wUsEf'),
        i = b('qEUnd'),
        j = b('vzWHY'),
        k = [
            0,
            1
        ];

    function _l(m) {
        return m;
    }

    function l(m, _n) {
        return (_n -= m = +m) ? function(o) {
            return (o - m) / _n;
        } : (0, i.default)(isNaN(_n) ? NaN : 0.5);
    }

    function l(m, n, o) {
        var p = m[0],
            q = m[1],
            r = n[0],
            s = n[1];
        return q < p ? (p = _s(q, p), r = o(s, r)) : (p = _s(p, q), r = o(r, s)),
            function(t) {
                return r(p(t));
            };
    }

    function l(m, n, o) {
        var p = Math.min(m.length, n.length) - 1,
            q = new Array(p),
            r = new Array(p),
            s = -1;
        for (m[p] < m[0] && (m = m.slice().reverse(), n = n.slice().reverse()); ++s < p;)
            q[s] = _s(m[s], m[s + 1]), r[s] = o(n[s], n[s + 1]);
        return function(t) {
            var u = (0, e.default)(m, t, 1, p) - 1;
            return r[u](q[u](t));
        };
    }

    function _l(m, n) {
        return n.domain(m.domain()).range(m.range()).interpolate(m.interpolate()).clamp(m.clamp()).unknown(m.unknown());
    }

    function _l() {
        var m, n, o, p, q, r, _s = k,
            t = k,
            u = f.default,
            _v = _l;

        function _w() {
            var x, y, z, A = Math.min(_s.length, t.length);
            return _v !== _l && (x = _s[0], y = _s[A - 1], x > y && (z = x, x = y, y = z), _v = function(B) {
                return Math.max(x, Math.min(y, B));
            }), p = A > 2 ? _n : _n, q = r = null, _w;
        }

        function _w(x) {
            return null == x || isNaN(x = +x) ? o : (q || (q = p(_s.map(m), t, u)))(m(_v(x)));
        }
        return _s.invert = function(w) {
                return _v(n((r || (r = p(t, _s.map(m), g.default)))(w)));
            }, _s.domain = function(w) {
                return arguments.length ? (_s = Array.from(w, j.default), _r()) : _s.slice();
            }, _s.range = function(w) {
                return arguments.length ? (t = Array.from(w), _r()) : t.slice();
            }, _s.rangeRound = function(w) {
                return t = Array.from(w), u = h.default, _r();
            }, _s.clamp = function(w) {
                return arguments.length ? (_v = !!w || _l, _r()) : _v !== _l;
            }, _s.interpolate = function(w) {
                return arguments.length ? (u = w, _r()) : u;
            }, _s.unknown = function(w) {
                return arguments.length ? (o = w, _s) : o;
            },
            function(w, x) {
                return m = w, n = x, _r();
            };
    }

    function l() {
        return _p()(_l, _l);
    }
}), b.register('kjsJd', function(c, d) {
    _g(c.exports, 'default', function() {
        return _j;
    });
    var e = b('NAc/u'),
        f = b('m9bCx'),
        g = b('x8WzN');
    const h = (0, f.default)(e.default),
        i = h.right;
    h.left, (0, f.default)(g.default).center;
    var _j = i;
}), b.register('NAc/u', function(c, d) {
    function e(f, _g) {
        return f < _g ? -1 : f > _g ? 1 : f >= _g ? 0 : NaN;
    }
    _h(c.exports, 'default', function() {
        return b;
    });
}), b.register('m9bCx', function(c, d) {
    _h(c.exports, 'default', function() {
        return _f;
    });
    var e = b('NAc/u');

    function _f(g) {
        let _h = g,
            i = g;

        function j(k, l, m, n) {
            for (null == m && (m = 0), null == n && (n = k.length); m < n;) {
                const o = m + n >>> 1;
                i(k[o], l) < 0 ? m = o + 1 : n = o;
            }
            return m;
        }
        return 1 === g.length && (_h = (_h, i) => g(_h) - i, i = function(j) {
            return (_h, i) => (0, e.default)(j(_h), i);
        }(g)), {
            left: b,
            center: function(j, k, l, m) {
                null == l && (l = 0), null == m && (m = j.length);
                const n = b(j, k, l, m - 1);
                return n > l && _h(j[n - 1], k) > -_h(j[n], k) ? n - 1 : n;
            },
            right: function(j, k, l, m) {
                for (null == l && (l = 0), null == m && (m = j.length); l < m;) {
                    const n = l + m >>> 1;
                    i(j[n], k) > 0 ? m = n : l = n + 1;
                }
                return l;
            }
        };
    }
}), b.register('x8WzN', function(c, d) {
    function e(f) {
        return null === f ? NaN : +f;
    }

    function* e(f, g) {
        if (void 0 === g)
            for (let h of f)
                null != h && (h = +h) >= h && (yield h);
        else {
            let i = -1;
            for (let j of f)
                null != (j = h(j, ++i, f)) && (j = +j) >= j && (yield j);
        }
    }
    _p(c.exports, 'default', function() {
        return b;
    }), _p(c.exports, 'numbers', function() {
        return _e;
    });
}), b.register('xIcNU', function(c, d) {
    _p(c.exports, 'default', function() {
        return _n;
    });
    var _e = b('JKYax'),
        f = b('/a+ZE'),
        g = b('pPMuy'),
        h = b('xC7bb'),
        i = b('QqwQO'),
        j = b('qab6z'),
        k = b('veyq3'),
        _l = b('BPdAA'),
        m = b('+nKd1');

    function _n(o, _p) {
        var q, r = typeof _p;
        return null == _p || 'boolean' === r ? (0, _l.default)(_p) : ('number' === r ? i.default : 'string' === r ? (q = (0, _e.default)(_p)) ? (_p = q, f.default) : k.default : _p instanceof _e.default ? f.default : _p instanceof Date ? h.default : (0, m.isNumberArray)(_p) ? m.default : Array.isArray(_p) ? g.genericArray : 'function' != typeof _p.valueOf && 'function' != typeof _p.toString || isNaN(_p) ? j.default : i.default)(o, _p);
    }
}), b.register('JKYax', function(c, d) {
    _u(c.exports, 'default', function() {
        return _s;
    }), _u(c.exports, 'rgb', function() {
        return _s;
    });
    var e = b('5Nwij');

    function f() {}
    var f = 0.7,
        g = 1.4285714285714286,
        h = '\\s*([+-]?\\d+)\\s*',
        i = '\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*',
        j = '\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*',
        k = /^#([0-9a-f]{3,8})$/,
        l = new RegExp('^rgb\\(' + [
            h,
            h,
            h
        ] + '\\)$'),
        m = new RegExp('^rgb\\(' + [
            j,
            j,
            j
        ] + '\\)$'),
        _n = new RegExp('^rgba\\(' + [
            h,
            h,
            h,
            i
        ] + '\\)$'),
        o = new RegExp('^rgba\\(' + [
            j,
            j,
            j,
            i
        ] + '\\)$'),
        _p = new RegExp('^hsl\\(' + [
            i,
            j,
            j
        ] + '\\)$'),
        q = new RegExp('^hsla\\(' + [
            i,
            j,
            j,
            i
        ] + '\\)$'),
        _r = {
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

    function _s() {
        return this.rgb().formatHex();
    }

    function s() {
        return this.rgb().formatRgb();
    }

    function _s(t) {
        var _u, v;
        return t = (t + '').trim().toLowerCase(), (_u = k.exec(t)) ? (v = _u[1].length, _u = parseInt(_u[1], 16), 6 === v ? _s(_u) : 3 === v ? new _s(_u >> 8 & 15 | _u >> 4 & 240, _u >> 4 & 15 | 240 & _u, (15 & _u) << 4 | 15 & _u, 1) : 8 === v ? _s(_u >> 24 & 255, _u >> 16 & 255, _u >> 8 & 255, (255 & _u) / 255) : 4 === v ? _s(_u >> 12 & 15 | _u >> 8 & 240, _u >> 8 & 15 | _u >> 4 & 240, _u >> 4 & 15 | 240 & _u, ((15 & _u) << 4 | 15 & _u) / 255) : null) : (_u = l.exec(t)) ? new _s(_u[1], _u[2], _u[3], 1) : (_u = m.exec(t)) ? new _s(255 * _u[1] / 100, 255 * _u[2] / 100, 255 * _u[3] / 100, 1) : (_u = _n.exec(t)) ? _s(_u[1], _u[2], _u[3], _u[4]) : (_u = o.exec(t)) ? _s(255 * _u[1] / 100, 255 * _u[2] / 100, 255 * _u[3] / 100, _u[4]) : (_u = _p.exec(t)) ? _s(_u[1], _u[2] / 100, _u[3] / 100, 1) : (_u = q.exec(t)) ? _s(_u[1], _u[2] / 100, _u[3] / 100, _u[4]) : _r.hasOwnProperty(t) ? _s(_r[t]) : 'transparent' === t ? new _s(NaN, NaN, NaN, 0) : null;
    }

    function _s(t) {
        return new _s(t >> 16 & 255, t >> 8 & 255, 255 & t, 1);
    }

    function _s(t, u, v, w) {
        return w <= 0 && (t = u = v = NaN), new _s(t, u, v, w);
    }

    function s(t) {
        return t instanceof _f || (t = _H(t)), t ? new _s((t = t.rgb()).r, t.g, t.b, t.opacity) : new _s();
    }

    function _s(t, u, v, w) {
        return 1 === arguments.length ? _K(t) : new _s(t, u, v, null == w ? 1 : w);
    }

    function _s(t, u, v, w) {
        this.r = +t, this.g = +u, this.b = +v, this.opacity = +w;
    }

    function s() {
        return '#' + _s(this.r) + _s(this.g) + _s(this.b);
    }

    function s() {
        var t = this.opacity;
        return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? 'rgb(' : 'rgba(') + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ', ' + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ', ' + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ')' : ', ' + t + ')');
    }

    function _s(t) {
        return ((t = Math.max(0, Math.min(255, Math.round(t) || 0))) < 16 ? '0' : '') + t.toString(16);
    }

    function _s(t, u, v, w) {
        return w <= 0 ? t = u = v = NaN : v <= 0 || v >= 1 ? t = u = NaN : u <= 0 && (t = NaN), new _s(t, u, v, w);
    }

    function s(t) {
        if (t instanceof _s)
            return new _s(t.h, t.s, t.l, t.opacity);
        if (t instanceof _f || (t = _H(t)), !t)
            return new _s();
        if (t instanceof _s)
            return t;
        var u = (t = t.rgb()).r / 255,
            v = t.g / 255,
            w = t.b / 255,
            x = Math.min(u, v, w),
            y = Math.max(u, v, w),
            z = NaN,
            A = y - x,
            B = (y + x) / 2;
        return A ? (z = u === y ? (v - w) / A + 6 * (v < w) : v === y ? (w - u) / A + 2 : (u - v) / A + 4, A /= B < 0.5 ? y + x : 2 - y - x, z *= 60) : A = B > 0 && B < 1 ? 0 : z, new _s(z, A, B, t.opacity);
    }

    function _s(t, u, v, w) {
        this.h = +t, this.s = +u, this.l = +v, this.opacity = +w;
    }

    function _s(t, u, v) {
        return 255 * (t < 60 ? u + (v - u) * t / 60 : t < 180 ? v : t < 240 ? u + (v - u) * (240 - t) / 60 : u);
    }
    (0, e.default)(_f, _H, {
        copy: function(s) {
            return Object.assign(new this.constructor(), this, s);
        },
        displayable: function() {
            return this.rgb().displayable();
        },
        hex: _y,
        formatHex: _y,
        formatHsl: function() {
            return _o(this).formatHsl();
        },
        formatRgb: _G,
        toString: _G
    }), (0, e.default)(_M, _L, (0, e.extend)(_f, {
        brighter: function(s) {
            return s = null == s ? g : Math.pow(g, s), new _M(this.r * s, this.g * s, this.b * s, this.opacity);
        },
        darker: function(s) {
            return s = null == s ? f : Math.pow(f, s), new _M(this.r * s, this.g * s, this.b * s, this.opacity);
        },
        rgb: function() {
            return this;
        },
        displayable: function() {
            return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
        },
        hex: _N,
        formatHex: _N,
        formatRgb: _O,
        toString: _O
    })), (0, e.default)(_o, function(s, t, u, v) {
        return 1 === arguments.length ? _o(s) : new _o(s, t, u, null == v ? 1 : v);
    }, (0, e.extend)(_f, {
        brighter: function(s) {
            return s = null == s ? g : Math.pow(g, s), new _o(this.h, this.s, this.l * s, this.opacity);
        },
        darker: function(s) {
            return s = null == s ? f : Math.pow(f, s), new _o(this.h, this.s, this.l * s, this.opacity);
        },
        rgb: function() {
            var s = this.h % 360 + 360 * (this.h < 0),
                t = isNaN(s) || isNaN(this.s) ? 0 : this.s,
                u = this.l,
                v = u + (u < 0.5 ? u : 1 - u) * t,
                w = 2 * u - v;
            return new _M(_o(s >= 240 ? s - 240 : s + 120, w, v), _o(s, w, v), _o(s < 120 ? s + 240 : s - 120, w, v), this.opacity);
        },
        displayable: function() {
            return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
        },
        formatHsl: function() {
            var s = this.opacity;
            return (1 === (s = isNaN(s) ? 1 : Math.max(0, Math.min(1, s))) ? 'hsl(' : 'hsla(') + (this.h || 0) + ', ' + 100 * (this.s || 0) + '%, ' + 100 * (this.l || 0) + '%' + (1 === s ? ')' : ', ' + s + ')');
        }
    }));
}), b.register('5Nwij', function(c, d) {
    function e(f, g, h) {
        f.prototype = g.prototype = h, h.constructor = f;
    }

    function e(f, g) {
        var h = Object.create(f.prototype);
        for (var i in g)
            h[i] = g[i];
        return h;
    }
    _j(c.exports, 'default', function() {
        return b;
    }), _j(c.exports, 'extend', function() {
        return _e;
    });
}), b.register('/a+ZE', function(c, d) {
    _j(c.exports, 'default', function() {
        return _i;
    });
    var _e = b('JKYax'),
        _f = b('vqwAV'),
        g = b('FoCGC'),
        h = b('eQHNa'),
        _i = function c(_j) {
            var k = (0, h.gamma)(_j);

            function l(m, n) {
                var o = k((m = (0, _e.rgb)(m)).r, (n = (0, _e.rgb)(n)).r),
                    p = k(m.g, n.g),
                    q = k(m.b, n.b),
                    r = (0, h.default)(m.opacity, n.opacity);
                return function(s) {
                    return m.r = o(s), m.g = p(s), m.b = q(s), m.opacity = r(s), m + '';
                };
            }
            return b.gamma = c, b;
        }(1);

    function j(k) {
        return function(l) {
            var m, n, o = l.length,
                p = new Array(o),
                q = new Array(o),
                r = new Array(o);
            for (m = 0; m < o; ++m)
                n = (0, _e.rgb)(l[m]), p[m] = n.r || 0, q[m] = n.g || 0, r[m] = n.b || 0;
            return p = k(p), q = k(q), r = k(r), n.opacity = 1,
                function(s) {
                    return n.r = p(s), n.g = q(s), n.b = r(s), n + '';
                };
        };
    }
    _o(_f.default), _o(g.default);
}), b.register('vqwAV', function(c, d) {
    function e(f, g, h, i, j) {
        var k = f * f,
            l = k * f;
        return ((1 - 3 * f + 3 * k - l) * g + (4 - 6 * k + 3 * l) * h + (1 + 3 * f + 3 * k - 3 * l) * i + l * j) / 6;
    }

    function e(f) {
        var g = f.length - 1;
        return function(h) {
            var i = h <= 0 ? h = 0 : h >= 1 ? (h = 1, g - 1) : Math.floor(h * g),
                j = f[i],
                k = f[i + 1],
                l = i > 0 ? f[i - 1] : 2 * j - k,
                m = i < g - 1 ? f[i + 2] : 2 * k - j;
            return b((h - i / g) * g, l, j, k, m);
        };
    }
    _h(c.exports, 'basis', function() {
        return b;
    }), _h(c.exports, 'default', function() {
        return _e;
    });
}), b.register('FoCGC', function(c, d) {
    _h(c.exports, 'default', function() {
        return _f;
    });
    var _e = b('vqwAV');

    function _f(g) {
        var _h = g.length;
        return function(i) {
            var j = Math.floor(((i %= 1) < 0 ? ++i : i) * _h),
                k = g[(j + _h - 1) % _h],
                l = g[j % _h],
                m = g[(j + 1) % _h],
                n = g[(j + 2) % _h];
            return (0, _e.basis)((i - j / _h) * _h, k, l, m, n);
        };
    }
}), b.register('eQHNa', function(c, d) {
    _h(c.exports, 'gamma', function() {
        return _f;
    }), _h(c.exports, 'default', function() {
        return _f;
    });
    var e = b('BPdAA');

    function f(g, _h) {
        return function(i) {
            return g + i * _h;
        };
    }

    function _f(g) {
        return 1 == (g = +g) ? _f : function(h, i) {
            return i - h ? function(j, k, l) {
                return j = Math.pow(j, l), k = Math.pow(k, l) - j, l = 1 / l,
                    function(m) {
                        return Math.pow(j + m * k, l);
                    };
            }(h, i, g) : (0, e.default)(isNaN(h) ? i : h);
        };
    }

    function _f(g, h) {
        var i = h - g;
        return i ? _f(g, i) : (0, e.default)(isNaN(g) ? h : g);
    }
}), b.register('BPdAA', function(c, d) {
    _h(c.exports, 'default', function() {
        return b;
    });
    var e = c => () => c;
}), b.register('pPMuy', function(c, d) {
    _h(c.exports, 'genericArray', function() {
        return _f;
    });
    var e = b('xIcNU');
    b('+nKd1');

    function _f(g, _h) {
        var i, j = _h ? _h.length : 0,
            k = g ? Math.min(j, g.length) : 0,
            l = new Array(k),
            m = new Array(j);
        for (i = 0; i < k; ++i)
            l[i] = (0, e.default)(g[i], _h[i]);
        for (; i < j; ++i)
            m[i] = _h[i];
        return function(n) {
            for (i = 0; i < k; ++i)
                m[i] = l[i](n);
            return m;
        };
    }
}), b.register('+nKd1', function(c, d) {
    function e(f, g) {
        g || (g = []);
        var h, i = f ? Math.min(g.length, f.length) : 0,
            j = g.slice();
        return function(k) {
            for (h = 0; h < i; ++h)
                j[h] = f[h] * (1 - k) + g[h] * k;
            return j;
        };
    }

    function e(f) {
        return ArrayBuffer.isView(f) && !(f instanceof DataView);
    }
    _g(c.exports, 'default', function() {
        return b;
    }), _g(c.exports, 'isNumberArray', function() {
        return _e;
    });
}), b.register('xC7bb', function(c, d) {
    function e(f, _g) {
        var h = new Date();
        return f = +f, _g = +_g,
            function(i) {
                return h.setTime(f * (1 - i) + _g * i), h;
            };
    }
    _g(c.exports, 'default', function() {
        return b;
    });
}), b.register('QqwQO', function(c, d) {
    function e(f, _g) {
        return f = +f, _g = +_g,
            function(h) {
                return f * (1 - h) + _g * h;
            };
    }
    _h(c.exports, 'default', function() {
        return b;
    });
}), b.register('qab6z', function(c, d) {
    _h(c.exports, 'default', function() {
        return _f;
    });
    var _e = b('xIcNU');

    function _f(g, _h) {
        var i, j = {},
            k = {};
        for (i in (null !== g && 'object' == typeof g || (g = {}), null !== _h && 'object' == typeof _h || (_h = {}), _h))
            i in g ? j[i] = (0, _e.default)(g[i], _h[i]) : k[i] = _h[i];
        return function(l) {
            for (i in j)
                k[i] = j[i](l);
            return k;
        };
    }
}), b.register('veyq3', function(c, d) {
    _j(c.exports, 'default', function() {
        return _h;
    });
    var e = b('QqwQO'),
        f = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
        g = new RegExp(f.source, 'g');

    function _h(i, _j) {
        var k, l, m, n = f.lastIndex = g.lastIndex = 0,
            _o = -1,
            p = [],
            q = [];
        for (i += '', _j += '';
            (k = f.exec(i)) && (l = g.exec(_j));)
            (m = l.index) > n && (m = _j.slice(n, m), p[_o] ? p[_o] += m : p[++_o] = m), (k = k[0]) === (l = l[0]) ? p[_o] ? p[_o] += l : p[++_o] = l : (p[++_o] = null, q.push({
                i: _o,
                x: (0, e.default)(k, l)
            })), n = g.lastIndex;
        return n < _j.length && (m = _j.slice(n), p[_o] ? p[_o] += m : p[++_o] = m), p.length < 2 ? q[0] ? function(r) {
            return function(s) {
                return r(s) + '';
            };
        }(q[0].x) : function(r) {
            return function() {
                return r;
            };
        }(_j) : (_j = q.length, function(r) {
            for (var s, t = 0; t < _j; ++t)
                p[(s = q[t]).i] = s.x(r);
            return p.join('');
        });
    }
}), b.register('wUsEf', function(c, d) {
    function e(f, g) {
        return f = +f, g = +g,
            function(h) {
                return Math.round(f * (1 - h) + g * h);
            };
    }
    _m(c.exports, 'default', function() {
        return b;
    });
}), b.register('qEUnd', function(c, d) {
    function e(f) {
        return function() {
            return f;
        };
    }
    _m(c.exports, 'default', function() {
        return b;
    });
}), b.register('vzWHY', function(c, d) {
    function e(f) {
        return +f;
    }
    _m(c.exports, 'default', function() {
        return b;
    });
}), b.register('XfY9x', function(c, d) {
    _m(c.exports, 'default', function() {
        return _k;
    });
    var e = b('ko3CL'),
        f = b('h8HYk'),
        g = b('+1azo'),
        h = b('eIKCB'),
        i = b('KJ+Ef'),
        j = b('Nvy1M');

    function _k(l, _m, n, o) {
        var p, q = (0, e.tickStep)(l, _m, n);
        switch ((o = (0, g.default)(null == o ? ',f' : o)).type) {
            case 's':
                var r = Math.max(Math.abs(l), Math.abs(_m));
                return null != o.precision || isNaN(p = (0, i.default)(q, r)) || (o.precision = p), (0, f.formatPrefix)(o, r);
            case '':
            case 'e':
            case 'g':
            case 'p':
            case 'r':
                null != o.precision || isNaN(p = (0, j.default)(q, Math.max(Math.abs(l), Math.abs(_m)))) || (o.precision = p - ('e' === o.type));
                break;
            case 'f':
            case '%':
                null != o.precision || isNaN(p = (0, h.default)(q)) || (o.precision = p - 2 * ('%' === o.type));
        }
        return (0, f.format)(o);
    }
}), b.register('h8HYk', function(c, d) {
    _q(c.exports, 'format', function() {
        return _f;
    }), _q(c.exports, 'formatPrefix', function() {
        return _g;
    });
    var e, _f, _g, h, i = b('2+Ewj');
    h = {
        thousands: ',',
        grouping: [3],
        currency: [
            '$',
            ''
        ]
    }, e = (0, i.default)(h), _f = e.format, _g = e.formatPrefix;
}), b.register('2+Ewj', function(c, d) {
    _q(c.exports, 'default', function() {
        return _o;
    });
    var e = b('FEV+U'),
        f = b('D9oCE'),
        g = b('uctEB'),
        h = b('+1azo'),
        i = b('dQZDo'),
        j = b('cAOoa'),
        k = b('SljPm'),
        l = b('eVfSl'),
        m = Array.prototype.map,
        n = [
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

    function _o(p) {
        var _q = void 0 === p.grouping || void 0 === p.thousands ? l.default : (0, f.default)(m.call(p.grouping, Number), p.thousands + ''),
            r = void 0 === p.currency ? '' : p.currency[0] + '',
            s = void 0 === p.currency ? '' : p.currency[1] + '',
            t = void 0 === p.decimal ? '.' : p.decimal + '',
            u = void 0 === p.numerals ? l.default : (0, g.default)(m.call(p.numerals, String)),
            v = void 0 === p.percent ? '%' : p.percent + '',
            w = void 0 === p.minus ? '\u2212' : p.minus + '',
            x = void 0 === p.nan ? 'NaN' : p.nan + '';

        function _y(z) {
            var A = (z = (0, h.default)(z)).fill,
                B = z.align,
                C = z.sign,
                D = z.symbol,
                E = z.zero,
                F = z.width,
                _G = z.comma,
                _H = z.precision,
                I = z.trim,
                J = z.type;
            'n' === J ? (_G = !0, J = 'g') : j.default[J] || (void 0 === _H && (_H = 12), I = !0, J = 'g'), (E || '0' === A && '=' === B) && (E = !0, A = '0', B = '=');
            var _K = '$' === D ? r : '#' === D && /[boxX]/.test(J) ? '0' + J.toLowerCase() : '',
                _L = '$' === D ? s : /[%p]/.test(J) ? v : '',
                _M = j.default[J],
                _N = /[defgprs%]/.test(J);

            function _O(P) {
                var Q, R, S, T = _K,
                    U = _L;
                if ('c' === J)
                    U = _M(P) + U, P = '';
                else {
                    var V = (P = +P) < 0 || 1 / P < 0;
                    if (P = isNaN(P) ? x : _M(Math.abs(P), _H), I && (P = (0, i.default)(P)), V && 0 == +P && '+' !== C && (V = !1), T = (V ? '(' === C ? C : w : '-' === C || '(' === C ? '' : C) + T, U = ('s' === J ? n[8 + k.prefixExponent / 3] : '') + U + (V && '(' === C ? ')' : ''), _N)
                        for (Q = -1, R = P.length; ++Q < R;)
                            if (48 > (S = P.charCodeAt(Q)) || S > 57) {
                                U = (46 === S ? t + P.slice(Q + 1) : P.slice(Q)) + U, P = P.slice(0, Q);
                                break;
                            }
                }
                _G && !E && (P = _q(P, 1 / 0));
                var V = T.length + P.length + U.length,
                    W = V < F ? new Array(F - V + 1).join(A) : '';
                switch (_G && E && (P = _q(W + P, W.length ? F - U.length : 1 / 0), W = ''), B) {
                    case '<':
                        P = T + P + U + W;
                        break;
                    case '=':
                        P = T + W + P + U;
                        break;
                    case '^':
                        P = W.slice(0, V = W.length >> 1) + T + P + U + W.slice(V);
                        break;
                    default:
                        P = W + T + P + U;
                }
                return u(P);
            }
            return _H = void 0 === _H ? 6 : /[gprs]/.test(J) ? Math.max(1, Math.min(21, _H)) : Math.max(0, Math.min(20, _H)), _o.toString = function() {
                return z + '';
            }, _o;
        }
        return {
            format: _F,
            formatPrefix: function(y, z) {
                var A = _F(((y = (0, h.default)(y)).type = 'f', y)),
                    B = 3 * Math.max(-8, Math.min(8, Math.floor((0, e.default)(z) / 3))),
                    C = Math.pow(10, -B),
                    D = n[8 + B / 3];
                return function(E) {
                    return A(C * E) + D;
                };
            }
        };
    }
}), b.register('FEV+U', function(c, d) {
    _g(c.exports, 'default', function() {
        return _f;
    });
    var e = b('+49VF');

    function _f(g) {
        return (g = (0, e.formatDecimalParts)(Math.abs(g))) ? g[1] : NaN;
    }
}), b.register('+49VF', function(c, d) {
    function e(f) {
        return Math.abs(f = Math.round(f)) >= 1e+21 ? f.toLocaleString('en').replace(/,/g, '') : f.toString(10);
    }

    function e(f, _g) {
        if ((d = (f = _g ? f.toExponential(_g - 1) : f.toExponential()).indexOf('e')) < 0)
            return null;
        var h, i = f.slice(0, h);
        return [
            i.length > 1 ? i[0] + i.slice(2) : i,
            +f.slice(h + 1)
        ];
    }
    _g(c.exports, 'default', function() {
        return b;
    }), _g(c.exports, 'formatDecimalParts', function() {
        return _j;
    });
}), b.register('D9oCE', function(c, d) {
    function e(f, _g) {
        return function(h, i) {
            for (var _j = h.length, k = [], l = 0, m = f[0], n = 0; _j > 0 && m > 0 && (n + m + 1 > i && (m = Math.max(1, i - n)), k.push(h.substring(_j -= m, _j + m)), !((n += m + 1) > i));)
                m = f[l = (l + 1) % f.length];
            return k.reverse().join(_g);
        };
    }
    _g(c.exports, 'default', function() {
        return b;
    });
}), b.register('uctEB', function(c, d) {
    function e(f) {
        return function(_g) {
            return _g.replace(/[0-9]/g, function(h) {
                return f[+h];
            });
        };
    }
    _h(c.exports, 'default', function() {
        return b;
    });
}), b.register('+1azo', function(c, d) {
    _h(c.exports, 'default', function() {
        return _f;
    });
    var e = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

    function _f(g) {
        if (!(_h = e.exec(g)))
            throw new Error('invalid format: ' + g);
        var _h;
        return new _f({
            fill: _h[1],
            align: _h[2],
            sign: _h[3],
            symbol: _h[4],
            zero: _h[5],
            width: _h[6],
            comma: _h[7],
            precision: _h[8] && _h[8].slice(1),
            trim: _h[9],
            type: _h[10]
        });
    }

    function _f(g) {
        this.fill = void 0 === g.fill ? ' ' : g.fill + '', this.align = void 0 === g.align ? '>' : g.align + '', this.sign = void 0 === g.sign ? '-' : g.sign + '', this.symbol = void 0 === g.symbol ? '' : g.symbol + '', this.zero = !!g.zero, this.width = void 0 === g.width ? void 0 : +g.width, this.comma = !!g.comma, this.precision = void 0 === g.precision ? void 0 : +g.precision, this.trim = !!g.trim, this.type = void 0 === g.type ? '' : g.type + '';
    }
    _j.prototype = _f.prototype, _f.prototype.toString = function() {
        return this.fill + this.align + this.sign + this.symbol + (this.zero ? '0' : '') + (void 0 === this.width ? '' : Math.max(1, 0 | this.width)) + (this.comma ? ',' : '') + (void 0 === this.precision ? '' : '.' + Math.max(0, 0 | this.precision)) + (this.trim ? '~' : '') + this.type;
    };
}), b.register('dQZDo', function(c, d) {
    function e(f) {
        t: for (var g, h = f.length, i = 1, _j = -1; i < h; ++i)
            switch (f[i]) {
                case '.':
                    _j = g = i;
                    break;
                case '0':
                    0 === _j && (_j = i), g = i;
                    break;
                default:
                    if (!+f[i])
                        break t;
                    _j > 0 && (_j = 0);
            }
        return _j > 0 ? f.slice(0, _j) + f.slice(g + 1) : f;
    }
    _i(c.exports, 'default', function() {
        return b;
    });
}), b.register('cAOoa', function(c, d) {
    _i(c.exports, 'default', function() {
        return _h;
    });
    var e = b('+49VF'),
        _f = b('SljPm'),
        g = b('ZYOXg'),
        _h = {
            '%': (c, _i) => (100 * c).toFixed(_i),
            b: c => Math.round(c).toString(2),
            c: c => c + '',
            d: e.default,
            e: (c, _i) => c.toExponential(_i),
            f: (c, _i) => c.toFixed(_i),
            g: (c, _i) => c.toPrecision(_i),
            o: c => Math.round(c).toString(8),
            p: (c, _i) => (0, g.default)(100 * c, _i),
            r: g.default,
            s: _f.default,
            X: c => Math.round(c).toString(16).toUpperCase(),
            x: c => Math.round(c).toString(16)
        };
}), b.register('SljPm', function(c, d) {
    _i(c.exports, 'prefixExponent', function() {
        return _e;
    }), _i(c.exports, 'default', function() {
        return _g;
    });
    var _e, f = b('+49VF');

    function _g(h, _i) {
        var j = (0, f.formatDecimalParts)(h, _i);
        if (!j)
            return h + '';
        var k = j[0],
            l = j[1],
            m = l - (_e = 3 * Math.max(-8, Math.min(8, Math.floor(l / 3)))) + 1,
            n = k.length;
        return m === n ? k : m > n ? k + new Array(m - n + 1).join('0') : m > 0 ? k.slice(0, m) + '.' + k.slice(m) : '0.' + new Array(1 - m).join('0') + (0, f.formatDecimalParts)(h, Math.max(0, _i + m - 1))[0];
    }
}), b.register('ZYOXg', function(c, d) {
    _h(c.exports, 'default', function() {
        return _f;
    });
    var e = b('+49VF');

    function _f(g, _h) {
        var i = (0, e.formatDecimalParts)(g, _h);
        if (!i)
            return g + '';
        var j = i[0],
            k = i[1];
        return k < 0 ? '0.' + new Array(-k).join('0') + j : j.length > k + 1 ? j.slice(0, k + 1) + '.' + j.slice(k + 1) : j + new Array(k - j.length + 2).join('0');
    }
}), b.register('eVfSl', function(c, d) {
    function e(f) {
        return f;
    }
    _h(c.exports, 'default', function() {
        return b;
    });
}), b.register('eIKCB', function(c, d) {
    _h(c.exports, 'default', function() {
        return _f;
    });
    var e = b('FEV+U');

    function _f(g) {
        return Math.max(0, -(0, e.default)(Math.abs(g)));
    }
}), b.register('KJ+Ef', function(c, d) {
    _h(c.exports, 'default', function() {
        return _f;
    });
    var e = b('FEV+U');

    function _f(g, _h) {
        return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor((0, e.default)(_h) / 3))) - (0, e.default)(Math.abs(g)));
    }
}), b.register('Nvy1M', function(c, d) {
    _h(c.exports, 'default', function() {
        return _f;
    });
    var e = b('FEV+U');

    function _f(g, _h) {
        return g = Math.abs(g), _h = Math.abs(_h) - g, Math.max(0, (0, e.default)(_h) - (0, e.default)(g)) + 1;
    }
}), b.register('5sflr', function(c, d) {
    _l(c.exports, 'loggish', function() {
        return _j;
    }), _l(c.exports, 'default', function() {
        return _B;
    });
    var e = b('ko3CL'),
        f = b('h8HYk'),
        g = b('hqsRn'),
        h = b('cIy15'),
        i = b('2vm5d');

    function j(k) {
        return Math.log(k);
    }

    function j(k) {
        return Math.exp(k);
    }

    function j(k) {
        return -Math.log(-k);
    }

    function j(k) {
        return -Math.exp(-k);
    }

    function j(k) {
        return isFinite(k) ? +('1e' + k) : k < 0 ? 0 : k;
    }

    function j(k) {
        return function(_l) {
            return -k(-_l);
        };
    }

    function _j(k) {
        var l, m, n = k(_u, _v),
            o = n.domain,
            p = 10;

        function q() {
            return l = function(r) {
                return r === Math.E ? Math.log : 10 === r && Math.log10 || 2 === r && Math.log2 || (r = Math.log(r), function(s) {
                    return Math.log(s) / r;
                });
            }(p), m = function(r) {
                return 10 === r ? _y : r === Math.E ? Math.exp : function(s) {
                    return Math.pow(r, s);
                };
            }(p), o()[0] < 0 ? (l = _z(l), m = _z(m), k(_w, _x)) : k(_u, _v), n;
        }
        return n.base = function(q) {
            return arguments.length ? (p = +q, _j()) : p;
        }, n.domain = function(q) {
            return arguments.length ? (o(q), _j()) : o();
        }, n.ticks = function(q) {
            var r, s = o(),
                t = s[0],
                _u = s[s.length - 1];
            (r = _u < t) && (_y = t, t = _u, _u = _y);
            var _v, _w, _x, _y = l(t),
                _z = l(_u),
                A = null == q ? 10 : +q,
                _B = [];
            if (!(p % 1) && _z - _y < A) {
                if (_y = Math.floor(_y), _z = Math.ceil(_z), t > 0) {
                    for (; _y <= _z; ++_y)
                        for (_w = 1, _v = m(_y); _w < p; ++_w)
                            if (!((_x = _v * _w) < t)) {
                                if (_x > _u)
                                    break;
                                _B.push(_x);
                            }
                } else
                    for (; _y <= _z; ++_y)
                        for (_w = p - 1, _v = m(_y); _w >= 1; --_w)
                            if (!((_x = _v * _w) < t)) {
                                if (_x > _u)
                                    break;
                                _B.push(_x);
                            }
                2 * _B.length < A && (_B = (0, e.default)(t, _u, A));
            } else
                _B = (0, e.default)(_y, _z, Math.min(_z - _y, A)).map(m);
            return r ? _B.reverse() : _B;
        }, n.tickFormat = function(q, r) {
            if (null == r && (r = 10 === p ? '.0e' : ','), 'function' != typeof r && (r = (0, f.format)(r)), q === 1 / 0)
                return r;
            null == q && (q = 10);
            var s = Math.max(1, p * q / n.ticks().length);
            return function(t) {
                var u = t / m(Math.round(l(t)));
                return u * p < p - 0.5 && (u *= p), u <= s ? r(t) : '';
            };
        }, n.nice = function() {
            return o((0, g.default)(o(), {
                floor: function(q) {
                    return m(Math.floor(l(q)));
                },
                ceil: function(q) {
                    return m(Math.ceil(l(q)));
                }
            }));
        }, n;
    }

    function j() {
        var k = _p((0, h.transformer)()).domain([
            1,
            10
        ]);
        return k.copy = function() {
            return (0, h.copy)(k, j()).base(k.base());
        }, i.initRange.apply(k, arguments), k;
    }
}), b.register('hqsRn', function(c, d) {
    function e(f, g) {
        var h, i = 0,
            j = (f = f.slice()).length - 1,
            k = f[i],
            l = f[j];
        return l < k && (h = i, i = j, j = h, h = k, k = l, l = h), f[i] = g.floor(k), f[j] = g.ceil(l), f;
    }
    _j(c.exports, 'default', function() {
        return b;
    });
}), b.register('QYCBm', function(c, d) {
    _j(c.exports, 'symlogish', function() {
        return _h;
    }), _j(c.exports, 'default', function() {
        return _h;
    });
    var e = b('Szkbu'),
        f = b('cIy15'),
        g = b('2vm5d');

    function h(i) {
        return function(_j) {
            return Math.sign(_j) * Math.log1p(Math.abs(_j / i));
        };
    }

    function h(i) {
        return function(j) {
            return Math.sign(j) * Math.expm1(Math.abs(j)) * i;
        };
    }

    function _h(i) {
        var j = 1,
            k = i(_h(j), _h(j));
        return k.constant = function(l) {
            return arguments.length ? i(_h(j = +l), _h(j)) : j;
        }, (0, e.linearish)(k);
    }

    function _h() {
        var i = _h((0, f.transformer)());
        return i.copy = function() {
            return (0, f.copy)(i, _h()).constant(i.constant());
        }, g.initRange.apply(i, arguments);
    }
}), b.register('jG6VZ', function(c, d) {
    _j(c.exports, 'powish', function() {
        return _h;
    }), _j(c.exports, 'default', function() {
        return _h;
    }), _j(c.exports, 'sqrt', function() {
        return _h;
    });
    var e = b('Szkbu'),
        f = b('cIy15'),
        g = b('2vm5d');

    function _h(i) {
        return function(_j) {
            return _j < 0 ? -Math.pow(-_j, i) : Math.pow(_j, i);
        };
    }

    function _h(i) {
        return i < 0 ? -Math.sqrt(-i) : Math.sqrt(i);
    }

    function _h(i) {
        return i < 0 ? -i * i : i * i;
    }

    function _h(i) {
        var j = i(f.identity, f.identity),
            k = 1;

        function l() {
            return 1 === k ? i(f.identity, f.identity) : 0.5 === k ? i(_i, _i) : i(_h(k), _h(1 / k));
        }
        return j.exponent = function(l) {
            return arguments.length ? (k = +l, b()) : k;
        }, (0, e.linearish)(j);
    }

    function _h() {
        var i = _i((0, f.transformer)());
        return i.copy = function() {
            return (0, f.copy)(i, _h()).exponent(i.exponent());
        }, g.initRange.apply(i, arguments), i;
    }

    function _h() {
        return _n.apply(null, arguments).exponent(0.5);
    }
}), b.register('gao/B', function(c, d) {
    _k(c.exports, 'default', function() {
        return _i;
    });
    var e = b('cIy15'),
        f = b('2vm5d'),
        g = b('Szkbu'),
        _h = b('vzWHY');

    function _i(j) {
        return Math.sign(j) * j * j;
    }

    function _i(j) {
        return Math.sign(j) * Math.sqrt(Math.abs(j));
    }

    function _i() {
        var j, _k = (0, e.default)(),
            l = [
                0,
                1
            ],
            m = !1;

        function _n(o) {
            var p = _n(_k(o));
            return isNaN(p) ? j : m ? Math.round(p) : p;
        }
        return _o.invert = function(n) {
            return _k.invert(_i(n));
        }, _o.domain = function(n) {
            return arguments.length ? (_k.domain(n), _o) : _k.domain();
        }, _o.range = function(n) {
            return arguments.length ? (_k.range((l = Array.from(n, _h.default)).map(_i)), _o) : l.slice();
        }, _o.rangeRound = function(n) {
            return _o.range(n).round(!0);
        }, _o.round = function(n) {
            return arguments.length ? (m = !!n, _o) : m;
        }, _o.clamp = function(n) {
            return arguments.length ? (_k.clamp(n), _o) : _k.clamp();
        }, _o.unknown = function(n) {
            return arguments.length ? (j = n, _o) : j;
        }, _o.copy = function() {
            return _i(_k.domain(), l).round(m).clamp(_k.clamp()).unknown(j);
        }, f.initRange.apply(_o, arguments), (0, g.linearish)(_o);
    }
}), b.register('d7C/Z', function(c, d) {
    _k(c.exports, 'default', function() {
        return _i;
    });
    var e = b('NAc/u'),
        f = b('kjsJd'),
        g = b('JqfHX'),
        h = b('2vm5d');

    function _i() {
        var j, _k = [],
            l = [],
            m = [];

        function _n() {
            var o = 0,
                p = Math.max(1, l.length);
            for (m = new Array(p - 1); ++o < p;)
                m[o - 1] = (0, g.quantileSorted)(_k, o / p);
            return _n;
        }

        function _n(o) {
            return null == o || isNaN(o = +o) ? j : l[(0, f.default)(m, o)];
        }
        return _p.invertExtent = function(n) {
            var o = l.indexOf(n);
            return o < 0 ? [
                NaN,
                NaN
            ] : [
                o > 0 ? m[o - 1] : _k[0],
                o < m.length ? m[o] : _k[_k.length - 1]
            ];
        }, _p.domain = function(n) {
            if (!arguments.length)
                return _k.slice();
            _k = [];
            for (let o of n)
                null == o || isNaN(o = +o) || _k.push(o);
            return _k.sort(e.default), _o();
        }, _p.range = function(n) {
            return arguments.length ? (l = Array.from(n), _o()) : l.slice();
        }, _p.unknown = function(n) {
            return arguments.length ? (j = n, _p) : j;
        }, _p.quantiles = function() {
            return m.slice();
        }, _p.copy = function() {
            return _i().domain(_k).range(l).unknown(j);
        }, h.initRange.apply(_p, arguments);
    }
}), b.register('JqfHX', function(c, d) {
    _k(c.exports, 'default', function() {
        return _i;
    }), _k(c.exports, 'quantileSorted', function() {
        return _o;
    });
    var e = b('zHymc'),
        f = b('iLJko'),
        g = b('oHxnp'),
        h = b('x8WzN');

    function _i(j, _k, l) {
        if (b = (j = Float64Array.from((0, h.numbers)(j, l))).length) {
            if ((_k = +_k) <= 0 || b < 2)
                return (0, f.default)(j);
            if (_k >= 1)
                return (0, e.default)(j);
            var m, n = (m - 1) * _k,
                _o = Math.floor(n),
                _p = (0, e.default)((0, g.default)(j, _o).subarray(0, _o + 1));
            return _p + ((0, f.default)(j.subarray(_o + 1)) - _p) * (n - _o);
        }
    }

    function i(j, k, l = h.default) {
        if (b = j.length) {
            if ((k = +k) <= 0 || b < 2)
                return +l(j[0], 0, j);
            if (k >= 1)
                return +l(j[b - 1], b - 1, j);
            var m, n = (m - 1) * k,
                o = Math.floor(n),
                p = +l(j[o], o, j);
            return p + (+l(j[o + 1], o + 1, j) - p) * (n - o);
        }
    }
}), b.register('zHymc', function(c, d) {
    function e(f, g) {
        let h;
        if (void 0 === g)
            for (const i of f)
                null != i && (h < i || void 0 === h && i >= i) && (h = i);
        else {
            let j = -1;
            for (let k of f)
                null != (k = i(k, ++j, f)) && (h < k || void 0 === h && k >= k) && (h = k);
        }
        return h;
    }
    _g(c.exports, 'default', function() {
        return b;
    });
}), b.register('iLJko', function(c, d) {
    function e(f, _g) {
        let h;
        if (void 0 === _g)
            for (const i of f)
                null != i && (h > i || void 0 === h && i >= i) && (h = i);
        else {
            let j = -1;
            for (let k of f)
                null != (k = i(k, ++j, f)) && (h > k || void 0 === h && k >= k) && (h = k);
        }
        return h;
    }
    _h(c.exports, 'default', function() {
        return b;
    });
}), b.register('oHxnp', function(c, d) {
    _h(c.exports, 'default', function() {
        return _f;
    });
    var e = b('NAc/u');

    function _f(g, _h, i = 0, j = g.length - 1, k = e.default) {
        for (; j > i;) {
            if (j - i > 600) {
                const l = j - i + 1,
                    m = _h - i + 1,
                    n = Math.log(l),
                    o = 0.5 * Math.exp(2 * n / 3),
                    p = 0.5 * Math.sqrt(n * o * (l - o) / l) * (m - l / 2 < 0 ? -1 : 1);
                _f(g, _h, Math.max(i, Math.floor(_h - m * o / l + p)), Math.min(j, Math.floor(_h + (l - m) * o / l + p)), k);
            }
            const l = g[_h];
            let m = i,
                n = j;
            for (_f(g, i, _h), k(g[j], l) > 0 && _f(g, i, j); m < n;) {
                for (_f(g, m, n), ++m, --n; k(g[m], l) < 0;)
                    ++m;
                for (; k(g[n], l) > 0;)
                    --n;
            }
            0 === k(g[i], l) ? _f(g, i, n) : (++n, _f(g, n, j)), n <= _h && (i = n + 1), _h <= n && (j = n - 1);
        }
        return g;
    }

    function _f(g, h, i) {
        const j = g[h];
        g[h] = g[i], g[i] = j;
    }
}), b.register('kgXHu', function(c, d) {
    _j(c.exports, 'default', function() {
        return _h;
    });
    var e = b('kjsJd'),
        f = b('Szkbu'),
        g = b('2vm5d');

    function _h() {
        var i, _j = 0,
            k = 1,
            l = 1,
            m = [0.5],
            n = [
                0,
                1
            ];

        function o(p) {
            return null != p && p <= p ? n[(0, e.default)(m, p, 0, l)] : i;
        }

        function _o() {
            var p = -1;
            for (m = new Array(l); ++p < l;)
                m[p] = ((p + 1) * k - (p - l) * _j) / (l + 1);
            return _k;
        }
        return _k.domain = function(o) {
            return arguments.length ? ([p, q] = o, p = +p, q = +q, _l()) : [
                p,
                q
            ];
        }, _k.range = function(o) {
            return arguments.length ? (l = (n = Array.from(o)).length - 1, _l()) : n.slice();
        }, _k.invertExtent = function(o) {
            var p = n.indexOf(o);
            return p < 0 ? [
                NaN,
                NaN
            ] : p < 1 ? [
                _j,
                m[0]
            ] : p >= l ? [
                m[l - 1],
                k
            ] : [
                m[p - 1],
                m[p]
            ];
        }, _k.unknown = function(o) {
            return arguments.length ? (i = o, _k) : _k;
        }, _k.thresholds = function() {
            return m.slice();
        }, _k.copy = function() {
            return _h().domain([
                _j,
                k
            ]).range(n).unknown(i);
        }, g.initRange.apply((0, f.linearish)(_k), arguments);
    }
}), b.register('kJTSm', function(c, d) {
    _i(c.exports, 'default', function() {
        return _g;
    });
    var e = b('kjsJd'),
        f = b('2vm5d');

    function _g() {
        var h, _i = [0.5],
            j = [
                0,
                1
            ],
            k = 1;

        function l(m) {
            return null != m && m <= m ? j[(0, e.default)(_i, m, 0, k)] : h;
        }
        return _h.domain = function(l) {
            return arguments.length ? (_i = Array.from(l), k = Math.min(_i.length, j.length - 1), _h) : _i.slice();
        }, _h.range = function(l) {
            return arguments.length ? (j = Array.from(l), k = Math.min(_i.length, j.length - 1), _h) : j.slice();
        }, _h.invertExtent = function(l) {
            var m = j.indexOf(l);
            return [
                _i[m - 1],
                _i[m]
            ];
        }, _h.unknown = function(l) {
            return arguments.length ? (h = l, _h) : h;
        }, _h.copy = function() {
            return _g().domain(_i).range(j).unknown(h);
        }, f.initRange.apply(_h, arguments);
    }
}), b.register('hPb0Y', function(c, d) {
    _s(c.exports, 'calendar', function() {
        return _q;
    }), _s(c.exports, 'default', function() {
        return _F;
    });
    var e = b('AltMg'),
        f = b('ZGcU8'),
        g = b('W6kgR'),
        _h = b('Uuvuj'),
        i = b('4nyW0'),
        j = b('9dMcr'),
        _k = b('TS46L'),
        _l = b('FHjB8'),
        m = b('KeWe/'),
        n = b('cIy15'),
        o = b('2vm5d'),
        _p = b('hqsRn');

    function q(r) {
        return new Date(r);
    }

    function q(r) {
        return r instanceof Date ? +r : +new Date(+r);
    }

    function _q(r, _s, t, u, v, w, x, y, z, A) {
        var B = (0, n.default)(),
            C = B.invert,
            D = B.domain,
            E = A('.%L'),
            _F = A(':%S'),
            G = A('%I:%M'),
            H = A('%I %p'),
            I = A('%a %d'),
            J = A('%b %d'),
            K = A('%B'),
            L = A('%Y');

        function M(N) {
            return (z(N) < N ? E : y(N) < N ? _F : x(N) < N ? G : w(N) < N ? H : u(N) < N ? v(N) < N ? I : J : t(N) < N ? K : L)(N);
        }
        return B.invert = function(M) {
            return new Date(C(M));
        }, B.domain = function(M) {
            return arguments.length ? D(Array.from(M, _r)) : D().map(_q);
        }, B.ticks = function(M) {
            var N = D();
            return r(N[0], N[N.length - 1], null == M ? 10 : M);
        }, B.tickFormat = function(M, N) {
            return null == N ? _o : A(N);
        }, B.nice = function(M) {
            var N = D();
            return M && 'function' == typeof M.range || (M = _s(N[0], N[N.length - 1], null == M ? 10 : M)), M ? D((0, _p.default)(N, M)) : B;
        }, B.copy = function() {
            return (0, n.copy)(B, _q(r, _s, t, u, v, w, x, y, z, A));
        }, B;
    }

    function q() {
        return o.initRange.apply(_s(j.timeTicks, j.timeTickInterval, _l.default, _h.default, _k.sunday, e.default, f.default, g.default, i.default, m.timeFormat).domain([
            new Date(2000, 0, 1),
            new Date(2000, 0, 2)
        ]), arguments);
    }
}), b.register('AltMg', function(c, d) {
    _i(c.exports, 'default', function() {
        return _h;
    });
    var e = b('DgPMy'),
        f = b('Z1F7s'),
        g = (0, e.default)(c => c.setHours(0, 0, 0, 0), (c, _i) => c.setDate(c.getDate() + _i), (c, _i) => (_i - c - (_i.getTimezoneOffset() - c.getTimezoneOffset()) * f.durationMinute) / f.durationDay, c => c.getDate() - 1),
        _h = g;
    g.range;
}), b.register('DgPMy', function(c, d) {
    _i(c.exports, 'default', function() {
        return _g;
    });
    var e = new Date(),
        f = new Date();

    function _g(h, _i, j, k) {
        function l(m) {
            return h(m = 0 === arguments.length ? new Date() : new Date(+m)), m;
        }
        return _i.floor = function(l) {
            return h(l = new Date(+l)), l;
        }, _i.ceil = function(l) {
            return h(l = new Date(l - 1)), _i(l, 1), h(l), l;
        }, _i.round = function(l) {
            var m = _i(l),
                n = _i.ceil(l);
            return l - m < n - l ? m : n;
        }, _i.offset = function(l, m) {
            return _i(l = new Date(+l), null == m ? 1 : Math.floor(m)), l;
        }, _i.range = function(l, m, n) {
            var o, p = [];
            if (l = _i.ceil(l), n = null == n ? 1 : Math.floor(n), !(l < m && n > 0))
                return p;
            do {
                p.push(o = new Date(+l)), _i(l, n), h(l);
            } while (o < l && l < m);
            return p;
        }, _i.filter = function(l) {
            return _g(function(m) {
                if (m >= m)
                    for (; h(m), !l(m);)
                        m.setTime(m - 1);
            }, function(m, n) {
                if (m >= m)
                    if (n < 0)
                        for (; ++n <= 0;)
                            for (; _i(m, -1), !l(m););
                    else
                        for (; --n >= 0;)
                            for (; _i(m, 1), !l(m););
            });
        }, j && (_i.count = function(l, m) {
            return e.setTime(+l), f.setTime(+m), h(e), h(f), Math.floor(j(e, f));
        }, _i.every = function(l) {
            return l = Math.floor(l), isFinite(l) && l > 0 ? l > 1 ? _i.filter(k ? function(m) {
                return k(m) % l == 0;
            } : function(m) {
                return _i.count(0, m) % l == 0;
            }) : _i : null;
        }), _i;
    }
}), b.register('Z1F7s', function(c, d) {
    _i(c.exports, 'durationSecond', function() {
        return b;
    }), _i(c.exports, 'durationMinute', function() {
        return _f;
    }), _i(c.exports, 'durationHour', function() {
        return _g;
    }), _i(c.exports, 'durationDay', function() {
        return _h;
    }), _i(c.exports, 'durationWeek', function() {
        return _i;
    }), _i(c.exports, 'durationMonth', function() {
        return _j;
    }), _i(c.exports, 'durationYear', function() {
        return _k;
    });
    const e = 1000,
        _f = 60 * e,
        _g = 60 * _f,
        _h = 24 * _g,
        _i = 7 * _h,
        _j = 30 * _h,
        _k = 365 * _h;
}), b.register('ZGcU8', function(c, d) {
    _i(c.exports, 'default', function() {
        return _h;
    });
    var e = b('DgPMy'),
        f = b('Z1F7s'),
        g = (0, e.default)(function(h) {
            h.setTime(h - h.getMilliseconds() - h.getSeconds() * f.durationSecond - h.getMinutes() * f.durationMinute);
        }, function(h, _i) {
            h.setTime(+h + _i * f.durationHour);
        }, function(h, i) {
            return (i - h) / f.durationHour;
        }, function(h) {
            return h.getHours();
        }),
        _h = g;
    g.range;
}), b.register('W6kgR', function(c, d) {
    _i(c.exports, 'default', function() {
        return _h;
    });
    var e = b('DgPMy'),
        f = b('Z1F7s'),
        g = (0, e.default)(function(h) {
            h.setTime(h - h.getMilliseconds() - h.getSeconds() * f.durationSecond);
        }, function(h, _i) {
            h.setTime(+h + _i * f.durationMinute);
        }, function(h, i) {
            return (i - h) / f.durationMinute;
        }, function(h) {
            return h.getMinutes();
        }),
        _h = g;
    g.range;
}), b.register('Uuvuj', function(c, d) {
    _g(c.exports, 'default', function() {
        return _f;
    });
    var e = (0, b('DgPMy').default)(function(f) {
            f.setDate(1), f.setHours(0, 0, 0, 0);
        }, function(f, _g) {
            f.setMonth(f.getMonth() + _g);
        }, function(f, g) {
            return g.getMonth() - f.getMonth() + 12 * (g.getFullYear() - f.getFullYear());
        }, function(f) {
            return f.getMonth();
        }),
        _f = e;
    e.range;
}), b.register('4nyW0', function(c, d) {
    _i(c.exports, 'default', function() {
        return _h;
    });
    var e = b('DgPMy'),
        f = b('Z1F7s'),
        g = (0, e.default)(function(h) {
            h.setTime(h - h.getMilliseconds());
        }, function(h, _i) {
            h.setTime(+h + _i * f.durationSecond);
        }, function(h, i) {
            return (i - h) / f.durationSecond;
        }, function(h) {
            return h.getUTCSeconds();
        }),
        _h = g;
    g.range;
}), b.register('9dMcr', function(c, d) {
    _x(c.exports, 'utcTicks', function() {
        return _v;
    }), _x(c.exports, 'utcTickInterval', function() {
        return _w;
    }), _x(c.exports, 'timeTicks', function() {
        return _x;
    }), _x(c.exports, 'timeTickInterval', function() {
        return _y;
    });
    var e = b('m9bCx'),
        f = b('ko3CL'),
        g = b('Z1F7s'),
        h = b('cAaLx'),
        i = b('4nyW0'),
        j = b('W6kgR'),
        k = b('ZGcU8'),
        l = b('AltMg'),
        m = b('TS46L'),
        n = b('Uuvuj'),
        o = b('FHjB8'),
        p = b('XngMp'),
        _q = b('T7rcy'),
        _r = b('ZF+5l'),
        _s = b('si96d'),
        t = b('WYwR5'),
        u = b('Do6sA');

    function v(w, _x, y, z, A, B) {
        const C = [
            [
                i.default,
                1,
                g.durationSecond
            ],
            [
                i.default,
                5,
                5 * g.durationSecond
            ],
            [
                i.default,
                15,
                15 * g.durationSecond
            ],
            [
                i.default,
                30,
                30 * g.durationSecond
            ],
            [
                B,
                1,
                g.durationMinute
            ],
            [
                B,
                5,
                5 * g.durationMinute
            ],
            [
                B,
                15,
                15 * g.durationMinute
            ],
            [
                B,
                30,
                30 * g.durationMinute
            ],
            [
                A,
                1,
                g.durationHour
            ],
            [
                A,
                3,
                3 * g.durationHour
            ],
            [
                A,
                6,
                6 * g.durationHour
            ],
            [
                A,
                12,
                12 * g.durationHour
            ],
            [
                z,
                1,
                g.durationDay
            ],
            [
                z,
                2,
                2 * g.durationDay
            ],
            [
                y,
                1,
                g.durationWeek
            ],
            [
                _x,
                1,
                g.durationMonth
            ],
            [
                _x,
                3,
                3 * g.durationMonth
            ],
            [
                w,
                1,
                g.durationYear
            ]
        ];

        function D(E, F, G) {
            const H = Math.abs(F - E) / G,
                I = (0, e.default)(([, , J]) => J).right(C, H);
            if (I === C.length)
                return J.every((0, f.tickStep)(E / g.durationYear, F / g.durationYear, G));
            if (0 === I)
                return h.default.every(Math.max((0, f.tickStep)(E, F, G), 1));
            const [K, L] = C[H / C[I - 1][2] < C[I][2] / H ? I - 1 : I];
            return K.every(L);
        }
        return [
            function(D, E, F) {
                const G = E < D;
                G && ([H, I] = [
                    I,
                    H
                ]);
                const J = F && 'function' == typeof F.range ? F : m(H, I, F),
                    K = J ? J.range(H, +I + 1) : [];
                return G ? K.reverse() : K;
            },
            m
        ];
    }
    const [_v, _w] = _o(u.default, t.default, _s.utcSunday, _r.default, _q.default, p.default), [_x, _y] = _o(o.default, n.default, m.sunday, l.default, k.default, j.default);
}), b.register('cAaLx', function(c, d) {
    _h(c.exports, 'default', function() {
        return _g;
    });
    var e = b('DgPMy'),
        f = (0, e.default)(function() {}, function(g, _h) {
            g.setTime(+g + _h);
        }, function(g, h) {
            return h - g;
        });
    f.every = function(g) {
        return g = Math.floor(g), isFinite(g) && g > 0 ? g > 1 ? (0, e.default)(function(h) {
            h.setTime(Math.floor(h / g) * g);
        }, function(h, i) {
            h.setTime(+h + i * g);
        }, function(h, i) {
            return (i - h) / g;
        }) : f : null;
    };
    var _g = f;
    f.range;
}), b.register('TS46L', function(c, d) {
    _i(c.exports, 'sunday', function() {
        return _g;
    }), _i(c.exports, 'monday', function() {
        return _h;
    }), _i(c.exports, 'thursday', function() {
        return _k;
    });
    var e = b('DgPMy'),
        f = b('Z1F7s');

    function g(h) {
        return (0, e.default)(function(_i) {
            _i.setDate(_i.getDate() - (_i.getDay() + 7 - h) % 7), _i.setHours(0, 0, 0, 0);
        }, function(i, j) {
            i.setDate(i.getDate() + 7 * j);
        }, function(i, j) {
            return (j - i - (j.getTimezoneOffset() - i.getTimezoneOffset()) * f.durationMinute) / f.durationWeek;
        });
    }
    var _g = _g(0),
        _h = _g(1),
        i = _g(2),
        j = _g(3),
        _k = _g(4),
        l = _g(5),
        m = _g(6);
    _g.range, _h.range, i.range, j.range, _k.range, l.range, m.range;
}), b.register('FHjB8', function(c, d) {
    _h(c.exports, 'default', function() {
        return _g;
    });
    var e = b('DgPMy'),
        f = (0, e.default)(function(g) {
            g.setMonth(0, 1), g.setHours(0, 0, 0, 0);
        }, function(g, _h) {
            g.setFullYear(g.getFullYear() + _h);
        }, function(g, h) {
            return h.getFullYear() - g.getFullYear();
        }, function(g) {
            return g.getFullYear();
        });
    f.every = function(g) {
        return isFinite(g = Math.floor(g)) && g > 0 ? (0, e.default)(function(h) {
            h.setFullYear(Math.floor(h.getFullYear() / g) * g), h.setMonth(0, 1), h.setHours(0, 0, 0, 0);
        }, function(h, i) {
            h.setFullYear(h.getFullYear() + i * g);
        }) : null;
    };
    var _g = f;
    f.range;
}), b.register('XngMp', function(c, d) {
    _i(c.exports, 'default', function() {
        return _h;
    });
    var e = b('DgPMy'),
        f = b('Z1F7s'),
        g = (0, e.default)(function(h) {
            h.setUTCSeconds(0, 0);
        }, function(h, _i) {
            h.setTime(+h + _i * f.durationMinute);
        }, function(h, i) {
            return (i - h) / f.durationMinute;
        }, function(h) {
            return h.getUTCMinutes();
        }),
        _h = g;
    g.range;
}), b.register('T7rcy', function(c, d) {
    _i(c.exports, 'default', function() {
        return _h;
    });
    var e = b('DgPMy'),
        f = b('Z1F7s'),
        g = (0, e.default)(function(h) {
            h.setUTCMinutes(0, 0, 0);
        }, function(h, _i) {
            h.setTime(+h + _i * f.durationHour);
        }, function(h, i) {
            return (i - h) / f.durationHour;
        }, function(h) {
            return h.getUTCHours();
        }),
        _h = g;
    g.range;
}), b.register('ZF+5l', function(c, d) {
    _i(c.exports, 'default', function() {
        return _h;
    });
    var e = b('DgPMy'),
        f = b('Z1F7s'),
        g = (0, e.default)(function(h) {
            h.setUTCHours(0, 0, 0, 0);
        }, function(h, _i) {
            h.setUTCDate(h.getUTCDate() + _i);
        }, function(h, i) {
            return (i - h) / f.durationDay;
        }, function(h) {
            return h.getUTCDate() - 1;
        }),
        _h = g;
    g.range;
}), b.register('si96d', function(c, d) {
    _i(c.exports, 'utcSunday', function() {
        return _g;
    }), _i(c.exports, 'utcMonday', function() {
        return _h;
    }), _i(c.exports, 'utcThursday', function() {
        return _k;
    });
    var e = b('DgPMy'),
        f = b('Z1F7s');

    function g(h) {
        return (0, e.default)(function(_i) {
            _i.setUTCDate(_i.getUTCDate() - (_i.getUTCDay() + 7 - h) % 7), _i.setUTCHours(0, 0, 0, 0);
        }, function(i, j) {
            i.setUTCDate(i.getUTCDate() + 7 * j);
        }, function(i, j) {
            return (j - i) / f.durationWeek;
        });
    }
    var _g = _g(0),
        _h = _g(1),
        i = _g(2),
        j = _g(3),
        _k = _g(4),
        l = _g(5),
        m = _g(6);
    _g.range, _h.range, i.range, j.range, _k.range, l.range, m.range;
}), b.register('WYwR5', function(c, d) {
    _g(c.exports, 'default', function() {
        return _f;
    });
    var e = (0, b('DgPMy').default)(function(f) {
            f.setUTCDate(1), f.setUTCHours(0, 0, 0, 0);
        }, function(f, _g) {
            f.setUTCMonth(f.getUTCMonth() + _g);
        }, function(f, g) {
            return g.getUTCMonth() - f.getUTCMonth() + 12 * (g.getUTCFullYear() - f.getUTCFullYear());
        }, function(f) {
            return f.getUTCMonth();
        }),
        _f = e;
    e.range;
}), b.register('Do6sA', function(c, d) {
    _h(c.exports, 'default', function() {
        return _g;
    });
    var e = b('DgPMy'),
        f = (0, e.default)(function(g) {
            g.setUTCMonth(0, 1), g.setUTCHours(0, 0, 0, 0);
        }, function(g, _h) {
            g.setUTCFullYear(g.getUTCFullYear() + _h);
        }, function(g, h) {
            return h.getUTCFullYear() - g.getUTCFullYear();
        }, function(g) {
            return g.getUTCFullYear();
        });
    f.every = function(g) {
        return isFinite(g = Math.floor(g)) && g > 0 ? (0, e.default)(function(h) {
            h.setUTCFullYear(Math.floor(h.getUTCFullYear() / g) * g), h.setUTCMonth(0, 1), h.setUTCHours(0, 0, 0, 0);
        }, function(h, i) {
            h.setUTCFullYear(h.getUTCFullYear() + i * g);
        }) : null;
    };
    var _g = f;
    f.range;
}), b.register('KeWe/', function(c, d) {
    _m(c.exports, 'timeFormat', function() {
        return _f;
    }), _m(c.exports, 'utcFormat', function() {
        return _g;
    });
    var e, _f, _g, h, i = b('rD/kY');
    h = {
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
    }, e = (0, i.default)(h), _f = e.format, e.parse, _g = e.utcFormat, e.utcParse;
}), b.register('rD/kY', function(c, d) {
    _m(c.exports, 'default', function() {
        return _k;
    });
    var e = b('AltMg'),
        f = b('TS46L'),
        g = b('FHjB8'),
        h = b('ZF+5l'),
        i = b('si96d'),
        j = b('Do6sA');

    function k(l) {
        if (0 <= l.y && l.y < 100) {
            var _m = new Date(-1, l.m, l.d, l.H, l.M, l.S, l.L);
            return _m.setFullYear(l.y), _m;
        }
        return new Date(l.y, l.m, l.d, l.H, l.M, l.S, l.L);
    }

    function k(l) {
        if (0 <= l.y && l.y < 100) {
            var m = new Date(Date.UTC(-1, l.m, l.d, l.H, l.M, l.S, l.L));
            return m.setUTCFullYear(l.y), m;
        }
        return new Date(Date.UTC(l.y, l.m, l.d, l.H, l.M, l.S, l.L));
    }

    function k(l, m, n) {
        return {
            y: l,
            m: m,
            d: n,
            H: 0,
            M: 0,
            S: 0,
            L: 0
        };
    }

    function _k(l) {
        var m = l.dateTime,
            n = l.date,
            o = l.time,
            p = l.periods,
            q = l.days,
            r = l.shortDays,
            s = l.months,
            t = l.shortMonths,
            u = _o(p),
            v = _o(p),
            w = _o(q),
            x = _o(q),
            y = _o(r),
            z = _o(r),
            A = _o(s),
            B = _o(s),
            C = _o(t),
            D = _o(t),
            E = {
                a: function(F) {
                    return r[F.getDay()];
                },
                A: function(F) {
                    return q[F.getDay()];
                },
                b: function(F) {
                    return t[F.getMonth()];
                },
                B: function(F) {
                    return s[F.getMonth()];
                },
                c: null,
                d: _o,
                e: _o,
                f: _o,
                g: _o,
                G: _o,
                H: _o,
                I: _o,
                j: _o,
                L: _o,
                m: _o,
                M: _o,
                p: function(F) {
                    return p[+(F.getHours() >= 12)];
                },
                q: function(F) {
                    return 1 + ~~(F.getMonth() / 3);
                },
                Q: _o,
                s: _o,
                S: _o,
                u: _o,
                U: _o,
                V: _o,
                w: _o,
                W: _o,
                x: null,
                X: null,
                y: _o,
                Y: _o,
                Z: _o,
                '%': _o
            },
            F = {
                a: function(G) {
                    return r[G.getUTCDay()];
                },
                A: function(G) {
                    return q[G.getUTCDay()];
                },
                b: function(G) {
                    return t[G.getUTCMonth()];
                },
                B: function(G) {
                    return s[G.getUTCMonth()];
                },
                c: null,
                d: _o,
                e: _o,
                f: _o,
                g: _o,
                G: _o,
                H: _o,
                I: _o,
                j: _o,
                L: _o,
                m: _o,
                M: _o,
                p: function(G) {
                    return p[+(G.getUTCHours() >= 12)];
                },
                q: function(G) {
                    return 1 + ~~(G.getUTCMonth() / 3);
                },
                Q: _o,
                s: _o,
                S: _o,
                u: _o,
                U: _o,
                V: _o,
                w: _o,
                W: _o,
                x: null,
                X: null,
                y: _o,
                Y: _o,
                Z: _o,
                '%': _o
            },
            G = {
                a: function(H, I, J) {
                    var K = y.exec(I.slice(J));
                    return K ? (H.w = z.get(K[0].toLowerCase()), J + K[0].length) : -1;
                },
                A: function(H, I, J) {
                    var K = w.exec(I.slice(J));
                    return K ? (H.w = x.get(K[0].toLowerCase()), J + K[0].length) : -1;
                },
                b: function(H, I, J) {
                    var K = C.exec(I.slice(J));
                    return K ? (H.m = D.get(K[0].toLowerCase()), J + K[0].length) : -1;
                },
                B: function(H, I, J) {
                    var K = A.exec(I.slice(J));
                    return K ? (H.m = B.get(K[0].toLowerCase()), J + K[0].length) : -1;
                },
                c: function(H, I, J) {
                    return _H(H, m, I, J);
                },
                d: _o,
                e: _o,
                f: _o,
                g: _o,
                G: _o,
                H: _o,
                I: _o,
                j: _o,
                L: _o,
                m: _o,
                M: _o,
                p: function(H, I, J) {
                    var K = u.exec(I.slice(J));
                    return K ? (H.p = v.get(K[0].toLowerCase()), J + K[0].length) : -1;
                },
                q: _o,
                Q: _o,
                s: _o,
                S: _o,
                u: _o,
                U: _o,
                V: _o,
                w: _o,
                W: _o,
                x: function(H, I, J) {
                    return _H(H, n, I, J);
                },
                X: function(H, I, J) {
                    return _H(H, o, I, J);
                },
                y: _o,
                Y: _o,
                Z: _o,
                '%': _o
            };

        function H(I, J) {
            return function(K) {
                var L, M, N, O = [],
                    P = -1,
                    Q = 0,
                    R = I.length;
                for (K instanceof Date || (K = new Date(+K)); ++P < R;)
                    37 === I.charCodeAt(P) && (O.push(I.slice(Q, P)), null != (M = _k[L = I.charAt(++P)]) ? L = I.charAt(++P) : M = 'e' === L ? ' ' : '0', (N = J[L]) && (L = N(K, M)), O.push(L), Q = P + 1);
                return O.push(I.slice(Q, P)), O.join('');
            };
        }

        function H(I, J) {
            return function(K) {
                var L, M, N = _m(1900, void 0, 1);
                if (_H(N, I, K += '', 0) != K.length)
                    return null;
                if ('Q' in N)
                    return new Date(N.Q);
                if ('s' in N)
                    return new Date(1000 * N.s + ('L' in N ? N.L : 0));
                if (J && !('Z' in N) && (N.Z = 0), 'p' in N && (N.H = N.H % 12 + 12 * N.p), void 0 === N.m && (N.m = 'q' in N ? N.q : 0), 'V' in N) {
                    if (N.V < 1 || N.V > 53)
                        return null;
                    'w' in N || (N.w = 1), 'Z' in N ? (M = (L = _l(_m(N.y, 0, 1))).getUTCDay(), L = M > 4 || 0 === M ? i.utcMonday.ceil(L) : (0, i.utcMonday)(L), L = h.default.offset(L, 7 * (N.V - 1)), N.y = L.getUTCFullYear(), N.m = L.getUTCMonth(), N.d = L.getUTCDate() + (N.w + 6) % 7) : (M = (L = _k(_m(N.y, 0, 1))).getDay(), L = M > 4 || 0 === M ? f.monday.ceil(L) : (0, f.monday)(L), L = e.default.offset(L, 7 * (N.V - 1)), N.y = L.getFullYear(), N.m = L.getMonth(), N.d = L.getDate() + (N.w + 6) % 7);
                } else
                    ('W' in N || 'U' in N) && ('w' in N || (N.w = 'u' in N ? N.u % 7 : 'W' in N ? 1 : 0), M = 'Z' in N ? _l(_m(N.y, 0, 1)).getUTCDay() : _k(_m(N.y, 0, 1)).getDay(), N.m = 0, N.d = 'W' in N ? (N.w + 6) % 7 + 7 * N.W - (M + 5) % 7 : N.w + 7 * N.U - (M + 6) % 7);
                return 'Z' in N ? (N.H += N.Z / 100 | 0, N.M += N.Z % 100, _l(N)) : _k(N);
            };
        }

        function _H(I, J, K, L) {
            for (var M, N, O = 0, P = J.length, Q = K.length; O < P;) {
                if (L >= Q)
                    return -1;
                if (37 === (M = J.charCodeAt(O++))) {
                    if (M = J.charAt(O++), !(N = G[M in _k ? J.charAt(O++) : M]) || (L = N(I, K, L)) < 0)
                        return -1;
                } else if (M != K.charCodeAt(L++))
                    return -1;
            }
            return L;
        }
        return E.x = zt(n, E), E.X = zt(o, E), E.c = zt(m, E), F.x = zt(n, F), F.X = zt(o, F), F.c = zt(m, F), {
            format: function(H) {
                var I = zt(H += '', E);
                return I.toString = function() {
                    return H;
                }, I;
            },
            parse: function(H) {
                var I = Ut(H += '', !1);
                return I.toString = function() {
                    return H;
                }, I;
            },
            utcFormat: function(H) {
                var I = zt(H += '', F);
                return I.toString = function() {
                    return H;
                }, I;
            },
            utcParse: function(H) {
                var I = Ut(H += '', !0);
                return I.toString = function() {
                    return H;
                }, I;
            }
        };
    }
    var _k = {
            '-': '',
            _: ' ',
            0: '0'
        },
        l = /^\s*\d+/,
        m = /^%/,
        n = /[\\^$*+?|[\]().{}]/g;

    function o(p, q, r) {
        var s = p < 0 ? '-' : '',
            t = (s ? -p : p) + '',
            u = t.length;
        return s + (u < r ? new Array(r - u + 1).join(q) + t : t);
    }

    function o(p) {
        return p.replace(n, '\\$&');
    }

    function _o(p) {
        return new RegExp('^(?:' + p.map(_o).join('|') + ')', 'i');
    }

    function _o(p) {
        return new Map(p.map((p, _q) => [
            p.toLowerCase(),
            _q
        ]));
    }

    function _o(p, _q, r) {
        var s = l.exec(_q.slice(r, r + 1));
        return s ? (p.w = +s[0], r + s[0].length) : -1;
    }

    function _o(p, q, r) {
        var s = l.exec(q.slice(r, r + 1));
        return s ? (p.u = +s[0], r + s[0].length) : -1;
    }

    function _o(p, q, r) {
        var s = l.exec(q.slice(r, r + 2));
        return s ? (p.U = +s[0], r + s[0].length) : -1;
    }

    function _o(p, q, r) {
        var s = l.exec(q.slice(r, r + 2));
        return s ? (p.V = +s[0], r + s[0].length) : -1;
    }

    function _o(p, q, r) {
        var s = l.exec(q.slice(r, r + 2));
        return s ? (p.W = +s[0], r + s[0].length) : -1;
    }

    function _o(p, q, r) {
        var s = l.exec(q.slice(r, r + 4));
        return s ? (p.y = +s[0], r + s[0].length) : -1;
    }

    function _o(p, q, r) {
        var s = l.exec(q.slice(r, r + 2));
        return s ? (p.y = +s[0] + (+s[0] > 68 ? 1900 : 2000), r + s[0].length) : -1;
    }

    function _o(p, q, r) {
        var s = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(q.slice(r, r + 6));
        return s ? (p.Z = s[1] ? 0 : -(s[2] + (s[3] || '00')), r + s[0].length) : -1;
    }

    function _o(p, q, r) {
        var s = l.exec(q.slice(r, r + 1));
        return s ? (p.q = 3 * s[0] - 3, r + s[0].length) : -1;
    }

    function _o(p, q, r) {
        var s = l.exec(q.slice(r, r + 2));
        return s ? (p.m = s[0] - 1, r + s[0].length) : -1;
    }

    function _o(p, q, r) {
        var s = l.exec(q.slice(r, r + 2));
        return s ? (p.d = +s[0], r + s[0].length) : -1;
    }

    function _o(p, q, r) {
        var s = l.exec(q.slice(r, r + 3));
        return s ? (p.m = 0, p.d = +s[0], r + s[0].length) : -1;
    }

    function _o(p, q, r) {
        var s = l.exec(q.slice(r, r + 2));
        return s ? (p.H = +s[0], r + s[0].length) : -1;
    }

    function _o(p, q, r) {
        var s = l.exec(q.slice(r, r + 2));
        return s ? (p.M = +s[0], r + s[0].length) : -1;
    }

    function _o(p, q, r) {
        var s = l.exec(q.slice(r, r + 2));
        return s ? (p.S = +s[0], r + s[0].length) : -1;
    }

    function _o(p, q, r) {
        var s = l.exec(q.slice(r, r + 3));
        return s ? (p.L = +s[0], r + s[0].length) : -1;
    }

    function _o(p, q, r) {
        var s = l.exec(q.slice(r, r + 6));
        return s ? (p.L = Math.floor(s[0] / 1000), r + s[0].length) : -1;
    }

    function _o(p, q, r) {
        var s = m.exec(q.slice(r, r + 1));
        return s ? r + s[0].length : -1;
    }

    function _o(p, q, r) {
        var s = l.exec(q.slice(r));
        return s ? (p.Q = +s[0], r + s[0].length) : -1;
    }

    function _o(p, q, r) {
        var s = l.exec(q.slice(r));
        return s ? (p.s = +s[0], r + s[0].length) : -1;
    }

    function _o(p, q) {
        return _m(p.getDate(), q, 2);
    }

    function _o(p, q) {
        return _m(p.getHours(), q, 2);
    }

    function _o(p, q) {
        return _m(p.getHours() % 12 || 12, q, 2);
    }

    function _o(p, q) {
        return _m(1 + e.default.count((0, g.default)(p), p), q, 3);
    }

    function _o(p, q) {
        return _m(p.getMilliseconds(), q, 3);
    }

    function _o(p, q) {
        return _K(p, q) + '000';
    }

    function _o(p, q) {
        return _m(p.getMonth() + 1, q, 2);
    }

    function _o(p, q) {
        return _m(p.getMinutes(), q, 2);
    }

    function _o(p, q) {
        return _m(p.getSeconds(), q, 2);
    }

    function _o(p) {
        var q = p.getDay();
        return 0 === q ? 7 : q;
    }

    function _o(p, q) {
        return _m(f.sunday.count((0, g.default)(p) - 1, p), q, 2);
    }

    function o(p) {
        var q = p.getDay();
        return q >= 4 || 0 === q ? (0, f.thursday)(p) : f.thursday.ceil(p);
    }

    function _o(p, q) {
        return p = _K(p), _m(f.thursday.count((0, g.default)(p), p) + (4 === (0, g.default)(p).getDay()), q, 2);
    }

    function _o(p) {
        return p.getDay();
    }

    function _o(p, q) {
        return _m(f.monday.count((0, g.default)(p) - 1, p), q, 2);
    }

    function _o(p, q) {
        return _m(p.getFullYear() % 100, q, 2);
    }

    function _o(p, q) {
        return _m((p = _K(p)).getFullYear() % 100, q, 2);
    }

    function _o(p, q) {
        return _m(p.getFullYear() % 10000, q, 4);
    }

    function _o(p, q) {
        var r = p.getDay();
        return _m((p = r >= 4 || 0 === r ? (0, f.thursday)(p) : f.thursday.ceil(p)).getFullYear() % 10000, q, 4);
    }

    function _o(p) {
        var q = p.getTimezoneOffset();
        return (q > 0 ? '-' : (q *= -1, '+')) + _m(q / 60 | 0, '0', 2) + _m(q % 60, '0', 2);
    }

    function _o(p, q) {
        return _m(p.getUTCDate(), q, 2);
    }

    function _o(p, q) {
        return _m(p.getUTCHours(), q, 2);
    }

    function _o(p, q) {
        return _m(p.getUTCHours() % 12 || 12, q, 2);
    }

    function _o(p, q) {
        return _m(1 + h.default.count((0, j.default)(p), p), q, 3);
    }

    function _o(p, q) {
        return _m(p.getUTCMilliseconds(), q, 3);
    }

    function _o(p, q) {
        return pt(p, q) + '000';
    }

    function _o(p, q) {
        return _m(p.getUTCMonth() + 1, q, 2);
    }

    function _o(p, q) {
        return _m(p.getUTCMinutes(), q, 2);
    }

    function _o(p, q) {
        return _m(p.getUTCSeconds(), q, 2);
    }

    function _o(p) {
        var q = p.getUTCDay();
        return 0 === q ? 7 : q;
    }

    function _o(p, q) {
        return _m(i.utcSunday.count((0, j.default)(p) - 1, p), q, 2);
    }

    function o(p) {
        var q = p.getUTCDay();
        return q >= 4 || 0 === q ? (0, i.utcThursday)(p) : i.utcThursday.ceil(p);
    }

    function _o(p, q) {
        return p = bt(p), _m(i.utcThursday.count((0, j.default)(p), p) + (4 === (0, j.default)(p).getUTCDay()), q, 2);
    }

    function _o(p) {
        return p.getUTCDay();
    }

    function _o(p, q) {
        return _m(i.utcMonday.count((0, j.default)(p) - 1, p), q, 2);
    }

    function _o(p, q) {
        return _m(p.getUTCFullYear() % 100, q, 2);
    }

    function _o(p, q) {
        return _m((p = bt(p)).getUTCFullYear() % 100, q, 2);
    }

    function _o(p, q) {
        return _m(p.getUTCFullYear() % 10000, q, 4);
    }

    function _o(p, q) {
        var r = p.getUTCDay();
        return _m((p = r >= 4 || 0 === r ? (0, i.utcThursday)(p) : i.utcThursday.ceil(p)).getUTCFullYear() % 10000, q, 4);
    }

    function _o() {
        return '+0000';
    }

    function _o() {
        return '%';
    }

    function _o(p) {
        return +p;
    }

    function _o(p) {
        return Math.floor(+p / 1000);
    }
}), b.register('NWRhg', function(c, d) {
    _o(c.exports, 'default', function() {
        return _p;
    });
    var e = b('ZF+5l'),
        f = b('T7rcy'),
        g = b('XngMp'),
        h = b('WYwR5'),
        i = b('4nyW0'),
        j = b('9dMcr'),
        _k = b('si96d'),
        _l = b('Do6sA'),
        _m = b('KeWe/'),
        n = b('hPb0Y'),
        o = b('2vm5d');

    function _p() {
        return o.initRange.apply((0, n.calendar)(j.utcTicks, j.utcTickInterval, _l.default, h.default, _k.utcSunday, e.default, f.default, g.default, i.default, _m.utcFormat).domain([
            Date.UTC(2000, 0, 1),
            Date.UTC(2000, 0, 2)
        ]), arguments);
    }
}), b.register('P7ByW', function(c, d) {
    _o(c.exports, 'copy', function() {
        return _w;
    }), _o(c.exports, 'default', function() {
        return _m;
    }), _o(c.exports, 'sequentialLog', function() {
        return _m;
    }), _o(c.exports, 'sequentialSymlog', function() {
        return _m;
    }), _o(c.exports, 'sequentialPow', function() {
        return _m;
    }), _o(c.exports, 'sequentialSqrt', function() {
        return _m;
    });
    var e = b('xIcNU'),
        f = b('wUsEf'),
        g = b('cIy15'),
        h = b('2vm5d'),
        i = b('Szkbu'),
        j = b('5sflr'),
        k = b('QYCBm'),
        l = b('jG6VZ');

    function m() {
        var n, _o, p, q, r, s = 0,
            t = 1,
            u = g.identity,
            v = !1;

        function w(x) {
            return null == x || isNaN(x = +x) ? r : u(0 === p ? 0.5 : (x = (q(x) - n) * p, v ? Math.max(0, Math.min(1, x)) : x));
        }

        function _w(x) {
            return function(y) {
                var z, A;
                return arguments.length ? ([B, C] = y, u = x(B, C), m) : [
                    u(0),
                    u(1)
                ];
            };
        }
        return m.domain = function(w) {
                return arguments.length ? ([x, y] = w, n = q(x = +x), _o = q(y = +y), p = n === _o ? 0 : 1 / (_o - n), m) : [
                    x,
                    y
                ];
            }, m.clamp = function(w) {
                return arguments.length ? (v = !!w, m) : v;
            }, m.interpolator = function(w) {
                return arguments.length ? (u = w, m) : u;
            }, m.range = _m(e.default), m.rangeRound = _m(f.default), m.unknown = function(w) {
                return arguments.length ? (r = w, m) : r;
            },
            function(w) {
                return q = w, n = w(s), _o = w(t), p = n === _o ? 0 : 1 / (_o - n), m;
            };
    }

    function _m(n, o) {
        return o.domain(n.domain()).interpolator(n.interpolator()).clamp(n.clamp()).unknown(n.unknown());
    }

    function _m() {
        var n = (0, i.linearish)(_m()(g.identity));
        return n.copy = function() {
            return _n(n, _m());
        }, h.initInterpolator.apply(n, arguments);
    }

    function _m() {
        var n = (0, j.loggish)(_m()).domain([
            1,
            10
        ]);
        return n.copy = function() {
            return _n(n, _m()).base(n.base());
        }, h.initInterpolator.apply(n, arguments);
    }

    function _m() {
        var n = (0, k.symlogish)(_m());
        return n.copy = function() {
            return _n(n, _m()).constant(n.constant());
        }, h.initInterpolator.apply(n, arguments);
    }

    function _m() {
        var n = (0, l.powish)(_m());
        return n.copy = function() {
            return _n(n, _m()).exponent(n.exponent());
        }, h.initInterpolator.apply(n, arguments);
    }

    function _m() {
        return _C.apply(null, arguments).exponent(0.5);
    }
}), b.register('II7aj', function(c, d) {
    _l(c.exports, 'default', function() {
        return _j;
    });
    var e = b('NAc/u'),
        f = b('kjsJd'),
        g = b('JqfHX'),
        h = b('cIy15'),
        i = b('2vm5d');

    function _j() {
        var k = [],
            _l = h.identity;

        function m(n) {
            if (null != n && !isNaN(n = +n))
                return _l(((0, f.default)(k, n, 1) - 1) / (k.length - 1));
        }
        return d.domain = function(m) {
            if (!arguments.length)
                return k.slice();
            k = [];
            for (let n of m)
                null == n || isNaN(n = +n) || k.push(n);
            return k.sort(e.default), n;
        }, d.interpolator = function(m) {
            return arguments.length ? (_l = m, d) : _l;
        }, d.range = function() {
            return k.map((d, b) => _l(b / (k.length - 1)));
        }, d.quantiles = function(m) {
            return Array.from({
                length: m + 1
            }, (d, b) => (0, g.default)(k, b / m));
        }, d.copy = function() {
            return _j(_l).domain(k);
        }, i.initInterpolator.apply(d, arguments);
    }
}), b.register('dlfaH', function(c, d) {
    _q(c.exports, 'default', function() {
        return _A;
    }), _q(c.exports, 'divergingLog', function() {
        return _B;
    }), _q(c.exports, 'divergingSymlog', function() {
        return _C;
    }), _q(c.exports, 'divergingPow', function() {
        return _C;
    }), _q(c.exports, 'divergingSqrt', function() {
        return _o;
    });
    var e = b('xIcNU'),
        f = b('wUsEf'),
        g = b('TuURY'),
        h = b('cIy15'),
        i = b('2vm5d'),
        j = b('Szkbu'),
        k = b('5sflr'),
        l = b('P7ByW'),
        _m = b('QYCBm'),
        _n = b('jG6VZ');

    function o() {
        var p, _q, r, s, t, u, v, w = 0,
            x = 0.5,
            y = 1,
            z = 1,
            _A = h.identity,
            _B = !1;

        function _C(D) {
            return isNaN(D = +D) ? v : (D = 0.5 + ((D = +u(D)) - _q) * (z * D < z * _q ? s : t), _A(_B ? Math.max(0, Math.min(1, D)) : D));
        }

        function _C(D) {
            return function(E) {
                var F, G, H;
                return arguments.length ? ([I, J, K] = E, _A = (0, g.default)(D, [
                    I,
                    J,
                    K
                ]), _o) : [
                    _A(0),
                    _A(0.5),
                    _A(1)
                ];
            };
        }
        return _o.domain = function(C) {
                return arguments.length ? ([D, E, F] = C, p = u(D = +D), _q = u(E = +E), r = u(F = +F), s = p === _q ? 0 : 0.5 / (_q - p), t = _q === r ? 0 : 0.5 / (r - _q), z = _q < p ? -1 : 1, _o) : [
                    D,
                    E,
                    F
                ];
            }, _o.clamp = function(C) {
                return arguments.length ? (_B = !!C, _o) : _B;
            }, _o.interpolator = function(C) {
                return arguments.length ? (_A = C, _o) : _A;
            }, _o.range = _o(e.default), _o.rangeRound = _o(f.default), _o.unknown = function(C) {
                return arguments.length ? (v = C, _o) : v;
            },
            function(C) {
                return u = C, p = C(w), _q = C(x), r = C(y), s = p === _q ? 0 : 0.5 / (_q - p), t = _q === r ? 0 : 0.5 / (r - _q), z = _q < p ? -1 : 1, _o;
            };
    }

    function o() {
        var p = (0, j.linearish)(_t()(h.identity));
        return p.copy = function() {
            return (0, l.copy)(p, o());
        }, i.initInterpolator.apply(p, arguments);
    }

    function o() {
        var p = (0, k.loggish)(_t()).domain([
            0.1,
            1,
            10
        ]);
        return p.copy = function() {
            return (0, l.copy)(p, o()).base(p.base());
        }, i.initInterpolator.apply(p, arguments);
    }

    function _o() {
        var p = (0, _m.symlogish)(_t());
        return p.copy = function() {
            return (0, l.copy)(p, _o()).constant(p.constant());
        }, i.initInterpolator.apply(p, arguments);
    }

    function _o() {
        var p = (0, _n.powish)(_t());
        return p.copy = function() {
            return (0, l.copy)(p, _o()).exponent(p.exponent());
        }, i.initInterpolator.apply(p, arguments);
    }

    function _o() {
        return _j.apply(null, arguments).exponent(0.5);
    }
}), b.register('TuURY', function(c, d) {
    _h(c.exports, 'default', function() {
        return _f;
    });
    var e = b('xIcNU');

    function _f(g, _h) {
        void 0 === _h && (_h = g, g = e.default);
        for (var i = 0, j = _h.length - 1, k = _h[0], l = new Array(j < 0 ? 0 : j); i < j;)
            l[i] = g(k, k = _h[++i]);
        return function(m) {
            var n = Math.max(0, Math.min(j - 1, Math.floor(m *= j)));
            return l[n](m - n);
        };
    }
}), b.register('S+bbB', function(c, d) {
    _k(c.exports, 'default', function() {
        return _i;
    });
    var e = b('lyjZG'),
        f = b('B1fhv'),
        g = b('wbfug'),
        h = b('NEzXZ');

    function i(j, _k) {
        return j[_k];
    }

    function i(j) {
        const k = [];
        return k.key = j, k;
    }

    function _i() {
        var j = (0, f.default)([]),
            k = h.default,
            l = g.default,
            m = _r;

        function n(o) {
            var p, q, _r = Array.from(j.apply(this, arguments), _o),
                s = _r.length,
                t = -1;
            for (const u of o)
                for (p = 0, ++t; p < s; ++p)
                    (_r[p][t] = [
                        0,
                        +m(u, _r[p].key, t, o)
                    ]).data = u;
            for (p = 0, q = (0, e.default)(k(_r)); p < s; ++p)
                _r[q[p]].index = p;
            return l(_r, q), _r;
        }
        return _i.keys = function(n) {
            return arguments.length ? (j = 'function' == typeof n ? n : (0, f.default)(Array.from(n)), _i) : j;
        }, _i.value = function(n) {
            return arguments.length ? (m = 'function' == typeof n ? n : (0, f.default)(+n), _i) : m;
        }, _i.order = function(n) {
            return arguments.length ? (k = null == n ? h.default : 'function' == typeof n ? n : (0, f.default)(Array.from(n)), _i) : k;
        }, _i.offset = function(n) {
            return arguments.length ? (l = null == n ? g.default : n, _i) : l;
        }, _i;
    }
}), b.register('lyjZG', function(c, d) {
    _g(c.exports, 'default', function() {
        return b;
    });
    Array.prototype.slice;

    function e(f) {
        return 'object' == typeof f && 'length' in f ? f : Array.from(f);
    }
}), b.register('B1fhv', function(c, d) {
    function e(f) {
        return function() {
            return f;
        };
    }
    _g(c.exports, 'default', function() {
        return b;
    });
}), b.register('wbfug', function(c, d) {
    function e(f, _g) {
        if ((_j = f.length) > 1)
            for (var h, i, _j, k = 1, l = f[_g[0]], m = l.length; k < _j; ++k)
                for (i = l, l = f[_g[k]], h = 0; h < m; ++h)
                    l[h][1] += l[h][0] = isNaN(i[h][1]) ? i[h][0] : i[h][1];
    }
    _g(c.exports, 'default', function() {
        return b;
    });
}), b.register('NEzXZ', function(c, d) {
    function e(f) {
        for (var _g = f.length, h = new Array(_g); --_g >= 0;)
            h[_g] = _g;
        return h;
    }
    _h(c.exports, 'default', function() {
        return b;
    });
}), b.register('06FU7', function(c, d) {
    _h(c.exports, 'default', function() {
        return _f;
    });
    var e = b('wbfug');

    function _f(g, _h) {
        if ((b = g.length) > 0) {
            for (var i, j, k, l = 0, m = g[0].length; l < m; ++l) {
                for (k = i = 0; i < j; ++i)
                    k += g[i][l][1] || 0;
                if (k)
                    for (i = 0; i < j; ++i)
                        g[i][l][1] /= k;
            }
            (0, e.default)(g, _h);
        }
    }
}), b.register('kCUYQ', function(c, d) {
    _h(c.exports, 'default', function() {
        return _f;
    });
    var e = b('wbfug');

    function _f(g, _h) {
        if ((d = g.length) > 0) {
            for (var i, j = 0, k = g[_h[0]], l = k.length; j < l; ++j) {
                for (var m = 0, n = 0; m < i; ++m)
                    n += g[m][j][1] || 0;
                k[j][1] += k[j][0] = -n / 2;
            }
            (0, e.default)(g, _h);
        }
    }
}), b.register('TVwoo', function(c, d) {
    _h(c.exports, 'default', function() {
        return _f;
    });
    var e = b('wbfug');

    function _f(g, _h) {
        if ((_f = g.length) > 0 && (b = (d = g[_h[0]]).length) > 0) {
            for (var i, j, k, l = 0, m = 1; m < j; ++m) {
                for (var n = 0, _o = 0, p = 0; n < k; ++n) {
                    for (var q = g[_h[n]], r = q[m][1] || 0, s = (r - (q[m - 1][1] || 0)) / 2, _t = 0; _t < n; ++_t) {
                        var u = g[_h[_t]];
                        s += (u[m][1] || 0) - (u[m - 1][1] || 0);
                    }
                    _o += r, p += s * r;
                }
                i[m - 1][1] += i[m - 1][0] = l, _o && (l -= p / _o);
            }
            i[m - 1][1] += i[m - 1][0] = l, (0, e.default)(g, _h);
        }
    }
}), b.register('QJrdd', function(c, d) {
    _l(c.exports, 'Legend', function() {
        return _j;
    });
    var e = b('4R9wH'),
        f = b('Krz8v'),
        g = b('LEQ5w'),
        h = b('VMhpy'),
        i = b('F2lA2');

    function j(k) {
        return j = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(l) {
            return typeof l;
        } : function(l) {
            return l && 'function' == typeof Symbol && l.constructor === Symbol && l !== Symbol.prototype ? 'symbol' : typeof l;
        }, j(k);
    }

    function j(k, _l) {
        var m = Object.keys(k);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(k);
            _l && (n = n.filter(function(o) {
                return Object.getOwnPropertyDescriptor(k, o).enumerable;
            })), m.push.apply(m, n);
        }
        return m;
    }

    function j(k) {
        for (var l = 1; l < arguments.length; l++) {
            var m = null != arguments[l] ? arguments[l] : {};
            l % 2 ? _w(Object(m), !0).forEach(function(n) {
                _j(k, n, m[n]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(k, Object.getOwnPropertyDescriptors(m)) : _w(Object(m)).forEach(function(n) {
                Object.defineProperty(k, n, Object.getOwnPropertyDescriptor(m, n));
            });
        }
        return k;
    }

    function _j(k, l, m) {
        return l in k ? Object.defineProperty(k, l, {
            value: m,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : k[l] = m, k;
    }

    function j(k, l) {
        if (!(k instanceof l))
            throw new TypeError('Cannot call a class as a function');
    }

    function j(k, l) {
        for (var m = 0; m < l.length; m++) {
            var n = l[m];
            n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(k, n.key, n);
        }
    }

    function j(k, l) {
        return j = Object.setPrototypeOf || function(m, n) {
            return m.__proto__ = n, m;
        }, j(k, l);
    }

    function j(k) {
        var l = function() {
            if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ('function' == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
            } catch (k) {
                return !1;
            }
        }();
        return function() {
            var m, n = _j(k);
            if (l) {
                var o = _j(this).constructor;
                m = Reflect.construct(n, arguments, o);
            } else
                m = n.apply(this, arguments);
            return _j(this, m);
        };
    }

    function _j(k, l) {
        return !l || 'object' !== _p(l) && 'function' != typeof l ? function(m) {
            if (void 0 === m)
                throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return m;
        }(k) : l;
    }

    function _j(k) {
        return _j = Object.setPrototypeOf ? Object.getPrototypeOf : function(l) {
            return l.__proto__ || Object.getPrototypeOf(l);
        }, _j(k);
    }

    function j(k, l) {
        if (null == k)
            return {};
        var m, n, o = function(p, q) {
            if (null == p)
                return {};
            var r, s, t = {},
                u = Object.keys(p);
            for (s = 0; s < u.length; s++)
                r = u[s], q.indexOf(r) >= 0 || (t[r] = p[r]);
            return t;
        }(k, l);
        if (Object.getOwnPropertySymbols) {
            var p = Object.getOwnPropertySymbols(k);
            for (n = 0; n < p.length; n++)
                m = p[n], l.indexOf(m) >= 0 || Object.prototype.propertyIsEnumerable.call(k, m) && (o[m] = k[m]);
        }
        return o;
    }

    function j(k) {
        return k.value;
    }

    function j(k, l) {
        return !0 === k ? _l(f)(l, _k) : _l(e)(k) ? _l(f)(l, k) : l;
    }
    var _j = function(k) {
        ! function(_l, m) {
            if ('function' != typeof m && null !== m)
                throw new TypeError('Super expression must either be null or a function');
            _l.prototype = Object.create(m && m.prototype, {
                constructor: {
                    value: _l,
                    writable: !0,
                    configurable: !0
                }
            }), m && _t(_l, m);
        }(_p, k);
        var l, m, n, o = _u(_p);

        function _p() {
            var q;
            _s(this, _p);
            for (var r = arguments.length, s = new Array(r), t = 0; t < r; t++)
                s[t] = arguments[t];
            return (q = o.call.apply(o, [this].concat(s))).wrapperNode = void 0, q.state = {
                boxWidth: -1,
                boxHeight: -1
            }, q;
        }
        return l = _v, n = [{
            key: 'getWithHeight',
            value: function(p, q) {
                var r = p.props.layout;
                return 'vertical' === r && (0, i.isNumber)(p.props.height) ? {
                    height: p.props.height
                } : 'horizontal' === r ? {
                    width: p.props.width || q
                } : null;
            }
        }], (m = [{
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
                    var p = this.state,
                        q = p.boxWidth,
                        r = p.boxHeight;
                    return q >= 0 && r >= 0 ? {
                        width: q,
                        height: r
                    } : null;
                }
            },
            {
                key: 'getDefaultPosition',
                value: function(p) {
                    var q, r, s = this.props,
                        t = s.layout,
                        u = s.align,
                        v = s.verticalAlign,
                        w = s.margin,
                        x = s.chartWidth,
                        y = s.chartHeight;
                    return p && (void 0 !== p.left && null !== p.left || void 0 !== p.right && null !== p.right) || (q = 'center' === u && 'vertical' === t ? {
                        left: ((x || 0) - (this.getBBoxSnapshot() || {
                            width: 0
                        }).width) / 2
                    } : 'right' === u ? {
                        right: w && w.right || 0
                    } : {
                        left: w && w.left || 0
                    }), p && (void 0 !== p.top && null !== p.top || void 0 !== p.bottom && null !== p.bottom) || (r = 'middle' === v ? {
                        top: ((y || 0) - (this.getBBoxSnapshot() || {
                            height: 0
                        }).height) / 2
                    } : 'bottom' === v ? {
                        bottom: w && w.bottom || 0
                    } : {
                        top: w && w.top || 0
                    }), _q(_q({}, q), r);
                }
            },
            {
                key: 'updateBBox',
                value: function() {
                    var p = this.state,
                        q = p.boxWidth,
                        r = p.boxHeight,
                        s = this.props.onBBoxUpdate;
                    if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
                        var t = this.wrapperNode.getBoundingClientRect();
                        (Math.abs(t.width - q) > 1 || Math.abs(t.height - r) > 1) && this.setState({
                            boxWidth: t.width,
                            boxHeight: t.height
                        }, function() {
                            s && s(t);
                        });
                    } else
                        -
                        1 === q && -1 === r || this.setState({
                            boxWidth: -1,
                            boxHeight: -1
                        }, function() {
                            s && s(null);
                        });
                }
            },
            {
                key: 'render',
                value: function() {
                    var p = this,
                        q = this.props,
                        r = q.content,
                        s = q.width,
                        t = q.height,
                        u = q.wrapperStyle,
                        _v = q.payloadUniqBy,
                        _w = q.payload,
                        x = _q(_q({
                            position: 'absolute',
                            width: s || 'auto',
                            height: t || 'auto'
                        }, this.getDefaultPosition(u)), u);
                    return _y(g).createElement('div', {
                        className: 'recharts-legend-wrapper',
                        style: x,
                        ref: function(_y) {
                            p.wrapperNode = _y;
                        }
                    }, function(y, z) {
                        if (_c(g).isValidElement(y))
                            return _c(g).cloneElement(y, z);
                        if (_c(e)(y))
                            return _c(g).createElement(y, z);
                        z.ref;
                        var A = _j(z, ['ref']);
                        return _c(g).createElement(h.DefaultLegendContent, A);
                    }(r, _q(_q({}, this.props), {}, {
                        payload: _q(_v, _w)
                    })));
                }
            }
        ]) && _t(l.prototype, m), n && _t(l, n), _o;
    }(g.PureComponent);
    _j.displayName = 'Legend', _j.defaultProps = {
        iconSize: 14,
        layout: 'horizontal',
        align: 'center',
        verticalAlign: 'bottom'
    };
}), b.register('Krz8v', function(_c, d) {
    var e = b('Xi1WD'),
        f = b('L27uO');
    _c.exports = function(g, h) {
        return g && g.length ? f(g, e(h, 2)) : [];
    };
}), b.register('L27uO', function(c, d) {
    var e = b('IdgqB'),
        f = b('B35a+'),
        g = b('RAh8C'),
        h = b('n4ttj0'),
        i = b('2PGrH'),
        j = b('5jvg50');
    c.exports = function(k, l, m) {
        var n = -1,
            _o = f,
            p = k.length,
            _q = !0,
            r = [],
            _s = r;
        if (m)
            _q = !1, _o = g;
        else if (p >= 200) {
            var _t = l ? null : i(k);
            if (_t)
                return j(_t);
            _q = !1, _o = h, _s = new e();
        } else
            _s = l ? [] : r;
        t:
            for (; ++n < p;) {
                var _t = k[n],
                    _u = l ? l(_t) : _t;
                if (_t = m || 0 !== _t ? _t : 0, _q && _u == _u) {
                    for (var v = _s.length; v--;)
                        if (_s[v] === _u)
                            continue t;
                    l && _s.push(_u), r.push(_t);
                } else
                    _o(_s, _u, m) || (_s !== r && _s.push(_u), r.push(_t));
            }
        return r;
    };
}), b.register('B35a+', function(c, d) {
    var e = b('wN6oZ');
    c.exports = function(f, g) {
        return !!(null == f ? 0 : f.length) && e(f, g, 0) > -1;
    };
}), b.register('wN6oZ', function(c, d) {
    var e = b('Pq82j'),
        f = b('bLxTc0'),
        g = b('SqFsy');
    c.exports = function(h, i, j) {
        return i == i ? g(h, i, j) : e(h, f, j);
    };
}), b.register('Pq82j', function(c, d) {
    c.exports = function(e, f, g, h) {
        for (var i = e.length, j = g + (h ? 1 : -1); h ? j-- : ++j < i;)
            if (f(e[j], j, e))
                return j;
        return -1;
    };
}), b.register('bLxTc0', function(c, d) {
    c.exports = function(e) {
        return e != e;
    };
}), b.register('SqFsy', function(c, d) {
    c.exports = function(e, f, g) {
        for (var h = g - 1, i = e.length; ++h < i;)
            if (e[h] === f)
                return h;
        return -1;
    };
}), b.register('RAh8C', function(c, d) {
    c.exports = function(e, f, g) {
        for (var h = -1, i = null == e ? 0 : e.length; ++h < i;)
            if (g(f, e[h]))
                return !0;
        return !1;
    };
}), b.register('2PGrH', function(c, d) {
    var e = b('Mtx8k'),
        f = b('7ST1m0'),
        g = b('5jvg50'),
        h = e && 1 / g(new e([,
            -0
        ]))[1] == 1 / 0 ? function(i) {
            return new e(i);
        } : f;
    c.exports = h;
}), b.register('7ST1m0', function(c, d) {
    c.exports = function() {};
}), b.register('VMhpy', function(c, d) {
    _l(c.exports, 'DefaultLegendContent', function() {
        return _k;
    });
    var e = b('LEQ5w'),
        f = b('JrtKP'),
        g = b('2mu5N'),
        h = b('JARV+'),
        i = b('SLFbE');

    function j(k) {
        return j = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(l) {
            return typeof l;
        } : function(l) {
            return l && 'function' == typeof Symbol && l.constructor === Symbol && l !== Symbol.prototype ? 'symbol' : typeof l;
        }, j(k);
    }

    function j() {
        return j = Object.assign || function(k) {
            for (var _l = 1; _l < arguments.length; _l++) {
                var m = arguments[_l];
                for (var n in m)
                    Object.prototype.hasOwnProperty.call(m, n) && (k[n] = m[n]);
            }
            return k;
        }, j.apply(this, arguments);
    }

    function j(k, l) {
        var m = Object.keys(k);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(k);
            l && (n = n.filter(function(o) {
                return Object.getOwnPropertyDescriptor(k, o).enumerable;
            })), m.push.apply(m, n);
        }
        return m;
    }

    function j(k, l, m) {
        return l in k ? Object.defineProperty(k, l, {
            value: m,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : k[l] = m, k;
    }

    function j(k, l) {
        if (!(k instanceof l))
            throw new TypeError('Cannot call a class as a function');
    }

    function j(k, l) {
        for (var m = 0; m < l.length; m++) {
            var n = l[m];
            n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(k, n.key, n);
        }
    }

    function j(k, l) {
        return j = Object.setPrototypeOf || function(m, n) {
            return m.__proto__ = n, m;
        }, j(k, l);
    }

    function j(k) {
        var l = function() {
            if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ('function' == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
            } catch (k) {
                return !1;
            }
        }();
        return function() {
            var m, n = _j(k);
            if (l) {
                var o = _j(this).constructor;
                m = Reflect.construct(n, arguments, o);
            } else
                m = n.apply(this, arguments);
            return _j(this, m);
        };
    }

    function _j(k, l) {
        return !l || 'object' !== _p(l) && 'function' != typeof l ? function(m) {
            if (void 0 === m)
                throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return m;
        }(k) : l;
    }

    function _j(k) {
        return _j = Object.setPrototypeOf ? Object.getPrototypeOf : function(l) {
            return l.__proto__ || Object.getPrototypeOf(l);
        }, _j(k);
    }
    var _j = 32,
        _k = function(l) {
            ! function(m, n) {
                if ('function' != typeof n && null !== n)
                    throw new TypeError('Super expression must either be null or a function');
                m.prototype = Object.create(n && n.prototype, {
                    constructor: {
                        value: m,
                        writable: !0,
                        configurable: !0
                    }
                }), n && _z(m, n);
            }(_q, l);
            var m, n, o, _p = _D(_q);

            function _q() {
                return _x(this, _q), _p.apply(this, arguments);
            }
            return m = _E, n = [{
                    key: 'renderIcon',
                    value: function(q) {
                        var r = this.props.inactiveColor,
                            s = 16,
                            t = 5.333333333333333,
                            u = 10.666666666666666,
                            v = q.inactive ? r : q.color;
                        if ('plainline' === q.type)
                            return _x(e).createElement('line', {
                                strokeWidth: 4,
                                fill: 'none',
                                stroke: v,
                                strokeDasharray: q.payload.strokeDasharray,
                                x1: 0,
                                y1: s,
                                x2: _j,
                                y2: s,
                                className: 'recharts-legend-icon'
                            });
                        if ('line' === q.type)
                            return _x(e).createElement('path', {
                                strokeWidth: 4,
                                fill: 'none',
                                stroke: v,
                                d: 'M0,'.concat(s, 'h').concat(u, '\n            A').concat(t, ',').concat(t, ',0,1,1,').concat(2 * u, ',').concat(s, '\n            H').concat(_j, 'M').concat(2 * u, ',').concat(s, '\n            A').concat(t, ',').concat(t, ',0,1,1,').concat(u, ',').concat(s),
                                className: 'recharts-legend-icon'
                            });
                        if ('rect' === q.type)
                            return _x(e).createElement('path', {
                                stroke: 'none',
                                fill: v,
                                d: 'M0,'.concat(4, 'h').concat(_j, 'v').concat(24, 'h').concat(-32, 'z'),
                                className: 'recharts-legend-icon'
                            });
                        if (_x(e).isValidElement(q.legendIcon)) {
                            var w = function(_x) {
                                for (var y = 1; y < arguments.length; y++) {
                                    var z = null != arguments[y] ? arguments[y] : {};
                                    y % 2 ? _w(Object(z), !0).forEach(function(A) {
                                        _p(_x, A, z[A]);
                                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_x, Object.getOwnPropertyDescriptors(z)) : _w(Object(z)).forEach(function(A) {
                                        Object.defineProperty(_x, A, Object.getOwnPropertyDescriptor(z, A));
                                    });
                                }
                                return _x;
                            }({}, q);
                            return delete w.legendIcon, _i(e).cloneElement(q.legendIcon, w);
                        }
                        return _i(e).createElement(h.Symbols, {
                            fill: v,
                            cx: s,
                            cy: s,
                            size: _j,
                            sizeType: 'diameter',
                            type: q.type
                        });
                    }
                },
                {
                    key: 'renderItems',
                    value: function() {
                        var q = this,
                            r = this.props,
                            s = r.payload,
                            t = r.iconSize,
                            u = r.layout,
                            v = r.formatter,
                            _w = r.inactiveColor,
                            _x = {
                                x: 0,
                                y: 0,
                                width: _j,
                                height: _j
                            },
                            y = {
                                display: 'horizontal' === u ? 'inline-block' : 'block',
                                marginRight: 10
                            },
                            _z = {
                                display: 'inline-block',
                                verticalAlign: 'middle',
                                marginRight: 4
                            };
                        return s.map(function(A, B) {
                            var C, _D = A.formatter || v,
                                _E = _i(f)((_p(C = {
                                    'recharts-legend-item': !0
                                }, 'legend-item-'.concat(B), !0), _p(C, 'inactive', A.inactive), C));
                            if ('none' === A.type)
                                return null;
                            var F = A.inactive ? _w : A.color;
                            return _i(e).createElement('li', _n({
                                className: _E,
                                style: y,
                                key: 'legend-item-'.concat(B)
                            }, (0, i.adaptEventsOfChild)(q.props, A, B)), _i(e).createElement(g.Surface, {
                                width: t,
                                height: t,
                                viewBox: _x,
                                style: _z
                            }, q.renderIcon(A)), _i(e).createElement('span', {
                                className: 'recharts-legend-item-text',
                                style: {
                                    color: F
                                }
                            }, _D ? _D(A.value, A, B) : A.value));
                        });
                    }
                },
                {
                    key: 'render',
                    value: function() {
                        var q = this.props,
                            r = q.payload,
                            s = q.layout,
                            t = q.align;
                        if (!r || !r.length)
                            return null;
                        var u = {
                            padding: 0,
                            margin: 0,
                            textAlign: 'horizontal' === s ? t : 'left'
                        };
                        return _i(e).createElement('ul', {
                            className: 'recharts-default-legend',
                            style: u
                        }, this.renderItems());
                    }
                }
            ], n && _r(m.prototype, n), o && _r(m, o), _q;
        }(e.PureComponent);
    _k.displayName = 'Legend', _k.defaultProps = {
        iconSize: 14,
        layout: 'horizontal',
        align: 'center',
        verticalAlign: 'middle',
        inactiveColor: '#ccc'
    };
}), b.register('2mu5N', function(c, d) {
    _j(c.exports, 'Surface', function() {
        return _h;
    });
    var e = b('LEQ5w'),
        f = b('JrtKP'),
        g = b('SLFbE');

    function h() {
        return h = Object.assign || function(_i) {
            for (var _j = 1; _j < arguments.length; _j++) {
                var k = arguments[_j];
                for (var l in k)
                    Object.prototype.hasOwnProperty.call(k, l) && (_i[l] = k[l]);
            }
            return _i;
        }, h.apply(this, arguments);
    }

    function h(i, j) {
        if (null == i)
            return {};
        var k, l, m = function(n, o) {
            if (null == n)
                return {};
            var p, q, r = {},
                s = Object.keys(n);
            for (q = 0; q < s.length; q++)
                p = s[q], o.indexOf(p) >= 0 || (r[p] = n[p]);
            return r;
        }(i, j);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(i);
            for (l = 0; l < n.length; l++)
                k = n[l], j.indexOf(k) >= 0 || Object.prototype.propertyIsEnumerable.call(i, k) && (m[k] = i[k]);
        }
        return m;
    }

    function _h(i) {
        var j = i.children,
            k = i.width,
            l = i.height,
            m = i.viewBox,
            _n = i.className,
            o = i.style,
            _p = _i(i, [
                'children',
                'width',
                'height',
                'viewBox',
                'className',
                'style'
            ]),
            q = m || {
                width: k,
                height: l,
                x: 0,
                y: 0
            },
            _r = _r(f)('recharts-surface', _n);
        return _r(e).createElement('svg', _h({}, (0, g.filterProps)(_p, !0, !0), {
            className: _r,
            width: k,
            height: l,
            style: o,
            viewBox: ''.concat(q.x, ' ').concat(q.y, ' ').concat(q.width, ' ').concat(q.height),
            version: '1.1'
        }), _r(e).createElement('title', null, i.title), _r(e).createElement('desc', null, i.desc), j);
    }
}), b.register('JARV+', function(c, d) {
    _s(c.exports, 'Symbols', function() {
        return _s;
    });
    var e = b('MYM0h'),
        f = b('LEQ5w'),
        g = b('abI1e'),
        _h = b('QIELb'),
        _i = b('lwaA4'),
        j = b('aUKh2'),
        k = b('V7fh5'),
        l = b('JJ1NF'),
        m = b('ggX8J'),
        n = b('MJJbD'),
        o = b('JrtKP'),
        p = b('SLFbE');

    function q(_r) {
        return q = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(s) {
            return typeof s;
        } : function(s) {
            return s && 'function' == typeof Symbol && s.constructor === Symbol && s !== Symbol.prototype ? 'symbol' : typeof s;
        }, q(_r);
    }

    function _q() {
        return _q = Object.assign || function(r) {
            for (var _s = 1; _s < arguments.length; _s++) {
                var t = arguments[_s];
                for (var u in t)
                    Object.prototype.hasOwnProperty.call(t, u) && (r[u] = t[u]);
            }
            return r;
        }, _q.apply(this, arguments);
    }

    function q(r, s) {
        if (!(r instanceof s))
            throw new TypeError('Cannot call a class as a function');
    }

    function q(r, s) {
        for (var t = 0; t < s.length; t++) {
            var u = s[t];
            u.enumerable = u.enumerable || !1, u.configurable = !0, 'value' in u && (u.writable = !0), Object.defineProperty(r, u.key, u);
        }
    }

    function q(r, s) {
        return q = Object.setPrototypeOf || function(t, u) {
            return t.__proto__ = u, t;
        }, q(r, s);
    }

    function _q(r) {
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
            var t, u = _q(r);
            if (s) {
                var v = _q(this).constructor;
                t = Reflect.construct(u, arguments, v);
            } else
                t = u.apply(this, arguments);
            return _q(this, t);
        };
    }

    function _q(r, s) {
        return !s || 'object' !== _x(s) && 'function' != typeof s ? function(t) {
            if (void 0 === t)
                throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return t;
        }(r) : s;
    }

    function _q(r) {
        return _q = Object.setPrototypeOf ? Object.getPrototypeOf : function(s) {
            return s.__proto__ || Object.getPrototypeOf(s);
        }, _q(r);
    }
    var q = {
            symbolCircle: _h.default,
            symbolCross: _i.default,
            symbolDiamond: j.default,
            symbolSquare: k.default,
            symbolStar: l.default,
            symbolTriangle: m.default,
            symbolWye: n.default
        },
        r = Math.PI / 180,
        _s = function(t) {
            ! function(u, v) {
                if ('function' != typeof v && null !== v)
                    throw new TypeError('Super expression must either be null or a function');
                u.prototype = Object.create(v && v.prototype, {
                    constructor: {
                        value: u,
                        writable: !0,
                        configurable: !0
                    }
                }), v && _B(u, v);
            }(j, t);
            var u, v, w, x = _C(j);

            function y() {
                return _z(this, y), x.apply(this, arguments);
            }
            return u = j, (v = [{
                    key: 'getPath',
                    value: function() {
                        var y = this.props,
                            z = y.size,
                            A = y.sizeType,
                            B = y.type,
                            C = function(D) {
                                var E = 'symbol'.concat(_E(e)(D));
                                return q[E] || _h.default;
                            }(B),
                            D = (0, g.default)().type(C).size(function(_E, F, G) {
                                if ('area' === F)
                                    return _E;
                                switch (G) {
                                    case 'cross':
                                        return 5 * _E * _E / 9;
                                    case 'diamond':
                                        return 0.5 * _E * _E / Math.sqrt(3);
                                    case 'square':
                                        return _E * _E;
                                    case 'star':
                                        var H = 18 * r;
                                        return 1.25 * _E * _E * (Math.tan(H) - Math.tan(2 * H) * Math.pow(Math.tan(H), 2));
                                    case 'triangle':
                                        return Math.sqrt(3) * _E * _E / 4;
                                    case 'wye':
                                        return (21 - 10 * Math.sqrt(3)) * _E * _E / 8;
                                    default:
                                        return Math.PI * _E * _E / 4;
                                }
                            }(z, A, B));
                        return D();
                    }
                },
                {
                    key: 'render',
                    value: function() {
                        var y = this.props,
                            z = y.className,
                            A = y.cx,
                            B = y.cy,
                            C = y.size;
                        return A === +A && B === +B && C === +C ? _c(f).createElement('path', _y({}, (0, p.filterProps)(this.props, !0), {
                            className: _c(o)('recharts-symbols', z),
                            transform: 'translate('.concat(A, ', ').concat(B, ')'),
                            d: this.getPath()
                        })) : null;
                    }
                }
            ]) && _A(u.prototype, v), w && _A(u, w), j;
        }(f.PureComponent);
    _s.defaultProps = {
        type: 'circle',
        size: 64,
        sizeType: 'area'
    }, _s.registerSymbol = function(t, u) {
        q['symbol'.concat(_c(e)(t))] = u;
    };
}), b.register('abI1e', function(_c, d) {
    _p(_c.exports, 'default', function() {
        return _n;
    });
    var e = b('F+kS7'),
        f = b('QIELb'),
        g = b('lwaA4'),
        h = b('aUKh2'),
        i = b('JJ1NF'),
        j = b('V7fh5'),
        k = b('ggX8J'),
        l = b('MJJbD'),
        m = b('B1fhv');
    f.default, g.default, h.default, j.default, i.default, k.default, l.default;

    function _n(o, _p) {
        var q = null;

        function r() {
            var s;
            if (q || (q = s = (0, e.default)()), o.apply(this, arguments).draw(q, +_p.apply(this, arguments)), s)
                return q = null, s + '' || null;
        }
        return o = 'function' == typeof o ? o : (0, m.default)(o || f.default), _p = 'function' == typeof _p ? _p : (0, m.default)(void 0 === _p ? 64 : +_p), b.type = function(r) {
            return arguments.length ? (o = 'function' == typeof r ? r : (0, m.default)(r), b) : o;
        }, b.size = function(r) {
            return arguments.length ? (_p = 'function' == typeof r ? r : (0, m.default)(+r), b) : _p;
        }, b.context = function(r) {
            return arguments.length ? (q = null == r ? null : r, b) : q;
        }, b;
    }
}), b.register('F+kS7', function(c, d) {
    _j(c.exports, 'default', function() {
        return _p;
    });
    const e = Math.PI,
        f = 2 * e,
        g = 0.000001,
        h = f - g;

    function i() {
        this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = '';
    }

    function i() {
        return new _n();
    }
    _n.prototype = _o.prototype = {
        constructor: _n,
        moveTo: function(i, _j) {
            this._ += 'M' + (this._x0 = this._x1 = +i) + ',' + (this._y0 = this._y1 = +_j);
        },
        closePath: function() {
            null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._ += 'Z');
        },
        lineTo: function(i, j) {
            this._ += 'L' + (this._x1 = +i) + ',' + (this._y1 = +j);
        },
        quadraticCurveTo: function(i, j, k, l) {
            this._ += 'Q' + +i + ',' + +j + ',' + (this._x1 = +k) + ',' + (this._y1 = +l);
        },
        bezierCurveTo: function(i, j, k, l, m, n) {
            this._ += 'C' + +i + ',' + +j + ',' + +k + ',' + +l + ',' + (this._x1 = +m) + ',' + (this._y1 = +n);
        },
        arcTo: function(i, j, k, l, m) {
            i = +i, j = +j, k = +k, l = +l, m = +m;
            var _n = this._x1,
                _o = this._y1,
                _p = k - i,
                q = l - j,
                r = _n - i,
                s = _o - j,
                t = r * r + s * s;
            if (m < 0)
                throw new Error('negative radius: ' + m);
            if (null === this._x1)
                this._ += 'M' + (this._x1 = i) + ',' + (this._y1 = j);
            else if (t > g)
                if (Math.abs(s * _p - q * r) > g && m) {
                    var u = k - _n,
                        v = l - _o,
                        w = _p * _p + q * q,
                        _x = u * u + v * v,
                        _y = Math.sqrt(w),
                        _z = Math.sqrt(t),
                        _A = m * Math.tan((e - Math.acos((w + t - _x) / (2 * _y * _z))) / 2),
                        _B = _A / _z,
                        _C = _A / _y;
                    Math.abs(_B - 1) > g && (this._ += 'L' + (i + _B * r) + ',' + (j + _B * s)), this._ += 'A' + m + ',' + m + ',0,0,' + +(s * u > r * v) + ',' + (this._x1 = i + _C * _p) + ',' + (this._y1 = j + _C * q);
                } else
                    this._ += 'L' + (this._x1 = i) + ',' + (this._y1 = j);
            else;
        },
        arc: function(i, j, k, l, m, n) {
            i = +i, j = +j, n = !!n;
            var o = (k = +k) * Math.cos(l),
                p = k * Math.sin(l),
                q = i + o,
                r = j + p,
                s = 1 ^ n,
                t = n ? l - m : m - l;
            if (k < 0)
                throw new Error('negative radius: ' + k);
            null === this._x1 ? this._ += 'M' + q + ',' + r : (Math.abs(this._x1 - q) > g || Math.abs(this._y1 - r) > g) && (this._ += 'L' + q + ',' + r), k && (t < 0 && (t = t % f + f), t > h ? this._ += 'A' + k + ',' + k + ',0,1,' + s + ',' + (i - o) + ',' + (j - p) + 'A' + k + ',' + k + ',0,1,' + s + ',' + (this._x1 = q) + ',' + (this._y1 = r) : t > g && (this._ += 'A' + k + ',' + k + ',0,' + +(t >= e) + ',' + s + ',' + (this._x1 = i + k * Math.cos(m)) + ',' + (this._y1 = j + k * Math.sin(m))));
        },
        rect: function(i, j, k, l) {
            this._ += 'M' + (this._x0 = this._x1 = +i) + ',' + (this._y0 = this._y1 = +j) + 'h' + +k + 'v' + +l + 'h' + -k + 'Z';
        },
        toString: function() {
            return this._;
        }
    };
    var i = _i;
}), b.register('QIELb', function(c, d) {
    _h(c.exports, 'default', function() {
        return _f;
    });
    var e = b('ShewL'),
        _f = {
            draw: function(g, _h) {
                var i = Math.sqrt(_h / e.pi);
                g.moveTo(i, 0), g.arc(0, 0, i, 0, e.tau);
            }
        };
}), b.register('ShewL', function(c, d) {
    _g(c.exports, 'pi', function() {
        return b;
    }), _g(c.exports, 'tau', function() {
        return _f;
    });
    Math.abs, Math.atan2, Math.cos, Math.max, Math.min, Math.sin, Math.sqrt;
    var e = Math.PI,
        _f = 2 * e;
}), b.register('lwaA4', function(c, d) {
    _g(c.exports, 'default', function() {
        return b;
    });
    var e = {
        draw: function(f, _g) {
            var h = Math.sqrt(_g / 5) / 2;
            f.moveTo(-3 * h, -h), f.lineTo(-h, -h), f.lineTo(-h, -3 * h), f.lineTo(h, -3 * h), f.lineTo(h, -h), f.lineTo(3 * h, -h), f.lineTo(3 * h, h), f.lineTo(h, h), f.lineTo(h, 3 * h), f.lineTo(-h, 3 * h), f.lineTo(-h, h), f.lineTo(-3 * h, h), f.closePath();
        }
    };
}), b.register('aUKh2', function(c, d) {
    _i(c.exports, 'default', function() {
        return _g;
    });
    var e = Math.sqrt(1 / 3),
        f = 2 * e,
        _g = {
            draw: function(h, _i) {
                var j = Math.sqrt(_i / f),
                    k = j * e;
                h.moveTo(0, -j), h.lineTo(k, 0), h.lineTo(0, j), h.lineTo(-k, 0), h.closePath();
            }
        };
}), b.register('JJ1NF', function(c, d) {
    _k(c.exports, 'default', function() {
        return _i;
    });
    var e = b('ShewL'),
        f = Math.sin(e.pi / 10) / Math.sin(7 * e.pi / 10),
        g = Math.sin(e.tau / 10) * f,
        h = -Math.cos(e.tau / 10) * f,
        _i = {
            draw: function(j, _k) {
                var l = Math.sqrt(0.8908130915292852 * _k),
                    m = g * l,
                    n = h * l;
                j.moveTo(0, -l), j.lineTo(m, n);
                for (var o = 1; o < 5; ++o) {
                    var p = e.tau * o / 5,
                        q = Math.cos(p),
                        r = Math.sin(p);
                    j.lineTo(r * l, -q * l), j.lineTo(q * m - r * n, r * m + q * n);
                }
                j.closePath();
            }
        };
}), b.register('V7fh5', function(c, d) {
    _g(c.exports, 'default', function() {
        return b;
    });
    var e = {
        draw: function(f, _g) {
            var h = Math.sqrt(_g),
                i = -h / 2;
            f.rect(i, i, h, h);
        }
    };
}), b.register('ggX8J', function(c, d) {
    _h(c.exports, 'default', function() {
        return _f;
    });
    var e = Math.sqrt(3),
        _f = {
            draw: function(g, _h) {
                var i = -Math.sqrt(_h / (3 * e));
                g.moveTo(0, 2 * i), g.lineTo(-e * i, -i), g.lineTo(e * i, -i), g.closePath();
            }
        };
}), b.register('MJJbD', function(c, d) {
    _k(c.exports, 'default', function() {
        return _i;
    });
    var e = -0.5,
        f = Math.sqrt(3) / 2,
        g = 1 / Math.sqrt(12),
        h = 3 * (g / 2 + 1),
        _i = {
            draw: function(j, _k) {
                var l = Math.sqrt(_k / h),
                    m = l / 2,
                    n = l * g,
                    o = m,
                    p = l * g + l,
                    q = -o,
                    r = p;
                j.moveTo(m, n), j.lineTo(o, p), j.lineTo(q, r), j.lineTo(e * m - f * n, f * m + e * n), j.lineTo(e * o - f * p, f * o + e * p), j.lineTo(e * q - f * r, f * q + e * r), j.lineTo(e * m + f * n, e * n - f * m), j.lineTo(e * o + f * p, e * p - f * o), j.lineTo(e * q + f * r, e * r - f * q), j.closePath();
            }
        };
}), b.register('g/xOW', function(c, d) {
    _M(c.exports, 'BarChart', function() {
        return _j;
    });
    var e = b('O4+u6'),
        f = b('7f2Ay'),
        g = b('dDSF8'),
        h = b('Yd+Kp'),
        i = b('5Or8B'),
        _j = (0, e.generateCategoricalChart)({
            chartName: 'BarChart',
            GraphicalChild: f.Bar,
            defaultTooltipEventType: 'axis',
            validateTooltipEventTypes: [
                'axis',
                'item'
            ],
            axisComponents: [{
                    axisType: 'xAxis',
                    AxisComp: g.XAxis
                },
                {
                    axisType: 'yAxis',
                    AxisComp: h.YAxis
                }
            ],
            formatAxisMap: i.formatAxisMap
        });
}), b.register('O4+u6', function(c, d) {
    _M(c.exports, 'generateCategoricalChart', function() {
        return _V;
    });
    var e = b('rlHfj'),
        f = b('FAWGy'),
        g = b('4R9wH'),
        h = b('ARWqP'),
        i = b('02bR4'),
        j = b('X82hY'),
        k = b('8nyEX'),
        l = b('4Eoue'),
        m = b('A6m1T'),
        n = b('iieiP0'),
        o = b('LEQ5w'),
        p = b('JrtKP'),
        q = b('2mu5N'),
        r = b('MXVYT'),
        s = b('fpVk3'),
        t = b('QJrdd'),
        u = b('ueUAP'),
        v = b('+TBpG'),
        w = b('wTRCU'),
        x = b('Yu93y'),
        y = b('bR0hn'),
        z = b('7p4uL'),
        A = b('xPuL4'),
        B = b('bKGGN'),
        C = b('WWlCf'),
        D = b('F2lA2'),
        E = b('2xCsV'),
        F = b('/S7r1'),
        G = b('zXKbN'),
        H = b('8/M1n'),
        I = b('c460X'),
        J = b('SLFbE');

    function K(L) {
        return K = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(M) {
            return typeof M;
        } : function(M) {
            return M && 'function' == typeof Symbol && M.constructor === Symbol && M !== Symbol.prototype ? 'symbol' : typeof M;
        }, K(L);
    }

    function K(L, _M) {
        return function(N) {
            if (Array.isArray(N))
                return N;
        }(L) || function(N, O) {
            if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(N)))
                return;
            var P = [],
                Q = !0,
                R = !1,
                S = void 0;
            try {
                for (var T, U = N[Symbol.iterator](); !(Q = (T = U.next()).done) && (P.push(T.value), !O || P.length !== O); Q = !0);
            } catch (N) {
                R = !0, S = N;
            } finally {
                try {
                    Q || null == g.return || g.return();
                } finally {
                    if (R)
                        throw S;
                }
            }
            return P;
        }(L, _M) || _K(L, _M) || function() {
            throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }

    function K() {
        return K = Object.assign || function(L) {
            for (var M = 1; M < arguments.length; M++) {
                var N = arguments[M];
                for (var O in N)
                    Object.prototype.hasOwnProperty.call(N, O) && (L[O] = N[O]);
            }
            return L;
        }, K.apply(this, arguments);
    }

    function K(L, M) {
        if (null == L)
            return {};
        var N, O, P = function(Q, R) {
            if (null == Q)
                return {};
            var S, T, U = {},
                V = Object.keys(Q);
            for (T = 0; T < V.length; T++)
                S = V[T], R.indexOf(S) >= 0 || (U[S] = Q[S]);
            return U;
        }(L, M);
        if (Object.getOwnPropertySymbols) {
            var Q = Object.getOwnPropertySymbols(L);
            for (O = 0; O < Q.length; O++)
                N = Q[O], M.indexOf(N) >= 0 || Object.prototype.propertyIsEnumerable.call(L, N) && (P[N] = L[N]);
        }
        return P;
    }

    function K(L, M) {
        for (var N = 0; N < M.length; N++) {
            var O = M[N];
            O.enumerable = O.enumerable || !1, O.configurable = !0, 'value' in O && (O.writable = !0), Object.defineProperty(L, O.key, O);
        }
    }

    function K(L, M) {
        return K = Object.setPrototypeOf || function(N, O) {
            return N.__proto__ = O, N;
        }, K(L, M);
    }

    function K(L) {
        var M = function() {
            if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ('function' == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
            } catch (L) {
                return !1;
            }
        }();
        return function() {
            var N, O = _K(L);
            if (M) {
                var P = _K(this).constructor;
                N = Reflect.construct(O, arguments, P);
            } else
                N = O.apply(this, arguments);
            return _K(this, N);
        };
    }

    function _K(L, M) {
        return !M || 'object' !== _bb(M) && 'function' != typeof M ? _K(L) : M;
    }

    function _K(L) {
        if (void 0 === L)
            throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return L;
    }

    function _K(L) {
        return _K = Object.setPrototypeOf ? Object.getPrototypeOf : function(M) {
            return M.__proto__ || Object.getPrototypeOf(M);
        }, _K(L);
    }

    function K(L) {
        return function(M) {
            if (Array.isArray(M))
                return _K(M);
        }(L) || function(M) {
            if ('undefined' != typeof Symbol && Symbol.iterator in Object(M))
                return Array.from(M);
        }(L) || _K(L) || function() {
            throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }

    function _K(L, M) {
        if (L) {
            if ('string' == typeof L)
                return _K(L, M);
            var N = Object.prototype.toString.call(L).slice(8, -1);
            return 'Object' === N && L.constructor && (N = L.constructor.name), 'Map' === N || 'Set' === N ? Array.from(L) : 'Arguments' === N || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(N) ? _K(L, M) : void 0;
        }
    }

    function _K(L, M) {
        (null == M || M > L.length) && (M = L.length);
        for (var N = 0, O = new Array(M); N < M; N++)
            O[N] = L[N];
        return O;
    }

    function K(L, M) {
        var N = Object.keys(L);
        if (Object.getOwnPropertySymbols) {
            var O = Object.getOwnPropertySymbols(L);
            M && (O = O.filter(function(P) {
                return Object.getOwnPropertyDescriptor(L, P).enumerable;
            })), N.push.apply(N, O);
        }
        return N;
    }

    function K(L) {
        for (var M = 1; M < arguments.length; M++) {
            var N = null != arguments[M] ? arguments[M] : {};
            M % 2 ? _gb(Object(N), !0).forEach(function(O) {
                _K(L, O, N[O]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(L, Object.getOwnPropertyDescriptors(N)) : _gb(Object(N)).forEach(function(O) {
                Object.defineProperty(L, O, Object.getOwnPropertyDescriptor(N, O));
            });
        }
        return L;
    }

    function _K(L, M, N) {
        return M in L ? Object.defineProperty(L, M, {
            value: N,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : L[M] = N, L;
    }
    var _K = {
            xAxis: [
                'bottom',
                'top'
            ],
            yAxis: [
                'left',
                'right'
            ]
        },
        L = {
            x: 0,
            y: 0
        },
        M = Number.isFinite ? Number.isFinite : isFinite,
        N = 'function' == typeof requestAnimationFrame ? requestAnimationFrame : 'function' == typeof setImmediate ? setImmediate : setTimeout,
        O = 'function' == typeof cancelAnimationFrame ? cancelAnimationFrame : 'function' == typeof clearImmediate ? clearImmediate : clearTimeout,
        P = function(Q, R, S) {
            var T = R.graphicalItems,
                U = R.dataStartIndex,
                V = R.dataEndIndex,
                W = (T || []).reduce(function(X, Y) {
                    var Z = Y.props.data;
                    return Z && Z.length ? [].concat(_S(X), _S(Z)) : X;
                }, []);
            return W && W.length > 0 ? W : S && S.props && S.props.data && S.props.data.length > 0 ? S.props.data : Q && Q.length && (0, D.isNumber)(U) && (0, D.isNumber)(V) ? Q.slice(U, V + 1) : [];
        },
        Q = function(R, S, T, U) {
            var V = R.graphicalItems,
                W = R.tooltipAxis,
                X = P(S, R);
            return T < 0 || !V || !V.length || T >= X.length ? null : V.reduce(function(Y, Z) {
                if (Z.props.hide)
                    return Y;
                var $, ab = Z.props.data;
                if (W.dataKey && !W.allowDuplicatedCategory) {
                    var bb = void 0 === ab ? X : ab;
                    $ = (0, D.findEntryInArray)(bb, W.dataKey, U);
                } else
                    $ = ab && ab[T] || X[T];
                return $ ? [].concat(_S(Y), [(0, E.getTooltipItem)(Z, $)]) : Y;
            }, []);
        },
        R = function(S, T, U, V) {
            var W = V || {
                    x: S.chartX,
                    y: S.chartY
                },
                X = function(Y, Z) {
                    return 'horizontal' === Z ? Y.x : 'vertical' === Z ? Y.y : 'centric' === Z ? Y.angle : Y.radius;
                }(W, U),
                Y = S.orderedTooltipTicks,
                Z = S.tooltipAxis,
                $ = S.tooltipTicks,
                ab = (0, E.calculateActiveTickIndex)(X, Y, $, Z);
            if (ab >= 0 && $) {
                var bb = $[ab] && $[ab].value,
                    cb = Q(S, T, ab, bb),
                    db = function(eb, fb, gb, hb) {
                        var ib = fb.find(function(jb) {
                            return jb && jb.index === gb;
                        });
                        if (ib) {
                            if ('horizontal' === eb)
                                return {
                                    x: ib.coordinate,
                                    y: hb.y
                                };
                            if ('vertical' === eb)
                                return {
                                    x: hb.x,
                                    y: ib.coordinate
                                };
                            if ('centric' === eb) {
                                var jb = ib.coordinate,
                                    kb = hb.radius;
                                return _W(_W(_W({}, hb), (0, G.polarToCartesian)(hb.cx, hb.cy, kb, jb)), {}, {
                                    angle: jb,
                                    radius: kb
                                });
                            }
                            var jb = ib.coordinate,
                                kb = hb.angle;
                            return _W(_W(_W({}, hb), (0, G.polarToCartesian)(hb.cx, hb.cy, jb, kb)), {}, {
                                angle: kb,
                                radius: jb
                            });
                        }
                        return L;
                    }(U, Y, ab, W);
                return {
                    activeTooltipIndex: ab,
                    activeLabel: bb,
                    activePayload: cb,
                    activeCoordinate: db
                };
            }
            return null;
        },
        S = function(T, U) {
            var V = U.axisType,
                W = void 0 === V ? 'xAxis' : V,
                X = U.AxisComp,
                Y = U.graphicalItems,
                Z = U.stackGroups,
                $ = U.dataStartIndex,
                ab = U.dataEndIndex,
                bb = T.children,
                cb = ''.concat(W, 'Id'),
                db = (0, z.findAllByType)(bb, X),
                eb = {};
            return db && db.length ? eb = function(fb, gb) {
                var hb = gb.axes,
                    ib = gb.graphicalItems,
                    jb = gb.axisType,
                    kb = gb.axisIdKey,
                    lb = gb.stackGroups,
                    mb = gb.dataStartIndex,
                    nb = gb.dataEndIndex,
                    ob = fb.layout,
                    pb = fb.children,
                    qb = fb.stackOffset,
                    rb = (0, E.isCategoricalAxis)(ob, jb);
                return hb.reduce(function(sb, tb) {
                    var ub = tb.props,
                        vb = ub.type,
                        wb = ub.dataKey,
                        xb = ub.allowDataOverflow,
                        yb = ub.allowDuplicatedCategory,
                        zb = ub.scale,
                        Ab = ub.ticks,
                        Bb = tb.props[kb],
                        Cb = P(fb.data, {
                            graphicalItems: ib.filter(function(Db) {
                                return Db.props[kb] === Bb;
                            }),
                            dataStartIndex: mb,
                            dataEndIndex: nb
                        }),
                        Db = Cb.length;
                    if (!sb[Bb]) {
                        var Eb, Fb, Gb;
                        if (wb) {
                            if (Eb = (0, E.getDomainOfDataByKey)(Cb, wb, vb), 'category' === vb && rb) {
                                var Hb = (0, D.hasDuplicate)(Eb);
                                yb && Hb ? (Fb = Eb, Eb = _Ib(k)(0, Db)) : yb || (Eb = (0, E.parseDomainOfCategoryAxis)(tb.props.domain, Eb, tb).reduce(function(_Ib, Jb) {
                                    return _Ib.indexOf(Jb) >= 0 ? _Ib : [].concat(_S(_Ib), [Jb]);
                                }, []));
                            } else if ('category' === vb)
                                Eb = yb ? Eb.filter(function(Hb) {
                                    return '' !== Hb && !_Ib(l)(Hb);
                                }) : (0, E.parseDomainOfCategoryAxis)(tb.props.domain, Eb, tb).reduce(function(Hb, Ib) {
                                    return Hb.indexOf(Ib) >= 0 || '' === Ib || _Ib(l)(Ib) ? Hb : [].concat(_S(Hb), [Ib]);
                                }, []);
                            else if ('number' === vb) {
                                var Hb = (0, E.parseErrorBarsOfAxis)(Cb, ib.filter(function(_Ib) {
                                    return _Ib.props[kb] === Bb && !_Ib.props.hide;
                                }), wb, jb, ob);
                                Hb && (Eb = Hb);
                            }!rb || 'number' !== vb && 'auto' === zb || (Gb = (0, E.getDomainOfDataByKey)(Cb, wb, 'category'));
                        } else
                            Eb = rb ? _Hb(k)(0, Db) : lb && lb[Bb] && lb[Bb].hasStack && 'number' === vb ? 'expand' === qb ? [
                                0,
                                1
                            ] : (0, E.getDomainOfStackGroups)(lb[Bb].stackGroups, mb, nb) : (0, E.getDomainOfItemsWithSameAxis)(Cb, ib.filter(function(_Hb) {
                                return _Hb.props[kb] === Bb && !_Hb.props.hide;
                            }), vb, ob, !0);
                        if ('number' === vb)
                            Eb = (0, F.detectReferenceElementsDomain)(pb, Eb, Bb, jb, Ab), tb.props.domain && (Eb = (0, E.parseSpecifiedDomain)(tb.props.domain, Eb, xb));
                        else if ('category' === vb && tb.props.domain) {
                            var Hb = tb.props.domain;
                            Eb.every(function(Ib) {
                                return Hb.indexOf(Ib) >= 0;
                            }) && (Eb = Hb);
                        }
                        return _W(_W({}, sb), {}, _X({}, Bb, _W(_W({}, tb.props), {}, {
                            axisType: jb,
                            domain: Eb,
                            categoricalDomain: Gb,
                            duplicateDomain: Fb,
                            originalDomain: tb.props.domain,
                            isCategorical: rb,
                            layout: ob
                        })));
                    }
                    return sb;
                }, {});
            }(T, {
                axes: db,
                graphicalItems: Y,
                axisType: W,
                axisIdKey: cb,
                stackGroups: Z,
                dataStartIndex: $,
                dataEndIndex: ab
            }) : Y && Y.length && (eb = function(fb, gb) {
                var hb = gb.graphicalItems,
                    ib = gb.Axis,
                    jb = gb.axisType,
                    kb = gb.axisIdKey,
                    lb = gb.stackGroups,
                    mb = gb.dataStartIndex,
                    nb = gb.dataEndIndex,
                    ob = fb.layout,
                    pb = fb.children,
                    qb = P(fb.data, {
                        graphicalItems: hb,
                        dataStartIndex: mb,
                        dataEndIndex: nb
                    }),
                    rb = qb.length,
                    sb = (0, E.isCategoricalAxis)(ob, jb),
                    tb = -1;
                return hb.reduce(function(ub, vb) {
                    var wb, xb = vb.props[kb];
                    return ub[xb] ? ub : (tb++, sb ? wb = _yb(k)(0, rb) : lb && lb[xb] && lb[xb].hasStack ? (wb = (0, E.getDomainOfStackGroups)(lb[xb].stackGroups, mb, nb), wb = (0, F.detectReferenceElementsDomain)(pb, wb, xb, jb)) : (wb = (0, E.parseSpecifiedDomain)(ib.defaultProps.domain, (0, E.getDomainOfItemsWithSameAxis)(qb, hb.filter(function(_yb) {
                        return _yb.props[kb] === xb && !_yb.props.hide;
                    }), 'number', ob), ib.defaultProps.allowDataOverflow), wb = (0, F.detectReferenceElementsDomain)(pb, wb, xb, jb)), _W(_W({}, ub), {}, _X({}, xb, _W(_W({
                        axisType: jb
                    }, ib.defaultProps), {}, {
                        hide: !0,
                        orientation: _V(j)(_K, ''.concat(jb, '.').concat(tb % 2), null),
                        domain: wb,
                        originalDomain: ib.defaultProps.domain,
                        isCategorical: sb,
                        layout: ob
                    }))));
                }, {});
            }(T, {
                Axis: X,
                graphicalItems: Y,
                axisType: W,
                axisIdKey: cb,
                stackGroups: Z,
                dataStartIndex: $,
                dataEndIndex: ab
            })), eb;
        },
        T = function(U) {
            var V = U.children,
                W = U.defaultShowTooltip,
                X = (0, z.findChildByType)(V, B.Brush.displayName);
            return {
                chartX: 0,
                chartY: 0,
                dataStartIndex: X && X.props && X.props.startIndex || 0,
                dataEndIndex: X && X.props && X.props.endIndex || U.data && U.data.length - 1 || 0,
                activeTooltipIndex: -1,
                isTooltipActive: !_V(l)(W) && W
            };
        },
        U = function(_V) {
            return 'horizontal' === _V ? {
                numericAxisName: 'yAxis',
                cateAxisName: 'xAxis'
            } : 'vertical' === _V ? {
                numericAxisName: 'xAxis',
                cateAxisName: 'yAxis'
            } : 'centric' === _V ? {
                numericAxisName: 'radiusAxis',
                cateAxisName: 'angleAxis'
            } : {
                numericAxisName: 'angleAxis',
                cateAxisName: 'radiusAxis'
            };
        },
        _V = function(W) {
            var X, Y, Z = W.chartName,
                $ = W.GraphicalChild,
                ab = W.defaultTooltipEventType,
                _bb = void 0 === ab ? 'axis' : ab,
                cb = W.validateTooltipEventTypes,
                db = void 0 === cb ? ['axis'] : cb,
                eb = W.axisComponents,
                fb = W.legendContent,
                _gb = W.formatAxisMap,
                hb = W.defaultProps,
                ib = function(jb, kb) {
                    var lb = kb.graphicalItems,
                        mb = kb.stackGroups,
                        nb = kb.offset,
                        ob = kb.updateId,
                        pb = kb.dataStartIndex,
                        qb = kb.dataEndIndex,
                        rb = jb.barSize,
                        sb = jb.layout,
                        tb = jb.barGap,
                        ub = jb.barCategoryGap,
                        vb = jb.maxBarSize,
                        wb = U(sb),
                        xb = wb.numericAxisName,
                        yb = wb.cateAxisName,
                        zb = function(Ab) {
                            return !(!Ab || !Ab.length) && Ab.some(function(Bb) {
                                var Cb = (0, z.getDisplayName)(Bb && Bb.type);
                                return Cb && Cb.indexOf('Bar') >= 0;
                            });
                        }(lb),
                        Ab = zb && (0, E.getBarSizeList)({
                            barSize: rb,
                            stackGroups: mb
                        }),
                        Bb = [];
                    return lb.forEach(function(Cb, Db) {
                        var Eb = P(jb.data, {
                                dataStartIndex: pb,
                                dataEndIndex: qb
                            }, Cb),
                            Fb = Cb.props,
                            Gb = Fb.dataKey,
                            Hb = Fb.maxBarSize,
                            Ib = Cb.props[''.concat(xb, 'Id')],
                            Jb = Cb.props[''.concat(yb, 'Id')],
                            Kb = eb.reduce(function(Lb, Mb) {
                                var Nb, Ob = kb[''.concat(Mb.axisType, 'Map')],
                                    Pb = Cb.props[''.concat(Mb.axisType, 'Id')],
                                    Qb = Ob && Ob[Pb];
                                return _W(_W({}, Lb), {}, (_X(Nb = {}, Mb.axisType, Qb), _X(Nb, ''.concat(Mb.axisType, 'Ticks'), (0, E.getTicksOfAxis)(Qb)), Nb));
                            }, {}),
                            Lb = Kb[yb],
                            Mb = Kb[''.concat(yb, 'Ticks')],
                            Nb = mb && mb[Ib] && mb[Ib].hasStack && (0, E.getStackedDataOfItem)(Cb, mb[Ib].stackGroups),
                            Ob = (0, z.getDisplayName)(Cb.type).indexOf('Bar') >= 0,
                            Pb = (0, E.getBandSizeOfAxis)(Lb, Mb),
                            Qb = [];
                        if (Ob) {
                            var Rb, Sb, Tb = _Vb(l)(Hb) ? vb : Hb,
                                Ub = null !== (Rb = null !== (Sb = (0, E.getBandSizeOfAxis)(Lb, Mb, !0)) && void 0 !== Sb ? Sb : Tb) && void 0 !== Rb ? Rb : 0;
                            Qb = (0, E.getBarPosition)({
                                barGap: tb,
                                barCategoryGap: ub,
                                bandSize: Ub !== Pb ? Ub : Pb,
                                sizeList: Ab[Jb],
                                maxBarSize: Tb
                            }), Ub !== Pb && (Qb = Qb.map(function(_Vb) {
                                return _W(_W({}, _Vb), {}, {
                                    position: _W(_W({}, _Vb.position), {}, {
                                        offset: _Vb.position.offset - Ub / 2
                                    })
                                });
                            }));
                        }
                        var Rb, Sb = Cb && Cb.type && Cb.type.getComposedData;
                        Sb && Bb.push({
                            props: _W(_W({}, Sb(_W(_W({}, Kb), {}, {
                                displayedData: Eb,
                                props: jb,
                                dataKey: Gb,
                                item: Cb,
                                bandSize: Pb,
                                barPosition: Qb,
                                offset: nb,
                                stackedData: Nb,
                                layout: sb,
                                dataStartIndex: pb,
                                dataEndIndex: qb
                            }))), {}, (Rb = {
                                key: Cb.key || 'item-'.concat(Db)
                            }, _X(Rb, xb, Kb[xb]), _X(Rb, yb, Kb[yb]), _X(Rb, 'animationId', ob), Rb)),
                            childIndex: (0, z.parseChildIndex)(Cb, jb.children),
                            item: Cb
                        });
                    }), Bb;
                },
                jb = function(kb, lb) {
                    var mb = kb.props,
                        nb = kb.dataStartIndex,
                        ob = kb.dataEndIndex,
                        pb = kb.updateId;
                    if (!(0, z.validateWidthHeight)({
                            props: mb
                        }))
                        return null;
                    var qb = mb.children,
                        rb = mb.layout,
                        sb = mb.stackOffset,
                        tb = mb.data,
                        ub = mb.reverseStackOrder,
                        vb = U(rb),
                        wb = vb.numericAxisName,
                        xb = vb.cateAxisName,
                        yb = (0, z.findAllByType)(qb, $),
                        zb = (0, E.getStackGroupsByAxisId)(tb, yb, ''.concat(wb, 'Id'), ''.concat(xb, 'Id'), sb, ub),
                        Ab = eb.reduce(function(Bb, Cb) {
                            var Db = ''.concat(Cb.axisType, 'Map');
                            return _W(_W({}, Bb), {}, _X({}, Db, S(mb, _W(_W({}, Cb), {}, {
                                graphicalItems: yb,
                                stackGroups: Cb.axisType === wb && zb,
                                dataStartIndex: nb,
                                dataEndIndex: ob
                            }))));
                        }, {}),
                        Bb = function(Cb, Db) {
                            var Eb = Cb.props,
                                Fb = Cb.graphicalItems,
                                Gb = Cb.xAxisMap,
                                Hb = void 0 === Gb ? {} : Gb,
                                Ib = Cb.yAxisMap,
                                Jb = void 0 === Ib ? {} : Ib,
                                Kb = Eb.width,
                                Lb = Eb.height,
                                Mb = Eb.children,
                                Nb = Eb.margin || {},
                                Ob = (0, z.findChildByType)(Mb, B.Brush.displayName),
                                Pb = (0, z.findChildByType)(Mb, t.Legend.displayName),
                                Qb = Object.keys(Jb).reduce(function(Rb, Sb) {
                                    var Tb = Jb[Sb],
                                        Ub = Tb.orientation;
                                    return Tb.mirror || Tb.hide ? Rb : _W(_W({}, Rb), {}, _X({}, Ub, Rb[Ub] + Tb.width));
                                }, {
                                    left: Nb.left || 0,
                                    right: Nb.right || 0
                                }),
                                Rb = Object.keys(Hb).reduce(function(Sb, Tb) {
                                    var Ub = Hb[Tb],
                                        Vb = Ub.orientation;
                                    return Ub.mirror || Ub.hide ? Sb : _W(_W({}, Sb), {}, _X({}, Vb, _Cb(j)(Sb, ''.concat(Vb)) + Ub.height));
                                }, {
                                    top: Nb.top || 0,
                                    bottom: Nb.bottom || 0
                                }),
                                Sb = _W(_W({}, Rb), Qb),
                                Tb = Sb.bottom;
                            return Ob && (Sb.bottom += Ob.props.height || B.Brush.defaultProps.height), Pb && Db && (Sb = (0, E.appendOffsetOfLegend)(Sb, Fb, Eb, Db)), _W(_W({
                                brushBottom: Tb
                            }, Sb), {}, {
                                width: Kb - Sb.left - Sb.right,
                                height: Lb - Sb.top - Sb.bottom
                            });
                        }(_W(_W({}, Ab), {}, {
                            props: mb,
                            graphicalItems: yb
                        }), null == lb ? void 0 : lb.legendBBox);
                    Object.keys(Ab).forEach(function(_Cb) {
                        Ab[_Cb] = _gb(mb, Ab[_Cb], Bb, _Cb.replace('Map', ''), Z);
                    });
                    var Cb, Db, Eb, Fb = Ab[''.concat(xb, 'Map')],
                        Gb = (Cb = Fb, Db = (0, D.getAnyElementOfObject)(Cb), {
                            tooltipTicks: Eb = (0, E.getTicksOfAxis)(Db, !1, !0),
                            orderedTooltipTicks: _Hb(i)(Eb, function(_Hb) {
                                return _Hb.coordinate;
                            }),
                            tooltipAxis: Db,
                            tooltipAxisBandSize: (0, E.getBandSizeOfAxis)(Db, Eb)
                        }),
                        Hb = ib(mb, _W(_W({}, Ab), {}, {
                            dataStartIndex: nb,
                            dataEndIndex: ob,
                            updateId: pb,
                            graphicalItems: yb,
                            stackGroups: zb,
                            offset: Bb
                        }));
                    return _W(_W({
                        formattedGraphicalItems: Hb,
                        graphicalItems: yb,
                        offset: Bb,
                        stackGroups: zb
                    }, Gb), Ab);
                };
            return Y = X = function(kb) {
                ! function(lb, mb) {
                    if ('function' != typeof mb && null !== mb)
                        throw new TypeError('Super expression must either be null or a function');
                    lb.prototype = Object.create(mb && mb.prototype, {
                        constructor: {
                            value: lb,
                            writable: !0,
                            configurable: !0
                        }
                    }), mb && _N(lb, mb);
                }(r, kb);
                var lb, mb, nb, ob = _O(r);

                function pb(qb) {
                    var rb;
                    return function(sb, tb) {
                        if (!(sb instanceof tb))
                            throw new TypeError('Cannot call a class as a function');
                    }(this, pb), (rb = ob.call(this, qb)).uniqueChartId = void 0, rb.clipPathId = void 0, rb.legendInstance = void 0, rb.deferId = void 0, rb.container = void 0, rb.clearDeferId = function() {
                        !_sb(l)(rb.deferId) && O && O(rb.deferId), rb.deferId = null;
                    }, rb.handleLegendBBoxUpdate = function(_sb) {
                        if (_sb) {
                            var tb = rb.state,
                                ub = tb.dataStartIndex,
                                vb = tb.dataEndIndex,
                                wb = tb.updateId;
                            rb.setState(_W({
                                legendBBox: _sb
                            }, jb({
                                props: rb.props,
                                dataStartIndex: ub,
                                dataEndIndex: vb,
                                updateId: wb
                            }, _W(_W({}, rb.state), {}, {
                                legendBBox: _sb
                            }))));
                        }
                    }, rb.handleReceiveSyncEvent = function(sb, tb, ub) {
                        rb.props.syncId === sb && tb !== rb.uniqueChartId && (rb.clearDeferId(), rb.deferId = N && N(rb.applySyncEvent.bind(_Q(rb), ub)));
                    }, rb.handleBrushChange = function(sb) {
                        var tb = sb.startIndex,
                            ub = sb.endIndex;
                        if (tb !== rb.state.dataStartIndex || ub !== rb.state.dataEndIndex) {
                            var vb = rb.state.updateId;
                            rb.setState(function() {
                                return _W({
                                    dataStartIndex: tb,
                                    dataEndIndex: ub
                                }, jb({
                                    props: rb.props,
                                    dataStartIndex: tb,
                                    dataEndIndex: ub,
                                    updateId: vb
                                }, rb.state));
                            }), rb.triggerSyncEvent({
                                dataStartIndex: tb,
                                dataEndIndex: ub
                            });
                        }
                    }, rb.handleMouseEnter = function(sb) {
                        var tb = rb.props.onMouseEnter,
                            ub = rb.getMouseInfo(sb);
                        if (ub) {
                            var vb = _W(_W({}, ub), {}, {
                                isTooltipActive: !0
                            });
                            rb.setState(vb), rb.triggerSyncEvent(vb), _sb(g)(tb) && tb(vb, sb);
                        }
                    }, rb.triggeredAfterMouseMove = function(sb) {
                        var tb = rb.props.onMouseMove,
                            ub = rb.getMouseInfo(sb),
                            vb = ub ? _W(_W({}, ub), {}, {
                                isTooltipActive: !0
                            }) : {
                                isTooltipActive: !1
                            };
                        rb.setState(vb), rb.triggerSyncEvent(vb), _sb(g)(tb) && tb(vb, sb);
                    }, rb.handleItemMouseEnter = function(_sb) {
                        rb.setState(function() {
                            return {
                                isTooltipActive: !0,
                                activeItem: _sb,
                                activePayload: _sb.tooltipPayload,
                                activeCoordinate: _sb.tooltipPosition || {
                                    x: _sb.cx,
                                    y: _sb.cy
                                }
                            };
                        });
                    }, rb.handleItemMouseLeave = function() {
                        rb.setState(function() {
                            return {
                                isTooltipActive: !1
                            };
                        });
                    }, rb.handleMouseMove = function(sb) {
                        sb && _sb(g)(sb.persist) && sb.persist(), rb.triggeredAfterMouseMove(sb);
                    }, rb.handleMouseLeave = function(sb) {
                        var tb = rb.props.onMouseLeave,
                            ub = {
                                isTooltipActive: !1
                            };
                        rb.setState(ub), rb.triggerSyncEvent(ub), _sb(g)(tb) && tb(ub, sb), rb.cancelThrottledTriggerAfterMouseMove();
                    }, rb.handleOuterEvent = function(sb) {
                        var tb = (0, z.getReactEventByType)(sb),
                            ub = _sb(j)(rb.props, ''.concat(tb));
                        tb && _sb(g)(ub) && ub(/.*touch.*/i.test(tb) ? rb.getMouseInfo(sb.changedTouches[0]) : rb.getMouseInfo(sb), sb);
                    }, rb.handleClick = function(sb) {
                        var tb = rb.props.onClick,
                            ub = rb.getMouseInfo(sb);
                        if (ub) {
                            var vb = _W(_W({}, ub), {}, {
                                isTooltipActive: !0
                            });
                            rb.setState(vb), rb.triggerSyncEvent(vb), _sb(g)(tb) && tb(vb, sb);
                        }
                    }, rb.handleMouseDown = function(sb) {
                        var tb = rb.props.onMouseDown;
                        _sb(g)(tb) && tb(rb.getMouseInfo(sb), sb);
                    }, rb.handleMouseUp = function(sb) {
                        var tb = rb.props.onMouseUp;
                        _sb(g)(tb) && tb(rb.getMouseInfo(sb), sb);
                    }, rb.handleTouchMove = function(_sb) {
                        null != _sb.changedTouches && _sb.changedTouches.length > 0 && rb.handleMouseMove(_sb.changedTouches[0]);
                    }, rb.handleTouchStart = function(sb) {
                        null != sb.changedTouches && sb.changedTouches.length > 0 && rb.handleMouseDown(sb.changedTouches[0]);
                    }, rb.handleTouchEnd = function(sb) {
                        null != sb.changedTouches && sb.changedTouches.length > 0 && rb.handleMouseUp(sb.changedTouches[0]);
                    }, rb.verticalCoordinatesGenerator = function(sb) {
                        var tb = sb.xAxis,
                            ub = sb.width,
                            vb = sb.height,
                            wb = sb.offset;
                        return (0, E.getCoordinatesOfGrid)(A.CartesianAxis.getTicks(_W(_W(_W({}, A.CartesianAxis.defaultProps), tb), {}, {
                            ticks: (0, E.getTicksOfAxis)(tb, !0),
                            viewBox: {
                                x: 0,
                                y: 0,
                                width: ub,
                                height: vb
                            }
                        })), wb.left, wb.left + wb.width);
                    }, rb.horizontalCoordinatesGenerator = function(sb) {
                        var tb = sb.yAxis,
                            ub = sb.width,
                            vb = sb.height,
                            wb = sb.offset;
                        return (0, E.getCoordinatesOfGrid)(A.CartesianAxis.getTicks(_W(_W(_W({}, A.CartesianAxis.defaultProps), tb), {}, {
                            ticks: (0, E.getTicksOfAxis)(tb, !0),
                            viewBox: {
                                x: 0,
                                y: 0,
                                width: ub,
                                height: vb
                            }
                        })), wb.top, wb.top + wb.height);
                    }, rb.axesTicksGenerator = function(sb) {
                        return (0, E.getTicksOfAxis)(sb, !0);
                    }, rb.renderCursor = function(sb) {
                        var tb = rb.state,
                            ub = tb.isTooltipActive,
                            vb = tb.activeCoordinate,
                            wb = tb.activePayload,
                            xb = tb.offset,
                            yb = tb.activeTooltipIndex,
                            zb = rb.getTooltipEventType();
                        if (!sb || !sb.props.cursor || !ub || !vb || 'ScatterChart' !== Z && 'axis' !== zb)
                            return null;
                        var Ab, Bb = rb.props.layout,
                            Cb = u.Curve;
                        if ('ScatterChart' === Z)
                            Ab = vb, Cb = v.Cross;
                        else if ('BarChart' === Z)
                            Ab = rb.getCursorRectangle(), Cb = y.Rectangle;
                        else if ('radial' === Bb) {
                            var Db = rb.getCursorPoints(),
                                Eb = Db.cx,
                                Fb = Db.cy,
                                Gb = Db.radius;
                            Ab = {
                                cx: Eb,
                                cy: Fb,
                                startAngle: Db.startAngle,
                                endAngle: Db.endAngle,
                                innerRadius: Gb,
                                outerRadius: Gb
                            }, Cb = w.Sector;
                        } else
                            Ab = {
                                points: rb.getCursorPoints()
                            }, Cb = u.Curve;
                        var Db = sb.key || '_recharts-cursor',
                            Eb = _W(_W(_W(_W({
                                stroke: '#ccc',
                                pointerEvents: 'none'
                            }, xb), Ab), (0, J.filterProps)(sb.props.cursor)), {}, {
                                payload: wb,
                                payloadIndex: yb,
                                key: Db,
                                className: 'recharts-tooltip-cursor'
                            });
                        return (0, o.isValidElement)(sb.props.cursor) ? (0, o.cloneElement)(sb.props.cursor, Eb) : (0, o.createElement)(Cb, Eb);
                    }, rb.renderPolarAxis = function(sb, tb, ub) {
                        var vb = _sb(j)(sb, 'type.axisType'),
                            wb = _sb(j)(rb.state, ''.concat(vb, 'Map'))[sb.props[''.concat(vb, 'Id')]];
                        return (0, o.cloneElement)(sb, _W(_W({}, wb), {}, {
                            className: vb,
                            key: sb.key || ''.concat(tb, '-').concat(ub),
                            ticks: (0, E.getTicksOfAxis)(wb, !0)
                        }));
                    }, rb.renderXAxis = function(_sb, tb, ub) {
                        var vb = rb.state.xAxisMap[_sb.props.xAxisId];
                        return rb.renderAxis(vb, _sb, tb, ub);
                    }, rb.renderYAxis = function(sb, tb, ub) {
                        var vb = rb.state.yAxisMap[sb.props.yAxisId];
                        return rb.renderAxis(vb, sb, tb, ub);
                    }, rb.renderGrid = function(sb) {
                        var tb = rb.state,
                            ub = tb.xAxisMap,
                            vb = tb.yAxisMap,
                            wb = tb.offset,
                            xb = rb.props,
                            yb = xb.width,
                            zb = xb.height,
                            Ab = (0, D.getAnyElementOfObject)(ub),
                            Bb = _Gb(f)(vb, function(Cb) {
                                return _Gb(e)(Cb.domain, M);
                            }) || (0, D.getAnyElementOfObject)(vb),
                            Cb = sb.props || {};
                        return (0, o.cloneElement)(sb, {
                            key: sb.key || 'grid',
                            x: (0, D.isNumber)(Cb.x) ? Cb.x : wb.left,
                            y: (0, D.isNumber)(Cb.y) ? Cb.y : wb.top,
                            width: (0, D.isNumber)(Cb.width) ? Cb.width : wb.width,
                            height: (0, D.isNumber)(Cb.height) ? Cb.height : wb.height,
                            xAxis: Ab,
                            yAxis: Bb,
                            offset: wb,
                            chartWidth: yb,
                            chartHeight: zb,
                            verticalCoordinatesGenerator: Cb.verticalCoordinatesGenerator || rb.verticalCoordinatesGenerator,
                            horizontalCoordinatesGenerator: Cb.horizontalCoordinatesGenerator || rb.horizontalCoordinatesGenerator
                        });
                    }, rb.renderPolarGrid = function(sb) {
                        var tb = sb.props,
                            ub = tb.radialLines,
                            vb = tb.polarAngles,
                            wb = tb.polarRadius,
                            xb = rb.state,
                            yb = xb.radiusAxisMap,
                            zb = xb.angleAxisMap,
                            Ab = (0, D.getAnyElementOfObject)(yb),
                            Bb = (0, D.getAnyElementOfObject)(zb),
                            Cb = Bb.cx,
                            Db = Bb.cy,
                            Eb = Bb.innerRadius,
                            Fb = Bb.outerRadius;
                        return (0, o.cloneElement)(sb, {
                            polarAngles: _Gb(n)(vb) ? vb : (0, E.getTicksOfAxis)(Bb, !0).map(function(_Gb) {
                                return _Gb.coordinate;
                            }),
                            polarRadius: _Gb(n)(wb) ? wb : (0, E.getTicksOfAxis)(Ab, !0).map(function(_Gb) {
                                return _Gb.coordinate;
                            }),
                            cx: Cb,
                            cy: Db,
                            innerRadius: Eb,
                            outerRadius: Fb,
                            key: sb.key || 'polar-grid',
                            radialLines: ub
                        });
                    }, rb.renderLegend = function() {
                        var sb = rb.state.formattedGraphicalItems,
                            tb = rb.props,
                            ub = tb.children,
                            vb = tb.width,
                            wb = tb.height,
                            xb = rb.props.margin || {},
                            yb = vb - (xb.left || 0) - (xb.right || 0),
                            zb = (0, E.getLegendProps)({
                                children: ub,
                                formattedGraphicalItems: sb,
                                legendWidth: yb,
                                legendContent: fb
                            });
                        if (!zb)
                            return null;
                        var Ab = zb.item,
                            Bb = _L(zb, ['item']);
                        return (0, o.cloneElement)(Ab, _W(_W({}, Bb), {}, {
                            chartWidth: vb,
                            chartHeight: wb,
                            margin: xb,
                            ref: function(Cb) {
                                rb.legendInstance = Cb;
                            },
                            onBBoxUpdate: rb.handleLegendBBoxUpdate
                        }));
                    }, rb.renderTooltip = function() {
                        var sb = rb.props.children,
                            tb = (0, z.findChildByType)(sb, s.Tooltip.displayName);
                        if (!tb)
                            return null;
                        var ub = rb.state,
                            vb = ub.isTooltipActive,
                            wb = ub.activeCoordinate,
                            xb = ub.activePayload,
                            yb = ub.activeLabel,
                            zb = ub.offset;
                        return (0, o.cloneElement)(tb, {
                            viewBox: _W(_W({}, zb), {}, {
                                x: zb.left,
                                y: zb.top
                            }),
                            active: vb,
                            label: yb,
                            payload: vb ? xb : [],
                            coordinate: wb
                        });
                    }, rb.renderBrush = function(sb) {
                        var tb = rb.props,
                            ub = tb.margin,
                            vb = tb.data,
                            wb = rb.state,
                            xb = wb.offset,
                            yb = wb.dataStartIndex,
                            zb = wb.dataEndIndex,
                            Ab = wb.updateId;
                        return (0, o.cloneElement)(sb, {
                            key: sb.key || '_recharts-brush',
                            onChange: (0, E.combineEventHandlers)(rb.handleBrushChange, null, sb.props.onChange),
                            data: vb,
                            x: (0, D.isNumber)(sb.props.x) ? sb.props.x : xb.left,
                            y: (0, D.isNumber)(sb.props.y) ? sb.props.y : xb.top + xb.height + xb.brushBottom - (ub.bottom || 0),
                            width: (0, D.isNumber)(sb.props.width) ? sb.props.width : xb.width,
                            startIndex: yb,
                            endIndex: zb,
                            updateId: 'brush-'.concat(Ab)
                        });
                    }, rb.renderReferenceElement = function(sb, tb, ub) {
                        if (!sb)
                            return null;
                        var vb = _Q(rb).clipPathId,
                            wb = rb.state,
                            xb = wb.xAxisMap,
                            yb = wb.yAxisMap,
                            zb = wb.offset,
                            Ab = sb.props,
                            Bb = Ab.xAxisId,
                            Cb = Ab.yAxisId;
                        return (0, o.cloneElement)(sb, {
                            key: sb.key || ''.concat(tb, '-').concat(ub),
                            xAxis: xb[Bb],
                            yAxis: yb[Cb],
                            viewBox: {
                                x: zb.left,
                                y: zb.top,
                                width: zb.width,
                                height: zb.height
                            },
                            clipPathId: vb
                        });
                    }, rb.renderActivePoints = function(sb) {
                        var tb = sb.item,
                            ub = sb.activePoint,
                            vb = sb.basePoint,
                            wb = sb.childIndex,
                            xb = sb.isRange,
                            yb = [],
                            zb = tb.props.key,
                            Ab = tb.item.props,
                            Bb = Ab.activeDot,
                            Cb = _W(_W({
                                index: wb,
                                dataKey: Ab.dataKey,
                                cx: ub.x,
                                cy: ub.y,
                                r: 4,
                                fill: (0, E.getMainColorOfGraphicItem)(tb.item),
                                strokeWidth: 2,
                                stroke: '#fff',
                                payload: ub.payload,
                                value: ub.value,
                                key: ''.concat(zb, '-activePoint-').concat(wb)
                            }, (0, J.filterProps)(Bb)), (0, J.adaptEventHandlers)(Bb));
                        return yb.push(pb.renderActiveDot(Bb, Cb)), vb ? yb.push(pb.renderActiveDot(Bb, _W(_W({}, Cb), {}, {
                            cx: vb.x,
                            cy: vb.y,
                            key: ''.concat(zb, '-basePoint-').concat(wb)
                        }))) : xb && yb.push(null), yb;
                    }, rb.renderGraphicChild = function(sb, tb, ub) {
                        var vb = rb.filterFormatItem(sb, tb, ub);
                        if (!vb)
                            return null;
                        var wb = rb.getTooltipEventType(),
                            xb = rb.state,
                            yb = xb.isTooltipActive,
                            zb = xb.tooltipAxis,
                            Ab = xb.activeTooltipIndex,
                            Bb = xb.activeLabel,
                            Cb = rb.props.children,
                            Db = (0, z.findChildByType)(Cb, s.Tooltip.displayName),
                            Eb = vb.props,
                            Fb = Eb.points,
                            Gb = Eb.isRange,
                            Hb = Eb.baseLine,
                            Ib = vb.item.props,
                            Jb = Ib.activeDot,
                            Kb = !Ib.hide && yb && Db && Jb && Ab >= 0,
                            Lb = {};
                        'axis' !== wb && Db && 'click' === Db.props.trigger ? Lb = {
                            onClick: (0, E.combineEventHandlers)(rb.handleItemMouseEnter, null, sb.props.onCLick)
                        } : 'axis' !== wb && (Lb = {
                            onMouseLeave: (0, E.combineEventHandlers)(rb.handleItemMouseLeave, null, sb.props.onMouseLeave),
                            onMouseEnter: (0, E.combineEventHandlers)(rb.handleItemMouseEnter, null, sb.props.onMouseEnter)
                        });
                        var Mb = (0, o.cloneElement)(sb, _W(_W({}, vb.props), Lb));
                        if (Kb) {
                            var Nb, Ob;
                            if (zb.dataKey && !zb.allowDuplicatedCategory) {
                                var Pb = 'function' == typeof zb.dataKey ? function(Qb) {
                                    return 'function' == typeof zb.dataKey ? zb.dataKey(Qb.payload) : null;
                                } : 'payload.'.concat(zb.dataKey.toString());
                                Nb = (0, D.findEntryInArray)(Fb, Pb, Bb), Ob = Gb && Hb && (0, D.findEntryInArray)(Hb, Pb, Bb);
                            } else
                                Nb = Fb[Ab], Ob = Gb && Hb && Hb[Ab];
                            if (!_sb(l)(Nb))
                                return [Mb].concat(_S(rb.renderActivePoints({
                                    item: vb,
                                    activePoint: Nb,
                                    basePoint: Ob,
                                    childIndex: Ab,
                                    isRange: Gb
                                })));
                        }
                        return Gb ? [
                            Mb,
                            null,
                            null
                        ] : [
                            Mb,
                            null
                        ];
                    }, rb.renderCustomized = function(_sb, tb, ub) {
                        return (0, o.cloneElement)(_sb, _W(_W({
                            key: 'recharts-customized-'.concat(ub)
                        }, rb.props), rb.state));
                    }, rb.uniqueChartId = _pb(l)(qb.id) ? (0, D.uniqueId)('recharts') : qb.id, rb.clipPathId = ''.concat(rb.uniqueChartId, '-clip'), qb.throttleDelay && (rb.triggeredAfterMouseMove = _pb(h)(rb.triggeredAfterMouseMove, qb.throttleDelay)), rb.state = {}, rb;
                }
                return lb = r, (mb = [{
                        key: 'componentDidMount',
                        value: function() {
                            _pb(l)(this.props.syncId) || this.addListener();
                        }
                    },
                    {
                        key: 'componentDidUpdate',
                        value: function(pb) {
                            _pb(l)(pb.syncId) && !_pb(l)(this.props.syncId) && this.addListener(), !_pb(l)(pb.syncId) && _pb(l)(this.props.syncId) && this.removeListener();
                        }
                    },
                    {
                        key: 'componentWillUnmount',
                        value: function() {
                            this.clearDeferId(), _pb(l)(this.props.syncId) || this.removeListener(), this.cancelThrottledTriggerAfterMouseMove();
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
                            var pb = (0, z.findChildByType)(this.props.children, s.Tooltip.displayName);
                            if (pb && _pb(m)(pb.props.shared)) {
                                var qb = pb.props.shared ? 'axis' : 'item';
                                return db.indexOf(qb) >= 0 ? qb : _bb;
                            }
                            return _bb;
                        }
                    },
                    {
                        key: 'getMouseInfo',
                        value: function(_pb) {
                            if (!this.container)
                                return null;
                            var qb = (0, C.getOffset)(this.container),
                                rb = (0, C.calculateChartCoordinate)(_pb, qb),
                                sb = this.inRange(rb.chartX, rb.chartY);
                            if (!sb)
                                return null;
                            var tb = this.state,
                                ub = tb.xAxisMap,
                                vb = tb.yAxisMap;
                            if ('axis' !== this.getTooltipEventType() && ub && vb) {
                                var wb = (0, D.getAnyElementOfObject)(ub).scale,
                                    xb = (0, D.getAnyElementOfObject)(vb).scale,
                                    yb = wb && wb.invert ? wb.invert(rb.chartX) : null,
                                    zb = xb && xb.invert ? xb.invert(rb.chartY) : null;
                                return _W(_W({}, rb), {}, {
                                    xValue: yb,
                                    yValue: zb
                                });
                            }
                            var wb = R(this.state, this.props.data, this.props.layout, sb);
                            return wb ? _W(_W({}, rb), wb) : null;
                        }
                    },
                    {
                        key: 'getCursorRectangle',
                        value: function() {
                            var pb = this.props.layout,
                                qb = this.state,
                                rb = qb.activeCoordinate,
                                sb = qb.offset,
                                tb = qb.tooltipAxisBandSize,
                                ub = tb / 2;
                            return {
                                stroke: 'none',
                                fill: '#ccc',
                                x: 'horizontal' === pb ? rb.x - ub : sb.left + 0.5,
                                y: 'horizontal' === pb ? sb.top + 0.5 : rb.y - ub,
                                width: 'horizontal' === pb ? tb : sb.width - 1,
                                height: 'horizontal' === pb ? sb.height - 1 : tb
                            };
                        }
                    },
                    {
                        key: 'getCursorPoints',
                        value: function() {
                            var pb, qb, rb, sb, tb = this.props.layout,
                                ub = this.state,
                                vb = ub.activeCoordinate,
                                wb = ub.offset;
                            if ('horizontal' === tb)
                                rb = pb = vb.x, qb = wb.top, sb = wb.top + wb.height;
                            else if ('vertical' === tb)
                                sb = qb = vb.y, pb = wb.left, rb = wb.left + wb.width;
                            else if (!_pb(l)(vb.cx) || !_pb(l)(vb.cy)) {
                                if ('centric' !== tb) {
                                    var xb = vb.cx,
                                        yb = vb.cy,
                                        zb = vb.radius,
                                        Ab = vb.startAngle,
                                        Bb = vb.endAngle;
                                    return {
                                        points: [
                                            (0, G.polarToCartesian)(xb, yb, zb, Ab),
                                            (0, G.polarToCartesian)(xb, yb, zb, Bb)
                                        ],
                                        cx: xb,
                                        cy: yb,
                                        radius: zb,
                                        startAngle: Ab,
                                        endAngle: Bb
                                    };
                                }
                                var xb = vb.cx,
                                    yb = vb.cy,
                                    zb = vb.innerRadius,
                                    Ab = vb.outerRadius,
                                    Bb = vb.angle,
                                    Cb = (0, G.polarToCartesian)(xb, yb, zb, Bb),
                                    Db = (0, G.polarToCartesian)(xb, yb, Ab, Bb);
                                pb = Cb.x, qb = Cb.y, rb = Db.x, sb = Db.y;
                            }
                            return [{
                                    x: pb,
                                    y: qb
                                },
                                {
                                    x: rb,
                                    y: sb
                                }
                            ];
                        }
                    },
                    {
                        key: 'inRange',
                        value: function(_pb, qb) {
                            var rb = this.props.layout;
                            if ('horizontal' === rb || 'vertical' === rb) {
                                var sb = this.state.offset;
                                return _pb >= sb.left && _pb <= sb.left + sb.width && qb >= sb.top && qb <= sb.top + sb.height ? {
                                    x: _pb,
                                    y: qb
                                } : null;
                            }
                            var sb = this.state,
                                tb = sb.angleAxisMap,
                                ub = sb.radiusAxisMap;
                            if (tb && ub) {
                                var vb = (0, D.getAnyElementOfObject)(tb);
                                return (0, G.inRangeOfSector)({
                                    x: _pb,
                                    y: qb
                                }, vb);
                            }
                            return null;
                        }
                    },
                    {
                        key: 'parseEventsOfWrapper',
                        value: function() {
                            var pb = this.props.children,
                                qb = this.getTooltipEventType(),
                                rb = (0, z.findChildByType)(pb, s.Tooltip.displayName),
                                sb = {};
                            return rb && 'axis' === qb && (sb = 'click' === rb.props.trigger ? {
                                onClick: this.handleClick
                            } : {
                                onMouseEnter: this.handleMouseEnter,
                                onMouseMove: this.handleMouseMove,
                                onMouseLeave: this.handleMouseLeave,
                                onTouchMove: this.handleTouchMove,
                                onTouchStart: this.handleTouchStart,
                                onTouchEnd: this.handleTouchEnd
                            }), _W(_W({}, (0, J.adaptEventHandlers)(this.props, this.handleOuterEvent)), sb);
                        }
                    },
                    {
                        key: 'addListener',
                        value: function() {
                            I.eventCenter.on(I.SYNC_EVENT, this.handleReceiveSyncEvent), I.eventCenter.setMaxListeners && I.eventCenter._maxListeners && I.eventCenter.setMaxListeners(I.eventCenter._maxListeners + 1);
                        }
                    },
                    {
                        key: 'removeListener',
                        value: function() {
                            I.eventCenter.removeListener(I.SYNC_EVENT, this.handleReceiveSyncEvent), I.eventCenter.setMaxListeners && I.eventCenter._maxListeners && I.eventCenter.setMaxListeners(I.eventCenter._maxListeners - 1);
                        }
                    },
                    {
                        key: 'triggerSyncEvent',
                        value: function(pb) {
                            var qb = this.props.syncId;
                            _pb(l)(qb) || I.eventCenter.emit(I.SYNC_EVENT, qb, this.uniqueChartId, pb);
                        }
                    },
                    {
                        key: 'applySyncEvent',
                        value: function(pb) {
                            var qb = this.props,
                                rb = qb.layout,
                                sb = qb.syncMethod,
                                tb = this.state.updateId,
                                ub = pb.dataStartIndex,
                                vb = pb.dataEndIndex;
                            if (_pb(l)(pb.dataStartIndex) && _pb(l)(pb.dataEndIndex))
                                if (_pb(l)(pb.activeTooltipIndex))
                                    this.setState(pb);
                                else {
                                    var wb = pb.chartX,
                                        xb = pb.chartY,
                                        yb = pb.activeTooltipIndex,
                                        zb = this.state,
                                        Ab = zb.offset,
                                        Bb = zb.tooltipTicks;
                                    if (!Ab)
                                        return;
                                    if ('function' == typeof sb)
                                        yb = sb(Bb, pb);
                                    else if ('value' === sb) {
                                        yb = -1;
                                        for (var Cb = 0; Cb < Bb.length; Cb++)
                                            if (Bb[Cb].value === pb.activeLabel) {
                                                yb = Cb;
                                                break;
                                            }
                                    }
                                    var Cb = _W(_W({}, Ab), {}, {
                                            x: Ab.left,
                                            y: Ab.top
                                        }),
                                        Db = Math.min(wb, Cb.x + Cb.width),
                                        Eb = Math.min(xb, Cb.y + Cb.height),
                                        Fb = Bb[yb] && Bb[yb].value,
                                        Gb = Q(this.state, this.props.data, yb),
                                        Hb = Bb[yb] ? {
                                            x: 'horizontal' === rb ? Bb[yb].coordinate : Db,
                                            y: 'horizontal' === rb ? Eb : Bb[yb].coordinate
                                        } : L;
                                    this.setState(_W(_W({}, pb), {}, {
                                        activeLabel: Fb,
                                        activeCoordinate: Hb,
                                        activePayload: Gb,
                                        activeTooltipIndex: yb
                                    }));
                                }
                            else
                                this.setState(_W({
                                    dataStartIndex: ub,
                                    dataEndIndex: vb
                                }, jb({
                                    props: this.props,
                                    dataStartIndex: ub,
                                    dataEndIndex: vb,
                                    updateId: tb
                                }, this.state)));
                        }
                    },
                    {
                        key: 'filterFormatItem',
                        value: function(_pb, qb, rb) {
                            for (var sb = this.state.formattedGraphicalItems, tb = 0, ub = sb.length; tb < ub; tb++) {
                                var vb = sb[tb];
                                if (vb.item === _pb || vb.props.key === _pb.key || qb === (0, z.getDisplayName)(vb.item.type) && rb === vb.childIndex)
                                    return vb;
                            }
                            return null;
                        }
                    },
                    {
                        key: 'renderAxis',
                        value: function(pb, qb, rb, sb) {
                            var tb = this.props,
                                ub = tb.width,
                                vb = tb.height;
                            return _pb(o).createElement(A.CartesianAxis, _K({}, pb, {
                                className: 'recharts-'.concat(pb.axisType, ' ').concat(pb.axisType),
                                key: qb.key || ''.concat(rb, '-').concat(sb),
                                viewBox: {
                                    x: 0,
                                    y: 0,
                                    width: ub,
                                    height: vb
                                },
                                ticksGenerator: this.axesTicksGenerator
                            }));
                        }
                    },
                    {
                        key: 'renderClipPath',
                        value: function() {
                            var pb = this.clipPathId,
                                qb = this.state.offset,
                                rb = qb.left,
                                sb = qb.top,
                                tb = qb.height,
                                ub = qb.width;
                            return _pb(o).createElement('defs', null, _pb(o).createElement('clipPath', {
                                id: pb
                            }, _pb(o).createElement('rect', {
                                x: rb,
                                y: sb,
                                height: tb,
                                width: ub
                            })));
                        }
                    },
                    {
                        key: 'getXScales',
                        value: function() {
                            var _pb = this.state.xAxisMap;
                            return _pb ? Object.entries(_pb).reduce(function(qb, rb) {
                                var sb = _P(rb, 2),
                                    tb = sb[0],
                                    ub = sb[1];
                                return _W(_W({}, qb), {}, _X({}, tb, ub.scale));
                            }, {}) : null;
                        }
                    },
                    {
                        key: 'getYScales',
                        value: function() {
                            var pb = this.state.yAxisMap;
                            return pb ? Object.entries(pb).reduce(function(qb, rb) {
                                var sb = _P(rb, 2),
                                    tb = sb[0],
                                    ub = sb[1];
                                return _W(_W({}, qb), {}, _X({}, tb, ub.scale));
                            }, {}) : null;
                        }
                    },
                    {
                        key: 'getXScaleByAxisId',
                        value: function(pb) {
                            var qb, rb;
                            return null === (qb = this.state.xAxisMap) || void 0 === qb || null === (rb = qb[pb]) || void 0 === rb ? void 0 : rb.scale;
                        }
                    },
                    {
                        key: 'getYScaleByAxisId',
                        value: function(pb) {
                            var qb, rb;
                            return null === (qb = this.state.yAxisMap) || void 0 === qb || null === (rb = qb[pb]) || void 0 === rb ? void 0 : rb.scale;
                        }
                    },
                    {
                        key: 'getItemByXY',
                        value: function(pb) {
                            var qb = this.state.formattedGraphicalItems;
                            if (qb && qb.length)
                                for (var rb = 0, sb = qb.length; rb < sb; rb++) {
                                    var tb = qb[rb],
                                        ub = tb.props,
                                        vb = tb.item,
                                        wb = (0, z.getDisplayName)(vb.type);
                                    if ('Bar' === wb) {
                                        var xb = (ub.data || []).find(function(yb) {
                                            return (0, y.isInRectangle)(pb, yb);
                                        });
                                        if (xb)
                                            return {
                                                graphicalItem: tb,
                                                payload: xb
                                            };
                                    } else if ('RadialBar' === wb) {
                                        var xb = (ub.data || []).find(function(yb) {
                                            return (0, G.inRangeOfSector)(pb, yb);
                                        });
                                        if (xb)
                                            return {
                                                graphicalItem: tb,
                                                payload: xb
                                            };
                                    }
                                }
                            return null;
                        }
                    },
                    {
                        key: 'render',
                        value: function() {
                            var pb = this;
                            if (!(0, z.validateWidthHeight)(this))
                                return null;
                            var qb = this.props,
                                rb = qb.children,
                                sb = qb.className,
                                tb = qb.width,
                                ub = qb.height,
                                vb = qb.style,
                                wb = qb.compact,
                                xb = qb.title,
                                yb = qb.desc,
                                zb = _L(qb, [
                                    'children',
                                    'className',
                                    'width',
                                    'height',
                                    'style',
                                    'compact',
                                    'title',
                                    'desc'
                                ]),
                                Ab = (0, J.filterProps)(zb),
                                Bb = {
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
                            if (wb)
                                return _Db(o).createElement(q.Surface, _K({}, Ab, {
                                    width: tb,
                                    height: ub,
                                    title: xb,
                                    desc: yb
                                }), this.renderClipPath(), (0, z.renderByOrder)(rb, Bb));
                            var Cb = this.parseEventsOfWrapper();
                            return _Db(o).createElement('div', _K({
                                className: _Db(p)('recharts-wrapper', sb),
                                style: _W({
                                    position: 'relative',
                                    cursor: 'default',
                                    width: tb,
                                    height: ub
                                }, vb)
                            }, Cb, {
                                ref: function(_Db) {
                                    pb.container = _Db;
                                }
                            }), _c(o).createElement(q.Surface, _K({}, Ab, {
                                width: tb,
                                height: ub,
                                title: xb,
                                desc: yb
                            }), this.renderClipPath(), (0, z.renderByOrder)(rb, Bb)), this.renderLegend(), this.renderTooltip());
                        }
                    }
                ]) && _M(lb.prototype, mb), nb && _M(lb, nb), r;
            }(o.Component), X.displayName = Z, X.defaultProps = _W({
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
            }, hb), X.getDerivedStateFromProps = function(kb, lb) {
                var mb = kb.data,
                    nb = kb.children,
                    ob = kb.width,
                    pb = kb.height,
                    qb = kb.layout,
                    rb = kb.stackOffset,
                    sb = kb.margin;
                if (_c(l)(lb.updateId)) {
                    var tb = T(kb);
                    return _W(_W(_W({}, tb), {}, {
                        updateId: 0
                    }, jb(_W(_W({
                        props: kb
                    }, tb), {}, {
                        updateId: 0
                    }), lb)), {}, {
                        prevData: mb,
                        prevWidth: ob,
                        prevHeight: pb,
                        prevLayout: qb,
                        prevStackOffset: rb,
                        prevMargin: sb,
                        prevChildren: nb
                    });
                }
                if (mb !== lb.prevData || ob !== lb.prevWidth || pb !== lb.prevHeight || qb !== lb.prevLayout || rb !== lb.prevStackOffset || !(0, H.shallowEqual)(sb, lb.prevMargin)) {
                    var tb = T(kb),
                        ub = {
                            chartX: lb.chartX,
                            chartY: lb.chartY,
                            isTooltipActive: lb.isTooltipActive
                        },
                        vb = _W(_W({}, R(lb, mb, qb)), {}, {
                            updateId: lb.updateId + 1
                        }),
                        wb = _W(_W(_W({}, tb), ub), vb);
                    return _W(_W(_W({}, wb), jb(_W({
                        props: kb
                    }, wb), lb)), {}, {
                        prevData: mb,
                        prevWidth: ob,
                        prevHeight: pb,
                        prevLayout: qb,
                        prevStackOffset: rb,
                        prevMargin: sb,
                        prevChildren: nb
                    });
                }
                if (!(0, z.isChildrenEqual)(nb, lb.prevChildren)) {
                    var tb = !_c(l)(mb) ? lb.updateId : lb.updateId + 1;
                    return _W(_W({
                        updateId: tb
                    }, jb(_W(_W({
                        props: kb
                    }, lb), {}, {
                        updateId: tb
                    }), lb)), {}, {
                        prevChildren: nb
                    });
                }
                return null;
            }, X.renderActiveDot = function(kb, lb) {
                var mb;
                return mb = (0, o.isValidElement)(kb) ? (0, o.cloneElement)(kb, lb) : _c(g)(kb) ? kb(lb) : _c(o).createElement(x.Dot, lb), _c(o).createElement(r.Layer, {
                    className: 'recharts-active-dot',
                    key: lb.key
                }, mb);
            }, Y;
        };
}), b.register('rlHfj', function(_c, d) {
    var e = b('PeAfQ'),
        f = b('lzI6/'),
        g = b('Xi1WD'),
        h = b('iieiP0'),
        i = b('Zz9Zw');
    _c.exports = function(j, k, l) {
        var m = h(j) ? e : f;
        return l && i(j, k, l) && (k = void 0), m(j, g(k, 3));
    };
}), b.register('PeAfQ', function(c, d) {
    c.exports = function(e, f) {
        for (var g = -1, h = null == e ? 0 : e.length; ++g < h;)
            if (!f(e[g], g, e))
                return !1;
        return !0;
    };
}), b.register('lzI6/', function(c, d) {
    var e = b('0m0bg');
    c.exports = function(f, g) {
        var h = !0;
        return e(f, function(i, j, k) {
            return h = !!g(i, j, k);
        }), h;
    };
}), b.register('FAWGy', function(c, d) {
    var e = b('YkeDF')(b('Yom5Z'));
    c.exports = e;
}), b.register('YkeDF', function(c, d) {
    var e = b('Xi1WD'),
        f = b('N1KO3'),
        g = b('PccoD');
    c.exports = function(h) {
        return function(i, j, k) {
            var l = Object(i);
            if (!f(i)) {
                var m = e(j, 3);
                i = g(i), j = function(n) {
                    return m(l[n], n, l);
                };
            }
            var m = h(i, j, k);
            return m > -1 ? l[_m ? i[m] : m] : void 0;
        };
    };
}), b.register('Yom5Z', function(c, d) {
    var e = b('Pq82j'),
        f = b('Xi1WD'),
        g = b('EwLN7'),
        h = Math.max;
    c.exports = function(i, j, k) {
        var l = null == i ? 0 : i.length;
        if (!l)
            return -1;
        var _m = null == k ? 0 : g(k);
        return _m < 0 && (_m = h(l + _m, 0)), e(i, f(j, 3), _m);
    };
}), b.register('EwLN7', function(c, d) {
    var e = b('ah2Ki');
    c.exports = function(f) {
        var g = e(f),
            h = g % 1;
        return g == g ? h ? g - h : g : 0;
    };
}), b.register('ah2Ki', function(c, d) {
    var e = b('wzGrF'),
        f = 1 / 0;
    c.exports = function(g) {
        return g ? (g = e(g)) === f || g === -1 / 0 ? 1.7976931348623157e+308 * (g < 0 ? -1 : 1) : g == g ? g : 0 : 0 === g ? g : 0;
    };
}), b.register('wzGrF', function(c, d) {
    var e = b('pbpeS0'),
        f = b('re1Y4'),
        g = /^\s+|\s+$/g,
        h = /^[-+]0x[0-9a-f]+$/i,
        i = /^0b[01]+$/i,
        j = /^0o[0-7]+$/i,
        k = parseInt;
    c.exports = function(l) {
        if ('number' == typeof l)
            return l;
        if (f(l))
            return NaN;
        if (e(l)) {
            var m = 'function' == typeof l.valueOf ? l.valueOf() : l;
            l = e(m) ? m + '' : m;
        }
        if ('string' != typeof l)
            return 0 === l ? l : +l;
        l = l.replace(g, '');
        var m = i.test(l);
        return m || j.test(l) ? k(l.slice(2), m ? 2 : 8) : h.test(l) ? NaN : +l;
    };
}), b.register('ARWqP', function(c, d) {
    var e = b('WA7gy'),
        f = b('pbpeS0');
    c.exports = function(g, h, i) {
        var j = !0,
            k = !0;
        if ('function' != typeof g)
            throw new TypeError('Expected a function');
        return f(i) && (j = 'leading' in i ? !!i.leading : j, k = 'trailing' in i ? !!i.trailing : k), e(g, h, {
            leading: j,
            maxWait: h,
            trailing: k
        });
    };
}), b.register('WA7gy', function(c, d) {
    var e = b('pbpeS0'),
        f = b('DOLGE'),
        g = b('wzGrF'),
        h = Math.max,
        i = Math.min;
    c.exports = function(j, k, l) {
        var m, n, o, p, q, r, s = 0,
            t = !1,
            u = !1,
            v = !0;
        if ('function' != typeof j)
            throw new TypeError('Expected a function');

        function w(x) {
            var y = m,
                z = n;
            return m = n = void 0, s = x, p = j.apply(z, y);
        }

        function w(x) {
            return s = x, q = setTimeout(_w, k), t ? _n(x) : p;
        }

        function w(x) {
            var y = x - r;
            return void 0 === r || y >= k || y < 0 || u && x - s >= o;
        }

        function _w() {
            var x = f();
            if (_n(x))
                return _w(x);
            q = setTimeout(_w, function(y) {
                var z = k - (y - r);
                return u ? i(z, o - (y - s)) : z;
            }(x));
        }

        function _w(x) {
            return q = void 0, v && m ? _n(x) : (m = n = void 0, p);
        }

        function w() {
            var x = f(),
                y = _n(x);
            if (m = arguments, n = this, r = x, y) {
                if (void 0 === q)
                    return _n(r);
                if (u)
                    return clearTimeout(q), q = setTimeout(_n, k), _n(r);
            }
            return void 0 === q && (q = setTimeout(_n, k)), p;
        }
        return k = g(k) || 0, e(l) && (t = !!l.leading, o = (u = 'maxWait' in l) ? h(g(l.maxWait) || 0, k) : o, v = 'trailing' in l ? !!l.trailing : v), _n.cancel = function() {
            void 0 !== q && clearTimeout(q), s = 0, m = r = n = q = void 0;
        }, _n.flush = function() {
            return void 0 === q ? p : _n(f());
        }, _n;
    };
}), b.register('DOLGE', function(c, d) {
    var e = b('5iSxB');
    c.exports = function() {
        return e.Date.now();
    };
}), b.register('8nyEX', function(c, d) {
    var e = b('+4qr9')();
    c.exports = e;
}), b.register('+4qr9', function(c, d) {
    var e = b('EBtMX0'),
        f = b('Zz9Zw'),
        g = b('ah2Ki');
    c.exports = function(h) {
        return function(i, j, k) {
            return k && 'number' != typeof k && f(i, j, k) && (j = k = void 0), i = g(i), void 0 === j ? (j = i, i = 0) : j = g(j), k = void 0 === k ? i < j ? 1 : -1 : g(k), e(i, j, k, h);
        };
    };
}), b.register('EBtMX0', function(c, d) {
    var e = Math.ceil,
        f = Math.max;
    c.exports = function(g, h, i, j) {
        for (var k = -1, l = f(e((h - g) / (i || 1)), 0), m = Array(l); l--;)
            m[j ? l : ++k] = g, g += i;
        return m;
    };
}), b.register('A6m1T', function(c, d) {
    var e = b('5H2CR'),
        f = b('pQneJ0');
    c.exports = function(g) {
        return !0 === g || !1 === g || f(g) && '[object Boolean]' == e(g);
    };
}), b.register('fpVk3', function(c, d) {
    _p(c.exports, 'Tooltip', function() {
        return _o;
    });
    var e = b('4Eoue'),
        f = b('4R9wH'),
        g = b('Krz8v'),
        h = b('LEQ5w');
    b('gChmk');
    var i = b('w9p5I'),
        j = b('JrtKP'),
        k = b('rveZP'),
        l = b('udXfZ'),
        m = b('F2lA2');

    function n(o) {
        return n = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(p) {
            return typeof p;
        } : function(p) {
            return p && 'function' == typeof Symbol && p.constructor === Symbol && p !== Symbol.prototype ? 'symbol' : typeof p;
        }, n(o);
    }

    function n(o, _p) {
        var q = Object.keys(o);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(o);
            _p && (r = r.filter(function(s) {
                return Object.getOwnPropertyDescriptor(o, s).enumerable;
            })), q.push.apply(q, r);
        }
        return q;
    }

    function n(o) {
        for (var p = 1; p < arguments.length; p++) {
            var q = null != arguments[p] ? arguments[p] : {};
            p % 2 ? _A(Object(q), !0).forEach(function(r) {
                _n(o, r, q[r]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(q)) : _A(Object(q)).forEach(function(r) {
                Object.defineProperty(o, r, Object.getOwnPropertyDescriptor(q, r));
            });
        }
        return o;
    }

    function _n(o, p, q) {
        return p in o ? Object.defineProperty(o, p, {
            value: q,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : o[p] = q, o;
    }

    function _n(o, p) {
        if (!(o instanceof p))
            throw new TypeError('Cannot call a class as a function');
    }

    function _n(o, p) {
        for (var q = 0; q < p.length; q++) {
            var r = p[q];
            r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(o, r.key, r);
        }
    }

    function _n(o, p) {
        return _n = Object.setPrototypeOf || function(q, r) {
            return q.__proto__ = r, q;
        }, _n(o, p);
    }

    function _n(o) {
        var p = function() {
            if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ('function' == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
            } catch (o) {
                return !1;
            }
        }();
        return function() {
            var q, r = _n(o);
            if (p) {
                var s = _n(this).constructor;
                q = Reflect.construct(r, arguments, s);
            } else
                q = r.apply(this, arguments);
            return _n(this, q);
        };
    }

    function _n(o, p) {
        return !p || 'object' !== _u(p) && 'function' != typeof p ? function(q) {
            if (void 0 === q)
                throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return q;
        }(o) : p;
    }

    function _n(o) {
        return _n = Object.setPrototypeOf ? Object.getPrototypeOf : function(p) {
            return p.__proto__ || Object.getPrototypeOf(p);
        }, _n(o);
    }
    var n = 'recharts-tooltip-wrapper';

    function o(p) {
        return p.dataKey;
    }
    var _o = function(p) {
        ! function(q, r) {
            if ('function' != typeof r && null !== r)
                throw new TypeError('Super expression must either be null or a function');
            q.prototype = Object.create(r && r.prototype, {
                constructor: {
                    value: q,
                    writable: !0,
                    configurable: !0
                }
            }), r && _D(q, r);
        }(_u, p);
        var q, r, s, t = _E(_u);

        function _u() {
            var v;
            _B(this, _u);
            for (var w = arguments.length, x = new Array(w), y = 0; y < w; y++)
                x[y] = arguments[y];
            return (v = t.call.apply(t, [this].concat(x))).state = {
                boxWidth: -1,
                boxHeight: -1,
                dismissed: !1,
                dismissedAtCoordinate: {
                    x: 0,
                    y: 0
                }
            }, v.wrapperNode = void 0, v.getTranslate = function(z) {
                var A = z.key,
                    B = z.tooltipDimension,
                    C = z.viewBoxDimension,
                    D = v.props,
                    E = D.allowEscapeViewBox,
                    F = D.coordinate,
                    G = D.offset,
                    H = D.position,
                    I = D.viewBox;
                if (H && (0, m.isNumber)(H[A]))
                    return H[A];
                var J = F[A] - B - G,
                    K = F[A] + G;
                return E[A] ? K : F[A] + B + G > I[A] + C ? Math.max(J, I[A]) : Math.max(K, I[A]);
            }, v;
        }
        return q = _z, (r = [{
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
                    var u = this.state,
                        v = u.boxWidth,
                        w = u.boxHeight;
                    if (u.dismissed ? (this.wrapperNode.blur(), this.props.coordinate.x === this.state.dismissedAtCoordinate.x && this.props.coordinate.y === this.state.dismissedAtCoordinate.y || this.setState({
                            dismissed: !1
                        })) : this.wrapperNode.focus({
                            preventScroll: !0
                        }), this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
                        var x = this.wrapperNode.getBoundingClientRect();
                        (Math.abs(x.width - v) > 1 || Math.abs(x.height - w) > 1) && this.setState({
                            boxWidth: x.width,
                            boxHeight: x.height
                        });
                    } else
                        -
                        1 === v && -1 === w || this.setState({
                            boxWidth: -1,
                            boxHeight: -1
                        });
                }
            },
            {
                key: 'render',
                value: function() {
                    var u, v, w, x = this,
                        y = this.props,
                        _z = y.payload,
                        _A = y.isAnimationActive,
                        _B = y.animationDuration,
                        C = y.animationEasing,
                        _D = y.filterNull,
                        _E = function(F, G) {
                            return !0 === F ? _P(g)(G, _v) : _P(f)(F) ? _P(g)(G, F) : G;
                        }(y.payloadUniqBy, _D && _z && _z.length ? _z.filter(function(F) {
                            return !_P(e)(F.value);
                        }) : _z),
                        F = _E && _E.length,
                        G = this.props,
                        H = G.content,
                        I = G.viewBox,
                        J = G.coordinate,
                        K = G.position,
                        L = G.active,
                        M = G.wrapperStyle,
                        N = _k({
                            pointerEvents: 'none',
                            visibility: !this.state.dismissed && L && F ? 'visible' : 'hidden',
                            position: 'absolute',
                            top: 0,
                            left: 0
                        }, M);
                    if (K && (0, m.isNumber)(K.x) && (0, m.isNumber)(K.y))
                        v = K.x, w = K.y;
                    else {
                        var O = this.state,
                            P = O.boxWidth,
                            Q = O.boxHeight;
                        P > 0 && Q > 0 && J ? (v = this.getTranslate({
                            key: 'x',
                            tooltipDimension: P,
                            viewBoxDimension: I.width
                        }), w = this.getTranslate({
                            key: 'y',
                            tooltipDimension: Q,
                            viewBoxDimension: I.height
                        })) : N.visibility = 'hidden';
                    }
                    N = _k(_k({}, (0, i.translateStyle)({
                        transform: this.props.useTranslate3d ? 'translate3d('.concat(v, 'px, ').concat(w, 'px, 0)') : 'translate('.concat(v, 'px, ').concat(w, 'px)')
                    })), N), _A && L && (N = _k(_k({}, (0, i.translateStyle)({
                        transition: 'transform '.concat(_B, 'ms ').concat(C)
                    })), N));
                    var O = _P(j)(n, (_k(u = {}, ''.concat(n, '-right'), (0, m.isNumber)(v) && J && (0, m.isNumber)(J.x) && v >= J.x), _k(u, ''.concat(n, '-left'), (0, m.isNumber)(v) && J && (0, m.isNumber)(J.x) && v < J.x), _k(u, ''.concat(n, '-bottom'), (0, m.isNumber)(w) && J && (0, m.isNumber)(J.y) && w >= J.y), _k(u, ''.concat(n, '-top'), (0, m.isNumber)(w) && J && (0, m.isNumber)(J.y) && w < J.y), u));
                    return _P(h).createElement('div', {
                        tabIndex: -1,
                        role: 'dialog',
                        onKeyDown: function(_P) {
                            'Escape' === _P.key && x.setState({
                                dismissed: !0,
                                dismissedAtCoordinate: _k(_k({}, x.state.dismissedAtCoordinate), {}, {
                                    x: x.props.coordinate.x,
                                    y: x.props.coordinate.y
                                })
                            });
                        },
                        className: O,
                        style: N,
                        ref: function(P) {
                            x.wrapperNode = P;
                        }
                    }, function(P, Q) {
                        return _l(h).isValidElement(P) ? _l(h).cloneElement(P, Q) : _l(f)(P) ? _l(h).createElement(P, Q) : _l(h).createElement(k.DefaultTooltipContent, Q);
                    }(H, _k(_k({}, this.props), {}, {
                        payload: _E
                    })));
                }
            }
        ]) && _k(q.prototype, r), s && _k(q, s), _k;
    }(h.PureComponent);
    _o.displayName = 'Tooltip', _o.defaultProps = {
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
        isAnimationActive: !l.Global.isSsr,
        animationEasing: 'ease',
        animationDuration: 400,
        filterNull: !0,
        useTranslate3d: !1
    };
}), b.register('rveZP', function(c, d) {
    _m(c.exports, 'DefaultTooltipContent', function() {
        return _k;
    });
    var e = b('4Eoue'),
        f = b('02bR4'),
        g = b('iieiP0'),
        h = b('LEQ5w'),
        i = b('JrtKP'),
        j = b('F2lA2');

    function k(_l) {
        return k = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(m) {
            return typeof m;
        } : function(m) {
            return m && 'function' == typeof Symbol && m.constructor === Symbol && m !== Symbol.prototype ? 'symbol' : typeof m;
        }, k(_l);
    }

    function k(l, _m) {
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
                    q || null == g.return || g.return();
                } finally {
                    if (r)
                        throw s;
                }
            }
            return p;
        }(l, _m) || function(n, o) {
            if (!n)
                return;
            if ('string' == typeof n)
                return _k(n, o);
            var p = Object.prototype.toString.call(n).slice(8, -1);
            'Object' === p && n.constructor && (p = n.constructor.name);
            if ('Map' === p || 'Set' === p)
                return Array.from(n);
            if ('Arguments' === p || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p))
                return _k(n, o);
        }(l, _m) || function() {
            throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }

    function _k(l, m) {
        (null == m || m > l.length) && (m = l.length);
        for (var n = 0, o = new Array(m); n < m; n++)
            o[n] = l[n];
        return o;
    }

    function _k(l, m) {
        var n = Object.keys(l);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(l);
            m && (o = o.filter(function(p) {
                return Object.getOwnPropertyDescriptor(l, p).enumerable;
            })), n.push.apply(n, o);
        }
        return n;
    }

    function k(l) {
        for (var m = 1; m < arguments.length; m++) {
            var n = null != arguments[m] ? arguments[m] : {};
            m % 2 ? _D(Object(n), !0).forEach(function(o) {
                _k(l, o, n[o]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(n)) : _D(Object(n)).forEach(function(o) {
                Object.defineProperty(l, o, Object.getOwnPropertyDescriptor(n, o));
            });
        }
        return l;
    }

    function _k(l, m, n) {
        return m in l ? Object.defineProperty(l, m, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : l[m] = n, l;
    }

    function _k(l, m) {
        if (!(l instanceof m))
            throw new TypeError('Cannot call a class as a function');
    }

    function k(l, m) {
        for (var n = 0; n < m.length; n++) {
            var o = m[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(l, o.key, o);
        }
    }

    function _k(l, m) {
        return _k = Object.setPrototypeOf || function(n, o) {
            return n.__proto__ = o, n;
        }, _k(l, m);
    }

    function k(l) {
        var m = function() {
            if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ('function' == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
            } catch (l) {
                return !1;
            }
        }();
        return function() {
            var n, o = _k(l);
            if (m) {
                var p = _k(this).constructor;
                n = Reflect.construct(o, arguments, p);
            } else
                n = o.apply(this, arguments);
            return _k(this, n);
        };
    }

    function _k(l, m) {
        return !m || 'object' !== _q(m) && 'function' != typeof m ? function(n) {
            if (void 0 === n)
                throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return n;
        }(l) : m;
    }

    function _k(l) {
        return _k = Object.setPrototypeOf ? Object.getPrototypeOf : function(m) {
            return m.__proto__ || Object.getPrototypeOf(m);
        }, _k(l);
    }

    function k(l) {
        return _m(g)(l) && (0, j.isNumOrStr)(l[0]) && (0, j.isNumOrStr)(l[1]) ? l.join(' ~ ') : l;
    }
    var _k = function(l) {
        ! function(_m, n) {
            if ('function' != typeof n && null !== n)
                throw new TypeError('Super expression must either be null or a function');
            _m.prototype = Object.create(n && n.prototype, {
                constructor: {
                    value: _m,
                    writable: !0,
                    configurable: !0
                }
            }), n && _s(_m, n);
        }(_q, l);
        var m, n, o, p = _t(_q);

        function _q() {
            return _C(this, _q), p.apply(this, arguments);
        }
        return m = _B, (n = [{
                key: 'renderContent',
                value: function() {
                    var q = this.props,
                        r = q.payload,
                        s = q.separator,
                        t = q.formatter,
                        u = q.itemStyle,
                        v = q.itemSorter;
                    if (r && r.length) {
                        var w = (v ? _w(f)(r, v) : r).map(function(x, y) {
                            if ('none' === x.type)
                                return null;
                            var z = _o({
                                    display: 'block',
                                    paddingTop: 4,
                                    paddingBottom: 4,
                                    color: x.color || '#000'
                                }, u),
                                A = x.formatter || t || _v,
                                _B = x.value,
                                C = x.name;
                            if (A && null != _B && null != C) {
                                var _D = A(_B, C, x, y, r);
                                if (Array.isArray(_D)) {
                                    var E = _y(_D, 2);
                                    _B = E[0], C = E[1];
                                } else
                                    _B = _D;
                            }
                            return _w(h).createElement('li', {
                                className: 'recharts-tooltip-item',
                                key: 'tooltip-item-'.concat(y),
                                style: z
                            }, (0, j.isNumOrStr)(C) ? _w(h).createElement('span', {
                                className: 'recharts-tooltip-item-name'
                            }, C) : null, (0, j.isNumOrStr)(C) ? _w(h).createElement('span', {
                                className: 'recharts-tooltip-item-separator'
                            }, s) : null, _w(h).createElement('span', {
                                className: 'recharts-tooltip-item-value'
                            }, _B), _w(h).createElement('span', {
                                className: 'recharts-tooltip-item-unit'
                            }, x.unit || ''));
                        });
                        return _w(h).createElement('ul', {
                            className: 'recharts-tooltip-item-list',
                            style: {
                                padding: 0,
                                margin: 0
                            }
                        }, w);
                    }
                    return null;
                }
            },
            {
                key: 'render',
                value: function() {
                    var q = this.props,
                        r = q.wrapperClassName,
                        s = q.contentStyle,
                        t = q.labelClassName,
                        u = q.labelStyle,
                        v = q.label,
                        w = q.labelFormatter,
                        x = q.payload,
                        _y = _o({
                            margin: 0,
                            padding: 10,
                            backgroundColor: '#fff',
                            border: '1px solid #ccc',
                            whiteSpace: 'nowrap'
                        }, s),
                        z = _o({
                            margin: 0
                        }, u),
                        A = !_w(e)(v),
                        B = A ? v : '',
                        _C = _w(i)('recharts-default-tooltip', r),
                        D = _w(i)('recharts-tooltip-label', t);
                    return A && w && null != x && (B = w(v, x)), _w(h).createElement('div', {
                        className: _C,
                        style: _y
                    }, _w(h).createElement('p', {
                        className: D,
                        style: z
                    }, _w(h).isValidElement(B) ? B : ''.concat(B)), this.renderContent());
                }
            }
        ]) && _r(m.prototype, n), o && _r(m, o), _k;
    }(h.PureComponent);
    _k.displayName = 'DefaultTooltipContent', _k.defaultProps = {
        separator: ' : ',
        contentStyle: {},
        itemStyle: {},
        labelStyle: {}
    };
}), b.register('ueUAP', function(c, d) {
    _x(c.exports, 'Curve', function() {
        return _z;
    });
    var e = b('iieiP0'),
        f = b('MYM0h'),
        g = b('4R9wH'),
        h = b('LEQ5w'),
        i = b('ts/H3'),
        j = b('aofFd'),
        _k = b('H5hy0'),
        l = b('ut9Oo'),
        m = b('nRksy'),
        n = b('s3J93'),
        _o = b('QJHrN'),
        p = b('+oORU'),
        q = b('whVcs'),
        _r = b('Nq8Vb'),
        _s = b('JrtKP'),
        _t = b('SLFbE'),
        u = b('F2lA2');

    function v(_w) {
        return v = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(x) {
            return typeof x;
        } : function(x) {
            return x && 'function' == typeof Symbol && x.constructor === Symbol && x !== Symbol.prototype ? 'symbol' : typeof x;
        }, v(_w);
    }

    function _v() {
        return _v = Object.assign || function(w) {
            for (var _x = 1; _x < arguments.length; _x++) {
                var y = arguments[_x];
                for (var z in y)
                    Object.prototype.hasOwnProperty.call(y, z) && (w[z] = y[z]);
            }
            return w;
        }, _v.apply(this, arguments);
    }

    function v(w, x) {
        var y = Object.keys(w);
        if (Object.getOwnPropertySymbols) {
            var z = Object.getOwnPropertySymbols(w);
            x && (z = z.filter(function(A) {
                return Object.getOwnPropertyDescriptor(w, A).enumerable;
            })), y.push.apply(y, z);
        }
        return y;
    }

    function _v(w) {
        for (var x = 1; x < arguments.length; x++) {
            var y = null != arguments[x] ? arguments[x] : {};
            x % 2 ? _ab(Object(y), !0).forEach(function(z) {
                _v(w, z, y[z]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(w, Object.getOwnPropertyDescriptors(y)) : _ab(Object(y)).forEach(function(z) {
                Object.defineProperty(w, z, Object.getOwnPropertyDescriptor(y, z));
            });
        }
        return w;
    }

    function _v(w, x, y) {
        return x in w ? Object.defineProperty(w, x, {
            value: y,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : w[x] = y, w;
    }

    function v(w, x) {
        if (!(w instanceof x))
            throw new TypeError('Cannot call a class as a function');
    }

    function v(w, x) {
        for (var y = 0; y < x.length; y++) {
            var z = x[y];
            z.enumerable = z.enumerable || !1, z.configurable = !0, 'value' in z && (z.writable = !0), Object.defineProperty(w, z.key, z);
        }
    }

    function v(w, x) {
        return v = Object.setPrototypeOf || function(y, z) {
            return y.__proto__ = z, y;
        }, v(w, x);
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
            var y, z = _v(w);
            if (x) {
                var A = _v(this).constructor;
                y = Reflect.construct(z, arguments, A);
            } else
                y = z.apply(this, arguments);
            return _v(this, y);
        };
    }

    function _v(w, x) {
        return !x || 'object' !== _F(x) && 'function' != typeof x ? function(y) {
            if (void 0 === y)
                throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return y;
        }(w) : x;
    }

    function _v(w) {
        return _v = Object.setPrototypeOf ? Object.getPrototypeOf : function(x) {
            return x.__proto__ || Object.getPrototypeOf(x);
        }, _v(w);
    }
    var v = {
            curveBasisClosed: _k.default,
            curveBasisOpen: l.default,
            curveBasis: j.default,
            curveLinearClosed: n.default,
            curveLinear: m.default,
            curveMonotoneX: _o.monotoneX,
            curveMonotoneY: _o.monotoneY,
            curveNatural: p.default,
            curveStep: q.default,
            curveStepAfter: q.stepAfter,
            curveStepBefore: q.stepBefore
        },
        w = function(x) {
            return x.x === +x.x && x.y === +x.y;
        },
        x = function(y) {
            return y.x;
        },
        y = function(z) {
            return z.y;
        },
        _z = function(A) {
            ! function(B, C) {
                if ('function' != typeof C && null !== C)
                    throw new TypeError('Super expression must either be null or a function');
                B.prototype = Object.create(C && C.prototype, {
                    constructor: {
                        value: B,
                        writable: !0,
                        configurable: !0
                    }
                }), C && _fb(B, C);
            }(_k, A);
            var B, C, D, E = _gb(_k);

            function F() {
                return _db(this, F), E.apply(this, arguments);
            }
            return B = _k, (C = [{
                    key: 'getPath',
                    value: function() {
                        var F, G = this.props,
                            H = G.type,
                            I = G.points,
                            J = G.baseLine,
                            K = G.layout,
                            L = G.connectNulls,
                            M = function(N, O) {
                                if (_O(g)(N))
                                    return N;
                                var P = 'curve'.concat(_O(f)(N));
                                return 'curveMonotone' === P && O ? v[''.concat(P).concat('vertical' === O ? 'Y' : 'X')] : v[P] || m.default;
                            }(H, K),
                            N = L ? I.filter(function(_O) {
                                return w(_O);
                            }) : I;
                        if (_P(e)(J)) {
                            var O = L ? J.filter(function(_P) {
                                    return w(_P);
                                }) : J,
                                P = N.map(function(Q, R) {
                                    return _bb(_bb({}, Q), {}, {
                                        base: O[R]
                                    });
                                });
                            return (F = 'vertical' === K ? (0, i.default)().y(y).x1(x).x0(function(Q) {
                                return Q.base.x;
                            }) : (0, i.default)().x(x).y1(y).y0(function(Q) {
                                return Q.base.y;
                            })).defined(w).curve(M), F(P);
                        }
                        return (F = 'vertical' === K && (0, u.isNumber)(J) ? (0, i.default)().y(y).x1(x).x0(J) : (0, u.isNumber)(J) ? (0, i.default)().x(x).y1(y).y0(J) : (0, _r.default)().x(x).y(y)).defined(w).curve(M), F(N);
                    }
                },
                {
                    key: 'render',
                    value: function() {
                        var F = this.props,
                            G = F.className,
                            H = F.points,
                            I = F.path,
                            J = F.pathRef;
                        if (!(H && H.length || I))
                            return null;
                        var K = H && H.length ? this.getPath() : I;
                        return _c(h).createElement('path', _$({}, (0, _t.filterProps)(this.props), (0, _t.adaptEventHandlers)(this.props), {
                            className: _c(_s)('recharts-curve', G),
                            d: K,
                            ref: J
                        }));
                    }
                }
            ]) && _eb(B.prototype, C), D && _eb(B, D), _k;
        }(h.PureComponent);
    _z.defaultProps = {
        type: 'linear',
        points: [],
        connectNulls: !1
    };
}), b.register('ts/H3', function(_c, d) {
    _m(_c.exports, 'default', function() {
        return _k;
    });
    var e = b('F+kS7'),
        f = b('lyjZG'),
        g = b('B1fhv'),
        h = b('nRksy'),
        i = b('Nq8Vb'),
        j = b('K8K9L');

    function _k(l, _m, n) {
        var o = null,
            p = (0, g.default)(!0),
            q = null,
            r = h.default,
            s = null;

        function t(u) {
            var v, w, x, y, z, A = (u = (0, f.default)(u)).length,
                B = !1,
                C = new Array(A),
                D = new Array(A);
            for (null == q && (s = r(z = (0, e.default)())), v = 0; v <= A; ++v) {
                if (!(v < A && p(y = u[v], v, u)) === B)
                    if (B = !B)
                        w = v, s.areaStart(), s.lineStart();
                    else {
                        for (s.lineEnd(), s.lineStart(), x = v - 1; x >= w; --x)
                            s.point(C[x], D[x]);
                        s.lineEnd(), s.areaEnd();
                    }
                B && (C[v] = +l(y, v, u), D[v] = +_m(y, v, u), s.point(o ? +o(y, v, u) : C[v], n ? +n(y, v, u) : D[v]));
            }
            if (z)
                return s = null, z + '' || null;
        }

        function t() {
            return (0, i.default)().defined(p).curve(r).context(q);
        }
        return l = 'function' == typeof l ? l : void 0 === l ? j.x : (0, g.default)(+l), _m = 'function' == typeof _m ? _m : void 0 === _m ? (0, g.default)(0) : (0, g.default)(+_m), n = 'function' == typeof n ? n : void 0 === n ? j.y : (0, g.default)(+n), _i.x = function(t) {
            return arguments.length ? (l = 'function' == typeof t ? t : (0, g.default)(+t), o = null, _i) : l;
        }, _i.x0 = function(t) {
            return arguments.length ? (l = 'function' == typeof t ? t : (0, g.default)(+t), _i) : l;
        }, _i.x1 = function(t) {
            return arguments.length ? (o = null == t ? null : 'function' == typeof t ? t : (0, g.default)(+t), _i) : o;
        }, _i.y = function(t) {
            return arguments.length ? (_m = 'function' == typeof t ? t : (0, g.default)(+t), n = null, _i) : _m;
        }, _i.y0 = function(t) {
            return arguments.length ? (_m = 'function' == typeof t ? t : (0, g.default)(+t), _i) : _m;
        }, _i.y1 = function(t) {
            return arguments.length ? (n = null == t ? null : 'function' == typeof t ? t : (0, g.default)(+t), _i) : n;
        }, _i.lineX0 = _i.lineY0 = function() {
            return _i().x(l).y(_m);
        }, _i.lineY1 = function() {
            return _i().x(l).y(n);
        }, _i.lineX1 = function() {
            return _i().x(o).y(_m);
        }, _i.defined = function(t) {
            return arguments.length ? (p = 'function' == typeof t ? t : (0, g.default)(!!t), _i) : p;
        }, _i.curve = function(t) {
            return arguments.length ? (r = t, null != q && (s = r(q)), _i) : r;
        }, _i.context = function(t) {
            return arguments.length ? (null == t ? q = s = null : s = r(q = t), _i) : q;
        }, _i;
    }
}), b.register('nRksy', function(c, d) {
    function e(f) {
        this._context = f;
    }

    function e(f) {
        return new b(f);
    }
    _f(c.exports, 'default', function() {
        return _e;
    }), b.prototype = {
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
        point: function(e, _f) {
            switch (e = +e, _f = +_f, this._point) {
                case 0:
                    this._point = 1, this._line ? this._context.lineTo(e, _f) : this._context.moveTo(e, _f);
                    break;
                case 1:
                    this._point = 2;
                default:
                    this._context.lineTo(e, _f);
            }
        }
    };
}), b.register('Nq8Vb', function(c, d) {
    _l(c.exports, 'default', function() {
        return _j;
    });
    var _e = b('F+kS7'),
        f = b('lyjZG'),
        g = b('B1fhv'),
        h = b('nRksy'),
        i = b('K8K9L');

    function _j(k, _l) {
        var m = (0, g.default)(!0),
            n = null,
            o = h.default,
            p = null;

        function q(r) {
            var s, t, u, v = (r = (0, f.default)(r)).length,
                w = !1;
            for (null == n && (p = o(u = (0, _e.default)())), s = 0; s <= v; ++s)
                !(s < v && m(t = r[s], s, r)) === w && ((w = !w) ? p.lineStart() : p.lineEnd()), w && p.point(+k(t, s, r), +_l(t, s, r));
            if (u)
                return p = null, u + '' || null;
        }
        return k = 'function' == typeof k ? k : void 0 === k ? i.x : (0, g.default)(k), _l = 'function' == typeof _l ? _l : void 0 === _l ? i.y : (0, g.default)(_l), _e.x = function(q) {
            return arguments.length ? (k = 'function' == typeof q ? q : (0, g.default)(+q), _e) : k;
        }, _e.y = function(q) {
            return arguments.length ? (_l = 'function' == typeof q ? q : (0, g.default)(+q), _e) : _l;
        }, _e.defined = function(q) {
            return arguments.length ? (m = 'function' == typeof q ? q : (0, g.default)(!!q), _e) : m;
        }, _e.curve = function(q) {
            return arguments.length ? (o = q, null != n && (p = o(n)), _e) : o;
        }, _e.context = function(q) {
            return arguments.length ? (null == q ? n = p = null : p = o(n = q), _e) : n;
        }, _e;
    }
}), b.register('K8K9L', function(c, d) {
    function e(f) {
        return f[0];
    }

    function e(f) {
        return f[1];
    }
    _g(c.exports, 'x', function() {
        return b;
    }), _g(c.exports, 'y', function() {
        return _e;
    });
}), b.register('aofFd', function(c, d) {
    function e(f, _g, h) {
        f._context.bezierCurveTo((2 * f._x0 + f._x1) / 3, (2 * f._y0 + f._y1) / 3, (f._x0 + 2 * f._x1) / 3, (f._y0 + 2 * f._y1) / 3, (f._x0 + 4 * f._x1 + _g) / 6, (f._y0 + 4 * f._y1 + h) / 6);
    }

    function _e(f) {
        this._context = f;
    }

    function e(f) {
        return new _e(f);
    }
    _f(c.exports, 'point', function() {
        return b;
    }), _f(c.exports, 'default', function() {
        return _f;
    }), _e.prototype = {
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
                    b(this, this._x1, this._y1);
                case 2:
                    this._context.lineTo(this._x1, this._y1);
            }
            (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
        },
        point: function(e, _f) {
            switch (e = +e, _f = +_f, this._point) {
                case 0:
                    this._point = 1, this._line ? this._context.lineTo(e, _f) : this._context.moveTo(e, _f);
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
                default:
                    b(this, e, _f);
            }
            this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = _f;
        }
    };
}), b.register('H5hy0', function(c, d) {
    _h(c.exports, 'default', function() {
        return _g;
    });
    var _e = b('g9ZHJ'),
        _f = b('aofFd');

    function g(h) {
        this._context = h;
    }

    function _g(h) {
        return new _f(h);
    }
    _f.prototype = {
        areaStart: _e.default,
        areaEnd: _e.default,
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
        point: function(g, _h) {
            switch (g = +g, _h = +_h, this._point) {
                case 0:
                    this._point = 1, this._x2 = g, this._y2 = _h;
                    break;
                case 1:
                    this._point = 2, this._x3 = g, this._y3 = _h;
                    break;
                case 2:
                    this._point = 3, this._x4 = g, this._y4 = _h, this._context.moveTo((this._x0 + 4 * this._x1 + g) / 6, (this._y0 + 4 * this._y1 + _h) / 6);
                    break;
                default:
                    (0, _f.point)(this, g, _h);
            }
            this._x0 = this._x1, this._x1 = g, this._y0 = this._y1, this._y1 = _h;
        }
    };
}), b.register('g9ZHJ', function(c, d) {
    function e() {}
    _g(c.exports, 'default', function() {
        return b;
    });
}), b.register('ut9Oo', function(c, d) {
    _g(c.exports, 'default', function() {
        return _f;
    });
    var e = b('aofFd');

    function f(g) {
        this._context = g;
    }

    function _f(g) {
        return new _f(g);
    }
    _f.prototype = {
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
        point: function(f, _g) {
            switch (f = +f, _g = +_g, this._point) {
                case 0:
                    this._point = 1;
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    this._point = 3;
                    var h = (this._x0 + 4 * this._x1 + f) / 6,
                        i = (this._y0 + 4 * this._y1 + _g) / 6;
                    this._line ? this._context.lineTo(h, i) : this._context.moveTo(h, i);
                    break;
                case 3:
                    this._point = 4;
                default:
                    (0, e.point)(this, f, _g);
            }
            this._x0 = this._x1, this._x1 = f, this._y0 = this._y1, this._y1 = _g;
        }
    };
}), b.register('s3J93', function(c, d) {
    _g(c.exports, 'default', function() {
        return _f;
    });
    var e = b('g9ZHJ');

    function _f(g) {
        this._context = g;
    }

    function _f(g) {
        return new _j(g);
    }
    _j.prototype = {
        areaStart: e.default,
        areaEnd: e.default,
        lineStart: function() {
            this._point = 0;
        },
        lineEnd: function() {
            this._point && this._context.closePath();
        },
        point: function(f, _g) {
            f = +f, _g = +_g, this._point ? this._context.lineTo(f, _g) : (this._point = 1, this._context.moveTo(f, _g));
        }
    };
}), b.register('QJHrN', function(c, d) {
    function e(f) {
        return f < 0 ? -1 : 1;
    }

    function e(f, g, h) {
        var i = f._x1 - f._x0,
            _j = g - f._x1,
            k = (f._y1 - f._y0) / (i || _j < 0 && -0),
            l = (h - f._y1) / (_j || i < 0 && -0),
            m = (k * _j + l * i) / (i + _j);
        return (b(k) + b(l)) * Math.min(Math.abs(k), Math.abs(l), 0.5 * Math.abs(m)) || 0;
    }

    function e(f, g) {
        var h = f._x1 - f._x0;
        return h ? (3 * (f._y1 - f._y0) / h - g) / 2 : g;
    }

    function e(f, g, h) {
        var i = f._x0,
            j = f._y0,
            k = f._x1,
            l = f._y1,
            m = (k - i) / 3;
        f._context.bezierCurveTo(i + m, j + m * g, k - m, l - m * h, k, l);
    }

    function e(f) {
        this._context = f;
    }

    function e(f) {
        this._context = new _e(f);
    }

    function _e(f) {
        this._context = f;
    }

    function e(f) {
        return new _k(f);
    }

    function _e(f) {
        return new _h(f);
    }
    _f(c.exports, 'monotoneX', function() {
        return _i;
    }), _f(c.exports, 'monotoneY', function() {
        return _i;
    }), _k.prototype = {
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
                    _l(this, this._t0, _j(this, this._t0));
            }
            (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
        },
        point: function(e, _f) {
            var g = NaN;
            if (_f = +_f, (e = +e) !== this._x1 || _f !== this._y1) {
                switch (this._point) {
                    case 0:
                        this._point = 1, this._line ? this._context.lineTo(e, _f) : this._context.moveTo(e, _f);
                        break;
                    case 1:
                        this._point = 2;
                        break;
                    case 2:
                        this._point = 3, _l(this, _j(this, g = _i(this, e, _f)), g);
                        break;
                    default:
                        _l(this, this._t0, g = _i(this, e, _f));
                }
                this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = _f, this._t0 = g;
            }
        }
    }, (_h.prototype = Object.create(_k.prototype)).point = function(e, f) {
        _k.prototype.point.call(this, f, e);
    }, _i.prototype = {
        moveTo: function(e, f) {
            this._context.moveTo(f, e);
        },
        closePath: function() {
            this._context.closePath();
        },
        lineTo: function(e, f) {
            this._context.lineTo(f, e);
        },
        bezierCurveTo: function(e, f, g, h, _i, _j) {
            this._context.bezierCurveTo(f, e, h, g, _j, _i);
        }
    };
}), b.register('+oORU', function(c, d) {
    function e(f) {
        this._context = f;
    }

    function e(f) {
        var g, h, i = f.length - 1,
            j = new Array(i),
            k = new Array(i),
            _l = new Array(i);
        for (j[0] = 0, k[0] = 2, _l[0] = f[0] + 2 * f[1], g = 1; g < i - 1; ++g)
            j[g] = 1, k[g] = 4, _l[g] = 4 * f[g] + 2 * f[g + 1];
        for (j[i - 1] = 2, k[i - 1] = 7, _l[i - 1] = 8 * f[i - 1] + f[i], g = 1; g < i; ++g)
            h = j[g] / k[g - 1], k[g] -= h, _l[g] -= h * _l[g - 1];
        for (j[i - 1] = _l[i - 1] / k[i - 1], g = i - 2; g >= 0; --g)
            j[g] = (_l[g] - j[g + 1]) / k[g];
        for (k[i - 1] = (f[i] + j[i - 1]) / 2, g = 0; g < i - 1; ++g)
            k[g] = 2 * f[g + 1] - j[g + 1];
        return [
            j,
            k
        ];
    }

    function e(f) {
        return new b(f);
    }
    _f(c.exports, 'default', function() {
        return _i;
    }), b.prototype = {
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
            var e = this._x,
                _f = this._y,
                g = e.length;
            if (g)
                if (this._line ? this._context.lineTo(e[0], _f[0]) : this._context.moveTo(e[0], _f[0]), 2 === g)
                    this._context.lineTo(e[1], _f[1]);
                else
                    for (var h = _e(e), _i = _e(_f), j = 0, _k = 1; _k < g; ++j, ++_k)
                        this._context.bezierCurveTo(h[0][j], _i[0][j], h[1][j], _i[1][j], e[_k], _f[_k]);
            (this._line || 0 !== this._line && 1 === g) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
        },
        point: function(e, f) {
            this._x.push(+e), this._y.push(+f);
        }
    };
}), b.register('whVcs', function(c, d) {
    function e(f, g) {
        this._context = f, this._t = g;
    }

    function _e(f) {
        return new b(f, 0.5);
    }

    function e(f) {
        return new b(f, 0);
    }

    function e(f) {
        return new b(f, 1);
    }
    _f(c.exports, 'default', function() {
        return _d;
    }), _f(c.exports, 'stepBefore', function() {
        return _e;
    }), _f(c.exports, 'stepAfter', function() {
        return _f;
    }), b.prototype = {
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
        point: function(e, _f) {
            switch (e = +e, _f = +_f, this._point) {
                case 0:
                    this._point = 1, this._line ? this._context.lineTo(e, _f) : this._context.moveTo(e, _f);
                    break;
                case 1:
                    this._point = 2;
                default:
                    if (this._t <= 0)
                        this._context.lineTo(this._x, _f), this._context.lineTo(e, _f);
                    else {
                        var g = this._x * (1 - this._t) + e * this._t;
                        this._context.lineTo(g, this._y), this._context.lineTo(g, _f);
                    }
            }
            this._x = e, this._y = _f;
        }
    };
}), b.register('+TBpG', function(c, _d) {
    _k(c.exports, 'Cross', function() {
        return _i;
    });
    var _e = b('LEQ5w'),
        _f = b('JrtKP'),
        g = b('F2lA2'),
        _h = b('SLFbE');

    function _i(j) {
        return _i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(k) {
            return typeof k;
        } : function(k) {
            return k && 'function' == typeof Symbol && k.constructor === Symbol && k !== Symbol.prototype ? 'symbol' : typeof k;
        }, _i(j);
    }

    function _i() {
        return _i = Object.assign || function(j) {
            for (var _k = 1; _k < arguments.length; _k++) {
                var l = arguments[_k];
                for (var m in l)
                    Object.prototype.hasOwnProperty.call(l, m) && (j[m] = l[m]);
            }
            return j;
        }, _i.apply(this, arguments);
    }

    function _i(j, k) {
        if (!(j instanceof k))
            throw new TypeError('Cannot call a class as a function');
    }

    function i(j, k) {
        for (var l = 0; l < k.length; l++) {
            var m = k[l];
            m.enumerable = m.enumerable || !1, m.configurable = !0, 'value' in m && (m.writable = !0), Object.defineProperty(j, m.key, m);
        }
    }

    function i(j, k) {
        return i = Object.setPrototypeOf || function(l, m) {
            return l.__proto__ = m, l;
        }, i(j, k);
    }

    function _i(j) {
        var k = function() {
            if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ('function' == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
            } catch (j) {
                return !1;
            }
        }();
        return function() {
            var l, m = _i(j);
            if (k) {
                var n = _i(this).constructor;
                l = Reflect.construct(m, arguments, n);
            } else
                l = m.apply(this, arguments);
            return _i(this, l);
        };
    }

    function _i(j, k) {
        return !k || 'object' !== _n(k) && 'function' != typeof k ? function(l) {
            if (void 0 === l)
                throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return l;
        }(j) : k;
    }

    function _i(j) {
        return _i = Object.setPrototypeOf ? Object.getPrototypeOf : function(k) {
            return k.__proto__ || Object.getPrototypeOf(k);
        }, _i(j);
    }
    var _i = function(j) {
        ! function(k, l) {
            if ('function' != typeof l && null !== l)
                throw new TypeError('Super expression must either be null or a function');
            k.prototype = Object.create(l && l.prototype, {
                constructor: {
                    value: k,
                    writable: !0,
                    configurable: !0
                }
            }), l && _v(k, l);
        }(_o, j);
        var k, l, m, _n = _j(_o);

        function _o() {
            return _t(this, _o), _n.apply(this, arguments);
        }
        return k = _j, m = [{
            key: 'getPath',
            value: function(o, p, q, r, s, t) {
                return 'M'.concat(o, ',').concat(s, 'v').concat(r, 'M').concat(t, ',').concat(p, 'h').concat(q);
            }
        }], (l = [{
            key: 'render',
            value: function() {
                var o = this.props,
                    p = o.x,
                    q = o.y,
                    r = o.width,
                    s = o.height,
                    _t = o.top,
                    u = o.left,
                    _v = o.className;
                return (0, g.isNumber)(p) && (0, g.isNumber)(q) && (0, g.isNumber)(r) && (0, g.isNumber)(s) && (0, g.isNumber)(_t) && (0, g.isNumber)(u) ? _k(_e).createElement('path', _j({}, (0, _h.filterProps)(this.props, !0), {
                    className: _k(_f)('recharts-cross', _v),
                    d: _j.getPath(p, q, r, s, _t, u)
                })) : null;
            }
        }]) && _j(k.prototype, l), m && _j(k, m), _j;
    }(_e.PureComponent);
    _i.defaultProps = {
        x: 0,
        y: 0,
        top: 0,
        left: 0,
        width: 0,
        height: 0
    };
}), b.register('wTRCU', function(c, d) {
    _l(c.exports, 'Sector', function() {
        return _l;
    });
    var e = b('LEQ5w'),
        f = b('JrtKP'),
        g = b('SLFbE'),
        h = b('zXKbN'),
        i = b('F2lA2');

    function _j(_k) {
        return _j = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(l) {
            return typeof l;
        } : function(l) {
            return l && 'function' == typeof Symbol && l.constructor === Symbol && l !== Symbol.prototype ? 'symbol' : typeof l;
        }, _j(_k);
    }

    function j() {
        return j = Object.assign || function(k) {
            for (var _l = 1; _l < arguments.length; _l++) {
                var m = arguments[_l];
                for (var n in m)
                    Object.prototype.hasOwnProperty.call(m, n) && (k[n] = m[n]);
            }
            return k;
        }, j.apply(this, arguments);
    }

    function _j(k, l) {
        if (!(k instanceof l))
            throw new TypeError('Cannot call a class as a function');
    }

    function j(k, l) {
        for (var m = 0; m < l.length; m++) {
            var n = l[m];
            n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(k, n.key, n);
        }
    }

    function _j(k, l) {
        return _j = Object.setPrototypeOf || function(m, n) {
            return m.__proto__ = n, m;
        }, _j(k, l);
    }

    function _j(k) {
        var l = function() {
            if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ('function' == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
            } catch (k) {
                return !1;
            }
        }();
        return function() {
            var m, n = _j(k);
            if (l) {
                var o = _j(this).constructor;
                m = Reflect.construct(n, arguments, o);
            } else
                m = n.apply(this, arguments);
            return _j(this, m);
        };
    }

    function _j(k, l) {
        return !l || 'object' !== _t(l) && 'function' != typeof l ? function(m) {
            if (void 0 === m)
                throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return m;
        }(k) : l;
    }

    function _j(k) {
        return _j = Object.setPrototypeOf ? Object.getPrototypeOf : function(l) {
            return l.__proto__ || Object.getPrototypeOf(l);
        }, _j(k);
    }
    var j = function(k) {
            var l = k.cx,
                m = k.cy,
                n = k.radius,
                o = k.angle,
                p = k.sign,
                q = k.isExternal,
                r = k.cornerRadius,
                s = k.cornerIsExternal,
                _t = r * (q ? 1 : -1) + n,
                u = Math.asin(r / _t) / h.RADIAN,
                v = s ? o : o + p * u,
                w = s ? o - p * u : o;
            return {
                center: (0, h.polarToCartesian)(l, m, _t, v),
                circleTangency: (0, h.polarToCartesian)(l, m, n, v),
                lineTangency: (0, h.polarToCartesian)(l, m, _t * Math.cos(u * h.RADIAN), w),
                theta: u
            };
        },
        k = function(l) {
            var m = l.cx,
                n = l.cy,
                o = l.innerRadius,
                p = l.outerRadius,
                q = l.startAngle,
                r = function(s, t) {
                    return (0, i.mathSign)(t - s) * Math.min(Math.abs(t - s), 359.999);
                }(q, l.endAngle),
                s = q + r,
                t = (0, h.polarToCartesian)(m, n, p, q),
                u = (0, h.polarToCartesian)(m, n, p, s),
                v = 'M '.concat(t.x, ',').concat(t.y, '\n    A ').concat(p, ',').concat(p, ',0,\n    ').concat(+(Math.abs(r) > 180), ',').concat(+(q > s), ',\n    ').concat(u.x, ',').concat(u.y, '\n  ');
            if (o > 0) {
                var w = (0, h.polarToCartesian)(m, n, o, q),
                    x = (0, h.polarToCartesian)(m, n, o, s);
                v += 'L '.concat(x.x, ',').concat(x.y, '\n            A ').concat(o, ',').concat(o, ',0,\n            ').concat(+(Math.abs(r) > 180), ',').concat(+(q <= s), ',\n            ').concat(w.x, ',').concat(w.y, ' Z');
            } else
                v += 'L '.concat(m, ',').concat(n, ' Z');
            return v;
        },
        _l = function(m) {
            ! function(n, o) {
                if ('function' != typeof o && null !== o)
                    throw new TypeError('Super expression must either be null or a function');
                n.prototype = Object.create(o && o.prototype, {
                    constructor: {
                        value: n,
                        writable: !0,
                        configurable: !0
                    }
                }), o && _z(n, o);
            }(_r, m);
            var n, o, p, q = _A(_r);

            function _r() {
                return _x(this, _r), q.apply(this, arguments);
            }
            return n = _w, (o = [{
                key: 'render',
                value: function() {
                    var r = this.props,
                        s = r.cx,
                        t = r.cy,
                        u = r.innerRadius,
                        v = r.outerRadius,
                        _w = r.cornerRadius,
                        _x = r.forceCornerRadius,
                        y = r.cornerIsExternal,
                        _z = r.startAngle,
                        _A = r.endAngle,
                        B = r.className;
                    if (v < u || _z === _A)
                        return null;
                    var C, D = _G(f)('recharts-sector', B),
                        E = v - u,
                        _F = (0, i.getPercentValue)(_w, E, 0, !0);
                    return C = _F > 0 && Math.abs(_z - _A) < 360 ? function(_G) {
                        var H = _G.cx,
                            I = _G.cy,
                            J = _G.innerRadius,
                            K = _G.outerRadius,
                            L = _G.cornerRadius,
                            M = _G.forceCornerRadius,
                            N = _G.cornerIsExternal,
                            O = _G.startAngle,
                            P = _G.endAngle,
                            Q = (0, i.mathSign)(P - O),
                            R = j({
                                cx: H,
                                cy: I,
                                radius: K,
                                angle: O,
                                sign: Q,
                                cornerRadius: L,
                                cornerIsExternal: N
                            }),
                            S = R.circleTangency,
                            T = R.lineTangency,
                            U = R.theta,
                            V = j({
                                cx: H,
                                cy: I,
                                radius: K,
                                angle: P,
                                sign: -Q,
                                cornerRadius: L,
                                cornerIsExternal: N
                            }),
                            W = V.circleTangency,
                            X = V.lineTangency,
                            Y = V.theta,
                            Z = N ? Math.abs(O - P) : Math.abs(O - P) - U - Y;
                        if (Z < 0)
                            return M ? 'M '.concat(T.x, ',').concat(T.y, '\n        a').concat(L, ',').concat(L, ',0,0,1,').concat(2 * L, ',0\n        a').concat(L, ',').concat(L, ',0,0,1,').concat(2 * -L, ',0\n      ') : k({
                                cx: H,
                                cy: I,
                                innerRadius: J,
                                outerRadius: K,
                                startAngle: O,
                                endAngle: P
                            });
                        var _$ = 'M '.concat(T.x, ',').concat(T.y, '\n    A').concat(L, ',').concat(L, ',0,0,').concat(+(Q < 0), ',').concat(S.x, ',').concat(S.y, '\n    A').concat(K, ',').concat(K, ',0,').concat(+(Z > 180), ',').concat(+(Q < 0), ',').concat(W.x, ',').concat(W.y, '\n    A').concat(L, ',').concat(L, ',0,0,').concat(+(Q < 0), ',').concat(X.x, ',').concat(X.y, '\n  ');
                        if (J > 0) {
                            var _ab = j({
                                    cx: H,
                                    cy: I,
                                    radius: J,
                                    angle: O,
                                    sign: Q,
                                    isExternal: !0,
                                    cornerRadius: L,
                                    cornerIsExternal: N
                                }),
                                _bb = _ab.circleTangency,
                                cb = _ab.lineTangency,
                                _db = _ab.theta,
                                _eb = j({
                                    cx: H,
                                    cy: I,
                                    radius: J,
                                    angle: P,
                                    sign: -Q,
                                    isExternal: !0,
                                    cornerRadius: L,
                                    cornerIsExternal: N
                                }),
                                _fb = _eb.circleTangency,
                                _gb = _eb.lineTangency,
                                hb = _eb.theta,
                                ib = N ? Math.abs(O - P) : Math.abs(O - P) - _db - hb;
                            if (ib < 0 && 0 === L)
                                return ''.concat(_$, 'L').concat(H, ',').concat(I, 'Z');
                            _$ += 'L'.concat(_gb.x, ',').concat(_gb.y, '\n      A').concat(L, ',').concat(L, ',0,0,').concat(+(Q < 0), ',').concat(_fb.x, ',').concat(_fb.y, '\n      A').concat(J, ',').concat(J, ',0,').concat(+(ib > 180), ',').concat(+(Q > 0), ',').concat(_bb.x, ',').concat(_bb.y, '\n      A').concat(L, ',').concat(L, ',0,0,').concat(+(Q < 0), ',').concat(cb.x, ',').concat(cb.y, 'Z');
                        } else
                            _$ += 'L'.concat(H, ',').concat(I, 'Z');
                        return _$;
                    }({
                        cx: s,
                        cy: t,
                        innerRadius: u,
                        outerRadius: v,
                        cornerRadius: Math.min(_F, E / 2),
                        forceCornerRadius: _x,
                        cornerIsExternal: y,
                        startAngle: _z,
                        endAngle: _A
                    }) : k({
                        cx: s,
                        cy: t,
                        innerRadius: u,
                        outerRadius: v,
                        startAngle: _z,
                        endAngle: _A
                    }), _i(e).createElement('path', _h({}, (0, g.filterProps)(this.props, !0), {
                        className: D,
                        d: C
                    }));
                }
            }]) && _h(n.prototype, o), p && _h(n, p), _h;
        }(e.PureComponent);
    _l.defaultProps = {
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
}), b.register('Yu93y', function(c, d) {
    _j(c.exports, 'Dot', function() {
        return _h;
    });
    var e = b('LEQ5w'),
        f = b('JrtKP'),
        g = b('SLFbE');

    function h(_i) {
        return h = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(j) {
            return typeof j;
        } : function(j) {
            return j && 'function' == typeof Symbol && j.constructor === Symbol && j !== Symbol.prototype ? 'symbol' : typeof j;
        }, h(_i);
    }

    function h() {
        return h = Object.assign || function(i) {
            for (var _j = 1; _j < arguments.length; _j++) {
                var k = arguments[_j];
                for (var l in k)
                    Object.prototype.hasOwnProperty.call(k, l) && (i[l] = k[l]);
            }
            return i;
        }, h.apply(this, arguments);
    }

    function _h(i, j) {
        if (!(i instanceof j))
            throw new TypeError('Cannot call a class as a function');
    }

    function _h(i, j) {
        for (var k = 0; k < j.length; k++) {
            var l = j[k];
            l.enumerable = l.enumerable || !1, l.configurable = !0, 'value' in l && (l.writable = !0), Object.defineProperty(i, l.key, l);
        }
    }

    function h(i, j) {
        return h = Object.setPrototypeOf || function(k, l) {
            return k.__proto__ = l, k;
        }, h(i, j);
    }

    function _h(i) {
        var j = function() {
            if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ('function' == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
            } catch (i) {
                return !1;
            }
        }();
        return function() {
            var k, l = _h(i);
            if (j) {
                var m = _h(this).constructor;
                k = Reflect.construct(l, arguments, m);
            } else
                k = l.apply(this, arguments);
            return _h(this, k);
        };
    }

    function _h(i, j) {
        return !j || 'object' !== _m(j) && 'function' != typeof j ? function(k) {
            if (void 0 === k)
                throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return k;
        }(i) : j;
    }

    function _h(i) {
        return _h = Object.setPrototypeOf ? Object.getPrototypeOf : function(j) {
            return j.__proto__ || Object.getPrototypeOf(j);
        }, _h(i);
    }
    var _h = function(i) {
        ! function(j, k) {
            if ('function' != typeof k && null !== k)
                throw new TypeError('Super expression must either be null or a function');
            j.prototype = Object.create(k && k.prototype, {
                constructor: {
                    value: j,
                    writable: !0,
                    configurable: !0
                }
            }), k && _l(j, k);
        }(_n, i);
        var j, k, l, _m = _m(_n);

        function _n() {
            return _s(this, _n), _m.apply(this, arguments);
        }
        return j = _n, (k = [{
            key: 'render',
            value: function() {
                var n = this.props,
                    o = n.cx,
                    p = n.cy,
                    q = n.r,
                    r = n.className,
                    _s = _r(f)('recharts-dot', r);
                return o === +o && p === +p && q === +q ? _r(e).createElement('circle', _i({}, (0, g.filterProps)(this.props), (0, g.adaptEventHandlers)(this.props), {
                    className: _s,
                    cx: o,
                    cy: p,
                    r: q
                })) : null;
            }
        }]) && _k(j.prototype, k), l && _k(j, l), _n;
    }(e.PureComponent);
}), b.register('xPuL4', function(c, d) {
    _s(c.exports, 'CartesianAxis', function() {
        return _q;
    });
    var e = b('X82hY'),
        f = b('4R9wH'),
        g = b('LEQ5w'),
        h = b('JrtKP'),
        _i = b('8/M1n'),
        j = b('WWlCf'),
        _k = b('MXVYT'),
        _l = b('q+OoU'),
        _m = b('WUpxn'),
        _n = b('udXfZ'),
        o = b('F2lA2'),
        p = b('SLFbE');

    function q(_r) {
        return q = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(s) {
            return typeof s;
        } : function(s) {
            return s && 'function' == typeof Symbol && s.constructor === Symbol && s !== Symbol.prototype ? 'symbol' : typeof s;
        }, q(_r);
    }

    function q() {
        return q = Object.assign || function(r) {
            for (var _s = 1; _s < arguments.length; _s++) {
                var t = arguments[_s];
                for (var u in t)
                    Object.prototype.hasOwnProperty.call(t, u) && (r[u] = t[u]);
            }
            return r;
        }, q.apply(this, arguments);
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

    function q(r) {
        for (var s = 1; s < arguments.length; s++) {
            var t = null != arguments[s] ? arguments[s] : {};
            s % 2 ? _w(Object(t), !0).forEach(function(u) {
                _q(r, u, t[u]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : _w(Object(t)).forEach(function(u) {
                Object.defineProperty(r, u, Object.getOwnPropertyDescriptor(t, u));
            });
        }
        return r;
    }

    function _q(r, s, t) {
        return s in r ? Object.defineProperty(r, s, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : r[s] = t, r;
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

    function q(r, s) {
        for (var t = 0; t < s.length; t++) {
            var u = s[t];
            u.enumerable = u.enumerable || !1, u.configurable = !0, 'value' in u && (u.writable = !0), Object.defineProperty(r, u.key, u);
        }
    }

    function q(r, s) {
        return q = Object.setPrototypeOf || function(t, u) {
            return t.__proto__ = u, t;
        }, q(r, s);
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
            var t, u = _q(r);
            if (s) {
                var v = _q(this).constructor;
                t = Reflect.construct(u, arguments, v);
            } else
                t = u.apply(this, arguments);
            return _q(this, t);
        };
    }

    function _q(r, s) {
        return !s || 'object' !== _v(s) && 'function' != typeof s ? function(t) {
            if (void 0 === t)
                throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return t;
        }(r) : s;
    }

    function _q(r) {
        return _q = Object.setPrototypeOf ? Object.getPrototypeOf : function(s) {
            return s.__proto__ || Object.getPrototypeOf(s);
        }, _q(r);
    }
    var _q = function(r) {
        ! function(s, t) {
            if ('function' != typeof t && null !== t)
                throw new TypeError('Super expression must either be null or a function');
            s.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: s,
                    writable: !0,
                    configurable: !0
                }
            }), t && _P(s, t);
        }(_w, r);
        var s, t, u, _v = _Q(_w);

        function _w(x) {
            var y;
            return function(z, A) {
                if (!(z instanceof A))
                    throw new TypeError('Cannot call a class as a function');
            }(this, _w), (y = _v.call(this, x)).layerReference = void 0, y.state = {
                fontSize: '',
                letterSpacing: ''
            }, y;
        }
        return s = _L, u = [{
                key: 'getTicks',
                value: function(w, x, y) {
                    var z = w.tick,
                        A = w.ticks,
                        B = w.viewBox,
                        C = w.minTickGap,
                        D = w.orientation,
                        E = w.interval,
                        F = w.tickFormatter,
                        G = w.unit;
                    return A && A.length && z ? (0, o.isNumber)(E) || _n.Global.isSsr ? _L.getNumberIntervalTicks(A, 'number' == typeof E && (0, o.isNumber)(E) ? E : 0) : 'preserveStartEnd' === E ? _L.getTicksStart({
                        ticks: A,
                        tickFormatter: F,
                        viewBox: B,
                        orientation: D,
                        minTickGap: C,
                        unit: G,
                        fontSize: x,
                        letterSpacing: y
                    }, !0) : 'preserveStart' === E ? _L.getTicksStart({
                        ticks: A,
                        tickFormatter: F,
                        viewBox: B,
                        orientation: D,
                        minTickGap: C,
                        unit: G,
                        fontSize: x,
                        letterSpacing: y
                    }) : _L.getTicksEnd({
                        ticks: A,
                        tickFormatter: F,
                        viewBox: B,
                        orientation: D,
                        minTickGap: C,
                        unit: G,
                        fontSize: x,
                        letterSpacing: y
                    }) : [];
                }
            },
            {
                key: 'getNumberIntervalTicks',
                value: function(w, x) {
                    return w.filter(function(y, z) {
                        return z % (x + 1) == 0;
                    });
                }
            },
            {
                key: 'getTicksStart',
                value: function(w, x) {
                    var y, z, A = w.ticks,
                        B = w.tickFormatter,
                        C = w.viewBox,
                        D = w.orientation,
                        E = w.minTickGap,
                        F = w.unit,
                        G = w.fontSize,
                        H = w.letterSpacing,
                        I = C.x,
                        J = C.y,
                        K = C.width,
                        _L = C.height,
                        M = 'top' === D || 'bottom' === D ? 'width' : 'height',
                        N = (A || []).slice(),
                        O = F && 'width' === M ? (0, j.getStringSize)(F, {
                            fontSize: G,
                            letterSpacing: H
                        })[M] : 0,
                        _P = N.length,
                        _Q = _P >= 2 ? (0, o.mathSign)(N[1].coordinate - N[0].coordinate) : 1;
                    if (1 === _Q ? (y = 'width' === M ? I : J, z = 'width' === M ? I + K : J + _L) : (y = 'width' === M ? I + K : J + _L, z = 'width' === M ? I : J), x) {
                        var R = A[_P - 1],
                            S = _T(f)(B) ? B(R.value, _P - 1) : R.value,
                            T = (0, j.getStringSize)(S, {
                                fontSize: G,
                                letterSpacing: H
                            })[M] + O,
                            U = _Q * (R.coordinate + _Q * T / 2 - z);
                        N[_P - 1] = R = _p(_p({}, R), {}, {
                            tickCoord: U > 0 ? R.coordinate - U * _Q : R.coordinate
                        }), _Q * (R.tickCoord - _Q * T / 2 - y) >= 0 && _Q * (R.tickCoord + _Q * T / 2 - z) <= 0 && (z = R.tickCoord - _Q * (T / 2 + E), N[_P - 1] = _p(_p({}, R), {}, {
                            isShow: !0
                        }));
                    }
                    for (var R = x ? _P - 1 : _P, S = 0; S < R; S++) {
                        var T = N[S],
                            U = _T(f)(B) ? B(T.value, S) : T.value,
                            V = (0, j.getStringSize)(U, {
                                fontSize: G,
                                letterSpacing: H
                            })[M] + O;
                        if (0 === S) {
                            var W = _Q * (T.coordinate - _Q * V / 2 - y);
                            N[S] = T = _p(_p({}, T), {}, {
                                tickCoord: W < 0 ? T.coordinate - W * _Q : T.coordinate
                            });
                        } else
                            N[S] = T = _p(_p({}, T), {}, {
                                tickCoord: T.coordinate
                            });
                        _Q * (T.tickCoord - _Q * V / 2 - y) >= 0 && _Q * (T.tickCoord + _Q * V / 2 - z) <= 0 && (y = T.tickCoord + _Q * (V / 2 + E), N[S] = _p(_p({}, T), {}, {
                            isShow: !0
                        }));
                    }
                    return N.filter(function(_T) {
                        return _T.isShow;
                    });
                }
            },
            {
                key: 'getTicksEnd',
                value: function(w) {
                    var x, y, z = w.ticks,
                        A = w.tickFormatter,
                        B = w.viewBox,
                        C = w.orientation,
                        D = w.minTickGap,
                        E = w.unit,
                        F = w.fontSize,
                        G = w.letterSpacing,
                        H = B.x,
                        I = B.y,
                        J = B.width,
                        K = B.height,
                        L = 'top' === C || 'bottom' === C ? 'width' : 'height',
                        M = E && 'width' === L ? (0, j.getStringSize)(E, {
                            fontSize: F,
                            letterSpacing: G
                        })[L] : 0,
                        N = (z || []).slice(),
                        O = N.length,
                        P = O >= 2 ? (0, o.mathSign)(N[1].coordinate - N[0].coordinate) : 1;
                    1 === P ? (x = 'width' === L ? H : I, y = 'width' === L ? H + J : I + K) : (x = 'width' === L ? H + J : I + K, y = 'width' === L ? H : I);
                    for (var Q = O - 1; Q >= 0; Q--) {
                        var R = N[Q],
                            S = _R(f)(A) ? A(R.value, O - Q - 1) : R.value,
                            T = (0, j.getStringSize)(S, {
                                fontSize: F,
                                letterSpacing: G
                            })[L] + M;
                        if (Q === O - 1) {
                            var U = P * (R.coordinate + P * T / 2 - y);
                            N[Q] = R = _p(_p({}, R), {}, {
                                tickCoord: U > 0 ? R.coordinate - U * P : R.coordinate
                            });
                        } else
                            N[Q] = R = _p(_p({}, R), {}, {
                                tickCoord: R.coordinate
                            });
                        P * (R.tickCoord - P * T / 2 - x) >= 0 && P * (R.tickCoord + P * T / 2 - y) <= 0 && (y = R.tickCoord - P * (T / 2 + D), N[Q] = _p(_p({}, R), {}, {
                            isShow: !0
                        }));
                    }
                    return N.filter(function(_R) {
                        return _R.isShow;
                    });
                }
            },
            {
                key: 'renderTickItem',
                value: function(w, x, y) {
                    return _w(g).isValidElement(w) ? _w(g).cloneElement(w, x) : _w(f)(w) ? w(x) : _w(g).createElement(_l.Text, _N({}, x, {
                        className: 'recharts-cartesian-axis-tick-value'
                    }), y);
                }
            }
        ], (t = [{
                key: 'shouldComponentUpdate',
                value: function(_w, x) {
                    var y = _w.viewBox,
                        z = _I(_w, ['viewBox']),
                        A = this.props,
                        B = A.viewBox,
                        C = _I(A, ['viewBox']);
                    return !(0, _i.shallowEqual)(y, B) || !(0, _i.shallowEqual)(z, C) || !(0, _i.shallowEqual)(x, this.state);
                }
            },
            {
                key: 'componentDidMount',
                value: function() {
                    var w = this.layerReference;
                    if (w) {
                        var x = w.getElementsByClassName('recharts-cartesian-axis-tick-value')[0];
                        x && this.setState({
                            fontSize: window.getComputedStyle(x).fontSize,
                            letterSpacing: window.getComputedStyle(x).letterSpacing
                        });
                    }
                }
            },
            {
                key: 'getTickLineCoord',
                value: function(w) {
                    var x, y, z, A, B, C, D = this.props,
                        E = D.x,
                        F = D.y,
                        G = D.width,
                        H = D.height,
                        I = D.orientation,
                        J = D.tickSize,
                        K = D.mirror,
                        L = D.tickMargin,
                        M = K ? -1 : 1,
                        _N = w.tickSize || J,
                        O = (0, o.isNumber)(w.tickCoord) ? w.tickCoord : w.coordinate;
                    switch (I) {
                        case 'top':
                            x = y = w.coordinate, C = (z = (A = F + +!K * H) - M * _N) - M * L, B = O;
                            break;
                        case 'left':
                            z = A = w.coordinate, B = (x = (y = E + +!K * G) - M * _N) - M * L, C = O;
                            break;
                        case 'right':
                            z = A = w.coordinate, B = (x = (y = E + +K * G) + M * _N) + M * L, C = O;
                            break;
                        default:
                            x = y = w.coordinate, C = (z = (A = F + +K * H) + M * _N) + M * L, B = O;
                    }
                    return {
                        line: {
                            x1: x,
                            y1: z,
                            x2: y,
                            y2: A
                        },
                        tick: {
                            x: B,
                            y: C
                        }
                    };
                }
            },
            {
                key: 'getTickTextAnchor',
                value: function() {
                    var w, x = this.props,
                        y = x.orientation,
                        z = x.mirror;
                    switch (y) {
                        case 'left':
                            w = z ? 'start' : 'end';
                            break;
                        case 'right':
                            w = z ? 'end' : 'start';
                            break;
                        default:
                            w = 'middle';
                    }
                    return w;
                }
            },
            {
                key: 'getTickVerticalAnchor',
                value: function() {
                    var w = this.props,
                        x = w.orientation,
                        y = w.mirror,
                        z = 'end';
                    switch (x) {
                        case 'left':
                        case 'right':
                            z = 'middle';
                            break;
                        case 'top':
                            z = y ? 'start' : 'end';
                            break;
                        default:
                            z = y ? 'end' : 'start';
                    }
                    return z;
                }
            },
            {
                key: 'renderAxisLine',
                value: function() {
                    var w = this.props,
                        x = w.x,
                        y = w.y,
                        z = w.width,
                        A = w.height,
                        B = w.orientation,
                        C = w.mirror,
                        D = w.axisLine,
                        E = _p(_p(_p({}, (0, p.filterProps)(this.props)), (0, p.filterProps)(D)), {}, {
                            fill: 'none'
                        });
                    if ('top' === B || 'bottom' === B) {
                        var F = +('top' === B && !C || 'bottom' === B && C);
                        E = _p(_p({}, E), {}, {
                            x1: x,
                            y1: y + F * A,
                            x2: x + z,
                            y2: y + F * A
                        });
                    } else {
                        var F = +('left' === B && !C || 'right' === B && C);
                        E = _p(_p({}, E), {}, {
                            x1: x + F * z,
                            y1: y,
                            x2: x + F * z,
                            y2: y + A
                        });
                    }
                    return _H(g).createElement('line', _p({}, E, {
                        className: _H(h)('recharts-cartesian-axis-line', _H(e)(D, 'className'))
                    }));
                }
            },
            {
                key: 'renderTicks',
                value: function(w, x, y) {
                    var z = this,
                        A = this.props,
                        B = A.tickLine,
                        C = A.stroke,
                        D = A.tick,
                        E = A.tickFormatter,
                        F = A.unit,
                        G = _p.getTicks(_p(_p({}, this.props), {}, {
                            ticks: w
                        }), x, y),
                        H = this.getTickTextAnchor(),
                        _I = this.getTickVerticalAnchor(),
                        J = (0, p.filterProps)(this.props),
                        K = (0, p.filterProps)(D),
                        L = _p(_p({}, J), {}, {
                            fill: 'none'
                        }, (0, p.filterProps)(B)),
                        M = G.map(function(N, O) {
                            var P = z.getTickLineCoord(N),
                                Q = P.line,
                                R = P.tick,
                                S = _p(_p(_p(_p({
                                    textAnchor: H,
                                    verticalAnchor: _I
                                }, J), {}, {
                                    stroke: 'none',
                                    fill: C
                                }, K), R), {}, {
                                    index: O,
                                    payload: N,
                                    visibleTicksCount: G.length,
                                    tickFormatter: E
                                });
                            return _H(g).createElement(_k.Layer, _p({
                                className: 'recharts-cartesian-axis-tick',
                                key: 'tick-'.concat(O)
                            }, (0, p.adaptEventsOfChild)(z.props, N, O)), B && _H(g).createElement('line', _p({}, L, Q, {
                                className: _H(h)('recharts-cartesian-axis-tick-line', _H(e)(B, 'className'))
                            })), D && _p.renderTickItem(D, S, ''.concat(_H(f)(E) ? E(N.value, O) : N.value).concat(F || '')));
                        });
                    return _H(g).createElement('g', {
                        className: 'recharts-cartesian-axis-ticks'
                    }, M);
                }
            },
            {
                key: 'render',
                value: function() {
                    var w = this,
                        x = this.props,
                        y = x.axisLine,
                        z = x.width,
                        A = x.height,
                        B = x.ticksGenerator,
                        C = x.className;
                    if (x.hide)
                        return null;
                    var D = this.props,
                        E = D.ticks,
                        F = _p(D, ['ticks']),
                        G = E;
                    return _H(f)(B) && (G = E && E.length > 0 ? B(this.props) : B(F)), z <= 0 || A <= 0 || !G || !G.length ? null : _H(g).createElement(_k.Layer, {
                        className: _H(h)('recharts-cartesian-axis', C),
                        ref: function(_H) {
                            w.layerReference = _H;
                        }
                    }, y && this.renderAxisLine(), this.renderTicks(G, this.state.fontSize, this.state.letterSpacing), _m.Label.renderCallByParent(this.props));
                }
            }
        ]) && _p(s.prototype, t), u && _p(s, u), _p;
    }(g.Component);
    _q.displayName = 'CartesianAxis', _q.defaultProps = {
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
}), b.register('bKGGN', function(c, d) {
    _r(c.exports, 'Brush', function() {
        return _q;
    });
    var e = b('4R9wH'),
        f = b('8nyEX'),
        g = b('LEQ5w'),
        h = b('JrtKP'),
        i = b('Y90qO'),
        j = b('MXVYT'),
        k = b('q+OoU'),
        l = b('2xCsV'),
        m = b('F2lA2'),
        n = b('hqEpq'),
        o = b('SLFbE');

    function p(q) {
        return p = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(r) {
            return typeof r;
        } : function(r) {
            return r && 'function' == typeof Symbol && r.constructor === Symbol && r !== Symbol.prototype ? 'symbol' : typeof r;
        }, p(q);
    }

    function p() {
        return p = Object.assign || function(q) {
            for (var _r = 1; _r < arguments.length; _r++) {
                var s = arguments[_r];
                for (var t in s)
                    Object.prototype.hasOwnProperty.call(s, t) && (q[t] = s[t]);
            }
            return q;
        }, p.apply(this, arguments);
    }

    function _p(q, r) {
        var s = Object.keys(q);
        if (Object.getOwnPropertySymbols) {
            var t = Object.getOwnPropertySymbols(q);
            r && (t = t.filter(function(u) {
                return Object.getOwnPropertyDescriptor(q, u).enumerable;
            })), s.push.apply(s, t);
        }
        return s;
    }

    function _p(q) {
        for (var r = 1; r < arguments.length; r++) {
            var s = null != arguments[r] ? arguments[r] : {};
            r % 2 ? _w(Object(s), !0).forEach(function(t) {
                _p(q, t, s[t]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(q, Object.getOwnPropertyDescriptors(s)) : _w(Object(s)).forEach(function(t) {
                Object.defineProperty(q, t, Object.getOwnPropertyDescriptor(s, t));
            });
        }
        return q;
    }

    function _p(q, r, s) {
        return r in q ? Object.defineProperty(q, r, {
            value: s,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : q[r] = s, q;
    }

    function p(q, r) {
        for (var s = 0; s < r.length; s++) {
            var t = r[s];
            t.enumerable = t.enumerable || !1, t.configurable = !0, 'value' in t && (t.writable = !0), Object.defineProperty(q, t.key, t);
        }
    }

    function _p(q, r) {
        return _p = Object.setPrototypeOf || function(s, t) {
            return s.__proto__ = t, s;
        }, _p(q, r);
    }

    function _p(q) {
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
            var s, t = _p(q);
            if (r) {
                var u = _p(this).constructor;
                s = Reflect.construct(t, arguments, u);
            } else
                s = t.apply(this, arguments);
            return _p(this, s);
        };
    }

    function _p(q, r) {
        return !r || 'object' !== _v(r) && 'function' != typeof r ? _p(q) : r;
    }

    function _p(q) {
        if (void 0 === q)
            throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return q;
    }

    function _p(q) {
        return _p = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
            return r.__proto__ || Object.getPrototypeOf(r);
        }, _p(q);
    }
    var p = function(q) {
            return q.changedTouches && !!q.changedTouches.length;
        },
        _q = function(r) {
            ! function(s, t) {
                if ('function' != typeof t && null !== t)
                    throw new TypeError('Super expression must either be null or a function');
                s.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: s,
                        writable: !0,
                        configurable: !0
                    }
                }), t && _M(s, t);
            }(_w, r);
            var s, t, u, _v = _N(_w);

            function _w(x) {
                var y;
                return function(z, A) {
                    if (!(z instanceof A))
                        throw new TypeError('Cannot call a class as a function');
                }(this, _w), (y = _v.call(this, x)).leaveTimer = void 0, y.travellerDragStartHandlers = void 0, y.handleDrag = function(z) {
                    y.leaveTimer && (clearTimeout(y.leaveTimer), y.leaveTimer = null), y.state.isTravellerMoving ? y.handleTravellerMove(z) : y.state.isSlideMoving && y.handleSlideDrag(z);
                }, y.handleTouchMove = function(z) {
                    null != z.changedTouches && z.changedTouches.length > 0 && y.handleDrag(z.changedTouches[0]);
                }, y.handleDragEnd = function() {
                    y.setState({
                        isTravellerMoving: !1,
                        isSlideMoving: !1
                    }), y.detachDragEndListener();
                }, y.handleLeaveWrapper = function() {
                    (y.state.isTravellerMoving || y.state.isSlideMoving) && (y.leaveTimer = window.setTimeout(y.handleDragEnd, y.props.leaveTimeOut));
                }, y.handleEnterSlideOrTraveller = function() {
                    y.setState({
                        isTextActive: !0
                    });
                }, y.handleLeaveSlideOrTraveller = function() {
                    y.setState({
                        isTextActive: !1
                    });
                }, y.handleSlideDragStart = function(z) {
                    var A = p(z) ? z.changedTouches[0] : z;
                    y.setState({
                        isTravellerMoving: !1,
                        isSlideMoving: !0,
                        slideMoveStartX: A.pageX
                    }), y.attachDragEndListener();
                }, y.travellerDragStartHandlers = {
                    startX: y.handleTravellerDragStart.bind(_D(y), 'startX'),
                    endX: y.handleTravellerDragStart.bind(_D(y), 'endX')
                }, y.state = {}, y;
            }
            return s = _O, u = [{
                    key: 'renderDefaultTraveller',
                    value: function(w) {
                        var x = w.x,
                            y = w.y,
                            z = w.width,
                            A = w.height,
                            B = w.stroke,
                            C = Math.floor(y + A / 2) - 1;
                        return _P(g).createElement(_P(g).Fragment, null, _P(g).createElement('rect', {
                            x: x,
                            y: y,
                            width: z,
                            height: A,
                            fill: B,
                            stroke: 'none'
                        }), _P(g).createElement('line', {
                            x1: x + 1,
                            y1: C,
                            x2: x + z - 1,
                            y2: C,
                            fill: 'none',
                            stroke: '#fff'
                        }), _P(g).createElement('line', {
                            x1: x + 1,
                            y1: C + 2,
                            x2: x + z - 1,
                            y2: C + 2,
                            fill: 'none',
                            stroke: '#fff'
                        }));
                    }
                },
                {
                    key: 'renderTraveller',
                    value: function(w, x) {
                        return _P(g).isValidElement(w) ? _P(g).cloneElement(w, x) : _P(e)(w) ? w(x) : _O.renderDefaultTraveller(x);
                    }
                },
                {
                    key: 'getDerivedStateFromProps',
                    value: function(w, x) {
                        var y = w.data,
                            z = w.width,
                            A = w.x,
                            B = w.travellerWidth,
                            C = w.updateId,
                            D = w.startIndex,
                            E = w.endIndex;
                        if (y !== x.prevData || C !== x.prevUpdateId)
                            return _P({
                                prevData: y,
                                prevTravellerWidth: B,
                                prevUpdateId: C,
                                prevX: A,
                                prevWidth: z
                            }, y && y.length ? function(F) {
                                var G = F.data,
                                    H = F.startIndex,
                                    I = F.endIndex,
                                    J = F.x,
                                    K = F.width,
                                    L = F.travellerWidth;
                                if (!G || !G.length)
                                    return {};
                                var M = G.length,
                                    N = (0, i.point)().domain(_P(f)(0, M)).range([
                                        J,
                                        J + K - L
                                    ]),
                                    O = N.domain().map(function(_P) {
                                        return N(_P);
                                    });
                                return {
                                    isTextActive: !1,
                                    isSlideMoving: !1,
                                    isTravellerMoving: !1,
                                    startX: N(H),
                                    endX: N(I),
                                    scale: N,
                                    scaleValues: O
                                };
                            }({
                                data: y,
                                width: z,
                                x: A,
                                travellerWidth: B,
                                startIndex: D,
                                endIndex: E
                            }) : {
                                scale: null,
                                scaleValues: null
                            });
                        if (x.scale && (z !== x.prevWidth || A !== x.prevX || B !== x.prevTravellerWidth)) {
                            x.scale.range([
                                A,
                                A + z - B
                            ]);
                            var F = x.scale.domain().map(function(G) {
                                return x.scale(G);
                            });
                            return {
                                prevData: y,
                                prevTravellerWidth: B,
                                prevUpdateId: C,
                                prevX: A,
                                prevWidth: z,
                                startX: x.scale(w.startIndex),
                                endX: x.scale(w.endIndex),
                                scaleValues: F
                            };
                        }
                        return null;
                    }
                },
                {
                    key: 'getIndexInRange',
                    value: function(w, x) {
                        for (var y = 0, z = w.length - 1; z - y > 1;) {
                            var A = Math.floor((y + z) / 2);
                            w[A] > x ? z = A : y = A;
                        }
                        return x >= w[z] ? z : y;
                    }
                }
            ], (t = [{
                    key: 'componentWillUnmount',
                    value: function() {
                        this.leaveTimer && (clearTimeout(this.leaveTimer), this.leaveTimer = null), this.detachDragEndListener();
                    }
                },
                {
                    key: 'getIndex',
                    value: function(w) {
                        var x = w.startX,
                            y = w.endX,
                            z = this.state.scaleValues,
                            A = this.props,
                            B = A.gap,
                            C = A.data.length - 1,
                            D = Math.min(x, y),
                            E = Math.max(x, y),
                            F = _O.getIndexInRange(z, D),
                            G = _O.getIndexInRange(z, E);
                        return {
                            startIndex: F - F % B,
                            endIndex: G === C ? C : G - G % B
                        };
                    }
                },
                {
                    key: 'getTextOfTick',
                    value: function(w) {
                        var x = this.props,
                            y = x.data,
                            z = x.tickFormatter,
                            A = x.dataKey,
                            B = (0, l.getValueByDataKey)(y[w], A, w);
                        return _w(e)(z) ? z(B, w) : B;
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
                    value: function(_w) {
                        var x = this.state,
                            y = x.slideMoveStartX,
                            z = x.startX,
                            A = x.endX,
                            B = this.props,
                            C = B.x,
                            D = B.width,
                            E = B.travellerWidth,
                            F = B.startIndex,
                            G = B.endIndex,
                            H = B.onChange,
                            I = _w.pageX - y;
                        I > 0 ? I = Math.min(I, C + D - E - A, C + D - E - z) : I < 0 && (I = Math.max(I, C - z, C - A));
                        var J = this.getIndex({
                            startX: z + I,
                            endX: A + I
                        });
                        J.startIndex === F && J.endIndex === G || !H || H(J), this.setState({
                            startX: z + I,
                            endX: A + I,
                            slideMoveStartX: _w.pageX
                        });
                    }
                },
                {
                    key: 'handleTravellerDragStart',
                    value: function(w, x) {
                        var y = p(x) ? x.changedTouches[0] : x;
                        this.setState({
                            isSlideMoving: !1,
                            isTravellerMoving: !0,
                            movingTravellerId: w,
                            brushMoveStartX: y.pageX
                        }), this.attachDragEndListener();
                    }
                },
                {
                    key: 'handleTravellerMove',
                    value: function(w) {
                        var x, y = this.state,
                            z = y.brushMoveStartX,
                            A = y.movingTravellerId,
                            B = y.endX,
                            C = y.startX,
                            D = this.state[A],
                            E = this.props,
                            F = E.x,
                            G = E.width,
                            H = E.travellerWidth,
                            I = E.onChange,
                            J = E.gap,
                            K = E.data,
                            L = {
                                startX: this.state.startX,
                                endX: this.state.endX
                            },
                            M = w.pageX - z;
                        M > 0 ? M = Math.min(M, F + G - H - D) : M < 0 && (M = Math.max(M, F - D)), L[A] = D + M;
                        var N = this.getIndex(L),
                            _O = N.startIndex,
                            _P = N.endIndex;
                        this.setState((_K(x = {}, A, D + M), _K(x, 'brushMoveStartX', w.pageX), x), function() {
                            var Q;
                            I && (Q = K.length - 1, ('startX' === A && (B > C ? _O % J == 0 : _P % J == 0) || B < C && _P === Q || 'endX' === A && (B > C ? _P % J == 0 : _O % J == 0) || B > C && _P === Q) && I(N));
                        });
                    }
                },
                {
                    key: 'renderBackground',
                    value: function() {
                        var w = this.props,
                            x = w.x,
                            y = w.y,
                            z = w.width,
                            A = w.height,
                            B = w.fill,
                            C = w.stroke;
                        return _c(g).createElement('rect', {
                            stroke: C,
                            fill: B,
                            x: x,
                            y: y,
                            width: z,
                            height: A
                        });
                    }
                },
                {
                    key: 'renderPanorama',
                    value: function() {
                        var w = this.props,
                            x = w.x,
                            y = w.y,
                            z = w.width,
                            A = w.height,
                            B = w.data,
                            C = w.children,
                            D = w.padding,
                            E = g.Children.only(C);
                        return E ? _c(g).cloneElement(E, {
                            x: x,
                            y: y,
                            width: z,
                            height: A,
                            margin: D,
                            compact: !0,
                            data: B
                        }) : null;
                    }
                },
                {
                    key: 'renderTravellerLayer',
                    value: function(w, x) {
                        var y = this.props,
                            z = y.y,
                            A = y.travellerWidth,
                            B = y.height,
                            C = y.traveller,
                            D = Math.max(w, this.props.x),
                            E = _J(_J({}, (0, o.filterProps)(this.props)), {}, {
                                x: D,
                                y: z,
                                width: A,
                                height: B
                            });
                        return _c(g).createElement(j.Layer, {
                            className: 'recharts-brush-traveller',
                            onMouseEnter: this.handleEnterSlideOrTraveller,
                            onMouseLeave: this.handleLeaveSlideOrTraveller,
                            onMouseDown: this.travellerDragStartHandlers[x],
                            onTouchStart: this.travellerDragStartHandlers[x],
                            style: {
                                cursor: 'col-resize'
                            }
                        }, _I.renderTraveller(C, E));
                    }
                },
                {
                    key: 'renderSlide',
                    value: function(w, x) {
                        var y = this.props,
                            z = y.y,
                            A = y.height,
                            B = y.stroke,
                            C = y.travellerWidth,
                            D = Math.min(w, x) + C,
                            E = Math.max(Math.abs(x - w) - C, 0);
                        return _c(g).createElement('rect', {
                            className: 'recharts-brush-slide',
                            onMouseEnter: this.handleEnterSlideOrTraveller,
                            onMouseLeave: this.handleLeaveSlideOrTraveller,
                            onMouseDown: this.handleSlideDragStart,
                            onTouchStart: this.handleSlideDragStart,
                            style: {
                                cursor: 'move'
                            },
                            stroke: 'none',
                            fill: B,
                            fillOpacity: 0.2,
                            x: D,
                            y: z,
                            width: E,
                            height: A
                        });
                    }
                },
                {
                    key: 'renderText',
                    value: function() {
                        var w = this.props,
                            x = w.startIndex,
                            y = w.endIndex,
                            z = w.y,
                            A = w.height,
                            B = w.travellerWidth,
                            C = w.stroke,
                            D = this.state,
                            E = D.startX,
                            F = D.endX,
                            G = {
                                pointerEvents: 'none',
                                fill: C
                            };
                        return _c(g).createElement(j.Layer, {
                            className: 'recharts-brush-texts'
                        }, _c(g).createElement(k.Text, _H({
                            textAnchor: 'end',
                            verticalAnchor: 'middle',
                            x: Math.min(E, F) - 5,
                            y: z + A / 2
                        }, G), this.getTextOfTick(x)), _c(g).createElement(k.Text, _H({
                            textAnchor: 'start',
                            verticalAnchor: 'middle',
                            x: Math.max(E, F) + B + 5,
                            y: z + A / 2
                        }, G), this.getTextOfTick(y)));
                    }
                },
                {
                    key: 'render',
                    value: function() {
                        var w = this.props,
                            x = w.data,
                            y = w.className,
                            z = w.children,
                            A = w.x,
                            B = w.y,
                            C = w.width,
                            D = w.height,
                            E = w.alwaysShowText,
                            F = this.state,
                            G = F.startX,
                            _H = F.endX,
                            _I = F.isTextActive,
                            _J = F.isSlideMoving,
                            _K = F.isTravellerMoving;
                        if (!x || !x.length || !(0, m.isNumber)(A) || !(0, m.isNumber)(B) || !(0, m.isNumber)(C) || !(0, m.isNumber)(D) || C <= 0 || D <= 0)
                            return null;
                        var L = _c(h)('recharts-brush', y),
                            _M = 1 === _c(g).Children.count(z),
                            _N = (0, n.generatePrefixStyle)('userSelect', 'none');
                        return _c(g).createElement(j.Layer, {
                            className: L,
                            onMouseMove: this.handleDrag,
                            onMouseLeave: this.handleLeaveWrapper,
                            onTouchMove: this.handleTouchMove,
                            style: _N
                        }, this.renderBackground(), _M && this.renderPanorama(), this.renderSlide(G, _H), this.renderTravellerLayer(G, 'startX'), this.renderTravellerLayer(_H, 'endX'), (_I || _J || _K || E) && this.renderText());
                    }
                }
            ]) && _z(s.prototype, t), u && _z(s, u), _x;
        }(g.PureComponent);
    _q.displayName = 'Brush', _q.defaultProps = {
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
}), b.register('hqEpq', function(_c, d) {
    function e(f, g) {
        var h = Object.keys(f);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(f);
            g && (i = i.filter(function(j) {
                return Object.getOwnPropertyDescriptor(f, j).enumerable;
            })), h.push.apply(h, i);
        }
        return h;
    }

    function e(f) {
        for (var g = 1; g < arguments.length; g++) {
            var h = null != arguments[g] ? arguments[g] : {};
            g % 2 ? b(Object(h), !0).forEach(function(i) {
                _e(f, i, h[i]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(f, Object.getOwnPropertyDescriptors(h)) : b(Object(h)).forEach(function(i) {
                Object.defineProperty(f, i, Object.getOwnPropertyDescriptor(h, i));
            });
        }
        return f;
    }

    function _e(f, g, h) {
        return g in f ? Object.defineProperty(f, g, {
            value: h,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : f[g] = h, f;
    }
    _h(_c.exports, 'generatePrefixStyle', function() {
        return _f;
    });
    var e = [
            'Webkit',
            'Moz',
            'O',
            'ms'
        ],
        _f = function(g, _h) {
            if (!g)
                return null;
            var i = g.replace(/(\w)/, function(j) {
                    return j.toUpperCase();
                }),
                j = e.reduce(function(k, l) {
                    return _e(_e({}, k), {}, _f({}, l + i, _h));
                }, {});
            return j[g] = _h, j;
        };
}), b.register('/S7r1', function(c, d) {
    _m(c.exports, 'detectReferenceElementsDomain', function() {
        return _k;
    });
    var _e = b('mMHuY'),
        _f = b('cKVsf'),
        g = b('78Mry'),
        h = b('zP0mN'),
        i = b('7p4uL'),
        j = b('F2lA2'),
        _k = function(l, _m, n, o, p) {
            var q = (0, i.findAllByType)(l, _f.ReferenceLine.displayName),
                r = (0, i.findAllByType)(l, _e.ReferenceDot.displayName),
                s = q.concat(r),
                t = (0, i.findAllByType)(l, g.ReferenceArea.displayName),
                u = ''.concat(o, 'Id'),
                v = o[0],
                w = _m;
            if (s.length && (w = s.reduce(function(x, y) {
                    if (y.props[u] === n && (0, h.ifOverflowMatches)(y.props, 'extendDomain') && (0, j.isNumber)(y.props[v])) {
                        var z = y.props[v];
                        return [
                            Math.min(x[0], z),
                            Math.max(x[1], z)
                        ];
                    }
                    return x;
                }, w)), t.length) {
                var _x = ''.concat(v, '1'),
                    y = ''.concat(v, '2');
                w = t.reduce(function(z, A) {
                    if (A.props[u] === n && (0, h.ifOverflowMatches)(A.props, 'extendDomain') && (0, j.isNumber)(A.props[_x]) && (0, j.isNumber)(A.props[y])) {
                        var B = A.props[_x],
                            C = A.props[y];
                        return [
                            Math.min(z[0], B, C),
                            Math.max(z[1], B, C)
                        ];
                    }
                    return z;
                }, w);
            }
            return p && p.length && (w = p.reduce(function(x, y) {
                return (0, j.isNumber)(y) ? [
                    Math.min(x[0], y),
                    Math.max(x[1], y)
                ] : x;
            }, w)), w;
        };
}), b.register('mMHuY', function(c, d) {
    _r(c.exports, 'ReferenceDot', function() {
        return _p;
    });
    var e = b('4R9wH'),
        f = b('LEQ5w'),
        g = b('JrtKP'),
        h = b('MXVYT'),
        i = b('Yu93y'),
        j = b('WUpxn'),
        k = b('F2lA2'),
        l = b('zP0mN'),
        m = b('5Or8B'),
        n = b('SS2ww'),
        o = b('SLFbE');

    function p() {
        return p = Object.assign || function(q) {
            for (var _r = 1; _r < arguments.length; _r++) {
                var s = arguments[_r];
                for (var t in s)
                    Object.prototype.hasOwnProperty.call(s, t) && (q[t] = s[t]);
            }
            return q;
        }, p.apply(this, arguments);
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

    function p(q) {
        for (var r = 1; r < arguments.length; r++) {
            var s = null != arguments[r] ? arguments[r] : {};
            r % 2 ? _x(Object(s), !0).forEach(function(t) {
                _p(q, t, s[t]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(q, Object.getOwnPropertyDescriptors(s)) : _x(Object(s)).forEach(function(t) {
                Object.defineProperty(q, t, Object.getOwnPropertyDescriptor(s, t));
            });
        }
        return q;
    }

    function _p(q, r, s) {
        return r in q ? Object.defineProperty(q, r, {
            value: s,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : q[r] = s, q;
    }

    function _p(q) {
        var r = q.x,
            s = q.y,
            t = q.r,
            u = q.alwaysShow,
            v = q.clipPathId,
            w = (0, k.isNumOrStr)(r),
            _x = (0, k.isNumOrStr)(s);
        if ((0, n.warn)(void 0 === u, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !w || !_x)
            return null;
        var y = function(z) {
            var A = z.x,
                B = z.y,
                C = z.xAxis,
                D = z.yAxis,
                E = (0, m.createLabeledScales)({
                    x: C.scale,
                    y: D.scale
                }),
                F = E.apply({
                    x: A,
                    y: B
                }, {
                    bandAware: !0
                });
            return (0, l.ifOverflowMatches)(z, 'discard') && !E.isInRange(F) ? null : F;
        }(q);
        if (!y)
            return null;
        var _z = y.x,
            A = y.y,
            B = q.shape,
            C = q.className,
            _D = _C(_C({
                clipPath: (0, l.ifOverflowMatches)(q, 'hidden') ? 'url(#'.concat(v, ')') : void 0
            }, (0, o.filterProps)(q, !0)), {}, {
                cx: _z,
                cy: A
            });
        return _c(f).createElement(h.Layer, {
            className: _c(g)('recharts-reference-dot', C)
        }, _p.renderDot(B, _D), j.Label.renderCallByParent(q, {
            x: _z - t,
            y: A - t,
            width: 2 * t,
            height: 2 * t
        }));
    }
    _E.displayName = 'ReferenceDot', _E.defaultProps = {
        isFront: !1,
        ifOverflow: 'discard',
        xAxisId: 0,
        yAxisId: 0,
        r: 10,
        fill: '#fff',
        stroke: '#ccc',
        fillOpacity: 1,
        strokeWidth: 1
    }, _E.renderDot = function(p, q) {
        return _c(f).isValidElement(p) ? _c(f).cloneElement(p, q) : _c(e)(p) ? p(q) : _c(f).createElement(i.Dot, _v({}, q, {
            cx: q.cx,
            cy: q.cy,
            className: 'recharts-reference-dot-dot'
        }));
    };
}), b.register('zP0mN', function(_c, d) {
    _g(_c.exports, 'ifOverflowMatches', function() {
        return b;
    });
    var e = function(f, _g) {
        var h = f.alwaysShow,
            i = f.ifOverflow;
        return h && (i = 'extendDomain'), i === _g;
    };
}), b.register('5Or8B', function(c, d) {
    _l(c.exports, 'formatAxisMap', function() {
        return _j;
    }), _l(c.exports, 'rectWithPoints', function() {
        return _u;
    }), _l(c.exports, 'rectWithCoords', function() {
        return _v;
    }), _l(c.exports, 'createLabeledScales', function() {
        return _C;
    });
    var e = b('rlHfj'),
        f = b('orX8f'),
        g = b('2xCsV'),
        h = b('7p4uL'),
        i = b('F2lA2');

    function j(k, _l) {
        for (var m = 0; m < _l.length; m++) {
            var n = _l[m];
            n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(k, n.key, n);
        }
    }

    function j(k, l) {
        var m = Object.keys(k);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(k);
            l && (n = n.filter(function(o) {
                return Object.getOwnPropertyDescriptor(k, o).enumerable;
            })), m.push.apply(m, n);
        }
        return m;
    }

    function j(k) {
        for (var l = 1; l < arguments.length; l++) {
            var m = null != arguments[l] ? arguments[l] : {};
            l % 2 ? _s(Object(m), !0).forEach(function(n) {
                _j(k, n, m[n]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(k, Object.getOwnPropertyDescriptors(m)) : _s(Object(m)).forEach(function(n) {
                Object.defineProperty(k, n, Object.getOwnPropertyDescriptor(m, n));
            });
        }
        return k;
    }

    function _j(k, l, m) {
        return l in k ? Object.defineProperty(k, l, {
            value: m,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : k[l] = m, k;
    }
    var _j = function(k, l, m, n, o) {
            var p = k.width,
                q = k.height,
                r = k.layout,
                _s = k.children,
                t = Object.keys(l),
                _u = {
                    left: m.left,
                    leftMirror: m.left,
                    right: p - m.right,
                    rightMirror: p - m.right,
                    top: m.top,
                    topMirror: m.top,
                    bottom: q - m.bottom,
                    bottomMirror: q - m.bottom
                },
                _v = !!(0, h.findChildByType)(_s, 'Bar');
            return t.reduce(function(w, x) {
                var y, z, A, B, _C, D = l[x],
                    _E = D.orientation,
                    F = D.domain,
                    G = D.padding,
                    H = void 0 === G ? {} : G,
                    I = D.mirror,
                    J = D.reversed,
                    K = ''.concat(_E).concat(I ? 'Mirror' : '');
                if ('number' === D.type && ('gap' === D.padding || 'no-gap' === D.padding)) {
                    var L = F[1] - F[0],
                        M = 1 / 0,
                        N = D.categoricalDomain.sort();
                    N.forEach(function(O, P) {
                        P > 0 && (M = Math.min((O || 0) - (N[P - 1] || 0), M));
                    });
                    var O = M / L,
                        P = 'vertical' === D.layout ? m.height : m.width;
                    if ('gap' === D.padding && (y = O * P / 2), 'no-gap' === D.padding) {
                        var Q = (0, i.getPercentValue)(k.barCategoryGap, O * P),
                            R = O * P / 2;
                        y = R - Q - (R - Q) / P * Q;
                    }
                }
                z = 'xAxis' === n ? [
                    m.left + (H.left || 0) + (y || 0),
                    m.left + m.width - (H.right || 0) - (y || 0)
                ] : 'yAxis' === n ? 'horizontal' === r ? [
                    m.top + m.height - (H.bottom || 0),
                    m.top + (H.top || 0)
                ] : [
                    m.top + (H.top || 0) + (y || 0),
                    m.top + m.height - (H.bottom || 0) - (y || 0)
                ] : D.range, J && (z = [
                    z[1],
                    z[0]
                ]);
                var L = (0, g.parseScale)(D, o, _v),
                    M = L.scale,
                    N = L.realScaleType;
                M.domain(F).range(z), (0, g.checkDomainOfScale)(M);
                var O = (0, g.getTicksOfScale)(M, _l(_l({}, D), {}, {
                    realScaleType: N
                }));
                'xAxis' === n ? (_C = 'top' === _E && !I || 'bottom' === _E && I, A = m.left, B = _u[K] - _C * D.height) : 'yAxis' === n && (_C = 'left' === _E && !I || 'right' === _E && I, A = _u[K] - _C * D.width, B = m.top);
                var _P = _l(_l(_l({}, D), O), {}, {
                    realScaleType: N,
                    x: A,
                    y: B,
                    scale: M,
                    width: 'xAxis' === n ? m.width : D.width,
                    height: 'yAxis' === n ? m.height : D.height
                });
                return _P.bandSize = (0, g.getBandSizeOfAxis)(_P, O), D.hide || 'xAxis' !== n ? D.hide || (_u[K] += (_C ? -1 : 1) * _P.width) : _u[K] += (_C ? -1 : 1) * _P.height, _l(_l({}, w), {}, _m({}, x, _P));
            }, {});
        },
        k = function(l, m) {
            var n = l.x,
                o = l.y,
                p = m.x,
                q = m.y;
            return {
                x: Math.min(n, p),
                y: Math.min(o, q),
                width: Math.abs(p - n),
                height: Math.abs(q - o)
            };
        },
        l = function(m) {
            var n = m.x1,
                o = m.y1,
                p = m.x2,
                q = m.y2;
            return k({
                x: n,
                y: o
            }, {
                x: p,
                y: q
            });
        },
        m = function() {
            function n(o) {
                ! function(p, q) {
                    if (!(p instanceof q))
                        throw new TypeError('Cannot call a class as a function');
                }(this, n), this.scale = void 0, this.scale = o;
            }
            var n, o, p;
            return n = _q, o = [{
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
                    value: function(_q) {
                        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            s = r.bandAware,
                            t = r.position;
                        if (void 0 !== _q) {
                            if (t)
                                switch (t) {
                                    case 'start':
                                    default:
                                        return this.scale(_q);
                                    case 'middle':
                                        var u = this.bandwidth ? this.bandwidth() / 2 : 0;
                                        return this.scale(_q) + u;
                                    case 'end':
                                        var v = this.bandwidth ? this.bandwidth() : 0;
                                        return this.scale(_q) + v;
                                }
                            if (s) {
                                var u = this.bandwidth ? this.bandwidth() / 2 : 0;
                                return this.scale(_q) + u;
                            }
                            return this.scale(_q);
                        }
                    }
                },
                {
                    key: 'isInRange',
                    value: function(q) {
                        var r = this.range(),
                            s = r[0],
                            t = r[r.length - 1];
                        return s <= t ? q >= s && q <= t : q >= t && q <= s;
                    }
                }
            ], p = [{
                key: 'create',
                value: function(q) {
                    return new _q(q);
                }
            }], o && _j(n.prototype, o), p && _j(n, p), _q;
        }();
    m.EPS = 0.0001;
    var n = function(o) {
        var p = Object.keys(o).reduce(function(_q, r) {
            return _l(_l({}, _q), {}, _m({}, r, m.create(o[r])));
        }, {});
        return _l(_l({}, p), {}, {
            apply: function(q) {
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    s = r.bandAware,
                    t = r.position;
                return _u(f)(q, function(_u, v) {
                    return p[v].apply(_u, {
                        bandAware: s,
                        position: t
                    });
                });
            },
            isInRange: function(q) {
                return _r(e)(q, function(_r, s) {
                    return p[s].isInRange(_r);
                });
            }
        });
    };
}), b.register('orX8f', function(c, d) {
    var e = b('aljam'),
        f = b('LgxjC'),
        g = b('Xi1WD');
    c.exports = function(h, i) {
        var j = {};
        return i = g(i, 3), f(h, function(k, l, m) {
            e(j, l, i(k, l, m));
        }), j;
    };
}), b.register('aljam', function(c, d) {
    var e = b('9Snxc');
    c.exports = function(f, g, h) {
        '__proto__' == g && e ? e(f, g, {
            configurable: !0,
            enumerable: !0,
            value: h,
            writable: !0
        }) : f[g] = h;
    };
}), b.register('SS2ww', function(c, d) {
    _g(c.exports, 'warn', function() {
        return b;
    });
    var e = function(f, _g) {
        for (var h = arguments.length, i = new Array(h > 2 ? h - 2 : 0), j = 2; j < h; j++)
            i[j - 2] = arguments[j];
    };
}), b.register('cKVsf', function(c, d) {
    _r(c.exports, 'ReferenceLine', function() {
        return _p;
    });
    var e = b('IKuAh'),
        f = b('4R9wH'),
        g = b('LEQ5w'),
        h = b('JrtKP'),
        i = b('MXVYT'),
        _j = b('WUpxn'),
        k = b('zP0mN'),
        _l = b('F2lA2'),
        _m = b('5Or8B'),
        n = b('SS2ww'),
        o = b('SLFbE');

    function p(q, _r) {
        var s = Object.keys(q);
        if (Object.getOwnPropertySymbols) {
            var t = Object.getOwnPropertySymbols(q);
            _r && (t = t.filter(function(u) {
                return Object.getOwnPropertyDescriptor(q, u).enumerable;
            })), s.push.apply(s, t);
        }
        return s;
    }

    function p(q) {
        for (var r = 1; r < arguments.length; r++) {
            var s = null != arguments[r] ? arguments[r] : {};
            r % 2 ? _u(Object(s), !0).forEach(function(t) {
                _p(q, t, s[t]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(q, Object.getOwnPropertyDescriptors(s)) : _u(Object(s)).forEach(function(t) {
                Object.defineProperty(q, t, Object.getOwnPropertyDescriptor(s, t));
            });
        }
        return q;
    }

    function _p(q, r, s) {
        return r in q ? Object.defineProperty(q, r, {
            value: s,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : q[r] = s, q;
    }

    function p(q, r) {
        return function(s) {
            if (Array.isArray(s))
                return s;
        }(q) || function(s, t) {
            if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(s)))
                return;
            var u = [],
                v = !0,
                w = !1,
                x = void 0;
            try {
                for (var y, z = s[Symbol.iterator](); !(v = (y = z.next()).done) && (u.push(y.value), !t || u.length !== t); v = !0);
            } catch (s) {
                w = !0, x = s;
            } finally {
                try {
                    v || null == g.return || g.return();
                } finally {
                    if (w)
                        throw x;
                }
            }
            return u;
        }(q, r) || function(s, t) {
            if (!s)
                return;
            if ('string' == typeof s)
                return _p(s, t);
            var u = Object.prototype.toString.call(s).slice(8, -1);
            'Object' === u && s.constructor && (u = s.constructor.name);
            if ('Map' === u || 'Set' === u)
                return Array.from(s);
            if ('Arguments' === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))
                return _p(s, t);
        }(q, r) || function() {
            throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }

    function _p(q, r) {
        (null == r || r > q.length) && (r = q.length);
        for (var s = 0, t = new Array(r); s < r; s++)
            t[s] = q[s];
        return t;
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

    function _p(q) {
        var r = q.x,
            s = q.y,
            t = q.segment,
            _u = q.xAxis,
            v = q.yAxis,
            w = q.shape,
            x = q.className,
            y = q.alwaysShow,
            z = q.clipPathId;
        (0, n.warn)(void 0 === y, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
        var A = function(B, C, D, E, F) {
            var G = F.viewBox,
                H = G.x,
                I = G.y,
                J = G.width,
                K = G.height,
                L = F.position;
            if (D) {
                var M = F.y,
                    N = F.yAxis.orientation,
                    O = B.y.apply(M, {
                        position: L
                    });
                if ((0, k.ifOverflowMatches)(F, 'discard') && !B.y.isInRange(O))
                    return null;
                var P = [{
                        x: H + J,
                        y: O
                    },
                    {
                        x: H,
                        y: O
                    }
                ];
                return 'left' === N ? P.reverse() : P;
            }
            if (C) {
                var M = F.x,
                    N = F.xAxis.orientation,
                    O = B.x.apply(M, {
                        position: L
                    });
                if ((0, k.ifOverflowMatches)(F, 'discard') && !B.x.isInRange(O))
                    return null;
                var P = [{
                        x: O,
                        y: I + K
                    },
                    {
                        x: O,
                        y: I
                    }
                ];
                return 'top' === N ? P.reverse() : P;
            }
            if (E) {
                var M = F.segment.map(function(N) {
                    return B.apply(N, {
                        position: L
                    });
                });
                return (0, k.ifOverflowMatches)(F, 'discard') && _N(e)(M, function(_N) {
                    return !B.isInRange(_N);
                }) ? null : M;
            }
            return null;
        }((0, _m.createLabeledScales)({
            x: _u.scale,
            y: v.scale
        }), (0, _l.isNumOrStr)(r), (0, _l.isNumOrStr)(s), t && 2 === t.length, q);
        if (!A)
            return null;
        var B = _p(A, 2),
            C = B[0],
            D = C.x,
            E = C.y,
            F = B[1],
            G = F.x,
            H = F.y,
            I = _p(_p({
                clipPath: (0, k.ifOverflowMatches)(q, 'hidden') ? 'url(#'.concat(z, ')') : void 0
            }, (0, o.filterProps)(q, !0)), {}, {
                x1: D,
                y1: E,
                x2: G,
                y2: H
            });
        return _c(g).createElement(i.Layer, {
            className: _c(h)('recharts-reference-line', x)
        }, function(J, K) {
            return _c(g).isValidElement(J) ? _c(g).cloneElement(J, K) : _c(f)(J) ? J(K) : _c(g).createElement('line', _z({}, K, {
                className: 'recharts-reference-line-line'
            }));
        }(w, I), _j.Label.renderCallByParent(q, (0, _m.rectWithCoords)({
            x1: D,
            y1: E,
            x2: G,
            y2: H
        })));
    }
    _A.displayName = 'ReferenceLine', _A.defaultProps = {
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
}), b.register('IKuAh', function(_c, d) {
    var e = b('18Cxu0'),
        f = b('Xi1WD'),
        g = b('jigaS'),
        h = b('iieiP0'),
        i = b('Zz9Zw');
    _c.exports = function(j, k, l) {
        var m = h(j) ? e : g;
        return l && i(j, k, l) && (k = void 0), m(j, f(k, 3));
    };
}), b.register('jigaS', function(c, d) {
    var e = b('0m0bg');
    c.exports = function(f, g) {
        var h;
        return e(f, function(i, j, k) {
            return !(h = g(i, j, k));
        }), !!h;
    };
}), b.register('78Mry', function(c, d) {
    _r(c.exports, 'ReferenceArea', function() {
        return _p;
    });
    var e = b('4R9wH'),
        f = b('LEQ5w'),
        g = b('JrtKP'),
        h = b('MXVYT'),
        i = b('WUpxn'),
        j = b('5Or8B'),
        k = b('zP0mN'),
        l = b('F2lA2'),
        m = b('SS2ww'),
        n = b('bR0hn'),
        o = b('SLFbE');

    function p() {
        return p = Object.assign || function(q) {
            for (var _r = 1; _r < arguments.length; _r++) {
                var s = arguments[_r];
                for (var t in s)
                    Object.prototype.hasOwnProperty.call(s, t) && (q[t] = s[t]);
            }
            return q;
        }, p.apply(this, arguments);
    }

    function _p(q, r) {
        var s = Object.keys(q);
        if (Object.getOwnPropertySymbols) {
            var t = Object.getOwnPropertySymbols(q);
            r && (t = t.filter(function(u) {
                return Object.getOwnPropertyDescriptor(q, u).enumerable;
            })), s.push.apply(s, t);
        }
        return s;
    }

    function p(q) {
        for (var r = 1; r < arguments.length; r++) {
            var s = null != arguments[r] ? arguments[r] : {};
            r % 2 ? _x(Object(s), !0).forEach(function(t) {
                _p(q, t, s[t]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(q, Object.getOwnPropertyDescriptors(s)) : _x(Object(s)).forEach(function(t) {
                Object.defineProperty(q, t, Object.getOwnPropertyDescriptor(s, t));
            });
        }
        return q;
    }

    function _p(q, r, s) {
        return r in q ? Object.defineProperty(q, r, {
            value: s,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : q[r] = s, q;
    }

    function _p(q) {
        var r = q.x1,
            s = q.x2,
            t = q.y1,
            u = q.y2,
            v = q.className,
            w = q.alwaysShow,
            _x = q.clipPathId;
        (0, m.warn)(void 0 === w, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
        var y = (0, l.isNumOrStr)(r),
            _z = (0, l.isNumOrStr)(s),
            _A = (0, l.isNumOrStr)(t),
            B = (0, l.isNumOrStr)(u),
            C = q.shape;
        if (!(y || _z || _A || B || C))
            return null;
        var D = function(E, F, G, H, I) {
            var J = I.x1,
                K = I.x2,
                L = I.y1,
                M = I.y2,
                N = I.xAxis,
                O = I.yAxis;
            if (!N || !O)
                return null;
            var P = (0, j.createLabeledScales)({
                    x: N.scale,
                    y: O.scale
                }),
                Q = {
                    x: E ? P.x.apply(J, {
                        position: 'start'
                    }) : P.x.rangeMin,
                    y: G ? P.y.apply(L, {
                        position: 'start'
                    }) : P.y.rangeMin
                },
                R = {
                    x: F ? P.x.apply(K, {
                        position: 'end'
                    }) : P.x.rangeMax,
                    y: H ? P.y.apply(M, {
                        position: 'end'
                    }) : P.y.rangeMax
                };
            return !(0, k.ifOverflowMatches)(I, 'discard') || P.isInRange(Q) && P.isInRange(R) ? (0, j.rectWithPoints)(Q, R) : null;
        }(y, _z, _A, B, q);
        if (!D && !C)
            return null;
        var E = (0, k.ifOverflowMatches)(q, 'hidden') ? 'url(#'.concat(_x, ')') : void 0;
        return _c(f).createElement(h.Layer, {
            className: _c(g)('recharts-reference-area', v)
        }, _p.renderRect(C, _i(_i({
            clipPath: E
        }, (0, o.filterProps)(q, !0)), D)), i.Label.renderCallByParent(q, D));
    }
    _i.displayName = 'ReferenceArea', _i.defaultProps = {
        isFront: !1,
        ifOverflow: 'discard',
        xAxisId: 0,
        yAxisId: 0,
        r: 10,
        fill: '#ccc',
        fillOpacity: 0.5,
        stroke: 'none',
        strokeWidth: 1
    }, _i.renderRect = function(p, q) {
        return _c(f).isValidElement(p) ? _c(f).cloneElement(p, q) : _c(e)(p) ? p(q) : _c(f).createElement(n.Rectangle, _i({}, q, {
            className: 'recharts-reference-area-rect'
        }));
    };
}), b.register('c460X', function(c, d) {
    _d(c.exports, 'eventCenter', function() {
        return _e;
    }), _d(c.exports, 'SYNC_EVENT', function() {
        return _f;
    });
    var _e = new(_c(b('sJ6Ji')))();
    _e.setMaxListeners && _e.setMaxListeners(10);
    var _f = 'recharts.syncMouseEvents';
}), b.register('sJ6Ji', function(_c, _d) {
    var e = Object.prototype.hasOwnProperty,
        f = '~';

    function g() {}

    function g(h, i, j) {
        this.fn = h, this.context = i, this.once = j || !1;
    }

    function g(h, i, j, k, l) {
        if ('function' != typeof j)
            throw new TypeError('The listener must be a function');
        var m = new _k(j, k || h, l),
            n = f ? f + i : i;
        return h._events[n] ? h._events[n].fn ? h._events[n] = [
            h._events[n],
            m
        ] : h._events[n].push(m) : (h._events[n] = m, h._eventsCount++), h;
    }

    function g(h, i) {
        0 == --h._eventsCount ? h._events = new _i() : delete h._events[i];
    }

    function g() {
        this._events = new _i(), this._eventsCount = 0;
    }
    Object.create && (_i.prototype = Object.create(null), new _i().__proto__ || (f = !1)), _n.prototype.eventNames = function() {
        var g, h, _i = [];
        if (0 === this._eventsCount)
            return _i;
        for (h in g = this._events)
            e.call(g, h) && _i.push(f ? h.slice(1) : h);
        return Object.getOwnPropertySymbols ? _i.concat(Object.getOwnPropertySymbols(g)) : _i;
    }, _n.prototype.listeners = function(g) {
        var h = f ? f + g : g,
            i = this._events[h];
        if (!i)
            return [];
        if (i.fn)
            return [i.fn];
        for (var j = 0, _k = i.length, l = new Array(_k); j < _k; j++)
            l[j] = i[j].fn;
        return l;
    }, _n.prototype.listenerCount = function(g) {
        var h = f ? f + g : g,
            i = this._events[h];
        return i ? i.fn ? 1 : i.length : 0;
    }, _n.prototype.emit = function(g, h, i, j, k, l) {
        var m = f ? f + g : g;
        if (!this._events[m])
            return !1;
        var _n, o, p = this._events[m],
            q = arguments.length;
        if (p.fn) {
            switch (p.once && this.removeListener(g, p.fn, void 0, !0), q) {
                case 1:
                    return p.fn.call(p.context), !0;
                case 2:
                    return p.fn.call(p.context, h), !0;
                case 3:
                    return p.fn.call(p.context, h, i), !0;
                case 4:
                    return p.fn.call(p.context, h, i, j), !0;
                case 5:
                    return p.fn.call(p.context, h, i, j, k), !0;
                case 6:
                    return p.fn.call(p.context, h, i, j, k, l), !0;
            }
            for (o = 1, _n = new Array(q - 1); o < q; o++)
                _n[o - 1] = arguments[o];
            p.fn.apply(p.context, _n);
        } else {
            var r, s = p.length;
            for (o = 0; o < s; o++)
                switch (p[o].once && this.removeListener(g, p[o].fn, void 0, !0), q) {
                    case 1:
                        p[o].fn.call(p[o].context);
                        break;
                    case 2:
                        p[o].fn.call(p[o].context, h);
                        break;
                    case 3:
                        p[o].fn.call(p[o].context, h, i);
                        break;
                    case 4:
                        p[o].fn.call(p[o].context, h, i, j);
                        break;
                    default:
                        if (!_n)
                            for (r = 1, _n = new Array(q - 1); r < q; r++)
                                _n[r - 1] = arguments[r];
                        p[o].fn.apply(p[o].context, _n);
                }
        }
        return !0;
    }, _m.prototype.on = function(g, h, i) {
        return _l(this, g, h, i, !1);
    }, _m.prototype.once = function(g, h, i) {
        return _l(this, g, h, i, !0);
    }, _m.prototype.removeListener = function(g, h, i, j) {
        var k = f ? f + g : g;
        if (!this._events[k])
            return this;
        if (!h)
            return _g(this, k), this;
        var _l = this._events[k];
        if (_l.fn)
            _l.fn !== h || j && !_l.once || i && _l.context !== i || _g(this, k);
        else {
            for (var _m = 0, n = [], o = _l.length; _m < o; _m++)
                (_l[_m].fn !== h || j && !_l[_m].once || i && _l[_m].context !== i) && n.push(_l[_m]);
            n.length ? this._events[k] = 1 === n.length ? n[0] : n : _g(this, k);
        }
        return this;
    }, _h.prototype.removeAllListeners = function(g) {
        var h;
        return g ? (h = f ? f + g : g, this._events[h] && _g(this, h)) : (this._events = new _d(), this._eventsCount = 0), this;
    }, _h.prototype.off = _h.prototype.removeListener, _h.prototype.addListener = _h.prototype.on, _h.prefixed = f, _h.EventEmitter = _h, _c.exports = _h;
}), b.register('dDSF8', function(c, d) {
    _k(c.exports, 'XAxis', function() {
        return b;
    });
    var e = function() {
        return null;
    };
    e.displayName = 'XAxis', e.defaultProps = {
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
}), b.register('Yd+Kp', function(c, d) {
    _k(c.exports, 'YAxis', function() {
        return b;
    });
    var e = function() {
        return null;
    };
    e.displayName = 'YAxis', e.defaultProps = {
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
}), b.register('hM9Ax', function(c, _d) {
    _k(c.exports, 'CartesianGrid', function() {
        return _i;
    });
    var e = b('4R9wH'),
        f = b('LEQ5w'),
        _g = b('F2lA2'),
        _h = b('SLFbE');

    function i(j) {
        return i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(k) {
            return typeof k;
        } : function(k) {
            return k && 'function' == typeof Symbol && k.constructor === Symbol && k !== Symbol.prototype ? 'symbol' : typeof k;
        }, i(j);
    }

    function i() {
        return i = Object.assign || function(j) {
            for (var _k = 1; _k < arguments.length; _k++) {
                var l = arguments[_k];
                for (var m in l)
                    Object.prototype.hasOwnProperty.call(l, m) && (j[m] = l[m]);
            }
            return j;
        }, i.apply(this, arguments);
    }

    function i(j, k) {
        if (null == j)
            return {};
        var l, m, n = function(o, p) {
            if (null == o)
                return {};
            var q, r, s = {},
                t = Object.keys(o);
            for (r = 0; r < t.length; r++)
                q = t[r], p.indexOf(q) >= 0 || (s[q] = o[q]);
            return s;
        }(j, k);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(j);
            for (m = 0; m < o.length; m++)
                l = o[m], k.indexOf(l) >= 0 || Object.prototype.propertyIsEnumerable.call(j, l) && (n[l] = j[l]);
        }
        return n;
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

    function i(j) {
        for (var k = 1; k < arguments.length; k++) {
            var l = null != arguments[k] ? arguments[k] : {};
            k % 2 ? _o(Object(l), !0).forEach(function(m) {
                _i(j, m, l[m]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(j, Object.getOwnPropertyDescriptors(l)) : _o(Object(l)).forEach(function(m) {
                Object.defineProperty(j, m, Object.getOwnPropertyDescriptor(l, m));
            });
        }
        return j;
    }

    function _i(j, k, l) {
        return k in j ? Object.defineProperty(j, k, {
            value: l,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : j[k] = l, j;
    }

    function i(j, k) {
        if (!(j instanceof k))
            throw new TypeError('Cannot call a class as a function');
    }

    function _i(j, k) {
        for (var l = 0; l < k.length; l++) {
            var m = k[l];
            m.enumerable = m.enumerable || !1, m.configurable = !0, 'value' in m && (m.writable = !0), Object.defineProperty(j, m.key, m);
        }
    }

    function i(j, k) {
        return i = Object.setPrototypeOf || function(l, m) {
            return l.__proto__ = m, l;
        }, i(j, k);
    }

    function _i(j) {
        var k = function() {
            if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ('function' == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
            } catch (j) {
                return !1;
            }
        }();
        return function() {
            var l, m = _i(j);
            if (k) {
                var n = _i(this).constructor;
                l = Reflect.construct(m, arguments, n);
            } else
                l = m.apply(this, arguments);
            return _i(this, l);
        };
    }

    function _i(j, k) {
        return !k || 'object' !== _n(k) && 'function' != typeof k ? function(l) {
            if (void 0 === l)
                throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return l;
        }(j) : k;
    }

    function _i(j) {
        return _i = Object.setPrototypeOf ? Object.getPrototypeOf : function(k) {
            return k.__proto__ || Object.getPrototypeOf(k);
        }, _i(j);
    }
    var _i = function(j) {
        ! function(k, l) {
            if ('function' != typeof l && null !== l)
                throw new TypeError('Super expression must either be null or a function');
            k.prototype = Object.create(l && l.prototype, {
                constructor: {
                    value: k,
                    writable: !0,
                    configurable: !0
                }
            }), l && _B(k, l);
        }(_o, j);
        var k, l, m, _n = _C(_o);

        function _o() {
            return _z(this, _o), _n.apply(this, arguments);
        }
        return k = _u, m = [{
            key: 'renderLineItem',
            value: function(o, p) {
                var q;
                if (_v(f).isValidElement(o))
                    q = _v(f).cloneElement(o, p);
                else if (_v(e)(o))
                    q = o(p);
                else {
                    var r = p.x1,
                        s = p.y1,
                        t = p.x2,
                        _u = p.y2,
                        v = p.key,
                        w = _x(p, [
                            'x1',
                            'y1',
                            'x2',
                            'y2',
                            'key'
                        ]);
                    q = _v(f).createElement('line', _w({}, (0, _h.filterProps)(w), {
                        x1: r,
                        y1: s,
                        x2: t,
                        y2: _u,
                        fill: 'none',
                        key: v
                    }));
                }
                return q;
            }
        }], (l = [{
                key: 'renderHorizontal',
                value: function(o) {
                    var p = this,
                        q = this.props,
                        r = q.x,
                        s = q.width,
                        t = q.horizontal;
                    if (!o || !o.length)
                        return null;
                    var u = o.map(function(_v, w) {
                        var x = _x(_x({}, p.props), {}, {
                            x1: r,
                            y1: _v,
                            x2: r + s,
                            y2: _v,
                            key: 'line-'.concat(w),
                            index: w
                        });
                        return _B.renderLineItem(t, x);
                    });
                    return _v(f).createElement('g', {
                        className: 'recharts-cartesian-grid-horizontal'
                    }, u);
                }
            },
            {
                key: 'renderVertical',
                value: function(o) {
                    var p = this,
                        q = this.props,
                        r = q.y,
                        s = q.height,
                        t = q.vertical;
                    if (!o || !o.length)
                        return null;
                    var u = o.map(function(_v, w) {
                        var x = _x(_x({}, p.props), {}, {
                            x1: _v,
                            y1: r,
                            x2: _v,
                            y2: r + s,
                            key: 'line-'.concat(w),
                            index: w
                        });
                        return _B.renderLineItem(t, x);
                    });
                    return _x(f).createElement('g', {
                        className: 'recharts-cartesian-grid-vertical'
                    }, u);
                }
            },
            {
                key: 'renderVerticalStripes',
                value: function(o) {
                    var p = this.props.verticalFill;
                    if (!p || !p.length)
                        return null;
                    var q = this.props,
                        r = q.fillOpacity,
                        s = q.x,
                        t = q.y,
                        u = q.width,
                        v = q.height,
                        _w = o.slice().sort(function(_x, y) {
                            return _x - y;
                        });
                    s !== _w[0] && _w.unshift(0);
                    var _x = _w.map(function(y, z) {
                        var A = _w[z + 1] ? _w[z + 1] - y : s + u - y;
                        if (A <= 0)
                            return null;
                        var _B = z % p.length;
                        return _x(f).createElement('rect', {
                            key: 'react-'.concat(z),
                            x: Math.round(y + s - s),
                            y: t,
                            width: A,
                            height: v,
                            stroke: 'none',
                            fill: p[_B],
                            fillOpacity: r,
                            className: 'recharts-cartesian-grid-bg'
                        });
                    });
                    return _x(f).createElement('g', {
                        className: 'recharts-cartesian-gridstripes-vertical'
                    }, _x);
                }
            },
            {
                key: 'renderHorizontalStripes',
                value: function(o) {
                    var p = this.props.horizontalFill;
                    if (!p || !p.length)
                        return null;
                    var q = this.props,
                        r = q.fillOpacity,
                        s = q.x,
                        t = q.y,
                        u = q.width,
                        v = q.height,
                        w = o.slice().sort(function(_x, y) {
                            return _x - y;
                        });
                    t !== w[0] && w.unshift(0);
                    var x = w.map(function(y, z) {
                        var A = w[z + 1] ? w[z + 1] - y : t + v - y;
                        if (A <= 0)
                            return null;
                        var B = z % p.length;
                        return _l(f).createElement('rect', {
                            key: 'react-'.concat(z),
                            y: Math.round(y + t - t),
                            x: s,
                            height: A,
                            width: u,
                            stroke: 'none',
                            fill: p[B],
                            fillOpacity: r,
                            className: 'recharts-cartesian-grid-bg'
                        });
                    });
                    return _l(f).createElement('g', {
                        className: 'recharts-cartesian-gridstripes-horizontal'
                    }, x);
                }
            },
            {
                key: 'renderBackground',
                value: function() {
                    var o = this.props.fill;
                    if (!o || 'none' === o)
                        return null;
                    var p = this.props,
                        q = p.fillOpacity,
                        r = p.x,
                        s = p.y,
                        t = p.width,
                        u = p.height;
                    return _l(f).createElement('rect', {
                        x: r,
                        y: s,
                        width: t,
                        height: u,
                        stroke: 'none',
                        fill: o,
                        fillOpacity: q,
                        className: 'recharts-cartesian-grid-bg'
                    });
                }
            },
            {
                key: 'render',
                value: function() {
                    var o = this.props,
                        p = o.x,
                        q = o.y,
                        r = o.width,
                        s = o.height,
                        t = o.horizontal,
                        u = o.vertical,
                        v = o.horizontalCoordinatesGenerator,
                        w = o.verticalCoordinatesGenerator,
                        _x = o.xAxis,
                        y = o.yAxis,
                        _z = o.offset,
                        A = o.chartWidth,
                        _B = o.chartHeight;
                    if (!(0, _g.isNumber)(r) || r <= 0 || !(0, _g.isNumber)(s) || s <= 0 || !(0, _g.isNumber)(p) || p !== +p || !(0, _g.isNumber)(q) || q !== +q)
                        return null;
                    var _C = this.props,
                        D = _C.horizontalPoints,
                        E = _C.verticalPoints;
                    return D && D.length || !_l(e)(v) || (D = v({
                        yAxis: y,
                        width: A,
                        height: _B,
                        offset: _z
                    })), E && E.length || !_l(e)(w) || (E = w({
                        xAxis: _x,
                        width: A,
                        height: _B,
                        offset: _z
                    })), _l(f).createElement('g', {
                        className: 'recharts-cartesian-grid'
                    }, this.renderBackground(), t && this.renderHorizontal(D), u && this.renderVertical(E), t && this.renderHorizontalStripes(D), u && this.renderVerticalStripes(E));
                }
            }
        ]) && _s(k.prototype, l), m && _s(k, m), _k;
    }(f.PureComponent);
    _i.displayName = 'CartesianGrid', _i.defaultProps = {
        horizontal: !0,
        vertical: !0,
        horizontalPoints: [],
        verticalPoints: [],
        stroke: '#ccc',
        fill: 'none',
        verticalFill: [],
        horizontalFill: []
    };
}), b.register('RxO0l', function(c, d) {
    _m(c.exports, 'ResponsiveContainer', function() {
        return _k;
    });
    var e = b('WA7gy'),
        f = b('JrtKP'),
        g = b('LEQ5w'),
        h = b('AQl2e'),
        i = b('F2lA2'),
        j = b('SS2ww');

    function k() {
        return k = Object.assign || function(_l) {
            for (var _m = 1; _m < arguments.length; _m++) {
                var n = arguments[_m];
                for (var o in n)
                    Object.prototype.hasOwnProperty.call(n, o) && (_l[o] = n[o]);
            }
            return _l;
        }, k.apply(this, arguments);
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
                    q || null == g.return || g.return();
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
                return _k(n, o);
            var p = Object.prototype.toString.call(n).slice(8, -1);
            'Object' === p && n.constructor && (p = n.constructor.name);
            if ('Map' === p || 'Set' === p)
                return Array.from(n);
            if ('Arguments' === p || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p))
                return _k(n, o);
        }(l, m) || function() {
            throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }

    function _k(l, m) {
        (null == m || m > l.length) && (m = l.length);
        for (var n = 0, o = new Array(m); n < m; n++)
            o[n] = l[n];
        return o;
    }
    var _k = (0, g.forwardRef)(function(l, m) {
        var n = l.aspect,
            o = l.width,
            p = void 0 === o ? '100%' : o,
            q = l.height,
            r = void 0 === q ? '100%' : q,
            _s = l.minWidth,
            t = l.minHeight,
            u = l.maxHeight,
            v = l.children,
            w = l.debounce,
            x = void 0 === w ? 0 : w,
            y = l.id,
            z = l.className,
            A = _j((0, g.useState)({
                containerWidth: -1,
                containerHeight: -1
            }), 2),
            B = A[0],
            C = A[1],
            D = (0, g.useRef)(null);
        (0, g.useImperativeHandle)(m, function() {
            return D;
        }, [D]);
        var E = _j((0, g.useState)(!1), 2),
            F = E[0],
            G = E[1],
            H = function() {
                return D.current ? {
                    containerWidth: D.current.clientWidth,
                    containerHeight: D.current.clientHeight
                } : null;
            },
            I = function() {
                if (F) {
                    var J = H();
                    if (J) {
                        var K = B.containerWidth,
                            L = B.containerHeight,
                            M = J.containerWidth,
                            N = J.containerHeight;
                        M === K && N === L || C({
                            containerWidth: M,
                            containerHeight: N
                        });
                    }
                }
            },
            J = x > 0 ? _K(e)(I, x) : I;
        (0, g.useEffect)(function() {
            if (F) {
                var _K = H();
                _K && C(_K);
            }
        }, [F]), (0, g.useEffect)(function() {
            G(!0);
        }, []);
        var K = {
            width: p,
            height: r,
            minWidth: _s,
            minHeight: t,
            maxHeight: u
        };
        return _L(g).createElement(h.default, {
            handleWidth: !0,
            handleHeight: !0,
            onResize: J,
            targetRef: D
        }, _L(g).createElement('div', _i({}, null != y ? {
            id: ''.concat(y)
        } : {}, {
            className: _L(f)('recharts-responsive-container', z),
            style: K,
            ref: D
        }), function() {
            var _L = B.containerWidth,
                M = B.containerHeight;
            if (_L < 0 || M < 0)
                return null;
            (0, j.warn)((0, i.isPercent)(p) || (0, i.isPercent)(r), 'The width(%s) and height(%s) are both fixed numbers,\n       maybe you don\'t need to use a ResponsiveContainer.', p, r), (0, j.warn)(!n || n > 0, 'The aspect(%s) must be greater than zero.', n);
            var N = (0, i.isPercent)(p) ? _L : p,
                O = (0, i.isPercent)(r) ? M : r;
            return n && n > 0 && (N ? O = N / n : O && (N = O * n), u && O > u && (O = u)), (0, j.warn)(N > 0 || O > 0, 'The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.', N, O, p, r, _s, t, n), (0, g.cloneElement)(v, {
                width: N,
                height: O
            });
        }()));
    });
}), b.register('AQl2e', function(c, d) {
    _i(c.exports, 'default', function() {
        return _$;
    });
    var e = b('LEQ5w'),
        f = (e = b('LEQ5w'), b('Z/8fU')),
        g = function(h, _i) {
            return g = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(j, k) {
                j.__proto__ = k;
            } || function(j, k) {
                for (var l in k)
                    Object.prototype.hasOwnProperty.call(k, l) && (j[l] = k[l]);
            }, g(h, _i);
        };

    function h(i, j) {
        if ('function' != typeof j && null !== j)
            throw new TypeError('Class extends value ' + String(j) + ' is not a constructor or null');

        function k() {
            this.constructor = i;
        }
        g(i, j), i.prototype = null === j ? Object.create(j) : (a.prototype = j.prototype, new a());
    }

    function h(i, j) {
        var k = {};
        for (var l in i)
            Object.prototype.hasOwnProperty.call(i, l) && j.indexOf(l) < 0 && (k[l] = i[l]);
        if (null != i && 'function' == typeof Object.getOwnPropertySymbols) {
            var m = 0;
            for (l = Object.getOwnPropertySymbols(i); m < l.length; m++)
                j.indexOf(l[m]) < 0 && Object.prototype.propertyIsEnumerable.call(i, l[m]) && (k[l[m]] = i[l[m]]);
        }
        return k;
    }
    var h = 'undefined' != typeof globalThis ? globalThis : 'undefined' != typeof window ? window : void 0 !== a ? a : 'undefined' != typeof self ? self : {};
    var _i = function(j) {
            var k = typeof j;
            return null != j && ('object' == k || 'function' == k);
        },
        _j = 'object' == typeof h && h && h.Object === Object && h,
        k = 'object' == typeof self && self && self.Object === Object && self,
        l = _j || k || Function('return this')(),
        m = l,
        n = function() {
            return m.Date.now();
        },
        o = /\s/;
    var p = function(q) {
            for (var r = q.length; r-- && o.test(q.charAt(r)););
            return r;
        },
        q = /^\s+/;
    var r = function(s) {
            return s ? s.slice(0, p(s) + 1).replace(q, '') : s;
        },
        s = l.Symbol,
        t = s,
        u = Object.prototype,
        v = u.hasOwnProperty,
        w = u.toString,
        x = t ? t.toStringTag : void 0;
    var y = function(z) {
            var A = v.call(z, x),
                B = z[x];
            try {
                z[x] = void 0;
                var C = !0;
            } catch (z) {}
            var C = w.call(z);
            return b && (A ? z[x] = B : delete z[x]), C;
        },
        z = Object.prototype.toString;
    var A = y,
        B = function(C) {
            return z.call(C);
        },
        C = s ? s.toStringTag : void 0;
    var D = function(E) {
            return null == E ? void 0 === E ? '[object Undefined]' : '[object Null]' : C && C in Object(E) ? A(E) : B(E);
        },
        E = function(F) {
            return null != F && 'object' == typeof F;
        };
    var F = r,
        G = _i,
        H = function(I) {
            return 'symbol' == typeof I || E(I) && '[object Symbol]' == D(I);
        },
        I = /^[-+]0x[0-9a-f]+$/i,
        J = /^0b[01]+$/i,
        _K = /^0o[0-7]+$/i,
        _L = parseInt;
    var _M = _i,
        _N = n,
        _O = function(P) {
            if ('number' == typeof P)
                return P;
            if (H(P))
                return NaN;
            if (G(P)) {
                var Q = 'function' == typeof P.valueOf ? P.valueOf() : P;
                P = G(Q) ? Q + '' : Q;
            }
            if ('string' != typeof P)
                return 0 === P ? P : +P;
            P = F(P);
            var Q = J.test(P);
            return Q || _K.test(P) ? _L(P.slice(2), Q ? 2 : 8) : I.test(P) ? NaN : +P;
        },
        P = Math.max,
        _Q = Math.min;
    var R = function(S, T, U) {
            var V, W, X, Y, Z, $, ab = 0,
                bb = !1,
                cb = !1,
                db = !0;
            if ('function' != typeof S)
                throw new TypeError('Expected a function');

            function eb(fb) {
                var gb = V,
                    hb = W;
                return V = W = void 0, ab = fb, Y = S.apply(hb, gb);
            }

            function eb(fb) {
                return ab = fb, Z = setTimeout(n, T), bb ? k(fb) : Y;
            }

            function eb(fb) {
                var gb = fb - $;
                return void 0 === $ || gb >= T || gb < 0 || cb && fb - ab >= X;
            }

            function eb() {
                var fb = _N();
                if (m(fb))
                    return o(fb);
                Z = setTimeout(eb, function(gb) {
                    var hb = T - (gb - $);
                    return cb ? _Q(hb, X - (gb - ab)) : hb;
                }(fb));
            }

            function eb(fb) {
                return Z = void 0, db && V ? k(fb) : (V = W = void 0, Y);
            }

            function eb() {
                var fb = _N(),
                    gb = m(fb);
                if (V = arguments, W = this, $ = fb, gb) {
                    if (void 0 === Z)
                        return l($);
                    if (cb)
                        return clearTimeout(Z), Z = setTimeout(n, T), k($);
                }
                return void 0 === Z && (Z = setTimeout(n, T)), Y;
            }
            return T = _O(T) || 0, _M(U) && (bb = !!U.leading, X = (cb = 'maxWait' in U) ? P(_O(U.maxWait) || 0, T) : X, db = 'trailing' in U ? !!U.trailing : db), p.cancel = function() {
                void 0 !== Z && clearTimeout(Z), ab = 0, V = $ = W = Z = void 0;
            }, p.flush = function() {
                return void 0 === Z ? Y : o(_N());
            }, p;
        },
        _S = R,
        T = _i;
    var U = function(V, W, X) {
            var Y = !0,
                Z = !0;
            if ('function' != typeof V)
                throw new TypeError('Expected a function');
            return T(X) && (Y = 'leading' in X ? !!X.leading : Y, Z = 'trailing' in X ? !!X.trailing : Z), _S(V, W, {
                leading: Y,
                maxWait: W,
                trailing: Z
            });
        },
        V = function(W, X, Y, Z) {
            switch (X) {
                case 'debounce':
                    return R(W, Y, Z);
                case 'throttle':
                    return U(W, Y, Z);
                default:
                    return W;
            }
        },
        _W = function(X) {
            return 'function' == typeof X;
        },
        _X = function() {
            return 'undefined' == typeof window;
        },
        Y = function(Z) {
            return Z instanceof Element || Z instanceof HTMLDocument;
        },
        Z = function($, ab, bb, cb) {
            return function(db) {
                var eb = db.width,
                    fb = db.height;
                ab(function(gb) {
                    return gb.width === eb && gb.height === fb || gb.width === eb && !cb || gb.height === fb && !bb ? gb : ($ && _W($) && $(eb, fb), {
                        width: eb,
                        height: fb
                    });
                });
            };
        },
        _$ = function(ab) {
            function bb(cb) {
                var db = ab.call(this, cb) || this;
                db.cancelHandler = function() {
                    db.resizeHandler && db.resizeHandler.cancel && (db.resizeHandler.cancel(), db.resizeHandler = null);
                }, db.attachObserver = function() {
                    var eb = db.props,
                        fb = eb.targetRef,
                        gb = eb.observerOptions;
                    if (!_X()) {
                        fb && fb.current && (db.targetRef.current = fb.current);
                        var hb = db.getElement();
                        hb && (db.observableElement && db.observableElement === hb || (db.observableElement = hb, db.resizeObserver.observe(hb, gb)));
                    }
                }, db.getElement = function() {
                    var eb = db.props,
                        fb = eb.querySelector,
                        gb = eb.targetDomEl;
                    if (_X())
                        return null;
                    if (fb)
                        return document.querySelector(fb);
                    if (gb && Y(gb))
                        return gb;
                    if (db.targetRef && Y(db.targetRef.current))
                        return db.targetRef.current;
                    var hb = (0, f.findDOMNode)(db);
                    if (!hb)
                        return null;
                    switch (db.getRenderType()) {
                        case 'renderProp':
                        case 'childFunction':
                        case 'child':
                        case 'childArray':
                            return hb;
                        default:
                            return hb.parentElement;
                    }
                }, db.createResizeHandler = function(eb) {
                    var fb = db.props,
                        gb = fb.handleWidth,
                        hb = void 0 === gb || gb,
                        ib = fb.handleHeight,
                        jb = void 0 === ib || ib,
                        kb = fb.onResize;
                    if (hb || jb) {
                        var lb = Z(kb, db.setState.bind(db), hb, jb);
                        eb.forEach(function(mb) {
                            var nb = mb && mb.contentRect || {},
                                ob = nb.width,
                                pb = nb.height;
                            !db.skipOnMount && !_X() && lb({
                                width: ob,
                                height: pb
                            }), db.skipOnMount = !1;
                        });
                    }
                }, db.getRenderType = function() {
                    var eb = db.props,
                        fb = eb.render,
                        gb = eb.children;
                    return _W(fb) ? 'renderProp' : _W(gb) ? 'childFunction' : (0, e.isValidElement)(gb) ? 'child' : Array.isArray(gb) ? 'childArray' : 'parent';
                };
                var eb = cb.skipOnMount,
                    fb = cb.refreshMode,
                    gb = cb.refreshRate,
                    hb = void 0 === gb ? 1000 : gb,
                    ib = cb.refreshOptions;
                return db.state = {
                    width: void 0,
                    height: void 0
                }, db.skipOnMount = eb, db.targetRef = (0, e.createRef)(), db.observableElement = null, _X() || (db.resizeHandler = V(db.createResizeHandler, fb, hb, ib), db.resizeObserver = new window.ResizeObserver(db.resizeHandler)), db;
            }
            return _ib(_cb, ab), _cb.prototype.componentDidMount = function() {
                this.attachObserver();
            }, _cb.prototype.componentDidUpdate = function() {
                this.attachObserver();
            }, _cb.prototype.componentWillUnmount = function() {
                _X() || (this.observableElement = null, this.resizeObserver.disconnect(), this.cancelHandler());
            }, _cb.prototype.render = function() {
                var bb, _cb = this.props,
                    db = _cb.render,
                    eb = _cb.children,
                    fb = _cb.nodeType,
                    gb = void 0 === fb ? 'div' : fb,
                    hb = this.state,
                    _ib = {
                        width: hb.width,
                        height: hb.height,
                        targetRef: this.targetRef
                    };
                switch (this.getRenderType()) {
                    case 'renderProp':
                        return db && db(_ib);
                    case 'childFunction':
                        return (bb = eb)(_ib);
                    case 'child':
                        if ((bb = eb).type && 'string' == typeof bb.type) {
                            var jb = _j(_ib, ['targetRef']);
                            return (0, e.cloneElement)(bb, jb);
                        }
                        return (0, e.cloneElement)(bb, _ib);
                    case 'childArray':
                        return (bb = eb).map(function(jb) {
                            return !!jb && (0, e.cloneElement)(jb, _ib);
                        });
                    default:
                        return e.createElement(gb, null);
                }
            }, _k;
        }(e.PureComponent);
    _X() ? e.useEffect : e.useLayoutEffect;
}), b.register('dtquX', function(c, d) {
    _k(c.exports, 'default', function() {
        return _j;
    });
    var e = b('fbkyQ'),
        f = b('LEQ5w'),
        g = b('zbmhG'),
        h = b('sLVIW'),
        i = function(j, _k) {
            return f.createElement(h.default, (0, e.default)((0, e.default)({}, j), {}, {
                ref: _k,
                icon: g.default
            }));
        };
    i.displayName = 'BarChartOutlined';
    var _j = f.forwardRef(i);
}), b.register('zbmhG', function(c, d) {
    _k(c.exports, 'default', function() {
        return b;
    });
    var e = {
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
}), b.register('8DzEw', function(c, d) {
    _k(c.exports, 'default', function() {
        return _h;
    });
    var e = b('UapK50'),
        f = b('PMl60');
    b('x/+rF');
    const g = ['bulk-analytics'];
    var _h = c => (0, e.useQuery)({
        queryKey: [
            g,
            c
        ],
        queryFn: () => (0, f.requestAsPromise)({
            url: '/api/bulk/usage/' + c
        }),
        retry: 0
    });
}), b.register('CJCpN', function(c, d) {
    _k(c.exports, 'default', function() {
        return _j;
    });
    var e = b('fbkyQ'),
        f = b('LEQ5w'),
        g = b('v47zB'),
        h = b('sLVIW'),
        i = function(j, _k) {
            return f.createElement(h.default, (0, e.default)((0, e.default)({}, j), {}, {
                ref: _k,
                icon: g.default
            }));
        };
    i.displayName = 'CheckOutlined';
    var _j = f.forwardRef(i);
}), b.register('v47zB', function(c, d) {
    _d(c.exports, 'default', function() {
        return b;
    });
    var e = {
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
}), b.register('CO72t', function(c, _d) {
    c.exports = function(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    };
});