function t(t, e, i, s) {
    Object.defineProperty(t, e, {
        get: i,
        set: s,
        enumerable: !0,
        configurable: !0
    })
}

function e(t) {
    return t && t.__esModule ? t.default : t
}
var i = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
i.register("9X5CI", (function(e, s) {
    var n;
    n = e.exports, Object.defineProperty(n, "__esModule", {
        value: !0,
        configurable: !0
    }), t(e.exports, "default", (function() {
        return b
    }));
    var o = i("hxEiv"),
        a = i("fywoC"),
        r = i("eaU1U"),
        h = i("gfqXM"),
        l = i("7a91g"),
        c = i("cmvpZ"),
        d = i("56tQE"),
        u = i("2FDaO"),
        f = i("d1LT2");
    let g, p, m = t => t;
    r.Chart.register(r.CategoryScale, r.LinearScale, r.PointElement, r.LineElement);
    const x = {
        responsive: !0,
        maintainAspectRatio: !1,
        plugins: {
            legend: {
                display: !1
            },
            title: {
                display: !1
            }
        },
        scales: {
            x: {
                display: !1
            },
            y: {
                display: !1
            }
        }
    };
    var b = t => {
        const e = a.useRef(null),
            i = a.useRef(null),
            [s] = (0, d.default)(e),
            n = a.useRef(0),
            r = a.useMemo((() => ({
                labels: [n.current],
                datasets: [{
                    data: [t.balance],
                    borderColor: f.default.White,
                    borderWidth: 3,
                    pointRadius: 10,
                    pointBackgroundColor: f.default.Gold,
                    tension: 0
                }]
            })), []),
            u = a.useCallback((() => {
                const t = i.current;
                if (!t) return;
                const e = Math.max(1, Math.round(s / 60));
                t.options.scales.x.min = Math.max(0, n.current - e);
                const o = t.data.datasets[0].data,
                    a = Math.max(...o) || 0,
                    r = (0, c.takeRight)(o, e + 1),
                    h = Math.min(...r) || 0;
                let l = h;
                if (h < 0) {
                    const t = Math.abs(h).toString().split("");
                    l = 1 === t.length ? 0 : Number(t.map(((t, e) => 0 === e ? "1" : 0)).join(""))
                }
                t.options.scales.y.min = l - 1, t.options.scales.y.max = Math.max(a + 1, 1.05 * a)
            }), [s]);
        return a.useEffect((() => {
            var t;
            u(), null === (t = i.current) || void 0 === t || t.update()
        }), [s]), (0, l.useIntervalWhen)((() => {
            const e = i.current;
            e && (e.data.labels.push(n.current++), e.data.datasets[0].data.push(t.balance), u(), e.update())
        }), 5e3), (0, o.jsx)(_, {
            children: (0, o.jsx)(y, {
                ref: e,
                children: (0, o.jsx)(h.Line, {
                    ref: i,
                    options: x,
                    data: r
                })
            })
        })
    };
    const _ = u.default.div.attrs({
            className: "flex vc"
        })(g || (g = m`
  min-height: 0px;
  flex: 1;
  z-index: 0;
  overflow: hidden;
`)),
        y = u.default.div.attrs({
            className: "maxWidth"
        })(p || (p = m`
  height: 90%;
  pointer-events: none;
`))
})), i.register("eaU1U", (function(e, s) {
    t(e.exports, "BarController", (function() {
        return E
    })), t(e.exports, "BubbleController", (function() {
        return L
    })), t(e.exports, "DoughnutController", (function() {
        return R
    })), t(e.exports, "LineController", (function() {
        return F
    })), t(e.exports, "PolarAreaController", (function() {
        return I
    })), t(e.exports, "PieController", (function() {
        return z
    })), t(e.exports, "RadarController", (function() {
        return V
    })), t(e.exports, "ScatterController", (function() {
        return B
    })), t(e.exports, "Chart", (function() {
        return he
    })), t(e.exports, "LineElement", (function() {
        return we
    })), t(e.exports, "PointElement", (function() {
        return Se
    })), t(e.exports, "CategoryScale", (function() {
        return Qe
    })), t(e.exports, "LinearScale", (function() {
        return Ze
    }));
    /*!
     * Chart.js v4.2.0
     * https://www.chartjs.org
     * (c) 2023 Chart.js Contributors
     * Released under the MIT License
     */
    var n = i("divCp"),
        o = i("aGgio");
    o = i("aGgio");
    class a {
        _notify(t, e, i, s) {
            const n = e.listeners[s],
                o = e.duration;
            n.forEach((s => s({
                chart: t,
                initial: e.initial,
                numSteps: o,
                currentStep: Math.min(i - e.start, o)
            })))
        }
        _refresh() {
            this._request || (this._running = !0, this._request = o.r.call(window, (() => {
                this._update(), this._request = null, this._running && this._refresh()
            })))
        }
        _update(t = Date.now()) {
            let e = 0;
            this._charts.forEach(((i, s) => {
                if (!i.running || !i.items.length) return;
                const n = i.items;
                let o, a = n.length - 1,
                    r = !1;
                for (; a >= 0; --a) o = n[a], o._active ? (o._total > i.duration && (i.duration = o._total), o.tick(t), r = !0) : (n[a] = n[n.length - 1], n.pop());
                r && (s.draw(), this._notify(s, i, t, "progress")), n.length || (i.running = !1, this._notify(s, i, t, "complete"), i.initial = !1), e += n.length
            })), this._lastDate = t, 0 === e && (this._running = !1)
        }
        _getAnims(t) {
            const e = this._charts;
            let i = e.get(t);
            return i || (i = {
                running: !1,
                initial: !0,
                items: [],
                listeners: {
                    complete: [],
                    progress: []
                }
            }, e.set(t, i)), i
        }
        listen(t, e, i) {
            this._getAnims(t).listeners[e].push(i)
        }
        add(t, e) {
            e && e.length && this._getAnims(t).items.push(...e)
        }
        has(t) {
            return this._getAnims(t).items.length > 0
        }
        start(t) {
            const e = this._charts.get(t);
            e && (e.running = !0, e.start = Date.now(), e.duration = e.items.reduce(((t, e) => Math.max(t, e._duration)), 0), this._refresh())
        }
        running(t) {
            if (!this._running) return !1;
            const e = this._charts.get(t);
            return !!(e && e.running && e.items.length)
        }
        stop(t) {
            const e = this._charts.get(t);
            if (!e || !e.items.length) return;
            const i = e.items;
            let s = i.length - 1;
            for (; s >= 0; --s) i[s].cancel();
            e.items = [], this._notify(t, e, Date.now(), "complete")
        }
        remove(t) {
            return this._charts.delete(t)
        }
        constructor() {
            this._request = null, this._charts = new Map, this._running = !1, this._lastDate = void 0
        }
    }
    var r = new a;
    const h = "transparent",
        l = {
            boolean: (t, e, i) => i > .5 ? e : t,
            color(t, e, i) {
                const s = (0, o.c)(t || h),
                    n = s.valid && (0, o.c)(e || h);
                return n && n.valid ? n.mix(s, i).hexString() : e
            },
            number: (t, e, i) => t + (e - t) * i
        };
    class c {
        active() {
            return this._active
        }
        update(t, e, i) {
            if (this._active) {
                this._notify(!1);
                const s = this._target[this._prop],
                    n = i - this._start,
                    a = this._duration - n;
                this._start = i, this._duration = Math.floor(Math.max(a, t.duration)), this._total += n, this._loop = !!t.loop, this._to = (0, o.a)([t.to, e, s, t.from]), this._from = (0, o.a)([t.from, s, e])
            }
        }
        cancel() {
            this._active && (this.tick(Date.now()), this._active = !1, this._notify(!1))
        }
        tick(t) {
            const e = t - this._start,
                i = this._duration,
                s = this._prop,
                n = this._from,
                o = this._loop,
                a = this._to;
            let r;
            if (this._active = n !== a && (o || e < i), !this._active) return this._target[s] = a, void this._notify(!0);
            e < 0 ? this._target[s] = n : (r = e / i % 2, r = o && r > 1 ? 2 - r : r, r = this._easing(Math.min(1, Math.max(0, r))), this._target[s] = this._fn(n, a, r))
        }
        wait() {
            const t = this._promises || (this._promises = []);
            return new Promise(((e, i) => {
                t.push({
                    res: e,
                    rej: i
                })
            }))
        }
        _notify(t) {
            const e = t ? "res" : "rej",
                i = this._promises || [];
            for (let t = 0; t < i.length; t++) i[t][e]()
        }
        constructor(t, e, i, s) {
            const n = e[i];
            s = (0, o.a)([t.to, s, n, t.from]);
            const a = (0, o.a)([t.from, n, s]);
            this._active = !0, this._fn = t.fn || l[t.type || typeof a], this._easing = o.e[t.easing] || o.e.linear, this._start = Math.floor(Date.now() + (t.delay || 0)), this._duration = this._total = Math.floor(t.duration), this._loop = !!t.loop, this._target = e, this._prop = i, this._from = a, this._to = s, this._promises = void 0
        }
    }
    class d {
        configure(t) {
            if (!(0, o.i)(t)) return;
            const e = Object.keys(o.d.animation),
                i = this._properties;
            Object.getOwnPropertyNames(t).forEach((s => {
                const n = t[s];
                if (!(0, o.i)(n)) return;
                const a = {};
                for (const t of e) a[t] = n[t];
                ((0, o.b)(n.properties) && n.properties || [s]).forEach((t => {
                    t !== s && i.has(t) || i.set(t, a)
                }))
            }))
        }
        _animateOptions(t, e) {
            const i = e.options,
                s = function(t, e) {
                    if (!e) return;
                    let i = t.options;
                    if (!i) return void(t.options = e);
                    i.$shared && (t.options = i = Object.assign({}, i, {
                        $shared: !1,
                        $animations: {}
                    }));
                    return i
                }(t, i);
            if (!s) return [];
            const n = this._createAnimations(s, i);
            return i.$shared && function(t, e) {
                const i = [],
                    s = Object.keys(e);
                for (let e = 0; e < s.length; e++) {
                    const n = t[s[e]];
                    n && n.active() && i.push(n.wait())
                }
                return Promise.all(i)
            }(t.options.$animations, i).then((() => {
                t.options = i
            }), (() => {})), n
        }
        _createAnimations(t, e) {
            const i = this._properties,
                s = [],
                n = t.$animations || (t.$animations = {}),
                o = Object.keys(e),
                a = Date.now();
            let r;
            for (r = o.length - 1; r >= 0; --r) {
                const h = o[r];
                if ("$" === h.charAt(0)) continue;
                if ("options" === h) {
                    s.push(...this._animateOptions(t, e));
                    continue
                }
                const l = e[h];
                let d = n[h];
                const u = i.get(h);
                if (d) {
                    if (u && d.active()) {
                        d.update(u, l, a);
                        continue
                    }
                    d.cancel()
                }
                u && u.duration ? (n[h] = d = new c(u, t, h, l), s.push(d)) : t[h] = l
            }
            return s
        }
        update(t, e) {
            if (0 === this._properties.size) return void Object.assign(t, e);
            const i = this._createAnimations(t, e);
            return i.length ? (r.add(this._chart, i), !0) : void 0
        }
        constructor(t, e) {
            this._chart = t, this._properties = new Map, this.configure(e)
        }
    }

    function u(t, e) {
        const i = t && t.options || {},
            s = i.reverse,
            n = void 0 === i.min ? e : 0,
            o = void 0 === i.max ? e : 0;
        return {
            start: s ? o : n,
            end: s ? n : o
        }
    }

    function f(t, e) {
        const i = [],
            s = t._getSortedDatasetMetas(e);
        let n, o;
        for (n = 0, o = s.length; n < o; ++n) i.push(s[n].index);
        return i
    }

    function g(t, e, i, s = {}) {
        const n = t.keys,
            a = "single" === s.mode;
        let r, h, l, c;
        if (null !== e) {
            for (r = 0, h = n.length; r < h; ++r) {
                if (l = +n[r], l === i) {
                    if (s.all) continue;
                    break
                }
                c = t.values[l], (0, o.g)(c) && (a || 0 === e || (0, o.s)(e) === (0, o.s)(c)) && (e += c)
            }
            return e
        }
    }

    function p(t, e) {
        const i = t && t.options.stacked;
        return i || void 0 === i && void 0 !== e.stack
    }

    function m(t, e, i) {
        const s = t[e] || (t[e] = {});
        return s[i] || (s[i] = {})
    }

    function x(t, e, i, s) {
        for (const n of e.getMatchingVisibleMetas(s).reverse()) {
            const e = t[n.index];
            if (i && e > 0 || !i && e < 0) return n.index
        }
        return null
    }

    function b(t, e) {
        const {
            chart: i,
            _cachedMeta: s
        } = t, n = i._stacks || (i._stacks = {}), {
            iScale: o,
            vScale: a,
            index: r
        } = s, h = o.axis, l = a.axis, c = function(t, e, i) {
            return `${t.id}.${e.id}.${i.stack||i.type}`
        }(o, a, s), d = e.length;
        let u;
        for (let t = 0; t < d; ++t) {
            const i = e[t],
                {
                    [h]: o,
                    [l]: d
                } = i;
            u = (i._stacks || (i._stacks = {}))[l] = m(n, c, o), u[r] = d, u._top = x(u, a, !0, s.type), u._bottom = x(u, a, !1, s.type);
            (u._visualValues || (u._visualValues = {}))[r] = d
        }
    }

    function _(t, e) {
        const i = t.scales;
        return Object.keys(i).filter((t => i[t].axis === e)).shift()
    }

    function y(t, e) {
        const i = t.controller.index,
            s = t.vScale && t.vScale.axis;
        if (s) {
            e = e || t._parsed;
            for (const t of e) {
                const e = t._stacks;
                if (!e || void 0 === e[s] || void 0 === e[s][i]) return;
                delete e[s][i], void 0 !== e[s]._visualValues && void 0 !== e[s]._visualValues[i] && delete e[s]._visualValues[i]
            }
        }
    }
    const v = t => "reset" === t || "none" === t,
        M = (t, e) => e ? t : Object.assign({}, t);
    class w {
        initialize() {
            const t = this._cachedMeta;
            this.configure(), this.linkScales(), t._stacked = p(t.vScale, t), this.addElements(), this.options.fill && !this.chart.isPluginEnabled("filler") && console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")
        }
        updateIndex(t) {
            this.index !== t && y(this._cachedMeta), this.index = t
        }
        linkScales() {
            const t = this.chart,
                e = this._cachedMeta,
                i = this.getDataset(),
                s = (t, e, i, s) => "x" === t ? e : "r" === t ? s : i,
                n = e.xAxisID = (0, o.v)(i.xAxisID, _(t, "x")),
                a = e.yAxisID = (0, o.v)(i.yAxisID, _(t, "y")),
                r = e.rAxisID = (0, o.v)(i.rAxisID, _(t, "r")),
                h = e.indexAxis,
                l = e.iAxisID = s(h, n, a, r),
                c = e.vAxisID = s(h, a, n, r);
            e.xScale = this.getScaleForId(n), e.yScale = this.getScaleForId(a), e.rScale = this.getScaleForId(r), e.iScale = this.getScaleForId(l), e.vScale = this.getScaleForId(c)
        }
        getDataset() {
            return this.chart.data.datasets[this.index]
        }
        getMeta() {
            return this.chart.getDatasetMeta(this.index)
        }
        getScaleForId(t) {
            return this.chart.scales[t]
        }
        _getOtherScale(t) {
            const e = this._cachedMeta;
            return t === e.iScale ? e.vScale : e.iScale
        }
        reset() {
            this._update("reset")
        }
        _destroy() {
            const t = this._cachedMeta;
            this._data && (0, o.u)(this._data, this), t._stacked && y(t)
        }
        _dataCheck() {
            const t = this.getDataset(),
                e = t.data || (t.data = []),
                i = this._data;
            if ((0, o.i)(e)) this._data = function(t) {
                const e = Object.keys(t),
                    i = new Array(e.length);
                let s, n, o;
                for (s = 0, n = e.length; s < n; ++s) o = e[s], i[s] = {
                    x: o,
                    y: t[o]
                };
                return i
            }(e);
            else if (i !== e) {
                if (i) {
                    (0, o.u)(i, this);
                    const t = this._cachedMeta;
                    y(t), t._parsed = []
                }
                e && Object.isExtensible(e) && (0, o.l)(e, this), this._syncList = [], this._data = e
            }
        }
        addElements() {
            const t = this._cachedMeta;
            this._dataCheck(), this.datasetElementType && (t.dataset = new this.datasetElementType)
        }
        buildOrUpdateElements(t) {
            const e = this._cachedMeta,
                i = this.getDataset();
            let s = !1;
            this._dataCheck();
            const n = e._stacked;
            e._stacked = p(e.vScale, e), e.stack !== i.stack && (s = !0, y(e), e.stack = i.stack), this._resyncElements(t), (s || n !== e._stacked) && b(this, e._parsed)
        }
        configure() {
            const t = this.chart.config,
                e = t.datasetScopeKeys(this._type),
                i = t.getOptionScopes(this.getDataset(), e, !0);
            this.options = t.createResolver(i, this.getContext()), this._parsing = this.options.parsing, this._cachedDataOpts = {}
        }
        parse(t, e) {
            const {
                _cachedMeta: i,
                _data: s
            } = this, {
                iScale: n,
                _stacked: a
            } = i, r = n.axis;
            let h, l, c, d = 0 === t && e === s.length || i._sorted,
                u = t > 0 && i._parsed[t - 1];
            if (!1 === this._parsing) i._parsed = s, i._sorted = !0, c = s;
            else {
                c = (0, o.b)(s[t]) ? this.parseArrayData(i, s, t, e) : (0, o.i)(s[t]) ? this.parseObjectData(i, s, t, e) : this.parsePrimitiveData(i, s, t, e);
                const n = () => null === l[r] || u && l[r] < u[r];
                for (h = 0; h < e; ++h) i._parsed[h + t] = l = c[h], d && (n() && (d = !1), u = l);
                i._sorted = d
            }
            a && b(this, c)
        }
        parsePrimitiveData(t, e, i, s) {
            const {
                iScale: n,
                vScale: o
            } = t, a = n.axis, r = o.axis, h = n.getLabels(), l = n === o, c = new Array(s);
            let d, u, f;
            for (d = 0, u = s; d < u; ++d) f = d + i, c[d] = {
                [a]: l || n.parse(h[f], f),
                [r]: o.parse(e[f], f)
            };
            return c
        }
        parseArrayData(t, e, i, s) {
            const {
                xScale: n,
                yScale: o
            } = t, a = new Array(s);
            let r, h, l, c;
            for (r = 0, h = s; r < h; ++r) l = r + i, c = e[l], a[r] = {
                x: n.parse(c[0], l),
                y: o.parse(c[1], l)
            };
            return a
        }
        parseObjectData(t, e, i, s) {
            const {
                xScale: n,
                yScale: a
            } = t, {
                xAxisKey: r = "x",
                yAxisKey: h = "y"
            } = this._parsing, l = new Array(s);
            let c, d, u, f;
            for (c = 0, d = s; c < d; ++c) u = c + i, f = e[u], l[c] = {
                x: n.parse((0, o.f)(f, r), u),
                y: a.parse((0, o.f)(f, h), u)
            };
            return l
        }
        getParsed(t) {
            return this._cachedMeta._parsed[t]
        }
        getDataElement(t) {
            return this._cachedMeta.data[t]
        }
        applyStack(t, e, i) {
            const s = this.chart,
                n = this._cachedMeta,
                o = e[t.axis];
            return g({
                keys: f(s, !0),
                values: e._stacks[t.axis]._visualValues
            }, o, n.index, {
                mode: i
            })
        }
        updateRangeFromParsed(t, e, i, s) {
            const n = i[e.axis];
            let o = null === n ? NaN : n;
            const a = s && i._stacks[e.axis];
            s && a && (s.values = a, o = g(s, n, this._cachedMeta.index)), t.min = Math.min(t.min, o), t.max = Math.max(t.max, o)
        }
        getMinMax(t, e) {
            const i = this._cachedMeta,
                s = i._parsed,
                n = i._sorted && t === i.iScale,
                a = s.length,
                r = this._getOtherScale(t),
                h = ((t, e, i) => t && !e.hidden && e._stacked && {
                    keys: f(i, !0),
                    values: null
                })(e, i, this.chart),
                l = {
                    min: Number.POSITIVE_INFINITY,
                    max: Number.NEGATIVE_INFINITY
                },
                {
                    min: c,
                    max: d
                } = function(t) {
                    const {
                        min: e,
                        max: i,
                        minDefined: s,
                        maxDefined: n
                    } = t.getUserBounds();
                    return {
                        min: s ? e : Number.NEGATIVE_INFINITY,
                        max: n ? i : Number.POSITIVE_INFINITY
                    }
                }(r);
            let u, g;

            function p() {
                g = s[u];
                const e = g[r.axis];
                return !(0, o.g)(g[t.axis]) || c > e || d < e
            }
            for (u = 0; u < a && (p() || (this.updateRangeFromParsed(l, t, g, h), !n)); ++u);
            if (n)
                for (u = a - 1; u >= 0; --u)
                    if (!p()) {
                        this.updateRangeFromParsed(l, t, g, h);
                        break
                    } return l
        }
        getAllParsedValues(t) {
            const e = this._cachedMeta._parsed,
                i = [];
            let s, n, a;
            for (s = 0, n = e.length; s < n; ++s) a = e[s][t.axis], (0, o.g)(a) && i.push(a);
            return i
        }
        getMaxOverflow() {
            return !1
        }
        getLabelAndValue(t) {
            const e = this._cachedMeta,
                i = e.iScale,
                s = e.vScale,
                n = this.getParsed(t);
            return {
                label: i ? "" + i.getLabelForValue(n[i.axis]) : "",
                value: s ? "" + s.getLabelForValue(n[s.axis]) : ""
            }
        }
        _update(t) {
            const e = this._cachedMeta;
            this.update(t || "default"), e._clip = function(t) {
                let e, i, s, n;
                return (0, o.i)(t) ? (e = t.top, i = t.right, s = t.bottom, n = t.left) : e = i = s = n = t, {
                    top: e,
                    right: i,
                    bottom: s,
                    left: n,
                    disabled: !1 === t
                }
            }((0, o.v)(this.options.clip, function(t, e, i) {
                if (!1 === i) return !1;
                const s = u(t, i),
                    n = u(e, i);
                return {
                    top: n.end,
                    right: s.end,
                    bottom: n.start,
                    left: s.start
                }
            }(e.xScale, e.yScale, this.getMaxOverflow())))
        }
        update(t) {}
        draw() {
            const t = this._ctx,
                e = this.chart,
                i = this._cachedMeta,
                s = i.data || [],
                n = e.chartArea,
                o = [],
                a = this._drawStart || 0,
                r = this._drawCount || s.length - a,
                h = this.options.drawActiveElementsOnTop;
            let l;
            for (i.dataset && i.dataset.draw(t, n, a, r), l = a; l < a + r; ++l) {
                const e = s[l];
                e.hidden || (e.active && h ? o.push(e) : e.draw(t, n))
            }
            for (l = 0; l < o.length; ++l) o[l].draw(t, n)
        }
        getStyle(t, e) {
            const i = e ? "active" : "default";
            return void 0 === t && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(i) : this.resolveDataElementOptions(t || 0, i)
        }
        getContext(t, e, i) {
            const s = this.getDataset();
            let n;
            if (t >= 0 && t < this._cachedMeta.data.length) {
                const e = this._cachedMeta.data[t];
                n = e.$context || (e.$context = function(t, e, i) {
                    return (0, o.j)(t, {
                        active: !1,
                        dataIndex: e,
                        parsed: void 0,
                        raw: void 0,
                        element: i,
                        index: e,
                        mode: "default",
                        type: "data"
                    })
                }(this.getContext(), t, e)), n.parsed = this.getParsed(t), n.raw = s.data[t], n.index = n.dataIndex = t
            } else n = this.$context || (this.$context = function(t, e) {
                return (0, o.j)(t, {
                    active: !1,
                    dataset: void 0,
                    datasetIndex: e,
                    index: e,
                    mode: "default",
                    type: "dataset"
                })
            }(this.chart.getContext(), this.index)), n.dataset = s, n.index = n.datasetIndex = this.index;
            return n.active = !!e, n.mode = i, n
        }
        resolveDatasetElementOptions(t) {
            return this._resolveElementOptions(this.datasetElementType.id, t)
        }
        resolveDataElementOptions(t, e) {
            return this._resolveElementOptions(this.dataElementType.id, e, t)
        }
        _resolveElementOptions(t, e = "default", i) {
            const s = "active" === e,
                n = this._cachedDataOpts,
                a = t + "-" + e,
                r = n[a],
                h = this.enableOptionSharing && (0, o.h)(i);
            if (r) return M(r, h);
            const l = this.chart.config,
                c = l.datasetElementScopeKeys(this._type, t),
                d = s ? [`${t}Hover`, "hover", t, ""] : [t, ""],
                u = l.getOptionScopes(this.getDataset(), c),
                f = Object.keys(o.d.elements[t]),
                g = l.resolveNamedOptions(u, f, (() => this.getContext(i, s, e)), d);
            return g.$shared && (g.$shared = h, n[a] = Object.freeze(M(g, h))), g
        }
        _resolveAnimations(t, e, i) {
            const s = this.chart,
                n = this._cachedDataOpts,
                o = `animation-${e}`,
                a = n[o];
            if (a) return a;
            let r;
            if (!1 !== s.options.animation) {
                const s = this.chart.config,
                    n = s.datasetAnimationScopeKeys(this._type, e),
                    o = s.getOptionScopes(this.getDataset(), n);
                r = s.createResolver(o, this.getContext(t, i, e))
            }
            const h = new d(s, r && r.animations);
            return r && r._cacheable && (n[o] = Object.freeze(h)), h
        }
        getSharedOptions(t) {
            if (t.$shared) return this._sharedOptions || (this._sharedOptions = Object.assign({}, t))
        }
        includeOptions(t, e) {
            return !e || v(t) || this.chart._animationsDisabled
        }
        _getSharedOptions(t, e) {
            const i = this.resolveDataElementOptions(t, e),
                s = this._sharedOptions,
                n = this.getSharedOptions(i),
                o = this.includeOptions(e, n) || n !== s;
            return this.updateSharedOptions(n, e, i), {
                sharedOptions: n,
                includeOptions: o
            }
        }
        updateElement(t, e, i, s) {
            v(s) ? Object.assign(t, i) : this._resolveAnimations(e, s).update(t, i)
        }
        updateSharedOptions(t, e, i) {
            t && !v(e) && this._resolveAnimations(void 0, e).update(t, i)
        }
        _setStyle(t, e, i, s) {
            t.active = s;
            const n = this.getStyle(e, s);
            this._resolveAnimations(e, i, s).update(t, {
                options: !s && this.getSharedOptions(n) || n
            })
        }
        removeHoverStyle(t, e, i) {
            this._setStyle(t, i, "active", !1)
        }
        setHoverStyle(t, e, i) {
            this._setStyle(t, i, "active", !0)
        }
        _removeDatasetHoverStyle() {
            const t = this._cachedMeta.dataset;
            t && this._setStyle(t, void 0, "active", !1)
        }
        _setDatasetHoverStyle() {
            const t = this._cachedMeta.dataset;
            t && this._setStyle(t, void 0, "active", !0)
        }
        _resyncElements(t) {
            const e = this._data,
                i = this._cachedMeta.data;
            for (const [t, e, i] of this._syncList) this[t](e, i);
            this._syncList = [];
            const s = i.length,
                n = e.length,
                o = Math.min(n, s);
            o && this.parse(0, o), n > s ? this._insertElements(s, n - s, t) : n < s && this._removeElements(n, s - n)
        }
        _insertElements(t, e, i = !0) {
            const s = this._cachedMeta,
                n = s.data,
                o = t + e;
            let a;
            const r = t => {
                for (t.length += e, a = t.length - 1; a >= o; a--) t[a] = t[a - e]
            };
            for (r(n), a = t; a < o; ++a) n[a] = new this.dataElementType;
            this._parsing && r(s._parsed), this.parse(t, e), i && this.updateElements(n, t, e, "reset")
        }
        updateElements(t, e, i, s) {}
        _removeElements(t, e) {
            const i = this._cachedMeta;
            if (this._parsing) {
                const s = i._parsed.splice(t, e);
                i._stacked && y(i, s)
            }
            i.data.splice(t, e)
        }
        _sync(t) {
            if (this._parsing) this._syncList.push(t);
            else {
                const [e, i, s] = t;
                this[e](i, s)
            }
            this.chart._dataChanges.push([this.index, ...t])
        }
        _onDataPush() {
            const t = arguments.length;
            this._sync(["_insertElements", this.getDataset().data.length - t, t])
        }
        _onDataPop() {
            this._sync(["_removeElements", this._cachedMeta.data.length - 1, 1])
        }
        _onDataShift() {
            this._sync(["_removeElements", 0, 1])
        }
        _onDataSplice(t, e) {
            e && this._sync(["_removeElements", t, e]);
            const i = arguments.length - 2;
            i && this._sync(["_insertElements", t, i])
        }
        _onDataUnshift() {
            this._sync(["_insertElements", 0, arguments.length])
        }
        constructor(t, e) {
            this.chart = t, this._ctx = t.ctx, this.index = e, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = !1, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = !1, this.supportsDecimation = !1, this.$context = void 0, this._syncList = [], this.datasetElementType = new.target.datasetElementType, this.dataElementType = new.target.dataElementType, this.initialize()
        }
    }

    function k(t) {
        const e = t.iScale,
            i = function(t, e) {
                if (!t._cache.$bar) {
                    const i = t.getMatchingVisibleMetas(e);
                    let s = [];
                    for (let e = 0, n = i.length; e < n; e++) s = s.concat(i[e].controller.getAllParsedValues(t));
                    t._cache.$bar = (0, o._)(s.sort(((t, e) => t - e)))
                }
                return t._cache.$bar
            }(e, t.type);
        let s, n, a, r, h = e._length;
        const l = () => {
            32767 !== a && -32768 !== a && ((0, o.h)(r) && (h = Math.min(h, Math.abs(a - r) || h)), r = a)
        };
        for (s = 0, n = i.length; s < n; ++s) a = e.getPixelForValue(i[s]), l();
        for (r = void 0, s = 0, n = e.ticks.length; s < n; ++s) a = e.getPixelForTick(s), l();
        return h
    }

    function S(t, e, i, s) {
        return (0, o.b)(t) ? function(t, e, i, s) {
            const n = i.parse(t[0], s),
                o = i.parse(t[1], s),
                a = Math.min(n, o),
                r = Math.max(n, o);
            let h = a,
                l = r;
            Math.abs(a) > Math.abs(r) && (h = r, l = a), e[i.axis] = l, e._custom = {
                barStart: h,
                barEnd: l,
                start: n,
                end: o,
                min: a,
                max: r
            }
        }(t, e, i, s) : e[i.axis] = i.parse(t, s), e
    }

    function P(t, e, i, s) {
        const n = t.iScale,
            o = t.vScale,
            a = n.getLabels(),
            r = n === o,
            h = [];
        let l, c, d, u;
        for (l = i, c = i + s; l < c; ++l) u = e[l], d = {}, d[n.axis] = r || n.parse(a[l], l), h.push(S(u, d, o, l));
        return h
    }

    function O(t) {
        return t && void 0 !== t.barStart && void 0 !== t.barEnd
    }

    function C(t, e, i, s) {
        let n = e.borderSkipped;
        const o = {};
        if (!n) return void(t.borderSkipped = o);
        if (!0 === n) return void(t.borderSkipped = {
            top: !0,
            right: !0,
            bottom: !0,
            left: !0
        });
        const {
            start: a,
            end: r,
            reverse: h,
            top: l,
            bottom: c
        } = function(t) {
            let e, i, s, n, o;
            return t.horizontal ? (e = t.base > t.x, i = "left", s = "right") : (e = t.base < t.y, i = "bottom", s = "top"), e ? (n = "end", o = "start") : (n = "start", o = "end"), {
                start: i,
                end: s,
                reverse: e,
                top: n,
                bottom: o
            }
        }(t);
        "middle" === n && i && (t.enableBorderRadius = !0, (i._top || 0) === s ? n = l : (i._bottom || 0) === s ? n = c : (o[D(c, a, r, h)] = !0, n = l)), o[D(n, a, r, h)] = !0, t.borderSkipped = o
    }

    function D(t, e, i, s) {
        var n, o, a;
        return s ? (a = i, t = T(t = (n = t) === (o = e) ? a : n === a ? o : n, i, e)) : t = T(t, e, i), t
    }

    function T(t, e, i) {
        return "start" === t ? e : "end" === t ? i : t
    }

    function A(t, {
        inflateAmount: e
    }, i) {
        t.inflateAmount = "auto" === e ? 1 === i ? .33 : 0 : e
    }(0, n.default)(w, "defaults", {}), (0, n.default)(w, "datasetElementType", null), (0, n.default)(w, "dataElementType", null);
    class E extends w {
        parsePrimitiveData(t, e, i, s) {
            return P(t, e, i, s)
        }
        parseArrayData(t, e, i, s) {
            return P(t, e, i, s)
        }
        parseObjectData(t, e, i, s) {
            const {
                iScale: n,
                vScale: a
            } = t, {
                xAxisKey: r = "x",
                yAxisKey: h = "y"
            } = this._parsing, l = "x" === n.axis ? r : h, c = "x" === a.axis ? r : h, d = [];
            let u, f, g, p;
            for (u = i, f = i + s; u < f; ++u) p = e[u], g = {}, g[n.axis] = n.parse((0, o.f)(p, l), u), d.push(S((0, o.f)(p, c), g, a, u));
            return d
        }
        updateRangeFromParsed(t, e, i, s) {
            super.updateRangeFromParsed(t, e, i, s);
            const n = i._custom;
            n && e === this._cachedMeta.vScale && (t.min = Math.min(t.min, n.min), t.max = Math.max(t.max, n.max))
        }
        getMaxOverflow() {
            return 0
        }
        getLabelAndValue(t) {
            const e = this._cachedMeta,
                {
                    iScale: i,
                    vScale: s
                } = e,
                n = this.getParsed(t),
                o = n._custom,
                a = O(o) ? "[" + o.start + ", " + o.end + "]" : "" + s.getLabelForValue(n[s.axis]);
            return {
                label: "" + i.getLabelForValue(n[i.axis]),
                value: a
            }
        }
        initialize() {
            this.enableOptionSharing = !0, super.initialize();
            this._cachedMeta.stack = this.getDataset().stack
        }
        update(t) {
            const e = this._cachedMeta;
            this.updateElements(e.data, 0, e.data.length, t)
        }
        updateElements(t, e, i, s) {
            const n = "reset" === s,
                {
                    index: a,
                    _cachedMeta: {
                        vScale: r
                    }
                } = this,
                h = r.getBasePixel(),
                l = r.isHorizontal(),
                c = this._getRuler(),
                {
                    sharedOptions: d,
                    includeOptions: u
                } = this._getSharedOptions(e, s);
            for (let f = e; f < e + i; f++) {
                const e = this.getParsed(f),
                    i = n || (0, o.k)(e[r.axis]) ? {
                        base: h,
                        head: h
                    } : this._calculateBarValuePixels(f),
                    g = this._calculateBarIndexPixels(f, c),
                    p = (e._stacks || {})[r.axis],
                    m = {
                        horizontal: l,
                        base: i.base,
                        enableBorderRadius: !p || O(e._custom) || a === p._top || a === p._bottom,
                        x: l ? i.head : g.center,
                        y: l ? g.center : i.head,
                        height: l ? g.size : Math.abs(i.size),
                        width: l ? Math.abs(i.size) : g.size
                    };
                u && (m.options = d || this.resolveDataElementOptions(f, t[f].active ? "active" : s));
                const x = m.options || t[f].options;
                C(m, x, p, a), A(m, x, c.ratio), this.updateElement(t[f], f, m, s)
            }
        }
        _getStacks(t, e) {
            const {
                iScale: i
            } = this._cachedMeta, s = i.getMatchingVisibleMetas(this._type).filter((t => t.controller.options.grouped)), n = i.options.stacked, a = [], r = t => {
                const i = t.controller.getParsed(e),
                    s = i && i[t.vScale.axis];
                if ((0, o.k)(s) || isNaN(s)) return !0
            };
            for (const i of s)
                if ((void 0 === e || !r(i)) && ((!1 === n || -1 === a.indexOf(i.stack) || void 0 === n && void 0 === i.stack) && a.push(i.stack), i.index === t)) break;
            return a.length || a.push(void 0), a
        }
        _getStackCount(t) {
            return this._getStacks(void 0, t).length
        }
        _getStackIndex(t, e, i) {
            const s = this._getStacks(t, i),
                n = void 0 !== e ? s.indexOf(e) : -1;
            return -1 === n ? s.length - 1 : n
        }
        _getRuler() {
            const t = this.options,
                e = this._cachedMeta,
                i = e.iScale,
                s = [];
            let n, o;
            for (n = 0, o = e.data.length; n < o; ++n) s.push(i.getPixelForValue(this.getParsed(n)[i.axis], n));
            const a = t.barThickness;
            return {
                min: a || k(e),
                pixels: s,
                start: i._startPixel,
                end: i._endPixel,
                stackCount: this._getStackCount(),
                scale: i,
                grouped: t.grouped,
                ratio: a ? 1 : t.categoryPercentage * t.barPercentage
            }
        }
        _calculateBarValuePixels(t) {
            const {
                _cachedMeta: {
                    vScale: e,
                    _stacked: i,
                    index: s
                },
                options: {
                    base: n,
                    minBarLength: a
                }
            } = this, r = n || 0, h = this.getParsed(t), l = h._custom, c = O(l);
            let d, u, f = h[e.axis],
                g = 0,
                p = i ? this.applyStack(e, h, i) : f;
            p !== f && (g = p - f, p = f), c && (f = l.barStart, p = l.barEnd - l.barStart, 0 !== f && (0, o.s)(f) !== (0, o.s)(l.barEnd) && (g = 0), g += f);
            const m = (0, o.k)(n) || c ? g : n;
            let x = e.getPixelForValue(m);
            if (d = this.chart.getDataVisibility(t) ? e.getPixelForValue(g + p) : x, u = d - x, Math.abs(u) < a) {
                u = function(t, e, i) {
                    return 0 !== t ? (0, o.s)(t) : (e.isHorizontal() ? 1 : -1) * (e.min >= i ? 1 : -1)
                }(u, e, r) * a, f === r && (x -= u / 2);
                const t = e.getPixelForDecimal(0),
                    n = e.getPixelForDecimal(1),
                    l = Math.min(t, n),
                    g = Math.max(t, n);
                x = Math.max(Math.min(x, g), l), d = x + u, i && !c && (h._stacks[e.axis]._visualValues[s] = e.getValueForPixel(d) - e.getValueForPixel(x))
            }
            if (x === e.getPixelForValue(r)) {
                const t = (0, o.s)(u) * e.getLineWidthForValue(r) / 2;
                x += t, u -= t
            }
            return {
                size: u,
                base: x,
                head: d,
                center: d + u / 2
            }
        }
        _calculateBarIndexPixels(t, e) {
            const i = e.scale,
                s = this.options,
                n = s.skipNull,
                a = (0, o.v)(s.maxBarThickness, 1 / 0);
            let r, h;
            if (e.grouped) {
                const i = n ? this._getStackCount(t) : e.stackCount,
                    l = "flex" === s.barThickness ? function(t, e, i, s) {
                        const n = e.pixels,
                            o = n[t];
                        let a = t > 0 ? n[t - 1] : null,
                            r = t < n.length - 1 ? n[t + 1] : null;
                        const h = i.categoryPercentage;
                        null === a && (a = o - (null === r ? e.end - e.start : r - o)), null === r && (r = o + o - a);
                        const l = o - (o - Math.min(a, r)) / 2 * h;
                        return {
                            chunk: Math.abs(r - a) / 2 * h / s,
                            ratio: i.barPercentage,
                            start: l
                        }
                    }(t, e, s, i) : function(t, e, i, s) {
                        const n = i.barThickness;
                        let a, r;
                        return (0, o.k)(n) ? (a = e.min * i.categoryPercentage, r = i.barPercentage) : (a = n * s, r = 1), {
                            chunk: a / s,
                            ratio: r,
                            start: e.pixels[t] - a / 2
                        }
                    }(t, e, s, i),
                    c = this._getStackIndex(this.index, this._cachedMeta.stack, n ? t : void 0);
                r = l.start + l.chunk * c + l.chunk / 2, h = Math.min(a, l.chunk * l.ratio)
            } else r = i.getPixelForValue(this.getParsed(t)[i.axis], t), h = Math.min(a, e.min * e.ratio);
            return {
                base: r - h / 2,
                head: r + h / 2,
                center: r,
                size: h
            }
        }
        draw() {
            const t = this._cachedMeta,
                e = t.vScale,
                i = t.data,
                s = i.length;
            let n = 0;
            for (; n < s; ++n) null !== this.getParsed(n)[e.axis] && i[n].draw(this._ctx)
        }
    }(0, n.default)(E, "id", "bar"), (0, n.default)(E, "defaults", {
        datasetElementType: !1,
        dataElementType: "bar",
        categoryPercentage: .8,
        barPercentage: .9,
        grouped: !0,
        animations: {
            numbers: {
                type: "number",
                properties: ["x", "y", "base", "width", "height"]
            }
        }
    }), (0, n.default)(E, "overrides", {
        scales: {
            _index_: {
                type: "category",
                offset: !0,
                grid: {
                    offset: !0
                }
            },
            _value_: {
                type: "linear",
                beginAtZero: !0
            }
        }
    });
    class L extends w {
        initialize() {
            this.enableOptionSharing = !0, super.initialize()
        }
        parsePrimitiveData(t, e, i, s) {
            const n = super.parsePrimitiveData(t, e, i, s);
            for (let t = 0; t < n.length; t++) n[t]._custom = this.resolveDataElementOptions(t + i).radius;
            return n
        }
        parseArrayData(t, e, i, s) {
            const n = super.parseArrayData(t, e, i, s);
            for (let t = 0; t < n.length; t++) {
                const s = e[i + t];
                n[t]._custom = (0, o.v)(s[2], this.resolveDataElementOptions(t + i).radius)
            }
            return n
        }
        parseObjectData(t, e, i, s) {
            const n = super.parseObjectData(t, e, i, s);
            for (let t = 0; t < n.length; t++) {
                const s = e[i + t];
                n[t]._custom = (0, o.v)(s && s.r && +s.r, this.resolveDataElementOptions(t + i).radius)
            }
            return n
        }
        getMaxOverflow() {
            const t = this._cachedMeta.data;
            let e = 0;
            for (let i = t.length - 1; i >= 0; --i) e = Math.max(e, t[i].size(this.resolveDataElementOptions(i)) / 2);
            return e > 0 && e
        }
        getLabelAndValue(t) {
            const e = this._cachedMeta,
                i = this.chart.data.labels || [],
                {
                    xScale: s,
                    yScale: n
                } = e,
                o = this.getParsed(t),
                a = s.getLabelForValue(o.x),
                r = n.getLabelForValue(o.y),
                h = o._custom;
            return {
                label: i[t] || "",
                value: "(" + a + ", " + r + (h ? ", " + h : "") + ")"
            }
        }
        update(t) {
            const e = this._cachedMeta.data;
            this.updateElements(e, 0, e.length, t)
        }
        updateElements(t, e, i, s) {
            const n = "reset" === s,
                {
                    iScale: o,
                    vScale: a
                } = this._cachedMeta,
                {
                    sharedOptions: r,
                    includeOptions: h
                } = this._getSharedOptions(e, s),
                l = o.axis,
                c = a.axis;
            for (let d = e; d < e + i; d++) {
                const e = t[d],
                    i = !n && this.getParsed(d),
                    u = {},
                    f = u[l] = n ? o.getPixelForDecimal(.5) : o.getPixelForValue(i[l]),
                    g = u[c] = n ? a.getBasePixel() : a.getPixelForValue(i[c]);
                u.skip = isNaN(f) || isNaN(g), h && (u.options = r || this.resolveDataElementOptions(d, e.active ? "active" : s), n && (u.options.radius = 0)), this.updateElement(e, d, u, s)
            }
        }
        resolveDataElementOptions(t, e) {
            const i = this.getParsed(t);
            let s = super.resolveDataElementOptions(t, e);
            s.$shared && (s = Object.assign({}, s, {
                $shared: !1
            }));
            const n = s.radius;
            return "active" !== e && (s.radius = 0), s.radius += (0, o.v)(i && i._custom, n), s
        }
    }(0, n.default)(L, "id", "bubble"), (0, n.default)(L, "defaults", {
        datasetElementType: !1,
        dataElementType: "point",
        animations: {
            numbers: {
                type: "number",
                properties: ["x", "y", "borderWidth", "radius"]
            }
        }
    }), (0, n.default)(L, "overrides", {
        scales: {
            x: {
                type: "linear"
            },
            y: {
                type: "linear"
            }
        }
    });
    class R extends w {
        linkScales() {}
        parse(t, e) {
            const i = this.getDataset().data,
                s = this._cachedMeta;
            if (!1 === this._parsing) s._parsed = i;
            else {
                let n, a, r = t => +i[t];
                if ((0, o.i)(i[t])) {
                    const {
                        key: t = "value"
                    } = this._parsing;
                    r = e => +(0, o.f)(i[e], t)
                }
                for (n = t, a = t + e; n < a; ++n) s._parsed[n] = r(n)
            }
        }
        _getRotation() {
            return (0, o.t)(this.options.rotation - 90)
        }
        _getCircumference() {
            return (0, o.t)(this.options.circumference)
        }
        _getRotationExtents() {
            let t = o.T,
                e = -o.T;
            for (let i = 0; i < this.chart.data.datasets.length; ++i)
                if (this.chart.isDatasetVisible(i) && this.chart.getDatasetMeta(i).type === this._type) {
                    const s = this.chart.getDatasetMeta(i).controller,
                        n = s._getRotation(),
                        o = s._getCircumference();
                    t = Math.min(t, n), e = Math.max(e, n + o)
                } return {
                rotation: t,
                circumference: e - t
            }
        }
        update(t) {
            const e = this.chart,
                {
                    chartArea: i
                } = e,
                s = this._cachedMeta,
                n = s.data,
                a = this.getMaxBorderWidth() + this.getMaxOffset(n) + this.options.spacing,
                r = Math.max((Math.min(i.width, i.height) - a) / 2, 0),
                h = Math.min((0, o.m)(this.options.cutout, r), 1),
                l = this._getRingWeight(this.index),
                {
                    circumference: c,
                    rotation: d
                } = this._getRotationExtents(),
                {
                    ratioX: u,
                    ratioY: f,
                    offsetX: g,
                    offsetY: p
                } = function(t, e, i) {
                    let s = 1,
                        n = 1,
                        a = 0,
                        r = 0;
                    if (e < o.T) {
                        const h = t,
                            l = h + e,
                            c = Math.cos(h),
                            d = Math.sin(h),
                            u = Math.cos(l),
                            f = Math.sin(l),
                            g = (t, e, s) => (0, o.p)(t, h, l, !0) ? 1 : Math.max(e, e * i, s, s * i),
                            p = (t, e, s) => (0, o.p)(t, h, l, !0) ? -1 : Math.min(e, e * i, s, s * i),
                            m = g(0, c, u),
                            x = g(o.H, d, f),
                            b = p(o.P, c, u),
                            _ = p(o.P + o.H, d, f);
                        s = (m - b) / 2, n = (x - _) / 2, a = -(m + b) / 2, r = -(x + _) / 2
                    }
                    return {
                        ratioX: s,
                        ratioY: n,
                        offsetX: a,
                        offsetY: r
                    }
                }(d, c, h),
                m = (i.width - a) / u,
                x = (i.height - a) / f,
                b = Math.max(Math.min(m, x) / 2, 0),
                _ = (0, o.n)(this.options.radius, b),
                y = (_ - Math.max(_ * h, 0)) / this._getVisibleDatasetWeightTotal();
            this.offsetX = g * _, this.offsetY = p * _, s.total = this.calculateTotal(), this.outerRadius = _ - y * this._getRingWeightOffset(this.index), this.innerRadius = Math.max(this.outerRadius - y * l, 0), this.updateElements(n, 0, n.length, t)
        }
        _circumference(t, e) {
            const i = this.options,
                s = this._cachedMeta,
                n = this._getCircumference();
            return e && i.animation.animateRotate || !this.chart.getDataVisibility(t) || null === s._parsed[t] || s.data[t].hidden ? 0 : this.calculateCircumference(s._parsed[t] * n / o.T)
        }
        updateElements(t, e, i, s) {
            const n = "reset" === s,
                o = this.chart,
                a = o.chartArea,
                r = o.options.animation,
                h = (a.left + a.right) / 2,
                l = (a.top + a.bottom) / 2,
                c = n && r.animateScale,
                d = c ? 0 : this.innerRadius,
                u = c ? 0 : this.outerRadius,
                {
                    sharedOptions: f,
                    includeOptions: g
                } = this._getSharedOptions(e, s);
            let p, m = this._getRotation();
            for (p = 0; p < e; ++p) m += this._circumference(p, n);
            for (p = e; p < e + i; ++p) {
                const e = this._circumference(p, n),
                    i = t[p],
                    o = {
                        x: h + this.offsetX,
                        y: l + this.offsetY,
                        startAngle: m,
                        endAngle: m + e,
                        circumference: e,
                        outerRadius: u,
                        innerRadius: d
                    };
                g && (o.options = f || this.resolveDataElementOptions(p, i.active ? "active" : s)), m += e, this.updateElement(i, p, o, s)
            }
        }
        calculateTotal() {
            const t = this._cachedMeta,
                e = t.data;
            let i, s = 0;
            for (i = 0; i < e.length; i++) {
                const n = t._parsed[i];
                null === n || isNaN(n) || !this.chart.getDataVisibility(i) || e[i].hidden || (s += Math.abs(n))
            }
            return s
        }
        calculateCircumference(t) {
            const e = this._cachedMeta.total;
            return e > 0 && !isNaN(t) ? o.T * (Math.abs(t) / e) : 0
        }
        getLabelAndValue(t) {
            const e = this._cachedMeta,
                i = this.chart,
                s = i.data.labels || [],
                n = (0, o.o)(e._parsed[t], i.options.locale);
            return {
                label: s[t] || "",
                value: n
            }
        }
        getMaxBorderWidth(t) {
            let e = 0;
            const i = this.chart;
            let s, n, o, a, r;
            if (!t)
                for (s = 0, n = i.data.datasets.length; s < n; ++s)
                    if (i.isDatasetVisible(s)) {
                        o = i.getDatasetMeta(s), t = o.data, a = o.controller;
                        break
                    } if (!t) return 0;
            for (s = 0, n = t.length; s < n; ++s) r = a.resolveDataElementOptions(s), "inner" !== r.borderAlign && (e = Math.max(e, r.borderWidth || 0, r.hoverBorderWidth || 0));
            return e
        }
        getMaxOffset(t) {
            let e = 0;
            for (let i = 0, s = t.length; i < s; ++i) {
                const t = this.resolveDataElementOptions(i);
                e = Math.max(e, t.offset || 0, t.hoverOffset || 0)
            }
            return e
        }
        _getRingWeightOffset(t) {
            let e = 0;
            for (let i = 0; i < t; ++i) this.chart.isDatasetVisible(i) && (e += this._getRingWeight(i));
            return e
        }
        _getRingWeight(t) {
            return Math.max((0, o.v)(this.chart.data.datasets[t].weight, 1), 0)
        }
        _getVisibleDatasetWeightTotal() {
            return this._getRingWeightOffset(this.chart.data.datasets.length) || 1
        }
        constructor(t, e) {
            super(t, e), this.enableOptionSharing = !0, this.innerRadius = void 0, this.outerRadius = void 0, this.offsetX = void 0, this.offsetY = void 0
        }
    }(0, n.default)(R, "id", "doughnut"), (0, n.default)(R, "defaults", {
        datasetElementType: !1,
        dataElementType: "arc",
        animation: {
            animateRotate: !0,
            animateScale: !1
        },
        animations: {
            numbers: {
                type: "number",
                properties: ["circumference", "endAngle", "innerRadius", "outerRadius", "startAngle", "x", "y", "offset", "borderWidth", "spacing"]
            }
        },
        cutout: "50%",
        rotation: 0,
        circumference: 360,
        radius: "100%",
        spacing: 0,
        indexAxis: "r"
    }), (0, n.default)(R, "descriptors", {
        _scriptable: t => "spacing" !== t,
        _indexable: t => "spacing" !== t
    }), (0, n.default)(R, "overrides", {
        aspectRatio: 1,
        plugins: {
            legend: {
                labels: {
                    generateLabels(t) {
                        const e = t.data;
                        if (e.labels.length && e.datasets.length) {
                            const {
                                labels: {
                                    pointStyle: i,
                                    color: s
                                }
                            } = t.legend.options;
                            return e.labels.map(((e, n) => {
                                const o = t.getDatasetMeta(0).controller.getStyle(n);
                                return {
                                    text: e,
                                    fillStyle: o.backgroundColor,
                                    strokeStyle: o.borderColor,
                                    fontColor: s,
                                    lineWidth: o.borderWidth,
                                    pointStyle: i,
                                    hidden: !t.getDataVisibility(n),
                                    index: n
                                }
                            }))
                        }
                        return []
                    }
                },
                onClick(t, e, i) {
                    i.chart.toggleDataVisibility(e.index), i.chart.update()
                }
            }
        }
    });
    class F extends w {
        initialize() {
            this.enableOptionSharing = !0, this.supportsDecimation = !0, super.initialize()
        }
        update(t) {
            const e = this._cachedMeta,
                {
                    dataset: i,
                    data: s = [],
                    _dataset: n
                } = e,
                a = this.chart._animationsDisabled;
            let {
                start: r,
                count: h
            } = (0, o.q)(e, s, a);
            this._drawStart = r, this._drawCount = h, (0, o.w)(e) && (r = 0, h = s.length), i._chart = this.chart, i._datasetIndex = this.index, i._decimated = !!n._decimated, i.points = s;
            const l = this.resolveDatasetElementOptions(t);
            this.options.showLine || (l.borderWidth = 0), l.segment = this.options.segment, this.updateElement(i, void 0, {
                animated: !a,
                options: l
            }, t), this.updateElements(s, r, h, t)
        }
        updateElements(t, e, i, s) {
            const n = "reset" === s,
                {
                    iScale: a,
                    vScale: r,
                    _stacked: h,
                    _dataset: l
                } = this._cachedMeta,
                {
                    sharedOptions: c,
                    includeOptions: d
                } = this._getSharedOptions(e, s),
                u = a.axis,
                f = r.axis,
                {
                    spanGaps: g,
                    segment: p
                } = this.options,
                m = (0, o.x)(g) ? g : Number.POSITIVE_INFINITY,
                x = this.chart._animationsDisabled || n || "none" === s,
                b = e + i,
                _ = t.length;
            let y = e > 0 && this.getParsed(e - 1);
            for (let i = 0; i < _; ++i) {
                const g = t[i],
                    _ = x ? g : {};
                if (i < e || i >= b) {
                    _.skip = !0;
                    continue
                }
                const v = this.getParsed(i),
                    M = (0, o.k)(v[f]),
                    w = _[u] = a.getPixelForValue(v[u], i),
                    k = _[f] = n || M ? r.getBasePixel() : r.getPixelForValue(h ? this.applyStack(r, v, h) : v[f], i);
                _.skip = isNaN(w) || isNaN(k) || M, _.stop = i > 0 && Math.abs(v[u] - y[u]) > m, p && (_.parsed = v, _.raw = l.data[i]), d && (_.options = c || this.resolveDataElementOptions(i, g.active ? "active" : s)), x || this.updateElement(g, i, _, s), y = v
            }
        }
        getMaxOverflow() {
            const t = this._cachedMeta,
                e = t.dataset,
                i = e.options && e.options.borderWidth || 0,
                s = t.data || [];
            if (!s.length) return i;
            const n = s[0].size(this.resolveDataElementOptions(0)),
                o = s[s.length - 1].size(this.resolveDataElementOptions(s.length - 1));
            return Math.max(i, n, o) / 2
        }
        draw() {
            const t = this._cachedMeta;
            t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis), super.draw()
        }
    }(0, n.default)(F, "id", "line"), (0, n.default)(F, "defaults", {
        datasetElementType: "line",
        dataElementType: "point",
        showLine: !0,
        spanGaps: !1
    }), (0, n.default)(F, "overrides", {
        scales: {
            _index_: {
                type: "category"
            },
            _value_: {
                type: "linear"
            }
        }
    });
    class I extends w {
        getLabelAndValue(t) {
            const e = this._cachedMeta,
                i = this.chart,
                s = i.data.labels || [],
                n = (0, o.o)(e._parsed[t].r, i.options.locale);
            return {
                label: s[t] || "",
                value: n
            }
        }
        parseObjectData(t, e, i, s) {
            return o.y.bind(this)(t, e, i, s)
        }
        update(t) {
            const e = this._cachedMeta.data;
            this._updateRadius(), this.updateElements(e, 0, e.length, t)
        }
        getMinMax() {
            const t = this._cachedMeta,
                e = {
                    min: Number.POSITIVE_INFINITY,
                    max: Number.NEGATIVE_INFINITY
                };
            return t.data.forEach(((t, i) => {
                const s = this.getParsed(i).r;
                !isNaN(s) && this.chart.getDataVisibility(i) && (s < e.min && (e.min = s), s > e.max && (e.max = s))
            })), e
        }
        _updateRadius() {
            const t = this.chart,
                e = t.chartArea,
                i = t.options,
                s = Math.min(e.right - e.left, e.bottom - e.top),
                n = Math.max(s / 2, 0),
                o = (n - Math.max(i.cutoutPercentage ? n / 100 * i.cutoutPercentage : 1, 0)) / t.getVisibleDatasetCount();
            this.outerRadius = n - o * this.index, this.innerRadius = this.outerRadius - o
        }
        updateElements(t, e, i, s) {
            const n = "reset" === s,
                a = this.chart,
                r = a.options.animation,
                h = this._cachedMeta.rScale,
                l = h.xCenter,
                c = h.yCenter,
                d = h.getIndexAngle(0) - .5 * o.P;
            let u, f = d;
            const g = 360 / this.countVisibleElements();
            for (u = 0; u < e; ++u) f += this._computeAngle(u, s, g);
            for (u = e; u < e + i; u++) {
                const e = t[u];
                let i = f,
                    o = f + this._computeAngle(u, s, g),
                    p = a.getDataVisibility(u) ? h.getDistanceFromCenterForValue(this.getParsed(u).r) : 0;
                f = o, n && (r.animateScale && (p = 0), r.animateRotate && (i = o = d));
                const m = {
                    x: l,
                    y: c,
                    innerRadius: 0,
                    outerRadius: p,
                    startAngle: i,
                    endAngle: o,
                    options: this.resolveDataElementOptions(u, e.active ? "active" : s)
                };
                this.updateElement(e, u, m, s)
            }
        }
        countVisibleElements() {
            const t = this._cachedMeta;
            let e = 0;
            return t.data.forEach(((t, i) => {
                !isNaN(this.getParsed(i).r) && this.chart.getDataVisibility(i) && e++
            })), e
        }
        _computeAngle(t, e, i) {
            return this.chart.getDataVisibility(t) ? (0, o.t)(this.resolveDataElementOptions(t, e).angle || i) : 0
        }
        constructor(t, e) {
            super(t, e), this.innerRadius = void 0, this.outerRadius = void 0
        }
    }(0, n.default)(I, "id", "polarArea"), (0, n.default)(I, "defaults", {
        dataElementType: "arc",
        animation: {
            animateRotate: !0,
            animateScale: !0
        },
        animations: {
            numbers: {
                type: "number",
                properties: ["x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius"]
            }
        },
        indexAxis: "r",
        startAngle: 0
    }), (0, n.default)(I, "overrides", {
        aspectRatio: 1,
        plugins: {
            legend: {
                labels: {
                    generateLabels(t) {
                        const e = t.data;
                        if (e.labels.length && e.datasets.length) {
                            const {
                                labels: {
                                    pointStyle: i,
                                    color: s
                                }
                            } = t.legend.options;
                            return e.labels.map(((e, n) => {
                                const o = t.getDatasetMeta(0).controller.getStyle(n);
                                return {
                                    text: e,
                                    fillStyle: o.backgroundColor,
                                    strokeStyle: o.borderColor,
                                    fontColor: s,
                                    lineWidth: o.borderWidth,
                                    pointStyle: i,
                                    hidden: !t.getDataVisibility(n),
                                    index: n
                                }
                            }))
                        }
                        return []
                    }
                },
                onClick(t, e, i) {
                    i.chart.toggleDataVisibility(e.index), i.chart.update()
                }
            }
        },
        scales: {
            r: {
                type: "radialLinear",
                angleLines: {
                    display: !1
                },
                beginAtZero: !0,
                grid: {
                    circular: !0
                },
                pointLabels: {
                    display: !1
                },
                startAngle: 0
            }
        }
    });
    class z extends R {}(0, n.default)(z, "id", "pie"), (0, n.default)(z, "defaults", {
        cutout: 0,
        rotation: 0,
        circumference: 360,
        radius: "100%"
    });
    class V extends w {
        getLabelAndValue(t) {
            const e = this._cachedMeta.vScale,
                i = this.getParsed(t);
            return {
                label: e.getLabels()[t],
                value: "" + e.getLabelForValue(i[e.axis])
            }
        }
        parseObjectData(t, e, i, s) {
            return o.y.bind(this)(t, e, i, s)
        }
        update(t) {
            const e = this._cachedMeta,
                i = e.dataset,
                s = e.data || [],
                n = e.iScale.getLabels();
            if (i.points = s, "resize" !== t) {
                const e = this.resolveDatasetElementOptions(t);
                this.options.showLine || (e.borderWidth = 0);
                const o = {
                    _loop: !0,
                    _fullLoop: n.length === s.length,
                    options: e
                };
                this.updateElement(i, void 0, o, t)
            }
            this.updateElements(s, 0, s.length, t)
        }
        updateElements(t, e, i, s) {
            const n = this._cachedMeta.rScale,
                o = "reset" === s;
            for (let a = e; a < e + i; a++) {
                const e = t[a],
                    i = this.resolveDataElementOptions(a, e.active ? "active" : s),
                    r = n.getPointPositionForValue(a, this.getParsed(a).r),
                    h = o ? n.xCenter : r.x,
                    l = o ? n.yCenter : r.y,
                    c = {
                        x: h,
                        y: l,
                        angle: r.angle,
                        skip: isNaN(h) || isNaN(l),
                        options: i
                    };
                this.updateElement(e, a, c, s)
            }
        }
    }(0, n.default)(V, "id", "radar"), (0, n.default)(V, "defaults", {
        datasetElementType: "line",
        dataElementType: "point",
        indexAxis: "r",
        showLine: !0,
        elements: {
            line: {
                fill: "start"
            }
        }
    }), (0, n.default)(V, "overrides", {
        aspectRatio: 1,
        scales: {
            r: {
                type: "radialLinear"
            }
        }
    });
    class B extends w {
        getLabelAndValue(t) {
            const e = this._cachedMeta,
                i = this.chart.data.labels || [],
                {
                    xScale: s,
                    yScale: n
                } = e,
                o = this.getParsed(t),
                a = s.getLabelForValue(o.x),
                r = n.getLabelForValue(o.y);
            return {
                label: i[t] || "",
                value: "(" + a + ", " + r + ")"
            }
        }
        update(t) {
            const e = this._cachedMeta,
                {
                    data: i = []
                } = e,
                s = this.chart._animationsDisabled;
            let {
                start: n,
                count: a
            } = (0, o.q)(e, i, s);
            if (this._drawStart = n, this._drawCount = a, (0, o.w)(e) && (n = 0, a = i.length), this.options.showLine) {
                const {
                    dataset: n,
                    _dataset: o
                } = e;
                n._chart = this.chart, n._datasetIndex = this.index, n._decimated = !!o._decimated, n.points = i;
                const a = this.resolveDatasetElementOptions(t);
                a.segment = this.options.segment, this.updateElement(n, void 0, {
                    animated: !s,
                    options: a
                }, t)
            }
            this.updateElements(i, n, a, t)
        }
        addElements() {
            const {
                showLine: t
            } = this.options;
            !this.datasetElementType && t && (this.datasetElementType = this.chart.registry.getElement("line")), super.addElements()
        }
        updateElements(t, e, i, s) {
            const n = "reset" === s,
                {
                    iScale: a,
                    vScale: r,
                    _stacked: h,
                    _dataset: l
                } = this._cachedMeta,
                c = this.resolveDataElementOptions(e, s),
                d = this.getSharedOptions(c),
                u = this.includeOptions(s, d),
                f = a.axis,
                g = r.axis,
                {
                    spanGaps: p,
                    segment: m
                } = this.options,
                x = (0, o.x)(p) ? p : Number.POSITIVE_INFINITY,
                b = this.chart._animationsDisabled || n || "none" === s;
            let _ = e > 0 && this.getParsed(e - 1);
            for (let c = e; c < e + i; ++c) {
                const e = t[c],
                    i = this.getParsed(c),
                    p = b ? e : {},
                    y = (0, o.k)(i[g]),
                    v = p[f] = a.getPixelForValue(i[f], c),
                    M = p[g] = n || y ? r.getBasePixel() : r.getPixelForValue(h ? this.applyStack(r, i, h) : i[g], c);
                p.skip = isNaN(v) || isNaN(M) || y, p.stop = c > 0 && Math.abs(i[f] - _[f]) > x, m && (p.parsed = i, p.raw = l.data[c]), u && (p.options = d || this.resolveDataElementOptions(c, e.active ? "active" : s)), b || this.updateElement(e, c, p, s), _ = i
            }
            this.updateSharedOptions(d, s, c)
        }
        getMaxOverflow() {
            const t = this._cachedMeta,
                e = t.data || [];
            if (!this.options.showLine) {
                let t = 0;
                for (let i = e.length - 1; i >= 0; --i) t = Math.max(t, e[i].size(this.resolveDataElementOptions(i)) / 2);
                return t > 0 && t
            }
            const i = t.dataset,
                s = i.options && i.options.borderWidth || 0;
            if (!e.length) return s;
            const n = e[0].size(this.resolveDataElementOptions(0)),
                o = e[e.length - 1].size(this.resolveDataElementOptions(e.length - 1));
            return Math.max(s, n, o) / 2
        }
    }(0, n.default)(B, "id", "scatter"), (0, n.default)(B, "defaults", {
        datasetElementType: !1,
        dataElementType: "point",
        showLine: !1,
        fill: !1
    }), (0, n.default)(B, "overrides", {
        interaction: {
            mode: "point"
        },
        scales: {
            x: {
                type: "linear"
            },
            y: {
                type: "linear"
            }
        }
    });

    function N() {
        throw new Error("This method is not implemented: Check that a complete date adapter is provided.")
    }
    class j {
        static override(t) {
            Object.assign(j.prototype, t)
        }
        init() {}
        formats() {
            return N()
        }
        parse() {
            return N()
        }
        format() {
            return N()
        }
        add() {
            return N()
        }
        diff() {
            return N()
        }
        startOf() {
            return N()
        }
        endOf() {
            return N()
        }
        constructor(t) {
            this.options = t || {}
        }
    }
    var W = j;

    function H(t, e, i, s) {
        const {
            controller: n,
            data: a,
            _sorted: r
        } = t, h = n._cachedMeta.iScale;
        if (h && e === h.axis && "r" !== e && r && a.length) {
            const t = h._reversePixels ? o.A : o.B;
            if (!s) return t(a, e, i);
            if (n._sharedOptions) {
                const s = a[0],
                    n = "function" == typeof s.getRange && s.getRange(e);
                if (n) {
                    const s = t(a, e, i - n),
                        o = t(a, e, i + n);
                    return {
                        lo: s.lo,
                        hi: o.hi
                    }
                }
            }
        }
        return {
            lo: 0,
            hi: a.length - 1
        }
    }

    function $(t, e, i, s, n) {
        const o = t.getSortedVisibleDatasetMetas(),
            a = i[e];
        for (let t = 0, i = o.length; t < i; ++t) {
            const {
                index: i,
                data: r
            } = o[t], {
                lo: h,
                hi: l
            } = H(o[t], e, a, n);
            for (let t = h; t <= l; ++t) {
                const e = r[t];
                e.skip || s(e, i, t)
            }
        }
    }

    function Y(t, e, i, s, n) {
        const a = [];
        if (!n && !t.isPointInArea(e)) return a;
        return $(t, i, e, (function(i, r, h) {
            (n || (0, o.C)(i, t.chartArea, 0)) && i.inRange(e.x, e.y, s) && a.push({
                element: i,
                datasetIndex: r,
                index: h
            })
        }), !0), a
    }

    function U(t, e, i, s, n, o) {
        let a = [];
        const r = function(t) {
            const e = -1 !== t.indexOf("x"),
                i = -1 !== t.indexOf("y");
            return function(t, s) {
                const n = e ? Math.abs(t.x - s.x) : 0,
                    o = i ? Math.abs(t.y - s.y) : 0;
                return Math.sqrt(Math.pow(n, 2) + Math.pow(o, 2))
            }
        }(i);
        let h = Number.POSITIVE_INFINITY;
        return $(t, i, e, (function(i, l, c) {
            const d = i.inRange(e.x, e.y, n);
            if (s && !d) return;
            const u = i.getCenterPoint(n);
            if (!(!!o || t.isPointInArea(u)) && !d) return;
            const f = r(e, u);
            f < h ? (a = [{
                element: i,
                datasetIndex: l,
                index: c
            }], h = f) : f === h && a.push({
                element: i,
                datasetIndex: l,
                index: c
            })
        })), a
    }

    function X(t, e, i, s, n, a) {
        return a || t.isPointInArea(e) ? "r" !== i || s ? U(t, e, i, s, n, a) : function(t, e, i, s) {
            let n = [];
            return $(t, i, e, (function(t, i, a) {
                const {
                    startAngle: r,
                    endAngle: h
                } = t.getProps(["startAngle", "endAngle"], s), {
                    angle: l
                } = (0, o.D)(t, {
                    x: e.x,
                    y: e.y
                });
                (0, o.p)(l, r, h) && n.push({
                    element: t,
                    datasetIndex: i,
                    index: a
                })
            })), n
        }(t, e, i, n) : []
    }

    function q(t, e, i, s, n) {
        const o = [],
            a = "x" === i ? "inXRange" : "inYRange";
        let r = !1;
        return $(t, i, e, ((t, s, h) => {
            t[a](e[i], n) && (o.push({
                element: t,
                datasetIndex: s,
                index: h
            }), r = r || t.inRange(e.x, e.y, n))
        })), s && !r ? [] : o
    }
    var Q = {
        evaluateInteractionItems: $,
        modes: {
            index(t, e, i, s) {
                const n = (0, o.z)(e, t),
                    a = i.axis || "x",
                    r = i.includeInvisible || !1,
                    h = i.intersect ? Y(t, n, a, s, r) : X(t, n, a, !1, s, r),
                    l = [];
                return h.length ? (t.getSortedVisibleDatasetMetas().forEach((t => {
                    const e = h[0].index,
                        i = t.data[e];
                    i && !i.skip && l.push({
                        element: i,
                        datasetIndex: t.index,
                        index: e
                    })
                })), l) : []
            },
            dataset(t, e, i, s) {
                const n = (0, o.z)(e, t),
                    a = i.axis || "xy",
                    r = i.includeInvisible || !1;
                let h = i.intersect ? Y(t, n, a, s, r) : X(t, n, a, !1, s, r);
                if (h.length > 0) {
                    const e = h[0].datasetIndex,
                        i = t.getDatasetMeta(e).data;
                    h = [];
                    for (let t = 0; t < i.length; ++t) h.push({
                        element: i[t],
                        datasetIndex: e,
                        index: t
                    })
                }
                return h
            },
            point: (t, e, i, s) => Y(t, (0, o.z)(e, t), i.axis || "xy", s, i.includeInvisible || !1),
            nearest(t, e, i, s) {
                const n = (0, o.z)(e, t),
                    a = i.axis || "xy",
                    r = i.includeInvisible || !1;
                return X(t, n, a, i.intersect, s, r)
            },
            x: (t, e, i, s) => q(t, (0, o.z)(e, t), "x", i.intersect, s),
            y: (t, e, i, s) => q(t, (0, o.z)(e, t), "y", i.intersect, s)
        }
    };
    const K = ["left", "top", "right", "bottom"];

    function G(t, e) {
        return t.filter((t => t.pos === e))
    }

    function Z(t, e) {
        return t.filter((t => -1 === K.indexOf(t.pos) && t.box.axis === e))
    }

    function J(t, e) {
        return t.sort(((t, i) => {
            const s = e ? i : t,
                n = e ? t : i;
            return s.weight === n.weight ? s.index - n.index : s.weight - n.weight
        }))
    }

    function tt(t, e) {
        const i = function(t) {
                const e = {};
                for (const i of t) {
                    const {
                        stack: t,
                        pos: s,
                        stackWeight: n
                    } = i;
                    if (!t || !K.includes(s)) continue;
                    const o = e[t] || (e[t] = {
                        count: 0,
                        placed: 0,
                        weight: 0,
                        size: 0
                    });
                    o.count++, o.weight += n
                }
                return e
            }(t),
            {
                vBoxMaxWidth: s,
                hBoxMaxHeight: n
            } = e;
        let o, a, r;
        for (o = 0, a = t.length; o < a; ++o) {
            r = t[o];
            const {
                fullSize: a
            } = r.box, h = i[r.stack], l = h && r.stackWeight / h.weight;
            r.horizontal ? (r.width = l ? l * s : a && e.availableWidth, r.height = n) : (r.width = s, r.height = l ? l * n : a && e.availableHeight)
        }
        return i
    }

    function et(t, e, i, s) {
        return Math.max(t[i], e[i]) + Math.max(t[s], e[s])
    }

    function it(t, e) {
        t.top = Math.max(t.top, e.top), t.left = Math.max(t.left, e.left), t.bottom = Math.max(t.bottom, e.bottom), t.right = Math.max(t.right, e.right)
    }

    function st(t, e, i, s) {
        const {
            pos: n,
            box: a
        } = i, r = t.maxPadding;
        if (!(0, o.i)(n)) {
            i.size && (t[n] -= i.size);
            const e = s[i.stack] || {
                size: 0,
                count: 1
            };
            e.size = Math.max(e.size, i.horizontal ? a.height : a.width), i.size = e.size / e.count, t[n] += i.size
        }
        a.getPadding && it(r, a.getPadding());
        const h = Math.max(0, e.outerWidth - et(r, t, "left", "right")),
            l = Math.max(0, e.outerHeight - et(r, t, "top", "bottom")),
            c = h !== t.w,
            d = l !== t.h;
        return t.w = h, t.h = l, i.horizontal ? {
            same: c,
            other: d
        } : {
            same: d,
            other: c
        }
    }

    function nt(t, e) {
        const i = e.maxPadding;

        function s(t) {
            const s = {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            };
            return t.forEach((t => {
                s[t] = Math.max(e[t], i[t])
            })), s
        }
        return s(t ? ["left", "right"] : ["top", "bottom"])
    }

    function ot(t, e, i, s) {
        const n = [];
        let o, a, r, h, l, c;
        for (o = 0, a = t.length, l = 0; o < a; ++o) {
            r = t[o], h = r.box, h.update(r.width || e.w, r.height || e.h, nt(r.horizontal, e));
            const {
                same: a,
                other: d
            } = st(e, i, r, s);
            l |= a && n.length, c = c || d, h.fullSize || n.push(r)
        }
        return l && ot(n, e, i, s) || c
    }

    function at(t, e, i, s, n) {
        t.top = i, t.left = e, t.right = e + s, t.bottom = i + n, t.width = s, t.height = n
    }

    function rt(t, e, i, s) {
        const n = i.padding;
        let {
            x: a,
            y: r
        } = e;
        for (const h of t) {
            const t = h.box,
                l = s[h.stack] || {
                    count: 1,
                    placed: 0,
                    weight: 1
                },
                c = h.stackWeight / l.weight || 1;
            if (h.horizontal) {
                const s = e.w * c,
                    a = l.size || t.height;
                (0, o.h)(l.start) && (r = l.start), t.fullSize ? at(t, n.left, r, i.outerWidth - n.right - n.left, a) : at(t, e.left + l.placed, r, s, a), l.start = r, l.placed += s, r = t.bottom
            } else {
                const s = e.h * c,
                    r = l.size || t.width;
                (0, o.h)(l.start) && (a = l.start), t.fullSize ? at(t, a, n.top, r, i.outerHeight - n.bottom - n.top) : at(t, a, e.top + l.placed, r, s), l.start = a, l.placed += s, a = t.right
            }
        }
        e.x = a, e.y = r
    }
    var ht = {
        addBox(t, e) {
            t.boxes || (t.boxes = []), e.fullSize = e.fullSize || !1, e.position = e.position || "top", e.weight = e.weight || 0, e._layers = e._layers || function() {
                return [{
                    z: 0,
                    draw(t) {
                        e.draw(t)
                    }
                }]
            }, t.boxes.push(e)
        },
        removeBox(t, e) {
            const i = t.boxes ? t.boxes.indexOf(e) : -1; - 1 !== i && t.boxes.splice(i, 1)
        },
        configure(t, e, i) {
            e.fullSize = i.fullSize, e.position = i.position, e.weight = i.weight
        },
        update(t, e, i, s) {
            if (!t) return;
            const n = (0, o.E)(t.options.layout.padding),
                a = Math.max(e - n.width, 0),
                r = Math.max(i - n.height, 0),
                h = function(t) {
                    const e = function(t) {
                            const e = [];
                            let i, s, n, o, a, r;
                            for (i = 0, s = (t || []).length; i < s; ++i) n = t[i], ({
                                position: o,
                                options: {
                                    stack: a,
                                    stackWeight: r = 1
                                }
                            } = n), e.push({
                                index: i,
                                box: n,
                                pos: o,
                                horizontal: n.isHorizontal(),
                                weight: n.weight,
                                stack: a && o + a,
                                stackWeight: r
                            });
                            return e
                        }(t),
                        i = J(e.filter((t => t.box.fullSize)), !0),
                        s = J(G(e, "left"), !0),
                        n = J(G(e, "right")),
                        o = J(G(e, "top"), !0),
                        a = J(G(e, "bottom")),
                        r = Z(e, "x"),
                        h = Z(e, "y");
                    return {
                        fullSize: i,
                        leftAndTop: s.concat(o),
                        rightAndBottom: n.concat(h).concat(a).concat(r),
                        chartArea: G(e, "chartArea"),
                        vertical: s.concat(n).concat(h),
                        horizontal: o.concat(a).concat(r)
                    }
                }(t.boxes),
                l = h.vertical,
                c = h.horizontal;
            (0, o.F)(t.boxes, (t => {
                "function" == typeof t.beforeLayout && t.beforeLayout()
            }));
            const d = l.reduce(((t, e) => e.box.options && !1 === e.box.options.display ? t : t + 1), 0) || 1,
                u = Object.freeze({
                    outerWidth: e,
                    outerHeight: i,
                    padding: n,
                    availableWidth: a,
                    availableHeight: r,
                    vBoxMaxWidth: a / 2 / d,
                    hBoxMaxHeight: r / 2
                }),
                f = Object.assign({}, n);
            it(f, (0, o.E)(s));
            const g = Object.assign({
                    maxPadding: f,
                    w: a,
                    h: r,
                    x: n.left,
                    y: n.top
                }, n),
                p = tt(l.concat(c), u);
            ot(h.fullSize, g, u, p), ot(l, g, u, p), ot(c, g, u, p) && ot(l, g, u, p),
                function(t) {
                    const e = t.maxPadding;

                    function i(i) {
                        const s = Math.max(e[i] - t[i], 0);
                        return t[i] += s, s
                    }
                    t.y += i("top"), t.x += i("left"), i("right"), i("bottom")
                }(g), rt(h.leftAndTop, g, u, p), g.x += g.w, g.y += g.h, rt(h.rightAndBottom, g, u, p), t.chartArea = {
                    left: g.left,
                    top: g.top,
                    right: g.left + g.w,
                    bottom: g.top + g.h,
                    height: g.h,
                    width: g.w
                }, (0, o.F)(h.chartArea, (e => {
                    const i = e.box;
                    Object.assign(i, t.chartArea), i.update(g.w, g.h, {
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0
                    })
                }))
        }
    };
    class lt {
        acquireContext(t, e) {}
        releaseContext(t) {
            return !1
        }
        addEventListener(t, e, i) {}
        removeEventListener(t, e, i) {}
        getDevicePixelRatio() {
            return 1
        }
        getMaximumSize(t, e, i, s) {
            return e = Math.max(0, e || t.width), i = i || t.height, {
                width: e,
                height: Math.max(0, s ? Math.floor(e / s) : i)
            }
        }
        isAttached(t) {
            return !0
        }
        updateConfig(t) {}
    }
    class ct extends lt {
        acquireContext(t) {
            return t && t.getContext && t.getContext("2d") || null
        }
        updateConfig(t) {
            t.options.animation = !1
        }
    }
    const dt = "$chartjs",
        ut = {
            touchstart: "mousedown",
            touchmove: "mousemove",
            touchend: "mouseup",
            pointerenter: "mouseenter",
            pointerdown: "mousedown",
            pointermove: "mousemove",
            pointerup: "mouseup",
            pointerleave: "mouseout",
            pointerout: "mouseout"
        },
        ft = t => null === t || "" === t;
    const gt = !!o.K && {
        passive: !0
    };

    function pt(t, e, i) {
        t.canvas.removeEventListener(e, i, gt)
    }

    function mt(t, e) {
        for (const i of t)
            if (i === e || i.contains(e)) return !0
    }

    function xt(t, e, i) {
        const s = t.canvas,
            n = new MutationObserver((t => {
                let e = !1;
                for (const i of t) e = e || mt(i.addedNodes, s), e = e && !mt(i.removedNodes, s);
                e && i()
            }));
        return n.observe(document, {
            childList: !0,
            subtree: !0
        }), n
    }

    function bt(t, e, i) {
        const s = t.canvas,
            n = new MutationObserver((t => {
                let e = !1;
                for (const i of t) e = e || mt(i.removedNodes, s), e = e && !mt(i.addedNodes, s);
                e && i()
            }));
        return n.observe(document, {
            childList: !0,
            subtree: !0
        }), n
    }
    const _t = new Map;
    let yt = 0;

    function vt() {
        const t = window.devicePixelRatio;
        t !== yt && (yt = t, _t.forEach(((e, i) => {
            i.currentDevicePixelRatio !== t && e()
        })))
    }

    function Mt(t, e, i) {
        const s = t.canvas,
            n = s && (0, o.I)(s);
        if (!n) return;
        const a = (0, o.L)(((t, e) => {
                const s = n.clientWidth;
                i(t, e), s < n.clientWidth && i()
            }), window),
            r = new ResizeObserver((t => {
                const e = t[0],
                    i = e.contentRect.width,
                    s = e.contentRect.height;
                0 === i && 0 === s || a(i, s)
            }));
        return r.observe(n),
            function(t, e) {
                _t.size || window.addEventListener("resize", vt), _t.set(t, e)
            }(t, a), r
    }

    function wt(t, e, i) {
        i && i.disconnect(), "resize" === e && function(t) {
            _t.delete(t), _t.size || window.removeEventListener("resize", vt)
        }(t)
    }

    function kt(t, e, i) {
        const s = t.canvas,
            n = (0, o.L)((e => {
                null !== t.ctx && i(function(t, e) {
                    const i = ut[t.type] || t.type,
                        {
                            x: s,
                            y: n
                        } = (0, o.z)(t, e);
                    return {
                        type: i,
                        chart: e,
                        native: t,
                        x: void 0 !== s ? s : null,
                        y: void 0 !== n ? n : null
                    }
                }(e, t))
            }), t);
        return function(t, e, i) {
            t.addEventListener(e, i, gt)
        }(s, e, n), n
    }
    class St extends lt {
        acquireContext(t, e) {
            const i = t && t.getContext && t.getContext("2d");
            return i && i.canvas === t ? (function(t, e) {
                const i = t.style,
                    s = t.getAttribute("height"),
                    n = t.getAttribute("width");
                if (t[dt] = {
                        initial: {
                            height: s,
                            width: n,
                            style: {
                                display: i.display,
                                height: i.height,
                                width: i.width
                            }
                        }
                    }, i.display = i.display || "block", i.boxSizing = i.boxSizing || "border-box", ft(n)) {
                    const e = (0, o.J)(t, "width");
                    void 0 !== e && (t.width = e)
                }
                if (ft(s))
                    if ("" === t.style.height) t.height = t.width / (e || 2);
                    else {
                        const e = (0, o.J)(t, "height");
                        void 0 !== e && (t.height = e)
                    }
            }(t, e), i) : null
        }
        releaseContext(t) {
            const e = t.canvas;
            if (!e[dt]) return !1;
            const i = e[dt].initial;
            ["height", "width"].forEach((t => {
                const s = i[t];
                (0, o.k)(s) ? e.removeAttribute(t): e.setAttribute(t, s)
            }));
            const s = i.style || {};
            return Object.keys(s).forEach((t => {
                e.style[t] = s[t]
            })), e.width = e.width, delete e[dt], !0
        }
        addEventListener(t, e, i) {
            this.removeEventListener(t, e);
            const s = t.$proxies || (t.$proxies = {}),
                n = {
                    attach: xt,
                    detach: bt,
                    resize: Mt
                } [e] || kt;
            s[e] = n(t, e, i)
        }
        removeEventListener(t, e) {
            const i = t.$proxies || (t.$proxies = {}),
                s = i[e];
            if (!s) return;
            ({
                attach: wt,
                detach: wt,
                resize: wt
            } [e] || pt)(t, e, s), i[e] = void 0
        }
        getDevicePixelRatio() {
            return window.devicePixelRatio
        }
        getMaximumSize(t, e, i, s) {
            return (0, o.G)(t, e, i, s)
        }
        isAttached(t) {
            const e = (0, o.I)(t);
            return !(!e || !e.isConnected)
        }
    }
    class Pt {
        tooltipPosition(t) {
            const {
                x: e,
                y: i
            } = this.getProps(["x", "y"], t);
            return {
                x: e,
                y: i
            }
        }
        hasValue() {
            return (0, o.x)(this.x) && (0, o.x)(this.y)
        }
        getProps(t, e) {
            const i = this.$animations;
            if (!e || !i) return this;
            const s = {};
            return t.forEach((t => {
                s[t] = i[t] && i[t].active() ? i[t]._to : this[t]
            })), s
        }
        constructor() {
            (0, n.default)(this, "active", !1)
        }
    }

    function Ot(t, e) {
        const i = t.options.ticks,
            s = function(t) {
                const e = t.options.offset,
                    i = t._tickSize(),
                    s = t._length / i + (e ? 0 : 1),
                    n = t._maxLength / i;
                return Math.floor(Math.min(s, n))
            }(t),
            n = Math.min(i.maxTicksLimit || s, s),
            a = i.major.enabled ? function(t) {
                const e = [];
                let i, s;
                for (i = 0, s = t.length; i < s; i++) t[i].major && e.push(i);
                return e
            }(e) : [],
            r = a.length,
            h = a[0],
            l = a[r - 1],
            c = [];
        if (r > n) return function(t, e, i, s) {
            let n, o = 0,
                a = i[0];
            for (s = Math.ceil(s), n = 0; n < t.length; n++) n === a && (e.push(t[n]), o++, a = i[o * s])
        }(e, c, a, r / n), c;
        const d = function(t, e, i) {
            const s = function(t) {
                    const e = t.length;
                    let i, s;
                    if (e < 2) return !1;
                    for (s = t[0], i = 1; i < e; ++i)
                        if (t[i] - t[i - 1] !== s) return !1;
                    return s
                }(t),
                n = e.length / i;
            if (!s) return Math.max(n, 1);
            const a = (0, o.N)(s);
            for (let t = 0, e = a.length - 1; t < e; t++) {
                const e = a[t];
                if (e > n) return e
            }
            return Math.max(n, 1)
        }(a, e, n);
        if (r > 0) {
            let t, i;
            const s = r > 1 ? Math.round((l - h) / (r - 1)) : null;
            for (Ct(e, c, d, (0, o.k)(s) ? 0 : h - s, h), t = 0, i = r - 1; t < i; t++) Ct(e, c, d, a[t], a[t + 1]);
            return Ct(e, c, d, l, (0, o.k)(s) ? e.length : l + s), c
        }
        return Ct(e, c, d), c
    }

    function Ct(t, e, i, s, n) {
        const a = (0, o.v)(s, 0),
            r = Math.min((0, o.v)(n, t.length), t.length);
        let h, l, c, d = 0;
        for (i = Math.ceil(i), n && (h = n - s, i = h / Math.floor(h / i)), c = a; c < 0;) d++, c = Math.round(a + d * i);
        for (l = Math.max(a, 0); l < r; l++) l === c && (e.push(t[l]), d++, c = Math.round(a + d * i))
    }(0, n.default)(Pt, "defaults", {}), (0, n.default)(Pt, "defaultRoutes", void 0);
    const Dt = (t, e, i) => "top" === e || "left" === e ? t[e] + i : t[e] - i;

    function Tt(t, e) {
        const i = [],
            s = t.length / e,
            n = t.length;
        let o = 0;
        for (; o < n; o += s) i.push(t[Math.floor(o)]);
        return i
    }

    function At(t, e, i) {
        const s = t.ticks.length,
            n = Math.min(e, s - 1),
            o = t._startPixel,
            a = t._endPixel,
            r = 1e-6;
        let h, l = t.getPixelForTick(n);
        if (!(i && (h = 1 === s ? Math.max(l - o, a - l) : 0 === e ? (t.getPixelForTick(1) - l) / 2 : (l - t.getPixelForTick(n - 1)) / 2, l += n < e ? h : -h, l < o - r || l > a + r))) return l
    }

    function Et(t) {
        return t.drawTicks ? t.tickLength : 0
    }

    function Lt(t, e) {
        if (!t.display) return 0;
        const i = (0, o.a0)(t.font, e),
            s = (0, o.E)(t.padding);
        return ((0, o.b)(t.text) ? t.text.length : 1) * i.lineHeight + s.height
    }

    function Rt(t, e, i) {
        let s = (0, o.a1)(t);
        return (i && "right" !== e || !i && "right" === e) && (s = (t => "left" === t ? "right" : "right" === t ? "left" : t)(s)), s
    }
    class Ft extends Pt {
        init(t) {
            this.options = t.setContext(this.getContext()), this.axis = t.axis, this._userMin = this.parse(t.min), this._userMax = this.parse(t.max), this._suggestedMin = this.parse(t.suggestedMin), this._suggestedMax = this.parse(t.suggestedMax)
        }
        parse(t, e) {
            return t
        }
        getUserBounds() {
            let {
                _userMin: t,
                _userMax: e,
                _suggestedMin: i,
                _suggestedMax: s
            } = this;
            return t = (0, o.O)(t, Number.POSITIVE_INFINITY), e = (0, o.O)(e, Number.NEGATIVE_INFINITY), i = (0, o.O)(i, Number.POSITIVE_INFINITY), s = (0, o.O)(s, Number.NEGATIVE_INFINITY), {
                min: (0, o.O)(t, i),
                max: (0, o.O)(e, s),
                minDefined: (0, o.g)(t),
                maxDefined: (0, o.g)(e)
            }
        }
        getMinMax(t) {
            let e, {
                min: i,
                max: s,
                minDefined: n,
                maxDefined: a
            } = this.getUserBounds();
            if (n && a) return {
                min: i,
                max: s
            };
            const r = this.getMatchingVisibleMetas();
            for (let o = 0, h = r.length; o < h; ++o) e = r[o].controller.getMinMax(this, t), n || (i = Math.min(i, e.min)), a || (s = Math.max(s, e.max));
            return i = a && i > s ? s : i, s = n && i > s ? i : s, {
                min: (0, o.O)(i, (0, o.O)(s, i)),
                max: (0, o.O)(s, (0, o.O)(i, s))
            }
        }
        getPadding() {
            return {
                left: this.paddingLeft || 0,
                top: this.paddingTop || 0,
                right: this.paddingRight || 0,
                bottom: this.paddingBottom || 0
            }
        }
        getTicks() {
            return this.ticks
        }
        getLabels() {
            const t = this.chart.data;
            return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || []
        }
        getLabelItems(t = this.chart.chartArea) {
            return this._labelItems || (this._labelItems = this._computeLabelItems(t))
        }
        beforeLayout() {
            this._cache = {}, this._dataLimitsCached = !1
        }
        beforeUpdate() {
            (0, o.Q)(this.options.beforeUpdate, [this])
        }
        update(t, e, i) {
            const {
                beginAtZero: s,
                grace: n,
                ticks: a
            } = this.options, r = a.sampleSize;
            this.beforeUpdate(), this.maxWidth = t, this.maxHeight = e, this._margins = i = Object.assign({
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }, i), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + i.left + i.right : this.height + i.top + i.bottom, this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = (0, o.R)(this, n, s), this._dataLimitsCached = !0), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks();
            const h = r < this.ticks.length;
            this._convertTicksToLabels(h ? Tt(this.ticks, r) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), a.display && (a.autoSkip || "auto" === a.source) && (this.ticks = Ot(this, this.ticks), this._labelSizes = null, this.afterAutoSkip()), h && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate()
        }
        configure() {
            let t, e, i = this.options.reverse;
            this.isHorizontal() ? (t = this.left, e = this.right) : (t = this.top, e = this.bottom, i = !i), this._startPixel = t, this._endPixel = e, this._reversePixels = i, this._length = e - t, this._alignToPixels = this.options.alignToPixels
        }
        afterUpdate() {
            (0, o.Q)(this.options.afterUpdate, [this])
        }
        beforeSetDimensions() {
            (0, o.Q)(this.options.beforeSetDimensions, [this])
        }
        setDimensions() {
            this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0
        }
        afterSetDimensions() {
            (0, o.Q)(this.options.afterSetDimensions, [this])
        }
        _callHooks(t) {
            this.chart.notifyPlugins(t, this.getContext()), (0, o.Q)(this.options[t], [this])
        }
        beforeDataLimits() {
            this._callHooks("beforeDataLimits")
        }
        determineDataLimits() {}
        afterDataLimits() {
            this._callHooks("afterDataLimits")
        }
        beforeBuildTicks() {
            this._callHooks("beforeBuildTicks")
        }
        buildTicks() {
            return []
        }
        afterBuildTicks() {
            this._callHooks("afterBuildTicks")
        }
        beforeTickToLabelConversion() {
            (0, o.Q)(this.options.beforeTickToLabelConversion, [this])
        }
        generateTickLabels(t) {
            const e = this.options.ticks;
            let i, s, n;
            for (i = 0, s = t.length; i < s; i++) n = t[i], n.label = (0, o.Q)(e.callback, [n.value, i, t], this)
        }
        afterTickToLabelConversion() {
            (0, o.Q)(this.options.afterTickToLabelConversion, [this])
        }
        beforeCalculateLabelRotation() {
            (0, o.Q)(this.options.beforeCalculateLabelRotation, [this])
        }
        calculateLabelRotation() {
            const t = this.options,
                e = t.ticks,
                i = this.ticks.length,
                s = e.minRotation || 0,
                n = e.maxRotation;
            let a, r, h, l = s;
            if (!this._isVisible() || !e.display || s >= n || i <= 1 || !this.isHorizontal()) return void(this.labelRotation = s);
            const c = this._getLabelSizes(),
                d = c.widest.width,
                u = c.highest.height,
                f = (0, o.S)(this.chart.width - d, 0, this.maxWidth);
            a = t.offset ? this.maxWidth / i : f / (i - 1), d + 6 > a && (a = f / (i - (t.offset ? .5 : 1)), r = this.maxHeight - Et(t.grid) - e.padding - Lt(t.title, this.chart.options.font), h = Math.sqrt(d * d + u * u), l = (0, o.U)(Math.min(Math.asin((0, o.S)((c.highest.height + 6) / a, -1, 1)), Math.asin((0, o.S)(r / h, -1, 1)) - Math.asin((0, o.S)(u / h, -1, 1)))), l = Math.max(s, Math.min(n, l))), this.labelRotation = l
        }
        afterCalculateLabelRotation() {
            (0, o.Q)(this.options.afterCalculateLabelRotation, [this])
        }
        afterAutoSkip() {}
        beforeFit() {
            (0, o.Q)(this.options.beforeFit, [this])
        }
        fit() {
            const t = {
                    width: 0,
                    height: 0
                },
                {
                    chart: e,
                    options: {
                        ticks: i,
                        title: s,
                        grid: n
                    }
                } = this,
                a = this._isVisible(),
                r = this.isHorizontal();
            if (a) {
                const a = Lt(s, e.options.font);
                if (r ? (t.width = this.maxWidth, t.height = Et(n) + a) : (t.height = this.maxHeight, t.width = Et(n) + a), i.display && this.ticks.length) {
                    const {
                        first: e,
                        last: s,
                        widest: n,
                        highest: a
                    } = this._getLabelSizes(), h = 2 * i.padding, l = (0, o.t)(this.labelRotation), c = Math.cos(l), d = Math.sin(l);
                    if (r) {
                        const e = i.mirror ? 0 : d * n.width + c * a.height;
                        t.height = Math.min(this.maxHeight, t.height + e + h)
                    } else {
                        const e = i.mirror ? 0 : c * n.width + d * a.height;
                        t.width = Math.min(this.maxWidth, t.width + e + h)
                    }
                    this._calculatePadding(e, s, d, c)
                }
            }
            this._handleMargins(), r ? (this.width = this._length = e.width - this._margins.left - this._margins.right, this.height = t.height) : (this.width = t.width, this.height = this._length = e.height - this._margins.top - this._margins.bottom)
        }
        _calculatePadding(t, e, i, s) {
            const {
                ticks: {
                    align: n,
                    padding: o
                },
                position: a
            } = this.options, r = 0 !== this.labelRotation, h = "top" !== a && "x" === this.axis;
            if (this.isHorizontal()) {
                const a = this.getPixelForTick(0) - this.left,
                    l = this.right - this.getPixelForTick(this.ticks.length - 1);
                let c = 0,
                    d = 0;
                r ? h ? (c = s * t.width, d = i * e.height) : (c = i * t.height, d = s * e.width) : "start" === n ? d = e.width : "end" === n ? c = t.width : "inner" !== n && (c = t.width / 2, d = e.width / 2), this.paddingLeft = Math.max((c - a + o) * this.width / (this.width - a), 0), this.paddingRight = Math.max((d - l + o) * this.width / (this.width - l), 0)
            } else {
                let i = e.height / 2,
                    s = t.height / 2;
                "start" === n ? (i = 0, s = t.height) : "end" === n && (i = e.height, s = 0), this.paddingTop = i + o, this.paddingBottom = s + o
            }
        }
        _handleMargins() {
            this._margins && (this._margins.left = Math.max(this.paddingLeft, this._margins.left), this._margins.top = Math.max(this.paddingTop, this._margins.top), this._margins.right = Math.max(this.paddingRight, this._margins.right), this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom))
        }
        afterFit() {
            (0, o.Q)(this.options.afterFit, [this])
        }
        isHorizontal() {
            const {
                axis: t,
                position: e
            } = this.options;
            return "top" === e || "bottom" === e || "x" === t
        }
        isFullSize() {
            return this.options.fullSize
        }
        _convertTicksToLabels(t) {
            let e, i;
            for (this.beforeTickToLabelConversion(), this.generateTickLabels(t), e = 0, i = t.length; e < i; e++)(0, o.k)(t[e].label) && (t.splice(e, 1), i--, e--);
            this.afterTickToLabelConversion()
        }
        _getLabelSizes() {
            let t = this._labelSizes;
            if (!t) {
                const e = this.options.ticks.sampleSize;
                let i = this.ticks;
                e < i.length && (i = Tt(i, e)), this._labelSizes = t = this._computeLabelSizes(i, i.length)
            }
            return t
        }
        _computeLabelSizes(t, e) {
            const {
                ctx: i,
                _longestTextCache: s
            } = this, n = [], a = [];
            let r, h, l, c, d, u, f, g, p, m, x, b = 0,
                _ = 0;
            for (r = 0; r < e; ++r) {
                if (c = t[r].label, d = this._resolveTickFontOptions(r), i.font = u = d.string, f = s[u] = s[u] || {
                        data: {},
                        gc: []
                    }, g = d.lineHeight, p = m = 0, (0, o.k)(c) || (0, o.b)(c)) {
                    if ((0, o.b)(c))
                        for (h = 0, l = c.length; h < l; ++h) x = c[h], (0, o.k)(x) || (0, o.b)(x) || (p = (0, o.V)(i, f.data, f.gc, p, x), m += g)
                } else p = (0, o.V)(i, f.data, f.gc, p, c), m = g;
                n.push(p), a.push(m), b = Math.max(p, b), _ = Math.max(m, _)
            }! function(t, e) {
                (0, o.F)(t, (t => {
                    const i = t.gc,
                        s = i.length / 2;
                    let n;
                    if (s > e) {
                        for (n = 0; n < s; ++n) delete t.data[i[n]];
                        i.splice(0, s)
                    }
                }))
            }(s, e);
            const y = n.indexOf(b),
                v = a.indexOf(_),
                M = t => ({
                    width: n[t] || 0,
                    height: a[t] || 0
                });
            return {
                first: M(0),
                last: M(e - 1),
                widest: M(y),
                highest: M(v),
                widths: n,
                heights: a
            }
        }
        getLabelForValue(t) {
            return t
        }
        getPixelForValue(t, e) {
            return NaN
        }
        getValueForPixel(t) {}
        getPixelForTick(t) {
            const e = this.ticks;
            return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value)
        }
        getPixelForDecimal(t) {
            this._reversePixels && (t = 1 - t);
            const e = this._startPixel + t * this._length;
            return (0, o.W)(this._alignToPixels ? (0, o.X)(this.chart, e, 0) : e)
        }
        getDecimalForPixel(t) {
            const e = (t - this._startPixel) / this._length;
            return this._reversePixels ? 1 - e : e
        }
        getBasePixel() {
            return this.getPixelForValue(this.getBaseValue())
        }
        getBaseValue() {
            const {
                min: t,
                max: e
            } = this;
            return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0
        }
        getContext(t) {
            const e = this.ticks || [];
            if (t >= 0 && t < e.length) {
                const i = e[t];
                return i.$context || (i.$context = function(t, e, i) {
                    return (0, o.j)(t, {
                        tick: i,
                        index: e,
                        type: "tick"
                    })
                }(this.getContext(), t, i))
            }
            return this.$context || (this.$context = (i = this.chart.getContext(), s = this, (0, o.j)(i, {
                scale: s,
                type: "scale"
            })));
            var i, s
        }
        _tickSize() {
            const t = this.options.ticks,
                e = (0, o.t)(this.labelRotation),
                i = Math.abs(Math.cos(e)),
                s = Math.abs(Math.sin(e)),
                n = this._getLabelSizes(),
                a = t.autoSkipPadding || 0,
                r = n ? n.widest.width + a : 0,
                h = n ? n.highest.height + a : 0;
            return this.isHorizontal() ? h * i > r * s ? r / i : h / s : h * s < r * i ? h / i : r / s
        }
        _isVisible() {
            const t = this.options.display;
            return "auto" !== t ? !!t : this.getMatchingVisibleMetas().length > 0
        }
        _computeGridLineItems(t) {
            const e = this.axis,
                i = this.chart,
                s = this.options,
                {
                    grid: n,
                    position: a,
                    border: r
                } = s,
                h = n.offset,
                l = this.isHorizontal(),
                c = this.ticks.length + (h ? 1 : 0),
                d = Et(n),
                u = [],
                f = r.setContext(this.getContext()),
                g = f.display ? f.width : 0,
                p = g / 2,
                m = function(t) {
                    return (0, o.X)(i, t, g)
                };
            let x, b, _, y, v, M, w, k, S, P, O, C;
            if ("top" === a) x = m(this.bottom), M = this.bottom - d, k = x - p, P = m(t.top) + p, C = t.bottom;
            else if ("bottom" === a) x = m(this.top), P = t.top, C = m(t.bottom) - p, M = x + p, k = this.top + d;
            else if ("left" === a) x = m(this.right), v = this.right - d, w = x - p, S = m(t.left) + p, O = t.right;
            else if ("right" === a) x = m(this.left), S = t.left, O = m(t.right) - p, v = x + p, w = this.left + d;
            else if ("x" === e) {
                if ("center" === a) x = m((t.top + t.bottom) / 2 + .5);
                else if ((0, o.i)(a)) {
                    const t = Object.keys(a)[0],
                        e = a[t];
                    x = m(this.chart.scales[t].getPixelForValue(e))
                }
                P = t.top, C = t.bottom, M = x + p, k = M + d
            } else if ("y" === e) {
                if ("center" === a) x = m((t.left + t.right) / 2);
                else if ((0, o.i)(a)) {
                    const t = Object.keys(a)[0],
                        e = a[t];
                    x = m(this.chart.scales[t].getPixelForValue(e))
                }
                v = x - p, w = v - d, S = t.left, O = t.right
            }
            const D = (0, o.v)(s.ticks.maxTicksLimit, c),
                T = Math.max(1, Math.ceil(c / D));
            for (b = 0; b < c; b += T) {
                const t = this.getContext(b),
                    e = n.setContext(t),
                    s = r.setContext(t),
                    a = e.lineWidth,
                    c = e.color,
                    d = s.dash || [],
                    f = s.dashOffset,
                    g = e.tickWidth,
                    p = e.tickColor,
                    m = e.tickBorderDash || [],
                    x = e.tickBorderDashOffset;
                _ = At(this, b, h), void 0 !== _ && (y = (0, o.X)(i, _, a), l ? v = w = S = O = y : M = k = P = C = y, u.push({
                    tx1: v,
                    ty1: M,
                    tx2: w,
                    ty2: k,
                    x1: S,
                    y1: P,
                    x2: O,
                    y2: C,
                    width: a,
                    color: c,
                    borderDash: d,
                    borderDashOffset: f,
                    tickWidth: g,
                    tickColor: p,
                    tickBorderDash: m,
                    tickBorderDashOffset: x
                }))
            }
            return this._ticksLength = c, this._borderValue = x, u
        }
        _computeLabelItems(t) {
            const e = this.axis,
                i = this.options,
                {
                    position: s,
                    ticks: n
                } = i,
                a = this.isHorizontal(),
                r = this.ticks,
                {
                    align: h,
                    crossAlign: l,
                    padding: c,
                    mirror: d
                } = n,
                u = Et(i.grid),
                f = u + c,
                g = d ? -c : f,
                p = -(0, o.t)(this.labelRotation),
                m = [];
            let x, b, _, y, v, M, w, k, S, P, O, C, D = "middle";
            if ("top" === s) M = this.bottom - g, w = this._getXAxisLabelAlignment();
            else if ("bottom" === s) M = this.top + g, w = this._getXAxisLabelAlignment();
            else if ("left" === s) {
                const t = this._getYAxisLabelAlignment(u);
                w = t.textAlign, v = t.x
            } else if ("right" === s) {
                const t = this._getYAxisLabelAlignment(u);
                w = t.textAlign, v = t.x
            } else if ("x" === e) {
                if ("center" === s) M = (t.top + t.bottom) / 2 + f;
                else if ((0, o.i)(s)) {
                    const t = Object.keys(s)[0],
                        e = s[t];
                    M = this.chart.scales[t].getPixelForValue(e) + f
                }
                w = this._getXAxisLabelAlignment()
            } else if ("y" === e) {
                if ("center" === s) v = (t.left + t.right) / 2 - f;
                else if ((0, o.i)(s)) {
                    const t = Object.keys(s)[0],
                        e = s[t];
                    v = this.chart.scales[t].getPixelForValue(e)
                }
                w = this._getYAxisLabelAlignment(u).textAlign
            }
            "y" === e && ("start" === h ? D = "top" : "end" === h && (D = "bottom"));
            const T = this._getLabelSizes();
            for (x = 0, b = r.length; x < b; ++x) {
                _ = r[x], y = _.label;
                const t = n.setContext(this.getContext(x));
                k = this.getPixelForTick(x) + n.labelOffset, S = this._resolveTickFontOptions(x), P = S.lineHeight, O = (0, o.b)(y) ? y.length : 1;
                const e = O / 2,
                    i = t.color,
                    h = t.textStrokeColor,
                    c = t.textStrokeWidth;
                let u, f = w;
                if (a ? (v = k, "inner" === w && (f = x === b - 1 ? this.options.reverse ? "left" : "right" : 0 === x ? this.options.reverse ? "right" : "left" : "center"), C = "top" === s ? "near" === l || 0 !== p ? -O * P + P / 2 : "center" === l ? -T.highest.height / 2 - e * P + P : -T.highest.height + P / 2 : "near" === l || 0 !== p ? P / 2 : "center" === l ? T.highest.height / 2 - e * P : T.highest.height - O * P, d && (C *= -1), 0 === p || t.showLabelBackdrop || (v += P / 2 * Math.sin(p))) : (M = k, C = (1 - O) * P / 2), t.showLabelBackdrop) {
                    const e = (0, o.E)(t.backdropPadding),
                        i = T.heights[x],
                        s = T.widths[x];
                    let n = C - e.top,
                        a = 0 - e.left;
                    switch (D) {
                        case "middle":
                            n -= i / 2;
                            break;
                        case "bottom":
                            n -= i
                    }
                    switch (w) {
                        case "center":
                            a -= s / 2;
                            break;
                        case "right":
                            a -= s
                    }
                    u = {
                        left: a,
                        top: n,
                        width: s + e.width,
                        height: i + e.height,
                        color: t.backdropColor
                    }
                }
                m.push({
                    label: y,
                    font: S,
                    textOffset: C,
                    options: {
                        rotation: p,
                        color: i,
                        strokeColor: h,
                        strokeWidth: c,
                        textAlign: f,
                        textBaseline: D,
                        translation: [v, M],
                        backdrop: u
                    }
                })
            }
            return m
        }
        _getXAxisLabelAlignment() {
            const {
                position: t,
                ticks: e
            } = this.options;
            if (-(0, o.t)(this.labelRotation)) return "top" === t ? "left" : "right";
            let i = "center";
            return "start" === e.align ? i = "left" : "end" === e.align ? i = "right" : "inner" === e.align && (i = "inner"), i
        }
        _getYAxisLabelAlignment(t) {
            const {
                position: e,
                ticks: {
                    crossAlign: i,
                    mirror: s,
                    padding: n
                }
            } = this.options, o = t + n, a = this._getLabelSizes().widest.width;
            let r, h;
            return "left" === e ? s ? (h = this.right + n, "near" === i ? r = "left" : "center" === i ? (r = "center", h += a / 2) : (r = "right", h += a)) : (h = this.right - o, "near" === i ? r = "right" : "center" === i ? (r = "center", h -= a / 2) : (r = "left", h = this.left)) : "right" === e ? s ? (h = this.left + n, "near" === i ? r = "right" : "center" === i ? (r = "center", h -= a / 2) : (r = "left", h -= a)) : (h = this.left + o, "near" === i ? r = "left" : "center" === i ? (r = "center", h += a / 2) : (r = "right", h = this.right)) : r = "right", {
                textAlign: r,
                x: h
            }
        }
        _computeLabelArea() {
            if (this.options.ticks.mirror) return;
            const t = this.chart,
                e = this.options.position;
            return "left" === e || "right" === e ? {
                top: 0,
                left: this.left,
                bottom: t.height,
                right: this.right
            } : "top" === e || "bottom" === e ? {
                top: this.top,
                left: 0,
                bottom: this.bottom,
                right: t.width
            } : void 0
        }
        drawBackground() {
            const {
                ctx: t,
                options: {
                    backgroundColor: e
                },
                left: i,
                top: s,
                width: n,
                height: o
            } = this;
            e && (t.save(), t.fillStyle = e, t.fillRect(i, s, n, o), t.restore())
        }
        getLineWidthForValue(t) {
            const e = this.options.grid;
            if (!this._isVisible() || !e.display) return 0;
            const i = this.ticks.findIndex((e => e.value === t));
            if (i >= 0) {
                return e.setContext(this.getContext(i)).lineWidth
            }
            return 0
        }
        drawGrid(t) {
            const e = this.options.grid,
                i = this.ctx,
                s = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(t));
            let n, o;
            const a = (t, e, s) => {
                s.width && s.color && (i.save(), i.lineWidth = s.width, i.strokeStyle = s.color, i.setLineDash(s.borderDash || []), i.lineDashOffset = s.borderDashOffset, i.beginPath(), i.moveTo(t.x, t.y), i.lineTo(e.x, e.y), i.stroke(), i.restore())
            };
            if (e.display)
                for (n = 0, o = s.length; n < o; ++n) {
                    const t = s[n];
                    e.drawOnChartArea && a({
                        x: t.x1,
                        y: t.y1
                    }, {
                        x: t.x2,
                        y: t.y2
                    }, t), e.drawTicks && a({
                        x: t.tx1,
                        y: t.ty1
                    }, {
                        x: t.tx2,
                        y: t.ty2
                    }, {
                        color: t.tickColor,
                        width: t.tickWidth,
                        borderDash: t.tickBorderDash,
                        borderDashOffset: t.tickBorderDashOffset
                    })
                }
        }
        drawBorder() {
            const {
                chart: t,
                ctx: e,
                options: {
                    border: i,
                    grid: s
                }
            } = this, n = i.setContext(this.getContext()), a = i.display ? n.width : 0;
            if (!a) return;
            const r = s.setContext(this.getContext(0)).lineWidth,
                h = this._borderValue;
            let l, c, d, u;
            this.isHorizontal() ? (l = (0, o.X)(t, this.left, a) - a / 2, c = (0, o.X)(t, this.right, r) + r / 2, d = u = h) : (d = (0, o.X)(t, this.top, a) - a / 2, u = (0, o.X)(t, this.bottom, r) + r / 2, l = c = h), e.save(), e.lineWidth = n.width, e.strokeStyle = n.color, e.beginPath(), e.moveTo(l, d), e.lineTo(c, u), e.stroke(), e.restore()
        }
        drawLabels(t) {
            if (!this.options.ticks.display) return;
            const e = this.ctx,
                i = this._computeLabelArea();
            i && (0, o.Y)(e, i);
            const s = this.getLabelItems(t);
            for (const t of s) {
                const i = t.options,
                    s = t.font,
                    n = t.label,
                    a = t.textOffset;
                (0, o.Z)(e, n, 0, a, s, i)
            }
            i && (0, o.$)(e)
        }
        drawTitle() {
            const {
                ctx: t,
                options: {
                    position: e,
                    title: i,
                    reverse: s
                }
            } = this;
            if (!i.display) return;
            const n = (0, o.a0)(i.font),
                a = (0, o.E)(i.padding),
                r = i.align;
            let h = n.lineHeight / 2;
            "bottom" === e || "center" === e || (0, o.i)(e) ? (h += a.bottom, (0, o.b)(i.text) && (h += n.lineHeight * (i.text.length - 1))) : h += a.top;
            const {
                titleX: l,
                titleY: c,
                maxWidth: d,
                rotation: u
            } = function(t, e, i, s) {
                const {
                    top: n,
                    left: a,
                    bottom: r,
                    right: h,
                    chart: l
                } = t, {
                    chartArea: c,
                    scales: d
                } = l;
                let u, f, g, p = 0;
                const m = r - n,
                    x = h - a;
                if (t.isHorizontal()) {
                    if (f = (0, o.a2)(s, a, h), (0, o.i)(i)) {
                        const t = Object.keys(i)[0],
                            s = i[t];
                        g = d[t].getPixelForValue(s) + m - e
                    } else g = "center" === i ? (c.bottom + c.top) / 2 + m - e : Dt(t, i, e);
                    u = h - a
                } else {
                    if ((0, o.i)(i)) {
                        const t = Object.keys(i)[0],
                            s = i[t];
                        f = d[t].getPixelForValue(s) - x + e
                    } else f = "center" === i ? (c.left + c.right) / 2 - x + e : Dt(t, i, e);
                    g = (0, o.a2)(s, r, n), p = "left" === i ? -o.H : o.H
                }
                return {
                    titleX: f,
                    titleY: g,
                    maxWidth: u,
                    rotation: p
                }
            }(this, h, e, r);
            (0, o.Z)(t, i.text, 0, 0, n, {
                color: i.color,
                maxWidth: d,
                rotation: u,
                textAlign: Rt(r, e, s),
                textBaseline: "middle",
                translation: [l, c]
            })
        }
        draw(t) {
            this._isVisible() && (this.drawBackground(), this.drawGrid(t), this.drawBorder(), this.drawTitle(), this.drawLabels(t))
        }
        _layers() {
            const t = this.options,
                e = t.ticks && t.ticks.z || 0,
                i = (0, o.v)(t.grid && t.grid.z, -1),
                s = (0, o.v)(t.border && t.border.z, 0);
            return this._isVisible() && this.draw === Ft.prototype.draw ? [{
                z: i,
                draw: t => {
                    this.drawBackground(), this.drawGrid(t), this.drawTitle()
                }
            }, {
                z: s,
                draw: () => {
                    this.drawBorder()
                }
            }, {
                z: e,
                draw: t => {
                    this.drawLabels(t)
                }
            }] : [{
                z: e,
                draw: t => {
                    this.draw(t)
                }
            }]
        }
        getMatchingVisibleMetas(t) {
            const e = this.chart.getSortedVisibleDatasetMetas(),
                i = this.axis + "AxisID",
                s = [];
            let n, o;
            for (n = 0, o = e.length; n < o; ++n) {
                const o = e[n];
                o[i] !== this.id || t && o.type !== t || s.push(o)
            }
            return s
        }
        _resolveTickFontOptions(t) {
            const e = this.options.ticks.setContext(this.getContext(t));
            return (0, o.a0)(e.font)
        }
        _maxDigits() {
            const t = this._resolveTickFontOptions(0).lineHeight;
            return (this.isHorizontal() ? this.width : this.height) / t
        }
        constructor(t) {
            super(), this.id = t.id, this.type = t.type, this.options = void 0, this.ctx = t.ctx, this.chart = t.chart, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this._margins = {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }, this.maxWidth = void 0, this.maxHeight = void 0, this.paddingTop = void 0, this.paddingBottom = void 0, this.paddingLeft = void 0, this.paddingRight = void 0, this.axis = void 0, this.labelRotation = void 0, this.min = void 0, this.max = void 0, this._range = void 0, this.ticks = [], this._gridLineItems = null, this._labelItems = null, this._labelSizes = null, this._length = 0, this._maxLength = 0, this._longestTextCache = {}, this._startPixel = void 0, this._endPixel = void 0, this._reversePixels = !1, this._userMax = void 0, this._userMin = void 0, this._suggestedMax = void 0, this._suggestedMin = void 0, this._ticksLength = 0, this._borderValue = 0, this._cache = {}, this._dataLimitsCached = !1, this.$context = void 0
        }
    }
    class It {
        isForType(t) {
            return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype)
        }
        register(t) {
            const e = Object.getPrototypeOf(t);
            let i;
            (function(t) {
                return "id" in t && "defaults" in t
            })(e) && (i = this.register(e));
            const s = this.items,
                n = t.id,
                a = this.scope + "." + n;
            if (!n) throw new Error("class does not have id: " + t);
            return n in s || (s[n] = t, function(t, e, i) {
                const s = (0, o.a4)(Object.create(null), [i ? o.d.get(i) : {}, o.d.get(e), t.defaults]);
                o.d.set(e, s), t.defaultRoutes && function(t, e) {
                    Object.keys(e).forEach((i => {
                        const s = i.split("."),
                            n = s.pop(),
                            a = [t].concat(s).join("."),
                            r = e[i].split("."),
                            h = r.pop(),
                            l = r.join(".");
                        o.d.route(a, n, l, h)
                    }))
                }(e, t.defaultRoutes);
                t.descriptors && o.d.describe(e, t.descriptors)
            }(t, a, i), this.override && o.d.override(t.id, t.overrides)), a
        }
        get(t) {
            return this.items[t]
        }
        unregister(t) {
            const e = this.items,
                i = t.id,
                s = this.scope;
            i in e && delete e[i], s && i in o.d[s] && (delete o.d[s][i], this.override && delete o.a3[i])
        }
        constructor(t, e, i) {
            this.type = t, this.scope = e, this.override = i, this.items = Object.create(null)
        }
    }
    class zt {
        add(...t) {
            this._each("register", t)
        }
        remove(...t) {
            this._each("unregister", t)
        }
        addControllers(...t) {
            this._each("register", t, this.controllers)
        }
        addElements(...t) {
            this._each("register", t, this.elements)
        }
        addPlugins(...t) {
            this._each("register", t, this.plugins)
        }
        addScales(...t) {
            this._each("register", t, this.scales)
        }
        getController(t) {
            return this._get(t, this.controllers, "controller")
        }
        getElement(t) {
            return this._get(t, this.elements, "element")
        }
        getPlugin(t) {
            return this._get(t, this.plugins, "plugin")
        }
        getScale(t) {
            return this._get(t, this.scales, "scale")
        }
        removeControllers(...t) {
            this._each("unregister", t, this.controllers)
        }
        removeElements(...t) {
            this._each("unregister", t, this.elements)
        }
        removePlugins(...t) {
            this._each("unregister", t, this.plugins)
        }
        removeScales(...t) {
            this._each("unregister", t, this.scales)
        }
        _each(t, e, i) {
            [...e].forEach((e => {
                const s = i || this._getRegistryForType(e);
                i || s.isForType(e) || s === this.plugins && e.id ? this._exec(t, s, e) : (0, o.F)(e, (e => {
                    const s = i || this._getRegistryForType(e);
                    this._exec(t, s, e)
                }))
            }))
        }
        _exec(t, e, i) {
            const s = (0, o.a5)(t);
            (0, o.Q)(i["before" + s], [], i), e[t](i), (0, o.Q)(i["after" + s], [], i)
        }
        _getRegistryForType(t) {
            for (let e = 0; e < this._typedRegistries.length; e++) {
                const i = this._typedRegistries[e];
                if (i.isForType(t)) return i
            }
            return this.plugins
        }
        _get(t, e, i) {
            const s = e.get(t);
            if (void 0 === s) throw new Error('"' + t + '" is not a registered ' + i + ".");
            return s
        }
        constructor() {
            this.controllers = new It(w, "datasets", !0), this.elements = new It(Pt, "elements"), this.plugins = new It(Object, "plugins"), this.scales = new It(Ft, "scales"), this._typedRegistries = [this.controllers, this.scales, this.elements]
        }
    }
    var Vt = new zt;
    class Bt {
        notify(t, e, i, s) {
            "beforeInit" === e && (this._init = this._createDescriptors(t, !0), this._notify(this._init, t, "install"));
            const n = s ? this._descriptors(t).filter(s) : this._descriptors(t),
                o = this._notify(n, t, e, i);
            return "afterDestroy" === e && (this._notify(n, t, "stop"), this._notify(this._init, t, "uninstall")), o
        }
        _notify(t, e, i, s) {
            s = s || {};
            for (const n of t) {
                const t = n.plugin,
                    a = t[i],
                    r = [e, s, n.options];
                if (!1 === (0, o.Q)(a, r, t) && s.cancelable) return !1
            }
            return !0
        }
        invalidate() {
            (0, o.k)(this._cache) || (this._oldCache = this._cache, this._cache = void 0)
        }
        _descriptors(t) {
            if (this._cache) return this._cache;
            const e = this._cache = this._createDescriptors(t);
            return this._notifyStateChanges(t), e
        }
        _createDescriptors(t, e) {
            const i = t && t.config,
                s = (0, o.v)(i.options && i.options.plugins, {}),
                n = function(t) {
                    const e = {},
                        i = [],
                        s = Object.keys(Vt.plugins.items);
                    for (let t = 0; t < s.length; t++) i.push(Vt.getPlugin(s[t]));
                    const n = t.plugins || [];
                    for (let t = 0; t < n.length; t++) {
                        const s = n[t]; - 1 === i.indexOf(s) && (i.push(s), e[s.id] = !0)
                    }
                    return {
                        plugins: i,
                        localIds: e
                    }
                }(i);
            return !1 !== s || e ? function(t, {
                plugins: e,
                localIds: i
            }, s, n) {
                const o = [],
                    a = t.getContext();
                for (const r of e) {
                    const e = r.id,
                        h = Nt(s[e], n);
                    null !== h && o.push({
                        plugin: r,
                        options: jt(t.config, {
                            plugin: r,
                            local: i[e]
                        }, h, a)
                    })
                }
                return o
            }(t, n, s, e) : []
        }
        _notifyStateChanges(t) {
            const e = this._oldCache || [],
                i = this._cache,
                s = (t, e) => t.filter((t => !e.some((e => t.plugin.id === e.plugin.id))));
            this._notify(s(e, i), t, "stop"), this._notify(s(i, e), t, "start")
        }
        constructor() {
            this._init = []
        }
    }

    function Nt(t, e) {
        return e || !1 !== t ? !0 === t ? {} : t : null
    }

    function jt(t, {
        plugin: e,
        local: i
    }, s, n) {
        const o = t.pluginScopeKeys(e),
            a = t.getOptionScopes(s, o);
        return i && e.defaults && a.push(e.defaults), t.createResolver(a, n, [""], {
            scriptable: !1,
            indexable: !1,
            allKeys: !0
        })
    }

    function Wt(t, e) {
        const i = o.d.datasets[t] || {};
        return ((e.datasets || {})[t] || {}).indexAxis || e.indexAxis || i.indexAxis || "x"
    }

    function Ht(t, e) {
        if ("x" === t || "y" === t || "r" === t) return t;
        var i;
        if (t = e.axis || ("top" === (i = e.position) || "bottom" === i ? "x" : "left" === i || "right" === i ? "y" : void 0) || t.length > 1 && Ht(t[0].toLowerCase(), e)) return t;
        throw new Error(`Cannot determine type of '${name}' axis. Please provide 'axis' or 'position' option.`)
    }

    function $t(t) {
        const e = t.options || (t.options = {});
        e.plugins = (0, o.v)(e.plugins, {}), e.scales = function(t, e) {
            const i = o.a3[t.type] || {
                    scales: {}
                },
                s = e.scales || {},
                n = Wt(t.type, e),
                a = Object.create(null);
            return Object.keys(s).forEach((t => {
                const e = s[t];
                if (!(0, o.i)(e)) return console.error(`Invalid scale configuration for scale: ${t}`);
                if (e._proxy) return console.warn(`Ignoring resolver passed as options for scale: ${t}`);
                const r = Ht(t, e),
                    h = function(t, e) {
                        return t === e ? "_index_" : "_value_"
                    }(r, n),
                    l = i.scales || {};
                a[t] = (0, o.ab)(Object.create(null), [{
                    axis: r
                }, e, l[r], l[h]])
            })), t.data.datasets.forEach((i => {
                const n = i.type || t.type,
                    r = i.indexAxis || Wt(n, e),
                    h = (o.a3[n] || {}).scales || {};
                Object.keys(h).forEach((t => {
                    const e = function(t, e) {
                            let i = t;
                            return "_index_" === t ? i = e : "_value_" === t && (i = "x" === e ? "y" : "x"), i
                        }(t, r),
                        n = i[e + "AxisID"] || e;
                    a[n] = a[n] || Object.create(null), (0, o.ab)(a[n], [{
                        axis: e
                    }, s[n], h[t]])
                }))
            })), Object.keys(a).forEach((t => {
                const e = a[t];
                (0, o.ab)(e, [o.d.scales[e.type], o.d.scale])
            })), a
        }(t, e)
    }

    function Yt(t) {
        return (t = t || {}).datasets = t.datasets || [], t.labels = t.labels || [], t
    }
    const Ut = new Map,
        Xt = new Set;

    function qt(t, e) {
        let i = Ut.get(t);
        return i || (i = e(), Ut.set(t, i), Xt.add(i)), i
    }
    const Qt = (t, e, i) => {
        const s = (0, o.f)(e, i);
        void 0 !== s && t.add(s)
    };
    class Kt {
        get platform() {
            return this._config.platform
        }
        get type() {
            return this._config.type
        }
        set type(t) {
            this._config.type = t
        }
        get data() {
            return this._config.data
        }
        set data(t) {
            this._config.data = Yt(t)
        }
        get options() {
            return this._config.options
        }
        set options(t) {
            this._config.options = t
        }
        get plugins() {
            return this._config.plugins
        }
        update() {
            const t = this._config;
            this.clearCache(), $t(t)
        }
        clearCache() {
            this._scopeCache.clear(), this._resolverCache.clear()
        }
        datasetScopeKeys(t) {
            return qt(t, (() => [
                [`datasets.${t}`, ""]
            ]))
        }
        datasetAnimationScopeKeys(t, e) {
            return qt(`${t}.transition.${e}`, (() => [
                [`datasets.${t}.transitions.${e}`, `transitions.${e}`],
                [`datasets.${t}`, ""]
            ]))
        }
        datasetElementScopeKeys(t, e) {
            return qt(`${t}-${e}`, (() => [
                [`datasets.${t}.elements.${e}`, `datasets.${t}`, `elements.${e}`, ""]
            ]))
        }
        pluginScopeKeys(t) {
            const e = t.id;
            return qt(`${this.type}-plugin-${e}`, (() => [
                [`plugins.${e}`, ...t.additionalOptionScopes || []]
            ]))
        }
        _cachedScopes(t, e) {
            const i = this._scopeCache;
            let s = i.get(t);
            return s && !e || (s = new Map, i.set(t, s)), s
        }
        getOptionScopes(t, e, i) {
            const {
                options: s,
                type: n
            } = this, a = this._cachedScopes(t, i), r = a.get(e);
            if (r) return r;
            const h = new Set;
            e.forEach((e => {
                t && (h.add(t), e.forEach((e => Qt(h, t, e)))), e.forEach((t => Qt(h, s, t))), e.forEach((t => Qt(h, o.a3[n] || {}, t))), e.forEach((t => Qt(h, o.d, t))), e.forEach((t => Qt(h, o.a6, t)))
            }));
            const l = Array.from(h);
            return 0 === l.length && l.push(Object.create(null)), Xt.has(e) && a.set(e, l), l
        }
        chartOptionScopes() {
            const {
                options: t,
                type: e
            } = this;
            return [t, o.a3[e] || {}, o.d.datasets[e] || {}, {
                type: e
            }, o.d, o.a6]
        }
        resolveNamedOptions(t, e, i, s = [""]) {
            const n = {
                    $shared: !0
                },
                {
                    resolver: a,
                    subPrefixes: r
                } = Gt(this._resolverCache, t, s);
            let h = a;
            if (function(t, e) {
                    const {
                        isScriptable: i,
                        isIndexable: s
                    } = (0, o.aa)(t);
                    for (const n of e) {
                        const e = i(n),
                            a = s(n),
                            r = (a || e) && t[n];
                        if (e && ((0, o.a7)(r) || Zt(r)) || a && (0, o.b)(r)) return !0
                    }
                    return !1
                }(a, e)) {
                n.$shared = !1, i = (0, o.a7)(i) ? i() : i;
                const e = this.createResolver(t, i, r);
                h = (0, o.a8)(a, i, e)
            }
            for (const t of e) n[t] = h[t];
            return n
        }
        createResolver(t, e, i = [""], s) {
            const {
                resolver: n
            } = Gt(this._resolverCache, t, i);
            return (0, o.i)(e) ? (0, o.a8)(n, e, void 0, s) : n
        }
        constructor(t) {
            this._config = function(t) {
                return (t = t || {}).data = Yt(t.data), $t(t), t
            }(t), this._scopeCache = new Map, this._resolverCache = new Map
        }
    }

    function Gt(t, e, i) {
        let s = t.get(e);
        s || (s = new Map, t.set(e, s));
        const n = i.join();
        let a = s.get(n);
        if (!a) {
            a = {
                resolver: (0, o.a9)(e, i),
                subPrefixes: i.filter((t => !t.toLowerCase().includes("hover")))
            }, s.set(n, a)
        }
        return a
    }
    const Zt = t => (0, o.i)(t) && Object.getOwnPropertyNames(t).reduce(((e, i) => e || (0, o.a7)(t[i])), !1);
    const Jt = ["top", "bottom", "left", "right", "chartArea"];

    function te(t, e) {
        return "top" === t || "bottom" === t || -1 === Jt.indexOf(t) && "x" === e
    }

    function ee(t, e) {
        return function(i, s) {
            return i[t] === s[t] ? i[e] - s[e] : i[t] - s[t]
        }
    }

    function ie(t) {
        const e = t.chart,
            i = e.options.animation;
        e.notifyPlugins("afterRender"), (0, o.Q)(i && i.onComplete, [t], e)
    }

    function se(t) {
        const e = t.chart,
            i = e.options.animation;
        (0, o.Q)(i && i.onProgress, [t], e)
    }

    function ne(t) {
        return (0, o.M)() && "string" == typeof t ? t = document.getElementById(t) : t && t.length && (t = t[0]), t && t.canvas && (t = t.canvas), t
    }
    const oe = {},
        ae = t => {
            const e = ne(t);
            return Object.values(oe).filter((t => t.canvas === e)).pop()
        };

    function re(t, e, i) {
        const s = Object.keys(t);
        for (const n of s) {
            const s = +n;
            if (s >= e) {
                const o = t[n];
                delete t[n], (i > 0 || s > e) && (t[s + i] = o)
            }
        }
    }
    class he {
        static register(...t) {
            Vt.add(...t), le()
        }
        static unregister(...t) {
            Vt.remove(...t), le()
        }
        get aspectRatio() {
            const {
                options: {
                    aspectRatio: t,
                    maintainAspectRatio: e
                },
                width: i,
                height: s,
                _aspectRatio: n
            } = this;
            return (0, o.k)(t) ? e && n ? n : s ? i / s : null : t
        }
        get data() {
            return this.config.data
        }
        set data(t) {
            this.config.data = t
        }
        get options() {
            return this._options
        }
        set options(t) {
            this.config.options = t
        }
        get registry() {
            return Vt
        }
        _initialize() {
            return this.notifyPlugins("beforeInit"), this.options.responsive ? this.resize() : (0, o.ae)(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins("afterInit"), this
        }
        clear() {
            return (0, o.af)(this.canvas, this.ctx), this
        }
        stop() {
            return r.stop(this), this
        }
        resize(t, e) {
            r.running(this) ? this._resizeBeforeDraw = {
                width: t,
                height: e
            } : this._resize(t, e)
        }
        _resize(t, e) {
            const i = this.options,
                s = this.canvas,
                n = i.maintainAspectRatio && this.aspectRatio,
                a = this.platform.getMaximumSize(s, t, e, n),
                r = i.devicePixelRatio || this.platform.getDevicePixelRatio(),
                h = this.width ? "resize" : "attach";
            this.width = a.width, this.height = a.height, this._aspectRatio = this.aspectRatio, (0, o.ae)(this, r, !0) && (this.notifyPlugins("resize", {
                size: a
            }), (0, o.Q)(i.onResize, [this, a], this), this.attached && this._doResize(h) && this.render())
        }
        ensureScalesHaveIDs() {
            const t = this.options.scales || {};
            (0, o.F)(t, ((t, e) => {
                t.id = e
            }))
        }
        buildOrUpdateScales() {
            const t = this.options,
                e = t.scales,
                i = this.scales,
                s = Object.keys(i).reduce(((t, e) => (t[e] = !1, t)), {});
            let n = [];
            e && (n = n.concat(Object.keys(e).map((t => {
                const i = e[t],
                    s = Ht(t, i),
                    n = "r" === s,
                    o = "x" === s;
                return {
                    options: i,
                    dposition: n ? "chartArea" : o ? "bottom" : "left",
                    dtype: n ? "radialLinear" : o ? "category" : "linear"
                }
            })))), (0, o.F)(n, (e => {
                const n = e.options,
                    a = n.id,
                    r = Ht(a, n),
                    h = (0, o.v)(n.type, e.dtype);
                void 0 !== n.position && te(n.position, r) === te(e.dposition) || (n.position = e.dposition), s[a] = !0;
                let l = null;
                if (a in i && i[a].type === h) l = i[a];
                else {
                    l = new(Vt.getScale(h))({
                        id: a,
                        type: h,
                        ctx: this.ctx,
                        chart: this
                    }), i[l.id] = l
                }
                l.init(n, t)
            })), (0, o.F)(s, ((t, e) => {
                t || delete i[e]
            })), (0, o.F)(i, (t => {
                ht.configure(this, t, t.options), ht.addBox(this, t)
            }))
        }
        _updateMetasets() {
            const t = this._metasets,
                e = this.data.datasets.length,
                i = t.length;
            if (t.sort(((t, e) => t.index - e.index)), i > e) {
                for (let t = e; t < i; ++t) this._destroyDatasetMeta(t);
                t.splice(e, i - e)
            }
            this._sortedMetasets = t.slice(0).sort(ee("order", "index"))
        }
        _removeUnreferencedMetasets() {
            const {
                _metasets: t,
                data: {
                    datasets: e
                }
            } = this;
            t.length > e.length && delete this._stacks, t.forEach(((t, i) => {
                0 === e.filter((e => e === t._dataset)).length && this._destroyDatasetMeta(i)
            }))
        }
        buildOrUpdateControllers() {
            const t = [],
                e = this.data.datasets;
            let i, s;
            for (this._removeUnreferencedMetasets(), i = 0, s = e.length; i < s; i++) {
                const s = e[i];
                let n = this.getDatasetMeta(i);
                const a = s.type || this.config.type;
                if (n.type && n.type !== a && (this._destroyDatasetMeta(i), n = this.getDatasetMeta(i)), n.type = a, n.indexAxis = s.indexAxis || Wt(a, this.options), n.order = s.order || 0, n.index = i, n.label = "" + s.label, n.visible = this.isDatasetVisible(i), n.controller) n.controller.updateIndex(i), n.controller.linkScales();
                else {
                    const e = Vt.getController(a),
                        {
                            datasetElementType: s,
                            dataElementType: r
                        } = o.d.datasets[a];
                    Object.assign(e, {
                        dataElementType: Vt.getElement(r),
                        datasetElementType: s && Vt.getElement(s)
                    }), n.controller = new e(this, i), t.push(n.controller)
                }
            }
            return this._updateMetasets(), t
        }
        _resetElements() {
            (0, o.F)(this.data.datasets, ((t, e) => {
                this.getDatasetMeta(e).controller.reset()
            }), this)
        }
        reset() {
            this._resetElements(), this.notifyPlugins("reset")
        }
        update(t) {
            const e = this.config;
            e.update();
            const i = this._options = e.createResolver(e.chartOptionScopes(), this.getContext()),
                s = this._animationsDisabled = !i.animation;
            if (this._updateScales(), this._checkEventBindings(), this._updateHiddenIndices(), this._plugins.invalidate(), !1 === this.notifyPlugins("beforeUpdate", {
                    mode: t,
                    cancelable: !0
                })) return;
            const n = this.buildOrUpdateControllers();
            this.notifyPlugins("beforeElementsUpdate");
            let a = 0;
            for (let t = 0, e = this.data.datasets.length; t < e; t++) {
                const {
                    controller: e
                } = this.getDatasetMeta(t), i = !s && -1 === n.indexOf(e);
                e.buildOrUpdateElements(i), a = Math.max(+e.getMaxOverflow(), a)
            }
            a = this._minPadding = i.layout.autoPadding ? a : 0, this._updateLayout(a), s || (0, o.F)(n, (t => {
                t.reset()
            })), this._updateDatasets(t), this.notifyPlugins("afterUpdate", {
                mode: t
            }), this._layers.sort(ee("z", "_idx"));
            const {
                _active: r,
                _lastEvent: h
            } = this;
            h ? this._eventHandler(h, !0) : r.length && this._updateHoverStyles(r, r, !0), this.render()
        }
        _updateScales() {
            (0, o.F)(this.scales, (t => {
                ht.removeBox(this, t)
            })), this.ensureScalesHaveIDs(), this.buildOrUpdateScales()
        }
        _checkEventBindings() {
            const t = this.options,
                e = new Set(Object.keys(this._listeners)),
                i = new Set(t.events);
            (0, o.ag)(e, i) && !!this._responsiveListeners === t.responsive || (this.unbindEvents(), this.bindEvents())
        }
        _updateHiddenIndices() {
            const {
                _hiddenIndices: t
            } = this, e = this._getUniformDataChanges() || [];
            for (const {
                    method: i,
                    start: s,
                    count: n
                }
                of e) {
                re(t, s, "_removeElements" === i ? -n : n)
            }
        }
        _getUniformDataChanges() {
            const t = this._dataChanges;
            if (!t || !t.length) return;
            this._dataChanges = [];
            const e = this.data.datasets.length,
                i = e => new Set(t.filter((t => t[0] === e)).map(((t, e) => e + "," + t.splice(1).join(",")))),
                s = i(0);
            for (let t = 1; t < e; t++)
                if (!(0, o.ag)(s, i(t))) return;
            return Array.from(s).map((t => t.split(","))).map((t => ({
                method: t[1],
                start: +t[2],
                count: +t[3]
            })))
        }
        _updateLayout(t) {
            if (!1 === this.notifyPlugins("beforeLayout", {
                    cancelable: !0
                })) return;
            ht.update(this, this.width, this.height, t);
            const e = this.chartArea,
                i = e.width <= 0 || e.height <= 0;
            this._layers = [], (0, o.F)(this.boxes, (t => {
                i && "chartArea" === t.position || (t.configure && t.configure(), this._layers.push(...t._layers()))
            }), this), this._layers.forEach(((t, e) => {
                t._idx = e
            })), this.notifyPlugins("afterLayout")
        }
        _updateDatasets(t) {
            if (!1 !== this.notifyPlugins("beforeDatasetsUpdate", {
                    mode: t,
                    cancelable: !0
                })) {
                for (let t = 0, e = this.data.datasets.length; t < e; ++t) this.getDatasetMeta(t).controller.configure();
                for (let e = 0, i = this.data.datasets.length; e < i; ++e) this._updateDataset(e, (0, o.a7)(t) ? t({
                    datasetIndex: e
                }) : t);
                this.notifyPlugins("afterDatasetsUpdate", {
                    mode: t
                })
            }
        }
        _updateDataset(t, e) {
            const i = this.getDatasetMeta(t),
                s = {
                    meta: i,
                    index: t,
                    mode: e,
                    cancelable: !0
                };
            !1 !== this.notifyPlugins("beforeDatasetUpdate", s) && (i.controller._update(e), s.cancelable = !1, this.notifyPlugins("afterDatasetUpdate", s))
        }
        render() {
            !1 !== this.notifyPlugins("beforeRender", {
                cancelable: !0
            }) && (r.has(this) ? this.attached && !r.running(this) && r.start(this) : (this.draw(), ie({
                chart: this
            })))
        }
        draw() {
            let t;
            if (this._resizeBeforeDraw) {
                const {
                    width: t,
                    height: e
                } = this._resizeBeforeDraw;
                this._resize(t, e), this._resizeBeforeDraw = null
            }
            if (this.clear(), this.width <= 0 || this.height <= 0) return;
            if (!1 === this.notifyPlugins("beforeDraw", {
                    cancelable: !0
                })) return;
            const e = this._layers;
            for (t = 0; t < e.length && e[t].z <= 0; ++t) e[t].draw(this.chartArea);
            for (this._drawDatasets(); t < e.length; ++t) e[t].draw(this.chartArea);
            this.notifyPlugins("afterDraw")
        }
        _getSortedDatasetMetas(t) {
            const e = this._sortedMetasets,
                i = [];
            let s, n;
            for (s = 0, n = e.length; s < n; ++s) {
                const n = e[s];
                t && !n.visible || i.push(n)
            }
            return i
        }
        getSortedVisibleDatasetMetas() {
            return this._getSortedDatasetMetas(!0)
        }
        _drawDatasets() {
            if (!1 === this.notifyPlugins("beforeDatasetsDraw", {
                    cancelable: !0
                })) return;
            const t = this.getSortedVisibleDatasetMetas();
            for (let e = t.length - 1; e >= 0; --e) this._drawDataset(t[e]);
            this.notifyPlugins("afterDatasetsDraw")
        }
        _drawDataset(t) {
            const e = this.ctx,
                i = t._clip,
                s = !i.disabled,
                n = function(t) {
                    const {
                        xScale: e,
                        yScale: i
                    } = t;
                    if (e && i) return {
                        left: e.left,
                        right: e.right,
                        top: i.top,
                        bottom: i.bottom
                    }
                }(t) || this.chartArea,
                a = {
                    meta: t,
                    index: t.index,
                    cancelable: !0
                };
            !1 !== this.notifyPlugins("beforeDatasetDraw", a) && (s && (0, o.Y)(e, {
                left: !1 === i.left ? 0 : n.left - i.left,
                right: !1 === i.right ? this.width : n.right + i.right,
                top: !1 === i.top ? 0 : n.top - i.top,
                bottom: !1 === i.bottom ? this.height : n.bottom + i.bottom
            }), t.controller.draw(), s && (0, o.$)(e), a.cancelable = !1, this.notifyPlugins("afterDatasetDraw", a))
        }
        isPointInArea(t) {
            return (0, o.C)(t, this.chartArea, this._minPadding)
        }
        getElementsAtEventForMode(t, e, i, s) {
            const n = Q.modes[e];
            return "function" == typeof n ? n(this, t, i, s) : []
        }
        getDatasetMeta(t) {
            const e = this.data.datasets[t],
                i = this._metasets;
            let s = i.filter((t => t && t._dataset === e)).pop();
            return s || (s = {
                type: null,
                data: [],
                dataset: null,
                controller: null,
                hidden: null,
                xAxisID: null,
                yAxisID: null,
                order: e && e.order || 0,
                index: t,
                _dataset: e,
                _parsed: [],
                _sorted: !1
            }, i.push(s)), s
        }
        getContext() {
            return this.$context || (this.$context = (0, o.j)(null, {
                chart: this,
                type: "chart"
            }))
        }
        getVisibleDatasetCount() {
            return this.getSortedVisibleDatasetMetas().length
        }
        isDatasetVisible(t) {
            const e = this.data.datasets[t];
            if (!e) return !1;
            const i = this.getDatasetMeta(t);
            return "boolean" == typeof i.hidden ? !i.hidden : !e.hidden
        }
        setDatasetVisibility(t, e) {
            this.getDatasetMeta(t).hidden = !e
        }
        toggleDataVisibility(t) {
            this._hiddenIndices[t] = !this._hiddenIndices[t]
        }
        getDataVisibility(t) {
            return !this._hiddenIndices[t]
        }
        _updateVisibility(t, e, i) {
            const s = i ? "show" : "hide",
                n = this.getDatasetMeta(t),
                a = n.controller._resolveAnimations(void 0, s);
            (0, o.h)(e) ? (n.data[e].hidden = !i, this.update()) : (this.setDatasetVisibility(t, i), a.update(n, {
                visible: i
            }), this.update((e => e.datasetIndex === t ? s : void 0)))
        }
        hide(t, e) {
            this._updateVisibility(t, e, !1)
        }
        show(t, e) {
            this._updateVisibility(t, e, !0)
        }
        _destroyDatasetMeta(t) {
            const e = this._metasets[t];
            e && e.controller && e.controller._destroy(), delete this._metasets[t]
        }
        _stop() {
            let t, e;
            for (this.stop(), r.remove(this), t = 0, e = this.data.datasets.length; t < e; ++t) this._destroyDatasetMeta(t)
        }
        destroy() {
            this.notifyPlugins("beforeDestroy");
            const {
                canvas: t,
                ctx: e
            } = this;
            this._stop(), this.config.clearCache(), t && (this.unbindEvents(), (0, o.af)(t, e), this.platform.releaseContext(e), this.canvas = null, this.ctx = null), delete oe[this.id], this.notifyPlugins("afterDestroy")
        }
        toBase64Image(...t) {
            return this.canvas.toDataURL(...t)
        }
        bindEvents() {
            this.bindUserEvents(), this.options.responsive ? this.bindResponsiveEvents() : this.attached = !0
        }
        bindUserEvents() {
            const t = this._listeners,
                e = this.platform,
                i = (i, s) => {
                    e.addEventListener(this, i, s), t[i] = s
                },
                s = (t, e, i) => {
                    t.offsetX = e, t.offsetY = i, this._eventHandler(t)
                };
            (0, o.F)(this.options.events, (t => i(t, s)))
        }
        bindResponsiveEvents() {
            this._responsiveListeners || (this._responsiveListeners = {});
            const t = this._responsiveListeners,
                e = this.platform,
                i = (i, s) => {
                    e.addEventListener(this, i, s), t[i] = s
                },
                s = (i, s) => {
                    t[i] && (e.removeEventListener(this, i, s), delete t[i])
                },
                n = (t, e) => {
                    this.canvas && this.resize(t, e)
                };
            let o;
            const a = () => {
                s("attach", a), this.attached = !0, this.resize(), i("resize", n), i("detach", o)
            };
            o = () => {
                this.attached = !1, s("resize", n), this._stop(), this._resize(0, 0), i("attach", a)
            }, e.isAttached(this.canvas) ? a() : o()
        }
        unbindEvents() {
            (0, o.F)(this._listeners, ((t, e) => {
                this.platform.removeEventListener(this, e, t)
            })), this._listeners = {}, (0, o.F)(this._responsiveListeners, ((t, e) => {
                this.platform.removeEventListener(this, e, t)
            })), this._responsiveListeners = void 0
        }
        updateHoverStyle(t, e, i) {
            const s = i ? "set" : "remove";
            let n, o, a, r;
            for ("dataset" === e && (n = this.getDatasetMeta(t[0].datasetIndex), n.controller["_" + s + "DatasetHoverStyle"]()), a = 0, r = t.length; a < r; ++a) {
                o = t[a];
                const e = o && this.getDatasetMeta(o.datasetIndex).controller;
                e && e[s + "HoverStyle"](o.element, o.datasetIndex, o.index)
            }
        }
        getActiveElements() {
            return this._active || []
        }
        setActiveElements(t) {
            const e = this._active || [],
                i = t.map((({
                    datasetIndex: t,
                    index: e
                }) => {
                    const i = this.getDatasetMeta(t);
                    if (!i) throw new Error("No dataset found at index " + t);
                    return {
                        datasetIndex: t,
                        element: i.data[e],
                        index: e
                    }
                }));
            !(0, o.ah)(i, e) && (this._active = i, this._lastEvent = null, this._updateHoverStyles(i, e))
        }
        notifyPlugins(t, e, i) {
            return this._plugins.notify(this, t, e, i)
        }
        isPluginEnabled(t) {
            return 1 === this._plugins._cache.filter((e => e.plugin.id === t)).length
        }
        _updateHoverStyles(t, e, i) {
            const s = this.options.hover,
                n = (t, e) => t.filter((t => !e.some((e => t.datasetIndex === e.datasetIndex && t.index === e.index)))),
                o = n(e, t),
                a = i ? t : n(t, e);
            o.length && this.updateHoverStyle(o, s.mode, !1), a.length && s.mode && this.updateHoverStyle(a, s.mode, !0)
        }
        _eventHandler(t, e) {
            const i = {
                    event: t,
                    replay: e,
                    cancelable: !0,
                    inChartArea: this.isPointInArea(t)
                },
                s = e => (e.options.events || this.options.events).includes(t.native.type);
            if (!1 === this.notifyPlugins("beforeEvent", i, s)) return;
            const n = this._handleEvent(t, e, i.inChartArea);
            return i.cancelable = !1, this.notifyPlugins("afterEvent", i, s), (n || i.changed) && this.render(), this
        }
        _handleEvent(t, e, i) {
            const {
                _active: s = [],
                options: n
            } = this, a = e, r = this._getActiveElements(t, s, i, a), h = (0, o.ai)(t), l = function(t, e, i, s) {
                return i && "mouseout" !== t.type ? s ? e : t : null
            }(t, this._lastEvent, i, h);
            i && (this._lastEvent = null, (0, o.Q)(n.onHover, [t, r, this], this), h && (0, o.Q)(n.onClick, [t, r, this], this));
            const c = !(0, o.ah)(r, s);
            return (c || e) && (this._active = r, this._updateHoverStyles(r, s, e)), this._lastEvent = l, c
        }
        _getActiveElements(t, e, i, s) {
            if ("mouseout" === t.type) return [];
            if (!i) return e;
            const n = this.options.hover;
            return this.getElementsAtEventForMode(t, n.mode, n, s)
        }
        constructor(t, e) {
            const i = this.config = new Kt(e),
                s = ne(t),
                n = ae(s);
            if (n) throw new Error("Canvas is already in use. Chart with ID '" + n.id + "' must be destroyed before the canvas with ID '" + n.canvas.id + "' can be reused.");
            const a = i.createResolver(i.chartOptionScopes(), this.getContext());
            this.platform = new(i.platform || function(t) {
                return !(0, o.M)() || "undefined" != typeof OffscreenCanvas && t instanceof OffscreenCanvas ? ct : St
            }(s)), this.platform.updateConfig(i);
            const h = this.platform.acquireContext(s, a.aspectRatio),
                l = h && h.canvas,
                c = l && l.height,
                d = l && l.width;
            this.id = (0, o.ac)(), this.ctx = h, this.canvas = l, this.width = d, this.height = c, this._options = a, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new Bt, this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = (0, o.ad)((t => this.update(t)), a.resizeDelay || 0), this._dataChanges = [], oe[this.id] = this, h && l ? (r.listen(this, "complete", ie), r.listen(this, "progress", se), this._initialize(), this.attached && this.update()) : console.error("Failed to create chart: can't acquire context from the given item")
        }
    }

    function le() {
        return (0, o.F)(he.instances, (t => t._plugins.invalidate()))
    }

    function ce(t, e, i, s) {
        const n = (a = t.options.borderRadius, (0, o.ak)(a, ["outerStart", "outerEnd", "innerStart", "innerEnd"]));
        var a;
        const r = (i - e) / 2,
            h = Math.min(r, s * e / 2),
            l = t => {
                const e = (i - Math.min(r, t)) * s / 2;
                return (0, o.S)(t, 0, Math.min(r, e))
            };
        return {
            outerStart: l(n.outerStart),
            outerEnd: l(n.outerEnd),
            innerStart: (0, o.S)(n.innerStart, 0, h),
            innerEnd: (0, o.S)(n.innerEnd, 0, h)
        }
    }

    function de(t, e, i, s) {
        return {
            x: i + t * Math.cos(e),
            y: s + t * Math.sin(e)
        }
    }

    function ue(t, e, i, s, n, a) {
        const {
            x: r,
            y: h,
            startAngle: l,
            pixelMargin: c,
            innerRadius: d
        } = e, u = Math.max(e.outerRadius + s + i - c, 0), f = d > 0 ? d + s + i + c : 0;
        let g = 0;
        const p = n - l;
        if (s) {
            const t = ((d > 0 ? d - s : 0) + (u > 0 ? u - s : 0)) / 2;
            g = (p - (0 !== t ? p * t / (t + s) : p)) / 2
        }
        const m = (p - Math.max(.001, p * u - i / o.P) / u) / 2,
            x = l + m + g,
            b = n - m - g,
            {
                outerStart: _,
                outerEnd: y,
                innerStart: v,
                innerEnd: M
            } = ce(e, f, u, b - x),
            w = u - _,
            k = u - y,
            S = x + _ / w,
            P = b - y / k,
            O = f + v,
            C = f + M,
            D = x + v / O,
            T = b - M / C;
        if (t.beginPath(), a) {
            const e = (S + P) / 2;
            if (t.arc(r, h, u, S, e), t.arc(r, h, u, e, P), y > 0) {
                const e = de(k, P, r, h);
                t.arc(e.x, e.y, y, P, b + o.H)
            }
            const i = de(C, b, r, h);
            if (t.lineTo(i.x, i.y), M > 0) {
                const e = de(C, T, r, h);
                t.arc(e.x, e.y, M, b + o.H, T + Math.PI)
            }
            const s = (b - M / f + (x + v / f)) / 2;
            if (t.arc(r, h, f, b - M / f, s, !0), t.arc(r, h, f, s, x + v / f, !0), v > 0) {
                const e = de(O, D, r, h);
                t.arc(e.x, e.y, v, D + Math.PI, x - o.H)
            }
            const n = de(w, x, r, h);
            if (t.lineTo(n.x, n.y), _ > 0) {
                const e = de(w, S, r, h);
                t.arc(e.x, e.y, _, x - o.H, S)
            }
        } else {
            t.moveTo(r, h);
            const e = Math.cos(S) * u + r,
                i = Math.sin(S) * u + h;
            t.lineTo(e, i);
            const s = Math.cos(P) * u + r,
                n = Math.sin(P) * u + h;
            t.lineTo(s, n)
        }
        t.closePath()
    }

    function fe(t, e, i, s, n) {
        const {
            fullCircles: a,
            startAngle: r,
            circumference: h,
            options: l
        } = e, {
            borderWidth: c,
            borderJoinStyle: d
        } = l, u = "inner" === l.borderAlign;
        if (!c) return;
        u ? (t.lineWidth = 2 * c, t.lineJoin = d || "round") : (t.lineWidth = c, t.lineJoin = d || "bevel");
        let f = e.endAngle;
        if (a) {
            ue(t, e, i, s, f, n);
            for (let e = 0; e < a; ++e) t.stroke();
            isNaN(h) || (f = r + (h % o.T || o.T))
        }
        u && function(t, e, i) {
            const {
                startAngle: s,
                pixelMargin: n,
                x: a,
                y: r,
                outerRadius: h,
                innerRadius: l
            } = e;
            let c = n / h;
            t.beginPath(), t.arc(a, r, h, s - c, i + c), l > n ? (c = n / l, t.arc(a, r, l, i + c, s - c, !0)) : t.arc(a, r, n, i + o.H, s - o.H), t.closePath(), t.clip()
        }(t, e, f), a || (ue(t, e, i, s, f, n), t.stroke())
    }(0, n.default)(he, "defaults", o.d), (0, n.default)(he, "instances", oe), (0, n.default)(he, "overrides", o.a3), (0, n.default)(he, "registry", Vt), (0, n.default)(he, "version", "4.2.0"), (0, n.default)(he, "getChart", ae);
    class ge extends Pt {
        inRange(t, e, i) {
            const s = this.getProps(["x", "y"], i),
                {
                    angle: n,
                    distance: a
                } = (0, o.D)(s, {
                    x: t,
                    y: e
                }),
                {
                    startAngle: r,
                    endAngle: h,
                    innerRadius: l,
                    outerRadius: c,
                    circumference: d
                } = this.getProps(["startAngle", "endAngle", "innerRadius", "outerRadius", "circumference"], i),
                u = this.options.spacing / 2,
                f = (0, o.v)(d, h - r) >= o.T || (0, o.p)(n, r, h),
                g = (0, o.aj)(a, l + u, c + u);
            return f && g
        }
        getCenterPoint(t) {
            const {
                x: e,
                y: i,
                startAngle: s,
                endAngle: n,
                innerRadius: o,
                outerRadius: a
            } = this.getProps(["x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius", "circumference"], t), {
                offset: r,
                spacing: h
            } = this.options, l = (s + n) / 2, c = (o + a + h + r) / 2;
            return {
                x: e + Math.cos(l) * c,
                y: i + Math.sin(l) * c
            }
        }
        tooltipPosition(t) {
            return this.getCenterPoint(t)
        }
        draw(t) {
            const {
                options: e,
                circumference: i
            } = this, s = (e.offset || 0) / 4, n = (e.spacing || 0) / 2, a = e.circular;
            if (this.pixelMargin = "inner" === e.borderAlign ? .33 : 0, this.fullCircles = i > o.T ? Math.floor(i / o.T) : 0, 0 === i || this.innerRadius < 0 || this.outerRadius < 0) return;
            t.save();
            const r = (this.startAngle + this.endAngle) / 2;
            t.translate(Math.cos(r) * s, Math.sin(r) * s);
            const h = s * (1 - Math.sin(Math.min(o.P, i || 0)));
            t.fillStyle = e.backgroundColor, t.strokeStyle = e.borderColor,
                function(t, e, i, s, n) {
                    const {
                        fullCircles: a,
                        startAngle: r,
                        circumference: h
                    } = e;
                    let l = e.endAngle;
                    if (a) {
                        ue(t, e, i, s, l, n);
                        for (let e = 0; e < a; ++e) t.fill();
                        isNaN(h) || (l = r + (h % o.T || o.T))
                    }
                    ue(t, e, i, s, l, n), t.fill()
                }(t, this, h, n, a), fe(t, this, h, n, a), t.restore()
        }
        constructor(t) {
            super(), this.options = void 0, this.circumference = void 0, this.startAngle = void 0, this.endAngle = void 0, this.innerRadius = void 0, this.outerRadius = void 0, this.pixelMargin = 0, this.fullCircles = 0, t && Object.assign(this, t)
        }
    }

    function pe(t, e, i = e) {
        t.lineCap = (0, o.v)(i.borderCapStyle, e.borderCapStyle), t.setLineDash((0, o.v)(i.borderDash, e.borderDash)), t.lineDashOffset = (0, o.v)(i.borderDashOffset, e.borderDashOffset), t.lineJoin = (0, o.v)(i.borderJoinStyle, e.borderJoinStyle), t.lineWidth = (0, o.v)(i.borderWidth, e.borderWidth), t.strokeStyle = (0, o.v)(i.borderColor, e.borderColor)
    }

    function me(t, e, i) {
        t.lineTo(i.x, i.y)
    }

    function xe(t, e, i = {}) {
        const s = t.length,
            {
                start: n = 0,
                end: o = s - 1
            } = i,
            {
                start: a,
                end: r
            } = e,
            h = Math.max(n, a),
            l = Math.min(o, r),
            c = n < a && o < a || n > r && o > r;
        return {
            count: s,
            start: h,
            loop: e.loop,
            ilen: l < h && !c ? s + l - h : l - h
        }
    }

    function be(t, e, i, s) {
        const {
            points: n,
            options: a
        } = e, {
            count: r,
            start: h,
            loop: l,
            ilen: c
        } = xe(n, i, s), d = function(t) {
            return t.stepped ? o.ar : t.tension || "monotone" === t.cubicInterpolationMode ? o.as : me
        }(a);
        let u, f, g, {
            move: p = !0,
            reverse: m
        } = s || {};
        for (u = 0; u <= c; ++u) f = n[(h + (m ? c - u : u)) % r], f.skip || (p ? (t.moveTo(f.x, f.y), p = !1) : d(t, g, f, m, a.stepped), g = f);
        return l && (f = n[(h + (m ? c : 0)) % r], d(t, g, f, m, a.stepped)), !!l
    }

    function _e(t, e, i, s) {
        const n = e.points,
            {
                count: o,
                start: a,
                ilen: r
            } = xe(n, i, s),
            {
                move: h = !0,
                reverse: l
            } = s || {};
        let c, d, u, f, g, p, m = 0,
            x = 0;
        const b = t => (a + (l ? r - t : t)) % o,
            _ = () => {
                f !== g && (t.lineTo(m, g), t.lineTo(m, f), t.lineTo(m, p))
            };
        for (h && (d = n[b(0)], t.moveTo(d.x, d.y)), c = 0; c <= r; ++c) {
            if (d = n[b(c)], d.skip) continue;
            const e = d.x,
                i = d.y,
                s = 0 | e;
            s === u ? (i < f ? f = i : i > g && (g = i), m = (x * m + e) / ++x) : (_(), t.lineTo(e, i), u = s, x = 0, f = g = i), p = i
        }
        _()
    }

    function ye(t) {
        const e = t.options,
            i = e.borderDash && e.borderDash.length;
        return !(t._decimated || t._loop || e.tension || "monotone" === e.cubicInterpolationMode || e.stepped || i) ? _e : be
    }(0, n.default)(ge, "id", "arc"), (0, n.default)(ge, "defaults", {
        borderAlign: "center",
        borderColor: "#fff",
        borderJoinStyle: void 0,
        borderRadius: 0,
        borderWidth: 2,
        offset: 0,
        spacing: 0,
        angle: void 0,
        circular: !0
    }), (0, n.default)(ge, "defaultRoutes", {
        backgroundColor: "backgroundColor"
    });
    const ve = "function" == typeof Path2D;

    function Me(t, e, i, s) {
        ve && !e.options.segment ? function(t, e, i, s) {
            let n = e._path;
            n || (n = e._path = new Path2D, e.path(n, i, s) && n.closePath()), pe(t, e.options), t.stroke(n)
        }(t, e, i, s) : function(t, e, i, s) {
            const {
                segments: n,
                options: o
            } = e, a = ye(e);
            for (const r of n) pe(t, o, r.style), t.beginPath(), a(t, e, r, {
                start: i,
                end: i + s - 1
            }) && t.closePath(), t.stroke()
        }(t, e, i, s)
    }
    class we extends Pt {
        updateControlPoints(t, e) {
            const i = this.options;
            if ((i.tension || "monotone" === i.cubicInterpolationMode) && !i.stepped && !this._pointsUpdated) {
                const s = i.spanGaps ? this._loop : this._fullLoop;
                (0, o.al)(this._points, i, t, s, e), this._pointsUpdated = !0
            }
        }
        set points(t) {
            this._points = t, delete this._segments, delete this._path, this._pointsUpdated = !1
        }
        get points() {
            return this._points
        }
        get segments() {
            return this._segments || (this._segments = (0, o.am)(this, this.options.segment))
        }
        first() {
            const t = this.segments,
                e = this.points;
            return t.length && e[t[0].start]
        }
        last() {
            const t = this.segments,
                e = this.points,
                i = t.length;
            return i && e[t[i - 1].end]
        }
        interpolate(t, e) {
            const i = this.options,
                s = t[e],
                n = this.points,
                a = (0, o.an)(this, {
                    property: e,
                    start: s,
                    end: s
                });
            if (!a.length) return;
            const r = [],
                h = function(t) {
                    return t.stepped ? o.ao : t.tension || "monotone" === t.cubicInterpolationMode ? o.ap : o.aq
                }(i);
            let l, c;
            for (l = 0, c = a.length; l < c; ++l) {
                const {
                    start: o,
                    end: c
                } = a[l], d = n[o], u = n[c];
                if (d === u) {
                    r.push(d);
                    continue
                }
                const f = h(d, u, Math.abs((s - d[e]) / (u[e] - d[e])), i.stepped);
                f[e] = t[e], r.push(f)
            }
            return 1 === r.length ? r[0] : r
        }
        pathSegment(t, e, i) {
            return ye(this)(t, this, e, i)
        }
        path(t, e, i) {
            const s = this.segments,
                n = ye(this);
            let o = this._loop;
            e = e || 0, i = i || this.points.length - e;
            for (const a of s) o &= n(t, this, a, {
                start: e,
                end: e + i - 1
            });
            return !!o
        }
        draw(t, e, i, s) {
            const n = this.options || {};
            (this.points || []).length && n.borderWidth && (t.save(), Me(t, this, i, s), t.restore()), this.animated && (this._pointsUpdated = !1, this._path = void 0)
        }
        constructor(t) {
            super(), this.animated = !0, this.options = void 0, this._chart = void 0, this._loop = void 0, this._fullLoop = void 0, this._path = void 0, this._points = void 0, this._segments = void 0, this._decimated = !1, this._pointsUpdated = !1, this._datasetIndex = void 0, t && Object.assign(this, t)
        }
    }

    function ke(t, e, i, s) {
        const n = t.options,
            {
                [i]: o
            } = t.getProps([i], s);
        return Math.abs(e - o) < n.radius + n.hitRadius
    }(0, n.default)(we, "id", "line"), (0, n.default)(we, "defaults", {
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0,
        borderJoinStyle: "miter",
        borderWidth: 3,
        capBezierPoints: !0,
        cubicInterpolationMode: "default",
        fill: !1,
        spanGaps: !1,
        stepped: !1,
        tension: 0
    }), (0, n.default)(we, "defaultRoutes", {
        backgroundColor: "backgroundColor",
        borderColor: "borderColor"
    }), (0, n.default)(we, "descriptors", {
        _scriptable: !0,
        _indexable: t => "borderDash" !== t && "fill" !== t
    });
    class Se extends Pt {
        inRange(t, e, i) {
            const s = this.options,
                {
                    x: n,
                    y: o
                } = this.getProps(["x", "y"], i);
            return Math.pow(t - n, 2) + Math.pow(e - o, 2) < Math.pow(s.hitRadius + s.radius, 2)
        }
        inXRange(t, e) {
            return ke(this, t, "x", e)
        }
        inYRange(t, e) {
            return ke(this, t, "y", e)
        }
        getCenterPoint(t) {
            const {
                x: e,
                y: i
            } = this.getProps(["x", "y"], t);
            return {
                x: e,
                y: i
            }
        }
        size(t) {
            let e = (t = t || this.options || {}).radius || 0;
            e = Math.max(e, e && t.hoverRadius || 0);
            return 2 * (e + (e && t.borderWidth || 0))
        }
        draw(t, e) {
            const i = this.options;
            this.skip || i.radius < .1 || !(0, o.C)(this, e, this.size(i) / 2) || (t.strokeStyle = i.borderColor, t.lineWidth = i.borderWidth, t.fillStyle = i.backgroundColor, (0, o.at)(t, i, this.x, this.y))
        }
        getRange() {
            const t = this.options || {};
            return t.radius + t.hitRadius
        }
        constructor(t) {
            super(), this.options = void 0, this.parsed = void 0, this.skip = void 0, this.stop = void 0, t && Object.assign(this, t)
        }
    }

    function Pe(t, e) {
        const {
            x: i,
            y: s,
            base: n,
            width: o,
            height: a
        } = t.getProps(["x", "y", "base", "width", "height"], e);
        let r, h, l, c, d;
        return t.horizontal ? (d = a / 2, r = Math.min(i, n), h = Math.max(i, n), l = s - d, c = s + d) : (d = o / 2, r = i - d, h = i + d, l = Math.min(s, n), c = Math.max(s, n)), {
            left: r,
            top: l,
            right: h,
            bottom: c
        }
    }

    function Oe(t, e, i, s) {
        return t ? 0 : (0, o.S)(e, i, s)
    }

    function Ce(t) {
        const e = Pe(t),
            i = e.right - e.left,
            s = e.bottom - e.top,
            n = function(t, e, i) {
                const s = t.options.borderWidth,
                    n = t.borderSkipped,
                    a = (0, o.av)(s);
                return {
                    t: Oe(n.top, a.top, 0, i),
                    r: Oe(n.right, a.right, 0, e),
                    b: Oe(n.bottom, a.bottom, 0, i),
                    l: Oe(n.left, a.left, 0, e)
                }
            }(t, i / 2, s / 2),
            a = function(t, e, i) {
                const {
                    enableBorderRadius: s
                } = t.getProps(["enableBorderRadius"]), n = t.options.borderRadius, a = (0, o.aw)(n), r = Math.min(e, i), h = t.borderSkipped, l = s || (0, o.i)(n);
                return {
                    topLeft: Oe(!l || h.top || h.left, a.topLeft, 0, r),
                    topRight: Oe(!l || h.top || h.right, a.topRight, 0, r),
                    bottomLeft: Oe(!l || h.bottom || h.left, a.bottomLeft, 0, r),
                    bottomRight: Oe(!l || h.bottom || h.right, a.bottomRight, 0, r)
                }
            }(t, i / 2, s / 2);
        return {
            outer: {
                x: e.left,
                y: e.top,
                w: i,
                h: s,
                radius: a
            },
            inner: {
                x: e.left + n.l,
                y: e.top + n.t,
                w: i - n.l - n.r,
                h: s - n.t - n.b,
                radius: {
                    topLeft: Math.max(0, a.topLeft - Math.max(n.t, n.l)),
                    topRight: Math.max(0, a.topRight - Math.max(n.t, n.r)),
                    bottomLeft: Math.max(0, a.bottomLeft - Math.max(n.b, n.l)),
                    bottomRight: Math.max(0, a.bottomRight - Math.max(n.b, n.r))
                }
            }
        }
    }

    function De(t, e, i, s) {
        const n = null === e,
            a = null === i,
            r = t && !(n && a) && Pe(t, s);
        return r && (n || (0, o.aj)(e, r.left, r.right)) && (a || (0, o.aj)(i, r.top, r.bottom))
    }

    function Te(t, e) {
        t.rect(e.x, e.y, e.w, e.h)
    }

    function Ae(t, e, i = {}) {
        const s = t.x !== i.x ? -e : 0,
            n = t.y !== i.y ? -e : 0,
            o = (t.x + t.w !== i.x + i.w ? e : 0) - s,
            a = (t.y + t.h !== i.y + i.h ? e : 0) - n;
        return {
            x: t.x + s,
            y: t.y + n,
            w: t.w + o,
            h: t.h + a,
            radius: t.radius
        }
    }(0, n.default)(Se, "id", "point"), (0, n.default)(Se, "defaults", {
        borderWidth: 1,
        hitRadius: 1,
        hoverBorderWidth: 1,
        hoverRadius: 4,
        pointStyle: "circle",
        radius: 3,
        rotation: 0
    }), (0, n.default)(Se, "defaultRoutes", {
        backgroundColor: "backgroundColor",
        borderColor: "borderColor"
    });
    class Ee extends Pt {
        draw(t) {
            const {
                inflateAmount: e,
                options: {
                    borderColor: i,
                    backgroundColor: s
                }
            } = this, {
                inner: n,
                outer: a
            } = Ce(this), r = (h = a.radius).topLeft || h.topRight || h.bottomLeft || h.bottomRight ? o.au : Te;
            var h;
            t.save(), a.w === n.w && a.h === n.h || (t.beginPath(), r(t, Ae(a, e, n)), t.clip(), r(t, Ae(n, -e, a)), t.fillStyle = i, t.fill("evenodd")), t.beginPath(), r(t, Ae(n, e)), t.fillStyle = s, t.fill(), t.restore()
        }
        inRange(t, e, i) {
            return De(this, t, e, i)
        }
        inXRange(t, e) {
            return De(this, t, null, e)
        }
        inYRange(t, e) {
            return De(this, null, t, e)
        }
        getCenterPoint(t) {
            const {
                x: e,
                y: i,
                base: s,
                horizontal: n
            } = this.getProps(["x", "y", "base", "horizontal"], t);
            return {
                x: n ? (e + s) / 2 : e,
                y: n ? i : (i + s) / 2
            }
        }
        getRange(t) {
            return "x" === t ? this.width / 2 : this.height / 2
        }
        constructor(t) {
            super(), this.options = void 0, this.horizontal = void 0, this.base = void 0, this.width = void 0, this.height = void 0, this.inflateAmount = void 0, t && Object.assign(this, t)
        }
    }(0, n.default)(Ee, "id", "bar"), (0, n.default)(Ee, "defaults", {
        borderSkipped: "start",
        borderWidth: 0,
        borderRadius: 0,
        inflateAmount: "auto",
        pointStyle: void 0
    }), (0, n.default)(Ee, "defaultRoutes", {
        backgroundColor: "backgroundColor",
        borderColor: "borderColor"
    });
    new WeakMap;
    const Le = {
        average(t) {
            if (!t.length) return !1;
            let e, i, s = 0,
                n = 0,
                o = 0;
            for (e = 0, i = t.length; e < i; ++e) {
                const i = t[e].element;
                if (i && i.hasValue()) {
                    const t = i.tooltipPosition();
                    s += t.x, n += t.y, ++o
                }
            }
            return {
                x: s / o,
                y: n / o
            }
        },
        nearest(t, e) {
            if (!t.length) return !1;
            let i, s, n, a = e.x,
                r = e.y,
                h = Number.POSITIVE_INFINITY;
            for (i = 0, s = t.length; i < s; ++i) {
                const s = t[i].element;
                if (s && s.hasValue()) {
                    const t = s.getCenterPoint(),
                        i = (0, o.aE)(e, t);
                    i < h && (h = i, n = s)
                }
            }
            if (n) {
                const t = n.tooltipPosition();
                a = t.x, r = t.y
            }
            return {
                x: a,
                y: r
            }
        }
    };

    function Re(t, e) {
        return e && ((0, o.b)(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t
    }

    function Fe(t) {
        return ("string" == typeof t || t instanceof String) && t.indexOf("\n") > -1 ? t.split("\n") : t
    }

    function Ie(t, e) {
        const {
            element: i,
            datasetIndex: s,
            index: n
        } = e, o = t.getDatasetMeta(s).controller, {
            label: a,
            value: r
        } = o.getLabelAndValue(n);
        return {
            chart: t,
            label: a,
            parsed: o.getParsed(n),
            raw: t.data.datasets[s].data[n],
            formattedValue: r,
            dataset: o.getDataset(),
            dataIndex: n,
            datasetIndex: s,
            element: i
        }
    }

    function ze(t, e) {
        const i = t.chart.ctx,
            {
                body: s,
                footer: n,
                title: a
            } = t,
            {
                boxWidth: r,
                boxHeight: h
            } = e,
            l = (0, o.a0)(e.bodyFont),
            c = (0, o.a0)(e.titleFont),
            d = (0, o.a0)(e.footerFont),
            u = a.length,
            f = n.length,
            g = s.length,
            p = (0, o.E)(e.padding);
        let m = p.height,
            x = 0,
            b = s.reduce(((t, e) => t + e.before.length + e.lines.length + e.after.length), 0);
        if (b += t.beforeBody.length + t.afterBody.length, u && (m += u * c.lineHeight + (u - 1) * e.titleSpacing + e.titleMarginBottom), b) {
            m += g * (e.displayColors ? Math.max(h, l.lineHeight) : l.lineHeight) + (b - g) * l.lineHeight + (b - 1) * e.bodySpacing
        }
        f && (m += e.footerMarginTop + f * d.lineHeight + (f - 1) * e.footerSpacing);
        let _ = 0;
        const y = function(t) {
            x = Math.max(x, i.measureText(t).width + _)
        };
        return i.save(), i.font = c.string, (0, o.F)(t.title, y), i.font = l.string, (0, o.F)(t.beforeBody.concat(t.afterBody), y), _ = e.displayColors ? r + 2 + e.boxPadding : 0, (0, o.F)(s, (t => {
            (0, o.F)(t.before, y), (0, o.F)(t.lines, y), (0, o.F)(t.after, y)
        })), _ = 0, i.font = d.string, (0, o.F)(t.footer, y), i.restore(), x += p.width, {
            width: x,
            height: m
        }
    }

    function Ve(t, e, i, s) {
        const {
            x: n,
            width: o
        } = i, {
            width: a,
            chartArea: {
                left: r,
                right: h
            }
        } = t;
        let l = "center";
        return "center" === s ? l = n <= (r + h) / 2 ? "left" : "right" : n <= o / 2 ? l = "left" : n >= a - o / 2 && (l = "right"),
            function(t, e, i, s) {
                const {
                    x: n,
                    width: o
                } = s, a = i.caretSize + i.caretPadding;
                return "left" === t && n + o + a > e.width || "right" === t && n - o - a < 0 || void 0
            }(l, t, e, i) && (l = "center"), l
    }

    function Be(t, e, i) {
        const s = i.yAlign || e.yAlign || function(t, e) {
            const {
                y: i,
                height: s
            } = e;
            return i < s / 2 ? "top" : i > t.height - s / 2 ? "bottom" : "center"
        }(t, i);
        return {
            xAlign: i.xAlign || e.xAlign || Ve(t, e, i, s),
            yAlign: s
        }
    }

    function Ne(t, e, i, s) {
        const {
            caretSize: n,
            caretPadding: a,
            cornerRadius: r
        } = t, {
            xAlign: h,
            yAlign: l
        } = i, c = n + a, {
            topLeft: d,
            topRight: u,
            bottomLeft: f,
            bottomRight: g
        } = (0, o.aw)(r);
        let p = function(t, e) {
            let {
                x: i,
                width: s
            } = t;
            return "right" === e ? i -= s : "center" === e && (i -= s / 2), i
        }(e, h);
        const m = function(t, e, i) {
            let {
                y: s,
                height: n
            } = t;
            return "top" === e ? s += i : s -= "bottom" === e ? n + i : n / 2, s
        }(e, l, c);
        return "center" === l ? "left" === h ? p += c : "right" === h && (p -= c) : "left" === h ? p -= Math.max(d, f) + n : "right" === h && (p += Math.max(u, g) + n), {
            x: (0, o.S)(p, 0, s.width - e.width),
            y: (0, o.S)(m, 0, s.height - e.height)
        }
    }

    function je(t, e, i) {
        const s = (0, o.E)(i.padding);
        return "center" === e ? t.x + t.width / 2 : "right" === e ? t.x + t.width - s.right : t.x + s.left
    }

    function We(t) {
        return Re([], Fe(t))
    }

    function He(t, e) {
        const i = e && e.dataset && e.dataset.tooltip && e.dataset.tooltip.callbacks;
        return i ? t.override(i) : t
    }
    const $e = {
        beforeTitle: o.aF,
        title(t) {
            if (t.length > 0) {
                const e = t[0],
                    i = e.chart.data.labels,
                    s = i ? i.length : 0;
                if (this && this.options && "dataset" === this.options.mode) return e.dataset.label || "";
                if (e.label) return e.label;
                if (s > 0 && e.dataIndex < s) return i[e.dataIndex]
            }
            return ""
        },
        afterTitle: o.aF,
        beforeBody: o.aF,
        beforeLabel: o.aF,
        label(t) {
            if (this && this.options && "dataset" === this.options.mode) return t.label + ": " + t.formattedValue || t.formattedValue;
            let e = t.dataset.label || "";
            e && (e += ": ");
            const i = t.formattedValue;
            return (0, o.k)(i) || (e += i), e
        },
        labelColor(t) {
            const e = t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);
            return {
                borderColor: e.borderColor,
                backgroundColor: e.backgroundColor,
                borderWidth: e.borderWidth,
                borderDash: e.borderDash,
                borderDashOffset: e.borderDashOffset,
                borderRadius: 0
            }
        },
        labelTextColor() {
            return this.options.bodyColor
        },
        labelPointStyle(t) {
            const e = t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);
            return {
                pointStyle: e.pointStyle,
                rotation: e.rotation
            }
        },
        afterLabel: o.aF,
        afterBody: o.aF,
        beforeFooter: o.aF,
        footer: o.aF,
        afterFooter: o.aF
    };

    function Ye(t, e, i, s) {
        const n = t[e].call(i, s);
        return void 0 === n ? $e[e].call(i, s) : n
    }
    class Ue extends Pt {
        initialize(t) {
            this.options = t, this._cachedAnimations = void 0, this.$context = void 0
        }
        _resolveAnimations() {
            const t = this._cachedAnimations;
            if (t) return t;
            const e = this.chart,
                i = this.options.setContext(this.getContext()),
                s = i.enabled && e.options.animation && i.animations,
                n = new d(this.chart, s);
            return s._cacheable && (this._cachedAnimations = Object.freeze(n)), n
        }
        getContext() {
            return this.$context || (this.$context = (t = this.chart.getContext(), e = this, i = this._tooltipItems, (0, o.j)(t, {
                tooltip: e,
                tooltipItems: i,
                type: "tooltip"
            })));
            var t, e, i
        }
        getTitle(t, e) {
            const {
                callbacks: i
            } = e, s = Ye(i, "beforeTitle", this, t), n = Ye(i, "title", this, t), o = Ye(i, "afterTitle", this, t);
            let a = [];
            return a = Re(a, Fe(s)), a = Re(a, Fe(n)), a = Re(a, Fe(o)), a
        }
        getBeforeBody(t, e) {
            return We(Ye(e.callbacks, "beforeBody", this, t))
        }
        getBody(t, e) {
            const {
                callbacks: i
            } = e, s = [];
            return (0, o.F)(t, (t => {
                const e = {
                        before: [],
                        lines: [],
                        after: []
                    },
                    n = He(i, t);
                Re(e.before, Fe(Ye(n, "beforeLabel", this, t))), Re(e.lines, Ye(n, "label", this, t)), Re(e.after, Fe(Ye(n, "afterLabel", this, t))), s.push(e)
            })), s
        }
        getAfterBody(t, e) {
            return We(Ye(e.callbacks, "afterBody", this, t))
        }
        getFooter(t, e) {
            const {
                callbacks: i
            } = e, s = Ye(i, "beforeFooter", this, t), n = Ye(i, "footer", this, t), o = Ye(i, "afterFooter", this, t);
            let a = [];
            return a = Re(a, Fe(s)), a = Re(a, Fe(n)), a = Re(a, Fe(o)), a
        }
        _createItems(t) {
            const e = this._active,
                i = this.chart.data,
                s = [],
                n = [],
                a = [];
            let r, h, l = [];
            for (r = 0, h = e.length; r < h; ++r) l.push(Ie(this.chart, e[r]));
            return t.filter && (l = l.filter(((e, s, n) => t.filter(e, s, n, i)))), t.itemSort && (l = l.sort(((e, s) => t.itemSort(e, s, i)))), (0, o.F)(l, (e => {
                const i = He(t.callbacks, e);
                s.push(Ye(i, "labelColor", this, e)), n.push(Ye(i, "labelPointStyle", this, e)), a.push(Ye(i, "labelTextColor", this, e))
            })), this.labelColors = s, this.labelPointStyles = n, this.labelTextColors = a, this.dataPoints = l, l
        }
        update(t, e) {
            const i = this.options.setContext(this.getContext()),
                s = this._active;
            let n, o = [];
            if (s.length) {
                const t = Le[i.position].call(this, s, this._eventPosition);
                o = this._createItems(i), this.title = this.getTitle(o, i), this.beforeBody = this.getBeforeBody(o, i), this.body = this.getBody(o, i), this.afterBody = this.getAfterBody(o, i), this.footer = this.getFooter(o, i);
                const e = this._size = ze(this, i),
                    a = Object.assign({}, t, e),
                    r = Be(this.chart, i, a),
                    h = Ne(i, a, r, this.chart);
                this.xAlign = r.xAlign, this.yAlign = r.yAlign, n = {
                    opacity: 1,
                    x: h.x,
                    y: h.y,
                    width: e.width,
                    height: e.height,
                    caretX: t.x,
                    caretY: t.y
                }
            } else 0 !== this.opacity && (n = {
                opacity: 0
            });
            this._tooltipItems = o, this.$context = void 0, n && this._resolveAnimations().update(this, n), t && i.external && i.external.call(this, {
                chart: this.chart,
                tooltip: this,
                replay: e
            })
        }
        drawCaret(t, e, i, s) {
            const n = this.getCaretPosition(t, i, s);
            e.lineTo(n.x1, n.y1), e.lineTo(n.x2, n.y2), e.lineTo(n.x3, n.y3)
        }
        getCaretPosition(t, e, i) {
            const {
                xAlign: s,
                yAlign: n
            } = this, {
                caretSize: a,
                cornerRadius: r
            } = i, {
                topLeft: h,
                topRight: l,
                bottomLeft: c,
                bottomRight: d
            } = (0, o.aw)(r), {
                x: u,
                y: f
            } = t, {
                width: g,
                height: p
            } = e;
            let m, x, b, _, y, v;
            return "center" === n ? (y = f + p / 2, "left" === s ? (m = u, x = m - a, _ = y + a, v = y - a) : (m = u + g, x = m + a, _ = y - a, v = y + a), b = m) : (x = "left" === s ? u + Math.max(h, c) + a : "right" === s ? u + g - Math.max(l, d) - a : this.caretX, "top" === n ? (_ = f, y = _ - a, m = x - a, b = x + a) : (_ = f + p, y = _ + a, m = x + a, b = x - a), v = _), {
                x1: m,
                x2: x,
                x3: b,
                y1: _,
                y2: y,
                y3: v
            }
        }
        drawTitle(t, e, i) {
            const s = this.title,
                n = s.length;
            let a, r, h;
            if (n) {
                const l = (0, o.az)(i.rtl, this.x, this.width);
                for (t.x = je(this, i.titleAlign, i), e.textAlign = l.textAlign(i.titleAlign), e.textBaseline = "middle", a = (0, o.a0)(i.titleFont), r = i.titleSpacing, e.fillStyle = i.titleColor, e.font = a.string, h = 0; h < n; ++h) e.fillText(s[h], l.x(t.x), t.y + a.lineHeight / 2), t.y += a.lineHeight + r, h + 1 === n && (t.y += i.titleMarginBottom - r)
            }
        }
        _drawColorBox(t, e, i, s, n) {
            const a = this.labelColors[i],
                r = this.labelPointStyles[i],
                {
                    boxHeight: h,
                    boxWidth: l,
                    boxPadding: c
                } = n,
                d = (0, o.a0)(n.bodyFont),
                u = je(this, "left", n),
                f = s.x(u),
                g = h < d.lineHeight ? (d.lineHeight - h) / 2 : 0,
                p = e.y + g;
            if (n.usePointStyle) {
                const e = {
                        radius: Math.min(l, h) / 2,
                        pointStyle: r.pointStyle,
                        rotation: r.rotation,
                        borderWidth: 1
                    },
                    i = s.leftForLtr(f, l) + l / 2,
                    c = p + h / 2;
                t.strokeStyle = n.multiKeyBackground, t.fillStyle = n.multiKeyBackground, (0, o.at)(t, e, i, c), t.strokeStyle = a.borderColor, t.fillStyle = a.backgroundColor, (0, o.at)(t, e, i, c)
            } else {
                t.lineWidth = (0, o.i)(a.borderWidth) ? Math.max(...Object.values(a.borderWidth)) : a.borderWidth || 1, t.strokeStyle = a.borderColor, t.setLineDash(a.borderDash || []), t.lineDashOffset = a.borderDashOffset || 0;
                const e = s.leftForLtr(f, l - c),
                    i = s.leftForLtr(s.xPlus(f, 1), l - c - 2),
                    r = (0, o.aw)(a.borderRadius);
                Object.values(r).some((t => 0 !== t)) ? (t.beginPath(), t.fillStyle = n.multiKeyBackground, (0, o.au)(t, {
                    x: e,
                    y: p,
                    w: l,
                    h: h,
                    radius: r
                }), t.fill(), t.stroke(), t.fillStyle = a.backgroundColor, t.beginPath(), (0, o.au)(t, {
                    x: i,
                    y: p + 1,
                    w: l - 2,
                    h: h - 2,
                    radius: r
                }), t.fill()) : (t.fillStyle = n.multiKeyBackground, t.fillRect(e, p, l, h), t.strokeRect(e, p, l, h), t.fillStyle = a.backgroundColor, t.fillRect(i, p + 1, l - 2, h - 2))
            }
            t.fillStyle = this.labelTextColors[i]
        }
        drawBody(t, e, i) {
            const {
                body: s
            } = this, {
                bodySpacing: n,
                bodyAlign: a,
                displayColors: r,
                boxHeight: h,
                boxWidth: l,
                boxPadding: c
            } = i, d = (0, o.a0)(i.bodyFont);
            let u = d.lineHeight,
                f = 0;
            const g = (0, o.az)(i.rtl, this.x, this.width),
                p = function(i) {
                    e.fillText(i, g.x(t.x + f), t.y + u / 2), t.y += u + n
                },
                m = g.textAlign(a);
            let x, b, _, y, v, M, w;
            for (e.textAlign = a, e.textBaseline = "middle", e.font = d.string, t.x = je(this, m, i), e.fillStyle = i.bodyColor, (0, o.F)(this.beforeBody, p), f = r && "right" !== m ? "center" === a ? l / 2 + c : l + 2 + c : 0, y = 0, M = s.length; y < M; ++y) {
                for (x = s[y], b = this.labelTextColors[y], e.fillStyle = b, (0, o.F)(x.before, p), _ = x.lines, r && _.length && (this._drawColorBox(e, t, y, g, i), u = Math.max(d.lineHeight, h)), v = 0, w = _.length; v < w; ++v) p(_[v]), u = d.lineHeight;
                (0, o.F)(x.after, p)
            }
            f = 0, u = d.lineHeight, (0, o.F)(this.afterBody, p), t.y -= n
        }
        drawFooter(t, e, i) {
            const s = this.footer,
                n = s.length;
            let a, r;
            if (n) {
                const h = (0, o.az)(i.rtl, this.x, this.width);
                for (t.x = je(this, i.footerAlign, i), t.y += i.footerMarginTop, e.textAlign = h.textAlign(i.footerAlign), e.textBaseline = "middle", a = (0, o.a0)(i.footerFont), e.fillStyle = i.footerColor, e.font = a.string, r = 0; r < n; ++r) e.fillText(s[r], h.x(t.x), t.y + a.lineHeight / 2), t.y += a.lineHeight + i.footerSpacing
            }
        }
        drawBackground(t, e, i, s) {
            const {
                xAlign: n,
                yAlign: a
            } = this, {
                x: r,
                y: h
            } = t, {
                width: l,
                height: c
            } = i, {
                topLeft: d,
                topRight: u,
                bottomLeft: f,
                bottomRight: g
            } = (0, o.aw)(s.cornerRadius);
            e.fillStyle = s.backgroundColor, e.strokeStyle = s.borderColor, e.lineWidth = s.borderWidth, e.beginPath(), e.moveTo(r + d, h), "top" === a && this.drawCaret(t, e, i, s), e.lineTo(r + l - u, h), e.quadraticCurveTo(r + l, h, r + l, h + u), "center" === a && "right" === n && this.drawCaret(t, e, i, s), e.lineTo(r + l, h + c - g), e.quadraticCurveTo(r + l, h + c, r + l - g, h + c), "bottom" === a && this.drawCaret(t, e, i, s), e.lineTo(r + f, h + c), e.quadraticCurveTo(r, h + c, r, h + c - f), "center" === a && "left" === n && this.drawCaret(t, e, i, s), e.lineTo(r, h + d), e.quadraticCurveTo(r, h, r + d, h), e.closePath(), e.fill(), s.borderWidth > 0 && e.stroke()
        }
        _updateAnimationTarget(t) {
            const e = this.chart,
                i = this.$animations,
                s = i && i.x,
                n = i && i.y;
            if (s || n) {
                const i = Le[t.position].call(this, this._active, this._eventPosition);
                if (!i) return;
                const o = this._size = ze(this, t),
                    a = Object.assign({}, i, this._size),
                    r = Be(e, t, a),
                    h = Ne(t, a, r, e);
                s._to === h.x && n._to === h.y || (this.xAlign = r.xAlign, this.yAlign = r.yAlign, this.width = o.width, this.height = o.height, this.caretX = i.x, this.caretY = i.y, this._resolveAnimations().update(this, h))
            }
        }
        _willRender() {
            return !!this.opacity
        }
        draw(t) {
            const e = this.options.setContext(this.getContext());
            let i = this.opacity;
            if (!i) return;
            this._updateAnimationTarget(e);
            const s = {
                    width: this.width,
                    height: this.height
                },
                n = {
                    x: this.x,
                    y: this.y
                };
            i = Math.abs(i) < .001 ? 0 : i;
            const a = (0, o.E)(e.padding),
                r = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
            e.enabled && r && (t.save(), t.globalAlpha = i, this.drawBackground(n, t, s, e), (0, o.aA)(t, e.textDirection), n.y += a.top, this.drawTitle(n, t, e), this.drawBody(n, t, e), this.drawFooter(n, t, e), (0, o.aC)(t, e.textDirection), t.restore())
        }
        getActiveElements() {
            return this._active || []
        }
        setActiveElements(t, e) {
            const i = this._active,
                s = t.map((({
                    datasetIndex: t,
                    index: e
                }) => {
                    const i = this.chart.getDatasetMeta(t);
                    if (!i) throw new Error("Cannot find a dataset at index " + t);
                    return {
                        datasetIndex: t,
                        element: i.data[e],
                        index: e
                    }
                })),
                n = !(0, o.ah)(i, s),
                a = this._positionChanged(s, e);
            (n || a) && (this._active = s, this._eventPosition = e, this._ignoreReplayEvents = !0, this.update(!0))
        }
        handleEvent(t, e, i = !0) {
            if (e && this._ignoreReplayEvents) return !1;
            this._ignoreReplayEvents = !1;
            const s = this.options,
                n = this._active || [],
                a = this._getActiveElements(t, n, e, i),
                r = this._positionChanged(a, t),
                h = e || !(0, o.ah)(a, n) || r;
            return h && (this._active = a, (s.enabled || s.external) && (this._eventPosition = {
                x: t.x,
                y: t.y
            }, this.update(!0, e))), h
        }
        _getActiveElements(t, e, i, s) {
            const n = this.options;
            if ("mouseout" === t.type) return [];
            if (!s) return e;
            const o = this.chart.getElementsAtEventForMode(t, n.mode, n, i);
            return n.reverse && o.reverse(), o
        }
        _positionChanged(t, e) {
            const {
                caretX: i,
                caretY: s,
                options: n
            } = this, o = Le[n.position].call(this, t, e);
            return !1 !== o && (i !== o.x || s !== o.y)
        }
        constructor(t) {
            super(), this.opacity = 0, this._active = [], this._eventPosition = void 0, this._size = void 0, this._cachedAnimations = void 0, this._tooltipItems = [], this.$animations = void 0, this.$context = void 0, this.chart = t.chart, this.options = t.options, this.dataPoints = void 0, this.title = void 0, this.beforeBody = void 0, this.body = void 0, this.afterBody = void 0, this.footer = void 0, this.xAlign = void 0, this.yAlign = void 0, this.x = void 0, this.y = void 0, this.height = void 0, this.width = void 0, this.caretX = void 0, this.caretY = void 0, this.labelColors = void 0, this.labelPointStyles = void 0, this.labelTextColors = void 0
        }
    }(0, n.default)(Ue, "positioners", Le);

    function Xe(t, e, i, s) {
        const n = t.indexOf(e);
        if (-1 === n) return ((t, e, i, s) => ("string" == typeof e ? (i = t.push(e) - 1, s.unshift({
            index: i,
            label: e
        })) : isNaN(e) && (i = null), i))(t, e, i, s);
        return n !== t.lastIndexOf(e) ? i : n
    }

    function qe(t) {
        const e = this.getLabels();
        return t >= 0 && t < e.length ? e[t] : t
    }
    class Qe extends Ft {
        init(t) {
            const e = this._addedLabels;
            if (e.length) {
                const t = this.getLabels();
                for (const {
                        index: i,
                        label: s
                    }
                    of e) t[i] === s && t.splice(i, 1);
                this._addedLabels = []
            }
            super.init(t)
        }
        parse(t, e) {
            if ((0, o.k)(t)) return null;
            const i = this.getLabels();
            return ((t, e) => null === t ? null : (0, o.S)(Math.round(t), 0, e))(e = isFinite(e) && i[e] === t ? e : Xe(i, t, (0, o.v)(e, t), this._addedLabels), i.length - 1)
        }
        determineDataLimits() {
            const {
                minDefined: t,
                maxDefined: e
            } = this.getUserBounds();
            let {
                min: i,
                max: s
            } = this.getMinMax(!0);
            "ticks" === this.options.bounds && (t || (i = 0), e || (s = this.getLabels().length - 1)), this.min = i, this.max = s
        }
        buildTicks() {
            const t = this.min,
                e = this.max,
                i = this.options.offset,
                s = [];
            let n = this.getLabels();
            n = 0 === t && e === n.length - 1 ? n : n.slice(t, e + 1), this._valueRange = Math.max(n.length - (i ? 0 : 1), 1), this._startValue = this.min - (i ? .5 : 0);
            for (let i = t; i <= e; i++) s.push({
                value: i
            });
            return s
        }
        getLabelForValue(t) {
            return qe.call(this, t)
        }
        configure() {
            super.configure(), this.isHorizontal() || (this._reversePixels = !this._reversePixels)
        }
        getPixelForValue(t) {
            return "number" != typeof t && (t = this.parse(t)), null === t ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange)
        }
        getPixelForTick(t) {
            const e = this.ticks;
            return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value)
        }
        getValueForPixel(t) {
            return Math.round(this._startValue + this.getDecimalForPixel(t) * this._valueRange)
        }
        getBasePixel() {
            return this.bottom
        }
        constructor(t) {
            super(t), this._startValue = void 0, this._valueRange = 0, this._addedLabels = []
        }
    }

    function Ke(t, e, {
        horizontal: i,
        minRotation: s
    }) {
        const n = (0, o.t)(s),
            a = (i ? Math.sin(n) : Math.cos(n)) || .001,
            r = .75 * e * ("" + t).length;
        return Math.min(e / a, r)
    }(0, n.default)(Qe, "id", "category"), (0, n.default)(Qe, "defaults", {
        ticks: {
            callback: qe
        }
    });
    class Ge extends Ft {
        parse(t, e) {
            return (0, o.k)(t) || ("number" == typeof t || t instanceof Number) && !isFinite(+t) ? null : +t
        }
        handleTickRangeOptions() {
            const {
                beginAtZero: t
            } = this.options, {
                minDefined: e,
                maxDefined: i
            } = this.getUserBounds();
            let {
                min: s,
                max: n
            } = this;
            const a = t => s = e ? s : t,
                r = t => n = i ? n : t;
            if (t) {
                const t = (0, o.s)(s),
                    e = (0, o.s)(n);
                t < 0 && e < 0 ? r(0) : t > 0 && e > 0 && a(0)
            }
            if (s === n) {
                let e = 0 === n ? 1 : Math.abs(.05 * n);
                r(n + e), t || a(s - e)
            }
            this.min = s, this.max = n
        }
        getTickLimit() {
            const t = this.options.ticks;
            let e, {
                maxTicksLimit: i,
                stepSize: s
            } = t;
            return s ? (e = Math.ceil(this.max / s) - Math.floor(this.min / s) + 1, e > 1e3 && (console.warn(`scales.${this.id}.ticks.stepSize: ${s} would result generating up to ${e} ticks. Limiting to 1000.`), e = 1e3)) : (e = this.computeTickLimit(), i = i || 11), i && (e = Math.min(i, e)), e
        }
        computeTickLimit() {
            return Number.POSITIVE_INFINITY
        }
        buildTicks() {
            const t = this.options,
                e = t.ticks;
            let i = this.getTickLimit();
            i = Math.max(2, i);
            const s = function(t, e) {
                const i = [],
                    {
                        bounds: s,
                        step: n,
                        min: a,
                        max: r,
                        precision: h,
                        count: l,
                        maxTicks: c,
                        maxDigits: d,
                        includeBounds: u
                    } = t,
                    f = n || 1,
                    g = c - 1,
                    {
                        min: p,
                        max: m
                    } = e,
                    x = !(0, o.k)(a),
                    b = !(0, o.k)(r),
                    _ = !(0, o.k)(l),
                    y = (m - p) / (d + 1);
                let v, M, w, k, S = (0, o.aH)((m - p) / g / f) * f;
                if (S < 1e-14 && !x && !b) return [{
                    value: p
                }, {
                    value: m
                }];
                k = Math.ceil(m / S) - Math.floor(p / S), k > g && (S = (0, o.aH)(k * S / g / f) * f), (0, o.k)(h) || (v = Math.pow(10, h), S = Math.ceil(S * v) / v), "ticks" === s ? (M = Math.floor(p / S) * S, w = Math.ceil(m / S) * S) : (M = p, w = m), x && b && n && (0, o.aI)((r - a) / n, S / 1e3) ? (k = Math.round(Math.min((r - a) / S, c)), S = (r - a) / k, M = a, w = r) : _ ? (M = x ? a : M, w = b ? r : w, k = l - 1, S = (w - M) / k) : (k = (w - M) / S, k = (0, o.aJ)(k, Math.round(k), S / 1e3) ? Math.round(k) : Math.ceil(k));
                const P = Math.max((0, o.aK)(S), (0, o.aK)(M));
                v = Math.pow(10, (0, o.k)(h) ? P : h), M = Math.round(M * v) / v, w = Math.round(w * v) / v;
                let O = 0;
                for (x && (u && M !== a ? (i.push({
                        value: a
                    }), M < a && O++, (0, o.aJ)(Math.round((M + O * S) * v) / v, a, Ke(a, y, t)) && O++) : M < a && O++); O < k; ++O) i.push({
                    value: Math.round((M + O * S) * v) / v
                });
                return b && u && w !== r ? i.length && (0, o.aJ)(i[i.length - 1].value, r, Ke(r, y, t)) ? i[i.length - 1].value = r : i.push({
                    value: r
                }) : b && w !== r || i.push({
                    value: w
                }), i
            }({
                maxTicks: i,
                bounds: t.bounds,
                min: t.min,
                max: t.max,
                precision: e.precision,
                step: e.stepSize,
                count: e.count,
                maxDigits: this._maxDigits(),
                horizontal: this.isHorizontal(),
                minRotation: e.minRotation || 0,
                includeBounds: !1 !== e.includeBounds
            }, this._range || this);
            return "ticks" === t.bounds && (0, o.aG)(s, this, "value"), t.reverse ? (s.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), s
        }
        configure() {
            const t = this.ticks;
            let e = this.min,
                i = this.max;
            if (super.configure(), this.options.offset && t.length) {
                const s = (i - e) / Math.max(t.length - 1, 1) / 2;
                e -= s, i += s
            }
            this._startValue = e, this._endValue = i, this._valueRange = i - e
        }
        getLabelForValue(t) {
            return (0, o.o)(t, this.chart.options.locale, this.options.ticks.format)
        }
        constructor(t) {
            super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._endValue = void 0, this._valueRange = 0
        }
    }
    class Ze extends Ge {
        determineDataLimits() {
            const {
                min: t,
                max: e
            } = this.getMinMax(!0);
            this.min = (0, o.g)(t) ? t : 0, this.max = (0, o.g)(e) ? e : 1, this.handleTickRangeOptions()
        }
        computeTickLimit() {
            const t = this.isHorizontal(),
                e = t ? this.width : this.height,
                i = (0, o.t)(this.options.ticks.minRotation),
                s = (t ? Math.sin(i) : Math.cos(i)) || .001,
                n = this._resolveTickFontOptions(0);
            return Math.ceil(e / Math.min(40, n.lineHeight / s))
        }
        getPixelForValue(t) {
            return null === t ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange)
        }
        getValueForPixel(t) {
            return this._startValue + this.getDecimalForPixel(t) * this._valueRange
        }
    }(0, n.default)(Ze, "id", "linear"), (0, n.default)(Ze, "defaults", {
        ticks: {
            callback: o.aL.formatters.numeric
        }
    });
    const Je = t => Math.floor((0, o.aM)(t)),
        ti = (t, e) => Math.pow(10, Je(t) + e);

    function ei(t) {
        return 1 === t / Math.pow(10, Je(t))
    }

    function ii(t, e, i) {
        const s = Math.pow(10, i),
            n = Math.floor(t / s);
        return Math.ceil(e / s) - n
    }

    function si(t, {
        min: e,
        max: i
    }) {
        e = (0, o.O)(t.min, e);
        const s = [],
            n = Je(e);
        let a = function(t, e) {
                let i = Je(e - t);
                for (; ii(t, e, i) > 10;) i++;
                for (; ii(t, e, i) < 10;) i--;
                return Math.min(i, Je(t))
            }(e, i),
            r = a < 0 ? Math.pow(10, Math.abs(a)) : 1;
        const h = Math.pow(10, a),
            l = n > a ? Math.pow(10, n) : 0,
            c = Math.round((e - l) * r) / r,
            d = Math.floor((e - l) / h / 10) * h * 10;
        let u = Math.floor((c - d) / Math.pow(10, a)),
            f = (0, o.O)(t.min, Math.round((l + d + u * Math.pow(10, a)) * r) / r);
        for (; f < i;) s.push({
            value: f,
            major: ei(f),
            significand: u
        }), u >= 10 ? u = u < 15 ? 15 : 20 : u++, u >= 20 && (a++, u = 2, r = a >= 0 ? 1 : r), f = Math.round((l + d + u * Math.pow(10, a)) * r) / r;
        const g = (0, o.O)(t.max, f);
        return s.push({
            value: g,
            major: ei(g),
            significand: u
        }), s
    }
    class ni extends Ft {
        parse(t, e) {
            const i = Ge.prototype.parse.apply(this, [t, e]);
            if (0 !== i) return (0, o.g)(i) && i > 0 ? i : null;
            this._zero = !0
        }
        determineDataLimits() {
            const {
                min: t,
                max: e
            } = this.getMinMax(!0);
            this.min = (0, o.g)(t) ? Math.max(0, t) : null, this.max = (0, o.g)(e) ? Math.max(0, e) : null, this.options.beginAtZero && (this._zero = !0), this._zero && this.min !== this._suggestedMin && !(0, o.g)(this._userMin) && (this.min = t === ti(this.min, 0) ? ti(this.min, -1) : ti(this.min, 0)), this.handleTickRangeOptions()
        }
        handleTickRangeOptions() {
            const {
                minDefined: t,
                maxDefined: e
            } = this.getUserBounds();
            let i = this.min,
                s = this.max;
            const n = e => i = t ? i : e,
                o = t => s = e ? s : t;
            i === s && (i <= 0 ? (n(1), o(10)) : (n(ti(i, -1)), o(ti(s, 1)))), i <= 0 && n(ti(s, -1)), s <= 0 && o(ti(i, 1)), this.min = i, this.max = s
        }
        buildTicks() {
            const t = this.options,
                e = si({
                    min: this._userMin,
                    max: this._userMax
                }, this);
            return "ticks" === t.bounds && (0, o.aG)(e, this, "value"), t.reverse ? (e.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), e
        }
        getLabelForValue(t) {
            return void 0 === t ? "0" : (0, o.o)(t, this.chart.options.locale, this.options.ticks.format)
        }
        configure() {
            const t = this.min;
            super.configure(), this._startValue = (0, o.aM)(t), this._valueRange = (0, o.aM)(this.max) - (0, o.aM)(t)
        }
        getPixelForValue(t) {
            return void 0 !== t && 0 !== t || (t = this.min), null === t || isNaN(t) ? NaN : this.getPixelForDecimal(t === this.min ? 0 : ((0, o.aM)(t) - this._startValue) / this._valueRange)
        }
        getValueForPixel(t) {
            const e = this.getDecimalForPixel(t);
            return Math.pow(10, this._startValue + e * this._valueRange)
        }
        constructor(t) {
            super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._valueRange = 0
        }
    }

    function oi(t) {
        const e = t.ticks;
        if (e.display && t.display) {
            const t = (0, o.E)(e.backdropPadding);
            return (0, o.v)(e.font && e.font.size, o.d.font.size) + t.height
        }
        return 0
    }

    function ai(t, e, i, s, n) {
        return t === s || t === n ? {
            start: e - i / 2,
            end: e + i / 2
        } : t < s || t > n ? {
            start: e - i,
            end: e
        } : {
            start: e,
            end: e + i
        }
    }

    function ri(t) {
        const e = {
                l: t.left + t._padding.left,
                r: t.right - t._padding.right,
                t: t.top + t._padding.top,
                b: t.bottom - t._padding.bottom
            },
            i = Object.assign({}, e),
            s = [],
            n = [],
            a = t._pointLabels.length,
            r = t.options.pointLabels,
            h = r.centerPointLabels ? o.P / a : 0;
        for (let u = 0; u < a; u++) {
            const a = r.setContext(t.getPointLabelContext(u));
            n[u] = a.padding;
            const f = t.getPointPosition(u, t.drawingArea + n[u], h),
                g = (0, o.a0)(a.font),
                p = (l = t.ctx, c = g, d = t._pointLabels[u], d = (0, o.b)(d) ? d : [d], {
                    w: (0, o.aN)(l, c.string, d),
                    h: d.length * c.lineHeight
                });
            s[u] = p;
            const m = (0, o.ay)(t.getIndexAngle(u) + h),
                x = Math.round((0, o.U)(m));
            hi(i, e, m, ai(x, f.x, p.w, 0, 180), ai(x, f.y, p.h, 90, 270))
        }
        var l, c, d;
        t.setCenterPoint(e.l - i.l, i.r - e.r, e.t - i.t, i.b - e.b), t._pointLabelItems = function(t, e, i) {
            const s = [],
                n = t._pointLabels.length,
                a = t.options,
                r = oi(a) / 2,
                h = t.drawingArea,
                l = a.pointLabels.centerPointLabels ? o.P / n : 0;
            for (let a = 0; a < n; a++) {
                const n = t.getPointPosition(a, h + r + i[a], l),
                    c = Math.round((0, o.U)((0, o.ay)(n.angle + o.H))),
                    d = e[a],
                    u = di(n.y, d.h, c),
                    f = li(c),
                    g = ci(n.x, d.w, f);
                s.push({
                    x: n.x,
                    y: u,
                    textAlign: f,
                    left: g,
                    top: u,
                    right: g + d.w,
                    bottom: u + d.h
                })
            }
            return s
        }(t, s, n)
    }

    function hi(t, e, i, s, n) {
        const o = Math.abs(Math.sin(i)),
            a = Math.abs(Math.cos(i));
        let r = 0,
            h = 0;
        s.start < e.l ? (r = (e.l - s.start) / o, t.l = Math.min(t.l, e.l - r)) : s.end > e.r && (r = (s.end - e.r) / o, t.r = Math.max(t.r, e.r + r)), n.start < e.t ? (h = (e.t - n.start) / a, t.t = Math.min(t.t, e.t - h)) : n.end > e.b && (h = (n.end - e.b) / a, t.b = Math.max(t.b, e.b + h))
    }

    function li(t) {
        return 0 === t || 180 === t ? "center" : t < 180 ? "left" : "right"
    }

    function ci(t, e, i) {
        return "right" === i ? t -= e : "center" === i && (t -= e / 2), t
    }

    function di(t, e, i) {
        return 90 === i || 270 === i ? t -= e / 2 : (i > 270 || i < 90) && (t -= e), t
    }

    function ui(t, e, i, s) {
        const {
            ctx: n
        } = t;
        if (i) n.arc(t.xCenter, t.yCenter, e, 0, o.T);
        else {
            let i = t.getPointPosition(0, e);
            n.moveTo(i.x, i.y);
            for (let o = 1; o < s; o++) i = t.getPointPosition(o, e), n.lineTo(i.x, i.y)
        }
    }(0, n.default)(ni, "id", "logarithmic"), (0, n.default)(ni, "defaults", {
        ticks: {
            callback: o.aL.formatters.logarithmic,
            major: {
                enabled: !0
            }
        }
    });
    class fi extends Ge {
        setDimensions() {
            const t = this._padding = (0, o.E)(oi(this.options) / 2),
                e = this.width = this.maxWidth - t.width,
                i = this.height = this.maxHeight - t.height;
            this.xCenter = Math.floor(this.left + e / 2 + t.left), this.yCenter = Math.floor(this.top + i / 2 + t.top), this.drawingArea = Math.floor(Math.min(e, i) / 2)
        }
        determineDataLimits() {
            const {
                min: t,
                max: e
            } = this.getMinMax(!1);
            this.min = (0, o.g)(t) && !isNaN(t) ? t : 0, this.max = (0, o.g)(e) && !isNaN(e) ? e : 0, this.handleTickRangeOptions()
        }
        computeTickLimit() {
            return Math.ceil(this.drawingArea / oi(this.options))
        }
        generateTickLabels(t) {
            Ge.prototype.generateTickLabels.call(this, t), this._pointLabels = this.getLabels().map(((t, e) => {
                const i = (0, o.Q)(this.options.pointLabels.callback, [t, e], this);
                return i || 0 === i ? i : ""
            })).filter(((t, e) => this.chart.getDataVisibility(e)))
        }
        fit() {
            const t = this.options;
            t.display && t.pointLabels.display ? ri(this) : this.setCenterPoint(0, 0, 0, 0)
        }
        setCenterPoint(t, e, i, s) {
            this.xCenter += Math.floor((t - e) / 2), this.yCenter += Math.floor((i - s) / 2), this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(t, e, i, s))
        }
        getIndexAngle(t) {
            const e = o.T / (this._pointLabels.length || 1),
                i = this.options.startAngle || 0;
            return (0, o.ay)(t * e + (0, o.t)(i))
        }
        getDistanceFromCenterForValue(t) {
            if ((0, o.k)(t)) return NaN;
            const e = this.drawingArea / (this.max - this.min);
            return this.options.reverse ? (this.max - t) * e : (t - this.min) * e
        }
        getValueForDistanceFromCenter(t) {
            if ((0, o.k)(t)) return NaN;
            const e = t / (this.drawingArea / (this.max - this.min));
            return this.options.reverse ? this.max - e : this.min + e
        }
        getPointLabelContext(t) {
            const e = this._pointLabels || [];
            if (t >= 0 && t < e.length) {
                const i = e[t];
                return function(t, e, i) {
                    return (0, o.j)(t, {
                        label: i,
                        index: e,
                        type: "pointLabel"
                    })
                }(this.getContext(), t, i)
            }
        }
        getPointPosition(t, e, i = 0) {
            const s = this.getIndexAngle(t) - o.H + i;
            return {
                x: Math.cos(s) * e + this.xCenter,
                y: Math.sin(s) * e + this.yCenter,
                angle: s
            }
        }
        getPointPositionForValue(t, e) {
            return this.getPointPosition(t, this.getDistanceFromCenterForValue(e))
        }
        getBasePosition(t) {
            return this.getPointPositionForValue(t || 0, this.getBaseValue())
        }
        getPointLabelPosition(t) {
            const {
                left: e,
                top: i,
                right: s,
                bottom: n
            } = this._pointLabelItems[t];
            return {
                left: e,
                top: i,
                right: s,
                bottom: n
            }
        }
        drawBackground() {
            const {
                backgroundColor: t,
                grid: {
                    circular: e
                }
            } = this.options;
            if (t) {
                const i = this.ctx;
                i.save(), i.beginPath(), ui(this, this.getDistanceFromCenterForValue(this._endValue), e, this._pointLabels.length), i.closePath(), i.fillStyle = t, i.fill(), i.restore()
            }
        }
        drawGrid() {
            const t = this.ctx,
                e = this.options,
                {
                    angleLines: i,
                    grid: s,
                    border: n
                } = e,
                a = this._pointLabels.length;
            let r, h, l;
            if (e.pointLabels.display && function(t, e) {
                    const {
                        ctx: i,
                        options: {
                            pointLabels: s
                        }
                    } = t;
                    for (let n = e - 1; n >= 0; n--) {
                        const e = s.setContext(t.getPointLabelContext(n)),
                            a = (0, o.a0)(e.font),
                            {
                                x: r,
                                y: h,
                                textAlign: l,
                                left: c,
                                top: d,
                                right: u,
                                bottom: f
                            } = t._pointLabelItems[n],
                            {
                                backdropColor: g
                            } = e;
                        if (!(0, o.k)(g)) {
                            const t = (0, o.aw)(e.borderRadius),
                                s = (0, o.E)(e.backdropPadding);
                            i.fillStyle = g;
                            const n = c - s.left,
                                a = d - s.top,
                                r = u - c + s.width,
                                h = f - d + s.height;
                            Object.values(t).some((t => 0 !== t)) ? (i.beginPath(), (0, o.au)(i, {
                                x: n,
                                y: a,
                                w: r,
                                h: h,
                                radius: t
                            }), i.fill()) : i.fillRect(n, a, r, h)
                        }(0, o.Z)(i, t._pointLabels[n], r, h + a.lineHeight / 2, a, {
                            color: e.color,
                            textAlign: l,
                            textBaseline: "middle"
                        })
                    }
                }(this, a), s.display && this.ticks.forEach(((t, e) => {
                    if (0 !== e) {
                        h = this.getDistanceFromCenterForValue(t.value);
                        const i = this.getContext(e),
                            o = s.setContext(i),
                            r = n.setContext(i);
                        ! function(t, e, i, s, n) {
                            const o = t.ctx,
                                a = e.circular,
                                {
                                    color: r,
                                    lineWidth: h
                                } = e;
                            !a && !s || !r || !h || i < 0 || (o.save(), o.strokeStyle = r, o.lineWidth = h, o.setLineDash(n.dash), o.lineDashOffset = n.dashOffset, o.beginPath(), ui(t, i, a, s), o.closePath(), o.stroke(), o.restore())
                        }(this, o, h, a, r)
                    }
                })), i.display) {
                for (t.save(), r = a - 1; r >= 0; r--) {
                    const s = i.setContext(this.getPointLabelContext(r)),
                        {
                            color: n,
                            lineWidth: o
                        } = s;
                    o && n && (t.lineWidth = o, t.strokeStyle = n, t.setLineDash(s.borderDash), t.lineDashOffset = s.borderDashOffset, h = this.getDistanceFromCenterForValue(e.ticks.reverse ? this.min : this.max), l = this.getPointPosition(r, h), t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(l.x, l.y), t.stroke())
                }
                t.restore()
            }
        }
        drawBorder() {}
        drawLabels() {
            const t = this.ctx,
                e = this.options,
                i = e.ticks;
            if (!i.display) return;
            const s = this.getIndexAngle(0);
            let n, a;
            t.save(), t.translate(this.xCenter, this.yCenter), t.rotate(s), t.textAlign = "center", t.textBaseline = "middle", this.ticks.forEach(((s, r) => {
                if (0 === r && !e.reverse) return;
                const h = i.setContext(this.getContext(r)),
                    l = (0, o.a0)(h.font);
                if (n = this.getDistanceFromCenterForValue(this.ticks[r].value), h.showLabelBackdrop) {
                    t.font = l.string, a = t.measureText(s.label).width, t.fillStyle = h.backdropColor;
                    const e = (0, o.E)(h.backdropPadding);
                    t.fillRect(-a / 2 - e.left, -n - l.size / 2 - e.top, a + e.width, l.size + e.height)
                }(0, o.Z)(t, s.label, 0, -n, l, {
                    color: h.color
                })
            })), t.restore()
        }
        drawTitle() {}
        constructor(t) {
            super(t), this.xCenter = void 0, this.yCenter = void 0, this.drawingArea = void 0, this._pointLabels = [], this._pointLabelItems = []
        }
    }(0, n.default)(fi, "id", "radialLinear"), (0, n.default)(fi, "defaults", {
        display: !0,
        animate: !0,
        position: "chartArea",
        angleLines: {
            display: !0,
            lineWidth: 1,
            borderDash: [],
            borderDashOffset: 0
        },
        grid: {
            circular: !1
        },
        startAngle: 0,
        ticks: {
            showLabelBackdrop: !0,
            callback: o.aL.formatters.numeric
        },
        pointLabels: {
            backdropColor: void 0,
            backdropPadding: 2,
            display: !0,
            font: {
                size: 10
            },
            callback: t => t,
            padding: 5,
            centerPointLabels: !1
        }
    }), (0, n.default)(fi, "defaultRoutes", {
        "angleLines.color": "borderColor",
        "pointLabels.color": "color",
        "ticks.color": "color"
    }), (0, n.default)(fi, "descriptors", {
        angleLines: {
            _fallback: "grid"
        }
    });
    const gi = {
            millisecond: {
                common: !0,
                size: 1,
                steps: 1e3
            },
            second: {
                common: !0,
                size: 1e3,
                steps: 60
            },
            minute: {
                common: !0,
                size: 6e4,
                steps: 60
            },
            hour: {
                common: !0,
                size: 36e5,
                steps: 24
            },
            day: {
                common: !0,
                size: 864e5,
                steps: 30
            },
            week: {
                common: !1,
                size: 6048e5,
                steps: 4
            },
            month: {
                common: !0,
                size: 2628e6,
                steps: 12
            },
            quarter: {
                common: !1,
                size: 7884e6,
                steps: 4
            },
            year: {
                common: !0,
                size: 3154e7
            }
        },
        pi = Object.keys(gi);

    function mi(t, e) {
        return t - e
    }

    function xi(t, e) {
        if ((0, o.k)(e)) return null;
        const i = t._adapter,
            {
                parser: s,
                round: n,
                isoWeekday: a
            } = t._parseOpts;
        let r = e;
        return "function" == typeof s && (r = s(r)), (0, o.g)(r) || (r = "string" == typeof s ? i.parse(r, s) : i.parse(r)), null === r ? null : (n && (r = "week" !== n || !(0, o.x)(a) && !0 !== a ? i.startOf(r, n) : i.startOf(r, "isoWeek", a)), +r)
    }

    function bi(t, e, i, s) {
        const n = pi.length;
        for (let o = pi.indexOf(t); o < n - 1; ++o) {
            const t = gi[pi[o]],
                n = t.steps ? t.steps : Number.MAX_SAFE_INTEGER;
            if (t.common && Math.ceil((i - e) / (n * t.size)) <= s) return pi[o]
        }
        return pi[n - 1]
    }

    function _i(t, e, i) {
        if (i) {
            if (i.length) {
                const {
                    lo: s,
                    hi: n
                } = (0, o.aP)(i, e);
                t[i[s] >= e ? i[s] : i[n]] = !0
            }
        } else t[e] = !0
    }

    function yi(t, e, i) {
        const s = [],
            n = {},
            o = e.length;
        let a, r;
        for (a = 0; a < o; ++a) r = e[a], n[r] = a, s.push({
            value: r,
            major: !1
        });
        return 0 !== o && i ? function(t, e, i, s) {
            const n = t._adapter,
                o = +n.startOf(e[0].value, s),
                a = e[e.length - 1].value;
            let r, h;
            for (r = o; r <= a; r = +n.add(r, 1, s)) h = i[r], h >= 0 && (e[h].major = !0);
            return e
        }(t, s, n, i) : s
    }
    class vi extends Ft {
        init(t, e = {}) {
            const i = t.time || (t.time = {}),
                s = this._adapter = new W(t.adapters.date);
            s.init(e), (0, o.ab)(i.displayFormats, s.formats()), this._parseOpts = {
                parser: i.parser,
                round: i.round,
                isoWeekday: i.isoWeekday
            }, super.init(t), this._normalized = e.normalized
        }
        parse(t, e) {
            return void 0 === t ? null : xi(this, t)
        }
        beforeLayout() {
            super.beforeLayout(), this._cache = {
                data: [],
                labels: [],
                all: []
            }
        }
        determineDataLimits() {
            const t = this.options,
                e = this._adapter,
                i = t.time.unit || "day";
            let {
                min: s,
                max: n,
                minDefined: a,
                maxDefined: r
            } = this.getUserBounds();

            function h(t) {
                a || isNaN(t.min) || (s = Math.min(s, t.min)), r || isNaN(t.max) || (n = Math.max(n, t.max))
            }
            a && r || (h(this._getLabelBounds()), "ticks" === t.bounds && "labels" === t.ticks.source || h(this.getMinMax(!1))), s = (0, o.g)(s) && !isNaN(s) ? s : +e.startOf(Date.now(), i), n = (0, o.g)(n) && !isNaN(n) ? n : +e.endOf(Date.now(), i) + 1, this.min = Math.min(s, n - 1), this.max = Math.max(s + 1, n)
        }
        _getLabelBounds() {
            const t = this.getLabelTimestamps();
            let e = Number.POSITIVE_INFINITY,
                i = Number.NEGATIVE_INFINITY;
            return t.length && (e = t[0], i = t[t.length - 1]), {
                min: e,
                max: i
            }
        }
        buildTicks() {
            const t = this.options,
                e = t.time,
                i = t.ticks,
                s = "labels" === i.source ? this.getLabelTimestamps() : this._generate();
            "ticks" === t.bounds && s.length && (this.min = this._userMin || s[0], this.max = this._userMax || s[s.length - 1]);
            const n = this.min,
                a = this.max,
                r = (0, o.aO)(s, n, a);
            return this._unit = e.unit || (i.autoSkip ? bi(e.minUnit, this.min, this.max, this._getLabelCapacity(n)) : function(t, e, i, s, n) {
                for (let o = pi.length - 1; o >= pi.indexOf(i); o--) {
                    const i = pi[o];
                    if (gi[i].common && t._adapter.diff(n, s, i) >= e - 1) return i
                }
                return pi[i ? pi.indexOf(i) : 0]
            }(this, r.length, e.minUnit, this.min, this.max)), this._majorUnit = i.major.enabled && "year" !== this._unit ? function(t) {
                for (let e = pi.indexOf(t) + 1, i = pi.length; e < i; ++e)
                    if (gi[pi[e]].common) return pi[e]
            }(this._unit) : void 0, this.initOffsets(s), t.reverse && r.reverse(), yi(this, r, this._majorUnit)
        }
        afterAutoSkip() {
            this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map((t => +t.value)))
        }
        initOffsets(t = []) {
            let e, i, s = 0,
                n = 0;
            this.options.offset && t.length && (e = this.getDecimalForValue(t[0]), s = 1 === t.length ? 1 - e : (this.getDecimalForValue(t[1]) - e) / 2, i = this.getDecimalForValue(t[t.length - 1]), n = 1 === t.length ? i : (i - this.getDecimalForValue(t[t.length - 2])) / 2);
            const a = t.length < 3 ? .5 : .25;
            s = (0, o.S)(s, 0, a), n = (0, o.S)(n, 0, a), this._offsets = {
                start: s,
                end: n,
                factor: 1 / (s + 1 + n)
            }
        }
        _generate() {
            const t = this._adapter,
                e = this.min,
                i = this.max,
                s = this.options,
                n = s.time,
                a = n.unit || bi(n.minUnit, e, i, this._getLabelCapacity(e)),
                r = (0, o.v)(s.ticks.stepSize, 1),
                h = "week" === a && n.isoWeekday,
                l = (0, o.x)(h) || !0 === h,
                c = {};
            let d, u, f = e;
            if (l && (f = +t.startOf(f, "isoWeek", h)), f = +t.startOf(f, l ? "day" : a), t.diff(i, e, a) > 1e5 * r) throw new Error(e + " and " + i + " are too far apart with stepSize of " + r + " " + a);
            const g = "data" === s.ticks.source && this.getDataTimestamps();
            for (d = f, u = 0; d < i; d = +t.add(d, r, a), u++) _i(c, d, g);
            return d !== i && "ticks" !== s.bounds && 1 !== u || _i(c, d, g), Object.keys(c).sort(((t, e) => t - e)).map((t => +t))
        }
        getLabelForValue(t) {
            const e = this._adapter,
                i = this.options.time;
            return i.tooltipFormat ? e.format(t, i.tooltipFormat) : e.format(t, i.displayFormats.datetime)
        }
        format(t, e) {
            const i = this.options.time.displayFormats,
                s = this._unit,
                n = e || i[s];
            return this._adapter.format(t, n)
        }
        _tickFormatFunction(t, e, i, s) {
            const n = this.options,
                a = n.ticks.callback;
            if (a) return (0, o.Q)(a, [t, e, i], this);
            const r = n.time.displayFormats,
                h = this._unit,
                l = this._majorUnit,
                c = h && r[h],
                d = l && r[l],
                u = i[e],
                f = l && d && u && u.major;
            return this._adapter.format(t, s || (f ? d : c))
        }
        generateTickLabels(t) {
            let e, i, s;
            for (e = 0, i = t.length; e < i; ++e) s = t[e], s.label = this._tickFormatFunction(s.value, e, t)
        }
        getDecimalForValue(t) {
            return null === t ? NaN : (t - this.min) / (this.max - this.min)
        }
        getPixelForValue(t) {
            const e = this._offsets,
                i = this.getDecimalForValue(t);
            return this.getPixelForDecimal((e.start + i) * e.factor)
        }
        getValueForPixel(t) {
            const e = this._offsets,
                i = this.getDecimalForPixel(t) / e.factor - e.end;
            return this.min + i * (this.max - this.min)
        }
        _getLabelSize(t) {
            const e = this.options.ticks,
                i = this.ctx.measureText(t).width,
                s = (0, o.t)(this.isHorizontal() ? e.maxRotation : e.minRotation),
                n = Math.cos(s),
                a = Math.sin(s),
                r = this._resolveTickFontOptions(0).size;
            return {
                w: i * n + r * a,
                h: i * a + r * n
            }
        }
        _getLabelCapacity(t) {
            const e = this.options.time,
                i = e.displayFormats,
                s = i[e.unit] || i.millisecond,
                n = this._tickFormatFunction(t, 0, yi(this, [t], this._majorUnit), s),
                o = this._getLabelSize(n),
                a = Math.floor(this.isHorizontal() ? this.width / o.w : this.height / o.h) - 1;
            return a > 0 ? a : 1
        }
        getDataTimestamps() {
            let t, e, i = this._cache.data || [];
            if (i.length) return i;
            const s = this.getMatchingVisibleMetas();
            if (this._normalized && s.length) return this._cache.data = s[0].controller.getAllParsedValues(this);
            for (t = 0, e = s.length; t < e; ++t) i = i.concat(s[t].controller.getAllParsedValues(this));
            return this._cache.data = this.normalize(i)
        }
        getLabelTimestamps() {
            const t = this._cache.labels || [];
            let e, i;
            if (t.length) return t;
            const s = this.getLabels();
            for (e = 0, i = s.length; e < i; ++e) t.push(xi(this, s[e]));
            return this._cache.labels = this._normalized ? t : this.normalize(t)
        }
        normalize(t) {
            return (0, o._)(t.sort(mi))
        }
        constructor(t) {
            super(t), this._cache = {
                data: [],
                labels: [],
                all: []
            }, this._unit = "day", this._majorUnit = void 0, this._offsets = {}, this._normalized = !1, this._parseOpts = void 0
        }
    }

    function Mi(t, e, i) {
        let s, n, a, r, h = 0,
            l = t.length - 1;
        i ? (e >= t[h].pos && e <= t[l].pos && ({
            lo: h,
            hi: l
        } = (0, o.B)(t, "pos", e)), ({
            pos: s,
            time: a
        } = t[h]), ({
            pos: n,
            time: r
        } = t[l])) : (e >= t[h].time && e <= t[l].time && ({
            lo: h,
            hi: l
        } = (0, o.B)(t, "time", e)), ({
            time: s,
            pos: a
        } = t[h]), ({
            time: n,
            pos: r
        } = t[l]));
        const c = n - s;
        return c ? a + (r - a) * (e - s) / c : a
    }(0, n.default)(vi, "id", "time"), (0, n.default)(vi, "defaults", {
        bounds: "data",
        adapters: {},
        time: {
            parser: !1,
            unit: !1,
            round: !1,
            isoWeekday: !1,
            minUnit: "millisecond",
            displayFormats: {}
        },
        ticks: {
            source: "auto",
            callback: !1,
            major: {
                enabled: !1
            }
        }
    });
    class wi extends vi {
        initOffsets() {
            const t = this._getTimestampsForTable(),
                e = this._table = this.buildLookupTable(t);
            this._minPos = Mi(e, this.min), this._tableRange = Mi(e, this.max) - this._minPos, super.initOffsets(t)
        }
        buildLookupTable(t) {
            const {
                min: e,
                max: i
            } = this, s = [], n = [];
            let o, a, r, h, l;
            for (o = 0, a = t.length; o < a; ++o) h = t[o], h >= e && h <= i && s.push(h);
            if (s.length < 2) return [{
                time: e,
                pos: 0
            }, {
                time: i,
                pos: 1
            }];
            for (o = 0, a = s.length; o < a; ++o) l = s[o + 1], r = s[o - 1], h = s[o], Math.round((l + r) / 2) !== h && n.push({
                time: h,
                pos: o / (a - 1)
            });
            return n
        }
        _getTimestampsForTable() {
            let t = this._cache.all || [];
            if (t.length) return t;
            const e = this.getDataTimestamps(),
                i = this.getLabelTimestamps();
            return t = e.length && i.length ? this.normalize(e.concat(i)) : e.length ? e : i, t = this._cache.all = t, t
        }
        getDecimalForValue(t) {
            return (Mi(this._table, t) - this._minPos) / this._tableRange
        }
        getValueForPixel(t) {
            const e = this._offsets,
                i = this.getDecimalForPixel(t) / e.factor - e.end;
            return Mi(this._table, i * this._tableRange + this._minPos, !0)
        }
        constructor(t) {
            super(t), this._table = [], this._minPos = void 0, this._tableRange = void 0
        }
    }(0, n.default)(wi, "id", "timeseries"), (0, n.default)(wi, "defaults", vi.defaults)
})), i.register("aGgio", (function(e, s) {
    t(e.exports, "aF", (function() {
        return o
    })), t(e.exports, "ac", (function() {
        return a
    })), t(e.exports, "k", (function() {
        return r
    })), t(e.exports, "b", (function() {
        return h
    })), t(e.exports, "i", (function() {
        return l
    })), t(e.exports, "g", (function() {
        return c
    })), t(e.exports, "O", (function() {
        return d
    })), t(e.exports, "v", (function() {
        return u
    })), t(e.exports, "m", (function() {
        return f
    })), t(e.exports, "n", (function() {
        return g
    })), t(e.exports, "Q", (function() {
        return p
    })), t(e.exports, "F", (function() {
        return m
    })), t(e.exports, "ah", (function() {
        return x
    })), t(e.exports, "a4", (function() {
        return v
    })), t(e.exports, "ab", (function() {
        return M
    })), t(e.exports, "f", (function() {
        return S
    })), t(e.exports, "a5", (function() {
        return P
    })), t(e.exports, "h", (function() {
        return O
    })), t(e.exports, "a7", (function() {
        return C
    })), t(e.exports, "ag", (function() {
        return D
    })), t(e.exports, "ai", (function() {
        return T
    })), t(e.exports, "P", (function() {
        return A
    })), t(e.exports, "T", (function() {
        return E
    })), t(e.exports, "H", (function() {
        return I
    })), t(e.exports, "aM", (function() {
        return B
    })), t(e.exports, "s", (function() {
        return N
    })), t(e.exports, "aJ", (function() {
        return j
    })), t(e.exports, "aH", (function() {
        return W
    })), t(e.exports, "N", (function() {
        return H
    })), t(e.exports, "x", (function() {
        return $
    })), t(e.exports, "aI", (function() {
        return Y
    })), t(e.exports, "aG", (function() {
        return U
    })), t(e.exports, "t", (function() {
        return X
    })), t(e.exports, "U", (function() {
        return q
    })), t(e.exports, "aK", (function() {
        return Q
    })), t(e.exports, "D", (function() {
        return K
    })), t(e.exports, "aE", (function() {
        return G
    })), t(e.exports, "ay", (function() {
        return J
    })), t(e.exports, "p", (function() {
        return tt
    })), t(e.exports, "S", (function() {
        return et
    })), t(e.exports, "W", (function() {
        return it
    })), t(e.exports, "aj", (function() {
        return st
    })), t(e.exports, "aP", (function() {
        return nt
    })), t(e.exports, "B", (function() {
        return ot
    })), t(e.exports, "A", (function() {
        return at
    })), t(e.exports, "aO", (function() {
        return rt
    })), t(e.exports, "l", (function() {
        return lt
    })), t(e.exports, "u", (function() {
        return ct
    })), t(e.exports, "_", (function() {
        return dt
    })), t(e.exports, "r", (function() {
        return ut
    })), t(e.exports, "L", (function() {
        return ft
    })), t(e.exports, "ad", (function() {
        return gt
    })), t(e.exports, "a1", (function() {
        return pt
    })), t(e.exports, "a2", (function() {
        return mt
    })), t(e.exports, "aB", (function() {
        return xt
    })), t(e.exports, "q", (function() {
        return bt
    })), t(e.exports, "w", (function() {
        return _t
    })), t(e.exports, "e", (function() {
        return wt
    })), t(e.exports, "c", (function() {
        return St
    })), t(e.exports, "o", (function() {
        return Tt
    })), t(e.exports, "aL", (function() {
        return Et
    })), t(e.exports, "a3", (function() {
        return Lt
    })), t(e.exports, "a6", (function() {
        return Rt
    })), t(e.exports, "d", (function() {
        return Vt
    })), t(e.exports, "V", (function() {
        return Bt
    })), t(e.exports, "aN", (function() {
        return Nt
    })), t(e.exports, "X", (function() {
        return jt
    })), t(e.exports, "af", (function() {
        return Wt
    })), t(e.exports, "at", (function() {
        return Ht
    })), t(e.exports, "aD", (function() {
        return $t
    })), t(e.exports, "C", (function() {
        return Yt
    })), t(e.exports, "Y", (function() {
        return Ut
    })), t(e.exports, "$", (function() {
        return Xt
    })), t(e.exports, "ar", (function() {
        return qt
    })), t(e.exports, "as", (function() {
        return Qt
    })), t(e.exports, "Z", (function() {
        return Kt
    })), t(e.exports, "au", (function() {
        return Jt
    })), t(e.exports, "ak", (function() {
        return se
    })), t(e.exports, "av", (function() {
        return ne
    })), t(e.exports, "aw", (function() {
        return oe
    })), t(e.exports, "E", (function() {
        return ae
    })), t(e.exports, "a0", (function() {
        return re
    })), t(e.exports, "a", (function() {
        return he
    })), t(e.exports, "R", (function() {
        return le
    })), t(e.exports, "j", (function() {
        return ce
    })), t(e.exports, "a9", (function() {
        return de
    })), t(e.exports, "a8", (function() {
        return ue
    })), t(e.exports, "aa", (function() {
        return fe
    })), t(e.exports, "y", (function() {
        return ke
    })), t(e.exports, "al", (function() {
        return Ae
    })), t(e.exports, "M", (function() {
        return Ee
    })), t(e.exports, "I", (function() {
        return Le
    })), t(e.exports, "z", (function() {
        return Ve
    })), t(e.exports, "G", (function() {
        return Ne
    })), t(e.exports, "ae", (function() {
        return je
    })), t(e.exports, "K", (function() {
        return We
    })), t(e.exports, "J", (function() {
        return He
    })), t(e.exports, "aq", (function() {
        return $e
    })), t(e.exports, "ao", (function() {
        return Ye
    })), t(e.exports, "ap", (function() {
        return Ue
    })), t(e.exports, "az", (function() {
        return Xe
    })), t(e.exports, "aA", (function() {
        return qe
    })), t(e.exports, "aC", (function() {
        return Qe
    })), t(e.exports, "ax", (function() {
        return Ze
    })), t(e.exports, "an", (function() {
        return Je
    })), t(e.exports, "am", (function() {
        return ti
    }));
    /*!
     * Chart.js v4.2.0
     * https://www.chartjs.org
     * (c) 2023 Chart.js Contributors
     * Released under the MIT License
     */
    var n = i("gHjef");

    function o() {}
    const a = (() => {
        let t = 0;
        return () => t++
    })();

    function r(t) {
        return null == t
    }

    function h(t) {
        if (Array.isArray && Array.isArray(t)) return !0;
        const e = Object.prototype.toString.call(t);
        return "[object" === e.slice(0, 7) && "Array]" === e.slice(-6)
    }

    function l(t) {
        return null !== t && "[object Object]" === Object.prototype.toString.call(t)
    }

    function c(t) {
        return ("number" == typeof t || t instanceof Number) && isFinite(+t)
    }

    function d(t, e) {
        return c(t) ? t : e
    }

    function u(t, e) {
        return void 0 === t ? e : t
    }
    const f = (t, e) => "string" == typeof t && t.endsWith("%") ? parseFloat(t) / 100 : +t / e,
        g = (t, e) => "string" == typeof t && t.endsWith("%") ? parseFloat(t) / 100 * e : +t;

    function p(t, e, i) {
        if (t && "function" == typeof t.call) return t.apply(i, e)
    }

    function m(t, e, i, s) {
        let n, o, a;
        if (h(t))
            if (o = t.length, s)
                for (n = o - 1; n >= 0; n--) e.call(i, t[n], n);
            else
                for (n = 0; n < o; n++) e.call(i, t[n], n);
        else if (l(t))
            for (a = Object.keys(t), o = a.length, n = 0; n < o; n++) e.call(i, t[a[n]], a[n])
    }

    function x(t, e) {
        let i, s, n, o;
        if (!t || !e || t.length !== e.length) return !1;
        for (i = 0, s = t.length; i < s; ++i)
            if (n = t[i], o = e[i], n.datasetIndex !== o.datasetIndex || n.index !== o.index) return !1;
        return !0
    }

    function b(t) {
        if (h(t)) return t.map(b);
        if (l(t)) {
            const e = Object.create(null),
                i = Object.keys(t),
                s = i.length;
            let n = 0;
            for (; n < s; ++n) e[i[n]] = b(t[i[n]]);
            return e
        }
        return t
    }

    function _(t) {
        return -1 === ["__proto__", "prototype", "constructor"].indexOf(t)
    }

    function y(t, e, i, s) {
        if (!_(t)) return;
        const n = e[t],
            o = i[t];
        l(n) && l(o) ? v(n, o, s) : e[t] = b(o)
    }

    function v(t, e, i) {
        const s = h(e) ? e : [e],
            n = s.length;
        if (!l(t)) return t;
        const o = (i = i || {}).merger || y;
        let a;
        for (let e = 0; e < n; ++e) {
            if (a = s[e], !l(a)) continue;
            const n = Object.keys(a);
            for (let e = 0, s = n.length; e < s; ++e) o(n[e], t, a, i)
        }
        return t
    }

    function M(t, e) {
        return v(t, e, {
            merger: w
        })
    }

    function w(t, e, i) {
        if (!_(t)) return;
        const s = e[t],
            n = i[t];
        l(s) && l(n) ? M(s, n) : Object.prototype.hasOwnProperty.call(e, t) || (e[t] = b(n))
    }
    const k = {
        "": t => t,
        x: t => t.x,
        y: t => t.y
    };

    function S(t, e) {
        const i = k[e] || (k[e] = function(t) {
            const e = function(t) {
                const e = t.split("."),
                    i = [];
                let s = "";
                for (const t of e) s += t, s.endsWith("\\") ? s = s.slice(0, -1) + "." : (i.push(s), s = "");
                return i
            }(t);
            return t => {
                for (const i of e) {
                    if ("" === i) break;
                    t = t && t[i]
                }
                return t
            }
        }(e));
        return i(t)
    }

    function P(t) {
        return t.charAt(0).toUpperCase() + t.slice(1)
    }
    const O = t => void 0 !== t,
        C = t => "function" == typeof t,
        D = (t, e) => {
            if (t.size !== e.size) return !1;
            for (const i of t)
                if (!e.has(i)) return !1;
            return !0
        };

    function T(t) {
        return "mouseup" === t.type || "click" === t.type || "contextmenu" === t.type
    }
    const A = Math.PI,
        E = 2 * A,
        L = E + A,
        R = Number.POSITIVE_INFINITY,
        F = A / 180,
        I = A / 2,
        z = A / 4,
        V = 2 * A / 3,
        B = Math.log10,
        N = Math.sign;

    function j(t, e, i) {
        return Math.abs(t - e) < i
    }

    function W(t) {
        const e = Math.round(t);
        t = j(t, e, t / 1e3) ? e : t;
        const i = Math.pow(10, Math.floor(B(t))),
            s = t / i;
        return (s <= 1 ? 1 : s <= 2 ? 2 : s <= 5 ? 5 : 10) * i
    }

    function H(t) {
        const e = [],
            i = Math.sqrt(t);
        let s;
        for (s = 1; s < i; s++) t % s == 0 && (e.push(s), e.push(t / s));
        return i === (0 | i) && e.push(i), e.sort(((t, e) => t - e)).pop(), e
    }

    function $(t) {
        return !isNaN(parseFloat(t)) && isFinite(t)
    }

    function Y(t, e) {
        const i = Math.round(t);
        return i - e <= t && i + e >= t
    }

    function U(t, e, i) {
        let s, n, o;
        for (s = 0, n = t.length; s < n; s++) o = t[s][i], isNaN(o) || (e.min = Math.min(e.min, o), e.max = Math.max(e.max, o))
    }

    function X(t) {
        return t * (A / 180)
    }

    function q(t) {
        return t * (180 / A)
    }

    function Q(t) {
        if (!c(t)) return;
        let e = 1,
            i = 0;
        for (; Math.round(t * e) / e !== t;) e *= 10, i++;
        return i
    }

    function K(t, e) {
        const i = e.x - t.x,
            s = e.y - t.y,
            n = Math.sqrt(i * i + s * s);
        let o = Math.atan2(s, i);
        return o < -.5 * A && (o += E), {
            angle: o,
            distance: n
        }
    }

    function G(t, e) {
        return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
    }

    function Z(t, e) {
        return (t - e + L) % E - A
    }

    function J(t) {
        return (t % E + E) % E
    }

    function tt(t, e, i, s) {
        const n = J(t),
            o = J(e),
            a = J(i),
            r = J(o - n),
            h = J(a - n),
            l = J(n - o),
            c = J(n - a);
        return n === o || n === a || s && o === a || r > h && l < c
    }

    function et(t, e, i) {
        return Math.max(e, Math.min(i, t))
    }

    function it(t) {
        return et(t, -32768, 32767)
    }

    function st(t, e, i, s = 1e-6) {
        return t >= Math.min(e, i) - s && t <= Math.max(e, i) + s
    }

    function nt(t, e, i) {
        i = i || (i => t[i] < e);
        let s, n = t.length - 1,
            o = 0;
        for (; n - o > 1;) s = o + n >> 1, i(s) ? o = s : n = s;
        return {
            lo: o,
            hi: n
        }
    }
    const ot = (t, e, i, s) => nt(t, i, s ? s => {
            const n = t[s][e];
            return n < i || n === i && t[s + 1][e] === i
        } : s => t[s][e] < i),
        at = (t, e, i) => nt(t, i, (s => t[s][e] >= i));

    function rt(t, e, i) {
        let s = 0,
            n = t.length;
        for (; s < n && t[s] < e;) s++;
        for (; n > s && t[n - 1] > i;) n--;
        return s > 0 || n < t.length ? t.slice(s, n) : t
    }
    const ht = ["push", "pop", "shift", "splice", "unshift"];

    function lt(t, e) {
        t._chartjs ? t._chartjs.listeners.push(e) : (Object.defineProperty(t, "_chartjs", {
            configurable: !0,
            enumerable: !1,
            value: {
                listeners: [e]
            }
        }), ht.forEach((e => {
            const i = "_onData" + P(e),
                s = t[e];
            Object.defineProperty(t, e, {
                configurable: !0,
                enumerable: !1,
                value(...e) {
                    const n = s.apply(this, e);
                    return t._chartjs.listeners.forEach((t => {
                        "function" == typeof t[i] && t[i](...e)
                    })), n
                }
            })
        })))
    }

    function ct(t, e) {
        const i = t._chartjs;
        if (!i) return;
        const s = i.listeners,
            n = s.indexOf(e); - 1 !== n && s.splice(n, 1), s.length > 0 || (ht.forEach((e => {
            delete t[e]
        })), delete t._chartjs)
    }

    function dt(t) {
        const e = new Set;
        let i, s;
        for (i = 0, s = t.length; i < s; ++i) e.add(t[i]);
        return e.size === s ? t : Array.from(e)
    }
    const ut = "undefined" == typeof window ? function(t) {
        return t()
    } : window.requestAnimationFrame;

    function ft(t, e) {
        let i = [],
            s = !1;
        return function(...n) {
            i = n, s || (s = !0, ut.call(window, (() => {
                s = !1, t.apply(e, i)
            })))
        }
    }

    function gt(t, e) {
        let i;
        return function(...s) {
            return e ? (clearTimeout(i), i = setTimeout(t, e, s)) : t.apply(this, s), e
        }
    }
    const pt = t => "start" === t ? "left" : "end" === t ? "right" : "center",
        mt = (t, e, i) => "start" === t ? e : "end" === t ? i : (e + i) / 2,
        xt = (t, e, i, s) => t === (s ? "left" : "right") ? i : "center" === t ? (e + i) / 2 : e;

    function bt(t, e, i) {
        const s = e.length;
        let n = 0,
            o = s;
        if (t._sorted) {
            const {
                iScale: a,
                _parsed: r
            } = t, h = a.axis, {
                min: l,
                max: c,
                minDefined: d,
                maxDefined: u
            } = a.getUserBounds();
            d && (n = et(Math.min(ot(r, a.axis, l).lo, i ? s : ot(e, h, a.getPixelForValue(l)).lo), 0, s - 1)), o = u ? et(Math.max(ot(r, a.axis, c, !0).hi + 1, i ? 0 : ot(e, h, a.getPixelForValue(c), !0).hi + 1), n, s) - n : s - n
        }
        return {
            start: n,
            count: o
        }
    }

    function _t(t) {
        const {
            xScale: e,
            yScale: i,
            _scaleRanges: s
        } = t, n = {
            xmin: e.min,
            xmax: e.max,
            ymin: i.min,
            ymax: i.max
        };
        if (!s) return t._scaleRanges = n, !0;
        const o = s.xmin !== e.min || s.xmax !== e.max || s.ymin !== i.min || s.ymax !== i.max;
        return Object.assign(s, n), o
    }
    const yt = t => 0 === t || 1 === t,
        vt = (t, e, i) => -Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * E / i),
        Mt = (t, e, i) => Math.pow(2, -10 * t) * Math.sin((t - e) * E / i) + 1,
        wt = {
            linear: t => t,
            easeInQuad: t => t * t,
            easeOutQuad: t => -t * (t - 2),
            easeInOutQuad: t => (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1),
            easeInCubic: t => t * t * t,
            easeOutCubic: t => (t -= 1) * t * t + 1,
            easeInOutCubic: t => (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2),
            easeInQuart: t => t * t * t * t,
            easeOutQuart: t => -((t -= 1) * t * t * t - 1),
            easeInOutQuart: t => (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2),
            easeInQuint: t => t * t * t * t * t,
            easeOutQuint: t => (t -= 1) * t * t * t * t + 1,
            easeInOutQuint: t => (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2),
            easeInSine: t => 1 - Math.cos(t * I),
            easeOutSine: t => Math.sin(t * I),
            easeInOutSine: t => -.5 * (Math.cos(A * t) - 1),
            easeInExpo: t => 0 === t ? 0 : Math.pow(2, 10 * (t - 1)),
            easeOutExpo: t => 1 === t ? 1 : 1 - Math.pow(2, -10 * t),
            easeInOutExpo: t => yt(t) ? t : t < .5 ? .5 * Math.pow(2, 10 * (2 * t - 1)) : .5 * (2 - Math.pow(2, -10 * (2 * t - 1))),
            easeInCirc: t => t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1),
            easeOutCirc: t => Math.sqrt(1 - (t -= 1) * t),
            easeInOutCirc: t => (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1),
            easeInElastic: t => yt(t) ? t : vt(t, .075, .3),
            easeOutElastic: t => yt(t) ? t : Mt(t, .075, .3),
            easeInOutElastic(t) {
                const e = .1125;
                return yt(t) ? t : t < .5 ? .5 * vt(2 * t, e, .45) : .5 + .5 * Mt(2 * t - 1, e, .45)
            },
            easeInBack(t) {
                const e = 1.70158;
                return t * t * ((e + 1) * t - e)
            },
            easeOutBack(t) {
                const e = 1.70158;
                return (t -= 1) * t * ((e + 1) * t + e) + 1
            },
            easeInOutBack(t) {
                let e = 1.70158;
                return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
            },
            easeInBounce: t => 1 - wt.easeOutBounce(1 - t),
            easeOutBounce(t) {
                const e = 7.5625,
                    i = 2.75;
                return t < 1 / i ? e * t * t : t < 2 / i ? e * (t -= 1.5 / i) * t + .75 : t < 2.5 / i ? e * (t -= 2.25 / i) * t + .9375 : e * (t -= 2.625 / i) * t + .984375
            },
            easeInOutBounce: t => t < .5 ? .5 * wt.easeInBounce(2 * t) : .5 * wt.easeOutBounce(2 * t - 1) + .5
        };

    function kt(t) {
        if (t && "object" == typeof t) {
            const e = t.toString();
            return "[object CanvasPattern]" === e || "[object CanvasGradient]" === e
        }
        return !1
    }

    function St(t) {
        return kt(t) ? t : new(0, n.Color)(t)
    }

    function Pt(t) {
        return kt(t) ? t : new(0, n.Color)(t).saturate(.5).darken(.1).hexString()
    }
    const Ot = ["x", "y", "borderWidth", "radius", "tension"],
        Ct = ["color", "borderColor", "backgroundColor"];
    const Dt = new Map;

    function Tt(t, e, i) {
        return function(t, e) {
            e = e || {};
            const i = t + JSON.stringify(e);
            let s = Dt.get(i);
            return s || (s = new Intl.NumberFormat(t, e), Dt.set(i, s)), s
        }(e, i).format(t)
    }
    const At = {
        values: t => h(t) ? t : "" + t,
        numeric(t, e, i) {
            if (0 === t) return "0";
            const s = this.chart.options.locale;
            let n, o = t;
            if (i.length > 1) {
                const e = Math.max(Math.abs(i[0].value), Math.abs(i[i.length - 1].value));
                (e < 1e-4 || e > 1e15) && (n = "scientific"), o = function(t, e) {
                    let i = e.length > 3 ? e[2].value - e[1].value : e[1].value - e[0].value;
                    Math.abs(i) >= 1 && t !== Math.floor(t) && (i = t - Math.floor(t));
                    return i
                }(t, i)
            }
            const a = B(Math.abs(o)),
                r = Math.max(Math.min(-1 * Math.floor(a), 20), 0),
                h = {
                    notation: n,
                    minimumFractionDigits: r,
                    maximumFractionDigits: r
                };
            return Object.assign(h, this.options.ticks.format), Tt(t, s, h)
        },
        logarithmic(t, e, i) {
            if (0 === t) return "0";
            const s = i[e].significand || t / Math.pow(10, Math.floor(B(t)));
            return [1, 2, 3, 5, 10, 15].includes(s) || e > .8 * i.length ? At.numeric.call(this, t, e, i) : ""
        }
    };
    var Et = {
        formatters: At
    };
    const Lt = Object.create(null),
        Rt = Object.create(null);

    function Ft(t, e) {
        if (!e) return t;
        const i = e.split(".");
        for (let e = 0, s = i.length; e < s; ++e) {
            const s = i[e];
            t = t[s] || (t[s] = Object.create(null))
        }
        return t
    }

    function It(t, e, i) {
        return "string" == typeof e ? v(Ft(t, e), i) : v(Ft(t, ""), e)
    }
    class zt {
        set(t, e) {
            return It(this, t, e)
        }
        get(t) {
            return Ft(this, t)
        }
        describe(t, e) {
            return It(Rt, t, e)
        }
        override(t, e) {
            return It(Lt, t, e)
        }
        route(t, e, i, s) {
            const n = Ft(this, t),
                o = Ft(this, i),
                a = "_" + e;
            Object.defineProperties(n, {
                [a]: {
                    value: n[e],
                    writable: !0
                },
                [e]: {
                    enumerable: !0,
                    get() {
                        const t = this[a],
                            e = o[s];
                        return l(t) ? Object.assign({}, e, t) : u(t, e)
                    },
                    set(t) {
                        this[a] = t
                    }
                }
            })
        }
        apply(t) {
            t.forEach((t => t(this)))
        }
        constructor(t, e) {
            this.animation = void 0, this.backgroundColor = "rgba(0,0,0,0.1)", this.borderColor = "rgba(0,0,0,0.1)", this.color = "#666", this.datasets = {}, this.devicePixelRatio = t => t.chart.platform.getDevicePixelRatio(), this.elements = {}, this.events = ["mousemove", "mouseout", "click", "touchstart", "touchmove"], this.font = {
                family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                size: 12,
                style: "normal",
                lineHeight: 1.2,
                weight: null
            }, this.hover = {}, this.hoverBackgroundColor = (t, e) => Pt(e.backgroundColor), this.hoverBorderColor = (t, e) => Pt(e.borderColor), this.hoverColor = (t, e) => Pt(e.color), this.indexAxis = "x", this.interaction = {
                mode: "nearest",
                intersect: !0,
                includeInvisible: !1
            }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.drawActiveElementsOnTop = !0, this.describe(t), this.apply(e)
        }
    }
    var Vt = new zt({
        _scriptable: t => !t.startsWith("on"),
        _indexable: t => "events" !== t,
        hover: {
            _fallback: "interaction"
        },
        interaction: {
            _scriptable: !1,
            _indexable: !1
        }
    }, [function(t) {
        t.set("animation", {
            delay: void 0,
            duration: 1e3,
            easing: "easeOutQuart",
            fn: void 0,
            from: void 0,
            loop: void 0,
            to: void 0,
            type: void 0
        }), t.describe("animation", {
            _fallback: !1,
            _indexable: !1,
            _scriptable: t => "onProgress" !== t && "onComplete" !== t && "fn" !== t
        }), t.set("animations", {
            colors: {
                type: "color",
                properties: Ct
            },
            numbers: {
                type: "number",
                properties: Ot
            }
        }), t.describe("animations", {
            _fallback: "animation"
        }), t.set("transitions", {
            active: {
                animation: {
                    duration: 400
                }
            },
            resize: {
                animation: {
                    duration: 0
                }
            },
            show: {
                animations: {
                    colors: {
                        from: "transparent"
                    },
                    visible: {
                        type: "boolean",
                        duration: 0
                    }
                }
            },
            hide: {
                animations: {
                    colors: {
                        to: "transparent"
                    },
                    visible: {
                        type: "boolean",
                        easing: "linear",
                        fn: t => 0 | t
                    }
                }
            }
        })
    }, function(t) {
        t.set("layout", {
            autoPadding: !0,
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        })
    }, function(t) {
        t.set("scale", {
            display: !0,
            offset: !1,
            reverse: !1,
            beginAtZero: !1,
            bounds: "ticks",
            grace: 0,
            grid: {
                display: !0,
                lineWidth: 1,
                drawOnChartArea: !0,
                drawTicks: !0,
                tickLength: 8,
                tickWidth: (t, e) => e.lineWidth,
                tickColor: (t, e) => e.color,
                offset: !1
            },
            border: {
                display: !0,
                dash: [],
                dashOffset: 0,
                width: 1
            },
            title: {
                display: !1,
                text: "",
                padding: {
                    top: 4,
                    bottom: 4
                }
            },
            ticks: {
                minRotation: 0,
                maxRotation: 50,
                mirror: !1,
                textStrokeWidth: 0,
                textStrokeColor: "",
                padding: 3,
                display: !0,
                autoSkip: !0,
                autoSkipPadding: 3,
                labelOffset: 0,
                callback: Et.formatters.values,
                minor: {},
                major: {},
                align: "center",
                crossAlign: "near",
                showLabelBackdrop: !1,
                backdropColor: "rgba(255, 255, 255, 0.75)",
                backdropPadding: 2
            }
        }), t.route("scale.ticks", "color", "", "color"), t.route("scale.grid", "color", "", "borderColor"), t.route("scale.border", "color", "", "borderColor"), t.route("scale.title", "color", "", "color"), t.describe("scale", {
            _fallback: !1,
            _scriptable: t => !t.startsWith("before") && !t.startsWith("after") && "callback" !== t && "parser" !== t,
            _indexable: t => "borderDash" !== t && "tickBorderDash" !== t && "dash" !== t
        }), t.describe("scales", {
            _fallback: "scale"
        }), t.describe("scale.ticks", {
            _scriptable: t => "backdropPadding" !== t && "callback" !== t,
            _indexable: t => "backdropPadding" !== t
        })
    }]);

    function Bt(t, e, i, s, n) {
        let o = e[n];
        return o || (o = e[n] = t.measureText(n).width, i.push(n)), o > s && (s = o), s
    }

    function Nt(t, e, i, s) {
        let n = (s = s || {}).data = s.data || {},
            o = s.garbageCollect = s.garbageCollect || [];
        s.font !== e && (n = s.data = {}, o = s.garbageCollect = [], s.font = e), t.save(), t.font = e;
        let a = 0;
        const r = i.length;
        let l, c, d, u, f;
        for (l = 0; l < r; l++)
            if (u = i[l], null != u && !0 !== h(u)) a = Bt(t, n, o, a, u);
            else if (h(u))
            for (c = 0, d = u.length; c < d; c++) f = u[c], null == f || h(f) || (a = Bt(t, n, o, a, f));
        t.restore();
        const g = o.length / 2;
        if (g > i.length) {
            for (l = 0; l < g; l++) delete n[o[l]];
            o.splice(0, g)
        }
        return a
    }

    function jt(t, e, i) {
        const s = t.currentDevicePixelRatio,
            n = 0 !== i ? Math.max(i / 2, .5) : 0;
        return Math.round((e - n) * s) / s + n
    }

    function Wt(t, e) {
        (e = e || t.getContext("2d")).save(), e.resetTransform(), e.clearRect(0, 0, t.width, t.height), e.restore()
    }

    function Ht(t, e, i, s) {
        $t(t, e, i, s, null)
    }

    function $t(t, e, i, s, n) {
        let o, a, r, h, l, c, d, u;
        const f = e.pointStyle,
            g = e.rotation,
            p = e.radius;
        let m = (g || 0) * F;
        if (f && "object" == typeof f && (o = f.toString(), "[object HTMLImageElement]" === o || "[object HTMLCanvasElement]" === o)) return t.save(), t.translate(i, s), t.rotate(m), t.drawImage(f, -f.width / 2, -f.height / 2, f.width, f.height), void t.restore();
        if (!(isNaN(p) || p <= 0)) {
            switch (t.beginPath(), f) {
                default:
                    n ? t.ellipse(i, s, n / 2, p, 0, 0, E) : t.arc(i, s, p, 0, E), t.closePath();
                    break;
                case "triangle":
                    c = n ? n / 2 : p, t.moveTo(i + Math.sin(m) * c, s - Math.cos(m) * p), m += V, t.lineTo(i + Math.sin(m) * c, s - Math.cos(m) * p), m += V, t.lineTo(i + Math.sin(m) * c, s - Math.cos(m) * p), t.closePath();
                    break;
                case "rectRounded":
                    l = .516 * p, h = p - l, a = Math.cos(m + z) * h, d = Math.cos(m + z) * (n ? n / 2 - l : h), r = Math.sin(m + z) * h, u = Math.sin(m + z) * (n ? n / 2 - l : h), t.arc(i - d, s - r, l, m - A, m - I), t.arc(i + u, s - a, l, m - I, m), t.arc(i + d, s + r, l, m, m + I), t.arc(i - u, s + a, l, m + I, m + A), t.closePath();
                    break;
                case "rect":
                    if (!g) {
                        h = Math.SQRT1_2 * p, c = n ? n / 2 : h, t.rect(i - c, s - h, 2 * c, 2 * h);
                        break
                    }
                    m += z;
                case "rectRot":
                    d = Math.cos(m) * (n ? n / 2 : p), a = Math.cos(m) * p, r = Math.sin(m) * p, u = Math.sin(m) * (n ? n / 2 : p), t.moveTo(i - d, s - r), t.lineTo(i + u, s - a), t.lineTo(i + d, s + r), t.lineTo(i - u, s + a), t.closePath();
                    break;
                case "crossRot":
                    m += z;
                case "cross":
                    d = Math.cos(m) * (n ? n / 2 : p), a = Math.cos(m) * p, r = Math.sin(m) * p, u = Math.sin(m) * (n ? n / 2 : p), t.moveTo(i - d, s - r), t.lineTo(i + d, s + r), t.moveTo(i + u, s - a), t.lineTo(i - u, s + a);
                    break;
                case "star":
                    d = Math.cos(m) * (n ? n / 2 : p), a = Math.cos(m) * p, r = Math.sin(m) * p, u = Math.sin(m) * (n ? n / 2 : p), t.moveTo(i - d, s - r), t.lineTo(i + d, s + r), t.moveTo(i + u, s - a), t.lineTo(i - u, s + a), m += z, d = Math.cos(m) * (n ? n / 2 : p), a = Math.cos(m) * p, r = Math.sin(m) * p, u = Math.sin(m) * (n ? n / 2 : p), t.moveTo(i - d, s - r), t.lineTo(i + d, s + r), t.moveTo(i + u, s - a), t.lineTo(i - u, s + a);
                    break;
                case "line":
                    a = n ? n / 2 : Math.cos(m) * p, r = Math.sin(m) * p, t.moveTo(i - a, s - r), t.lineTo(i + a, s + r);
                    break;
                case "dash":
                    t.moveTo(i, s), t.lineTo(i + Math.cos(m) * (n ? n / 2 : p), s + Math.sin(m) * p);
                    break;
                case !1:
                    t.closePath()
            }
            t.fill(), e.borderWidth > 0 && t.stroke()
        }
    }

    function Yt(t, e, i) {
        return i = i || .5, !e || t && t.x > e.left - i && t.x < e.right + i && t.y > e.top - i && t.y < e.bottom + i
    }

    function Ut(t, e) {
        t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip()
    }

    function Xt(t) {
        t.restore()
    }

    function qt(t, e, i, s, n) {
        if (!e) return t.lineTo(i.x, i.y);
        if ("middle" === n) {
            const s = (e.x + i.x) / 2;
            t.lineTo(s, e.y), t.lineTo(s, i.y)
        } else "after" === n != !!s ? t.lineTo(e.x, i.y) : t.lineTo(i.x, e.y);
        t.lineTo(i.x, i.y)
    }

    function Qt(t, e, i, s) {
        if (!e) return t.lineTo(i.x, i.y);
        t.bezierCurveTo(s ? e.cp1x : e.cp2x, s ? e.cp1y : e.cp2y, s ? i.cp2x : i.cp1x, s ? i.cp2y : i.cp1y, i.x, i.y)
    }

    function Kt(t, e, i, s, n, o = {}) {
        const a = h(e) ? e : [e],
            l = o.strokeWidth > 0 && "" !== o.strokeColor;
        let c, d;
        for (t.save(), t.font = n.string, function(t, e) {
                e.translation && t.translate(e.translation[0], e.translation[1]);
                r(e.rotation) || t.rotate(e.rotation);
                e.color && (t.fillStyle = e.color);
                e.textAlign && (t.textAlign = e.textAlign);
                e.textBaseline && (t.textBaseline = e.textBaseline)
            }(t, o), c = 0; c < a.length; ++c) d = a[c], o.backdrop && Zt(t, o.backdrop), l && (o.strokeColor && (t.strokeStyle = o.strokeColor), r(o.strokeWidth) || (t.lineWidth = o.strokeWidth), t.strokeText(d, i, s, o.maxWidth)), t.fillText(d, i, s, o.maxWidth), Gt(t, i, s, d, o), s += n.lineHeight;
        t.restore()
    }

    function Gt(t, e, i, s, n) {
        if (n.strikethrough || n.underline) {
            const o = t.measureText(s),
                a = e - o.actualBoundingBoxLeft,
                r = e + o.actualBoundingBoxRight,
                h = i - o.actualBoundingBoxAscent,
                l = i + o.actualBoundingBoxDescent,
                c = n.strikethrough ? (h + l) / 2 : l;
            t.strokeStyle = t.fillStyle, t.beginPath(), t.lineWidth = n.decorationWidth || 2, t.moveTo(a, c), t.lineTo(r, c), t.stroke()
        }
    }

    function Zt(t, e) {
        const i = t.fillStyle;
        t.fillStyle = e.color, t.fillRect(e.left, e.top, e.width, e.height), t.fillStyle = i
    }

    function Jt(t, e) {
        const {
            x: i,
            y: s,
            w: n,
            h: o,
            radius: a
        } = e;
        t.arc(i + a.topLeft, s + a.topLeft, a.topLeft, -I, A, !0), t.lineTo(i, s + o - a.bottomLeft), t.arc(i + a.bottomLeft, s + o - a.bottomLeft, a.bottomLeft, A, I, !0), t.lineTo(i + n - a.bottomRight, s + o), t.arc(i + n - a.bottomRight, s + o - a.bottomRight, a.bottomRight, I, 0, !0), t.lineTo(i + n, s + a.topRight), t.arc(i + n - a.topRight, s + a.topRight, a.topRight, 0, -I, !0), t.lineTo(i + a.topLeft, s)
    }
    const te = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
        ee = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;

    function ie(t, e) {
        const i = ("" + t).match(te);
        if (!i || "normal" === i[1]) return 1.2 * e;
        switch (t = +i[2], i[3]) {
            case "px":
                return t;
            case "%":
                t /= 100
        }
        return e * t
    }

    function se(t, e) {
        const i = {},
            s = l(e),
            n = s ? Object.keys(e) : e,
            o = l(t) ? s ? i => u(t[i], t[e[i]]) : e => t[e] : () => t;
        for (const t of n) i[t] = +o(t) || 0;
        return i
    }

    function ne(t) {
        return se(t, {
            top: "y",
            right: "x",
            bottom: "y",
            left: "x"
        })
    }

    function oe(t) {
        return se(t, ["topLeft", "topRight", "bottomLeft", "bottomRight"])
    }

    function ae(t) {
        const e = ne(t);
        return e.width = e.left + e.right, e.height = e.top + e.bottom, e
    }

    function re(t, e) {
        t = t || {}, e = e || Vt.font;
        let i = u(t.size, e.size);
        "string" == typeof i && (i = parseInt(i, 10));
        let s = u(t.style, e.style);
        s && !("" + s).match(ee) && (console.warn('Invalid font style specified: "' + s + '"'), s = void 0);
        const n = {
            family: u(t.family, e.family),
            lineHeight: ie(u(t.lineHeight, e.lineHeight), i),
            size: i,
            style: s,
            weight: u(t.weight, e.weight),
            string: ""
        };
        return n.string = function(t) {
            return !t || r(t.size) || r(t.family) ? null : (t.style ? t.style + " " : "") + (t.weight ? t.weight + " " : "") + t.size + "px " + t.family
        }(n), n
    }

    function he(t, e, i, s) {
        let n, o, a, r = !0;
        for (n = 0, o = t.length; n < o; ++n)
            if (a = t[n], void 0 !== a && (void 0 !== e && "function" == typeof a && (a = a(e), r = !1), void 0 !== i && h(a) && (a = a[i % a.length], r = !1), void 0 !== a)) return s && !r && (s.cacheable = !1), a
    }

    function le(t, e, i) {
        const {
            min: s,
            max: n
        } = t, o = g(e, (n - s) / 2), a = (t, e) => i && 0 === t ? 0 : t + e;
        return {
            min: a(s, -Math.abs(o)),
            max: a(n, o)
        }
    }

    function ce(t, e) {
        return Object.assign(Object.create(t), e)
    }

    function de(t, e = [""], i = t, s, n = (() => t[0])) {
        O(s) || (s = Me("_fallback", t));
        const o = {
            [Symbol.toStringTag]: "Object",
            _cacheable: !0,
            _scopes: t,
            _rootScopes: i,
            _fallback: s,
            _getTarget: n,
            override: n => de([n, ...t], e, i, s)
        };
        return new Proxy(o, {
            deleteProperty: (e, i) => (delete e[i], delete e._keys, delete t[0][i], !0),
            get: (i, s) => me(i, s, (() => function(t, e, i, s) {
                let n;
                for (const o of e)
                    if (n = Me(ge(o, t), i), O(n)) return pe(t, n) ? ye(i, s, t, n) : n
            }(s, e, t, i))),
            getOwnPropertyDescriptor: (t, e) => Reflect.getOwnPropertyDescriptor(t._scopes[0], e),
            getPrototypeOf: () => Reflect.getPrototypeOf(t[0]),
            has: (t, e) => we(t).includes(e),
            ownKeys: t => we(t),
            set(t, e, i) {
                const s = t._storage || (t._storage = n());
                return t[e] = s[e] = i, delete t._keys, !0
            }
        })
    }

    function ue(t, e, i, s) {
        const n = {
            _cacheable: !1,
            _proxy: t,
            _context: e,
            _subProxy: i,
            _stack: new Set,
            _descriptors: fe(t, s),
            setContext: e => ue(t, e, i, s),
            override: n => ue(t.override(n), e, i, s)
        };
        return new Proxy(n, {
            deleteProperty: (e, i) => (delete e[i], delete t[i], !0),
            get: (t, e, i) => me(t, e, (() => function(t, e, i) {
                const {
                    _proxy: s,
                    _context: n,
                    _subProxy: o,
                    _descriptors: a
                } = t;
                let r = s[e];
                C(r) && a.isScriptable(e) && (r = function(t, e, i, s) {
                    const {
                        _proxy: n,
                        _context: o,
                        _subProxy: a,
                        _stack: r
                    } = i;
                    if (r.has(t)) throw new Error("Recursion detected: " + Array.from(r).join("->") + "->" + t);
                    r.add(t), e = e(o, a || s), r.delete(t), pe(t, e) && (e = ye(n._scopes, n, t, e));
                    return e
                }(e, r, t, i));
                h(r) && r.length && (r = function(t, e, i, s) {
                    const {
                        _proxy: n,
                        _context: o,
                        _subProxy: a,
                        _descriptors: r
                    } = i;
                    if (O(o.index) && s(t)) e = e[o.index % e.length];
                    else if (l(e[0])) {
                        const i = e,
                            s = n._scopes.filter((t => t !== i));
                        e = [];
                        for (const h of i) {
                            const i = ye(s, n, t, h);
                            e.push(ue(i, o, a && a[t], r))
                        }
                    }
                    return e
                }(e, r, t, a.isIndexable));
                pe(e, r) && (r = ue(r, n, o && o[e], a));
                return r
            }(t, e, i))),
            getOwnPropertyDescriptor: (e, i) => e._descriptors.allKeys ? Reflect.has(t, i) ? {
                enumerable: !0,
                configurable: !0
            } : void 0 : Reflect.getOwnPropertyDescriptor(t, i),
            getPrototypeOf: () => Reflect.getPrototypeOf(t),
            has: (e, i) => Reflect.has(t, i),
            ownKeys: () => Reflect.ownKeys(t),
            set: (e, i, s) => (t[i] = s, delete e[i], !0)
        })
    }

    function fe(t, e = {
        scriptable: !0,
        indexable: !0
    }) {
        const {
            _scriptable: i = e.scriptable,
            _indexable: s = e.indexable,
            _allKeys: n = e.allKeys
        } = t;
        return {
            allKeys: n,
            scriptable: i,
            indexable: s,
            isScriptable: C(i) ? i : () => i,
            isIndexable: C(s) ? s : () => s
        }
    }
    const ge = (t, e) => t ? t + P(e) : e,
        pe = (t, e) => l(e) && "adapters" !== t && (null === Object.getPrototypeOf(e) || e.constructor === Object);

    function me(t, e, i) {
        if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
        const s = i();
        return t[e] = s, s
    }

    function xe(t, e, i) {
        return C(t) ? t(e, i) : t
    }
    const be = (t, e) => !0 === t ? e : "string" == typeof t ? S(e, t) : void 0;

    function _e(t, e, i, s, n) {
        for (const o of e) {
            const e = be(i, o);
            if (e) {
                t.add(e);
                const o = xe(e._fallback, i, n);
                if (O(o) && o !== i && o !== s) return o
            } else if (!1 === e && O(s) && i !== s) return null
        }
        return !1
    }

    function ye(t, e, i, s) {
        const n = e._rootScopes,
            o = xe(e._fallback, i, s),
            a = [...t, ...n],
            r = new Set;
        r.add(s);
        let c = ve(r, a, i, o || i, s);
        return null !== c && ((!O(o) || o === i || (c = ve(r, a, o, c, s), null !== c)) && de(Array.from(r), [""], n, o, (() => function(t, e, i) {
            const s = t._getTarget();
            e in s || (s[e] = {});
            const n = s[e];
            return h(n) && l(i) ? i : n || {}
        }(e, i, s))))
    }

    function ve(t, e, i, s, n) {
        for (; i;) i = _e(t, e, i, s, n);
        return i
    }

    function Me(t, e) {
        for (const i of e) {
            if (!i) continue;
            const e = i[t];
            if (O(e)) return e
        }
    }

    function we(t) {
        let e = t._keys;
        return e || (e = t._keys = function(t) {
            const e = new Set;
            for (const i of t)
                for (const t of Object.keys(i).filter((t => !t.startsWith("_")))) e.add(t);
            return Array.from(e)
        }(t._scopes)), e
    }

    function ke(t, e, i, s) {
        const {
            iScale: n
        } = t, {
            key: o = "r"
        } = this._parsing, a = new Array(s);
        let r, h, l, c;
        for (r = 0, h = s; r < h; ++r) l = r + i, c = e[l], a[r] = {
            r: n.parse(S(c, o), l)
        };
        return a
    }
    const Se = Number.EPSILON || 1e-14,
        Pe = (t, e) => e < t.length && !t[e].skip && t[e],
        Oe = t => "x" === t ? "y" : "x";

    function Ce(t, e, i, s) {
        const n = t.skip ? e : t,
            o = e,
            a = i.skip ? e : i,
            r = G(o, n),
            h = G(a, o);
        let l = r / (r + h),
            c = h / (r + h);
        l = isNaN(l) ? 0 : l, c = isNaN(c) ? 0 : c;
        const d = s * l,
            u = s * c;
        return {
            previous: {
                x: o.x - d * (a.x - n.x),
                y: o.y - d * (a.y - n.y)
            },
            next: {
                x: o.x + u * (a.x - n.x),
                y: o.y + u * (a.y - n.y)
            }
        }
    }

    function De(t, e = "x") {
        const i = Oe(e),
            s = t.length,
            n = Array(s).fill(0),
            o = Array(s);
        let a, r, h, l = Pe(t, 0);
        for (a = 0; a < s; ++a)
            if (r = h, h = l, l = Pe(t, a + 1), h) {
                if (l) {
                    const t = l[e] - h[e];
                    n[a] = 0 !== t ? (l[i] - h[i]) / t : 0
                }
                o[a] = r ? l ? N(n[a - 1]) !== N(n[a]) ? 0 : (n[a - 1] + n[a]) / 2 : n[a - 1] : n[a]
            }!
        function(t, e, i) {
            const s = t.length;
            let n, o, a, r, h, l = Pe(t, 0);
            for (let c = 0; c < s - 1; ++c) h = l, l = Pe(t, c + 1), h && l && (j(e[c], 0, Se) ? i[c] = i[c + 1] = 0 : (n = i[c] / e[c], o = i[c + 1] / e[c], r = Math.pow(n, 2) + Math.pow(o, 2), r <= 9 || (a = 3 / Math.sqrt(r), i[c] = n * a * e[c], i[c + 1] = o * a * e[c])))
        }(t, n, o),
        function(t, e, i = "x") {
            const s = Oe(i),
                n = t.length;
            let o, a, r, h = Pe(t, 0);
            for (let l = 0; l < n; ++l) {
                if (a = r, r = h, h = Pe(t, l + 1), !r) continue;
                const n = r[i],
                    c = r[s];
                a && (o = (n - a[i]) / 3, r[`cp1${i}`] = n - o, r[`cp1${s}`] = c - o * e[l]), h && (o = (h[i] - n) / 3, r[`cp2${i}`] = n + o, r[`cp2${s}`] = c + o * e[l])
            }
        }(t, o, e)
    }

    function Te(t, e, i) {
        return Math.max(Math.min(t, i), e)
    }

    function Ae(t, e, i, s, n) {
        let o, a, r, h;
        if (e.spanGaps && (t = t.filter((t => !t.skip))), "monotone" === e.cubicInterpolationMode) De(t, n);
        else {
            let i = s ? t[t.length - 1] : t[0];
            for (o = 0, a = t.length; o < a; ++o) r = t[o], h = Ce(i, r, t[Math.min(o + 1, a - (s ? 0 : 1)) % a], e.tension), r.cp1x = h.previous.x, r.cp1y = h.previous.y, r.cp2x = h.next.x, r.cp2y = h.next.y, i = r
        }
        e.capBezierPoints && function(t, e) {
            let i, s, n, o, a, r = Yt(t[0], e);
            for (i = 0, s = t.length; i < s; ++i) a = o, o = r, r = i < s - 1 && Yt(t[i + 1], e), o && (n = t[i], a && (n.cp1x = Te(n.cp1x, e.left, e.right), n.cp1y = Te(n.cp1y, e.top, e.bottom)), r && (n.cp2x = Te(n.cp2x, e.left, e.right), n.cp2y = Te(n.cp2y, e.top, e.bottom)))
        }(t, i)
    }

    function Ee() {
        return "undefined" != typeof window && "undefined" != typeof document
    }

    function Le(t) {
        let e = t.parentNode;
        return e && "[object ShadowRoot]" === e.toString() && (e = e.host), e
    }

    function Re(t, e, i) {
        let s;
        return "string" == typeof t ? (s = parseInt(t, 10), -1 !== t.indexOf("%") && (s = s / 100 * e.parentNode[i])) : s = t, s
    }
    const Fe = t => t.ownerDocument.defaultView.getComputedStyle(t, null);
    const Ie = ["top", "right", "bottom", "left"];

    function ze(t, e, i) {
        const s = {};
        i = i ? "-" + i : "";
        for (let n = 0; n < 4; n++) {
            const o = Ie[n];
            s[o] = parseFloat(t[e + "-" + o + i]) || 0
        }
        return s.width = s.left + s.right, s.height = s.top + s.bottom, s
    }

    function Ve(t, e) {
        if ("native" in t) return t;
        const {
            canvas: i,
            currentDevicePixelRatio: s
        } = e, n = Fe(i), o = "border-box" === n.boxSizing, a = ze(n, "padding"), r = ze(n, "border", "width"), {
            x: h,
            y: l,
            box: c
        } = function(t, e) {
            const i = t.touches,
                s = i && i.length ? i[0] : t,
                {
                    offsetX: n,
                    offsetY: o
                } = s;
            let a, r, h = !1;
            if (((t, e, i) => (t > 0 || e > 0) && (!i || !i.shadowRoot))(n, o, t.target)) a = n, r = o;
            else {
                const t = e.getBoundingClientRect();
                a = s.clientX - t.left, r = s.clientY - t.top, h = !0
            }
            return {
                x: a,
                y: r,
                box: h
            }
        }(t, i), d = a.left + (c && r.left), u = a.top + (c && r.top);
        let {
            width: f,
            height: g
        } = e;
        return o && (f -= a.width + r.width, g -= a.height + r.height), {
            x: Math.round((h - d) / f * i.width / s),
            y: Math.round((l - u) / g * i.height / s)
        }
    }
    const Be = t => Math.round(10 * t) / 10;

    function Ne(t, e, i, s) {
        const n = Fe(t),
            o = ze(n, "margin"),
            a = Re(n.maxWidth, t, "clientWidth") || R,
            r = Re(n.maxHeight, t, "clientHeight") || R,
            h = function(t, e, i) {
                let s, n;
                if (void 0 === e || void 0 === i) {
                    const o = Le(t);
                    if (o) {
                        const t = o.getBoundingClientRect(),
                            a = Fe(o),
                            r = ze(a, "border", "width"),
                            h = ze(a, "padding");
                        e = t.width - h.width - r.width, i = t.height - h.height - r.height, s = Re(a.maxWidth, o, "clientWidth"), n = Re(a.maxHeight, o, "clientHeight")
                    } else e = t.clientWidth, i = t.clientHeight
                }
                return {
                    width: e,
                    height: i,
                    maxWidth: s || R,
                    maxHeight: n || R
                }
            }(t, e, i);
        let {
            width: l,
            height: c
        } = h;
        if ("content-box" === n.boxSizing) {
            const t = ze(n, "border", "width"),
                e = ze(n, "padding");
            l -= e.width + t.width, c -= e.height + t.height
        }
        l = Math.max(0, l - o.width), c = Math.max(0, s ? l / s : c - o.height), l = Be(Math.min(l, a, h.maxWidth)), c = Be(Math.min(c, r, h.maxHeight)), l && !c && (c = Be(l / 2));
        return (void 0 !== e || void 0 !== i) && s && h.height && c > h.height && (c = h.height, l = Be(Math.floor(c * s))), {
            width: l,
            height: c
        }
    }

    function je(t, e, i) {
        const s = e || 1,
            n = Math.floor(t.height * s),
            o = Math.floor(t.width * s);
        t.height = Math.floor(t.height), t.width = Math.floor(t.width);
        const a = t.canvas;
        return a.style && (i || !a.style.height && !a.style.width) && (a.style.height = `${t.height}px`, a.style.width = `${t.width}px`), (t.currentDevicePixelRatio !== s || a.height !== n || a.width !== o) && (t.currentDevicePixelRatio = s, a.height = n, a.width = o, t.ctx.setTransform(s, 0, 0, s, 0, 0), !0)
    }
    const We = function() {
        let t = !1;
        try {
            const e = {
                get passive() {
                    return t = !0, !1
                }
            };
            window.addEventListener("test", null, e), window.removeEventListener("test", null, e)
        } catch (t) {}
        return t
    }();

    function He(t, e) {
        const i = function(t, e) {
                return Fe(t).getPropertyValue(e)
            }(t, e),
            s = i && i.match(/^(\d+)(\.\d+)?px$/);
        return s ? +s[1] : void 0
    }

    function $e(t, e, i, s) {
        return {
            x: t.x + i * (e.x - t.x),
            y: t.y + i * (e.y - t.y)
        }
    }

    function Ye(t, e, i, s) {
        return {
            x: t.x + i * (e.x - t.x),
            y: "middle" === s ? i < .5 ? t.y : e.y : "after" === s ? i < 1 ? t.y : e.y : i > 0 ? e.y : t.y
        }
    }

    function Ue(t, e, i, s) {
        const n = {
                x: t.cp2x,
                y: t.cp2y
            },
            o = {
                x: e.cp1x,
                y: e.cp1y
            },
            a = $e(t, n, i),
            r = $e(n, o, i),
            h = $e(o, e, i),
            l = $e(a, r, i),
            c = $e(r, h, i);
        return $e(l, c, i)
    }

    function Xe(t, e, i) {
        return t ? function(t, e) {
            return {
                x: i => t + t + e - i,
                setWidth(t) {
                    e = t
                },
                textAlign: t => "center" === t ? t : "right" === t ? "left" : "right",
                xPlus: (t, e) => t - e,
                leftForLtr: (t, e) => t - e
            }
        }(e, i) : {
            x: t => t,
            setWidth(t) {},
            textAlign: t => t,
            xPlus: (t, e) => t + e,
            leftForLtr: (t, e) => t
        }
    }

    function qe(t, e) {
        let i, s;
        "ltr" !== e && "rtl" !== e || (i = t.canvas.style, s = [i.getPropertyValue("direction"), i.getPropertyPriority("direction")], i.setProperty("direction", e, "important"), t.prevTextDirection = s)
    }

    function Qe(t, e) {
        void 0 !== e && (delete t.prevTextDirection, t.canvas.style.setProperty("direction", e[0], e[1]))
    }

    function Ke(t) {
        return "angle" === t ? {
            between: tt,
            compare: Z,
            normalize: J
        } : {
            between: st,
            compare: (t, e) => t - e,
            normalize: t => t
        }
    }

    function Ge({
        start: t,
        end: e,
        count: i,
        loop: s,
        style: n
    }) {
        return {
            start: t % i,
            end: e % i,
            loop: s && (e - t + 1) % i == 0,
            style: n
        }
    }

    function Ze(t, e, i) {
        if (!i) return [t];
        const {
            property: s,
            start: n,
            end: o
        } = i, a = e.length, {
            compare: r,
            between: h,
            normalize: l
        } = Ke(s), {
            start: c,
            end: d,
            loop: u,
            style: f
        } = function(t, e, i) {
            const {
                property: s,
                start: n,
                end: o
            } = i, {
                between: a,
                normalize: r
            } = Ke(s), h = e.length;
            let l, c, {
                start: d,
                end: u,
                loop: f
            } = t;
            if (f) {
                for (d += h, u += h, l = 0, c = h; l < c && a(r(e[d % h][s]), n, o); ++l) d--, u--;
                d %= h, u %= h
            }
            return u < d && (u += h), {
                start: d,
                end: u,
                loop: f,
                style: t.style
            }
        }(t, e, i), g = [];
        let p, m, x, b = !1,
            _ = null;
        const y = () => b || h(n, x, p) && 0 !== r(n, x),
            v = () => !b || 0 === r(o, p) || h(o, x, p);
        for (let t = c, i = c; t <= d; ++t) m = e[t % a], m.skip || (p = l(m[s]), p !== x && (b = h(p, n, o), null === _ && y() && (_ = 0 === r(p, n) ? t : i), null !== _ && v() && (g.push(Ge({
            start: _,
            end: t,
            loop: u,
            count: a,
            style: f
        })), _ = null), i = t, x = p));
        return null !== _ && g.push(Ge({
            start: _,
            end: d,
            loop: u,
            count: a,
            style: f
        })), g
    }

    function Je(t, e) {
        const i = [],
            s = t.segments;
        for (let n = 0; n < s.length; n++) {
            const o = Ze(s[n], t.points, e);
            o.length && i.push(...o)
        }
        return i
    }

    function ti(t, e) {
        const i = t.points,
            s = t.options.spanGaps,
            n = i.length;
        if (!n) return [];
        const o = !!t._loop,
            {
                start: a,
                end: r
            } = function(t, e, i, s) {
                let n = 0,
                    o = e - 1;
                if (i && !s)
                    for (; n < e && !t[n].skip;) n++;
                for (; n < e && t[n].skip;) n++;
                for (n %= e, i && (o += n); o > n && t[o % e].skip;) o--;
                return o %= e, {
                    start: n,
                    end: o
                }
            }(i, n, o, s);
        if (!0 === s) return ei(t, [{
            start: a,
            end: r,
            loop: o
        }], i, e);
        return ei(t, function(t, e, i, s) {
            const n = t.length,
                o = [];
            let a, r = e,
                h = t[e];
            for (a = e + 1; a <= i; ++a) {
                const i = t[a % n];
                i.skip || i.stop ? h.skip || (s = !1, o.push({
                    start: e % n,
                    end: (a - 1) % n,
                    loop: s
                }), e = r = i.stop ? a : null) : (r = a, h.skip && (e = a)), h = i
            }
            return null !== r && o.push({
                start: e % n,
                end: r % n,
                loop: s
            }), o
        }(i, a, r < a ? r + n : r, !!t._fullLoop && 0 === a && r === n - 1), i, e)
    }

    function ei(t, e, i, s) {
        return s && s.setContext && i ? function(t, e, i, s) {
            const n = t._chart.getContext(),
                o = ii(t.options),
                {
                    _datasetIndex: a,
                    options: {
                        spanGaps: r
                    }
                } = t,
                h = i.length,
                l = [];
            let c = o,
                d = e[0].start,
                u = d;

            function f(t, e, s, n) {
                const o = r ? -1 : 1;
                if (t !== e) {
                    for (t += h; i[t % h].skip;) t -= o;
                    for (; i[e % h].skip;) e += o;
                    t % h != e % h && (l.push({
                        start: t % h,
                        end: e % h,
                        loop: s,
                        style: n
                    }), c = n, d = e % h)
                }
            }
            for (const t of e) {
                d = r ? d : t.start;
                let e, o = i[d % h];
                for (u = d + 1; u <= t.end; u++) {
                    const r = i[u % h];
                    e = ii(s.setContext(ce(n, {
                        type: "segment",
                        p0: o,
                        p1: r,
                        p0DataIndex: (u - 1) % h,
                        p1DataIndex: u % h,
                        datasetIndex: a
                    }))), si(e, c) && f(d, u - 1, t.loop, c), o = r, c = e
                }
                d < u - 1 && f(d, u - 1, t.loop, c)
            }
            return l
        }(t, e, i, s) : e
    }

    function ii(t) {
        return {
            backgroundColor: t.backgroundColor,
            borderCapStyle: t.borderCapStyle,
            borderDash: t.borderDash,
            borderDashOffset: t.borderDashOffset,
            borderJoinStyle: t.borderJoinStyle,
            borderWidth: t.borderWidth,
            borderColor: t.borderColor
        }
    }

    function si(t, e) {
        return e && JSON.stringify(t) !== JSON.stringify(e)
    }
})), i.register("gHjef", (function(e, i) {
    /*!
     * @kurkle/color v0.3.2
     * https://github.com/kurkle/color#readme
     * (c) 2023 Jukka Kurkela
     * Released under the MIT License
     */
    function s(t) {
        return t + .5 | 0
    }
    t(e.exports, "Color", (function() {
        return F
    }));
    const n = (t, e, i) => Math.max(Math.min(t, i), e);

    function o(t) {
        return n(s(2.55 * t), 0, 255)
    }

    function a(t) {
        return n(s(255 * t), 0, 255)
    }

    function r(t) {
        return n(s(t / 2.55) / 100, 0, 1)
    }

    function h(t) {
        return n(s(100 * t), 0, 100)
    }
    const l = {
            0: 0,
            1: 1,
            2: 2,
            3: 3,
            4: 4,
            5: 5,
            6: 6,
            7: 7,
            8: 8,
            9: 9,
            A: 10,
            B: 11,
            C: 12,
            D: 13,
            E: 14,
            F: 15,
            a: 10,
            b: 11,
            c: 12,
            d: 13,
            e: 14,
            f: 15
        },
        c = [..."0123456789ABCDEF"],
        d = t => c[15 & t],
        u = t => c[(240 & t) >> 4] + c[15 & t],
        f = t => (240 & t) >> 4 == (15 & t);

    function g(t) {
        var e = (t => f(t.r) && f(t.g) && f(t.b) && f(t.a))(t) ? d : u;
        return t ? "#" + e(t.r) + e(t.g) + e(t.b) + ((t, e) => t < 255 ? e(t) : "")(t.a, e) : void 0
    }
    const p = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;

    function m(t, e, i) {
        const s = e * Math.min(i, 1 - i),
            n = (e, n = (e + t / 30) % 12) => i - s * Math.max(Math.min(n - 3, 9 - n, 1), -1);
        return [n(0), n(8), n(4)]
    }

    function x(t, e, i) {
        const s = (s, n = (s + t / 60) % 6) => i - i * e * Math.max(Math.min(n, 4 - n, 1), 0);
        return [s(5), s(3), s(1)]
    }

    function b(t, e, i) {
        const s = m(t, 1, .5);
        let n;
        for (e + i > 1 && (n = 1 / (e + i), e *= n, i *= n), n = 0; n < 3; n++) s[n] *= 1 - e - i, s[n] += e;
        return s
    }

    function _(t) {
        const e = t.r / 255,
            i = t.g / 255,
            s = t.b / 255,
            n = Math.max(e, i, s),
            o = Math.min(e, i, s),
            a = (n + o) / 2;
        let r, h, l;
        return n !== o && (l = n - o, h = a > .5 ? l / (2 - n - o) : l / (n + o), r = function(t, e, i, s, n) {
            return t === n ? (e - i) / s + (e < i ? 6 : 0) : e === n ? (i - t) / s + 2 : (t - e) / s + 4
        }(e, i, s, l, n), r = 60 * r + .5), [0 | r, h || 0, a]
    }

    function y(t, e, i, s) {
        return (Array.isArray(e) ? t(e[0], e[1], e[2]) : t(e, i, s)).map(a)
    }

    function v(t, e, i) {
        return y(m, t, e, i)
    }

    function M(t) {
        return (t % 360 + 360) % 360
    }

    function w(t) {
        const e = p.exec(t);
        let i, s = 255;
        if (!e) return;
        e[5] !== i && (s = e[6] ? o(+e[5]) : a(+e[5]));
        const n = M(+e[2]),
            r = +e[3] / 100,
            h = +e[4] / 100;
        return i = "hwb" === e[1] ? function(t, e, i) {
            return y(b, t, e, i)
        }(n, r, h) : "hsv" === e[1] ? function(t, e, i) {
            return y(x, t, e, i)
        }(n, r, h) : v(n, r, h), {
            r: i[0],
            g: i[1],
            b: i[2],
            a: s
        }
    }
    const k = {
            x: "dark",
            Z: "light",
            Y: "re",
            X: "blu",
            W: "gr",
            V: "medium",
            U: "slate",
            A: "ee",
            T: "ol",
            S: "or",
            B: "ra",
            C: "lateg",
            D: "ights",
            R: "in",
            Q: "turquois",
            E: "hi",
            P: "ro",
            O: "al",
            N: "le",
            M: "de",
            L: "yello",
            F: "en",
            K: "ch",
            G: "arks",
            H: "ea",
            I: "ightg",
            J: "wh"
        },
        S = {
            OiceXe: "f0f8ff",
            antiquewEte: "faebd7",
            aqua: "ffff",
            aquamarRe: "7fffd4",
            azuY: "f0ffff",
            beige: "f5f5dc",
            bisque: "ffe4c4",
            black: "0",
            blanKedOmond: "ffebcd",
            Xe: "ff",
            XeviTet: "8a2be2",
            bPwn: "a52a2a",
            burlywood: "deb887",
            caMtXe: "5f9ea0",
            KartYuse: "7fff00",
            KocTate: "d2691e",
            cSO: "ff7f50",
            cSnflowerXe: "6495ed",
            cSnsilk: "fff8dc",
            crimson: "dc143c",
            cyan: "ffff",
            xXe: "8b",
            xcyan: "8b8b",
            xgTMnPd: "b8860b",
            xWay: "a9a9a9",
            xgYF: "6400",
            xgYy: "a9a9a9",
            xkhaki: "bdb76b",
            xmagFta: "8b008b",
            xTivegYF: "556b2f",
            xSange: "ff8c00",
            xScEd: "9932cc",
            xYd: "8b0000",
            xsOmon: "e9967a",
            xsHgYF: "8fbc8f",
            xUXe: "483d8b",
            xUWay: "2f4f4f",
            xUgYy: "2f4f4f",
            xQe: "ced1",
            xviTet: "9400d3",
            dAppRk: "ff1493",
            dApskyXe: "bfff",
            dimWay: "696969",
            dimgYy: "696969",
            dodgerXe: "1e90ff",
            fiYbrick: "b22222",
            flSOwEte: "fffaf0",
            foYstWAn: "228b22",
            fuKsia: "ff00ff",
            gaRsbSo: "dcdcdc",
            ghostwEte: "f8f8ff",
            gTd: "ffd700",
            gTMnPd: "daa520",
            Way: "808080",
            gYF: "8000",
            gYFLw: "adff2f",
            gYy: "808080",
            honeyMw: "f0fff0",
            hotpRk: "ff69b4",
            RdianYd: "cd5c5c",
            Rdigo: "4b0082",
            ivSy: "fffff0",
            khaki: "f0e68c",
            lavFMr: "e6e6fa",
            lavFMrXsh: "fff0f5",
            lawngYF: "7cfc00",
            NmoncEffon: "fffacd",
            ZXe: "add8e6",
            ZcSO: "f08080",
            Zcyan: "e0ffff",
            ZgTMnPdLw: "fafad2",
            ZWay: "d3d3d3",
            ZgYF: "90ee90",
            ZgYy: "d3d3d3",
            ZpRk: "ffb6c1",
            ZsOmon: "ffa07a",
            ZsHgYF: "20b2aa",
            ZskyXe: "87cefa",
            ZUWay: "778899",
            ZUgYy: "778899",
            ZstAlXe: "b0c4de",
            ZLw: "ffffe0",
            lime: "ff00",
            limegYF: "32cd32",
            lRF: "faf0e6",
            magFta: "ff00ff",
            maPon: "800000",
            VaquamarRe: "66cdaa",
            VXe: "cd",
            VScEd: "ba55d3",
            VpurpN: "9370db",
            VsHgYF: "3cb371",
            VUXe: "7b68ee",
            VsprRggYF: "fa9a",
            VQe: "48d1cc",
            VviTetYd: "c71585",
            midnightXe: "191970",
            mRtcYam: "f5fffa",
            mistyPse: "ffe4e1",
            moccasR: "ffe4b5",
            navajowEte: "ffdead",
            navy: "80",
            Tdlace: "fdf5e6",
            Tive: "808000",
            TivedBb: "6b8e23",
            Sange: "ffa500",
            SangeYd: "ff4500",
            ScEd: "da70d6",
            pOegTMnPd: "eee8aa",
            pOegYF: "98fb98",
            pOeQe: "afeeee",
            pOeviTetYd: "db7093",
            papayawEp: "ffefd5",
            pHKpuff: "ffdab9",
            peru: "cd853f",
            pRk: "ffc0cb",
            plum: "dda0dd",
            powMrXe: "b0e0e6",
            purpN: "800080",
            YbeccapurpN: "663399",
            Yd: "ff0000",
            Psybrown: "bc8f8f",
            PyOXe: "4169e1",
            saddNbPwn: "8b4513",
            sOmon: "fa8072",
            sandybPwn: "f4a460",
            sHgYF: "2e8b57",
            sHshell: "fff5ee",
            siFna: "a0522d",
            silver: "c0c0c0",
            skyXe: "87ceeb",
            UXe: "6a5acd",
            UWay: "708090",
            UgYy: "708090",
            snow: "fffafa",
            sprRggYF: "ff7f",
            stAlXe: "4682b4",
            tan: "d2b48c",
            teO: "8080",
            tEstN: "d8bfd8",
            tomato: "ff6347",
            Qe: "40e0d0",
            viTet: "ee82ee",
            JHt: "f5deb3",
            wEte: "ffffff",
            wEtesmoke: "f5f5f5",
            Lw: "ffff00",
            LwgYF: "9acd32"
        };
    let P;

    function O(t) {
        P || (P = function() {
            const t = {},
                e = Object.keys(S),
                i = Object.keys(k);
            let s, n, o, a, r;
            for (s = 0; s < e.length; s++) {
                for (a = r = e[s], n = 0; n < i.length; n++) o = i[n], r = r.replace(o, k[o]);
                o = parseInt(S[a], 16), t[r] = [o >> 16 & 255, o >> 8 & 255, 255 & o]
            }
            return t
        }(), P.transparent = [0, 0, 0, 0]);
        const e = P[t.toLowerCase()];
        return e && {
            r: e[0],
            g: e[1],
            b: e[2],
            a: 4 === e.length ? e[3] : 255
        }
    }
    const C = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
    const D = t => t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055,
        T = t => t <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4);

    function A(t, e, i) {
        if (t) {
            let s = _(t);
            s[e] = Math.max(0, Math.min(s[e] + s[e] * i, 0 === e ? 360 : 1)), s = v(s), t.r = s[0], t.g = s[1], t.b = s[2]
        }
    }

    function E(t, e) {
        return t ? Object.assign(e || {}, t) : t
    }

    function L(t) {
        var e = {
            r: 0,
            g: 0,
            b: 0,
            a: 255
        };
        return Array.isArray(t) ? t.length >= 3 && (e = {
            r: t[0],
            g: t[1],
            b: t[2],
            a: 255
        }, t.length > 3 && (e.a = a(t[3]))) : (e = E(t, {
            r: 0,
            g: 0,
            b: 0,
            a: 1
        })).a = a(e.a), e
    }

    function R(t) {
        return "r" === t.charAt(0) ? function(t) {
            const e = C.exec(t);
            let i, s, a, r = 255;
            if (e) {
                if (e[7] !== i) {
                    const t = +e[7];
                    r = e[8] ? o(t) : n(255 * t, 0, 255)
                }
                return i = +e[1], s = +e[3], a = +e[5], i = 255 & (e[2] ? o(i) : n(i, 0, 255)), s = 255 & (e[4] ? o(s) : n(s, 0, 255)), a = 255 & (e[6] ? o(a) : n(a, 0, 255)), {
                    r: i,
                    g: s,
                    b: a,
                    a: r
                }
            }
        }(t) : w(t)
    }
    class F {
        get valid() {
            return this._valid
        }
        get rgb() {
            var t = E(this._rgb);
            return t && (t.a = r(t.a)), t
        }
        set rgb(t) {
            this._rgb = L(t)
        }
        rgbString() {
            return this._valid ? (t = this._rgb) && (t.a < 255 ? `rgba(${t.r}, ${t.g}, ${t.b}, ${r(t.a)})` : `rgb(${t.r}, ${t.g}, ${t.b})`) : void 0;
            var t
        }
        hexString() {
            return this._valid ? g(this._rgb) : void 0
        }
        hslString() {
            return this._valid ? function(t) {
                if (!t) return;
                const e = _(t),
                    i = e[0],
                    s = h(e[1]),
                    n = h(e[2]);
                return t.a < 255 ? `hsla(${i}, ${s}%, ${n}%, ${r(t.a)})` : `hsl(${i}, ${s}%, ${n}%)`
            }(this._rgb) : void 0
        }
        mix(t, e) {
            if (t) {
                const i = this.rgb,
                    s = t.rgb;
                let n;
                const o = e === n ? .5 : e,
                    a = 2 * o - 1,
                    r = i.a - s.a,
                    h = ((a * r == -1 ? a : (a + r) / (1 + a * r)) + 1) / 2;
                n = 1 - h, i.r = 255 & h * i.r + n * s.r + .5, i.g = 255 & h * i.g + n * s.g + .5, i.b = 255 & h * i.b + n * s.b + .5, i.a = o * i.a + (1 - o) * s.a, this.rgb = i
            }
            return this
        }
        interpolate(t, e) {
            return t && (this._rgb = function(t, e, i) {
                const s = T(r(t.r)),
                    n = T(r(t.g)),
                    o = T(r(t.b));
                return {
                    r: a(D(s + i * (T(r(e.r)) - s))),
                    g: a(D(n + i * (T(r(e.g)) - n))),
                    b: a(D(o + i * (T(r(e.b)) - o))),
                    a: t.a + i * (e.a - t.a)
                }
            }(this._rgb, t._rgb, e)), this
        }
        clone() {
            return new F(this.rgb)
        }
        alpha(t) {
            return this._rgb.a = a(t), this
        }
        clearer(t) {
            return this._rgb.a *= 1 - t, this
        }
        greyscale() {
            const t = this._rgb,
                e = s(.3 * t.r + .59 * t.g + .11 * t.b);
            return t.r = t.g = t.b = e, this
        }
        opaquer(t) {
            return this._rgb.a *= 1 + t, this
        }
        negate() {
            const t = this._rgb;
            return t.r = 255 - t.r, t.g = 255 - t.g, t.b = 255 - t.b, this
        }
        lighten(t) {
            return A(this._rgb, 2, t), this
        }
        darken(t) {
            return A(this._rgb, 2, -t), this
        }
        saturate(t) {
            return A(this._rgb, 1, t), this
        }
        desaturate(t) {
            return A(this._rgb, 1, -t), this
        }
        rotate(t) {
            return function(t, e) {
                var i = _(t);
                i[0] = M(i[0] + e), i = v(i), t.r = i[0], t.g = i[1], t.b = i[2]
            }(this._rgb, t), this
        }
        constructor(t) {
            if (t instanceof F) return t;
            const e = typeof t;
            let i;
            var s, n, o;
            "object" === e ? i = L(t) : "string" === e && (o = (s = t).length, "#" === s[0] && (4 === o || 5 === o ? n = {
                r: 255 & 17 * l[s[1]],
                g: 255 & 17 * l[s[2]],
                b: 255 & 17 * l[s[3]],
                a: 5 === o ? 17 * l[s[4]] : 255
            } : 7 !== o && 9 !== o || (n = {
                r: l[s[1]] << 4 | l[s[2]],
                g: l[s[3]] << 4 | l[s[4]],
                b: l[s[5]] << 4 | l[s[6]],
                a: 9 === o ? l[s[7]] << 4 | l[s[8]] : 255
            })), i = n || O(t) || R(t)), this._rgb = i, this._valid = !!i
        }
    }
})), i.register("gfqXM", (function(s, n) {
    t(s.exports, "Line", (function() {
        return p
    }));
    var o = i("fywoC"),
        a = i("eaU1U");
    const r = "label";

    function h(t, e) {
        "function" == typeof t ? t(e) : t && (t.current = e)
    }

    function l(t, e) {
        t.labels = e
    }

    function c(t, e) {
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r;
        const s = [];
        t.datasets = e.map((e => {
            const n = t.datasets.find((t => t[i] === e[i]));
            return n && e.data && !s.includes(n) ? (s.push(n), Object.assign(n, e), n) : {
                ...e
            }
        }))
    }

    function d(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r;
        const i = {
            labels: [],
            datasets: []
        };
        return l(i, t.labels), c(i, t.datasets, e), i
    }

    function u(t, i) {
        const {
            height: s = 150,
            width: n = 300,
            redraw: r = !1,
            datasetIdKey: u,
            type: f,
            data: g,
            options: p,
            plugins: m = [],
            fallbackContent: x,
            updateMode: b,
            ..._
        } = t, y = (0, o.useRef)(null), v = (0, o.useRef)(), M = () => {
            y.current && (v.current = new(0, a.Chart)(y.current, {
                type: f,
                data: d(g, u),
                options: p && {
                    ...p
                },
                plugins: m
            }), h(i, v.current))
        }, w = () => {
            h(i, null), v.current && (v.current.destroy(), v.current = null)
        };
        return (0, o.useEffect)((() => {
            !r && v.current && p && function(t, e) {
                const i = t.options;
                i && e && Object.assign(i, e)
            }(v.current, p)
        }), [r, p]), (0, o.useEffect)((() => {
            !r && v.current && l(v.current.config.data, g.labels)
        }), [r, g.labels]), (0, o.useEffect)((() => {
            !r && v.current && g.datasets && c(v.current.config.data, g.datasets, u)
        }), [r, g.datasets]), (0, o.useEffect)((() => {
            v.current && (r ? (w(), setTimeout(M)) : v.current.update(b))
        }), [r, p, g.labels, g.datasets, b]), (0, o.useEffect)((() => {
            v.current && (w(), setTimeout(M))
        }), [f]), (0, o.useEffect)((() => (M(), () => w())), []), e(o).createElement("canvas", Object.assign({
            ref: y,
            role: "img",
            height: s,
            width: n
        }, _), x)
    }
    const f = (0, o.forwardRef)(u);

    function g(t, i) {
        return a.Chart.register(i), (0, o.forwardRef)(((i, s) => e(o).createElement(f, Object.assign({}, i, {
            ref: s,
            type: t
        }))))
    }
    const p = g("line", a.LineController);
    a.BarController, a.RadarController, a.DoughnutController, a.PolarAreaController, a.BubbleController, a.PieController, a.ScatterController
}));