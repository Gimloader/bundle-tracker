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
a.register('9LbWH', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _y(b.exports, 'default', function() {
        return _r;
    });
    var e = a('0hzx+'),
        f = a('LEQ5w'),
        g = a('eL1p/'),
        h = a('Ls+S6'),
        i = a('VURM9'),
        j = a('4iV4e'),
        k = a('BXKZi0'),
        l = a('Axq+p'),
        m = a('hEZVH');
    let n, o, p = _y => _y;
    g.Chart.register(g.CategoryScale, g.LinearScale, g.PointElement, g.LineElement);
    const q = {
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
    var _r = _y => {
        const s = f.useRef(null),
            t = f.useRef(null),
            [u] = (0, k.default)(s),
            v = f.useRef(0),
            w = f.useMemo(() => ({
                labels: [v.current],
                datasets: [{
                    data: [_y.balance],
                    borderColor: m.default.White,
                    borderWidth: 3,
                    pointRadius: 10,
                    pointBackgroundColor: m.default.Gold,
                    tension: 0
                }]
            }), []),
            x = f.useCallback(() => {
                const _y = t.current;
                if (!_y)
                    return;
                const z = Math.max(1, Math.round(u / 60));
                _y.options.scales.x.min = Math.max(0, v.current - z);
                const A = _y.data.datasets[0].data,
                    B = Math.max(...A) || 0,
                    C = (0, j.takeRight)(A, z + 1),
                    D = Math.min(...C) || 0;
                let E = D;
                if (D < 0) {
                    const F = Math.abs(D).toString().split('');
                    E = 1 === F.length ? 0 : Number(F.map((F, z) => 0 === z ? '1' : 0).join(''));
                }
                _y.options.scales.y.min = E - 1, _y.options.scales.y.max = Math.max(B + 1, 1.05 * B);
            }, [u]);
        return f.useEffect(() => {
            var y;
            x(), null === (y = t.current) || void 0 === y || y.update();
        }, [u]), (0, i.useIntervalWhen)(() => {
            const y = t.current;
            y && (y.data.labels.push(v.current++), y.data.datasets[0].data.push(_g.balance), x(), y.update());
        }, 5000), (0, e.jsx)(_s, {
            children: (0, e.jsx)(_t, {
                ref: s,
                children: (0, e.jsx)(h.Line, {
                    ref: t,
                    options: q,
                    data: w
                })
            })
        });
    };
    const _s = l.default.div.attrs({
            className: 'flex vc'
        })(n || (n = p`
  min-height: 0px;
  flex: 1;
  z-index: 0;
  overflow: hidden;
`)),
        _t = l.default.div.attrs({
            className: 'maxWidth'
        })(o || (o = p`
  height: 90%;
  pointer-events: none;
`));
}), a.register('eL1p/', function(b, c) {
    _g(b.exports, 'BarController', function() {
        return _o;
    }), _g(b.exports, 'BubbleController', function() {
        return _p;
    }), _g(b.exports, 'DoughnutController', function() {
        return _q;
    }), _g(b.exports, 'LineController', function() {
        return _r;
    }), _g(b.exports, 'PolarAreaController', function() {
        return _s;
    }), _g(b.exports, 'PieController', function() {
        return _t;
    }), _g(b.exports, 'RadarController', function() {
        return _u;
    }), _g(b.exports, 'ScatterController', function() {
        return _v;
    }), _g(b.exports, 'Chart', function() {
        return _Z;
    }), _g(b.exports, 'LineElement', function() {
        return _bb;
    }), _g(b.exports, 'PointElement', function() {
        return _cb;
    }), _g(b.exports, 'CategoryScale', function() {
        return _hb;
    }), _g(b.exports, 'LinearScale', function() {
        return _jb;
    });
    var d = a('1bFPu'),
        e = a('Y2cfq');
    e = a('Y2cfq');
    class f {
        _notify(_g, h, i, j) {
            const k = h.listeners[j],
                l = h.duration;
            k.forEach(j => j({
                chart: _g,
                initial: h.initial,
                numSteps: l,
                currentStep: Math.min(i - h.start, l)
            }));
        }
        _refresh() {
            this._request || (this._running = !0, this._request = e.r.call(window, () => {
                this._update(), this._request = null, this._running && this._refresh();
            }));
        }
        _update(g = Date.now()) {
            let h = 0;
            this._charts.forEach((a, c) => {
                if (!a.running || !a.items.length)
                    return;
                const i = a.items;
                let j, k = i.length - 1,
                    l = !1;
                for (; k >= 0; --k)
                    j = i[k], j._active ? (j._total > a.duration && (a.duration = j._total), j.tick(g), l = !0) : (i[k] = i[i.length - 1], i.pop());
                l && (c.draw(), this._notify(c, a, g, 'progress')), i.length || (a.running = !1, this._notify(c, a, g, 'complete'), a.initial = !1), h += i.length;
            }), this._lastDate = g, 0 === h && (this._running = !1);
        }
        _getAnims(g) {
            const h = this._charts;
            let i = h.get(g);
            return i || (i = {
                running: !1,
                initial: !0,
                items: [],
                listeners: {
                    complete: [],
                    progress: []
                }
            }, h.set(g, i)), i;
        }
        listen(g, h, i) {
            this._getAnims(g).listeners[h].push(i);
        }
        add(g, h) {
            h && h.length && this._getAnims(g).items.push(...h);
        }
        has(g) {
            return this._getAnims(g).items.length > 0;
        }
        start(g) {
            const h = this._charts.get(g);
            h && (h.running = !0, h.start = Date.now(), h.duration = h.items.reduce((g, h) => Math.max(g, h._duration), 0), this._refresh());
        }
        running(g) {
            if (!this._running)
                return !1;
            const h = this._charts.get(g);
            return !!(h && h.running && h.items.length);
        }
        stop(g) {
            const h = this._charts.get(g);
            if (!h || !h.items.length)
                return;
            const i = h.items;
            let j = i.length - 1;
            for (; j >= 0; --j)
                i[j].cancel();
            h.items = [], this._notify(g, h, Date.now(), 'complete');
        }
        remove(g) {
            return this._charts.delete(g);
        }
        constructor() {
            this._request = null, this._charts = new Map(), this._running = !1, this._lastDate = void 0;
        }
    }
    var g = new f();
    const h = 'transparent',
        i = {
            boolean: (_j, b, a) => a > 0.5 ? b : _j,
            color(_j, k, l) {
                const m = (0, e.c)(_j || h),
                    n = m.valid && (0, e.c)(k || h);
                return n && n.valid ? n.mix(m, l).hexString() : k;
            },
            number: (_k, b, a) => _k + (b - _k) * a
        };
    class j {
        active() {
            return this._active;
        }
        update(_k, l, m) {
            if (this._active) {
                this._notify(!1);
                const n = this._target[this._prop],
                    o = m - this._start,
                    p = this._duration - o;
                this._start = m, this._duration = Math.floor(Math.max(p, _k.duration)), this._total += o, this._loop = !!_k.loop, this._to = (0, e.a)([
                    _k.to,
                    l,
                    n,
                    _k.from
                ]), this._from = (0, e.a)([
                    _k.from,
                    n,
                    l
                ]);
            }
        }
        cancel() {
            this._active && (this.tick(Date.now()), this._active = !1, this._notify(!1));
        }
        tick(k) {
            const l = k - this._start,
                m = this._duration,
                n = this._prop,
                o = this._from,
                p = this._loop,
                q = this._to;
            let r;
            if (this._active = o !== q && (p || l < m), !this._active)
                return this._target[n] = q, void this._notify(!0);
            l < 0 ? this._target[n] = o : (r = l / m % 2, r = p && r > 1 ? 2 - r : r, r = this._easing(Math.min(1, Math.max(0, r))), this._target[n] = this._fn(o, q, r));
        }
        wait() {
            const k = this._promises || (this._promises = []);
            return new Promise((b, a) => {
                k.push({
                    res: b,
                    rej: a
                });
            });
        }
        _notify(k) {
            const l = k ? 'res' : 'rej',
                m = this._promises || [];
            for (let n = 0; n < m.length; n++)
                m[n][l]();
        }
        constructor(k, l, m, n) {
            const o = l[m];
            n = (0, e.a)([
                k.to,
                n,
                o,
                k.from
            ]);
            const p = (0, e.a)([
                k.from,
                o,
                n
            ]);
            this._active = !0, this._fn = k.fn || i[k.type || typeof p], this._easing = e.e[k.easing] || e.e.linear, this._start = Math.floor(Date.now() + (k.delay || 0)), this._duration = this._total = Math.floor(k.duration), this._loop = !!k.loop, this._target = l, this._prop = m, this._from = p, this._to = n, this._promises = void 0;
        }
    }
    class k {
        configure(l) {
            if (!(0, e.i)(l))
                return;
            const m = Object.keys(e.d.animation),
                n = this._properties;
            Object.getOwnPropertyNames(l).forEach(c => {
                const o = l[c];
                if (!(0, e.i)(o))
                    return;
                const p = {};
                for (const q of m)
                    p[q] = o[q];
                ((0, e.b)(o.properties) && o.properties || [c]).forEach(q => {
                    q !== c && n.has(q) || n.set(q, p);
                });
            });
        }
        _animateOptions(l, m) {
            const n = m.options,
                o = function(p, q) {
                    if (!q)
                        return;
                    let r = p.options;
                    if (!r)
                        return void(p.options = q);
                    r.$shared && (p.options = r = Object.assign({}, r, {
                        $shared: !1,
                        $animations: {}
                    }));
                    return r;
                }(l, n);
            if (!o)
                return [];
            const p = this._createAnimations(o, n);
            return n.$shared && function(q, r) {
                const s = [],
                    t = Object.keys(r);
                for (let u = 0; u < t.length; u++) {
                    const v = q[t[u]];
                    v && v.active() && s.push(v.wait());
                }
                return Promise.all(s);
            }(l.options.$animations, n).then(() => {
                l.options = n;
            }, () => {}), p;
        }
        _createAnimations(l, m) {
            const n = this._properties,
                o = [],
                p = l.$animations || (l.$animations = {}),
                q = Object.keys(m),
                r = Date.now();
            let s;
            for (s = q.length - 1; s >= 0; --s) {
                const t = q[s];
                if ('$' === t.charAt(0))
                    continue;
                if ('options' === t) {
                    o.push(...this._animateOptions(l, m));
                    continue;
                }
                const u = m[t];
                let v = p[t];
                const w = n.get(t);
                if (v) {
                    if (w && v.active()) {
                        v.update(w, u, r);
                        continue;
                    }
                    v.cancel();
                }
                w && w.duration ? (p[t] = v = new j(w, l, t, u), o.push(v)) : l[t] = u;
            }
            return o;
        }
        update(l, m) {
            if (0 === this._properties.size)
                return void Object.assign(l, m);
            const n = this._createAnimations(l, m);
            return n.length ? (g.add(this._chart, n), !0) : void 0;
        }
        constructor(l, m) {
            this._chart = l, this._properties = new Map(), this.configure(m);
        }
    }

    function l(m, n) {
        const o = m && m.options || {},
            p = o.reverse,
            q = void 0 === o.min ? n : 0,
            r = void 0 === o.max ? n : 0;
        return {
            start: p ? r : q,
            end: p ? q : r
        };
    }

    function l(m, n) {
        const o = [],
            p = m._getSortedDatasetMetas(n);
        let q, r;
        for (q = 0, r = p.length; q < r; ++q)
            o.push(p[q].index);
        return o;
    }

    function l(m, n, o, p = {}) {
        const q = m.keys,
            r = 'single' === p.mode;
        let s, t, u, v;
        if (null !== n) {
            for (s = 0, t = q.length; s < t; ++s) {
                if (u = +q[s], u === o) {
                    if (p.all)
                        continue;
                    break;
                }
                v = m.values[u], (0, e.g)(v) && (r || 0 === n || (0, e.s)(n) === (0, e.s)(v)) && (n += v);
            }
            return n;
        }
    }

    function l(m, n) {
        const o = m && m.options.stacked;
        return o || void 0 === o && void 0 !== n.stack;
    }

    function l(m, n, o) {
        const p = m[n] || (m[n] = {});
        return p[o] || (p[o] = {});
    }

    function l(m, n, o, p) {
        for (const q of n.getMatchingVisibleMetas(p).reverse()) {
            const r = m[q.index];
            if (o && r > 0 || !o && r < 0)
                return q.index;
        }
        return null;
    }

    function l(m, n) {
        const {
            chart: o,
            _cachedMeta: p
        } = m, q = o._stacks || (o._stacks = {}), {
            iScale: r,
            vScale: s,
            index: t
        } = p, u = r.axis, v = s.axis, w = function(x, y, z) {
            return `${ x.id }.${ y.id }.${ z.stack || z.type }`;
        }(r, s, p), x = n.length;
        let y;
        for (let z = 0; z < x; ++z) {
            const A = n[z],
                {
                    [B]: C,
                    [D]: E
                } = A;
            y = (A._stacks || (A._stacks = {}))[D] = _G(q, w, C), y[t] = E, y._top = _H(y, s, !0, p.type), y._bottom = _H(y, s, !1, p.type);
            (y._visualValues || (y._visualValues = {}))[t] = E;
        }
    }

    function l(m, n) {
        const o = m.scales;
        return Object.keys(o).filter(m => o[m].axis === n).shift();
    }

    function l(m, n) {
        const o = m.controller.index,
            p = m.vScale && m.vScale.axis;
        if (p) {
            n = n || m._parsed;
            for (const q of n) {
                const r = q._stacks;
                if (!r || void 0 === r[p] || void 0 === r[p][o])
                    return;
                delete r[p][o], void 0 !== r[p]._visualValues && void 0 !== r[p]._visualValues[o] && delete r[p]._visualValues[o];
            }
        }
    }
    const l = _o => 'reset' === _o || 'none' === _o,
        m = (_o, b) => b ? _o : Object.assign({}, _o);
    class n {
        initialize() {
            const _o = this._cachedMeta;
            this.configure(), this.linkScales(), _o._stacked = _B(_o.vScale, _o), this.addElements(), this.options.fill && !this.chart.isPluginEnabled('filler') && console.warn('Tried to use the \'fill\' option without the \'Filler\' plugin enabled. Please import and register the \'Filler\' plugin and make sure it is not disabled in the options');
        }
        updateIndex(o) {
            this.index !== o && _K(this._cachedMeta), this.index = o;
        }
        linkScales() {
            const o = this.chart,
                p = this._cachedMeta,
                q = this.getDataset(),
                r = (o, p, q, r) => 'x' === o ? p : 'r' === o ? r : q,
                s = p.xAxisID = (0, e.v)(q.xAxisID, _Y(o, 'x')),
                t = p.yAxisID = (0, e.v)(q.yAxisID, _Y(o, 'y')),
                u = p.rAxisID = (0, e.v)(q.rAxisID, _Y(o, 'r')),
                v = p.indexAxis,
                w = p.iAxisID = r(v, s, t, u),
                x = p.vAxisID = r(v, t, s, u);
            p.xScale = this.getScaleForId(s), p.yScale = this.getScaleForId(t), p.rScale = this.getScaleForId(u), p.iScale = this.getScaleForId(w), p.vScale = this.getScaleForId(x);
        }
        getDataset() {
            return this.chart.data.datasets[this.index];
        }
        getMeta() {
            return this.chart.getDatasetMeta(this.index);
        }
        getScaleForId(o) {
            return this.chart.scales[o];
        }
        _getOtherScale(o) {
            const p = this._cachedMeta;
            return o === p.iScale ? p.vScale : p.iScale;
        }
        reset() {
            this._update('reset');
        }
        _destroy() {
            const o = this._cachedMeta;
            this._data && (0, e.u)(this._data, this), o._stacked && _K(o);
        }
        _dataCheck() {
            const o = this.getDataset(),
                p = o.data || (o.data = []),
                q = this._data;
            if ((0, e.i)(p))
                this._data = function(r) {
                    const s = Object.keys(r),
                        t = new Array(s.length);
                    let u, v, w;
                    for (u = 0, v = s.length; u < v; ++u)
                        w = s[u], t[u] = {
                            x: w,
                            y: r[w]
                        };
                    return t;
                }(p);
            else if (q !== p) {
                if (q) {
                    (0, e.u)(q, this);
                    const r = this._cachedMeta;
                    _K(r), r._parsed = [];
                }
                p && Object.isExtensible(p) && (0, e.l)(p, this), this._syncList = [], this._data = p;
            }
        }
        addElements() {
            const o = this._cachedMeta;
            this._dataCheck(), this.datasetElementType && (o.dataset = new this.datasetElementType());
        }
        buildOrUpdateElements(o) {
            const p = this._cachedMeta,
                q = this.getDataset();
            let r = !1;
            this._dataCheck();
            const s = p._stacked;
            p._stacked = _B(p.vScale, p), p.stack !== q.stack && (r = !0, _K(p), p.stack = q.stack), this._resyncElements(o), (r || s !== p._stacked) && _X(this, p._parsed);
        }
        configure() {
            const o = this.chart.config,
                p = o.datasetScopeKeys(this._type),
                q = o.getOptionScopes(this.getDataset(), p, !0);
            this.options = o.createResolver(q, this.getContext()), this._parsing = this.options.parsing, this._cachedDataOpts = {};
        }
        parse(o, p) {
            const {
                _cachedMeta: q,
                _data: r
            } = this, {
                iScale: s,
                _stacked: t
            } = q, u = s.axis;
            let v, w, x, y = 0 === o && p === r.length || q._sorted,
                z = o > 0 && q._parsed[o - 1];
            if (!1 === this._parsing)
                q._parsed = r, q._sorted = !0, x = r;
            else {
                x = (0, e.b)(r[o]) ? this.parseArrayData(q, r, o, p) : (0, e.i)(r[o]) ? this.parseObjectData(q, r, o, p) : this.parsePrimitiveData(q, r, o, p);
                const A = () => null === w[u] || z && w[u] < z[u];
                for (v = 0; v < p; ++v)
                    q._parsed[v + o] = w = x[v], y && (A() && (y = !1), z = w);
                q._sorted = y;
            }
            t && _X(this, x);
        }
        parsePrimitiveData(o, p, q, r) {
            const {
                iScale: s,
                vScale: t
            } = o, u = s.axis, v = t.axis, w = s.getLabels(), x = s === t, y = new Array(r);
            let z, A, B;
            for (z = 0, A = r; z < A; ++z)
                B = z + q, y[z] = {
                    [u]: x || s.parse(w[B], B),
                    [v]: t.parse(p[B], B)
                };
            return y;
        }
        parseArrayData(o, p, q, r) {
            const {
                xScale: s,
                yScale: t
            } = o, u = new Array(r);
            let v, w, x, y;
            for (v = 0, w = r; v < w; ++v)
                x = v + q, y = p[x], u[v] = {
                    x: s.parse(y[0], x),
                    y: t.parse(y[1], x)
                };
            return u;
        }
        parseObjectData(o, p, q, r) {
            const {
                xScale: s,
                yScale: t
            } = o, {
                xAxisKey: u = 'x',
                yAxisKey: v = 'y'
            } = this._parsing, w = new Array(r);
            let x, y, z, A;
            for (x = 0, y = r; x < y; ++x)
                z = x + q, A = p[z], w[x] = {
                    x: s.parse((0, e.f)(A, u), z),
                    y: t.parse((0, e.f)(A, v), z)
                };
            return w;
        }
        getParsed(o) {
            return this._cachedMeta._parsed[o];
        }
        getDataElement(o) {
            return this._cachedMeta.data[o];
        }
        applyStack(o, p, q) {
            const r = this.chart,
                s = this._cachedMeta,
                t = p[o.axis];
            return _A({
                keys: _A(r, !0),
                values: p._stacks[o.axis]._visualValues
            }, t, s.index, {
                mode: q
            });
        }
        updateRangeFromParsed(o, p, q, r) {
            const s = q[p.axis];
            let t = null === s ? NaN : s;
            const u = r && q._stacks[p.axis];
            r && u && (r.values = u, t = _A(r, s, this._cachedMeta.index)), o.min = Math.min(o.min, t), o.max = Math.max(o.max, t);
        }
        getMinMax(o, p) {
            const q = this._cachedMeta,
                r = q._parsed,
                s = q._sorted && o === q.iScale,
                t = r.length,
                u = this._getOtherScale(o),
                v = ((o, p, q) => o && !p.hidden && p._stacked && {
                    keys: _A(q, !0),
                    values: null
                })(p, q, this.chart),
                w = {
                    min: Number.POSITIVE_INFINITY,
                    max: Number.NEGATIVE_INFINITY
                },
                {
                    min: x,
                    max: y
                } = function(z) {
                    const {
                        min: A,
                        max: B,
                        minDefined: C,
                        maxDefined: D
                    } = z.getUserBounds();
                    return {
                        min: C ? A : Number.NEGATIVE_INFINITY,
                        max: D ? B : Number.POSITIVE_INFINITY
                    };
                }(u);
            let z, _A;

            function _B() {
                _A = r[z];
                const C = _A[u.axis];
                return !(0, e.g)(_A[o.axis]) || x > C || y < C;
            }
            for (z = 0; z < t && (_D() || (this.updateRangeFromParsed(w, o, _A, v), !s)); ++z);
            if (s)
                for (z = t - 1; z >= 0; --z)
                    if (!_D()) {
                        this.updateRangeFromParsed(w, o, _A, v);
                        break;
                    }
            return w;
        }
        getAllParsedValues(o) {
            const p = this._cachedMeta._parsed,
                q = [];
            let r, s, t;
            for (r = 0, s = p.length; r < s; ++r)
                t = p[r][o.axis], (0, e.g)(t) && q.push(t);
            return q;
        }
        getMaxOverflow() {
            return !1;
        }
        getLabelAndValue(o) {
            const p = this._cachedMeta,
                q = p.iScale,
                r = p.vScale,
                s = this.getParsed(o);
            return {
                label: q ? '' + q.getLabelForValue(s[q.axis]) : '',
                value: r ? '' + r.getLabelForValue(s[r.axis]) : ''
            };
        }
        _update(o) {
            const p = this._cachedMeta;
            this.update(o || 'default'), p._clip = function(q) {
                let r, s, t, u;
                return (0, e.i)(q) ? (r = q.top, s = q.right, t = q.bottom, u = q.left) : r = s = t = u = q, {
                    top: r,
                    right: s,
                    bottom: t,
                    left: u,
                    disabled: !1 === q
                };
            }((0, e.v)(this.options.clip, function(q, r, s) {
                if (!1 === s)
                    return !1;
                const t = _z(q, s),
                    u = _z(r, s);
                return {
                    top: u.end,
                    right: t.end,
                    bottom: u.start,
                    left: t.start
                };
            }(p.xScale, p.yScale, this.getMaxOverflow())));
        }
        update(o) {}
        draw() {
            const o = this._ctx,
                p = this.chart,
                q = this._cachedMeta,
                r = q.data || [],
                s = p.chartArea,
                t = [],
                u = this._drawStart || 0,
                v = this._drawCount || r.length - u,
                w = this.options.drawActiveElementsOnTop;
            let x;
            for (q.dataset && q.dataset.draw(o, s, u, v), x = u; x < u + v; ++x) {
                const y = r[x];
                y.hidden || (y.active && w ? t.push(y) : y.draw(o, s));
            }
            for (x = 0; x < t.length; ++x)
                t[x].draw(o, s);
        }
        getStyle(o, p) {
            const q = p ? 'active' : 'default';
            return void 0 === o && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(q) : this.resolveDataElementOptions(o || 0, q);
        }
        getContext(o, p, q) {
            const r = this.getDataset();
            let s;
            if (o >= 0 && o < this._cachedMeta.data.length) {
                const t = this._cachedMeta.data[o];
                s = t.$context || (t.$context = function(u, v, w) {
                    return (0, e.j)(u, {
                        active: !1,
                        dataIndex: v,
                        parsed: void 0,
                        raw: void 0,
                        element: w,
                        index: v,
                        mode: 'default',
                        type: 'data'
                    });
                }(this.getContext(), o, t)), s.parsed = this.getParsed(o), s.raw = r.data[o], s.index = s.dataIndex = o;
            } else
                s = this.$context || (this.$context = function(t, u) {
                    return (0, e.j)(t, {
                        active: !1,
                        dataset: void 0,
                        datasetIndex: u,
                        index: u,
                        mode: 'default',
                        type: 'dataset'
                    });
                }(this.chart.getContext(), this.index)), s.dataset = r, s.index = s.datasetIndex = this.index;
            return s.active = !!p, s.mode = q, s;
        }
        resolveDatasetElementOptions(o) {
            return this._resolveElementOptions(this.datasetElementType.id, o);
        }
        resolveDataElementOptions(o, p) {
            return this._resolveElementOptions(this.dataElementType.id, p, o);
        }
        _resolveElementOptions(o, p = 'default', q) {
            const r = 'active' === p,
                s = this._cachedDataOpts,
                t = o + '-' + p,
                u = s[t],
                v = this.enableOptionSharing && (0, e.h)(q);
            if (u)
                return m(u, v);
            const w = this.chart.config,
                x = w.datasetElementScopeKeys(this._type, o),
                y = r ? [
                    `${ o }Hover`,
                    'hover',
                    o,
                    ''
                ] : [
                    o,
                    ''
                ],
                _z = w.getOptionScopes(this.getDataset(), x),
                _A = Object.keys(e.d.elements[o]),
                B = w.resolveNamedOptions(_z, _A, () => this.getContext(q, r, p), y);
            return B.$shared && (B.$shared = v, s[t] = Object.freeze(m(B, v))), B;
        }
        _resolveAnimations(o, p, q) {
            const r = this.chart,
                s = this._cachedDataOpts,
                t = `animation-${ p }`,
                u = s[t];
            if (u)
                return u;
            let v;
            if (!1 !== r.options.animation) {
                const w = this.chart.config,
                    x = w.datasetAnimationScopeKeys(this._type, p),
                    y = w.getOptionScopes(this.getDataset(), x);
                v = w.createResolver(y, this.getContext(o, q, p));
            }
            const w = new k(r, v && v.animations);
            return v && v._cacheable && (s[t] = Object.freeze(w)), w;
        }
        getSharedOptions(o) {
            if (o.$shared)
                return this._sharedOptions || (this._sharedOptions = Object.assign({}, o));
        }
        includeOptions(o, p) {
            return !p || l(o) || this.chart._animationsDisabled;
        }
        _getSharedOptions(o, p) {
            const q = this.resolveDataElementOptions(o, p),
                r = this._sharedOptions,
                s = this.getSharedOptions(q),
                t = this.includeOptions(p, s) || s !== r;
            return this.updateSharedOptions(s, p, q), {
                sharedOptions: s,
                includeOptions: t
            };
        }
        updateElement(o, p, q, r) {
            l(r) ? Object.assign(o, q) : this._resolveAnimations(p, r).update(o, q);
        }
        updateSharedOptions(o, p, q) {
            o && !l(p) && this._resolveAnimations(void 0, p).update(o, q);
        }
        _setStyle(o, p, q, r) {
            o.active = r;
            const s = this.getStyle(p, r);
            this._resolveAnimations(p, q, r).update(o, {
                options: !r && this.getSharedOptions(s) || s
            });
        }
        removeHoverStyle(o, p, q) {
            this._setStyle(o, q, 'active', !1);
        }
        setHoverStyle(o, p, q) {
            this._setStyle(o, q, 'active', !0);
        }
        _removeDatasetHoverStyle() {
            const o = this._cachedMeta.dataset;
            o && this._setStyle(o, void 0, 'active', !1);
        }
        _setDatasetHoverStyle() {
            const o = this._cachedMeta.dataset;
            o && this._setStyle(o, void 0, 'active', !0);
        }
        _resyncElements(o) {
            const p = this._data,
                q = this._cachedMeta.data;
            for (const [r, s, t] of this._syncList)
                this[r](s, t);
            this._syncList = [];
            const u = t.length,
                v = s.length,
                w = Math.min(v, u);
            w && this.parse(0, w), v > u ? this._insertElements(u, v - u, r) : v < u && this._removeElements(v, u - v);
        }
        _insertElements(o, p, q = !0) {
            const r = this._cachedMeta,
                s = r.data,
                t = o + p;
            let u;
            const v = o => {
                for (o.length += p, u = o.length - 1; u >= t; u--)
                    o[u] = o[u - p];
            };
            for (v(s), u = o; u < t; ++u)
                s[u] = new this.dataElementType();
            this._parsing && v(r._parsed), this.parse(o, p), q && this.updateElements(s, o, p, 'reset');
        }
        updateElements(o, p, q, r) {}
        _removeElements(o, p) {
            const q = this._cachedMeta;
            if (this._parsing) {
                const r = q._parsed.splice(o, p);
                q._stacked && _K(q, r);
            }
            q.data.splice(o, p);
        }
        _sync(o) {
            if (this._parsing)
                this._syncList.push(o);
            else {
                const [p, q, r] = o;
                this[p](q, r);
            }
            this.chart._dataChanges.push([
                this.index,
                ...o
            ]);
        }
        _onDataPush() {
            const o = arguments.length;
            this._sync([
                '_insertElements',
                this.getDataset().data.length - o,
                o
            ]);
        }
        _onDataPop() {
            this._sync([
                '_removeElements',
                this._cachedMeta.data.length - 1,
                1
            ]);
        }
        _onDataShift() {
            this._sync([
                '_removeElements',
                0,
                1
            ]);
        }
        _onDataSplice(o, p) {
            p && this._sync([
                '_removeElements',
                o,
                p
            ]);
            const q = arguments.length - 2;
            q && this._sync([
                '_insertElements',
                o,
                q
            ]);
        }
        _onDataUnshift() {
            this._sync([
                '_insertElements',
                0,
                arguments.length
            ]);
        }
        constructor(o, p) {
            this.chart = o, this._ctx = o.ctx, this.index = p, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = !1, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = !1, this.supportsDecimation = !1, this.$context = void 0, this._syncList = [], this.datasetElementType = new.target.datasetElementType, this.dataElementType = new.target.dataElementType, this.initialize();
        }
    }

    function o(p) {
        const q = p.iScale,
            r = function(s, t) {
                if (!s._cache.$bar) {
                    const u = s.getMatchingVisibleMetas(t);
                    let v = [];
                    for (let w = 0, x = u.length; w < x; w++)
                        v = v.concat(u[w].controller.getAllParsedValues(s));
                    s._cache.$bar = (0, e._)(v.sort((s, w) => s - w));
                }
                return s._cache.$bar;
            }(q, p.type);
        let s, t, u, v, w = q._length;
        const x = () => {
            32767 !== u && -32768 !== u && ((0, e.h)(v) && (w = Math.min(w, Math.abs(u - v) || w)), v = u);
        };
        for (s = 0, t = r.length; s < t; ++s)
            u = q.getPixelForValue(r[s]), x();
        for (v = void 0, s = 0, t = q.ticks.length; s < t; ++s)
            u = q.getPixelForTick(s), x();
        return w;
    }

    function o(p, q, r, s) {
        return (0, e.b)(p) ? function(t, u, v, w) {
            const x = v.parse(t[0], w),
                y = v.parse(t[1], w),
                z = Math.min(x, y),
                A = Math.max(x, y);
            let B = z,
                C = A;
            Math.abs(z) > Math.abs(A) && (B = A, C = z), u[v.axis] = C, u._custom = {
                barStart: B,
                barEnd: C,
                start: x,
                end: y,
                min: z,
                max: A
            };
        }(p, q, r, s) : q[r.axis] = r.parse(p, s), q;
    }

    function o(p, q, r, s) {
        const t = p.iScale,
            u = p.vScale,
            v = t.getLabels(),
            w = t === u,
            x = [];
        let y, z, A, B;
        for (y = r, z = r + s; y < z; ++y)
            B = q[y], A = {}, A[t.axis] = w || t.parse(v[y], y), x.push(_kb(B, A, u, y));
        return x;
    }

    function o(p) {
        return p && void 0 !== p.barStart && void 0 !== p.barEnd;
    }

    function o(p, q, r, s) {
        let t = q.borderSkipped;
        const u = {};
        if (!t)
            return void(p.borderSkipped = u);
        if (!0 === t)
            return void(p.borderSkipped = {
                top: !0,
                right: !0,
                bottom: !0,
                left: !0
            });
        const {
            start: v,
            end: w,
            reverse: x,
            top: y,
            bottom: z
        } = function(A) {
            let B, C, D, E, F;
            return A.horizontal ? (B = A.base > A.x, C = 'left', D = 'right') : (B = A.base < A.y, C = 'bottom', D = 'top'), B ? (E = 'end', F = 'start') : (E = 'start', F = 'end'), {
                start: C,
                end: D,
                reverse: B,
                top: E,
                bottom: F
            };
        }(p);
        'middle' === t && r && (p.enableBorderRadius = !0, (r._top || 0) === s ? t = y : (r._bottom || 0) === s ? t = z : (u[_o(z, v, w, x)] = !0, t = y)), u[_o(t, v, w, x)] = !0, p.borderSkipped = u;
    }

    function _o(p, q, r, s) {
        var t, u, v;
        return s ? (v = r, p = _o(p = (t = p) === (u = q) ? v : t === v ? u : t, r, q)) : p = _o(p, q, r), p;
    }

    function _o(p, q, r) {
        return 'start' === p ? q : 'end' === p ? r : p;
    }

    function o(p, {
        inflateAmount: q
    }, r) {
        p.inflateAmount = 'auto' === q ? 1 === r ? 0.33 : 0 : q;
    }
    (0, d.default)(n, 'defaults', {}), (0, d.default)(n, 'datasetElementType', null), (0, d.default)(n, 'dataElementType', null);
    class _o extends n {
        parsePrimitiveData(p, q, r, s) {
            return _lb(p, q, r, s);
        }
        parseArrayData(p, q, r, s) {
            return _lb(p, q, r, s);
        }
        parseObjectData(p, q, r, s) {
            const {
                iScale: t,
                vScale: u
            } = p, {
                xAxisKey: v = 'x',
                yAxisKey: w = 'y'
            } = this._parsing, x = 'x' === t.axis ? v : w, y = 'x' === u.axis ? v : w, z = [];
            let A, B, C, _D;
            for (A = r, B = r + s; A < B; ++A)
                _D = q[A], C = {}, C[t.axis] = t.parse((0, e.f)(_D, x), A), z.push(_kb((0, e.f)(_D, y), C, u, A));
            return z;
        }
        updateRangeFromParsed(p, q, r, s) {
            super.updateRangeFromParsed(p, q, r, s);
            const t = r._custom;
            t && q === this._cachedMeta.vScale && (p.min = Math.min(p.min, t.min), p.max = Math.max(p.max, t.max));
        }
        getMaxOverflow() {
            return 0;
        }
        getLabelAndValue(p) {
            const q = this._cachedMeta,
                {
                    iScale: r,
                    vScale: s
                } = q,
                t = this.getParsed(p),
                u = t._custom,
                v = _mb(u) ? '[' + u.start + ', ' + u.end + ']' : '' + s.getLabelForValue(t[s.axis]);
            return {
                label: '' + r.getLabelForValue(t[r.axis]),
                value: v
            };
        }
        initialize() {
            this.enableOptionSharing = !0, super.initialize();
            this._cachedMeta.stack = this.getDataset().stack;
        }
        update(p) {
            const q = this._cachedMeta;
            this.updateElements(q.data, 0, q.data.length, p);
        }
        updateElements(p, q, r, s) {
            const t = 'reset' === s,
                {
                    index: u,
                    _cachedMeta: {
                        vScale: v
                    }
                } = this,
                w = v.getBasePixel(),
                x = v.isHorizontal(),
                y = this._getRuler(),
                {
                    sharedOptions: z,
                    includeOptions: A
                } = this._getSharedOptions(q, s);
            for (let B = q; B < q + r; B++) {
                const C = this.getParsed(B),
                    D = t || (0, e.k)(C[v.axis]) ? {
                        base: w,
                        head: w
                    } : this._calculateBarValuePixels(B),
                    E = this._calculateBarIndexPixels(B, y),
                    F = (C._stacks || {})[v.axis],
                    _G = {
                        horizontal: x,
                        base: D.base,
                        enableBorderRadius: !F || _mb(C._custom) || u === F._top || u === F._bottom,
                        x: x ? D.head : E.center,
                        y: x ? E.center : D.head,
                        height: x ? E.size : Math.abs(D.size),
                        width: x ? Math.abs(D.size) : E.size
                    };
                A && (_G.options = z || this.resolveDataElementOptions(B, p[B].active ? 'active' : s));
                const _H = _G.options || p[B].options;
                _nb(_G, _H, F, u), _l(_G, _H, y.ratio), this.updateElement(p[B], B, _G, s);
            }
        }
        _getStacks(p, q) {
            const {
                iScale: r
            } = this._cachedMeta, s = r.getMatchingVisibleMetas(this._type).filter(p => p.controller.options.grouped), t = r.options.stacked, u = [], v = p => {
                const w = p.controller.getParsed(q),
                    x = w && w[p.vScale.axis];
                if ((0, e.k)(x) || isNaN(x))
                    return !0;
            };
            for (const w of s)
                if ((void 0 === q || !v(w)) && ((!1 === t || -1 === u.indexOf(w.stack) || void 0 === t && void 0 === w.stack) && u.push(w.stack), w.index === p))
                    break;
            return u.length || u.push(void 0), u;
        }
        _getStackCount(p) {
            return this._getStacks(void 0, p).length;
        }
        _getStackIndex(p, q, r) {
            const s = this._getStacks(p, r),
                t = void 0 !== q ? s.indexOf(q) : -1;
            return -1 === t ? s.length - 1 : t;
        }
        _getRuler() {
            const p = this.options,
                q = this._cachedMeta,
                r = q.iScale,
                s = [];
            let t, u;
            for (t = 0, u = q.data.length; t < u; ++t)
                s.push(r.getPixelForValue(this.getParsed(t)[r.axis], t));
            const v = p.barThickness;
            return {
                min: v || _S(q),
                pixels: s,
                start: r._startPixel,
                end: r._endPixel,
                stackCount: this._getStackCount(),
                scale: r,
                grouped: p.grouped,
                ratio: v ? 1 : p.categoryPercentage * p.barPercentage
            };
        }
        _calculateBarValuePixels(p) {
            const {
                _cachedMeta: {
                    vScale: q,
                    _stacked: r,
                    index: s
                },
                options: {
                    base: t,
                    minBarLength: u
                }
            } = this, v = t || 0, w = this.getParsed(p), x = w._custom, y = _mb(x);
            let z, A, B = w[q.axis],
                C = 0,
                D = r ? this.applyStack(q, w, r) : B;
            D !== B && (C = D - B, D = B), y && (B = x.barStart, D = x.barEnd - x.barStart, 0 !== B && (0, e.s)(B) !== (0, e.s)(x.barEnd) && (C = 0), C += B);
            const E = (0, e.k)(t) || y ? C : t;
            let F = q.getPixelForValue(E);
            if (z = this.chart.getDataVisibility(p) ? q.getPixelForValue(C + D) : F, A = z - F, Math.abs(A) < u) {
                A = function(G, H, I) {
                    return 0 !== G ? (0, e.s)(G) : (H.isHorizontal() ? 1 : -1) * (H.min >= I ? 1 : -1);
                }(A, q, v) * u, B === v && (F -= A / 2);
                const G = q.getPixelForDecimal(0),
                    H = q.getPixelForDecimal(1),
                    I = Math.min(G, H),
                    J = Math.max(G, H);
                F = Math.max(Math.min(F, J), I), z = F + A, r && !y && (w._stacks[q.axis]._visualValues[s] = q.getValueForPixel(z) - q.getValueForPixel(F));
            }
            if (F === q.getPixelForValue(v)) {
                const G = (0, e.s)(A) * q.getLineWidthForValue(v) / 2;
                F += G, A -= G;
            }
            return {
                size: A,
                base: F,
                head: z,
                center: z + A / 2
            };
        }
        _calculateBarIndexPixels(p, q) {
            const r = q.scale,
                s = this.options,
                t = s.skipNull,
                u = (0, e.v)(s.maxBarThickness, 1 / 0);
            let v, w;
            if (q.grouped) {
                const x = t ? this._getStackCount(p) : q.stackCount,
                    y = 'flex' === s.barThickness ? function(z, A, B, C) {
                        const D = A.pixels,
                            E = D[z];
                        let F = z > 0 ? D[z - 1] : null,
                            G = z < D.length - 1 ? D[z + 1] : null;
                        const H = B.categoryPercentage;
                        null === F && (F = E - (null === G ? A.end - A.start : G - E)), null === G && (G = E + E - F);
                        const I = E - (E - Math.min(F, G)) / 2 * H;
                        return {
                            chunk: Math.abs(G - F) / 2 * H / C,
                            ratio: B.barPercentage,
                            start: I
                        };
                    }(p, q, s, x) : function(z, A, B, C) {
                        const D = B.barThickness;
                        let E, F;
                        return (0, e.k)(D) ? (E = A.min * B.categoryPercentage, F = B.barPercentage) : (E = D * C, F = 1), {
                            chunk: E / C,
                            ratio: F,
                            start: A.pixels[z] - E / 2
                        };
                    }(p, q, s, x),
                    z = this._getStackIndex(this.index, this._cachedMeta.stack, t ? p : void 0);
                v = y.start + y.chunk * z + y.chunk / 2, w = Math.min(u, y.chunk * y.ratio);
            } else
                v = r.getPixelForValue(this.getParsed(p)[r.axis], p), w = Math.min(u, q.min * q.ratio);
            return {
                base: v - w / 2,
                head: v + w / 2,
                center: v,
                size: w
            };
        }
        draw() {
            const p = this._cachedMeta,
                q = p.vScale,
                r = p.data,
                s = r.length;
            let t = 0;
            for (; t < s; ++t)
                null !== this.getParsed(t)[q.axis] && r[t].draw(this._ctx);
        }
    }
    (0, d.default)(_o, 'id', 'bar'), (0, d.default)(_o, 'defaults', {
        datasetElementType: !1,
        dataElementType: 'bar',
        categoryPercentage: 0.8,
        barPercentage: 0.9,
        grouped: !0,
        animations: {
            numbers: {
                type: 'number',
                properties: [
                    'x',
                    'y',
                    'base',
                    'width',
                    'height'
                ]
            }
        }
    }), (0, d.default)(_o, 'overrides', {
        scales: {
            _index_: {
                type: 'category',
                offset: !0,
                grid: {
                    offset: !0
                }
            },
            _value_: {
                type: 'linear',
                beginAtZero: !0
            }
        }
    });
    class _p extends n {
        initialize() {
            this.enableOptionSharing = !0, super.initialize();
        }
        parsePrimitiveData(q, r, s, t) {
            const u = super.parsePrimitiveData(q, r, s, t);
            for (let v = 0; v < u.length; v++)
                u[v]._custom = this.resolveDataElementOptions(v + s).radius;
            return u;
        }
        parseArrayData(q, r, s, t) {
            const u = super.parseArrayData(q, r, s, t);
            for (let v = 0; v < u.length; v++) {
                const w = r[s + v];
                u[v]._custom = (0, e.v)(w[2], this.resolveDataElementOptions(v + s).radius);
            }
            return u;
        }
        parseObjectData(q, r, s, t) {
            const u = super.parseObjectData(q, r, s, t);
            for (let v = 0; v < u.length; v++) {
                const w = r[s + v];
                u[v]._custom = (0, e.v)(w && w.r && +w.r, this.resolveDataElementOptions(v + s).radius);
            }
            return u;
        }
        getMaxOverflow() {
            const q = this._cachedMeta.data;
            let r = 0;
            for (let s = q.length - 1; s >= 0; --s)
                r = Math.max(r, q[s].size(this.resolveDataElementOptions(s)) / 2);
            return r > 0 && r;
        }
        getLabelAndValue(q) {
            const r = this._cachedMeta,
                s = this.chart.data.labels || [],
                {
                    xScale: t,
                    yScale: u
                } = r,
                v = this.getParsed(q),
                w = t.getLabelForValue(v.x),
                x = u.getLabelForValue(v.y),
                y = v._custom;
            return {
                label: s[q] || '',
                value: '(' + w + ', ' + x + (y ? ', ' + y : '') + ')'
            };
        }
        update(q) {
            const r = this._cachedMeta.data;
            this.updateElements(r, 0, r.length, q);
        }
        updateElements(q, r, s, t) {
            const u = 'reset' === t,
                {
                    iScale: v,
                    vScale: w
                } = this._cachedMeta,
                {
                    sharedOptions: x,
                    includeOptions: y
                } = this._getSharedOptions(r, t),
                z = v.axis,
                A = w.axis;
            for (let B = r; B < r + s; B++) {
                const C = q[B],
                    D = !u && this.getParsed(B),
                    E = {},
                    F = E[z] = u ? v.getPixelForDecimal(0.5) : v.getPixelForValue(D[z]),
                    G = E[A] = u ? w.getBasePixel() : w.getPixelForValue(D[A]);
                E.skip = isNaN(F) || isNaN(G), y && (E.options = x || this.resolveDataElementOptions(B, C.active ? 'active' : t), u && (E.options.radius = 0)), this.updateElement(C, B, E, t);
            }
        }
        resolveDataElementOptions(q, r) {
            const s = this.getParsed(q);
            let t = super.resolveDataElementOptions(q, r);
            t.$shared && (t = Object.assign({}, t, {
                $shared: !1
            }));
            const u = t.radius;
            return 'active' !== r && (t.radius = 0), t.radius += (0, e.v)(s && s._custom, u), t;
        }
    }
    (0, d.default)(_p, 'id', 'bubble'), (0, d.default)(_p, 'defaults', {
        datasetElementType: !1,
        dataElementType: 'point',
        animations: {
            numbers: {
                type: 'number',
                properties: [
                    'x',
                    'y',
                    'borderWidth',
                    'radius'
                ]
            }
        }
    }), (0, d.default)(_p, 'overrides', {
        scales: {
            x: {
                type: 'linear'
            },
            y: {
                type: 'linear'
            }
        }
    });
    class _q extends n {
        linkScales() {}
        parse(r, s) {
            const t = this.getDataset().data,
                u = this._cachedMeta;
            if (!1 === this._parsing)
                u._parsed = t;
            else {
                let v, w, x = r => +t[r];
                if ((0, e.i)(t[r])) {
                    const {
                        key: y = 'value'
                    } = this._parsing;
                    x = s => +(0, e.f)(t[s], y);
                }
                for (v = r, w = r + s; v < w; ++v)
                    u._parsed[v] = x(v);
            }
        }
        _getRotation() {
            return (0, e.t)(this.options.rotation - 90);
        }
        _getCircumference() {
            return (0, e.t)(this.options.circumference);
        }
        _getRotationExtents() {
            let r = e.T,
                s = -e.T;
            for (let t = 0; t < this.chart.data.datasets.length; ++t)
                if (this.chart.isDatasetVisible(t) && this.chart.getDatasetMeta(t).type === this._type) {
                    const u = this.chart.getDatasetMeta(t).controller,
                        v = u._getRotation(),
                        w = u._getCircumference();
                    r = Math.min(r, v), s = Math.max(s, v + w);
                }
            return {
                rotation: r,
                circumference: s - r
            };
        }
        update(r) {
            const s = this.chart,
                {
                    chartArea: t
                } = s,
                u = this._cachedMeta,
                v = u.data,
                w = this.getMaxBorderWidth() + this.getMaxOffset(v) + this.options.spacing,
                x = Math.max((Math.min(t.width, t.height) - w) / 2, 0),
                y = Math.min((0, e.m)(this.options.cutout, x), 1),
                z = this._getRingWeight(this.index),
                {
                    circumference: A,
                    rotation: B
                } = this._getRotationExtents(),
                {
                    ratioX: C,
                    ratioY: D,
                    offsetX: E,
                    offsetY: F
                } = function(G, H, I) {
                    let J = 1,
                        K = 1,
                        L = 0,
                        M = 0;
                    if (H < e.T) {
                        const N = G,
                            O = N + H,
                            P = Math.cos(N),
                            Q = Math.sin(N),
                            R = Math.cos(O),
                            S = Math.sin(O),
                            T = (G, H, J) => (0, e.p)(G, N, O, !0) ? 1 : Math.max(H, H * I, J, J * I),
                            U = (G, H, J) => (0, e.p)(G, N, O, !0) ? -1 : Math.min(H, H * I, J, J * I),
                            V = T(0, P, R),
                            W = T(e.H, Q, S),
                            _X = U(e.P, P, R),
                            _Y = U(e.P + e.H, Q, S);
                        J = (V - _X) / 2, K = (W - _Y) / 2, L = -(V + _X) / 2, M = -(W + _Y) / 2;
                    }
                    return {
                        ratioX: J,
                        ratioY: K,
                        offsetX: L,
                        offsetY: M
                    };
                }(B, A, y),
                G = (t.width - w) / C,
                H = (t.height - w) / D,
                I = Math.max(Math.min(G, H) / 2, 0),
                J = (0, e.n)(this.options.radius, I),
                _K = (J - Math.max(J * y, 0)) / this._getVisibleDatasetWeightTotal();
            this.offsetX = E * J, this.offsetY = F * J, u.total = this.calculateTotal(), this.outerRadius = J - _K * this._getRingWeightOffset(this.index), this.innerRadius = Math.max(this.outerRadius - _K * z, 0), this.updateElements(v, 0, v.length, r);
        }
        _circumference(r, s) {
            const t = this.options,
                u = this._cachedMeta,
                v = this._getCircumference();
            return s && t.animation.animateRotate || !this.chart.getDataVisibility(r) || null === u._parsed[r] || u.data[r].hidden ? 0 : this.calculateCircumference(u._parsed[r] * v / e.T);
        }
        updateElements(r, s, t, u) {
            const v = 'reset' === u,
                w = this.chart,
                x = w.chartArea,
                y = w.options.animation,
                z = (x.left + x.right) / 2,
                A = (x.top + x.bottom) / 2,
                B = v && y.animateScale,
                C = B ? 0 : this.innerRadius,
                D = B ? 0 : this.outerRadius,
                {
                    sharedOptions: E,
                    includeOptions: F
                } = this._getSharedOptions(s, u);
            let G, H = this._getRotation();
            for (G = 0; G < s; ++G)
                H += this._circumference(G, v);
            for (G = s; G < s + t; ++G) {
                const I = this._circumference(G, v),
                    J = r[G],
                    K = {
                        x: z + this.offsetX,
                        y: A + this.offsetY,
                        startAngle: H,
                        endAngle: H + I,
                        circumference: I,
                        outerRadius: D,
                        innerRadius: C
                    };
                F && (K.options = E || this.resolveDataElementOptions(G, J.active ? 'active' : u)), H += I, this.updateElement(J, G, K, u);
            }
        }
        calculateTotal() {
            const r = this._cachedMeta,
                s = r.data;
            let t, u = 0;
            for (t = 0; t < s.length; t++) {
                const v = r._parsed[t];
                null === v || isNaN(v) || !this.chart.getDataVisibility(t) || s[t].hidden || (u += Math.abs(v));
            }
            return u;
        }
        calculateCircumference(r) {
            const s = this._cachedMeta.total;
            return s > 0 && !isNaN(r) ? e.T * (Math.abs(r) / s) : 0;
        }
        getLabelAndValue(r) {
            const s = this._cachedMeta,
                t = this.chart,
                u = t.data.labels || [],
                v = (0, e.o)(s._parsed[r], t.options.locale);
            return {
                label: u[r] || '',
                value: v
            };
        }
        getMaxBorderWidth(r) {
            let s = 0;
            const t = this.chart;
            let u, v, w, x, y;
            if (!r)
                for (u = 0, v = t.data.datasets.length; u < v; ++u)
                    if (t.isDatasetVisible(u)) {
                        w = t.getDatasetMeta(u), r = w.data, x = w.controller;
                        break;
                    }
            if (!r)
                return 0;
            for (u = 0, v = r.length; u < v; ++u)
                y = x.resolveDataElementOptions(u), 'inner' !== y.borderAlign && (s = Math.max(s, y.borderWidth || 0, y.hoverBorderWidth || 0));
            return s;
        }
        getMaxOffset(r) {
            let s = 0;
            for (let t = 0, u = r.length; t < u; ++t) {
                const v = this.resolveDataElementOptions(t);
                s = Math.max(s, v.offset || 0, v.hoverOffset || 0);
            }
            return s;
        }
        _getRingWeightOffset(r) {
            let s = 0;
            for (let t = 0; t < r; ++t)
                this.chart.isDatasetVisible(t) && (s += this._getRingWeight(t));
            return s;
        }
        _getRingWeight(r) {
            return Math.max((0, e.v)(this.chart.data.datasets[r].weight, 1), 0);
        }
        _getVisibleDatasetWeightTotal() {
            return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
        }
        constructor(r, s) {
            super(r, s), this.enableOptionSharing = !0, this.innerRadius = void 0, this.outerRadius = void 0, this.offsetX = void 0, this.offsetY = void 0;
        }
    }
    (0, d.default)(_q, 'id', 'doughnut'), (0, d.default)(_q, 'defaults', {
        datasetElementType: !1,
        dataElementType: 'arc',
        animation: {
            animateRotate: !0,
            animateScale: !1
        },
        animations: {
            numbers: {
                type: 'number',
                properties: [
                    'circumference',
                    'endAngle',
                    'innerRadius',
                    'outerRadius',
                    'startAngle',
                    'x',
                    'y',
                    'offset',
                    'borderWidth',
                    'spacing'
                ]
            }
        },
        cutout: '50%',
        rotation: 0,
        circumference: 360,
        radius: '100%',
        spacing: 0,
        indexAxis: 'r'
    }), (0, d.default)(_q, 'descriptors', {
        _scriptable: _r => 'spacing' !== _r,
        _indexable: _r => 'spacing' !== _r
    }), (0, d.default)(_q, 'overrides', {
        aspectRatio: 1,
        plugins: {
            legend: {
                labels: {
                    generateLabels(_r) {
                        const s = _r.data;
                        if (s.labels.length && s.datasets.length) {
                            const {
                                labels: {
                                    pointStyle: t,
                                    color: u
                                }
                            } = _r.legend.options;
                            return s.labels.map((s, d) => {
                                const v = _r.getDatasetMeta(0).controller.getStyle(d);
                                return {
                                    text: s,
                                    fillStyle: v.backgroundColor,
                                    strokeStyle: v.borderColor,
                                    fontColor: u,
                                    lineWidth: v.borderWidth,
                                    pointStyle: t,
                                    hidden: !_r.getDataVisibility(d),
                                    index: d
                                };
                            });
                        }
                        return [];
                    }
                },
                onClick(r, s, t) {
                    t.chart.toggleDataVisibility(s.index), t.chart.update();
                }
            }
        }
    });
    class _r extends n {
        initialize() {
            this.enableOptionSharing = !0, this.supportsDecimation = !0, super.initialize();
        }
        update(s) {
            const t = this._cachedMeta,
                {
                    dataset: u,
                    data: v = [],
                    _dataset: w
                } = t,
                x = this.chart._animationsDisabled;
            let {
                start: y,
                count: z
            } = (0, e.q)(t, v, x);
            this._drawStart = y, this._drawCount = z, (0, e.w)(t) && (y = 0, z = v.length), u._chart = this.chart, u._datasetIndex = this.index, u._decimated = !!w._decimated, u.points = v;
            const A = this.resolveDatasetElementOptions(s);
            this.options.showLine || (A.borderWidth = 0), A.segment = this.options.segment, this.updateElement(u, void 0, {
                animated: !x,
                options: A
            }, s), this.updateElements(v, y, z, s);
        }
        updateElements(s, t, u, v) {
            const w = 'reset' === v,
                {
                    iScale: x,
                    vScale: y,
                    _stacked: z,
                    _dataset: A
                } = this._cachedMeta,
                {
                    sharedOptions: B,
                    includeOptions: C
                } = this._getSharedOptions(t, v),
                D = x.axis,
                E = y.axis,
                {
                    spanGaps: F,
                    segment: G
                } = this.options,
                H = (0, e.x)(F) ? F : Number.POSITIVE_INFINITY,
                I = this.chart._animationsDisabled || w || 'none' === v,
                J = t + u,
                K = s.length;
            let L = t > 0 && this.getParsed(t - 1);
            for (let M = 0; M < K; ++M) {
                const N = s[M],
                    O = I ? N : {};
                if (M < t || M >= J) {
                    O.skip = !0;
                    continue;
                }
                const P = this.getParsed(M),
                    Q = (0, e.k)(P[E]),
                    R = O[D] = x.getPixelForValue(P[D], M),
                    _S = O[E] = w || Q ? y.getBasePixel() : y.getPixelForValue(z ? this.applyStack(y, P, z) : P[E], M);
                O.skip = isNaN(R) || isNaN(_S) || Q, O.stop = M > 0 && Math.abs(P[D] - L[D]) > H, G && (O.parsed = P, O.raw = A.data[M]), C && (O.options = B || this.resolveDataElementOptions(M, N.active ? 'active' : v)), I || this.updateElement(N, M, O, v), L = P;
            }
        }
        getMaxOverflow() {
            const s = this._cachedMeta,
                t = s.dataset,
                u = t.options && t.options.borderWidth || 0,
                v = s.data || [];
            if (!v.length)
                return u;
            const w = v[0].size(this.resolveDataElementOptions(0)),
                x = v[v.length - 1].size(this.resolveDataElementOptions(v.length - 1));
            return Math.max(u, w, x) / 2;
        }
        draw() {
            const s = this._cachedMeta;
            s.dataset.updateControlPoints(this.chart.chartArea, s.iScale.axis), super.draw();
        }
    }
    (0, d.default)(_r, 'id', 'line'), (0, d.default)(_r, 'defaults', {
        datasetElementType: 'line',
        dataElementType: 'point',
        showLine: !0,
        spanGaps: !1
    }), (0, d.default)(_r, 'overrides', {
        scales: {
            _index_: {
                type: 'category'
            },
            _value_: {
                type: 'linear'
            }
        }
    });
    class _s extends n {
        getLabelAndValue(t) {
            const u = this._cachedMeta,
                v = this.chart,
                w = v.data.labels || [],
                x = (0, e.o)(u._parsed[t].r, v.options.locale);
            return {
                label: w[t] || '',
                value: x
            };
        }
        parseObjectData(t, u, v, w) {
            return e.y.bind(this)(t, u, v, w);
        }
        update(t) {
            const u = this._cachedMeta.data;
            this._updateRadius(), this.updateElements(u, 0, u.length, t);
        }
        getMinMax() {
            const t = this._cachedMeta,
                u = {
                    min: Number.POSITIVE_INFINITY,
                    max: Number.NEGATIVE_INFINITY
                };
            return t.data.forEach((t, a) => {
                const v = this.getParsed(a).r;
                !isNaN(v) && this.chart.getDataVisibility(a) && (v < u.min && (u.min = v), v > u.max && (u.max = v));
            }), u;
        }
        _updateRadius() {
            const t = this.chart,
                u = t.chartArea,
                v = t.options,
                w = Math.min(u.right - u.left, u.bottom - u.top),
                x = Math.max(w / 2, 0),
                y = (x - Math.max(v.cutoutPercentage ? x / 100 * v.cutoutPercentage : 1, 0)) / t.getVisibleDatasetCount();
            this.outerRadius = x - y * this.index, this.innerRadius = this.outerRadius - y;
        }
        updateElements(t, u, v, w) {
            const x = 'reset' === w,
                y = this.chart,
                z = y.options.animation,
                A = this._cachedMeta.rScale,
                B = A.xCenter,
                C = A.yCenter,
                D = A.getIndexAngle(0) - 0.5 * e.P;
            let E, F = D;
            const G = 360 / this.countVisibleElements();
            for (E = 0; E < u; ++E)
                F += this._computeAngle(E, w, G);
            for (E = u; E < u + v; E++) {
                const H = t[E];
                let I = F,
                    J = F + this._computeAngle(E, w, G),
                    K = y.getDataVisibility(E) ? A.getDistanceFromCenterForValue(this.getParsed(E).r) : 0;
                F = J, x && (z.animateScale && (K = 0), z.animateRotate && (I = J = D));
                const L = {
                    x: B,
                    y: C,
                    innerRadius: 0,
                    outerRadius: K,
                    startAngle: I,
                    endAngle: J,
                    options: this.resolveDataElementOptions(E, H.active ? 'active' : w)
                };
                this.updateElement(H, E, L, w);
            }
        }
        countVisibleElements() {
            const t = this._cachedMeta;
            let u = 0;
            return t.data.forEach((t, a) => {
                !isNaN(this.getParsed(a).r) && this.chart.getDataVisibility(a) && u++;
            }), u;
        }
        _computeAngle(t, u, v) {
            return this.chart.getDataVisibility(t) ? (0, e.t)(this.resolveDataElementOptions(t, u).angle || v) : 0;
        }
        constructor(t, u) {
            super(t, u), this.innerRadius = void 0, this.outerRadius = void 0;
        }
    }
    (0, d.default)(_s, 'id', 'polarArea'), (0, d.default)(_s, 'defaults', {
        dataElementType: 'arc',
        animation: {
            animateRotate: !0,
            animateScale: !0
        },
        animations: {
            numbers: {
                type: 'number',
                properties: [
                    'x',
                    'y',
                    'startAngle',
                    'endAngle',
                    'innerRadius',
                    'outerRadius'
                ]
            }
        },
        indexAxis: 'r',
        startAngle: 0
    }), (0, d.default)(_s, 'overrides', {
        aspectRatio: 1,
        plugins: {
            legend: {
                labels: {
                    generateLabels(t) {
                        const u = t.data;
                        if (u.labels.length && u.datasets.length) {
                            const {
                                labels: {
                                    pointStyle: v,
                                    color: w
                                }
                            } = t.legend.options;
                            return u.labels.map((u, d) => {
                                const x = t.getDatasetMeta(0).controller.getStyle(d);
                                return {
                                    text: u,
                                    fillStyle: x.backgroundColor,
                                    strokeStyle: x.borderColor,
                                    fontColor: w,
                                    lineWidth: x.borderWidth,
                                    pointStyle: v,
                                    hidden: !t.getDataVisibility(d),
                                    index: d
                                };
                            });
                        }
                        return [];
                    }
                },
                onClick(t, u, v) {
                    v.chart.toggleDataVisibility(u.index), v.chart.update();
                }
            }
        },
        scales: {
            r: {
                type: 'radialLinear',
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
    class _t extends _q {}
    (0, d.default)(_t, 'id', 'pie'), (0, d.default)(_t, 'defaults', {
        cutout: 0,
        rotation: 0,
        circumference: 360,
        radius: '100%'
    });
    class _u extends n {
        getLabelAndValue(v) {
            const w = this._cachedMeta.vScale,
                x = this.getParsed(v);
            return {
                label: w.getLabels()[v],
                value: '' + w.getLabelForValue(x[w.axis])
            };
        }
        parseObjectData(v, w, x, y) {
            return e.y.bind(this)(v, w, x, y);
        }
        update(v) {
            const w = this._cachedMeta,
                x = w.dataset,
                y = w.data || [],
                z = w.iScale.getLabels();
            if (x.points = y, 'resize' !== v) {
                const A = this.resolveDatasetElementOptions(v);
                this.options.showLine || (A.borderWidth = 0);
                const B = {
                    _loop: !0,
                    _fullLoop: z.length === y.length,
                    options: A
                };
                this.updateElement(x, void 0, B, v);
            }
            this.updateElements(y, 0, y.length, v);
        }
        updateElements(v, w, x, y) {
            const z = this._cachedMeta.rScale,
                A = 'reset' === y;
            for (let B = w; B < w + x; B++) {
                const C = v[B],
                    D = this.resolveDataElementOptions(B, C.active ? 'active' : y),
                    E = z.getPointPositionForValue(B, this.getParsed(B).r),
                    F = A ? z.xCenter : E.x,
                    G = A ? z.yCenter : E.y,
                    H = {
                        x: F,
                        y: G,
                        angle: E.angle,
                        skip: isNaN(F) || isNaN(G),
                        options: D
                    };
                this.updateElement(C, B, H, y);
            }
        }
    }
    (0, d.default)(_u, 'id', 'radar'), (0, d.default)(_u, 'defaults', {
        datasetElementType: 'line',
        dataElementType: 'point',
        indexAxis: 'r',
        showLine: !0,
        elements: {
            line: {
                fill: 'start'
            }
        }
    }), (0, d.default)(_u, 'overrides', {
        aspectRatio: 1,
        scales: {
            r: {
                type: 'radialLinear'
            }
        }
    });
    class _v extends n {
        getLabelAndValue(w) {
            const x = this._cachedMeta,
                y = this.chart.data.labels || [],
                {
                    xScale: z,
                    yScale: A
                } = x,
                B = this.getParsed(w),
                C = z.getLabelForValue(B.x),
                D = A.getLabelForValue(B.y);
            return {
                label: y[w] || '',
                value: '(' + C + ', ' + D + ')'
            };
        }
        update(w) {
            const x = this._cachedMeta,
                {
                    data: y = []
                } = x,
                z = this.chart._animationsDisabled;
            let {
                start: A,
                count: B
            } = (0, e.q)(x, y, z);
            if (this._drawStart = A, this._drawCount = B, (0, e.w)(x) && (A = 0, B = y.length), this.options.showLine) {
                const {
                    dataset: C,
                    _dataset: D
                } = x;
                C._chart = this.chart, C._datasetIndex = this.index, C._decimated = !!D._decimated, C.points = y;
                const E = this.resolveDatasetElementOptions(w);
                E.segment = this.options.segment, this.updateElement(C, void 0, {
                    animated: !z,
                    options: E
                }, w);
            }
            this.updateElements(y, A, B, w);
        }
        addElements() {
            const {
                showLine: w
            } = this.options;
            !this.datasetElementType && w && (this.datasetElementType = this.chart.registry.getElement('line')), super.addElements();
        }
        updateElements(w, x, y, z) {
            const A = 'reset' === z,
                {
                    iScale: B,
                    vScale: C,
                    _stacked: D,
                    _dataset: E
                } = this._cachedMeta,
                F = this.resolveDataElementOptions(x, z),
                G = this.getSharedOptions(F),
                H = this.includeOptions(z, G),
                I = B.axis,
                J = C.axis,
                {
                    spanGaps: K,
                    segment: L
                } = this.options,
                M = (0, e.x)(K) ? K : Number.POSITIVE_INFINITY,
                N = this.chart._animationsDisabled || A || 'none' === z;
            let O = x > 0 && this.getParsed(x - 1);
            for (let P = x; P < x + y; ++P) {
                const Q = w[P],
                    R = this.getParsed(P),
                    S = N ? Q : {},
                    T = (0, e.k)(R[J]),
                    U = S[I] = B.getPixelForValue(R[I], P),
                    V = S[J] = A || T ? C.getBasePixel() : C.getPixelForValue(D ? this.applyStack(C, R, D) : R[J], P);
                S.skip = isNaN(U) || isNaN(V) || T, S.stop = P > 0 && Math.abs(R[I] - O[I]) > M, L && (S.parsed = R, S.raw = E.data[P]), H && (S.options = G || this.resolveDataElementOptions(P, Q.active ? 'active' : z)), N || this.updateElement(Q, P, S, z), O = R;
            }
            this.updateSharedOptions(G, z, P);
        }
        getMaxOverflow() {
            const w = this._cachedMeta,
                x = w.data || [];
            if (!this.options.showLine) {
                let y = 0;
                for (let z = x.length - 1; z >= 0; --z)
                    y = Math.max(y, x[z].size(this.resolveDataElementOptions(z)) / 2);
                return y > 0 && y;
            }
            const y = w.dataset,
                z = y.options && y.options.borderWidth || 0;
            if (!x.length)
                return z;
            const A = x[0].size(this.resolveDataElementOptions(0)),
                B = x[x.length - 1].size(this.resolveDataElementOptions(x.length - 1));
            return Math.max(z, A, B) / 2;
        }
    }
    (0, d.default)(_v, 'id', 'scatter'), (0, d.default)(_v, 'defaults', {
        datasetElementType: !1,
        dataElementType: 'point',
        showLine: !1,
        fill: !1
    }), (0, d.default)(_v, 'overrides', {
        interaction: {
            mode: 'point'
        },
        scales: {
            x: {
                type: 'linear'
            },
            y: {
                type: 'linear'
            }
        }
    });

    function w() {
        throw new Error('This method is not implemented: Check that a complete date adapter is provided.');
    }
    class w {
        static override(x) {
            Object.assign(w.prototype, x);
        }
        init() {}
        formats() {
            return _u();
        }
        parse() {
            return _u();
        }
        format() {
            return _u();
        }
        add() {
            return _u();
        }
        diff() {
            return _u();
        }
        startOf() {
            return _u();
        }
        endOf() {
            return _u();
        }
        constructor(x) {
            this.options = x || {};
        }
    }
    var x = w;

    function y(z, A, B, C) {
        const {
            controller: D,
            data: E,
            _sorted: F
        } = z, G = D._cachedMeta.iScale;
        if (G && A === G.axis && 'r' !== A && F && E.length) {
            const H = G._reversePixels ? e.A : e.B;
            if (!C)
                return H(E, A, B);
            if (D._sharedOptions) {
                const I = E[0],
                    J = 'function' == typeof I.getRange && I.getRange(A);
                if (J) {
                    const K = H(E, A, B - J),
                        L = H(E, A, B + J);
                    return {
                        lo: K.lo,
                        hi: L.hi
                    };
                }
            }
        }
        return {
            lo: 0,
            hi: E.length - 1
        };
    }

    function y(z, A, B, C, D) {
        const E = z.getSortedVisibleDatasetMetas(),
            F = B[A];
        for (let G = 0, H = E.length; G < H; ++G) {
            const {
                index: I,
                data: J
            } = E[G], {
                lo: K,
                hi: L
            } = _v(E[G], A, F, D);
            for (let M = K; M <= L; ++M) {
                const N = J[M];
                N.skip || C(N, I, M);
            }
        }
    }

    function y(z, A, B, C, D) {
        const E = [];
        if (!D && !z.isPointInArea(A))
            return E;
        return _v(z, B, A, function(F, G, H) {
            (D || (0, e.C)(F, z.chartArea, 0)) && F.inRange(A.x, A.y, C) && E.push({
                element: F,
                datasetIndex: G,
                index: H
            });
        }, !0), E;
    }

    function y(z, A, B, C, D, E) {
        let F = [];
        const G = function(H) {
            const I = -1 !== H.indexOf('x'),
                J = -1 !== H.indexOf('y');
            return function(K, L) {
                const M = I ? Math.abs(K.x - L.x) : 0,
                    N = J ? Math.abs(K.y - L.y) : 0;
                return Math.sqrt(Math.pow(M, 2) + Math.pow(N, 2));
            };
        }(B);
        let H = Number.POSITIVE_INFINITY;
        return _v(z, B, A, function(I, J, K) {
            const L = I.inRange(A.x, A.y, D);
            if (C && !L)
                return;
            const M = I.getCenterPoint(D);
            if (!(!!E || z.isPointInArea(M)) && !L)
                return;
            const N = G(A, M);
            N < H ? (F = [{
                element: I,
                datasetIndex: J,
                index: K
            }], H = N) : N === H && F.push({
                element: I,
                datasetIndex: J,
                index: K
            });
        }), F;
    }

    function y(z, A, B, C, D, E) {
        return E || z.isPointInArea(A) ? 'r' !== B || C ? _v(z, A, B, C, D, E) : function(F, G, H, I) {
            let J = [];
            return _v(F, H, G, function(K, L, M) {
                const {
                    startAngle: N,
                    endAngle: O
                } = K.getProps([
                    'startAngle',
                    'endAngle'
                ], I), {
                    angle: P
                } = (0, e.D)(K, {
                    x: G.x,
                    y: G.y
                });
                (0, e.p)(P, N, O) && J.push({
                    element: K,
                    datasetIndex: L,
                    index: M
                });
            }), J;
        }(z, A, B, D) : [];
    }

    function y(z, A, B, C, D) {
        const E = [],
            F = 'x' === B ? 'inXRange' : 'inYRange';
        let G = !1;
        return _v(z, B, A, (z, C, h) => {
            z[F](A[B], D) && (E.push({
                element: z,
                datasetIndex: C,
                index: h
            }), G = G || z.inRange(A.x, A.y, D));
        }), C && !G ? [] : E;
    }
    var y = {
        evaluateInteractionItems: _v,
        modes: {
            index(z, A, B, C) {
                const D = (0, e.z)(A, z),
                    E = B.axis || 'x',
                    F = B.includeInvisible || !1,
                    G = B.intersect ? _v(z, D, E, C, F) : _v(z, D, E, !1, C, F),
                    H = [];
                return G.length ? (z.getSortedVisibleDatasetMetas().forEach(z => {
                    const I = G[0].index,
                        J = z.data[I];
                    J && !J.skip && H.push({
                        element: J,
                        datasetIndex: z.index,
                        index: I
                    });
                }), H) : [];
            },
            dataset(z, A, B, C) {
                const D = (0, e.z)(A, z),
                    E = B.axis || 'xy',
                    F = B.includeInvisible || !1;
                let G = B.intersect ? _v(z, D, E, C, F) : _v(z, D, E, !1, C, F);
                if (G.length > 0) {
                    const H = G[0].datasetIndex,
                        I = z.getDatasetMeta(H).data;
                    G = [];
                    for (let J = 0; J < I.length; ++J)
                        G.push({
                            element: I[J],
                            datasetIndex: H,
                            index: J
                        });
                }
                return G;
            },
            point: (_z, b, a, c) => _v(_z, (0, e.z)(b, _z), a.axis || 'xy', c, a.includeInvisible || !1),
            nearest(_z, A, B, C) {
                const D = (0, e.z)(A, _z),
                    E = B.axis || 'xy',
                    F = B.includeInvisible || !1;
                return _v(_z, D, E, B.intersect, C, F);
            },
            x: (_B, b, a, c) => _v(_B, (0, e.z)(b, _B), 'x', a.intersect, c),
            y: (_B, b, a, c) => _v(_B, (0, e.z)(b, _B), 'y', a.intersect, c)
        }
    };
    const z = [
        'left',
        'top',
        'right',
        'bottom'
    ];

    function A(_B, C) {
        return _B.filter(_B => _B.pos === C);
    }

    function A(B, C) {
        return B.filter(B => -1 === z.indexOf(B.pos) && B.box.axis === C);
    }

    function A(B, C) {
        return B.sort((B, a) => {
            const D = C ? a : B,
                E = C ? B : a;
            return D.weight === E.weight ? D.index - E.index : D.weight - E.weight;
        });
    }

    function A(B, C) {
        const D = function(E) {
                const F = {};
                for (const G of E) {
                    const {
                        stack: H,
                        pos: I,
                        stackWeight: J
                    } = G;
                    if (!H || !z.includes(I))
                        continue;
                    const K = F[H] || (F[H] = {
                        count: 0,
                        placed: 0,
                        weight: 0,
                        size: 0
                    });
                    K.count++, K.weight += J;
                }
                return F;
            }(B),
            {
                vBoxMaxWidth: E,
                hBoxMaxHeight: F
            } = C;
        let G, H, I;
        for (G = 0, H = B.length; G < H; ++G) {
            I = B[G];
            const {
                fullSize: J
            } = I.box, K = D[I.stack], L = K && I.stackWeight / K.weight;
            I.horizontal ? (I.width = L ? L * E : J && C.availableWidth, I.height = F) : (I.width = E, I.height = L ? L * F : J && C.availableHeight);
        }
        return D;
    }

    function A(B, C, D, E) {
        return Math.max(B[D], C[D]) + Math.max(B[E], C[E]);
    }

    function A(B, C) {
        B.top = Math.max(B.top, C.top), B.left = Math.max(B.left, C.left), B.bottom = Math.max(B.bottom, C.bottom), B.right = Math.max(B.right, C.right);
    }

    function A(B, C, D, E) {
        const {
            pos: F,
            box: G
        } = D, H = B.maxPadding;
        if (!(0, e.i)(F)) {
            D.size && (B[F] -= D.size);
            const I = E[D.stack] || {
                size: 0,
                count: 1
            };
            I.size = Math.max(I.size, D.horizontal ? G.height : G.width), D.size = I.size / I.count, B[F] += D.size;
        }
        G.getPadding && _v(H, G.getPadding());
        const I = Math.max(0, C.outerWidth - _v(H, B, 'left', 'right')),
            J = Math.max(0, C.outerHeight - _v(H, B, 'top', 'bottom')),
            K = I !== B.w,
            L = J !== B.h;
        return B.w = I, B.h = J, D.horizontal ? {
            same: K,
            other: L
        } : {
            same: L,
            other: K
        };
    }

    function A(B, C) {
        const D = C.maxPadding;

        function E(F) {
            const G = {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            };
            return F.forEach(F => {
                G[F] = Math.max(C[F], D[F]);
            }), G;
        }
        return c(B ? [
            'left',
            'right'
        ] : [
            'top',
            'bottom'
        ]);
    }

    function A(B, C, D, E) {
        const F = [];
        let G, H, I, J, K, L;
        for (G = 0, H = B.length, K = 0; G < H; ++G) {
            I = B[G], J = I.box, J.update(I.width || C.w, I.height || C.h, _v(I.horizontal, C));
            const {
                same: M,
                other: N
            } = _v(C, D, I, E);
            K |= M && F.length, L = L || N, J.fullSize || F.push(I);
        }
        return K && A(F, C, D, E) || L;
    }

    function A(B, C, D, E, F) {
        B.top = D, B.left = C, B.right = C + E, B.bottom = D + F, B.width = E, B.height = F;
    }

    function A(B, C, D, E) {
        const F = D.padding;
        let {
            x: G,
            y: H
        } = C;
        for (const I of B) {
            const J = I.box,
                K = E[I.stack] || {
                    count: 1,
                    placed: 0,
                    weight: 1
                },
                L = I.stackWeight / K.weight || 1;
            if (I.horizontal) {
                const M = C.w * L,
                    N = K.size || J.height;
                (0, e.h)(K.start) && (H = K.start), J.fullSize ? _w(J, F.left, H, D.outerWidth - F.right - F.left, N) : _w(J, C.left + K.placed, H, M, N), K.start = H, K.placed += M, H = J.bottom;
            } else {
                const M = C.h * L,
                    N = K.size || J.width;
                (0, e.h)(K.start) && (G = K.start), J.fullSize ? _w(J, G, F.top, N, D.outerHeight - F.bottom - F.top) : _w(J, G, C.top + K.placed, N, M), K.start = G, K.placed += M, G = J.right;
            }
        }
        C.x = G, C.y = H;
    }
    var A = {
        addBox(B, C) {
            B.boxes || (B.boxes = []), C.fullSize = C.fullSize || !1, C.position = C.position || 'top', C.weight = C.weight || 0, C._layers = C._layers || function() {
                return [{
                    z: 0,
                    draw(D) {
                        C.draw(D);
                    }
                }];
            }, B.boxes.push(C);
        },
        removeBox(B, C) {
            const D = B.boxes ? B.boxes.indexOf(C) : -1; -
            1 !== D && B.boxes.splice(D, 1);
        },
        configure(B, C, D) {
            C.fullSize = D.fullSize, C.position = D.position, C.weight = D.weight;
        },
        update(B, C, D, E) {
            if (!B)
                return;
            const F = (0, e.E)(B.options.layout.padding),
                G = Math.max(C - F.width, 0),
                H = Math.max(D - F.height, 0),
                I = function(J) {
                    const K = function(L) {
                            const M = [];
                            let N, O, P, Q, R, S;
                            for (N = 0, O = (L || []).length; N < O; ++N)
                                P = L[N], {
                                    position: T,
                                    options: {
                                        stack: U,
                                        stackWeight: V = 1
                                    }
                                } = P, M.push({
                                    index: N,
                                    box: P,
                                    pos: T,
                                    horizontal: P.isHorizontal(),
                                    weight: P.weight,
                                    stack: U && T + U,
                                    stackWeight: V
                                });
                            return M;
                        }(J),
                        L = _v(K.filter(J => J.box.fullSize), !0),
                        M = _v(_v(K, 'left'), !0),
                        N = _v(_v(K, 'right')),
                        O = _v(_v(K, 'top'), !0),
                        P = _v(_v(K, 'bottom')),
                        Q = _v(K, 'x'),
                        R = _v(K, 'y');
                    return {
                        fullSize: L,
                        leftAndTop: M.concat(O),
                        rightAndBottom: N.concat(R).concat(P).concat(Q),
                        chartArea: _v(K, 'chartArea'),
                        vertical: M.concat(N).concat(R),
                        horizontal: O.concat(P).concat(Q)
                    };
                }(B.boxes),
                J = I.vertical,
                K = I.horizontal;
            (0, e.F)(B.boxes, B => {
                'function' == typeof B.beforeLayout && B.beforeLayout();
            });
            const L = J.reduce((B, C) => C.box.options && !1 === C.box.options.display ? B : B + 1, 0) || 1,
                M = Object.freeze({
                    outerWidth: C,
                    outerHeight: D,
                    padding: F,
                    availableWidth: G,
                    availableHeight: H,
                    vBoxMaxWidth: G / 2 / L,
                    hBoxMaxHeight: H / 2
                }),
                N = Object.assign({}, F);
            _v(N, (0, e.E)(E));
            const O = Object.assign({
                    maxPadding: N,
                    w: G,
                    h: H,
                    x: F.left,
                    y: F.top
                }, F),
                P = _v(J.concat(K), M);
            _v(I.fullSize, O, M, P), _v(J, O, M, P), _v(K, O, M, P) && _v(J, O, M, P),
                function(Q) {
                    const R = Q.maxPadding;

                    function S(T) {
                        const U = Math.max(R[T] - Q[T], 0);
                        return Q[T] += U, U;
                    }
                    Q.y += D('top'), Q.x += D('left'), D('right'), D('bottom');
                }(O), _x(I.leftAndTop, O, M, P), O.x += O.w, O.y += O.h, _x(I.rightAndBottom, O, M, P), B.chartArea = {
                    left: O.left,
                    top: O.top,
                    right: O.left + O.w,
                    bottom: O.top + O.h,
                    height: O.h,
                    width: O.w
                }, (0, e.F)(I.chartArea, C => {
                    const Q = C.box;
                    Object.assign(Q, B.chartArea), Q.update(O.w, O.h, {
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0
                    });
                });
        }
    };
    class B {
        acquireContext(C, D) {}
        releaseContext(C) {
            return !1;
        }
        addEventListener(C, D, E) {}
        removeEventListener(C, D, E) {}
        getDevicePixelRatio() {
            return 1;
        }
        getMaximumSize(C, D, E, F) {
            return D = Math.max(0, D || C.width), E = E || C.height, {
                width: D,
                height: Math.max(0, F ? Math.floor(D / F) : E)
            };
        }
        isAttached(C) {
            return !0;
        }
        updateConfig(C) {}
    }
    class C extends B {
        acquireContext(D) {
            return D && D.getContext && D.getContext('2d') || null;
        }
        updateConfig(D) {
            D.options.animation = !1;
        }
    }
    const D = '$chartjs',
        E = {
            touchstart: 'mousedown',
            touchmove: 'mousemove',
            touchend: 'mouseup',
            pointerenter: 'mouseenter',
            pointerdown: 'mousedown',
            pointermove: 'mousemove',
            pointerup: 'mouseup',
            pointerleave: 'mouseout',
            pointerout: 'mouseout'
        },
        F = _I => null === _I || '' === _I;
    const G = !!e.K && {
        passive: !0
    };

    function H(_I, J, K) {
        _I.canvas.removeEventListener(J, K, G);
    }

    function H(I, J) {
        for (const K of I)
            if (K === J || K.contains(J))
                return !0;
    }

    function H(I, J, K) {
        const L = I.canvas,
            M = new MutationObserver(I => {
                let N = !1;
                for (const O of I)
                    N = N || _A(O.addedNodes, L), N = N && !_A(O.removedNodes, L);
                N && O();
            });
        return M.observe(document, {
            childList: !0,
            subtree: !0
        }), M;
    }

    function H(I, J, K) {
        const L = I.canvas,
            M = new MutationObserver(I => {
                let N = !1;
                for (const O of I)
                    N = N || _A(O.removedNodes, L), N = N && !_A(O.addedNodes, L);
                N && O();
            });
        return M.observe(document, {
            childList: !0,
            subtree: !0
        }), M;
    }
    const H = new Map();
    let I = 0;

    function J() {
        const K = window.devicePixelRatio;
        K !== I && (I = K, H.forEach((b, a) => {
            a.currentDevicePixelRatio !== K && b();
        }));
    }

    function J(K, L, M) {
        const N = K.canvas,
            O = N && (0, e.I)(N);
        if (!O)
            return;
        const P = (0, e.L)((K, L) => {
                const Q = O.clientWidth;
                M(K, L), Q < O.clientWidth && M();
            }, window),
            Q = new ResizeObserver(K => {
                const R = K[0],
                    S = R.contentRect.width,
                    T = R.contentRect.height;
                0 === S && 0 === T || P(S, T);
            });
        return Q.observe(O),
            function(R, S) {
                H.size || window.addEventListener('resize', _D), H.set(R, S);
            }(K, P), Q;
    }

    function J(K, L, M) {
        M && M.disconnect(), 'resize' === L && function(N) {
            H.delete(N), H.size || window.removeEventListener('resize', _D);
        }(K);
    }

    function J(K, L, M) {
        const N = K.canvas,
            O = (0, e.L)(L => {
                null !== K.ctx && M(function(P, Q) {
                    const R = E[P.type] || P.type,
                        {
                            x: S,
                            y: T
                        } = (0, e.z)(P, Q);
                    return {
                        type: R,
                        chart: Q,
                        native: P,
                        x: void 0 !== S ? S : null,
                        y: void 0 !== T ? T : null
                    };
                }(L, K));
            }, K);
        return function(P, Q, R) {
            P.addEventListener(Q, R, G);
        }(N, L, O), O;
    }
    class J extends B {
        acquireContext(K, L) {
            const M = K && K.getContext && K.getContext('2d');
            return M && M.canvas === K ? (function(N, O) {
                const P = N.style,
                    Q = N.getAttribute('height'),
                    R = N.getAttribute('width');
                if (N[D] = {
                        initial: {
                            height: Q,
                            width: R,
                            style: {
                                display: P.display,
                                height: P.height,
                                width: P.width
                            }
                        }
                    }, P.display = P.display || 'block', P.boxSizing = P.boxSizing || 'border-box', F(R)) {
                    const S = (0, e.J)(N, 'width');
                    void 0 !== S && (N.width = S);
                }
                if (F(Q))
                    if ('' === N.style.height)
                        N.height = N.width / (O || 2);
                    else {
                        const S = (0, e.J)(N, 'height');
                        void 0 !== S && (N.height = S);
                    }
            }(K, L), M) : null;
        }
        releaseContext(K) {
            const L = K.canvas;
            if (!L[D])
                return !1;
            const M = L[D].initial;
            [
                'height',
                'width'
            ].forEach(K => {
                const N = M[K];
                (0, e.k)(N) ? L.removeAttribute(K): L.setAttribute(K, N);
            });
            const N = M.style || {};
            return Object.keys(N).forEach(K => {
                L.style[K] = N[K];
            }), L.width = L.width, delete L[D], !0;
        }
        addEventListener(K, L, M) {
            this.removeEventListener(K, L);
            const N = K.$proxies || (K.$proxies = {}),
                O = {
                    attach: _B,
                    detach: _C,
                    resize: _E
                } [L] || _G;
            N[L] = O(K, L, M);
        }
        removeEventListener(K, L) {
            const M = K.$proxies || (K.$proxies = {}),
                N = M[L];
            if (!N)
                return;
            ({
                attach: _F,
                detach: _F,
                resize: _F
            } [L] || _z)(K, L, N), M[L] = void 0;
        }
        getDevicePixelRatio() {
            return window.devicePixelRatio;
        }
        getMaximumSize(K, L, M, N) {
            return (0, e.G)(K, L, M, N);
        }
        isAttached(K) {
            const L = (0, e.I)(K);
            return !(!L || !L.isConnected);
        }
    }
    class K {
        tooltipPosition(L) {
            const {
                x: M,
                y: N
            } = this.getProps([
                'x',
                'y'
            ], L);
            return {
                x: M,
                y: N
            };
        }
        hasValue() {
            return (0, e.x)(this.x) && (0, e.x)(this.y);
        }
        getProps(L, M) {
            const N = this.$animations;
            if (!M || !N)
                return this;
            const O = {};
            return L.forEach(L => {
                O[L] = N[L] && N[L].active() ? N[L]._to : this[L];
            }), O;
        }
        constructor() {
            (0, d.default)(this, 'active', !1);
        }
    }

    function L(M, N) {
        const O = M.options.ticks,
            P = function(Q) {
                const R = Q.options.offset,
                    S = Q._tickSize(),
                    T = Q._length / S + (R ? 0 : 1),
                    U = Q._maxLength / S;
                return Math.floor(Math.min(T, U));
            }(M),
            Q = Math.min(O.maxTicksLimit || P, P),
            R = O.major.enabled ? function(S) {
                const T = [];
                let U, V;
                for (U = 0, V = S.length; U < V; U++)
                    S[U].major && T.push(U);
                return T;
            }(N) : [],
            S = R.length,
            T = R[0],
            U = R[S - 1],
            V = [];
        if (S > Q)
            return function(W, X, Y, Z) {
                let $, ab = 0,
                    bb = Y[0];
                for (Z = Math.ceil(Z), $ = 0; $ < W.length; $++)
                    $ === bb && (X.push(W[$]), ab++, bb = Y[ab * Z]);
            }(N, V, R, S / Q), V;
        const W = function(X, Y, Z) {
            const $ = function(ab) {
                    const bb = ab.length;
                    let cb, db;
                    if (bb < 2)
                        return !1;
                    for (db = ab[0], cb = 1; cb < bb; ++cb)
                        if (ab[cb] - ab[cb - 1] !== db)
                            return !1;
                    return db;
                }(X),
                ab = Y.length / Z;
            if (!$)
                return Math.max(ab, 1);
            const bb = (0, e.N)($);
            for (let cb = 0, db = bb.length - 1; cb < db; cb++) {
                const eb = bb[cb];
                if (eb > ab)
                    return eb;
            }
            return Math.max(ab, 1);
        }(R, N, Q);
        if (S > 0) {
            let X, Y;
            const Z = S > 1 ? Math.round((U - T) / (S - 1)) : null;
            for (_L(N, V, W, (0, e.k)(Z) ? 0 : T - Z, T), X = 0, Y = S - 1; X < Y; X++)
                _L(N, V, W, R[X], R[X + 1]);
            return _L(N, V, W, U, (0, e.k)(Z) ? N.length : U + Z), V;
        }
        return _L(N, V, W), V;
    }

    function _L(M, N, O, P, Q) {
        const R = (0, e.v)(P, 0),
            S = Math.min((0, e.v)(Q, M.length), M.length);
        let T, U, V, W = 0;
        for (O = Math.ceil(O), Q && (T = Q - P, O = T / Math.floor(T / O)), V = R; V < 0;)
            W++, V = Math.round(R + W * O);
        for (U = Math.max(R, 0); U < S; U++)
            U === V && (N.push(M[U]), W++, V = Math.round(R + W * O));
    }
    (0, d.default)(K, 'defaults', {}), (0, d.default)(K, 'defaultRoutes', void 0);
    const L = (_N, b, a) => 'top' === b || 'left' === b ? _N[b] + a : _N[b] - a;

    function M(_N, O) {
        const P = [],
            Q = _N.length / O,
            R = _N.length;
        let S = 0;
        for (; S < R; S += Q)
            P.push(_N[Math.floor(S)]);
        return P;
    }

    function M(N, O, P) {
        const Q = N.ticks.length,
            R = Math.min(O, Q - 1),
            S = N._startPixel,
            T = N._endPixel,
            U = 0.000001;
        let V, W = N.getPixelForTick(R);
        if (!(P && (V = 1 === Q ? Math.max(W - S, T - W) : 0 === O ? (N.getPixelForTick(1) - W) / 2 : (W - N.getPixelForTick(R - 1)) / 2, W += R < O ? V : -V, W < S - U || W > T + U)))
            return W;
    }

    function M(N) {
        return N.drawTicks ? N.tickLength : 0;
    }

    function M(N, O) {
        if (!N.display)
            return 0;
        const P = (0, e.a0)(N.font, O),
            Q = (0, e.E)(N.padding);
        return ((0, e.b)(N.text) ? N.text.length : 1) * P.lineHeight + Q.height;
    }

    function M(N, O, P) {
        let Q = (0, e.a1)(N);
        return (P && 'right' !== O || !P && 'right' === O) && (Q = (N => 'left' === N ? 'right' : 'right' === N ? 'left' : N)(Q)), Q;
    }
    class M extends K {
        init(N) {
            this.options = N.setContext(this.getContext()), this.axis = N.axis, this._userMin = this.parse(N.min), this._userMax = this.parse(N.max), this._suggestedMin = this.parse(N.suggestedMin), this._suggestedMax = this.parse(N.suggestedMax);
        }
        parse(N, O) {
            return N;
        }
        getUserBounds() {
            let {
                _userMin: N,
                _userMax: O,
                _suggestedMin: P,
                _suggestedMax: Q
            } = this;
            return N = (0, e.O)(N, Number.POSITIVE_INFINITY), O = (0, e.O)(O, Number.NEGATIVE_INFINITY), P = (0, e.O)(P, Number.POSITIVE_INFINITY), Q = (0, e.O)(Q, Number.NEGATIVE_INFINITY), {
                min: (0, e.O)(N, P),
                max: (0, e.O)(O, Q),
                minDefined: (0, e.g)(N),
                maxDefined: (0, e.g)(O)
            };
        }
        getMinMax(N) {
            let O, {
                min: P,
                max: Q,
                minDefined: R,
                maxDefined: S
            } = this.getUserBounds();
            if (R && S)
                return {
                    min: P,
                    max: Q
                };
            const T = this.getMatchingVisibleMetas();
            for (let U = 0, V = T.length; U < V; ++U)
                O = T[U].controller.getMinMax(this, N), R || (P = Math.min(P, O.min)), S || (Q = Math.max(Q, O.max));
            return P = S && P > Q ? Q : P, Q = R && P > Q ? P : Q, {
                min: (0, U.O)(P, (0, U.O)(Q, P)),
                max: (0, U.O)(Q, (0, U.O)(P, Q))
            };
        }
        getPadding() {
            return {
                left: this.paddingLeft || 0,
                top: this.paddingTop || 0,
                right: this.paddingRight || 0,
                bottom: this.paddingBottom || 0
            };
        }
        getTicks() {
            return this.ticks;
        }
        getLabels() {
            const N = this.chart.data;
            return this.options.labels || (this.isHorizontal() ? N.xLabels : N.yLabels) || N.labels || [];
        }
        getLabelItems(N = this.chart.chartArea) {
            return this._labelItems || (this._labelItems = this._computeLabelItems(N));
        }
        beforeLayout() {
            this._cache = {}, this._dataLimitsCached = !1;
        }
        beforeUpdate() {
            (0, e.Q)(this.options.beforeUpdate, [this]);
        }
        update(N, O, P) {
            const {
                beginAtZero: Q,
                grace: R,
                ticks: S
            } = this.options, T = S.sampleSize;
            this.beforeUpdate(), this.maxWidth = N, this.maxHeight = O, this._margins = P = Object.assign({
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }, P), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + P.left + P.right : this.height + P.top + P.bottom, this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = (0, e.R)(this, R, Q), this._dataLimitsCached = !0), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks();
            const U = T < this.ticks.length;
            this._convertTicksToLabels(U ? _J(this.ticks, T) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), S.display && (S.autoSkip || 'auto' === S.source) && (this.ticks = _G(this, this.ticks), this._labelSizes = null, this.afterAutoSkip()), U && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate();
        }
        configure() {
            let N, O, P = this.options.reverse;
            this.isHorizontal() ? (N = this.left, O = this.right) : (N = this.top, O = this.bottom, P = !P), this._startPixel = N, this._endPixel = O, this._reversePixels = P, this._length = O - N, this._alignToPixels = this.options.alignToPixels;
        }
        afterUpdate() {
            (0, e.Q)(this.options.afterUpdate, [this]);
        }
        beforeSetDimensions() {
            (0, e.Q)(this.options.beforeSetDimensions, [this]);
        }
        setDimensions() {
            this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0;
        }
        afterSetDimensions() {
            (0, e.Q)(this.options.afterSetDimensions, [this]);
        }
        _callHooks(N) {
            this.chart.notifyPlugins(N, this.getContext()), (0, e.Q)(this.options[N], [this]);
        }
        beforeDataLimits() {
            this._callHooks('beforeDataLimits');
        }
        determineDataLimits() {}
        afterDataLimits() {
            this._callHooks('afterDataLimits');
        }
        beforeBuildTicks() {
            this._callHooks('beforeBuildTicks');
        }
        buildTicks() {
            return [];
        }
        afterBuildTicks() {
            this._callHooks('afterBuildTicks');
        }
        beforeTickToLabelConversion() {
            (0, e.Q)(this.options.beforeTickToLabelConversion, [this]);
        }
        generateTickLabels(N) {
            const O = this.options.ticks;
            let P, Q, R;
            for (P = 0, Q = N.length; P < Q; P++)
                R = N[P], R.label = (0, e.Q)(O.callback, [
                    R.value,
                    P,
                    N
                ], this);
        }
        afterTickToLabelConversion() {
            (0, e.Q)(this.options.afterTickToLabelConversion, [this]);
        }
        beforeCalculateLabelRotation() {
            (0, e.Q)(this.options.beforeCalculateLabelRotation, [this]);
        }
        calculateLabelRotation() {
            const N = this.options,
                O = N.ticks,
                P = this.ticks.length,
                Q = O.minRotation || 0,
                R = O.maxRotation;
            let S, T, U, V = Q;
            if (!this._isVisible() || !O.display || Q >= R || P <= 1 || !this.isHorizontal())
                return void(this.labelRotation = Q);
            const W = this._getLabelSizes(),
                X = W.widest.width,
                Y = W.highest.height,
                Z = (0, e.S)(this.chart.width - X, 0, this.maxWidth);
            S = N.offset ? this.maxWidth / P : Z / (P - 1), X + 6 > S && (S = Z / (P - (N.offset ? 0.5 : 1)), T = this.maxHeight - _K(N.grid) - O.padding - _L(N.title, this.chart.options.font), U = Math.sqrt(X * X + Y * Y), V = (0, e.U)(Math.min(Math.asin((0, e.S)((W.highest.height + 6) / S, -1, 1)), Math.asin((0, e.S)(T / U, -1, 1)) - Math.asin((0, e.S)(Y / U, -1, 1)))), V = Math.max(Q, Math.min(R, V))), this.labelRotation = V;
        }
        afterCalculateLabelRotation() {
            (0, e.Q)(this.options.afterCalculateLabelRotation, [this]);
        }
        afterAutoSkip() {}
        beforeFit() {
            (0, e.Q)(this.options.beforeFit, [this]);
        }
        fit() {
            const N = {
                    width: 0,
                    height: 0
                },
                {
                    chart: O,
                    options: {
                        ticks: P,
                        title: Q,
                        grid: R
                    }
                } = this,
                S = this._isVisible(),
                T = this.isHorizontal();
            if (S) {
                const U = _L(Q, O.options.font);
                if (T ? (N.width = this.maxWidth, N.height = _K(R) + U) : (N.height = this.maxHeight, N.width = _K(R) + U), P.display && this.ticks.length) {
                    const {
                        first: V,
                        last: W,
                        widest: X,
                        highest: Y
                    } = this._getLabelSizes(), Z = 2 * P.padding, $ = (0, e.t)(this.labelRotation), ab = Math.cos($), bb = Math.sin($);
                    if (T) {
                        const cb = P.mirror ? 0 : bb * X.width + ab * Y.height;
                        N.height = Math.min(this.maxHeight, N.height + cb + Z);
                    } else {
                        const cb = P.mirror ? 0 : ab * X.width + bb * Y.height;
                        N.width = Math.min(this.maxWidth, N.width + cb + Z);
                    }
                    this._calculatePadding(V, W, bb, ab);
                }
            }
            this._handleMargins(), T ? (this.width = this._length = O.width - this._margins.left - this._margins.right, this.height = N.height) : (this.width = N.width, this.height = this._length = O.height - this._margins.top - this._margins.bottom);
        }
        _calculatePadding(N, O, P, Q) {
            const {
                ticks: {
                    align: R,
                    padding: S
                },
                position: T
            } = this.options, U = 0 !== this.labelRotation, V = 'top' !== T && 'x' === this.axis;
            if (this.isHorizontal()) {
                const W = this.getPixelForTick(0) - this.left,
                    X = this.right - this.getPixelForTick(this.ticks.length - 1);
                let Y = 0,
                    Z = 0;
                U ? V ? (Y = Q * N.width, Z = P * O.height) : (Y = P * N.height, Z = Q * O.width) : 'start' === R ? Z = O.width : 'end' === R ? Y = N.width : 'inner' !== R && (Y = N.width / 2, Z = O.width / 2), this.paddingLeft = Math.max((Y - W + S) * this.width / (this.width - W), 0), this.paddingRight = Math.max((Z - X + S) * this.width / (this.width - X), 0);
            } else {
                let W = O.height / 2,
                    X = N.height / 2;
                'start' === R ? (W = 0, X = N.height) : 'end' === R && (W = O.height, X = 0), this.paddingTop = W + S, this.paddingBottom = X + S;
            }
        }
        _handleMargins() {
            this._margins && (this._margins.left = Math.max(this.paddingLeft, this._margins.left), this._margins.top = Math.max(this.paddingTop, this._margins.top), this._margins.right = Math.max(this.paddingRight, this._margins.right), this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom));
        }
        afterFit() {
            (0, e.Q)(this.options.afterFit, [this]);
        }
        isHorizontal() {
            const {
                axis: N,
                position: O
            } = this.options;
            return 'top' === O || 'bottom' === O || 'x' === N;
        }
        isFullSize() {
            return this.options.fullSize;
        }
        _convertTicksToLabels(N) {
            let O, P;
            for (this.beforeTickToLabelConversion(), this.generateTickLabels(N), O = 0, P = N.length; O < P; O++)
                (0, e.k)(N[O].label) && (N.splice(O, 1), P--, O--);
            this.afterTickToLabelConversion();
        }
        _getLabelSizes() {
            let N = this._labelSizes;
            if (!N) {
                const O = this.options.ticks.sampleSize;
                let P = this.ticks;
                O < P.length && (P = _J(P, O)), this._labelSizes = N = this._computeLabelSizes(P, P.length);
            }
            return N;
        }
        _computeLabelSizes(N, O) {
            const {
                ctx: P,
                _longestTextCache: Q
            } = this, R = [], S = [];
            let T, U, V, W, X, Y, Z, $, ab, bb, cb, db = 0,
                eb = 0;
            for (T = 0; T < O; ++T) {
                if (W = N[T].label, X = this._resolveTickFontOptions(T), P.font = Y = X.string, Z = Q[Y] = Q[Y] || {
                        data: {},
                        gc: []
                    }, $ = X.lineHeight, ab = bb = 0, (0, e.k)(W) || (0, e.b)(W)) {
                    if ((0, e.b)(W))
                        for (U = 0, V = W.length; U < V; ++U)
                            cb = W[U], (0, e.k)(cb) || (0, e.b)(cb) || (ab = (0, e.V)(P, Z.data, Z.gc, ab, cb), bb += $);
                } else
                    ab = (0, e.V)(P, Z.data, Z.gc, ab, W), bb = $;
                R.push(ab), S.push(bb), db = Math.max(ab, db), eb = Math.max(bb, eb);
            }! function(fb, gb) {
                (0, e.F)(fb, fb => {
                    const hb = fb.gc,
                        ib = hb.length / 2;
                    let jb;
                    if (ib > gb) {
                        for (jb = 0; jb < ib; ++jb)
                            delete fb.data[hb[jb]];
                        hb.splice(0, ib);
                    }
                });
            }(Q, O);
            const fb = R.indexOf(db),
                gb = S.indexOf(eb),
                hb = N => ({
                    width: R[N] || 0,
                    height: S[N] || 0
                });
            return {
                first: hb(0),
                last: hb(O - 1),
                widest: hb(fb),
                highest: hb(gb),
                widths: R,
                heights: S
            };
        }
        getLabelForValue(N) {
            return N;
        }
        getPixelForValue(N, O) {
            return NaN;
        }
        getValueForPixel(N) {}
        getPixelForTick(N) {
            const O = this.ticks;
            return N < 0 || N > O.length - 1 ? null : this.getPixelForValue(O[N].value);
        }
        getPixelForDecimal(N) {
            this._reversePixels && (N = 1 - N);
            const O = this._startPixel + N * this._length;
            return (0, e.W)(this._alignToPixels ? (0, e.X)(this.chart, O, 0) : O);
        }
        getDecimalForPixel(N) {
            const O = (N - this._startPixel) / this._length;
            return this._reversePixels ? 1 - O : O;
        }
        getBasePixel() {
            return this.getPixelForValue(this.getBaseValue());
        }
        getBaseValue() {
            const {
                min: N,
                max: O
            } = this;
            return N < 0 && O < 0 ? O : N > 0 && O > 0 ? N : 0;
        }
        getContext(N) {
            const O = this.ticks || [];
            if (N >= 0 && N < O.length) {
                const P = O[N];
                return P.$context || (P.$context = function(Q, R, S) {
                    return (0, e.j)(Q, {
                        tick: S,
                        index: R,
                        type: 'tick'
                    });
                }(this.getContext(), N, P));
            }
            return this.$context || (this.$context = (a = this.chart.getContext(), c = this, (0, e.j)(a, {
                scale: c,
                type: 'scale'
            })));
            var P, Q;
        }
        _tickSize() {
            const N = this.options.ticks,
                O = (0, e.t)(this.labelRotation),
                P = Math.abs(Math.cos(O)),
                Q = Math.abs(Math.sin(O)),
                R = this._getLabelSizes(),
                S = N.autoSkipPadding || 0,
                T = R ? R.widest.width + S : 0,
                U = R ? R.highest.height + S : 0;
            return this.isHorizontal() ? U * P > T * Q ? T / P : U / Q : U * Q < T * P ? U / P : T / Q;
        }
        _isVisible() {
            const N = this.options.display;
            return 'auto' !== N ? !!N : this.getMatchingVisibleMetas().length > 0;
        }
        _computeGridLineItems(N) {
            const O = this.axis,
                P = this.chart,
                Q = this.options,
                {
                    grid: R,
                    position: S,
                    border: T
                } = Q,
                U = R.offset,
                V = this.isHorizontal(),
                W = this.ticks.length + (U ? 1 : 0),
                X = _K(R),
                Y = [],
                Z = T.setContext(this.getContext()),
                $ = Z.display ? Z.width : 0,
                ab = $ / 2,
                bb = function(cb) {
                    return (0, e.X)(P, cb, $);
                };
            let cb, db, eb, fb, gb, hb, ib, jb, _kb, _lb, _mb, _nb;
            if ('top' === S)
                cb = bb(this.bottom), hb = this.bottom - X, jb = cb - ab, _lb = bb(N.top) + ab, _nb = N.bottom;
            else if ('bottom' === S)
                cb = bb(this.top), _lb = N.top, _nb = bb(N.bottom) - ab, hb = cb + ab, jb = this.top + X;
            else if ('left' === S)
                cb = bb(this.right), gb = this.right - X, ib = cb - ab, _kb = bb(N.left) + ab, _mb = N.right;
            else if ('right' === S)
                cb = bb(this.left), _kb = N.left, _mb = bb(N.right) - ab, gb = cb + ab, ib = this.left + X;
            else if ('x' === O) {
                if ('center' === S)
                    cb = bb((N.top + N.bottom) / 2 + 0.5);
                else if ((0, e.i)(S)) {
                    const ob = Object.keys(S)[0],
                        pb = S[ob];
                    cb = bb(this.chart.scales[ob].getPixelForValue(pb));
                }
                _lb = N.top, _nb = N.bottom, hb = cb + ab, jb = hb + X;
            } else if ('y' === O) {
                if ('center' === S)
                    cb = bb((N.left + N.right) / 2);
                else if ((0, e.i)(S)) {
                    const ob = Object.keys(S)[0],
                        pb = S[ob];
                    cb = bb(this.chart.scales[ob].getPixelForValue(pb));
                }
                gb = cb - ab, ib = gb - X, _kb = N.left, _mb = N.right;
            }
            const ob = (0, e.v)(Q.ticks.maxTicksLimit, W),
                pb = Math.max(1, Math.ceil(W / ob));
            for (db = 0; db < W; db += pb) {
                const qb = this.getContext(db),
                    rb = R.setContext(qb),
                    sb = T.setContext(qb),
                    tb = rb.lineWidth,
                    ub = rb.color,
                    vb = sb.dash || [],
                    wb = sb.dashOffset,
                    xb = rb.tickWidth,
                    yb = rb.tickColor,
                    zb = rb.tickBorderDash || [],
                    Ab = rb.tickBorderDashOffset;
                eb = _J(this, db, U), void 0 !== eb && (fb = (0, e.X)(P, eb, tb), V ? gb = ib = _kb = _mb = fb : hb = jb = _lb = _nb = fb, Y.push({
                    tx1: gb,
                    ty1: hb,
                    tx2: ib,
                    ty2: jb,
                    x1: _kb,
                    y1: _lb,
                    x2: _mb,
                    y2: _nb,
                    width: tb,
                    color: ub,
                    borderDash: vb,
                    borderDashOffset: wb,
                    tickWidth: xb,
                    tickColor: yb,
                    tickBorderDash: zb,
                    tickBorderDashOffset: Ab
                }));
            }
            return this._ticksLength = W, this._borderValue = cb, Y;
        }
        _computeLabelItems(N) {
            const O = this.axis,
                P = this.options,
                {
                    position: Q,
                    ticks: R
                } = P,
                S = this.isHorizontal(),
                T = this.ticks,
                {
                    align: U,
                    crossAlign: V,
                    padding: W,
                    mirror: X
                } = R,
                Y = _K(P.grid),
                Z = Y + W,
                $ = X ? -W : Z,
                ab = -(0, e.t)(this.labelRotation),
                bb = [];
            let cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, nb, ob = 'middle';
            if ('top' === Q)
                hb = this.bottom - $, ib = this._getXAxisLabelAlignment();
            else if ('bottom' === Q)
                hb = this.top + $, ib = this._getXAxisLabelAlignment();
            else if ('left' === Q) {
                const pb = this._getYAxisLabelAlignment(Y);
                ib = pb.textAlign, gb = pb.x;
            } else if ('right' === Q) {
                const pb = this._getYAxisLabelAlignment(Y);
                ib = pb.textAlign, gb = pb.x;
            } else if ('x' === O) {
                if ('center' === Q)
                    hb = (N.top + N.bottom) / 2 + Z;
                else if ((0, e.i)(Q)) {
                    const pb = Object.keys(Q)[0],
                        qb = Q[pb];
                    hb = this.chart.scales[pb].getPixelForValue(qb) + Z;
                }
                ib = this._getXAxisLabelAlignment();
            } else if ('y' === O) {
                if ('center' === Q)
                    gb = (N.left + N.right) / 2 - Z;
                else if ((0, e.i)(Q)) {
                    const pb = Object.keys(Q)[0],
                        qb = Q[pb];
                    gb = this.chart.scales[pb].getPixelForValue(qb);
                }
                ib = this._getYAxisLabelAlignment(Y).textAlign;
            }
            'y' === O && ('start' === U ? ob = 'top' : 'end' === U && (ob = 'bottom'));
            const pb = this._getLabelSizes();
            for (cb = 0, db = T.length; cb < db; ++cb) {
                eb = T[cb], fb = eb.label;
                const qb = R.setContext(this.getContext(cb));
                jb = this.getPixelForTick(cb) + R.labelOffset, kb = this._resolveTickFontOptions(cb), lb = kb.lineHeight, mb = (0, e.b)(fb) ? fb.length : 1;
                const rb = mb / 2,
                    sb = qb.color,
                    tb = qb.textStrokeColor,
                    ub = qb.textStrokeWidth;
                let vb, wb = ib;
                if (S ? (gb = jb, 'inner' === ib && (wb = cb === db - 1 ? this.options.reverse ? 'left' : 'right' : 0 === cb ? this.options.reverse ? 'right' : 'left' : 'center'), nb = 'top' === Q ? 'near' === V || 0 !== ab ? -mb * lb + lb / 2 : 'center' === V ? -pb.highest.height / 2 - rb * lb + lb : -pb.highest.height + lb / 2 : 'near' === V || 0 !== ab ? lb / 2 : 'center' === V ? pb.highest.height / 2 - rb * lb : pb.highest.height - mb * lb, X && (nb *= -1), 0 === ab || qb.showLabelBackdrop || (gb += lb / 2 * Math.sin(ab))) : (hb = jb, nb = (1 - mb) * lb / 2), qb.showLabelBackdrop) {
                    const xb = (0, e.E)(qb.backdropPadding),
                        yb = pb.heights[cb],
                        zb = pb.widths[cb];
                    let Ab = nb - xb.top,
                        Bb = 0 - xb.left;
                    switch (ob) {
                        case 'middle':
                            Ab -= yb / 2;
                            break;
                        case 'bottom':
                            Ab -= yb;
                    }
                    switch (ib) {
                        case 'center':
                            Bb -= zb / 2;
                            break;
                        case 'right':
                            Bb -= zb;
                    }
                    vb = {
                        left: Bb,
                        top: Ab,
                        width: zb + xb.width,
                        height: yb + xb.height,
                        color: qb.backdropColor
                    };
                }
                bb.push({
                    label: fb,
                    font: kb,
                    textOffset: nb,
                    options: {
                        rotation: ab,
                        color: sb,
                        strokeColor: tb,
                        strokeWidth: ub,
                        textAlign: wb,
                        textBaseline: ob,
                        translation: [
                            gb,
                            hb
                        ],
                        backdrop: vb
                    }
                });
            }
            return bb;
        }
        _getXAxisLabelAlignment() {
            const {
                position: N,
                ticks: O
            } = this.options;
            if (-(0, e.t)(this.labelRotation))
                return 'top' === N ? 'left' : 'right';
            let P = 'center';
            return 'start' === O.align ? P = 'left' : 'end' === O.align ? P = 'right' : 'inner' === O.align && (P = 'inner'), P;
        }
        _getYAxisLabelAlignment(N) {
            const {
                position: O,
                ticks: {
                    crossAlign: P,
                    mirror: Q,
                    padding: R
                }
            } = this.options, S = N + R, T = this._getLabelSizes().widest.width;
            let U, V;
            return 'left' === O ? Q ? (V = this.right + R, 'near' === P ? U = 'left' : 'center' === P ? (U = 'center', V += T / 2) : (U = 'right', V += T)) : (V = this.right - S, 'near' === P ? U = 'right' : 'center' === P ? (U = 'center', V -= T / 2) : (U = 'left', V = this.left)) : 'right' === O ? Q ? (V = this.left + R, 'near' === P ? U = 'right' : 'center' === P ? (U = 'center', V -= T / 2) : (U = 'left', V -= T)) : (V = this.left + S, 'near' === P ? U = 'left' : 'center' === P ? (U = 'center', V += T / 2) : (U = 'right', V = this.right)) : U = 'right', {
                textAlign: U,
                x: V
            };
        }
        _computeLabelArea() {
            if (this.options.ticks.mirror)
                return;
            const N = this.chart,
                O = this.options.position;
            return 'left' === O || 'right' === O ? {
                top: 0,
                left: this.left,
                bottom: N.height,
                right: this.right
            } : 'top' === O || 'bottom' === O ? {
                top: this.top,
                left: 0,
                bottom: this.bottom,
                right: N.width
            } : void 0;
        }
        drawBackground() {
            const {
                ctx: N,
                options: {
                    backgroundColor: O
                },
                left: P,
                top: Q,
                width: R,
                height: S
            } = this;
            O && (N.save(), N.fillStyle = O, N.fillRect(P, Q, R, S), N.restore());
        }
        getLineWidthForValue(N) {
            const O = this.options.grid;
            if (!this._isVisible() || !O.display)
                return 0;
            const P = this.ticks.findIndex(O => O.value === N);
            if (P >= 0) {
                return O.setContext(this.getContext(P)).lineWidth;
            }
            return 0;
        }
        drawGrid(N) {
            const O = this.options.grid,
                P = this.ctx,
                Q = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(N));
            let R, S;
            const T = (N, O, Q) => {
                Q.width && Q.color && (P.save(), P.lineWidth = Q.width, P.strokeStyle = Q.color, P.setLineDash(Q.borderDash || []), P.lineDashOffset = Q.borderDashOffset, P.beginPath(), P.moveTo(N.x, N.y), P.lineTo(O.x, O.y), P.stroke(), P.restore());
            };
            if (O.display)
                for (R = 0, S = Q.length; R < S; ++R) {
                    const U = Q[R];
                    O.drawOnChartArea && T({
                        x: U.x1,
                        y: U.y1
                    }, {
                        x: U.x2,
                        y: U.y2
                    }, U), O.drawTicks && T({
                        x: U.tx1,
                        y: U.ty1
                    }, {
                        x: U.tx2,
                        y: U.ty2
                    }, {
                        color: U.tickColor,
                        width: U.tickWidth,
                        borderDash: U.tickBorderDash,
                        borderDashOffset: U.tickBorderDashOffset
                    });
                }
        }
        drawBorder() {
            const {
                chart: N,
                ctx: O,
                options: {
                    border: P,
                    grid: Q
                }
            } = this, R = P.setContext(this.getContext()), S = P.display ? R.width : 0;
            if (!S)
                return;
            const T = Q.setContext(this.getContext(0)).lineWidth,
                U = this._borderValue;
            let V, W, X, Y;
            this.isHorizontal() ? (V = (0, e.X)(N, this.left, S) - S / 2, W = (0, e.X)(N, this.right, T) + T / 2, X = Y = U) : (X = (0, e.X)(N, this.top, S) - S / 2, Y = (0, e.X)(N, this.bottom, T) + T / 2, V = W = U), O.save(), O.lineWidth = R.width, O.strokeStyle = R.color, O.beginPath(), O.moveTo(V, X), O.lineTo(W, Y), O.stroke(), O.restore();
        }
        drawLabels(N) {
            if (!this.options.ticks.display)
                return;
            const O = this.ctx,
                P = this._computeLabelArea();
            P && (0, e.Y)(O, P);
            const Q = this.getLabelItems(N);
            for (const R of Q) {
                const S = R.options,
                    T = R.font,
                    U = R.label,
                    V = R.textOffset;
                (0, e.Z)(O, U, 0, V, T, S);
            }
            P && (0, e.$)(O);
        }
        drawTitle() {
            const {
                ctx: N,
                options: {
                    position: O,
                    title: P,
                    reverse: Q
                }
            } = this;
            if (!P.display)
                return;
            const R = (0, e.a0)(P.font),
                S = (0, e.E)(P.padding),
                T = P.align;
            let U = R.lineHeight / 2;
            'bottom' === O || 'center' === O || (0, e.i)(O) ? (U += S.bottom, (0, e.b)(P.text) && (U += R.lineHeight * (P.text.length - 1))) : U += S.top;
            const {
                titleX: V,
                titleY: W,
                maxWidth: X,
                rotation: Y
            } = function(Z, $, ab, bb) {
                const {
                    top: cb,
                    left: db,
                    bottom: eb,
                    right: fb,
                    chart: gb
                } = Z, {
                    chartArea: hb,
                    scales: ib
                } = gb;
                let jb, kb, lb, mb = 0;
                const nb = eb - cb,
                    ob = fb - db;
                if (Z.isHorizontal()) {
                    if (kb = (0, e.a2)(bb, db, fb), (0, e.i)(ab)) {
                        const pb = Object.keys(ab)[0],
                            qb = ab[pb];
                        lb = ib[pb].getPixelForValue(qb) + nb - $;
                    } else
                        lb = 'center' === ab ? (hb.bottom + hb.top) / 2 + nb - $ : L(Z, ab, $);
                    jb = fb - db;
                } else {
                    if ((0, e.i)(ab)) {
                        const pb = Object.keys(ab)[0],
                            qb = ab[pb];
                        kb = ib[pb].getPixelForValue(qb) - ob + $;
                    } else
                        kb = 'center' === ab ? (hb.left + hb.right) / 2 - ob + $ : L(Z, ab, $);
                    lb = (0, e.a2)(bb, eb, cb), mb = 'left' === ab ? -e.H : e.H;
                }
                return {
                    titleX: kb,
                    titleY: lb,
                    maxWidth: jb,
                    rotation: mb
                };
            }(this, U, O, T);
            (0, e.Z)(N, P.text, 0, 0, R, {
                color: P.color,
                maxWidth: X,
                rotation: Y,
                textAlign: _M(T, O, Q),
                textBaseline: 'middle',
                translation: [
                    V,
                    W
                ]
            });
        }
        draw(N) {
            this._isVisible() && (this.drawBackground(), this.drawGrid(N), this.drawBorder(), this.drawTitle(), this.drawLabels(N));
        }
        _layers() {
            const N = this.options,
                O = N.ticks && N.ticks.z || 0,
                P = (0, e.v)(N.grid && N.grid.z, -1),
                Q = (0, e.v)(N.border && N.border.z, 0);
            return this._isVisible() && this.draw === M.prototype.draw ? [{
                    z: P,
                    draw: N => {
                        this.drawBackground(), this.drawGrid(N), this.drawTitle();
                    }
                },
                {
                    z: Q,
                    draw: () => {
                        this.drawBorder();
                    }
                },
                {
                    z: O,
                    draw: N => {
                        this.drawLabels(N);
                    }
                }
            ] : [{
                z: O,
                draw: N => {
                    this.draw(N);
                }
            }];
        }
        getMatchingVisibleMetas(N) {
            const O = this.chart.getSortedVisibleDatasetMetas(),
                P = this.axis + 'AxisID',
                Q = [];
            let R, S;
            for (R = 0, S = O.length; R < S; ++R) {
                const T = O[R];
                T[P] !== this.id || N && T.type !== N || Q.push(T);
            }
            return Q;
        }
        _resolveTickFontOptions(N) {
            const O = this.options.ticks.setContext(this.getContext(N));
            return (0, e.a0)(O.font);
        }
        _maxDigits() {
            const N = this._resolveTickFontOptions(0).lineHeight;
            return (this.isHorizontal() ? this.width : this.height) / N;
        }
        constructor(N) {
            super(), this.id = N.id, this.type = N.type, this.options = void 0, this.ctx = N.ctx, this.chart = N.chart, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this._margins = {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }, this.maxWidth = void 0, this.maxHeight = void 0, this.paddingTop = void 0, this.paddingBottom = void 0, this.paddingLeft = void 0, this.paddingRight = void 0, this.axis = void 0, this.labelRotation = void 0, this.min = void 0, this.max = void 0, this._range = void 0, this.ticks = [], this._gridLineItems = null, this._labelItems = null, this._labelSizes = null, this._length = 0, this._maxLength = 0, this._longestTextCache = {}, this._startPixel = void 0, this._endPixel = void 0, this._reversePixels = !1, this._userMax = void 0, this._userMin = void 0, this._suggestedMax = void 0, this._suggestedMin = void 0, this._ticksLength = 0, this._borderValue = 0, this._cache = {}, this._dataLimitsCached = !1, this.$context = void 0;
        }
    }
    class N {
        isForType(O) {
            return Object.prototype.isPrototypeOf.call(this.type.prototype, O.prototype);
        }
        register(O) {
            const P = Object.getPrototypeOf(O);
            let Q;
            (function(R) {
                return 'id' in R && 'defaults' in R;
            }(P) && (Q = this.register(P)));
            const R = this.items,
                S = O.id,
                T = this.scope + '.' + S;
            if (!S)
                throw new Error('class does not have id: ' + O);
            return S in R || (R[S] = O, function(U, V, W) {
                const X = (0, e.a4)(Object.create(null), [
                    W ? e.d.get(W) : {},
                    e.d.get(V),
                    U.defaults
                ]);
                e.d.set(V, X), U.defaultRoutes && function(Y, Z) {
                    Object.keys(Z).forEach(W => {
                        const $ = W.split('.'),
                            ab = $.pop(),
                            bb = [Y].concat($).join('.'),
                            cb = Z[W].split('.'),
                            db = cb.pop(),
                            eb = cb.join('.');
                        e.d.route(bb, ab, eb, db);
                    });
                }(V, U.defaultRoutes);
                U.descriptors && e.d.describe(V, U.descriptors);
            }(O, T, Q), this.override && e.d.override(O.id, O.overrides)), T;
        }
        get(O) {
            return this.items[O];
        }
        unregister(O) {
            const P = this.items,
                Q = O.id,
                R = this.scope;
            Q in P && delete P[Q], R && Q in e.d[R] && (delete e.d[R][Q], this.override && delete e.a3[Q]);
        }
        constructor(O, P, Q) {
            this.type = O, this.scope = P, this.override = Q, this.items = Object.create(null);
        }
    }
    class O {
        add(..._P) {
            this._each('register', _P);
        }
        remove(..._P) {
            this._each('unregister', _P);
        }
        addControllers(..._P) {
            this._each('register', _P, this.controllers);
        }
        addElements(..._P) {
            this._each('register', _P, this.elements);
        }
        addPlugins(..._P) {
            this._each('register', _P, this.plugins);
        }
        addScales(..._P) {
            this._each('register', _P, this.scales);
        }
        getController(_P) {
            return this._get(_P, this.controllers, 'controller');
        }
        getElement(P) {
            return this._get(P, this.elements, 'element');
        }
        getPlugin(P) {
            return this._get(P, this.plugins, 'plugin');
        }
        getScale(P) {
            return this._get(P, this.scales, 'scale');
        }
        removeControllers(..._P) {
            this._each('unregister', _P, this.controllers);
        }
        removeElements(..._P) {
            this._each('unregister', _P, this.elements);
        }
        removePlugins(..._P) {
            this._each('unregister', _P, this.plugins);
        }
        removeScales(..._P) {
            this._each('unregister', _P, this.scales);
        }
        _each(_P, Q, R) {
            [...Q].forEach(Q => {
                const S = R || this._getRegistryForType(Q);
                R || S.isForType(Q) || S === this.plugins && Q.id ? this._exec(_P, S, Q) : (0, e.F)(Q, Q => {
                    const T = R || this._getRegistryForType(Q);
                    this._exec(_P, T, Q);
                });
            });
        }
        _exec(P, Q, R) {
            const S = (0, e.a5)(P);
            (0, e.Q)(R['before' + S], [], R), Q[P](R), (0, e.Q)(R['after' + S], [], R);
        }
        _getRegistryForType(P) {
            for (let Q = 0; Q < this._typedRegistries.length; Q++) {
                const R = this._typedRegistries[Q];
                if (R.isForType(P))
                    return R;
            }
            return this.plugins;
        }
        _get(P, Q, R) {
            const S = Q.get(P);
            if (void 0 === S)
                throw new Error('"' + P + '" is not a registered ' + R + '.');
            return S;
        }
        constructor() {
            this.controllers = new N(n, 'datasets', !0), this.elements = new N(K, 'elements'), this.plugins = new N(Object, 'plugins'), this.scales = new N(M, 'scales'), this._typedRegistries = [
                this.controllers,
                this.scales,
                this.elements
            ];
        }
    }
    var P = new O();
    class Q {
        notify(R, S, T, U) {
            'beforeInit' === S && (this._init = this._createDescriptors(R, !0), this._notify(this._init, R, 'install'));
            const V = U ? this._descriptors(R).filter(U) : this._descriptors(R),
                W = this._notify(V, R, S, T);
            return 'afterDestroy' === S && (this._notify(V, R, 'stop'), this._notify(this._init, R, 'uninstall')), W;
        }
        _notify(R, S, T, U) {
            U = U || {};
            for (const V of R) {
                const W = V.plugin,
                    X = W[T],
                    Y = [
                        S,
                        U,
                        V.options
                    ];
                if (!1 === (0, e.Q)(X, Y, W) && U.cancelable)
                    return !1;
            }
            return !0;
        }
        invalidate() {
            (0, e.k)(this._cache) || (this._oldCache = this._cache, this._cache = void 0);
        }
        _descriptors(R) {
            if (this._cache)
                return this._cache;
            const S = this._cache = this._createDescriptors(R);
            return this._notifyStateChanges(R), S;
        }
        _createDescriptors(R, S) {
            const T = R && R.config,
                U = (0, e.v)(T.options && T.options.plugins, {}),
                V = function(W) {
                    const X = {},
                        Y = [],
                        Z = Object.keys(P.plugins.items);
                    for (let $ = 0; $ < Z.length; $++)
                        Y.push(P.getPlugin(Z[$]));
                    const ab = $.plugins || [];
                    for (let bb = 0; bb < ab.length; bb++) {
                        const cb = ab[bb]; -
                        1 === Y.indexOf(cb) && (Y.push(cb), X[cb.id] = !0);
                    }
                    return {
                        plugins: Y,
                        localIds: X
                    };
                }(T);
            return !1 !== U || S ? function(W, {
                plugins: X,
                localIds: Y
            }, Z, $) {
                const ab = [],
                    bb = W.getContext();
                for (const cb of X) {
                    const db = cb.id,
                        eb = _R(Z[db], $);
                    null !== eb && ab.push({
                        plugin: cb,
                        options: _R(W.config, {
                            plugin: cb,
                            local: Y[db]
                        }, eb, bb)
                    });
                }
                return ab;
            }(R, V, U, S) : [];
        }
        _notifyStateChanges(R) {
            const S = this._oldCache || [],
                T = this._cache,
                U = (R, S) => R.filter(R => !S.some(S => R.plugin.id === S.plugin.id));
            this._notify(U(S, T), R, 'stop'), this._notify(U(T, S), R, 'start');
        }
        constructor() {
            this._init = [];
        }
    }

    function _R(S, T) {
        return T || !1 !== S ? !0 === S ? {} : S : null;
    }

    function _R(S, {
        plugin: T,
        local: U
    }, V, W) {
        const X = S.pluginScopeKeys(T),
            Y = S.getOptionScopes(V, X);
        return U && T.defaults && Y.push(T.defaults), S.createResolver(Y, W, [''], {
            scriptable: !1,
            indexable: !1,
            allKeys: !0
        });
    }

    function R(S, T) {
        const U = e.d.datasets[S] || {};
        return ((T.datasets || {})[S] || {}).indexAxis || T.indexAxis || U.indexAxis || 'x';
    }

    function R(S, T) {
        if ('x' === S || 'y' === S || 'r' === S)
            return S;
        var U;
        if (S = T.axis || ('top' === (U = T.position) || 'bottom' === U ? 'x' : 'left' === U || 'right' === U ? 'y' : void 0) || S.length > 1 && R(S[0].toLowerCase(), T))
            return S;
        throw new Error(`Cannot determine type of '${ name }' axis. Please provide 'axis' or 'position' option.`);
    }

    function R(S) {
        const T = S.options || (S.options = {});
        T.plugins = (0, e.v)(T.plugins, {}), T.scales = function(U, V) {
            const W = e.a3[U.type] || {
                    scales: {}
                },
                X = V.scales || {},
                Y = _P(U.type, V),
                Z = Object.create(null);
            return Object.keys(X).forEach(U => {
                const $ = X[U];
                if (!(0, e.i)($))
                    return console.error(`Invalid scale configuration for scale: ${ U }`);
                if ($._proxy)
                    return console.warn(`Ignoring resolver passed as options for scale: ${ U }`);
                const ab = _P(U, $),
                    bb = function(cb, db) {
                        return cb === db ? '_index_' : '_value_';
                    }(ab, Y),
                    cb = W.scales || {};
                Z[U] = (0, e.ab)(Object.create(null), [{
                        axis: ab
                    },
                    $,
                    cb[ab],
                    cb[bb]
                ]);
            }), U.data.datasets.forEach(W => {
                const $ = W.type || U.type,
                    ab = W.indexAxis || _P($, V),
                    bb = (e.a3[$] || {}).scales || {};
                Object.keys(bb).forEach(U => {
                    const cb = function(db, eb) {
                            let fb = db;
                            return '_index_' === db ? fb = eb : '_value_' === db && (fb = 'x' === eb ? 'y' : 'x'), fb;
                        }(U, ab),
                        db = W[cb + 'AxisID'] || cb;
                    Z[db] = Z[db] || Object.create(null), (0, e.ab)(Z[db], [{
                            axis: cb
                        },
                        X[db],
                        bb[U]
                    ]);
                });
            }), Object.keys(Z).forEach(U => {
                const $ = Z[U];
                (0, e.ab)($, [
                    e.d.scales[$.type],
                    e.d.scale
                ]);
            }), Z;
        }(S, T);
    }

    function R(S) {
        return (S = S || {}).datasets = S.datasets || [], S.labels = S.labels || [], S;
    }
    const R = new Map(),
        S = new Set();

    function T(U, V) {
        let W = R.get(U);
        return W || (W = V(), R.set(U, W), S.add(W)), W;
    }
    const T = (_V, b, a) => {
        const U = (0, e.f)(b, a);
        void 0 !== U && _V.add(U);
    };
    class U {
        get platform() {
            return this._config.platform;
        }
        get type() {
            return this._config.type;
        }
        set type(_V) {
            this._config.type = _V;
        }
        get data() {
            return this._config.data;
        }
        set data(V) {
            this._config.data = _P(V);
        }
        get options() {
            return this._config.options;
        }
        set options(V) {
            this._config.options = V;
        }
        get plugins() {
            return this._config.plugins;
        }
        update() {
            const V = this._config;
            this.clearCache(), _P(V);
        }
        clearCache() {
            this._scopeCache.clear(), this._resolverCache.clear();
        }
        datasetScopeKeys(V) {
            return _P(V, () => [
                [
                    `datasets.${ V }`,
                    ''
                ]
            ]);
        }
        datasetAnimationScopeKeys(V, W) {
            return _P(`${ V }.transition.${ W }`, () => [
                [
                    `datasets.${ V }.transitions.${ W }`,
                    `transitions.${ W }`
                ],
                [
                    `datasets.${ V }`,
                    ''
                ]
            ]);
        }
        datasetElementScopeKeys(V, W) {
            return _P(`${ V }-${ W }`, () => [
                [
                    `datasets.${ V }.elements.${ W }`,
                    `datasets.${ V }`,
                    `elements.${ W }`,
                    ''
                ]
            ]);
        }
        pluginScopeKeys(V) {
            const W = V.id;
            return _P(`${ this.type }-plugin-${ W }`, () => [
                [
                    `plugins.${ W }`,
                    ...V.additionalOptionScopes || []
                ]
            ]);
        }
        _cachedScopes(V, W) {
            const X = this._scopeCache;
            let Y = X.get(V);
            return Y && !W || (Y = new Map(), X.set(V, Y)), Y;
        }
        getOptionScopes(V, W, X) {
            const {
                options: Y,
                type: Z
            } = this, $ = this._cachedScopes(V, X), ab = $.get(W);
            if (ab)
                return ab;
            const bb = new Set();
            W.forEach(W => {
                V && (bb.add(V), W.forEach(W => T(bb, V, W))), W.forEach(V => T(bb, Y, V)), W.forEach(V => T(bb, e.a3[Z] || {}, V)), W.forEach(V => T(bb, e.d, V)), W.forEach(V => T(bb, e.a6, V));
            });
            const cb = Array.from(bb);
            return 0 === cb.length && cb.push(Object.create(null)), S.has(W) && $.set(W, cb), cb;
        }
        chartOptionScopes() {
            const {
                options: V,
                type: W
            } = this;
            return [
                V,
                e.a3[W] || {},
                e.d.datasets[W] || {},
                {
                    type: W
                },
                e.d,
                e.a6
            ];
        }
        resolveNamedOptions(V, W, X, Y = ['']) {
            const Z = {
                    $shared: !0
                },
                {
                    resolver: $,
                    subPrefixes: ab
                } = _V(this._resolverCache, V, Y);
            let bb = $;
            if (function(cb, db) {
                    const {
                        isScriptable: eb,
                        isIndexable: fb
                    } = (0, e.aa)(cb);
                    for (const gb of db) {
                        const hb = eb(gb),
                            ib = fb(gb),
                            jb = (ib || hb) && cb[gb];
                        if (hb && ((0, e.a7)(jb) || _V(jb)) || ib && (0, e.b)(jb))
                            return !0;
                    }
                    return !1;
                }($, W)) {
                Z.$shared = !1, X = (0, e.a7)(X) ? X() : X;
                const cb = this.createResolver(V, X, ab);
                bb = (0, e.a8)($, X, cb);
            }
            for (const cb of W)
                Z[cb] = bb[cb];
            return Z;
        }
        createResolver(V, W, X = [''], Y) {
            const {
                resolver: Z
            } = _V(this._resolverCache, V, X);
            return (0, e.i)(W) ? (0, e.a8)(Z, W, void 0, Y) : Z;
        }
        constructor(V) {
            this._config = function(W) {
                return (W = W || {}).data = _P(W.data), _P(W), W;
            }(V), this._scopeCache = new Map(), this._resolverCache = new Map();
        }
    }

    function _V(W, X, Y) {
        let Z = W.get(X);
        Z || (Z = new Map(), W.set(X, Z));
        const $ = Y.join();
        let ab = Z.get($);
        if (!ab) {
            ab = {
                resolver: (0, e.a9)(X, Y),
                subPrefixes: Y.filter(W => !W.toLowerCase().includes('hover'))
            }, Z.set($, ab);
        }
        return ab;
    }
    const _V = _Y => (0, e.i)(_Y) && Object.getOwnPropertyNames(_Y).reduce((b, a) => b || (0, e.a7)(_Y[a]), !1);
    const W = [
        'top',
        'bottom',
        'left',
        'right',
        'chartArea'
    ];

    function X(_Y, Z) {
        return 'top' === _Y || 'bottom' === _Y || -1 === W.indexOf(_Y) && 'x' === Z;
    }

    function X(Y, Z) {
        return function($, ab) {
            return $[Y] === ab[Y] ? $[Z] - ab[Z] : $[Y] - ab[Y];
        };
    }

    function X(Y) {
        const Z = Y.chart,
            $ = Z.options.animation;
        Z.notifyPlugins('afterRender'), (0, e.Q)($ && $.onComplete, [Y], Z);
    }

    function X(Y) {
        const Z = Y.chart,
            $ = Z.options.animation;
        (0, e.Q)($ && $.onProgress, [Y], Z);
    }

    function X(Y) {
        return (0, e.M)() && 'string' == typeof Y ? Y = document.getElementById(Y) : Y && Y.length && (Y = Y[0]), Y && Y.canvas && (Y = Y.canvas), Y;
    }
    const X = {},
        Y = _$ => {
            const Z = _R(_$);
            return Object.values(X).filter(_$ => _$.canvas === Z).pop();
        };

    function Z(_$, ab, bb) {
        const cb = Object.keys(_$);
        for (const db of cb) {
            const eb = +db;
            if (eb >= ab) {
                const fb = _$[db];
                delete _$[db], (bb > 0 || eb > ab) && (_$[eb + bb] = fb);
            }
        }
    }
    class _Z {
        static register(..._$) {
            P.add(..._$), _$();
        }
        static unregister(..._$) {
            P.remove(..._$), _$();
        }
        get aspectRatio() {
            const {
                options: {
                    aspectRatio: _$,
                    maintainAspectRatio: ab
                },
                width: bb,
                height: cb,
                _aspectRatio: db
            } = this;
            return (0, e.k)(_$) ? ab && db ? db : cb ? bb / cb : null : _$;
        }
        get data() {
            return this.config.data;
        }
        set data($) {
            this.config.data = $;
        }
        get options() {
            return this._options;
        }
        set options($) {
            this.config.options = $;
        }
        get registry() {
            return P;
        }
        _initialize() {
            return this.notifyPlugins('beforeInit'), this.options.responsive ? this.resize() : (0, e.ae)(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins('afterInit'), this;
        }
        clear() {
            return (0, e.af)(this.canvas, this.ctx), this;
        }
        stop() {
            return g.stop(this), this;
        }
        resize($, ab) {
            g.running(this) ? this._resizeBeforeDraw = {
                width: $,
                height: ab
            } : this._resize($, ab);
        }
        _resize($, ab) {
            const bb = this.options,
                cb = this.canvas,
                db = bb.maintainAspectRatio && this.aspectRatio,
                eb = this.platform.getMaximumSize(cb, $, ab, db),
                fb = bb.devicePixelRatio || this.platform.getDevicePixelRatio(),
                gb = this.width ? 'resize' : 'attach';
            this.width = eb.width, this.height = eb.height, this._aspectRatio = this.aspectRatio, (0, e.ae)(this, fb, !0) && (this.notifyPlugins('resize', {
                size: eb
            }), (0, e.Q)(bb.onResize, [
                this,
                eb
            ], this), this.attached && this._doResize(gb) && this.render());
        }
        ensureScalesHaveIDs() {
            const $ = this.options.scales || {};
            (0, e.F)($, ($, b) => {
                $.id = b;
            });
        }
        buildOrUpdateScales() {
            const $ = this.options,
                ab = $.scales,
                bb = this.scales,
                cb = Object.keys(bb).reduce(($, ab) => ($[ab] = !1, $), {});
            let db = [];
            ab && (db = db.concat(Object.keys(ab).map($ => {
                const eb = ab[$],
                    fb = _P($, eb),
                    gb = 'r' === fb,
                    hb = 'x' === fb;
                return {
                    options: eb,
                    dposition: gb ? 'chartArea' : hb ? 'bottom' : 'left',
                    dtype: gb ? 'radialLinear' : hb ? 'category' : 'linear'
                };
            }))), (0, e.F)(db, ab => {
                const eb = ab.options,
                    fb = eb.id,
                    gb = _P(fb, eb),
                    hb = (0, e.v)(eb.type, ab.dtype);
                void 0 !== eb.position && _P(eb.position, gb) === _P(ab.dposition) || (eb.position = ab.dposition), cb[fb] = !0;
                let ib = null;
                if (fb in bb && bb[fb].type === hb)
                    ib = bb[fb];
                else {
                    ib = new(P.getScale(hb))({
                        id: fb,
                        type: hb,
                        ctx: this.ctx,
                        chart: this
                    }), bb[ib.id] = ib;
                }
                ib.init(eb, $);
            }), (0, e.F)(cb, ($, ab) => {
                $ || delete bb[ab];
            }), (0, e.F)(bb, $ => {
                A.configure(this, $, $.options), A.addBox(this, $);
            });
        }
        _updateMetasets() {
            const $ = this._metasets,
                ab = this.data.datasets.length,
                bb = $.length;
            if ($.sort(($, ab) => $.index - ab.index), bb > ab) {
                for (let cb = ab; cb < bb; ++cb)
                    this._destroyDatasetMeta(cb);
                cb.splice(ab, bb - ab);
            }
            this._sortedMetasets = $.slice(0).sort(_Q('order', 'index'));
        }
        _removeUnreferencedMetasets() {
            const {
                _metasets: $,
                data: {
                    datasets: ab
                }
            } = this;
            $.length > ab.length && delete this._stacks, $.forEach(($, a) => {
                0 === ab.filter(ab => ab === $._dataset).length && this._destroyDatasetMeta(a);
            });
        }
        buildOrUpdateControllers() {
            const $ = [],
                ab = this.data.datasets;
            let bb, cb;
            for (this._removeUnreferencedMetasets(), bb = 0, cb = ab.length; bb < cb; bb++) {
                const db = ab[bb];
                let eb = this.getDatasetMeta(bb);
                const fb = db.type || this.config.type;
                if (eb.type && eb.type !== fb && (this._destroyDatasetMeta(bb), eb = this.getDatasetMeta(bb)), eb.type = fb, eb.indexAxis = db.indexAxis || _P(fb, this.options), eb.order = db.order || 0, eb.index = bb, eb.label = '' + db.label, eb.visible = this.isDatasetVisible(bb), eb.controller)
                    eb.controller.updateIndex(bb), eb.controller.linkScales();
                else {
                    const gb = P.getController(fb),
                        {
                            datasetElementType: hb,
                            dataElementType: ib
                        } = e.d.datasets[fb];
                    Object.assign(gb, {
                        dataElementType: P.getElement(ib),
                        datasetElementType: hb && P.getElement(hb)
                    }), eb.controller = new gb(this, bb), $.push(eb.controller);
                }
            }
            return this._updateMetasets(), $;
        }
        _resetElements() {
            (0, e.F)(this.data.datasets, (_$, b) => {
                this.getDatasetMeta(b).controller.reset();
            }, this);
        }
        reset() {
            this._resetElements(), this.notifyPlugins('reset');
        }
        update(_$) {
            const ab = this.config;
            ab.update();
            const bb = this._options = ab.createResolver(ab.chartOptionScopes(), this.getContext()),
                cb = this._animationsDisabled = !bb.animation;
            if (this._updateScales(), this._checkEventBindings(), this._updateHiddenIndices(), this._plugins.invalidate(), !1 === this.notifyPlugins('beforeUpdate', {
                    mode: _$,
                    cancelable: !0
                }))
                return;
            const db = this.buildOrUpdateControllers();
            this.notifyPlugins('beforeElementsUpdate');
            let eb = 0;
            for (let fb = 0, gb = this.data.datasets.length; fb < gb; fb++) {
                const {
                    controller: hb
                } = this.getDatasetMeta(fb), ib = !cb && -1 === db.indexOf(hb);
                hb.buildOrUpdateElements(ib), eb = Math.max(+hb.getMaxOverflow(), eb);
            }
            eb = this._minPadding = bb.layout.autoPadding ? eb : 0, this._updateLayout(eb), cb || (0, e.F)(db, fb => {
                fb.reset();
            }), this._updateDatasets(fb), this.notifyPlugins('afterUpdate', {
                mode: fb
            }), this._layers.sort(_Q('z', '_idx'));
            const {
                _active: hb,
                _lastEvent: ib
            } = this;
            ib ? this._eventHandler(ib, !0) : hb.length && this._updateHoverStyles(hb, hb, !0), this.render();
        }
        _updateScales() {
            (0, e.F)(this.scales, _$ => {
                A.removeBox(this, _$);
            }), this.ensureScalesHaveIDs(), this.buildOrUpdateScales();
        }
        _checkEventBindings() {
            const _$ = this.options,
                ab = new Set(Object.keys(this._listeners)),
                bb = new Set(_$.events);
            (0, e.ag)(ab, bb) && !!this._responsiveListeners === _$.responsive || (this.unbindEvents(), this.bindEvents());
        }
        _updateHiddenIndices() {
            const {
                _hiddenIndices: $
            } = this, ab = this._getUniformDataChanges() || [];
            for (const {
                    method: bb,
                    start: cb,
                    count: db
                }
                of ab) {
                _R($, cb, '_removeElements' === bb ? -db : db);
            }
        }
        _getUniformDataChanges() {
            const $ = this._dataChanges;
            if (!$ || !$.length)
                return;
            this._dataChanges = [];
            const ab = this.data.datasets.length,
                bb = ab => new Set($.filter($ => $[0] === ab).map(($, ab) => ab + ',' + $.splice(1).join(','))),
                cb = bb(0);
            for (let db = 1; db < ab; db++)
                if (!(0, e.ag)(cb, bb(db)))
                    return;
            return Array.from(cb).map(db => db.split(',')).map(db => ({
                method: db[1],
                start: +db[2],
                count: +db[3]
            }));
        }
        _updateLayout($) {
            if (!1 === this.notifyPlugins('beforeLayout', {
                    cancelable: !0
                }))
                return;
            A.update(this, this.width, this.height, $);
            const ab = this.chartArea,
                bb = ab.width <= 0 || ab.height <= 0;
            this._layers = [], (0, e.F)(this.boxes, $ => {
                bb && 'chartArea' === $.position || ($.configure && $.configure(), this._layers.push(...$._layers()));
            }, this), this._layers.forEach(($, ab) => {
                $._idx = ab;
            }), this.notifyPlugins('afterLayout');
        }
        _updateDatasets($) {
            if (!1 !== this.notifyPlugins('beforeDatasetsUpdate', {
                    mode: $,
                    cancelable: !0
                })) {
                for (let ab = 0, bb = this.data.datasets.length; ab < bb; ++ab)
                    this.getDatasetMeta(ab).controller.configure();
                for (let cb = 0, db = this.data.datasets.length; cb < db; ++cb)
                    this._updateDataset(cb, (0, e.a7)(ab) ? ab({
                        datasetIndex: cb
                    }) : ab);
                this.notifyPlugins('afterDatasetsUpdate', {
                    mode: ab
                });
            }
        }
        _updateDataset($, ab) {
            const bb = this.getDatasetMeta($),
                cb = {
                    meta: bb,
                    index: $,
                    mode: ab,
                    cancelable: !0
                };
            !1 !== this.notifyPlugins('beforeDatasetUpdate', cb) && (bb.controller._update(ab), cb.cancelable = !1, this.notifyPlugins('afterDatasetUpdate', cb));
        }
        render() {
            !1 !== this.notifyPlugins('beforeRender', {
                cancelable: !0
            }) && (g.has(this) ? this.attached && !g.running(this) && g.start(this) : (this.draw(), _R({
                chart: this
            })));
        }
        draw() {
            let $;
            if (this._resizeBeforeDraw) {
                const {
                    width: ab,
                    height: bb
                } = this._resizeBeforeDraw;
                this._resize(ab, bb), this._resizeBeforeDraw = null;
            }
            if (this.clear(), this.width <= 0 || this.height <= 0)
                return;
            if (!1 === this.notifyPlugins('beforeDraw', {
                    cancelable: !0
                }))
                return;
            const ab = this._layers;
            for ($ = 0; $ < ab.length && ab[$].z <= 0; ++$)
                ab[$].draw(this.chartArea);
            for (this._drawDatasets(); $ < ab.length; ++$)
                ab[$].draw(this.chartArea);
            this.notifyPlugins('afterDraw');
        }
        _getSortedDatasetMetas($) {
            const ab = this._sortedMetasets,
                bb = [];
            let cb, db;
            for (cb = 0, db = ab.length; cb < db; ++cb) {
                const eb = ab[cb];
                $ && !eb.visible || bb.push(eb);
            }
            return bb;
        }
        getSortedVisibleDatasetMetas() {
            return this._getSortedDatasetMetas(!0);
        }
        _drawDatasets() {
            if (!1 === this.notifyPlugins('beforeDatasetsDraw', {
                    cancelable: !0
                }))
                return;
            const $ = this.getSortedVisibleDatasetMetas();
            for (let ab = $.length - 1; ab >= 0; --ab)
                this._drawDataset($[ab]);
            this.notifyPlugins('afterDatasetsDraw');
        }
        _drawDataset($) {
            const ab = this.ctx,
                bb = $._clip,
                cb = !bb.disabled,
                db = function(eb) {
                    const {
                        xScale: fb,
                        yScale: gb
                    } = eb;
                    if (fb && gb)
                        return {
                            left: fb.left,
                            right: fb.right,
                            top: gb.top,
                            bottom: gb.bottom
                        };
                }($) || this.chartArea,
                eb = {
                    meta: $,
                    index: $.index,
                    cancelable: !0
                };
            !1 !== this.notifyPlugins('beforeDatasetDraw', eb) && (cb && (0, e.Y)(ab, {
                left: !1 === bb.left ? 0 : db.left - bb.left,
                right: !1 === bb.right ? this.width : db.right + bb.right,
                top: !1 === bb.top ? 0 : db.top - bb.top,
                bottom: !1 === bb.bottom ? this.height : db.bottom + bb.bottom
            }), $.controller.draw(), cb && (0, e.$)(ab), eb.cancelable = !1, this.notifyPlugins('afterDatasetDraw', eb));
        }
        isPointInArea($) {
            return (0, e.C)($, this.chartArea, this._minPadding);
        }
        getElementsAtEventForMode($, ab, bb, cb) {
            const db = y.modes[ab];
            return 'function' == typeof db ? db(this, $, bb, cb) : [];
        }
        getDatasetMeta($) {
            const ab = this.data.datasets[$],
                bb = this._metasets;
            let cb = bb.filter($ => $ && $._dataset === ab).pop();
            return cb || (cb = {
                type: null,
                data: [],
                dataset: null,
                controller: null,
                hidden: null,
                xAxisID: null,
                yAxisID: null,
                order: ab && ab.order || 0,
                index: $,
                _dataset: ab,
                _parsed: [],
                _sorted: !1
            }, bb.push(cb)), cb;
        }
        getContext() {
            return this.$context || (this.$context = (0, e.j)(null, {
                chart: this,
                type: 'chart'
            }));
        }
        getVisibleDatasetCount() {
            return this.getSortedVisibleDatasetMetas().length;
        }
        isDatasetVisible($) {
            const ab = this.data.datasets[$];
            if (!ab)
                return !1;
            const bb = this.getDatasetMeta($);
            return 'boolean' == typeof bb.hidden ? !bb.hidden : !ab.hidden;
        }
        setDatasetVisibility($, ab) {
            this.getDatasetMeta($).hidden = !ab;
        }
        toggleDataVisibility($) {
            this._hiddenIndices[$] = !this._hiddenIndices[$];
        }
        getDataVisibility($) {
            return !this._hiddenIndices[$];
        }
        _updateVisibility($, ab, bb) {
            const cb = bb ? 'show' : 'hide',
                db = this.getDatasetMeta($),
                eb = db.controller._resolveAnimations(void 0, cb);
            (0, e.h)(ab) ? (db.data[ab].hidden = !bb, this.update()) : (this.setDatasetVisibility($, bb), eb.update(db, {
                visible: bb
            }), this.update(ab => ab.datasetIndex === $ ? cb : void 0));
        }
        hide($, ab) {
            this._updateVisibility($, ab, !1);
        }
        show($, ab) {
            this._updateVisibility($, ab, !0);
        }
        _destroyDatasetMeta($) {
            const ab = this._metasets[$];
            ab && ab.controller && ab.controller._destroy(), delete this._metasets[$];
        }
        _stop() {
            let $, ab;
            for (this.stop(), g.remove(this), $ = 0, ab = this.data.datasets.length; $ < ab; ++$)
                this._destroyDatasetMeta($);
        }
        destroy() {
            this.notifyPlugins('beforeDestroy');
            const {
                canvas: $,
                ctx: ab
            } = this;
            this._stop(), this.config.clearCache(), $ && (this.unbindEvents(), (0, e.af)($, ab), this.platform.releaseContext(ab), this.canvas = null, this.ctx = null), delete X[this.id], this.notifyPlugins('afterDestroy');
        }
        toBase64Image(..._$) {
            return this.canvas.toDataURL(..._$);
        }
        bindEvents() {
            this.bindUserEvents(), this.options.responsive ? this.bindResponsiveEvents() : this.attached = !0;
        }
        bindUserEvents() {
            const _$ = this._listeners,
                ab = this.platform,
                bb = (bb, c) => {
                    ab.addEventListener(this, bb, c), _$[bb] = c;
                },
                cb = (_$, ab, bb) => {
                    _$.offsetX = ab, _$.offsetY = bb, this._eventHandler(_$);
                };
            (0, e.F)(this.options.events, _$ => bb(_$, cb));
        }
        bindResponsiveEvents() {
            this._responsiveListeners || (this._responsiveListeners = {});
            const $ = this._responsiveListeners,
                ab = this.platform,
                bb = (bb, c) => {
                    ab.addEventListener(this, bb, c), $[bb] = c;
                },
                cb = (bb, cb) => {
                    $[bb] && (ab.removeEventListener(this, bb, cb), delete $[bb]);
                },
                db = ($, ab) => {
                    this.canvas && this.resize($, ab);
                };
            let eb;
            const fb = () => {
                cb('attach', fb), this.attached = !0, this.resize(), bb('resize', db), bb('detach', eb);
            };
            eb = () => {
                this.attached = !1, cb('resize', db), this._stop(), this._resize(0, 0), bb('attach', fb);
            }, ab.isAttached(this.canvas) ? fb() : eb();
        }
        unbindEvents() {
            (0, e.F)(this._listeners, (_$, b) => {
                this.platform.removeEventListener(this, b, _$);
            }), this._listeners = {}, (0, e.F)(this._responsiveListeners, (_$, b) => {
                this.platform.removeEventListener(this, b, _$);
            }), this._responsiveListeners = void 0;
        }
        updateHoverStyle(_$, ab, bb) {
            const cb = bb ? 'set' : 'remove';
            let db, eb, fb, gb;
            for ('dataset' === ab && (db = this.getDatasetMeta(_$[0].datasetIndex), db.controller['_' + cb + 'DatasetHoverStyle']()), fb = 0, gb = _$.length; fb < gb; ++fb) {
                eb = _$[fb];
                const hb = eb && this.getDatasetMeta(eb.datasetIndex).controller;
                hb && hb[cb + 'HoverStyle'](eb.element, eb.datasetIndex, eb.index);
            }
        }
        getActiveElements() {
            return this._active || [];
        }
        setActiveElements($) {
            const ab = this._active || [],
                bb = $.map(({
                    datasetIndex: cb,
                    index: db
                }) => {
                    const eb = this.getDatasetMeta(cb);
                    if (!eb)
                        throw new Error('No dataset found at index ' + cb);
                    return {
                        datasetIndex: cb,
                        element: eb.data[db],
                        index: db
                    };
                });
            !(0, e.ah)(bb, db) && (this._active = bb, this._lastEvent = null, this._updateHoverStyles(bb, db));
        }
        notifyPlugins($, ab, bb) {
            return this._plugins.notify(this, $, ab, bb);
        }
        isPluginEnabled($) {
            return 1 === this._plugins._cache.filter(b => b.plugin.id === $).length;
        }
        _updateHoverStyles($, ab, bb) {
            const cb = this.options.hover,
                db = ($, ab) => $.filter($ => !ab.some(ab => $.datasetIndex === ab.datasetIndex && $.index === ab.index)),
                eb = db(ab, $),
                fb = bb ? $ : db($, ab);
            eb.length && this.updateHoverStyle(eb, cb.mode, !1), fb.length && cb.mode && this.updateHoverStyle(fb, cb.mode, !0);
        }
        _eventHandler($, ab) {
            const bb = {
                    event: $,
                    replay: ab,
                    cancelable: !0,
                    inChartArea: this.isPointInArea($)
                },
                cb = ab => (ab.options.events || this.options.events).includes($.native.type);
            if (!1 === this.notifyPlugins('beforeEvent', bb, cb))
                return;
            const db = this._handleEvent($, ab, bb.inChartArea);
            return bb.cancelable = !1, this.notifyPlugins('afterEvent', bb, cb), (db || bb.changed) && this.render(), this;
        }
        _handleEvent($, ab, bb) {
            const {
                _active: cb = [],
                options: db
            } = this, eb = ab, fb = this._getActiveElements($, cb, bb, eb), gb = (0, e.ai)($), hb = function(ib, jb, kb, lb) {
                return kb && 'mouseout' !== ib.type ? lb ? jb : ib : null;
            }($, this._lastEvent, bb, gb);
            bb && (this._lastEvent = null, (0, e.Q)(db.onHover, [
                $,
                fb,
                this
            ], this), gb && (0, e.Q)(db.onClick, [
                $,
                fb,
                this
            ], this));
            const ib = !(0, e.ah)(fb, cb);
            return (ib || ab) && (this._active = fb, this._updateHoverStyles(fb, cb, ab)), this._lastEvent = hb, ib;
        }
        _getActiveElements($, ab, bb, cb) {
            if ('mouseout' === $.type)
                return [];
            if (!bb)
                return ab;
            const db = this.options.hover;
            return this.getElementsAtEventForMode($, db.mode, db, cb);
        }
        constructor($, ab) {
            const bb = this.config = new U(ab),
                cb = _R($),
                db = Y(cb);
            if (db)
                throw new Error('Canvas is already in use. Chart with ID \'' + db.id + '\' must be destroyed before the canvas with ID \'' + db.canvas.id + '\' can be reused.');
            const eb = bb.createResolver(bb.chartOptionScopes(), this.getContext());
            this.platform = new(bb.platform || (function(fb) {
                return !(0, e.M)() || 'undefined' != typeof OffscreenCanvas && fb instanceof OffscreenCanvas ? C : J;
            }(cb)))(), this.platform.updateConfig(bb);
            const fb = this.platform.acquireContext(cb, eb.aspectRatio),
                gb = fb && fb.canvas,
                hb = gb && gb.height,
                ib = gb && gb.width;
            this.id = (0, e.ac)(), this.ctx = fb, this.canvas = gb, this.width = ib, this.height = hb, this._options = eb, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new Q(), this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = (0, e.ad)($ => this.update($), eb.resizeDelay || 0), this._dataChanges = [], X[this.id] = this, fb && gb ? (g.listen(this, 'complete', _R), g.listen(this, 'progress', _R), this._initialize(), this.attached && this.update()) : console.error('Failed to create chart: can\'t acquire context from the given item');
        }
    }

    function _$() {
        return (0, e.F)(_Z.instances, _ab => _ab._plugins.invalidate());
    }

    function $(_ab, bb, cb, db) {
        const eb = (f = _ab.options.borderRadius, (0, e.ak)(f, [
            'outerStart',
            'outerEnd',
            'innerStart',
            'innerEnd'
        ]));
        var fb;
        const gb = (cb - bb) / 2,
            hb = Math.min(gb, db * bb / 2),
            ib = _ab => {
                const jb = (cb - Math.min(gb, _ab)) * db / 2;
                return (0, e.S)(_ab, 0, Math.min(gb, jb));
            };
        return {
            outerStart: ib(eb.outerStart),
            outerEnd: ib(eb.outerEnd),
            innerStart: (0, e.S)(eb.innerStart, 0, hb),
            innerEnd: (0, e.S)(eb.innerEnd, 0, hb)
        };
    }

    function $(ab, bb, cb, db) {
        return {
            x: cb + ab * Math.cos(bb),
            y: db + ab * Math.sin(bb)
        };
    }

    function $(ab, bb, cb, db, eb, fb) {
        const {
            x: gb,
            y: hb,
            startAngle: ib,
            pixelMargin: jb,
            innerRadius: kb
        } = bb, lb = Math.max(bb.outerRadius + db + cb - jb, 0), mb = kb > 0 ? kb + db + cb + jb : 0;
        let nb = 0;
        const ob = eb - ib;
        if (db) {
            const pb = ((kb > 0 ? kb - db : 0) + (lb > 0 ? lb - db : 0)) / 2;
            nb = (ob - (0 !== pb ? ob * pb / (pb + db) : ob)) / 2;
        }
        const pb = (ob - Math.max(0.001, ob * lb - cb / e.P) / lb) / 2,
            qb = ib + pb + nb,
            rb = eb - pb - nb,
            {
                outerStart: sb,
                outerEnd: tb,
                innerStart: ub,
                innerEnd: vb
            } = _R(bb, mb, lb, rb - qb),
            wb = lb - sb,
            xb = lb - tb,
            yb = qb + sb / wb,
            zb = rb - tb / xb,
            Ab = mb + ub,
            Bb = mb + vb,
            Cb = qb + ub / Ab,
            Db = rb - vb / Bb;
        if (ab.beginPath(), fb) {
            const Eb = (yb + zb) / 2;
            if (ab.arc(gb, hb, lb, yb, Eb), ab.arc(gb, hb, lb, Eb, zb), tb > 0) {
                const Fb = _R(xb, zb, gb, hb);
                ab.arc(Fb.x, Fb.y, tb, zb, rb + e.H);
            }
            const Fb = _R(Bb, rb, gb, hb);
            if (ab.lineTo(Fb.x, Fb.y), vb > 0) {
                const Gb = _R(Bb, Db, gb, hb);
                ab.arc(Gb.x, Gb.y, vb, rb + e.H, Db + Math.PI);
            }
            const Gb = (rb - vb / mb + (qb + ub / mb)) / 2;
            if (ab.arc(gb, hb, mb, rb - vb / mb, Gb, !0), ab.arc(gb, hb, mb, Gb, qb + ub / mb, !0), ub > 0) {
                const Hb = _R(Ab, Cb, gb, hb);
                ab.arc(Hb.x, Hb.y, ub, Cb + Math.PI, qb - e.H);
            }
            const Hb = _R(wb, qb, gb, hb);
            if (ab.lineTo(Hb.x, Hb.y), sb > 0) {
                const Ib = _R(wb, yb, gb, hb);
                ab.arc(Ib.x, Ib.y, sb, qb - e.H, yb);
            }
        } else {
            ab.moveTo(gb, hb);
            const Eb = Math.cos(yb) * lb + gb,
                Fb = Math.sin(yb) * lb + hb;
            ab.lineTo(Eb, Fb);
            const Gb = Math.cos(zb) * lb + gb,
                Hb = Math.sin(zb) * lb + hb;
            ab.lineTo(Gb, Hb);
        }
        ab.closePath();
    }

    function $(ab, bb, cb, db, eb) {
        const {
            fullCircles: fb,
            startAngle: gb,
            circumference: hb,
            options: ib
        } = bb, {
            borderWidth: jb,
            borderJoinStyle: kb
        } = ib, lb = 'inner' === ib.borderAlign;
        if (!jb)
            return;
        lb ? (ab.lineWidth = 2 * jb, ab.lineJoin = kb || 'round') : (ab.lineWidth = jb, ab.lineJoin = kb || 'bevel');
        let mb = bb.endAngle;
        if (fb) {
            _R(ab, bb, cb, db, mb, eb);
            for (let nb = 0; nb < fb; ++nb)
                ab.stroke();
            isNaN(hb) || (mb = gb + (hb % e.T || e.T));
        }
        lb && function(nb, ob, pb) {
            const {
                startAngle: qb,
                pixelMargin: rb,
                x: sb,
                y: tb,
                outerRadius: ub,
                innerRadius: vb
            } = ob;
            let wb = rb / ub;
            nb.beginPath(), nb.arc(sb, tb, ub, qb - wb, pb + wb), vb > rb ? (wb = rb / vb, nb.arc(sb, tb, vb, pb + wb, qb - wb, !0)) : nb.arc(sb, tb, rb, pb + e.H, qb - e.H), nb.closePath(), nb.clip();
        }(ab, bb, mb), fb || (_R(ab, bb, cb, db, mb, eb), ab.stroke());
    }
    (0, d.default)(_Z, 'defaults', e.d), (0, d.default)(_Z, 'instances', X), (0, d.default)(_Z, 'overrides', e.a3), (0, d.default)(_Z, 'registry', P), (0, d.default)(_Z, 'version', '4.2.0'), (0, d.default)(_Z, 'getChart', Y);
    class $ extends K {
        inRange(ab, bb, cb) {
            const db = this.getProps([
                    'x',
                    'y'
                ], cb),
                {
                    angle: eb,
                    distance: fb
                } = (0, e.D)(db, {
                    x: ab,
                    y: bb
                }),
                {
                    startAngle: gb,
                    endAngle: hb,
                    innerRadius: ib,
                    outerRadius: jb,
                    circumference: kb
                } = this.getProps([
                    'startAngle',
                    'endAngle',
                    'innerRadius',
                    'outerRadius',
                    'circumference'
                ], cb),
                lb = this.options.spacing / 2,
                mb = (0, e.v)(kb, hb - gb) >= e.T || (0, e.p)(eb, gb, hb),
                nb = (0, e.aj)(fb, ib + lb, jb + lb);
            return mb && nb;
        }
        getCenterPoint(ab) {
            const {
                x: bb,
                y: cb,
                startAngle: db,
                endAngle: eb,
                innerRadius: fb,
                outerRadius: gb
            } = this.getProps([
                'x',
                'y',
                'startAngle',
                'endAngle',
                'innerRadius',
                'outerRadius',
                'circumference'
            ], ab), {
                offset: hb,
                spacing: ib
            } = this.options, jb = (db + eb) / 2, kb = (fb + gb + ib + hb) / 2;
            return {
                x: bb + Math.cos(jb) * kb,
                y: cb + Math.sin(jb) * kb
            };
        }
        tooltipPosition(ab) {
            return this.getCenterPoint(ab);
        }
        draw(ab) {
            const {
                options: bb,
                circumference: cb
            } = this, db = (bb.offset || 0) / 4, eb = (bb.spacing || 0) / 2, fb = bb.circular;
            if (this.pixelMargin = 'inner' === bb.borderAlign ? 0.33 : 0, this.fullCircles = cb > e.T ? Math.floor(cb / e.T) : 0, 0 === cb || this.innerRadius < 0 || this.outerRadius < 0)
                return;
            ab.save();
            const gb = (this.startAngle + this.endAngle) / 2;
            ab.translate(Math.cos(gb) * db, Math.sin(gb) * db);
            const hb = db * (1 - Math.sin(Math.min(e.P, cb || 0)));
            ab.fillStyle = bb.backgroundColor, ab.strokeStyle = bb.borderColor,
                function(ib, jb, kb, lb, mb) {
                    const {
                        fullCircles: nb,
                        startAngle: ob,
                        circumference: pb
                    } = jb;
                    let qb = jb.endAngle;
                    if (nb) {
                        _R(ib, jb, kb, lb, qb, mb);
                        for (let rb = 0; rb < nb; ++rb)
                            ib.fill();
                        isNaN(pb) || (qb = ob + (pb % e.T || e.T));
                    }
                    _R(ib, jb, kb, lb, qb, mb), ib.fill();
                }(ab, this, hb, eb, fb), _R(ab, this, hb, eb, fb), ab.restore();
        }
        constructor(ab) {
            super(), this.options = void 0, this.circumference = void 0, this.startAngle = void 0, this.endAngle = void 0, this.innerRadius = void 0, this.outerRadius = void 0, this.pixelMargin = 0, this.fullCircles = 0, ab && Object.assign(this, ab);
        }
    }

    function ab(bb, cb, db = eb) {
        bb.lineCap = (0, e.v)(db.borderCapStyle, eb.borderCapStyle), bb.setLineDash((0, e.v)(db.borderDash, eb.borderDash)), bb.lineDashOffset = (0, e.v)(db.borderDashOffset, eb.borderDashOffset), bb.lineJoin = (0, e.v)(db.borderJoinStyle, eb.borderJoinStyle), bb.lineWidth = (0, e.v)(db.borderWidth, eb.borderWidth), bb.strokeStyle = (0, e.v)(db.borderColor, eb.borderColor);
    }

    function ab(bb, cb, db) {
        bb.lineTo(db.x, db.y);
    }

    function ab(bb, cb, db = {}) {
        const eb = bb.length,
            {
                start: fb = 0,
                end: gb = eb - 1
            } = db,
            {
                start: hb,
                end: ib
            } = cb,
            jb = Math.max(fb, hb),
            kb = Math.min(gb, ib),
            lb = fb < hb && gb < hb || fb > ib && gb > ib;
        return {
            count: eb,
            start: jb,
            loop: cb.loop,
            ilen: kb < jb && !lb ? eb + kb - jb : kb - jb
        };
    }

    function ab(bb, cb, db, eb) {
        const {
            points: fb,
            options: gb
        } = cb, {
            count: hb,
            start: ib,
            loop: jb,
            ilen: kb
        } = _T(fb, db, eb), lb = function(mb) {
            return mb.stepped ? e.ar : mb.tension || 'monotone' === mb.cubicInterpolationMode ? e.as : _T;
        }(gb);
        let mb, nb, ob, {
            move: pb = !0,
            reverse: qb
        } = eb || {};
        for (mb = 0; mb <= kb; ++mb)
            nb = fb[(ib + (qb ? kb - mb : mb)) % hb], nb.skip || (pb ? (bb.moveTo(nb.x, nb.y), pb = !1) : lb(bb, ob, nb, qb, gb.stepped), ob = nb);
        return jb && (nb = fb[(ib + (qb ? kb : 0)) % hb], lb(bb, ob, nb, qb, gb.stepped)), !!jb;
    }

    function ab(bb, cb, db, eb) {
        const fb = cb.points,
            {
                count: gb,
                start: hb,
                ilen: ib
            } = _T(fb, db, eb),
            {
                move: jb = !0,
                reverse: kb
            } = eb || {};
        let lb, mb, nb, ob, pb, qb, rb = 0,
            sb = 0;
        const tb = bb => (hb + (kb ? ib - bb : bb)) % gb,
            ub = () => {
                ob !== pb && (bb.lineTo(rb, pb), bb.lineTo(rb, ob), bb.lineTo(rb, qb));
            };
        for (jb && (mb = fb[tb(0)], bb.moveTo(mb.x, mb.y)), lb = 0; lb <= ib; ++lb) {
            if (mb = fb[tb(lb)], mb.skip)
                continue;
            const vb = mb.x,
                wb = mb.y,
                xb = 0 | vb;
            xb === nb ? (wb < ob ? ob = wb : wb > pb && (pb = wb), rb = (sb * rb + vb) / ++sb) : (ub(), bb.lineTo(vb, wb), nb = xb, sb = 0, ob = pb = wb), qb = wb;
        }
        ub();
    }

    function ab(bb) {
        const cb = bb.options,
            db = cb.borderDash && cb.borderDash.length;
        return !(bb._decimated || bb._loop || cb.tension || 'monotone' === cb.cubicInterpolationMode || cb.stepped || db) ? _U : _T;
    }
    (0, d.default)($, 'id', 'arc'), (0, d.default)($, 'defaults', {
        borderAlign: 'center',
        borderColor: '#fff',
        borderJoinStyle: void 0,
        borderRadius: 0,
        borderWidth: 2,
        offset: 0,
        spacing: 0,
        angle: void 0,
        circular: !0
    }), (0, d.default)($, 'defaultRoutes', {
        backgroundColor: 'backgroundColor'
    });
    const ab = 'function' == typeof Path2D;

    function bb(cb, db, eb, fb) {
        ab && !db.options.segment ? function(gb, hb, ib, jb) {
            let kb = hb._path;
            kb || (kb = hb._path = new Path2D(), hb.path(kb, ib, jb) && kb.closePath()), _S(gb, hb.options), gb.stroke(kb);
        }(cb, db, eb, fb) : function(gb, hb, ib, jb) {
            const {
                segments: kb,
                options: lb
            } = hb, mb = _U(hb);
            for (const nb of kb)
                _S(gb, lb, nb.style), gb.beginPath(), mb(gb, hb, nb, {
                    start: ib,
                    end: ib + jb - 1
                }) && gb.closePath(), gb.stroke();
        }(cb, db, eb, fb);
    }
    class _bb extends K {
        updateControlPoints(cb, db) {
            const eb = this.options;
            if ((eb.tension || 'monotone' === eb.cubicInterpolationMode) && !eb.stepped && !this._pointsUpdated) {
                const fb = eb.spanGaps ? this._loop : this._fullLoop;
                (0, e.al)(this._points, eb, cb, fb, db), this._pointsUpdated = !0;
            }
        }
        set points(cb) {
            this._points = cb, delete this._segments, delete this._path, this._pointsUpdated = !1;
        }
        get points() {
            return this._points;
        }
        get segments() {
            return this._segments || (this._segments = (0, e.am)(this, this.options.segment));
        }
        first() {
            const cb = this.segments,
                db = this.points;
            return cb.length && db[cb[0].start];
        }
        last() {
            const cb = this.segments,
                db = this.points,
                eb = cb.length;
            return eb && db[cb[eb - 1].end];
        }
        interpolate(cb, db) {
            const eb = this.options,
                fb = cb[db],
                gb = this.points,
                hb = (0, e.an)(this, {
                    property: db,
                    start: fb,
                    end: fb
                });
            if (!hb.length)
                return;
            const ib = [],
                jb = function(kb) {
                    return kb.stepped ? e.ao : kb.tension || 'monotone' === kb.cubicInterpolationMode ? e.ap : e.aq;
                }(eb);
            let kb, lb;
            for (kb = 0, lb = hb.length; kb < lb; ++kb) {
                const {
                    start: mb,
                    end: nb
                } = hb[kb], ob = gb[mb], pb = gb[nb];
                if (ob === pb) {
                    ib.push(ob);
                    continue;
                }
                const qb = jb(ob, pb, Math.abs((fb - ob[db]) / (pb[db] - ob[db])), eb.stepped);
                qb[db] = cb[db], ib.push(qb);
            }
            return 1 === ib.length ? ib[0] : ib;
        }
        pathSegment(cb, db, eb) {
            return _U(this)(cb, this, db, eb);
        }
        path(cb, db, eb) {
            const fb = this.segments,
                gb = _U(this);
            let hb = this._loop;
            db = db || 0, eb = eb || this.points.length - db;
            for (const ib of fb)
                hb &= gb(cb, this, ib, {
                    start: db,
                    end: db + eb - 1
                });
            return !!hb;
        }
        draw(cb, db, eb, fb) {
            const gb = this.options || {};
            (this.points || []).length && gb.borderWidth && (cb.save(), _U(cb, this, eb, fb), cb.restore()), this.animated && (this._pointsUpdated = !1, this._path = void 0);
        }
        constructor(cb) {
            super(), this.animated = !0, this.options = void 0, this._chart = void 0, this._loop = void 0, this._fullLoop = void 0, this._path = void 0, this._points = void 0, this._segments = void 0, this._decimated = !1, this._pointsUpdated = !1, this._datasetIndex = void 0, cb && Object.assign(this, cb);
        }
    }

    function cb(db, eb, fb, gb) {
        const hb = db.options,
            {
                [ib]: jb
            } = db.getProps([ib], gb);
        return Math.abs(eb - jb) < hb.radius + hb.hitRadius;
    }
    (0, d.default)(_bb, 'id', 'line'), (0, d.default)(_bb, 'defaults', {
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0,
        borderJoinStyle: 'miter',
        borderWidth: 3,
        capBezierPoints: !0,
        cubicInterpolationMode: 'default',
        fill: !1,
        spanGaps: !1,
        stepped: !1,
        tension: 0
    }), (0, d.default)(_bb, 'defaultRoutes', {
        backgroundColor: 'backgroundColor',
        borderColor: 'borderColor'
    }), (0, d.default)(_bb, 'descriptors', {
        _scriptable: !0,
        _indexable: _db => 'borderDash' !== _db && 'fill' !== _db
    });
    class _cb extends K {
        inRange(_db, eb, fb) {
            const gb = this.options,
                {
                    x: hb,
                    y: ib
                } = this.getProps([
                    'x',
                    'y'
                ], fb);
            return Math.pow(_db - hb, 2) + Math.pow(eb - ib, 2) < Math.pow(gb.hitRadius + gb.radius, 2);
        }
        inXRange(db, eb) {
            return _U(this, db, 'x', eb);
        }
        inYRange(db, eb) {
            return _U(this, db, 'y', eb);
        }
        getCenterPoint(db) {
            const {
                x: eb,
                y: fb
            } = this.getProps([
                'x',
                'y'
            ], db);
            return {
                x: eb,
                y: fb
            };
        }
        size(db) {
            let eb = (db = db || this.options || {}).radius || 0;
            eb = Math.max(eb, eb && db.hoverRadius || 0);
            return 2 * (eb + (eb && db.borderWidth || 0));
        }
        draw(db, eb) {
            const fb = this.options;
            this.skip || fb.radius < 0.1 || !(0, e.C)(this, eb, this.size(fb) / 2) || (db.strokeStyle = fb.borderColor, db.lineWidth = fb.borderWidth, db.fillStyle = fb.backgroundColor, (0, e.at)(db, fb, this.x, this.y));
        }
        getRange() {
            const db = this.options || {};
            return db.radius + db.hitRadius;
        }
        constructor(db) {
            super(), this.options = void 0, this.parsed = void 0, this.skip = void 0, this.stop = void 0, db && Object.assign(this, db);
        }
    }

    function db(eb, fb) {
        const {
            x: gb,
            y: hb,
            base: ib,
            width: jb,
            height: kb
        } = eb.getProps([
            'x',
            'y',
            'base',
            'width',
            'height'
        ], fb);
        let lb, mb, nb, ob, pb;
        return eb.horizontal ? (pb = kb / 2, lb = Math.min(gb, ib), mb = Math.max(gb, ib), nb = hb - pb, ob = hb + pb) : (pb = jb / 2, lb = gb - pb, mb = gb + pb, nb = Math.min(hb, ib), ob = Math.max(hb, ib)), {
            left: lb,
            top: nb,
            right: mb,
            bottom: ob
        };
    }

    function db(eb, fb, gb, hb) {
        return eb ? 0 : (0, e.S)(fb, gb, hb);
    }

    function db(eb) {
        const fb = _V(eb),
            gb = fb.right - fb.left,
            hb = fb.bottom - fb.top,
            ib = function(jb, kb, lb) {
                const mb = jb.options.borderWidth,
                    nb = jb.borderSkipped,
                    ob = (0, e.av)(mb);
                return {
                    t: _W(nb.top, ob.top, 0, lb),
                    r: _W(nb.right, ob.right, 0, kb),
                    b: _W(nb.bottom, ob.bottom, 0, lb),
                    l: _W(nb.left, ob.left, 0, kb)
                };
            }(eb, gb / 2, hb / 2),
            jb = function(kb, lb, mb) {
                const {
                    enableBorderRadius: nb
                } = kb.getProps(['enableBorderRadius']), ob = kb.options.borderRadius, pb = (0, e.aw)(ob), qb = Math.min(lb, mb), rb = kb.borderSkipped, sb = nb || (0, e.i)(ob);
                return {
                    topLeft: _W(!sb || rb.top || rb.left, pb.topLeft, 0, qb),
                    topRight: _W(!sb || rb.top || rb.right, pb.topRight, 0, qb),
                    bottomLeft: _W(!sb || rb.bottom || rb.left, pb.bottomLeft, 0, qb),
                    bottomRight: _W(!sb || rb.bottom || rb.right, pb.bottomRight, 0, qb)
                };
            }(eb, gb / 2, hb / 2);
        return {
            outer: {
                x: fb.left,
                y: fb.top,
                w: gb,
                h: hb,
                radius: jb
            },
            inner: {
                x: fb.left + ib.l,
                y: fb.top + ib.t,
                w: gb - ib.l - ib.r,
                h: hb - ib.t - ib.b,
                radius: {
                    topLeft: Math.max(0, jb.topLeft - Math.max(ib.t, ib.l)),
                    topRight: Math.max(0, jb.topRight - Math.max(ib.t, ib.r)),
                    bottomLeft: Math.max(0, jb.bottomLeft - Math.max(ib.b, ib.l)),
                    bottomRight: Math.max(0, jb.bottomRight - Math.max(ib.b, ib.r))
                }
            }
        };
    }

    function db(eb, fb, gb, hb) {
        const ib = null === fb,
            jb = null === gb,
            kb = eb && !(ib && jb) && _V(eb, hb);
        return kb && (ib || (0, e.aj)(fb, kb.left, kb.right)) && (jb || (0, e.aj)(gb, kb.top, kb.bottom));
    }

    function db(eb, fb) {
        eb.rect(fb.x, fb.y, fb.w, fb.h);
    }

    function db(eb, fb, gb = {}) {
        const hb = eb.x !== gb.x ? -fb : 0,
            ib = eb.y !== gb.y ? -fb : 0,
            jb = (eb.x + eb.w !== gb.x + gb.w ? fb : 0) - hb,
            kb = (eb.y + eb.h !== gb.y + gb.h ? fb : 0) - ib;
        return {
            x: eb.x + hb,
            y: eb.y + ib,
            w: eb.w + jb,
            h: eb.h + kb,
            radius: eb.radius
        };
    }
    (0, d.default)(_cb, 'id', 'point'), (0, d.default)(_cb, 'defaults', {
        borderWidth: 1,
        hitRadius: 1,
        hoverBorderWidth: 1,
        hoverRadius: 4,
        pointStyle: 'circle',
        radius: 3,
        rotation: 0
    }), (0, d.default)(_cb, 'defaultRoutes', {
        backgroundColor: 'backgroundColor',
        borderColor: 'borderColor'
    });
    class db extends K {
        draw(eb) {
            const {
                inflateAmount: fb,
                options: {
                    borderColor: gb,
                    backgroundColor: hb
                }
            } = this, {
                inner: ib,
                outer: jb
            } = _X(this), kb = (h = jb.radius).topLeft || h.topRight || h.bottomLeft || h.bottomRight ? e.au : _X;
            var lb;
            eb.save(), jb.w === ib.w && jb.h === ib.h || (eb.beginPath(), kb(eb, _X(jb, fb, ib)), eb.clip(), kb(eb, _X(ib, -fb, jb)), eb.fillStyle = gb, eb.fill('evenodd')), eb.beginPath(), kb(eb, _X(ib, fb)), eb.fillStyle = hb, eb.fill(), eb.restore();
        }
        inRange(eb, fb, gb) {
            return _X(this, eb, fb, gb);
        }
        inXRange(eb, fb) {
            return _X(this, eb, null, fb);
        }
        inYRange(eb, fb) {
            return _X(this, null, eb, fb);
        }
        getCenterPoint(eb) {
            const {
                x: fb,
                y: gb,
                base: hb,
                horizontal: ib
            } = this.getProps([
                'x',
                'y',
                'base',
                'horizontal'
            ], eb);
            return {
                x: ib ? (fb + hb) / 2 : fb,
                y: ib ? gb : (gb + hb) / 2
            };
        }
        getRange(eb) {
            return 'x' === eb ? this.width / 2 : this.height / 2;
        }
        constructor(eb) {
            super(), this.options = void 0, this.horizontal = void 0, this.base = void 0, this.width = void 0, this.height = void 0, this.inflateAmount = void 0, eb && Object.assign(this, eb);
        }
    }
    (0, d.default)(db, 'id', 'bar'), (0, d.default)(db, 'defaults', {
        borderSkipped: 'start',
        borderWidth: 0,
        borderRadius: 0,
        inflateAmount: 'auto',
        pointStyle: void 0
    }), (0, d.default)(db, 'defaultRoutes', {
        backgroundColor: 'backgroundColor',
        borderColor: 'borderColor'
    });
    new WeakMap();
    const eb = {
        average(fb) {
            if (!fb.length)
                return !1;
            let gb, hb, ib = 0,
                jb = 0,
                kb = 0;
            for (gb = 0, hb = fb.length; gb < hb; ++gb) {
                const lb = fb[gb].element;
                if (lb && lb.hasValue()) {
                    const mb = lb.tooltipPosition();
                    ib += mb.x, jb += mb.y, ++kb;
                }
            }
            return {
                x: ib / kb,
                y: jb / kb
            };
        },
        nearest(fb, gb) {
            if (!fb.length)
                return !1;
            let hb, ib, jb, kb = gb.x,
                lb = gb.y,
                mb = Number.POSITIVE_INFINITY;
            for (hb = 0, ib = fb.length; hb < ib; ++hb) {
                const nb = fb[hb].element;
                if (nb && nb.hasValue()) {
                    const ob = nb.getCenterPoint(),
                        pb = (0, e.aE)(gb, ob);
                    pb < mb && (mb = pb, jb = nb);
                }
            }
            if (jb) {
                const nb = jb.tooltipPosition();
                kb = nb.x, lb = nb.y;
            }
            return {
                x: kb,
                y: lb
            };
        }
    };

    function fb(gb, hb) {
        return hb && ((0, e.b)(hb) ? Array.prototype.push.apply(gb, hb) : gb.push(hb)), gb;
    }

    function fb(gb) {
        return ('string' == typeof gb || gb instanceof String) && gb.indexOf('\n') > -1 ? gb.split('\n') : gb;
    }

    function fb(gb, hb) {
        const {
            element: ib,
            datasetIndex: jb,
            index: kb
        } = hb, lb = gb.getDatasetMeta(jb).controller, {
            label: mb,
            value: nb
        } = lb.getLabelAndValue(kb);
        return {
            chart: gb,
            label: mb,
            parsed: lb.getParsed(kb),
            raw: gb.data.datasets[jb].data[kb],
            formattedValue: nb,
            dataset: lb.getDataset(),
            dataIndex: kb,
            datasetIndex: jb,
            element: ib
        };
    }

    function fb(gb, hb) {
        const ib = gb.chart.ctx,
            {
                body: jb,
                footer: kb,
                title: lb
            } = gb,
            {
                boxWidth: mb,
                boxHeight: nb
            } = hb,
            ob = (0, e.a0)(hb.bodyFont),
            pb = (0, e.a0)(hb.titleFont),
            qb = (0, e.a0)(hb.footerFont),
            rb = lb.length,
            sb = kb.length,
            tb = jb.length,
            ub = (0, e.E)(hb.padding);
        let vb = ub.height,
            wb = 0,
            xb = jb.reduce((gb, hb) => gb + hb.before.length + hb.lines.length + hb.after.length, 0);
        if (xb += gb.beforeBody.length + gb.afterBody.length, rb && (vb += rb * pb.lineHeight + (rb - 1) * hb.titleSpacing + hb.titleMarginBottom), xb) {
            vb += tb * (hb.displayColors ? Math.max(nb, ob.lineHeight) : ob.lineHeight) + (xb - tb) * ob.lineHeight + (xb - 1) * hb.bodySpacing;
        }
        sb && (vb += hb.footerMarginTop + sb * qb.lineHeight + (sb - 1) * hb.footerSpacing);
        let yb = 0;
        const zb = function(Ab) {
            wb = Math.max(wb, ib.measureText(Ab).width + yb);
        };
        return ib.save(), ib.font = pb.string, (0, e.F)(gb.title, zb), ib.font = ob.string, (0, e.F)(gb.beforeBody.concat(gb.afterBody), zb), yb = hb.displayColors ? mb + 2 + hb.boxPadding : 0, (0, e.F)(jb, gb => {
            (0, e.F)(gb.before, zb), (0, e.F)(gb.lines, zb), (0, e.F)(gb.after, zb);
        }), yb = 0, ib.font = qb.string, (0, e.F)(gb.footer, zb), ib.restore(), wb += ub.width, {
            width: wb,
            height: vb
        };
    }

    function fb(gb, hb, ib, jb) {
        const {
            x: kb,
            width: lb
        } = ib, {
            width: mb,
            chartArea: {
                left: nb,
                right: ob
            }
        } = gb;
        let pb = 'center';
        return 'center' === jb ? pb = kb <= (nb + ob) / 2 ? 'left' : 'right' : kb <= lb / 2 ? pb = 'left' : kb >= mb - lb / 2 && (pb = 'right'),
            function(qb, rb, sb, tb) {
                const {
                    x: ub,
                    width: vb
                } = tb, wb = sb.caretSize + sb.caretPadding;
                return 'left' === qb && ub + vb + wb > rb.width || 'right' === qb && ub - vb - wb < 0 || void 0;
            }(pb, gb, hb, ib) && (pb = 'center'), pb;
    }

    function fb(gb, hb, ib) {
        const jb = ib.yAlign || hb.yAlign || function(kb, lb) {
            const {
                y: mb,
                height: nb
            } = lb;
            return mb < nb / 2 ? 'top' : mb > kb.height - nb / 2 ? 'bottom' : 'center';
        }(gb, ib);
        return {
            xAlign: ib.xAlign || hb.xAlign || _Z(gb, hb, ib, jb),
            yAlign: jb
        };
    }

    function fb(gb, hb, ib, jb) {
        const {
            caretSize: kb,
            caretPadding: lb,
            cornerRadius: mb
        } = gb, {
            xAlign: nb,
            yAlign: ob
        } = ib, pb = kb + lb, {
            topLeft: qb,
            topRight: rb,
            bottomLeft: sb,
            bottomRight: tb
        } = (0, e.aw)(mb);
        let ub = function(vb, wb) {
            let {
                x: xb,
                width: yb
            } = vb;
            return 'right' === wb ? xb -= yb : 'center' === wb && (xb -= yb / 2), xb;
        }(hb, nb);
        const vb = function(wb, xb, yb) {
            let {
                y: zb,
                height: Ab
            } = wb;
            return 'top' === xb ? zb += yb : zb -= 'bottom' === xb ? Ab + yb : Ab / 2, zb;
        }(hb, ob, pb);
        return 'center' === ob ? 'left' === nb ? ub += pb : 'right' === nb && (ub -= pb) : 'left' === nb ? ub -= Math.max(qb, sb) + kb : 'right' === nb && (ub += Math.max(rb, tb) + kb), {
            x: (0, e.S)(ub, 0, jb.width - hb.width),
            y: (0, e.S)(vb, 0, jb.height - hb.height)
        };
    }

    function fb(gb, hb, ib) {
        const jb = (0, e.E)(ib.padding);
        return 'center' === hb ? gb.x + gb.width / 2 : 'right' === hb ? gb.x + gb.width - jb.right : gb.x + jb.left;
    }

    function fb(gb) {
        return _X([], _X(gb));
    }

    function fb(gb, hb) {
        const ib = hb && hb.dataset && hb.dataset.tooltip && hb.dataset.tooltip.callbacks;
        return ib ? gb.override(ib) : gb;
    }
    const fb = {
        beforeTitle: e.aF,
        title(gb) {
            if (gb.length > 0) {
                const hb = gb[0],
                    ib = hb.chart.data.labels,
                    jb = ib ? ib.length : 0;
                if (this && this.options && 'dataset' === this.options.mode)
                    return hb.dataset.label || '';
                if (hb.label)
                    return hb.label;
                if (jb > 0 && hb.dataIndex < jb)
                    return ib[hb.dataIndex];
            }
            return '';
        },
        afterTitle: e.aF,
        beforeBody: e.aF,
        beforeLabel: e.aF,
        label(gb) {
            if (this && this.options && 'dataset' === this.options.mode)
                return gb.label + ': ' + gb.formattedValue || gb.formattedValue;
            let hb = gb.dataset.label || '';
            hb && (hb += ': ');
            const ib = gb.formattedValue;
            return (0, e.k)(ib) || (hb += ib), hb;
        },
        labelColor(gb) {
            const hb = gb.chart.getDatasetMeta(gb.datasetIndex).controller.getStyle(gb.dataIndex);
            return {
                borderColor: hb.borderColor,
                backgroundColor: hb.backgroundColor,
                borderWidth: hb.borderWidth,
                borderDash: hb.borderDash,
                borderDashOffset: hb.borderDashOffset,
                borderRadius: 0
            };
        },
        labelTextColor() {
            return this.options.bodyColor;
        },
        labelPointStyle(gb) {
            const hb = gb.chart.getDatasetMeta(gb.datasetIndex).controller.getStyle(gb.dataIndex);
            return {
                pointStyle: hb.pointStyle,
                rotation: hb.rotation
            };
        },
        afterLabel: e.aF,
        afterBody: e.aF,
        beforeFooter: e.aF,
        footer: e.aF,
        afterFooter: e.aF
    };

    function gb(hb, ib, jb, kb) {
        const lb = hb[ib].call(jb, kb);
        return void 0 === lb ? fb[ib].call(jb, kb) : lb;
    }
    class gb extends K {
        initialize(hb) {
            this.options = hb, this._cachedAnimations = void 0, this.$context = void 0;
        }
        _resolveAnimations() {
            const hb = this._cachedAnimations;
            if (hb)
                return hb;
            const ib = this.chart,
                jb = this.options.setContext(this.getContext()),
                kb = jb.enabled && ib.options.animation && jb.animations,
                lb = new k(this.chart, kb);
            return kb._cacheable && (this._cachedAnimations = Object.freeze(lb)), lb;
        }
        getContext() {
            return this.$context || (this.$context = (_hb = this.chart.getContext(), b = this, a = this._tooltipItems, (0, e.j)(_hb, {
                tooltip: b,
                tooltipItems: a,
                type: 'tooltip'
            })));
            var _hb, ib, jb;
        }
        getTitle(hb, ib) {
            const {
                callbacks: jb
            } = ib, kb = _ab(jb, 'beforeTitle', this, hb), lb = _ab(jb, 'title', this, hb), mb = _ab(jb, 'afterTitle', this, hb);
            let nb = [];
            return nb = _X(nb, _X(kb)), nb = _X(nb, _X(lb)), nb = _X(nb, _X(mb)), nb;
        }
        getBeforeBody(hb, ib) {
            return _$(_ab(ib.callbacks, 'beforeBody', this, hb));
        }
        getBody(hb, ib) {
            const {
                callbacks: jb
            } = ib, kb = [];
            return (0, e.F)(hb, hb => {
                const lb = {
                        before: [],
                        lines: [],
                        after: []
                    },
                    mb = _ab(jb, hb);
                _X(lb.before, _X(_ab(mb, 'beforeLabel', this, hb))), _X(lb.lines, _ab(mb, 'label', this, hb)), _X(lb.after, _X(_ab(mb, 'afterLabel', this, hb))), kb.push(lb);
            }), kb;
        }
        getAfterBody(hb, ib) {
            return _$(_ab(ib.callbacks, 'afterBody', this, hb));
        }
        getFooter(hb, ib) {
            const {
                callbacks: jb
            } = ib, kb = _ab(jb, 'beforeFooter', this, hb), lb = _ab(jb, 'footer', this, hb), mb = _ab(jb, 'afterFooter', this, hb);
            let nb = [];
            return nb = _X(nb, _X(kb)), nb = _X(nb, _X(lb)), nb = _X(nb, _X(mb)), nb;
        }
        _createItems(hb) {
            const ib = this._active,
                jb = this.chart.data,
                kb = [],
                lb = [],
                mb = [];
            let nb, ob, pb = [];
            for (nb = 0, ob = ib.length; nb < ob; ++nb)
                pb.push(_Y(this.chart, ib[nb]));
            return hb.filter && (pb = pb.filter((ib, kb, lb) => hb.filter(ib, kb, lb, jb))), hb.itemSort && (pb = pb.sort((ib, kb) => hb.itemSort(ib, kb, jb))), (0, e.F)(pb, ib => {
                const qb = _ab(hb.callbacks, ib);
                kb.push(_ab(qb, 'labelColor', this, ib)), lb.push(_ab(qb, 'labelPointStyle', this, ib)), mb.push(_ab(qb, 'labelTextColor', this, ib));
            }), this.labelColors = kb, this.labelPointStyles = lb, this.labelTextColors = mb, this.dataPoints = pb, pb;
        }
        update(hb, ib) {
            const jb = this.options.setContext(this.getContext()),
                kb = this._active;
            let lb, mb = [];
            if (kb.length) {
                const nb = eb[jb.position].call(this, kb, this._eventPosition);
                mb = this._createItems(jb), this.title = this.getTitle(mb, jb), this.beforeBody = this.getBeforeBody(mb, jb), this.body = this.getBody(mb, jb), this.afterBody = this.getAfterBody(mb, jb), this.footer = this.getFooter(mb, jb);
                const ob = this._size = _Z(this, jb),
                    pb = Object.assign({}, nb, ob),
                    qb = _Z(this.chart, jb, pb),
                    rb = _$(jb, pb, qb, this.chart);
                this.xAlign = qb.xAlign, this.yAlign = qb.yAlign, lb = {
                    opacity: 1,
                    x: rb.x,
                    y: rb.y,
                    width: ob.width,
                    height: ob.height,
                    caretX: nb.x,
                    caretY: nb.y
                };
            } else
                0 !== this.opacity && (lb = {
                    opacity: 0
                });
            this._tooltipItems = mb, this.$context = void 0, lb && this._resolveAnimations().update(this, lb), hb && jb.external && jb.external.call(this, {
                chart: this.chart,
                tooltip: this,
                replay: ib
            });
        }
        drawCaret(hb, ib, jb, kb) {
            const lb = this.getCaretPosition(hb, jb, kb);
            ib.lineTo(lb.x1, lb.y1), ib.lineTo(lb.x2, lb.y2), ib.lineTo(lb.x3, lb.y3);
        }
        getCaretPosition(hb, ib, jb) {
            const {
                xAlign: kb,
                yAlign: lb
            } = this, {
                caretSize: mb,
                cornerRadius: nb
            } = jb, {
                topLeft: ob,
                topRight: pb,
                bottomLeft: qb,
                bottomRight: rb
            } = (0, e.aw)(nb), {
                x: sb,
                y: tb
            } = hb, {
                width: ub,
                height: vb
            } = ib;
            let wb, xb, yb, zb, Ab, Bb;
            return 'center' === lb ? (Ab = tb + vb / 2, 'left' === kb ? (wb = sb, xb = wb - mb, zb = Ab + mb, Bb = Ab - mb) : (wb = sb + ub, xb = wb + mb, zb = Ab - mb, Bb = Ab + mb), yb = wb) : (xb = 'left' === kb ? sb + Math.max(ob, qb) + mb : 'right' === kb ? sb + ub - Math.max(pb, rb) - mb : this.caretX, 'top' === lb ? (zb = tb, Ab = zb - mb, wb = xb - mb, yb = xb + mb) : (zb = tb + vb, Ab = zb + mb, wb = xb + mb, yb = xb - mb), Bb = zb), {
                x1: wb,
                x2: xb,
                x3: yb,
                y1: zb,
                y2: Ab,
                y3: Bb
            };
        }
        drawTitle(hb, ib, jb) {
            const kb = this.title,
                lb = kb.length;
            let mb, nb, ob;
            if (lb) {
                const pb = (0, e.az)(jb.rtl, this.x, this.width);
                for (hb.x = _$(this, jb.titleAlign, jb), ib.textAlign = pb.textAlign(jb.titleAlign), ib.textBaseline = 'middle', mb = (0, e.a0)(jb.titleFont), nb = jb.titleSpacing, ib.fillStyle = jb.titleColor, ib.font = mb.string, ob = 0; ob < lb; ++ob)
                    ib.fillText(kb[ob], pb.x(hb.x), hb.y + mb.lineHeight / 2), hb.y += mb.lineHeight + nb, ob + 1 === lb && (hb.y += jb.titleMarginBottom - nb);
            }
        }
        _drawColorBox(hb, ib, jb, kb, lb) {
            const mb = this.labelColors[jb],
                nb = this.labelPointStyles[jb],
                {
                    boxHeight: ob,
                    boxWidth: pb,
                    boxPadding: qb
                } = lb,
                rb = (0, e.a0)(lb.bodyFont),
                sb = _$(this, 'left', lb),
                tb = kb.x(sb),
                ub = ob < rb.lineHeight ? (rb.lineHeight - ob) / 2 : 0,
                vb = ib.y + ub;
            if (lb.usePointStyle) {
                const wb = {
                        radius: Math.min(pb, ob) / 2,
                        pointStyle: nb.pointStyle,
                        rotation: nb.rotation,
                        borderWidth: 1
                    },
                    xb = kb.leftForLtr(tb, pb) + pb / 2,
                    yb = vb + ob / 2;
                hb.strokeStyle = lb.multiKeyBackground, hb.fillStyle = lb.multiKeyBackground, (0, e.at)(hb, wb, xb, yb), hb.strokeStyle = mb.borderColor, hb.fillStyle = mb.backgroundColor, (0, e.at)(hb, wb, xb, yb);
            } else {
                hb.lineWidth = (0, e.i)(mb.borderWidth) ? Math.max(...Object.values(mb.borderWidth)) : mb.borderWidth || 1, hb.strokeStyle = mb.borderColor, hb.setLineDash(mb.borderDash || []), hb.lineDashOffset = mb.borderDashOffset || 0;
                const wb = kb.leftForLtr(tb, pb - qb),
                    xb = kb.leftForLtr(kb.xPlus(tb, 1), pb - qb - 2),
                    yb = (0, e.aw)(mb.borderRadius);
                Object.values(yb).some(hb => 0 !== hb) ? (hb.beginPath(), hb.fillStyle = lb.multiKeyBackground, (0, e.au)(hb, {
                    x: wb,
                    y: vb,
                    w: pb,
                    h: ob,
                    radius: yb
                }), hb.fill(), hb.stroke(), hb.fillStyle = mb.backgroundColor, hb.beginPath(), (0, e.au)(hb, {
                    x: xb,
                    y: vb + 1,
                    w: pb - 2,
                    h: ob - 2,
                    radius: yb
                }), hb.fill()) : (hb.fillStyle = lb.multiKeyBackground, hb.fillRect(wb, vb, pb, ob), hb.strokeRect(wb, vb, pb, ob), hb.fillStyle = mb.backgroundColor, hb.fillRect(xb, vb + 1, pb - 2, ob - 2));
            }
            hb.fillStyle = this.labelTextColors[jb];
        }
        drawBody(hb, ib, jb) {
            const {
                body: kb
            } = this, {
                bodySpacing: lb,
                bodyAlign: mb,
                displayColors: nb,
                boxHeight: ob,
                boxWidth: pb,
                boxPadding: qb
            } = jb, rb = (0, e.a0)(jb.bodyFont);
            let sb = rb.lineHeight,
                tb = 0;
            const ub = (0, e.az)(jb.rtl, this.x, this.width),
                vb = function(wb) {
                    ib.fillText(wb, ub.x(hb.x + tb), hb.y + sb / 2), hb.y += sb + lb;
                },
                wb = ub.textAlign(mb);
            let xb, yb, zb, Ab, Bb, Cb, Db;
            for (ib.textAlign = mb, ib.textBaseline = 'middle', ib.font = rb.string, hb.x = _$(this, wb, jb), ib.fillStyle = jb.bodyColor, (0, e.F)(this.beforeBody, vb), tb = nb && 'right' !== wb ? 'center' === mb ? pb / 2 + qb : pb + 2 + qb : 0, Ab = 0, Cb = kb.length; Ab < Cb; ++Ab) {
                for (xb = kb[Ab], yb = this.labelTextColors[Ab], ib.fillStyle = yb, (0, e.F)(xb.before, vb), zb = xb.lines, nb && zb.length && (this._drawColorBox(ib, hb, Ab, ub, jb), sb = Math.max(rb.lineHeight, ob)), Bb = 0, Db = zb.length; Bb < Db; ++Bb)
                    vb(zb[Bb]), sb = rb.lineHeight;
                (0, e.F)(xb.after, vb);
            }
            tb = 0, sb = rb.lineHeight, (0, e.F)(this.afterBody, vb), hb.y -= lb;
        }
        drawFooter(hb, ib, jb) {
            const kb = this.footer,
                lb = kb.length;
            let mb, nb;
            if (lb) {
                const ob = (0, e.az)(jb.rtl, this.x, this.width);
                for (hb.x = _$(this, jb.footerAlign, jb), hb.y += jb.footerMarginTop, ib.textAlign = ob.textAlign(jb.footerAlign), ib.textBaseline = 'middle', mb = (0, e.a0)(jb.footerFont), ib.fillStyle = jb.footerColor, ib.font = mb.string, nb = 0; nb < lb; ++nb)
                    ib.fillText(kb[nb], ob.x(hb.x), hb.y + mb.lineHeight / 2), hb.y += mb.lineHeight + jb.footerSpacing;
            }
        }
        drawBackground(hb, ib, jb, kb) {
            const {
                xAlign: lb,
                yAlign: mb
            } = this, {
                x: nb,
                y: ob
            } = hb, {
                width: pb,
                height: qb
            } = jb, {
                topLeft: rb,
                topRight: sb,
                bottomLeft: tb,
                bottomRight: ub
            } = (0, e.aw)(kb.cornerRadius);
            ib.fillStyle = kb.backgroundColor, ib.strokeStyle = kb.borderColor, ib.lineWidth = kb.borderWidth, ib.beginPath(), ib.moveTo(nb + rb, ob), 'top' === mb && this.drawCaret(hb, ib, jb, kb), ib.lineTo(nb + pb - sb, ob), ib.quadraticCurveTo(nb + pb, ob, nb + pb, ob + sb), 'center' === mb && 'right' === lb && this.drawCaret(hb, ib, jb, kb), ib.lineTo(nb + pb, ob + qb - ub), ib.quadraticCurveTo(nb + pb, ob + qb, nb + pb - ub, ob + qb), 'bottom' === mb && this.drawCaret(hb, ib, jb, kb), ib.lineTo(nb + tb, ob + qb), ib.quadraticCurveTo(nb, ob + qb, nb, ob + qb - tb), 'center' === mb && 'left' === lb && this.drawCaret(hb, ib, jb, kb), ib.lineTo(nb, ob + rb), ib.quadraticCurveTo(nb, ob, nb + rb, ob), ib.closePath(), ib.fill(), kb.borderWidth > 0 && ib.stroke();
        }
        _updateAnimationTarget(hb) {
            const ib = this.chart,
                jb = this.$animations,
                kb = jb && jb.x,
                lb = jb && jb.y;
            if (kb || lb) {
                const mb = eb[hb.position].call(this, this._active, this._eventPosition);
                if (!mb)
                    return;
                const nb = this._size = _Z(this, hb),
                    ob = Object.assign({}, mb, this._size),
                    pb = _Z(ib, hb, ob),
                    qb = _$(hb, ob, pb, ib);
                kb._to === qb.x && lb._to === qb.y || (this.xAlign = pb.xAlign, this.yAlign = pb.yAlign, this.width = nb.width, this.height = nb.height, this.caretX = mb.x, this.caretY = mb.y, this._resolveAnimations().update(this, qb));
            }
        }
        _willRender() {
            return !!this.opacity;
        }
        draw(hb) {
            const ib = this.options.setContext(this.getContext());
            let jb = this.opacity;
            if (!jb)
                return;
            this._updateAnimationTarget(ib);
            const kb = {
                    width: this.width,
                    height: this.height
                },
                lb = {
                    x: this.x,
                    y: this.y
                };
            jb = Math.abs(jb) < 0.001 ? 0 : jb;
            const mb = (0, e.E)(ib.padding),
                nb = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
            ib.enabled && nb && (hb.save(), hb.globalAlpha = jb, this.drawBackground(lb, hb, kb, ib), (0, e.aA)(hb, ib.textDirection), lb.y += mb.top, this.drawTitle(lb, hb, ib), this.drawBody(lb, hb, ib), this.drawFooter(lb, hb, ib), (0, e.aC)(hb, ib.textDirection), hb.restore());
        }
        getActiveElements() {
            return this._active || [];
        }
        setActiveElements(hb, ib) {
            const jb = this._active,
                kb = hb.map(({
                    datasetIndex: lb,
                    index: mb
                }) => {
                    const nb = this.chart.getDatasetMeta(lb);
                    if (!nb)
                        throw new Error('Cannot find a dataset at index ' + lb);
                    return {
                        datasetIndex: lb,
                        element: nb.data[mb],
                        index: mb
                    };
                }),
                nb = !(0, e.ah)(jb, kb),
                ob = this._positionChanged(kb, mb);
            (nb || ob) && (this._active = kb, this._eventPosition = mb, this._ignoreReplayEvents = !0, this.update(!0));
        }
        handleEvent(hb, ib, jb = !0) {
            if (ib && this._ignoreReplayEvents)
                return !1;
            this._ignoreReplayEvents = !1;
            const kb = this.options,
                lb = this._active || [],
                mb = this._getActiveElements(hb, lb, ib, jb),
                nb = this._positionChanged(mb, hb),
                ob = ib || !(0, e.ah)(mb, lb) || nb;
            return ob && (this._active = mb, (kb.enabled || kb.external) && (this._eventPosition = {
                x: hb.x,
                y: hb.y
            }, this.update(!0, ib))), ob;
        }
        _getActiveElements(hb, ib, jb, kb) {
            const lb = this.options;
            if ('mouseout' === hb.type)
                return [];
            if (!kb)
                return ib;
            const mb = this.chart.getElementsAtEventForMode(hb, lb.mode, lb, jb);
            return lb.reverse && mb.reverse(), mb;
        }
        _positionChanged(hb, ib) {
            const {
                caretX: jb,
                caretY: kb,
                options: lb
            } = this, mb = eb[lb.position].call(this, hb, ib);
            return !1 !== mb && (jb !== mb.x || kb !== mb.y);
        }
        constructor(hb) {
            super(), this.opacity = 0, this._active = [], this._eventPosition = void 0, this._size = void 0, this._cachedAnimations = void 0, this._tooltipItems = [], this.$animations = void 0, this.$context = void 0, this.chart = hb.chart, this.options = hb.options, this.dataPoints = void 0, this.title = void 0, this.beforeBody = void 0, this.body = void 0, this.afterBody = void 0, this.footer = void 0, this.xAlign = void 0, this.yAlign = void 0, this.x = void 0, this.y = void 0, this.height = void 0, this.width = void 0, this.caretX = void 0, this.caretY = void 0, this.labelColors = void 0, this.labelPointStyles = void 0, this.labelTextColors = void 0;
        }
    }
    (0, d.default)(gb, 'positioners', eb);

    function hb(ib, jb, kb, lb) {
        const mb = ib.indexOf(jb);
        if (-1 === mb)
            return ((ib, jb, kb, lb) => ('string' == typeof jb ? (kb = ib.push(jb) - 1, lb.unshift({
                index: kb,
                label: jb
            })) : isNaN(jb) && (kb = null), kb))(ib, jb, kb, lb);
        return mb !== ib.lastIndexOf(jb) ? kb : mb;
    }

    function hb(ib) {
        const jb = this.getLabels();
        return ib >= 0 && ib < jb.length ? jb[ib] : ib;
    }
    class _hb extends M {
        init(ib) {
            const jb = this._addedLabels;
            if (jb.length) {
                const kb = this.getLabels();
                for (const {
                        index: lb,
                        label: mb
                    }
                    of jb)
                    kb[lb] === mb && kb.splice(lb, 1);
                this._addedLabels = [];
            }
            super.init(ib);
        }
        parse(ib, jb) {
            if ((0, e.k)(ib))
                return null;
            const kb = this.getLabels();
            return ((ib, jb) => null === ib ? null : (0, e.S)(Math.round(ib), 0, jb))(jb = isFinite(jb) && kb[jb] === ib ? jb : _ab(kb, ib, (0, e.v)(jb, ib), this._addedLabels), kb.length - 1);
        }
        determineDataLimits() {
            const {
                minDefined: ib,
                maxDefined: jb
            } = this.getUserBounds();
            let {
                min: kb,
                max: lb
            } = this.getMinMax(!0);
            'ticks' === this.options.bounds && (ib || (kb = 0), jb || (lb = this.getLabels().length - 1)), this.min = kb, this.max = lb;
        }
        buildTicks() {
            const ib = this.min,
                jb = this.max,
                kb = this.options.offset,
                lb = [];
            let mb = this.getLabels();
            mb = 0 === ib && jb === mb.length - 1 ? mb : mb.slice(ib, jb + 1), this._valueRange = Math.max(mb.length - (kb ? 0 : 1), 1), this._startValue = this.min - (kb ? 0.5 : 0);
            for (let nb = ib; nb <= jb; nb++)
                lb.push({
                    value: nb
                });
            return lb;
        }
        getLabelForValue(ib) {
            return _ab.call(this, ib);
        }
        configure() {
            super.configure(), this.isHorizontal() || (this._reversePixels = !this._reversePixels);
        }
        getPixelForValue(ib) {
            return 'number' != typeof ib && (ib = this.parse(ib)), null === ib ? NaN : this.getPixelForDecimal((ib - this._startValue) / this._valueRange);
        }
        getPixelForTick(ib) {
            const jb = this.ticks;
            return ib < 0 || ib > jb.length - 1 ? null : this.getPixelForValue(jb[ib].value);
        }
        getValueForPixel(ib) {
            return Math.round(this._startValue + this.getDecimalForPixel(ib) * this._valueRange);
        }
        getBasePixel() {
            return this.bottom;
        }
        constructor(ib) {
            super(ib), this._startValue = void 0, this._valueRange = 0, this._addedLabels = [];
        }
    }

    function ib(jb, kb, {
        horizontal: lb,
        minRotation: mb
    }) {
        const nb = (0, e.t)(mb),
            ob = (lb ? Math.sin(nb) : Math.cos(nb)) || 0.001,
            pb = 0.75 * kb * ('' + jb).length;
        return Math.min(kb / ob, pb);
    }
    (0, d.default)(_hb, 'id', 'category'), (0, d.default)(_hb, 'defaults', {
        ticks: {
            callback: _ab
        }
    });
    class ib extends M {
        parse(jb, kb) {
            return (0, e.k)(jb) || ('number' == typeof jb || jb instanceof Number) && !isFinite(+jb) ? null : +jb;
        }
        handleTickRangeOptions() {
            const {
                beginAtZero: jb
            } = this.options, {
                minDefined: kb,
                maxDefined: lb
            } = this.getUserBounds();
            let {
                min: mb,
                max: nb
            } = this;
            const ob = jb => mb = kb ? mb : jb,
                pb = jb => nb = lb ? nb : jb;
            if (jb) {
                const qb = (0, e.s)(mb),
                    rb = (0, e.s)(nb);
                qb < 0 && rb < 0 ? pb(0) : qb > 0 && rb > 0 && ob(0);
            }
            if (mb === nb) {
                let qb = 0 === nb ? 1 : Math.abs(0.05 * nb);
                pb(nb + qb), jb || ob(mb - qb);
            }
            this.min = mb, this.max = nb;
        }
        getTickLimit() {
            const jb = this.options.ticks;
            let kb, {
                maxTicksLimit: lb,
                stepSize: mb
            } = jb;
            return mb ? (kb = Math.ceil(this.max / mb) - Math.floor(this.min / mb) + 1, kb > 1000 && (console.warn(`scales.${ this.id }.ticks.stepSize: ${ mb } would result generating up to ${ kb } ticks. Limiting to 1000.`), kb = 1000)) : (kb = this.computeTickLimit(), lb = lb || 11), lb && (kb = Math.min(lb, kb)), kb;
        }
        computeTickLimit() {
            return Number.POSITIVE_INFINITY;
        }
        buildTicks() {
            const jb = this.options,
                kb = jb.ticks;
            let lb = this.getTickLimit();
            lb = Math.max(2, lb);
            const mb = function(nb, ob) {
                const pb = [],
                    {
                        bounds: qb,
                        step: rb,
                        min: sb,
                        max: tb,
                        precision: ub,
                        count: vb,
                        maxTicks: wb,
                        maxDigits: xb,
                        includeBounds: yb
                    } = nb,
                    zb = rb || 1,
                    Ab = wb - 1,
                    {
                        min: Bb,
                        max: Cb
                    } = ob,
                    Db = !(0, e.k)(sb),
                    Eb = !(0, e.k)(tb),
                    Fb = !(0, e.k)(vb),
                    Gb = (Cb - Bb) / (xb + 1);
                let Hb, Ib, Jb, Kb, Lb = (0, e.aH)((Cb - Bb) / Ab / zb) * zb;
                if (Lb < 1e-14 && !Db && !Eb)
                    return [{
                            value: Bb
                        },
                        {
                            value: Cb
                        }
                    ];
                Kb = Math.ceil(Cb / Lb) - Math.floor(Bb / Lb), Kb > Ab && (Lb = (0, e.aH)(Kb * Lb / Ab / zb) * zb), (0, e.k)(ub) || (Hb = Math.pow(10, ub), Lb = Math.ceil(Lb * Hb) / Hb), 'ticks' === qb ? (Ib = Math.floor(Bb / Lb) * Lb, Jb = Math.ceil(Cb / Lb) * Lb) : (Ib = Bb, Jb = Cb), Db && Eb && rb && (0, e.aI)((tb - sb) / rb, Lb / 1000) ? (Kb = Math.round(Math.min((tb - sb) / Lb, wb)), Lb = (tb - sb) / Kb, Ib = sb, Jb = tb) : Fb ? (Ib = Db ? sb : Ib, Jb = Eb ? tb : Jb, Kb = vb - 1, Lb = (Jb - Ib) / Kb) : (Kb = (Jb - Ib) / Lb, Kb = (0, e.aJ)(Kb, Math.round(Kb), Lb / 1000) ? Math.round(Kb) : Math.ceil(Kb));
                const Mb = Math.max((0, e.aK)(Lb), (0, e.aK)(Ib));
                Hb = Math.pow(10, (0, e.k)(ub) ? Mb : ub), Ib = Math.round(Ib * Hb) / Hb, Jb = Math.round(Jb * Hb) / Hb;
                let Nb = 0;
                for (Db && (yb && Ib !== sb ? (pb.push({
                        value: sb
                    }), Ib < sb && Nb++, (0, e.aJ)(Math.round((Ib + Nb * Lb) * Hb) / Hb, sb, _ab(sb, Gb, nb)) && Nb++) : Ib < sb && Nb++); Nb < Kb; ++Nb)
                    pb.push({
                        value: Math.round((Ib + Nb * Lb) * Hb) / Hb
                    });
                return Eb && yb && Jb !== tb ? pb.length && (0, e.aJ)(pb[pb.length - 1].value, tb, _ab(tb, Gb, nb)) ? pb[pb.length - 1].value = tb : pb.push({
                    value: tb
                }) : Eb && Jb !== tb || pb.push({
                    value: Jb
                }), pb;
            }({
                maxTicks: lb,
                bounds: jb.bounds,
                min: jb.min,
                max: jb.max,
                precision: kb.precision,
                step: kb.stepSize,
                count: kb.count,
                maxDigits: this._maxDigits(),
                horizontal: this.isHorizontal(),
                minRotation: kb.minRotation || 0,
                includeBounds: !1 !== kb.includeBounds
            }, this._range || this);
            return 'ticks' === jb.bounds && (0, e.aG)(mb, this, 'value'), jb.reverse ? (mb.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), mb;
        }
        configure() {
            const jb = this.ticks;
            let kb = this.min,
                lb = this.max;
            if (super.configure(), this.options.offset && jb.length) {
                const mb = (lb - kb) / Math.max(jb.length - 1, 1) / 2;
                kb -= mb, lb += mb;
            }
            this._startValue = kb, this._endValue = lb, this._valueRange = lb - kb;
        }
        getLabelForValue(jb) {
            return (0, e.o)(jb, this.chart.options.locale, this.options.ticks.format);
        }
        constructor(jb) {
            super(jb), this.start = void 0, this.end = void 0, this._startValue = void 0, this._endValue = void 0, this._valueRange = 0;
        }
    }
    class _jb extends ib {
        determineDataLimits() {
            const {
                min: kb,
                max: lb
            } = this.getMinMax(!0);
            this.min = (0, e.g)(kb) ? kb : 0, this.max = (0, e.g)(lb) ? lb : 1, this.handleTickRangeOptions();
        }
        computeTickLimit() {
            const kb = this.isHorizontal(),
                lb = kb ? this.width : this.height,
                mb = (0, e.t)(this.options.ticks.minRotation),
                nb = (kb ? Math.sin(mb) : Math.cos(mb)) || 0.001,
                ob = this._resolveTickFontOptions(0);
            return Math.ceil(lb / Math.min(40, ob.lineHeight / nb));
        }
        getPixelForValue(kb) {
            return null === kb ? NaN : this.getPixelForDecimal((kb - this._startValue) / this._valueRange);
        }
        getValueForPixel(kb) {
            return this._startValue + this.getDecimalForPixel(kb) * this._valueRange;
        }
    }
    (0, d.default)(_jb, 'id', 'linear'), (0, d.default)(_jb, 'defaults', {
        ticks: {
            callback: e.aL.formatters.numeric
        }
    });
    const kb = _nb => Math.floor((0, e.aM)(_nb)),
        lb = (_nb, b) => Math.pow(10, kb(_nb) + b);

    function mb(_nb) {
        return 1 === _nb / Math.pow(10, kb(_nb));
    }

    function mb(nb, ob, pb) {
        const qb = Math.pow(10, pb),
            rb = Math.floor(nb / qb);
        return Math.ceil(ob / qb) - rb;
    }

    function mb(nb, {
        min: ob,
        max: pb
    }) {
        ob = (0, e.O)(nb.min, ob);
        const qb = [],
            rb = kb(ob);
        let sb = function(tb, ub) {
                let vb = kb(ub - tb);
                for (; _ab(tb, ub, vb) > 10;)
                    vb++;
                for (; _ab(tb, ub, vb) < 10;)
                    vb--;
                return Math.min(vb, kb(tb));
            }(ob, pb),
            tb = sb < 0 ? Math.pow(10, Math.abs(sb)) : 1;
        const ub = Math.pow(10, sb),
            vb = rb > sb ? Math.pow(10, rb) : 0,
            wb = Math.round((ob - vb) * tb) / tb,
            xb = Math.floor((ob - vb) / ub / 10) * ub * 10;
        let yb = Math.floor((wb - xb) / Math.pow(10, sb)),
            zb = (0, e.O)(nb.min, Math.round((vb + xb + yb * Math.pow(10, sb)) * tb) / tb);
        for (; zb < pb;)
            qb.push({
                value: zb,
                major: _ab(zb),
                significand: yb
            }), yb >= 10 ? yb = yb < 15 ? 15 : 20 : yb++, yb >= 20 && (sb++, yb = 2, tb = sb >= 0 ? 1 : tb), zb = Math.round((vb + xb + yb * Math.pow(10, sb)) * tb) / tb;
        const Ab = (0, e.O)(nb.max, zb);
        return qb.push({
            value: Ab,
            major: _ab(Ab),
            significand: yb
        }), qb;
    }
    class mb extends M {
        parse(nb, ob) {
            const pb = ib.prototype.parse.apply(this, [
                nb,
                ob
            ]);
            if (0 !== pb)
                return (0, e.g)(pb) && pb > 0 ? pb : null;
            this._zero = !0;
        }
        determineDataLimits() {
            const {
                min: nb,
                max: ob
            } = this.getMinMax(!0);
            this.min = (0, e.g)(nb) ? Math.max(0, nb) : null, this.max = (0, e.g)(ob) ? Math.max(0, ob) : null, this.options.beginAtZero && (this._zero = !0), this._zero && this.min !== this._suggestedMin && !(0, e.g)(this._userMin) && (this.min = nb === lb(this.min, 0) ? lb(this.min, -1) : lb(this.min, 0)), this.handleTickRangeOptions();
        }
        handleTickRangeOptions() {
            const {
                minDefined: nb,
                maxDefined: ob
            } = this.getUserBounds();
            let pb = this.min,
                qb = this.max;
            const rb = ob => pb = nb ? pb : ob,
                sb = nb => qb = ob ? qb : nb;
            pb === qb && (pb <= 0 ? (rb(1), sb(10)) : (rb(lb(pb, -1)), sb(lb(qb, 1)))), pb <= 0 && rb(lb(qb, -1)), qb <= 0 && sb(lb(pb, 1)), this.min = pb, this.max = qb;
        }
        buildTicks() {
            const nb = this.options,
                ob = _ab({
                    min: this._userMin,
                    max: this._userMax
                }, this);
            return 'ticks' === nb.bounds && (0, e.aG)(ob, this, 'value'), nb.reverse ? (ob.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), ob;
        }
        getLabelForValue(nb) {
            return void 0 === nb ? '0' : (0, e.o)(nb, this.chart.options.locale, this.options.ticks.format);
        }
        configure() {
            const nb = this.min;
            super.configure(), this._startValue = (0, e.aM)(nb), this._valueRange = (0, e.aM)(this.max) - (0, e.aM)(nb);
        }
        getPixelForValue(nb) {
            return void 0 !== nb && 0 !== nb || (nb = this.min), null === nb || isNaN(nb) ? NaN : this.getPixelForDecimal(nb === this.min ? 0 : ((0, e.aM)(nb) - this._startValue) / this._valueRange);
        }
        getValueForPixel(nb) {
            const ob = this.getDecimalForPixel(nb);
            return Math.pow(10, this._startValue + ob * this._valueRange);
        }
        constructor(nb) {
            super(nb), this.start = void 0, this.end = void 0, this._startValue = void 0, this._valueRange = 0;
        }
    }

    function nb(ob) {
        const pb = ob.ticks;
        if (pb.display && ob.display) {
            const qb = (0, e.E)(pb.backdropPadding);
            return (0, e.v)(pb.font && pb.font.size, e.d.font.size) + qb.height;
        }
        return 0;
    }

    function nb(ob, pb, qb, rb, sb) {
        return ob === rb || ob === sb ? {
            start: pb - qb / 2,
            end: pb + qb / 2
        } : ob < rb || ob > sb ? {
            start: pb - qb,
            end: pb
        } : {
            start: pb,
            end: pb + qb
        };
    }

    function nb(ob) {
        const pb = {
                l: ob.left + ob._padding.left,
                r: ob.right - ob._padding.right,
                t: ob.top + ob._padding.top,
                b: ob.bottom - ob._padding.bottom
            },
            qb = Object.assign({}, pb),
            rb = [],
            sb = [],
            tb = ob._pointLabels.length,
            ub = ob.options.pointLabels,
            vb = ub.centerPointLabels ? e.P / tb : 0;
        for (let wb = 0; wb < tb; wb++) {
            const xb = ub.setContext(ob.getPointLabelContext(wb));
            sb[wb] = xb.padding;
            const yb = ob.getPointPosition(wb, ob.drawingArea + sb[wb], vb),
                zb = (0, e.a0)(xb.font),
                Ab = (i = ob.ctx, j = zb, k = ob._pointLabels[wb], k = (0, e.b)(k) ? k : [k], {
                    w: (0, e.aN)(i, j.string, k),
                    h: k.length * j.lineHeight
                });
            rb[wb] = Ab;
            const Bb = (0, e.ay)(ob.getIndexAngle(wb) + vb),
                Cb = Math.round((0, e.U)(Bb));
            _nb(qb, pb, Bb, ai(Cb, yb.x, Ab.w, 0, 180), ai(Cb, yb.y, Ab.h, 90, 270));
        }
        var xb, yb, zb;
        ob.setCenterPoint(pb.l - qb.l, qb.r - pb.r, pb.t - qb.t, qb.b - pb.b), ob._pointLabelItems = function(Ab, Bb, Cb) {
            const Db = [],
                Eb = Ab._pointLabels.length,
                Fb = Ab.options,
                Gb = oi(Fb) / 2,
                Hb = Ab.drawingArea,
                Ib = Fb.pointLabels.centerPointLabels ? e.P / Eb : 0;
            for (let Jb = 0; Jb < Eb; Jb++) {
                const Kb = Ab.getPointPosition(Jb, Hb + Gb + Cb[Jb], Ib),
                    Lb = Math.round((0, e.U)((0, e.ay)(Kb.angle + e.H))),
                    Mb = Bb[Jb],
                    Nb = _nb(Kb.y, Mb.h, Lb),
                    Ob = _nb(Lb),
                    Pb = _nb(Kb.x, Mb.w, Ob);
                Db.push({
                    x: Kb.x,
                    y: Nb,
                    textAlign: Ob,
                    left: Pb,
                    top: Nb,
                    right: Pb + Mb.w,
                    bottom: Nb + Mb.h
                });
            }
            return Db;
        }(ob, rb, sb);
    }

    function _nb(ob, pb, qb, rb, sb) {
        const tb = Math.abs(Math.sin(qb)),
            ub = Math.abs(Math.cos(qb));
        let vb = 0,
            wb = 0;
        rb.start < pb.l ? (vb = (pb.l - rb.start) / tb, ob.l = Math.min(ob.l, pb.l - vb)) : rb.end > pb.r && (vb = (rb.end - pb.r) / tb, ob.r = Math.max(ob.r, pb.r + vb)), sb.start < pb.t ? (wb = (pb.t - sb.start) / ub, ob.t = Math.min(ob.t, pb.t - wb)) : sb.end > pb.b && (wb = (sb.end - pb.b) / ub, ob.b = Math.max(ob.b, pb.b + wb));
    }

    function _nb(ob) {
        return 0 === ob || 180 === ob ? 'center' : ob < 180 ? 'left' : 'right';
    }

    function _nb(ob, pb, qb) {
        return 'right' === qb ? ob -= pb : 'center' === qb && (ob -= pb / 2), ob;
    }

    function _nb(ob, pb, qb) {
        return 90 === qb || 270 === qb ? ob -= pb / 2 : (qb > 270 || qb < 90) && (ob -= pb), ob;
    }

    function nb(ob, pb, qb, rb) {
        const {
            ctx: sb
        } = ob;
        if (qb)
            sb.arc(ob.xCenter, ob.yCenter, pb, 0, e.T);
        else {
            let tb = ob.getPointPosition(0, pb);
            sb.moveTo(tb.x, tb.y);
            for (let ub = 1; ub < rb; ub++)
                tb = ob.getPointPosition(ub, pb), sb.lineTo(tb.x, tb.y);
        }
    }
    (0, d.default)(mb, 'id', 'logarithmic'), (0, d.default)(mb, 'defaults', {
        ticks: {
            callback: e.aL.formatters.logarithmic,
            major: {
                enabled: !0
            }
        }
    });
    class nb extends ib {
        setDimensions() {
            const ob = this._padding = (0, e.E)(oi(this.options) / 2),
                pb = this.width = this.maxWidth - ob.width,
                qb = this.height = this.maxHeight - ob.height;
            this.xCenter = Math.floor(this.left + pb / 2 + ob.left), this.yCenter = Math.floor(this.top + qb / 2 + ob.top), this.drawingArea = Math.floor(Math.min(pb, qb) / 2);
        }
        determineDataLimits() {
            const {
                min: ob,
                max: pb
            } = this.getMinMax(!1);
            this.min = (0, e.g)(ob) && !isNaN(ob) ? ob : 0, this.max = (0, e.g)(pb) && !isNaN(pb) ? pb : 0, this.handleTickRangeOptions();
        }
        computeTickLimit() {
            return Math.ceil(this.drawingArea / oi(this.options));
        }
        generateTickLabels(ob) {
            ib.prototype.generateTickLabels.call(this, ob), this._pointLabels = this.getLabels().map((ob, b) => {
                const pb = (0, e.Q)(this.options.pointLabels.callback, [
                    ob,
                    b
                ], this);
                return pb || 0 === pb ? pb : '';
            }).filter((ob, b) => this.chart.getDataVisibility(b));
        }
        fit() {
            const ob = this.options;
            ob.display && ob.pointLabels.display ? ri(this) : this.setCenterPoint(0, 0, 0, 0);
        }
        setCenterPoint(ob, pb, qb, rb) {
            this.xCenter += Math.floor((ob - pb) / 2), this.yCenter += Math.floor((qb - rb) / 2), this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(ob, pb, qb, rb));
        }
        getIndexAngle(ob) {
            const pb = e.T / (this._pointLabels.length || 1),
                qb = this.options.startAngle || 0;
            return (0, e.ay)(ob * pb + (0, e.t)(qb));
        }
        getDistanceFromCenterForValue(ob) {
            if ((0, e.k)(ob))
                return NaN;
            const pb = this.drawingArea / (this.max - this.min);
            return this.options.reverse ? (this.max - ob) * pb : (ob - this.min) * pb;
        }
        getValueForDistanceFromCenter(ob) {
            if ((0, e.k)(ob))
                return NaN;
            const pb = ob / (this.drawingArea / (this.max - this.min));
            return this.options.reverse ? this.max - pb : this.min + pb;
        }
        getPointLabelContext(ob) {
            const pb = this._pointLabels || [];
            if (ob >= 0 && ob < pb.length) {
                const qb = pb[ob];
                return function(rb, sb, tb) {
                    return (0, e.j)(rb, {
                        label: tb,
                        index: sb,
                        type: 'pointLabel'
                    });
                }(this.getContext(), ob, qb);
            }
        }
        getPointPosition(ob, pb, qb = 0) {
            const rb = this.getIndexAngle(ob) - e.H + qb;
            return {
                x: Math.cos(rb) * pb + this.xCenter,
                y: Math.sin(rb) * pb + this.yCenter,
                angle: rb
            };
        }
        getPointPositionForValue(ob, pb) {
            return this.getPointPosition(ob, this.getDistanceFromCenterForValue(pb));
        }
        getBasePosition(ob) {
            return this.getPointPositionForValue(ob || 0, this.getBaseValue());
        }
        getPointLabelPosition(ob) {
            const {
                left: pb,
                top: qb,
                right: rb,
                bottom: sb
            } = this._pointLabelItems[ob];
            return {
                left: pb,
                top: qb,
                right: rb,
                bottom: sb
            };
        }
        drawBackground() {
            const {
                backgroundColor: ob,
                grid: {
                    circular: pb
                }
            } = this.options;
            if (ob) {
                const qb = this.ctx;
                qb.save(), qb.beginPath(), ui(this, this.getDistanceFromCenterForValue(this._endValue), pb, this._pointLabels.length), qb.closePath(), qb.fillStyle = ob, qb.fill(), qb.restore();
            }
        }
        drawGrid() {
            const ob = this.ctx,
                pb = this.options,
                {
                    angleLines: qb,
                    grid: rb,
                    border: sb
                } = pb,
                tb = this._pointLabels.length;
            let ub, vb, wb;
            if (pb.pointLabels.display && function(xb, yb) {
                    const {
                        ctx: zb,
                        options: {
                            pointLabels: Ab
                        }
                    } = xb;
                    for (let Bb = yb - 1; Bb >= 0; Bb--) {
                        const Cb = Ab.setContext(xb.getPointLabelContext(Bb)),
                            Db = (0, e.a0)(Cb.font),
                            {
                                x: Eb,
                                y: Fb,
                                textAlign: Gb,
                                left: Hb,
                                top: Ib,
                                right: Jb,
                                bottom: Kb
                            } = xb._pointLabelItems[Bb],
                            {
                                backdropColor: Lb
                            } = Cb;
                        if (!(0, e.k)(Lb)) {
                            const Mb = (0, e.aw)(Cb.borderRadius),
                                Nb = (0, e.E)(Cb.backdropPadding);
                            zb.fillStyle = Lb;
                            const Ob = Hb - Nb.left,
                                Pb = Ib - Nb.top,
                                Qb = Jb - Hb + Nb.width,
                                Rb = Kb - Ib + Nb.height;
                            Object.values(Mb).some(Mb => 0 !== Mb) ? (zb.beginPath(), (0, e.au)(zb, {
                                x: Ob,
                                y: Pb,
                                w: Qb,
                                h: Rb,
                                radius: Mb
                            }), zb.fill()) : zb.fillRect(Ob, Pb, Qb, Rb);
                        }
                        (0, e.Z)(zb, xb._pointLabels[Bb], Eb, Fb + Db.lineHeight / 2, Db, {
                            color: Cb.color,
                            textAlign: Gb,
                            textBaseline: 'middle'
                        });
                    }
                }(this, tb), rb.display && this.ticks.forEach((ob, pb) => {
                    if (0 !== pb) {
                        vb = this.getDistanceFromCenterForValue(ob.value);
                        const xb = this.getContext(pb),
                            yb = rb.setContext(xb),
                            zb = sb.setContext(xb);
                        ! function(Ab, Bb, Cb, Db, Eb) {
                            const Fb = Ab.ctx,
                                Gb = Bb.circular,
                                {
                                    color: Hb,
                                    lineWidth: Ib
                                } = Bb;
                            !Gb && !Db || !Hb || !Ib || Cb < 0 || (Fb.save(), Fb.strokeStyle = Hb, Fb.lineWidth = Ib, Fb.setLineDash(Eb.dash), Fb.lineDashOffset = Eb.dashOffset, Fb.beginPath(), ui(Ab, Cb, Gb, Db), Fb.closePath(), Fb.stroke(), Fb.restore());
                        }(this, yb, vb, tb, zb);
                    }
                }), qb.display) {
                for (ob.save(), ub = tb - 1; ub >= 0; ub--) {
                    const xb = qb.setContext(this.getPointLabelContext(ub)),
                        {
                            color: yb,
                            lineWidth: zb
                        } = xb;
                    zb && yb && (ob.lineWidth = zb, ob.strokeStyle = yb, ob.setLineDash(xb.borderDash), ob.lineDashOffset = xb.borderDashOffset, vb = this.getDistanceFromCenterForValue(pb.ticks.reverse ? this.min : this.max), wb = this.getPointPosition(ub, vb), ob.beginPath(), ob.moveTo(this.xCenter, this.yCenter), ob.lineTo(wb.x, wb.y), ob.stroke());
                }
                ob.restore();
            }
        }
        drawBorder() {}
        drawLabels() {
            const ob = this.ctx,
                pb = this.options,
                qb = pb.ticks;
            if (!qb.display)
                return;
            const rb = this.getIndexAngle(0);
            let sb, tb;
            ob.save(), ob.translate(this.xCenter, this.yCenter), ob.rotate(rb), ob.textAlign = 'center', ob.textBaseline = 'middle', this.ticks.forEach((rb, g) => {
                if (0 === g && !pb.reverse)
                    return;
                const ub = qb.setContext(this.getContext(g)),
                    vb = (0, e.a0)(ub.font);
                if (sb = this.getDistanceFromCenterForValue(this.ticks[g].value), ub.showLabelBackdrop) {
                    ob.font = vb.string, tb = ob.measureText(rb.label).width, ob.fillStyle = ub.backdropColor;
                    const wb = (0, e.E)(ub.backdropPadding);
                    ob.fillRect(-tb / 2 - wb.left, -sb - vb.size / 2 - wb.top, tb + wb.width, vb.size + wb.height);
                }
                (0, e.Z)(ob, rb.label, 0, -sb, vb, {
                    color: ub.color
                });
            }), ob.restore();
        }
        drawTitle() {}
        constructor(ob) {
            super(ob), this.xCenter = void 0, this.yCenter = void 0, this.drawingArea = void 0, this._pointLabels = [], this._pointLabelItems = [];
        }
    }
    (0, d.default)(nb, 'id', 'radialLinear'), (0, d.default)(nb, 'defaults', {
        display: !0,
        animate: !0,
        position: 'chartArea',
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
            callback: e.aL.formatters.numeric
        },
        pointLabels: {
            backdropColor: void 0,
            backdropPadding: 2,
            display: !0,
            font: {
                size: 10
            },
            callback: _rb => _rb,
            padding: 5,
            centerPointLabels: !1
        }
    }), (0, d.default)(nb, 'defaultRoutes', {
        'angleLines.color': 'borderColor',
        'pointLabels.color': 'color',
        'ticks.color': 'color'
    }), (0, d.default)(nb, 'descriptors', {
        angleLines: {
            _fallback: 'grid'
        }
    });
    const ob = {
            millisecond: {
                common: !0,
                size: 1,
                steps: 1000
            },
            second: {
                common: !0,
                size: 1000,
                steps: 60
            },
            minute: {
                common: !0,
                size: 60000,
                steps: 60
            },
            hour: {
                common: !0,
                size: 3600000,
                steps: 24
            },
            day: {
                common: !0,
                size: 86400000,
                steps: 30
            },
            week: {
                common: !1,
                size: 604800000,
                steps: 4
            },
            month: {
                common: !0,
                size: 2628000000,
                steps: 12
            },
            quarter: {
                common: !1,
                size: 7884000000,
                steps: 4
            },
            year: {
                common: !0,
                size: 31540000000
            }
        },
        pb = Object.keys(ob);

    function qb(_rb, sb) {
        return _rb - sb;
    }

    function qb(rb, sb) {
        if ((0, e.k)(sb))
            return null;
        const tb = rb._adapter,
            {
                parser: ub,
                round: vb,
                isoWeekday: wb
            } = rb._parseOpts;
        let xb = sb;
        return 'function' == typeof ub && (xb = ub(xb)), (0, e.g)(xb) || (xb = 'string' == typeof ub ? tb.parse(xb, ub) : tb.parse(xb)), null === xb ? null : (vb && (xb = 'week' !== vb || !(0, e.x)(wb) && !0 !== wb ? tb.startOf(xb, vb) : tb.startOf(xb, 'isoWeek', wb)), +xb);
    }

    function qb(rb, sb, tb, ub) {
        const vb = pb.length;
        for (let wb = pb.indexOf(rb); wb < vb - 1; ++wb) {
            const xb = ob[pb[wb]],
                yb = xb.steps ? xb.steps : Number.MAX_SAFE_INTEGER;
            if (xb.common && Math.ceil((tb - sb) / (yb * xb.size)) <= ub)
                return pb[wb];
        }
        return pb[vb - 1];
    }

    function qb(rb, sb, tb) {
        if (tb) {
            if (tb.length) {
                const {
                    lo: ub,
                    hi: vb
                } = (0, e.aP)(tb, sb);
                rb[tb[ub] >= sb ? tb[ub] : tb[vb]] = !0;
            }
        } else
            rb[sb] = !0;
    }

    function qb(rb, sb, tb) {
        const ub = [],
            vb = {},
            wb = sb.length;
        let xb, yb;
        for (xb = 0; xb < wb; ++xb)
            yb = sb[xb], vb[yb] = xb, ub.push({
                value: yb,
                major: !1
            });
        return 0 !== wb && tb ? function(zb, Ab, Bb, Cb) {
            const Db = zb._adapter,
                Eb = +Db.startOf(Ab[0].value, Cb),
                Fb = Ab[Ab.length - 1].value;
            let Gb, Hb;
            for (Gb = Eb; Gb <= Fb; Gb = +Db.add(Gb, 1, Cb))
                Hb = Bb[Gb], Hb >= 0 && (Ab[Hb].major = !0);
            return Ab;
        }(rb, ub, vb, tb) : ub;
    }
    class qb extends M {
        init(rb, sb = {}) {
            const tb = rb.time || (rb.time = {}),
                ub = this._adapter = new x(rb.adapters.date);
            ub.init(sb), (0, e.ab)(tb.displayFormats, ub.formats()), this._parseOpts = {
                parser: tb.parser,
                round: tb.round,
                isoWeekday: tb.isoWeekday
            }, super.init(rb), this._normalized = sb.normalized;
        }
        parse(rb, sb) {
            return void 0 === rb ? null : xi(this, rb);
        }
        beforeLayout() {
            super.beforeLayout(), this._cache = {
                data: [],
                labels: [],
                all: []
            };
        }
        determineDataLimits() {
            const rb = this.options,
                sb = this._adapter,
                tb = rb.time.unit || 'day';
            let {
                min: ub,
                max: vb,
                minDefined: wb,
                maxDefined: xb
            } = this.getUserBounds();

            function yb(zb) {
                wb || isNaN(zb.min) || (ub = Math.min(ub, zb.min)), xb || isNaN(zb.max) || (vb = Math.max(vb, zb.max));
            }
            wb && xb || (h(this._getLabelBounds()), 'ticks' === rb.bounds && 'labels' === rb.ticks.source || h(this.getMinMax(!1))), ub = (0, e.g)(ub) && !isNaN(ub) ? ub : +sb.startOf(Date.now(), tb), vb = (0, e.g)(vb) && !isNaN(vb) ? vb : +sb.endOf(Date.now(), tb) + 1, this.min = Math.min(ub, vb - 1), this.max = Math.max(ub + 1, vb);
        }
        _getLabelBounds() {
            const rb = this.getLabelTimestamps();
            let sb = Number.POSITIVE_INFINITY,
                tb = Number.NEGATIVE_INFINITY;
            return rb.length && (sb = rb[0], tb = rb[rb.length - 1]), {
                min: sb,
                max: tb
            };
        }
        buildTicks() {
            const rb = this.options,
                sb = rb.time,
                tb = rb.ticks,
                ub = 'labels' === tb.source ? this.getLabelTimestamps() : this._generate();
            'ticks' === rb.bounds && ub.length && (this.min = this._userMin || ub[0], this.max = this._userMax || ub[ub.length - 1]);
            const vb = this.min,
                wb = this.max,
                xb = (0, e.aO)(ub, vb, wb);
            return this._unit = sb.unit || (tb.autoSkip ? bi(sb.minUnit, this.min, this.max, this._getLabelCapacity(vb)) : function(yb, zb, Ab, Bb, Cb) {
                for (let Db = pb.length - 1; Db >= pb.indexOf(Ab); Db--) {
                    const Eb = pb[Db];
                    if (ob[Eb].common && yb._adapter.diff(Cb, Bb, Eb) >= zb - 1)
                        return Eb;
                }
                return pb[Ab ? pb.indexOf(Ab) : 0];
            }(this, xb.length, sb.minUnit, this.min, this.max)), this._majorUnit = tb.major.enabled && 'year' !== this._unit ? function(yb) {
                for (let zb = pb.indexOf(yb) + 1, Ab = pb.length; zb < Ab; ++zb)
                    if (ob[pb[zb]].common)
                        return pb[zb];
            }(this._unit) : void 0, this.initOffsets(ub), rb.reverse && xb.reverse(), yi(this, xb, this._majorUnit);
        }
        afterAutoSkip() {
            this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map(_rb => +_rb.value));
        }
        initOffsets(_rb = []) {
            let sb, tb, ub = 0,
                vb = 0;
            this.options.offset && _rb.length && (sb = this.getDecimalForValue(_rb[0]), ub = 1 === _rb.length ? 1 - sb : (this.getDecimalForValue(_rb[1]) - sb) / 2, tb = this.getDecimalForValue(_rb[_rb.length - 1]), vb = 1 === _rb.length ? tb : (tb - this.getDecimalForValue(_rb[_rb.length - 2])) / 2);
            const wb = _rb.length < 3 ? 0.5 : 0.25;
            ub = (0, e.S)(ub, 0, wb), vb = (0, e.S)(vb, 0, wb), this._offsets = {
                start: ub,
                end: vb,
                factor: 1 / (ub + 1 + vb)
            };
        }
        _generate() {
            const rb = this._adapter,
                sb = this.min,
                tb = this.max,
                ub = this.options,
                vb = ub.time,
                wb = vb.unit || bi(vb.minUnit, sb, tb, this._getLabelCapacity(sb)),
                xb = (0, e.v)(ub.ticks.stepSize, 1),
                yb = 'week' === wb && vb.isoWeekday,
                zb = (0, e.x)(yb) || !0 === yb,
                Ab = {};
            let Bb, Cb, Db = sb;
            if (zb && (Db = +rb.startOf(Db, 'isoWeek', yb)), Db = +rb.startOf(Db, zb ? 'day' : wb), rb.diff(tb, sb, wb) > 100000 * xb)
                throw new Error(sb + ' and ' + tb + ' are too far apart with stepSize of ' + xb + ' ' + wb);
            const Eb = 'data' === ub.ticks.source && this.getDataTimestamps();
            for (Bb = Db, Cb = 0; Bb < tb; Bb = +rb.add(Bb, xb, wb), Cb++)
                _i(Ab, Bb, Eb);
            return Bb !== tb && 'ticks' !== ub.bounds && 1 !== Cb || _i(Ab, Bb, Eb), Object.keys(Ab).sort((rb, sb) => rb - sb).map(rb => +rb);
        }
        getLabelForValue(rb) {
            const sb = this._adapter,
                tb = this.options.time;
            return tb.tooltipFormat ? sb.format(rb, tb.tooltipFormat) : sb.format(rb, tb.displayFormats.datetime);
        }
        format(rb, sb) {
            const tb = this.options.time.displayFormats,
                ub = this._unit,
                vb = sb || tb[ub];
            return this._adapter.format(rb, vb);
        }
        _tickFormatFunction(rb, sb, tb, ub) {
            const vb = this.options,
                wb = vb.ticks.callback;
            if (wb)
                return (0, e.Q)(wb, [
                    rb,
                    sb,
                    tb
                ], this);
            const xb = vb.time.displayFormats,
                yb = this._unit,
                zb = this._majorUnit,
                Ab = yb && xb[yb],
                Bb = zb && xb[zb],
                Cb = tb[sb],
                Db = zb && Bb && Cb && Cb.major;
            return this._adapter.format(rb, ub || (Db ? Bb : Ab));
        }
        generateTickLabels(rb) {
            let sb, tb, ub;
            for (sb = 0, tb = rb.length; sb < tb; ++sb)
                ub = rb[sb], ub.label = this._tickFormatFunction(ub.value, sb, rb);
        }
        getDecimalForValue(rb) {
            return null === rb ? NaN : (rb - this.min) / (this.max - this.min);
        }
        getPixelForValue(rb) {
            const sb = this._offsets,
                tb = this.getDecimalForValue(rb);
            return this.getPixelForDecimal((sb.start + tb) * sb.factor);
        }
        getValueForPixel(rb) {
            const sb = this._offsets,
                tb = this.getDecimalForPixel(rb) / sb.factor - sb.end;
            return this.min + tb * (this.max - this.min);
        }
        _getLabelSize(rb) {
            const sb = this.options.ticks,
                tb = this.ctx.measureText(rb).width,
                ub = (0, e.t)(this.isHorizontal() ? sb.maxRotation : sb.minRotation),
                vb = Math.cos(ub),
                wb = Math.sin(ub),
                xb = this._resolveTickFontOptions(0).size;
            return {
                w: tb * vb + xb * wb,
                h: tb * wb + xb * vb
            };
        }
        _getLabelCapacity(rb) {
            const sb = this.options.time,
                tb = sb.displayFormats,
                ub = tb[sb.unit] || tb.millisecond,
                vb = this._tickFormatFunction(rb, 0, yi(this, [rb], this._majorUnit), ub),
                wb = this._getLabelSize(vb),
                xb = Math.floor(this.isHorizontal() ? this.width / wb.w : this.height / wb.h) - 1;
            return xb > 0 ? xb : 1;
        }
        getDataTimestamps() {
            let rb, sb, tb = this._cache.data || [];
            if (tb.length)
                return tb;
            const ub = this.getMatchingVisibleMetas();
            if (this._normalized && ub.length)
                return this._cache.data = ub[0].controller.getAllParsedValues(this);
            for (rb = 0, sb = ub.length; rb < sb; ++rb)
                tb = tb.concat(ub[rb].controller.getAllParsedValues(this));
            return this._cache.data = this.normalize(tb);
        }
        getLabelTimestamps() {
            const rb = this._cache.labels || [];
            let sb, tb;
            if (rb.length)
                return rb;
            const ub = this.getLabels();
            for (sb = 0, tb = ub.length; sb < tb; ++sb)
                rb.push(xi(this, ub[sb]));
            return this._cache.labels = this._normalized ? rb : this.normalize(rb);
        }
        normalize(rb) {
            return (0, e._)(rb.sort(mi));
        }
        constructor(rb) {
            super(rb), this._cache = {
                data: [],
                labels: [],
                all: []
            }, this._unit = 'day', this._majorUnit = void 0, this._offsets = {}, this._normalized = !1, this._parseOpts = void 0;
        }
    }

    function rb(sb, tb, ub) {
        let vb, wb, xb, yb, zb = 0,
            Ab = sb.length - 1;
        ub ? (tb >= sb[zb].pos && tb <= sb[Ab].pos && ({
            lo: Bb,
            hi: Cb
        } = (0, e.B)(sb, 'pos', tb)), {
            pos: Db,
            time: Eb
        } = sb[Bb], {
            pos: Fb,
            time: Gb
        } = sb[Cb]) : (tb >= sb[Bb].time && tb <= sb[Cb].time && ({
            lo: Hb,
            hi: Ib
        } = (0, e.B)(sb, 'time', tb)), {
            time: Jb,
            pos: Kb
        } = sb[Hb], {
            time: Lb,
            pos: Mb
        } = sb[Ib]);
        const Nb = Lb - Jb;
        return Nb ? Kb + (Mb - Kb) * (tb - Jb) / Nb : Kb;
    }
    (0, d.default)(qb, 'id', 'time'), (0, d.default)(qb, 'defaults', {
        bounds: 'data',
        adapters: {},
        time: {
            parser: !1,
            unit: !1,
            round: !1,
            isoWeekday: !1,
            minUnit: 'millisecond',
            displayFormats: {}
        },
        ticks: {
            source: 'auto',
            callback: !1,
            major: {
                enabled: !1
            }
        }
    });
    class rb extends qb {
        initOffsets() {
            const sb = this._getTimestampsForTable(),
                tb = this._table = this.buildLookupTable(sb);
            this._minPos = Mi(tb, this.min), this._tableRange = Mi(tb, this.max) - this._minPos, super.initOffsets(sb);
        }
        buildLookupTable(sb) {
            const {
                min: tb,
                max: ub
            } = this, vb = [], wb = [];
            let xb, yb, zb, Ab, Bb;
            for (xb = 0, yb = sb.length; xb < yb; ++xb)
                Ab = sb[xb], Ab >= tb && Ab <= ub && vb.push(Ab);
            if (vb.length < 2)
                return [{
                        time: tb,
                        pos: 0
                    },
                    {
                        time: ub,
                        pos: 1
                    }
                ];
            for (xb = 0, yb = vb.length; xb < yb; ++xb)
                Bb = vb[xb + 1], zb = vb[xb - 1], Ab = vb[xb], Math.round((Bb + zb) / 2) !== Ab && wb.push({
                    time: Ab,
                    pos: xb / (yb - 1)
                });
            return wb;
        }
        _getTimestampsForTable() {
            let sb = this._cache.all || [];
            if (sb.length)
                return sb;
            const tb = this.getDataTimestamps(),
                ub = this.getLabelTimestamps();
            return sb = tb.length && ub.length ? this.normalize(tb.concat(ub)) : tb.length ? tb : ub, sb = this._cache.all = sb, sb;
        }
        getDecimalForValue(sb) {
            return (Mi(this._table, sb) - this._minPos) / this._tableRange;
        }
        getValueForPixel(sb) {
            const tb = this._offsets,
                ub = this.getDecimalForPixel(sb) / tb.factor - tb.end;
            return Mi(this._table, ub * this._tableRange + this._minPos, !0);
        }
        constructor(sb) {
            super(sb), this._table = [], this._minPos = void 0, this._tableRange = void 0;
        }
    }
    (0, d.default)(rb, 'id', 'timeseries'), (0, d.default)(rb, 'defaults', qb.defaults);
}), a.register('Y2cfq', function(b, c) {
    _f(b.exports, 'aF', function() {
        return _e;
    }), _f(b.exports, 'ac', function() {
        return _e;
    }), _f(b.exports, 'k', function() {
        return _f;
    }), _f(b.exports, 'b', function() {
        return _f;
    }), _f(b.exports, 'i', function() {
        return _f;
    }), _f(b.exports, 'g', function() {
        return _f;
    }), _f(b.exports, 'O', function() {
        return _f;
    }), _f(b.exports, 'v', function() {
        return _f;
    }), _f(b.exports, 'm', function() {
        return _f;
    }), _f(b.exports, 'n', function() {
        return _g;
    }), _f(b.exports, 'Q', function() {
        return _h;
    }), _f(b.exports, 'F', function() {
        return _h;
    }), _f(b.exports, 'ah', function() {
        return _h;
    }), _f(b.exports, 'a4', function() {
        return _h;
    }), _f(b.exports, 'ab', function() {
        return _h;
    }), _f(b.exports, 'f', function() {
        return _i;
    }), _f(b.exports, 'a5', function() {
        return _i;
    }), _f(b.exports, 'h', function() {
        return _i;
    }), _f(b.exports, 'a7', function() {
        return _j;
    }), _f(b.exports, 'ag', function() {
        return _k;
    }), _f(b.exports, 'ai', function() {
        return _l;
    }), _f(b.exports, 'P', function() {
        return _l;
    }), _f(b.exports, 'T', function() {
        return _m;
    }), _f(b.exports, 'H', function() {
        return _q;
    }), _f(b.exports, 'aM', function() {
        return _t;
    }), _f(b.exports, 's', function() {
        return _u;
    }), _f(b.exports, 'aJ', function() {
        return _v;
    }), _f(b.exports, 'aH', function() {
        return _v;
    }), _f(b.exports, 'N', function() {
        return _v;
    }), _f(b.exports, 'x', function() {
        return _v;
    }), _f(b.exports, 'aI', function() {
        return _v;
    }), _f(b.exports, 'aG', function() {
        return _v;
    }), _f(b.exports, 't', function() {
        return _v;
    }), _f(b.exports, 'U', function() {
        return _v;
    }), _f(b.exports, 'aK', function() {
        return _v;
    }), _f(b.exports, 'D', function() {
        return _v;
    }), _f(b.exports, 'aE', function() {
        return _v;
    }), _f(b.exports, 'ay', function() {
        return _v;
    }), _f(b.exports, 'p', function() {
        return _v;
    }), _f(b.exports, 'S', function() {
        return _v;
    }), _f(b.exports, 'W', function() {
        return _v;
    }), _f(b.exports, 'aj', function() {
        return _v;
    }), _f(b.exports, 'aP', function() {
        return _v;
    }), _f(b.exports, 'B', function() {
        return _v;
    }), _f(b.exports, 'A', function() {
        return _w;
    }), _f(b.exports, 'aO', function() {
        return _x;
    }), _f(b.exports, 'l', function() {
        return _y;
    }), _f(b.exports, 'u', function() {
        return _y;
    }), _f(b.exports, '_', function() {
        return _y;
    }), _f(b.exports, 'r', function() {
        return _y;
    }), _f(b.exports, 'L', function() {
        return _z;
    }), _f(b.exports, 'ad', function() {
        return _z;
    }), _f(b.exports, 'a1', function() {
        return _z;
    }), _f(b.exports, 'a2', function() {
        return _A;
    }), _f(b.exports, 'aB', function() {
        return _B;
    }), _f(b.exports, 'q', function() {
        return _C;
    }), _f(b.exports, 'w', function() {
        return _C;
    }), _f(b.exports, 'e', function() {
        return _F;
    }), _f(b.exports, 'c', function() {
        return _G;
    }), _f(b.exports, 'o', function() {
        return _J;
    }), _f(b.exports, 'aL', function() {
        return _K;
    }), _f(b.exports, 'a3', function() {
        return _L;
    }), _f(b.exports, 'a6', function() {
        return _M;
    }), _f(b.exports, 'd', function() {
        return _O;
    }), _f(b.exports, 'V', function() {
        return _P;
    }), _f(b.exports, 'aN', function() {
        return _P;
    }), _f(b.exports, 'X', function() {
        return _P;
    }), _f(b.exports, 'af', function() {
        return _P;
    }), _f(b.exports, 'at', function() {
        return _P;
    }), _f(b.exports, 'aD', function() {
        return _P;
    }), _f(b.exports, 'C', function() {
        return _P;
    }), _f(b.exports, 'Y', function() {
        return _P;
    }), _f(b.exports, '$', function() {
        return _P;
    }), _f(b.exports, 'ar', function() {
        return _P;
    }), _f(b.exports, 'as', function() {
        return _P;
    }), _f(b.exports, 'Z', function() {
        return _P;
    }), _f(b.exports, 'au', function() {
        return _P;
    }), _f(b.exports, 'ak', function() {
        return _R;
    }), _f(b.exports, 'av', function() {
        return _R;
    }), _f(b.exports, 'aw', function() {
        return _R;
    }), _f(b.exports, 'E', function() {
        return _R;
    }), _f(b.exports, 'a0', function() {
        return _R;
    }), _f(b.exports, 'a', function() {
        return _R;
    }), _f(b.exports, 'R', function() {
        return _R;
    }), _f(b.exports, 'j', function() {
        return _R;
    }), _f(b.exports, 'a9', function() {
        return _R;
    }), _f(b.exports, 'a8', function() {
        return _R;
    }), _f(b.exports, 'aa', function() {
        return _R;
    }), _f(b.exports, 'y', function() {
        return _U;
    }), _f(b.exports, 'al', function() {
        return _X;
    }), _f(b.exports, 'M', function() {
        return _X;
    }), _f(b.exports, 'I', function() {
        return _X;
    }), _f(b.exports, 'z', function() {
        return _Z;
    }), _f(b.exports, 'G', function() {
        return _$;
    }), _f(b.exports, 'ae', function() {
        return _$;
    }), _f(b.exports, 'K', function() {
        return _$;
    }), _f(b.exports, 'J', function() {
        return _ab;
    }), _f(b.exports, 'aq', function() {
        return _ab;
    }), _f(b.exports, 'ao', function() {
        return _ab;
    }), _f(b.exports, 'ap', function() {
        return _ab;
    }), _f(b.exports, 'az', function() {
        return _ab;
    }), _f(b.exports, 'aA', function() {
        return _ab;
    }), _f(b.exports, 'aC', function() {
        return _ab;
    }), _f(b.exports, 'ax', function() {
        return _ab;
    }), _f(b.exports, 'an', function() {
        return _ab;
    }), _f(b.exports, 'am', function() {
        return _ab;
    });
    var d = a('TbYzm');

    function _e() {}
    const _e = (() => {
        let _f = 0;
        return () => _f++;
    })();

    function _f(g) {
        return null == g;
    }

    function _f(g) {
        if (Array.isArray && Array.isArray(g))
            return !0;
        const h = Object.prototype.toString.call(g);
        return '[object' === h.slice(0, 7) && 'Array]' === h.slice(-6);
    }

    function _f(g) {
        return null !== g && '[object Object]' === Object.prototype.toString.call(g);
    }

    function _f(g) {
        return ('number' == typeof g || g instanceof Number) && isFinite(+g);
    }

    function _f(g, h) {
        return _G(g) ? g : h;
    }

    function _f(g, h) {
        return void 0 === g ? h : g;
    }
    const _f = (_i, b) => 'string' == typeof _i && _i.endsWith('%') ? parseFloat(_i) / 100 : +_i / b,
        _g = (_i, b) => 'string' == typeof _i && _i.endsWith('%') ? parseFloat(_i) / 100 * b : +_i;

    function _h(_i, j, k) {
        if (_i && 'function' == typeof _i.call)
            return _i.apply(k, j);
    }

    function _h(i, j, k, l) {
        let m, n, o;
        if (_E(i))
            if (n = i.length, l)
                for (m = n - 1; m >= 0; m--)
                    j.call(k, i[m], m);
            else
                for (m = 0; m < n; m++)
                    j.call(k, i[m], m);
        else if (_F(i))
            for (o = Object.keys(i), n = o.length, m = 0; m < n; m++)
                j.call(k, i[o[m]], o[m]);
    }

    function _h(i, j) {
        let k, l, m, n;
        if (!i || !j || i.length !== j.length)
            return !1;
        for (k = 0, l = i.length; k < l; ++k)
            if (m = i[k], n = j[k], m.datasetIndex !== n.datasetIndex || m.index !== n.index)
                return !1;
        return !0;
    }

    function h(i) {
        if (_E(i))
            return i.map(h);
        if (_F(i)) {
            const j = Object.create(null),
                k = Object.keys(i),
                l = k.length;
            let m = 0;
            for (; m < l; ++m)
                j[k[m]] = h(i[k[m]]);
            return j;
        }
        return i;
    }

    function h(i) {
        return -1 === [
            '__proto__',
            'prototype',
            'constructor'
        ].indexOf(i);
    }

    function h(i, j, k, l) {
        if (!_ub(i))
            return;
        const m = j[i],
            n = k[i];
        _F(m) && _F(n) ? _h(m, n, l) : j[i] = _tb(n);
    }

    function _h(i, j, k) {
        const l = _E(j) ? j : [j],
            m = l.length;
        if (!_F(i))
            return i;
        const n = (k = k || {}).merger || _vb;
        let o;
        for (let p = 0; p < m; ++p) {
            if (o = l[p], !_F(o))
                continue;
            const q = Object.keys(o);
            for (let r = 0, s = q.length; r < s; ++r)
                n(q[r], i, o, k);
        }
        return i;
    }

    function _h(i, j) {
        return _wb(i, j, {
            merger: _h
        });
    }

    function _h(i, j, k) {
        if (!_ub(i))
            return;
        const l = j[i],
            m = k[i];
        _F(l) && _F(m) ? _k(l, m) : Object.prototype.hasOwnProperty.call(j, i) || (j[i] = _tb(m));
    }
    const h = {
        '': _j => _j,
        x: _j => _j.x,
        y: _j => _j.y
    };

    function _i(_j, k) {
        const l = h[k] || (h[k] = function(m) {
            const n = function(o) {
                const p = o.split('.'),
                    q = [];
                let r = '';
                for (const s of p)
                    r += s, r.endsWith('\\') ? r = r.slice(0, -1) + '.' : (q.push(r), r = '');
                return q;
            }(m);
            return m => {
                for (const o of n) {
                    if ('' === o)
                        break;
                    m = m && m[o];
                }
                return m;
            };
        }(k));
        return l(_j);
    }

    function _i(j) {
        return j.charAt(0).toUpperCase() + j.slice(1);
    }
    const _i = _m => void 0 !== _m,
        _j = _m => 'function' == typeof _m,
        _k = (_m, b) => {
            if (_m.size !== b.size)
                return !1;
            for (const l of _m)
                if (!b.has(l))
                    return !1;
            return !0;
        };

    function _l(_m) {
        return 'mouseup' === _m.type || 'click' === _m.type || 'contextmenu' === _m.type;
    }
    const _l = Math.PI,
        _m = 2 * _l,
        n = _m + _l,
        o = Number.POSITIVE_INFINITY,
        p = _l / 180,
        _q = _l / 2,
        r = _l / 4,
        s = 2 * _l / 3,
        _t = Math.log10,
        _u = Math.sign;

    function _v(w, x, y) {
        return Math.abs(w - x) < y;
    }

    function _v(w) {
        const x = Math.round(w);
        w = j(w, x, w / 1000) ? x : w;
        const y = Math.pow(10, Math.floor(_t(w))),
            z = w / y;
        return (z <= 1 ? 1 : z <= 2 ? 2 : z <= 5 ? 5 : 10) * y;
    }

    function _v(w) {
        const x = [],
            y = Math.sqrt(w);
        let z;
        for (z = 1; z < y; z++)
            w % z == 0 && (x.push(z), x.push(w / z));
        return y === (0 | y) && x.push(y), x.sort((w, x) => w - x).pop(), x;
    }

    function _v(w) {
        return !isNaN(parseFloat(w)) && isFinite(w);
    }

    function _v(w, x) {
        const y = Math.round(w);
        return y - x <= w && y + x >= w;
    }

    function _v(w, x, y) {
        let z, A, B;
        for (z = 0, A = w.length; z < A; z++)
            B = w[z][y], isNaN(B) || (x.min = Math.min(x.min, B), x.max = Math.max(x.max, B));
    }

    function _v(w) {
        return w * (_l / 180);
    }

    function _v(w) {
        return w * (180 / _l);
    }

    function _v(w) {
        if (!_G(w))
            return;
        let x = 1,
            y = 0;
        for (; Math.round(w * x) / x !== w;)
            x *= 10, y++;
        return y;
    }

    function _v(w, x) {
        const y = x.x - w.x,
            z = x.y - w.y,
            A = Math.sqrt(y * y + z * z);
        let B = Math.atan2(z, y);
        return B < -0.5 * _l && (B += _m), {
            angle: B,
            distance: A
        };
    }

    function _v(w, x) {
        return Math.sqrt(Math.pow(x.x - w.x, 2) + Math.pow(x.y - w.y, 2));
    }

    function _v(w, x) {
        return (w - x + n) % _m - _l;
    }

    function _v(w) {
        return (w % _m + _m) % _m;
    }

    function _v(w, x, y, z) {
        const A = J(w),
            B = J(x),
            C = J(y),
            D = J(B - A),
            _E = J(C - A),
            _F = J(A - B),
            _G = J(A - C);
        return A === B || A === C || z && B === C || D > _E && _F < _G;
    }

    function _v(w, x, y) {
        return Math.max(x, Math.min(y, w));
    }

    function _v(w) {
        return et(w, -32768, 32767);
    }

    function _v(w, x, y, z = 0.000001) {
        return w >= Math.min(x, y) - z && w <= Math.max(x, y) + z;
    }

    function _v(w, x, y) {
        y = y || (y => w[y] < x);
        let z, A = w.length - 1,
            B = 0;
        for (; A - B > 1;)
            z = B + A >> 1, y(z) ? B = z : A = z;
        return {
            lo: B,
            hi: A
        };
    }
    const _v = (_y, b, a, c) => nt(_y, a, c ? c => {
            const w = _y[c][b];
            return w < a || w === a && _y[c + 1][b] === a;
        } : c => _y[c][b] < a),
        _w = (_y, b, a) => nt(_y, a, c => _y[c][b] >= a);

    function _x(_y, z, A) {
        let B = 0,
            C = _y.length;
        for (; B < C && _y[B] < z;)
            B++;
        for (; C > B && _y[C - 1] > A;)
            C--;
        return B > 0 || C < _y.length ? _y.slice(B, C) : _y;
    }
    const x = [
        'push',
        'pop',
        'shift',
        'splice',
        'unshift'
    ];

    function _y(z, A) {
        z._chartjs ? z._chartjs.listeners.push(A) : (Object.defineProperty(z, '_chartjs', {
            configurable: !0,
            enumerable: !1,
            value: {
                listeners: [A]
            }
        }), x.forEach(A => {
            const B = '_onData' + _m(A),
                C = z[A];
            Object.defineProperty(z, A, {
                configurable: !0,
                enumerable: !1,
                value(...A) {
                    const D = C.apply(this, A);
                    return z._chartjs.listeners.forEach(z => {
                        'function' == typeof z[B] && z[B](...A);
                    }), D;
                }
            });
        }));
    }

    function _y(z, A) {
        const B = z._chartjs;
        if (!B)
            return;
        const C = B.listeners,
            D = C.indexOf(A); -
        1 !== D && C.splice(D, 1), C.length > 0 || (x.forEach(A => {
            delete z[A];
        }), delete z._chartjs);
    }

    function _y(z) {
        const A = new Set();
        let B, C;
        for (B = 0, C = z.length; B < C; ++B)
            A.add(z[B]);
        return A.size === C ? z : Array.from(A);
    }
    const _y = 'undefined' == typeof window ? function(z) {
        return z();
    } : window.requestAnimationFrame;

    function _z(A, B) {
        let C = [],
            D = !1;
        return function(...d) {
            C = d, D || (D = !0, _y.call(window, () => {
                D = !1, A.apply(B, C);
            }));
        };
    }

    function _z(A, B) {
        let C;
        return function(...c) {
            return B ? (clearTimeout(C), C = setTimeout(A, B, c)) : A.apply(this, c), B;
        };
    }
    const _z = _D => 'start' === _D ? 'left' : 'end' === _D ? 'right' : 'center',
        _A = (_D, b, a) => 'start' === _D ? b : 'end' === _D ? a : (b + a) / 2,
        _B = (_D, b, a, c) => _D === (c ? 'left' : 'right') ? a : 'center' === _D ? (b + a) / 2 : b;

    function _C(_D, E, F) {
        const G = E.length;
        let H = 0,
            I = G;
        if (_D._sorted) {
            const {
                iScale: J,
                _parsed: K
            } = _D, L = J.axis, {
                min: M,
                max: N,
                minDefined: O,
                maxDefined: P
            } = J.getUserBounds();
            O && (H = et(Math.min(_v(K, J.axis, M).lo, F ? G : _v(E, L, J.getPixelForValue(M)).lo), 0, G - 1)), I = P ? et(Math.max(_v(K, J.axis, N, !0).hi + 1, F ? 0 : _v(E, L, J.getPixelForValue(N), !0).hi + 1), H, G) - H : G - H;
        }
        return {
            start: H,
            count: I
        };
    }

    function _C(D) {
        const {
            xScale: E,
            yScale: F,
            _scaleRanges: G
        } = D, H = {
            xmin: E.min,
            xmax: E.max,
            ymin: F.min,
            ymax: F.max
        };
        if (!G)
            return D._scaleRanges = H, !0;
        const I = G.xmin !== E.min || G.xmax !== E.max || G.ymin !== F.min || G.ymax !== F.max;
        return Object.assign(G, H), I;
    }
    const C = _G => 0 === _G || 1 === _G,
        _D = (_G, b, a) => -Math.pow(2, 10 * (_G -= 1)) * Math.sin((_G - b) * _m / a),
        _E = (_G, b, a) => Math.pow(2, -10 * _G) * Math.sin((_G - b) * _m / a) + 1,
        _F = {
            linear: _G => _G,
            easeInQuad: _G => _G * _G,
            easeOutQuad: _G => -_G * (_G - 2),
            easeInOutQuad: _G => (_G /= 0.5) < 1 ? 0.5 * _G * _G : -0.5 * (--_G * (_G - 2) - 1),
            easeInCubic: _G => _G * _G * _G,
            easeOutCubic: _G => (_G -= 1) * _G * _G + 1,
            easeInOutCubic: _G => (_G /= 0.5) < 1 ? 0.5 * _G * _G * _G : 0.5 * ((_G -= 2) * _G * _G + 2),
            easeInQuart: _G => _G * _G * _G * _G,
            easeOutQuart: _G => -((_G -= 1) * _G * _G * _G - 1),
            easeInOutQuart: _G => (_G /= 0.5) < 1 ? 0.5 * _G * _G * _G * _G : -0.5 * ((_G -= 2) * _G * _G * _G - 2),
            easeInQuint: _G => _G * _G * _G * _G * _G,
            easeOutQuint: _G => (_G -= 1) * _G * _G * _G * _G + 1,
            easeInOutQuint: _G => (_G /= 0.5) < 1 ? 0.5 * _G * _G * _G * _G * _G : 0.5 * ((_G -= 2) * _G * _G * _G * _G + 2),
            easeInSine: _G => 1 - Math.cos(_G * _q),
            easeOutSine: _G => Math.sin(_G * _q),
            easeInOutSine: _G => -0.5 * (Math.cos(_l * _G) - 1),
            easeInExpo: _G => 0 === _G ? 0 : Math.pow(2, 10 * (_G - 1)),
            easeOutExpo: _G => 1 === _G ? 1 : 1 - Math.pow(2, -10 * _G),
            easeInOutExpo: _G => C(_G) ? _G : _G < 0.5 ? 0.5 * Math.pow(2, 10 * (2 * _G - 1)) : 0.5 * (2 - Math.pow(2, -10 * (2 * _G - 1))),
            easeInCirc: _G => _G >= 1 ? _G : -(Math.sqrt(1 - _G * _G) - 1),
            easeOutCirc: _G => Math.sqrt(1 - (_G -= 1) * _G),
            easeInOutCirc: _G => (_G /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - _G * _G) - 1) : 0.5 * (Math.sqrt(1 - (_G -= 2) * _G) + 1),
            easeInElastic: _G => C(_G) ? _G : _D(_G, 0.075, 0.3),
            easeOutElastic: _G => C(_G) ? _G : _E(_G, 0.075, 0.3),
            easeInOutElastic(_G) {
                const H = 0.1125;
                return C(_G) ? _G : _G < 0.5 ? 0.5 * _D(2 * _G, H, 0.45) : 0.5 + 0.5 * _E(2 * _G - 1, H, 0.45);
            },
            easeInBack(G) {
                const H = 1.70158;
                return G * G * ((H + 1) * G - H);
            },
            easeOutBack(G) {
                const H = 1.70158;
                return (G -= 1) * G * ((H + 1) * G + H) + 1;
            },
            easeInOutBack(G) {
                let H = 1.70158;
                return (G /= 0.5) < 1 ? G * G * ((1 + (H *= 1.525)) * G - H) * 0.5 : 0.5 * ((G -= 2) * G * ((1 + (H *= 1.525)) * G + H) + 2);
            },
            easeInBounce: _G => 1 - _F.easeOutBounce(1 - _G),
            easeOutBounce(_G) {
                const H = 7.5625,
                    I = 2.75;
                return _G < 1 / I ? H * _G * _G : _G < 2 / I ? H * (_G -= 1.5 / I) * _G + 0.75 : _G < 2.5 / I ? H * (_G -= 2.25 / I) * _G + 0.9375 : H * (_G -= 2.625 / I) * _G + 0.984375;
            },
            easeInOutBounce: _H => _H < 0.5 ? 0.5 * _F.easeInBounce(2 * _H) : 0.5 * _F.easeOutBounce(2 * _H - 1) + 0.5
        };

    function _G(_H) {
        if (_H && 'object' == typeof _H) {
            const I = _H.toString();
            return '[object CanvasPattern]' === I || '[object CanvasGradient]' === I;
        }
        return !1;
    }

    function _G(H) {
        return kt(H) ? H : new(0, d.Color)(H);
    }

    function G(H) {
        return kt(H) ? H : new(0, d.Color)(H).saturate(0.5).darken(0.1).hexString();
    }
    const _G = [
            'x',
            'y',
            'borderWidth',
            'radius',
            'tension'
        ],
        H = [
            'color',
            'borderColor',
            'backgroundColor'
        ];
    const I = new Map();

    function _J(K, L, M) {
        return function(N, O) {
            O = O || {};
            const P = N + JSON.stringify(O);
            let Q = I.get(P);
            return Q || (Q = new Intl.NumberFormat(N, O), I.set(P, Q)), Q;
        }(L, M).format(K);
    }
    const _J = {
        values: _K => _S(_K) ? _K : '' + _K,
        numeric(_K, L, M) {
            if (0 === _K)
                return '0';
            const N = this.chart.options.locale;
            let O, P = _K;
            if (M.length > 1) {
                const Q = Math.max(Math.abs(M[0].value), Math.abs(M[M.length - 1].value));
                (Q < 0.0001 || Q > 1000000000000000) && (O = 'scientific'), P = function(R, S) {
                    let T = S.length > 3 ? S[2].value - S[1].value : S[1].value - S[0].value;
                    Math.abs(T) >= 1 && R !== Math.floor(R) && (T = R - Math.floor(R));
                    return T;
                }(_K, M);
            }
            const Q = _t(Math.abs(P)),
                R = Math.max(Math.min(-1 * Math.floor(Q), 20), 0),
                _S = {
                    notation: O,
                    minimumFractionDigits: R,
                    maximumFractionDigits: R
                };
            return Object.assign(_S, this.options.ticks.format), Tt(_K, N, _S);
        },
        logarithmic(K, L, M) {
            if (0 === K)
                return '0';
            const N = M[L].significand || K / Math.pow(10, Math.floor(_t(K)));
            return [
                1,
                2,
                3,
                5,
                10,
                15
            ].includes(N) || L > 0.8 * M.length ? _J.numeric.call(this, K, L, M) : '';
        }
    };
    var _K = {
        formatters: _J
    };
    const _L = Object.create(null),
        _M = Object.create(null);

    function N(O, P) {
        if (!P)
            return O;
        const Q = P.split('.');
        for (let R = 0, S = Q.length; R < S; ++R) {
            const T = Q[R];
            O = O[T] || (O[T] = Object.create(null));
        }
        return O;
    }

    function N(O, P, Q) {
        return 'string' == typeof P ? _wb(Ft(O, P), Q) : _wb(Ft(O, ''), P);
    }
    class N {
        set(O, P) {
            return It(this, O, P);
        }
        get(O) {
            return Ft(this, O);
        }
        describe(O, P) {
            return It(_M, O, P);
        }
        override(O, P) {
            return It(_L, O, P);
        }
        route(O, P, Q, R) {
            const S = Ft(this, O),
                T = Ft(this, Q),
                U = '_' + P;
            Object.defineProperties(S, {
                [U]: {
                    value: S[P],
                    writable: !0
                },
                [P]: {
                    enumerable: !0,
                    get() {
                        const V = this[U],
                            W = T[R];
                        return _Y(V) ? Object.assign({}, W, V) : _ab(V, W);
                    },
                    set(V) {
                        this[U] = V;
                    }
                }
            });
        }
        apply(O) {
            O.forEach(O => O(this));
        }
        constructor(O, P) {
            this.animation = void 0, this.backgroundColor = 'rgba(0,0,0,0.1)', this.borderColor = 'rgba(0,0,0,0.1)', this.color = '#666', this.datasets = {}, this.devicePixelRatio = O => O.chart.platform.getDevicePixelRatio(), this.elements = {}, this.events = [
                'mousemove',
                'mouseout',
                'click',
                'touchstart',
                'touchmove'
            ], this.font = {
                family: '\'Helvetica Neue\', \'Helvetica\', \'Arial\', sans-serif',
                size: 12,
                style: 'normal',
                lineHeight: 1.2,
                weight: null
            }, this.hover = {}, this.hoverBackgroundColor = (O, P) => Pt(P.backgroundColor), this.hoverBorderColor = (O, P) => Pt(P.borderColor), this.hoverColor = (O, P) => Pt(P.color), this.indexAxis = 'x', this.interaction = {
                mode: 'nearest',
                intersect: !0,
                includeInvisible: !1
            }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.drawActiveElementsOnTop = !0, this.describe(O), this.apply(P);
        }
    }
    var _O = new N({
        _scriptable: _P => !_P.startsWith('on'),
        _indexable: _P => 'events' !== _P,
        hover: {
            _fallback: 'interaction'
        },
        interaction: {
            _scriptable: !1,
            _indexable: !1
        }
    }, [
        function(_P) {
            _P.set('animation', {
                delay: void 0,
                duration: 1000,
                easing: 'easeOutQuart',
                fn: void 0,
                from: void 0,
                loop: void 0,
                to: void 0,
                type: void 0
            }), _P.describe('animation', {
                _fallback: !1,
                _indexable: !1,
                _scriptable: _P => 'onProgress' !== _P && 'onComplete' !== _P && 'fn' !== _P
            }), _P.set('animations', {
                colors: {
                    type: 'color',
                    properties: H
                },
                numbers: {
                    type: 'number',
                    properties: _G
                }
            }), _P.describe('animations', {
                _fallback: 'animation'
            }), _P.set('transitions', {
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
                            from: 'transparent'
                        },
                        visible: {
                            type: 'boolean',
                            duration: 0
                        }
                    }
                },
                hide: {
                    animations: {
                        colors: {
                            to: 'transparent'
                        },
                        visible: {
                            type: 'boolean',
                            easing: 'linear',
                            fn: _P => 0 | _P
                        }
                    }
                }
            });
        },
        function(P) {
            P.set('layout', {
                autoPadding: !0,
                padding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                }
            });
        },
        function(P) {
            P.set('scale', {
                display: !0,
                offset: !1,
                reverse: !1,
                beginAtZero: !1,
                bounds: 'ticks',
                grace: 0,
                grid: {
                    display: !0,
                    lineWidth: 1,
                    drawOnChartArea: !0,
                    drawTicks: !0,
                    tickLength: 8,
                    tickWidth: (P, b) => b.lineWidth,
                    tickColor: (P, b) => b.color,
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
                    text: '',
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
                    textStrokeColor: '',
                    padding: 3,
                    display: !0,
                    autoSkip: !0,
                    autoSkipPadding: 3,
                    labelOffset: 0,
                    callback: _K.formatters.values,
                    minor: {},
                    major: {},
                    align: 'center',
                    crossAlign: 'near',
                    showLabelBackdrop: !1,
                    backdropColor: 'rgba(255, 255, 255, 0.75)',
                    backdropPadding: 2
                }
            }), P.route('scale.ticks', 'color', '', 'color'), P.route('scale.grid', 'color', '', 'borderColor'), P.route('scale.border', 'color', '', 'borderColor'), P.route('scale.title', 'color', '', 'color'), P.describe('scale', {
                _fallback: !1,
                _scriptable: P => !P.startsWith('before') && !P.startsWith('after') && 'callback' !== P && 'parser' !== P,
                _indexable: P => 'borderDash' !== P && 'tickBorderDash' !== P && 'dash' !== P
            }), P.describe('scales', {
                _fallback: 'scale'
            }), P.describe('scale.ticks', {
                _scriptable: P => 'backdropPadding' !== P && 'callback' !== P,
                _indexable: P => 'backdropPadding' !== P
            });
        }
    ]);

    function _P(Q, R, S, T, U) {
        let V = R[U];
        return V || (V = R[U] = Q.measureText(U).width, S.push(U)), V > T && (T = V), T;
    }

    function _P(Q, R, S, T) {
        let U = (T = T || {}).data = T.data || {},
            V = T.garbageCollect = T.garbageCollect || [];
        T.font !== R && (U = T.data = {}, V = T.garbageCollect = [], T.font = R), Q.save(), Q.font = R;
        let W = 0;
        const X = S.length;
        let _Y, Z, $, _ab, bb;
        for (_Y = 0; _Y < X; _Y++)
            if (_ab = S[_Y], null != _ab && !0 !== _Y(_ab))
                W = Bt(Q, U, V, W, _ab);
            else if (_Y(_ab))
            for (Z = 0, $ = _ab.length; Z < $; Z++)
                bb = _ab[Z], null == bb || _Y(bb) || (W = Bt(Q, U, V, W, bb));
        Q.restore();
        const cb = V.length / 2;
        if (cb > S.length) {
            for (_Y = 0; _Y < cb; _Y++)
                delete U[V[_Y]];
            V.splice(0, cb);
        }
        return W;
    }

    function _P(Q, R, S) {
        const T = Q.currentDevicePixelRatio,
            U = 0 !== S ? Math.max(S / 2, 0.5) : 0;
        return Math.round((R - U) * T) / T + U;
    }

    function _P(Q, R) {
        (R = R || Q.getContext('2d')).save(), R.resetTransform(), R.clearRect(0, 0, Q.width, Q.height), R.restore();
    }

    function _P(Q, R, S, T) {
        _P(Q, R, S, T, null);
    }

    function _P(Q, R, S, T, U) {
        let V, W, X, _Y, Z, $, ab, bb;
        const cb = R.pointStyle,
            db = R.rotation,
            eb = R.radius;
        let fb = (db || 0) * p;
        if (cb && 'object' == typeof cb && (V = cb.toString(), '[object HTMLImageElement]' === V || '[object HTMLCanvasElement]' === V))
            return Q.save(), Q.translate(S, T), Q.rotate(fb), Q.drawImage(cb, -cb.width / 2, -cb.height / 2, cb.width, cb.height), void Q.restore();
        if (!(isNaN(eb) || eb <= 0)) {
            switch (Q.beginPath(), cb) {
                default:
                    U ? Q.ellipse(S, T, U / 2, eb, 0, 0, _m) : Q.arc(S, T, eb, 0, _m), Q.closePath();
                    break;
                case 'triangle':
                    $ = U ? U / 2 : eb, Q.moveTo(S + Math.sin(fb) * $, T - Math.cos(fb) * eb), fb += s, Q.lineTo(S + Math.sin(fb) * $, T - Math.cos(fb) * eb), fb += s, Q.lineTo(S + Math.sin(fb) * $, T - Math.cos(fb) * eb), Q.closePath();
                    break;
                case 'rectRounded':
                    Z = 0.516 * eb, _Y = eb - Z, W = Math.cos(fb + r) * _Y, ab = Math.cos(fb + r) * (U ? U / 2 - Z : _Y), X = Math.sin(fb + r) * _Y, bb = Math.sin(fb + r) * (U ? U / 2 - Z : _Y), Q.arc(S - ab, T - X, Z, fb - _l, fb - _q), Q.arc(S + bb, T - W, Z, fb - _q, fb), Q.arc(S + ab, T + X, Z, fb, fb + _q), Q.arc(S - bb, T + W, Z, fb + _q, fb + _l), Q.closePath();
                    break;
                case 'rect':
                    if (!db) {
                        _Y = Math.SQRT1_2 * eb, $ = U ? U / 2 : _Y, Q.rect(S - $, T - _Y, 2 * $, 2 * _Y);
                        break;
                    }
                    fb += r;
                case 'rectRot':
                    ab = Math.cos(fb) * (U ? U / 2 : eb), W = Math.cos(fb) * eb, X = Math.sin(fb) * eb, bb = Math.sin(fb) * (U ? U / 2 : eb), Q.moveTo(S - ab, T - X), Q.lineTo(S + bb, T - W), Q.lineTo(S + ab, T + X), Q.lineTo(S - bb, T + W), Q.closePath();
                    break;
                case 'crossRot':
                    fb += r;
                case 'cross':
                    ab = Math.cos(fb) * (U ? U / 2 : eb), W = Math.cos(fb) * eb, X = Math.sin(fb) * eb, bb = Math.sin(fb) * (U ? U / 2 : eb), Q.moveTo(S - ab, T - X), Q.lineTo(S + ab, T + X), Q.moveTo(S + bb, T - W), Q.lineTo(S - bb, T + W);
                    break;
                case 'star':
                    ab = Math.cos(fb) * (U ? U / 2 : eb), W = Math.cos(fb) * eb, X = Math.sin(fb) * eb, bb = Math.sin(fb) * (U ? U / 2 : eb), Q.moveTo(S - ab, T - X), Q.lineTo(S + ab, T + X), Q.moveTo(S + bb, T - W), Q.lineTo(S - bb, T + W), fb += r, ab = Math.cos(fb) * (U ? U / 2 : eb), W = Math.cos(fb) * eb, X = Math.sin(fb) * eb, bb = Math.sin(fb) * (U ? U / 2 : eb), Q.moveTo(S - ab, T - X), Q.lineTo(S + ab, T + X), Q.moveTo(S + bb, T - W), Q.lineTo(S - bb, T + W);
                    break;
                case 'line':
                    W = U ? U / 2 : Math.cos(fb) * eb, X = Math.sin(fb) * eb, Q.moveTo(S - W, T - X), Q.lineTo(S + W, T + X);
                    break;
                case 'dash':
                    Q.moveTo(S, T), Q.lineTo(S + Math.cos(fb) * (U ? U / 2 : eb), T + Math.sin(fb) * eb);
                    break;
                case !1:
                    Q.closePath();
            }
            Q.fill(), R.borderWidth > 0 && Q.stroke();
        }
    }

    function _P(Q, R, S) {
        return S = S || 0.5, !R || Q && Q.x > R.left - S && Q.x < R.right + S && Q.y > R.top - S && Q.y < R.bottom + S;
    }

    function _P(Q, R) {
        Q.save(), Q.beginPath(), Q.rect(R.left, R.top, R.right - R.left, R.bottom - R.top), Q.clip();
    }

    function _P(Q) {
        Q.restore();
    }

    function _P(Q, R, S, T, U) {
        if (!R)
            return Q.lineTo(S.x, S.y);
        if ('middle' === U) {
            const V = (R.x + S.x) / 2;
            Q.lineTo(V, R.y), Q.lineTo(V, S.y);
        } else
            'after' === U != !!T ? Q.lineTo(R.x, S.y) : Q.lineTo(S.x, R.y);
        Q.lineTo(S.x, S.y);
    }

    function _P(Q, R, S, T) {
        if (!R)
            return Q.lineTo(S.x, S.y);
        Q.bezierCurveTo(T ? R.cp1x : R.cp2x, T ? R.cp1y : R.cp2y, T ? S.cp2x : S.cp1x, T ? S.cp2y : S.cp1y, S.x, S.y);
    }

    function _P(Q, R, S, T, U, V = {}) {
        const W = _Y(R) ? R : [R],
            X = V.strokeWidth > 0 && '' !== V.strokeColor;
        let Y, Z;
        for (Q.save(), Q.font = U.string, function($, ab) {
                ab.translation && $.translate(ab.translation[0], ab.translation[1]);
                _X(ab.rotation) || $.rotate(ab.rotation);
                ab.color && ($.fillStyle = ab.color);
                ab.textAlign && ($.textAlign = ab.textAlign);
                ab.textBaseline && ($.textBaseline = ab.textBaseline);
            }(Q, V), Y = 0; Y < W.length; ++Y)
            Z = W[Y], V.backdrop && _P(Q, V.backdrop), X && (V.strokeColor && (Q.strokeStyle = V.strokeColor), _X(V.strokeWidth) || (Q.lineWidth = V.strokeWidth), Q.strokeText(Z, S, T, V.maxWidth)), Q.fillText(Z, S, T, V.maxWidth), _P(Q, S, T, Z, V), T += U.lineHeight;
        Q.restore();
    }

    function _P(Q, R, S, T, U) {
        if (U.strikethrough || U.underline) {
            const V = Q.measureText(T),
                W = R - V.actualBoundingBoxLeft,
                _X = R + V.actualBoundingBoxRight,
                _Y = S - V.actualBoundingBoxAscent,
                Z = S + V.actualBoundingBoxDescent,
                $ = U.strikethrough ? (_Y + Z) / 2 : Z;
            Q.strokeStyle = Q.fillStyle, Q.beginPath(), Q.lineWidth = U.decorationWidth || 2, Q.moveTo(W, $), Q.lineTo(_X, $), Q.stroke();
        }
    }

    function _P(Q, R) {
        const S = Q.fillStyle;
        Q.fillStyle = R.color, Q.fillRect(R.left, R.top, R.width, R.height), Q.fillStyle = S;
    }

    function _P(Q, R) {
        const {
            x: S,
            y: T,
            w: U,
            h: V,
            radius: W
        } = R;
        Q.arc(S + W.topLeft, T + W.topLeft, W.topLeft, -_q, _l, !0), Q.lineTo(S, T + V - W.bottomLeft), Q.arc(S + W.bottomLeft, T + V - W.bottomLeft, W.bottomLeft, _l, _q, !0), Q.lineTo(S + U - W.bottomRight, T + V), Q.arc(S + U - W.bottomRight, T + V - W.bottomRight, W.bottomRight, _q, 0, !0), Q.lineTo(S + U, T + W.topRight), Q.arc(S + U - W.topRight, T + W.topRight, W.topRight, 0, -_q, !0), Q.lineTo(S + W.topLeft, T);
    }
    const _P = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
        _Q = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;

    function _R(S, T) {
        const U = ('' + S).match(_P);
        if (!U || 'normal' === U[1])
            return 1.2 * T;
        switch (S = +U[2], U[3]) {
            case 'px':
                return S;
            case '%':
                S /= 100;
        }
        return T * S;
    }

    function _R(S, T) {
        const U = {},
            V = _db(T),
            W = V ? Object.keys(T) : T,
            X = _db(S) ? V ? U => _jb(S[U], S[T[U]]) : T => S[T] : () => S;
        for (const Y of W)
            U[Y] = +X(Y) || 0;
        return U;
    }

    function _R(S) {
        return se(S, {
            top: 'y',
            right: 'x',
            bottom: 'y',
            left: 'x'
        });
    }

    function _R(S) {
        return se(S, [
            'topLeft',
            'topRight',
            'bottomLeft',
            'bottomRight'
        ]);
    }

    function _R(S) {
        const T = ne(S);
        return T.width = T.left + T.right, T.height = T.top + T.bottom, T;
    }

    function _R(S, T) {
        S = S || {}, T = T || _O.font;
        let U = _jb(S.size, T.size);
        'string' == typeof U && (U = parseInt(U, 10));
        let V = _jb(S.style, T.style);
        V && !('' + V).match(_Q) && (console.warn('Invalid font style specified: "' + V + '"'), V = void 0);
        const W = {
            family: _jb(S.family, T.family),
            lineHeight: ie(_jb(S.lineHeight, T.lineHeight), U),
            size: U,
            style: V,
            weight: _jb(S.weight, T.weight),
            string: ''
        };
        return W.string = function(X) {
            return !X || _Z(X.size) || _Z(X.family) ? null : (X.style ? X.style + ' ' : '') + (X.weight ? X.weight + ' ' : '') + X.size + 'px ' + X.family;
        }(W), W;
    }

    function _R(S, T, U, V) {
        let W, X, Y, _Z = !0;
        for (W = 0, X = S.length; W < X; ++W)
            if (Y = S[W], void 0 !== Y && (void 0 !== T && 'function' == typeof Y && (Y = Y(T), _Z = !1), void 0 !== U && _ob(Y) && (Y = Y[U % Y.length], _Z = !1), void 0 !== Y))
                return V && !_Z && (V.cacheable = !1), Y;
    }

    function _R(S, T, U) {
        const {
            min: V,
            max: W
        } = S, X = _g(T, (W - V) / 2), Y = (S, T) => U && 0 === S ? 0 : S + T;
        return {
            min: Y(V, -Math.abs(X)),
            max: Y(W, X)
        };
    }

    function _R(S, T) {
        return Object.assign(Object.create(S), T);
    }

    function _R(S, T = [''], U = V, W, X = () => V[0]) {
        _i(W) || (W = _U('_fallback', V));
        const Y = {
            [Symbol.toStringTag]: 'Object',
            _cacheable: !0,
            _scopes: V,
            _rootScopes: U,
            _fallback: W,
            _getTarget: X,
            override: X => _R([
                X,
                ...V
            ], T, U, W)
        };
        return new Proxy(Y, {
            deleteProperty: (T, U) => (delete T[U], delete T._keys, delete V[0][U], !0),
            get: (U, W) => _T(U, W, () => function(Z, $, ab, bb) {
                let cb;
                for (const db of $)
                    if (cb = _U(_R(db, Z), ab), _i(cb))
                        return _S(Z, cb) ? _U(ab, bb, Z, cb) : cb;
            }(W, T, V, U)),
            getOwnPropertyDescriptor: (V, T) => Reflect.getOwnPropertyDescriptor(V._scopes[0], T),
            getPrototypeOf: () => Reflect.getPrototypeOf(V[0]),
            has: (V, T) => _U(V).includes(T),
            ownKeys: V => _U(V),
            set(Z, $, ab) {
                const bb = Z._storage || (Z._storage = X());
                return Z[$] = bb[$] = ab, delete Z._keys, !0;
            }
        });
    }

    function _R(S, T, U, V) {
        const W = {
            _cacheable: !1,
            _proxy: S,
            _context: T,
            _subProxy: U,
            _stack: new Set(),
            _descriptors: _R(S, V),
            setContext: T => _R(S, T, U, V),
            override: W => _R(S.override(W), T, U, V)
        };
        return new Proxy(W, {
            deleteProperty: (T, U) => (delete T[U], delete S[U], !0),
            get: (S, T, U) => _T(S, T, () => function(X, Y, Z) {
                const {
                    _proxy: $,
                    _context: ab,
                    _subProxy: bb,
                    _descriptors: cb
                } = X;
                let db = $[Y];
                _j(db) && cb.isScriptable(Y) && (db = function(eb, fb, gb, hb) {
                    const {
                        _proxy: ib,
                        _context: jb,
                        _subProxy: kb,
                        _stack: lb
                    } = gb;
                    if (lb.has(eb))
                        throw new Error('Recursion detected: ' + Array.from(lb).join('->') + '->' + eb);
                    lb.add(eb), fb = fb(jb, kb || hb), lb.delete(eb), _S(eb, fb) && (fb = _U(ib._scopes, ib, eb, fb));
                    return fb;
                }(Y, db, X, Z));
                _ob(db) && db.length && (db = function(eb, fb, gb, hb) {
                    const {
                        _proxy: ib,
                        _context: jb,
                        _subProxy: kb,
                        _descriptors: lb
                    } = gb;
                    if (_i(jb.index) && hb(eb))
                        fb = fb[jb.index % fb.length];
                    else if (_db(fb[0])) {
                        const mb = fb,
                            nb = ib._scopes.filter(eb => eb !== mb);
                        fb = [];
                        for (const _ob of mb) {
                            const pb = _U(nb, ib, eb, _ob);
                            fb.push(_R(pb, jb, kb && kb[eb], lb));
                        }
                    }
                    return fb;
                }(Y, db, X, cb.isIndexable));
                _S(Y, db) && (db = _R(db, ab, bb && bb[Y], cb));
                return db;
            }(S, T, U)),
            getOwnPropertyDescriptor: (T, U) => T._descriptors.allKeys ? Reflect.has(S, U) ? {
                enumerable: !0,
                configurable: !0
            } : void 0 : Reflect.getOwnPropertyDescriptor(S, U),
            getPrototypeOf: () => Reflect.getPrototypeOf(S),
            has: (T, U) => Reflect.has(S, U),
            ownKeys: () => Reflect.ownKeys(S),
            set: (T, U, V) => (S[U] = V, delete T[U], !0)
        });
    }

    function _R(S, T = {
        scriptable: !0,
        indexable: !0
    }) {
        const {
            _scriptable: U = T.scriptable,
            _indexable: V = T.indexable,
            _allKeys: W = T.allKeys
        } = S;
        return {
            allKeys: W,
            scriptable: U,
            indexable: V,
            isScriptable: _j(U) ? U : () => U,
            isIndexable: _j(V) ? V : () => V
        };
    }
    const _R = (_U, b) => _U ? _U + _m(b) : b,
        _S = (_U, b) => _db(b) && 'adapters' !== _U && (null === Object.getPrototypeOf(b) || b.constructor === Object);

    function _T(_U, V, W) {
        if (Object.prototype.hasOwnProperty.call(_U, V))
            return _U[V];
        const X = W();
        return _U[V] = X, X;
    }

    function _T(U, V, W) {
        return _j(U) ? U(V, W) : U;
    }
    const _T = (_V, b) => !0 === _V ? b : 'string' == typeof _V ? _l(b, _V) : void 0;

    function _U(_V, W, X, Y, Z) {
        for (const $ of W) {
            const ab = _T(X, $);
            if (ab) {
                _V.add(ab);
                const bb = xe(ab._fallback, X, Z);
                if (_i(bb) && bb !== X && bb !== Y)
                    return bb;
            } else if (!1 === ab && _i(Y) && X !== Y)
                return null;
        }
        return !1;
    }

    function _U(V, W, X, Y) {
        const Z = W._rootScopes,
            $ = xe(W._fallback, X, Y),
            ab = [
                ...V,
                ...Z
            ],
            bb = new Set();
        bb.add(Y);
        let cb = _U(bb, ab, X, $ || X, Y);
        return null !== cb && ((!_i($) || $ === X || (cb = _U(bb, ab, $, cb, Y), null !== cb)) && de(Array.from(bb), [''], Z, $, () => function(db, eb, fb) {
            const gb = db._getTarget();
            eb in gb || (gb[eb] = {});
            const hb = gb[eb];
            return _cb(hb) && _db(fb) ? fb : hb || {};
        }(W, X, Y)));
    }

    function _U(V, W, X, Y, Z) {
        for (; X;)
            X = _e(V, W, X, Y, Z);
        return X;
    }

    function _U(V, W) {
        for (const X of W) {
            if (!X)
                continue;
            const Y = X[V];
            if (_i(Y))
                return Y;
        }
    }

    function _U(V) {
        let W = V._keys;
        return W || (W = V._keys = function(X) {
            const Y = new Set();
            for (const Z of X)
                for (const $ of Object.keys(Z).filter($ => !$.startsWith('_')))
                    Y.add($);
            return Array.from(Y);
        }(V._scopes)), W;
    }

    function _U(V, W, X, Y) {
        const {
            iScale: Z
        } = V, {
            key: $ = 'r'
        } = this._parsing, ab = new Array(Y);
        let bb, _cb, _db, eb;
        for (bb = 0, _cb = Y; bb < _cb; ++bb)
            _db = bb + X, eb = W[_db], ab[bb] = {
                r: Z.parse(_l(eb, $), _db)
            };
        return ab;
    }
    const U = Number.EPSILON || 1e-14,
        _V = (_Y, b) => b < _Y.length && !_Y[b].skip && _Y[b],
        _W = _Y => 'x' === _Y ? 'y' : 'x';

    function _X(_Y, Z, $, ab) {
        const bb = _Y.skip ? Z : _Y,
            cb = Z,
            db = $.skip ? Z : $,
            eb = G(cb, bb),
            fb = G(db, cb);
        let gb = eb / (eb + fb),
            hb = fb / (eb + fb);
        gb = isNaN(gb) ? 0 : gb, hb = isNaN(hb) ? 0 : hb;
        const ib = ab * gb,
            _jb = ab * hb;
        return {
            previous: {
                x: cb.x - ib * (db.x - bb.x),
                y: cb.y - ib * (db.y - bb.y)
            },
            next: {
                x: cb.x + _jb * (db.x - bb.x),
                y: cb.y + _jb * (db.y - bb.y)
            }
        };
    }

    function _X(Y, Z = 'x') {
        const $ = _W(Z),
            ab = Y.length,
            bb = Array(ab).fill(0),
            cb = Array(ab);
        let db, eb, fb, gb = _V(Y, 0);
        for (db = 0; db < ab; ++db)
            if (eb = fb, fb = gb, gb = _V(Y, db + 1), fb) {
                if (gb) {
                    const hb = gb[Z] - fb[Z];
                    bb[db] = 0 !== hb ? (gb[$] - fb[$]) / hb : 0;
                }
                cb[db] = eb ? gb ? _u(bb[db - 1]) !== _u(bb[db]) ? 0 : (bb[db - 1] + bb[db]) / 2 : bb[db - 1] : bb[db];
            }!
        function(hb, ib, jb) {
            const kb = hb.length;
            let lb, mb, nb, ob, pb, qb = _V(hb, 0);
            for (let rb = 0; rb < kb - 1; ++rb)
                pb = qb, qb = _V(hb, rb + 1), pb && qb && (j(ib[rb], 0, U) ? jb[rb] = jb[rb + 1] = 0 : (lb = jb[rb] / ib[rb], mb = jb[rb + 1] / ib[rb], ob = Math.pow(lb, 2) + Math.pow(mb, 2), ob <= 9 || (nb = 3 / Math.sqrt(ob), jb[rb] = lb * nb * ib[rb], jb[rb + 1] = mb * nb * ib[rb])));
        }(Y, bb, cb),
        function(hb, ib, jb = 'x') {
            const kb = _W(jb),
                lb = hb.length;
            let mb, nb, ob, pb = _V(hb, 0);
            for (let qb = 0; qb < lb; ++qb) {
                if (nb = ob, ob = pb, pb = _V(hb, qb + 1), !ob)
                    continue;
                const rb = ob[jb],
                    sb = ob[kb];
                nb && (mb = (rb - nb[jb]) / 3, ob[`cp1${ jb }`] = rb - mb, ob[`cp1${ kb }`] = sb - mb * ib[qb]), pb && (mb = (pb[jb] - rb) / 3, ob[`cp2${ jb }`] = rb + mb, ob[`cp2${ kb }`] = sb + mb * ib[qb]);
            }
        }(Y, cb, Z);
    }

    function _X(Y, Z, $) {
        return Math.max(Math.min(Y, $), Z);
    }

    function _X(Y, Z, $, ab, bb) {
        let cb, db, eb, fb;
        if (Z.spanGaps && (Y = Y.filter(Y => !Y.skip)), 'monotone' === Z.cubicInterpolationMode)
            De(Y, bb);
        else {
            let gb = ab ? Y[Y.length - 1] : Y[0];
            for (cb = 0, db = Y.length; cb < db; ++cb)
                eb = Y[cb], fb = Ce(gb, eb, Y[Math.min(cb + 1, db - (ab ? 0 : 1)) % db], Z.tension), eb.cp1x = fb.previous.x, eb.cp1y = fb.previous.y, eb.cp2x = fb.next.x, eb.cp2y = fb.next.y, gb = eb;
        }
        Z.capBezierPoints && function(gb, hb) {
            let ib, jb, kb, lb, mb, nb = Yt(gb[0], hb);
            for (ib = 0, jb = gb.length; ib < jb; ++ib)
                mb = lb, lb = nb, nb = ib < jb - 1 && Yt(gb[ib + 1], hb), lb && (kb = gb[ib], mb && (kb.cp1x = Te(kb.cp1x, hb.left, hb.right), kb.cp1y = Te(kb.cp1y, hb.top, hb.bottom)), nb && (kb.cp2x = Te(kb.cp2x, hb.left, hb.right), kb.cp2y = Te(kb.cp2y, hb.top, hb.bottom)));
        }(Y, $);
    }

    function _X() {
        return 'undefined' != typeof window && 'undefined' != typeof document;
    }

    function _X(Y) {
        let Z = Y.parentNode;
        return Z && '[object ShadowRoot]' === Z.toString() && (Z = Z.host), Z;
    }

    function _X(Y, Z, $) {
        let ab;
        return 'string' == typeof Y ? (ab = parseInt(Y, 10), -1 !== Y.indexOf('%') && (ab = ab / 100 * Z.parentNode[$])) : ab = Y, ab;
    }
    const _X = _$ => _$.ownerDocument.defaultView.getComputedStyle(_$, null);
    const _Y = [
        'top',
        'right',
        'bottom',
        'left'
    ];

    function _Z(_$, ab, bb) {
        const cb = {};
        bb = bb ? '-' + bb : '';
        for (let db = 0; db < 4; db++) {
            const eb = _Y[db];
            cb[eb] = parseFloat(_$[ab + '-' + eb + bb]) || 0;
        }
        return cb.width = cb.left + cb.right, cb.height = cb.top + cb.bottom, cb;
    }

    function _Z($, ab) {
        if ('native' in $)
            return $;
        const {
            canvas: bb,
            currentDevicePixelRatio: cb
        } = ab, db = _X(bb), eb = 'border-box' === db.boxSizing, fb = ze(db, 'padding'), gb = ze(db, 'border', 'width'), {
            x: hb,
            y: ib,
            box: jb
        } = function(kb, lb) {
            const mb = kb.touches,
                nb = mb && mb.length ? mb[0] : kb,
                {
                    offsetX: ob,
                    offsetY: pb
                } = nb;
            let qb, rb, sb = !1;
            if (((kb, lb, mb) => (kb > 0 || lb > 0) && (!mb || !mb.shadowRoot))(ob, pb, kb.target))
                qb = ob, rb = pb;
            else {
                const tb = lb.getBoundingClientRect();
                qb = nb.clientX - tb.left, rb = nb.clientY - tb.top, sb = !0;
            }
            return {
                x: qb,
                y: rb,
                box: sb
            };
        }($, bb), kb = fb.left + (jb && gb.left), lb = fb.top + (jb && gb.top);
        let {
            width: mb,
            height: nb
        } = ab;
        return eb && (mb -= fb.width + gb.width, nb -= fb.height + gb.height), {
            x: Math.round((hb - kb) / mb * bb.width / cb),
            y: Math.round((ib - lb) / nb * bb.height / cb)
        };
    }
    const _Z = _ab => Math.round(10 * _ab) / 10;

    function _$(_ab, bb, cb, db) {
        const eb = _X(_ab),
            fb = ze(eb, 'margin'),
            gb = Re(eb.maxWidth, _ab, 'clientWidth') || o,
            hb = Re(eb.maxHeight, _ab, 'clientHeight') || o,
            ib = function(jb, kb, lb) {
                let mb, nb;
                if (void 0 === kb || void 0 === lb) {
                    const ob = Le(jb);
                    if (ob) {
                        const pb = ob.getBoundingClientRect(),
                            qb = _X(ob),
                            rb = ze(qb, 'border', 'width'),
                            sb = ze(qb, 'padding');
                        kb = pb.width - sb.width - rb.width, lb = pb.height - sb.height - rb.height, mb = Re(qb.maxWidth, ob, 'clientWidth'), nb = Re(qb.maxHeight, ob, 'clientHeight');
                    } else
                        kb = jb.clientWidth, lb = jb.clientHeight;
                }
                return {
                    width: kb,
                    height: lb,
                    maxWidth: mb || o,
                    maxHeight: nb || o
                };
            }(_ab, bb, cb);
        let {
            width: jb,
            height: kb
        } = ib;
        if ('content-box' === eb.boxSizing) {
            const lb = ze(eb, 'border', 'width'),
                mb = ze(eb, 'padding');
            jb -= mb.width + lb.width, kb -= mb.height + lb.height;
        }
        jb = Math.max(0, jb - fb.width), kb = Math.max(0, db ? jb / db : kb - fb.height), jb = _Z(Math.min(jb, gb, ib.maxWidth)), kb = _Z(Math.min(kb, hb, ib.maxHeight)), jb && !kb && (kb = _Z(jb / 2));
        return (void 0 !== bb || void 0 !== cb) && db && ib.height && kb > ib.height && (kb = ib.height, jb = _Z(Math.floor(kb * db))), {
            width: jb,
            height: kb
        };
    }

    function _$(ab, bb, cb) {
        const db = bb || 1,
            eb = Math.floor(ab.height * db),
            fb = Math.floor(ab.width * db);
        ab.height = Math.floor(ab.height), ab.width = Math.floor(ab.width);
        const gb = ab.canvas;
        return gb.style && (cb || !gb.style.height && !gb.style.width) && (gb.style.height = `${ ab.height }px`, gb.style.width = `${ ab.width }px`), (ab.currentDevicePixelRatio !== db || gb.height !== eb || gb.width !== fb) && (ab.currentDevicePixelRatio = db, gb.height = eb, gb.width = fb, ab.ctx.setTransform(db, 0, 0, db, 0, 0), !0);
    }
    const _$ = function() {
        let ab = !1;
        try {
            const bb = {
                get passive() {
                    return ab = !0, !1;
                }
            };
            window.addEventListener('test', null, bb), window.removeEventListener('test', null, bb);
        } catch (ab) {}
        return ab;
    }();

    function _ab(bb, cb) {
        const db = function(eb, fb) {
                return _X(eb).getPropertyValue(fb);
            }(bb, cb),
            eb = db && db.match(/^(\d+)(\.\d+)?px$/);
        return eb ? +eb[1] : void 0;
    }

    function _ab(bb, cb, db, eb) {
        return {
            x: bb.x + db * (cb.x - bb.x),
            y: bb.y + db * (cb.y - bb.y)
        };
    }

    function _ab(bb, cb, db, eb) {
        return {
            x: bb.x + db * (cb.x - bb.x),
            y: 'middle' === eb ? db < 0.5 ? bb.y : cb.y : 'after' === eb ? db < 1 ? bb.y : cb.y : db > 0 ? cb.y : bb.y
        };
    }

    function _ab(bb, cb, db, eb) {
        const fb = {
                x: bb.cp2x,
                y: bb.cp2y
            },
            gb = {
                x: cb.cp1x,
                y: cb.cp1y
            },
            hb = $e(bb, fb, db),
            ib = $e(fb, gb, db),
            jb = $e(gb, cb, db),
            kb = $e(hb, ib, db),
            lb = $e(ib, jb, db);
        return $e(kb, lb, db);
    }

    function _ab(bb, cb, db) {
        return bb ? function(eb, fb) {
            return {
                x: db => eb + eb + fb - db,
                setWidth(gb) {
                    fb = gb;
                },
                textAlign: eb => 'center' === eb ? eb : 'right' === eb ? 'left' : 'right',
                xPlus: (eb, fb) => eb - fb,
                leftForLtr: (eb, fb) => eb - fb
            };
        }(cb, db) : {
            x: bb => bb,
            setWidth(eb) {},
            textAlign: bb => bb,
            xPlus: (bb, cb) => bb + cb,
            leftForLtr: (bb, cb) => bb
        };
    }

    function _ab(bb, cb) {
        let db, eb;
        'ltr' !== cb && 'rtl' !== cb || (db = bb.canvas.style, eb = [
            db.getPropertyValue('direction'),
            db.getPropertyPriority('direction')
        ], db.setProperty('direction', cb, 'important'), bb.prevTextDirection = eb);
    }

    function _ab(bb, cb) {
        void 0 !== cb && (delete bb.prevTextDirection, bb.canvas.style.setProperty('direction', cb[0], cb[1]));
    }

    function _ab(bb) {
        return 'angle' === bb ? {
            between: tt,
            compare: Z,
            normalize: J
        } : {
            between: st,
            compare: (bb, b) => bb - b,
            normalize: bb => bb
        };
    }

    function ab({
        start: bb,
        end: cb,
        count: db,
        loop: eb,
        style: fb
    }) {
        return {
            start: bb % db,
            end: cb % db,
            loop: eb && (cb - bb + 1) % db == 0,
            style: fb
        };
    }

    function _ab(bb, cb, db) {
        if (!db)
            return [bb];
        const {
            property: eb,
            start: fb,
            end: gb
        } = db, hb = cb.length, {
            compare: ib,
            between: jb,
            normalize: kb
        } = Ke(eb), {
            start: lb,
            end: mb,
            loop: nb,
            style: ob
        } = function(pb, qb, rb) {
            const {
                property: sb,
                start: tb,
                end: ub
            } = rb, {
                between: vb,
                normalize: wb
            } = Ke(sb), xb = qb.length;
            let yb, zb, {
                start: Ab,
                end: Bb,
                loop: Cb
            } = pb;
            if (Cb) {
                for (Ab += xb, Bb += xb, yb = 0, zb = xb; yb < zb && vb(wb(qb[Ab % xb][sb]), tb, ub); ++yb)
                    Ab--, Bb--;
                Ab %= xb, Bb %= xb;
            }
            return Bb < Ab && (Bb += xb), {
                start: Ab,
                end: Bb,
                loop: Cb,
                style: pb.style
            };
        }(bb, cb, db), pb = [];
        let qb, rb, sb, _tb = !1,
            _ub = null;
        const _vb = () => _tb || jb(fb, sb, qb) && 0 !== ib(fb, sb),
            _wb = () => !_tb || 0 === ib(gb, qb) || jb(gb, sb, qb);
        for (let xb = lb, yb = lb; xb <= mb; ++xb)
            rb = cb[xb % hb], rb.skip || (qb = kb(rb[eb]), qb !== sb && (_tb = jb(qb, fb, gb), null === _ub && _vb() && (_ub = 0 === ib(qb, fb) ? xb : yb), null !== _ub && _wb() && (pb.push(Ge({
                start: _ub,
                end: xb,
                loop: nb,
                count: hb,
                style: ob
            })), _ub = null), yb = xb, sb = qb));
        return null !== _ub && pb.push(Ge({
            start: _ub,
            end: mb,
            loop: nb,
            count: hb,
            style: ob
        })), pb;
    }

    function _ab(bb, cb) {
        const db = [],
            eb = bb.segments;
        for (let fb = 0; fb < eb.length; fb++) {
            const gb = Ze(eb[fb], bb.points, cb);
            gb.length && db.push(...gb);
        }
        return db;
    }

    function _ab(bb, cb) {
        const db = bb.points,
            eb = bb.options.spanGaps,
            fb = db.length;
        if (!fb)
            return [];
        const gb = !!bb._loop,
            {
                start: hb,
                end: ib
            } = function(jb, kb, lb, mb) {
                let nb = 0,
                    ob = kb - 1;
                if (lb && !mb)
                    for (; nb < kb && !jb[nb].skip;)
                        nb++;
                for (; nb < kb && jb[nb].skip;)
                    nb++;
                for (nb %= kb, lb && (ob += nb); ob > nb && jb[ob % kb].skip;)
                    ob--;
                return ob %= kb, {
                    start: nb,
                    end: ob
                };
            }(db, fb, gb, eb);
        if (!0 === eb)
            return _ab(bb, [{
                start: hb,
                end: ib,
                loop: gb
            }], db, cb);
        return _ab(bb, function(jb, kb, lb, mb) {
            const nb = jb.length,
                ob = [];
            let pb, qb = kb,
                rb = jb[kb];
            for (pb = kb + 1; pb <= lb; ++pb) {
                const sb = jb[pb % nb];
                sb.skip || sb.stop ? rb.skip || (mb = !1, ob.push({
                    start: kb % nb,
                    end: (pb - 1) % nb,
                    loop: mb
                }), kb = qb = sb.stop ? pb : null) : (qb = pb, rb.skip && (kb = pb)), rb = sb;
            }
            return null !== qb && ob.push({
                start: kb % nb,
                end: qb % nb,
                loop: mb
            }), ob;
        }(db, hb, ib < hb ? ib + fb : ib, !!bb._fullLoop && 0 === hb && ib === fb - 1), db, cb);
    }

    function _ab(bb, cb, db, eb) {
        return eb && eb.setContext && db ? function(fb, gb, hb, ib) {
            const jb = fb._chart.getContext(),
                kb = _ab(fb.options),
                {
                    _datasetIndex: lb,
                    options: {
                        spanGaps: mb
                    }
                } = fb,
                nb = hb.length,
                ob = [];
            let pb = kb,
                qb = gb[0].start,
                rb = qb;

            function sb(tb, ub, vb, wb) {
                const xb = mb ? -1 : 1;
                if (tb !== ub) {
                    for (tb += nb; hb[tb % nb].skip;)
                        tb -= xb;
                    for (; hb[ub % nb].skip;)
                        ub += xb;
                    tb % nb != ub % nb && (ob.push({
                        start: tb % nb,
                        end: ub % nb,
                        loop: vb,
                        style: wb
                    }), pb = wb, qb = ub % nb);
                }
            }
            for (const sb of gb) {
                qb = mb ? qb : sb.start;
                let tb, ub = hb[qb % nb];
                for (rb = qb + 1; rb <= sb.end; rb++) {
                    const vb = hb[rb % nb];
                    tb = _ab(ib.setContext(ce(jb, {
                        type: 'segment',
                        p0: ub,
                        p1: vb,
                        p0DataIndex: (rb - 1) % nb,
                        p1DataIndex: rb % nb,
                        datasetIndex: lb
                    }))), _ab(tb, pb) && _f(qb, rb - 1, sb.loop, pb), ub = vb, pb = tb;
                }
                qb < rb - 1 && _f(qb, rb - 1, sb.loop, pb);
            }
            return ob;
        }(bb, cb, db, eb) : cb;
    }

    function _ab(bb) {
        return {
            backgroundColor: bb.backgroundColor,
            borderCapStyle: bb.borderCapStyle,
            borderDash: bb.borderDash,
            borderDashOffset: bb.borderDashOffset,
            borderJoinStyle: bb.borderJoinStyle,
            borderWidth: bb.borderWidth,
            borderColor: bb.borderColor
        };
    }

    function _ab(bb, cb) {
        return cb && JSON.stringify(bb) !== JSON.stringify(cb);
    }
}), a.register('TbYzm', function(b, c) {
    function d(e) {
        return e + 0.5 | 0;
    }
    _f(b.exports, 'Color', function() {
        return _q;
    });
    const d = (_f, b, c) => Math.max(Math.min(_f, c), b);

    function e(_f) {
        return d(_o(2.55 * _f), 0, 255);
    }

    function e(f) {
        return d(_o(255 * f), 0, 255);
    }

    function e(f) {
        return d(_o(f / 2.55) / 100, 0, 1);
    }

    function e(f) {
        return d(_o(100 * f), 0, 100);
    }
    const e = {
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
        f = [...'0123456789ABCDEF'],
        g = _k => f[15 & _k],
        h = _k => f[(240 & _k) >> 4] + f[15 & _k],
        i = _k => (240 & _k) >> 4 == (15 & _k);

    function j(_k) {
        var l = (_k => i(_k.r) && i(_k.g) && i(_k.b) && i(_k.a))(_k) ? g : h;
        return _k ? '#' + l(_k.r) + l(_k.g) + l(_k.b) + ((_k, l) => _k < 255 ? l(_k) : '')(_k.a, l) : void 0;
    }
    const j = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;

    function k(l, m, n) {
        const _o = m * Math.min(n, 1 - n),
            p = (m, q = (m + l / 30) % 12) => n - _o * Math.max(Math.min(q - 3, 9 - q, 1), -1);
        return [
            q(0),
            q(8),
            q(4)
        ];
    }

    function k(l, m, n) {
        const o = (o, p = (o + l / 60) % 6) => n - n * m * Math.max(Math.min(p, 4 - p, 1), 0);
        return [
            o(5),
            o(3),
            o(1)
        ];
    }

    function k(l, m, n) {
        const o = _q(l, 1, 0.5);
        let p;
        for (m + n > 1 && (p = 1 / (m + n), m *= p, n *= p), p = 0; p < 3; p++)
            o[p] *= 1 - m - n, o[p] += m;
        return o;
    }

    function k(l) {
        const m = l.r / 255,
            n = l.g / 255,
            o = l.b / 255,
            p = Math.max(m, n, o),
            q = Math.min(m, n, o),
            r = (p + q) / 2;
        let s, t, u;
        return p !== q && (u = p - q, t = r > 0.5 ? u / (2 - p - q) : u / (p + q), s = function(v, w, x, y, z) {
            return v === z ? (w - x) / y + (w < x ? 6 : 0) : w === z ? (x - v) / y + 2 : (v - w) / y + 4;
        }(m, n, o, u, p), s = 60 * s + 0.5), [
            0 | s,
            t || 0,
            r
        ];
    }

    function k(l, m, n, o) {
        return (Array.isArray(m) ? l(m[0], m[1], m[2]) : l(m, n, o)).map(_v);
    }

    function k(l, m, n) {
        return _u(_q, l, m, n);
    }

    function _k(l) {
        return (l % 360 + 360) % 360;
    }

    function k(l) {
        const m = j.exec(l);
        let n, o = 255;
        if (!m)
            return;
        m[5] !== n && (o = m[6] ? _u(+m[5]) : _v(+m[5]));
        const p = _w(+m[2]),
            q = +m[3] / 100,
            r = +m[4] / 100;
        return n = 'hwb' === m[1] ? function(s, t, u) {
            return _u(_s, s, t, u);
        }(p, q, r) : 'hsv' === m[1] ? function(s, t, u) {
            return _u(_r, s, t, u);
        }(p, q, r) : _v(p, q, r), {
            r: n[0],
            g: n[1],
            b: n[2],
            a: o
        };
    }
    const k = {
            x: 'dark',
            Z: 'light',
            Y: 're',
            X: 'blu',
            W: 'gr',
            V: 'medium',
            U: 'slate',
            A: 'ee',
            T: 'ol',
            S: 'or',
            B: 'ra',
            C: 'lateg',
            D: 'ights',
            R: 'in',
            Q: 'turquois',
            E: 'hi',
            P: 'ro',
            O: 'al',
            N: 'le',
            M: 'de',
            L: 'yello',
            F: 'en',
            K: 'ch',
            G: 'arks',
            H: 'ea',
            I: 'ightg',
            J: 'wh'
        },
        _l = {
            OiceXe: 'f0f8ff',
            antiquewEte: 'faebd7',
            aqua: 'ffff',
            aquamarRe: '7fffd4',
            azuY: 'f0ffff',
            beige: 'f5f5dc',
            bisque: 'ffe4c4',
            black: '0',
            blanKedOmond: 'ffebcd',
            Xe: 'ff',
            XeviTet: '8a2be2',
            bPwn: 'a52a2a',
            burlywood: 'deb887',
            caMtXe: '5f9ea0',
            KartYuse: '7fff00',
            KocTate: 'd2691e',
            cSO: 'ff7f50',
            cSnflowerXe: '6495ed',
            cSnsilk: 'fff8dc',
            crimson: 'dc143c',
            cyan: 'ffff',
            xXe: '8b',
            xcyan: '8b8b',
            xgTMnPd: 'b8860b',
            xWay: 'a9a9a9',
            xgYF: '6400',
            xgYy: 'a9a9a9',
            xkhaki: 'bdb76b',
            xmagFta: '8b008b',
            xTivegYF: '556b2f',
            xSange: 'ff8c00',
            xScEd: '9932cc',
            xYd: '8b0000',
            xsOmon: 'e9967a',
            xsHgYF: '8fbc8f',
            xUXe: '483d8b',
            xUWay: '2f4f4f',
            xUgYy: '2f4f4f',
            xQe: 'ced1',
            xviTet: '9400d3',
            dAppRk: 'ff1493',
            dApskyXe: 'bfff',
            dimWay: '696969',
            dimgYy: '696969',
            dodgerXe: '1e90ff',
            fiYbrick: 'b22222',
            flSOwEte: 'fffaf0',
            foYstWAn: '228b22',
            fuKsia: 'ff00ff',
            gaRsbSo: 'dcdcdc',
            ghostwEte: 'f8f8ff',
            gTd: 'ffd700',
            gTMnPd: 'daa520',
            Way: '808080',
            gYF: '8000',
            gYFLw: 'adff2f',
            gYy: '808080',
            honeyMw: 'f0fff0',
            hotpRk: 'ff69b4',
            RdianYd: 'cd5c5c',
            Rdigo: '4b0082',
            ivSy: 'fffff0',
            khaki: 'f0e68c',
            lavFMr: 'e6e6fa',
            lavFMrXsh: 'fff0f5',
            lawngYF: '7cfc00',
            NmoncEffon: 'fffacd',
            ZXe: 'add8e6',
            ZcSO: 'f08080',
            Zcyan: 'e0ffff',
            ZgTMnPdLw: 'fafad2',
            ZWay: 'd3d3d3',
            ZgYF: '90ee90',
            ZgYy: 'd3d3d3',
            ZpRk: 'ffb6c1',
            ZsOmon: 'ffa07a',
            ZsHgYF: '20b2aa',
            ZskyXe: '87cefa',
            ZUWay: '778899',
            ZUgYy: '778899',
            ZstAlXe: 'b0c4de',
            ZLw: 'ffffe0',
            lime: 'ff00',
            limegYF: '32cd32',
            lRF: 'faf0e6',
            magFta: 'ff00ff',
            maPon: '800000',
            VaquamarRe: '66cdaa',
            VXe: 'cd',
            VScEd: 'ba55d3',
            VpurpN: '9370db',
            VsHgYF: '3cb371',
            VUXe: '7b68ee',
            VsprRggYF: 'fa9a',
            VQe: '48d1cc',
            VviTetYd: 'c71585',
            midnightXe: '191970',
            mRtcYam: 'f5fffa',
            mistyPse: 'ffe4e1',
            moccasR: 'ffe4b5',
            navajowEte: 'ffdead',
            navy: '80',
            Tdlace: 'fdf5e6',
            Tive: '808000',
            TivedBb: '6b8e23',
            Sange: 'ffa500',
            SangeYd: 'ff4500',
            ScEd: 'da70d6',
            pOegTMnPd: 'eee8aa',
            pOegYF: '98fb98',
            pOeQe: 'afeeee',
            pOeviTetYd: 'db7093',
            papayawEp: 'ffefd5',
            pHKpuff: 'ffdab9',
            peru: 'cd853f',
            pRk: 'ffc0cb',
            plum: 'dda0dd',
            powMrXe: 'b0e0e6',
            purpN: '800080',
            YbeccapurpN: '663399',
            Yd: 'ff0000',
            Psybrown: 'bc8f8f',
            PyOXe: '4169e1',
            saddNbPwn: '8b4513',
            sOmon: 'fa8072',
            sandybPwn: 'f4a460',
            sHgYF: '2e8b57',
            sHshell: 'fff5ee',
            siFna: 'a0522d',
            silver: 'c0c0c0',
            skyXe: '87ceeb',
            UXe: '6a5acd',
            UWay: '708090',
            UgYy: '708090',
            snow: 'fffafa',
            sprRggYF: 'ff7f',
            stAlXe: '4682b4',
            tan: 'd2b48c',
            teO: '8080',
            tEstN: 'd8bfd8',
            tomato: 'ff6347',
            Qe: '40e0d0',
            viTet: 'ee82ee',
            JHt: 'f5deb3',
            wEte: 'ffffff',
            wEtesmoke: 'f5f5f5',
            Lw: 'ffff00',
            LwgYF: '9acd32'
        };
    let _m;

    function n(o) {
        _m || (_m = function() {
            const p = {},
                q = Object.keys(_l),
                r = Object.keys(k);
            let s, t, _u, _v, w;
            for (s = 0; s < q.length; s++) {
                for (_v = w = q[s], t = 0; t < r.length; t++)
                    _u = r[t], w = w.replace(_u, k[_u]);
                _u = parseInt(_l[_v], 16), p[w] = [
                    _u >> 16 & 255,
                    _u >> 8 & 255,
                    255 & _u
                ];
            }
            return p;
        }(), _m.transparent = [
            0,
            0,
            0,
            0
        ]);
        const p = _m[o.toLowerCase()];
        return p && {
            r: p[0],
            g: p[1],
            b: p[2],
            a: 4 === p.length ? p[3] : 255
        };
    }
    const n = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
    const o = _r => _r <= 0.0031308 ? 12.92 * _r : 1.055 * Math.pow(_r, 1 / 2.4) - 0.055,
        p = _r => _r <= 0.04045 ? _r / 12.92 : Math.pow((_r + 0.055) / 1.055, 2.4);

    function q(_r, s, t) {
        if (_r) {
            let u = _t(_r);
            u[s] = Math.max(0, Math.min(u[s] + u[s] * t, 0 === s ? 360 : 1)), u = _v(u), _r.r = u[0], _r.g = u[1], _r.b = u[2];
        }
    }

    function q(r, s) {
        return r ? Object.assign(s || {}, r) : r;
    }

    function q(r) {
        var s = {
            r: 0,
            g: 0,
            b: 0,
            a: 255
        };
        return Array.isArray(r) ? r.length >= 3 && (s = {
            r: r[0],
            g: r[1],
            b: r[2],
            a: 255
        }, r.length > 3 && (s.a = _w(r[3]))) : (s = E(r, {
            r: 0,
            g: 0,
            b: 0,
            a: 1
        })).a = _w(s.a), s;
    }

    function q(r) {
        return 'r' === r.charAt(0) ? function(s) {
            const t = n.exec(s);
            let u, v, _w, x = 255;
            if (t) {
                if (t[7] !== u) {
                    const y = +t[7];
                    x = t[8] ? _w(y) : d(255 * y, 0, 255);
                }
                return u = +t[1], v = +t[3], _w = +t[5], u = 255 & (t[2] ? _w(u) : d(u, 0, 255)), v = 255 & (t[4] ? _w(v) : d(v, 0, 255)), _w = 255 & (t[6] ? _w(_w) : d(_w, 0, 255)), {
                    r: u,
                    g: v,
                    b: _w,
                    a: x
                };
            }
        }(r) : _x(r);
    }
    class _q {
        get valid() {
            return this._valid;
        }
        get rgb() {
            var r = E(this._rgb);
            return r && (r.a = _y(r.a)), r;
        }
        set rgb(r) {
            this._rgb = L(r);
        }
        rgbString() {
            return this._valid ? (_r = this._rgb) && (_r.a < 255 ? `rgba(${ _r.r }, ${ _r.g }, ${ _r.b }, ${ _y(_r.a) })` : `rgb(${ _r.r }, ${ _r.g }, ${ _r.b })`) : void 0;
            var _r;
        }
        hexString() {
            return this._valid ? _o(this._rgb) : void 0;
        }
        hslString() {
            return this._valid ? function(r) {
                if (!r)
                    return;
                const s = _t(r),
                    t = s[0],
                    u = _z(s[1]),
                    v = _z(s[2]);
                return r.a < 255 ? `hsla(${ t }, ${ u }%, ${ v }%, ${ _y(r.a) })` : `hsl(${ t }, ${ u }%, ${ v }%)`;
            }(this._rgb) : void 0;
        }
        mix(r, s) {
            if (r) {
                const t = this.rgb,
                    u = r.rgb;
                let v;
                const _w = s === v ? 0.5 : s,
                    x = 2 * _w - 1,
                    _y = t.a - u.a,
                    _z = ((x * _y == -1 ? x : (x + _y) / (1 + x * _y)) + 1) / 2;
                v = 1 - _z, t.r = 255 & _z * t.r + v * u.r + 0.5, t.g = 255 & _z * t.g + v * u.g + 0.5, t.b = 255 & _z * t.b + v * u.b + 0.5, t.a = _w * t.a + (1 - _w) * u.a, this.rgb = t;
            }
            return this;
        }
        interpolate(r, s) {
            return r && (this._rgb = function(t, u, v) {
                const w = p(_f(t.r)),
                    x = p(_f(t.g)),
                    y = p(_f(t.b));
                return {
                    r: _e(o(w + v * (p(_f(u.r)) - w))),
                    g: _e(o(x + v * (p(_f(u.g)) - x))),
                    b: _e(o(y + v * (p(_f(u.b)) - y))),
                    a: t.a + v * (u.a - t.a)
                };
            }(this._rgb, r._rgb, s)), this;
        }
        clone() {
            return new _q(this.rgb);
        }
        alpha(r) {
            return this._rgb.a = _e(r), this;
        }
        clearer(r) {
            return this._rgb.a *= 1 - r, this;
        }
        greyscale() {
            const r = this._rgb,
                s = _u(0.3 * r.r + 0.59 * r.g + 0.11 * r.b);
            return r.r = r.g = r.b = s, this;
        }
        opaquer(r) {
            return this._rgb.a *= 1 + r, this;
        }
        negate() {
            const r = this._rgb;
            return r.r = 255 - r.r, r.g = 255 - r.g, r.b = 255 - r.b, this;
        }
        lighten(r) {
            return A(this._rgb, 2, r), this;
        }
        darken(r) {
            return A(this._rgb, 2, -r), this;
        }
        saturate(r) {
            return A(this._rgb, 1, r), this;
        }
        desaturate(r) {
            return A(this._rgb, 1, -r), this;
        }
        rotate(r) {
            return function(s, t) {
                var u = _t(s);
                u[0] = _w(u[0] + t), u = _v(u), s.r = u[0], s.g = u[1], s.b = u[2];
            }(this._rgb, r), this;
        }
        constructor(r) {
            if (r instanceof _q)
                return r;
            const s = typeof r;
            let t;
            var _u, v, w;
            'object' === s ? t = L(r) : 'string' === s && (w = (_u = r).length, '#' === _u[0] && (4 === w || 5 === w ? v = {
                r: 255 & 17 * e[_u[1]],
                g: 255 & 17 * e[_u[2]],
                b: 255 & 17 * e[_u[3]],
                a: 5 === w ? 17 * e[_u[4]] : 255
            } : 7 !== w && 9 !== w || (v = {
                r: e[_u[1]] << 4 | e[_u[2]],
                g: e[_u[3]] << 4 | e[_u[4]],
                b: e[_u[5]] << 4 | e[_u[6]],
                a: 9 === w ? e[_u[7]] << 4 | e[_u[8]] : 255
            })), t = v || O(r) || R(r)), this._rgb = t, this._valid = !!t;
        }
    }
}), a.register('Ls+S6', function(b, c) {
    _h(b.exports, 'Line', function() {
        return _p;
    });
    var d = a('LEQ5w'),
        _e = a('eL1p/');
    const _f = 'label';

    function g(_h, i) {
        'function' == typeof _h ? _h(i) : _h && (_h.current = i);
    }

    function g(h, i) {
        h.labels = i;
    }

    function g(h, i) {
        let j = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _f;
        const k = [];
        h.datasets = i.map(i => {
            const l = h.datasets.find(h => h[j] === i[j]);
            return l && i.data && !k.includes(l) ? (k.push(l), Object.assign(l, i), l) : {
                ...i
            };
        });
    }

    function g(h) {
        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _f;
        const j = {
            labels: [],
            datasets: []
        };
        return l(j, h.labels), c(j, h.datasets, i), j;
    }

    function g(h, i) {
        const {
            height: j = 150,
            width: k = 300,
            redraw: l = !1,
            datasetIdKey: m,
            type: n,
            data: _o,
            options: _p,
            plugins: _q = [],
            fallbackContent: _r,
            updateMode: _s,
            ..._t
        } = h, _u = (0, d.useRef)(null), _v = (0, d.useRef)(), _w = () => {
            _u.current && (_v.current = new(0, _e.Chart)(_u.current, {
                type: n,
                data: d(_o, m),
                options: _p && {
                    ..._p
                },
                plugins: _q
            }), h(i, _v.current));
        }, _x = () => {
            h(i, null), _v.current && (_v.current.destroy(), _v.current = null);
        };
        return (0, d.useEffect)(() => {
            !l && _v.current && _p && function(y, z) {
                const A = y.options;
                A && z && Object.assign(A, z);
            }(_v.current, _p);
        }, [
            l,
            _p
        ]), (0, d.useEffect)(() => {
            !l && _v.current && l(_v.current.config.data, _o.labels);
        }, [
            l,
            _o.labels
        ]), (0, d.useEffect)(() => {
            !l && _v.current && _o.datasets && c(_v.current.config.data, _o.datasets, m);
        }, [
            l,
            _o.datasets
        ]), (0, d.useEffect)(() => {
            _v.current && (l ? (_x(), setTimeout(_w)) : _v.current.update(_s));
        }, [
            l,
            _p,
            _o.labels,
            _o.datasets,
            _s
        ]), (0, d.useEffect)(() => {
            _v.current && (_x(), setTimeout(_w));
        }, [n]), (0, d.useEffect)(() => (_w(), () => _x()), []), e(d).createElement('canvas', Object.assign({
            ref: _u,
            role: 'img',
            height: j,
            width: k
        }, _t), _r);
    }
    const g = (0, d.forwardRef)(u);

    function h(i, j) {
        return _e.Chart.register(j), (0, d.forwardRef)((j, b) => e(d).createElement(g, Object.assign({}, j, {
            ref: b,
            type: i
        })));
    }
    const h = g('line', _e.LineController);
    _e.BarController, _e.RadarController, _e.DoughnutController, _e.PolarAreaController, _e.BubbleController, _e.PieController, _e.ScatterController;
});