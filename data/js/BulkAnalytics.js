function t(t) {
    return t && t.__esModule ? t.default : t
}

function e(t, e, r, n) {
    Object.defineProperty(t, e, {
        get: r,
        set: n,
        enumerable: !0,
        configurable: !0
    })
}
var r = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {},
    n = r.parcelRequire388b;
n.register("jFvxW", (function(r, i) {
    var o;
    o = r.exports, Object.defineProperty(o, "__esModule", {
        value: !0,
        configurable: !0
    }), e(r.exports, "default", (function() {
        return E
    }));
    var a = n("hxEiv");
    n("fywoC");
    var u = n("lUi4l"),
        c = n("ilbb7"),
        s = n("6ymFY"),
        l = n("cQKFX"),
        f = n("igxQN"),
        p = n("7vRaZ"),
        h = n("dLLTI"),
        d = n("lKmIF"),
        y = n("iMOcM"),
        g = n("2FDaO"),
        v = n("fI2SP"),
        m = n("4Gnmi"),
        b = n("3UhQK"),
        x = n("69H0v"),
        w = n("69SUA"),
        O = n("2nCEo");
    let j, _, S, A, k = t => t;
    var E = e => {
        const {
            bulkId: r
        } = e, {
            data: n,
            isLoading: i
        } = (0, x.default)(r);
        if (i) return (0, a.jsx)(M, {
            children: (0, a.jsx)(m.default, {
                paragraph: {
                    rows: 14
                }
            })
        });
        const o = null == n ? void 0 : n.monthlyInfo;
        if (!o || !o.length) {
            const e = Math.abs(t(O)().diff(t(O)((0, y.dateFromObjectId)(r)), "months")) < 2;
            return (0, a.jsx)(M, {
                children: (0, a.jsxs)("div", {
                    className: "maxWidth flex-center flex-column",
                    style: {
                        minHeight: 400
                    },
                    children: [(0, a.jsx)("div", {
                        style: {
                            fontSize: 54,
                            opacity: .8
                        },
                        children: (0, a.jsx)(b.default, {})
                    }), (0, a.jsx)("div", {
                        style: {
                            fontSize: 19,
                            marginTop: 8,
                            textAlign: "center"
                        },
                        children: e ? "No usage data is available for this group license yet. Check back soon!" : "No usage data is available for this group license."
                    })]
                })
            })
        }
        return (0, a.jsxs)(M, {
            children: [(0, a.jsx)(P, {
                children: "Group Usage"
            }), (0, a.jsx)(C, {
                children: "The percentage of members have hosted a live game since the group license was activated"
            }), (0, a.jsx)("div", {
                style: {
                    height: 15
                }
            }), (0, a.jsx)(v.default, {
                type: "circle",
                width: 200,
                percent: Math.ceil(100 * n.percentageUsage),
                format: () => Math.ceil(100 * n.percentageUsage) + "%",
                strokeColor: "#66bb6a"
            }), (0, a.jsx)("div", {
                style: {
                    height: 30
                }
            }), (0, a.jsx)(P, {
                children: "Monthly Usage"
            }), (0, a.jsx)(C, {
                children: "Percentage of members who hosted a live game in a given month."
            }), (0, a.jsx)("div", {
                style: {
                    height: 15
                }
            }), (0, a.jsx)(T, {
                children: (0, a.jsx)(l.ResponsiveContainer, {
                    height: 270,
                    children: (0, a.jsxs)(c.BarChart, {
                        margin: {
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0
                        },
                        data: o.map((t => ({
                            name: t.monthName,
                            Percentage: Math.ceil(100 * t.percentageOfMembersWhoHosted)
                        }))),
                        children: [(0, a.jsx)(s.CartesianGrid, {
                            strokeDasharray: "3 3"
                        }), (0, a.jsx)(p.XAxis, {
                            dataKey: "name"
                        }), (0, a.jsx)(h.YAxis, {
                            tickFormatter: t => t + "%"
                        }), (0, a.jsx)(f.Tooltip, {
                            formatter: t => (0, y.numberWithCommas)(t) + "%"
                        }), (0, a.jsx)(u.Bar, {
                            dataKey: "Percentage",
                            fill: d.default.BackgroundPurple
                        })]
                    })
                })
            }), (0, a.jsx)("div", {
                style: {
                    height: 30
                }
            }), (0, a.jsx)(P, {
                children: "Monthly Usage Frequency"
            }), (0, a.jsx)(C, {
                children: "Average live games hosted per active member each month"
            }), (0, a.jsx)("div", {
                style: {
                    height: 15
                }
            }), (0, a.jsx)(T, {
                children: (0, a.jsx)(l.ResponsiveContainer, {
                    height: 270,
                    children: (0, a.jsxs)(c.BarChart, {
                        margin: {
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0
                        },
                        data: o.map((t => ({
                            name: t.monthName,
                            "Average Live Games Hosted": Math.round(t.averageGamesHosted)
                        }))),
                        children: [(0, a.jsx)(s.CartesianGrid, {
                            strokeDasharray: "3 3"
                        }), (0, a.jsx)(p.XAxis, {
                            dataKey: "name"
                        }), (0, a.jsx)(h.YAxis, {}), (0, a.jsx)(f.Tooltip, {
                            formatter: t => (0, y.numberWithCommas)(t)
                        }), (0, a.jsx)(u.Bar, {
                            dataKey: "Average Live Games Hosted",
                            fill: d.default.BackgroundPurple
                        })]
                    })
                })
            })]
        })
    };
    const M = g.default.div.attrs({
            className: "maxWidth"
        })(j || (j = k`
  color: ${0};
  font-family: ${0};
  padding-top: 8px;
`), d.default.Black, w.Fonts.SFPro),
        P = g.default.div(_ || (_ = k`
  font-size: 25px;
  font-weight: ${0};
`), w.FontWeights.UltraBold),
        C = g.default.div(S || (S = k`
  font-size: 17px;
`)),
        T = g.default.div.attrs({
            className: "maxWidth"
        })(A || (A = k`
  padding: 25px;
  background: rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  padding-bottom: 8px;
`))
})), n.register("lUi4l", (function(r, i) {
    e(r.exports, "Bar", (function() {
        return N
    }));
    var o = n("bZbba"),
        a = n("acqQQ"),
        u = n("hRZ1R"),
        c = n("42aAU"),
        s = n("fywoC"),
        l = n("fe1on"),
        f = n("14qw3"),
        p = n("5W6gH"),
        h = n("fYpyz"),
        d = n("lwjGN"),
        y = n("iRiRC"),
        g = n("b7qIx"),
        v = n("fI5bH"),
        m = n("kEum4"),
        b = n("ipNOV"),
        x = n("kjJfJ"),
        w = n("iquK2");

    function O(t) {
        return O = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, O(t)
    }

    function j(t, e) {
        if (null == t) return {};
        var r, n, i = function(t, e) {
            if (null == t) return {};
            var r, n, i = {},
                o = Object.keys(t);
            for (n = 0; n < o.length; n++) r = o[n], e.indexOf(r) >= 0 || (i[r] = t[r]);
            return i
        }(t, e);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(t);
            for (n = 0; n < o.length; n++) r = o[n], e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (i[r] = t[r])
        }
        return i
    }

    function _() {
        return _ = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
            }
            return t
        }, _.apply(this, arguments)
    }

    function S(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), r.push.apply(r, n)
        }
        return r
    }

    function A(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2 ? S(Object(r), !0).forEach((function(e) {
                k(t, e, r[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : S(Object(r)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
            }))
        }
        return t
    }

    function k(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = r, t
    }

    function E(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function M(t, e) {
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    function P(t, e) {
        return P = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        }, P(t, e)
    }

    function C(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var r, n = I(t);
            if (e) {
                var i = I(this).constructor;
                r = Reflect.construct(n, arguments, i)
            } else r = n.apply(this, arguments);
            return T(this, r)
        }
    }

    function T(t, e) {
        return !e || "object" !== O(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function I(t) {
        return I = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }, I(t)
    }
    var N = function(e) {
        ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && P(t, e)
        }(y, e);
        var r, n, i, c = C(y);

        function y() {
            var t;
            E(this, y);
            for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++) r[n] = arguments[n];
            return (t = c.call.apply(c, [this].concat(r))).state = {
                isAnimationFinished: !1
            }, t.id = (0, v.uniqueId)("recharts-bar-"), t.handleAnimationEnd = function() {
                var e = t.props.onAnimationEnd;
                t.setState({
                    isAnimationFinished: !0
                }), e && e()
            }, t.handleAnimationStart = function() {
                var e = t.props.onAnimationStart;
                t.setState({
                    isAnimationFinished: !1
                }), e && e()
            }, t
        }
        return r = y, i = [{
            key: "getDerivedStateFromProps",
            value: function(t, e) {
                return t.animationId !== e.prevAnimationId ? {
                    prevAnimationId: t.animationId,
                    curData: t.data,
                    prevData: e.curData
                } : t.data !== e.curData ? {
                    curData: t.data
                } : null
            }
        }, {
            key: "renderRectangle",
            value: function(e, r) {
                return t(s).isValidElement(e) ? t(s).cloneElement(e, r) : t(u)(e) ? e(r) : t(s).createElement(p.Rectangle, r)
            }
        }], (n = [{
            key: "renderRectanglesStatically",
            value: function(e) {
                var r = this,
                    n = this.props.shape,
                    i = (0, w.filterProps)(this.props);
                return e && e.map((function(e, o) {
                    var a = A(A(A({}, i), e), {}, {
                        index: o
                    });
                    return t(s).createElement(h.Layer, _({
                        className: "recharts-bar-rectangle"
                    }, (0, w.adaptEventsOfChild)(r.props, e, o), {
                        key: "rectangle-".concat(o)
                    }), y.renderRectangle(n, a))
                }))
            }
        }, {
            key: "renderRectanglesWithAnimation",
            value: function() {
                var e = this,
                    r = this.props,
                    n = r.data,
                    i = r.layout,
                    o = r.isAnimationActive,
                    a = r.animationBegin,
                    u = r.animationDuration,
                    c = r.animationEasing,
                    l = r.animationId,
                    p = this.state.prevData;
                return t(s).createElement(f.default, {
                    begin: a,
                    duration: u,
                    isActive: o,
                    easing: c,
                    from: {
                        t: 0
                    },
                    to: {
                        t: 1
                    },
                    key: "bar-".concat(l),
                    onAnimationEnd: this.handleAnimationEnd,
                    onAnimationStart: this.handleAnimationStart
                }, (function(r) {
                    var o = r.t,
                        a = n.map((function(t, e) {
                            var r = p && p[e];
                            if (r) {
                                var n = (0, v.interpolateNumber)(r.x, t.x),
                                    a = (0, v.interpolateNumber)(r.y, t.y),
                                    u = (0, v.interpolateNumber)(r.width, t.width),
                                    c = (0, v.interpolateNumber)(r.height, t.height);
                                return A(A({}, t), {}, {
                                    x: n(o),
                                    y: a(o),
                                    width: u(o),
                                    height: c(o)
                                })
                            }
                            if ("horizontal" === i) {
                                var s = (0, v.interpolateNumber)(0, t.height)(o);
                                return A(A({}, t), {}, {
                                    y: t.y + t.height - s,
                                    height: s
                                })
                            }
                            var l = (0, v.interpolateNumber)(0, t.width)(o);
                            return A(A({}, t), {}, {
                                width: l
                            })
                        }));
                    return t(s).createElement(h.Layer, null, e.renderRectanglesStatically(a))
                }))
            }
        }, {
            key: "renderRectangles",
            value: function() {
                var e = this.props,
                    r = e.data,
                    n = e.isAnimationActive,
                    i = this.state.prevData;
                return !(n && r && r.length) || i && t(a)(i, r) ? this.renderRectanglesStatically(r) : this.renderRectanglesWithAnimation()
            }
        }, {
            key: "renderBackground",
            value: function() {
                var t = this,
                    e = this.props.data,
                    r = (0, w.filterProps)(this.props.background);
                return e.map((function(e, n) {
                    e.value;
                    var i = e.background,
                        o = j(e, ["value", "background"]);
                    if (!i) return null;
                    var a = A(A(A(A(A({}, o), {}, {
                        fill: "#eee"
                    }, i), r), (0, w.adaptEventsOfChild)(t.props, e, n)), {}, {
                        index: n,
                        key: "background-bar-".concat(n),
                        className: "recharts-bar-background-rectangle"
                    });
                    return y.renderRectangle(t.props.background, a)
                }))
            }
        }, {
            key: "renderErrorBar",
            value: function() {
                if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
                var e = this.props,
                    r = e.data,
                    n = e.xAxis,
                    i = e.yAxis,
                    o = e.layout,
                    a = e.children,
                    u = (0, m.findAllByType)(a, d.ErrorBar.displayName);
                if (!u) return null;
                var c = "vertical" === o ? r[0].height / 2 : r[0].width / 2;

                function l(t, e) {
                    return {
                        x: t.x,
                        y: t.y,
                        value: t.value,
                        errorVal: (0, x.getValueByDataKey)(t, e)
                    }
                }
                return u.map((function(e, a) {
                    return t(s).cloneElement(e, {
                        key: "error-bar-".concat(a),
                        data: r,
                        xAxis: n,
                        yAxis: i,
                        layout: o,
                        offset: c,
                        dataPointFormatter: l
                    })
                }))
            }
        }, {
            key: "render",
            value: function() {
                var e = this.props,
                    r = e.hide,
                    n = e.data,
                    i = e.className,
                    a = e.xAxis,
                    u = e.yAxis,
                    c = e.left,
                    f = e.top,
                    p = e.width,
                    d = e.height,
                    y = e.isAnimationActive,
                    v = e.background,
                    m = e.id;
                if (r || !n || !n.length) return null;
                var b = this.state.isAnimationFinished,
                    x = t(l)("recharts-bar", i),
                    w = a && a.allowDataOverflow || u && u.allowDataOverflow,
                    O = t(o)(m) ? this.id : m;
                return t(s).createElement(h.Layer, {
                    className: x
                }, w ? t(s).createElement("defs", null, t(s).createElement("clipPath", {
                    id: "clipPath-".concat(O)
                }, t(s).createElement("rect", {
                    x: c,
                    y: f,
                    width: p,
                    height: d
                }))) : null, t(s).createElement(h.Layer, {
                    className: "recharts-bar-rectangles",
                    clipPath: w ? "url(#clipPath-".concat(O, ")") : null
                }, v ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(), (!y || b) && g.LabelList.renderCallByParent(this.props, n))
            }
        }]) && M(r.prototype, n), i && M(r, i), y
    }(s.PureComponent);
    N.displayName = "Bar", N.defaultProps = {
        xAxisId: 0,
        yAxisId: 0,
        legendType: "rect",
        minPointSize: 0,
        hide: !1,
        data: [],
        layout: "vertical",
        isAnimationActive: !b.Global.isSsr,
        animationBegin: 0,
        animationDuration: 400,
        animationEasing: "ease"
    }, N.getComposedData = function(e) {
        var r = e.props,
            n = e.item,
            i = e.barPosition,
            o = e.bandSize,
            a = e.xAxis,
            u = e.yAxis,
            s = e.xAxisTicks,
            l = e.yAxisTicks,
            f = e.stackedData,
            p = e.dataStartIndex,
            h = e.displayedData,
            d = e.offset,
            g = (0, x.findPositionOfBar)(i, n);
        if (!g) return null;
        var b = r.layout,
            w = n.props,
            O = w.dataKey,
            j = w.children,
            _ = w.minPointSize,
            S = "horizontal" === b ? u : a,
            k = f ? S.scale.domain() : null,
            E = (0, x.getBaseValueOfBar)({
                numericAxis: S
            }),
            M = (0, m.findAllByType)(j, y.Cell.displayName),
            P = h.map((function(e, r) {
                var i, h, d, y, m, w;
                if (f ? i = (0, x.truncateByDomain)(f[p + r], k) : (i = (0, x.getValueByDataKey)(e, O), t(c)(i) || (i = [E, i])), "horizontal" === b) {
                    if (h = (0, x.getCateCoordinateOfBar)({
                            axis: a,
                            ticks: s,
                            bandSize: o,
                            offset: g.offset,
                            entry: e,
                            index: r
                        }), d = u.scale(i[1]), y = g.size, m = u.scale(i[0]) - u.scale(i[1]), w = {
                            x: h,
                            y: u.y,
                            width: y,
                            height: u.height
                        }, Math.abs(_) > 0 && Math.abs(m) < Math.abs(_)) {
                        var j = (0, v.mathSign)(m || _) * (Math.abs(_) - Math.abs(m));
                        d -= j, m += j
                    }
                } else h = a.scale(i[0]), d = (0, x.getCateCoordinateOfBar)({
                    axis: u,
                    ticks: l,
                    bandSize: o,
                    offset: g.offset,
                    entry: e,
                    index: r
                }), y = a.scale(i[1]) - a.scale(i[0]), m = g.size, w = {
                    x: a.x,
                    y: d,
                    width: a.width,
                    height: m
                }, Math.abs(_) > 0 && Math.abs(y) < Math.abs(_) && (y += (0, v.mathSign)(y || _) * (Math.abs(_) - Math.abs(y)));
                return A(A(A({}, e), {}, {
                    x: h,
                    y: d,
                    width: y,
                    height: m,
                    value: f ? i : i[1],
                    payload: e,
                    background: w
                }, M && M[r] && M[r].props), {}, {
                    tooltipPayload: [(0, x.getTooltipItem)(n, e)],
                    tooltipPosition: {
                        x: h + y / 2,
                        y: d + m / 2
                    }
                })
            }));
        return A({
            data: P,
            layout: b
        }, d)
    }
})), n.register("bZbba", (function(t, e) {
    t.exports = function(t) {
        return null == t
    }
})), n.register("acqQQ", (function(t, e) {
    var r = n("4Wlnr");
    t.exports = function(t, e) {
        return r(t, e)
    }
})), n.register("4Wlnr", (function(t, e) {
    var r = n("3VsNS"),
        i = n("cYleL");
    t.exports = function t(e, n, o, a, u) {
        return e === n || (null == e || null == n || !i(e) && !i(n) ? e != e && n != n : r(e, n, o, a, t, u))
    }
})), n.register("3VsNS", (function(t, e) {
    var r = n("3DaBV"),
        i = n("kpUhJ"),
        o = n("cyyk1"),
        a = n("bGO5F"),
        u = n("j8Tfu"),
        c = n("42aAU"),
        s = n("c42kK"),
        l = n("2y7dI"),
        f = "[object Arguments]",
        p = "[object Array]",
        h = "[object Object]",
        d = Object.prototype.hasOwnProperty;
    t.exports = function(t, e, n, y, g, v) {
        var m = c(t),
            b = c(e),
            x = m ? p : u(t),
            w = b ? p : u(e),
            O = (x = x == f ? h : x) == h,
            j = (w = w == f ? h : w) == h,
            _ = x == w;
        if (_ && s(t)) {
            if (!s(e)) return !1;
            m = !0, O = !1
        }
        if (_ && !O) return v || (v = new r), m || l(t) ? i(t, e, n, y, g, v) : o(t, e, x, n, y, g, v);
        if (!(1 & n)) {
            var S = O && d.call(t, "__wrapped__"),
                A = j && d.call(e, "__wrapped__");
            if (S || A) {
                var k = S ? t.value() : t,
                    E = A ? e.value() : e;
                return v || (v = new r), g(k, E, n, y, v)
            }
        }
        return !!_ && (v || (v = new r), a(t, e, n, y, g, v))
    }
})), n.register("3DaBV", (function(t, e) {
    var r = n("hczJj"),
        i = n("cyRRy"),
        o = n("cV8Lt"),
        a = n("cxEi9"),
        u = n("9bX3b"),
        c = n("hBAzc");

    function s(t) {
        var e = this.__data__ = new r(t);
        this.size = e.size
    }
    s.prototype.clear = i, s.prototype.delete = o, s.prototype.get = a, s.prototype.has = u, s.prototype.set = c, t.exports = s
})), n.register("hczJj", (function(t, e) {
    var r = n("k87KN"),
        i = n("2YoXb"),
        o = n("aE1WT"),
        a = n("hJuO0"),
        u = n("6UbJQ");

    function c(t) {
        var e = -1,
            r = null == t ? 0 : t.length;
        for (this.clear(); ++e < r;) {
            var n = t[e];
            this.set(n[0], n[1])
        }
    }
    c.prototype.clear = r, c.prototype.delete = i, c.prototype.get = o, c.prototype.has = a, c.prototype.set = u, t.exports = c
})), n.register("k87KN", (function(t, e) {
    t.exports = function() {
        this.__data__ = [], this.size = 0
    }
})), n.register("2YoXb", (function(t, e) {
    var r = n("6MDW2"),
        i = Array.prototype.splice;
    t.exports = function(t) {
        var e = this.__data__,
            n = r(e, t);
        return !(n < 0) && (n == e.length - 1 ? e.pop() : i.call(e, n, 1), --this.size, !0)
    }
})), n.register("6MDW2", (function(t, e) {
    var r = n("4P3Ie");
    t.exports = function(t, e) {
        for (var n = t.length; n--;)
            if (r(t[n][0], e)) return n;
        return -1
    }
})), n.register("4P3Ie", (function(t, e) {
    t.exports = function(t, e) {
        return t === e || t != t && e != e
    }
})), n.register("aE1WT", (function(t, e) {
    var r = n("6MDW2");
    t.exports = function(t) {
        var e = this.__data__,
            n = r(e, t);
        return n < 0 ? void 0 : e[n][1]
    }
})), n.register("hJuO0", (function(t, e) {
    var r = n("6MDW2");
    t.exports = function(t) {
        return r(this.__data__, t) > -1
    }
})), n.register("6UbJQ", (function(t, e) {
    var r = n("6MDW2");
    t.exports = function(t, e) {
        var n = this.__data__,
            i = r(n, t);
        return i < 0 ? (++this.size, n.push([t, e])) : n[i][1] = e, this
    }
})), n.register("cyRRy", (function(t, e) {
    var r = n("hczJj");
    t.exports = function() {
        this.__data__ = new r, this.size = 0
    }
})), n.register("cV8Lt", (function(t, e) {
    t.exports = function(t) {
        var e = this.__data__,
            r = e.delete(t);
        return this.size = e.size, r
    }
})), n.register("cxEi9", (function(t, e) {
    t.exports = function(t) {
        return this.__data__.get(t)
    }
})), n.register("9bX3b", (function(t, e) {
    t.exports = function(t) {
        return this.__data__.has(t)
    }
})), n.register("hBAzc", (function(t, e) {
    var r = n("hczJj"),
        i = n("92eas"),
        o = n("jhqEi");
    t.exports = function(t, e) {
        var n = this.__data__;
        if (n instanceof r) {
            var a = n.__data__;
            if (!i || a.length < 199) return a.push([t, e]), this.size = ++n.size, this;
            n = this.__data__ = new o(a)
        }
        return n.set(t, e), this.size = n.size, this
    }
})), n.register("92eas", (function(t, e) {
    var r = n("ivjYw")(n("3y6Vt"), "Map");
    t.exports = r
})), n.register("ivjYw", (function(t, e) {
    var r = n("aBK6Q"),
        i = n("dMwt1");
    t.exports = function(t, e) {
        var n = i(t, e);
        return r(n) ? n : void 0
    }
})), n.register("aBK6Q", (function(t, e) {
    var r = n("hRZ1R"),
        i = n("8ysgj"),
        o = n("4TzB7"),
        a = n("l7QjI"),
        u = /^\[object .+?Constructor\]$/,
        c = Function.prototype,
        s = Object.prototype,
        l = c.toString,
        f = s.hasOwnProperty,
        p = RegExp("^" + l.call(f).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    t.exports = function(t) {
        return !(!o(t) || i(t)) && (r(t) ? p : u).test(a(t))
    }
})), n.register("hRZ1R", (function(t, e) {
    var r = n("ji23K"),
        i = n("4TzB7");
    t.exports = function(t) {
        if (!i(t)) return !1;
        var e = r(t);
        return "[object Function]" == e || "[object GeneratorFunction]" == e || "[object AsyncFunction]" == e || "[object Proxy]" == e
    }
})), n.register("ji23K", (function(t, e) {
    var r = n("9EM1e"),
        i = n("hknWY"),
        o = n("am2jW"),
        a = r ? r.toStringTag : void 0;
    t.exports = function(t) {
        return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : a && a in Object(t) ? i(t) : o(t)
    }
})), n.register("9EM1e", (function(t, e) {
    var r = n("3y6Vt").Symbol;
    t.exports = r
})), n.register("3y6Vt", (function(t, e) {
    var r = n("1uaOL"),
        i = "object" == typeof self && self && self.Object === Object && self,
        o = r || i || Function("return this")();
    t.exports = o
})), n.register("1uaOL", (function(t, e) {
    var n = "object" == typeof r && r && r.Object === Object && r;
    t.exports = n
})), n.register("hknWY", (function(t, e) {
    var r = n("9EM1e"),
        i = Object.prototype,
        o = i.hasOwnProperty,
        a = i.toString,
        u = r ? r.toStringTag : void 0;
    t.exports = function(t) {
        var e = o.call(t, u),
            r = t[u];
        try {
            t[u] = void 0;
            var n = !0
        } catch (t) {}
        var i = a.call(t);
        return n && (e ? t[u] = r : delete t[u]), i
    }
})), n.register("am2jW", (function(t, e) {
    var r = Object.prototype.toString;
    t.exports = function(t) {
        return r.call(t)
    }
})), n.register("4TzB7", (function(t, e) {
    t.exports = function(t) {
        var e = typeof t;
        return null != t && ("object" == e || "function" == e)
    }
})), n.register("8ysgj", (function(t, e) {
    var r, i = n("8I5z2"),
        o = (r = /[^.]+$/.exec(i && i.keys && i.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r : "";
    t.exports = function(t) {
        return !!o && o in t
    }
})), n.register("8I5z2", (function(t, e) {
    var r = n("3y6Vt")["__core-js_shared__"];
    t.exports = r
})), n.register("l7QjI", (function(t, e) {
    var r = Function.prototype.toString;
    t.exports = function(t) {
        if (null != t) {
            try {
                return r.call(t)
            } catch (t) {}
            try {
                return t + ""
            } catch (t) {}
        }
        return ""
    }
})), n.register("dMwt1", (function(t, e) {
    t.exports = function(t, e) {
        return null == t ? void 0 : t[e]
    }
})), n.register("jhqEi", (function(t, e) {
    var r = n("4KGCi"),
        i = n("gPKWs"),
        o = n("acYZ4"),
        a = n("8NOKq"),
        u = n("8j5cD");

    function c(t) {
        var e = -1,
            r = null == t ? 0 : t.length;
        for (this.clear(); ++e < r;) {
            var n = t[e];
            this.set(n[0], n[1])
        }
    }
    c.prototype.clear = r, c.prototype.delete = i, c.prototype.get = o, c.prototype.has = a, c.prototype.set = u, t.exports = c
})), n.register("4KGCi", (function(t, e) {
    var r = n("jFBV7"),
        i = n("hczJj"),
        o = n("92eas");
    t.exports = function() {
        this.size = 0, this.__data__ = {
            hash: new r,
            map: new(o || i),
            string: new r
        }
    }
})), n.register("jFBV7", (function(t, e) {
    var r = n("eCGOJ"),
        i = n("jdGlY"),
        o = n("pAHGi"),
        a = n("54CcG"),
        u = n("5M9hE");

    function c(t) {
        var e = -1,
            r = null == t ? 0 : t.length;
        for (this.clear(); ++e < r;) {
            var n = t[e];
            this.set(n[0], n[1])
        }
    }
    c.prototype.clear = r, c.prototype.delete = i, c.prototype.get = o, c.prototype.has = a, c.prototype.set = u, t.exports = c
})), n.register("eCGOJ", (function(t, e) {
    var r = n("3Xd6n");
    t.exports = function() {
        this.__data__ = r ? r(null) : {}, this.size = 0
    }
})), n.register("3Xd6n", (function(t, e) {
    var r = n("ivjYw")(Object, "create");
    t.exports = r
})), n.register("jdGlY", (function(t, e) {
    t.exports = function(t) {
        var e = this.has(t) && delete this.__data__[t];
        return this.size -= e ? 1 : 0, e
    }
})), n.register("pAHGi", (function(t, e) {
    var r = n("3Xd6n"),
        i = Object.prototype.hasOwnProperty;
    t.exports = function(t) {
        var e = this.__data__;
        if (r) {
            var n = e[t];
            return "__lodash_hash_undefined__" === n ? void 0 : n
        }
        return i.call(e, t) ? e[t] : void 0
    }
})), n.register("54CcG", (function(t, e) {
    var r = n("3Xd6n"),
        i = Object.prototype.hasOwnProperty;
    t.exports = function(t) {
        var e = this.__data__;
        return r ? void 0 !== e[t] : i.call(e, t)
    }
})), n.register("5M9hE", (function(t, e) {
    var r = n("3Xd6n");
    t.exports = function(t, e) {
        var n = this.__data__;
        return this.size += this.has(t) ? 0 : 1, n[t] = r && void 0 === e ? "__lodash_hash_undefined__" : e, this
    }
})), n.register("gPKWs", (function(t, e) {
    var r = n("jChyS");
    t.exports = function(t) {
        var e = r(this, t).delete(t);
        return this.size -= e ? 1 : 0, e
    }
})), n.register("jChyS", (function(t, e) {
    var r = n("5db0r");
    t.exports = function(t, e) {
        var n = t.__data__;
        return r(e) ? n["string" == typeof e ? "string" : "hash"] : n.map
    }
})), n.register("5db0r", (function(t, e) {
    t.exports = function(t) {
        var e = typeof t;
        return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
    }
})), n.register("acYZ4", (function(t, e) {
    var r = n("jChyS");
    t.exports = function(t) {
        return r(this, t).get(t)
    }
})), n.register("8NOKq", (function(t, e) {
    var r = n("jChyS");
    t.exports = function(t) {
        return r(this, t).has(t)
    }
})), n.register("8j5cD", (function(t, e) {
    var r = n("jChyS");
    t.exports = function(t, e) {
        var n = r(this, t),
            i = n.size;
        return n.set(t, e), this.size += n.size == i ? 0 : 1, this
    }
})), n.register("kpUhJ", (function(t, e) {
    var r = n("fn9UE"),
        i = n("gcdjS"),
        o = n("cCyos");
    t.exports = function(t, e, n, a, u, c) {
        var s = 1 & n,
            l = t.length,
            f = e.length;
        if (l != f && !(s && f > l)) return !1;
        var p = c.get(t),
            h = c.get(e);
        if (p && h) return p == e && h == t;
        var d = -1,
            y = !0,
            g = 2 & n ? new r : void 0;
        for (c.set(t, e), c.set(e, t); ++d < l;) {
            var v = t[d],
                m = e[d];
            if (a) var b = s ? a(m, v, d, e, t, c) : a(v, m, d, t, e, c);
            if (void 0 !== b) {
                if (b) continue;
                y = !1;
                break
            }
            if (g) {
                if (!i(e, (function(t, e) {
                        if (!o(g, e) && (v === t || u(v, t, n, a, c))) return g.push(e)
                    }))) {
                    y = !1;
                    break
                }
            } else if (v !== m && !u(v, m, n, a, c)) {
                y = !1;
                break
            }
        }
        return c.delete(t), c.delete(e), y
    }
})), n.register("fn9UE", (function(t, e) {
    var r = n("jhqEi"),
        i = n("86a6U"),
        o = n("8k8Ch");

    function a(t) {
        var e = -1,
            n = null == t ? 0 : t.length;
        for (this.__data__ = new r; ++e < n;) this.add(t[e])
    }
    a.prototype.add = a.prototype.push = i, a.prototype.has = o, t.exports = a
})), n.register("86a6U", (function(t, e) {
    t.exports = function(t) {
        return this.__data__.set(t, "__lodash_hash_undefined__"), this
    }
})), n.register("8k8Ch", (function(t, e) {
    t.exports = function(t) {
        return this.__data__.has(t)
    }
})), n.register("gcdjS", (function(t, e) {
    t.exports = function(t, e) {
        for (var r = -1, n = null == t ? 0 : t.length; ++r < n;)
            if (e(t[r], r, t)) return !0;
        return !1
    }
})), n.register("cCyos", (function(t, e) {
    t.exports = function(t, e) {
        return t.has(e)
    }
})), n.register("cyyk1", (function(t, e) {
    var r = n("9EM1e"),
        i = n("2Okl7"),
        o = n("4P3Ie"),
        a = n("kpUhJ"),
        u = n("5Gv3B"),
        c = n("5qfZA"),
        s = r ? r.prototype : void 0,
        l = s ? s.valueOf : void 0;
    t.exports = function(t, e, r, n, s, f, p) {
        switch (r) {
            case "[object DataView]":
                if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
                t = t.buffer, e = e.buffer;
            case "[object ArrayBuffer]":
                return !(t.byteLength != e.byteLength || !f(new i(t), new i(e)));
            case "[object Boolean]":
            case "[object Date]":
            case "[object Number]":
                return o(+t, +e);
            case "[object Error]":
                return t.name == e.name && t.message == e.message;
            case "[object RegExp]":
            case "[object String]":
                return t == e + "";
            case "[object Map]":
                var h = u;
            case "[object Set]":
                var d = 1 & n;
                if (h || (h = c), t.size != e.size && !d) return !1;
                var y = p.get(t);
                if (y) return y == e;
                n |= 2, p.set(t, e);
                var g = a(h(t), h(e), n, s, f, p);
                return p.delete(t), g;
            case "[object Symbol]":
                if (l) return l.call(t) == l.call(e)
        }
        return !1
    }
})), n.register("2Okl7", (function(t, e) {
    var r = n("3y6Vt").Uint8Array;
    t.exports = r
})), n.register("5Gv3B", (function(t, e) {
    t.exports = function(t) {
        var e = -1,
            r = Array(t.size);
        return t.forEach((function(t, n) {
            r[++e] = [n, t]
        })), r
    }
})), n.register("5qfZA", (function(t, e) {
    t.exports = function(t) {
        var e = -1,
            r = Array(t.size);
        return t.forEach((function(t) {
            r[++e] = t
        })), r
    }
})), n.register("bGO5F", (function(t, e) {
    var r = n("b2f4J"),
        i = Object.prototype.hasOwnProperty;
    t.exports = function(t, e, n, o, a, u) {
        var c = 1 & n,
            s = r(t),
            l = s.length;
        if (l != r(e).length && !c) return !1;
        for (var f = l; f--;) {
            var p = s[f];
            if (!(c ? p in e : i.call(e, p))) return !1
        }
        var h = u.get(t),
            d = u.get(e);
        if (h && d) return h == e && d == t;
        var y = !0;
        u.set(t, e), u.set(e, t);
        for (var g = c; ++f < l;) {
            var v = t[p = s[f]],
                m = e[p];
            if (o) var b = c ? o(m, v, p, e, t, u) : o(v, m, p, t, e, u);
            if (!(void 0 === b ? v === m || a(v, m, n, o, u) : b)) {
                y = !1;
                break
            }
            g || (g = "constructor" == p)
        }
        if (y && !g) {
            var x = t.constructor,
                w = e.constructor;
            x == w || !("constructor" in t) || !("constructor" in e) || "function" == typeof x && x instanceof x && "function" == typeof w && w instanceof w || (y = !1)
        }
        return u.delete(t), u.delete(e), y
    }
})), n.register("b2f4J", (function(t, e) {
    var r = n("69G7d"),
        i = n("f1NcN"),
        o = n("7hKz6");
    t.exports = function(t) {
        return r(t, o, i)
    }
})), n.register("69G7d", (function(t, e) {
    var r = n("aRECI"),
        i = n("42aAU");
    t.exports = function(t, e, n) {
        var o = e(t);
        return i(t) ? o : r(o, n(t))
    }
})), n.register("aRECI", (function(t, e) {
    t.exports = function(t, e) {
        for (var r = -1, n = e.length, i = t.length; ++r < n;) t[i + r] = e[r];
        return t
    }
})), n.register("42aAU", (function(t, e) {
    var r = Array.isArray;
    t.exports = r
})), n.register("f1NcN", (function(t, e) {
    var r = n("dQPB4"),
        i = n("j9iFg"),
        o = Object.prototype.propertyIsEnumerable,
        a = Object.getOwnPropertySymbols,
        u = a ? function(t) {
            return null == t ? [] : (t = Object(t), r(a(t), (function(e) {
                return o.call(t, e)
            })))
        } : i;
    t.exports = u
})), n.register("dQPB4", (function(t, e) {
    t.exports = function(t, e) {
        for (var r = -1, n = null == t ? 0 : t.length, i = 0, o = []; ++r < n;) {
            var a = t[r];
            e(a, r, t) && (o[i++] = a)
        }
        return o
    }
})), n.register("j9iFg", (function(t, e) {
    t.exports = function() {
        return []
    }
})), n.register("7hKz6", (function(t, e) {
    var r = n("4EHdk"),
        i = n("6yxtk"),
        o = n("dQPJi");
    t.exports = function(t) {
        return o(t) ? r(t) : i(t)
    }
})), n.register("4EHdk", (function(t, e) {
    var r = n("a8r9Q"),
        i = n("8dBnj"),
        o = n("42aAU"),
        a = n("c42kK"),
        u = n("9v4jx"),
        c = n("2y7dI"),
        s = Object.prototype.hasOwnProperty;
    t.exports = function(t, e) {
        var n = o(t),
            l = !n && i(t),
            f = !n && !l && a(t),
            p = !n && !l && !f && c(t),
            h = n || l || f || p,
            d = h ? r(t.length, String) : [],
            y = d.length;
        for (var g in t) !e && !s.call(t, g) || h && ("length" == g || f && ("offset" == g || "parent" == g) || p && ("buffer" == g || "byteLength" == g || "byteOffset" == g) || u(g, y)) || d.push(g);
        return d
    }
})), n.register("a8r9Q", (function(t, e) {
    t.exports = function(t, e) {
        for (var r = -1, n = Array(t); ++r < t;) n[r] = e(r);
        return n
    }
})), n.register("8dBnj", (function(t, e) {
    var r = n("ciMhq"),
        i = n("cYleL"),
        o = Object.prototype,
        a = o.hasOwnProperty,
        u = o.propertyIsEnumerable,
        c = r(function() {
            return arguments
        }()) ? r : function(t) {
            return i(t) && a.call(t, "callee") && !u.call(t, "callee")
        };
    t.exports = c
})), n.register("ciMhq", (function(t, e) {
    var r = n("ji23K"),
        i = n("cYleL");
    t.exports = function(t) {
        return i(t) && "[object Arguments]" == r(t)
    }
})), n.register("cYleL", (function(t, e) {
    t.exports = function(t) {
        return null != t && "object" == typeof t
    }
})), n.register("c42kK", (function(t, e) {
    var r = n("3y6Vt"),
        i = n("6Xmdo"),
        o = e && !e.nodeType && e,
        a = o && t && !t.nodeType && t,
        u = a && a.exports === o ? r.Buffer : void 0,
        c = (u ? u.isBuffer : void 0) || i;
    t.exports = c
})), n.register("6Xmdo", (function(t, e) {
    t.exports = function() {
        return !1
    }
})), n.register("9v4jx", (function(t, e) {
    var r = /^(?:0|[1-9]\d*)$/;
    t.exports = function(t, e) {
        var n = typeof t;
        return !!(e = null == e ? 9007199254740991 : e) && ("number" == n || "symbol" != n && r.test(t)) && t > -1 && t % 1 == 0 && t < e
    }
})), n.register("2y7dI", (function(t, e) {
    var r = n("jy1QX"),
        i = n("hDIpG"),
        o = n("74BqS"),
        a = o && o.isTypedArray,
        u = a ? i(a) : r;
    t.exports = u
})), n.register("jy1QX", (function(t, e) {
    var r = n("ji23K"),
        i = n("393S6"),
        o = n("cYleL"),
        a = {};
    a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1, t.exports = function(t) {
        return o(t) && i(t.length) && !!a[r(t)]
    }
})), n.register("393S6", (function(t, e) {
    t.exports = function(t) {
        return "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991
    }
})), n.register("hDIpG", (function(t, e) {
    t.exports = function(t) {
        return function(e) {
            return t(e)
        }
    }
})), n.register("74BqS", (function(t, e) {
    var r = n("1uaOL"),
        i = e && !e.nodeType && e,
        o = i && t && !t.nodeType && t,
        a = o && o.exports === i && r.process,
        u = function() {
            try {
                var t = o && o.require && o.require("util").types;
                return t || a && a.binding && a.binding("util")
            } catch (t) {}
        }();
    t.exports = u
})), n.register("6yxtk", (function(t, e) {
    var r = n("hD4mg"),
        i = n("9NhLO"),
        o = Object.prototype.hasOwnProperty;
    t.exports = function(t) {
        if (!r(t)) return i(t);
        var e = [];
        for (var n in Object(t)) o.call(t, n) && "constructor" != n && e.push(n);
        return e
    }
})), n.register("hD4mg", (function(t, e) {
    var r = Object.prototype;
    t.exports = function(t) {
        var e = t && t.constructor;
        return t === ("function" == typeof e && e.prototype || r)
    }
})), n.register("9NhLO", (function(t, e) {
    var r = n("1XXyM")(Object.keys, Object);
    t.exports = r
})), n.register("1XXyM", (function(t, e) {
    t.exports = function(t, e) {
        return function(r) {
            return t(e(r))
        }
    }
})), n.register("dQPJi", (function(t, e) {
    var r = n("hRZ1R"),
        i = n("393S6");
    t.exports = function(t) {
        return null != t && i(t.length) && !r(t)
    }
})), n.register("j8Tfu", (function(t, e) {
    var r = n("g5iey"),
        i = n("92eas"),
        o = n("i8Irr"),
        a = n("90Lso"),
        u = n("hQO6X"),
        c = n("ji23K"),
        s = n("l7QjI"),
        l = "[object Map]",
        f = "[object Promise]",
        p = "[object Set]",
        h = "[object WeakMap]",
        d = "[object DataView]",
        y = s(r),
        g = s(i),
        v = s(o),
        m = s(a),
        b = s(u),
        x = c;
    (r && x(new r(new ArrayBuffer(1))) != d || i && x(new i) != l || o && x(o.resolve()) != f || a && x(new a) != p || u && x(new u) != h) && (x = function(t) {
        var e = c(t),
            r = "[object Object]" == e ? t.constructor : void 0,
            n = r ? s(r) : "";
        if (n) switch (n) {
            case y:
                return d;
            case g:
                return l;
            case v:
                return f;
            case m:
                return p;
            case b:
                return h
        }
        return e
    }), t.exports = x
})), n.register("g5iey", (function(t, e) {
    var r = n("ivjYw")(n("3y6Vt"), "DataView");
    t.exports = r
})), n.register("i8Irr", (function(t, e) {
    var r = n("ivjYw")(n("3y6Vt"), "Promise");
    t.exports = r
})), n.register("90Lso", (function(t, e) {
    var r = n("ivjYw")(n("3y6Vt"), "Set");
    t.exports = r
})), n.register("hQO6X", (function(t, e) {
    var r = n("ivjYw")(n("3y6Vt"), "WeakMap");
    t.exports = r
})), n.register("14qw3", (function(t, r) {
    e(t.exports, "default", (function() {
        return o
    })), e(t.exports, "translateStyle", (function() {
        return n("45NXc").translateStyle
    }));
    var i = n("ewhrO"),
        o = (n("770uP"), n("45NXc"), n("1COCD"), i.default)
})), n.register("ewhrO", (function(r, i) {
    e(r.exports, "default", (function() {
        return A
    }));
    var o = n("fywoC"),
        a = n("djNMu"),
        u = n("liA9w"),
        c = n("7taij"),
        s = n("770uP"),
        l = n("g6Nwf"),
        f = n("45NXc");

    function p(t) {
        return p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, p(t)
    }

    function h(t, e) {
        if (null == t) return {};
        var r, n, i = function(t, e) {
            if (null == t) return {};
            var r, n, i = {},
                o = Object.keys(t);
            for (n = 0; n < o.length; n++) r = o[n], e.indexOf(r) >= 0 || (i[r] = t[r]);
            return i
        }(t, e);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(t);
            for (n = 0; n < o.length; n++) r = o[n], e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (i[r] = t[r])
        }
        return i
    }

    function d(t) {
        return function(t) {
            if (Array.isArray(t)) return y(t)
        }(t) || function(t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
        }(t) || function(t, e) {
            if (!t) return;
            if ("string" == typeof t) return y(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(t);
            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return y(t, e)
        }(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function y(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n
    }

    function g(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), r.push.apply(r, n)
        }
        return r
    }

    function v(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2 ? g(Object(r), !0).forEach((function(e) {
                m(t, e, r[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : g(Object(r)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
            }))
        }
        return t
    }

    function m(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = r, t
    }

    function b(t, e) {
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    function x(t, e) {
        return x = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        }, x(t, e)
    }

    function w(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var r, n = _(t);
            if (e) {
                var i = _(this).constructor;
                r = Reflect.construct(n, arguments, i)
            } else r = n.apply(this, arguments);
            return O(this, r)
        }
    }

    function O(t, e) {
        return !e || "object" !== p(e) && "function" != typeof e ? j(t) : e
    }

    function j(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function _(t) {
        return _ = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }, _(t)
    }
    var S = function(e) {
        ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && x(t, e)
        }(p, e);
        var r, n, i, a = w(p);

        function p(t, e) {
            var r;
            ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, p);
            var n = (r = a.call(this, t, e)).props,
                i = n.isActive,
                o = n.attributeName,
                u = n.from,
                c = n.to,
                s = n.steps,
                l = n.children;
            if (r.handleStyleChange = r.handleStyleChange.bind(j(r)), r.changeStyle = r.changeStyle.bind(j(r)), !i) return r.state = {
                style: {}
            }, "function" == typeof l && (r.state = {
                style: c
            }), O(r);
            if (s && s.length) r.state = {
                style: s[0].style
            };
            else if (u) {
                if ("function" == typeof l) return r.state = {
                    style: u
                }, O(r);
                r.state = {
                    style: o ? m({}, o, u) : u
                }
            } else r.state = {
                style: {}
            };
            return r
        }
        return r = p, (n = [{
            key: "componentDidMount",
            value: function() {
                var t = this.props,
                    e = t.isActive,
                    r = t.canBegin;
                this.mounted = !0, e && r && this.runAnimation(this.props)
            }
        }, {
            key: "componentDidUpdate",
            value: function(t) {
                var e = this.props,
                    r = e.isActive,
                    n = e.canBegin,
                    i = e.attributeName,
                    o = e.shouldReAnimate;
                if (n)
                    if (r) {
                        if (!((0, u.deepEqual)(t.to, this.props.to) && t.canBegin && t.isActive)) {
                            var a = !t.canBegin || !t.isActive;
                            this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
                            var c = a || o ? this.props.from : t.to;
                            if (this.state && this.state.style) {
                                var s = {
                                    style: i ? m({}, i, c) : c
                                };
                                (i && this.state.style[i] !== c || !i && this.state.style !== c) && this.setState(s)
                            }
                            this.runAnimation(v(v({}, this.props), {}, {
                                from: c,
                                begin: 0
                            }))
                        }
                    } else {
                        var l = {
                            style: i ? m({}, i, this.props.to) : this.props.to
                        };
                        this.state && this.state.style && (i && this.state.style[i] !== this.props.to || !i && this.state.style !== this.props.to) && this.setState(l)
                    }
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                this.mounted = !1, this.unSubscribe && this.unSubscribe(), this.manager && (this.manager.stop(), this.manager = null), this.stopJSAnimation && this.stopJSAnimation()
            }
        }, {
            key: "runJSAnimation",
            value: function(t) {
                var e = this,
                    r = t.from,
                    n = t.to,
                    i = t.duration,
                    o = t.easing,
                    a = t.begin,
                    u = t.onAnimationEnd,
                    c = t.onAnimationStart,
                    f = (0, l.default)(r, n, (0, s.configEasing)(o), i, this.changeStyle);
                this.manager.start([c, a, function() {
                    e.stopJSAnimation = f()
                }, i, u])
            }
        }, {
            key: "runStepAnimation",
            value: function(t) {
                var e = this,
                    r = t.steps,
                    n = t.begin,
                    i = t.onAnimationStart,
                    o = r[0],
                    a = o.style,
                    u = o.duration,
                    c = void 0 === u ? 0 : u;
                return this.manager.start([i].concat(d(r.reduce((function(t, n, i) {
                    if (0 === i) return t;
                    var o = n.duration,
                        a = n.easing,
                        u = void 0 === a ? "ease" : a,
                        c = n.style,
                        s = n.properties,
                        l = n.onAnimationEnd,
                        p = i > 0 ? r[i - 1] : n,
                        h = s || Object.keys(c);
                    if ("function" == typeof u || "spring" === u) return [].concat(d(t), [e.runJSAnimation.bind(e, {
                        from: p.style,
                        to: c,
                        duration: o,
                        easing: u
                    }), o]);
                    var y = (0, f.getTransitionVal)(h, o, u),
                        g = v(v(v({}, p.style), c), {}, {
                            transition: y
                        });
                    return [].concat(d(t), [g, o, l]).filter(f.identity)
                }), [a, Math.max(c, n)])), [t.onAnimationEnd]))
            }
        }, {
            key: "runAnimation",
            value: function(t) {
                this.manager || (this.manager = (0, c.default)());
                var e = t.begin,
                    r = t.duration,
                    n = t.attributeName,
                    i = t.to,
                    o = t.easing,
                    a = t.onAnimationStart,
                    u = t.onAnimationEnd,
                    s = t.steps,
                    l = t.children,
                    p = this.manager;
                if (this.unSubscribe = p.subscribe(this.handleStyleChange), "function" != typeof o && "function" != typeof l && "spring" !== o)
                    if (s.length > 1) this.runStepAnimation(t);
                    else {
                        var h = n ? m({}, n, i) : i,
                            d = (0, f.getTransitionVal)(Object.keys(h), r, o);
                        p.start([a, e, v(v({}, h), {}, {
                            transition: d
                        }), r, u])
                    }
                else this.runJSAnimation(t)
            }
        }, {
            key: "handleStyleChange",
            value: function(t) {
                this.changeStyle(t)
            }
        }, {
            key: "changeStyle",
            value: function(t) {
                this.mounted && this.setState({
                    style: t
                })
            }
        }, {
            key: "render",
            value: function() {
                var e = this.props,
                    r = e.children,
                    n = (e.begin, e.duration, e.attributeName, e.easing, e.isActive),
                    i = (e.steps, e.from, e.to, e.canBegin, e.onAnimationEnd, e.shouldReAnimate, e.onAnimationReStart, h(e, ["children", "begin", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"])),
                    a = o.Children.count(r),
                    u = (0, f.translateStyle)(this.state.style);
                if ("function" == typeof r) return r(u);
                if (!n || 0 === a) return r;
                var c = function(t) {
                    var e = t.props,
                        r = e.style,
                        n = void 0 === r ? {} : r,
                        a = e.className;
                    return (0, o.cloneElement)(t, v(v({}, i), {}, {
                        style: v(v({}, n), u),
                        className: a
                    }))
                };
                return 1 === a ? c(o.Children.only(r)) : t(o).createElement("div", null, o.Children.map(r, (function(t) {
                    return c(t)
                })))
            }
        }]) && b(r.prototype, n), i && b(r, i), p
    }(o.PureComponent);
    S.displayName = "Animate", S.propTypes = {
        from: t(a).oneOfType([t(a).object, t(a).string]),
        to: t(a).oneOfType([t(a).object, t(a).string]),
        attributeName: t(a).string,
        duration: t(a).number,
        begin: t(a).number,
        easing: t(a).oneOfType([t(a).string, t(a).func]),
        steps: t(a).arrayOf(t(a).shape({
            duration: t(a).number.isRequired,
            style: t(a).object.isRequired,
            easing: t(a).oneOfType([t(a).oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]), t(a).func]),
            properties: t(a).arrayOf("string"),
            onAnimationEnd: t(a).func
        })),
        children: t(a).oneOfType([t(a).node, t(a).func]),
        isActive: t(a).bool,
        canBegin: t(a).bool,
        onAnimationEnd: t(a).func,
        shouldReAnimate: t(a).bool,
        onAnimationStart: t(a).func,
        onAnimationReStart: t(a).func
    }, S.defaultProps = {
        begin: 0,
        duration: 1e3,
        from: "",
        to: "",
        attributeName: "",
        easing: "ease",
        isActive: !0,
        canBegin: !0,
        steps: [],
        onAnimationEnd: function() {},
        onAnimationStart: function() {}
    };
    var A = S
})), n.register("liA9w", (function(t, e) {
    t.exports,
        function(t) {
            var e = "function" == typeof WeakSet,
                r = Object.keys;

            function n(t, e) {
                return t === e || t != t && e != e
            }

            function i(t) {
                return t.constructor === Object || null == t.constructor
            }

            function o(t) {
                return !!t && "function" == typeof t.then
            }

            function a(t) {
                return !(!t || !t.$$typeof)
            }

            function u() {
                var t = [];
                return {
                    add: function(e) {
                        t.push(e)
                    },
                    has: function(e) {
                        return -1 !== t.indexOf(e)
                    }
                }
            }
            var c = e ? function() {
                return new WeakSet
            } : u;

            function s(t) {
                return function(e) {
                    var r = t || e;
                    return function(t, e, n) {
                        void 0 === n && (n = c());
                        var i = !!t && "object" == typeof t,
                            o = !!e && "object" == typeof e;
                        if (i || o) {
                            var a = i && n.has(t),
                                u = o && n.has(e);
                            if (a || u) return a && u;
                            i && n.add(t), o && n.add(e)
                        }
                        return r(t, e, n)
                    }
                }
            }

            function l(t, e, r, n) {
                var i = t.length;
                if (e.length !== i) return !1;
                for (; i-- > 0;)
                    if (!r(t[i], e[i], n)) return !1;
                return !0
            }

            function f(t, e, r, n) {
                var i = t.size === e.size;
                if (i && t.size) {
                    var o = {};
                    t.forEach((function(t, a) {
                        if (i) {
                            var u = !1,
                                c = 0;
                            e.forEach((function(e, i) {
                                u || o[c] || (u = r(a, i, n) && r(t, e, n)) && (o[c] = !0), c++
                            })), i = u
                        }
                    }))
                }
                return i
            }
            var p = "_owner",
                h = Function.prototype.bind.call(Function.prototype.call, Object.prototype.hasOwnProperty);

            function d(t, e, n, i) {
                var o = r(t),
                    u = o.length;
                if (r(e).length !== u) return !1;
                if (u)
                    for (var c = void 0; u-- > 0;) {
                        if ((c = o[u]) === p) {
                            var s = a(t),
                                l = a(e);
                            if ((s || l) && s !== l) return !1
                        }
                        if (!h(e, c) || !n(t[c], e[c], i)) return !1
                    }
                return !0
            }

            function y(t, e) {
                return t.source === e.source && t.global === e.global && t.ignoreCase === e.ignoreCase && t.multiline === e.multiline && t.unicode === e.unicode && t.sticky === e.sticky && t.lastIndex === e.lastIndex
            }

            function g(t, e, r, n) {
                var i = t.size === e.size;
                if (i && t.size) {
                    var o = {};
                    t.forEach((function(t) {
                        if (i) {
                            var a = !1,
                                u = 0;
                            e.forEach((function(e) {
                                a || o[u] || (a = r(t, e, n)) && (o[u] = !0), u++
                            })), i = a
                        }
                    }))
                }
                return i
            }
            var v = "function" == typeof Map,
                m = "function" == typeof Set;

            function b(t) {
                var e = "function" == typeof t ? t(r) : r;

                function r(t, r, a) {
                    if (t === r) return !0;
                    if (t && r && "object" == typeof t && "object" == typeof r) {
                        if (i(t) && i(r)) return d(t, r, e, a);
                        var u = Array.isArray(t),
                            c = Array.isArray(r);
                        return u || c ? u === c && l(t, r, e, a) : (u = t instanceof Date, c = r instanceof Date, u || c ? u === c && n(t.getTime(), r.getTime()) : (u = t instanceof RegExp, c = r instanceof RegExp, u || c ? u === c && y(t, r) : o(t) || o(r) ? t === r : v && (u = t instanceof Map, c = r instanceof Map, u || c) ? u === c && f(t, r, e, a) : m && (u = t instanceof Set, c = r instanceof Set, u || c) ? u === c && g(t, r, e, a) : d(t, r, e, a)))
                    }
                    return t != t && r != r
                }
                return r
            }
            var x = b(),
                w = b((function() {
                    return n
                })),
                O = b(s()),
                j = b(s(n));
            t.circularDeepEqual = O, t.circularShallowEqual = j, t.createCustomEqual = b, t.deepEqual = x, t.sameValueZeroEqual = n, t.shallowEqual = w, Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }(t.exports)
})), n.register("7taij", (function(t, r) {
    e(t.exports, "default", (function() {
        return c
    }));
    var i = n("kDR4D");

    function o(t) {
        return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, o(t)
    }

    function a(t) {
        return function(t) {
            if (Array.isArray(t)) return t
        }(t) || function(t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
        }(t) || function(t, e) {
            if (!t) return;
            if ("string" == typeof t) return u(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(t);
            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return u(t, e)
        }(t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function u(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n
    }

    function c() {
        var t = function() {
                return null
            },
            e = !1,
            r = function r(n) {
                if (!e) {
                    if (Array.isArray(n)) {
                        if (!n.length) return;
                        var u = a(n),
                            c = u[0],
                            s = u.slice(1);
                        return "number" == typeof c ? void(0, i.default)(r.bind(null, s), c) : (r(c), void(0, i.default)(r.bind(null, s)))
                    }
                    "object" === o(n) && t(n), "function" == typeof n && n()
                }
            };
        return {
            stop: function() {
                e = !0
            },
            start: function(t) {
                e = !1, r(t)
            },
            subscribe: function(e) {
                return t = e,
                    function() {
                        t = function() {
                            return null
                        }
                    }
            }
        }
    }
})), n.register("kDR4D", (function(t, r) {
    function n(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            r = -1,
            n = function n(i) {
                r < 0 && (r = i), i - r > e ? (t(i), r = -1) : requestAnimationFrame(n)
            };
        requestAnimationFrame(n)
    }
    e(t.exports, "default", (function() {
        return n
    }))
})), n.register("770uP", (function(t, r) {
    e(t.exports, "configEasing", (function() {
        return g
    }));
    var i = n("45NXc");

    function o(t, e) {
        return function(t) {
            if (Array.isArray(t)) return t
        }(t) || function(t, e) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
            var r = [],
                n = !0,
                i = !1,
                o = void 0;
            try {
                for (var a, u = t[Symbol.iterator](); !(n = (a = u.next()).done) && (r.push(a.value), !e || r.length !== e); n = !0);
            } catch (t) {
                i = !0, o = t
            } finally {
                try {
                    n || null == u.return || u.return()
                } finally {
                    if (i) throw o
                }
            }
            return r
        }(t, e) || u(t, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function a(t) {
        return function(t) {
            if (Array.isArray(t)) return c(t)
        }(t) || function(t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
        }(t) || u(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function u(t, e) {
        if (t) {
            if ("string" == typeof t) return c(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? c(t, e) : void 0
        }
    }

    function c(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n
    }
    var s = 1e-4,
        l = function(t, e) {
            return [0, 3 * t, 3 * e - 6 * t, 3 * t - 3 * e + 1]
        },
        f = function(t, e) {
            return t.map((function(t, r) {
                return t * Math.pow(e, r)
            })).reduce((function(t, e) {
                return t + e
            }))
        },
        p = function(t, e) {
            return function(r) {
                var n = l(t, e);
                return f(n, r)
            }
        },
        h = function(t, e) {
            return function(r) {
                var n = l(t, e),
                    i = [].concat(a(n.map((function(t, e) {
                        return t * e
                    })).slice(1)), [0]);
                return f(i, r)
            }
        },
        d = function() {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
            var n = e[0],
                a = e[1],
                u = e[2],
                c = e[3];
            if (1 === e.length) switch (e[0]) {
                case "linear":
                    n = 0, a = 0, u = 1, c = 1;
                    break;
                case "ease":
                    n = .25, a = .1, u = .25, c = 1;
                    break;
                case "ease-in":
                    n = .42, a = 0, u = 1, c = 1;
                    break;
                case "ease-out":
                    n = .42, a = 0, u = .58, c = 1;
                    break;
                case "ease-in-out":
                    n = 0, a = 0, u = .58, c = 1;
                    break;
                default:
                    var l = e[0].split("(");
                    if ("cubic-bezier" === l[0] && 4 === l[1].split(")")[0].split(",").length) {
                        var f = l[1].split(")")[0].split(",").map((function(t) {
                                return parseFloat(t)
                            })),
                            d = o(f, 4);
                        n = d[0], a = d[1], u = d[2], c = d[3]
                    } else(0, i.warn)(!1, "[configBezier]: arguments should be one of oneOf 'linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', instead received %s", e)
            }(0, i.warn)([n, u, a, c].every((function(t) {
                return "number" == typeof t && t >= 0 && t <= 1
            })), "[configBezier]: arguments should be x1, y1, x2, y2 of [0, 1] instead received %s", e);
            var y = p(n, u),
                g = p(a, c),
                v = h(n, u),
                m = function(t) {
                    return t > 1 ? 1 : t < 0 ? 0 : t
                },
                b = function(t) {
                    for (var e = t > 1 ? 1 : t, r = e, n = 0; n < 8; ++n) {
                        var i = y(r) - e,
                            o = v(r);
                        if (Math.abs(i - e) < s || o < s) return g(r);
                        r = m(r - i / o)
                    }
                    return g(r)
                };
            return b.isStepper = !1, b
        },
        y = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                e = t.stiff,
                r = void 0 === e ? 100 : e,
                n = t.damping,
                i = void 0 === n ? 8 : n,
                o = t.dt,
                a = void 0 === o ? 17 : o,
                u = function(t, e, n) {
                    var o = n + (-(t - e) * r - n * i) * a / 1e3,
                        u = n * a / 1e3 + t;
                    return Math.abs(u - e) < s && Math.abs(o) < s ? [e, 0] : [u, o]
                };
            return u.isStepper = !0, u.dt = a, u
        },
        g = function() {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
            var n = e[0];
            if ("string" == typeof n) switch (n) {
                case "ease":
                case "ease-in-out":
                case "ease-out":
                case "ease-in":
                case "linear":
                    return d(n);
                case "spring":
                    return y();
                default:
                    if ("cubic-bezier" === n.split("(")[0]) return d(n);
                    (0, i.warn)(!1, "[configEasing]: first argument should be one of 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', 'linear' and 'spring', instead  received %s", e)
            }
            return "function" == typeof n ? n : ((0, i.warn)(!1, "[configEasing]: first argument type should be function or string, instead received %s", e), null)
        }
})), n.register("45NXc", (function(t, r) {
    function n(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), r.push.apply(r, n)
        }
        return r
    }

    function i(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2 ? n(Object(r), !0).forEach((function(e) {
                o(t, e, r[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
            }))
        }
        return t
    }

    function o(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = r, t
    }
    e(t.exports, "getIntersectionKeys", (function() {
        return s
    })), e(t.exports, "identity", (function() {
        return l
    })), e(t.exports, "mapObject", (function() {
        return f
    })), e(t.exports, "translateStyle", (function() {
        return p
    })), e(t.exports, "getTransitionVal", (function() {
        return h
    })), e(t.exports, "warn", (function() {
        return d
    }));
    var a = ["Webkit", "Moz", "O", "ms"],
        u = ["-webkit-", "-moz-", "-o-", "-ms-"],
        c = ["transform", "transformOrigin", "transition"],
        s = function(t, e) {
            return [Object.keys(t), Object.keys(e)].reduce((function(t, e) {
                return t.filter((function(t) {
                    return e.includes(t)
                }))
            }))
        },
        l = function(t) {
            return t
        },
        f = function(t, e) {
            return Object.keys(e).reduce((function(r, n) {
                return i(i({}, r), {}, o({}, n, t(n, e[n])))
            }), {})
        },
        p = function(t) {
            return Object.keys(t).reduce((function(t, e) {
                return i(i({}, t), function(t, e) {
                    if (-1 === c.indexOf(t)) return o({}, t, e);
                    var r = "transition" === t,
                        n = t.replace(/(\w)/, (function(t) {
                            return t.toUpperCase()
                        })),
                        s = e;
                    return a.reduce((function(t, a, c) {
                        return r && (s = e.replace(/(transform|transform-origin)/gim, "".concat(u[c], "$1"))), i(i({}, t), {}, o({}, a + n, s))
                    }), {})
                }(e, t[e]))
            }), t)
        },
        h = function(t, e, r) {
            return t.map((function(t) {
                return "".concat((n = t, n.replace(/([A-Z])/g, (function(t) {
                    return "-".concat(t.toLowerCase())
                }))), " ").concat(e, "ms ").concat(r);
                var n
            })).join(",")
        },
        d = function(t, e, r, n, i, o, a, u) {}
})), n.register("g6Nwf", (function(t, r) {
    e(t.exports, "default", (function() {
        return y
    }));
    var i = n("45NXc");

    function o(t) {
        return function(t) {
            if (Array.isArray(t)) return f(t)
        }(t) || function(t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
        }(t) || l(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function a(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), r.push.apply(r, n)
        }
        return r
    }

    function u(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2 ? a(Object(r), !0).forEach((function(e) {
                c(t, e, r[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
            }))
        }
        return t
    }

    function c(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = r, t
    }

    function s(t, e) {
        return function(t) {
            if (Array.isArray(t)) return t
        }(t) || function(t, e) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
            var r = [],
                n = !0,
                i = !1,
                o = void 0;
            try {
                for (var a, u = t[Symbol.iterator](); !(n = (a = u.next()).done) && (r.push(a.value), !e || r.length !== e); n = !0);
            } catch (t) {
                i = !0, o = t
            } finally {
                try {
                    n || null == u.return || u.return()
                } finally {
                    if (i) throw o
                }
            }
            return r
        }(t, e) || l(t, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function l(t, e) {
        if (t) {
            if ("string" == typeof t) return f(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? f(t, e) : void 0
        }
    }

    function f(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n
    }
    var p = function(t, e, r) {
            return t + (e - t) * r
        },
        h = function(t) {
            return t.from !== t.to
        },
        d = function t(e, r, n) {
            var o = (0, i.mapObject)((function(t, r) {
                if (h(r)) {
                    var n = s(e(r.from, r.to, r.velocity), 2),
                        i = n[0],
                        o = n[1];
                    return u(u({}, r), {}, {
                        from: i,
                        velocity: o
                    })
                }
                return r
            }), r);
            return n < 1 ? (0, i.mapObject)((function(t, e) {
                return h(e) ? u(u({}, e), {}, {
                    velocity: p(e.velocity, o[t].velocity, n),
                    from: p(e.from, o[t].from, n)
                }) : e
            }), r) : t(e, o, n - 1)
        },
        y = function(t, e, r, n, a) {
            var s, l, f = (0, i.getIntersectionKeys)(t, e),
                y = f.reduce((function(r, n) {
                    return u(u({}, r), {}, c({}, n, [t[n], e[n]]))
                }), {}),
                g = f.reduce((function(r, n) {
                    return u(u({}, r), {}, c({}, n, {
                        from: t[n],
                        velocity: 0,
                        to: e[n]
                    }))
                }), {}),
                v = -1,
                m = function() {
                    return null
                };
            return m = r.isStepper ? function(n) {
                    s || (s = n);
                    var o = (n - s) / r.dt;
                    g = d(r, g, o), a(u(u(u({}, t), e), (0, i.mapObject)((function(t, e) {
                        return e.from
                    }), g))), s = n, Object.values(g).filter(h).length && (v = requestAnimationFrame(m))
                } : function(c) {
                    l || (l = c);
                    var s = (c - l) / n,
                        f = (0, i.mapObject)((function(t, e) {
                            return p.apply(void 0, o(e).concat([r(s)]))
                        }), y);
                    if (a(u(u(u({}, t), e), f)), s < 1) v = requestAnimationFrame(m);
                    else {
                        var h = (0, i.mapObject)((function(t, e) {
                            return p.apply(void 0, o(e).concat([r(1)]))
                        }), y);
                        a(u(u(u({}, t), e), h))
                    }
                },
                function() {
                    return requestAnimationFrame(m),
                        function() {
                            cancelAnimationFrame(v)
                        }
                }
        }
})), n.register("1COCD", (function(e, r) {
    var i = n("fywoC"),
        o = n("69hpJ"),
        a = n("djNMu"),
        u = n("8hRF5");

    function c(e) {
        var r = e.component,
            n = e.children,
            a = e.appear,
            c = e.enter,
            s = e.leave;
        return t(i).createElement(o.TransitionGroup, {
            component: r
        }, i.Children.map(n, (function(e, r) {
            return t(i).createElement(u.default, {
                appearOptions: a,
                enterOptions: c,
                leaveOptions: s,
                key: "child-".concat(r)
            }, e)
        })))
    }
    c.propTypes = {
        appear: t(a).object,
        enter: t(a).object,
        leave: t(a).object,
        children: t(a).oneOfType([t(a).array, t(a).element]),
        component: t(a).any
    }, c.defaultProps = {
        component: "span"
    }
})), n.register("8hRF5", (function(r, i) {
    e(r.exports, "default", (function() {
        return j
    }));
    var o = n("fywoC"),
        a = n("69hpJ"),
        u = n("djNMu"),
        c = n("ewhrO");

    function s(t) {
        return s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, s(t)
    }

    function l() {
        return l = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
            }
            return t
        }, l.apply(this, arguments)
    }

    function f(t, e) {
        if (null == t) return {};
        var r, n, i = function(t, e) {
            if (null == t) return {};
            var r, n, i = {},
                o = Object.keys(t);
            for (n = 0; n < o.length; n++) r = o[n], e.indexOf(r) >= 0 || (i[r] = t[r]);
            return i
        }(t, e);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(t);
            for (n = 0; n < o.length; n++) r = o[n], e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (i[r] = t[r])
        }
        return i
    }

    function p(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), r.push.apply(r, n)
        }
        return r
    }

    function h(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2 ? p(Object(r), !0).forEach((function(e) {
                d(t, e, r[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : p(Object(r)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
            }))
        }
        return t
    }

    function d(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = r, t
    }

    function y(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function g(t, e) {
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    function v(t, e) {
        return v = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        }, v(t, e)
    }

    function m(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var r, n = x(t);
            if (e) {
                var i = x(this).constructor;
                r = Reflect.construct(n, arguments, i)
            } else r = n.apply(this, arguments);
            return b(this, r)
        }
    }

    function b(t, e) {
        return !e || "object" !== s(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function x(t) {
        return x = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }, x(t)
    }
    void 0 === Number.isFinite && (Number.isFinite = function(t) {
        return "number" == typeof t && isFinite(t)
    });
    var w = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                e = t.steps,
                r = t.duration;
            return e && e.length ? e.reduce((function(t, e) {
                return t + (Number.isFinite(e.duration) && e.duration > 0 ? e.duration : 0)
            }), 0) : Number.isFinite(r) ? r : 0
        },
        O = function(e) {
            ! function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && v(t, e)
            }(s, e);
            var r, n, i, u = m(s);

            function s() {
                var t;
                y(this, s);
                for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++) r[n] = arguments[n];
                return (t = u.call.apply(u, [this].concat(r))).state = {
                    isActive: !1
                }, t.handleEnter = function(e, r) {
                    var n = t.props,
                        i = n.appearOptions,
                        o = n.enterOptions;
                    t.handleStyleActive(r ? i : o)
                }, t.handleExit = function() {
                    t.handleStyleActive(t.props.leaveOptions)
                }, t
            }
            return r = s, (n = [{
                key: "handleStyleActive",
                value: function(t) {
                    if (t) {
                        var e = t.onAnimationEnd ? function() {
                            t.onAnimationEnd()
                        } : null;
                        this.setState(h(h({}, t), {}, {
                            onAnimationEnd: e,
                            isActive: !0
                        }))
                    }
                }
            }, {
                key: "parseTimeout",
                value: function() {
                    var t = this.props,
                        e = t.appearOptions,
                        r = t.enterOptions,
                        n = t.leaveOptions;
                    return w(e) + w(r) + w(n)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this,
                        r = this.props,
                        n = r.children,
                        i = (r.appearOptions, r.enterOptions, r.leaveOptions, f(r, ["children", "appearOptions", "enterOptions", "leaveOptions"]));
                    return t(o).createElement(a.Transition, l({}, i, {
                        onEnter: this.handleEnter,
                        onExit: this.handleExit,
                        timeout: this.parseTimeout()
                    }), (function() {
                        return t(o).createElement(c.default, e.state, o.Children.only(n))
                    }))
                }
            }]) && g(r.prototype, n), i && g(r, i), s
        }(o.Component);
    O.propTypes = {
        appearOptions: t(u).object,
        enterOptions: t(u).object,
        leaveOptions: t(u).object,
        children: t(u).element
    };
    var j = O
})), n.register("5W6gH", (function(r, i) {
    e(r.exports, "isInRectangle", (function() {
        return m
    })), e(r.exports, "Rectangle", (function() {
        return b
    }));
    var o = n("fywoC"),
        a = n("fe1on"),
        u = n("14qw3"),
        c = n("iquK2");

    function s(t) {
        return s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, s(t)
    }

    function l() {
        return l = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
            }
            return t
        }, l.apply(this, arguments)
    }

    function f(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function p(t, e) {
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    function h(t, e) {
        return h = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        }, h(t, e)
    }

    function d(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var r, n = g(t);
            if (e) {
                var i = g(this).constructor;
                r = Reflect.construct(n, arguments, i)
            } else r = n.apply(this, arguments);
            return y(this, r)
        }
    }

    function y(t, e) {
        return !e || "object" !== s(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function g(t) {
        return g = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }, g(t)
    }
    var v = function(t, e, r, n, i) {
            var o, a = Math.min(Math.abs(r) / 2, Math.abs(n) / 2),
                u = n >= 0 ? 1 : -1,
                c = r >= 0 ? 1 : -1,
                s = n >= 0 && r >= 0 || n < 0 && r < 0 ? 1 : 0;
            if (a > 0 && i instanceof Array) {
                for (var l = [0, 0, 0, 0], f = 0; f < 4; f++) l[f] = i[f] > a ? a : i[f];
                o = "M".concat(t, ",").concat(e + u * l[0]), l[0] > 0 && (o += "A ".concat(l[0], ",").concat(l[0], ",0,0,").concat(s, ",").concat(t + c * l[0], ",").concat(e)), o += "L ".concat(t + r - c * l[1], ",").concat(e), l[1] > 0 && (o += "A ".concat(l[1], ",").concat(l[1], ",0,0,").concat(s, ",\n        ").concat(t + r, ",").concat(e + u * l[1])), o += "L ".concat(t + r, ",").concat(e + n - u * l[2]), l[2] > 0 && (o += "A ".concat(l[2], ",").concat(l[2], ",0,0,").concat(s, ",\n        ").concat(t + r - c * l[2], ",").concat(e + n)), o += "L ".concat(t + c * l[3], ",").concat(e + n), l[3] > 0 && (o += "A ".concat(l[3], ",").concat(l[3], ",0,0,").concat(s, ",\n        ").concat(t, ",").concat(e + n - u * l[3])), o += "Z"
            } else if (a > 0 && i === +i && i > 0) {
                var p = Math.min(a, i);
                o = "M ".concat(t, ",").concat(e + u * p, "\n            A ").concat(p, ",").concat(p, ",0,0,").concat(s, ",").concat(t + c * p, ",").concat(e, "\n            L ").concat(t + r - c * p, ",").concat(e, "\n            A ").concat(p, ",").concat(p, ",0,0,").concat(s, ",").concat(t + r, ",").concat(e + u * p, "\n            L ").concat(t + r, ",").concat(e + n - u * p, "\n            A ").concat(p, ",").concat(p, ",0,0,").concat(s, ",").concat(t + r - c * p, ",").concat(e + n, "\n            L ").concat(t + c * p, ",").concat(e + n, "\n            A ").concat(p, ",").concat(p, ",0,0,").concat(s, ",").concat(t, ",").concat(e + n - u * p, " Z")
            } else o = "M ".concat(t, ",").concat(e, " h ").concat(r, " v ").concat(n, " h ").concat(-r, " Z");
            return o
        },
        m = function(t, e) {
            if (!t || !e) return !1;
            var r = t.x,
                n = t.y,
                i = e.x,
                o = e.y,
                a = e.width,
                u = e.height;
            if (Math.abs(a) > 0 && Math.abs(u) > 0) {
                var c = Math.min(i, i + a),
                    s = Math.max(i, i + a),
                    l = Math.min(o, o + u),
                    f = Math.max(o, o + u);
                return r >= c && r <= s && n >= l && n <= f
            }
            return !1
        },
        b = function(e) {
            ! function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && h(t, e)
            }(y, e);
            var r, n, i, s = d(y);

            function y() {
                var t;
                f(this, y);
                for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++) r[n] = arguments[n];
                return (t = s.call.apply(s, [this].concat(r))).state = {
                    totalLength: -1
                }, t.node = void 0, t
            }
            return r = y, (n = [{
                key: "componentDidMount",
                value: function() {
                    if (this.node && this.node.getTotalLength) try {
                        var t = this.node.getTotalLength();
                        t && this.setState({
                            totalLength: t
                        })
                    } catch (t) {}
                }
            }, {
                key: "render",
                value: function() {
                    var e = this,
                        r = this.props,
                        n = r.x,
                        i = r.y,
                        s = r.width,
                        f = r.height,
                        p = r.radius,
                        h = r.className,
                        d = this.state.totalLength,
                        y = this.props,
                        g = y.animationEasing,
                        m = y.animationDuration,
                        b = y.animationBegin,
                        x = y.isAnimationActive,
                        w = y.isUpdateAnimationActive;
                    if (n !== +n || i !== +i || s !== +s || f !== +f || 0 === s || 0 === f) return null;
                    var O = t(a)("recharts-rectangle", h);
                    return w ? t(o).createElement(u.default, {
                        canBegin: d > 0,
                        from: {
                            width: s,
                            height: f,
                            x: n,
                            y: i
                        },
                        to: {
                            width: s,
                            height: f,
                            x: n,
                            y: i
                        },
                        duration: m,
                        animationEasing: g,
                        isActive: w
                    }, (function(r) {
                        var n = r.width,
                            i = r.height,
                            a = r.x,
                            s = r.y;
                        return t(o).createElement(u.default, {
                            canBegin: d > 0,
                            from: "0px ".concat(-1 === d ? 1 : d, "px"),
                            to: "".concat(d, "px 0px"),
                            attributeName: "strokeDasharray",
                            begin: b,
                            duration: m,
                            isActive: x,
                            easing: g
                        }, t(o).createElement("path", l({}, (0, c.filterProps)(e.props, !0), {
                            className: O,
                            d: v(a, s, n, i, p),
                            ref: function(t) {
                                e.node = t
                            }
                        })))
                    })) : t(o).createElement("path", l({}, (0, c.filterProps)(this.props, !0), {
                        className: O,
                        d: v(n, i, s, f, p)
                    }))
                }
            }]) && p(r.prototype, n), i && p(r, i), y
        }(o.PureComponent);
    b.defaultProps = {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        radius: 0,
        isAnimationActive: !1,
        isUpdateAnimationActive: !1,
        animationBegin: 0,
        animationDuration: 1500,
        animationEasing: "ease"
    }
})), n.register("iquK2", (function(r, i) {
    e(r.exports, "filterProps", (function() {
        return f
    })), e(r.exports, "adaptEventHandlers", (function() {
        return p
    })), e(r.exports, "adaptEventsOfChild", (function() {
        return h
    }));
    var o = n("4TzB7"),
        a = n("fywoC");

    function u(t) {
        return u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, u(t)
    }
    var c = ["viewBox", "children"],
        s = ["aria-activedescendant", "aria-atomic", "aria-autocomplete", "aria-busy", "aria-checked", "aria-colcount", "aria-colindex", "aria-colspan", "aria-controls", "aria-current", "aria-describedby", "aria-details", "aria-disabled", "aria-errormessage", "aria-expanded", "aria-flowto", "aria-haspopup", "aria-hidden", "aria-invalid", "aria-keyshortcuts", "aria-label", "aria-labelledby", "aria-level", "aria-live", "aria-modal", "aria-multiline", "aria-multiselectable", "aria-orientation", "aria-owns", "aria-placeholder", "aria-posinset", "aria-pressed", "aria-readonly", "aria-relevant", "aria-required", "aria-roledescription", "aria-rowcount", "aria-rowindex", "aria-rowspan", "aria-selected", "aria-setsize", "aria-sort", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext", "className", "color", "height", "id", "lang", "max", "media", "method", "min", "name", "style", "target", "type", "width", "role", "tabIndex", "accentHeight", "accumulate", "additive", "alignmentBaseline", "allowReorder", "alphabetic", "amplitude", "arabicForm", "ascent", "attributeName", "attributeType", "autoReverse", "azimuth", "baseFrequency", "baselineShift", "baseProfile", "bbox", "begin", "bias", "by", "calcMode", "capHeight", "clip", "clipPath", "clipPathUnits", "clipRule", "colorInterpolation", "colorInterpolationFilters", "colorProfile", "colorRendering", "contentScriptType", "contentStyleType", "cursor", "cx", "cy", "d", "decelerate", "descent", "diffuseConstant", "direction", "display", "divisor", "dominantBaseline", "dur", "dx", "dy", "edgeMode", "elevation", "enableBackground", "end", "exponent", "externalResourcesRequired", "fill", "fillOpacity", "fillRule", "filter", "filterRes", "filterUnits", "floodColor", "floodOpacity", "focusable", "fontFamily", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontWeight", "format", "from", "fx", "fy", "g1", "g2", "glyphName", "glyphOrientationHorizontal", "glyphOrientationVertical", "glyphRef", "gradientTransform", "gradientUnits", "hanging", "horizAdvX", "horizOriginX", "href", "ideographic", "imageRendering", "in2", "in", "intercept", "k1", "k2", "k3", "k4", "k", "kernelMatrix", "kernelUnitLength", "kerning", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "letterSpacing", "lightingColor", "limitingConeAngle", "local", "markerEnd", "markerHeight", "markerMid", "markerStart", "markerUnits", "markerWidth", "mask", "maskContentUnits", "maskUnits", "mathematical", "mode", "numOctaves", "offset", "opacity", "operator", "order", "orient", "orientation", "origin", "overflow", "overlinePosition", "overlineThickness", "paintOrder", "panose1", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointerEvents", "points", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "r", "radius", "refX", "refY", "renderingIntent", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "restart", "result", "rotate", "rx", "ry", "seed", "shapeRendering", "slope", "spacing", "specularConstant", "specularExponent", "speed", "spreadMethod", "startOffset", "stdDeviation", "stemh", "stemv", "stitchTiles", "stopColor", "stopOpacity", "strikethroughPosition", "strikethroughThickness", "string", "stroke", "strokeDasharray", "strokeDashoffset", "strokeLinecap", "strokeLinejoin", "strokeMiterlimit", "strokeOpacity", "strokeWidth", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textAnchor", "textDecoration", "textLength", "textRendering", "to", "transform", "u1", "u2", "underlinePosition", "underlineThickness", "unicode", "unicodeBidi", "unicodeRange", "unitsPerEm", "vAlphabetic", "values", "vectorEffect", "version", "vertAdvY", "vertOriginX", "vertOriginY", "vHanging", "vIdeographic", "viewTarget", "visibility", "vMathematical", "widths", "wordSpacing", "writingMode", "x1", "x2", "x", "xChannelSelector", "xHeight", "xlinkActuate", "xlinkArcrole", "xlinkHref", "xlinkRole", "xlinkShow", "xlinkTitle", "xlinkType", "xmlBase", "xmlLang", "xmlns", "xmlnsXlink", "xmlSpace", "y1", "y2", "y", "yChannelSelector", "z", "zoomAndPan", "ref", "key", "angle"],
        l = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"],
        f = function(e, r, n) {
            if (!e || "function" == typeof e || "boolean" == typeof e) return null;
            var i = e;
            if ((0, a.isValidElement)(e) && (i = e.props), !t(o)(i)) return null;
            var u = {};
            return Object.keys(i).forEach((function(t) {
                (s.includes(t) || n && c.includes(t) || r && l.includes(t)) && (u[t] = i[t])
            })), u
        },
        p = function(e, r) {
            if (!e || "function" == typeof e || "boolean" == typeof e) return null;
            var n = e;
            if ((0, a.isValidElement)(e) && (n = e.props), !t(o)(n)) return null;
            var i = {};
            return Object.keys(n).forEach((function(t) {
                l.includes(t) && (i[t] = r || function(e) {
                    return n[t](n, e)
                })
            })), i
        },
        h = function(e, r, n) {
            if (!t(o)(e) || "object" !== u(e)) return null;
            var i = null;
            return Object.keys(e).forEach((function(t) {
                var o = e[t];
                l.includes(t) && "function" == typeof o && (i || (i = {}), i[t] = function(t, e, r) {
                    return function(n) {
                        return t(e, r, n), null
                    }
                }(o, r, n))
            })), i
        }
})), n.register("fYpyz", (function(r, i) {
    e(r.exports, "Layer", (function() {
        return l
    }));
    var o = n("fywoC"),
        a = n("fe1on"),
        u = n("iquK2");

    function c() {
        return c = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
            }
            return t
        }, c.apply(this, arguments)
    }

    function s(t, e) {
        if (null == t) return {};
        var r, n, i = function(t, e) {
            if (null == t) return {};
            var r, n, i = {},
                o = Object.keys(t);
            for (n = 0; n < o.length; n++) r = o[n], e.indexOf(r) >= 0 || (i[r] = t[r]);
            return i
        }(t, e);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(t);
            for (n = 0; n < o.length; n++) r = o[n], e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (i[r] = t[r])
        }
        return i
    }
    var l = t(o).forwardRef((function(e, r) {
        var n = e.children,
            i = e.className,
            l = s(e, ["children", "className"]),
            f = t(a)("recharts-layer", i);
        return t(o).createElement("g", c({
            className: f
        }, (0, u.filterProps)(l, !0), {
            ref: r
        }), n)
    }))
})), n.register("lwjGN", (function(r, i) {
    e(r.exports, "ErrorBar", (function() {
        return p
    }));
    var o = n("fywoC"),
        a = n("fYpyz"),
        u = n("iquK2");

    function c() {
        return c = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
            }
            return t
        }, c.apply(this, arguments)
    }

    function s(t, e) {
        return function(t) {
            if (Array.isArray(t)) return t
        }(t) || function(t, e) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
            var r = [],
                n = !0,
                i = !1,
                o = void 0;
            try {
                for (var a, u = t[Symbol.iterator](); !(n = (a = u.next()).done) && (r.push(a.value), !e || r.length !== e); n = !0);
            } catch (t) {
                i = !0, o = t
            } finally {
                try {
                    n || null == u.return || u.return()
                } finally {
                    if (i) throw o
                }
            }
            return r
        }(t, e) || function(t, e) {
            if (!t) return;
            if ("string" == typeof t) return l(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(t);
            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return l(t, e)
        }(t, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function l(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n
    }

    function f(t, e) {
        if (null == t) return {};
        var r, n, i = function(t, e) {
            if (null == t) return {};
            var r, n, i = {},
                o = Object.keys(t);
            for (n = 0; n < o.length; n++) r = o[n], e.indexOf(r) >= 0 || (i[r] = t[r]);
            return i
        }(t, e);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(t);
            for (n = 0; n < o.length; n++) r = o[n], e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (i[r] = t[r])
        }
        return i
    }

    function p(e) {
        var r = e.offset,
            n = e.layout,
            i = e.width,
            l = e.dataKey,
            p = e.data,
            h = e.dataPointFormatter,
            d = e.xAxis,
            y = e.yAxis,
            g = f(e, ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"]),
            v = (0, u.filterProps)(g),
            m = p.map((function(e, u) {
                var f = h(e, l),
                    p = f.x,
                    g = f.y,
                    m = f.value,
                    b = f.errorVal;
                if (!b) return null;
                var x, w, O = [];
                if (Array.isArray(b)) {
                    var j = s(b, 2);
                    x = j[0], w = j[1]
                } else x = w = b;
                if ("vertical" === n) {
                    var _ = d.scale,
                        S = g + r,
                        A = S + i,
                        k = S - i,
                        E = _(m - x),
                        M = _(m + w);
                    O.push({
                        x1: M,
                        y1: A,
                        x2: M,
                        y2: k
                    }), O.push({
                        x1: E,
                        y1: S,
                        x2: M,
                        y2: S
                    }), O.push({
                        x1: E,
                        y1: A,
                        x2: E,
                        y2: k
                    })
                } else if ("horizontal" === n) {
                    var P = y.scale,
                        C = p + r,
                        T = C - i,
                        I = C + i,
                        N = P(m - x),
                        D = P(m + w);
                    O.push({
                        x1: T,
                        y1: D,
                        x2: I,
                        y2: D
                    }), O.push({
                        x1: C,
                        y1: N,
                        x2: C,
                        y2: D
                    }), O.push({
                        x1: T,
                        y1: N,
                        x2: I,
                        y2: N
                    })
                }
                return t(o).createElement(a.Layer, c({
                    className: "recharts-errorBar",
                    key: "bar-".concat(u)
                }, v), O.map((function(e, r) {
                    return t(o).createElement("line", c({}, e, {
                        key: "line-".concat(r)
                    }))
                })))
            }));
        return t(o).createElement(a.Layer, {
            className: "recharts-errorBars"
        }, m)
    }
    p.defaultProps = {
        stroke: "black",
        strokeWidth: 1.5,
        width: 5,
        offset: 0,
        layout: "horizontal"
    }, p.displayName = "ErrorBar"
})), n.register("iRiRC", (function(t, r) {
    e(t.exports, "Cell", (function() {
        return n
    }));
    var n = function(t) {
        return null
    };
    n.displayName = "Cell"
})), n.register("b7qIx", (function(r, i) {
    e(r.exports, "LabelList", (function() {
        return _
    }));
    var o = n("4TzB7"),
        a = n("hRZ1R"),
        u = n("bZbba"),
        c = n("aqR4n"),
        s = n("42aAU"),
        l = n("fywoC"),
        f = n("jo56E"),
        p = n("fYpyz"),
        h = n("kEum4"),
        d = n("kjJfJ"),
        y = n("iquK2");

    function g(t) {
        return function(t) {
            if (Array.isArray(t)) return v(t)
        }(t) || function(t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
        }(t) || function(t, e) {
            if (!t) return;
            if ("string" == typeof t) return v(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(t);
            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return v(t, e)
        }(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function v(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n
    }

    function m() {
        return m = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
            }
            return t
        }, m.apply(this, arguments)
    }

    function b(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), r.push.apply(r, n)
        }
        return r
    }

    function x(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2 ? b(Object(r), !0).forEach((function(e) {
                w(t, e, r[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : b(Object(r)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
            }))
        }
        return t
    }

    function w(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = r, t
    }

    function O(t, e) {
        if (null == t) return {};
        var r, n, i = function(t, e) {
            if (null == t) return {};
            var r, n, i = {},
                o = Object.keys(t);
            for (n = 0; n < o.length; n++) r = o[n], e.indexOf(r) >= 0 || (i[r] = t[r]);
            return i
        }(t, e);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(t);
            for (n = 0; n < o.length; n++) r = o[n], e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (i[r] = t[r])
        }
        return i
    }
    var j = {
        valueAccessor: function(e) {
            return t(s)(e.value) ? t(c)(e.value) : e.value
        }
    };

    function _(e) {
        var r = e.data,
            n = e.valueAccessor,
            i = e.dataKey,
            o = e.clockWise,
            a = e.id,
            c = e.textBreakAll,
            s = O(e, ["data", "valueAccessor", "dataKey", "clockWise", "id", "textBreakAll"]);
        return r && r.length ? t(l).createElement(p.Layer, {
            className: "recharts-label-list"
        }, r.map((function(e, r) {
            var p = t(u)(i) ? n(e, r) : (0, d.getValueByDataKey)(e && e.payload, i),
                h = t(u)(a) ? {} : {
                    id: "".concat(a, "-").concat(r)
                };
            return t(l).createElement(f.Label, m({}, (0, y.filterProps)(e, !0), s, h, {
                parentViewBox: e.parentViewBox,
                index: r,
                value: p,
                textBreakAll: c,
                viewBox: f.Label.parseViewBox(t(u)(o) ? e : x(x({}, e), {}, {
                    clockWise: o
                })),
                key: "label-".concat(r)
            }))
        }))) : null
    }

    function S(e, r) {
        return e ? !0 === e ? t(l).createElement(_, {
            key: "labelList-implicit",
            data: r
        }) : t(l).isValidElement(e) || t(a)(e) ? t(l).createElement(_, {
            key: "labelList-implicit",
            data: r,
            content: e
        }) : t(o)(e) ? t(l).createElement(_, m({
            data: r
        }, e, {
            key: "labelList-implicit"
        })) : null : null
    }
    _.displayName = "LabelList", _.renderCallByParent = function(t, e) {
        var r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (!t || !t.children && r && !t.label) return null;
        var n = t.children,
            i = (0, h.findAllByType)(n, _.displayName).map((function(t, r) {
                return (0, l.cloneElement)(t, {
                    data: e,
                    key: "labelList-".concat(r)
                })
            }));
        if (!r) return i;
        var o = S(t.label, e);
        return [o].concat(g(i))
    }, _.defaultProps = j
})), n.register("aqR4n", (function(t, e) {
    t.exports = function(t) {
        var e = null == t ? 0 : t.length;
        return e ? t[e - 1] : void 0
    }
})), n.register("jo56E", (function(r, i) {
    e(r.exports, "Label", (function() {
        return O
    }));
    var o = n("4TzB7"),
        a = n("hRZ1R"),
        u = n("bZbba"),
        c = n("fywoC"),
        s = n("fe1on"),
        l = n("94iDk"),
        f = n("kEum4"),
        p = n("fI5bH"),
        h = n("4jZP4"),
        d = n("iquK2");

    function y(t) {
        return function(t) {
            if (Array.isArray(t)) return g(t)
        }(t) || function(t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
        }(t) || function(t, e) {
            if (!t) return;
            if ("string" == typeof t) return g(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(t);
            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return g(t, e)
        }(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function g(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n
    }

    function v(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), r.push.apply(r, n)
        }
        return r
    }

    function m(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2 ? v(Object(r), !0).forEach((function(e) {
                b(t, e, r[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : v(Object(r)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
            }))
        }
        return t
    }

    function b(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = r, t
    }

    function x() {
        return x = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
            }
            return t
        }, x.apply(this, arguments)
    }
    var w = function(e, r, n) {
        var i, o, a = e.position,
            l = e.viewBox,
            f = e.offset,
            d = e.className,
            y = l,
            g = y.cx,
            v = y.cy,
            m = y.innerRadius,
            b = y.outerRadius,
            w = y.startAngle,
            O = y.endAngle,
            j = y.clockWise,
            _ = (m + b) / 2,
            S = function(t, e) {
                return (0, p.mathSign)(e - t) * Math.min(Math.abs(e - t), 360)
            }(w, O),
            A = S >= 0 ? 1 : -1;
        "insideStart" === a ? (i = w + A * f, o = j) : "insideEnd" === a ? (i = O - A * f, o = !j) : "end" === a && (i = O + A * f, o = j), o = S <= 0 ? o : !o;
        var k = (0, h.polarToCartesian)(g, v, _, i),
            E = (0, h.polarToCartesian)(g, v, _, i + 359 * (o ? 1 : -1)),
            M = "M".concat(k.x, ",").concat(k.y, "\n    A").concat(_, ",").concat(_, ",0,1,").concat(o ? 0 : 1, ",\n    ").concat(E.x, ",").concat(E.y),
            P = t(u)(e.id) ? (0, p.uniqueId)("recharts-radial-line-") : e.id;
        return t(c).createElement("text", x({}, n, {
            dominantBaseline: "central",
            className: t(s)("recharts-radial-bar-label", d)
        }), t(c).createElement("defs", null, t(c).createElement("path", {
            id: P,
            d: M
        })), t(c).createElement("textPath", {
            xlinkHref: "#".concat(P)
        }, r))
    };

    function O(e) {
        var r, n = e.viewBox,
            i = e.position,
            f = e.value,
            y = e.children,
            g = e.content,
            v = e.className,
            b = void 0 === v ? "" : v,
            O = e.textBreakAll;
        if (!n || t(u)(f) && t(u)(y) && !(0, c.isValidElement)(g) && !t(a)(g)) return null;
        if ((0, c.isValidElement)(g)) return (0, c.cloneElement)(g, e);
        if (t(a)(g)) {
            if (r = (0, c.createElement)(g, e), (0, c.isValidElement)(r)) return r
        } else r = function(e) {
            var r = e.value,
                n = e.formatter,
                i = t(u)(e.children) ? r : e.children;
            return t(a)(n) ? n(i) : i
        }(e);
        var j = function(t) {
                return (0, p.isNumber)(t.cx)
            }(n),
            _ = (0, d.filterProps)(e, !0);
        if (j && ("insideStart" === i || "insideEnd" === i || "end" === i)) return w(e, r, _);
        var S = j ? function(t) {
            var e = t.viewBox,
                r = t.offset,
                n = t.position,
                i = e,
                o = i.cx,
                a = i.cy,
                u = i.innerRadius,
                c = i.outerRadius,
                s = (i.startAngle + i.endAngle) / 2;
            if ("outside" === n) {
                var l = (0, h.polarToCartesian)(o, a, c + r, s),
                    f = l.x;
                return {
                    x: f,
                    y: l.y,
                    textAnchor: f >= o ? "start" : "end",
                    verticalAnchor: "middle"
                }
            }
            if ("center" === n) return {
                x: o,
                y: a,
                textAnchor: "middle",
                verticalAnchor: "middle"
            };
            if ("centerTop" === n) return {
                x: o,
                y: a,
                textAnchor: "middle",
                verticalAnchor: "start"
            };
            if ("centerBottom" === n) return {
                x: o,
                y: a,
                textAnchor: "middle",
                verticalAnchor: "end"
            };
            var p = (u + c) / 2,
                d = (0, h.polarToCartesian)(o, a, p, s);
            return {
                x: d.x,
                y: d.y,
                textAnchor: "middle",
                verticalAnchor: "middle"
            }
        }(e) : function(e) {
            var r = e.viewBox,
                n = e.parentViewBox,
                i = e.offset,
                a = e.position,
                u = r,
                c = u.x,
                s = u.y,
                l = u.width,
                f = u.height,
                h = f >= 0 ? 1 : -1,
                d = h * i,
                y = h > 0 ? "end" : "start",
                g = h > 0 ? "start" : "end",
                v = l >= 0 ? 1 : -1,
                b = v * i,
                x = v > 0 ? "end" : "start",
                w = v > 0 ? "start" : "end";
            if ("top" === a) return m(m({}, {
                x: c + l / 2,
                y: s - h * i,
                textAnchor: "middle",
                verticalAnchor: y
            }), n ? {
                height: Math.max(s - n.y, 0),
                width: l
            } : {});
            if ("bottom" === a) return m(m({}, {
                x: c + l / 2,
                y: s + f + d,
                textAnchor: "middle",
                verticalAnchor: g
            }), n ? {
                height: Math.max(n.y + n.height - (s + f), 0),
                width: l
            } : {});
            if ("left" === a) {
                var O = {
                    x: c - b,
                    y: s + f / 2,
                    textAnchor: x,
                    verticalAnchor: "middle"
                };
                return m(m({}, O), n ? {
                    width: Math.max(O.x - n.x, 0),
                    height: f
                } : {})
            }
            if ("right" === a) {
                var j = {
                    x: c + l + b,
                    y: s + f / 2,
                    textAnchor: w,
                    verticalAnchor: "middle"
                };
                return m(m({}, j), n ? {
                    width: Math.max(n.x + n.width - j.x, 0),
                    height: f
                } : {})
            }
            var _ = n ? {
                width: l,
                height: f
            } : {};
            return "insideLeft" === a ? m({
                x: c + b,
                y: s + f / 2,
                textAnchor: w,
                verticalAnchor: "middle"
            }, _) : "insideRight" === a ? m({
                x: c + l - b,
                y: s + f / 2,
                textAnchor: x,
                verticalAnchor: "middle"
            }, _) : "insideTop" === a ? m({
                x: c + l / 2,
                y: s + d,
                textAnchor: "middle",
                verticalAnchor: g
            }, _) : "insideBottom" === a ? m({
                x: c + l / 2,
                y: s + f - d,
                textAnchor: "middle",
                verticalAnchor: y
            }, _) : "insideTopLeft" === a ? m({
                x: c + b,
                y: s + d,
                textAnchor: w,
                verticalAnchor: g
            }, _) : "insideTopRight" === a ? m({
                x: c + l - b,
                y: s + d,
                textAnchor: x,
                verticalAnchor: g
            }, _) : "insideBottomLeft" === a ? m({
                x: c + b,
                y: s + f - d,
                textAnchor: w,
                verticalAnchor: y
            }, _) : "insideBottomRight" === a ? m({
                x: c + l - b,
                y: s + f - d,
                textAnchor: x,
                verticalAnchor: y
            }, _) : t(o)(a) && ((0, p.isNumber)(a.x) || (0, p.isPercent)(a.x)) && ((0, p.isNumber)(a.y) || (0, p.isPercent)(a.y)) ? m({
                x: c + (0, p.getPercentValue)(a.x, l),
                y: s + (0, p.getPercentValue)(a.y, f),
                textAnchor: "end",
                verticalAnchor: "end"
            }, _) : m({
                x: c + l / 2,
                y: s + f / 2,
                textAnchor: "middle",
                verticalAnchor: "middle"
            }, _)
        }(e);
        return t(c).createElement(l.Text, x({
            className: t(s)("recharts-label", b)
        }, _, S, {
            breakAll: O
        }), r)
    }
    O.displayName = "Label", O.defaultProps = {
        offset: 5
    };
    var j = function(t) {
            var e = t.cx,
                r = t.cy,
                n = t.angle,
                i = t.startAngle,
                o = t.endAngle,
                a = t.r,
                u = t.radius,
                c = t.innerRadius,
                s = t.outerRadius,
                l = t.x,
                f = t.y,
                h = t.top,
                d = t.left,
                y = t.width,
                g = t.height,
                v = t.clockWise,
                m = t.labelViewBox;
            if (m) return m;
            if ((0, p.isNumber)(y) && (0, p.isNumber)(g)) {
                if ((0, p.isNumber)(l) && (0, p.isNumber)(f)) return {
                    x: l,
                    y: f,
                    width: y,
                    height: g
                };
                if ((0, p.isNumber)(h) && (0, p.isNumber)(d)) return {
                    x: h,
                    y: d,
                    width: y,
                    height: g
                }
            }
            return (0, p.isNumber)(l) && (0, p.isNumber)(f) ? {
                x: l,
                y: f,
                width: 0,
                height: 0
            } : (0, p.isNumber)(e) && (0, p.isNumber)(r) ? {
                cx: e,
                cy: r,
                startAngle: i || n || 0,
                endAngle: o || n || 0,
                innerRadius: c || 0,
                outerRadius: s || u || a || 0,
                clockWise: v
            } : t.viewBox ? t.viewBox : {}
        },
        _ = function(e, r) {
            return e ? !0 === e ? t(c).createElement(O, {
                key: "label-implicit",
                viewBox: r
            }) : (0, p.isNumOrStr)(e) ? t(c).createElement(O, {
                key: "label-implicit",
                viewBox: r,
                value: e
            }) : (0, c.isValidElement)(e) ? e.type === O ? (0, c.cloneElement)(e, {
                key: "label-implicit",
                viewBox: r
            }) : t(c).createElement(O, {
                key: "label-implicit",
                content: e,
                viewBox: r
            }) : t(a)(e) ? t(c).createElement(O, {
                key: "label-implicit",
                content: e,
                viewBox: r
            }) : t(o)(e) ? t(c).createElement(O, x({
                viewBox: r
            }, e, {
                key: "label-implicit"
            })) : null : null
        };
    O.parseViewBox = j, O.renderCallByParent = function(t, e) {
        var r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (!t || !t.children && r && !t.label) return null;
        var n = t.children,
            i = j(t),
            o = (0, f.findAllByType)(n, O.displayName).map((function(t, r) {
                return (0, c.cloneElement)(t, {
                    viewBox: e || i,
                    key: "label-".concat(r)
                })
            }));
        if (!r) return o;
        var a = _(t.label, e || i);
        return [a].concat(y(o))
    }
})), n.register("94iDk", (function(r, i) {
    e(r.exports, "Text", (function() {
        return C
    }));
    var o = n("bZbba"),
        a = n("fywoC"),
        u = n("5xcaa"),
        c = n("fe1on"),
        s = n("fI5bH"),
        l = n("ipNOV"),
        f = n("iquK2"),
        p = n("bC8Qw");

    function h(t) {
        return h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, h(t)
    }

    function d() {
        return d = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
            }
            return t
        }, d.apply(this, arguments)
    }

    function y(t, e) {
        if (null == t) return {};
        var r, n, i = function(t, e) {
            if (null == t) return {};
            var r, n, i = {},
                o = Object.keys(t);
            for (n = 0; n < o.length; n++) r = o[n], e.indexOf(r) >= 0 || (i[r] = t[r]);
            return i
        }(t, e);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(t);
            for (n = 0; n < o.length; n++) r = o[n], e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (i[r] = t[r])
        }
        return i
    }

    function g(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function v(t, e) {
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    function m(t, e) {
        return m = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        }, m(t, e)
    }

    function b(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var r, n = w(t);
            if (e) {
                var i = w(this).constructor;
                r = Reflect.construct(n, arguments, i)
            } else r = n.apply(this, arguments);
            return x(this, r)
        }
    }

    function x(t, e) {
        return !e || "object" !== h(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function w(t) {
        return w = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }, w(t)
    }

    function O(t, e) {
        return function(t) {
            if (Array.isArray(t)) return t
        }(t) || function(t, e) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
            var r = [],
                n = !0,
                i = !1,
                o = void 0;
            try {
                for (var a, u = t[Symbol.iterator](); !(n = (a = u.next()).done) && (r.push(a.value), !e || r.length !== e); n = !0);
            } catch (t) {
                i = !0, o = t
            } finally {
                try {
                    n || null == u.return || u.return()
                } finally {
                    if (i) throw o
                }
            }
            return r
        }(t, e) || function(t, e) {
            if (!t) return;
            if ("string" == typeof t) return j(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(t);
            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return j(t, e)
        }(t, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function j(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n
    }

    function _(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), r.push.apply(r, n)
        }
        return r
    }

    function S(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2 ? _(Object(r), !0).forEach((function(e) {
                A(t, e, r[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : _(Object(r)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
            }))
        }
        return t
    }

    function A(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = r, t
    }
    var k = /[ \f\n\r\t\v\u2028\u2029]+/,
        E = function(e) {
            try {
                var r = [];
                return t(o)(e.children) || (r = e.breakAll ? e.children.toString().split("") : e.children.toString().split(k)), {
                    wordsWithComputedWidth: r.map((function(t) {
                        return {
                            word: t,
                            width: (0, p.getStringSize)(t, e.style).width
                        }
                    })),
                    spaceWidth: e.breakAll ? 0 : (0, p.getStringSize)(" ", e.style).width
                }
            } catch (t) {
                return null
            }
        },
        M = function(e) {
            return [{
                words: t(o)(e) ? [] : e.toString().split(k)
            }]
        },
        P = function(t, e) {
            if ((t.width || t.scaleToFit) && !l.Global.isSsr && e) {
                var r = E(t);
                return r ? function(t, e, r, n, i) {
                    var o = (0, s.isNumber)(t.maxLines),
                        a = t.children,
                        u = function() {
                            return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).reduce((function(t, e) {
                                var o = e.word,
                                    a = e.width,
                                    u = t[t.length - 1];
                                if (u && (null == n || i || u.width + a + r < n)) u.words.push(o), u.width += a + r;
                                else {
                                    var c = {
                                        words: [o],
                                        width: a
                                    };
                                    t.push(c)
                                }
                                return t
                            }), [])
                        },
                        c = u(e);
                    if (!o) return c;
                    for (var l, f = function(e) {
                            var r = a.slice(0, e),
                                i = E(S(S({}, t), {}, {
                                    children: r + "…"
                                })).wordsWithComputedWidth,
                                o = u(i),
                                c = o.length > t.maxLines || function(t) {
                                    return t.reduce((function(t, e) {
                                        return t.width > e.width ? t : e
                                    }))
                                }(o).width > n;
                            return [c, o]
                        }, p = 0, h = a.length - 1, d = 0; p <= h && d <= a.length - 1;) {
                        var y = Math.floor((p + h) / 2),
                            g = O(f(y - 1), 2),
                            v = g[0],
                            m = g[1],
                            b = O(f(y), 1)[0];
                        if (v || b || (p = y + 1), v && b && (h = y - 1), !v && b) {
                            l = m;
                            break
                        }
                        d++
                    }
                    return l || c
                }(t, r.wordsWithComputedWidth, r.spaceWidth, t.width, t.scaleToFit) : M(t.children)
            }
            return M(t.children)
        },
        C = function(e) {
            ! function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && m(t, e)
            }(l, e);
            var r, n, i, o = b(l);

            function l() {
                var t;
                g(this, l);
                for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++) r[n] = arguments[n];
                return (t = o.call.apply(o, [this].concat(r))).state = {}, t
            }
            return r = l, i = [{
                key: "getDerivedStateFromProps",
                value: function(t, e) {
                    if (t.width !== e.prevWidth || t.scaleToFit !== e.prevScaleToFit || t.children !== e.prevChildren || t.style !== e.prevStyle || t.breakAll !== e.prevBreakAll) {
                        var r = t.children !== e.prevChildren || t.style !== e.prevStyle || t.breakAll !== e.prevBreakAll;
                        return {
                            prevWidth: t.width,
                            prevScaleToFit: t.scaleToFit,
                            prevChildren: t.children,
                            prevStyle: t.style,
                            wordsByLines: P(t, r)
                        }
                    }
                    return null
                }
            }], (n = [{
                key: "render",
                value: function() {
                    var e = this.props,
                        r = e.dx,
                        n = e.dy,
                        i = e.textAnchor,
                        o = e.verticalAnchor,
                        l = e.scaleToFit,
                        p = e.angle,
                        h = e.lineHeight,
                        g = e.capHeight,
                        v = e.className,
                        m = e.breakAll,
                        b = y(e, ["dx", "dy", "textAnchor", "verticalAnchor", "scaleToFit", "angle", "lineHeight", "capHeight", "className", "breakAll"]),
                        x = this.state.wordsByLines;
                    if (!(0, s.isNumOrStr)(b.x) || !(0, s.isNumOrStr)(b.y)) return null;
                    var w, O = b.x + ((0, s.isNumber)(r) ? r : 0),
                        j = b.y + ((0, s.isNumber)(n) ? n : 0);
                    switch (o) {
                        case "start":
                            w = t(u)("calc(".concat(g, ")"));
                            break;
                        case "middle":
                            w = t(u)("calc(".concat((x.length - 1) / 2, " * -").concat(h, " + (").concat(g, " / 2))"));
                            break;
                        default:
                            w = t(u)("calc(".concat(x.length - 1, " * -").concat(h, ")"))
                    }
                    var _ = [];
                    if (l) {
                        var S = x[0].width,
                            A = this.props.width;
                        _.push("scale(".concat(((0, s.isNumber)(A) ? A / S : 1) / S, ")"))
                    }
                    return p && _.push("rotate(".concat(p, ", ").concat(O, ", ").concat(j, ")")), _.length && (b.transform = _.join(" ")), t(a).createElement("text", d({}, (0, f.filterProps)(b, !0), {
                        x: O,
                        y: j,
                        className: t(c)("recharts-text", v),
                        textAnchor: i
                    }), x.map((function(e, r) {
                        return t(a).createElement("tspan", {
                            x: O,
                            dy: 0 === r ? w : h,
                            key: r
                        }, e.words.join(m ? "" : " "))
                    })))
                }
            }]) && v(r.prototype, n), i && v(r, i), l
        }(a.Component);
    C.defaultProps = {
        x: 0,
        y: 0,
        lineHeight: "1em",
        capHeight: "0.71em",
        scaleToFit: !1,
        textAnchor: "start",
        verticalAnchor: "end"
    }
})), n.register("5xcaa", (function(t, e) {
    Object.defineProperty(t.exports, "__esModule", {
        value: !0
    });
    var r = u(n("8j1q5")),
        i = n("ftvf4"),
        o = u(n("3Xv1C")),
        a = u(n("02U1p"));

    function u(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var c = /((?:\-[a-z]+\-)?calc)/;
    t.exports.default = function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5;
        return (0, r.default)(t).walk((function(t) {
            if ("function" === t.type && c.test(t.value)) {
                var n = r.default.stringify(t.nodes);
                if (!(n.indexOf("constant") >= 0 || n.indexOf("env") >= 0)) {
                    var u = i.parser.parse(n),
                        s = (0, o.default)(u, e);
                    t.type = "word", t.value = (0, a.default)(t.value, s, e)
                }
            }
        }), !0).toString()
    }, t.exports = t.exports.default
})), n.register("8j1q5", (function(t, e) {
    var r = n("ez0mh"),
        i = n("88XZT"),
        o = n("kqSHm");

    function a(t) {
        return this instanceof a ? (this.nodes = r(t), this) : new a(t)
    }
    a.prototype.toString = function() {
        return Array.isArray(this.nodes) ? o(this.nodes) : ""
    }, a.prototype.walk = function(t, e) {
        return i(this.nodes, t, e), this
    }, a.unit = n("8slEt"), a.walk = i, a.stringify = o, t.exports = a
})), n.register("ez0mh", (function(t, e) {
    var r = "(".charCodeAt(0),
        n = ")".charCodeAt(0),
        i = "'".charCodeAt(0),
        o = '"'.charCodeAt(0),
        a = "\\".charCodeAt(0),
        u = "/".charCodeAt(0),
        c = ",".charCodeAt(0),
        s = ":".charCodeAt(0),
        l = "*".charCodeAt(0);
    t.exports = function(t) {
        for (var e, f, p, h, d, y, g, v, m = [], b = t, x = 0, w = b.charCodeAt(x), O = b.length, j = [{
                nodes: m
            }], _ = 0, S = "", A = "", k = ""; x < O;)
            if (w <= 32) {
                e = x;
                do {
                    e += 1, w = b.charCodeAt(e)
                } while (w <= 32);
                h = b.slice(x, e), p = m[m.length - 1], w === n && _ ? k = h : p && "div" === p.type ? p.after = h : w === c || w === s || w === u && b.charCodeAt(e + 1) !== l ? A = h : m.push({
                    type: "space",
                    sourceIndex: x,
                    value: h
                }), x = e
            } else if (w === i || w === o) {
            e = x, h = {
                type: "string",
                sourceIndex: x,
                quote: f = w === i ? "'" : '"'
            };
            do {
                if (d = !1, ~(e = b.indexOf(f, e + 1)))
                    for (y = e; b.charCodeAt(y - 1) === a;) y -= 1, d = !d;
                else e = (b += f).length - 1, h.unclosed = !0
            } while (d);
            h.value = b.slice(x + 1, e), m.push(h), x = e + 1, w = b.charCodeAt(x)
        } else if (w === u && b.charCodeAt(x + 1) === l) h = {
            type: "comment",
            sourceIndex: x
        }, -1 === (e = b.indexOf("*/", x)) && (h.unclosed = !0, e = b.length), h.value = b.slice(x + 2, e), m.push(h), x = e + 2, w = b.charCodeAt(x);
        else if (w === u || w === c || w === s) h = b[x], m.push({
            type: "div",
            sourceIndex: x - A.length,
            value: h,
            before: A,
            after: ""
        }), A = "", x += 1, w = b.charCodeAt(x);
        else if (r === w) {
            e = x;
            do {
                e += 1, w = b.charCodeAt(e)
            } while (w <= 32);
            if (h = {
                    type: "function",
                    sourceIndex: x - S.length,
                    value: S,
                    before: b.slice(x + 1, e)
                }, x = e, "url" === S && w !== i && w !== o) {
                e -= 1;
                do {
                    if (d = !1, ~(e = b.indexOf(")", e + 1)))
                        for (y = e; b.charCodeAt(y - 1) === a;) y -= 1, d = !d;
                    else e = (b += ")").length - 1, h.unclosed = !0
                } while (d);
                g = e;
                do {
                    g -= 1, w = b.charCodeAt(g)
                } while (w <= 32);
                h.nodes = x !== g + 1 ? [{
                    type: "word",
                    sourceIndex: x,
                    value: b.slice(x, g + 1)
                }] : [], h.unclosed && g + 1 !== e ? (h.after = "", h.nodes.push({
                    type: "space",
                    sourceIndex: g + 1,
                    value: b.slice(g + 1, e)
                })) : h.after = b.slice(g + 1, e), x = e + 1, w = b.charCodeAt(x), m.push(h)
            } else _ += 1, h.after = "", m.push(h), j.push(h), m = h.nodes = [], v = h;
            S = ""
        } else if (n === w && _) x += 1, w = b.charCodeAt(x), v.after = k, k = "", _ -= 1, j.pop(), m = (v = j[_]).nodes;
        else {
            e = x;
            do {
                w === a && (e += 1), e += 1, w = b.charCodeAt(e)
            } while (e < O && !(w <= 32 || w === i || w === o || w === c || w === s || w === u || w === r || w === n && _));
            h = b.slice(x, e), r === w ? S = h : m.push({
                type: "word",
                sourceIndex: x,
                value: h
            }), x = e
        }
        for (x = j.length - 1; x; x -= 1) j[x].unclosed = !0;
        return j[0].nodes
    }
})), n.register("88XZT", (function(t, e) {
    t.exports = function t(e, r, n) {
        var i, o, a, u;
        for (i = 0, o = e.length; i < o; i += 1) a = e[i], n || (u = r(a, i, e)), !1 !== u && "function" === a.type && Array.isArray(a.nodes) && t(a.nodes, r, n), n && r(a, i, e)
    }
})), n.register("kqSHm", (function(t, e) {
    function r(t, e) {
        var r, i, o = t.type,
            a = t.value;
        return e && void 0 !== (i = e(t)) ? i : "word" === o || "space" === o ? a : "string" === o ? (r = t.quote || "") + a + (t.unclosed ? "" : r) : "comment" === o ? "/*" + a + (t.unclosed ? "" : "*/") : "div" === o ? (t.before || "") + a + (t.after || "") : Array.isArray(t.nodes) ? (r = n(t.nodes), "function" !== o ? r : a + "(" + (t.before || "") + r + (t.after || "") + (t.unclosed ? "" : ")")) : a
    }

    function n(t, e) {
        var n, i;
        if (Array.isArray(t)) {
            for (n = "", i = t.length - 1; ~i; i -= 1) n = r(t[i], e) + n;
            return n
        }
        return r(t, e)
    }
    t.exports = n
})), n.register("8slEt", (function(t, e) {
    var r = "-".charCodeAt(0),
        n = "+".charCodeAt(0),
        i = ".".charCodeAt(0),
        o = "e".charCodeAt(0),
        a = "E".charCodeAt(0);
    t.exports = function(t) {
        for (var e, u = 0, c = t.length, s = !1, l = -1, f = !1; u < c;) {
            if ((e = t.charCodeAt(u)) >= 48 && e <= 57) f = !0;
            else if (e === o || e === a) {
                if (l > -1) break;
                l = u
            } else if (e === i) {
                if (s) break;
                s = !0
            } else {
                if (e !== n && e !== r) break;
                if (0 !== u) break
            }
            u += 1
        }
        return l + 1 === u && u--, !!f && {
            number: t.slice(0, u),
            unit: t.slice(u)
        }
    }
})), n.register("ftvf4", (function(t, r) {
    var n;
    e(t.exports, "parser", (function() {
        return n
    }), (function(t) {
        return n = t
    }));
    var i = function() {
        function t(t, e) {
            var r;
            if (Object.defineProperty(this, "name", {
                    enumerable: !1,
                    writable: !1,
                    value: "JisonParserError"
                }), null == t && (t = "???"), Object.defineProperty(this, "message", {
                    enumerable: !1,
                    writable: !0,
                    value: t
                }), this.hash = e, e && e.exception instanceof Error) {
                var n = e.exception;
                this.message = n.message || t, r = n.stack
            }
            r || (Error.hasOwnProperty("captureStackTrace") ? Error.captureStackTrace(this, this.constructor) : r = new Error(t).stack), r && Object.defineProperty(this, "stack", {
                enumerable: !1,
                writable: !1,
                value: r
            })
        }

        function e(t, e, r) {
            r = r || 0;
            for (var n = 0; n < e; n++) this.push(t), t += r
        }

        function r(t, e) {
            for (e += t = this.length - t; t < e; t++) this.push(this[t])
        }

        function n(t) {
            for (var e = [], r = 0, n = t.length; r < n; r++) {
                var i = t[r];
                "function" == typeof i ? (r++, i.apply(e, t[r])) : e.push(i)
            }
            return e
        }
        "function" == typeof Object.setPrototypeOf ? Object.setPrototypeOf(t.prototype, Error.prototype) : t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t.prototype.name = "JisonParserError";
        var i = {
            trace: function() {},
            JisonParserError: t,
            yy: {},
            options: {
                type: "lalr",
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
                1: "EOF",
                2: "error",
                3: "ADD",
                4: "SUB",
                5: "MUL",
                6: "DIV",
                7: "LPAREN",
                8: "RPAREN",
                9: "NESTED_CALC",
                10: "PREFIX",
                11: "NUMBER",
                12: "CSS_VAR",
                13: "CSS_CPROP",
                14: "COMMA",
                15: "LENGTH",
                16: "ANGLE",
                17: "TIME",
                18: "FREQ",
                19: "RES",
                20: "EMS",
                21: "EXS",
                22: "CHS",
                23: "REMS",
                24: "VHS",
                25: "VWS",
                26: "VMINS",
                27: "VMAXS",
                28: "PERCENTAGE"
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
            quoteName: function(t) {
                return '"' + t + '"'
            },
            getSymbolName: function(t) {
                if (this.terminals_[t]) return this.terminals_[t];
                var e = this.symbols_;
                for (var r in e)
                    if (e[r] === t) return r;
                return null
            },
            describeSymbol: function(t) {
                if (t !== this.EOF && this.terminal_descriptions_ && this.terminal_descriptions_[t]) return this.terminal_descriptions_[t];
                if (t === this.EOF) return "end of input";
                var e = this.getSymbolName(t);
                return e ? this.quoteName(e) : null
            },
            collect_expected_token_set: function(t, e) {
                var r = this.TERROR,
                    n = [],
                    i = {};
                if (!e && this.state_descriptions_ && this.state_descriptions_[t]) return [this.state_descriptions_[t]];
                for (var o in this.table[t])
                    if ((o = +o) !== r) {
                        var a = e ? o : this.describeSymbol(o);
                        a && !i[a] && (n.push(a), i[a] = !0)
                    } return n
            },
            productions_: function(t) {
                for (var e = [], r = t.pop, n = t.rule, i = 0, o = r.length; i < o; i++) e.push([r[i], n[i]]);
                return e
            }({
                pop: n([29, e, [30, 10], 31, 31, 32, 32, e, [33, 15]]),
                rule: n([2, e, [3, 5], 4, 7, e, [1, 4], 2, 4, 6, e, [1, 14], 2])
            }),
            performAction: function(t, e, r) {
                var n = this.yy;
                n.parser, n.lexer;
                switch (t) {
                    case 0:
                    case 6:
                        /*! Production::    math_expression : LPAREN math_expression RPAREN */
                        this.$ = r[e - 1];
                        break;
                    case 1:
                        /*! Production::    expression : math_expression EOF */
                        return this.$ = r[e - 1], r[e - 1];
                    case 2:
                        /*! Production::    math_expression : math_expression ADD math_expression */
                    case 3:
                        /*! Production::    math_expression : math_expression SUB math_expression */
                    case 4:
                        /*! Production::    math_expression : math_expression MUL math_expression */
                    case 5:
                        /*! Production::    math_expression : math_expression DIV math_expression */
                        this.$ = {
                            type: "MathExpression",
                            operator: r[e - 1],
                            left: r[e - 2],
                            right: r[e]
                        };
                        break;
                    case 7:
                        /*! Production::    math_expression : NESTED_CALC LPAREN math_expression RPAREN */
                        this.$ = {
                            type: "Calc",
                            value: r[e - 1]
                        };
                        break;
                    case 8:
                        /*! Production::    math_expression : SUB PREFIX SUB NESTED_CALC LPAREN math_expression RPAREN */
                        this.$ = {
                            type: "Calc",
                            value: r[e - 1],
                            prefix: r[e - 5]
                        };
                        break;
                    case 9:
                        /*! Production::    math_expression : css_variable */
                    case 10:
                        /*! Production::    math_expression : css_value */
                    case 11:
                        /*! Production::    math_expression : value */
                        this.$ = r[e];
                        break;
                    case 12:
                        /*! Production::    value : NUMBER */
                        this.$ = {
                            type: "Value",
                            value: parseFloat(r[e])
                        };
                        break;
                    case 13:
                        /*! Production::    value : SUB NUMBER */
                        this.$ = {
                            type: "Value",
                            value: -1 * parseFloat(r[e])
                        };
                        break;
                    case 14:
                        /*! Production::    css_variable : CSS_VAR LPAREN CSS_CPROP RPAREN */
                        this.$ = {
                            type: "CssVariable",
                            value: r[e - 1]
                        };
                        break;
                    case 15:
                        /*! Production::    css_variable : CSS_VAR LPAREN CSS_CPROP COMMA math_expression RPAREN */
                        this.$ = {
                            type: "CssVariable",
                            value: r[e - 3],
                            fallback: r[e - 1]
                        };
                        break;
                    case 16:
                        /*! Production::    css_value : LENGTH */
                        this.$ = {
                            type: "LengthValue",
                            value: parseFloat(r[e]),
                            unit: /[a-z]+/.exec(r[e])[0]
                        };
                        break;
                    case 17:
                        /*! Production::    css_value : ANGLE */
                        this.$ = {
                            type: "AngleValue",
                            value: parseFloat(r[e]),
                            unit: /[a-z]+/.exec(r[e])[0]
                        };
                        break;
                    case 18:
                        /*! Production::    css_value : TIME */
                        this.$ = {
                            type: "TimeValue",
                            value: parseFloat(r[e]),
                            unit: /[a-z]+/.exec(r[e])[0]
                        };
                        break;
                    case 19:
                        /*! Production::    css_value : FREQ */
                        this.$ = {
                            type: "FrequencyValue",
                            value: parseFloat(r[e]),
                            unit: /[a-z]+/.exec(r[e])[0]
                        };
                        break;
                    case 20:
                        /*! Production::    css_value : RES */
                        this.$ = {
                            type: "ResolutionValue",
                            value: parseFloat(r[e]),
                            unit: /[a-z]+/.exec(r[e])[0]
                        };
                        break;
                    case 21:
                        /*! Production::    css_value : EMS */
                        this.$ = {
                            type: "EmValue",
                            value: parseFloat(r[e]),
                            unit: "em"
                        };
                        break;
                    case 22:
                        /*! Production::    css_value : EXS */
                        this.$ = {
                            type: "ExValue",
                            value: parseFloat(r[e]),
                            unit: "ex"
                        };
                        break;
                    case 23:
                        /*! Production::    css_value : CHS */
                        this.$ = {
                            type: "ChValue",
                            value: parseFloat(r[e]),
                            unit: "ch"
                        };
                        break;
                    case 24:
                        /*! Production::    css_value : REMS */
                        this.$ = {
                            type: "RemValue",
                            value: parseFloat(r[e]),
                            unit: "rem"
                        };
                        break;
                    case 25:
                        /*! Production::    css_value : VHS */
                        this.$ = {
                            type: "VhValue",
                            value: parseFloat(r[e]),
                            unit: "vh"
                        };
                        break;
                    case 26:
                        /*! Production::    css_value : VWS */
                        this.$ = {
                            type: "VwValue",
                            value: parseFloat(r[e]),
                            unit: "vw"
                        };
                        break;
                    case 27:
                        /*! Production::    css_value : VMINS */
                        this.$ = {
                            type: "VminValue",
                            value: parseFloat(r[e]),
                            unit: "vmin"
                        };
                        break;
                    case 28:
                        /*! Production::    css_value : VMAXS */
                        this.$ = {
                            type: "VmaxValue",
                            value: parseFloat(r[e]),
                            unit: "vmax"
                        };
                        break;
                    case 29:
                        /*! Production::    css_value : PERCENTAGE */
                        this.$ = {
                            type: "PercentageValue",
                            value: parseFloat(r[e]),
                            unit: "%"
                        };
                        break;
                    case 30:
                        /*! Production::    css_value : SUB css_value */
                        var i = r[e];
                        i.value *= -1, this.$ = i
                }
            },
            table: function(t) {
                for (var e = [], r = t.len, n = t.symbol, i = t.type, o = t.state, a = t.mode, u = t.goto, c = 0, s = r.length; c < s; c++) {
                    for (var l = r[c], f = {}, p = 0; p < l; p++) {
                        var h = n.shift();
                        switch (i.shift()) {
                            case 2:
                                f[h] = [a.shift(), u.shift()];
                                break;
                            case 0:
                                f[h] = o.shift();
                                break;
                            default:
                                f[h] = [3]
                        }
                    }
                    e.push(f)
                }
                return e
            }({
                len: n([24, 1, 5, 23, 1, 18, e, [0, 3], 1, e, [0, 16], e, [23, 4], r, [28, 3], 0, 0, 16, 1, 6, 6, e, [0, 3], 5, 1, 2, r, [37, 3], r, [20, 3], 5, 0, 0]),
                symbol: n([4, 7, 9, 11, 12, e, [15, 19, 1], 1, 1, e, [3, 4, 1], r, [30, 19], r, [29, 4], 7, 4, 10, 11, r, [22, 14], r, [19, 3], r, [43, 22], r, [23, 69], r, [139, 4], 8, r, [51, 24], 4, r, [138, 15], 13, r, [186, 5], 8, r, [6, 6], r, [5, 5], 9, 8, 14, r, [159, 47], r, [60, 10]]),
                type: n([e, [2, 19], e, [0, 5], 1, e, [2, 24], e, [0, 4], r, [22, 19], r, [43, 42], r, [23, 70], r, [28, 25], r, [45, 25], r, [113, 54]]),
                state: n([1, 2, 8, 6, 7, 30, r, [4, 3], 33, 37, r, [5, 3], 38, r, [4, 3], 39, r, [4, 3], 40, r, [4, 3], 42, r, [21, 4], 50, r, [5, 3], 51, r, [4, 3]]),
                mode: n([e, [1, 179], e, [2, 3], r, [5, 5], r, [6, 4], e, [1, 57]]),
                goto: n([5, 3, 4, 24, e, [9, 15, 1], e, [25, 5, 1], r, [24, 19], 31, 35, 32, 34, r, [18, 14], 36, r, [38, 19], r, [19, 57], r, [118, 4], 41, r, [24, 19], 43, 35, r, [16, 14], 44, e, [2, 3], 28, 29, 2, e, [3, 3], 28, 29, 3, r, [53, 4], e, [45, 5, 1], r, [100, 42], 52, r, [5, 4], 53])
            }),
            defaultActions: function(t) {
                for (var e = {}, r = t.idx, n = t.goto, i = 0, o = r.length; i < o; i++) {
                    e[r[i]] = n[i]
                }
                return e
            }({
                idx: n([6, 7, 8, e, [10, 16, 1], 33, 34, 39, 40, 41, 45, 47, 52, 53]),
                goto: n([9, 10, 11, e, [16, 14, 1], 12, 1, 30, 13, e, [4, 4, 1], 14, 15, 8])
            }),
            parseError: function(t, e, r) {
                if (!e.recoverable) throw "function" == typeof this.trace && this.trace(t), r || (r = this.JisonParserError), new r(t, e);
                "function" == typeof this.trace && this.trace(t), e.destroy()
            },
            parse: function(t) {
                var e, r = this,
                    n = new Array(128),
                    i = new Array(128),
                    o = new Array(128),
                    a = this.table,
                    u = 0,
                    c = 0,
                    s = (this.TERROR, this.EOF),
                    l = (this.options.errorRecoveryTokenDiscardCount, [0, 54]);
                e = this.__lexer__ ? this.__lexer__ : this.__lexer__ = Object.create(this.lexer);
                var f = {
                    parseError: void 0,
                    quoteName: void 0,
                    lexer: void 0,
                    parser: void 0,
                    pre_parse: void 0,
                    post_parse: void 0,
                    pre_lex: void 0,
                    post_lex: void 0
                };

                function p() {
                    var t = e.fastLex();
                    return "number" != typeof t && (t = r.symbols_[t] || t), t || s
                }
                "function" != typeof assert || assert, this.yyGetSharedState = function() {
                        return f
                    },
                    function(t, e) {
                        for (var r in e) void 0 === t[r] && Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
                    }(f, this.yy), f.lexer = e, f.parser = this, "function" == typeof f.parseError ? this.parseError = function(t, e, r) {
                        return r || (r = this.JisonParserError), f.parseError.call(this, t, e, r)
                    } : this.parseError = this.originalParseError, "function" == typeof f.quoteName ? this.quoteName = function(t) {
                        return f.quoteName.call(this, t)
                    } : this.quoteName = this.originalQuoteName, this.cleanupAfterParse = function(t, r, a) {
                        var c, s;
                        r && ((f.post_parse || this.post_parse) && (s = this.constructParseErrorInfo(null, null, null, !1)), f.post_parse && void 0 !== (c = f.post_parse.call(this, f, t, s)) && (t = c), this.post_parse && void 0 !== (c = this.post_parse.call(this, f, t, s)) && (t = c), s && s.destroy && s.destroy());
                        if (this.__reentrant_call_depth > 1) return t;
                        if (e.cleanupAfterLex && e.cleanupAfterLex(a), f && (f.lexer = void 0, f.parser = void 0, e.yy === f && (e.yy = void 0)), f = void 0, this.parseError = this.originalParseError, this.quoteName = this.originalQuoteName, n.length = 0, i.length = 0, o.length = 0, u = 0, !a) {
                            for (var l = this.__error_infos.length - 1; l >= 0; l--) {
                                var p = this.__error_infos[l];
                                p && "function" == typeof p.destroy && p.destroy()
                            }
                            this.__error_infos.length = 0
                        }
                        return t
                    }, this.constructParseErrorInfo = function(t, r, a, s) {
                        var l = {
                            errStr: t,
                            exception: r,
                            text: e.match,
                            value: e.yytext,
                            token: this.describeSymbol(c) || c,
                            token_id: c,
                            line: e.yylineno,
                            expected: a,
                            recoverable: s,
                            state: h,
                            action: d,
                            new_state: x,
                            symbol_stack: n,
                            state_stack: i,
                            value_stack: o,
                            stack_pointer: u,
                            yy: f,
                            lexer: e,
                            parser: this,
                            destroy: function() {
                                var t = !!this.recoverable;
                                for (var e in this) this.hasOwnProperty(e) && "object" == typeof e && (this[e] = void 0);
                                this.recoverable = t
                            }
                        };
                        return this.__error_infos.push(l), l
                    };
                var h, d, y, g, v, m, b, x, w = function() {
                        var t = e.lex();
                        return "number" != typeof t && (t = r.symbols_[t] || t), t || s
                    },
                    O = {
                        $: !0,
                        _$: void 0,
                        yy: f
                    },
                    j = !1;
                try {
                    if (this.__reentrant_call_depth++, e.setInput(t, f), "function" == typeof e.canIUse) e.canIUse().fastLex && (w = p);
                    for (o[u] = null, i[u] = 0, n[u] = 0, ++u, this.pre_parse && this.pre_parse.call(this, f), f.pre_parse && f.pre_parse.call(this, f), x = i[u - 1];;) {
                        if (h = x, this.defaultActions[h]) d = 2, x = this.defaultActions[h];
                        else if (c || (c = w()), g = a[h] && a[h][c] || l, x = g[1], !(d = g[0])) {
                            var _, S = this.describeSymbol(c) || c,
                                A = this.collect_expected_token_set(h);
                            _ = "number" == typeof e.yylineno ? "Parse error on line " + (e.yylineno + 1) + ": " : "Parse error: ", "function" == typeof e.showPosition && (_ += "\n" + e.showPosition(69, 10) + "\n"), A.length ? _ += "Expecting " + A.join(", ") + ", got unexpected " + S : _ += "Unexpected " + S, v = this.constructParseErrorInfo(_, null, A, !1), void 0 !== (y = this.parseError(v.errStr, v, this.JisonParserError)) && (j = y);
                            break
                        }
                        switch (d) {
                            default:
                                if (d instanceof Array) {
                                    v = this.constructParseErrorInfo("Parse Error: multiple actions possible at state: " + h + ", token: " + c, null, null, !1), void 0 !== (y = this.parseError(v.errStr, v, this.JisonParserError)) && (j = y);
                                    break
                                }
                                v = this.constructParseErrorInfo("Parsing halted. No viable error recovery approach available due to internal system failure.", null, null, !1), void 0 !== (y = this.parseError(v.errStr, v, this.JisonParserError)) && (j = y);
                                break;
                            case 1:
                                n[u] = c, o[u] = e.yytext, i[u] = x, ++u, c = 0;
                                continue;
                            case 2:
                                if (m = (b = this.productions_[x - 1])[1], void 0 !== (y = this.performAction.call(O, x, u - 1, o))) {
                                    j = y;
                                    break
                                }
                                u -= m;
                                var k = b[0];
                                n[u] = k, o[u] = O.$, x = a[i[u - 1]][k], i[u] = x, ++u;
                                continue;
                            case 3:
                                -2 !== u && (j = !0, u--, void 0 !== o[u] && (j = o[u]))
                        }
                        break
                    }
                } catch (t) {
                    if (t instanceof this.JisonParserError) throw t;
                    if (e && "function" == typeof e.JisonLexerError && t instanceof e.JisonLexerError) throw t;
                    v = this.constructParseErrorInfo("Parsing aborted due to exception.", t, null, !1), j = !1, void 0 !== (y = this.parseError(v.errStr, v, this.JisonParserError)) && (j = y)
                } finally {
                    j = this.cleanupAfterParse(j, !0, !0), this.__reentrant_call_depth--
                }
                return j
            }
        };
        i.originalParseError = i.parseError, i.originalQuoteName = i.quoteName;
        var o = function() {
            function t(t, e) {
                var r;
                if (Object.defineProperty(this, "name", {
                        enumerable: !1,
                        writable: !1,
                        value: "JisonLexerError"
                    }), null == t && (t = "???"), Object.defineProperty(this, "message", {
                        enumerable: !1,
                        writable: !0,
                        value: t
                    }), this.hash = e, e && e.exception instanceof Error) {
                    var n = e.exception;
                    this.message = n.message || t, r = n.stack
                }
                r || (Error.hasOwnProperty("captureStackTrace") ? Error.captureStackTrace(this, this.constructor) : r = new Error(t).stack), r && Object.defineProperty(this, "stack", {
                    enumerable: !1,
                    writable: !1,
                    value: r
                })
            }
            "function" == typeof Object.setPrototypeOf ? Object.setPrototypeOf(t.prototype, Error.prototype) : t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t.prototype.name = "JisonLexerError";
            var e = {
                EOF: 1,
                ERROR: 2,
                __currentRuleSet__: null,
                __error_infos: [],
                __decompressed: !1,
                done: !1,
                _backtrack: !1,
                _input: "",
                _more: !1,
                _signaled_error_token: !1,
                conditionStack: [],
                match: "",
                matched: "",
                matches: !1,
                yytext: "",
                offset: 0,
                yyleng: 0,
                yylineno: 0,
                yylloc: null,
                constructLexErrorInfo: function(t, e, r) {
                    if (t = "" + t, null == r && (r = !(t.indexOf("\n") > 0 && t.indexOf("^") > 0)), this.yylloc && r)
                        if ("function" == typeof this.prettyPrintRange) {
                            this.prettyPrintRange(this.yylloc);
                            /\n\s*$/.test(t) || (t += "\n"), t += "\n  Erroneous area:\n" + this.prettyPrintRange(this.yylloc)
                        } else if ("function" == typeof this.showPosition) {
                        var n = this.showPosition();
                        n && (t.length && "\n" !== t[t.length - 1] && "\n" !== n[0] ? t += "\n" + n : t += n)
                    }
                    var i = {
                        errStr: t,
                        recoverable: !!e,
                        text: this.match,
                        token: null,
                        line: this.yylineno,
                        loc: this.yylloc,
                        yy: this.yy,
                        lexer: this,
                        destroy: function() {
                            var t = !!this.recoverable;
                            for (var e in this) this.hasOwnProperty(e) && "object" == typeof e && (this[e] = void 0);
                            this.recoverable = t
                        }
                    };
                    return this.__error_infos.push(i), i
                },
                parseError: function(t, e, r) {
                    if (r || (r = this.JisonLexerError), this.yy) {
                        if (this.yy.parser && "function" == typeof this.yy.parser.parseError) return this.yy.parser.parseError.call(this, t, e, r) || this.ERROR;
                        if ("function" == typeof this.yy.parseError) return this.yy.parseError.call(this, t, e, r) || this.ERROR
                    }
                    throw new r(t, e)
                },
                yyerror: function(t) {
                    var e = "";
                    this.yylloc && (e = " on line " + (this.yylineno + 1));
                    var r = this.constructLexErrorInfo("Lexical error" + e + ": " + t, this.options.lexerErrorsAreRecoverable),
                        n = Array.prototype.slice.call(arguments, 1);
                    return n.length && (r.extra_error_attributes = n), this.parseError(r.errStr, r, this.JisonLexerError) || this.ERROR
                },
                cleanupAfterLex: function(t) {
                    if (this.setInput("", {}), !t) {
                        for (var e = this.__error_infos.length - 1; e >= 0; e--) {
                            var r = this.__error_infos[e];
                            r && "function" == typeof r.destroy && r.destroy()
                        }
                        this.__error_infos.length = 0
                    }
                    return this
                },
                clear: function() {
                    this.yytext = "", this.yyleng = 0, this.match = "", this.matches = !1, this._more = !1, this._backtrack = !1;
                    var t = this.yylloc ? this.yylloc.last_column : 0;
                    this.yylloc = {
                        first_line: this.yylineno + 1,
                        first_column: t,
                        last_line: this.yylineno + 1,
                        last_column: t,
                        range: [this.offset, this.offset]
                    }
                },
                setInput: function(t, e) {
                    if (this.yy = e || this.yy || {}, !this.__decompressed) {
                        for (var r = this.rules, n = 0, i = r.length; n < i; n++) {
                            "number" == typeof(p = r[n]) && (r[n] = r[p])
                        }
                        var o = this.conditions;
                        for (var a in o) {
                            var u = o[a],
                                c = u.rules,
                                s = (i = c.length, new Array(i + 1)),
                                l = new Array(i + 1);
                            for (n = 0; n < i; n++) {
                                var f = c[n],
                                    p = r[f];
                                s[n + 1] = p, l[n + 1] = f
                            }
                            u.rules = l, u.__rule_regexes = s, u.__rule_count = i
                        }
                        this.__decompressed = !0
                    }
                    return this._input = t || "", this.clear(), this._signaled_error_token = !1, this.done = !1, this.yylineno = 0, this.matched = "", this.conditionStack = ["INITIAL"], this.__currentRuleSet__ = null, this.yylloc = {
                        first_line: 1,
                        first_column: 0,
                        last_line: 1,
                        last_column: 0,
                        range: [0, 0]
                    }, this.offset = 0, this
                },
                editRemainingInput: function(t, e) {
                    var r = t.call(this, this._input, e);
                    return "string" != typeof r ? r && (this._input = "" + r) : this._input = r, this
                },
                input: function() {
                    if (!this._input) return null;
                    var t = this._input[0];
                    this.yytext += t, this.yyleng++, this.offset++, this.match += t, this.matched += t;
                    var e = 1,
                        r = !1;
                    if ("\n" === t) r = !0;
                    else if ("\r" === t) {
                        r = !0;
                        var n = this._input[1];
                        "\n" === n && (e++, t += n, this.yytext += n, this.yyleng++, this.offset++, this.match += n, this.matched += n, this.yylloc.range[1]++)
                    }
                    return r ? (this.yylineno++, this.yylloc.last_line++, this.yylloc.last_column = 0) : this.yylloc.last_column++, this.yylloc.range[1]++, this._input = this._input.slice(e), t
                },
                unput: function(t) {
                    var e = t.length,
                        r = t.split(/(?:\r\n?|\n)/g);
                    if (this._input = t + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - e), this.yyleng = this.yytext.length, this.offset -= e, this.match = this.match.substr(0, this.match.length - e), this.matched = this.matched.substr(0, this.matched.length - e), r.length > 1) {
                        this.yylineno -= r.length - 1, this.yylloc.last_line = this.yylineno + 1;
                        var n = this.match,
                            i = n.split(/(?:\r\n?|\n)/g);
                        1 === i.length && (i = (n = this.matched).split(/(?:\r\n?|\n)/g)), this.yylloc.last_column = i[i.length - 1].length
                    } else this.yylloc.last_column -= e;
                    return this.yylloc.range[1] = this.yylloc.range[0] + this.yyleng, this.done = !1, this
                },
                more: function() {
                    return this._more = !0, this
                },
                reject: function() {
                    if (this.options.backtrack_lexer) this._backtrack = !0;
                    else {
                        var t = "";
                        this.yylloc && (t = " on line " + (this.yylineno + 1));
                        var e = this.constructLexErrorInfo("Lexical error" + t + ": You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).", !1);
                        this._signaled_error_token = this.parseError(e.errStr, e, this.JisonLexerError) || this.ERROR
                    }
                    return this
                },
                less: function(t) {
                    return this.unput(this.match.slice(t))
                },
                pastInput: function(t, e) {
                    var r = this.matched.substring(0, this.matched.length - this.match.length);
                    t < 0 ? t = r.length : t || (t = 20), e < 0 ? e = r.length : e || (e = 1);
                    var n = (r = r.substr(2 * -t - 2)).replace(/\r\n|\r/g, "\n").split("\n");
                    return (r = (n = n.slice(-e)).join("\n")).length > t && (r = "..." + r.substr(-t)), r
                },
                upcomingInput: function(t, e) {
                    var r = this.match;
                    t < 0 ? t = r.length + this._input.length : t || (t = 20), e < 0 ? e = t : e || (e = 1), r.length < 2 * t + 2 && (r += this._input.substring(0, 2 * t + 2));
                    var n = r.replace(/\r\n|\r/g, "\n").split("\n");
                    return (r = (n = n.slice(0, e)).join("\n")).length > t && (r = r.substring(0, t) + "..."), r
                },
                showPosition: function(t, e) {
                    var r = this.pastInput(t).replace(/\s/g, " "),
                        n = new Array(r.length + 1).join("-");
                    return r + this.upcomingInput(e).replace(/\s/g, " ") + "\n" + n + "^"
                },
                deriveLocationInfo: function(t, e, r, n) {
                    var i = {
                        first_line: 1,
                        first_column: 0,
                        last_line: 1,
                        last_column: 0,
                        range: [0, 0]
                    };
                    return t && (i.first_line = 0 | t.first_line, i.last_line = 0 | t.last_line, i.first_column = 0 | t.first_column, i.last_column = 0 | t.last_column, t.range && (i.range[0] = 0 | t.range[0], i.range[1] = 0 | t.range[1])), (i.first_line <= 0 || i.last_line < i.first_line) && (i.first_line <= 0 && e && (i.first_line = 0 | e.last_line, i.first_column = 0 | e.last_column, e.range && (i.range[0] = 0 | t.range[1])), (i.last_line <= 0 || i.last_line < i.first_line) && r && (i.last_line = 0 | r.first_line, i.last_column = 0 | r.first_column, r.range && (i.range[1] = 0 | t.range[0])), i.first_line <= 0 && n && (i.last_line <= 0 || n.last_line <= i.last_line) && (i.first_line = 0 | n.first_line, i.first_column = 0 | n.first_column, n.range && (i.range[0] = 0 | n.range[0])), i.last_line <= 0 && n && (i.first_line <= 0 || n.first_line >= i.first_line) && (i.last_line = 0 | n.last_line, i.last_column = 0 | n.last_column, n.range && (i.range[1] = 0 | n.range[1]))), i.last_line <= 0 && (i.first_line <= 0 ? (i.first_line = this.yylloc.first_line, i.last_line = this.yylloc.last_line, i.first_column = this.yylloc.first_column, i.last_column = this.yylloc.last_column, i.range[0] = this.yylloc.range[0], i.range[1] = this.yylloc.range[1]) : (i.last_line = this.yylloc.last_line, i.last_column = this.yylloc.last_column, i.range[1] = this.yylloc.range[1])), i.first_line <= 0 && (i.first_line = i.last_line, i.first_column = 0, i.range[1] = i.range[0]), i.first_column < 0 && (i.first_column = 0), i.last_column < 0 && (i.last_column = i.first_column > 0 ? i.first_column : 80), i
                },
                prettyPrintRange: function(t, e, r) {
                    t = this.deriveLocationInfo(t, e, r);
                    var n = (this.matched + this._input).split("\n"),
                        i = Math.max(1, e ? e.first_line : t.first_line - 3),
                        o = Math.max(1, r ? r.last_line : t.last_line + 1),
                        a = 1 + Math.log10(1 | o) | 0,
                        u = new Array(a).join(" "),
                        c = [],
                        s = n.slice(i - 1, o + 1).map((function(e, r) {
                            var n = r + i,
                                o = (u + n).substr(-a) + ": " + e,
                                s = new Array(a + 1).join("^"),
                                l = 3,
                                f = 0;
                            (n === t.first_line ? (l += t.first_column, f = Math.max(2, (n === t.last_line ? t.last_column : e.length) - t.first_column + 1)) : n === t.last_line ? f = Math.max(2, t.last_column + 1) : n > t.first_line && n < t.last_line && (f = Math.max(2, e.length + 1)), f) && (o += "\n" + s + new Array(l).join(".") + new Array(f).join("^"), e.trim().length > 0 && c.push(r));
                            return o = o.replace(/\t/g, " ")
                        }));
                    if (c.length > 4) {
                        var l = c[1] + 1,
                            f = c[c.length - 2] - 1,
                            p = new Array(a + 1).join(" ") + "  (...continued...)";
                        p += "\n" + new Array(a + 1).join("-") + "  (---------------)", s.splice(l, f - l + 1, p)
                    }
                    return s.join("\n")
                },
                describeYYLLOC: function(t, e) {
                    var r, n = t.first_line,
                        i = t.last_line,
                        o = t.first_column,
                        a = t.last_column;
                    if (0 === i - n ? (r = "line " + n + ", ", r += a - o <= 1 ? "column " + o : "columns " + o + " .. " + a) : r = "lines " + n + "(column " + o + ") .. " + i + "(column " + a + ")", t.range && e) {
                        var u = t.range[0],
                            c = t.range[1] - 1;
                        r += c <= u ? " {String Offset: " + u + "}" : " {String Offset range: " + u + " .. " + c + "}"
                    }
                    return r
                },
                test_match: function(t, e) {
                    var r, n, i, o, a;
                    if (this.options.backtrack_lexer && (i = {
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
                        }), a = (o = t[0]).length, (n = o.split(/(?:\r\n?|\n)/g)).length > 1 ? (this.yylineno += n.length - 1, this.yylloc.last_line = this.yylineno + 1, this.yylloc.last_column = n[n.length - 1].length) : this.yylloc.last_column += a, this.yytext += o, this.match += o, this.matched += o, this.matches = t, this.yyleng = this.yytext.length, this.yylloc.range[1] += a, this.offset += a, this._more = !1, this._backtrack = !1, this._input = this._input.slice(a), r = this.performAction.call(this, this.yy, e, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), r) return r;
                    if (this._backtrack) {
                        for (var u in i) this[u] = i[u];
                        return this.__currentRuleSet__ = null, !1
                    }
                    return !!this._signaled_error_token && (r = this._signaled_error_token, this._signaled_error_token = !1, r)
                },
                next: function() {
                    if (this.done) return this.clear(), this.EOF;
                    var t, e, r, n;
                    this._input || (this.done = !0), this._more || this.clear();
                    var i = this.__currentRuleSet__;
                    if (!(i || (i = this.__currentRuleSet__ = this._currentRules()) && i.rules)) {
                        var o = "";
                        this.options.trackPosition && (o = " on line " + (this.yylineno + 1));
                        var a = this.constructLexErrorInfo("Internal lexer engine error" + o + ': The lex grammar programmer pushed a non-existing condition name "' + this.topState() + '"; this is a fatal error and should be reported to the application programmer team!', !1);
                        return this.parseError(a.errStr, a, this.JisonLexerError) || this.ERROR
                    }
                    for (var u = i.rules, c = i.__rule_regexes, s = i.__rule_count, l = 1; l <= s; l++)
                        if ((r = this._input.match(c[l])) && (!e || r[0].length > e[0].length)) {
                            if (e = r, n = l, this.options.backtrack_lexer) {
                                if (!1 !== (t = this.test_match(r, u[l]))) return t;
                                if (this._backtrack) {
                                    e = void 0;
                                    continue
                                }
                                return !1
                            }
                            if (!this.options.flex) break
                        } if (e) return !1 !== (t = this.test_match(e, u[n])) && t;
                    if (this._input) {
                        o = "";
                        this.options.trackPosition && (o = " on line " + (this.yylineno + 1));
                        a = this.constructLexErrorInfo("Lexical error" + o + ": Unrecognized text.", this.options.lexerErrorsAreRecoverable);
                        var f = this._input,
                            p = this.topState(),
                            h = this.conditionStack.length;
                        return (t = this.parseError(a.errStr, a, this.JisonLexerError) || this.ERROR) === this.ERROR && (this.matches || f !== this._input || p !== this.topState() || h !== this.conditionStack.length || this.input()), t
                    }
                    return this.done = !0, this.clear(), this.EOF
                },
                lex: function() {
                    var t;
                    for ("function" == typeof this.pre_lex && (t = this.pre_lex.call(this, 0)), "function" == typeof this.options.pre_lex && (t = this.options.pre_lex.call(this, t) || t), this.yy && "function" == typeof this.yy.pre_lex && (t = this.yy.pre_lex.call(this, t) || t); !t;) t = this.next();
                    return this.yy && "function" == typeof this.yy.post_lex && (t = this.yy.post_lex.call(this, t) || t), "function" == typeof this.options.post_lex && (t = this.options.post_lex.call(this, t) || t), "function" == typeof this.post_lex && (t = this.post_lex.call(this, t) || t), t
                },
                fastLex: function() {
                    for (var t; !t;) t = this.next();
                    return t
                },
                canIUse: function() {
                    return {
                        fastLex: !("function" == typeof this.pre_lex || "function" == typeof this.options.pre_lex || this.yy && "function" == typeof this.yy.pre_lex || this.yy && "function" == typeof this.yy.post_lex || "function" == typeof this.options.post_lex || "function" == typeof this.post_lex) && "function" == typeof this.fastLex
                    }
                },
                begin: function(t) {
                    return this.pushState(t)
                },
                pushState: function(t) {
                    return this.conditionStack.push(t), this.__currentRuleSet__ = null, this
                },
                popState: function() {
                    return this.conditionStack.length - 1 > 0 ? (this.__currentRuleSet__ = null, this.conditionStack.pop()) : this.conditionStack[0]
                },
                topState: function(t) {
                    return (t = this.conditionStack.length - 1 - Math.abs(t || 0)) >= 0 ? this.conditionStack[t] : "INITIAL"
                },
                _currentRules: function() {
                    return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]] : this.conditions.INITIAL
                },
                stateStackSize: function() {
                    return this.conditionStack.length
                },
                options: {
                    trackPosition: !0
                },
                JisonLexerError: t,
                performAction: function(t, e, r) {
                    if (1 !== e) return this.simpleCaseActionClusters[e]
                },
                simpleCaseActionClusters: {
                    /*! Conditions:: INITIAL */
                    /*! Rule::       (--[0-9a-z-A-Z-]*) */
                    0: 13,
                    /*! Conditions:: INITIAL */
                    /*! Rule::       \* */ 2: 5,
                    /*! Conditions:: INITIAL */
                    /*! Rule::       \/ */ 3: 6,
                    /*! Conditions:: INITIAL */
                    /*! Rule::       \+ */ 4: 3,
                    /*! Conditions:: INITIAL */
                    /*! Rule::       - */ 5: 4,
                    /*! Conditions:: INITIAL */
                    /*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)px\b */ 6: 15,
                    /*! Conditions:: INITIAL */
                    /*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)cm\b */ 7: 15,
                    /*! Conditions:: INITIAL */
                    /*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)mm\b */ 8: 15,
                    /*! Conditions:: INITIAL */
                    /*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)in\b */ 9: 15,
                    /*! Conditions:: INITIAL */
                    /*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)pt\b */ 10: 15,
                    /*! Conditions:: INITIAL */
                    /*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)pc\b */ 11: 15,
                    /*! Conditions:: INITIAL */
                    /*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)deg\b */ 12: 16,
                    /*! Conditions:: INITIAL */
                    /*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)grad\b */ 13: 16,
                    /*! Conditions:: INITIAL */
                    /*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)rad\b */ 14: 16,
                    /*! Conditions:: INITIAL */
                    /*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)turn\b */ 15: 16,
                    /*! Conditions:: INITIAL */
                    /*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)s\b */ 16: 17,
                    /*! Conditions:: INITIAL */
                    /*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)ms\b */ 17: 17,
                    /*! Conditions:: INITIAL */
                    /*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)Hz\b */ 18: 18,
                    /*! Conditions:: INITIAL */
                    /*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)kHz\b */ 19: 18,
                    /*! Conditions:: INITIAL */
                    /*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)dpi\b */ 20: 19,
                    /*! Conditions:: INITIAL */
                    /*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)dpcm\b */ 21: 19,
                    /*! Conditions:: INITIAL */
                    /*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)dppx\b */ 22: 19,
                    /*! Conditions:: INITIAL */
                    /*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)em\b */ 23: 20,
                    /*! Conditions:: INITIAL */
                    /*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)ex\b */ 24: 21,
                    /*! Conditions:: INITIAL */
                    /*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)ch\b */ 25: 22,
                    /*! Conditions:: INITIAL */
                    /*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)rem\b */ 26: 23,
                    /*! Conditions:: INITIAL */
                    /*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)vw\b */ 27: 25,
                    /*! Conditions:: INITIAL */
                    /*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)vh\b */ 28: 24,
                    /*! Conditions:: INITIAL */
                    /*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)vmin\b */ 29: 26,
                    /*! Conditions:: INITIAL */
                    /*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)vmax\b */ 30: 27,
                    /*! Conditions:: INITIAL */
                    /*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)% */ 31: 28,
                    /*! Conditions:: INITIAL */
                    /*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)\b */ 32: 11,
                    /*! Conditions:: INITIAL */
                    /*! Rule::       (calc) */ 33: 9,
                    /*! Conditions:: INITIAL */
                    /*! Rule::       (var) */ 34: 12,
                    /*! Conditions:: INITIAL */
                    /*! Rule::       ([a-z]+) */ 35: 10,
                    /*! Conditions:: INITIAL */
                    /*! Rule::       \( */ 36: 7,
                    /*! Conditions:: INITIAL */
                    /*! Rule::       \) */ 37: 8,
                    /*! Conditions:: INITIAL */
                    /*! Rule::       , */ 38: 14,
                    /*! Conditions:: INITIAL */
                    /*! Rule::       $ */ 39: 1
                },
                rules: [/^(?:(--[\d\-A-Za-z]*))/, /^(?:\s+)/, /^(?:\*)/, /^(?:\/)/, /^(?:\+)/, /^(?:-)/, /^(?:(\d+(\.\d*)?|\.\d+)px\b)/, /^(?:(\d+(\.\d*)?|\.\d+)cm\b)/, /^(?:(\d+(\.\d*)?|\.\d+)mm\b)/, /^(?:(\d+(\.\d*)?|\.\d+)in\b)/, /^(?:(\d+(\.\d*)?|\.\d+)pt\b)/, /^(?:(\d+(\.\d*)?|\.\d+)pc\b)/, /^(?:(\d+(\.\d*)?|\.\d+)deg\b)/, /^(?:(\d+(\.\d*)?|\.\d+)grad\b)/, /^(?:(\d+(\.\d*)?|\.\d+)rad\b)/, /^(?:(\d+(\.\d*)?|\.\d+)turn\b)/, /^(?:(\d+(\.\d*)?|\.\d+)s\b)/, /^(?:(\d+(\.\d*)?|\.\d+)ms\b)/, /^(?:(\d+(\.\d*)?|\.\d+)Hz\b)/, /^(?:(\d+(\.\d*)?|\.\d+)kHz\b)/, /^(?:(\d+(\.\d*)?|\.\d+)dpi\b)/, /^(?:(\d+(\.\d*)?|\.\d+)dpcm\b)/, /^(?:(\d+(\.\d*)?|\.\d+)dppx\b)/, /^(?:(\d+(\.\d*)?|\.\d+)em\b)/, /^(?:(\d+(\.\d*)?|\.\d+)ex\b)/, /^(?:(\d+(\.\d*)?|\.\d+)ch\b)/, /^(?:(\d+(\.\d*)?|\.\d+)rem\b)/, /^(?:(\d+(\.\d*)?|\.\d+)vw\b)/, /^(?:(\d+(\.\d*)?|\.\d+)vh\b)/, /^(?:(\d+(\.\d*)?|\.\d+)vmin\b)/, /^(?:(\d+(\.\d*)?|\.\d+)vmax\b)/, /^(?:(\d+(\.\d*)?|\.\d+)%)/, /^(?:(\d+(\.\d*)?|\.\d+)\b)/, /^(?:(calc))/, /^(?:(var))/, /^(?:([a-z]+))/, /^(?:\()/, /^(?:\))/, /^(?:,)/, /^(?:$)/],
                conditions: {
                    INITIAL: {
                        rules: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39],
                        inclusive: !0
                    }
                }
            };
            return e
        }();

        function a() {
            this.yy = {}
        }
        return i.lexer = o, a.prototype = i, i.Parser = a, new a
    }();
    n = i, i.Parser
})), n.register("3Xv1C", (function(t, e) {
    Object.defineProperty(t.exports, "__esModule", {
        value: !0
    }), t.exports.flip = s;
    var r, i = n("5V609"),
        o = (r = i) && r.__esModule ? r : {
            default: r
        };

    function a(t, e) {
        return "MathExpression" === t.type ? function(t, e) {
            switch (t = function(t, e) {
                    var r = (0, o.default)(t.left, t.right, e),
                        n = a(r.left, e),
                        i = a(r.right, e);
                    "MathExpression" === n.type && "MathExpression" === i.type && ("/" === n.operator && "*" === i.operator || "-" === n.operator && "+" === i.operator || "*" === n.operator && "/" === i.operator || "+" === n.operator && "-" === i.operator) && (u(n.right, i.right) ? r = (0, o.default)(n.left, i.left, e) : u(n.right, i.left) && (r = (0, o.default)(n.left, i.right, e)), n = a(r.left, e), i = a(r.right, e));
                    return t.left = n, t.right = i, t
                }(t, e), t.operator) {
                case "+":
                case "-":
                    return function(t, e) {
                        var r = t,
                            n = r.left,
                            i = r.right,
                            o = r.operator;
                        if ("CssVariable" === n.type || "CssVariable" === i.type) return t;
                        if (0 === i.value) return n;
                        if (0 === n.value && "+" === o) return i;
                        if (0 === n.value && "-" === o) return l(i);
                        n.type === i.type && c(n.type) && ((t = Object.assign({}, n)).value = "+" === o ? n.value + i.value : n.value - i.value);
                        if (c(n.type) && ("+" === i.operator || "-" === i.operator) && "MathExpression" === i.type) {
                            if (n.type === i.left.type) return (t = Object.assign({}, t)).left = a({
                                type: "MathExpression",
                                operator: o,
                                left: n,
                                right: i.left
                            }, e), t.right = i.right, t.operator = "-" === o ? s(i.operator) : i.operator, a(t, e);
                            if (n.type === i.right.type) return (t = Object.assign({}, t)).left = a({
                                type: "MathExpression",
                                operator: "-" === o ? s(i.operator) : i.operator,
                                left: n,
                                right: i.right
                            }, e), t.right = i.left, a(t, e)
                        }
                        if ("MathExpression" === n.type && ("+" === n.operator || "-" === n.operator) && c(i.type)) {
                            if (i.type === n.left.type) return (t = Object.assign({}, n)).left = a({
                                type: "MathExpression",
                                operator: o,
                                left: n.left,
                                right: i
                            }, e), a(t, e);
                            if (i.type === n.right.type) return t = Object.assign({}, n), "-" === n.operator ? (t.right = a({
                                type: "MathExpression",
                                operator: "-" === o ? "+" : "-",
                                left: i,
                                right: n.right
                            }, e), t.operator = "-" === o ? "-" : "+") : t.right = a({
                                type: "MathExpression",
                                operator: o,
                                left: n.right,
                                right: i
                            }, e), t.right.value < 0 && (t.right.value *= -1, t.operator = "-" === t.operator ? "+" : "-"), a(t, e)
                        }
                        return t
                    }(t, e);
                case "/":
                    return function(t, e) {
                        if (!c(t.right.type)) return t;
                        if ("Value" !== t.right.type) throw new Error('Cannot divide by "' + t.right.unit + '", number expected');
                        if (0 === t.right.value) throw new Error("Cannot divide by zero");
                        if ("MathExpression" === t.left.type) return c(t.left.left.type) && c(t.left.right.type) ? (t.left.left.value /= t.right.value, t.left.right.value /= t.right.value, a(t.left, e)) : t;
                        if (c(t.left.type)) return t.left.value /= t.right.value, t.left;
                        return t
                    }(t, e);
                case "*":
                    return function(t) {
                        if ("MathExpression" === t.left.type && "Value" === t.right.type) {
                            if (c(t.left.left.type) && c(t.left.right.type)) return t.left.left.value *= t.right.value, t.left.right.value *= t.right.value, t.left
                        } else {
                            if (c(t.left.type) && "Value" === t.right.type) return t.left.value *= t.right.value, t.left;
                            if ("Value" === t.left.type && "MathExpression" === t.right.type) {
                                if (c(t.right.left.type) && c(t.right.right.type)) return t.right.left.value *= t.left.value, t.right.right.value *= t.left.value, t.right
                            } else if ("Value" === t.left.type && c(t.right.type)) return t.right.value *= t.left.value, t.right
                        }
                        return t
                    }(t)
            }
            return t
        }(t, e) : "Calc" === t.type ? a(t.value, e) : t
    }

    function u(t, e) {
        return t.type === e.type && t.value === e.value
    }

    function c(t) {
        switch (t) {
            case "LengthValue":
            case "AngleValue":
            case "TimeValue":
            case "FrequencyValue":
            case "ResolutionValue":
            case "EmValue":
            case "ExValue":
            case "ChValue":
            case "RemValue":
            case "VhValue":
            case "VwValue":
            case "VminValue":
            case "VmaxValue":
            case "PercentageValue":
            case "Value":
                return !0
        }
        return !1
    }

    function s(t) {
        return "+" === t ? "-" : "+"
    }

    function l(t) {
        return c(t.type) ? t.value = -t.value : "MathExpression" == t.type && (t.left = l(t.left), t.right = l(t.right)), t
    }
    t.exports.default = a
})), n.register("5V609", (function(t, e) {
    Object.defineProperty(t.exports, "__esModule", {
        value: !0
    });
    var r, i = n("g9HMb"),
        o = (r = i) && r.__esModule ? r : {
            default: r
        };
    t.exports.default = function(t, e, r) {
        switch (t.type) {
            case "LengthValue":
            case "AngleValue":
            case "TimeValue":
            case "FrequencyValue":
            case "ResolutionValue":
                return function(t, e, r) {
                    e.type === t.type && (e = {
                        type: t.type,
                        value: (0, o.default)(e.value, e.unit, t.unit, r),
                        unit: t.unit
                    });
                    return {
                        left: t,
                        right: e
                    }
                }(t, e, r);
            default:
                return {
                    left: t, right: e
                }
        }
    }, t.exports = t.exports.default
})), n.register("g9HMb", (function(t, e) {
    var r = {
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
            mm: .1,
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
            px: .75,
            cm: 72 / 2.54,
            mm: 72 / 25.4,
            in: 72,
            pt: 1,
            pc: 12
        },
        pc: {
            px: .0625,
            cm: 6 / 2.54,
            mm: 6 / 25.4,
            in: 6,
            pt: 6 / 72,
            pc: 1
        },
        deg: {
            deg: 1,
            grad: .9,
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
            rad: .5 / Math.PI,
            turn: 1
        },
        s: {
            s: 1,
            ms: .001
        },
        ms: {
            s: 1e3,
            ms: 1
        },
        Hz: {
            Hz: 1,
            kHz: 1e3
        },
        kHz: {
            Hz: .001,
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
    t.exports = function(t, e, n, i) {
        if (!r.hasOwnProperty(n)) throw new Error("Cannot convert to " + n);
        if (!r[n].hasOwnProperty(e)) throw new Error("Cannot convert from " + e + " to " + n);
        var o = r[n][e] * t;
        return !1 !== i ? (i = Math.pow(10, parseInt(i) || 5), Math.round(o * i) / i) : o
    }
})), n.register("02U1p", (function(t, e) {
    Object.defineProperty(t.exports, "__esModule", {
        value: !0
    }), t.exports.default = function(t, e, r) {
        var n = a(e, r);
        return "MathExpression" === e.type && (n = t + "(" + n + ")"), n
    };
    var r = n("3Xv1C"),
        i = {
            "*": 0,
            "/": 0,
            "+": 1,
            "-": 1
        };

    function o(t, e) {
        if (!1 !== e) {
            var r = Math.pow(10, e);
            return Math.round(t * r) / r
        }
        return t
    }

    function a(t, e) {
        switch (t.type) {
            case "MathExpression":
                var n = t.left,
                    u = t.right,
                    c = t.operator,
                    s = "";
                return "MathExpression" === n.type && i[c] < i[n.operator] ? s += "(" + a(n, e) + ")" : s += a(n, e), s += " " + t.operator + " ", "MathExpression" === u.type && i[c] < i[u.operator] ? s += "(" + a(u, e) + ")" : "MathExpression" === u.type && "-" === c && ["+", "-"].includes(u.operator) ? (u.operator = (0, r.flip)(u.operator), s += a(u, e)) : s += a(u, e), s;
            case "Value":
                return o(t.value, e);
            case "CssVariable":
                return t.fallback ? "var(" + t.value + ", " + a(t.fallback, e) + ")" : "var(" + t.value + ")";
            case "Calc":
                return t.prefix ? "-" + t.prefix + "-calc(" + a(t.value, e) + ")" : "calc(" + a(t.value, e) + ")";
            default:
                return o(t.value, e) + t.unit
        }
    }
    t.exports = t.exports.default
})), n.register("fI5bH", (function(r, i) {
    e(r.exports, "mathSign", (function() {
        return l
    })), e(r.exports, "isPercent", (function() {
        return f
    })), e(r.exports, "isNumber", (function() {
        return p
    })), e(r.exports, "isNumOrStr", (function() {
        return h
    })), e(r.exports, "uniqueId", (function() {
        return y
    })), e(r.exports, "getPercentValue", (function() {
        return g
    })), e(r.exports, "getAnyElementOfObject", (function() {
        return v
    })), e(r.exports, "hasDuplicate", (function() {
        return m
    })), e(r.exports, "interpolateNumber", (function() {
        return b
    })), e(r.exports, "findEntryInArray", (function() {
        return x
    }));
    var o = n("hq7xU"),
        a = n("42aAU"),
        u = n("aK0R4"),
        c = n("lB4XP"),
        s = n("3yFxZ"),
        l = function(t) {
            return 0 === t ? 0 : t > 0 ? 1 : -1
        },
        f = function(e) {
            return t(s)(e) && e.indexOf("%") === e.length - 1
        },
        p = function(e) {
            return t(c)(e) && !t(u)(e)
        },
        h = function(e) {
            return p(e) || t(s)(e)
        },
        d = 0,
        y = function(t) {
            var e = ++d;
            return "".concat(t || "").concat(e)
        },
        g = function(e, r) {
            var n, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (!p(e) && !t(s)(e)) return i;
            if (f(e)) {
                var a = e.indexOf("%");
                n = r * parseFloat(e.slice(0, a)) / 100
            } else n = +e;
            return t(u)(n) && (n = i), o && n > r && (n = r), n
        },
        v = function(t) {
            if (!t) return null;
            var e = Object.keys(t);
            return e && e.length ? t[e[0]] : null
        },
        m = function(e) {
            if (!t(a)(e)) return !1;
            for (var r = e.length, n = {}, i = 0; i < r; i++) {
                if (n[e[i]]) return !0;
                n[e[i]] = !0
            }
            return !1
        },
        b = function(t, e) {
            return p(t) && p(e) ? function(r) {
                return t + r * (e - t)
            } : function() {
                return e
            }
        };

    function x(e, r, n) {
        return e && e.length ? e.find((function(e) {
            return e && ("function" == typeof r ? r(e) : t(o)(e, r)) === n
        })) : null
    }
})), n.register("hq7xU", (function(t, e) {
    var r = n("4d9y9");
    t.exports = function(t, e, n) {
        var i = null == t ? void 0 : r(t, e);
        return void 0 === i ? n : i
    }
})), n.register("4d9y9", (function(t, e) {
    var r = n("d4pOq"),
        i = n("81xrH");
    t.exports = function(t, e) {
        for (var n = 0, o = (e = r(e, t)).length; null != t && n < o;) t = t[i(e[n++])];
        return n && n == o ? t : void 0
    }
})), n.register("d4pOq", (function(t, e) {
    var r = n("42aAU"),
        i = n("dwDjY"),
        o = n("28NNu"),
        a = n("1jeW4");
    t.exports = function(t, e) {
        return r(t) ? t : i(t, e) ? [t] : o(a(t))
    }
})), n.register("dwDjY", (function(t, e) {
    var r = n("42aAU"),
        i = n("7vNjG"),
        o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        a = /^\w*$/;
    t.exports = function(t, e) {
        if (r(t)) return !1;
        var n = typeof t;
        return !("number" != n && "symbol" != n && "boolean" != n && null != t && !i(t)) || (a.test(t) || !o.test(t) || null != e && t in Object(e))
    }
})), n.register("7vNjG", (function(t, e) {
    var r = n("ji23K"),
        i = n("cYleL");
    t.exports = function(t) {
        return "symbol" == typeof t || i(t) && "[object Symbol]" == r(t)
    }
})), n.register("28NNu", (function(t, e) {
    var r = n("jaa7I"),
        i = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        o = /\\(\\)?/g,
        a = r((function(t) {
            var e = [];
            return 46 === t.charCodeAt(0) && e.push(""), t.replace(i, (function(t, r, n, i) {
                e.push(n ? i.replace(o, "$1") : r || t)
            })), e
        }));
    t.exports = a
})), n.register("jaa7I", (function(t, e) {
    var r = n("28i7w");
    t.exports = function(t) {
        var e = r(t, (function(t) {
                return 500 === n.size && n.clear(), t
            })),
            n = e.cache;
        return e
    }
})), n.register("28i7w", (function(t, e) {
    var r = n("jhqEi");

    function i(t, e) {
        if ("function" != typeof t || null != e && "function" != typeof e) throw new TypeError("Expected a function");
        var n = function() {
            var r = arguments,
                i = e ? e.apply(this, r) : r[0],
                o = n.cache;
            if (o.has(i)) return o.get(i);
            var a = t.apply(this, r);
            return n.cache = o.set(i, a) || o, a
        };
        return n.cache = new(i.Cache || r), n
    }
    i.Cache = r, t.exports = i
})), n.register("1jeW4", (function(t, e) {
    var r = n("4bexB");
    t.exports = function(t) {
        return null == t ? "" : r(t)
    }
})), n.register("4bexB", (function(t, e) {
    var r = n("9EM1e"),
        i = n("3RBci"),
        o = n("42aAU"),
        a = n("7vNjG"),
        u = r ? r.prototype : void 0,
        c = u ? u.toString : void 0;
    t.exports = function t(e) {
        if ("string" == typeof e) return e;
        if (o(e)) return i(e, t) + "";
        if (a(e)) return c ? c.call(e) : "";
        var r = e + "";
        return "0" == r && 1 / e == -Infinity ? "-0" : r
    }
})), n.register("3RBci", (function(t, e) {
    t.exports = function(t, e) {
        for (var r = -1, n = null == t ? 0 : t.length, i = Array(n); ++r < n;) i[r] = e(t[r], r, t);
        return i
    }
})), n.register("81xrH", (function(t, e) {
    var r = n("7vNjG");
    t.exports = function(t) {
        if ("string" == typeof t || r(t)) return t;
        var e = t + "";
        return "0" == e && 1 / t == -Infinity ? "-0" : e
    }
})), n.register("aK0R4", (function(t, e) {
    var r = n("lB4XP");
    t.exports = function(t) {
        return r(t) && t != +t
    }
})), n.register("lB4XP", (function(t, e) {
    var r = n("ji23K"),
        i = n("cYleL");
    t.exports = function(t) {
        return "number" == typeof t || i(t) && "[object Number]" == r(t)
    }
})), n.register("3yFxZ", (function(t, e) {
    var r = n("ji23K"),
        i = n("42aAU"),
        o = n("cYleL");
    t.exports = function(t) {
        return "string" == typeof t || !i(t) && o(t) && "[object String]" == r(t)
    }
})), n.register("ipNOV", (function(t, r) {
    e(t.exports, "Global", (function() {
        return n
    }));
    var n = {
        isSsr: !("undefined" != typeof window && window.document && window.document.createElement && window.setTimeout),
        get: function(t) {
            return n[t]
        },
        set: function(t, e) {
            if ("string" == typeof t) n[t] = e;
            else {
                var r = Object.keys(t);
                r && r.length && r.forEach((function(e) {
                    n[e] = t[e]
                }))
            }
        }
    }
})), n.register("bC8Qw", (function(t, r) {
    e(t.exports, "getStringSize", (function() {
        return y
    })), e(t.exports, "getOffset", (function() {
        return g
    })), e(t.exports, "calculateChartCoordinate", (function() {
        return v
    }));
    var i = n("ipNOV");

    function o(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), r.push.apply(r, n)
        }
        return r
    }

    function a(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2 ? o(Object(r), !0).forEach((function(e) {
                u(t, e, r[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : o(Object(r)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
            }))
        }
        return t
    }

    function u(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = r, t
    }

    function c(t) {
        return function(t) {
            if (Array.isArray(t)) return s(t)
        }(t) || function(t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
        }(t) || function(t, e) {
            if (!t) return;
            if ("string" == typeof t) return s(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(t);
            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return s(t, e)
        }(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function s(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n
    }
    var l = {
            widthCache: {},
            cacheCount: 0
        },
        f = {
            position: "absolute",
            top: "-20000px",
            left: 0,
            padding: 0,
            margin: 0,
            border: "none",
            whiteSpace: "pre"
        },
        p = ["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height", "top", "left", "fontSize", "lineHeight", "padding", "margin", "paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom"],
        h = "recharts_measurement_span";
    var d = function(t) {
            return Object.keys(t).reduce((function(e, r) {
                return "".concat(e).concat((o = r, o.split("").reduce((function(t, e) {
                    return e === e.toUpperCase() ? [].concat(c(t), ["-", e.toLowerCase()]) : [].concat(c(t), [e])
                }), []).join("")), ":").concat((n = r, i = t[r], p.indexOf(n) >= 0 && i === +i ? "".concat(i, "px") : i), ";");
                var n, i, o
            }), "")
        },
        y = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (null == t || i.Global.isSsr) return {
                width: 0,
                height: 0
            };
            var r = "".concat(t),
                n = d(e),
                o = "".concat(r, "-").concat(n);
            if (l.widthCache[o]) return l.widthCache[o];
            try {
                var u = document.getElementById(h);
                u || ((u = document.createElement("span")).setAttribute("id", h), u.setAttribute("aria-hidden", "true"), document.body.appendChild(u));
                var c = a(a({}, f), e);
                Object.keys(c).map((function(t) {
                    return u.style[t] = c[t], t
                })), u.textContent = r;
                var s = u.getBoundingClientRect(),
                    p = {
                        width: s.width,
                        height: s.height
                    };
                return l.widthCache[o] = p, ++l.cacheCount > 2e3 && (l.cacheCount = 0, l.widthCache = {}), p
            } catch (t) {
                return {
                    width: 0,
                    height: 0
                }
            }
        },
        g = function(t) {
            var e = t.ownerDocument.documentElement,
                r = {
                    top: 0,
                    left: 0
                };
            return void 0 !== t.getBoundingClientRect && (r = t.getBoundingClientRect()), {
                top: r.top + window.pageYOffset - e.clientTop,
                left: r.left + window.pageXOffset - e.clientLeft
            }
        },
        v = function(t, e) {
            return {
                chartX: Math.round(t.pageX - e.left),
                chartY: Math.round(t.pageY - e.top)
            }
        }
})), n.register("kEum4", (function(r, i) {
    e(r.exports, "getDisplayName", (function() {
        return y
    })), e(r.exports, "findAllByType", (function() {
        return b
    })), e(r.exports, "findChildByType", (function() {
        return x
    })), e(r.exports, "validateWidthHeight", (function() {
        return w
    })), e(r.exports, "isChildrenEqual", (function() {
        return _
    })), e(r.exports, "renderByOrder", (function() {
        return A
    })), e(r.exports, "getReactEventByType", (function() {
        return k
    })), e(r.exports, "parseChildIndex", (function() {
        return E
    }));
    var o = n("3yFxZ"),
        a = n("hq7xU"),
        u = n("bZbba"),
        c = n("42aAU"),
        s = n("fywoC"),
        l = n("gA1Br"),
        f = n("fI5bH"),
        p = n("d6aDM");

    function h(t, e) {
        if (null == t) return {};
        var r, n, i = function(t, e) {
            if (null == t) return {};
            var r, n, i = {},
                o = Object.keys(t);
            for (n = 0; n < o.length; n++) r = o[n], e.indexOf(r) >= 0 || (i[r] = t[r]);
            return i
        }(t, e);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(t);
            for (n = 0; n < o.length; n++) r = o[n], e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (i[r] = t[r])
        }
        return i
    }
    var d = {
            click: "onClick",
            mousedown: "onMouseDown",
            mouseup: "onMouseUp",
            mouseover: "onMouseOver",
            mousemove: "onMouseMove",
            mouseout: "onMouseOut",
            mouseenter: "onMouseEnter",
            mouseleave: "onMouseLeave",
            touchcancel: "onTouchCancel",
            touchend: "onTouchEnd",
            touchmove: "onTouchMove",
            touchstart: "onTouchStart"
        },
        y = function(t) {
            return "string" == typeof t ? t : t ? t.displayName || t.name || "Component" : ""
        },
        g = null,
        v = null,
        m = function e(r) {
            if (r === g && t(c)(v)) return v;
            var n = [];
            return s.Children.forEach(r, (function(r) {
                t(u)(r) || ((0, l.isFragment)(r) ? n = n.concat(e(r.props.children)) : n.push(r))
            })), v = n, g = r, n
        },
        b = function(e, r) {
            var n = [],
                i = [];
            return i = t(c)(r) ? r.map((function(t) {
                return y(t)
            })) : [y(r)], m(e).forEach((function(e) {
                var r = t(a)(e, "type.displayName") || t(a)(e, "type.name"); - 1 !== i.indexOf(r) && n.push(e)
            })), n
        },
        x = function(t, e) {
            var r = b(t, e);
            return r && r[0]
        },
        w = function(t) {
            if (!t || !t.props) return !1;
            var e = t.props,
                r = e.width,
                n = e.height;
            return !(!(0, f.isNumber)(r) || r <= 0 || !(0, f.isNumber)(n) || n <= 0)
        },
        O = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"],
        j = function(e) {
            return e && e.type && t(o)(e.type) && O.indexOf(e.type) >= 0
        },
        _ = function e(r, n) {
            if (r === n) return !0;
            var i = s.Children.count(r);
            if (i !== s.Children.count(n)) return !1;
            if (0 === i) return !0;
            if (1 === i) return S(t(c)(r) ? r[0] : r, t(c)(n) ? n[0] : n);
            for (var o = 0; o < i; o++) {
                var a = r[o],
                    u = n[o];
                if (t(c)(a) || t(c)(u)) {
                    if (!e(a, u)) return !1
                } else if (!S(a, u)) return !1
            }
            return !0
        },
        S = function(e, r) {
            if (t(u)(e) && t(u)(r)) return !0;
            if (!t(u)(e) && !t(u)(r)) {
                var n = e.props || {},
                    i = n.children,
                    o = h(n, ["children"]),
                    a = r.props || {},
                    c = a.children,
                    s = h(a, ["children"]);
                return i && c ? (0, p.shallowEqual)(o, s) && _(i, c) : !i && !c && (0, p.shallowEqual)(o, s)
            }
            return !1
        },
        A = function(t, e) {
            var r = [],
                n = {};
            return m(t).forEach((function(t, i) {
                if (j(t)) r.push(t);
                else if (t) {
                    var o = y(t.type),
                        a = e[o] || {},
                        u = a.handler,
                        c = a.once;
                    if (u && (!c || !n[o])) {
                        var s = u(t, o, i);
                        r.push(s), n[o] = !0
                    }
                }
            })), r
        },
        k = function(t) {
            var e = t && t.type;
            return e && d[e] ? d[e] : null
        },
        E = function(t, e) {
            return m(e).indexOf(t)
        }
})), n.register("d6aDM", (function(t, r) {
    function n(t, e) {
        for (var r in t)
            if ({}.hasOwnProperty.call(t, r) && (!{}.hasOwnProperty.call(e, r) || t[r] !== e[r])) return !1;
        for (var n in e)
            if ({}.hasOwnProperty.call(e, n) && !{}.hasOwnProperty.call(t, n)) return !1;
        return !0
    }
    e(t.exports, "shallowEqual", (function() {
        return n
    }))
})), n.register("4jZP4", (function(t, r) {
    e(t.exports, "RADIAN", (function() {
        return u
    })), e(t.exports, "polarToCartesian", (function() {
        return s
    })), e(t.exports, "inRangeOfSector", (function() {
        return p
    }));
    n("bZbba"), n("fI5bH"), n("kjJfJ");

    function i(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), r.push.apply(r, n)
        }
        return r
    }

    function o(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2 ? i(Object(r), !0).forEach((function(e) {
                a(t, e, r[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
            }))
        }
        return t
    }

    function a(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = r, t
    }
    var u = Math.PI / 180,
        c = function(t) {
            return 180 * t / Math.PI
        },
        s = function(t, e, r, n) {
            return {
                x: t + Math.cos(-u * n) * r,
                y: e + Math.sin(-u * n) * r
            }
        },
        l = function(t, e) {
            var r, n, i, o, a, u, s = t.x,
                l = t.y,
                f = e.cx,
                p = e.cy,
                h = (n = {
                    x: f,
                    y: p
                }, i = (r = {
                    x: s,
                    y: l
                }).x, o = r.y, a = n.x, u = n.y, Math.sqrt(Math.pow(i - a, 2) + Math.pow(o - u, 2)));
            if (h <= 0) return {
                radius: h
            };
            var d = (s - f) / h,
                y = Math.acos(d);
            return l > p && (y = 2 * Math.PI - y), {
                radius: h,
                angle: c(y),
                angleInRadian: y
            }
        },
        f = function(t, e) {
            var r = e.startAngle,
                n = e.endAngle,
                i = Math.floor(r / 360),
                o = Math.floor(n / 360);
            return t + 360 * Math.min(i, o)
        },
        p = function(t, e) {
            var r = t.x,
                n = t.y,
                i = l({
                    x: r,
                    y: n
                }, e),
                a = i.radius,
                u = i.angle,
                c = e.innerRadius,
                s = e.outerRadius;
            if (a < c || a > s) return !1;
            if (0 === a) return !0;
            var p, h = function(t) {
                    var e = t.startAngle,
                        r = t.endAngle,
                        n = Math.floor(e / 360),
                        i = Math.floor(r / 360),
                        o = Math.min(n, i);
                    return {
                        startAngle: e - 360 * o,
                        endAngle: r - 360 * o
                    }
                }(e),
                d = h.startAngle,
                y = h.endAngle,
                g = u;
            if (d <= y) {
                for (; g > y;) g -= 360;
                for (; g < d;) g += 360;
                p = g >= d && g <= y
            } else {
                for (; g > d;) g -= 360;
                for (; g < y;) g += 360;
                p = g >= y && g <= d
            }
            return p ? o(o({}, e), {}, {
                radius: a,
                angle: f(g, e)
            }) : null
        }
})), n.register("kjJfJ", (function(r, i) {
    e(r.exports, "getValueByDataKey", (function() {
        return N
    })), e(r.exports, "getDomainOfDataByKey", (function() {
        return D
    })), e(r.exports, "calculateActiveTickIndex", (function() {
        return R
    })), e(r.exports, "getMainColorOfGraphicItem", (function() {
        return B
    })), e(r.exports, "getLegendProps", (function() {
        return L
    })), e(r.exports, "getBarSizeList", (function() {
        return z
    })), e(r.exports, "getBarPosition", (function() {
        return U
    })), e(r.exports, "appendOffsetOfLegend", (function() {
        return F
    })), e(r.exports, "parseErrorBarsOfAxis", (function() {
        return H
    })), e(r.exports, "getDomainOfItemsWithSameAxis", (function() {
        return V
    })), e(r.exports, "isCategoricalAxis", (function() {
        return G
    })), e(r.exports, "getCoordinatesOfGrid", (function() {
        return W
    })), e(r.exports, "getTicksOfAxis", (function() {
        return Y
    })), e(r.exports, "combineEventHandlers", (function() {
        return K
    })), e(r.exports, "parseScale", (function() {
        return X
    })), e(r.exports, "checkDomainOfScale", (function() {
        return Q
    })), e(r.exports, "findPositionOfBar", (function() {
        return Z
    })), e(r.exports, "truncateByDomain", (function() {
        return $
    })), e(r.exports, "getStackGroupsByAxisId", (function() {
        return rt
    })), e(r.exports, "getTicksOfScale", (function() {
        return nt
    })), e(r.exports, "getCateCoordinateOfBar", (function() {
        return it
    })), e(r.exports, "getBaseValueOfBar", (function() {
        return ot
    })), e(r.exports, "getStackedDataOfItem", (function() {
        return at
    })), e(r.exports, "getDomainOfStackGroups", (function() {
        return ut
    })), e(r.exports, "parseSpecifiedDomain", (function() {
        return lt
    })), e(r.exports, "getBandSizeOfAxis", (function() {
        return ft
    })), e(r.exports, "parseDomainOfCategoryAxis", (function() {
        return pt
    })), e(r.exports, "getTooltipItem", (function() {
        return ht
    }));
    var o = n("acqQQ"),
        a = n("gma5L"),
        u = n("aK0R4"),
        c = n("29RmV"),
        s = n("3yFxZ"),
        l = n("42aAU"),
        f = n("euf9C"),
        p = n("brOUQ"),
        h = n("90zHc"),
        d = n("hRZ1R"),
        y = n("hq7xU"),
        g = n("bZbba");
    n("ffhzx");
    var v = n("aCQXI"),
        m = n("cLnUD"),
        b = n("docQE"),
        x = n("jhK1O"),
        w = n("faoLD"),
        O = n("9VW0l"),
        j = n("6pIfw"),
        _ = n("kHLCm"),
        S = n("fI5bH"),
        A = n("eYRDm"),
        k = n("kEum4"),
        E = n("iquK2");

    function M(t) {
        return function(t) {
            if (Array.isArray(t)) return P(t)
        }(t) || function(t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
        }(t) || function(t, e) {
            if (!t) return;
            if ("string" == typeof t) return P(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(t);
            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return P(t, e)
        }(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function P(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n
    }

    function C(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), r.push.apply(r, n)
        }
        return r
    }

    function T(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2 ? C(Object(r), !0).forEach((function(e) {
                I(t, e, r[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : C(Object(r)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
            }))
        }
        return t
    }

    function I(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = r, t
    }

    function N(e, r, n) {
        return t(g)(e) || t(g)(r) ? n : (0, S.isNumOrStr)(r) ? t(y)(e, r, n) : t(d)(r) ? r(e) : n
    }

    function D(e, r, n, i) {
        var o = t(h)(e, (function(t) {
            return N(t, r)
        }));
        if ("number" === n) {
            var a = o.filter((function(t) {
                return (0, S.isNumber)(t) || parseFloat(t)
            }));
            return a.length ? [t(p)(a), t(f)(a)] : [1 / 0, -1 / 0]
        }
        return (i ? o.filter((function(e) {
            return !t(g)(e)
        })) : o).map((function(t) {
            return (0, S.isNumOrStr)(t) || t instanceof Date ? t : ""
        }))
    }
    var R = function(t) {
            var e, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                n = arguments.length > 2 ? arguments[2] : void 0,
                i = arguments.length > 3 ? arguments[3] : void 0,
                o = -1,
                a = null !== (e = null == r ? void 0 : r.length) && void 0 !== e ? e : 0;
            if (a > 1) {
                if (i && "angleAxis" === i.axisType && Math.abs(Math.abs(i.range[1] - i.range[0]) - 360) <= 1e-6)
                    for (var u = i.range, c = 0; c < a; c++) {
                        var s = c > 0 ? n[c - 1].coordinate : n[a - 1].coordinate,
                            l = n[c].coordinate,
                            f = c >= a - 1 ? n[0].coordinate : n[c + 1].coordinate,
                            p = void 0;
                        if ((0, S.mathSign)(l - s) !== (0, S.mathSign)(f - l)) {
                            var h = [];
                            if ((0, S.mathSign)(f - l) === (0, S.mathSign)(u[1] - u[0])) {
                                p = f;
                                var d = l + u[1] - u[0];
                                h[0] = Math.min(d, (d + s) / 2), h[1] = Math.max(d, (d + s) / 2)
                            } else {
                                p = s;
                                var y = f + u[1] - u[0];
                                h[0] = Math.min(l, (y + l) / 2), h[1] = Math.max(l, (y + l) / 2)
                            }
                            var g = [Math.min(l, (p + l) / 2), Math.max(l, (p + l) / 2)];
                            if (t > g[0] && t <= g[1] || t >= h[0] && t <= h[1]) {
                                o = n[c].index;
                                break
                            }
                        } else {
                            var v = Math.min(s, f),
                                m = Math.max(s, f);
                            if (t > (v + l) / 2 && t <= (m + l) / 2) {
                                o = n[c].index;
                                break
                            }
                        }
                    } else
                        for (var b = 0; b < a; b++)
                            if (0 === b && t <= (r[b].coordinate + r[b + 1].coordinate) / 2 || b > 0 && b < a - 1 && t > (r[b].coordinate + r[b - 1].coordinate) / 2 && t <= (r[b].coordinate + r[b + 1].coordinate) / 2 || b === a - 1 && t > (r[b].coordinate + r[b - 1].coordinate) / 2) {
                                o = r[b].index;
                                break
                            }
            } else o = 0;
            return o
        },
        B = function(t) {
            var e, r = t.type.displayName,
                n = t.props,
                i = n.stroke,
                o = n.fill;
            switch (r) {
                case "Line":
                    e = i;
                    break;
                case "Area":
                case "Radar":
                    e = i && "none" !== i ? i : o;
                    break;
                default:
                    e = o
            }
            return e
        },
        L = function(t) {
            var e, r = t.children,
                n = t.formattedGraphicalItems,
                i = t.legendWidth,
                o = t.legendContent,
                a = (0, k.findChildByType)(r, A.Legend.displayName);
            return a ? (e = a.props && a.props.payload ? a.props && a.props.payload : "children" === o ? (n || []).reduce((function(t, e) {
                var r = e.item,
                    n = e.props,
                    i = n.sectors || n.data || [];
                return t.concat(i.map((function(t) {
                    return {
                        type: a.props.iconType || r.props.legendType,
                        value: t.name,
                        color: t.fill,
                        payload: t
                    }
                })))
            }), []) : (n || []).map((function(t) {
                var e = t.item,
                    r = e.props,
                    n = r.dataKey,
                    i = r.name,
                    o = r.legendType;
                return {
                    inactive: r.hide,
                    dataKey: n,
                    type: a.props.iconType || o || "square",
                    color: B(e),
                    value: i || n,
                    payload: e.props
                }
            })), T(T(T({}, a.props), A.Legend.getWithHeight(a, i)), {}, {
                payload: e,
                item: a
            })) : null
        },
        z = function(e) {
            var r = e.barSize,
                n = e.stackGroups,
                i = void 0 === n ? {} : n;
            if (!i) return {};
            for (var o = {}, a = Object.keys(i), u = 0, c = a.length; u < c; u++)
                for (var s = i[a[u]].stackGroups, l = Object.keys(s), f = 0, p = l.length; f < p; f++) {
                    var h = s[l[f]],
                        d = h.items,
                        y = h.cateAxisId,
                        v = d.filter((function(t) {
                            return (0, k.getDisplayName)(t.type).indexOf("Bar") >= 0
                        }));
                    if (v && v.length) {
                        var m = v[0].props.barSize,
                            b = v[0].props[y];
                        o[b] || (o[b] = []), o[b].push({
                            item: v[0],
                            stackList: v.slice(1),
                            barSize: t(g)(m) ? r : m
                        })
                    }
                }
            return o
        },
        U = function(t) {
            var e = t.barGap,
                r = t.barCategoryGap,
                n = t.bandSize,
                i = t.sizeList,
                o = void 0 === i ? [] : i,
                a = t.maxBarSize,
                u = o.length;
            if (u < 1) return null;
            var c, s = (0, S.getPercentValue)(e, n, 0, !0);
            if (o[0].barSize === +o[0].barSize) {
                var l = !1,
                    f = n / u,
                    p = o.reduce((function(t, e) {
                        return t + e.barSize || 0
                    }), 0);
                (p += (u - 1) * s) >= n && (p -= (u - 1) * s, s = 0), p >= n && f > 0 && (l = !0, p = u * (f *= .9));
                var h = {
                    offset: ((n - p) / 2 >> 0) - s,
                    size: 0
                };
                c = o.reduce((function(t, e) {
                    var r = [].concat(M(t), [{
                        item: e.item,
                        position: {
                            offset: h.offset + h.size + s,
                            size: l ? f : e.barSize
                        }
                    }]);
                    return h = r[r.length - 1].position, e.stackList && e.stackList.length && e.stackList.forEach((function(t) {
                        r.push({
                            item: t,
                            position: h
                        })
                    })), r
                }), [])
            } else {
                var d = (0, S.getPercentValue)(r, n, 0, !0);
                n - 2 * d - (u - 1) * s <= 0 && (s = 0);
                var y = (n - 2 * d - (u - 1) * s) / u;
                y > 1 && (y >>= 0);
                var g = a === +a ? Math.min(y, a) : y;
                c = o.reduce((function(t, e, r) {
                    var n = [].concat(M(t), [{
                        item: e.item,
                        position: {
                            offset: d + (y + s) * r + (y - g) / 2,
                            size: g
                        }
                    }]);
                    return e.stackList && e.stackList.length && e.stackList.forEach((function(t) {
                        n.push({
                            item: t,
                            position: n[n.length - 1].position
                        })
                    })), n
                }), [])
            }
            return c
        },
        F = function(t, e, r, n) {
            var i = r.children,
                o = r.width,
                a = r.margin,
                u = o - (a.left || 0) - (a.right || 0),
                c = L({
                    children: i,
                    legendWidth: u
                }),
                s = t;
            if (c) {
                var l = n || {},
                    f = c.align,
                    p = c.verticalAlign,
                    h = c.layout;
                ("vertical" === h || "horizontal" === h && "center" === p) && (0, S.isNumber)(t[f]) && (s = T(T({}, t), {}, I({}, f, s[f] + (l.width || 0)))), ("horizontal" === h || "vertical" === h && "center" === f) && (0, S.isNumber)(t[p]) && (s = T(T({}, t), {}, I({}, p, s[p] + (l.height || 0))))
            }
            return s
        },
        q = function(e, r, n, i, o) {
            var a = r.props.children,
                u = (0, k.findAllByType)(a, "ErrorBar").filter((function(e) {
                    return function(e, r, n) {
                        return !!t(g)(r) || ("horizontal" === e ? "yAxis" === r : "vertical" === e || "x" === n ? "xAxis" === r : "y" !== n || "yAxis" === r)
                    }(i, o, e.props.direction)
                }));
            if (u && u.length) {
                var c = u.map((function(t) {
                    return t.props.dataKey
                }));
                return e.reduce((function(e, r) {
                    var i = N(r, n, 0),
                        o = t(l)(i) ? [t(p)(i), t(f)(i)] : [i, i],
                        a = c.reduce((function(e, n) {
                            var i = N(r, n, 0),
                                a = o[0] - Math.abs(t(l)(i) ? i[0] : i),
                                u = o[1] + Math.abs(t(l)(i) ? i[1] : i);
                            return [Math.min(a, e[0]), Math.max(u, e[1])]
                        }), [1 / 0, -1 / 0]);
                    return [Math.min(a[0], e[0]), Math.max(a[1], e[1])]
                }), [1 / 0, -1 / 0])
            }
            return null
        },
        H = function(e, r, n, i, o) {
            var a = r.map((function(t) {
                return q(e, t, n, o, i)
            })).filter((function(e) {
                return !t(g)(e)
            }));
            return a && a.length ? a.reduce((function(t, e) {
                return [Math.min(t[0], e[0]), Math.max(t[1], e[1])]
            }), [1 / 0, -1 / 0]) : null
        },
        V = function(t, e, r, n, i) {
            var o = e.map((function(e) {
                var o = e.props.dataKey;
                return "number" === r && o && q(t, e, o, n) || D(t, o, r, i)
            }));
            if ("number" === r) return o.reduce((function(t, e) {
                return [Math.min(t[0], e[0]), Math.max(t[1], e[1])]
            }), [1 / 0, -1 / 0]);
            var a = {};
            return o.reduce((function(t, e) {
                for (var r = 0, n = e.length; r < n; r++) a[e[r]] || (a[e[r]] = !0, t.push(e[r]));
                return t
            }), [])
        },
        G = function(t, e) {
            return "horizontal" === t && "xAxis" === e || "vertical" === t && "yAxis" === e || "centric" === t && "angleAxis" === e || "radial" === t && "radiusAxis" === e
        },
        W = function(t, e, r) {
            var n, i, o = t.map((function(t) {
                return t.coordinate === e && (n = !0), t.coordinate === r && (i = !0), t.coordinate
            }));
            return n || o.push(e), i || o.push(r), o
        },
        Y = function(t, e, r) {
            if (!t) return null;
            var n = t.scale,
                i = t.duplicateDomain,
                o = t.type,
                a = t.range,
                u = "scaleBand" === t.realScaleType ? n.bandwidth() / 2 : 2,
                c = (e || r) && "category" === o && n.bandwidth ? n.bandwidth() / u : 0;
            return c = "angleAxis" === t.axisType ? 2 * (0, S.mathSign)(a[0] - a[1]) * c : c, e && (t.ticks || t.niceTicks) ? (t.ticks || t.niceTicks).map((function(t) {
                var e = i ? i.indexOf(t) : t;
                return {
                    coordinate: n(e) + c,
                    value: t,
                    offset: c
                }
            })) : t.isCategorical && t.categoricalDomain ? t.categoricalDomain.map((function(t, e) {
                return {
                    coordinate: n(t) + c,
                    value: t,
                    index: e,
                    offset: c
                }
            })) : n.ticks && !r ? n.ticks(t.tickCount).map((function(t) {
                return {
                    coordinate: n(t) + c,
                    value: t,
                    offset: c
                }
            })) : n.domain().map((function(t, e) {
                return {
                    coordinate: n(t) + c,
                    value: i ? i[t] : t,
                    index: e,
                    offset: c
                }
            }))
        },
        K = function(e, r, n) {
            var i;
            return t(d)(n) ? i = n : t(d)(r) && (i = r), t(d)(e) || i ? function(r, n, o, a) {
                t(d)(e) && e(r, n, o, a), t(d)(i) && i(r, n, o, a)
            } : null
        },
        X = function(e, r, n) {
            var i = e.scale,
                o = e.type,
                a = e.layout,
                u = e.axisType;
            if ("auto" === i) return "radial" === a && "radiusAxis" === u ? {
                scale: m.scaleBand(),
                realScaleType: "band"
            } : "radial" === a && "angleAxis" === u ? {
                scale: m.scaleLinear(),
                realScaleType: "linear"
            } : "category" === o && r && (r.indexOf("LineChart") >= 0 || r.indexOf("AreaChart") >= 0 || r.indexOf("ComposedChart") >= 0 && !n) ? {
                scale: m.scalePoint(),
                realScaleType: "point"
            } : "category" === o ? {
                scale: m.scaleBand(),
                realScaleType: "band"
            } : {
                scale: m.scaleLinear(),
                realScaleType: "linear"
            };
            if (t(s)(i)) {
                var l = "scale".concat(t(c)(i));
                return {
                    scale: (m[l] || m.scalePoint)(),
                    realScaleType: m[l] ? l : "point"
                }
            }
            return t(d)(i) ? {
                scale: i
            } : {
                scale: m.scalePoint(),
                realScaleType: "point"
            }
        },
        J = 1e-4,
        Q = function(t) {
            var e = t.domain();
            if (e && !(e.length <= 2)) {
                var r = e.length,
                    n = t.range(),
                    i = Math.min(n[0], n[1]) - J,
                    o = Math.max(n[0], n[1]) + J,
                    a = t(e[0]),
                    u = t(e[r - 1]);
                (a < i || a > o || u < i || u > o) && t.domain([e[0], e[r - 1]])
            }
        },
        Z = function(t, e) {
            if (!t) return null;
            for (var r = 0, n = t.length; r < n; r++)
                if (t[r].item === e) return t[r].position;
            return null
        },
        $ = function(t, e) {
            if (!e || 2 !== e.length || !(0, S.isNumber)(e[0]) || !(0, S.isNumber)(e[1])) return t;
            var r = Math.min(e[0], e[1]),
                n = Math.max(e[0], e[1]),
                i = [t[0], t[1]];
            return (!(0, S.isNumber)(t[0]) || t[0] < r) && (i[0] = r), (!(0, S.isNumber)(t[1]) || t[1] > n) && (i[1] = n), i[0] > n && (i[0] = n), i[1] < r && (i[1] = r), i
        },
        tt = {
            sign: function(e) {
                var r = e.length;
                if (!(r <= 0))
                    for (var n = 0, i = e[0].length; n < i; ++n)
                        for (var o = 0, a = 0, c = 0; c < r; ++c) {
                            var s = t(u)(e[c][n][1]) ? e[c][n][0] : e[c][n][1];
                            s >= 0 ? (e[c][n][0] = o, e[c][n][1] = o + s, o = e[c][n][1]) : (e[c][n][0] = a, e[c][n][1] = a + s, a = e[c][n][1])
                        }
            },
            expand: x.default,
            none: w.default,
            silhouette: O.default,
            wiggle: j.default,
            positive: function(e) {
                var r = e.length;
                if (!(r <= 0))
                    for (var n = 0, i = e[0].length; n < i; ++n)
                        for (var o = 0, a = 0; a < r; ++a) {
                            var c = t(u)(e[a][n][1]) ? e[a][n][0] : e[a][n][1];
                            c >= 0 ? (e[a][n][0] = o, e[a][n][1] = o + c, o = e[a][n][1]) : (e[a][n][0] = 0, e[a][n][1] = 0)
                        }
            }
        },
        et = function(t, e, r) {
            var n = e.map((function(t) {
                return t.props.dataKey
            }));
            return (0, b.default)().keys(n).value((function(t, e) {
                return +N(t, e, 0)
            })).order(_.default).offset(tt[r])(t)
        },
        rt = function(t, e, r, n, i, o) {
            if (!t) return null;
            var a = (o ? e.reverse() : e).reduce((function(t, e) {
                var i = e.props,
                    o = i.stackId;
                if (i.hide) return t;
                var a = e.props[r],
                    u = t[a] || {
                        hasStack: !1,
                        stackGroups: {}
                    };
                if ((0, S.isNumOrStr)(o)) {
                    var c = u.stackGroups[o] || {
                        numericAxisId: r,
                        cateAxisId: n,
                        items: []
                    };
                    c.items.push(e), u.hasStack = !0, u.stackGroups[o] = c
                } else u.stackGroups[(0, S.uniqueId)("_stackId_")] = {
                    numericAxisId: r,
                    cateAxisId: n,
                    items: [e]
                };
                return T(T({}, t), {}, I({}, a, u))
            }), {});
            return Object.keys(a).reduce((function(e, o) {
                var u = a[o];
                return u.hasStack && (u.stackGroups = Object.keys(u.stackGroups).reduce((function(e, o) {
                    var a = u.stackGroups[o];
                    return T(T({}, e), {}, I({}, o, {
                        numericAxisId: r,
                        cateAxisId: n,
                        items: a.items,
                        stackedData: et(t, a.items, i)
                    }))
                }), {})), T(T({}, e), {}, I({}, o, u))
            }), {})
        },
        nt = function(e, r) {
            var n = r.realScaleType,
                i = r.type,
                o = r.tickCount,
                a = r.originalDomain,
                u = r.allowDecimals,
                c = n || r.scale;
            if ("auto" !== c && "linear" !== c) return null;
            if (o && "number" === i && a && ("auto" === a[0] || "auto" === a[1])) {
                var s = e.domain();
                if (!s.length) return null;
                var l = (0, v.getNiceTickValues)(s, o, u);
                return e.domain(function(e, r) {
                    return "number" === r ? [t(p)(e), t(f)(e)] : e
                }(l, i)), {
                    niceTicks: l
                }
            }
            if (o && "number" === i) {
                var h = e.domain();
                return {
                    niceTicks: (0, v.getTickValuesFixedDomain)(h, o, u)
                }
            }
            return null
        },
        it = function(e) {
            var r = e.axis,
                n = e.ticks,
                i = e.offset,
                o = e.bandSize,
                a = e.entry,
                u = e.index;
            if ("category" === r.type) return n[u] ? n[u].coordinate + i : null;
            var c = N(a, r.dataKey, r.domain[u]);
            return t(g)(c) ? null : r.scale(c) - o / 2 + i
        },
        ot = function(t) {
            var e = t.numericAxis,
                r = e.scale.domain();
            if ("number" === e.type) {
                var n = Math.min(r[0], r[1]),
                    i = Math.max(r[0], r[1]);
                return n <= 0 && i >= 0 ? 0 : i < 0 ? i : n
            }
            return r[0]
        },
        at = function(t, e) {
            var r = t.props.stackId;
            if ((0, S.isNumOrStr)(r)) {
                var n = e[r];
                if (n && n.items.length) {
                    for (var i = -1, o = 0, a = n.items.length; o < a; o++)
                        if (n.items[o] === t) {
                            i = o;
                            break
                        } return i >= 0 ? n.stackedData[i] : null
                }
            }
            return null
        },
        ut = function(e, r, n) {
            return Object.keys(e).reduce((function(i, o) {
                var a = e[o].stackedData.reduce((function(e, i) {
                    var o = i.slice(r, n + 1).reduce((function(e, r) {
                        return [t(p)(r.concat([e[0]]).filter(S.isNumber)), t(f)(r.concat([e[1]]).filter(S.isNumber))]
                    }), [1 / 0, -1 / 0]);
                    return [Math.min(e[0], o[0]), Math.max(e[1], o[1])]
                }), [1 / 0, -1 / 0]);
                return [Math.min(a[0], i[0]), Math.max(a[1], i[1])]
            }), [1 / 0, -1 / 0]).map((function(t) {
                return t === 1 / 0 || t === -1 / 0 ? 0 : t
            }))
        },
        ct = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
        st = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
        lt = function(e, r, n) {
            if (t(d)(e)) return e(r, n);
            if (!t(l)(e)) return r;
            var i = [];
            if ((0, S.isNumber)(e[0])) i[0] = n ? e[0] : Math.min(e[0], r[0]);
            else if (ct.test(e[0])) {
                var o = +ct.exec(e[0])[1];
                i[0] = r[0] - o
            } else t(d)(e[0]) ? i[0] = e[0](r[0]) : i[0] = r[0];
            if ((0, S.isNumber)(e[1])) i[1] = n ? e[1] : Math.max(e[1], r[1]);
            else if (st.test(e[1])) {
                var a = +st.exec(e[1])[1];
                i[1] = r[1] + a
            } else t(d)(e[1]) ? i[1] = e[1](r[1]) : i[1] = r[1];
            return i
        },
        ft = function(e, r, n) {
            if (e && e.scale && e.scale.bandwidth) {
                var i = e.scale.bandwidth();
                if (!n || i > 0) return i
            }
            if (e && r && r.length >= 2) {
                for (var o = t(a)(r, (function(t) {
                        return t.coordinate
                    })), u = 1 / 0, c = 1, s = o.length; c < s; c++) {
                    var l = o[c],
                        f = o[c - 1];
                    u = Math.min((l.coordinate || 0) - (f.coordinate || 0), u)
                }
                return u === 1 / 0 ? 0 : u
            }
            return n ? void 0 : 0
        },
        pt = function(e, r, n) {
            return e && e.length ? t(o)(e, t(y)(n, "type.defaultProps.domain")) ? r : e : r
        },
        ht = function(t, e) {
            var r = t.props,
                n = r.dataKey,
                i = r.name,
                o = r.unit,
                a = r.formatter,
                u = r.tooltipType,
                c = r.chartType;
            return T(T({}, (0, E.filterProps)(t)), {}, {
                dataKey: n,
                unit: o,
                formatter: a,
                name: i || n,
                color: B(t),
                value: N(e, n),
                type: u,
                payload: e,
                chartType: c
            })
        }
})), n.register("gma5L", (function(t, e) {
    var r = n("d6kbT"),
        i = n("iXMB1"),
        o = n("g19rX"),
        a = n("f0JKU"),
        u = o((function(t, e) {
            if (null == t) return [];
            var n = e.length;
            return n > 1 && a(t, e[0], e[1]) ? e = [] : n > 2 && a(e[0], e[1], e[2]) && (e = [e[0]]), i(t, r(e, 1), [])
        }));
    t.exports = u
})), n.register("d6kbT", (function(t, e) {
    var r = n("aRECI"),
        i = n("j8MTz");
    t.exports = function t(e, n, o, a, u) {
        var c = -1,
            s = e.length;
        for (o || (o = i), u || (u = []); ++c < s;) {
            var l = e[c];
            n > 0 && o(l) ? n > 1 ? t(l, n - 1, o, a, u) : r(u, l) : a || (u[u.length] = l)
        }
        return u
    }
})), n.register("j8MTz", (function(t, e) {
    var r = n("9EM1e"),
        i = n("8dBnj"),
        o = n("42aAU"),
        a = r ? r.isConcatSpreadable : void 0;
    t.exports = function(t) {
        return o(t) || i(t) || !!(a && t && t[a])
    }
})), n.register("iXMB1", (function(t, e) {
    var r = n("3RBci"),
        i = n("4d9y9"),
        o = n("c3Npb"),
        a = n("8A3hD"),
        u = n("3d1s7"),
        c = n("hDIpG"),
        s = n("cdOXp"),
        l = n("9l7lG"),
        f = n("42aAU");
    t.exports = function(t, e, n) {
        e = e.length ? r(e, (function(t) {
            return f(t) ? function(e) {
                return i(e, 1 === t.length ? t[0] : t)
            } : t
        })) : [l];
        var p = -1;
        e = r(e, c(o));
        var h = a(t, (function(t, n, i) {
            return {
                criteria: r(e, (function(e) {
                    return e(t)
                })),
                index: ++p,
                value: t
            }
        }));
        return u(h, (function(t, e) {
            return s(t, e, n)
        }))
    }
})), n.register("c3Npb", (function(t, e) {
    var r = n("23jKZ"),
        i = n("4jvyU"),
        o = n("9l7lG"),
        a = n("42aAU"),
        u = n("kbgpd");
    t.exports = function(t) {
        return "function" == typeof t ? t : null == t ? o : "object" == typeof t ? a(t) ? i(t[0], t[1]) : r(t) : u(t)
    }
})), n.register("23jKZ", (function(t, e) {
    var r = n("3sJB7"),
        i = n("9KLRw"),
        o = n("fMOyd");
    t.exports = function(t) {
        var e = i(t);
        return 1 == e.length && e[0][2] ? o(e[0][0], e[0][1]) : function(n) {
            return n === t || r(n, t, e)
        }
    }
})), n.register("3sJB7", (function(t, e) {
    var r = n("3DaBV"),
        i = n("4Wlnr");
    t.exports = function(t, e, n, o) {
        var a = n.length,
            u = a,
            c = !o;
        if (null == t) return !u;
        for (t = Object(t); a--;) {
            var s = n[a];
            if (c && s[2] ? s[1] !== t[s[0]] : !(s[0] in t)) return !1
        }
        for (; ++a < u;) {
            var l = (s = n[a])[0],
                f = t[l],
                p = s[1];
            if (c && s[2]) {
                if (void 0 === f && !(l in t)) return !1
            } else {
                var h = new r;
                if (o) var d = o(f, p, l, t, e, h);
                if (!(void 0 === d ? i(p, f, 3, o, h) : d)) return !1
            }
        }
        return !0
    }
})), n.register("9KLRw", (function(t, e) {
    var r = n("1fKPl"),
        i = n("7hKz6");
    t.exports = function(t) {
        for (var e = i(t), n = e.length; n--;) {
            var o = e[n],
                a = t[o];
            e[n] = [o, a, r(a)]
        }
        return e
    }
})), n.register("1fKPl", (function(t, e) {
    var r = n("4TzB7");
    t.exports = function(t) {
        return t == t && !r(t)
    }
})), n.register("fMOyd", (function(t, e) {
    t.exports = function(t, e) {
        return function(r) {
            return null != r && (r[t] === e && (void 0 !== e || t in Object(r)))
        }
    }
})), n.register("4jvyU", (function(t, e) {
    var r = n("4Wlnr"),
        i = n("hq7xU"),
        o = n("8lQFM"),
        a = n("dwDjY"),
        u = n("1fKPl"),
        c = n("fMOyd"),
        s = n("81xrH");
    t.exports = function(t, e) {
        return a(t) && u(e) ? c(s(t), e) : function(n) {
            var a = i(n, t);
            return void 0 === a && a === e ? o(n, t) : r(e, a, 3)
        }
    }
})), n.register("8lQFM", (function(t, e) {
    var r = n("44vc5"),
        i = n("fP1Ys");
    t.exports = function(t, e) {
        return null != t && i(t, e, r)
    }
})), n.register("44vc5", (function(t, e) {
    t.exports = function(t, e) {
        return null != t && e in Object(t)
    }
})), n.register("fP1Ys", (function(t, e) {
    var r = n("d4pOq"),
        i = n("8dBnj"),
        o = n("42aAU"),
        a = n("9v4jx"),
        u = n("393S6"),
        c = n("81xrH");
    t.exports = function(t, e, n) {
        for (var s = -1, l = (e = r(e, t)).length, f = !1; ++s < l;) {
            var p = c(e[s]);
            if (!(f = null != t && n(t, p))) break;
            t = t[p]
        }
        return f || ++s != l ? f : !!(l = null == t ? 0 : t.length) && u(l) && a(p, l) && (o(t) || i(t))
    }
})), n.register("9l7lG", (function(t, e) {
    t.exports = function(t) {
        return t
    }
})), n.register("kbgpd", (function(t, e) {
    var r = n("83Ow4"),
        i = n("7OFws"),
        o = n("dwDjY"),
        a = n("81xrH");
    t.exports = function(t) {
        return o(t) ? r(a(t)) : i(t)
    }
})), n.register("83Ow4", (function(t, e) {
    t.exports = function(t) {
        return function(e) {
            return null == e ? void 0 : e[t]
        }
    }
})), n.register("7OFws", (function(t, e) {
    var r = n("4d9y9");
    t.exports = function(t) {
        return function(e) {
            return r(e, t)
        }
    }
})), n.register("8A3hD", (function(t, e) {
    var r = n("9JNzv"),
        i = n("dQPJi");
    t.exports = function(t, e) {
        var n = -1,
            o = i(t) ? Array(t.length) : [];
        return r(t, (function(t, r, i) {
            o[++n] = e(t, r, i)
        })), o
    }
})), n.register("9JNzv", (function(t, e) {
    var r = n("ar3u5"),
        i = n("hF5pw")(r);
    t.exports = i
})), n.register("ar3u5", (function(t, e) {
    var r = n("7yNML"),
        i = n("7hKz6");
    t.exports = function(t, e) {
        return t && r(t, e, i)
    }
})), n.register("7yNML", (function(t, e) {
    var r = n("4mdXO")();
    t.exports = r
})), n.register("4mdXO", (function(t, e) {
    t.exports = function(t) {
        return function(e, r, n) {
            for (var i = -1, o = Object(e), a = n(e), u = a.length; u--;) {
                var c = a[t ? u : ++i];
                if (!1 === r(o[c], c, o)) break
            }
            return e
        }
    }
})), n.register("hF5pw", (function(t, e) {
    var r = n("dQPJi");
    t.exports = function(t, e) {
        return function(n, i) {
            if (null == n) return n;
            if (!r(n)) return t(n, i);
            for (var o = n.length, a = e ? o : -1, u = Object(n);
                (e ? a-- : ++a < o) && !1 !== i(u[a], a, u););
            return n
        }
    }
})), n.register("3d1s7", (function(t, e) {
    t.exports = function(t, e) {
        var r = t.length;
        for (t.sort(e); r--;) t[r] = t[r].value;
        return t
    }
})), n.register("cdOXp", (function(t, e) {
    var r = n("7yLU9");
    t.exports = function(t, e, n) {
        for (var i = -1, o = t.criteria, a = e.criteria, u = o.length, c = n.length; ++i < u;) {
            var s = r(o[i], a[i]);
            if (s) return i >= c ? s : s * ("desc" == n[i] ? -1 : 1)
        }
        return t.index - e.index
    }
})), n.register("7yLU9", (function(t, e) {
    var r = n("7vNjG");
    t.exports = function(t, e) {
        if (t !== e) {
            var n = void 0 !== t,
                i = null === t,
                o = t == t,
                a = r(t),
                u = void 0 !== e,
                c = null === e,
                s = e == e,
                l = r(e);
            if (!c && !l && !a && t > e || a && u && s && !c && !l || i && u && s || !n && s || !o) return 1;
            if (!i && !a && !l && t < e || l && n && o && !i && !a || c && n && o || !u && o || !s) return -1
        }
        return 0
    }
})), n.register("g19rX", (function(t, e) {
    var r = n("9l7lG"),
        i = n("2uY1a"),
        o = n("1fFdn");
    t.exports = function(t, e) {
        return o(i(t, e, r), t + "")
    }
})), n.register("2uY1a", (function(t, e) {
    var r = n("1xpBV"),
        i = Math.max;
    t.exports = function(t, e, n) {
        return e = i(void 0 === e ? t.length - 1 : e, 0),
            function() {
                for (var o = arguments, a = -1, u = i(o.length - e, 0), c = Array(u); ++a < u;) c[a] = o[e + a];
                a = -1;
                for (var s = Array(e + 1); ++a < e;) s[a] = o[a];
                return s[e] = n(c), r(t, this, s)
            }
    }
})), n.register("1xpBV", (function(t, e) {
    t.exports = function(t, e, r) {
        switch (r.length) {
            case 0:
                return t.call(e);
            case 1:
                return t.call(e, r[0]);
            case 2:
                return t.call(e, r[0], r[1]);
            case 3:
                return t.call(e, r[0], r[1], r[2])
        }
        return t.apply(e, r)
    }
})), n.register("1fFdn", (function(t, e) {
    var r = n("ifCGB"),
        i = n("fxG86")(r);
    t.exports = i
})), n.register("ifCGB", (function(t, e) {
    var r = n("ch6Lx"),
        i = n("6NKwF"),
        o = n("9l7lG"),
        a = i ? function(t, e) {
            return i(t, "toString", {
                configurable: !0,
                enumerable: !1,
                value: r(e),
                writable: !0
            })
        } : o;
    t.exports = a
})), n.register("ch6Lx", (function(t, e) {
    t.exports = function(t) {
        return function() {
            return t
        }
    }
})), n.register("6NKwF", (function(t, e) {
    var r = n("ivjYw"),
        i = function() {
            try {
                var t = r(Object, "defineProperty");
                return t({}, "", {}), t
            } catch (t) {}
        }();
    t.exports = i
})), n.register("fxG86", (function(t, e) {
    var r = Date.now;
    t.exports = function(t) {
        var e = 0,
            n = 0;
        return function() {
            var i = r(),
                o = 16 - (i - n);
            if (n = i, o > 0) {
                if (++e >= 800) return arguments[0]
            } else e = 0;
            return t.apply(void 0, arguments)
        }
    }
})), n.register("f0JKU", (function(t, e) {
    var r = n("4P3Ie"),
        i = n("dQPJi"),
        o = n("9v4jx"),
        a = n("4TzB7");
    t.exports = function(t, e, n) {
        if (!a(n)) return !1;
        var u = typeof e;
        return !!("number" == u ? i(n) && o(e, n.length) : "string" == u && e in n) && r(n[e], t)
    }
})), n.register("29RmV", (function(t, e) {
    var r = n("3DFel")("toUpperCase");
    t.exports = r
})), n.register("3DFel", (function(t, e) {
    var r = n("gYWnT"),
        i = n("iLFeF"),
        o = n("iopxH"),
        a = n("1jeW4");
    t.exports = function(t) {
        return function(e) {
            e = a(e);
            var n = i(e) ? o(e) : void 0,
                u = n ? n[0] : e.charAt(0),
                c = n ? r(n, 1).join("") : e.slice(1);
            return u[t]() + c
        }
    }
})), n.register("gYWnT", (function(t, e) {
    var r = n("jZffG");
    t.exports = function(t, e, n) {
        var i = t.length;
        return n = void 0 === n ? i : n, !e && n >= i ? t : r(t, e, n)
    }
})), n.register("jZffG", (function(t, e) {
    t.exports = function(t, e, r) {
        var n = -1,
            i = t.length;
        e < 0 && (e = -e > i ? 0 : i + e), (r = r > i ? i : r) < 0 && (r += i), i = e > r ? 0 : r - e >>> 0, e >>>= 0;
        for (var o = Array(i); ++n < i;) o[n] = t[n + e];
        return o
    }
})), n.register("iLFeF", (function(t, e) {
    var r = RegExp("[\\u200d\ud800-\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
    t.exports = function(t) {
        return r.test(t)
    }
})), n.register("iopxH", (function(t, e) {
    var r = n("5p1D3"),
        i = n("iLFeF"),
        o = n("5iSxe");
    t.exports = function(t) {
        return i(t) ? o(t) : r(t)
    }
})), n.register("5p1D3", (function(t, e) {
    t.exports = function(t) {
        return t.split("")
    }
})), n.register("5iSxe", (function(t, e) {
    var r = "[\ud800-\udfff]",
        n = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
        i = "\ud83c[\udffb-\udfff]",
        o = "[^\ud800-\udfff]",
        a = "(?:\ud83c[\udde6-\uddff]){2}",
        u = "[\ud800-\udbff][\udc00-\udfff]",
        c = "(?:" + n + "|" + i + ")" + "?",
        s = "[\\ufe0e\\ufe0f]?",
        l = s + c + ("(?:\\u200d(?:" + [o, a, u].join("|") + ")" + s + c + ")*"),
        f = "(?:" + [o + n + "?", n, a, u, r].join("|") + ")",
        p = RegExp(i + "(?=" + i + ")|" + f + l, "g");
    t.exports = function(t) {
        return t.match(p) || []
    }
})), n.register("euf9C", (function(t, e) {
    var r = n("5Gimw"),
        i = n("aAtdb"),
        o = n("9l7lG");
    t.exports = function(t) {
        return t && t.length ? r(t, o, i) : void 0
    }
})), n.register("5Gimw", (function(t, e) {
    var r = n("7vNjG");
    t.exports = function(t, e, n) {
        for (var i = -1, o = t.length; ++i < o;) {
            var a = t[i],
                u = e(a);
            if (null != u && (void 0 === c ? u == u && !r(u) : n(u, c))) var c = u,
                s = a
        }
        return s
    }
})), n.register("aAtdb", (function(t, e) {
    t.exports = function(t, e) {
        return t > e
    }
})), n.register("brOUQ", (function(t, e) {
    var r = n("5Gimw"),
        i = n("aNDQo"),
        o = n("9l7lG");
    t.exports = function(t) {
        return t && t.length ? r(t, o, i) : void 0
    }
})), n.register("aNDQo", (function(t, e) {
    t.exports = function(t, e) {
        return t < e
    }
})), n.register("90zHc", (function(t, e) {
    var r = n("d6kbT"),
        i = n("4tPvq");
    t.exports = function(t, e) {
        return r(i(t, e), 1)
    }
})), n.register("4tPvq", (function(t, e) {
    var r = n("3RBci"),
        i = n("c3Npb"),
        o = n("8A3hD"),
        a = n("42aAU");
    t.exports = function(t, e) {
        return (a(t) ? r : o)(t, i(e, 3))
    }
})), n.register("ffhzx", (function(t, r) {
    e(t.exports, "getNiceTickValues", (function() {
        return n("aCQXI").getNiceTickValues
    })), e(t.exports, "getTickValuesFixedDomain", (function() {
        return n("aCQXI").getTickValuesFixedDomain
    }));
    n("aCQXI")
})), n.register("aCQXI", (function(r, i) {
    e(r.exports, "getNiceTickValues", (function() {
        return g
    })), e(r.exports, "getTickValuesFixedDomain", (function() {
        return v
    }));
    var o = n("1AgYl"),
        a = n("bwdhT"),
        u = n("hGUKF");

    function c(t) {
        return function(t) {
            if (Array.isArray(t)) return f(t)
        }(t) || function(t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
        }(t) || l(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function s(t, e) {
        return function(t) {
            if (Array.isArray(t)) return t
        }(t) || function(t, e) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
            var r = [],
                n = !0,
                i = !1,
                o = void 0;
            try {
                for (var a, u = t[Symbol.iterator](); !(n = (a = u.next()).done) && (r.push(a.value), !e || r.length !== e); n = !0);
            } catch (t) {
                i = !0, o = t
            } finally {
                try {
                    n || null == u.return || u.return()
                } finally {
                    if (i) throw o
                }
            }
            return r
        }(t, e) || l(t, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function l(t, e) {
        if (t) {
            if ("string" == typeof t) return f(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? f(t, e) : void 0
        }
    }

    function f(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n
    }

    function p(t) {
        var e = s(t, 2),
            r = e[0],
            n = e[1],
            i = r,
            o = n;
        return r > n && (i = n, o = r), [i, o]
    }

    function h(e, r, n) {
        if (e.lte(0)) return new(t(o))(0);
        var i = u.default.getDigitCount(e.toNumber()),
            a = new(t(o))(10).pow(i),
            c = e.div(a),
            s = 1 !== i ? .05 : .1,
            l = new(t(o))(Math.ceil(c.div(s).toNumber())).add(n).mul(s).mul(a);
        return r ? l : new(t(o))(Math.ceil(l))
    }

    function d(e, r, n) {
        var i = 1,
            c = new(t(o))(e);
        if (!c.isint() && n) {
            var s = Math.abs(e);
            s < 1 ? (i = new(t(o))(10).pow(u.default.getDigitCount(e) - 1), c = new(t(o))(Math.floor(c.div(i).toNumber())).mul(i)) : s > 1 && (c = new(t(o))(Math.floor(e)))
        } else 0 === e ? c = new(t(o))(Math.floor((r - 1) / 2)) : n || (c = new(t(o))(Math.floor(e)));
        var l = Math.floor((r - 1) / 2);
        return (0, a.compose)((0, a.map)((function(e) {
            return c.add(new(t(o))(e - l).mul(i)).toNumber()
        })), a.range)(0, r)
    }

    function y(e, r, n, i) {
        var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        if (!Number.isFinite((r - e) / (n - 1))) return {
            step: new(t(o))(0),
            tickMin: new(t(o))(0),
            tickMax: new(t(o))(0)
        };
        var u, c = h(new(t(o))(r).sub(e).div(n - 1), i, a);
        u = e <= 0 && r >= 0 ? new(t(o))(0) : (u = new(t(o))(e).add(r).div(2)).sub(new(t(o))(u).mod(c));
        var s = Math.ceil(u.sub(e).div(c).toNumber()),
            l = Math.ceil(new(t(o))(r).sub(u).div(c).toNumber()),
            f = s + l + 1;
        return f > n ? y(e, r, n, i, a + 1) : (f < n && (l = r > 0 ? l + (n - f) : l, s = r > 0 ? s : s + (n - f)), {
            step: c,
            tickMin: u.sub(new(t(o))(s).mul(c)),
            tickMax: u.add(new(t(o))(l).mul(c))
        })
    }
    var g = (0, a.memoize)((function(e) {
            var r = s(e, 2),
                n = r[0],
                i = r[1],
                l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
                f = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                h = Math.max(l, 2),
                g = p([n, i]),
                v = s(g, 2),
                m = v[0],
                b = v[1];
            if (m === -1 / 0 || b === 1 / 0) {
                var x = b === 1 / 0 ? [m].concat(c((0, a.range)(0, l - 1).map((function() {
                    return 1 / 0
                })))) : [].concat(c((0, a.range)(0, l - 1).map((function() {
                    return -1 / 0
                }))), [b]);
                return n > i ? (0, a.reverse)(x) : x
            }
            if (m === b) return d(m, l, f);
            var w = y(m, b, h, f),
                O = w.step,
                j = w.tickMin,
                _ = w.tickMax,
                S = u.default.rangeStep(j, _.add(new(t(o))(.1).mul(O)), O);
            return n > i ? (0, a.reverse)(S) : S
        })),
        v = ((0, a.memoize)((function(e) {
            var r = s(e, 2),
                n = r[0],
                i = r[1],
                u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
                c = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                l = Math.max(u, 2),
                f = p([n, i]),
                y = s(f, 2),
                g = y[0],
                v = y[1];
            if (g === -1 / 0 || v === 1 / 0) return [n, i];
            if (g === v) return d(g, u, c);
            var m = h(new(t(o))(v).sub(g).div(l - 1), c, 0),
                b = (0, a.compose)((0, a.map)((function(e) {
                    return new(t(o))(g).add(new(t(o))(e).mul(m)).toNumber()
                })), a.range),
                x = b(0, l).filter((function(t) {
                    return t >= g && t <= v
                }));
            return n > i ? (0, a.reverse)(x) : x
        })), (0, a.memoize)((function(e, r) {
            var n = s(e, 2),
                i = n[0],
                l = n[1],
                f = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                d = p([i, l]),
                y = s(d, 2),
                g = y[0],
                v = y[1];
            if (g === -1 / 0 || v === 1 / 0) return [i, l];
            if (g === v) return [g];
            var m = Math.max(r, 2),
                b = h(new(t(o))(v).sub(g).div(m - 1), f, 0),
                x = [].concat(c(u.default.rangeStep(new(t(o))(g), new(t(o))(v).sub(new(t(o))(.99).mul(b)), b)), [v]);
            return i > l ? (0, a.reverse)(x) : x
        })))
})), n.register("1AgYl", (function(t, e) {
    ! function(e) {
        var r, n = 1e9,
            i = {
                precision: 20,
                rounding: 4,
                toExpNeg: -7,
                toExpPos: 21,
                LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
            },
            o = !0,
            a = "[DecimalError] ",
            u = a + "Invalid argument: ",
            c = a + "Exponent out of range: ",
            s = Math.floor,
            l = Math.pow,
            f = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
            p = 1e7,
            h = 9007199254740991,
            d = s(1286742750677284.5),
            y = {};

        function g(t, e) {
            var r, n, i, a, u, c, s, l, f = t.constructor,
                h = f.precision;
            if (!t.s || !e.s) return e.s || (e = new f(t)), o ? A(e, h) : e;
            if (s = t.d, l = e.d, u = t.e, i = e.e, s = s.slice(), a = u - i) {
                for (a < 0 ? (n = s, a = -a, c = l.length) : (n = l, i = u, c = s.length), a > (c = (u = Math.ceil(h / 7)) > c ? u + 1 : c + 1) && (a = c, n.length = 1), n.reverse(); a--;) n.push(0);
                n.reverse()
            }
            for ((c = s.length) - (a = l.length) < 0 && (a = c, n = l, l = s, s = n), r = 0; a;) r = (s[--a] = s[a] + l[a] + r) / p | 0, s[a] %= p;
            for (r && (s.unshift(r), ++i), c = s.length; 0 == s[--c];) s.pop();
            return e.d = s, e.e = i, o ? A(e, h) : e
        }

        function v(t, e, r) {
            if (t !== ~~t || t < e || t > r) throw Error(u + t)
        }

        function m(t) {
            var e, r, n, i = t.length - 1,
                o = "",
                a = t[0];
            if (i > 0) {
                for (o += a, e = 1; e < i; e++)(r = 7 - (n = t[e] + "").length) && (o += j(r)), o += n;
                (r = 7 - (n = (a = t[e]) + "").length) && (o += j(r))
            } else if (0 === a) return "0";
            for (; a % 10 == 0;) a /= 10;
            return o + a
        }
        y.absoluteValue = y.abs = function() {
            var t = new this.constructor(this);
            return t.s && (t.s = 1), t
        }, y.comparedTo = y.cmp = function(t) {
            var e, r, n, i, o = this;
            if (t = new o.constructor(t), o.s !== t.s) return o.s || -t.s;
            if (o.e !== t.e) return o.e > t.e ^ o.s < 0 ? 1 : -1;
            for (e = 0, r = (n = o.d.length) < (i = t.d.length) ? n : i; e < r; ++e)
                if (o.d[e] !== t.d[e]) return o.d[e] > t.d[e] ^ o.s < 0 ? 1 : -1;
            return n === i ? 0 : n > i ^ o.s < 0 ? 1 : -1
        }, y.decimalPlaces = y.dp = function() {
            var t = this,
                e = t.d.length - 1,
                r = 7 * (e - t.e);
            if (e = t.d[e])
                for (; e % 10 == 0; e /= 10) r--;
            return r < 0 ? 0 : r
        }, y.dividedBy = y.div = function(t) {
            return b(this, new this.constructor(t))
        }, y.dividedToIntegerBy = y.idiv = function(t) {
            var e = this.constructor;
            return A(b(this, new e(t), 0, 1), e.precision)
        }, y.equals = y.eq = function(t) {
            return !this.cmp(t)
        }, y.exponent = function() {
            return w(this)
        }, y.greaterThan = y.gt = function(t) {
            return this.cmp(t) > 0
        }, y.greaterThanOrEqualTo = y.gte = function(t) {
            return this.cmp(t) >= 0
        }, y.isInteger = y.isint = function() {
            return this.e > this.d.length - 2
        }, y.isNegative = y.isneg = function() {
            return this.s < 0
        }, y.isPositive = y.ispos = function() {
            return this.s > 0
        }, y.isZero = function() {
            return 0 === this.s
        }, y.lessThan = y.lt = function(t) {
            return this.cmp(t) < 0
        }, y.lessThanOrEqualTo = y.lte = function(t) {
            return this.cmp(t) < 1
        }, y.logarithm = y.log = function(t) {
            var e, n = this,
                i = n.constructor,
                u = i.precision,
                c = u + 5;
            if (void 0 === t) t = new i(10);
            else if ((t = new i(t)).s < 1 || t.eq(r)) throw Error(a + "NaN");
            if (n.s < 1) throw Error(a + (n.s ? "NaN" : "-Infinity"));
            return n.eq(r) ? new i(0) : (o = !1, e = b(_(n, c), _(t, c), c), o = !0, A(e, u))
        }, y.minus = y.sub = function(t) {
            var e = this;
            return t = new e.constructor(t), e.s == t.s ? k(e, t) : g(e, (t.s = -t.s, t))
        }, y.modulo = y.mod = function(t) {
            var e, r = this,
                n = r.constructor,
                i = n.precision;
            if (!(t = new n(t)).s) throw Error(a + "NaN");
            return r.s ? (o = !1, e = b(r, t, 0, 1).times(t), o = !0, r.minus(e)) : A(new n(r), i)
        }, y.naturalExponential = y.exp = function() {
            return x(this)
        }, y.naturalLogarithm = y.ln = function() {
            return _(this)
        }, y.negated = y.neg = function() {
            var t = new this.constructor(this);
            return t.s = -t.s || 0, t
        }, y.plus = y.add = function(t) {
            var e = this;
            return t = new e.constructor(t), e.s == t.s ? g(e, t) : k(e, (t.s = -t.s, t))
        }, y.precision = y.sd = function(t) {
            var e, r, n, i = this;
            if (void 0 !== t && t !== !!t && 1 !== t && 0 !== t) throw Error(u + t);
            if (e = w(i) + 1, r = 7 * (n = i.d.length - 1) + 1, n = i.d[n]) {
                for (; n % 10 == 0; n /= 10) r--;
                for (n = i.d[0]; n >= 10; n /= 10) r++
            }
            return t && e > r ? e : r
        }, y.squareRoot = y.sqrt = function() {
            var t, e, r, n, i, u, c, l = this,
                f = l.constructor;
            if (l.s < 1) {
                if (!l.s) return new f(0);
                throw Error(a + "NaN")
            }
            for (t = w(l), o = !1, 0 == (i = Math.sqrt(+l)) || i == 1 / 0 ? (((e = m(l.d)).length + t) % 2 == 0 && (e += "0"), i = Math.sqrt(e), t = s((t + 1) / 2) - (t < 0 || t % 2), n = new f(e = i == 1 / 0 ? "5e" + t : (e = i.toExponential()).slice(0, e.indexOf("e") + 1) + t)) : n = new f(i.toString()), i = c = (r = f.precision) + 3;;)
                if (n = (u = n).plus(b(l, u, c + 2)).times(.5), m(u.d).slice(0, c) === (e = m(n.d)).slice(0, c)) {
                    if (e = e.slice(c - 3, c + 1), i == c && "4999" == e) {
                        if (A(u, r + 1, 0), u.times(u).eq(l)) {
                            n = u;
                            break
                        }
                    } else if ("9999" != e) break;
                    c += 4
                } return o = !0, A(n, r)
        }, y.times = y.mul = function(t) {
            var e, r, n, i, a, u, c, s, l, f = this,
                h = f.constructor,
                d = f.d,
                y = (t = new h(t)).d;
            if (!f.s || !t.s) return new h(0);
            for (t.s *= f.s, r = f.e + t.e, (s = d.length) < (l = y.length) && (a = d, d = y, y = a, u = s, s = l, l = u), a = [], n = u = s + l; n--;) a.push(0);
            for (n = l; --n >= 0;) {
                for (e = 0, i = s + n; i > n;) c = a[i] + y[n] * d[i - n - 1] + e, a[i--] = c % p | 0, e = c / p | 0;
                a[i] = (a[i] + e) % p | 0
            }
            for (; !a[--u];) a.pop();
            return e ? ++r : a.shift(), t.d = a, t.e = r, o ? A(t, h.precision) : t
        }, y.toDecimalPlaces = y.todp = function(t, e) {
            var r = this,
                i = r.constructor;
            return r = new i(r), void 0 === t ? r : (v(t, 0, n), void 0 === e ? e = i.rounding : v(e, 0, 8), A(r, t + w(r) + 1, e))
        }, y.toExponential = function(t, e) {
            var r, i = this,
                o = i.constructor;
            return void 0 === t ? r = E(i, !0) : (v(t, 0, n), void 0 === e ? e = o.rounding : v(e, 0, 8), r = E(i = A(new o(i), t + 1, e), !0, t + 1)), r
        }, y.toFixed = function(t, e) {
            var r, i, o = this,
                a = o.constructor;
            return void 0 === t ? E(o) : (v(t, 0, n), void 0 === e ? e = a.rounding : v(e, 0, 8), r = E((i = A(new a(o), t + w(o) + 1, e)).abs(), !1, t + w(i) + 1), o.isneg() && !o.isZero() ? "-" + r : r)
        }, y.toInteger = y.toint = function() {
            var t = this,
                e = t.constructor;
            return A(new e(t), w(t) + 1, e.rounding)
        }, y.toNumber = function() {
            return +this
        }, y.toPower = y.pow = function(t) {
            var e, n, i, u, c, l, f = this,
                p = f.constructor,
                d = +(t = new p(t));
            if (!t.s) return new p(r);
            if (!(f = new p(f)).s) {
                if (t.s < 1) throw Error(a + "Infinity");
                return f
            }
            if (f.eq(r)) return f;
            if (i = p.precision, t.eq(r)) return A(f, i);
            if (l = (e = t.e) >= (n = t.d.length - 1), c = f.s, l) {
                if ((n = d < 0 ? -d : d) <= h) {
                    for (u = new p(r), e = Math.ceil(i / 7 + 4), o = !1; n % 2 && M((u = u.times(f)).d, e), 0 !== (n = s(n / 2));) M((f = f.times(f)).d, e);
                    return o = !0, t.s < 0 ? new p(r).div(u) : A(u, i)
                }
            } else if (c < 0) throw Error(a + "NaN");
            return c = c < 0 && 1 & t.d[Math.max(e, n)] ? -1 : 1, f.s = 1, o = !1, u = t.times(_(f, i + 12)), o = !0, (u = x(u)).s = c, u
        }, y.toPrecision = function(t, e) {
            var r, i, o = this,
                a = o.constructor;
            return void 0 === t ? i = E(o, (r = w(o)) <= a.toExpNeg || r >= a.toExpPos) : (v(t, 1, n), void 0 === e ? e = a.rounding : v(e, 0, 8), i = E(o = A(new a(o), t, e), t <= (r = w(o)) || r <= a.toExpNeg, t)), i
        }, y.toSignificantDigits = y.tosd = function(t, e) {
            var r = this.constructor;
            return void 0 === t ? (t = r.precision, e = r.rounding) : (v(t, 1, n), void 0 === e ? e = r.rounding : v(e, 0, 8)), A(new r(this), t, e)
        }, y.toString = y.valueOf = y.val = y.toJSON = function() {
            var t = this,
                e = w(t),
                r = t.constructor;
            return E(t, e <= r.toExpNeg || e >= r.toExpPos)
        };
        var b = function() {
            function t(t, e) {
                var r, n = 0,
                    i = t.length;
                for (t = t.slice(); i--;) r = t[i] * e + n, t[i] = r % p | 0, n = r / p | 0;
                return n && t.unshift(n), t
            }

            function e(t, e, r, n) {
                var i, o;
                if (r != n) o = r > n ? 1 : -1;
                else
                    for (i = o = 0; i < r; i++)
                        if (t[i] != e[i]) {
                            o = t[i] > e[i] ? 1 : -1;
                            break
                        } return o
            }

            function r(t, e, r) {
                for (var n = 0; r--;) t[r] -= n, n = t[r] < e[r] ? 1 : 0, t[r] = n * p + t[r] - e[r];
                for (; !t[0] && t.length > 1;) t.shift()
            }
            return function(n, i, o, u) {
                var c, s, l, f, h, d, y, g, v, m, b, x, O, j, _, S, k, E, M = n.constructor,
                    P = n.s == i.s ? 1 : -1,
                    C = n.d,
                    T = i.d;
                if (!n.s) return new M(n);
                if (!i.s) throw Error(a + "Division by zero");
                for (s = n.e - i.e, k = T.length, _ = C.length, g = (y = new M(P)).d = [], l = 0; T[l] == (C[l] || 0);) ++l;
                if (T[l] > (C[l] || 0) && --s, (x = null == o ? o = M.precision : u ? o + (w(n) - w(i)) + 1 : o) < 0) return new M(0);
                if (x = x / 7 + 2 | 0, l = 0, 1 == k)
                    for (f = 0, T = T[0], x++;
                        (l < _ || f) && x--; l++) O = f * p + (C[l] || 0), g[l] = O / T | 0, f = O % T | 0;
                else {
                    for ((f = p / (T[0] + 1) | 0) > 1 && (T = t(T, f), C = t(C, f), k = T.length, _ = C.length), j = k, m = (v = C.slice(0, k)).length; m < k;) v[m++] = 0;
                    (E = T.slice()).unshift(0), S = T[0], T[1] >= p / 2 && ++S;
                    do {
                        f = 0, (c = e(T, v, k, m)) < 0 ? (b = v[0], k != m && (b = b * p + (v[1] || 0)), (f = b / S | 0) > 1 ? (f >= p && (f = p - 1), 1 == (c = e(h = t(T, f), v, d = h.length, m = v.length)) && (f--, r(h, k < d ? E : T, d))) : (0 == f && (c = f = 1), h = T.slice()), (d = h.length) < m && h.unshift(0), r(v, h, m), -1 == c && (c = e(T, v, k, m = v.length)) < 1 && (f++, r(v, k < m ? E : T, m)), m = v.length) : 0 === c && (f++, v = [0]), g[l++] = f, c && v[0] ? v[m++] = C[j] || 0 : (v = [C[j]], m = 1)
                    } while ((j++ < _ || void 0 !== v[0]) && x--)
                }
                return g[0] || g.shift(), y.e = s, A(y, u ? o + w(y) + 1 : o)
            }
        }();

        function x(t, e) {
            var n, i, a, u, s, f = 0,
                p = 0,
                h = t.constructor,
                d = h.precision;
            if (w(t) > 16) throw Error(c + w(t));
            if (!t.s) return new h(r);
            for (null == e ? (o = !1, s = d) : s = e, u = new h(.03125); t.abs().gte(.1);) t = t.times(u), p += 5;
            for (s += Math.log(l(2, p)) / Math.LN10 * 2 + 5 | 0, n = i = a = new h(r), h.precision = s;;) {
                if (i = A(i.times(t), s), n = n.times(++f), m((u = a.plus(b(i, n, s))).d).slice(0, s) === m(a.d).slice(0, s)) {
                    for (; p--;) a = A(a.times(a), s);
                    return h.precision = d, null == e ? (o = !0, A(a, d)) : a
                }
                a = u
            }
        }

        function w(t) {
            for (var e = 7 * t.e, r = t.d[0]; r >= 10; r /= 10) e++;
            return e
        }

        function O(t, e, r) {
            if (e > t.LN10.sd()) throw o = !0, r && (t.precision = r), Error(a + "LN10 precision limit exceeded");
            return A(new t(t.LN10), e)
        }

        function j(t) {
            for (var e = ""; t--;) e += "0";
            return e
        }

        function _(t, e) {
            var n, i, u, c, s, l, f, p, h, d = 1,
                y = t,
                g = y.d,
                v = y.constructor,
                x = v.precision;
            if (y.s < 1) throw Error(a + (y.s ? "NaN" : "-Infinity"));
            if (y.eq(r)) return new v(0);
            if (null == e ? (o = !1, p = x) : p = e, y.eq(10)) return null == e && (o = !0), O(v, p);
            if (p += 10, v.precision = p, i = (n = m(g)).charAt(0), c = w(y), !(Math.abs(c) < 15e14)) return f = O(v, p + 2, x).times(c + ""), y = _(new v(i + "." + n.slice(1)), p - 10).plus(f), v.precision = x, null == e ? (o = !0, A(y, x)) : y;
            for (; i < 7 && 1 != i || 1 == i && n.charAt(1) > 3;) i = (n = m((y = y.times(t)).d)).charAt(0), d++;
            for (c = w(y), i > 1 ? (y = new v("0." + n), c++) : y = new v(i + "." + n.slice(1)), l = s = y = b(y.minus(r), y.plus(r), p), h = A(y.times(y), p), u = 3;;) {
                if (s = A(s.times(h), p), m((f = l.plus(b(s, new v(u), p))).d).slice(0, p) === m(l.d).slice(0, p)) return l = l.times(2), 0 !== c && (l = l.plus(O(v, p + 2, x).times(c + ""))), l = b(l, new v(d), p), v.precision = x, null == e ? (o = !0, A(l, x)) : l;
                l = f, u += 2
            }
        }

        function S(t, e) {
            var r, n, i;
            for ((r = e.indexOf(".")) > -1 && (e = e.replace(".", "")), (n = e.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +e.slice(n + 1), e = e.substring(0, n)) : r < 0 && (r = e.length), n = 0; 48 === e.charCodeAt(n);) ++n;
            for (i = e.length; 48 === e.charCodeAt(i - 1);) --i;
            if (e = e.slice(n, i)) {
                if (i -= n, r = r - n - 1, t.e = s(r / 7), t.d = [], n = (r + 1) % 7, r < 0 && (n += 7), n < i) {
                    for (n && t.d.push(+e.slice(0, n)), i -= 7; n < i;) t.d.push(+e.slice(n, n += 7));
                    n = 7 - (e = e.slice(n)).length
                } else n -= i;
                for (; n--;) e += "0";
                if (t.d.push(+e), o && (t.e > d || t.e < -d)) throw Error(c + r)
            } else t.s = 0, t.e = 0, t.d = [0];
            return t
        }

        function A(t, e, r) {
            var n, i, a, u, f, h, y, g, v = t.d;
            for (u = 1, a = v[0]; a >= 10; a /= 10) u++;
            if ((n = e - u) < 0) n += 7, i = e, y = v[g = 0];
            else {
                if ((g = Math.ceil((n + 1) / 7)) >= (a = v.length)) return t;
                for (y = a = v[g], u = 1; a >= 10; a /= 10) u++;
                i = (n %= 7) - 7 + u
            }
            if (void 0 !== r && (f = y / (a = l(10, u - i - 1)) % 10 | 0, h = e < 0 || void 0 !== v[g + 1] || y % a, h = r < 4 ? (f || h) && (0 == r || r == (t.s < 0 ? 3 : 2)) : f > 5 || 5 == f && (4 == r || h || 6 == r && (n > 0 ? i > 0 ? y / l(10, u - i) : 0 : v[g - 1]) % 10 & 1 || r == (t.s < 0 ? 8 : 7))), e < 1 || !v[0]) return h ? (a = w(t), v.length = 1, e = e - a - 1, v[0] = l(10, (7 - e % 7) % 7), t.e = s(-e / 7) || 0) : (v.length = 1, v[0] = t.e = t.s = 0), t;
            if (0 == n ? (v.length = g, a = 1, g--) : (v.length = g + 1, a = l(10, 7 - n), v[g] = i > 0 ? (y / l(10, u - i) % l(10, i) | 0) * a : 0), h)
                for (;;) {
                    if (0 == g) {
                        (v[0] += a) == p && (v[0] = 1, ++t.e);
                        break
                    }
                    if (v[g] += a, v[g] != p) break;
                    v[g--] = 0, a = 1
                }
            for (n = v.length; 0 === v[--n];) v.pop();
            if (o && (t.e > d || t.e < -d)) throw Error(c + w(t));
            return t
        }

        function k(t, e) {
            var r, n, i, a, u, c, s, l, f, h, d = t.constructor,
                y = d.precision;
            if (!t.s || !e.s) return e.s ? e.s = -e.s : e = new d(t), o ? A(e, y) : e;
            if (s = t.d, h = e.d, n = e.e, l = t.e, s = s.slice(), u = l - n) {
                for ((f = u < 0) ? (r = s, u = -u, c = h.length) : (r = h, n = l, c = s.length), u > (i = Math.max(Math.ceil(y / 7), c) + 2) && (u = i, r.length = 1), r.reverse(), i = u; i--;) r.push(0);
                r.reverse()
            } else {
                for ((f = (i = s.length) < (c = h.length)) && (c = i), i = 0; i < c; i++)
                    if (s[i] != h[i]) {
                        f = s[i] < h[i];
                        break
                    } u = 0
            }
            for (f && (r = s, s = h, h = r, e.s = -e.s), c = s.length, i = h.length - c; i > 0; --i) s[c++] = 0;
            for (i = h.length; i > u;) {
                if (s[--i] < h[i]) {
                    for (a = i; a && 0 === s[--a];) s[a] = p - 1;
                    --s[a], s[i] += p
                }
                s[i] -= h[i]
            }
            for (; 0 === s[--c];) s.pop();
            for (; 0 === s[0]; s.shift()) --n;
            return s[0] ? (e.d = s, e.e = n, o ? A(e, y) : e) : new d(0)
        }

        function E(t, e, r) {
            var n, i = w(t),
                o = m(t.d),
                a = o.length;
            return e ? (r && (n = r - a) > 0 ? o = o.charAt(0) + "." + o.slice(1) + j(n) : a > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (i < 0 ? "e" : "e+") + i) : i < 0 ? (o = "0." + j(-i - 1) + o, r && (n = r - a) > 0 && (o += j(n))) : i >= a ? (o += j(i + 1 - a), r && (n = r - i - 1) > 0 && (o = o + "." + j(n))) : ((n = i + 1) < a && (o = o.slice(0, n) + "." + o.slice(n)), r && (n = r - a) > 0 && (i + 1 === a && (o += "."), o += j(n))), t.s < 0 ? "-" + o : o
        }

        function M(t, e) {
            if (t.length > e) return t.length = e, !0
        }

        function P(t) {
            if (!t || "object" != typeof t) throw Error(a + "Object expected");
            var e, r, i, o = ["precision", 1, n, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
            for (e = 0; e < o.length; e += 3)
                if (void 0 !== (i = t[r = o[e]])) {
                    if (!(s(i) === i && i >= o[e + 1] && i <= o[e + 2])) throw Error(u + r + ": " + i);
                    this[r] = i
                } if (void 0 !== (i = t[r = "LN10"])) {
                if (i != Math.LN10) throw Error(u + r + ": " + i);
                this[r] = new this(i)
            }
            return this
        }
        i = function t(e) {
            var r, n, i;

            function o(t) {
                var e = this;
                if (!(e instanceof o)) return new o(t);
                if (e.constructor = o, t instanceof o) return e.s = t.s, e.e = t.e, void(e.d = (t = t.d) ? t.slice() : t);
                if ("number" == typeof t) {
                    if (0 * t != 0) throw Error(u + t);
                    if (t > 0) e.s = 1;
                    else {
                        if (!(t < 0)) return e.s = 0, e.e = 0, void(e.d = [0]);
                        t = -t, e.s = -1
                    }
                    return t === ~~t && t < 1e7 ? (e.e = 0, void(e.d = [t])) : S(e, t.toString())
                }
                if ("string" != typeof t) throw Error(u + t);
                if (45 === t.charCodeAt(0) ? (t = t.slice(1), e.s = -1) : e.s = 1, !f.test(t)) throw Error(u + t);
                S(e, t)
            }
            if (o.prototype = y, o.ROUND_UP = 0, o.ROUND_DOWN = 1, o.ROUND_CEIL = 2, o.ROUND_FLOOR = 3, o.ROUND_HALF_UP = 4, o.ROUND_HALF_DOWN = 5, o.ROUND_HALF_EVEN = 6, o.ROUND_HALF_CEIL = 7, o.ROUND_HALF_FLOOR = 8, o.clone = t, o.config = o.set = P, void 0 === e && (e = {}), e)
                for (i = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], r = 0; r < i.length;) e.hasOwnProperty(n = i[r++]) || (e[n] = this[n]);
            return o.config(e), o
        }(i), i.default = i.Decimal = i, r = new i(1), "function" == typeof define && define.amd ? define((function() {
            return i
        })) : t.exports ? t.exports = i : (e || (e = "undefined" != typeof self && self && self.self == self ? self : Function("return this")()), e.Decimal = i)
    }(t.exports)
})), n.register("bwdhT", (function(t, r) {
    function n(t) {
        return function(t) {
            if (Array.isArray(t)) return i(t)
        }(t) || function(t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
        }(t) || function(t, e) {
            if (!t) return;
            if ("string" == typeof t) return i(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(t);
            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return i(t, e)
        }(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function i(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n
    }
    e(t.exports, "curry", (function() {
        return l
    })), e(t.exports, "range", (function() {
        return f
    })), e(t.exports, "map", (function() {
        return p
    })), e(t.exports, "compose", (function() {
        return h
    })), e(t.exports, "reverse", (function() {
        return d
    })), e(t.exports, "memoize", (function() {
        return y
    }));
    var o = function(t) {
            return t
        },
        a = {
            "@@functional/placeholder": !0
        },
        u = function(t) {
            return t === a
        },
        c = function(t) {
            return function e() {
                return 0 === arguments.length || 1 === arguments.length && u(arguments.length <= 0 ? void 0 : arguments[0]) ? e : t.apply(void 0, arguments)
            }
        },
        s = function t(e, r) {
            return 1 === e ? r : c((function() {
                for (var i = arguments.length, o = new Array(i), s = 0; s < i; s++) o[s] = arguments[s];
                var l = o.filter((function(t) {
                    return t !== a
                })).length;
                return l >= e ? r.apply(void 0, o) : t(e - l, c((function() {
                    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                    var a = o.map((function(t) {
                        return u(t) ? e.shift() : t
                    }));
                    return r.apply(void 0, n(a).concat(e))
                })))
            }))
        },
        l = function(t) {
            return s(t.length, t)
        },
        f = function(t, e) {
            for (var r = [], n = t; n < e; ++n) r[n - t] = n;
            return r
        },
        p = l((function(t, e) {
            return Array.isArray(e) ? e.map(t) : Object.keys(e).map((function(t) {
                return e[t]
            })).map(t)
        })),
        h = function() {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
            if (!e.length) return o;
            var n = e.reverse(),
                i = n[0],
                a = n.slice(1);
            return function() {
                return a.reduce((function(t, e) {
                    return e(t)
                }), i.apply(void 0, arguments))
            }
        },
        d = function(t) {
            return Array.isArray(t) ? t.reverse() : t.split("").reverse.join("")
        },
        y = function(t) {
            var e = null,
                r = null;
            return function() {
                for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o];
                return e && i.every((function(t, r) {
                    return t === e[r]
                })) ? r : (e = i, r = t.apply(void 0, i))
            }
        }
})), n.register("hGUKF", (function(r, i) {
    e(r.exports, "default", (function() {
        return u
    }));
    var o = n("1AgYl"),
        a = n("bwdhT");
    var u = {
        rangeStep: function(e, r, n) {
            for (var i = new(t(o))(e), a = 0, u = []; i.lt(r) && a < 1e5;) u.push(i.toNumber()), i = i.add(n), a++;
            return u
        },
        getDigitCount: function(e) {
            return 0 === e ? 1 : Math.floor(new(t(o))(e).abs().log(10).toNumber()) + 1
        },
        interpolateNumber: (0, a.curry)((function(t, e, r) {
            var n = +t;
            return n + r * (+e - n)
        })),
        uninterpolateNumber: (0, a.curry)((function(t, e, r) {
            var n = e - +t;
            return (r - t) / (n = n || 1 / 0)
        })),
        uninterpolateTruncation: (0, a.curry)((function(t, e, r) {
            var n = e - +t;
            return n = n || 1 / 0, Math.max(0, Math.min(1, (r - t) / n))
        }))
    }
})), n.register("cLnUD", (function(t, r) {
    e(t.exports, "scaleBand", (function() {
        return n("iECwa").default
    })), e(t.exports, "scalePoint", (function() {
        return n("iECwa").point
    })), e(t.exports, "scaleIdentity", (function() {
        return n("hgd3P").default
    })), e(t.exports, "scaleLinear", (function() {
        return n("hpzFq").default
    })), e(t.exports, "scaleLog", (function() {
        return n("eF6vx").default
    })), e(t.exports, "scaleSymlog", (function() {
        return n("i73Pe").default
    })), e(t.exports, "scaleOrdinal", (function() {
        return n("5hPrz").default
    })), e(t.exports, "scaleImplicit", (function() {
        return n("5hPrz").implicit
    })), e(t.exports, "scalePow", (function() {
        return n("eATyM").default
    })), e(t.exports, "scaleSqrt", (function() {
        return n("eATyM").sqrt
    })), e(t.exports, "scaleRadial", (function() {
        return n("ldOY1").default
    })), e(t.exports, "scaleQuantile", (function() {
        return n("7V5P4").default
    })), e(t.exports, "scaleQuantize", (function() {
        return n("yzz5q").default
    })), e(t.exports, "scaleThreshold", (function() {
        return n("ApfGm").default
    })), e(t.exports, "scaleTime", (function() {
        return n("7zhXA").default
    })), e(t.exports, "scaleUtc", (function() {
        return n("9bM27").default
    })), e(t.exports, "scaleSequential", (function() {
        return n("i1F7t").default
    })), e(t.exports, "scaleSequentialLog", (function() {
        return n("i1F7t").sequentialLog
    })), e(t.exports, "scaleSequentialPow", (function() {
        return n("i1F7t").sequentialPow
    })), e(t.exports, "scaleSequentialSqrt", (function() {
        return n("i1F7t").sequentialSqrt
    })), e(t.exports, "scaleSequentialSymlog", (function() {
        return n("i1F7t").sequentialSymlog
    })), e(t.exports, "scaleSequentialQuantile", (function() {
        return n("aYwId").default
    })), e(t.exports, "scaleDiverging", (function() {
        return n("jGDW4").default
    })), e(t.exports, "scaleDivergingLog", (function() {
        return n("jGDW4").divergingLog
    })), e(t.exports, "scaleDivergingPow", (function() {
        return n("jGDW4").divergingPow
    })), e(t.exports, "scaleDivergingSqrt", (function() {
        return n("jGDW4").divergingSqrt
    })), e(t.exports, "scaleDivergingSymlog", (function() {
        return n("jGDW4").divergingSymlog
    })), e(t.exports, "tickFormat", (function() {
        return n("3DHkL").default
    }));
    n("iECwa"), n("hgd3P"), n("hpzFq"), n("eF6vx"), n("i73Pe"), n("5hPrz"), n("eATyM"), n("ldOY1"), n("7V5P4"), n("yzz5q"), n("ApfGm"), n("7zhXA"), n("9bM27"), n("i1F7t"), n("aYwId"), n("jGDW4"), n("3DHkL")
})), n.register("iECwa", (function(t, r) {
    e(t.exports, "default", (function() {
        return u
    })), e(t.exports, "point", (function() {
        return s
    }));
    var i = n("2NpBd"),
        o = n("cw5Ml"),
        a = n("5hPrz");

    function u() {
        var t, e, r = (0, a.default)().unknown(void 0),
            n = r.domain,
            c = r.range,
            s = 0,
            l = 1,
            f = !1,
            p = 0,
            h = 0,
            d = .5;

        function y() {
            var r = n().length,
                o = l < s,
                a = o ? l : s,
                u = o ? s : l;
            t = (u - a) / Math.max(1, r - p + 2 * h), f && (t = Math.floor(t)), a += (u - a - t * (r - p)) * d, e = t * (1 - p), f && (a = Math.round(a), e = Math.round(e));
            var y = (0, i.default)(r).map((function(e) {
                return a + t * e
            }));
            return c(o ? y.reverse() : y)
        }
        return delete r.unknown, r.domain = function(t) {
            return arguments.length ? (n(t), y()) : n()
        }, r.range = function(t) {
            return arguments.length ? ([s, l] = t, s = +s, l = +l, y()) : [s, l]
        }, r.rangeRound = function(t) {
            return [s, l] = t, s = +s, l = +l, f = !0, y()
        }, r.bandwidth = function() {
            return e
        }, r.step = function() {
            return t
        }, r.round = function(t) {
            return arguments.length ? (f = !!t, y()) : f
        }, r.padding = function(t) {
            return arguments.length ? (p = Math.min(1, h = +t), y()) : p
        }, r.paddingInner = function(t) {
            return arguments.length ? (p = Math.min(1, t), y()) : p
        }, r.paddingOuter = function(t) {
            return arguments.length ? (h = +t, y()) : h
        }, r.align = function(t) {
            return arguments.length ? (d = Math.max(0, Math.min(1, t)), y()) : d
        }, r.copy = function() {
            return u(n(), [s, l]).round(f).paddingInner(p).paddingOuter(h).align(d)
        }, o.initRange.apply(y(), arguments)
    }

    function c(t) {
        var e = t.copy;
        return t.padding = t.paddingOuter, delete t.paddingInner, delete t.paddingOuter, t.copy = function() {
            return c(e())
        }, t
    }

    function s() {
        return c(u.apply(null, arguments).paddingInner(1))
    }
})), n.register("2NpBd", (function(t, r) {
    function n(t, e, r) {
        t = +t, e = +e, r = (i = arguments.length) < 2 ? (e = t, t = 0, 1) : i < 3 ? 1 : +r;
        for (var n = -1, i = 0 | Math.max(0, Math.ceil((e - t) / r)), o = new Array(i); ++n < i;) o[n] = t + n * r;
        return o
    }
    e(t.exports, "default", (function() {
        return n
    }))
})), n.register("cw5Ml", (function(t, r) {
    function n(t, e) {
        switch (arguments.length) {
            case 0:
                break;
            case 1:
                this.range(t);
                break;
            default:
                this.range(e).domain(t)
        }
        return this
    }

    function i(t, e) {
        switch (arguments.length) {
            case 0:
                break;
            case 1:
                "function" == typeof t ? this.interpolator(t) : this.range(t);
                break;
            default:
                this.domain(t), "function" == typeof e ? this.interpolator(e) : this.range(e)
        }
        return this
    }
    e(t.exports, "initRange", (function() {
        return n
    })), e(t.exports, "initInterpolator", (function() {
        return i
    }))
})), n.register("5hPrz", (function(t, r) {
    e(t.exports, "implicit", (function() {
        return o
    })), e(t.exports, "default", (function() {
        return a
    }));
    var i = n("cw5Ml");
    const o = Symbol("implicit");

    function a() {
        var t = new Map,
            e = [],
            r = [],
            n = o;

        function u(i) {
            var a = i + "",
                u = t.get(a);
            if (!u) {
                if (n !== o) return n;
                t.set(a, u = e.push(i))
            }
            return r[(u - 1) % r.length]
        }
        return u.domain = function(r) {
            if (!arguments.length) return e.slice();
            e = [], t = new Map;
            for (const n of r) {
                const r = n + "";
                t.has(r) || t.set(r, e.push(n))
            }
            return u
        }, u.range = function(t) {
            return arguments.length ? (r = Array.from(t), u) : r.slice()
        }, u.unknown = function(t) {
            return arguments.length ? (n = t, u) : n
        }, u.copy = function() {
            return a(e, r).unknown(n)
        }, i.initRange.apply(u, arguments), u
    }
})), n.register("hgd3P", (function(t, r) {
    e(t.exports, "default", (function() {
        return a
    }));
    var i = n("hpzFq"),
        o = n("l5lFh");

    function a(t) {
        var e;

        function r(t) {
            return null == t || isNaN(t = +t) ? e : t
        }
        return r.invert = r, r.domain = r.range = function(e) {
            return arguments.length ? (t = Array.from(e, o.default), r) : t.slice()
        }, r.unknown = function(t) {
            return arguments.length ? (e = t, r) : e
        }, r.copy = function() {
            return a(t).unknown(e)
        }, t = arguments.length ? Array.from(t, o.default) : [0, 1], (0, i.linearish)(r)
    }
})), n.register("hpzFq", (function(t, r) {
    e(t.exports, "linearish", (function() {
        return c
    })), e(t.exports, "default", (function() {
        return s
    }));
    var i = n("lE8ib"),
        o = n("5OJKq"),
        a = n("cw5Ml"),
        u = n("3DHkL");

    function c(t) {
        var e = t.domain;
        return t.ticks = function(t) {
            var r = e();
            return (0, i.default)(r[0], r[r.length - 1], null == t ? 10 : t)
        }, t.tickFormat = function(t, r) {
            var n = e();
            return (0, u.default)(n[0], n[n.length - 1], null == t ? 10 : t, r)
        }, t.nice = function(r) {
            null == r && (r = 10);
            var n, o, a = e(),
                u = 0,
                c = a.length - 1,
                s = a[u],
                l = a[c],
                f = 10;
            for (l < s && (o = s, s = l, l = o, o = u, u = c, c = o); f-- > 0;) {
                if ((o = (0, i.tickIncrement)(s, l, r)) === n) return a[u] = s, a[c] = l, e(a);
                if (o > 0) s = Math.floor(s / o) * o, l = Math.ceil(l / o) * o;
                else {
                    if (!(o < 0)) break;
                    s = Math.ceil(s * o) / o, l = Math.floor(l * o) / o
                }
                n = o
            }
            return t
        }, t
    }

    function s() {
        var t = (0, o.default)();
        return t.copy = function() {
            return (0, o.copy)(t, s())
        }, a.initRange.apply(t, arguments), c(t)
    }
})), n.register("lE8ib", (function(t, r) {
    e(t.exports, "default", (function() {
        return a
    })), e(t.exports, "tickIncrement", (function() {
        return u
    })), e(t.exports, "tickStep", (function() {
        return c
    }));
    var n = Math.sqrt(50),
        i = Math.sqrt(10),
        o = Math.sqrt(2);

    function a(t, e, r) {
        var n, i, o, a, c = -1;
        if (r = +r, (t = +t) === (e = +e) && r > 0) return [t];
        if ((n = e < t) && (i = t, t = e, e = i), 0 === (a = u(t, e, r)) || !isFinite(a)) return [];
        if (a > 0) {
            let r = Math.round(t / a),
                n = Math.round(e / a);
            for (r * a < t && ++r, n * a > e && --n, o = new Array(i = n - r + 1); ++c < i;) o[c] = (r + c) * a
        } else {
            a = -a;
            let r = Math.round(t * a),
                n = Math.round(e * a);
            for (r / a < t && ++r, n / a > e && --n, o = new Array(i = n - r + 1); ++c < i;) o[c] = (r + c) / a
        }
        return n && o.reverse(), o
    }

    function u(t, e, r) {
        var a = (e - t) / Math.max(0, r),
            u = Math.floor(Math.log(a) / Math.LN10),
            c = a / Math.pow(10, u);
        return u >= 0 ? (c >= n ? 10 : c >= i ? 5 : c >= o ? 2 : 1) * Math.pow(10, u) : -Math.pow(10, -u) / (c >= n ? 10 : c >= i ? 5 : c >= o ? 2 : 1)
    }

    function c(t, e, r) {
        var a = Math.abs(e - t) / Math.max(0, r),
            u = Math.pow(10, Math.floor(Math.log(a) / Math.LN10)),
            c = a / u;
        return c >= n ? u *= 10 : c >= i ? u *= 5 : c >= o && (u *= 2), e < t ? -u : u
    }
})), n.register("5OJKq", (function(t, r) {
    e(t.exports, "identity", (function() {
        return f
    })), e(t.exports, "copy", (function() {
        return y
    })), e(t.exports, "transformer", (function() {
        return g
    })), e(t.exports, "default", (function() {
        return v
    }));
    var i = n("2SUYA"),
        o = n("cUybY"),
        a = n("uclUe"),
        u = n("47yGB"),
        c = n("hResG"),
        s = n("l5lFh"),
        l = [0, 1];

    function f(t) {
        return t
    }

    function p(t, e) {
        return (e -= t = +t) ? function(r) {
            return (r - t) / e
        } : (0, c.default)(isNaN(e) ? NaN : .5)
    }

    function h(t, e, r) {
        var n = t[0],
            i = t[1],
            o = e[0],
            a = e[1];
        return i < n ? (n = p(i, n), o = r(a, o)) : (n = p(n, i), o = r(o, a)),
            function(t) {
                return o(n(t))
            }
    }

    function d(t, e, r) {
        var n = Math.min(t.length, e.length) - 1,
            o = new Array(n),
            a = new Array(n),
            u = -1;
        for (t[n] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++u < n;) o[u] = p(t[u], t[u + 1]), a[u] = r(e[u], e[u + 1]);
        return function(e) {
            var r = (0, i.default)(t, e, 1, n) - 1;
            return a[r](o[r](e))
        }
    }

    function y(t, e) {
        return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown())
    }

    function g() {
        var t, e, r, n, i, c, p = l,
            y = l,
            g = o.default,
            v = f;

        function m() {
            var t, e, r, o = Math.min(p.length, y.length);
            return v !== f && (t = p[0], e = p[o - 1], t > e && (r = t, t = e, e = r), v = function(r) {
                return Math.max(t, Math.min(e, r))
            }), n = o > 2 ? d : h, i = c = null, b
        }

        function b(e) {
            return null == e || isNaN(e = +e) ? r : (i || (i = n(p.map(t), y, g)))(t(v(e)))
        }
        return b.invert = function(r) {
                return v(e((c || (c = n(y, p.map(t), a.default)))(r)))
            }, b.domain = function(t) {
                return arguments.length ? (p = Array.from(t, s.default), m()) : p.slice()
            }, b.range = function(t) {
                return arguments.length ? (y = Array.from(t), m()) : y.slice()
            }, b.rangeRound = function(t) {
                return y = Array.from(t), g = u.default, m()
            }, b.clamp = function(t) {
                return arguments.length ? (v = !!t || f, m()) : v !== f
            }, b.interpolate = function(t) {
                return arguments.length ? (g = t, m()) : g
            }, b.unknown = function(t) {
                return arguments.length ? (r = t, b) : r
            },
            function(r, n) {
                return t = r, e = n, m()
            }
    }

    function v() {
        return g()(f, f)
    }
})), n.register("2SUYA", (function(t, r) {
    e(t.exports, "default", (function() {
        return s
    }));
    var i = n("3VwW0"),
        o = n("f0AvK"),
        a = n("aOgHy");
    const u = (0, o.default)(i.default),
        c = u.right;
    u.left, (0, o.default)(a.default).center;
    var s = c
})), n.register("3VwW0", (function(t, r) {
    function n(t, e) {
        return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN
    }
    e(t.exports, "default", (function() {
        return n
    }))
})), n.register("f0AvK", (function(t, r) {
    e(t.exports, "default", (function() {
        return o
    }));
    var i = n("3VwW0");

    function o(t) {
        let e = t,
            r = t;

        function n(t, e, n, i) {
            for (null == n && (n = 0), null == i && (i = t.length); n < i;) {
                const o = n + i >>> 1;
                r(t[o], e) < 0 ? n = o + 1 : i = o
            }
            return n
        }
        return 1 === t.length && (e = (e, r) => t(e) - r, r = function(t) {
            return (e, r) => (0, i.default)(t(e), r)
        }(t)), {
            left: n,
            center: function(t, r, i, o) {
                null == i && (i = 0), null == o && (o = t.length);
                const a = n(t, r, i, o - 1);
                return a > i && e(t[a - 1], r) > -e(t[a], r) ? a - 1 : a
            },
            right: function(t, e, n, i) {
                for (null == n && (n = 0), null == i && (i = t.length); n < i;) {
                    const o = n + i >>> 1;
                    r(t[o], e) > 0 ? i = o : n = o + 1
                }
                return n
            }
        }
    }
})), n.register("aOgHy", (function(t, r) {
    function n(t) {
        return null === t ? NaN : +t
    }

    function* i(t, e) {
        if (void 0 === e)
            for (let e of t) null != e && (e = +e) >= e && (yield e);
        else {
            let r = -1;
            for (let n of t) null != (n = e(n, ++r, t)) && (n = +n) >= n && (yield n)
        }
    }
    e(t.exports, "default", (function() {
        return n
    })), e(t.exports, "numbers", (function() {
        return i
    }))
})), n.register("cUybY", (function(t, r) {
    e(t.exports, "default", (function() {
        return h
    }));
    var i = n("hzLFB"),
        o = n("dIgyP"),
        a = n("8lLY8"),
        u = n("at5KO"),
        c = n("uclUe"),
        s = n("j7W7s"),
        l = n("jPxzS"),
        f = n("eITwU"),
        p = n("j4MtO");

    function h(t, e) {
        var r, n = typeof e;
        return null == e || "boolean" === n ? (0, f.default)(e) : ("number" === n ? c.default : "string" === n ? (r = (0, i.default)(e)) ? (e = r, o.default) : l.default : e instanceof i.default ? o.default : e instanceof Date ? u.default : (0, p.isNumberArray)(e) ? p.default : Array.isArray(e) ? a.genericArray : "function" != typeof e.valueOf && "function" != typeof e.toString || isNaN(e) ? s.default : c.default)(t, e)
    }
})), n.register("hzLFB", (function(t, r) {
    e(t.exports, "default", (function() {
        return w
    })), e(t.exports, "rgb", (function() {
        return S
    }));
    var i = n("6gDt5");

    function o() {}
    var a = .7,
        u = 1.4285714285714286,
        c = "\\s*([+-]?\\d+)\\s*",
        s = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
        l = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
        f = /^#([0-9a-f]{3,8})$/,
        p = new RegExp("^rgb\\(" + [c, c, c] + "\\)$"),
        h = new RegExp("^rgb\\(" + [l, l, l] + "\\)$"),
        d = new RegExp("^rgba\\(" + [c, c, c, s] + "\\)$"),
        y = new RegExp("^rgba\\(" + [l, l, l, s] + "\\)$"),
        g = new RegExp("^hsl\\(" + [s, l, l] + "\\)$"),
        v = new RegExp("^hsla\\(" + [s, l, l, s] + "\\)$"),
        m = {
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

    function b() {
        return this.rgb().formatHex()
    }

    function x() {
        return this.rgb().formatRgb()
    }

    function w(t) {
        var e, r;
        return t = (t + "").trim().toLowerCase(), (e = f.exec(t)) ? (r = e[1].length, e = parseInt(e[1], 16), 6 === r ? O(e) : 3 === r ? new A(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | 240 & e, (15 & e) << 4 | 15 & e, 1) : 8 === r ? j(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (255 & e) / 255) : 4 === r ? j(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | 240 & e, ((15 & e) << 4 | 15 & e) / 255) : null) : (e = p.exec(t)) ? new A(e[1], e[2], e[3], 1) : (e = h.exec(t)) ? new A(255 * e[1] / 100, 255 * e[2] / 100, 255 * e[3] / 100, 1) : (e = d.exec(t)) ? j(e[1], e[2], e[3], e[4]) : (e = y.exec(t)) ? j(255 * e[1] / 100, 255 * e[2] / 100, 255 * e[3] / 100, e[4]) : (e = g.exec(t)) ? P(e[1], e[2] / 100, e[3] / 100, 1) : (e = v.exec(t)) ? P(e[1], e[2] / 100, e[3] / 100, e[4]) : m.hasOwnProperty(t) ? O(m[t]) : "transparent" === t ? new A(NaN, NaN, NaN, 0) : null
    }

    function O(t) {
        return new A(t >> 16 & 255, t >> 8 & 255, 255 & t, 1)
    }

    function j(t, e, r, n) {
        return n <= 0 && (t = e = r = NaN), new A(t, e, r, n)
    }

    function _(t) {
        return t instanceof o || (t = w(t)), t ? new A((t = t.rgb()).r, t.g, t.b, t.opacity) : new A
    }

    function S(t, e, r, n) {
        return 1 === arguments.length ? _(t) : new A(t, e, r, null == n ? 1 : n)
    }

    function A(t, e, r, n) {
        this.r = +t, this.g = +e, this.b = +r, this.opacity = +n
    }

    function k() {
        return "#" + M(this.r) + M(this.g) + M(this.b)
    }

    function E() {
        var t = this.opacity;
        return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")" : ", " + t + ")")
    }

    function M(t) {
        return ((t = Math.max(0, Math.min(255, Math.round(t) || 0))) < 16 ? "0" : "") + t.toString(16)
    }

    function P(t, e, r, n) {
        return n <= 0 ? t = e = r = NaN : r <= 0 || r >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new T(t, e, r, n)
    }

    function C(t) {
        if (t instanceof T) return new T(t.h, t.s, t.l, t.opacity);
        if (t instanceof o || (t = w(t)), !t) return new T;
        if (t instanceof T) return t;
        var e = (t = t.rgb()).r / 255,
            r = t.g / 255,
            n = t.b / 255,
            i = Math.min(e, r, n),
            a = Math.max(e, r, n),
            u = NaN,
            c = a - i,
            s = (a + i) / 2;
        return c ? (u = e === a ? (r - n) / c + 6 * (r < n) : r === a ? (n - e) / c + 2 : (e - r) / c + 4, c /= s < .5 ? a + i : 2 - a - i, u *= 60) : c = s > 0 && s < 1 ? 0 : u, new T(u, c, s, t.opacity)
    }

    function T(t, e, r, n) {
        this.h = +t, this.s = +e, this.l = +r, this.opacity = +n
    }

    function I(t, e, r) {
        return 255 * (t < 60 ? e + (r - e) * t / 60 : t < 180 ? r : t < 240 ? e + (r - e) * (240 - t) / 60 : e)
    }(0, i.default)(o, w, {
        copy: function(t) {
            return Object.assign(new this.constructor, this, t)
        },
        displayable: function() {
            return this.rgb().displayable()
        },
        hex: b,
        formatHex: b,
        formatHsl: function() {
            return C(this).formatHsl()
        },
        formatRgb: x,
        toString: x
    }), (0, i.default)(A, S, (0, i.extend)(o, {
        brighter: function(t) {
            return t = null == t ? u : Math.pow(u, t), new A(this.r * t, this.g * t, this.b * t, this.opacity)
        },
        darker: function(t) {
            return t = null == t ? a : Math.pow(a, t), new A(this.r * t, this.g * t, this.b * t, this.opacity)
        },
        rgb: function() {
            return this
        },
        displayable: function() {
            return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1
        },
        hex: k,
        formatHex: k,
        formatRgb: E,
        toString: E
    })), (0, i.default)(T, (function(t, e, r, n) {
        return 1 === arguments.length ? C(t) : new T(t, e, r, null == n ? 1 : n)
    }), (0, i.extend)(o, {
        brighter: function(t) {
            return t = null == t ? u : Math.pow(u, t), new T(this.h, this.s, this.l * t, this.opacity)
        },
        darker: function(t) {
            return t = null == t ? a : Math.pow(a, t), new T(this.h, this.s, this.l * t, this.opacity)
        },
        rgb: function() {
            var t = this.h % 360 + 360 * (this.h < 0),
                e = isNaN(t) || isNaN(this.s) ? 0 : this.s,
                r = this.l,
                n = r + (r < .5 ? r : 1 - r) * e,
                i = 2 * r - n;
            return new A(I(t >= 240 ? t - 240 : t + 120, i, n), I(t, i, n), I(t < 120 ? t + 240 : t - 120, i, n), this.opacity)
        },
        displayable: function() {
            return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
        },
        formatHsl: function() {
            var t = this.opacity;
            return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "hsl(" : "hsla(") + (this.h || 0) + ", " + 100 * (this.s || 0) + "%, " + 100 * (this.l || 0) + "%" + (1 === t ? ")" : ", " + t + ")")
        }
    }))
})), n.register("6gDt5", (function(t, r) {
    function n(t, e, r) {
        t.prototype = e.prototype = r, r.constructor = t
    }

    function i(t, e) {
        var r = Object.create(t.prototype);
        for (var n in e) r[n] = e[n];
        return r
    }
    e(t.exports, "default", (function() {
        return n
    })), e(t.exports, "extend", (function() {
        return i
    }))
})), n.register("dIgyP", (function(t, r) {
    e(t.exports, "default", (function() {
        return c
    }));
    var i = n("hzLFB"),
        o = n("dn959"),
        a = n("9xOXj"),
        u = n("jw8k9"),
        c = function t(e) {
            var r = (0, u.gamma)(e);

            function n(t, e) {
                var n = r((t = (0, i.rgb)(t)).r, (e = (0, i.rgb)(e)).r),
                    o = r(t.g, e.g),
                    a = r(t.b, e.b),
                    c = (0, u.default)(t.opacity, e.opacity);
                return function(e) {
                    return t.r = n(e), t.g = o(e), t.b = a(e), t.opacity = c(e), t + ""
                }
            }
            return n.gamma = t, n
        }(1);

    function s(t) {
        return function(e) {
            var r, n, o = e.length,
                a = new Array(o),
                u = new Array(o),
                c = new Array(o);
            for (r = 0; r < o; ++r) n = (0, i.rgb)(e[r]), a[r] = n.r || 0, u[r] = n.g || 0, c[r] = n.b || 0;
            return a = t(a), u = t(u), c = t(c), n.opacity = 1,
                function(t) {
                    return n.r = a(t), n.g = u(t), n.b = c(t), n + ""
                }
        }
    }
    s(o.default), s(a.default)
})), n.register("dn959", (function(t, r) {
    function n(t, e, r, n, i) {
        var o = t * t,
            a = o * t;
        return ((1 - 3 * t + 3 * o - a) * e + (4 - 6 * o + 3 * a) * r + (1 + 3 * t + 3 * o - 3 * a) * n + a * i) / 6
    }

    function i(t) {
        var e = t.length - 1;
        return function(r) {
            var i = r <= 0 ? r = 0 : r >= 1 ? (r = 1, e - 1) : Math.floor(r * e),
                o = t[i],
                a = t[i + 1],
                u = i > 0 ? t[i - 1] : 2 * o - a,
                c = i < e - 1 ? t[i + 2] : 2 * a - o;
            return n((r - i / e) * e, u, o, a, c)
        }
    }
    e(t.exports, "basis", (function() {
        return n
    })), e(t.exports, "default", (function() {
        return i
    }))
})), n.register("9xOXj", (function(t, r) {
    e(t.exports, "default", (function() {
        return o
    }));
    var i = n("dn959");

    function o(t) {
        var e = t.length;
        return function(r) {
            var n = Math.floor(((r %= 1) < 0 ? ++r : r) * e),
                o = t[(n + e - 1) % e],
                a = t[n % e],
                u = t[(n + 1) % e],
                c = t[(n + 2) % e];
            return (0, i.basis)((r - n / e) * e, o, a, u, c)
        }
    }
})), n.register("jw8k9", (function(t, r) {
    e(t.exports, "gamma", (function() {
        return a
    })), e(t.exports, "default", (function() {
        return u
    }));
    var i = n("eITwU");

    function o(t, e) {
        return function(r) {
            return t + r * e
        }
    }

    function a(t) {
        return 1 == (t = +t) ? u : function(e, r) {
            return r - e ? function(t, e, r) {
                return t = Math.pow(t, r), e = Math.pow(e, r) - t, r = 1 / r,
                    function(n) {
                        return Math.pow(t + n * e, r)
                    }
            }(e, r, t) : (0, i.default)(isNaN(e) ? r : e)
        }
    }

    function u(t, e) {
        var r = e - t;
        return r ? o(t, r) : (0, i.default)(isNaN(t) ? e : t)
    }
})), n.register("eITwU", (function(t, r) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = t => () => t
})), n.register("8lLY8", (function(t, r) {
    e(t.exports, "genericArray", (function() {
        return o
    }));
    var i = n("cUybY");
    n("j4MtO");

    function o(t, e) {
        var r, n = e ? e.length : 0,
            o = t ? Math.min(n, t.length) : 0,
            a = new Array(o),
            u = new Array(n);
        for (r = 0; r < o; ++r) a[r] = (0, i.default)(t[r], e[r]);
        for (; r < n; ++r) u[r] = e[r];
        return function(t) {
            for (r = 0; r < o; ++r) u[r] = a[r](t);
            return u
        }
    }
})), n.register("j4MtO", (function(t, r) {
    function n(t, e) {
        e || (e = []);
        var r, n = t ? Math.min(e.length, t.length) : 0,
            i = e.slice();
        return function(o) {
            for (r = 0; r < n; ++r) i[r] = t[r] * (1 - o) + e[r] * o;
            return i
        }
    }

    function i(t) {
        return ArrayBuffer.isView(t) && !(t instanceof DataView)
    }
    e(t.exports, "default", (function() {
        return n
    })), e(t.exports, "isNumberArray", (function() {
        return i
    }))
})), n.register("at5KO", (function(t, r) {
    function n(t, e) {
        var r = new Date;
        return t = +t, e = +e,
            function(n) {
                return r.setTime(t * (1 - n) + e * n), r
            }
    }
    e(t.exports, "default", (function() {
        return n
    }))
})), n.register("uclUe", (function(t, r) {
    function n(t, e) {
        return t = +t, e = +e,
            function(r) {
                return t * (1 - r) + e * r
            }
    }
    e(t.exports, "default", (function() {
        return n
    }))
})), n.register("j7W7s", (function(t, r) {
    e(t.exports, "default", (function() {
        return o
    }));
    var i = n("cUybY");

    function o(t, e) {
        var r, n = {},
            o = {};
        for (r in null !== t && "object" == typeof t || (t = {}), null !== e && "object" == typeof e || (e = {}), e) r in t ? n[r] = (0, i.default)(t[r], e[r]) : o[r] = e[r];
        return function(t) {
            for (r in n) o[r] = n[r](t);
            return o
        }
    }
})), n.register("jPxzS", (function(t, r) {
    e(t.exports, "default", (function() {
        return u
    }));
    var i = n("uclUe"),
        o = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
        a = new RegExp(o.source, "g");

    function u(t, e) {
        var r, n, u, c = o.lastIndex = a.lastIndex = 0,
            s = -1,
            l = [],
            f = [];
        for (t += "", e += "";
            (r = o.exec(t)) && (n = a.exec(e));)(u = n.index) > c && (u = e.slice(c, u), l[s] ? l[s] += u : l[++s] = u), (r = r[0]) === (n = n[0]) ? l[s] ? l[s] += n : l[++s] = n : (l[++s] = null, f.push({
            i: s,
            x: (0, i.default)(r, n)
        })), c = a.lastIndex;
        return c < e.length && (u = e.slice(c), l[s] ? l[s] += u : l[++s] = u), l.length < 2 ? f[0] ? function(t) {
            return function(e) {
                return t(e) + ""
            }
        }(f[0].x) : function(t) {
            return function() {
                return t
            }
        }(e) : (e = f.length, function(t) {
            for (var r, n = 0; n < e; ++n) l[(r = f[n]).i] = r.x(t);
            return l.join("")
        })
    }
})), n.register("47yGB", (function(t, r) {
    function n(t, e) {
        return t = +t, e = +e,
            function(r) {
                return Math.round(t * (1 - r) + e * r)
            }
    }
    e(t.exports, "default", (function() {
        return n
    }))
})), n.register("hResG", (function(t, r) {
    function n(t) {
        return function() {
            return t
        }
    }
    e(t.exports, "default", (function() {
        return n
    }))
})), n.register("l5lFh", (function(t, r) {
    function n(t) {
        return +t
    }
    e(t.exports, "default", (function() {
        return n
    }))
})), n.register("3DHkL", (function(t, r) {
    e(t.exports, "default", (function() {
        return l
    }));
    var i = n("lE8ib"),
        o = n("h3frH"),
        a = n("3qiQE"),
        u = n("bPnT3"),
        c = n("kPS4M"),
        s = n("7yUCI");

    function l(t, e, r, n) {
        var l, f = (0, i.tickStep)(t, e, r);
        switch ((n = (0, a.default)(null == n ? ",f" : n)).type) {
            case "s":
                var p = Math.max(Math.abs(t), Math.abs(e));
                return null != n.precision || isNaN(l = (0, c.default)(f, p)) || (n.precision = l), (0, o.formatPrefix)(n, p);
            case "":
            case "e":
            case "g":
            case "p":
            case "r":
                null != n.precision || isNaN(l = (0, s.default)(f, Math.max(Math.abs(t), Math.abs(e)))) || (n.precision = l - ("e" === n.type));
                break;
            case "f":
            case "%":
                null != n.precision || isNaN(l = (0, u.default)(f)) || (n.precision = l - 2 * ("%" === n.type))
        }
        return (0, o.format)(n)
    }
})), n.register("h3frH", (function(t, r) {
    e(t.exports, "format", (function() {
        return o
    })), e(t.exports, "formatPrefix", (function() {
        return a
    }));
    var i, o, a, u, c = n("cE9G5");
    u = {
        thousands: ",",
        grouping: [3],
        currency: ["$", ""]
    }, i = (0, c.default)(u), o = i.format, a = i.formatPrefix
})), n.register("cE9G5", (function(t, r) {
    e(t.exports, "default", (function() {
        return d
    }));
    var i = n("78LYh"),
        o = n("kCkSI"),
        a = n("bHvu1"),
        u = n("3qiQE"),
        c = n("i2eCw"),
        s = n("aL5fj"),
        l = n("lsMgb"),
        f = n("aRgRU"),
        p = Array.prototype.map,
        h = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];

    function d(t) {
        var e = void 0 === t.grouping || void 0 === t.thousands ? f.default : (0, o.default)(p.call(t.grouping, Number), t.thousands + ""),
            r = void 0 === t.currency ? "" : t.currency[0] + "",
            n = void 0 === t.currency ? "" : t.currency[1] + "",
            d = void 0 === t.decimal ? "." : t.decimal + "",
            y = void 0 === t.numerals ? f.default : (0, a.default)(p.call(t.numerals, String)),
            g = void 0 === t.percent ? "%" : t.percent + "",
            v = void 0 === t.minus ? "−" : t.minus + "",
            m = void 0 === t.nan ? "NaN" : t.nan + "";

        function b(t) {
            var i = (t = (0, u.default)(t)).fill,
                o = t.align,
                a = t.sign,
                f = t.symbol,
                p = t.zero,
                b = t.width,
                x = t.comma,
                w = t.precision,
                O = t.trim,
                j = t.type;
            "n" === j ? (x = !0, j = "g") : s.default[j] || (void 0 === w && (w = 12), O = !0, j = "g"), (p || "0" === i && "=" === o) && (p = !0, i = "0", o = "=");
            var _ = "$" === f ? r : "#" === f && /[boxX]/.test(j) ? "0" + j.toLowerCase() : "",
                S = "$" === f ? n : /[%p]/.test(j) ? g : "",
                A = s.default[j],
                k = /[defgprs%]/.test(j);

            function E(t) {
                var r, n, u, s = _,
                    f = S;
                if ("c" === j) f = A(t) + f, t = "";
                else {
                    var g = (t = +t) < 0 || 1 / t < 0;
                    if (t = isNaN(t) ? m : A(Math.abs(t), w), O && (t = (0, c.default)(t)), g && 0 == +t && "+" !== a && (g = !1), s = (g ? "(" === a ? a : v : "-" === a || "(" === a ? "" : a) + s, f = ("s" === j ? h[8 + l.prefixExponent / 3] : "") + f + (g && "(" === a ? ")" : ""), k)
                        for (r = -1, n = t.length; ++r < n;)
                            if (48 > (u = t.charCodeAt(r)) || u > 57) {
                                f = (46 === u ? d + t.slice(r + 1) : t.slice(r)) + f, t = t.slice(0, r);
                                break
                            }
                }
                x && !p && (t = e(t, 1 / 0));
                var E = s.length + t.length + f.length,
                    M = E < b ? new Array(b - E + 1).join(i) : "";
                switch (x && p && (t = e(M + t, M.length ? b - f.length : 1 / 0), M = ""), o) {
                    case "<":
                        t = s + t + f + M;
                        break;
                    case "=":
                        t = s + M + t + f;
                        break;
                    case "^":
                        t = M.slice(0, E = M.length >> 1) + s + t + f + M.slice(E);
                        break;
                    default:
                        t = M + s + t + f
                }
                return y(t)
            }
            return w = void 0 === w ? 6 : /[gprs]/.test(j) ? Math.max(1, Math.min(21, w)) : Math.max(0, Math.min(20, w)), E.toString = function() {
                return t + ""
            }, E
        }
        return {
            format: b,
            formatPrefix: function(t, e) {
                var r = b(((t = (0, u.default)(t)).type = "f", t)),
                    n = 3 * Math.max(-8, Math.min(8, Math.floor((0, i.default)(e) / 3))),
                    o = Math.pow(10, -n),
                    a = h[8 + n / 3];
                return function(t) {
                    return r(o * t) + a
                }
            }
        }
    }
})), n.register("78LYh", (function(t, r) {
    e(t.exports, "default", (function() {
        return o
    }));
    var i = n("3Kq9a");

    function o(t) {
        return (t = (0, i.formatDecimalParts)(Math.abs(t))) ? t[1] : NaN
    }
})), n.register("3Kq9a", (function(t, r) {
    function n(t) {
        return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10)
    }

    function i(t, e) {
        if ((r = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0) return null;
        var r, n = t.slice(0, r);
        return [n.length > 1 ? n[0] + n.slice(2) : n, +t.slice(r + 1)]
    }
    e(t.exports, "default", (function() {
        return n
    })), e(t.exports, "formatDecimalParts", (function() {
        return i
    }))
})), n.register("kCkSI", (function(t, r) {
    function n(t, e) {
        return function(r, n) {
            for (var i = r.length, o = [], a = 0, u = t[0], c = 0; i > 0 && u > 0 && (c + u + 1 > n && (u = Math.max(1, n - c)), o.push(r.substring(i -= u, i + u)), !((c += u + 1) > n));) u = t[a = (a + 1) % t.length];
            return o.reverse().join(e)
        }
    }
    e(t.exports, "default", (function() {
        return n
    }))
})), n.register("bHvu1", (function(t, r) {
    function n(t) {
        return function(e) {
            return e.replace(/[0-9]/g, (function(e) {
                return t[+e]
            }))
        }
    }
    e(t.exports, "default", (function() {
        return n
    }))
})), n.register("3qiQE", (function(t, r) {
    e(t.exports, "default", (function() {
        return i
    }));
    var n = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

    function i(t) {
        if (!(e = n.exec(t))) throw new Error("invalid format: " + t);
        var e;
        return new o({
            fill: e[1],
            align: e[2],
            sign: e[3],
            symbol: e[4],
            zero: e[5],
            width: e[6],
            comma: e[7],
            precision: e[8] && e[8].slice(1),
            trim: e[9],
            type: e[10]
        })
    }

    function o(t) {
        this.fill = void 0 === t.fill ? " " : t.fill + "", this.align = void 0 === t.align ? ">" : t.align + "", this.sign = void 0 === t.sign ? "-" : t.sign + "", this.symbol = void 0 === t.symbol ? "" : t.symbol + "", this.zero = !!t.zero, this.width = void 0 === t.width ? void 0 : +t.width, this.comma = !!t.comma, this.precision = void 0 === t.precision ? void 0 : +t.precision, this.trim = !!t.trim, this.type = void 0 === t.type ? "" : t.type + ""
    }
    i.prototype = o.prototype, o.prototype.toString = function() {
        return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (void 0 === this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type
    }
})), n.register("i2eCw", (function(t, r) {
    function n(t) {
        t: for (var e, r = t.length, n = 1, i = -1; n < r; ++n) switch (t[n]) {
            case ".":
                i = e = n;
                break;
            case "0":
                0 === i && (i = n), e = n;
                break;
            default:
                if (!+t[n]) break t;
                i > 0 && (i = 0)
        }
        return i > 0 ? t.slice(0, i) + t.slice(e + 1) : t
    }
    e(t.exports, "default", (function() {
        return n
    }))
})), n.register("aL5fj", (function(t, r) {
    e(t.exports, "default", (function() {
        return u
    }));
    var i = n("3Kq9a"),
        o = n("lsMgb"),
        a = n("9pO76"),
        u = {
            "%": (t, e) => (100 * t).toFixed(e),
            b: t => Math.round(t).toString(2),
            c: t => t + "",
            d: i.default,
            e: (t, e) => t.toExponential(e),
            f: (t, e) => t.toFixed(e),
            g: (t, e) => t.toPrecision(e),
            o: t => Math.round(t).toString(8),
            p: (t, e) => (0, a.default)(100 * t, e),
            r: a.default,
            s: o.default,
            X: t => Math.round(t).toString(16).toUpperCase(),
            x: t => Math.round(t).toString(16)
        }
})), n.register("lsMgb", (function(t, r) {
    e(t.exports, "prefixExponent", (function() {
        return i
    })), e(t.exports, "default", (function() {
        return a
    }));
    var i, o = n("3Kq9a");

    function a(t, e) {
        var r = (0, o.formatDecimalParts)(t, e);
        if (!r) return t + "";
        var n = r[0],
            a = r[1],
            u = a - (i = 3 * Math.max(-8, Math.min(8, Math.floor(a / 3)))) + 1,
            c = n.length;
        return u === c ? n : u > c ? n + new Array(u - c + 1).join("0") : u > 0 ? n.slice(0, u) + "." + n.slice(u) : "0." + new Array(1 - u).join("0") + (0, o.formatDecimalParts)(t, Math.max(0, e + u - 1))[0]
    }
})), n.register("9pO76", (function(t, r) {
    e(t.exports, "default", (function() {
        return o
    }));
    var i = n("3Kq9a");

    function o(t, e) {
        var r = (0, i.formatDecimalParts)(t, e);
        if (!r) return t + "";
        var n = r[0],
            o = r[1];
        return o < 0 ? "0." + new Array(-o).join("0") + n : n.length > o + 1 ? n.slice(0, o + 1) + "." + n.slice(o + 1) : n + new Array(o - n.length + 2).join("0")
    }
})), n.register("aRgRU", (function(t, r) {
    function n(t) {
        return t
    }
    e(t.exports, "default", (function() {
        return n
    }))
})), n.register("bPnT3", (function(t, r) {
    e(t.exports, "default", (function() {
        return o
    }));
    var i = n("78LYh");

    function o(t) {
        return Math.max(0, -(0, i.default)(Math.abs(t)))
    }
})), n.register("kPS4M", (function(t, r) {
    e(t.exports, "default", (function() {
        return o
    }));
    var i = n("78LYh");

    function o(t, e) {
        return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor((0, i.default)(e) / 3))) - (0, i.default)(Math.abs(t)))
    }
})), n.register("7yUCI", (function(t, r) {
    e(t.exports, "default", (function() {
        return o
    }));
    var i = n("78LYh");

    function o(t, e) {
        return t = Math.abs(t), e = Math.abs(e) - t, Math.max(0, (0, i.default)(e) - (0, i.default)(t)) + 1
    }
})), n.register("eF6vx", (function(t, r) {
    e(t.exports, "loggish", (function() {
        return y
    })), e(t.exports, "default", (function() {
        return g
    }));
    var i = n("lE8ib"),
        o = n("h3frH"),
        a = n("j1hz6"),
        u = n("5OJKq"),
        c = n("cw5Ml");

    function s(t) {
        return Math.log(t)
    }

    function l(t) {
        return Math.exp(t)
    }

    function f(t) {
        return -Math.log(-t)
    }

    function p(t) {
        return -Math.exp(-t)
    }

    function h(t) {
        return isFinite(t) ? +("1e" + t) : t < 0 ? 0 : t
    }

    function d(t) {
        return function(e) {
            return -t(-e)
        }
    }

    function y(t) {
        var e, r, n = t(s, l),
            u = n.domain,
            c = 10;

        function y() {
            return e = function(t) {
                return t === Math.E ? Math.log : 10 === t && Math.log10 || 2 === t && Math.log2 || (t = Math.log(t), function(e) {
                    return Math.log(e) / t
                })
            }(c), r = function(t) {
                return 10 === t ? h : t === Math.E ? Math.exp : function(e) {
                    return Math.pow(t, e)
                }
            }(c), u()[0] < 0 ? (e = d(e), r = d(r), t(f, p)) : t(s, l), n
        }
        return n.base = function(t) {
            return arguments.length ? (c = +t, y()) : c
        }, n.domain = function(t) {
            return arguments.length ? (u(t), y()) : u()
        }, n.ticks = function(t) {
            var n, o = u(),
                a = o[0],
                s = o[o.length - 1];
            (n = s < a) && (h = a, a = s, s = h);
            var l, f, p, h = e(a),
                d = e(s),
                y = null == t ? 10 : +t,
                g = [];
            if (!(c % 1) && d - h < y) {
                if (h = Math.floor(h), d = Math.ceil(d), a > 0) {
                    for (; h <= d; ++h)
                        for (f = 1, l = r(h); f < c; ++f)
                            if (!((p = l * f) < a)) {
                                if (p > s) break;
                                g.push(p)
                            }
                } else
                    for (; h <= d; ++h)
                        for (f = c - 1, l = r(h); f >= 1; --f)
                            if (!((p = l * f) < a)) {
                                if (p > s) break;
                                g.push(p)
                            } 2 * g.length < y && (g = (0, i.default)(a, s, y))
            } else g = (0, i.default)(h, d, Math.min(d - h, y)).map(r);
            return n ? g.reverse() : g
        }, n.tickFormat = function(t, i) {
            if (null == i && (i = 10 === c ? ".0e" : ","), "function" != typeof i && (i = (0, o.format)(i)), t === 1 / 0) return i;
            null == t && (t = 10);
            var a = Math.max(1, c * t / n.ticks().length);
            return function(t) {
                var n = t / r(Math.round(e(t)));
                return n * c < c - .5 && (n *= c), n <= a ? i(t) : ""
            }
        }, n.nice = function() {
            return u((0, a.default)(u(), {
                floor: function(t) {
                    return r(Math.floor(e(t)))
                },
                ceil: function(t) {
                    return r(Math.ceil(e(t)))
                }
            }))
        }, n
    }

    function g() {
        var t = y((0, u.transformer)()).domain([1, 10]);
        return t.copy = function() {
            return (0, u.copy)(t, g()).base(t.base())
        }, c.initRange.apply(t, arguments), t
    }
})), n.register("j1hz6", (function(t, r) {
    function n(t, e) {
        var r, n = 0,
            i = (t = t.slice()).length - 1,
            o = t[n],
            a = t[i];
        return a < o && (r = n, n = i, i = r, r = o, o = a, a = r), t[n] = e.floor(o), t[i] = e.ceil(a), t
    }
    e(t.exports, "default", (function() {
        return n
    }))
})), n.register("i73Pe", (function(t, r) {
    e(t.exports, "symlogish", (function() {
        return s
    })), e(t.exports, "default", (function() {
        return l
    }));
    var i = n("hpzFq"),
        o = n("5OJKq"),
        a = n("cw5Ml");

    function u(t) {
        return function(e) {
            return Math.sign(e) * Math.log1p(Math.abs(e / t))
        }
    }

    function c(t) {
        return function(e) {
            return Math.sign(e) * Math.expm1(Math.abs(e)) * t
        }
    }

    function s(t) {
        var e = 1,
            r = t(u(e), c(e));
        return r.constant = function(r) {
            return arguments.length ? t(u(e = +r), c(e)) : e
        }, (0, i.linearish)(r)
    }

    function l() {
        var t = s((0, o.transformer)());
        return t.copy = function() {
            return (0, o.copy)(t, l()).constant(t.constant())
        }, a.initRange.apply(t, arguments)
    }
})), n.register("eATyM", (function(t, r) {
    e(t.exports, "powish", (function() {
        return l
    })), e(t.exports, "default", (function() {
        return f
    })), e(t.exports, "sqrt", (function() {
        return p
    }));
    var i = n("hpzFq"),
        o = n("5OJKq"),
        a = n("cw5Ml");

    function u(t) {
        return function(e) {
            return e < 0 ? -Math.pow(-e, t) : Math.pow(e, t)
        }
    }

    function c(t) {
        return t < 0 ? -Math.sqrt(-t) : Math.sqrt(t)
    }

    function s(t) {
        return t < 0 ? -t * t : t * t
    }

    function l(t) {
        var e = t(o.identity, o.identity),
            r = 1;

        function n() {
            return 1 === r ? t(o.identity, o.identity) : .5 === r ? t(c, s) : t(u(r), u(1 / r))
        }
        return e.exponent = function(t) {
            return arguments.length ? (r = +t, n()) : r
        }, (0, i.linearish)(e)
    }

    function f() {
        var t = l((0, o.transformer)());
        return t.copy = function() {
            return (0, o.copy)(t, f()).exponent(t.exponent())
        }, a.initRange.apply(t, arguments), t
    }

    function p() {
        return f.apply(null, arguments).exponent(.5)
    }
})), n.register("ldOY1", (function(t, r) {
    e(t.exports, "default", (function() {
        return l
    }));
    var i = n("5OJKq"),
        o = n("cw5Ml"),
        a = n("hpzFq"),
        u = n("l5lFh");

    function c(t) {
        return Math.sign(t) * t * t
    }

    function s(t) {
        return Math.sign(t) * Math.sqrt(Math.abs(t))
    }

    function l() {
        var t, e = (0, i.default)(),
            r = [0, 1],
            n = !1;

        function f(r) {
            var i = s(e(r));
            return isNaN(i) ? t : n ? Math.round(i) : i
        }
        return f.invert = function(t) {
            return e.invert(c(t))
        }, f.domain = function(t) {
            return arguments.length ? (e.domain(t), f) : e.domain()
        }, f.range = function(t) {
            return arguments.length ? (e.range((r = Array.from(t, u.default)).map(c)), f) : r.slice()
        }, f.rangeRound = function(t) {
            return f.range(t).round(!0)
        }, f.round = function(t) {
            return arguments.length ? (n = !!t, f) : n
        }, f.clamp = function(t) {
            return arguments.length ? (e.clamp(t), f) : e.clamp()
        }, f.unknown = function(e) {
            return arguments.length ? (t = e, f) : t
        }, f.copy = function() {
            return l(e.domain(), r).round(n).clamp(e.clamp()).unknown(t)
        }, o.initRange.apply(f, arguments), (0, a.linearish)(f)
    }
})), n.register("7V5P4", (function(t, r) {
    e(t.exports, "default", (function() {
        return c
    }));
    var i = n("3VwW0"),
        o = n("2SUYA"),
        a = n("5YG9W"),
        u = n("cw5Ml");

    function c() {
        var t, e = [],
            r = [],
            n = [];

        function s() {
            var t = 0,
                i = Math.max(1, r.length);
            for (n = new Array(i - 1); ++t < i;) n[t - 1] = (0, a.quantileSorted)(e, t / i);
            return l
        }

        function l(e) {
            return null == e || isNaN(e = +e) ? t : r[(0, o.default)(n, e)]
        }
        return l.invertExtent = function(t) {
            var i = r.indexOf(t);
            return i < 0 ? [NaN, NaN] : [i > 0 ? n[i - 1] : e[0], i < n.length ? n[i] : e[e.length - 1]]
        }, l.domain = function(t) {
            if (!arguments.length) return e.slice();
            e = [];
            for (let r of t) null == r || isNaN(r = +r) || e.push(r);
            return e.sort(i.default), s()
        }, l.range = function(t) {
            return arguments.length ? (r = Array.from(t), s()) : r.slice()
        }, l.unknown = function(e) {
            return arguments.length ? (t = e, l) : t
        }, l.quantiles = function() {
            return n.slice()
        }, l.copy = function() {
            return c().domain(e).range(r).unknown(t)
        }, u.initRange.apply(l, arguments)
    }
})), n.register("5YG9W", (function(t, r) {
    e(t.exports, "default", (function() {
        return c
    })), e(t.exports, "quantileSorted", (function() {
        return s
    }));
    var i = n("967QE"),
        o = n("5RjKO"),
        a = n("2boah"),
        u = n("aOgHy");

    function c(t, e, r) {
        if (n = (t = Float64Array.from((0, u.numbers)(t, r))).length) {
            if ((e = +e) <= 0 || n < 2) return (0, o.default)(t);
            if (e >= 1) return (0, i.default)(t);
            var n, c = (n - 1) * e,
                s = Math.floor(c),
                l = (0, i.default)((0, a.default)(t, s).subarray(0, s + 1));
            return l + ((0, o.default)(t.subarray(s + 1)) - l) * (c - s)
        }
    }

    function s(t, e, r = u.default) {
        if (n = t.length) {
            if ((e = +e) <= 0 || n < 2) return +r(t[0], 0, t);
            if (e >= 1) return +r(t[n - 1], n - 1, t);
            var n, i = (n - 1) * e,
                o = Math.floor(i),
                a = +r(t[o], o, t);
            return a + (+r(t[o + 1], o + 1, t) - a) * (i - o)
        }
    }
})), n.register("967QE", (function(t, r) {
    function n(t, e) {
        let r;
        if (void 0 === e)
            for (const e of t) null != e && (r < e || void 0 === r && e >= e) && (r = e);
        else {
            let n = -1;
            for (let i of t) null != (i = e(i, ++n, t)) && (r < i || void 0 === r && i >= i) && (r = i)
        }
        return r
    }
    e(t.exports, "default", (function() {
        return n
    }))
})), n.register("5RjKO", (function(t, r) {
    function n(t, e) {
        let r;
        if (void 0 === e)
            for (const e of t) null != e && (r > e || void 0 === r && e >= e) && (r = e);
        else {
            let n = -1;
            for (let i of t) null != (i = e(i, ++n, t)) && (r > i || void 0 === r && i >= i) && (r = i)
        }
        return r
    }
    e(t.exports, "default", (function() {
        return n
    }))
})), n.register("2boah", (function(t, r) {
    e(t.exports, "default", (function() {
        return o
    }));
    var i = n("3VwW0");

    function o(t, e, r = 0, n = t.length - 1, u = i.default) {
        for (; n > r;) {
            if (n - r > 600) {
                const i = n - r + 1,
                    a = e - r + 1,
                    c = Math.log(i),
                    s = .5 * Math.exp(2 * c / 3),
                    l = .5 * Math.sqrt(c * s * (i - s) / i) * (a - i / 2 < 0 ? -1 : 1);
                o(t, e, Math.max(r, Math.floor(e - a * s / i + l)), Math.min(n, Math.floor(e + (i - a) * s / i + l)), u)
            }
            const i = t[e];
            let c = r,
                s = n;
            for (a(t, r, e), u(t[n], i) > 0 && a(t, r, n); c < s;) {
                for (a(t, c, s), ++c, --s; u(t[c], i) < 0;) ++c;
                for (; u(t[s], i) > 0;) --s
            }
            0 === u(t[r], i) ? a(t, r, s) : (++s, a(t, s, n)), s <= e && (r = s + 1), e <= s && (n = s - 1)
        }
        return t
    }

    function a(t, e, r) {
        const n = t[e];
        t[e] = t[r], t[r] = n
    }
})), n.register("yzz5q", (function(t, r) {
    e(t.exports, "default", (function() {
        return u
    }));
    var i = n("2SUYA"),
        o = n("hpzFq"),
        a = n("cw5Ml");

    function u() {
        var t, e = 0,
            r = 1,
            n = 1,
            c = [.5],
            s = [0, 1];

        function l(e) {
            return null != e && e <= e ? s[(0, i.default)(c, e, 0, n)] : t
        }

        function f() {
            var t = -1;
            for (c = new Array(n); ++t < n;) c[t] = ((t + 1) * r - (t - n) * e) / (n + 1);
            return l
        }
        return l.domain = function(t) {
            return arguments.length ? ([e, r] = t, e = +e, r = +r, f()) : [e, r]
        }, l.range = function(t) {
            return arguments.length ? (n = (s = Array.from(t)).length - 1, f()) : s.slice()
        }, l.invertExtent = function(t) {
            var i = s.indexOf(t);
            return i < 0 ? [NaN, NaN] : i < 1 ? [e, c[0]] : i >= n ? [c[n - 1], r] : [c[i - 1], c[i]]
        }, l.unknown = function(e) {
            return arguments.length ? (t = e, l) : l
        }, l.thresholds = function() {
            return c.slice()
        }, l.copy = function() {
            return u().domain([e, r]).range(s).unknown(t)
        }, a.initRange.apply((0, o.linearish)(l), arguments)
    }
})), n.register("ApfGm", (function(t, r) {
    e(t.exports, "default", (function() {
        return a
    }));
    var i = n("2SUYA"),
        o = n("cw5Ml");

    function a() {
        var t, e = [.5],
            r = [0, 1],
            n = 1;

        function u(o) {
            return null != o && o <= o ? r[(0, i.default)(e, o, 0, n)] : t
        }
        return u.domain = function(t) {
            return arguments.length ? (e = Array.from(t), n = Math.min(e.length, r.length - 1), u) : e.slice()
        }, u.range = function(t) {
            return arguments.length ? (r = Array.from(t), n = Math.min(e.length, r.length - 1), u) : r.slice()
        }, u.invertExtent = function(t) {
            var n = r.indexOf(t);
            return [e[n - 1], e[n]]
        }, u.unknown = function(e) {
            return arguments.length ? (t = e, u) : t
        }, u.copy = function() {
            return a().domain(e).range(r).unknown(t)
        }, o.initRange.apply(u, arguments)
    }
})), n.register("7zhXA", (function(t, r) {
    e(t.exports, "calendar", (function() {
        return m
    })), e(t.exports, "default", (function() {
        return b
    }));
    var i = n("6iKxt"),
        o = n("6nsYC"),
        a = n("8ABvk"),
        u = n("gh1xI"),
        c = n("kganr"),
        s = n("jBtiJ"),
        l = n("h73zI"),
        f = n("4UHfo"),
        p = n("eSzJE"),
        h = n("5OJKq"),
        d = n("cw5Ml"),
        y = n("j1hz6");

    function g(t) {
        return new Date(t)
    }

    function v(t) {
        return t instanceof Date ? +t : +new Date(+t)
    }

    function m(t, e, r, n, i, o, a, u, c, s) {
        var l = (0, h.default)(),
            f = l.invert,
            p = l.domain,
            d = s(".%L"),
            b = s(":%S"),
            x = s("%I:%M"),
            w = s("%I %p"),
            O = s("%a %d"),
            j = s("%b %d"),
            _ = s("%B"),
            S = s("%Y");

        function A(t) {
            return (c(t) < t ? d : u(t) < t ? b : a(t) < t ? x : o(t) < t ? w : n(t) < t ? i(t) < t ? O : j : r(t) < t ? _ : S)(t)
        }
        return l.invert = function(t) {
            return new Date(f(t))
        }, l.domain = function(t) {
            return arguments.length ? p(Array.from(t, v)) : p().map(g)
        }, l.ticks = function(e) {
            var r = p();
            return t(r[0], r[r.length - 1], null == e ? 10 : e)
        }, l.tickFormat = function(t, e) {
            return null == e ? A : s(e)
        }, l.nice = function(t) {
            var r = p();
            return t && "function" == typeof t.range || (t = e(r[0], r[r.length - 1], null == t ? 10 : t)), t ? p((0, y.default)(r, t)) : l
        }, l.copy = function() {
            return (0, h.copy)(l, m(t, e, r, n, i, o, a, u, c, s))
        }, l
    }

    function b() {
        return d.initRange.apply(m(s.timeTicks, s.timeTickInterval, f.default, u.default, l.sunday, i.default, o.default, a.default, c.default, p.timeFormat).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments)
    }
})), n.register("6iKxt", (function(t, r) {
    e(t.exports, "default", (function() {
        return u
    }));
    var i = n("cwdUf"),
        o = n("4QyOE"),
        a = (0, i.default)((t => t.setHours(0, 0, 0, 0)), ((t, e) => t.setDate(t.getDate() + e)), ((t, e) => (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * o.durationMinute) / o.durationDay), (t => t.getDate() - 1)),
        u = a;
    a.range
})), n.register("cwdUf", (function(t, r) {
    e(t.exports, "default", (function() {
        return o
    }));
    var n = new Date,
        i = new Date;

    function o(t, e, r, a) {
        function u(e) {
            return t(e = 0 === arguments.length ? new Date : new Date(+e)), e
        }
        return u.floor = function(e) {
            return t(e = new Date(+e)), e
        }, u.ceil = function(r) {
            return t(r = new Date(r - 1)), e(r, 1), t(r), r
        }, u.round = function(t) {
            var e = u(t),
                r = u.ceil(t);
            return t - e < r - t ? e : r
        }, u.offset = function(t, r) {
            return e(t = new Date(+t), null == r ? 1 : Math.floor(r)), t
        }, u.range = function(r, n, i) {
            var o, a = [];
            if (r = u.ceil(r), i = null == i ? 1 : Math.floor(i), !(r < n && i > 0)) return a;
            do {
                a.push(o = new Date(+r)), e(r, i), t(r)
            } while (o < r && r < n);
            return a
        }, u.filter = function(r) {
            return o((function(e) {
                if (e >= e)
                    for (; t(e), !r(e);) e.setTime(e - 1)
            }), (function(t, n) {
                if (t >= t)
                    if (n < 0)
                        for (; ++n <= 0;)
                            for (; e(t, -1), !r(t););
                    else
                        for (; --n >= 0;)
                            for (; e(t, 1), !r(t););
            }))
        }, r && (u.count = function(e, o) {
            return n.setTime(+e), i.setTime(+o), t(n), t(i), Math.floor(r(n, i))
        }, u.every = function(t) {
            return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? u.filter(a ? function(e) {
                return a(e) % t == 0
            } : function(e) {
                return u.count(0, e) % t == 0
            }) : u : null
        }), u
    }
})), n.register("4QyOE", (function(t, r) {
    e(t.exports, "durationSecond", (function() {
        return n
    })), e(t.exports, "durationMinute", (function() {
        return i
    })), e(t.exports, "durationHour", (function() {
        return o
    })), e(t.exports, "durationDay", (function() {
        return a
    })), e(t.exports, "durationWeek", (function() {
        return u
    })), e(t.exports, "durationMonth", (function() {
        return c
    })), e(t.exports, "durationYear", (function() {
        return s
    }));
    const n = 1e3,
        i = 60 * n,
        o = 60 * i,
        a = 24 * o,
        u = 7 * a,
        c = 30 * a,
        s = 365 * a
})), n.register("6nsYC", (function(t, r) {
    e(t.exports, "default", (function() {
        return u
    }));
    var i = n("cwdUf"),
        o = n("4QyOE"),
        a = (0, i.default)((function(t) {
            t.setTime(t - t.getMilliseconds() - t.getSeconds() * o.durationSecond - t.getMinutes() * o.durationMinute)
        }), (function(t, e) {
            t.setTime(+t + e * o.durationHour)
        }), (function(t, e) {
            return (e - t) / o.durationHour
        }), (function(t) {
            return t.getHours()
        })),
        u = a;
    a.range
})), n.register("8ABvk", (function(t, r) {
    e(t.exports, "default", (function() {
        return u
    }));
    var i = n("cwdUf"),
        o = n("4QyOE"),
        a = (0, i.default)((function(t) {
            t.setTime(t - t.getMilliseconds() - t.getSeconds() * o.durationSecond)
        }), (function(t, e) {
            t.setTime(+t + e * o.durationMinute)
        }), (function(t, e) {
            return (e - t) / o.durationMinute
        }), (function(t) {
            return t.getMinutes()
        })),
        u = a;
    a.range
})), n.register("gh1xI", (function(t, r) {
    e(t.exports, "default", (function() {
        return o
    }));
    var i = (0, n("cwdUf").default)((function(t) {
            t.setDate(1), t.setHours(0, 0, 0, 0)
        }), (function(t, e) {
            t.setMonth(t.getMonth() + e)
        }), (function(t, e) {
            return e.getMonth() - t.getMonth() + 12 * (e.getFullYear() - t.getFullYear())
        }), (function(t) {
            return t.getMonth()
        })),
        o = i;
    i.range
})), n.register("kganr", (function(t, r) {
    e(t.exports, "default", (function() {
        return u
    }));
    var i = n("cwdUf"),
        o = n("4QyOE"),
        a = (0, i.default)((function(t) {
            t.setTime(t - t.getMilliseconds())
        }), (function(t, e) {
            t.setTime(+t + e * o.durationSecond)
        }), (function(t, e) {
            return (e - t) / o.durationSecond
        }), (function(t) {
            return t.getUTCSeconds()
        })),
        u = a;
    a.range
})), n.register("jBtiJ", (function(t, r) {
    e(t.exports, "utcTicks", (function() {
        return O
    })), e(t.exports, "utcTickInterval", (function() {
        return j
    })), e(t.exports, "timeTicks", (function() {
        return _
    })), e(t.exports, "timeTickInterval", (function() {
        return S
    }));
    var i = n("f0AvK"),
        o = n("lE8ib"),
        a = n("4QyOE"),
        u = n("jowrN"),
        c = n("kganr"),
        s = n("8ABvk"),
        l = n("6nsYC"),
        f = n("6iKxt"),
        p = n("h73zI"),
        h = n("gh1xI"),
        d = n("4UHfo"),
        y = n("5nJ9T"),
        g = n("2HhfM"),
        v = n("8P0zv"),
        m = n("gDOIm"),
        b = n("3AmUZ"),
        x = n("6g5O7");

    function w(t, e, r, n, s, l) {
        const f = [
            [c.default, 1, a.durationSecond],
            [c.default, 5, 5 * a.durationSecond],
            [c.default, 15, 15 * a.durationSecond],
            [c.default, 30, 30 * a.durationSecond],
            [l, 1, a.durationMinute],
            [l, 5, 5 * a.durationMinute],
            [l, 15, 15 * a.durationMinute],
            [l, 30, 30 * a.durationMinute],
            [s, 1, a.durationHour],
            [s, 3, 3 * a.durationHour],
            [s, 6, 6 * a.durationHour],
            [s, 12, 12 * a.durationHour],
            [n, 1, a.durationDay],
            [n, 2, 2 * a.durationDay],
            [r, 1, a.durationWeek],
            [e, 1, a.durationMonth],
            [e, 3, 3 * a.durationMonth],
            [t, 1, a.durationYear]
        ];

        function p(e, r, n) {
            const c = Math.abs(r - e) / n,
                s = (0, i.default)((([, , t]) => t)).right(f, c);
            if (s === f.length) return t.every((0, o.tickStep)(e / a.durationYear, r / a.durationYear, n));
            if (0 === s) return u.default.every(Math.max((0, o.tickStep)(e, r, n), 1));
            const [l, p] = f[c / f[s - 1][2] < f[s][2] / c ? s - 1 : s];
            return l.every(p)
        }
        return [function(t, e, r) {
            const n = e < t;
            n && ([t, e] = [e, t]);
            const i = r && "function" == typeof r.range ? r : p(t, e, r),
                o = i ? i.range(t, +e + 1) : [];
            return n ? o.reverse() : o
        }, p]
    }
    const [O, j] = w(x.default, b.default, m.utcSunday, v.default, g.default, y.default), [_, S] = w(d.default, h.default, p.sunday, f.default, l.default, s.default)
})), n.register("jowrN", (function(t, r) {
    e(t.exports, "default", (function() {
        return a
    }));
    var i = n("cwdUf"),
        o = (0, i.default)((function() {}), (function(t, e) {
            t.setTime(+t + e)
        }), (function(t, e) {
            return e - t
        }));
    o.every = function(t) {
        return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? (0, i.default)((function(e) {
            e.setTime(Math.floor(e / t) * t)
        }), (function(e, r) {
            e.setTime(+e + r * t)
        }), (function(e, r) {
            return (r - e) / t
        })) : o : null
    };
    var a = o;
    o.range
})), n.register("h73zI", (function(t, r) {
    e(t.exports, "sunday", (function() {
        return u
    })), e(t.exports, "monday", (function() {
        return c
    })), e(t.exports, "thursday", (function() {
        return f
    }));
    var i = n("cwdUf"),
        o = n("4QyOE");

    function a(t) {
        return (0, i.default)((function(e) {
            e.setDate(e.getDate() - (e.getDay() + 7 - t) % 7), e.setHours(0, 0, 0, 0)
        }), (function(t, e) {
            t.setDate(t.getDate() + 7 * e)
        }), (function(t, e) {
            return (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * o.durationMinute) / o.durationWeek
        }))
    }
    var u = a(0),
        c = a(1),
        s = a(2),
        l = a(3),
        f = a(4),
        p = a(5),
        h = a(6);
    u.range, c.range, s.range, l.range, f.range, p.range, h.range
})), n.register("4UHfo", (function(t, r) {
    e(t.exports, "default", (function() {
        return a
    }));
    var i = n("cwdUf"),
        o = (0, i.default)((function(t) {
            t.setMonth(0, 1), t.setHours(0, 0, 0, 0)
        }), (function(t, e) {
            t.setFullYear(t.getFullYear() + e)
        }), (function(t, e) {
            return e.getFullYear() - t.getFullYear()
        }), (function(t) {
            return t.getFullYear()
        }));
    o.every = function(t) {
        return isFinite(t = Math.floor(t)) && t > 0 ? (0, i.default)((function(e) {
            e.setFullYear(Math.floor(e.getFullYear() / t) * t), e.setMonth(0, 1), e.setHours(0, 0, 0, 0)
        }), (function(e, r) {
            e.setFullYear(e.getFullYear() + r * t)
        })) : null
    };
    var a = o;
    o.range
})), n.register("5nJ9T", (function(t, r) {
    e(t.exports, "default", (function() {
        return u
    }));
    var i = n("cwdUf"),
        o = n("4QyOE"),
        a = (0, i.default)((function(t) {
            t.setUTCSeconds(0, 0)
        }), (function(t, e) {
            t.setTime(+t + e * o.durationMinute)
        }), (function(t, e) {
            return (e - t) / o.durationMinute
        }), (function(t) {
            return t.getUTCMinutes()
        })),
        u = a;
    a.range
})), n.register("2HhfM", (function(t, r) {
    e(t.exports, "default", (function() {
        return u
    }));
    var i = n("cwdUf"),
        o = n("4QyOE"),
        a = (0, i.default)((function(t) {
            t.setUTCMinutes(0, 0, 0)
        }), (function(t, e) {
            t.setTime(+t + e * o.durationHour)
        }), (function(t, e) {
            return (e - t) / o.durationHour
        }), (function(t) {
            return t.getUTCHours()
        })),
        u = a;
    a.range
})), n.register("8P0zv", (function(t, r) {
    e(t.exports, "default", (function() {
        return u
    }));
    var i = n("cwdUf"),
        o = n("4QyOE"),
        a = (0, i.default)((function(t) {
            t.setUTCHours(0, 0, 0, 0)
        }), (function(t, e) {
            t.setUTCDate(t.getUTCDate() + e)
        }), (function(t, e) {
            return (e - t) / o.durationDay
        }), (function(t) {
            return t.getUTCDate() - 1
        })),
        u = a;
    a.range
})), n.register("gDOIm", (function(t, r) {
    e(t.exports, "utcSunday", (function() {
        return u
    })), e(t.exports, "utcMonday", (function() {
        return c
    })), e(t.exports, "utcThursday", (function() {
        return f
    }));
    var i = n("cwdUf"),
        o = n("4QyOE");

    function a(t) {
        return (0, i.default)((function(e) {
            e.setUTCDate(e.getUTCDate() - (e.getUTCDay() + 7 - t) % 7), e.setUTCHours(0, 0, 0, 0)
        }), (function(t, e) {
            t.setUTCDate(t.getUTCDate() + 7 * e)
        }), (function(t, e) {
            return (e - t) / o.durationWeek
        }))
    }
    var u = a(0),
        c = a(1),
        s = a(2),
        l = a(3),
        f = a(4),
        p = a(5),
        h = a(6);
    u.range, c.range, s.range, l.range, f.range, p.range, h.range
})), n.register("3AmUZ", (function(t, r) {
    e(t.exports, "default", (function() {
        return o
    }));
    var i = (0, n("cwdUf").default)((function(t) {
            t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0)
        }), (function(t, e) {
            t.setUTCMonth(t.getUTCMonth() + e)
        }), (function(t, e) {
            return e.getUTCMonth() - t.getUTCMonth() + 12 * (e.getUTCFullYear() - t.getUTCFullYear())
        }), (function(t) {
            return t.getUTCMonth()
        })),
        o = i;
    i.range
})), n.register("6g5O7", (function(t, r) {
    e(t.exports, "default", (function() {
        return a
    }));
    var i = n("cwdUf"),
        o = (0, i.default)((function(t) {
            t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0)
        }), (function(t, e) {
            t.setUTCFullYear(t.getUTCFullYear() + e)
        }), (function(t, e) {
            return e.getUTCFullYear() - t.getUTCFullYear()
        }), (function(t) {
            return t.getUTCFullYear()
        }));
    o.every = function(t) {
        return isFinite(t = Math.floor(t)) && t > 0 ? (0, i.default)((function(e) {
            e.setUTCFullYear(Math.floor(e.getUTCFullYear() / t) * t), e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0)
        }), (function(e, r) {
            e.setUTCFullYear(e.getUTCFullYear() + r * t)
        })) : null
    };
    var a = o;
    o.range
})), n.register("eSzJE", (function(t, r) {
    e(t.exports, "timeFormat", (function() {
        return o
    })), e(t.exports, "utcFormat", (function() {
        return a
    }));
    var i, o, a, u, c = n("g98nf");
    u = {
        dateTime: "%x, %X",
        date: "%-m/%-d/%Y",
        time: "%-I:%M:%S %p",
        periods: ["AM", "PM"],
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    }, i = (0, c.default)(u), o = i.format, i.parse, a = i.utcFormat, i.utcParse
})), n.register("g98nf", (function(t, r) {
    e(t.exports, "default", (function() {
        return h
    }));
    var i = n("6iKxt"),
        o = n("h73zI"),
        a = n("4UHfo"),
        u = n("8P0zv"),
        c = n("gDOIm"),
        s = n("6g5O7");

    function l(t) {
        if (0 <= t.y && t.y < 100) {
            var e = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
            return e.setFullYear(t.y), e
        }
        return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L)
    }

    function f(t) {
        if (0 <= t.y && t.y < 100) {
            var e = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
            return e.setUTCFullYear(t.y), e
        }
        return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L))
    }

    function p(t, e, r) {
        return {
            y: t,
            m: e,
            d: r,
            H: 0,
            M: 0,
            S: 0,
            L: 0
        }
    }

    function h(t) {
        var e = t.dateTime,
            r = t.date,
            n = t.time,
            a = t.periods,
            s = t.days,
            h = t.shortDays,
            y = t.months,
            g = t.shortMonths,
            v = x(a),
            m = w(a),
            b = x(s),
            $ = w(s),
            bt = x(h),
            Ct = w(h),
            Tt = x(y),
            It = w(y),
            Nt = x(g),
            Dt = w(g),
            Rt = {
                a: function(t) {
                    return h[t.getDay()]
                },
                A: function(t) {
                    return s[t.getDay()]
                },
                b: function(t) {
                    return g[t.getMonth()]
                },
                B: function(t) {
                    return y[t.getMonth()]
                },
                c: null,
                d: q,
                e: q,
                f: Y,
                g: it,
                G: at,
                H: H,
                I: V,
                j: G,
                L: W,
                m: K,
                M: X,
                p: function(t) {
                    return a[+(t.getHours() >= 12)]
                },
                q: function(t) {
                    return 1 + ~~(t.getMonth() / 3)
                },
                Q: Mt,
                s: Pt,
                S: J,
                u: Q,
                U: Z,
                V: tt,
                w: et,
                W: rt,
                x: null,
                X: null,
                y: nt,
                Y: ot,
                Z: ut,
                "%": Et
            },
            Bt = {
                a: function(t) {
                    return h[t.getUTCDay()]
                },
                A: function(t) {
                    return s[t.getUTCDay()]
                },
                b: function(t) {
                    return g[t.getUTCMonth()]
                },
                B: function(t) {
                    return y[t.getUTCMonth()]
                },
                c: null,
                d: ct,
                e: ct,
                f: ht,
                g: _t,
                G: At,
                H: st,
                I: lt,
                j: ft,
                L: pt,
                m: dt,
                M: yt,
                p: function(t) {
                    return a[+(t.getUTCHours() >= 12)]
                },
                q: function(t) {
                    return 1 + ~~(t.getUTCMonth() / 3)
                },
                Q: Mt,
                s: Pt,
                S: gt,
                u: vt,
                U: mt,
                V: xt,
                w: wt,
                W: Ot,
                x: null,
                X: null,
                y: jt,
                Y: St,
                Z: kt,
                "%": Et
            },
            Lt = {
                a: function(t, e, r) {
                    var n = bt.exec(e.slice(r));
                    return n ? (t.w = Ct.get(n[0].toLowerCase()), r + n[0].length) : -1
                },
                A: function(t, e, r) {
                    var n = b.exec(e.slice(r));
                    return n ? (t.w = $.get(n[0].toLowerCase()), r + n[0].length) : -1
                },
                b: function(t, e, r) {
                    var n = Nt.exec(e.slice(r));
                    return n ? (t.m = Dt.get(n[0].toLowerCase()), r + n[0].length) : -1
                },
                B: function(t, e, r) {
                    var n = Tt.exec(e.slice(r));
                    return n ? (t.m = It.get(n[0].toLowerCase()), r + n[0].length) : -1
                },
                c: function(t, r, n) {
                    return Ft(t, e, r, n)
                },
                d: T,
                e: T,
                f: L,
                g: E,
                G: k,
                H: N,
                I: N,
                j: I,
                L: B,
                m: C,
                M: D,
                p: function(t, e, r) {
                    var n = v.exec(e.slice(r));
                    return n ? (t.p = m.get(n[0].toLowerCase()), r + n[0].length) : -1
                },
                q: P,
                Q: U,
                s: F,
                S: R,
                u: j,
                U: _,
                V: S,
                w: O,
                W: A,
                x: function(t, e, n) {
                    return Ft(t, r, e, n)
                },
                X: function(t, e, r) {
                    return Ft(t, n, e, r)
                },
                y: E,
                Y: k,
                Z: M,
                "%": z
            };

        function zt(t, e) {
            return function(r) {
                var n, i, o, a = [],
                    u = -1,
                    c = 0,
                    s = t.length;
                for (r instanceof Date || (r = new Date(+r)); ++u < s;) 37 === t.charCodeAt(u) && (a.push(t.slice(c, u)), null != (i = d[n = t.charAt(++u)]) ? n = t.charAt(++u) : i = "e" === n ? " " : "0", (o = e[n]) && (n = o(r, i)), a.push(n), c = u + 1);
                return a.push(t.slice(c, u)), a.join("")
            }
        }

        function Ut(t, e) {
            return function(r) {
                var n, a, s = p(1900, void 0, 1);
                if (Ft(s, t, r += "", 0) != r.length) return null;
                if ("Q" in s) return new Date(s.Q);
                if ("s" in s) return new Date(1e3 * s.s + ("L" in s ? s.L : 0));
                if (e && !("Z" in s) && (s.Z = 0), "p" in s && (s.H = s.H % 12 + 12 * s.p), void 0 === s.m && (s.m = "q" in s ? s.q : 0), "V" in s) {
                    if (s.V < 1 || s.V > 53) return null;
                    "w" in s || (s.w = 1), "Z" in s ? (a = (n = f(p(s.y, 0, 1))).getUTCDay(), n = a > 4 || 0 === a ? c.utcMonday.ceil(n) : (0, c.utcMonday)(n), n = u.default.offset(n, 7 * (s.V - 1)), s.y = n.getUTCFullYear(), s.m = n.getUTCMonth(), s.d = n.getUTCDate() + (s.w + 6) % 7) : (a = (n = l(p(s.y, 0, 1))).getDay(), n = a > 4 || 0 === a ? o.monday.ceil(n) : (0, o.monday)(n), n = i.default.offset(n, 7 * (s.V - 1)), s.y = n.getFullYear(), s.m = n.getMonth(), s.d = n.getDate() + (s.w + 6) % 7)
                } else("W" in s || "U" in s) && ("w" in s || (s.w = "u" in s ? s.u % 7 : "W" in s ? 1 : 0), a = "Z" in s ? f(p(s.y, 0, 1)).getUTCDay() : l(p(s.y, 0, 1)).getDay(), s.m = 0, s.d = "W" in s ? (s.w + 6) % 7 + 7 * s.W - (a + 5) % 7 : s.w + 7 * s.U - (a + 6) % 7);
                return "Z" in s ? (s.H += s.Z / 100 | 0, s.M += s.Z % 100, f(s)) : l(s)
            }
        }

        function Ft(t, e, r, n) {
            for (var i, o, a = 0, u = e.length, c = r.length; a < u;) {
                if (n >= c) return -1;
                if (37 === (i = e.charCodeAt(a++))) {
                    if (i = e.charAt(a++), !(o = Lt[i in d ? e.charAt(a++) : i]) || (n = o(t, r, n)) < 0) return -1
                } else if (i != r.charCodeAt(n++)) return -1
            }
            return n
        }
        return Rt.x = zt(r, Rt), Rt.X = zt(n, Rt), Rt.c = zt(e, Rt), Bt.x = zt(r, Bt), Bt.X = zt(n, Bt), Bt.c = zt(e, Bt), {
            format: function(t) {
                var e = zt(t += "", Rt);
                return e.toString = function() {
                    return t
                }, e
            },
            parse: function(t) {
                var e = Ut(t += "", !1);
                return e.toString = function() {
                    return t
                }, e
            },
            utcFormat: function(t) {
                var e = zt(t += "", Bt);
                return e.toString = function() {
                    return t
                }, e
            },
            utcParse: function(t) {
                var e = Ut(t += "", !0);
                return e.toString = function() {
                    return t
                }, e
            }
        }
    }
    var d = {
            "-": "",
            _: " ",
            0: "0"
        },
        y = /^\s*\d+/,
        g = /^%/,
        v = /[\\^$*+?|[\]().{}]/g;

    function m(t, e, r) {
        var n = t < 0 ? "-" : "",
            i = (n ? -t : t) + "",
            o = i.length;
        return n + (o < r ? new Array(r - o + 1).join(e) + i : i)
    }

    function b(t) {
        return t.replace(v, "\\$&")
    }

    function x(t) {
        return new RegExp("^(?:" + t.map(b).join("|") + ")", "i")
    }

    function w(t) {
        return new Map(t.map(((t, e) => [t.toLowerCase(), e])))
    }

    function O(t, e, r) {
        var n = y.exec(e.slice(r, r + 1));
        return n ? (t.w = +n[0], r + n[0].length) : -1
    }

    function j(t, e, r) {
        var n = y.exec(e.slice(r, r + 1));
        return n ? (t.u = +n[0], r + n[0].length) : -1
    }

    function _(t, e, r) {
        var n = y.exec(e.slice(r, r + 2));
        return n ? (t.U = +n[0], r + n[0].length) : -1
    }

    function S(t, e, r) {
        var n = y.exec(e.slice(r, r + 2));
        return n ? (t.V = +n[0], r + n[0].length) : -1
    }

    function A(t, e, r) {
        var n = y.exec(e.slice(r, r + 2));
        return n ? (t.W = +n[0], r + n[0].length) : -1
    }

    function k(t, e, r) {
        var n = y.exec(e.slice(r, r + 4));
        return n ? (t.y = +n[0], r + n[0].length) : -1
    }

    function E(t, e, r) {
        var n = y.exec(e.slice(r, r + 2));
        return n ? (t.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), r + n[0].length) : -1
    }

    function M(t, e, r) {
        var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(r, r + 6));
        return n ? (t.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), r + n[0].length) : -1
    }

    function P(t, e, r) {
        var n = y.exec(e.slice(r, r + 1));
        return n ? (t.q = 3 * n[0] - 3, r + n[0].length) : -1
    }

    function C(t, e, r) {
        var n = y.exec(e.slice(r, r + 2));
        return n ? (t.m = n[0] - 1, r + n[0].length) : -1
    }

    function T(t, e, r) {
        var n = y.exec(e.slice(r, r + 2));
        return n ? (t.d = +n[0], r + n[0].length) : -1
    }

    function I(t, e, r) {
        var n = y.exec(e.slice(r, r + 3));
        return n ? (t.m = 0, t.d = +n[0], r + n[0].length) : -1
    }

    function N(t, e, r) {
        var n = y.exec(e.slice(r, r + 2));
        return n ? (t.H = +n[0], r + n[0].length) : -1
    }

    function D(t, e, r) {
        var n = y.exec(e.slice(r, r + 2));
        return n ? (t.M = +n[0], r + n[0].length) : -1
    }

    function R(t, e, r) {
        var n = y.exec(e.slice(r, r + 2));
        return n ? (t.S = +n[0], r + n[0].length) : -1
    }

    function B(t, e, r) {
        var n = y.exec(e.slice(r, r + 3));
        return n ? (t.L = +n[0], r + n[0].length) : -1
    }

    function L(t, e, r) {
        var n = y.exec(e.slice(r, r + 6));
        return n ? (t.L = Math.floor(n[0] / 1e3), r + n[0].length) : -1
    }

    function z(t, e, r) {
        var n = g.exec(e.slice(r, r + 1));
        return n ? r + n[0].length : -1
    }

    function U(t, e, r) {
        var n = y.exec(e.slice(r));
        return n ? (t.Q = +n[0], r + n[0].length) : -1
    }

    function F(t, e, r) {
        var n = y.exec(e.slice(r));
        return n ? (t.s = +n[0], r + n[0].length) : -1
    }

    function q(t, e) {
        return m(t.getDate(), e, 2)
    }

    function H(t, e) {
        return m(t.getHours(), e, 2)
    }

    function V(t, e) {
        return m(t.getHours() % 12 || 12, e, 2)
    }

    function G(t, e) {
        return m(1 + i.default.count((0, a.default)(t), t), e, 3)
    }

    function W(t, e) {
        return m(t.getMilliseconds(), e, 3)
    }

    function Y(t, e) {
        return W(t, e) + "000"
    }

    function K(t, e) {
        return m(t.getMonth() + 1, e, 2)
    }

    function X(t, e) {
        return m(t.getMinutes(), e, 2)
    }

    function J(t, e) {
        return m(t.getSeconds(), e, 2)
    }

    function Q(t) {
        var e = t.getDay();
        return 0 === e ? 7 : e
    }

    function Z(t, e) {
        return m(o.sunday.count((0, a.default)(t) - 1, t), e, 2)
    }

    function $(t) {
        var e = t.getDay();
        return e >= 4 || 0 === e ? (0, o.thursday)(t) : o.thursday.ceil(t)
    }

    function tt(t, e) {
        return t = $(t), m(o.thursday.count((0, a.default)(t), t) + (4 === (0, a.default)(t).getDay()), e, 2)
    }

    function et(t) {
        return t.getDay()
    }

    function rt(t, e) {
        return m(o.monday.count((0, a.default)(t) - 1, t), e, 2)
    }

    function nt(t, e) {
        return m(t.getFullYear() % 100, e, 2)
    }

    function it(t, e) {
        return m((t = $(t)).getFullYear() % 100, e, 2)
    }

    function ot(t, e) {
        return m(t.getFullYear() % 1e4, e, 4)
    }

    function at(t, e) {
        var r = t.getDay();
        return m((t = r >= 4 || 0 === r ? (0, o.thursday)(t) : o.thursday.ceil(t)).getFullYear() % 1e4, e, 4)
    }

    function ut(t) {
        var e = t.getTimezoneOffset();
        return (e > 0 ? "-" : (e *= -1, "+")) + m(e / 60 | 0, "0", 2) + m(e % 60, "0", 2)
    }

    function ct(t, e) {
        return m(t.getUTCDate(), e, 2)
    }

    function st(t, e) {
        return m(t.getUTCHours(), e, 2)
    }

    function lt(t, e) {
        return m(t.getUTCHours() % 12 || 12, e, 2)
    }

    function ft(t, e) {
        return m(1 + u.default.count((0, s.default)(t), t), e, 3)
    }

    function pt(t, e) {
        return m(t.getUTCMilliseconds(), e, 3)
    }

    function ht(t, e) {
        return pt(t, e) + "000"
    }

    function dt(t, e) {
        return m(t.getUTCMonth() + 1, e, 2)
    }

    function yt(t, e) {
        return m(t.getUTCMinutes(), e, 2)
    }

    function gt(t, e) {
        return m(t.getUTCSeconds(), e, 2)
    }

    function vt(t) {
        var e = t.getUTCDay();
        return 0 === e ? 7 : e
    }

    function mt(t, e) {
        return m(c.utcSunday.count((0, s.default)(t) - 1, t), e, 2)
    }

    function bt(t) {
        var e = t.getUTCDay();
        return e >= 4 || 0 === e ? (0, c.utcThursday)(t) : c.utcThursday.ceil(t)
    }

    function xt(t, e) {
        return t = bt(t), m(c.utcThursday.count((0, s.default)(t), t) + (4 === (0, s.default)(t).getUTCDay()), e, 2)
    }

    function wt(t) {
        return t.getUTCDay()
    }

    function Ot(t, e) {
        return m(c.utcMonday.count((0, s.default)(t) - 1, t), e, 2)
    }

    function jt(t, e) {
        return m(t.getUTCFullYear() % 100, e, 2)
    }

    function _t(t, e) {
        return m((t = bt(t)).getUTCFullYear() % 100, e, 2)
    }

    function St(t, e) {
        return m(t.getUTCFullYear() % 1e4, e, 4)
    }

    function At(t, e) {
        var r = t.getUTCDay();
        return m((t = r >= 4 || 0 === r ? (0, c.utcThursday)(t) : c.utcThursday.ceil(t)).getUTCFullYear() % 1e4, e, 4)
    }

    function kt() {
        return "+0000"
    }

    function Et() {
        return "%"
    }

    function Mt(t) {
        return +t
    }

    function Pt(t) {
        return Math.floor(+t / 1e3)
    }
})), n.register("9bM27", (function(t, r) {
    e(t.exports, "default", (function() {
        return y
    }));
    var i = n("8P0zv"),
        o = n("2HhfM"),
        a = n("5nJ9T"),
        u = n("3AmUZ"),
        c = n("kganr"),
        s = n("jBtiJ"),
        l = n("gDOIm"),
        f = n("6g5O7"),
        p = n("eSzJE"),
        h = n("7zhXA"),
        d = n("cw5Ml");

    function y() {
        return d.initRange.apply((0, h.calendar)(s.utcTicks, s.utcTickInterval, f.default, u.default, l.utcSunday, i.default, o.default, a.default, c.default, p.utcFormat).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments)
    }
})), n.register("i1F7t", (function(t, r) {
    e(t.exports, "copy", (function() {
        return h
    })), e(t.exports, "default", (function() {
        return d
    })), e(t.exports, "sequentialLog", (function() {
        return y
    })), e(t.exports, "sequentialSymlog", (function() {
        return g
    })), e(t.exports, "sequentialPow", (function() {
        return v
    })), e(t.exports, "sequentialSqrt", (function() {
        return m
    }));
    var i = n("cUybY"),
        o = n("47yGB"),
        a = n("5OJKq"),
        u = n("cw5Ml"),
        c = n("hpzFq"),
        s = n("eF6vx"),
        l = n("i73Pe"),
        f = n("eATyM");

    function p() {
        var t, e, r, n, u, c = 0,
            s = 1,
            l = a.identity,
            f = !1;

        function p(e) {
            return null == e || isNaN(e = +e) ? u : l(0 === r ? .5 : (e = (n(e) - t) * r, f ? Math.max(0, Math.min(1, e)) : e))
        }

        function h(t) {
            return function(e) {
                var r, n;
                return arguments.length ? ([r, n] = e, l = t(r, n), p) : [l(0), l(1)]
            }
        }
        return p.domain = function(i) {
                return arguments.length ? ([c, s] = i, t = n(c = +c), e = n(s = +s), r = t === e ? 0 : 1 / (e - t), p) : [c, s]
            }, p.clamp = function(t) {
                return arguments.length ? (f = !!t, p) : f
            }, p.interpolator = function(t) {
                return arguments.length ? (l = t, p) : l
            }, p.range = h(i.default), p.rangeRound = h(o.default), p.unknown = function(t) {
                return arguments.length ? (u = t, p) : u
            },
            function(i) {
                return n = i, t = i(c), e = i(s), r = t === e ? 0 : 1 / (e - t), p
            }
    }

    function h(t, e) {
        return e.domain(t.domain()).interpolator(t.interpolator()).clamp(t.clamp()).unknown(t.unknown())
    }

    function d() {
        var t = (0, c.linearish)(p()(a.identity));
        return t.copy = function() {
            return h(t, d())
        }, u.initInterpolator.apply(t, arguments)
    }

    function y() {
        var t = (0, s.loggish)(p()).domain([1, 10]);
        return t.copy = function() {
            return h(t, y()).base(t.base())
        }, u.initInterpolator.apply(t, arguments)
    }

    function g() {
        var t = (0, l.symlogish)(p());
        return t.copy = function() {
            return h(t, g()).constant(t.constant())
        }, u.initInterpolator.apply(t, arguments)
    }

    function v() {
        var t = (0, f.powish)(p());
        return t.copy = function() {
            return h(t, v()).exponent(t.exponent())
        }, u.initInterpolator.apply(t, arguments)
    }

    function m() {
        return v.apply(null, arguments).exponent(.5)
    }
})), n.register("aYwId", (function(t, r) {
    e(t.exports, "default", (function() {
        return s
    }));
    var i = n("3VwW0"),
        o = n("2SUYA"),
        a = n("5YG9W"),
        u = n("5OJKq"),
        c = n("cw5Ml");

    function s() {
        var t = [],
            e = u.identity;

        function r(r) {
            if (null != r && !isNaN(r = +r)) return e(((0, o.default)(t, r, 1) - 1) / (t.length - 1))
        }
        return r.domain = function(e) {
            if (!arguments.length) return t.slice();
            t = [];
            for (let r of e) null == r || isNaN(r = +r) || t.push(r);
            return t.sort(i.default), r
        }, r.interpolator = function(t) {
            return arguments.length ? (e = t, r) : e
        }, r.range = function() {
            return t.map(((r, n) => e(n / (t.length - 1))))
        }, r.quantiles = function(e) {
            return Array.from({
                length: e + 1
            }, ((r, n) => (0, a.default)(t, n / e)))
        }, r.copy = function() {
            return s(e).domain(t)
        }, c.initInterpolator.apply(r, arguments)
    }
})), n.register("jGDW4", (function(t, r) {
    e(t.exports, "default", (function() {
        return y
    })), e(t.exports, "divergingLog", (function() {
        return g
    })), e(t.exports, "divergingSymlog", (function() {
        return v
    })), e(t.exports, "divergingPow", (function() {
        return m
    })), e(t.exports, "divergingSqrt", (function() {
        return b
    }));
    var i = n("cUybY"),
        o = n("47yGB"),
        a = n("l2qFy"),
        u = n("5OJKq"),
        c = n("cw5Ml"),
        s = n("hpzFq"),
        l = n("eF6vx"),
        f = n("i1F7t"),
        p = n("i73Pe"),
        h = n("eATyM");

    function d() {
        var t, e, r, n, c, s, l, f = 0,
            p = .5,
            h = 1,
            d = 1,
            y = u.identity,
            g = !1;

        function v(t) {
            return isNaN(t = +t) ? l : (t = .5 + ((t = +s(t)) - e) * (d * t < d * e ? n : c), y(g ? Math.max(0, Math.min(1, t)) : t))
        }

        function m(t) {
            return function(e) {
                var r, n, i;
                return arguments.length ? ([r, n, i] = e, y = (0, a.default)(t, [r, n, i]), v) : [y(0), y(.5), y(1)]
            }
        }
        return v.domain = function(i) {
                return arguments.length ? ([f, p, h] = i, t = s(f = +f), e = s(p = +p), r = s(h = +h), n = t === e ? 0 : .5 / (e - t), c = e === r ? 0 : .5 / (r - e), d = e < t ? -1 : 1, v) : [f, p, h]
            }, v.clamp = function(t) {
                return arguments.length ? (g = !!t, v) : g
            }, v.interpolator = function(t) {
                return arguments.length ? (y = t, v) : y
            }, v.range = m(i.default), v.rangeRound = m(o.default), v.unknown = function(t) {
                return arguments.length ? (l = t, v) : l
            },
            function(i) {
                return s = i, t = i(f), e = i(p), r = i(h), n = t === e ? 0 : .5 / (e - t), c = e === r ? 0 : .5 / (r - e), d = e < t ? -1 : 1, v
            }
    }

    function y() {
        var t = (0, s.linearish)(d()(u.identity));
        return t.copy = function() {
            return (0, f.copy)(t, y())
        }, c.initInterpolator.apply(t, arguments)
    }

    function g() {
        var t = (0, l.loggish)(d()).domain([.1, 1, 10]);
        return t.copy = function() {
            return (0, f.copy)(t, g()).base(t.base())
        }, c.initInterpolator.apply(t, arguments)
    }

    function v() {
        var t = (0, p.symlogish)(d());
        return t.copy = function() {
            return (0, f.copy)(t, v()).constant(t.constant())
        }, c.initInterpolator.apply(t, arguments)
    }

    function m() {
        var t = (0, h.powish)(d());
        return t.copy = function() {
            return (0, f.copy)(t, m()).exponent(t.exponent())
        }, c.initInterpolator.apply(t, arguments)
    }

    function b() {
        return m.apply(null, arguments).exponent(.5)
    }
})), n.register("l2qFy", (function(t, r) {
    e(t.exports, "default", (function() {
        return o
    }));
    var i = n("cUybY");

    function o(t, e) {
        void 0 === e && (e = t, t = i.default);
        for (var r = 0, n = e.length - 1, o = e[0], a = new Array(n < 0 ? 0 : n); r < n;) a[r] = t(o, o = e[++r]);
        return function(t) {
            var e = Math.max(0, Math.min(n - 1, Math.floor(t *= n)));
            return a[e](t - e)
        }
    }
})), n.register("docQE", (function(t, r) {
    e(t.exports, "default", (function() {
        return l
    }));
    var i = n("jcN1X"),
        o = n("3NDPY"),
        a = n("faoLD"),
        u = n("kHLCm");

    function c(t, e) {
        return t[e]
    }

    function s(t) {
        const e = [];
        return e.key = t, e
    }

    function l() {
        var t = (0, o.default)([]),
            e = u.default,
            r = a.default,
            n = c;

        function l(o) {
            var a, u, c = Array.from(t.apply(this, arguments), s),
                l = c.length,
                f = -1;
            for (const t of o)
                for (a = 0, ++f; a < l; ++a)(c[a][f] = [0, +n(t, c[a].key, f, o)]).data = t;
            for (a = 0, u = (0, i.default)(e(c)); a < l; ++a) c[u[a]].index = a;
            return r(c, u), c
        }
        return l.keys = function(e) {
            return arguments.length ? (t = "function" == typeof e ? e : (0, o.default)(Array.from(e)), l) : t
        }, l.value = function(t) {
            return arguments.length ? (n = "function" == typeof t ? t : (0, o.default)(+t), l) : n
        }, l.order = function(t) {
            return arguments.length ? (e = null == t ? u.default : "function" == typeof t ? t : (0, o.default)(Array.from(t)), l) : e
        }, l.offset = function(t) {
            return arguments.length ? (r = null == t ? a.default : t, l) : r
        }, l
    }
})), n.register("jcN1X", (function(t, r) {
    e(t.exports, "default", (function() {
        return n
    }));
    Array.prototype.slice;

    function n(t) {
        return "object" == typeof t && "length" in t ? t : Array.from(t)
    }
})), n.register("3NDPY", (function(t, r) {
    function n(t) {
        return function() {
            return t
        }
    }
    e(t.exports, "default", (function() {
        return n
    }))
})), n.register("faoLD", (function(t, r) {
    function n(t, e) {
        if ((i = t.length) > 1)
            for (var r, n, i, o = 1, a = t[e[0]], u = a.length; o < i; ++o)
                for (n = a, a = t[e[o]], r = 0; r < u; ++r) a[r][1] += a[r][0] = isNaN(n[r][1]) ? n[r][0] : n[r][1]
    }
    e(t.exports, "default", (function() {
        return n
    }))
})), n.register("kHLCm", (function(t, r) {
    function n(t) {
        for (var e = t.length, r = new Array(e); --e >= 0;) r[e] = e;
        return r
    }
    e(t.exports, "default", (function() {
        return n
    }))
})), n.register("jhK1O", (function(t, r) {
    e(t.exports, "default", (function() {
        return o
    }));
    var i = n("faoLD");

    function o(t, e) {
        if ((n = t.length) > 0) {
            for (var r, n, o, a = 0, u = t[0].length; a < u; ++a) {
                for (o = r = 0; r < n; ++r) o += t[r][a][1] || 0;
                if (o)
                    for (r = 0; r < n; ++r) t[r][a][1] /= o
            }(0, i.default)(t, e)
        }
    }
})), n.register("9VW0l", (function(t, r) {
    e(t.exports, "default", (function() {
        return o
    }));
    var i = n("faoLD");

    function o(t, e) {
        if ((r = t.length) > 0) {
            for (var r, n = 0, o = t[e[0]], a = o.length; n < a; ++n) {
                for (var u = 0, c = 0; u < r; ++u) c += t[u][n][1] || 0;
                o[n][1] += o[n][0] = -c / 2
            }(0, i.default)(t, e)
        }
    }
})), n.register("6pIfw", (function(t, r) {
    e(t.exports, "default", (function() {
        return o
    }));
    var i = n("faoLD");

    function o(t, e) {
        if ((o = t.length) > 0 && (n = (r = t[e[0]]).length) > 0) {
            for (var r, n, o, a = 0, u = 1; u < n; ++u) {
                for (var c = 0, s = 0, l = 0; c < o; ++c) {
                    for (var f = t[e[c]], p = f[u][1] || 0, h = (p - (f[u - 1][1] || 0)) / 2, d = 0; d < c; ++d) {
                        var y = t[e[d]];
                        h += (y[u][1] || 0) - (y[u - 1][1] || 0)
                    }
                    s += p, l += h * p
                }
                r[u - 1][1] += r[u - 1][0] = a, s && (a -= l / s)
            }
            r[u - 1][1] += r[u - 1][0] = a, (0, i.default)(t, e)
        }
    }
})), n.register("eYRDm", (function(r, i) {
    e(r.exports, "Legend", (function() {
        return j
    }));
    var o = n("hRZ1R"),
        a = n("1XSsl"),
        u = n("fywoC"),
        c = n("hIXzz"),
        s = n("fI5bH");

    function l(t) {
        return l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, l(t)
    }

    function f(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), r.push.apply(r, n)
        }
        return r
    }

    function p(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2 ? f(Object(r), !0).forEach((function(e) {
                h(t, e, r[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : f(Object(r)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
            }))
        }
        return t
    }

    function h(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = r, t
    }

    function d(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function y(t, e) {
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    function g(t, e) {
        return g = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        }, g(t, e)
    }

    function v(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var r, n = b(t);
            if (e) {
                var i = b(this).constructor;
                r = Reflect.construct(n, arguments, i)
            } else r = n.apply(this, arguments);
            return m(this, r)
        }
    }

    function m(t, e) {
        return !e || "object" !== l(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function b(t) {
        return b = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }, b(t)
    }

    function x(t, e) {
        if (null == t) return {};
        var r, n, i = function(t, e) {
            if (null == t) return {};
            var r, n, i = {},
                o = Object.keys(t);
            for (n = 0; n < o.length; n++) r = o[n], e.indexOf(r) >= 0 || (i[r] = t[r]);
            return i
        }(t, e);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(t);
            for (n = 0; n < o.length; n++) r = o[n], e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (i[r] = t[r])
        }
        return i
    }

    function w(t) {
        return t.value
    }

    function O(e, r) {
        return !0 === e ? t(a)(r, w) : t(o)(e) ? t(a)(r, e) : r
    }
    var j = function(e) {
        ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && g(t, e)
        }(l, e);
        var r, n, i, a = v(l);

        function l() {
            var t;
            d(this, l);
            for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++) r[n] = arguments[n];
            return (t = a.call.apply(a, [this].concat(r))).wrapperNode = void 0, t.state = {
                boxWidth: -1,
                boxHeight: -1
            }, t
        }
        return r = l, i = [{
            key: "getWithHeight",
            value: function(t, e) {
                var r = t.props.layout;
                return "vertical" === r && (0, s.isNumber)(t.props.height) ? {
                    height: t.props.height
                } : "horizontal" === r ? {
                    width: t.props.width || e
                } : null
            }
        }], (n = [{
            key: "componentDidMount",
            value: function() {
                this.updateBBox()
            }
        }, {
            key: "componentDidUpdate",
            value: function() {
                this.updateBBox()
            }
        }, {
            key: "getBBox",
            value: function() {
                return this.wrapperNode && this.wrapperNode.getBoundingClientRect ? this.wrapperNode.getBoundingClientRect() : null
            }
        }, {
            key: "getBBoxSnapshot",
            value: function() {
                var t = this.state,
                    e = t.boxWidth,
                    r = t.boxHeight;
                return e >= 0 && r >= 0 ? {
                    width: e,
                    height: r
                } : null
            }
        }, {
            key: "getDefaultPosition",
            value: function(t) {
                var e, r, n = this.props,
                    i = n.layout,
                    o = n.align,
                    a = n.verticalAlign,
                    u = n.margin,
                    c = n.chartWidth,
                    s = n.chartHeight;
                return t && (void 0 !== t.left && null !== t.left || void 0 !== t.right && null !== t.right) || (e = "center" === o && "vertical" === i ? {
                    left: ((c || 0) - (this.getBBoxSnapshot() || {
                        width: 0
                    }).width) / 2
                } : "right" === o ? {
                    right: u && u.right || 0
                } : {
                    left: u && u.left || 0
                }), t && (void 0 !== t.top && null !== t.top || void 0 !== t.bottom && null !== t.bottom) || (r = "middle" === a ? {
                    top: ((s || 0) - (this.getBBoxSnapshot() || {
                        height: 0
                    }).height) / 2
                } : "bottom" === a ? {
                    bottom: u && u.bottom || 0
                } : {
                    top: u && u.top || 0
                }), p(p({}, e), r)
            }
        }, {
            key: "updateBBox",
            value: function() {
                var t = this.state,
                    e = t.boxWidth,
                    r = t.boxHeight,
                    n = this.props.onBBoxUpdate;
                if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
                    var i = this.wrapperNode.getBoundingClientRect();
                    (Math.abs(i.width - e) > 1 || Math.abs(i.height - r) > 1) && this.setState({
                        boxWidth: i.width,
                        boxHeight: i.height
                    }, (function() {
                        n && n(i)
                    }))
                } else - 1 === e && -1 === r || this.setState({
                    boxWidth: -1,
                    boxHeight: -1
                }, (function() {
                    n && n(null)
                }))
            }
        }, {
            key: "render",
            value: function() {
                var e = this,
                    r = this.props,
                    n = r.content,
                    i = r.width,
                    a = r.height,
                    s = r.wrapperStyle,
                    l = r.payloadUniqBy,
                    f = r.payload,
                    h = p(p({
                        position: "absolute",
                        width: i || "auto",
                        height: a || "auto"
                    }, this.getDefaultPosition(s)), s);
                return t(u).createElement("div", {
                    className: "recharts-legend-wrapper",
                    style: h,
                    ref: function(t) {
                        e.wrapperNode = t
                    }
                }, function(e, r) {
                    if (t(u).isValidElement(e)) return t(u).cloneElement(e, r);
                    if (t(o)(e)) return t(u).createElement(e, r);
                    r.ref;
                    var n = x(r, ["ref"]);
                    return t(u).createElement(c.DefaultLegendContent, n)
                }(n, p(p({}, this.props), {}, {
                    payload: O(l, f)
                })))
            }
        }]) && y(r.prototype, n), i && y(r, i), l
    }(u.PureComponent);
    j.displayName = "Legend", j.defaultProps = {
        iconSize: 14,
        layout: "horizontal",
        align: "center",
        verticalAlign: "bottom"
    }
})), n.register("1XSsl", (function(t, e) {
    var r = n("c3Npb"),
        i = n("kDOOG");
    t.exports = function(t, e) {
        return t && t.length ? i(t, r(e, 2)) : []
    }
})), n.register("kDOOG", (function(t, e) {
    var r = n("fn9UE"),
        i = n("daH2E"),
        o = n("1fLYp"),
        a = n("cCyos"),
        u = n("IgEsz"),
        c = n("5qfZA");
    t.exports = function(t, e, n) {
        var s = -1,
            l = i,
            f = t.length,
            p = !0,
            h = [],
            d = h;
        if (n) p = !1, l = o;
        else if (f >= 200) {
            var y = e ? null : u(t);
            if (y) return c(y);
            p = !1, l = a, d = new r
        } else d = e ? [] : h;
        t: for (; ++s < f;) {
            var g = t[s],
                v = e ? e(g) : g;
            if (g = n || 0 !== g ? g : 0, p && v == v) {
                for (var m = d.length; m--;)
                    if (d[m] === v) continue t;
                e && d.push(v), h.push(g)
            } else l(d, v, n) || (d !== h && d.push(v), h.push(g))
        }
        return h
    }
})), n.register("daH2E", (function(t, e) {
    var r = n("bfUlA");
    t.exports = function(t, e) {
        return !!(null == t ? 0 : t.length) && r(t, e, 0) > -1
    }
})), n.register("bfUlA", (function(t, e) {
    var r = n("hXAO5"),
        i = n("9YZxO"),
        o = n("hn2cs");
    t.exports = function(t, e, n) {
        return e == e ? o(t, e, n) : r(t, i, n)
    }
})), n.register("hXAO5", (function(t, e) {
    t.exports = function(t, e, r, n) {
        for (var i = t.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i;)
            if (e(t[o], o, t)) return o;
        return -1
    }
})), n.register("9YZxO", (function(t, e) {
    t.exports = function(t) {
        return t != t
    }
})), n.register("hn2cs", (function(t, e) {
    t.exports = function(t, e, r) {
        for (var n = r - 1, i = t.length; ++n < i;)
            if (t[n] === e) return n;
        return -1
    }
})), n.register("1fLYp", (function(t, e) {
    t.exports = function(t, e, r) {
        for (var n = -1, i = null == t ? 0 : t.length; ++n < i;)
            if (r(e, t[n])) return !0;
        return !1
    }
})), n.register("IgEsz", (function(t, e) {
    var r = n("90Lso"),
        i = n("d0mSa"),
        o = n("5qfZA"),
        a = r && 1 / o(new r([, -0]))[1] == 1 / 0 ? function(t) {
            return new r(t)
        } : i;
    t.exports = a
})), n.register("d0mSa", (function(t, e) {
    t.exports = function() {}
})), n.register("hIXzz", (function(r, i) {
    e(r.exports, "DefaultLegendContent", (function() {
        return w
    }));
    var o = n("fywoC"),
        a = n("fe1on"),
        u = n("j8QEj"),
        c = n("frxjH"),
        s = n("iquK2");

    function l(t) {
        return l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, l(t)
    }

    function f() {
        return f = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
            }
            return t
        }, f.apply(this, arguments)
    }

    function p(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), r.push.apply(r, n)
        }
        return r
    }

    function h(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = r, t
    }

    function d(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function y(t, e) {
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    function g(t, e) {
        return g = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        }, g(t, e)
    }

    function v(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var r, n = b(t);
            if (e) {
                var i = b(this).constructor;
                r = Reflect.construct(n, arguments, i)
            } else r = n.apply(this, arguments);
            return m(this, r)
        }
    }

    function m(t, e) {
        return !e || "object" !== l(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function b(t) {
        return b = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }, b(t)
    }
    var x = 32,
        w = function(e) {
            ! function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && g(t, e)
            }(m, e);
            var r, n, i, l = v(m);

            function m() {
                return d(this, m), l.apply(this, arguments)
            }
            return r = m, n = [{
                key: "renderIcon",
                value: function(e) {
                    var r = this.props.inactiveColor,
                        n = 16,
                        i = 5.333333333333333,
                        a = 10.666666666666666,
                        u = e.inactive ? r : e.color;
                    if ("plainline" === e.type) return t(o).createElement("line", {
                        strokeWidth: 4,
                        fill: "none",
                        stroke: u,
                        strokeDasharray: e.payload.strokeDasharray,
                        x1: 0,
                        y1: n,
                        x2: x,
                        y2: n,
                        className: "recharts-legend-icon"
                    });
                    if ("line" === e.type) return t(o).createElement("path", {
                        strokeWidth: 4,
                        fill: "none",
                        stroke: u,
                        d: "M0,".concat(n, "h").concat(a, "\n            A").concat(i, ",").concat(i, ",0,1,1,").concat(2 * a, ",").concat(n, "\n            H").concat(x, "M").concat(2 * a, ",").concat(n, "\n            A").concat(i, ",").concat(i, ",0,1,1,").concat(a, ",").concat(n),
                        className: "recharts-legend-icon"
                    });
                    if ("rect" === e.type) return t(o).createElement("path", {
                        stroke: "none",
                        fill: u,
                        d: "M0,".concat(4, "h").concat(x, "v").concat(24, "h").concat(-32, "z"),
                        className: "recharts-legend-icon"
                    });
                    if (t(o).isValidElement(e.legendIcon)) {
                        var s = function(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var r = null != arguments[e] ? arguments[e] : {};
                                e % 2 ? p(Object(r), !0).forEach((function(e) {
                                    h(t, e, r[e])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : p(Object(r)).forEach((function(e) {
                                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                                }))
                            }
                            return t
                        }({}, e);
                        return delete s.legendIcon, t(o).cloneElement(e.legendIcon, s)
                    }
                    return t(o).createElement(c.Symbols, {
                        fill: u,
                        cx: n,
                        cy: n,
                        size: x,
                        sizeType: "diameter",
                        type: e.type
                    })
                }
            }, {
                key: "renderItems",
                value: function() {
                    var e = this,
                        r = this.props,
                        n = r.payload,
                        i = r.iconSize,
                        c = r.layout,
                        l = r.formatter,
                        p = r.inactiveColor,
                        d = {
                            x: 0,
                            y: 0,
                            width: x,
                            height: x
                        },
                        y = {
                            display: "horizontal" === c ? "inline-block" : "block",
                            marginRight: 10
                        },
                        g = {
                            display: "inline-block",
                            verticalAlign: "middle",
                            marginRight: 4
                        };
                    return n.map((function(r, n) {
                        var c, v = r.formatter || l,
                            m = t(a)((h(c = {
                                "recharts-legend-item": !0
                            }, "legend-item-".concat(n), !0), h(c, "inactive", r.inactive), c));
                        if ("none" === r.type) return null;
                        var b = r.inactive ? p : r.color;
                        return t(o).createElement("li", f({
                            className: m,
                            style: y,
                            key: "legend-item-".concat(n)
                        }, (0, s.adaptEventsOfChild)(e.props, r, n)), t(o).createElement(u.Surface, {
                            width: i,
                            height: i,
                            viewBox: d,
                            style: g
                        }, e.renderIcon(r)), t(o).createElement("span", {
                            className: "recharts-legend-item-text",
                            style: {
                                color: b
                            }
                        }, v ? v(r.value, r, n) : r.value))
                    }))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props,
                        r = e.payload,
                        n = e.layout,
                        i = e.align;
                    if (!r || !r.length) return null;
                    var a = {
                        padding: 0,
                        margin: 0,
                        textAlign: "horizontal" === n ? i : "left"
                    };
                    return t(o).createElement("ul", {
                        className: "recharts-default-legend",
                        style: a
                    }, this.renderItems())
                }
            }], n && y(r.prototype, n), i && y(r, i), m
        }(o.PureComponent);
    w.displayName = "Legend", w.defaultProps = {
        iconSize: 14,
        layout: "horizontal",
        align: "center",
        verticalAlign: "middle",
        inactiveColor: "#ccc"
    }
})), n.register("j8QEj", (function(r, i) {
    e(r.exports, "Surface", (function() {
        return l
    }));
    var o = n("fywoC"),
        a = n("fe1on"),
        u = n("iquK2");

    function c() {
        return c = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
            }
            return t
        }, c.apply(this, arguments)
    }

    function s(t, e) {
        if (null == t) return {};
        var r, n, i = function(t, e) {
            if (null == t) return {};
            var r, n, i = {},
                o = Object.keys(t);
            for (n = 0; n < o.length; n++) r = o[n], e.indexOf(r) >= 0 || (i[r] = t[r]);
            return i
        }(t, e);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(t);
            for (n = 0; n < o.length; n++) r = o[n], e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (i[r] = t[r])
        }
        return i
    }

    function l(e) {
        var r = e.children,
            n = e.width,
            i = e.height,
            l = e.viewBox,
            f = e.className,
            p = e.style,
            h = s(e, ["children", "width", "height", "viewBox", "className", "style"]),
            d = l || {
                width: n,
                height: i,
                x: 0,
                y: 0
            },
            y = t(a)("recharts-surface", f);
        return t(o).createElement("svg", c({}, (0, u.filterProps)(h, !0, !0), {
            className: y,
            width: n,
            height: i,
            style: p,
            viewBox: "".concat(d.x, " ").concat(d.y, " ").concat(d.width, " ").concat(d.height),
            version: "1.1"
        }), t(o).createElement("title", null, e.title), t(o).createElement("desc", null, e.desc), r)
    }
})), n.register("frxjH", (function(r, i) {
    e(r.exports, "Symbols", (function() {
        return k
    }));
    var o = n("29RmV"),
        a = n("fywoC"),
        u = n("cx4q3"),
        c = n("3jKsB"),
        s = n("c9nlE"),
        l = n("cnciJ"),
        f = n("a91N6"),
        p = n("1s5pM"),
        h = n("6OWtl"),
        d = n("3iRiV"),
        y = n("fe1on"),
        g = n("iquK2");

    function v(t) {
        return v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, v(t)
    }

    function m() {
        return m = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
            }
            return t
        }, m.apply(this, arguments)
    }

    function b(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function x(t, e) {
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    function w(t, e) {
        return w = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        }, w(t, e)
    }

    function O(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var r, n = _(t);
            if (e) {
                var i = _(this).constructor;
                r = Reflect.construct(n, arguments, i)
            } else r = n.apply(this, arguments);
            return j(this, r)
        }
    }

    function j(t, e) {
        return !e || "object" !== v(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function _(t) {
        return _ = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }, _(t)
    }
    var S = {
            symbolCircle: c.default,
            symbolCross: s.default,
            symbolDiamond: l.default,
            symbolSquare: f.default,
            symbolStar: p.default,
            symbolTriangle: h.default,
            symbolWye: d.default
        },
        A = Math.PI / 180,
        k = function(e) {
            ! function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && w(t, e)
            }(l, e);
            var r, n, i, s = O(l);

            function l() {
                return b(this, l), s.apply(this, arguments)
            }
            return r = l, (n = [{
                key: "getPath",
                value: function() {
                    var e = this.props,
                        r = e.size,
                        n = e.sizeType,
                        i = e.type,
                        a = function(e) {
                            var r = "symbol".concat(t(o)(e));
                            return S[r] || c.default
                        }(i),
                        s = (0, u.default)().type(a).size(function(t, e, r) {
                            if ("area" === e) return t;
                            switch (r) {
                                case "cross":
                                    return 5 * t * t / 9;
                                case "diamond":
                                    return .5 * t * t / Math.sqrt(3);
                                case "square":
                                    return t * t;
                                case "star":
                                    var n = 18 * A;
                                    return 1.25 * t * t * (Math.tan(n) - Math.tan(2 * n) * Math.pow(Math.tan(n), 2));
                                case "triangle":
                                    return Math.sqrt(3) * t * t / 4;
                                case "wye":
                                    return (21 - 10 * Math.sqrt(3)) * t * t / 8;
                                default:
                                    return Math.PI * t * t / 4
                            }
                        }(r, n, i));
                    return s()
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props,
                        r = e.className,
                        n = e.cx,
                        i = e.cy,
                        o = e.size;
                    return n === +n && i === +i && o === +o ? t(a).createElement("path", m({}, (0, g.filterProps)(this.props, !0), {
                        className: t(y)("recharts-symbols", r),
                        transform: "translate(".concat(n, ", ").concat(i, ")"),
                        d: this.getPath()
                    })) : null
                }
            }]) && x(r.prototype, n), i && x(r, i), l
        }(a.PureComponent);
    k.defaultProps = {
        type: "circle",
        size: 64,
        sizeType: "area"
    }, k.registerSymbol = function(e, r) {
        S["symbol".concat(t(o)(e))] = r
    }
})), n.register("cx4q3", (function(t, r) {
    e(t.exports, "default", (function() {
        return h
    }));
    var i = n("dwWnN"),
        o = n("3jKsB"),
        a = n("c9nlE"),
        u = n("cnciJ"),
        c = n("1s5pM"),
        s = n("a91N6"),
        l = n("6OWtl"),
        f = n("3iRiV"),
        p = n("3NDPY");
    o.default, a.default, u.default, s.default, c.default, l.default, f.default;

    function h(t, e) {
        var r = null;

        function n() {
            var n;
            if (r || (r = n = (0, i.default)()), t.apply(this, arguments).draw(r, +e.apply(this, arguments)), n) return r = null, n + "" || null
        }
        return t = "function" == typeof t ? t : (0, p.default)(t || o.default), e = "function" == typeof e ? e : (0, p.default)(void 0 === e ? 64 : +e), n.type = function(e) {
            return arguments.length ? (t = "function" == typeof e ? e : (0, p.default)(e), n) : t
        }, n.size = function(t) {
            return arguments.length ? (e = "function" == typeof t ? t : (0, p.default)(+t), n) : e
        }, n.context = function(t) {
            return arguments.length ? (r = null == t ? null : t, n) : r
        }, n
    }
})), n.register("dwWnN", (function(t, r) {
    e(t.exports, "default", (function() {
        return s
    }));
    const n = Math.PI,
        i = 2 * n,
        o = 1e-6,
        a = i - o;

    function u() {
        this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = ""
    }

    function c() {
        return new u
    }
    u.prototype = c.prototype = {
        constructor: u,
        moveTo: function(t, e) {
            this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +e)
        },
        closePath: function() {
            null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z")
        },
        lineTo: function(t, e) {
            this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +e)
        },
        quadraticCurveTo: function(t, e, r, n) {
            this._ += "Q" + +t + "," + +e + "," + (this._x1 = +r) + "," + (this._y1 = +n)
        },
        bezierCurveTo: function(t, e, r, n, i, o) {
            this._ += "C" + +t + "," + +e + "," + +r + "," + +n + "," + (this._x1 = +i) + "," + (this._y1 = +o)
        },
        arcTo: function(t, e, r, i, a) {
            t = +t, e = +e, r = +r, i = +i, a = +a;
            var u = this._x1,
                c = this._y1,
                s = r - t,
                l = i - e,
                f = u - t,
                p = c - e,
                h = f * f + p * p;
            if (a < 0) throw new Error("negative radius: " + a);
            if (null === this._x1) this._ += "M" + (this._x1 = t) + "," + (this._y1 = e);
            else if (h > o)
                if (Math.abs(p * s - l * f) > o && a) {
                    var d = r - u,
                        y = i - c,
                        g = s * s + l * l,
                        v = d * d + y * y,
                        m = Math.sqrt(g),
                        b = Math.sqrt(h),
                        x = a * Math.tan((n - Math.acos((g + h - v) / (2 * m * b))) / 2),
                        w = x / b,
                        O = x / m;
                    Math.abs(w - 1) > o && (this._ += "L" + (t + w * f) + "," + (e + w * p)), this._ += "A" + a + "," + a + ",0,0," + +(p * d > f * y) + "," + (this._x1 = t + O * s) + "," + (this._y1 = e + O * l)
                } else this._ += "L" + (this._x1 = t) + "," + (this._y1 = e);
            else;
        },
        arc: function(t, e, r, u, c, s) {
            t = +t, e = +e, s = !!s;
            var l = (r = +r) * Math.cos(u),
                f = r * Math.sin(u),
                p = t + l,
                h = e + f,
                d = 1 ^ s,
                y = s ? u - c : c - u;
            if (r < 0) throw new Error("negative radius: " + r);
            null === this._x1 ? this._ += "M" + p + "," + h : (Math.abs(this._x1 - p) > o || Math.abs(this._y1 - h) > o) && (this._ += "L" + p + "," + h), r && (y < 0 && (y = y % i + i), y > a ? this._ += "A" + r + "," + r + ",0,1," + d + "," + (t - l) + "," + (e - f) + "A" + r + "," + r + ",0,1," + d + "," + (this._x1 = p) + "," + (this._y1 = h) : y > o && (this._ += "A" + r + "," + r + ",0," + +(y >= n) + "," + d + "," + (this._x1 = t + r * Math.cos(c)) + "," + (this._y1 = e + r * Math.sin(c))))
        },
        rect: function(t, e, r, n) {
            this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +e) + "h" + +r + "v" + +n + "h" + -r + "Z"
        },
        toString: function() {
            return this._
        }
    };
    var s = c
})), n.register("3jKsB", (function(t, r) {
    e(t.exports, "default", (function() {
        return o
    }));
    var i = n("bgq52"),
        o = {
            draw: function(t, e) {
                var r = Math.sqrt(e / i.pi);
                t.moveTo(r, 0), t.arc(0, 0, r, 0, i.tau)
            }
        }
})), n.register("bgq52", (function(t, r) {
    e(t.exports, "pi", (function() {
        return n
    })), e(t.exports, "tau", (function() {
        return i
    }));
    Math.abs, Math.atan2, Math.cos, Math.max, Math.min, Math.sin, Math.sqrt;
    var n = Math.PI,
        i = 2 * n
})), n.register("c9nlE", (function(t, r) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = {
        draw: function(t, e) {
            var r = Math.sqrt(e / 5) / 2;
            t.moveTo(-3 * r, -r), t.lineTo(-r, -r), t.lineTo(-r, -3 * r), t.lineTo(r, -3 * r), t.lineTo(r, -r), t.lineTo(3 * r, -r), t.lineTo(3 * r, r), t.lineTo(r, r), t.lineTo(r, 3 * r), t.lineTo(-r, 3 * r), t.lineTo(-r, r), t.lineTo(-3 * r, r), t.closePath()
        }
    }
})), n.register("cnciJ", (function(t, r) {
    e(t.exports, "default", (function() {
        return o
    }));
    var n = Math.sqrt(1 / 3),
        i = 2 * n,
        o = {
            draw: function(t, e) {
                var r = Math.sqrt(e / i),
                    o = r * n;
                t.moveTo(0, -r), t.lineTo(o, 0), t.lineTo(0, r), t.lineTo(-o, 0), t.closePath()
            }
        }
})), n.register("1s5pM", (function(t, r) {
    e(t.exports, "default", (function() {
        return c
    }));
    var i = n("bgq52"),
        o = Math.sin(i.pi / 10) / Math.sin(7 * i.pi / 10),
        a = Math.sin(i.tau / 10) * o,
        u = -Math.cos(i.tau / 10) * o,
        c = {
            draw: function(t, e) {
                var r = Math.sqrt(.8908130915292852 * e),
                    n = a * r,
                    o = u * r;
                t.moveTo(0, -r), t.lineTo(n, o);
                for (var c = 1; c < 5; ++c) {
                    var s = i.tau * c / 5,
                        l = Math.cos(s),
                        f = Math.sin(s);
                    t.lineTo(f * r, -l * r), t.lineTo(l * n - f * o, f * n + l * o)
                }
                t.closePath()
            }
        }
})), n.register("a91N6", (function(t, r) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = {
        draw: function(t, e) {
            var r = Math.sqrt(e),
                n = -r / 2;
            t.rect(n, n, r, r)
        }
    }
})), n.register("6OWtl", (function(t, r) {
    e(t.exports, "default", (function() {
        return i
    }));
    var n = Math.sqrt(3),
        i = {
            draw: function(t, e) {
                var r = -Math.sqrt(e / (3 * n));
                t.moveTo(0, 2 * r), t.lineTo(-n * r, -r), t.lineTo(n * r, -r), t.closePath()
            }
        }
})), n.register("3iRiV", (function(t, r) {
    e(t.exports, "default", (function() {
        return u
    }));
    var n = -.5,
        i = Math.sqrt(3) / 2,
        o = 1 / Math.sqrt(12),
        a = 3 * (o / 2 + 1),
        u = {
            draw: function(t, e) {
                var r = Math.sqrt(e / a),
                    u = r / 2,
                    c = r * o,
                    s = u,
                    l = r * o + r,
                    f = -s,
                    p = l;
                t.moveTo(u, c), t.lineTo(s, l), t.lineTo(f, p), t.lineTo(n * u - i * c, i * u + n * c), t.lineTo(n * s - i * l, i * s + n * l), t.lineTo(n * f - i * p, i * f + n * p), t.lineTo(n * u + i * c, n * c - i * u), t.lineTo(n * s + i * l, n * l - i * s), t.lineTo(n * f + i * p, n * p - i * f), t.closePath()
            }
        }
})), n.register("ilbb7", (function(t, r) {
    e(t.exports, "BarChart", (function() {
        return s
    }));
    var i = n("34HEf"),
        o = n("lUi4l"),
        a = n("7vRaZ"),
        u = n("dLLTI"),
        c = n("hj1BI"),
        s = (0, i.generateCategoricalChart)({
            chartName: "BarChart",
            GraphicalChild: o.Bar,
            defaultTooltipEventType: "axis",
            validateTooltipEventTypes: ["axis", "item"],
            axisComponents: [{
                axisType: "xAxis",
                AxisComp: a.XAxis
            }, {
                axisType: "yAxis",
                AxisComp: u.YAxis
            }],
            formatAxisMap: c.formatAxisMap
        })
})), n.register("34HEf", (function(r, i) {
    e(r.exports, "generateCategoricalChart", (function() {
        return lt
    }));
    var o = n("f0gtY"),
        a = n("fAiTI"),
        u = n("hRZ1R"),
        c = n("buapA"),
        s = n("gma5L"),
        l = n("hq7xU"),
        f = n("hvrw6"),
        p = n("bZbba"),
        h = n("2TgJe"),
        d = n("42aAU"),
        y = n("fywoC"),
        g = n("fe1on"),
        v = n("j8QEj"),
        m = n("fYpyz"),
        b = n("igxQN"),
        x = n("eYRDm"),
        w = n("7Owgo"),
        O = n("jdVdJ"),
        j = n("jCIy6"),
        _ = n("bzQF8"),
        S = n("5W6gH"),
        A = n("kEum4"),
        k = n("9luuN"),
        E = n("fOYuv"),
        M = n("bC8Qw"),
        P = n("fI5bH"),
        C = n("kjJfJ"),
        T = n("alOxC"),
        I = n("4jZP4"),
        N = n("d6aDM"),
        D = n("3rsHt"),
        R = n("iquK2");

    function B(t) {
        return B = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, B(t)
    }

    function L(t, e) {
        return function(t) {
            if (Array.isArray(t)) return t
        }(t) || function(t, e) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
            var r = [],
                n = !0,
                i = !1,
                o = void 0;
            try {
                for (var a, u = t[Symbol.iterator](); !(n = (a = u.next()).done) && (r.push(a.value), !e || r.length !== e); n = !0);
            } catch (t) {
                i = !0, o = t
            } finally {
                try {
                    n || null == u.return || u.return()
                } finally {
                    if (i) throw o
                }
            }
            return r
        }(t, e) || K(t, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function z() {
        return z = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
            }
            return t
        }, z.apply(this, arguments)
    }

    function U(t, e) {
        if (null == t) return {};
        var r, n, i = function(t, e) {
            if (null == t) return {};
            var r, n, i = {},
                o = Object.keys(t);
            for (n = 0; n < o.length; n++) r = o[n], e.indexOf(r) >= 0 || (i[r] = t[r]);
            return i
        }(t, e);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(t);
            for (n = 0; n < o.length; n++) r = o[n], e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (i[r] = t[r])
        }
        return i
    }

    function F(t, e) {
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    function q(t, e) {
        return q = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        }, q(t, e)
    }

    function H(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var r, n = W(t);
            if (e) {
                var i = W(this).constructor;
                r = Reflect.construct(n, arguments, i)
            } else r = n.apply(this, arguments);
            return V(this, r)
        }
    }

    function V(t, e) {
        return !e || "object" !== B(e) && "function" != typeof e ? G(t) : e
    }

    function G(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function W(t) {
        return W = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }, W(t)
    }

    function Y(t) {
        return function(t) {
            if (Array.isArray(t)) return X(t)
        }(t) || function(t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
        }(t) || K(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function K(t, e) {
        if (t) {
            if ("string" == typeof t) return X(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? X(t, e) : void 0
        }
    }

    function X(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n
    }

    function J(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), r.push.apply(r, n)
        }
        return r
    }

    function Q(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2 ? J(Object(r), !0).forEach((function(e) {
                Z(t, e, r[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : J(Object(r)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
            }))
        }
        return t
    }

    function Z(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = r, t
    }
    var $ = {
            xAxis: ["bottom", "top"],
            yAxis: ["left", "right"]
        },
        tt = {
            x: 0,
            y: 0
        },
        et = Number.isFinite ? Number.isFinite : isFinite,
        rt = "function" == typeof requestAnimationFrame ? requestAnimationFrame : "function" == typeof setImmediate ? setImmediate : setTimeout,
        nt = "function" == typeof cancelAnimationFrame ? cancelAnimationFrame : "function" == typeof clearImmediate ? clearImmediate : clearTimeout,
        it = function(t, e, r) {
            var n = e.graphicalItems,
                i = e.dataStartIndex,
                o = e.dataEndIndex,
                a = (n || []).reduce((function(t, e) {
                    var r = e.props.data;
                    return r && r.length ? [].concat(Y(t), Y(r)) : t
                }), []);
            return a && a.length > 0 ? a : r && r.props && r.props.data && r.props.data.length > 0 ? r.props.data : t && t.length && (0, P.isNumber)(i) && (0, P.isNumber)(o) ? t.slice(i, o + 1) : []
        },
        ot = function(t, e, r, n) {
            var i = t.graphicalItems,
                o = t.tooltipAxis,
                a = it(e, t);
            return r < 0 || !i || !i.length || r >= a.length ? null : i.reduce((function(t, e) {
                if (e.props.hide) return t;
                var i, u = e.props.data;
                if (o.dataKey && !o.allowDuplicatedCategory) {
                    var c = void 0 === u ? a : u;
                    i = (0, P.findEntryInArray)(c, o.dataKey, n)
                } else i = u && u[r] || a[r];
                return i ? [].concat(Y(t), [(0, C.getTooltipItem)(e, i)]) : t
            }), [])
        },
        at = function(t, e, r, n) {
            var i = n || {
                    x: t.chartX,
                    y: t.chartY
                },
                o = function(t, e) {
                    return "horizontal" === e ? t.x : "vertical" === e ? t.y : "centric" === e ? t.angle : t.radius
                }(i, r),
                a = t.orderedTooltipTicks,
                u = t.tooltipAxis,
                c = t.tooltipTicks,
                s = (0, C.calculateActiveTickIndex)(o, a, c, u);
            if (s >= 0 && c) {
                var l = c[s] && c[s].value,
                    f = ot(t, e, s, l),
                    p = function(t, e, r, n) {
                        var i = e.find((function(t) {
                            return t && t.index === r
                        }));
                        if (i) {
                            if ("horizontal" === t) return {
                                x: i.coordinate,
                                y: n.y
                            };
                            if ("vertical" === t) return {
                                x: n.x,
                                y: i.coordinate
                            };
                            if ("centric" === t) {
                                var o = i.coordinate,
                                    a = n.radius;
                                return Q(Q(Q({}, n), (0, I.polarToCartesian)(n.cx, n.cy, a, o)), {}, {
                                    angle: o,
                                    radius: a
                                })
                            }
                            var u = i.coordinate,
                                c = n.angle;
                            return Q(Q(Q({}, n), (0, I.polarToCartesian)(n.cx, n.cy, u, c)), {}, {
                                angle: c,
                                radius: u
                            })
                        }
                        return tt
                    }(r, a, s, i);
                return {
                    activeTooltipIndex: s,
                    activeLabel: l,
                    activePayload: f,
                    activeCoordinate: p
                }
            }
            return null
        },
        ut = function(e, r) {
            var n = r.axisType,
                i = void 0 === n ? "xAxis" : n,
                o = r.AxisComp,
                a = r.graphicalItems,
                u = r.stackGroups,
                c = r.dataStartIndex,
                s = r.dataEndIndex,
                h = e.children,
                d = "".concat(i, "Id"),
                y = (0, A.findAllByType)(h, o),
                g = {};
            return y && y.length ? g = function(e, r) {
                var n = r.axes,
                    i = r.graphicalItems,
                    o = r.axisType,
                    a = r.axisIdKey,
                    u = r.stackGroups,
                    c = r.dataStartIndex,
                    s = r.dataEndIndex,
                    l = e.layout,
                    h = e.children,
                    d = e.stackOffset,
                    y = (0, C.isCategoricalAxis)(l, o);
                return n.reduce((function(r, n) {
                    var g = n.props,
                        v = g.type,
                        m = g.dataKey,
                        b = g.allowDataOverflow,
                        x = g.allowDuplicatedCategory,
                        w = g.scale,
                        O = g.ticks,
                        j = n.props[a],
                        _ = it(e.data, {
                            graphicalItems: i.filter((function(t) {
                                return t.props[a] === j
                            })),
                            dataStartIndex: c,
                            dataEndIndex: s
                        }),
                        S = _.length;
                    if (!r[j]) {
                        var A, k, E;
                        if (m) {
                            if (A = (0, C.getDomainOfDataByKey)(_, m, v), "category" === v && y) {
                                var M = (0, P.hasDuplicate)(A);
                                x && M ? (k = A, A = t(f)(0, S)) : x || (A = (0, C.parseDomainOfCategoryAxis)(n.props.domain, A, n).reduce((function(t, e) {
                                    return t.indexOf(e) >= 0 ? t : [].concat(Y(t), [e])
                                }), []))
                            } else if ("category" === v) A = x ? A.filter((function(e) {
                                return "" !== e && !t(p)(e)
                            })) : (0, C.parseDomainOfCategoryAxis)(n.props.domain, A, n).reduce((function(e, r) {
                                return e.indexOf(r) >= 0 || "" === r || t(p)(r) ? e : [].concat(Y(e), [r])
                            }), []);
                            else if ("number" === v) {
                                var I = (0, C.parseErrorBarsOfAxis)(_, i.filter((function(t) {
                                    return t.props[a] === j && !t.props.hide
                                })), m, o, l);
                                I && (A = I)
                            }!y || "number" !== v && "auto" === w || (E = (0, C.getDomainOfDataByKey)(_, m, "category"))
                        } else A = y ? t(f)(0, S) : u && u[j] && u[j].hasStack && "number" === v ? "expand" === d ? [0, 1] : (0, C.getDomainOfStackGroups)(u[j].stackGroups, c, s) : (0, C.getDomainOfItemsWithSameAxis)(_, i.filter((function(t) {
                            return t.props[a] === j && !t.props.hide
                        })), v, l, !0);
                        if ("number" === v) A = (0, T.detectReferenceElementsDomain)(h, A, j, o, O), n.props.domain && (A = (0, C.parseSpecifiedDomain)(n.props.domain, A, b));
                        else if ("category" === v && n.props.domain) {
                            var N = n.props.domain;
                            A.every((function(t) {
                                return N.indexOf(t) >= 0
                            })) && (A = N)
                        }
                        return Q(Q({}, r), {}, Z({}, j, Q(Q({}, n.props), {}, {
                            axisType: o,
                            domain: A,
                            categoricalDomain: E,
                            duplicateDomain: k,
                            originalDomain: n.props.domain,
                            isCategorical: y,
                            layout: l
                        })))
                    }
                    return r
                }), {})
            }(e, {
                axes: y,
                graphicalItems: a,
                axisType: i,
                axisIdKey: d,
                stackGroups: u,
                dataStartIndex: c,
                dataEndIndex: s
            }) : a && a.length && (g = function(e, r) {
                var n = r.graphicalItems,
                    i = r.Axis,
                    o = r.axisType,
                    a = r.axisIdKey,
                    u = r.stackGroups,
                    c = r.dataStartIndex,
                    s = r.dataEndIndex,
                    p = e.layout,
                    h = e.children,
                    d = it(e.data, {
                        graphicalItems: n,
                        dataStartIndex: c,
                        dataEndIndex: s
                    }),
                    y = d.length,
                    g = (0, C.isCategoricalAxis)(p, o),
                    v = -1;
                return n.reduce((function(e, r) {
                    var m, b = r.props[a];
                    return e[b] ? e : (v++, g ? m = t(f)(0, y) : u && u[b] && u[b].hasStack ? (m = (0, C.getDomainOfStackGroups)(u[b].stackGroups, c, s), m = (0, T.detectReferenceElementsDomain)(h, m, b, o)) : (m = (0, C.parseSpecifiedDomain)(i.defaultProps.domain, (0, C.getDomainOfItemsWithSameAxis)(d, n.filter((function(t) {
                        return t.props[a] === b && !t.props.hide
                    })), "number", p), i.defaultProps.allowDataOverflow), m = (0, T.detectReferenceElementsDomain)(h, m, b, o)), Q(Q({}, e), {}, Z({}, b, Q(Q({
                        axisType: o
                    }, i.defaultProps), {}, {
                        hide: !0,
                        orientation: t(l)($, "".concat(o, ".").concat(v % 2), null),
                        domain: m,
                        originalDomain: i.defaultProps.domain,
                        isCategorical: g,
                        layout: p
                    }))))
                }), {})
            }(e, {
                Axis: o,
                graphicalItems: a,
                axisType: i,
                axisIdKey: d,
                stackGroups: u,
                dataStartIndex: c,
                dataEndIndex: s
            })), g
        },
        ct = function(e) {
            var r = e.children,
                n = e.defaultShowTooltip,
                i = (0, A.findChildByType)(r, E.Brush.displayName);
            return {
                chartX: 0,
                chartY: 0,
                dataStartIndex: i && i.props && i.props.startIndex || 0,
                dataEndIndex: i && i.props && i.props.endIndex || e.data && e.data.length - 1 || 0,
                activeTooltipIndex: -1,
                isTooltipActive: !t(p)(n) && n
            }
        },
        st = function(t) {
            return "horizontal" === t ? {
                numericAxisName: "yAxis",
                cateAxisName: "xAxis"
            } : "vertical" === t ? {
                numericAxisName: "xAxis",
                cateAxisName: "yAxis"
            } : "centric" === t ? {
                numericAxisName: "radiusAxis",
                cateAxisName: "angleAxis"
            } : {
                numericAxisName: "angleAxis",
                cateAxisName: "radiusAxis"
            }
        },
        lt = function(e) {
            var r, n, i = e.chartName,
                f = e.GraphicalChild,
                T = e.defaultTooltipEventType,
                B = void 0 === T ? "axis" : T,
                V = e.validateTooltipEventTypes,
                W = void 0 === V ? ["axis"] : V,
                K = e.axisComponents,
                X = e.legendContent,
                J = e.formatAxisMap,
                $ = e.defaultProps,
                lt = function(e, r) {
                    var n = r.graphicalItems,
                        i = r.stackGroups,
                        o = r.offset,
                        a = r.updateId,
                        u = r.dataStartIndex,
                        c = r.dataEndIndex,
                        s = e.barSize,
                        l = e.layout,
                        f = e.barGap,
                        h = e.barCategoryGap,
                        d = e.maxBarSize,
                        y = st(l),
                        g = y.numericAxisName,
                        v = y.cateAxisName,
                        m = function(t) {
                            return !(!t || !t.length) && t.some((function(t) {
                                var e = (0, A.getDisplayName)(t && t.type);
                                return e && e.indexOf("Bar") >= 0
                            }))
                        }(n),
                        b = m && (0, C.getBarSizeList)({
                            barSize: s,
                            stackGroups: i
                        }),
                        x = [];
                    return n.forEach((function(n, s) {
                        var y = it(e.data, {
                                dataStartIndex: u,
                                dataEndIndex: c
                            }, n),
                            m = n.props,
                            w = m.dataKey,
                            O = m.maxBarSize,
                            j = n.props["".concat(g, "Id")],
                            _ = n.props["".concat(v, "Id")],
                            S = K.reduce((function(t, e) {
                                var i, o = r["".concat(e.axisType, "Map")],
                                    a = n.props["".concat(e.axisType, "Id")],
                                    u = o && o[a];
                                return Q(Q({}, t), {}, (Z(i = {}, e.axisType, u), Z(i, "".concat(e.axisType, "Ticks"), (0, C.getTicksOfAxis)(u)), i))
                            }), {}),
                            k = S[v],
                            E = S["".concat(v, "Ticks")],
                            M = i && i[j] && i[j].hasStack && (0, C.getStackedDataOfItem)(n, i[j].stackGroups),
                            P = (0, A.getDisplayName)(n.type).indexOf("Bar") >= 0,
                            T = (0, C.getBandSizeOfAxis)(k, E),
                            I = [];
                        if (P) {
                            var N, D, R = t(p)(O) ? d : O,
                                B = null !== (N = null !== (D = (0, C.getBandSizeOfAxis)(k, E, !0)) && void 0 !== D ? D : R) && void 0 !== N ? N : 0;
                            I = (0, C.getBarPosition)({
                                barGap: f,
                                barCategoryGap: h,
                                bandSize: B !== T ? B : T,
                                sizeList: b[_],
                                maxBarSize: R
                            }), B !== T && (I = I.map((function(t) {
                                return Q(Q({}, t), {}, {
                                    position: Q(Q({}, t.position), {}, {
                                        offset: t.position.offset - B / 2
                                    })
                                })
                            })))
                        }
                        var L, z = n && n.type && n.type.getComposedData;
                        z && x.push({
                            props: Q(Q({}, z(Q(Q({}, S), {}, {
                                displayedData: y,
                                props: e,
                                dataKey: w,
                                item: n,
                                bandSize: T,
                                barPosition: I,
                                offset: o,
                                stackedData: M,
                                layout: l,
                                dataStartIndex: u,
                                dataEndIndex: c
                            }))), {}, (L = {
                                key: n.key || "item-".concat(s)
                            }, Z(L, g, S[g]), Z(L, v, S[v]), Z(L, "animationId", a), L)),
                            childIndex: (0, A.parseChildIndex)(n, e.children),
                            item: n
                        })
                    })), x
                },
                ft = function(e, r) {
                    var n = e.props,
                        o = e.dataStartIndex,
                        a = e.dataEndIndex,
                        u = e.updateId;
                    if (!(0, A.validateWidthHeight)({
                            props: n
                        })) return null;
                    var c = n.children,
                        p = n.layout,
                        h = n.stackOffset,
                        d = n.data,
                        y = n.reverseStackOrder,
                        g = st(p),
                        v = g.numericAxisName,
                        m = g.cateAxisName,
                        b = (0, A.findAllByType)(c, f),
                        w = (0, C.getStackGroupsByAxisId)(d, b, "".concat(v, "Id"), "".concat(m, "Id"), h, y),
                        O = K.reduce((function(t, e) {
                            var r = "".concat(e.axisType, "Map");
                            return Q(Q({}, t), {}, Z({}, r, ut(n, Q(Q({}, e), {}, {
                                graphicalItems: b,
                                stackGroups: e.axisType === v && w,
                                dataStartIndex: o,
                                dataEndIndex: a
                            }))))
                        }), {}),
                        j = function(e, r) {
                            var n = e.props,
                                i = e.graphicalItems,
                                o = e.xAxisMap,
                                a = void 0 === o ? {} : o,
                                u = e.yAxisMap,
                                c = void 0 === u ? {} : u,
                                s = n.width,
                                f = n.height,
                                p = n.children,
                                h = n.margin || {},
                                d = (0, A.findChildByType)(p, E.Brush.displayName),
                                y = (0, A.findChildByType)(p, x.Legend.displayName),
                                g = Object.keys(c).reduce((function(t, e) {
                                    var r = c[e],
                                        n = r.orientation;
                                    return r.mirror || r.hide ? t : Q(Q({}, t), {}, Z({}, n, t[n] + r.width))
                                }), {
                                    left: h.left || 0,
                                    right: h.right || 0
                                }),
                                v = Object.keys(a).reduce((function(e, r) {
                                    var n = a[r],
                                        i = n.orientation;
                                    return n.mirror || n.hide ? e : Q(Q({}, e), {}, Z({}, i, t(l)(e, "".concat(i)) + n.height))
                                }), {
                                    top: h.top || 0,
                                    bottom: h.bottom || 0
                                }),
                                m = Q(Q({}, v), g),
                                b = m.bottom;
                            return d && (m.bottom += d.props.height || E.Brush.defaultProps.height), y && r && (m = (0, C.appendOffsetOfLegend)(m, i, n, r)), Q(Q({
                                brushBottom: b
                            }, m), {}, {
                                width: s - m.left - m.right,
                                height: f - m.top - m.bottom
                            })
                        }(Q(Q({}, O), {}, {
                            props: n,
                            graphicalItems: b
                        }), null == r ? void 0 : r.legendBBox);
                    Object.keys(O).forEach((function(t) {
                        O[t] = J(n, O[t], j, t.replace("Map", ""), i)
                    }));
                    var _, S, k, M = O["".concat(m, "Map")],
                        T = (_ = M, S = (0, P.getAnyElementOfObject)(_), {
                            tooltipTicks: k = (0, C.getTicksOfAxis)(S, !1, !0),
                            orderedTooltipTicks: t(s)(k, (function(t) {
                                return t.coordinate
                            })),
                            tooltipAxis: S,
                            tooltipAxisBandSize: (0, C.getBandSizeOfAxis)(S, k)
                        }),
                        I = lt(n, Q(Q({}, O), {}, {
                            dataStartIndex: o,
                            dataEndIndex: a,
                            updateId: u,
                            graphicalItems: b,
                            stackGroups: w,
                            offset: j
                        }));
                    return Q(Q({
                        formattedGraphicalItems: I,
                        graphicalItems: b,
                        offset: j,
                        stackGroups: w
                    }, T), O)
                };
            return n = r = function(e) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && q(t, e)
                }(m, e);
                var r, n, s, f = H(m);

                function m(e) {
                    var r;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, m), (r = f.call(this, e)).uniqueChartId = void 0, r.clipPathId = void 0, r.legendInstance = void 0, r.deferId = void 0, r.container = void 0, r.clearDeferId = function() {
                        !t(p)(r.deferId) && nt && nt(r.deferId), r.deferId = null
                    }, r.handleLegendBBoxUpdate = function(t) {
                        if (t) {
                            var e = r.state,
                                n = e.dataStartIndex,
                                i = e.dataEndIndex,
                                o = e.updateId;
                            r.setState(Q({
                                legendBBox: t
                            }, ft({
                                props: r.props,
                                dataStartIndex: n,
                                dataEndIndex: i,
                                updateId: o
                            }, Q(Q({}, r.state), {}, {
                                legendBBox: t
                            }))))
                        }
                    }, r.handleReceiveSyncEvent = function(t, e, n) {
                        r.props.syncId === t && e !== r.uniqueChartId && (r.clearDeferId(), r.deferId = rt && rt(r.applySyncEvent.bind(G(r), n)))
                    }, r.handleBrushChange = function(t) {
                        var e = t.startIndex,
                            n = t.endIndex;
                        if (e !== r.state.dataStartIndex || n !== r.state.dataEndIndex) {
                            var i = r.state.updateId;
                            r.setState((function() {
                                return Q({
                                    dataStartIndex: e,
                                    dataEndIndex: n
                                }, ft({
                                    props: r.props,
                                    dataStartIndex: e,
                                    dataEndIndex: n,
                                    updateId: i
                                }, r.state))
                            })), r.triggerSyncEvent({
                                dataStartIndex: e,
                                dataEndIndex: n
                            })
                        }
                    }, r.handleMouseEnter = function(e) {
                        var n = r.props.onMouseEnter,
                            i = r.getMouseInfo(e);
                        if (i) {
                            var o = Q(Q({}, i), {}, {
                                isTooltipActive: !0
                            });
                            r.setState(o), r.triggerSyncEvent(o), t(u)(n) && n(o, e)
                        }
                    }, r.triggeredAfterMouseMove = function(e) {
                        var n = r.props.onMouseMove,
                            i = r.getMouseInfo(e),
                            o = i ? Q(Q({}, i), {}, {
                                isTooltipActive: !0
                            }) : {
                                isTooltipActive: !1
                            };
                        r.setState(o), r.triggerSyncEvent(o), t(u)(n) && n(o, e)
                    }, r.handleItemMouseEnter = function(t) {
                        r.setState((function() {
                            return {
                                isTooltipActive: !0,
                                activeItem: t,
                                activePayload: t.tooltipPayload,
                                activeCoordinate: t.tooltipPosition || {
                                    x: t.cx,
                                    y: t.cy
                                }
                            }
                        }))
                    }, r.handleItemMouseLeave = function() {
                        r.setState((function() {
                            return {
                                isTooltipActive: !1
                            }
                        }))
                    }, r.handleMouseMove = function(e) {
                        e && t(u)(e.persist) && e.persist(), r.triggeredAfterMouseMove(e)
                    }, r.handleMouseLeave = function(e) {
                        var n = r.props.onMouseLeave,
                            i = {
                                isTooltipActive: !1
                            };
                        r.setState(i), r.triggerSyncEvent(i), t(u)(n) && n(i, e), r.cancelThrottledTriggerAfterMouseMove()
                    }, r.handleOuterEvent = function(e) {
                        var n = (0, A.getReactEventByType)(e),
                            i = t(l)(r.props, "".concat(n));
                        n && t(u)(i) && i(/.*touch.*/i.test(n) ? r.getMouseInfo(e.changedTouches[0]) : r.getMouseInfo(e), e)
                    }, r.handleClick = function(e) {
                        var n = r.props.onClick,
                            i = r.getMouseInfo(e);
                        if (i) {
                            var o = Q(Q({}, i), {}, {
                                isTooltipActive: !0
                            });
                            r.setState(o), r.triggerSyncEvent(o), t(u)(n) && n(o, e)
                        }
                    }, r.handleMouseDown = function(e) {
                        var n = r.props.onMouseDown;
                        t(u)(n) && n(r.getMouseInfo(e), e)
                    }, r.handleMouseUp = function(e) {
                        var n = r.props.onMouseUp;
                        t(u)(n) && n(r.getMouseInfo(e), e)
                    }, r.handleTouchMove = function(t) {
                        null != t.changedTouches && t.changedTouches.length > 0 && r.handleMouseMove(t.changedTouches[0])
                    }, r.handleTouchStart = function(t) {
                        null != t.changedTouches && t.changedTouches.length > 0 && r.handleMouseDown(t.changedTouches[0])
                    }, r.handleTouchEnd = function(t) {
                        null != t.changedTouches && t.changedTouches.length > 0 && r.handleMouseUp(t.changedTouches[0])
                    }, r.verticalCoordinatesGenerator = function(t) {
                        var e = t.xAxis,
                            r = t.width,
                            n = t.height,
                            i = t.offset;
                        return (0, C.getCoordinatesOfGrid)(k.CartesianAxis.getTicks(Q(Q(Q({}, k.CartesianAxis.defaultProps), e), {}, {
                            ticks: (0, C.getTicksOfAxis)(e, !0),
                            viewBox: {
                                x: 0,
                                y: 0,
                                width: r,
                                height: n
                            }
                        })), i.left, i.left + i.width)
                    }, r.horizontalCoordinatesGenerator = function(t) {
                        var e = t.yAxis,
                            r = t.width,
                            n = t.height,
                            i = t.offset;
                        return (0, C.getCoordinatesOfGrid)(k.CartesianAxis.getTicks(Q(Q(Q({}, k.CartesianAxis.defaultProps), e), {}, {
                            ticks: (0, C.getTicksOfAxis)(e, !0),
                            viewBox: {
                                x: 0,
                                y: 0,
                                width: r,
                                height: n
                            }
                        })), i.top, i.top + i.height)
                    }, r.axesTicksGenerator = function(t) {
                        return (0, C.getTicksOfAxis)(t, !0)
                    }, r.renderCursor = function(t) {
                        var e = r.state,
                            n = e.isTooltipActive,
                            o = e.activeCoordinate,
                            a = e.activePayload,
                            u = e.offset,
                            c = e.activeTooltipIndex,
                            s = r.getTooltipEventType();
                        if (!t || !t.props.cursor || !n || !o || "ScatterChart" !== i && "axis" !== s) return null;
                        var l, f = r.props.layout,
                            p = w.Curve;
                        if ("ScatterChart" === i) l = o, p = O.Cross;
                        else if ("BarChart" === i) l = r.getCursorRectangle(), p = S.Rectangle;
                        else if ("radial" === f) {
                            var h = r.getCursorPoints(),
                                d = h.cx,
                                g = h.cy,
                                v = h.radius;
                            l = {
                                cx: d,
                                cy: g,
                                startAngle: h.startAngle,
                                endAngle: h.endAngle,
                                innerRadius: v,
                                outerRadius: v
                            }, p = j.Sector
                        } else l = {
                            points: r.getCursorPoints()
                        }, p = w.Curve;
                        var m = t.key || "_recharts-cursor",
                            b = Q(Q(Q(Q({
                                stroke: "#ccc",
                                pointerEvents: "none"
                            }, u), l), (0, R.filterProps)(t.props.cursor)), {}, {
                                payload: a,
                                payloadIndex: c,
                                key: m,
                                className: "recharts-tooltip-cursor"
                            });
                        return (0, y.isValidElement)(t.props.cursor) ? (0, y.cloneElement)(t.props.cursor, b) : (0, y.createElement)(p, b)
                    }, r.renderPolarAxis = function(e, n, i) {
                        var o = t(l)(e, "type.axisType"),
                            a = t(l)(r.state, "".concat(o, "Map"))[e.props["".concat(o, "Id")]];
                        return (0, y.cloneElement)(e, Q(Q({}, a), {}, {
                            className: o,
                            key: e.key || "".concat(n, "-").concat(i),
                            ticks: (0, C.getTicksOfAxis)(a, !0)
                        }))
                    }, r.renderXAxis = function(t, e, n) {
                        var i = r.state.xAxisMap[t.props.xAxisId];
                        return r.renderAxis(i, t, e, n)
                    }, r.renderYAxis = function(t, e, n) {
                        var i = r.state.yAxisMap[t.props.yAxisId];
                        return r.renderAxis(i, t, e, n)
                    }, r.renderGrid = function(e) {
                        var n = r.state,
                            i = n.xAxisMap,
                            u = n.yAxisMap,
                            c = n.offset,
                            s = r.props,
                            l = s.width,
                            f = s.height,
                            p = (0, P.getAnyElementOfObject)(i),
                            h = t(a)(u, (function(e) {
                                return t(o)(e.domain, et)
                            })) || (0, P.getAnyElementOfObject)(u),
                            d = e.props || {};
                        return (0, y.cloneElement)(e, {
                            key: e.key || "grid",
                            x: (0, P.isNumber)(d.x) ? d.x : c.left,
                            y: (0, P.isNumber)(d.y) ? d.y : c.top,
                            width: (0, P.isNumber)(d.width) ? d.width : c.width,
                            height: (0, P.isNumber)(d.height) ? d.height : c.height,
                            xAxis: p,
                            yAxis: h,
                            offset: c,
                            chartWidth: l,
                            chartHeight: f,
                            verticalCoordinatesGenerator: d.verticalCoordinatesGenerator || r.verticalCoordinatesGenerator,
                            horizontalCoordinatesGenerator: d.horizontalCoordinatesGenerator || r.horizontalCoordinatesGenerator
                        })
                    }, r.renderPolarGrid = function(e) {
                        var n = e.props,
                            i = n.radialLines,
                            o = n.polarAngles,
                            a = n.polarRadius,
                            u = r.state,
                            c = u.radiusAxisMap,
                            s = u.angleAxisMap,
                            l = (0, P.getAnyElementOfObject)(c),
                            f = (0, P.getAnyElementOfObject)(s),
                            p = f.cx,
                            h = f.cy,
                            g = f.innerRadius,
                            v = f.outerRadius;
                        return (0, y.cloneElement)(e, {
                            polarAngles: t(d)(o) ? o : (0, C.getTicksOfAxis)(f, !0).map((function(t) {
                                return t.coordinate
                            })),
                            polarRadius: t(d)(a) ? a : (0, C.getTicksOfAxis)(l, !0).map((function(t) {
                                return t.coordinate
                            })),
                            cx: p,
                            cy: h,
                            innerRadius: g,
                            outerRadius: v,
                            key: e.key || "polar-grid",
                            radialLines: i
                        })
                    }, r.renderLegend = function() {
                        var t = r.state.formattedGraphicalItems,
                            e = r.props,
                            n = e.children,
                            i = e.width,
                            o = e.height,
                            a = r.props.margin || {},
                            u = i - (a.left || 0) - (a.right || 0),
                            c = (0, C.getLegendProps)({
                                children: n,
                                formattedGraphicalItems: t,
                                legendWidth: u,
                                legendContent: X
                            });
                        if (!c) return null;
                        var s = c.item,
                            l = U(c, ["item"]);
                        return (0, y.cloneElement)(s, Q(Q({}, l), {}, {
                            chartWidth: i,
                            chartHeight: o,
                            margin: a,
                            ref: function(t) {
                                r.legendInstance = t
                            },
                            onBBoxUpdate: r.handleLegendBBoxUpdate
                        }))
                    }, r.renderTooltip = function() {
                        var t = r.props.children,
                            e = (0, A.findChildByType)(t, b.Tooltip.displayName);
                        if (!e) return null;
                        var n = r.state,
                            i = n.isTooltipActive,
                            o = n.activeCoordinate,
                            a = n.activePayload,
                            u = n.activeLabel,
                            c = n.offset;
                        return (0, y.cloneElement)(e, {
                            viewBox: Q(Q({}, c), {}, {
                                x: c.left,
                                y: c.top
                            }),
                            active: i,
                            label: u,
                            payload: i ? a : [],
                            coordinate: o
                        })
                    }, r.renderBrush = function(t) {
                        var e = r.props,
                            n = e.margin,
                            i = e.data,
                            o = r.state,
                            a = o.offset,
                            u = o.dataStartIndex,
                            c = o.dataEndIndex,
                            s = o.updateId;
                        return (0, y.cloneElement)(t, {
                            key: t.key || "_recharts-brush",
                            onChange: (0, C.combineEventHandlers)(r.handleBrushChange, null, t.props.onChange),
                            data: i,
                            x: (0, P.isNumber)(t.props.x) ? t.props.x : a.left,
                            y: (0, P.isNumber)(t.props.y) ? t.props.y : a.top + a.height + a.brushBottom - (n.bottom || 0),
                            width: (0, P.isNumber)(t.props.width) ? t.props.width : a.width,
                            startIndex: u,
                            endIndex: c,
                            updateId: "brush-".concat(s)
                        })
                    }, r.renderReferenceElement = function(t, e, n) {
                        if (!t) return null;
                        var i = G(r).clipPathId,
                            o = r.state,
                            a = o.xAxisMap,
                            u = o.yAxisMap,
                            c = o.offset,
                            s = t.props,
                            l = s.xAxisId,
                            f = s.yAxisId;
                        return (0, y.cloneElement)(t, {
                            key: t.key || "".concat(e, "-").concat(n),
                            xAxis: a[l],
                            yAxis: u[f],
                            viewBox: {
                                x: c.left,
                                y: c.top,
                                width: c.width,
                                height: c.height
                            },
                            clipPathId: i
                        })
                    }, r.renderActivePoints = function(t) {
                        var e = t.item,
                            r = t.activePoint,
                            n = t.basePoint,
                            i = t.childIndex,
                            o = t.isRange,
                            a = [],
                            u = e.props.key,
                            c = e.item.props,
                            s = c.activeDot,
                            l = Q(Q({
                                index: i,
                                dataKey: c.dataKey,
                                cx: r.x,
                                cy: r.y,
                                r: 4,
                                fill: (0, C.getMainColorOfGraphicItem)(e.item),
                                strokeWidth: 2,
                                stroke: "#fff",
                                payload: r.payload,
                                value: r.value,
                                key: "".concat(u, "-activePoint-").concat(i)
                            }, (0, R.filterProps)(s)), (0, R.adaptEventHandlers)(s));
                        return a.push(m.renderActiveDot(s, l)), n ? a.push(m.renderActiveDot(s, Q(Q({}, l), {}, {
                            cx: n.x,
                            cy: n.y,
                            key: "".concat(u, "-basePoint-").concat(i)
                        }))) : o && a.push(null), a
                    }, r.renderGraphicChild = function(e, n, i) {
                        var o = r.filterFormatItem(e, n, i);
                        if (!o) return null;
                        var a = r.getTooltipEventType(),
                            u = r.state,
                            c = u.isTooltipActive,
                            s = u.tooltipAxis,
                            l = u.activeTooltipIndex,
                            f = u.activeLabel,
                            h = r.props.children,
                            d = (0, A.findChildByType)(h, b.Tooltip.displayName),
                            g = o.props,
                            v = g.points,
                            m = g.isRange,
                            x = g.baseLine,
                            w = o.item.props,
                            O = w.activeDot,
                            j = !w.hide && c && d && O && l >= 0,
                            _ = {};
                        "axis" !== a && d && "click" === d.props.trigger ? _ = {
                            onClick: (0, C.combineEventHandlers)(r.handleItemMouseEnter, null, e.props.onCLick)
                        } : "axis" !== a && (_ = {
                            onMouseLeave: (0, C.combineEventHandlers)(r.handleItemMouseLeave, null, e.props.onMouseLeave),
                            onMouseEnter: (0, C.combineEventHandlers)(r.handleItemMouseEnter, null, e.props.onMouseEnter)
                        });
                        var S = (0, y.cloneElement)(e, Q(Q({}, o.props), _));
                        if (j) {
                            var k, E;
                            if (s.dataKey && !s.allowDuplicatedCategory) {
                                var M = "function" == typeof s.dataKey ? function(t) {
                                    return "function" == typeof s.dataKey ? s.dataKey(t.payload) : null
                                } : "payload.".concat(s.dataKey.toString());
                                k = (0, P.findEntryInArray)(v, M, f), E = m && x && (0, P.findEntryInArray)(x, M, f)
                            } else k = v[l], E = m && x && x[l];
                            if (!t(p)(k)) return [S].concat(Y(r.renderActivePoints({
                                item: o,
                                activePoint: k,
                                basePoint: E,
                                childIndex: l,
                                isRange: m
                            })))
                        }
                        return m ? [S, null, null] : [S, null]
                    }, r.renderCustomized = function(t, e, n) {
                        return (0, y.cloneElement)(t, Q(Q({
                            key: "recharts-customized-".concat(n)
                        }, r.props), r.state))
                    }, r.uniqueChartId = t(p)(e.id) ? (0, P.uniqueId)("recharts") : e.id, r.clipPathId = "".concat(r.uniqueChartId, "-clip"), e.throttleDelay && (r.triggeredAfterMouseMove = t(c)(r.triggeredAfterMouseMove, e.throttleDelay)), r.state = {}, r
                }
                return r = m, (n = [{
                    key: "componentDidMount",
                    value: function() {
                        t(p)(this.props.syncId) || this.addListener()
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function(e) {
                        t(p)(e.syncId) && !t(p)(this.props.syncId) && this.addListener(), !t(p)(e.syncId) && t(p)(this.props.syncId) && this.removeListener()
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.clearDeferId(), t(p)(this.props.syncId) || this.removeListener(), this.cancelThrottledTriggerAfterMouseMove()
                    }
                }, {
                    key: "cancelThrottledTriggerAfterMouseMove",
                    value: function() {
                        "function" == typeof this.triggeredAfterMouseMove.cancel && this.triggeredAfterMouseMove.cancel()
                    }
                }, {
                    key: "getTooltipEventType",
                    value: function() {
                        var e = (0, A.findChildByType)(this.props.children, b.Tooltip.displayName);
                        if (e && t(h)(e.props.shared)) {
                            var r = e.props.shared ? "axis" : "item";
                            return W.indexOf(r) >= 0 ? r : B
                        }
                        return B
                    }
                }, {
                    key: "getMouseInfo",
                    value: function(t) {
                        if (!this.container) return null;
                        var e = (0, M.getOffset)(this.container),
                            r = (0, M.calculateChartCoordinate)(t, e),
                            n = this.inRange(r.chartX, r.chartY);
                        if (!n) return null;
                        var i = this.state,
                            o = i.xAxisMap,
                            a = i.yAxisMap;
                        if ("axis" !== this.getTooltipEventType() && o && a) {
                            var u = (0, P.getAnyElementOfObject)(o).scale,
                                c = (0, P.getAnyElementOfObject)(a).scale,
                                s = u && u.invert ? u.invert(r.chartX) : null,
                                l = c && c.invert ? c.invert(r.chartY) : null;
                            return Q(Q({}, r), {}, {
                                xValue: s,
                                yValue: l
                            })
                        }
                        var f = at(this.state, this.props.data, this.props.layout, n);
                        return f ? Q(Q({}, r), f) : null
                    }
                }, {
                    key: "getCursorRectangle",
                    value: function() {
                        var t = this.props.layout,
                            e = this.state,
                            r = e.activeCoordinate,
                            n = e.offset,
                            i = e.tooltipAxisBandSize,
                            o = i / 2;
                        return {
                            stroke: "none",
                            fill: "#ccc",
                            x: "horizontal" === t ? r.x - o : n.left + .5,
                            y: "horizontal" === t ? n.top + .5 : r.y - o,
                            width: "horizontal" === t ? i : n.width - 1,
                            height: "horizontal" === t ? n.height - 1 : i
                        }
                    }
                }, {
                    key: "getCursorPoints",
                    value: function() {
                        var e, r, n, i, o = this.props.layout,
                            a = this.state,
                            u = a.activeCoordinate,
                            c = a.offset;
                        if ("horizontal" === o) n = e = u.x, r = c.top, i = c.top + c.height;
                        else if ("vertical" === o) i = r = u.y, e = c.left, n = c.left + c.width;
                        else if (!t(p)(u.cx) || !t(p)(u.cy)) {
                            if ("centric" !== o) {
                                var s = u.cx,
                                    l = u.cy,
                                    f = u.radius,
                                    h = u.startAngle,
                                    d = u.endAngle;
                                return {
                                    points: [(0, I.polarToCartesian)(s, l, f, h), (0, I.polarToCartesian)(s, l, f, d)],
                                    cx: s,
                                    cy: l,
                                    radius: f,
                                    startAngle: h,
                                    endAngle: d
                                }
                            }
                            var y = u.cx,
                                g = u.cy,
                                v = u.innerRadius,
                                m = u.outerRadius,
                                b = u.angle,
                                x = (0, I.polarToCartesian)(y, g, v, b),
                                w = (0, I.polarToCartesian)(y, g, m, b);
                            e = x.x, r = x.y, n = w.x, i = w.y
                        }
                        return [{
                            x: e,
                            y: r
                        }, {
                            x: n,
                            y: i
                        }]
                    }
                }, {
                    key: "inRange",
                    value: function(t, e) {
                        var r = this.props.layout;
                        if ("horizontal" === r || "vertical" === r) {
                            var n = this.state.offset;
                            return t >= n.left && t <= n.left + n.width && e >= n.top && e <= n.top + n.height ? {
                                x: t,
                                y: e
                            } : null
                        }
                        var i = this.state,
                            o = i.angleAxisMap,
                            a = i.radiusAxisMap;
                        if (o && a) {
                            var u = (0, P.getAnyElementOfObject)(o);
                            return (0, I.inRangeOfSector)({
                                x: t,
                                y: e
                            }, u)
                        }
                        return null
                    }
                }, {
                    key: "parseEventsOfWrapper",
                    value: function() {
                        var t = this.props.children,
                            e = this.getTooltipEventType(),
                            r = (0, A.findChildByType)(t, b.Tooltip.displayName),
                            n = {};
                        return r && "axis" === e && (n = "click" === r.props.trigger ? {
                            onClick: this.handleClick
                        } : {
                            onMouseEnter: this.handleMouseEnter,
                            onMouseMove: this.handleMouseMove,
                            onMouseLeave: this.handleMouseLeave,
                            onTouchMove: this.handleTouchMove,
                            onTouchStart: this.handleTouchStart,
                            onTouchEnd: this.handleTouchEnd
                        }), Q(Q({}, (0, R.adaptEventHandlers)(this.props, this.handleOuterEvent)), n)
                    }
                }, {
                    key: "addListener",
                    value: function() {
                        D.eventCenter.on(D.SYNC_EVENT, this.handleReceiveSyncEvent), D.eventCenter.setMaxListeners && D.eventCenter._maxListeners && D.eventCenter.setMaxListeners(D.eventCenter._maxListeners + 1)
                    }
                }, {
                    key: "removeListener",
                    value: function() {
                        D.eventCenter.removeListener(D.SYNC_EVENT, this.handleReceiveSyncEvent), D.eventCenter.setMaxListeners && D.eventCenter._maxListeners && D.eventCenter.setMaxListeners(D.eventCenter._maxListeners - 1)
                    }
                }, {
                    key: "triggerSyncEvent",
                    value: function(e) {
                        var r = this.props.syncId;
                        t(p)(r) || D.eventCenter.emit(D.SYNC_EVENT, r, this.uniqueChartId, e)
                    }
                }, {
                    key: "applySyncEvent",
                    value: function(e) {
                        var r = this.props,
                            n = r.layout,
                            i = r.syncMethod,
                            o = this.state.updateId,
                            a = e.dataStartIndex,
                            u = e.dataEndIndex;
                        if (t(p)(e.dataStartIndex) && t(p)(e.dataEndIndex))
                            if (t(p)(e.activeTooltipIndex)) this.setState(e);
                            else {
                                var c = e.chartX,
                                    s = e.chartY,
                                    l = e.activeTooltipIndex,
                                    f = this.state,
                                    h = f.offset,
                                    d = f.tooltipTicks;
                                if (!h) return;
                                if ("function" == typeof i) l = i(d, e);
                                else if ("value" === i) {
                                    l = -1;
                                    for (var y = 0; y < d.length; y++)
                                        if (d[y].value === e.activeLabel) {
                                            l = y;
                                            break
                                        }
                                }
                                var g = Q(Q({}, h), {}, {
                                        x: h.left,
                                        y: h.top
                                    }),
                                    v = Math.min(c, g.x + g.width),
                                    m = Math.min(s, g.y + g.height),
                                    b = d[l] && d[l].value,
                                    x = ot(this.state, this.props.data, l),
                                    w = d[l] ? {
                                        x: "horizontal" === n ? d[l].coordinate : v,
                                        y: "horizontal" === n ? m : d[l].coordinate
                                    } : tt;
                                this.setState(Q(Q({}, e), {}, {
                                    activeLabel: b,
                                    activeCoordinate: w,
                                    activePayload: x,
                                    activeTooltipIndex: l
                                }))
                            }
                        else this.setState(Q({
                            dataStartIndex: a,
                            dataEndIndex: u
                        }, ft({
                            props: this.props,
                            dataStartIndex: a,
                            dataEndIndex: u,
                            updateId: o
                        }, this.state)))
                    }
                }, {
                    key: "filterFormatItem",
                    value: function(t, e, r) {
                        for (var n = this.state.formattedGraphicalItems, i = 0, o = n.length; i < o; i++) {
                            var a = n[i];
                            if (a.item === t || a.props.key === t.key || e === (0, A.getDisplayName)(a.item.type) && r === a.childIndex) return a
                        }
                        return null
                    }
                }, {
                    key: "renderAxis",
                    value: function(e, r, n, i) {
                        var o = this.props,
                            a = o.width,
                            u = o.height;
                        return t(y).createElement(k.CartesianAxis, z({}, e, {
                            className: "recharts-".concat(e.axisType, " ").concat(e.axisType),
                            key: r.key || "".concat(n, "-").concat(i),
                            viewBox: {
                                x: 0,
                                y: 0,
                                width: a,
                                height: u
                            },
                            ticksGenerator: this.axesTicksGenerator
                        }))
                    }
                }, {
                    key: "renderClipPath",
                    value: function() {
                        var e = this.clipPathId,
                            r = this.state.offset,
                            n = r.left,
                            i = r.top,
                            o = r.height,
                            a = r.width;
                        return t(y).createElement("defs", null, t(y).createElement("clipPath", {
                            id: e
                        }, t(y).createElement("rect", {
                            x: n,
                            y: i,
                            height: o,
                            width: a
                        })))
                    }
                }, {
                    key: "getXScales",
                    value: function() {
                        var t = this.state.xAxisMap;
                        return t ? Object.entries(t).reduce((function(t, e) {
                            var r = L(e, 2),
                                n = r[0],
                                i = r[1];
                            return Q(Q({}, t), {}, Z({}, n, i.scale))
                        }), {}) : null
                    }
                }, {
                    key: "getYScales",
                    value: function() {
                        var t = this.state.yAxisMap;
                        return t ? Object.entries(t).reduce((function(t, e) {
                            var r = L(e, 2),
                                n = r[0],
                                i = r[1];
                            return Q(Q({}, t), {}, Z({}, n, i.scale))
                        }), {}) : null
                    }
                }, {
                    key: "getXScaleByAxisId",
                    value: function(t) {
                        var e, r;
                        return null === (e = this.state.xAxisMap) || void 0 === e || null === (r = e[t]) || void 0 === r ? void 0 : r.scale
                    }
                }, {
                    key: "getYScaleByAxisId",
                    value: function(t) {
                        var e, r;
                        return null === (e = this.state.yAxisMap) || void 0 === e || null === (r = e[t]) || void 0 === r ? void 0 : r.scale
                    }
                }, {
                    key: "getItemByXY",
                    value: function(t) {
                        var e = this.state.formattedGraphicalItems;
                        if (e && e.length)
                            for (var r = 0, n = e.length; r < n; r++) {
                                var i = e[r],
                                    o = i.props,
                                    a = i.item,
                                    u = (0, A.getDisplayName)(a.type);
                                if ("Bar" === u) {
                                    var c = (o.data || []).find((function(e) {
                                        return (0, S.isInRectangle)(t, e)
                                    }));
                                    if (c) return {
                                        graphicalItem: i,
                                        payload: c
                                    }
                                } else if ("RadialBar" === u) {
                                    var s = (o.data || []).find((function(e) {
                                        return (0, I.inRangeOfSector)(t, e)
                                    }));
                                    if (s) return {
                                        graphicalItem: i,
                                        payload: s
                                    }
                                }
                            }
                        return null
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        if (!(0, A.validateWidthHeight)(this)) return null;
                        var r = this.props,
                            n = r.children,
                            i = r.className,
                            o = r.width,
                            a = r.height,
                            u = r.style,
                            c = r.compact,
                            s = r.title,
                            l = r.desc,
                            f = U(r, ["children", "className", "width", "height", "style", "compact", "title", "desc"]),
                            p = (0, R.filterProps)(f),
                            h = {
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
                        if (c) return t(y).createElement(v.Surface, z({}, p, {
                            width: o,
                            height: a,
                            title: s,
                            desc: l
                        }), this.renderClipPath(), (0, A.renderByOrder)(n, h));
                        var d = this.parseEventsOfWrapper();
                        return t(y).createElement("div", z({
                            className: t(g)("recharts-wrapper", i),
                            style: Q({
                                position: "relative",
                                cursor: "default",
                                width: o,
                                height: a
                            }, u)
                        }, d, {
                            ref: function(t) {
                                e.container = t
                            }
                        }), t(y).createElement(v.Surface, z({}, p, {
                            width: o,
                            height: a,
                            title: s,
                            desc: l
                        }), this.renderClipPath(), (0, A.renderByOrder)(n, h)), this.renderLegend(), this.renderTooltip())
                    }
                }]) && F(r.prototype, n), s && F(r, s), m
            }(y.Component), r.displayName = i, r.defaultProps = Q({
                layout: "horizontal",
                stackOffset: "none",
                barCategoryGap: "10%",
                barGap: 4,
                margin: {
                    top: 5,
                    right: 5,
                    bottom: 5,
                    left: 5
                },
                reverseStackOrder: !1,
                syncMethod: "index"
            }, $), r.getDerivedStateFromProps = function(e, r) {
                var n = e.data,
                    i = e.children,
                    o = e.width,
                    a = e.height,
                    u = e.layout,
                    c = e.stackOffset,
                    s = e.margin;
                if (t(p)(r.updateId)) {
                    var l = ct(e);
                    return Q(Q(Q({}, l), {}, {
                        updateId: 0
                    }, ft(Q(Q({
                        props: e
                    }, l), {}, {
                        updateId: 0
                    }), r)), {}, {
                        prevData: n,
                        prevWidth: o,
                        prevHeight: a,
                        prevLayout: u,
                        prevStackOffset: c,
                        prevMargin: s,
                        prevChildren: i
                    })
                }
                if (n !== r.prevData || o !== r.prevWidth || a !== r.prevHeight || u !== r.prevLayout || c !== r.prevStackOffset || !(0, N.shallowEqual)(s, r.prevMargin)) {
                    var f = ct(e),
                        h = {
                            chartX: r.chartX,
                            chartY: r.chartY,
                            isTooltipActive: r.isTooltipActive
                        },
                        d = Q(Q({}, at(r, n, u)), {}, {
                            updateId: r.updateId + 1
                        }),
                        y = Q(Q(Q({}, f), h), d);
                    return Q(Q(Q({}, y), ft(Q({
                        props: e
                    }, y), r)), {}, {
                        prevData: n,
                        prevWidth: o,
                        prevHeight: a,
                        prevLayout: u,
                        prevStackOffset: c,
                        prevMargin: s,
                        prevChildren: i
                    })
                }
                if (!(0, A.isChildrenEqual)(i, r.prevChildren)) {
                    var g = !t(p)(n) ? r.updateId : r.updateId + 1;
                    return Q(Q({
                        updateId: g
                    }, ft(Q(Q({
                        props: e
                    }, r), {}, {
                        updateId: g
                    }), r)), {}, {
                        prevChildren: i
                    })
                }
                return null
            }, r.renderActiveDot = function(e, r) {
                var n;
                return n = (0, y.isValidElement)(e) ? (0, y.cloneElement)(e, r) : t(u)(e) ? e(r) : t(y).createElement(_.Dot, r), t(y).createElement(m.Layer, {
                    className: "recharts-active-dot",
                    key: r.key
                }, n)
            }, n
        }
})), n.register("f0gtY", (function(t, e) {
    var r = n("6or5n"),
        i = n("bAsrM"),
        o = n("c3Npb"),
        a = n("42aAU"),
        u = n("f0JKU");
    t.exports = function(t, e, n) {
        var c = a(t) ? r : i;
        return n && u(t, e, n) && (e = void 0), c(t, o(e, 3))
    }
})), n.register("6or5n", (function(t, e) {
    t.exports = function(t, e) {
        for (var r = -1, n = null == t ? 0 : t.length; ++r < n;)
            if (!e(t[r], r, t)) return !1;
        return !0
    }
})), n.register("bAsrM", (function(t, e) {
    var r = n("9JNzv");
    t.exports = function(t, e) {
        var n = !0;
        return r(t, (function(t, r, i) {
            return n = !!e(t, r, i)
        })), n
    }
})), n.register("fAiTI", (function(t, e) {
    var r = n("lvTAU")(n("2VUYB"));
    t.exports = r
})), n.register("lvTAU", (function(t, e) {
    var r = n("c3Npb"),
        i = n("dQPJi"),
        o = n("7hKz6");
    t.exports = function(t) {
        return function(e, n, a) {
            var u = Object(e);
            if (!i(e)) {
                var c = r(n, 3);
                e = o(e), n = function(t) {
                    return c(u[t], t, u)
                }
            }
            var s = t(e, n, a);
            return s > -1 ? u[c ? e[s] : s] : void 0
        }
    }
})), n.register("2VUYB", (function(t, e) {
    var r = n("hXAO5"),
        i = n("c3Npb"),
        o = n("l0Eby"),
        a = Math.max;
    t.exports = function(t, e, n) {
        var u = null == t ? 0 : t.length;
        if (!u) return -1;
        var c = null == n ? 0 : o(n);
        return c < 0 && (c = a(u + c, 0)), r(t, i(e, 3), c)
    }
})), n.register("l0Eby", (function(t, e) {
    var r = n("bjuR6");
    t.exports = function(t) {
        var e = r(t),
            n = e % 1;
        return e == e ? n ? e - n : e : 0
    }
})), n.register("bjuR6", (function(t, e) {
    var r = n("axzd9"),
        i = 1 / 0;
    t.exports = function(t) {
        return t ? (t = r(t)) === i || t === -1 / 0 ? 17976931348623157e292 * (t < 0 ? -1 : 1) : t == t ? t : 0 : 0 === t ? t : 0
    }
})), n.register("axzd9", (function(t, e) {
    var r = n("4TzB7"),
        i = n("7vNjG"),
        o = /^\s+|\s+$/g,
        a = /^[-+]0x[0-9a-f]+$/i,
        u = /^0b[01]+$/i,
        c = /^0o[0-7]+$/i,
        s = parseInt;
    t.exports = function(t) {
        if ("number" == typeof t) return t;
        if (i(t)) return NaN;
        if (r(t)) {
            var e = "function" == typeof t.valueOf ? t.valueOf() : t;
            t = r(e) ? e + "" : e
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = t.replace(o, "");
        var n = u.test(t);
        return n || c.test(t) ? s(t.slice(2), n ? 2 : 8) : a.test(t) ? NaN : +t
    }
})), n.register("buapA", (function(t, e) {
    var r = n("gh1Mk"),
        i = n("4TzB7");
    t.exports = function(t, e, n) {
        var o = !0,
            a = !0;
        if ("function" != typeof t) throw new TypeError("Expected a function");
        return i(n) && (o = "leading" in n ? !!n.leading : o, a = "trailing" in n ? !!n.trailing : a), r(t, e, {
            leading: o,
            maxWait: e,
            trailing: a
        })
    }
})), n.register("gh1Mk", (function(t, e) {
    var r = n("4TzB7"),
        i = n("30MtK"),
        o = n("axzd9"),
        a = Math.max,
        u = Math.min;
    t.exports = function(t, e, n) {
        var c, s, l, f, p, h, d = 0,
            y = !1,
            g = !1,
            v = !0;
        if ("function" != typeof t) throw new TypeError("Expected a function");

        function m(e) {
            var r = c,
                n = s;
            return c = s = void 0, d = e, f = t.apply(n, r)
        }

        function b(t) {
            return d = t, p = setTimeout(w, e), y ? m(t) : f
        }

        function x(t) {
            var r = t - h;
            return void 0 === h || r >= e || r < 0 || g && t - d >= l
        }

        function w() {
            var t = i();
            if (x(t)) return O(t);
            p = setTimeout(w, function(t) {
                var r = e - (t - h);
                return g ? u(r, l - (t - d)) : r
            }(t))
        }

        function O(t) {
            return p = void 0, v && c ? m(t) : (c = s = void 0, f)
        }

        function j() {
            var t = i(),
                r = x(t);
            if (c = arguments, s = this, h = t, r) {
                if (void 0 === p) return b(h);
                if (g) return clearTimeout(p), p = setTimeout(w, e), m(h)
            }
            return void 0 === p && (p = setTimeout(w, e)), f
        }
        return e = o(e) || 0, r(n) && (y = !!n.leading, l = (g = "maxWait" in n) ? a(o(n.maxWait) || 0, e) : l, v = "trailing" in n ? !!n.trailing : v), j.cancel = function() {
            void 0 !== p && clearTimeout(p), d = 0, c = h = s = p = void 0
        }, j.flush = function() {
            return void 0 === p ? f : O(i())
        }, j
    }
})), n.register("30MtK", (function(t, e) {
    var r = n("3y6Vt");
    t.exports = function() {
        return r.Date.now()
    }
})), n.register("hvrw6", (function(t, e) {
    var r = n("4tWwq")();
    t.exports = r
})), n.register("4tWwq", (function(t, e) {
    var r = n("20Rg7"),
        i = n("f0JKU"),
        o = n("bjuR6");
    t.exports = function(t) {
        return function(e, n, a) {
            return a && "number" != typeof a && i(e, n, a) && (n = a = void 0), e = o(e), void 0 === n ? (n = e, e = 0) : n = o(n), a = void 0 === a ? e < n ? 1 : -1 : o(a), r(e, n, a, t)
        }
    }
})), n.register("20Rg7", (function(t, e) {
    var r = Math.ceil,
        n = Math.max;
    t.exports = function(t, e, i, o) {
        for (var a = -1, u = n(r((e - t) / (i || 1)), 0), c = Array(u); u--;) c[o ? u : ++a] = t, t += i;
        return c
    }
})), n.register("2TgJe", (function(t, e) {
    var r = n("ji23K"),
        i = n("cYleL");
    t.exports = function(t) {
        return !0 === t || !1 === t || i(t) && "[object Boolean]" == r(t)
    }
})), n.register("igxQN", (function(r, i) {
    e(r.exports, "Tooltip", (function() {
        return A
    }));
    var o = n("bZbba"),
        a = n("hRZ1R"),
        u = n("1XSsl"),
        c = n("fywoC");
    n("14qw3");
    var s = n("45NXc"),
        l = n("fe1on"),
        f = n("fJHkE"),
        p = n("ipNOV"),
        h = n("fI5bH");

    function d(t) {
        return d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, d(t)
    }

    function y(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), r.push.apply(r, n)
        }
        return r
    }

    function g(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2 ? y(Object(r), !0).forEach((function(e) {
                v(t, e, r[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : y(Object(r)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
            }))
        }
        return t
    }

    function v(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = r, t
    }

    function m(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function b(t, e) {
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    function x(t, e) {
        return x = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        }, x(t, e)
    }

    function w(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var r, n = j(t);
            if (e) {
                var i = j(this).constructor;
                r = Reflect.construct(n, arguments, i)
            } else r = n.apply(this, arguments);
            return O(this, r)
        }
    }

    function O(t, e) {
        return !e || "object" !== d(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function j(t) {
        return j = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }, j(t)
    }
    var _ = "recharts-tooltip-wrapper";

    function S(t) {
        return t.dataKey
    }
    var A = function(e) {
        ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && x(t, e)
        }(d, e);
        var r, n, i, p = w(d);

        function d() {
            var t;
            m(this, d);
            for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++) r[n] = arguments[n];
            return (t = p.call.apply(p, [this].concat(r))).state = {
                boxWidth: -1,
                boxHeight: -1,
                dismissed: !1,
                dismissedAtCoordinate: {
                    x: 0,
                    y: 0
                }
            }, t.wrapperNode = void 0, t.getTranslate = function(e) {
                var r = e.key,
                    n = e.tooltipDimension,
                    i = e.viewBoxDimension,
                    o = t.props,
                    a = o.allowEscapeViewBox,
                    u = o.coordinate,
                    c = o.offset,
                    s = o.position,
                    l = o.viewBox;
                if (s && (0, h.isNumber)(s[r])) return s[r];
                var f = u[r] - n - c,
                    p = u[r] + c;
                return a[r] ? p : u[r] + n + c > l[r] + i ? Math.max(f, l[r]) : Math.max(p, l[r])
            }, t
        }
        return r = d, (n = [{
            key: "componentDidMount",
            value: function() {
                this.updateBBox()
            }
        }, {
            key: "componentDidUpdate",
            value: function() {
                this.updateBBox()
            }
        }, {
            key: "updateBBox",
            value: function() {
                var t = this.state,
                    e = t.boxWidth,
                    r = t.boxHeight;
                if (t.dismissed ? (this.wrapperNode.blur(), this.props.coordinate.x === this.state.dismissedAtCoordinate.x && this.props.coordinate.y === this.state.dismissedAtCoordinate.y || this.setState({
                        dismissed: !1
                    })) : this.wrapperNode.focus({
                        preventScroll: !0
                    }), this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
                    var n = this.wrapperNode.getBoundingClientRect();
                    (Math.abs(n.width - e) > 1 || Math.abs(n.height - r) > 1) && this.setState({
                        boxWidth: n.width,
                        boxHeight: n.height
                    })
                } else - 1 === e && -1 === r || this.setState({
                    boxWidth: -1,
                    boxHeight: -1
                })
            }
        }, {
            key: "render",
            value: function() {
                var e, r, n, i = this,
                    p = this.props,
                    d = p.payload,
                    y = p.isAnimationActive,
                    m = p.animationDuration,
                    b = p.animationEasing,
                    x = p.filterNull,
                    w = function(e, r) {
                        return !0 === e ? t(u)(r, S) : t(a)(e) ? t(u)(r, e) : r
                    }(p.payloadUniqBy, x && d && d.length ? d.filter((function(e) {
                        return !t(o)(e.value)
                    })) : d),
                    O = w && w.length,
                    j = this.props,
                    A = j.content,
                    k = j.viewBox,
                    E = j.coordinate,
                    M = j.position,
                    P = j.active,
                    C = j.wrapperStyle,
                    T = g({
                        pointerEvents: "none",
                        visibility: !this.state.dismissed && P && O ? "visible" : "hidden",
                        position: "absolute",
                        top: 0,
                        left: 0
                    }, C);
                if (M && (0, h.isNumber)(M.x) && (0, h.isNumber)(M.y)) r = M.x, n = M.y;
                else {
                    var I = this.state,
                        N = I.boxWidth,
                        D = I.boxHeight;
                    N > 0 && D > 0 && E ? (r = this.getTranslate({
                        key: "x",
                        tooltipDimension: N,
                        viewBoxDimension: k.width
                    }), n = this.getTranslate({
                        key: "y",
                        tooltipDimension: D,
                        viewBoxDimension: k.height
                    })) : T.visibility = "hidden"
                }
                T = g(g({}, (0, s.translateStyle)({
                    transform: this.props.useTranslate3d ? "translate3d(".concat(r, "px, ").concat(n, "px, 0)") : "translate(".concat(r, "px, ").concat(n, "px)")
                })), T), y && P && (T = g(g({}, (0, s.translateStyle)({
                    transition: "transform ".concat(m, "ms ").concat(b)
                })), T));
                var R = t(l)(_, (v(e = {}, "".concat(_, "-right"), (0, h.isNumber)(r) && E && (0, h.isNumber)(E.x) && r >= E.x), v(e, "".concat(_, "-left"), (0, h.isNumber)(r) && E && (0, h.isNumber)(E.x) && r < E.x), v(e, "".concat(_, "-bottom"), (0, h.isNumber)(n) && E && (0, h.isNumber)(E.y) && n >= E.y), v(e, "".concat(_, "-top"), (0, h.isNumber)(n) && E && (0, h.isNumber)(E.y) && n < E.y), e));
                return t(c).createElement("div", {
                    tabIndex: -1,
                    role: "dialog",
                    onKeyDown: function(t) {
                        "Escape" === t.key && i.setState({
                            dismissed: !0,
                            dismissedAtCoordinate: g(g({}, i.state.dismissedAtCoordinate), {}, {
                                x: i.props.coordinate.x,
                                y: i.props.coordinate.y
                            })
                        })
                    },
                    className: R,
                    style: T,
                    ref: function(t) {
                        i.wrapperNode = t
                    }
                }, function(e, r) {
                    return t(c).isValidElement(e) ? t(c).cloneElement(e, r) : t(a)(e) ? t(c).createElement(e, r) : t(c).createElement(f.DefaultTooltipContent, r)
                }(A, g(g({}, this.props), {}, {
                    payload: w
                })))
            }
        }]) && b(r.prototype, n), i && b(r, i), d
    }(c.PureComponent);
    A.displayName = "Tooltip", A.defaultProps = {
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
        separator: " : ",
        wrapperStyle: {},
        contentStyle: {},
        itemStyle: {},
        labelStyle: {},
        cursor: !0,
        trigger: "hover",
        isAnimationActive: !p.Global.isSsr,
        animationEasing: "ease",
        animationDuration: 400,
        filterNull: !0,
        useTranslate3d: !1
    }
})), n.register("fJHkE", (function(r, i) {
    e(r.exports, "DefaultTooltipContent", (function() {
        return _
    }));
    var o = n("bZbba"),
        a = n("gma5L"),
        u = n("42aAU"),
        c = n("fywoC"),
        s = n("fe1on"),
        l = n("fI5bH");

    function f(t) {
        return f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, f(t)
    }

    function p(t, e) {
        return function(t) {
            if (Array.isArray(t)) return t
        }(t) || function(t, e) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
            var r = [],
                n = !0,
                i = !1,
                o = void 0;
            try {
                for (var a, u = t[Symbol.iterator](); !(n = (a = u.next()).done) && (r.push(a.value), !e || r.length !== e); n = !0);
            } catch (t) {
                i = !0, o = t
            } finally {
                try {
                    n || null == u.return || u.return()
                } finally {
                    if (i) throw o
                }
            }
            return r
        }(t, e) || function(t, e) {
            if (!t) return;
            if ("string" == typeof t) return h(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(t);
            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return h(t, e)
        }(t, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function h(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n
    }

    function d(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), r.push.apply(r, n)
        }
        return r
    }

    function y(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2 ? d(Object(r), !0).forEach((function(e) {
                g(t, e, r[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : d(Object(r)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
            }))
        }
        return t
    }

    function g(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = r, t
    }

    function v(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function m(t, e) {
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    function b(t, e) {
        return b = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        }, b(t, e)
    }

    function x(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var r, n = O(t);
            if (e) {
                var i = O(this).constructor;
                r = Reflect.construct(n, arguments, i)
            } else r = n.apply(this, arguments);
            return w(this, r)
        }
    }

    function w(t, e) {
        return !e || "object" !== f(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function O(t) {
        return O = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }, O(t)
    }

    function j(e) {
        return t(u)(e) && (0, l.isNumOrStr)(e[0]) && (0, l.isNumOrStr)(e[1]) ? e.join(" ~ ") : e
    }
    var _ = function(e) {
        ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && b(t, e)
        }(f, e);
        var r, n, i, u = x(f);

        function f() {
            return v(this, f), u.apply(this, arguments)
        }
        return r = f, (n = [{
            key: "renderContent",
            value: function() {
                var e = this.props,
                    r = e.payload,
                    n = e.separator,
                    i = e.formatter,
                    o = e.itemStyle,
                    u = e.itemSorter;
                if (r && r.length) {
                    var s = (u ? t(a)(r, u) : r).map((function(e, a) {
                        if ("none" === e.type) return null;
                        var u = y({
                                display: "block",
                                paddingTop: 4,
                                paddingBottom: 4,
                                color: e.color || "#000"
                            }, o),
                            s = e.formatter || i || j,
                            f = e.value,
                            h = e.name;
                        if (s && null != f && null != h) {
                            var d = s(f, h, e, a, r);
                            if (Array.isArray(d)) {
                                var g = p(d, 2);
                                f = g[0], h = g[1]
                            } else f = d
                        }
                        return t(c).createElement("li", {
                            className: "recharts-tooltip-item",
                            key: "tooltip-item-".concat(a),
                            style: u
                        }, (0, l.isNumOrStr)(h) ? t(c).createElement("span", {
                            className: "recharts-tooltip-item-name"
                        }, h) : null, (0, l.isNumOrStr)(h) ? t(c).createElement("span", {
                            className: "recharts-tooltip-item-separator"
                        }, n) : null, t(c).createElement("span", {
                            className: "recharts-tooltip-item-value"
                        }, f), t(c).createElement("span", {
                            className: "recharts-tooltip-item-unit"
                        }, e.unit || ""))
                    }));
                    return t(c).createElement("ul", {
                        className: "recharts-tooltip-item-list",
                        style: {
                            padding: 0,
                            margin: 0
                        }
                    }, s)
                }
                return null
            }
        }, {
            key: "render",
            value: function() {
                var e = this.props,
                    r = e.wrapperClassName,
                    n = e.contentStyle,
                    i = e.labelClassName,
                    a = e.labelStyle,
                    u = e.label,
                    l = e.labelFormatter,
                    f = e.payload,
                    p = y({
                        margin: 0,
                        padding: 10,
                        backgroundColor: "#fff",
                        border: "1px solid #ccc",
                        whiteSpace: "nowrap"
                    }, n),
                    h = y({
                        margin: 0
                    }, a),
                    d = !t(o)(u),
                    g = d ? u : "",
                    v = t(s)("recharts-default-tooltip", r),
                    m = t(s)("recharts-tooltip-label", i);
                return d && l && null != f && (g = l(u, f)), t(c).createElement("div", {
                    className: v,
                    style: p
                }, t(c).createElement("p", {
                    className: m,
                    style: h
                }, t(c).isValidElement(g) ? g : "".concat(g)), this.renderContent())
            }
        }]) && m(r.prototype, n), i && m(r, i), f
    }(c.PureComponent);
    _.displayName = "DefaultTooltipContent", _.defaultProps = {
        separator: " : ",
        contentStyle: {},
        itemStyle: {},
        labelStyle: {}
    }
})), n.register("7Owgo", (function(r, i) {
    e(r.exports, "Curve", (function() {
        return B
    }));
    var o = n("42aAU"),
        a = n("29RmV"),
        u = n("hRZ1R"),
        c = n("fywoC"),
        s = n("82vIE"),
        l = n("63CK1"),
        f = n("8mGF1"),
        p = n("lrQUr"),
        h = n("9UmMe"),
        d = n("b5MyC"),
        y = n("7tw6Y"),
        g = n("aY7OM"),
        v = n("iMg6N"),
        m = n("cxGHH"),
        b = n("fe1on"),
        x = n("iquK2"),
        w = n("fI5bH");

    function O(t) {
        return O = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, O(t)
    }

    function j() {
        return j = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
            }
            return t
        }, j.apply(this, arguments)
    }

    function _(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), r.push.apply(r, n)
        }
        return r
    }

    function S(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2 ? _(Object(r), !0).forEach((function(e) {
                A(t, e, r[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : _(Object(r)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
            }))
        }
        return t
    }

    function A(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = r, t
    }

    function k(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function E(t, e) {
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    function M(t, e) {
        return M = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        }, M(t, e)
    }

    function P(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var r, n = T(t);
            if (e) {
                var i = T(this).constructor;
                r = Reflect.construct(n, arguments, i)
            } else r = n.apply(this, arguments);
            return C(this, r)
        }
    }

    function C(t, e) {
        return !e || "object" !== O(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function T(t) {
        return T = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }, T(t)
    }
    var I = {
            curveBasisClosed: f.default,
            curveBasisOpen: p.default,
            curveBasis: l.default,
            curveLinearClosed: d.default,
            curveLinear: h.default,
            curveMonotoneX: y.monotoneX,
            curveMonotoneY: y.monotoneY,
            curveNatural: g.default,
            curveStep: v.default,
            curveStepAfter: v.stepAfter,
            curveStepBefore: v.stepBefore
        },
        N = function(t) {
            return t.x === +t.x && t.y === +t.y
        },
        D = function(t) {
            return t.x
        },
        R = function(t) {
            return t.y
        },
        B = function(e) {
            ! function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && M(t, e)
            }(f, e);
            var r, n, i, l = P(f);

            function f() {
                return k(this, f), l.apply(this, arguments)
            }
            return r = f, (n = [{
                key: "getPath",
                value: function() {
                    var e, r = this.props,
                        n = r.type,
                        i = r.points,
                        c = r.baseLine,
                        l = r.layout,
                        f = r.connectNulls,
                        p = function(e, r) {
                            if (t(u)(e)) return e;
                            var n = "curve".concat(t(a)(e));
                            return "curveMonotone" === n && r ? I["".concat(n).concat("vertical" === r ? "Y" : "X")] : I[n] || h.default
                        }(n, l),
                        d = f ? i.filter((function(t) {
                            return N(t)
                        })) : i;
                    if (t(o)(c)) {
                        var y = f ? c.filter((function(t) {
                                return N(t)
                            })) : c,
                            g = d.map((function(t, e) {
                                return S(S({}, t), {}, {
                                    base: y[e]
                                })
                            }));
                        return (e = "vertical" === l ? (0, s.default)().y(R).x1(D).x0((function(t) {
                            return t.base.x
                        })) : (0, s.default)().x(D).y1(R).y0((function(t) {
                            return t.base.y
                        }))).defined(N).curve(p), e(g)
                    }
                    return (e = "vertical" === l && (0, w.isNumber)(c) ? (0, s.default)().y(R).x1(D).x0(c) : (0, w.isNumber)(c) ? (0, s.default)().x(D).y1(R).y0(c) : (0, m.default)().x(D).y(R)).defined(N).curve(p), e(d)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props,
                        r = e.className,
                        n = e.points,
                        i = e.path,
                        o = e.pathRef;
                    if (!(n && n.length || i)) return null;
                    var a = n && n.length ? this.getPath() : i;
                    return t(c).createElement("path", j({}, (0, x.filterProps)(this.props), (0, x.adaptEventHandlers)(this.props), {
                        className: t(b)("recharts-curve", r),
                        d: a,
                        ref: o
                    }))
                }
            }]) && E(r.prototype, n), i && E(r, i), f
        }(c.PureComponent);
    B.defaultProps = {
        type: "linear",
        points: [],
        connectNulls: !1
    }
})), n.register("82vIE", (function(t, r) {
    e(t.exports, "default", (function() {
        return l
    }));
    var i = n("dwWnN"),
        o = n("jcN1X"),
        a = n("3NDPY"),
        u = n("9UmMe"),
        c = n("cxGHH"),
        s = n("flCZ5");

    function l(t, e, r) {
        var n = null,
            l = (0, a.default)(!0),
            f = null,
            p = u.default,
            h = null;

        function d(a) {
            var u, c, s, d, y, g = (a = (0, o.default)(a)).length,
                v = !1,
                m = new Array(g),
                b = new Array(g);
            for (null == f && (h = p(y = (0, i.default)())), u = 0; u <= g; ++u) {
                if (!(u < g && l(d = a[u], u, a)) === v)
                    if (v = !v) c = u, h.areaStart(), h.lineStart();
                    else {
                        for (h.lineEnd(), h.lineStart(), s = u - 1; s >= c; --s) h.point(m[s], b[s]);
                        h.lineEnd(), h.areaEnd()
                    } v && (m[u] = +t(d, u, a), b[u] = +e(d, u, a), h.point(n ? +n(d, u, a) : m[u], r ? +r(d, u, a) : b[u]))
            }
            if (y) return h = null, y + "" || null
        }

        function y() {
            return (0, c.default)().defined(l).curve(p).context(f)
        }
        return t = "function" == typeof t ? t : void 0 === t ? s.x : (0, a.default)(+t), e = "function" == typeof e ? e : void 0 === e ? (0, a.default)(0) : (0, a.default)(+e), r = "function" == typeof r ? r : void 0 === r ? s.y : (0, a.default)(+r), d.x = function(e) {
            return arguments.length ? (t = "function" == typeof e ? e : (0, a.default)(+e), n = null, d) : t
        }, d.x0 = function(e) {
            return arguments.length ? (t = "function" == typeof e ? e : (0, a.default)(+e), d) : t
        }, d.x1 = function(t) {
            return arguments.length ? (n = null == t ? null : "function" == typeof t ? t : (0, a.default)(+t), d) : n
        }, d.y = function(t) {
            return arguments.length ? (e = "function" == typeof t ? t : (0, a.default)(+t), r = null, d) : e
        }, d.y0 = function(t) {
            return arguments.length ? (e = "function" == typeof t ? t : (0, a.default)(+t), d) : e
        }, d.y1 = function(t) {
            return arguments.length ? (r = null == t ? null : "function" == typeof t ? t : (0, a.default)(+t), d) : r
        }, d.lineX0 = d.lineY0 = function() {
            return y().x(t).y(e)
        }, d.lineY1 = function() {
            return y().x(t).y(r)
        }, d.lineX1 = function() {
            return y().x(n).y(e)
        }, d.defined = function(t) {
            return arguments.length ? (l = "function" == typeof t ? t : (0, a.default)(!!t), d) : l
        }, d.curve = function(t) {
            return arguments.length ? (p = t, null != f && (h = p(f)), d) : p
        }, d.context = function(t) {
            return arguments.length ? (null == t ? f = h = null : h = p(f = t), d) : f
        }, d
    }
})), n.register("9UmMe", (function(t, r) {
    function n(t) {
        this._context = t
    }

    function i(t) {
        return new n(t)
    }
    e(t.exports, "default", (function() {
        return i
    })), n.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._point = 0
        },
        lineEnd: function() {
            (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
        },
        point: function(t, e) {
            switch (t = +t, e = +e, this._point) {
                case 0:
                    this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
                    break;
                case 1:
                    this._point = 2;
                default:
                    this._context.lineTo(t, e)
            }
        }
    }
})), n.register("cxGHH", (function(t, r) {
    e(t.exports, "default", (function() {
        return s
    }));
    var i = n("dwWnN"),
        o = n("jcN1X"),
        a = n("3NDPY"),
        u = n("9UmMe"),
        c = n("flCZ5");

    function s(t, e) {
        var r = (0, a.default)(!0),
            n = null,
            s = u.default,
            l = null;

        function f(a) {
            var u, c, f, p = (a = (0, o.default)(a)).length,
                h = !1;
            for (null == n && (l = s(f = (0, i.default)())), u = 0; u <= p; ++u) !(u < p && r(c = a[u], u, a)) === h && ((h = !h) ? l.lineStart() : l.lineEnd()), h && l.point(+t(c, u, a), +e(c, u, a));
            if (f) return l = null, f + "" || null
        }
        return t = "function" == typeof t ? t : void 0 === t ? c.x : (0, a.default)(t), e = "function" == typeof e ? e : void 0 === e ? c.y : (0, a.default)(e), f.x = function(e) {
            return arguments.length ? (t = "function" == typeof e ? e : (0, a.default)(+e), f) : t
        }, f.y = function(t) {
            return arguments.length ? (e = "function" == typeof t ? t : (0, a.default)(+t), f) : e
        }, f.defined = function(t) {
            return arguments.length ? (r = "function" == typeof t ? t : (0, a.default)(!!t), f) : r
        }, f.curve = function(t) {
            return arguments.length ? (s = t, null != n && (l = s(n)), f) : s
        }, f.context = function(t) {
            return arguments.length ? (null == t ? n = l = null : l = s(n = t), f) : n
        }, f
    }
})), n.register("flCZ5", (function(t, r) {
    function n(t) {
        return t[0]
    }

    function i(t) {
        return t[1]
    }
    e(t.exports, "x", (function() {
        return n
    })), e(t.exports, "y", (function() {
        return i
    }))
})), n.register("63CK1", (function(t, r) {
    function n(t, e, r) {
        t._context.bezierCurveTo((2 * t._x0 + t._x1) / 3, (2 * t._y0 + t._y1) / 3, (t._x0 + 2 * t._x1) / 3, (t._y0 + 2 * t._y1) / 3, (t._x0 + 4 * t._x1 + e) / 6, (t._y0 + 4 * t._y1 + r) / 6)
    }

    function i(t) {
        this._context = t
    }

    function o(t) {
        return new i(t)
    }
    e(t.exports, "point", (function() {
        return n
    })), e(t.exports, "default", (function() {
        return o
    })), i.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0
        },
        lineEnd: function() {
            switch (this._point) {
                case 3:
                    n(this, this._x1, this._y1);
                case 2:
                    this._context.lineTo(this._x1, this._y1)
            }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
        },
        point: function(t, e) {
            switch (t = +t, e = +e, this._point) {
                case 0:
                    this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
                default:
                    n(this, t, e)
            }
            this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e
        }
    }
})), n.register("8mGF1", (function(t, r) {
    e(t.exports, "default", (function() {
        return u
    }));
    var i = n("1tgnu"),
        o = n("63CK1");

    function a(t) {
        this._context = t
    }

    function u(t) {
        return new a(t)
    }
    a.prototype = {
        areaStart: i.default,
        areaEnd: i.default,
        lineStart: function() {
            this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0
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
                    this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4)
            }
        },
        point: function(t, e) {
            switch (t = +t, e = +e, this._point) {
                case 0:
                    this._point = 1, this._x2 = t, this._y2 = e;
                    break;
                case 1:
                    this._point = 2, this._x3 = t, this._y3 = e;
                    break;
                case 2:
                    this._point = 3, this._x4 = t, this._y4 = e, this._context.moveTo((this._x0 + 4 * this._x1 + t) / 6, (this._y0 + 4 * this._y1 + e) / 6);
                    break;
                default:
                    (0, o.point)(this, t, e)
            }
            this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e
        }
    }
})), n.register("1tgnu", (function(t, r) {
    function n() {}
    e(t.exports, "default", (function() {
        return n
    }))
})), n.register("lrQUr", (function(t, r) {
    e(t.exports, "default", (function() {
        return a
    }));
    var i = n("63CK1");

    function o(t) {
        this._context = t
    }

    function a(t) {
        return new o(t)
    }
    o.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0
        },
        lineEnd: function() {
            (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
        },
        point: function(t, e) {
            switch (t = +t, e = +e, this._point) {
                case 0:
                    this._point = 1;
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    this._point = 3;
                    var r = (this._x0 + 4 * this._x1 + t) / 6,
                        n = (this._y0 + 4 * this._y1 + e) / 6;
                    this._line ? this._context.lineTo(r, n) : this._context.moveTo(r, n);
                    break;
                case 3:
                    this._point = 4;
                default:
                    (0, i.point)(this, t, e)
            }
            this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e
        }
    }
})), n.register("b5MyC", (function(t, r) {
    e(t.exports, "default", (function() {
        return a
    }));
    var i = n("1tgnu");

    function o(t) {
        this._context = t
    }

    function a(t) {
        return new o(t)
    }
    o.prototype = {
        areaStart: i.default,
        areaEnd: i.default,
        lineStart: function() {
            this._point = 0
        },
        lineEnd: function() {
            this._point && this._context.closePath()
        },
        point: function(t, e) {
            t = +t, e = +e, this._point ? this._context.lineTo(t, e) : (this._point = 1, this._context.moveTo(t, e))
        }
    }
})), n.register("7tw6Y", (function(t, r) {
    function n(t) {
        return t < 0 ? -1 : 1
    }

    function i(t, e, r) {
        var i = t._x1 - t._x0,
            o = e - t._x1,
            a = (t._y1 - t._y0) / (i || o < 0 && -0),
            u = (r - t._y1) / (o || i < 0 && -0),
            c = (a * o + u * i) / (i + o);
        return (n(a) + n(u)) * Math.min(Math.abs(a), Math.abs(u), .5 * Math.abs(c)) || 0
    }

    function o(t, e) {
        var r = t._x1 - t._x0;
        return r ? (3 * (t._y1 - t._y0) / r - e) / 2 : e
    }

    function a(t, e, r) {
        var n = t._x0,
            i = t._y0,
            o = t._x1,
            a = t._y1,
            u = (o - n) / 3;
        t._context.bezierCurveTo(n + u, i + u * e, o - u, a - u * r, o, a)
    }

    function u(t) {
        this._context = t
    }

    function c(t) {
        this._context = new s(t)
    }

    function s(t) {
        this._context = t
    }

    function l(t) {
        return new u(t)
    }

    function f(t) {
        return new c(t)
    }
    e(t.exports, "monotoneX", (function() {
        return l
    })), e(t.exports, "monotoneY", (function() {
        return f
    })), u.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0
        },
        lineEnd: function() {
            switch (this._point) {
                case 2:
                    this._context.lineTo(this._x1, this._y1);
                    break;
                case 3:
                    a(this, this._t0, o(this, this._t0))
            }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
        },
        point: function(t, e) {
            var r = NaN;
            if (e = +e, (t = +t) !== this._x1 || e !== this._y1) {
                switch (this._point) {
                    case 0:
                        this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
                        break;
                    case 1:
                        this._point = 2;
                        break;
                    case 2:
                        this._point = 3, a(this, o(this, r = i(this, t, e)), r);
                        break;
                    default:
                        a(this, this._t0, r = i(this, t, e))
                }
                this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e, this._t0 = r
            }
        }
    }, (c.prototype = Object.create(u.prototype)).point = function(t, e) {
        u.prototype.point.call(this, e, t)
    }, s.prototype = {
        moveTo: function(t, e) {
            this._context.moveTo(e, t)
        },
        closePath: function() {
            this._context.closePath()
        },
        lineTo: function(t, e) {
            this._context.lineTo(e, t)
        },
        bezierCurveTo: function(t, e, r, n, i, o) {
            this._context.bezierCurveTo(e, t, n, r, o, i)
        }
    }
})), n.register("aY7OM", (function(t, r) {
    function n(t) {
        this._context = t
    }

    function i(t) {
        var e, r, n = t.length - 1,
            i = new Array(n),
            o = new Array(n),
            a = new Array(n);
        for (i[0] = 0, o[0] = 2, a[0] = t[0] + 2 * t[1], e = 1; e < n - 1; ++e) i[e] = 1, o[e] = 4, a[e] = 4 * t[e] + 2 * t[e + 1];
        for (i[n - 1] = 2, o[n - 1] = 7, a[n - 1] = 8 * t[n - 1] + t[n], e = 1; e < n; ++e) r = i[e] / o[e - 1], o[e] -= r, a[e] -= r * a[e - 1];
        for (i[n - 1] = a[n - 1] / o[n - 1], e = n - 2; e >= 0; --e) i[e] = (a[e] - i[e + 1]) / o[e];
        for (o[n - 1] = (t[n] + i[n - 1]) / 2, e = 0; e < n - 1; ++e) o[e] = 2 * t[e + 1] - i[e + 1];
        return [i, o]
    }

    function o(t) {
        return new n(t)
    }
    e(t.exports, "default", (function() {
        return o
    })), n.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x = [], this._y = []
        },
        lineEnd: function() {
            var t = this._x,
                e = this._y,
                r = t.length;
            if (r)
                if (this._line ? this._context.lineTo(t[0], e[0]) : this._context.moveTo(t[0], e[0]), 2 === r) this._context.lineTo(t[1], e[1]);
                else
                    for (var n = i(t), o = i(e), a = 0, u = 1; u < r; ++a, ++u) this._context.bezierCurveTo(n[0][a], o[0][a], n[1][a], o[1][a], t[u], e[u]);
            (this._line || 0 !== this._line && 1 === r) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null
        },
        point: function(t, e) {
            this._x.push(+t), this._y.push(+e)
        }
    }
})), n.register("iMg6N", (function(t, r) {
    function n(t, e) {
        this._context = t, this._t = e
    }

    function i(t) {
        return new n(t, .5)
    }

    function o(t) {
        return new n(t, 0)
    }

    function a(t) {
        return new n(t, 1)
    }
    e(t.exports, "default", (function() {
        return i
    })), e(t.exports, "stepBefore", (function() {
        return o
    })), e(t.exports, "stepAfter", (function() {
        return a
    })), n.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x = this._y = NaN, this._point = 0
        },
        lineEnd: function() {
            0 < this._t && this._t < 1 && 2 === this._point && this._context.lineTo(this._x, this._y), (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line)
        },
        point: function(t, e) {
            switch (t = +t, e = +e, this._point) {
                case 0:
                    this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
                    break;
                case 1:
                    this._point = 2;
                default:
                    if (this._t <= 0) this._context.lineTo(this._x, e), this._context.lineTo(t, e);
                    else {
                        var r = this._x * (1 - this._t) + t * this._t;
                        this._context.lineTo(r, this._y), this._context.lineTo(r, e)
                    }
            }
            this._x = t, this._y = e
        }
    }
})), n.register("jdVdJ", (function(r, i) {
    e(r.exports, "Cross", (function() {
        return v
    }));
    var o = n("fywoC"),
        a = n("fe1on"),
        u = n("fI5bH"),
        c = n("iquK2");

    function s(t) {
        return s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, s(t)
    }

    function l() {
        return l = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
            }
            return t
        }, l.apply(this, arguments)
    }

    function f(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function p(t, e) {
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    function h(t, e) {
        return h = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        }, h(t, e)
    }

    function d(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var r, n = g(t);
            if (e) {
                var i = g(this).constructor;
                r = Reflect.construct(n, arguments, i)
            } else r = n.apply(this, arguments);
            return y(this, r)
        }
    }

    function y(t, e) {
        return !e || "object" !== s(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function g(t) {
        return g = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }, g(t)
    }
    var v = function(e) {
        ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && h(t, e)
        }(y, e);
        var r, n, i, s = d(y);

        function y() {
            return f(this, y), s.apply(this, arguments)
        }
        return r = y, i = [{
            key: "getPath",
            value: function(t, e, r, n, i, o) {
                return "M".concat(t, ",").concat(i, "v").concat(n, "M").concat(o, ",").concat(e, "h").concat(r)
            }
        }], (n = [{
            key: "render",
            value: function() {
                var e = this.props,
                    r = e.x,
                    n = e.y,
                    i = e.width,
                    s = e.height,
                    f = e.top,
                    p = e.left,
                    h = e.className;
                return (0, u.isNumber)(r) && (0, u.isNumber)(n) && (0, u.isNumber)(i) && (0, u.isNumber)(s) && (0, u.isNumber)(f) && (0, u.isNumber)(p) ? t(o).createElement("path", l({}, (0, c.filterProps)(this.props, !0), {
                    className: t(a)("recharts-cross", h),
                    d: y.getPath(r, n, i, s, f, p)
                })) : null
            }
        }]) && p(r.prototype, n), i && p(r, i), y
    }(o.PureComponent);
    v.defaultProps = {
        x: 0,
        y: 0,
        top: 0,
        left: 0,
        width: 0,
        height: 0
    }
})), n.register("jCIy6", (function(r, i) {
    e(r.exports, "Sector", (function() {
        return x
    }));
    var o = n("fywoC"),
        a = n("fe1on"),
        u = n("iquK2"),
        c = n("4jZP4"),
        s = n("fI5bH");

    function l(t) {
        return l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, l(t)
    }

    function f() {
        return f = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
            }
            return t
        }, f.apply(this, arguments)
    }

    function p(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function h(t, e) {
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    function d(t, e) {
        return d = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        }, d(t, e)
    }

    function y(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var r, n = v(t);
            if (e) {
                var i = v(this).constructor;
                r = Reflect.construct(n, arguments, i)
            } else r = n.apply(this, arguments);
            return g(this, r)
        }
    }

    function g(t, e) {
        return !e || "object" !== l(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function v(t) {
        return v = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }, v(t)
    }
    var m = function(t) {
            var e = t.cx,
                r = t.cy,
                n = t.radius,
                i = t.angle,
                o = t.sign,
                a = t.isExternal,
                u = t.cornerRadius,
                s = t.cornerIsExternal,
                l = u * (a ? 1 : -1) + n,
                f = Math.asin(u / l) / c.RADIAN,
                p = s ? i : i + o * f,
                h = s ? i - o * f : i;
            return {
                center: (0, c.polarToCartesian)(e, r, l, p),
                circleTangency: (0, c.polarToCartesian)(e, r, n, p),
                lineTangency: (0, c.polarToCartesian)(e, r, l * Math.cos(f * c.RADIAN), h),
                theta: f
            }
        },
        b = function(t) {
            var e = t.cx,
                r = t.cy,
                n = t.innerRadius,
                i = t.outerRadius,
                o = t.startAngle,
                a = function(t, e) {
                    return (0, s.mathSign)(e - t) * Math.min(Math.abs(e - t), 359.999)
                }(o, t.endAngle),
                u = o + a,
                l = (0, c.polarToCartesian)(e, r, i, o),
                f = (0, c.polarToCartesian)(e, r, i, u),
                p = "M ".concat(l.x, ",").concat(l.y, "\n    A ").concat(i, ",").concat(i, ",0,\n    ").concat(+(Math.abs(a) > 180), ",").concat(+(o > u), ",\n    ").concat(f.x, ",").concat(f.y, "\n  ");
            if (n > 0) {
                var h = (0, c.polarToCartesian)(e, r, n, o),
                    d = (0, c.polarToCartesian)(e, r, n, u);
                p += "L ".concat(d.x, ",").concat(d.y, "\n            A ").concat(n, ",").concat(n, ",0,\n            ").concat(+(Math.abs(a) > 180), ",").concat(+(o <= u), ",\n            ").concat(h.x, ",").concat(h.y, " Z")
            } else p += "L ".concat(e, ",").concat(r, " Z");
            return p
        },
        x = function(e) {
            ! function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && d(t, e)
            }(l, e);
            var r, n, i, c = y(l);

            function l() {
                return p(this, l), c.apply(this, arguments)
            }
            return r = l, (n = [{
                key: "render",
                value: function() {
                    var e = this.props,
                        r = e.cx,
                        n = e.cy,
                        i = e.innerRadius,
                        c = e.outerRadius,
                        l = e.cornerRadius,
                        p = e.forceCornerRadius,
                        h = e.cornerIsExternal,
                        d = e.startAngle,
                        y = e.endAngle,
                        g = e.className;
                    if (c < i || d === y) return null;
                    var v, x = t(a)("recharts-sector", g),
                        w = c - i,
                        O = (0, s.getPercentValue)(l, w, 0, !0);
                    return v = O > 0 && Math.abs(d - y) < 360 ? function(t) {
                        var e = t.cx,
                            r = t.cy,
                            n = t.innerRadius,
                            i = t.outerRadius,
                            o = t.cornerRadius,
                            a = t.forceCornerRadius,
                            u = t.cornerIsExternal,
                            c = t.startAngle,
                            l = t.endAngle,
                            f = (0, s.mathSign)(l - c),
                            p = m({
                                cx: e,
                                cy: r,
                                radius: i,
                                angle: c,
                                sign: f,
                                cornerRadius: o,
                                cornerIsExternal: u
                            }),
                            h = p.circleTangency,
                            d = p.lineTangency,
                            y = p.theta,
                            g = m({
                                cx: e,
                                cy: r,
                                radius: i,
                                angle: l,
                                sign: -f,
                                cornerRadius: o,
                                cornerIsExternal: u
                            }),
                            v = g.circleTangency,
                            x = g.lineTangency,
                            w = g.theta,
                            O = u ? Math.abs(c - l) : Math.abs(c - l) - y - w;
                        if (O < 0) return a ? "M ".concat(d.x, ",").concat(d.y, "\n        a").concat(o, ",").concat(o, ",0,0,1,").concat(2 * o, ",0\n        a").concat(o, ",").concat(o, ",0,0,1,").concat(2 * -o, ",0\n      ") : b({
                            cx: e,
                            cy: r,
                            innerRadius: n,
                            outerRadius: i,
                            startAngle: c,
                            endAngle: l
                        });
                        var j = "M ".concat(d.x, ",").concat(d.y, "\n    A").concat(o, ",").concat(o, ",0,0,").concat(+(f < 0), ",").concat(h.x, ",").concat(h.y, "\n    A").concat(i, ",").concat(i, ",0,").concat(+(O > 180), ",").concat(+(f < 0), ",").concat(v.x, ",").concat(v.y, "\n    A").concat(o, ",").concat(o, ",0,0,").concat(+(f < 0), ",").concat(x.x, ",").concat(x.y, "\n  ");
                        if (n > 0) {
                            var _ = m({
                                    cx: e,
                                    cy: r,
                                    radius: n,
                                    angle: c,
                                    sign: f,
                                    isExternal: !0,
                                    cornerRadius: o,
                                    cornerIsExternal: u
                                }),
                                S = _.circleTangency,
                                A = _.lineTangency,
                                k = _.theta,
                                E = m({
                                    cx: e,
                                    cy: r,
                                    radius: n,
                                    angle: l,
                                    sign: -f,
                                    isExternal: !0,
                                    cornerRadius: o,
                                    cornerIsExternal: u
                                }),
                                M = E.circleTangency,
                                P = E.lineTangency,
                                C = E.theta,
                                T = u ? Math.abs(c - l) : Math.abs(c - l) - k - C;
                            if (T < 0 && 0 === o) return "".concat(j, "L").concat(e, ",").concat(r, "Z");
                            j += "L".concat(P.x, ",").concat(P.y, "\n      A").concat(o, ",").concat(o, ",0,0,").concat(+(f < 0), ",").concat(M.x, ",").concat(M.y, "\n      A").concat(n, ",").concat(n, ",0,").concat(+(T > 180), ",").concat(+(f > 0), ",").concat(S.x, ",").concat(S.y, "\n      A").concat(o, ",").concat(o, ",0,0,").concat(+(f < 0), ",").concat(A.x, ",").concat(A.y, "Z")
                        } else j += "L".concat(e, ",").concat(r, "Z");
                        return j
                    }({
                        cx: r,
                        cy: n,
                        innerRadius: i,
                        outerRadius: c,
                        cornerRadius: Math.min(O, w / 2),
                        forceCornerRadius: p,
                        cornerIsExternal: h,
                        startAngle: d,
                        endAngle: y
                    }) : b({
                        cx: r,
                        cy: n,
                        innerRadius: i,
                        outerRadius: c,
                        startAngle: d,
                        endAngle: y
                    }), t(o).createElement("path", f({}, (0, u.filterProps)(this.props, !0), {
                        className: x,
                        d: v
                    }))
                }
            }]) && h(r.prototype, n), i && h(r, i), l
        }(o.PureComponent);
    x.defaultProps = {
        cx: 0,
        cy: 0,
        innerRadius: 0,
        outerRadius: 0,
        startAngle: 0,
        endAngle: 0,
        cornerRadius: 0,
        forceCornerRadius: !1,
        cornerIsExternal: !1
    }
})), n.register("bzQF8", (function(r, i) {
    e(r.exports, "Dot", (function() {
        return g
    }));
    var o = n("fywoC"),
        a = n("fe1on"),
        u = n("iquK2");

    function c(t) {
        return c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, c(t)
    }

    function s() {
        return s = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
            }
            return t
        }, s.apply(this, arguments)
    }

    function l(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function f(t, e) {
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    function p(t, e) {
        return p = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        }, p(t, e)
    }

    function h(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var r, n = y(t);
            if (e) {
                var i = y(this).constructor;
                r = Reflect.construct(n, arguments, i)
            } else r = n.apply(this, arguments);
            return d(this, r)
        }
    }

    function d(t, e) {
        return !e || "object" !== c(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function y(t) {
        return y = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }, y(t)
    }
    var g = function(e) {
        ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && p(t, e)
        }(d, e);
        var r, n, i, c = h(d);

        function d() {
            return l(this, d), c.apply(this, arguments)
        }
        return r = d, (n = [{
            key: "render",
            value: function() {
                var e = this.props,
                    r = e.cx,
                    n = e.cy,
                    i = e.r,
                    c = e.className,
                    l = t(a)("recharts-dot", c);
                return r === +r && n === +n && i === +i ? t(o).createElement("circle", s({}, (0, u.filterProps)(this.props), (0, u.adaptEventHandlers)(this.props), {
                    className: l,
                    cx: r,
                    cy: n,
                    r: i
                })) : null
            }
        }]) && f(r.prototype, n), i && f(r, i), d
    }(o.PureComponent)
})), n.register("9luuN", (function(r, i) {
    e(r.exports, "CartesianAxis", (function() {
        return E
    }));
    var o = n("hq7xU"),
        a = n("hRZ1R"),
        u = n("fywoC"),
        c = n("fe1on"),
        s = n("d6aDM"),
        l = n("bC8Qw"),
        f = n("fYpyz"),
        p = n("94iDk"),
        h = n("jo56E"),
        d = n("ipNOV"),
        y = n("fI5bH"),
        g = n("iquK2");

    function v(t) {
        return v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, v(t)
    }

    function m() {
        return m = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
            }
            return t
        }, m.apply(this, arguments)
    }

    function b(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), r.push.apply(r, n)
        }
        return r
    }

    function x(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2 ? b(Object(r), !0).forEach((function(e) {
                w(t, e, r[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : b(Object(r)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
            }))
        }
        return t
    }

    function w(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = r, t
    }

    function O(t, e) {
        if (null == t) return {};
        var r, n, i = function(t, e) {
            if (null == t) return {};
            var r, n, i = {},
                o = Object.keys(t);
            for (n = 0; n < o.length; n++) r = o[n], e.indexOf(r) >= 0 || (i[r] = t[r]);
            return i
        }(t, e);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(t);
            for (n = 0; n < o.length; n++) r = o[n], e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (i[r] = t[r])
        }
        return i
    }

    function j(t, e) {
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    function _(t, e) {
        return _ = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        }, _(t, e)
    }

    function S(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var r, n = k(t);
            if (e) {
                var i = k(this).constructor;
                r = Reflect.construct(n, arguments, i)
            } else r = n.apply(this, arguments);
            return A(this, r)
        }
    }

    function A(t, e) {
        return !e || "object" !== v(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function k(t) {
        return k = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }, k(t)
    }
    var E = function(e) {
        ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && _(t, e)
        }(b, e);
        var r, n, i, v = S(b);

        function b(t) {
            var e;
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, b), (e = v.call(this, t)).layerReference = void 0, e.state = {
                fontSize: "",
                letterSpacing: ""
            }, e
        }
        return r = b, i = [{
            key: "getTicks",
            value: function(t, e, r) {
                var n = t.tick,
                    i = t.ticks,
                    o = t.viewBox,
                    a = t.minTickGap,
                    u = t.orientation,
                    c = t.interval,
                    s = t.tickFormatter,
                    l = t.unit;
                return i && i.length && n ? (0, y.isNumber)(c) || d.Global.isSsr ? b.getNumberIntervalTicks(i, "number" == typeof c && (0, y.isNumber)(c) ? c : 0) : "preserveStartEnd" === c ? b.getTicksStart({
                    ticks: i,
                    tickFormatter: s,
                    viewBox: o,
                    orientation: u,
                    minTickGap: a,
                    unit: l,
                    fontSize: e,
                    letterSpacing: r
                }, !0) : "preserveStart" === c ? b.getTicksStart({
                    ticks: i,
                    tickFormatter: s,
                    viewBox: o,
                    orientation: u,
                    minTickGap: a,
                    unit: l,
                    fontSize: e,
                    letterSpacing: r
                }) : b.getTicksEnd({
                    ticks: i,
                    tickFormatter: s,
                    viewBox: o,
                    orientation: u,
                    minTickGap: a,
                    unit: l,
                    fontSize: e,
                    letterSpacing: r
                }) : []
            }
        }, {
            key: "getNumberIntervalTicks",
            value: function(t, e) {
                return t.filter((function(t, r) {
                    return r % (e + 1) == 0
                }))
            }
        }, {
            key: "getTicksStart",
            value: function(e, r) {
                var n, i, o = e.ticks,
                    u = e.tickFormatter,
                    c = e.viewBox,
                    s = e.orientation,
                    f = e.minTickGap,
                    p = e.unit,
                    h = e.fontSize,
                    d = e.letterSpacing,
                    g = c.x,
                    v = c.y,
                    m = c.width,
                    b = c.height,
                    w = "top" === s || "bottom" === s ? "width" : "height",
                    O = (o || []).slice(),
                    j = p && "width" === w ? (0, l.getStringSize)(p, {
                        fontSize: h,
                        letterSpacing: d
                    })[w] : 0,
                    _ = O.length,
                    S = _ >= 2 ? (0, y.mathSign)(O[1].coordinate - O[0].coordinate) : 1;
                if (1 === S ? (n = "width" === w ? g : v, i = "width" === w ? g + m : v + b) : (n = "width" === w ? g + m : v + b, i = "width" === w ? g : v), r) {
                    var A = o[_ - 1],
                        k = t(a)(u) ? u(A.value, _ - 1) : A.value,
                        E = (0, l.getStringSize)(k, {
                            fontSize: h,
                            letterSpacing: d
                        })[w] + j,
                        M = S * (A.coordinate + S * E / 2 - i);
                    O[_ - 1] = A = x(x({}, A), {}, {
                        tickCoord: M > 0 ? A.coordinate - M * S : A.coordinate
                    }), S * (A.tickCoord - S * E / 2 - n) >= 0 && S * (A.tickCoord + S * E / 2 - i) <= 0 && (i = A.tickCoord - S * (E / 2 + f), O[_ - 1] = x(x({}, A), {}, {
                        isShow: !0
                    }))
                }
                for (var P = r ? _ - 1 : _, C = 0; C < P; C++) {
                    var T = O[C],
                        I = t(a)(u) ? u(T.value, C) : T.value,
                        N = (0, l.getStringSize)(I, {
                            fontSize: h,
                            letterSpacing: d
                        })[w] + j;
                    if (0 === C) {
                        var D = S * (T.coordinate - S * N / 2 - n);
                        O[C] = T = x(x({}, T), {}, {
                            tickCoord: D < 0 ? T.coordinate - D * S : T.coordinate
                        })
                    } else O[C] = T = x(x({}, T), {}, {
                        tickCoord: T.coordinate
                    });
                    S * (T.tickCoord - S * N / 2 - n) >= 0 && S * (T.tickCoord + S * N / 2 - i) <= 0 && (n = T.tickCoord + S * (N / 2 + f), O[C] = x(x({}, T), {}, {
                        isShow: !0
                    }))
                }
                return O.filter((function(t) {
                    return t.isShow
                }))
            }
        }, {
            key: "getTicksEnd",
            value: function(e) {
                var r, n, i = e.ticks,
                    o = e.tickFormatter,
                    u = e.viewBox,
                    c = e.orientation,
                    s = e.minTickGap,
                    f = e.unit,
                    p = e.fontSize,
                    h = e.letterSpacing,
                    d = u.x,
                    g = u.y,
                    v = u.width,
                    m = u.height,
                    b = "top" === c || "bottom" === c ? "width" : "height",
                    w = f && "width" === b ? (0, l.getStringSize)(f, {
                        fontSize: p,
                        letterSpacing: h
                    })[b] : 0,
                    O = (i || []).slice(),
                    j = O.length,
                    _ = j >= 2 ? (0, y.mathSign)(O[1].coordinate - O[0].coordinate) : 1;
                1 === _ ? (r = "width" === b ? d : g, n = "width" === b ? d + v : g + m) : (r = "width" === b ? d + v : g + m, n = "width" === b ? d : g);
                for (var S = j - 1; S >= 0; S--) {
                    var A = O[S],
                        k = t(a)(o) ? o(A.value, j - S - 1) : A.value,
                        E = (0, l.getStringSize)(k, {
                            fontSize: p,
                            letterSpacing: h
                        })[b] + w;
                    if (S === j - 1) {
                        var M = _ * (A.coordinate + _ * E / 2 - n);
                        O[S] = A = x(x({}, A), {}, {
                            tickCoord: M > 0 ? A.coordinate - M * _ : A.coordinate
                        })
                    } else O[S] = A = x(x({}, A), {}, {
                        tickCoord: A.coordinate
                    });
                    _ * (A.tickCoord - _ * E / 2 - r) >= 0 && _ * (A.tickCoord + _ * E / 2 - n) <= 0 && (n = A.tickCoord - _ * (E / 2 + s), O[S] = x(x({}, A), {}, {
                        isShow: !0
                    }))
                }
                return O.filter((function(t) {
                    return t.isShow
                }))
            }
        }, {
            key: "renderTickItem",
            value: function(e, r, n) {
                return t(u).isValidElement(e) ? t(u).cloneElement(e, r) : t(a)(e) ? e(r) : t(u).createElement(p.Text, m({}, r, {
                    className: "recharts-cartesian-axis-tick-value"
                }), n)
            }
        }], (n = [{
            key: "shouldComponentUpdate",
            value: function(t, e) {
                var r = t.viewBox,
                    n = O(t, ["viewBox"]),
                    i = this.props,
                    o = i.viewBox,
                    a = O(i, ["viewBox"]);
                return !(0, s.shallowEqual)(r, o) || !(0, s.shallowEqual)(n, a) || !(0, s.shallowEqual)(e, this.state)
            }
        }, {
            key: "componentDidMount",
            value: function() {
                var t = this.layerReference;
                if (t) {
                    var e = t.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];
                    e && this.setState({
                        fontSize: window.getComputedStyle(e).fontSize,
                        letterSpacing: window.getComputedStyle(e).letterSpacing
                    })
                }
            }
        }, {
            key: "getTickLineCoord",
            value: function(t) {
                var e, r, n, i, o, a, u = this.props,
                    c = u.x,
                    s = u.y,
                    l = u.width,
                    f = u.height,
                    p = u.orientation,
                    h = u.tickSize,
                    d = u.mirror,
                    g = u.tickMargin,
                    v = d ? -1 : 1,
                    m = t.tickSize || h,
                    b = (0, y.isNumber)(t.tickCoord) ? t.tickCoord : t.coordinate;
                switch (p) {
                    case "top":
                        e = r = t.coordinate, a = (n = (i = s + +!d * f) - v * m) - v * g, o = b;
                        break;
                    case "left":
                        n = i = t.coordinate, o = (e = (r = c + +!d * l) - v * m) - v * g, a = b;
                        break;
                    case "right":
                        n = i = t.coordinate, o = (e = (r = c + +d * l) + v * m) + v * g, a = b;
                        break;
                    default:
                        e = r = t.coordinate, a = (n = (i = s + +d * f) + v * m) + v * g, o = b
                }
                return {
                    line: {
                        x1: e,
                        y1: n,
                        x2: r,
                        y2: i
                    },
                    tick: {
                        x: o,
                        y: a
                    }
                }
            }
        }, {
            key: "getTickTextAnchor",
            value: function() {
                var t, e = this.props,
                    r = e.orientation,
                    n = e.mirror;
                switch (r) {
                    case "left":
                        t = n ? "start" : "end";
                        break;
                    case "right":
                        t = n ? "end" : "start";
                        break;
                    default:
                        t = "middle"
                }
                return t
            }
        }, {
            key: "getTickVerticalAnchor",
            value: function() {
                var t = this.props,
                    e = t.orientation,
                    r = t.mirror,
                    n = "end";
                switch (e) {
                    case "left":
                    case "right":
                        n = "middle";
                        break;
                    case "top":
                        n = r ? "start" : "end";
                        break;
                    default:
                        n = r ? "end" : "start"
                }
                return n
            }
        }, {
            key: "renderAxisLine",
            value: function() {
                var e = this.props,
                    r = e.x,
                    n = e.y,
                    i = e.width,
                    a = e.height,
                    s = e.orientation,
                    l = e.mirror,
                    f = e.axisLine,
                    p = x(x(x({}, (0, g.filterProps)(this.props)), (0, g.filterProps)(f)), {}, {
                        fill: "none"
                    });
                if ("top" === s || "bottom" === s) {
                    var h = +("top" === s && !l || "bottom" === s && l);
                    p = x(x({}, p), {}, {
                        x1: r,
                        y1: n + h * a,
                        x2: r + i,
                        y2: n + h * a
                    })
                } else {
                    var d = +("left" === s && !l || "right" === s && l);
                    p = x(x({}, p), {}, {
                        x1: r + d * i,
                        y1: n,
                        x2: r + d * i,
                        y2: n + a
                    })
                }
                return t(u).createElement("line", m({}, p, {
                    className: t(c)("recharts-cartesian-axis-line", t(o)(f, "className"))
                }))
            }
        }, {
            key: "renderTicks",
            value: function(e, r, n) {
                var i = this,
                    s = this.props,
                    l = s.tickLine,
                    p = s.stroke,
                    h = s.tick,
                    d = s.tickFormatter,
                    y = s.unit,
                    v = b.getTicks(x(x({}, this.props), {}, {
                        ticks: e
                    }), r, n),
                    w = this.getTickTextAnchor(),
                    O = this.getTickVerticalAnchor(),
                    j = (0, g.filterProps)(this.props),
                    _ = (0, g.filterProps)(h),
                    S = x(x({}, j), {}, {
                        fill: "none"
                    }, (0, g.filterProps)(l)),
                    A = v.map((function(e, r) {
                        var n = i.getTickLineCoord(e),
                            s = n.line,
                            A = n.tick,
                            k = x(x(x(x({
                                textAnchor: w,
                                verticalAnchor: O
                            }, j), {}, {
                                stroke: "none",
                                fill: p
                            }, _), A), {}, {
                                index: r,
                                payload: e,
                                visibleTicksCount: v.length,
                                tickFormatter: d
                            });
                        return t(u).createElement(f.Layer, m({
                            className: "recharts-cartesian-axis-tick",
                            key: "tick-".concat(r)
                        }, (0, g.adaptEventsOfChild)(i.props, e, r)), l && t(u).createElement("line", m({}, S, s, {
                            className: t(c)("recharts-cartesian-axis-tick-line", t(o)(l, "className"))
                        })), h && b.renderTickItem(h, k, "".concat(t(a)(d) ? d(e.value, r) : e.value).concat(y || "")))
                    }));
                return t(u).createElement("g", {
                    className: "recharts-cartesian-axis-ticks"
                }, A)
            }
        }, {
            key: "render",
            value: function() {
                var e = this,
                    r = this.props,
                    n = r.axisLine,
                    i = r.width,
                    o = r.height,
                    s = r.ticksGenerator,
                    l = r.className;
                if (r.hide) return null;
                var p = this.props,
                    d = p.ticks,
                    y = O(p, ["ticks"]),
                    g = d;
                return t(a)(s) && (g = d && d.length > 0 ? s(this.props) : s(y)), i <= 0 || o <= 0 || !g || !g.length ? null : t(u).createElement(f.Layer, {
                    className: t(c)("recharts-cartesian-axis", l),
                    ref: function(t) {
                        e.layerReference = t
                    }
                }, n && this.renderAxisLine(), this.renderTicks(g, this.state.fontSize, this.state.letterSpacing), h.Label.renderCallByParent(this.props))
            }
        }]) && j(r.prototype, n), i && j(r, i), b
    }(u.Component);
    E.displayName = "CartesianAxis", E.defaultProps = {
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
        orientation: "bottom",
        ticks: [],
        stroke: "#666",
        tickLine: !0,
        axisLine: !0,
        tick: !0,
        mirror: !1,
        minTickGap: 5,
        tickSize: 6,
        tickMargin: 2,
        interval: "preserveEnd"
    }
})), n.register("fOYuv", (function(r, i) {
    e(r.exports, "Brush", (function() {
        return E
    }));
    var o = n("hRZ1R"),
        a = n("hvrw6"),
        u = n("fywoC"),
        c = n("fe1on"),
        s = n("iECwa"),
        l = n("fYpyz"),
        f = n("94iDk"),
        p = n("kjJfJ"),
        h = n("fI5bH"),
        d = n("bqy56"),
        y = n("iquK2");

    function g(t) {
        return g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, g(t)
    }

    function v() {
        return v = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
            }
            return t
        }, v.apply(this, arguments)
    }

    function m(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), r.push.apply(r, n)
        }
        return r
    }

    function b(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2 ? m(Object(r), !0).forEach((function(e) {
                x(t, e, r[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : m(Object(r)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
            }))
        }
        return t
    }

    function x(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = r, t
    }

    function w(t, e) {
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    function O(t, e) {
        return O = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        }, O(t, e)
    }

    function j(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var r, n = A(t);
            if (e) {
                var i = A(this).constructor;
                r = Reflect.construct(n, arguments, i)
            } else r = n.apply(this, arguments);
            return _(this, r)
        }
    }

    function _(t, e) {
        return !e || "object" !== g(e) && "function" != typeof e ? S(t) : e
    }

    function S(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function A(t) {
        return A = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }, A(t)
    }
    var k = function(t) {
            return t.changedTouches && !!t.changedTouches.length
        },
        E = function(e) {
            ! function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && O(t, e)
            }(m, e);
            var r, n, i, g = j(m);

            function m(t) {
                var e;
                return function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, m), (e = g.call(this, t)).leaveTimer = void 0, e.travellerDragStartHandlers = void 0, e.handleDrag = function(t) {
                    e.leaveTimer && (clearTimeout(e.leaveTimer), e.leaveTimer = null), e.state.isTravellerMoving ? e.handleTravellerMove(t) : e.state.isSlideMoving && e.handleSlideDrag(t)
                }, e.handleTouchMove = function(t) {
                    null != t.changedTouches && t.changedTouches.length > 0 && e.handleDrag(t.changedTouches[0])
                }, e.handleDragEnd = function() {
                    e.setState({
                        isTravellerMoving: !1,
                        isSlideMoving: !1
                    }), e.detachDragEndListener()
                }, e.handleLeaveWrapper = function() {
                    (e.state.isTravellerMoving || e.state.isSlideMoving) && (e.leaveTimer = window.setTimeout(e.handleDragEnd, e.props.leaveTimeOut))
                }, e.handleEnterSlideOrTraveller = function() {
                    e.setState({
                        isTextActive: !0
                    })
                }, e.handleLeaveSlideOrTraveller = function() {
                    e.setState({
                        isTextActive: !1
                    })
                }, e.handleSlideDragStart = function(t) {
                    var r = k(t) ? t.changedTouches[0] : t;
                    e.setState({
                        isTravellerMoving: !1,
                        isSlideMoving: !0,
                        slideMoveStartX: r.pageX
                    }), e.attachDragEndListener()
                }, e.travellerDragStartHandlers = {
                    startX: e.handleTravellerDragStart.bind(S(e), "startX"),
                    endX: e.handleTravellerDragStart.bind(S(e), "endX")
                }, e.state = {}, e
            }
            return r = m, i = [{
                key: "renderDefaultTraveller",
                value: function(e) {
                    var r = e.x,
                        n = e.y,
                        i = e.width,
                        o = e.height,
                        a = e.stroke,
                        c = Math.floor(n + o / 2) - 1;
                    return t(u).createElement(t(u).Fragment, null, t(u).createElement("rect", {
                        x: r,
                        y: n,
                        width: i,
                        height: o,
                        fill: a,
                        stroke: "none"
                    }), t(u).createElement("line", {
                        x1: r + 1,
                        y1: c,
                        x2: r + i - 1,
                        y2: c,
                        fill: "none",
                        stroke: "#fff"
                    }), t(u).createElement("line", {
                        x1: r + 1,
                        y1: c + 2,
                        x2: r + i - 1,
                        y2: c + 2,
                        fill: "none",
                        stroke: "#fff"
                    }))
                }
            }, {
                key: "renderTraveller",
                value: function(e, r) {
                    return t(u).isValidElement(e) ? t(u).cloneElement(e, r) : t(o)(e) ? e(r) : m.renderDefaultTraveller(r)
                }
            }, {
                key: "getDerivedStateFromProps",
                value: function(e, r) {
                    var n = e.data,
                        i = e.width,
                        o = e.x,
                        u = e.travellerWidth,
                        c = e.updateId,
                        l = e.startIndex,
                        f = e.endIndex;
                    if (n !== r.prevData || c !== r.prevUpdateId) return b({
                        prevData: n,
                        prevTravellerWidth: u,
                        prevUpdateId: c,
                        prevX: o,
                        prevWidth: i
                    }, n && n.length ? function(e) {
                        var r = e.data,
                            n = e.startIndex,
                            i = e.endIndex,
                            o = e.x,
                            u = e.width,
                            c = e.travellerWidth;
                        if (!r || !r.length) return {};
                        var l = r.length,
                            f = (0, s.point)().domain(t(a)(0, l)).range([o, o + u - c]),
                            p = f.domain().map((function(t) {
                                return f(t)
                            }));
                        return {
                            isTextActive: !1,
                            isSlideMoving: !1,
                            isTravellerMoving: !1,
                            startX: f(n),
                            endX: f(i),
                            scale: f,
                            scaleValues: p
                        }
                    }({
                        data: n,
                        width: i,
                        x: o,
                        travellerWidth: u,
                        startIndex: l,
                        endIndex: f
                    }) : {
                        scale: null,
                        scaleValues: null
                    });
                    if (r.scale && (i !== r.prevWidth || o !== r.prevX || u !== r.prevTravellerWidth)) {
                        r.scale.range([o, o + i - u]);
                        var p = r.scale.domain().map((function(t) {
                            return r.scale(t)
                        }));
                        return {
                            prevData: n,
                            prevTravellerWidth: u,
                            prevUpdateId: c,
                            prevX: o,
                            prevWidth: i,
                            startX: r.scale(e.startIndex),
                            endX: r.scale(e.endIndex),
                            scaleValues: p
                        }
                    }
                    return null
                }
            }, {
                key: "getIndexInRange",
                value: function(t, e) {
                    for (var r = 0, n = t.length - 1; n - r > 1;) {
                        var i = Math.floor((r + n) / 2);
                        t[i] > e ? n = i : r = i
                    }
                    return e >= t[n] ? n : r
                }
            }], (n = [{
                key: "componentWillUnmount",
                value: function() {
                    this.leaveTimer && (clearTimeout(this.leaveTimer), this.leaveTimer = null), this.detachDragEndListener()
                }
            }, {
                key: "getIndex",
                value: function(t) {
                    var e = t.startX,
                        r = t.endX,
                        n = this.state.scaleValues,
                        i = this.props,
                        o = i.gap,
                        a = i.data.length - 1,
                        u = Math.min(e, r),
                        c = Math.max(e, r),
                        s = m.getIndexInRange(n, u),
                        l = m.getIndexInRange(n, c);
                    return {
                        startIndex: s - s % o,
                        endIndex: l === a ? a : l - l % o
                    }
                }
            }, {
                key: "getTextOfTick",
                value: function(e) {
                    var r = this.props,
                        n = r.data,
                        i = r.tickFormatter,
                        a = r.dataKey,
                        u = (0, p.getValueByDataKey)(n[e], a, e);
                    return t(o)(i) ? i(u, e) : u
                }
            }, {
                key: "attachDragEndListener",
                value: function() {
                    window.addEventListener("mouseup", this.handleDragEnd, !0), window.addEventListener("touchend", this.handleDragEnd, !0)
                }
            }, {
                key: "detachDragEndListener",
                value: function() {
                    window.removeEventListener("mouseup", this.handleDragEnd, !0), window.removeEventListener("touchend", this.handleDragEnd, !0)
                }
            }, {
                key: "handleSlideDrag",
                value: function(t) {
                    var e = this.state,
                        r = e.slideMoveStartX,
                        n = e.startX,
                        i = e.endX,
                        o = this.props,
                        a = o.x,
                        u = o.width,
                        c = o.travellerWidth,
                        s = o.startIndex,
                        l = o.endIndex,
                        f = o.onChange,
                        p = t.pageX - r;
                    p > 0 ? p = Math.min(p, a + u - c - i, a + u - c - n) : p < 0 && (p = Math.max(p, a - n, a - i));
                    var h = this.getIndex({
                        startX: n + p,
                        endX: i + p
                    });
                    h.startIndex === s && h.endIndex === l || !f || f(h), this.setState({
                        startX: n + p,
                        endX: i + p,
                        slideMoveStartX: t.pageX
                    })
                }
            }, {
                key: "handleTravellerDragStart",
                value: function(t, e) {
                    var r = k(e) ? e.changedTouches[0] : e;
                    this.setState({
                        isSlideMoving: !1,
                        isTravellerMoving: !0,
                        movingTravellerId: t,
                        brushMoveStartX: r.pageX
                    }), this.attachDragEndListener()
                }
            }, {
                key: "handleTravellerMove",
                value: function(t) {
                    var e, r = this.state,
                        n = r.brushMoveStartX,
                        i = r.movingTravellerId,
                        o = r.endX,
                        a = r.startX,
                        u = this.state[i],
                        c = this.props,
                        s = c.x,
                        l = c.width,
                        f = c.travellerWidth,
                        p = c.onChange,
                        h = c.gap,
                        d = c.data,
                        y = {
                            startX: this.state.startX,
                            endX: this.state.endX
                        },
                        g = t.pageX - n;
                    g > 0 ? g = Math.min(g, s + l - f - u) : g < 0 && (g = Math.max(g, s - u)), y[i] = u + g;
                    var v = this.getIndex(y),
                        m = v.startIndex,
                        b = v.endIndex;
                    this.setState((x(e = {}, i, u + g), x(e, "brushMoveStartX", t.pageX), e), (function() {
                        var t;
                        p && (t = d.length - 1, ("startX" === i && (o > a ? m % h == 0 : b % h == 0) || o < a && b === t || "endX" === i && (o > a ? b % h == 0 : m % h == 0) || o > a && b === t) && p(v))
                    }))
                }
            }, {
                key: "renderBackground",
                value: function() {
                    var e = this.props,
                        r = e.x,
                        n = e.y,
                        i = e.width,
                        o = e.height,
                        a = e.fill,
                        c = e.stroke;
                    return t(u).createElement("rect", {
                        stroke: c,
                        fill: a,
                        x: r,
                        y: n,
                        width: i,
                        height: o
                    })
                }
            }, {
                key: "renderPanorama",
                value: function() {
                    var e = this.props,
                        r = e.x,
                        n = e.y,
                        i = e.width,
                        o = e.height,
                        a = e.data,
                        c = e.children,
                        s = e.padding,
                        l = u.Children.only(c);
                    return l ? t(u).cloneElement(l, {
                        x: r,
                        y: n,
                        width: i,
                        height: o,
                        margin: s,
                        compact: !0,
                        data: a
                    }) : null
                }
            }, {
                key: "renderTravellerLayer",
                value: function(e, r) {
                    var n = this.props,
                        i = n.y,
                        o = n.travellerWidth,
                        a = n.height,
                        c = n.traveller,
                        s = Math.max(e, this.props.x),
                        f = b(b({}, (0, y.filterProps)(this.props)), {}, {
                            x: s,
                            y: i,
                            width: o,
                            height: a
                        });
                    return t(u).createElement(l.Layer, {
                        className: "recharts-brush-traveller",
                        onMouseEnter: this.handleEnterSlideOrTraveller,
                        onMouseLeave: this.handleLeaveSlideOrTraveller,
                        onMouseDown: this.travellerDragStartHandlers[r],
                        onTouchStart: this.travellerDragStartHandlers[r],
                        style: {
                            cursor: "col-resize"
                        }
                    }, m.renderTraveller(c, f))
                }
            }, {
                key: "renderSlide",
                value: function(e, r) {
                    var n = this.props,
                        i = n.y,
                        o = n.height,
                        a = n.stroke,
                        c = n.travellerWidth,
                        s = Math.min(e, r) + c,
                        l = Math.max(Math.abs(r - e) - c, 0);
                    return t(u).createElement("rect", {
                        className: "recharts-brush-slide",
                        onMouseEnter: this.handleEnterSlideOrTraveller,
                        onMouseLeave: this.handleLeaveSlideOrTraveller,
                        onMouseDown: this.handleSlideDragStart,
                        onTouchStart: this.handleSlideDragStart,
                        style: {
                            cursor: "move"
                        },
                        stroke: "none",
                        fill: a,
                        fillOpacity: .2,
                        x: s,
                        y: i,
                        width: l,
                        height: o
                    })
                }
            }, {
                key: "renderText",
                value: function() {
                    var e = this.props,
                        r = e.startIndex,
                        n = e.endIndex,
                        i = e.y,
                        o = e.height,
                        a = e.travellerWidth,
                        c = e.stroke,
                        s = this.state,
                        p = s.startX,
                        h = s.endX,
                        d = {
                            pointerEvents: "none",
                            fill: c
                        };
                    return t(u).createElement(l.Layer, {
                        className: "recharts-brush-texts"
                    }, t(u).createElement(f.Text, v({
                        textAnchor: "end",
                        verticalAnchor: "middle",
                        x: Math.min(p, h) - 5,
                        y: i + o / 2
                    }, d), this.getTextOfTick(r)), t(u).createElement(f.Text, v({
                        textAnchor: "start",
                        verticalAnchor: "middle",
                        x: Math.max(p, h) + a + 5,
                        y: i + o / 2
                    }, d), this.getTextOfTick(n)))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props,
                        r = e.data,
                        n = e.className,
                        i = e.children,
                        o = e.x,
                        a = e.y,
                        s = e.width,
                        f = e.height,
                        p = e.alwaysShowText,
                        y = this.state,
                        g = y.startX,
                        v = y.endX,
                        m = y.isTextActive,
                        b = y.isSlideMoving,
                        x = y.isTravellerMoving;
                    if (!r || !r.length || !(0, h.isNumber)(o) || !(0, h.isNumber)(a) || !(0, h.isNumber)(s) || !(0, h.isNumber)(f) || s <= 0 || f <= 0) return null;
                    var w = t(c)("recharts-brush", n),
                        O = 1 === t(u).Children.count(i),
                        j = (0, d.generatePrefixStyle)("userSelect", "none");
                    return t(u).createElement(l.Layer, {
                        className: w,
                        onMouseMove: this.handleDrag,
                        onMouseLeave: this.handleLeaveWrapper,
                        onTouchMove: this.handleTouchMove,
                        style: j
                    }, this.renderBackground(), O && this.renderPanorama(), this.renderSlide(g, v), this.renderTravellerLayer(g, "startX"), this.renderTravellerLayer(v, "endX"), (m || b || x || p) && this.renderText())
                }
            }]) && w(r.prototype, n), i && w(r, i), m
        }(u.PureComponent);
    E.displayName = "Brush", E.defaultProps = {
        height: 40,
        travellerWidth: 5,
        gap: 1,
        fill: "#fff",
        stroke: "#666",
        padding: {
            top: 1,
            right: 1,
            bottom: 1,
            left: 1
        },
        leaveTimeOut: 1e3,
        alwaysShowText: !1
    }
})), n.register("bqy56", (function(t, r) {
    function n(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), r.push.apply(r, n)
        }
        return r
    }

    function i(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2 ? n(Object(r), !0).forEach((function(e) {
                o(t, e, r[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
            }))
        }
        return t
    }

    function o(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = r, t
    }
    e(t.exports, "generatePrefixStyle", (function() {
        return u
    }));
    var a = ["Webkit", "Moz", "O", "ms"],
        u = function(t, e) {
            if (!t) return null;
            var r = t.replace(/(\w)/, (function(t) {
                    return t.toUpperCase()
                })),
                n = a.reduce((function(t, n) {
                    return i(i({}, t), {}, o({}, n + r, e))
                }), {});
            return n[t] = e, n
        }
})), n.register("alOxC", (function(t, r) {
    e(t.exports, "detectReferenceElementsDomain", (function() {
        return l
    }));
    var i = n("7WQCn"),
        o = n("h1VMz"),
        a = n("8EOCT"),
        u = n("lLJhy"),
        c = n("kEum4"),
        s = n("fI5bH"),
        l = function(t, e, r, n, l) {
            var f = (0, c.findAllByType)(t, o.ReferenceLine.displayName),
                p = (0, c.findAllByType)(t, i.ReferenceDot.displayName),
                h = f.concat(p),
                d = (0, c.findAllByType)(t, a.ReferenceArea.displayName),
                y = "".concat(n, "Id"),
                g = n[0],
                v = e;
            if (h.length && (v = h.reduce((function(t, e) {
                    if (e.props[y] === r && (0, u.ifOverflowMatches)(e.props, "extendDomain") && (0, s.isNumber)(e.props[g])) {
                        var n = e.props[g];
                        return [Math.min(t[0], n), Math.max(t[1], n)]
                    }
                    return t
                }), v)), d.length) {
                var m = "".concat(g, "1"),
                    b = "".concat(g, "2");
                v = d.reduce((function(t, e) {
                    if (e.props[y] === r && (0, u.ifOverflowMatches)(e.props, "extendDomain") && (0, s.isNumber)(e.props[m]) && (0, s.isNumber)(e.props[b])) {
                        var n = e.props[m],
                            i = e.props[b];
                        return [Math.min(t[0], n, i), Math.max(t[1], n, i)]
                    }
                    return t
                }), v)
            }
            return l && l.length && (v = l.reduce((function(t, e) {
                return (0, s.isNumber)(e) ? [Math.min(t[0], e), Math.max(t[1], e)] : t
            }), v)), v
        }
})), n.register("7WQCn", (function(r, i) {
    e(r.exports, "ReferenceDot", (function() {
        return x
    }));
    var o = n("hRZ1R"),
        a = n("fywoC"),
        u = n("fe1on"),
        c = n("fYpyz"),
        s = n("bzQF8"),
        l = n("jo56E"),
        f = n("fI5bH"),
        p = n("lLJhy"),
        h = n("hj1BI"),
        d = n("1VoaV"),
        y = n("iquK2");

    function g() {
        return g = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
            }
            return t
        }, g.apply(this, arguments)
    }

    function v(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), r.push.apply(r, n)
        }
        return r
    }

    function m(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2 ? v(Object(r), !0).forEach((function(e) {
                b(t, e, r[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : v(Object(r)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
            }))
        }
        return t
    }

    function b(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = r, t
    }

    function x(e) {
        var r = e.x,
            n = e.y,
            i = e.r,
            o = e.alwaysShow,
            s = e.clipPathId,
            g = (0, f.isNumOrStr)(r),
            v = (0, f.isNumOrStr)(n);
        if ((0, d.warn)(void 0 === o, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !g || !v) return null;
        var b = function(t) {
            var e = t.x,
                r = t.y,
                n = t.xAxis,
                i = t.yAxis,
                o = (0, h.createLabeledScales)({
                    x: n.scale,
                    y: i.scale
                }),
                a = o.apply({
                    x: e,
                    y: r
                }, {
                    bandAware: !0
                });
            return (0, p.ifOverflowMatches)(t, "discard") && !o.isInRange(a) ? null : a
        }(e);
        if (!b) return null;
        var w = b.x,
            O = b.y,
            j = e.shape,
            _ = e.className,
            S = m(m({
                clipPath: (0, p.ifOverflowMatches)(e, "hidden") ? "url(#".concat(s, ")") : void 0
            }, (0, y.filterProps)(e, !0)), {}, {
                cx: w,
                cy: O
            });
        return t(a).createElement(c.Layer, {
            className: t(u)("recharts-reference-dot", _)
        }, x.renderDot(j, S), l.Label.renderCallByParent(e, {
            x: w - i,
            y: O - i,
            width: 2 * i,
            height: 2 * i
        }))
    }
    x.displayName = "ReferenceDot", x.defaultProps = {
        isFront: !1,
        ifOverflow: "discard",
        xAxisId: 0,
        yAxisId: 0,
        r: 10,
        fill: "#fff",
        stroke: "#ccc",
        fillOpacity: 1,
        strokeWidth: 1
    }, x.renderDot = function(e, r) {
        return t(a).isValidElement(e) ? t(a).cloneElement(e, r) : t(o)(e) ? e(r) : t(a).createElement(s.Dot, g({}, r, {
            cx: r.cx,
            cy: r.cy,
            className: "recharts-reference-dot-dot"
        }))
    }
})), n.register("lLJhy", (function(t, r) {
    e(t.exports, "ifOverflowMatches", (function() {
        return n
    }));
    var n = function(t, e) {
        var r = t.alwaysShow,
            n = t.ifOverflow;
        return r && (n = "extendDomain"), n === e
    }
})), n.register("hj1BI", (function(r, i) {
    e(r.exports, "formatAxisMap", (function() {
        return d
    })), e(r.exports, "rectWithPoints", (function() {
        return y
    })), e(r.exports, "rectWithCoords", (function() {
        return g
    })), e(r.exports, "createLabeledScales", (function() {
        return m
    }));
    var o = n("f0gtY"),
        a = n("gIeYs"),
        u = n("kjJfJ"),
        c = n("kEum4"),
        s = n("fI5bH");

    function l(t, e) {
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    function f(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), r.push.apply(r, n)
        }
        return r
    }

    function p(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2 ? f(Object(r), !0).forEach((function(e) {
                h(t, e, r[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : f(Object(r)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
            }))
        }
        return t
    }

    function h(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = r, t
    }
    var d = function(t, e, r, n, i) {
            var o = t.width,
                a = t.height,
                l = t.layout,
                f = t.children,
                d = Object.keys(e),
                y = {
                    left: r.left,
                    leftMirror: r.left,
                    right: o - r.right,
                    rightMirror: o - r.right,
                    top: r.top,
                    topMirror: r.top,
                    bottom: a - r.bottom,
                    bottomMirror: a - r.bottom
                },
                g = !!(0, c.findChildByType)(f, "Bar");
            return d.reduce((function(o, a) {
                var c, f, d, v, m, b = e[a],
                    x = b.orientation,
                    w = b.domain,
                    O = b.padding,
                    j = void 0 === O ? {} : O,
                    _ = b.mirror,
                    S = b.reversed,
                    A = "".concat(x).concat(_ ? "Mirror" : "");
                if ("number" === b.type && ("gap" === b.padding || "no-gap" === b.padding)) {
                    var k = w[1] - w[0],
                        E = 1 / 0,
                        M = b.categoricalDomain.sort();
                    M.forEach((function(t, e) {
                        e > 0 && (E = Math.min((t || 0) - (M[e - 1] || 0), E))
                    }));
                    var P = E / k,
                        C = "vertical" === b.layout ? r.height : r.width;
                    if ("gap" === b.padding && (c = P * C / 2), "no-gap" === b.padding) {
                        var T = (0, s.getPercentValue)(t.barCategoryGap, P * C),
                            I = P * C / 2;
                        c = I - T - (I - T) / C * T
                    }
                }
                f = "xAxis" === n ? [r.left + (j.left || 0) + (c || 0), r.left + r.width - (j.right || 0) - (c || 0)] : "yAxis" === n ? "horizontal" === l ? [r.top + r.height - (j.bottom || 0), r.top + (j.top || 0)] : [r.top + (j.top || 0) + (c || 0), r.top + r.height - (j.bottom || 0) - (c || 0)] : b.range, S && (f = [f[1], f[0]]);
                var N = (0, u.parseScale)(b, i, g),
                    D = N.scale,
                    R = N.realScaleType;
                D.domain(w).range(f), (0, u.checkDomainOfScale)(D);
                var B = (0, u.getTicksOfScale)(D, p(p({}, b), {}, {
                    realScaleType: R
                }));
                "xAxis" === n ? (m = "top" === x && !_ || "bottom" === x && _, d = r.left, v = y[A] - m * b.height) : "yAxis" === n && (m = "left" === x && !_ || "right" === x && _, d = y[A] - m * b.width, v = r.top);
                var L = p(p(p({}, b), B), {}, {
                    realScaleType: R,
                    x: d,
                    y: v,
                    scale: D,
                    width: "xAxis" === n ? r.width : b.width,
                    height: "yAxis" === n ? r.height : b.height
                });
                return L.bandSize = (0, u.getBandSizeOfAxis)(L, B), b.hide || "xAxis" !== n ? b.hide || (y[A] += (m ? -1 : 1) * L.width) : y[A] += (m ? -1 : 1) * L.height, p(p({}, o), {}, h({}, a, L))
            }), {})
        },
        y = function(t, e) {
            var r = t.x,
                n = t.y,
                i = e.x,
                o = e.y;
            return {
                x: Math.min(r, i),
                y: Math.min(n, o),
                width: Math.abs(i - r),
                height: Math.abs(o - n)
            }
        },
        g = function(t) {
            var e = t.x1,
                r = t.y1,
                n = t.x2,
                i = t.y2;
            return y({
                x: e,
                y: r
            }, {
                x: n,
                y: i
            })
        },
        v = function() {
            function t(e) {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.scale = void 0, this.scale = e
            }
            var e, r, n;
            return e = t, r = [{
                key: "domain",
                get: function() {
                    return this.scale.domain
                }
            }, {
                key: "range",
                get: function() {
                    return this.scale.range
                }
            }, {
                key: "rangeMin",
                get: function() {
                    return this.range()[0]
                }
            }, {
                key: "rangeMax",
                get: function() {
                    return this.range()[1]
                }
            }, {
                key: "bandwidth",
                get: function() {
                    return this.scale.bandwidth
                }
            }, {
                key: "apply",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = e.bandAware,
                        n = e.position;
                    if (void 0 !== t) {
                        if (n) switch (n) {
                            case "start":
                            default:
                                return this.scale(t);
                            case "middle":
                                var i = this.bandwidth ? this.bandwidth() / 2 : 0;
                                return this.scale(t) + i;
                            case "end":
                                var o = this.bandwidth ? this.bandwidth() : 0;
                                return this.scale(t) + o
                        }
                        if (r) {
                            var a = this.bandwidth ? this.bandwidth() / 2 : 0;
                            return this.scale(t) + a
                        }
                        return this.scale(t)
                    }
                }
            }, {
                key: "isInRange",
                value: function(t) {
                    var e = this.range(),
                        r = e[0],
                        n = e[e.length - 1];
                    return r <= n ? t >= r && t <= n : t >= n && t <= r
                }
            }], n = [{
                key: "create",
                value: function(e) {
                    return new t(e)
                }
            }], r && l(e.prototype, r), n && l(e, n), t
        }();
    v.EPS = 1e-4;
    var m = function(e) {
        var r = Object.keys(e).reduce((function(t, r) {
            return p(p({}, t), {}, h({}, r, v.create(e[r])))
        }), {});
        return p(p({}, r), {}, {
            apply: function(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    i = n.bandAware,
                    o = n.position;
                return t(a)(e, (function(t, e) {
                    return r[e].apply(t, {
                        bandAware: i,
                        position: o
                    })
                }))
            },
            isInRange: function(e) {
                return t(o)(e, (function(t, e) {
                    return r[e].isInRange(t)
                }))
            }
        })
    }
})), n.register("gIeYs", (function(t, e) {
    var r = n("25vRz"),
        i = n("ar3u5"),
        o = n("c3Npb");
    t.exports = function(t, e) {
        var n = {};
        return e = o(e, 3), i(t, (function(t, i, o) {
            r(n, i, e(t, i, o))
        })), n
    }
})), n.register("25vRz", (function(t, e) {
    var r = n("6NKwF");
    t.exports = function(t, e, n) {
        "__proto__" == e && r ? r(t, e, {
            configurable: !0,
            enumerable: !0,
            value: n,
            writable: !0
        }) : t[e] = n
    }
})), n.register("1VoaV", (function(t, r) {
    e(t.exports, "warn", (function() {
        return n
    }));
    var n = function(t, e) {
        for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++) n[i - 2] = arguments[i]
    }
})), n.register("h1VMz", (function(r, i) {
    e(r.exports, "ReferenceLine", (function() {
        return O
    }));
    var o = n("gTTiA"),
        a = n("hRZ1R"),
        u = n("fywoC"),
        c = n("fe1on"),
        s = n("fYpyz"),
        l = n("jo56E"),
        f = n("lLJhy"),
        p = n("fI5bH"),
        h = n("hj1BI"),
        d = n("1VoaV"),
        y = n("iquK2");

    function g(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), r.push.apply(r, n)
        }
        return r
    }

    function v(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2 ? g(Object(r), !0).forEach((function(e) {
                m(t, e, r[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : g(Object(r)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
            }))
        }
        return t
    }

    function m(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = r, t
    }

    function b(t, e) {
        return function(t) {
            if (Array.isArray(t)) return t
        }(t) || function(t, e) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
            var r = [],
                n = !0,
                i = !1,
                o = void 0;
            try {
                for (var a, u = t[Symbol.iterator](); !(n = (a = u.next()).done) && (r.push(a.value), !e || r.length !== e); n = !0);
            } catch (t) {
                i = !0, o = t
            } finally {
                try {
                    n || null == u.return || u.return()
                } finally {
                    if (i) throw o
                }
            }
            return r
        }(t, e) || function(t, e) {
            if (!t) return;
            if ("string" == typeof t) return x(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(t);
            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return x(t, e)
        }(t, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function x(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n
    }

    function w() {
        return w = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
            }
            return t
        }, w.apply(this, arguments)
    }

    function O(e) {
        var r = e.x,
            n = e.y,
            i = e.segment,
            g = e.xAxis,
            m = e.yAxis,
            x = e.shape,
            O = e.className,
            j = e.alwaysShow,
            _ = e.clipPathId;
        (0, d.warn)(void 0 === j, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
        var S = function(e, r, n, i, a) {
            var u = a.viewBox,
                c = u.x,
                s = u.y,
                l = u.width,
                p = u.height,
                h = a.position;
            if (n) {
                var d = a.y,
                    y = a.yAxis.orientation,
                    g = e.y.apply(d, {
                        position: h
                    });
                if ((0, f.ifOverflowMatches)(a, "discard") && !e.y.isInRange(g)) return null;
                var v = [{
                    x: c + l,
                    y: g
                }, {
                    x: c,
                    y: g
                }];
                return "left" === y ? v.reverse() : v
            }
            if (r) {
                var m = a.x,
                    b = a.xAxis.orientation,
                    x = e.x.apply(m, {
                        position: h
                    });
                if ((0, f.ifOverflowMatches)(a, "discard") && !e.x.isInRange(x)) return null;
                var w = [{
                    x: x,
                    y: s + p
                }, {
                    x: x,
                    y: s
                }];
                return "top" === b ? w.reverse() : w
            }
            if (i) {
                var O = a.segment.map((function(t) {
                    return e.apply(t, {
                        position: h
                    })
                }));
                return (0, f.ifOverflowMatches)(a, "discard") && t(o)(O, (function(t) {
                    return !e.isInRange(t)
                })) ? null : O
            }
            return null
        }((0, h.createLabeledScales)({
            x: g.scale,
            y: m.scale
        }), (0, p.isNumOrStr)(r), (0, p.isNumOrStr)(n), i && 2 === i.length, e);
        if (!S) return null;
        var A = b(S, 2),
            k = A[0],
            E = k.x,
            M = k.y,
            P = A[1],
            C = P.x,
            T = P.y,
            I = v(v({
                clipPath: (0, f.ifOverflowMatches)(e, "hidden") ? "url(#".concat(_, ")") : void 0
            }, (0, y.filterProps)(e, !0)), {}, {
                x1: E,
                y1: M,
                x2: C,
                y2: T
            });
        return t(u).createElement(s.Layer, {
            className: t(c)("recharts-reference-line", O)
        }, function(e, r) {
            return t(u).isValidElement(e) ? t(u).cloneElement(e, r) : t(a)(e) ? e(r) : t(u).createElement("line", w({}, r, {
                className: "recharts-reference-line-line"
            }))
        }(x, I), l.Label.renderCallByParent(e, (0, h.rectWithCoords)({
            x1: E,
            y1: M,
            x2: C,
            y2: T
        })))
    }
    O.displayName = "ReferenceLine", O.defaultProps = {
        isFront: !1,
        ifOverflow: "discard",
        xAxisId: 0,
        yAxisId: 0,
        fill: "none",
        stroke: "#ccc",
        fillOpacity: 1,
        strokeWidth: 1,
        position: "middle"
    }
})), n.register("gTTiA", (function(t, e) {
    var r = n("gcdjS"),
        i = n("c3Npb"),
        o = n("2GBHZ"),
        a = n("42aAU"),
        u = n("f0JKU");
    t.exports = function(t, e, n) {
        var c = a(t) ? r : o;
        return n && u(t, e, n) && (e = void 0), c(t, i(e, 3))
    }
})), n.register("2GBHZ", (function(t, e) {
    var r = n("9JNzv");
    t.exports = function(t, e) {
        var n;
        return r(t, (function(t, r, i) {
            return !(n = e(t, r, i))
        })), !!n
    }
})), n.register("8EOCT", (function(r, i) {
    e(r.exports, "ReferenceArea", (function() {
        return x
    }));
    var o = n("hRZ1R"),
        a = n("fywoC"),
        u = n("fe1on"),
        c = n("fYpyz"),
        s = n("jo56E"),
        l = n("hj1BI"),
        f = n("lLJhy"),
        p = n("fI5bH"),
        h = n("1VoaV"),
        d = n("5W6gH"),
        y = n("iquK2");

    function g() {
        return g = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
            }
            return t
        }, g.apply(this, arguments)
    }

    function v(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), r.push.apply(r, n)
        }
        return r
    }

    function m(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2 ? v(Object(r), !0).forEach((function(e) {
                b(t, e, r[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : v(Object(r)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
            }))
        }
        return t
    }

    function b(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = r, t
    }

    function x(e) {
        var r = e.x1,
            n = e.x2,
            i = e.y1,
            o = e.y2,
            d = e.className,
            g = e.alwaysShow,
            v = e.clipPathId;
        (0, h.warn)(void 0 === g, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
        var b = (0, p.isNumOrStr)(r),
            w = (0, p.isNumOrStr)(n),
            O = (0, p.isNumOrStr)(i),
            j = (0, p.isNumOrStr)(o),
            _ = e.shape;
        if (!(b || w || O || j || _)) return null;
        var S = function(t, e, r, n, i) {
            var o = i.x1,
                a = i.x2,
                u = i.y1,
                c = i.y2,
                s = i.xAxis,
                p = i.yAxis;
            if (!s || !p) return null;
            var h = (0, l.createLabeledScales)({
                    x: s.scale,
                    y: p.scale
                }),
                d = {
                    x: t ? h.x.apply(o, {
                        position: "start"
                    }) : h.x.rangeMin,
                    y: r ? h.y.apply(u, {
                        position: "start"
                    }) : h.y.rangeMin
                },
                y = {
                    x: e ? h.x.apply(a, {
                        position: "end"
                    }) : h.x.rangeMax,
                    y: n ? h.y.apply(c, {
                        position: "end"
                    }) : h.y.rangeMax
                };
            return !(0, f.ifOverflowMatches)(i, "discard") || h.isInRange(d) && h.isInRange(y) ? (0, l.rectWithPoints)(d, y) : null
        }(b, w, O, j, e);
        if (!S && !_) return null;
        var A = (0, f.ifOverflowMatches)(e, "hidden") ? "url(#".concat(v, ")") : void 0;
        return t(a).createElement(c.Layer, {
            className: t(u)("recharts-reference-area", d)
        }, x.renderRect(_, m(m({
            clipPath: A
        }, (0, y.filterProps)(e, !0)), S)), s.Label.renderCallByParent(e, S))
    }
    x.displayName = "ReferenceArea", x.defaultProps = {
        isFront: !1,
        ifOverflow: "discard",
        xAxisId: 0,
        yAxisId: 0,
        r: 10,
        fill: "#ccc",
        fillOpacity: .5,
        stroke: "none",
        strokeWidth: 1
    }, x.renderRect = function(e, r) {
        return t(a).isValidElement(e) ? t(a).cloneElement(e, r) : t(o)(e) ? e(r) : t(a).createElement(d.Rectangle, g({}, r, {
            className: "recharts-reference-area-rect"
        }))
    }
})), n.register("3rsHt", (function(r, i) {
    e(r.exports, "eventCenter", (function() {
        return o
    })), e(r.exports, "SYNC_EVENT", (function() {
        return a
    }));
    var o = new(t(n("gU2bZ")));
    o.setMaxListeners && o.setMaxListeners(10);
    var a = "recharts.syncMouseEvents"
})), n.register("gU2bZ", (function(t, e) {
    var r = Object.prototype.hasOwnProperty,
        n = "~";

    function i() {}

    function o(t, e, r) {
        this.fn = t, this.context = e, this.once = r || !1
    }

    function a(t, e, r, i, a) {
        if ("function" != typeof r) throw new TypeError("The listener must be a function");
        var u = new o(r, i || t, a),
            c = n ? n + e : e;
        return t._events[c] ? t._events[c].fn ? t._events[c] = [t._events[c], u] : t._events[c].push(u) : (t._events[c] = u, t._eventsCount++), t
    }

    function u(t, e) {
        0 == --t._eventsCount ? t._events = new i : delete t._events[e]
    }

    function c() {
        this._events = new i, this._eventsCount = 0
    }
    Object.create && (i.prototype = Object.create(null), (new i).__proto__ || (n = !1)), c.prototype.eventNames = function() {
        var t, e, i = [];
        if (0 === this._eventsCount) return i;
        for (e in t = this._events) r.call(t, e) && i.push(n ? e.slice(1) : e);
        return Object.getOwnPropertySymbols ? i.concat(Object.getOwnPropertySymbols(t)) : i
    }, c.prototype.listeners = function(t) {
        var e = n ? n + t : t,
            r = this._events[e];
        if (!r) return [];
        if (r.fn) return [r.fn];
        for (var i = 0, o = r.length, a = new Array(o); i < o; i++) a[i] = r[i].fn;
        return a
    }, c.prototype.listenerCount = function(t) {
        var e = n ? n + t : t,
            r = this._events[e];
        return r ? r.fn ? 1 : r.length : 0
    }, c.prototype.emit = function(t, e, r, i, o, a) {
        var u = n ? n + t : t;
        if (!this._events[u]) return !1;
        var c, s, l = this._events[u],
            f = arguments.length;
        if (l.fn) {
            switch (l.once && this.removeListener(t, l.fn, void 0, !0), f) {
                case 1:
                    return l.fn.call(l.context), !0;
                case 2:
                    return l.fn.call(l.context, e), !0;
                case 3:
                    return l.fn.call(l.context, e, r), !0;
                case 4:
                    return l.fn.call(l.context, e, r, i), !0;
                case 5:
                    return l.fn.call(l.context, e, r, i, o), !0;
                case 6:
                    return l.fn.call(l.context, e, r, i, o, a), !0
            }
            for (s = 1, c = new Array(f - 1); s < f; s++) c[s - 1] = arguments[s];
            l.fn.apply(l.context, c)
        } else {
            var p, h = l.length;
            for (s = 0; s < h; s++) switch (l[s].once && this.removeListener(t, l[s].fn, void 0, !0), f) {
                case 1:
                    l[s].fn.call(l[s].context);
                    break;
                case 2:
                    l[s].fn.call(l[s].context, e);
                    break;
                case 3:
                    l[s].fn.call(l[s].context, e, r);
                    break;
                case 4:
                    l[s].fn.call(l[s].context, e, r, i);
                    break;
                default:
                    if (!c)
                        for (p = 1, c = new Array(f - 1); p < f; p++) c[p - 1] = arguments[p];
                    l[s].fn.apply(l[s].context, c)
            }
        }
        return !0
    }, c.prototype.on = function(t, e, r) {
        return a(this, t, e, r, !1)
    }, c.prototype.once = function(t, e, r) {
        return a(this, t, e, r, !0)
    }, c.prototype.removeListener = function(t, e, r, i) {
        var o = n ? n + t : t;
        if (!this._events[o]) return this;
        if (!e) return u(this, o), this;
        var a = this._events[o];
        if (a.fn) a.fn !== e || i && !a.once || r && a.context !== r || u(this, o);
        else {
            for (var c = 0, s = [], l = a.length; c < l; c++)(a[c].fn !== e || i && !a[c].once || r && a[c].context !== r) && s.push(a[c]);
            s.length ? this._events[o] = 1 === s.length ? s[0] : s : u(this, o)
        }
        return this
    }, c.prototype.removeAllListeners = function(t) {
        var e;
        return t ? (e = n ? n + t : t, this._events[e] && u(this, e)) : (this._events = new i, this._eventsCount = 0), this
    }, c.prototype.off = c.prototype.removeListener, c.prototype.addListener = c.prototype.on, c.prefixed = n, c.EventEmitter = c, t.exports = c
})), n.register("7vRaZ", (function(t, r) {
    e(t.exports, "XAxis", (function() {
        return n
    }));
    var n = function() {
        return null
    };
    n.displayName = "XAxis", n.defaultProps = {
        allowDecimals: !0,
        hide: !1,
        orientation: "bottom",
        width: 0,
        height: 30,
        mirror: !1,
        xAxisId: 0,
        tickCount: 5,
        type: "category",
        domain: [0, "auto"],
        padding: {
            left: 0,
            right: 0
        },
        allowDataOverflow: !1,
        scale: "auto",
        reversed: !1,
        allowDuplicatedCategory: !0
    }
})), n.register("dLLTI", (function(t, r) {
    e(t.exports, "YAxis", (function() {
        return n
    }));
    var n = function() {
        return null
    };
    n.displayName = "YAxis", n.defaultProps = {
        allowDuplicatedCategory: !0,
        allowDecimals: !0,
        hide: !1,
        orientation: "left",
        width: 60,
        height: 0,
        mirror: !1,
        yAxisId: 0,
        tickCount: 5,
        type: "number",
        domain: [0, "auto"],
        padding: {
            top: 0,
            bottom: 0
        },
        allowDataOverflow: !1,
        scale: "auto",
        reversed: !1
    }
})), n.register("6ymFY", (function(r, i) {
    e(r.exports, "CartesianGrid", (function() {
        return w
    }));
    var o = n("hRZ1R"),
        a = n("fywoC"),
        u = n("fI5bH"),
        c = n("iquK2");

    function s(t) {
        return s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, s(t)
    }

    function l() {
        return l = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
            }
            return t
        }, l.apply(this, arguments)
    }

    function f(t, e) {
        if (null == t) return {};
        var r, n, i = function(t, e) {
            if (null == t) return {};
            var r, n, i = {},
                o = Object.keys(t);
            for (n = 0; n < o.length; n++) r = o[n], e.indexOf(r) >= 0 || (i[r] = t[r]);
            return i
        }(t, e);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(t);
            for (n = 0; n < o.length; n++) r = o[n], e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (i[r] = t[r])
        }
        return i
    }

    function p(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), r.push.apply(r, n)
        }
        return r
    }

    function h(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2 ? p(Object(r), !0).forEach((function(e) {
                d(t, e, r[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : p(Object(r)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
            }))
        }
        return t
    }

    function d(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = r, t
    }

    function y(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function g(t, e) {
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    function v(t, e) {
        return v = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        }, v(t, e)
    }

    function m(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var r, n = x(t);
            if (e) {
                var i = x(this).constructor;
                r = Reflect.construct(n, arguments, i)
            } else r = n.apply(this, arguments);
            return b(this, r)
        }
    }

    function b(t, e) {
        return !e || "object" !== s(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function x(t) {
        return x = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }, x(t)
    }
    var w = function(e) {
        ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && v(t, e)
        }(p, e);
        var r, n, i, s = m(p);

        function p() {
            return y(this, p), s.apply(this, arguments)
        }
        return r = p, i = [{
            key: "renderLineItem",
            value: function(e, r) {
                var n;
                if (t(a).isValidElement(e)) n = t(a).cloneElement(e, r);
                else if (t(o)(e)) n = e(r);
                else {
                    var i = r.x1,
                        u = r.y1,
                        s = r.x2,
                        p = r.y2,
                        h = r.key,
                        d = f(r, ["x1", "y1", "x2", "y2", "key"]);
                    n = t(a).createElement("line", l({}, (0, c.filterProps)(d), {
                        x1: i,
                        y1: u,
                        x2: s,
                        y2: p,
                        fill: "none",
                        key: h
                    }))
                }
                return n
            }
        }], (n = [{
            key: "renderHorizontal",
            value: function(e) {
                var r = this,
                    n = this.props,
                    i = n.x,
                    o = n.width,
                    u = n.horizontal;
                if (!e || !e.length) return null;
                var c = e.map((function(t, e) {
                    var n = h(h({}, r.props), {}, {
                        x1: i,
                        y1: t,
                        x2: i + o,
                        y2: t,
                        key: "line-".concat(e),
                        index: e
                    });
                    return p.renderLineItem(u, n)
                }));
                return t(a).createElement("g", {
                    className: "recharts-cartesian-grid-horizontal"
                }, c)
            }
        }, {
            key: "renderVertical",
            value: function(e) {
                var r = this,
                    n = this.props,
                    i = n.y,
                    o = n.height,
                    u = n.vertical;
                if (!e || !e.length) return null;
                var c = e.map((function(t, e) {
                    var n = h(h({}, r.props), {}, {
                        x1: t,
                        y1: i,
                        x2: t,
                        y2: i + o,
                        key: "line-".concat(e),
                        index: e
                    });
                    return p.renderLineItem(u, n)
                }));
                return t(a).createElement("g", {
                    className: "recharts-cartesian-grid-vertical"
                }, c)
            }
        }, {
            key: "renderVerticalStripes",
            value: function(e) {
                var r = this.props.verticalFill;
                if (!r || !r.length) return null;
                var n = this.props,
                    i = n.fillOpacity,
                    o = n.x,
                    u = n.y,
                    c = n.width,
                    s = n.height,
                    l = e.slice().sort((function(t, e) {
                        return t - e
                    }));
                o !== l[0] && l.unshift(0);
                var f = l.map((function(e, n) {
                    var f = l[n + 1] ? l[n + 1] - e : o + c - e;
                    if (f <= 0) return null;
                    var p = n % r.length;
                    return t(a).createElement("rect", {
                        key: "react-".concat(n),
                        x: Math.round(e + o - o),
                        y: u,
                        width: f,
                        height: s,
                        stroke: "none",
                        fill: r[p],
                        fillOpacity: i,
                        className: "recharts-cartesian-grid-bg"
                    })
                }));
                return t(a).createElement("g", {
                    className: "recharts-cartesian-gridstripes-vertical"
                }, f)
            }
        }, {
            key: "renderHorizontalStripes",
            value: function(e) {
                var r = this.props.horizontalFill;
                if (!r || !r.length) return null;
                var n = this.props,
                    i = n.fillOpacity,
                    o = n.x,
                    u = n.y,
                    c = n.width,
                    s = n.height,
                    l = e.slice().sort((function(t, e) {
                        return t - e
                    }));
                u !== l[0] && l.unshift(0);
                var f = l.map((function(e, n) {
                    var f = l[n + 1] ? l[n + 1] - e : u + s - e;
                    if (f <= 0) return null;
                    var p = n % r.length;
                    return t(a).createElement("rect", {
                        key: "react-".concat(n),
                        y: Math.round(e + u - u),
                        x: o,
                        height: f,
                        width: c,
                        stroke: "none",
                        fill: r[p],
                        fillOpacity: i,
                        className: "recharts-cartesian-grid-bg"
                    })
                }));
                return t(a).createElement("g", {
                    className: "recharts-cartesian-gridstripes-horizontal"
                }, f)
            }
        }, {
            key: "renderBackground",
            value: function() {
                var e = this.props.fill;
                if (!e || "none" === e) return null;
                var r = this.props,
                    n = r.fillOpacity,
                    i = r.x,
                    o = r.y,
                    u = r.width,
                    c = r.height;
                return t(a).createElement("rect", {
                    x: i,
                    y: o,
                    width: u,
                    height: c,
                    stroke: "none",
                    fill: e,
                    fillOpacity: n,
                    className: "recharts-cartesian-grid-bg"
                })
            }
        }, {
            key: "render",
            value: function() {
                var e = this.props,
                    r = e.x,
                    n = e.y,
                    i = e.width,
                    c = e.height,
                    s = e.horizontal,
                    l = e.vertical,
                    f = e.horizontalCoordinatesGenerator,
                    p = e.verticalCoordinatesGenerator,
                    h = e.xAxis,
                    d = e.yAxis,
                    y = e.offset,
                    g = e.chartWidth,
                    v = e.chartHeight;
                if (!(0, u.isNumber)(i) || i <= 0 || !(0, u.isNumber)(c) || c <= 0 || !(0, u.isNumber)(r) || r !== +r || !(0, u.isNumber)(n) || n !== +n) return null;
                var m = this.props,
                    b = m.horizontalPoints,
                    x = m.verticalPoints;
                return b && b.length || !t(o)(f) || (b = f({
                    yAxis: d,
                    width: g,
                    height: v,
                    offset: y
                })), x && x.length || !t(o)(p) || (x = p({
                    xAxis: h,
                    width: g,
                    height: v,
                    offset: y
                })), t(a).createElement("g", {
                    className: "recharts-cartesian-grid"
                }, this.renderBackground(), s && this.renderHorizontal(b), l && this.renderVertical(x), s && this.renderHorizontalStripes(b), l && this.renderVerticalStripes(x))
            }
        }]) && g(r.prototype, n), i && g(r, i), p
    }(a.PureComponent);
    w.displayName = "CartesianGrid", w.defaultProps = {
        horizontal: !0,
        vertical: !0,
        horizontalPoints: [],
        verticalPoints: [],
        stroke: "#ccc",
        fill: "none",
        verticalFill: [],
        horizontalFill: []
    }
})), n.register("cQKFX", (function(r, i) {
    e(r.exports, "ResponsiveContainer", (function() {
        return d
    }));
    var o = n("gh1Mk"),
        a = n("fe1on"),
        u = n("fywoC"),
        c = n("bco48"),
        s = n("fI5bH"),
        l = n("1VoaV");

    function f() {
        return f = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
            }
            return t
        }, f.apply(this, arguments)
    }

    function p(t, e) {
        return function(t) {
            if (Array.isArray(t)) return t
        }(t) || function(t, e) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
            var r = [],
                n = !0,
                i = !1,
                o = void 0;
            try {
                for (var a, u = t[Symbol.iterator](); !(n = (a = u.next()).done) && (r.push(a.value), !e || r.length !== e); n = !0);
            } catch (t) {
                i = !0, o = t
            } finally {
                try {
                    n || null == u.return || u.return()
                } finally {
                    if (i) throw o
                }
            }
            return r
        }(t, e) || function(t, e) {
            if (!t) return;
            if ("string" == typeof t) return h(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(t);
            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return h(t, e)
        }(t, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function h(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n
    }
    var d = (0, u.forwardRef)((function(e, r) {
        var n = e.aspect,
            i = e.width,
            h = void 0 === i ? "100%" : i,
            d = e.height,
            y = void 0 === d ? "100%" : d,
            g = e.minWidth,
            v = e.minHeight,
            m = e.maxHeight,
            b = e.children,
            x = e.debounce,
            w = void 0 === x ? 0 : x,
            O = e.id,
            j = e.className,
            _ = p((0, u.useState)({
                containerWidth: -1,
                containerHeight: -1
            }), 2),
            S = _[0],
            A = _[1],
            k = (0, u.useRef)(null);
        (0, u.useImperativeHandle)(r, (function() {
            return k
        }), [k]);
        var E = p((0, u.useState)(!1), 2),
            M = E[0],
            P = E[1],
            C = function() {
                return k.current ? {
                    containerWidth: k.current.clientWidth,
                    containerHeight: k.current.clientHeight
                } : null
            },
            T = function() {
                if (M) {
                    var t = C();
                    if (t) {
                        var e = S.containerWidth,
                            r = S.containerHeight,
                            n = t.containerWidth,
                            i = t.containerHeight;
                        n === e && i === r || A({
                            containerWidth: n,
                            containerHeight: i
                        })
                    }
                }
            },
            I = w > 0 ? t(o)(T, w) : T;
        (0, u.useEffect)((function() {
            if (M) {
                var t = C();
                t && A(t)
            }
        }), [M]), (0, u.useEffect)((function() {
            P(!0)
        }), []);
        var N = {
            width: h,
            height: y,
            minWidth: g,
            minHeight: v,
            maxHeight: m
        };
        return t(u).createElement(c.default, {
            handleWidth: !0,
            handleHeight: !0,
            onResize: I,
            targetRef: k
        }, t(u).createElement("div", f({}, null != O ? {
            id: "".concat(O)
        } : {}, {
            className: t(a)("recharts-responsive-container", j),
            style: N,
            ref: k
        }), function() {
            var t = S.containerWidth,
                e = S.containerHeight;
            if (t < 0 || e < 0) return null;
            (0, l.warn)((0, s.isPercent)(h) || (0, s.isPercent)(y), "The width(%s) and height(%s) are both fixed numbers,\n       maybe you don't need to use a ResponsiveContainer.", h, y), (0, l.warn)(!n || n > 0, "The aspect(%s) must be greater than zero.", n);
            var r = (0, s.isPercent)(h) ? t : h,
                i = (0, s.isPercent)(y) ? e : y;
            return n && n > 0 && (r ? i = r / n : i && (r = i * n), m && i > m && (i = m)), (0, l.warn)(r > 0 || i > 0, "The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.", r, i, h, y, g, v, n), (0, u.cloneElement)(b, {
                width: r,
                height: i
            })
        }()))
    }))
})), n.register("bco48", (function(t, i) {
    e(t.exports, "default", (function() {
        return et
    }));
    var o = n("fywoC"),
        a = (o = n("fywoC"), n("kK88x")),
        u = function(t, e) {
            return u = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
            }, u(t, e)
        };

    function c(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

        function r() {
            this.constructor = t
        }
        u(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
    }

    function s(t, e) {
        var r = {};
        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
        if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
            var i = 0;
            for (n = Object.getOwnPropertySymbols(t); i < n.length; i++) e.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (r[n[i]] = t[n[i]])
        }
        return r
    }
    var l = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== r ? r : "undefined" != typeof self ? self : {};
    var f = function(t) {
            var e = typeof t;
            return null != t && ("object" == e || "function" == e)
        },
        p = "object" == typeof l && l && l.Object === Object && l,
        h = "object" == typeof self && self && self.Object === Object && self,
        d = p || h || Function("return this")(),
        y = d,
        g = function() {
            return y.Date.now()
        },
        v = /\s/;
    var m = function(t) {
            for (var e = t.length; e-- && v.test(t.charAt(e)););
            return e
        },
        b = /^\s+/;
    var x = function(t) {
            return t ? t.slice(0, m(t) + 1).replace(b, "") : t
        },
        w = d.Symbol,
        O = w,
        j = Object.prototype,
        _ = j.hasOwnProperty,
        S = j.toString,
        A = O ? O.toStringTag : void 0;
    var k = function(t) {
            var e = _.call(t, A),
                r = t[A];
            try {
                t[A] = void 0;
                var n = !0
            } catch (t) {}
            var i = S.call(t);
            return n && (e ? t[A] = r : delete t[A]), i
        },
        E = Object.prototype.toString;
    var M = k,
        P = function(t) {
            return E.call(t)
        },
        C = w ? w.toStringTag : void 0;
    var T = function(t) {
            return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : C && C in Object(t) ? M(t) : P(t)
        },
        I = function(t) {
            return null != t && "object" == typeof t
        };
    var N = x,
        D = f,
        R = function(t) {
            return "symbol" == typeof t || I(t) && "[object Symbol]" == T(t)
        },
        B = /^[-+]0x[0-9a-f]+$/i,
        L = /^0b[01]+$/i,
        z = /^0o[0-7]+$/i,
        U = parseInt;
    var F = f,
        q = g,
        H = function(t) {
            if ("number" == typeof t) return t;
            if (R(t)) return NaN;
            if (D(t)) {
                var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                t = D(e) ? e + "" : e
            }
            if ("string" != typeof t) return 0 === t ? t : +t;
            t = N(t);
            var r = L.test(t);
            return r || z.test(t) ? U(t.slice(2), r ? 2 : 8) : B.test(t) ? NaN : +t
        },
        V = Math.max,
        G = Math.min;
    var W = function(t, e, r) {
            var n, i, o, a, u, c, s = 0,
                l = !1,
                f = !1,
                p = !0;
            if ("function" != typeof t) throw new TypeError("Expected a function");

            function h(e) {
                var r = n,
                    o = i;
                return n = i = void 0, s = e, a = t.apply(o, r)
            }

            function d(t) {
                return s = t, u = setTimeout(g, e), l ? h(t) : a
            }

            function y(t) {
                var r = t - c;
                return void 0 === c || r >= e || r < 0 || f && t - s >= o
            }

            function g() {
                var t = q();
                if (y(t)) return v(t);
                u = setTimeout(g, function(t) {
                    var r = e - (t - c);
                    return f ? G(r, o - (t - s)) : r
                }(t))
            }

            function v(t) {
                return u = void 0, p && n ? h(t) : (n = i = void 0, a)
            }

            function m() {
                var t = q(),
                    r = y(t);
                if (n = arguments, i = this, c = t, r) {
                    if (void 0 === u) return d(c);
                    if (f) return clearTimeout(u), u = setTimeout(g, e), h(c)
                }
                return void 0 === u && (u = setTimeout(g, e)), a
            }
            return e = H(e) || 0, F(r) && (l = !!r.leading, o = (f = "maxWait" in r) ? V(H(r.maxWait) || 0, e) : o, p = "trailing" in r ? !!r.trailing : p), m.cancel = function() {
                void 0 !== u && clearTimeout(u), s = 0, n = c = i = u = void 0
            }, m.flush = function() {
                return void 0 === u ? a : v(q())
            }, m
        },
        Y = W,
        K = f;
    var X = function(t, e, r) {
            var n = !0,
                i = !0;
            if ("function" != typeof t) throw new TypeError("Expected a function");
            return K(r) && (n = "leading" in r ? !!r.leading : n, i = "trailing" in r ? !!r.trailing : i), Y(t, e, {
                leading: n,
                maxWait: e,
                trailing: i
            })
        },
        J = function(t, e, r, n) {
            switch (e) {
                case "debounce":
                    return W(t, r, n);
                case "throttle":
                    return X(t, r, n);
                default:
                    return t
            }
        },
        Q = function(t) {
            return "function" == typeof t
        },
        Z = function() {
            return "undefined" == typeof window
        },
        $ = function(t) {
            return t instanceof Element || t instanceof HTMLDocument
        },
        tt = function(t, e, r, n) {
            return function(i) {
                var o = i.width,
                    a = i.height;
                e((function(e) {
                    return e.width === o && e.height === a || e.width === o && !n || e.height === a && !r ? e : (t && Q(t) && t(o, a), {
                        width: o,
                        height: a
                    })
                }))
            }
        },
        et = function(t) {
            function e(e) {
                var r = t.call(this, e) || this;
                r.cancelHandler = function() {
                    r.resizeHandler && r.resizeHandler.cancel && (r.resizeHandler.cancel(), r.resizeHandler = null)
                }, r.attachObserver = function() {
                    var t = r.props,
                        e = t.targetRef,
                        n = t.observerOptions;
                    if (!Z()) {
                        e && e.current && (r.targetRef.current = e.current);
                        var i = r.getElement();
                        i && (r.observableElement && r.observableElement === i || (r.observableElement = i, r.resizeObserver.observe(i, n)))
                    }
                }, r.getElement = function() {
                    var t = r.props,
                        e = t.querySelector,
                        n = t.targetDomEl;
                    if (Z()) return null;
                    if (e) return document.querySelector(e);
                    if (n && $(n)) return n;
                    if (r.targetRef && $(r.targetRef.current)) return r.targetRef.current;
                    var i = (0, a.findDOMNode)(r);
                    if (!i) return null;
                    switch (r.getRenderType()) {
                        case "renderProp":
                        case "childFunction":
                        case "child":
                        case "childArray":
                            return i;
                        default:
                            return i.parentElement
                    }
                }, r.createResizeHandler = function(t) {
                    var e = r.props,
                        n = e.handleWidth,
                        i = void 0 === n || n,
                        o = e.handleHeight,
                        a = void 0 === o || o,
                        u = e.onResize;
                    if (i || a) {
                        var c = tt(u, r.setState.bind(r), i, a);
                        t.forEach((function(t) {
                            var e = t && t.contentRect || {},
                                n = e.width,
                                i = e.height;
                            !r.skipOnMount && !Z() && c({
                                width: n,
                                height: i
                            }), r.skipOnMount = !1
                        }))
                    }
                }, r.getRenderType = function() {
                    var t = r.props,
                        e = t.render,
                        n = t.children;
                    return Q(e) ? "renderProp" : Q(n) ? "childFunction" : (0, o.isValidElement)(n) ? "child" : Array.isArray(n) ? "childArray" : "parent"
                };
                var n = e.skipOnMount,
                    i = e.refreshMode,
                    u = e.refreshRate,
                    c = void 0 === u ? 1e3 : u,
                    s = e.refreshOptions;
                return r.state = {
                    width: void 0,
                    height: void 0
                }, r.skipOnMount = n, r.targetRef = (0, o.createRef)(), r.observableElement = null, Z() || (r.resizeHandler = J(r.createResizeHandler, i, c, s), r.resizeObserver = new window.ResizeObserver(r.resizeHandler)), r
            }
            return c(e, t), e.prototype.componentDidMount = function() {
                this.attachObserver()
            }, e.prototype.componentDidUpdate = function() {
                this.attachObserver()
            }, e.prototype.componentWillUnmount = function() {
                Z() || (this.observableElement = null, this.resizeObserver.disconnect(), this.cancelHandler())
            }, e.prototype.render = function() {
                var t, e = this.props,
                    r = e.render,
                    n = e.children,
                    i = e.nodeType,
                    a = void 0 === i ? "div" : i,
                    u = this.state,
                    c = {
                        width: u.width,
                        height: u.height,
                        targetRef: this.targetRef
                    };
                switch (this.getRenderType()) {
                    case "renderProp":
                        return r && r(c);
                    case "childFunction":
                        return (t = n)(c);
                    case "child":
                        if ((t = n).type && "string" == typeof t.type) {
                            var l = s(c, ["targetRef"]);
                            return (0, o.cloneElement)(t, l)
                        }
                        return (0, o.cloneElement)(t, c);
                    case "childArray":
                        return (t = n).map((function(t) {
                            return !!t && (0, o.cloneElement)(t, c)
                        }));
                    default:
                        return o.createElement(a, null)
                }
            }, e
        }(o.PureComponent);
    Z() ? o.useEffect : o.useLayoutEffect
})), n.register("3UhQK", (function(t, r) {
    e(t.exports, "default", (function() {
        return s
    }));
    var i = n("dnh3u"),
        o = n("fywoC"),
        a = n("5yo7K"),
        u = n("dwKuN"),
        c = function(t, e) {
            return o.createElement(u.default, (0, i.default)((0, i.default)({}, t), {}, {
                ref: e,
                icon: a.default
            }))
        };
    c.displayName = "BarChartOutlined";
    var s = o.forwardRef(c)
})), n.register("5yo7K", (function(t, r) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-600-80h56c4.4 0 8-3.6 8-8V560c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v144c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V384c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v320c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V462c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v242c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V304c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v400c0 4.4 3.6 8 8 8z"
                }
            }]
        },
        name: "bar-chart",
        theme: "outlined"
    }
})), n.register("69H0v", (function(t, r) {
    e(t.exports, "default", (function() {
        return u
    }));
    var i = n("eMRqp"),
        o = n("iMOcM");
    n("hLIXI");
    const a = ["bulk-analytics"];
    var u = t => (0, i.useQuery)({
        queryKey: [a, t],
        queryFn: () => (0, o.requestAsPromise)({
            url: "/api/bulk/usage/" + t
        }),
        retry: 0
    })
})), n.register("kLpOI", (function(t, r) {
    e(t.exports, "default", (function() {
        return s
    }));
    var i = n("dnh3u"),
        o = n("fywoC"),
        a = n("ayjhg"),
        u = n("dwKuN"),
        c = function(t, e) {
            return o.createElement(u.default, (0, i.default)((0, i.default)({}, t), {}, {
                ref: e,
                icon: a.default
            }))
        };
    c.displayName = "CheckOutlined";
    var s = o.forwardRef(c)
})), n.register("ayjhg", (function(t, r) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"
                }
            }]
        },
        name: "check",
        theme: "outlined"
    }
})), n.register("8IEkO", (function(t, e) {
    t.exports = function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
}));