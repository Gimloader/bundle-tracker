function a(a) {
    return a && a.__esModule ? a.default : a;
}

function b(a, b, c, d) {
    Object.defineProperty(a, b, {
        get: c,
        set: d,
        enumerable: !0,
        configurable: !0
    });
}
var c = 'undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {},
    d = c.parcelRequire388b;
d.register('nGQWW', function(c, F) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), b(c.exports, 'default', function() {
        return B;
    });
    var f = d('8kSQZ');
    d('uPP4W');
    var g = d('DHAkN'),
        h = d('wNQO7'),
        i = d('EXiJn'),
        j = d('OLZk4'),
        k = d('krqie'),
        l = d('L9b4X'),
        m = d('SwIBY'),
        n = d('lmfrI'),
        o = d('PjB0f'),
        p = d('h99Nu'),
        q = d('0x1Q5'),
        r = d('+98NM'),
        s = d('Iz059'),
        t = d('PxcG6'),
        u = d('gSUVO'),
        v = d('2MCaL');
    let w, x, y, z, A = a => a;
    var B = b => {
        const {
            bulkId: C
        } = D, {
            data: E,
            isLoading: F
        } = (0, t.default)(C);
        if (F)
            return (0, f.jsx)(C, {
                children: (0, f.jsx)(r.default, {
                    paragraph: {
                        rows: 14
                    }
                })
            });
        const G = null == E ? void 0 : E.monthlyInfo;
        if (!G || !G.length) {
            const H = Math.abs(a(v)().diff(a(v)((0, o.dateFromObjectId)(C)), 'months')) < 2;
            return (0, f.jsx)(C, {
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
                            children: H ? 'No usage data is available for this group license yet. Check back soon!' : 'No usage data is available for this group license.'
                        })
                    ]
                })
            });
        }
        return (0, f.jsxs)(C, {
            children: [
                (0, f.jsx)(D, {
                    children: 'Group Usage'
                }),
                (0, f.jsx)(E, {
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
                    percent: Math.ceil(100 * E.percentageUsage),
                    format: () => Math.ceil(100 * E.percentageUsage) + '%',
                    strokeColor: '#66bb6a'
                }),
                (0, f.jsx)('div', {
                    style: {
                        height: 30
                    }
                }),
                (0, f.jsx)(D, {
                    children: 'Monthly Usage'
                }),
                (0, f.jsx)(E, {
                    children: 'Percentage of members who hosted a live game in a given month.'
                }),
                (0, f.jsx)('div', {
                    style: {
                        height: 15
                    }
                }),
                (0, f.jsx)(F, {
                    children: (0, f.jsx)(j.ResponsiveContainer, {
                        height: 270,
                        children: (0, f.jsxs)(h.BarChart, {
                            margin: {
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0
                            },
                            data: G.map(a => ({
                                name: a.monthName,
                                Percentage: Math.ceil(100 * a.percentageOfMembersWhoHosted)
                            })),
                            children: [
                                (0, f.jsx)(i.CartesianGrid, {
                                    strokeDasharray: '3 3'
                                }),
                                (0, f.jsx)(l.XAxis, {
                                    dataKey: 'name'
                                }),
                                (0, f.jsx)(m.YAxis, {
                                    tickFormatter: a => a + '%'
                                }),
                                (0, f.jsx)(k.Tooltip, {
                                    formatter: a => (0, o.numberWithCommas)(a) + '%'
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
                (0, f.jsx)(D, {
                    children: 'Monthly Usage Frequency'
                }),
                (0, f.jsx)(E, {
                    children: 'Average live games hosted per active member each month'
                }),
                (0, f.jsx)('div', {
                    style: {
                        height: 15
                    }
                }),
                (0, f.jsx)(F, {
                    children: (0, f.jsx)(j.ResponsiveContainer, {
                        height: 270,
                        children: (0, f.jsxs)(h.BarChart, {
                            margin: {
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0
                            },
                            data: G.map(a => ({
                                name: a.monthName,
                                'Average Live Games Hosted': Math.round(a.averageGamesHosted)
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
                                    formatter: a => (0, o.numberWithCommas)(a)
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
    const C = p.default.div.attrs({
            className: 'maxWidth'
        })(w || (w = A`
  color: ${ 0 };
  font-family: ${ 0 };
  padding-top: 8px;
`), n.default.Black, u.Fonts.SFPro),
        D = p.default.div(x || (x = A`
  font-size: 25px;
  font-weight: ${ 0 };
`), u.FontWeights.UltraBold),
        E = p.default.div(y || (y = A`
  font-size: 17px;
`)),
        F = p.default.div.attrs({
            className: 'maxWidth'
        })(z || (z = A`
  padding: 25px;
  background: rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  padding-bottom: 8px;
`));
}), d.register('DHAkN', function(c, z) {
    b(c.exports, 'Bar', function() {
        return H;
    });
    var e = d('oskvv'),
        f = d('3MMPD'),
        g = d('tax32'),
        h = d('JslBt0'),
        i = d('uPP4W'),
        j = d('VAIs1'),
        k = d('Pv6EO'),
        l = d('xItwy'),
        m = d('iSJ10'),
        n = d('wKj+m'),
        o = d('5fr0x'),
        p = d('eQQdp'),
        q = d('u572v'),
        r = d('NvaHc'),
        s = d('GoeDC'),
        t = d('rR6Py'),
        u = d('5AxlR');

    function v(a) {
        return v = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(a) {
            return typeof a;
        } : function(a) {
            return a && 'function' == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? 'symbol' : typeof a;
        }, v(a);
    }

    function w(a, b) {
        if (null == a)
            return {};
        var x, y, z = function(a, b) {
            if (null == a)
                return {};
            var A, B, C = {},
                D = Object.keys(a);
            for (B = 0; B < D.length; B++)
                A = D[B], b.indexOf(A) >= 0 || (C[A] = a[A]);
            return C;
        }(a, b);
        if (Object.getOwnPropertySymbols) {
            var A = Object.getOwnPropertySymbols(a);
            for (y = 0; y < A.length; y++)
                x = A[y], b.indexOf(x) >= 0 || Object.prototype.propertyIsEnumerable.call(a, x) && (z[x] = a[x]);
        }
        return z;
    }

    function x() {
        return x = Object.assign || function(a) {
            for (var y = 1; y < i.length; y++) {
                var z = i[y];
                for (var A in z)
                    Object.prototype.hasOwnProperty.call(z, A) && (a[A] = z[A]);
            }
            return a;
        }, x.apply(this, i);
    }

    function y(a, b) {
        var z = Object.keys(a);
        if (Object.getOwnPropertySymbols) {
            var A = Object.getOwnPropertySymbols(a);
            b && (A = A.filter(function(b) {
                return Object.getOwnPropertyDescriptor(a, b).enumerable;
            })), z.push.apply(z, A);
        }
        return z;
    }

    function z(a) {
        for (var A = 1; A < i.length; A++) {
            var B = null != i[A] ? i[A] : {};
            A % 2 ? y(Object(B), !0).forEach(function(A) {
                A(a, A, B[A]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(B)) : y(Object(B)).forEach(function(A) {
                Object.defineProperty(a, A, Object.getOwnPropertyDescriptor(B, A));
            });
        }
        return a;
    }

    function A(a, b, c) {
        return b in a ? Object.defineProperty(a, b, {
            value: c,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : a[b] = c, a;
    }

    function B(a, b) {
        if (!(a instanceof b))
            throw new TypeError('Cannot call a class as a function');
    }

    function C(a, b) {
        for (var D = 0; D < b.length; D++) {
            var E = b[D];
            E.enumerable = E.enumerable || !1, E.configurable = !0, 'value' in E && (E.writable = !0), Object.defineProperty(a, E.key, E);
        }
    }

    function D(a, b) {
        return D = Object.setPrototypeOf || function(a, b) {
            return a.__proto__ = b, a;
        }, D(a, b);
    }

    function E(a) {
        var F = function() {
            if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ('function' == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
            } catch (a) {
                return !1;
            }
        }();
        return function() {
            var G, H = G(a);
            if (F) {
                var I = G(this).constructor;
                G = Reflect.construct(H, i, I);
            } else
                G = H.apply(this, i);
            return F(this, G);
        };
    }

    function F(a, b) {
        return !b || 'object' !== v(b) && 'function' != typeof b ? function(a) {
            if (void 0 === a)
                throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return a;
        }(a) : b;
    }

    function G(a) {
        return G = Object.setPrototypeOf ? Object.getPrototypeOf : function(a) {
            return a.__proto__ || Object.getPrototypeOf(a);
        }, G(a);
    }
    var H = function(b) {
        ! function(a, b) {
            if ('function' != typeof b && null !== b)
                throw new TypeError('Super expression must either be null or a function');
            a.prototype = Object.create(b && b.prototype, {
                constructor: {
                    value: a,
                    writable: !0,
                    configurable: !0
                }
            }), b && D(a, b);
        }(o, b);
        var I, J, K, L = E(o);

        function M() {
            var N;
            B(this, M);
            for (var O = i.length, P = new Array(O), Q = 0; Q < O; Q++)
                P[Q] = i[Q];
            return (N = L.call.apply(L, [this].concat(P))).state = {
                isAnimationFinished: !1
            }, N.id = (0, q.uniqueId)('recharts-bar-'), N.handleAnimationEnd = function() {
                var R = N.props.onAnimationEnd;
                N.setState({
                    isAnimationFinished: !0
                }), R && R();
            }, N.handleAnimationStart = function() {
                var R = N.props.onAnimationStart;
                N.setState({
                    isAnimationFinished: !1
                }), R && R();
            }, N;
        }
        return I = M, K = [{
                key: 'getDerivedStateFromProps',
                value: function(a, b) {
                    return a.animationId !== b.prevAnimationId ? {
                        prevAnimationId: a.animationId,
                        curData: a.data,
                        prevData: b.curData
                    } : a.data !== b.curData ? {
                        curData: a.data
                    } : null;
                }
            },
            {
                key: 'renderRectangle',
                value: function(b, I) {
                    return a(i).isValidElement(b) ? a(i).cloneElement(b, I) : a(g)(b) ? b(I) : a(i).createElement(l.Rectangle, I);
                }
            }
        ], (J = [{
                key: 'renderRectanglesStatically',
                value: function(b) {
                    var N = this,
                        O = this.props.shape,
                        P = (0, u.filterProps)(this.props);
                    return b && b.map(function(b, e) {
                        var Q = z(z(z({}, P), b), {}, {
                            index: e
                        });
                        return a(i).createElement(m.Layer, x({
                            className: 'recharts-bar-rectangle'
                        }, (0, u.adaptEventsOfChild)(N.props, b, e), {
                            key: 'rectangle-'.concat(e)
                        }), M.renderRectangle(O, Q));
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
                    return a(i).createElement(k.default, {
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
                    }, function(R) {
                        var $ = R.t,
                            _ = S.map(function(a, Q) {
                                var ab = Z && Z[Q];
                                if (ab) {
                                    var bb = (0, q.interpolateNumber)(ab.x, a.x),
                                        cb = (0, q.interpolateNumber)(ab.y, a.y),
                                        db = (0, q.interpolateNumber)(ab.width, a.width),
                                        eb = (0, q.interpolateNumber)(ab.height, a.height);
                                    return z(z({}, a), {}, {
                                        x: bb($),
                                        y: cb($),
                                        width: db($),
                                        height: eb($)
                                    });
                                }
                                if ('horizontal' === T) {
                                    var bb = (0, q.interpolateNumber)(0, a.height)($);
                                    return z(z({}, a), {}, {
                                        y: a.y + a.height - bb,
                                        height: bb
                                    });
                                }
                                var bb = (0, q.interpolateNumber)(0, a.width)($);
                                return z(z({}, a), {}, {
                                    width: bb
                                });
                            });
                        return a(i).createElement(m.Layer, null, Q.renderRectanglesStatically(_));
                    });
                }
            },
            {
                key: 'renderRectangles',
                value: function() {
                    var $ = this.props,
                        _ = $.data,
                        ab = $.isAnimationActive,
                        bb = this.state.prevData;
                    return !(ab && _ && _.length) || bb && a(V)(bb, _) ? this.renderRectanglesStatically(_) : this.renderRectanglesWithAnimation();
                }
            },
            {
                key: 'renderBackground',
                value: function() {
                    var cb = this,
                        db = this.props.data,
                        eb = (0, u.filterProps)(this.props.background);
                    return db.map(function(db, ab) {
                        db.value;
                        var fb = db.background,
                            gb = w(db, [
                                'value',
                                'background'
                            ]);
                        if (!fb)
                            return null;
                        var hb = z(z(z(z(z({}, gb), {}, {
                            fill: '#eee'
                        }, fb), eb), (0, u.adaptEventsOfChild)(cb.props, db, ab)), {}, {
                            index: ab,
                            key: 'background-bar-'.concat(ab),
                            className: 'recharts-bar-background-rectangle'
                        });
                        return M.renderRectangle(cb.props.background, hb);
                    });
                }
            },
            {
                key: 'renderErrorBar',
                value: function() {
                    if (this.props.isAnimationActive && !this.state.isAnimationFinished)
                        return null;
                    var fb = this.props,
                        gb = fb.data,
                        hb = fb.xAxis,
                        ib = fb.yAxis,
                        jb = fb.layout,
                        kb = fb.children,
                        lb = (0, r.findAllByType)(kb, n.ErrorBar.displayName);
                    if (!lb)
                        return null;
                    var mb = 'vertical' === jb ? gb[0].height / 2 : gb[0].width / 2;

                    function nb(cb, fb) {
                        return {
                            x: cb.x,
                            y: cb.y,
                            value: cb.value,
                            errorVal: (0, t.getValueByDataKey)(cb, fb)
                        };
                    }
                    return lb.map(function(fb, kb) {
                        return cb(i).cloneElement(fb, {
                            key: 'error-bar-'.concat(kb),
                            data: gb,
                            xAxis: hb,
                            yAxis: ib,
                            layout: jb,
                            offset: mb,
                            dataPointFormatter: nb
                        });
                    });
                }
            },
            {
                key: 'render',
                value: function() {
                    var ob = this.props,
                        pb = ob.hide,
                        qb = ob.data,
                        rb = ob.className,
                        sb = ob.xAxis,
                        tb = ob.yAxis,
                        ub = ob.left,
                        vb = ob.top,
                        wb = ob.width,
                        xb = ob.height,
                        yb = ob.isAnimationActive,
                        zb = ob.background,
                        Ab = ob.id;
                    if (pb || !qb || !qb.length)
                        return null;
                    var Bb = this.state.isAnimationFinished,
                        Cb = cb(nb)('recharts-bar', rb),
                        Db = sb && sb.allowDataOverflow || tb && tb.allowDataOverflow,
                        Eb = cb(jb)(Ab) ? this.id : Ab;
                    return cb(i).createElement(m.Layer, {
                        className: Cb
                    }, Db ? cb(i).createElement('defs', null, cb(i).createElement('clipPath', {
                        id: 'clipPath-'.concat(Eb)
                    }, cb(i).createElement('rect', {
                        x: ub,
                        y: vb,
                        width: wb,
                        height: xb
                    }))) : null, cb(i).createElement(m.Layer, {
                        className: 'recharts-bar-rectangles',
                        clipPath: Db ? 'url(#clipPath-'.concat(Eb, ')') : null
                    }, zb ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(), (!yb || Bb) && p.LabelList.renderCallByParent(this.props, qb));
                }
            }
        ]) && C(I.prototype, J), K && C(I, K), M;
    }(i.PureComponent);
    H.displayName = 'Bar', H.defaultProps = {
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
    }, H.getComposedData = function(b) {
        var I = b.props,
            J = b.item,
            K = b.barPosition,
            L = b.bandSize,
            M = b.xAxis,
            N = b.yAxis,
            O = b.xAxisTicks,
            P = b.yAxisTicks,
            Q = b.stackedData,
            R = b.dataStartIndex,
            S = b.displayedData,
            T = b.offset,
            U = (0, t.findPositionOfBar)(K, J);
        if (!U)
            return null;
        var V = I.layout,
            W = J.props,
            X = W.dataKey,
            Y = W.children,
            Z = W.minPointSize,
            $ = 'horizontal' === V ? N : M,
            _ = Q ? $.scale.domain() : null,
            ab = (0, t.getBaseValueOfBar)({
                numericAxis: $
            }),
            bb = (0, r.findAllByType)(Y, o.Cell.displayName),
            cb = S.map(function(b, I) {
                var db, eb, fb, gb, hb, ib;
                if (Q ? db = (0, t.truncateByDomain)(Q[R + I], _) : (db = (0, t.getValueByDataKey)(b, X), a(h)(db) || (db = [
                        ab,
                        db
                    ])), 'horizontal' === V) {
                    if (eb = (0, t.getCateCoordinateOfBar)({
                            axis: M,
                            ticks: O,
                            bandSize: L,
                            offset: U.offset,
                            entry: b,
                            index: I
                        }), fb = N.scale(db[1]), gb = U.size, hb = N.scale(db[0]) - N.scale(db[1]), ib = {
                            x: eb,
                            y: N.y,
                            width: gb,
                            height: N.height
                        }, Math.abs(Z) > 0 && Math.abs(hb) < Math.abs(Z)) {
                        var jb = (0, q.mathSign)(hb || Z) * (Math.abs(Z) - Math.abs(hb));
                        fb -= jb, hb += jb;
                    }
                } else
                    eb = M.scale(db[0]), fb = (0, t.getCateCoordinateOfBar)({
                        axis: N,
                        ticks: P,
                        bandSize: L,
                        offset: U.offset,
                        entry: b,
                        index: I
                    }), gb = M.scale(db[1]) - M.scale(db[0]), hb = U.size, ib = {
                        x: M.x,
                        y: fb,
                        width: M.width,
                        height: hb
                    }, Math.abs(Z) > 0 && Math.abs(gb) < Math.abs(Z) && (gb += (0, q.mathSign)(gb || Z) * (Math.abs(Z) - Math.abs(gb)));
                return z(z(z({}, b), {}, {
                    x: eb,
                    y: fb,
                    width: gb,
                    height: hb,
                    value: Q ? db : db[1],
                    payload: b,
                    background: ib
                }, bb && bb[I] && bb[I].props), {}, {
                    tooltipPayload: [(0, t.getTooltipItem)(J, b)],
                    tooltipPosition: {
                        x: eb + gb / 2,
                        y: fb + hb / 2
                    }
                });
            });
        return z({
            data: cb,
            layout: V
        }, T);
    };
}), d.register('oskvv', function(a, b) {
    a.exports = function(a) {
        return null == a;
    };
}), d.register('3MMPD', function(a, b) {
    var e = d('/sjSW');
    a.exports = function(a, b) {
        return e(a, b);
    };
}), d.register('/sjSW', function(a, b) {
    var e = d('MACke'),
        f = d('Pqi7I0');
    a.exports = function a(b, d, g, h, i) {
        return b === d || (null == b || null == d || !f(b) && !f(d) ? b != b && d != d : e(b, d, g, h, a, i));
    };
}), d.register('MACke', function(a, b) {
    var e = d('Dsrm2'),
        f = d('rHS1k'),
        g = d('kPHUp'),
        h = d('zXuGR'),
        i = d('LxRym'),
        j = d('JslBt0'),
        k = d('NNmQ3'),
        l = d('qoay3'),
        m = '[object Arguments]',
        n = '[object Array]',
        o = '[object Object]',
        p = Object.prototype.hasOwnProperty;
    a.exports = function(a, b, d, n, o, p) {
        var q = j(a),
            r = j(b),
            s = q ? n : i(a),
            t = r ? n : i(b),
            u = (s = s == m ? o : s) == o,
            v = (t = t == m ? o : t) == o,
            w = s == t;
        if (w && k(a)) {
            if (!k(b))
                return !1;
            q = !0, u = !1;
        }
        if (w && !u)
            return p || (p = new e()), q || l(a) ? f(a, b, d, n, o, p) : g(a, b, s, d, n, o, p);
        if (!(1 & d)) {
            var x = u && p.call(a, '__wrapped__'),
                y = v && p.call(b, '__wrapped__');
            if (x || y) {
                var z = x ? a.value() : a,
                    A = y ? b.value() : b;
                return p || (p = new e()), o(z, A, d, n, p);
            }
        }
        return !!w && (p || (p = new e()), h(a, b, d, n, o, p));
    };
}), d.register('Dsrm2', function(a, b) {
    var e = d('N4RWL'),
        f = d('y04Gy'),
        g = d('4fR+60'),
        h = d('d+A2t0'),
        i = d('yjHS32'),
        j = d('/GOo/');

    function k(a) {
        var l = this.__data__ = new e(a);
        this.size = l.size;
    }
    k.prototype.clear = f, k.prototype.delete = g, k.prototype.get = h, k.prototype.has = i, k.prototype.set = j, a.exports = k;
}), d.register('N4RWL', function(a, b) {
    var e = d('hl5zK0'),
        f = d('he2aE'),
        g = d('Frr6w'),
        h = d('iiar0'),
        i = d('EtItD');

    function j(a) {
        var k = -1,
            l = null == a ? 0 : a.length;
        for (this.clear(); ++k < l;) {
            var m = a[k];
            this.set(m[0], m[1]);
        }
    }
    j.prototype.clear = e, j.prototype.delete = f, j.prototype.get = g, j.prototype.has = h, j.prototype.set = i, a.exports = j;
}), d.register('hl5zK0', function(a, b) {
    a.exports = function() {
        this.__data__ = [], this.size = 0;
    };
}), d.register('he2aE', function(a, b) {
    var e = d('/DnJ2'),
        f = Array.prototype.splice;
    a.exports = function(a) {
        var g = this.__data__,
            h = e(g, a);
        return !(h < 0) && (h == g.length - 1 ? g.pop() : f.call(g, h, 1), --this.size, !0);
    };
}), d.register('/DnJ2', function(a, b) {
    var e = d('EEIl90');
    a.exports = function(a, b) {
        for (var f = a.length; f--;)
            if (e(a[f][0], b))
                return f;
        return -1;
    };
}), d.register('EEIl90', function(a, b) {
    a.exports = function(a, b) {
        return a === b || a != a && b != b;
    };
}), d.register('Frr6w', function(a, b) {
    var e = d('/DnJ2');
    a.exports = function(a) {
        var f = this.__data__,
            g = e(f, a);
        return g < 0 ? void 0 : f[g][1];
    };
}), d.register('iiar0', function(a, b) {
    var e = d('/DnJ2');
    a.exports = function(a) {
        return e(this.__data__, a) > -1;
    };
}), d.register('EtItD', function(a, b) {
    var e = d('/DnJ2');
    a.exports = function(a, b) {
        var f = this.__data__,
            g = e(f, a);
        return g < 0 ? (++this.size, f.push([
            a,
            b
        ])) : f[g][1] = b, this;
    };
}), d.register('y04Gy', function(a, b) {
    var e = d('N4RWL');
    a.exports = function() {
        this.__data__ = new e(), this.size = 0;
    };
}), d.register('4fR+60', function(a, b) {
    a.exports = function(a) {
        var e = this.__data__,
            f = e.delete(a);
        return this.size = e.size, f;
    };
}), d.register('d+A2t0', function(a, b) {
    a.exports = function(a) {
        return this.__data__.get(a);
    };
}), d.register('yjHS32', function(a, b) {
    a.exports = function(a) {
        return this.__data__.has(a);
    };
}), d.register('/GOo/', function(a, b) {
    var e = d('N4RWL'),
        f = d('Pe864'),
        g = d('en+cA');
    a.exports = function(a, b) {
        var h = this.__data__;
        if (h instanceof e) {
            var i = h.__data__;
            if (!f || i.length < 199)
                return i.push([
                    a,
                    b
                ]), this.size = ++h.size, this;
            h = this.__data__ = new g(i);
        }
        return h.set(a, b), this.size = h.size, this;
    };
}), d.register('Pe864', function(a, b) {
    var e = d('0hU89')(d('n6tNN'), 'Map');
    a.exports = e;
}), d.register('0hU89', function(a, b) {
    var e = d('rBbs2'),
        f = d('mCnfJ0');
    a.exports = function(a, b) {
        var g = f(a, b);
        return e(g) ? g : void 0;
    };
}), d.register('rBbs2', function(a, b) {
    var e = d('tax32'),
        f = d('/YR9/'),
        g = d('AdPm00'),
        h = d('Q84Mg0'),
        i = /^\[object .+?Constructor\]$/,
        j = Function.prototype,
        k = Object.prototype,
        l = j.toString,
        m = k.hasOwnProperty,
        n = RegExp('^' + l.call(m).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
    a.exports = function(a) {
        return !(!g(a) || f(a)) && (e(a) ? n : i).test(h(a));
    };
}), d.register('tax32', function(a, b) {
    var e = d('/LLyG'),
        f = d('AdPm00');
    a.exports = function(a) {
        if (!f(a))
            return !1;
        var g = e(a);
        return '[object Function]' == g || '[object GeneratorFunction]' == g || '[object AsyncFunction]' == g || '[object Proxy]' == g;
    };
}), d.register('/LLyG', function(a, b) {
    var e = d('3bXi3'),
        f = d('K1Pke'),
        g = d('/wem50'),
        h = e ? e.toStringTag : void 0;
    a.exports = function(a) {
        return null == a ? void 0 === a ? '[object Undefined]' : '[object Null]' : h && h in Object(a) ? f(a) : g(a);
    };
}), d.register('3bXi3', function(a, b) {
    var e = d('n6tNN').Symbol;
    a.exports = e;
}), d.register('n6tNN', function(a, b) {
    var e = d('R6eSr0'),
        f = 'object' == typeof self && self && self.Object === Object && self,
        g = e || f || Function('return this')();
    a.exports = g;
}), d.register('R6eSr0', function(a, b) {
    var e = 'object' == typeof c && c && c.Object === Object && c;
    a.exports = e;
}), d.register('K1Pke', function(a, b) {
    var e = d('3bXi3'),
        f = Object.prototype,
        g = f.hasOwnProperty,
        h = f.toString,
        i = e ? e.toStringTag : void 0;
    a.exports = function(a) {
        var j = g.call(a, i),
            k = a[i];
        try {
            a[i] = void 0;
            var l = !0;
        } catch (a) {}
        var l = h.call(a);
        return d && (j ? a[i] = k : delete a[i]), l;
    };
}), d.register('/wem50', function(a, b) {
    var e = Object.prototype.toString;
    a.exports = function(a) {
        return e.call(a);
    };
}), d.register('AdPm00', function(a, b) {
    a.exports = function(a) {
        var e = typeof a;
        return null != a && ('object' == e || 'function' == e);
    };
}), d.register('/YR9/', function(a, b) {
    var e, f = d('t//IE'),
        g = (e = /[^.]+$/.exec(f && f.keys && f.keys.IE_PROTO || '')) ? 'Symbol(src)_1.' + e : '';
    a.exports = function(a) {
        return !!g && g in a;
    };
}), d.register('t//IE', function(a, b) {
    var e = d('n6tNN')['__core-js_shared__'];
    a.exports = e;
}), d.register('Q84Mg0', function(a, b) {
    var e = Function.prototype.toString;
    a.exports = function(a) {
        if (null != a) {
            try {
                return e.call(a);
            } catch (a) {}
            try {
                return a + '';
            } catch (a) {}
        }
        return '';
    };
}), d.register('mCnfJ0', function(a, b) {
    a.exports = function(a, b) {
        return null == a ? void 0 : a[b];
    };
}), d.register('en+cA', function(a, b) {
    var e = d('NYrSh'),
        f = d('YXOQn'),
        g = d('nuhe5'),
        h = d('LSaek'),
        i = d('d3e8w');

    function j(a) {
        var k = -1,
            l = null == a ? 0 : a.length;
        for (this.clear(); ++k < l;) {
            var m = a[k];
            this.set(m[0], m[1]);
        }
    }
    j.prototype.clear = e, j.prototype.delete = f, j.prototype.get = g, j.prototype.has = h, j.prototype.set = i, a.exports = j;
}), d.register('NYrSh', function(a, b) {
    var e = d('6GQqe'),
        f = d('N4RWL'),
        g = d('Pe864');
    a.exports = function() {
        this.size = 0, this.__data__ = {
            hash: new e(),
            map: new(g || f)(),
            string: new e()
        };
    };
}), d.register('6GQqe', function(a, b) {
    var e = d('KVCKU'),
        f = d('rYwUh0'),
        g = d('ZL5u+'),
        h = d('Cz/OE'),
        i = d('1kDwx');

    function j(a) {
        var k = -1,
            l = null == a ? 0 : a.length;
        for (this.clear(); ++k < l;) {
            var m = a[k];
            this.set(m[0], m[1]);
        }
    }
    j.prototype.clear = e, j.prototype.delete = f, j.prototype.get = g, j.prototype.has = h, j.prototype.set = i, a.exports = j;
}), d.register('KVCKU', function(a, b) {
    var e = d('zP/Dd');
    a.exports = function() {
        this.__data__ = e ? e(null) : {}, this.size = 0;
    };
}), d.register('zP/Dd', function(a, b) {
    var e = d('0hU89')(Object, 'create');
    a.exports = e;
}), d.register('rYwUh0', function(a, b) {
    a.exports = function(a) {
        var e = this.has(a) && delete this.__data__[a];
        return this.size -= e ? 1 : 0, e;
    };
}), d.register('ZL5u+', function(a, b) {
    var e = d('zP/Dd'),
        f = Object.prototype.hasOwnProperty;
    a.exports = function(a) {
        var g = this.__data__;
        if (e) {
            var h = g[a];
            return '__lodash_hash_undefined__' === h ? void 0 : h;
        }
        return f.call(g, a) ? g[a] : void 0;
    };
}), d.register('Cz/OE', function(a, b) {
    var e = d('zP/Dd'),
        f = Object.prototype.hasOwnProperty;
    a.exports = function(a) {
        var g = this.__data__;
        return e ? void 0 !== g[a] : f.call(g, a);
    };
}), d.register('1kDwx', function(a, b) {
    var e = d('zP/Dd');
    a.exports = function(a, b) {
        var f = this.__data__;
        return this.size += this.has(a) ? 0 : 1, f[a] = e && void 0 === b ? '__lodash_hash_undefined__' : b, this;
    };
}), d.register('YXOQn', function(a, b) {
    var e = d('u+RNN');
    a.exports = function(a) {
        var f = e(this, a).delete(a);
        return this.size -= f ? 1 : 0, f;
    };
}), d.register('u+RNN', function(a, b) {
    var e = d('t4L3Y0');
    a.exports = function(a, b) {
        var f = a.__data__;
        return e(b) ? f['string' == typeof b ? 'string' : 'hash'] : f.map;
    };
}), d.register('t4L3Y0', function(a, b) {
    a.exports = function(a) {
        var e = typeof a;
        return 'string' == e || 'number' == e || 'symbol' == e || 'boolean' == e ? '__proto__' !== a : null === a;
    };
}), d.register('nuhe5', function(a, b) {
    var e = d('u+RNN');
    a.exports = function(a) {
        return e(this, a).get(a);
    };
}), d.register('LSaek', function(a, b) {
    var e = d('u+RNN');
    a.exports = function(a) {
        return e(this, a).has(a);
    };
}), d.register('d3e8w', function(a, b) {
    var e = d('u+RNN');
    a.exports = function(a, b) {
        var f = e(this, a),
            g = f.size;
        return f.set(a, b), this.size += f.size == g ? 0 : 1, this;
    };
}), d.register('rHS1k', function(a, b) {
    var e = d('BLgke'),
        f = d('sYk3r0'),
        g = d('ia7fW0');
    a.exports = function(a, b, d, h, i, j) {
        var h = 1 & d,
            i = a.length,
            j = b.length;
        if (i != j && !(h && j > i))
            return !1;
        var k = j.get(a),
            l = j.get(b);
        if (k && l)
            return k == b && l == a;
        var m = -1,
            n = !0,
            o = 2 & d ? new e() : void 0;
        for (j.set(a, b), j.set(b, a); ++m < i;) {
            var p = a[m],
                q = b[m];
            if (h)
                var r = h ? h(q, p, m, b, a, j) : h(p, q, m, a, b, j);
            if (void 0 !== r) {
                if (r)
                    continue;
                n = !1;
                break;
            }
            if (o) {
                if (!f(b, function(a, b) {
                        if (!g(o, b) && (p === a || i(p, a, d, h, j)))
                            return o.push(b);
                    })) {
                    n = !1;
                    break;
                }
            } else if (p !== q && !i(p, q, d, h, j)) {
                n = !1;
                break;
            }
        }
        return j.delete(a), j.delete(b), n;
    };
}), d.register('BLgke', function(a, b) {
    var e = d('en+cA'),
        f = d('IMXK20'),
        g = d('yjHS31');

    function h(a) {
        var i = -1,
            j = null == a ? 0 : a.length;
        for (this.__data__ = new e(); ++i < j;)
            this.add(a[i]);
    }
    h.prototype.add = h.prototype.push = f, h.prototype.has = g, a.exports = h;
}), d.register('IMXK20', function(a, b) {
    a.exports = function(a) {
        return this.__data__.set(a, '__lodash_hash_undefined__'), this;
    };
}), d.register('yjHS31', function(a, b) {
    a.exports = function(a) {
        return this.__data__.has(a);
    };
}), d.register('sYk3r0', function(a, b) {
    a.exports = function(a, b) {
        for (var e = -1, f = null == a ? 0 : a.length; ++e < f;)
            if (b(a[e], e, a))
                return !0;
        return !1;
    };
}), d.register('ia7fW0', function(a, b) {
    a.exports = function(a, b) {
        return a.has(b);
    };
}), d.register('kPHUp', function(a, b) {
    var e = d('3bXi3'),
        f = d('Y86cM'),
        g = d('EEIl90'),
        h = d('rHS1k'),
        i = d('JlNBi0'),
        j = d('AnhGl0'),
        k = e ? e.prototype : void 0,
        l = k ? k.valueOf : void 0;
    a.exports = function(a, b, e, d, k, j, l) {
        switch (e) {
            case '[object DataView]':
                if (a.byteLength != b.byteLength || a.byteOffset != b.byteOffset)
                    return !1;
                a = a.buffer, b = b.buffer;
            case '[object ArrayBuffer]':
                return !(a.byteLength != b.byteLength || !j(new f(a), new f(b)));
            case '[object Boolean]':
            case '[object Date]':
            case '[object Number]':
                return g(+a, +b);
            case '[object Error]':
                return a.name == b.name && a.message == b.message;
            case '[object RegExp]':
            case '[object String]':
                return a == b + '';
            case '[object Map]':
                var m = n;
            case '[object Set]':
                var o = 1 & d;
                if (m || (m = j), a.size != b.size && !o)
                    return !1;
                var p = l.get(a);
                if (p)
                    return p == b;
                d |= 2, l.set(a, b);
                var q = h(m(a), m(b), d, k, j, l);
                return l.delete(a), q;
            case '[object Symbol]':
                if (l)
                    return l.call(a) == l.call(b);
        }
        return !1;
    };
}), d.register('Y86cM', function(a, b) {
    var e = d('n6tNN').Uint8Array;
    a.exports = e;
}), d.register('JlNBi0', function(a, b) {
    a.exports = function(a) {
        var e = -1,
            f = Array(a.size);
        return a.forEach(function(a, d) {
            f[++e] = [
                d,
                a
            ];
        }), f;
    };
}), d.register('AnhGl0', function(a, b) {
    a.exports = function(a) {
        var e = -1,
            f = Array(a.size);
        return a.forEach(function(a) {
            f[++e] = a;
        }), f;
    };
}), d.register('zXuGR', function(a, b) {
    var e = d('AyroX'),
        f = Object.prototype.hasOwnProperty;
    a.exports = function(a, b, d, g, h, i) {
        var g = 1 & d,
            h = e(a),
            i = h.length;
        if (i != e(b).length && !g)
            return !1;
        for (var j = k; j--;) {
            var l = h[j];
            if (!(g ? l in b : f.call(b, l)))
                return !1;
        }
        var l = i.get(a),
            m = i.get(b);
        if (l && m)
            return l == b && m == a;
        var n = !0;
        i.set(a, b), i.set(b, a);
        for (var o = p; ++j < k;) {
            var q = a[o = h[j]],
                r = b[o];
            if (g)
                var s = p ? g(r, q, o, b, a, i) : g(q, r, o, a, b, i);
            if (!(void 0 === s ? q === r || h(q, r, d, g, i) : s)) {
                n = !1;
                break;
            }
            o || (o = 'constructor' == o);
        }
        if (n && !o) {
            var s = a.constructor,
                t = b.constructor;
            s == t || !('constructor' in a) || !('constructor' in b) || 'function' == typeof s && s instanceof s && 'function' == typeof t && t instanceof t || (n = !1);
        }
        return i.delete(a), i.delete(b), n;
    };
}), d.register('AyroX', function(a, b) {
    var e = d('CXMoK'),
        f = d('P5dFE'),
        g = d('QVSv3');
    a.exports = function(a) {
        return e(a, g, f);
    };
}), d.register('CXMoK', function(a, b) {
    var e = d('XPQqW0'),
        f = d('JslBt0');
    a.exports = function(a, b, d) {
        var g = b(a);
        return f(a) ? g : e(g, d(a));
    };
}), d.register('XPQqW0', function(a, b) {
    a.exports = function(a, b) {
        for (var e = -1, f = b.length, g = a.length; ++e < f;)
            a[g + e] = b[e];
        return a;
    };
}), d.register('JslBt0', function(a, b) {
    var e = Array.isArray;
    a.exports = e;
}), d.register('P5dFE', function(a, b) {
    var e = d('4QZoi0'),
        f = d('rGKcs0'),
        g = Object.prototype.propertyIsEnumerable,
        h = Object.getOwnPropertySymbols,
        i = h ? function(a) {
            return null == a ? [] : (a = Object(a), e(h(a), function(b) {
                return g.call(a, b);
            }));
        } : f;
    a.exports = i;
}), d.register('4QZoi0', function(a, b) {
    a.exports = function(a, b) {
        for (var e = -1, f = null == a ? 0 : a.length, g = 0, h = []; ++e < f;) {
            var i = a[e];
            b(i, e, a) && (h[g++] = i);
        }
        return h;
    };
}), d.register('rGKcs0', function(a, b) {
    a.exports = function() {
        return [];
    };
}), d.register('QVSv3', function(a, b) {
    var e = d('9gWOX'),
        f = d('In6SL'),
        g = d('/akpk');
    a.exports = function(a) {
        return g(a) ? e(a) : f(a);
    };
}), d.register('9gWOX', function(a, b) {
    var e = d('R7e+g0'),
        f = d('UIMEN'),
        g = d('JslBt0'),
        h = d('NNmQ3'),
        i = d('WzPBf0'),
        j = d('qoay3'),
        k = Object.prototype.hasOwnProperty;
    a.exports = function(a, b) {
        var l = g(a),
            m = !l && f(a),
            n = !l && !m && h(a),
            o = !l && !m && !n && j(a),
            p = l || m || n || o,
            q = p ? e(a.length, String) : [],
            r = q.length;
        for (var s in a)
            !b && !k.call(a, s) || p && ('length' == s || n && ('offset' == s || 'parent' == s) || o && ('buffer' == s || 'byteLength' == s || 'byteOffset' == s) || i(s, r)) || q.push(s);
        return q;
    };
}), d.register('R7e+g0', function(a, b) {
    a.exports = function(a, b) {
        for (var e = -1, f = Array(a); ++e < a;)
            f[e] = b(e);
        return f;
    };
}), d.register('UIMEN', function(a, b) {
    var e = d('hjp/I'),
        f = d('Pqi7I0'),
        g = Object.prototype,
        h = g.hasOwnProperty,
        i = g.propertyIsEnumerable,
        j = e(function() {
            return i;
        }()) ? e : function(a) {
            return f(a) && h.call(a, 'callee') && !i.call(a, 'callee');
        };
    a.exports = j;
}), d.register('hjp/I', function(a, b) {
    var e = d('/LLyG'),
        f = d('Pqi7I0');
    a.exports = function(a) {
        return f(a) && '[object Arguments]' == e(a);
    };
}), d.register('Pqi7I0', function(a, b) {
    a.exports = function(a) {
        return null != a && 'object' == typeof a;
    };
}), d.register('NNmQ3', function(a, b) {
    var e = d('n6tNN'),
        f = d('AQZ3z0'),
        g = b && !b.nodeType && b,
        h = g && a && !a.nodeType && a,
        i = h && h.exports === g ? e.Buffer : void 0,
        j = (i ? i.isBuffer : void 0) || f;
    a.exports = j;
}), d.register('AQZ3z0', function(a, b) {
    a.exports = function() {
        return !1;
    };
}), d.register('WzPBf0', function(a, b) {
    var e = /^(?:0|[1-9]\d*)$/;
    a.exports = function(a, b) {
        var f = typeof a;
        return !!(b = null == b ? 9007199254740991 : b) && ('number' == f || 'symbol' != f && e.test(a)) && a > -1 && a % 1 == 0 && a < b;
    };
}), d.register('qoay3', function(a, b) {
    var e = d('Bd0Ar'),
        f = d('HktUq0'),
        g = d('rebku'),
        h = g && g.isTypedArray,
        i = h ? f(h) : e;
    a.exports = i;
}), d.register('Bd0Ar', function(a, b) {
    var e = d('/LLyG'),
        f = d('cqeNb0'),
        g = d('Pqi7I0'),
        h = {};
    h['[object Float32Array]'] = h['[object Float64Array]'] = h['[object Int8Array]'] = h['[object Int16Array]'] = h['[object Int32Array]'] = h['[object Uint8Array]'] = h['[object Uint8ClampedArray]'] = h['[object Uint16Array]'] = h['[object Uint32Array]'] = !0, h['[object Arguments]'] = h['[object Array]'] = h['[object ArrayBuffer]'] = h['[object Boolean]'] = h['[object DataView]'] = h['[object Date]'] = h['[object Error]'] = h['[object Function]'] = h['[object Map]'] = h['[object Number]'] = h['[object Object]'] = h['[object RegExp]'] = h['[object Set]'] = h['[object String]'] = h['[object WeakMap]'] = !1, a.exports = function(a) {
        return g(a) && f(a.length) && !!h[e(a)];
    };
}), d.register('cqeNb0', function(a, b) {
    a.exports = function(a) {
        return 'number' == typeof a && a > -1 && a % 1 == 0 && a <= 9007199254740991;
    };
}), d.register('HktUq0', function(a, b) {
    a.exports = function(a) {
        return function(b) {
            return a(b);
        };
    };
}), d.register('rebku', function(a, b) {
    var e = d('R6eSr0'),
        f = b && !b.nodeType && b,
        g = f && a && !a.nodeType && a,
        h = g && g.exports === f && e.process,
        i = function() {
            try {
                var j = g && g.require && g.require('util').types;
                return j || h && h.binding && h.binding('util');
            } catch (a) {}
        }();
    a.exports = i;
}), d.register('In6SL', function(a, b) {
    var e = d('g9JxF0'),
        f = d('+Tdvl'),
        g = Object.prototype.hasOwnProperty;
    a.exports = function(a) {
        if (!e(a))
            return f(a);
        var h = [];
        for (var i in Object(a))
            g.call(a, i) && 'constructor' != i && h.push(i);
        return h;
    };
}), d.register('g9JxF0', function(a, b) {
    var e = Object.prototype;
    a.exports = function(a) {
        var f = a && a.constructor;
        return a === ('function' == typeof f && f.prototype || e);
    };
}), d.register('+Tdvl', function(a, b) {
    var e = d('bJZPL0')(Object.keys, Object);
    a.exports = e;
}), d.register('bJZPL0', function(a, b) {
    a.exports = function(a, b) {
        return function(c) {
            return a(b(c));
        };
    };
}), d.register('/akpk', function(a, b) {
    var e = d('tax32'),
        f = d('cqeNb0');
    a.exports = function(a) {
        return null != a && f(a.length) && !e(a);
    };
}), d.register('LxRym', function(a, b) {
    var e = d('XauhD'),
        f = d('Pe864'),
        g = d('zvgJN'),
        h = d('ikD/l'),
        i = d('uVh3Z'),
        j = d('/LLyG'),
        k = d('Q84Mg0'),
        l = '[object Map]',
        m = '[object Promise]',
        n = '[object Set]',
        o = '[object WeakMap]',
        p = '[object DataView]',
        q = k(e),
        r = k(f),
        s = k(g),
        t = k(h),
        u = k(i),
        v = w;
    (e && v(new e(new ArrayBuffer(1))) != p || f && v(new f()) != l || g && v(g.resolve()) != m || h && v(new h()) != n || i && v(new i()) != o) && (v = function(a) {
        var x = w(a),
            y = '[object Object]' == x ? a.constructor : void 0,
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
                case u:
                    return o;
            }
        return x;
    }), a.exports = v;
}), d.register('XauhD', function(a, b) {
    var e = d('0hU89')(d('n6tNN'), 'DataView');
    a.exports = e;
}), d.register('zvgJN', function(a, b) {
    var e = d('0hU89')(d('n6tNN'), 'Promise');
    a.exports = e;
}), d.register('ikD/l', function(a, b) {
    var e = d('0hU89')(d('n6tNN'), 'Set');
    a.exports = e;
}), d.register('uVh3Z', function(a, b) {
    var e = d('0hU89')(d('n6tNN'), 'WeakMap');
    a.exports = e;
}), d.register('Pv6EO', function(a, c) {
    b(a.exports, 'default', function() {
        return f;
    }), b(a.exports, 'translateStyle', function() {
        return d('hE/L1').translateStyle;
    });
    var e = d('OQHL5'),
        f = (d('TB6WL'), d('hE/L1'), d('D9OYy'), e.default);
}), d.register('OQHL5', function(c, p) {
    b(c.exports, 'default', function() {
        return z;
    });
    var e = d('uPP4W'),
        f = d('uj3CK'),
        g = d('y2wZq'),
        h = d('D2XZp'),
        i = d('TB6WL'),
        j = d('JBZrO'),
        k = d('hE/L1');

    function l(a) {
        return l = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(a) {
            return typeof a;
        } : function(a) {
            return a && 'function' == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? 'symbol' : typeof a;
        }, l(a);
    }

    function m(a, b) {
        if (null == a)
            return {};
        var n, o, p = function(a, b) {
            if (null == a)
                return {};
            var q, r, s = {},
                t = Object.keys(a);
            for (r = 0; r < t.length; r++)
                q = t[r], b.indexOf(q) >= 0 || (s[q] = a[q]);
            return s;
        }(a, b);
        if (Object.getOwnPropertySymbols) {
            var q = Object.getOwnPropertySymbols(a);
            for (o = 0; o < q.length; o++)
                n = q[o], b.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(a, n) && (p[n] = a[n]);
        }
        return p;
    }

    function n(a) {
        return function(a) {
            if (Array.isArray(a))
                return o(a);
        }(a) || function(a) {
            if ('undefined' != typeof Symbol && Symbol.iterator in Object(a))
                return Array.from(a);
        }(a) || function(a, b) {
            if (!a)
                return;
            if ('string' == typeof a)
                return o(a, b);
            var o = Object.prototype.toString.call(a).slice(8, -1);
            'Object' === o && a.constructor && (o = a.constructor.name);
            if ('Map' === o || 'Set' === o)
                return Array.from(a);
            if ('Arguments' === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))
                return o(a, b);
        }(a) || function() {
            throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }

    function o(a, b) {
        (null == b || b > a.length) && (b = a.length);
        for (var p = 0, q = new Array(b); p < b; p++)
            q[p] = a[p];
        return q;
    }

    function p(a, b) {
        var q = Object.keys(a);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(a);
            b && (r = r.filter(function(b) {
                return Object.getOwnPropertyDescriptor(a, b).enumerable;
            })), q.push.apply(q, r);
        }
        return q;
    }

    function q(a) {
        for (var r = 1; r < i.length; r++) {
            var s = null != i[r] ? i[r] : {};
            r % 2 ? p(Object(s), !0).forEach(function(r) {
                r(a, r, s[r]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(s)) : p(Object(s)).forEach(function(r) {
                Object.defineProperty(a, r, Object.getOwnPropertyDescriptor(s, r));
            });
        }
        return a;
    }

    function r(a, b, c) {
        return b in a ? Object.defineProperty(a, b, {
            value: c,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : a[b] = c, a;
    }

    function s(a, b) {
        for (var t = 0; t < b.length; t++) {
            var u = b[t];
            u.enumerable = u.enumerable || !1, u.configurable = !0, 'value' in u && (u.writable = !0), Object.defineProperty(a, u.key, u);
        }
    }

    function t(a, b) {
        return t = Object.setPrototypeOf || function(a, b) {
            return a.__proto__ = b, a;
        }, t(a, b);
    }

    function u(a) {
        var v = function() {
            if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ('function' == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
            } catch (a) {
                return !1;
            }
        }();
        return function() {
            var w, x = x(a);
            if (v) {
                var y = x(this).constructor;
                w = Reflect.construct(x, i, y);
            } else
                w = x.apply(this, i);
            return v(this, w);
        };
    }

    function v(a, b) {
        return !b || 'object' !== l(b) && 'function' != typeof b ? w(a) : b;
    }

    function w(a) {
        if (void 0 === a)
            throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return a;
    }

    function x(a) {
        return x = Object.setPrototypeOf ? Object.getPrototypeOf : function(a) {
            return a.__proto__ || Object.getPrototypeOf(a);
        }, x(a);
    }
    var y = function(b) {
        ! function(a, b) {
            if ('function' != typeof b && null !== b)
                throw new TypeError('Super expression must either be null or a function');
            a.prototype = Object.create(b && b.prototype, {
                constructor: {
                    value: a,
                    writable: !0,
                    configurable: !0
                }
            }), b && t(a, b);
        }(l, b);
        var z, A, B, C = u(l);

        function D(a, b) {
            var E;
            ! function(a, b) {
                if (!(a instanceof b))
                    throw new TypeError('Cannot call a class as a function');
            }(this, D);
            var F = (E = C.call(this, a, b)).props,
                G = F.isActive,
                H = F.attributeName,
                I = F.from,
                J = F.to,
                K = F.steps,
                L = F.children;
            if (E.handleStyleChange = E.handleStyleChange.bind(w(E)), E.changeStyle = E.changeStyle.bind(w(E)), !G)
                return E.state = {
                    style: {}
                }, 'function' == typeof L && (E.state = {
                    style: J
                }), v(E);
            if (K && K.length)
                E.state = {
                    style: K[0].style
                };
            else if (I) {
                if ('function' == typeof L)
                    return E.state = {
                        style: I
                    }, v(E);
                E.state = {
                    style: H ? r({}, H, I) : I
                };
            } else
                E.state = {
                    style: {}
                };
            return E;
        }
        return z = D, (A = [{
                key: 'componentDidMount',
                value: function() {
                    var E = this.props,
                        F = E.isActive,
                        G = E.canBegin;
                    this.mounted = !0, F && G && this.runAnimation(this.props);
                }
            },
            {
                key: 'componentDidUpdate',
                value: function(a) {
                    var E = this.props,
                        F = E.isActive,
                        G = E.canBegin,
                        H = E.attributeName,
                        I = E.shouldReAnimate;
                    if (G)
                        if (F) {
                            if (!((0, g.deepEqual)(a.to, this.props.to) && a.canBegin && a.isActive)) {
                                var J = !a.canBegin || !a.isActive;
                                this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
                                var K = J || I ? this.props.from : a.to;
                                if (this.state && this.state.style) {
                                    var L = {
                                        style: H ? r({}, H, K) : K
                                    };
                                    (H && this.state.style[H] !== K || !H && this.state.style !== K) && this.setState(L);
                                }
                                this.runAnimation(q(q({}, this.props), {}, {
                                    from: K,
                                    begin: 0
                                }));
                            }
                        } else {
                            var J = {
                                style: H ? r({}, H, this.props.to) : this.props.to
                            };
                            this.state && this.state.style && (H && this.state.style[H] !== this.props.to || !H && this.state.style !== this.props.to) && this.setState(J);
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
                value: function(a) {
                    var E = this,
                        F = a.from,
                        G = a.to,
                        H = a.duration,
                        I = a.easing,
                        J = a.begin,
                        K = a.onAnimationEnd,
                        L = a.onAnimationStart,
                        M = (0, j.default)(F, G, (0, i.configEasing)(I), H, this.changeStyle);
                    this.manager.start([
                        L,
                        J,
                        function() {
                            E.stopJSAnimation = M();
                        },
                        H,
                        K
                    ]);
                }
            },
            {
                key: 'runStepAnimation',
                value: function(a) {
                    var E = this,
                        F = a.steps,
                        G = a.begin,
                        H = a.onAnimationStart,
                        I = F[0],
                        J = I.style,
                        K = I.duration,
                        L = void 0 === K ? 0 : K;
                    return this.manager.start([H].concat(n(F.reduce(function(a, G, H) {
                        if (0 === H)
                            return a;
                        var M = G.duration,
                            N = G.easing,
                            O = void 0 === N ? 'ease' : N,
                            P = G.style,
                            Q = G.properties,
                            R = G.onAnimationEnd,
                            S = H > 0 ? F[H - 1] : G,
                            T = Q || Object.keys(P);
                        if ('function' == typeof O || 'spring' === O)
                            return [].concat(n(a), [
                                E.runJSAnimation.bind(E, {
                                    from: S.style,
                                    to: P,
                                    duration: M,
                                    easing: O
                                }),
                                M
                            ]);
                        var U = (0, k.getTransitionVal)(T, M, O),
                            V = q(q(q({}, S.style), P), {}, {
                                transition: U
                            });
                        return [].concat(n(a), [
                            V,
                            M,
                            R
                        ]).filter(k.identity);
                    }, [
                        J,
                        Math.max(L, G)
                    ])), [a.onAnimationEnd]));
                }
            },
            {
                key: 'runAnimation',
                value: function(a) {
                    this.manager || (this.manager = (0, h.default)());
                    var E = a.begin,
                        F = a.duration,
                        G = a.attributeName,
                        H = a.to,
                        I = a.easing,
                        J = a.onAnimationStart,
                        K = a.onAnimationEnd,
                        L = a.steps,
                        M = a.children,
                        N = this.manager;
                    if (this.unSubscribe = N.subscribe(this.handleStyleChange), 'function' != typeof I && 'function' != typeof M && 'spring' !== I)
                        if (L.length > 1)
                            this.runStepAnimation(a);
                        else {
                            var O = G ? r({}, G, H) : H,
                                P = (0, k.getTransitionVal)(Object.keys(O), F, I);
                            N.start([
                                J,
                                E,
                                q(q({}, O), {}, {
                                    transition: P
                                }),
                                F,
                                K
                            ]);
                        }
                    else
                        this.runJSAnimation(a);
                }
            },
            {
                key: 'handleStyleChange',
                value: function(a) {
                    this.changeStyle(a);
                }
            },
            {
                key: 'changeStyle',
                value: function(a) {
                    this.mounted && this.setState({
                        style: a
                    });
                }
            },
            {
                key: 'render',
                value: function() {
                    var E = this.props,
                        F = E.children,
                        G = (E.begin, E.duration, E.attributeName, E.easing, E.isActive),
                        H = (E.steps, E.from, E.to, E.canBegin, E.onAnimationEnd, E.shouldReAnimate, E.onAnimationReStart, m(E, [
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
                        I = e.Children.count(F),
                        J = (0, k.translateStyle)(this.state.style);
                    if ('function' == typeof F)
                        return F(J);
                    if (!G || 0 === I)
                        return F;
                    var K = function(a) {
                        var L = a.props,
                            M = L.style,
                            N = void 0 === M ? {} : M,
                            O = L.className;
                        return (0, e.cloneElement)(a, q(q({}, H), {}, {
                            style: q(q({}, N), J),
                            className: O
                        }));
                    };
                    return 1 === I ? K(e.Children.only(F)) : a(e).createElement('div', null, e.Children.map(F, function(a) {
                        return K(a);
                    }));
                }
            }
        ]) && s(z.prototype, A), B && s(z, B), D;
    }(e.PureComponent);
    y.displayName = 'Animate', y.propTypes = {
        from: a(f).oneOfType([
            a(f).object,
            a(f).string
        ]),
        to: a(f).oneOfType([
            a(f).object,
            a(f).string
        ]),
        attributeName: a(f).string,
        duration: a(f).number,
        begin: a(f).number,
        easing: a(f).oneOfType([
            a(f).string,
            a(f).func
        ]),
        steps: a(f).arrayOf(a(f).shape({
            duration: a(f).number.isRequired,
            style: a(f).object.isRequired,
            easing: a(f).oneOfType([
                a(f).oneOf([
                    'ease',
                    'ease-in',
                    'ease-out',
                    'ease-in-out',
                    'linear'
                ]),
                a(f).func
            ]),
            properties: a(f).arrayOf('string'),
            onAnimationEnd: a(f).func
        })),
        children: a(f).oneOfType([
            a(f).node,
            a(f).func
        ]),
        isActive: a(f).bool,
        canBegin: a(f).bool,
        onAnimationEnd: a(f).func,
        shouldReAnimate: a(f).bool,
        onAnimationStart: a(f).func,
        onAnimationReStart: a(f).func
    }, y.defaultProps = {
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
    var z = A;
}), d.register('y2wZq', function(a, b) {
    a.exports,
        function(a) {
            var e = 'function' == typeof WeakSet,
                f = Object.keys;

            function g(a, e) {
                return a === e || a != a && e != e;
            }

            function h(a) {
                return a.constructor === Object || null == a.constructor;
            }

            function i(a) {
                return !!a && 'function' == typeof a.then;
            }

            function j(a) {
                return !(!a || !a.$$typeof);
            }

            function k() {
                var l = [];
                return {
                    add: function(e) {
                        l.push(e);
                    },
                    has: function(e) {
                        return -1 !== l.indexOf(e);
                    }
                };
            }
            var l = e ? function() {
                return new WeakSet();
            } : k;

            function m(a) {
                return function(e) {
                    var n = a || e;
                    return function(a, e, g) {
                        void 0 === g && (g = l());
                        var o = !!a && 'object' == typeof a,
                            p = !!e && 'object' == typeof e;
                        if (o || p) {
                            var q = o && g.has(a),
                                r = p && g.has(e);
                            if (q || r)
                                return q && r;
                            o && g.add(a), p && g.add(e);
                        }
                        return n(a, e, g);
                    };
                };
            }

            function n(a, e, f, g) {
                var o = a.length;
                if (e.length !== o)
                    return !1;
                for (; o-- > 0;)
                    if (!f(a[o], e[o], g))
                        return !1;
                return !0;
            }

            function o(a, e, f, g) {
                var p = a.size === e.size;
                if (p && a.size) {
                    var q = {};
                    a.forEach(function(a, j) {
                        if (p) {
                            var r = !1,
                                s = 0;
                            e.forEach(function(e, p) {
                                r || q[s] || (r = f(j, p, g) && f(a, e, g)) && (q[s] = !0), s++;
                            }), p = r;
                        }
                    });
                }
                return p;
            }
            var p = '_owner',
                q = Function.prototype.bind.call(Function.prototype.call, Object.prototype.hasOwnProperty);

            function r(a, e, g, h) {
                var s = f(a),
                    t = s.length;
                if (f(e).length !== t)
                    return !1;
                if (t)
                    for (var u = void 0; t-- > 0;) {
                        if ((u = s[t]) === p) {
                            var v = j(a),
                                w = j(e);
                            if ((v || w) && v !== w)
                                return !1;
                        }
                        if (!q(e, u) || !g(a[u], e[u], h))
                            return !1;
                    }
                return !0;
            }

            function s(a, e) {
                return a.source === e.source && a.global === e.global && a.ignoreCase === e.ignoreCase && a.multiline === e.multiline && a.unicode === e.unicode && a.sticky === e.sticky && a.lastIndex === e.lastIndex;
            }

            function t(a, e, f, g) {
                var u = a.size === e.size;
                if (u && a.size) {
                    var v = {};
                    a.forEach(function(a) {
                        if (u) {
                            var w = !1,
                                x = 0;
                            e.forEach(function(e) {
                                w || v[x] || (w = f(a, e, g)) && (v[x] = !0), x++;
                            }), u = w;
                        }
                    });
                }
                return u;
            }
            var u = 'function' == typeof Map,
                v = 'function' == typeof Set;

            function w(a) {
                var x = 'function' == typeof a ? a(f) : f;

                function y(a, y, j) {
                    if (a === y)
                        return !0;
                    if (a && y && 'object' == typeof a && 'object' == typeof y) {
                        if (h(a) && h(y))
                            return r(a, y, x, j);
                        var z = Array.isArray(a),
                            A = Array.isArray(y);
                        return z || A ? z === A && n(a, y, x, j) : (z = a instanceof Date, A = y instanceof Date, z || A ? z === A && g(a.getTime(), y.getTime()) : (z = a instanceof RegExp, A = y instanceof RegExp, z || A ? z === A && s(a, y) : i(a) || i(y) ? a === y : u && (z = a instanceof Map, A = y instanceof Map, z || A) ? z === A && o(a, y, x, j) : v && (z = a instanceof Set, A = y instanceof Set, z || A) ? z === A && t(a, y, x, j) : r(a, y, x, j)));
                    }
                    return a != a && y != y;
                }
                return y;
            }
            var x = w(),
                y = w(function() {
                    return g;
                }),
                z = w(m()),
                A = w(m(g));
            a.circularDeepEqual = z, a.circularShallowEqual = A, a.createCustomEqual = w, a.deepEqual = x, a.sameValueZeroEqual = g, a.shallowEqual = y, Object.defineProperty(a, '__esModule', {
                value: !0
            });
        }(a.exports);
}), d.register('D2XZp', function(a, c) {
    b(a.exports, 'default', function() {
        return i;
    });
    var e = d('VJZi9');

    function f(a) {
        return f = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(a) {
            return typeof a;
        } : function(a) {
            return a && 'function' == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? 'symbol' : typeof a;
        }, f(a);
    }

    function g(a) {
        return function(a) {
            if (Array.isArray(a))
                return a;
        }(a) || function(a) {
            if ('undefined' != typeof Symbol && Symbol.iterator in Object(a))
                return Array.from(a);
        }(a) || function(a, b) {
            if (!a)
                return;
            if ('string' == typeof a)
                return h(a, b);
            var h = Object.prototype.toString.call(a).slice(8, -1);
            'Object' === h && a.constructor && (h = a.constructor.name);
            if ('Map' === h || 'Set' === h)
                return Array.from(a);
            if ('Arguments' === h || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(h))
                return h(a, b);
        }(a) || function() {
            throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }

    function h(a, b) {
        (null == b || b > a.length) && (b = a.length);
        for (var i = 0, j = new Array(b); i < b; i++)
            j[i] = a[i];
        return j;
    }

    function i() {
        var j = function() {
                return null;
            },
            k = !1,
            l = function l(d) {
                if (!k) {
                    if (Array.isArray(d)) {
                        if (!d.length)
                            return;
                        var m = g(d),
                            n = m[0],
                            o = m.slice(1);
                        return 'number' == typeof n ? void(0, e.default)(l.bind(null, o), n) : (l(n), void(0, e.default)(l.bind(null, o)));
                    }
                    'object' === f(d) && j(d), 'function' == typeof d && d();
                }
            };
        return {
            stop: function() {
                k = !0;
            },
            start: function(j) {
                k = !1, l(j);
            },
            subscribe: function(k) {
                return j = k,
                    function() {
                        j = function() {
                            return null;
                        };
                    };
            }
        };
    }
}), d.register('VJZi9', function(a, c) {
    function e(a) {
        var f = i.length > 1 && void 0 !== i[1] ? i[1] : 0,
            g = -1,
            h = function h(e) {
                g < 0 && (g = e), e - g > f ? (a(e), g = -1) : requestAnimationFrame(h);
            };
        requestAnimationFrame(h);
    }
    b(a.exports, 'default', function() {
        return e;
    });
}), d.register('TB6WL', function(a, c) {
    b(a.exports, 'configEasing', function() {
        return x;
    });
    var e = d('hE/L1');

    function f(a, b) {
        return function(a) {
            if (Array.isArray(a))
                return a;
        }(a) || function(a, b) {
            if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(a)))
                return;
            var g = [],
                h = !0,
                i = !1,
                j = void 0;
            try {
                for (var k, l = a[Symbol.iterator](); !(h = (k = l.next()).done) && (g.push(k.value), !b || g.length !== b); h = !0);
            } catch (a) {
                i = !0, j = a;
            } finally {
                try {
                    h || null == h.return || h.return();
                } finally {
                    if (i)
                        throw j;
                }
            }
            return g;
        }(a, b) || h(a, b) || function() {
            throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }

    function g(a) {
        return function(a) {
            if (Array.isArray(a))
                return i(a);
        }(a) || function(a) {
            if ('undefined' != typeof Symbol && Symbol.iterator in Object(a))
                return Array.from(a);
        }(a) || h(a) || function() {
            throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }

    function h(a, b) {
        if (a) {
            if ('string' == typeof a)
                return i(a, b);
            var i = Object.prototype.toString.call(a).slice(8, -1);
            return 'Object' === i && a.constructor && (i = a.constructor.name), 'Map' === i || 'Set' === i ? Array.from(a) : 'Arguments' === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? i(a, b) : void 0;
        }
    }

    function i(a, b) {
        (null == b || b > a.length) && (b = a.length);
        for (var j = 0, k = new Array(b); j < b; j++)
            k[j] = a[j];
        return k;
    }
    var j = 0.0001,
        k = function(a, b) {
            return [
                0,
                3 * a,
                3 * b - 6 * a,
                3 * a - 3 * b + 1
            ];
        },
        l = function(a, b) {
            return a.map(function(a, c) {
                return a * Math.pow(b, c);
            }).reduce(function(a, b) {
                return a + b;
            });
        },
        m = function(a, b) {
            return function(c) {
                var n = k(a, b);
                return l(n, c);
            };
        },
        n = function(a, b) {
            return function(c) {
                var o = k(a, b),
                    p = [].concat(g(o.map(function(a, b) {
                        return a * b;
                    }).slice(1)), [0]);
                return l(p, c);
            };
        },
        o = function() {
            for (var p = i.length, q = new Array(p), r = 0; r < p; r++)
                q[r] = i[r];
            var s = q[0],
                t = q[1],
                u = q[2],
                v = q[3];
            if (1 === q.length)
                switch (q[0]) {
                    case 'linear':
                        s = 0, t = 0, u = 1, v = 1;
                        break;
                    case 'ease':
                        s = 0.25, t = 0.1, u = 0.25, v = 1;
                        break;
                    case 'ease-in':
                        s = 0.42, t = 0, u = 1, v = 1;
                        break;
                    case 'ease-out':
                        s = 0.42, t = 0, u = 0.58, v = 1;
                        break;
                    case 'ease-in-out':
                        s = 0, t = 0, u = 0.58, v = 1;
                        break;
                    default:
                        var w = q[0].split('(');
                        if ('cubic-bezier' === w[0] && 4 === w[1].split(')')[0].split(',').length) {
                            var x = w[1].split(')')[0].split(',').map(function(p) {
                                    return parseFloat(p);
                                }),
                                y = f(x, 4);
                            s = y[0], t = y[1], u = y[2], v = y[3];
                        } else
                            (0, e.warn)(!1, '[configBezier]: arguments should be one of oneOf \'linear\', \'ease\', \'ease-in\', \'ease-out\', \'ease-in-out\',\'cubic-bezier(x1,y1,x2,y2)\', instead received %s', q);
                }
                (0, e.warn)([
                    s,
                    u,
                    t,
                    v
                ].every(function(p) {
                    return 'number' == typeof p && p >= 0 && p <= 1;
                }), '[configBezier]: arguments should be x1, y1, x2, y2 of [0, 1] instead received %s', q);
            var w = m(s, u),
                x = m(t, v),
                y = n(s, u),
                z = function(p) {
                    return p > 1 ? 1 : p < 0 ? 0 : p;
                },
                A = function(p) {
                    for (var B = p > 1 ? 1 : p, C = D, E = 0; E < 8; ++E) {
                        var F = w(C) - D,
                            G = y(C);
                        if (Math.abs(F - D) < j || G < j)
                            return x(C);
                        C = z(C - F / G);
                    }
                    return x(C);
                };
            return A.isStepper = !1, A;
        },
        p = function() {
            var q = i.length > 0 && void 0 !== i[0] ? i[0] : {},
                r = q.stiff,
                s = void 0 === r ? 100 : r,
                t = q.damping,
                u = void 0 === t ? 8 : t,
                v = q.dt,
                w = void 0 === v ? 17 : v,
                x = function(q, r, t) {
                    var y = t + (-(q - r) * s - t * u) * w / 1000,
                        z = t * w / 1000 + q;
                    return Math.abs(z - r) < j && Math.abs(y) < j ? [
                        r,
                        0
                    ] : [
                        z,
                        y
                    ];
                };
            return x.isStepper = !0, x.dt = w, x;
        },
        q = function() {
            for (var r = i.length, s = new Array(r), t = 0; t < r; t++)
                s[t] = i[t];
            var u = s[0];
            if ('string' == typeof u)
                switch (u) {
                    case 'ease':
                    case 'ease-in-out':
                    case 'ease-out':
                    case 'ease-in':
                    case 'linear':
                        return o(u);
                    case 'spring':
                        return p();
                    default:
                        if ('cubic-bezier' === u.split('(')[0])
                            return o(u);
                        (0, e.warn)(!1, '[configEasing]: first argument should be one of \'ease\', \'ease-in\', \'ease-out\', \'ease-in-out\',\'cubic-bezier(x1,y1,x2,y2)\', \'linear\' and \'spring\', instead  received %s', s);
                }
            return 'function' == typeof u ? u : ((0, e.warn)(!1, '[configEasing]: first argument type should be function or string, instead received %s', s), null);
        };
}), d.register('hE/L1', function(a, c) {
    function e(a, b) {
        var f = Object.keys(a);
        if (Object.getOwnPropertySymbols) {
            var g = Object.getOwnPropertySymbols(a);
            b && (g = g.filter(function(b) {
                return Object.getOwnPropertyDescriptor(a, b).enumerable;
            })), f.push.apply(f, g);
        }
        return f;
    }

    function f(a) {
        for (var g = 1; g < i.length; g++) {
            var h = null != i[g] ? i[g] : {};
            g % 2 ? e(Object(h), !0).forEach(function(g) {
                g(a, g, h[g]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(h)) : e(Object(h)).forEach(function(g) {
                Object.defineProperty(a, g, Object.getOwnPropertyDescriptor(h, g));
            });
        }
        return a;
    }

    function g(a, b, c) {
        return b in a ? Object.defineProperty(a, b, {
            value: c,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : a[b] = c, a;
    }
    b(a.exports, 'getIntersectionKeys', function() {
        return k;
    }), b(a.exports, 'identity', function() {
        return l;
    }), b(a.exports, 'mapObject', function() {
        return m;
    }), b(a.exports, 'translateStyle', function() {
        return n;
    }), b(a.exports, 'getTransitionVal', function() {
        return o;
    }), b(a.exports, 'warn', function() {
        return p;
    });
    var h = [
            'Webkit',
            'Moz',
            'O',
            'ms'
        ],
        i = [
            '-webkit-',
            '-moz-',
            '-o-',
            '-ms-'
        ],
        j = [
            'transform',
            'transformOrigin',
            'transition'
        ],
        k = function(a, b) {
            return [
                Object.keys(a),
                Object.keys(b)
            ].reduce(function(a, b) {
                return a.filter(function(a) {
                    return b.includes(a);
                });
            });
        },
        l = function(a) {
            return a;
        },
        m = function(a, b) {
            return Object.keys(b).reduce(function(c, e) {
                return f(f({}, c), {}, g({}, e, a(e, b[e])));
            }, {});
        },
        n = function(a) {
            return Object.keys(a).reduce(function(a, b) {
                return f(f({}, a), function(a, b) {
                    if (-1 === j.indexOf(a))
                        return g({}, a, b);
                    var o = 'transition' === a,
                        p = a.replace(/(\w)/, function(a) {
                            return a.toUpperCase();
                        }),
                        q = r;
                    return h.reduce(function(a, h, j) {
                        return o && (q = r.replace(/(transform|transform-origin)/gim, ''.concat(i[j], '$1'))), f(f({}, a), {}, g({}, h + p, q));
                    }, {});
                }(b, a[b]));
            }, a);
        },
        o = function(a, b, c) {
            return a.map(function(a) {
                return ''.concat((e = a, e.replace(/([A-Z])/g, function(a) {
                    return '-'.concat(a.toLowerCase());
                })), ' ').concat(b, 'ms ').concat(c);
                var p;
            }).join(',');
        },
        p = function(a, b, c, e, f, g, h, i) {};
}), d.register('JBZrO', function(a, c) {
    b(a.exports, 'default', function() {
        return p;
    });
    var e = d('hE/L1');

    function f(a) {
        return function(a) {
            if (Array.isArray(a))
                return l(a);
        }(a) || function(a) {
            if ('undefined' != typeof Symbol && Symbol.iterator in Object(a))
                return Array.from(a);
        }(a) || k(a) || function() {
            throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }

    function g(a, b) {
        var h = Object.keys(a);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(a);
            b && (i = i.filter(function(b) {
                return Object.getOwnPropertyDescriptor(a, b).enumerable;
            })), h.push.apply(h, i);
        }
        return h;
    }

    function h(a) {
        for (var i = 1; i < i.length; i++) {
            var j = null != i[i] ? i[i] : {};
            i % 2 ? g(Object(j), !0).forEach(function(i) {
                i(a, i, j[i]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(j)) : g(Object(j)).forEach(function(i) {
                Object.defineProperty(a, i, Object.getOwnPropertyDescriptor(j, i));
            });
        }
        return a;
    }

    function i(a, b, c) {
        return b in a ? Object.defineProperty(a, b, {
            value: c,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : a[b] = c, a;
    }

    function j(a, b) {
        return function(a) {
            if (Array.isArray(a))
                return a;
        }(a) || function(a, b) {
            if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(a)))
                return;
            var k = [],
                l = !0,
                m = !1,
                n = void 0;
            try {
                for (var o, p = a[Symbol.iterator](); !(l = (o = p.next()).done) && (k.push(o.value), !b || k.length !== b); l = !0);
            } catch (a) {
                m = !0, n = a;
            } finally {
                try {
                    l || null == h.return || h.return();
                } finally {
                    if (m)
                        throw n;
                }
            }
            return k;
        }(a, b) || k(a, b) || function() {
            throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }

    function k(a, b) {
        if (a) {
            if ('string' == typeof a)
                return l(a, b);
            var l = Object.prototype.toString.call(a).slice(8, -1);
            return 'Object' === l && a.constructor && (l = a.constructor.name), 'Map' === l || 'Set' === l ? Array.from(a) : 'Arguments' === l || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l) ? l(a, b) : void 0;
        }
    }

    function l(a, b) {
        (null == b || b > a.length) && (b = a.length);
        for (var m = 0, n = new Array(b); m < b; m++)
            n[m] = a[m];
        return n;
    }
    var m = function(a, b, c) {
            return a + (b - a) * c;
        },
        n = function(a) {
            return a.from !== a.to;
        },
        o = function a(b, c, d) {
            var p = (0, e.mapObject)(function(a, c) {
                if (n(c)) {
                    var q = j(b(c.from, c.to, c.velocity), 2),
                        r = q[0],
                        s = q[1];
                    return h(h({}, c), {}, {
                        from: r,
                        velocity: s
                    });
                }
                return c;
            }, c);
            return d < 1 ? (0, e.mapObject)(function(a, b) {
                return n(b) ? h(h({}, b), {}, {
                    velocity: m(b.velocity, p[a].velocity, d),
                    from: m(b.from, p[a].from, d)
                }) : b;
            }, c) : a(b, p, d - 1);
        },
        p = function(a, b, c, d, g) {
            var q, r, s = (0, e.getIntersectionKeys)(a, b),
                t = s.reduce(function(c, d) {
                    return h(h({}, c), {}, i({}, d, [
                        a[d],
                        b[d]
                    ]));
                }, {}),
                u = s.reduce(function(c, d) {
                    return h(h({}, c), {}, i({}, d, {
                        from: a[d],
                        velocity: 0,
                        to: b[d]
                    }));
                }, {}),
                v = -1,
                w = function() {
                    return null;
                };
            return w = c.isStepper ? function(d) {
                    q || (q = d);
                    var x = (d - q) / c.dt;
                    u = o(c, u, x), g(h(h(h({}, a), b), (0, e.mapObject)(function(a, b) {
                        return b.from;
                    }, u))), q = d, Object.values(u).filter(n).length && (v = requestAnimationFrame(w));
                } : function(i) {
                    r || (r = i);
                    var x = (i - r) / d,
                        y = (0, e.mapObject)(function(a, b) {
                            return m.apply(void 0, f(b).concat([c(x)]));
                        }, t);
                    if (g(h(h(h({}, a), b), y)), x < 1)
                        v = requestAnimationFrame(w);
                    else {
                        var z = (0, e.mapObject)(function(a, b) {
                            return m.apply(void 0, f(b).concat([c(1)]));
                        }, t);
                        g(h(h(h({}, a), b), z));
                    }
                },
                function() {
                    return requestAnimationFrame(w),
                        function() {
                            cancelAnimationFrame(v);
                        };
                };
        };
}), d.register('D9OYy', function(b, c) {
    var e = d('uPP4W'),
        f = d('GuzpU'),
        g = d('uj3CK'),
        h = d('7ERBV');

    function i(b) {
        var j = b.component,
            k = b.children,
            l = b.appear,
            m = b.enter,
            n = b.leave;
        return a(e).createElement(f.TransitionGroup, {
            component: j
        }, e.Children.map(k, function(b, j) {
            return a(e).createElement(h.default, {
                appearOptions: l,
                enterOptions: m,
                leaveOptions: n,
                key: 'child-'.concat(j)
            }, b);
        }));
    }
    i.propTypes = {
        appear: a(g).object,
        enter: a(g).object,
        leave: a(g).object,
        children: a(g).oneOfType([
            a(g).array,
            a(g).element
        ]),
        component: a(g).any
    }, i.defaultProps = {
        component: 'span'
    };
}), d.register('7ERBV', function(c, n) {
    b(c.exports, 'default', function() {
        return w;
    });
    var e = d('uPP4W'),
        f = d('GuzpU'),
        g = d('uj3CK'),
        h = d('OQHL5');

    function i(a) {
        return i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(a) {
            return typeof a;
        } : function(a) {
            return a && 'function' == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? 'symbol' : typeof a;
        }, i(a);
    }

    function j() {
        return j = Object.assign || function(a) {
            for (var k = 1; k < i.length; k++) {
                var l = i[k];
                for (var m in l)
                    Object.prototype.hasOwnProperty.call(l, m) && (a[m] = l[m]);
            }
            return a;
        }, j.apply(this, i);
    }

    function k(a, b) {
        if (null == a)
            return {};
        var l, m, n = function(a, b) {
            if (null == a)
                return {};
            var o, p, q = {},
                r = Object.keys(a);
            for (p = 0; p < r.length; p++)
                o = r[p], b.indexOf(o) >= 0 || (q[o] = a[o]);
            return q;
        }(a, b);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(a);
            for (m = 0; m < o.length; m++)
                l = o[m], b.indexOf(l) >= 0 || Object.prototype.propertyIsEnumerable.call(a, l) && (n[l] = a[l]);
        }
        return n;
    }

    function l(a, b) {
        var m = Object.keys(a);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(a);
            b && (n = n.filter(function(b) {
                return Object.getOwnPropertyDescriptor(a, b).enumerable;
            })), m.push.apply(m, n);
        }
        return m;
    }

    function m(a) {
        for (var n = 1; n < i.length; n++) {
            var o = null != i[n] ? i[n] : {};
            n % 2 ? l(Object(o), !0).forEach(function(n) {
                n(a, n, o[n]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(o)) : l(Object(o)).forEach(function(n) {
                Object.defineProperty(a, n, Object.getOwnPropertyDescriptor(o, n));
            });
        }
        return a;
    }

    function n(a, b, c) {
        return b in a ? Object.defineProperty(a, b, {
            value: c,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : a[b] = c, a;
    }

    function o(a, b) {
        if (!(a instanceof b))
            throw new TypeError('Cannot call a class as a function');
    }

    function p(a, b) {
        for (var q = 0; q < b.length; q++) {
            var r = b[q];
            r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(a, r.key, r);
        }
    }

    function q(a, b) {
        return q = Object.setPrototypeOf || function(a, b) {
            return a.__proto__ = b, a;
        }, q(a, b);
    }

    function r(a) {
        var s = function() {
            if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ('function' == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
            } catch (a) {
                return !1;
            }
        }();
        return function() {
            var t, u = t(a);
            if (s) {
                var v = t(this).constructor;
                t = Reflect.construct(u, i, v);
            } else
                t = u.apply(this, i);
            return s(this, t);
        };
    }

    function s(a, b) {
        return !b || 'object' !== i(b) && 'function' != typeof b ? function(a) {
            if (void 0 === a)
                throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return a;
        }(a) : b;
    }

    function t(a) {
        return t = Object.setPrototypeOf ? Object.getPrototypeOf : function(a) {
            return a.__proto__ || Object.getPrototypeOf(a);
        }, t(a);
    }
    void 0 === Number.isFinite && (Number.isFinite = function(a) {
        return 'number' == typeof a && isFinite(a);
    });
    var u = function() {
            var v = i.length > 0 && void 0 !== i[0] ? i[0] : {},
                w = v.steps,
                x = v.duration;
            return w && w.length ? w.reduce(function(v, w) {
                return v + (Number.isFinite(w.duration) && w.duration > 0 ? w.duration : 0);
            }, 0) : Number.isFinite(x) ? x : 0;
        },
        v = function(b) {
            ! function(a, b) {
                if ('function' != typeof b && null !== b)
                    throw new TypeError('Super expression must either be null or a function');
                a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                        value: a,
                        writable: !0,
                        configurable: !0
                    }
                }), b && q(a, b);
            }(i, b);
            var w, x, y, z = r(i);

            function A() {
                var B;
                o(this, A);
                for (var C = i.length, D = new Array(C), E = 0; E < C; E++)
                    D[E] = i[E];
                return (B = z.call.apply(z, [this].concat(D))).state = {
                    isActive: !1
                }, B.handleEnter = function(C, D) {
                    var F = B.props,
                        G = F.appearOptions,
                        H = F.enterOptions;
                    B.handleStyleActive(D ? G : H);
                }, B.handleExit = function() {
                    B.handleStyleActive(B.props.leaveOptions);
                }, B;
            }
            return w = A, (x = [{
                    key: 'handleStyleActive',
                    value: function(a) {
                        if (a) {
                            var B = a.onAnimationEnd ? function() {
                                a.onAnimationEnd();
                            } : null;
                            this.setState(m(m({}, a), {}, {
                                onAnimationEnd: B,
                                isActive: !0
                            }));
                        }
                    }
                },
                {
                    key: 'parseTimeout',
                    value: function() {
                        var B = this.props,
                            C = B.appearOptions,
                            D = B.enterOptions,
                            E = B.leaveOptions;
                        return u(C) + u(D) + u(E);
                    }
                },
                {
                    key: 'render',
                    value: function() {
                        var F = this,
                            G = this.props,
                            H = G.children,
                            I = (G.appearOptions, G.enterOptions, G.leaveOptions, k(G, [
                                'children',
                                'appearOptions',
                                'enterOptions',
                                'leaveOptions'
                            ]));
                        return B(e).createElement(f.Transition, j({}, I, {
                            onEnter: this.handleEnter,
                            onExit: this.handleExit,
                            timeout: this.parseTimeout()
                        }), function() {
                            return B(e).createElement(h.default, F.state, e.Children.only(H));
                        });
                    }
                }
            ]) && p(w.prototype, x), y && p(w, y), A;
        }(e.Component);
    v.propTypes = {
        appearOptions: a(g).object,
        enterOptions: a(g).object,
        leaveOptions: a(g).object,
        children: a(g).element
    };
    var w = x;
}), d.register('xItwy', function(c, r) {
    b(c.exports, 'isInRectangle', function() {
        return r;
    }), b(c.exports, 'Rectangle', function() {
        return s;
    });
    var e = d('uPP4W'),
        f = d('VAIs1'),
        g = d('Pv6EO'),
        h = d('5AxlR');

    function i(a) {
        return i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(a) {
            return typeof a;
        } : function(a) {
            return a && 'function' == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? 'symbol' : typeof a;
        }, i(a);
    }

    function j() {
        return j = Object.assign || function(a) {
            for (var k = 1; k < i.length; k++) {
                var l = i[k];
                for (var m in l)
                    Object.prototype.hasOwnProperty.call(l, m) && (a[m] = l[m]);
            }
            return a;
        }, j.apply(this, i);
    }

    function k(a, b) {
        if (!(a instanceof b))
            throw new TypeError('Cannot call a class as a function');
    }

    function l(a, b) {
        for (var m = 0; m < b.length; m++) {
            var n = b[m];
            n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(a, n.key, n);
        }
    }

    function m(a, b) {
        return m = Object.setPrototypeOf || function(a, b) {
            return a.__proto__ = b, a;
        }, m(a, b);
    }

    function n(a) {
        var o = function() {
            if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ('function' == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
            } catch (a) {
                return !1;
            }
        }();
        return function() {
            var p, q = p(a);
            if (o) {
                var r = p(this).constructor;
                p = Reflect.construct(q, i, r);
            } else
                p = q.apply(this, i);
            return o(this, p);
        };
    }

    function o(a, b) {
        return !b || 'object' !== i(b) && 'function' != typeof b ? function(a) {
            if (void 0 === a)
                throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return a;
        }(a) : b;
    }

    function p(a) {
        return p = Object.setPrototypeOf ? Object.getPrototypeOf : function(a) {
            return a.__proto__ || Object.getPrototypeOf(a);
        }, p(a);
    }
    var q = function(a, b, c, d, u) {
            var r, s = Math.min(Math.abs(c) / 2, Math.abs(d) / 2),
                t = d >= 0 ? 1 : -1,
                u = c >= 0 ? 1 : -1,
                v = d >= 0 && c >= 0 || d < 0 && c < 0 ? 1 : 0;
            if (s > 0 && u instanceof Array) {
                for (var w = [
                        0,
                        0,
                        0,
                        0
                    ], x = 0; x < 4; x++)
                    w[x] = u[x] > s ? s : u[x];
                r = 'M'.concat(a, ',').concat(b + t * w[0]), w[0] > 0 && (r += 'A '.concat(w[0], ',').concat(w[0], ',0,0,').concat(v, ',').concat(a + u * w[0], ',').concat(b)), r += 'L '.concat(a + c - u * w[1], ',').concat(b), w[1] > 0 && (r += 'A '.concat(w[1], ',').concat(w[1], ',0,0,').concat(v, ',\n        ').concat(a + c, ',').concat(b + t * w[1])), r += 'L '.concat(a + c, ',').concat(b + d - t * w[2]), w[2] > 0 && (r += 'A '.concat(w[2], ',').concat(w[2], ',0,0,').concat(v, ',\n        ').concat(a + c - u * w[2], ',').concat(b + d)), r += 'L '.concat(a + u * w[3], ',').concat(b + d), w[3] > 0 && (r += 'A '.concat(w[3], ',').concat(w[3], ',0,0,').concat(v, ',\n        ').concat(a, ',').concat(b + d - t * w[3])), r += 'Z';
            } else if (s > 0 && u === +u && u > 0) {
                var y = Math.min(s, u);
                r = 'M '.concat(a, ',').concat(b + t * y, '\n            A ').concat(y, ',').concat(y, ',0,0,').concat(v, ',').concat(a + u * y, ',').concat(b, '\n            L ').concat(a + c - u * y, ',').concat(b, '\n            A ').concat(y, ',').concat(y, ',0,0,').concat(v, ',').concat(a + c, ',').concat(b + t * y, '\n            L ').concat(a + c, ',').concat(b + d - t * y, '\n            A ').concat(y, ',').concat(y, ',0,0,').concat(v, ',').concat(a + c - u * y, ',').concat(b + d, '\n            L ').concat(a + u * y, ',').concat(b + d, '\n            A ').concat(y, ',').concat(y, ',0,0,').concat(v, ',').concat(a, ',').concat(b + d - t * y, ' Z');
            } else
                r = 'M '.concat(a, ',').concat(b, ' h ').concat(c, ' v ').concat(d, ' h ').concat(-c, ' Z');
            return r;
        },
        r = function(a, b) {
            if (!a || !b)
                return !1;
            var s = a.x,
                t = a.y,
                u = b.x,
                v = b.y,
                w = b.width,
                x = b.height;
            if (Math.abs(w) > 0 && Math.abs(x) > 0) {
                var y = Math.min(u, u + w),
                    z = Math.max(u, u + w),
                    A = Math.min(v, v + x),
                    B = Math.max(v, v + x);
                return s >= y && s <= z && t >= A && t <= B;
            }
            return !1;
        },
        s = function(b) {
            ! function(a, b) {
                if ('function' != typeof b && null !== b)
                    throw new TypeError('Super expression must either be null or a function');
                a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                        value: a,
                        writable: !0,
                        configurable: !0
                    }
                }), b && m(a, b);
            }(o, b);
            var t, u, v, w = n(o);

            function x() {
                var y;
                k(this, x);
                for (var z = i.length, A = new Array(z), B = 0; B < z; B++)
                    A[B] = i[B];
                return (y = w.call.apply(w, [this].concat(A))).state = {
                    totalLength: -1
                }, y.node = void 0, y;
            }
            return t = x, (u = [{
                    key: 'componentDidMount',
                    value: function() {
                        if (this.node && this.node.getTotalLength)
                            try {
                                var y = this.node.getTotalLength();
                                y && this.setState({
                                    totalLength: y
                                });
                            } catch (a) {}
                    }
                },
                {
                    key: 'render',
                    value: function() {
                        var y = this,
                            z = this.props,
                            A = z.x,
                            B = z.y,
                            C = z.width,
                            D = z.height,
                            E = z.radius,
                            F = z.className,
                            G = this.state.totalLength,
                            H = this.props,
                            I = H.animationEasing,
                            J = H.animationDuration,
                            K = H.animationBegin,
                            L = H.isAnimationActive,
                            M = H.isUpdateAnimationActive;
                        if (A !== +A || B !== +B || C !== +C || D !== +D || 0 === C || 0 === D)
                            return null;
                        var N = a(f)('recharts-rectangle', F);
                        return M ? a(e).createElement(g.default, {
                            canBegin: G > 0,
                            from: {
                                width: C,
                                height: D,
                                x: A,
                                y: B
                            },
                            to: {
                                width: C,
                                height: D,
                                x: A,
                                y: B
                            },
                            duration: J,
                            animationEasing: I,
                            isActive: M
                        }, function(z) {
                            var O = z.width,
                                P = z.height,
                                Q = z.x,
                                R = z.y;
                            return a(e).createElement(g.default, {
                                canBegin: G > 0,
                                from: '0px '.concat(-1 === G ? 1 : G, 'px'),
                                to: ''.concat(G, 'px 0px'),
                                attributeName: 'strokeDasharray',
                                begin: K,
                                duration: J,
                                isActive: L,
                                easing: I
                            }, a(e).createElement('path', j({}, (0, h.filterProps)(y.props, !0), {
                                className: N,
                                d: q(Q, R, O, P, E),
                                ref: function(a) {
                                    y.node = a;
                                }
                            })));
                        }) : a(e).createElement('path', j({}, (0, h.filterProps)(this.props, !0), {
                            className: N,
                            d: q(A, B, C, D, E)
                        }));
                    }
                }
            ]) && l(t.prototype, u), v && l(t, v), x;
        }(e.PureComponent);
    s.defaultProps = {
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
}), d.register('5AxlR', function(c, l) {
    b(c.exports, 'filterProps', function() {
        return k;
    }), b(c.exports, 'adaptEventHandlers', function() {
        return l;
    }), b(c.exports, 'adaptEventsOfChild', function() {
        return m;
    });
    var e = d('AdPm00'),
        f = d('uPP4W');

    function g(a) {
        return g = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(a) {
            return typeof a;
        } : function(a) {
            return a && 'function' == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? 'symbol' : typeof a;
        }, g(a);
    }
    var h = [
            'viewBox',
            'children'
        ],
        i = [
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
        j = [
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
        k = function(b, c, d) {
            if (!b || 'function' == typeof b || 'boolean' == typeof b)
                return null;
            var l = m;
            if ((0, f.isValidElement)(m) && (l = m.props), !a(e)(l))
                return null;
            var n = {};
            return Object.keys(l).forEach(function(a) {
                (i.includes(a) || d && h.includes(a) || c && j.includes(a)) && (n[a] = l[a]);
            }), n;
        },
        l = function(b, c) {
            if (!b || 'function' == typeof b || 'boolean' == typeof b)
                return null;
            var m = n;
            if ((0, f.isValidElement)(n) && (m = n.props), !a(e)(m))
                return null;
            var o = {};
            return Object.keys(m).forEach(function(a) {
                j.includes(a) && (o[a] = c || function(n) {
                    return m[a](m, n);
                });
            }), o;
        },
        m = function(b, c, d) {
            if (!a(e)(b) || 'object' !== g(b))
                return null;
            var n = null;
            return Object.keys(b).forEach(function(a) {
                var o = b[a];
                j.includes(a) && 'function' == typeof o && (n || (n = {}), n[a] = function(a, b, c) {
                    return function(d) {
                        return a(b, c, d), null;
                    };
                }(o, c, d));
            }), n;
        };
}), d.register('iSJ10', function(c, l) {
    b(c.exports, 'Layer', function() {
        return j;
    });
    var e = d('uPP4W'),
        f = d('VAIs1'),
        g = d('5AxlR');

    function h() {
        return h = Object.assign || function(a) {
            for (var i = 1; i < i.length; i++) {
                var j = i[i];
                for (var k in j)
                    Object.prototype.hasOwnProperty.call(j, k) && (a[k] = j[k]);
            }
            return a;
        }, h.apply(this, i);
    }

    function i(a, b) {
        if (null == a)
            return {};
        var j, k, l = function(a, b) {
            if (null == a)
                return {};
            var m, n, o = {},
                p = Object.keys(a);
            for (n = 0; n < p.length; n++)
                m = p[n], b.indexOf(m) >= 0 || (o[m] = a[m]);
            return o;
        }(a, b);
        if (Object.getOwnPropertySymbols) {
            var m = Object.getOwnPropertySymbols(a);
            for (k = 0; k < m.length; k++)
                j = m[k], b.indexOf(j) >= 0 || Object.prototype.propertyIsEnumerable.call(a, j) && (l[j] = a[j]);
        }
        return l;
    }
    var j = a(e).forwardRef(function(b, c) {
        var k = b.children,
            l = b.className,
            m = i(b, [
                'children',
                'className'
            ]),
            n = a(f)('recharts-layer', l);
        return a(e).createElement('g', h({
            className: n
        }, (0, g.filterProps)(m, !0), {
            ref: c
        }), k);
    });
}), d.register('wKj+m', function(c, l) {
    b(c.exports, 'ErrorBar', function() {
        return l;
    });
    var e = d('uPP4W'),
        f = d('iSJ10'),
        g = d('5AxlR');

    function h() {
        return h = Object.assign || function(a) {
            for (var i = 1; i < i.length; i++) {
                var j = i[i];
                for (var k in j)
                    Object.prototype.hasOwnProperty.call(j, k) && (a[k] = j[k]);
            }
            return a;
        }, h.apply(this, i);
    }

    function i(a, b) {
        return function(a) {
            if (Array.isArray(a))
                return a;
        }(a) || function(a, b) {
            if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(a)))
                return;
            var j = [],
                k = !0,
                l = !1,
                m = void 0;
            try {
                for (var n, o = a[Symbol.iterator](); !(k = (n = o.next()).done) && (j.push(n.value), !b || j.length !== b); k = !0);
            } catch (a) {
                l = !0, m = a;
            } finally {
                try {
                    k || null == g.return || g.return();
                } finally {
                    if (l)
                        throw m;
                }
            }
            return j;
        }(a, b) || function(a, b) {
            if (!a)
                return;
            if ('string' == typeof a)
                return j(a, b);
            var j = Object.prototype.toString.call(a).slice(8, -1);
            'Object' === j && a.constructor && (j = a.constructor.name);
            if ('Map' === j || 'Set' === j)
                return Array.from(a);
            if ('Arguments' === j || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(j))
                return j(a, b);
        }(a, b) || function() {
            throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }

    function j(a, b) {
        (null == b || b > a.length) && (b = a.length);
        for (var k = 0, l = new Array(b); k < b; k++)
            l[k] = a[k];
        return l;
    }

    function k(a, b) {
        if (null == a)
            return {};
        var l, m, n = function(a, b) {
            if (null == a)
                return {};
            var o, p, q = {},
                r = Object.keys(a);
            for (p = 0; p < r.length; p++)
                o = r[p], b.indexOf(o) >= 0 || (q[o] = a[o]);
            return q;
        }(a, b);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(a);
            for (m = 0; m < o.length; m++)
                l = o[m], b.indexOf(l) >= 0 || Object.prototype.propertyIsEnumerable.call(a, l) && (n[l] = a[l]);
        }
        return n;
    }

    function l(b) {
        var m = b.offset,
            n = b.layout,
            o = b.width,
            p = b.dataKey,
            q = b.data,
            r = b.dataPointFormatter,
            s = b.xAxis,
            t = b.yAxis,
            u = k(b, [
                'offset',
                'layout',
                'width',
                'dataKey',
                'data',
                'dataPointFormatter',
                'xAxis',
                'yAxis'
            ]),
            v = (0, g.filterProps)(u),
            w = q.map(function(b, g) {
                var x = r(b, p),
                    y = x.x,
                    z = x.y,
                    A = x.value,
                    B = x.errorVal;
                if (!B)
                    return null;
                var C, D, E = [];
                if (Array.isArray(B)) {
                    var F = i(B, 2);
                    C = F[0], D = F[1];
                } else
                    C = D = B;
                if ('vertical' === n) {
                    var F = s.scale,
                        G = z + m,
                        H = G + o,
                        I = G - o,
                        J = F(A - C),
                        K = F(A + D);
                    E.push({
                        x1: K,
                        y1: H,
                        x2: K,
                        y2: I
                    }), E.push({
                        x1: J,
                        y1: G,
                        x2: K,
                        y2: G
                    }), E.push({
                        x1: J,
                        y1: H,
                        x2: J,
                        y2: I
                    });
                } else if ('horizontal' === n) {
                    var L = t.scale,
                        M = y + m,
                        N = M - o,
                        O = M + o,
                        P = L(A - C),
                        Q = L(A + D);
                    E.push({
                        x1: N,
                        y1: Q,
                        x2: O,
                        y2: Q
                    }), E.push({
                        x1: M,
                        y1: P,
                        x2: M,
                        y2: Q
                    }), E.push({
                        x1: N,
                        y1: P,
                        x2: O,
                        y2: P
                    });
                }
                return a(e).createElement(f.Layer, h({
                    className: 'recharts-errorBar',
                    key: 'bar-'.concat(g)
                }, v), E.map(function(b, m) {
                    return a(e).createElement('line', h({}, b, {
                        key: 'line-'.concat(m)
                    }));
                }));
            });
        return a(e).createElement(f.Layer, {
            className: 'recharts-errorBars'
        }, w);
    }
    l.defaultProps = {
        stroke: 'black',
        strokeWidth: 1.5,
        width: 5,
        offset: 0,
        layout: 'horizontal'
    }, l.displayName = 'ErrorBar';
}), d.register('5fr0x', function(a, c) {
    b(a.exports, 'Cell', function() {
        return d;
    });
    var e = function(a) {
        return null;
    };
    e.displayName = 'Cell';
}), d.register('eQQdp', function(c, y) {
    b(c.exports, 'LabelList', function() {
        return x;
    });
    var e = d('AdPm00'),
        f = d('tax32'),
        g = d('oskvv'),
        h = d('P7cM9'),
        i = d('JslBt0'),
        j = d('uPP4W'),
        k = d('Mq9Yw'),
        l = d('iSJ10'),
        m = d('NvaHc'),
        n = d('rR6Py'),
        o = d('5AxlR');

    function p(a) {
        return function(a) {
            if (Array.isArray(a))
                return q(a);
        }(a) || function(a) {
            if ('undefined' != typeof Symbol && Symbol.iterator in Object(a))
                return Array.from(a);
        }(a) || function(a, b) {
            if (!a)
                return;
            if ('string' == typeof a)
                return q(a, b);
            var q = Object.prototype.toString.call(a).slice(8, -1);
            'Object' === q && a.constructor && (q = a.constructor.name);
            if ('Map' === q || 'Set' === q)
                return Array.from(a);
            if ('Arguments' === q || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(q))
                return q(a, b);
        }(a) || function() {
            throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }

    function q(a, b) {
        (null == b || b > a.length) && (b = a.length);
        for (var r = 0, s = new Array(b); r < b; r++)
            s[r] = a[r];
        return s;
    }

    function r() {
        return r = Object.assign || function(a) {
            for (var s = 1; s < i.length; s++) {
                var t = i[s];
                for (var u in t)
                    Object.prototype.hasOwnProperty.call(t, u) && (a[u] = t[u]);
            }
            return a;
        }, r.apply(this, i);
    }

    function s(a, b) {
        var t = Object.keys(a);
        if (Object.getOwnPropertySymbols) {
            var u = Object.getOwnPropertySymbols(a);
            b && (u = u.filter(function(b) {
                return Object.getOwnPropertyDescriptor(a, b).enumerable;
            })), t.push.apply(t, u);
        }
        return t;
    }

    function t(a) {
        for (var u = 1; u < i.length; u++) {
            var v = null != i[u] ? i[u] : {};
            u % 2 ? s(Object(v), !0).forEach(function(u) {
                u(a, u, v[u]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(v)) : s(Object(v)).forEach(function(u) {
                Object.defineProperty(a, u, Object.getOwnPropertyDescriptor(v, u));
            });
        }
        return a;
    }

    function u(a, b, c) {
        return b in a ? Object.defineProperty(a, b, {
            value: c,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : a[b] = c, a;
    }

    function v(a, b) {
        if (null == a)
            return {};
        var w, x, y = function(a, b) {
            if (null == a)
                return {};
            var z, A, B = {},
                C = Object.keys(a);
            for (A = 0; A < C.length; A++)
                z = C[A], b.indexOf(z) >= 0 || (B[z] = a[z]);
            return B;
        }(a, b);
        if (Object.getOwnPropertySymbols) {
            var z = Object.getOwnPropertySymbols(a);
            for (x = 0; x < z.length; x++)
                w = z[x], b.indexOf(w) >= 0 || Object.prototype.propertyIsEnumerable.call(a, w) && (y[w] = a[w]);
        }
        return y;
    }
    var w = {
        valueAccessor: function(b) {
            return a(i)(b.value) ? a(h)(b.value) : b.value;
        }
    };

    function x(b) {
        var y = b.data,
            z = b.valueAccessor,
            A = b.dataKey,
            B = b.clockWise,
            C = b.id,
            D = b.textBreakAll,
            E = v(b, [
                'data',
                'valueAccessor',
                'dataKey',
                'clockWise',
                'id',
                'textBreakAll'
            ]);
        return y && y.length ? a(j).createElement(l.Layer, {
            className: 'recharts-label-list'
        }, y.map(function(b, y) {
            var F = a(g)(A) ? z(b, y) : (0, n.getValueByDataKey)(b && b.payload, A),
                G = a(g)(C) ? {} : {
                    id: ''.concat(C, '-').concat(y)
                };
            return a(j).createElement(k.Label, r({}, (0, o.filterProps)(b, !0), E, G, {
                parentViewBox: b.parentViewBox,
                index: y,
                value: F,
                textBreakAll: D,
                viewBox: k.Label.parseViewBox(a(g)(B) ? b : t(t({}, b), {}, {
                    clockWise: B
                })),
                key: 'label-'.concat(y)
            }));
        })) : null;
    }

    function y(b, c) {
        return b ? !0 === b ? a(j).createElement(x, {
            key: 'labelList-implicit',
            data: c
        }) : a(j).isValidElement(b) || a(f)(b) ? a(j).createElement(x, {
            key: 'labelList-implicit',
            data: c,
            content: b
        }) : a(e)(b) ? a(j).createElement(x, r({
            data: c
        }, b, {
            key: 'labelList-implicit'
        })) : null : null;
    }
    x.displayName = 'LabelList', x.renderCallByParent = function(a, b) {
        var z = !(i.length > 2 && void 0 !== i[2]) || i[2];
        if (!a || !a.children && z && !a.label)
            return null;
        var A = a.children,
            B = (0, m.findAllByType)(A, x.displayName).map(function(a, z) {
                return (0, j.cloneElement)(a, {
                    data: b,
                    key: 'labelList-'.concat(z)
                });
            });
        if (!z)
            return B;
        var C = y(a.label, b);
        return [C].concat(p(B));
    }, x.defaultProps = w;
}), d.register('P7cM9', function(a, b) {
    a.exports = function(a) {
        var e = null == a ? 0 : a.length;
        return e ? a[e - 1] : void 0;
    };
}), d.register('Mq9Yw', function(c, v) {
    b(c.exports, 'Label', function() {
        return I;
    });
    var e = d('AdPm00'),
        f = d('tax32'),
        g = d('oskvv'),
        h = d('uPP4W'),
        i = d('VAIs1'),
        j = d('c1LvE'),
        k = d('NvaHc'),
        l = d('u572v'),
        m = d('Ab/Ag'),
        n = d('5AxlR');

    function o(a) {
        return function(a) {
            if (Array.isArray(a))
                return p(a);
        }(a) || function(a) {
            if ('undefined' != typeof Symbol && Symbol.iterator in Object(a))
                return Array.from(a);
        }(a) || function(a, b) {
            if (!a)
                return;
            if ('string' == typeof a)
                return p(a, b);
            var p = Object.prototype.toString.call(a).slice(8, -1);
            'Object' === p && a.constructor && (p = a.constructor.name);
            if ('Map' === p || 'Set' === p)
                return Array.from(a);
            if ('Arguments' === p || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p))
                return p(a, b);
        }(a) || function() {
            throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }

    function p(a, b) {
        (null == b || b > a.length) && (b = a.length);
        for (var q = 0, r = new Array(b); q < b; q++)
            r[q] = a[q];
        return r;
    }

    function q(a, b) {
        var r = Object.keys(a);
        if (Object.getOwnPropertySymbols) {
            var s = Object.getOwnPropertySymbols(a);
            b && (s = s.filter(function(b) {
                return Object.getOwnPropertyDescriptor(a, b).enumerable;
            })), r.push.apply(r, s);
        }
        return r;
    }

    function r(a) {
        for (var s = 1; s < i.length; s++) {
            var t = null != i[s] ? i[s] : {};
            s % 2 ? q(Object(t), !0).forEach(function(s) {
                s(a, s, t[s]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(t)) : q(Object(t)).forEach(function(s) {
                Object.defineProperty(a, s, Object.getOwnPropertyDescriptor(t, s));
            });
        }
        return a;
    }

    function s(a, b, c) {
        return b in a ? Object.defineProperty(a, b, {
            value: c,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : a[b] = c, a;
    }

    function t() {
        return t = Object.assign || function(a) {
            for (var u = 1; u < i.length; u++) {
                var v = i[u];
                for (var w in v)
                    Object.prototype.hasOwnProperty.call(v, w) && (a[w] = v[w]);
            }
            return a;
        }, t.apply(this, i);
    }
    var u = function(b, c, d) {
        var v, w, x = b.position,
            y = b.viewBox,
            z = b.offset,
            A = b.className,
            B = C,
            D = B.cx,
            E = B.cy,
            F = B.innerRadius,
            G = B.outerRadius,
            H = B.startAngle,
            I = B.endAngle,
            J = B.clockWise,
            K = (F + G) / 2,
            L = function(a, b) {
                return (0, l.mathSign)(b - a) * Math.min(Math.abs(b - a), 360);
            }(H, I),
            M = L >= 0 ? 1 : -1;
        'insideStart' === x ? (v = H + M * z, w = J) : 'insideEnd' === x ? (v = I - M * z, w = !J) : 'end' === x && (v = I + M * z, w = J), w = L <= 0 ? w : !w;
        var N = (0, m.polarToCartesian)(D, E, K, v),
            O = (0, m.polarToCartesian)(D, E, K, v + 359 * (w ? 1 : -1)),
            P = 'M'.concat(N.x, ',').concat(N.y, '\n    A').concat(K, ',').concat(K, ',0,1,').concat(w ? 0 : 1, ',\n    ').concat(O.x, ',').concat(O.y),
            Q = a(g)(b.id) ? (0, l.uniqueId)('recharts-radial-line-') : b.id;
        return a(h).createElement('text', t({}, d, {
            dominantBaseline: 'central',
            className: a(i)('recharts-radial-bar-label', A)
        }), a(h).createElement('defs', null, a(h).createElement('path', {
            id: Q,
            d: P
        })), a(h).createElement('textPath', {
            xlinkHref: '#'.concat(Q)
        }, c));
    };

    function v(b) {
        var w, x = b.viewBox,
            y = b.position,
            z = b.value,
            A = b.children,
            B = b.content,
            C = b.className,
            D = void 0 === C ? '' : C,
            E = b.textBreakAll;
        if (!x || a(g)(z) && a(g)(A) && !(0, h.isValidElement)(B) && !a(f)(B))
            return null;
        if ((0, h.isValidElement)(B))
            return (0, h.cloneElement)(B, b);
        if (a(f)(B)) {
            if (w = (0, h.createElement)(B, b), (0, h.isValidElement)(w))
                return w;
        } else
            w = function(b) {
                var F = b.value,
                    G = b.formatter,
                    H = a(g)(b.children) ? F : b.children;
                return a(f)(G) ? G(H) : H;
            }(b);
        var F = function(a) {
                return (0, l.isNumber)(a.cx);
            }(x),
            G = (0, n.filterProps)(b, !0);
        if (F && ('insideStart' === y || 'insideEnd' === y || 'end' === y))
            return u(b, w, G);
        var H = F ? function(a) {
            var I = a.viewBox,
                J = a.offset,
                K = a.position,
                L = M,
                N = L.cx,
                O = L.cy,
                P = L.innerRadius,
                Q = L.outerRadius,
                R = (L.startAngle + L.endAngle) / 2;
            if ('outside' === K) {
                var S = (0, m.polarToCartesian)(N, O, Q + J, R),
                    T = S.x;
                return {
                    x: T,
                    y: S.y,
                    textAnchor: T >= N ? 'start' : 'end',
                    verticalAnchor: 'middle'
                };
            }
            if ('center' === K)
                return {
                    x: N,
                    y: O,
                    textAnchor: 'middle',
                    verticalAnchor: 'middle'
                };
            if ('centerTop' === K)
                return {
                    x: N,
                    y: O,
                    textAnchor: 'middle',
                    verticalAnchor: 'start'
                };
            if ('centerBottom' === K)
                return {
                    x: N,
                    y: O,
                    textAnchor: 'middle',
                    verticalAnchor: 'end'
                };
            var S = (P + Q) / 2,
                T = (0, m.polarToCartesian)(N, O, S, R);
            return {
                x: T.x,
                y: T.y,
                textAnchor: 'middle',
                verticalAnchor: 'middle'
            };
        }(b) : function(b) {
            var I = b.viewBox,
                J = b.parentViewBox,
                K = b.offset,
                L = b.position,
                M = N,
                O = M.x,
                P = M.y,
                Q = M.width,
                R = M.height,
                S = R >= 0 ? 1 : -1,
                T = S * K,
                U = S > 0 ? 'end' : 'start',
                V = S > 0 ? 'start' : 'end',
                W = Q >= 0 ? 1 : -1,
                X = W * K,
                Y = W > 0 ? 'end' : 'start',
                Z = W > 0 ? 'start' : 'end';
            if ('top' === L)
                return r(r({}, {
                    x: O + Q / 2,
                    y: P - S * K,
                    textAnchor: 'middle',
                    verticalAnchor: U
                }), J ? {
                    height: Math.max(P - J.y, 0),
                    width: Q
                } : {});
            if ('bottom' === L)
                return r(r({}, {
                    x: O + Q / 2,
                    y: P + R + T,
                    textAnchor: 'middle',
                    verticalAnchor: V
                }), J ? {
                    height: Math.max(J.y + J.height - (P + R), 0),
                    width: Q
                } : {});
            if ('left' === L) {
                var $ = {
                    x: O - X,
                    y: P + R / 2,
                    textAnchor: Y,
                    verticalAnchor: 'middle'
                };
                return r(r({}, $), J ? {
                    width: Math.max($.x - J.x, 0),
                    height: R
                } : {});
            }
            if ('right' === L) {
                var $ = {
                    x: O + Q + X,
                    y: P + R / 2,
                    textAnchor: Z,
                    verticalAnchor: 'middle'
                };
                return r(r({}, $), J ? {
                    width: Math.max(J.x + J.width - $.x, 0),
                    height: R
                } : {});
            }
            var $ = J ? {
                width: Q,
                height: R
            } : {};
            return 'insideLeft' === L ? r({
                x: O + X,
                y: P + R / 2,
                textAnchor: Z,
                verticalAnchor: 'middle'
            }, $) : 'insideRight' === L ? r({
                x: O + Q - X,
                y: P + R / 2,
                textAnchor: Y,
                verticalAnchor: 'middle'
            }, $) : 'insideTop' === L ? r({
                x: O + Q / 2,
                y: P + T,
                textAnchor: 'middle',
                verticalAnchor: V
            }, $) : 'insideBottom' === L ? r({
                x: O + Q / 2,
                y: P + R - T,
                textAnchor: 'middle',
                verticalAnchor: U
            }, $) : 'insideTopLeft' === L ? r({
                x: O + X,
                y: P + T,
                textAnchor: Z,
                verticalAnchor: V
            }, $) : 'insideTopRight' === L ? r({
                x: O + Q - X,
                y: P + T,
                textAnchor: Y,
                verticalAnchor: V
            }, $) : 'insideBottomLeft' === L ? r({
                x: O + X,
                y: P + R - T,
                textAnchor: Z,
                verticalAnchor: U
            }, $) : 'insideBottomRight' === L ? r({
                x: O + Q - X,
                y: P + R - T,
                textAnchor: Y,
                verticalAnchor: U
            }, $) : a(e)(L) && ((0, l.isNumber)(L.x) || (0, l.isPercent)(L.x)) && ((0, l.isNumber)(L.y) || (0, l.isPercent)(L.y)) ? r({
                x: O + (0, l.getPercentValue)(L.x, Q),
                y: P + (0, l.getPercentValue)(L.y, R),
                textAnchor: 'end',
                verticalAnchor: 'end'
            }, $) : r({
                x: O + Q / 2,
                y: P + R / 2,
                textAnchor: 'middle',
                verticalAnchor: 'middle'
            }, $);
        }(b);
        return a(h).createElement(j.Text, t({
            className: a(i)('recharts-label', D)
        }, G, H, {
            breakAll: E
        }), w);
    }
    v.displayName = 'Label', v.defaultProps = {
        offset: 5
    };
    var w = function(a) {
            var x = a.cx,
                y = a.cy,
                z = a.angle,
                A = a.startAngle,
                B = a.endAngle,
                C = a.r,
                D = a.radius,
                E = a.innerRadius,
                F = a.outerRadius,
                G = a.x,
                H = a.y,
                I = a.top,
                J = a.left,
                K = a.width,
                L = a.height,
                M = a.clockWise,
                N = a.labelViewBox;
            if (N)
                return N;
            if ((0, l.isNumber)(K) && (0, l.isNumber)(L)) {
                if ((0, l.isNumber)(G) && (0, l.isNumber)(H))
                    return {
                        x: G,
                        y: H,
                        width: K,
                        height: L
                    };
                if ((0, l.isNumber)(I) && (0, l.isNumber)(J))
                    return {
                        x: I,
                        y: J,
                        width: K,
                        height: L
                    };
            }
            return (0, l.isNumber)(G) && (0, l.isNumber)(H) ? {
                x: G,
                y: H,
                width: 0,
                height: 0
            } : (0, l.isNumber)(x) && (0, l.isNumber)(y) ? {
                cx: x,
                cy: y,
                startAngle: A || z || 0,
                endAngle: B || z || 0,
                innerRadius: E || 0,
                outerRadius: F || D || C || 0,
                clockWise: M
            } : a.viewBox ? a.viewBox : {};
        },
        x = function(b, c) {
            return b ? !0 === b ? a(h).createElement(v, {
                key: 'label-implicit',
                viewBox: c
            }) : (0, l.isNumOrStr)(b) ? a(h).createElement(v, {
                key: 'label-implicit',
                viewBox: c,
                value: b
            }) : (0, h.isValidElement)(b) ? b.type === v ? (0, h.cloneElement)(b, {
                key: 'label-implicit',
                viewBox: c
            }) : a(h).createElement(v, {
                key: 'label-implicit',
                content: b,
                viewBox: c
            }) : a(f)(b) ? a(h).createElement(v, {
                key: 'label-implicit',
                content: b,
                viewBox: c
            }) : a(e)(b) ? a(h).createElement(v, t({
                viewBox: c
            }, b, {
                key: 'label-implicit'
            })) : null : null;
        };
    v.parseViewBox = w, v.renderCallByParent = function(a, b) {
        var y = !(i.length > 2 && void 0 !== i[2]) || i[2];
        if (!a || !a.children && y && !a.label)
            return null;
        var z = a.children,
            A = w(a),
            B = (0, k.findAllByType)(z, v.displayName).map(function(a, y) {
                return (0, h.cloneElement)(a, {
                    viewBox: b || A,
                    key: 'label-'.concat(y)
                });
            });
        if (!y)
            return B;
        var C = x(a.label, b || A);
        return [C].concat(o(B));
    };
}), d.register('c1LvE', function(c, r) {
    b(c.exports, 'Text', function() {
        return E;
    });
    var e = d('oskvv'),
        f = d('uPP4W'),
        g = d('zVw3t'),
        h = d('VAIs1'),
        i = d('u572v'),
        j = d('GoeDC'),
        k = d('5AxlR'),
        l = d('xgP3B');

    function m(a) {
        return m = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(a) {
            return typeof a;
        } : function(a) {
            return a && 'function' == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? 'symbol' : typeof a;
        }, m(a);
    }

    function n() {
        return n = Object.assign || function(a) {
            for (var o = 1; o < i.length; o++) {
                var p = i[o];
                for (var q in p)
                    Object.prototype.hasOwnProperty.call(p, q) && (a[q] = p[q]);
            }
            return a;
        }, n.apply(this, i);
    }

    function o(a, b) {
        if (null == a)
            return {};
        var p, q, r = function(a, b) {
            if (null == a)
                return {};
            var s, t, u = {},
                v = Object.keys(a);
            for (t = 0; t < v.length; t++)
                s = v[t], b.indexOf(s) >= 0 || (u[s] = a[s]);
            return u;
        }(a, b);
        if (Object.getOwnPropertySymbols) {
            var s = Object.getOwnPropertySymbols(a);
            for (q = 0; q < s.length; q++)
                p = s[q], b.indexOf(p) >= 0 || Object.prototype.propertyIsEnumerable.call(a, p) && (r[p] = a[p]);
        }
        return r;
    }

    function p(a, b) {
        if (!(a instanceof b))
            throw new TypeError('Cannot call a class as a function');
    }

    function q(a, b) {
        for (var r = 0; r < b.length; r++) {
            var s = b[r];
            s.enumerable = s.enumerable || !1, s.configurable = !0, 'value' in s && (s.writable = !0), Object.defineProperty(a, s.key, s);
        }
    }

    function r(a, b) {
        return r = Object.setPrototypeOf || function(a, b) {
            return a.__proto__ = b, a;
        }, r(a, b);
    }

    function s(a) {
        var t = function() {
            if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ('function' == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
            } catch (a) {
                return !1;
            }
        }();
        return function() {
            var u, v = u(a);
            if (t) {
                var w = u(this).constructor;
                u = Reflect.construct(v, i, w);
            } else
                u = v.apply(this, i);
            return t(this, u);
        };
    }

    function t(a, b) {
        return !b || 'object' !== m(b) && 'function' != typeof b ? function(a) {
            if (void 0 === a)
                throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return a;
        }(a) : b;
    }

    function u(a) {
        return u = Object.setPrototypeOf ? Object.getPrototypeOf : function(a) {
            return a.__proto__ || Object.getPrototypeOf(a);
        }, u(a);
    }

    function v(a, b) {
        return function(a) {
            if (Array.isArray(a))
                return a;
        }(a) || function(a, b) {
            if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(a)))
                return;
            var w = [],
                x = !0,
                y = !1,
                z = void 0;
            try {
                for (var A, B = a[Symbol.iterator](); !(x = (A = B.next()).done) && (w.push(A.value), !b || w.length !== b); x = !0);
            } catch (a) {
                y = !0, z = a;
            } finally {
                try {
                    x || null == g.return || g.return();
                } finally {
                    if (y)
                        throw z;
                }
            }
            return w;
        }(a, b) || function(a, b) {
            if (!a)
                return;
            if ('string' == typeof a)
                return w(a, b);
            var w = Object.prototype.toString.call(a).slice(8, -1);
            'Object' === w && a.constructor && (w = a.constructor.name);
            if ('Map' === w || 'Set' === w)
                return Array.from(a);
            if ('Arguments' === w || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(w))
                return w(a, b);
        }(a, b) || function() {
            throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }

    function w(a, b) {
        (null == b || b > a.length) && (b = a.length);
        for (var x = 0, y = new Array(b); x < b; x++)
            y[x] = a[x];
        return y;
    }

    function x(a, b) {
        var y = Object.keys(a);
        if (Object.getOwnPropertySymbols) {
            var z = Object.getOwnPropertySymbols(a);
            b && (z = z.filter(function(b) {
                return Object.getOwnPropertyDescriptor(a, b).enumerable;
            })), y.push.apply(y, z);
        }
        return y;
    }

    function y(a) {
        for (var z = 1; z < i.length; z++) {
            var A = null != i[z] ? i[z] : {};
            z % 2 ? x(Object(A), !0).forEach(function(z) {
                z(a, z, A[z]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(A)) : x(Object(A)).forEach(function(z) {
                Object.defineProperty(a, z, Object.getOwnPropertyDescriptor(A, z));
            });
        }
        return a;
    }

    function z(a, b, c) {
        return b in a ? Object.defineProperty(a, b, {
            value: c,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : a[b] = c, a;
    }
    var A = /[ \f\n\r\t\v\u2028\u2029]+/,
        B = function(b) {
            try {
                var C = [];
                return a(e)(b.children) || (C = b.breakAll ? b.children.toString().split('') : b.children.toString().split(A)), {
                    wordsWithComputedWidth: C.map(function(a) {
                        return {
                            word: a,
                            width: (0, l.getStringSize)(a, b.style).width
                        };
                    }),
                    spaceWidth: b.breakAll ? 0 : (0, l.getStringSize)('\xA0', b.style).width
                };
            } catch (a) {
                return null;
            }
        },
        C = function(b) {
            return [{
                words: a(e)(b) ? [] : b.toString().split(A)
            }];
        },
        D = function(a, b) {
            if ((a.width || a.scaleToFit) && !j.Global.isSsr && b) {
                var E = B(a);
                return E ? function(a, b, E, d, M) {
                    var F = (0, i.isNumber)(a.maxLines),
                        G = a.children,
                        H = function() {
                            return (i.length > 0 && void 0 !== i[0] ? i[0] : []).reduce(function(a, b) {
                                var I = b.word,
                                    J = b.width,
                                    K = a[a.length - 1];
                                if (K && (null == d || M || K.width + J + E < d))
                                    K.words.push(I), K.width += J + E;
                                else {
                                    var L = {
                                        words: [I],
                                        width: J
                                    };
                                    a.push(L);
                                }
                                return a;
                            }, []);
                        },
                        I = H(b);
                    if (!F)
                        return I;
                    for (var J, K = function(b) {
                            var L = G.slice(0, b),
                                M = B(y(y({}, a), {}, {
                                    children: L + '\u2026'
                                })).wordsWithComputedWidth,
                                N = H(M),
                                O = N.length > a.maxLines || function(a) {
                                    return a.reduce(function(a, b) {
                                        return a.width > b.width ? a : b;
                                    });
                                }(N).width > d;
                            return [
                                O,
                                N
                            ];
                        }, L = 0, M = G.length - 1, N = 0; L <= M && N <= G.length - 1;) {
                        var O = Math.floor((L + M) / 2),
                            P = v(K(O - 1), 2),
                            Q = P[0],
                            R = P[1],
                            S = v(K(O), 1)[0];
                        if (Q || S || (L = O + 1), Q && S && (M = O - 1), !Q && S) {
                            J = R;
                            break;
                        }
                        N++;
                    }
                    return J || I;
                }(a, E.wordsWithComputedWidth, E.spaceWidth, a.width, a.scaleToFit) : C(a.children);
            }
            return C(a.children);
        },
        E = function(b) {
            ! function(a, b) {
                if ('function' != typeof b && null !== b)
                    throw new TypeError('Super expression must either be null or a function');
                a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                        value: a,
                        writable: !0,
                        configurable: !0
                    }
                }), b && r(a, b);
            }(j, b);
            var F, G, H, I = s(j);

            function J() {
                var K;
                p(this, J);
                for (var L = i.length, M = new Array(L), N = 0; N < L; N++)
                    M[N] = i[N];
                return (K = I.call.apply(I, [this].concat(M))).state = {}, K;
            }
            return F = J, H = [{
                key: 'getDerivedStateFromProps',
                value: function(a, b) {
                    if (a.width !== b.prevWidth || a.scaleToFit !== b.prevScaleToFit || a.children !== b.prevChildren || a.style !== b.prevStyle || a.breakAll !== b.prevBreakAll) {
                        var K = a.children !== b.prevChildren || a.style !== b.prevStyle || a.breakAll !== b.prevBreakAll;
                        return {
                            prevWidth: a.width,
                            prevScaleToFit: a.scaleToFit,
                            prevChildren: a.children,
                            prevStyle: a.style,
                            wordsByLines: D(a, K)
                        };
                    }
                    return null;
                }
            }], (G = [{
                key: 'render',
                value: function() {
                    var K = this.props,
                        L = K.dx,
                        M = K.dy,
                        N = K.textAnchor,
                        O = K.verticalAnchor,
                        P = K.scaleToFit,
                        Q = K.angle,
                        R = K.lineHeight,
                        S = K.capHeight,
                        T = K.className,
                        U = K.breakAll,
                        V = o(K, [
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
                        W = this.state.wordsByLines;
                    if (!(0, i.isNumOrStr)(V.x) || !(0, i.isNumOrStr)(V.y))
                        return null;
                    var X, Y = V.x + ((0, i.isNumber)(L) ? L : 0),
                        Z = V.y + ((0, i.isNumber)(M) ? M : 0);
                    switch (O) {
                        case 'start':
                            X = a(g)('calc('.concat(S, ')'));
                            break;
                        case 'middle':
                            X = a(g)('calc('.concat((W.length - 1) / 2, ' * -').concat(R, ' + (').concat(S, ' / 2))'));
                            break;
                        default:
                            X = a(g)('calc('.concat(W.length - 1, ' * -').concat(R, ')'));
                    }
                    var $ = [];
                    if (P) {
                        var _ = W[0].width,
                            ab = this.props.width;
                        $.push('scale('.concat(((0, i.isNumber)(ab) ? ab / _ : 1) / _, ')'));
                    }
                    return Q && $.push('rotate('.concat(Q, ', ').concat(Y, ', ').concat(Z, ')')), $.length && (V.transform = $.join(' ')), a(f).createElement('text', n({}, (0, k.filterProps)(V, !0), {
                        x: Y,
                        y: Z,
                        className: a(h)('recharts-text', T),
                        textAnchor: N
                    }), W.map(function(K, L) {
                        return a(f).createElement('tspan', {
                            x: Y,
                            dy: 0 === L ? X : R,
                            key: L
                        }, K.words.join(U ? '' : ' '));
                    }));
                }
            }]) && q(F.prototype, G), H && q(F, H), J;
        }(f.Component);
    E.defaultProps = {
        x: 0,
        y: 0,
        lineHeight: '1em',
        capHeight: '0.71em',
        scaleToFit: !1,
        textAnchor: 'start',
        verticalAnchor: 'end'
    };
}), d.register('zVw3t', function(a, b) {
    Object.defineProperty(a.exports, '__esModule', {
        value: !0
    });
    var e = i(d('BpTQ5')),
        f = d('0izGg'),
        g = i(d('xNrN3')),
        h = i(d('+Z3dh'));

    function i(a) {
        return a && a.__esModule ? a : {
            default: a
        };
    }
    var j = /((?:\-[a-z]+\-)?calc)/;
    a.exports.default = function(a) {
        var k = i.length > 1 && void 0 !== i[1] ? i[1] : 5;
        return (0, e.default)(a).walk(function(a) {
            if ('function' === a.type && j.test(a.value)) {
                var l = e.default.stringify(a.nodes);
                if (!(l.indexOf('constant') >= 0 || l.indexOf('env') >= 0)) {
                    var m = f.parser.parse(l),
                        n = (0, g.default)(m, k);
                    a.type = 'word', a.value = (0, h.default)(a.value, n, k);
                }
            }
        }, !0).toString();
    }, a.exports = a.exports.default;
}), d.register('BpTQ5', function(a, b) {
    var e = d('X8YLj'),
        f = d('xfKMO'),
        g = d('vBO3Y');

    function h(a) {
        return this instanceof h ? (this.nodes = e(a), this) : new h(a);
    }
    h.prototype.toString = function() {
        return Array.isArray(this.nodes) ? g(this.nodes) : '';
    }, h.prototype.walk = function(a, b) {
        return f(this.nodes, a, b), this;
    }, h.unit = d('e8fhx'), h.walk = f, h.stringify = g, a.exports = h;
}), d.register('X8YLj', function(a, b) {
    var e = '('.charCodeAt(0),
        f = ')'.charCodeAt(0),
        g = '\''.charCodeAt(0),
        h = '"'.charCodeAt(0),
        i = '\\'.charCodeAt(0),
        j = '/'.charCodeAt(0),
        k = ','.charCodeAt(0),
        l = ':'.charCodeAt(0),
        m = '*'.charCodeAt(0);
    a.exports = function(a) {
        for (var n, o, p, q, r, s, t, u, v = [], w = x, y = 0, z = w.charCodeAt(y), A = w.length, B = [{
                nodes: v
            }], C = 0, D = '', E = '', F = ''; y < A;)
            if (z <= 32) {
                n = y;
                do {
                    n += 1, z = w.charCodeAt(n);
                } while (z <= 32);
                q = w.slice(y, n), p = v[v.length - 1], z === f && C ? F = q : p && 'div' === p.type ? p.after = q : z === k || z === l || z === j && w.charCodeAt(n + 1) !== m ? E = q : v.push({
                    type: 'space',
                    sourceIndex: y,
                    value: q
                }), y = n;
            } else if (z === g || z === h) {
            n = y, q = {
                type: 'string',
                sourceIndex: y,
                quote: o = z === g ? '\'' : '"'
            };
            do {
                if (r = !1, ~(n = w.indexOf(o, n + 1)))
                    for (s = n; w.charCodeAt(s - 1) === i;)
                        s -= 1, r = !r;
                else
                    n = (w += o).length - 1, q.unclosed = !0;
            } while (r);
            q.value = w.slice(y + 1, n), v.push(q), y = n + 1, z = w.charCodeAt(y);
        } else if (z === j && w.charCodeAt(y + 1) === m)
            q = {
                type: 'comment',
                sourceIndex: y
            }, -1 === (n = w.indexOf('*/', y)) && (q.unclosed = !0, n = w.length), q.value = w.slice(y + 2, n), v.push(q), y = n + 2, z = w.charCodeAt(y);
        else if (z === j || z === k || z === l)
            q = w[y], v.push({
                type: 'div',
                sourceIndex: y - E.length,
                value: q,
                before: E,
                after: ''
            }), E = '', y += 1, z = w.charCodeAt(y);
        else if (e === z) {
            n = y;
            do {
                n += 1, z = w.charCodeAt(n);
            } while (z <= 32);
            if (q = {
                    type: 'function',
                    sourceIndex: y - D.length,
                    value: D,
                    before: w.slice(y + 1, n)
                }, y = n, 'url' === D && z !== g && z !== h) {
                n -= 1;
                do {
                    if (r = !1, ~(n = w.indexOf(')', n + 1)))
                        for (s = n; w.charCodeAt(s - 1) === i;)
                            s -= 1, r = !r;
                    else
                        n = (w += ')').length - 1, q.unclosed = !0;
                } while (r);
                t = n;
                do {
                    t -= 1, z = w.charCodeAt(t);
                } while (z <= 32);
                q.nodes = y !== t + 1 ? [{
                    type: 'word',
                    sourceIndex: y,
                    value: w.slice(y, t + 1)
                }] : [], q.unclosed && t + 1 !== n ? (q.after = '', q.nodes.push({
                    type: 'space',
                    sourceIndex: t + 1,
                    value: w.slice(t + 1, n)
                })) : q.after = w.slice(t + 1, n), y = n + 1, z = w.charCodeAt(y), v.push(q);
            } else
                C += 1, q.after = '', v.push(q), B.push(q), v = q.nodes = [], u = q;
            D = '';
        } else if (f === z && C)
            y += 1, z = w.charCodeAt(y), u.after = F, F = '', C -= 1, B.pop(), v = (u = B[C]).nodes;
        else {
            n = y;
            do {
                z === i && (n += 1), n += 1, z = w.charCodeAt(n);
            } while (n < A && !(z <= 32 || z === g || z === h || z === k || z === l || z === j || z === e || z === f && C));
            q = w.slice(y, n), e === z ? D = q : v.push({
                type: 'word',
                sourceIndex: y,
                value: q
            }), y = n;
        }
        for (y = B.length - 1; y; y -= 1)
            B[y].unclosed = !0;
        return B[0].nodes;
    };
}), d.register('xfKMO', function(a, b) {
    a.exports = function a(b, c, d) {
        var e, f, g, h;
        for (e = 0, f = b.length; e < f; e += 1)
            g = b[e], d || (h = c(g, e, b)), !1 !== h && 'function' === g.type && Array.isArray(g.nodes) && a(g.nodes, c, d), d && c(g, e, b);
    };
}), d.register('vBO3Y', function(a, b) {
    function e(a, b) {
        var f, g, h = a.type,
            i = a.value;
        return b && void 0 !== (g = b(a)) ? g : 'word' === h || 'space' === h ? i : 'string' === h ? (f = a.quote || '') + i + (a.unclosed ? '' : f) : 'comment' === h ? '/*' + i + (a.unclosed ? '' : '*/') : 'div' === h ? (a.before || '') + i + (a.after || '') : Array.isArray(a.nodes) ? (f = d(a.nodes), 'function' !== h ? f : i + '(' + (a.before || '') + f + (a.after || '') + (a.unclosed ? '' : ')')) : i;
    }

    function f(a, b) {
        var g, h;
        if (Array.isArray(a)) {
            for (g = '', h = a.length - 1; ~h; h -= 1)
                g = e(a[h], b) + g;
            return g;
        }
        return e(a, b);
    }
    a.exports = f;
}), d.register('e8fhx', function(a, b) {
    var e = '-'.charCodeAt(0),
        f = '+'.charCodeAt(0),
        g = '.'.charCodeAt(0),
        h = 'e'.charCodeAt(0),
        i = 'E'.charCodeAt(0);
    a.exports = function(a) {
        for (var j, k = 0, l = a.length, m = !1, n = -1, o = !1; k < l;) {
            if ((j = a.charCodeAt(k)) >= 48 && j <= 57)
                o = !0;
            else if (j === h || j === i) {
                if (n > -1)
                    break;
                n = k;
            } else if (j === g) {
                if (m)
                    break;
                m = !0;
            } else {
                if (j !== f && j !== e)
                    break;
                if (0 !== k)
                    break;
            }
            k += 1;
        }
        return n + 1 === k && k--, !!o && {
            number: a.slice(0, k),
            unit: a.slice(k)
        };
    };
}), d.register('0izGg', function(a, c) {
    var e;
    b(a.exports, 'parser', function() {
        return e;
    }, function(a) {
        return e = a;
    });
    var f = function() {
        function g(g, b) {
            var h;
            if (Object.defineProperty(this, 'name', {
                    enumerable: !1,
                    writable: !1,
                    value: 'JisonParserError'
                }), null == g && (g = '???'), Object.defineProperty(this, 'message', {
                    enumerable: !1,
                    writable: !0,
                    value: g
                }), this.hash = b, b && b.exception instanceof Error) {
                var i = b.exception;
                this.message = i.message || g, h = i.stack;
            }
            h || (Error.hasOwnProperty('captureStackTrace') ? Error.captureStackTrace(this, this.constructor) : h = new Error(g).stack), h && Object.defineProperty(this, 'stack', {
                enumerable: !1,
                writable: !1,
                value: h
            });
        }

        function h(g, h, c) {
            c = c || 0;
            for (var i = 0; i < h; i++)
                this.push(g), g += c;
        }

        function i(g, h) {
            for (h += g = this.length - g; g < h; g++)
                this.push(this[g]);
        }

        function j(g) {
            for (var k = [], l = 0, m = g.length; l < m; l++) {
                var n = g[l];
                'function' == typeof n ? (l++, n.apply(k, g[l])) : k.push(n);
            }
            return k;
        }
        'function' == typeof Object.setPrototypeOf ? Object.setPrototypeOf(g.prototype, Error.prototype) : g.prototype = Object.create(Error.prototype), g.prototype.constructor = g, g.prototype.name = 'JisonParserError';
        var k = {
            trace: function() {},
            JisonParserError: g,
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
            quoteName: function(g) {
                return '"' + g + '"';
            },
            getSymbolName: function(g) {
                if (this.terminals_[g])
                    return this.terminals_[g];
                var l = this.symbols_;
                for (var m in l)
                    if (l[m] === g)
                        return m;
                return null;
            },
            describeSymbol: function(g) {
                if (g !== this.EOF && this.terminal_descriptions_ && this.terminal_descriptions_[g])
                    return this.terminal_descriptions_[g];
                if (g === this.EOF)
                    return 'end of input';
                var l = this.getSymbolName(g);
                return l ? this.quoteName(l) : null;
            },
            collect_expected_token_set: function(g, h) {
                var l = this.TERROR,
                    m = [],
                    n = {};
                if (!h && this.state_descriptions_ && this.state_descriptions_[g])
                    return [this.state_descriptions_[g]];
                for (var o in this.table[g])
                    if ((o = +o) !== l) {
                        var p = h ? o : this.describeSymbol(o);
                        p && !n[p] && (m.push(p), n[p] = !0);
                    }
                return m;
            },
            productions_: function(g) {
                for (var l = [], m = g.pop, n = g.rule, o = 0, p = m.length; o < p; o++)
                    l.push([
                        m[o],
                        n[o]
                    ]);
                return l;
            }({
                pop: j([
                    29,
                    h,
                    [
                        30,
                        10
                    ],
                    31,
                    31,
                    32,
                    32,
                    h,
                    [
                        33,
                        15
                    ]
                ]),
                rule: j([
                    2,
                    h,
                    [
                        3,
                        5
                    ],
                    4,
                    7,
                    h,
                    [
                        1,
                        4
                    ],
                    2,
                    4,
                    6,
                    h,
                    [
                        1,
                        14
                    ],
                    2
                ])
            }),
            performAction: function(g, h, i) {
                var l = this.yy;
                l.parser, l.lexer;
                switch (g) {
                    case 0:
                    case 6:
                        this.$ = i[h - 1];
                        break;
                    case 1:
                        return this.$ = i[h - 1], i[h - 1];
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        this.$ = {
                            type: 'MathExpression',
                            operator: i[h - 1],
                            left: i[h - 2],
                            right: i[h]
                        };
                        break;
                    case 7:
                        this.$ = {
                            type: 'Calc',
                            value: i[h - 1]
                        };
                        break;
                    case 8:
                        this.$ = {
                            type: 'Calc',
                            value: i[h - 1],
                            prefix: i[h - 5]
                        };
                        break;
                    case 9:
                    case 10:
                    case 11:
                        this.$ = i[h];
                        break;
                    case 12:
                        this.$ = {
                            type: 'Value',
                            value: parseFloat(i[h])
                        };
                        break;
                    case 13:
                        this.$ = {
                            type: 'Value',
                            value: -1 * parseFloat(i[h])
                        };
                        break;
                    case 14:
                        this.$ = {
                            type: 'CssVariable',
                            value: i[h - 1]
                        };
                        break;
                    case 15:
                        this.$ = {
                            type: 'CssVariable',
                            value: i[h - 3],
                            fallback: i[h - 1]
                        };
                        break;
                    case 16:
                        this.$ = {
                            type: 'LengthValue',
                            value: parseFloat(i[h]),
                            unit: /[a-z]+/.exec(i[h])[0]
                        };
                        break;
                    case 17:
                        this.$ = {
                            type: 'AngleValue',
                            value: parseFloat(i[h]),
                            unit: /[a-z]+/.exec(i[h])[0]
                        };
                        break;
                    case 18:
                        this.$ = {
                            type: 'TimeValue',
                            value: parseFloat(i[h]),
                            unit: /[a-z]+/.exec(i[h])[0]
                        };
                        break;
                    case 19:
                        this.$ = {
                            type: 'FrequencyValue',
                            value: parseFloat(i[h]),
                            unit: /[a-z]+/.exec(i[h])[0]
                        };
                        break;
                    case 20:
                        this.$ = {
                            type: 'ResolutionValue',
                            value: parseFloat(i[h]),
                            unit: /[a-z]+/.exec(i[h])[0]
                        };
                        break;
                    case 21:
                        this.$ = {
                            type: 'EmValue',
                            value: parseFloat(i[h]),
                            unit: 'em'
                        };
                        break;
                    case 22:
                        this.$ = {
                            type: 'ExValue',
                            value: parseFloat(i[h]),
                            unit: 'ex'
                        };
                        break;
                    case 23:
                        this.$ = {
                            type: 'ChValue',
                            value: parseFloat(i[h]),
                            unit: 'ch'
                        };
                        break;
                    case 24:
                        this.$ = {
                            type: 'RemValue',
                            value: parseFloat(i[h]),
                            unit: 'rem'
                        };
                        break;
                    case 25:
                        this.$ = {
                            type: 'VhValue',
                            value: parseFloat(i[h]),
                            unit: 'vh'
                        };
                        break;
                    case 26:
                        this.$ = {
                            type: 'VwValue',
                            value: parseFloat(i[h]),
                            unit: 'vw'
                        };
                        break;
                    case 27:
                        this.$ = {
                            type: 'VminValue',
                            value: parseFloat(i[h]),
                            unit: 'vmin'
                        };
                        break;
                    case 28:
                        this.$ = {
                            type: 'VmaxValue',
                            value: parseFloat(i[h]),
                            unit: 'vmax'
                        };
                        break;
                    case 29:
                        this.$ = {
                            type: 'PercentageValue',
                            value: parseFloat(i[h]),
                            unit: '%'
                        };
                        break;
                    case 30:
                        var m = i[h];
                        m.value *= -1, this.$ = m;
                }
            },
            table: function(g) {
                for (var l = [], m = g.len, n = g.symbol, o = g.type, p = g.state, q = g.mode, r = g.goto, s = 0, t = m.length; s < t; s++) {
                    for (var u = m[s], v = {}, w = 0; w < u; w++) {
                        var x = n.shift();
                        switch (o.shift()) {
                            case 2:
                                v[x] = [
                                    q.shift(),
                                    r.shift()
                                ];
                                break;
                            case 0:
                                v[x] = p.shift();
                                break;
                            default:
                                v[x] = [3];
                        }
                    }
                    l.push(v);
                }
                return l;
            }({
                len: j([
                    24,
                    1,
                    5,
                    23,
                    1,
                    18,
                    h,
                    [
                        0,
                        3
                    ],
                    1,
                    h,
                    [
                        0,
                        16
                    ],
                    h,
                    [
                        23,
                        4
                    ],
                    i,
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
                    h,
                    [
                        0,
                        3
                    ],
                    5,
                    1,
                    2,
                    i,
                    [
                        37,
                        3
                    ],
                    i,
                    [
                        20,
                        3
                    ],
                    5,
                    0,
                    0
                ]),
                symbol: j([
                    4,
                    7,
                    9,
                    11,
                    12,
                    h,
                    [
                        15,
                        19,
                        1
                    ],
                    1,
                    1,
                    h,
                    [
                        3,
                        4,
                        1
                    ],
                    i,
                    [
                        30,
                        19
                    ],
                    i,
                    [
                        29,
                        4
                    ],
                    7,
                    4,
                    10,
                    11,
                    i,
                    [
                        22,
                        14
                    ],
                    i,
                    [
                        19,
                        3
                    ],
                    i,
                    [
                        43,
                        22
                    ],
                    i,
                    [
                        23,
                        69
                    ],
                    i,
                    [
                        139,
                        4
                    ],
                    8,
                    i,
                    [
                        51,
                        24
                    ],
                    4,
                    i,
                    [
                        138,
                        15
                    ],
                    13,
                    i,
                    [
                        186,
                        5
                    ],
                    8,
                    i,
                    [
                        6,
                        6
                    ],
                    i,
                    [
                        5,
                        5
                    ],
                    9,
                    8,
                    14,
                    i,
                    [
                        159,
                        47
                    ],
                    i,
                    [
                        60,
                        10
                    ]
                ]),
                type: j([
                    h,
                    [
                        2,
                        19
                    ],
                    h,
                    [
                        0,
                        5
                    ],
                    1,
                    h,
                    [
                        2,
                        24
                    ],
                    h,
                    [
                        0,
                        4
                    ],
                    i,
                    [
                        22,
                        19
                    ],
                    i,
                    [
                        43,
                        42
                    ],
                    i,
                    [
                        23,
                        70
                    ],
                    i,
                    [
                        28,
                        25
                    ],
                    i,
                    [
                        45,
                        25
                    ],
                    i,
                    [
                        113,
                        54
                    ]
                ]),
                state: j([
                    1,
                    2,
                    8,
                    6,
                    7,
                    30,
                    i,
                    [
                        4,
                        3
                    ],
                    33,
                    37,
                    i,
                    [
                        5,
                        3
                    ],
                    38,
                    i,
                    [
                        4,
                        3
                    ],
                    39,
                    i,
                    [
                        4,
                        3
                    ],
                    40,
                    i,
                    [
                        4,
                        3
                    ],
                    42,
                    i,
                    [
                        21,
                        4
                    ],
                    50,
                    i,
                    [
                        5,
                        3
                    ],
                    51,
                    i,
                    [
                        4,
                        3
                    ]
                ]),
                mode: j([
                    h,
                    [
                        1,
                        179
                    ],
                    h,
                    [
                        2,
                        3
                    ],
                    i,
                    [
                        5,
                        5
                    ],
                    i,
                    [
                        6,
                        4
                    ],
                    h,
                    [
                        1,
                        57
                    ]
                ]),
                goto: j([
                    5,
                    3,
                    4,
                    24,
                    h,
                    [
                        9,
                        15,
                        1
                    ],
                    h,
                    [
                        25,
                        5,
                        1
                    ],
                    i,
                    [
                        24,
                        19
                    ],
                    31,
                    35,
                    32,
                    34,
                    i,
                    [
                        18,
                        14
                    ],
                    36,
                    i,
                    [
                        38,
                        19
                    ],
                    i,
                    [
                        19,
                        57
                    ],
                    i,
                    [
                        118,
                        4
                    ],
                    41,
                    i,
                    [
                        24,
                        19
                    ],
                    43,
                    35,
                    i,
                    [
                        16,
                        14
                    ],
                    44,
                    h,
                    [
                        2,
                        3
                    ],
                    28,
                    29,
                    2,
                    h,
                    [
                        3,
                        3
                    ],
                    28,
                    29,
                    3,
                    i,
                    [
                        53,
                        4
                    ],
                    h,
                    [
                        45,
                        5,
                        1
                    ],
                    i,
                    [
                        100,
                        42
                    ],
                    52,
                    i,
                    [
                        5,
                        4
                    ],
                    53
                ])
            }),
            defaultActions: function(g) {
                for (var l = {}, m = g.idx, n = g.goto, o = 0, p = m.length; o < p; o++) {
                    l[m[o]] = n[o];
                }
                return l;
            }({
                idx: j([
                    6,
                    7,
                    8,
                    h,
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
                goto: j([
                    9,
                    10,
                    11,
                    h,
                    [
                        16,
                        14,
                        1
                    ],
                    12,
                    1,
                    30,
                    13,
                    h,
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
            parseError: function(g, h, i) {
                if (!h.recoverable)
                    throw 'function' == typeof this.trace && this.trace(g), i || (i = this.JisonParserError), new i(g, h);
                'function' == typeof this.trace && this.trace(g), h.destroy();
            },
            parse: function(g) {
                var l, m = this,
                    n = new Array(128),
                    o = new Array(128),
                    p = new Array(128),
                    q = this.table,
                    r = 0,
                    s = 0,
                    t = (this.TERROR, this.EOF),
                    u = (this.options.errorRecoveryTokenDiscardCount, [
                        0,
                        54
                    ]);
                l = this.__lexer__ ? this.__lexer__ : this.__lexer__ = Object.create(this.lexer);
                var v = {
                    parseError: void 0,
                    quoteName: void 0,
                    lexer: void 0,
                    parser: void 0,
                    pre_parse: void 0,
                    post_parse: void 0,
                    pre_lex: void 0,
                    post_lex: void 0
                };

                function w() {
                    var x = l.fastLex();
                    return 'number' != typeof x && (x = m.symbols_[x] || x), x || t;
                }
                'function' != typeof assert || assert, this.yyGetSharedState = function() {
                        return v;
                    },
                    function(g, l) {
                        for (var x in l)
                            void 0 === g[x] && Object.prototype.hasOwnProperty.call(l, x) && (g[x] = l[x]);
                    }(v, this.yy), v.lexer = l, v.parser = this, 'function' == typeof v.parseError ? this.parseError = function(g, l, m) {
                        return m || (m = this.JisonParserError), v.parseError.call(this, g, l, m);
                    } : this.parseError = this.originalParseError, 'function' == typeof v.quoteName ? this.quoteName = function(g) {
                        return v.quoteName.call(this, g);
                    } : this.quoteName = this.originalQuoteName, this.cleanupAfterParse = function(g, m, q) {
                        var x, y;
                        m && ((v.post_parse || this.post_parse) && (y = this.constructParseErrorInfo(null, null, null, !1)), v.post_parse && void 0 !== (x = v.post_parse.call(this, v, g, y)) && (g = x), this.post_parse && void 0 !== (x = this.post_parse.call(this, v, g, y)) && (g = x), y && y.destroy && y.destroy());
                        if (this.__reentrant_call_depth > 1)
                            return g;
                        if (l.cleanupAfterLex && l.cleanupAfterLex(q), v && (v.lexer = void 0, v.parser = void 0, l.yy === v && (l.yy = void 0)), v = void 0, this.parseError = this.originalParseError, this.quoteName = this.originalQuoteName, n.length = 0, o.length = 0, p.length = 0, r = 0, !q) {
                            for (var z = this.__error_infos.length - 1; z >= 0; z--) {
                                var A = this.__error_infos[z];
                                A && 'function' == typeof A.destroy && A.destroy();
                            }
                            this.__error_infos.length = 0;
                        }
                        return g;
                    }, this.constructParseErrorInfo = function(g, m, q, t) {
                        var x = {
                            errStr: g,
                            exception: m,
                            text: l.match,
                            value: l.yytext,
                            token: this.describeSymbol(s) || s,
                            token_id: s,
                            line: l.yylineno,
                            expected: q,
                            recoverable: t,
                            state: x,
                            action: y,
                            new_state: E,
                            symbol_stack: n,
                            state_stack: o,
                            value_stack: p,
                            stack_pointer: r,
                            yy: v,
                            lexer: l,
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
                var x, y, z, A, B, C, D, E, F = function() {
                        var G = l.lex();
                        return 'number' != typeof G && (G = m.symbols_[G] || G), G || t;
                    },
                    G = {
                        $: !0,
                        _$: void 0,
                        yy: v
                    },
                    H = !1;
                try {
                    if (this.__reentrant_call_depth++, l.setInput(g, v), 'function' == typeof l.canIUse)
                        l.canIUse().fastLex && (F = w);
                    for (p[r] = null, o[r] = 0, n[r] = 0, ++r, this.pre_parse && this.pre_parse.call(this, v), v.pre_parse && v.pre_parse.call(this, v), E = o[r - 1];;) {
                        if (x = E, this.defaultActions[x])
                            y = 2, E = this.defaultActions[x];
                        else if (s || (s = F()), A = q[x] && q[x][s] || u, E = A[1], !(y = A[0])) {
                            var I, J = this.describeSymbol(s) || s,
                                K = this.collect_expected_token_set(x);
                            I = 'number' == typeof l.yylineno ? 'Parse error on line ' + (l.yylineno + 1) + ': ' : 'Parse error: ', 'function' == typeof l.showPosition && (I += '\n' + l.showPosition(69, 10) + '\n'), K.length ? I += 'Expecting ' + K.join(', ') + ', got unexpected ' + J : I += 'Unexpected ' + J, B = this.constructParseErrorInfo(I, null, K, !1), void 0 !== (z = this.parseError(B.errStr, B, this.JisonParserError)) && (H = z);
                            break;
                        }
                        switch (y) {
                            default:
                                if (y instanceof Array) {
                                    B = this.constructParseErrorInfo('Parse Error: multiple actions possible at state: ' + x + ', token: ' + s, null, null, !1), void 0 !== (z = this.parseError(B.errStr, B, this.JisonParserError)) && (H = z);
                                    break;
                                }
                                B = this.constructParseErrorInfo('Parsing halted. No viable error recovery approach available due to internal system failure.', null, null, !1), void 0 !== (z = this.parseError(B.errStr, B, this.JisonParserError)) && (H = z);
                                break;
                            case 1:
                                n[r] = s, p[r] = l.yytext, o[r] = E, ++r, s = 0;
                                continue;
                            case 2:
                                if (C = (D = this.productions_[E - 1])[1], void 0 !== (z = this.performAction.call(G, E, r - 1, p))) {
                                    H = z;
                                    break;
                                }
                                r -= C;
                                var I = D[0];
                                n[r] = I, p[r] = G.$, E = q[o[r - 1]][I], o[r] = E, ++r;
                                continue;
                            case 3:
                                -2 !== r && (H = !0, r--, void 0 !== p[r] && (H = p[r]));
                        }
                        break;
                    }
                } catch (g) {
                    if (g instanceof this.JisonParserError)
                        throw g;
                    if (l && 'function' == typeof l.JisonLexerError && g instanceof l.JisonLexerError)
                        throw g;
                    B = this.constructParseErrorInfo('Parsing aborted due to exception.', g, null, !1), H = !1, void 0 !== (z = this.parseError(B.errStr, B, this.JisonParserError)) && (H = z);
                } finally {
                    H = this.cleanupAfterParse(H, !0, !0), this.__reentrant_call_depth--;
                }
                return H;
            }
        };
        k.originalParseError = k.parseError, k.originalQuoteName = k.quoteName;
        var l = function() {
            function m(m, h) {
                var n;
                if (Object.defineProperty(this, 'name', {
                        enumerable: !1,
                        writable: !1,
                        value: 'JisonLexerError'
                    }), null == m && (m = '???'), Object.defineProperty(this, 'message', {
                        enumerable: !1,
                        writable: !0,
                        value: m
                    }), this.hash = h, h && h.exception instanceof Error) {
                    var o = h.exception;
                    this.message = o.message || m, n = o.stack;
                }
                n || (Error.hasOwnProperty('captureStackTrace') ? Error.captureStackTrace(this, this.constructor) : n = new Error(m).stack), n && Object.defineProperty(this, 'stack', {
                    enumerable: !1,
                    writable: !1,
                    value: n
                });
            }
            'function' == typeof Object.setPrototypeOf ? Object.setPrototypeOf(m.prototype, Error.prototype) : m.prototype = Object.create(Error.prototype), m.prototype.constructor = m, m.prototype.name = 'JisonLexerError';
            var n = {
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
                constructLexErrorInfo: function(m, n, i) {
                    if (m = '' + m, null == i && (i = !(m.indexOf('\n') > 0 && m.indexOf('^') > 0)), this.yylloc && i)
                        if ('function' == typeof this.prettyPrintRange) {
                            this.prettyPrintRange(this.yylloc);
                            /\n\s*$/.test(m) || (m += '\n'), m += '\n  Erroneous area:\n' + this.prettyPrintRange(this.yylloc);
                        } else if ('function' == typeof this.showPosition) {
                        var o = this.showPosition();
                        o && (m.length && '\n' !== m[m.length - 1] && '\n' !== o[0] ? m += '\n' + o : m += o);
                    }
                    var o = {
                        errStr: m,
                        recoverable: !!n,
                        text: this.match,
                        token: null,
                        line: this.yylineno,
                        loc: this.yylloc,
                        yy: this.yy,
                        lexer: this,
                        destroy: function() {
                            var p = !!this.recoverable;
                            for (var q in this)
                                this.hasOwnProperty(q) && 'object' == typeof q && (this[q] = void 0);
                            this.recoverable = p;
                        }
                    };
                    return this.__error_infos.push(o), o;
                },
                parseError: function(m, n, i) {
                    if (i || (i = this.JisonLexerError), this.yy) {
                        if (this.yy.parser && 'function' == typeof this.yy.parser.parseError)
                            return this.yy.parser.parseError.call(this, m, n, i) || this.ERROR;
                        if ('function' == typeof this.yy.parseError)
                            return this.yy.parseError.call(this, m, n, i) || this.ERROR;
                    }
                    throw new i(m, n);
                },
                yyerror: function(m) {
                    var o = '';
                    this.yylloc && (o = ' on line ' + (this.yylineno + 1));
                    var p = this.constructLexErrorInfo('Lexical error' + o + ': ' + m, this.options.lexerErrorsAreRecoverable),
                        q = Array.prototype.slice.call(i, 1);
                    return q.length && (p.extra_error_attributes = q), this.parseError(p.errStr, p, this.JisonLexerError) || this.ERROR;
                },
                cleanupAfterLex: function(m) {
                    if (this.setInput('', {}), !m) {
                        for (var o = this.__error_infos.length - 1; o >= 0; o--) {
                            var p = this.__error_infos[o];
                            p && 'function' == typeof p.destroy && p.destroy();
                        }
                        this.__error_infos.length = 0;
                    }
                    return this;
                },
                clear: function() {
                    this.yytext = '', this.yyleng = 0, this.match = '', this.matches = !1, this._more = !1, this._backtrack = !1;
                    var o = this.yylloc ? this.yylloc.last_column : 0;
                    this.yylloc = {
                        first_line: this.yylineno + 1,
                        first_column: o,
                        last_line: this.yylineno + 1,
                        last_column: o,
                        range: [
                            this.offset,
                            this.offset
                        ]
                    };
                },
                setInput: function(m, n) {
                    if (this.yy = n || this.yy || {}, !this.__decompressed) {
                        for (var o = this.rules, p = 0, q = o.length; p < q; p++) {
                            'number' == typeof(y = o[p]) && (o[p] = o[y]);
                        }
                        var r = this.conditions;
                        for (var s in r) {
                            var t = r[s],
                                u = t.rules,
                                v = (q = u.length, new Array(q + 1)),
                                w = new Array(q + 1);
                            for (p = 0; p < q; p++) {
                                var x = u[p],
                                    y = o[x];
                                v[p + 1] = y, w[p + 1] = x;
                            }
                            t.rules = w, t.__rule_regexes = v, t.__rule_count = q;
                        }
                        this.__decompressed = !0;
                    }
                    return this._input = m || '', this.clear(), this._signaled_error_token = !1, this.done = !1, this.yylineno = 0, this.matched = '', this.conditionStack = ['INITIAL'], this.__currentRuleSet__ = null, this.yylloc = {
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
                editRemainingInput: function(m, n) {
                    var o = m.call(this, this._input, n);
                    return 'string' != typeof o ? o && (this._input = '' + o) : this._input = o, this;
                },
                input: function() {
                    if (!this._input)
                        return null;
                    var p = this._input[0];
                    this.yytext += p, this.yyleng++, this.offset++, this.match += p, this.matched += p;
                    var q = 1,
                        r = !1;
                    if ('\n' === p)
                        r = !0;
                    else if ('\r' === p) {
                        r = !0;
                        var s = this._input[1];
                        '\n' === s && (q++, p += s, this.yytext += s, this.yyleng++, this.offset++, this.match += s, this.matched += s, this.yylloc.range[1]++);
                    }
                    return r ? (this.yylineno++, this.yylloc.last_line++, this.yylloc.last_column = 0) : this.yylloc.last_column++, this.yylloc.range[1]++, this._input = this._input.slice(q), p;
                },
                unput: function(m) {
                    var o = m.length,
                        p = m.split(/(?:\r\n?|\n)/g);
                    if (this._input = m + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - o), this.yyleng = this.yytext.length, this.offset -= o, this.match = this.match.substr(0, this.match.length - o), this.matched = this.matched.substr(0, this.matched.length - o), p.length > 1) {
                        this.yylineno -= p.length - 1, this.yylloc.last_line = this.yylineno + 1;
                        var q = this.match,
                            r = q.split(/(?:\r\n?|\n)/g);
                        1 === r.length && (r = (q = this.matched).split(/(?:\r\n?|\n)/g)), this.yylloc.last_column = r[r.length - 1].length;
                    } else
                        this.yylloc.last_column -= o;
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
                less: function(m) {
                    return this.unput(this.match.slice(m));
                },
                pastInput: function(m, n) {
                    var o = this.matched.substring(0, this.matched.length - this.match.length);
                    m < 0 ? m = o.length : m || (m = 20), n < 0 ? n = o.length : n || (n = 1);
                    var p = (o = o.substr(2 * -m - 2)).replace(/\r\n|\r/g, '\n').split('\n');
                    return (o = (p = p.slice(-n)).join('\n')).length > m && (o = '...' + o.substr(-m)), o;
                },
                upcomingInput: function(m, n) {
                    var o = this.match;
                    m < 0 ? m = o.length + this._input.length : m || (m = 20), n < 0 ? n = m : n || (n = 1), o.length < 2 * m + 2 && (o += this._input.substring(0, 2 * m + 2));
                    var p = o.replace(/\r\n|\r/g, '\n').split('\n');
                    return (o = (p = p.slice(0, n)).join('\n')).length > m && (o = o.substring(0, m) + '...'), o;
                },
                showPosition: function(m, n) {
                    var o = this.pastInput(m).replace(/\s/g, ' '),
                        p = new Array(o.length + 1).join('-');
                    return o + this.upcomingInput(n).replace(/\s/g, ' ') + '\n' + p + '^';
                },
                deriveLocationInfo: function(m, n, i, j) {
                    var o = {
                        first_line: 1,
                        first_column: 0,
                        last_line: 1,
                        last_column: 0,
                        range: [
                            0,
                            0
                        ]
                    };
                    return m && (o.first_line = 0 | m.first_line, o.last_line = 0 | m.last_line, o.first_column = 0 | m.first_column, o.last_column = 0 | m.last_column, m.range && (o.range[0] = 0 | m.range[0], o.range[1] = 0 | m.range[1])), (o.first_line <= 0 || o.last_line < o.first_line) && (o.first_line <= 0 && n && (o.first_line = 0 | n.last_line, o.first_column = 0 | n.last_column, n.range && (o.range[0] = 0 | m.range[1])), (o.last_line <= 0 || o.last_line < o.first_line) && i && (o.last_line = 0 | i.first_line, o.last_column = 0 | i.first_column, i.range && (o.range[1] = 0 | m.range[0])), o.first_line <= 0 && j && (o.last_line <= 0 || j.last_line <= o.last_line) && (o.first_line = 0 | j.first_line, o.first_column = 0 | j.first_column, j.range && (o.range[0] = 0 | j.range[0])), o.last_line <= 0 && j && (o.first_line <= 0 || j.first_line >= o.first_line) && (o.last_line = 0 | j.last_line, o.last_column = 0 | j.last_column, j.range && (o.range[1] = 0 | j.range[1]))), o.last_line <= 0 && (o.first_line <= 0 ? (o.first_line = this.yylloc.first_line, o.last_line = this.yylloc.last_line, o.first_column = this.yylloc.first_column, o.last_column = this.yylloc.last_column, o.range[0] = this.yylloc.range[0], o.range[1] = this.yylloc.range[1]) : (o.last_line = this.yylloc.last_line, o.last_column = this.yylloc.last_column, o.range[1] = this.yylloc.range[1])), o.first_line <= 0 && (o.first_line = o.last_line, o.first_column = 0, o.range[1] = o.range[0]), o.first_column < 0 && (o.first_column = 0), o.last_column < 0 && (o.last_column = o.first_column > 0 ? o.first_column : 80), o;
                },
                prettyPrintRange: function(m, n, i) {
                    m = this.deriveLocationInfo(m, n, i);
                    var o = (this.matched + this._input).split('\n'),
                        p = Math.max(1, n ? n.first_line : m.first_line - 3),
                        q = Math.max(1, i ? i.last_line : m.last_line + 1),
                        r = 1 + Math.log10(1 | q) | 0,
                        s = new Array(r).join(' '),
                        t = [],
                        u = o.slice(p - 1, q + 1).map(function(n, i) {
                            var v = i + p,
                                w = (s + v).substr(-r) + ': ' + n,
                                x = new Array(r + 1).join('^'),
                                y = 3,
                                z = 0;
                            (v === m.first_line ? (y += m.first_column, z = Math.max(2, (v === m.last_line ? m.last_column : n.length) - m.first_column + 1)) : v === m.last_line ? z = Math.max(2, m.last_column + 1) : v > m.first_line && v < m.last_line && (z = Math.max(2, n.length + 1)), z) && (w += '\n' + x + new Array(y).join('.') + new Array(z).join('^'), n.trim().length > 0 && t.push(i));
                            return w = w.replace(/\t/g, ' ');
                        });
                    if (t.length > 4) {
                        var A = t[1] + 1,
                            B = t[t.length - 2] - 1,
                            C = new Array(r + 1).join(' ') + '  (...continued...)';
                        C += '\n' + new Array(r + 1).join('-') + '  (---------------)', x.splice(A, B - A + 1, C);
                    }
                    return u.join('\n');
                },
                describeYYLLOC: function(m, n) {
                    var o, p = m.first_line,
                        q = m.last_line,
                        r = m.first_column,
                        s = m.last_column;
                    if (0 === q - p ? (o = 'line ' + p + ', ', o += s - r <= 1 ? 'column ' + r : 'columns ' + r + ' .. ' + s) : o = 'lines ' + p + '(column ' + r + ') .. ' + q + '(column ' + s + ')', m.range && n) {
                        var t = m.range[0],
                            u = m.range[1] - 1;
                        o += u <= t ? ' {String Offset: ' + t + '}' : ' {String Offset range: ' + t + ' .. ' + u + '}';
                    }
                    return o;
                },
                test_match: function(m, n) {
                    var o, p, q, r, s;
                    if (this.options.backtrack_lexer && (q = {
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
                        }), s = (r = m[0]).length, (p = r.split(/(?:\r\n?|\n)/g)).length > 1 ? (this.yylineno += p.length - 1, this.yylloc.last_line = this.yylineno + 1, this.yylloc.last_column = p[p.length - 1].length) : this.yylloc.last_column += s, this.yytext += r, this.match += r, this.matched += r, this.matches = m, this.yyleng = this.yytext.length, this.yylloc.range[1] += s, this.offset += s, this._more = !1, this._backtrack = !1, this._input = this._input.slice(s), o = this.performAction.call(this, this.yy, n, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), o)
                        return o;
                    if (this._backtrack) {
                        for (var t in q)
                            this[t] = q[t];
                        return this.__currentRuleSet__ = null, !1;
                    }
                    return !!this._signaled_error_token && (o = this._signaled_error_token, this._signaled_error_token = !1, o);
                },
                next: function() {
                    if (this.done)
                        return this.clear(), this.EOF;
                    var t, u, v, w;
                    this._input || (this.done = !0), this._more || this.clear();
                    var x = this.__currentRuleSet__;
                    if (!(x || (x = this.__currentRuleSet__ = this._currentRules()) && x.rules)) {
                        var y = '';
                        this.options.trackPosition && (y = ' on line ' + (this.yylineno + 1));
                        var z = this.constructLexErrorInfo('Internal lexer engine error' + y + ': The lex grammar programmer pushed a non-existing condition name "' + this.topState() + '"; this is a fatal error and should be reported to the application programmer team!', !1);
                        return this.parseError(z.errStr, z, this.JisonLexerError) || this.ERROR;
                    }
                    for (var y = x.rules, z = x.__rule_regexes, A = x.__rule_count, B = 1; B <= A; B++)
                        if ((v = this._input.match(z[B])) && (!u || v[0].length > u[0].length)) {
                            if (u = v, w = B, this.options.backtrack_lexer) {
                                if (!1 !== (t = this.test_match(v, y[B])))
                                    return t;
                                if (this._backtrack) {
                                    u = void 0;
                                    continue;
                                }
                                return !1;
                            }
                            if (!this.options.flex)
                                break;
                        }
                    if (u)
                        return !1 !== (t = this.test_match(u, y[w])) && t;
                    if (this._input) {
                        r = '';
                        this.options.trackPosition && (r = ' on line ' + (this.yylineno + 1));
                        s = this.constructLexErrorInfo('Lexical error' + r + ': Unrecognized text.', this.options.lexerErrorsAreRecoverable);
                        var C = this._input,
                            D = this.topState(),
                            E = this.conditionStack.length;
                        return (t = this.parseError(s.errStr, s, this.JisonLexerError) || this.ERROR) === this.ERROR && (this.matches || C !== this._input || D !== this.topState() || E !== this.conditionStack.length || this.input()), t;
                    }
                    return this.done = !0, this.clear(), this.EOF;
                },
                lex: function() {
                    var C;
                    for ('function' == typeof this.pre_lex && (C = this.pre_lex.call(this, 0)), 'function' == typeof this.options.pre_lex && (C = this.options.pre_lex.call(this, C) || C), this.yy && 'function' == typeof this.yy.pre_lex && (C = this.yy.pre_lex.call(this, C) || C); !C;)
                        C = this.next();
                    return this.yy && 'function' == typeof this.yy.post_lex && (C = this.yy.post_lex.call(this, C) || C), 'function' == typeof this.options.post_lex && (C = this.options.post_lex.call(this, C) || C), 'function' == typeof this.post_lex && (C = this.post_lex.call(this, C) || C), C;
                },
                fastLex: function() {
                    for (var D; !D;)
                        D = this.next();
                    return D;
                },
                canIUse: function() {
                    return {
                        fastLex: !('function' == typeof this.pre_lex || 'function' == typeof this.options.pre_lex || this.yy && 'function' == typeof this.yy.pre_lex || this.yy && 'function' == typeof this.yy.post_lex || 'function' == typeof this.options.post_lex || 'function' == typeof this.post_lex) && 'function' == typeof this.fastLex
                    };
                },
                begin: function(m) {
                    return this.pushState(m);
                },
                pushState: function(m) {
                    return this.conditionStack.push(m), this.__currentRuleSet__ = null, this;
                },
                popState: function() {
                    return this.conditionStack.length - 1 > 0 ? (this.__currentRuleSet__ = null, this.conditionStack.pop()) : this.conditionStack[0];
                },
                topState: function(m) {
                    return (m = this.conditionStack.length - 1 - Math.abs(m || 0)) >= 0 ? this.conditionStack[m] : 'INITIAL';
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
                JisonLexerError: m,
                performAction: function(m, n, i) {
                    if (1 !== n)
                        return this.simpleCaseActionClusters[n];
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
            return n;
        }();

        function m() {
            this.yy = {};
        }
        return k.lexer = l, m.prototype = k, k.Parser = m, new m();
    }();
    e = f, f.Parser;
}), d.register('xNrN3', function(a, b) {
    Object.defineProperty(a.exports, '__esModule', {
        value: !0
    }), a.exports.flip = k;
    var e, f = d('XButK'),
        g = (e = f) && e.__esModule ? e : {
            default: e
        };

    function h(a, b) {
        return 'MathExpression' === a.type ? function(a, b) {
            switch (a = function(a, b) {
                    var i = (0, g.default)(a.left, a.right, b),
                        j = h(i.left, b),
                        k = h(i.right, b);
                    'MathExpression' === j.type && 'MathExpression' === k.type && ('/' === j.operator && '*' === k.operator || '-' === j.operator && '+' === k.operator || '*' === j.operator && '/' === k.operator || '+' === j.operator && '-' === k.operator) && (i(j.right, k.right) ? i = (0, g.default)(j.left, k.left, b) : i(j.right, k.left) && (i = (0, g.default)(j.left, k.right, b)), j = h(i.left, b), k = h(i.right, b));
                    return a.left = j, a.right = k, a;
                }(a, b), a.operator) {
                case '+':
                case '-':
                    return function(a, b) {
                        var i = j,
                            k = i.left,
                            l = i.right,
                            m = i.operator;
                        if ('CssVariable' === k.type || 'CssVariable' === l.type)
                            return j;
                        if (0 === l.value)
                            return k;
                        if (0 === k.value && '+' === m)
                            return l;
                        if (0 === k.value && '-' === m)
                            return l(l);
                        k.type === l.type && j(k.type) && ((j = Object.assign({}, k)).value = '+' === m ? k.value + l.value : k.value - l.value);
                        if (j(k.type) && ('+' === l.operator || '-' === l.operator) && 'MathExpression' === l.type) {
                            if (k.type === l.left.type)
                                return (j = Object.assign({}, j)).left = h({
                                    type: 'MathExpression',
                                    operator: m,
                                    left: k,
                                    right: l.left
                                }, b), j.right = l.right, j.operator = '-' === m ? k(l.operator) : l.operator, h(j, b);
                            if (k.type === l.right.type)
                                return (j = Object.assign({}, j)).left = h({
                                    type: 'MathExpression',
                                    operator: '-' === m ? k(l.operator) : l.operator,
                                    left: k,
                                    right: l.right
                                }, b), j.right = l.left, h(j, b);
                        }
                        if ('MathExpression' === k.type && ('+' === k.operator || '-' === k.operator) && j(l.type)) {
                            if (l.type === k.left.type)
                                return (j = Object.assign({}, k)).left = h({
                                    type: 'MathExpression',
                                    operator: m,
                                    left: k.left,
                                    right: l
                                }, b), h(j, b);
                            if (l.type === k.right.type)
                                return j = Object.assign({}, k), '-' === k.operator ? (j.right = h({
                                    type: 'MathExpression',
                                    operator: '-' === m ? '+' : '-',
                                    left: l,
                                    right: k.right
                                }, b), j.operator = '-' === m ? '-' : '+') : j.right = h({
                                    type: 'MathExpression',
                                    operator: m,
                                    left: k.right,
                                    right: l
                                }, b), j.right.value < 0 && (j.right.value *= -1, j.operator = '-' === j.operator ? '+' : '-'), h(j, b);
                        }
                        return j;
                    }(a, b);
                case '/':
                    return function(a, b) {
                        if (!j(a.right.type))
                            return a;
                        if ('Value' !== a.right.type)
                            throw new Error('Cannot divide by "' + a.right.unit + '", number expected');
                        if (0 === a.right.value)
                            throw new Error('Cannot divide by zero');
                        if ('MathExpression' === a.left.type)
                            return j(a.left.left.type) && j(a.left.right.type) ? (a.left.left.value /= a.right.value, a.left.right.value /= a.right.value, h(a.left, b)) : a;
                        if (j(a.left.type))
                            return a.left.value /= a.right.value, a.left;
                        return a;
                    }(a, b);
                case '*':
                    return function(a) {
                        if ('MathExpression' === a.left.type && 'Value' === a.right.type) {
                            if (j(a.left.left.type) && j(a.left.right.type))
                                return a.left.left.value *= a.right.value, a.left.right.value *= a.right.value, a.left;
                        } else {
                            if (j(a.left.type) && 'Value' === a.right.type)
                                return a.left.value *= a.right.value, a.left;
                            if ('Value' === a.left.type && 'MathExpression' === a.right.type) {
                                if (j(a.right.left.type) && j(a.right.right.type))
                                    return a.right.left.value *= a.left.value, a.right.right.value *= a.left.value, a.right;
                            } else if ('Value' === a.left.type && j(a.right.type))
                                return a.right.value *= a.left.value, a.right;
                        }
                        return a;
                    }(a);
            }
            return a;
        }(a, b) : 'Calc' === a.type ? h(a.value, b) : a;
    }

    function i(a, b) {
        return a.type === b.type && a.value === b.value;
    }

    function j(a) {
        switch (a) {
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

    function k(a) {
        return '+' === a ? '-' : '+';
    }

    function l(a) {
        return j(a.type) ? a.value = -a.value : 'MathExpression' == a.type && (a.left = l(a.left), a.right = l(a.right)), a;
    }
    a.exports.default = h;
}), d.register('XButK', function(a, b) {
    Object.defineProperty(a.exports, '__esModule', {
        value: !0
    });
    var e, f = d('WrPx5'),
        g = (e = f) && e.__esModule ? e : {
            default: e
        };
    a.exports.default = function(a, b, e) {
        switch (a.type) {
            case 'LengthValue':
            case 'AngleValue':
            case 'TimeValue':
            case 'FrequencyValue':
            case 'ResolutionValue':
                return function(a, b, e) {
                    b.type === a.type && (b = {
                        type: a.type,
                        value: (0, g.default)(b.value, b.unit, a.unit, e),
                        unit: a.unit
                    });
                    return {
                        left: a,
                        right: b
                    };
                }(a, b, e);
            default:
                return {
                    left: a,
                        right: b
                };
        }
    }, a.exports = a.exports.default;
}), d.register('WrPx5', function(a, b) {
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
    a.exports = function(a, b, d, f) {
        if (!e.hasOwnProperty(d))
            throw new Error('Cannot convert to ' + d);
        if (!e[d].hasOwnProperty(b))
            throw new Error('Cannot convert from ' + b + ' to ' + d);
        var f = e[d][b] * a;
        return !1 !== f ? (f = Math.pow(10, l(f) || 5), Math.round(f * f) / f) : f;
    };
}), d.register('+Z3dh', function(a, b) {
    Object.defineProperty(a.exports, '__esModule', {
        value: !0
    }), a.exports.default = function(a, b, c) {
        var e = h(b, c);
        return 'MathExpression' === b.type && (e = a + '(' + e + ')'), e;
    };
    var e = d('xNrN3'),
        f = {
            '*': 0,
            '/': 0,
            '+': 1,
            '-': 1
        };

    function g(a, b) {
        if (!1 !== b) {
            var h = Math.pow(10, b);
            return Math.round(a * h) / h;
        }
        return a;
    }

    function h(a, b) {
        switch (a.type) {
            case 'MathExpression':
                var i = a.left,
                    j = a.right,
                    k = a.operator,
                    l = '';
                return 'MathExpression' === i.type && f[k] < f[i.operator] ? l += '(' + h(i, b) + ')' : l += h(i, b), l += ' ' + a.operator + ' ', 'MathExpression' === j.type && f[k] < f[j.operator] ? l += '(' + h(j, b) + ')' : 'MathExpression' === j.type && '-' === k && [
                    '+',
                    '-'
                ].includes(j.operator) ? (j.operator = (0, e.flip)(j.operator), l += h(j, b)) : l += h(j, b), l;
            case 'Value':
                return g(a.value, b);
            case 'CssVariable':
                return a.fallback ? 'var(' + a.value + ', ' + h(a.fallback, b) + ')' : 'var(' + a.value + ')';
            case 'Calc':
                return a.prefix ? '-' + a.prefix + '-calc(' + h(a.value, b) + ')' : 'calc(' + h(a.value, b) + ')';
            default:
                return g(a.value, b) + a.unit;
        }
    }
    a.exports = a.exports.default;
}), d.register('u572v', function(c, r) {
    b(c.exports, 'mathSign', function() {
        return j;
    }), b(c.exports, 'isPercent', function() {
        return k;
    }), b(c.exports, 'isNumber', function() {
        return l;
    }), b(c.exports, 'isNumOrStr', function() {
        return m;
    }), b(c.exports, 'uniqueId', function() {
        return o;
    }), b(c.exports, 'getPercentValue', function() {
        return p;
    }), b(c.exports, 'getAnyElementOfObject', function() {
        return q;
    }), b(c.exports, 'hasDuplicate', function() {
        return r;
    }), b(c.exports, 'interpolateNumber', function() {
        return s;
    }), b(c.exports, 'findEntryInArray', function() {
        return t;
    });
    var e = d('G5U2X'),
        f = d('JslBt0'),
        g = d('TqAe3'),
        h = d('r7FCY'),
        i = d('zG8Lj'),
        j = function(a) {
            return 0 === a ? 0 : a > 0 ? 1 : -1;
        },
        k = function(b) {
            return a(i)(b) && b.indexOf('%') === b.length - 1;
        },
        l = function(b) {
            return a(h)(b) && !a(g)(b);
        },
        m = function(b) {
            return l(b) || a(i)(b);
        },
        n = 0,
        o = function(a) {
            var p = ++n;
            return ''.concat(a || '').concat(p);
        },
        p = function(b, c) {
            var q, r = i.length > 2 && void 0 !== i[2] ? i[2] : 0,
                s = i.length > 3 && void 0 !== i[3] && i[3];
            if (!l(b) && !a(i)(b))
                return r;
            if (k(b)) {
                var t = b.indexOf('%');
                q = c * parseFloat(b.slice(0, t)) / 100;
            } else
                q = +b;
            return a(g)(q) && (q = r), s && q > c && (q = c), q;
        },
        q = function(a) {
            if (!a)
                return null;
            var r = Object.keys(a);
            return r && r.length ? a[r[0]] : null;
        },
        r = function(b) {
            if (!a(f)(b))
                return !1;
            for (var s = b.length, t = {}, u = 0; u < s; u++) {
                if (t[b[u]])
                    return !0;
                t[b[u]] = !0;
            }
            return !1;
        },
        s = function(a, b) {
            return l(a) && l(b) ? function(c) {
                return a + c * (b - a);
            } : function() {
                return b;
            };
        };

    function t(b, c, d) {
        return b && b.length ? b.find(function(b) {
            return b && ('function' == typeof c ? c(b) : a(e)(b, c)) === d;
        }) : null;
    }
}), d.register('G5U2X', function(a, b) {
    var e = d('XV6VK');
    a.exports = function(a, b, d) {
        var f = null == a ? void 0 : e(a, b);
        return void 0 === f ? d : f;
    };
}), d.register('XV6VK', function(a, b) {
    var e = d('a/pvG'),
        f = d('mtexX');
    a.exports = function(a, b) {
        for (var g = 0, h = (b = e(b, a)).length; null != a && g < h;)
            a = a[f(b[g++])];
        return g && g == h ? a : void 0;
    };
}), d.register('a/pvG', function(a, b) {
    var e = d('JslBt0'),
        f = d('fqJZ3'),
        g = d('SigDL'),
        h = d('GOmcy');
    a.exports = function(a, b) {
        return e(a) ? a : f(a, b) ? [a] : g(h(a));
    };
}), d.register('fqJZ3', function(a, b) {
    var e = d('JslBt0'),
        f = d('ZYTFk'),
        g = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        h = /^\w*$/;
    a.exports = function(a, b) {
        if (e(a))
            return !1;
        var i = typeof a;
        return !('number' != i && 'symbol' != i && 'boolean' != i && null != a && !f(a)) || (h.test(a) || !g.test(a) || null != b && a in Object(b));
    };
}), d.register('ZYTFk', function(a, b) {
    var e = d('/LLyG'),
        f = d('Pqi7I0');
    a.exports = function(a) {
        return 'symbol' == typeof a || f(a) && '[object Symbol]' == e(a);
    };
}), d.register('SigDL', function(a, b) {
    var e = d('1GYWZ'),
        f = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        g = /\\(\\)?/g,
        h = e(function(a) {
            var i = [];
            return 46 === a.charCodeAt(0) && i.push(''), a.replace(f, function(a, e, d, f) {
                i.push(d ? f.replace(g, '$1') : e || a);
            }), i;
        });
    a.exports = h;
}), d.register('1GYWZ', function(a, b) {
    var e = d('02Jxf');
    a.exports = function(a) {
        var f = e(a, function(a) {
                return 500 === d.size && d.clear(), a;
            }),
            g = f.cache;
        return f;
    };
}), d.register('02Jxf', function(a, b) {
    var e = d('en+cA');

    function f(a, b) {
        if ('function' != typeof a || null != b && 'function' != typeof b)
            throw new TypeError('Expected a function');
        var g = function() {
            var h = i,
                j = b ? b.apply(this, h) : h[0],
                k = g.cache;
            if (k.has(j))
                return k.get(j);
            var l = a.apply(this, h);
            return g.cache = k.set(j, l) || k, l;
        };
        return g.cache = new(f.Cache || e)(), g;
    }
    f.Cache = e, a.exports = f;
}), d.register('GOmcy', function(a, b) {
    var e = d('97xHd');
    a.exports = function(a) {
        return null == a ? '' : e(a);
    };
}), d.register('97xHd', function(a, b) {
    var e = d('3bXi3'),
        f = d('ejMxi0'),
        g = d('JslBt0'),
        h = d('ZYTFk'),
        i = e ? e.prototype : void 0,
        j = i ? i.toString : void 0;
    a.exports = function a(b) {
        if ('string' == typeof b)
            return b;
        if (g(b))
            return f(b, a) + '';
        if (h(b))
            return j ? j.call(b) : '';
        var k = b + '';
        return '0' == k && 1 / b == -Infinity ? '-0' : k;
    };
}), d.register('ejMxi0', function(a, b) {
    a.exports = function(a, b) {
        for (var e = -1, f = null == a ? 0 : a.length, g = Array(f); ++e < f;)
            g[e] = b(a[e], e, a);
        return g;
    };
}), d.register('mtexX', function(a, b) {
    var e = d('ZYTFk');
    a.exports = function(a) {
        if ('string' == typeof a || e(a))
            return a;
        var f = a + '';
        return '0' == f && 1 / a == -Infinity ? '-0' : f;
    };
}), d.register('TqAe3', function(a, b) {
    var e = d('r7FCY');
    a.exports = function(a) {
        return e(a) && a != +a;
    };
}), d.register('r7FCY', function(a, b) {
    var e = d('/LLyG'),
        f = d('Pqi7I0');
    a.exports = function(a) {
        return 'number' == typeof a || f(a) && '[object Number]' == e(a);
    };
}), d.register('zG8Lj', function(a, b) {
    var e = d('/LLyG'),
        f = d('JslBt0'),
        g = d('Pqi7I0');
    a.exports = function(a) {
        return 'string' == typeof a || !f(a) && g(a) && '[object String]' == e(a);
    };
}), d.register('GoeDC', function(a, c) {
    b(a.exports, 'Global', function() {
        return d;
    });
    var e = {
        isSsr: !('undefined' != typeof window && window.document && window.document.createElement && window.setTimeout),
        get: function(a) {
            return e[a];
        },
        set: function(a, b) {
            if ('string' == typeof a)
                e[a] = b;
            else {
                var f = Object.keys(a);
                f && f.length && f.forEach(function(b) {
                    e[b] = a[b];
                });
            }
        }
    };
}), d.register('xgP3B', function(a, c) {
    b(a.exports, 'getStringSize', function() {
        return p;
    }), b(a.exports, 'getOffset', function() {
        return q;
    }), b(a.exports, 'calculateChartCoordinate', function() {
        return r;
    });
    var e = d('GoeDC');

    function f(a, b) {
        var g = Object.keys(a);
        if (Object.getOwnPropertySymbols) {
            var h = Object.getOwnPropertySymbols(a);
            b && (h = h.filter(function(b) {
                return Object.getOwnPropertyDescriptor(a, b).enumerable;
            })), g.push.apply(g, h);
        }
        return g;
    }

    function g(a) {
        for (var h = 1; h < h.length; h++) {
            var i = null != h[h] ? h[h] : {};
            h % 2 ? f(Object(i), !0).forEach(function(h) {
                h(a, h, i[h]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(i)) : f(Object(i)).forEach(function(h) {
                Object.defineProperty(a, h, Object.getOwnPropertyDescriptor(i, h));
            });
        }
        return a;
    }

    function h(a, b, c) {
        return b in a ? Object.defineProperty(a, b, {
            value: c,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : a[b] = c, a;
    }

    function i(a) {
        return function(a) {
            if (Array.isArray(a))
                return j(a);
        }(a) || function(a) {
            if ('undefined' != typeof Symbol && Symbol.iterator in Object(a))
                return Array.from(a);
        }(a) || function(a, b) {
            if (!a)
                return;
            if ('string' == typeof a)
                return j(a, b);
            var j = Object.prototype.toString.call(a).slice(8, -1);
            'Object' === j && a.constructor && (j = a.constructor.name);
            if ('Map' === j || 'Set' === j)
                return Array.from(a);
            if ('Arguments' === j || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(j))
                return j(a, b);
        }(a) || function() {
            throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }

    function j(a, b) {
        (null == b || b > a.length) && (b = a.length);
        for (var k = 0, l = new Array(b); k < b; k++)
            l[k] = a[k];
        return l;
    }
    var k = {
            widthCache: {},
            cacheCount: 0
        },
        l = {
            position: 'absolute',
            top: '-20000px',
            left: 0,
            padding: 0,
            margin: 0,
            border: 'none',
            whiteSpace: 'pre'
        },
        m = [
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
        n = 'recharts_measurement_span';
    var o = function(a) {
            return Object.keys(a).reduce(function(b, c) {
                return ''.concat(b).concat((f = c, f.split('').reduce(function(a, b) {
                    return b === b.toUpperCase() ? [].concat(i(a), [
                        '-',
                        b.toLowerCase()
                    ]) : [].concat(i(a), [b]);
                }, []).join('')), ':').concat((d = c, e = a[c], m.indexOf(d) >= 0 && e === +e ? ''.concat(e, 'px') : e), ';');
                var p, q, r;
            }, '');
        },
        p = function(a) {
            var q = h.length > 1 && void 0 !== h[1] ? h[1] : {};
            if (null == a || e.Global.isSsr)
                return {
                    width: 0,
                    height: 0
                };
            var r = ''.concat(a),
                s = o(q),
                t = ''.concat(r, '-').concat(s);
            if (k.widthCache[t])
                return k.widthCache[t];
            try {
                var u = document.getElementById(n);
                u || ((u = document.createElement('span')).setAttribute('id', n), u.setAttribute('aria-hidden', 'true'), document.body.appendChild(u));
                var v = g(g({}, l), q);
                Object.keys(v).map(function(a) {
                    return u.style[a] = v[a], a;
                }), u.textContent = r;
                var w = u.getBoundingClientRect(),
                    x = {
                        width: w.width,
                        height: w.height
                    };
                return k.widthCache[t] = x, ++k.cacheCount > 2000 && (k.cacheCount = 0, k.widthCache = {}), x;
            } catch (a) {
                return {
                    width: 0,
                    height: 0
                };
            }
        },
        q = function(a) {
            var r = a.ownerDocument.documentElement,
                s = {
                    top: 0,
                    left: 0
                };
            return void 0 !== a.getBoundingClientRect && (s = a.getBoundingClientRect()), {
                top: s.top + window.pageYOffset - r.clientTop,
                left: s.left + window.pageXOffset - r.clientLeft
            };
        },
        r = function(a, b) {
            return {
                chartX: Math.round(a.pageX - b.left),
                chartY: Math.round(a.pageY - b.top)
            };
        };
}), d.register('NvaHc', function(c, p) {
    b(c.exports, 'getDisplayName', function() {
        return o;
    }), b(c.exports, 'findAllByType', function() {
        return s;
    }), b(c.exports, 'findChildByType', function() {
        return t;
    }), b(c.exports, 'validateWidthHeight', function() {
        return u;
    }), b(c.exports, 'isChildrenEqual', function() {
        return x;
    }), b(c.exports, 'renderByOrder', function() {
        return z;
    }), b(c.exports, 'getReactEventByType', function() {
        return A;
    }), b(c.exports, 'parseChildIndex', function() {
        return B;
    });
    var e = d('zG8Lj'),
        f = d('G5U2X'),
        g = d('oskvv'),
        h = d('JslBt0'),
        i = d('uPP4W'),
        j = d('vQh9m'),
        k = d('u572v'),
        l = d('vmqjm');

    function m(a, b) {
        if (null == a)
            return {};
        var n, o, p = function(a, b) {
            if (null == a)
                return {};
            var q, r, s = {},
                t = Object.keys(a);
            for (r = 0; r < t.length; r++)
                q = t[r], b.indexOf(q) >= 0 || (s[q] = a[q]);
            return s;
        }(a, b);
        if (Object.getOwnPropertySymbols) {
            var q = Object.getOwnPropertySymbols(a);
            for (o = 0; o < q.length; o++)
                n = q[o], b.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(a, n) && (p[n] = a[n]);
        }
        return p;
    }
    var n = {
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
        o = function(a) {
            return 'string' == typeof a ? a : a ? a.displayName || a.name || 'Component' : '';
        },
        p = null,
        q = null,
        r = function b(c) {
            if (c === p && a(h)(q))
                return q;
            var s = [];
            return i.Children.forEach(c, function(c) {
                a(g)(c) || ((0, j.isFragment)(c) ? s = s.concat(b(c.props.children)) : s.push(c));
            }), q = s, p = c, s;
        },
        s = function(b, c) {
            var t = [],
                u = [];
            return u = a(h)(c) ? c.map(function(a) {
                return o(a);
            }) : [o(c)], r(b).forEach(function(b) {
                var v = a(f)(b, 'type.displayName') || a(f)(b, 'type.name'); -
                1 !== u.indexOf(v) && t.push(b);
            }), t;
        },
        t = function(a, b) {
            var u = s(a, b);
            return u && u[0];
        },
        u = function(a) {
            if (!a || !a.props)
                return !1;
            var v = a.props,
                w = v.width,
                x = v.height;
            return !(!(0, k.isNumber)(w) || w <= 0 || !(0, k.isNumber)(x) || x <= 0);
        },
        v = [
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
        w = function(b) {
            return b && b.type && a(e)(b.type) && v.indexOf(b.type) >= 0;
        },
        x = function b(c, d) {
            if (c === d)
                return !0;
            var y = i.Children.count(c);
            if (y !== i.Children.count(d))
                return !1;
            if (0 === y)
                return !0;
            if (1 === y)
                return y(a(h)(c) ? c[0] : c, a(h)(d) ? d[0] : d);
            for (var z = 0; z < y; z++) {
                var A = c[z],
                    B = d[z];
                if (a(h)(A) || a(h)(B)) {
                    if (!b(A, B))
                        return !1;
                } else if (!y(A, B))
                    return !1;
            }
            return !0;
        },
        y = function(b, c) {
            if (a(g)(b) && a(g)(c))
                return !0;
            if (!a(g)(b) && !a(g)(c)) {
                var z = b.props || {},
                    A = z.children,
                    B = m(z, ['children']),
                    C = c.props || {},
                    D = C.children,
                    E = m(C, ['children']);
                return A && D ? (0, l.shallowEqual)(B, E) && x(A, D) : !A && !D && (0, l.shallowEqual)(B, E);
            }
            return !1;
        },
        z = function(a, b) {
            var A = [],
                B = {};
            return r(a).forEach(function(a, e) {
                if (w(a))
                    A.push(a);
                else if (a) {
                    var C = o(a.type),
                        D = b[C] || {},
                        E = D.handler,
                        F = D.once;
                    if (E && (!F || !B[C])) {
                        var G = E(a, C, e);
                        A.push(G), B[C] = !0;
                    }
                }
            }), A;
        },
        A = function(a) {
            var B = a && a.type;
            return B && n[B] ? n[B] : null;
        },
        B = function(a, b) {
            return r(b).indexOf(a);
        };
}), d.register('vmqjm', function(a, c) {
    function e(a, b) {
        for (var f in a)
            if ({}.hasOwnProperty.call(a, f) && (!{}.hasOwnProperty.call(b, f) || a[f] !== b[f]))
                return !1;
        for (var g in b)
            if ({}.hasOwnProperty.call(b, g) && !{}.hasOwnProperty.call(a, g))
                return !1;
        return !0;
    }
    b(a.exports, 'shallowEqual', function() {
        return e;
    });
}), d.register('Ab/Ag', function(a, c) {
    b(a.exports, 'RADIAN', function() {
        return h;
    }), b(a.exports, 'polarToCartesian', function() {
        return j;
    }), b(a.exports, 'inRangeOfSector', function() {
        return u;
    });
    d('oskvv'), d('u572v'), d('rR6Py');

    function e(a, b) {
        var f = Object.keys(a);
        if (Object.getOwnPropertySymbols) {
            var g = Object.getOwnPropertySymbols(a);
            b && (g = g.filter(function(b) {
                return Object.getOwnPropertyDescriptor(a, b).enumerable;
            })), f.push.apply(f, g);
        }
        return f;
    }

    function f(a) {
        for (var g = 1; g < h.length; g++) {
            var h = null != h[g] ? h[g] : {};
            g % 2 ? e(Object(h), !0).forEach(function(g) {
                g(a, g, h[g]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(h)) : e(Object(h)).forEach(function(g) {
                Object.defineProperty(a, g, Object.getOwnPropertyDescriptor(h, g));
            });
        }
        return a;
    }

    function g(a, b, c) {
        return b in a ? Object.defineProperty(a, b, {
            value: c,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : a[b] = c, a;
    }
    var h = Math.PI / 180,
        i = function(a) {
            return 180 * a / Math.PI;
        },
        j = function(a, b, c, d) {
            return {
                x: a + Math.cos(-h * d) * c,
                y: b + Math.sin(-h * d) * c
            };
        },
        k = function(a, b) {
            var l, m, n, o, p, q, r = a.x,
                s = a.y,
                t = b.cx,
                u = b.cy,
                v = (m = {
                    x: t,
                    y: u
                }, n = (l = {
                    x: r,
                    y: s
                }).x, o = l.y, p = m.x, q = m.y, Math.sqrt(Math.pow(n - p, 2) + Math.pow(o - q, 2)));
            if (v <= 0)
                return {
                    radius: v
                };
            var w = (r - t) / v,
                x = Math.acos(w);
            return s > u && (x = 2 * Math.PI - x), {
                radius: v,
                angle: i(x),
                angleInRadian: x
            };
        },
        l = function(a, b) {
            var m = b.startAngle,
                n = b.endAngle,
                o = Math.floor(m / 360),
                p = Math.floor(n / 360);
            return a + 360 * Math.min(o, p);
        },
        m = function(a, b) {
            var n = a.x,
                o = a.y,
                p = k({
                    x: n,
                    y: o
                }, b),
                q = p.radius,
                r = p.angle,
                s = b.innerRadius,
                t = b.outerRadius;
            if (q < s || q > t)
                return !1;
            if (0 === q)
                return !0;
            var u, v = function(a) {
                    var w = a.startAngle,
                        x = a.endAngle,
                        y = Math.floor(w / 360),
                        z = Math.floor(x / 360),
                        A = Math.min(y, z);
                    return {
                        startAngle: w - 360 * A,
                        endAngle: x - 360 * A
                    };
                }(b),
                w = v.startAngle,
                x = v.endAngle,
                y = z;
            if (w <= x) {
                for (; y > x;)
                    y -= 360;
                for (; y < w;)
                    y += 360;
                u = y >= w && y <= x;
            } else {
                for (; y > w;)
                    y -= 360;
                for (; y < x;)
                    y += 360;
                u = y >= x && y <= w;
            }
            return u ? f(f({}, b), {}, {
                radius: q,
                angle: l(y, b)
            }) : null;
        };
}), d.register('rR6Py', function(c, N) {
    b(c.exports, 'getValueByDataKey', function() {
        return H;
    }), b(c.exports, 'getDomainOfDataByKey', function() {
        return I;
    }), b(c.exports, 'calculateActiveTickIndex', function() {
        return J;
    }), b(c.exports, 'getMainColorOfGraphicItem', function() {
        return K;
    }), b(c.exports, 'getLegendProps', function() {
        return L;
    }), b(c.exports, 'getBarSizeList', function() {
        return M;
    }), b(c.exports, 'getBarPosition', function() {
        return N;
    }), b(c.exports, 'appendOffsetOfLegend', function() {
        return O;
    }), b(c.exports, 'parseErrorBarsOfAxis', function() {
        return Q;
    }), b(c.exports, 'getDomainOfItemsWithSameAxis', function() {
        return R;
    }), b(c.exports, 'isCategoricalAxis', function() {
        return S;
    }), b(c.exports, 'getCoordinatesOfGrid', function() {
        return T;
    }), b(c.exports, 'getTicksOfAxis', function() {
        return U;
    }), b(c.exports, 'combineEventHandlers', function() {
        return V;
    }), b(c.exports, 'parseScale', function() {
        return W;
    }), b(c.exports, 'checkDomainOfScale', function() {
        return Y;
    }), b(c.exports, 'findPositionOfBar', function() {
        return Z;
    }), b(c.exports, 'truncateByDomain', function() {
        return $;
    }), b(c.exports, 'getStackGroupsByAxisId', function() {
        return bb;
    }), b(c.exports, 'getTicksOfScale', function() {
        return cb;
    }), b(c.exports, 'getCateCoordinateOfBar', function() {
        return db;
    }), b(c.exports, 'getBaseValueOfBar', function() {
        return eb;
    }), b(c.exports, 'getStackedDataOfItem', function() {
        return fb;
    }), b(c.exports, 'getDomainOfStackGroups', function() {
        return gb;
    }), b(c.exports, 'parseSpecifiedDomain', function() {
        return jb;
    }), b(c.exports, 'getBandSizeOfAxis', function() {
        return kb;
    }), b(c.exports, 'parseDomainOfCategoryAxis', function() {
        return lb;
    }), b(c.exports, 'getTooltipItem', function() {
        return mb;
    });
    var e = d('3MMPD'),
        f = d('jC0sk'),
        g = d('TqAe3'),
        h = d('U7pAS'),
        i = d('zG8Lj'),
        j = d('JslBt0'),
        k = d('9iH1B'),
        l = d('WkRnx'),
        m = d('CRi66'),
        n = d('tax32'),
        o = d('G5U2X'),
        p = d('oskvv');
    d('A7oUF');
    var q = d('RutZH'),
        r = d('vpkdr'),
        s = d('boXMA'),
        t = d('Hn4+g'),
        u = d('8k0DS'),
        v = d('AyfEA'),
        w = d('lCI2/'),
        x = d('BptIn'),
        y = d('u572v'),
        z = d('H2pJ4'),
        A = d('NvaHc'),
        B = d('5AxlR');

    function C(a) {
        return function(a) {
            if (Array.isArray(a))
                return D(a);
        }(a) || function(a) {
            if ('undefined' != typeof Symbol && Symbol.iterator in Object(a))
                return Array.from(a);
        }(a) || function(a, b) {
            if (!a)
                return;
            if ('string' == typeof a)
                return D(a, b);
            var D = Object.prototype.toString.call(a).slice(8, -1);
            'Object' === D && a.constructor && (D = a.constructor.name);
            if ('Map' === D || 'Set' === D)
                return Array.from(a);
            if ('Arguments' === D || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(D))
                return D(a, b);
        }(a) || function() {
            throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }

    function D(a, b) {
        (null == b || b > a.length) && (b = a.length);
        for (var E = 0, F = new Array(b); E < b; E++)
            F[E] = a[E];
        return F;
    }

    function E(a, b) {
        var F = Object.keys(a);
        if (Object.getOwnPropertySymbols) {
            var G = Object.getOwnPropertySymbols(a);
            b && (G = G.filter(function(b) {
                return Object.getOwnPropertyDescriptor(a, b).enumerable;
            })), F.push.apply(F, G);
        }
        return F;
    }

    function F(a) {
        for (var G = 1; G < h.length; G++) {
            var H = null != h[G] ? h[G] : {};
            G % 2 ? E(Object(H), !0).forEach(function(G) {
                G(a, G, H[G]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(H)) : E(Object(H)).forEach(function(G) {
                Object.defineProperty(a, G, Object.getOwnPropertyDescriptor(H, G));
            });
        }
        return a;
    }

    function G(a, b, c) {
        return b in a ? Object.defineProperty(a, b, {
            value: c,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : a[b] = c, a;
    }

    function H(b, c, d) {
        return a(p)(b) || a(p)(c) ? d : (0, y.isNumOrStr)(c) ? a(o)(b, c, d) : a(n)(c) ? c(b) : d;
    }

    function I(b, c, d, N) {
        var J = a(m)(b, function(a) {
            return H(a, c);
        });
        if ('number' === d) {
            var K = J.filter(function(a) {
                return (0, y.isNumber)(a) || parseFloat(a);
            });
            return K.length ? [
                a(l)(K),
                a(k)(K)
            ] : [
                1 / 0,
                -1 / 0
            ];
        }
        return (N ? J.filter(function(b) {
            return !a(p)(b);
        }) : J).map(function(a) {
            return (0, y.isNumOrStr)(a) || a instanceof Date ? a : '';
        });
    }
    var J = function(a) {
            var K, L = h.length > 1 && void 0 !== h[1] ? h[1] : [],
                M = h.length > 2 ? h[2] : void 0,
                N = h.length > 3 ? h[3] : void 0,
                O = -1,
                P = null !== (K = null == L ? void 0 : L.length) && void 0 !== K ? K : 0;
            if (P > 1) {
                if (N && 'angleAxis' === N.axisType && Math.abs(Math.abs(N.range[1] - N.range[0]) - 360) <= 0.000001)
                    for (var Q = N.range, R = 0; R < P; R++) {
                        var S = R > 0 ? M[R - 1].coordinate : M[P - 1].coordinate,
                            T = M[R].coordinate,
                            U = R >= P - 1 ? M[0].coordinate : M[R + 1].coordinate,
                            V = void 0;
                        if ((0, y.mathSign)(T - S) !== (0, y.mathSign)(U - T)) {
                            var W = [];
                            if ((0, y.mathSign)(U - T) === (0, y.mathSign)(Q[1] - Q[0])) {
                                V = U;
                                var X = T + Q[1] - Q[0];
                                W[0] = Math.min(X, (X + S) / 2), W[1] = Math.max(X, (X + S) / 2);
                            } else {
                                V = S;
                                var Y = U + Q[1] - Q[0];
                                W[0] = Math.min(T, (Y + T) / 2), W[1] = Math.max(T, (Y + T) / 2);
                            }
                            var X = [
                                Math.min(T, (V + T) / 2),
                                Math.max(T, (V + T) / 2)
                            ];
                            if (a > X[0] && a <= X[1] || a >= W[0] && a <= W[1]) {
                                O = M[R].index;
                                break;
                            }
                        } else {
                            var Y = Math.min(S, U),
                                Z = Math.max(S, U);
                            if (a > (Y + T) / 2 && a <= (Z + T) / 2) {
                                O = M[R].index;
                                break;
                            }
                        }
                    }
                else
                    for (var S = 0; S < P; S++)
                        if (0 === S && a <= (L[S].coordinate + L[S + 1].coordinate) / 2 || S > 0 && S < P - 1 && a > (L[S].coordinate + L[S - 1].coordinate) / 2 && a <= (L[S].coordinate + L[S + 1].coordinate) / 2 || S === P - 1 && a > (L[S].coordinate + L[S - 1].coordinate) / 2) {
                            O = L[S].index;
                            break;
                        }
            } else
                O = 0;
            return O;
        },
        K = function(a) {
            var L, M = a.type.displayName,
                N = a.props,
                O = N.stroke,
                P = N.fill;
            switch (M) {
                case 'Line':
                    L = O;
                    break;
                case 'Area':
                case 'Radar':
                    L = O && 'none' !== O ? O : P;
                    break;
                default:
                    L = P;
            }
            return L;
        },
        L = function(a) {
            var M, N = a.children,
                O = a.formattedGraphicalItems,
                P = a.legendWidth,
                Q = a.legendContent,
                R = (0, A.findChildByType)(N, z.Legend.displayName);
            return R ? (M = R.props && R.props.payload ? R.props && R.props.payload : 'children' === Q ? (O || []).reduce(function(a, M) {
                var S = M.item,
                    T = M.props,
                    U = T.sectors || T.data || [];
                return a.concat(U.map(function(a) {
                    return {
                        type: R.props.iconType || S.props.legendType,
                        value: a.name,
                        color: a.fill,
                        payload: a
                    };
                }));
            }, []) : (O || []).map(function(a) {
                var S = a.item,
                    T = S.props,
                    U = T.dataKey,
                    V = T.name,
                    W = T.legendType;
                return {
                    inactive: T.hide,
                    dataKey: U,
                    type: R.props.iconType || W || 'square',
                    color: K(S),
                    value: V || U,
                    payload: S.props
                };
            }), F(F(F({}, R.props), z.Legend.getWithHeight(R, P)), {}, {
                payload: M,
                item: R
            })) : null;
        },
        M = function(b) {
            var N = b.barSize,
                O = b.stackGroups,
                P = void 0 === O ? {} : O;
            if (!P)
                return {};
            for (var Q = {}, R = Object.keys(P), S = 0, T = R.length; S < T; S++)
                for (var U = P[R[S]].stackGroups, V = Object.keys(U), W = 0, X = V.length; W < X; W++) {
                    var Y = U[V[W]],
                        Z = Y.items,
                        $ = Y.cateAxisId,
                        _ = Z.filter(function(a) {
                            return (0, A.getDisplayName)(a.type).indexOf('Bar') >= 0;
                        });
                    if (_ && _.length) {
                        var ab = _[0].props.barSize,
                            bb = _[0].props[$];
                        Q[bb] || (Q[bb] = []), Q[bb].push({
                            item: _[0],
                            stackList: _.slice(1),
                            barSize: a(p)(ab) ? N : ab
                        });
                    }
                }
            return Q;
        },
        N = function(a) {
            var O = a.barGap,
                P = a.barCategoryGap,
                Q = a.bandSize,
                R = a.sizeList,
                S = void 0 === R ? [] : R,
                T = a.maxBarSize,
                U = S.length;
            if (U < 1)
                return null;
            var V, W = (0, y.getPercentValue)(O, Q, 0, !0);
            if (S[0].barSize === +S[0].barSize) {
                var X = !1,
                    Y = Q / U,
                    Z = S.reduce(function(a, O) {
                        return a + O.barSize || 0;
                    }, 0);
                (Z += (U - 1) * W) >= Q && (Z -= (U - 1) * W, W = 0), Z >= Q && Y > 0 && (X = !0, Z = U * (Y *= 0.9));
                var $ = {
                    offset: ((Q - Z) / 2 >> 0) - W,
                    size: 0
                };
                V = S.reduce(function(a, O) {
                    var _ = [].concat(C(a), [{
                        item: O.item,
                        position: {
                            offset: $.offset + $.size + W,
                            size: X ? Y : O.barSize
                        }
                    }]);
                    return $ = _[_.length - 1].position, O.stackList && O.stackList.length && O.stackList.forEach(function(a) {
                        _.push({
                            item: a,
                            position: $
                        });
                    }), _;
                }, []);
            } else {
                var _ = (0, y.getPercentValue)(P, Q, 0, !0);
                Q - 2 * _ - (U - 1) * W <= 0 && (W = 0);
                var ab = (Q - 2 * _ - (U - 1) * W) / U;
                ab > 1 && (ab >>= 0);
                var bb = T === +T ? Math.min(ab, T) : ab;
                V = S.reduce(function(a, O, P) {
                    var cb = [].concat(C(a), [{
                        item: O.item,
                        position: {
                            offset: _ + (ab + W) * P + (ab - bb) / 2,
                            size: bb
                        }
                    }]);
                    return O.stackList && O.stackList.length && O.stackList.forEach(function(a) {
                        cb.push({
                            item: a,
                            position: cb[cb.length - 1].position
                        });
                    }), cb;
                }, []);
            }
            return V;
        },
        O = function(a, b, c, d) {
            var P = c.children,
                Q = c.width,
                R = c.margin,
                S = Q - (R.left || 0) - (R.right || 0),
                T = L({
                    children: P,
                    legendWidth: S
                }),
                U = V;
            if (T) {
                var W = d || {},
                    X = T.align,
                    Y = T.verticalAlign,
                    Z = T.layout;
                ('vertical' === Z || 'horizontal' === Z && 'center' === Y) && (0, y.isNumber)(V[X]) && (U = F(F({}, V), {}, G({}, X, U[X] + (W.width || 0)))), ('horizontal' === Z || 'vertical' === Z && 'center' === X) && (0, y.isNumber)(V[Y]) && (U = F(F({}, V), {}, G({}, Y, U[Y] + (W.height || 0))));
            }
            return U;
        },
        P = function(b, c, d, T, e) {
            var Q = c.props.children,
                R = (0, A.findAllByType)(Q, 'ErrorBar').filter(function(b) {
                    return function(b, c, d) {
                        return !!a(p)(c) || ('horizontal' === b ? 'yAxis' === c : 'vertical' === b || 'x' === d ? 'xAxis' === c : 'y' !== d || 'yAxis' === c);
                    }(T, e, b.props.direction);
                });
            if (R && R.length) {
                var S = R.map(function(a) {
                    return a.props.dataKey;
                });
                return b.reduce(function(b, c) {
                    var T = H(c, d, 0),
                        U = a(j)(T) ? [
                            a(l)(T),
                            a(k)(T)
                        ] : [
                            T,
                            T
                        ],
                        V = S.reduce(function(b, d) {
                            var W = H(c, d, 0),
                                X = U[0] - Math.abs(a(j)(W) ? W[0] : W),
                                Y = U[1] + Math.abs(a(j)(W) ? W[1] : W);
                            return [
                                Math.min(X, b[0]),
                                Math.max(Y, b[1])
                            ];
                        }, [
                            1 / 0,
                            -1 / 0
                        ]);
                    return [
                        Math.min(V[0], b[0]),
                        Math.max(V[1], b[1])
                    ];
                }, [
                    1 / 0,
                    -1 / 0
                ]);
            }
            return null;
        },
        Q = function(b, c, d, V, e) {
            var R = c.map(function(a) {
                return P(b, a, d, e, V);
            }).filter(function(b) {
                return !a(p)(b);
            });
            return R && R.length ? R.reduce(function(a, b) {
                return [
                    Math.min(a[0], b[0]),
                    Math.max(a[1], b[1])
                ];
            }, [
                1 / 0,
                -1 / 0
            ]) : null;
        },
        R = function(a, b, c, d, V) {
            var S = b.map(function(b) {
                var T = b.props.dataKey;
                return 'number' === c && T && P(a, b, T, d) || I(a, T, c, V);
            });
            if ('number' === c)
                return T.reduce(function(a, b) {
                    return [
                        Math.min(a[0], b[0]),
                        Math.max(a[1], b[1])
                    ];
                }, [
                    1 / 0,
                    -1 / 0
                ]);
            var T = {};
            return S.reduce(function(a, b) {
                for (var U = 0, V = b.length; U < V; U++)
                    T[b[U]] || (T[b[U]] = !0, a.push(b[U]));
                return a;
            }, []);
        },
        S = function(a, b) {
            return 'horizontal' === a && 'xAxis' === b || 'vertical' === a && 'yAxis' === b || 'centric' === a && 'angleAxis' === b || 'radial' === a && 'radiusAxis' === b;
        },
        T = function(a, b, c) {
            var U, V, W = a.map(function(a) {
                return a.coordinate === b && (U = !0), a.coordinate === c && (V = !0), a.coordinate;
            });
            return U || W.push(b), V || W.push(c), W;
        },
        U = function(a, b, c) {
            if (!a)
                return null;
            var V = a.scale,
                W = a.duplicateDomain,
                X = a.type,
                Y = a.range,
                Z = 'scaleBand' === a.realScaleType ? V.bandwidth() / 2 : 2,
                $ = (b || c) && 'category' === X && V.bandwidth ? V.bandwidth() / Z : 0;
            return $ = 'angleAxis' === a.axisType ? 2 * (0, y.mathSign)(Y[0] - Y[1]) * $ : $, b && (a.ticks || a.niceTicks) ? (a.ticks || a.niceTicks).map(function(a) {
                var _ = W ? W.indexOf(a) : a;
                return {
                    coordinate: V(_) + $,
                    value: a,
                    offset: $
                };
            }) : a.isCategorical && a.categoricalDomain ? a.categoricalDomain.map(function(a, b) {
                return {
                    coordinate: V(a) + $,
                    value: a,
                    index: b,
                    offset: $
                };
            }) : V.ticks && !c ? V.ticks(a.tickCount).map(function(a) {
                return {
                    coordinate: V(a) + $,
                    value: a,
                    offset: $
                };
            }) : V.domain().map(function(a, b) {
                return {
                    coordinate: V(a) + $,
                    value: W ? W[a] : a,
                    index: b,
                    offset: $
                };
            });
        },
        V = function(b, c, d) {
            var W;
            return a(n)(d) ? W = d : a(n)(c) && (W = c), a(n)(b) || W ? function(c, d, e, f) {
                a(n)(b) && b(c, d, e, f), a(n)(W) && W(c, d, e, f);
            } : null;
        },
        W = function(b, c, d) {
            var X = b.scale,
                Y = b.type,
                Z = b.layout,
                $ = b.axisType;
            if ('auto' === X)
                return 'radial' === Z && 'radiusAxis' === $ ? {
                    scale: r.scaleBand(),
                    realScaleType: 'band'
                } : 'radial' === Z && 'angleAxis' === $ ? {
                    scale: r.scaleLinear(),
                    realScaleType: 'linear'
                } : 'category' === Y && c && (c.indexOf('LineChart') >= 0 || c.indexOf('AreaChart') >= 0 || c.indexOf('ComposedChart') >= 0 && !d) ? {
                    scale: r.scalePoint(),
                    realScaleType: 'point'
                } : 'category' === Y ? {
                    scale: r.scaleBand(),
                    realScaleType: 'band'
                } : {
                    scale: r.scaleLinear(),
                    realScaleType: 'linear'
                };
            if (a(i)(X)) {
                var _ = 'scale'.concat(a(h)(X));
                return {
                    scale: (r[_] || r.scalePoint)(),
                    realScaleType: r[_] ? _ : 'point'
                };
            }
            return a(n)(X) ? {
                scale: X
            } : {
                scale: r.scalePoint(),
                realScaleType: 'point'
            };
        },
        X = 0.0001,
        Y = function(a) {
            var Z = a.domain();
            if (Z && !(Z.length <= 2)) {
                var $ = Z.length,
                    _ = a.range(),
                    ab = Math.min(_[0], _[1]) - X,
                    bb = Math.max(_[0], _[1]) + X,
                    cb = a(Z[0]),
                    db = a(Z[$ - 1]);
                (cb < ab || cb > bb || db < ab || db > bb) && a.domain([
                    Z[0],
                    Z[$ - 1]
                ]);
            }
        },
        Z = function(a, b) {
            if (!a)
                return null;
            for (var $ = 0, _ = a.length; $ < _; $++)
                if (a[$].item === b)
                    return a[$].position;
            return null;
        },
        $ = function(a, b) {
            if (!b || 2 !== b.length || !(0, y.isNumber)(b[0]) || !(0, y.isNumber)(b[1]))
                return a;
            var _ = Math.min(b[0], b[1]),
                ab = Math.max(b[0], b[1]),
                bb = [
                    a[0],
                    a[1]
                ];
            return (!(0, y.isNumber)(a[0]) || a[0] < _) && (bb[0] = _), (!(0, y.isNumber)(a[1]) || a[1] > ab) && (bb[1] = ab), bb[0] > ab && (bb[0] = ab), bb[1] < _ && (bb[1] = _), bb;
        },
        _ = {
            sign: function(b) {
                var ab = b.length;
                if (!(ab <= 0))
                    for (var bb = 0, cb = b[0].length; bb < cb; ++bb)
                        for (var db = 0, eb = 0, fb = 0; fb < ab; ++fb) {
                            var gb = a(g)(b[fb][bb][1]) ? b[fb][bb][0] : b[fb][bb][1];
                            gb >= 0 ? (b[fb][bb][0] = db, b[fb][bb][1] = db + gb, db = b[fb][bb][1]) : (b[fb][bb][0] = eb, b[fb][bb][1] = eb + gb, eb = b[fb][bb][1]);
                        }
            },
            expand: t.default,
            none: u.default,
            silhouette: v.default,
            wiggle: w.default,
            positive: function(b) {
                var ab = b.length;
                if (!(ab <= 0))
                    for (var bb = 0, cb = b[0].length; bb < cb; ++bb)
                        for (var db = 0, eb = 0; eb < ab; ++eb) {
                            var fb = a(g)(b[eb][bb][1]) ? b[eb][bb][0] : b[eb][bb][1];
                            fb >= 0 ? (b[eb][bb][0] = db, b[eb][bb][1] = db + fb, db = b[eb][bb][1]) : (b[eb][bb][0] = 0, b[eb][bb][1] = 0);
                        }
            }
        },
        ab = function(a, b, c) {
            var bb = b.map(function(a) {
                return a.props.dataKey;
            });
            return (0, s.default)().keys(bb).value(function(a, b) {
                return +H(a, b, 0);
            }).order(x.default).offset(_[c])(a);
        },
        bb = function(a, b, c, d, db, e) {
            if (!a)
                return null;
            var cb = (e ? b.reverse() : b).reduce(function(a, b) {
                var db = b.props,
                    eb = db.stackId;
                if (db.hide)
                    return a;
                var fb = b.props[c],
                    gb = a[fb] || {
                        hasStack: !1,
                        stackGroups: {}
                    };
                if ((0, y.isNumOrStr)(eb)) {
                    var hb = gb.stackGroups[eb] || {
                        numericAxisId: c,
                        cateAxisId: d,
                        items: []
                    };
                    hb.items.push(b), gb.hasStack = !0, gb.stackGroups[eb] = hb;
                } else
                    gb.stackGroups[(0, y.uniqueId)('_stackId_')] = {
                        numericAxisId: c,
                        cateAxisId: d,
                        items: [b]
                    };
                return F(F({}, a), {}, G({}, fb, gb));
            }, {});
            return Object.keys(cb).reduce(function(b, e) {
                var db = cb[e];
                return db.hasStack && (db.stackGroups = Object.keys(db.stackGroups).reduce(function(b, e) {
                    var eb = db.stackGroups[e];
                    return F(F({}, b), {}, G({}, e, {
                        numericAxisId: c,
                        cateAxisId: d,
                        items: eb.items,
                        stackedData: ab(a, eb.items, eb)
                    }));
                }, {})), F(F({}, b), {}, G({}, e, db));
            }, {});
        },
        cb = function(b, c) {
            var db = c.realScaleType,
                eb = c.type,
                fb = c.tickCount,
                gb = c.originalDomain,
                hb = c.allowDecimals,
                ib = db || c.scale;
            if ('auto' !== ib && 'linear' !== ib)
                return null;
            if (fb && 'number' === eb && gb && ('auto' === gb[0] || 'auto' === gb[1])) {
                var jb = b.domain();
                if (!jb.length)
                    return null;
                var kb = (0, q.getNiceTickValues)(jb, fb, hb);
                return b.domain(function(b, c) {
                    return 'number' === c ? [
                        a(l)(b),
                        a(k)(b)
                    ] : b;
                }(kb, eb)), {
                    niceTicks: kb
                };
            }
            if (fb && 'number' === eb) {
                var jb = b.domain();
                return {
                    niceTicks: (0, q.getTickValuesFixedDomain)(jb, fb, hb)
                };
            }
            return null;
        },
        db = function(b) {
            var eb = b.axis,
                fb = b.ticks,
                gb = b.offset,
                hb = b.bandSize,
                ib = b.entry,
                jb = b.index;
            if ('category' === eb.type)
                return fb[jb] ? fb[jb].coordinate + gb : null;
            var kb = H(ib, eb.dataKey, eb.domain[jb]);
            return a(p)(kb) ? null : eb.scale(kb) - hb / 2 + gb;
        },
        eb = function(a) {
            var fb = a.numericAxis,
                gb = fb.scale.domain();
            if ('number' === fb.type) {
                var hb = Math.min(gb[0], gb[1]),
                    ib = Math.max(gb[0], gb[1]);
                return hb <= 0 && ib >= 0 ? 0 : ib < 0 ? ib : hb;
            }
            return gb[0];
        },
        fb = function(a, b) {
            var gb = a.props.stackId;
            if ((0, y.isNumOrStr)(gb)) {
                var hb = b[gb];
                if (hb && hb.items.length) {
                    for (var ib = -1, jb = 0, kb = hb.items.length; jb < kb; jb++)
                        if (hb.items[jb] === a) {
                            ib = jb;
                            break;
                        }
                    return ib >= 0 ? hb.stackedData[ib] : null;
                }
            }
            return null;
        },
        gb = function(b, c, d) {
            return Object.keys(b).reduce(function(kb, e) {
                var hb = b[e].stackedData.reduce(function(b, kb) {
                    var ib = kb.slice(c, d + 1).reduce(function(b, c) {
                        return [
                            a(l)(c.concat([b[0]]).filter(y.isNumber)),
                            a(k)(c.concat([b[1]]).filter(y.isNumber))
                        ];
                    }, [
                        1 / 0,
                        -1 / 0
                    ]);
                    return [
                        Math.min(b[0], ib[0]),
                        Math.max(b[1], ib[1])
                    ];
                }, [
                    1 / 0,
                    -1 / 0
                ]);
                return [
                    Math.min(hb[0], kb[0]),
                    Math.max(hb[1], kb[1])
                ];
            }, [
                1 / 0,
                -1 / 0
            ]).map(function(a) {
                return a === 1 / 0 || a === -1 / 0 ? 0 : a;
            });
        },
        hb = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
        ib = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
        jb = function(b, c, d) {
            if (a(n)(b))
                return b(c, d);
            if (!a(j)(b))
                return c;
            var kb = [];
            if ((0, y.isNumber)(b[0]))
                kb[0] = d ? b[0] : Math.min(b[0], c[0]);
            else if (hb.test(b[0])) {
                var lb = +hb.exec(b[0])[1];
                kb[0] = c[0] - lb;
            } else
                a(n)(b[0]) ? kb[0] = b[0](c[0]) : kb[0] = c[0];
            if ((0, y.isNumber)(b[1]))
                kb[1] = d ? b[1] : Math.max(b[1], c[1]);
            else if (ib.test(b[1])) {
                var lb = +ib.exec(b[1])[1];
                kb[1] = c[1] + lb;
            } else
                a(n)(b[1]) ? kb[1] = b[1](c[1]) : kb[1] = c[1];
            return kb;
        },
        kb = function(b, c, d) {
            if (b && b.scale && b.scale.bandwidth) {
                var lb = b.scale.bandwidth();
                if (!d || lb > 0)
                    return lb;
            }
            if (b && c && c.length >= 2) {
                for (var lb = a(f)(c, function(a) {
                        return a.coordinate;
                    }), mb = 1 / 0, nb = 1, ob = lb.length; nb < ob; nb++) {
                    var pb = lb[nb],
                        qb = lb[nb - 1];
                    mb = Math.min((pb.coordinate || 0) - (qb.coordinate || 0), mb);
                }
                return mb === 1 / 0 ? 0 : mb;
            }
            return d ? void 0 : 0;
        },
        lb = function(b, c, d) {
            return b && b.length ? a(e)(b, a(o)(d, 'type.defaultProps.domain')) ? c : b : c;
        },
        mb = function(a, b) {
            var nb = a.props,
                ob = nb.dataKey,
                pb = nb.name,
                qb = nb.unit,
                rb = nb.formatter,
                sb = nb.tooltipType,
                tb = nb.chartType;
            return F(F({}, (0, B.filterProps)(a)), {}, {
                dataKey: ob,
                unit: qb,
                formatter: rb,
                name: pb || ob,
                color: K(a),
                value: H(b, ob),
                type: sb,
                payload: b,
                chartType: tb
            });
        };
}), d.register('jC0sk', function(a, b) {
    var e = d('UIVJS'),
        f = d('AsiLc'),
        g = d('nmBPb'),
        h = d('0COFM'),
        i = g(function(a, b) {
            if (null == a)
                return [];
            var j = b.length;
            return j > 1 && h(a, b[0], b[1]) ? b = [] : j > 2 && h(b[0], b[1], b[2]) && (b = [b[0]]), f(a, e(b, 1), []);
        });
    a.exports = i;
}), d.register('UIVJS', function(a, b) {
    var e = d('XPQqW0'),
        f = d('8cU91');
    a.exports = function a(b, d, g, h, i) {
        var g = -1,
            h = b.length;
        for (g || (g = f), i || (i = []); ++g < h;) {
            var i = b[g];
            d > 0 && g(i) ? d > 1 ? a(i, d - 1, g, h, i) : e(i, i) : h || (i[i.length] = i);
        }
        return i;
    };
}), d.register('8cU91', function(a, b) {
    var e = d('3bXi3'),
        f = d('UIMEN'),
        g = d('JslBt0'),
        h = e ? e.isConcatSpreadable : void 0;
    a.exports = function(a) {
        return g(a) || f(a) || !!(h && a && a[h]);
    };
}), d.register('AsiLc', function(a, b) {
    var e = d('ejMxi0'),
        f = d('XV6VK'),
        g = d('s7eqU'),
        h = d('INORe'),
        i = d('JJzcR'),
        j = d('HktUq0'),
        k = d('KIKfZ'),
        l = d('+7dOR'),
        m = d('JslBt0');
    a.exports = function(a, b, d) {
        b = b.length ? e(b, function(a) {
            return m(a) ? function(b) {
                return f(b, 1 === a.length ? a[0] : a);
            } : a;
        }) : [l];
        var n = -1;
        b = e(b, j(g));
        var o = h(a, function(a, d, f) {
            return {
                criteria: e(b, function(b) {
                    return b(a);
                }),
                index: ++n,
                value: a
            };
        });
        return i(o, function(a, b) {
            return k(a, b, d);
        });
    };
}), d.register('s7eqU', function(a, b) {
    var e = d('Alywf'),
        f = d('Rjo6T'),
        g = d('+7dOR'),
        h = d('JslBt0'),
        i = d('h6gzV');
    a.exports = function(a) {
        return 'function' == typeof a ? a : null == a ? g : 'object' == typeof a ? h(a) ? f(a[0], a[1]) : e(a) : i(a);
    };
}), d.register('Alywf', function(a, b) {
    var e = d('Tz7sZ'),
        f = d('pEuaO'),
        g = d('qWYYl');
    a.exports = function(a) {
        var h = f(a);
        return 1 == h.length && h[0][2] ? g(h[0][0], h[0][1]) : function(d) {
            return d === a || e(d, a, h);
        };
    };
}), d.register('Tz7sZ', function(a, b) {
    var e = d('Dsrm2'),
        f = d('/sjSW');
    a.exports = function(a, b, d, i) {
        var g = d.length,
            h = i,
            j = !i;
        if (null == a)
            return !h;
        for (a = Object(a); i--;) {
            var k = d[i];
            if (j && k[2] ? k[1] !== a[k[0]] : !(k[0] in a))
                return !1;
        }
        for (; ++i < h;) {
            var k = (k = d[i])[0],
                l = a[k],
                m = k[1];
            if (j && k[2]) {
                if (void 0 === l && !(k in a))
                    return !1;
            } else {
                var n = new e();
                if (i)
                    var o = i(l, m, k, a, b, n);
                if (!(void 0 === o ? f(m, l, 3, i, n) : o))
                    return !1;
            }
        }
        return !0;
    };
}), d.register('pEuaO', function(a, b) {
    var e = d('tl4ix'),
        f = d('QVSv3');
    a.exports = function(a) {
        for (var g = f(a), h = g.length; h--;) {
            var i = g[h],
                j = a[i];
            g[h] = [
                i,
                j,
                e(j)
            ];
        }
        return g;
    };
}), d.register('tl4ix', function(a, b) {
    var e = d('AdPm00');
    a.exports = function(a) {
        return a == a && !e(a);
    };
}), d.register('qWYYl', function(a, b) {
    a.exports = function(a, b) {
        return function(c) {
            return null != c && (c[a] === b && (void 0 !== b || a in Object(c)));
        };
    };
}), d.register('Rjo6T', function(a, b) {
    var e = d('/sjSW'),
        f = d('G5U2X'),
        g = d('o6kAp'),
        h = d('fqJZ3'),
        i = d('tl4ix'),
        j = d('qWYYl'),
        k = d('mtexX');
    a.exports = function(a, b) {
        return h(a) && i(b) ? j(k(a), b) : function(d) {
            var l = f(d, a);
            return void 0 === l && l === b ? g(d, a) : e(b, l, 3);
        };
    };
}), d.register('o6kAp', function(a, b) {
    var e = d('jmrKI'),
        f = d('j1xC1');
    a.exports = function(a, b) {
        return null != a && f(a, b, e);
    };
}), d.register('jmrKI', function(a, b) {
    a.exports = function(a, b) {
        return null != a && b in Object(a);
    };
}), d.register('j1xC1', function(a, b) {
    var e = d('a/pvG'),
        f = d('UIMEN'),
        g = d('JslBt0'),
        h = d('WzPBf0'),
        i = d('cqeNb0'),
        j = d('mtexX');
    a.exports = function(a, b, d) {
        for (var k = -1, l = (b = e(b, a)).length, m = !1; ++k < l;) {
            var n = j(b[k]);
            if (!(m = null != a && d(a, n)))
                break;
            a = a[n];
        }
        return m || ++k != l ? m : !!(l = null == a ? 0 : a.length) && i(l) && h(o, l) && (g(a) || f(a));
    };
}), d.register('+7dOR', function(a, b) {
    a.exports = function(a) {
        return a;
    };
}), d.register('h6gzV', function(a, b) {
    var e = d('8gIck'),
        f = d('DVyjc'),
        g = d('fqJZ3'),
        h = d('mtexX');
    a.exports = function(a) {
        return g(a) ? e(h(a)) : f(a);
    };
}), d.register('8gIck', function(a, b) {
    a.exports = function(a) {
        return function(b) {
            return null == b ? void 0 : b[a];
        };
    };
}), d.register('DVyjc', function(a, b) {
    var e = d('XV6VK');
    a.exports = function(a) {
        return function(b) {
            return e(b, a);
        };
    };
}), d.register('INORe', function(a, b) {
    var e = d('kucTu'),
        f = d('/akpk');
    a.exports = function(a, b) {
        var g = -1,
            h = f(a) ? Array(a.length) : [];
        return e(a, function(a, e, f) {
            h[++g] = b(a, e, f);
        }), h;
    };
}), d.register('kucTu', function(a, b) {
    var e = d('6kX6D'),
        f = d('g6+Pf')(e);
    a.exports = f;
}), d.register('6kX6D', function(a, b) {
    var e = d('T7sJt'),
        f = d('QVSv3');
    a.exports = function(a, b) {
        return a && e(a, b, f);
    };
}), d.register('T7sJt', function(a, b) {
    var e = d('+XN/C')();
    a.exports = e;
}), d.register('+XN/C', function(a, b) {
    a.exports = function(a) {
        return function(b, c, d) {
            for (var e = -1, f = Object(b), g = d(b), h = g.length; h--;) {
                var i = g[a ? h : ++e];
                if (!1 === c(f[i], i, f))
                    break;
            }
            return b;
        };
    };
}), d.register('g6+Pf', function(a, b) {
    var e = d('/akpk');
    a.exports = function(a, b) {
        return function(d, f) {
            if (null == d)
                return d;
            if (!e(d))
                return a(d, f);
            for (var f = d.length, g = b ? f : -1, h = Object(d);
                (b ? g-- : ++g < f) && !1 !== f(h[g], g, h););
            return d;
        };
    };
}), d.register('JJzcR', function(a, b) {
    a.exports = function(a, b) {
        var e = a.length;
        for (a.sort(b); e--;)
            a[e] = a[e].value;
        return a;
    };
}), d.register('KIKfZ', function(a, b) {
    var e = d('XE78Q');
    a.exports = function(a, b, d) {
        for (var f = -1, g = a.criteria, h = b.criteria, i = g.length, j = d.length; ++f < i;) {
            var k = e(g[f], h[f]);
            if (k)
                return f >= j ? k : k * ('desc' == d[f] ? -1 : 1);
        }
        return a.index - b.index;
    };
}), d.register('XE78Q', function(a, b) {
    var e = d('ZYTFk');
    a.exports = function(a, b) {
        if (a !== b) {
            var f = void 0 !== a,
                g = null === a,
                h = a == a,
                i = e(a),
                j = void 0 !== b,
                k = null === b,
                l = b == b,
                m = e(b);
            if (!k && !m && !i && a > b || i && j && l && !k && !m || g && j && l || !f && l || !h)
                return 1;
            if (!g && !i && !m && a < b || m && f && h && !g && !i || k && f && h || !j && h || !l)
                return -1;
        }
        return 0;
    };
}), d.register('nmBPb', function(a, b) {
    var e = d('+7dOR'),
        f = d('rAvdx'),
        g = d('VxgH3');
    a.exports = function(a, b) {
        return g(f(a, b, e), a + '');
    };
}), d.register('rAvdx', function(a, b) {
    var e = d('4TFIq'),
        f = Math.max;
    a.exports = function(a, b, d) {
        return b = f(void 0 === b ? a.length - 1 : b, 0),
            function() {
                for (var g = h, i = -1, j = f(g.length - b, 0), k = Array(j); ++i < j;)
                    k[i] = g[b + i];
                i = -1;
                for (var l = Array(b + 1); ++i < b;)
                    l[i] = g[i];
                return l[b] = d(k), e(a, this, l);
            };
    };
}), d.register('4TFIq', function(a, b) {
    a.exports = function(a, b, c) {
        switch (c.length) {
            case 0:
                return a.call(b);
            case 1:
                return a.call(b, c[0]);
            case 2:
                return a.call(b, c[0], c[1]);
            case 3:
                return a.call(b, c[0], c[1], c[2]);
        }
        return a.apply(b, c);
    };
}), d.register('VxgH3', function(a, b) {
    var e = d('Ii9iJ'),
        f = d('fifui')(e);
    a.exports = f;
}), d.register('Ii9iJ', function(a, b) {
    var e = d('L8PwY'),
        f = d('suJ8/'),
        g = d('+7dOR'),
        h = f ? function(a, b) {
            return f(a, 'toString', {
                configurable: !0,
                enumerable: !1,
                value: e(b),
                writable: !0
            });
        } : g;
    a.exports = h;
}), d.register('L8PwY', function(a, b) {
    a.exports = function(a) {
        return function() {
            return a;
        };
    };
}), d.register('suJ8/', function(a, b) {
    var e = d('0hU89'),
        f = function() {
            try {
                var g = e(Object, 'defineProperty');
                return g({}, '', {}), g;
            } catch (a) {}
        }();
    a.exports = f;
}), d.register('fifui', function(a, b) {
    var e = Date.now;
    a.exports = function(a) {
        var f = 0,
            g = 0;
        return function() {
            var h = e(),
                i = 16 - (h - g);
            if (g = h, i > 0) {
                if (++f >= 800)
                    return arguments[0];
            } else
                f = 0;
            return a.apply(void 0, arguments);
        };
    };
}), d.register('0COFM', function(a, b) {
    var e = d('EEIl90'),
        f = d('/akpk'),
        g = d('WzPBf0'),
        h = d('AdPm00');
    a.exports = function(a, b, d) {
        if (!h(d))
            return !1;
        var i = typeof b;
        return !!('number' == i ? f(d) && g(b, d.length) : 'string' == i && b in d) && e(d[b], a);
    };
}), d.register('U7pAS', function(a, b) {
    var e = d('Gz6zx')('toUpperCase');
    a.exports = e;
}), d.register('Gz6zx', function(a, b) {
    var e = d('aDjqO'),
        f = d('hDcij'),
        g = d('voZzN'),
        h = d('GOmcy');
    a.exports = function(a) {
        return function(b) {
            b = h(b);
            var i = f(b) ? g(b) : void 0,
                j = i ? i[0] : b.charAt(0),
                k = i ? e(i, 1).join('') : b.slice(1);
            return j[a]() + k;
        };
    };
}), d.register('aDjqO', function(a, b) {
    var e = d('hTiX4');
    a.exports = function(a, b, d) {
        var f = a.length;
        return d = void 0 === d ? f : d, !b && d >= f ? a : e(a, b, d);
    };
}), d.register('hTiX4', function(a, b) {
    a.exports = function(a, b, c) {
        var e = -1,
            f = a.length;
        b < 0 && (b = -b > f ? 0 : f + b), (c = c > f ? f : c) < 0 && (c += f), f = b > c ? 0 : c - b >>> 0, b >>>= 0;
        for (var g = Array(f); ++e < f;)
            g[e] = a[e + b];
        return g;
    };
}), d.register('hDcij', function(a, b) {
    var e = RegExp('[\\u200d\uD800-\uDFFF\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]');
    a.exports = function(a) {
        return e.test(a);
    };
}), d.register('voZzN', function(a, b) {
    var e = d('P9WzK'),
        f = d('hDcij'),
        g = d('rXvt1');
    a.exports = function(a) {
        return f(a) ? g(a) : e(a);
    };
}), d.register('P9WzK', function(a, b) {
    a.exports = function(a) {
        return a.split('');
    };
}), d.register('rXvt1', function(a, b) {
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
        o = RegExp(g + '(?=' + g + ')|' + n + m, 'g');
    a.exports = function(a) {
        return a.match(o) || [];
    };
}), d.register('9iH1B', function(a, b) {
    var e = d('yKG3B'),
        f = d('/20CZ'),
        g = d('+7dOR');
    a.exports = function(a) {
        return a && a.length ? e(a, g, f) : void 0;
    };
}), d.register('yKG3B', function(a, b) {
    var e = d('ZYTFk');
    a.exports = function(a, b, d) {
        for (var f = -1, g = a.length; ++f < g;) {
            var h = a[f],
                i = b(h);
            if (null != i && (void 0 === j ? i == i && !e(i) : d(i, j)))
                var j = k,
                    l = m;
        }
        return i;
    };
}), d.register('/20CZ', function(a, b) {
    a.exports = function(a, b) {
        return a > b;
    };
}), d.register('WkRnx', function(a, b) {
    var e = d('yKG3B'),
        f = d('JoyDc'),
        g = d('+7dOR');
    a.exports = function(a) {
        return a && a.length ? e(a, g, f) : void 0;
    };
}), d.register('JoyDc', function(a, b) {
    a.exports = function(a, b) {
        return a < b;
    };
}), d.register('CRi66', function(a, b) {
    var e = d('UIVJS'),
        f = d('sF07k');
    a.exports = function(a, b) {
        return e(f(a, b), 1);
    };
}), d.register('sF07k', function(a, b) {
    var e = d('ejMxi0'),
        f = d('s7eqU'),
        g = d('INORe'),
        h = d('JslBt0');
    a.exports = function(a, b) {
        return (h(a) ? e : g)(a, f(b, 3));
    };
}), d.register('A7oUF', function(a, c) {
    b(a.exports, 'getNiceTickValues', function() {
        return d('RutZH').getNiceTickValues;
    }), b(a.exports, 'getTickValuesFixedDomain', function() {
        return d('RutZH').getTickValuesFixedDomain;
    });
    d('RutZH');
}), d.register('RutZH', function(c, l) {
    b(c.exports, 'getNiceTickValues', function() {
        return p;
    }), b(c.exports, 'getTickValuesFixedDomain', function() {
        return x;
    });
    var e = d('WsNZy'),
        f = d('ntzYU'),
        g = d('wSjjH');

    function h(a) {
        return function(a) {
            if (Array.isArray(a))
                return k(a);
        }(a) || function(a) {
            if ('undefined' != typeof Symbol && Symbol.iterator in Object(a))
                return Array.from(a);
        }(a) || j(a) || function() {
            throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }

    function i(a, b) {
        return function(a) {
            if (Array.isArray(a))
                return a;
        }(a) || function(a, b) {
            if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(a)))
                return;
            var j = [],
                k = !0,
                l = !1,
                m = void 0;
            try {
                for (var n, o = a[Symbol.iterator](); !(k = (n = o.next()).done) && (j.push(n.value), !b || j.length !== b); k = !0);
            } catch (a) {
                l = !0, m = a;
            } finally {
                try {
                    k || null == g.return || g.return();
                } finally {
                    if (l)
                        throw m;
                }
            }
            return j;
        }(a, b) || j(a, b) || function() {
            throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }

    function j(a, b) {
        if (a) {
            if ('string' == typeof a)
                return k(a, b);
            var k = Object.prototype.toString.call(a).slice(8, -1);
            return 'Object' === k && a.constructor && (k = a.constructor.name), 'Map' === k || 'Set' === k ? Array.from(a) : 'Arguments' === k || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(k) ? k(a, b) : void 0;
        }
    }

    function k(a, b) {
        (null == b || b > a.length) && (b = a.length);
        for (var l = 0, m = new Array(b); l < b; l++)
            m[l] = a[l];
        return m;
    }

    function l(a) {
        var m = i(a, 2),
            n = m[0],
            o = m[1],
            p = q,
            r = s;
        return q > s && (p = s, r = q), [
            p,
            r
        ];
    }

    function m(b, c, d) {
        if (b.lte(0))
            return new(a(e))(0);
        var n = g.default.getDigitCount(b.toNumber()),
            o = new(a(e))(10).pow(n),
            p = b.div(o),
            q = 1 !== n ? 0.05 : 0.1,
            r = new(a(e))(Math.ceil(p.div(q).toNumber())).add(d).mul(q).mul(o);
        return c ? r : new(a(e))(Math.ceil(r));
    }

    function n(b, c, d) {
        var o = 1,
            p = new(a(e))(b);
        if (!p.isint() && d) {
            var q = Math.abs(b);
            q < 1 ? (o = new(a(e))(10).pow(g.default.getDigitCount(b) - 1), p = new(a(e))(Math.floor(p.div(o).toNumber())).mul(o)) : q > 1 && (p = new(a(e))(Math.floor(b)));
        } else
            0 === b ? p = new(a(e))(Math.floor((c - 1) / 2)) : d || (p = new(a(e))(Math.floor(b)));
        var q = Math.floor((c - 1) / 2);
        return (0, f.compose)((0, f.map)(function(b) {
            return p.add(new(a(e))(b - q).mul(o)).toNumber();
        }), f.range)(0, c);
    }

    function o(b, c, d, s) {
        var p = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        if (!Number.isFinite((c - b) / (d - 1)))
            return {
                step: new(a(e))(0),
                tickMin: new(a(e))(0),
                tickMax: new(a(e))(0)
            };
        var q, r = m(new(a(e))(c).sub(b).div(d - 1), s, p);
        q = b <= 0 && c >= 0 ? new(a(e))(0) : (q = new(a(e))(b).add(c).div(2)).sub(new(a(e))(q).mod(r));
        var s = Math.ceil(q.sub(b).div(r).toNumber()),
            t = Math.ceil(new(a(e))(c).sub(q).div(r).toNumber()),
            u = s + t + 1;
        return u > d ? o(b, c, d, s, p + 1) : (u < d && (t = c > 0 ? t + (d - u) : t, s = c > 0 ? s : s + (d - u)), {
            step: r,
            tickMin: q.sub(new(a(e))(s).mul(r)),
            tickMax: q.add(new(a(e))(t).mul(r))
        });
    }
    var p = (0, f.memoize)(function(b) {
            var q = i(b, 2),
                r = q[0],
                s = q[1],
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
                u = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                v = Math.max(t, 2),
                w = l([
                    r,
                    s
                ]),
                x = i(w, 2),
                y = x[0],
                z = x[1];
            if (y === -1 / 0 || z === 1 / 0) {
                var A = z === 1 / 0 ? [y].concat(h((0, f.range)(0, t - 1).map(function() {
                    return 1 / 0;
                }))) : [].concat(h((0, f.range)(0, t - 1).map(function() {
                    return -1 / 0;
                })), [z]);
                return r > s ? (0, f.reverse)(A) : A;
            }
            if (y === z)
                return n(y, t, u);
            var A = o(y, z, v, u),
                B = A.step,
                C = A.tickMin,
                D = A.tickMax,
                E = g.default.rangeStep(C, D.add(new(a(e))(0.1).mul(B)), B);
            return r > s ? (0, f.reverse)(E) : E;
        }),
        q = ((0, f.memoize)(function(b) {
            var r = i(b, 2),
                s = r[0],
                t = r[1],
                u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
                v = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                w = Math.max(u, 2),
                x = l([
                    s,
                    t
                ]),
                y = i(x, 2),
                z = y[0],
                A = y[1];
            if (z === -1 / 0 || A === 1 / 0)
                return [
                    s,
                    t
                ];
            if (z === A)
                return n(z, u, v);
            var B = m(new(a(e))(A).sub(z).div(w - 1), v, 0),
                C = (0, f.compose)((0, f.map)(function(b) {
                    return new(a(e))(z).add(new(a(e))(b).mul(B)).toNumber();
                }), f.range),
                D = C(0, w).filter(function(a) {
                    return a >= z && a <= A;
                });
            return s > t ? (0, f.reverse)(D) : D;
        }), (0, f.memoize)(function(b, c) {
            var r = i(b, 2),
                s = r[0],
                t = r[1],
                u = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                v = l([
                    s,
                    t
                ]),
                w = i(v, 2),
                x = w[0],
                y = w[1];
            if (x === -1 / 0 || y === 1 / 0)
                return [
                    s,
                    t
                ];
            if (x === y)
                return [x];
            var z = Math.max(c, 2),
                A = m(new(a(e))(y).sub(x).div(z - 1), u, 0),
                B = [].concat(h(g.default.rangeStep(new(a(e))(x), new(a(e))(y).sub(new(a(e))(0.99).mul(A)), A)), [y]);
            return s > t ? (0, f.reverse)(B) : B;
        }));
}), d.register('WsNZy', function(a, b) {
    ! function(b) {
        var e, f = 1000000000,
            g = {
                precision: 20,
                rounding: 4,
                toExpNeg: -7,
                toExpPos: 21,
                LN10: '2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286'
            },
            h = !0,
            i = '[DecimalError] ',
            j = i + 'Invalid argument: ',
            k = i + 'Exponent out of range: ',
            l = Math.floor,
            m = Math.pow,
            n = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
            o = 10000000,
            p = 9007199254740991,
            q = l(1286742750677284.5),
            r = {};

        function s(a, b) {
            var t, u, v, w, x, y, z, A, B = a.constructor,
                C = B.precision;
            if (!a.s || !b.s)
                return b.s || (b = new B(a)), h ? C(b, C) : b;
            if (z = a.d, A = b.d, x = a.e, v = b.e, z = z.slice(), w = x - v) {
                for (w < 0 ? (u = z, w = -w, y = A.length) : (u = A, v = x, y = z.length), w > (y = (x = Math.ceil(C / 7)) > y ? x + 1 : y + 1) && (w = y, u.length = 1), u.reverse(); w--;)
                    u.push(0);
                u.reverse();
            }
            for ((y = z.length) - (w = A.length) < 0 && (w = y, u = A, A = z, z = u), t = 0; w;)
                t = (z[--w] = z[w] + A[w] + t) / o | 0, z[w] %= o;
            for (t && (z.unshift(t), ++v), y = z.length; 0 == z[--y];)
                z.pop();
            return b.d = z, b.e = v, h ? C(b, C) : b;
        }

        function t(a, b, e) {
            if (a !== ~~a || a < b || a > e)
                throw Error(j + a);
        }

        function u(a) {
            var v, w, x, y = a.length - 1,
                z = '',
                A = a[0];
            if (y > 0) {
                for (z += A, v = 1; v < y; v++)
                    (w = 7 - (x = a[v] + '').length) && (z += M(w)), z += x;
                (w = 7 - (x = (A = a[v]) + '').length) && (z += M(w));
            } else if (0 === A)
                return '0';
            for (; A % 10 == 0;)
                A /= 10;
            return z + A;
        }
        r.absoluteValue = r.abs = function() {
            var v = new this.constructor(this);
            return v.s && (v.s = 1), v;
        }, r.comparedTo = r.cmp = function(a) {
            var v, w, x, y, z = this;
            if (a = new z.constructor(a), z.s !== a.s)
                return z.s || -a.s;
            if (z.e !== a.e)
                return z.e > a.e ^ z.s < 0 ? 1 : -1;
            for (v = 0, w = (x = z.d.length) < (y = a.d.length) ? x : y; v < w; ++v)
                if (z.d[v] !== a.d[v])
                    return z.d[v] > a.d[v] ^ z.s < 0 ? 1 : -1;
            return x === y ? 0 : x > y ^ z.s < 0 ? 1 : -1;
        }, r.decimalPlaces = r.dp = function() {
            var v = this,
                w = v.d.length - 1,
                x = 7 * (w - v.e);
            if (w = v.d[w])
                for (; w % 10 == 0; w /= 10)
                    x--;
            return x < 0 ? 0 : x;
        }, r.dividedBy = r.div = function(a) {
            return v(this, new this.constructor(a));
        }, r.dividedToIntegerBy = r.idiv = function(a) {
            var v = this.constructor;
            return C(v(this, new v(a), 0, 1), v.precision);
        }, r.equals = r.eq = function(a) {
            return !this.cmp(a);
        }, r.exponent = function() {
            return x(this);
        }, r.greaterThan = r.gt = function(a) {
            return this.cmp(a) > 0;
        }, r.greaterThanOrEqualTo = r.gte = function(a) {
            return this.cmp(a) >= 0;
        }, r.isInteger = r.isint = function() {
            return this.e > this.d.length - 2;
        }, r.isNegative = r.isneg = function() {
            return this.s < 0;
        }, r.isPositive = r.ispos = function() {
            return this.s > 0;
        }, r.isZero = function() {
            return 0 === this.s;
        }, r.lessThan = r.lt = function(a) {
            return this.cmp(a) < 0;
        }, r.lessThanOrEqualTo = r.lte = function(a) {
            return this.cmp(a) < 1;
        }, r.logarithm = r.log = function(a) {
            var v, w = this,
                x = w.constructor,
                y = x.precision,
                z = y + 5;
            if (void 0 === a)
                a = new x(10);
            else if ((a = new x(a)).s < 1 || a.eq(e))
                throw Error(i + 'NaN');
            if (w.s < 1)
                throw Error(i + (w.s ? 'NaN' : '-Infinity'));
            return w.eq(e) ? new x(0) : (h = !1, v = v(N(w, z), N(a, z), z), h = !0, C(v, y));
        }, r.minus = r.sub = function(a) {
            var v = this;
            return a = new v.constructor(a), v.s == a.s ? P(v, a) : s(v, (a.s = -a.s, a));
        }, r.modulo = r.mod = function(a) {
            var v, w = this,
                x = w.constructor,
                y = x.precision;
            if (!(a = new x(a)).s)
                throw Error(i + 'NaN');
            return w.s ? (h = !1, v = v(w, a, 0, 1).times(a), h = !0, w.minus(v)) : C(new x(w), y);
        }, r.naturalExponential = r.exp = function() {
            return K(this);
        }, r.naturalLogarithm = r.ln = function() {
            return N(this);
        }, r.negated = r.neg = function() {
            var v = new this.constructor(this);
            return v.s = -v.s || 0, v;
        }, r.plus = r.add = function(a) {
            var v = this;
            return a = new v.constructor(a), v.s == a.s ? s(v, a) : P(v, (a.s = -a.s, a));
        }, r.precision = r.sd = function(a) {
            var v, w, x, y = this;
            if (void 0 !== a && a !== !!a && 1 !== a && 0 !== a)
                throw Error(j + a);
            if (v = x(y) + 1, w = 7 * (x = y.d.length - 1) + 1, x = y.d[x]) {
                for (; x % 10 == 0; x /= 10)
                    w--;
                for (x = y.d[0]; x >= 10; x /= 10)
                    w++;
            }
            return a && v > w ? v : w;
        }, r.squareRoot = r.sqrt = function() {
            var v, w, x, y, z, A, B, C = this,
                D = C.constructor;
            if (C.s < 1) {
                if (!C.s)
                    return new D(0);
                throw Error(i + 'NaN');
            }
            for (v = x(C), h = !1, 0 == (z = Math.sqrt(+C)) || z == 1 / 0 ? (((w = u(C.d)).length + v) % 2 == 0 && (w += '0'), z = Math.sqrt(w), v = l((v + 1) / 2) - (v < 0 || v % 2), y = new D(w = z == 1 / 0 ? '5e' + v : (w = z.toExponential()).slice(0, w.indexOf('e') + 1) + v)) : y = new D(z.toString()), z = B = (x = D.precision) + 3;;)
                if (y = (A = y).plus(v(C, A, B + 2)).times(0.5), u(A.d).slice(0, B) === (w = u(y.d)).slice(0, B)) {
                    if (w = w.slice(B - 3, B + 1), z == B && '4999' == w) {
                        if (C(A, x + 1, 0), A.times(A).eq(C)) {
                            y = A;
                            break;
                        }
                    } else if ('9999' != w)
                        break;
                    B += 4;
                }
            return h = !0, C(y, x);
        }, r.times = r.mul = function(a) {
            var v, w, x, y, z, A, B, C, D, E = this,
                F = E.constructor,
                G = E.d,
                H = (a = new F(a)).d;
            if (!E.s || !a.s)
                return new F(0);
            for (a.s *= E.s, w = E.e + a.e, (C = G.length) < (D = H.length) && (z = G, G = H, H = z, A = C, C = D, D = A), z = [], x = A = C + D; x--;)
                z.push(0);
            for (x = D; --x >= 0;) {
                for (v = 0, y = C + x; y > x;)
                    B = z[y] + H[x] * G[y - x - 1] + v, z[y--] = B % o | 0, v = B / o | 0;
                z[y] = (z[y] + v) % o | 0;
            }
            for (; !z[--A];)
                z.pop();
            return v ? ++w : z.shift(), a.d = z, a.e = w, h ? C(a, F.precision) : a;
        }, r.toDecimalPlaces = r.todp = function(a, b) {
            var v = this,
                w = v.constructor;
            return v = new w(v), void 0 === a ? v : (t(a, 0, f), void 0 === b ? b = w.rounding : t(b, 0, 8), C(v, a + x(v) + 1, b));
        }, r.toExponential = function(a, b) {
            var v, w = this,
                x = w.constructor;
            return void 0 === a ? v = Q(w, !0) : (t(a, 0, f), void 0 === b ? b = x.rounding : t(b, 0, 8), v = Q(w = C(new x(w), a + 1, b), !0, a + 1)), v;
        }, r.toFixed = function(a, b) {
            var v, w, x = this,
                y = x.constructor;
            return void 0 === a ? Q(x) : (t(a, 0, f), void 0 === b ? b = y.rounding : t(b, 0, 8), v = Q((w = C(new y(x), a + x(x) + 1, b)).abs(), !1, a + x(w) + 1), x.isneg() && !x.isZero() ? '-' + v : v);
        }, r.toInteger = r.toint = function() {
            var v = this,
                w = v.constructor;
            return C(new w(v), x(v) + 1, w.rounding);
        }, r.toNumber = function() {
            return +this;
        }, r.toPower = r.pow = function(a) {
            var v, w, x, y, z, A, B = this,
                C = B.constructor,
                D = +(a = new C(a));
            if (!a.s)
                return new C(e);
            if (!(B = new C(B)).s) {
                if (a.s < 1)
                    throw Error(i + 'Infinity');
                return B;
            }
            if (B.eq(e))
                return B;
            if (x = C.precision, a.eq(e))
                return C(B, x);
            if (A = (v = a.e) >= (w = a.d.length - 1), z = B.s, A) {
                if ((w = D < 0 ? -D : D) <= p) {
                    for (y = new C(e), v = Math.ceil(x / 7 + 4), h = !1; w % 2 && R((y = y.times(B)).d, v), 0 !== (w = l(w / 2));)
                        R((B = B.times(B)).d, v);
                    return h = !0, a.s < 0 ? new C(e).div(y) : C(y, x);
                }
            } else if (z < 0)
                throw Error(i + 'NaN');
            return z = z < 0 && 1 & a.d[Math.max(v, w)] ? -1 : 1, B.s = 1, h = !1, y = a.times(N(B, x + 12)), h = !0, (y = K(y)).s = z, y;
        }, r.toPrecision = function(a, b) {
            var v, w, x = this,
                y = x.constructor;
            return void 0 === a ? w = Q(x, (v = x(x)) <= y.toExpNeg || v >= y.toExpPos) : (t(a, 1, f), void 0 === b ? b = y.rounding : t(b, 0, 8), w = Q(x = C(new y(x), a, b), a <= (v = x(x)) || v <= y.toExpNeg, a)), w;
        }, r.toSignificantDigits = r.tosd = function(a, b) {
            var v = this.constructor;
            return void 0 === a ? (a = v.precision, b = v.rounding) : (t(a, 1, f), void 0 === b ? b = v.rounding : t(b, 0, 8)), C(new v(this), a, b);
        }, r.toString = r.valueOf = r.val = r.toJSON = function() {
            var v = this,
                w = x(v),
                x = v.constructor;
            return Q(v, w <= x.toExpNeg || w >= x.toExpPos);
        };
        var v = function() {
            function w(w, b) {
                var x, y = 0,
                    z = w.length;
                for (w = w.slice(); z--;)
                    x = w[z] * b + y, w[z] = x % o | 0, y = x / o | 0;
                return y && w.unshift(y), w;
            }

            function x(w, x, e, f) {
                var y, z;
                if (e != f)
                    z = e > f ? 1 : -1;
                else
                    for (y = z = 0; y < e; y++)
                        if (w[y] != x[y]) {
                            z = w[y] > x[y] ? 1 : -1;
                            break;
                        }
                return z;
            }

            function y(w, x, y) {
                for (var z = 0; y--;)
                    w[y] -= z, z = w[y] < x[y] ? 1 : 0, w[y] = z * o + w[y] - x[y];
                for (; !w[0] && w.length > 1;)
                    w.shift();
            }
            return function(f, g, h, j) {
                var z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R = f.constructor,
                    S = f.s == g.s ? 1 : -1,
                    T = f.d,
                    U = g.d;
                if (!f.s)
                    return new R(f);
                if (!g.s)
                    throw Error(i + 'Division by zero');
                for (A = f.e - g.e, P = U.length, N = T.length, G = (F = new R(S)).d = [], B = 0; U[B] == (T[B] || 0);)
                    ++B;
                if (U[B] > (T[B] || 0) && --A, (K = null == h ? h = R.precision : j ? h + (x(f) - x(g)) + 1 : h) < 0)
                    return new R(0);
                if (K = K / 7 + 2 | 0, B = 0, 1 == P)
                    for (C = 0, U = U[0], K++;
                        (B < N || C) && K--; B++)
                        L = C * o + (T[B] || 0), G[B] = L / U | 0, C = L % U | 0;
                else {
                    for ((C = o / (U[0] + 1) | 0) > 1 && (U = w(U, C), T = w(T, C), P = U.length, N = T.length), M = P, I = (H = T.slice(0, P)).length; I < P;)
                        H[I++] = 0;
                    (Q = U.slice()).unshift(0), O = U[0], U[1] >= o / 2 && ++O;
                    do {
                        C = 0, (z = x(U, H, P, I)) < 0 ? (J = H[0], P != I && (J = J * o + (H[1] || 0)), (C = J / O | 0) > 1 ? (C >= o && (C = o - 1), 1 == (z = x(D = w(U, C), H, E = D.length, I = H.length)) && (C--, y(D, P < E ? Q : U, E))) : (0 == C && (z = C = 1), D = U.slice()), (E = D.length) < I && D.unshift(0), y(H, D, I), -1 == z && (z = x(U, H, P, I = H.length)) < 1 && (C++, y(H, P < I ? Q : U, I)), I = H.length) : 0 === z && (C++, H = [0]), G[B++] = C, z && H[0] ? H[I++] = T[M] || 0 : (H = [T[M]], I = 1);
                    } while ((M++ < N || void 0 !== H[0]) && K--);
                }
                return G[0] || G.shift(), F.e = A, C(F, j ? h + x(F) + 1 : h);
            };
        }();

        function w(a, b) {
            var x, y, z, A, B, C = 0,
                D = 0,
                E = a.constructor,
                F = E.precision;
            if (x(a) > 16)
                throw Error(k + x(a));
            if (!a.s)
                return new E(e);
            for (null == b ? (h = !1, B = F) : B = b, A = new E(0.03125); a.abs().gte(0.1);)
                a = a.times(A), D += 5;
            for (B += Math.log(m(2, D)) / Math.LN10 * 2 + 5 | 0, x = y = z = new E(e), E.precision = B;;) {
                if (y = C(y.times(a), B), x = x.times(++C), u((A = z.plus(v(y, x, B))).d).slice(0, B) === u(z.d).slice(0, B)) {
                    for (; D--;)
                        z = C(z.times(z), B);
                    return E.precision = F, null == b ? (h = !0, C(z, F)) : z;
                }
                z = A;
            }
        }

        function x(a) {
            for (var y = 7 * a.e, z = a.d[0]; z >= 10; z /= 10)
                y++;
            return y;
        }

        function y(a, b, e) {
            if (b > a.LN10.sd())
                throw h = !0, e && (a.precision = e), Error(i + 'LN10 precision limit exceeded');
            return C(new a(a.LN10), b);
        }

        function z(a) {
            for (var A = ''; a--;)
                A += '0';
            return A;
        }

        function A(a, b) {
            var B, C, D, E, F, G, H, I, J, K = 1,
                L = M,
                N = L.d,
                O = L.constructor,
                P = O.precision;
            if (L.s < 1)
                throw Error(i + (L.s ? 'NaN' : '-Infinity'));
            if (L.eq(e))
                return new O(0);
            if (null == b ? (h = !1, I = P) : I = b, L.eq(10))
                return null == b && (h = !0), y(O, I);
            if (I += 10, O.precision = I, C = (B = u(N)).charAt(0), E = x(L), !(Math.abs(E) < 1500000000000000))
                return H = y(O, I + 2, P).times(E + ''), L = A(new O(C + '.' + B.slice(1)), I - 10).plus(H), O.precision = P, null == b ? (h = !0, C(L, P)) : L;
            for (; C < 7 && 1 != C || 1 == C && B.charAt(1) > 3;)
                C = (B = u((L = L.times(M)).d)).charAt(0), K++;
            for (E = x(L), C > 1 ? (L = new O('0.' + B), E++) : L = new O(C + '.' + B.slice(1)), G = F = L = v(L.minus(e), L.plus(e), I), J = C(L.times(L), I), D = 3;;) {
                if (F = C(F.times(J), I), u((H = G.plus(v(F, new O(D), I))).d).slice(0, I) === u(G.d).slice(0, I))
                    return G = G.times(2), 0 !== E && (G = G.plus(y(O, I + 2, P).times(E + ''))), G = v(G, new O(K), I), O.precision = P, null == b ? (h = !0, C(G, P)) : G;
                G = H, D += 2;
            }
        }

        function B(a, b) {
            var C, D, E;
            for ((C = b.indexOf('.')) > -1 && (b = b.replace('.', '')), (D = b.search(/e/i)) > 0 ? (C < 0 && (C = D), C += +b.slice(D + 1), b = b.substring(0, D)) : C < 0 && (C = b.length), D = 0; 48 === b.charCodeAt(D);)
                ++D;
            for (E = b.length; 48 === b.charCodeAt(E - 1);)
                --E;
            if (b = b.slice(D, E)) {
                if (E -= D, C = C - D - 1, a.e = l(C / 7), a.d = [], D = (C + 1) % 7, C < 0 && (D += 7), D < E) {
                    for (D && a.d.push(+b.slice(0, D)), E -= 7; D < E;)
                        a.d.push(+b.slice(D, D += 7));
                    D = 7 - (b = b.slice(D)).length;
                } else
                    D -= E;
                for (; D--;)
                    b += '0';
                if (a.d.push(+b), h && (a.e > q || a.e < -q))
                    throw Error(k + C);
            } else
                a.s = 0, a.e = 0, a.d = [0];
            return a;
        }

        function C(a, b, e) {
            var D, E, F, G, H, I, J, K, L = a.d;
            for (G = 1, F = L[0]; F >= 10; F /= 10)
                G++;
            if ((D = b - G) < 0)
                D += 7, E = b, J = L[K = 0];
            else {
                if ((K = Math.ceil((D + 1) / 7)) >= (F = L.length))
                    return a;
                for (J = F = L[K], G = 1; F >= 10; F /= 10)
                    G++;
                E = (D %= 7) - 7 + G;
            }
            if (void 0 !== e && (H = J / (F = m(10, G - E - 1)) % 10 | 0, I = b < 0 || void 0 !== L[K + 1] || J % F, I = e < 4 ? (H || I) && (0 == e || e == (a.s < 0 ? 3 : 2)) : H > 5 || 5 == H && (4 == e || I || 6 == e && (D > 0 ? E > 0 ? J / m(10, G - E) : 0 : L[K - 1]) % 10 & 1 || e == (a.s < 0 ? 8 : 7))), b < 1 || !L[0])
                return I ? (F = x(a), L.length = 1, b = b - F - 1, L[0] = m(10, (7 - b % 7) % 7), a.e = l(-b / 7) || 0) : (L.length = 1, L[0] = a.e = a.s = 0), a;
            if (0 == D ? (L.length = K, F = 1, K--) : (L.length = K + 1, F = m(10, 7 - D), L[K] = E > 0 ? (J / m(10, G - E) % m(10, E) | 0) * F : 0), I)
                for (;;) {
                    if (0 == K) {
                        (L[0] += F) == o && (L[0] = 1, ++a.e);
                        break;
                    }
                    if (L[K] += F, L[K] != o)
                        break;
                    L[K--] = 0, F = 1;
                }
            for (D = L.length; 0 === L[--D];)
                L.pop();
            if (h && (a.e > q || a.e < -q))
                throw Error(k + x(a));
            return a;
        }

        function D(a, b) {
            var E, F, G, H, I, J, K, L, M, N, O = a.constructor,
                P = O.precision;
            if (!a.s || !b.s)
                return b.s ? b.s = -b.s : b = new O(a), h ? C(b, P) : b;
            if (K = a.d, N = b.d, F = b.e, L = a.e, K = K.slice(), I = L - F) {
                for ((M = I < 0) ? (E = K, I = -I, J = N.length) : (E = N, F = L, J = K.length), I > (G = Math.max(Math.ceil(P / 7), J) + 2) && (I = G, E.length = 1), E.reverse(), G = I; G--;)
                    E.push(0);
                E.reverse();
            } else {
                for ((M = (G = K.length) < (J = N.length)) && (J = G), G = 0; G < J; G++)
                    if (K[G] != N[G]) {
                        M = K[G] < N[G];
                        break;
                    }
                I = 0;
            }
            for (M && (E = K, K = N, N = E, b.s = -b.s), J = K.length, G = N.length - J; G > 0; --G)
                K[J++] = 0;
            for (G = N.length; G > I;) {
                if (K[--G] < N[G]) {
                    for (H = G; H && 0 === K[--H];)
                        K[H] = o - 1;
                    --K[H], K[G] += o;
                }
                K[G] -= N[G];
            }
            for (; 0 === K[--J];)
                K.pop();
            for (; 0 === K[0]; K.shift())
                --F;
            return K[0] ? (b.d = K, b.e = F, h ? C(b, P) : b) : new O(0);
        }

        function E(a, b, e) {
            var F, G = x(a),
                H = u(a.d),
                I = H.length;
            return b ? (e && (F = e - I) > 0 ? H = H.charAt(0) + '.' + H.slice(1) + z(F) : I > 1 && (H = H.charAt(0) + '.' + H.slice(1)), H = H + (G < 0 ? 'e' : 'e+') + G) : G < 0 ? (H = '0.' + z(-G - 1) + H, e && (F = e - I) > 0 && (H += z(F))) : G >= I ? (H += z(G + 1 - I), e && (F = e - G - 1) > 0 && (H = H + '.' + z(F))) : ((F = G + 1) < I && (H = H.slice(0, F) + '.' + H.slice(F)), e && (F = e - I) > 0 && (G + 1 === I && (H += '.'), H += z(F))), a.s < 0 ? '-' + H : H;
        }

        function F(a, b) {
            if (a.length > b)
                return a.length = b, !0;
        }

        function G(a) {
            if (!a || 'object' != typeof a)
                throw Error(i + 'Object expected');
            var H, I, J, K = [
                'precision',
                1,
                f,
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
            for (H = 0; H < K.length; H += 3)
                if (void 0 !== (J = a[I = K[H]])) {
                    if (!(l(J) === J && J >= K[H + 1] && J <= K[H + 2]))
                        throw Error(j + I + ': ' + J);
                    this[I] = J;
                }
            if (void 0 !== (J = a[I = 'LN10'])) {
                if (J != Math.LN10)
                    throw Error(j + I + ': ' + J);
                this[I] = new this(J);
            }
            return this;
        }
        g = function a(b) {
            var H, I, J;

            function K(a) {
                var L = this;
                if (!(L instanceof K))
                    return new K(a);
                if (L.constructor = K, a instanceof K)
                    return L.s = a.s, L.e = a.e, void(L.d = (a = a.d) ? a.slice() : a);
                if ('number' == typeof a) {
                    if (0 * a != 0)
                        throw Error(j + a);
                    if (a > 0)
                        L.s = 1;
                    else {
                        if (!(a < 0))
                            return L.s = 0, L.e = 0, void(L.d = [0]);
                        a = -a, L.s = -1;
                    }
                    return a === ~~a && a < 10000000 ? (L.e = 0, void(L.d = [a])) : B(L, a.toString());
                }
                if ('string' != typeof a)
                    throw Error(j + a);
                if (45 === a.charCodeAt(0) ? (a = a.slice(1), L.s = -1) : L.s = 1, !n.test(a))
                    throw Error(j + a);
                B(L, a);
            }
            if (K.prototype = r, K.ROUND_UP = 0, K.ROUND_DOWN = 1, K.ROUND_CEIL = 2, K.ROUND_FLOOR = 3, K.ROUND_HALF_UP = 4, K.ROUND_HALF_DOWN = 5, K.ROUND_HALF_EVEN = 6, K.ROUND_HALF_CEIL = 7, K.ROUND_HALF_FLOOR = 8, K.clone = a, K.config = K.set = G, void 0 === L && (L = {}), L)
                for (J = [
                        'precision',
                        'rounding',
                        'toExpNeg',
                        'toExpPos',
                        'LN10'
                    ], H = 0; H < J.length;)
                    L.hasOwnProperty(I = J[H++]) || (L[I] = this[I]);
            return K.config(b), K;
        }(g), g.default = g.Decimal = g, e = new g(1), 'function' == typeof define && define.amd ? define(function() {
            return g;
        }) : a.exports ? a.exports = g : (b || (b = 'undefined' != typeof self && self && self.self == self ? self : Function('return this')()), b.Decimal = g);
    }(a.exports);
}), d.register('ntzYU', function(a, c) {
    function e(a) {
        return function(a) {
            if (Array.isArray(a))
                return f(a);
        }(a) || function(a) {
            if ('undefined' != typeof Symbol && Symbol.iterator in Object(a))
                return Array.from(a);
        }(a) || function(a, b) {
            if (!a)
                return;
            if ('string' == typeof a)
                return f(a, b);
            var f = Object.prototype.toString.call(a).slice(8, -1);
            'Object' === f && a.constructor && (f = a.constructor.name);
            if ('Map' === f || 'Set' === f)
                return Array.from(a);
            if ('Arguments' === f || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f))
                return f(a, b);
        }(a) || function() {
            throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }

    function f(a, b) {
        (null == b || b > a.length) && (b = a.length);
        for (var g = 0, h = new Array(b); g < b; g++)
            h[g] = a[g];
        return h;
    }
    b(a.exports, 'curry', function() {
        return o;
    }), b(a.exports, 'range', function() {
        return m;
    }), b(a.exports, 'map', function() {
        return n;
    }), b(a.exports, 'compose', function() {
        return o;
    }), b(a.exports, 'reverse', function() {
        return p;
    }), b(a.exports, 'memoize', function() {
        return q;
    });
    var g = function(a) {
            return a;
        },
        h = {
            '@@functional/placeholder': !0
        },
        i = function(a) {
            return a === h;
        },
        j = function(a) {
            return function b() {
                return 0 === arguments.length || 1 === arguments.length && i(arguments.length <= 0 ? void 0 : arguments[0]) ? b : a.apply(void 0, arguments);
            };
        },
        k = function a(b, c) {
            return 1 === b ? c : j(function() {
                for (var l = arguments.length, m = new Array(l), n = 0; n < l; n++)
                    m[n] = arguments[n];
                var o = m.filter(function(a) {
                    return a !== h;
                }).length;
                return o >= b ? c.apply(void 0, m) : a(b - o, j(function() {
                    for (var p = arguments.length, q = new Array(p), r = 0; r < p; r++)
                        q[r] = arguments[r];
                    var s = m.map(function(p) {
                        return i(p) ? q.shift() : p;
                    });
                    return c.apply(void 0, e(s).concat(q));
                }));
            });
        },
        l = function(a) {
            return k(a.length, a);
        },
        m = function(a, b) {
            for (var n = [], o = p; o < b; ++o)
                n[o - p] = o;
            return n;
        },
        n = l(function(a, b) {
            return Array.isArray(b) ? b.map(a) : Object.keys(b).map(function(a) {
                return b[a];
            }).map(a);
        }),
        o = function() {
            for (var p = arguments.length, q = new Array(p), r = 0; r < p; r++)
                q[r] = arguments[r];
            if (!q.length)
                return g;
            var s = q.reverse(),
                t = s[0],
                u = s.slice(1);
            return function() {
                return u.reduce(function(p, q) {
                    return q(p);
                }, t.apply(void 0, arguments));
            };
        },
        p = function(a) {
            return Array.isArray(a) ? a.reverse() : a.split('').reverse.join('');
        },
        q = function(a) {
            var r = null,
                s = null;
            return function() {
                for (var t = arguments.length, u = new Array(t), v = 0; v < t; v++)
                    u[v] = arguments[v];
                return r && u.every(function(a, s) {
                    return a === r[s];
                }) ? s : (r = u, s = a.apply(void 0, u));
            };
        };
}), d.register('wSjjH', function(c, h) {
    b(c.exports, 'default', function() {
        return g;
    });
    var e = d('WsNZy'),
        f = d('ntzYU');
    var g = {
        rangeStep: function(b, c, d) {
            for (var h = new(a(e))(b), i = 0, j = []; h.lt(c) && i < 100000;)
                j.push(h.toNumber()), h = h.add(d), i++;
            return j;
        },
        getDigitCount: function(b) {
            return 0 === b ? 1 : Math.floor(new(a(e))(b).abs().log(10).toNumber()) + 1;
        },
        interpolateNumber: (0, f.curry)(function(a, b, c) {
            var h = +a;
            return h + c * (+b - h);
        }),
        uninterpolateNumber: (0, f.curry)(function(a, b, c) {
            var h = b - +a;
            return (c - a) / (h = h || 1 / 0);
        }),
        uninterpolateTruncation: (0, f.curry)(function(a, b, c) {
            var h = b - +a;
            return h = h || 1 / 0, Math.max(0, Math.min(1, (c - a) / h));
        })
    };
}), d.register('vpkdr', function(a, c) {
    b(a.exports, 'scaleBand', function() {
        return d('R1cmB').default;
    }), b(a.exports, 'scalePoint', function() {
        return d('R1cmB').point;
    }), b(a.exports, 'scaleIdentity', function() {
        return d('XEz1Y').default;
    }), b(a.exports, 'scaleLinear', function() {
        return d('x07gB').default;
    }), b(a.exports, 'scaleLog', function() {
        return d('pbIcC').default;
    }), b(a.exports, 'scaleSymlog', function() {
        return d('Qu5bk').default;
    }), b(a.exports, 'scaleOrdinal', function() {
        return d('57YJ6').default;
    }), b(a.exports, 'scaleImplicit', function() {
        return d('57YJ6').implicit;
    }), b(a.exports, 'scalePow', function() {
        return d('WFYap').default;
    }), b(a.exports, 'scaleSqrt', function() {
        return d('WFYap').sqrt;
    }), b(a.exports, 'scaleRadial', function() {
        return d('NebAY').default;
    }), b(a.exports, 'scaleQuantile', function() {
        return d('WrTRM').default;
    }), b(a.exports, 'scaleQuantize', function() {
        return d('Sw89T').default;
    }), b(a.exports, 'scaleThreshold', function() {
        return d('u2LpJ').default;
    }), b(a.exports, 'scaleTime', function() {
        return d('IucxU').default;
    }), b(a.exports, 'scaleUtc', function() {
        return d('xOvpk').default;
    }), b(a.exports, 'scaleSequential', function() {
        return d('79iG0').default;
    }), b(a.exports, 'scaleSequentialLog', function() {
        return d('79iG0').sequentialLog;
    }), b(a.exports, 'scaleSequentialPow', function() {
        return d('79iG0').sequentialPow;
    }), b(a.exports, 'scaleSequentialSqrt', function() {
        return d('79iG0').sequentialSqrt;
    }), b(a.exports, 'scaleSequentialSymlog', function() {
        return d('79iG0').sequentialSymlog;
    }), b(a.exports, 'scaleSequentialQuantile', function() {
        return d('d6wTT').default;
    }), b(a.exports, 'scaleDiverging', function() {
        return d('tgmm7').default;
    }), b(a.exports, 'scaleDivergingLog', function() {
        return d('tgmm7').divergingLog;
    }), b(a.exports, 'scaleDivergingPow', function() {
        return d('tgmm7').divergingPow;
    }), b(a.exports, 'scaleDivergingSqrt', function() {
        return d('tgmm7').divergingSqrt;
    }), b(a.exports, 'scaleDivergingSymlog', function() {
        return d('tgmm7').divergingSymlog;
    }), b(a.exports, 'tickFormat', function() {
        return d('Lmtue').default;
    });
    d('R1cmB'), d('XEz1Y'), d('x07gB'), d('pbIcC'), d('Qu5bk'), d('57YJ6'), d('WFYap'), d('NebAY'), d('WrTRM'), d('Sw89T'), d('u2LpJ'), d('IucxU'), d('xOvpk'), d('79iG0'), d('d6wTT'), d('tgmm7'), d('Lmtue');
}), d.register('R1cmB', function(a, c) {
    b(a.exports, 'default', function() {
        return h;
    }), b(a.exports, 'point', function() {
        return n;
    });
    var e = d('BI1ff'),
        f = d('1ZM5s'),
        g = d('57YJ6');

    function h() {
        var i, j, k = (0, g.default)().unknown(void 0),
            l = k.domain,
            m = k.range,
            n = 0,
            o = 1,
            p = !1,
            q = 0,
            r = 0,
            s = 0.5;

        function t() {
            var u = l().length,
                v = o < n,
                w = v ? o : n,
                x = v ? n : o;
            i = (x - w) / Math.max(1, u - q + 2 * r), p && (i = Math.floor(i)), w += (x - w - i * (u - q)) * s, j = i * (1 - q), p && (w = Math.round(w), j = Math.round(j));
            var y = (0, e.default)(u).map(function(j) {
                return w + i * j;
            });
            return m(v ? y.reverse() : y);
        }
        return delete k.unknown, k.domain = function(i) {
            return arguments.length ? (l(i), t()) : l();
        }, k.range = function(i) {
            return arguments.length ? ([u, v] = i, u = +u, v = +v, t()) : [
                u,
                v
            ];
        }, k.rangeRound = function(i) {
            return [u, v] = i, u = +u, v = +v, p = !0, t();
        }, k.bandwidth = function() {
            return j;
        }, k.step = function() {
            return i;
        }, k.round = function(i) {
            return arguments.length ? (p = !!i, t()) : p;
        }, k.padding = function(i) {
            return arguments.length ? (q = Math.min(1, r = +i), t()) : q;
        }, k.paddingInner = function(i) {
            return arguments.length ? (q = Math.min(1, i), t()) : q;
        }, k.paddingOuter = function(i) {
            return arguments.length ? (r = +i, t()) : r;
        }, k.align = function(i) {
            return arguments.length ? (s = Math.max(0, Math.min(1, i)), t()) : s;
        }, k.copy = function() {
            return h(l(), [
                n,
                o
            ]).round(p).paddingInner(q).paddingOuter(r).align(s);
        }, f.initRange.apply(t(), arguments);
    }

    function i(a) {
        var j = a.copy;
        return a.padding = a.paddingOuter, delete a.paddingInner, delete a.paddingOuter, a.copy = function() {
            return i(j());
        }, a;
    }

    function j() {
        return i(h.apply(null, arguments).paddingInner(1));
    }
}), d.register('BI1ff', function(a, c) {
    function e(a, b, c) {
        a = +a, b = +b, c = (g = arguments.length) < 2 ? (b = a, a = 0, 1) : g < 3 ? 1 : +c;
        for (var f = -1, g = 0 | Math.max(0, Math.ceil((b - a) / c)), h = new Array(g); ++f < g;)
            h[f] = a + f * c;
        return h;
    }
    b(a.exports, 'default', function() {
        return e;
    });
}), d.register('1ZM5s', function(a, c) {
    function e(a, b) {
        switch (arguments.length) {
            case 0:
                break;
            case 1:
                this.range(a);
                break;
            default:
                this.range(b).domain(a);
        }
        return this;
    }

    function f(a, b) {
        switch (arguments.length) {
            case 0:
                break;
            case 1:
                'function' == typeof a ? this.interpolator(a) : this.range(a);
                break;
            default:
                this.domain(a), 'function' == typeof b ? this.interpolator(b) : this.range(b);
        }
        return this;
    }
    b(a.exports, 'initRange', function() {
        return e;
    }), b(a.exports, 'initInterpolator', function() {
        return f;
    });
}), d.register('57YJ6', function(a, c) {
    b(a.exports, 'implicit', function() {
        return f;
    }), b(a.exports, 'default', function() {
        return g;
    });
    var e = d('1ZM5s');
    const f = Symbol('implicit');

    function g() {
        var h = new Map(),
            i = [],
            j = [],
            k = l;

        function m(e) {
            var n = e + '',
                o = h.get(n);
            if (!o) {
                if (k !== l)
                    return k;
                h.set(n, o = i.push(e));
            }
            return j[(o - 1) % j.length];
        }
        return m.domain = function(j) {
            if (!arguments.length)
                return i.slice();
            i = [], h = new Map();
            for (const n of j) {
                const o = n + '';
                h.has(o) || h.set(o, i.push(n));
            }
            return m;
        }, m.range = function(h) {
            return arguments.length ? (j = Array.from(h), m) : j.slice();
        }, m.unknown = function(h) {
            return arguments.length ? (k = h, m) : k;
        }, m.copy = function() {
            return g(i, j).unknown(k);
        }, e.initRange.apply(m, arguments), m;
    }
}), d.register('XEz1Y', function(a, c) {
    b(a.exports, 'default', function() {
        return g;
    });
    var e = d('x07gB'),
        f = d('v0Z+k');

    function g(a) {
        var h;

        function i(a) {
            return null == a || isNaN(a = +a) ? h : a;
        }
        return i.invert = i, i.domain = i.range = function(h) {
            return arguments.length ? (a = Array.from(h, f.default), i) : a.slice();
        }, i.unknown = function(a) {
            return arguments.length ? (h = a, i) : h;
        }, i.copy = function() {
            return g(a).unknown(h);
        }, a = arguments.length ? Array.from(a, f.default) : [
            0,
            1
        ], (0, e.linearish)(i);
    }
}), d.register('x07gB', function(a, c) {
    b(a.exports, 'linearish', function() {
        return i;
    }), b(a.exports, 'default', function() {
        return p;
    });
    var e = d('Di0JY'),
        f = d('EmhNR'),
        g = d('1ZM5s'),
        h = d('Lmtue');

    function i(a) {
        var j = a.domain;
        return a.ticks = function(a) {
            var k = j();
            return (0, e.default)(k[0], k[k.length - 1], null == a ? 10 : a);
        }, a.tickFormat = function(a, c) {
            var k = j();
            return (0, h.default)(k[0], k[k.length - 1], null == a ? 10 : a, c);
        }, a.nice = function(c) {
            null == c && (c = 10);
            var k, l, m = j(),
                n = 0,
                o = m.length - 1,
                p = m[n],
                q = m[o],
                r = 10;
            for (q < p && (l = p, p = q, q = l, l = n, n = o, o = l); r-- > 0;) {
                if ((l = (0, e.tickIncrement)(p, q, c)) === k)
                    return m[n] = p, m[o] = q, j(m);
                if (l > 0)
                    p = Math.floor(p / l) * l, q = Math.ceil(q / l) * l;
                else {
                    if (!(l < 0))
                        break;
                    p = Math.ceil(p * l) / l, q = Math.floor(q * l) / l;
                }
                k = l;
            }
            return a;
        }, a;
    }

    function j() {
        var k = (0, f.default)();
        return k.copy = function() {
            return (0, f.copy)(k, j());
        }, g.initRange.apply(k, arguments), i(k);
    }
}), d.register('Di0JY', function(a, c) {
    b(a.exports, 'default', function() {
        return h;
    }), b(a.exports, 'tickIncrement', function() {
        return i;
    }), b(a.exports, 'tickStep', function() {
        return m;
    });
    var e = Math.sqrt(50),
        f = Math.sqrt(10),
        g = Math.sqrt(2);

    function h(a, b, c) {
        var i, j, k, l, m = -1;
        if (c = +c, (a = +a) === (b = +b) && c > 0)
            return [a];
        if ((i = b < a) && (j = a, a = b, b = j), 0 === (l = i(a, b, c)) || !isFinite(l))
            return [];
        if (l > 0) {
            let n = Math.round(a / l),
                o = Math.round(b / l);
            for (n * l < a && ++n, o * l > b && --o, k = new Array(j = o - n + 1); ++m < j;)
                k[m] = (n + m) * l;
        } else {
            l = -l;
            let p = Math.round(a * l),
                q = Math.round(b * l);
            for (p / l < a && ++p, q / l > b && --q, k = new Array(j = q - p + 1); ++m < j;)
                k[m] = (p + m) / l;
        }
        return i && k.reverse(), k;
    }

    function i(a, b, c) {
        var j = (b - a) / Math.max(0, c),
            k = Math.floor(Math.log(j) / Math.LN10),
            l = j / Math.pow(10, k);
        return k >= 0 ? (l >= e ? 10 : l >= f ? 5 : l >= g ? 2 : 1) * Math.pow(10, k) : -Math.pow(10, -k) / (l >= e ? 10 : l >= f ? 5 : l >= g ? 2 : 1);
    }

    function j(a, b, c) {
        var k = Math.abs(b - a) / Math.max(0, c),
            l = Math.pow(10, Math.floor(Math.log(k) / Math.LN10)),
            m = k / l;
        return m >= e ? l *= 10 : m >= f ? l *= 5 : m >= g && (l *= 2), b < a ? -l : l;
    }
}), d.register('EmhNR', function(a, c) {
    b(a.exports, 'identity', function() {
        return l;
    }), b(a.exports, 'copy', function() {
        return p;
    }), b(a.exports, 'transformer', function() {
        return q;
    }), b(a.exports, 'default', function() {
        return C;
    });
    var e = d('DRzpw'),
        f = d('pQXKW'),
        g = d('H+L5h'),
        h = d('OEfGT'),
        i = d('3Hun80'),
        j = d('v0Z+k'),
        k = [
            0,
            1
        ];

    function l(a) {
        return a;
    }

    function m(a, b) {
        return (b -= a = +a) ? function(c) {
            return (c - a) / b;
        } : (0, i.default)(isNaN(b) ? M : 0.5);
    }

    function n(a, b, c) {
        var o = a[0],
            p = a[1],
            q = b[0],
            r = b[1];
        return p < o ? (o = m(p, o), q = c(r, q)) : (o = m(o, p), q = c(q, r)),
            function(a) {
                return q(o(a));
            };
    }

    function o(a, b, c) {
        var p = Math.min(a.length, b.length) - 1,
            q = new Array(p),
            r = new Array(p),
            s = -1;
        for (a[p] < a[0] && (a = a.slice().reverse(), b = b.slice().reverse()); ++s < p;)
            q[s] = m(a[s], a[s + 1]), r[s] = c(b[s], b[s + 1]);
        return function(b) {
            var t = (0, e.default)(a, b, 1, p) - 1;
            return r[t](q[t](b));
        };
    }

    function p(a, b) {
        return b.domain(a.domain()).range(a.range()).interpolate(a.interpolate()).clamp(a.clamp()).unknown(a.unknown());
    }

    function q() {
        var r, s, t, u, v, w, x = y,
            z = A,
            B = f.default,
            C = D;

        function E() {
            var F, G, H, I = Math.min(x.length, z.length);
            return C !== D && (F = x[0], G = x[I - 1], F > G && (H = F, F = G, G = H), C = function(H) {
                return Math.max(F, Math.min(G, H));
            }), u = I > 2 ? o : n, v = w = null, F;
        }

        function F(s) {
            return null == s || isNaN(s = +s) ? t : (v || (v = u(x.map(r), z, B)))(r(C(s)));
        }
        return F.invert = function(t) {
                return C(s((w || (w = u(z, x.map(r), g.default)))(t)));
            }, F.domain = function(r) {
                return arguments.length ? (x = Array.from(r, j.default), E()) : x.slice();
            }, F.range = function(r) {
                return arguments.length ? (z = Array.from(r), E()) : z.slice();
            }, F.rangeRound = function(r) {
                return z = Array.from(r), B = h.default, E();
            }, F.clamp = function(r) {
                return arguments.length ? (C = !!r || D, E()) : C !== D;
            }, F.interpolate = function(r) {
                return arguments.length ? (B = r, E()) : B;
            }, F.unknown = function(r) {
                return arguments.length ? (t = r, F) : t;
            },
            function(t, u) {
                return r = t, s = u, E();
            };
    }

    function r() {
        return q()(l, l);
    }
}), d.register('DRzpw', function(a, c) {
    b(a.exports, 'default', function() {
        return j;
    });
    var e = d('m1lok'),
        f = d('6Kdg3'),
        g = d('2k1KA');
    const h = (0, f.default)(e.default),
        i = h.right;
    h.left, (0, f.default)(g.default).center;
    var j = k;
}), d.register('m1lok', function(a, c) {
    function e(a, b) {
        return a < b ? -1 : a > b ? 1 : a >= b ? 0 : M;
    }
    b(a.exports, 'default', function() {
        return e;
    });
}), d.register('6Kdg3', function(a, c) {
    b(a.exports, 'default', function() {
        return f;
    });
    var e = d('m1lok');

    function f(a) {
        let g = h,
            i = j;

        function k(j, g, k, e) {
            for (null == k && (k = 0), null == e && (e = j.length); k < e;) {
                const l = k + e >>> 1;
                i(j[l], g) < 0 ? k = l + 1 : e = l;
            }
            return k;
        }
        return 1 === j.length && (g = (g, i) => j(g) - i, i = function(j) {
            return (g, i) => (0, e.default)(j(g), i);
        }(j)), {
            left: k,
            center: function(j, i, e, f) {
                null == e && (e = 0), null == f && (f = j.length);
                const l = k(j, i, e, f - 1);
                return l > e && g(j[l - 1], i) > -g(j[l], i) ? l - 1 : l;
            },
            right: function(j, g, k, e) {
                for (null == k && (k = 0), null == e && (e = j.length); k < e;) {
                    const l = k + e >>> 1;
                    i(j[l], g) > 0 ? e = l : k = l + 1;
                }
                return k;
            }
        };
    }
}), d.register('2k1KA', function(a, c) {
    function e(a) {
        return null === a ? M : +a;
    }

    function* f(a, b) {
        if (void 0 === b)
            for (let g of a)
                null != g && (g = +g) >= g && (yield g);
        else {
            let h = -1;
            for (let i of a)
                null != (i = g(i, ++h, a)) && (i = +i) >= i && (yield i);
        }
    }
    b(a.exports, 'default', function() {
        return e;
    }), b(a.exports, 'numbers', function() {
        return f;
    });
}), d.register('pQXKW', function(a, c) {
    b(a.exports, 'default', function() {
        return n;
    });
    var e = d('kZjqh'),
        f = d('51Jzv'),
        g = d('f6Ru9'),
        h = d('F7h6Y'),
        i = d('H+L5h'),
        j = d('aXJco'),
        k = d('qciBG'),
        l = d('qCmO/'),
        m = d('+tPo7');

    function n(a, b) {
        var o, p = typeof b;
        return null == b || 'boolean' === p ? (0, l.default)(b) : ('number' === p ? i.default : 'string' === p ? (o = (0, e.default)(b)) ? (b = o, f.default) : k.default : b instanceof e.default ? f.default : b instanceof Date ? h.default : (0, m.isNumberArray)(b) ? m.default : Array.isArray(b) ? g.genericArray : 'function' != typeof b.valueOf && 'function' != typeof b.toString || isNaN(b) ? j.default : i.default)(a, b);
    }
}), d.register('kZjqh', function(a, c) {
    b(a.exports, 'default', function() {
        return v;
    }), b(a.exports, 'rgb', function() {
        return z;
    });
    var e = d('jP3zo');

    function f() {}
    var g = 0.7,
        h = 1.4285714285714286,
        i = '\\s*([+-]?\\d+)\\s*',
        j = '\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*',
        k = '\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*',
        l = /^#([0-9a-f]{3,8})$/,
        m = new RegExp('^rgb\\(' + [
            i,
            i,
            i
        ] + '\\)$'),
        n = new RegExp('^rgb\\(' + [
            k,
            k,
            k
        ] + '\\)$'),
        o = new RegExp('^rgba\\(' + [
            i,
            i,
            i,
            j
        ] + '\\)$'),
        p = new RegExp('^rgba\\(' + [
            k,
            k,
            k,
            j
        ] + '\\)$'),
        q = new RegExp('^hsl\\(' + [
            j,
            k,
            k
        ] + '\\)$'),
        r = new RegExp('^hsla\\(' + [
            j,
            k,
            k,
            j
        ] + '\\)$'),
        s = {
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

    function t() {
        return this.rgb().formatHex();
    }

    function u() {
        return this.rgb().formatRgb();
    }

    function v(a) {
        var w, x;
        return a = (a + '').trim().toLowerCase(), (w = l.exec(a)) ? (x = w[1].length, w = l(w[1], 16), 6 === x ? w(w) : 3 === x ? new A(w >> 8 & 15 | w >> 4 & 240, w >> 4 & 15 | 240 & w, (15 & w) << 4 | 15 & w, 1) : 8 === x ? x(w >> 24 & 255, w >> 16 & 255, w >> 8 & 255, (255 & w) / 255) : 4 === x ? x(w >> 12 & 15 | w >> 8 & 240, w >> 8 & 15 | w >> 4 & 240, w >> 4 & 15 | 240 & w, ((15 & w) << 4 | 15 & w) / 255) : null) : (w = m.exec(a)) ? new A(w[1], w[2], w[3], 1) : (w = n.exec(a)) ? new A(255 * w[1] / 100, 255 * w[2] / 100, 255 * w[3] / 100, 1) : (w = o.exec(a)) ? x(w[1], w[2], w[3], w[4]) : (w = p.exec(a)) ? x(255 * w[1] / 100, 255 * w[2] / 100, 255 * w[3] / 100, w[4]) : (w = q.exec(a)) ? E(w[1], w[2] / 100, w[3] / 100, 1) : (w = r.exec(a)) ? E(w[1], w[2] / 100, w[3] / 100, w[4]) : s.hasOwnProperty(a) ? w(s[a]) : 'transparent' === a ? new A(M, M, M, 0) : null;
    }

    function w(a) {
        return new A(a >> 16 & 255, a >> 8 & 255, 255 & a, 1);
    }

    function x(a, b, c, d) {
        return d <= 0 && (a = b = c = M), new A(a, b, c, d);
    }

    function y(a) {
        return a instanceof f || (a = v(a)), a ? new A((a = a.rgb()).r, a.g, a.b, a.opacity) : new A();
    }

    function z(a, b, c, d) {
        return 1 === arguments.length ? y(a) : new A(a, b, c, null == d ? 1 : d);
    }

    function A(a, b, c, d) {
        this.r = +a, this.g = +b, this.b = +c, this.opacity = +d;
    }

    function B() {
        return '#' + D(this.r) + D(this.g) + D(this.b);
    }

    function C() {
        var D = this.opacity;
        return (1 === (D = isNaN(D) ? 1 : Math.max(0, Math.min(1, D))) ? 'rgb(' : 'rgba(') + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ', ' + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ', ' + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === D ? ')' : ', ' + D + ')');
    }

    function D(a) {
        return ((a = Math.max(0, Math.min(255, Math.round(a) || 0))) < 16 ? '0' : '') + a.toString(16);
    }

    function E(a, b, c, d) {
        return d <= 0 ? a = b = c = M : c <= 0 || c >= 1 ? a = b = M : b <= 0 && (a = M), new G(a, b, c, d);
    }

    function F(a) {
        if (a instanceof G)
            return new G(a.h, a.s, a.l, a.opacity);
        if (a instanceof f || (a = v(a)), !a)
            return new G();
        if (a instanceof G)
            return a;
        var G = (a = a.rgb()).r / 255,
            H = a.g / 255,
            I = a.b / 255,
            J = Math.min(G, H, I),
            K = Math.max(G, H, I),
            L = M,
            N = K - J,
            O = (K + J) / 2;
        return N ? (L = G === K ? (H - I) / N + 6 * (H < I) : H === K ? (I - G) / N + 2 : (G - H) / N + 4, N /= O < 0.5 ? K + J : 2 - K - J, L *= 60) : N = O > 0 && O < 1 ? 0 : L, new G(L, N, O, a.opacity);
    }

    function G(a, b, c, d) {
        this.h = +a, this.s = +b, this.l = +c, this.opacity = +d;
    }

    function H(a, b, c) {
        return 255 * (a < 60 ? b + (c - b) * a / 60 : a < 180 ? c : a < 240 ? b + (c - b) * (240 - a) / 60 : b);
    }
    (0, e.default)(f, v, {
        copy: function(a) {
            return Object.assign(new this.constructor(), this, a);
        },
        displayable: function() {
            return this.rgb().displayable();
        },
        hex: t,
        formatHex: t,
        formatHsl: function() {
            return F(this).formatHsl();
        },
        formatRgb: u,
        toString: u
    }), (0, e.default)(A, z, (0, e.extend)(f, {
        brighter: function(a) {
            return a = null == a ? h : Math.pow(h, a), new A(this.r * a, this.g * a, this.b * a, this.opacity);
        },
        darker: function(a) {
            return a = null == a ? g : Math.pow(g, a), new A(this.r * a, this.g * a, this.b * a, this.opacity);
        },
        rgb: function() {
            return this;
        },
        displayable: function() {
            return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
        },
        hex: B,
        formatHex: B,
        formatRgb: C,
        toString: C
    })), (0, e.default)(G, function(a, b, c, d) {
        return 1 === arguments.length ? F(a) : new G(a, b, c, null == d ? 1 : d);
    }, (0, e.extend)(f, {
        brighter: function(a) {
            return a = null == a ? h : Math.pow(h, a), new G(this.h, this.s, this.l * a, this.opacity);
        },
        darker: function(a) {
            return a = null == a ? g : Math.pow(g, a), new G(this.h, this.s, this.l * a, this.opacity);
        },
        rgb: function() {
            var I = this.h % 360 + 360 * (this.h < 0),
                J = isNaN(I) || isNaN(this.s) ? 0 : this.s,
                K = this.l,
                L = K + (K < 0.5 ? K : 1 - K) * J,
                M = 2 * K - L;
            return new A(H(I >= 240 ? I - 240 : I + 120, M, L), H(I, M, L), H(I < 120 ? I + 240 : I - 120, M, L), this.opacity);
        },
        displayable: function() {
            return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
        },
        formatHsl: function() {
            var N = this.opacity;
            return (1 === (N = isNaN(N) ? 1 : Math.max(0, Math.min(1, N))) ? 'hsl(' : 'hsla(') + (this.h || 0) + ', ' + 100 * (this.s || 0) + '%, ' + 100 * (this.l || 0) + '%' + (1 === N ? ')' : ', ' + N + ')');
        }
    }));
}), d.register('jP3zo', function(a, c) {
    function e(a, b, c) {
        a.prototype = b.prototype = c, c.constructor = a;
    }

    function f(a, b) {
        var g = Object.create(a.prototype);
        for (var h in b)
            g[h] = b[h];
        return g;
    }
    b(a.exports, 'default', function() {
        return e;
    }), b(a.exports, 'extend', function() {
        return f;
    });
}), d.register('51Jzv', function(a, c) {
    b(a.exports, 'default', function() {
        return i;
    });
    var e = d('kZjqh'),
        f = d('92GUY'),
        g = d('u6XCX'),
        h = d('314gs'),
        i = function a(b) {
            var j = (0, h.gamma)(b);

            function k(a, b) {
                var l = j((a = (0, e.rgb)(a)).r, (b = (0, e.rgb)(b)).r),
                    m = j(a.g, b.g),
                    n = j(a.b, b.b),
                    o = (0, h.default)(a.opacity, b.opacity);
                return function(b) {
                    return a.r = l(b), a.g = m(b), a.b = n(b), a.opacity = o(b), a + '';
                };
            }
            return k.gamma = a, k;
        }(1);

    function j(a) {
        return function(b) {
            var k, l, m = b.length,
                n = new Array(m),
                o = new Array(m),
                p = new Array(m);
            for (k = 0; k < m; ++k)
                l = (0, e.rgb)(b[k]), n[k] = l.r || 0, o[k] = l.g || 0, p[k] = l.b || 0;
            return n = a(n), o = a(o), p = a(p), l.opacity = 1,
                function(a) {
                    return l.r = n(a), l.g = o(a), l.b = p(a), l + '';
                };
        };
    }
    j(f.default), j(g.default);
}), d.register('92GUY', function(a, c) {
    function e(a, b, c, e, f) {
        var f = a * a,
            g = f * a;
        return ((1 - 3 * a + 3 * f - g) * b + (4 - 6 * f + 3 * g) * c + (1 + 3 * a + 3 * f - 3 * g) * e + g * f) / 6;
    }

    function f(a) {
        var g = a.length - 1;
        return function(c) {
            var h = c <= 0 ? c = 0 : c >= 1 ? (c = 1, g - 1) : Math.floor(c * g),
                i = a[h],
                j = a[h + 1],
                k = h > 0 ? a[h - 1] : 2 * i - j,
                l = h < g - 1 ? a[h + 2] : 2 * j - i;
            return e((c - h / g) * g, k, i, j, l);
        };
    }
    b(a.exports, 'basis', function() {
        return e;
    }), b(a.exports, 'default', function() {
        return f;
    });
}), d.register('u6XCX', function(a, c) {
    b(a.exports, 'default', function() {
        return f;
    });
    var e = d('92GUY');

    function f(a) {
        var g = a.length;
        return function(c) {
            var h = Math.floor(((c %= 1) < 0 ? ++c : c) * g),
                i = a[(h + g - 1) % g],
                j = a[h % g],
                k = a[(h + 1) % g],
                l = a[(h + 2) % g];
            return (0, e.basis)((c - h / g) * g, i, j, k, l);
        };
    }
}), d.register('314gs', function(a, c) {
    b(a.exports, 'gamma', function() {
        return g;
    }), b(a.exports, 'default', function() {
        return h;
    });
    var e = d('qCmO/');

    function f(a, b) {
        return function(c) {
            return a + c * b;
        };
    }

    function g(a) {
        return 1 == (a = +a) ? h : function(b, c) {
            return c - b ? function(a, b, c) {
                return a = Math.pow(a, c), b = Math.pow(b, c) - a, c = 1 / c,
                    function(d) {
                        return Math.pow(a + d * b, c);
                    };
            }(b, c, a) : (0, e.default)(isNaN(b) ? c : b);
        };
    }

    function h(a, b) {
        var i = b - a;
        return i ? f(a, i) : (0, e.default)(isNaN(a) ? b : a);
    }
}), d.register('qCmO/', function(a, c) {
    b(a.exports, 'default', function() {
        return d;
    });
    var e = a => () => a;
}), d.register('f6Ru9', function(a, c) {
    b(a.exports, 'genericArray', function() {
        return f;
    });
    var e = d('pQXKW');
    d('+tPo7');

    function f(a, b) {
        var g, h = b ? b.length : 0,
            i = a ? Math.min(h, a.length) : 0,
            j = new Array(i),
            k = new Array(h);
        for (g = 0; g < i; ++g)
            j[g] = (0, e.default)(a[g], b[g]);
        for (; g < h; ++g)
            k[g] = b[g];
        return function(a) {
            for (g = 0; g < i; ++g)
                k[g] = j[g](a);
            return k;
        };
    }
}), d.register('+tPo7', function(a, c) {
    function e(a, b) {
        b || (b = []);
        var f, g = a ? Math.min(b.length, a.length) : 0,
            h = b.slice();
        return function(f) {
            for (f = 0; f < g; ++f)
                h[f] = a[f] * (1 - f) + b[f] * f;
            return h;
        };
    }

    function f(a) {
        return ArrayBuffer.isView(a) && !(a instanceof DataView);
    }
    b(a.exports, 'default', function() {
        return e;
    }), b(a.exports, 'isNumberArray', function() {
        return f;
    });
}), d.register('F7h6Y', function(a, c) {
    function e(a, b) {
        var f = new Date();
        return a = +a, b = +b,
            function(e) {
                return f.setTime(a * (1 - e) + b * e), f;
            };
    }
    b(a.exports, 'default', function() {
        return e;
    });
}), d.register('H+L5h', function(a, c) {
    function e(a, b) {
        return a = +a, b = +b,
            function(c) {
                return a * (1 - c) + b * c;
            };
    }
    b(a.exports, 'default', function() {
        return e;
    });
}), d.register('aXJco', function(a, c) {
    b(a.exports, 'default', function() {
        return f;
    });
    var e = d('pQXKW');

    function f(a, b) {
        var g, h = {},
            i = {};
        for (g in (null !== a && 'object' == typeof a || (a = {}), null !== b && 'object' == typeof b || (b = {}), b))
            g in a ? h[g] = (0, e.default)(a[g], b[g]) : i[g] = b[g];
        return function(a) {
            for (g in h)
                i[g] = h[g](a);
            return i;
        };
    }
}), d.register('qciBG', function(a, c) {
    b(a.exports, 'default', function() {
        return h;
    });
    var e = d('H+L5h'),
        f = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
        g = new RegExp(f.source, 'g');

    function h(a, b) {
        var i, j, k, l = f.lastIndex = g.lastIndex = 0,
            m = -1,
            n = [],
            o = [];
        for (a += '', b += '';
            (i = f.exec(a)) && (j = g.exec(b));)
            (k = j.index) > l && (k = b.slice(l, k), n[m] ? n[m] += k : n[++m] = k), (i = i[0]) === (j = j[0]) ? n[m] ? n[m] += j : n[++m] = j : (n[++m] = null, o.push({
                i: m,
                x: (0, e.default)(i, j)
            })), l = g.lastIndex;
        return l < b.length && (k = b.slice(l), n[m] ? n[m] += k : n[++m] = k), n.length < 2 ? o[0] ? function(a) {
            return function(b) {
                return a(b) + '';
            };
        }(o[0].x) : function(a) {
            return function() {
                return a;
            };
        }(b) : (b = o.length, function(a) {
            for (var p, q = 0; q < b; ++q)
                n[(p = o[q]).i] = p.x(a);
            return n.join('');
        });
    }
}), d.register('OEfGT', function(a, c) {
    function e(a, b) {
        return a = +a, b = +b,
            function(c) {
                return Math.round(a * (1 - c) + b * c);
            };
    }
    b(a.exports, 'default', function() {
        return e;
    });
}), d.register('3Hun80', function(a, c) {
    function e(a) {
        return function() {
            return a;
        };
    }
    b(a.exports, 'default', function() {
        return e;
    });
}), d.register('v0Z+k', function(a, c) {
    function e(a) {
        return +a;
    }
    b(a.exports, 'default', function() {
        return e;
    });
}), d.register('Lmtue', function(a, c) {
    b(a.exports, 'default', function() {
        return k;
    });
    var e = d('Di0JY'),
        f = d('KMd79'),
        g = d('rSthg'),
        h = d('sagy4'),
        i = d('cTB3q'),
        j = d('5LN+n');

    function k(a, b, c, d) {
        var l, m = (0, e.tickStep)(a, b, c);
        switch ((d = (0, g.default)(null == d ? ',f' : d)).type) {
            case 's':
                var n = Math.max(Math.abs(a), Math.abs(b));
                return null != d.precision || isNaN(l = (0, i.default)(m, n)) || (d.precision = l), (0, f.formatPrefix)(d, n);
            case '':
            case 'e':
            case 'g':
            case 'p':
            case 'r':
                null != d.precision || isNaN(l = (0, j.default)(m, Math.max(Math.abs(a), Math.abs(b)))) || (d.precision = l - ('e' === d.type));
                break;
            case 'f':
            case '%':
                null != d.precision || isNaN(l = (0, h.default)(m)) || (d.precision = l - 2 * ('%' === d.type));
        }
        return (0, f.format)(d);
    }
}), d.register('KMd79', function(a, c) {
    b(a.exports, 'format', function() {
        return f;
    }), b(a.exports, 'formatPrefix', function() {
        return g;
    });
    var e, f, g, h, i = d('6xCNb');
    h = {
        thousands: ',',
        grouping: [3],
        currency: [
            '$',
            ''
        ]
    }, e = (0, i.default)(h), f = e.format, g = e.formatPrefix;
}), d.register('6xCNb', function(a, c) {
    b(a.exports, 'default', function() {
        return o;
    });
    var e = d('kuZqQ'),
        f = d('QJDCj'),
        g = d('1XdT0'),
        h = d('rSthg'),
        i = d('K3Akt'),
        j = d('3cFrB'),
        k = d('SE5FE'),
        l = d('DrM6g'),
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

    function o(a) {
        var p = void 0 === a.grouping || void 0 === a.thousands ? l.default : (0, f.default)(m.call(a.grouping, Number), a.thousands + ''),
            q = void 0 === a.currency ? '' : a.currency[0] + '',
            r = void 0 === a.currency ? '' : a.currency[1] + '',
            s = void 0 === a.decimal ? '.' : a.decimal + '',
            t = void 0 === a.numerals ? l.default : (0, g.default)(m.call(a.numerals, String)),
            u = void 0 === a.percent ? '%' : a.percent + '',
            v = void 0 === a.minus ? '\u2212' : a.minus + '',
            w = void 0 === a.nan ? 'NaN' : a.nan + '';

        function x(a) {
            var y = (a = (0, h.default)(a)).fill,
                z = a.align,
                A = a.sign,
                B = a.symbol,
                C = a.zero,
                D = a.width,
                E = a.comma,
                F = a.precision,
                G = a.trim,
                H = a.type;
            'n' === H ? (E = !0, H = 'g') : j.default[H] || (void 0 === F && (F = 12), G = !0, H = 'g'), (C || '0' === y && '=' === z) && (C = !0, y = '0', z = '=');
            var I = '$' === B ? q : '#' === B && /[boxX]/.test(H) ? '0' + H.toLowerCase() : '',
                J = '$' === B ? r : /[%p]/.test(H) ? u : '',
                K = j.default[H],
                L = /[defgprs%]/.test(H);

            function M(a) {
                var N, O, P, Q = R,
                    S = T;
                if ('c' === H)
                    S = K(a) + S, a = '';
                else {
                    var U = (a = +a) < 0 || 1 / a < 0;
                    if (a = isNaN(a) ? w : K(Math.abs(a), F), G && (a = (0, i.default)(a)), U && 0 == +a && '+' !== A && (U = !1), Q = (U ? '(' === A ? A : v : '-' === A || '(' === A ? '' : A) + Q, S = ('s' === H ? n[8 + k.prefixExponent / 3] : '') + S + (U && '(' === A ? ')' : ''), L)
                        for (N = -1, O = a.length; ++N < O;)
                            if (48 > (P = a.charCodeAt(N)) || P > 57) {
                                S = (46 === P ? s + a.slice(N + 1) : a.slice(N)) + S, a = a.slice(0, N);
                                break;
                            }
                }
                E && !C && (a = p(a, 1 / 0));
                var U = Q.length + a.length + S.length,
                    V = U < D ? new Array(D - U + 1).join(y) : '';
                switch (E && C && (a = p(V + a, V.length ? D - S.length : 1 / 0), V = ''), z) {
                    case '<':
                        a = Q + a + S + V;
                        break;
                    case '=':
                        a = Q + V + a + S;
                        break;
                    case '^':
                        a = V.slice(0, U = V.length >> 1) + Q + a + S + V.slice(U);
                        break;
                    default:
                        a = V + Q + a + S;
                }
                return t(a);
            }
            return F = void 0 === F ? 6 : /[gprs]/.test(H) ? Math.max(1, Math.min(21, F)) : Math.max(0, Math.min(20, F)), M.toString = function() {
                return a + '';
            }, M;
        }
        return {
            format: x,
            formatPrefix: function(a, p) {
                var y = x(((a = (0, h.default)(a)).type = 'f', a)),
                    z = 3 * Math.max(-8, Math.min(8, Math.floor((0, e.default)(p) / 3))),
                    A = Math.pow(10, -z),
                    B = n[8 + z / 3];
                return function(a) {
                    return y(A * a) + B;
                };
            }
        };
    }
}), d.register('kuZqQ', function(a, c) {
    b(a.exports, 'default', function() {
        return f;
    });
    var e = d('+X077');

    function f(a) {
        return (a = (0, e.formatDecimalParts)(Math.abs(a))) ? a[1] : o;
    }
}), d.register('+X077', function(a, c) {
    function e(a) {
        return Math.abs(a = Math.round(a)) >= 1e+21 ? a.toLocaleString('en').replace(/,/g, '') : a.toString(10);
    }

    function f(a, b) {
        if ((c = (a = b ? a.toExponential(b - 1) : a.toExponential()).indexOf('e')) < 0)
            return null;
        var g, h = a.slice(0, g);
        return [
            h.length > 1 ? h[0] + h.slice(2) : h,
            +a.slice(g + 1)
        ];
    }
    b(a.exports, 'default', function() {
        return e;
    }), b(a.exports, 'formatDecimalParts', function() {
        return f;
    });
}), d.register('QJDCj', function(a, c) {
    function e(a, b) {
        return function(c, e) {
            for (var f = c.length, g = [], h = 0, i = a[0], j = 0; f > 0 && i > 0 && (j + i + 1 > e && (i = Math.max(1, e - j)), g.push(c.substring(f -= i, f + i)), !((j += i + 1) > e));)
                i = a[h = (h + 1) % a.length];
            return g.reverse().join(b);
        };
    }
    b(a.exports, 'default', function() {
        return e;
    });
}), d.register('1XdT0', function(a, c) {
    function e(a) {
        return function(b) {
            return b.replace(/[0-9]/g, function(b) {
                return a[+b];
            });
        };
    }
    b(a.exports, 'default', function() {
        return e;
    });
}), d.register('rSthg', function(a, c) {
    b(a.exports, 'default', function() {
        return f;
    });
    var e = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

    function f(a) {
        if (!(b = e.exec(a)))
            throw new Error('invalid format: ' + a);
        var g;
        return new g({
            fill: g[1],
            align: g[2],
            sign: g[3],
            symbol: g[4],
            zero: g[5],
            width: g[6],
            comma: g[7],
            precision: g[8] && g[8].slice(1),
            trim: g[9],
            type: g[10]
        });
    }

    function g(a) {
        this.fill = void 0 === a.fill ? ' ' : a.fill + '', this.align = void 0 === a.align ? '>' : a.align + '', this.sign = void 0 === a.sign ? '-' : a.sign + '', this.symbol = void 0 === a.symbol ? '' : a.symbol + '', this.zero = !!a.zero, this.width = void 0 === a.width ? void 0 : +a.width, this.comma = !!a.comma, this.precision = void 0 === a.precision ? void 0 : +a.precision, this.trim = !!a.trim, this.type = void 0 === a.type ? '' : a.type + '';
    }
    f.prototype = g.prototype, g.prototype.toString = function() {
        return this.fill + this.align + this.sign + this.symbol + (this.zero ? '0' : '') + (void 0 === this.width ? '' : Math.max(1, 0 | this.width)) + (this.comma ? ',' : '') + (void 0 === this.precision ? '' : '.' + Math.max(0, 0 | this.precision)) + (this.trim ? '~' : '') + this.type;
    };
}), d.register('K3Akt', function(a, c) {
    function e(a) {
        t: for (var f, g = a.length, h = 1, i = -1; h < g; ++h)
            switch (a[h]) {
                case '.':
                    i = f = h;
                    break;
                case '0':
                    0 === i && (i = h), f = h;
                    break;
                default:
                    if (!+a[h])
                        break t;
                    i > 0 && (i = 0);
            }
        return i > 0 ? a.slice(0, i) + a.slice(f + 1) : a;
    }
    b(a.exports, 'default', function() {
        return e;
    });
}), d.register('3cFrB', function(a, c) {
    b(a.exports, 'default', function() {
        return h;
    });
    var e = d('+X077'),
        f = d('SE5FE'),
        g = d('UAEzt'),
        h = {
            '%': (a, b) => (100 * a).toFixed(b),
            b: a => Math.round(a).toString(2),
            c: a => a + '',
            d: e.default,
            e: (a, b) => a.toExponential(b),
            f: (a, b) => a.toFixed(b),
            g: (a, b) => a.toPrecision(b),
            o: a => Math.round(a).toString(8),
            p: (a, b) => (0, g.default)(100 * a, b),
            r: g.default,
            s: f.default,
            X: a => Math.round(a).toString(16).toUpperCase(),
            x: a => Math.round(a).toString(16)
        };
}), d.register('SE5FE', function(a, c) {
    b(a.exports, 'prefixExponent', function() {
        return e;
    }), b(a.exports, 'default', function() {
        return g;
    });
    var e, f = d('+X077');

    function g(a, b) {
        var h = (0, f.formatDecimalParts)(a, b);
        if (!h)
            return a + '';
        var i = h[0],
            j = h[1],
            k = j - (e = 3 * Math.max(-8, Math.min(8, Math.floor(j / 3)))) + 1,
            l = i.length;
        return k === l ? i : k > l ? i + new Array(k - l + 1).join('0') : k > 0 ? i.slice(0, k) + '.' + i.slice(k) : '0.' + new Array(1 - k).join('0') + (0, f.formatDecimalParts)(a, Math.max(0, b + k - 1))[0];
    }
}), d.register('UAEzt', function(a, c) {
    b(a.exports, 'default', function() {
        return f;
    });
    var e = d('+X077');

    function f(a, b) {
        var g = (0, e.formatDecimalParts)(a, b);
        if (!g)
            return a + '';
        var h = g[0],
            i = g[1];
        return i < 0 ? '0.' + new Array(-i).join('0') + h : h.length > i + 1 ? h.slice(0, i + 1) + '.' + h.slice(i + 1) : h + new Array(i - h.length + 2).join('0');
    }
}), d.register('DrM6g', function(a, c) {
    function e(a) {
        return a;
    }
    b(a.exports, 'default', function() {
        return e;
    });
}), d.register('sagy4', function(a, c) {
    b(a.exports, 'default', function() {
        return f;
    });
    var e = d('kuZqQ');

    function f(a) {
        return Math.max(0, -(0, e.default)(Math.abs(a)));
    }
}), d.register('cTB3q', function(a, c) {
    b(a.exports, 'default', function() {
        return f;
    });
    var e = d('kuZqQ');

    function f(a, b) {
        return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor((0, e.default)(b) / 3))) - (0, e.default)(Math.abs(a)));
    }
}), d.register('5LN+n', function(a, c) {
    b(a.exports, 'default', function() {
        return f;
    });
    var e = d('kuZqQ');

    function f(a, b) {
        return a = Math.abs(a), b = Math.abs(b) - a, Math.max(0, (0, e.default)(b) - (0, e.default)(a)) + 1;
    }
}), d.register('pbIcC', function(a, c) {
    b(a.exports, 'loggish', function() {
        return p;
    }), b(a.exports, 'default', function() {
        return G;
    });
    var e = d('Di0JY'),
        f = d('KMd79'),
        g = d('lsA+S'),
        h = d('EmhNR'),
        i = d('1ZM5s');

    function j(a) {
        return Math.log(a);
    }

    function k(a) {
        return Math.exp(a);
    }

    function l(a) {
        return -Math.log(-a);
    }

    function m(a) {
        return -Math.exp(-a);
    }

    function n(a) {
        return isFinite(a) ? +('1e' + a) : a < 0 ? 0 : a;
    }

    function o(a) {
        return function(b) {
            return -a(-b);
        };
    }

    function p(a) {
        var q, r, s = a(j, k),
            t = s.domain,
            u = 10;

        function v() {
            return q = function(a) {
                return a === Math.E ? Math.log : 10 === a && Math.log10 || 2 === a && Math.log2 || (a = Math.log(a), function(q) {
                    return Math.log(q) / a;
                });
            }(u), r = function(a) {
                return 10 === a ? n : a === Math.E ? Math.exp : function(q) {
                    return Math.pow(a, q);
                };
            }(u), t()[0] < 0 ? (q = o(q), r = o(r), a(l, m)) : a(j, k), s;
        }
        return s.base = function(a) {
            return arguments.length ? (u = +a, v()) : u;
        }, s.domain = function(a) {
            return arguments.length ? (t(a), v()) : t();
        }, s.ticks = function(a) {
            var w, x = t(),
                y = x[0],
                z = x[x.length - 1];
            (w = z < y) && (n = y, y = z, z = n);
            var A, B, C, D = q(y),
                E = q(z),
                F = null == a ? 10 : +a,
                G = [];
            if (!(u % 1) && E - D < F) {
                if (D = Math.floor(D), E = Math.ceil(E), y > 0) {
                    for (; D <= E; ++D)
                        for (B = 1, A = r(D); B < u; ++B)
                            if (!((C = A * B) < y)) {
                                if (C > z)
                                    break;
                                G.push(C);
                            }
                } else
                    for (; D <= E; ++D)
                        for (B = u - 1, A = r(D); B >= 1; --B)
                            if (!((C = A * B) < y)) {
                                if (C > z)
                                    break;
                                G.push(C);
                            }
                2 * G.length < F && (G = (0, e.default)(y, z, F));
            } else
                G = (0, e.default)(D, E, Math.min(E - D, F)).map(r);
            return w ? G.reverse() : G;
        }, s.tickFormat = function(a, e) {
            if (null == e && (e = 10 === u ? '.0e' : ','), 'function' != typeof e && (e = (0, f.format)(e)), a === 1 / 0)
                return e;
            null == a && (a = 10);
            var w = Math.max(1, u * a / s.ticks().length);
            return function(a) {
                var x = a / r(Math.round(q(a)));
                return x * u < u - 0.5 && (x *= u), x <= w ? e(a) : '';
            };
        }, s.nice = function() {
            return t((0, g.default)(t(), {
                floor: function(a) {
                    return r(Math.floor(q(a)));
                },
                ceil: function(a) {
                    return r(Math.ceil(q(a)));
                }
            }));
        }, s;
    }

    function q() {
        var r = p((0, h.transformer)()).domain([
            1,
            10
        ]);
        return r.copy = function() {
            return (0, h.copy)(r, q()).base(r.base());
        }, i.initRange.apply(r, arguments), r;
    }
}), d.register('lsA+S', function(a, c) {
    function e(a, b) {
        var f, g = 0,
            h = (a = a.slice()).length - 1,
            i = a[g],
            j = a[h];
        return j < i && (f = g, g = h, h = f, f = i, i = j, j = f), a[g] = b.floor(i), a[h] = b.ceil(j), a;
    }
    b(a.exports, 'default', function() {
        return e;
    });
}), d.register('Qu5bk', function(a, c) {
    b(a.exports, 'symlogish', function() {
        return j;
    }), b(a.exports, 'default', function() {
        return k;
    });
    var e = d('x07gB'),
        f = d('EmhNR'),
        g = d('1ZM5s');

    function h(a) {
        return function(b) {
            return Math.sign(b) * Math.log1p(Math.abs(b / a));
        };
    }

    function i(a) {
        return function(b) {
            return Math.sign(b) * Math.expm1(Math.abs(b)) * a;
        };
    }

    function j(a) {
        var k = 1,
            l = a(h(k), i(k));
        return l.constant = function(l) {
            return arguments.length ? a(h(k = +l), i(k)) : k;
        }, (0, e.linearish)(l);
    }

    function k() {
        var l = j((0, f.transformer)());
        return l.copy = function() {
            return (0, f.copy)(l, k()).constant(l.constant());
        }, g.initRange.apply(l, arguments);
    }
}), d.register('WFYap', function(a, c) {
    b(a.exports, 'powish', function() {
        return k;
    }), b(a.exports, 'default', function() {
        return l;
    }), b(a.exports, 'sqrt', function() {
        return m;
    });
    var e = d('x07gB'),
        f = d('EmhNR'),
        g = d('1ZM5s');

    function h(a) {
        return function(b) {
            return b < 0 ? -Math.pow(-b, a) : Math.pow(b, a);
        };
    }

    function i(a) {
        return a < 0 ? -Math.sqrt(-a) : Math.sqrt(a);
    }

    function j(a) {
        return a < 0 ? -a * a : a * a;
    }

    function k(a) {
        var l = a(f.identity, f.identity),
            m = 1;

        function n() {
            return 1 === m ? a(f.identity, f.identity) : 0.5 === m ? a(i, j) : a(h(m), h(1 / m));
        }
        return l.exponent = function(a) {
            return arguments.length ? (m = +a, n()) : m;
        }, (0, e.linearish)(l);
    }

    function l() {
        var m = k((0, f.transformer)());
        return m.copy = function() {
            return (0, f.copy)(m, l()).exponent(m.exponent());
        }, g.initRange.apply(m, arguments), m;
    }

    function m() {
        return l.apply(null, arguments).exponent(0.5);
    }
}), d.register('NebAY', function(a, c) {
    b(a.exports, 'default', function() {
        return k;
    });
    var e = d('EmhNR'),
        f = d('1ZM5s'),
        g = d('x07gB'),
        h = d('v0Z+k');

    function i(a) {
        return Math.sign(a) * a * a;
    }

    function j(a) {
        return Math.sign(a) * Math.sqrt(Math.abs(a));
    }

    function k() {
        var l, m = (0, e.default)(),
            n = [
                0,
                1
            ],
            o = !1;

        function p(n) {
            var q = j(m(n));
            return isNaN(q) ? l : o ? Math.round(q) : q;
        }
        return p.invert = function(l) {
            return m.invert(i(l));
        }, p.domain = function(l) {
            return arguments.length ? (m.domain(l), p) : m.domain();
        }, p.range = function(l) {
            return arguments.length ? (m.range((n = Array.from(l, h.default)).map(i)), p) : n.slice();
        }, p.rangeRound = function(l) {
            return p.range(l).round(!0);
        }, p.round = function(l) {
            return arguments.length ? (o = !!l, p) : o;
        }, p.clamp = function(l) {
            return arguments.length ? (m.clamp(l), p) : m.clamp();
        }, p.unknown = function(m) {
            return arguments.length ? (l = m, p) : l;
        }, p.copy = function() {
            return k(m.domain(), n).round(o).clamp(m.clamp()).unknown(l);
        }, f.initRange.apply(p, arguments), (0, g.linearish)(p);
    }
}), d.register('WrTRM', function(a, c) {
    b(a.exports, 'default', function() {
        return i;
    });
    var e = d('m1lok'),
        f = d('DRzpw'),
        g = d('xSt2p'),
        h = d('1ZM5s');

    function i() {
        var j, k = [],
            l = [],
            m = [];

        function n() {
            var o = 0,
                p = Math.max(1, l.length);
            for (m = new Array(p - 1); ++o < p;)
                m[o - 1] = (0, g.quantileSorted)(k, o / p);
            return o;
        }

        function o(k) {
            return null == k || isNaN(k = +k) ? j : l[(0, f.default)(m, k)];
        }
        return o.invertExtent = function(j) {
            var p = l.indexOf(j);
            return p < 0 ? [
                o,
                o
            ] : [
                p > 0 ? m[p - 1] : k[0],
                p < m.length ? m[p] : k[k.length - 1]
            ];
        }, o.domain = function(j) {
            if (!arguments.length)
                return k.slice();
            k = [];
            for (let p of j)
                null == p || isNaN(p = +p) || k.push(p);
            return k.sort(e.default), n();
        }, o.range = function(j) {
            return arguments.length ? (l = Array.from(j), n()) : l.slice();
        }, o.unknown = function(k) {
            return arguments.length ? (j = k, o) : j;
        }, o.quantiles = function() {
            return m.slice();
        }, o.copy = function() {
            return i().domain(k).range(l).unknown(j);
        }, h.initRange.apply(o, arguments);
    }
}), d.register('xSt2p', function(a, c) {
    b(a.exports, 'default', function() {
        return i;
    }), b(a.exports, 'quantileSorted', function() {
        return l;
    });
    var e = d('wsoi3'),
        f = d('iA5pD'),
        g = d('m7jP9'),
        h = d('2k1KA');

    function i(a, b, c) {
        if (d = (a = Float64Array.from((0, h.numbers)(a, c))).length) {
            if ((b = +b) <= 0 || d < 2)
                return (0, f.default)(a);
            if (b >= 1)
                return (0, e.default)(a);
            var j, k = (j - 1) * b,
                l = Math.floor(k),
                m = (0, e.default)((0, g.default)(a, l).subarray(0, l + 1));
            return m + ((0, f.default)(a.subarray(l + 1)) - m) * (k - l);
        }
    }

    function j(a, b, k = h.default) {
        if (d = a.length) {
            if ((b = +b) <= 0 || d < 2)
                return +k(a[0], 0, a);
            if (b >= 1)
                return +k(a[d - 1], d - 1, a);
            var l, m = (l - 1) * b,
                n = Math.floor(m),
                o = +k(a[n], n, a);
            return o + (+k(a[n + 1], n + 1, a) - o) * (m - n);
        }
    }
}), d.register('wsoi3', function(a, c) {
    function e(a, b) {
        let f;
        if (void 0 === b)
            for (const g of a)
                null != g && (f < g || void 0 === f && g >= g) && (f = g);
        else {
            let h = -1;
            for (let i of a)
                null != (i = g(i, ++h, a)) && (f < i || void 0 === f && i >= i) && (f = i);
        }
        return f;
    }
    b(a.exports, 'default', function() {
        return e;
    });
}), d.register('iA5pD', function(a, c) {
    function e(a, b) {
        let f;
        if (void 0 === b)
            for (const g of a)
                null != g && (f > g || void 0 === f && g >= g) && (f = g);
        else {
            let h = -1;
            for (let i of a)
                null != (i = g(i, ++h, a)) && (f > i || void 0 === f && i >= i) && (f = i);
        }
        return f;
    }
    b(a.exports, 'default', function() {
        return e;
    });
}), d.register('m7jP9', function(a, c) {
    b(a.exports, 'default', function() {
        return f;
    });
    var e = d('m1lok');

    function f(a, b, g = 0, h = a.length - 1, i = e.default) {
        for (; h > g;) {
            if (h - g > 600) {
                const j = h - g + 1,
                    k = b - g + 1,
                    l = Math.log(j),
                    m = 0.5 * Math.exp(2 * l / 3),
                    n = 0.5 * Math.sqrt(l * m * (j - m) / j) * (k - j / 2 < 0 ? -1 : 1);
                f(a, b, Math.max(g, Math.floor(b - k * m / j + n)), Math.min(h, Math.floor(b + (j - k) * m / j + n)), i);
            }
            const j = a[b];
            let k = l,
                m = n;
            for (j(a, l, b), i(a[n], j) > 0 && j(a, l, n); k < m;) {
                for (j(a, k, m), ++k, --m; i(a[k], j) < 0;)
                    ++k;
                for (; i(a[m], j) > 0;)
                    --m;
            }
            0 === i(a[l], j) ? j(a, l, m) : (++m, j(a, m, n)), m <= b && (l = m + 1), b <= m && (n = m - 1);
        }
        return a;
    }

    function j(a, b, g) {
        const k = a[b];
        a[b] = a[g], a[g] = k;
    }
}), d.register('Sw89T', function(a, c) {
    b(a.exports, 'default', function() {
        return h;
    });
    var e = d('DRzpw'),
        f = d('x07gB'),
        g = d('1ZM5s');

    function h() {
        var i, j = 0,
            k = 1,
            l = 1,
            m = [0.5],
            n = [
                0,
                1
            ];

        function o(j) {
            return null != j && j <= j ? n[(0, e.default)(m, j, 0, l)] : i;
        }

        function p() {
            var q = -1;
            for (m = new Array(l); ++q < l;)
                m[q] = ((q + 1) * k - (q - l) * j) / (l + 1);
            return o;
        }
        return o.domain = function(i) {
            return arguments.length ? ([q, r] = i, q = +q, r = +r, p()) : [
                q,
                r
            ];
        }, o.range = function(i) {
            return arguments.length ? (l = (n = Array.from(i)).length - 1, p()) : n.slice();
        }, o.invertExtent = function(i) {
            var q = n.indexOf(i);
            return q < 0 ? [
                o,
                o
            ] : q < 1 ? [
                j,
                m[0]
            ] : q >= l ? [
                m[l - 1],
                k
            ] : [
                m[q - 1],
                m[q]
            ];
        }, o.unknown = function(j) {
            return arguments.length ? (i = j, o) : o;
        }, o.thresholds = function() {
            return m.slice();
        }, o.copy = function() {
            return h().domain([
                j,
                k
            ]).range(n).unknown(i);
        }, g.initRange.apply((0, f.linearish)(o), arguments);
    }
}), d.register('u2LpJ', function(a, c) {
    b(a.exports, 'default', function() {
        return g;
    });
    var e = d('DRzpw'),
        f = d('1ZM5s');

    function g() {
        var h, i = [0.5],
            j = [
                0,
                1
            ],
            k = 1;

        function l(f) {
            return null != f && f <= f ? j[(0, e.default)(i, f, 0, k)] : h;
        }
        return l.domain = function(h) {
            return arguments.length ? (i = Array.from(h), k = Math.min(i.length, j.length - 1), l) : i.slice();
        }, l.range = function(h) {
            return arguments.length ? (j = Array.from(h), k = Math.min(i.length, j.length - 1), l) : j.slice();
        }, l.invertExtent = function(h) {
            var m = j.indexOf(h);
            return [
                i[m - 1],
                i[m]
            ];
        }, l.unknown = function(i) {
            return arguments.length ? (h = i, l) : h;
        }, l.copy = function() {
            return g().domain(i).range(j).unknown(h);
        }, f.initRange.apply(l, arguments);
    }
}), d.register('IucxU', function(a, c) {
    b(a.exports, 'calendar', function() {
        return s;
    }), b(a.exports, 'default', function() {
        return x;
    });
    var e = d('IozjY'),
        f = d('jtkkk'),
        g = d('NrO2p'),
        h = d('SnHOY'),
        i = d('emOiu'),
        j = d('U5s55'),
        k = d('rNy2g'),
        l = d('rJPVy'),
        m = d('GshDC'),
        n = d('EmhNR'),
        o = d('1ZM5s'),
        p = d('lsA+S');

    function q(a) {
        return new Date(a);
    }

    function r(a) {
        return a instanceof Date ? +a : +new Date(+a);
    }

    function s(a, b, c, d, e, f, g, h, i, j) {
        var t = (0, n.default)(),
            u = t.invert,
            v = t.domain,
            w = j('.%L'),
            x = j(':%S'),
            y = j('%I:%M'),
            z = j('%I %p'),
            A = j('%a %d'),
            B = j('%b %d'),
            C = j('%B'),
            D = j('%Y');

        function E(a) {
            return (i(a) < a ? w : h(a) < a ? x : g(a) < a ? y : f(a) < a ? z : d(a) < a ? e(a) < a ? A : B : c(a) < a ? C : D)(a);
        }
        return t.invert = function(a) {
            return new Date(u(a));
        }, t.domain = function(a) {
            return arguments.length ? v(Array.from(a, r)) : v().map(q);
        }, t.ticks = function(b) {
            var F = v();
            return a(F[0], F[F.length - 1], null == b ? 10 : b);
        }, t.tickFormat = function(a, b) {
            return null == b ? E : j(b);
        }, t.nice = function(a) {
            var F = v();
            return a && 'function' == typeof a.range || (a = b(F[0], F[F.length - 1], null == a ? 10 : a)), a ? v((0, p.default)(F, a)) : t;
        }, t.copy = function() {
            return (0, n.copy)(t, s(a, b, c, d, e, f, g, h, i, j));
        }, t;
    }

    function t() {
        return o.initRange.apply(s(j.timeTicks, j.timeTickInterval, l.default, h.default, k.sunday, e.default, f.default, g.default, i.default, m.timeFormat).domain([
            new Date(2000, 0, 1),
            new Date(2000, 0, 2)
        ]), arguments);
    }
}), d.register('IozjY', function(a, c) {
    b(a.exports, 'default', function() {
        return h;
    });
    var e = d('/u0xX'),
        f = d('34fK+'),
        g = (0, e.default)(a => a.setHours(0, 0, 0, 0), (a, b) => a.setDate(a.getDate() + b), (a, b) => (b - a - (b.getTimezoneOffset() - a.getTimezoneOffset()) * f.durationMinute) / f.durationDay, a => a.getDate() - 1),
        h = i;
    i.range;
}), d.register('/u0xX', function(a, c) {
    b(a.exports, 'default', function() {
        return g;
    });
    var e = new Date(),
        f = new Date();

    function g(a, b, c, j) {
        function h(b) {
            return a(b = 0 === arguments.length ? new Date() : new Date(+b)), b;
        }
        return h.floor = function(b) {
            return a(b = new Date(+b)), b;
        }, h.ceil = function(c) {
            return a(c = new Date(c - 1)), b(c, 1), a(c), c;
        }, h.round = function(a) {
            var i = h(a),
                j = h.ceil(a);
            return a - i < j - a ? i : j;
        }, h.offset = function(a, c) {
            return b(a = new Date(+a), null == c ? 1 : Math.floor(c)), a;
        }, h.range = function(c, e, f) {
            var i, j = [];
            if (c = h.ceil(c), f = null == f ? 1 : Math.floor(f), !(c < e && f > 0))
                return j;
            do {
                j.push(i = new Date(+c)), b(c, f), a(c);
            } while (i < c && c < e);
            return j;
        }, h.filter = function(c) {
            return g(function(b) {
                if (b >= b)
                    for (; a(b), !c(b);)
                        b.setTime(b - 1);
            }, function(a, e) {
                if (a >= a)
                    if (e < 0)
                        for (; ++e <= 0;)
                            for (; b(a, -1), !c(a););
                    else
                        for (; --e >= 0;)
                            for (; b(a, 1), !c(a););
            });
        }, c && (h.count = function(b, g) {
            return e.setTime(+b), f.setTime(+g), a(e), a(f), Math.floor(c(e, f));
        }, h.every = function(a) {
            return a = Math.floor(a), isFinite(a) && a > 0 ? a > 1 ? h.filter(h ? function(b) {
                return h(b) % a == 0;
            } : function(b) {
                return h.count(0, b) % a == 0;
            }) : h : null;
        }), h;
    }
}), d.register('34fK+', function(a, c) {
    b(a.exports, 'durationSecond', function() {
        return d;
    }), b(a.exports, 'durationMinute', function() {
        return f;
    }), b(a.exports, 'durationHour', function() {
        return g;
    }), b(a.exports, 'durationDay', function() {
        return h;
    }), b(a.exports, 'durationWeek', function() {
        return i;
    }), b(a.exports, 'durationMonth', function() {
        return j;
    }), b(a.exports, 'durationYear', function() {
        return k;
    });
    const e = 1000,
        f = 60 * e,
        g = 60 * f,
        h = 24 * g,
        i = 7 * h,
        j = 30 * h,
        k = 365 * h;
}), d.register('jtkkk', function(a, c) {
    b(a.exports, 'default', function() {
        return h;
    });
    var e = d('/u0xX'),
        f = d('34fK+'),
        g = (0, e.default)(function(a) {
            a.setTime(a - a.getMilliseconds() - a.getSeconds() * f.durationSecond - a.getMinutes() * f.durationMinute);
        }, function(a, b) {
            a.setTime(+a + b * f.durationHour);
        }, function(a, b) {
            return (b - a) / f.durationHour;
        }, function(a) {
            return a.getHours();
        }),
        h = i;
    i.range;
}), d.register('NrO2p', function(a, c) {
    b(a.exports, 'default', function() {
        return h;
    });
    var e = d('/u0xX'),
        f = d('34fK+'),
        g = (0, e.default)(function(a) {
            a.setTime(a - a.getMilliseconds() - a.getSeconds() * f.durationSecond);
        }, function(a, b) {
            a.setTime(+a + b * f.durationMinute);
        }, function(a, b) {
            return (b - a) / f.durationMinute;
        }, function(a) {
            return a.getMinutes();
        }),
        h = i;
    i.range;
}), d.register('SnHOY', function(a, c) {
    b(a.exports, 'default', function() {
        return f;
    });
    var e = (0, d('/u0xX').default)(function(a) {
            a.setDate(1), a.setHours(0, 0, 0, 0);
        }, function(a, b) {
            a.setMonth(a.getMonth() + b);
        }, function(a, b) {
            return b.getMonth() - a.getMonth() + 12 * (b.getFullYear() - a.getFullYear());
        }, function(a) {
            return a.getMonth();
        }),
        f = g;
    g.range;
}), d.register('emOiu', function(a, c) {
    b(a.exports, 'default', function() {
        return h;
    });
    var e = d('/u0xX'),
        f = d('34fK+'),
        g = (0, e.default)(function(a) {
            a.setTime(a - a.getMilliseconds());
        }, function(a, b) {
            a.setTime(+a + b * f.durationSecond);
        }, function(a, b) {
            return (b - a) / f.durationSecond;
        }, function(a) {
            return a.getUTCSeconds();
        }),
        h = i;
    i.range;
}), d.register('U5s55', function(a, c) {
    b(a.exports, 'utcTicks', function() {
        return w;
    }), b(a.exports, 'utcTickInterval', function() {
        return x;
    }), b(a.exports, 'timeTicks', function() {
        return y;
    }), b(a.exports, 'timeTickInterval', function() {
        return z;
    });
    var e = d('6Kdg3'),
        f = d('Di0JY'),
        g = d('34fK+'),
        h = d('63t1H'),
        i = d('emOiu'),
        j = d('NrO2p'),
        k = d('jtkkk'),
        l = d('IozjY'),
        m = d('rNy2g'),
        n = d('SnHOY'),
        o = d('rJPVy'),
        p = d('jNqDC'),
        q = d('QJPbF'),
        r = d('DoOTI'),
        s = d('Il/Uc'),
        t = d('raX2k'),
        u = d('CGLWm');

    function v(a, b, c, d, j, k) {
        const w = [
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
                k,
                1,
                g.durationMinute
            ],
            [
                k,
                5,
                5 * g.durationMinute
            ],
            [
                k,
                15,
                15 * g.durationMinute
            ],
            [
                k,
                30,
                30 * g.durationMinute
            ],
            [
                j,
                1,
                g.durationHour
            ],
            [
                j,
                3,
                3 * g.durationHour
            ],
            [
                j,
                6,
                6 * g.durationHour
            ],
            [
                j,
                12,
                12 * g.durationHour
            ],
            [
                d,
                1,
                g.durationDay
            ],
            [
                d,
                2,
                2 * g.durationDay
            ],
            [
                c,
                1,
                g.durationWeek
            ],
            [
                b,
                1,
                g.durationMonth
            ],
            [
                b,
                3,
                3 * g.durationMonth
            ],
            [
                a,
                1,
                g.durationYear
            ]
        ];

        function x(b, c, d) {
            const y = Math.abs(c - b) / d,
                z = (0, e.default)(([, , A]) => A).right(w, y);
            if (z === w.length)
                return A.every((0, f.tickStep)(b / g.durationYear, c / g.durationYear, d));
            if (0 === z)
                return h.default.every(Math.max((0, f.tickStep)(b, c, d), 1));
            const [B, C] = w[y / w[z - 1][2] < w[z][2] / y ? z - 1 : z];
            return B.every(C);
        }
        return [
            function(a, b, c) {
                const y = b < a;
                y && ([z, A] = [
                    A,
                    z
                ]);
                const B = c && 'function' == typeof c.range ? c : x(z, A, c),
                    C = B ? B.range(z, +A + 1) : [];
                return y ? C.reverse() : C;
            },
            x
        ];
    }
    const [w, x] = v(u.default, t.default, s.utcSunday, r.default, q.default, p.default), [y, z] = v(o.default, n.default, m.sunday, l.default, k.default, j.default);
}), d.register('63t1H', function(a, c) {
    b(a.exports, 'default', function() {
        return g;
    });
    var e = d('/u0xX'),
        f = (0, e.default)(function() {}, function(a, b) {
            a.setTime(+a + b);
        }, function(a, b) {
            return b - a;
        });
    f.every = function(a) {
        return a = Math.floor(a), isFinite(a) && a > 0 ? a > 1 ? (0, e.default)(function(b) {
            b.setTime(Math.floor(b / a) * a);
        }, function(b, c) {
            b.setTime(+b + c * a);
        }, function(b, c) {
            return (c - b) / a;
        }) : f : null;
    };
    var g = h;
    h.range;
}), d.register('rNy2g', function(a, c) {
    b(a.exports, 'sunday', function() {
        return h;
    }), b(a.exports, 'monday', function() {
        return i;
    }), b(a.exports, 'thursday', function() {
        return l;
    });
    var e = d('/u0xX'),
        f = d('34fK+');

    function g(a) {
        return (0, e.default)(function(b) {
            b.setDate(b.getDate() - (b.getDay() + 7 - a) % 7), b.setHours(0, 0, 0, 0);
        }, function(a, b) {
            a.setDate(a.getDate() + 7 * b);
        }, function(a, b) {
            return (b - a - (b.getTimezoneOffset() - a.getTimezoneOffset()) * f.durationMinute) / f.durationWeek;
        });
    }
    var h = g(0),
        i = g(1),
        j = g(2),
        k = g(3),
        l = g(4),
        m = g(5),
        n = g(6);
    h.range, i.range, j.range, k.range, l.range, m.range, n.range;
}), d.register('rJPVy', function(a, c) {
    b(a.exports, 'default', function() {
        return g;
    });
    var e = d('/u0xX'),
        f = (0, e.default)(function(a) {
            a.setMonth(0, 1), a.setHours(0, 0, 0, 0);
        }, function(a, b) {
            a.setFullYear(a.getFullYear() + b);
        }, function(a, b) {
            return b.getFullYear() - a.getFullYear();
        }, function(a) {
            return a.getFullYear();
        });
    f.every = function(a) {
        return isFinite(a = Math.floor(a)) && a > 0 ? (0, e.default)(function(b) {
            b.setFullYear(Math.floor(b.getFullYear() / a) * a), b.setMonth(0, 1), b.setHours(0, 0, 0, 0);
        }, function(b, c) {
            b.setFullYear(b.getFullYear() + c * a);
        }) : null;
    };
    var g = h;
    h.range;
}), d.register('jNqDC', function(a, c) {
    b(a.exports, 'default', function() {
        return h;
    });
    var e = d('/u0xX'),
        f = d('34fK+'),
        g = (0, e.default)(function(a) {
            a.setUTCSeconds(0, 0);
        }, function(a, b) {
            a.setTime(+a + b * f.durationMinute);
        }, function(a, b) {
            return (b - a) / f.durationMinute;
        }, function(a) {
            return a.getUTCMinutes();
        }),
        h = i;
    i.range;
}), d.register('QJPbF', function(a, c) {
    b(a.exports, 'default', function() {
        return h;
    });
    var e = d('/u0xX'),
        f = d('34fK+'),
        g = (0, e.default)(function(a) {
            a.setUTCMinutes(0, 0, 0);
        }, function(a, b) {
            a.setTime(+a + b * f.durationHour);
        }, function(a, b) {
            return (b - a) / f.durationHour;
        }, function(a) {
            return a.getUTCHours();
        }),
        h = i;
    i.range;
}), d.register('DoOTI', function(a, c) {
    b(a.exports, 'default', function() {
        return h;
    });
    var e = d('/u0xX'),
        f = d('34fK+'),
        g = (0, e.default)(function(a) {
            a.setUTCHours(0, 0, 0, 0);
        }, function(a, b) {
            a.setUTCDate(a.getUTCDate() + b);
        }, function(a, b) {
            return (b - a) / f.durationDay;
        }, function(a) {
            return a.getUTCDate() - 1;
        }),
        h = i;
    i.range;
}), d.register('Il/Uc', function(a, c) {
    b(a.exports, 'utcSunday', function() {
        return h;
    }), b(a.exports, 'utcMonday', function() {
        return i;
    }), b(a.exports, 'utcThursday', function() {
        return l;
    });
    var e = d('/u0xX'),
        f = d('34fK+');

    function g(a) {
        return (0, e.default)(function(b) {
            b.setUTCDate(b.getUTCDate() - (b.getUTCDay() + 7 - a) % 7), b.setUTCHours(0, 0, 0, 0);
        }, function(a, b) {
            a.setUTCDate(a.getUTCDate() + 7 * b);
        }, function(a, b) {
            return (b - a) / f.durationWeek;
        });
    }
    var h = g(0),
        i = g(1),
        j = g(2),
        k = g(3),
        l = g(4),
        m = g(5),
        n = g(6);
    h.range, i.range, j.range, k.range, l.range, m.range, n.range;
}), d.register('raX2k', function(a, c) {
    b(a.exports, 'default', function() {
        return f;
    });
    var e = (0, d('/u0xX').default)(function(a) {
            a.setUTCDate(1), a.setUTCHours(0, 0, 0, 0);
        }, function(a, b) {
            a.setUTCMonth(a.getUTCMonth() + b);
        }, function(a, b) {
            return b.getUTCMonth() - a.getUTCMonth() + 12 * (b.getUTCFullYear() - a.getUTCFullYear());
        }, function(a) {
            return a.getUTCMonth();
        }),
        f = g;
    g.range;
}), d.register('CGLWm', function(a, c) {
    b(a.exports, 'default', function() {
        return g;
    });
    var e = d('/u0xX'),
        f = (0, e.default)(function(a) {
            a.setUTCMonth(0, 1), a.setUTCHours(0, 0, 0, 0);
        }, function(a, b) {
            a.setUTCFullYear(a.getUTCFullYear() + b);
        }, function(a, b) {
            return b.getUTCFullYear() - a.getUTCFullYear();
        }, function(a) {
            return a.getUTCFullYear();
        });
    f.every = function(a) {
        return isFinite(a = Math.floor(a)) && a > 0 ? (0, e.default)(function(b) {
            b.setUTCFullYear(Math.floor(b.getUTCFullYear() / a) * a), b.setUTCMonth(0, 1), b.setUTCHours(0, 0, 0, 0);
        }, function(b, c) {
            b.setUTCFullYear(b.getUTCFullYear() + c * a);
        }) : null;
    };
    var g = h;
    h.range;
}), d.register('GshDC', function(a, c) {
    b(a.exports, 'timeFormat', function() {
        return f;
    }), b(a.exports, 'utcFormat', function() {
        return g;
    });
    var e, f, g, h, i = d('yYXI7');
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
    }, e = (0, i.default)(h), f = e.format, e.parse, g = e.utcFormat, e.utcParse;
}), d.register('yYXI7', function(a, c) {
    b(a.exports, 'default', function() {
        return n;
    });
    var e = d('IozjY'),
        f = d('rNy2g'),
        g = d('rJPVy'),
        h = d('DoOTI'),
        i = d('Il/Uc'),
        j = d('CGLWm');

    function k(a) {
        if (0 <= a.y && a.y < 100) {
            var l = new Date(-1, a.m, a.d, a.H, a.M, a.S, a.L);
            return l.setFullYear(a.y), l;
        }
        return new Date(a.y, a.m, a.d, a.H, a.M, a.S, a.L);
    }

    function l(a) {
        if (0 <= a.y && a.y < 100) {
            var m = new Date(Date.UTC(-1, a.m, a.d, a.H, a.M, a.S, a.L));
            return m.setUTCFullYear(a.y), m;
        }
        return new Date(Date.UTC(a.y, a.m, a.d, a.H, a.M, a.S, a.L));
    }

    function m(a, b, c) {
        return {
            y: a,
            m: b,
            d: c,
            H: 0,
            M: 0,
            S: 0,
            L: 0
        };
    }

    function n(a) {
        var o = a.dateTime,
            p = a.date,
            q = a.time,
            r = a.periods,
            s = a.days,
            t = a.shortDays,
            u = a.months,
            v = a.shortMonths,
            w = u(r),
            x = v(r),
            y = u(s),
            z = v(s),
            A = u(t),
            B = v(t),
            C = u(u),
            D = v(u),
            E = u(v),
            F = v(v),
            G = {
                a: function(a) {
                    return t[a.getDay()];
                },
                A: function(a) {
                    return s[a.getDay()];
                },
                b: function(a) {
                    return v[a.getMonth()];
                },
                B: function(a) {
                    return u[a.getMonth()];
                },
                c: null,
                d: Q,
                e: Q,
                f: V,
                g: eb,
                G: gb,
                H: R,
                I: S,
                j: T,
                L: U,
                m: W,
                M: X,
                p: function(a) {
                    return r[+(a.getHours() >= 12)];
                },
                q: function(a) {
                    return 1 + ~~(a.getMonth() / 3);
                },
                Q: Db,
                s: Eb,
                S: Y,
                u: Z,
                U: $,
                V: ab,
                w: bb,
                W: cb,
                x: null,
                X: null,
                y: db,
                Y: fb,
                Z: hb,
                '%': Cb
            },
            H = {
                a: function(a) {
                    return t[a.getUTCDay()];
                },
                A: function(a) {
                    return s[a.getUTCDay()];
                },
                b: function(a) {
                    return v[a.getUTCMonth()];
                },
                B: function(a) {
                    return u[a.getUTCMonth()];
                },
                c: null,
                d: ib,
                e: ib,
                f: nb,
                g: yb,
                G: Ab,
                H: jb,
                I: kb,
                j: lb,
                L: mb,
                m: ob,
                M: pb,
                p: function(a) {
                    return r[+(a.getUTCHours() >= 12)];
                },
                q: function(a) {
                    return 1 + ~~(a.getUTCMonth() / 3);
                },
                Q: Db,
                s: Eb,
                S: qb,
                u: rb,
                U: sb,
                V: ub,
                w: vb,
                W: wb,
                x: null,
                X: null,
                y: xb,
                Y: zb,
                Z: Bb,
                '%': Cb
            },
            I = {
                a: function(a, o, p) {
                    var J = A.exec(o.slice(p));
                    return J ? (a.w = B.get(J[0].toLowerCase()), p + J[0].length) : -1;
                },
                A: function(a, o, p) {
                    var J = y.exec(o.slice(p));
                    return J ? (a.w = z.get(J[0].toLowerCase()), p + J[0].length) : -1;
                },
                b: function(a, o, p) {
                    var J = E.exec(o.slice(p));
                    return J ? (a.m = F.get(J[0].toLowerCase()), p + J[0].length) : -1;
                },
                B: function(a, o, p) {
                    var J = C.exec(o.slice(p));
                    return J ? (a.m = D.get(J[0].toLowerCase()), p + J[0].length) : -1;
                },
                c: function(a, p, q) {
                    return L(a, o, p, q);
                },
                d: G,
                e: G,
                f: M,
                g: C,
                G: B,
                H: I,
                I: I,
                j: H,
                L: L,
                m: F,
                M: J,
                p: function(a, o, p) {
                    var J = w.exec(o.slice(p));
                    return J ? (a.p = x.get(J[0].toLowerCase()), p + J[0].length) : -1;
                },
                q: E,
                Q: O,
                s: P,
                S: K,
                u: x,
                U: y,
                V: z,
                w: w,
                W: A,
                x: function(a, o, q) {
                    return L(a, p, o, q);
                },
                X: function(a, o, p) {
                    return L(a, q, o, p);
                },
                y: C,
                Y: B,
                Z: D,
                '%': N
            };

        function J(a, o) {
            return function(p) {
                var K, L, M, N = [],
                    O = -1,
                    P = 0,
                    Q = a.length;
                for (p instanceof Date || (p = new Date(+p)); ++O < Q;)
                    37 === a.charCodeAt(O) && (N.push(a.slice(P, O)), null != (L = o[K = a.charAt(++O)]) ? K = a.charAt(++O) : L = 'e' === K ? ' ' : '0', (M = o[K]) && (K = M(p, L)), N.push(K), P = O + 1);
                return N.push(a.slice(P, O)), N.join('');
            };
        }

        function K(a, o) {
            return function(p) {
                var L, M, N = m(1900, void 0, 1);
                if (L(N, a, p += '', 0) != p.length)
                    return null;
                if ('Q' in N)
                    return new Date(N.Q);
                if ('s' in N)
                    return new Date(1000 * N.s + ('L' in N ? N.L : 0));
                if (o && !('Z' in N) && (N.Z = 0), 'p' in N && (N.H = N.H % 12 + 12 * N.p), void 0 === N.m && (N.m = 'q' in N ? N.q : 0), 'V' in N) {
                    if (N.V < 1 || N.V > 53)
                        return null;
                    'w' in N || (N.w = 1), 'Z' in N ? (M = (L = l(m(N.y, 0, 1))).getUTCDay(), L = M > 4 || 0 === M ? i.utcMonday.ceil(L) : (0, i.utcMonday)(L), L = h.default.offset(L, 7 * (N.V - 1)), N.y = L.getUTCFullYear(), N.m = L.getUTCMonth(), N.d = L.getUTCDate() + (N.w + 6) % 7) : (M = (L = k(m(N.y, 0, 1))).getDay(), L = M > 4 || 0 === M ? f.monday.ceil(L) : (0, f.monday)(L), L = e.default.offset(L, 7 * (N.V - 1)), N.y = L.getFullYear(), N.m = L.getMonth(), N.d = L.getDate() + (N.w + 6) % 7);
                } else
                    ('W' in N || 'U' in N) && ('w' in N || (N.w = 'u' in N ? N.u % 7 : 'W' in N ? 1 : 0), M = 'Z' in N ? l(m(N.y, 0, 1)).getUTCDay() : k(m(N.y, 0, 1)).getDay(), N.m = 0, N.d = 'W' in N ? (N.w + 6) % 7 + 7 * N.W - (M + 5) % 7 : N.w + 7 * N.U - (M + 6) % 7);
                return 'Z' in N ? (N.H += N.Z / 100 | 0, N.M += N.Z % 100, l(N)) : k(N);
            };
        }

        function L(a, o, p, q) {
            for (var M, N, O = 0, P = o.length, Q = p.length; O < P;) {
                if (q >= Q)
                    return -1;
                if (37 === (M = o.charCodeAt(O++))) {
                    if (M = o.charAt(O++), !(N = I[M in o ? o.charAt(O++) : M]) || (q = N(a, p, q)) < 0)
                        return -1;
                } else if (M != p.charCodeAt(q++))
                    return -1;
            }
            return q;
        }
        return G.x = J(p, G), G.X = J(q, G), G.c = J(o, G), H.x = J(p, H), H.X = J(q, H), H.c = J(o, H), {
            format: function(a) {
                var M = J(a += '', G);
                return M.toString = function() {
                    return a;
                }, M;
            },
            parse: function(a) {
                var M = K(a += '', !1);
                return M.toString = function() {
                    return a;
                }, M;
            },
            utcFormat: function(a) {
                var M = J(a += '', H);
                return M.toString = function() {
                    return a;
                }, M;
            },
            utcParse: function(a) {
                var M = K(a += '', !0);
                return M.toString = function() {
                    return a;
                }, M;
            }
        };
    }
    var o = {
            '-': '',
            _: ' ',
            0: '0'
        },
        p = /^\s*\d+/,
        q = /^%/,
        r = /[\\^$*+?|[\]().{}]/g;

    function s(a, b, c) {
        var t = a < 0 ? '-' : '',
            u = (t ? -a : a) + '',
            v = u.length;
        return t + (v < c ? new Array(c - v + 1).join(b) + u : u);
    }

    function t(a) {
        return a.replace(r, '\\$&');
    }

    function u(a) {
        return new RegExp('^(?:' + a.map(t).join('|') + ')', 'i');
    }

    function v(a) {
        return new Map(a.map((a, b) => [
            a.toLowerCase(),
            b
        ]));
    }

    function w(a, b, c) {
        var x = p.exec(b.slice(c, c + 1));
        return x ? (a.w = +x[0], c + x[0].length) : -1;
    }

    function x(a, b, c) {
        var y = p.exec(b.slice(c, c + 1));
        return y ? (a.u = +y[0], c + y[0].length) : -1;
    }

    function y(a, b, c) {
        var z = p.exec(b.slice(c, c + 2));
        return z ? (a.U = +z[0], c + z[0].length) : -1;
    }

    function z(a, b, c) {
        var A = p.exec(b.slice(c, c + 2));
        return A ? (a.V = +A[0], c + A[0].length) : -1;
    }

    function A(a, b, c) {
        var B = p.exec(b.slice(c, c + 2));
        return B ? (a.W = +B[0], c + B[0].length) : -1;
    }

    function B(a, b, c) {
        var C = p.exec(b.slice(c, c + 4));
        return C ? (a.y = +C[0], c + C[0].length) : -1;
    }

    function C(a, b, c) {
        var D = p.exec(b.slice(c, c + 2));
        return D ? (a.y = +D[0] + (+D[0] > 68 ? 1900 : 2000), c + D[0].length) : -1;
    }

    function D(a, b, c) {
        var E = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(b.slice(c, c + 6));
        return E ? (a.Z = E[1] ? 0 : -(E[2] + (E[3] || '00')), c + E[0].length) : -1;
    }

    function E(a, b, c) {
        var F = p.exec(b.slice(c, c + 1));
        return F ? (a.q = 3 * F[0] - 3, c + F[0].length) : -1;
    }

    function F(a, b, c) {
        var G = p.exec(b.slice(c, c + 2));
        return G ? (a.m = G[0] - 1, c + G[0].length) : -1;
    }

    function G(a, b, c) {
        var H = p.exec(b.slice(c, c + 2));
        return H ? (a.d = +H[0], c + H[0].length) : -1;
    }

    function H(a, b, c) {
        var I = p.exec(b.slice(c, c + 3));
        return I ? (a.m = 0, a.d = +I[0], c + I[0].length) : -1;
    }

    function I(a, b, c) {
        var J = p.exec(b.slice(c, c + 2));
        return J ? (a.H = +J[0], c + J[0].length) : -1;
    }

    function J(a, b, c) {
        var K = p.exec(b.slice(c, c + 2));
        return K ? (a.M = +K[0], c + K[0].length) : -1;
    }

    function K(a, b, c) {
        var L = p.exec(b.slice(c, c + 2));
        return L ? (a.S = +L[0], c + L[0].length) : -1;
    }

    function L(a, b, c) {
        var M = p.exec(b.slice(c, c + 3));
        return M ? (a.L = +M[0], c + M[0].length) : -1;
    }

    function M(a, b, c) {
        var N = p.exec(b.slice(c, c + 6));
        return N ? (a.L = Math.floor(N[0] / 1000), c + N[0].length) : -1;
    }

    function N(a, b, c) {
        var O = q.exec(b.slice(c, c + 1));
        return O ? c + O[0].length : -1;
    }

    function O(a, b, c) {
        var P = p.exec(b.slice(c));
        return P ? (a.Q = +P[0], c + P[0].length) : -1;
    }

    function P(a, b, c) {
        var Q = p.exec(b.slice(c));
        return Q ? (a.s = +Q[0], c + Q[0].length) : -1;
    }

    function Q(a, b) {
        return s(a.getDate(), b, 2);
    }

    function R(a, b) {
        return s(a.getHours(), b, 2);
    }

    function S(a, b) {
        return s(a.getHours() % 12 || 12, b, 2);
    }

    function T(a, b) {
        return s(1 + e.default.count((0, g.default)(a), a), b, 3);
    }

    function U(a, b) {
        return s(a.getMilliseconds(), b, 3);
    }

    function V(a, b) {
        return U(a, b) + '000';
    }

    function W(a, b) {
        return s(a.getMonth() + 1, b, 2);
    }

    function X(a, b) {
        return s(a.getMinutes(), b, 2);
    }

    function Y(a, b) {
        return s(a.getSeconds(), b, 2);
    }

    function Z(a) {
        var $ = a.getDay();
        return 0 === $ ? 7 : $;
    }

    function $(a, b) {
        return s(f.sunday.count((0, g.default)(a) - 1, a), b, 2);
    }

    function _(a) {
        var ab = a.getDay();
        return ab >= 4 || 0 === ab ? (0, f.thursday)(a) : f.thursday.ceil(a);
    }

    function ab(a, b) {
        return a = _(a), s(f.thursday.count((0, g.default)(a), a) + (4 === (0, g.default)(a).getDay()), b, 2);
    }

    function bb(a) {
        return a.getDay();
    }

    function cb(a, b) {
        return s(f.monday.count((0, g.default)(a) - 1, a), b, 2);
    }

    function db(a, b) {
        return s(a.getFullYear() % 100, b, 2);
    }

    function eb(a, b) {
        return s((a = _(a)).getFullYear() % 100, b, 2);
    }

    function fb(a, b) {
        return s(a.getFullYear() % 10000, b, 4);
    }

    function gb(a, b) {
        var hb = a.getDay();
        return s((a = hb >= 4 || 0 === hb ? (0, f.thursday)(a) : f.thursday.ceil(a)).getFullYear() % 10000, b, 4);
    }

    function hb(a) {
        var ib = a.getTimezoneOffset();
        return (ib > 0 ? '-' : (ib *= -1, '+')) + s(ib / 60 | 0, '0', 2) + s(ib % 60, '0', 2);
    }

    function ib(a, b) {
        return s(a.getUTCDate(), b, 2);
    }

    function jb(a, b) {
        return s(a.getUTCHours(), b, 2);
    }

    function kb(a, b) {
        return s(a.getUTCHours() % 12 || 12, b, 2);
    }

    function lb(a, b) {
        return s(1 + h.default.count((0, j.default)(a), a), b, 3);
    }

    function mb(a, b) {
        return s(a.getUTCMilliseconds(), b, 3);
    }

    function nb(a, b) {
        return mb(a, b) + '000';
    }

    function ob(a, b) {
        return s(a.getUTCMonth() + 1, b, 2);
    }

    function pb(a, b) {
        return s(a.getUTCMinutes(), b, 2);
    }

    function qb(a, b) {
        return s(a.getUTCSeconds(), b, 2);
    }

    function rb(a) {
        var sb = a.getUTCDay();
        return 0 === sb ? 7 : sb;
    }

    function sb(a, b) {
        return s(i.utcSunday.count((0, j.default)(a) - 1, a), b, 2);
    }

    function tb(a) {
        var ub = a.getUTCDay();
        return ub >= 4 || 0 === ub ? (0, i.utcThursday)(a) : i.utcThursday.ceil(a);
    }

    function ub(a, b) {
        return a = tb(a), s(i.utcThursday.count((0, j.default)(a), a) + (4 === (0, j.default)(a).getUTCDay()), b, 2);
    }

    function vb(a) {
        return a.getUTCDay();
    }

    function wb(a, b) {
        return s(i.utcMonday.count((0, j.default)(a) - 1, a), b, 2);
    }

    function xb(a, b) {
        return s(a.getUTCFullYear() % 100, b, 2);
    }

    function yb(a, b) {
        return s((a = tb(a)).getUTCFullYear() % 100, b, 2);
    }

    function zb(a, b) {
        return s(a.getUTCFullYear() % 10000, b, 4);
    }

    function Ab(a, b) {
        var Bb = a.getUTCDay();
        return s((a = Bb >= 4 || 0 === Bb ? (0, i.utcThursday)(a) : i.utcThursday.ceil(a)).getUTCFullYear() % 10000, b, 4);
    }

    function Bb() {
        return '+0000';
    }

    function Cb() {
        return '%';
    }

    function Db(a) {
        return +a;
    }

    function Eb(a) {
        return Math.floor(+a / 1000);
    }
}), d.register('xOvpk', function(a, c) {
    b(a.exports, 'default', function() {
        return p;
    });
    var e = d('DoOTI'),
        f = d('QJPbF'),
        g = d('jNqDC'),
        h = d('raX2k'),
        i = d('emOiu'),
        j = d('U5s55'),
        k = d('Il/Uc'),
        l = d('CGLWm'),
        m = d('GshDC'),
        n = d('IucxU'),
        o = d('1ZM5s');

    function p() {
        return o.initRange.apply((0, n.calendar)(j.utcTicks, j.utcTickInterval, l.default, h.default, k.utcSunday, e.default, f.default, g.default, i.default, m.utcFormat).domain([
            Date.UTC(2000, 0, 1),
            Date.UTC(2000, 0, 2)
        ]), arguments);
    }
}), d.register('79iG0', function(a, c) {
    b(a.exports, 'copy', function() {
        return x;
    }), b(a.exports, 'default', function() {
        return o;
    }), b(a.exports, 'sequentialLog', function() {
        return p;
    }), b(a.exports, 'sequentialSymlog', function() {
        return q;
    }), b(a.exports, 'sequentialPow', function() {
        return r;
    }), b(a.exports, 'sequentialSqrt', function() {
        return s;
    });
    var e = d('pQXKW'),
        f = d('OEfGT'),
        g = d('EmhNR'),
        h = d('1ZM5s'),
        i = d('x07gB'),
        j = d('pbIcC'),
        k = d('Qu5bk'),
        l = d('WFYap');

    function m() {
        var n, o, p, q, r, s = 0,
            t = 1,
            u = g.identity,
            v = !1;

        function w(o) {
            return null == o || isNaN(o = +o) ? r : u(0 === p ? 0.5 : (o = (q(o) - n) * p, v ? Math.max(0, Math.min(1, o)) : o));
        }

        function x(n) {
            return function(o) {
                var y, z;
                return arguments.length ? ([A, B] = o, u = n(A, B), w) : [
                    u(0),
                    u(1)
                ];
            };
        }
        return w.domain = function(e) {
                return arguments.length ? ([y, z] = e, n = q(y = +y), o = q(z = +z), p = n === o ? 0 : 1 / (o - n), w) : [
                    y,
                    z
                ];
            }, w.clamp = function(n) {
                return arguments.length ? (v = !!n, w) : v;
            }, w.interpolator = function(n) {
                return arguments.length ? (u = n, w) : u;
            }, w.range = x(e.default), w.rangeRound = x(f.default), w.unknown = function(n) {
                return arguments.length ? (r = n, w) : r;
            },
            function(e) {
                return q = e, n = e(s), o = e(t), p = n === o ? 0 : 1 / (o - n), w;
            };
    }

    function n(a, b) {
        return b.domain(a.domain()).interpolator(a.interpolator()).clamp(a.clamp()).unknown(a.unknown());
    }

    function o() {
        var p = (0, i.linearish)(m()(g.identity));
        return p.copy = function() {
            return n(p, o());
        }, h.initInterpolator.apply(p, arguments);
    }

    function p() {
        var q = (0, j.loggish)(m()).domain([
            1,
            10
        ]);
        return q.copy = function() {
            return n(q, p()).base(q.base());
        }, h.initInterpolator.apply(q, arguments);
    }

    function q() {
        var r = (0, k.symlogish)(m());
        return r.copy = function() {
            return n(r, q()).constant(r.constant());
        }, h.initInterpolator.apply(r, arguments);
    }

    function r() {
        var s = (0, l.powish)(m());
        return s.copy = function() {
            return n(s, r()).exponent(s.exponent());
        }, h.initInterpolator.apply(s, arguments);
    }

    function s() {
        return r.apply(null, arguments).exponent(0.5);
    }
}), d.register('d6wTT', function(a, c) {
    b(a.exports, 'default', function() {
        return j;
    });
    var e = d('m1lok'),
        f = d('DRzpw'),
        g = d('xSt2p'),
        h = d('EmhNR'),
        i = d('1ZM5s');

    function j() {
        var k = [],
            l = h.identity;

        function m(m) {
            if (null != m && !isNaN(m = +m))
                return l(((0, f.default)(k, m, 1) - 1) / (k.length - 1));
        }
        return m.domain = function(l) {
            if (!arguments.length)
                return k.slice();
            k = [];
            for (let n of l)
                null == n || isNaN(n = +n) || k.push(n);
            return k.sort(e.default), n;
        }, m.interpolator = function(k) {
            return arguments.length ? (l = k, m) : l;
        }, m.range = function() {
            return k.map((m, d) => l(d / (k.length - 1)));
        }, m.quantiles = function(l) {
            return Array.from({
                length: l + 1
            }, (m, d) => (0, g.default)(k, d / l));
        }, m.copy = function() {
            return j(l).domain(k);
        }, i.initInterpolator.apply(m, arguments);
    }
}), d.register('tgmm7', function(a, c) {
    b(a.exports, 'default', function() {
        return A;
    }), b(a.exports, 'divergingLog', function() {
        return B;
    }), b(a.exports, 'divergingSymlog', function() {
        return C;
    }), b(a.exports, 'divergingPow', function() {
        return D;
    }), b(a.exports, 'divergingSqrt', function() {
        return t;
    });
    var e = d('pQXKW'),
        f = d('OEfGT'),
        g = d('sv5SQ'),
        h = d('EmhNR'),
        i = d('1ZM5s'),
        j = d('x07gB'),
        k = d('pbIcC'),
        l = d('79iG0'),
        m = d('Qu5bk'),
        n = d('WFYap');

    function o() {
        var p, q, r, s, t, u, v, w = 0,
            x = 0.5,
            y = 1,
            z = 1,
            A = h.identity,
            B = !1;

        function C(p) {
            return isNaN(p = +p) ? v : (p = 0.5 + ((p = +u(p)) - q) * (z * p < z * q ? s : t), A(B ? Math.max(0, Math.min(1, p)) : p));
        }

        function D(p) {
            return function(q) {
                var E, F, G;
                return arguments.length ? ([H, I, J] = q, A = (0, g.default)(p, [
                    H,
                    I,
                    J
                ]), C) : [
                    A(0),
                    A(0.5),
                    A(1)
                ];
            };
        }
        return C.domain = function(e) {
                return arguments.length ? ([E, F, G] = e, p = u(E = +E), q = u(F = +F), r = u(G = +G), s = p === q ? 0 : 0.5 / (q - p), t = q === r ? 0 : 0.5 / (r - q), z = q < p ? -1 : 1, C) : [
                    E,
                    F,
                    G
                ];
            }, C.clamp = function(p) {
                return arguments.length ? (B = !!p, C) : B;
            }, C.interpolator = function(p) {
                return arguments.length ? (A = p, C) : A;
            }, C.range = D(e.default), C.rangeRound = D(f.default), C.unknown = function(p) {
                return arguments.length ? (v = p, C) : v;
            },
            function(e) {
                return u = e, p = e(w), q = e(x), r = e(y), s = p === q ? 0 : 0.5 / (q - p), t = q === r ? 0 : 0.5 / (r - q), z = q < p ? -1 : 1, C;
            };
    }

    function p() {
        var q = (0, j.linearish)(o()(h.identity));
        return q.copy = function() {
            return (0, l.copy)(q, p());
        }, i.initInterpolator.apply(q, arguments);
    }

    function q() {
        var r = (0, k.loggish)(o()).domain([
            0.1,
            1,
            10
        ]);
        return r.copy = function() {
            return (0, l.copy)(r, q()).base(r.base());
        }, i.initInterpolator.apply(r, arguments);
    }

    function r() {
        var s = (0, m.symlogish)(o());
        return s.copy = function() {
            return (0, l.copy)(s, r()).constant(s.constant());
        }, i.initInterpolator.apply(s, arguments);
    }

    function s() {
        var t = (0, n.powish)(o());
        return t.copy = function() {
            return (0, l.copy)(t, s()).exponent(t.exponent());
        }, i.initInterpolator.apply(t, arguments);
    }

    function t() {
        return s.apply(null, arguments).exponent(0.5);
    }
}), d.register('sv5SQ', function(a, c) {
    b(a.exports, 'default', function() {
        return f;
    });
    var e = d('pQXKW');

    function f(a, b) {
        void 0 === b && (b = a, a = e.default);
        for (var g = 0, h = b.length - 1, i = b[0], j = new Array(h < 0 ? 0 : h); g < h;)
            j[g] = a(i, i = b[++g]);
        return function(a) {
            var k = Math.max(0, Math.min(h - 1, Math.floor(a *= h)));
            return j[k](a - k);
        };
    }
}), d.register('boXMA', function(a, c) {
    b(a.exports, 'default', function() {
        return k;
    });
    var e = d('jw4oE'),
        f = d('3Hun8'),
        g = d('8k0DS'),
        h = d('BptIn');

    function i(a, b) {
        return a[b];
    }

    function j(a) {
        const k = [];
        return k.key = a, k;
    }

    function k() {
        var l = (0, f.default)([]),
            m = h.default,
            n = g.default,
            o = p;

        function q(f) {
            var r, s, t = Array.from(l.apply(this, arguments), j),
                u = t.length,
                v = -1;
            for (const w of f)
                for (r = 0, ++v; r < u; ++r)
                    (t[r][v] = [
                        0,
                        +o(w, t[r].key, v, f)
                    ]).data = w;
            for (r = 0, s = (0, e.default)(m(t)); r < u; ++r)
                t[s[r]].index = r;
            return n(t, s), t;
        }
        return q.keys = function(m) {
            return arguments.length ? (l = 'function' == typeof m ? m : (0, f.default)(Array.from(m)), q) : l;
        }, q.value = function(l) {
            return arguments.length ? (o = 'function' == typeof l ? l : (0, f.default)(+l), q) : o;
        }, q.order = function(l) {
            return arguments.length ? (m = null == l ? h.default : 'function' == typeof l ? l : (0, f.default)(Array.from(l)), q) : m;
        }, q.offset = function(l) {
            return arguments.length ? (n = null == l ? g.default : l, q) : n;
        }, q;
    }
}), d.register('jw4oE', function(a, c) {
    b(a.exports, 'default', function() {
        return d;
    });
    Array.prototype.slice;

    function e(a) {
        return 'object' == typeof a && 'length' in a ? a : Array.from(a);
    }
}), d.register('3Hun8', function(a, c) {
    function e(a) {
        return function() {
            return a;
        };
    }
    b(a.exports, 'default', function() {
        return e;
    });
}), d.register('8k0DS', function(a, c) {
    function e(a, b) {
        if ((h = a.length) > 1)
            for (var f, g, h, i = 1, j = a[b[0]], k = j.length; i < h; ++i)
                for (g = j, j = a[b[i]], f = 0; f < k; ++f)
                    j[f][1] += j[f][0] = isNaN(g[f][1]) ? g[f][0] : g[f][1];
    }
    b(a.exports, 'default', function() {
        return e;
    });
}), d.register('BptIn', function(a, c) {
    function e(a) {
        for (var f = a.length, g = new Array(f); --f >= 0;)
            g[f] = f;
        return g;
    }
    b(a.exports, 'default', function() {
        return e;
    });
}), d.register('Hn4+g', function(a, c) {
    b(a.exports, 'default', function() {
        return f;
    });
    var e = d('8k0DS');

    function f(a, b) {
        if ((d = a.length) > 0) {
            for (var g, h, i, j = 0, k = a[0].length; j < k; ++j) {
                for (i = g = 0; g < h; ++g)
                    i += a[g][j][1] || 0;
                if (i)
                    for (g = 0; g < h; ++g)
                        a[g][j][1] /= i;
            }
            (0, e.default)(a, b);
        }
    }
}), d.register('AyfEA', function(a, c) {
    b(a.exports, 'default', function() {
        return f;
    });
    var e = d('8k0DS');

    function f(a, b) {
        if ((c = a.length) > 0) {
            for (var g, h = 0, i = a[b[0]], j = i.length; h < j; ++h) {
                for (var k = 0, l = 0; k < g; ++k)
                    l += a[k][h][1] || 0;
                i[h][1] += i[h][0] = -l / 2;
            }
            (0, e.default)(a, b);
        }
    }
}), d.register('lCI2/', function(a, c) {
    b(a.exports, 'default', function() {
        return f;
    });
    var e = d('8k0DS');

    function f(a, b) {
        if ((f = a.length) > 0 && (d = (c = a[b[0]]).length) > 0) {
            for (var g, h, i, j = 0, k = 1; k < h; ++k) {
                for (var l = 0, m = 0, n = 0; l < i; ++l) {
                    for (var o = a[b[l]], p = o[k][1] || 0, q = (p - (o[k - 1][1] || 0)) / 2, r = 0; r < l; ++r) {
                        var s = a[b[r]];
                        q += (s[k][1] || 0) - (s[k - 1][1] || 0);
                    }
                    m += p, n += q * p;
                }
                g[k - 1][1] += g[k - 1][0] = j, m && (j -= n / m);
            }
            g[k - 1][1] += g[k - 1][0] = j, (0, e.default)(a, b);
        }
    }
}), d.register('H2pJ4', function(c, u) {
    b(c.exports, 'Legend', function() {
        return w;
    });
    var e = d('tax32'),
        f = d('OQ36c'),
        g = d('uPP4W'),
        h = d('HcCA9'),
        i = d('u572v');

    function j(a) {
        return j = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(a) {
            return typeof a;
        } : function(a) {
            return a && 'function' == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? 'symbol' : typeof a;
        }, j(a);
    }

    function k(a, b) {
        var l = Object.keys(a);
        if (Object.getOwnPropertySymbols) {
            var m = Object.getOwnPropertySymbols(a);
            b && (m = m.filter(function(b) {
                return Object.getOwnPropertyDescriptor(a, b).enumerable;
            })), l.push.apply(l, m);
        }
        return l;
    }

    function l(a) {
        for (var m = 1; m < arguments.length; m++) {
            var n = null != arguments[m] ? arguments[m] : {};
            m % 2 ? k(Object(n), !0).forEach(function(m) {
                m(a, m, n[m]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(n)) : k(Object(n)).forEach(function(m) {
                Object.defineProperty(a, m, Object.getOwnPropertyDescriptor(n, m));
            });
        }
        return a;
    }

    function m(a, b, c) {
        return b in a ? Object.defineProperty(a, b, {
            value: c,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : a[b] = c, a;
    }

    function n(a, b) {
        if (!(a instanceof b))
            throw new TypeError('Cannot call a class as a function');
    }

    function o(a, b) {
        for (var p = 0; p < b.length; p++) {
            var q = b[p];
            q.enumerable = q.enumerable || !1, q.configurable = !0, 'value' in q && (q.writable = !0), Object.defineProperty(a, q.key, q);
        }
    }

    function p(a, b) {
        return p = Object.setPrototypeOf || function(a, b) {
            return a.__proto__ = b, a;
        }, p(a, b);
    }

    function q(a) {
        var r = function() {
            if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ('function' == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
            } catch (a) {
                return !1;
            }
        }();
        return function() {
            var s, t = s(a);
            if (r) {
                var u = s(this).constructor;
                s = Reflect.construct(t, arguments, u);
            } else
                s = t.apply(this, arguments);
            return r(this, s);
        };
    }

    function r(a, b) {
        return !b || 'object' !== j(b) && 'function' != typeof b ? function(a) {
            if (void 0 === a)
                throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return a;
        }(a) : b;
    }

    function s(a) {
        return s = Object.setPrototypeOf ? Object.getPrototypeOf : function(a) {
            return a.__proto__ || Object.getPrototypeOf(a);
        }, s(a);
    }

    function t(a, b) {
        if (null == a)
            return {};
        var u, v, w = function(a, b) {
            if (null == a)
                return {};
            var x, y, z = {},
                A = Object.keys(a);
            for (y = 0; y < A.length; y++)
                x = A[y], b.indexOf(x) >= 0 || (z[x] = a[x]);
            return z;
        }(a, b);
        if (Object.getOwnPropertySymbols) {
            var x = Object.getOwnPropertySymbols(a);
            for (v = 0; v < x.length; v++)
                u = x[v], b.indexOf(u) >= 0 || Object.prototype.propertyIsEnumerable.call(a, u) && (w[u] = a[u]);
        }
        return w;
    }

    function u(a) {
        return a.value;
    }

    function v(b, c) {
        return !0 === b ? a(f)(c, u) : a(e)(b) ? a(f)(c, b) : c;
    }
    var w = function(b) {
        ! function(a, b) {
            if ('function' != typeof b && null !== b)
                throw new TypeError('Super expression must either be null or a function');
            a.prototype = Object.create(b && b.prototype, {
                constructor: {
                    value: a,
                    writable: !0,
                    configurable: !0
                }
            }), b && p(a, b);
        }(j, b);
        var x, y, z, A = q(j);

        function B() {
            var C;
            n(this, B);
            for (var D = arguments.length, E = new Array(D), F = 0; F < D; F++)
                E[F] = arguments[F];
            return (C = A.call.apply(A, [this].concat(E))).wrapperNode = void 0, C.state = {
                boxWidth: -1,
                boxHeight: -1
            }, C;
        }
        return x = B, z = [{
            key: 'getWithHeight',
            value: function(a, b) {
                var C = a.props.layout;
                return 'vertical' === C && (0, i.isNumber)(a.props.height) ? {
                    height: a.props.height
                } : 'horizontal' === C ? {
                    width: a.props.width || b
                } : null;
            }
        }], (y = [{
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
                    var C = this.state,
                        D = C.boxWidth,
                        E = C.boxHeight;
                    return D >= 0 && E >= 0 ? {
                        width: D,
                        height: E
                    } : null;
                }
            },
            {
                key: 'getDefaultPosition',
                value: function(a) {
                    var C, D, E = this.props,
                        F = E.layout,
                        G = E.align,
                        H = E.verticalAlign,
                        I = E.margin,
                        J = E.chartWidth,
                        K = E.chartHeight;
                    return a && (void 0 !== a.left && null !== a.left || void 0 !== a.right && null !== a.right) || (C = 'center' === G && 'vertical' === F ? {
                        left: ((J || 0) - (this.getBBoxSnapshot() || {
                            width: 0
                        }).width) / 2
                    } : 'right' === G ? {
                        right: I && I.right || 0
                    } : {
                        left: I && I.left || 0
                    }), a && (void 0 !== a.top && null !== a.top || void 0 !== a.bottom && null !== a.bottom) || (D = 'middle' === H ? {
                        top: ((K || 0) - (this.getBBoxSnapshot() || {
                            height: 0
                        }).height) / 2
                    } : 'bottom' === H ? {
                        bottom: I && I.bottom || 0
                    } : {
                        top: I && I.top || 0
                    }), l(l({}, C), D);
                }
            },
            {
                key: 'updateBBox',
                value: function() {
                    var L = this.state,
                        M = L.boxWidth,
                        N = L.boxHeight,
                        O = this.props.onBBoxUpdate;
                    if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
                        var P = this.wrapperNode.getBoundingClientRect();
                        (Math.abs(P.width - M) > 1 || Math.abs(P.height - N) > 1) && this.setState({
                            boxWidth: P.width,
                            boxHeight: P.height
                        }, function() {
                            O && O(P);
                        });
                    } else
                        -
                        1 === M && -1 === N || this.setState({
                            boxWidth: -1,
                            boxHeight: -1
                        }, function() {
                            O && O(null);
                        });
                }
            },
            {
                key: 'render',
                value: function() {
                    var P = this,
                        Q = this.props,
                        R = Q.content,
                        S = Q.width,
                        T = Q.height,
                        U = Q.wrapperStyle,
                        V = Q.payloadUniqBy,
                        W = Q.payload,
                        X = l(l({
                            position: 'absolute',
                            width: S || 'auto',
                            height: T || 'auto'
                        }, this.getDefaultPosition(U)), U);
                    return L(I).createElement('div', {
                        className: 'recharts-legend-wrapper',
                        style: X,
                        ref: function(L) {
                            P.wrapperNode = L;
                        }
                    }, function(P, Q) {
                        if (L(I).isValidElement(P))
                            return L(I).cloneElement(P, Q);
                        if (L(G)(P))
                            return L(I).createElement(P, Q);
                        Q.ref;
                        var Y = t(Q, ['ref']);
                        return L(I).createElement(J.DefaultLegendContent, Y);
                    }(R, l(l({}, this.props), {}, {
                        payload: v(V, W)
                    })));
                }
            }
        ]) && o(x.prototype, y), z && o(x, z), B;
    }(g.PureComponent);
    w.displayName = 'Legend', w.defaultProps = {
        iconSize: 14,
        layout: 'horizontal',
        align: 'center',
        verticalAlign: 'bottom'
    };
}), d.register('OQ36c', function(a, b) {
    var e = d('s7eqU'),
        f = d('VmNl1');
    a.exports = function(a, b) {
        return a && a.length ? f(a, e(b, 2)) : [];
    };
}), d.register('VmNl1', function(a, b) {
    var e = d('BLgke'),
        f = d('vOBjv'),
        g = d('g8Fiy'),
        h = d('ia7fW0'),
        i = d('y0fk+'),
        j = d('AnhGl0');
    a.exports = function(a, b, d) {
        var k = -1,
            l = m,
            n = a.length,
            o = !0,
            p = [],
            q = r;
        if (d)
            o = !1, l = g;
        else if (n >= 200) {
            var s = b ? null : i(a);
            if (s)
                return j(s);
            o = !1, l = h, q = new e();
        } else
            q = b ? [] : r;
        t:
            for (; ++k < n;) {
                var s = a[k],
                    t = b ? b(s) : s;
                if (s = d || 0 !== s ? s : 0, o && t == t) {
                    for (var u = q.length; u--;)
                        if (q[u] === t)
                            continue t;
                    b && q.push(t), r.push(s);
                } else
                    l(q, t, d) || (q !== r && q.push(t), r.push(s));
            }
        return r;
    };
}), d.register('vOBjv', function(a, b) {
    var e = d('JOK+r');
    a.exports = function(a, b) {
        return !!(null == a ? 0 : a.length) && e(a, b, 0) > -1;
    };
}), d.register('JOK+r', function(a, b) {
    var e = d('mw8KV'),
        f = d('ssFkO0'),
        g = d('ln59u');
    a.exports = function(a, b, d) {
        return b == b ? g(a, b, d) : e(a, f, d);
    };
}), d.register('mw8KV', function(a, b) {
    a.exports = function(a, b, c, d) {
        for (var e = a.length, f = c + (d ? 1 : -1); d ? f-- : ++f < e;)
            if (b(a[f], f, a))
                return f;
        return -1;
    };
}), d.register('ssFkO0', function(a, b) {
    a.exports = function(a) {
        return a != a;
    };
}), d.register('ln59u', function(a, b) {
    a.exports = function(a, b, c) {
        for (var e = c - 1, f = a.length; ++e < f;)
            if (a[e] === b)
                return e;
        return -1;
    };
}), d.register('g8Fiy', function(a, b) {
    a.exports = function(a, b, c) {
        for (var e = -1, f = null == a ? 0 : a.length; ++e < f;)
            if (c(b, a[e]))
                return !0;
        return !1;
    };
}), d.register('y0fk+', function(a, b) {
    var e = d('ikD/l'),
        f = d('2uycr0'),
        g = d('AnhGl0'),
        h = e && 1 / g(new e([,
            -0
        ]))[1] == 1 / 0 ? function(a) {
            return new e(a);
        } : f;
    a.exports = h;
}), d.register('2uycr0', function(a, b) {
    a.exports = function() {};
}), d.register('HcCA9', function(c, u) {
    b(c.exports, 'DefaultLegendContent', function() {
        return u;
    });
    var e = d('uPP4W'),
        f = d('VAIs1'),
        g = d('9qB6L'),
        h = d('a+Edr'),
        i = d('5AxlR');

    function j(a) {
        return j = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(a) {
            return typeof a;
        } : function(a) {
            return a && 'function' == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? 'symbol' : typeof a;
        }, j(a);
    }

    function k() {
        return k = Object.assign || function(a) {
            for (var l = 1; l < arguments.length; l++) {
                var m = arguments[l];
                for (var n in m)
                    Object.prototype.hasOwnProperty.call(m, n) && (a[n] = m[n]);
            }
            return a;
        }, k.apply(this, arguments);
    }

    function l(a, b) {
        var m = Object.keys(a);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(a);
            b && (n = n.filter(function(b) {
                return Object.getOwnPropertyDescriptor(a, b).enumerable;
            })), m.push.apply(m, n);
        }
        return m;
    }

    function m(a, b, c) {
        return b in a ? Object.defineProperty(a, b, {
            value: c,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : a[b] = c, a;
    }

    function n(a, b) {
        if (!(a instanceof b))
            throw new TypeError('Cannot call a class as a function');
    }

    function o(a, b) {
        for (var p = 0; p < b.length; p++) {
            var q = b[p];
            q.enumerable = q.enumerable || !1, q.configurable = !0, 'value' in q && (q.writable = !0), Object.defineProperty(a, q.key, q);
        }
    }

    function p(a, b) {
        return p = Object.setPrototypeOf || function(a, b) {
            return a.__proto__ = b, a;
        }, p(a, b);
    }

    function q(a) {
        var r = function() {
            if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ('function' == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
            } catch (a) {
                return !1;
            }
        }();
        return function() {
            var s, t = s(a);
            if (r) {
                var u = s(this).constructor;
                s = Reflect.construct(t, arguments, u);
            } else
                s = t.apply(this, arguments);
            return r(this, s);
        };
    }

    function r(a, b) {
        return !b || 'object' !== j(b) && 'function' != typeof b ? function(a) {
            if (void 0 === a)
                throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return a;
        }(a) : b;
    }

    function s(a) {
        return s = Object.setPrototypeOf ? Object.getPrototypeOf : function(a) {
            return a.__proto__ || Object.getPrototypeOf(a);
        }, s(a);
    }
    var t = 32,
        u = function(b) {
            ! function(a, b) {
                if ('function' != typeof b && null !== b)
                    throw new TypeError('Super expression must either be null or a function');
                a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                        value: a,
                        writable: !0,
                        configurable: !0
                    }
                }), b && p(a, b);
            }(r, b);
            var v, w, x, y = q(r);

            function z() {
                return n(this, z), y.apply(this, arguments);
            }
            return v = z, w = [{
                    key: 'renderIcon',
                    value: function(b) {
                        var A = this.props.inactiveColor,
                            B = 16,
                            C = 5.333333333333333,
                            D = 10.666666666666666,
                            E = b.inactive ? A : b.color;
                        if ('plainline' === b.type)
                            return a(e).createElement('line', {
                                strokeWidth: 4,
                                fill: 'none',
                                stroke: E,
                                strokeDasharray: b.payload.strokeDasharray,
                                x1: 0,
                                y1: B,
                                x2: t,
                                y2: B,
                                className: 'recharts-legend-icon'
                            });
                        if ('line' === b.type)
                            return a(e).createElement('path', {
                                strokeWidth: 4,
                                fill: 'none',
                                stroke: E,
                                d: 'M0,'.concat(B, 'h').concat(D, '\n            A').concat(C, ',').concat(C, ',0,1,1,').concat(2 * D, ',').concat(B, '\n            H').concat(t, 'M').concat(2 * D, ',').concat(B, '\n            A').concat(C, ',').concat(C, ',0,1,1,').concat(D, ',').concat(B),
                                className: 'recharts-legend-icon'
                            });
                        if ('rect' === b.type)
                            return a(e).createElement('path', {
                                stroke: 'none',
                                fill: E,
                                d: 'M0,'.concat(4, 'h').concat(t, 'v').concat(24, 'h').concat(-32, 'z'),
                                className: 'recharts-legend-icon'
                            });
                        if (a(e).isValidElement(b.legendIcon)) {
                            var F = function(a) {
                                for (var G = 1; G < arguments.length; G++) {
                                    var H = null != arguments[G] ? arguments[G] : {};
                                    G % 2 ? l(Object(H), !0).forEach(function(G) {
                                        m(a, G, H[G]);
                                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(H)) : l(Object(H)).forEach(function(G) {
                                        Object.defineProperty(a, G, Object.getOwnPropertyDescriptor(H, G));
                                    });
                                }
                                return a;
                            }({}, b);
                            return delete F.legendIcon, a(e).cloneElement(b.legendIcon, F);
                        }
                        return a(e).createElement(h.Symbols, {
                            fill: E,
                            cx: B,
                            cy: B,
                            size: t,
                            sizeType: 'diameter',
                            type: b.type
                        });
                    }
                },
                {
                    key: 'renderItems',
                    value: function() {
                        var F = this,
                            G = this.props,
                            H = G.payload,
                            I = G.iconSize,
                            J = G.layout,
                            K = G.formatter,
                            L = G.inactiveColor,
                            M = {
                                x: 0,
                                y: 0,
                                width: t,
                                height: t
                            },
                            N = {
                                display: 'horizontal' === J ? 'inline-block' : 'block',
                                marginRight: 10
                            },
                            O = {
                                display: 'inline-block',
                                verticalAlign: 'middle',
                                marginRight: 4
                            };
                        return H.map(function(G, H) {
                            var P, Q = G.formatter || K,
                                R = a(D)((m(P = {
                                    'recharts-legend-item': !0
                                }, 'legend-item-'.concat(H), !0), m(P, 'inactive', G.inactive), P));
                            if ('none' === G.type)
                                return null;
                            var S = G.inactive ? L : G.color;
                            return a(e).createElement('li', k({
                                className: R,
                                style: N,
                                key: 'legend-item-'.concat(H)
                            }, (0, i.adaptEventsOfChild)(F.props, G, H)), a(e).createElement(E.Surface, {
                                width: I,
                                height: I,
                                viewBox: M,
                                style: O
                            }, F.renderIcon(G)), a(e).createElement('span', {
                                className: 'recharts-legend-item-text',
                                style: {
                                    color: S
                                }
                            }, Q ? Q(G.value, G, H) : G.value));
                        });
                    }
                },
                {
                    key: 'render',
                    value: function() {
                        var P = this.props,
                            Q = P.payload,
                            R = P.layout,
                            S = P.align;
                        if (!Q || !Q.length)
                            return null;
                        var T = {
                            padding: 0,
                            margin: 0,
                            textAlign: 'horizontal' === R ? S : 'left'
                        };
                        return a(e).createElement('ul', {
                            className: 'recharts-default-legend',
                            style: T
                        }, this.renderItems());
                    }
                }
            ], w && o(v.prototype, w), x && o(v, x), z;
        }(e.PureComponent);
    u.displayName = 'Legend', u.defaultProps = {
        iconSize: 14,
        layout: 'horizontal',
        align: 'center',
        verticalAlign: 'middle',
        inactiveColor: '#ccc'
    };
}), d.register('9qB6L', function(c, l) {
    b(c.exports, 'Surface', function() {
        return j;
    });
    var e = d('uPP4W'),
        f = d('VAIs1'),
        g = d('5AxlR');

    function h() {
        return h = Object.assign || function(a) {
            for (var i = 1; i < arguments.length; i++) {
                var j = arguments[i];
                for (var k in j)
                    Object.prototype.hasOwnProperty.call(j, k) && (a[k] = j[k]);
            }
            return a;
        }, h.apply(this, arguments);
    }

    function i(a, b) {
        if (null == a)
            return {};
        var j, k, l = function(a, b) {
            if (null == a)
                return {};
            var m, n, o = {},
                p = Object.keys(a);
            for (n = 0; n < p.length; n++)
                m = p[n], b.indexOf(m) >= 0 || (o[m] = a[m]);
            return o;
        }(a, b);
        if (Object.getOwnPropertySymbols) {
            var m = Object.getOwnPropertySymbols(a);
            for (k = 0; k < m.length; k++)
                j = m[k], b.indexOf(j) >= 0 || Object.prototype.propertyIsEnumerable.call(a, j) && (l[j] = a[j]);
        }
        return l;
    }

    function j(b) {
        var k = b.children,
            l = b.width,
            m = b.height,
            n = b.viewBox,
            o = b.className,
            p = b.style,
            q = i(b, [
                'children',
                'width',
                'height',
                'viewBox',
                'className',
                'style'
            ]),
            r = n || {
                width: l,
                height: m,
                x: 0,
                y: 0
            },
            s = a(f)('recharts-surface', o);
        return a(e).createElement('svg', h({}, (0, g.filterProps)(q, !0, !0), {
            className: s,
            width: l,
            height: m,
            style: p,
            viewBox: ''.concat(r.x, ' ').concat(r.y, ' ').concat(r.width, ' ').concat(r.height),
            version: '1.1'
        }), a(e).createElement('title', null, b.title), a(e).createElement('desc', null, b.desc), k);
    }
}), d.register('a+Edr', function(c, z) {
    b(c.exports, 'Symbols', function() {
        return A;
    });
    var e = d('U7pAS'),
        f = d('uPP4W'),
        g = d('+nfzA'),
        h = d('3R5s6'),
        i = d('oIkeq'),
        j = d('cC+2G'),
        k = d('VbcOo'),
        l = d('msKKd'),
        m = d('pN29x'),
        n = d('pqYdP'),
        o = d('VAIs1'),
        p = d('5AxlR');

    function q(a) {
        return q = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(a) {
            return typeof a;
        } : function(a) {
            return a && 'function' == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? 'symbol' : typeof a;
        }, q(a);
    }

    function r() {
        return r = Object.assign || function(a) {
            for (var s = 1; s < arguments.length; s++) {
                var t = arguments[s];
                for (var u in t)
                    Object.prototype.hasOwnProperty.call(t, u) && (a[u] = t[u]);
            }
            return a;
        }, r.apply(this, arguments);
    }

    function s(a, b) {
        if (!(a instanceof b))
            throw new TypeError('Cannot call a class as a function');
    }

    function t(a, b) {
        for (var u = 0; u < b.length; u++) {
            var v = b[u];
            v.enumerable = v.enumerable || !1, v.configurable = !0, 'value' in v && (v.writable = !0), Object.defineProperty(a, v.key, v);
        }
    }

    function u(a, b) {
        return u = Object.setPrototypeOf || function(a, b) {
            return a.__proto__ = b, a;
        }, u(a, b);
    }

    function v(a) {
        var w = function() {
            if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ('function' == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
            } catch (a) {
                return !1;
            }
        }();
        return function() {
            var x, y = x(a);
            if (w) {
                var z = x(this).constructor;
                x = Reflect.construct(y, arguments, z);
            } else
                x = y.apply(this, arguments);
            return w(this, x);
        };
    }

    function w(a, b) {
        return !b || 'object' !== q(b) && 'function' != typeof b ? function(a) {
            if (void 0 === a)
                throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return a;
        }(a) : b;
    }

    function x(a) {
        return x = Object.setPrototypeOf ? Object.getPrototypeOf : function(a) {
            return a.__proto__ || Object.getPrototypeOf(a);
        }, x(a);
    }
    var y = {
            symbolCircle: h.default,
            symbolCross: i.default,
            symbolDiamond: j.default,
            symbolSquare: k.default,
            symbolStar: l.default,
            symbolTriangle: m.default,
            symbolWye: n.default
        },
        z = Math.PI / 180,
        A = function(b) {
            ! function(a, b) {
                if ('function' != typeof b && null !== b)
                    throw new TypeError('Super expression must either be null or a function');
                a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                        value: a,
                        writable: !0,
                        configurable: !0
                    }
                }), b && u(a, b);
            }(j, b);
            var B, C, D, E = v(j);

            function F() {
                return s(this, F), E.apply(this, arguments);
            }
            return B = F, (C = [{
                    key: 'getPath',
                    value: function() {
                        var G = this.props,
                            H = G.size,
                            I = G.sizeType,
                            J = G.type,
                            K = function(G) {
                                var L = 'symbol'.concat(a(e)(G));
                                return y[L] || h.default;
                            }(J),
                            L = (0, g.default)().type(K).size(function(a, G, H) {
                                if ('area' === G)
                                    return a;
                                switch (H) {
                                    case 'cross':
                                        return 5 * a * a / 9;
                                    case 'diamond':
                                        return 0.5 * a * a / Math.sqrt(3);
                                    case 'square':
                                        return a * a;
                                    case 'star':
                                        var M = 18 * z;
                                        return 1.25 * a * a * (Math.tan(M) - Math.tan(2 * M) * Math.pow(Math.tan(M), 2));
                                    case 'triangle':
                                        return Math.sqrt(3) * a * a / 4;
                                    case 'wye':
                                        return (21 - 10 * Math.sqrt(3)) * a * a / 8;
                                    default:
                                        return Math.PI * a * a / 4;
                                }
                            }(H, I, J));
                        return L();
                    }
                },
                {
                    key: 'render',
                    value: function() {
                        var M = this.props,
                            N = M.className,
                            O = M.cx,
                            P = M.cy,
                            Q = M.size;
                        return O === +O && P === +P && Q === +Q ? a(K).createElement('path', r({}, (0, p.filterProps)(this.props, !0), {
                            className: a(o)('recharts-symbols', N),
                            transform: 'translate('.concat(O, ', ').concat(P, ')'),
                            d: this.getPath()
                        })) : null;
                    }
                }
            ]) && t(B.prototype, C), D && t(B, D), F;
        }(f.PureComponent);
    A.defaultProps = {
        type: 'circle',
        size: 64,
        sizeType: 'area'
    }, A.registerSymbol = function(b, c) {
        y['symbol'.concat(a(e)(b))] = c;
    };
}), d.register('+nfzA', function(a, c) {
    b(a.exports, 'default', function() {
        return n;
    });
    var e = d('F65wS'),
        f = d('3R5s6'),
        g = d('oIkeq'),
        h = d('cC+2G'),
        i = d('msKKd'),
        j = d('VbcOo'),
        k = d('pN29x'),
        l = d('pqYdP'),
        m = d('3Hun8');
    f.default, g.default, h.default, j.default, i.default, k.default, l.default;

    function n(a, b) {
        var o = null;

        function p() {
            var q;
            if (o || (o = q = (0, e.default)()), a.apply(this, arguments).draw(o, +b.apply(this, arguments)), q)
                return o = null, q + '' || null;
        }
        return a = 'function' == typeof a ? a : (0, m.default)(a || f.default), b = 'function' == typeof b ? b : (0, m.default)(void 0 === b ? 64 : +b), p.type = function(b) {
            return arguments.length ? (a = 'function' == typeof b ? b : (0, m.default)(b), p) : a;
        }, p.size = function(a) {
            return arguments.length ? (b = 'function' == typeof a ? a : (0, m.default)(+a), p) : b;
        }, p.context = function(a) {
            return arguments.length ? (o = null == a ? null : a, p) : o;
        }, p;
    }
}), d.register('F65wS', function(a, c) {
    b(a.exports, 'default', function() {
        return m;
    });
    const e = Math.PI,
        f = 2 * e,
        g = 0.000001,
        h = f - g;

    function i() {
        this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = '';
    }

    function j() {
        return new i();
    }
    i.prototype = j.prototype = {
        constructor: i,
        moveTo: function(a, b) {
            this._ += 'M' + (this._x0 = this._x1 = +a) + ',' + (this._y0 = this._y1 = +b);
        },
        closePath: function() {
            null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._ += 'Z');
        },
        lineTo: function(a, b) {
            this._ += 'L' + (this._x1 = +a) + ',' + (this._y1 = +b);
        },
        quadraticCurveTo: function(a, b, c, e) {
            this._ += 'Q' + +a + ',' + +b + ',' + (this._x1 = +c) + ',' + (this._y1 = +e);
        },
        bezierCurveTo: function(a, b, c, e, f, g) {
            this._ += 'C' + +a + ',' + +b + ',' + +c + ',' + +e + ',' + (this._x1 = +f) + ',' + (this._y1 = +g);
        },
        arcTo: function(a, b, c, f, h) {
            a = +a, b = +b, c = +c, f = +f, h = +h;
            var k = this._x1,
                l = this._y1,
                m = c - a,
                n = f - b,
                o = k - a,
                p = l - b,
                q = o * o + p * p;
            if (h < 0)
                throw new Error('negative radius: ' + h);
            if (null === this._x1)
                this._ += 'M' + (this._x1 = a) + ',' + (this._y1 = b);
            else if (q > g)
                if (Math.abs(p * m - n * o) > g && h) {
                    var r = c - k,
                        s = f - l,
                        t = m * m + n * n,
                        u = r * r + s * s,
                        v = Math.sqrt(t),
                        w = Math.sqrt(q),
                        x = h * Math.tan((e - Math.acos((t + q - u) / (2 * v * w))) / 2),
                        y = x / w,
                        z = x / v;
                    Math.abs(y - 1) > g && (this._ += 'L' + (a + y * o) + ',' + (b + y * p)), this._ += 'A' + h + ',' + h + ',0,0,' + +(p * r > o * s) + ',' + (this._x1 = a + z * m) + ',' + (this._y1 = b + z * n);
                } else
                    this._ += 'L' + (this._x1 = a) + ',' + (this._y1 = b);
            else;
        },
        arc: function(a, b, c, i, j, k) {
            a = +a, b = +b, k = !!k;
            var k = (c = +c) * Math.cos(i),
                l = c * Math.sin(i),
                m = a + k,
                n = b + l,
                o = 1 ^ k,
                p = k ? i - j : j - i;
            if (c < 0)
                throw new Error('negative radius: ' + c);
            null === this._x1 ? this._ += 'M' + m + ',' + n : (Math.abs(this._x1 - m) > g || Math.abs(this._y1 - n) > g) && (this._ += 'L' + m + ',' + n), c && (p < 0 && (p = p % f + f), p > h ? this._ += 'A' + c + ',' + c + ',0,1,' + o + ',' + (a - k) + ',' + (b - l) + 'A' + c + ',' + c + ',0,1,' + o + ',' + (this._x1 = m) + ',' + (this._y1 = n) : p > g && (this._ += 'A' + c + ',' + c + ',0,' + +(p >= e) + ',' + o + ',' + (this._x1 = a + c * Math.cos(j)) + ',' + (this._y1 = b + c * Math.sin(j))));
        },
        rect: function(a, b, c, e) {
            this._ += 'M' + (this._x0 = this._x1 = +a) + ',' + (this._y0 = this._y1 = +b) + 'h' + +c + 'v' + +e + 'h' + -c + 'Z';
        },
        toString: function() {
            return this._;
        }
    };
    var k = l;
}), d.register('3R5s6', function(a, c) {
    b(a.exports, 'default', function() {
        return f;
    });
    var e = d('V0H2Z'),
        f = {
            draw: function(a, b) {
                var g = Math.sqrt(b / e.pi);
                a.moveTo(g, 0), a.arc(0, 0, g, 0, e.tau);
            }
        };
}), d.register('V0H2Z', function(a, c) {
    b(a.exports, 'pi', function() {
        return d;
    }), b(a.exports, 'tau', function() {
        return f;
    });
    Math.abs, Math.atan2, Math.cos, Math.max, Math.min, Math.sin, Math.sqrt;
    var e = Math.PI,
        f = 2 * e;
}), d.register('oIkeq', function(a, c) {
    b(a.exports, 'default', function() {
        return d;
    });
    var e = {
        draw: function(a, b) {
            var f = Math.sqrt(b / 5) / 2;
            a.moveTo(-3 * f, -f), a.lineTo(-f, -f), a.lineTo(-f, -3 * f), a.lineTo(f, -3 * f), a.lineTo(f, -f), a.lineTo(3 * f, -f), a.lineTo(3 * f, f), a.lineTo(f, f), a.lineTo(f, 3 * f), a.lineTo(-f, 3 * f), a.lineTo(-f, f), a.lineTo(-3 * f, f), a.closePath();
        }
    };
}), d.register('cC+2G', function(a, c) {
    b(a.exports, 'default', function() {
        return g;
    });
    var e = Math.sqrt(1 / 3),
        f = 2 * e,
        g = {
            draw: function(a, b) {
                var h = Math.sqrt(b / f),
                    i = h * e;
                a.moveTo(0, -h), a.lineTo(i, 0), a.lineTo(0, h), a.lineTo(-i, 0), a.closePath();
            }
        };
}), d.register('msKKd', function(a, c) {
    b(a.exports, 'default', function() {
        return i;
    });
    var e = d('V0H2Z'),
        f = Math.sin(e.pi / 10) / Math.sin(7 * e.pi / 10),
        g = Math.sin(e.tau / 10) * f,
        h = -Math.cos(e.tau / 10) * f,
        i = {
            draw: function(a, b) {
                var j = Math.sqrt(0.8908130915292852 * b),
                    k = g * j,
                    l = h * j;
                a.moveTo(0, -j), a.lineTo(k, l);
                for (var m = 1; m < 5; ++m) {
                    var n = e.tau * m / 5,
                        o = Math.cos(n),
                        p = Math.sin(n);
                    a.lineTo(p * j, -o * j), a.lineTo(o * k - p * l, p * k + o * l);
                }
                a.closePath();
            }
        };
}), d.register('VbcOo', function(a, c) {
    b(a.exports, 'default', function() {
        return d;
    });
    var e = {
        draw: function(a, b) {
            var f = Math.sqrt(b),
                g = -f / 2;
            a.rect(g, g, f, f);
        }
    };
}), d.register('pN29x', function(a, c) {
    b(a.exports, 'default', function() {
        return f;
    });
    var e = Math.sqrt(3),
        f = {
            draw: function(a, b) {
                var g = -Math.sqrt(b / (3 * e));
                a.moveTo(0, 2 * g), a.lineTo(-e * g, -g), a.lineTo(e * g, -g), a.closePath();
            }
        };
}), d.register('pqYdP', function(a, c) {
    b(a.exports, 'default', function() {
        return i;
    });
    var e = -0.5,
        f = Math.sqrt(3) / 2,
        g = 1 / Math.sqrt(12),
        h = 3 * (g / 2 + 1),
        i = {
            draw: function(a, b) {
                var j = Math.sqrt(b / h),
                    k = j / 2,
                    l = j * g,
                    m = n,
                    o = j * g + j,
                    p = -m,
                    q = r;
                a.moveTo(n, l), a.lineTo(m, r), a.lineTo(p, q), a.lineTo(e * n - f * l, f * n + e * l), a.lineTo(e * m - f * r, f * m + e * r), a.lineTo(e * p - f * q, f * p + e * q), a.lineTo(e * n + f * l, e * l - f * n), a.lineTo(e * m + f * r, e * r - f * m), a.lineTo(e * p + f * q, e * q - f * p), a.closePath();
            }
        };
}), d.register('wNQO7', function(a, c) {
    b(a.exports, 'BarChart', function() {
        return j;
    });
    var e = d('vWB/W'),
        f = d('DHAkN'),
        g = d('L9b4X'),
        h = d('SwIBY'),
        i = d('rkT9r'),
        j = (0, e.generateCategoricalChart)({
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
}), d.register('vWB/W', function(c, O) {
    b(c.exports, 'generateCategoricalChart', function() {
        return jb;
    });
    var e = d('5nDu8'),
        f = d('Fc4Ra'),
        g = d('tax32'),
        h = d('Ee2rv'),
        i = d('jC0sk'),
        j = d('G5U2X'),
        k = d('Qi0W5'),
        l = d('oskvv'),
        m = d('LPXvk'),
        n = d('JslBt0'),
        o = d('uPP4W'),
        p = d('VAIs1'),
        q = d('9qB6L'),
        r = d('iSJ10'),
        s = d('krqie'),
        t = d('H2pJ4'),
        u = d('qPFgT'),
        v = d('xEo5V'),
        w = d('ty4Dd'),
        x = d('/EYwe'),
        y = d('xItwy'),
        z = d('NvaHc'),
        A = d('GqBxD'),
        B = d('58w6t'),
        C = d('xgP3B'),
        D = d('u572v'),
        E = d('rR6Py'),
        F = d('fSZjD'),
        G = d('Ab/Ag'),
        H = d('vmqjm'),
        I = d('zovEL'),
        J = d('5AxlR');

    function K(a) {
        return K = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(a) {
            return typeof a;
        } : function(a) {
            return a && 'function' == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? 'symbol' : typeof a;
        }, K(a);
    }

    function L(a, b) {
        return function(a) {
            if (Array.isArray(a))
                return a;
        }(a) || function(a, b) {
            if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(a)))
                return;
            var M = [],
                N = !0,
                O = !1,
                P = void 0;
            try {
                for (var Q, R = a[Symbol.iterator](); !(N = (Q = R.next()).done) && (M.push(Q.value), !b || M.length !== b); N = !0);
            } catch (a) {
                O = !0, P = a;
            } finally {
                try {
                    N || null == g.return || g.return();
                } finally {
                    if (O)
                        throw P;
                }
            }
            return M;
        }(a, b) || V(a, b) || function() {
            throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }

    function M() {
        return M = Object.assign || function(a) {
            for (var N = 1; N < arguments.length; N++) {
                var O = arguments[N];
                for (var P in O)
                    Object.prototype.hasOwnProperty.call(O, P) && (a[P] = O[P]);
            }
            return a;
        }, M.apply(this, arguments);
    }

    function N(a, b) {
        if (null == a)
            return {};
        var O, P, Q = function(a, b) {
            if (null == a)
                return {};
            var R, S, T = {},
                U = Object.keys(a);
            for (S = 0; S < U.length; S++)
                R = U[S], b.indexOf(R) >= 0 || (T[R] = a[R]);
            return T;
        }(a, b);
        if (Object.getOwnPropertySymbols) {
            var R = Object.getOwnPropertySymbols(a);
            for (P = 0; P < R.length; P++)
                O = R[P], b.indexOf(O) >= 0 || Object.prototype.propertyIsEnumerable.call(a, O) && (Q[O] = a[O]);
        }
        return Q;
    }

    function O(a, b) {
        for (var P = 0; P < b.length; P++) {
            var Q = b[P];
            Q.enumerable = Q.enumerable || !1, Q.configurable = !0, 'value' in Q && (Q.writable = !0), Object.defineProperty(a, Q.key, Q);
        }
    }

    function P(a, b) {
        return P = Object.setPrototypeOf || function(a, b) {
            return a.__proto__ = b, a;
        }, P(a, b);
    }

    function Q(a) {
        var R = function() {
            if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ('function' == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
            } catch (a) {
                return !1;
            }
        }();
        return function() {
            var S, T = T(a);
            if (R) {
                var U = T(this).constructor;
                S = Reflect.construct(T, arguments, U);
            } else
                S = T.apply(this, arguments);
            return R(this, S);
        };
    }

    function R(a, b) {
        return !b || 'object' !== K(b) && 'function' != typeof b ? S(a) : b;
    }

    function S(a) {
        if (void 0 === a)
            throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return a;
    }

    function T(a) {
        return T = Object.setPrototypeOf ? Object.getPrototypeOf : function(a) {
            return a.__proto__ || Object.getPrototypeOf(a);
        }, T(a);
    }

    function U(a) {
        return function(a) {
            if (Array.isArray(a))
                return W(a);
        }(a) || function(a) {
            if ('undefined' != typeof Symbol && Symbol.iterator in Object(a))
                return Array.from(a);
        }(a) || V(a) || function() {
            throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }

    function V(a, b) {
        if (a) {
            if ('string' == typeof a)
                return W(a, b);
            var W = Object.prototype.toString.call(a).slice(8, -1);
            return 'Object' === W && a.constructor && (W = a.constructor.name), 'Map' === W || 'Set' === W ? Array.from(a) : 'Arguments' === W || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(W) ? W(a, b) : void 0;
        }
    }

    function W(a, b) {
        (null == b || b > a.length) && (b = a.length);
        for (var X = 0, Y = new Array(b); X < b; X++)
            Y[X] = a[X];
        return Y;
    }

    function X(a, b) {
        var Y = Object.keys(a);
        if (Object.getOwnPropertySymbols) {
            var Z = Object.getOwnPropertySymbols(a);
            b && (Z = Z.filter(function(b) {
                return Object.getOwnPropertyDescriptor(a, b).enumerable;
            })), Y.push.apply(Y, Z);
        }
        return Y;
    }

    function Y(a) {
        for (var Z = 1; Z < arguments.length; Z++) {
            var $ = null != arguments[Z] ? arguments[Z] : {};
            Z % 2 ? X(Object($), !0).forEach(function(Z) {
                Z(a, Z, $[Z]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors($)) : X(Object($)).forEach(function(Z) {
                Object.defineProperty(a, Z, Object.getOwnPropertyDescriptor($, Z));
            });
        }
        return a;
    }

    function Z(a, b, c) {
        return b in a ? Object.defineProperty(a, b, {
            value: c,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : a[b] = c, a;
    }
    var $ = {
            xAxis: [
                'bottom',
                'top'
            ],
            yAxis: [
                'left',
                'right'
            ]
        },
        _ = {
            x: 0,
            y: 0
        },
        ab = Number.isFinite ? Number.isFinite : isFinite,
        bb = 'function' == typeof requestAnimationFrame ? requestAnimationFrame : 'function' == typeof setImmediate ? setImmediate : setTimeout,
        cb = 'function' == typeof cancelAnimationFrame ? cancelAnimationFrame : 'function' == typeof clearImmediate ? clearImmediate : clearTimeout,
        db = function(a, b, c) {
            var eb = b.graphicalItems,
                fb = b.dataStartIndex,
                gb = b.dataEndIndex,
                hb = (eb || []).reduce(function(a, b) {
                    var ib = b.props.data;
                    return ib && ib.length ? [].concat(U(a), U(ib)) : a;
                }, []);
            return hb && hb.length > 0 ? hb : c && c.props && c.props.data && c.props.data.length > 0 ? c.props.data : a && a.length && (0, D.isNumber)(fb) && (0, D.isNumber)(gb) ? a.slice(fb, gb + 1) : [];
        },
        eb = function(a, b, c, d) {
            var fb = a.graphicalItems,
                gb = a.tooltipAxis,
                hb = db(b, a);
            return c < 0 || !fb || !fb.length || c >= hb.length ? null : fb.reduce(function(a, b) {
                if (b.props.hide)
                    return a;
                var ib, jb = b.props.data;
                if (gb.dataKey && !gb.allowDuplicatedCategory) {
                    var kb = void 0 === jb ? hb : jb;
                    ib = (0, D.findEntryInArray)(kb, gb.dataKey, d);
                } else
                    ib = jb && jb[c] || hb[c];
                return ib ? [].concat(U(a), [(0, E.getTooltipItem)(b, ib)]) : a;
            }, []);
        },
        fb = function(a, b, c, d) {
            var gb = d || {
                    x: a.chartX,
                    y: a.chartY
                },
                hb = function(a, b) {
                    return 'horizontal' === b ? a.x : 'vertical' === b ? a.y : 'centric' === b ? a.angle : a.radius;
                }(gb, c),
                ib = a.orderedTooltipTicks,
                jb = a.tooltipAxis,
                kb = a.tooltipTicks,
                lb = (0, E.calculateActiveTickIndex)(hb, ib, kb, jb);
            if (lb >= 0 && kb) {
                var mb = kb[lb] && kb[lb].value,
                    nb = eb(a, b, lb, mb),
                    ob = function(a, b, c, d) {
                        var pb = b.find(function(a) {
                            return a && a.index === c;
                        });
                        if (pb) {
                            if ('horizontal' === a)
                                return {
                                    x: pb.coordinate,
                                    y: d.y
                                };
                            if ('vertical' === a)
                                return {
                                    x: d.x,
                                    y: pb.coordinate
                                };
                            if ('centric' === a) {
                                var qb = pb.coordinate,
                                    rb = d.radius;
                                return Y(Y(Y({}, d), (0, G.polarToCartesian)(d.cx, d.cy, rb, qb)), {}, {
                                    angle: qb,
                                    radius: rb
                                });
                            }
                            var qb = pb.coordinate,
                                rb = d.angle;
                            return Y(Y(Y({}, d), (0, G.polarToCartesian)(d.cx, d.cy, qb, rb)), {}, {
                                angle: rb,
                                radius: qb
                            });
                        }
                        return _;
                    }(c, ib, lb, gb);
                return {
                    activeTooltipIndex: lb,
                    activeLabel: mb,
                    activePayload: nb,
                    activeCoordinate: ob
                };
            }
            return null;
        },
        gb = function(b, c) {
            var hb = c.axisType,
                ib = void 0 === hb ? 'xAxis' : hb,
                jb = c.AxisComp,
                kb = c.graphicalItems,
                lb = c.stackGroups,
                mb = c.dataStartIndex,
                nb = c.dataEndIndex,
                ob = b.children,
                pb = ''.concat(ib, 'Id'),
                qb = (0, z.findAllByType)(ob, jb),
                rb = {};
            return qb && qb.length ? rb = function(b, c) {
                var sb = c.axes,
                    tb = c.graphicalItems,
                    ub = c.axisType,
                    vb = c.axisIdKey,
                    wb = c.stackGroups,
                    xb = c.dataStartIndex,
                    yb = c.dataEndIndex,
                    zb = b.layout,
                    Ab = b.children,
                    Bb = b.stackOffset,
                    Cb = (0, E.isCategoricalAxis)(zb, ub);
                return sb.reduce(function(c, sb) {
                    var Db = sb.props,
                        Eb = Db.type,
                        Fb = Db.dataKey,
                        Gb = Db.allowDataOverflow,
                        Hb = Db.allowDuplicatedCategory,
                        Ib = Db.scale,
                        Jb = Db.ticks,
                        Kb = sb.props[vb],
                        Lb = db(b.data, {
                            graphicalItems: tb.filter(function(a) {
                                return a.props[vb] === Kb;
                            }),
                            dataStartIndex: xb,
                            dataEndIndex: yb
                        }),
                        Mb = Lb.length;
                    if (!c[Kb]) {
                        var Nb, Ob, Pb;
                        if (Fb) {
                            if (Nb = (0, E.getDomainOfDataByKey)(Lb, Fb, Eb), 'category' === Eb && Cb) {
                                var Qb = (0, D.hasDuplicate)(Nb);
                                Hb && Qb ? (Ob = Nb, Nb = a(k)(0, Mb)) : Hb || (Nb = (0, E.parseDomainOfCategoryAxis)(sb.props.domain, Nb, sb).reduce(function(a, b) {
                                    return a.indexOf(b) >= 0 ? a : [].concat(U(a), [b]);
                                }, []));
                            } else if ('category' === Eb)
                                Nb = Hb ? Nb.filter(function(b) {
                                    return '' !== b && !a(l)(b);
                                }) : (0, E.parseDomainOfCategoryAxis)(sb.props.domain, Nb, sb).reduce(function(b, c) {
                                    return b.indexOf(c) >= 0 || '' === c || a(l)(c) ? b : [].concat(U(b), [c]);
                                }, []);
                            else if ('number' === Eb) {
                                var Rb = (0, E.parseErrorBarsOfAxis)(Lb, tb.filter(function(a) {
                                    return a.props[vb] === Kb && !a.props.hide;
                                }), Fb, ub, zb);
                                Rb && (Nb = Rb);
                            }!Cb || 'number' !== Eb && 'auto' === Ib || (Pb = (0, E.getDomainOfDataByKey)(Lb, Fb, 'category'));
                        } else
                            Nb = Cb ? a(k)(0, Mb) : wb && wb[Kb] && wb[Kb].hasStack && 'number' === Eb ? 'expand' === Bb ? [
                                0,
                                1
                            ] : (0, E.getDomainOfStackGroups)(wb[Kb].stackGroups, xb, yb) : (0, E.getDomainOfItemsWithSameAxis)(Lb, tb.filter(function(a) {
                                return a.props[vb] === Kb && !a.props.hide;
                            }), Eb, zb, !0);
                        if ('number' === Eb)
                            Nb = (0, F.detectReferenceElementsDomain)(Ab, Nb, Kb, ub, Jb), sb.props.domain && (Nb = (0, E.parseSpecifiedDomain)(sb.props.domain, Nb, Gb));
                        else if ('category' === Eb && sb.props.domain) {
                            var Qb = sb.props.domain;
                            Nb.every(function(a) {
                                return Qb.indexOf(a) >= 0;
                            }) && (Nb = Qb);
                        }
                        return Y(Y({}, c), {}, Z({}, Kb, Y(Y({}, sb.props), {}, {
                            axisType: ub,
                            domain: Nb,
                            categoricalDomain: Pb,
                            duplicateDomain: Ob,
                            originalDomain: sb.props.domain,
                            isCategorical: Cb,
                            layout: zb
                        })));
                    }
                    return c;
                }, {});
            }(b, {
                axes: qb,
                graphicalItems: kb,
                axisType: ib,
                axisIdKey: pb,
                stackGroups: lb,
                dataStartIndex: mb,
                dataEndIndex: nb
            }) : kb && kb.length && (rb = function(b, c) {
                var sb = c.graphicalItems,
                    tb = c.Axis,
                    ub = c.axisType,
                    vb = c.axisIdKey,
                    wb = c.stackGroups,
                    xb = c.dataStartIndex,
                    yb = c.dataEndIndex,
                    zb = b.layout,
                    Ab = b.children,
                    Bb = db(b.data, {
                        graphicalItems: sb,
                        dataStartIndex: xb,
                        dataEndIndex: yb
                    }),
                    Cb = Bb.length,
                    Db = (0, E.isCategoricalAxis)(zb, ub),
                    Eb = -1;
                return sb.reduce(function(b, c) {
                    var Fb, Gb = c.props[vb];
                    return b[Gb] ? b : (Eb++, Db ? Fb = a(k)(0, Cb) : wb && wb[Gb] && wb[Gb].hasStack ? (Fb = (0, E.getDomainOfStackGroups)(wb[Gb].stackGroups, xb, yb), Fb = (0, F.detectReferenceElementsDomain)(Ab, Fb, Gb, ub)) : (Fb = (0, E.parseSpecifiedDomain)(tb.defaultProps.domain, (0, E.getDomainOfItemsWithSameAxis)(Bb, sb.filter(function(a) {
                        return a.props[vb] === Gb && !a.props.hide;
                    }), 'number', zb), tb.defaultProps.allowDataOverflow), Fb = (0, F.detectReferenceElementsDomain)(Ab, Fb, Gb, ub)), Y(Y({}, b), {}, Z({}, Gb, Y(Y({
                        axisType: ub
                    }, tb.defaultProps), {}, {
                        hide: !0,
                        orientation: a(j)($, ''.concat(ub, '.').concat(Eb % 2), null),
                        domain: Fb,
                        originalDomain: tb.defaultProps.domain,
                        isCategorical: Db,
                        layout: zb
                    }))));
                }, {});
            }(b, {
                Axis: jb,
                graphicalItems: kb,
                axisType: ib,
                axisIdKey: pb,
                stackGroups: lb,
                dataStartIndex: mb,
                dataEndIndex: nb
            })), rb;
        },
        hb = function(b) {
            var ib = b.children,
                jb = b.defaultShowTooltip,
                kb = (0, z.findChildByType)(ib, B.Brush.displayName);
            return {
                chartX: 0,
                chartY: 0,
                dataStartIndex: kb && kb.props && kb.props.startIndex || 0,
                dataEndIndex: kb && kb.props && kb.props.endIndex || b.data && b.data.length - 1 || 0,
                activeTooltipIndex: -1,
                isTooltipActive: !a(l)(jb) && jb
            };
        },
        ib = function(a) {
            return 'horizontal' === a ? {
                numericAxisName: 'yAxis',
                cateAxisName: 'xAxis'
            } : 'vertical' === a ? {
                numericAxisName: 'xAxis',
                cateAxisName: 'yAxis'
            } : 'centric' === a ? {
                numericAxisName: 'radiusAxis',
                cateAxisName: 'angleAxis'
            } : {
                numericAxisName: 'angleAxis',
                cateAxisName: 'radiusAxis'
            };
        },
        jb = function(b) {
            var kb, lb, mb = b.chartName,
                nb = b.GraphicalChild,
                ob = b.defaultTooltipEventType,
                pb = void 0 === ob ? 'axis' : ob,
                qb = b.validateTooltipEventTypes,
                rb = void 0 === qb ? ['axis'] : qb,
                sb = b.axisComponents,
                tb = b.legendContent,
                ub = b.formatAxisMap,
                vb = b.defaultProps,
                wb = function(b, kb) {
                    var xb = kb.graphicalItems,
                        yb = kb.stackGroups,
                        zb = kb.offset,
                        Ab = kb.updateId,
                        Bb = kb.dataStartIndex,
                        Cb = kb.dataEndIndex,
                        Db = b.barSize,
                        Eb = b.layout,
                        Fb = b.barGap,
                        Gb = b.barCategoryGap,
                        Hb = b.maxBarSize,
                        Ib = ib(Eb),
                        Jb = Ib.numericAxisName,
                        Kb = Ib.cateAxisName,
                        Lb = function(a) {
                            return !(!a || !a.length) && a.some(function(a) {
                                var Mb = (0, z.getDisplayName)(a && a.type);
                                return Mb && Mb.indexOf('Bar') >= 0;
                            });
                        }(xb),
                        Mb = Lb && (0, E.getBarSizeList)({
                            barSize: Db,
                            stackGroups: yb
                        }),
                        Nb = [];
                    return xb.forEach(function(xb, Db) {
                        var Ob = db(b.data, {
                                dataStartIndex: Bb,
                                dataEndIndex: Cb
                            }, xb),
                            Pb = xb.props,
                            Qb = Pb.dataKey,
                            Rb = Pb.maxBarSize,
                            Sb = xb.props[''.concat(Jb, 'Id')],
                            Tb = xb.props[''.concat(Kb, 'Id')],
                            Ub = sb.reduce(function(a, b) {
                                var Vb, Wb = kb[''.concat(b.axisType, 'Map')],
                                    Xb = xb.props[''.concat(b.axisType, 'Id')],
                                    Yb = Wb && Wb[Xb];
                                return Y(Y({}, a), {}, (Z(Vb = {}, b.axisType, Yb), Z(Vb, ''.concat(b.axisType, 'Ticks'), (0, E.getTicksOfAxis)(Yb)), Vb));
                            }, {}),
                            Vb = Ub[Kb],
                            Wb = Ub[''.concat(Kb, 'Ticks')],
                            Xb = yb && yb[Sb] && yb[Sb].hasStack && (0, E.getStackedDataOfItem)(xb, yb[Sb].stackGroups),
                            Yb = (0, z.getDisplayName)(xb.type).indexOf('Bar') >= 0,
                            Zb = (0, E.getBandSizeOfAxis)(Vb, Wb),
                            $b = [];
                        if (Yb) {
                            var _b, ac, bc = a(l)(Rb) ? Hb : Rb,
                                cc = null !== (_b = null !== (ac = (0, E.getBandSizeOfAxis)(Vb, Wb, !0)) && void 0 !== ac ? ac : bc) && void 0 !== _b ? _b : 0;
                            $b = (0, E.getBarPosition)({
                                barGap: Fb,
                                barCategoryGap: Gb,
                                bandSize: cc !== Zb ? cc : Zb,
                                sizeList: Mb[Tb],
                                maxBarSize: bc
                            }), cc !== Zb && ($b = $b.map(function(a) {
                                return Y(Y({}, a), {}, {
                                    position: Y(Y({}, a.position), {}, {
                                        offset: a.position.offset - cc / 2
                                    })
                                });
                            }));
                        }
                        var _b, ac = xb && xb.type && xb.type.getComposedData;
                        ac && Nb.push({
                            props: Y(Y({}, ac(Y(Y({}, Ub), {}, {
                                displayedData: Ob,
                                props: b,
                                dataKey: Qb,
                                item: xb,
                                bandSize: Zb,
                                barPosition: $b,
                                offset: zb,
                                stackedData: Xb,
                                layout: Eb,
                                dataStartIndex: Bb,
                                dataEndIndex: Cb
                            }))), {}, (_b = {
                                key: xb.key || 'item-'.concat(Db)
                            }, Z(_b, Jb, Ub[Jb]), Z(_b, Kb, Ub[Kb]), Z(_b, 'animationId', Ab), _b)),
                            childIndex: (0, z.parseChildIndex)(xb, b.children),
                            item: xb
                        });
                    }), Nb;
                },
                xb = function(b, kb) {
                    var yb = b.props,
                        zb = b.dataStartIndex,
                        Ab = b.dataEndIndex,
                        Bb = b.updateId;
                    if (!(0, z.validateWidthHeight)({
                            props: yb
                        }))
                        return null;
                    var Cb = yb.children,
                        Db = yb.layout,
                        Eb = yb.stackOffset,
                        Fb = yb.data,
                        Gb = yb.reverseStackOrder,
                        Hb = ib(Db),
                        Ib = Hb.numericAxisName,
                        Jb = Hb.cateAxisName,
                        Kb = (0, z.findAllByType)(Cb, nb),
                        Lb = (0, E.getStackGroupsByAxisId)(Fb, Kb, ''.concat(Ib, 'Id'), ''.concat(Jb, 'Id'), Eb, Gb),
                        Mb = sb.reduce(function(a, b) {
                            var Nb = ''.concat(b.axisType, 'Map');
                            return Y(Y({}, a), {}, Z({}, Nb, gb(yb, Y(Y({}, b), {}, {
                                graphicalItems: Kb,
                                stackGroups: b.axisType === Ib && Lb,
                                dataStartIndex: zb,
                                dataEndIndex: Ab
                            }))));
                        }, {}),
                        Nb = function(b, kb) {
                            var Ob = b.props,
                                Pb = b.graphicalItems,
                                Qb = b.xAxisMap,
                                Rb = void 0 === Qb ? {} : Qb,
                                Sb = b.yAxisMap,
                                Tb = void 0 === Sb ? {} : Sb,
                                Ub = Ob.width,
                                Vb = Ob.height,
                                Wb = Ob.children,
                                Xb = Ob.margin || {},
                                Yb = (0, z.findChildByType)(Wb, B.Brush.displayName),
                                Zb = (0, z.findChildByType)(Wb, t.Legend.displayName),
                                $b = Object.keys(Tb).reduce(function(a, b) {
                                    var _b = Tb[b],
                                        ac = _b.orientation;
                                    return _b.mirror || _b.hide ? a : Y(Y({}, a), {}, Z({}, ac, a[ac] + _b.width));
                                }, {
                                    left: Xb.left || 0,
                                    right: Xb.right || 0
                                }),
                                _b = Object.keys(Rb).reduce(function(b, kb) {
                                    var ac = Rb[kb],
                                        bc = ac.orientation;
                                    return ac.mirror || ac.hide ? b : Y(Y({}, b), {}, Z({}, bc, a(j)(b, ''.concat(bc)) + ac.height));
                                }, {
                                    top: Xb.top || 0,
                                    bottom: Xb.bottom || 0
                                }),
                                ac = Y(Y({}, _b), $b),
                                bc = ac.bottom;
                            return Yb && (ac.bottom += Yb.props.height || B.Brush.defaultProps.height), Zb && kb && (ac = (0, E.appendOffsetOfLegend)(ac, Pb, Ob, kb)), Y(Y({
                                brushBottom: bc
                            }, ac), {}, {
                                width: Ub - ac.left - ac.right,
                                height: Vb - ac.top - ac.bottom
                            });
                        }(Y(Y({}, Mb), {}, {
                            props: yb,
                            graphicalItems: Kb
                        }), null == kb ? void 0 : kb.legendBBox);
                    Object.keys(Mb).forEach(function(a) {
                        Mb[a] = ub(yb, Mb[a], Nb, a.replace('Map', ''), mb);
                    });
                    var Ob, Pb, Qb, Rb = Mb[''.concat(Jb, 'Map')],
                        Sb = (Ob = Rb, Pb = (0, D.getAnyElementOfObject)(Ob), {
                            tooltipTicks: Qb = (0, E.getTicksOfAxis)(Pb, !1, !0),
                            orderedTooltipTicks: a(i)(Qb, function(a) {
                                return a.coordinate;
                            }),
                            tooltipAxis: Pb,
                            tooltipAxisBandSize: (0, E.getBandSizeOfAxis)(Pb, Qb)
                        }),
                        Tb = wb(yb, Y(Y({}, Mb), {}, {
                            dataStartIndex: zb,
                            dataEndIndex: Ab,
                            updateId: Bb,
                            graphicalItems: Kb,
                            stackGroups: Lb,
                            offset: Nb
                        }));
                    return Y(Y({
                        formattedGraphicalItems: Tb,
                        graphicalItems: Kb,
                        offset: Nb,
                        stackGroups: Lb
                    }, Sb), Mb);
                };
            return lb = kb = function(b) {
                ! function(a, b) {
                    if ('function' != typeof b && null !== b)
                        throw new TypeError('Super expression must either be null or a function');
                    a.prototype = Object.create(b && b.prototype, {
                        constructor: {
                            value: a,
                            writable: !0,
                            configurable: !0
                        }
                    }), b && P(a, b);
                }(r, b);
                var yb, zb, Ab, Bb = Q(r);

                function Cb(b) {
                    var Db;
                    return function(a, b) {
                        if (!(a instanceof b))
                            throw new TypeError('Cannot call a class as a function');
                    }(this, Cb), (Db = Bb.call(this, b)).uniqueChartId = void 0, Db.clipPathId = void 0, Db.legendInstance = void 0, Db.deferId = void 0, Db.container = void 0, Db.clearDeferId = function() {
                        !a(l)(Db.deferId) && cb && cb(Db.deferId), Db.deferId = null;
                    }, Db.handleLegendBBoxUpdate = function(a) {
                        if (a) {
                            var Eb = Db.state,
                                Fb = Eb.dataStartIndex,
                                Gb = Eb.dataEndIndex,
                                Hb = Eb.updateId;
                            Db.setState(Y({
                                legendBBox: a
                            }, xb({
                                props: Db.props,
                                dataStartIndex: Fb,
                                dataEndIndex: Gb,
                                updateId: Hb
                            }, Y(Y({}, Db.state), {}, {
                                legendBBox: a
                            }))));
                        }
                    }, Db.handleReceiveSyncEvent = function(a, b, zb) {
                        Db.props.syncId === a && b !== Db.uniqueChartId && (Db.clearDeferId(), Db.deferId = bb && bb(Db.applySyncEvent.bind(S(Db), zb)));
                    }, Db.handleBrushChange = function(a) {
                        var Eb = a.startIndex,
                            Fb = a.endIndex;
                        if (Eb !== Db.state.dataStartIndex || Fb !== Db.state.dataEndIndex) {
                            var Gb = Db.state.updateId;
                            Db.setState(function() {
                                return Y({
                                    dataStartIndex: Eb,
                                    dataEndIndex: Fb
                                }, xb({
                                    props: Db.props,
                                    dataStartIndex: Eb,
                                    dataEndIndex: Fb,
                                    updateId: Gb
                                }, Db.state));
                            }), Db.triggerSyncEvent({
                                dataStartIndex: Eb,
                                dataEndIndex: Fb
                            });
                        }
                    }, Db.handleMouseEnter = function(b) {
                        var Eb = Db.props.onMouseEnter,
                            Fb = Db.getMouseInfo(b);
                        if (Fb) {
                            var Gb = Y(Y({}, Fb), {}, {
                                isTooltipActive: !0
                            });
                            Db.setState(Gb), Db.triggerSyncEvent(Gb), a(g)(Eb) && Eb(Gb, b);
                        }
                    }, Db.triggeredAfterMouseMove = function(b) {
                        var Eb = Db.props.onMouseMove,
                            Fb = Db.getMouseInfo(b),
                            Gb = Fb ? Y(Y({}, Fb), {}, {
                                isTooltipActive: !0
                            }) : {
                                isTooltipActive: !1
                            };
                        Db.setState(Gb), Db.triggerSyncEvent(Gb), a(g)(Eb) && Eb(Gb, b);
                    }, Db.handleItemMouseEnter = function(a) {
                        Db.setState(function() {
                            return {
                                isTooltipActive: !0,
                                activeItem: a,
                                activePayload: a.tooltipPayload,
                                activeCoordinate: a.tooltipPosition || {
                                    x: a.cx,
                                    y: a.cy
                                }
                            };
                        });
                    }, Db.handleItemMouseLeave = function() {
                        Db.setState(function() {
                            return {
                                isTooltipActive: !1
                            };
                        });
                    }, Db.handleMouseMove = function(b) {
                        b && a(g)(b.persist) && b.persist(), Db.triggeredAfterMouseMove(b);
                    }, Db.handleMouseLeave = function(b) {
                        var Eb = Db.props.onMouseLeave,
                            Fb = {
                                isTooltipActive: !1
                            };
                        Db.setState(Fb), Db.triggerSyncEvent(Fb), a(g)(Eb) && Eb(Fb, b), Db.cancelThrottledTriggerAfterMouseMove();
                    }, Db.handleOuterEvent = function(b) {
                        var Eb = (0, z.getReactEventByType)(b),
                            Fb = a(j)(Db.props, ''.concat(Eb));
                        Eb && a(g)(Fb) && Fb(/.*touch.*/i.test(Eb) ? Db.getMouseInfo(b.changedTouches[0]) : Db.getMouseInfo(b), b);
                    }, Db.handleClick = function(b) {
                        var Eb = Db.props.onClick,
                            Fb = Db.getMouseInfo(b);
                        if (Fb) {
                            var Gb = Y(Y({}, Fb), {}, {
                                isTooltipActive: !0
                            });
                            Db.setState(Gb), Db.triggerSyncEvent(Gb), a(g)(Eb) && Eb(Gb, b);
                        }
                    }, Db.handleMouseDown = function(b) {
                        var Eb = Db.props.onMouseDown;
                        a(g)(Eb) && Eb(Db.getMouseInfo(b), b);
                    }, Db.handleMouseUp = function(b) {
                        var Eb = Db.props.onMouseUp;
                        a(g)(Eb) && Eb(Db.getMouseInfo(b), b);
                    }, Db.handleTouchMove = function(a) {
                        null != a.changedTouches && a.changedTouches.length > 0 && Db.handleMouseMove(a.changedTouches[0]);
                    }, Db.handleTouchStart = function(a) {
                        null != a.changedTouches && a.changedTouches.length > 0 && Db.handleMouseDown(a.changedTouches[0]);
                    }, Db.handleTouchEnd = function(a) {
                        null != a.changedTouches && a.changedTouches.length > 0 && Db.handleMouseUp(a.changedTouches[0]);
                    }, Db.verticalCoordinatesGenerator = function(a) {
                        var Eb = a.xAxis,
                            Fb = a.width,
                            Gb = a.height,
                            Hb = a.offset;
                        return (0, E.getCoordinatesOfGrid)(A.CartesianAxis.getTicks(Y(Y(Y({}, A.CartesianAxis.defaultProps), Eb), {}, {
                            ticks: (0, E.getTicksOfAxis)(Eb, !0),
                            viewBox: {
                                x: 0,
                                y: 0,
                                width: Fb,
                                height: Gb
                            }
                        })), Hb.left, Hb.left + Hb.width);
                    }, Db.horizontalCoordinatesGenerator = function(a) {
                        var Eb = a.yAxis,
                            Fb = a.width,
                            Gb = a.height,
                            Hb = a.offset;
                        return (0, E.getCoordinatesOfGrid)(A.CartesianAxis.getTicks(Y(Y(Y({}, A.CartesianAxis.defaultProps), Eb), {}, {
                            ticks: (0, E.getTicksOfAxis)(Eb, !0),
                            viewBox: {
                                x: 0,
                                y: 0,
                                width: Fb,
                                height: Gb
                            }
                        })), Hb.top, Hb.top + Hb.height);
                    }, Db.axesTicksGenerator = function(a) {
                        return (0, E.getTicksOfAxis)(a, !0);
                    }, Db.renderCursor = function(a) {
                        var Eb = Db.state,
                            Fb = Eb.isTooltipActive,
                            Gb = Eb.activeCoordinate,
                            Hb = Eb.activePayload,
                            Ib = Eb.offset,
                            Jb = Eb.activeTooltipIndex,
                            Kb = Db.getTooltipEventType();
                        if (!a || !a.props.cursor || !Fb || !Gb || 'ScatterChart' !== mb && 'axis' !== Kb)
                            return null;
                        var Lb, Mb = Db.props.layout,
                            Nb = u.Curve;
                        if ('ScatterChart' === mb)
                            Lb = Gb, Nb = v.Cross;
                        else if ('BarChart' === mb)
                            Lb = Db.getCursorRectangle(), Nb = y.Rectangle;
                        else if ('radial' === Mb) {
                            var Ob = Db.getCursorPoints(),
                                Pb = Ob.cx,
                                Qb = Ob.cy,
                                Rb = Ob.radius;
                            Lb = {
                                cx: Pb,
                                cy: Qb,
                                startAngle: Ob.startAngle,
                                endAngle: Ob.endAngle,
                                innerRadius: Rb,
                                outerRadius: Rb
                            }, Nb = w.Sector;
                        } else
                            Lb = {
                                points: Db.getCursorPoints()
                            }, Nb = u.Curve;
                        var Ob = a.key || '_recharts-cursor',
                            Pb = Y(Y(Y(Y({
                                stroke: '#ccc',
                                pointerEvents: 'none'
                            }, Ib), Lb), (0, J.filterProps)(a.props.cursor)), {}, {
                                payload: Hb,
                                payloadIndex: Jb,
                                key: Ob,
                                className: 'recharts-tooltip-cursor'
                            });
                        return (0, o.isValidElement)(a.props.cursor) ? (0, o.cloneElement)(a.props.cursor, Pb) : (0, o.createElement)(Nb, Pb);
                    }, Db.renderPolarAxis = function(b, zb, mb) {
                        var Eb = a(j)(b, 'type.axisType'),
                            Fb = a(j)(Db.state, ''.concat(Eb, 'Map'))[b.props[''.concat(Eb, 'Id')]];
                        return (0, o.cloneElement)(b, Y(Y({}, Fb), {}, {
                            className: Eb,
                            key: b.key || ''.concat(zb, '-').concat(mb),
                            ticks: (0, E.getTicksOfAxis)(Fb, !0)
                        }));
                    }, Db.renderXAxis = function(a, b, zb) {
                        var Eb = Db.state.xAxisMap[a.props.xAxisId];
                        return Db.renderAxis(Eb, a, b, zb);
                    }, Db.renderYAxis = function(a, b, zb) {
                        var Eb = Db.state.yAxisMap[a.props.yAxisId];
                        return Db.renderAxis(Eb, a, b, zb);
                    }, Db.renderGrid = function(b) {
                        var Eb = Db.state,
                            Fb = Eb.xAxisMap,
                            Gb = Eb.yAxisMap,
                            Hb = Eb.offset,
                            Ib = Db.props,
                            Jb = Ib.width,
                            Kb = Ib.height,
                            Lb = (0, D.getAnyElementOfObject)(Fb),
                            Mb = a(f)(Gb, function(b) {
                                return a(e)(b.domain, ab);
                            }) || (0, D.getAnyElementOfObject)(Gb),
                            Nb = b.props || {};
                        return (0, o.cloneElement)(b, {
                            key: b.key || 'grid',
                            x: (0, D.isNumber)(Nb.x) ? Nb.x : Hb.left,
                            y: (0, D.isNumber)(Nb.y) ? Nb.y : Hb.top,
                            width: (0, D.isNumber)(Nb.width) ? Nb.width : Hb.width,
                            height: (0, D.isNumber)(Nb.height) ? Nb.height : Hb.height,
                            xAxis: Lb,
                            yAxis: Mb,
                            offset: Hb,
                            chartWidth: Jb,
                            chartHeight: Kb,
                            verticalCoordinatesGenerator: Nb.verticalCoordinatesGenerator || Db.verticalCoordinatesGenerator,
                            horizontalCoordinatesGenerator: Nb.horizontalCoordinatesGenerator || Db.horizontalCoordinatesGenerator
                        });
                    }, Db.renderPolarGrid = function(b) {
                        var Eb = b.props,
                            Fb = Eb.radialLines,
                            Gb = Eb.polarAngles,
                            Hb = Eb.polarRadius,
                            Ib = Db.state,
                            Jb = Ib.radiusAxisMap,
                            Kb = Ib.angleAxisMap,
                            Lb = (0, D.getAnyElementOfObject)(Jb),
                            Mb = (0, D.getAnyElementOfObject)(Kb),
                            Nb = Mb.cx,
                            Ob = Mb.cy,
                            Pb = Mb.innerRadius,
                            Qb = Mb.outerRadius;
                        return (0, o.cloneElement)(b, {
                            polarAngles: a(n)(Gb) ? Gb : (0, E.getTicksOfAxis)(Mb, !0).map(function(a) {
                                return a.coordinate;
                            }),
                            polarRadius: a(n)(Hb) ? Hb : (0, E.getTicksOfAxis)(Lb, !0).map(function(a) {
                                return a.coordinate;
                            }),
                            cx: Nb,
                            cy: Ob,
                            innerRadius: Pb,
                            outerRadius: Qb,
                            key: b.key || 'polar-grid',
                            radialLines: Fb
                        });
                    }, Db.renderLegend = function() {
                        var Eb = Db.state.formattedGraphicalItems,
                            Fb = Db.props,
                            Gb = Fb.children,
                            Hb = Fb.width,
                            Ib = Fb.height,
                            Jb = Db.props.margin || {},
                            Kb = Hb - (Jb.left || 0) - (Jb.right || 0),
                            Lb = (0, E.getLegendProps)({
                                children: Gb,
                                formattedGraphicalItems: Eb,
                                legendWidth: Kb,
                                legendContent: tb
                            });
                        if (!Lb)
                            return null;
                        var Mb = Lb.item,
                            Nb = N(Lb, ['item']);
                        return (0, o.cloneElement)(Mb, Y(Y({}, Nb), {}, {
                            chartWidth: Hb,
                            chartHeight: Ib,
                            margin: Jb,
                            ref: function(Eb) {
                                Db.legendInstance = Eb;
                            },
                            onBBoxUpdate: Db.handleLegendBBoxUpdate
                        }));
                    }, Db.renderTooltip = function() {
                        var Eb = Db.props.children,
                            Fb = (0, z.findChildByType)(Eb, s.Tooltip.displayName);
                        if (!Fb)
                            return null;
                        var Gb = Db.state,
                            Hb = Gb.isTooltipActive,
                            Ib = Gb.activeCoordinate,
                            Jb = Gb.activePayload,
                            Kb = Gb.activeLabel,
                            Lb = Gb.offset;
                        return (0, o.cloneElement)(Fb, {
                            viewBox: Y(Y({}, Lb), {}, {
                                x: Lb.left,
                                y: Lb.top
                            }),
                            active: Hb,
                            label: Kb,
                            payload: Hb ? Jb : [],
                            coordinate: Ib
                        });
                    }, Db.renderBrush = function(a) {
                        var Eb = Db.props,
                            Fb = Eb.margin,
                            Gb = Eb.data,
                            Hb = Db.state,
                            Ib = Hb.offset,
                            Jb = Hb.dataStartIndex,
                            Kb = Hb.dataEndIndex,
                            Lb = Hb.updateId;
                        return (0, o.cloneElement)(a, {
                            key: a.key || '_recharts-brush',
                            onChange: (0, E.combineEventHandlers)(Db.handleBrushChange, null, a.props.onChange),
                            data: Gb,
                            x: (0, D.isNumber)(a.props.x) ? a.props.x : Ib.left,
                            y: (0, D.isNumber)(a.props.y) ? a.props.y : Ib.top + Ib.height + Ib.brushBottom - (Fb.bottom || 0),
                            width: (0, D.isNumber)(a.props.width) ? a.props.width : Ib.width,
                            startIndex: Jb,
                            endIndex: Kb,
                            updateId: 'brush-'.concat(Lb)
                        });
                    }, Db.renderReferenceElement = function(a, b, zb) {
                        if (!a)
                            return null;
                        var Eb = S(Db).clipPathId,
                            Fb = Db.state,
                            Gb = Fb.xAxisMap,
                            Hb = Fb.yAxisMap,
                            Ib = Fb.offset,
                            Jb = a.props,
                            Kb = Jb.xAxisId,
                            Lb = Jb.yAxisId;
                        return (0, o.cloneElement)(a, {
                            key: a.key || ''.concat(b, '-').concat(zb),
                            xAxis: Gb[Kb],
                            yAxis: Hb[Lb],
                            viewBox: {
                                x: Ib.left,
                                y: Ib.top,
                                width: Ib.width,
                                height: Ib.height
                            },
                            clipPathId: Eb
                        });
                    }, Db.renderActivePoints = function(a) {
                        var Eb = a.item,
                            Fb = a.activePoint,
                            Gb = a.basePoint,
                            Hb = a.childIndex,
                            Ib = a.isRange,
                            Jb = [],
                            Kb = Eb.props.key,
                            Lb = Eb.item.props,
                            Mb = Lb.activeDot,
                            Nb = Y(Y({
                                index: Hb,
                                dataKey: Lb.dataKey,
                                cx: Fb.x,
                                cy: Fb.y,
                                r: 4,
                                fill: (0, E.getMainColorOfGraphicItem)(Eb.item),
                                strokeWidth: 2,
                                stroke: '#fff',
                                payload: Fb.payload,
                                value: Fb.value,
                                key: ''.concat(Kb, '-activePoint-').concat(Hb)
                            }, (0, J.filterProps)(Mb)), (0, J.adaptEventHandlers)(Mb));
                        return Jb.push(Cb.renderActiveDot(Mb, Nb)), Gb ? Jb.push(Cb.renderActiveDot(Mb, Y(Y({}, Nb), {}, {
                            cx: Gb.x,
                            cy: Gb.y,
                            key: ''.concat(Kb, '-basePoint-').concat(Hb)
                        }))) : Ib && Jb.push(null), Jb;
                    }, Db.renderGraphicChild = function(b, zb, mb) {
                        var Eb = Db.filterFormatItem(b, zb, mb);
                        if (!Eb)
                            return null;
                        var Fb = Db.getTooltipEventType(),
                            Gb = Db.state,
                            Hb = Gb.isTooltipActive,
                            Ib = Gb.tooltipAxis,
                            Jb = Gb.activeTooltipIndex,
                            Kb = Gb.activeLabel,
                            Lb = Db.props.children,
                            Mb = (0, z.findChildByType)(Lb, s.Tooltip.displayName),
                            Nb = Eb.props,
                            Ob = Nb.points,
                            Pb = Nb.isRange,
                            Qb = Nb.baseLine,
                            Rb = Eb.item.props,
                            Sb = Rb.activeDot,
                            Tb = !Rb.hide && Hb && Mb && Sb && Jb >= 0,
                            Ub = {};
                        'axis' !== Fb && Mb && 'click' === Mb.props.trigger ? Ub = {
                            onClick: (0, E.combineEventHandlers)(Db.handleItemMouseEnter, null, b.props.onCLick)
                        } : 'axis' !== Fb && (Ub = {
                            onMouseLeave: (0, E.combineEventHandlers)(Db.handleItemMouseLeave, null, b.props.onMouseLeave),
                            onMouseEnter: (0, E.combineEventHandlers)(Db.handleItemMouseEnter, null, b.props.onMouseEnter)
                        });
                        var Vb = (0, o.cloneElement)(b, Y(Y({}, Eb.props), Ub));
                        if (Tb) {
                            var Wb, Xb;
                            if (Ib.dataKey && !Ib.allowDuplicatedCategory) {
                                var Yb = 'function' == typeof Ib.dataKey ? function(a) {
                                    return 'function' == typeof Ib.dataKey ? Ib.dataKey(a.payload) : null;
                                } : 'payload.'.concat(Ib.dataKey.toString());
                                Wb = (0, D.findEntryInArray)(Ob, Yb, Kb), Xb = Pb && Qb && (0, D.findEntryInArray)(Qb, Yb, Kb);
                            } else
                                Wb = Ob[Jb], Xb = Pb && Qb && Qb[Jb];
                            if (!a(l)(Wb))
                                return [Vb].concat(U(Db.renderActivePoints({
                                    item: Eb,
                                    activePoint: Wb,
                                    basePoint: Xb,
                                    childIndex: Jb,
                                    isRange: Pb
                                })));
                        }
                        return Pb ? [
                            Vb,
                            null,
                            null
                        ] : [
                            Vb,
                            null
                        ];
                    }, Db.renderCustomized = function(a, b, zb) {
                        return (0, o.cloneElement)(a, Y(Y({
                            key: 'recharts-customized-'.concat(zb)
                        }, Db.props), Db.state));
                    }, Db.uniqueChartId = a(l)(b.id) ? (0, D.uniqueId)('recharts') : b.id, Db.clipPathId = ''.concat(Db.uniqueChartId, '-clip'), b.throttleDelay && (Db.triggeredAfterMouseMove = a(h)(Db.triggeredAfterMouseMove, b.throttleDelay)), Db.state = {}, Db;
                }
                return yb = Cb, (zb = [{
                        key: 'componentDidMount',
                        value: function() {
                            a(l)(this.props.syncId) || this.addListener();
                        }
                    },
                    {
                        key: 'componentDidUpdate',
                        value: function(b) {
                            a(l)(b.syncId) && !a(l)(this.props.syncId) && this.addListener(), !a(l)(b.syncId) && a(l)(this.props.syncId) && this.removeListener();
                        }
                    },
                    {
                        key: 'componentWillUnmount',
                        value: function() {
                            this.clearDeferId(), a(l)(this.props.syncId) || this.removeListener(), this.cancelThrottledTriggerAfterMouseMove();
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
                            var Db = (0, z.findChildByType)(this.props.children, s.Tooltip.displayName);
                            if (Db && a(m)(Db.props.shared)) {
                                var Eb = Db.props.shared ? 'axis' : 'item';
                                return rb.indexOf(Eb) >= 0 ? Eb : pb;
                            }
                            return pb;
                        }
                    },
                    {
                        key: 'getMouseInfo',
                        value: function(a) {
                            if (!this.container)
                                return null;
                            var Db = (0, C.getOffset)(this.container),
                                Eb = (0, C.calculateChartCoordinate)(a, Db),
                                Fb = this.inRange(Eb.chartX, Eb.chartY);
                            if (!Fb)
                                return null;
                            var Gb = this.state,
                                Hb = Gb.xAxisMap,
                                Ib = Gb.yAxisMap;
                            if ('axis' !== this.getTooltipEventType() && Hb && Ib) {
                                var Jb = (0, D.getAnyElementOfObject)(Hb).scale,
                                    Kb = (0, D.getAnyElementOfObject)(Ib).scale,
                                    Lb = Jb && Jb.invert ? Jb.invert(Eb.chartX) : null,
                                    Mb = Kb && Kb.invert ? Kb.invert(Eb.chartY) : null;
                                return Y(Y({}, Eb), {}, {
                                    xValue: Lb,
                                    yValue: Mb
                                });
                            }
                            var Jb = fb(this.state, this.props.data, this.props.layout, Fb);
                            return Jb ? Y(Y({}, Eb), Jb) : null;
                        }
                    },
                    {
                        key: 'getCursorRectangle',
                        value: function() {
                            var Kb = this.props.layout,
                                Lb = this.state,
                                Mb = Lb.activeCoordinate,
                                Nb = Lb.offset,
                                Ob = Lb.tooltipAxisBandSize,
                                Pb = Ob / 2;
                            return {
                                stroke: 'none',
                                fill: '#ccc',
                                x: 'horizontal' === Kb ? Mb.x - Pb : Nb.left + 0.5,
                                y: 'horizontal' === Kb ? Nb.top + 0.5 : Mb.y - Pb,
                                width: 'horizontal' === Kb ? Ob : Nb.width - 1,
                                height: 'horizontal' === Kb ? Nb.height - 1 : Ob
                            };
                        }
                    },
                    {
                        key: 'getCursorPoints',
                        value: function() {
                            var Qb, Rb, Sb, Tb, Ub = this.props.layout,
                                Vb = this.state,
                                Wb = Vb.activeCoordinate,
                                Xb = Vb.offset;
                            if ('horizontal' === Ub)
                                Sb = Qb = Wb.x, Rb = Xb.top, Tb = Xb.top + Xb.height;
                            else if ('vertical' === Ub)
                                Tb = Rb = Wb.y, Qb = Xb.left, Sb = Xb.left + Xb.width;
                            else if (!Kb(l)(Wb.cx) || !Kb(l)(Wb.cy)) {
                                if ('centric' !== Ub) {
                                    var Yb = Wb.cx,
                                        Zb = Wb.cy,
                                        $b = Wb.radius,
                                        _b = Wb.startAngle,
                                        ac = Wb.endAngle;
                                    return {
                                        points: [
                                            (0, G.polarToCartesian)(Yb, Zb, $b, _b),
                                            (0, G.polarToCartesian)(Yb, Zb, $b, ac)
                                        ],
                                        cx: Yb,
                                        cy: Zb,
                                        radius: $b,
                                        startAngle: _b,
                                        endAngle: ac
                                    };
                                }
                                var Yb = Wb.cx,
                                    Zb = Wb.cy,
                                    $b = Wb.innerRadius,
                                    _b = Wb.outerRadius,
                                    ac = Wb.angle,
                                    bc = (0, G.polarToCartesian)(Yb, Zb, $b, ac),
                                    cc = (0, G.polarToCartesian)(Yb, Zb, _b, ac);
                                Qb = bc.x, Rb = bc.y, Sb = cc.x, Tb = cc.y;
                            }
                            return [{
                                    x: Qb,
                                    y: Rb
                                },
                                {
                                    x: Sb,
                                    y: Tb
                                }
                            ];
                        }
                    },
                    {
                        key: 'inRange',
                        value: function(a, b) {
                            var Db = this.props.layout;
                            if ('horizontal' === Db || 'vertical' === Db) {
                                var Eb = this.state.offset;
                                return a >= Eb.left && a <= Eb.left + Eb.width && b >= Eb.top && b <= Eb.top + Eb.height ? {
                                    x: a,
                                    y: b
                                } : null;
                            }
                            var Eb = this.state,
                                Fb = Eb.angleAxisMap,
                                Gb = Eb.radiusAxisMap;
                            if (Fb && Gb) {
                                var Hb = (0, D.getAnyElementOfObject)(Fb);
                                return (0, G.inRangeOfSector)({
                                    x: a,
                                    y: b
                                }, Hb);
                            }
                            return null;
                        }
                    },
                    {
                        key: 'parseEventsOfWrapper',
                        value: function() {
                            var Hb = this.props.children,
                                Ib = this.getTooltipEventType(),
                                Jb = (0, z.findChildByType)(Hb, s.Tooltip.displayName),
                                Kb = {};
                            return Jb && 'axis' === Ib && (Kb = 'click' === Jb.props.trigger ? {
                                onClick: this.handleClick
                            } : {
                                onMouseEnter: this.handleMouseEnter,
                                onMouseMove: this.handleMouseMove,
                                onMouseLeave: this.handleMouseLeave,
                                onTouchMove: this.handleTouchMove,
                                onTouchStart: this.handleTouchStart,
                                onTouchEnd: this.handleTouchEnd
                            }), Y(Y({}, (0, J.adaptEventHandlers)(this.props, this.handleOuterEvent)), Kb);
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
                        value: function(b) {
                            var Db = this.props.syncId;
                            a(l)(Db) || I.eventCenter.emit(I.SYNC_EVENT, Db, this.uniqueChartId, b);
                        }
                    },
                    {
                        key: 'applySyncEvent',
                        value: function(b) {
                            var Db = this.props,
                                Eb = Db.layout,
                                Fb = Db.syncMethod,
                                Gb = this.state.updateId,
                                Hb = b.dataStartIndex,
                                Ib = b.dataEndIndex;
                            if (a(l)(b.dataStartIndex) && a(l)(b.dataEndIndex))
                                if (a(l)(b.activeTooltipIndex))
                                    this.setState(b);
                                else {
                                    var Jb = b.chartX,
                                        Kb = b.chartY,
                                        Lb = b.activeTooltipIndex,
                                        Mb = this.state,
                                        Nb = Mb.offset,
                                        Ob = Mb.tooltipTicks;
                                    if (!Nb)
                                        return;
                                    if ('function' == typeof Fb)
                                        Lb = Fb(Ob, b);
                                    else if ('value' === Fb) {
                                        Lb = -1;
                                        for (var Pb = 0; Pb < Ob.length; Pb++)
                                            if (Ob[Pb].value === b.activeLabel) {
                                                Lb = Pb;
                                                break;
                                            }
                                    }
                                    var Pb = Y(Y({}, Nb), {}, {
                                            x: Nb.left,
                                            y: Nb.top
                                        }),
                                        Qb = Math.min(Jb, Pb.x + Pb.width),
                                        Rb = Math.min(Kb, Pb.y + Pb.height),
                                        Sb = Ob[Lb] && Ob[Lb].value,
                                        Tb = eb(this.state, this.props.data, Lb),
                                        Ub = Ob[Lb] ? {
                                            x: 'horizontal' === Eb ? Ob[Lb].coordinate : Qb,
                                            y: 'horizontal' === Eb ? Rb : Ob[Lb].coordinate
                                        } : _;
                                    this.setState(Y(Y({}, b), {}, {
                                        activeLabel: Sb,
                                        activeCoordinate: Ub,
                                        activePayload: Tb,
                                        activeTooltipIndex: Lb
                                    }));
                                }
                            else
                                this.setState(Y({
                                    dataStartIndex: Hb,
                                    dataEndIndex: Ib
                                }, xb({
                                    props: this.props,
                                    dataStartIndex: Hb,
                                    dataEndIndex: Ib,
                                    updateId: Gb
                                }, this.state)));
                        }
                    },
                    {
                        key: 'filterFormatItem',
                        value: function(a, b, yb) {
                            for (var Db = this.state.formattedGraphicalItems, Eb = 0, Fb = Db.length; Eb < Fb; Eb++) {
                                var Gb = Db[Eb];
                                if (Gb.item === a || Gb.props.key === a.key || b === (0, z.getDisplayName)(Gb.item.type) && yb === Gb.childIndex)
                                    return Gb;
                            }
                            return null;
                        }
                    },
                    {
                        key: 'renderAxis',
                        value: function(b, yb, zb, mb) {
                            var Db = this.props,
                                Eb = Db.width,
                                Fb = Db.height;
                            return a(o).createElement(A.CartesianAxis, M({}, b, {
                                className: 'recharts-'.concat(b.axisType, ' ').concat(b.axisType),
                                key: yb.key || ''.concat(zb, '-').concat(mb),
                                viewBox: {
                                    x: 0,
                                    y: 0,
                                    width: Eb,
                                    height: Fb
                                },
                                ticksGenerator: this.axesTicksGenerator
                            }));
                        }
                    },
                    {
                        key: 'renderClipPath',
                        value: function() {
                            var Gb = this.clipPathId,
                                Hb = this.state.offset,
                                Ib = Hb.left,
                                Jb = Hb.top,
                                Kb = Hb.height,
                                Lb = Hb.width;
                            return a(o).createElement('defs', null, a(o).createElement('clipPath', {
                                id: Gb
                            }, a(o).createElement('rect', {
                                x: Ib,
                                y: Jb,
                                height: Kb,
                                width: Lb
                            })));
                        }
                    },
                    {
                        key: 'getXScales',
                        value: function() {
                            var Mb = this.state.xAxisMap;
                            return Mb ? Object.entries(Mb).reduce(function(Mb, Gb) {
                                var Nb = L(Gb, 2),
                                    Ob = Nb[0],
                                    Pb = Nb[1];
                                return Y(Y({}, Mb), {}, Z({}, Ob, Pb.scale));
                            }, {}) : null;
                        }
                    },
                    {
                        key: 'getYScales',
                        value: function() {
                            var Nb = this.state.yAxisMap;
                            return Nb ? Object.entries(Nb).reduce(function(Nb, Gb) {
                                var Ob = L(Gb, 2),
                                    Pb = Ob[0],
                                    Qb = Ob[1];
                                return Y(Y({}, Nb), {}, Z({}, Pb, Qb.scale));
                            }, {}) : null;
                        }
                    },
                    {
                        key: 'getXScaleByAxisId',
                        value: function(a) {
                            var Db, Eb;
                            return null === (Db = this.state.xAxisMap) || void 0 === Db || null === (Eb = Db[a]) || void 0 === Eb ? void 0 : Eb.scale;
                        }
                    },
                    {
                        key: 'getYScaleByAxisId',
                        value: function(a) {
                            var Db, Eb;
                            return null === (Db = this.state.yAxisMap) || void 0 === Db || null === (Eb = Db[a]) || void 0 === Eb ? void 0 : Eb.scale;
                        }
                    },
                    {
                        key: 'getItemByXY',
                        value: function(a) {
                            var Db = this.state.formattedGraphicalItems;
                            if (Db && Db.length)
                                for (var Eb = 0, Fb = Db.length; Eb < Fb; Eb++) {
                                    var Gb = Db[Eb],
                                        Hb = Gb.props,
                                        Ib = Gb.item,
                                        Jb = (0, z.getDisplayName)(Ib.type);
                                    if ('Bar' === Jb) {
                                        var Kb = (Hb.data || []).find(function(Db) {
                                            return (0, y.isInRectangle)(a, Db);
                                        });
                                        if (Kb)
                                            return {
                                                graphicalItem: Gb,
                                                payload: Kb
                                            };
                                    } else if ('RadialBar' === Jb) {
                                        var Lb = (Hb.data || []).find(function(Db) {
                                            return (0, G.inRangeOfSector)(a, Db);
                                        });
                                        if (Lb)
                                            return {
                                                graphicalItem: Gb,
                                                payload: Lb
                                            };
                                    }
                                }
                            return null;
                        }
                    },
                    {
                        key: 'render',
                        value: function() {
                            var Eb = this;
                            if (!(0, z.validateWidthHeight)(this))
                                return null;
                            var Fb = this.props,
                                Gb = Fb.children,
                                Hb = Fb.className,
                                Ib = Fb.width,
                                Jb = Fb.height,
                                Kb = Fb.style,
                                Lb = Fb.compact,
                                Mb = Fb.title,
                                Nb = Fb.desc,
                                Ob = N(Fb, [
                                    'children',
                                    'className',
                                    'width',
                                    'height',
                                    'style',
                                    'compact',
                                    'title',
                                    'desc'
                                ]),
                                Pb = (0, J.filterProps)(Ob),
                                Qb = {
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
                            if (Lb)
                                return a(o).createElement(q.Surface, M({}, Pb, {
                                    width: Ib,
                                    height: Jb,
                                    title: Mb,
                                    desc: Nb
                                }), this.renderClipPath(), (0, z.renderByOrder)(Gb, Qb));
                            var Rb = this.parseEventsOfWrapper();
                            return a(o).createElement('div', M({
                                className: a(p)('recharts-wrapper', Hb),
                                style: Y({
                                    position: 'relative',
                                    cursor: 'default',
                                    width: Ib,
                                    height: Jb
                                }, Kb)
                            }, Rb, {
                                ref: function(a) {
                                    Eb.container = a;
                                }
                            }), a(o).createElement(q.Surface, M({}, Pb, {
                                width: Ib,
                                height: Jb,
                                title: Mb,
                                desc: Nb
                            }), this.renderClipPath(), (0, z.renderByOrder)(Gb, Qb)), this.renderLegend(), this.renderTooltip());
                        }
                    }
                ]) && O(yb.prototype, zb), Ab && O(yb, Ab), Cb;
            }(o.Component), kb.displayName = mb, kb.defaultProps = Y({
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
            }, vb), kb.getDerivedStateFromProps = function(b, kb) {
                var yb = b.data,
                    zb = b.children,
                    Ab = b.width,
                    Bb = b.height,
                    Cb = b.layout,
                    Db = b.stackOffset,
                    Eb = b.margin;
                if (a(l)(kb.updateId)) {
                    var Fb = hb(b);
                    return Y(Y(Y({}, Fb), {}, {
                        updateId: 0
                    }, xb(Y(Y({
                        props: b
                    }, Fb), {}, {
                        updateId: 0
                    }), kb)), {}, {
                        prevData: yb,
                        prevWidth: Ab,
                        prevHeight: Bb,
                        prevLayout: Cb,
                        prevStackOffset: Db,
                        prevMargin: Eb,
                        prevChildren: zb
                    });
                }
                if (yb !== kb.prevData || Ab !== kb.prevWidth || Bb !== kb.prevHeight || Cb !== kb.prevLayout || Db !== kb.prevStackOffset || !(0, H.shallowEqual)(Eb, kb.prevMargin)) {
                    var Fb = hb(b),
                        Gb = {
                            chartX: kb.chartX,
                            chartY: kb.chartY,
                            isTooltipActive: kb.isTooltipActive
                        },
                        Hb = Y(Y({}, fb(kb, yb, Cb)), {}, {
                            updateId: kb.updateId + 1
                        }),
                        Ib = Y(Y(Y({}, Fb), Gb), Hb);
                    return Y(Y(Y({}, Ib), xb(Y({
                        props: b
                    }, Ib), kb)), {}, {
                        prevData: yb,
                        prevWidth: Ab,
                        prevHeight: Bb,
                        prevLayout: Cb,
                        prevStackOffset: Db,
                        prevMargin: Eb,
                        prevChildren: zb
                    });
                }
                if (!(0, z.isChildrenEqual)(zb, kb.prevChildren)) {
                    var Fb = !a(l)(yb) ? kb.updateId : kb.updateId + 1;
                    return Y(Y({
                        updateId: Fb
                    }, xb(Y(Y({
                        props: b
                    }, kb), {}, {
                        updateId: Fb
                    }), kb)), {}, {
                        prevChildren: zb
                    });
                }
                return null;
            }, kb.renderActiveDot = function(b, kb) {
                var yb;
                return yb = (0, o.isValidElement)(b) ? (0, o.cloneElement)(b, kb) : a(g)(b) ? b(kb) : a(o).createElement(x.Dot, kb), a(o).createElement(r.Layer, {
                    className: 'recharts-active-dot',
                    key: kb.key
                }, yb);
            }, lb;
        };
}), d.register('5nDu8', function(a, b) {
    var e = d('lc4mx'),
        f = d('4h+DE'),
        g = d('s7eqU'),
        h = d('JslBt0'),
        i = d('0COFM');
    a.exports = function(a, b, d) {
        var j = h(a) ? e : f;
        return d && i(a, b, d) && (b = void 0), j(a, g(b, 3));
    };
}), d.register('lc4mx', function(a, b) {
    a.exports = function(a, b) {
        for (var e = -1, f = null == a ? 0 : a.length; ++e < f;)
            if (!b(a[e], e, a))
                return !1;
        return !0;
    };
}), d.register('4h+DE', function(a, b) {
    var e = d('kucTu');
    a.exports = function(a, b) {
        var f = !0;
        return e(a, function(a, e, f) {
            return f = !!b(a, e, f);
        }), f;
    };
}), d.register('Fc4Ra', function(a, b) {
    var e = d('1oAH/')(d('lBEE6'));
    a.exports = e;
}), d.register('1oAH/', function(a, b) {
    var e = d('s7eqU'),
        f = d('/akpk'),
        g = d('QVSv3');
    a.exports = function(a) {
        return function(b, d, h) {
            var h = Object(b);
            if (!f(b)) {
                var i = e(d, 3);
                b = g(b), d = function(a) {
                    return i(h[a], a, h);
                };
            }
            var i = a(b, d, h);
            return i > -1 ? h[j ? b[i] : i] : void 0;
        };
    };
}), d.register('lBEE6', function(a, b) {
    var e = d('mw8KV'),
        f = d('s7eqU'),
        g = d('KOMW8'),
        h = Math.max;
    a.exports = function(a, b, d) {
        var i = null == a ? 0 : a.length;
        if (!i)
            return -1;
        var j = null == d ? 0 : g(d);
        return j < 0 && (j = h(i + j, 0)), e(a, f(b, 3), j);
    };
}), d.register('KOMW8', function(a, b) {
    var e = d('hOy7c');
    a.exports = function(a) {
        var f = e(a),
            g = f % 1;
        return f == f ? g ? f - g : f : 0;
    };
}), d.register('hOy7c', function(a, b) {
    var e = d('cw1OP'),
        f = 1 / 0;
    a.exports = function(a) {
        return a ? (a = e(a)) === f || a === -1 / 0 ? 1.7976931348623157e+308 * (a < 0 ? -1 : 1) : a == a ? a : 0 : 0 === a ? a : 0;
    };
}), d.register('cw1OP', function(a, b) {
    var e = d('AdPm00'),
        f = d('ZYTFk'),
        g = /^\s+|\s+$/g,
        h = /^[-+]0x[0-9a-f]+$/i,
        i = /^0b[01]+$/i,
        j = /^0o[0-7]+$/i,
        k = l;
    a.exports = function(a) {
        if ('number' == typeof a)
            return a;
        if (f(a))
            return o;
        if (e(a)) {
            var m = 'function' == typeof a.valueOf ? a.valueOf() : a;
            a = e(m) ? m + '' : m;
        }
        if ('string' != typeof a)
            return 0 === a ? a : +a;
        a = a.replace(g, '');
        var m = i.test(a);
        return m || j.test(a) ? k(a.slice(2), m ? 2 : 8) : h.test(a) ? o : +a;
    };
}), d.register('Ee2rv', function(a, b) {
    var e = d('o4A+9'),
        f = d('AdPm00');
    a.exports = function(a, b, d) {
        var g = !0,
            h = !0;
        if ('function' != typeof a)
            throw new TypeError('Expected a function');
        return f(d) && (g = 'leading' in d ? !!d.leading : g, h = 'trailing' in d ? !!d.trailing : h), e(a, b, {
            leading: g,
            maxWait: b,
            trailing: h
        });
    };
}), d.register('o4A+9', function(a, b) {
    var e = d('AdPm00'),
        f = d('dFaBq'),
        g = d('cw1OP'),
        h = Math.max,
        i = Math.min;
    a.exports = function(a, b, d) {
        var j, k, l, m, n, o, p = 0,
            q = !1,
            r = !1,
            s = !0;
        if ('function' != typeof a)
            throw new TypeError('Expected a function');

        function t(b) {
            var u = v,
                w = x;
            return v = x = void 0, p = b, m = a.apply(w, u);
        }

        function u(a) {
            return p = a, n = setTimeout(w, b), q ? t(a) : m;
        }

        function v(a) {
            var w = a - o;
            return void 0 === o || w >= b || w < 0 || r && a - p >= l;
        }

        function w() {
            var x = f();
            if (v(x))
                return x(x);
            n = setTimeout(w, function(x) {
                var y = b - (x - o);
                return r ? i(y, l - (x - p)) : y;
            }(x));
        }

        function x(a) {
            return n = void 0, s && j ? t(a) : (j = k = void 0, m);
        }

        function y() {
            var z = f(),
                A = v(z);
            if (j = arguments, k = this, o = z, A) {
                if (void 0 === n)
                    return u(o);
                if (r)
                    return clearTimeout(n), n = setTimeout(w, b), t(o);
            }
            return void 0 === n && (n = setTimeout(w, b)), m;
        }
        return b = g(b) || 0, e(d) && (q = !!d.leading, l = (r = 'maxWait' in d) ? h(g(d.maxWait) || 0, b) : l, s = 'trailing' in d ? !!d.trailing : s), y.cancel = function() {
            void 0 !== n && clearTimeout(n), p = 0, j = o = k = n = void 0;
        }, y.flush = function() {
            return void 0 === n ? m : x(f());
        }, y;
    };
}), d.register('dFaBq', function(a, b) {
    var e = d('n6tNN');
    a.exports = function() {
        return e.Date.now();
    };
}), d.register('Qi0W5', function(a, b) {
    var e = d('6unjq')();
    a.exports = e;
}), d.register('6unjq', function(a, b) {
    var e = d('DApXM'),
        f = d('0COFM'),
        g = d('hOy7c');
    a.exports = function(a) {
        return function(b, d, g) {
            return g && 'number' != typeof g && f(b, d, g) && (d = g = void 0), b = g(b), void 0 === d ? (d = b, b = 0) : d = g(d), g = void 0 === g ? b < d ? 1 : -1 : g(g), e(b, d, g, a);
        };
    };
}), d.register('DApXM', function(a, b) {
    var e = Math.ceil,
        f = Math.max;
    a.exports = function(a, b, f, e) {
        for (var g = -1, h = f(e((b - a) / (f || 1)), 0), i = Array(h); h--;)
            i[e ? h : ++g] = a, a += f;
        return i;
    };
}), d.register('LPXvk', function(a, b) {
    var e = d('/LLyG'),
        f = d('Pqi7I0');
    a.exports = function(a) {
        return !0 === a || !1 === a || f(a) && '[object Boolean]' == e(a);
    };
}), d.register('krqie', function(c, y) {
    b(c.exports, 'Tooltip', function() {
        return z;
    });
    var e = d('oskvv'),
        f = d('tax32'),
        g = d('OQ36c'),
        h = d('uPP4W');
    d('Pv6EO');
    var i = d('hE/L1'),
        j = d('VAIs1'),
        k = d('nEGF7'),
        l = d('GoeDC'),
        m = d('u572v');

    function n(a) {
        return n = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(a) {
            return typeof a;
        } : function(a) {
            return a && 'function' == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? 'symbol' : typeof a;
        }, n(a);
    }

    function o(a, b) {
        var p = Object.keys(a);
        if (Object.getOwnPropertySymbols) {
            var q = Object.getOwnPropertySymbols(a);
            b && (q = q.filter(function(b) {
                return Object.getOwnPropertyDescriptor(a, b).enumerable;
            })), p.push.apply(p, q);
        }
        return p;
    }

    function p(a) {
        for (var q = 1; q < arguments.length; q++) {
            var r = null != arguments[q] ? arguments[q] : {};
            q % 2 ? o(Object(r), !0).forEach(function(q) {
                q(a, q, r[q]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(r)) : o(Object(r)).forEach(function(q) {
                Object.defineProperty(a, q, Object.getOwnPropertyDescriptor(r, q));
            });
        }
        return a;
    }

    function q(a, b, c) {
        return b in a ? Object.defineProperty(a, b, {
            value: c,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : a[b] = c, a;
    }

    function r(a, b) {
        if (!(a instanceof b))
            throw new TypeError('Cannot call a class as a function');
    }

    function s(a, b) {
        for (var t = 0; t < b.length; t++) {
            var u = b[t];
            u.enumerable = u.enumerable || !1, u.configurable = !0, 'value' in u && (u.writable = !0), Object.defineProperty(a, u.key, u);
        }
    }

    function t(a, b) {
        return t = Object.setPrototypeOf || function(a, b) {
            return a.__proto__ = b, a;
        }, t(a, b);
    }

    function u(a) {
        var v = function() {
            if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ('function' == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
            } catch (a) {
                return !1;
            }
        }();
        return function() {
            var w, x = w(a);
            if (v) {
                var y = w(this).constructor;
                w = Reflect.construct(x, arguments, y);
            } else
                w = x.apply(this, arguments);
            return v(this, w);
        };
    }

    function v(a, b) {
        return !b || 'object' !== n(b) && 'function' != typeof b ? function(a) {
            if (void 0 === a)
                throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return a;
        }(a) : b;
    }

    function w(a) {
        return w = Object.setPrototypeOf ? Object.getPrototypeOf : function(a) {
            return a.__proto__ || Object.getPrototypeOf(a);
        }, w(a);
    }
    var x = 'recharts-tooltip-wrapper';

    function y(a) {
        return a.dataKey;
    }
    var z = function(b) {
        ! function(a, b) {
            if ('function' != typeof b && null !== b)
                throw new TypeError('Super expression must either be null or a function');
            a.prototype = Object.create(b && b.prototype, {
                constructor: {
                    value: a,
                    writable: !0,
                    configurable: !0
                }
            }), b && t(a, b);
        }(n, b);
        var A, B, C, D = u(n);

        function E() {
            var F;
            r(this, E);
            for (var G = arguments.length, H = new Array(G), I = 0; I < G; I++)
                H[I] = arguments[I];
            return (F = D.call.apply(D, [this].concat(H))).state = {
                boxWidth: -1,
                boxHeight: -1,
                dismissed: !1,
                dismissedAtCoordinate: {
                    x: 0,
                    y: 0
                }
            }, F.wrapperNode = void 0, F.getTranslate = function(G) {
                var J = G.key,
                    K = G.tooltipDimension,
                    L = G.viewBoxDimension,
                    M = F.props,
                    N = M.allowEscapeViewBox,
                    O = M.coordinate,
                    P = M.offset,
                    Q = M.position,
                    R = M.viewBox;
                if (Q && (0, m.isNumber)(Q[J]))
                    return Q[J];
                var S = O[J] - K - P,
                    T = O[J] + P;
                return N[J] ? T : O[J] + K + P > R[J] + L ? Math.max(S, R[J]) : Math.max(T, R[J]);
            }, F;
        }
        return A = E, (B = [{
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
                    var F = this.state,
                        G = F.boxWidth,
                        H = F.boxHeight;
                    if (F.dismissed ? (this.wrapperNode.blur(), this.props.coordinate.x === this.state.dismissedAtCoordinate.x && this.props.coordinate.y === this.state.dismissedAtCoordinate.y || this.setState({
                            dismissed: !1
                        })) : this.wrapperNode.focus({
                            preventScroll: !0
                        }), this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
                        var I = this.wrapperNode.getBoundingClientRect();
                        (Math.abs(I.width - G) > 1 || Math.abs(I.height - H) > 1) && this.setState({
                            boxWidth: I.width,
                            boxHeight: I.height
                        });
                    } else
                        -
                        1 === G && -1 === H || this.setState({
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
                        S = function(I, J) {
                            return !0 === I ? F(g)(J, y) : F(f)(I) ? F(g)(J, I) : J;
                        }(M.payloadUniqBy, R && N && N.length ? N.filter(function(I) {
                            return !F(e)(I.value);
                        }) : N),
                        T = S && S.length,
                        U = this.props,
                        V = U.content,
                        W = U.viewBox,
                        X = U.coordinate,
                        Y = U.position,
                        Z = U.active,
                        $ = U.wrapperStyle,
                        _ = p({
                            pointerEvents: 'none',
                            visibility: !this.state.dismissed && Z && T ? 'visible' : 'hidden',
                            position: 'absolute',
                            top: 0,
                            left: 0
                        }, $);
                    if (Y && (0, m.isNumber)(Y.x) && (0, m.isNumber)(Y.y))
                        J = Y.x, K = Y.y;
                    else {
                        var ab = this.state,
                            bb = ab.boxWidth,
                            cb = ab.boxHeight;
                        bb > 0 && cb > 0 && X ? (J = this.getTranslate({
                            key: 'x',
                            tooltipDimension: bb,
                            viewBoxDimension: W.width
                        }), K = this.getTranslate({
                            key: 'y',
                            tooltipDimension: cb,
                            viewBoxDimension: W.height
                        })) : _.visibility = 'hidden';
                    }
                    _ = p(p({}, (0, i.translateStyle)({
                        transform: this.props.useTranslate3d ? 'translate3d('.concat(J, 'px, ').concat(K, 'px, 0)') : 'translate('.concat(J, 'px, ').concat(K, 'px)')
                    })), _), O && Z && (_ = p(p({}, (0, i.translateStyle)({
                        transition: 'transform '.concat(P, 'ms ').concat(Q)
                    })), _));
                    var ab = F(j)(x, (q(I = {}, ''.concat(x, '-right'), (0, m.isNumber)(J) && X && (0, m.isNumber)(X.x) && J >= X.x), q(I, ''.concat(x, '-left'), (0, m.isNumber)(J) && X && (0, m.isNumber)(X.x) && J < X.x), q(I, ''.concat(x, '-bottom'), (0, m.isNumber)(K) && X && (0, m.isNumber)(X.y) && K >= X.y), q(I, ''.concat(x, '-top'), (0, m.isNumber)(K) && X && (0, m.isNumber)(X.y) && K < X.y), I));
                    return F(h).createElement('div', {
                        tabIndex: -1,
                        role: 'dialog',
                        onKeyDown: function(F) {
                            'Escape' === F.key && L.setState({
                                dismissed: !0,
                                dismissedAtCoordinate: p(p({}, L.state.dismissedAtCoordinate), {}, {
                                    x: L.props.coordinate.x,
                                    y: L.props.coordinate.y
                                })
                            });
                        },
                        className: ab,
                        style: _,
                        ref: function(F) {
                            L.wrapperNode = F;
                        }
                    }, function(I, J) {
                        return F(h).isValidElement(I) ? F(h).cloneElement(I, J) : F(f)(I) ? F(h).createElement(I, J) : F(h).createElement(k.DefaultTooltipContent, J);
                    }(V, p(p({}, this.props), {}, {
                        payload: S
                    })));
                }
            }
        ]) && s(A.prototype, B), C && s(A, C), E;
    }(h.PureComponent);
    z.displayName = 'Tooltip', z.defaultProps = {
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
}), d.register('nEGF7', function(c, o) {
    b(c.exports, 'DefaultTooltipContent', function() {
        return x;
    });
    var e = d('oskvv'),
        f = d('jC0sk'),
        g = d('JslBt0'),
        h = d('uPP4W'),
        i = d('VAIs1'),
        j = d('u572v');

    function k(a) {
        return k = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(a) {
            return typeof a;
        } : function(a) {
            return a && 'function' == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? 'symbol' : typeof a;
        }, k(a);
    }

    function l(a, b) {
        return function(a) {
            if (Array.isArray(a))
                return a;
        }(a) || function(a, b) {
            if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(a)))
                return;
            var m = [],
                n = !0,
                o = !1,
                p = void 0;
            try {
                for (var q, r = a[Symbol.iterator](); !(n = (q = r.next()).done) && (m.push(q.value), !b || m.length !== b); n = !0);
            } catch (a) {
                o = !0, p = a;
            } finally {
                try {
                    n || null == g.return || g.return();
                } finally {
                    if (o)
                        throw p;
                }
            }
            return m;
        }(a, b) || function(a, b) {
            if (!a)
                return;
            if ('string' == typeof a)
                return m(a, b);
            var m = Object.prototype.toString.call(a).slice(8, -1);
            'Object' === m && a.constructor && (m = a.constructor.name);
            if ('Map' === m || 'Set' === m)
                return Array.from(a);
            if ('Arguments' === m || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m))
                return m(a, b);
        }(a, b) || function() {
            throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }

    function m(a, b) {
        (null == b || b > a.length) && (b = a.length);
        for (var n = 0, o = new Array(b); n < b; n++)
            o[n] = a[n];
        return o;
    }

    function n(a, b) {
        var o = Object.keys(a);
        if (Object.getOwnPropertySymbols) {
            var p = Object.getOwnPropertySymbols(a);
            b && (p = p.filter(function(b) {
                return Object.getOwnPropertyDescriptor(a, b).enumerable;
            })), o.push.apply(o, p);
        }
        return o;
    }

    function o(a) {
        for (var p = 1; p < arguments.length; p++) {
            var q = null != arguments[p] ? arguments[p] : {};
            p % 2 ? n(Object(q), !0).forEach(function(p) {
                p(a, p, q[p]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(q)) : n(Object(q)).forEach(function(p) {
                Object.defineProperty(a, p, Object.getOwnPropertyDescriptor(q, p));
            });
        }
        return a;
    }

    function p(a, b, c) {
        return b in a ? Object.defineProperty(a, b, {
            value: c,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : a[b] = c, a;
    }

    function q(a, b) {
        if (!(a instanceof b))
            throw new TypeError('Cannot call a class as a function');
    }

    function r(a, b) {
        for (var s = 0; s < b.length; s++) {
            var t = b[s];
            t.enumerable = t.enumerable || !1, t.configurable = !0, 'value' in t && (t.writable = !0), Object.defineProperty(a, t.key, t);
        }
    }

    function s(a, b) {
        return s = Object.setPrototypeOf || function(a, b) {
            return a.__proto__ = b, a;
        }, s(a, b);
    }

    function t(a) {
        var u = function() {
            if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ('function' == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
            } catch (a) {
                return !1;
            }
        }();
        return function() {
            var v, w = v(a);
            if (u) {
                var x = v(this).constructor;
                v = Reflect.construct(w, arguments, x);
            } else
                v = w.apply(this, arguments);
            return u(this, v);
        };
    }

    function u(a, b) {
        return !b || 'object' !== k(b) && 'function' != typeof b ? function(a) {
            if (void 0 === a)
                throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return a;
        }(a) : b;
    }

    function v(a) {
        return v = Object.setPrototypeOf ? Object.getPrototypeOf : function(a) {
            return a.__proto__ || Object.getPrototypeOf(a);
        }, v(a);
    }

    function w(b) {
        return a(g)(b) && (0, j.isNumOrStr)(b[0]) && (0, j.isNumOrStr)(b[1]) ? b.join(' ~ ') : b;
    }
    var x = function(b) {
        ! function(a, b) {
            if ('function' != typeof b && null !== b)
                throw new TypeError('Super expression must either be null or a function');
            a.prototype = Object.create(b && b.prototype, {
                constructor: {
                    value: a,
                    writable: !0,
                    configurable: !0
                }
            }), b && s(a, b);
        }(k, b);
        var y, z, A, B = t(k);

        function C() {
            return q(this, C), B.apply(this, arguments);
        }
        return y = C, (z = [{
                key: 'renderContent',
                value: function() {
                    var D = this.props,
                        E = D.payload,
                        F = D.separator,
                        G = D.formatter,
                        H = D.itemStyle,
                        I = D.itemSorter;
                    if (E && E.length) {
                        var J = (I ? a(f)(E, I) : E).map(function(D, f) {
                            if ('none' === D.type)
                                return null;
                            var K = o({
                                    display: 'block',
                                    paddingTop: 4,
                                    paddingBottom: 4,
                                    color: D.color || '#000'
                                }, H),
                                L = D.formatter || G || w,
                                M = D.value,
                                N = D.name;
                            if (L && null != M && null != N) {
                                var O = L(M, N, D, f, E);
                                if (Array.isArray(O)) {
                                    var P = l(O, 2);
                                    M = P[0], N = P[1];
                                } else
                                    M = O;
                            }
                            return a(h).createElement('li', {
                                className: 'recharts-tooltip-item',
                                key: 'tooltip-item-'.concat(f),
                                style: K
                            }, (0, j.isNumOrStr)(N) ? a(h).createElement('span', {
                                className: 'recharts-tooltip-item-name'
                            }, N) : null, (0, j.isNumOrStr)(N) ? a(h).createElement('span', {
                                className: 'recharts-tooltip-item-separator'
                            }, F) : null, a(h).createElement('span', {
                                className: 'recharts-tooltip-item-value'
                            }, M), a(h).createElement('span', {
                                className: 'recharts-tooltip-item-unit'
                            }, D.unit || ''));
                        });
                        return a(h).createElement('ul', {
                            className: 'recharts-tooltip-item-list',
                            style: {
                                padding: 0,
                                margin: 0
                            }
                        }, J);
                    }
                    return null;
                }
            },
            {
                key: 'render',
                value: function() {
                    var J = this.props,
                        K = J.wrapperClassName,
                        L = J.contentStyle,
                        M = J.labelClassName,
                        N = J.labelStyle,
                        O = J.label,
                        P = J.labelFormatter,
                        Q = J.payload,
                        R = o({
                            margin: 0,
                            padding: 10,
                            backgroundColor: '#fff',
                            border: '1px solid #ccc',
                            whiteSpace: 'nowrap'
                        }, L),
                        S = o({
                            margin: 0
                        }, N),
                        T = !a(H)(O),
                        U = T ? O : '',
                        V = a(i)('recharts-default-tooltip', K),
                        W = a(i)('recharts-tooltip-label', M);
                    return T && P && null != Q && (U = P(O, Q)), a(h).createElement('div', {
                        className: V,
                        style: R
                    }, a(h).createElement('p', {
                        className: W,
                        style: S
                    }, a(h).isValidElement(U) ? U : ''.concat(U)), this.renderContent());
                }
            }
        ]) && r(y.prototype, z), A && r(y, A), C;
    }(h.PureComponent);
    x.displayName = 'DefaultTooltipContent', x.defaultProps = {
        separator: ' : ',
        contentStyle: {},
        itemStyle: {},
        labelStyle: {}
    };
}), d.register('qPFgT', function(c, H) {
    b(c.exports, 'Curve', function() {
        return K;
    });
    var e = d('JslBt0'),
        f = d('U7pAS'),
        g = d('tax32'),
        h = d('uPP4W'),
        i = d('/vPb5'),
        j = d('6AKRT'),
        k = d('VXsyC'),
        l = d('IBZij'),
        m = d('/AfaF'),
        n = d('DHASp'),
        o = d('hnKPm'),
        p = d('4aJgL'),
        q = d('TmnG/'),
        r = d('2XqVr'),
        s = d('VAIs1'),
        t = d('5AxlR'),
        u = d('u572v');

    function v(a) {
        return v = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(a) {
            return typeof a;
        } : function(a) {
            return a && 'function' == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? 'symbol' : typeof a;
        }, v(a);
    }

    function w() {
        return w = Object.assign || function(a) {
            for (var x = 1; x < arguments.length; x++) {
                var y = arguments[x];
                for (var z in y)
                    Object.prototype.hasOwnProperty.call(y, z) && (a[z] = y[z]);
            }
            return a;
        }, w.apply(this, arguments);
    }

    function x(a, b) {
        var y = Object.keys(a);
        if (Object.getOwnPropertySymbols) {
            var z = Object.getOwnPropertySymbols(a);
            b && (z = z.filter(function(b) {
                return Object.getOwnPropertyDescriptor(a, b).enumerable;
            })), y.push.apply(y, z);
        }
        return y;
    }

    function y(a) {
        for (var z = 1; z < arguments.length; z++) {
            var A = null != arguments[z] ? arguments[z] : {};
            z % 2 ? x(Object(A), !0).forEach(function(z) {
                z(a, z, A[z]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(A)) : x(Object(A)).forEach(function(z) {
                Object.defineProperty(a, z, Object.getOwnPropertyDescriptor(A, z));
            });
        }
        return a;
    }

    function z(a, b, c) {
        return b in a ? Object.defineProperty(a, b, {
            value: c,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : a[b] = c, a;
    }

    function A(a, b) {
        if (!(a instanceof b))
            throw new TypeError('Cannot call a class as a function');
    }

    function B(a, b) {
        for (var C = 0; C < b.length; C++) {
            var D = b[C];
            D.enumerable = D.enumerable || !1, D.configurable = !0, 'value' in D && (D.writable = !0), Object.defineProperty(a, D.key, D);
        }
    }

    function C(a, b) {
        return C = Object.setPrototypeOf || function(a, b) {
            return a.__proto__ = b, a;
        }, C(a, b);
    }

    function D(a) {
        var E = function() {
            if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ('function' == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
            } catch (a) {
                return !1;
            }
        }();
        return function() {
            var F, G = F(a);
            if (E) {
                var H = F(this).constructor;
                F = Reflect.construct(G, arguments, H);
            } else
                F = G.apply(this, arguments);
            return E(this, F);
        };
    }

    function E(a, b) {
        return !b || 'object' !== v(b) && 'function' != typeof b ? function(a) {
            if (void 0 === a)
                throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return a;
        }(a) : b;
    }

    function F(a) {
        return F = Object.setPrototypeOf ? Object.getPrototypeOf : function(a) {
            return a.__proto__ || Object.getPrototypeOf(a);
        }, F(a);
    }
    var G = {
            curveBasisClosed: k.default,
            curveBasisOpen: l.default,
            curveBasis: j.default,
            curveLinearClosed: n.default,
            curveLinear: m.default,
            curveMonotoneX: o.monotoneX,
            curveMonotoneY: o.monotoneY,
            curveNatural: p.default,
            curveStep: q.default,
            curveStepAfter: q.stepAfter,
            curveStepBefore: q.stepBefore
        },
        H = function(a) {
            return a.x === +a.x && a.y === +a.y;
        },
        I = function(a) {
            return a.x;
        },
        J = function(a) {
            return a.y;
        },
        K = function(b) {
            ! function(a, b) {
                if ('function' != typeof b && null !== b)
                    throw new TypeError('Super expression must either be null or a function');
                a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                        value: a,
                        writable: !0,
                        configurable: !0
                    }
                }), b && C(a, b);
            }(k, b);
            var L, M, N, O = D(k);

            function P() {
                return A(this, P), O.apply(this, arguments);
            }
            return L = P, (M = [{
                    key: 'getPath',
                    value: function() {
                        var Q, R = this.props,
                            S = R.type,
                            T = R.points,
                            U = R.baseLine,
                            V = R.layout,
                            W = R.connectNulls,
                            X = function(Q, R) {
                                if (a(g)(Q))
                                    return Q;
                                var Y = 'curve'.concat(a(f)(Q));
                                return 'curveMonotone' === Y && R ? G[''.concat(Y).concat('vertical' === R ? 'Y' : 'X')] : G[Y] || m.default;
                            }(S, V),
                            Y = W ? T.filter(function(a) {
                                return H(a);
                            }) : T;
                        if (a(e)(U)) {
                            var Z = W ? U.filter(function(a) {
                                    return H(a);
                                }) : U,
                                $ = Y.map(function(a, Q) {
                                    return y(y({}, a), {}, {
                                        base: Z[Q]
                                    });
                                });
                            return (Q = 'vertical' === V ? (0, i.default)().y(J).x1(I).x0(function(a) {
                                return a.base.x;
                            }) : (0, i.default)().x(I).y1(J).y0(function(a) {
                                return a.base.y;
                            })).defined(H).curve(X), Q($);
                        }
                        return (Q = 'vertical' === V && (0, u.isNumber)(U) ? (0, i.default)().y(J).x1(I).x0(U) : (0, u.isNumber)(U) ? (0, i.default)().x(I).y1(J).y0(U) : (0, r.default)().x(I).y(J)).defined(H).curve(X), Q(Y);
                    }
                },
                {
                    key: 'render',
                    value: function() {
                        var Z = this.props,
                            $ = Z.className,
                            _ = Z.points,
                            ab = Z.path,
                            bb = Z.pathRef;
                        if (!(_ && _.length || ab))
                            return null;
                        var cb = _ && _.length ? this.getPath() : ab;
                        return a(U).createElement('path', w({}, (0, t.filterProps)(this.props), (0, t.adaptEventHandlers)(this.props), {
                            className: a(s)('recharts-curve', $),
                            d: cb,
                            ref: bb
                        }));
                    }
                }
            ]) && B(L.prototype, M), N && B(L, N), P;
        }(h.PureComponent);
    K.defaultProps = {
        type: 'linear',
        points: [],
        connectNulls: !1
    };
}), d.register('/vPb5', function(a, c) {
    b(a.exports, 'default', function() {
        return k;
    });
    var e = d('F65wS'),
        f = d('jw4oE'),
        g = d('3Hun8'),
        h = d('/AfaF'),
        i = d('2XqVr'),
        j = d('cgo78');

    function k(a, b, c) {
        var l = null,
            m = (0, g.default)(!0),
            n = null,
            o = h.default,
            p = null;

        function q(g) {
            var r, s, t, u, v, w = (g = (0, f.default)(g)).length,
                x = !1,
                y = new Array(w),
                z = new Array(w);
            for (null == n && (p = o(v = (0, e.default)())), r = 0; r <= w; ++r) {
                if (!(r < w && m(u = g[r], r, g)) === x)
                    if (x = !x)
                        s = r, p.areaStart(), p.lineStart();
                    else {
                        for (p.lineEnd(), p.lineStart(), t = r - 1; t >= s; --t)
                            p.point(y[t], z[t]);
                        p.lineEnd(), p.areaEnd();
                    }
                x && (y[r] = +a(u, r, g), z[r] = +b(u, r, g), p.point(l ? +l(u, r, g) : y[r], c ? +c(u, r, g) : z[r]));
            }
            if (v)
                return p = null, v + '' || null;
        }

        function r() {
            return (0, i.default)().defined(m).curve(o).context(n);
        }
        return a = 'function' == typeof a ? a : void 0 === a ? j.x : (0, g.default)(+a), b = 'function' == typeof b ? b : void 0 === b ? (0, g.default)(0) : (0, g.default)(+b), c = 'function' == typeof c ? c : void 0 === c ? j.y : (0, g.default)(+c), q.x = function(b) {
            return arguments.length ? (a = 'function' == typeof b ? b : (0, g.default)(+b), l = null, q) : a;
        }, q.x0 = function(b) {
            return arguments.length ? (a = 'function' == typeof b ? b : (0, g.default)(+b), q) : a;
        }, q.x1 = function(a) {
            return arguments.length ? (l = null == a ? null : 'function' == typeof a ? a : (0, g.default)(+a), q) : l;
        }, q.y = function(a) {
            return arguments.length ? (b = 'function' == typeof a ? a : (0, g.default)(+a), c = null, q) : b;
        }, q.y0 = function(a) {
            return arguments.length ? (b = 'function' == typeof a ? a : (0, g.default)(+a), q) : b;
        }, q.y1 = function(a) {
            return arguments.length ? (c = null == a ? null : 'function' == typeof a ? a : (0, g.default)(+a), q) : c;
        }, q.lineX0 = q.lineY0 = function() {
            return r().x(a).y(b);
        }, q.lineY1 = function() {
            return r().x(a).y(c);
        }, q.lineX1 = function() {
            return r().x(l).y(b);
        }, q.defined = function(a) {
            return arguments.length ? (m = 'function' == typeof a ? a : (0, g.default)(!!a), q) : m;
        }, q.curve = function(a) {
            return arguments.length ? (o = a, null != n && (p = o(n)), q) : o;
        }, q.context = function(a) {
            return arguments.length ? (null == a ? n = p = null : p = o(n = a), q) : n;
        }, q;
    }
}), d.register('/AfaF', function(a, c) {
    function e(a) {
        this._context = a;
    }

    function f(a) {
        return new e(a);
    }
    b(a.exports, 'default', function() {
        return f;
    }), e.prototype = {
        areaStart: function() {
            this._line = 0;
        },
        areaEnd: function() {
            this._line = o;
        },
        lineStart: function() {
            this._point = 0;
        },
        lineEnd: function() {
            (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
        },
        point: function(a, b) {
            switch (a = +a, b = +b, this._point) {
                case 0:
                    this._point = 1, this._line ? this._context.lineTo(a, b) : this._context.moveTo(a, b);
                    break;
                case 1:
                    this._point = 2;
                default:
                    this._context.lineTo(a, b);
            }
        }
    };
}), d.register('2XqVr', function(a, c) {
    b(a.exports, 'default', function() {
        return j;
    });
    var e = d('F65wS'),
        f = d('jw4oE'),
        g = d('3Hun8'),
        h = d('/AfaF'),
        i = d('cgo78');

    function j(a, b) {
        var k = (0, g.default)(!0),
            l = null,
            m = h.default,
            n = null;

        function o(g) {
            var p, q, r, s = (g = (0, f.default)(g)).length,
                t = !1;
            for (null == l && (n = m(r = (0, e.default)())), p = 0; p <= s; ++p)
                !(p < s && k(q = g[p], p, g)) === t && ((t = !t) ? n.lineStart() : n.lineEnd()), t && n.point(+a(q, p, g), +b(q, p, g));
            if (r)
                return n = null, r + '' || null;
        }
        return a = 'function' == typeof a ? a : void 0 === a ? i.x : (0, g.default)(a), b = 'function' == typeof b ? b : void 0 === b ? i.y : (0, g.default)(b), o.x = function(b) {
            return arguments.length ? (a = 'function' == typeof b ? b : (0, g.default)(+b), o) : a;
        }, o.y = function(a) {
            return arguments.length ? (b = 'function' == typeof a ? a : (0, g.default)(+a), o) : b;
        }, o.defined = function(a) {
            return arguments.length ? (k = 'function' == typeof a ? a : (0, g.default)(!!a), o) : k;
        }, o.curve = function(a) {
            return arguments.length ? (m = a, null != l && (n = m(l)), o) : m;
        }, o.context = function(a) {
            return arguments.length ? (null == a ? l = n = null : n = m(l = a), o) : l;
        }, o;
    }
}), d.register('cgo78', function(a, c) {
    function e(a) {
        return a[0];
    }

    function f(a) {
        return a[1];
    }
    b(a.exports, 'x', function() {
        return e;
    }), b(a.exports, 'y', function() {
        return f;
    });
}), d.register('6AKRT', function(a, c) {
    function e(a, b, c) {
        a._context.bezierCurveTo((2 * a._x0 + a._x1) / 3, (2 * a._y0 + a._y1) / 3, (a._x0 + 2 * a._x1) / 3, (a._y0 + 2 * a._y1) / 3, (a._x0 + 4 * a._x1 + b) / 6, (a._y0 + 4 * a._y1 + c) / 6);
    }

    function f(a) {
        this._context = a;
    }

    function g(a) {
        return new f(a);
    }
    b(a.exports, 'point', function() {
        return e;
    }), b(a.exports, 'default', function() {
        return g;
    }), f.prototype = {
        areaStart: function() {
            this._line = 0;
        },
        areaEnd: function() {
            this._line = o;
        },
        lineStart: function() {
            this._x0 = this._x1 = this._y0 = this._y1 = o, this._point = 0;
        },
        lineEnd: function() {
            switch (this._point) {
                case 3:
                    e(this, this._x1, this._y1);
                case 2:
                    this._context.lineTo(this._x1, this._y1);
            }
            (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
        },
        point: function(a, b) {
            switch (a = +a, b = +b, this._point) {
                case 0:
                    this._point = 1, this._line ? this._context.lineTo(a, b) : this._context.moveTo(a, b);
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
                default:
                    e(this, a, b);
            }
            this._x0 = this._x1, this._x1 = a, this._y0 = this._y1, this._y1 = b;
        }
    };
}), d.register('VXsyC', function(a, c) {
    b(a.exports, 'default', function() {
        return h;
    });
    var e = d('QqMjE'),
        f = d('6AKRT');

    function g(a) {
        this._context = a;
    }

    function h(a) {
        return new g(a);
    }
    g.prototype = {
        areaStart: e.default,
        areaEnd: e.default,
        lineStart: function() {
            this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = o, this._point = 0;
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
        point: function(a, b) {
            switch (a = +a, b = +b, this._point) {
                case 0:
                    this._point = 1, this._x2 = a, this._y2 = b;
                    break;
                case 1:
                    this._point = 2, this._x3 = a, this._y3 = b;
                    break;
                case 2:
                    this._point = 3, this._x4 = a, this._y4 = b, this._context.moveTo((this._x0 + 4 * this._x1 + a) / 6, (this._y0 + 4 * this._y1 + b) / 6);
                    break;
                default:
                    (0, f.point)(this, a, b);
            }
            this._x0 = this._x1, this._x1 = a, this._y0 = this._y1, this._y1 = b;
        }
    };
}), d.register('QqMjE', function(a, c) {
    function e() {}
    b(a.exports, 'default', function() {
        return e;
    });
}), d.register('IBZij', function(a, c) {
    b(a.exports, 'default', function() {
        return g;
    });
    var e = d('6AKRT');

    function f(a) {
        this._context = a;
    }

    function g(a) {
        return new f(a);
    }
    f.prototype = {
        areaStart: function() {
            this._line = 0;
        },
        areaEnd: function() {
            this._line = o;
        },
        lineStart: function() {
            this._x0 = this._x1 = this._y0 = this._y1 = o, this._point = 0;
        },
        lineEnd: function() {
            (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line;
        },
        point: function(a, b) {
            switch (a = +a, b = +b, this._point) {
                case 0:
                    this._point = 1;
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    this._point = 3;
                    var h = (this._x0 + 4 * this._x1 + a) / 6,
                        i = (this._y0 + 4 * this._y1 + b) / 6;
                    this._line ? this._context.lineTo(h, i) : this._context.moveTo(h, i);
                    break;
                case 3:
                    this._point = 4;
                default:
                    (0, e.point)(this, a, b);
            }
            this._x0 = this._x1, this._x1 = a, this._y0 = this._y1, this._y1 = b;
        }
    };
}), d.register('DHASp', function(a, c) {
    b(a.exports, 'default', function() {
        return g;
    });
    var e = d('QqMjE');

    function f(a) {
        this._context = a;
    }

    function g(a) {
        return new f(a);
    }
    f.prototype = {
        areaStart: e.default,
        areaEnd: e.default,
        lineStart: function() {
            this._point = 0;
        },
        lineEnd: function() {
            this._point && this._context.closePath();
        },
        point: function(a, b) {
            a = +a, b = +b, this._point ? this._context.lineTo(a, b) : (this._point = 1, this._context.moveTo(a, b));
        }
    };
}), d.register('hnKPm', function(a, c) {
    function e(a) {
        return a < 0 ? -1 : 1;
    }

    function f(a, b, c) {
        var g = a._x1 - a._x0,
            h = b - a._x1,
            i = (a._y1 - a._y0) / (g || h < 0 && -0),
            j = (c - a._y1) / (h || g < 0 && -0),
            k = (i * h + j * g) / (g + h);
        return (e(i) + e(j)) * Math.min(Math.abs(i), Math.abs(j), 0.5 * Math.abs(k)) || 0;
    }

    function g(a, b) {
        var h = a._x1 - a._x0;
        return h ? (3 * (a._y1 - a._y0) / h - b) / 2 : b;
    }

    function h(a, b, c) {
        var i = a._x0,
            j = a._y0,
            k = a._x1,
            l = a._y1,
            m = (k - i) / 3;
        a._context.bezierCurveTo(i + m, j + m * b, k - m, l - m * c, k, l);
    }

    function i(a) {
        this._context = a;
    }

    function j(a) {
        this._context = new k(a);
    }

    function k(a) {
        this._context = a;
    }

    function l(a) {
        return new i(a);
    }

    function m(a) {
        return new j(a);
    }
    b(a.exports, 'monotoneX', function() {
        return l;
    }), b(a.exports, 'monotoneY', function() {
        return m;
    }), i.prototype = {
        areaStart: function() {
            this._line = 0;
        },
        areaEnd: function() {
            this._line = o;
        },
        lineStart: function() {
            this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = o, this._point = 0;
        },
        lineEnd: function() {
            switch (this._point) {
                case 2:
                    this._context.lineTo(this._x1, this._y1);
                    break;
                case 3:
                    h(this, this._t0, g(this, this._t0));
            }
            (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
        },
        point: function(a, b) {
            var n = o;
            if (b = +b, (a = +a) !== this._x1 || b !== this._y1) {
                switch (this._point) {
                    case 0:
                        this._point = 1, this._line ? this._context.lineTo(a, b) : this._context.moveTo(a, b);
                        break;
                    case 1:
                        this._point = 2;
                        break;
                    case 2:
                        this._point = 3, h(this, g(this, n = f(this, a, b)), n);
                        break;
                    default:
                        h(this, this._t0, n = f(this, a, b));
                }
                this._x0 = this._x1, this._x1 = a, this._y0 = this._y1, this._y1 = b, this._t0 = n;
            }
        }
    }, (j.prototype = Object.create(i.prototype)).point = function(a, b) {
        i.prototype.point.call(this, b, a);
    }, k.prototype = {
        moveTo: function(a, b) {
            this._context.moveTo(b, a);
        },
        closePath: function() {
            this._context.closePath();
        },
        lineTo: function(a, b) {
            this._context.lineTo(b, a);
        },
        bezierCurveTo: function(a, b, c, e, f, g) {
            this._context.bezierCurveTo(b, a, e, c, g, f);
        }
    };
}), d.register('4aJgL', function(a, c) {
    function e(a) {
        this._context = a;
    }

    function f(a) {
        var g, h, i = a.length - 1,
            j = new Array(i),
            k = new Array(i),
            l = new Array(i);
        for (j[0] = 0, k[0] = 2, l[0] = a[0] + 2 * a[1], g = 1; g < i - 1; ++g)
            j[g] = 1, k[g] = 4, l[g] = 4 * a[g] + 2 * a[g + 1];
        for (j[i - 1] = 2, k[i - 1] = 7, l[i - 1] = 8 * a[i - 1] + a[i], g = 1; g < i; ++g)
            h = j[g] / k[g - 1], k[g] -= h, l[g] -= h * l[g - 1];
        for (j[i - 1] = l[i - 1] / k[i - 1], g = i - 2; g >= 0; --g)
            j[g] = (l[g] - j[g + 1]) / k[g];
        for (k[i - 1] = (a[i] + j[i - 1]) / 2, g = 0; g < i - 1; ++g)
            k[g] = 2 * a[g + 1] - j[g + 1];
        return [
            j,
            k
        ];
    }

    function g(a) {
        return new e(a);
    }
    b(a.exports, 'default', function() {
        return g;
    }), e.prototype = {
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
            var h = this._x,
                i = this._y,
                j = h.length;
            if (j)
                if (this._line ? this._context.lineTo(h[0], i[0]) : this._context.moveTo(h[0], i[0]), 2 === j)
                    this._context.lineTo(h[1], i[1]);
                else
                    for (var k = f(h), l = f(i), m = 0, n = 1; n < j; ++m, ++n)
                        this._context.bezierCurveTo(k[0][m], l[0][m], k[1][m], l[1][m], h[n], i[n]);
            (this._line || 0 !== this._line && 1 === j) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
        },
        point: function(a, b) {
            this._x.push(+a), this._y.push(+b);
        }
    };
}), d.register('TmnG/', function(a, c) {
    function e(a, b) {
        this._context = a, this._t = b;
    }

    function f(a) {
        return new e(a, 0.5);
    }

    function g(a) {
        return new e(a, 0);
    }

    function h(a) {
        return new e(a, 1);
    }
    b(a.exports, 'default', function() {
        return f;
    }), b(a.exports, 'stepBefore', function() {
        return g;
    }), b(a.exports, 'stepAfter', function() {
        return h;
    }), e.prototype = {
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
        point: function(a, b) {
            switch (a = +a, b = +b, this._point) {
                case 0:
                    this._point = 1, this._line ? this._context.lineTo(a, b) : this._context.moveTo(a, b);
                    break;
                case 1:
                    this._point = 2;
                default:
                    if (this._t <= 0)
                        this._context.lineTo(this._x, b), this._context.lineTo(a, b);
                    else {
                        var i = this._x * (1 - this._t) + a * this._t;
                        this._context.lineTo(i, this._y), this._context.lineTo(i, b);
                    }
            }
            this._x = a, this._y = b;
        }
    };
}), d.register('xEo5V', function(c, r) {
    b(c.exports, 'Cross', function() {
        return q;
    });
    var e = d('uPP4W'),
        f = d('VAIs1'),
        g = d('u572v'),
        h = d('5AxlR');

    function i(a) {
        return i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(a) {
            return typeof a;
        } : function(a) {
            return a && 'function' == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? 'symbol' : typeof a;
        }, i(a);
    }

    function j() {
        return j = Object.assign || function(a) {
            for (var k = 1; k < arguments.length; k++) {
                var l = arguments[k];
                for (var m in l)
                    Object.prototype.hasOwnProperty.call(l, m) && (a[m] = l[m]);
            }
            return a;
        }, j.apply(this, arguments);
    }

    function k(a, b) {
        if (!(a instanceof b))
            throw new TypeError('Cannot call a class as a function');
    }

    function l(a, b) {
        for (var m = 0; m < b.length; m++) {
            var n = b[m];
            n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(a, n.key, n);
        }
    }

    function m(a, b) {
        return m = Object.setPrototypeOf || function(a, b) {
            return a.__proto__ = b, a;
        }, m(a, b);
    }

    function n(a) {
        var o = function() {
            if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ('function' == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
            } catch (a) {
                return !1;
            }
        }();
        return function() {
            var p, q = p(a);
            if (o) {
                var r = p(this).constructor;
                p = Reflect.construct(q, arguments, r);
            } else
                p = q.apply(this, arguments);
            return o(this, p);
        };
    }

    function o(a, b) {
        return !b || 'object' !== i(b) && 'function' != typeof b ? function(a) {
            if (void 0 === a)
                throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return a;
        }(a) : b;
    }

    function p(a) {
        return p = Object.setPrototypeOf ? Object.getPrototypeOf : function(a) {
            return a.__proto__ || Object.getPrototypeOf(a);
        }, p(a);
    }
    var q = function(b) {
        ! function(a, b) {
            if ('function' != typeof b && null !== b)
                throw new TypeError('Super expression must either be null or a function');
            a.prototype = Object.create(b && b.prototype, {
                constructor: {
                    value: a,
                    writable: !0,
                    configurable: !0
                }
            }), b && m(a, b);
        }(o, b);
        var r, s, t, u = n(o);

        function v() {
            return k(this, v), u.apply(this, arguments);
        }
        return r = v, t = [{
            key: 'getPath',
            value: function(a, b, r, s, t, e) {
                return 'M'.concat(a, ',').concat(t, 'v').concat(s, 'M').concat(e, ',').concat(b, 'h').concat(r);
            }
        }], (s = [{
            key: 'render',
            value: function() {
                var w = this.props,
                    x = w.x,
                    y = w.y,
                    z = w.width,
                    A = w.height,
                    B = w.top,
                    C = w.left,
                    D = w.className;
                return (0, g.isNumber)(x) && (0, g.isNumber)(y) && (0, g.isNumber)(z) && (0, g.isNumber)(A) && (0, g.isNumber)(B) && (0, g.isNumber)(C) ? a(e).createElement('path', j({}, (0, h.filterProps)(this.props, !0), {
                    className: a(f)('recharts-cross', D),
                    d: v.getPath(x, y, z, A, B, C)
                })) : null;
            }
        }]) && l(r.prototype, s), t && l(r, t), v;
    }(e.PureComponent);
    q.defaultProps = {
        x: 0,
        y: 0,
        top: 0,
        left: 0,
        width: 0,
        height: 0
    };
}), d.register('ty4Dd', function(c, s) {
    b(c.exports, 'Sector', function() {
        return t;
    });
    var e = d('uPP4W'),
        f = d('VAIs1'),
        g = d('5AxlR'),
        h = d('Ab/Ag'),
        i = d('u572v');

    function j(a) {
        return j = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(a) {
            return typeof a;
        } : function(a) {
            return a && 'function' == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? 'symbol' : typeof a;
        }, j(a);
    }

    function k() {
        return k = Object.assign || function(a) {
            for (var l = 1; l < arguments.length; l++) {
                var m = arguments[l];
                for (var n in m)
                    Object.prototype.hasOwnProperty.call(m, n) && (a[n] = m[n]);
            }
            return a;
        }, k.apply(this, arguments);
    }

    function l(a, b) {
        if (!(a instanceof b))
            throw new TypeError('Cannot call a class as a function');
    }

    function m(a, b) {
        for (var n = 0; n < b.length; n++) {
            var o = b[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(a, o.key, o);
        }
    }

    function n(a, b) {
        return n = Object.setPrototypeOf || function(a, b) {
            return a.__proto__ = b, a;
        }, n(a, b);
    }

    function o(a) {
        var p = function() {
            if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ('function' == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
            } catch (a) {
                return !1;
            }
        }();
        return function() {
            var q, r = q(a);
            if (p) {
                var s = q(this).constructor;
                q = Reflect.construct(r, arguments, s);
            } else
                q = r.apply(this, arguments);
            return p(this, q);
        };
    }

    function p(a, b) {
        return !b || 'object' !== j(b) && 'function' != typeof b ? function(a) {
            if (void 0 === a)
                throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return a;
        }(a) : b;
    }

    function q(a) {
        return q = Object.setPrototypeOf ? Object.getPrototypeOf : function(a) {
            return a.__proto__ || Object.getPrototypeOf(a);
        }, q(a);
    }
    var r = function(a) {
            var s = a.cx,
                t = a.cy,
                u = a.radius,
                v = a.angle,
                w = a.sign,
                x = a.isExternal,
                y = a.cornerRadius,
                z = a.cornerIsExternal,
                A = y * (x ? 1 : -1) + u,
                B = Math.asin(y / A) / h.RADIAN,
                C = z ? v : v + w * B,
                D = z ? v - w * B : v;
            return {
                center: (0, h.polarToCartesian)(s, t, A, C),
                circleTangency: (0, h.polarToCartesian)(s, t, u, C),
                lineTangency: (0, h.polarToCartesian)(s, t, A * Math.cos(B * h.RADIAN), D),
                theta: B
            };
        },
        s = function(a) {
            var t = a.cx,
                u = a.cy,
                v = a.innerRadius,
                w = a.outerRadius,
                x = a.startAngle,
                y = function(a, t) {
                    return (0, i.mathSign)(t - a) * Math.min(Math.abs(t - a), 359.999);
                }(x, a.endAngle),
                z = x + y,
                A = (0, h.polarToCartesian)(t, u, w, x),
                B = (0, h.polarToCartesian)(t, u, w, z),
                C = 'M '.concat(A.x, ',').concat(A.y, '\n    A ').concat(w, ',').concat(w, ',0,\n    ').concat(+(Math.abs(y) > 180), ',').concat(+(x > z), ',\n    ').concat(B.x, ',').concat(B.y, '\n  ');
            if (v > 0) {
                var D = (0, h.polarToCartesian)(t, u, v, x),
                    E = (0, h.polarToCartesian)(t, u, v, z);
                C += 'L '.concat(E.x, ',').concat(E.y, '\n            A ').concat(v, ',').concat(v, ',0,\n            ').concat(+(Math.abs(y) > 180), ',').concat(+(x <= z), ',\n            ').concat(D.x, ',').concat(D.y, ' Z');
            } else
                C += 'L '.concat(t, ',').concat(u, ' Z');
            return C;
        },
        t = function(b) {
            ! function(a, b) {
                if ('function' != typeof b && null !== b)
                    throw new TypeError('Super expression must either be null or a function');
                a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                        value: a,
                        writable: !0,
                        configurable: !0
                    }
                }), b && n(a, b);
            }(j, b);
            var u, v, w, x = o(j);

            function y() {
                return l(this, y), x.apply(this, arguments);
            }
            return u = y, (v = [{
                key: 'render',
                value: function() {
                    var z = this.props,
                        A = z.cx,
                        B = z.cy,
                        C = z.innerRadius,
                        D = z.outerRadius,
                        E = z.cornerRadius,
                        F = z.forceCornerRadius,
                        G = z.cornerIsExternal,
                        H = z.startAngle,
                        I = z.endAngle,
                        J = z.className;
                    if (D < C || H === I)
                        return null;
                    var K, L = a(f)('recharts-sector', J),
                        M = D - C,
                        N = (0, i.getPercentValue)(E, M, 0, !0);
                    return K = N > 0 && Math.abs(H - I) < 360 ? function(a) {
                        var O = a.cx,
                            P = a.cy,
                            Q = a.innerRadius,
                            R = a.outerRadius,
                            S = a.cornerRadius,
                            T = a.forceCornerRadius,
                            U = a.cornerIsExternal,
                            V = a.startAngle,
                            W = a.endAngle,
                            X = (0, i.mathSign)(W - V),
                            Y = r({
                                cx: O,
                                cy: P,
                                radius: R,
                                angle: V,
                                sign: X,
                                cornerRadius: S,
                                cornerIsExternal: U
                            }),
                            Z = Y.circleTangency,
                            $ = Y.lineTangency,
                            _ = Y.theta,
                            ab = r({
                                cx: O,
                                cy: P,
                                radius: R,
                                angle: W,
                                sign: -X,
                                cornerRadius: S,
                                cornerIsExternal: U
                            }),
                            bb = ab.circleTangency,
                            cb = ab.lineTangency,
                            db = ab.theta,
                            eb = U ? Math.abs(V - W) : Math.abs(V - W) - _ - db;
                        if (eb < 0)
                            return T ? 'M '.concat($.x, ',').concat($.y, '\n        a').concat(S, ',').concat(S, ',0,0,1,').concat(2 * S, ',0\n        a').concat(S, ',').concat(S, ',0,0,1,').concat(2 * -S, ',0\n      ') : s({
                                cx: O,
                                cy: P,
                                innerRadius: Q,
                                outerRadius: R,
                                startAngle: V,
                                endAngle: W
                            });
                        var fb = 'M '.concat($.x, ',').concat($.y, '\n    A').concat(S, ',').concat(S, ',0,0,').concat(+(X < 0), ',').concat(Z.x, ',').concat(Z.y, '\n    A').concat(R, ',').concat(R, ',0,').concat(+(eb > 180), ',').concat(+(X < 0), ',').concat(bb.x, ',').concat(bb.y, '\n    A').concat(S, ',').concat(S, ',0,0,').concat(+(X < 0), ',').concat(cb.x, ',').concat(cb.y, '\n  ');
                        if (Q > 0) {
                            var gb = r({
                                    cx: O,
                                    cy: P,
                                    radius: Q,
                                    angle: V,
                                    sign: X,
                                    isExternal: !0,
                                    cornerRadius: S,
                                    cornerIsExternal: U
                                }),
                                hb = gb.circleTangency,
                                ib = gb.lineTangency,
                                jb = gb.theta,
                                kb = r({
                                    cx: O,
                                    cy: P,
                                    radius: Q,
                                    angle: W,
                                    sign: -X,
                                    isExternal: !0,
                                    cornerRadius: S,
                                    cornerIsExternal: U
                                }),
                                lb = kb.circleTangency,
                                mb = kb.lineTangency,
                                nb = kb.theta,
                                ob = U ? Math.abs(V - W) : Math.abs(V - W) - jb - nb;
                            if (ob < 0 && 0 === S)
                                return ''.concat(fb, 'L').concat(O, ',').concat(P, 'Z');
                            fb += 'L'.concat(mb.x, ',').concat(mb.y, '\n      A').concat(S, ',').concat(S, ',0,0,').concat(+(X < 0), ',').concat(lb.x, ',').concat(lb.y, '\n      A').concat(Q, ',').concat(Q, ',0,').concat(+(ob > 180), ',').concat(+(X > 0), ',').concat(hb.x, ',').concat(hb.y, '\n      A').concat(S, ',').concat(S, ',0,0,').concat(+(X < 0), ',').concat(ib.x, ',').concat(ib.y, 'Z');
                        } else
                            fb += 'L'.concat(O, ',').concat(P, 'Z');
                        return fb;
                    }({
                        cx: A,
                        cy: B,
                        innerRadius: C,
                        outerRadius: D,
                        cornerRadius: Math.min(N, M / 2),
                        forceCornerRadius: F,
                        cornerIsExternal: G,
                        startAngle: H,
                        endAngle: I
                    }) : s({
                        cx: A,
                        cy: B,
                        innerRadius: C,
                        outerRadius: D,
                        startAngle: H,
                        endAngle: I
                    }), a(e).createElement('path', k({}, (0, g.filterProps)(this.props, !0), {
                        className: L,
                        d: K
                    }));
                }
            }]) && m(u.prototype, v), w && m(u, w), y;
        }(e.PureComponent);
    t.defaultProps = {
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
}), d.register('/EYwe', function(c, q) {
    b(c.exports, 'Dot', function() {
        return p;
    });
    var e = d('uPP4W'),
        f = d('VAIs1'),
        g = d('5AxlR');

    function h(a) {
        return h = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(a) {
            return typeof a;
        } : function(a) {
            return a && 'function' == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? 'symbol' : typeof a;
        }, h(a);
    }

    function i() {
        return i = Object.assign || function(a) {
            for (var j = 1; j < arguments.length; j++) {
                var k = arguments[j];
                for (var l in k)
                    Object.prototype.hasOwnProperty.call(k, l) && (a[l] = k[l]);
            }
            return a;
        }, i.apply(this, arguments);
    }

    function j(a, b) {
        if (!(a instanceof b))
            throw new TypeError('Cannot call a class as a function');
    }

    function k(a, b) {
        for (var l = 0; l < b.length; l++) {
            var m = b[l];
            m.enumerable = m.enumerable || !1, m.configurable = !0, 'value' in m && (m.writable = !0), Object.defineProperty(a, m.key, m);
        }
    }

    function l(a, b) {
        return l = Object.setPrototypeOf || function(a, b) {
            return a.__proto__ = b, a;
        }, l(a, b);
    }

    function m(a) {
        var n = function() {
            if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ('function' == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
            } catch (a) {
                return !1;
            }
        }();
        return function() {
            var o, p = o(a);
            if (n) {
                var q = o(this).constructor;
                o = Reflect.construct(p, arguments, q);
            } else
                o = p.apply(this, arguments);
            return n(this, o);
        };
    }

    function n(a, b) {
        return !b || 'object' !== h(b) && 'function' != typeof b ? function(a) {
            if (void 0 === a)
                throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return a;
        }(a) : b;
    }

    function o(a) {
        return o = Object.setPrototypeOf ? Object.getPrototypeOf : function(a) {
            return a.__proto__ || Object.getPrototypeOf(a);
        }, o(a);
    }
    var p = function(b) {
        ! function(a, b) {
            if ('function' != typeof b && null !== b)
                throw new TypeError('Super expression must either be null or a function');
            a.prototype = Object.create(b && b.prototype, {
                constructor: {
                    value: a,
                    writable: !0,
                    configurable: !0
                }
            }), b && l(a, b);
        }(n, b);
        var q, r, s, t = m(n);

        function u() {
            return j(this, u), t.apply(this, arguments);
        }
        return q = u, (r = [{
            key: 'render',
            value: function() {
                var v = this.props,
                    w = v.cx,
                    x = v.cy,
                    y = v.r,
                    z = v.className,
                    A = a(f)('recharts-dot', z);
                return w === +w && x === +x && y === +y ? a(e).createElement('circle', i({}, (0, g.filterProps)(this.props), (0, g.adaptEventHandlers)(this.props), {
                    className: A,
                    cx: w,
                    cy: x,
                    r: y
                })) : null;
            }
        }]) && k(q.prototype, r), s && k(q, s), u;
    }(e.PureComponent);
}), d.register('GqBxD', function(c, y) {
    b(c.exports, 'CartesianAxis', function() {
        return B;
    });
    var e = d('G5U2X'),
        f = d('tax32'),
        g = d('uPP4W'),
        h = d('VAIs1'),
        i = d('vmqjm'),
        j = d('xgP3B'),
        k = d('iSJ10'),
        l = d('c1LvE'),
        m = d('Mq9Yw'),
        n = d('GoeDC'),
        o = d('u572v'),
        p = d('5AxlR');

    function q(a) {
        return q = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(a) {
            return typeof a;
        } : function(a) {
            return a && 'function' == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? 'symbol' : typeof a;
        }, q(a);
    }

    function r() {
        return r = Object.assign || function(a) {
            for (var s = 1; s < arguments.length; s++) {
                var t = arguments[s];
                for (var u in t)
                    Object.prototype.hasOwnProperty.call(t, u) && (a[u] = t[u]);
            }
            return a;
        }, r.apply(this, arguments);
    }

    function s(a, b) {
        var t = Object.keys(a);
        if (Object.getOwnPropertySymbols) {
            var u = Object.getOwnPropertySymbols(a);
            b && (u = u.filter(function(b) {
                return Object.getOwnPropertyDescriptor(a, b).enumerable;
            })), t.push.apply(t, u);
        }
        return t;
    }

    function t(a) {
        for (var u = 1; u < arguments.length; u++) {
            var v = null != arguments[u] ? arguments[u] : {};
            u % 2 ? s(Object(v), !0).forEach(function(u) {
                u(a, u, v[u]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(v)) : s(Object(v)).forEach(function(u) {
                Object.defineProperty(a, u, Object.getOwnPropertyDescriptor(v, u));
            });
        }
        return a;
    }

    function u(a, b, c) {
        return b in a ? Object.defineProperty(a, b, {
            value: c,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : a[b] = c, a;
    }

    function v(a, b) {
        if (null == a)
            return {};
        var w, x, y = function(a, b) {
            if (null == a)
                return {};
            var z, A, B = {},
                C = Object.keys(a);
            for (A = 0; A < C.length; A++)
                z = C[A], b.indexOf(z) >= 0 || (B[z] = a[z]);
            return B;
        }(a, b);
        if (Object.getOwnPropertySymbols) {
            var z = Object.getOwnPropertySymbols(a);
            for (x = 0; x < z.length; x++)
                w = z[x], b.indexOf(w) >= 0 || Object.prototype.propertyIsEnumerable.call(a, w) && (y[w] = a[w]);
        }
        return y;
    }

    function w(a, b) {
        for (var x = 0; x < b.length; x++) {
            var y = b[x];
            y.enumerable = y.enumerable || !1, y.configurable = !0, 'value' in y && (y.writable = !0), Object.defineProperty(a, y.key, y);
        }
    }

    function x(a, b) {
        return x = Object.setPrototypeOf || function(a, b) {
            return a.__proto__ = b, a;
        }, x(a, b);
    }

    function y(a) {
        var z = function() {
            if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ('function' == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
            } catch (a) {
                return !1;
            }
        }();
        return function() {
            var A, B = A(a);
            if (z) {
                var C = A(this).constructor;
                A = Reflect.construct(B, arguments, C);
            } else
                A = B.apply(this, arguments);
            return z(this, A);
        };
    }

    function z(a, b) {
        return !b || 'object' !== q(b) && 'function' != typeof b ? function(a) {
            if (void 0 === a)
                throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return a;
        }(a) : b;
    }

    function A(a) {
        return A = Object.setPrototypeOf ? Object.getPrototypeOf : function(a) {
            return a.__proto__ || Object.getPrototypeOf(a);
        }, A(a);
    }
    var B = function(b) {
        ! function(a, b) {
            if ('function' != typeof b && null !== b)
                throw new TypeError('Super expression must either be null or a function');
            a.prototype = Object.create(b && b.prototype, {
                constructor: {
                    value: a,
                    writable: !0,
                    configurable: !0
                }
            }), b && x(a, b);
        }(s, b);
        var C, D, E, F = y(s);

        function G(a) {
            var H;
            return function(a, H) {
                if (!(a instanceof H))
                    throw new TypeError('Cannot call a class as a function');
            }(this, G), (H = F.call(this, a)).layerReference = void 0, H.state = {
                fontSize: '',
                letterSpacing: ''
            }, H;
        }
        return C = G, E = [{
                key: 'getTicks',
                value: function(a, b, C) {
                    var H = a.tick,
                        I = a.ticks,
                        J = a.viewBox,
                        K = a.minTickGap,
                        L = a.orientation,
                        M = a.interval,
                        N = a.tickFormatter,
                        O = a.unit;
                    return I && I.length && H ? (0, o.isNumber)(M) || n.Global.isSsr ? G.getNumberIntervalTicks(I, 'number' == typeof M && (0, o.isNumber)(M) ? M : 0) : 'preserveStartEnd' === M ? G.getTicksStart({
                        ticks: I,
                        tickFormatter: N,
                        viewBox: J,
                        orientation: L,
                        minTickGap: K,
                        unit: O,
                        fontSize: b,
                        letterSpacing: C
                    }, !0) : 'preserveStart' === M ? G.getTicksStart({
                        ticks: I,
                        tickFormatter: N,
                        viewBox: J,
                        orientation: L,
                        minTickGap: K,
                        unit: O,
                        fontSize: b,
                        letterSpacing: C
                    }) : G.getTicksEnd({
                        ticks: I,
                        tickFormatter: N,
                        viewBox: J,
                        orientation: L,
                        minTickGap: K,
                        unit: O,
                        fontSize: b,
                        letterSpacing: C
                    }) : [];
                }
            },
            {
                key: 'getNumberIntervalTicks',
                value: function(a, b) {
                    return a.filter(function(a, C) {
                        return C % (b + 1) == 0;
                    });
                }
            },
            {
                key: 'getTicksStart',
                value: function(b, C) {
                    var H, I, J = b.ticks,
                        K = b.tickFormatter,
                        L = b.viewBox,
                        M = b.orientation,
                        N = b.minTickGap,
                        O = b.unit,
                        P = b.fontSize,
                        Q = b.letterSpacing,
                        R = L.x,
                        S = L.y,
                        T = L.width,
                        U = L.height,
                        V = 'top' === M || 'bottom' === M ? 'width' : 'height',
                        W = (J || []).slice(),
                        X = O && 'width' === V ? (0, j.getStringSize)(O, {
                            fontSize: P,
                            letterSpacing: Q
                        })[V] : 0,
                        Y = W.length,
                        Z = Y >= 2 ? (0, o.mathSign)(W[1].coordinate - W[0].coordinate) : 1;
                    if (1 === Z ? (H = 'width' === V ? R : S, I = 'width' === V ? R + T : S + U) : (H = 'width' === V ? R + T : S + U, I = 'width' === V ? R : S), C) {
                        var $ = J[Y - 1],
                            _ = a(f)(K) ? K($.value, Y - 1) : $.value,
                            ab = (0, j.getStringSize)(_, {
                                fontSize: P,
                                letterSpacing: Q
                            })[V] + X,
                            bb = Z * ($.coordinate + Z * ab / 2 - I);
                        W[Y - 1] = $ = t(t({}, $), {}, {
                            tickCoord: bb > 0 ? $.coordinate - bb * Z : $.coordinate
                        }), Z * ($.tickCoord - Z * ab / 2 - H) >= 0 && Z * ($.tickCoord + Z * ab / 2 - I) <= 0 && (I = $.tickCoord - Z * (ab / 2 + N), W[Y - 1] = t(t({}, $), {}, {
                            isShow: !0
                        }));
                    }
                    for (var $ = C ? Y - 1 : Y, _ = 0; _ < $; _++) {
                        var ab = W[_],
                            bb = a(f)(K) ? K(ab.value, _) : ab.value,
                            cb = (0, j.getStringSize)(bb, {
                                fontSize: P,
                                letterSpacing: Q
                            })[V] + X;
                        if (0 === _) {
                            var db = Z * (ab.coordinate - Z * cb / 2 - H);
                            W[_] = ab = t(t({}, ab), {}, {
                                tickCoord: db < 0 ? ab.coordinate - db * Z : ab.coordinate
                            });
                        } else
                            W[_] = ab = t(t({}, ab), {}, {
                                tickCoord: ab.coordinate
                            });
                        Z * (ab.tickCoord - Z * cb / 2 - H) >= 0 && Z * (ab.tickCoord + Z * cb / 2 - I) <= 0 && (H = ab.tickCoord + Z * (cb / 2 + N), W[_] = t(t({}, ab), {}, {
                            isShow: !0
                        }));
                    }
                    return W.filter(function(a) {
                        return a.isShow;
                    });
                }
            },
            {
                key: 'getTicksEnd',
                value: function(b) {
                    var H, I, J = b.ticks,
                        K = b.tickFormatter,
                        L = b.viewBox,
                        M = b.orientation,
                        N = b.minTickGap,
                        O = b.unit,
                        P = b.fontSize,
                        Q = b.letterSpacing,
                        R = L.x,
                        S = L.y,
                        T = L.width,
                        U = L.height,
                        V = 'top' === M || 'bottom' === M ? 'width' : 'height',
                        W = O && 'width' === V ? (0, j.getStringSize)(O, {
                            fontSize: P,
                            letterSpacing: Q
                        })[V] : 0,
                        X = (J || []).slice(),
                        Y = X.length,
                        Z = Y >= 2 ? (0, o.mathSign)(X[1].coordinate - X[0].coordinate) : 1;
                    1 === Z ? (H = 'width' === V ? R : S, I = 'width' === V ? R + T : S + U) : (H = 'width' === V ? R + T : S + U, I = 'width' === V ? R : S);
                    for (var $ = Y - 1; $ >= 0; $--) {
                        var _ = X[$],
                            ab = a(f)(K) ? K(_.value, Y - $ - 1) : _.value,
                            bb = (0, j.getStringSize)(ab, {
                                fontSize: P,
                                letterSpacing: Q
                            })[V] + W;
                        if ($ === Y - 1) {
                            var cb = Z * (_.coordinate + Z * bb / 2 - I);
                            X[$] = _ = t(t({}, _), {}, {
                                tickCoord: cb > 0 ? _.coordinate - cb * Z : _.coordinate
                            });
                        } else
                            X[$] = _ = t(t({}, _), {}, {
                                tickCoord: _.coordinate
                            });
                        Z * (_.tickCoord - Z * bb / 2 - H) >= 0 && Z * (_.tickCoord + Z * bb / 2 - I) <= 0 && (I = _.tickCoord - Z * (bb / 2 + N), X[$] = t(t({}, _), {}, {
                            isShow: !0
                        }));
                    }
                    return X.filter(function(a) {
                        return a.isShow;
                    });
                }
            },
            {
                key: 'renderTickItem',
                value: function(b, C, D) {
                    return a(g).isValidElement(b) ? a(g).cloneElement(b, C) : a(f)(b) ? b(C) : a(g).createElement(l.Text, r({}, C, {
                        className: 'recharts-cartesian-axis-tick-value'
                    }), D);
                }
            }
        ], (D = [{
                key: 'shouldComponentUpdate',
                value: function(a, b) {
                    var H = a.viewBox,
                        I = v(a, ['viewBox']),
                        J = this.props,
                        K = J.viewBox,
                        L = v(J, ['viewBox']);
                    return !(0, i.shallowEqual)(H, K) || !(0, i.shallowEqual)(I, L) || !(0, i.shallowEqual)(b, this.state);
                }
            },
            {
                key: 'componentDidMount',
                value: function() {
                    var M = this.layerReference;
                    if (M) {
                        var N = M.getElementsByClassName('recharts-cartesian-axis-tick-value')[0];
                        N && this.setState({
                            fontSize: window.getComputedStyle(N).fontSize,
                            letterSpacing: window.getComputedStyle(N).letterSpacing
                        });
                    }
                }
            },
            {
                key: 'getTickLineCoord',
                value: function(a) {
                    var H, I, J, K, L, M, N = this.props,
                        O = N.x,
                        P = N.y,
                        Q = N.width,
                        R = N.height,
                        S = N.orientation,
                        T = N.tickSize,
                        U = N.mirror,
                        V = N.tickMargin,
                        W = U ? -1 : 1,
                        X = a.tickSize || T,
                        Y = (0, o.isNumber)(a.tickCoord) ? a.tickCoord : a.coordinate;
                    switch (S) {
                        case 'top':
                            H = I = a.coordinate, M = (J = (K = P + +!U * R) - W * X) - W * V, L = Y;
                            break;
                        case 'left':
                            J = K = a.coordinate, L = (H = (I = O + +!U * Q) - W * X) - W * V, M = Y;
                            break;
                        case 'right':
                            J = K = a.coordinate, L = (H = (I = O + +U * Q) + W * X) + W * V, M = Y;
                            break;
                        default:
                            H = I = a.coordinate, M = (J = (K = P + +U * R) + W * X) + W * V, L = Y;
                    }
                    return {
                        line: {
                            x1: H,
                            y1: J,
                            x2: I,
                            y2: K
                        },
                        tick: {
                            x: L,
                            y: M
                        }
                    };
                }
            },
            {
                key: 'getTickTextAnchor',
                value: function() {
                    var Z, $ = this.props,
                        _ = $.orientation,
                        ab = $.mirror;
                    switch (_) {
                        case 'left':
                            Z = ab ? 'start' : 'end';
                            break;
                        case 'right':
                            Z = ab ? 'end' : 'start';
                            break;
                        default:
                            Z = 'middle';
                    }
                    return Z;
                }
            },
            {
                key: 'getTickVerticalAnchor',
                value: function() {
                    var bb = this.props,
                        cb = bb.orientation,
                        db = bb.mirror,
                        eb = 'end';
                    switch (cb) {
                        case 'left':
                        case 'right':
                            eb = 'middle';
                            break;
                        case 'top':
                            eb = db ? 'start' : 'end';
                            break;
                        default:
                            eb = db ? 'end' : 'start';
                    }
                    return eb;
                }
            },
            {
                key: 'renderAxisLine',
                value: function() {
                    var fb = this.props,
                        gb = fb.x,
                        hb = fb.y,
                        ib = fb.width,
                        jb = fb.height,
                        kb = fb.orientation,
                        lb = fb.mirror,
                        mb = fb.axisLine,
                        nb = t(t(t({}, (0, V.filterProps)(this.props)), (0, V.filterProps)(mb)), {}, {
                            fill: 'none'
                        });
                    if ('top' === kb || 'bottom' === kb) {
                        var ob = +('top' === kb && !lb || 'bottom' === kb && lb);
                        nb = t(t({}, nb), {}, {
                            x1: gb,
                            y1: hb + ob * jb,
                            x2: gb + ib,
                            y2: hb + ob * jb
                        });
                    } else {
                        var pb = +('left' === kb && !lb || 'right' === kb && lb);
                        nb = t(t({}, nb), {}, {
                            x1: gb + pb * ib,
                            y1: hb,
                            x2: gb + pb * ib,
                            y2: hb + jb
                        });
                    }
                    return bb(N).createElement('line', X({}, nb, {
                        className: bb(O)('recharts-cartesian-axis-line', bb(L)(mb, 'className'))
                    }));
                }
            },
            {
                key: 'renderTicks',
                value: function(b, C, D) {
                    var H = this,
                        I = this.props,
                        J = I.tickLine,
                        K = I.stroke,
                        L = I.tick,
                        M = I.tickFormatter,
                        N = I.unit,
                        O = G.getTicks(t(t({}, this.props), {}, {
                            ticks: b
                        }), C, D),
                        P = this.getTickTextAnchor(),
                        Q = this.getTickVerticalAnchor(),
                        R = (0, p.filterProps)(this.props),
                        S = (0, p.filterProps)(L),
                        T = t(t({}, R), {}, {
                            fill: 'none'
                        }, (0, p.filterProps)(J)),
                        U = O.map(function(b, C) {
                            var V = H.getTickLineCoord(b),
                                W = V.line,
                                X = V.tick,
                                Y = t(t(t(t({
                                    textAnchor: P,
                                    verticalAnchor: Q
                                }, R), {}, {
                                    stroke: 'none',
                                    fill: K
                                }, S), X), {}, {
                                    index: C,
                                    payload: b,
                                    visibleTicksCount: O.length,
                                    tickFormatter: M
                                });
                            return a(g).createElement(k.Layer, r({
                                className: 'recharts-cartesian-axis-tick',
                                key: 'tick-'.concat(C)
                            }, (0, p.adaptEventsOfChild)(H.props, b, C)), J && a(g).createElement('line', r({}, T, W, {
                                className: a(h)('recharts-cartesian-axis-tick-line', a(e)(J, 'className'))
                            })), L && G.renderTickItem(L, Y, ''.concat(a(f)(M) ? M(b.value, C) : b.value).concat(N || '')));
                        });
                    return a(g).createElement('g', {
                        className: 'recharts-cartesian-axis-ticks'
                    }, U);
                }
            },
            {
                key: 'render',
                value: function() {
                    var V = this,
                        W = this.props,
                        X = W.axisLine,
                        Y = W.width,
                        Z = W.height,
                        $ = W.ticksGenerator,
                        _ = W.className;
                    if (W.hide)
                        return null;
                    var ab = this.props,
                        bb = ab.ticks,
                        cb = Q(ab, ['ticks']),
                        db = eb;
                    return a(f)($) && (db = eb && eb.length > 0 ? $(this.props) : $(cb)), Y <= 0 || Z <= 0 || !db || !db.length ? null : a(g).createElement(k.Layer, {
                        className: a(h)('recharts-cartesian-axis', _),
                        ref: function(a) {
                            V.layerReference = a;
                        }
                    }, X && this.renderAxisLine(), this.renderTicks(db, this.state.fontSize, this.state.letterSpacing), L.Label.renderCallByParent(this.props));
                }
            }
        ]) && w(C.prototype, D), E && w(C, E), G;
    }(g.Component);
    B.displayName = 'CartesianAxis', B.defaultProps = {
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
}), d.register('58w6t', function(c, A) {
    b(c.exports, 'Brush', function() {
        return B;
    });
    var e = d('tax32'),
        f = d('Qi0W5'),
        g = d('uPP4W'),
        h = d('VAIs1'),
        i = d('R1cmB'),
        j = d('iSJ10'),
        k = d('c1LvE'),
        l = d('rR6Py'),
        m = d('u572v'),
        n = d('ksRVT'),
        o = d('5AxlR');

    function p(a) {
        return p = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(a) {
            return typeof a;
        } : function(a) {
            return a && 'function' == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? 'symbol' : typeof a;
        }, p(a);
    }

    function q() {
        return q = Object.assign || function(a) {
            for (var r = 1; r < arguments.length; r++) {
                var s = arguments[r];
                for (var t in s)
                    Object.prototype.hasOwnProperty.call(s, t) && (a[t] = s[t]);
            }
            return a;
        }, q.apply(this, arguments);
    }

    function r(a, b) {
        var s = Object.keys(a);
        if (Object.getOwnPropertySymbols) {
            var t = Object.getOwnPropertySymbols(a);
            b && (t = t.filter(function(b) {
                return Object.getOwnPropertyDescriptor(a, b).enumerable;
            })), s.push.apply(s, t);
        }
        return s;
    }

    function s(a) {
        for (var t = 1; t < arguments.length; t++) {
            var u = null != arguments[t] ? arguments[t] : {};
            t % 2 ? r(Object(u), !0).forEach(function(t) {
                t(a, t, u[t]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(u)) : r(Object(u)).forEach(function(t) {
                Object.defineProperty(a, t, Object.getOwnPropertyDescriptor(u, t));
            });
        }
        return a;
    }

    function t(a, b, c) {
        return b in a ? Object.defineProperty(a, b, {
            value: c,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : a[b] = c, a;
    }

    function u(a, b) {
        for (var v = 0; v < b.length; v++) {
            var w = b[v];
            w.enumerable = w.enumerable || !1, w.configurable = !0, 'value' in w && (w.writable = !0), Object.defineProperty(a, w.key, w);
        }
    }

    function v(a, b) {
        return v = Object.setPrototypeOf || function(a, b) {
            return a.__proto__ = b, a;
        }, v(a, b);
    }

    function w(a) {
        var x = function() {
            if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ('function' == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
            } catch (a) {
                return !1;
            }
        }();
        return function() {
            var y, z = z(a);
            if (x) {
                var A = z(this).constructor;
                y = Reflect.construct(z, arguments, A);
            } else
                y = z.apply(this, arguments);
            return x(this, y);
        };
    }

    function x(a, b) {
        return !b || 'object' !== p(b) && 'function' != typeof b ? y(a) : b;
    }

    function y(a) {
        if (void 0 === a)
            throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return a;
    }

    function z(a) {
        return z = Object.setPrototypeOf ? Object.getPrototypeOf : function(a) {
            return a.__proto__ || Object.getPrototypeOf(a);
        }, z(a);
    }
    var A = function(a) {
            return a.changedTouches && !!a.changedTouches.length;
        },
        B = function(b) {
            ! function(a, b) {
                if ('function' != typeof b && null !== b)
                    throw new TypeError('Super expression must either be null or a function');
                a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                        value: a,
                        writable: !0,
                        configurable: !0
                    }
                }), b && v(a, b);
            }(r, b);
            var C, D, E, F = w(r);

            function G(a) {
                var H;
                return function(a, H) {
                    if (!(a instanceof H))
                        throw new TypeError('Cannot call a class as a function');
                }(this, G), (H = F.call(this, a)).leaveTimer = void 0, H.travellerDragStartHandlers = void 0, H.handleDrag = function(a) {
                    H.leaveTimer && (clearTimeout(H.leaveTimer), H.leaveTimer = null), H.state.isTravellerMoving ? H.handleTravellerMove(a) : H.state.isSlideMoving && H.handleSlideDrag(a);
                }, H.handleTouchMove = function(a) {
                    null != a.changedTouches && a.changedTouches.length > 0 && H.handleDrag(a.changedTouches[0]);
                }, H.handleDragEnd = function() {
                    H.setState({
                        isTravellerMoving: !1,
                        isSlideMoving: !1
                    }), H.detachDragEndListener();
                }, H.handleLeaveWrapper = function() {
                    (H.state.isTravellerMoving || H.state.isSlideMoving) && (H.leaveTimer = window.setTimeout(H.handleDragEnd, H.props.leaveTimeOut));
                }, H.handleEnterSlideOrTraveller = function() {
                    H.setState({
                        isTextActive: !0
                    });
                }, H.handleLeaveSlideOrTraveller = function() {
                    H.setState({
                        isTextActive: !1
                    });
                }, H.handleSlideDragStart = function(a) {
                    var I = A(a) ? a.changedTouches[0] : a;
                    H.setState({
                        isTravellerMoving: !1,
                        isSlideMoving: !0,
                        slideMoveStartX: I.pageX
                    }), H.attachDragEndListener();
                }, H.travellerDragStartHandlers = {
                    startX: H.handleTravellerDragStart.bind(y(H), 'startX'),
                    endX: H.handleTravellerDragStart.bind(y(H), 'endX')
                }, H.state = {}, H;
            }
            return C = G, E = [{
                    key: 'renderDefaultTraveller',
                    value: function(b) {
                        var H = b.x,
                            I = b.y,
                            J = b.width,
                            K = b.height,
                            L = b.stroke,
                            M = Math.floor(I + K / 2) - 1;
                        return a(g).createElement(a(g).Fragment, null, a(g).createElement('rect', {
                            x: H,
                            y: I,
                            width: J,
                            height: K,
                            fill: L,
                            stroke: 'none'
                        }), a(g).createElement('line', {
                            x1: H + 1,
                            y1: M,
                            x2: H + J - 1,
                            y2: M,
                            fill: 'none',
                            stroke: '#fff'
                        }), a(g).createElement('line', {
                            x1: H + 1,
                            y1: M + 2,
                            x2: H + J - 1,
                            y2: M + 2,
                            fill: 'none',
                            stroke: '#fff'
                        }));
                    }
                },
                {
                    key: 'renderTraveller',
                    value: function(b, C) {
                        return a(g).isValidElement(b) ? a(g).cloneElement(b, C) : a(e)(b) ? b(C) : G.renderDefaultTraveller(C);
                    }
                },
                {
                    key: 'getDerivedStateFromProps',
                    value: function(b, C) {
                        var H = b.data,
                            I = b.width,
                            J = b.x,
                            K = b.travellerWidth,
                            L = b.updateId,
                            M = b.startIndex,
                            N = b.endIndex;
                        if (H !== C.prevData || L !== C.prevUpdateId)
                            return s({
                                prevData: H,
                                prevTravellerWidth: K,
                                prevUpdateId: L,
                                prevX: J,
                                prevWidth: I
                            }, H && H.length ? function(b) {
                                var O = b.data,
                                    P = b.startIndex,
                                    Q = b.endIndex,
                                    R = b.x,
                                    S = b.width,
                                    T = b.travellerWidth;
                                if (!O || !O.length)
                                    return {};
                                var U = O.length,
                                    V = (0, i.point)().domain(a(f)(0, U)).range([
                                        R,
                                        R + S - T
                                    ]),
                                    W = V.domain().map(function(a) {
                                        return V(a);
                                    });
                                return {
                                    isTextActive: !1,
                                    isSlideMoving: !1,
                                    isTravellerMoving: !1,
                                    startX: V(P),
                                    endX: V(Q),
                                    scale: V,
                                    scaleValues: W
                                };
                            }({
                                data: H,
                                width: I,
                                x: J,
                                travellerWidth: K,
                                startIndex: M,
                                endIndex: N
                            }) : {
                                scale: null,
                                scaleValues: null
                            });
                        if (C.scale && (I !== C.prevWidth || J !== C.prevX || K !== C.prevTravellerWidth)) {
                            C.scale.range([
                                J,
                                J + I - K
                            ]);
                            var O = C.scale.domain().map(function(a) {
                                return C.scale(a);
                            });
                            return {
                                prevData: H,
                                prevTravellerWidth: K,
                                prevUpdateId: L,
                                prevX: J,
                                prevWidth: I,
                                startX: C.scale(b.startIndex),
                                endX: C.scale(b.endIndex),
                                scaleValues: O
                            };
                        }
                        return null;
                    }
                },
                {
                    key: 'getIndexInRange',
                    value: function(a, b) {
                        for (var H = 0, I = a.length - 1; I - H > 1;) {
                            var J = Math.floor((H + I) / 2);
                            a[J] > b ? I = J : H = J;
                        }
                        return b >= a[I] ? I : H;
                    }
                }
            ], (D = [{
                    key: 'componentWillUnmount',
                    value: function() {
                        this.leaveTimer && (clearTimeout(this.leaveTimer), this.leaveTimer = null), this.detachDragEndListener();
                    }
                },
                {
                    key: 'getIndex',
                    value: function(a) {
                        var H = a.startX,
                            I = a.endX,
                            J = this.state.scaleValues,
                            K = this.props,
                            L = K.gap,
                            M = K.data.length - 1,
                            N = Math.min(H, I),
                            O = Math.max(H, I),
                            P = G.getIndexInRange(J, N),
                            Q = G.getIndexInRange(J, O);
                        return {
                            startIndex: P - P % L,
                            endIndex: Q === M ? M : Q - Q % L
                        };
                    }
                },
                {
                    key: 'getTextOfTick',
                    value: function(b) {
                        var H = this.props,
                            I = H.data,
                            J = H.tickFormatter,
                            K = H.dataKey,
                            L = (0, l.getValueByDataKey)(I[b], K, b);
                        return a(e)(J) ? J(L, b) : L;
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
                    value: function(a) {
                        var H = this.state,
                            I = H.slideMoveStartX,
                            J = H.startX,
                            K = H.endX,
                            L = this.props,
                            M = L.x,
                            N = L.width,
                            O = L.travellerWidth,
                            P = L.startIndex,
                            Q = L.endIndex,
                            R = L.onChange,
                            S = a.pageX - I;
                        S > 0 ? S = Math.min(S, M + N - O - K, M + N - O - J) : S < 0 && (S = Math.max(S, M - J, M - K));
                        var T = this.getIndex({
                            startX: J + S,
                            endX: K + S
                        });
                        T.startIndex === P && T.endIndex === Q || !R || R(T), this.setState({
                            startX: J + S,
                            endX: K + S,
                            slideMoveStartX: a.pageX
                        });
                    }
                },
                {
                    key: 'handleTravellerDragStart',
                    value: function(a, b) {
                        var H = A(b) ? b.changedTouches[0] : b;
                        this.setState({
                            isSlideMoving: !1,
                            isTravellerMoving: !0,
                            movingTravellerId: a,
                            brushMoveStartX: H.pageX
                        }), this.attachDragEndListener();
                    }
                },
                {
                    key: 'handleTravellerMove',
                    value: function(a) {
                        var H, I = this.state,
                            J = I.brushMoveStartX,
                            K = I.movingTravellerId,
                            L = I.endX,
                            M = I.startX,
                            N = this.state[K],
                            O = this.props,
                            P = O.x,
                            Q = O.width,
                            R = O.travellerWidth,
                            S = O.onChange,
                            T = O.gap,
                            U = O.data,
                            V = {
                                startX: this.state.startX,
                                endX: this.state.endX
                            },
                            W = a.pageX - J;
                        W > 0 ? W = Math.min(W, P + Q - R - N) : W < 0 && (W = Math.max(W, P - N)), V[K] = N + W;
                        var X = this.getIndex(V),
                            Y = X.startIndex,
                            Z = X.endIndex;
                        this.setState((t(H = {}, K, N + W), t(H, 'brushMoveStartX', a.pageX), H), function() {
                            var $;
                            S && ($ = U.length - 1, ('startX' === K && (L > M ? Y % T == 0 : Z % T == 0) || L < M && Z === $ || 'endX' === K && (L > M ? Z % T == 0 : Y % T == 0) || L > M && Z === $) && S(X));
                        });
                    }
                },
                {
                    key: 'renderBackground',
                    value: function() {
                        var $ = this.props,
                            _ = $.x,
                            ab = $.y,
                            bb = $.width,
                            cb = $.height,
                            db = $.fill,
                            eb = $.stroke;
                        return a(N).createElement('rect', {
                            stroke: eb,
                            fill: db,
                            x: _,
                            y: ab,
                            width: bb,
                            height: cb
                        });
                    }
                },
                {
                    key: 'renderPanorama',
                    value: function() {
                        var fb = this.props,
                            gb = fb.x,
                            hb = fb.y,
                            ib = fb.width,
                            jb = fb.height,
                            kb = fb.data,
                            lb = fb.children,
                            mb = fb.padding,
                            nb = N.Children.only(lb);
                        return nb ? a(N).cloneElement(nb, {
                            x: gb,
                            y: hb,
                            width: ib,
                            height: jb,
                            margin: mb,
                            compact: !0,
                            data: kb
                        }) : null;
                    }
                },
                {
                    key: 'renderTravellerLayer',
                    value: function(b, C) {
                        var H = this.props,
                            I = H.y,
                            J = H.travellerWidth,
                            K = H.height,
                            L = H.traveller,
                            M = Math.max(b, this.props.x),
                            N = s(s({}, (0, o.filterProps)(this.props)), {}, {
                                x: M,
                                y: I,
                                width: J,
                                height: K
                            });
                        return a(g).createElement(j.Layer, {
                            className: 'recharts-brush-traveller',
                            onMouseEnter: this.handleEnterSlideOrTraveller,
                            onMouseLeave: this.handleLeaveSlideOrTraveller,
                            onMouseDown: this.travellerDragStartHandlers[C],
                            onTouchStart: this.travellerDragStartHandlers[C],
                            style: {
                                cursor: 'col-resize'
                            }
                        }, G.renderTraveller(L, N));
                    }
                },
                {
                    key: 'renderSlide',
                    value: function(b, C) {
                        var H = this.props,
                            I = H.y,
                            J = H.height,
                            K = H.stroke,
                            L = H.travellerWidth,
                            M = Math.min(b, C) + L,
                            N = Math.max(Math.abs(C - b) - L, 0);
                        return a(g).createElement('rect', {
                            className: 'recharts-brush-slide',
                            onMouseEnter: this.handleEnterSlideOrTraveller,
                            onMouseLeave: this.handleLeaveSlideOrTraveller,
                            onMouseDown: this.handleSlideDragStart,
                            onTouchStart: this.handleSlideDragStart,
                            style: {
                                cursor: 'move'
                            },
                            stroke: 'none',
                            fill: K,
                            fillOpacity: 0.2,
                            x: M,
                            y: I,
                            width: N,
                            height: J
                        });
                    }
                },
                {
                    key: 'renderText',
                    value: function() {
                        var O = this.props,
                            P = O.startIndex,
                            Q = O.endIndex,
                            R = O.y,
                            S = O.height,
                            T = O.travellerWidth,
                            U = O.stroke,
                            V = this.state,
                            W = V.startX,
                            X = V.endX,
                            Y = {
                                pointerEvents: 'none',
                                fill: U
                            };
                        return a(g).createElement(N.Layer, {
                            className: 'recharts-brush-texts'
                        }, a(g).createElement(k.Text, q({
                            textAnchor: 'end',
                            verticalAnchor: 'middle',
                            x: Math.min(W, X) - 5,
                            y: R + S / 2
                        }, Y), this.getTextOfTick(P)), a(g).createElement(k.Text, q({
                            textAnchor: 'start',
                            verticalAnchor: 'middle',
                            x: Math.max(W, X) + T + 5,
                            y: R + S / 2
                        }, Y), this.getTextOfTick(Q)));
                    }
                },
                {
                    key: 'render',
                    value: function() {
                        var Z = this.props,
                            $ = Z.data,
                            _ = Z.className,
                            ab = Z.children,
                            bb = Z.x,
                            cb = Z.y,
                            db = Z.width,
                            eb = Z.height,
                            fb = Z.alwaysShowText,
                            gb = this.state,
                            hb = gb.startX,
                            ib = gb.endX,
                            jb = gb.isTextActive,
                            kb = gb.isSlideMoving,
                            lb = gb.isTravellerMoving;
                        if (!$ || !$.length || !(0, X.isNumber)(bb) || !(0, X.isNumber)(cb) || !(0, X.isNumber)(db) || !(0, X.isNumber)(eb) || db <= 0 || eb <= 0)
                            return null;
                        var mb = a(U)('recharts-brush', _),
                            nb = 1 === a(g).Children.count(ab),
                            ob = (0, Y.generatePrefixStyle)('userSelect', 'none');
                        return a(g).createElement(N.Layer, {
                            className: mb,
                            onMouseMove: this.handleDrag,
                            onMouseLeave: this.handleLeaveWrapper,
                            onTouchMove: this.handleTouchMove,
                            style: ob
                        }, this.renderBackground(), nb && this.renderPanorama(), this.renderSlide(hb, ib), this.renderTravellerLayer(hb, 'startX'), this.renderTravellerLayer(ib, 'endX'), (jb || kb || lb || fb) && this.renderText());
                    }
                }
            ]) && u(C.prototype, D), E && u(C, E), G;
        }(g.PureComponent);
    B.displayName = 'Brush', B.defaultProps = {
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
}), d.register('ksRVT', function(a, c) {
    function e(a, b) {
        var f = Object.keys(a);
        if (Object.getOwnPropertySymbols) {
            var g = Object.getOwnPropertySymbols(a);
            b && (g = g.filter(function(b) {
                return Object.getOwnPropertyDescriptor(a, b).enumerable;
            })), f.push.apply(f, g);
        }
        return f;
    }

    function f(a) {
        for (var g = 1; g < arguments.length; g++) {
            var h = null != arguments[g] ? arguments[g] : {};
            g % 2 ? e(Object(h), !0).forEach(function(g) {
                g(a, g, h[g]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(h)) : e(Object(h)).forEach(function(g) {
                Object.defineProperty(a, g, Object.getOwnPropertyDescriptor(h, g));
            });
        }
        return a;
    }

    function g(a, b, c) {
        return b in a ? Object.defineProperty(a, b, {
            value: c,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : a[b] = c, a;
    }
    b(a.exports, 'generatePrefixStyle', function() {
        return i;
    });
    var h = [
            'Webkit',
            'Moz',
            'O',
            'ms'
        ],
        i = function(a, b) {
            if (!a)
                return null;
            var j = a.replace(/(\w)/, function(a) {
                    return a.toUpperCase();
                }),
                k = h.reduce(function(a, k) {
                    return f(f({}, a), {}, g({}, k + j, b));
                }, {});
            return k[a] = b, k;
        };
}), d.register('fSZjD', function(a, c) {
    b(a.exports, 'detectReferenceElementsDomain', function() {
        return k;
    });
    var e = d('I4Ukn'),
        f = d('NCe37'),
        g = d('hCU/2'),
        h = d('tt6vw'),
        i = d('NvaHc'),
        j = d('u572v'),
        k = function(a, b, c, d, k) {
            var l = (0, i.findAllByType)(a, f.ReferenceLine.displayName),
                m = (0, i.findAllByType)(a, e.ReferenceDot.displayName),
                n = l.concat(m),
                o = (0, i.findAllByType)(a, g.ReferenceArea.displayName),
                p = ''.concat(d, 'Id'),
                q = d[0],
                r = s;
            if (n.length && (r = n.reduce(function(a, s) {
                    if (s.props[p] === c && (0, h.ifOverflowMatches)(s.props, 'extendDomain') && (0, j.isNumber)(s.props[q])) {
                        var t = s.props[q];
                        return [
                            Math.min(a[0], t),
                            Math.max(a[1], t)
                        ];
                    }
                    return a;
                }, r)), o.length) {
                var t = ''.concat(q, '1'),
                    u = ''.concat(q, '2');
                r = o.reduce(function(a, s) {
                    if (s.props[p] === c && (0, h.ifOverflowMatches)(s.props, 'extendDomain') && (0, j.isNumber)(s.props[t]) && (0, j.isNumber)(s.props[u])) {
                        var v = s.props[t],
                            w = s.props[u];
                        return [
                            Math.min(a[0], v, w),
                            Math.max(a[1], v, w)
                        ];
                    }
                    return a;
                }, r);
            }
            return k && k.length && (r = k.reduce(function(a, s) {
                return (0, j.isNumber)(s) ? [
                    Math.min(a[0], s),
                    Math.max(a[1], s)
                ] : a;
            }, r)), r;
        };
}), d.register('I4Ukn', function(c, w) {
    b(c.exports, 'ReferenceDot', function() {
        return t;
    });
    var e = d('tax32'),
        f = d('uPP4W'),
        g = d('VAIs1'),
        h = d('iSJ10'),
        i = d('/EYwe'),
        j = d('Mq9Yw'),
        k = d('u572v'),
        l = d('tt6vw'),
        m = d('rkT9r'),
        n = d('J6+Ay'),
        o = d('5AxlR');

    function p() {
        return p = Object.assign || function(a) {
            for (var q = 1; q < arguments.length; q++) {
                var r = arguments[q];
                for (var s in r)
                    Object.prototype.hasOwnProperty.call(r, s) && (a[s] = r[s]);
            }
            return a;
        }, p.apply(this, arguments);
    }

    function q(a, b) {
        var r = Object.keys(a);
        if (Object.getOwnPropertySymbols) {
            var s = Object.getOwnPropertySymbols(a);
            b && (s = s.filter(function(b) {
                return Object.getOwnPropertyDescriptor(a, b).enumerable;
            })), r.push.apply(r, s);
        }
        return r;
    }

    function r(a) {
        for (var s = 1; s < arguments.length; s++) {
            var t = null != arguments[s] ? arguments[s] : {};
            s % 2 ? q(Object(t), !0).forEach(function(s) {
                s(a, s, t[s]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(t)) : q(Object(t)).forEach(function(s) {
                Object.defineProperty(a, s, Object.getOwnPropertyDescriptor(t, s));
            });
        }
        return a;
    }

    function s(a, b, c) {
        return b in a ? Object.defineProperty(a, b, {
            value: c,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : a[b] = c, a;
    }

    function t(b) {
        var u = b.x,
            v = b.y,
            w = b.r,
            x = b.alwaysShow,
            y = b.clipPathId,
            z = (0, k.isNumOrStr)(u),
            A = (0, k.isNumOrStr)(v);
        if ((0, n.warn)(void 0 === x, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !z || !A)
            return null;
        var B = function(a) {
            var C = a.x,
                D = a.y,
                E = a.xAxis,
                F = a.yAxis,
                G = (0, m.createLabeledScales)({
                    x: E.scale,
                    y: F.scale
                }),
                H = G.apply({
                    x: C,
                    y: D
                }, {
                    bandAware: !0
                });
            return (0, l.ifOverflowMatches)(a, 'discard') && !G.isInRange(H) ? null : H;
        }(b);
        if (!B)
            return null;
        var C = B.x,
            D = B.y,
            E = b.shape,
            F = b.className,
            G = r(r({
                clipPath: (0, l.ifOverflowMatches)(b, 'hidden') ? 'url(#'.concat(y, ')') : void 0
            }, (0, o.filterProps)(b, !0)), {}, {
                cx: C,
                cy: D
            });
        return a(f).createElement(h.Layer, {
            className: a(g)('recharts-reference-dot', F)
        }, t.renderDot(E, G), j.Label.renderCallByParent(b, {
            x: C - w,
            y: D - w,
            width: 2 * w,
            height: 2 * w
        }));
    }
    t.displayName = 'ReferenceDot', t.defaultProps = {
        isFront: !1,
        ifOverflow: 'discard',
        xAxisId: 0,
        yAxisId: 0,
        r: 10,
        fill: '#fff',
        stroke: '#ccc',
        fillOpacity: 1,
        strokeWidth: 1
    }, t.renderDot = function(b, c) {
        return a(f).isValidElement(b) ? a(f).cloneElement(b, c) : a(e)(b) ? b(c) : a(f).createElement(i.Dot, p({}, c, {
            cx: c.cx,
            cy: c.cy,
            className: 'recharts-reference-dot-dot'
        }));
    };
}), d.register('tt6vw', function(a, c) {
    b(a.exports, 'ifOverflowMatches', function() {
        return d;
    });
    var e = function(a, b) {
        var f = a.alwaysShow,
            g = a.ifOverflow;
        return f && (g = 'extendDomain'), g === b;
    };
}), d.register('rkT9r', function(c, r) {
    b(c.exports, 'formatAxisMap', function() {
        return n;
    }), b(c.exports, 'rectWithPoints', function() {
        return t;
    }), b(c.exports, 'rectWithCoords', function() {
        return u;
    }), b(c.exports, 'createLabeledScales', function() {
        return z;
    });
    var e = d('5nDu8'),
        f = d('w6T1Y'),
        g = d('rR6Py'),
        h = d('NvaHc'),
        i = d('u572v');

    function j(a, b) {
        for (var k = 0; k < b.length; k++) {
            var l = b[k];
            l.enumerable = l.enumerable || !1, l.configurable = !0, 'value' in l && (l.writable = !0), Object.defineProperty(a, l.key, l);
        }
    }

    function k(a, b) {
        var l = Object.keys(a);
        if (Object.getOwnPropertySymbols) {
            var m = Object.getOwnPropertySymbols(a);
            b && (m = m.filter(function(b) {
                return Object.getOwnPropertyDescriptor(a, b).enumerable;
            })), l.push.apply(l, m);
        }
        return l;
    }

    function l(a) {
        for (var m = 1; m < arguments.length; m++) {
            var n = null != arguments[m] ? arguments[m] : {};
            m % 2 ? k(Object(n), !0).forEach(function(m) {
                m(a, m, n[m]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(n)) : k(Object(n)).forEach(function(m) {
                Object.defineProperty(a, m, Object.getOwnPropertyDescriptor(n, m));
            });
        }
        return a;
    }

    function m(a, b, c) {
        return b in a ? Object.defineProperty(a, b, {
            value: c,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : a[b] = c, a;
    }
    var n = function(a, b, c, d, r) {
            var o = a.width,
                p = a.height,
                q = a.layout,
                r = a.children,
                s = Object.keys(b),
                t = {
                    left: c.left,
                    leftMirror: c.left,
                    right: o - c.right,
                    rightMirror: o - c.right,
                    top: c.top,
                    topMirror: c.top,
                    bottom: p - c.bottom,
                    bottomMirror: p - c.bottom
                },
                u = !!(0, h.findChildByType)(r, 'Bar');
            return s.reduce(function(o, p) {
                var v, w, x, y, z, A = b[p],
                    B = A.orientation,
                    C = A.domain,
                    D = A.padding,
                    E = void 0 === D ? {} : D,
                    F = A.mirror,
                    G = A.reversed,
                    H = ''.concat(B).concat(F ? 'Mirror' : '');
                if ('number' === A.type && ('gap' === A.padding || 'no-gap' === A.padding)) {
                    var I = C[1] - C[0],
                        J = 1 / 0,
                        K = A.categoricalDomain.sort();
                    K.forEach(function(a, b) {
                        b > 0 && (J = Math.min((a || 0) - (K[b - 1] || 0), J));
                    });
                    var L = J / I,
                        M = 'vertical' === A.layout ? c.height : c.width;
                    if ('gap' === A.padding && (v = L * M / 2), 'no-gap' === A.padding) {
                        var N = (0, i.getPercentValue)(a.barCategoryGap, L * M),
                            O = L * M / 2;
                        v = O - N - (O - N) / M * N;
                    }
                }
                w = 'xAxis' === d ? [
                    c.left + (E.left || 0) + (v || 0),
                    c.left + c.width - (E.right || 0) - (v || 0)
                ] : 'yAxis' === d ? 'horizontal' === q ? [
                    c.top + c.height - (E.bottom || 0),
                    c.top + (E.top || 0)
                ] : [
                    c.top + (E.top || 0) + (v || 0),
                    c.top + c.height - (E.bottom || 0) - (v || 0)
                ] : A.range, G && (w = [
                    w[1],
                    w[0]
                ]);
                var I = (0, g.parseScale)(A, r, u),
                    J = I.scale,
                    K = I.realScaleType;
                J.domain(C).range(w), (0, g.checkDomainOfScale)(J);
                var L = (0, g.getTicksOfScale)(J, l(l({}, A), {}, {
                    realScaleType: K
                }));
                'xAxis' === d ? (z = 'top' === B && !F || 'bottom' === B && F, x = c.left, y = t[H] - z * A.height) : 'yAxis' === d && (z = 'left' === B && !F || 'right' === B && F, x = t[H] - z * A.width, y = c.top);
                var M = l(l(l({}, A), L), {}, {
                    realScaleType: K,
                    x: x,
                    y: y,
                    scale: J,
                    width: 'xAxis' === d ? c.width : A.width,
                    height: 'yAxis' === d ? c.height : A.height
                });
                return M.bandSize = (0, g.getBandSizeOfAxis)(M, L), A.hide || 'xAxis' !== d ? A.hide || (t[H] += (z ? -1 : 1) * M.width) : t[H] += (z ? -1 : 1) * M.height, l(l({}, o), {}, m({}, p, M));
            }, {});
        },
        o = function(a, b) {
            var p = a.x,
                q = a.y,
                r = b.x,
                s = b.y;
            return {
                x: Math.min(p, r),
                y: Math.min(q, s),
                width: Math.abs(r - p),
                height: Math.abs(s - q)
            };
        },
        p = function(a) {
            var q = a.x1,
                r = a.y1,
                s = a.x2,
                t = a.y2;
            return o({
                x: q,
                y: r
            }, {
                x: s,
                y: t
            });
        },
        q = function() {
            function r(b) {
                ! function(r, b) {
                    if (!(r instanceof b))
                        throw new TypeError('Cannot call a class as a function');
                }(this, r), this.scale = void 0, this.scale = b;
            }
            var s, t, u;
            return s = r, t = [{
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
                    value: function(r) {
                        var v = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            w = v.bandAware,
                            x = v.position;
                        if (void 0 !== r) {
                            if (x)
                                switch (x) {
                                    case 'start':
                                    default:
                                        return this.scale(r);
                                    case 'middle':
                                        var y = this.bandwidth ? this.bandwidth() / 2 : 0;
                                        return this.scale(r) + y;
                                    case 'end':
                                        var z = this.bandwidth ? this.bandwidth() : 0;
                                        return this.scale(r) + z;
                                }
                            if (w) {
                                var y = this.bandwidth ? this.bandwidth() / 2 : 0;
                                return this.scale(r) + y;
                            }
                            return this.scale(r);
                        }
                    }
                },
                {
                    key: 'isInRange',
                    value: function(r) {
                        var v = this.range(),
                            w = v[0],
                            x = v[v.length - 1];
                        return w <= x ? r >= w && r <= x : r >= x && r <= w;
                    }
                }
            ], u = [{
                key: 'create',
                value: function(s) {
                    return new r(s);
                }
            }], t && j(s.prototype, t), u && j(s, u), r;
        }();
    q.EPS = 0.0001;
    var r = function(b) {
        var s = Object.keys(b).reduce(function(a, s) {
            return l(l({}, a), {}, m({}, s, q.create(b[s])));
        }, {});
        return l(l({}, s), {}, {
            apply: function(b) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    u = t.bandAware,
                    v = t.position;
                return a(f)(b, function(a, b) {
                    return s[b].apply(a, {
                        bandAware: u,
                        position: v
                    });
                });
            },
            isInRange: function(b) {
                return a(e)(b, function(a, b) {
                    return s[b].isInRange(a);
                });
            }
        });
    };
}), d.register('w6T1Y', function(a, b) {
    var e = d('1421j'),
        f = d('6kX6D'),
        g = d('s7eqU');
    a.exports = function(a, b) {
        var h = {};
        return b = g(b, 3), f(a, function(a, f, g) {
            e(h, f, b(a, f, g));
        }), h;
    };
}), d.register('1421j', function(a, b) {
    var e = d('suJ8/');
    a.exports = function(a, b, d) {
        '__proto__' == b && e ? e(a, b, {
            configurable: !0,
            enumerable: !0,
            value: d,
            writable: !0
        }) : a[b] = d;
    };
}), d.register('J6+Ay', function(a, c) {
    b(a.exports, 'warn', function() {
        return d;
    });
    var e = function(a, b) {
        for (var f = arguments.length, g = new Array(f > 2 ? f - 2 : 0), h = 2; h < f; h++)
            g[h - 2] = arguments[h];
    };
}), d.register('NCe37', function(c, v) {
    b(c.exports, 'ReferenceLine', function() {
        return v;
    });
    var e = d('Rx7pw'),
        f = d('tax32'),
        g = d('uPP4W'),
        h = d('VAIs1'),
        i = d('iSJ10'),
        j = d('Mq9Yw'),
        k = d('tt6vw'),
        l = d('u572v'),
        m = d('rkT9r'),
        n = d('J6+Ay'),
        o = d('5AxlR');

    function p(a, b) {
        var q = Object.keys(a);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(a);
            b && (r = r.filter(function(b) {
                return Object.getOwnPropertyDescriptor(a, b).enumerable;
            })), q.push.apply(q, r);
        }
        return q;
    }

    function q(a) {
        for (var r = 1; r < arguments.length; r++) {
            var s = null != arguments[r] ? arguments[r] : {};
            r % 2 ? p(Object(s), !0).forEach(function(r) {
                r(a, r, s[r]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(s)) : p(Object(s)).forEach(function(r) {
                Object.defineProperty(a, r, Object.getOwnPropertyDescriptor(s, r));
            });
        }
        return a;
    }

    function r(a, b, c) {
        return b in a ? Object.defineProperty(a, b, {
            value: c,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : a[b] = c, a;
    }

    function s(a, b) {
        return function(a) {
            if (Array.isArray(a))
                return a;
        }(a) || function(a, b) {
            if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(a)))
                return;
            var t = [],
                u = !0,
                v = !1,
                w = void 0;
            try {
                for (var x, y = a[Symbol.iterator](); !(u = (x = y.next()).done) && (t.push(x.value), !b || t.length !== b); u = !0);
            } catch (a) {
                v = !0, w = a;
            } finally {
                try {
                    u || null == g.return || g.return();
                } finally {
                    if (v)
                        throw w;
                }
            }
            return t;
        }(a, b) || function(a, b) {
            if (!a)
                return;
            if ('string' == typeof a)
                return t(a, b);
            var t = Object.prototype.toString.call(a).slice(8, -1);
            'Object' === t && a.constructor && (t = a.constructor.name);
            if ('Map' === t || 'Set' === t)
                return Array.from(a);
            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                return t(a, b);
        }(a, b) || function() {
            throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }

    function t(a, b) {
        (null == b || b > a.length) && (b = a.length);
        for (var u = 0, v = new Array(b); u < b; u++)
            v[u] = a[u];
        return v;
    }

    function u() {
        return u = Object.assign || function(a) {
            for (var v = 1; v < arguments.length; v++) {
                var w = arguments[v];
                for (var x in w)
                    Object.prototype.hasOwnProperty.call(w, x) && (a[x] = w[x]);
            }
            return a;
        }, u.apply(this, arguments);
    }

    function v(b) {
        var w = b.x,
            x = b.y,
            y = b.segment,
            z = b.xAxis,
            A = b.yAxis,
            B = b.shape,
            C = b.className,
            D = b.alwaysShow,
            E = b.clipPathId;
        (0, n.warn)(void 0 === D, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
        var F = function(b, w, x, y, f) {
            var G = f.viewBox,
                H = G.x,
                I = G.y,
                J = G.width,
                K = G.height,
                L = f.position;
            if (x) {
                var M = f.y,
                    N = f.yAxis.orientation,
                    O = b.y.apply(M, {
                        position: L
                    });
                if ((0, k.ifOverflowMatches)(f, 'discard') && !b.y.isInRange(O))
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
            if (w) {
                var M = f.x,
                    N = f.xAxis.orientation,
                    O = b.x.apply(M, {
                        position: L
                    });
                if ((0, k.ifOverflowMatches)(f, 'discard') && !b.x.isInRange(O))
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
            if (y) {
                var M = f.segment.map(function(a) {
                    return b.apply(a, {
                        position: L
                    });
                });
                return (0, k.ifOverflowMatches)(f, 'discard') && a(e)(M, function(a) {
                    return !b.isInRange(a);
                }) ? null : M;
            }
            return null;
        }((0, m.createLabeledScales)({
            x: z.scale,
            y: A.scale
        }), (0, l.isNumOrStr)(w), (0, l.isNumOrStr)(x), y && 2 === y.length, b);
        if (!F)
            return null;
        var G = s(F, 2),
            H = G[0],
            I = H.x,
            J = H.y,
            K = G[1],
            L = K.x,
            M = K.y,
            N = q(q({
                clipPath: (0, k.ifOverflowMatches)(b, 'hidden') ? 'url(#'.concat(E, ')') : void 0
            }, (0, o.filterProps)(b, !0)), {}, {
                x1: I,
                y1: J,
                x2: L,
                y2: M
            });
        return a(g).createElement(i.Layer, {
            className: a(h)('recharts-reference-line', C)
        }, function(b, w) {
            return a(g).isValidElement(b) ? a(g).cloneElement(b, w) : a(f)(b) ? b(w) : a(g).createElement('line', u({}, w, {
                className: 'recharts-reference-line-line'
            }));
        }(B, N), j.Label.renderCallByParent(b, (0, m.rectWithCoords)({
            x1: I,
            y1: J,
            x2: L,
            y2: M
        })));
    }
    v.displayName = 'ReferenceLine', v.defaultProps = {
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
}), d.register('Rx7pw', function(a, b) {
    var e = d('sYk3r0'),
        f = d('s7eqU'),
        g = d('Nuty0'),
        h = d('JslBt0'),
        i = d('0COFM');
    a.exports = function(a, b, d) {
        var j = h(a) ? e : g;
        return d && i(a, b, d) && (b = void 0), j(a, f(b, 3));
    };
}), d.register('Nuty0', function(a, b) {
    var e = d('kucTu');
    a.exports = function(a, b) {
        var f;
        return e(a, function(a, e, w) {
            return !(f = b(a, e, w));
        }), !!f;
    };
}), d.register('hCU/2', function(c, w) {
    b(c.exports, 'ReferenceArea', function() {
        return t;
    });
    var e = d('tax32'),
        f = d('uPP4W'),
        g = d('VAIs1'),
        h = d('iSJ10'),
        i = d('Mq9Yw'),
        j = d('rkT9r'),
        k = d('tt6vw'),
        l = d('u572v'),
        m = d('J6+Ay'),
        n = d('xItwy'),
        o = d('5AxlR');

    function p() {
        return p = Object.assign || function(a) {
            for (var q = 1; q < arguments.length; q++) {
                var r = arguments[q];
                for (var s in r)
                    Object.prototype.hasOwnProperty.call(r, s) && (a[s] = r[s]);
            }
            return a;
        }, p.apply(this, arguments);
    }

    function q(a, b) {
        var r = Object.keys(a);
        if (Object.getOwnPropertySymbols) {
            var s = Object.getOwnPropertySymbols(a);
            b && (s = s.filter(function(b) {
                return Object.getOwnPropertyDescriptor(a, b).enumerable;
            })), r.push.apply(r, s);
        }
        return r;
    }

    function r(a) {
        for (var s = 1; s < arguments.length; s++) {
            var t = null != arguments[s] ? arguments[s] : {};
            s % 2 ? q(Object(t), !0).forEach(function(s) {
                s(a, s, t[s]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(t)) : q(Object(t)).forEach(function(s) {
                Object.defineProperty(a, s, Object.getOwnPropertyDescriptor(t, s));
            });
        }
        return a;
    }

    function s(a, b, c) {
        return b in a ? Object.defineProperty(a, b, {
            value: c,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : a[b] = c, a;
    }

    function t(b) {
        var u = b.x1,
            v = b.x2,
            w = b.y1,
            x = b.y2,
            y = b.className,
            z = b.alwaysShow,
            A = b.clipPathId;
        (0, m.warn)(void 0 === z, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
        var B = (0, l.isNumOrStr)(u),
            C = (0, l.isNumOrStr)(v),
            D = (0, l.isNumOrStr)(w),
            E = (0, l.isNumOrStr)(x),
            F = b.shape;
        if (!(B || C || D || E || F))
            return null;
        var G = function(a, b, u, v, w) {
            var H = w.x1,
                I = w.x2,
                J = w.y1,
                K = w.y2,
                L = w.xAxis,
                M = w.yAxis;
            if (!L || !M)
                return null;
            var N = (0, j.createLabeledScales)({
                    x: L.scale,
                    y: M.scale
                }),
                O = {
                    x: a ? N.x.apply(H, {
                        position: 'start'
                    }) : N.x.rangeMin,
                    y: u ? N.y.apply(J, {
                        position: 'start'
                    }) : N.y.rangeMin
                },
                P = {
                    x: b ? N.x.apply(I, {
                        position: 'end'
                    }) : N.x.rangeMax,
                    y: v ? N.y.apply(K, {
                        position: 'end'
                    }) : N.y.rangeMax
                };
            return !(0, k.ifOverflowMatches)(w, 'discard') || N.isInRange(O) && N.isInRange(P) ? (0, j.rectWithPoints)(O, P) : null;
        }(B, C, D, E, b);
        if (!G && !F)
            return null;
        var H = (0, k.ifOverflowMatches)(b, 'hidden') ? 'url(#'.concat(A, ')') : void 0;
        return a(f).createElement(h.Layer, {
            className: a(g)('recharts-reference-area', y)
        }, t.renderRect(F, r(r({
            clipPath: H
        }, (0, o.filterProps)(b, !0)), G)), i.Label.renderCallByParent(b, G));
    }
    t.displayName = 'ReferenceArea', t.defaultProps = {
        isFront: !1,
        ifOverflow: 'discard',
        xAxisId: 0,
        yAxisId: 0,
        r: 10,
        fill: '#ccc',
        fillOpacity: 0.5,
        stroke: 'none',
        strokeWidth: 1
    }, t.renderRect = function(b, c) {
        return a(f).isValidElement(b) ? a(f).cloneElement(b, c) : a(e)(b) ? b(c) : a(f).createElement(n.Rectangle, p({}, c, {
            className: 'recharts-reference-area-rect'
        }));
    };
}), d.register('zovEL', function(c, g) {
    b(c.exports, 'eventCenter', function() {
        return e;
    }), b(c.exports, 'SYNC_EVENT', function() {
        return f;
    });
    var e = new(a(d('y+8vZ')))();
    e.setMaxListeners && e.setMaxListeners(10);
    var f = 'recharts.syncMouseEvents';
}), d.register('y+8vZ', function(a, b) {
    var e = Object.prototype.hasOwnProperty,
        f = '~';

    function g() {}

    function h(a, b, e) {
        this.fn = a, this.context = b, this.once = e || !1;
    }

    function i(a, b, e, g, i) {
        if ('function' != typeof e)
            throw new TypeError('The listener must be a function');
        var j = new h(e, g || a, i),
            k = f ? f + b : b;
        return a._events[k] ? a._events[k].fn ? a._events[k] = [
            a._events[k],
            j
        ] : a._events[k].push(j) : (a._events[k] = j, a._eventsCount++), a;
    }

    function j(a, b) {
        0 == --a._eventsCount ? a._events = new g() : delete a._events[b];
    }

    function k() {
        this._events = new g(), this._eventsCount = 0;
    }
    Object.create && (g.prototype = Object.create(null), new g().__proto__ || (f = !1)), k.prototype.eventNames = function() {
        var l, m, n = [];
        if (0 === this._eventsCount)
            return n;
        for (m in l = this._events)
            e.call(l, m) && n.push(f ? m.slice(1) : m);
        return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(l)) : n;
    }, k.prototype.listeners = function(a) {
        var l = f ? f + a : a,
            m = this._events[l];
        if (!m)
            return [];
        if (m.fn)
            return [m.fn];
        for (var n = 0, o = m.length, p = new Array(o); n < o; n++)
            p[n] = m[n].fn;
        return p;
    }, k.prototype.listenerCount = function(a) {
        var l = f ? f + a : a,
            m = this._events[l];
        return m ? m.fn ? 1 : m.length : 0;
    }, k.prototype.emit = function(a, b, e, g, h, i) {
        var l = f ? f + a : a;
        if (!this._events[l])
            return !1;
        var m, n, o = this._events[l],
            p = arguments.length;
        if (o.fn) {
            switch (o.once && this.removeListener(a, o.fn, void 0, !0), p) {
                case 1:
                    return o.fn.call(o.context), !0;
                case 2:
                    return o.fn.call(o.context, b), !0;
                case 3:
                    return o.fn.call(o.context, b, e), !0;
                case 4:
                    return o.fn.call(o.context, b, e, g), !0;
                case 5:
                    return o.fn.call(o.context, b, e, g, h), !0;
                case 6:
                    return o.fn.call(o.context, b, e, g, h, i), !0;
            }
            for (n = 1, m = new Array(p - 1); n < p; n++)
                m[n - 1] = arguments[n];
            o.fn.apply(o.context, m);
        } else {
            var q, r = o.length;
            for (n = 0; n < r; n++)
                switch (o[n].once && this.removeListener(a, o[n].fn, void 0, !0), p) {
                    case 1:
                        o[n].fn.call(o[n].context);
                        break;
                    case 2:
                        o[n].fn.call(o[n].context, b);
                        break;
                    case 3:
                        o[n].fn.call(o[n].context, b, e);
                        break;
                    case 4:
                        o[n].fn.call(o[n].context, b, e, g);
                        break;
                    default:
                        if (!m)
                            for (q = 1, m = new Array(p - 1); q < p; q++)
                                m[q - 1] = arguments[q];
                        o[n].fn.apply(o[n].context, m);
                }
        }
        return !0;
    }, k.prototype.on = function(a, b, e) {
        return i(this, a, b, e, !1);
    }, k.prototype.once = function(a, b, e) {
        return i(this, a, b, e, !0);
    }, k.prototype.removeListener = function(a, b, e, g) {
        var l = f ? f + a : a;
        if (!this._events[l])
            return this;
        if (!b)
            return j(this, l), this;
        var m = this._events[l];
        if (m.fn)
            m.fn !== b || g && !m.once || e && m.context !== e || j(this, l);
        else {
            for (var n = 0, o = [], p = m.length; n < p; n++)
                (m[n].fn !== b || g && !m[n].once || e && m[n].context !== e) && o.push(m[n]);
            o.length ? this._events[l] = 1 === o.length ? o[0] : o : j(this, l);
        }
        return this;
    }, k.prototype.removeAllListeners = function(a) {
        var l;
        return a ? (l = f ? f + a : a, this._events[l] && j(this, l)) : (this._events = new g(), this._eventsCount = 0), this;
    }, k.prototype.off = k.prototype.removeListener, k.prototype.addListener = k.prototype.on, k.prefixed = f, k.EventEmitter = k, a.exports = k;
}), d.register('L9b4X', function(a, c) {
    b(a.exports, 'XAxis', function() {
        return d;
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
}), d.register('SwIBY', function(a, c) {
    b(a.exports, 'YAxis', function() {
        return d;
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
}), d.register('EXiJn', function(c, n) {
    b(c.exports, 'CartesianGrid', function() {
        return u;
    });
    var e = d('tax32'),
        f = d('uPP4W'),
        g = d('u572v'),
        h = d('5AxlR');

    function i(a) {
        return i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(a) {
            return typeof a;
        } : function(a) {
            return a && 'function' == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? 'symbol' : typeof a;
        }, i(a);
    }

    function j() {
        return j = Object.assign || function(a) {
            for (var k = 1; k < arguments.length; k++) {
                var l = arguments[k];
                for (var m in l)
                    Object.prototype.hasOwnProperty.call(l, m) && (a[m] = l[m]);
            }
            return a;
        }, j.apply(this, arguments);
    }

    function k(a, b) {
        if (null == a)
            return {};
        var l, m, n = function(a, b) {
            if (null == a)
                return {};
            var o, p, q = {},
                r = Object.keys(a);
            for (p = 0; p < r.length; p++)
                o = r[p], b.indexOf(o) >= 0 || (q[o] = a[o]);
            return q;
        }(a, b);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(a);
            for (m = 0; m < o.length; m++)
                l = o[m], b.indexOf(l) >= 0 || Object.prototype.propertyIsEnumerable.call(a, l) && (n[l] = a[l]);
        }
        return n;
    }

    function l(a, b) {
        var m = Object.keys(a);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(a);
            b && (n = n.filter(function(b) {
                return Object.getOwnPropertyDescriptor(a, b).enumerable;
            })), m.push.apply(m, n);
        }
        return m;
    }

    function m(a) {
        for (var n = 1; n < arguments.length; n++) {
            var o = null != arguments[n] ? arguments[n] : {};
            n % 2 ? l(Object(o), !0).forEach(function(n) {
                n(a, n, o[n]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(o)) : l(Object(o)).forEach(function(n) {
                Object.defineProperty(a, n, Object.getOwnPropertyDescriptor(o, n));
            });
        }
        return a;
    }

    function n(a, b, c) {
        return b in a ? Object.defineProperty(a, b, {
            value: c,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : a[b] = c, a;
    }

    function o(a, b) {
        if (!(a instanceof b))
            throw new TypeError('Cannot call a class as a function');
    }

    function p(a, b) {
        for (var q = 0; q < b.length; q++) {
            var r = b[q];
            r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(a, r.key, r);
        }
    }

    function q(a, b) {
        return q = Object.setPrototypeOf || function(a, b) {
            return a.__proto__ = b, a;
        }, q(a, b);
    }

    function r(a) {
        var s = function() {
            if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ('function' == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
            } catch (a) {
                return !1;
            }
        }();
        return function() {
            var t, u = t(a);
            if (s) {
                var v = t(this).constructor;
                t = Reflect.construct(u, arguments, v);
            } else
                t = u.apply(this, arguments);
            return s(this, t);
        };
    }

    function s(a, b) {
        return !b || 'object' !== i(b) && 'function' != typeof b ? function(a) {
            if (void 0 === a)
                throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return a;
        }(a) : b;
    }

    function t(a) {
        return t = Object.setPrototypeOf ? Object.getPrototypeOf : function(a) {
            return a.__proto__ || Object.getPrototypeOf(a);
        }, t(a);
    }
    var u = function(b) {
        ! function(a, b) {
            if ('function' != typeof b && null !== b)
                throw new TypeError('Super expression must either be null or a function');
            a.prototype = Object.create(b && b.prototype, {
                constructor: {
                    value: a,
                    writable: !0,
                    configurable: !0
                }
            }), b && q(a, b);
        }(l, b);
        var v, w, x, y = r(l);

        function z() {
            return o(this, z), y.apply(this, arguments);
        }
        return v = z, x = [{
            key: 'renderLineItem',
            value: function(b, v) {
                var A;
                if (a(f).isValidElement(b))
                    A = a(f).cloneElement(b, v);
                else if (a(e)(b))
                    A = b(v);
                else {
                    var B = v.x1,
                        C = v.y1,
                        D = v.x2,
                        E = v.y2,
                        F = v.key,
                        G = k(v, [
                            'x1',
                            'y1',
                            'x2',
                            'y2',
                            'key'
                        ]);
                    A = a(f).createElement('line', j({}, (0, h.filterProps)(G), {
                        x1: B,
                        y1: C,
                        x2: D,
                        y2: E,
                        fill: 'none',
                        key: F
                    }));
                }
                return A;
            }
        }], (w = [{
                key: 'renderHorizontal',
                value: function(b) {
                    var A = this,
                        B = this.props,
                        C = B.x,
                        D = B.width,
                        E = B.horizontal;
                    if (!b || !b.length)
                        return null;
                    var F = b.map(function(a, b) {
                        var G = m(m({}, A.props), {}, {
                            x1: C,
                            y1: a,
                            x2: C + D,
                            y2: a,
                            key: 'line-'.concat(b),
                            index: b
                        });
                        return z.renderLineItem(E, G);
                    });
                    return a(f).createElement('g', {
                        className: 'recharts-cartesian-grid-horizontal'
                    }, F);
                }
            },
            {
                key: 'renderVertical',
                value: function(b) {
                    var A = this,
                        B = this.props,
                        C = B.y,
                        D = B.height,
                        E = B.vertical;
                    if (!b || !b.length)
                        return null;
                    var F = b.map(function(a, b) {
                        var G = m(m({}, A.props), {}, {
                            x1: a,
                            y1: C,
                            x2: a,
                            y2: C + D,
                            key: 'line-'.concat(b),
                            index: b
                        });
                        return z.renderLineItem(E, G);
                    });
                    return a(f).createElement('g', {
                        className: 'recharts-cartesian-grid-vertical'
                    }, F);
                }
            },
            {
                key: 'renderVerticalStripes',
                value: function(b) {
                    var A = this.props.verticalFill;
                    if (!A || !A.length)
                        return null;
                    var B = this.props,
                        C = B.fillOpacity,
                        D = B.x,
                        E = B.y,
                        F = B.width,
                        G = B.height,
                        H = b.slice().sort(function(a, b) {
                            return a - b;
                        });
                    D !== H[0] && H.unshift(0);
                    var I = H.map(function(b, B) {
                        var J = H[B + 1] ? H[B + 1] - b : D + F - b;
                        if (J <= 0)
                            return null;
                        var K = B % A.length;
                        return a(f).createElement('rect', {
                            key: 'react-'.concat(B),
                            x: Math.round(b + D - D),
                            y: E,
                            width: J,
                            height: G,
                            stroke: 'none',
                            fill: A[K],
                            fillOpacity: C,
                            className: 'recharts-cartesian-grid-bg'
                        });
                    });
                    return a(f).createElement('g', {
                        className: 'recharts-cartesian-gridstripes-vertical'
                    }, I);
                }
            },
            {
                key: 'renderHorizontalStripes',
                value: function(b) {
                    var A = this.props.horizontalFill;
                    if (!A || !A.length)
                        return null;
                    var B = this.props,
                        C = B.fillOpacity,
                        D = B.x,
                        E = B.y,
                        F = B.width,
                        G = B.height,
                        H = b.slice().sort(function(a, b) {
                            return a - b;
                        });
                    E !== H[0] && H.unshift(0);
                    var I = H.map(function(b, B) {
                        var J = H[B + 1] ? H[B + 1] - b : E + G - b;
                        if (J <= 0)
                            return null;
                        var K = B % A.length;
                        return a(f).createElement('rect', {
                            key: 'react-'.concat(B),
                            y: Math.round(b + E - E),
                            x: D,
                            height: J,
                            width: F,
                            stroke: 'none',
                            fill: A[K],
                            fillOpacity: C,
                            className: 'recharts-cartesian-grid-bg'
                        });
                    });
                    return a(f).createElement('g', {
                        className: 'recharts-cartesian-gridstripes-horizontal'
                    }, I);
                }
            },
            {
                key: 'renderBackground',
                value: function() {
                    var J = this.props.fill;
                    if (!J || 'none' === J)
                        return null;
                    var K = this.props,
                        L = K.fillOpacity,
                        M = K.x,
                        N = K.y,
                        O = K.width,
                        P = K.height;
                    return a(f).createElement('rect', {
                        x: M,
                        y: N,
                        width: O,
                        height: P,
                        stroke: 'none',
                        fill: J,
                        fillOpacity: L,
                        className: 'recharts-cartesian-grid-bg'
                    });
                }
            },
            {
                key: 'render',
                value: function() {
                    var Q = this.props,
                        R = Q.x,
                        S = Q.y,
                        T = Q.width,
                        U = Q.height,
                        V = Q.horizontal,
                        W = Q.vertical,
                        X = Q.horizontalCoordinatesGenerator,
                        Y = Q.verticalCoordinatesGenerator,
                        Z = Q.xAxis,
                        $ = Q.yAxis,
                        _ = Q.offset,
                        ab = Q.chartWidth,
                        bb = Q.chartHeight;
                    if (!(0, O.isNumber)(T) || T <= 0 || !(0, O.isNumber)(U) || U <= 0 || !(0, O.isNumber)(R) || R !== +R || !(0, O.isNumber)(S) || S !== +S)
                        return null;
                    var cb = this.props,
                        db = cb.horizontalPoints,
                        eb = cb.verticalPoints;
                    return db && db.length || !a(N)(X) || (db = X({
                        yAxis: $,
                        width: ab,
                        height: bb,
                        offset: _
                    })), eb && eb.length || !a(N)(Y) || (eb = Y({
                        xAxis: Z,
                        width: ab,
                        height: bb,
                        offset: _
                    })), a(f).createElement('g', {
                        className: 'recharts-cartesian-grid'
                    }, this.renderBackground(), V && this.renderHorizontal(db), W && this.renderVertical(eb), V && this.renderHorizontalStripes(db), W && this.renderVerticalStripes(eb));
                }
            }
        ]) && p(v.prototype, w), x && p(v, x), z;
    }(f.PureComponent);
    u.displayName = 'CartesianGrid', u.defaultProps = {
        horizontal: !0,
        vertical: !0,
        horizontalPoints: [],
        verticalPoints: [],
        stroke: '#ccc',
        fill: 'none',
        verticalFill: [],
        horizontalFill: []
    };
}), d.register('OLZk4', function(c, o) {
    b(c.exports, 'ResponsiveContainer', function() {
        return n;
    });
    var e = d('o4A+9'),
        f = d('VAIs1'),
        g = d('uPP4W'),
        h = d('7APoG'),
        i = d('u572v'),
        j = d('J6+Ay');

    function k() {
        return k = Object.assign || function(a) {
            for (var l = 1; l < arguments.length; l++) {
                var m = arguments[l];
                for (var n in m)
                    Object.prototype.hasOwnProperty.call(m, n) && (a[n] = m[n]);
            }
            return a;
        }, k.apply(this, arguments);
    }

    function l(a, b) {
        return function(a) {
            if (Array.isArray(a))
                return a;
        }(a) || function(a, b) {
            if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(a)))
                return;
            var m = [],
                n = !0,
                o = !1,
                p = void 0;
            try {
                for (var q, r = a[Symbol.iterator](); !(n = (q = r.next()).done) && (m.push(q.value), !b || m.length !== b); n = !0);
            } catch (a) {
                o = !0, p = a;
            } finally {
                try {
                    n || null == g.return || g.return();
                } finally {
                    if (o)
                        throw p;
                }
            }
            return m;
        }(a, b) || function(a, b) {
            if (!a)
                return;
            if ('string' == typeof a)
                return m(a, b);
            var m = Object.prototype.toString.call(a).slice(8, -1);
            'Object' === m && a.constructor && (m = a.constructor.name);
            if ('Map' === m || 'Set' === m)
                return Array.from(a);
            if ('Arguments' === m || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m))
                return m(a, b);
        }(a, b) || function() {
            throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }

    function m(a, b) {
        (null == b || b > a.length) && (b = a.length);
        for (var n = 0, o = new Array(b); n < b; n++)
            o[n] = a[n];
        return o;
    }
    var n = (0, g.forwardRef)(function(b, c) {
        var o = b.aspect,
            p = b.width,
            q = void 0 === p ? '100%' : p,
            r = b.height,
            s = void 0 === r ? '100%' : r,
            t = b.minWidth,
            u = b.minHeight,
            v = b.maxHeight,
            w = b.children,
            x = b.debounce,
            y = void 0 === x ? 0 : x,
            z = b.id,
            A = b.className,
            B = l((0, g.useState)({
                containerWidth: -1,
                containerHeight: -1
            }), 2),
            C = B[0],
            D = B[1],
            E = (0, g.useRef)(null);
        (0, g.useImperativeHandle)(c, function() {
            return E;
        }, [E]);
        var F = l((0, g.useState)(!1), 2),
            G = F[0],
            H = F[1],
            I = function() {
                return E.current ? {
                    containerWidth: E.current.clientWidth,
                    containerHeight: E.current.clientHeight
                } : null;
            },
            J = function() {
                if (G) {
                    var K = I();
                    if (K) {
                        var L = C.containerWidth,
                            M = C.containerHeight,
                            N = K.containerWidth,
                            O = K.containerHeight;
                        N === L && O === M || D({
                            containerWidth: N,
                            containerHeight: O
                        });
                    }
                }
            },
            K = y > 0 ? a(e)(J, y) : J;
        (0, g.useEffect)(function() {
            if (G) {
                var L = I();
                L && D(L);
            }
        }, [G]), (0, g.useEffect)(function() {
            H(!0);
        }, []);
        var L = {
            width: q,
            height: s,
            minWidth: t,
            minHeight: u,
            maxHeight: v
        };
        return a(g).createElement(h.default, {
            handleWidth: !0,
            handleHeight: !0,
            onResize: K,
            targetRef: E
        }, a(g).createElement('div', k({}, null != z ? {
            id: ''.concat(z)
        } : {}, {
            className: a(f)('recharts-responsive-container', A),
            style: L,
            ref: E
        }), function() {
            var M = C.containerWidth,
                N = C.containerHeight;
            if (M < 0 || N < 0)
                return null;
            (0, j.warn)((0, i.isPercent)(q) || (0, i.isPercent)(s), 'The width(%s) and height(%s) are both fixed numbers,\n       maybe you don\'t need to use a ResponsiveContainer.', q, s), (0, j.warn)(!o || o > 0, 'The aspect(%s) must be greater than zero.', o);
            var O = (0, i.isPercent)(q) ? M : q,
                P = (0, i.isPercent)(s) ? N : s;
            return o && o > 0 && (O ? P = O / o : P && (O = P * o), v && P > v && (P = v)), (0, j.warn)(O > 0 || P > 0, 'The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.', O, P, q, s, t, u, o), (0, g.cloneElement)(w, {
                width: O,
                height: P
            });
        }()));
    });
}), d.register('7APoG', function(a, l) {
    b(a.exports, 'default', function() {
        return kb;
    });
    var e = d('uPP4W'),
        f = (e = d('uPP4W'), d('nLioi')),
        g = function(a, b) {
            return g = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(a, b) {
                a.__proto__ = b;
            } || function(a, b) {
                for (var h in b)
                    Object.prototype.hasOwnProperty.call(b, h) && (a[h] = b[h]);
            }, g(a, b);
        };

    function h(a, b) {
        if ('function' != typeof b && null !== b)
            throw new TypeError('Class extends value ' + String(b) + ' is not a constructor or null');

        function i() {
            this.constructor = a;
        }
        g(a, b), a.prototype = null === b ? Object.create(b) : (i.prototype = b.prototype, new i());
    }

    function i(a, b) {
        var j = {};
        for (var k in a)
            Object.prototype.hasOwnProperty.call(a, k) && b.indexOf(k) < 0 && (j[k] = a[k]);
        if (null != a && 'function' == typeof Object.getOwnPropertySymbols) {
            var l = 0;
            for (k = Object.getOwnPropertySymbols(a); l < k.length; l++)
                b.indexOf(k[l]) < 0 && Object.prototype.propertyIsEnumerable.call(a, k[l]) && (j[k[l]] = a[k[l]]);
        }
        return j;
    }
    var j = 'undefined' != typeof globalThis ? globalThis : 'undefined' != typeof window ? window : void 0 !== c ? c : 'undefined' != typeof self ? self : {};
    var k = function(a) {
            var l = typeof a;
            return null != a && ('object' == l || 'function' == l);
        },
        l = 'object' == typeof j && j && j.Object === Object && j,
        m = 'object' == typeof self && self && self.Object === Object && self,
        n = l || m || Function('return this')(),
        o = p,
        q = function() {
            return o.Date.now();
        },
        r = /\s/;
    var s = function(a) {
            for (var t = a.length; t-- && r.test(a.charAt(t)););
            return t;
        },
        t = /^\s+/;
    var u = function(a) {
            return a ? a.slice(0, s(a) + 1).replace(t, '') : a;
        },
        v = p.Symbol,
        w = x,
        y = Object.prototype,
        z = y.hasOwnProperty,
        A = y.toString,
        B = w ? w.toStringTag : void 0;
    var C = function(a) {
            var D = z.call(a, B),
                E = a[B];
            try {
                a[B] = void 0;
                var F = !0;
            } catch (a) {}
            var F = A.call(a);
            return d && (D ? a[B] = E : delete a[B]), F;
        },
        D = Object.prototype.toString;
    var E = F,
        G = function(a) {
            return D.call(a);
        },
        H = x ? x.toStringTag : void 0;
    var I = function(a) {
            return null == a ? void 0 === a ? '[object Undefined]' : '[object Null]' : H && H in Object(a) ? E(a) : G(a);
        },
        J = function(a) {
            return null != a && 'object' == typeof a;
        };
    var K = L,
        M = N,
        O = function(a) {
            return 'symbol' == typeof a || J(a) && '[object Symbol]' == I(a);
        },
        P = /^[-+]0x[0-9a-f]+$/i,
        Q = /^0b[01]+$/i,
        R = /^0o[0-7]+$/i,
        S = T;
    var U = V,
        W = X,
        Y = function(a) {
            if ('number' == typeof a)
                return a;
            if (O(a))
                return NaN;
            if (M(a)) {
                var Z = 'function' == typeof a.valueOf ? a.valueOf() : a;
                a = M(Z) ? Z + '' : Z;
            }
            if ('string' != typeof a)
                return 0 === a ? a : +a;
            a = K(a);
            var Z = Q.test(a);
            return Z || R.test(a) ? S(a.slice(2), Z ? 2 : 8) : P.test(a) ? NaN : +a;
        },
        Z = Math.max,
        $ = Math.min;
    var _ = function(a, b, c) {
            var ab, bb, cb, db, eb, fb, gb = 0,
                hb = !1,
                ib = !1,
                jb = !0;
            if ('function' != typeof a)
                throw new TypeError('Expected a function');

            function kb(b) {
                var lb = mb,
                    nb = ob;
                return mb = ob = void 0, gb = b, db = a.apply(nb, lb);
            }

            function lb(a) {
                return gb = a, eb = setTimeout(X, b), hb ? kb(a) : db;
            }

            function mb(a) {
                var nb = a - fb;
                return void 0 === fb || nb >= b || nb < 0 || ib && a - gb >= cb;
            }

            function nb() {
                var ob = W();
                if (mb(ob))
                    return r(ob);
                eb = setTimeout(nb, function(ob) {
                    var pb = b - (ob - fb);
                    return ib ? $(pb, cb - (ob - gb)) : pb;
                }(ob));
            }

            function ob(a) {
                return eb = void 0, jb && ab ? kb(a) : (ab = bb = void 0, db);
            }

            function pb() {
                var qb = W(),
                    rb = mb(qb);
                if (ab = arguments, bb = this, fb = qb, rb) {
                    if (void 0 === eb)
                        return lb(fb);
                    if (ib)
                        return clearTimeout(eb), eb = setTimeout(nb, b), kb(fb);
                }
                return void 0 === eb && (eb = setTimeout(nb, b)), db;
            }
            return b = Y(b) || 0, U(c) && (hb = !!c.leading, cb = (ib = 'maxWait' in c) ? Z(Y(c.maxWait) || 0, b) : cb, jb = 'trailing' in c ? !!c.trailing : jb), pb.cancel = function() {
                void 0 !== eb && clearTimeout(eb), gb = 0, ab = fb = bb = eb = void 0;
            }, pb.flush = function() {
                return void 0 === eb ? db : ob(W());
            }, pb;
        },
        ab = bb,
        cb = db;
    var eb = function(a, b, c) {
            var fb = !0,
                gb = !0;
            if ('function' != typeof a)
                throw new TypeError('Expected a function');
            return cb(c) && (fb = 'leading' in c ? !!c.leading : fb, gb = 'trailing' in c ? !!c.trailing : gb), ab(a, b, {
                leading: fb,
                maxWait: b,
                trailing: gb
            });
        },
        fb = function(a, b, c, d) {
            switch (b) {
                case 'debounce':
                    return bb(a, c, d);
                case 'throttle':
                    return eb(a, c, d);
                default:
                    return a;
            }
        },
        gb = function(a) {
            return 'function' == typeof a;
        },
        hb = function() {
            return 'undefined' == typeof window;
        },
        ib = function(a) {
            return a instanceof Element || a instanceof HTMLDocument;
        },
        jb = function(a, b, c, d) {
            return function(qb) {
                var kb = qb.width,
                    lb = qb.height;
                b(function(b) {
                    return b.width === kb && b.height === lb || b.width === kb && !d || b.height === lb && !c ? b : (a && gb(a) && a(kb, lb), {
                        width: kb,
                        height: lb
                    });
                });
            };
        },
        kb = function(a) {
            function lb(lb) {
                var mb = a.call(this, lb) || this;
                mb.cancelHandler = function() {
                    mb.resizeHandler && mb.resizeHandler.cancel && (mb.resizeHandler.cancel(), mb.resizeHandler = null);
                }, mb.attachObserver = function() {
                    var nb = mb.props,
                        ob = nb.targetRef,
                        pb = nb.observerOptions;
                    if (!hb()) {
                        ob && ob.current && (mb.targetRef.current = ob.current);
                        var qb = mb.getElement();
                        qb && (mb.observableElement && mb.observableElement === qb || (mb.observableElement = qb, mb.resizeObserver.observe(qb, pb)));
                    }
                }, mb.getElement = function() {
                    var nb = mb.props,
                        ob = nb.querySelector,
                        pb = nb.targetDomEl;
                    if (hb())
                        return null;
                    if (ob)
                        return document.querySelector(ob);
                    if (pb && ib(pb))
                        return pb;
                    if (mb.targetRef && ib(mb.targetRef.current))
                        return mb.targetRef.current;
                    var qb = (0, f.findDOMNode)(mb);
                    if (!qb)
                        return null;
                    switch (mb.getRenderType()) {
                        case 'renderProp':
                        case 'childFunction':
                        case 'child':
                        case 'childArray':
                            return qb;
                        default:
                            return qb.parentElement;
                    }
                }, mb.createResizeHandler = function(a) {
                    var nb = mb.props,
                        ob = nb.handleWidth,
                        pb = void 0 === ob || ob,
                        qb = nb.handleHeight,
                        rb = void 0 === qb || qb,
                        sb = nb.onResize;
                    if (pb || rb) {
                        var tb = jb(sb, mb.setState.bind(mb), pb, rb);
                        a.forEach(function(a) {
                            var ub = a && a.contentRect || {},
                                vb = ub.width,
                                wb = ub.height;
                            !mb.skipOnMount && !hb() && tb({
                                width: vb,
                                height: wb
                            }), mb.skipOnMount = !1;
                        });
                    }
                }, mb.getRenderType = function() {
                    var nb = mb.props,
                        ob = nb.render,
                        pb = nb.children;
                    return gb(ob) ? 'renderProp' : gb(pb) ? 'childFunction' : (0, e.isValidElement)(pb) ? 'child' : Array.isArray(pb) ? 'childArray' : 'parent';
                };
                var nb = lb.skipOnMount,
                    ob = lb.refreshMode,
                    pb = lb.refreshRate,
                    qb = void 0 === pb ? 1000 : pb,
                    rb = lb.refreshOptions;
                return mb.state = {
                    width: void 0,
                    height: void 0
                }, mb.skipOnMount = nb, mb.targetRef = (0, e.createRef)(), mb.observableElement = null, hb() || (mb.resizeHandler = fb(mb.createResizeHandler, ob, qb, rb), mb.resizeObserver = new window.ResizeObserver(mb.resizeHandler)), mb;
            }
            return h(lb, a), lb.prototype.componentDidMount = function() {
                this.attachObserver();
            }, lb.prototype.componentDidUpdate = function() {
                this.attachObserver();
            }, lb.prototype.componentWillUnmount = function() {
                hb() || (this.observableElement = null, this.resizeObserver.disconnect(), this.cancelHandler());
            }, lb.prototype.render = function() {
                var mb, nb = this.props,
                    ob = nb.render,
                    pb = nb.children,
                    qb = nb.nodeType,
                    rb = void 0 === qb ? 'div' : qb,
                    sb = this.state,
                    tb = {
                        width: sb.width,
                        height: sb.height,
                        targetRef: this.targetRef
                    };
                switch (this.getRenderType()) {
                    case 'renderProp':
                        return ob && ob(tb);
                    case 'childFunction':
                        return (mb = pb)(tb);
                    case 'child':
                        if ((mb = pb).type && 'string' == typeof mb.type) {
                            var ub = i(tb, ['targetRef']);
                            return (0, e.cloneElement)(mb, ub);
                        }
                        return (0, e.cloneElement)(mb, tb);
                    case 'childArray':
                        return (mb = pb).map(function(mb) {
                            return !!mb && (0, e.cloneElement)(mb, tb);
                        });
                    default:
                        return e.createElement(rb, null);
                }
            }, lb;
        }(e.PureComponent);
    hb() ? e.useEffect : e.useLayoutEffect;
}), d.register('Iz059', function(a, c) {
    b(a.exports, 'default', function() {
        return j;
    });
    var e = d('uhRWM'),
        f = d('uPP4W'),
        g = d('piGSI'),
        h = d('tEXgG'),
        i = function(a, b) {
            return f.createElement(h.default, (0, e.default)((0, e.default)({}, a), {}, {
                ref: b,
                icon: g.default
            }));
        };
    i.displayName = 'BarChartOutlined';
    var j = f.forwardRef(i);
}), d.register('piGSI', function(a, c) {
    b(a.exports, 'default', function() {
        return d;
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
}), d.register('PxcG6', function(a, c) {
    b(a.exports, 'default', function() {
        return h;
    });
    var e = d('IsAdf'),
        f = d('PjB0f');
    d('OrwLw');
    const g = ['bulk-analytics'];
    var h = a => (0, e.useQuery)({
        queryKey: [
            g,
            a
        ],
        queryFn: () => (0, f.requestAsPromise)({
            url: '/api/bulk/usage/' + a
        }),
        retry: 0
    });
}), d.register('oSNZM', function(a, c) {
    b(a.exports, 'default', function() {
        return j;
    });
    var e = d('uhRWM'),
        f = d('uPP4W'),
        g = d('lByv9'),
        h = d('tEXgG'),
        i = function(a, b) {
            return f.createElement(h.default, (0, e.default)((0, e.default)({}, a), {}, {
                ref: b,
                icon: g.default
            }));
        };
    i.displayName = 'CheckOutlined';
    var j = f.forwardRef(i);
}), d.register('lByv9', function(a, c) {
    b(a.exports, 'default', function() {
        return d;
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
}), d.register('FV1v91', function(a, b) {
    a.exports = function(a) {
        return a && a.__esModule ? a : {
            default: a
        };
    };
});