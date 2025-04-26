function a(a, b, c, u) {
    Object.defineProperty(a, b, {
        get: c,
        set: u,
        enumerable: !0,
        configurable: !0
    });
}

function b(a) {
    return a && a.__esModule ? a.default : a;
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('2A+Qr', function(b, u) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), a(b.exports, 'default', function() {
        return r;
    });
    var e = c('8kSQZ'),
        f = c('uPP4W'),
        g = c('L0c4L'),
        h = c('G/Fd4'),
        i = c('uIVkr'),
        j = c('4/f+U'),
        k = c('U8PGt'),
        l = c('h99Nu'),
        m = c('t5mrz');
    let n, o, p = a => a;
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
    var r = a => {
        const s = f.useRef(null),
            t = f.useRef(null),
            [u] = (0, k.default)(s),
            v = f.useRef(0),
            w = f.useMemo(() => ({
                labels: [v.current],
                datasets: [{
                    data: [a.balance],
                    borderColor: m.default.White,
                    borderWidth: 3,
                    pointRadius: 10,
                    pointBackgroundColor: m.default.Gold,
                    tension: 0
                }]
            }), []),
            x = f.useCallback(() => {
                const y = t.current;
                if (!y)
                    return;
                const z = Math.max(1, Math.round(u / 60));
                y.options.scales.x.min = Math.max(0, v.current - z);
                const A = y.data.datasets[0].data,
                    B = Math.max(...A) || 0,
                    C = (0, j.takeRight)(A, z + 1),
                    D = Math.min(...C) || 0;
                let E = F;
                if (F < 0) {
                    const G = Math.abs(F).toString().split('');
                    E = 1 === G.length ? 0 : Number(G.map((G, z) => 0 === z ? '1' : 0).join(''));
                }
                y.options.scales.y.min = E - 1, y.options.scales.y.max = Math.max(B + 1, 1.05 * B);
            }, [u]);
        return f.useEffect(() => {
            var y;
            x(), null === (y = t.current) || void 0 === y || y.update();
        }, [u]), (0, i.useIntervalWhen)(() => {
            const y = t.current;
            y && (y.data.labels.push(v.current++), y.data.datasets[0].data.push(a.balance), x(), y.update());
        }, 5000), (0, e.jsx)(s, {
            children: (0, e.jsx)(t, {
                ref: s,
                children: (0, e.jsx)(h.Line, {
                    ref: t,
                    options: q,
                    data: w
                })
            })
        });
    };
    const s = l.default.div.attrs({
            className: 'flex vc'
        })(n || (n = p`
  min-height: 0px;
  flex: 1;
  z-index: 0;
  overflow: hidden;
`)),
        t = l.default.div.attrs({
            className: 'maxWidth'
        })(o || (o = p`
  height: 90%;
  pointer-events: none;
`));
}), c.register('L0c4L', function(b, j) {
    a(b.exports, 'BarController', function() {
        return K;
    }), a(b.exports, 'BubbleController', function() {
        return L;
    }), a(b.exports, 'DoughnutController', function() {
        return M;
    }), a(b.exports, 'LineController', function() {
        return N;
    }), a(b.exports, 'PolarAreaController', function() {
        return O;
    }), a(b.exports, 'PieController', function() {
        return P;
    }), a(b.exports, 'RadarController', function() {
        return Q;
    }), a(b.exports, 'ScatterController', function() {
        return R;
    }), a(b.exports, 'Chart', function() {
        return sc;
    }), a(b.exports, 'LineElement', function() {
        return Kc;
    }), a(b.exports, 'PointElement', function() {
        return Mc;
    }), a(b.exports, 'CategoryScale', function() {
        return kd;
    }), a(b.exports, 'LinearScale', function() {
        return pd;
    });
    var d = c('UM8oI'),
        e = c('+rB2S');
    e = c('+rB2S');
    class f {
        _notify(a, b, c, j) {
            const g = b.listeners[j],
                h = b.duration;
            g.forEach(j => j({
                chart: a,
                initial: b.initial,
                numSteps: h,
                currentStep: Math.min(c - b.start, h)
            }));
        }
        _refresh() {
            this._request || (this._running = !0, this._request = h.r.call(window, () => {
                this._update(), this._request = null, this._running && this._refresh();
            }));
        }
        _update(g = Date.now()) {
            let h = 0;
            this._charts.forEach((c, j) => {
                if (!c.running || !c.items.length)
                    return;
                const i = c.items;
                let j, k = i.length - 1,
                    l = !1;
                for (; k >= 0; --k)
                    j = i[k], j._active ? (j._total > c.duration && (c.duration = j._total), j.tick(g), l = !0) : (i[k] = i[i.length - 1], i.pop());
                l && (j.draw(), this._notify(j, c, g, 'progress')), i.length || (c.running = !1, this._notify(j, c, g, 'complete'), c.initial = !1), h += i.length;
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
        listen(g, b, c) {
            this._getAnims(g).listeners[b].push(c);
        }
        add(g, b) {
            b && b.length && this._getAnims(g).items.push(...b);
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
    var h = new f();
    const i = 'transparent',
        j = {
            boolean: (g, b, c) => c > 0.5 ? b : g,
            color(g, b, c) {
                const k = (0, e.c)(g || i),
                    l = k.valid && (0, e.c)(b || i);
                return l && l.valid ? l.mix(k, c).hexString() : b;
            },
            number: (g, b, c) => g + (b - g) * c
        };
    class k {
        active() {
            return this._active;
        }
        update(g, b, c) {
            if (this._active) {
                this._notify(!1);
                const l = this._target[this._prop],
                    m = c - this._start,
                    n = this._duration - m;
                this._start = c, this._duration = Math.floor(Math.max(n, g.duration)), this._total += m, this._loop = !!g.loop, this._to = (0, e.a)([
                    g.to,
                    b,
                    l,
                    g.from
                ]), this._from = (0, e.a)([
                    g.from,
                    l,
                    b
                ]);
            }
        }
        cancel() {
            this._active && (this.tick(Date.now()), this._active = !1, this._notify(!1));
        }
        tick(g) {
            const l = g - this._start,
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
            const s = this._promises || (this._promises = []);
            return new Promise((l, m) => {
                s.push({
                    res: l,
                    rej: m
                });
            });
        }
        _notify(g) {
            const l = g ? 'res' : 'rej',
                m = this._promises || [];
            for (let n = 0; n < m.length; n++)
                m[n][l]();
        }
        constructor(g, b, c, n) {
            const l = b[c];
            n = (0, e.a)([
                g.to,
                n,
                l,
                g.from
            ]);
            const m = (0, e.a)([
                g.from,
                l,
                n
            ]);
            this._active = !0, this._fn = g.fn || j[g.type || typeof m], this._easing = e.e[g.easing] || e.e.linear, this._start = Math.floor(Date.now() + (g.delay || 0)), this._duration = this._total = Math.floor(g.duration), this._loop = !!g.loop, this._target = b, this._prop = c, this._from = m, this._to = n, this._promises = void 0;
        }
    }
    class l {
        configure(g) {
            if (!(0, e.i)(g))
                return;
            const m = Object.keys(e.d.animation),
                n = this._properties;
            Object.getOwnPropertyNames(g).forEach(n => {
                const o = g[n];
                if (!(0, e.i)(o))
                    return;
                const p = {};
                for (const q of m)
                    p[q] = o[q];
                ((0, e.b)(o.properties) && o.properties || [n]).forEach(q => {
                    q !== n && n.has(q) || n.set(q, p);
                });
            });
        }
        _animateOptions(g, b) {
            const m = b.options,
                n = function(g, b) {
                    if (!b)
                        return;
                    let o = g.options;
                    if (!o)
                        return void(g.options = b);
                    o.$shared && (g.options = o = Object.assign({}, o, {
                        $shared: !1,
                        $animations: {}
                    }));
                    return o;
                }(g, m);
            if (!n)
                return [];
            const o = this._createAnimations(n, m);
            return m.$shared && function(g, b) {
                const p = [],
                    q = Object.keys(b);
                for (let r = 0; r < q.length; r++) {
                    const s = g[q[r]];
                    s && s.active() && p.push(s.wait());
                }
                return Promise.all(p);
            }(g.options.$animations, m).then(() => {
                g.options = m;
            }, () => {}), o;
        }
        _createAnimations(g, b) {
            const m = this._properties,
                n = [],
                o = g.$animations || (g.$animations = {}),
                p = Object.keys(b),
                q = Date.now();
            let r;
            for (r = p.length - 1; r >= 0; --r) {
                const s = p[r];
                if ('$' === s.charAt(0))
                    continue;
                if ('options' === s) {
                    n.push(...this._animateOptions(g, b));
                    continue;
                }
                const t = b[s];
                let u = o[s];
                const v = m.get(s);
                if (u) {
                    if (v && u.active()) {
                        u.update(v, t, q);
                        continue;
                    }
                    u.cancel();
                }
                v && v.duration ? (o[s] = u = new k(v, g, s, t), n.push(u)) : g[s] = t;
            }
            return n;
        }
        update(g, b) {
            if (0 === this._properties.size)
                return void Object.assign(g, b);
            const m = this._createAnimations(g, b);
            return m.length ? (h.add(this._chart, m), !0) : void 0;
        }
        constructor(g, b) {
            this._chart = g, this._properties = new Map(), this.configure(b);
        }
    }

    function m(g, b) {
        const n = g && g.options || {},
            o = n.reverse,
            p = void 0 === n.min ? b : 0,
            q = void 0 === n.max ? b : 0;
        return {
            start: o ? q : p,
            end: o ? p : q
        };
    }

    function n(g, b) {
        const o = [],
            p = g._getSortedDatasetMetas(b);
        let q, r;
        for (q = 0, r = p.length; q < r; ++q)
            o.push(p[q].index);
        return o;
    }

    function o(g, b, c, p = {}) {
        const q = g.keys,
            r = 'single' === p.mode;
        let s, t, u, v;
        if (null !== b) {
            for (s = 0, t = q.length; s < t; ++s) {
                if (u = +q[s], u === c) {
                    if (p.all)
                        continue;
                    break;
                }
                v = g.values[u], (0, e.g)(v) && (r || 0 === b || (0, e.s)(b) === (0, e.s)(v)) && (b += v);
            }
            return b;
        }
    }

    function q(g, b) {
        const r = g && g.options.stacked;
        return r || void 0 === r && void 0 !== b.stack;
    }

    function r(g, b, c) {
        const s = g[b] || (g[b] = {});
        return s[c] || (s[c] = {});
    }

    function s(g, b, c, p) {
        for (const t of b.getMatchingVisibleMetas(p).reverse()) {
            const u = g[t.index];
            if (c && u > 0 || !c && u < 0)
                return t.index;
        }
        return null;
    }

    function t(g, b) {
        const {
            chart: u,
            _cachedMeta: v
        } = w, x = u._stacks || (u._stacks = {}), {
            iScale: y,
            vScale: z,
            index: A
        } = B, C = y.axis, D = z.axis, E = function(w, b, u) {
            return `${ w.id }.${ b.id }.${ u.stack || u.type }`;
        }(y, z, B), F = b.length;
        let G;
        for (let H = 0; H < F; ++H) {
            const I = b[H],
                {
                    [J]: K,
                    [L]: M
                } = N;
            G = (N._stacks || (N._stacks = {}))[L] = r(x, E, K), G[A] = M, G._top = s(G, z, !0, B.type), G._bottom = s(G, z, !1, B.type);
            (G._visualValues || (G._visualValues = {}))[A] = M;
        }
    }

    function u(g, b) {
        const v = g.scales;
        return Object.keys(v).filter(g => v[g].axis === b).shift();
    }

    function v(g, b) {
        const w = g.controller.index,
            x = g.vScale && g.vScale.axis;
        if (x) {
            b = b || g._parsed;
            for (const y of b) {
                const z = y._stacks;
                if (!z || void 0 === z[x] || void 0 === z[x][w])
                    return;
                delete z[x][w], void 0 !== z[x]._visualValues && void 0 !== z[x]._visualValues[w] && delete z[x]._visualValues[w];
            }
        }
    }
    const w = g => 'reset' === g || 'none' === g,
        x = (g, b) => b ? g : Object.assign({}, g);
    class y {
        initialize() {
            const z = this._cachedMeta;
            this.configure(), this.linkScales(), z._stacked = q(z.vScale, z), this.addElements(), this.options.fill && !this.chart.isPluginEnabled('filler') && console.warn('Tried to use the \'fill\' option without the \'Filler\' plugin enabled. Please import and register the \'Filler\' plugin and make sure it is not disabled in the options');
        }
        updateIndex(g) {
            this.index !== g && v(this._cachedMeta), this.index = g;
        }
        linkScales() {
            const z = this.chart,
                A = this._cachedMeta,
                B = this.getDataset(),
                C = (z, A, B, C) => 'x' === z ? A : 'r' === z ? C : B,
                D = A.xAxisID = (0, e.v)(B.xAxisID, u(z, 'x')),
                E = A.yAxisID = (0, e.v)(B.yAxisID, u(z, 'y')),
                F = A.rAxisID = (0, e.v)(B.rAxisID, u(z, 'r')),
                G = A.indexAxis,
                H = A.iAxisID = C(G, D, E, F),
                I = A.vAxisID = C(G, E, D, F);
            A.xScale = this.getScaleForId(D), A.yScale = this.getScaleForId(E), A.rScale = this.getScaleForId(F), A.iScale = this.getScaleForId(H), A.vScale = this.getScaleForId(I);
        }
        getDataset() {
            return this.chart.data.datasets[this.index];
        }
        getMeta() {
            return this.chart.getDatasetMeta(this.index);
        }
        getScaleForId(g) {
            return this.chart.scales[g];
        }
        _getOtherScale(g) {
            const z = this._cachedMeta;
            return g === z.iScale ? z.vScale : z.iScale;
        }
        reset() {
            this._update('reset');
        }
        _destroy() {
            const A = this._cachedMeta;
            this._data && (0, e.u)(this._data, this), A._stacked && v(A);
        }
        _dataCheck() {
            const B = this.getDataset(),
                C = B.data || (B.data = []),
                D = this._data;
            if ((0, e.i)(C))
                this._data = function(B) {
                    const E = Object.keys(B),
                        F = new Array(E.length);
                    let G, H, I;
                    for (G = 0, H = E.length; G < H; ++G)
                        I = E[G], F[G] = {
                            x: I,
                            y: B[I]
                        };
                    return F;
                }(C);
            else if (D !== C) {
                if (D) {
                    (0, e.u)(D, this);
                    const E = this._cachedMeta;
                    v(E), E._parsed = [];
                }
                C && Object.isExtensible(C) && (0, e.l)(C, this), this._syncList = [], this._data = C;
            }
        }
        addElements() {
            const E = this._cachedMeta;
            this._dataCheck(), this.datasetElementType && (E.dataset = new this.datasetElementType());
        }
        buildOrUpdateElements(g) {
            const z = this._cachedMeta,
                A = this.getDataset();
            let B = !1;
            this._dataCheck();
            const C = z._stacked;
            z._stacked = q(z.vScale, z), z.stack !== A.stack && (B = !0, v(z), z.stack = A.stack), this._resyncElements(g), (B || C !== z._stacked) && t(this, z._parsed);
        }
        configure() {
            const D = this.chart.config,
                E = D.datasetScopeKeys(this._type),
                F = D.getOptionScopes(this.getDataset(), E, !0);
            this.options = D.createResolver(F, this.getContext()), this._parsing = this.options.parsing, this._cachedDataOpts = {};
        }
        parse(g, b) {
            const {
                _cachedMeta: z,
                _data: A
            } = this, {
                iScale: B,
                _stacked: C
            } = D, E = B.axis;
            let F, G, H, I = 0 === g && b === A.length || D._sorted,
                J = g > 0 && D._parsed[g - 1];
            if (!1 === this._parsing)
                D._parsed = A, D._sorted = !0, H = A;
            else {
                H = (0, e.b)(A[g]) ? this.parseArrayData(D, A, g, b) : (0, e.i)(A[g]) ? this.parseObjectData(D, A, g, b) : this.parsePrimitiveData(D, A, g, b);
                const K = () => null === G[E] || J && G[E] < J[E];
                for (F = 0; F < b; ++F)
                    D._parsed[F + g] = G = H[F], I && (K() && (I = !1), J = G);
                D._sorted = I;
            }
            C && t(this, H);
        }
        parsePrimitiveData(g, b, c, p) {
            const {
                iScale: z,
                vScale: A
            } = B, C = z.axis, D = A.axis, E = z.getLabels(), F = z === A, G = new Array(p);
            let H, I, J;
            for (H = 0, I = p; H < I; ++H)
                J = H + c, G[H] = {
                    [C]: F || z.parse(E[J], J),
                    [D]: A.parse(b[J], J)
                };
            return G;
        }
        parseArrayData(g, b, c, p) {
            const {
                xScale: z,
                yScale: A
            } = B, C = new Array(p);
            let D, E, F, G;
            for (D = 0, E = p; D < E; ++D)
                F = D + c, G = b[F], C[D] = {
                    x: z.parse(G[0], F),
                    y: A.parse(G[1], F)
                };
            return C;
        }
        parseObjectData(g, b, c, p) {
            const {
                xScale: z,
                yScale: A
            } = B, {
                xAxisKey: C = 'x',
                yAxisKey: D = 'y'
            } = this._parsing, E = new Array(p);
            let F, G, H, I;
            for (F = 0, G = p; F < G; ++F)
                H = F + c, I = b[H], E[F] = {
                    x: z.parse((0, e.f)(I, C), H),
                    y: A.parse((0, e.f)(I, D), H)
                };
            return E;
        }
        getParsed(g) {
            return this._cachedMeta._parsed[g];
        }
        getDataElement(g) {
            return this._cachedMeta.data[g];
        }
        applyStack(g, b, c) {
            const z = this.chart,
                A = this._cachedMeta,
                B = b[g.axis];
            return o({
                keys: n(z, !0),
                values: b._stacks[g.axis]._visualValues
            }, B, A.index, {
                mode: c
            });
        }
        updateRangeFromParsed(g, b, c, p) {
            const z = c[b.axis];
            let A = null === z ? NaN : z;
            const B = p && c._stacks[b.axis];
            p && B && (p.values = B, A = o(p, z, this._cachedMeta.index)), g.min = Math.min(g.min, A), g.max = Math.max(g.max, A);
        }
        getMinMax(g, b) {
            const z = this._cachedMeta,
                A = z._parsed,
                B = z._sorted && g === z.iScale,
                C = A.length,
                D = this._getOtherScale(g),
                E = ((g, b, z) => g && !b.hidden && b._stacked && {
                    keys: n(z, !0),
                    values: null
                })(b, z, this.chart),
                F = {
                    min: Number.POSITIVE_INFINITY,
                    max: Number.NEGATIVE_INFINITY
                },
                {
                    min: G,
                    max: H
                } = function(g) {
                    const {
                        min: I,
                        max: J,
                        minDefined: K,
                        maxDefined: L
                    } = g.getUserBounds();
                    return {
                        min: K ? I : Number.NEGATIVE_INFINITY,
                        max: L ? J : Number.POSITIVE_INFINITY
                    };
                }(D);
            let I, J;

            function K() {
                J = A[I];
                const L = J[D.axis];
                return !(0, e.g)(J[g.axis]) || G > L || H < L;
            }
            for (I = 0; I < C && (K() || (this.updateRangeFromParsed(F, g, J, E), !B)); ++I);
            if (B)
                for (I = C - 1; I >= 0; --I)
                    if (!K()) {
                        this.updateRangeFromParsed(F, g, J, E);
                        break;
                    }
            return F;
        }
        getAllParsedValues(g) {
            const z = this._cachedMeta._parsed,
                A = [];
            let B, C, D;
            for (B = 0, C = z.length; B < C; ++B)
                D = z[B][g.axis], (0, e.g)(D) && A.push(D);
            return A;
        }
        getMaxOverflow() {
            return !1;
        }
        getLabelAndValue(g) {
            const z = this._cachedMeta,
                A = z.iScale,
                B = z.vScale,
                C = this.getParsed(g);
            return {
                label: A ? '' + A.getLabelForValue(C[A.axis]) : '',
                value: B ? '' + B.getLabelForValue(C[B.axis]) : ''
            };
        }
        _update(g) {
            const z = this._cachedMeta;
            this.update(g || 'default'), z._clip = function(g) {
                let A, B, C, D;
                return (0, e.i)(g) ? (A = g.top, B = g.right, C = g.bottom, D = g.left) : A = B = C = D = g, {
                    top: A,
                    right: B,
                    bottom: C,
                    left: D,
                    disabled: !1 === g
                };
            }((0, e.v)(this.options.clip, function(g, z, c) {
                if (!1 === c)
                    return !1;
                const A = m(g, c),
                    B = m(z, c);
                return {
                    top: B.end,
                    right: A.end,
                    bottom: B.start,
                    left: A.start
                };
            }(z.xScale, z.yScale, this.getMaxOverflow())));
        }
        update(g) {}
        draw() {
            const z = this._ctx,
                A = this.chart,
                B = this._cachedMeta,
                C = B.data || [],
                D = A.chartArea,
                E = [],
                F = this._drawStart || 0,
                G = this._drawCount || C.length - F,
                H = this.options.drawActiveElementsOnTop;
            let I;
            for (B.dataset && B.dataset.draw(z, D, F, G), I = F; I < F + G; ++I) {
                const J = C[I];
                J.hidden || (J.active && H ? E.push(J) : J.draw(z, D));
            }
            for (I = 0; I < E.length; ++I)
                E[I].draw(z, D);
        }
        getStyle(g, b) {
            const z = b ? 'active' : 'default';
            return void 0 === g && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(z) : this.resolveDataElementOptions(g || 0, z);
        }
        getContext(g, b, c) {
            const z = this.getDataset();
            let A;
            if (g >= 0 && g < this._cachedMeta.data.length) {
                const B = this._cachedMeta.data[g];
                A = B.$context || (B.$context = function(g, B, c) {
                    return (0, e.j)(g, {
                        active: !1,
                        dataIndex: B,
                        parsed: void 0,
                        raw: void 0,
                        element: c,
                        index: B,
                        mode: 'default',
                        type: 'data'
                    });
                }(this.getContext(), g, B)), A.parsed = this.getParsed(g), A.raw = z.data[g], A.index = A.dataIndex = g;
            } else
                A = this.$context || (this.$context = function(g, b) {
                    return (0, e.j)(g, {
                        active: !1,
                        dataset: void 0,
                        datasetIndex: b,
                        index: b,
                        mode: 'default',
                        type: 'dataset'
                    });
                }(this.chart.getContext(), this.index)), A.dataset = z, A.index = A.datasetIndex = this.index;
            return A.active = !!b, A.mode = c, A;
        }
        resolveDatasetElementOptions(g) {
            return this._resolveElementOptions(this.datasetElementType.id, g);
        }
        resolveDataElementOptions(g, b) {
            return this._resolveElementOptions(this.dataElementType.id, b, g);
        }
        _resolveElementOptions(g, z = 'default', c) {
            const A = 'active' === z,
                B = this._cachedDataOpts,
                C = g + '-' + z,
                D = B[C],
                E = this.enableOptionSharing && (0, e.h)(c);
            if (D)
                return x(D, E);
            const F = this.chart.config,
                G = F.datasetElementScopeKeys(this._type, g),
                H = A ? [
                    `${ g }Hover`,
                    'hover',
                    g,
                    ''
                ] : [
                    g,
                    ''
                ],
                I = F.getOptionScopes(this.getDataset(), G),
                J = Object.keys(e.d.elements[g]),
                K = F.resolveNamedOptions(I, J, () => this.getContext(c, A, z), H);
            return K.$shared && (K.$shared = E, B[C] = Object.freeze(x(K, E))), K;
        }
        _resolveAnimations(g, z, c) {
            const A = this.chart,
                B = this._cachedDataOpts,
                C = `animation-${ z }`,
                D = B[C];
            if (D)
                return D;
            let E;
            if (!1 !== A.options.animation) {
                const F = this.chart.config,
                    G = F.datasetAnimationScopeKeys(this._type, z),
                    H = F.getOptionScopes(this.getDataset(), G);
                E = F.createResolver(H, this.getContext(g, c, z));
            }
            const F = new l(A, E && E.animations);
            return E && E._cacheable && (B[C] = Object.freeze(F)), F;
        }
        getSharedOptions(g) {
            if (g.$shared)
                return this._sharedOptions || (this._sharedOptions = Object.assign({}, g));
        }
        includeOptions(g, z) {
            return !z || w(g) || this.chart._animationsDisabled;
        }
        _getSharedOptions(g, z) {
            const A = this.resolveDataElementOptions(g, z),
                B = this._sharedOptions,
                C = this.getSharedOptions(A),
                D = this.includeOptions(z, C) || C !== B;
            return this.updateSharedOptions(C, z, A), {
                sharedOptions: C,
                includeOptions: D
            };
        }
        updateElement(g, z, c, p) {
            w(p) ? Object.assign(g, c) : this._resolveAnimations(z, p).update(g, c);
        }
        updateSharedOptions(g, z, c) {
            g && !w(z) && this._resolveAnimations(void 0, z).update(g, c);
        }
        _setStyle(g, z, c, p) {
            g.active = p;
            const A = this.getStyle(z, p);
            this._resolveAnimations(z, c, p).update(g, {
                options: !p && this.getSharedOptions(A) || A
            });
        }
        removeHoverStyle(g, z, c) {
            this._setStyle(g, c, 'active', !1);
        }
        setHoverStyle(g, z, c) {
            this._setStyle(g, c, 'active', !0);
        }
        _removeDatasetHoverStyle() {
            const A = this._cachedMeta.dataset;
            A && this._setStyle(A, void 0, 'active', !1);
        }
        _setDatasetHoverStyle() {
            const B = this._cachedMeta.dataset;
            B && this._setStyle(B, void 0, 'active', !0);
        }
        _resyncElements(g) {
            const A = this._data,
                B = this._cachedMeta.data;
            for (const [C, D, E] of this._syncList)
                this[C](D, E);
            this._syncList = [];
            const F = E.length,
                G = D.length,
                H = Math.min(G, F);
            H && this.parse(0, H), G > F ? this._insertElements(F, G - F, C) : G < F && this._removeElements(G, F - G);
        }
        _insertElements(g, z, A = !0) {
            const B = this._cachedMeta,
                C = B.data,
                D = g + z;
            let E;
            const F = g => {
                for (g.length += z, E = g.length - 1; E >= D; E--)
                    g[E] = g[E - z];
            };
            for (F(C), E = g; E < D; ++E)
                C[E] = new this.dataElementType();
            this._parsing && F(B._parsed), this.parse(g, z), A && this.updateElements(C, g, z, 'reset');
        }
        updateElements(g, z, A, p) {}
        _removeElements(g, z) {
            const B = this._cachedMeta;
            if (this._parsing) {
                const C = B._parsed.splice(g, z);
                B._stacked && v(B, C);
            }
            B.data.splice(g, z);
        }
        _sync(g) {
            if (this._parsing)
                this._syncList.push(g);
            else {
                const [B, C, D] = E;
                this[B](C, D);
            }
            this.chart._dataChanges.push([
                this.index,
                ...g
            ]);
        }
        _onDataPush() {
            const B = arguments.length;
            this._sync([
                '_insertElements',
                this.getDataset().data.length - B,
                B
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
        _onDataSplice(g, z) {
            z && this._sync([
                '_removeElements',
                g,
                z
            ]);
            const B = arguments.length - 2;
            B && this._sync([
                '_insertElements',
                g,
                B
            ]);
        }
        _onDataUnshift() {
            this._sync([
                '_insertElements',
                0,
                arguments.length
            ]);
        }
        constructor(g, z) {
            this.chart = g, this._ctx = g.ctx, this.index = z, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = !1, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = !1, this.supportsDecimation = !1, this.$context = void 0, this._syncList = [], this.datasetElementType = new.target.datasetElementType, this.dataElementType = new.target.dataElementType, this.initialize();
        }
    }

    function B(g) {
        const C = g.iScale,
            D = function(g, C) {
                if (!g._cache.$bar) {
                    const E = g.getMatchingVisibleMetas(C);
                    let F = [];
                    for (let G = 0, H = E.length; G < H; G++)
                        F = F.concat(E[G].controller.getAllParsedValues(g));
                    g._cache.$bar = (0, e._)(F.sort((g, G) => g - G));
                }
                return g._cache.$bar;
            }(C, g.type);
        let E, F, G, H, I = C._length;
        const J = () => {
            32767 !== G && -32768 !== G && ((0, e.h)(H) && (I = Math.min(I, Math.abs(G - H) || I)), H = G);
        };
        for (E = 0, F = D.length; E < F; ++E)
            G = C.getPixelForValue(D[E]), J();
        for (H = void 0, E = 0, F = C.ticks.length; E < F; ++E)
            G = C.getPixelForTick(E), J();
        return I;
    }

    function C(g, z, A, p) {
        return (0, e.b)(g) ? function(g, z, A, p) {
            const D = A.parse(g[0], p),
                E = A.parse(g[1], p),
                F = Math.min(D, E),
                G = Math.max(D, E);
            let H = I,
                J = K;
            Math.abs(I) > Math.abs(K) && (H = K, J = I), z[A.axis] = J, z._custom = {
                barStart: H,
                barEnd: J,
                start: D,
                end: E,
                min: I,
                max: K
            };
        }(g, z, A, p) : z[A.axis] = A.parse(g, p), z;
    }

    function D(g, z, A, p) {
        const E = g.iScale,
            F = g.vScale,
            G = E.getLabels(),
            H = E === F,
            I = [];
        let J, K, L, M;
        for (J = A, K = A + p; J < K; ++J)
            M = z[J], L = {}, L[E.axis] = H || E.parse(G[J], J), I.push(C(M, L, F, J));
        return I;
    }

    function E(g) {
        return g && void 0 !== g.barStart && void 0 !== g.barEnd;
    }

    function F(g, z, A, p) {
        let G = z.borderSkipped;
        const H = {};
        if (!G)
            return void(g.borderSkipped = H);
        if (!0 === G)
            return void(g.borderSkipped = {
                top: !0,
                right: !0,
                bottom: !0,
                left: !0
            });
        const {
            start: I,
            end: J,
            reverse: K,
            top: L,
            bottom: M
        } = function(g) {
            let N, O, P, Q, R;
            return g.horizontal ? (N = g.base > g.x, O = 'left', P = 'right') : (N = g.base < g.y, O = 'bottom', P = 'top'), N ? (Q = 'end', R = 'start') : (Q = 'start', R = 'end'), {
                start: O,
                end: P,
                reverse: N,
                top: Q,
                bottom: R
            };
        }(g);
        'middle' === G && A && (g.enableBorderRadius = !0, (A._top || 0) === p ? G = L : (A._bottom || 0) === p ? G = M : (H[G(M, I, J, K)] = !0, G = L)), H[G(G, I, J, K)] = !0, g.borderSkipped = H;
    }

    function G(g, z, A, p) {
        var H, I, J;
        return p ? (J = A, g = H(g = (H = g) === (I = z) ? J : H === J ? I : H, A, z)) : g = H(g, z, A), g;
    }

    function H(g, z, A) {
        return 'start' === g ? z : 'end' === g ? A : g;
    }

    function I(g, {
        inflateAmount: J
    }, A) {
        g.inflateAmount = 'auto' === J ? 1 === A ? 0.33 : 0 : J;
    }
    (0, d.default)(y, 'defaults', {}), (0, d.default)(y, 'datasetElementType', null), (0, d.default)(y, 'dataElementType', null);
    class K extends y {
        parsePrimitiveData(g, J, A, p) {
            return D(g, J, A, p);
        }
        parseArrayData(g, J, A, p) {
            return D(g, J, A, p);
        }
        parseObjectData(g, J, A, p) {
            const {
                iScale: L,
                vScale: M
            } = N, {
                xAxisKey: O = 'x',
                yAxisKey: P = 'y'
            } = this._parsing, Q = 'x' === L.axis ? O : P, R = 'x' === M.axis ? O : P, S = [];
            let T, U, V, W;
            for (T = A, U = A + p; T < U; ++T)
                W = J[T], V = {}, V[L.axis] = L.parse((0, e.f)(W, Q), T), S.push(C((0, e.f)(W, R), V, M, T));
            return S;
        }
        updateRangeFromParsed(g, J, A, p) {
            super.updateRangeFromParsed(g, J, A, p);
            const L = A._custom;
            L && J === this._cachedMeta.vScale && (g.min = Math.min(g.min, L.min), g.max = Math.max(g.max, L.max));
        }
        getMaxOverflow() {
            return 0;
        }
        getLabelAndValue(g) {
            const L = this._cachedMeta,
                {
                    iScale: M,
                    vScale: N
                } = O,
                P = this.getParsed(g),
                Q = P._custom,
                R = E(Q) ? '[' + Q.start + ', ' + Q.end + ']' : '' + N.getLabelForValue(P[N.axis]);
            return {
                label: '' + M.getLabelForValue(P[M.axis]),
                value: R
            };
        }
        initialize() {
            this.enableOptionSharing = !0, super.initialize();
            this._cachedMeta.stack = this.getDataset().stack;
        }
        update(g) {
            const L = this._cachedMeta;
            this.updateElements(L.data, 0, L.data.length, g);
        }
        updateElements(g, J, A, p) {
            const L = 'reset' === p,
                {
                    index: M,
                    _cachedMeta: {
                        vScale: N
                    }
                } = this,
                O = N.getBasePixel(),
                P = N.isHorizontal(),
                Q = this._getRuler(),
                {
                    sharedOptions: R,
                    includeOptions: S
                } = this._getSharedOptions(J, p);
            for (let T = U; T < U + A; T++) {
                const V = this.getParsed(T),
                    W = L || (0, e.k)(V[N.axis]) ? {
                        base: O,
                        head: O
                    } : this._calculateBarValuePixels(T),
                    X = this._calculateBarIndexPixels(T, Q),
                    Y = (V._stacks || {})[N.axis],
                    Z = {
                        horizontal: P,
                        base: W.base,
                        enableBorderRadius: !Y || E(V._custom) || M === Y._top || M === Y._bottom,
                        x: P ? W.head : X.center,
                        y: P ? X.center : W.head,
                        height: P ? X.size : Math.abs(W.size),
                        width: P ? Math.abs(W.size) : X.size
                    };
                S && (Z.options = R || this.resolveDataElementOptions(T, g[T].active ? 'active' : p));
                const $ = Z.options || g[T].options;
                F(Z, $, Y, M), I(Z, $, Q.ratio), this.updateElement(g[T], T, Z, p);
            }
        }
        _getStacks(g, J) {
            const {
                iScale: L
            } = this._cachedMeta, M = L.getMatchingVisibleMetas(this._type).filter(g => g.controller.options.grouped), N = L.options.stacked, O = [], P = g => {
                const Q = g.controller.getParsed(J),
                    R = Q && Q[g.vScale.axis];
                if ((0, e.k)(R) || isNaN(R))
                    return !0;
            };
            for (const Q of M)
                if ((void 0 === J || !P(Q)) && ((!1 === N || -1 === O.indexOf(Q.stack) || void 0 === N && void 0 === Q.stack) && O.push(Q.stack), Q.index === g))
                    break;
            return O.length || O.push(void 0), O;
        }
        _getStackCount(g) {
            return this._getStacks(void 0, g).length;
        }
        _getStackIndex(g, J, A) {
            const L = this._getStacks(g, A),
                M = void 0 !== J ? L.indexOf(J) : -1;
            return -1 === M ? L.length - 1 : M;
        }
        _getRuler() {
            const N = this.options,
                O = this._cachedMeta,
                P = O.iScale,
                Q = [];
            let R, S;
            for (R = 0, S = O.data.length; R < S; ++R)
                Q.push(P.getPixelForValue(this.getParsed(R)[P.axis], R));
            const T = N.barThickness;
            return {
                min: T || B(O),
                pixels: Q,
                start: P._startPixel,
                end: P._endPixel,
                stackCount: this._getStackCount(),
                scale: P,
                grouped: N.grouped,
                ratio: T ? 1 : N.categoryPercentage * N.barPercentage
            };
        }
        _calculateBarValuePixels(g) {
            const {
                _cachedMeta: {
                    vScale: L,
                    _stacked: M,
                    index: N
                },
                options: {
                    base: O,
                    minBarLength: P
                }
            } = this, Q = O || 0, R = this.getParsed(g), S = R._custom, T = E(S);
            let U, V, W = R[L.axis],
                X = 0,
                Y = M ? this.applyStack(L, R, M) : W;
            Y !== W && (X = Y - W, Y = W), T && (W = S.barStart, Y = S.barEnd - S.barStart, 0 !== W && (0, e.s)(W) !== (0, e.s)(S.barEnd) && (X = 0), X += W);
            const Z = (0, e.k)(O) || T ? X : O;
            let $ = L.getPixelForValue(Z);
            if (U = this.chart.getDataVisibility(g) ? L.getPixelForValue(X + Y) : $, V = U - $, Math.abs(V) < P) {
                V = function(g, L, M) {
                    return 0 !== g ? (0, e.s)(g) : (L.isHorizontal() ? 1 : -1) * (L.min >= M ? 1 : -1);
                }(V, L, Q) * P, W === Q && ($ -= V / 2);
                const _ = L.getPixelForDecimal(0),
                    ab = L.getPixelForDecimal(1),
                    bb = Math.min(_, ab),
                    cb = Math.max(_, ab);
                $ = Math.max(Math.min($, cb), bb), U = $ + V, M && !T && (R._stacks[L.axis]._visualValues[N] = L.getValueForPixel(U) - L.getValueForPixel($));
            }
            if ($ === L.getPixelForValue(Q)) {
                const _ = (0, e.s)(V) * L.getLineWidthForValue(Q) / 2;
                $ += _, V -= _;
            }
            return {
                size: V,
                base: $,
                head: U,
                center: U + V / 2
            };
        }
        _calculateBarIndexPixels(g, J) {
            const L = J.scale,
                M = this.options,
                N = M.skipNull,
                O = (0, e.v)(M.maxBarThickness, 1 / 0);
            let P, Q;
            if (J.grouped) {
                const R = N ? this._getStackCount(g) : J.stackCount,
                    S = 'flex' === M.barThickness ? function(g, J, R, M) {
                        const T = J.pixels,
                            U = T[g];
                        let V = g > 0 ? T[g - 1] : null,
                            W = g < T.length - 1 ? T[g + 1] : null;
                        const X = R.categoryPercentage;
                        null === V && (V = U - (null === W ? J.end - J.start : W - U)), null === W && (W = U + U - V);
                        const Y = U - (U - Math.min(V, W)) / 2 * X;
                        return {
                            chunk: Math.abs(W - V) / 2 * X / M,
                            ratio: R.barPercentage,
                            start: Y
                        };
                    }(g, J, M, R) : function(g, J, R, M) {
                        const T = R.barThickness;
                        let U, V;
                        return (0, e.k)(T) ? (U = J.min * R.categoryPercentage, V = R.barPercentage) : (U = T * M, V = 1), {
                            chunk: U / M,
                            ratio: V,
                            start: J.pixels[g] - U / 2
                        };
                    }(g, J, M, R),
                    T = this._getStackIndex(this.index, this._cachedMeta.stack, N ? g : void 0);
                P = S.start + S.chunk * T + S.chunk / 2, Q = Math.min(O, S.chunk * S.ratio);
            } else
                P = L.getPixelForValue(this.getParsed(g)[L.axis], g), Q = Math.min(O, J.min * J.ratio);
            return {
                base: P - Q / 2,
                head: P + Q / 2,
                center: P,
                size: Q
            };
        }
        draw() {
            const R = this._cachedMeta,
                S = R.vScale,
                T = R.data,
                U = T.length;
            let V = 0;
            for (; V < U; ++V)
                null !== this.getParsed(V)[S.axis] && T[V].draw(this._ctx);
        }
    }
    (0, d.default)(K, 'id', 'bar'), (0, d.default)(K, 'defaults', {
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
    }), (0, d.default)(K, 'overrides', {
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
    class L extends y {
        initialize() {
            this.enableOptionSharing = !0, super.initialize();
        }
        parsePrimitiveData(g, J, A, p) {
            const M = super.parsePrimitiveData(g, J, A, p);
            for (let N = 0; N < M.length; N++)
                M[N]._custom = this.resolveDataElementOptions(N + A).radius;
            return M;
        }
        parseArrayData(g, J, A, p) {
            const M = super.parseArrayData(g, J, A, p);
            for (let N = 0; N < M.length; N++) {
                const O = J[A + N];
                M[N]._custom = (0, e.v)(O[2], this.resolveDataElementOptions(N + A).radius);
            }
            return M;
        }
        parseObjectData(g, J, A, p) {
            const M = super.parseObjectData(g, J, A, p);
            for (let N = 0; N < M.length; N++) {
                const O = J[A + N];
                M[N]._custom = (0, e.v)(O && O.r && +O.r, this.resolveDataElementOptions(N + A).radius);
            }
            return M;
        }
        getMaxOverflow() {
            const O = this._cachedMeta.data;
            let P = 0;
            for (let Q = O.length - 1; Q >= 0; --Q)
                P = Math.max(P, O[Q].size(this.resolveDataElementOptions(Q)) / 2);
            return P > 0 && P;
        }
        getLabelAndValue(g) {
            const M = this._cachedMeta,
                N = this.chart.data.labels || [],
                {
                    xScale: O,
                    yScale: P
                } = Q,
                R = this.getParsed(g),
                S = O.getLabelForValue(R.x),
                T = P.getLabelForValue(R.y),
                U = R._custom;
            return {
                label: N[g] || '',
                value: '(' + S + ', ' + T + (U ? ', ' + U : '') + ')'
            };
        }
        update(g) {
            const M = this._cachedMeta.data;
            this.updateElements(M, 0, M.length, g);
        }
        updateElements(g, J, A, p) {
            const M = 'reset' === p,
                {
                    iScale: N,
                    vScale: O
                } = this._cachedMeta,
                {
                    sharedOptions: P,
                    includeOptions: Q
                } = this._getSharedOptions(J, p),
                R = N.axis,
                S = O.axis;
            for (let T = U; T < U + A; T++) {
                const V = g[T],
                    W = !M && this.getParsed(T),
                    X = {},
                    Y = X[R] = M ? N.getPixelForDecimal(0.5) : N.getPixelForValue(W[R]),
                    Z = X[S] = M ? O.getBasePixel() : O.getPixelForValue(W[S]);
                X.skip = isNaN(Y) || isNaN(Z), Q && (X.options = P || this.resolveDataElementOptions(T, V.active ? 'active' : p), M && (X.options.radius = 0)), this.updateElement(V, T, X, p);
            }
        }
        resolveDataElementOptions(g, J) {
            const M = this.getParsed(g);
            let N = super.resolveDataElementOptions(g, J);
            N.$shared && (N = Object.assign({}, N, {
                $shared: !1
            }));
            const O = N.radius;
            return 'active' !== J && (N.radius = 0), N.radius += (0, e.v)(M && M._custom, O), N;
        }
    }
    (0, d.default)(L, 'id', 'bubble'), (0, d.default)(L, 'defaults', {
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
    }), (0, d.default)(L, 'overrides', {
        scales: {
            x: {
                type: 'linear'
            },
            y: {
                type: 'linear'
            }
        }
    });
    class M extends y {
        linkScales() {}
        parse(g, J) {
            const N = this.getDataset().data,
                O = this._cachedMeta;
            if (!1 === this._parsing)
                O._parsed = N;
            else {
                let P, Q, R = g => +N[g];
                if ((0, e.i)(N[g])) {
                    const {
                        key: S = 'value'
                    } = this._parsing;
                    R = J => +(0, e.f)(N[J], S);
                }
                for (P = g, Q = g + J; P < Q; ++P)
                    O._parsed[P] = R(P);
            }
        }
        _getRotation() {
            return (0, e.t)(this.options.rotation - 90);
        }
        _getCircumference() {
            return (0, e.t)(this.options.circumference);
        }
        _getRotationExtents() {
            let P = e.T,
                Q = -e.T;
            for (let R = 0; R < this.chart.data.datasets.length; ++R)
                if (this.chart.isDatasetVisible(R) && this.chart.getDatasetMeta(R).type === this._type) {
                    const S = this.chart.getDatasetMeta(R).controller,
                        T = S._getRotation(),
                        U = S._getCircumference();
                    P = Math.min(P, T), Q = Math.max(Q, T + U);
                }
            return {
                rotation: P,
                circumference: Q - P
            };
        }
        update(g) {
            const N = this.chart,
                {
                    chartArea: O
                } = P,
                Q = this._cachedMeta,
                R = Q.data,
                S = this.getMaxBorderWidth() + this.getMaxOffset(R) + this.options.spacing,
                T = Math.max((Math.min(O.width, O.height) - S) / 2, 0),
                U = Math.min((0, e.m)(this.options.cutout, T), 1),
                V = this._getRingWeight(this.index),
                {
                    circumference: W,
                    rotation: X
                } = this._getRotationExtents(),
                {
                    ratioX: Y,
                    ratioY: Z,
                    offsetX: $,
                    offsetY: _
                } = function(g, P, O) {
                    let ab = 1,
                        bb = 1,
                        cb = 0,
                        db = 0;
                    if (P < e.T) {
                        const eb = fb,
                            gb = eb + P,
                            hb = Math.cos(eb),
                            ib = Math.sin(eb),
                            jb = Math.cos(gb),
                            kb = Math.sin(gb),
                            lb = (fb, P, ab) => (0, e.p)(fb, eb, gb, !0) ? 1 : Math.max(P, P * O, ab, ab * O),
                            mb = (fb, P, ab) => (0, e.p)(fb, eb, gb, !0) ? -1 : Math.min(P, P * O, ab, ab * O),
                            nb = lb(0, hb, jb),
                            ob = lb(e.H, ib, kb),
                            pb = mb(e.P, hb, jb),
                            qb = mb(e.P + e.H, ib, kb);
                        ab = (nb - pb) / 2, bb = (ob - qb) / 2, cb = -(nb + pb) / 2, db = -(ob + qb) / 2;
                    }
                    return {
                        ratioX: ab,
                        ratioY: bb,
                        offsetX: cb,
                        offsetY: db
                    };
                }(X, W, U),
                ab = (O.width - S) / Y,
                bb = (O.height - S) / Z,
                cb = Math.max(Math.min(ab, bb) / 2, 0),
                db = (0, e.n)(this.options.radius, cb),
                eb = (db - Math.max(db * U, 0)) / this._getVisibleDatasetWeightTotal();
            this.offsetX = $ * db, this.offsetY = _ * db, Q.total = this.calculateTotal(), this.outerRadius = db - eb * this._getRingWeightOffset(this.index), this.innerRadius = Math.max(this.outerRadius - eb * V, 0), this.updateElements(R, 0, R.length, g);
        }
        _circumference(g, J) {
            const N = this.options,
                O = this._cachedMeta,
                P = this._getCircumference();
            return J && N.animation.animateRotate || !this.chart.getDataVisibility(g) || null === O._parsed[g] || O.data[g].hidden ? 0 : this.calculateCircumference(O._parsed[g] * P / e.T);
        }
        updateElements(g, J, A, p) {
            const N = 'reset' === p,
                O = this.chart,
                P = O.chartArea,
                Q = O.options.animation,
                R = (P.left + P.right) / 2,
                S = (P.top + P.bottom) / 2,
                T = N && Q.animateScale,
                U = T ? 0 : this.innerRadius,
                V = T ? 0 : this.outerRadius,
                {
                    sharedOptions: W,
                    includeOptions: X
                } = this._getSharedOptions(J, p);
            let Y, Z = this._getRotation();
            for (Y = 0; Y < J; ++Y)
                Z += this._circumference(Y, N);
            for (Y = J; Y < J + A; ++Y) {
                const $ = this._circumference(Y, N),
                    _ = g[Y],
                    ab = {
                        x: R + this.offsetX,
                        y: S + this.offsetY,
                        startAngle: Z,
                        endAngle: Z + $,
                        circumference: $,
                        outerRadius: V,
                        innerRadius: U
                    };
                X && (ab.options = W || this.resolveDataElementOptions(Y, _.active ? 'active' : p)), Z += $, this.updateElement(_, Y, ab, p);
            }
        }
        calculateTotal() {
            const $ = this._cachedMeta,
                _ = $.data;
            let ab, bb = 0;
            for (ab = 0; ab < _.length; ab++) {
                const cb = $._parsed[ab];
                null === cb || isNaN(cb) || !this.chart.getDataVisibility(ab) || _[ab].hidden || (bb += Math.abs(cb));
            }
            return bb;
        }
        calculateCircumference(g) {
            const N = this._cachedMeta.total;
            return N > 0 && !isNaN(g) ? e.T * (Math.abs(g) / N) : 0;
        }
        getLabelAndValue(g) {
            const N = this._cachedMeta,
                O = this.chart,
                P = O.data.labels || [],
                Q = (0, e.o)(N._parsed[g], O.options.locale);
            return {
                label: P[g] || '',
                value: Q
            };
        }
        getMaxBorderWidth(g) {
            let N = 0;
            const O = this.chart;
            let P, Q, R, S, T;
            if (!g)
                for (P = 0, Q = O.data.datasets.length; P < Q; ++P)
                    if (O.isDatasetVisible(P)) {
                        R = O.getDatasetMeta(P), g = R.data, S = R.controller;
                        break;
                    }
            if (!g)
                return 0;
            for (P = 0, Q = g.length; P < Q; ++P)
                T = S.resolveDataElementOptions(P), 'inner' !== T.borderAlign && (N = Math.max(N, T.borderWidth || 0, T.hoverBorderWidth || 0));
            return N;
        }
        getMaxOffset(g) {
            let N = 0;
            for (let O = 0, P = g.length; O < P; ++O) {
                const Q = this.resolveDataElementOptions(O);
                N = Math.max(N, Q.offset || 0, Q.hoverOffset || 0);
            }
            return N;
        }
        _getRingWeightOffset(g) {
            let N = 0;
            for (let O = 0; O < g; ++O)
                this.chart.isDatasetVisible(O) && (N += this._getRingWeight(O));
            return N;
        }
        _getRingWeight(g) {
            return Math.max((0, e.v)(this.chart.data.datasets[g].weight, 1), 0);
        }
        _getVisibleDatasetWeightTotal() {
            return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
        }
        constructor(g, J) {
            super(g, J), this.enableOptionSharing = !0, this.innerRadius = void 0, this.outerRadius = void 0, this.offsetX = void 0, this.offsetY = void 0;
        }
    }
    (0, d.default)(M, 'id', 'doughnut'), (0, d.default)(M, 'defaults', {
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
    }), (0, d.default)(M, 'descriptors', {
        _scriptable: g => 'spacing' !== g,
        _indexable: g => 'spacing' !== g
    }), (0, d.default)(M, 'overrides', {
        aspectRatio: 1,
        plugins: {
            legend: {
                labels: {
                    generateLabels(g) {
                        const N = g.data;
                        if (N.labels.length && N.datasets.length) {
                            const {
                                labels: {
                                    pointStyle: O,
                                    color: P
                                }
                            } = g.legend.options;
                            return N.labels.map((N, d) => {
                                const Q = g.getDatasetMeta(0).controller.getStyle(d);
                                return {
                                    text: N,
                                    fillStyle: Q.backgroundColor,
                                    strokeStyle: Q.borderColor,
                                    fontColor: P,
                                    lineWidth: Q.borderWidth,
                                    pointStyle: O,
                                    hidden: !g.getDataVisibility(d),
                                    index: d
                                };
                            });
                        }
                        return [];
                    }
                },
                onClick(g, J, A) {
                    A.chart.toggleDataVisibility(J.index), A.chart.update();
                }
            }
        }
    });
    class N extends y {
        initialize() {
            this.enableOptionSharing = !0, this.supportsDecimation = !0, super.initialize();
        }
        update(g) {
            const O = this._cachedMeta,
                {
                    dataset: P,
                    data: Q = [],
                    _dataset: R
                } = S,
                T = this.chart._animationsDisabled;
            let {
                start: U,
                count: V
            } = (0, e.q)(S, Q, T);
            this._drawStart = U, this._drawCount = V, (0, e.w)(S) && (U = 0, V = Q.length), P._chart = this.chart, P._datasetIndex = this.index, P._decimated = !!R._decimated, P.points = Q;
            const W = this.resolveDatasetElementOptions(g);
            this.options.showLine || (W.borderWidth = 0), W.segment = this.options.segment, this.updateElement(P, void 0, {
                animated: !T,
                options: W
            }, g), this.updateElements(Q, U, V, g);
        }
        updateElements(g, J, A, p) {
            const O = 'reset' === p,
                {
                    iScale: P,
                    vScale: Q,
                    _stacked: R,
                    _dataset: S
                } = this._cachedMeta,
                {
                    sharedOptions: T,
                    includeOptions: U
                } = this._getSharedOptions(J, p),
                V = P.axis,
                W = Q.axis,
                {
                    spanGaps: X,
                    segment: Y
                } = this.options,
                Z = (0, e.x)(X) ? X : Number.POSITIVE_INFINITY,
                $ = this.chart._animationsDisabled || O || 'none' === p,
                _ = J + A,
                ab = g.length;
            let bb = J > 0 && this.getParsed(J - 1);
            for (let cb = 0; cb < ab; ++cb) {
                const db = g[cb],
                    eb = $ ? db : {};
                if (cb < J || cb >= _) {
                    eb.skip = !0;
                    continue;
                }
                const fb = this.getParsed(cb),
                    gb = (0, e.k)(fb[W]),
                    hb = eb[V] = P.getPixelForValue(fb[V], cb),
                    ib = eb[W] = O || gb ? Q.getBasePixel() : Q.getPixelForValue(R ? this.applyStack(Q, fb, R) : fb[W], cb);
                eb.skip = isNaN(hb) || isNaN(ib) || gb, eb.stop = cb > 0 && Math.abs(fb[V] - bb[V]) > Z, Y && (eb.parsed = fb, eb.raw = S.data[cb]), U && (eb.options = T || this.resolveDataElementOptions(cb, db.active ? 'active' : p)), $ || this.updateElement(db, cb, eb, p), bb = fb;
            }
        }
        getMaxOverflow() {
            const db = this._cachedMeta,
                eb = db.dataset,
                fb = eb.options && eb.options.borderWidth || 0,
                gb = db.data || [];
            if (!gb.length)
                return fb;
            const hb = gb[0].size(this.resolveDataElementOptions(0)),
                ib = gb[gb.length - 1].size(this.resolveDataElementOptions(gb.length - 1));
            return Math.max(fb, hb, ib) / 2;
        }
        draw() {
            const jb = this._cachedMeta;
            jb.dataset.updateControlPoints(this.chart.chartArea, jb.iScale.axis), super.draw();
        }
    }
    (0, d.default)(N, 'id', 'line'), (0, d.default)(N, 'defaults', {
        datasetElementType: 'line',
        dataElementType: 'point',
        showLine: !0,
        spanGaps: !1
    }), (0, d.default)(N, 'overrides', {
        scales: {
            _index_: {
                type: 'category'
            },
            _value_: {
                type: 'linear'
            }
        }
    });
    class O extends y {
        getLabelAndValue(g) {
            const P = this._cachedMeta,
                Q = this.chart,
                R = Q.data.labels || [],
                S = (0, e.o)(P._parsed[g].r, Q.options.locale);
            return {
                label: R[g] || '',
                value: S
            };
        }
        parseObjectData(g, J, A, p) {
            return e.y.bind(this)(g, J, A, p);
        }
        update(g) {
            const P = this._cachedMeta.data;
            this._updateRadius(), this.updateElements(P, 0, P.length, g);
        }
        getMinMax() {
            const Q = this._cachedMeta,
                R = {
                    min: Number.POSITIVE_INFINITY,
                    max: Number.NEGATIVE_INFINITY
                };
            return Q.data.forEach((Q, A) => {
                const S = this.getParsed(A).r;
                !isNaN(S) && this.chart.getDataVisibility(A) && (S < R.min && (R.min = S), S > R.max && (R.max = S));
            }), R;
        }
        _updateRadius() {
            const S = this.chart,
                T = S.chartArea,
                U = S.options,
                V = Math.min(T.right - T.left, T.bottom - T.top),
                W = Math.max(V / 2, 0),
                X = (W - Math.max(U.cutoutPercentage ? W / 100 * U.cutoutPercentage : 1, 0)) / S.getVisibleDatasetCount();
            this.outerRadius = W - X * this.index, this.innerRadius = this.outerRadius - X;
        }
        updateElements(g, J, A, p) {
            const P = 'reset' === p,
                Q = this.chart,
                R = Q.options.animation,
                S = this._cachedMeta.rScale,
                T = S.xCenter,
                U = S.yCenter,
                V = S.getIndexAngle(0) - 0.5 * e.P;
            let W, X = Y;
            const Z = 360 / this.countVisibleElements();
            for (W = 0; W < J; ++W)
                X += this._computeAngle(W, p, Z);
            for (W = J; W < J + A; W++) {
                const $ = g[W];
                let _ = ab,
                    bb = ab + this._computeAngle(W, p, Z),
                    cb = Q.getDataVisibility(W) ? S.getDistanceFromCenterForValue(this.getParsed(W).r) : 0;
                ab = bb, P && (R.animateScale && (cb = 0), R.animateRotate && (_ = bb = Y));
                const db = {
                    x: T,
                    y: U,
                    innerRadius: 0,
                    outerRadius: cb,
                    startAngle: _,
                    endAngle: bb,
                    options: this.resolveDataElementOptions(W, $.active ? 'active' : p)
                };
                this.updateElement($, W, db, p);
            }
        }
        countVisibleElements() {
            const $ = this._cachedMeta;
            let _ = 0;
            return $.data.forEach(($, A) => {
                !isNaN(this.getParsed(A).r) && this.chart.getDataVisibility(A) && _++;
            }), _;
        }
        _computeAngle(g, J, A) {
            return this.chart.getDataVisibility(g) ? (0, e.t)(this.resolveDataElementOptions(g, J).angle || A) : 0;
        }
        constructor(g, J) {
            super(g, J), this.innerRadius = void 0, this.outerRadius = void 0;
        }
    }
    (0, d.default)(O, 'id', 'polarArea'), (0, d.default)(O, 'defaults', {
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
    }), (0, d.default)(O, 'overrides', {
        aspectRatio: 1,
        plugins: {
            legend: {
                labels: {
                    generateLabels(g) {
                        const P = g.data;
                        if (P.labels.length && P.datasets.length) {
                            const {
                                labels: {
                                    pointStyle: Q,
                                    color: R
                                }
                            } = g.legend.options;
                            return P.labels.map((P, d) => {
                                const S = g.getDatasetMeta(0).controller.getStyle(d);
                                return {
                                    text: P,
                                    fillStyle: S.backgroundColor,
                                    strokeStyle: S.borderColor,
                                    fontColor: R,
                                    lineWidth: S.borderWidth,
                                    pointStyle: Q,
                                    hidden: !g.getDataVisibility(d),
                                    index: d
                                };
                            });
                        }
                        return [];
                    }
                },
                onClick(g, J, A) {
                    A.chart.toggleDataVisibility(J.index), A.chart.update();
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
    class P extends M {}
    (0, d.default)(P, 'id', 'pie'), (0, d.default)(P, 'defaults', {
        cutout: 0,
        rotation: 0,
        circumference: 360,
        radius: '100%'
    });
    class Q extends y {
        getLabelAndValue(g) {
            const R = this._cachedMeta.vScale,
                S = this.getParsed(g);
            return {
                label: R.getLabels()[g],
                value: '' + R.getLabelForValue(S[R.axis])
            };
        }
        parseObjectData(g, J, A, p) {
            return e.y.bind(this)(g, J, A, p);
        }
        update(g) {
            const R = this._cachedMeta,
                S = R.dataset,
                T = R.data || [],
                U = R.iScale.getLabels();
            if (S.points = T, 'resize' !== g) {
                const V = this.resolveDatasetElementOptions(g);
                this.options.showLine || (V.borderWidth = 0);
                const W = {
                    _loop: !0,
                    _fullLoop: U.length === T.length,
                    options: V
                };
                this.updateElement(S, void 0, W, g);
            }
            this.updateElements(T, 0, T.length, g);
        }
        updateElements(g, J, A, p) {
            const R = this._cachedMeta.rScale,
                S = 'reset' === p;
            for (let T = U; T < U + A; T++) {
                const V = g[T],
                    W = this.resolveDataElementOptions(T, V.active ? 'active' : p),
                    X = R.getPointPositionForValue(T, this.getParsed(T).r),
                    Y = S ? R.xCenter : X.x,
                    Z = S ? R.yCenter : X.y,
                    $ = {
                        x: Y,
                        y: Z,
                        angle: X.angle,
                        skip: isNaN(Y) || isNaN(Z),
                        options: W
                    };
                this.updateElement(V, T, $, p);
            }
        }
    }
    (0, d.default)(Q, 'id', 'radar'), (0, d.default)(Q, 'defaults', {
        datasetElementType: 'line',
        dataElementType: 'point',
        indexAxis: 'r',
        showLine: !0,
        elements: {
            line: {
                fill: 'start'
            }
        }
    }), (0, d.default)(Q, 'overrides', {
        aspectRatio: 1,
        scales: {
            r: {
                type: 'radialLinear'
            }
        }
    });
    class R extends y {
        getLabelAndValue(g) {
            const S = this._cachedMeta,
                T = this.chart.data.labels || [],
                {
                    xScale: U,
                    yScale: V
                } = W,
                X = this.getParsed(g),
                Y = U.getLabelForValue(X.x),
                Z = V.getLabelForValue(X.y);
            return {
                label: T[g] || '',
                value: '(' + Y + ', ' + Z + ')'
            };
        }
        update(g) {
            const S = this._cachedMeta,
                {
                    data: T = []
                } = U,
                V = this.chart._animationsDisabled;
            let {
                start: W,
                count: X
            } = (0, e.q)(U, T, V);
            if (this._drawStart = W, this._drawCount = X, (0, e.w)(U) && (W = 0, X = T.length), this.options.showLine) {
                const {
                    dataset: Y,
                    _dataset: Z
                } = $;
                Y._chart = this.chart, Y._datasetIndex = this.index, Y._decimated = !!Z._decimated, Y.points = T;
                const _ = this.resolveDatasetElementOptions(g);
                _.segment = this.options.segment, this.updateElement(Y, void 0, {
                    animated: !V,
                    options: _
                }, g);
            }
            this.updateElements(T, W, X, g);
        }
        addElements() {
            const {
                showLine: Y
            } = this.options;
            !this.datasetElementType && Y && (this.datasetElementType = this.chart.registry.getElement('line')), super.addElements();
        }
        updateElements(g, J, A, p) {
            const S = 'reset' === p,
                {
                    iScale: T,
                    vScale: U,
                    _stacked: V,
                    _dataset: W
                } = this._cachedMeta,
                X = this.resolveDataElementOptions(J, p),
                Y = this.getSharedOptions(X),
                Z = this.includeOptions(p, Y),
                $ = T.axis,
                _ = U.axis,
                {
                    spanGaps: ab,
                    segment: bb
                } = this.options,
                cb = (0, e.x)(ab) ? ab : Number.POSITIVE_INFINITY,
                db = this.chart._animationsDisabled || S || 'none' === p;
            let eb = J > 0 && this.getParsed(J - 1);
            for (let fb = gb; fb < gb + A; ++fb) {
                const hb = g[fb],
                    ib = this.getParsed(fb),
                    jb = db ? hb : {},
                    kb = (0, e.k)(ib[_]),
                    lb = jb[$] = T.getPixelForValue(ib[$], fb),
                    mb = jb[_] = S || kb ? U.getBasePixel() : U.getPixelForValue(V ? this.applyStack(U, ib, V) : ib[_], fb);
                jb.skip = isNaN(lb) || isNaN(mb) || kb, jb.stop = fb > 0 && Math.abs(ib[$] - eb[$]) > cb, bb && (jb.parsed = ib, jb.raw = W.data[fb]), Z && (jb.options = Y || this.resolveDataElementOptions(fb, hb.active ? 'active' : p)), db || this.updateElement(hb, fb, jb, p), eb = ib;
            }
            this.updateSharedOptions(Y, p, fb);
        }
        getMaxOverflow() {
            const hb = this._cachedMeta,
                ib = hb.data || [];
            if (!this.options.showLine) {
                let jb = 0;
                for (let kb = ib.length - 1; kb >= 0; --kb)
                    jb = Math.max(jb, ib[kb].size(this.resolveDataElementOptions(kb)) / 2);
                return jb > 0 && jb;
            }
            const jb = hb.dataset,
                kb = jb.options && jb.options.borderWidth || 0;
            if (!ib.length)
                return kb;
            const lb = ib[0].size(this.resolveDataElementOptions(0)),
                mb = ib[ib.length - 1].size(this.resolveDataElementOptions(ib.length - 1));
            return Math.max(kb, lb, mb) / 2;
        }
    }
    (0, d.default)(R, 'id', 'scatter'), (0, d.default)(R, 'defaults', {
        datasetElementType: !1,
        dataElementType: 'point',
        showLine: !1,
        fill: !1
    }), (0, d.default)(R, 'overrides', {
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

    function S() {
        throw new Error('This method is not implemented: Check that a complete date adapter is provided.');
    }
    class T {
        static override(g) {
            Object.assign(T.prototype, g);
        }
        init() {}
        formats() {
            return S();
        }
        parse() {
            return S();
        }
        format() {
            return S();
        }
        add() {
            return S();
        }
        diff() {
            return S();
        }
        startOf() {
            return S();
        }
        endOf() {
            return S();
        }
        constructor(g) {
            this.options = g || {};
        }
    }
    var U = V;

    function W(g, J, A, p) {
        const {
            controller: X,
            data: Y,
            _sorted: Z
        } = $, _ = X._cachedMeta.iScale;
        if (_ && J === _.axis && 'r' !== J && Z && Y.length) {
            const ab = _._reversePixels ? e.A : e.B;
            if (!p)
                return ab(Y, J, A);
            if (X._sharedOptions) {
                const bb = Y[0],
                    cb = 'function' == typeof bb.getRange && bb.getRange(J);
                if (cb) {
                    const db = ab(Y, J, A - cb),
                        eb = ab(Y, J, A + cb);
                    return {
                        lo: db.lo,
                        hi: eb.hi
                    };
                }
            }
        }
        return {
            lo: 0,
            hi: Y.length - 1
        };
    }

    function X(g, J, A, p, d) {
        const Y = g.getSortedVisibleDatasetMetas(),
            Z = A[J];
        for (let $ = 0, _ = Y.length; $ < _; ++$) {
            const {
                index: ab,
                data: bb
            } = Y[$], {
                lo: cb,
                hi: db
            } = W(Y[$], J, Z, d);
            for (let eb = fb; eb <= db; ++eb) {
                const gb = bb[eb];
                gb.skip || p(gb, ab, eb);
            }
        }
    }

    function Y(g, J, A, p, d) {
        const Z = [];
        if (!d && !g.isPointInArea(J))
            return Z;
        return X(g, A, J, function(A, h, i) {
            (d || (0, e.C)(A, g.chartArea, 0)) && A.inRange(J.x, J.y, p) && Z.push({
                element: A,
                datasetIndex: h,
                index: i
            });
        }, !0), Z;
    }

    function Z(g, J, A, p, d, e) {
        let $ = [];
        const _ = function(g) {
            const ab = -1 !== g.indexOf('x'),
                bb = -1 !== g.indexOf('y');
            return function(g, p) {
                const cb = ab ? Math.abs(g.x - p.x) : 0,
                    db = bb ? Math.abs(g.y - p.y) : 0;
                return Math.sqrt(Math.pow(cb, 2) + Math.pow(db, 2));
            };
        }(A);
        let ab = Number.POSITIVE_INFINITY;
        return X(g, A, J, function(A, j, k) {
            const bb = A.inRange(J.x, J.y, d);
            if (p && !bb)
                return;
            const cb = A.getCenterPoint(d);
            if (!(!!e || g.isPointInArea(cb)) && !bb)
                return;
            const db = _(J, cb);
            db < ab ? ($ = [{
                element: A,
                datasetIndex: j,
                index: k
            }], ab = db) : db === ab && $.push({
                element: A,
                datasetIndex: j,
                index: k
            });
        }), $;
    }

    function $(g, J, A, p, d, f) {
        return f || g.isPointInArea(J) ? 'r' !== A || p ? Z(g, J, A, p, d, f) : function(g, J, A, p) {
            let _ = [];
            return X(g, A, J, function(g, A, f) {
                const {
                    startAngle: ab,
                    endAngle: bb
                } = g.getProps([
                    'startAngle',
                    'endAngle'
                ], p), {
                    angle: cb
                } = (0, e.D)(g, {
                    x: J.x,
                    y: J.y
                });
                (0, e.p)(cb, ab, bb) && _.push({
                    element: g,
                    datasetIndex: A,
                    index: f
                });
            }), _;
        }(g, J, A, d) : [];
    }

    function _(g, J, A, p, d) {
        const ab = [],
            bb = 'x' === A ? 'inXRange' : 'inYRange';
        let cb = !1;
        return X(g, A, J, (g, p, i) => {
            g[bb](J[A], d) && (ab.push({
                element: g,
                datasetIndex: p,
                index: i
            }), cb = cb || g.inRange(J.x, J.y, d));
        }), p && !cb ? [] : ab;
    }
    var ab = {
        evaluateInteractionItems: X,
        modes: {
            index(g, J, A, p) {
                const bb = (0, e.z)(J, g),
                    cb = A.axis || 'x',
                    db = A.includeInvisible || !1,
                    eb = A.intersect ? Y(g, bb, cb, p, db) : $(g, bb, cb, !1, p, db),
                    fb = [];
                return eb.length ? (g.getSortedVisibleDatasetMetas().forEach(g => {
                    const gb = eb[0].index,
                        hb = g.data[gb];
                    hb && !hb.skip && fb.push({
                        element: hb,
                        datasetIndex: g.index,
                        index: gb
                    });
                }), fb) : [];
            },
            dataset(g, J, A, p) {
                const bb = (0, e.z)(J, g),
                    cb = A.axis || 'xy',
                    db = A.includeInvisible || !1;
                let eb = A.intersect ? Y(g, bb, cb, p, db) : $(g, bb, cb, !1, p, db);
                if (eb.length > 0) {
                    const fb = eb[0].datasetIndex,
                        gb = g.getDatasetMeta(fb).data;
                    eb = [];
                    for (let hb = 0; hb < gb.length; ++hb)
                        eb.push({
                            element: gb[hb],
                            datasetIndex: fb,
                            index: hb
                        });
                }
                return eb;
            },
            point: (g, J, A, p) => Y(g, (0, e.z)(J, g), A.axis || 'xy', p, A.includeInvisible || !1),
            nearest(g, J, A, p) {
                const bb = (0, e.z)(J, g),
                    cb = A.axis || 'xy',
                    db = A.includeInvisible || !1;
                return $(g, bb, cb, A.intersect, p, db);
            },
            x: (g, J, A, p) => _(g, (0, e.z)(J, g), 'x', A.intersect, p),
            y: (g, J, A, p) => _(g, (0, e.z)(J, g), 'y', A.intersect, p)
        }
    };
    const bb = [
        'left',
        'top',
        'right',
        'bottom'
    ];

    function cb(g, J) {
        return g.filter(g => g.pos === J);
    }

    function db(g, J) {
        return g.filter(g => -1 === bb.indexOf(g.pos) && g.box.axis === J);
    }

    function eb(g, J) {
        return g.sort((g, A) => {
            const fb = J ? A : g,
                gb = J ? g : A;
            return fb.weight === gb.weight ? fb.index - gb.index : fb.weight - gb.weight;
        });
    }

    function fb(g, J) {
        const gb = function(g) {
                const hb = {};
                for (const ib of g) {
                    const {
                        stack: jb,
                        pos: kb,
                        stackWeight: lb
                    } = mb;
                    if (!jb || !bb.includes(kb))
                        continue;
                    const nb = hb[jb] || (hb[jb] = {
                        count: 0,
                        placed: 0,
                        weight: 0,
                        size: 0
                    });
                    nb.count++, nb.weight += lb;
                }
                return hb;
            }(g),
            {
                vBoxMaxWidth: hb,
                hBoxMaxHeight: ib
            } = jb;
        let kb, lb, mb;
        for (kb = 0, lb = g.length; kb < lb; ++kb) {
            mb = g[kb];
            const {
                fullSize: nb
            } = mb.box, ob = gb[mb.stack], pb = ob && mb.stackWeight / ob.weight;
            mb.horizontal ? (mb.width = pb ? pb * hb : nb && jb.availableWidth, mb.height = ib) : (mb.width = hb, mb.height = pb ? pb * ib : nb && jb.availableHeight);
        }
        return gb;
    }

    function gb(g, J, A, p) {
        return Math.max(g[A], J[A]) + Math.max(g[p], J[p]);
    }

    function hb(g, J) {
        g.top = Math.max(g.top, J.top), g.left = Math.max(g.left, J.left), g.bottom = Math.max(g.bottom, J.bottom), g.right = Math.max(g.right, J.right);
    }

    function ib(g, J, A, p) {
        const {
            pos: jb,
            box: kb
        } = lb, mb = g.maxPadding;
        if (!(0, e.i)(jb)) {
            lb.size && (g[jb] -= lb.size);
            const nb = p[lb.stack] || {
                size: 0,
                count: 1
            };
            nb.size = Math.max(nb.size, lb.horizontal ? kb.height : kb.width), lb.size = nb.size / nb.count, g[jb] += lb.size;
        }
        kb.getPadding && hb(mb, kb.getPadding());
        const nb = Math.max(0, J.outerWidth - gb(mb, g, 'left', 'right')),
            ob = Math.max(0, J.outerHeight - gb(mb, g, 'top', 'bottom')),
            pb = nb !== g.w,
            qb = ob !== g.h;
        return g.w = nb, g.h = ob, lb.horizontal ? {
            same: pb,
            other: qb
        } : {
            same: qb,
            other: pb
        };
    }

    function jb(g, J) {
        const kb = J.maxPadding;

        function lb(g) {
            const mb = {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            };
            return g.forEach(g => {
                mb[g] = Math.max(J[g], kb[g]);
            }), mb;
        }
        return lb(g ? [
            'left',
            'right'
        ] : [
            'top',
            'bottom'
        ]);
    }

    function kb(g, J, A, p) {
        const lb = [];
        let mb, nb, ob, pb, qb, rb;
        for (mb = 0, nb = g.length, qb = 0; mb < nb; ++mb) {
            ob = g[mb], pb = ob.box, pb.update(ob.width || J.w, ob.height || J.h, jb(ob.horizontal, J));
            const {
                same: sb,
                other: tb
            } = ib(J, A, ob, p);
            qb |= sb && lb.length, rb = rb || tb, pb.fullSize || lb.push(ob);
        }
        return qb && kb(lb, J, A, p) || rb;
    }

    function lb(g, J, A, p, d) {
        g.top = A, g.left = J, g.right = J + p, g.bottom = A + d, g.width = p, g.height = d;
    }

    function mb(g, J, A, p) {
        const nb = A.padding;
        let {
            x: ob,
            y: pb
        } = qb;
        for (const rb of g) {
            const sb = rb.box,
                tb = p[rb.stack] || {
                    count: 1,
                    placed: 0,
                    weight: 1
                },
                ub = rb.stackWeight / tb.weight || 1;
            if (rb.horizontal) {
                const vb = qb.w * ub,
                    wb = tb.size || sb.height;
                (0, e.h)(tb.start) && (pb = tb.start), sb.fullSize ? lb(sb, nb.left, pb, A.outerWidth - nb.right - nb.left, wb) : lb(sb, qb.left + tb.placed, pb, vb, wb), tb.start = pb, tb.placed += vb, pb = sb.bottom;
            } else {
                const xb = qb.h * ub,
                    yb = tb.size || sb.width;
                (0, e.h)(tb.start) && (wb = tb.start), sb.fullSize ? lb(sb, wb, nb.top, yb, A.outerHeight - nb.bottom - nb.top) : lb(sb, wb, qb.top + tb.placed, yb, xb), tb.start = wb, tb.placed += xb, wb = sb.right;
            }
        }
        qb.x = ob, qb.y = pb;
    }
    var nb = {
        addBox(g, J) {
            g.boxes || (g.boxes = []), J.fullSize = J.fullSize || !1, J.position = J.position || 'top', J.weight = J.weight || 0, J._layers = J._layers || function() {
                return [{
                    z: 0,
                    draw(g) {
                        J.draw(g);
                    }
                }];
            }, g.boxes.push(J);
        },
        removeBox(g, J) {
            const ob = g.boxes ? g.boxes.indexOf(J) : -1; -
            1 !== ob && g.boxes.splice(ob, 1);
        },
        configure(g, J, A) {
            J.fullSize = A.fullSize, J.position = A.position, J.weight = A.weight;
        },
        update(g, J, A, p) {
            if (!g)
                return;
            const ob = (0, e.E)(g.options.layout.padding),
                pb = Math.max(J - ob.width, 0),
                qb = Math.max(A - ob.height, 0),
                rb = function(g) {
                    const sb = function(g) {
                            const tb = [];
                            let ub, vb, wb, xb, yb, zb;
                            for (ub = 0, vb = (g || []).length; ub < vb; ++ub)
                                wb = g[ub], {
                                    position: Ab,
                                    options: {
                                        stack: Bb,
                                        stackWeight: Cb = 1
                                    }
                                } = wb, tb.push({
                                    index: ub,
                                    box: wb,
                                    pos: Ab,
                                    horizontal: wb.isHorizontal(),
                                    weight: wb.weight,
                                    stack: Bb && Ab + Bb,
                                    stackWeight: Cb
                                });
                            return tb;
                        }(g),
                        tb = eb(sb.filter(g => g.box.fullSize), !0),
                        ub = eb(cb(sb, 'left'), !0),
                        vb = eb(cb(sb, 'right')),
                        wb = eb(cb(sb, 'top'), !0),
                        xb = eb(cb(sb, 'bottom')),
                        yb = db(sb, 'x'),
                        zb = db(sb, 'y');
                    return {
                        fullSize: tb,
                        leftAndTop: ub.concat(wb),
                        rightAndBottom: vb.concat(zb).concat(xb).concat(yb),
                        chartArea: cb(sb, 'chartArea'),
                        vertical: ub.concat(vb).concat(zb),
                        horizontal: wb.concat(xb).concat(yb)
                    };
                }(g.boxes),
                sb = rb.vertical,
                tb = rb.horizontal;
            (0, e.F)(g.boxes, g => {
                'function' == typeof g.beforeLayout && g.beforeLayout();
            });
            const ub = sb.reduce((g, J) => J.box.options && !1 === J.box.options.display ? g : g + 1, 0) || 1,
                vb = Object.freeze({
                    outerWidth: J,
                    outerHeight: A,
                    padding: ob,
                    availableWidth: pb,
                    availableHeight: qb,
                    vBoxMaxWidth: pb / 2 / ub,
                    hBoxMaxHeight: qb / 2
                }),
                wb = Object.assign({}, ob);
            hb(wb, (0, e.E)(p));
            const xb = Object.assign({
                    maxPadding: wb,
                    w: pb,
                    h: qb,
                    x: ob.left,
                    y: ob.top
                }, ob),
                yb = fb(sb.concat(tb), vb);
            kb(rb.fullSize, xb, vb, yb), kb(sb, xb, vb, yb), kb(tb, xb, vb, yb) && kb(sb, xb, vb, yb),
                function(g) {
                    const zb = g.maxPadding;

                    function Ab(Ab) {
                        const Bb = Math.max(zb[Ab] - g[Ab], 0);
                        return g[Ab] += Bb, Bb;
                    }
                    g.y += Ab('top'), g.x += Ab('left'), Ab('right'), Ab('bottom');
                }(xb), mb(rb.leftAndTop, xb, vb, yb), xb.x += xb.w, xb.y += xb.h, mb(rb.rightAndBottom, xb, vb, yb), g.chartArea = {
                    left: xb.left,
                    top: xb.top,
                    right: xb.left + xb.w,
                    bottom: xb.top + xb.h,
                    height: xb.h,
                    width: xb.w
                }, (0, e.F)(rb.chartArea, J => {
                    const zb = J.box;
                    Object.assign(zb, g.chartArea), zb.update(xb.w, xb.h, {
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0
                    });
                });
        }
    };
    class ob {
        acquireContext(g, J) {}
        releaseContext(g) {
            return !1;
        }
        addEventListener(g, J, A) {}
        removeEventListener(g, J, A) {}
        getDevicePixelRatio() {
            return 1;
        }
        getMaximumSize(g, J, A, p) {
            return J = Math.max(0, J || g.width), A = A || g.height, {
                width: J,
                height: Math.max(0, p ? Math.floor(J / p) : A)
            };
        }
        isAttached(g) {
            return !0;
        }
        updateConfig(g) {}
    }
    class pb extends ob {
        acquireContext(g) {
            return g && g.getContext && g.getContext('2d') || null;
        }
        updateConfig(g) {
            g.options.animation = !1;
        }
    }
    const qb = '$chartjs',
        rb = {
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
        sb = g => null === g || '' === g;
    const tb = !!e.K && {
        passive: !0
    };

    function ub(g, J, A) {
        g.canvas.removeEventListener(J, A, tb);
    }

    function vb(g, J) {
        for (const wb of g)
            if (wb === J || wb.contains(J))
                return !0;
    }

    function wb(g, J, A) {
        const xb = g.canvas,
            yb = new MutationObserver(g => {
                let zb = !1;
                for (const Ab of g)
                    zb = zb || vb(Ab.addedNodes, xb), zb = zb && !vb(Ab.removedNodes, xb);
                zb && Ab();
            });
        return yb.observe(document, {
            childList: !0,
            subtree: !0
        }), yb;
    }

    function xb(g, J, A) {
        const yb = g.canvas,
            zb = new MutationObserver(g => {
                let Ab = !1;
                for (const Bb of g)
                    Ab = Ab || vb(Bb.removedNodes, yb), Ab = Ab && !vb(Bb.addedNodes, yb);
                Ab && Bb();
            });
        return zb.observe(document, {
            childList: !0,
            subtree: !0
        }), zb;
    }
    const yb = new Map();
    let zb = 0;

    function Ab() {
        const Bb = window.devicePixelRatio;
        Bb !== zb && (zb = Bb, yb.forEach((J, A) => {
            A.currentDevicePixelRatio !== Bb && J();
        }));
    }

    function Bb(g, J, A) {
        const Cb = g.canvas,
            Db = Cb && (0, e.I)(Cb);
        if (!Db)
            return;
        const Eb = (0, e.L)((g, J) => {
                const Fb = Db.clientWidth;
                A(g, J), Fb < Db.clientWidth && A();
            }, window),
            Fb = new ResizeObserver(g => {
                const Gb = g[0],
                    Hb = Gb.contentRect.width,
                    Ib = Gb.contentRect.height;
                0 === Hb && 0 === Ib || Eb(Hb, Ib);
            });
        return Fb.observe(Db),
            function(g, J) {
                yb.size || window.addEventListener('resize', Ab), yb.set(g, J);
            }(g, Eb), Fb;
    }

    function Cb(g, J, A) {
        A && A.disconnect(), 'resize' === J && function(g) {
            yb.delete(g), yb.size || window.removeEventListener('resize', Ab);
        }(g);
    }

    function Db(g, J, A) {
        const Eb = g.canvas,
            Fb = (0, e.L)(J => {
                null !== g.ctx && A(function(g, J) {
                    const Gb = rb[g.type] || g.type,
                        {
                            x: Hb,
                            y: Ib
                        } = (0, e.z)(g, J);
                    return {
                        type: Gb,
                        chart: J,
                        native: g,
                        x: void 0 !== Hb ? Hb : null,
                        y: void 0 !== Ib ? Ib : null
                    };
                }(J, g));
            }, g);
        return function(g, J, A) {
            g.addEventListener(J, A, tb);
        }(Eb, J, Fb), Fb;
    }
    class Eb extends ob {
        acquireContext(g, J) {
            const Fb = g && g.getContext && g.getContext('2d');
            return Fb && Fb.canvas === g ? (function(g, J) {
                const Gb = g.style,
                    Hb = g.getAttribute('height'),
                    Ib = g.getAttribute('width');
                if (g[qb] = {
                        initial: {
                            height: Hb,
                            width: Ib,
                            style: {
                                display: Gb.display,
                                height: Gb.height,
                                width: Gb.width
                            }
                        }
                    }, Gb.display = Gb.display || 'block', Gb.boxSizing = Gb.boxSizing || 'border-box', sb(Ib)) {
                    const Jb = (0, e.J)(g, 'width');
                    void 0 !== Jb && (g.width = Jb);
                }
                if (sb(Hb))
                    if ('' === g.style.height)
                        g.height = g.width / (J || 2);
                    else {
                        const Jb = (0, e.J)(g, 'height');
                        void 0 !== Jb && (g.height = Jb);
                    }
            }(g, J), Fb) : null;
        }
        releaseContext(g) {
            const Fb = g.canvas;
            if (!Fb[qb])
                return !1;
            const Gb = Fb[qb].initial;
            [
                'height',
                'width'
            ].forEach(g => {
                const Hb = Gb[g];
                (0, e.k)(Hb) ? Fb.removeAttribute(g): Fb.setAttribute(g, Hb);
            });
            const Hb = Gb.style || {};
            return Object.keys(Hb).forEach(g => {
                Fb.style[g] = Hb[g];
            }), Fb.width = Fb.width, delete Fb[qb], !0;
        }
        addEventListener(g, J, A) {
            this.removeEventListener(g, J);
            const Fb = g.$proxies || (g.$proxies = {}),
                Gb = {
                    attach: wb,
                    detach: xb,
                    resize: Bb
                } [J] || Db;
            Fb[J] = Gb(g, J, A);
        }
        removeEventListener(g, J) {
            const Fb = g.$proxies || (g.$proxies = {}),
                Gb = Fb[J];
            if (!Gb)
                return;
            ({
                attach: Cb,
                detach: Cb,
                resize: Cb
            } [J] || ub)(g, J, Gb), Fb[J] = void 0;
        }
        getDevicePixelRatio() {
            return window.devicePixelRatio;
        }
        getMaximumSize(g, J, A, p) {
            return (0, e.G)(g, J, A, p);
        }
        isAttached(g) {
            const Fb = (0, e.I)(g);
            return !(!Fb || !Fb.isConnected);
        }
    }
    class Fb {
        tooltipPosition(g) {
            const {
                x: Gb,
                y: Hb
            } = this.getProps([
                'x',
                'y'
            ], g);
            return {
                x: Gb,
                y: Hb
            };
        }
        hasValue() {
            return (0, e.x)(this.x) && (0, e.x)(this.y);
        }
        getProps(g, J) {
            const Gb = this.$animations;
            if (!J || !Gb)
                return this;
            const Hb = {};
            return g.forEach(g => {
                Hb[g] = Gb[g] && Gb[g].active() ? Gb[g]._to : this[g];
            }), Hb;
        }
        constructor() {
            (0, d.default)(this, 'active', !1);
        }
    }

    function Gb(g, J) {
        const Hb = g.options.ticks,
            Ib = function(g) {
                const Jb = g.options.offset,
                    Kb = g._tickSize(),
                    Lb = g._length / Kb + (Jb ? 0 : 1),
                    Mb = g._maxLength / Kb;
                return Math.floor(Math.min(Lb, Mb));
            }(g),
            Jb = Math.min(Hb.maxTicksLimit || Ib, Ib),
            Kb = Hb.major.enabled ? function(g) {
                const Lb = [];
                let Mb, Nb;
                for (Mb = 0, Nb = g.length; Mb < Nb; Mb++)
                    g[Mb].major && Lb.push(Mb);
                return Lb;
            }(J) : [],
            Lb = Kb.length,
            Mb = Kb[0],
            Nb = Kb[Lb - 1],
            Ob = [];
        if (Lb > Jb)
            return function(g, J, Hb, Ib) {
                let Pb, Qb = 0,
                    Rb = Hb[0];
                for (Ib = Math.ceil(Ib), Pb = 0; Pb < g.length; Pb++)
                    Pb === Rb && (J.push(g[Pb]), Qb++, Rb = Hb[Qb * Ib]);
            }(J, Ob, Kb, Lb / Jb), Ob;
        const Pb = function(g, J, Hb) {
            const Qb = function(g) {
                    const Rb = g.length;
                    let Sb, Tb;
                    if (Rb < 2)
                        return !1;
                    for (Tb = g[0], Sb = 1; Sb < Rb; ++Sb)
                        if (g[Sb] - g[Sb - 1] !== Tb)
                            return !1;
                    return Tb;
                }(g),
                Rb = J.length / Hb;
            if (!Qb)
                return Math.max(Rb, 1);
            const Sb = (0, e.N)(Qb);
            for (let Tb = 0, Ub = Sb.length - 1; Tb < Ub; Tb++) {
                const Vb = Sb[Tb];
                if (Vb > Rb)
                    return Vb;
            }
            return Math.max(Rb, 1);
        }(Kb, J, Jb);
        if (Lb > 0) {
            let Qb, Rb;
            const Sb = Lb > 1 ? Math.round((Nb - Mb) / (Lb - 1)) : null;
            for (Hb(J, Ob, Pb, (0, e.k)(Sb) ? 0 : Mb - Sb, Mb), Qb = 0, Rb = Lb - 1; Qb < Rb; Qb++)
                Hb(J, Ob, Pb, Kb[Qb], Kb[Qb + 1]);
            return Hb(J, Ob, Pb, Nb, (0, e.k)(Sb) ? J.length : Nb + Sb), Ob;
        }
        return Hb(J, Ob, Pb), Ob;
    }

    function Hb(g, J, A, p, d) {
        const Ib = (0, e.v)(p, 0),
            Jb = Math.min((0, e.v)(d, g.length), g.length);
        let Kb, Lb, Mb, Nb = 0;
        for (A = Math.ceil(A), d && (Kb = d - p, A = Kb / Math.floor(Kb / A)), Mb = Ib; Mb < 0;)
            Nb++, Mb = Math.round(Ib + Nb * A);
        for (Lb = Math.max(Ib, 0); Lb < Jb; Lb++)
            Lb === Mb && (J.push(g[Lb]), Nb++, Mb = Math.round(Ib + Nb * A));
    }
    (0, d.default)(Fb, 'defaults', {}), (0, d.default)(Fb, 'defaultRoutes', void 0);
    const Ib = (g, J, A) => 'top' === J || 'left' === J ? g[J] + A : g[J] - A;

    function Jb(g, J) {
        const Kb = [],
            Lb = g.length / J,
            Mb = g.length;
        let Nb = 0;
        for (; Nb < Mb; Nb += Lb)
            Kb.push(g[Math.floor(Nb)]);
        return Kb;
    }

    function Kb(g, J, A) {
        const Lb = g.ticks.length,
            Mb = Math.min(J, Lb - 1),
            Nb = g._startPixel,
            Ob = g._endPixel,
            Pb = 0.000001;
        let Qb, Rb = g.getPixelForTick(Mb);
        if (!(A && (Qb = 1 === Lb ? Math.max(Rb - Nb, Ob - Rb) : 0 === J ? (g.getPixelForTick(1) - Rb) / 2 : (Rb - g.getPixelForTick(Mb - 1)) / 2, Rb += Mb < J ? Qb : -Qb, Rb < Nb - Pb || Rb > Ob + Pb)))
            return Rb;
    }

    function Lb(g) {
        return g.drawTicks ? g.tickLength : 0;
    }

    function Mb(g, J) {
        if (!g.display)
            return 0;
        const Nb = (0, e.a0)(g.font, J),
            Ob = (0, e.E)(g.padding);
        return ((0, e.b)(g.text) ? g.text.length : 1) * Nb.lineHeight + Ob.height;
    }

    function Nb(g, J, A) {
        let Ob = (0, e.a1)(g);
        return (A && 'right' !== J || !A && 'right' === J) && (Ob = (g => 'left' === g ? 'right' : 'right' === g ? 'left' : g)(Ob)), Ob;
    }
    class Ob extends Fb {
        init(g) {
            this.options = g.setContext(this.getContext()), this.axis = g.axis, this._userMin = this.parse(g.min), this._userMax = this.parse(g.max), this._suggestedMin = this.parse(g.suggestedMin), this._suggestedMax = this.parse(g.suggestedMax);
        }
        parse(g, J) {
            return g;
        }
        getUserBounds() {
            let {
                _userMin: Pb,
                _userMax: Qb,
                _suggestedMin: Rb,
                _suggestedMax: Sb
            } = this;
            return Pb = (0, e.O)(Pb, Number.POSITIVE_INFINITY), Qb = (0, e.O)(Qb, Number.NEGATIVE_INFINITY), Rb = (0, e.O)(Rb, Number.POSITIVE_INFINITY), Sb = (0, e.O)(Sb, Number.NEGATIVE_INFINITY), {
                min: (0, e.O)(Pb, Rb),
                max: (0, e.O)(Qb, Sb),
                minDefined: (0, e.g)(Pb),
                maxDefined: (0, e.g)(Qb)
            };
        }
        getMinMax(g) {
            let Pb, {
                min: Qb,
                max: Rb,
                minDefined: Sb,
                maxDefined: Tb
            } = this.getUserBounds();
            if (Sb && Tb)
                return {
                    min: Qb,
                    max: Rb
                };
            const Ub = this.getMatchingVisibleMetas();
            for (let Vb = 0, Wb = Ub.length; Vb < Wb; ++Vb)
                Pb = Ub[Vb].controller.getMinMax(this, g), Sb || (Qb = Math.min(Qb, Pb.min)), Tb || (Rb = Math.max(Rb, Pb.max));
            return Qb = Tb && Qb > Rb ? Rb : Qb, Rb = Sb && Qb > Rb ? Qb : Rb, {
                min: (0, Vb.O)(Qb, (0, Vb.O)(Rb, Qb)),
                max: (0, Vb.O)(Rb, (0, Vb.O)(Qb, Rb))
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
            const Xb = this.chart.data;
            return this.options.labels || (this.isHorizontal() ? Xb.xLabels : Xb.yLabels) || Xb.labels || [];
        }
        getLabelItems(Pb = this.chart.chartArea) {
            return this._labelItems || (this._labelItems = this._computeLabelItems(Pb));
        }
        beforeLayout() {
            this._cache = {}, this._dataLimitsCached = !1;
        }
        beforeUpdate() {
            (0, e.Q)(this.options.beforeUpdate, [this]);
        }
        update(Pb, J, A) {
            const {
                beginAtZero: Qb,
                grace: Rb,
                ticks: Sb
            } = this.options, Tb = Sb.sampleSize;
            this.beforeUpdate(), this.maxWidth = Pb, this.maxHeight = J, this._margins = A = Object.assign({
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }, A), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + A.left + A.right : this.height + A.top + A.bottom, this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = (0, e.R)(this, Rb, Qb), this._dataLimitsCached = !0), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks();
            const Ub = Tb < this.ticks.length;
            this._convertTicksToLabels(Ub ? Jb(this.ticks, Tb) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), Sb.display && (Sb.autoSkip || 'auto' === Sb.source) && (this.ticks = Gb(this, this.ticks), this._labelSizes = null, this.afterAutoSkip()), Ub && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate();
        }
        configure() {
            let Vb, Wb, Xb = this.options.reverse;
            this.isHorizontal() ? (Vb = this.left, Wb = this.right) : (Vb = this.top, Wb = this.bottom, Xb = !Xb), this._startPixel = Vb, this._endPixel = Wb, this._reversePixels = Xb, this._length = Wb - Vb, this._alignToPixels = this.options.alignToPixels;
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
        _callHooks(Pb) {
            this.chart.notifyPlugins(Pb, this.getContext()), (0, e.Q)(this.options[Pb], [this]);
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
        generateTickLabels(Pb) {
            const Qb = this.options.ticks;
            let Rb, Sb, Tb;
            for (Rb = 0, Sb = Pb.length; Rb < Sb; Rb++)
                Tb = Pb[Rb], Tb.label = (0, e.Q)(Qb.callback, [
                    Tb.value,
                    Rb,
                    Pb
                ], this);
        }
        afterTickToLabelConversion() {
            (0, e.Q)(this.options.afterTickToLabelConversion, [this]);
        }
        beforeCalculateLabelRotation() {
            (0, e.Q)(this.options.beforeCalculateLabelRotation, [this]);
        }
        calculateLabelRotation() {
            const Ub = this.options,
                Vb = Ub.ticks,
                Wb = this.ticks.length,
                Xb = Vb.minRotation || 0,
                Yb = Vb.maxRotation;
            let Zb, $b, _b, ac = bc;
            if (!this._isVisible() || !Vb.display || bc >= Yb || Wb <= 1 || !this.isHorizontal())
                return void(this.labelRotation = bc);
            const cc = this._getLabelSizes(),
                dc = cc.widest.width,
                ec = cc.highest.height,
                fc = (0, e.S)(this.chart.width - dc, 0, this.maxWidth);
            Zb = Ub.offset ? this.maxWidth / Wb : fc / (Wb - 1), dc + 6 > Zb && (Zb = fc / (Wb - (Ub.offset ? 0.5 : 1)), $b = this.maxHeight - Lb(Ub.grid) - Vb.padding - Mb(Ub.title, this.chart.options.font), _b = Math.sqrt(dc * dc + ec * ec), ac = (0, e.U)(Math.min(Math.asin((0, e.S)((cc.highest.height + 6) / Zb, -1, 1)), Math.asin((0, e.S)($b / _b, -1, 1)) - Math.asin((0, e.S)(ec / _b, -1, 1)))), ac = Math.max(bc, Math.min(Yb, ac))), this.labelRotation = ac;
        }
        afterCalculateLabelRotation() {
            (0, e.Q)(this.options.afterCalculateLabelRotation, [this]);
        }
        afterAutoSkip() {}
        beforeFit() {
            (0, e.Q)(this.options.beforeFit, [this]);
        }
        fit() {
            const gc = {
                    width: 0,
                    height: 0
                },
                {
                    chart: hc,
                    options: {
                        ticks: ic,
                        title: jc,
                        grid: kc
                    }
                } = this,
                lc = this._isVisible(),
                mc = this.isHorizontal();
            if (lc) {
                const nc = Mb(jc, hc.options.font);
                if (mc ? (gc.width = this.maxWidth, gc.height = Lb(kc) + nc) : (gc.height = this.maxHeight, gc.width = Lb(kc) + nc), ic.display && this.ticks.length) {
                    const {
                        first: oc,
                        last: pc,
                        widest: qc,
                        highest: rc
                    } = this._getLabelSizes(), sc = 2 * ic.padding, tc = (0, e.t)(this.labelRotation), uc = Math.cos(tc), vc = Math.sin(tc);
                    if (mc) {
                        const wc = ic.mirror ? 0 : vc * qc.width + uc * rc.height;
                        gc.height = Math.min(this.maxHeight, gc.height + wc + sc);
                    } else {
                        const xc = ic.mirror ? 0 : uc * qc.width + vc * rc.height;
                        gc.width = Math.min(this.maxWidth, gc.width + xc + sc);
                    }
                    this._calculatePadding(oc, pc, vc, uc);
                }
            }
            this._handleMargins(), mc ? (this.width = this._length = hc.width - this._margins.left - this._margins.right, this.height = gc.height) : (this.width = gc.width, this.height = this._length = hc.height - this._margins.top - this._margins.bottom);
        }
        _calculatePadding(Pb, J, A, p) {
            const {
                ticks: {
                    align: Qb,
                    padding: Rb
                },
                position: Sb
            } = this.options, Tb = 0 !== this.labelRotation, Ub = 'top' !== Sb && 'x' === this.axis;
            if (this.isHorizontal()) {
                const Vb = this.getPixelForTick(0) - this.left,
                    Wb = this.right - this.getPixelForTick(this.ticks.length - 1);
                let Xb = 0,
                    Yb = 0;
                Tb ? Ub ? (Xb = p * Pb.width, Yb = A * J.height) : (Xb = A * Pb.height, Yb = p * J.width) : 'start' === Qb ? Yb = J.width : 'end' === Qb ? Xb = Pb.width : 'inner' !== Qb && (Xb = Pb.width / 2, Yb = J.width / 2), this.paddingLeft = Math.max((Xb - Vb + Rb) * this.width / (this.width - Vb), 0), this.paddingRight = Math.max((Yb - Wb + Rb) * this.width / (this.width - Wb), 0);
            } else {
                let Zb = J.height / 2,
                    $b = Pb.height / 2;
                'start' === Qb ? (Zb = 0, $b = Pb.height) : 'end' === Qb && (Zb = J.height, $b = 0), this.paddingTop = Zb + Rb, this.paddingBottom = $b + Rb;
            }
        }
        _handleMargins() {
            this._margins && (this._margins.left = Math.max(this.paddingLeft, this._margins.left), this._margins.top = Math.max(this.paddingTop, this._margins.top), this._margins.right = Math.max(this.paddingRight, this._margins.right), this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom));
        }
        afterFit() {
            (0, Rb.Q)(this.options.afterFit, [this]);
        }
        isHorizontal() {
            const {
                axis: Vb,
                position: Wb
            } = this.options;
            return 'top' === Wb || 'bottom' === Wb || 'x' === Vb;
        }
        isFullSize() {
            return this.options.fullSize;
        }
        _convertTicksToLabels(Pb) {
            let Qb, Rb;
            for (this.beforeTickToLabelConversion(), this.generateTickLabels(Pb), Qb = 0, Rb = Pb.length; Qb < Rb; Qb++)
                (0, e.k)(Pb[Qb].label) && (Pb.splice(Qb, 1), Rb--, Qb--);
            this.afterTickToLabelConversion();
        }
        _getLabelSizes() {
            let Sb = this._labelSizes;
            if (!Sb) {
                const Tb = this.options.ticks.sampleSize;
                let Ub = this.ticks;
                Tb < Ub.length && (Ub = Jb(Ub, Tb)), this._labelSizes = Sb = this._computeLabelSizes(Ub, Ub.length);
            }
            return Sb;
        }
        _computeLabelSizes(Pb, J) {
            const {
                ctx: Qb,
                _longestTextCache: Rb
            } = this, Sb = [], Tb = [];
            let Ub, Vb, Wb, Xb, Yb, Zb, $b, _b, ac, bc, cc, dc = 0,
                ec = 0;
            for (Ub = 0; Ub < J; ++Ub) {
                if (Xb = Pb[Ub].label, Yb = this._resolveTickFontOptions(Ub), Qb.font = Zb = Yb.string, $b = Rb[Zb] = Rb[Zb] || {
                        data: {},
                        gc: []
                    }, _b = Yb.lineHeight, ac = bc = 0, (0, e.k)(Xb) || (0, e.b)(Xb)) {
                    if ((0, e.b)(Xb))
                        for (Vb = 0, Wb = Xb.length; Vb < Wb; ++Vb)
                            cc = Xb[Vb], (0, e.k)(cc) || (0, e.b)(cc) || (ac = (0, e.V)(Qb, $b.data, $b.gc, ac, cc), bc += _b);
                } else
                    ac = (0, e.V)(Qb, $b.data, $b.gc, ac, Xb), bc = _b;
                Sb.push(ac), Tb.push(bc), dc = Math.max(ac, dc), ec = Math.max(bc, ec);
            }! function(Pb, J) {
                (0, e.F)(Pb, Pb => {
                    const fc = Pb.gc,
                        gc = fc.length / 2;
                    let hc;
                    if (gc > J) {
                        for (hc = 0; hc < gc; ++hc)
                            delete Pb.data[fc[hc]];
                        fc.splice(0, gc);
                    }
                });
            }(Rb, J);
            const fc = Sb.indexOf(dc),
                gc = Tb.indexOf(ec),
                hc = Pb => ({
                    width: Sb[Pb] || 0,
                    height: Tb[Pb] || 0
                });
            return {
                first: hc(0),
                last: hc(J - 1),
                widest: hc(fc),
                highest: hc(gc),
                widths: Sb,
                heights: Tb
            };
        }
        getLabelForValue(Pb) {
            return Pb;
        }
        getPixelForValue(Pb, J) {
            return NaN;
        }
        getValueForPixel(Pb) {}
        getPixelForTick(Pb) {
            const Qb = this.ticks;
            return Pb < 0 || Pb > Qb.length - 1 ? null : this.getPixelForValue(Qb[Pb].value);
        }
        getPixelForDecimal(Pb) {
            this._reversePixels && (Pb = 1 - Pb);
            const Qb = this._startPixel + Pb * this._length;
            return (0, e.W)(this._alignToPixels ? (0, e.X)(this.chart, Qb, 0) : Qb);
        }
        getDecimalForPixel(Pb) {
            const Qb = (Pb - this._startPixel) / this._length;
            return this._reversePixels ? 1 - Qb : Qb;
        }
        getBasePixel() {
            return this.getPixelForValue(this.getBaseValue());
        }
        getBaseValue() {
            const {
                min: Rb,
                max: Sb
            } = this;
            return Rb < 0 && Sb < 0 ? Sb : Rb > 0 && Sb > 0 ? Rb : 0;
        }
        getContext(Pb) {
            const Qb = this.ticks || [];
            if (Pb >= 0 && Pb < Qb.length) {
                const Rb = Qb[Pb];
                return Rb.$context || (Rb.$context = function(Pb, Qb, Rb) {
                    return (0, e.j)(Pb, {
                        tick: Rb,
                        index: Qb,
                        type: 'tick'
                    });
                }(this.getContext(), Pb, Rb));
            }
            return this.$context || (this.$context = (A = this.chart.getContext(), p = this, (0, e.j)(A, {
                scale: p,
                type: 'scale'
            })));
            var Rb, Sb;
        }
        _tickSize() {
            const Tb = this.options.ticks,
                Ub = (0, e.t)(this.labelRotation),
                Vb = Math.abs(Math.cos(Ub)),
                Wb = Math.abs(Math.sin(Ub)),
                Xb = this._getLabelSizes(),
                Yb = Tb.autoSkipPadding || 0,
                Zb = Xb ? Xb.widest.width + Yb : 0,
                $b = Xb ? Xb.highest.height + Yb : 0;
            return this.isHorizontal() ? $b * Vb > Zb * Wb ? Zb / Vb : $b / Wb : $b * Wb < Zb * Vb ? $b / Vb : Zb / Wb;
        }
        _isVisible() {
            const _b = this.options.display;
            return 'auto' !== _b ? !!_b : this.getMatchingVisibleMetas().length > 0;
        }
        _computeGridLineItems(Pb) {
            const Qb = this.axis,
                Rb = this.chart,
                Sb = this.options,
                {
                    grid: Tb,
                    position: Ub,
                    border: Vb
                } = Wb,
                Xb = Tb.offset,
                Yb = this.isHorizontal(),
                Zb = this.ticks.length + (Xb ? 1 : 0),
                $b = Lb(Tb),
                _b = [],
                ac = Vb.setContext(this.getContext()),
                bc = ac.display ? ac.width : 0,
                cc = bc / 2,
                dc = function(Pb) {
                    return (0, e.X)(Rb, Pb, bc);
                };
            let ec, fc, gc, hc, ic, jc, kc, lc, mc, nc, oc, pc;
            if ('top' === Ub)
                ec = dc(this.bottom), jc = this.bottom - $b, lc = ec - cc, nc = dc(Pb.top) + cc, pc = Pb.bottom;
            else if ('bottom' === Ub)
                ec = dc(this.top), nc = Pb.top, pc = dc(Pb.bottom) - cc, jc = ec + cc, lc = this.top + $b;
            else if ('left' === Ub)
                ec = dc(this.right), ic = this.right - $b, kc = ec - cc, mc = dc(Pb.left) + cc, oc = Pb.right;
            else if ('right' === Ub)
                ec = dc(this.left), mc = Pb.left, oc = dc(Pb.right) - cc, ic = ec + cc, kc = this.left + $b;
            else if ('x' === Qb) {
                if ('center' === Ub)
                    ec = dc((Pb.top + Pb.bottom) / 2 + 0.5);
                else if ((0, e.i)(Ub)) {
                    const qc = Object.keys(Ub)[0],
                        rc = Ub[qc];
                    ec = dc(this.chart.scales[qc].getPixelForValue(rc));
                }
                nc = Pb.top, pc = Pb.bottom, jc = ec + cc, lc = jc + $b;
            } else if ('y' === Qb) {
                if ('center' === Ub)
                    ec = dc((Pb.left + Pb.right) / 2);
                else if ((0, e.i)(Ub)) {
                    const qc = Object.keys(Ub)[0],
                        rc = Ub[qc];
                    ec = dc(this.chart.scales[qc].getPixelForValue(rc));
                }
                ic = ec - cc, kc = ic - $b, mc = Pb.left, oc = Pb.right;
            }
            const qc = (0, e.v)(Wb.ticks.maxTicksLimit, Zb),
                rc = Math.max(1, Math.ceil(Zb / qc));
            for (fc = 0; fc < Zb; fc += rc) {
                const sc = this.getContext(fc),
                    tc = Tb.setContext(sc),
                    uc = Vb.setContext(sc),
                    vc = tc.lineWidth,
                    wc = tc.color,
                    xc = uc.dash || [],
                    yc = uc.dashOffset,
                    zc = tc.tickWidth,
                    Ac = tc.tickColor,
                    Bc = tc.tickBorderDash || [],
                    Cc = tc.tickBorderDashOffset;
                gc = Kb(this, fc, Xb), void 0 !== gc && (hc = (0, e.X)(Rb, gc, vc), Yb ? ic = kc = mc = oc = hc : jc = lc = nc = pc = hc, _b.push({
                    tx1: ic,
                    ty1: jc,
                    tx2: kc,
                    ty2: lc,
                    x1: mc,
                    y1: nc,
                    x2: oc,
                    y2: pc,
                    width: vc,
                    color: wc,
                    borderDash: xc,
                    borderDashOffset: yc,
                    tickWidth: zc,
                    tickColor: Ac,
                    tickBorderDash: Bc,
                    tickBorderDashOffset: Cc
                }));
            }
            return this._ticksLength = Zb, this._borderValue = ec, _b;
        }
        _computeLabelItems(Pb) {
            const Qb = this.axis,
                Rb = this.options,
                {
                    position: Sb,
                    ticks: Tb
                } = Ub,
                Vb = this.isHorizontal(),
                Wb = this.ticks,
                {
                    align: Xb,
                    crossAlign: Yb,
                    padding: Zb,
                    mirror: $b
                } = _b,
                ac = Lb(Ub.grid),
                bc = ac + Zb,
                cc = $b ? -Zb : bc,
                dc = -(0, e.t)(this.labelRotation),
                ec = [];
            let fc, gc, hc, ic, jc, kc, lc, mc, nc, oc, pc, qc, rc = 'middle';
            if ('top' === Sb)
                kc = this.bottom - cc, lc = this._getXAxisLabelAlignment();
            else if ('bottom' === Sb)
                kc = this.top + cc, lc = this._getXAxisLabelAlignment();
            else if ('left' === Sb) {
                const sc = this._getYAxisLabelAlignment(ac);
                lc = sc.textAlign, jc = sc.x;
            } else if ('right' === Sb) {
                const tc = this._getYAxisLabelAlignment(ac);
                lc = tc.textAlign, jc = tc.x;
            } else if ('x' === Qb) {
                if ('center' === Sb)
                    kc = (tc.top + tc.bottom) / 2 + bc;
                else if ((0, e.i)(Sb)) {
                    const uc = Object.keys(Sb)[0],
                        vc = Sb[uc];
                    kc = this.chart.scales[uc].getPixelForValue(vc) + bc;
                }
                lc = this._getXAxisLabelAlignment();
            } else if ('y' === Qb) {
                if ('center' === Sb)
                    jc = (tc.left + tc.right) / 2 - bc;
                else if ((0, e.i)(Sb)) {
                    const uc = Object.keys(Sb)[0],
                        vc = Sb[uc];
                    jc = this.chart.scales[uc].getPixelForValue(vc);
                }
                lc = this._getYAxisLabelAlignment(ac).textAlign;
            }
            'y' === Qb && ('start' === Xb ? rc = 'top' : 'end' === Xb && (rc = 'bottom'));
            const sc = this._getLabelSizes();
            for (fc = 0, gc = Wb.length; fc < gc; ++fc) {
                hc = Wb[fc], ic = hc.label;
                const tc = _b.setContext(this.getContext(fc));
                mc = this.getPixelForTick(fc) + _b.labelOffset, nc = this._resolveTickFontOptions(fc), oc = nc.lineHeight, pc = (0, e.b)(ic) ? ic.length : 1;
                const uc = pc / 2,
                    vc = tc.color,
                    wc = tc.textStrokeColor,
                    xc = tc.textStrokeWidth;
                let yc, zc = Ac;
                if (Vb ? (jc = mc, 'inner' === Ac && (zc = fc === gc - 1 ? this.options.reverse ? 'left' : 'right' : 0 === fc ? this.options.reverse ? 'right' : 'left' : 'center'), qc = 'top' === Sb ? 'near' === Yb || 0 !== dc ? -pc * oc + oc / 2 : 'center' === Yb ? -sc.highest.height / 2 - uc * oc + oc : -sc.highest.height + oc / 2 : 'near' === Yb || 0 !== dc ? oc / 2 : 'center' === Yb ? sc.highest.height / 2 - uc * oc : sc.highest.height - pc * oc, $b && (qc *= -1), 0 === dc || tc.showLabelBackdrop || (jc += oc / 2 * Math.sin(dc))) : (kc = mc, qc = (1 - pc) * oc / 2), tc.showLabelBackdrop) {
                    const Bc = (0, e.E)(tc.backdropPadding),
                        Cc = sc.heights[fc],
                        Dc = sc.widths[fc];
                    let Ec = qc - Bc.top,
                        Fc = 0 - Bc.left;
                    switch (rc) {
                        case 'middle':
                            Ec -= Cc / 2;
                            break;
                        case 'bottom':
                            Ec -= Cc;
                    }
                    switch (Ac) {
                        case 'center':
                            Fc -= Dc / 2;
                            break;
                        case 'right':
                            Fc -= Dc;
                    }
                    yc = {
                        left: Fc,
                        top: Ec,
                        width: Dc + Bc.width,
                        height: Cc + Bc.height,
                        color: tc.backdropColor
                    };
                }
                ec.push({
                    label: ic,
                    font: nc,
                    textOffset: qc,
                    options: {
                        rotation: dc,
                        color: vc,
                        strokeColor: wc,
                        strokeWidth: xc,
                        textAlign: zc,
                        textBaseline: rc,
                        translation: [
                            jc,
                            kc
                        ],
                        backdrop: yc
                    }
                });
            }
            return ec;
        }
        _getXAxisLabelAlignment() {
            const {
                position: tc,
                ticks: uc
            } = this.options;
            if (-(0, e.t)(this.labelRotation))
                return 'top' === tc ? 'left' : 'right';
            let vc = 'center';
            return 'start' === uc.align ? vc = 'left' : 'end' === uc.align ? vc = 'right' : 'inner' === uc.align && (vc = 'inner'), vc;
        }
        _getYAxisLabelAlignment(Pb) {
            const {
                position: Qb,
                ticks: {
                    crossAlign: Rb,
                    mirror: Sb,
                    padding: Tb
                }
            } = this.options, Ub = Pb + Tb, Vb = this._getLabelSizes().widest.width;
            let Wb, Xb;
            return 'left' === Qb ? Sb ? (Xb = this.right + Tb, 'near' === Rb ? Wb = 'left' : 'center' === Rb ? (Wb = 'center', Xb += Vb / 2) : (Wb = 'right', Xb += Vb)) : (Xb = this.right - Ub, 'near' === Rb ? Wb = 'right' : 'center' === Rb ? (Wb = 'center', Xb -= Vb / 2) : (Wb = 'left', Xb = this.left)) : 'right' === Qb ? Sb ? (Xb = this.left + Tb, 'near' === Rb ? Wb = 'right' : 'center' === Rb ? (Wb = 'center', Xb -= Vb / 2) : (Wb = 'left', Xb -= Vb)) : (Xb = this.left + Ub, 'near' === Rb ? Wb = 'left' : 'center' === Rb ? (Wb = 'center', Xb += Vb / 2) : (Wb = 'right', Xb = this.right)) : Wb = 'right', {
                textAlign: Wb,
                x: Xb
            };
        }
        _computeLabelArea() {
            if (this.options.ticks.mirror)
                return;
            const Yb = this.chart,
                Zb = this.options.position;
            return 'left' === Zb || 'right' === Zb ? {
                top: 0,
                left: this.left,
                bottom: Yb.height,
                right: this.right
            } : 'top' === Zb || 'bottom' === Zb ? {
                top: this.top,
                left: 0,
                bottom: this.bottom,
                right: Yb.width
            } : void 0;
        }
        drawBackground() {
            const {
                ctx: $b,
                options: {
                    backgroundColor: _b
                },
                left: ac,
                top: bc,
                width: cc,
                height: dc
            } = this;
            _b && ($b.save(), $b.fillStyle = _b, $b.fillRect(ac, bc, cc, dc), $b.restore());
        }
        getLineWidthForValue(Pb) {
            const Qb = this.options.grid;
            if (!this._isVisible() || !Qb.display)
                return 0;
            const Rb = this.ticks.findIndex(Qb => Qb.value === Pb);
            if (Rb >= 0) {
                return Qb.setContext(this.getContext(Rb)).lineWidth;
            }
            return 0;
        }
        drawGrid(Pb) {
            const Qb = this.options.grid,
                Rb = this.ctx,
                Sb = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(Pb));
            let Tb, Ub;
            const Vb = (Pb, Qb, Sb) => {
                Sb.width && Sb.color && (Rb.save(), Rb.lineWidth = Sb.width, Rb.strokeStyle = Sb.color, Rb.setLineDash(Sb.borderDash || []), Rb.lineDashOffset = Sb.borderDashOffset, Rb.beginPath(), Rb.moveTo(Pb.x, Pb.y), Rb.lineTo(Qb.x, Qb.y), Rb.stroke(), Rb.restore());
            };
            if (Qb.display)
                for (Tb = 0, Ub = Sb.length; Tb < Ub; ++Tb) {
                    const Wb = Sb[Tb];
                    Qb.drawOnChartArea && Vb({
                        x: Wb.x1,
                        y: Wb.y1
                    }, {
                        x: Wb.x2,
                        y: Wb.y2
                    }, Wb), Qb.drawTicks && Vb({
                        x: Wb.tx1,
                        y: Wb.ty1
                    }, {
                        x: Wb.tx2,
                        y: Wb.ty2
                    }, {
                        color: Wb.tickColor,
                        width: Wb.tickWidth,
                        borderDash: Wb.tickBorderDash,
                        borderDashOffset: Wb.tickBorderDashOffset
                    });
                }
        }
        drawBorder() {
            const {
                chart: Wb,
                ctx: Xb,
                options: {
                    border: Yb,
                    grid: Zb
                }
            } = this, $b = Yb.setContext(this.getContext()), _b = Yb.display ? $b.width : 0;
            if (!_b)
                return;
            const ac = Zb.setContext(this.getContext(0)).lineWidth,
                bc = this._borderValue;
            let cc, dc, ec, fc;
            this.isHorizontal() ? (cc = (0, Ub.X)(Wb, this.left, _b) - _b / 2, dc = (0, Ub.X)(Wb, this.right, ac) + ac / 2, ec = fc = bc) : (ec = (0, Ub.X)(Wb, this.top, _b) - _b / 2, fc = (0, Ub.X)(Wb, this.bottom, ac) + ac / 2, cc = dc = bc), Xb.save(), Xb.lineWidth = $b.width, Xb.strokeStyle = $b.color, Xb.beginPath(), Xb.moveTo(cc, ec), Xb.lineTo(dc, fc), Xb.stroke(), Xb.restore();
        }
        drawLabels(Pb) {
            if (!this.options.ticks.display)
                return;
            const Qb = this.ctx,
                Rb = this._computeLabelArea();
            Rb && (0, e.Y)(Qb, Rb);
            const Sb = this.getLabelItems(Pb);
            for (const Tb of Sb) {
                const Ub = Tb.options,
                    Vb = Tb.font,
                    Wb = Tb.label,
                    Xb = Tb.textOffset;
                (0, e.Z)(Qb, Wb, 0, Xb, Vb, Ub);
            }
            Rb && (0, e.$)(Qb);
        }
        drawTitle() {
            const {
                ctx: Ub,
                options: {
                    position: Vb,
                    title: Wb,
                    reverse: Xb
                }
            } = this;
            if (!Wb.display)
                return;
            const Yb = (0, e.a0)(Wb.font),
                Zb = (0, e.E)(Wb.padding),
                $b = Wb.align;
            let _b = Yb.lineHeight / 2;
            'bottom' === Vb || 'center' === Vb || (0, e.i)(Vb) ? (_b += Zb.bottom, (0, e.b)(Wb.text) && (_b += Yb.lineHeight * (Wb.text.length - 1))) : _b += Zb.top;
            const {
                titleX: ac,
                titleY: bc,
                maxWidth: cc,
                rotation: dc
            } = function(Ub, Vb, Wb, Xb) {
                const {
                    top: ec,
                    left: fc,
                    bottom: gc,
                    right: hc,
                    chart: ic
                } = jc, {
                    chartArea: kc,
                    scales: lc
                } = mc;
                let nc, oc, pc, qc = 0;
                const rc = gc - ec,
                    sc = hc - fc;
                if (jc.isHorizontal()) {
                    if (oc = (0, e.a2)(Xb, fc, hc), (0, e.i)(Wb)) {
                        const tc = Object.keys(Wb)[0],
                            uc = Wb[tc];
                        pc = lc[tc].getPixelForValue(uc) + rc - Vb;
                    } else
                        pc = 'center' === Wb ? (kc.bottom + kc.top) / 2 + rc - Vb : Ib(jc, Wb, Vb);
                    nc = hc - fc;
                } else {
                    if ((0, e.i)(Wb)) {
                        const tc = Object.keys(Wb)[0],
                            uc = Wb[tc];
                        oc = lc[tc].getPixelForValue(uc) - sc + Vb;
                    } else
                        oc = 'center' === Wb ? (kc.left + kc.right) / 2 - sc + Vb : Ib(jc, Wb, Vb);
                    pc = (0, e.a2)(Xb, gc, ec), qc = 'left' === Wb ? -e.H : e.H;
                }
                return {
                    titleX: oc,
                    titleY: pc,
                    maxWidth: nc,
                    rotation: qc
                };
            }(this, _b, Vb, $b);
            (0, e.Z)(Ub, Wb.text, 0, 0, Yb, {
                color: Wb.color,
                maxWidth: cc,
                rotation: dc,
                textAlign: Nb($b, Vb, Xb),
                textBaseline: 'middle',
                translation: [
                    ac,
                    bc
                ]
            });
        }
        draw(Pb) {
            this._isVisible() && (this.drawBackground(), this.drawGrid(Pb), this.drawBorder(), this.drawTitle(), this.drawLabels(Pb));
        }
        _layers() {
            const Qb = this.options,
                Rb = Qb.ticks && Qb.ticks.z || 0,
                Sb = (0, e.v)(Qb.grid && Qb.grid.z, -1),
                Tb = (0, e.v)(Qb.border && Qb.border.z, 0);
            return this._isVisible() && this.draw === Ob.prototype.draw ? [{
                    z: Sb,
                    draw: Qb => {
                        this.drawBackground(), this.drawGrid(Qb), this.drawTitle();
                    }
                },
                {
                    z: Tb,
                    draw: () => {
                        this.drawBorder();
                    }
                },
                {
                    z: Rb,
                    draw: Qb => {
                        this.drawLabels(Qb);
                    }
                }
            ] : [{
                z: Rb,
                draw: Qb => {
                    this.draw(Qb);
                }
            }];
        }
        getMatchingVisibleMetas(Pb) {
            const Qb = this.chart.getSortedVisibleDatasetMetas(),
                Rb = this.axis + 'AxisID',
                Sb = [];
            let Tb, Ub;
            for (Tb = 0, Ub = Qb.length; Tb < Ub; ++Tb) {
                const Vb = Qb[Tb];
                Vb[Rb] !== this.id || Pb && Vb.type !== Pb || Sb.push(Vb);
            }
            return Sb;
        }
        _resolveTickFontOptions(Pb) {
            const Qb = this.options.ticks.setContext(this.getContext(Pb));
            return (0, e.a0)(Qb.font);
        }
        _maxDigits() {
            const Rb = this._resolveTickFontOptions(0).lineHeight;
            return (this.isHorizontal() ? this.width : this.height) / Rb;
        }
        constructor(Pb) {
            super(), this.id = Pb.id, this.type = Pb.type, this.options = void 0, this.ctx = Pb.ctx, this.chart = Pb.chart, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this._margins = {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }, this.maxWidth = void 0, this.maxHeight = void 0, this.paddingTop = void 0, this.paddingBottom = void 0, this.paddingLeft = void 0, this.paddingRight = void 0, this.axis = void 0, this.labelRotation = void 0, this.min = void 0, this.max = void 0, this._range = void 0, this.ticks = [], this._gridLineItems = null, this._labelItems = null, this._labelSizes = null, this._length = 0, this._maxLength = 0, this._longestTextCache = {}, this._startPixel = void 0, this._endPixel = void 0, this._reversePixels = !1, this._userMax = void 0, this._userMin = void 0, this._suggestedMax = void 0, this._suggestedMin = void 0, this._ticksLength = 0, this._borderValue = 0, this._cache = {}, this._dataLimitsCached = !1, this.$context = void 0;
        }
    }
    class Qb {
        isForType(Pb) {
            return Object.prototype.isPrototypeOf.call(this.type.prototype, Pb.prototype);
        }
        register(Pb) {
            const Rb = Object.getPrototypeOf(Pb);
            let Sb;
            (function(Pb) {
                return 'id' in Pb && 'defaults' in Pb;
            }(Rb) && (Sb = this.register(Rb)));
            const Tb = this.items,
                Ub = Pb.id,
                Vb = this.scope + '.' + Ub;
            if (!Ub)
                throw new Error('class does not have id: ' + Pb);
            return Ub in Tb || (Tb[Ub] = Pb, function(Pb, Rb, Sb) {
                const Wb = (0, e.a4)(Object.create(null), [
                    Sb ? e.d.get(Sb) : {},
                    e.d.get(Rb),
                    Pb.defaults
                ]);
                e.d.set(Rb, Wb), Pb.defaultRoutes && function(Pb, Rb) {
                    Object.keys(Rb).forEach(Sb => {
                        const Xb = Sb.split('.'),
                            Yb = Xb.pop(),
                            Zb = [Pb].concat(Xb).join('.'),
                            $b = Rb[Sb].split('.'),
                            _b = $b.pop(),
                            ac = $b.join('.');
                        e.d.route(Zb, Yb, ac, _b);
                    });
                }(Rb, Pb.defaultRoutes);
                Pb.descriptors && e.d.describe(Rb, Pb.descriptors);
            }(Pb, Vb, Sb), this.override && e.d.override(Pb.id, Pb.overrides)), Vb;
        }
        get(Pb) {
            return this.items[Pb];
        }
        unregister(Pb) {
            const Rb = this.items,
                Sb = Pb.id,
                Tb = this.scope;
            Sb in Rb && delete Rb[Sb], Tb && Sb in e.d[Tb] && (delete e.d[Tb][Sb], this.override && delete e.a3[Sb]);
        }
        constructor(Pb, J, A) {
            this.type = Pb, this.scope = J, this.override = A, this.items = Object.create(null);
        }
    }
    class Rb {
        add(...Pb) {
            this._each('register', Pb);
        }
        remove(...Pb) {
            this._each('unregister', Pb);
        }
        addControllers(...Pb) {
            this._each('register', Pb, this.controllers);
        }
        addElements(...Pb) {
            this._each('register', Pb, this.elements);
        }
        addPlugins(...Pb) {
            this._each('register', Pb, this.plugins);
        }
        addScales(...Pb) {
            this._each('register', Pb, this.scales);
        }
        getController(Pb) {
            return this._get(Pb, this.controllers, 'controller');
        }
        getElement(Pb) {
            return this._get(Pb, this.elements, 'element');
        }
        getPlugin(Pb) {
            return this._get(Pb, this.plugins, 'plugin');
        }
        getScale(Pb) {
            return this._get(Pb, this.scales, 'scale');
        }
        removeControllers(...Pb) {
            this._each('unregister', Pb, this.controllers);
        }
        removeElements(...Pb) {
            this._each('unregister', Pb, this.elements);
        }
        removePlugins(...Pb) {
            this._each('unregister', Pb, this.plugins);
        }
        removeScales(...Pb) {
            this._each('unregister', Pb, this.scales);
        }
        _each(Pb, J, A) {
            [...J].forEach(J => {
                const Sb = A || this._getRegistryForType(J);
                A || Sb.isForType(J) || Sb === this.plugins && J.id ? this._exec(Pb, Sb, J) : (0, e.F)(J, J => {
                    const Tb = A || this._getRegistryForType(J);
                    this._exec(Pb, Tb, J);
                });
            });
        }
        _exec(Pb, J, A) {
            const Sb = (0, e.a5)(Pb);
            (0, e.Q)(A['before' + Sb], [], A), J[Pb](A), (0, e.Q)(A['after' + Sb], [], A);
        }
        _getRegistryForType(Pb) {
            for (let Sb = 0; Sb < this._typedRegistries.length; Sb++) {
                const Tb = this._typedRegistries[Sb];
                if (Tb.isForType(Pb))
                    return Tb;
            }
            return this.plugins;
        }
        _get(Pb, J, A) {
            const Sb = J.get(Pb);
            if (void 0 === Sb)
                throw new Error('"' + Pb + '" is not a registered ' + A + '.');
            return Sb;
        }
        constructor() {
            this.controllers = new Qb(y, 'datasets', !0), this.elements = new Qb(Fb, 'elements'), this.plugins = new Qb(Object, 'plugins'), this.scales = new Qb(Ob, 'scales'), this._typedRegistries = [
                this.controllers,
                this.scales,
                this.elements
            ];
        }
    }
    var Sb = new Rb();
    class Tb {
        notify(Pb, J, A, p) {
            'beforeInit' === J && (this._init = this._createDescriptors(Pb, !0), this._notify(this._init, Pb, 'install'));
            const Ub = p ? this._descriptors(Pb).filter(p) : this._descriptors(Pb),
                Vb = this._notify(Ub, Pb, J, A);
            return 'afterDestroy' === J && (this._notify(Ub, Pb, 'stop'), this._notify(this._init, Pb, 'uninstall')), Vb;
        }
        _notify(Pb, J, A, p) {
            p = p || {};
            for (const Ub of Pb) {
                const Vb = Ub.plugin,
                    Wb = Vb[A],
                    Xb = [
                        J,
                        p,
                        Ub.options
                    ];
                if (!1 === (0, e.Q)(Wb, Xb, Vb) && p.cancelable)
                    return !1;
            }
            return !0;
        }
        invalidate() {
            (0, e.k)(this._cache) || (this._oldCache = this._cache, this._cache = void 0);
        }
        _descriptors(Pb) {
            if (this._cache)
                return this._cache;
            const Ub = this._cache = this._createDescriptors(Pb);
            return this._notifyStateChanges(Pb), Ub;
        }
        _createDescriptors(Pb, J) {
            const Ub = Pb && Pb.config,
                Vb = (0, e.v)(Ub.options && Ub.options.plugins, {}),
                Wb = function(Pb) {
                    const Xb = {},
                        Yb = [],
                        Zb = Object.keys(Sb.plugins.items);
                    for (let $b = 0; $b < Zb.length; $b++)
                        Yb.push(Sb.getPlugin(Zb[$b]));
                    const _b = $b.plugins || [];
                    for (let ac = 0; ac < _b.length; ac++) {
                        const bc = _b[ac]; -
                        1 === Yb.indexOf(bc) && (Yb.push(bc), Xb[bc.id] = !0);
                    }
                    return {
                        plugins: Yb,
                        localIds: Xb
                    };
                }(Ub);
            return !1 !== Vb || J ? function(Pb, {
                plugins: Xb,
                localIds: Yb
            }, Vb, Wb) {
                const Zb = [],
                    $b = Pb.getContext();
                for (const _b of Xb) {
                    const ac = _b.id,
                        bc = Ub(Vb[ac], Wb);
                    null !== bc && Zb.push({
                        plugin: _b,
                        options: Vb(Pb.config, {
                            plugin: _b,
                            local: Yb[ac]
                        }, bc, $b)
                    });
                }
                return Zb;
            }(Pb, Wb, Vb, Xb) : [];
        }
        _notifyStateChanges(Pb) {
            const Ub = this._oldCache || [],
                Vb = this._cache,
                Wb = (Pb, Ub) => Pb.filter(Pb => !Ub.some(Ub => Pb.plugin.id === Ub.plugin.id));
            this._notify(Wb(Ub, Vb), Pb, 'stop'), this._notify(Wb(Vb, Ub), Pb, 'start');
        }
        constructor() {
            this._init = [];
        }
    }

    function Ub(Pb, J) {
        return J || !1 !== Pb ? !0 === Pb ? {} : Pb : null;
    }

    function Vb(Pb, {
        plugin: Wb,
        local: Xb
    }, p, d) {
        const Yb = Pb.pluginScopeKeys(Wb),
            Zb = Pb.getOptionScopes(p, Yb);
        return Xb && Wb.defaults && Zb.push(Wb.defaults), Pb.createResolver(Zb, d, [''], {
            scriptable: !1,
            indexable: !1,
            allKeys: !0
        });
    }

    function Yb(Pb, Wb) {
        const Zb = e.d.datasets[Pb] || {};
        return ((Wb.datasets || {})[Pb] || {}).indexAxis || Wb.indexAxis || Zb.indexAxis || 'x';
    }

    function Zb(Pb, Wb) {
        if ('x' === Pb || 'y' === Pb || 'r' === Pb)
            return Pb;
        var $b;
        if (Pb = Wb.axis || ('top' === ($b = Wb.position) || 'bottom' === $b ? 'x' : 'left' === $b || 'right' === $b ? 'y' : void 0) || Pb.length > 1 && Zb(Pb[0].toLowerCase(), Wb))
            return Pb;
        throw new Error(`Cannot determine type of '${ name }' axis. Please provide 'axis' or 'position' option.`);
    }

    function $b(Pb) {
        const _b = Pb.options || (Pb.options = {});
        _b.plugins = (0, e.v)(_b.plugins, {}), _b.scales = function(Pb, _b) {
            const ac = e.a3[Pb.type] || {
                    scales: {}
                },
                bc = _b.scales || {},
                cc = Yb(Pb.type, _b),
                dc = Object.create(null);
            return Object.keys(bc).forEach(Pb => {
                const ec = bc[Pb];
                if (!(0, e.i)(ec))
                    return console.error(`Invalid scale configuration for scale: ${ Pb }`);
                if (ec._proxy)
                    return console.warn(`Ignoring resolver passed as options for scale: ${ Pb }`);
                const fc = Zb(Pb, ec),
                    gc = function(Pb, ec) {
                        return Pb === ec ? '_index_' : '_value_';
                    }(fc, cc),
                    hc = ac.scales || {};
                dc[Pb] = (0, e.ab)(Object.create(null), [{
                        axis: fc
                    },
                    ec,
                    hc[fc],
                    hc[gc]
                ]);
            }), Pb.data.datasets.forEach(ac => {
                const ec = ac.type || Pb.type,
                    fc = ac.indexAxis || Yb(ec, _b),
                    gc = (e.a3[ec] || {}).scales || {};
                Object.keys(gc).forEach(Pb => {
                    const hc = function(Pb, hc) {
                            let ic = jc;
                            return '_index_' === jc ? ic = hc : '_value_' === jc && (ic = 'x' === hc ? 'y' : 'x'), ic;
                        }(Pb, fc),
                        ic = ac[hc + 'AxisID'] || hc;
                    dc[ic] = dc[ic] || Object.create(null), (0, e.ab)(dc[ic], [{
                            axis: hc
                        },
                        bc[ic],
                        gc[Pb]
                    ]);
                });
            }), Object.keys(dc).forEach(Pb => {
                const ec = dc[Pb];
                (0, e.ab)(ec, [
                    e.d.scales[ec.type],
                    e.d.scale
                ]);
            }), dc;
        }(Pb, _b);
    }

    function _b(Pb) {
        return (Pb = Pb || {}).datasets = Pb.datasets || [], Pb.labels = Pb.labels || [], Pb;
    }
    const ac = new Map(),
        bc = new Set();

    function cc(Pb, Wb) {
        let dc = ac.get(Pb);
        return dc || (dc = Wb(), ac.set(Pb, dc), bc.add(dc)), dc;
    }
    const dc = (Pb, Wb, Xb) => {
        const ec = (0, e.f)(Wb, Xb);
        void 0 !== ec && Pb.add(ec);
    };
    class ec {
        get platform() {
            return this._config.platform;
        }
        get type() {
            return this._config.type;
        }
        set type(Pb) {
            this._config.type = Pb;
        }
        get data() {
            return this._config.data;
        }
        set data(Pb) {
            this._config.data = _b(Pb);
        }
        get options() {
            return this._config.options;
        }
        set options(Pb) {
            this._config.options = Pb;
        }
        get plugins() {
            return this._config.plugins;
        }
        update() {
            const fc = this._config;
            this.clearCache(), $b(fc);
        }
        clearCache() {
            this._scopeCache.clear(), this._resolverCache.clear();
        }
        datasetScopeKeys(Pb) {
            return cc(Pb, () => [
                [
                    `datasets.${ Pb }`,
                    ''
                ]
            ]);
        }
        datasetAnimationScopeKeys(Pb, Wb) {
            return cc(`${ Pb }.transition.${ Wb }`, () => [
                [
                    `datasets.${ Pb }.transitions.${ Wb }`,
                    `transitions.${ Wb }`
                ],
                [
                    `datasets.${ Pb }`,
                    ''
                ]
            ]);
        }
        datasetElementScopeKeys(Pb, Wb) {
            return cc(`${ Pb }-${ Wb }`, () => [
                [
                    `datasets.${ Pb }.elements.${ Wb }`,
                    `datasets.${ Pb }`,
                    `elements.${ Wb }`,
                    ''
                ]
            ]);
        }
        pluginScopeKeys(Pb) {
            const fc = Pb.id;
            return cc(`${ this.type }-plugin-${ fc }`, () => [
                [
                    `plugins.${ fc }`,
                    ...Pb.additionalOptionScopes || []
                ]
            ]);
        }
        _cachedScopes(Pb, Wb) {
            const fc = this._scopeCache;
            let gc = fc.get(Pb);
            return gc && !Wb || (gc = new Map(), fc.set(Pb, gc)), gc;
        }
        getOptionScopes(Pb, Wb, Xb) {
            const {
                options: fc,
                type: gc
            } = this, hc = this._cachedScopes(Pb, Xb), ic = hc.get(Wb);
            if (ic)
                return ic;
            const jc = new Set();
            Wb.forEach(Wb => {
                Pb && (jc.add(Pb), Wb.forEach(Wb => dc(jc, Pb, Wb))), Wb.forEach(Pb => dc(jc, fc, Pb)), Wb.forEach(Pb => dc(jc, e.a3[gc] || {}, Pb)), Wb.forEach(Pb => dc(jc, e.d, Pb)), Wb.forEach(Pb => dc(jc, e.a6, Pb));
            });
            const kc = Array.from(jc);
            return 0 === kc.length && kc.push(Object.create(null)), bc.has(Wb) && hc.set(Wb, kc), kc;
        }
        chartOptionScopes() {
            const {
                options: lc,
                type: mc
            } = this;
            return [
                lc,
                e.a3[mc] || {},
                e.d.datasets[mc] || {},
                {
                    type: mc
                },
                e.d,
                e.a6
            ];
        }
        resolveNamedOptions(Pb, Wb, Xb, fc = ['']) {
            const gc = {
                    $shared: !0
                },
                {
                    resolver: hc,
                    subPrefixes: ic
                } = hc(this._resolverCache, Pb, fc);
            let jc = kc;
            if (function(Pb, Wb) {
                    const {
                        isScriptable: lc,
                        isIndexable: mc
                    } = (0, e.aa)(Pb);
                    for (const nc of Wb) {
                        const oc = lc(nc),
                            pc = mc(nc),
                            qc = (pc || oc) && Pb[nc];
                        if (oc && ((0, e.a7)(qc) || ic(qc)) || pc && (0, e.b)(qc))
                            return !0;
                    }
                    return !1;
                }(kc, Wb)) {
                gc.$shared = !1, Xb = (0, e.a7)(Xb) ? Xb() : Xb;
                const lc = this.createResolver(Pb, Xb, ic);
                jc = (0, e.a8)(kc, Xb, lc);
            }
            for (const lc of Wb)
                gc[lc] = jc[lc];
            return gc;
        }
        createResolver(Pb, Wb, gc = [''], fc) {
            const {
                resolver: hc
            } = hc(this._resolverCache, Pb, gc);
            return (0, e.i)(Wb) ? (0, e.a8)(hc, Wb, void 0, fc) : hc;
        }
        constructor(Pb) {
            this._config = function(Pb) {
                return (Pb = Pb || {}).data = _b(Pb.data), $b(Pb), Pb;
            }(Pb), this._scopeCache = new Map(), this._resolverCache = new Map();
        }
    }

    function hc(Pb, Wb, gc) {
        let ic = Pb.get(Wb);
        ic || (ic = new Map(), Pb.set(Wb, ic));
        const jc = gc.join();
        let kc = ic.get(jc);
        if (!kc) {
            kc = {
                resolver: (0, e.a9)(Wb, gc),
                subPrefixes: gc.filter(Pb => !Pb.toLowerCase().includes('hover'))
            }, ic.set(jc, kc);
        }
        return kc;
    }
    const ic = Pb => (0, e.i)(Pb) && Object.getOwnPropertyNames(Pb).reduce((Wb, gc) => Wb || (0, e.a7)(Pb[gc]), !1);
    const jc = [
        'top',
        'bottom',
        'left',
        'right',
        'chartArea'
    ];

    function kc(Pb, Wb) {
        return 'top' === Pb || 'bottom' === Pb || -1 === jc.indexOf(Pb) && 'x' === Wb;
    }

    function lc(Pb, Wb) {
        return function(gc, fc) {
            return gc[Pb] === fc[Pb] ? gc[Wb] - fc[Wb] : gc[Pb] - fc[Pb];
        };
    }

    function mc(Pb) {
        const nc = Pb.chart,
            oc = nc.options.animation;
        nc.notifyPlugins('afterRender'), (0, e.Q)(oc && oc.onComplete, [Pb], nc);
    }

    function nc(Pb) {
        const oc = Pb.chart,
            pc = oc.options.animation;
        (0, e.Q)(pc && pc.onProgress, [Pb], oc);
    }

    function oc(Pb) {
        return (0, e.M)() && 'string' == typeof Pb ? Pb = document.getElementById(Pb) : Pb && Pb.length && (Pb = Pb[0]), Pb && Pb.canvas && (Pb = Pb.canvas), Pb;
    }
    const pc = {},
        qc = Pb => {
            const rc = oc(Pb);
            return Object.values(pc).filter(Pb => Pb.canvas === rc).pop();
        };

    function rc(Pb, Wb, gc) {
        const sc = Object.keys(Pb);
        for (const tc of sc) {
            const uc = +tc;
            if (uc >= Wb) {
                const vc = Pb[tc];
                delete Pb[tc], (gc > 0 || uc > Wb) && (Pb[uc + gc] = vc);
            }
        }
    }
    class sc {
        static register(...Pb) {
            Sb.add(...Pb), tc();
        }
        static unregister(...Pb) {
            Sb.remove(...Pb), tc();
        }
        get aspectRatio() {
            const {
                options: {
                    aspectRatio: tc,
                    maintainAspectRatio: uc
                },
                width: vc,
                height: wc,
                _aspectRatio: xc
            } = this;
            return (0, e.k)(tc) ? uc && xc ? xc : wc ? vc / wc : null : tc;
        }
        get data() {
            return this.config.data;
        }
        set data(Pb) {
            this.config.data = Pb;
        }
        get options() {
            return this._options;
        }
        set options(Pb) {
            this.config.options = Pb;
        }
        get registry() {
            return Sb;
        }
        _initialize() {
            return this.notifyPlugins('beforeInit'), this.options.responsive ? this.resize() : (0, e.ae)(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins('afterInit'), this;
        }
        clear() {
            return (0, e.af)(this.canvas, this.ctx), this;
        }
        stop() {
            return h.stop(this), this;
        }
        resize(Pb, Wb) {
            h.running(this) ? this._resizeBeforeDraw = {
                width: Pb,
                height: Wb
            } : this._resize(Pb, Wb);
        }
        _resize(Pb, Wb) {
            const tc = this.options,
                uc = this.canvas,
                vc = tc.maintainAspectRatio && this.aspectRatio,
                wc = this.platform.getMaximumSize(uc, Pb, Wb, vc),
                xc = tc.devicePixelRatio || this.platform.getDevicePixelRatio(),
                yc = this.width ? 'resize' : 'attach';
            this.width = wc.width, this.height = wc.height, this._aspectRatio = this.aspectRatio, (0, e.ae)(this, xc, !0) && (this.notifyPlugins('resize', {
                size: wc
            }), (0, e.Q)(tc.onResize, [
                this,
                wc
            ], this), this.attached && this._doResize(yc) && this.render());
        }
        ensureScalesHaveIDs() {
            const zc = this.options.scales || {};
            (0, e.F)(zc, (zc, Wb) => {
                zc.id = Wb;
            });
        }
        buildOrUpdateScales() {
            const Ac = this.options,
                Bc = Ac.scales,
                Cc = this.scales,
                Dc = Object.keys(Cc).reduce((Ac, Bc) => (Ac[Bc] = !1, Ac), {});
            let Ec = [];
            Bc && (Ec = Ec.concat(Object.keys(Bc).map(Ac => {
                const Fc = Bc[Ac],
                    Gc = Zb(Ac, Fc),
                    Hc = 'r' === Gc,
                    Ic = 'x' === Gc;
                return {
                    options: Fc,
                    dposition: Hc ? 'chartArea' : Ic ? 'bottom' : 'left',
                    dtype: Hc ? 'radialLinear' : Ic ? 'category' : 'linear'
                };
            }))), (0, e.F)(Ec, Bc => {
                const Fc = Bc.options,
                    Gc = Fc.id,
                    Hc = Zb(Gc, Fc),
                    Ic = (0, e.v)(Fc.type, Bc.dtype);
                void 0 !== Fc.position && kc(Fc.position, Hc) === kc(Bc.dposition) || (Fc.position = Bc.dposition), Dc[Gc] = !0;
                let Jc = null;
                if (Gc in Cc && Cc[Gc].type === Ic)
                    Jc = Cc[Gc];
                else {
                    Jc = new(Sb.getScale(Ic))({
                        id: Gc,
                        type: Ic,
                        ctx: this.ctx,
                        chart: this
                    }), Cc[Jc.id] = Jc;
                }
                Jc.init(Fc, Ac);
            }), (0, e.F)(Dc, (Ac, Bc) => {
                Ac || delete Cc[Bc];
            }), (0, e.F)(Cc, Ac => {
                nb.configure(this, Ac, Ac.options), nb.addBox(this, Ac);
            });
        }
        _updateMetasets() {
            const Fc = this._metasets,
                Gc = this.data.datasets.length,
                Hc = Fc.length;
            if (Fc.sort((Fc, Gc) => Fc.index - Gc.index), Hc > Gc) {
                for (let Ic = Jc; Ic < Hc; ++Ic)
                    this._destroyDatasetMeta(Ic);
                Ic.splice(Jc, Hc - Jc);
            }
            this._sortedMetasets = Fc.slice(0).sort(lc('order', 'index'));
        }
        _removeUnreferencedMetasets() {
            const {
                _metasets: Ic,
                data: {
                    datasets: Jc
                }
            } = this;
            Ic.length > Jc.length && delete this._stacks, Ic.forEach((Ic, Hc) => {
                0 === Jc.filter(Jc => Jc === Ic._dataset).length && this._destroyDatasetMeta(Hc);
            });
        }
        buildOrUpdateControllers() {
            const Kc = [],
                Lc = this.data.datasets;
            let Mc, Nc;
            for (this._removeUnreferencedMetasets(), Mc = 0, Nc = Lc.length; Mc < Nc; Mc++) {
                const Oc = Lc[Mc];
                let Pc = this.getDatasetMeta(Mc);
                const Qc = Oc.type || this.config.type;
                if (Pc.type && Pc.type !== Qc && (this._destroyDatasetMeta(Mc), Pc = this.getDatasetMeta(Mc)), Pc.type = Qc, Pc.indexAxis = Oc.indexAxis || Yb(Qc, this.options), Pc.order = Oc.order || 0, Pc.index = Mc, Pc.label = '' + Oc.label, Pc.visible = this.isDatasetVisible(Mc), Pc.controller)
                    Pc.controller.updateIndex(Mc), Pc.controller.linkScales();
                else {
                    const Rc = Sb.getController(Qc),
                        {
                            datasetElementType: Sc,
                            dataElementType: Tc
                        } = e.d.datasets[Qc];
                    Object.assign(Rc, {
                        dataElementType: Sb.getElement(Tc),
                        datasetElementType: Sc && Sb.getElement(Sc)
                    }), Pc.controller = new Rc(this, Mc), Kc.push(Pc.controller);
                }
            }
            return this._updateMetasets(), Kc;
        }
        _resetElements() {
            (0, e.F)(this.data.datasets, (Kc, Lc) => {
                this.getDatasetMeta(Lc).controller.reset();
            }, this);
        }
        reset() {
            this._resetElements(), this.notifyPlugins('reset');
        }
        update(Pb) {
            const tc = this.config;
            tc.update();
            const uc = this._options = tc.createResolver(tc.chartOptionScopes(), this.getContext()),
                vc = this._animationsDisabled = !uc.animation;
            if (this._updateScales(), this._checkEventBindings(), this._updateHiddenIndices(), this._plugins.invalidate(), !1 === this.notifyPlugins('beforeUpdate', {
                    mode: Pb,
                    cancelable: !0
                }))
                return;
            const wc = this.buildOrUpdateControllers();
            this.notifyPlugins('beforeElementsUpdate');
            let xc = 0;
            for (let yc = 0, zc = this.data.datasets.length; yc < zc; yc++) {
                const {
                    controller: Ac
                } = this.getDatasetMeta(yc), Bc = !vc && -1 === wc.indexOf(Ac);
                Ac.buildOrUpdateElements(Bc), xc = Math.max(+Ac.getMaxOverflow(), xc);
            }
            xc = this._minPadding = uc.layout.autoPadding ? xc : 0, this._updateLayout(xc), vc || (0, e.F)(wc, yc => {
                yc.reset();
            }), this._updateDatasets(yc), this.notifyPlugins('afterUpdate', {
                mode: yc
            }), this._layers.sort(lc('z', '_idx'));
            const {
                _active: Ac,
                _lastEvent: Bc
            } = this;
            Bc ? this._eventHandler(Bc, !0) : Ac.length && this._updateHoverStyles(Ac, Ac, !0), this.render();
        }
        _updateScales() {
            (0, e.F)(this.scales, yc => {
                nb.removeBox(this, yc);
            }), this.ensureScalesHaveIDs(), this.buildOrUpdateScales();
        }
        _checkEventBindings() {
            const Cc = this.options,
                Dc = new Set(Object.keys(this._listeners)),
                Ec = new Set(Cc.events);
            (0, e.ag)(Dc, Ec) && !!this._responsiveListeners === Cc.responsive || (this.unbindEvents(), this.bindEvents());
        }
        _updateHiddenIndices() {
            const {
                _hiddenIndices: Fc
            } = this, Gc = this._getUniformDataChanges() || [];
            for (const {
                    method: Hc,
                    start: Ic,
                    count: Jc
                }
                of Gc) {
                rc(Fc, Ic, '_removeElements' === Hc ? -Jc : Jc);
            }
        }
        _getUniformDataChanges() {
            const Kc = this._dataChanges;
            if (!Kc || !Kc.length)
                return;
            this._dataChanges = [];
            const Lc = this.data.datasets.length,
                Mc = Lc => new Set(Kc.filter(Kc => Kc[0] === Lc).map((Kc, Lc) => Lc + ',' + Kc.splice(1).join(','))),
                Nc = Mc(0);
            for (let Oc = 1; Oc < Lc; Oc++)
                if (!(0, e.ag)(Nc, Mc(Oc)))
                    return;
            return Array.from(Nc).map(Oc => Oc.split(',')).map(Oc => ({
                method: Oc[1],
                start: +Oc[2],
                count: +Oc[3]
            }));
        }
        _updateLayout(Pb) {
            if (!1 === this.notifyPlugins('beforeLayout', {
                    cancelable: !0
                }))
                return;
            nb.update(this, this.width, this.height, Pb);
            const tc = this.chartArea,
                uc = tc.width <= 0 || tc.height <= 0;
            this._layers = [], (0, e.F)(this.boxes, Pb => {
                uc && 'chartArea' === Pb.position || (Pb.configure && Pb.configure(), this._layers.push(...Pb._layers()));
            }, this), this._layers.forEach((Pb, tc) => {
                Pb._idx = tc;
            }), this.notifyPlugins('afterLayout');
        }
        _updateDatasets(Pb) {
            if (!1 !== this.notifyPlugins('beforeDatasetsUpdate', {
                    mode: Pb,
                    cancelable: !0
                })) {
                for (let tc = 0, uc = this.data.datasets.length; tc < uc; ++tc)
                    this.getDatasetMeta(tc).controller.configure();
                for (let vc = 0, wc = this.data.datasets.length; vc < wc; ++vc)
                    this._updateDataset(vc, (0, e.a7)(tc) ? tc({
                        datasetIndex: vc
                    }) : tc);
                this.notifyPlugins('afterDatasetsUpdate', {
                    mode: tc
                });
            }
        }
        _updateDataset(Pb, Wb) {
            const tc = this.getDatasetMeta(Pb),
                uc = {
                    meta: tc,
                    index: Pb,
                    mode: Wb,
                    cancelable: !0
                };
            !1 !== this.notifyPlugins('beforeDatasetUpdate', uc) && (tc.controller._update(Wb), uc.cancelable = !1, this.notifyPlugins('afterDatasetUpdate', uc));
        }
        render() {
            !1 !== this.notifyPlugins('beforeRender', {
                cancelable: !0
            }) && (h.has(this) ? this.attached && !h.running(this) && h.start(this) : (this.draw(), mc({
                chart: this
            })));
        }
        draw() {
            let vc;
            if (this._resizeBeforeDraw) {
                const {
                    width: wc,
                    height: xc
                } = this._resizeBeforeDraw;
                this._resize(wc, xc), this._resizeBeforeDraw = null;
            }
            if (this.clear(), this.width <= 0 || this.height <= 0)
                return;
            if (!1 === this.notifyPlugins('beforeDraw', {
                    cancelable: !0
                }))
                return;
            const wc = this._layers;
            for (vc = 0; vc < wc.length && wc[vc].z <= 0; ++vc)
                wc[vc].draw(this.chartArea);
            for (this._drawDatasets(); vc < wc.length; ++vc)
                wc[vc].draw(this.chartArea);
            this.notifyPlugins('afterDraw');
        }
        _getSortedDatasetMetas(Pb) {
            const tc = this._sortedMetasets,
                uc = [];
            let vc, wc;
            for (vc = 0, wc = tc.length; vc < wc; ++vc) {
                const xc = tc[vc];
                Pb && !xc.visible || uc.push(xc);
            }
            return uc;
        }
        getSortedVisibleDatasetMetas() {
            return this._getSortedDatasetMetas(!0);
        }
        _drawDatasets() {
            if (!1 === this.notifyPlugins('beforeDatasetsDraw', {
                    cancelable: !0
                }))
                return;
            const xc = this.getSortedVisibleDatasetMetas();
            for (let yc = xc.length - 1; yc >= 0; --yc)
                this._drawDataset(xc[yc]);
            this.notifyPlugins('afterDatasetsDraw');
        }
        _drawDataset(Pb) {
            const tc = this.ctx,
                uc = Pb._clip,
                vc = !uc.disabled,
                wc = function(Pb) {
                    const {
                        xScale: xc,
                        yScale: yc
                    } = zc;
                    if (xc && yc)
                        return {
                            left: xc.left,
                            right: xc.right,
                            top: yc.top,
                            bottom: yc.bottom
                        };
                }(Pb) || this.chartArea,
                xc = {
                    meta: Pb,
                    index: Pb.index,
                    cancelable: !0
                };
            !1 !== this.notifyPlugins('beforeDatasetDraw', xc) && (vc && (0, e.Y)(tc, {
                left: !1 === uc.left ? 0 : wc.left - uc.left,
                right: !1 === uc.right ? this.width : wc.right + uc.right,
                top: !1 === uc.top ? 0 : wc.top - uc.top,
                bottom: !1 === uc.bottom ? this.height : wc.bottom + uc.bottom
            }), Pb.controller.draw(), vc && (0, e.$)(tc), xc.cancelable = !1, this.notifyPlugins('afterDatasetDraw', xc));
        }
        isPointInArea(Pb) {
            return (0, e.C)(Pb, this.chartArea, this._minPadding);
        }
        getElementsAtEventForMode(Pb, Wb, gc, fc) {
            const tc = ab.modes[Wb];
            return 'function' == typeof tc ? tc(this, Pb, gc, fc) : [];
        }
        getDatasetMeta(Pb) {
            const tc = this.data.datasets[Pb],
                uc = this._metasets;
            let vc = uc.filter(Pb => Pb && Pb._dataset === tc).pop();
            return vc || (vc = {
                type: null,
                data: [],
                dataset: null,
                controller: null,
                hidden: null,
                xAxisID: null,
                yAxisID: null,
                order: tc && tc.order || 0,
                index: Pb,
                _dataset: tc,
                _parsed: [],
                _sorted: !1
            }, uc.push(vc)), vc;
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
        isDatasetVisible(Pb) {
            const tc = this.data.datasets[Pb];
            if (!tc)
                return !1;
            const uc = this.getDatasetMeta(Pb);
            return 'boolean' == typeof uc.hidden ? !uc.hidden : !tc.hidden;
        }
        setDatasetVisibility(Pb, Wb) {
            this.getDatasetMeta(Pb).hidden = !Wb;
        }
        toggleDataVisibility(Pb) {
            this._hiddenIndices[Pb] = !this._hiddenIndices[Pb];
        }
        getDataVisibility(Pb) {
            return !this._hiddenIndices[Pb];
        }
        _updateVisibility(Pb, Wb, gc) {
            const tc = gc ? 'show' : 'hide',
                uc = this.getDatasetMeta(Pb),
                vc = uc.controller._resolveAnimations(void 0, tc);
            (0, e.h)(Wb) ? (uc.data[Wb].hidden = !gc, this.update()) : (this.setDatasetVisibility(Pb, gc), vc.update(uc, {
                visible: gc
            }), this.update(Wb => Wb.datasetIndex === Pb ? tc : void 0));
        }
        hide(Pb, Wb) {
            this._updateVisibility(Pb, Wb, !1);
        }
        show(Pb, Wb) {
            this._updateVisibility(Pb, Wb, !0);
        }
        _destroyDatasetMeta(Pb) {
            const tc = this._metasets[Pb];
            tc && tc.controller && tc.controller._destroy(), delete this._metasets[Pb];
        }
        _stop() {
            let uc, vc;
            for (this.stop(), h.remove(this), uc = 0, vc = this.data.datasets.length; uc < vc; ++uc)
                this._destroyDatasetMeta(uc);
        }
        destroy() {
            this.notifyPlugins('beforeDestroy');
            const {
                canvas: wc,
                ctx: xc
            } = this;
            this._stop(), this.config.clearCache(), wc && (this.unbindEvents(), (0, e.af)(wc, xc), this.platform.releaseContext(xc), this.canvas = null, this.ctx = null), delete pc[this.id], this.notifyPlugins('afterDestroy');
        }
        toBase64Image(...Pb) {
            return this.canvas.toDataURL(...Pb);
        }
        bindEvents() {
            this.bindUserEvents(), this.options.responsive ? this.bindResponsiveEvents() : this.attached = !0;
        }
        bindUserEvents() {
            const tc = this._listeners,
                uc = this.platform,
                vc = (vc, fc) => {
                    uc.addEventListener(this, vc, fc), tc[vc] = fc;
                },
                wc = (tc, uc, vc) => {
                    tc.offsetX = uc, tc.offsetY = vc, this._eventHandler(tc);
                };
            (0, e.F)(this.options.events, tc => vc(tc, wc));
        }
        bindResponsiveEvents() {
            this._responsiveListeners || (this._responsiveListeners = {});
            const xc = this._responsiveListeners,
                yc = this.platform,
                zc = (zc, wc) => {
                    yc.addEventListener(this, zc, wc), xc[zc] = wc;
                },
                Ac = (zc, Ac) => {
                    xc[zc] && (yc.removeEventListener(this, zc, Ac), delete xc[zc]);
                },
                Bc = (xc, yc) => {
                    this.canvas && this.resize(xc, yc);
                };
            let Cc;
            const Dc = () => {
                Ac('attach', Dc), this.attached = !0, this.resize(), zc('resize', Bc), zc('detach', Cc);
            };
            Cc = () => {
                this.attached = !1, Ac('resize', Bc), this._stop(), this._resize(0, 0), zc('attach', Dc);
            }, yc.isAttached(this.canvas) ? Dc() : Cc();
        }
        unbindEvents() {
            (0, Cc.F)(this._listeners, (xc, yc) => {
                this.platform.removeEventListener(this, yc, xc);
            }), this._listeners = {}, (0, Cc.F)(this._responsiveListeners, (xc, yc) => {
                this.platform.removeEventListener(this, yc, xc);
            }), this._responsiveListeners = void 0;
        }
        updateHoverStyle(Pb, Wb, gc) {
            const tc = gc ? 'set' : 'remove';
            let uc, vc, wc, xc;
            for ('dataset' === Wb && (uc = this.getDatasetMeta(Pb[0].datasetIndex), uc.controller['_' + tc + 'DatasetHoverStyle']()), wc = 0, xc = Pb.length; wc < xc; ++wc) {
                vc = Pb[wc];
                const yc = vc && this.getDatasetMeta(vc.datasetIndex).controller;
                yc && yc[tc + 'HoverStyle'](vc.element, vc.datasetIndex, vc.index);
            }
        }
        getActiveElements() {
            return this._active || [];
        }
        setActiveElements(Pb) {
            const tc = this._active || [],
                uc = Pb.map(({
                    datasetIndex: vc,
                    index: wc
                }) => {
                    const xc = this.getDatasetMeta(vc);
                    if (!xc)
                        throw new Error('No dataset found at index ' + vc);
                    return {
                        datasetIndex: vc,
                        element: xc.data[wc],
                        index: wc
                    };
                });
            !(0, e.ah)(uc, wc) && (this._active = uc, this._lastEvent = null, this._updateHoverStyles(uc, wc));
        }
        notifyPlugins(Pb, Wb, gc) {
            return this._plugins.notify(this, Pb, Wb, gc);
        }
        isPluginEnabled(Pb) {
            return 1 === this._plugins._cache.filter(Wb => Wb.plugin.id === Pb).length;
        }
        _updateHoverStyles(Pb, Wb, gc) {
            const tc = this.options.hover,
                uc = (Pb, Wb) => Pb.filter(Pb => !Wb.some(Wb => Pb.datasetIndex === Wb.datasetIndex && Pb.index === Wb.index)),
                vc = uc(Wb, Pb),
                wc = gc ? Pb : uc(Pb, Wb);
            vc.length && this.updateHoverStyle(vc, tc.mode, !1), wc.length && tc.mode && this.updateHoverStyle(wc, tc.mode, !0);
        }
        _eventHandler(Pb, Wb) {
            const tc = {
                    event: Pb,
                    replay: Wb,
                    cancelable: !0,
                    inChartArea: this.isPointInArea(Pb)
                },
                uc = Wb => (Wb.options.events || this.options.events).includes(Pb.native.type);
            if (!1 === this.notifyPlugins('beforeEvent', tc, uc))
                return;
            const vc = this._handleEvent(Pb, Wb, tc.inChartArea);
            return tc.cancelable = !1, this.notifyPlugins('afterEvent', tc, uc), (vc || tc.changed) && this.render(), this;
        }
        _handleEvent(Pb, Wb, gc) {
            const {
                _active: tc = [],
                options: uc
            } = this, vc = wc, xc = this._getActiveElements(Pb, tc, gc, vc), yc = (0, e.ai)(Pb), zc = function(Pb, wc, gc, tc) {
                return gc && 'mouseout' !== Pb.type ? tc ? wc : Pb : null;
            }(Pb, this._lastEvent, gc, yc);
            gc && (this._lastEvent = null, (0, e.Q)(uc.onHover, [
                Pb,
                xc,
                this
            ], this), yc && (0, e.Q)(uc.onClick, [
                Pb,
                xc,
                this
            ], this));
            const Ac = !(0, e.ah)(xc, tc);
            return (Ac || wc) && (this._active = xc, this._updateHoverStyles(xc, tc, wc)), this._lastEvent = zc, Ac;
        }
        _getActiveElements(Pb, Wb, gc, fc) {
            if ('mouseout' === Pb.type)
                return [];
            if (!gc)
                return Wb;
            const tc = this.options.hover;
            return this.getElementsAtEventForMode(Pb, tc.mode, tc, fc);
        }
        constructor(Pb, Wb) {
            const tc = this.config = new ec(Wb),
                uc = oc(Pb),
                vc = qc(uc);
            if (vc)
                throw new Error('Canvas is already in use. Chart with ID \'' + vc.id + '\' must be destroyed before the canvas with ID \'' + vc.canvas.id + '\' can be reused.');
            const wc = tc.createResolver(tc.chartOptionScopes(), this.getContext());
            this.platform = new(tc.platform || (function(Pb) {
                return !(0, e.M)() || 'undefined' != typeof OffscreenCanvas && Pb instanceof OffscreenCanvas ? pb : Eb;
            }(uc)))(), this.platform.updateConfig(tc);
            const xc = this.platform.acquireContext(uc, wc.aspectRatio),
                yc = xc && xc.canvas,
                zc = yc && yc.height,
                Ac = yc && yc.width;
            this.id = (0, e.ac)(), this.ctx = xc, this.canvas = yc, this.width = Ac, this.height = zc, this._options = wc, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new Tb(), this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = (0, e.ad)(Pb => this.update(Pb), wc.resizeDelay || 0), this._dataChanges = [], pc[this.id] = this, xc && yc ? (h.listen(this, 'complete', mc), h.listen(this, 'progress', nc), this._initialize(), this.attached && this.update()) : console.error('Failed to create chart: can\'t acquire context from the given item');
        }
    }

    function tc() {
        return (0, e.F)(sc.instances, Pb => Pb._plugins.invalidate());
    }

    function uc(Pb, Wb, gc, fc) {
        const vc = (f = Pb.options.borderRadius, (0, e.ak)(f, [
            'outerStart',
            'outerEnd',
            'innerStart',
            'innerEnd'
        ]));
        var wc;
        const xc = (gc - Wb) / 2,
            yc = Math.min(xc, fc * Wb / 2),
            zc = Pb => {
                const Ac = (gc - Math.min(xc, Pb)) * fc / 2;
                return (0, e.S)(Pb, 0, Math.min(xc, Ac));
            };
        return {
            outerStart: zc(vc.outerStart),
            outerEnd: zc(vc.outerEnd),
            innerStart: (0, e.S)(vc.innerStart, 0, yc),
            innerEnd: (0, e.S)(vc.innerEnd, 0, yc)
        };
    }

    function vc(Pb, Wb, gc, fc) {
        return {
            x: gc + Pb * Math.cos(Wb),
            y: fc + Pb * Math.sin(Wb)
        };
    }

    function wc(Pb, Wb, gc, fc, d, f) {
        const {
            x: xc,
            y: yc,
            startAngle: zc,
            pixelMargin: Ac,
            innerRadius: Bc
        } = Cc, Dc = Math.max(Cc.outerRadius + fc + gc - Ac, 0), Ec = Bc > 0 ? Bc + fc + gc + Ac : 0;
        let Fc = 0;
        const Gc = d - zc;
        if (fc) {
            const Hc = ((Bc > 0 ? Bc - fc : 0) + (Dc > 0 ? Dc - fc : 0)) / 2;
            Fc = (Gc - (0 !== Hc ? Gc * Hc / (Hc + fc) : Gc)) / 2;
        }
        const Hc = (Gc - Math.max(0.001, Gc * Dc - gc / e.P) / Dc) / 2,
            Ic = zc + Hc + Fc,
            Jc = d - Hc - Fc,
            {
                outerStart: Kc,
                outerEnd: Lc,
                innerStart: Mc,
                innerEnd: Nc
            } = uc(Cc, Ec, Dc, Jc - Ic),
            Oc = Dc - Kc,
            Pc = Dc - Lc,
            Qc = Ic + Kc / Oc,
            Rc = Jc - Lc / Pc,
            Sc = Ec + Mc,
            Tc = Ec + Nc,
            Uc = Ic + Mc / Sc,
            Vc = Jc - Nc / Tc;
        if (Pb.beginPath(), f) {
            const Wc = (Qc + Rc) / 2;
            if (Pb.arc(xc, yc, Dc, Qc, Wc), Pb.arc(xc, yc, Dc, Wc, Rc), Lc > 0) {
                const Xc = vc(Pc, Rc, xc, yc);
                Pb.arc(Xc.x, Xc.y, Lc, Rc, Jc + e.H);
            }
            const Xc = vc(Tc, Jc, xc, yc);
            if (Pb.lineTo(Xc.x, Xc.y), Nc > 0) {
                const Yc = vc(Tc, Vc, xc, yc);
                Pb.arc(Yc.x, Yc.y, Nc, Jc + e.H, Vc + Math.PI);
            }
            const Yc = (Jc - Nc / Ec + (Ic + Mc / Ec)) / 2;
            if (Pb.arc(xc, yc, Ec, Jc - Nc / Ec, Yc, !0), Pb.arc(xc, yc, Ec, Yc, Ic + Mc / Ec, !0), Mc > 0) {
                const Zc = vc(Sc, Uc, xc, yc);
                Pb.arc(Zc.x, Zc.y, Mc, Uc + Math.PI, Ic - e.H);
            }
            const Zc = vc(Oc, Ic, xc, yc);
            if (Pb.lineTo(Zc.x, Zc.y), Kc > 0) {
                const $c = vc(Oc, Qc, xc, yc);
                Pb.arc($c.x, $c.y, Kc, Ic - e.H, Qc);
            }
        } else {
            Pb.moveTo(xc, yc);
            const $c = Math.cos(Qc) * Dc + xc,
                _c = Math.sin(Qc) * Dc + yc;
            Pb.lineTo($c, _c);
            const ad = Math.cos(Rc) * Dc + xc,
                bd = Math.sin(Rc) * Dc + yc;
            Pb.lineTo(ad, bd);
        }
        Pb.closePath();
    }

    function xc(Pb, Wb, gc, fc, d) {
        const {
            fullCircles: yc,
            startAngle: zc,
            circumference: Ac,
            options: Bc
        } = Cc, {
            borderWidth: Dc,
            borderJoinStyle: Ec
        } = Fc, Gc = 'inner' === Fc.borderAlign;
        if (!Dc)
            return;
        Gc ? (Pb.lineWidth = 2 * Dc, Pb.lineJoin = Ec || 'round') : (Pb.lineWidth = Dc, Pb.lineJoin = Ec || 'bevel');
        let Hc = Cc.endAngle;
        if (yc) {
            wc(Pb, Cc, gc, fc, Hc, d);
            for (let Ic = 0; Ic < yc; ++Ic)
                Pb.stroke();
            isNaN(Ac) || (Hc = zc + (Ac % e.T || e.T));
        }
        Gc && function(Pb, Cc, gc) {
            const {
                startAngle: Ic,
                pixelMargin: Jc,
                x: Kc,
                y: Lc,
                outerRadius: Mc,
                innerRadius: Nc
            } = Oc;
            let Pc = Jc / Mc;
            Pb.beginPath(), Pb.arc(Kc, Lc, Mc, Ic - Pc, gc + Pc), Nc > Jc ? (Pc = Jc / Nc, Pb.arc(Kc, Lc, Nc, gc + Pc, Ic - Pc, !0)) : Pb.arc(Kc, Lc, Jc, gc + e.H, Ic - e.H), Pb.closePath(), Pb.clip();
        }(Pb, Cc, Hc), yc || (wc(Pb, Cc, gc, fc, Hc, d), Pb.stroke());
    }
    (0, d.default)(sc, 'defaults', e.d), (0, d.default)(sc, 'instances', pc), (0, d.default)(sc, 'overrides', e.a3), (0, d.default)(sc, 'registry', Sb), (0, d.default)(sc, 'version', '4.2.0'), (0, d.default)(sc, 'getChart', qc);
    class yc extends Fb {
        inRange(Pb, Wb, gc) {
            const zc = this.getProps([
                    'x',
                    'y'
                ], gc),
                {
                    angle: Ac,
                    distance: Bc
                } = (0, e.D)(zc, {
                    x: Pb,
                    y: Wb
                }),
                {
                    startAngle: Cc,
                    endAngle: Dc,
                    innerRadius: Ec,
                    outerRadius: Fc,
                    circumference: Gc
                } = this.getProps([
                    'startAngle',
                    'endAngle',
                    'innerRadius',
                    'outerRadius',
                    'circumference'
                ], gc),
                Hc = this.options.spacing / 2,
                Ic = (0, e.v)(Gc, Dc - Cc) >= e.T || (0, e.p)(Ac, Cc, Dc),
                Jc = (0, e.aj)(Bc, Ec + Hc, Fc + Hc);
            return Ic && Jc;
        }
        getCenterPoint(Pb) {
            const {
                x: zc,
                y: Ac,
                startAngle: Bc,
                endAngle: Cc,
                innerRadius: Dc,
                outerRadius: Ec
            } = this.getProps([
                'x',
                'y',
                'startAngle',
                'endAngle',
                'innerRadius',
                'outerRadius',
                'circumference'
            ], Pb), {
                offset: Fc,
                spacing: Gc
            } = this.options, Hc = (Bc + Cc) / 2, Ic = (Dc + Ec + Gc + Fc) / 2;
            return {
                x: zc + Math.cos(Hc) * Ic,
                y: Ac + Math.sin(Hc) * Ic
            };
        }
        tooltipPosition(Pb) {
            return this.getCenterPoint(Pb);
        }
        draw(Pb) {
            const {
                options: zc,
                circumference: Ac
            } = this, Bc = (zc.offset || 0) / 4, Cc = (zc.spacing || 0) / 2, Dc = zc.circular;
            if (this.pixelMargin = 'inner' === zc.borderAlign ? 0.33 : 0, this.fullCircles = Ac > e.T ? Math.floor(Ac / e.T) : 0, 0 === Ac || this.innerRadius < 0 || this.outerRadius < 0)
                return;
            Pb.save();
            const Ec = (this.startAngle + this.endAngle) / 2;
            Pb.translate(Math.cos(Ec) * Bc, Math.sin(Ec) * Bc);
            const Fc = Bc * (1 - Math.sin(Math.min(e.P, Ac || 0)));
            Pb.fillStyle = zc.backgroundColor, Pb.strokeStyle = zc.borderColor,
                function(Pb, zc, Ac, Bc, Cc) {
                    const {
                        fullCircles: Gc,
                        startAngle: Hc,
                        circumference: Ic
                    } = Jc;
                    let Kc = Jc.endAngle;
                    if (Gc) {
                        wc(Pb, Jc, Ac, Bc, Kc, Cc);
                        for (let Lc = 0; Lc < Gc; ++Lc)
                            Pb.fill();
                        isNaN(Ic) || (Kc = Hc + (Ic % e.T || e.T));
                    }
                    wc(Pb, Jc, Ac, Bc, Kc, Cc), Pb.fill();
                }(Pb, this, Fc, Cc, Dc), xc(Pb, this, Fc, Cc, Dc), Pb.restore();
        }
        constructor(Pb) {
            super(), this.options = void 0, this.circumference = void 0, this.startAngle = void 0, this.endAngle = void 0, this.innerRadius = void 0, this.outerRadius = void 0, this.pixelMargin = 0, this.fullCircles = 0, Pb && Object.assign(this, Pb);
        }
    }

    function zc(Pb, Wb, Ac = Bc) {
        Pb.lineCap = (0, e.v)(Ac.borderCapStyle, Bc.borderCapStyle), Pb.setLineDash((0, e.v)(Ac.borderDash, Bc.borderDash)), Pb.lineDashOffset = (0, e.v)(Ac.borderDashOffset, Bc.borderDashOffset), Pb.lineJoin = (0, e.v)(Ac.borderJoinStyle, Bc.borderJoinStyle), Pb.lineWidth = (0, e.v)(Ac.borderWidth, Bc.borderWidth), Pb.strokeStyle = (0, e.v)(Ac.borderColor, Bc.borderColor);
    }

    function Cc(Pb, Bc, Ac) {
        Pb.lineTo(Ac.x, Ac.y);
    }

    function Dc(Pb, Bc, Ec = {}) {
        const Fc = Pb.length,
            {
                start: Gc = 0,
                end: Hc = Fc - 1
            } = Ic,
            {
                start: Jc,
                end: Kc
            } = Lc,
            Mc = Math.max(Gc, Jc),
            Nc = Math.min(Hc, Kc),
            Oc = Gc < Jc && Hc < Jc || Gc > Kc && Hc > Kc;
        return {
            count: Fc,
            start: Mc,
            loop: Lc.loop,
            ilen: Nc < Mc && !Oc ? Fc + Nc - Mc : Nc - Mc
        };
    }

    function Fc(Pb, Bc, Ec, fc) {
        const {
            points: Gc,
            options: Hc
        } = Ic, {
            count: Jc,
            start: Kc,
            loop: Lc,
            ilen: Mc
        } = Dc(Gc, Ec, fc), Nc = function(Pb) {
            return Pb.stepped ? e.ar : Pb.tension || 'monotone' === Pb.cubicInterpolationMode ? e.as : Cc;
        }(Hc);
        let Oc, Pc, Qc, {
            move: Rc = !0,
            reverse: Sc
        } = fc || {};
        for (Oc = 0; Oc <= Mc; ++Oc)
            Pc = Gc[(Kc + (Sc ? Mc - Oc : Oc)) % Jc], Pc.skip || (Rc ? (Pb.moveTo(Pc.x, Pc.y), Rc = !1) : Nc(Pb, Qc, Pc, Sc, Hc.stepped), Qc = Pc);
        return Lc && (Pc = Gc[(Kc + (Sc ? Mc : 0)) % Jc], Nc(Pb, Qc, Pc, Sc, Hc.stepped)), !!Lc;
    }

    function Gc(Pb, Bc, Ec, fc) {
        const Hc = Bc.points,
            {
                count: Ic,
                start: Jc,
                ilen: Kc
            } = Dc(Hc, Ec, fc),
            {
                move: Lc = !0,
                reverse: Mc
            } = fc || {};
        let Nc, Oc, Pc, Qc, Rc, Sc, Tc = 0,
            Uc = 0;
        const Vc = Pb => (Jc + (Mc ? Kc - Pb : Pb)) % Ic,
            Wc = () => {
                Qc !== Rc && (Pb.lineTo(Tc, Rc), Pb.lineTo(Tc, Qc), Pb.lineTo(Tc, Sc));
            };
        for (Lc && (Oc = Hc[Vc(0)], Pb.moveTo(Oc.x, Oc.y)), Nc = 0; Nc <= Kc; ++Nc) {
            if (Oc = Hc[Vc(Nc)], Oc.skip)
                continue;
            const Xc = Oc.x,
                Yc = Oc.y,
                Zc = 0 | Xc;
            Zc === Pc ? (Yc < Qc ? Qc = Yc : Yc > Rc && (Rc = Yc), Tc = (Uc * Tc + Xc) / ++Uc) : (Wc(), Pb.lineTo(Xc, Yc), Pc = Zc, Uc = 0, Qc = Rc = Yc), Sc = Yc;
        }
        Wc();
    }

    function Hc(Pb) {
        const Ic = Pb.options,
            Jc = Ic.borderDash && Ic.borderDash.length;
        return !(Pb._decimated || Pb._loop || Ic.tension || 'monotone' === Ic.cubicInterpolationMode || Ic.stepped || Jc) ? Gc : Fc;
    }
    (0, d.default)(yc, 'id', 'arc'), (0, d.default)(yc, 'defaults', {
        borderAlign: 'center',
        borderColor: '#fff',
        borderJoinStyle: void 0,
        borderRadius: 0,
        borderWidth: 2,
        offset: 0,
        spacing: 0,
        angle: void 0,
        circular: !0
    }), (0, d.default)(yc, 'defaultRoutes', {
        backgroundColor: 'backgroundColor'
    });
    const Ic = 'function' == typeof Path2D;

    function Jc(Pb, Bc, Ec, fc) {
        Ic && !Bc.options.segment ? function(Pb, Bc, Ec, fc) {
            let Kc = Bc._path;
            Kc || (Kc = Bc._path = new Path2D(), Bc.path(Kc, Ec, fc) && Kc.closePath()), zc(Pb, Bc.options), Pb.stroke(Kc);
        }(Pb, Bc, Ec, fc) : function(Pb, Bc, Ec, fc) {
            const {
                segments: Kc,
                options: Lc
            } = Mc, Nc = Hc(Mc);
            for (const Oc of Kc)
                zc(Pb, Lc, Oc.style), Pb.beginPath(), Nc(Pb, Mc, Oc, {
                    start: Ec,
                    end: Ec + fc - 1
                }) && Pb.closePath(), Pb.stroke();
        }(Pb, Bc, Ec, fc);
    }
    class Kc extends Fb {
        updateControlPoints(Pb, Bc) {
            const Lc = this.options;
            if ((Lc.tension || 'monotone' === Lc.cubicInterpolationMode) && !Lc.stepped && !this._pointsUpdated) {
                const Mc = Lc.spanGaps ? this._loop : this._fullLoop;
                (0, e.al)(this._points, Lc, Pb, Mc, Bc), this._pointsUpdated = !0;
            }
        }
        set points(Pb) {
            this._points = Pb, delete this._segments, delete this._path, this._pointsUpdated = !1;
        }
        get points() {
            return this._points;
        }
        get segments() {
            return this._segments || (this._segments = (0, e.am)(this, this.options.segment));
        }
        first() {
            const Lc = this.segments,
                Mc = this.points;
            return Lc.length && Mc[Lc[0].start];
        }
        last() {
            const Nc = this.segments,
                Oc = this.points,
                Pc = Nc.length;
            return Pc && Oc[Nc[Pc - 1].end];
        }
        interpolate(Pb, Bc) {
            const Lc = this.options,
                Mc = Pb[Bc],
                Nc = this.points,
                Oc = (0, e.an)(this, {
                    property: Bc,
                    start: Mc,
                    end: Mc
                });
            if (!Oc.length)
                return;
            const Pc = [],
                Qc = function(Pb) {
                    return Pb.stepped ? e.ao : Pb.tension || 'monotone' === Pb.cubicInterpolationMode ? e.ap : e.aq;
                }(Lc);
            let Rc, Sc;
            for (Rc = 0, Sc = Oc.length; Rc < Sc; ++Rc) {
                const {
                    start: Tc,
                    end: Uc
                } = Oc[Rc], Vc = Nc[Tc], Wc = Nc[Uc];
                if (Vc === Wc) {
                    Pc.push(Vc);
                    continue;
                }
                const Xc = Qc(Vc, Wc, Math.abs((Mc - Vc[Bc]) / (Wc[Bc] - Vc[Bc])), Lc.stepped);
                Xc[Bc] = Pb[Bc], Pc.push(Xc);
            }
            return 1 === Pc.length ? Pc[0] : Pc;
        }
        pathSegment(Pb, Bc, Ec) {
            return Hc(this)(Pb, this, Bc, Ec);
        }
        path(Pb, Bc, Ec) {
            const Lc = this.segments,
                Mc = Hc(this);
            let Nc = this._loop;
            Bc = Bc || 0, Ec = Ec || this.points.length - Bc;
            for (const Oc of Lc)
                Nc &= Mc(Pb, this, Oc, {
                    start: Bc,
                    end: Bc + Ec - 1
                });
            return !!Nc;
        }
        draw(Pb, Bc, Ec, fc) {
            const Lc = this.options || {};
            (this.points || []).length && Lc.borderWidth && (Pb.save(), Jc(Pb, this, Ec, fc), Pb.restore()), this.animated && (this._pointsUpdated = !1, this._path = void 0);
        }
        constructor(Pb) {
            super(), this.animated = !0, this.options = void 0, this._chart = void 0, this._loop = void 0, this._fullLoop = void 0, this._path = void 0, this._points = void 0, this._segments = void 0, this._decimated = !1, this._pointsUpdated = !1, this._datasetIndex = void 0, Pb && Object.assign(this, Pb);
        }
    }

    function Lc(Pb, Bc, Ec, fc) {
        const Mc = Pb.options,
            {
                [Nc]: Oc
            } = Pb.getProps([Nc], fc);
        return Math.abs(Bc - Oc) < Mc.radius + Mc.hitRadius;
    }
    (0, d.default)(Kc, 'id', 'line'), (0, d.default)(Kc, 'defaults', {
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
    }), (0, d.default)(Kc, 'defaultRoutes', {
        backgroundColor: 'backgroundColor',
        borderColor: 'borderColor'
    }), (0, d.default)(Kc, 'descriptors', {
        _scriptable: !0,
        _indexable: Pb => 'borderDash' !== Pb && 'fill' !== Pb
    });
    class Mc extends Fb {
        inRange(Pb, Bc, Ec) {
            const Nc = this.options,
                {
                    x: Oc,
                    y: Pc
                } = this.getProps([
                    'x',
                    'y'
                ], Ec);
            return Math.pow(Pb - Oc, 2) + Math.pow(Bc - Pc, 2) < Math.pow(Nc.hitRadius + Nc.radius, 2);
        }
        inXRange(Pb, Bc) {
            return Lc(this, Pb, 'x', Bc);
        }
        inYRange(Pb, Bc) {
            return Lc(this, Pb, 'y', Bc);
        }
        getCenterPoint(Pb) {
            const {
                x: Nc,
                y: Oc
            } = this.getProps([
                'x',
                'y'
            ], Pb);
            return {
                x: Nc,
                y: Oc
            };
        }
        size(Pb) {
            let Nc = (Pb = Pb || this.options || {}).radius || 0;
            Nc = Math.max(Nc, Nc && Pb.hoverRadius || 0);
            return 2 * (Nc + (Nc && Pb.borderWidth || 0));
        }
        draw(Pb, Bc) {
            const Nc = this.options;
            this.skip || Nc.radius < 0.1 || !(0, e.C)(this, Bc, this.size(Nc) / 2) || (Pb.strokeStyle = Nc.borderColor, Pb.lineWidth = Nc.borderWidth, Pb.fillStyle = Nc.backgroundColor, (0, e.at)(Pb, Nc, this.x, this.y));
        }
        getRange() {
            const Oc = this.options || {};
            return Oc.radius + Oc.hitRadius;
        }
        constructor(Pb) {
            super(), this.options = void 0, this.parsed = void 0, this.skip = void 0, this.stop = void 0, Pb && Object.assign(this, Pb);
        }
    }

    function Nc(Pb, Bc) {
        const {
            x: Oc,
            y: Pc,
            base: Qc,
            width: Rc,
            height: Sc
        } = Pb.getProps([
            'x',
            'y',
            'base',
            'width',
            'height'
        ], Bc);
        let Tc, Uc, Vc, Wc, Xc;
        return Pb.horizontal ? (Xc = Sc / 2, Tc = Math.min(Oc, Qc), Uc = Math.max(Oc, Qc), Vc = Pc - Xc, Wc = Pc + Xc) : (Xc = Rc / 2, Tc = Oc - Xc, Uc = Oc + Xc, Vc = Math.min(Pc, Qc), Wc = Math.max(Pc, Qc)), {
            left: Tc,
            top: Vc,
            right: Uc,
            bottom: Wc
        };
    }

    function Oc(Pb, Bc, Ec, fc) {
        return Pb ? 0 : (0, e.S)(Bc, Ec, fc);
    }

    function Pc(Pb) {
        const Qc = Nc(Pb),
            Rc = Qc.right - Qc.left,
            Sc = Qc.bottom - Qc.top,
            Tc = function(Pb, Qc, Rc) {
                const Uc = Pb.options.borderWidth,
                    Vc = Pb.borderSkipped,
                    Wc = (0, e.av)(Uc);
                return {
                    t: Oc(Vc.top, Wc.top, 0, Rc),
                    r: Oc(Vc.right, Wc.right, 0, Qc),
                    b: Oc(Vc.bottom, Wc.bottom, 0, Rc),
                    l: Oc(Vc.left, Wc.left, 0, Qc)
                };
            }(Pb, Rc / 2, Sc / 2),
            Uc = function(Pb, Qc, Rc) {
                const {
                    enableBorderRadius: Vc
                } = Pb.getProps(['enableBorderRadius']), Wc = Pb.options.borderRadius, Xc = (0, e.aw)(Wc), Yc = Math.min(Qc, Rc), Zc = Pb.borderSkipped, $c = Vc || (0, e.i)(Wc);
                return {
                    topLeft: Oc(!$c || Zc.top || Zc.left, Xc.topLeft, 0, Yc),
                    topRight: Oc(!$c || Zc.top || Zc.right, Xc.topRight, 0, Yc),
                    bottomLeft: Oc(!$c || Zc.bottom || Zc.left, Xc.bottomLeft, 0, Yc),
                    bottomRight: Oc(!$c || Zc.bottom || Zc.right, Xc.bottomRight, 0, Yc)
                };
            }(Pb, Rc / 2, Sc / 2);
        return {
            outer: {
                x: Qc.left,
                y: Qc.top,
                w: Rc,
                h: Sc,
                radius: Uc
            },
            inner: {
                x: Qc.left + Tc.l,
                y: Qc.top + Tc.t,
                w: Rc - Tc.l - Tc.r,
                h: Sc - Tc.t - Tc.b,
                radius: {
                    topLeft: Math.max(0, Uc.topLeft - Math.max(Tc.t, Tc.l)),
                    topRight: Math.max(0, Uc.topRight - Math.max(Tc.t, Tc.r)),
                    bottomLeft: Math.max(0, Uc.bottomLeft - Math.max(Tc.b, Tc.l)),
                    bottomRight: Math.max(0, Uc.bottomRight - Math.max(Tc.b, Tc.r))
                }
            }
        };
    }

    function Qc(Pb, Bc, Ec, fc) {
        const Rc = null === Bc,
            Sc = null === Ec,
            Tc = Pb && !(Rc && Sc) && Nc(Pb, fc);
        return Tc && (Rc || (0, e.aj)(Bc, Tc.left, Tc.right)) && (Sc || (0, e.aj)(Ec, Tc.top, Tc.bottom));
    }

    function Rc(Pb, Bc) {
        Pb.rect(Bc.x, Bc.y, Bc.w, Bc.h);
    }

    function Sc(Pb, Bc, Tc = {}) {
        const Uc = Pb.x !== Tc.x ? -Bc : 0,
            Vc = Pb.y !== Tc.y ? -Bc : 0,
            Wc = (Pb.x + Pb.w !== Tc.x + Tc.w ? Bc : 0) - Uc,
            Xc = (Pb.y + Pb.h !== Tc.y + Tc.h ? Bc : 0) - Vc;
        return {
            x: Pb.x + Uc,
            y: Pb.y + Vc,
            w: Pb.w + Wc,
            h: Pb.h + Xc,
            radius: Pb.radius
        };
    }
    (0, d.default)(Mc, 'id', 'point'), (0, d.default)(Mc, 'defaults', {
        borderWidth: 1,
        hitRadius: 1,
        hoverBorderWidth: 1,
        hoverRadius: 4,
        pointStyle: 'circle',
        radius: 3,
        rotation: 0
    }), (0, d.default)(Mc, 'defaultRoutes', {
        backgroundColor: 'backgroundColor',
        borderColor: 'borderColor'
    });
    class Uc extends Fb {
        draw(Pb) {
            const {
                inflateAmount: Vc,
                options: {
                    borderColor: Wc,
                    backgroundColor: Xc
                }
            } = this, {
                inner: Yc,
                outer: Zc
            } = Pc(this), $c = (i = Zc.radius).topLeft || i.topRight || i.bottomLeft || i.bottomRight ? e.au : Rc;
            var _c;
            Pb.save(), Zc.w === Yc.w && Zc.h === Yc.h || (Pb.beginPath(), $c(Pb, Sc(Zc, Vc, Yc)), Pb.clip(), $c(Pb, Sc(Yc, -Vc, Zc)), Pb.fillStyle = Wc, Pb.fill('evenodd')), Pb.beginPath(), $c(Pb, Sc(Yc, Vc)), Pb.fillStyle = Xc, Pb.fill(), Pb.restore();
        }
        inRange(Pb, Bc, Tc) {
            return Qc(this, Pb, Bc, Tc);
        }
        inXRange(Pb, Bc) {
            return Qc(this, Pb, null, Bc);
        }
        inYRange(Pb, Bc) {
            return Qc(this, null, Pb, Bc);
        }
        getCenterPoint(Pb) {
            const {
                x: Vc,
                y: Wc,
                base: Xc,
                horizontal: Yc
            } = this.getProps([
                'x',
                'y',
                'base',
                'horizontal'
            ], Pb);
            return {
                x: Yc ? (Vc + Xc) / 2 : Vc,
                y: Yc ? Wc : (Wc + Xc) / 2
            };
        }
        getRange(Pb) {
            return 'x' === Pb ? this.width / 2 : this.height / 2;
        }
        constructor(Pb) {
            super(), this.options = void 0, this.horizontal = void 0, this.base = void 0, this.width = void 0, this.height = void 0, this.inflateAmount = void 0, Pb && Object.assign(this, Pb);
        }
    }
    (0, d.default)(Uc, 'id', 'bar'), (0, d.default)(Uc, 'defaults', {
        borderSkipped: 'start',
        borderWidth: 0,
        borderRadius: 0,
        inflateAmount: 'auto',
        pointStyle: void 0
    }), (0, d.default)(Uc, 'defaultRoutes', {
        backgroundColor: 'backgroundColor',
        borderColor: 'borderColor'
    });
    new WeakMap();
    const Vc = {
        average(Pb) {
            if (!Pb.length)
                return !1;
            let Wc, Xc, Yc = 0,
                Zc = 0,
                $c = 0;
            for (Wc = 0, Xc = Pb.length; Wc < Xc; ++Wc) {
                const _c = Pb[Wc].element;
                if (_c && _c.hasValue()) {
                    const ad = _c.tooltipPosition();
                    Yc += ad.x, Zc += ad.y, ++$c;
                }
            }
            return {
                x: Yc / $c,
                y: Zc / $c
            };
        },
        nearest(Pb, Bc) {
            if (!Pb.length)
                return !1;
            let Wc, Xc, Yc, Zc = Bc.x,
                $c = Bc.y,
                _c = Number.POSITIVE_INFINITY;
            for (Wc = 0, Xc = Pb.length; Wc < Xc; ++Wc) {
                const ad = Pb[Wc].element;
                if (ad && ad.hasValue()) {
                    const bd = ad.getCenterPoint(),
                        cd = (0, e.aE)(Bc, bd);
                    cd < _c && (_c = cd, Yc = ad);
                }
            }
            if (Yc) {
                const bd = Yc.tooltipPosition();
                Zc = bd.x, $c = bd.y;
            }
            return {
                x: Zc,
                y: $c
            };
        }
    };

    function Wc(Pb, Bc) {
        return Bc && ((0, e.b)(Bc) ? Array.prototype.push.apply(Pb, Bc) : Pb.push(Bc)), Pb;
    }

    function Xc(Pb) {
        return ('string' == typeof Pb || Pb instanceof String) && Pb.indexOf('\n') > -1 ? Pb.split('\n') : Pb;
    }

    function Yc(Pb, Bc) {
        const {
            element: Zc,
            datasetIndex: $c,
            index: _c
        } = ad, bd = Pb.getDatasetMeta($c).controller, {
            label: cd,
            value: dd
        } = bd.getLabelAndValue(_c);
        return {
            chart: Pb,
            label: cd,
            parsed: bd.getParsed(_c),
            raw: Pb.data.datasets[$c].data[_c],
            formattedValue: dd,
            dataset: bd.getDataset(),
            dataIndex: _c,
            datasetIndex: $c,
            element: Zc
        };
    }

    function Zc(Pb, Bc) {
        const $c = Pb.chart.ctx,
            {
                body: _c,
                footer: ad,
                title: bd
            } = cd,
            {
                boxWidth: dd,
                boxHeight: ed
            } = fd,
            gd = (0, e.a0)(fd.bodyFont),
            hd = (0, e.a0)(fd.titleFont),
            id = (0, e.a0)(fd.footerFont),
            jd = bd.length,
            kd = ad.length,
            ld = _c.length,
            md = (0, e.E)(fd.padding);
        let nd = md.height,
            od = 0,
            pd = _c.reduce((cd, fd) => cd + fd.before.length + fd.lines.length + fd.after.length, 0);
        if (pd += cd.beforeBody.length + cd.afterBody.length, jd && (nd += jd * hd.lineHeight + (jd - 1) * fd.titleSpacing + fd.titleMarginBottom), pd) {
            nd += ld * (fd.displayColors ? Math.max(ed, gd.lineHeight) : gd.lineHeight) + (pd - ld) * gd.lineHeight + (pd - 1) * fd.bodySpacing;
        }
        kd && (nd += fd.footerMarginTop + kd * id.lineHeight + (kd - 1) * fd.footerSpacing);
        let qd = 0;
        const rd = function(cd) {
            od = Math.max(od, $c.measureText(cd).width + qd);
        };
        return $c.save(), $c.font = hd.string, (0, e.F)(cd.title, rd), $c.font = gd.string, (0, e.F)(cd.beforeBody.concat(cd.afterBody), rd), qd = fd.displayColors ? dd + 2 + fd.boxPadding : 0, (0, e.F)(_c, cd => {
            (0, e.F)(cd.before, rd), (0, e.F)(cd.lines, rd), (0, e.F)(cd.after, rd);
        }), qd = 0, $c.font = id.string, (0, e.F)(cd.footer, rd), $c.restore(), od += md.width, {
            width: od,
            height: nd
        };
    }

    function $c(Pb, Bc, Tc, fc) {
        const {
            x: _c,
            width: ad
        } = bd, {
            width: cd,
            chartArea: {
                left: dd,
                right: ed
            }
        } = fd;
        let gd = 'center';
        return 'center' === fc ? gd = _c <= (dd + ed) / 2 ? 'left' : 'right' : _c <= ad / 2 ? gd = 'left' : _c >= cd - ad / 2 && (gd = 'right'),
            function(fd, Bc, bd, fc) {
                const {
                    x: hd,
                    width: id
                } = jd, kd = bd.caretSize + bd.caretPadding;
                return 'left' === fd && hd + id + kd > Bc.width || 'right' === fd && hd - id - kd < 0 || void 0;
            }(gd, fd, Bc, bd) && (gd = 'center'), gd;
    }

    function _c(Pb, Bc, Tc) {
        const ad = Tc.yAlign || Bc.yAlign || function(Pb, Bc) {
            const {
                y: bd,
                height: cd
            } = dd;
            return bd < cd / 2 ? 'top' : bd > Pb.height - cd / 2 ? 'bottom' : 'center';
        }(Pb, Tc);
        return {
            xAlign: Tc.xAlign || Bc.xAlign || $c(Pb, Bc, Tc, ad),
            yAlign: ad
        };
    }

    function ad(Pb, Bc, Tc, fc) {
        const {
            caretSize: bd,
            caretPadding: cd,
            cornerRadius: dd
        } = ed, {
            xAlign: fd,
            yAlign: gd
        } = hd, id = bd + cd, {
            topLeft: jd,
            topRight: kd,
            bottomLeft: ld,
            bottomRight: md
        } = (0, e.aw)(dd);
        let nd = function(ed, Bc) {
            let {
                x: od,
                width: pd
            } = qd;
            return 'right' === Bc ? od -= pd : 'center' === Bc && (od -= pd / 2), od;
        }(Bc, fd);
        const od = function(ed, Bc, hd) {
            let {
                y: pd,
                height: qd
            } = rd;
            return 'top' === Bc ? pd += hd : pd -= 'bottom' === Bc ? qd + hd : qd / 2, pd;
        }(Bc, gd, id);
        return 'center' === gd ? 'left' === fd ? nd += id : 'right' === fd && (nd -= id) : 'left' === fd ? nd -= Math.max(jd, ld) + bd : 'right' === fd && (nd += Math.max(kd, md) + bd), {
            x: (0, e.S)(nd, 0, fc.width - Bc.width),
            y: (0, e.S)(od, 0, fc.height - Bc.height)
        };
    }

    function bd(Pb, Bc, Tc) {
        const cd = (0, e.E)(Tc.padding);
        return 'center' === Bc ? Pb.x + Pb.width / 2 : 'right' === Bc ? Pb.x + Pb.width - cd.right : Pb.x + cd.left;
    }

    function cd(Pb) {
        return Wc([], Xc(Pb));
    }

    function dd(Pb, Bc) {
        const ed = Bc && Bc.dataset && Bc.dataset.tooltip && Bc.dataset.tooltip.callbacks;
        return ed ? Pb.override(ed) : Pb;
    }
    const ed = {
        beforeTitle: e.aF,
        title(Pb) {
            if (Pb.length > 0) {
                const fd = Pb[0],
                    gd = fd.chart.data.labels,
                    hd = gd ? gd.length : 0;
                if (this && this.options && 'dataset' === this.options.mode)
                    return fd.dataset.label || '';
                if (fd.label)
                    return fd.label;
                if (hd > 0 && fd.dataIndex < hd)
                    return gd[fd.dataIndex];
            }
            return '';
        },
        afterTitle: e.aF,
        beforeBody: e.aF,
        beforeLabel: e.aF,
        label(Pb) {
            if (this && this.options && 'dataset' === this.options.mode)
                return Pb.label + ': ' + Pb.formattedValue || Pb.formattedValue;
            let fd = Pb.dataset.label || '';
            fd && (fd += ': ');
            const gd = Pb.formattedValue;
            return (0, e.k)(gd) || (fd += gd), fd;
        },
        labelColor(Pb) {
            const fd = Pb.chart.getDatasetMeta(Pb.datasetIndex).controller.getStyle(Pb.dataIndex);
            return {
                borderColor: fd.borderColor,
                backgroundColor: fd.backgroundColor,
                borderWidth: fd.borderWidth,
                borderDash: fd.borderDash,
                borderDashOffset: fd.borderDashOffset,
                borderRadius: 0
            };
        },
        labelTextColor() {
            return this.options.bodyColor;
        },
        labelPointStyle(Pb) {
            const fd = Pb.chart.getDatasetMeta(Pb.datasetIndex).controller.getStyle(Pb.dataIndex);
            return {
                pointStyle: fd.pointStyle,
                rotation: fd.rotation
            };
        },
        afterLabel: e.aF,
        afterBody: e.aF,
        beforeFooter: e.aF,
        footer: e.aF,
        afterFooter: e.aF
    };

    function fd(Pb, Bc, Tc, fc) {
        const gd = Pb[Bc].call(Tc, fc);
        return void 0 === gd ? ed[Bc].call(Tc, fc) : gd;
    }
    class gd extends Fb {
        initialize(Pb) {
            this.options = Pb, this._cachedAnimations = void 0, this.$context = void 0;
        }
        _resolveAnimations() {
            const hd = this._cachedAnimations;
            if (hd)
                return hd;
            const id = this.chart,
                jd = this.options.setContext(this.getContext()),
                kd = jd.enabled && id.options.animation && jd.animations,
                ld = new l(this.chart, kd);
            return kd._cacheable && (this._cachedAnimations = Object.freeze(ld)), ld;
        }
        getContext() {
            return this.$context || (this.$context = (hd = this.chart.getContext(), id = this, jd = this._tooltipItems, (0, e.j)(hd, {
                tooltip: id,
                tooltipItems: jd,
                type: 'tooltip'
            })));
            var md, nd, od;
        }
        getTitle(Pb, Bc) {
            const {
                callbacks: hd
            } = id, jd = fd(hd, 'beforeTitle', this, Pb), kd = fd(hd, 'title', this, Pb), ld = fd(hd, 'afterTitle', this, Pb);
            let md = [];
            return md = Wc(md, Xc(jd)), md = Wc(md, Xc(kd)), md = Wc(md, Xc(ld)), md;
        }
        getBeforeBody(Pb, Bc) {
            return cd(fd(Bc.callbacks, 'beforeBody', this, Pb));
        }
        getBody(Pb, Bc) {
            const {
                callbacks: hd
            } = id, jd = [];
            return (0, e.F)(Pb, Pb => {
                const kd = {
                        before: [],
                        lines: [],
                        after: []
                    },
                    ld = dd(hd, Pb);
                Wc(kd.before, Xc(fd(ld, 'beforeLabel', this, Pb))), Wc(kd.lines, fd(ld, 'label', this, Pb)), Wc(kd.after, Xc(fd(ld, 'afterLabel', this, Pb))), jd.push(kd);
            }), jd;
        }
        getAfterBody(Pb, Bc) {
            return cd(fd(Bc.callbacks, 'afterBody', this, Pb));
        }
        getFooter(Pb, Bc) {
            const {
                callbacks: hd
            } = id, jd = fd(hd, 'beforeFooter', this, Pb), kd = fd(hd, 'footer', this, Pb), ld = fd(hd, 'afterFooter', this, Pb);
            let md = [];
            return md = Wc(md, Xc(jd)), md = Wc(md, Xc(kd)), md = Wc(md, Xc(ld)), md;
        }
        _createItems(Pb) {
            const hd = this._active,
                id = this.chart.data,
                jd = [],
                kd = [],
                ld = [];
            let md, nd, od = [];
            for (md = 0, nd = hd.length; md < nd; ++md)
                od.push(Yc(this.chart, hd[md]));
            return Pb.filter && (od = od.filter((hd, jd, kd) => Pb.filter(hd, jd, kd, id))), Pb.itemSort && (od = od.sort((hd, jd) => Pb.itemSort(hd, jd, id))), (0, e.F)(od, hd => {
                const pd = dd(Pb.callbacks, hd);
                jd.push(fd(pd, 'labelColor', this, hd)), kd.push(fd(pd, 'labelPointStyle', this, hd)), ld.push(fd(pd, 'labelTextColor', this, hd));
            }), this.labelColors = jd, this.labelPointStyles = kd, this.labelTextColors = ld, this.dataPoints = od, od;
        }
        update(Pb, Bc) {
            const hd = this.options.setContext(this.getContext()),
                id = this._active;
            let jd, kd = [];
            if (id.length) {
                const ld = Vc[hd.position].call(this, id, this._eventPosition);
                kd = this._createItems(hd), this.title = this.getTitle(kd, hd), this.beforeBody = this.getBeforeBody(kd, hd), this.body = this.getBody(kd, hd), this.afterBody = this.getAfterBody(kd, hd), this.footer = this.getFooter(kd, hd);
                const md = this._size = Zc(this, hd),
                    nd = Object.assign({}, ld, md),
                    od = _c(this.chart, hd, nd),
                    pd = ad(hd, nd, od, this.chart);
                this.xAlign = od.xAlign, this.yAlign = od.yAlign, jd = {
                    opacity: 1,
                    x: pd.x,
                    y: pd.y,
                    width: md.width,
                    height: md.height,
                    caretX: ld.x,
                    caretY: ld.y
                };
            } else
                0 !== this.opacity && (jd = {
                    opacity: 0
                });
            this._tooltipItems = kd, this.$context = void 0, jd && this._resolveAnimations().update(this, jd), Pb && hd.external && hd.external.call(this, {
                chart: this.chart,
                tooltip: this,
                replay: Bc
            });
        }
        drawCaret(Pb, Bc, Tc, fc) {
            const hd = this.getCaretPosition(Pb, Tc, fc);
            Bc.lineTo(hd.x1, hd.y1), Bc.lineTo(hd.x2, hd.y2), Bc.lineTo(hd.x3, hd.y3);
        }
        getCaretPosition(Pb, Bc, Tc) {
            const {
                xAlign: hd,
                yAlign: id
            } = this, {
                caretSize: jd,
                cornerRadius: kd
            } = ld, {
                topLeft: md,
                topRight: nd,
                bottomLeft: od,
                bottomRight: pd
            } = (0, e.aw)(kd), {
                x: qd,
                y: rd
            } = sd, {
                width: td,
                height: ud
            } = vd;
            let wd, xd, yd, zd, Ad, Bd;
            return 'center' === id ? (Ad = rd + ud / 2, 'left' === hd ? (wd = qd, xd = wd - jd, zd = Ad + jd, Bd = Ad - jd) : (wd = qd + td, xd = wd + jd, zd = Ad - jd, Bd = Ad + jd), yd = wd) : (xd = 'left' === hd ? qd + Math.max(md, od) + jd : 'right' === hd ? qd + td - Math.max(nd, pd) - jd : this.caretX, 'top' === id ? (zd = rd, Ad = zd - jd, wd = xd - jd, yd = xd + jd) : (zd = rd + ud, Ad = zd + jd, wd = xd + jd, yd = xd - jd), Bd = zd), {
                x1: wd,
                x2: xd,
                x3: yd,
                y1: zd,
                y2: Ad,
                y3: Bd
            };
        }
        drawTitle(Pb, Bc, Tc) {
            const hd = this.title,
                id = hd.length;
            let jd, kd, ld;
            if (id) {
                const md = (0, e.az)(Tc.rtl, this.x, this.width);
                for (Pb.x = bd(this, Tc.titleAlign, Tc), Bc.textAlign = md.textAlign(Tc.titleAlign), Bc.textBaseline = 'middle', jd = (0, e.a0)(Tc.titleFont), kd = Tc.titleSpacing, Bc.fillStyle = Tc.titleColor, Bc.font = jd.string, ld = 0; ld < id; ++ld)
                    Bc.fillText(hd[ld], md.x(Pb.x), Pb.y + jd.lineHeight / 2), Pb.y += jd.lineHeight + kd, ld + 1 === id && (Pb.y += Tc.titleMarginBottom - kd);
            }
        }
        _drawColorBox(Pb, Bc, Tc, fc, d) {
            const hd = this.labelColors[Tc],
                id = this.labelPointStyles[Tc],
                {
                    boxHeight: jd,
                    boxWidth: kd,
                    boxPadding: ld
                } = md,
                nd = (0, e.a0)(md.bodyFont),
                od = bd(this, 'left', md),
                pd = fc.x(od),
                qd = jd < nd.lineHeight ? (nd.lineHeight - jd) / 2 : 0,
                rd = Bc.y + qd;
            if (md.usePointStyle) {
                const sd = {
                        radius: Math.min(kd, jd) / 2,
                        pointStyle: id.pointStyle,
                        rotation: id.rotation,
                        borderWidth: 1
                    },
                    td = fc.leftForLtr(pd, kd) + kd / 2,
                    ud = rd + jd / 2;
                Pb.strokeStyle = md.multiKeyBackground, Pb.fillStyle = md.multiKeyBackground, (0, e.at)(Pb, sd, td, ud), Pb.strokeStyle = hd.borderColor, Pb.fillStyle = hd.backgroundColor, (0, e.at)(Pb, sd, td, ud);
            } else {
                Pb.lineWidth = (0, e.i)(hd.borderWidth) ? Math.max(...Object.values(hd.borderWidth)) : hd.borderWidth || 1, Pb.strokeStyle = hd.borderColor, Pb.setLineDash(hd.borderDash || []), Pb.lineDashOffset = hd.borderDashOffset || 0;
                const vd = fc.leftForLtr(pd, kd - ud),
                    wd = fc.leftForLtr(fc.xPlus(pd, 1), kd - ud - 2),
                    xd = (0, e.aw)(hd.borderRadius);
                Object.values(xd).some(Pb => 0 !== Pb) ? (Pb.beginPath(), Pb.fillStyle = md.multiKeyBackground, (0, e.au)(Pb, {
                    x: vd,
                    y: rd,
                    w: kd,
                    h: jd,
                    radius: xd
                }), Pb.fill(), Pb.stroke(), Pb.fillStyle = hd.backgroundColor, Pb.beginPath(), (0, e.au)(Pb, {
                    x: wd,
                    y: rd + 1,
                    w: kd - 2,
                    h: jd - 2,
                    radius: xd
                }), Pb.fill()) : (Pb.fillStyle = md.multiKeyBackground, Pb.fillRect(vd, rd, kd, jd), Pb.strokeRect(vd, rd, kd, jd), Pb.fillStyle = hd.backgroundColor, Pb.fillRect(wd, rd + 1, kd - 2, jd - 2));
            }
            Pb.fillStyle = this.labelTextColors[Tc];
        }
        drawBody(Pb, Bc, Tc) {
            const {
                body: hd
            } = this, {
                bodySpacing: id,
                bodyAlign: jd,
                displayColors: kd,
                boxHeight: ld,
                boxWidth: md,
                boxPadding: nd
            } = od, pd = (0, e.a0)(od.bodyFont);
            let qd = pd.lineHeight,
                rd = 0;
            const sd = (0, e.az)(od.rtl, this.x, this.width),
                td = function(od) {
                    Bc.fillText(od, sd.x(Pb.x + rd), Pb.y + qd / 2), Pb.y += qd + id;
                },
                ud = sd.textAlign(jd);
            let vd, wd, xd, yd, zd, Ad, Bd;
            for (Bc.textAlign = jd, Bc.textBaseline = 'middle', Bc.font = pd.string, Pb.x = bd(this, ud, od), Bc.fillStyle = od.bodyColor, (0, e.F)(this.beforeBody, td), rd = kd && 'right' !== ud ? 'center' === jd ? md / 2 + nd : md + 2 + nd : 0, yd = 0, Ad = hd.length; yd < Ad; ++yd) {
                for (vd = hd[yd], wd = this.labelTextColors[yd], Bc.fillStyle = wd, (0, e.F)(vd.before, td), xd = vd.lines, kd && xd.length && (this._drawColorBox(Bc, Pb, yd, sd, od), qd = Math.max(pd.lineHeight, ld)), zd = 0, Bd = xd.length; zd < Bd; ++zd)
                    td(xd[zd]), qd = pd.lineHeight;
                (0, e.F)(vd.after, td);
            }
            rd = 0, qd = pd.lineHeight, (0, e.F)(this.afterBody, td), Pb.y -= id;
        }
        drawFooter(Pb, Bc, Tc) {
            const hd = this.footer,
                id = hd.length;
            let jd, kd;
            if (id) {
                const ld = (0, e.az)(Tc.rtl, this.x, this.width);
                for (Pb.x = bd(this, Tc.footerAlign, Tc), Pb.y += Tc.footerMarginTop, Bc.textAlign = ld.textAlign(Tc.footerAlign), Bc.textBaseline = 'middle', jd = (0, e.a0)(Tc.footerFont), Bc.fillStyle = Tc.footerColor, Bc.font = jd.string, kd = 0; kd < id; ++kd)
                    Bc.fillText(hd[kd], ld.x(Pb.x), Pb.y + jd.lineHeight / 2), Pb.y += jd.lineHeight + Tc.footerSpacing;
            }
        }
        drawBackground(Pb, Bc, Tc, fc) {
            const {
                xAlign: hd,
                yAlign: id
            } = this, {
                x: jd,
                y: kd
            } = ld, {
                width: md,
                height: nd
            } = od, {
                topLeft: pd,
                topRight: qd,
                bottomLeft: rd,
                bottomRight: sd
            } = (0, e.aw)(fc.cornerRadius);
            Bc.fillStyle = fc.backgroundColor, Bc.strokeStyle = fc.borderColor, Bc.lineWidth = fc.borderWidth, Bc.beginPath(), Bc.moveTo(jd + pd, kd), 'top' === id && this.drawCaret(ld, Bc, od, fc), Bc.lineTo(jd + md - qd, kd), Bc.quadraticCurveTo(jd + md, kd, jd + md, kd + qd), 'center' === id && 'right' === hd && this.drawCaret(ld, Bc, od, fc), Bc.lineTo(jd + md, kd + nd - sd), Bc.quadraticCurveTo(jd + md, kd + nd, jd + md - sd, kd + nd), 'bottom' === id && this.drawCaret(ld, Bc, od, fc), Bc.lineTo(jd + rd, kd + nd), Bc.quadraticCurveTo(jd, kd + nd, jd, kd + nd - rd), 'center' === id && 'left' === hd && this.drawCaret(ld, Bc, od, fc), Bc.lineTo(jd, kd + pd), Bc.quadraticCurveTo(jd, kd, jd + pd, kd), Bc.closePath(), Bc.fill(), fc.borderWidth > 0 && Bc.stroke();
        }
        _updateAnimationTarget(Pb) {
            const hd = this.chart,
                id = this.$animations,
                jd = id && id.x,
                kd = id && id.y;
            if (jd || kd) {
                const ld = Vc[Pb.position].call(this, this._active, this._eventPosition);
                if (!ld)
                    return;
                const md = this._size = Zc(this, Pb),
                    nd = Object.assign({}, ld, this._size),
                    od = _c(hd, Pb, nd),
                    pd = ad(Pb, nd, od, hd);
                jd._to === pd.x && kd._to === pd.y || (this.xAlign = od.xAlign, this.yAlign = od.yAlign, this.width = md.width, this.height = md.height, this.caretX = ld.x, this.caretY = ld.y, this._resolveAnimations().update(this, pd));
            }
        }
        _willRender() {
            return !!this.opacity;
        }
        draw(Pb) {
            const hd = this.options.setContext(this.getContext());
            let id = this.opacity;
            if (!id)
                return;
            this._updateAnimationTarget(hd);
            const jd = {
                    width: this.width,
                    height: this.height
                },
                kd = {
                    x: this.x,
                    y: this.y
                };
            id = Math.abs(id) < 0.001 ? 0 : id;
            const ld = (0, e.E)(hd.padding),
                md = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
            hd.enabled && md && (Pb.save(), Pb.globalAlpha = id, this.drawBackground(kd, Pb, jd, hd), (0, e.aA)(Pb, hd.textDirection), kd.y += ld.top, this.drawTitle(kd, Pb, hd), this.drawBody(kd, Pb, hd), this.drawFooter(kd, Pb, hd), (0, e.aC)(Pb, hd.textDirection), Pb.restore());
        }
        getActiveElements() {
            return this._active || [];
        }
        setActiveElements(Pb, Bc) {
            const hd = this._active,
                id = Pb.map(({
                    datasetIndex: jd,
                    index: kd
                }) => {
                    const ld = this.chart.getDatasetMeta(jd);
                    if (!ld)
                        throw new Error('Cannot find a dataset at index ' + jd);
                    return {
                        datasetIndex: jd,
                        element: ld.data[kd],
                        index: kd
                    };
                }),
                ld = !(0, e.ah)(hd, id),
                md = this._positionChanged(id, kd);
            (ld || md) && (this._active = id, this._eventPosition = kd, this._ignoreReplayEvents = !0, this.update(!0));
        }
        handleEvent(Pb, Bc, hd = !0) {
            if (Bc && this._ignoreReplayEvents)
                return !1;
            this._ignoreReplayEvents = !1;
            const id = this.options,
                jd = this._active || [],
                kd = this._getActiveElements(Pb, jd, Bc, hd),
                ld = this._positionChanged(kd, Pb),
                md = Bc || !(0, e.ah)(kd, jd) || ld;
            return md && (this._active = kd, (id.enabled || id.external) && (this._eventPosition = {
                x: Pb.x,
                y: Pb.y
            }, this.update(!0, Bc))), md;
        }
        _getActiveElements(Pb, Bc, hd, fc) {
            const id = this.options;
            if ('mouseout' === Pb.type)
                return [];
            if (!fc)
                return Bc;
            const jd = this.chart.getElementsAtEventForMode(Pb, id.mode, id, hd);
            return id.reverse && jd.reverse(), jd;
        }
        _positionChanged(Pb, Bc) {
            const {
                caretX: id,
                caretY: jd,
                options: kd
            } = this, ld = Vc[kd.position].call(this, Pb, Bc);
            return !1 !== ld && (id !== ld.x || jd !== ld.y);
        }
        constructor(Pb) {
            super(), this.opacity = 0, this._active = [], this._eventPosition = void 0, this._size = void 0, this._cachedAnimations = void 0, this._tooltipItems = [], this.$animations = void 0, this.$context = void 0, this.chart = Pb.chart, this.options = Pb.options, this.dataPoints = void 0, this.title = void 0, this.beforeBody = void 0, this.body = void 0, this.afterBody = void 0, this.footer = void 0, this.xAlign = void 0, this.yAlign = void 0, this.x = void 0, this.y = void 0, this.height = void 0, this.width = void 0, this.caretX = void 0, this.caretY = void 0, this.labelColors = void 0, this.labelPointStyles = void 0, this.labelTextColors = void 0;
        }
    }
    (0, d.default)(gd, 'positioners', Vc);

    function id(Pb, Bc, hd, fc) {
        const jd = Pb.indexOf(Bc);
        if (-1 === jd)
            return ((Pb, Bc, hd, fc) => ('string' == typeof Bc ? (hd = Pb.push(Bc) - 1, fc.unshift({
                index: hd,
                label: Bc
            })) : isNaN(Bc) && (hd = null), hd))(Pb, Bc, hd, fc);
        return jd !== Pb.lastIndexOf(Bc) ? hd : jd;
    }

    function jd(Pb) {
        const kd = this.getLabels();
        return Pb >= 0 && Pb < kd.length ? kd[Pb] : Pb;
    }
    class kd extends Ob {
        init(Pb) {
            const ld = this._addedLabels;
            if (ld.length) {
                const md = this.getLabels();
                for (const {
                        index: nd,
                        label: od
                    }
                    of ld)
                    md[nd] === od && md.splice(nd, 1);
                this._addedLabels = [];
            }
            super.init(Pb);
        }
        parse(Pb, Bc) {
            if ((0, e.k)(Pb))
                return null;
            const ld = this.getLabels();
            return ((Pb, Bc) => null === Pb ? null : (0, e.S)(Math.round(Pb), 0, Bc))(Bc = isFinite(Bc) && ld[Bc] === Pb ? Bc : id(ld, Pb, (0, e.v)(Bc, Pb), this._addedLabels), ld.length - 1);
        }
        determineDataLimits() {
            const {
                minDefined: md,
                maxDefined: nd
            } = this.getUserBounds();
            let {
                min: od,
                max: pd
            } = this.getMinMax(!0);
            'ticks' === this.options.bounds && (md || (od = 0), nd || (pd = this.getLabels().length - 1)), this.min = od, this.max = pd;
        }
        buildTicks() {
            const qd = this.min,
                rd = this.max,
                sd = this.options.offset,
                td = [];
            let ud = this.getLabels();
            ud = 0 === qd && rd === ud.length - 1 ? ud : ud.slice(qd, rd + 1), this._valueRange = Math.max(ud.length - (sd ? 0 : 1), 1), this._startValue = this.min - (sd ? 0.5 : 0);
            for (let vd = wd; vd <= rd; vd++)
                td.push({
                    value: vd
                });
            return td;
        }
        getLabelForValue(Pb) {
            return jd.call(this, Pb);
        }
        configure() {
            super.configure(), this.isHorizontal() || (this._reversePixels = !this._reversePixels);
        }
        getPixelForValue(Pb) {
            return 'number' != typeof Pb && (Pb = this.parse(Pb)), null === Pb ? NaN : this.getPixelForDecimal((Pb - this._startValue) / this._valueRange);
        }
        getPixelForTick(Pb) {
            const ld = this.ticks;
            return Pb < 0 || Pb > ld.length - 1 ? null : this.getPixelForValue(ld[Pb].value);
        }
        getValueForPixel(Pb) {
            return Math.round(this._startValue + this.getDecimalForPixel(Pb) * this._valueRange);
        }
        getBasePixel() {
            return this.bottom;
        }
        constructor(Pb) {
            super(Pb), this._startValue = void 0, this._valueRange = 0, this._addedLabels = [];
        }
    }

    function ld(Pb, Bc, {
        horizontal: md,
        minRotation: nd
    }) {
        const od = (0, e.t)(nd),
            pd = (md ? Math.sin(od) : Math.cos(od)) || 0.001,
            qd = 0.75 * Bc * ('' + Pb).length;
        return Math.min(Bc / pd, qd);
    }
    (0, d.default)(kd, 'id', 'category'), (0, d.default)(kd, 'defaults', {
        ticks: {
            callback: jd
        }
    });
    class od extends Ob {
        parse(Pb, Bc) {
            return (0, e.k)(Pb) || ('number' == typeof Pb || Pb instanceof Number) && !isFinite(+Pb) ? null : +Pb;
        }
        handleTickRangeOptions() {
            const {
                beginAtZero: pd
            } = this.options, {
                minDefined: qd,
                maxDefined: rd
            } = this.getUserBounds();
            let {
                min: sd,
                max: td
            } = this;
            const ud = pd => sd = qd ? sd : pd,
                vd = pd => td = rd ? td : pd;
            if (pd) {
                const wd = (0, e.s)(sd),
                    xd = (0, e.s)(td);
                wd < 0 && xd < 0 ? vd(0) : wd > 0 && xd > 0 && ud(0);
            }
            if (sd === td) {
                let wd = 0 === td ? 1 : Math.abs(0.05 * td);
                vd(td + wd), pd || ud(sd - wd);
            }
            this.min = sd, this.max = td;
        }
        getTickLimit() {
            const wd = this.options.ticks;
            let xd, {
                maxTicksLimit: yd,
                stepSize: zd
            } = Ad;
            return zd ? (xd = Math.ceil(this.max / zd) - Math.floor(this.min / zd) + 1, xd > 1000 && (console.warn(`scales.${ this.id }.ticks.stepSize: ${ zd } would result generating up to ${ xd } ticks. Limiting to 1000.`), xd = 1000)) : (xd = this.computeTickLimit(), yd = yd || 11), yd && (xd = Math.min(yd, xd)), xd;
        }
        computeTickLimit() {
            return Number.POSITIVE_INFINITY;
        }
        buildTicks() {
            const Bd = this.options,
                Cd = Bd.ticks;
            let Dd = this.getTickLimit();
            Dd = Math.max(2, Dd);
            const Ed = function(Bd, Cd) {
                const Fd = [],
                    {
                        bounds: Gd,
                        step: Hd,
                        min: Id,
                        max: Jd,
                        precision: Kd,
                        count: Ld,
                        maxTicks: Md,
                        maxDigits: Nd,
                        includeBounds: Od
                    } = Pd,
                    Qd = Hd || 1,
                    Rd = Md - 1,
                    {
                        min: Sd,
                        max: Td
                    } = Ud,
                    Vd = !(0, e.k)(Id),
                    Wd = !(0, e.k)(Jd),
                    Xd = !(0, e.k)(Ld),
                    Yd = (Td - Sd) / (Nd + 1);
                let Zd, $d, _d, ae, be = (0, e.aH)((Td - Sd) / Rd / Qd) * Qd;
                if (be < 1e-14 && !Vd && !Wd)
                    return [{
                            value: Sd
                        },
                        {
                            value: Td
                        }
                    ];
                ae = Math.ceil(Td / be) - Math.floor(Sd / be), ae > Rd && (be = (0, e.aH)(ae * be / Rd / Qd) * Qd), (0, e.k)(Kd) || (Zd = Math.pow(10, Kd), be = Math.ceil(be * Zd) / Zd), 'ticks' === Gd ? ($d = Math.floor(Sd / be) * be, _d = Math.ceil(Td / be) * be) : ($d = Sd, _d = Td), Vd && Wd && Hd && (0, e.aI)((Jd - Id) / Hd, be / 1000) ? (ae = Math.round(Math.min((Jd - Id) / be, Md)), be = (Jd - Id) / ae, $d = Id, _d = Jd) : Xd ? ($d = Vd ? Id : $d, _d = Wd ? Jd : _d, ae = Ld - 1, be = (_d - $d) / ae) : (ae = (_d - $d) / be, ae = (0, e.aJ)(ae, Math.round(ae), be / 1000) ? Math.round(ae) : Math.ceil(ae));
                const ce = Math.max((0, e.aK)(be), (0, e.aK)($d));
                Zd = Math.pow(10, (0, e.k)(Kd) ? ce : Kd), $d = Math.round($d * Zd) / Zd, _d = Math.round(_d * Zd) / Zd;
                let de = 0;
                for (Vd && (Od && $d !== Id ? (Fd.push({
                        value: Id
                    }), $d < Id && de++, (0, e.aJ)(Math.round(($d + de * be) * Zd) / Zd, Id, ld(Id, Yd, Pd)) && de++) : $d < Id && de++); de < ae; ++de)
                    Fd.push({
                        value: Math.round(($d + de * be) * Zd) / Zd
                    });
                return Wd && Od && _d !== Jd ? Fd.length && (0, e.aJ)(Fd[Fd.length - 1].value, Jd, ld(Jd, Yd, Pd)) ? Fd[Fd.length - 1].value = Jd : Fd.push({
                    value: Jd
                }) : Wd && _d !== Jd || Fd.push({
                    value: _d
                }), Fd;
            }({
                maxTicks: Dd,
                bounds: Bd.bounds,
                min: Bd.min,
                max: Bd.max,
                precision: Cd.precision,
                step: Cd.stepSize,
                count: Cd.count,
                maxDigits: this._maxDigits(),
                horizontal: this.isHorizontal(),
                minRotation: Cd.minRotation || 0,
                includeBounds: !1 !== Cd.includeBounds
            }, this._range || this);
            return 'ticks' === Bd.bounds && (0, e.aG)(Ed, this, 'value'), Bd.reverse ? (Ed.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), Ed;
        }
        configure() {
            const Fd = this.ticks;
            let Gd = this.min,
                Hd = this.max;
            if (super.configure(), this.options.offset && Fd.length) {
                const Id = (Hd - Gd) / Math.max(Fd.length - 1, 1) / 2;
                Gd -= Id, Hd += Id;
            }
            this._startValue = Gd, this._endValue = Hd, this._valueRange = Hd - Gd;
        }
        getLabelForValue(Pb) {
            return (0, e.o)(Pb, this.chart.options.locale, this.options.ticks.format);
        }
        constructor(Pb) {
            super(Pb), this.start = void 0, this.end = void 0, this._startValue = void 0, this._endValue = void 0, this._valueRange = 0;
        }
    }
    class pd extends od {
        determineDataLimits() {
            const {
                min: qd,
                max: rd
            } = this.getMinMax(!0);
            this.min = (0, e.g)(qd) ? qd : 0, this.max = (0, e.g)(rd) ? rd : 1, this.handleTickRangeOptions();
        }
        computeTickLimit() {
            const sd = this.isHorizontal(),
                td = sd ? this.width : this.height,
                ud = (0, e.t)(this.options.ticks.minRotation),
                vd = (sd ? Math.sin(ud) : Math.cos(ud)) || 0.001,
                wd = this._resolveTickFontOptions(0);
            return Math.ceil(td / Math.min(40, wd.lineHeight / vd));
        }
        getPixelForValue(Pb) {
            return null === Pb ? NaN : this.getPixelForDecimal((Pb - this._startValue) / this._valueRange);
        }
        getValueForPixel(Pb) {
            return this._startValue + this.getDecimalForPixel(Pb) * this._valueRange;
        }
    }
    (0, d.default)(pd, 'id', 'linear'), (0, d.default)(pd, 'defaults', {
        ticks: {
            callback: e.aL.formatters.numeric
        }
    });
    const qd = Pb => Math.floor((0, e.aM)(Pb)),
        rd = (Pb, Bc) => Math.pow(10, qd(Pb) + Bc);

    function sd(Pb) {
        return 1 === Pb / Math.pow(10, qd(Pb));
    }

    function td(Pb, Bc, md) {
        const ud = Math.pow(10, md),
            vd = Math.floor(Pb / ud);
        return Math.ceil(Bc / ud) - vd;
    }

    function ud(Pb, {
        min: vd,
        max: wd
    }) {
        vd = (0, e.O)(Pb.min, vd);
        const xd = [],
            yd = qd(vd);
        let zd = function(Pb, vd) {
                let Ad = qd(vd - Pb);
                for (; td(Pb, vd, Ad) > 10;)
                    Ad++;
                for (; td(Pb, vd, Ad) < 10;)
                    Ad--;
                return Math.min(Ad, qd(Pb));
            }(vd, wd),
            Ad = zd < 0 ? Math.pow(10, Math.abs(zd)) : 1;
        const Bd = Math.pow(10, zd),
            Cd = yd > zd ? Math.pow(10, yd) : 0,
            Dd = Math.round((vd - Cd) * Ad) / Ad,
            Ed = Math.floor((vd - Cd) / Bd / 10) * Bd * 10;
        let Fd = Math.floor((Dd - Ed) / Math.pow(10, zd)),
            Gd = (0, e.O)(Pb.min, Math.round((Cd + Ed + Fd * Math.pow(10, zd)) * Ad) / Ad);
        for (; Gd < wd;)
            xd.push({
                value: Gd,
                major: sd(Gd),
                significand: Fd
            }), Fd >= 10 ? Fd = Fd < 15 ? 15 : 20 : Fd++, Fd >= 20 && (zd++, Fd = 2, Ad = zd >= 0 ? 1 : Ad), Gd = Math.round((Cd + Ed + Fd * Math.pow(10, zd)) * Ad) / Ad;
        const Hd = (0, e.O)(Pb.max, Gd);
        return xd.push({
            value: Hd,
            major: sd(Hd),
            significand: Fd
        }), xd;
    }
    class xd extends Ob {
        parse(Pb, vd) {
            const yd = od.prototype.parse.apply(this, [
                Pb,
                vd
            ]);
            if (0 !== yd)
                return (0, e.g)(yd) && yd > 0 ? yd : null;
            this._zero = !0;
        }
        determineDataLimits() {
            const {
                min: zd,
                max: Ad
            } = this.getMinMax(!0);
            this.min = (0, e.g)(zd) ? Math.max(0, zd) : null, this.max = (0, e.g)(Ad) ? Math.max(0, Ad) : null, this.options.beginAtZero && (this._zero = !0), this._zero && this.min !== this._suggestedMin && !(0, e.g)(this._userMin) && (this.min = zd === rd(this.min, 0) ? rd(this.min, -1) : rd(this.min, 0)), this.handleTickRangeOptions();
        }
        handleTickRangeOptions() {
            const {
                minDefined: Bd,
                maxDefined: Cd
            } = this.getUserBounds();
            let Dd = this.min,
                Ed = this.max;
            const Fd = Cd => Dd = Bd ? Dd : Cd,
                Gd = Bd => Ed = Cd ? Ed : Bd;
            Dd === Ed && (Dd <= 0 ? (Fd(1), Gd(10)) : (Fd(rd(Dd, -1)), Gd(rd(Ed, 1)))), Dd <= 0 && Fd(rd(Ed, -1)), Ed <= 0 && Gd(rd(Dd, 1)), this.min = Dd, this.max = Ed;
        }
        buildTicks() {
            const Hd = this.options,
                Id = ud({
                    min: this._userMin,
                    max: this._userMax
                }, this);
            return 'ticks' === Hd.bounds && (0, Gd.aG)(Id, this, 'value'), Hd.reverse ? (Id.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), Id;
        }
        getLabelForValue(Pb) {
            return void 0 === Pb ? '0' : (0, e.o)(Pb, this.chart.options.locale, this.options.ticks.format);
        }
        configure() {
            const yd = this.min;
            super.configure(), this._startValue = (0, e.aM)(yd), this._valueRange = (0, e.aM)(this.max) - (0, e.aM)(yd);
        }
        getPixelForValue(Pb) {
            return void 0 !== Pb && 0 !== Pb || (Pb = this.min), null === Pb || isNaN(Pb) ? NaN : this.getPixelForDecimal(Pb === this.min ? 0 : ((0, e.aM)(Pb) - this._startValue) / this._valueRange);
        }
        getValueForPixel(Pb) {
            const yd = this.getDecimalForPixel(Pb);
            return Math.pow(10, this._startValue + yd * this._valueRange);
        }
        constructor(Pb) {
            super(Pb), this.start = void 0, this.end = void 0, this._startValue = void 0, this._valueRange = 0;
        }
    }

    function yd(Pb) {
        const zd = Pb.ticks;
        if (zd.display && Pb.display) {
            const Ad = (0, e.E)(zd.backdropPadding);
            return (0, e.v)(zd.font && zd.font.size, e.d.font.size) + Ad.height;
        }
        return 0;
    }

    function zd(Pb, vd, wd, nd, d) {
        return Pb === nd || Pb === d ? {
            start: vd - wd / 2,
            end: vd + wd / 2
        } : Pb < nd || Pb > d ? {
            start: vd - wd,
            end: vd
        } : {
            start: vd,
            end: vd + wd
        };
    }

    function Ad(Pb) {
        const Bd = {
                l: Pb.left + Pb._padding.left,
                r: Pb.right - Pb._padding.right,
                t: Pb.top + Pb._padding.top,
                b: Pb.bottom - Pb._padding.bottom
            },
            Cd = Object.assign({}, Bd),
            Dd = [],
            Ed = [],
            Fd = Pb._pointLabels.length,
            Gd = Pb.options.pointLabels,
            Hd = Gd.centerPointLabels ? e.P / Fd : 0;
        for (let Id = 0; Id < Fd; Id++) {
            const Jd = Gd.setContext(Pb.getPointLabelContext(Id));
            Ed[Id] = Jd.padding;
            const Kd = Pb.getPointPosition(Id, Pb.drawingArea + Ed[Id], Hd),
                Ld = (0, e.a0)(Jd.font),
                Md = (j = Pb.ctx, k = Ld, l = Pb._pointLabels[Id], l = (0, e.b)(l) ? l : [l], {
                    w: (0, e.aN)(j, k.string, l),
                    h: l.length * k.lineHeight
                });
            Dd[Id] = Md;
            const Nd = (0, e.ay)(Pb.getIndexAngle(Id) + Hd),
                Od = Math.round((0, e.U)(Nd));
            Bd(Cd, Bd, Nd, zd(Od, Kd.x, Md.w, 0, 180), zd(Od, Kd.y, Md.h, 90, 270));
        }
        var Jd, Kd, Ld;
        Pb.setCenterPoint(Bd.l - Cd.l, Cd.r - Bd.r, Bd.t - Cd.t, Cd.b - Bd.b), Pb._pointLabelItems = function(Pb, Bd, Cd) {
            const Md = [],
                Nd = Pb._pointLabels.length,
                Od = Pb.options,
                Pd = yd(Od) / 2,
                Qd = Pb.drawingArea,
                Rd = Od.pointLabels.centerPointLabels ? e.P / Nd : 0;
            for (let Sd = 0; Sd < Nd; Sd++) {
                const Td = Pb.getPointPosition(Sd, Qd + Pd + Cd[Sd], Rd),
                    Ud = Math.round((0, e.U)((0, e.ay)(Td.angle + e.H))),
                    Vd = Bd[Sd],
                    Wd = Ed(Td.y, Vd.h, Ud),
                    Xd = Cd(Ud),
                    Yd = Dd(Td.x, Vd.w, Xd);
                Md.push({
                    x: Td.x,
                    y: Wd,
                    textAlign: Xd,
                    left: Yd,
                    top: Wd,
                    right: Yd + Vd.w,
                    bottom: Wd + Vd.h
                });
            }
            return Md;
        }(Pb, Dd, Ed);
    }

    function Bd(Pb, vd, wd, nd, d) {
        const Cd = Math.abs(Math.sin(wd)),
            Dd = Math.abs(Math.cos(wd));
        let Ed = 0,
            Fd = 0;
        nd.start < vd.l ? (Ed = (vd.l - nd.start) / Cd, Pb.l = Math.min(Pb.l, vd.l - Ed)) : nd.end > vd.r && (Ed = (nd.end - vd.r) / Cd, Pb.r = Math.max(Pb.r, vd.r + Ed)), d.start < vd.t ? (Fd = (vd.t - d.start) / Dd, Pb.t = Math.min(Pb.t, vd.t - Fd)) : d.end > vd.b && (Fd = (d.end - vd.b) / Dd, Pb.b = Math.max(Pb.b, vd.b + Fd));
    }

    function Cd(Pb) {
        return 0 === Pb || 180 === Pb ? 'center' : Pb < 180 ? 'left' : 'right';
    }

    function Dd(Pb, vd, wd) {
        return 'right' === wd ? Pb -= vd : 'center' === wd && (Pb -= vd / 2), Pb;
    }

    function Ed(Pb, vd, wd) {
        return 90 === wd || 270 === wd ? Pb -= vd / 2 : (wd > 270 || wd < 90) && (Pb -= vd), Pb;
    }

    function Fd(Pb, vd, wd, nd) {
        const {
            ctx: Gd
        } = Hd;
        if (wd)
            Gd.arc(Hd.xCenter, Hd.yCenter, vd, 0, e.T);
        else {
            let Id = Hd.getPointPosition(0, vd);
            Gd.moveTo(Id.x, Id.y);
            for (let Jd = 1; Jd < nd; Jd++)
                Id = Hd.getPointPosition(Jd, vd), Gd.lineTo(Id.x, Id.y);
        }
    }
    (0, d.default)(xd, 'id', 'logarithmic'), (0, d.default)(xd, 'defaults', {
        ticks: {
            callback: e.aL.formatters.logarithmic,
            major: {
                enabled: !0
            }
        }
    });
    class Gd extends od {
        setDimensions() {
            const Hd = this._padding = (0, e.E)(yd(this.options) / 2),
                Id = this.width = this.maxWidth - Hd.width,
                Jd = this.height = this.maxHeight - Hd.height;
            this.xCenter = Math.floor(this.left + Id / 2 + Hd.left), this.yCenter = Math.floor(this.top + Jd / 2 + Hd.top), this.drawingArea = Math.floor(Math.min(Id, Jd) / 2);
        }
        determineDataLimits() {
            const {
                min: Kd,
                max: Ld
            } = this.getMinMax(!1);
            this.min = (0, e.g)(Kd) && !isNaN(Kd) ? Kd : 0, this.max = (0, e.g)(Ld) && !isNaN(Ld) ? Ld : 0, this.handleTickRangeOptions();
        }
        computeTickLimit() {
            return Math.ceil(this.drawingArea / yd(this.options));
        }
        generateTickLabels(Pb) {
            od.prototype.generateTickLabels.call(this, Pb), this._pointLabels = this.getLabels().map((Pb, vd) => {
                const Hd = (0, e.Q)(this.options.pointLabels.callback, [
                    Pb,
                    vd
                ], this);
                return Hd || 0 === Hd ? Hd : '';
            }).filter((Pb, vd) => this.chart.getDataVisibility(vd));
        }
        fit() {
            const Hd = this.options;
            Hd.display && Hd.pointLabels.display ? Ad(this) : this.setCenterPoint(0, 0, 0, 0);
        }
        setCenterPoint(Pb, vd, wd, nd) {
            this.xCenter += Math.floor((Pb - vd) / 2), this.yCenter += Math.floor((wd - nd) / 2), this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(Pb, vd, wd, nd));
        }
        getIndexAngle(Pb) {
            const Hd = e.T / (this._pointLabels.length || 1),
                Id = this.options.startAngle || 0;
            return (0, e.ay)(Pb * Hd + (0, e.t)(Id));
        }
        getDistanceFromCenterForValue(Pb) {
            if ((0, e.k)(Pb))
                return NaN;
            const Hd = this.drawingArea / (this.max - this.min);
            return this.options.reverse ? (this.max - Pb) * Hd : (Pb - this.min) * Hd;
        }
        getValueForDistanceFromCenter(Pb) {
            if ((0, e.k)(Pb))
                return NaN;
            const Hd = Pb / (this.drawingArea / (this.max - this.min));
            return this.options.reverse ? this.max - Hd : this.min + Hd;
        }
        getPointLabelContext(Pb) {
            const Hd = this._pointLabels || [];
            if (Pb >= 0 && Pb < Hd.length) {
                const Id = Hd[Pb];
                return function(Pb, Hd, Id) {
                    return (0, e.j)(Pb, {
                        label: Id,
                        index: Hd,
                        type: 'pointLabel'
                    });
                }(this.getContext(), Pb, Id);
            }
        }
        getPointPosition(Pb, vd, Hd = 0) {
            const Id = this.getIndexAngle(Pb) - e.H + Hd;
            return {
                x: Math.cos(Id) * vd + this.xCenter,
                y: Math.sin(Id) * vd + this.yCenter,
                angle: Id
            };
        }
        getPointPositionForValue(Pb, vd) {
            return this.getPointPosition(Pb, this.getDistanceFromCenterForValue(vd));
        }
        getBasePosition(Pb) {
            return this.getPointPositionForValue(Pb || 0, this.getBaseValue());
        }
        getPointLabelPosition(Pb) {
            const {
                left: Id,
                top: Jd,
                right: Kd,
                bottom: Ld
            } = this._pointLabelItems[Pb];
            return {
                left: Id,
                top: Jd,
                right: Kd,
                bottom: Ld
            };
        }
        drawBackground() {
            const {
                backgroundColor: Md,
                grid: {
                    circular: Nd
                }
            } = this.options;
            if (Md) {
                const Od = this.ctx;
                Od.save(), Od.beginPath(), Fd(this, this.getDistanceFromCenterForValue(this._endValue), Nd, this._pointLabels.length), Od.closePath(), Od.fillStyle = Md, Od.fill(), Od.restore();
            }
        }
        drawGrid() {
            const Od = this.ctx,
                Pd = this.options,
                {
                    angleLines: Qd,
                    grid: Rd,
                    border: Sd
                } = Td,
                Ud = this._pointLabels.length;
            let Vd, Wd, Xd;
            if (Td.pointLabels.display && function(Od, Td) {
                    const {
                        ctx: Yd,
                        options: {
                            pointLabels: Zd
                        }
                    } = $d;
                    for (let _d = Td - 1; _d >= 0; _d--) {
                        const ae = Zd.setContext($d.getPointLabelContext(_d)),
                            be = (0, e.a0)(ae.font),
                            {
                                x: ce,
                                y: de,
                                textAlign: ee,
                                left: fe,
                                top: ge,
                                right: he,
                                bottom: ie
                            } = $d._pointLabelItems[_d],
                            {
                                backdropColor: je
                            } = ke;
                        if (!(0, e.k)(je)) {
                            const le = (0, e.aw)(ke.borderRadius),
                                me = (0, e.E)(ke.backdropPadding);
                            Yd.fillStyle = je;
                            const ne = fe - me.left,
                                oe = ge - me.top,
                                pe = he - fe + me.width,
                                qe = ie - ge + me.height;
                            Object.values(le).some(le => 0 !== le) ? (Yd.beginPath(), (0, e.au)(Yd, {
                                x: ne,
                                y: oe,
                                w: pe,
                                h: qe,
                                radius: le
                            }), Yd.fill()) : Yd.fillRect(ne, oe, pe, qe);
                        }
                        (0, e.Z)(Yd, $d._pointLabels[_d], ce, de + be.lineHeight / 2, be, {
                            color: ke.color,
                            textAlign: ee,
                            textBaseline: 'middle'
                        });
                    }
                }(this, Ud), Rd.display && this.ticks.forEach((Od, Td) => {
                    if (0 !== Td) {
                        Wd = this.getDistanceFromCenterForValue(Od.value);
                        const Yd = this.getContext(Td),
                            Zd = Rd.setContext(Yd),
                            $d = Sd.setContext(Yd);
                        ! function(Od, Td, Yd, Rd, Sd) {
                            const _d = Od.ctx,
                                ae = Td.circular,
                                {
                                    color: be,
                                    lineWidth: ce
                                } = de;
                            !ae && !Rd || !be || !ce || Yd < 0 || (_d.save(), _d.strokeStyle = be, _d.lineWidth = ce, _d.setLineDash(Sd.dash), _d.lineDashOffset = Sd.dashOffset, _d.beginPath(), Fd(Od, Yd, ae, Rd), _d.closePath(), _d.stroke(), _d.restore());
                        }(this, Zd, Wd, Ud, $d);
                    }
                }), Qd.display) {
                for (Od.save(), Vd = Ud - 1; Vd >= 0; Vd--) {
                    const Yd = Qd.setContext(this.getPointLabelContext(Vd)),
                        {
                            color: Zd,
                            lineWidth: $d
                        } = _d;
                    $d && Zd && (Od.lineWidth = $d, Od.strokeStyle = Zd, Od.setLineDash(_d.borderDash), Od.lineDashOffset = _d.borderDashOffset, Wd = this.getDistanceFromCenterForValue(Td.ticks.reverse ? this.min : this.max), Xd = this.getPointPosition(Vd, Wd), Od.beginPath(), Od.moveTo(this.xCenter, this.yCenter), Od.lineTo(Xd.x, Xd.y), Od.stroke());
                }
                Od.restore();
            }
        }
        drawBorder() {}
        drawLabels() {
            const Yd = this.ctx,
                Zd = this.options,
                $d = Zd.ticks;
            if (!$d.display)
                return;
            const _d = this.getIndexAngle(0);
            let ae, be;
            Yd.save(), Yd.translate(this.xCenter, this.yCenter), Yd.rotate(_d), Yd.textAlign = 'center', Yd.textBaseline = 'middle', this.ticks.forEach((_d, Vd) => {
                if (0 === Vd && !Zd.reverse)
                    return;
                const ce = $d.setContext(this.getContext(Vd)),
                    de = (0, e.a0)(ce.font);
                if (ae = this.getDistanceFromCenterForValue(this.ticks[Vd].value), ce.showLabelBackdrop) {
                    Yd.font = de.string, be = Yd.measureText(_d.label).width, Yd.fillStyle = ce.backdropColor;
                    const ee = (0, e.E)(ce.backdropPadding);
                    Yd.fillRect(-be / 2 - ee.left, -ae - de.size / 2 - ee.top, be + ee.width, de.size + ee.height);
                }
                (0, e.Z)(Yd, _d.label, 0, -ae, de, {
                    color: ce.color
                });
            }), Yd.restore();
        }
        drawTitle() {}
        constructor(Pb) {
            super(Pb), this.xCenter = void 0, this.yCenter = void 0, this.drawingArea = void 0, this._pointLabels = [], this._pointLabelItems = [];
        }
    }
    (0, d.default)(Gd, 'id', 'radialLinear'), (0, d.default)(Gd, 'defaults', {
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
            callback: Pb => Pb,
            padding: 5,
            centerPointLabels: !1
        }
    }), (0, d.default)(Gd, 'defaultRoutes', {
        'angleLines.color': 'borderColor',
        'pointLabels.color': 'color',
        'ticks.color': 'color'
    }), (0, d.default)(Gd, 'descriptors', {
        angleLines: {
            _fallback: 'grid'
        }
    });
    const Id = {
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
        Jd = Object.keys(Id);

    function Kd(Pb, vd) {
        return Pb - vd;
    }

    function Ld(Pb, vd) {
        if ((0, e.k)(vd))
            return null;
        const Md = Pb._adapter,
            {
                parser: Nd,
                round: Od,
                isoWeekday: Pd
            } = Pb._parseOpts;
        let Qd = Rd;
        return 'function' == typeof Nd && (Qd = Nd(Qd)), (0, e.g)(Qd) || (Qd = 'string' == typeof Nd ? Md.parse(Qd, Nd) : Md.parse(Qd)), null === Qd ? null : (Od && (Qd = 'week' !== Od || !(0, e.x)(Pd) && !0 !== Pd ? Md.startOf(Qd, Od) : Md.startOf(Qd, 'isoWeek', Pd)), +Qd);
    }

    function Md(Pb, vd, Hd, nd) {
        const Nd = Jd.length;
        for (let Od = Jd.indexOf(Pb); Od < Nd - 1; ++Od) {
            const Pd = Id[Jd[Od]],
                Qd = Pd.steps ? Pd.steps : Number.MAX_SAFE_INTEGER;
            if (Pd.common && Math.ceil((Hd - vd) / (Qd * Pd.size)) <= nd)
                return Jd[Od];
        }
        return Jd[Nd - 1];
    }

    function Nd(Pb, vd, Hd) {
        if (Hd) {
            if (Hd.length) {
                const {
                    lo: Od,
                    hi: Pd
                } = (0, e.aP)(Hd, vd);
                Pb[Hd[Od] >= vd ? Hd[Od] : Hd[Pd]] = !0;
            }
        } else
            Pb[vd] = !0;
    }

    function Od(Pb, vd, Hd) {
        const Pd = [],
            Qd = {},
            Rd = vd.length;
        let Sd, Td;
        for (Sd = 0; Sd < Rd; ++Sd)
            Td = vd[Sd], Qd[Td] = Sd, Pd.push({
                value: Td,
                major: !1
            });
        return 0 !== Rd && Hd ? function(Pb, vd, Hd, Pd) {
            const Ud = Pb._adapter,
                Vd = +Ud.startOf(vd[0].value, Pd),
                Wd = vd[vd.length - 1].value;
            let Xd, Yd;
            for (Xd = Vd; Xd <= Wd; Xd = +Ud.add(Xd, 1, Pd))
                Yd = Hd[Xd], Yd >= 0 && (vd[Yd].major = !0);
            return vd;
        }(Pb, Pd, Qd, Hd) : Pd;
    }
    class Pd extends Ob {
        init(Pb, Qd = {}) {
            const Rd = Pb.time || (Pb.time = {}),
                Sd = this._adapter = new U(Pb.adapters.date);
            Sd.init(Qd), (0, e.ab)(Rd.displayFormats, Sd.formats()), this._parseOpts = {
                parser: Rd.parser,
                round: Rd.round,
                isoWeekday: Rd.isoWeekday
            }, super.init(Pb), this._normalized = Qd.normalized;
        }
        parse(Pb, Qd) {
            return void 0 === Pb ? null : Ld(this, Pb);
        }
        beforeLayout() {
            super.beforeLayout(), this._cache = {
                data: [],
                labels: [],
                all: []
            };
        }
        determineDataLimits() {
            const Rd = this.options,
                Sd = this._adapter,
                Td = Rd.time.unit || 'day';
            let {
                min: Ud,
                max: Vd,
                minDefined: Wd,
                maxDefined: Xd
            } = this.getUserBounds();

            function Yd(Rd) {
                Wd || isNaN(Rd.min) || (Ud = Math.min(Ud, Rd.min)), Xd || isNaN(Rd.max) || (Vd = Math.max(Vd, Rd.max));
            }
            Wd && Xd || (Yd(this._getLabelBounds()), 'ticks' === Rd.bounds && 'labels' === Rd.ticks.source || Yd(this.getMinMax(!1))), Ud = (0, e.g)(Ud) && !isNaN(Ud) ? Ud : +Sd.startOf(Date.now(), Td), Vd = (0, e.g)(Vd) && !isNaN(Vd) ? Vd : +Sd.endOf(Date.now(), Td) + 1, this.min = Math.min(Ud, Vd - 1), this.max = Math.max(Ud + 1, Vd);
        }
        _getLabelBounds() {
            const Zd = this.getLabelTimestamps();
            let $d = Number.POSITIVE_INFINITY,
                _d = Number.NEGATIVE_INFINITY;
            return Zd.length && ($d = Zd[0], _d = Zd[Zd.length - 1]), {
                min: $d,
                max: _d
            };
        }
        buildTicks() {
            const ae = this.options,
                be = ae.time,
                ce = ae.ticks,
                de = 'labels' === ce.source ? this.getLabelTimestamps() : this._generate();
            'ticks' === ae.bounds && de.length && (this.min = this._userMin || de[0], this.max = this._userMax || de[de.length - 1]);
            const ee = this.min,
                fe = this.max,
                ge = (0, e.aO)(de, ee, fe);
            return this._unit = be.unit || (ce.autoSkip ? Md(be.minUnit, this.min, this.max, this._getLabelCapacity(ee)) : function(ae, be, ce, de, ee) {
                for (let he = Jd.length - 1; he >= Jd.indexOf(ce); he--) {
                    const ie = Jd[he];
                    if (Id[ie].common && ae._adapter.diff(ee, de, ie) >= be - 1)
                        return ie;
                }
                return Jd[ce ? Jd.indexOf(ce) : 0];
            }(this, ge.length, be.minUnit, this.min, this.max)), this._majorUnit = ce.major.enabled && 'year' !== this._unit ? function(ae) {
                for (let he = Jd.indexOf(ae) + 1, ie = Jd.length; he < ie; ++he)
                    if (Id[Jd[he]].common)
                        return Jd[he];
            }(this._unit) : void 0, this.initOffsets(de), ae.reverse && ge.reverse(), Od(this, ge, this._majorUnit);
        }
        afterAutoSkip() {
            this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map(ae => +ae.value));
        }
        initOffsets(Rd = []) {
            let Sd, Td, Ud = 0,
                Vd = 0;
            this.options.offset && Rd.length && (Sd = this.getDecimalForValue(Rd[0]), Ud = 1 === Rd.length ? 1 - Sd : (this.getDecimalForValue(Rd[1]) - Sd) / 2, Td = this.getDecimalForValue(Rd[Rd.length - 1]), Vd = 1 === Rd.length ? Td : (Td - this.getDecimalForValue(Rd[Rd.length - 2])) / 2);
            const Wd = Rd.length < 3 ? 0.5 : 0.25;
            Ud = (0, e.S)(Ud, 0, Wd), Vd = (0, e.S)(Vd, 0, Wd), this._offsets = {
                start: Ud,
                end: Vd,
                factor: 1 / (Ud + 1 + Vd)
            };
        }
        _generate() {
            const Xd = this._adapter,
                Yd = this.min,
                Zd = this.max,
                $d = this.options,
                _d = $d.time,
                ae = _d.unit || Md(_d.minUnit, Yd, Zd, this._getLabelCapacity(Yd)),
                be = (0, e.v)($d.ticks.stepSize, 1),
                ce = 'week' === ae && _d.isoWeekday,
                de = (0, e.x)(ce) || !0 === ce,
                ee = {};
            let fe, ge, he = ie;
            if (de && (he = +Xd.startOf(he, 'isoWeek', ce)), he = +Xd.startOf(he, de ? 'day' : ae), Xd.diff(Zd, ie, ae) > 100000 * be)
                throw new Error(ie + ' and ' + Zd + ' are too far apart with stepSize of ' + be + ' ' + ae);
            const je = 'data' === $d.ticks.source && this.getDataTimestamps();
            for (fe = he, ge = 0; fe < Zd; fe = +Xd.add(fe, be, ae), ge++)
                Nd(ee, fe, je);
            return fe !== Zd && 'ticks' !== $d.bounds && 1 !== ge || Nd(ee, fe, je), Object.keys(ee).sort((Xd, ie) => Xd - ie).map(Xd => +Xd);
        }
        getLabelForValue(Rd) {
            const Sd = this._adapter,
                Td = this.options.time;
            return Td.tooltipFormat ? Sd.format(Rd, Td.tooltipFormat) : Sd.format(Rd, Td.displayFormats.datetime);
        }
        format(Rd, Qd) {
            const Sd = this.options.time.displayFormats,
                Td = this._unit,
                Ud = Qd || Sd[Td];
            return this._adapter.format(Rd, Ud);
        }
        _tickFormatFunction(Rd, Qd, Hd, nd) {
            const Sd = this.options,
                Td = Sd.ticks.callback;
            if (Td)
                return (0, e.Q)(Td, [
                    Rd,
                    Qd,
                    Hd
                ], this);
            const Ud = Sd.time.displayFormats,
                Vd = this._unit,
                Wd = this._majorUnit,
                Xd = Vd && Ud[Vd],
                Yd = Wd && Ud[Wd],
                Zd = Hd[Qd],
                $d = Wd && Yd && Zd && Zd.major;
            return this._adapter.format(Rd, nd || ($d ? Yd : Xd));
        }
        generateTickLabels(Rd) {
            let Sd, Td, Ud;
            for (Sd = 0, Td = Rd.length; Sd < Td; ++Sd)
                Ud = Rd[Sd], Ud.label = this._tickFormatFunction(Ud.value, Sd, Rd);
        }
        getDecimalForValue(Rd) {
            return null === Rd ? NaN : (Rd - this.min) / (this.max - this.min);
        }
        getPixelForValue(Rd) {
            const Sd = this._offsets,
                Td = this.getDecimalForValue(Rd);
            return this.getPixelForDecimal((Sd.start + Td) * Sd.factor);
        }
        getValueForPixel(Rd) {
            const Sd = this._offsets,
                Td = this.getDecimalForPixel(Rd) / Sd.factor - Sd.end;
            return this.min + Td * (this.max - this.min);
        }
        _getLabelSize(Rd) {
            const Sd = this.options.ticks,
                Td = this.ctx.measureText(Rd).width,
                Ud = (0, e.t)(this.isHorizontal() ? Sd.maxRotation : Sd.minRotation),
                Vd = Math.cos(Ud),
                Wd = Math.sin(Ud),
                Xd = this._resolveTickFontOptions(0).size;
            return {
                w: Td * Vd + Xd * Wd,
                h: Td * Wd + Xd * Vd
            };
        }
        _getLabelCapacity(Rd) {
            const Sd = this.options.time,
                Td = Sd.displayFormats,
                Ud = Td[Sd.unit] || Td.millisecond,
                Vd = this._tickFormatFunction(Rd, 0, Od(this, [Rd], this._majorUnit), Ud),
                Wd = this._getLabelSize(Vd),
                Xd = Math.floor(this.isHorizontal() ? this.width / Wd.w : this.height / Wd.h) - 1;
            return Xd > 0 ? Xd : 1;
        }
        getDataTimestamps() {
            let Yd, Zd, $d = this._cache.data || [];
            if ($d.length)
                return $d;
            const _d = this.getMatchingVisibleMetas();
            if (this._normalized && _d.length)
                return this._cache.data = _d[0].controller.getAllParsedValues(this);
            for (Yd = 0, Zd = _d.length; Yd < Zd; ++Yd)
                $d = $d.concat(_d[Yd].controller.getAllParsedValues(this));
            return this._cache.data = this.normalize($d);
        }
        getLabelTimestamps() {
            const ae = this._cache.labels || [];
            let be, ce;
            if (ae.length)
                return ae;
            const de = this.getLabels();
            for (be = 0, ce = de.length; be < ce; ++be)
                ae.push(Ld(this, de[be]));
            return this._cache.labels = this._normalized ? ae : this.normalize(ae);
        }
        normalize(Rd) {
            return (0, e._)(Rd.sort(Kd));
        }
        constructor(Rd) {
            super(Rd), this._cache = {
                data: [],
                labels: [],
                all: []
            }, this._unit = 'day', this._majorUnit = void 0, this._offsets = {}, this._normalized = !1, this._parseOpts = void 0;
        }
    }

    function Sd(Rd, Qd, Hd) {
        let Td, Ud, Vd, Wd, Xd = 0,
            Yd = Rd.length - 1;
        Hd ? (Qd >= Rd[Xd].pos && Qd <= Rd[Yd].pos && ({
            lo: Zd,
            hi: $d
        } = (0, e.B)(Rd, 'pos', Qd)), {
            pos: _d,
            time: ae
        } = Rd[Zd], {
            pos: be,
            time: ce
        } = Rd[$d]) : (Qd >= Rd[Zd].time && Qd <= Rd[$d].time && ({
            lo: de,
            hi: ee
        } = (0, e.B)(Rd, 'time', Qd)), {
            time: fe,
            pos: ge
        } = Rd[de], {
            time: he,
            pos: ie
        } = Rd[ee]);
        const je = he - fe;
        return je ? ge + (ie - ge) * (Qd - fe) / je : ge;
    }
    (0, d.default)(Pd, 'id', 'time'), (0, d.default)(Pd, 'defaults', {
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
    class Td extends Pd {
        initOffsets() {
            const Ud = this._getTimestampsForTable(),
                Vd = this._table = this.buildLookupTable(Ud);
            this._minPos = Sd(Vd, this.min), this._tableRange = Sd(Vd, this.max) - this._minPos, super.initOffsets(Ud);
        }
        buildLookupTable(Rd) {
            const {
                min: Ud,
                max: Vd
            } = this, Wd = [], Xd = [];
            let Yd, Zd, $d, _d, ae;
            for (Yd = 0, Zd = Rd.length; Yd < Zd; ++Yd)
                _d = Rd[Yd], _d >= Ud && _d <= Vd && Wd.push(_d);
            if (Wd.length < 2)
                return [{
                        time: Ud,
                        pos: 0
                    },
                    {
                        time: Vd,
                        pos: 1
                    }
                ];
            for (Yd = 0, Zd = Wd.length; Yd < Zd; ++Yd)
                ae = Wd[Yd + 1], $d = Wd[Yd - 1], _d = Wd[Yd], Math.round((ae + $d) / 2) !== _d && Xd.push({
                    time: _d,
                    pos: Yd / (Zd - 1)
                });
            return Xd;
        }
        _getTimestampsForTable() {
            let be = this._cache.all || [];
            if (be.length)
                return be;
            const ce = this.getDataTimestamps(),
                de = this.getLabelTimestamps();
            return be = ce.length && de.length ? this.normalize(ce.concat(de)) : ce.length ? ce : de, be = this._cache.all = be, be;
        }
        getDecimalForValue(Rd) {
            return (Sd(this._table, Rd) - this._minPos) / this._tableRange;
        }
        getValueForPixel(Rd) {
            const Ud = this._offsets,
                Vd = this.getDecimalForPixel(Rd) / Ud.factor - Ud.end;
            return Sd(this._table, Vd * this._tableRange + this._minPos, !0);
        }
        constructor(Rd) {
            super(Rd), this._table = [], this._minPos = void 0, this._tableRange = void 0;
        }
    }
    (0, d.default)(Td, 'id', 'timeseries'), (0, d.default)(Td, 'defaults', Pd.defaults);
}), c.register('+rB2S', function(b, s) {
    a(b.exports, 'aF', function() {
        return e;
    }), a(b.exports, 'ac', function() {
        return f;
    }), a(b.exports, 'k', function() {
        return g;
    }), a(b.exports, 'b', function() {
        return h;
    }), a(b.exports, 'i', function() {
        return i;
    }), a(b.exports, 'g', function() {
        return j;
    }), a(b.exports, 'O', function() {
        return k;
    }), a(b.exports, 'v', function() {
        return l;
    }), a(b.exports, 'm', function() {
        return m;
    }), a(b.exports, 'n', function() {
        return n;
    }), a(b.exports, 'Q', function() {
        return o;
    }), a(b.exports, 'F', function() {
        return p;
    }), a(b.exports, 'ah', function() {
        return q;
    }), a(b.exports, 'a4', function() {
        return u;
    }), a(b.exports, 'ab', function() {
        return v;
    }), a(b.exports, 'f', function() {
        return y;
    }), a(b.exports, 'a5', function() {
        return z;
    }), a(b.exports, 'h', function() {
        return A;
    }), a(b.exports, 'a7', function() {
        return B;
    }), a(b.exports, 'ag', function() {
        return C;
    }), a(b.exports, 'ai', function() {
        return D;
    }), a(b.exports, 'P', function() {
        return E;
    }), a(b.exports, 'T', function() {
        return F;
    }), a(b.exports, 'H', function() {
        return J;
    }), a(b.exports, 'aM', function() {
        return M;
    }), a(b.exports, 's', function() {
        return N;
    }), a(b.exports, 'aJ', function() {
        return O;
    }), a(b.exports, 'aH', function() {
        return P;
    }), a(b.exports, 'N', function() {
        return Q;
    }), a(b.exports, 'x', function() {
        return R;
    }), a(b.exports, 'aI', function() {
        return S;
    }), a(b.exports, 'aG', function() {
        return T;
    }), a(b.exports, 't', function() {
        return U;
    }), a(b.exports, 'U', function() {
        return V;
    }), a(b.exports, 'aK', function() {
        return W;
    }), a(b.exports, 'D', function() {
        return X;
    }), a(b.exports, 'aE', function() {
        return Y;
    }), a(b.exports, 'ay', function() {
        return $;
    }), a(b.exports, 'p', function() {
        return _;
    }), a(b.exports, 'S', function() {
        return ab;
    }), a(b.exports, 'W', function() {
        return bb;
    }), a(b.exports, 'aj', function() {
        return cb;
    }), a(b.exports, 'aP', function() {
        return eb;
    }), a(b.exports, 'B', function() {
        return fb;
    }), a(b.exports, 'A', function() {
        return gb;
    }), a(b.exports, 'aO', function() {
        return hb;
    }), a(b.exports, 'l', function() {
        return jb;
    }), a(b.exports, 'u', function() {
        return kb;
    }), a(b.exports, '_', function() {
        return lb;
    }), a(b.exports, 'r', function() {
        return mb;
    }), a(b.exports, 'L', function() {
        return nb;
    }), a(b.exports, 'ad', function() {
        return ob;
    }), a(b.exports, 'a1', function() {
        return pb;
    }), a(b.exports, 'a2', function() {
        return qb;
    }), a(b.exports, 'aB', function() {
        return rb;
    }), a(b.exports, 'q', function() {
        return sb;
    }), a(b.exports, 'w', function() {
        return tb;
    }), a(b.exports, 'e', function() {
        return xb;
    }), a(b.exports, 'c', function() {
        return zb;
    }), a(b.exports, 'o', function() {
        return Eb;
    }), a(b.exports, 'aL', function() {
        return Gb;
    }), a(b.exports, 'a3', function() {
        return Hb;
    }), a(b.exports, 'a6', function() {
        return Ib;
    }), a(b.exports, 'd', function() {
        return Mb;
    }), a(b.exports, 'V', function() {
        return Nb;
    }), a(b.exports, 'aN', function() {
        return Ob;
    }), a(b.exports, 'X', function() {
        return Pb;
    }), a(b.exports, 'af', function() {
        return Qb;
    }), a(b.exports, 'at', function() {
        return Rb;
    }), a(b.exports, 'aD', function() {
        return Sb;
    }), a(b.exports, 'C', function() {
        return Tb;
    }), a(b.exports, 'Y', function() {
        return Ub;
    }), a(b.exports, '$', function() {
        return Vb;
    }), a(b.exports, 'ar', function() {
        return Wb;
    }), a(b.exports, 'as', function() {
        return Xb;
    }), a(b.exports, 'Z', function() {
        return Yb;
    }), a(b.exports, 'au', function() {
        return ac;
    }), a(b.exports, 'ak', function() {
        return ec;
    }), a(b.exports, 'av', function() {
        return fc;
    }), a(b.exports, 'aw', function() {
        return gc;
    }), a(b.exports, 'E', function() {
        return hc;
    }), a(b.exports, 'a0', function() {
        return ic;
    }), a(b.exports, 'a', function() {
        return jc;
    }), a(b.exports, 'R', function() {
        return kc;
    }), a(b.exports, 'j', function() {
        return lc;
    }), a(b.exports, 'a9', function() {
        return mc;
    }), a(b.exports, 'a8', function() {
        return rc;
    }), a(b.exports, 'aa', function() {
        return sc;
    }), a(b.exports, 'y', function() {
        return Ec;
    }), a(b.exports, 'al', function() {
        return Mc;
    }), a(b.exports, 'M', function() {
        return Nc;
    }), a(b.exports, 'I', function() {
        return Oc;
    }), a(b.exports, 'z', function() {
        return Tc;
    }), a(b.exports, 'G', function() {
        return Vc;
    }), a(b.exports, 'ae', function() {
        return Wc;
    }), a(b.exports, 'K', function() {
        return Xc;
    }), a(b.exports, 'J', function() {
        return Yc;
    }), a(b.exports, 'aq', function() {
        return Zc;
    }), a(b.exports, 'ao', function() {
        return $c;
    }), a(b.exports, 'ap', function() {
        return _c;
    }), a(b.exports, 'az', function() {
        return ad;
    }), a(b.exports, 'aA', function() {
        return bd;
    }), a(b.exports, 'aC', function() {
        return cd;
    }), a(b.exports, 'ax', function() {
        return kd;
    }), a(b.exports, 'an', function() {
        return ld;
    }), a(b.exports, 'am', function() {
        return md;
    });
    var d = c('Nzp7N');

    function e() {}
    const f = (() => {
        let g = 0;
        return () => g++;
    })();

    function g(a) {
        return null == a;
    }

    function h(a) {
        if (Array.isArray && Array.isArray(a))
            return !0;
        const i = Object.prototype.toString.call(a);
        return '[object' === i.slice(0, 7) && 'Array]' === i.slice(-6);
    }

    function i(a) {
        return null !== a && '[object Object]' === Object.prototype.toString.call(a);
    }

    function j(a) {
        return ('number' == typeof a || a instanceof Number) && isFinite(+a);
    }

    function k(a, b) {
        return j(a) ? a : b;
    }

    function l(a, b) {
        return void 0 === a ? b : a;
    }
    const m = (a, b) => 'string' == typeof a && a.endsWith('%') ? parseFloat(a) / 100 : +a / b,
        n = (a, b) => 'string' == typeof a && a.endsWith('%') ? parseFloat(a) / 100 * b : +a;

    function o(a, b, c) {
        if (a && 'function' == typeof a.call)
            return a.apply(c, b);
    }

    function p(a, b, c, s) {
        let q, r, s;
        if (h(a))
            if (r = a.length, s)
                for (q = r - 1; q >= 0; q--)
                    b.call(c, a[q], q);
            else
                for (q = 0; q < r; q++)
                    b.call(c, a[q], q);
        else if (i(a))
            for (s = Object.keys(a), r = s.length, q = 0; q < r; q++)
                b.call(c, a[s[q]], s[q]);
    }

    function q(a, b) {
        let r, s, t, u;
        if (!a || !b || a.length !== b.length)
            return !1;
        for (r = 0, s = a.length; r < s; ++r)
            if (t = a[r], u = b[r], t.datasetIndex !== u.datasetIndex || t.index !== u.index)
                return !1;
        return !0;
    }

    function r(a) {
        if (h(a))
            return a.map(r);
        if (i(a)) {
            const s = Object.create(null),
                t = Object.keys(a),
                u = t.length;
            let v = 0;
            for (; v < u; ++v)
                s[t[v]] = r(a[t[v]]);
            return s;
        }
        return a;
    }

    function s(a) {
        return -1 === [
            '__proto__',
            'prototype',
            'constructor'
        ].indexOf(a);
    }

    function t(a, b, c, v) {
        if (!s(a))
            return;
        const u = b[a],
            v = c[a];
        i(u) && i(v) ? u(u, v, v) : b[a] = r(v);
    }

    function u(a, b, c) {
        const v = h(b) ? b : [b],
            w = v.length;
        if (!i(a))
            return a;
        const x = (c = c || {}).merger || t;
        let y;
        for (let z = 0; z < w; ++z) {
            if (y = v[z], !i(y))
                continue;
            const A = Object.keys(y);
            for (let B = 0, C = A.length; B < C; ++B)
                x(A[B], a, y, c);
        }
        return a;
    }

    function v(a, b) {
        return u(a, b, {
            merger: w
        });
    }

    function w(a, b, c) {
        if (!s(a))
            return;
        const x = b[a],
            y = c[a];
        i(x) && i(y) ? v(x, y) : Object.prototype.hasOwnProperty.call(b, a) || (b[a] = r(y));
    }
    const x = {
        '': a => a,
        x: a => a.x,
        y: a => a.y
    };

    function y(a, b) {
        const z = x[b] || (x[b] = function(a) {
            const A = function(a) {
                const B = a.split('.'),
                    C = [];
                let D = '';
                for (const E of B)
                    D += E, D.endsWith('\\') ? D = D.slice(0, -1) + '.' : (C.push(D), D = '');
                return C;
            }(a);
            return a => {
                for (const B of A) {
                    if ('' === B)
                        break;
                    a = a && a[B];
                }
                return a;
            };
        }(b));
        return z(a);
    }

    function z(a) {
        return a.charAt(0).toUpperCase() + a.slice(1);
    }
    const A = a => void 0 !== a,
        B = a => 'function' == typeof a,
        C = (a, b) => {
            if (a.size !== b.size)
                return !1;
            for (const D of a)
                if (!b.has(D))
                    return !1;
            return !0;
        };

    function D(a) {
        return 'mouseup' === a.type || 'click' === a.type || 'contextmenu' === a.type;
    }
    const E = Math.PI,
        F = 2 * E,
        G = F + E,
        H = Number.POSITIVE_INFINITY,
        I = E / 180,
        J = E / 2,
        K = E / 4,
        L = 2 * E / 3,
        M = Math.log10,
        N = Math.sign;

    function O(a, b, c) {
        return Math.abs(a - b) < c;
    }

    function P(a) {
        const Q = Math.round(a);
        a = O(a, Q, a / 1000) ? Q : a;
        const R = Math.pow(10, Math.floor(M(a))),
            S = a / R;
        return (S <= 1 ? 1 : S <= 2 ? 2 : S <= 5 ? 5 : 10) * R;
    }

    function Q(a) {
        const R = [],
            S = Math.sqrt(a);
        let T;
        for (T = 1; T < S; T++)
            a % T == 0 && (R.push(T), R.push(a / T));
        return S === (0 | S) && R.push(S), R.sort((a, R) => a - R).pop(), R;
    }

    function R(a) {
        return !isNaN(parseFloat(a)) && isFinite(a);
    }

    function S(a, b) {
        const T = Math.round(a);
        return T - b <= a && T + b >= a;
    }

    function T(a, b, c) {
        let U, V, W;
        for (U = 0, V = a.length; U < V; U++)
            W = a[U][c], isNaN(W) || (b.min = Math.min(b.min, W), b.max = Math.max(b.max, W));
    }

    function U(a) {
        return a * (E / 180);
    }

    function V(a) {
        return a * (180 / E);
    }

    function W(a) {
        if (!j(a))
            return;
        let X = 1,
            Y = 0;
        for (; Math.round(a * X) / X !== a;)
            X *= 10, Y++;
        return Y;
    }

    function X(a, b) {
        const Y = b.x - a.x,
            Z = b.y - a.y,
            $ = Math.sqrt(Y * Y + Z * Z);
        let _ = Math.atan2(Z, Y);
        return _ < -0.5 * E && (_ += F), {
            angle: _,
            distance: $
        };
    }

    function Y(a, b) {
        return Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2));
    }

    function Z(a, b) {
        return (a - b + G) % F - E;
    }

    function $(a) {
        return (a % F + F) % F;
    }

    function _(a, b, c, db) {
        const ab = $(a),
            bb = $(b),
            cb = $(c),
            db = $(bb - ab),
            eb = $(cb - ab),
            fb = $(ab - bb),
            gb = $(ab - cb);
        return ab === bb || ab === cb || db && bb === cb || db > eb && fb < gb;
    }

    function ab(a, b, c) {
        return Math.max(b, Math.min(c, a));
    }

    function bb(a) {
        return ab(a, -32768, 32767);
    }

    function cb(a, b, c, db = 0.000001) {
        return a >= Math.min(b, c) - db && a <= Math.max(b, c) + db;
    }

    function eb(a, b, c) {
        c = c || (c => a[c] < b);
        let fb, gb = a.length - 1,
            hb = 0;
        for (; gb - hb > 1;)
            fb = hb + gb >> 1, c(fb) ? hb = fb : gb = fb;
        return {
            lo: hb,
            hi: gb
        };
    }
    const fb = (a, b, c, db) => eb(a, c, db ? db => {
            const gb = a[db][b];
            return gb < c || gb === c && a[db + 1][b] === c;
        } : db => a[db][b] < c),
        gb = (a, b, c) => eb(a, c, db => a[db][b] >= c);

    function hb(a, b, c) {
        let ib = 0,
            jb = a.length;
        for (; ib < jb && a[ib] < b;)
            ib++;
        for (; jb > ib && a[jb - 1] > c;)
            jb--;
        return ib > 0 || jb < a.length ? a.slice(ib, jb) : a;
    }
    const ib = [
        'push',
        'pop',
        'shift',
        'splice',
        'unshift'
    ];

    function jb(a, b) {
        a._chartjs ? a._chartjs.listeners.push(b) : (Object.defineProperty(a, '_chartjs', {
            configurable: !0,
            enumerable: !1,
            value: {
                listeners: [b]
            }
        }), ib.forEach(b => {
            const kb = '_onData' + z(b),
                lb = a[b];
            Object.defineProperty(a, b, {
                configurable: !0,
                enumerable: !1,
                value(...b) {
                    const mb = lb.apply(this, b);
                    return a._chartjs.listeners.forEach(a => {
                        'function' == typeof a[kb] && a[kb](...b);
                    }), mb;
                }
            });
        }));
    }

    function kb(a, b) {
        const lb = a._chartjs;
        if (!lb)
            return;
        const mb = lb.listeners,
            nb = mb.indexOf(b); -
        1 !== nb && mb.splice(nb, 1), mb.length > 0 || (ib.forEach(b => {
            delete a[b];
        }), delete a._chartjs);
    }

    function lb(a) {
        const mb = new Set();
        let nb, ob;
        for (nb = 0, ob = a.length; nb < ob; ++nb)
            mb.add(a[nb]);
        return mb.size === ob ? a : Array.from(mb);
    }
    const mb = 'undefined' == typeof window ? function(a) {
        return a();
    } : window.requestAnimationFrame;

    function nb(a, b) {
        let ob = [],
            pb = !1;
        return function(...d) {
            ob = d, pb || (pb = !0, mb.call(window, () => {
                pb = !1, a.apply(b, ob);
            }));
        };
    }

    function ob(a, b) {
        let pb;
        return function(...db) {
            return b ? (clearTimeout(pb), pb = setTimeout(a, b, db)) : a.apply(this, db), b;
        };
    }
    const pb = a => 'start' === a ? 'left' : 'end' === a ? 'right' : 'center',
        qb = (a, b, c) => 'start' === a ? b : 'end' === a ? c : (b + c) / 2,
        rb = (a, b, c, db) => a === (db ? 'left' : 'right') ? c : 'center' === a ? (b + c) / 2 : b;

    function sb(a, b, c) {
        const tb = b.length;
        let ub = 0,
            vb = wb;
        if (a._sorted) {
            const {
                iScale: xb,
                _parsed: yb
            } = zb, Ab = xb.axis, {
                min: Bb,
                max: Cb,
                minDefined: Db,
                maxDefined: Eb
            } = xb.getUserBounds();
            Db && (ub = ab(Math.min(fb(yb, xb.axis, Bb).lo, c ? wb : fb(b, Ab, xb.getPixelForValue(Bb)).lo), 0, wb - 1)), vb = Eb ? ab(Math.max(fb(yb, xb.axis, Cb, !0).hi + 1, c ? 0 : fb(b, Ab, xb.getPixelForValue(Cb), !0).hi + 1), ub, wb) - ub : wb - ub;
        }
        return {
            start: ub,
            count: vb
        };
    }

    function tb(a) {
        const {
            xScale: ub,
            yScale: vb,
            _scaleRanges: wb
        } = xb, yb = {
            xmin: ub.min,
            xmax: ub.max,
            ymin: vb.min,
            ymax: vb.max
        };
        if (!wb)
            return xb._scaleRanges = yb, !0;
        const zb = wb.xmin !== ub.min || wb.xmax !== ub.max || wb.ymin !== vb.min || wb.ymax !== vb.max;
        return Object.assign(wb, yb), zb;
    }
    const ub = a => 0 === a || 1 === a,
        vb = (a, b, c) => -Math.pow(2, 10 * (a -= 1)) * Math.sin((a - b) * F / c),
        wb = (a, b, c) => Math.pow(2, -10 * a) * Math.sin((a - b) * F / c) + 1,
        xb = {
            linear: a => a,
            easeInQuad: a => a * a,
            easeOutQuad: a => -a * (a - 2),
            easeInOutQuad: a => (a /= 0.5) < 1 ? 0.5 * a * a : -0.5 * (--a * (a - 2) - 1),
            easeInCubic: a => a * a * a,
            easeOutCubic: a => (a -= 1) * a * a + 1,
            easeInOutCubic: a => (a /= 0.5) < 1 ? 0.5 * a * a * a : 0.5 * ((a -= 2) * a * a + 2),
            easeInQuart: a => a * a * a * a,
            easeOutQuart: a => -((a -= 1) * a * a * a - 1),
            easeInOutQuart: a => (a /= 0.5) < 1 ? 0.5 * a * a * a * a : -0.5 * ((a -= 2) * a * a * a - 2),
            easeInQuint: a => a * a * a * a * a,
            easeOutQuint: a => (a -= 1) * a * a * a * a + 1,
            easeInOutQuint: a => (a /= 0.5) < 1 ? 0.5 * a * a * a * a * a : 0.5 * ((a -= 2) * a * a * a * a + 2),
            easeInSine: a => 1 - Math.cos(a * J),
            easeOutSine: a => Math.sin(a * J),
            easeInOutSine: a => -0.5 * (Math.cos(E * a) - 1),
            easeInExpo: a => 0 === a ? 0 : Math.pow(2, 10 * (a - 1)),
            easeOutExpo: a => 1 === a ? 1 : 1 - Math.pow(2, -10 * a),
            easeInOutExpo: a => ub(a) ? a : a < 0.5 ? 0.5 * Math.pow(2, 10 * (2 * a - 1)) : 0.5 * (2 - Math.pow(2, -10 * (2 * a - 1))),
            easeInCirc: a => a >= 1 ? a : -(Math.sqrt(1 - a * a) - 1),
            easeOutCirc: a => Math.sqrt(1 - (a -= 1) * a),
            easeInOutCirc: a => (a /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - a * a) - 1) : 0.5 * (Math.sqrt(1 - (a -= 2) * a) + 1),
            easeInElastic: a => ub(a) ? a : vb(a, 0.075, 0.3),
            easeOutElastic: a => ub(a) ? a : wb(a, 0.075, 0.3),
            easeInOutElastic(a) {
                const yb = 0.1125;
                return ub(a) ? a : a < 0.5 ? 0.5 * vb(2 * a, yb, 0.45) : 0.5 + 0.5 * wb(2 * a - 1, yb, 0.45);
            },
            easeInBack(a) {
                const yb = 1.70158;
                return a * a * ((yb + 1) * a - yb);
            },
            easeOutBack(a) {
                const yb = 1.70158;
                return (a -= 1) * a * ((yb + 1) * a + yb) + 1;
            },
            easeInOutBack(a) {
                let yb = 1.70158;
                return (a /= 0.5) < 1 ? a * a * ((1 + (yb *= 1.525)) * a - yb) * 0.5 : 0.5 * ((a -= 2) * a * ((1 + (yb *= 1.525)) * a + yb) + 2);
            },
            easeInBounce: a => 1 - xb.easeOutBounce(1 - a),
            easeOutBounce(a) {
                const yb = 7.5625,
                    zb = 2.75;
                return a < 1 / zb ? yb * a * a : a < 2 / zb ? yb * (a -= 1.5 / zb) * a + 0.75 : a < 2.5 / zb ? yb * (a -= 2.25 / zb) * a + 0.9375 : yb * (a -= 2.625 / zb) * a + 0.984375;
            },
            easeInOutBounce: a => a < 0.5 ? 0.5 * xb.easeInBounce(2 * a) : 0.5 * xb.easeOutBounce(2 * a - 1) + 0.5
        };

    function yb(a) {
        if (a && 'object' == typeof a) {
            const zb = a.toString();
            return '[object CanvasPattern]' === zb || '[object CanvasGradient]' === zb;
        }
        return !1;
    }

    function zb(a) {
        return yb(a) ? a : new(0, d.Color)(a);
    }

    function Ab(a) {
        return yb(a) ? a : new(0, d.Color)(a).saturate(0.5).darken(0.1).hexString();
    }
    const Bb = [
            'x',
            'y',
            'borderWidth',
            'radius',
            'tension'
        ],
        Cb = [
            'color',
            'borderColor',
            'backgroundColor'
        ];
    const Db = new Map();

    function Eb(a, b, c) {
        return function(a, b) {
            b = b || {};
            const Fb = a + JSON.stringify(b);
            let Gb = Db.get(Fb);
            return Gb || (Gb = new Intl.NumberFormat(a, b), Db.set(Fb, Gb)), Gb;
        }(b, c).format(a);
    }
    const Fb = {
        values: a => h(a) ? a : '' + a,
        numeric(a, b, c) {
            if (0 === a)
                return '0';
            const Gb = this.chart.options.locale;
            let Hb, Ib = Jb;
            if (c.length > 1) {
                const Kb = Math.max(Math.abs(c[0].value), Math.abs(c[c.length - 1].value));
                (Kb < 0.0001 || Kb > 1000000000000000) && (Hb = 'scientific'), Ib = function(Jb, Kb) {
                    let Lb = Kb.length > 3 ? Kb[2].value - Kb[1].value : Kb[1].value - Kb[0].value;
                    Math.abs(Lb) >= 1 && Jb !== Math.floor(Jb) && (Lb = Jb - Math.floor(Jb));
                    return Lb;
                }(Jb, c);
            }
            const Kb = M(Math.abs(Ib)),
                Lb = Math.max(Math.min(-1 * Math.floor(Kb), 20), 0),
                Mb = {
                    notation: Hb,
                    minimumFractionDigits: Lb,
                    maximumFractionDigits: Lb
                };
            return Object.assign(Mb, this.options.ticks.format), Eb(Jb, Gb, Mb);
        },
        logarithmic(a, b, c) {
            if (0 === a)
                return '0';
            const Gb = c[b].significand || a / Math.pow(10, Math.floor(M(a)));
            return [
                1,
                2,
                3,
                5,
                10,
                15
            ].includes(Gb) || b > 0.8 * c.length ? Fb.numeric.call(this, a, b, c) : '';
        }
    };
    var Gb = {
        formatters: Fb
    };
    const Hb = Object.create(null),
        Ib = Object.create(null);

    function Jb(a, b) {
        if (!b)
            return a;
        const Kb = b.split('.');
        for (let Lb = 0, Mb = Kb.length; Lb < Mb; ++Lb) {
            const Nb = Kb[Lb];
            a = a[Nb] || (a[Nb] = Object.create(null));
        }
        return a;
    }

    function Kb(a, b, c) {
        return 'string' == typeof b ? u(Jb(a, b), c) : u(Jb(a, ''), b);
    }
    class Lb {
        set(a, b) {
            return Kb(this, a, b);
        }
        get(a) {
            return Jb(this, a);
        }
        describe(a, b) {
            return Kb(Ib, a, b);
        }
        override(a, b) {
            return Kb(Hb, a, b);
        }
        route(a, b, c, db) {
            const Mb = Jb(this, a),
                Nb = Jb(this, c),
                Ob = '_' + b;
            Object.defineProperties(Mb, {
                [Ob]: {
                    value: Mb[b],
                    writable: !0
                },
                [b]: {
                    enumerable: !0,
                    get() {
                        const Pb = this[Ob],
                            Qb = Nb[db];
                        return i(Pb) ? Object.assign({}, Qb, Pb) : l(Pb, Qb);
                    },
                    set(a) {
                        this[Ob] = a;
                    }
                }
            });
        }
        apply(a) {
            a.forEach(a => a(this));
        }
        constructor(a, b) {
            this.animation = void 0, this.backgroundColor = 'rgba(0,0,0,0.1)', this.borderColor = 'rgba(0,0,0,0.1)', this.color = '#666', this.datasets = {}, this.devicePixelRatio = a => a.chart.platform.getDevicePixelRatio(), this.elements = {}, this.events = [
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
            }, this.hover = {}, this.hoverBackgroundColor = (a, b) => Ab(b.backgroundColor), this.hoverBorderColor = (a, b) => Ab(b.borderColor), this.hoverColor = (a, b) => Ab(b.color), this.indexAxis = 'x', this.interaction = {
                mode: 'nearest',
                intersect: !0,
                includeInvisible: !1
            }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.drawActiveElementsOnTop = !0, this.describe(a), this.apply(b);
        }
    }
    var Mb = new Lb({
        _scriptable: a => !a.startsWith('on'),
        _indexable: a => 'events' !== a,
        hover: {
            _fallback: 'interaction'
        },
        interaction: {
            _scriptable: !1,
            _indexable: !1
        }
    }, [
        function(a) {
            a.set('animation', {
                delay: void 0,
                duration: 1000,
                easing: 'easeOutQuart',
                fn: void 0,
                from: void 0,
                loop: void 0,
                to: void 0,
                type: void 0
            }), a.describe('animation', {
                _fallback: !1,
                _indexable: !1,
                _scriptable: a => 'onProgress' !== a && 'onComplete' !== a && 'fn' !== a
            }), a.set('animations', {
                colors: {
                    type: 'color',
                    properties: Cb
                },
                numbers: {
                    type: 'number',
                    properties: Bb
                }
            }), a.describe('animations', {
                _fallback: 'animation'
            }), a.set('transitions', {
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
                            fn: a => 0 | a
                        }
                    }
                }
            });
        },
        function(a) {
            a.set('layout', {
                autoPadding: !0,
                padding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                }
            });
        },
        function(a) {
            a.set('scale', {
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
                    tickWidth: (a, b) => b.lineWidth,
                    tickColor: (a, b) => b.color,
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
                    callback: Gb.formatters.values,
                    minor: {},
                    major: {},
                    align: 'center',
                    crossAlign: 'near',
                    showLabelBackdrop: !1,
                    backdropColor: 'rgba(255, 255, 255, 0.75)',
                    backdropPadding: 2
                }
            }), a.route('scale.ticks', 'color', '', 'color'), a.route('scale.grid', 'color', '', 'borderColor'), a.route('scale.border', 'color', '', 'borderColor'), a.route('scale.title', 'color', '', 'color'), a.describe('scale', {
                _fallback: !1,
                _scriptable: a => !a.startsWith('before') && !a.startsWith('after') && 'callback' !== a && 'parser' !== a,
                _indexable: a => 'borderDash' !== a && 'tickBorderDash' !== a && 'dash' !== a
            }), a.describe('scales', {
                _fallback: 'scale'
            }), a.describe('scale.ticks', {
                _scriptable: a => 'backdropPadding' !== a && 'callback' !== a,
                _indexable: a => 'backdropPadding' !== a
            });
        }
    ]);

    function Nb(a, b, c, db, d) {
        let Ob = b[d];
        return Ob || (Ob = b[d] = a.measureText(d).width, c.push(d)), Ob > db && (db = Ob), db;
    }

    function Ob(a, b, c, db) {
        let Pb = (db = db || {}).data = db.data || {},
            Qb = db.garbageCollect = db.garbageCollect || [];
        db.font !== b && (Pb = db.data = {}, Qb = db.garbageCollect = [], db.font = b), a.save(), a.font = b;
        let Rb = 0;
        const Sb = c.length;
        let Tb, Ub, Vb, Wb, Xb;
        for (Tb = 0; Tb < Sb; Tb++)
            if (Wb = c[Tb], null != Wb && !0 !== h(Wb))
                Rb = Nb(a, Pb, Qb, Rb, Wb);
            else if (h(Wb))
            for (Ub = 0, Vb = Wb.length; Ub < Vb; Ub++)
                Xb = Wb[Ub], null == Xb || h(Xb) || (Rb = Nb(a, Pb, Qb, Rb, Xb));
        a.restore();
        const Yb = Qb.length / 2;
        if (Yb > c.length) {
            for (Tb = 0; Tb < Yb; Tb++)
                delete Pb[Qb[Tb]];
            Qb.splice(0, Yb);
        }
        return Rb;
    }

    function Pb(a, b, c) {
        const Qb = a.currentDevicePixelRatio,
            Rb = 0 !== c ? Math.max(c / 2, 0.5) : 0;
        return Math.round((b - Rb) * Qb) / Qb + Rb;
    }

    function Qb(a, b) {
        (b = b || a.getContext('2d')).save(), b.resetTransform(), b.clearRect(0, 0, a.width, a.height), b.restore();
    }

    function Rb(a, b, c, db) {
        Sb(a, b, c, db, null);
    }

    function Sb(a, b, c, db, d) {
        let Tb, Ub, Vb, Wb, Xb, Yb, Zb, $b;
        const _b = b.pointStyle,
            ac = b.rotation,
            bc = b.radius;
        let cc = (ac || 0) * I;
        if (_b && 'object' == typeof _b && (Tb = _b.toString(), '[object HTMLImageElement]' === Tb || '[object HTMLCanvasElement]' === Tb))
            return a.save(), a.translate(c, db), a.rotate(cc), a.drawImage(_b, -_b.width / 2, -_b.height / 2, _b.width, _b.height), void a.restore();
        if (!(isNaN(bc) || bc <= 0)) {
            switch (a.beginPath(), _b) {
                default:
                    d ? a.ellipse(c, db, d / 2, bc, 0, 0, F) : a.arc(c, db, bc, 0, F), a.closePath();
                    break;
                case 'triangle':
                    Yb = d ? d / 2 : bc, a.moveTo(c + Math.sin(cc) * Yb, db - Math.cos(cc) * bc), cc += L, a.lineTo(c + Math.sin(cc) * Yb, db - Math.cos(cc) * bc), cc += L, a.lineTo(c + Math.sin(cc) * Yb, db - Math.cos(cc) * bc), a.closePath();
                    break;
                case 'rectRounded':
                    Xb = 0.516 * bc, Wb = bc - Xb, Ub = Math.cos(cc + K) * Wb, Zb = Math.cos(cc + K) * (d ? d / 2 - Xb : Wb), Vb = Math.sin(cc + K) * Wb, $b = Math.sin(cc + K) * (d ? d / 2 - Xb : Wb), a.arc(c - Zb, db - Vb, Xb, cc - E, cc - J), a.arc(c + $b, db - Ub, Xb, cc - J, cc), a.arc(c + Zb, db + Vb, Xb, cc, cc + J), a.arc(c - $b, db + Ub, Xb, cc + J, cc + E), a.closePath();
                    break;
                case 'rect':
                    if (!ac) {
                        Wb = Math.SQRT1_2 * bc, Yb = d ? d / 2 : Wb, a.rect(c - Yb, db - Wb, 2 * Yb, 2 * Wb);
                        break;
                    }
                    cc += K;
                case 'rectRot':
                    Zb = Math.cos(cc) * (d ? d / 2 : bc), Ub = Math.cos(cc) * bc, Vb = Math.sin(cc) * bc, $b = Math.sin(cc) * (d ? d / 2 : bc), a.moveTo(c - Zb, db - Vb), a.lineTo(c + $b, db - Ub), a.lineTo(c + Zb, db + Vb), a.lineTo(c - $b, db + Ub), a.closePath();
                    break;
                case 'crossRot':
                    cc += K;
                case 'cross':
                    Zb = Math.cos(cc) * (d ? d / 2 : bc), Ub = Math.cos(cc) * bc, Vb = Math.sin(cc) * bc, $b = Math.sin(cc) * (d ? d / 2 : bc), a.moveTo(c - Zb, db - Vb), a.lineTo(c + Zb, db + Vb), a.moveTo(c + $b, db - Ub), a.lineTo(c - $b, db + Ub);
                    break;
                case 'star':
                    Zb = Math.cos(cc) * (d ? d / 2 : bc), Ub = Math.cos(cc) * bc, Vb = Math.sin(cc) * bc, $b = Math.sin(cc) * (d ? d / 2 : bc), a.moveTo(c - Zb, db - Vb), a.lineTo(c + Zb, db + Vb), a.moveTo(c + $b, db - Ub), a.lineTo(c - $b, db + Ub), cc += K, Zb = Math.cos(cc) * (d ? d / 2 : bc), Ub = Math.cos(cc) * bc, Vb = Math.sin(cc) * bc, $b = Math.sin(cc) * (d ? d / 2 : bc), a.moveTo(c - Zb, db - Vb), a.lineTo(c + Zb, db + Vb), a.moveTo(c + $b, db - Ub), a.lineTo(c - $b, db + Ub);
                    break;
                case 'line':
                    Ub = d ? d / 2 : Math.cos(cc) * bc, Vb = Math.sin(cc) * bc, a.moveTo(c - Ub, db - Vb), a.lineTo(c + Ub, db + Vb);
                    break;
                case 'dash':
                    a.moveTo(c, db), a.lineTo(c + Math.cos(cc) * (d ? d / 2 : bc), db + Math.sin(cc) * bc);
                    break;
                case !1:
                    a.closePath();
            }
            a.fill(), b.borderWidth > 0 && a.stroke();
        }
    }

    function Tb(a, b, c) {
        return c = c || 0.5, !b || a && a.x > b.left - c && a.x < b.right + c && a.y > b.top - c && a.y < b.bottom + c;
    }

    function Ub(a, b) {
        a.save(), a.beginPath(), a.rect(b.left, b.top, b.right - b.left, b.bottom - b.top), a.clip();
    }

    function Vb(a) {
        a.restore();
    }

    function Wb(a, b, c, db, d) {
        if (!b)
            return a.lineTo(c.x, c.y);
        if ('middle' === d) {
            const Xb = (b.x + c.x) / 2;
            a.lineTo(Xb, b.y), a.lineTo(Xb, c.y);
        } else
            'after' === d != !!db ? a.lineTo(b.x, c.y) : a.lineTo(c.x, b.y);
        a.lineTo(c.x, c.y);
    }

    function Xb(a, b, c, db) {
        if (!b)
            return a.lineTo(c.x, c.y);
        a.bezierCurveTo(db ? b.cp1x : b.cp2x, db ? b.cp1y : b.cp2y, db ? c.cp2x : c.cp1x, db ? c.cp2y : c.cp1y, c.x, c.y);
    }

    function Yb(a, b, c, db, d, Zb = {}) {
        const $b = h(b) ? b : [b],
            _b = Zb.strokeWidth > 0 && '' !== Zb.strokeColor;
        let ac, bc;
        for (a.save(), a.font = d.string, function(a, b) {
                b.translation && a.translate(b.translation[0], b.translation[1]);
                g(b.rotation) || a.rotate(b.rotation);
                b.color && (a.fillStyle = b.color);
                b.textAlign && (a.textAlign = b.textAlign);
                b.textBaseline && (a.textBaseline = b.textBaseline);
            }(a, Zb), ac = 0; ac < $b.length; ++ac)
            bc = $b[ac], Zb.backdrop && _b(a, Zb.backdrop), _b && (Zb.strokeColor && (a.strokeStyle = Zb.strokeColor), g(Zb.strokeWidth) || (a.lineWidth = Zb.strokeWidth), a.strokeText(bc, c, db, Zb.maxWidth)), a.fillText(bc, c, db, Zb.maxWidth), $b(a, c, db, bc, Zb), db += d.lineHeight;
        a.restore();
    }

    function $b(a, b, c, db, d) {
        if (d.strikethrough || d.underline) {
            const _b = a.measureText(db),
                ac = b - _b.actualBoundingBoxLeft,
                bc = b + _b.actualBoundingBoxRight,
                cc = c - _b.actualBoundingBoxAscent,
                dc = c + _b.actualBoundingBoxDescent,
                ec = d.strikethrough ? (cc + dc) / 2 : dc;
            a.strokeStyle = a.fillStyle, a.beginPath(), a.lineWidth = d.decorationWidth || 2, a.moveTo(ac, ec), a.lineTo(bc, ec), a.stroke();
        }
    }

    function _b(a, b) {
        const ac = a.fillStyle;
        a.fillStyle = b.color, a.fillRect(b.left, b.top, b.width, b.height), a.fillStyle = ac;
    }

    function ac(a, b) {
        const {
            x: bc,
            y: cc,
            w: dc,
            h: ec,
            radius: fc
        } = gc;
        a.arc(bc + fc.topLeft, cc + fc.topLeft, fc.topLeft, -J, E, !0), a.lineTo(bc, cc + ec - fc.bottomLeft), a.arc(bc + fc.bottomLeft, cc + ec - fc.bottomLeft, fc.bottomLeft, E, J, !0), a.lineTo(bc + dc - fc.bottomRight, cc + ec), a.arc(bc + dc - fc.bottomRight, cc + ec - fc.bottomRight, fc.bottomRight, J, 0, !0), a.lineTo(bc + dc, cc + fc.topRight), a.arc(bc + dc - fc.topRight, cc + fc.topRight, fc.topRight, 0, -J, !0), a.lineTo(bc + fc.topLeft, cc);
    }
    const bc = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
        cc = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;

    function dc(a, b) {
        const ec = ('' + a).match(bc);
        if (!ec || 'normal' === ec[1])
            return 1.2 * b;
        switch (a = +ec[2], ec[3]) {
            case 'px':
                return a;
            case '%':
                a /= 100;
        }
        return b * a;
    }

    function ec(a, b) {
        const fc = {},
            gc = i(b),
            hc = gc ? Object.keys(b) : b,
            ic = i(a) ? gc ? fc => l(a[fc], a[b[fc]]) : b => a[b] : () => a;
        for (const jc of hc)
            fc[jc] = +ic(jc) || 0;
        return fc;
    }

    function fc(a) {
        return ec(a, {
            top: 'y',
            right: 'x',
            bottom: 'y',
            left: 'x'
        });
    }

    function gc(a) {
        return ec(a, [
            'topLeft',
            'topRight',
            'bottomLeft',
            'bottomRight'
        ]);
    }

    function hc(a) {
        const ic = fc(a);
        return ic.width = ic.left + ic.right, ic.height = ic.top + ic.bottom, ic;
    }

    function ic(a, b) {
        a = a || {}, b = b || Mb.font;
        let jc = l(a.size, b.size);
        'string' == typeof jc && (jc = parseInt(jc, 10));
        let kc = l(a.style, b.style);
        kc && !('' + kc).match(cc) && (console.warn('Invalid font style specified: "' + kc + '"'), kc = void 0);
        const lc = {
            family: l(a.family, b.family),
            lineHeight: dc(l(a.lineHeight, b.lineHeight), jc),
            size: jc,
            style: kc,
            weight: l(a.weight, b.weight),
            string: ''
        };
        return lc.string = function(a) {
            return !a || g(a.size) || g(a.family) ? null : (a.style ? a.style + ' ' : '') + (a.weight ? a.weight + ' ' : '') + a.size + 'px ' + a.family;
        }(lc), lc;
    }

    function jc(a, b, c, db) {
        let kc, lc, mc, nc = !0;
        for (kc = 0, lc = a.length; kc < lc; ++kc)
            if (mc = a[kc], void 0 !== mc && (void 0 !== b && 'function' == typeof mc && (mc = mc(b), nc = !1), void 0 !== c && h(mc) && (mc = mc[c % mc.length], nc = !1), void 0 !== mc))
                return db && !nc && (db.cacheable = !1), mc;
    }

    function kc(a, b, c) {
        const {
            min: lc,
            max: mc
        } = nc, oc = n(b, (mc - lc) / 2), pc = (nc, b) => c && 0 === nc ? 0 : nc + b;
        return {
            min: pc(lc, -Math.abs(oc)),
            max: pc(mc, oc)
        };
    }

    function lc(a, b) {
        return Object.assign(Object.create(a), b);
    }

    function mc(a, nc = [''], oc = pc, db, qc = () => pc[0]) {
        A(db) || (db = Cc('_fallback', pc));
        const rc = {
            [Symbol.toStringTag]: 'Object',
            _cacheable: !0,
            _scopes: pc,
            _rootScopes: oc,
            _fallback: db,
            _getTarget: qc,
            override: qc => mc([
                qc,
                ...pc
            ], nc, oc, db)
        };
        return new Proxy(rc, {
            deleteProperty: (nc, oc) => (delete nc[oc], delete nc._keys, delete pc[0][oc], !0),
            get: (oc, db) => wc(oc, db, () => function(pc, nc, oc, db) {
                let sc;
                for (const tc of nc)
                    if (sc = Cc(uc(tc, pc), oc), A(sc))
                        return vc(pc, sc) ? Ac(oc, db, pc, sc) : sc;
            }(db, nc, pc, oc)),
            getOwnPropertyDescriptor: (pc, nc) => Reflect.getOwnPropertyDescriptor(pc._scopes[0], nc),
            getPrototypeOf: () => Reflect.getPrototypeOf(pc[0]),
            has: (pc, nc) => Dc(pc).includes(nc),
            ownKeys: pc => Dc(pc),
            set(pc, nc, oc) {
                const sc = pc._storage || (pc._storage = qc());
                return pc[nc] = sc[nc] = oc, delete pc._keys, !0;
            }
        });
    }

    function rc(pc, nc, oc, db) {
        const sc = {
            _cacheable: !1,
            _proxy: pc,
            _context: nc,
            _subProxy: oc,
            _stack: new Set(),
            _descriptors: sc(pc, db),
            setContext: nc => rc(pc, nc, oc, db),
            override: sc => rc(pc.override(sc), nc, oc, db)
        };
        return new Proxy(sc, {
            deleteProperty: (nc, oc) => (delete nc[oc], delete pc[oc], !0),
            get: (pc, nc, oc) => wc(pc, nc, () => function(pc, nc, oc) {
                const {
                    _proxy: tc,
                    _context: uc,
                    _subProxy: vc,
                    _descriptors: wc
                } = xc;
                let yc = tc[nc];
                B(yc) && wc.isScriptable(nc) && (yc = function(xc, nc, oc, tc) {
                    const {
                        _proxy: zc,
                        _context: Ac,
                        _subProxy: Bc,
                        _stack: Cc
                    } = Dc;
                    if (Cc.has(xc))
                        throw new Error('Recursion detected: ' + Array.from(Cc).join('->') + '->' + xc);
                    Cc.add(xc), nc = nc(Ac, Bc || tc), Cc.delete(xc), vc(xc, nc) && (nc = Ac(zc._scopes, zc, xc, nc));
                    return nc;
                }(nc, yc, xc, oc));
                h(yc) && yc.length && (yc = function(xc, nc, oc, tc) {
                    const {
                        _proxy: zc,
                        _context: Ac,
                        _subProxy: Bc,
                        _descriptors: Cc
                    } = Dc;
                    if (A(Ac.index) && tc(xc))
                        nc = nc[Ac.index % nc.length];
                    else if (i(nc[0])) {
                        const Ec = Fc,
                            Gc = zc._scopes.filter(xc => xc !== Ec);
                        Fc = [];
                        for (const Hc of Ec) {
                            const Ic = Ac(Gc, zc, xc, Hc);
                            Fc.push(rc(Ic, Ac, Bc && Bc[xc], Cc));
                        }
                    }
                    return nc;
                }(nc, yc, xc, wc.isIndexable));
                vc(nc, yc) && (yc = rc(yc, uc, vc && vc[nc], wc));
                return yc;
            }(pc, nc, oc)),
            getOwnPropertyDescriptor: (nc, oc) => nc._descriptors.allKeys ? Reflect.has(pc, oc) ? {
                enumerable: !0,
                configurable: !0
            } : void 0 : Reflect.getOwnPropertyDescriptor(pc, oc),
            getPrototypeOf: () => Reflect.getPrototypeOf(pc),
            has: (nc, oc) => Reflect.has(pc, oc),
            ownKeys: () => Reflect.ownKeys(pc),
            set: (nc, oc, db) => (pc[oc] = db, delete nc[oc], !0)
        });
    }

    function sc(pc, tc = {
        scriptable: !0,
        indexable: !0
    }) {
        const {
            _scriptable: uc = tc.scriptable,
            _indexable: vc = tc.indexable,
            _allKeys: wc = tc.allKeys
        } = xc;
        return {
            allKeys: wc,
            scriptable: uc,
            indexable: vc,
            isScriptable: B(uc) ? uc : () => uc,
            isIndexable: B(vc) ? vc : () => vc
        };
    }
    const uc = (pc, tc) => pc ? pc + z(tc) : tc,
        vc = (pc, tc) => i(tc) && 'adapters' !== pc && (null === Object.getPrototypeOf(tc) || tc.constructor === Object);

    function wc(pc, tc, oc) {
        if (Object.prototype.hasOwnProperty.call(pc, tc))
            return pc[tc];
        const xc = oc();
        return pc[tc] = xc, xc;
    }

    function xc(pc, tc, oc) {
        return B(pc) ? pc(tc, oc) : pc;
    }
    const yc = (pc, tc) => !0 === pc ? tc : 'string' == typeof pc ? y(tc, pc) : void 0;

    function zc(pc, tc, oc, db, qc) {
        for (const Ac of tc) {
            const Bc = yc(oc, Ac);
            if (Bc) {
                pc.add(Bc);
                const Cc = xc(Bc._fallback, oc, qc);
                if (A(Cc) && Cc !== oc && Cc !== db)
                    return Cc;
            } else if (!1 === Bc && A(db) && oc !== db)
                return null;
        }
        return !1;
    }

    function Ac(pc, tc, oc, db) {
        const Bc = tc._rootScopes,
            Cc = xc(tc._fallback, oc, db),
            Dc = [
                ...pc,
                ...Bc
            ],
            Ec = new Set();
        Ec.add(db);
        let Fc = Bc(Ec, Dc, oc, Cc || oc, db);
        return null !== Fc && ((!A(Cc) || Cc === oc || (Fc = Bc(Ec, Dc, Cc, Fc, db), null !== Fc)) && mc(Array.from(Ec), [''], Bc, Cc, () => function(pc, tc, oc) {
            const Gc = pc._getTarget();
            tc in Gc || (Gc[tc] = {});
            const Hc = Gc[tc];
            return h(Hc) && i(oc) ? oc : Hc || {};
        }(tc, oc, db)));
    }

    function Bc(pc, tc, oc, db, qc) {
        for (; oc;)
            oc = zc(pc, tc, oc, db, qc);
        return oc;
    }

    function Cc(pc, tc) {
        for (const Dc of tc) {
            if (!Dc)
                continue;
            const Ec = Dc[pc];
            if (A(Ec))
                return Ec;
        }
    }

    function Dc(pc) {
        let Ec = pc._keys;
        return Ec || (Ec = pc._keys = function(pc) {
            const Fc = new Set();
            for (const Gc of pc)
                for (const Hc of Object.keys(Gc).filter(Hc => !Hc.startsWith('_')))
                    Fc.add(Hc);
            return Array.from(Fc);
        }(pc._scopes)), Ec;
    }

    function Ec(pc, tc, oc, db) {
        const {
            iScale: Fc
        } = Gc, {
            key: Hc = 'r'
        } = this._parsing, Ic = new Array(db);
        let Jc, Kc, Lc, Mc;
        for (Jc = 0, Kc = db; Jc < Kc; ++Jc)
            Lc = Jc + oc, Mc = tc[Lc], Ic[Jc] = {
                r: Fc.parse(y(Mc, Hc), Lc)
            };
        return Ic;
    }
    const Fc = Number.EPSILON || 1e-14,
        Gc = (pc, tc) => tc < pc.length && !pc[tc].skip && pc[tc],
        Hc = pc => 'x' === pc ? 'y' : 'x';

    function Ic(pc, tc, oc, db) {
        const Jc = pc.skip ? tc : pc,
            Kc = Lc,
            Mc = oc.skip ? Lc : oc,
            Nc = Y(Kc, Jc),
            Oc = Y(Mc, Kc);
        let Pc = Nc / (Nc + Oc),
            Qc = Oc / (Nc + Oc);
        Pc = isNaN(Pc) ? 0 : Pc, Qc = isNaN(Qc) ? 0 : Qc;
        const Rc = db * Pc,
            Sc = db * Qc;
        return {
            previous: {
                x: Kc.x - Rc * (Mc.x - Jc.x),
                y: Kc.y - Rc * (Mc.y - Jc.y)
            },
            next: {
                x: Kc.x + Sc * (Mc.x - Jc.x),
                y: Kc.y + Sc * (Mc.y - Jc.y)
            }
        };
    }

    function Jc(pc, Kc = 'x') {
        const Lc = Hc(Kc),
            Mc = pc.length,
            Nc = Array(Mc).fill(0),
            Oc = Array(Mc);
        let Pc, Qc, Rc, Sc = Gc(pc, 0);
        for (Pc = 0; Pc < Mc; ++Pc)
            if (Qc = Rc, Rc = Sc, Sc = Gc(pc, Pc + 1), Rc) {
                if (Sc) {
                    const Tc = Sc[Kc] - Rc[Kc];
                    Nc[Pc] = 0 !== Tc ? (Sc[Lc] - Rc[Lc]) / Tc : 0;
                }
                Oc[Pc] = Qc ? Sc ? N(Nc[Pc - 1]) !== N(Nc[Pc]) ? 0 : (Nc[Pc - 1] + Nc[Pc]) / 2 : Nc[Pc - 1] : Nc[Pc];
            }!
        function(pc, Kc, Lc) {
            const Tc = pc.length;
            let Uc, Vc, Wc, Xc, Yc, Zc = Gc(pc, 0);
            for (let $c = 0; $c < Tc - 1; ++$c)
                Yc = Zc, Zc = Gc(pc, $c + 1), Yc && Zc && (O(Kc[$c], 0, Fc) ? Lc[$c] = Lc[$c + 1] = 0 : (Uc = Lc[$c] / Kc[$c], Vc = Lc[$c + 1] / Kc[$c], Xc = Math.pow(Uc, 2) + Math.pow(Vc, 2), Xc <= 9 || (Wc = 3 / Math.sqrt(Xc), Lc[$c] = Uc * Wc * Kc[$c], Lc[$c + 1] = Vc * Wc * Kc[$c])));
        }(pc, Nc, Oc),
        function(pc, Kc, Tc = 'x') {
            const Uc = Hc(Tc),
                Vc = pc.length;
            let Wc, Xc, Yc, Zc = Gc(pc, 0);
            for (let $c = 0; $c < Vc; ++$c) {
                if (Xc = Yc, Yc = Zc, Zc = Gc(pc, $c + 1), !Yc)
                    continue;
                const _c = Yc[Tc],
                    ad = Yc[Uc];
                Xc && (Wc = (_c - Xc[Tc]) / 3, Yc[`cp1${ Tc }`] = _c - Wc, Yc[`cp1${ Uc }`] = ad - Wc * Kc[$c]), Zc && (Wc = (Zc[Tc] - _c) / 3, Yc[`cp2${ Tc }`] = _c + Wc, Yc[`cp2${ Uc }`] = ad + Wc * Kc[$c]);
            }
        }(pc, Oc, Kc);
    }

    function Lc(pc, Kc, oc) {
        return Math.max(Math.min(pc, oc), Kc);
    }

    function Mc(pc, Kc, oc, db, qc) {
        let Nc, Oc, Pc, Qc;
        if (Kc.spanGaps && (pc = pc.filter(pc => !pc.skip)), 'monotone' === Kc.cubicInterpolationMode)
            Jc(pc, qc);
        else {
            let Rc = db ? pc[pc.length - 1] : pc[0];
            for (Nc = 0, Oc = pc.length; Nc < Oc; ++Nc)
                Pc = pc[Nc], Qc = Ic(Rc, Pc, pc[Math.min(Nc + 1, Oc - (db ? 0 : 1)) % Oc], Kc.tension), Pc.cp1x = Qc.previous.x, Pc.cp1y = Qc.previous.y, Pc.cp2x = Qc.next.x, Pc.cp2y = Qc.next.y, Rc = Pc;
        }
        Kc.capBezierPoints && function(pc, Kc) {
            let Rc, Sc, Tc, Uc, Vc, Wc = Tb(pc[0], Kc);
            for (Rc = 0, Sc = pc.length; Rc < Sc; ++Rc)
                Vc = Uc, Uc = Wc, Wc = Rc < Sc - 1 && Tb(pc[Rc + 1], Kc), Uc && (Tc = pc[Rc], Vc && (Tc.cp1x = Lc(Tc.cp1x, Kc.left, Kc.right), Tc.cp1y = Lc(Tc.cp1y, Kc.top, Kc.bottom)), Wc && (Tc.cp2x = Lc(Tc.cp2x, Kc.left, Kc.right), Tc.cp2y = Lc(Tc.cp2y, Kc.top, Kc.bottom)));
        }(pc, oc);
    }

    function Nc() {
        return 'undefined' != typeof window && 'undefined' != typeof document;
    }

    function Oc(pc) {
        let Pc = pc.parentNode;
        return Pc && '[object ShadowRoot]' === Pc.toString() && (Pc = Pc.host), Pc;
    }

    function Pc(pc, Kc, oc) {
        let Qc;
        return 'string' == typeof pc ? (Qc = parseInt(pc, 10), -1 !== pc.indexOf('%') && (Qc = Qc / 100 * Kc.parentNode[oc])) : Qc = pc, Qc;
    }
    const Qc = pc => pc.ownerDocument.defaultView.getComputedStyle(pc, null);
    const Rc = [
        'top',
        'right',
        'bottom',
        'left'
    ];

    function Sc(pc, Kc, oc) {
        const Tc = {};
        oc = oc ? '-' + oc : '';
        for (let Uc = 0; Uc < 4; Uc++) {
            const Vc = Rc[Uc];
            Tc[Vc] = parseFloat(pc[Kc + '-' + Vc + oc]) || 0;
        }
        return Tc.width = Tc.left + Tc.right, Tc.height = Tc.top + Tc.bottom, Tc;
    }

    function Tc(pc, Kc) {
        if ('native' in pc)
            return pc;
        const {
            canvas: Uc,
            currentDevicePixelRatio: Vc
        } = Wc, Xc = Qc(Uc), Yc = 'border-box' === Xc.boxSizing, Zc = Sc(Xc, 'padding'), $c = Sc(Xc, 'border', 'width'), {
            x: _c,
            y: ad,
            box: bd
        } = function(pc, Wc) {
            const cd = pc.touches,
                dd = cd && cd.length ? cd[0] : pc,
                {
                    offsetX: ed,
                    offsetY: fd
                } = gd;
            let hd, id, jd = !1;
            if (((pc, Wc, cd) => (pc > 0 || Wc > 0) && (!cd || !cd.shadowRoot))(ed, fd, pc.target))
                hd = ed, id = fd;
            else {
                const kd = Wc.getBoundingClientRect();
                hd = gd.clientX - kd.left, id = gd.clientY - kd.top, jd = !0;
            }
            return {
                x: hd,
                y: id,
                box: jd
            };
        }(pc, Uc), cd = Zc.left + (bd && $c.left), dd = Zc.top + (bd && $c.top);
        let {
            width: ed,
            height: fd
        } = gd;
        return Yc && (ed -= Zc.width + $c.width, fd -= Zc.height + $c.height), {
            x: Math.round((_c - cd) / ed * Uc.width / Vc),
            y: Math.round((ad - dd) / fd * Uc.height / Vc)
        };
    }
    const Uc = pc => Math.round(10 * pc) / 10;

    function Vc(pc, Kc, oc, db) {
        const Wc = Qc(pc),
            Xc = Sc(Wc, 'margin'),
            Yc = Pc(Wc.maxWidth, pc, 'clientWidth') || H,
            Zc = Pc(Wc.maxHeight, pc, 'clientHeight') || H,
            $c = function(pc, Kc, oc) {
                let _c, ad;
                if (void 0 === Kc || void 0 === oc) {
                    const bd = Oc(pc);
                    if (bd) {
                        const cd = bd.getBoundingClientRect(),
                            dd = Qc(bd),
                            ed = Sc(dd, 'border', 'width'),
                            fd = Sc(dd, 'padding');
                        Kc = cd.width - fd.width - ed.width, oc = cd.height - fd.height - ed.height, _c = Pc(dd.maxWidth, bd, 'clientWidth'), ad = Pc(dd.maxHeight, bd, 'clientHeight');
                    } else
                        Kc = pc.clientWidth, oc = pc.clientHeight;
                }
                return {
                    width: Kc,
                    height: oc,
                    maxWidth: _c || H,
                    maxHeight: ad || H
                };
            }(pc, Kc, oc);
        let {
            width: _c,
            height: ad
        } = bd;
        if ('content-box' === Wc.boxSizing) {
            const cd = Sc(Wc, 'border', 'width'),
                dd = Sc(Wc, 'padding');
            _c -= dd.width + cd.width, ad -= dd.height + cd.height;
        }
        _c = Math.max(0, _c - Xc.width), ad = Math.max(0, db ? _c / db : ad - Xc.height), _c = Uc(Math.min(_c, Yc, bd.maxWidth)), ad = Uc(Math.min(ad, Zc, bd.maxHeight)), _c && !ad && (ad = Uc(_c / 2));
        return (void 0 !== Kc || void 0 !== oc) && db && bd.height && ad > bd.height && (ad = bd.height, _c = Uc(Math.floor(ad * db))), {
            width: _c,
            height: ad
        };
    }

    function Wc(pc, Kc, oc) {
        const Xc = Kc || 1,
            Yc = Math.floor(pc.height * Xc),
            Zc = Math.floor(pc.width * Xc);
        pc.height = Math.floor(pc.height), pc.width = Math.floor(pc.width);
        const $c = pc.canvas;
        return $c.style && (oc || !$c.style.height && !$c.style.width) && ($c.style.height = `${ pc.height }px`, $c.style.width = `${ pc.width }px`), (pc.currentDevicePixelRatio !== Xc || $c.height !== Yc || $c.width !== Zc) && (pc.currentDevicePixelRatio = Xc, $c.height = Yc, $c.width = Zc, pc.ctx.setTransform(Xc, 0, 0, Xc, 0, 0), !0);
    }
    const Xc = function() {
        let Yc = !1;
        try {
            const Zc = {
                get passive() {
                    return Yc = !0, !1;
                }
            };
            window.addEventListener('test', null, Zc), window.removeEventListener('test', null, Zc);
        } catch (Yc) {}
        return Yc;
    }();

    function Yc(pc, Kc) {
        const Zc = function(pc, Kc) {
                return Qc(pc).getPropertyValue(Kc);
            }(pc, Kc),
            $c = Zc && Zc.match(/^(\d+)(\.\d+)?px$/);
        return $c ? +$c[1] : void 0;
    }

    function Zc(pc, Kc, oc, db) {
        return {
            x: pc.x + oc * (Kc.x - pc.x),
            y: pc.y + oc * (Kc.y - pc.y)
        };
    }

    function $c(pc, Kc, oc, db) {
        return {
            x: pc.x + oc * (Kc.x - pc.x),
            y: 'middle' === db ? oc < 0.5 ? pc.y : Kc.y : 'after' === db ? oc < 1 ? pc.y : Kc.y : oc > 0 ? Kc.y : pc.y
        };
    }

    function _c(pc, Kc, oc, db) {
        const ad = {
                x: pc.cp2x,
                y: pc.cp2y
            },
            bd = {
                x: Kc.cp1x,
                y: Kc.cp1y
            },
            cd = Zc(pc, ad, oc),
            dd = Zc(ad, bd, oc),
            ed = Zc(bd, Kc, oc),
            fd = Zc(cd, dd, oc),
            gd = Zc(dd, ed, oc);
        return Zc(fd, gd, oc);
    }

    function ad(pc, Kc, oc) {
        return pc ? function(pc, Kc) {
            return {
                x: oc => pc + pc + Kc - oc,
                setWidth(pc) {
                    Kc = pc;
                },
                textAlign: pc => 'center' === pc ? pc : 'right' === pc ? 'left' : 'right',
                xPlus: (pc, Kc) => pc - Kc,
                leftForLtr: (pc, Kc) => pc - Kc
            };
        }(Kc, oc) : {
            x: pc => pc,
            setWidth(pc) {},
            textAlign: pc => pc,
            xPlus: (pc, Kc) => pc + Kc,
            leftForLtr: (pc, Kc) => pc
        };
    }

    function bd(pc, Kc) {
        let cd, dd;
        'ltr' !== Kc && 'rtl' !== Kc || (cd = pc.canvas.style, dd = [
            cd.getPropertyValue('direction'),
            cd.getPropertyPriority('direction')
        ], cd.setProperty('direction', Kc, 'important'), pc.prevTextDirection = dd);
    }

    function cd(pc, Kc) {
        void 0 !== Kc && (delete pc.prevTextDirection, pc.canvas.style.setProperty('direction', Kc[0], Kc[1]));
    }

    function dd(pc) {
        return 'angle' === pc ? {
            between: _,
            compare: Z,
            normalize: $
        } : {
            between: cb,
            compare: (pc, Kc) => pc - Kc,
            normalize: pc => pc
        };
    }

    function ed({
        start: fd,
        end: gd,
        count: hd,
        loop: id,
        style: jd
    }) {
        return {
            start: fd % hd,
            end: gd % hd,
            loop: id && (gd - fd + 1) % hd == 0,
            style: jd
        };
    }

    function kd(fd, gd, hd) {
        if (!hd)
            return [fd];
        const {
            property: ld,
            start: md,
            end: nd
        } = od, pd = gd.length, {
            compare: qd,
            between: rd,
            normalize: sd
        } = dd(ld), {
            start: td,
            end: ud,
            loop: vd,
            style: wd
        } = function(fd, gd, od) {
            const {
                property: xd,
                start: yd,
                end: zd
            } = Ad, {
                between: Bd,
                normalize: Cd
            } = dd(xd), Dd = gd.length;
            let Ed, Fd, {
                start: Gd,
                end: Hd,
                loop: Id
            } = Jd;
            if (Id) {
                for (Gd += Dd, Hd += Dd, Ed = 0, Fd = Dd; Ed < Fd && Bd(Cd(gd[Gd % Dd][xd]), yd, zd); ++Ed)
                    Gd--, Hd--;
                Gd %= Dd, Hd %= Dd;
            }
            return Hd < Gd && (Hd += Dd), {
                start: Gd,
                end: Hd,
                loop: Id,
                style: Jd.style
            };
        }(fd, gd, od), xd = [];
        let yd, zd, Ad, Bd = !1,
            Cd = null;
        const Dd = () => Bd || rd(md, Ad, yd) && 0 !== qd(md, Ad),
            Ed = () => !Bd || 0 === qd(nd, yd) || rd(nd, Ad, yd);
        for (let Fd = Gd, Hd = Id; Fd <= ud; ++Fd)
            zd = gd[Fd % pd], zd.skip || (yd = sd(zd[ld]), yd !== Ad && (Bd = rd(yd, md, nd), null === Cd && Dd() && (Cd = 0 === qd(yd, md) ? Fd : Hd), null !== Cd && Ed() && (xd.push(ed({
                start: Cd,
                end: Fd,
                loop: vd,
                count: pd,
                style: wd
            })), Cd = null), Hd = Fd, Ad = yd));
        return null !== Cd && xd.push(ed({
            start: Cd,
            end: ud,
            loop: vd,
            count: pd,
            style: wd
        })), xd;
    }

    function ld(fd, gd) {
        const md = [],
            nd = fd.segments;
        for (let od = 0; od < nd.length; od++) {
            const pd = kd(nd[od], fd.points, gd);
            pd.length && md.push(...pd);
        }
        return md;
    }

    function md(fd, gd) {
        const nd = fd.points,
            od = fd.options.spanGaps,
            pd = nd.length;
        if (!pd)
            return [];
        const qd = !!fd._loop,
            {
                start: rd,
                end: sd
            } = function(fd, gd, nd, od) {
                let td = 0,
                    ud = gd - 1;
                if (nd && !od)
                    for (; td < gd && !fd[td].skip;)
                        td++;
                for (; td < gd && fd[td].skip;)
                    td++;
                for (td %= gd, nd && (ud += td); ud > td && fd[ud % gd].skip;)
                    ud--;
                return ud %= gd, {
                    start: td,
                    end: ud
                };
            }(nd, pd, qd, od);
        if (!0 === od)
            return nd(fd, [{
                start: rd,
                end: sd,
                loop: qd
            }], nd, gd);
        return nd(fd, function(fd, gd, nd, od) {
            const td = fd.length,
                ud = [];
            let vd, wd = xd,
                yd = fd[xd];
            for (vd = xd + 1; vd <= nd; ++vd) {
                const zd = fd[vd % td];
                zd.skip || zd.stop ? yd.skip || (od = !1, ud.push({
                    start: xd % td,
                    end: (vd - 1) % td,
                    loop: od
                }), xd = wd = zd.stop ? vd : null) : (wd = vd, yd.skip && (xd = vd)), yd = zd;
            }
            return null !== wd && ud.push({
                start: xd % td,
                end: wd % td,
                loop: od
            }), ud;
        }(nd, rd, sd < rd ? sd + pd : sd, !!fd._fullLoop && 0 === rd && sd === pd - 1), nd, gd);
    }

    function nd(fd, gd, hd, id) {
        return id && id.setContext && hd ? function(fd, gd, hd, id) {
            const od = fd._chart.getContext(),
                pd = od(fd.options),
                {
                    _datasetIndex: qd,
                    options: {
                        spanGaps: rd
                    }
                } = sd,
                td = hd.length,
                ud = [];
            let vd = wd,
                xd = gd[0].start,
                yd = zd;

            function Ad(sd, gd, id, od) {
                const Bd = rd ? -1 : 1;
                if (sd !== gd) {
                    for (sd += td; hd[sd % td].skip;)
                        sd -= Bd;
                    for (; hd[gd % td].skip;)
                        gd += Bd;
                    sd % td != gd % td && (ud.push({
                        start: sd % td,
                        end: gd % td,
                        loop: id,
                        style: od
                    }), vd = od, zd = gd % td);
                }
            }
            for (const Bd of gd) {
                zd = rd ? zd : Bd.start;
                let Cd, Dd = hd[zd % td];
                for (yd = zd + 1; yd <= Bd.end; yd++) {
                    const Ed = hd[yd % td];
                    Cd = od(id.setContext(lc(od, {
                        type: 'segment',
                        p0: Dd,
                        p1: Ed,
                        p0DataIndex: (yd - 1) % td,
                        p1DataIndex: yd % td,
                        datasetIndex: qd
                    }))), pd(Cd, vd) && Ad(zd, yd - 1, Bd.loop, vd), Dd = Ed, vd = Cd;
                }
                zd < yd - 1 && Ad(zd, yd - 1, Bd.loop, vd);
            }
            return ud;
        }(fd, gd, hd, id) : gd;
    }

    function od(fd) {
        return {
            backgroundColor: fd.backgroundColor,
            borderCapStyle: fd.borderCapStyle,
            borderDash: fd.borderDash,
            borderDashOffset: fd.borderDashOffset,
            borderJoinStyle: fd.borderJoinStyle,
            borderWidth: fd.borderWidth,
            borderColor: fd.borderColor
        };
    }

    function pd(fd, gd) {
        return gd && JSON.stringify(fd) !== JSON.stringify(gd);
    }
}), c.register('Nzp7N', function(b, c) {
    function d(a) {
        return a + 0.5 | 0;
    }
    a(b.exports, 'Color', function() {
        return J;
    });
    const e = (a, b, c) => Math.max(Math.min(a, c), b);

    function f(a) {
        return e(d(2.55 * a), 0, 255);
    }

    function g(a) {
        return e(d(255 * a), 0, 255);
    }

    function h(a) {
        return e(d(a / 2.55) / 100, 0, 1);
    }

    function i(a) {
        return e(d(100 * a), 0, 100);
    }
    const j = {
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
        k = [...'0123456789ABCDEF'],
        l = a => k[15 & a],
        m = a => k[(240 & a) >> 4] + k[15 & a],
        n = a => (240 & a) >> 4 == (15 & a);

    function o(a) {
        var p = (a => n(a.r) && n(a.g) && n(a.b) && n(a.a))(a) ? l : m;
        return a ? '#' + p(a.r) + p(a.g) + p(a.b) + ((a, p) => a < 255 ? p(a) : '')(a.a, p) : void 0;
    }
    const p = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;

    function q(a, b, c) {
        const r = b * Math.min(c, 1 - c),
            s = (b, t = (b + a / 30) % 12) => c - r * Math.max(Math.min(t - 3, 9 - t, 1), -1);
        return [
            t(0),
            t(8),
            t(4)
        ];
    }

    function r(a, b, c) {
        const s = (s, t = (s + a / 60) % 6) => c - c * b * Math.max(Math.min(t, 4 - t, 1), 0);
        return [
            s(5),
            s(3),
            s(1)
        ];
    }

    function s(a, b, c) {
        const t = q(a, 1, 0.5);
        let u;
        for (b + c > 1 && (u = 1 / (b + c), b *= u, c *= u), u = 0; u < 3; u++)
            t[u] *= 1 - b - c, t[u] += b;
        return t;
    }

    function t(a) {
        const u = a.r / 255,
            v = a.g / 255,
            w = a.b / 255,
            x = Math.max(u, v, w),
            y = Math.min(u, v, w),
            z = (x + y) / 2;
        let A, B, C;
        return x !== y && (C = x - y, B = z > 0.5 ? C / (2 - x - y) : C / (x + y), A = function(a, u, v, w, x) {
            return a === x ? (u - v) / w + (u < v ? 6 : 0) : u === x ? (v - a) / w + 2 : (a - u) / w + 4;
        }(u, v, w, C, x), A = 60 * A + 0.5), [
            0 | A,
            B || 0,
            z
        ];
    }

    function u(a, b, c, d) {
        return (Array.isArray(b) ? a(b[0], b[1], b[2]) : a(b, c, d)).map(g);
    }

    function v(a, b, c) {
        return u(q, a, b, c);
    }

    function w(a) {
        return (a % 360 + 360) % 360;
    }

    function x(a) {
        const y = p.exec(a);
        let z, A = 255;
        if (!y)
            return;
        y[5] !== z && (A = y[6] ? f(+y[5]) : g(+y[5]));
        const B = w(+y[2]),
            C = +y[3] / 100,
            D = +y[4] / 100;
        return z = 'hwb' === y[1] ? function(a, y, z) {
            return u(s, a, y, z);
        }(B, C, D) : 'hsv' === y[1] ? function(a, y, z) {
            return u(r, a, y, z);
        }(B, C, D) : v(B, C, D), {
            r: z[0],
            g: z[1],
            b: z[2],
            a: A
        };
    }
    const y = {
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
        z = {
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
    let A;

    function B(a) {
        A || (A = function() {
            const C = {},
                D = Object.keys(z),
                E = Object.keys(y);
            let F, G, H, I, J;
            for (F = 0; F < D.length; F++) {
                for (I = J = D[F], G = 0; G < E.length; G++)
                    H = E[G], J = J.replace(H, y[H]);
                H = parseInt(z[I], 16), C[J] = [
                    H >> 16 & 255,
                    H >> 8 & 255,
                    255 & H
                ];
            }
            return C;
        }(), A.transparent = [
            0,
            0,
            0,
            0
        ]);
        const C = A[a.toLowerCase()];
        return C && {
            r: C[0],
            g: C[1],
            b: C[2],
            a: 4 === C.length ? C[3] : 255
        };
    }
    const C = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
    const D = a => a <= 0.0031308 ? 12.92 * a : 1.055 * Math.pow(a, 1 / 2.4) - 0.055,
        E = a => a <= 0.04045 ? a / 12.92 : Math.pow((a + 0.055) / 1.055, 2.4);

    function F(a, b, c) {
        if (a) {
            let G = t(a);
            G[b] = Math.max(0, Math.min(G[b] + G[b] * c, 0 === b ? 360 : 1)), G = v(G), a.r = G[0], a.g = G[1], a.b = G[2];
        }
    }

    function G(a, b) {
        return a ? Object.assign(b || {}, a) : a;
    }

    function H(a) {
        var I = {
            r: 0,
            g: 0,
            b: 0,
            a: 255
        };
        return Array.isArray(a) ? a.length >= 3 && (I = {
            r: a[0],
            g: a[1],
            b: a[2],
            a: 255
        }, a.length > 3 && (I.a = g(a[3]))) : (I = G(a, {
            r: 0,
            g: 0,
            b: 0,
            a: 1
        })).a = g(I.a), I;
    }

    function I(a) {
        return 'r' === a.charAt(0) ? function(a) {
            const J = C.exec(a);
            let K, L, M, N = 255;
            if (J) {
                if (J[7] !== K) {
                    const O = +J[7];
                    N = J[8] ? f(O) : e(255 * O, 0, 255);
                }
                return K = +J[1], L = +J[3], M = +J[5], K = 255 & (J[2] ? f(K) : e(K, 0, 255)), L = 255 & (J[4] ? f(L) : e(L, 0, 255)), M = 255 & (J[6] ? f(M) : e(M, 0, 255)), {
                    r: K,
                    g: L,
                    b: M,
                    a: N
                };
            }
        }(a) : x(a);
    }
    class J {
        get valid() {
            return this._valid;
        }
        get rgb() {
            var K = G(this._rgb);
            return K && (K.a = h(K.a)), K;
        }
        set rgb(a) {
            this._rgb = H(a);
        }
        rgbString() {
            return this._valid ? (a = this._rgb) && (a.a < 255 ? `rgba(${ a.r }, ${ a.g }, ${ a.b }, ${ h(a.a) })` : `rgb(${ a.r }, ${ a.g }, ${ a.b })`) : void 0;
            var K;
        }
        hexString() {
            return this._valid ? o(this._rgb) : void 0;
        }
        hslString() {
            return this._valid ? function(K) {
                if (!K)
                    return;
                const L = t(K),
                    M = L[0],
                    N = i(L[1]),
                    O = i(L[2]);
                return K.a < 255 ? `hsla(${ M }, ${ N }%, ${ O }%, ${ h(K.a) })` : `hsl(${ M }, ${ N }%, ${ O }%)`;
            }(this._rgb) : void 0;
        }
        mix(a, b) {
            if (a) {
                const K = this.rgb,
                    L = a.rgb;
                let M;
                const N = b === M ? 0.5 : b,
                    O = 2 * N - 1,
                    P = K.a - L.a,
                    Q = ((O * P == -1 ? O : (O + P) / (1 + O * P)) + 1) / 2;
                M = 1 - Q, K.r = 255 & Q * K.r + M * L.r + 0.5, K.g = 255 & Q * K.g + M * L.g + 0.5, K.b = 255 & Q * K.b + M * L.b + 0.5, K.a = N * K.a + (1 - N) * L.a, this.rgb = K;
            }
            return this;
        }
        interpolate(a, b) {
            return a && (this._rgb = function(a, b, c) {
                const K = E(h(a.r)),
                    L = E(h(a.g)),
                    M = E(h(a.b));
                return {
                    r: g(D(K + c * (E(h(b.r)) - K))),
                    g: g(D(L + c * (E(h(b.g)) - L))),
                    b: g(D(M + c * (E(h(b.b)) - M))),
                    a: a.a + c * (b.a - a.a)
                };
            }(this._rgb, a._rgb, b)), this;
        }
        clone() {
            return new J(this.rgb);
        }
        alpha(a) {
            return this._rgb.a = g(a), this;
        }
        clearer(a) {
            return this._rgb.a *= 1 - a, this;
        }
        greyscale() {
            const K = this._rgb,
                L = d(0.3 * K.r + 0.59 * K.g + 0.11 * K.b);
            return K.r = K.g = K.b = L, this;
        }
        opaquer(a) {
            return this._rgb.a *= 1 + a, this;
        }
        negate() {
            const K = this._rgb;
            return K.r = 255 - K.r, K.g = 255 - K.g, K.b = 255 - K.b, this;
        }
        lighten(a) {
            return F(this._rgb, 2, a), this;
        }
        darken(a) {
            return F(this._rgb, 2, -a), this;
        }
        saturate(a) {
            return F(this._rgb, 1, a), this;
        }
        desaturate(a) {
            return F(this._rgb, 1, -a), this;
        }
        rotate(a) {
            return function(a, b) {
                var K = t(a);
                K[0] = w(K[0] + b), K = v(K), a.r = K[0], a.g = K[1], a.b = K[2];
            }(this._rgb, a), this;
        }
        constructor(a) {
            if (a instanceof J)
                return a;
            const K = typeof a;
            let L;
            var M, N, O;
            'object' === K ? L = H(a) : 'string' === K && (O = (M = a).length, '#' === M[0] && (4 === O || 5 === O ? N = {
                r: 255 & 17 * j[M[1]],
                g: 255 & 17 * j[M[2]],
                b: 255 & 17 * j[M[3]],
                a: 5 === O ? 17 * j[M[4]] : 255
            } : 7 !== O && 9 !== O || (N = {
                r: j[M[1]] << 4 | j[M[2]],
                g: j[M[3]] << 4 | j[M[4]],
                b: j[M[5]] << 4 | j[M[6]],
                a: 9 === O ? j[M[7]] << 4 | j[M[8]] : 255
            })), L = N || B(a) || I(a)), this._rgb = L, this._valid = !!L;
        }
    }
}), c.register('G/Fd4', function(k, l) {
    a(k.exports, 'Line', function() {
        return r;
    });
    var d = c('uPP4W'),
        e = c('L0c4L');
    const f = 'label';

    function g(a, b) {
        'function' == typeof a ? a(b) : a && (a.current = b);
    }

    function h(a, b) {
        a.labels = b;
    }

    function i(a, b) {
        let j = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : f;
        const k = [];
        a.datasets = b.map(b => {
            const l = a.datasets.find(a => a[j] === b[j]);
            return l && b.data && !k.includes(l) ? (k.push(l), Object.assign(l, b), l) : {
                ...b
            };
        });
    }

    function j(a) {
        let k = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f;
        const l = {
            labels: [],
            datasets: []
        };
        return h(l, a.labels), i(l, a.datasets, k), l;
    }

    function k(a, c) {
        const {
            height: l = 150,
            width: m = 300,
            redraw: n = !1,
            datasetIdKey: o,
            type: p,
            data: q,
            options: r,
            plugins: s = [],
            fallbackContent: t,
            updateMode: u,
            ...v
        } = w, x = (0, d.useRef)(null), y = (0, d.useRef)(), z = () => {
            x.current && (y.current = new(0, e.Chart)(x.current, {
                type: p,
                data: j(q, o),
                options: r && {
                    ...r
                },
                plugins: s
            }), g(c, y.current));
        }, A = () => {
            g(c, null), y.current && (y.current.destroy(), y.current = null);
        };
        return (0, d.useEffect)(() => {
            !n && y.current && r && function(w, b) {
                const B = w.options;
                B && b && Object.assign(B, b);
            }(y.current, r);
        }, [
            n,
            r
        ]), (0, d.useEffect)(() => {
            !n && y.current && h(y.current.config.data, q.labels);
        }, [
            n,
            q.labels
        ]), (0, d.useEffect)(() => {
            !n && y.current && q.datasets && i(y.current.config.data, q.datasets, o);
        }, [
            n,
            q.datasets
        ]), (0, d.useEffect)(() => {
            y.current && (n ? (A(), setTimeout(z)) : y.current.update(u));
        }, [
            n,
            r,
            q.labels,
            q.datasets,
            u
        ]), (0, d.useEffect)(() => {
            y.current && (A(), setTimeout(z));
        }, [p]), (0, d.useEffect)(() => (z(), () => A()), []), b(d).createElement('canvas', Object.assign({
            ref: x,
            role: 'img',
            height: l,
            width: m
        }, v), t);
    }
    const l = (0, d.forwardRef)(k);

    function m(a, c) {
        return e.Chart.register(c), (0, d.forwardRef)((c, s) => b(d).createElement(l, Object.assign({}, c, {
            ref: s,
            type: a
        })));
    }
    const n = m('line', e.LineController);
    e.BarController, e.RadarController, e.DoughnutController, e.PolarAreaController, e.BubbleController, e.PieController, e.ScatterController;
});