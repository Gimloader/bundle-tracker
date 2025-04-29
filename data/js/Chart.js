function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}

function b(c) {
    return c && c.__esModule ? c.default : c;
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('8Q5Um', function(d, e) {
    var f;
    f = d.exports, Object.defineProperty(f, '__esModule', {
        value: !0,
        configurable: !0
    }), a(d.exports, 'default', function() {
        return _t;
    });
    var g = c('gRbUn'),
        h = c('O0Kav'),
        i = c('CtTXA'),
        j = c('j60gs'),
        k = c('/4RRY'),
        l = c('9zaF+'),
        m = c('bQWYI'),
        n = c('u4s09'),
        o = c('wsTfV');
    let p, q, r = a => a;
    i.Chart.register(i.CategoryScale, i.LinearScale, i.PointElement, i.LineElement);
    const s = {
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
    var _t = a => {
        const u = h.useRef(null),
            v = h.useRef(null),
            [w] = (0, m.default)(u),
            x = h.useRef(0),
            y = h.useMemo(() => ({
                labels: [x.current],
                datasets: [{
                    data: [a.balance],
                    borderColor: o.default.White,
                    borderWidth: 3,
                    pointRadius: 10,
                    pointBackgroundColor: o.default.Gold,
                    tension: 0
                }]
            }), []),
            z = h.useCallback(() => {
                const A = v.current;
                if (!A)
                    return;
                const B = Math.max(1, Math.round(w / 60));
                A.options.scales.x.min = Math.max(0, x.current - B);
                const C = A.data.datasets[0].data,
                    D = Math.max(...C) || 0,
                    E = (0, l.takeRight)(C, B + 1),
                    F = Math.min(...E) || 0;
                let G = F;
                if (F < 0) {
                    const H = Math.abs(F).toString().split('');
                    G = 1 === H.length ? 0 : Number(H.map((H, B) => 0 === B ? '1' : 0).join(''));
                }
                A.options.scales.y.min = G - 1, A.options.scales.y.max = Math.max(D + 1, 1.05 * D);
            }, [w]);
        return h.useEffect(() => {
            var A;
            z(), null === (A = v.current) || void 0 === A || A.update();
        }, [w]), (0, k.useIntervalWhen)(() => {
            const A = v.current;
            A && (A.data.labels.push(x.current++), A.data.datasets[0].data.push(a.balance), z(), A.update());
        }, 5000), (0, g.jsx)(_u, {
            children: (0, g.jsx)(_v, {
                ref: u,
                children: (0, g.jsx)(j.Line, {
                    ref: v,
                    options: s,
                    data: y
                })
            })
        });
    };
    const _u = n.default.div.attrs({
            className: 'flex vc'
        })(p || (p = r`
  min-height: 0px;
  flex: 1;
  z-index: 0;
  overflow: hidden;
`)),
        _v = n.default.div.attrs({
            className: 'maxWidth'
        })(q || (q = r`
  height: 90%;
  pointer-events: none;
`));
}), c.register('CtTXA', function(d, e) {
    a(d.exports, 'BarController', function() {
        return _H;
    }), a(d.exports, 'BubbleController', function() {
        return _I;
    }), a(d.exports, 'DoughnutController', function() {
        return _J;
    }), a(d.exports, 'LineController', function() {
        return _K;
    }), a(d.exports, 'PolarAreaController', function() {
        return _L;
    }), a(d.exports, 'PieController', function() {
        return _M;
    }), a(d.exports, 'RadarController', function() {
        return _N;
    }), a(d.exports, 'ScatterController', function() {
        return _O;
    }), a(d.exports, 'Chart', function() {
        return _lc;
    }), a(d.exports, 'LineElement', function() {
        return _Ac;
    }), a(d.exports, 'PointElement', function() {
        return _Cc;
    }), a(d.exports, 'CategoryScale', function() {
        return _$c;
    }), a(d.exports, 'LinearScale', function() {
        return _cd;
    });
    var f = c('s/YA9'),
        g = c('Ib1eT');
    g = c('Ib1eT');
    class h {
        _notify(i, j, k, l) {
            const m = j.listeners[l],
                n = j.duration;
            m.forEach(l => l({
                chart: i,
                initial: j.initial,
                numSteps: n,
                currentStep: Math.min(k - j.start, n)
            }));
        }
        _refresh() {
            this._request || (this._running = !0, this._request = g.r.call(window, () => {
                this._update(), this._request = null, this._running && this._refresh();
            }));
        }
        _update(i = Date.now()) {
            let j = 0;
            this._charts.forEach((c, e) => {
                if (!c.running || !c.items.length)
                    return;
                const k = c.items;
                let l, m = k.length - 1,
                    n = !1;
                for (; m >= 0; --m)
                    l = k[m], l._active ? (l._total > c.duration && (c.duration = l._total), l.tick(i), n = !0) : (k[m] = k[k.length - 1], k.pop());
                n && (e.draw(), this._notify(e, c, i, 'progress')), k.length || (c.running = !1, this._notify(e, c, i, 'complete'), c.initial = !1), j += k.length;
            }), this._lastDate = i, 0 === j && (this._running = !1);
        }
        _getAnims(i) {
            const j = this._charts;
            let k = j.get(i);
            return k || (k = {
                running: !1,
                initial: !0,
                items: [],
                listeners: {
                    complete: [],
                    progress: []
                }
            }, j.set(i, k)), k;
        }
        listen(i, j, k) {
            this._getAnims(i).listeners[j].push(k);
        }
        add(i, j) {
            j && j.length && this._getAnims(i).items.push(...j);
        }
        has(i) {
            return this._getAnims(i).items.length > 0;
        }
        start(i) {
            const j = this._charts.get(i);
            j && (j.running = !0, j.start = Date.now(), j.duration = j.items.reduce((i, j) => Math.max(i, j._duration), 0), this._refresh());
        }
        running(i) {
            if (!this._running)
                return !1;
            const j = this._charts.get(i);
            return !!(j && j.running && j.items.length);
        }
        stop(i) {
            const j = this._charts.get(i);
            if (!j || !j.items.length)
                return;
            const k = j.items;
            let l = k.length - 1;
            for (; l >= 0; --l)
                k[l].cancel();
            j.items = [], this._notify(i, j, Date.now(), 'complete');
        }
        remove(i) {
            return this._charts.delete(i);
        }
        constructor() {
            this._request = null, this._charts = new Map(), this._running = !1, this._lastDate = void 0;
        }
    }
    var i = new h();
    const j = 'transparent',
        k = {
            boolean: (a, d, c) => c > 0.5 ? d : a,
            color(l, m, n) {
                const o = (0, g.c)(l || j),
                    p = o.valid && (0, g.c)(m || j);
                return p && p.valid ? p.mix(o, n).hexString() : m;
            },
            number: (a, d, c) => a + (d - a) * c
        };
    class l {
        active() {
            return this._active;
        }
        update(m, n, o) {
            if (this._active) {
                this._notify(!1);
                const p = this._target[this._prop],
                    q = o - this._start,
                    r = this._duration - q;
                this._start = o, this._duration = Math.floor(Math.max(r, m.duration)), this._total += q, this._loop = !!m.loop, this._to = (0, g.a)([
                    m.to,
                    n,
                    p,
                    m.from
                ]), this._from = (0, g.a)([
                    m.from,
                    p,
                    n
                ]);
            }
        }
        cancel() {
            this._active && (this.tick(Date.now()), this._active = !1, this._notify(!1));
        }
        tick(m) {
            const n = m - this._start,
                o = this._duration,
                p = this._prop,
                q = this._from,
                r = this._loop,
                s = this._to;
            let t;
            if (this._active = q !== s && (r || n < o), !this._active)
                return this._target[p] = s, void this._notify(!0);
            n < 0 ? this._target[p] = q : (t = n / o % 2, t = r && t > 1 ? 2 - t : t, t = this._easing(Math.min(1, Math.max(0, t))), this._target[p] = this._fn(q, s, t));
        }
        wait() {
            const m = this._promises || (this._promises = []);
            return new Promise((d, c) => {
                m.push({
                    res: d,
                    rej: c
                });
            });
        }
        _notify(m) {
            const n = m ? 'res' : 'rej',
                o = this._promises || [];
            for (let p = 0; p < o.length; p++)
                o[p][n]();
        }
        constructor(m, n, o, p) {
            const q = n[o];
            p = (0, g.a)([
                m.to,
                p,
                q,
                m.from
            ]);
            const r = (0, g.a)([
                m.from,
                q,
                p
            ]);
            this._active = !0, this._fn = m.fn || k[m.type || typeof r], this._easing = g.e[m.easing] || g.e.linear, this._start = Math.floor(Date.now() + (m.delay || 0)), this._duration = this._total = Math.floor(m.duration), this._loop = !!m.loop, this._target = n, this._prop = o, this._from = r, this._to = p, this._promises = void 0;
        }
    }
    class m {
        configure(n) {
            if (!(0, g.i)(n))
                return;
            const o = Object.keys(g.d.animation),
                p = this._properties;
            Object.getOwnPropertyNames(n).forEach(e => {
                const q = n[e];
                if (!(0, g.i)(q))
                    return;
                const r = {};
                for (const s of o)
                    r[s] = q[s];
                ((0, g.b)(q.properties) && q.properties || [e]).forEach(s => {
                    s !== e && p.has(s) || p.set(s, r);
                });
            });
        }
        _animateOptions(n, o) {
            const p = o.options,
                q = function(r, s) {
                    if (!s)
                        return;
                    let t = r.options;
                    if (!t)
                        return void(r.options = s);
                    t.$shared && (r.options = t = Object.assign({}, t, {
                        $shared: !1,
                        $animations: {}
                    }));
                    return t;
                }(n, p);
            if (!q)
                return [];
            const r = this._createAnimations(q, p);
            return p.$shared && function(s, t) {
                const u = [],
                    v = Object.keys(t);
                for (let w = 0; w < v.length; w++) {
                    const x = s[v[w]];
                    x && x.active() && u.push(x.wait());
                }
                return Promise.all(u);
            }(n.options.$animations, p).then(() => {
                n.options = p;
            }, () => {}), r;
        }
        _createAnimations(n, o) {
            const p = this._properties,
                q = [],
                r = n.$animations || (n.$animations = {}),
                s = Object.keys(o),
                t = Date.now();
            let u;
            for (u = s.length - 1; u >= 0; --u) {
                const v = s[u];
                if ('$' === v.charAt(0))
                    continue;
                if ('options' === v) {
                    q.push(...this._animateOptions(n, o));
                    continue;
                }
                const w = o[v];
                let x = r[v];
                const y = p.get(v);
                if (x) {
                    if (y && x.active()) {
                        x.update(y, w, t);
                        continue;
                    }
                    x.cancel();
                }
                y && y.duration ? (r[v] = x = new l(y, n, v, w), q.push(x)) : n[v] = w;
            }
            return q;
        }
        update(n, o) {
            if (0 === this._properties.size)
                return void Object.assign(n, o);
            const p = this._createAnimations(n, o);
            return p.length ? (i.add(this._chart, p), !0) : void 0;
        }
        constructor(n, o) {
            this._chart = n, this._properties = new Map(), this.configure(o);
        }
    }

    function n(o, p) {
        const q = o && o.options || {},
            r = q.reverse,
            s = void 0 === q.min ? p : 0,
            t = void 0 === q.max ? p : 0;
        return {
            start: r ? t : s,
            end: r ? s : t
        };
    }

    function o(p, q) {
        const r = [],
            s = p._getSortedDatasetMetas(q);
        let t, u;
        for (t = 0, u = s.length; t < u; ++t)
            r.push(s[t].index);
        return r;
    }

    function p(q, r, s, t = {}) {
        const u = q.keys,
            v = 'single' === t.mode;
        let w, x, y, z;
        if (null !== r) {
            for (w = 0, x = u.length; w < x; ++w) {
                if (y = +u[w], y === s) {
                    if (t.all)
                        continue;
                    break;
                }
                z = q.values[y], (0, g.g)(z) && (v || 0 === r || (0, g.s)(r) === (0, g.s)(z)) && (r += z);
            }
            return r;
        }
    }

    function q(r, s) {
        const t = r && r.options.stacked;
        return t || void 0 === t && void 0 !== s.stack;
    }

    function r(s, t, u) {
        const v = s[t] || (s[t] = {});
        return v[u] || (v[u] = {});
    }

    function s(t, u, v, w) {
        for (const x of u.getMatchingVisibleMetas(w).reverse()) {
            const y = t[x.index];
            if (v && y > 0 || !v && y < 0)
                return x.index;
        }
        return null;
    }

    function t(u, v) {
        const {
            chart: w,
            _cachedMeta: x
        } = u, y = w._stacks || (w._stacks = {}), {
            iScale: z,
            vScale: A,
            index: B
        } = x, C = z.axis, D = A.axis, E = function(F, G, H) {
            return `${ F.id }.${ G.id }.${ H.stack || H.type }`;
        }(z, A, x), F = v.length;
        let G;
        for (let H = 0; H < F; ++H) {
            const I = v[H],
                {
                    [J]: K,
                    [L]: M
                } = I;
            G = (I._stacks || (I._stacks = {}))[L] = r(y, E, K), G[B] = M, G._top = s(G, A, !0, x.type), G._bottom = s(G, A, !1, x.type);
            (G._visualValues || (G._visualValues = {}))[B] = M;
        }
    }

    function u(v, w) {
        const x = v.scales;
        return Object.keys(x).filter(v => x[v].axis === w).shift();
    }

    function v(w, x) {
        const y = w.controller.index,
            z = w.vScale && w.vScale.axis;
        if (z) {
            x = x || w._parsed;
            for (const A of x) {
                const B = A._stacks;
                if (!B || void 0 === B[z] || void 0 === B[z][y])
                    return;
                delete B[z][y], void 0 !== B[z]._visualValues && void 0 !== B[z]._visualValues[y] && delete B[z]._visualValues[y];
            }
        }
    }
    const w = a => 'reset' === a || 'none' === a,
        x = (a, d) => d ? a : Object.assign({}, a);
    class y {
        initialize() {
            const z = this._cachedMeta;
            this.configure(), this.linkScales(), z._stacked = q(z.vScale, z), this.addElements(), this.options.fill && !this.chart.isPluginEnabled('filler') && console.warn('Tried to use the \'fill\' option without the \'Filler\' plugin enabled. Please import and register the \'Filler\' plugin and make sure it is not disabled in the options');
        }
        updateIndex(z) {
            this.index !== z && v(this._cachedMeta), this.index = z;
        }
        linkScales() {
            const z = this.chart,
                A = this._cachedMeta,
                B = this.getDataset(),
                C = (z, A, B, C) => 'x' === z ? A : 'r' === z ? C : B,
                D = A.xAxisID = (0, g.v)(B.xAxisID, u(z, 'x')),
                E = A.yAxisID = (0, g.v)(B.yAxisID, u(z, 'y')),
                F = A.rAxisID = (0, g.v)(B.rAxisID, u(z, 'r')),
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
        getScaleForId(z) {
            return this.chart.scales[z];
        }
        _getOtherScale(z) {
            const A = this._cachedMeta;
            return z === A.iScale ? A.vScale : A.iScale;
        }
        reset() {
            this._update('reset');
        }
        _destroy() {
            const z = this._cachedMeta;
            this._data && (0, g.u)(this._data, this), z._stacked && v(z);
        }
        _dataCheck() {
            const z = this.getDataset(),
                A = z.data || (z.data = []),
                B = this._data;
            if ((0, g.i)(A))
                this._data = function(C) {
                    const D = Object.keys(C),
                        E = new Array(D.length);
                    let F, G, H;
                    for (F = 0, G = D.length; F < G; ++F)
                        H = D[F], E[F] = {
                            x: H,
                            y: C[H]
                        };
                    return E;
                }(A);
            else if (B !== A) {
                if (B) {
                    (0, g.u)(B, this);
                    const C = this._cachedMeta;
                    v(C), C._parsed = [];
                }
                A && Object.isExtensible(A) && (0, g.l)(A, this), this._syncList = [], this._data = A;
            }
        }
        addElements() {
            const z = this._cachedMeta;
            this._dataCheck(), this.datasetElementType && (z.dataset = new this.datasetElementType());
        }
        buildOrUpdateElements(z) {
            const A = this._cachedMeta,
                B = this.getDataset();
            let C = !1;
            this._dataCheck();
            const D = A._stacked;
            A._stacked = q(A.vScale, A), A.stack !== B.stack && (C = !0, v(A), A.stack = B.stack), this._resyncElements(z), (C || D !== A._stacked) && t(this, A._parsed);
        }
        configure() {
            const z = this.chart.config,
                A = z.datasetScopeKeys(this._type),
                B = z.getOptionScopes(this.getDataset(), A, !0);
            this.options = z.createResolver(B, this.getContext()), this._parsing = this.options.parsing, this._cachedDataOpts = {};
        }
        parse(z, A) {
            const {
                _cachedMeta: B,
                _data: C
            } = this, {
                iScale: D,
                _stacked: E
            } = B, F = D.axis;
            let G, H, I, J = 0 === z && A === C.length || B._sorted,
                K = z > 0 && B._parsed[z - 1];
            if (!1 === this._parsing)
                B._parsed = C, B._sorted = !0, I = C;
            else {
                I = (0, g.b)(C[z]) ? this.parseArrayData(B, C, z, A) : (0, g.i)(C[z]) ? this.parseObjectData(B, C, z, A) : this.parsePrimitiveData(B, C, z, A);
                const L = () => null === H[F] || K && H[F] < K[F];
                for (G = 0; G < A; ++G)
                    B._parsed[G + z] = H = I[G], J && (L() && (J = !1), K = H);
                B._sorted = J;
            }
            E && t(this, I);
        }
        parsePrimitiveData(z, A, B, C) {
            const {
                iScale: D,
                vScale: E
            } = z, F = D.axis, G = E.axis, H = D.getLabels(), I = D === E, J = new Array(C);
            let K, L, M;
            for (K = 0, L = C; K < L; ++K)
                M = K + B, J[K] = {
                    [F]: I || D.parse(H[M], M),
                    [G]: E.parse(A[M], M)
                };
            return J;
        }
        parseArrayData(z, A, B, C) {
            const {
                xScale: D,
                yScale: E
            } = z, F = new Array(C);
            let G, H, I, J;
            for (G = 0, H = C; G < H; ++G)
                I = G + B, J = A[I], F[G] = {
                    x: D.parse(J[0], I),
                    y: E.parse(J[1], I)
                };
            return F;
        }
        parseObjectData(z, A, B, C) {
            const {
                xScale: D,
                yScale: E
            } = z, {
                xAxisKey: F = 'x',
                yAxisKey: G = 'y'
            } = this._parsing, H = new Array(C);
            let I, J, K, L;
            for (I = 0, J = C; I < J; ++I)
                K = I + B, L = A[K], H[I] = {
                    x: D.parse((0, g.f)(L, F), K),
                    y: E.parse((0, g.f)(L, G), K)
                };
            return H;
        }
        getParsed(z) {
            return this._cachedMeta._parsed[z];
        }
        getDataElement(z) {
            return this._cachedMeta.data[z];
        }
        applyStack(z, A, B) {
            const C = this.chart,
                D = this._cachedMeta,
                E = A[z.axis];
            return p({
                keys: o(C, !0),
                values: A._stacks[z.axis]._visualValues
            }, E, D.index, {
                mode: B
            });
        }
        updateRangeFromParsed(z, A, B, C) {
            const D = B[A.axis];
            let E = null === D ? NaN : D;
            const F = C && B._stacks[A.axis];
            C && F && (C.values = F, E = p(C, D, this._cachedMeta.index)), z.min = Math.min(z.min, E), z.max = Math.max(z.max, E);
        }
        getMinMax(z, A) {
            const B = this._cachedMeta,
                C = B._parsed,
                D = B._sorted && z === B.iScale,
                E = C.length,
                F = this._getOtherScale(z),
                G = ((z, A, B) => z && !A.hidden && A._stacked && {
                    keys: o(B, !0),
                    values: null
                })(A, B, this.chart),
                H = {
                    min: Number.POSITIVE_INFINITY,
                    max: Number.NEGATIVE_INFINITY
                },
                {
                    min: I,
                    max: J
                } = function(K) {
                    const {
                        min: L,
                        max: M,
                        minDefined: N,
                        maxDefined: O
                    } = K.getUserBounds();
                    return {
                        min: N ? L : Number.NEGATIVE_INFINITY,
                        max: O ? M : Number.POSITIVE_INFINITY
                    };
                }(F);
            let K, L;

            function M() {
                L = C[K];
                const N = L[F.axis];
                return !(0, g.g)(L[z.axis]) || I > N || J < N;
            }
            for (K = 0; K < E && (M() || (this.updateRangeFromParsed(H, z, L, G), !D)); ++K);
            if (D)
                for (K = E - 1; K >= 0; --K)
                    if (!M()) {
                        this.updateRangeFromParsed(H, z, L, G);
                        break;
                    }
            return H;
        }
        getAllParsedValues(z) {
            const A = this._cachedMeta._parsed,
                B = [];
            let C, D, E;
            for (C = 0, D = A.length; C < D; ++C)
                E = A[C][z.axis], (0, g.g)(E) && B.push(E);
            return B;
        }
        getMaxOverflow() {
            return !1;
        }
        getLabelAndValue(z) {
            const A = this._cachedMeta,
                B = A.iScale,
                C = A.vScale,
                D = this.getParsed(z);
            return {
                label: B ? '' + B.getLabelForValue(D[B.axis]) : '',
                value: C ? '' + C.getLabelForValue(D[C.axis]) : ''
            };
        }
        _update(z) {
            const A = this._cachedMeta;
            this.update(z || 'default'), A._clip = function(B) {
                let C, D, E, F;
                return (0, g.i)(B) ? (C = B.top, D = B.right, E = B.bottom, F = B.left) : C = D = E = F = B, {
                    top: C,
                    right: D,
                    bottom: E,
                    left: F,
                    disabled: !1 === B
                };
            }((0, g.v)(this.options.clip, function(B, C, D) {
                if (!1 === D)
                    return !1;
                const E = n(B, D),
                    F = n(C, D);
                return {
                    top: F.end,
                    right: E.end,
                    bottom: F.start,
                    left: E.start
                };
            }(A.xScale, A.yScale, this.getMaxOverflow())));
        }
        update(z) {}
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
        getStyle(z, A) {
            const B = A ? 'active' : 'default';
            return void 0 === z && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(B) : this.resolveDataElementOptions(z || 0, B);
        }
        getContext(z, A, B) {
            const C = this.getDataset();
            let D;
            if (z >= 0 && z < this._cachedMeta.data.length) {
                const E = this._cachedMeta.data[z];
                D = E.$context || (E.$context = function(F, G, H) {
                    return (0, g.j)(F, {
                        active: !1,
                        dataIndex: G,
                        parsed: void 0,
                        raw: void 0,
                        element: H,
                        index: G,
                        mode: 'default',
                        type: 'data'
                    });
                }(this.getContext(), z, E)), D.parsed = this.getParsed(z), D.raw = C.data[z], D.index = D.dataIndex = z;
            } else
                D = this.$context || (this.$context = function(E, F) {
                    return (0, g.j)(E, {
                        active: !1,
                        dataset: void 0,
                        datasetIndex: F,
                        index: F,
                        mode: 'default',
                        type: 'dataset'
                    });
                }(this.chart.getContext(), this.index)), D.dataset = C, D.index = D.datasetIndex = this.index;
            return D.active = !!A, D.mode = B, D;
        }
        resolveDatasetElementOptions(z) {
            return this._resolveElementOptions(this.datasetElementType.id, z);
        }
        resolveDataElementOptions(z, A) {
            return this._resolveElementOptions(this.dataElementType.id, A, z);
        }
        _resolveElementOptions(z, A = 'default', B) {
            const C = 'active' === A,
                D = this._cachedDataOpts,
                E = z + '-' + A,
                F = D[E],
                G = this.enableOptionSharing && (0, g.h)(B);
            if (F)
                return x(F, G);
            const H = this.chart.config,
                I = H.datasetElementScopeKeys(this._type, z),
                J = C ? [
                    `${ z }Hover`,
                    'hover',
                    z,
                    ''
                ] : [
                    z,
                    ''
                ],
                K = H.getOptionScopes(this.getDataset(), I),
                L = Object.keys(g.d.elements[z]),
                M = H.resolveNamedOptions(K, L, () => this.getContext(B, C, A), J);
            return M.$shared && (M.$shared = G, D[E] = Object.freeze(x(M, G))), M;
        }
        _resolveAnimations(z, A, B) {
            const C = this.chart,
                D = this._cachedDataOpts,
                E = `animation-${ A }`,
                F = D[E];
            if (F)
                return F;
            let G;
            if (!1 !== C.options.animation) {
                const H = this.chart.config,
                    I = H.datasetAnimationScopeKeys(this._type, A),
                    J = H.getOptionScopes(this.getDataset(), I);
                G = H.createResolver(J, this.getContext(z, B, A));
            }
            const H = new m(C, G && G.animations);
            return G && G._cacheable && (D[E] = Object.freeze(H)), H;
        }
        getSharedOptions(z) {
            if (z.$shared)
                return this._sharedOptions || (this._sharedOptions = Object.assign({}, z));
        }
        includeOptions(z, A) {
            return !A || w(z) || this.chart._animationsDisabled;
        }
        _getSharedOptions(z, A) {
            const B = this.resolveDataElementOptions(z, A),
                C = this._sharedOptions,
                D = this.getSharedOptions(B),
                E = this.includeOptions(A, D) || D !== C;
            return this.updateSharedOptions(D, A, B), {
                sharedOptions: D,
                includeOptions: E
            };
        }
        updateElement(z, A, B, C) {
            w(C) ? Object.assign(z, B) : this._resolveAnimations(A, C).update(z, B);
        }
        updateSharedOptions(z, A, B) {
            z && !w(A) && this._resolveAnimations(void 0, A).update(z, B);
        }
        _setStyle(z, A, B, C) {
            z.active = C;
            const D = this.getStyle(A, C);
            this._resolveAnimations(A, B, C).update(z, {
                options: !C && this.getSharedOptions(D) || D
            });
        }
        removeHoverStyle(z, A, B) {
            this._setStyle(z, B, 'active', !1);
        }
        setHoverStyle(z, A, B) {
            this._setStyle(z, B, 'active', !0);
        }
        _removeDatasetHoverStyle() {
            const z = this._cachedMeta.dataset;
            z && this._setStyle(z, void 0, 'active', !1);
        }
        _setDatasetHoverStyle() {
            const z = this._cachedMeta.dataset;
            z && this._setStyle(z, void 0, 'active', !0);
        }
        _resyncElements(z) {
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
        _insertElements(z, A, B = !0) {
            const C = this._cachedMeta,
                D = C.data,
                E = z + A;
            let F;
            const G = z => {
                for (z.length += A, F = z.length - 1; F >= E; F--)
                    z[F] = z[F - A];
            };
            for (G(D), F = z; F < E; ++F)
                D[F] = new this.dataElementType();
            this._parsing && G(C._parsed), this.parse(z, A), B && this.updateElements(D, z, A, 'reset');
        }
        updateElements(z, A, B, C) {}
        _removeElements(z, A) {
            const B = this._cachedMeta;
            if (this._parsing) {
                const C = B._parsed.splice(z, A);
                B._stacked && v(B, C);
            }
            B.data.splice(z, A);
        }
        _sync(z) {
            if (this._parsing)
                this._syncList.push(z);
            else {
                const [A, B, C] = z;
                this[A](B, C);
            }
            this.chart._dataChanges.push([
                this.index,
                ...z
            ]);
        }
        _onDataPush() {
            const z = arguments.length;
            this._sync([
                '_insertElements',
                this.getDataset().data.length - z,
                z
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
        _onDataSplice(z, A) {
            A && this._sync([
                '_removeElements',
                z,
                A
            ]);
            const B = arguments.length - 2;
            B && this._sync([
                '_insertElements',
                z,
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
        constructor(z, A) {
            this.chart = z, this._ctx = z.ctx, this.index = A, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = !1, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = !1, this.supportsDecimation = !1, this.$context = void 0, this._syncList = [], this.datasetElementType = new.target.datasetElementType, this.dataElementType = new.target.dataElementType, this.initialize();
        }
    }

    function z(A) {
        const B = A.iScale,
            C = function(D, E) {
                if (!D._cache.$bar) {
                    const F = D.getMatchingVisibleMetas(E);
                    let G = [];
                    for (let H = 0, I = F.length; H < I; H++)
                        G = G.concat(F[H].controller.getAllParsedValues(D));
                    D._cache.$bar = (0, g._)(G.sort((D, H) => D - H));
                }
                return D._cache.$bar;
            }(B, A.type);
        let D, E, F, G, H = B._length;
        const I = () => {
            32767 !== F && -32768 !== F && ((0, g.h)(G) && (H = Math.min(H, Math.abs(F - G) || H)), G = F);
        };
        for (D = 0, E = C.length; D < E; ++D)
            F = B.getPixelForValue(C[D]), I();
        for (G = void 0, D = 0, E = B.ticks.length; D < E; ++D)
            F = B.getPixelForTick(D), I();
        return H;
    }

    function A(B, C, D, E) {
        return (0, g.b)(B) ? function(F, G, H, I) {
            const J = H.parse(F[0], I),
                K = H.parse(F[1], I),
                L = Math.min(J, K),
                M = Math.max(J, K);
            let N = L,
                O = M;
            Math.abs(L) > Math.abs(M) && (N = M, O = L), G[H.axis] = O, G._custom = {
                barStart: N,
                barEnd: O,
                start: J,
                end: K,
                min: L,
                max: M
            };
        }(B, C, D, E) : C[D.axis] = D.parse(B, E), C;
    }

    function B(C, D, E, F) {
        const G = C.iScale,
            H = C.vScale,
            I = G.getLabels(),
            J = G === H,
            K = [];
        let L, M, N, O;
        for (L = E, M = E + F; L < M; ++L)
            O = D[L], N = {}, N[G.axis] = J || G.parse(I[L], L), K.push(A(O, N, H, L));
        return K;
    }

    function C(D) {
        return D && void 0 !== D.barStart && void 0 !== D.barEnd;
    }

    function D(E, F, G, H) {
        let I = F.borderSkipped;
        const J = {};
        if (!I)
            return void(E.borderSkipped = J);
        if (!0 === I)
            return void(E.borderSkipped = {
                top: !0,
                right: !0,
                bottom: !0,
                left: !0
            });
        const {
            start: K,
            end: L,
            reverse: M,
            top: N,
            bottom: O
        } = function(P) {
            let Q, R, S, T, U;
            return P.horizontal ? (Q = P.base > P.x, R = 'left', S = 'right') : (Q = P.base < P.y, R = 'bottom', S = 'top'), Q ? (T = 'end', U = 'start') : (T = 'start', U = 'end'), {
                start: R,
                end: S,
                reverse: Q,
                top: T,
                bottom: U
            };
        }(E);
        'middle' === I && G && (E.enableBorderRadius = !0, (G._top || 0) === H ? I = N : (G._bottom || 0) === H ? I = O : (J[_E(O, K, L, M)] = !0, I = N)), J[_E(I, K, L, M)] = !0, E.borderSkipped = J;
    }

    function _E(F, G, H, I) {
        var J, K, L;
        return I ? (L = H, F = _F(F = (J = F) === (K = G) ? L : J === L ? K : J, H, G)) : F = _F(F, G, H), F;
    }

    function _F(G, H, I) {
        return 'start' === G ? H : 'end' === G ? I : G;
    }

    function G(H, {
        inflateAmount: I
    }, J) {
        H.inflateAmount = 'auto' === I ? 1 === J ? 0.33 : 0 : I;
    }
    (0, f.default)(y, 'defaults', {}), (0, f.default)(y, 'datasetElementType', null), (0, f.default)(y, 'dataElementType', null);
    class _H extends y {
        parsePrimitiveData(I, J, K, L) {
            return B(I, J, K, L);
        }
        parseArrayData(I, J, K, L) {
            return B(I, J, K, L);
        }
        parseObjectData(I, J, K, L) {
            const {
                iScale: M,
                vScale: N
            } = I, {
                xAxisKey: O = 'x',
                yAxisKey: P = 'y'
            } = this._parsing, Q = 'x' === M.axis ? O : P, R = 'x' === N.axis ? O : P, S = [];
            let T, U, V, W;
            for (T = K, U = K + L; T < U; ++T)
                W = J[T], V = {}, V[M.axis] = M.parse((0, g.f)(W, Q), T), S.push(A((0, g.f)(W, R), V, N, T));
            return S;
        }
        updateRangeFromParsed(I, J, K, L) {
            super.updateRangeFromParsed(I, J, K, L);
            const M = K._custom;
            M && J === this._cachedMeta.vScale && (I.min = Math.min(I.min, M.min), I.max = Math.max(I.max, M.max));
        }
        getMaxOverflow() {
            return 0;
        }
        getLabelAndValue(I) {
            const J = this._cachedMeta,
                {
                    iScale: K,
                    vScale: L
                } = J,
                M = this.getParsed(I),
                N = M._custom,
                O = C(N) ? '[' + N.start + ', ' + N.end + ']' : '' + L.getLabelForValue(M[L.axis]);
            return {
                label: '' + K.getLabelForValue(M[K.axis]),
                value: O
            };
        }
        initialize() {
            this.enableOptionSharing = !0, super.initialize();
            this._cachedMeta.stack = this.getDataset().stack;
        }
        update(I) {
            const J = this._cachedMeta;
            this.updateElements(J.data, 0, J.data.length, I);
        }
        updateElements(I, J, K, L) {
            const M = 'reset' === L,
                {
                    index: N,
                    _cachedMeta: {
                        vScale: O
                    }
                } = this,
                P = O.getBasePixel(),
                Q = O.isHorizontal(),
                R = this._getRuler(),
                {
                    sharedOptions: S,
                    includeOptions: T
                } = this._getSharedOptions(J, L);
            for (let U = J; U < J + K; U++) {
                const V = this.getParsed(U),
                    W = M || (0, g.k)(V[O.axis]) ? {
                        base: P,
                        head: P
                    } : this._calculateBarValuePixels(U),
                    X = this._calculateBarIndexPixels(U, R),
                    Y = (V._stacks || {})[O.axis],
                    Z = {
                        horizontal: Q,
                        base: W.base,
                        enableBorderRadius: !Y || C(V._custom) || N === Y._top || N === Y._bottom,
                        x: Q ? W.head : X.center,
                        y: Q ? X.center : W.head,
                        height: Q ? X.size : Math.abs(W.size),
                        width: Q ? Math.abs(W.size) : X.size
                    };
                T && (Z.options = S || this.resolveDataElementOptions(U, I[U].active ? 'active' : L));
                const $ = Z.options || I[U].options;
                D(Z, $, Y, N), G(Z, $, R.ratio), this.updateElement(I[U], U, Z, L);
            }
        }
        _getStacks(I, J) {
            const {
                iScale: K
            } = this._cachedMeta, L = K.getMatchingVisibleMetas(this._type).filter(I => I.controller.options.grouped), M = K.options.stacked, N = [], O = I => {
                const P = I.controller.getParsed(J),
                    Q = P && P[I.vScale.axis];
                if ((0, g.k)(Q) || isNaN(Q))
                    return !0;
            };
            for (const P of L)
                if ((void 0 === J || !O(P)) && ((!1 === M || -1 === N.indexOf(P.stack) || void 0 === M && void 0 === P.stack) && N.push(P.stack), P.index === I))
                    break;
            return N.length || N.push(void 0), N;
        }
        _getStackCount(I) {
            return this._getStacks(void 0, I).length;
        }
        _getStackIndex(I, J, K) {
            const L = this._getStacks(I, K),
                M = void 0 !== J ? L.indexOf(J) : -1;
            return -1 === M ? L.length - 1 : M;
        }
        _getRuler() {
            const I = this.options,
                J = this._cachedMeta,
                K = J.iScale,
                L = [];
            let M, N;
            for (M = 0, N = J.data.length; M < N; ++M)
                L.push(K.getPixelForValue(this.getParsed(M)[K.axis], M));
            const O = I.barThickness;
            return {
                min: O || z(J),
                pixels: L,
                start: K._startPixel,
                end: K._endPixel,
                stackCount: this._getStackCount(),
                scale: K,
                grouped: I.grouped,
                ratio: O ? 1 : I.categoryPercentage * I.barPercentage
            };
        }
        _calculateBarValuePixels(I) {
            const {
                _cachedMeta: {
                    vScale: J,
                    _stacked: K,
                    index: L
                },
                options: {
                    base: M,
                    minBarLength: N
                }
            } = this, O = M || 0, P = this.getParsed(I), Q = P._custom, R = C(Q);
            let S, T, U = P[J.axis],
                V = 0,
                W = K ? this.applyStack(J, P, K) : U;
            W !== U && (V = W - U, W = U), R && (U = Q.barStart, W = Q.barEnd - Q.barStart, 0 !== U && (0, g.s)(U) !== (0, g.s)(Q.barEnd) && (V = 0), V += U);
            const X = (0, g.k)(M) || R ? V : M;
            let Y = J.getPixelForValue(X);
            if (S = this.chart.getDataVisibility(I) ? J.getPixelForValue(V + W) : Y, T = S - Y, Math.abs(T) < N) {
                T = function(Z, $, ab) {
                    return 0 !== Z ? (0, g.s)(Z) : ($.isHorizontal() ? 1 : -1) * ($.min >= ab ? 1 : -1);
                }(T, J, O) * N, U === O && (Y -= T / 2);
                const Z = J.getPixelForDecimal(0),
                    $ = J.getPixelForDecimal(1),
                    ab = Math.min(Z, $),
                    bb = Math.max(Z, $);
                Y = Math.max(Math.min(Y, bb), ab), S = Y + T, K && !R && (P._stacks[J.axis]._visualValues[L] = J.getValueForPixel(S) - J.getValueForPixel(Y));
            }
            if (Y === J.getPixelForValue(O)) {
                const Z = (0, g.s)(T) * J.getLineWidthForValue(O) / 2;
                Y += Z, T -= Z;
            }
            return {
                size: T,
                base: Y,
                head: S,
                center: S + T / 2
            };
        }
        _calculateBarIndexPixels(I, J) {
            const K = J.scale,
                L = this.options,
                M = L.skipNull,
                N = (0, g.v)(L.maxBarThickness, 1 / 0);
            let O, P;
            if (J.grouped) {
                const Q = M ? this._getStackCount(I) : J.stackCount,
                    R = 'flex' === L.barThickness ? function(S, T, U, V) {
                        const W = T.pixels,
                            X = W[S];
                        let Y = S > 0 ? W[S - 1] : null,
                            Z = S < W.length - 1 ? W[S + 1] : null;
                        const $ = U.categoryPercentage;
                        null === Y && (Y = X - (null === Z ? T.end - T.start : Z - X)), null === Z && (Z = X + X - Y);
                        const ab = X - (X - Math.min(Y, Z)) / 2 * $;
                        return {
                            chunk: Math.abs(Z - Y) / 2 * $ / V,
                            ratio: U.barPercentage,
                            start: ab
                        };
                    }(I, J, L, Q) : function(S, T, U, V) {
                        const W = U.barThickness;
                        let X, Y;
                        return (0, g.k)(W) ? (X = T.min * U.categoryPercentage, Y = U.barPercentage) : (X = W * V, Y = 1), {
                            chunk: X / V,
                            ratio: Y,
                            start: T.pixels[S] - X / 2
                        };
                    }(I, J, L, Q),
                    S = this._getStackIndex(this.index, this._cachedMeta.stack, M ? I : void 0);
                O = R.start + R.chunk * S + R.chunk / 2, P = Math.min(N, R.chunk * R.ratio);
            } else
                O = K.getPixelForValue(this.getParsed(I)[K.axis], I), P = Math.min(N, J.min * J.ratio);
            return {
                base: O - P / 2,
                head: O + P / 2,
                center: O,
                size: P
            };
        }
        draw() {
            const I = this._cachedMeta,
                J = I.vScale,
                K = I.data,
                L = K.length;
            let M = 0;
            for (; M < L; ++M)
                null !== this.getParsed(M)[J.axis] && K[M].draw(this._ctx);
        }
    }
    (0, f.default)(_H, 'id', 'bar'), (0, f.default)(_H, 'defaults', {
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
    }), (0, f.default)(_H, 'overrides', {
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
    class _I extends y {
        initialize() {
            this.enableOptionSharing = !0, super.initialize();
        }
        parsePrimitiveData(J, K, L, M) {
            const N = super.parsePrimitiveData(J, K, L, M);
            for (let O = 0; O < N.length; O++)
                N[O]._custom = this.resolveDataElementOptions(O + L).radius;
            return N;
        }
        parseArrayData(J, K, L, M) {
            const N = super.parseArrayData(J, K, L, M);
            for (let O = 0; O < N.length; O++) {
                const P = K[L + O];
                N[O]._custom = (0, g.v)(P[2], this.resolveDataElementOptions(O + L).radius);
            }
            return N;
        }
        parseObjectData(J, K, L, M) {
            const N = super.parseObjectData(J, K, L, M);
            for (let O = 0; O < N.length; O++) {
                const P = K[L + O];
                N[O]._custom = (0, g.v)(P && P.r && +P.r, this.resolveDataElementOptions(O + L).radius);
            }
            return N;
        }
        getMaxOverflow() {
            const J = this._cachedMeta.data;
            let K = 0;
            for (let L = J.length - 1; L >= 0; --L)
                K = Math.max(K, J[L].size(this.resolveDataElementOptions(L)) / 2);
            return K > 0 && K;
        }
        getLabelAndValue(J) {
            const K = this._cachedMeta,
                L = this.chart.data.labels || [],
                {
                    xScale: M,
                    yScale: N
                } = K,
                O = this.getParsed(J),
                P = M.getLabelForValue(O.x),
                Q = N.getLabelForValue(O.y),
                R = O._custom;
            return {
                label: L[J] || '',
                value: '(' + P + ', ' + Q + (R ? ', ' + R : '') + ')'
            };
        }
        update(J) {
            const K = this._cachedMeta.data;
            this.updateElements(K, 0, K.length, J);
        }
        updateElements(J, K, L, M) {
            const N = 'reset' === M,
                {
                    iScale: O,
                    vScale: P
                } = this._cachedMeta,
                {
                    sharedOptions: Q,
                    includeOptions: R
                } = this._getSharedOptions(K, M),
                S = O.axis,
                T = P.axis;
            for (let U = K; U < K + L; U++) {
                const V = J[U],
                    W = !N && this.getParsed(U),
                    X = {},
                    Y = X[S] = N ? O.getPixelForDecimal(0.5) : O.getPixelForValue(W[S]),
                    Z = X[T] = N ? P.getBasePixel() : P.getPixelForValue(W[T]);
                X.skip = isNaN(Y) || isNaN(Z), R && (X.options = Q || this.resolveDataElementOptions(U, V.active ? 'active' : M), N && (X.options.radius = 0)), this.updateElement(V, U, X, M);
            }
        }
        resolveDataElementOptions(J, K) {
            const L = this.getParsed(J);
            let M = super.resolveDataElementOptions(J, K);
            M.$shared && (M = Object.assign({}, M, {
                $shared: !1
            }));
            const N = M.radius;
            return 'active' !== K && (M.radius = 0), M.radius += (0, g.v)(L && L._custom, N), M;
        }
    }
    (0, f.default)(_I, 'id', 'bubble'), (0, f.default)(_I, 'defaults', {
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
    }), (0, f.default)(_I, 'overrides', {
        scales: {
            x: {
                type: 'linear'
            },
            y: {
                type: 'linear'
            }
        }
    });
    class _J extends y {
        linkScales() {}
        parse(K, L) {
            const M = this.getDataset().data,
                N = this._cachedMeta;
            if (!1 === this._parsing)
                N._parsed = M;
            else {
                let O, P, Q = K => +M[K];
                if ((0, g.i)(M[K])) {
                    const {
                        key: R = 'value'
                    } = this._parsing;
                    Q = L => +(0, g.f)(M[L], R);
                }
                for (O = K, P = K + L; O < P; ++O)
                    N._parsed[O] = Q(O);
            }
        }
        _getRotation() {
            return (0, g.t)(this.options.rotation - 90);
        }
        _getCircumference() {
            return (0, g.t)(this.options.circumference);
        }
        _getRotationExtents() {
            let K = g.T,
                L = -g.T;
            for (let M = 0; M < this.chart.data.datasets.length; ++M)
                if (this.chart.isDatasetVisible(M) && this.chart.getDatasetMeta(M).type === this._type) {
                    const N = this.chart.getDatasetMeta(M).controller,
                        O = N._getRotation(),
                        P = N._getCircumference();
                    K = Math.min(K, O), L = Math.max(L, O + P);
                }
            return {
                rotation: K,
                circumference: L - K
            };
        }
        update(K) {
            const L = this.chart,
                {
                    chartArea: M
                } = L,
                N = this._cachedMeta,
                O = N.data,
                P = this.getMaxBorderWidth() + this.getMaxOffset(O) + this.options.spacing,
                Q = Math.max((Math.min(M.width, M.height) - P) / 2, 0),
                R = Math.min((0, g.m)(this.options.cutout, Q), 1),
                S = this._getRingWeight(this.index),
                {
                    circumference: T,
                    rotation: U
                } = this._getRotationExtents(),
                {
                    ratioX: V,
                    ratioY: W,
                    offsetX: X,
                    offsetY: Y
                } = function(Z, $, ab) {
                    let bb = 1,
                        cb = 1,
                        db = 0,
                        eb = 0;
                    if ($ < g.T) {
                        const fb = Z,
                            gb = fb + $,
                            hb = Math.cos(fb),
                            ib = Math.sin(fb),
                            jb = Math.cos(gb),
                            kb = Math.sin(gb),
                            lb = (Z, $, bb) => (0, g.p)(Z, fb, gb, !0) ? 1 : Math.max($, $ * ab, bb, bb * ab),
                            mb = (Z, $, bb) => (0, g.p)(Z, fb, gb, !0) ? -1 : Math.min($, $ * ab, bb, bb * ab),
                            nb = lb(0, hb, jb),
                            ob = lb(g.H, ib, kb),
                            pb = mb(g.P, hb, jb),
                            qb = mb(g.P + g.H, ib, kb);
                        bb = (nb - pb) / 2, cb = (ob - qb) / 2, db = -(nb + pb) / 2, eb = -(ob + qb) / 2;
                    }
                    return {
                        ratioX: bb,
                        ratioY: cb,
                        offsetX: db,
                        offsetY: eb
                    };
                }(U, T, R),
                Z = (M.width - P) / V,
                $ = (M.height - P) / W,
                ab = Math.max(Math.min(Z, $) / 2, 0),
                bb = (0, g.n)(this.options.radius, ab),
                cb = (bb - Math.max(bb * R, 0)) / this._getVisibleDatasetWeightTotal();
            this.offsetX = X * bb, this.offsetY = Y * bb, N.total = this.calculateTotal(), this.outerRadius = bb - cb * this._getRingWeightOffset(this.index), this.innerRadius = Math.max(this.outerRadius - cb * S, 0), this.updateElements(O, 0, O.length, K);
        }
        _circumference(K, L) {
            const M = this.options,
                N = this._cachedMeta,
                O = this._getCircumference();
            return L && M.animation.animateRotate || !this.chart.getDataVisibility(K) || null === N._parsed[K] || N.data[K].hidden ? 0 : this.calculateCircumference(N._parsed[K] * O / g.T);
        }
        updateElements(K, L, M, N) {
            const O = 'reset' === N,
                P = this.chart,
                Q = P.chartArea,
                R = P.options.animation,
                S = (Q.left + Q.right) / 2,
                T = (Q.top + Q.bottom) / 2,
                U = O && R.animateScale,
                V = U ? 0 : this.innerRadius,
                W = U ? 0 : this.outerRadius,
                {
                    sharedOptions: X,
                    includeOptions: Y
                } = this._getSharedOptions(L, N);
            let Z, $ = this._getRotation();
            for (Z = 0; Z < L; ++Z)
                $ += this._circumference(Z, O);
            for (Z = L; Z < L + M; ++Z) {
                const ab = this._circumference(Z, O),
                    bb = K[Z],
                    cb = {
                        x: S + this.offsetX,
                        y: T + this.offsetY,
                        startAngle: $,
                        endAngle: $ + ab,
                        circumference: ab,
                        outerRadius: W,
                        innerRadius: V
                    };
                Y && (cb.options = X || this.resolveDataElementOptions(Z, bb.active ? 'active' : N)), $ += ab, this.updateElement(bb, Z, cb, N);
            }
        }
        calculateTotal() {
            const K = this._cachedMeta,
                L = K.data;
            let M, N = 0;
            for (M = 0; M < L.length; M++) {
                const O = K._parsed[M];
                null === O || isNaN(O) || !this.chart.getDataVisibility(M) || L[M].hidden || (N += Math.abs(O));
            }
            return N;
        }
        calculateCircumference(K) {
            const L = this._cachedMeta.total;
            return L > 0 && !isNaN(K) ? g.T * (Math.abs(K) / L) : 0;
        }
        getLabelAndValue(K) {
            const L = this._cachedMeta,
                M = this.chart,
                N = M.data.labels || [],
                O = (0, g.o)(L._parsed[K], M.options.locale);
            return {
                label: N[K] || '',
                value: O
            };
        }
        getMaxBorderWidth(K) {
            let L = 0;
            const M = this.chart;
            let N, O, P, Q, R;
            if (!K)
                for (N = 0, O = M.data.datasets.length; N < O; ++N)
                    if (M.isDatasetVisible(N)) {
                        P = M.getDatasetMeta(N), K = P.data, Q = P.controller;
                        break;
                    }
            if (!K)
                return 0;
            for (N = 0, O = K.length; N < O; ++N)
                R = Q.resolveDataElementOptions(N), 'inner' !== R.borderAlign && (L = Math.max(L, R.borderWidth || 0, R.hoverBorderWidth || 0));
            return L;
        }
        getMaxOffset(K) {
            let L = 0;
            for (let M = 0, N = K.length; M < N; ++M) {
                const O = this.resolveDataElementOptions(M);
                L = Math.max(L, O.offset || 0, O.hoverOffset || 0);
            }
            return L;
        }
        _getRingWeightOffset(K) {
            let L = 0;
            for (let M = 0; M < K; ++M)
                this.chart.isDatasetVisible(M) && (L += this._getRingWeight(M));
            return L;
        }
        _getRingWeight(K) {
            return Math.max((0, g.v)(this.chart.data.datasets[K].weight, 1), 0);
        }
        _getVisibleDatasetWeightTotal() {
            return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
        }
        constructor(K, L) {
            super(K, L), this.enableOptionSharing = !0, this.innerRadius = void 0, this.outerRadius = void 0, this.offsetX = void 0, this.offsetY = void 0;
        }
    }
    (0, f.default)(_J, 'id', 'doughnut'), (0, f.default)(_J, 'defaults', {
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
    }), (0, f.default)(_J, 'descriptors', {
        _scriptable: a => 'spacing' !== a,
        _indexable: a => 'spacing' !== a
    }), (0, f.default)(_J, 'overrides', {
        aspectRatio: 1,
        plugins: {
            legend: {
                labels: {
                    generateLabels(K) {
                        const L = K.data;
                        if (L.labels.length && L.datasets.length) {
                            const {
                                labels: {
                                    pointStyle: M,
                                    color: N
                                }
                            } = K.legend.options;
                            return L.labels.map((L, f) => {
                                const O = K.getDatasetMeta(0).controller.getStyle(f);
                                return {
                                    text: L,
                                    fillStyle: O.backgroundColor,
                                    strokeStyle: O.borderColor,
                                    fontColor: N,
                                    lineWidth: O.borderWidth,
                                    pointStyle: M,
                                    hidden: !K.getDataVisibility(f),
                                    index: f
                                };
                            });
                        }
                        return [];
                    }
                },
                onClick(K, L, M) {
                    M.chart.toggleDataVisibility(L.index), M.chart.update();
                }
            }
        }
    });
    class _K extends y {
        initialize() {
            this.enableOptionSharing = !0, this.supportsDecimation = !0, super.initialize();
        }
        update(L) {
            const M = this._cachedMeta,
                {
                    dataset: N,
                    data: O = [],
                    _dataset: P
                } = M,
                Q = this.chart._animationsDisabled;
            let {
                start: R,
                count: S
            } = (0, g.q)(M, O, Q);
            this._drawStart = R, this._drawCount = S, (0, g.w)(M) && (R = 0, S = O.length), N._chart = this.chart, N._datasetIndex = this.index, N._decimated = !!P._decimated, N.points = O;
            const T = this.resolveDatasetElementOptions(L);
            this.options.showLine || (T.borderWidth = 0), T.segment = this.options.segment, this.updateElement(N, void 0, {
                animated: !Q,
                options: T
            }, L), this.updateElements(O, R, S, L);
        }
        updateElements(L, M, N, O) {
            const P = 'reset' === O,
                {
                    iScale: Q,
                    vScale: R,
                    _stacked: S,
                    _dataset: T
                } = this._cachedMeta,
                {
                    sharedOptions: U,
                    includeOptions: V
                } = this._getSharedOptions(M, O),
                W = Q.axis,
                X = R.axis,
                {
                    spanGaps: Y,
                    segment: Z
                } = this.options,
                $ = (0, g.x)(Y) ? Y : Number.POSITIVE_INFINITY,
                ab = this.chart._animationsDisabled || P || 'none' === O,
                bb = M + N,
                cb = L.length;
            let db = M > 0 && this.getParsed(M - 1);
            for (let eb = 0; eb < cb; ++eb) {
                const fb = L[eb],
                    gb = ab ? fb : {};
                if (eb < M || eb >= bb) {
                    gb.skip = !0;
                    continue;
                }
                const hb = this.getParsed(eb),
                    ib = (0, g.k)(hb[X]),
                    jb = gb[W] = Q.getPixelForValue(hb[W], eb),
                    kb = gb[X] = P || ib ? R.getBasePixel() : R.getPixelForValue(S ? this.applyStack(R, hb, S) : hb[X], eb);
                gb.skip = isNaN(jb) || isNaN(kb) || ib, gb.stop = eb > 0 && Math.abs(hb[W] - db[W]) > $, Z && (gb.parsed = hb, gb.raw = T.data[eb]), V && (gb.options = U || this.resolveDataElementOptions(eb, fb.active ? 'active' : O)), ab || this.updateElement(fb, eb, gb, O), db = hb;
            }
        }
        getMaxOverflow() {
            const L = this._cachedMeta,
                M = L.dataset,
                N = M.options && M.options.borderWidth || 0,
                O = L.data || [];
            if (!O.length)
                return N;
            const P = O[0].size(this.resolveDataElementOptions(0)),
                Q = O[O.length - 1].size(this.resolveDataElementOptions(O.length - 1));
            return Math.max(N, P, Q) / 2;
        }
        draw() {
            const L = this._cachedMeta;
            L.dataset.updateControlPoints(this.chart.chartArea, L.iScale.axis), super.draw();
        }
    }
    (0, f.default)(_K, 'id', 'line'), (0, f.default)(_K, 'defaults', {
        datasetElementType: 'line',
        dataElementType: 'point',
        showLine: !0,
        spanGaps: !1
    }), (0, f.default)(_K, 'overrides', {
        scales: {
            _index_: {
                type: 'category'
            },
            _value_: {
                type: 'linear'
            }
        }
    });
    class _L extends y {
        getLabelAndValue(M) {
            const N = this._cachedMeta,
                O = this.chart,
                P = O.data.labels || [],
                Q = (0, g.o)(N._parsed[M].r, O.options.locale);
            return {
                label: P[M] || '',
                value: Q
            };
        }
        parseObjectData(M, N, O, P) {
            return g.y.bind(this)(M, N, O, P);
        }
        update(M) {
            const N = this._cachedMeta.data;
            this._updateRadius(), this.updateElements(N, 0, N.length, M);
        }
        getMinMax() {
            const M = this._cachedMeta,
                N = {
                    min: Number.POSITIVE_INFINITY,
                    max: Number.NEGATIVE_INFINITY
                };
            return M.data.forEach((M, c) => {
                const O = this.getParsed(c).r;
                !isNaN(O) && this.chart.getDataVisibility(c) && (O < N.min && (N.min = O), O > N.max && (N.max = O));
            }), N;
        }
        _updateRadius() {
            const M = this.chart,
                N = M.chartArea,
                O = M.options,
                P = Math.min(N.right - N.left, N.bottom - N.top),
                Q = Math.max(P / 2, 0),
                R = (Q - Math.max(O.cutoutPercentage ? Q / 100 * O.cutoutPercentage : 1, 0)) / M.getVisibleDatasetCount();
            this.outerRadius = Q - R * this.index, this.innerRadius = this.outerRadius - R;
        }
        updateElements(M, N, O, P) {
            const Q = 'reset' === P,
                R = this.chart,
                S = R.options.animation,
                T = this._cachedMeta.rScale,
                U = T.xCenter,
                V = T.yCenter,
                W = T.getIndexAngle(0) - 0.5 * g.P;
            let X, Y = W;
            const Z = 360 / this.countVisibleElements();
            for (X = 0; X < N; ++X)
                Y += this._computeAngle(X, P, Z);
            for (X = N; X < N + O; X++) {
                const $ = M[X];
                let ab = Y,
                    bb = Y + this._computeAngle(X, P, Z),
                    cb = R.getDataVisibility(X) ? T.getDistanceFromCenterForValue(this.getParsed(X).r) : 0;
                Y = bb, Q && (S.animateScale && (cb = 0), S.animateRotate && (ab = bb = W));
                const db = {
                    x: U,
                    y: V,
                    innerRadius: 0,
                    outerRadius: cb,
                    startAngle: ab,
                    endAngle: bb,
                    options: this.resolveDataElementOptions(X, $.active ? 'active' : P)
                };
                this.updateElement($, X, db, P);
            }
        }
        countVisibleElements() {
            const M = this._cachedMeta;
            let N = 0;
            return M.data.forEach((M, c) => {
                !isNaN(this.getParsed(c).r) && this.chart.getDataVisibility(c) && N++;
            }), N;
        }
        _computeAngle(M, N, O) {
            return this.chart.getDataVisibility(M) ? (0, g.t)(this.resolveDataElementOptions(M, N).angle || O) : 0;
        }
        constructor(M, N) {
            super(M, N), this.innerRadius = void 0, this.outerRadius = void 0;
        }
    }
    (0, f.default)(_L, 'id', 'polarArea'), (0, f.default)(_L, 'defaults', {
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
    }), (0, f.default)(_L, 'overrides', {
        aspectRatio: 1,
        plugins: {
            legend: {
                labels: {
                    generateLabels(M) {
                        const N = M.data;
                        if (N.labels.length && N.datasets.length) {
                            const {
                                labels: {
                                    pointStyle: O,
                                    color: P
                                }
                            } = M.legend.options;
                            return N.labels.map((N, f) => {
                                const Q = M.getDatasetMeta(0).controller.getStyle(f);
                                return {
                                    text: N,
                                    fillStyle: Q.backgroundColor,
                                    strokeStyle: Q.borderColor,
                                    fontColor: P,
                                    lineWidth: Q.borderWidth,
                                    pointStyle: O,
                                    hidden: !M.getDataVisibility(f),
                                    index: f
                                };
                            });
                        }
                        return [];
                    }
                },
                onClick(M, N, O) {
                    O.chart.toggleDataVisibility(N.index), O.chart.update();
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
    class _M extends _J {}
    (0, f.default)(_M, 'id', 'pie'), (0, f.default)(_M, 'defaults', {
        cutout: 0,
        rotation: 0,
        circumference: 360,
        radius: '100%'
    });
    class _N extends y {
        getLabelAndValue(O) {
            const P = this._cachedMeta.vScale,
                Q = this.getParsed(O);
            return {
                label: P.getLabels()[O],
                value: '' + P.getLabelForValue(Q[P.axis])
            };
        }
        parseObjectData(O, P, Q, R) {
            return g.y.bind(this)(O, P, Q, R);
        }
        update(O) {
            const P = this._cachedMeta,
                Q = P.dataset,
                R = P.data || [],
                S = P.iScale.getLabels();
            if (Q.points = R, 'resize' !== O) {
                const T = this.resolveDatasetElementOptions(O);
                this.options.showLine || (T.borderWidth = 0);
                const U = {
                    _loop: !0,
                    _fullLoop: S.length === R.length,
                    options: T
                };
                this.updateElement(Q, void 0, U, O);
            }
            this.updateElements(R, 0, R.length, O);
        }
        updateElements(O, P, Q, R) {
            const S = this._cachedMeta.rScale,
                T = 'reset' === R;
            for (let U = P; U < P + Q; U++) {
                const V = O[U],
                    W = this.resolveDataElementOptions(U, V.active ? 'active' : R),
                    X = S.getPointPositionForValue(U, this.getParsed(U).r),
                    Y = T ? S.xCenter : X.x,
                    Z = T ? S.yCenter : X.y,
                    $ = {
                        x: Y,
                        y: Z,
                        angle: X.angle,
                        skip: isNaN(Y) || isNaN(Z),
                        options: W
                    };
                this.updateElement(V, U, $, R);
            }
        }
    }
    (0, f.default)(_N, 'id', 'radar'), (0, f.default)(_N, 'defaults', {
        datasetElementType: 'line',
        dataElementType: 'point',
        indexAxis: 'r',
        showLine: !0,
        elements: {
            line: {
                fill: 'start'
            }
        }
    }), (0, f.default)(_N, 'overrides', {
        aspectRatio: 1,
        scales: {
            r: {
                type: 'radialLinear'
            }
        }
    });
    class _O extends y {
        getLabelAndValue(P) {
            const Q = this._cachedMeta,
                R = this.chart.data.labels || [],
                {
                    xScale: S,
                    yScale: T
                } = Q,
                U = this.getParsed(P),
                V = S.getLabelForValue(U.x),
                W = T.getLabelForValue(U.y);
            return {
                label: R[P] || '',
                value: '(' + V + ', ' + W + ')'
            };
        }
        update(P) {
            const Q = this._cachedMeta,
                {
                    data: R = []
                } = Q,
                S = this.chart._animationsDisabled;
            let {
                start: T,
                count: U
            } = (0, g.q)(Q, R, S);
            if (this._drawStart = T, this._drawCount = U, (0, g.w)(Q) && (T = 0, U = R.length), this.options.showLine) {
                const {
                    dataset: V,
                    _dataset: W
                } = Q;
                V._chart = this.chart, V._datasetIndex = this.index, V._decimated = !!W._decimated, V.points = R;
                const X = this.resolveDatasetElementOptions(P);
                X.segment = this.options.segment, this.updateElement(V, void 0, {
                    animated: !S,
                    options: X
                }, P);
            }
            this.updateElements(R, T, U, P);
        }
        addElements() {
            const {
                showLine: P
            } = this.options;
            !this.datasetElementType && P && (this.datasetElementType = this.chart.registry.getElement('line')), super.addElements();
        }
        updateElements(P, Q, R, S) {
            const T = 'reset' === S,
                {
                    iScale: U,
                    vScale: V,
                    _stacked: W,
                    _dataset: X
                } = this._cachedMeta,
                Y = this.resolveDataElementOptions(Q, S),
                Z = this.getSharedOptions(Y),
                $ = this.includeOptions(S, Z),
                ab = U.axis,
                bb = V.axis,
                {
                    spanGaps: cb,
                    segment: db
                } = this.options,
                eb = (0, g.x)(cb) ? cb : Number.POSITIVE_INFINITY,
                fb = this.chart._animationsDisabled || T || 'none' === S;
            let gb = Q > 0 && this.getParsed(Q - 1);
            for (let hb = Q; hb < Q + R; ++hb) {
                const ib = P[hb],
                    jb = this.getParsed(hb),
                    kb = fb ? ib : {},
                    lb = (0, g.k)(jb[bb]),
                    mb = kb[ab] = U.getPixelForValue(jb[ab], hb),
                    nb = kb[bb] = T || lb ? V.getBasePixel() : V.getPixelForValue(W ? this.applyStack(V, jb, W) : jb[bb], hb);
                kb.skip = isNaN(mb) || isNaN(nb) || lb, kb.stop = hb > 0 && Math.abs(jb[ab] - gb[ab]) > eb, db && (kb.parsed = jb, kb.raw = X.data[hb]), $ && (kb.options = Z || this.resolveDataElementOptions(hb, ib.active ? 'active' : S)), fb || this.updateElement(ib, hb, kb, S), gb = jb;
            }
            this.updateSharedOptions(Z, S, hb);
        }
        getMaxOverflow() {
            const P = this._cachedMeta,
                Q = P.data || [];
            if (!this.options.showLine) {
                let R = 0;
                for (let S = Q.length - 1; S >= 0; --S)
                    R = Math.max(R, Q[S].size(this.resolveDataElementOptions(S)) / 2);
                return R > 0 && R;
            }
            const R = P.dataset,
                S = R.options && R.options.borderWidth || 0;
            if (!Q.length)
                return S;
            const T = Q[0].size(this.resolveDataElementOptions(0)),
                U = Q[Q.length - 1].size(this.resolveDataElementOptions(Q.length - 1));
            return Math.max(S, T, U) / 2;
        }
    }
    (0, f.default)(_O, 'id', 'scatter'), (0, f.default)(_O, 'defaults', {
        datasetElementType: !1,
        dataElementType: 'point',
        showLine: !1,
        fill: !1
    }), (0, f.default)(_O, 'overrides', {
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

    function P() {
        throw new Error('This method is not implemented: Check that a complete date adapter is provided.');
    }
    class Q {
        static override(R) {
            Object.assign(Q.prototype, R);
        }
        init() {}
        formats() {
            return P();
        }
        parse() {
            return P();
        }
        format() {
            return P();
        }
        add() {
            return P();
        }
        diff() {
            return P();
        }
        startOf() {
            return P();
        }
        endOf() {
            return P();
        }
        constructor(R) {
            this.options = R || {};
        }
    }
    var R = Q;

    function S(T, U, V, W) {
        const {
            controller: X,
            data: Y,
            _sorted: Z
        } = T, $ = X._cachedMeta.iScale;
        if ($ && U === $.axis && 'r' !== U && Z && Y.length) {
            const ab = $._reversePixels ? g.A : g.B;
            if (!W)
                return ab(Y, U, V);
            if (X._sharedOptions) {
                const bb = Y[0],
                    cb = 'function' == typeof bb.getRange && bb.getRange(U);
                if (cb) {
                    const db = ab(Y, U, V - cb),
                        eb = ab(Y, U, V + cb);
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

    function T(U, V, W, X, Y) {
        const Z = U.getSortedVisibleDatasetMetas(),
            $ = W[V];
        for (let ab = 0, bb = Z.length; ab < bb; ++ab) {
            const {
                index: cb,
                data: db
            } = Z[ab], {
                lo: eb,
                hi: fb
            } = S(Z[ab], V, $, Y);
            for (let gb = eb; gb <= fb; ++gb) {
                const hb = db[gb];
                hb.skip || X(hb, cb, gb);
            }
        }
    }

    function U(V, W, X, Y, Z) {
        const $ = [];
        if (!Z && !V.isPointInArea(W))
            return $;
        return T(V, X, W, function(ab, bb, cb) {
            (Z || (0, g.C)(ab, V.chartArea, 0)) && ab.inRange(W.x, W.y, Y) && $.push({
                element: ab,
                datasetIndex: bb,
                index: cb
            });
        }, !0), $;
    }

    function V(W, X, Y, Z, $, ab) {
        let bb = [];
        const cb = function(db) {
            const eb = -1 !== db.indexOf('x'),
                fb = -1 !== db.indexOf('y');
            return function(gb, hb) {
                const ib = eb ? Math.abs(gb.x - hb.x) : 0,
                    jb = fb ? Math.abs(gb.y - hb.y) : 0;
                return Math.sqrt(Math.pow(ib, 2) + Math.pow(jb, 2));
            };
        }(Y);
        let db = Number.POSITIVE_INFINITY;
        return T(W, Y, X, function(eb, fb, gb) {
            const hb = eb.inRange(X.x, X.y, $);
            if (Z && !hb)
                return;
            const ib = eb.getCenterPoint($);
            if (!(!!ab || W.isPointInArea(ib)) && !hb)
                return;
            const jb = cb(X, ib);
            jb < db ? (bb = [{
                element: eb,
                datasetIndex: fb,
                index: gb
            }], db = jb) : jb === db && bb.push({
                element: eb,
                datasetIndex: fb,
                index: gb
            });
        }), bb;
    }

    function W(X, Y, Z, $, ab, bb) {
        return bb || X.isPointInArea(Y) ? 'r' !== Z || $ ? V(X, Y, Z, $, ab, bb) : function(cb, db, eb, fb) {
            let gb = [];
            return T(cb, eb, db, function(hb, ib, jb) {
                const {
                    startAngle: kb,
                    endAngle: lb
                } = hb.getProps([
                    'startAngle',
                    'endAngle'
                ], fb), {
                    angle: mb
                } = (0, g.D)(hb, {
                    x: db.x,
                    y: db.y
                });
                (0, g.p)(mb, kb, lb) && gb.push({
                    element: hb,
                    datasetIndex: ib,
                    index: jb
                });
            }), gb;
        }(X, Y, Z, ab) : [];
    }

    function X(Y, Z, $, ab, bb) {
        const cb = [],
            db = 'x' === $ ? 'inXRange' : 'inYRange';
        let eb = !1;
        return T(Y, $, Z, (Y, ab, j) => {
            Y[db](Z[$], bb) && (cb.push({
                element: Y,
                datasetIndex: ab,
                index: j
            }), eb = eb || Y.inRange(Z.x, Z.y, bb));
        }), ab && !eb ? [] : cb;
    }
    var Y = {
        evaluateInteractionItems: T,
        modes: {
            index(Z, $, ab, bb) {
                const cb = (0, g.z)($, Z),
                    db = ab.axis || 'x',
                    eb = ab.includeInvisible || !1,
                    fb = ab.intersect ? U(Z, cb, db, bb, eb) : W(Z, cb, db, !1, bb, eb),
                    gb = [];
                return fb.length ? (Z.getSortedVisibleDatasetMetas().forEach(Z => {
                    const hb = fb[0].index,
                        ib = Z.data[hb];
                    ib && !ib.skip && gb.push({
                        element: ib,
                        datasetIndex: Z.index,
                        index: hb
                    });
                }), gb) : [];
            },
            dataset(Z, $, ab, bb) {
                const cb = (0, g.z)($, Z),
                    db = ab.axis || 'xy',
                    eb = ab.includeInvisible || !1;
                let fb = ab.intersect ? U(Z, cb, db, bb, eb) : W(Z, cb, db, !1, bb, eb);
                if (fb.length > 0) {
                    const gb = fb[0].datasetIndex,
                        hb = Z.getDatasetMeta(gb).data;
                    fb = [];
                    for (let ib = 0; ib < hb.length; ++ib)
                        fb.push({
                            element: hb[ib],
                            datasetIndex: gb,
                            index: ib
                        });
                }
                return fb;
            },
            point: (a, d, c, e) => U(a, (0, g.z)(d, a), c.axis || 'xy', e, c.includeInvisible || !1),
            nearest(Z, $, ab, bb) {
                const cb = (0, g.z)($, Z),
                    db = ab.axis || 'xy',
                    eb = ab.includeInvisible || !1;
                return W(Z, cb, db, ab.intersect, bb, eb);
            },
            x: (a, d, c, e) => X(a, (0, g.z)(d, a), 'x', c.intersect, e),
            y: (a, d, c, e) => X(a, (0, g.z)(d, a), 'y', c.intersect, e)
        }
    };
    const Z = [
        'left',
        'top',
        'right',
        'bottom'
    ];

    function $(ab, bb) {
        return ab.filter(ab => ab.pos === bb);
    }

    function ab(bb, cb) {
        return bb.filter(bb => -1 === Z.indexOf(bb.pos) && bb.box.axis === cb);
    }

    function bb(cb, db) {
        return cb.sort((cb, c) => {
            const eb = db ? c : cb,
                fb = db ? cb : c;
            return eb.weight === fb.weight ? eb.index - fb.index : eb.weight - fb.weight;
        });
    }

    function cb(db, eb) {
        const fb = function(gb) {
                const hb = {};
                for (const ib of gb) {
                    const {
                        stack: jb,
                        pos: kb,
                        stackWeight: lb
                    } = ib;
                    if (!jb || !Z.includes(kb))
                        continue;
                    const mb = hb[jb] || (hb[jb] = {
                        count: 0,
                        placed: 0,
                        weight: 0,
                        size: 0
                    });
                    mb.count++, mb.weight += lb;
                }
                return hb;
            }(db),
            {
                vBoxMaxWidth: gb,
                hBoxMaxHeight: hb
            } = eb;
        let ib, jb, kb;
        for (ib = 0, jb = db.length; ib < jb; ++ib) {
            kb = db[ib];
            const {
                fullSize: lb
            } = kb.box, mb = fb[kb.stack], nb = mb && kb.stackWeight / mb.weight;
            kb.horizontal ? (kb.width = nb ? nb * gb : lb && eb.availableWidth, kb.height = hb) : (kb.width = gb, kb.height = nb ? nb * hb : lb && eb.availableHeight);
        }
        return fb;
    }

    function db(eb, fb, gb, hb) {
        return Math.max(eb[gb], fb[gb]) + Math.max(eb[hb], fb[hb]);
    }

    function eb(fb, gb) {
        fb.top = Math.max(fb.top, gb.top), fb.left = Math.max(fb.left, gb.left), fb.bottom = Math.max(fb.bottom, gb.bottom), fb.right = Math.max(fb.right, gb.right);
    }

    function fb(gb, hb, ib, jb) {
        const {
            pos: kb,
            box: lb
        } = ib, mb = gb.maxPadding;
        if (!(0, g.i)(kb)) {
            ib.size && (gb[kb] -= ib.size);
            const nb = jb[ib.stack] || {
                size: 0,
                count: 1
            };
            nb.size = Math.max(nb.size, ib.horizontal ? lb.height : lb.width), ib.size = nb.size / nb.count, gb[kb] += ib.size;
        }
        lb.getPadding && eb(mb, lb.getPadding());
        const nb = Math.max(0, hb.outerWidth - db(mb, gb, 'left', 'right')),
            ob = Math.max(0, hb.outerHeight - db(mb, gb, 'top', 'bottom')),
            pb = nb !== gb.w,
            qb = ob !== gb.h;
        return gb.w = nb, gb.h = ob, ib.horizontal ? {
            same: pb,
            other: qb
        } : {
            same: qb,
            other: pb
        };
    }

    function gb(hb, ib) {
        const jb = ib.maxPadding;

        function kb(lb) {
            const mb = {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            };
            return lb.forEach(lb => {
                mb[lb] = Math.max(ib[lb], jb[lb]);
            }), mb;
        }
        return kb(hb ? [
            'left',
            'right'
        ] : [
            'top',
            'bottom'
        ]);
    }

    function hb(ib, jb, kb, lb) {
        const mb = [];
        let nb, ob, pb, qb, rb, sb;
        for (nb = 0, ob = ib.length, rb = 0; nb < ob; ++nb) {
            pb = ib[nb], qb = pb.box, qb.update(pb.width || jb.w, pb.height || jb.h, gb(pb.horizontal, jb));
            const {
                same: tb,
                other: ub
            } = fb(jb, kb, pb, lb);
            rb |= tb && mb.length, sb = sb || ub, qb.fullSize || mb.push(pb);
        }
        return rb && hb(mb, jb, kb, lb) || sb;
    }

    function ib(jb, kb, lb, mb, nb) {
        jb.top = lb, jb.left = kb, jb.right = kb + mb, jb.bottom = lb + nb, jb.width = mb, jb.height = nb;
    }

    function jb(kb, lb, mb, nb) {
        const ob = mb.padding;
        let {
            x: pb,
            y: qb
        } = lb;
        for (const rb of kb) {
            const sb = rb.box,
                tb = nb[rb.stack] || {
                    count: 1,
                    placed: 0,
                    weight: 1
                },
                ub = rb.stackWeight / tb.weight || 1;
            if (rb.horizontal) {
                const vb = lb.w * ub,
                    wb = tb.size || sb.height;
                (0, g.h)(tb.start) && (qb = tb.start), sb.fullSize ? ib(sb, ob.left, qb, mb.outerWidth - ob.right - ob.left, wb) : ib(sb, lb.left + tb.placed, qb, vb, wb), tb.start = qb, tb.placed += vb, qb = sb.bottom;
            } else {
                const vb = lb.h * ub,
                    wb = tb.size || sb.width;
                (0, g.h)(tb.start) && (pb = tb.start), sb.fullSize ? ib(sb, pb, ob.top, wb, mb.outerHeight - ob.bottom - ob.top) : ib(sb, pb, lb.top + tb.placed, wb, vb), tb.start = pb, tb.placed += vb, pb = sb.right;
            }
        }
        lb.x = pb, lb.y = qb;
    }
    var kb = {
        addBox(lb, mb) {
            lb.boxes || (lb.boxes = []), mb.fullSize = mb.fullSize || !1, mb.position = mb.position || 'top', mb.weight = mb.weight || 0, mb._layers = mb._layers || function() {
                return [{
                    z: 0,
                    draw(nb) {
                        mb.draw(nb);
                    }
                }];
            }, lb.boxes.push(mb);
        },
        removeBox(lb, mb) {
            const nb = lb.boxes ? lb.boxes.indexOf(mb) : -1; -
            1 !== nb && lb.boxes.splice(nb, 1);
        },
        configure(lb, mb, nb) {
            mb.fullSize = nb.fullSize, mb.position = nb.position, mb.weight = nb.weight;
        },
        update(lb, mb, nb, ob) {
            if (!lb)
                return;
            const pb = (0, g.E)(lb.options.layout.padding),
                qb = Math.max(mb - pb.width, 0),
                rb = Math.max(nb - pb.height, 0),
                sb = function(tb) {
                    const ub = function(vb) {
                            const wb = [];
                            let xb, yb, zb, Ab, Bb, Cb;
                            for (xb = 0, yb = (vb || []).length; xb < yb; ++xb)
                                zb = vb[xb], {
                                    position: Db,
                                    options: {
                                        stack: Eb,
                                        stackWeight: Fb = 1
                                    }
                                } = zb, wb.push({
                                    index: xb,
                                    box: zb,
                                    pos: Db,
                                    horizontal: zb.isHorizontal(),
                                    weight: zb.weight,
                                    stack: Eb && Db + Eb,
                                    stackWeight: Fb
                                });
                            return wb;
                        }(tb),
                        vb = bb(ub.filter(tb => tb.box.fullSize), !0),
                        wb = bb($(ub, 'left'), !0),
                        xb = bb($(ub, 'right')),
                        yb = bb($(ub, 'top'), !0),
                        zb = bb($(ub, 'bottom')),
                        Ab = ab(ub, 'x'),
                        Bb = ab(ub, 'y');
                    return {
                        fullSize: vb,
                        leftAndTop: wb.concat(yb),
                        rightAndBottom: xb.concat(Bb).concat(zb).concat(Ab),
                        chartArea: $(ub, 'chartArea'),
                        vertical: wb.concat(xb).concat(Bb),
                        horizontal: yb.concat(zb).concat(Ab)
                    };
                }(lb.boxes),
                tb = sb.vertical,
                ub = sb.horizontal;
            (0, g.F)(lb.boxes, lb => {
                'function' == typeof lb.beforeLayout && lb.beforeLayout();
            });
            const vb = tb.reduce((lb, mb) => mb.box.options && !1 === mb.box.options.display ? lb : lb + 1, 0) || 1,
                wb = Object.freeze({
                    outerWidth: mb,
                    outerHeight: nb,
                    padding: pb,
                    availableWidth: qb,
                    availableHeight: rb,
                    vBoxMaxWidth: qb / 2 / vb,
                    hBoxMaxHeight: rb / 2
                }),
                xb = Object.assign({}, pb);
            eb(xb, (0, g.E)(ob));
            const yb = Object.assign({
                    maxPadding: xb,
                    w: qb,
                    h: rb,
                    x: pb.left,
                    y: pb.top
                }, pb),
                zb = cb(tb.concat(ub), wb);
            hb(sb.fullSize, yb, wb, zb), hb(tb, yb, wb, zb), hb(ub, yb, wb, zb) && hb(tb, yb, wb, zb),
                function(Ab) {
                    const Bb = Ab.maxPadding;

                    function Cb(Db) {
                        const Eb = Math.max(Bb[Db] - Ab[Db], 0);
                        return Ab[Db] += Eb, Eb;
                    }
                    Ab.y += Cb('top'), Ab.x += Cb('left'), Cb('right'), Cb('bottom');
                }(yb), jb(sb.leftAndTop, yb, wb, zb), yb.x += yb.w, yb.y += yb.h, jb(sb.rightAndBottom, yb, wb, zb), lb.chartArea = {
                    left: yb.left,
                    top: yb.top,
                    right: yb.left + yb.w,
                    bottom: yb.top + yb.h,
                    height: yb.h,
                    width: yb.w
                }, (0, g.F)(sb.chartArea, mb => {
                    const Ab = mb.box;
                    Object.assign(Ab, lb.chartArea), Ab.update(yb.w, yb.h, {
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0
                    });
                });
        }
    };
    class lb {
        acquireContext(mb, nb) {}
        releaseContext(mb) {
            return !1;
        }
        addEventListener(mb, nb, ob) {}
        removeEventListener(mb, nb, ob) {}
        getDevicePixelRatio() {
            return 1;
        }
        getMaximumSize(mb, nb, ob, pb) {
            return nb = Math.max(0, nb || mb.width), ob = ob || mb.height, {
                width: nb,
                height: Math.max(0, pb ? Math.floor(nb / pb) : ob)
            };
        }
        isAttached(mb) {
            return !0;
        }
        updateConfig(mb) {}
    }
    class mb extends lb {
        acquireContext(nb) {
            return nb && nb.getContext && nb.getContext('2d') || null;
        }
        updateConfig(nb) {
            nb.options.animation = !1;
        }
    }
    const nb = '$chartjs',
        ob = {
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
        pb = a => null === a || '' === a;
    const qb = !!g.K && {
        passive: !0
    };

    function rb(sb, tb, ub) {
        sb.canvas.removeEventListener(tb, ub, qb);
    }

    function sb(tb, ub) {
        for (const vb of tb)
            if (vb === ub || vb.contains(ub))
                return !0;
    }

    function tb(ub, vb, wb) {
        const xb = ub.canvas,
            yb = new MutationObserver(ub => {
                let zb = !1;
                for (const Ab of ub)
                    zb = zb || sb(Ab.addedNodes, xb), zb = zb && !sb(Ab.removedNodes, xb);
                zb && Ab();
            });
        return yb.observe(document, {
            childList: !0,
            subtree: !0
        }), yb;
    }

    function ub(vb, wb, xb) {
        const yb = vb.canvas,
            zb = new MutationObserver(vb => {
                let Ab = !1;
                for (const Bb of vb)
                    Ab = Ab || sb(Bb.removedNodes, yb), Ab = Ab && !sb(Bb.addedNodes, yb);
                Ab && Bb();
            });
        return zb.observe(document, {
            childList: !0,
            subtree: !0
        }), zb;
    }
    const vb = new Map();
    let wb = 0;

    function xb() {
        const yb = window.devicePixelRatio;
        yb !== wb && (wb = yb, vb.forEach((d, c) => {
            c.currentDevicePixelRatio !== yb && d();
        }));
    }

    function yb(zb, Ab, Bb) {
        const Cb = zb.canvas,
            Db = Cb && (0, g.I)(Cb);
        if (!Db)
            return;
        const Eb = (0, g.L)((zb, Ab) => {
                const Fb = Db.clientWidth;
                Bb(zb, Ab), Fb < Db.clientWidth && Bb();
            }, window),
            Fb = new ResizeObserver(zb => {
                const Gb = zb[0],
                    Hb = Gb.contentRect.width,
                    Ib = Gb.contentRect.height;
                0 === Hb && 0 === Ib || Eb(Hb, Ib);
            });
        return Fb.observe(Db),
            function(Gb, Hb) {
                vb.size || window.addEventListener('resize', xb), vb.set(Gb, Hb);
            }(zb, Eb), Fb;
    }

    function zb(Ab, Bb, Cb) {
        Cb && Cb.disconnect(), 'resize' === Bb && function(Db) {
            vb.delete(Db), vb.size || window.removeEventListener('resize', xb);
        }(Ab);
    }

    function Ab(Bb, Cb, Db) {
        const Eb = Bb.canvas,
            Fb = (0, g.L)(Cb => {
                null !== Bb.ctx && Db(function(Gb, Hb) {
                    const Ib = ob[Gb.type] || Gb.type,
                        {
                            x: Jb,
                            y: Kb
                        } = (0, g.z)(Gb, Hb);
                    return {
                        type: Ib,
                        chart: Hb,
                        native: Gb,
                        x: void 0 !== Jb ? Jb : null,
                        y: void 0 !== Kb ? Kb : null
                    };
                }(Cb, Bb));
            }, Bb);
        return function(Gb, Hb, Ib) {
            Gb.addEventListener(Hb, Ib, qb);
        }(Eb, Cb, Fb), Fb;
    }
    class Bb extends lb {
        acquireContext(Cb, Db) {
            const Eb = Cb && Cb.getContext && Cb.getContext('2d');
            return Eb && Eb.canvas === Cb ? (function(Fb, Gb) {
                const Hb = Fb.style,
                    Ib = Fb.getAttribute('height'),
                    Jb = Fb.getAttribute('width');
                if (Fb[nb] = {
                        initial: {
                            height: Ib,
                            width: Jb,
                            style: {
                                display: Hb.display,
                                height: Hb.height,
                                width: Hb.width
                            }
                        }
                    }, Hb.display = Hb.display || 'block', Hb.boxSizing = Hb.boxSizing || 'border-box', pb(Jb)) {
                    const Kb = (0, g.J)(Fb, 'width');
                    void 0 !== Kb && (Fb.width = Kb);
                }
                if (pb(Ib))
                    if ('' === Fb.style.height)
                        Fb.height = Fb.width / (Gb || 2);
                    else {
                        const Kb = (0, g.J)(Fb, 'height');
                        void 0 !== Kb && (Fb.height = Kb);
                    }
            }(Cb, Db), Eb) : null;
        }
        releaseContext(Cb) {
            const Db = Cb.canvas;
            if (!Db[nb])
                return !1;
            const Eb = Db[nb].initial;
            [
                'height',
                'width'
            ].forEach(Cb => {
                const Fb = Eb[Cb];
                (0, g.k)(Fb) ? Db.removeAttribute(Cb): Db.setAttribute(Cb, Fb);
            });
            const Fb = Eb.style || {};
            return Object.keys(Fb).forEach(Cb => {
                Db.style[Cb] = Fb[Cb];
            }), Db.width = Db.width, delete Db[nb], !0;
        }
        addEventListener(Cb, Db, Eb) {
            this.removeEventListener(Cb, Db);
            const Fb = Cb.$proxies || (Cb.$proxies = {}),
                Gb = {
                    attach: tb,
                    detach: ub,
                    resize: yb
                } [Db] || Ab;
            Fb[Db] = Gb(Cb, Db, Eb);
        }
        removeEventListener(Cb, Db) {
            const Eb = Cb.$proxies || (Cb.$proxies = {}),
                Fb = Eb[Db];
            if (!Fb)
                return;
            ({
                attach: zb,
                detach: zb,
                resize: zb
            } [Db] || rb)(Cb, Db, Fb), Eb[Db] = void 0;
        }
        getDevicePixelRatio() {
            return window.devicePixelRatio;
        }
        getMaximumSize(Cb, Db, Eb, Fb) {
            return (0, g.G)(Cb, Db, Eb, Fb);
        }
        isAttached(Cb) {
            const Db = (0, g.I)(Cb);
            return !(!Db || !Db.isConnected);
        }
    }
    class Cb {
        tooltipPosition(Db) {
            const {
                x: Eb,
                y: Fb
            } = this.getProps([
                'x',
                'y'
            ], Db);
            return {
                x: Eb,
                y: Fb
            };
        }
        hasValue() {
            return (0, g.x)(this.x) && (0, g.x)(this.y);
        }
        getProps(Db, Eb) {
            const Fb = this.$animations;
            if (!Eb || !Fb)
                return this;
            const Gb = {};
            return Db.forEach(Db => {
                Gb[Db] = Fb[Db] && Fb[Db].active() ? Fb[Db]._to : this[Db];
            }), Gb;
        }
        constructor() {
            (0, f.default)(this, 'active', !1);
        }
    }

    function Db(Eb, Fb) {
        const Gb = Eb.options.ticks,
            Hb = function(Ib) {
                const Jb = Ib.options.offset,
                    Kb = Ib._tickSize(),
                    Lb = Ib._length / Kb + (Jb ? 0 : 1),
                    Mb = Ib._maxLength / Kb;
                return Math.floor(Math.min(Lb, Mb));
            }(Eb),
            Ib = Math.min(Gb.maxTicksLimit || Hb, Hb),
            Jb = Gb.major.enabled ? function(Kb) {
                const Lb = [];
                let Mb, Nb;
                for (Mb = 0, Nb = Kb.length; Mb < Nb; Mb++)
                    Kb[Mb].major && Lb.push(Mb);
                return Lb;
            }(Fb) : [],
            Kb = Jb.length,
            Lb = Jb[0],
            Mb = Jb[Kb - 1],
            Nb = [];
        if (Kb > Ib)
            return function(Ob, Pb, Qb, Rb) {
                let Sb, Tb = 0,
                    Ub = Qb[0];
                for (Rb = Math.ceil(Rb), Sb = 0; Sb < Ob.length; Sb++)
                    Sb === Ub && (Pb.push(Ob[Sb]), Tb++, Ub = Qb[Tb * Rb]);
            }(Fb, Nb, Jb, Kb / Ib), Nb;
        const Ob = function(Pb, Qb, Rb) {
            const Sb = function(Tb) {
                    const Ub = Tb.length;
                    let Vb, Wb;
                    if (Ub < 2)
                        return !1;
                    for (Wb = Tb[0], Vb = 1; Vb < Ub; ++Vb)
                        if (Tb[Vb] - Tb[Vb - 1] !== Wb)
                            return !1;
                    return Wb;
                }(Pb),
                Tb = Qb.length / Rb;
            if (!Sb)
                return Math.max(Tb, 1);
            const Ub = (0, g.N)(Sb);
            for (let Vb = 0, Wb = Ub.length - 1; Vb < Wb; Vb++) {
                const Xb = Ub[Vb];
                if (Xb > Tb)
                    return Xb;
            }
            return Math.max(Tb, 1);
        }(Jb, Fb, Ib);
        if (Kb > 0) {
            let Pb, Qb;
            const Rb = Kb > 1 ? Math.round((Mb - Lb) / (Kb - 1)) : null;
            for (_Eb(Fb, Nb, Ob, (0, g.k)(Rb) ? 0 : Lb - Rb, Lb), Pb = 0, Qb = Kb - 1; Pb < Qb; Pb++)
                _Eb(Fb, Nb, Ob, Jb[Pb], Jb[Pb + 1]);
            return _Eb(Fb, Nb, Ob, Mb, (0, g.k)(Rb) ? Fb.length : Mb + Rb), Nb;
        }
        return _Eb(Fb, Nb, Ob), Nb;
    }

    function _Eb(Fb, Gb, Hb, Ib, Jb) {
        const Kb = (0, g.v)(Ib, 0),
            Lb = Math.min((0, g.v)(Jb, Fb.length), Fb.length);
        let Mb, Nb, Ob, Pb = 0;
        for (Hb = Math.ceil(Hb), Jb && (Mb = Jb - Ib, Hb = Mb / Math.floor(Mb / Hb)), Ob = Kb; Ob < 0;)
            Pb++, Ob = Math.round(Kb + Pb * Hb);
        for (Nb = Math.max(Kb, 0); Nb < Lb; Nb++)
            Nb === Ob && (Gb.push(Fb[Nb]), Pb++, Ob = Math.round(Kb + Pb * Hb));
    }
    (0, f.default)(Cb, 'defaults', {}), (0, f.default)(Cb, 'defaultRoutes', void 0);
    const Fb = (a, d, c) => 'top' === d || 'left' === d ? a[d] + c : a[d] - c;

    function Gb(Hb, Ib) {
        const Jb = [],
            Kb = Hb.length / Ib,
            Lb = Hb.length;
        let Mb = 0;
        for (; Mb < Lb; Mb += Kb)
            Jb.push(Hb[Math.floor(Mb)]);
        return Jb;
    }

    function Hb(Ib, Jb, Kb) {
        const Lb = Ib.ticks.length,
            Mb = Math.min(Jb, Lb - 1),
            Nb = Ib._startPixel,
            Ob = Ib._endPixel,
            Pb = 0.000001;
        let Qb, Rb = Ib.getPixelForTick(Mb);
        if (!(Kb && (Qb = 1 === Lb ? Math.max(Rb - Nb, Ob - Rb) : 0 === Jb ? (Ib.getPixelForTick(1) - Rb) / 2 : (Rb - Ib.getPixelForTick(Mb - 1)) / 2, Rb += Mb < Jb ? Qb : -Qb, Rb < Nb - Pb || Rb > Ob + Pb)))
            return Rb;
    }

    function Ib(Jb) {
        return Jb.drawTicks ? Jb.tickLength : 0;
    }

    function Jb(Kb, Lb) {
        if (!Kb.display)
            return 0;
        const Mb = (0, g.a0)(Kb.font, Lb),
            Nb = (0, g.E)(Kb.padding);
        return ((0, g.b)(Kb.text) ? Kb.text.length : 1) * Mb.lineHeight + Nb.height;
    }

    function Kb(Lb, Mb, Nb) {
        let Ob = (0, g.a1)(Lb);
        return (Nb && 'right' !== Mb || !Nb && 'right' === Mb) && (Ob = (Lb => 'left' === Lb ? 'right' : 'right' === Lb ? 'left' : Lb)(Ob)), Ob;
    }
    class Lb extends Cb {
        init(Mb) {
            this.options = Mb.setContext(this.getContext()), this.axis = Mb.axis, this._userMin = this.parse(Mb.min), this._userMax = this.parse(Mb.max), this._suggestedMin = this.parse(Mb.suggestedMin), this._suggestedMax = this.parse(Mb.suggestedMax);
        }
        parse(Mb, Nb) {
            return Mb;
        }
        getUserBounds() {
            let {
                _userMin: Mb,
                _userMax: Nb,
                _suggestedMin: Ob,
                _suggestedMax: Pb
            } = this;
            return Mb = (0, g.O)(Mb, Number.POSITIVE_INFINITY), Nb = (0, g.O)(Nb, Number.NEGATIVE_INFINITY), Ob = (0, g.O)(Ob, Number.POSITIVE_INFINITY), Pb = (0, g.O)(Pb, Number.NEGATIVE_INFINITY), {
                min: (0, g.O)(Mb, Ob),
                max: (0, g.O)(Nb, Pb),
                minDefined: (0, g.g)(Mb),
                maxDefined: (0, g.g)(Nb)
            };
        }
        getMinMax(Mb) {
            let Nb, {
                min: Ob,
                max: Pb,
                minDefined: Qb,
                maxDefined: Rb
            } = this.getUserBounds();
            if (Qb && Rb)
                return {
                    min: Ob,
                    max: Pb
                };
            const Sb = this.getMatchingVisibleMetas();
            for (let Tb = 0, Ub = Sb.length; Tb < Ub; ++Tb)
                Nb = Sb[Tb].controller.getMinMax(this, Mb), Qb || (Ob = Math.min(Ob, Nb.min)), Rb || (Pb = Math.max(Pb, Nb.max));
            return Ob = Rb && Ob > Pb ? Pb : Ob, Pb = Qb && Ob > Pb ? Ob : Pb, {
                min: (0, Tb.O)(Ob, (0, Tb.O)(Pb, Ob)),
                max: (0, Tb.O)(Pb, (0, Tb.O)(Ob, Pb))
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
            const Mb = this.chart.data;
            return this.options.labels || (this.isHorizontal() ? Mb.xLabels : Mb.yLabels) || Mb.labels || [];
        }
        getLabelItems(Mb = this.chart.chartArea) {
            return this._labelItems || (this._labelItems = this._computeLabelItems(Mb));
        }
        beforeLayout() {
            this._cache = {}, this._dataLimitsCached = !1;
        }
        beforeUpdate() {
            (0, g.Q)(this.options.beforeUpdate, [this]);
        }
        update(Mb, Nb, Ob) {
            const {
                beginAtZero: Pb,
                grace: Qb,
                ticks: Rb
            } = this.options, Sb = Rb.sampleSize;
            this.beforeUpdate(), this.maxWidth = Mb, this.maxHeight = Nb, this._margins = Ob = Object.assign({
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }, Ob), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + Ob.left + Ob.right : this.height + Ob.top + Ob.bottom, this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = (0, g.R)(this, Qb, Pb), this._dataLimitsCached = !0), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks();
            const Tb = Sb < this.ticks.length;
            this._convertTicksToLabels(Tb ? Gb(this.ticks, Sb) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), Rb.display && (Rb.autoSkip || 'auto' === Rb.source) && (this.ticks = Db(this, this.ticks), this._labelSizes = null, this.afterAutoSkip()), Tb && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate();
        }
        configure() {
            let Mb, Nb, Ob = this.options.reverse;
            this.isHorizontal() ? (Mb = this.left, Nb = this.right) : (Mb = this.top, Nb = this.bottom, Ob = !Ob), this._startPixel = Mb, this._endPixel = Nb, this._reversePixels = Ob, this._length = Nb - Mb, this._alignToPixels = this.options.alignToPixels;
        }
        afterUpdate() {
            (0, g.Q)(this.options.afterUpdate, [this]);
        }
        beforeSetDimensions() {
            (0, g.Q)(this.options.beforeSetDimensions, [this]);
        }
        setDimensions() {
            this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0;
        }
        afterSetDimensions() {
            (0, g.Q)(this.options.afterSetDimensions, [this]);
        }
        _callHooks(Mb) {
            this.chart.notifyPlugins(Mb, this.getContext()), (0, g.Q)(this.options[Mb], [this]);
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
            (0, g.Q)(this.options.beforeTickToLabelConversion, [this]);
        }
        generateTickLabels(Mb) {
            const Nb = this.options.ticks;
            let Ob, Pb, Qb;
            for (Ob = 0, Pb = Mb.length; Ob < Pb; Ob++)
                Qb = Mb[Ob], Qb.label = (0, g.Q)(Nb.callback, [
                    Qb.value,
                    Ob,
                    Mb
                ], this);
        }
        afterTickToLabelConversion() {
            (0, g.Q)(this.options.afterTickToLabelConversion, [this]);
        }
        beforeCalculateLabelRotation() {
            (0, g.Q)(this.options.beforeCalculateLabelRotation, [this]);
        }
        calculateLabelRotation() {
            const Mb = this.options,
                Nb = Mb.ticks,
                Ob = this.ticks.length,
                Pb = Nb.minRotation || 0,
                Qb = Nb.maxRotation;
            let Rb, Sb, Tb, Ub = Pb;
            if (!this._isVisible() || !Nb.display || Pb >= Qb || Ob <= 1 || !this.isHorizontal())
                return void(this.labelRotation = Pb);
            const Vb = this._getLabelSizes(),
                Wb = Vb.widest.width,
                Xb = Vb.highest.height,
                Yb = (0, g.S)(this.chart.width - Wb, 0, this.maxWidth);
            Rb = Mb.offset ? this.maxWidth / Ob : Yb / (Ob - 1), Wb + 6 > Rb && (Rb = Yb / (Ob - (Mb.offset ? 0.5 : 1)), Sb = this.maxHeight - Ib(Mb.grid) - Nb.padding - Jb(Mb.title, this.chart.options.font), Tb = Math.sqrt(Wb * Wb + Xb * Xb), Ub = (0, g.U)(Math.min(Math.asin((0, g.S)((Vb.highest.height + 6) / Rb, -1, 1)), Math.asin((0, g.S)(Sb / Tb, -1, 1)) - Math.asin((0, g.S)(Xb / Tb, -1, 1)))), Ub = Math.max(Pb, Math.min(Qb, Ub))), this.labelRotation = Ub;
        }
        afterCalculateLabelRotation() {
            (0, g.Q)(this.options.afterCalculateLabelRotation, [this]);
        }
        afterAutoSkip() {}
        beforeFit() {
            (0, g.Q)(this.options.beforeFit, [this]);
        }
        fit() {
            const Mb = {
                    width: 0,
                    height: 0
                },
                {
                    chart: Nb,
                    options: {
                        ticks: Ob,
                        title: Pb,
                        grid: Qb
                    }
                } = this,
                Rb = this._isVisible(),
                Sb = this.isHorizontal();
            if (Rb) {
                const Tb = Jb(Pb, Nb.options.font);
                if (Sb ? (Mb.width = this.maxWidth, Mb.height = Ib(Qb) + Tb) : (Mb.height = this.maxHeight, Mb.width = Ib(Qb) + Tb), Ob.display && this.ticks.length) {
                    const {
                        first: Ub,
                        last: Vb,
                        widest: Wb,
                        highest: Xb
                    } = this._getLabelSizes(), Yb = 2 * Ob.padding, Zb = (0, g.t)(this.labelRotation), $b = Math.cos(Zb), ac = Math.sin(Zb);
                    if (Sb) {
                        const bc = Ob.mirror ? 0 : ac * Wb.width + $b * Xb.height;
                        Mb.height = Math.min(this.maxHeight, Mb.height + bc + Yb);
                    } else {
                        const bc = Ob.mirror ? 0 : $b * Wb.width + ac * Xb.height;
                        Mb.width = Math.min(this.maxWidth, Mb.width + bc + Yb);
                    }
                    this._calculatePadding(Ub, Vb, ac, $b);
                }
            }
            this._handleMargins(), Sb ? (this.width = this._length = Nb.width - this._margins.left - this._margins.right, this.height = Mb.height) : (this.width = Mb.width, this.height = this._length = Nb.height - this._margins.top - this._margins.bottom);
        }
        _calculatePadding(Mb, Nb, Ob, Pb) {
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
                Tb ? Ub ? (Xb = Pb * Mb.width, Yb = Ob * Nb.height) : (Xb = Ob * Mb.height, Yb = Pb * Nb.width) : 'start' === Qb ? Yb = Nb.width : 'end' === Qb ? Xb = Mb.width : 'inner' !== Qb && (Xb = Mb.width / 2, Yb = Nb.width / 2), this.paddingLeft = Math.max((Xb - Vb + Rb) * this.width / (this.width - Vb), 0), this.paddingRight = Math.max((Yb - Wb + Rb) * this.width / (this.width - Wb), 0);
            } else {
                let Vb = Nb.height / 2,
                    Wb = Mb.height / 2;
                'start' === Qb ? (Vb = 0, Wb = Mb.height) : 'end' === Qb && (Vb = Nb.height, Wb = 0), this.paddingTop = Vb + Rb, this.paddingBottom = Wb + Rb;
            }
        }
        _handleMargins() {
            this._margins && (this._margins.left = Math.max(this.paddingLeft, this._margins.left), this._margins.top = Math.max(this.paddingTop, this._margins.top), this._margins.right = Math.max(this.paddingRight, this._margins.right), this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom));
        }
        afterFit() {
            (0, g.Q)(this.options.afterFit, [this]);
        }
        isHorizontal() {
            const {
                axis: Mb,
                position: Nb
            } = this.options;
            return 'top' === Nb || 'bottom' === Nb || 'x' === Mb;
        }
        isFullSize() {
            return this.options.fullSize;
        }
        _convertTicksToLabels(Mb) {
            let Nb, Ob;
            for (this.beforeTickToLabelConversion(), this.generateTickLabels(Mb), Nb = 0, Ob = Mb.length; Nb < Ob; Nb++)
                (0, g.k)(Mb[Nb].label) && (Mb.splice(Nb, 1), Ob--, Nb--);
            this.afterTickToLabelConversion();
        }
        _getLabelSizes() {
            let Mb = this._labelSizes;
            if (!Mb) {
                const Nb = this.options.ticks.sampleSize;
                let Ob = this.ticks;
                Nb < Ob.length && (Ob = Gb(Ob, Nb)), this._labelSizes = Mb = this._computeLabelSizes(Ob, Ob.length);
            }
            return Mb;
        }
        _computeLabelSizes(Mb, Nb) {
            const {
                ctx: Ob,
                _longestTextCache: Pb
            } = this, Qb = [], Rb = [];
            let Sb, Tb, Ub, Vb, Wb, Xb, Yb, Zb, $b, ac, bc, cc = 0,
                dc = 0;
            for (Sb = 0; Sb < Nb; ++Sb) {
                if (Vb = Mb[Sb].label, Wb = this._resolveTickFontOptions(Sb), Ob.font = Xb = Wb.string, Yb = Pb[Xb] = Pb[Xb] || {
                        data: {},
                        gc: []
                    }, Zb = Wb.lineHeight, $b = ac = 0, (0, g.k)(Vb) || (0, g.b)(Vb)) {
                    if ((0, g.b)(Vb))
                        for (Tb = 0, Ub = Vb.length; Tb < Ub; ++Tb)
                            bc = Vb[Tb], (0, g.k)(bc) || (0, g.b)(bc) || ($b = (0, g.V)(Ob, Yb.data, Yb.gc, $b, bc), ac += Zb);
                } else
                    $b = (0, g.V)(Ob, Yb.data, Yb.gc, $b, Vb), ac = Zb;
                Qb.push($b), Rb.push(ac), cc = Math.max($b, cc), dc = Math.max(ac, dc);
            }! function(ec, fc) {
                (0, g.F)(ec, ec => {
                    const gc = ec.gc,
                        hc = gc.length / 2;
                    let ic;
                    if (hc > fc) {
                        for (ic = 0; ic < hc; ++ic)
                            delete ec.data[gc[ic]];
                        gc.splice(0, hc);
                    }
                });
            }(Pb, Nb);
            const ec = Qb.indexOf(cc),
                fc = Rb.indexOf(dc),
                gc = Mb => ({
                    width: Qb[Mb] || 0,
                    height: Rb[Mb] || 0
                });
            return {
                first: gc(0),
                last: gc(Nb - 1),
                widest: gc(ec),
                highest: gc(fc),
                widths: Qb,
                heights: Rb
            };
        }
        getLabelForValue(Mb) {
            return Mb;
        }
        getPixelForValue(Mb, Nb) {
            return NaN;
        }
        getValueForPixel(Mb) {}
        getPixelForTick(Mb) {
            const Nb = this.ticks;
            return Mb < 0 || Mb > Nb.length - 1 ? null : this.getPixelForValue(Nb[Mb].value);
        }
        getPixelForDecimal(Mb) {
            this._reversePixels && (Mb = 1 - Mb);
            const Nb = this._startPixel + Mb * this._length;
            return (0, g.W)(this._alignToPixels ? (0, g.X)(this.chart, Nb, 0) : Nb);
        }
        getDecimalForPixel(Mb) {
            const Nb = (Mb - this._startPixel) / this._length;
            return this._reversePixels ? 1 - Nb : Nb;
        }
        getBasePixel() {
            return this.getPixelForValue(this.getBaseValue());
        }
        getBaseValue() {
            const {
                min: Mb,
                max: Nb
            } = this;
            return Mb < 0 && Nb < 0 ? Nb : Mb > 0 && Nb > 0 ? Mb : 0;
        }
        getContext(Mb) {
            const Nb = this.ticks || [];
            if (Mb >= 0 && Mb < Nb.length) {
                const Ob = Nb[Mb];
                return Ob.$context || (Ob.$context = function(Pb, Qb, Rb) {
                    return (0, g.j)(Pb, {
                        tick: Rb,
                        index: Qb,
                        type: 'tick'
                    });
                }(this.getContext(), Mb, Ob));
            }
            return this.$context || (this.$context = (c = this.chart.getContext(), e = this, (0, g.j)(c, {
                scale: e,
                type: 'scale'
            })));
            var Ob, Pb;
        }
        _tickSize() {
            const Mb = this.options.ticks,
                Nb = (0, g.t)(this.labelRotation),
                Ob = Math.abs(Math.cos(Nb)),
                Pb = Math.abs(Math.sin(Nb)),
                Qb = this._getLabelSizes(),
                Rb = Mb.autoSkipPadding || 0,
                Sb = Qb ? Qb.widest.width + Rb : 0,
                Tb = Qb ? Qb.highest.height + Rb : 0;
            return this.isHorizontal() ? Tb * Ob > Sb * Pb ? Sb / Ob : Tb / Pb : Tb * Pb < Sb * Ob ? Tb / Ob : Sb / Pb;
        }
        _isVisible() {
            const Mb = this.options.display;
            return 'auto' !== Mb ? !!Mb : this.getMatchingVisibleMetas().length > 0;
        }
        _computeGridLineItems(Mb) {
            const Nb = this.axis,
                Ob = this.chart,
                Pb = this.options,
                {
                    grid: Qb,
                    position: Rb,
                    border: Sb
                } = Pb,
                Tb = Qb.offset,
                Ub = this.isHorizontal(),
                Vb = this.ticks.length + (Tb ? 1 : 0),
                Wb = Ib(Qb),
                Xb = [],
                Yb = Sb.setContext(this.getContext()),
                Zb = Yb.display ? Yb.width : 0,
                $b = Zb / 2,
                ac = function(bc) {
                    return (0, g.X)(Ob, bc, Zb);
                };
            let bc, cc, dc, ec, fc, gc, hc, ic, jc, kc, lc, mc;
            if ('top' === Rb)
                bc = ac(this.bottom), gc = this.bottom - Wb, ic = bc - $b, kc = ac(Mb.top) + $b, mc = Mb.bottom;
            else if ('bottom' === Rb)
                bc = ac(this.top), kc = Mb.top, mc = ac(Mb.bottom) - $b, gc = bc + $b, ic = this.top + Wb;
            else if ('left' === Rb)
                bc = ac(this.right), fc = this.right - Wb, hc = bc - $b, jc = ac(Mb.left) + $b, lc = Mb.right;
            else if ('right' === Rb)
                bc = ac(this.left), jc = Mb.left, lc = ac(Mb.right) - $b, fc = bc + $b, hc = this.left + Wb;
            else if ('x' === Nb) {
                if ('center' === Rb)
                    bc = ac((Mb.top + Mb.bottom) / 2 + 0.5);
                else if ((0, g.i)(Rb)) {
                    const nc = Object.keys(Rb)[0],
                        oc = Rb[nc];
                    bc = ac(this.chart.scales[nc].getPixelForValue(oc));
                }
                kc = Mb.top, mc = Mb.bottom, gc = bc + $b, ic = gc + Wb;
            } else if ('y' === Nb) {
                if ('center' === Rb)
                    bc = ac((Mb.left + Mb.right) / 2);
                else if ((0, g.i)(Rb)) {
                    const nc = Object.keys(Rb)[0],
                        oc = Rb[nc];
                    bc = ac(this.chart.scales[nc].getPixelForValue(oc));
                }
                fc = bc - $b, hc = fc - Wb, jc = Mb.left, lc = Mb.right;
            }
            const nc = (0, g.v)(Pb.ticks.maxTicksLimit, Vb),
                oc = Math.max(1, Math.ceil(Vb / nc));
            for (cc = 0; cc < Vb; cc += oc) {
                const pc = this.getContext(cc),
                    qc = Qb.setContext(pc),
                    rc = Sb.setContext(pc),
                    sc = qc.lineWidth,
                    tc = qc.color,
                    uc = rc.dash || [],
                    vc = rc.dashOffset,
                    wc = qc.tickWidth,
                    xc = qc.tickColor,
                    yc = qc.tickBorderDash || [],
                    zc = qc.tickBorderDashOffset;
                dc = Hb(this, cc, Tb), void 0 !== dc && (ec = (0, g.X)(Ob, dc, sc), Ub ? fc = hc = jc = lc = ec : gc = ic = kc = mc = ec, Xb.push({
                    tx1: fc,
                    ty1: gc,
                    tx2: hc,
                    ty2: ic,
                    x1: jc,
                    y1: kc,
                    x2: lc,
                    y2: mc,
                    width: sc,
                    color: tc,
                    borderDash: uc,
                    borderDashOffset: vc,
                    tickWidth: wc,
                    tickColor: xc,
                    tickBorderDash: yc,
                    tickBorderDashOffset: zc
                }));
            }
            return this._ticksLength = Vb, this._borderValue = bc, Xb;
        }
        _computeLabelItems(Mb) {
            const Nb = this.axis,
                Ob = this.options,
                {
                    position: Pb,
                    ticks: Qb
                } = Ob,
                Rb = this.isHorizontal(),
                Sb = this.ticks,
                {
                    align: Tb,
                    crossAlign: Ub,
                    padding: Vb,
                    mirror: Wb
                } = Qb,
                Xb = Ib(Ob.grid),
                Yb = Xb + Vb,
                Zb = Wb ? -Vb : Yb,
                $b = -(0, g.t)(this.labelRotation),
                ac = [];
            let bc, cc, dc, ec, fc, gc, hc, ic, jc, kc, lc, mc, nc = 'middle';
            if ('top' === Pb)
                gc = this.bottom - Zb, hc = this._getXAxisLabelAlignment();
            else if ('bottom' === Pb)
                gc = this.top + Zb, hc = this._getXAxisLabelAlignment();
            else if ('left' === Pb) {
                const oc = this._getYAxisLabelAlignment(Xb);
                hc = oc.textAlign, fc = oc.x;
            } else if ('right' === Pb) {
                const oc = this._getYAxisLabelAlignment(Xb);
                hc = oc.textAlign, fc = oc.x;
            } else if ('x' === Nb) {
                if ('center' === Pb)
                    gc = (Mb.top + Mb.bottom) / 2 + Yb;
                else if ((0, g.i)(Pb)) {
                    const oc = Object.keys(Pb)[0],
                        pc = Pb[oc];
                    gc = this.chart.scales[oc].getPixelForValue(pc) + Yb;
                }
                hc = this._getXAxisLabelAlignment();
            } else if ('y' === Nb) {
                if ('center' === Pb)
                    fc = (Mb.left + Mb.right) / 2 - Yb;
                else if ((0, g.i)(Pb)) {
                    const oc = Object.keys(Pb)[0],
                        pc = Pb[oc];
                    fc = this.chart.scales[oc].getPixelForValue(pc);
                }
                hc = this._getYAxisLabelAlignment(Xb).textAlign;
            }
            'y' === Nb && ('start' === Tb ? nc = 'top' : 'end' === Tb && (nc = 'bottom'));
            const oc = this._getLabelSizes();
            for (bc = 0, cc = Sb.length; bc < cc; ++bc) {
                dc = Sb[bc], ec = dc.label;
                const pc = Qb.setContext(this.getContext(bc));
                ic = this.getPixelForTick(bc) + Qb.labelOffset, jc = this._resolveTickFontOptions(bc), kc = jc.lineHeight, lc = (0, g.b)(ec) ? ec.length : 1;
                const qc = lc / 2,
                    rc = pc.color,
                    sc = pc.textStrokeColor,
                    tc = pc.textStrokeWidth;
                let uc, vc = hc;
                if (Rb ? (fc = ic, 'inner' === hc && (vc = bc === cc - 1 ? this.options.reverse ? 'left' : 'right' : 0 === bc ? this.options.reverse ? 'right' : 'left' : 'center'), mc = 'top' === Pb ? 'near' === Ub || 0 !== $b ? -lc * kc + kc / 2 : 'center' === Ub ? -oc.highest.height / 2 - qc * kc + kc : -oc.highest.height + kc / 2 : 'near' === Ub || 0 !== $b ? kc / 2 : 'center' === Ub ? oc.highest.height / 2 - qc * kc : oc.highest.height - lc * kc, Wb && (mc *= -1), 0 === $b || pc.showLabelBackdrop || (fc += kc / 2 * Math.sin($b))) : (gc = ic, mc = (1 - lc) * kc / 2), pc.showLabelBackdrop) {
                    const wc = (0, g.E)(pc.backdropPadding),
                        xc = oc.heights[bc],
                        yc = oc.widths[bc];
                    let zc = mc - wc.top,
                        Ac = 0 - wc.left;
                    switch (nc) {
                        case 'middle':
                            zc -= xc / 2;
                            break;
                        case 'bottom':
                            zc -= xc;
                    }
                    switch (hc) {
                        case 'center':
                            Ac -= yc / 2;
                            break;
                        case 'right':
                            Ac -= yc;
                    }
                    uc = {
                        left: Ac,
                        top: zc,
                        width: yc + wc.width,
                        height: xc + wc.height,
                        color: pc.backdropColor
                    };
                }
                ac.push({
                    label: ec,
                    font: jc,
                    textOffset: mc,
                    options: {
                        rotation: $b,
                        color: rc,
                        strokeColor: sc,
                        strokeWidth: tc,
                        textAlign: vc,
                        textBaseline: nc,
                        translation: [
                            fc,
                            gc
                        ],
                        backdrop: uc
                    }
                });
            }
            return ac;
        }
        _getXAxisLabelAlignment() {
            const {
                position: Mb,
                ticks: Nb
            } = this.options;
            if (-(0, g.t)(this.labelRotation))
                return 'top' === Mb ? 'left' : 'right';
            let Ob = 'center';
            return 'start' === Nb.align ? Ob = 'left' : 'end' === Nb.align ? Ob = 'right' : 'inner' === Nb.align && (Ob = 'inner'), Ob;
        }
        _getYAxisLabelAlignment(Mb) {
            const {
                position: Nb,
                ticks: {
                    crossAlign: Ob,
                    mirror: Pb,
                    padding: Qb
                }
            } = this.options, Rb = Mb + Qb, Sb = this._getLabelSizes().widest.width;
            let Tb, Ub;
            return 'left' === Nb ? Pb ? (Ub = this.right + Qb, 'near' === Ob ? Tb = 'left' : 'center' === Ob ? (Tb = 'center', Ub += Sb / 2) : (Tb = 'right', Ub += Sb)) : (Ub = this.right - Rb, 'near' === Ob ? Tb = 'right' : 'center' === Ob ? (Tb = 'center', Ub -= Sb / 2) : (Tb = 'left', Ub = this.left)) : 'right' === Nb ? Pb ? (Ub = this.left + Qb, 'near' === Ob ? Tb = 'right' : 'center' === Ob ? (Tb = 'center', Ub -= Sb / 2) : (Tb = 'left', Ub -= Sb)) : (Ub = this.left + Rb, 'near' === Ob ? Tb = 'left' : 'center' === Ob ? (Tb = 'center', Ub += Sb / 2) : (Tb = 'right', Ub = this.right)) : Tb = 'right', {
                textAlign: Tb,
                x: Ub
            };
        }
        _computeLabelArea() {
            if (this.options.ticks.mirror)
                return;
            const Mb = this.chart,
                Nb = this.options.position;
            return 'left' === Nb || 'right' === Nb ? {
                top: 0,
                left: this.left,
                bottom: Mb.height,
                right: this.right
            } : 'top' === Nb || 'bottom' === Nb ? {
                top: this.top,
                left: 0,
                bottom: this.bottom,
                right: Mb.width
            } : void 0;
        }
        drawBackground() {
            const {
                ctx: Mb,
                options: {
                    backgroundColor: Nb
                },
                left: Ob,
                top: Pb,
                width: Qb,
                height: Rb
            } = this;
            Nb && (Mb.save(), Mb.fillStyle = Nb, Mb.fillRect(Ob, Pb, Qb, Rb), Mb.restore());
        }
        getLineWidthForValue(Mb) {
            const Nb = this.options.grid;
            if (!this._isVisible() || !Nb.display)
                return 0;
            const Ob = this.ticks.findIndex(Nb => Nb.value === Mb);
            if (Ob >= 0) {
                return Nb.setContext(this.getContext(Ob)).lineWidth;
            }
            return 0;
        }
        drawGrid(Mb) {
            const Nb = this.options.grid,
                Ob = this.ctx,
                Pb = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(Mb));
            let Qb, Rb;
            const Sb = (Mb, Nb, Pb) => {
                Pb.width && Pb.color && (Ob.save(), Ob.lineWidth = Pb.width, Ob.strokeStyle = Pb.color, Ob.setLineDash(Pb.borderDash || []), Ob.lineDashOffset = Pb.borderDashOffset, Ob.beginPath(), Ob.moveTo(Mb.x, Mb.y), Ob.lineTo(Nb.x, Nb.y), Ob.stroke(), Ob.restore());
            };
            if (Nb.display)
                for (Qb = 0, Rb = Pb.length; Qb < Rb; ++Qb) {
                    const Tb = Pb[Qb];
                    Nb.drawOnChartArea && Sb({
                        x: Tb.x1,
                        y: Tb.y1
                    }, {
                        x: Tb.x2,
                        y: Tb.y2
                    }, Tb), Nb.drawTicks && Sb({
                        x: Tb.tx1,
                        y: Tb.ty1
                    }, {
                        x: Tb.tx2,
                        y: Tb.ty2
                    }, {
                        color: Tb.tickColor,
                        width: Tb.tickWidth,
                        borderDash: Tb.tickBorderDash,
                        borderDashOffset: Tb.tickBorderDashOffset
                    });
                }
        }
        drawBorder() {
            const {
                chart: Mb,
                ctx: Nb,
                options: {
                    border: Ob,
                    grid: Pb
                }
            } = this, Qb = Ob.setContext(this.getContext()), Rb = Ob.display ? Qb.width : 0;
            if (!Rb)
                return;
            const Sb = Pb.setContext(this.getContext(0)).lineWidth,
                Tb = this._borderValue;
            let Ub, Vb, Wb, Xb;
            this.isHorizontal() ? (Ub = (0, g.X)(Mb, this.left, Rb) - Rb / 2, Vb = (0, g.X)(Mb, this.right, Sb) + Sb / 2, Wb = Xb = Tb) : (Wb = (0, g.X)(Mb, this.top, Rb) - Rb / 2, Xb = (0, g.X)(Mb, this.bottom, Sb) + Sb / 2, Ub = Vb = Tb), Nb.save(), Nb.lineWidth = Qb.width, Nb.strokeStyle = Qb.color, Nb.beginPath(), Nb.moveTo(Ub, Wb), Nb.lineTo(Vb, Xb), Nb.stroke(), Nb.restore();
        }
        drawLabels(Mb) {
            if (!this.options.ticks.display)
                return;
            const Nb = this.ctx,
                Ob = this._computeLabelArea();
            Ob && (0, g.Y)(Nb, Ob);
            const Pb = this.getLabelItems(Mb);
            for (const Qb of Pb) {
                const Rb = Qb.options,
                    Sb = Qb.font,
                    Tb = Qb.label,
                    Ub = Qb.textOffset;
                (0, g.Z)(Nb, Tb, 0, Ub, Sb, Rb);
            }
            Ob && (0, g.$)(Nb);
        }
        drawTitle() {
            const {
                ctx: Mb,
                options: {
                    position: Nb,
                    title: Ob,
                    reverse: Pb
                }
            } = this;
            if (!Ob.display)
                return;
            const Qb = (0, g.a0)(Ob.font),
                Rb = (0, g.E)(Ob.padding),
                Sb = Ob.align;
            let Tb = Qb.lineHeight / 2;
            'bottom' === Nb || 'center' === Nb || (0, g.i)(Nb) ? (Tb += Rb.bottom, (0, g.b)(Ob.text) && (Tb += Qb.lineHeight * (Ob.text.length - 1))) : Tb += Rb.top;
            const {
                titleX: Ub,
                titleY: Vb,
                maxWidth: Wb,
                rotation: Xb
            } = function(Yb, Zb, $b, ac) {
                const {
                    top: bc,
                    left: cc,
                    bottom: dc,
                    right: ec,
                    chart: fc
                } = Yb, {
                    chartArea: gc,
                    scales: hc
                } = fc;
                let ic, jc, kc, lc = 0;
                const mc = dc - bc,
                    nc = ec - cc;
                if (Yb.isHorizontal()) {
                    if (jc = (0, g.a2)(ac, cc, ec), (0, g.i)($b)) {
                        const oc = Object.keys($b)[0],
                            pc = $b[oc];
                        kc = hc[oc].getPixelForValue(pc) + mc - Zb;
                    } else
                        kc = 'center' === $b ? (gc.bottom + gc.top) / 2 + mc - Zb : Fb(Yb, $b, Zb);
                    ic = ec - cc;
                } else {
                    if ((0, g.i)($b)) {
                        const oc = Object.keys($b)[0],
                            pc = $b[oc];
                        jc = hc[oc].getPixelForValue(pc) - nc + Zb;
                    } else
                        jc = 'center' === $b ? (gc.left + gc.right) / 2 - nc + Zb : Fb(Yb, $b, Zb);
                    kc = (0, g.a2)(ac, dc, bc), lc = 'left' === $b ? -g.H : g.H;
                }
                return {
                    titleX: jc,
                    titleY: kc,
                    maxWidth: ic,
                    rotation: lc
                };
            }(this, Tb, Nb, Sb);
            (0, g.Z)(Mb, Ob.text, 0, 0, Qb, {
                color: Ob.color,
                maxWidth: Wb,
                rotation: Xb,
                textAlign: Kb(Sb, Nb, Pb),
                textBaseline: 'middle',
                translation: [
                    Ub,
                    Vb
                ]
            });
        }
        draw(Mb) {
            this._isVisible() && (this.drawBackground(), this.drawGrid(Mb), this.drawBorder(), this.drawTitle(), this.drawLabels(Mb));
        }
        _layers() {
            const Mb = this.options,
                Nb = Mb.ticks && Mb.ticks.z || 0,
                Ob = (0, g.v)(Mb.grid && Mb.grid.z, -1),
                Pb = (0, g.v)(Mb.border && Mb.border.z, 0);
            return this._isVisible() && this.draw === Lb.prototype.draw ? [{
                    z: Ob,
                    draw: Mb => {
                        this.drawBackground(), this.drawGrid(Mb), this.drawTitle();
                    }
                },
                {
                    z: Pb,
                    draw: () => {
                        this.drawBorder();
                    }
                },
                {
                    z: Nb,
                    draw: Mb => {
                        this.drawLabels(Mb);
                    }
                }
            ] : [{
                z: Nb,
                draw: Mb => {
                    this.draw(Mb);
                }
            }];
        }
        getMatchingVisibleMetas(Mb) {
            const Nb = this.chart.getSortedVisibleDatasetMetas(),
                Ob = this.axis + 'AxisID',
                Pb = [];
            let Qb, Rb;
            for (Qb = 0, Rb = Nb.length; Qb < Rb; ++Qb) {
                const Sb = Nb[Qb];
                Sb[Ob] !== this.id || Mb && Sb.type !== Mb || Pb.push(Sb);
            }
            return Pb;
        }
        _resolveTickFontOptions(Mb) {
            const Nb = this.options.ticks.setContext(this.getContext(Mb));
            return (0, g.a0)(Nb.font);
        }
        _maxDigits() {
            const Mb = this._resolveTickFontOptions(0).lineHeight;
            return (this.isHorizontal() ? this.width : this.height) / Mb;
        }
        constructor(Mb) {
            super(), this.id = Mb.id, this.type = Mb.type, this.options = void 0, this.ctx = Mb.ctx, this.chart = Mb.chart, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this._margins = {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }, this.maxWidth = void 0, this.maxHeight = void 0, this.paddingTop = void 0, this.paddingBottom = void 0, this.paddingLeft = void 0, this.paddingRight = void 0, this.axis = void 0, this.labelRotation = void 0, this.min = void 0, this.max = void 0, this._range = void 0, this.ticks = [], this._gridLineItems = null, this._labelItems = null, this._labelSizes = null, this._length = 0, this._maxLength = 0, this._longestTextCache = {}, this._startPixel = void 0, this._endPixel = void 0, this._reversePixels = !1, this._userMax = void 0, this._userMin = void 0, this._suggestedMax = void 0, this._suggestedMin = void 0, this._ticksLength = 0, this._borderValue = 0, this._cache = {}, this._dataLimitsCached = !1, this.$context = void 0;
        }
    }
    class Mb {
        isForType(Nb) {
            return Object.prototype.isPrototypeOf.call(this.type.prototype, Nb.prototype);
        }
        register(Nb) {
            const Ob = Object.getPrototypeOf(Nb);
            let Pb;
            (function(Qb) {
                return 'id' in Qb && 'defaults' in Qb;
            }(Ob) && (Pb = this.register(Ob)));
            const Qb = this.items,
                Rb = Nb.id,
                Sb = this.scope + '.' + Rb;
            if (!Rb)
                throw new Error('class does not have id: ' + Nb);
            return Rb in Qb || (Qb[Rb] = Nb, function(Tb, Ub, Vb) {
                const Wb = (0, g.a4)(Object.create(null), [
                    Vb ? g.d.get(Vb) : {},
                    g.d.get(Ub),
                    Tb.defaults
                ]);
                g.d.set(Ub, Wb), Tb.defaultRoutes && function(Xb, Yb) {
                    Object.keys(Yb).forEach(Vb => {
                        const Zb = Vb.split('.'),
                            $b = Zb.pop(),
                            ac = [Xb].concat(Zb).join('.'),
                            bc = Yb[Vb].split('.'),
                            cc = bc.pop(),
                            dc = bc.join('.');
                        g.d.route(ac, $b, dc, cc);
                    });
                }(Ub, Tb.defaultRoutes);
                Tb.descriptors && g.d.describe(Ub, Tb.descriptors);
            }(Nb, Sb, Pb), this.override && g.d.override(Nb.id, Nb.overrides)), Sb;
        }
        get(Nb) {
            return this.items[Nb];
        }
        unregister(Nb) {
            const Ob = this.items,
                Pb = Nb.id,
                Qb = this.scope;
            Pb in Ob && delete Ob[Pb], Qb && Pb in g.d[Qb] && (delete g.d[Qb][Pb], this.override && delete g.a3[Pb]);
        }
        constructor(Nb, Ob, Pb) {
            this.type = Nb, this.scope = Ob, this.override = Pb, this.items = Object.create(null);
        }
    }
    class Nb {
        add(...a) {
            this._each('register', a);
        }
        remove(...a) {
            this._each('unregister', a);
        }
        addControllers(...a) {
            this._each('register', a, this.controllers);
        }
        addElements(...a) {
            this._each('register', a, this.elements);
        }
        addPlugins(...a) {
            this._each('register', a, this.plugins);
        }
        addScales(...a) {
            this._each('register', a, this.scales);
        }
        getController(Ob) {
            return this._get(Ob, this.controllers, 'controller');
        }
        getElement(Ob) {
            return this._get(Ob, this.elements, 'element');
        }
        getPlugin(Ob) {
            return this._get(Ob, this.plugins, 'plugin');
        }
        getScale(Ob) {
            return this._get(Ob, this.scales, 'scale');
        }
        removeControllers(...a) {
            this._each('unregister', a, this.controllers);
        }
        removeElements(...a) {
            this._each('unregister', a, this.elements);
        }
        removePlugins(...a) {
            this._each('unregister', a, this.plugins);
        }
        removeScales(...a) {
            this._each('unregister', a, this.scales);
        }
        _each(Ob, Pb, Qb) {
            [...Pb].forEach(Pb => {
                const Rb = Qb || this._getRegistryForType(Pb);
                Qb || Rb.isForType(Pb) || Rb === this.plugins && Pb.id ? this._exec(Ob, Rb, Pb) : (0, g.F)(Pb, Pb => {
                    const Sb = Qb || this._getRegistryForType(Pb);
                    this._exec(Ob, Sb, Pb);
                });
            });
        }
        _exec(Ob, Pb, Qb) {
            const Rb = (0, g.a5)(Ob);
            (0, g.Q)(Qb['before' + Rb], [], Qb), Pb[Ob](Qb), (0, g.Q)(Qb['after' + Rb], [], Qb);
        }
        _getRegistryForType(Ob) {
            for (let Pb = 0; Pb < this._typedRegistries.length; Pb++) {
                const Qb = this._typedRegistries[Pb];
                if (Qb.isForType(Ob))
                    return Qb;
            }
            return this.plugins;
        }
        _get(Ob, Pb, Qb) {
            const Rb = Pb.get(Ob);
            if (void 0 === Rb)
                throw new Error('"' + Ob + '" is not a registered ' + Qb + '.');
            return Rb;
        }
        constructor() {
            this.controllers = new Mb(y, 'datasets', !0), this.elements = new Mb(Cb, 'elements'), this.plugins = new Mb(Object, 'plugins'), this.scales = new Mb(Lb, 'scales'), this._typedRegistries = [
                this.controllers,
                this.scales,
                this.elements
            ];
        }
    }
    var Ob = new Nb();
    class Pb {
        notify(Qb, Rb, Sb, Tb) {
            'beforeInit' === Rb && (this._init = this._createDescriptors(Qb, !0), this._notify(this._init, Qb, 'install'));
            const Ub = Tb ? this._descriptors(Qb).filter(Tb) : this._descriptors(Qb),
                Vb = this._notify(Ub, Qb, Rb, Sb);
            return 'afterDestroy' === Rb && (this._notify(Ub, Qb, 'stop'), this._notify(this._init, Qb, 'uninstall')), Vb;
        }
        _notify(Qb, Rb, Sb, Tb) {
            Tb = Tb || {};
            for (const Ub of Qb) {
                const Vb = Ub.plugin,
                    Wb = Vb[Sb],
                    Xb = [
                        Rb,
                        Tb,
                        Ub.options
                    ];
                if (!1 === (0, g.Q)(Wb, Xb, Vb) && Tb.cancelable)
                    return !1;
            }
            return !0;
        }
        invalidate() {
            (0, g.k)(this._cache) || (this._oldCache = this._cache, this._cache = void 0);
        }
        _descriptors(Qb) {
            if (this._cache)
                return this._cache;
            const Rb = this._cache = this._createDescriptors(Qb);
            return this._notifyStateChanges(Qb), Rb;
        }
        _createDescriptors(Qb, Rb) {
            const Sb = Qb && Qb.config,
                Tb = (0, g.v)(Sb.options && Sb.options.plugins, {}),
                Ub = function(Vb) {
                    const Wb = {},
                        Xb = [],
                        Yb = Object.keys(Ob.plugins.items);
                    for (let Zb = 0; Zb < Yb.length; Zb++)
                        Xb.push(Ob.getPlugin(Yb[Zb]));
                    const $b = Zb.plugins || [];
                    for (let ac = 0; ac < $b.length; ac++) {
                        const bc = $b[ac]; -
                        1 === Xb.indexOf(bc) && (Xb.push(bc), Wb[bc.id] = !0);
                    }
                    return {
                        plugins: Xb,
                        localIds: Wb
                    };
                }(Sb);
            return !1 !== Tb || Rb ? function(Vb, {
                plugins: Wb,
                localIds: Xb
            }, Yb, Zb) {
                const $b = [],
                    ac = Vb.getContext();
                for (const bc of Wb) {
                    const cc = bc.id,
                        dc = _Qb(Yb[cc], Zb);
                    null !== dc && $b.push({
                        plugin: bc,
                        options: _Rb(Vb.config, {
                            plugin: bc,
                            local: Xb[cc]
                        }, dc, ac)
                    });
                }
                return $b;
            }(Qb, Ub, Tb, Rb) : [];
        }
        _notifyStateChanges(Qb) {
            const Rb = this._oldCache || [],
                Sb = this._cache,
                Tb = (Qb, Rb) => Qb.filter(Qb => !Rb.some(Rb => Qb.plugin.id === Rb.plugin.id));
            this._notify(Tb(Rb, Sb), Qb, 'stop'), this._notify(Tb(Sb, Rb), Qb, 'start');
        }
        constructor() {
            this._init = [];
        }
    }

    function _Qb(Rb, Sb) {
        return Sb || !1 !== Rb ? !0 === Rb ? {} : Rb : null;
    }

    function _Rb(Sb, {
        plugin: Tb,
        local: Ub
    }, Vb, Wb) {
        const Xb = Sb.pluginScopeKeys(Tb),
            Yb = Sb.getOptionScopes(Vb, Xb);
        return Ub && Tb.defaults && Yb.push(Tb.defaults), Sb.createResolver(Yb, Wb, [''], {
            scriptable: !1,
            indexable: !1,
            allKeys: !0
        });
    }

    function Sb(Tb, Ub) {
        const Vb = g.d.datasets[Tb] || {};
        return ((Ub.datasets || {})[Tb] || {}).indexAxis || Ub.indexAxis || Vb.indexAxis || 'x';
    }

    function Tb(Ub, Vb) {
        if ('x' === Ub || 'y' === Ub || 'r' === Ub)
            return Ub;
        var Wb;
        if (Ub = Vb.axis || ('top' === (Wb = Vb.position) || 'bottom' === Wb ? 'x' : 'left' === Wb || 'right' === Wb ? 'y' : void 0) || Ub.length > 1 && Tb(Ub[0].toLowerCase(), Vb))
            return Ub;
        throw new Error(`Cannot determine type of '${ name }' axis. Please provide 'axis' or 'position' option.`);
    }

    function Ub(Vb) {
        const Wb = Vb.options || (Vb.options = {});
        Wb.plugins = (0, g.v)(Wb.plugins, {}), Wb.scales = function(Xb, Yb) {
            const Zb = g.a3[Xb.type] || {
                    scales: {}
                },
                $b = Yb.scales || {},
                ac = Sb(Xb.type, Yb),
                bc = Object.create(null);
            return Object.keys($b).forEach(Xb => {
                const cc = $b[Xb];
                if (!(0, g.i)(cc))
                    return console.error(`Invalid scale configuration for scale: ${ Xb }`);
                if (cc._proxy)
                    return console.warn(`Ignoring resolver passed as options for scale: ${ Xb }`);
                const dc = Tb(Xb, cc),
                    ec = function(fc, gc) {
                        return fc === gc ? '_index_' : '_value_';
                    }(dc, ac),
                    fc = Zb.scales || {};
                bc[Xb] = (0, g.ab)(Object.create(null), [{
                        axis: dc
                    },
                    cc,
                    fc[dc],
                    fc[ec]
                ]);
            }), Xb.data.datasets.forEach(Zb => {
                const cc = Zb.type || Xb.type,
                    dc = Zb.indexAxis || Sb(cc, Yb),
                    ec = (g.a3[cc] || {}).scales || {};
                Object.keys(ec).forEach(Xb => {
                    const fc = function(gc, hc) {
                            let ic = gc;
                            return '_index_' === gc ? ic = hc : '_value_' === gc && (ic = 'x' === hc ? 'y' : 'x'), ic;
                        }(Xb, dc),
                        gc = Zb[fc + 'AxisID'] || fc;
                    bc[gc] = bc[gc] || Object.create(null), (0, g.ab)(bc[gc], [{
                            axis: fc
                        },
                        $b[gc],
                        ec[Xb]
                    ]);
                });
            }), Object.keys(bc).forEach(Xb => {
                const cc = bc[Xb];
                (0, g.ab)(cc, [
                    g.d.scales[cc.type],
                    g.d.scale
                ]);
            }), bc;
        }(Vb, Wb);
    }

    function Vb(Wb) {
        return (Wb = Wb || {}).datasets = Wb.datasets || [], Wb.labels = Wb.labels || [], Wb;
    }
    const Wb = new Map(),
        Xb = new Set();

    function Yb(Zb, $b) {
        let ac = Wb.get(Zb);
        return ac || (ac = $b(), Wb.set(Zb, ac), Xb.add(ac)), ac;
    }
    const Zb = (a, d, c) => {
        const $b = (0, g.f)(d, c);
        void 0 !== $b && a.add($b);
    };
    class $b {
        get platform() {
            return this._config.platform;
        }
        get type() {
            return this._config.type;
        }
        set type(ac) {
            this._config.type = ac;
        }
        get data() {
            return this._config.data;
        }
        set data(ac) {
            this._config.data = Vb(ac);
        }
        get options() {
            return this._config.options;
        }
        set options(ac) {
            this._config.options = ac;
        }
        get plugins() {
            return this._config.plugins;
        }
        update() {
            const ac = this._config;
            this.clearCache(), Ub(ac);
        }
        clearCache() {
            this._scopeCache.clear(), this._resolverCache.clear();
        }
        datasetScopeKeys(ac) {
            return Yb(ac, () => [
                [
                    `datasets.${ ac }`,
                    ''
                ]
            ]);
        }
        datasetAnimationScopeKeys(ac, bc) {
            return Yb(`${ ac }.transition.${ bc }`, () => [
                [
                    `datasets.${ ac }.transitions.${ bc }`,
                    `transitions.${ bc }`
                ],
                [
                    `datasets.${ ac }`,
                    ''
                ]
            ]);
        }
        datasetElementScopeKeys(ac, bc) {
            return Yb(`${ ac }-${ bc }`, () => [
                [
                    `datasets.${ ac }.elements.${ bc }`,
                    `datasets.${ ac }`,
                    `elements.${ bc }`,
                    ''
                ]
            ]);
        }
        pluginScopeKeys(ac) {
            const bc = ac.id;
            return Yb(`${ this.type }-plugin-${ bc }`, () => [
                [
                    `plugins.${ bc }`,
                    ...ac.additionalOptionScopes || []
                ]
            ]);
        }
        _cachedScopes(ac, bc) {
            const cc = this._scopeCache;
            let dc = cc.get(ac);
            return dc && !bc || (dc = new Map(), cc.set(ac, dc)), dc;
        }
        getOptionScopes(ac, bc, cc) {
            const {
                options: dc,
                type: ec
            } = this, fc = this._cachedScopes(ac, cc), gc = fc.get(bc);
            if (gc)
                return gc;
            const hc = new Set();
            bc.forEach(bc => {
                ac && (hc.add(ac), bc.forEach(bc => Zb(hc, ac, bc))), bc.forEach(ac => Zb(hc, dc, ac)), bc.forEach(ac => Zb(hc, g.a3[ec] || {}, ac)), bc.forEach(ac => Zb(hc, g.d, ac)), bc.forEach(ac => Zb(hc, g.a6, ac));
            });
            const ic = Array.from(hc);
            return 0 === ic.length && ic.push(Object.create(null)), Xb.has(bc) && fc.set(bc, ic), ic;
        }
        chartOptionScopes() {
            const {
                options: ac,
                type: bc
            } = this;
            return [
                ac,
                g.a3[bc] || {},
                g.d.datasets[bc] || {},
                {
                    type: bc
                },
                g.d,
                g.a6
            ];
        }
        resolveNamedOptions(ac, bc, cc, dc = ['']) {
            const ec = {
                    $shared: !0
                },
                {
                    resolver: fc,
                    subPrefixes: gc
                } = _ac(this._resolverCache, ac, dc);
            let hc = fc;
            if (function(ic, jc) {
                    const {
                        isScriptable: kc,
                        isIndexable: lc
                    } = (0, g.aa)(ic);
                    for (const mc of jc) {
                        const nc = kc(mc),
                            oc = lc(mc),
                            pc = (oc || nc) && ic[mc];
                        if (nc && ((0, g.a7)(pc) || _bc(pc)) || oc && (0, g.b)(pc))
                            return !0;
                    }
                    return !1;
                }(fc, bc)) {
                ec.$shared = !1, cc = (0, g.a7)(cc) ? cc() : cc;
                const ic = this.createResolver(ac, cc, gc);
                hc = (0, g.a8)(fc, cc, ic);
            }
            for (const ic of bc)
                ec[ic] = hc[ic];
            return ec;
        }
        createResolver(ac, bc, cc = [''], dc) {
            const {
                resolver: ec
            } = _ac(this._resolverCache, ac, cc);
            return (0, g.i)(bc) ? (0, g.a8)(ec, bc, void 0, dc) : ec;
        }
        constructor(ac) {
            this._config = function(bc) {
                return (bc = bc || {}).data = Vb(bc.data), Ub(bc), bc;
            }(ac), this._scopeCache = new Map(), this._resolverCache = new Map();
        }
    }

    function _ac(bc, cc, dc) {
        let ec = bc.get(cc);
        ec || (ec = new Map(), bc.set(cc, ec));
        const fc = dc.join();
        let gc = ec.get(fc);
        if (!gc) {
            gc = {
                resolver: (0, g.a9)(cc, dc),
                subPrefixes: dc.filter(bc => !bc.toLowerCase().includes('hover'))
            }, ec.set(fc, gc);
        }
        return gc;
    }
    const _bc = a => (0, g.i)(a) && Object.getOwnPropertyNames(a).reduce((d, c) => d || (0, g.a7)(a[c]), !1);
    const cc = [
        'top',
        'bottom',
        'left',
        'right',
        'chartArea'
    ];

    function dc(ec, fc) {
        return 'top' === ec || 'bottom' === ec || -1 === cc.indexOf(ec) && 'x' === fc;
    }

    function ec(fc, gc) {
        return function(hc, ic) {
            return hc[fc] === ic[fc] ? hc[gc] - ic[gc] : hc[fc] - ic[fc];
        };
    }

    function fc(gc) {
        const hc = gc.chart,
            ic = hc.options.animation;
        hc.notifyPlugins('afterRender'), (0, g.Q)(ic && ic.onComplete, [gc], hc);
    }

    function gc(hc) {
        const ic = hc.chart,
            jc = ic.options.animation;
        (0, g.Q)(jc && jc.onProgress, [hc], ic);
    }

    function hc(ic) {
        return (0, g.M)() && 'string' == typeof ic ? ic = document.getElementById(ic) : ic && ic.length && (ic = ic[0]), ic && ic.canvas && (ic = ic.canvas), ic;
    }
    const ic = {},
        jc = a => {
            const kc = hc(a);
            return Object.values(ic).filter(a => a.canvas === kc).pop();
        };

    function kc(lc, mc, nc) {
        const oc = Object.keys(lc);
        for (const pc of oc) {
            const qc = +pc;
            if (qc >= mc) {
                const rc = lc[pc];
                delete lc[pc], (nc > 0 || qc > mc) && (lc[qc + nc] = rc);
            }
        }
    }
    class _lc {
        static register(...a) {
            Ob.add(...a), _mc();
        }
        static unregister(...a) {
            Ob.remove(...a), _mc();
        }
        get aspectRatio() {
            const {
                options: {
                    aspectRatio: mc,
                    maintainAspectRatio: nc
                },
                width: oc,
                height: pc,
                _aspectRatio: qc
            } = this;
            return (0, g.k)(mc) ? nc && qc ? qc : pc ? oc / pc : null : mc;
        }
        get data() {
            return this.config.data;
        }
        set data(mc) {
            this.config.data = mc;
        }
        get options() {
            return this._options;
        }
        set options(mc) {
            this.config.options = mc;
        }
        get registry() {
            return Ob;
        }
        _initialize() {
            return this.notifyPlugins('beforeInit'), this.options.responsive ? this.resize() : (0, g.ae)(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins('afterInit'), this;
        }
        clear() {
            return (0, g.af)(this.canvas, this.ctx), this;
        }
        stop() {
            return i.stop(this), this;
        }
        resize(mc, nc) {
            i.running(this) ? this._resizeBeforeDraw = {
                width: mc,
                height: nc
            } : this._resize(mc, nc);
        }
        _resize(mc, nc) {
            const oc = this.options,
                pc = this.canvas,
                qc = oc.maintainAspectRatio && this.aspectRatio,
                rc = this.platform.getMaximumSize(pc, mc, nc, qc),
                sc = oc.devicePixelRatio || this.platform.getDevicePixelRatio(),
                tc = this.width ? 'resize' : 'attach';
            this.width = rc.width, this.height = rc.height, this._aspectRatio = this.aspectRatio, (0, g.ae)(this, sc, !0) && (this.notifyPlugins('resize', {
                size: rc
            }), (0, g.Q)(oc.onResize, [
                this,
                rc
            ], this), this.attached && this._doResize(tc) && this.render());
        }
        ensureScalesHaveIDs() {
            const mc = this.options.scales || {};
            (0, g.F)(mc, (mc, d) => {
                mc.id = d;
            });
        }
        buildOrUpdateScales() {
            const mc = this.options,
                nc = mc.scales,
                oc = this.scales,
                pc = Object.keys(oc).reduce((mc, nc) => (mc[nc] = !1, mc), {});
            let qc = [];
            nc && (qc = qc.concat(Object.keys(nc).map(mc => {
                const rc = nc[mc],
                    sc = Tb(mc, rc),
                    tc = 'r' === sc,
                    uc = 'x' === sc;
                return {
                    options: rc,
                    dposition: tc ? 'chartArea' : uc ? 'bottom' : 'left',
                    dtype: tc ? 'radialLinear' : uc ? 'category' : 'linear'
                };
            }))), (0, g.F)(qc, nc => {
                const rc = nc.options,
                    sc = rc.id,
                    tc = Tb(sc, rc),
                    uc = (0, g.v)(rc.type, nc.dtype);
                void 0 !== rc.position && dc(rc.position, tc) === dc(nc.dposition) || (rc.position = nc.dposition), pc[sc] = !0;
                let vc = null;
                if (sc in oc && oc[sc].type === uc)
                    vc = oc[sc];
                else {
                    vc = new(Ob.getScale(uc))({
                        id: sc,
                        type: uc,
                        ctx: this.ctx,
                        chart: this
                    }), oc[vc.id] = vc;
                }
                vc.init(rc, mc);
            }), (0, g.F)(pc, (mc, nc) => {
                mc || delete oc[nc];
            }), (0, g.F)(oc, mc => {
                kb.configure(this, mc, mc.options), kb.addBox(this, mc);
            });
        }
        _updateMetasets() {
            const mc = this._metasets,
                nc = this.data.datasets.length,
                oc = mc.length;
            if (mc.sort((mc, nc) => mc.index - nc.index), oc > nc) {
                for (let pc = nc; pc < oc; ++pc)
                    this._destroyDatasetMeta(pc);
                pc.splice(nc, oc - nc);
            }
            this._sortedMetasets = mc.slice(0).sort(ec('order', 'index'));
        }
        _removeUnreferencedMetasets() {
            const {
                _metasets: mc,
                data: {
                    datasets: nc
                }
            } = this;
            mc.length > nc.length && delete this._stacks, mc.forEach((mc, c) => {
                0 === nc.filter(nc => nc === mc._dataset).length && this._destroyDatasetMeta(c);
            });
        }
        buildOrUpdateControllers() {
            const mc = [],
                nc = this.data.datasets;
            let oc, pc;
            for (this._removeUnreferencedMetasets(), oc = 0, pc = nc.length; oc < pc; oc++) {
                const qc = nc[oc];
                let rc = this.getDatasetMeta(oc);
                const sc = qc.type || this.config.type;
                if (rc.type && rc.type !== sc && (this._destroyDatasetMeta(oc), rc = this.getDatasetMeta(oc)), rc.type = sc, rc.indexAxis = qc.indexAxis || Sb(sc, this.options), rc.order = qc.order || 0, rc.index = oc, rc.label = '' + qc.label, rc.visible = this.isDatasetVisible(oc), rc.controller)
                    rc.controller.updateIndex(oc), rc.controller.linkScales();
                else {
                    const tc = Ob.getController(sc),
                        {
                            datasetElementType: uc,
                            dataElementType: vc
                        } = g.d.datasets[sc];
                    Object.assign(tc, {
                        dataElementType: Ob.getElement(vc),
                        datasetElementType: uc && Ob.getElement(uc)
                    }), rc.controller = new tc(this, oc), mc.push(rc.controller);
                }
            }
            return this._updateMetasets(), mc;
        }
        _resetElements() {
            (0, g.F)(this.data.datasets, (a, d) => {
                this.getDatasetMeta(d).controller.reset();
            }, this);
        }
        reset() {
            this._resetElements(), this.notifyPlugins('reset');
        }
        update(mc) {
            const nc = this.config;
            nc.update();
            const oc = this._options = nc.createResolver(nc.chartOptionScopes(), this.getContext()),
                pc = this._animationsDisabled = !oc.animation;
            if (this._updateScales(), this._checkEventBindings(), this._updateHiddenIndices(), this._plugins.invalidate(), !1 === this.notifyPlugins('beforeUpdate', {
                    mode: mc,
                    cancelable: !0
                }))
                return;
            const qc = this.buildOrUpdateControllers();
            this.notifyPlugins('beforeElementsUpdate');
            let rc = 0;
            for (let sc = 0, tc = this.data.datasets.length; sc < tc; sc++) {
                const {
                    controller: uc
                } = this.getDatasetMeta(sc), vc = !pc && -1 === qc.indexOf(uc);
                uc.buildOrUpdateElements(vc), rc = Math.max(+uc.getMaxOverflow(), rc);
            }
            rc = this._minPadding = oc.layout.autoPadding ? rc : 0, this._updateLayout(rc), pc || (0, g.F)(qc, sc => {
                sc.reset();
            }), this._updateDatasets(sc), this.notifyPlugins('afterUpdate', {
                mode: sc
            }), this._layers.sort(ec('z', '_idx'));
            const {
                _active: uc,
                _lastEvent: vc
            } = this;
            vc ? this._eventHandler(vc, !0) : uc.length && this._updateHoverStyles(uc, uc, !0), this.render();
        }
        _updateScales() {
            (0, g.F)(this.scales, a => {
                kb.removeBox(this, a);
            }), this.ensureScalesHaveIDs(), this.buildOrUpdateScales();
        }
        _checkEventBindings() {
            const mc = this.options,
                nc = new Set(Object.keys(this._listeners)),
                oc = new Set(mc.events);
            (0, g.ag)(nc, oc) && !!this._responsiveListeners === mc.responsive || (this.unbindEvents(), this.bindEvents());
        }
        _updateHiddenIndices() {
            const {
                _hiddenIndices: mc
            } = this, nc = this._getUniformDataChanges() || [];
            for (const {
                    method: oc,
                    start: pc,
                    count: qc
                }
                of nc) {
                kc(mc, pc, '_removeElements' === oc ? -qc : qc);
            }
        }
        _getUniformDataChanges() {
            const mc = this._dataChanges;
            if (!mc || !mc.length)
                return;
            this._dataChanges = [];
            const nc = this.data.datasets.length,
                oc = nc => new Set(mc.filter(mc => mc[0] === nc).map((mc, nc) => nc + ',' + mc.splice(1).join(','))),
                pc = oc(0);
            for (let qc = 1; qc < nc; qc++)
                if (!(0, g.ag)(pc, oc(qc)))
                    return;
            return Array.from(pc).map(qc => qc.split(',')).map(qc => ({
                method: qc[1],
                start: +qc[2],
                count: +qc[3]
            }));
        }
        _updateLayout(mc) {
            if (!1 === this.notifyPlugins('beforeLayout', {
                    cancelable: !0
                }))
                return;
            kb.update(this, this.width, this.height, mc);
            const nc = this.chartArea,
                oc = nc.width <= 0 || nc.height <= 0;
            this._layers = [], (0, g.F)(this.boxes, mc => {
                oc && 'chartArea' === mc.position || (mc.configure && mc.configure(), this._layers.push(...mc._layers()));
            }, this), this._layers.forEach((mc, nc) => {
                mc._idx = nc;
            }), this.notifyPlugins('afterLayout');
        }
        _updateDatasets(mc) {
            if (!1 !== this.notifyPlugins('beforeDatasetsUpdate', {
                    mode: mc,
                    cancelable: !0
                })) {
                for (let nc = 0, oc = this.data.datasets.length; nc < oc; ++nc)
                    this.getDatasetMeta(nc).controller.configure();
                for (let pc = 0, qc = this.data.datasets.length; pc < qc; ++pc)
                    this._updateDataset(pc, (0, g.a7)(nc) ? nc({
                        datasetIndex: pc
                    }) : nc);
                this.notifyPlugins('afterDatasetsUpdate', {
                    mode: nc
                });
            }
        }
        _updateDataset(mc, nc) {
            const oc = this.getDatasetMeta(mc),
                pc = {
                    meta: oc,
                    index: mc,
                    mode: nc,
                    cancelable: !0
                };
            !1 !== this.notifyPlugins('beforeDatasetUpdate', pc) && (oc.controller._update(nc), pc.cancelable = !1, this.notifyPlugins('afterDatasetUpdate', pc));
        }
        render() {
            !1 !== this.notifyPlugins('beforeRender', {
                cancelable: !0
            }) && (i.has(this) ? this.attached && !i.running(this) && i.start(this) : (this.draw(), fc({
                chart: this
            })));
        }
        draw() {
            let mc;
            if (this._resizeBeforeDraw) {
                const {
                    width: nc,
                    height: oc
                } = this._resizeBeforeDraw;
                this._resize(nc, oc), this._resizeBeforeDraw = null;
            }
            if (this.clear(), this.width <= 0 || this.height <= 0)
                return;
            if (!1 === this.notifyPlugins('beforeDraw', {
                    cancelable: !0
                }))
                return;
            const nc = this._layers;
            for (mc = 0; mc < nc.length && nc[mc].z <= 0; ++mc)
                nc[mc].draw(this.chartArea);
            for (this._drawDatasets(); mc < nc.length; ++mc)
                nc[mc].draw(this.chartArea);
            this.notifyPlugins('afterDraw');
        }
        _getSortedDatasetMetas(mc) {
            const nc = this._sortedMetasets,
                oc = [];
            let pc, qc;
            for (pc = 0, qc = nc.length; pc < qc; ++pc) {
                const rc = nc[pc];
                mc && !rc.visible || oc.push(rc);
            }
            return oc;
        }
        getSortedVisibleDatasetMetas() {
            return this._getSortedDatasetMetas(!0);
        }
        _drawDatasets() {
            if (!1 === this.notifyPlugins('beforeDatasetsDraw', {
                    cancelable: !0
                }))
                return;
            const mc = this.getSortedVisibleDatasetMetas();
            for (let nc = mc.length - 1; nc >= 0; --nc)
                this._drawDataset(mc[nc]);
            this.notifyPlugins('afterDatasetsDraw');
        }
        _drawDataset(mc) {
            const nc = this.ctx,
                oc = mc._clip,
                pc = !oc.disabled,
                qc = function(rc) {
                    const {
                        xScale: sc,
                        yScale: tc
                    } = rc;
                    if (sc && tc)
                        return {
                            left: sc.left,
                            right: sc.right,
                            top: tc.top,
                            bottom: tc.bottom
                        };
                }(mc) || this.chartArea,
                rc = {
                    meta: mc,
                    index: mc.index,
                    cancelable: !0
                };
            !1 !== this.notifyPlugins('beforeDatasetDraw', rc) && (pc && (0, g.Y)(nc, {
                left: !1 === oc.left ? 0 : qc.left - oc.left,
                right: !1 === oc.right ? this.width : qc.right + oc.right,
                top: !1 === oc.top ? 0 : qc.top - oc.top,
                bottom: !1 === oc.bottom ? this.height : qc.bottom + oc.bottom
            }), mc.controller.draw(), pc && (0, g.$)(nc), rc.cancelable = !1, this.notifyPlugins('afterDatasetDraw', rc));
        }
        isPointInArea(mc) {
            return (0, g.C)(mc, this.chartArea, this._minPadding);
        }
        getElementsAtEventForMode(mc, nc, oc, pc) {
            const qc = Y.modes[nc];
            return 'function' == typeof qc ? qc(this, mc, oc, pc) : [];
        }
        getDatasetMeta(mc) {
            const nc = this.data.datasets[mc],
                oc = this._metasets;
            let pc = oc.filter(mc => mc && mc._dataset === nc).pop();
            return pc || (pc = {
                type: null,
                data: [],
                dataset: null,
                controller: null,
                hidden: null,
                xAxisID: null,
                yAxisID: null,
                order: nc && nc.order || 0,
                index: mc,
                _dataset: nc,
                _parsed: [],
                _sorted: !1
            }, oc.push(pc)), pc;
        }
        getContext() {
            return this.$context || (this.$context = (0, g.j)(null, {
                chart: this,
                type: 'chart'
            }));
        }
        getVisibleDatasetCount() {
            return this.getSortedVisibleDatasetMetas().length;
        }
        isDatasetVisible(mc) {
            const nc = this.data.datasets[mc];
            if (!nc)
                return !1;
            const oc = this.getDatasetMeta(mc);
            return 'boolean' == typeof oc.hidden ? !oc.hidden : !nc.hidden;
        }
        setDatasetVisibility(mc, nc) {
            this.getDatasetMeta(mc).hidden = !nc;
        }
        toggleDataVisibility(mc) {
            this._hiddenIndices[mc] = !this._hiddenIndices[mc];
        }
        getDataVisibility(mc) {
            return !this._hiddenIndices[mc];
        }
        _updateVisibility(mc, nc, oc) {
            const pc = oc ? 'show' : 'hide',
                qc = this.getDatasetMeta(mc),
                rc = qc.controller._resolveAnimations(void 0, pc);
            (0, g.h)(nc) ? (qc.data[nc].hidden = !oc, this.update()) : (this.setDatasetVisibility(mc, oc), rc.update(qc, {
                visible: oc
            }), this.update(nc => nc.datasetIndex === mc ? pc : void 0));
        }
        hide(mc, nc) {
            this._updateVisibility(mc, nc, !1);
        }
        show(mc, nc) {
            this._updateVisibility(mc, nc, !0);
        }
        _destroyDatasetMeta(mc) {
            const nc = this._metasets[mc];
            nc && nc.controller && nc.controller._destroy(), delete this._metasets[mc];
        }
        _stop() {
            let mc, nc;
            for (this.stop(), i.remove(this), mc = 0, nc = this.data.datasets.length; mc < nc; ++mc)
                this._destroyDatasetMeta(mc);
        }
        destroy() {
            this.notifyPlugins('beforeDestroy');
            const {
                canvas: mc,
                ctx: nc
            } = this;
            this._stop(), this.config.clearCache(), mc && (this.unbindEvents(), (0, g.af)(mc, nc), this.platform.releaseContext(nc), this.canvas = null, this.ctx = null), delete ic[this.id], this.notifyPlugins('afterDestroy');
        }
        toBase64Image(...a) {
            return this.canvas.toDataURL(...a);
        }
        bindEvents() {
            this.bindUserEvents(), this.options.responsive ? this.bindResponsiveEvents() : this.attached = !0;
        }
        bindUserEvents() {
            const mc = this._listeners,
                nc = this.platform,
                oc = (oc, e) => {
                    nc.addEventListener(this, oc, e), mc[oc] = e;
                },
                pc = (mc, nc, oc) => {
                    mc.offsetX = nc, mc.offsetY = oc, this._eventHandler(mc);
                };
            (0, g.F)(this.options.events, mc => oc(mc, pc));
        }
        bindResponsiveEvents() {
            this._responsiveListeners || (this._responsiveListeners = {});
            const mc = this._responsiveListeners,
                nc = this.platform,
                oc = (oc, e) => {
                    nc.addEventListener(this, oc, e), mc[oc] = e;
                },
                pc = (oc, pc) => {
                    mc[oc] && (nc.removeEventListener(this, oc, pc), delete mc[oc]);
                },
                qc = (mc, nc) => {
                    this.canvas && this.resize(mc, nc);
                };
            let rc;
            const sc = () => {
                pc('attach', sc), this.attached = !0, this.resize(), oc('resize', qc), oc('detach', rc);
            };
            rc = () => {
                this.attached = !1, pc('resize', qc), this._stop(), this._resize(0, 0), oc('attach', sc);
            }, nc.isAttached(this.canvas) ? sc() : rc();
        }
        unbindEvents() {
            (0, g.F)(this._listeners, (a, d) => {
                this.platform.removeEventListener(this, d, a);
            }), this._listeners = {}, (0, g.F)(this._responsiveListeners, (a, d) => {
                this.platform.removeEventListener(this, d, a);
            }), this._responsiveListeners = void 0;
        }
        updateHoverStyle(mc, nc, oc) {
            const pc = oc ? 'set' : 'remove';
            let qc, rc, sc, tc;
            for ('dataset' === nc && (qc = this.getDatasetMeta(mc[0].datasetIndex), qc.controller['_' + pc + 'DatasetHoverStyle']()), sc = 0, tc = mc.length; sc < tc; ++sc) {
                rc = mc[sc];
                const uc = rc && this.getDatasetMeta(rc.datasetIndex).controller;
                uc && uc[pc + 'HoverStyle'](rc.element, rc.datasetIndex, rc.index);
            }
        }
        getActiveElements() {
            return this._active || [];
        }
        setActiveElements(mc) {
            const nc = this._active || [],
                oc = mc.map(({
                    datasetIndex: pc,
                    index: qc
                }) => {
                    const rc = this.getDatasetMeta(pc);
                    if (!rc)
                        throw new Error('No dataset found at index ' + pc);
                    return {
                        datasetIndex: pc,
                        element: rc.data[qc],
                        index: qc
                    };
                });
            !(0, g.ah)(oc, qc) && (this._active = oc, this._lastEvent = null, this._updateHoverStyles(oc, qc));
        }
        notifyPlugins(mc, nc, oc) {
            return this._plugins.notify(this, mc, nc, oc);
        }
        isPluginEnabled(mc) {
            return 1 === this._plugins._cache.filter(d => d.plugin.id === mc).length;
        }
        _updateHoverStyles(mc, nc, oc) {
            const pc = this.options.hover,
                qc = (mc, nc) => mc.filter(mc => !nc.some(nc => mc.datasetIndex === nc.datasetIndex && mc.index === nc.index)),
                rc = qc(nc, mc),
                sc = oc ? mc : qc(mc, nc);
            rc.length && this.updateHoverStyle(rc, pc.mode, !1), sc.length && pc.mode && this.updateHoverStyle(sc, pc.mode, !0);
        }
        _eventHandler(mc, nc) {
            const oc = {
                    event: mc,
                    replay: nc,
                    cancelable: !0,
                    inChartArea: this.isPointInArea(mc)
                },
                pc = nc => (nc.options.events || this.options.events).includes(mc.native.type);
            if (!1 === this.notifyPlugins('beforeEvent', oc, pc))
                return;
            const qc = this._handleEvent(mc, nc, oc.inChartArea);
            return oc.cancelable = !1, this.notifyPlugins('afterEvent', oc, pc), (qc || oc.changed) && this.render(), this;
        }
        _handleEvent(mc, nc, oc) {
            const {
                _active: pc = [],
                options: qc
            } = this, rc = nc, sc = this._getActiveElements(mc, pc, oc, rc), tc = (0, g.ai)(mc), uc = function(vc, wc, xc, yc) {
                return xc && 'mouseout' !== vc.type ? yc ? wc : vc : null;
            }(mc, this._lastEvent, oc, tc);
            oc && (this._lastEvent = null, (0, g.Q)(qc.onHover, [
                mc,
                sc,
                this
            ], this), tc && (0, g.Q)(qc.onClick, [
                mc,
                sc,
                this
            ], this));
            const vc = !(0, g.ah)(sc, pc);
            return (vc || nc) && (this._active = sc, this._updateHoverStyles(sc, pc, nc)), this._lastEvent = uc, vc;
        }
        _getActiveElements(mc, nc, oc, pc) {
            if ('mouseout' === mc.type)
                return [];
            if (!oc)
                return nc;
            const qc = this.options.hover;
            return this.getElementsAtEventForMode(mc, qc.mode, qc, pc);
        }
        constructor(mc, nc) {
            const oc = this.config = new $b(nc),
                pc = hc(mc),
                qc = jc(pc);
            if (qc)
                throw new Error('Canvas is already in use. Chart with ID \'' + qc.id + '\' must be destroyed before the canvas with ID \'' + qc.canvas.id + '\' can be reused.');
            const rc = oc.createResolver(oc.chartOptionScopes(), this.getContext());
            this.platform = new(oc.platform || (function(sc) {
                return !(0, g.M)() || 'undefined' != typeof OffscreenCanvas && sc instanceof OffscreenCanvas ? mb : Bb;
            }(pc)))(), this.platform.updateConfig(oc);
            const sc = this.platform.acquireContext(pc, rc.aspectRatio),
                tc = sc && sc.canvas,
                uc = tc && tc.height,
                vc = tc && tc.width;
            this.id = (0, g.ac)(), this.ctx = sc, this.canvas = tc, this.width = vc, this.height = uc, this._options = rc, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new Pb(), this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = (0, g.ad)(mc => this.update(mc), rc.resizeDelay || 0), this._dataChanges = [], ic[this.id] = this, sc && tc ? (i.listen(this, 'complete', fc), i.listen(this, 'progress', gc), this._initialize(), this.attached && this.update()) : console.error('Failed to create chart: can\'t acquire context from the given item');
        }
    }

    function _mc() {
        return (0, g.F)(_lc.instances, a => a._plugins.invalidate());
    }

    function nc(oc, pc, qc, rc) {
        const sc = (h = oc.options.borderRadius, (0, g.ak)(h, [
            'outerStart',
            'outerEnd',
            'innerStart',
            'innerEnd'
        ]));
        var tc;
        const uc = (qc - pc) / 2,
            vc = Math.min(uc, rc * pc / 2),
            wc = oc => {
                const xc = (qc - Math.min(uc, oc)) * rc / 2;
                return (0, g.S)(oc, 0, Math.min(uc, xc));
            };
        return {
            outerStart: wc(sc.outerStart),
            outerEnd: wc(sc.outerEnd),
            innerStart: (0, g.S)(sc.innerStart, 0, vc),
            innerEnd: (0, g.S)(sc.innerEnd, 0, vc)
        };
    }

    function oc(pc, qc, rc, sc) {
        return {
            x: rc + pc * Math.cos(qc),
            y: sc + pc * Math.sin(qc)
        };
    }

    function pc(qc, rc, sc, tc, uc, vc) {
        const {
            x: wc,
            y: xc,
            startAngle: yc,
            pixelMargin: zc,
            innerRadius: Ac
        } = rc, Bc = Math.max(rc.outerRadius + tc + sc - zc, 0), Cc = Ac > 0 ? Ac + tc + sc + zc : 0;
        let Dc = 0;
        const Ec = uc - yc;
        if (tc) {
            const Fc = ((Ac > 0 ? Ac - tc : 0) + (Bc > 0 ? Bc - tc : 0)) / 2;
            Dc = (Ec - (0 !== Fc ? Ec * Fc / (Fc + tc) : Ec)) / 2;
        }
        const Fc = (Ec - Math.max(0.001, Ec * Bc - sc / g.P) / Bc) / 2,
            Gc = yc + Fc + Dc,
            Hc = uc - Fc - Dc,
            {
                outerStart: Ic,
                outerEnd: Jc,
                innerStart: Kc,
                innerEnd: Lc
            } = nc(rc, Cc, Bc, Hc - Gc),
            Mc = Bc - Ic,
            Nc = Bc - Jc,
            Oc = Gc + Ic / Mc,
            Pc = Hc - Jc / Nc,
            Qc = Cc + Kc,
            Rc = Cc + Lc,
            Sc = Gc + Kc / Qc,
            Tc = Hc - Lc / Rc;
        if (qc.beginPath(), vc) {
            const Uc = (Oc + Pc) / 2;
            if (qc.arc(wc, xc, Bc, Oc, Uc), qc.arc(wc, xc, Bc, Uc, Pc), Jc > 0) {
                const Vc = oc(Nc, Pc, wc, xc);
                qc.arc(Vc.x, Vc.y, Jc, Pc, Hc + g.H);
            }
            const Vc = oc(Rc, Hc, wc, xc);
            if (qc.lineTo(Vc.x, Vc.y), Lc > 0) {
                const Wc = oc(Rc, Tc, wc, xc);
                qc.arc(Wc.x, Wc.y, Lc, Hc + g.H, Tc + Math.PI);
            }
            const Wc = (Hc - Lc / Cc + (Gc + Kc / Cc)) / 2;
            if (qc.arc(wc, xc, Cc, Hc - Lc / Cc, Wc, !0), qc.arc(wc, xc, Cc, Wc, Gc + Kc / Cc, !0), Kc > 0) {
                const Xc = oc(Qc, Sc, wc, xc);
                qc.arc(Xc.x, Xc.y, Kc, Sc + Math.PI, Gc - g.H);
            }
            const Xc = oc(Mc, Gc, wc, xc);
            if (qc.lineTo(Xc.x, Xc.y), Ic > 0) {
                const Yc = oc(Mc, Oc, wc, xc);
                qc.arc(Yc.x, Yc.y, Ic, Gc - g.H, Oc);
            }
        } else {
            qc.moveTo(wc, xc);
            const Uc = Math.cos(Oc) * Bc + wc,
                Vc = Math.sin(Oc) * Bc + xc;
            qc.lineTo(Uc, Vc);
            const Wc = Math.cos(Pc) * Bc + wc,
                Xc = Math.sin(Pc) * Bc + xc;
            qc.lineTo(Wc, Xc);
        }
        qc.closePath();
    }

    function qc(rc, sc, tc, uc, vc) {
        const {
            fullCircles: wc,
            startAngle: xc,
            circumference: yc,
            options: zc
        } = sc, {
            borderWidth: Ac,
            borderJoinStyle: Bc
        } = zc, Cc = 'inner' === zc.borderAlign;
        if (!Ac)
            return;
        Cc ? (rc.lineWidth = 2 * Ac, rc.lineJoin = Bc || 'round') : (rc.lineWidth = Ac, rc.lineJoin = Bc || 'bevel');
        let Dc = sc.endAngle;
        if (wc) {
            pc(rc, sc, tc, uc, Dc, vc);
            for (let Ec = 0; Ec < wc; ++Ec)
                rc.stroke();
            isNaN(yc) || (Dc = xc + (yc % g.T || g.T));
        }
        Cc && function(Ec, Fc, Gc) {
            const {
                startAngle: Hc,
                pixelMargin: Ic,
                x: Jc,
                y: Kc,
                outerRadius: Lc,
                innerRadius: Mc
            } = Fc;
            let Nc = Ic / Lc;
            Ec.beginPath(), Ec.arc(Jc, Kc, Lc, Hc - Nc, Gc + Nc), Mc > Ic ? (Nc = Ic / Mc, Ec.arc(Jc, Kc, Mc, Gc + Nc, Hc - Nc, !0)) : Ec.arc(Jc, Kc, Ic, Gc + g.H, Hc - g.H), Ec.closePath(), Ec.clip();
        }(rc, sc, Dc), wc || (pc(rc, sc, tc, uc, Dc, vc), rc.stroke());
    }
    (0, f.default)(_lc, 'defaults', g.d), (0, f.default)(_lc, 'instances', ic), (0, f.default)(_lc, 'overrides', g.a3), (0, f.default)(_lc, 'registry', Ob), (0, f.default)(_lc, 'version', '4.2.0'), (0, f.default)(_lc, 'getChart', jc);
    class rc extends Cb {
        inRange(sc, tc, uc) {
            const vc = this.getProps([
                    'x',
                    'y'
                ], uc),
                {
                    angle: wc,
                    distance: xc
                } = (0, g.D)(vc, {
                    x: sc,
                    y: tc
                }),
                {
                    startAngle: yc,
                    endAngle: zc,
                    innerRadius: Ac,
                    outerRadius: Bc,
                    circumference: Cc
                } = this.getProps([
                    'startAngle',
                    'endAngle',
                    'innerRadius',
                    'outerRadius',
                    'circumference'
                ], uc),
                Dc = this.options.spacing / 2,
                Ec = (0, g.v)(Cc, zc - yc) >= g.T || (0, g.p)(wc, yc, zc),
                Fc = (0, g.aj)(xc, Ac + Dc, Bc + Dc);
            return Ec && Fc;
        }
        getCenterPoint(sc) {
            const {
                x: tc,
                y: uc,
                startAngle: vc,
                endAngle: wc,
                innerRadius: xc,
                outerRadius: yc
            } = this.getProps([
                'x',
                'y',
                'startAngle',
                'endAngle',
                'innerRadius',
                'outerRadius',
                'circumference'
            ], sc), {
                offset: zc,
                spacing: Ac
            } = this.options, Bc = (vc + wc) / 2, Cc = (xc + yc + Ac + zc) / 2;
            return {
                x: tc + Math.cos(Bc) * Cc,
                y: uc + Math.sin(Bc) * Cc
            };
        }
        tooltipPosition(sc) {
            return this.getCenterPoint(sc);
        }
        draw(sc) {
            const {
                options: tc,
                circumference: uc
            } = this, vc = (tc.offset || 0) / 4, wc = (tc.spacing || 0) / 2, xc = tc.circular;
            if (this.pixelMargin = 'inner' === tc.borderAlign ? 0.33 : 0, this.fullCircles = uc > g.T ? Math.floor(uc / g.T) : 0, 0 === uc || this.innerRadius < 0 || this.outerRadius < 0)
                return;
            sc.save();
            const yc = (this.startAngle + this.endAngle) / 2;
            sc.translate(Math.cos(yc) * vc, Math.sin(yc) * vc);
            const zc = vc * (1 - Math.sin(Math.min(g.P, uc || 0)));
            sc.fillStyle = tc.backgroundColor, sc.strokeStyle = tc.borderColor,
                function(Ac, Bc, Cc, Dc, Ec) {
                    const {
                        fullCircles: Fc,
                        startAngle: Gc,
                        circumference: Hc
                    } = Bc;
                    let Ic = Bc.endAngle;
                    if (Fc) {
                        pc(Ac, Bc, Cc, Dc, Ic, Ec);
                        for (let Jc = 0; Jc < Fc; ++Jc)
                            Ac.fill();
                        isNaN(Hc) || (Ic = Gc + (Hc % g.T || g.T));
                    }
                    pc(Ac, Bc, Cc, Dc, Ic, Ec), Ac.fill();
                }(sc, this, zc, wc, xc), qc(sc, this, zc, wc, xc), sc.restore();
        }
        constructor(sc) {
            super(), this.options = void 0, this.circumference = void 0, this.startAngle = void 0, this.endAngle = void 0, this.innerRadius = void 0, this.outerRadius = void 0, this.pixelMargin = 0, this.fullCircles = 0, sc && Object.assign(this, sc);
        }
    }

    function sc(tc, uc, vc = wc) {
        tc.lineCap = (0, g.v)(vc.borderCapStyle, wc.borderCapStyle), tc.setLineDash((0, g.v)(vc.borderDash, wc.borderDash)), tc.lineDashOffset = (0, g.v)(vc.borderDashOffset, wc.borderDashOffset), tc.lineJoin = (0, g.v)(vc.borderJoinStyle, wc.borderJoinStyle), tc.lineWidth = (0, g.v)(vc.borderWidth, wc.borderWidth), tc.strokeStyle = (0, g.v)(vc.borderColor, wc.borderColor);
    }

    function tc(uc, vc, wc) {
        uc.lineTo(wc.x, wc.y);
    }

    function uc(vc, wc, xc = {}) {
        const yc = vc.length,
            {
                start: zc = 0,
                end: Ac = yc - 1
            } = xc,
            {
                start: Bc,
                end: Cc
            } = wc,
            Dc = Math.max(zc, Bc),
            Ec = Math.min(Ac, Cc),
            Fc = zc < Bc && Ac < Bc || zc > Cc && Ac > Cc;
        return {
            count: yc,
            start: Dc,
            loop: wc.loop,
            ilen: Ec < Dc && !Fc ? yc + Ec - Dc : Ec - Dc
        };
    }

    function vc(wc, xc, yc, zc) {
        const {
            points: Ac,
            options: Bc
        } = xc, {
            count: Cc,
            start: Dc,
            loop: Ec,
            ilen: Fc
        } = uc(Ac, yc, zc), Gc = function(Hc) {
            return Hc.stepped ? g.ar : Hc.tension || 'monotone' === Hc.cubicInterpolationMode ? g.as : tc;
        }(Bc);
        let Hc, Ic, Jc, {
            move: Kc = !0,
            reverse: Lc
        } = zc || {};
        for (Hc = 0; Hc <= Fc; ++Hc)
            Ic = Ac[(Dc + (Lc ? Fc - Hc : Hc)) % Cc], Ic.skip || (Kc ? (wc.moveTo(Ic.x, Ic.y), Kc = !1) : Gc(wc, Jc, Ic, Lc, Bc.stepped), Jc = Ic);
        return Ec && (Ic = Ac[(Dc + (Lc ? Fc : 0)) % Cc], Gc(wc, Jc, Ic, Lc, Bc.stepped)), !!Ec;
    }

    function wc(xc, yc, zc, Ac) {
        const Bc = yc.points,
            {
                count: Cc,
                start: Dc,
                ilen: Ec
            } = uc(Bc, zc, Ac),
            {
                move: Fc = !0,
                reverse: Gc
            } = Ac || {};
        let Hc, Ic, Jc, Kc, Lc, Mc, Nc = 0,
            Oc = 0;
        const Pc = xc => (Dc + (Gc ? Ec - xc : xc)) % Cc,
            Qc = () => {
                Kc !== Lc && (xc.lineTo(Nc, Lc), xc.lineTo(Nc, Kc), xc.lineTo(Nc, Mc));
            };
        for (Fc && (Ic = Bc[Pc(0)], xc.moveTo(Ic.x, Ic.y)), Hc = 0; Hc <= Ec; ++Hc) {
            if (Ic = Bc[Pc(Hc)], Ic.skip)
                continue;
            const Rc = Ic.x,
                Sc = Ic.y,
                Tc = 0 | Rc;
            Tc === Jc ? (Sc < Kc ? Kc = Sc : Sc > Lc && (Lc = Sc), Nc = (Oc * Nc + Rc) / ++Oc) : (Qc(), xc.lineTo(Rc, Sc), Jc = Tc, Oc = 0, Kc = Lc = Sc), Mc = Sc;
        }
        Qc();
    }

    function xc(yc) {
        const zc = yc.options,
            Ac = zc.borderDash && zc.borderDash.length;
        return !(yc._decimated || yc._loop || zc.tension || 'monotone' === zc.cubicInterpolationMode || zc.stepped || Ac) ? wc : vc;
    }
    (0, f.default)(rc, 'id', 'arc'), (0, f.default)(rc, 'defaults', {
        borderAlign: 'center',
        borderColor: '#fff',
        borderJoinStyle: void 0,
        borderRadius: 0,
        borderWidth: 2,
        offset: 0,
        spacing: 0,
        angle: void 0,
        circular: !0
    }), (0, f.default)(rc, 'defaultRoutes', {
        backgroundColor: 'backgroundColor'
    });
    const yc = 'function' == typeof Path2D;

    function zc(Ac, Bc, Cc, Dc) {
        yc && !Bc.options.segment ? function(Ec, Fc, Gc, Hc) {
            let Ic = Fc._path;
            Ic || (Ic = Fc._path = new Path2D(), Fc.path(Ic, Gc, Hc) && Ic.closePath()), sc(Ec, Fc.options), Ec.stroke(Ic);
        }(Ac, Bc, Cc, Dc) : function(Ec, Fc, Gc, Hc) {
            const {
                segments: Ic,
                options: Jc
            } = Fc, Kc = xc(Fc);
            for (const Lc of Ic)
                sc(Ec, Jc, Lc.style), Ec.beginPath(), Kc(Ec, Fc, Lc, {
                    start: Gc,
                    end: Gc + Hc - 1
                }) && Ec.closePath(), Ec.stroke();
        }(Ac, Bc, Cc, Dc);
    }
    class _Ac extends Cb {
        updateControlPoints(Bc, Cc) {
            const Dc = this.options;
            if ((Dc.tension || 'monotone' === Dc.cubicInterpolationMode) && !Dc.stepped && !this._pointsUpdated) {
                const Ec = Dc.spanGaps ? this._loop : this._fullLoop;
                (0, g.al)(this._points, Dc, Bc, Ec, Cc), this._pointsUpdated = !0;
            }
        }
        set points(Bc) {
            this._points = Bc, delete this._segments, delete this._path, this._pointsUpdated = !1;
        }
        get points() {
            return this._points;
        }
        get segments() {
            return this._segments || (this._segments = (0, g.am)(this, this.options.segment));
        }
        first() {
            const Bc = this.segments,
                Cc = this.points;
            return Bc.length && Cc[Bc[0].start];
        }
        last() {
            const Bc = this.segments,
                Cc = this.points,
                Dc = Bc.length;
            return Dc && Cc[Bc[Dc - 1].end];
        }
        interpolate(Bc, Cc) {
            const Dc = this.options,
                Ec = Bc[Cc],
                Fc = this.points,
                Gc = (0, g.an)(this, {
                    property: Cc,
                    start: Ec,
                    end: Ec
                });
            if (!Gc.length)
                return;
            const Hc = [],
                Ic = function(Jc) {
                    return Jc.stepped ? g.ao : Jc.tension || 'monotone' === Jc.cubicInterpolationMode ? g.ap : g.aq;
                }(Dc);
            let Jc, Kc;
            for (Jc = 0, Kc = Gc.length; Jc < Kc; ++Jc) {
                const {
                    start: Lc,
                    end: Mc
                } = Gc[Jc], Nc = Fc[Lc], Oc = Fc[Mc];
                if (Nc === Oc) {
                    Hc.push(Nc);
                    continue;
                }
                const Pc = Ic(Nc, Oc, Math.abs((Ec - Nc[Cc]) / (Oc[Cc] - Nc[Cc])), Dc.stepped);
                Pc[Cc] = Bc[Cc], Hc.push(Pc);
            }
            return 1 === Hc.length ? Hc[0] : Hc;
        }
        pathSegment(Bc, Cc, Dc) {
            return xc(this)(Bc, this, Cc, Dc);
        }
        path(Bc, Cc, Dc) {
            const Ec = this.segments,
                Fc = xc(this);
            let Gc = this._loop;
            Cc = Cc || 0, Dc = Dc || this.points.length - Cc;
            for (const Hc of Ec)
                Gc &= Fc(Bc, this, Hc, {
                    start: Cc,
                    end: Cc + Dc - 1
                });
            return !!Gc;
        }
        draw(Bc, Cc, Dc, Ec) {
            const Fc = this.options || {};
            (this.points || []).length && Fc.borderWidth && (Bc.save(), zc(Bc, this, Dc, Ec), Bc.restore()), this.animated && (this._pointsUpdated = !1, this._path = void 0);
        }
        constructor(Bc) {
            super(), this.animated = !0, this.options = void 0, this._chart = void 0, this._loop = void 0, this._fullLoop = void 0, this._path = void 0, this._points = void 0, this._segments = void 0, this._decimated = !1, this._pointsUpdated = !1, this._datasetIndex = void 0, Bc && Object.assign(this, Bc);
        }
    }

    function Bc(Cc, Dc, Ec, Fc) {
        const Gc = Cc.options,
            {
                [Hc]: Ic
            } = Cc.getProps([Hc], Fc);
        return Math.abs(Dc - Ic) < Gc.radius + Gc.hitRadius;
    }
    (0, f.default)(_Ac, 'id', 'line'), (0, f.default)(_Ac, 'defaults', {
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
    }), (0, f.default)(_Ac, 'defaultRoutes', {
        backgroundColor: 'backgroundColor',
        borderColor: 'borderColor'
    }), (0, f.default)(_Ac, 'descriptors', {
        _scriptable: !0,
        _indexable: a => 'borderDash' !== a && 'fill' !== a
    });
    class _Cc extends Cb {
        inRange(Dc, Ec, Fc) {
            const Gc = this.options,
                {
                    x: Hc,
                    y: Ic
                } = this.getProps([
                    'x',
                    'y'
                ], Fc);
            return Math.pow(Dc - Hc, 2) + Math.pow(Ec - Ic, 2) < Math.pow(Gc.hitRadius + Gc.radius, 2);
        }
        inXRange(Dc, Ec) {
            return Bc(this, Dc, 'x', Ec);
        }
        inYRange(Dc, Ec) {
            return Bc(this, Dc, 'y', Ec);
        }
        getCenterPoint(Dc) {
            const {
                x: Ec,
                y: Fc
            } = this.getProps([
                'x',
                'y'
            ], Dc);
            return {
                x: Ec,
                y: Fc
            };
        }
        size(Dc) {
            let Ec = (Dc = Dc || this.options || {}).radius || 0;
            Ec = Math.max(Ec, Ec && Dc.hoverRadius || 0);
            return 2 * (Ec + (Ec && Dc.borderWidth || 0));
        }
        draw(Dc, Ec) {
            const Fc = this.options;
            this.skip || Fc.radius < 0.1 || !(0, g.C)(this, Ec, this.size(Fc) / 2) || (Dc.strokeStyle = Fc.borderColor, Dc.lineWidth = Fc.borderWidth, Dc.fillStyle = Fc.backgroundColor, (0, g.at)(Dc, Fc, this.x, this.y));
        }
        getRange() {
            const Dc = this.options || {};
            return Dc.radius + Dc.hitRadius;
        }
        constructor(Dc) {
            super(), this.options = void 0, this.parsed = void 0, this.skip = void 0, this.stop = void 0, Dc && Object.assign(this, Dc);
        }
    }

    function Dc(Ec, Fc) {
        const {
            x: Gc,
            y: Hc,
            base: Ic,
            width: Jc,
            height: Kc
        } = Ec.getProps([
            'x',
            'y',
            'base',
            'width',
            'height'
        ], Fc);
        let Lc, Mc, Nc, Oc, Pc;
        return Ec.horizontal ? (Pc = Kc / 2, Lc = Math.min(Gc, Ic), Mc = Math.max(Gc, Ic), Nc = Hc - Pc, Oc = Hc + Pc) : (Pc = Jc / 2, Lc = Gc - Pc, Mc = Gc + Pc, Nc = Math.min(Hc, Ic), Oc = Math.max(Hc, Ic)), {
            left: Lc,
            top: Nc,
            right: Mc,
            bottom: Oc
        };
    }

    function Ec(Fc, Gc, Hc, Ic) {
        return Fc ? 0 : (0, g.S)(Gc, Hc, Ic);
    }

    function Fc(Gc) {
        const Hc = Dc(Gc),
            Ic = Hc.right - Hc.left,
            Jc = Hc.bottom - Hc.top,
            Kc = function(Lc, Mc, Nc) {
                const Oc = Lc.options.borderWidth,
                    Pc = Lc.borderSkipped,
                    Qc = (0, g.av)(Oc);
                return {
                    t: Ec(Pc.top, Qc.top, 0, Nc),
                    r: Ec(Pc.right, Qc.right, 0, Mc),
                    b: Ec(Pc.bottom, Qc.bottom, 0, Nc),
                    l: Ec(Pc.left, Qc.left, 0, Mc)
                };
            }(Gc, Ic / 2, Jc / 2),
            Lc = function(Mc, Nc, Oc) {
                const {
                    enableBorderRadius: Pc
                } = Mc.getProps(['enableBorderRadius']), Qc = Mc.options.borderRadius, Rc = (0, g.aw)(Qc), Sc = Math.min(Nc, Oc), Tc = Mc.borderSkipped, Uc = Pc || (0, g.i)(Qc);
                return {
                    topLeft: Ec(!Uc || Tc.top || Tc.left, Rc.topLeft, 0, Sc),
                    topRight: Ec(!Uc || Tc.top || Tc.right, Rc.topRight, 0, Sc),
                    bottomLeft: Ec(!Uc || Tc.bottom || Tc.left, Rc.bottomLeft, 0, Sc),
                    bottomRight: Ec(!Uc || Tc.bottom || Tc.right, Rc.bottomRight, 0, Sc)
                };
            }(Gc, Ic / 2, Jc / 2);
        return {
            outer: {
                x: Hc.left,
                y: Hc.top,
                w: Ic,
                h: Jc,
                radius: Lc
            },
            inner: {
                x: Hc.left + Kc.l,
                y: Hc.top + Kc.t,
                w: Ic - Kc.l - Kc.r,
                h: Jc - Kc.t - Kc.b,
                radius: {
                    topLeft: Math.max(0, Lc.topLeft - Math.max(Kc.t, Kc.l)),
                    topRight: Math.max(0, Lc.topRight - Math.max(Kc.t, Kc.r)),
                    bottomLeft: Math.max(0, Lc.bottomLeft - Math.max(Kc.b, Kc.l)),
                    bottomRight: Math.max(0, Lc.bottomRight - Math.max(Kc.b, Kc.r))
                }
            }
        };
    }

    function Gc(Hc, Ic, Jc, Kc) {
        const Lc = null === Ic,
            Mc = null === Jc,
            Nc = Hc && !(Lc && Mc) && Dc(Hc, Kc);
        return Nc && (Lc || (0, g.aj)(Ic, Nc.left, Nc.right)) && (Mc || (0, g.aj)(Jc, Nc.top, Nc.bottom));
    }

    function Hc(Ic, Jc) {
        Ic.rect(Jc.x, Jc.y, Jc.w, Jc.h);
    }

    function Ic(Jc, Kc, Lc = {}) {
        const Mc = Jc.x !== Lc.x ? -Kc : 0,
            Nc = Jc.y !== Lc.y ? -Kc : 0,
            Oc = (Jc.x + Jc.w !== Lc.x + Lc.w ? Kc : 0) - Mc,
            Pc = (Jc.y + Jc.h !== Lc.y + Lc.h ? Kc : 0) - Nc;
        return {
            x: Jc.x + Mc,
            y: Jc.y + Nc,
            w: Jc.w + Oc,
            h: Jc.h + Pc,
            radius: Jc.radius
        };
    }
    (0, f.default)(_Cc, 'id', 'point'), (0, f.default)(_Cc, 'defaults', {
        borderWidth: 1,
        hitRadius: 1,
        hoverBorderWidth: 1,
        hoverRadius: 4,
        pointStyle: 'circle',
        radius: 3,
        rotation: 0
    }), (0, f.default)(_Cc, 'defaultRoutes', {
        backgroundColor: 'backgroundColor',
        borderColor: 'borderColor'
    });
    class Jc extends Cb {
        draw(Kc) {
            const {
                inflateAmount: Lc,
                options: {
                    borderColor: Mc,
                    backgroundColor: Nc
                }
            } = this, {
                inner: Oc,
                outer: Pc
            } = Fc(this), Qc = (j = Pc.radius).topLeft || j.topRight || j.bottomLeft || j.bottomRight ? g.au : Hc;
            var Rc;
            Kc.save(), Pc.w === Oc.w && Pc.h === Oc.h || (Kc.beginPath(), Qc(Kc, Ic(Pc, Lc, Oc)), Kc.clip(), Qc(Kc, Ic(Oc, -Lc, Pc)), Kc.fillStyle = Mc, Kc.fill('evenodd')), Kc.beginPath(), Qc(Kc, Ic(Oc, Lc)), Kc.fillStyle = Nc, Kc.fill(), Kc.restore();
        }
        inRange(Kc, Lc, Mc) {
            return Gc(this, Kc, Lc, Mc);
        }
        inXRange(Kc, Lc) {
            return Gc(this, Kc, null, Lc);
        }
        inYRange(Kc, Lc) {
            return Gc(this, null, Kc, Lc);
        }
        getCenterPoint(Kc) {
            const {
                x: Lc,
                y: Mc,
                base: Nc,
                horizontal: Oc
            } = this.getProps([
                'x',
                'y',
                'base',
                'horizontal'
            ], Kc);
            return {
                x: Oc ? (Lc + Nc) / 2 : Lc,
                y: Oc ? Mc : (Mc + Nc) / 2
            };
        }
        getRange(Kc) {
            return 'x' === Kc ? this.width / 2 : this.height / 2;
        }
        constructor(Kc) {
            super(), this.options = void 0, this.horizontal = void 0, this.base = void 0, this.width = void 0, this.height = void 0, this.inflateAmount = void 0, Kc && Object.assign(this, Kc);
        }
    }
    (0, f.default)(Jc, 'id', 'bar'), (0, f.default)(Jc, 'defaults', {
        borderSkipped: 'start',
        borderWidth: 0,
        borderRadius: 0,
        inflateAmount: 'auto',
        pointStyle: void 0
    }), (0, f.default)(Jc, 'defaultRoutes', {
        backgroundColor: 'backgroundColor',
        borderColor: 'borderColor'
    });
    new WeakMap();
    const Kc = {
        average(Lc) {
            if (!Lc.length)
                return !1;
            let Mc, Nc, Oc = 0,
                Pc = 0,
                Qc = 0;
            for (Mc = 0, Nc = Lc.length; Mc < Nc; ++Mc) {
                const Rc = Lc[Mc].element;
                if (Rc && Rc.hasValue()) {
                    const Sc = Rc.tooltipPosition();
                    Oc += Sc.x, Pc += Sc.y, ++Qc;
                }
            }
            return {
                x: Oc / Qc,
                y: Pc / Qc
            };
        },
        nearest(Lc, Mc) {
            if (!Lc.length)
                return !1;
            let Nc, Oc, Pc, Qc = Mc.x,
                Rc = Mc.y,
                Sc = Number.POSITIVE_INFINITY;
            for (Nc = 0, Oc = Lc.length; Nc < Oc; ++Nc) {
                const Tc = Lc[Nc].element;
                if (Tc && Tc.hasValue()) {
                    const Uc = Tc.getCenterPoint(),
                        Vc = (0, g.aE)(Mc, Uc);
                    Vc < Sc && (Sc = Vc, Pc = Tc);
                }
            }
            if (Pc) {
                const Tc = Pc.tooltipPosition();
                Qc = Tc.x, Rc = Tc.y;
            }
            return {
                x: Qc,
                y: Rc
            };
        }
    };

    function Lc(Mc, Nc) {
        return Nc && ((0, g.b)(Nc) ? Array.prototype.push.apply(Mc, Nc) : Mc.push(Nc)), Mc;
    }

    function Mc(Nc) {
        return ('string' == typeof Nc || Nc instanceof String) && Nc.indexOf('\n') > -1 ? Nc.split('\n') : Nc;
    }

    function Nc(Oc, Pc) {
        const {
            element: Qc,
            datasetIndex: Rc,
            index: Sc
        } = Pc, Tc = Oc.getDatasetMeta(Rc).controller, {
            label: Uc,
            value: Vc
        } = Tc.getLabelAndValue(Sc);
        return {
            chart: Oc,
            label: Uc,
            parsed: Tc.getParsed(Sc),
            raw: Oc.data.datasets[Rc].data[Sc],
            formattedValue: Vc,
            dataset: Tc.getDataset(),
            dataIndex: Sc,
            datasetIndex: Rc,
            element: Qc
        };
    }

    function Oc(Pc, Qc) {
        const Rc = Pc.chart.ctx,
            {
                body: Sc,
                footer: Tc,
                title: Uc
            } = Pc,
            {
                boxWidth: Vc,
                boxHeight: Wc
            } = Qc,
            Xc = (0, g.a0)(Qc.bodyFont),
            Yc = (0, g.a0)(Qc.titleFont),
            Zc = (0, g.a0)(Qc.footerFont),
            $c = Uc.length,
            ad = Tc.length,
            bd = Sc.length,
            cd = (0, g.E)(Qc.padding);
        let dd = cd.height,
            ed = 0,
            fd = Sc.reduce((Pc, Qc) => Pc + Qc.before.length + Qc.lines.length + Qc.after.length, 0);
        if (fd += Pc.beforeBody.length + Pc.afterBody.length, $c && (dd += $c * Yc.lineHeight + ($c - 1) * Qc.titleSpacing + Qc.titleMarginBottom), fd) {
            dd += bd * (Qc.displayColors ? Math.max(Wc, Xc.lineHeight) : Xc.lineHeight) + (fd - bd) * Xc.lineHeight + (fd - 1) * Qc.bodySpacing;
        }
        ad && (dd += Qc.footerMarginTop + ad * Zc.lineHeight + (ad - 1) * Qc.footerSpacing);
        let gd = 0;
        const hd = function(id) {
            ed = Math.max(ed, Rc.measureText(id).width + gd);
        };
        return Rc.save(), Rc.font = Yc.string, (0, g.F)(Pc.title, hd), Rc.font = Xc.string, (0, g.F)(Pc.beforeBody.concat(Pc.afterBody), hd), gd = Qc.displayColors ? Vc + 2 + Qc.boxPadding : 0, (0, g.F)(Sc, Pc => {
            (0, g.F)(Pc.before, hd), (0, g.F)(Pc.lines, hd), (0, g.F)(Pc.after, hd);
        }), gd = 0, Rc.font = Zc.string, (0, g.F)(Pc.footer, hd), Rc.restore(), ed += cd.width, {
            width: ed,
            height: dd
        };
    }

    function Pc(Qc, Rc, Sc, Tc) {
        const {
            x: Uc,
            width: Vc
        } = Sc, {
            width: Wc,
            chartArea: {
                left: Xc,
                right: Yc
            }
        } = Qc;
        let Zc = 'center';
        return 'center' === Tc ? Zc = Uc <= (Xc + Yc) / 2 ? 'left' : 'right' : Uc <= Vc / 2 ? Zc = 'left' : Uc >= Wc - Vc / 2 && (Zc = 'right'),
            function($c, ad, bd, cd) {
                const {
                    x: dd,
                    width: ed
                } = cd, fd = bd.caretSize + bd.caretPadding;
                return 'left' === $c && dd + ed + fd > ad.width || 'right' === $c && dd - ed - fd < 0 || void 0;
            }(Zc, Qc, Rc, Sc) && (Zc = 'center'), Zc;
    }

    function Qc(Rc, Sc, Tc) {
        const Uc = Tc.yAlign || Sc.yAlign || function(Vc, Wc) {
            const {
                y: Xc,
                height: Yc
            } = Wc;
            return Xc < Yc / 2 ? 'top' : Xc > Vc.height - Yc / 2 ? 'bottom' : 'center';
        }(Rc, Tc);
        return {
            xAlign: Tc.xAlign || Sc.xAlign || Pc(Rc, Sc, Tc, Uc),
            yAlign: Uc
        };
    }

    function Rc(Sc, Tc, Uc, Vc) {
        const {
            caretSize: Wc,
            caretPadding: Xc,
            cornerRadius: Yc
        } = Sc, {
            xAlign: Zc,
            yAlign: $c
        } = Uc, ad = Wc + Xc, {
            topLeft: bd,
            topRight: cd,
            bottomLeft: dd,
            bottomRight: ed
        } = (0, g.aw)(Yc);
        let fd = function(gd, hd) {
            let {
                x: id,
                width: jd
            } = gd;
            return 'right' === hd ? id -= jd : 'center' === hd && (id -= jd / 2), id;
        }(Tc, Zc);
        const gd = function(hd, id, jd) {
            let {
                y: kd,
                height: ld
            } = hd;
            return 'top' === id ? kd += jd : kd -= 'bottom' === id ? ld + jd : ld / 2, kd;
        }(Tc, $c, ad);
        return 'center' === $c ? 'left' === Zc ? fd += ad : 'right' === Zc && (fd -= ad) : 'left' === Zc ? fd -= Math.max(bd, dd) + Wc : 'right' === Zc && (fd += Math.max(cd, ed) + Wc), {
            x: (0, g.S)(fd, 0, Vc.width - Tc.width),
            y: (0, g.S)(gd, 0, Vc.height - Tc.height)
        };
    }

    function Sc(Tc, Uc, Vc) {
        const Wc = (0, g.E)(Vc.padding);
        return 'center' === Uc ? Tc.x + Tc.width / 2 : 'right' === Uc ? Tc.x + Tc.width - Wc.right : Tc.x + Wc.left;
    }

    function Tc(Uc) {
        return Lc([], Mc(Uc));
    }

    function Uc(Vc, Wc) {
        const Xc = Wc && Wc.dataset && Wc.dataset.tooltip && Wc.dataset.tooltip.callbacks;
        return Xc ? Vc.override(Xc) : Vc;
    }
    const Vc = {
        beforeTitle: g.aF,
        title(Wc) {
            if (Wc.length > 0) {
                const Xc = Wc[0],
                    Yc = Xc.chart.data.labels,
                    Zc = Yc ? Yc.length : 0;
                if (this && this.options && 'dataset' === this.options.mode)
                    return Xc.dataset.label || '';
                if (Xc.label)
                    return Xc.label;
                if (Zc > 0 && Xc.dataIndex < Zc)
                    return Yc[Xc.dataIndex];
            }
            return '';
        },
        afterTitle: g.aF,
        beforeBody: g.aF,
        beforeLabel: g.aF,
        label(Wc) {
            if (this && this.options && 'dataset' === this.options.mode)
                return Wc.label + ': ' + Wc.formattedValue || Wc.formattedValue;
            let Xc = Wc.dataset.label || '';
            Xc && (Xc += ': ');
            const Yc = Wc.formattedValue;
            return (0, g.k)(Yc) || (Xc += Yc), Xc;
        },
        labelColor(Wc) {
            const Xc = Wc.chart.getDatasetMeta(Wc.datasetIndex).controller.getStyle(Wc.dataIndex);
            return {
                borderColor: Xc.borderColor,
                backgroundColor: Xc.backgroundColor,
                borderWidth: Xc.borderWidth,
                borderDash: Xc.borderDash,
                borderDashOffset: Xc.borderDashOffset,
                borderRadius: 0
            };
        },
        labelTextColor() {
            return this.options.bodyColor;
        },
        labelPointStyle(Wc) {
            const Xc = Wc.chart.getDatasetMeta(Wc.datasetIndex).controller.getStyle(Wc.dataIndex);
            return {
                pointStyle: Xc.pointStyle,
                rotation: Xc.rotation
            };
        },
        afterLabel: g.aF,
        afterBody: g.aF,
        beforeFooter: g.aF,
        footer: g.aF,
        afterFooter: g.aF
    };

    function Wc(Xc, Yc, Zc, $c) {
        const ad = Xc[Yc].call(Zc, $c);
        return void 0 === ad ? Vc[Yc].call(Zc, $c) : ad;
    }
    class Xc extends Cb {
        initialize(Yc) {
            this.options = Yc, this._cachedAnimations = void 0, this.$context = void 0;
        }
        _resolveAnimations() {
            const Yc = this._cachedAnimations;
            if (Yc)
                return Yc;
            const Zc = this.chart,
                $c = this.options.setContext(this.getContext()),
                ad = $c.enabled && Zc.options.animation && $c.animations,
                bd = new m(this.chart, ad);
            return ad._cacheable && (this._cachedAnimations = Object.freeze(bd)), bd;
        }
        getContext() {
            return this.$context || (this.$context = (a = this.chart.getContext(), d = this, c = this._tooltipItems, (0, g.j)(a, {
                tooltip: d,
                tooltipItems: c,
                type: 'tooltip'
            })));
            var Yc, Zc, $c;
        }
        getTitle(Yc, Zc) {
            const {
                callbacks: $c
            } = Zc, ad = Wc($c, 'beforeTitle', this, Yc), bd = Wc($c, 'title', this, Yc), cd = Wc($c, 'afterTitle', this, Yc);
            let dd = [];
            return dd = Lc(dd, Mc(ad)), dd = Lc(dd, Mc(bd)), dd = Lc(dd, Mc(cd)), dd;
        }
        getBeforeBody(Yc, Zc) {
            return Tc(Wc(Zc.callbacks, 'beforeBody', this, Yc));
        }
        getBody(Yc, Zc) {
            const {
                callbacks: $c
            } = Zc, ad = [];
            return (0, g.F)(Yc, Yc => {
                const bd = {
                        before: [],
                        lines: [],
                        after: []
                    },
                    cd = Uc($c, Yc);
                Lc(bd.before, Mc(Wc(cd, 'beforeLabel', this, Yc))), Lc(bd.lines, Wc(cd, 'label', this, Yc)), Lc(bd.after, Mc(Wc(cd, 'afterLabel', this, Yc))), ad.push(bd);
            }), ad;
        }
        getAfterBody(Yc, Zc) {
            return Tc(Wc(Zc.callbacks, 'afterBody', this, Yc));
        }
        getFooter(Yc, Zc) {
            const {
                callbacks: $c
            } = Zc, ad = Wc($c, 'beforeFooter', this, Yc), bd = Wc($c, 'footer', this, Yc), cd = Wc($c, 'afterFooter', this, Yc);
            let dd = [];
            return dd = Lc(dd, Mc(ad)), dd = Lc(dd, Mc(bd)), dd = Lc(dd, Mc(cd)), dd;
        }
        _createItems(Yc) {
            const Zc = this._active,
                $c = this.chart.data,
                ad = [],
                bd = [],
                cd = [];
            let dd, ed, fd = [];
            for (dd = 0, ed = Zc.length; dd < ed; ++dd)
                fd.push(Nc(this.chart, Zc[dd]));
            return Yc.filter && (fd = fd.filter((Zc, ad, bd) => Yc.filter(Zc, ad, bd, $c))), Yc.itemSort && (fd = fd.sort((Zc, ad) => Yc.itemSort(Zc, ad, $c))), (0, g.F)(fd, Zc => {
                const gd = Uc(Yc.callbacks, Zc);
                ad.push(Wc(gd, 'labelColor', this, Zc)), bd.push(Wc(gd, 'labelPointStyle', this, Zc)), cd.push(Wc(gd, 'labelTextColor', this, Zc));
            }), this.labelColors = ad, this.labelPointStyles = bd, this.labelTextColors = cd, this.dataPoints = fd, fd;
        }
        update(Yc, Zc) {
            const $c = this.options.setContext(this.getContext()),
                ad = this._active;
            let bd, cd = [];
            if (ad.length) {
                const dd = Kc[$c.position].call(this, ad, this._eventPosition);
                cd = this._createItems($c), this.title = this.getTitle(cd, $c), this.beforeBody = this.getBeforeBody(cd, $c), this.body = this.getBody(cd, $c), this.afterBody = this.getAfterBody(cd, $c), this.footer = this.getFooter(cd, $c);
                const ed = this._size = Oc(this, $c),
                    fd = Object.assign({}, dd, ed),
                    gd = Qc(this.chart, $c, fd),
                    hd = Rc($c, fd, gd, this.chart);
                this.xAlign = gd.xAlign, this.yAlign = gd.yAlign, bd = {
                    opacity: 1,
                    x: hd.x,
                    y: hd.y,
                    width: ed.width,
                    height: ed.height,
                    caretX: dd.x,
                    caretY: dd.y
                };
            } else
                0 !== this.opacity && (bd = {
                    opacity: 0
                });
            this._tooltipItems = cd, this.$context = void 0, bd && this._resolveAnimations().update(this, bd), Yc && $c.external && $c.external.call(this, {
                chart: this.chart,
                tooltip: this,
                replay: Zc
            });
        }
        drawCaret(Yc, Zc, $c, ad) {
            const bd = this.getCaretPosition(Yc, $c, ad);
            Zc.lineTo(bd.x1, bd.y1), Zc.lineTo(bd.x2, bd.y2), Zc.lineTo(bd.x3, bd.y3);
        }
        getCaretPosition(Yc, Zc, $c) {
            const {
                xAlign: ad,
                yAlign: bd
            } = this, {
                caretSize: cd,
                cornerRadius: dd
            } = $c, {
                topLeft: ed,
                topRight: fd,
                bottomLeft: gd,
                bottomRight: hd
            } = (0, g.aw)(dd), {
                x: id,
                y: jd
            } = Yc, {
                width: kd,
                height: ld
            } = Zc;
            let md, nd, od, pd, qd, rd;
            return 'center' === bd ? (qd = jd + ld / 2, 'left' === ad ? (md = id, nd = md - cd, pd = qd + cd, rd = qd - cd) : (md = id + kd, nd = md + cd, pd = qd - cd, rd = qd + cd), od = md) : (nd = 'left' === ad ? id + Math.max(ed, gd) + cd : 'right' === ad ? id + kd - Math.max(fd, hd) - cd : this.caretX, 'top' === bd ? (pd = jd, qd = pd - cd, md = nd - cd, od = nd + cd) : (pd = jd + ld, qd = pd + cd, md = nd + cd, od = nd - cd), rd = pd), {
                x1: md,
                x2: nd,
                x3: od,
                y1: pd,
                y2: qd,
                y3: rd
            };
        }
        drawTitle(Yc, Zc, $c) {
            const ad = this.title,
                bd = ad.length;
            let cd, dd, ed;
            if (bd) {
                const fd = (0, g.az)($c.rtl, this.x, this.width);
                for (Yc.x = Sc(this, $c.titleAlign, $c), Zc.textAlign = fd.textAlign($c.titleAlign), Zc.textBaseline = 'middle', cd = (0, g.a0)($c.titleFont), dd = $c.titleSpacing, Zc.fillStyle = $c.titleColor, Zc.font = cd.string, ed = 0; ed < bd; ++ed)
                    Zc.fillText(ad[ed], fd.x(Yc.x), Yc.y + cd.lineHeight / 2), Yc.y += cd.lineHeight + dd, ed + 1 === bd && (Yc.y += $c.titleMarginBottom - dd);
            }
        }
        _drawColorBox(Yc, Zc, $c, ad, bd) {
            const cd = this.labelColors[$c],
                dd = this.labelPointStyles[$c],
                {
                    boxHeight: ed,
                    boxWidth: fd,
                    boxPadding: gd
                } = bd,
                hd = (0, g.a0)(bd.bodyFont),
                id = Sc(this, 'left', bd),
                jd = ad.x(id),
                kd = ed < hd.lineHeight ? (hd.lineHeight - ed) / 2 : 0,
                ld = Zc.y + kd;
            if (bd.usePointStyle) {
                const md = {
                        radius: Math.min(fd, ed) / 2,
                        pointStyle: dd.pointStyle,
                        rotation: dd.rotation,
                        borderWidth: 1
                    },
                    nd = ad.leftForLtr(jd, fd) + fd / 2,
                    od = ld + ed / 2;
                Yc.strokeStyle = bd.multiKeyBackground, Yc.fillStyle = bd.multiKeyBackground, (0, g.at)(Yc, md, nd, od), Yc.strokeStyle = cd.borderColor, Yc.fillStyle = cd.backgroundColor, (0, g.at)(Yc, md, nd, od);
            } else {
                Yc.lineWidth = (0, g.i)(cd.borderWidth) ? Math.max(...Object.values(cd.borderWidth)) : cd.borderWidth || 1, Yc.strokeStyle = cd.borderColor, Yc.setLineDash(cd.borderDash || []), Yc.lineDashOffset = cd.borderDashOffset || 0;
                const md = ad.leftForLtr(jd, fd - gd),
                    nd = ad.leftForLtr(ad.xPlus(jd, 1), fd - gd - 2),
                    od = (0, g.aw)(cd.borderRadius);
                Object.values(od).some(Yc => 0 !== Yc) ? (Yc.beginPath(), Yc.fillStyle = bd.multiKeyBackground, (0, g.au)(Yc, {
                    x: md,
                    y: ld,
                    w: fd,
                    h: ed,
                    radius: od
                }), Yc.fill(), Yc.stroke(), Yc.fillStyle = cd.backgroundColor, Yc.beginPath(), (0, g.au)(Yc, {
                    x: nd,
                    y: ld + 1,
                    w: fd - 2,
                    h: ed - 2,
                    radius: od
                }), Yc.fill()) : (Yc.fillStyle = bd.multiKeyBackground, Yc.fillRect(md, ld, fd, ed), Yc.strokeRect(md, ld, fd, ed), Yc.fillStyle = cd.backgroundColor, Yc.fillRect(nd, ld + 1, fd - 2, ed - 2));
            }
            Yc.fillStyle = this.labelTextColors[$c];
        }
        drawBody(Yc, Zc, $c) {
            const {
                body: ad
            } = this, {
                bodySpacing: bd,
                bodyAlign: cd,
                displayColors: dd,
                boxHeight: ed,
                boxWidth: fd,
                boxPadding: gd
            } = $c, hd = (0, g.a0)($c.bodyFont);
            let id = hd.lineHeight,
                jd = 0;
            const kd = (0, g.az)($c.rtl, this.x, this.width),
                ld = function(md) {
                    Zc.fillText(md, kd.x(Yc.x + jd), Yc.y + id / 2), Yc.y += id + bd;
                },
                md = kd.textAlign(cd);
            let nd, od, pd, qd, rd, sd, td;
            for (Zc.textAlign = cd, Zc.textBaseline = 'middle', Zc.font = hd.string, Yc.x = Sc(this, md, $c), Zc.fillStyle = $c.bodyColor, (0, g.F)(this.beforeBody, ld), jd = dd && 'right' !== md ? 'center' === cd ? fd / 2 + gd : fd + 2 + gd : 0, qd = 0, sd = ad.length; qd < sd; ++qd) {
                for (nd = ad[qd], od = this.labelTextColors[qd], Zc.fillStyle = od, (0, g.F)(nd.before, ld), pd = nd.lines, dd && pd.length && (this._drawColorBox(Zc, Yc, qd, kd, $c), id = Math.max(hd.lineHeight, ed)), rd = 0, td = pd.length; rd < td; ++rd)
                    ld(pd[rd]), id = hd.lineHeight;
                (0, g.F)(nd.after, ld);
            }
            jd = 0, id = hd.lineHeight, (0, g.F)(this.afterBody, ld), Yc.y -= bd;
        }
        drawFooter(Yc, Zc, $c) {
            const ad = this.footer,
                bd = ad.length;
            let cd, dd;
            if (bd) {
                const ed = (0, g.az)($c.rtl, this.x, this.width);
                for (Yc.x = Sc(this, $c.footerAlign, $c), Yc.y += $c.footerMarginTop, Zc.textAlign = ed.textAlign($c.footerAlign), Zc.textBaseline = 'middle', cd = (0, g.a0)($c.footerFont), Zc.fillStyle = $c.footerColor, Zc.font = cd.string, dd = 0; dd < bd; ++dd)
                    Zc.fillText(ad[dd], ed.x(Yc.x), Yc.y + cd.lineHeight / 2), Yc.y += cd.lineHeight + $c.footerSpacing;
            }
        }
        drawBackground(Yc, Zc, $c, ad) {
            const {
                xAlign: bd,
                yAlign: cd
            } = this, {
                x: dd,
                y: ed
            } = Yc, {
                width: fd,
                height: gd
            } = $c, {
                topLeft: hd,
                topRight: id,
                bottomLeft: jd,
                bottomRight: kd
            } = (0, g.aw)(ad.cornerRadius);
            Zc.fillStyle = ad.backgroundColor, Zc.strokeStyle = ad.borderColor, Zc.lineWidth = ad.borderWidth, Zc.beginPath(), Zc.moveTo(dd + hd, ed), 'top' === cd && this.drawCaret(Yc, Zc, $c, ad), Zc.lineTo(dd + fd - id, ed), Zc.quadraticCurveTo(dd + fd, ed, dd + fd, ed + id), 'center' === cd && 'right' === bd && this.drawCaret(Yc, Zc, $c, ad), Zc.lineTo(dd + fd, ed + gd - kd), Zc.quadraticCurveTo(dd + fd, ed + gd, dd + fd - kd, ed + gd), 'bottom' === cd && this.drawCaret(Yc, Zc, $c, ad), Zc.lineTo(dd + jd, ed + gd), Zc.quadraticCurveTo(dd, ed + gd, dd, ed + gd - jd), 'center' === cd && 'left' === bd && this.drawCaret(Yc, Zc, $c, ad), Zc.lineTo(dd, ed + hd), Zc.quadraticCurveTo(dd, ed, dd + hd, ed), Zc.closePath(), Zc.fill(), ad.borderWidth > 0 && Zc.stroke();
        }
        _updateAnimationTarget(Yc) {
            const Zc = this.chart,
                $c = this.$animations,
                ad = $c && $c.x,
                bd = $c && $c.y;
            if (ad || bd) {
                const cd = Kc[Yc.position].call(this, this._active, this._eventPosition);
                if (!cd)
                    return;
                const dd = this._size = Oc(this, Yc),
                    ed = Object.assign({}, cd, this._size),
                    fd = Qc(Zc, Yc, ed),
                    gd = Rc(Yc, ed, fd, Zc);
                ad._to === gd.x && bd._to === gd.y || (this.xAlign = fd.xAlign, this.yAlign = fd.yAlign, this.width = dd.width, this.height = dd.height, this.caretX = cd.x, this.caretY = cd.y, this._resolveAnimations().update(this, gd));
            }
        }
        _willRender() {
            return !!this.opacity;
        }
        draw(Yc) {
            const Zc = this.options.setContext(this.getContext());
            let $c = this.opacity;
            if (!$c)
                return;
            this._updateAnimationTarget(Zc);
            const ad = {
                    width: this.width,
                    height: this.height
                },
                bd = {
                    x: this.x,
                    y: this.y
                };
            $c = Math.abs($c) < 0.001 ? 0 : $c;
            const cd = (0, g.E)(Zc.padding),
                dd = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
            Zc.enabled && dd && (Yc.save(), Yc.globalAlpha = $c, this.drawBackground(bd, Yc, ad, Zc), (0, g.aA)(Yc, Zc.textDirection), bd.y += cd.top, this.drawTitle(bd, Yc, Zc), this.drawBody(bd, Yc, Zc), this.drawFooter(bd, Yc, Zc), (0, g.aC)(Yc, Zc.textDirection), Yc.restore());
        }
        getActiveElements() {
            return this._active || [];
        }
        setActiveElements(Yc, Zc) {
            const $c = this._active,
                ad = Yc.map(({
                    datasetIndex: bd,
                    index: cd
                }) => {
                    const dd = this.chart.getDatasetMeta(bd);
                    if (!dd)
                        throw new Error('Cannot find a dataset at index ' + bd);
                    return {
                        datasetIndex: bd,
                        element: dd.data[cd],
                        index: cd
                    };
                }),
                dd = !(0, g.ah)($c, ad),
                ed = this._positionChanged(ad, cd);
            (dd || ed) && (this._active = ad, this._eventPosition = cd, this._ignoreReplayEvents = !0, this.update(!0));
        }
        handleEvent(Yc, Zc, $c = !0) {
            if (Zc && this._ignoreReplayEvents)
                return !1;
            this._ignoreReplayEvents = !1;
            const ad = this.options,
                bd = this._active || [],
                cd = this._getActiveElements(Yc, bd, Zc, $c),
                dd = this._positionChanged(cd, Yc),
                ed = Zc || !(0, g.ah)(cd, bd) || dd;
            return ed && (this._active = cd, (ad.enabled || ad.external) && (this._eventPosition = {
                x: Yc.x,
                y: Yc.y
            }, this.update(!0, Zc))), ed;
        }
        _getActiveElements(Yc, Zc, $c, ad) {
            const bd = this.options;
            if ('mouseout' === Yc.type)
                return [];
            if (!ad)
                return Zc;
            const cd = this.chart.getElementsAtEventForMode(Yc, bd.mode, bd, $c);
            return bd.reverse && cd.reverse(), cd;
        }
        _positionChanged(Yc, Zc) {
            const {
                caretX: $c,
                caretY: ad,
                options: bd
            } = this, cd = Kc[bd.position].call(this, Yc, Zc);
            return !1 !== cd && ($c !== cd.x || ad !== cd.y);
        }
        constructor(Yc) {
            super(), this.opacity = 0, this._active = [], this._eventPosition = void 0, this._size = void 0, this._cachedAnimations = void 0, this._tooltipItems = [], this.$animations = void 0, this.$context = void 0, this.chart = Yc.chart, this.options = Yc.options, this.dataPoints = void 0, this.title = void 0, this.beforeBody = void 0, this.body = void 0, this.afterBody = void 0, this.footer = void 0, this.xAlign = void 0, this.yAlign = void 0, this.x = void 0, this.y = void 0, this.height = void 0, this.width = void 0, this.caretX = void 0, this.caretY = void 0, this.labelColors = void 0, this.labelPointStyles = void 0, this.labelTextColors = void 0;
        }
    }
    (0, f.default)(Xc, 'positioners', Kc);

    function Yc(Zc, $c, ad, bd) {
        const cd = Zc.indexOf($c);
        if (-1 === cd)
            return ((Zc, $c, ad, bd) => ('string' == typeof $c ? (ad = Zc.push($c) - 1, bd.unshift({
                index: ad,
                label: $c
            })) : isNaN($c) && (ad = null), ad))(Zc, $c, ad, bd);
        return cd !== Zc.lastIndexOf($c) ? ad : cd;
    }

    function Zc($c) {
        const ad = this.getLabels();
        return $c >= 0 && $c < ad.length ? ad[$c] : $c;
    }
    class _$c extends Lb {
        init(ad) {
            const bd = this._addedLabels;
            if (bd.length) {
                const cd = this.getLabels();
                for (const {
                        index: dd,
                        label: ed
                    }
                    of bd)
                    cd[dd] === ed && cd.splice(dd, 1);
                this._addedLabels = [];
            }
            super.init(ad);
        }
        parse(ad, bd) {
            if ((0, g.k)(ad))
                return null;
            const cd = this.getLabels();
            return ((ad, bd) => null === ad ? null : (0, g.S)(Math.round(ad), 0, bd))(bd = isFinite(bd) && cd[bd] === ad ? bd : Yc(cd, ad, (0, g.v)(bd, ad), this._addedLabels), cd.length - 1);
        }
        determineDataLimits() {
            const {
                minDefined: ad,
                maxDefined: bd
            } = this.getUserBounds();
            let {
                min: cd,
                max: dd
            } = this.getMinMax(!0);
            'ticks' === this.options.bounds && (ad || (cd = 0), bd || (dd = this.getLabels().length - 1)), this.min = cd, this.max = dd;
        }
        buildTicks() {
            const ad = this.min,
                bd = this.max,
                cd = this.options.offset,
                dd = [];
            let ed = this.getLabels();
            ed = 0 === ad && bd === ed.length - 1 ? ed : ed.slice(ad, bd + 1), this._valueRange = Math.max(ed.length - (cd ? 0 : 1), 1), this._startValue = this.min - (cd ? 0.5 : 0);
            for (let fd = ad; fd <= bd; fd++)
                dd.push({
                    value: fd
                });
            return dd;
        }
        getLabelForValue(ad) {
            return Zc.call(this, ad);
        }
        configure() {
            super.configure(), this.isHorizontal() || (this._reversePixels = !this._reversePixels);
        }
        getPixelForValue(ad) {
            return 'number' != typeof ad && (ad = this.parse(ad)), null === ad ? NaN : this.getPixelForDecimal((ad - this._startValue) / this._valueRange);
        }
        getPixelForTick(ad) {
            const bd = this.ticks;
            return ad < 0 || ad > bd.length - 1 ? null : this.getPixelForValue(bd[ad].value);
        }
        getValueForPixel(ad) {
            return Math.round(this._startValue + this.getDecimalForPixel(ad) * this._valueRange);
        }
        getBasePixel() {
            return this.bottom;
        }
        constructor(ad) {
            super(ad), this._startValue = void 0, this._valueRange = 0, this._addedLabels = [];
        }
    }

    function ad(bd, cd, {
        horizontal: dd,
        minRotation: ed
    }) {
        const fd = (0, g.t)(ed),
            gd = (dd ? Math.sin(fd) : Math.cos(fd)) || 0.001,
            hd = 0.75 * cd * ('' + bd).length;
        return Math.min(cd / gd, hd);
    }
    (0, f.default)(_$c, 'id', 'category'), (0, f.default)(_$c, 'defaults', {
        ticks: {
            callback: Zc
        }
    });
    class bd extends Lb {
        parse(cd, dd) {
            return (0, g.k)(cd) || ('number' == typeof cd || cd instanceof Number) && !isFinite(+cd) ? null : +cd;
        }
        handleTickRangeOptions() {
            const {
                beginAtZero: cd
            } = this.options, {
                minDefined: dd,
                maxDefined: ed
            } = this.getUserBounds();
            let {
                min: fd,
                max: gd
            } = this;
            const hd = cd => fd = dd ? fd : cd,
                id = cd => gd = ed ? gd : cd;
            if (cd) {
                const jd = (0, g.s)(fd),
                    kd = (0, g.s)(gd);
                jd < 0 && kd < 0 ? id(0) : jd > 0 && kd > 0 && hd(0);
            }
            if (fd === gd) {
                let jd = 0 === gd ? 1 : Math.abs(0.05 * gd);
                id(gd + jd), cd || hd(fd - jd);
            }
            this.min = fd, this.max = gd;
        }
        getTickLimit() {
            const cd = this.options.ticks;
            let dd, {
                maxTicksLimit: ed,
                stepSize: fd
            } = cd;
            return fd ? (dd = Math.ceil(this.max / fd) - Math.floor(this.min / fd) + 1, dd > 1000 && (console.warn(`scales.${ this.id }.ticks.stepSize: ${ fd } would result generating up to ${ dd } ticks. Limiting to 1000.`), dd = 1000)) : (dd = this.computeTickLimit(), ed = ed || 11), ed && (dd = Math.min(ed, dd)), dd;
        }
        computeTickLimit() {
            return Number.POSITIVE_INFINITY;
        }
        buildTicks() {
            const cd = this.options,
                dd = cd.ticks;
            let ed = this.getTickLimit();
            ed = Math.max(2, ed);
            const fd = function(gd, hd) {
                const id = [],
                    {
                        bounds: jd,
                        step: kd,
                        min: ld,
                        max: md,
                        precision: nd,
                        count: od,
                        maxTicks: pd,
                        maxDigits: qd,
                        includeBounds: rd
                    } = gd,
                    sd = kd || 1,
                    td = pd - 1,
                    {
                        min: ud,
                        max: vd
                    } = hd,
                    wd = !(0, g.k)(ld),
                    xd = !(0, g.k)(md),
                    yd = !(0, g.k)(od),
                    zd = (vd - ud) / (qd + 1);
                let Ad, Bd, Cd, Dd, Ed = (0, g.aH)((vd - ud) / td / sd) * sd;
                if (Ed < 1e-14 && !wd && !xd)
                    return [{
                            value: ud
                        },
                        {
                            value: vd
                        }
                    ];
                Dd = Math.ceil(vd / Ed) - Math.floor(ud / Ed), Dd > td && (Ed = (0, g.aH)(Dd * Ed / td / sd) * sd), (0, g.k)(nd) || (Ad = Math.pow(10, nd), Ed = Math.ceil(Ed * Ad) / Ad), 'ticks' === jd ? (Bd = Math.floor(ud / Ed) * Ed, Cd = Math.ceil(vd / Ed) * Ed) : (Bd = ud, Cd = vd), wd && xd && kd && (0, g.aI)((md - ld) / kd, Ed / 1000) ? (Dd = Math.round(Math.min((md - ld) / Ed, pd)), Ed = (md - ld) / Dd, Bd = ld, Cd = md) : yd ? (Bd = wd ? ld : Bd, Cd = xd ? md : Cd, Dd = od - 1, Ed = (Cd - Bd) / Dd) : (Dd = (Cd - Bd) / Ed, Dd = (0, g.aJ)(Dd, Math.round(Dd), Ed / 1000) ? Math.round(Dd) : Math.ceil(Dd));
                const Fd = Math.max((0, g.aK)(Ed), (0, g.aK)(Bd));
                Ad = Math.pow(10, (0, g.k)(nd) ? Fd : nd), Bd = Math.round(Bd * Ad) / Ad, Cd = Math.round(Cd * Ad) / Ad;
                let Gd = 0;
                for (wd && (rd && Bd !== ld ? (id.push({
                        value: ld
                    }), Bd < ld && Gd++, (0, g.aJ)(Math.round((Bd + Gd * Ed) * Ad) / Ad, ld, ad(ld, zd, gd)) && Gd++) : Bd < ld && Gd++); Gd < Dd; ++Gd)
                    id.push({
                        value: Math.round((Bd + Gd * Ed) * Ad) / Ad
                    });
                return xd && rd && Cd !== md ? id.length && (0, g.aJ)(id[id.length - 1].value, md, ad(md, zd, gd)) ? id[id.length - 1].value = md : id.push({
                    value: md
                }) : xd && Cd !== md || id.push({
                    value: Cd
                }), id;
            }({
                maxTicks: ed,
                bounds: cd.bounds,
                min: cd.min,
                max: cd.max,
                precision: dd.precision,
                step: dd.stepSize,
                count: dd.count,
                maxDigits: this._maxDigits(),
                horizontal: this.isHorizontal(),
                minRotation: dd.minRotation || 0,
                includeBounds: !1 !== dd.includeBounds
            }, this._range || this);
            return 'ticks' === cd.bounds && (0, g.aG)(fd, this, 'value'), cd.reverse ? (fd.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), fd;
        }
        configure() {
            const cd = this.ticks;
            let dd = this.min,
                ed = this.max;
            if (super.configure(), this.options.offset && cd.length) {
                const fd = (ed - dd) / Math.max(cd.length - 1, 1) / 2;
                dd -= fd, ed += fd;
            }
            this._startValue = dd, this._endValue = ed, this._valueRange = ed - dd;
        }
        getLabelForValue(cd) {
            return (0, g.o)(cd, this.chart.options.locale, this.options.ticks.format);
        }
        constructor(cd) {
            super(cd), this.start = void 0, this.end = void 0, this._startValue = void 0, this._endValue = void 0, this._valueRange = 0;
        }
    }
    class _cd extends bd {
        determineDataLimits() {
            const {
                min: dd,
                max: ed
            } = this.getMinMax(!0);
            this.min = (0, g.g)(dd) ? dd : 0, this.max = (0, g.g)(ed) ? ed : 1, this.handleTickRangeOptions();
        }
        computeTickLimit() {
            const dd = this.isHorizontal(),
                ed = dd ? this.width : this.height,
                fd = (0, g.t)(this.options.ticks.minRotation),
                gd = (dd ? Math.sin(fd) : Math.cos(fd)) || 0.001,
                hd = this._resolveTickFontOptions(0);
            return Math.ceil(ed / Math.min(40, hd.lineHeight / gd));
        }
        getPixelForValue(dd) {
            return null === dd ? NaN : this.getPixelForDecimal((dd - this._startValue) / this._valueRange);
        }
        getValueForPixel(dd) {
            return this._startValue + this.getDecimalForPixel(dd) * this._valueRange;
        }
    }
    (0, f.default)(_cd, 'id', 'linear'), (0, f.default)(_cd, 'defaults', {
        ticks: {
            callback: g.aL.formatters.numeric
        }
    });
    const dd = a => Math.floor((0, g.aM)(a)),
        ed = (a, d) => Math.pow(10, dd(a) + d);

    function fd(gd) {
        return 1 === gd / Math.pow(10, dd(gd));
    }

    function gd(hd, id, jd) {
        const kd = Math.pow(10, jd),
            ld = Math.floor(hd / kd);
        return Math.ceil(id / kd) - ld;
    }

    function hd(id, {
        min: jd,
        max: kd
    }) {
        jd = (0, g.O)(id.min, jd);
        const ld = [],
            md = dd(jd);
        let nd = function(od, pd) {
                let qd = dd(pd - od);
                for (; gd(od, pd, qd) > 10;)
                    qd++;
                for (; gd(od, pd, qd) < 10;)
                    qd--;
                return Math.min(qd, dd(od));
            }(jd, kd),
            od = nd < 0 ? Math.pow(10, Math.abs(nd)) : 1;
        const pd = Math.pow(10, nd),
            qd = md > nd ? Math.pow(10, md) : 0,
            rd = Math.round((jd - qd) * od) / od,
            sd = Math.floor((jd - qd) / pd / 10) * pd * 10;
        let td = Math.floor((rd - sd) / Math.pow(10, nd)),
            ud = (0, g.O)(id.min, Math.round((qd + sd + td * Math.pow(10, nd)) * od) / od);
        for (; ud < kd;)
            ld.push({
                value: ud,
                major: fd(ud),
                significand: td
            }), td >= 10 ? td = td < 15 ? 15 : 20 : td++, td >= 20 && (nd++, td = 2, od = nd >= 0 ? 1 : od), ud = Math.round((qd + sd + td * Math.pow(10, nd)) * od) / od;
        const vd = (0, g.O)(id.max, ud);
        return ld.push({
            value: vd,
            major: fd(vd),
            significand: td
        }), ld;
    }
    class id extends Lb {
        parse(jd, kd) {
            const ld = bd.prototype.parse.apply(this, [
                jd,
                kd
            ]);
            if (0 !== ld)
                return (0, g.g)(ld) && ld > 0 ? ld : null;
            this._zero = !0;
        }
        determineDataLimits() {
            const {
                min: jd,
                max: kd
            } = this.getMinMax(!0);
            this.min = (0, g.g)(jd) ? Math.max(0, jd) : null, this.max = (0, g.g)(kd) ? Math.max(0, kd) : null, this.options.beginAtZero && (this._zero = !0), this._zero && this.min !== this._suggestedMin && !(0, g.g)(this._userMin) && (this.min = jd === ed(this.min, 0) ? ed(this.min, -1) : ed(this.min, 0)), this.handleTickRangeOptions();
        }
        handleTickRangeOptions() {
            const {
                minDefined: jd,
                maxDefined: kd
            } = this.getUserBounds();
            let ld = this.min,
                md = this.max;
            const nd = kd => ld = jd ? ld : kd,
                od = jd => md = kd ? md : jd;
            ld === md && (ld <= 0 ? (nd(1), od(10)) : (nd(ed(ld, -1)), od(ed(md, 1)))), ld <= 0 && nd(ed(md, -1)), md <= 0 && od(ed(ld, 1)), this.min = ld, this.max = md;
        }
        buildTicks() {
            const jd = this.options,
                kd = hd({
                    min: this._userMin,
                    max: this._userMax
                }, this);
            return 'ticks' === jd.bounds && (0, g.aG)(kd, this, 'value'), jd.reverse ? (kd.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), kd;
        }
        getLabelForValue(jd) {
            return void 0 === jd ? '0' : (0, g.o)(jd, this.chart.options.locale, this.options.ticks.format);
        }
        configure() {
            const jd = this.min;
            super.configure(), this._startValue = (0, g.aM)(jd), this._valueRange = (0, g.aM)(this.max) - (0, g.aM)(jd);
        }
        getPixelForValue(jd) {
            return void 0 !== jd && 0 !== jd || (jd = this.min), null === jd || isNaN(jd) ? NaN : this.getPixelForDecimal(jd === this.min ? 0 : ((0, g.aM)(jd) - this._startValue) / this._valueRange);
        }
        getValueForPixel(jd) {
            const kd = this.getDecimalForPixel(jd);
            return Math.pow(10, this._startValue + kd * this._valueRange);
        }
        constructor(jd) {
            super(jd), this.start = void 0, this.end = void 0, this._startValue = void 0, this._valueRange = 0;
        }
    }

    function jd(kd) {
        const ld = kd.ticks;
        if (ld.display && kd.display) {
            const md = (0, g.E)(ld.backdropPadding);
            return (0, g.v)(ld.font && ld.font.size, g.d.font.size) + md.height;
        }
        return 0;
    }

    function kd(ld, md, nd, od, pd) {
        return ld === od || ld === pd ? {
            start: md - nd / 2,
            end: md + nd / 2
        } : ld < od || ld > pd ? {
            start: md - nd,
            end: md
        } : {
            start: md,
            end: md + nd
        };
    }

    function ld(md) {
        const nd = {
                l: md.left + md._padding.left,
                r: md.right - md._padding.right,
                t: md.top + md._padding.top,
                b: md.bottom - md._padding.bottom
            },
            od = Object.assign({}, nd),
            pd = [],
            qd = [],
            rd = md._pointLabels.length,
            sd = md.options.pointLabels,
            td = sd.centerPointLabels ? g.P / rd : 0;
        for (let ud = 0; ud < rd; ud++) {
            const vd = sd.setContext(md.getPointLabelContext(ud));
            qd[ud] = vd.padding;
            const wd = md.getPointPosition(ud, md.drawingArea + qd[ud], td),
                xd = (0, g.a0)(vd.font),
                yd = (k = md.ctx, l = xd, m = md._pointLabels[ud], m = (0, g.b)(m) ? m : [m], {
                    w: (0, g.aN)(k, l.string, m),
                    h: m.length * l.lineHeight
                });
            pd[ud] = yd;
            const zd = (0, g.ay)(md.getIndexAngle(ud) + td),
                Ad = Math.round((0, g.U)(zd));
            _md(od, nd, zd, kd(Ad, wd.x, yd.w, 0, 180), kd(Ad, wd.y, yd.h, 90, 270));
        }
        var vd, wd, xd;
        md.setCenterPoint(nd.l - od.l, od.r - nd.r, nd.t - od.t, od.b - nd.b), md._pointLabelItems = function(yd, zd, Ad) {
            const Bd = [],
                Cd = yd._pointLabels.length,
                Dd = yd.options,
                Ed = jd(Dd) / 2,
                Fd = yd.drawingArea,
                Gd = Dd.pointLabels.centerPointLabels ? g.P / Cd : 0;
            for (let Hd = 0; Hd < Cd; Hd++) {
                const Id = yd.getPointPosition(Hd, Fd + Ed + Ad[Hd], Gd),
                    Jd = Math.round((0, g.U)((0, g.ay)(Id.angle + g.H))),
                    Kd = zd[Hd],
                    Ld = _pd(Id.y, Kd.h, Jd),
                    Md = _nd(Jd),
                    Nd = _od(Id.x, Kd.w, Md);
                Bd.push({
                    x: Id.x,
                    y: Ld,
                    textAlign: Md,
                    left: Nd,
                    top: Ld,
                    right: Nd + Kd.w,
                    bottom: Ld + Kd.h
                });
            }
            return Bd;
        }(md, pd, qd);
    }

    function _md(nd, od, pd, qd, rd) {
        const sd = Math.abs(Math.sin(pd)),
            td = Math.abs(Math.cos(pd));
        let ud = 0,
            vd = 0;
        qd.start < od.l ? (ud = (od.l - qd.start) / sd, nd.l = Math.min(nd.l, od.l - ud)) : qd.end > od.r && (ud = (qd.end - od.r) / sd, nd.r = Math.max(nd.r, od.r + ud)), rd.start < od.t ? (vd = (od.t - rd.start) / td, nd.t = Math.min(nd.t, od.t - vd)) : rd.end > od.b && (vd = (rd.end - od.b) / td, nd.b = Math.max(nd.b, od.b + vd));
    }

    function _nd(od) {
        return 0 === od || 180 === od ? 'center' : od < 180 ? 'left' : 'right';
    }

    function _od(pd, qd, rd) {
        return 'right' === rd ? pd -= qd : 'center' === rd && (pd -= qd / 2), pd;
    }

    function _pd(qd, rd, sd) {
        return 90 === sd || 270 === sd ? qd -= rd / 2 : (sd > 270 || sd < 90) && (qd -= rd), qd;
    }

    function qd(rd, sd, td, ud) {
        const {
            ctx: vd
        } = rd;
        if (td)
            vd.arc(rd.xCenter, rd.yCenter, sd, 0, g.T);
        else {
            let wd = rd.getPointPosition(0, sd);
            vd.moveTo(wd.x, wd.y);
            for (let xd = 1; xd < ud; xd++)
                wd = rd.getPointPosition(xd, sd), vd.lineTo(wd.x, wd.y);
        }
    }
    (0, f.default)(id, 'id', 'logarithmic'), (0, f.default)(id, 'defaults', {
        ticks: {
            callback: g.aL.formatters.logarithmic,
            major: {
                enabled: !0
            }
        }
    });
    class rd extends bd {
        setDimensions() {
            const sd = this._padding = (0, g.E)(jd(this.options) / 2),
                td = this.width = this.maxWidth - sd.width,
                ud = this.height = this.maxHeight - sd.height;
            this.xCenter = Math.floor(this.left + td / 2 + sd.left), this.yCenter = Math.floor(this.top + ud / 2 + sd.top), this.drawingArea = Math.floor(Math.min(td, ud) / 2);
        }
        determineDataLimits() {
            const {
                min: sd,
                max: td
            } = this.getMinMax(!1);
            this.min = (0, g.g)(sd) && !isNaN(sd) ? sd : 0, this.max = (0, g.g)(td) && !isNaN(td) ? td : 0, this.handleTickRangeOptions();
        }
        computeTickLimit() {
            return Math.ceil(this.drawingArea / jd(this.options));
        }
        generateTickLabels(sd) {
            bd.prototype.generateTickLabels.call(this, sd), this._pointLabels = this.getLabels().map((sd, d) => {
                const td = (0, g.Q)(this.options.pointLabels.callback, [
                    sd,
                    d
                ], this);
                return td || 0 === td ? td : '';
            }).filter((sd, d) => this.chart.getDataVisibility(d));
        }
        fit() {
            const sd = this.options;
            sd.display && sd.pointLabels.display ? ld(this) : this.setCenterPoint(0, 0, 0, 0);
        }
        setCenterPoint(sd, td, ud, vd) {
            this.xCenter += Math.floor((sd - td) / 2), this.yCenter += Math.floor((ud - vd) / 2), this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(sd, td, ud, vd));
        }
        getIndexAngle(sd) {
            const td = g.T / (this._pointLabels.length || 1),
                ud = this.options.startAngle || 0;
            return (0, g.ay)(sd * td + (0, g.t)(ud));
        }
        getDistanceFromCenterForValue(sd) {
            if ((0, g.k)(sd))
                return NaN;
            const td = this.drawingArea / (this.max - this.min);
            return this.options.reverse ? (this.max - sd) * td : (sd - this.min) * td;
        }
        getValueForDistanceFromCenter(sd) {
            if ((0, g.k)(sd))
                return NaN;
            const td = sd / (this.drawingArea / (this.max - this.min));
            return this.options.reverse ? this.max - td : this.min + td;
        }
        getPointLabelContext(sd) {
            const td = this._pointLabels || [];
            if (sd >= 0 && sd < td.length) {
                const ud = td[sd];
                return function(vd, wd, xd) {
                    return (0, g.j)(vd, {
                        label: xd,
                        index: wd,
                        type: 'pointLabel'
                    });
                }(this.getContext(), sd, ud);
            }
        }
        getPointPosition(sd, td, ud = 0) {
            const vd = this.getIndexAngle(sd) - g.H + ud;
            return {
                x: Math.cos(vd) * td + this.xCenter,
                y: Math.sin(vd) * td + this.yCenter,
                angle: vd
            };
        }
        getPointPositionForValue(sd, td) {
            return this.getPointPosition(sd, this.getDistanceFromCenterForValue(td));
        }
        getBasePosition(sd) {
            return this.getPointPositionForValue(sd || 0, this.getBaseValue());
        }
        getPointLabelPosition(sd) {
            const {
                left: td,
                top: ud,
                right: vd,
                bottom: wd
            } = this._pointLabelItems[sd];
            return {
                left: td,
                top: ud,
                right: vd,
                bottom: wd
            };
        }
        drawBackground() {
            const {
                backgroundColor: sd,
                grid: {
                    circular: td
                }
            } = this.options;
            if (sd) {
                const ud = this.ctx;
                ud.save(), ud.beginPath(), qd(this, this.getDistanceFromCenterForValue(this._endValue), td, this._pointLabels.length), ud.closePath(), ud.fillStyle = sd, ud.fill(), ud.restore();
            }
        }
        drawGrid() {
            const sd = this.ctx,
                td = this.options,
                {
                    angleLines: ud,
                    grid: vd,
                    border: wd
                } = td,
                xd = this._pointLabels.length;
            let yd, zd, Ad;
            if (td.pointLabels.display && function(Bd, Cd) {
                    const {
                        ctx: Dd,
                        options: {
                            pointLabels: Ed
                        }
                    } = Bd;
                    for (let Fd = Cd - 1; Fd >= 0; Fd--) {
                        const Gd = Ed.setContext(Bd.getPointLabelContext(Fd)),
                            Hd = (0, g.a0)(Gd.font),
                            {
                                x: Id,
                                y: Jd,
                                textAlign: Kd,
                                left: Ld,
                                top: Md,
                                right: Nd,
                                bottom: Od
                            } = Bd._pointLabelItems[Fd],
                            {
                                backdropColor: Pd
                            } = Gd;
                        if (!(0, g.k)(Pd)) {
                            const Qd = (0, g.aw)(Gd.borderRadius),
                                Rd = (0, g.E)(Gd.backdropPadding);
                            Dd.fillStyle = Pd;
                            const Sd = Ld - Rd.left,
                                Td = Md - Rd.top,
                                Ud = Nd - Ld + Rd.width,
                                Vd = Od - Md + Rd.height;
                            Object.values(Qd).some(Qd => 0 !== Qd) ? (Dd.beginPath(), (0, g.au)(Dd, {
                                x: Sd,
                                y: Td,
                                w: Ud,
                                h: Vd,
                                radius: Qd
                            }), Dd.fill()) : Dd.fillRect(Sd, Td, Ud, Vd);
                        }
                        (0, g.Z)(Dd, Bd._pointLabels[Fd], Id, Jd + Hd.lineHeight / 2, Hd, {
                            color: Gd.color,
                            textAlign: Kd,
                            textBaseline: 'middle'
                        });
                    }
                }(this, xd), vd.display && this.ticks.forEach((sd, td) => {
                    if (0 !== td) {
                        zd = this.getDistanceFromCenterForValue(sd.value);
                        const Bd = this.getContext(td),
                            Cd = vd.setContext(Bd),
                            Dd = wd.setContext(Bd);
                        ! function(Ed, Fd, Gd, Hd, Id) {
                            const Jd = Ed.ctx,
                                Kd = Fd.circular,
                                {
                                    color: Ld,
                                    lineWidth: Md
                                } = Fd;
                            !Kd && !Hd || !Ld || !Md || Gd < 0 || (Jd.save(), Jd.strokeStyle = Ld, Jd.lineWidth = Md, Jd.setLineDash(Id.dash), Jd.lineDashOffset = Id.dashOffset, Jd.beginPath(), qd(Ed, Gd, Kd, Hd), Jd.closePath(), Jd.stroke(), Jd.restore());
                        }(this, Cd, zd, xd, Dd);
                    }
                }), ud.display) {
                for (sd.save(), yd = xd - 1; yd >= 0; yd--) {
                    const Bd = ud.setContext(this.getPointLabelContext(yd)),
                        {
                            color: Cd,
                            lineWidth: Dd
                        } = Bd;
                    Dd && Cd && (sd.lineWidth = Dd, sd.strokeStyle = Cd, sd.setLineDash(Bd.borderDash), sd.lineDashOffset = Bd.borderDashOffset, zd = this.getDistanceFromCenterForValue(td.ticks.reverse ? this.min : this.max), Ad = this.getPointPosition(yd, zd), sd.beginPath(), sd.moveTo(this.xCenter, this.yCenter), sd.lineTo(Ad.x, Ad.y), sd.stroke());
                }
                sd.restore();
            }
        }
        drawBorder() {}
        drawLabels() {
            const sd = this.ctx,
                td = this.options,
                ud = td.ticks;
            if (!ud.display)
                return;
            const vd = this.getIndexAngle(0);
            let wd, xd;
            sd.save(), sd.translate(this.xCenter, this.yCenter), sd.rotate(vd), sd.textAlign = 'center', sd.textBaseline = 'middle', this.ticks.forEach((vd, i) => {
                if (0 === i && !td.reverse)
                    return;
                const yd = ud.setContext(this.getContext(i)),
                    zd = (0, g.a0)(yd.font);
                if (wd = this.getDistanceFromCenterForValue(this.ticks[i].value), yd.showLabelBackdrop) {
                    sd.font = zd.string, xd = sd.measureText(vd.label).width, sd.fillStyle = yd.backdropColor;
                    const Ad = (0, g.E)(yd.backdropPadding);
                    sd.fillRect(-xd / 2 - Ad.left, -wd - zd.size / 2 - Ad.top, xd + Ad.width, zd.size + Ad.height);
                }
                (0, g.Z)(sd, vd.label, 0, -wd, zd, {
                    color: yd.color
                });
            }), sd.restore();
        }
        drawTitle() {}
        constructor(sd) {
            super(sd), this.xCenter = void 0, this.yCenter = void 0, this.drawingArea = void 0, this._pointLabels = [], this._pointLabelItems = [];
        }
    }
    (0, f.default)(rd, 'id', 'radialLinear'), (0, f.default)(rd, 'defaults', {
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
            callback: g.aL.formatters.numeric
        },
        pointLabels: {
            backdropColor: void 0,
            backdropPadding: 2,
            display: !0,
            font: {
                size: 10
            },
            callback: a => a,
            padding: 5,
            centerPointLabels: !1
        }
    }), (0, f.default)(rd, 'defaultRoutes', {
        'angleLines.color': 'borderColor',
        'pointLabels.color': 'color',
        'ticks.color': 'color'
    }), (0, f.default)(rd, 'descriptors', {
        angleLines: {
            _fallback: 'grid'
        }
    });
    const sd = {
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
        td = Object.keys(sd);

    function ud(vd, wd) {
        return vd - wd;
    }

    function vd(wd, xd) {
        if ((0, g.k)(xd))
            return null;
        const yd = wd._adapter,
            {
                parser: zd,
                round: Ad,
                isoWeekday: Bd
            } = wd._parseOpts;
        let Cd = xd;
        return 'function' == typeof zd && (Cd = zd(Cd)), (0, g.g)(Cd) || (Cd = 'string' == typeof zd ? yd.parse(Cd, zd) : yd.parse(Cd)), null === Cd ? null : (Ad && (Cd = 'week' !== Ad || !(0, g.x)(Bd) && !0 !== Bd ? yd.startOf(Cd, Ad) : yd.startOf(Cd, 'isoWeek', Bd)), +Cd);
    }

    function wd(xd, yd, zd, Ad) {
        const Bd = td.length;
        for (let Cd = td.indexOf(xd); Cd < Bd - 1; ++Cd) {
            const Dd = sd[td[Cd]],
                Ed = Dd.steps ? Dd.steps : Number.MAX_SAFE_INTEGER;
            if (Dd.common && Math.ceil((zd - yd) / (Ed * Dd.size)) <= Ad)
                return td[Cd];
        }
        return td[Bd - 1];
    }

    function xd(yd, zd, Ad) {
        if (Ad) {
            if (Ad.length) {
                const {
                    lo: Bd,
                    hi: Cd
                } = (0, g.aP)(Ad, zd);
                yd[Ad[Bd] >= zd ? Ad[Bd] : Ad[Cd]] = !0;
            }
        } else
            yd[zd] = !0;
    }

    function yd(zd, Ad, Bd) {
        const Cd = [],
            Dd = {},
            Ed = Ad.length;
        let Fd, Gd;
        for (Fd = 0; Fd < Ed; ++Fd)
            Gd = Ad[Fd], Dd[Gd] = Fd, Cd.push({
                value: Gd,
                major: !1
            });
        return 0 !== Ed && Bd ? function(Hd, Id, Jd, Kd) {
            const Ld = Hd._adapter,
                Md = +Ld.startOf(Id[0].value, Kd),
                Nd = Id[Id.length - 1].value;
            let Od, Pd;
            for (Od = Md; Od <= Nd; Od = +Ld.add(Od, 1, Kd))
                Pd = Jd[Od], Pd >= 0 && (Id[Pd].major = !0);
            return Id;
        }(zd, Cd, Dd, Bd) : Cd;
    }
    class zd extends Lb {
        init(Ad, Bd = {}) {
            const Cd = Ad.time || (Ad.time = {}),
                Dd = this._adapter = new R(Ad.adapters.date);
            Dd.init(Bd), (0, g.ab)(Cd.displayFormats, Dd.formats()), this._parseOpts = {
                parser: Cd.parser,
                round: Cd.round,
                isoWeekday: Cd.isoWeekday
            }, super.init(Ad), this._normalized = Bd.normalized;
        }
        parse(Ad, Bd) {
            return void 0 === Ad ? null : vd(this, Ad);
        }
        beforeLayout() {
            super.beforeLayout(), this._cache = {
                data: [],
                labels: [],
                all: []
            };
        }
        determineDataLimits() {
            const Ad = this.options,
                Bd = this._adapter,
                Cd = Ad.time.unit || 'day';
            let {
                min: Dd,
                max: Ed,
                minDefined: Fd,
                maxDefined: Gd
            } = this.getUserBounds();

            function Hd(Id) {
                Fd || isNaN(Id.min) || (Dd = Math.min(Dd, Id.min)), Gd || isNaN(Id.max) || (Ed = Math.max(Ed, Id.max));
            }
            Fd && Gd || (Hd(this._getLabelBounds()), 'ticks' === Ad.bounds && 'labels' === Ad.ticks.source || Hd(this.getMinMax(!1))), Dd = (0, g.g)(Dd) && !isNaN(Dd) ? Dd : +Bd.startOf(Date.now(), Cd), Ed = (0, g.g)(Ed) && !isNaN(Ed) ? Ed : +Bd.endOf(Date.now(), Cd) + 1, this.min = Math.min(Dd, Ed - 1), this.max = Math.max(Dd + 1, Ed);
        }
        _getLabelBounds() {
            const Ad = this.getLabelTimestamps();
            let Bd = Number.POSITIVE_INFINITY,
                Cd = Number.NEGATIVE_INFINITY;
            return Ad.length && (Bd = Ad[0], Cd = Ad[Ad.length - 1]), {
                min: Bd,
                max: Cd
            };
        }
        buildTicks() {
            const Ad = this.options,
                Bd = Ad.time,
                Cd = Ad.ticks,
                Dd = 'labels' === Cd.source ? this.getLabelTimestamps() : this._generate();
            'ticks' === Ad.bounds && Dd.length && (this.min = this._userMin || Dd[0], this.max = this._userMax || Dd[Dd.length - 1]);
            const Ed = this.min,
                Fd = this.max,
                Gd = (0, g.aO)(Dd, Ed, Fd);
            return this._unit = Bd.unit || (Cd.autoSkip ? wd(Bd.minUnit, this.min, this.max, this._getLabelCapacity(Ed)) : function(Hd, Id, Jd, Kd, Ld) {
                for (let Md = td.length - 1; Md >= td.indexOf(Jd); Md--) {
                    const Nd = td[Md];
                    if (sd[Nd].common && Hd._adapter.diff(Ld, Kd, Nd) >= Id - 1)
                        return Nd;
                }
                return td[Jd ? td.indexOf(Jd) : 0];
            }(this, Gd.length, Bd.minUnit, this.min, this.max)), this._majorUnit = Cd.major.enabled && 'year' !== this._unit ? function(Hd) {
                for (let Id = td.indexOf(Hd) + 1, Jd = td.length; Id < Jd; ++Id)
                    if (sd[td[Id]].common)
                        return td[Id];
            }(this._unit) : void 0, this.initOffsets(Dd), Ad.reverse && Gd.reverse(), yd(this, Gd, this._majorUnit);
        }
        afterAutoSkip() {
            this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map(a => +a.value));
        }
        initOffsets(Ad = []) {
            let Bd, Cd, Dd = 0,
                Ed = 0;
            this.options.offset && Ad.length && (Bd = this.getDecimalForValue(Ad[0]), Dd = 1 === Ad.length ? 1 - Bd : (this.getDecimalForValue(Ad[1]) - Bd) / 2, Cd = this.getDecimalForValue(Ad[Ad.length - 1]), Ed = 1 === Ad.length ? Cd : (Cd - this.getDecimalForValue(Ad[Ad.length - 2])) / 2);
            const Fd = Ad.length < 3 ? 0.5 : 0.25;
            Dd = (0, g.S)(Dd, 0, Fd), Ed = (0, g.S)(Ed, 0, Fd), this._offsets = {
                start: Dd,
                end: Ed,
                factor: 1 / (Dd + 1 + Ed)
            };
        }
        _generate() {
            const Ad = this._adapter,
                Bd = this.min,
                Cd = this.max,
                Dd = this.options,
                Ed = Dd.time,
                Fd = Ed.unit || wd(Ed.minUnit, Bd, Cd, this._getLabelCapacity(Bd)),
                Gd = (0, g.v)(Dd.ticks.stepSize, 1),
                Hd = 'week' === Fd && Ed.isoWeekday,
                Id = (0, g.x)(Hd) || !0 === Hd,
                Jd = {};
            let Kd, Ld, Md = Bd;
            if (Id && (Md = +Ad.startOf(Md, 'isoWeek', Hd)), Md = +Ad.startOf(Md, Id ? 'day' : Fd), Ad.diff(Cd, Bd, Fd) > 100000 * Gd)
                throw new Error(Bd + ' and ' + Cd + ' are too far apart with stepSize of ' + Gd + ' ' + Fd);
            const Nd = 'data' === Dd.ticks.source && this.getDataTimestamps();
            for (Kd = Md, Ld = 0; Kd < Cd; Kd = +Ad.add(Kd, Gd, Fd), Ld++)
                xd(Jd, Kd, Nd);
            return Kd !== Cd && 'ticks' !== Dd.bounds && 1 !== Ld || xd(Jd, Kd, Nd), Object.keys(Jd).sort((Ad, Bd) => Ad - Bd).map(Ad => +Ad);
        }
        getLabelForValue(Ad) {
            const Bd = this._adapter,
                Cd = this.options.time;
            return Cd.tooltipFormat ? Bd.format(Ad, Cd.tooltipFormat) : Bd.format(Ad, Cd.displayFormats.datetime);
        }
        format(Ad, Bd) {
            const Cd = this.options.time.displayFormats,
                Dd = this._unit,
                Ed = Bd || Cd[Dd];
            return this._adapter.format(Ad, Ed);
        }
        _tickFormatFunction(Ad, Bd, Cd, Dd) {
            const Ed = this.options,
                Fd = Ed.ticks.callback;
            if (Fd)
                return (0, g.Q)(Fd, [
                    Ad,
                    Bd,
                    Cd
                ], this);
            const Gd = Ed.time.displayFormats,
                Hd = this._unit,
                Id = this._majorUnit,
                Jd = Hd && Gd[Hd],
                Kd = Id && Gd[Id],
                Ld = Cd[Bd],
                Md = Id && Kd && Ld && Ld.major;
            return this._adapter.format(Ad, Dd || (Md ? Kd : Jd));
        }
        generateTickLabels(Ad) {
            let Bd, Cd, Dd;
            for (Bd = 0, Cd = Ad.length; Bd < Cd; ++Bd)
                Dd = Ad[Bd], Dd.label = this._tickFormatFunction(Dd.value, Bd, Ad);
        }
        getDecimalForValue(Ad) {
            return null === Ad ? NaN : (Ad - this.min) / (this.max - this.min);
        }
        getPixelForValue(Ad) {
            const Bd = this._offsets,
                Cd = this.getDecimalForValue(Ad);
            return this.getPixelForDecimal((Bd.start + Cd) * Bd.factor);
        }
        getValueForPixel(Ad) {
            const Bd = this._offsets,
                Cd = this.getDecimalForPixel(Ad) / Bd.factor - Bd.end;
            return this.min + Cd * (this.max - this.min);
        }
        _getLabelSize(Ad) {
            const Bd = this.options.ticks,
                Cd = this.ctx.measureText(Ad).width,
                Dd = (0, g.t)(this.isHorizontal() ? Bd.maxRotation : Bd.minRotation),
                Ed = Math.cos(Dd),
                Fd = Math.sin(Dd),
                Gd = this._resolveTickFontOptions(0).size;
            return {
                w: Cd * Ed + Gd * Fd,
                h: Cd * Fd + Gd * Ed
            };
        }
        _getLabelCapacity(Ad) {
            const Bd = this.options.time,
                Cd = Bd.displayFormats,
                Dd = Cd[Bd.unit] || Cd.millisecond,
                Ed = this._tickFormatFunction(Ad, 0, yd(this, [Ad], this._majorUnit), Dd),
                Fd = this._getLabelSize(Ed),
                Gd = Math.floor(this.isHorizontal() ? this.width / Fd.w : this.height / Fd.h) - 1;
            return Gd > 0 ? Gd : 1;
        }
        getDataTimestamps() {
            let Ad, Bd, Cd = this._cache.data || [];
            if (Cd.length)
                return Cd;
            const Dd = this.getMatchingVisibleMetas();
            if (this._normalized && Dd.length)
                return this._cache.data = Dd[0].controller.getAllParsedValues(this);
            for (Ad = 0, Bd = Dd.length; Ad < Bd; ++Ad)
                Cd = Cd.concat(Dd[Ad].controller.getAllParsedValues(this));
            return this._cache.data = this.normalize(Cd);
        }
        getLabelTimestamps() {
            const Ad = this._cache.labels || [];
            let Bd, Cd;
            if (Ad.length)
                return Ad;
            const Dd = this.getLabels();
            for (Bd = 0, Cd = Dd.length; Bd < Cd; ++Bd)
                Ad.push(vd(this, Dd[Bd]));
            return this._cache.labels = this._normalized ? Ad : this.normalize(Ad);
        }
        normalize(Ad) {
            return (0, g._)(Ad.sort(ud));
        }
        constructor(Ad) {
            super(Ad), this._cache = {
                data: [],
                labels: [],
                all: []
            }, this._unit = 'day', this._majorUnit = void 0, this._offsets = {}, this._normalized = !1, this._parseOpts = void 0;
        }
    }

    function Ad(Bd, Cd, Dd) {
        let Ed, Fd, Gd, Hd, Id = 0,
            Jd = Bd.length - 1;
        Dd ? (Cd >= Bd[Id].pos && Cd <= Bd[Jd].pos && ({
            lo: Kd,
            hi: Ld
        } = (0, g.B)(Bd, 'pos', Cd)), {
            pos: Md,
            time: Nd
        } = Bd[Kd], {
            pos: Od,
            time: Pd
        } = Bd[Ld]) : (Cd >= Bd[Kd].time && Cd <= Bd[Ld].time && ({
            lo: Qd,
            hi: Rd
        } = (0, g.B)(Bd, 'time', Cd)), {
            time: Sd,
            pos: Td
        } = Bd[Qd], {
            time: Ud,
            pos: Vd
        } = Bd[Rd]);
        const Wd = Ud - Sd;
        return Wd ? Td + (Vd - Td) * (Cd - Sd) / Wd : Td;
    }
    (0, f.default)(zd, 'id', 'time'), (0, f.default)(zd, 'defaults', {
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
    class Bd extends zd {
        initOffsets() {
            const Cd = this._getTimestampsForTable(),
                Dd = this._table = this.buildLookupTable(Cd);
            this._minPos = Ad(Dd, this.min), this._tableRange = Ad(Dd, this.max) - this._minPos, super.initOffsets(Cd);
        }
        buildLookupTable(Cd) {
            const {
                min: Dd,
                max: Ed
            } = this, Fd = [], Gd = [];
            let Hd, Id, Jd, Kd, Ld;
            for (Hd = 0, Id = Cd.length; Hd < Id; ++Hd)
                Kd = Cd[Hd], Kd >= Dd && Kd <= Ed && Fd.push(Kd);
            if (Fd.length < 2)
                return [{
                        time: Dd,
                        pos: 0
                    },
                    {
                        time: Ed,
                        pos: 1
                    }
                ];
            for (Hd = 0, Id = Fd.length; Hd < Id; ++Hd)
                Ld = Fd[Hd + 1], Jd = Fd[Hd - 1], Kd = Fd[Hd], Math.round((Ld + Jd) / 2) !== Kd && Gd.push({
                    time: Kd,
                    pos: Hd / (Id - 1)
                });
            return Gd;
        }
        _getTimestampsForTable() {
            let Cd = this._cache.all || [];
            if (Cd.length)
                return Cd;
            const Dd = this.getDataTimestamps(),
                Ed = this.getLabelTimestamps();
            return Cd = Dd.length && Ed.length ? this.normalize(Dd.concat(Ed)) : Dd.length ? Dd : Ed, Cd = this._cache.all = Cd, Cd;
        }
        getDecimalForValue(Cd) {
            return (Ad(this._table, Cd) - this._minPos) / this._tableRange;
        }
        getValueForPixel(Cd) {
            const Dd = this._offsets,
                Ed = this.getDecimalForPixel(Cd) / Dd.factor - Dd.end;
            return Ad(this._table, Ed * this._tableRange + this._minPos, !0);
        }
        constructor(Cd) {
            super(Cd), this._table = [], this._minPos = void 0, this._tableRange = void 0;
        }
    }
    (0, f.default)(Bd, 'id', 'timeseries'), (0, f.default)(Bd, 'defaults', zd.defaults);
}), c.register('Ib1eT', function(d, e) {
    a(d.exports, 'aF', function() {
        return _g;
    }), a(d.exports, 'ac', function() {
        return _h;
    }), a(d.exports, 'k', function() {
        return _i;
    }), a(d.exports, 'b', function() {
        return _j;
    }), a(d.exports, 'i', function() {
        return _k;
    }), a(d.exports, 'g', function() {
        return _l;
    }), a(d.exports, 'O', function() {
        return _m;
    }), a(d.exports, 'v', function() {
        return _n;
    }), a(d.exports, 'm', function() {
        return _o;
    }), a(d.exports, 'n', function() {
        return _p;
    }), a(d.exports, 'Q', function() {
        return _q;
    }), a(d.exports, 'F', function() {
        return _r;
    }), a(d.exports, 'ah', function() {
        return _s;
    }), a(d.exports, 'a4', function() {
        return _w;
    }), a(d.exports, 'ab', function() {
        return _x;
    }), a(d.exports, 'f', function() {
        return _A;
    }), a(d.exports, 'a5', function() {
        return _B;
    }), a(d.exports, 'h', function() {
        return _C;
    }), a(d.exports, 'a7', function() {
        return _D;
    }), a(d.exports, 'ag', function() {
        return _E;
    }), a(d.exports, 'ai', function() {
        return _F;
    }), a(d.exports, 'P', function() {
        return _G;
    }), a(d.exports, 'T', function() {
        return _H;
    }), a(d.exports, 'H', function() {
        return _L;
    }), a(d.exports, 'aM', function() {
        return _O;
    }), a(d.exports, 's', function() {
        return _P;
    }), a(d.exports, 'aJ', function() {
        return _Q;
    }), a(d.exports, 'aH', function() {
        return _R;
    }), a(d.exports, 'N', function() {
        return _S;
    }), a(d.exports, 'x', function() {
        return _T;
    }), a(d.exports, 'aI', function() {
        return _U;
    }), a(d.exports, 'aG', function() {
        return _V;
    }), a(d.exports, 't', function() {
        return _W;
    }), a(d.exports, 'U', function() {
        return _X;
    }), a(d.exports, 'aK', function() {
        return _Y;
    }), a(d.exports, 'D', function() {
        return _Z;
    }), a(d.exports, 'aE', function() {
        return _$;
    }), a(d.exports, 'ay', function() {
        return _bb;
    }), a(d.exports, 'p', function() {
        return _cb;
    }), a(d.exports, 'S', function() {
        return _db;
    }), a(d.exports, 'W', function() {
        return _eb;
    }), a(d.exports, 'aj', function() {
        return _fb;
    }), a(d.exports, 'aP', function() {
        return _gb;
    }), a(d.exports, 'B', function() {
        return _hb;
    }), a(d.exports, 'A', function() {
        return _ib;
    }), a(d.exports, 'aO', function() {
        return _jb;
    }), a(d.exports, 'l', function() {
        return _lb;
    }), a(d.exports, 'u', function() {
        return _mb;
    }), a(d.exports, '_', function() {
        return _nb;
    }), a(d.exports, 'r', function() {
        return _ob;
    }), a(d.exports, 'L', function() {
        return _pb;
    }), a(d.exports, 'ad', function() {
        return _qb;
    }), a(d.exports, 'a1', function() {
        return _rb;
    }), a(d.exports, 'a2', function() {
        return _sb;
    }), a(d.exports, 'aB', function() {
        return _tb;
    }), a(d.exports, 'q', function() {
        return _ub;
    }), a(d.exports, 'w', function() {
        return _vb;
    }), a(d.exports, 'e', function() {
        return _zb;
    }), a(d.exports, 'c', function() {
        return _Bb;
    }), a(d.exports, 'o', function() {
        return _Gb;
    }), a(d.exports, 'aL', function() {
        return _Ib;
    }), a(d.exports, 'a3', function() {
        return _Jb;
    }), a(d.exports, 'a6', function() {
        return _Kb;
    }), a(d.exports, 'd', function() {
        return _Ob;
    }), a(d.exports, 'V', function() {
        return _Pb;
    }), a(d.exports, 'aN', function() {
        return _Qb;
    }), a(d.exports, 'X', function() {
        return _Rb;
    }), a(d.exports, 'af', function() {
        return _Sb;
    }), a(d.exports, 'at', function() {
        return _Tb;
    }), a(d.exports, 'aD', function() {
        return _Ub;
    }), a(d.exports, 'C', function() {
        return _Vb;
    }), a(d.exports, 'Y', function() {
        return _Wb;
    }), a(d.exports, '$', function() {
        return _Xb;
    }), a(d.exports, 'ar', function() {
        return _Yb;
    }), a(d.exports, 'as', function() {
        return _Zb;
    }), a(d.exports, 'Z', function() {
        return _$b;
    }), a(d.exports, 'au', function() {
        return _cc;
    }), a(d.exports, 'ak', function() {
        return _gc;
    }), a(d.exports, 'av', function() {
        return _hc;
    }), a(d.exports, 'aw', function() {
        return _ic;
    }), a(d.exports, 'E', function() {
        return _jc;
    }), a(d.exports, 'a0', function() {
        return _kc;
    }), a(d.exports, 'a', function() {
        return _lc;
    }), a(d.exports, 'R', function() {
        return _mc;
    }), a(d.exports, 'j', function() {
        return _nc;
    }), a(d.exports, 'a9', function() {
        return _oc;
    }), a(d.exports, 'a8', function() {
        return _pc;
    }), a(d.exports, 'aa', function() {
        return _qc;
    }), a(d.exports, 'y', function() {
        return _Bc;
    }), a(d.exports, 'al', function() {
        return _Ic;
    }), a(d.exports, 'M', function() {
        return _Jc;
    }), a(d.exports, 'I', function() {
        return _Kc;
    }), a(d.exports, 'z', function() {
        return _Pc;
    }), a(d.exports, 'G', function() {
        return _Rc;
    }), a(d.exports, 'ae', function() {
        return _Sc;
    }), a(d.exports, 'K', function() {
        return _Tc;
    }), a(d.exports, 'J', function() {
        return _Uc;
    }), a(d.exports, 'aq', function() {
        return _Vc;
    }), a(d.exports, 'ao', function() {
        return _Wc;
    }), a(d.exports, 'ap', function() {
        return _Xc;
    }), a(d.exports, 'az', function() {
        return _Yc;
    }), a(d.exports, 'aA', function() {
        return _Zc;
    }), a(d.exports, 'aC', function() {
        return _$c;
    }), a(d.exports, 'ax', function() {
        return _cd;
    }), a(d.exports, 'an', function() {
        return _dd;
    }), a(d.exports, 'am', function() {
        return _ed;
    });
    var f = c('l9sZi');

    function _g() {}
    const _h = (() => {
        let i = 0;
        return () => i++;
    })();

    function _i(j) {
        return null == j;
    }

    function _j(k) {
        if (Array.isArray && Array.isArray(k))
            return !0;
        const l = Object.prototype.toString.call(k);
        return '[object' === l.slice(0, 7) && 'Array]' === l.slice(-6);
    }

    function _k(l) {
        return null !== l && '[object Object]' === Object.prototype.toString.call(l);
    }

    function _l(m) {
        return ('number' == typeof m || m instanceof Number) && isFinite(+m);
    }

    function _m(n, o) {
        return _l(n) ? n : o;
    }

    function _n(o, p) {
        return void 0 === o ? p : o;
    }
    const _o = (a, d) => 'string' == typeof a && a.endsWith('%') ? parseFloat(a) / 100 : +a / d,
        _p = (a, d) => 'string' == typeof a && a.endsWith('%') ? parseFloat(a) / 100 * d : +a;

    function _q(r, s, t) {
        if (r && 'function' == typeof r.call)
            return r.apply(t, s);
    }

    function _r(s, t, u, v) {
        let w, x, y;
        if (_j(s))
            if (x = s.length, v)
                for (w = x - 1; w >= 0; w--)
                    t.call(u, s[w], w);
            else
                for (w = 0; w < x; w++)
                    t.call(u, s[w], w);
        else if (_k(s))
            for (y = Object.keys(s), x = y.length, w = 0; w < x; w++)
                t.call(u, s[y[w]], y[w]);
    }

    function _s(t, u) {
        let v, w, x, y;
        if (!t || !u || t.length !== u.length)
            return !1;
        for (v = 0, w = t.length; v < w; ++v)
            if (x = t[v], y = u[v], x.datasetIndex !== y.datasetIndex || x.index !== y.index)
                return !1;
        return !0;
    }

    function t(u) {
        if (_j(u))
            return u.map(t);
        if (_k(u)) {
            const v = Object.create(null),
                w = Object.keys(u),
                x = w.length;
            let y = 0;
            for (; y < x; ++y)
                v[w[y]] = t(u[w[y]]);
            return v;
        }
        return u;
    }

    function u(v) {
        return -1 === [
            '__proto__',
            'prototype',
            'constructor'
        ].indexOf(v);
    }

    function v(w, x, y, z) {
        if (!u(w))
            return;
        const A = x[w],
            B = y[w];
        _k(A) && _k(B) ? _w(A, B, z) : x[w] = t(B);
    }

    function _w(x, y, z) {
        const A = _j(y) ? y : [y],
            B = A.length;
        if (!_k(x))
            return x;
        const C = (z = z || {}).merger || v;
        let D;
        for (let E = 0; E < B; ++E) {
            if (D = A[E], !_k(D))
                continue;
            const F = Object.keys(D);
            for (let G = 0, H = F.length; G < H; ++G)
                C(F[G], x, D, z);
        }
        return x;
    }

    function _x(y, z) {
        return _w(y, z, {
            merger: _y
        });
    }

    function _y(z, A, B) {
        if (!u(z))
            return;
        const C = A[z],
            D = B[z];
        _k(C) && _k(D) ? _x(C, D) : Object.prototype.hasOwnProperty.call(A, z) || (A[z] = t(D));
    }
    const z = {
        '': a => a,
        x: a => a.x,
        y: a => a.y
    };

    function _A(B, C) {
        const D = z[C] || (z[C] = function(E) {
            const F = function(G) {
                const H = G.split('.'),
                    I = [];
                let J = '';
                for (const K of H)
                    J += K, J.endsWith('\\') ? J = J.slice(0, -1) + '.' : (I.push(J), J = '');
                return I;
            }(E);
            return E => {
                for (const G of F) {
                    if ('' === G)
                        break;
                    E = E && E[G];
                }
                return E;
            };
        }(C));
        return D(B);
    }

    function _B(C) {
        return C.charAt(0).toUpperCase() + C.slice(1);
    }
    const _C = a => void 0 !== a,
        _D = a => 'function' == typeof a,
        _E = (a, d) => {
            if (a.size !== d.size)
                return !1;
            for (const F of a)
                if (!d.has(F))
                    return !1;
            return !0;
        };

    function _F(G) {
        return 'mouseup' === G.type || 'click' === G.type || 'contextmenu' === G.type;
    }
    const _G = Math.PI,
        _H = 2 * _G,
        I = _H + _G,
        J = Number.POSITIVE_INFINITY,
        K = _G / 180,
        _L = _G / 2,
        M = _G / 4,
        N = 2 * _G / 3,
        _O = Math.log10,
        _P = Math.sign;

    function _Q(R, S, T) {
        return Math.abs(R - S) < T;
    }

    function _R(S) {
        const T = Math.round(S);
        S = _Q(S, T, S / 1000) ? T : S;
        const U = Math.pow(10, Math.floor(_O(S))),
            V = S / U;
        return (V <= 1 ? 1 : V <= 2 ? 2 : V <= 5 ? 5 : 10) * U;
    }

    function _S(T) {
        const U = [],
            V = Math.sqrt(T);
        let W;
        for (W = 1; W < V; W++)
            T % W == 0 && (U.push(W), U.push(T / W));
        return V === (0 | V) && U.push(V), U.sort((T, U) => T - U).pop(), U;
    }

    function _T(U) {
        return !isNaN(parseFloat(U)) && isFinite(U);
    }

    function _U(V, W) {
        const X = Math.round(V);
        return X - W <= V && X + W >= V;
    }

    function _V(W, X, Y) {
        let Z, $, ab;
        for (Z = 0, $ = W.length; Z < $; Z++)
            ab = W[Z][Y], isNaN(ab) || (X.min = Math.min(X.min, ab), X.max = Math.max(X.max, ab));
    }

    function _W(X) {
        return X * (_G / 180);
    }

    function _X(Y) {
        return Y * (180 / _G);
    }

    function _Y(Z) {
        if (!_l(Z))
            return;
        let $ = 1,
            ab = 0;
        for (; Math.round(Z * $) / $ !== Z;)
            $ *= 10, ab++;
        return ab;
    }

    function _Z($, ab) {
        const bb = ab.x - $.x,
            cb = ab.y - $.y,
            db = Math.sqrt(bb * bb + cb * cb);
        let eb = Math.atan2(cb, bb);
        return eb < -0.5 * _G && (eb += _H), {
            angle: eb,
            distance: db
        };
    }

    function _$(ab, bb) {
        return Math.sqrt(Math.pow(bb.x - ab.x, 2) + Math.pow(bb.y - ab.y, 2));
    }

    function ab(bb, cb) {
        return (bb - cb + I) % _H - _G;
    }

    function _bb(cb) {
        return (cb % _H + _H) % _H;
    }

    function _cb(db, eb, fb, gb) {
        const hb = _bb(db),
            ib = _bb(eb),
            jb = _bb(fb),
            kb = _bb(ib - hb),
            lb = _bb(jb - hb),
            mb = _bb(hb - ib),
            nb = _bb(hb - jb);
        return hb === ib || hb === jb || gb && ib === jb || kb > lb && mb < nb;
    }

    function _db(eb, fb, gb) {
        return Math.max(fb, Math.min(gb, eb));
    }

    function _eb(fb) {
        return _db(fb, -32768, 32767);
    }

    function _fb(gb, hb, ib, jb = 0.000001) {
        return gb >= Math.min(hb, ib) - jb && gb <= Math.max(hb, ib) + jb;
    }

    function _gb(hb, ib, jb) {
        jb = jb || (jb => hb[jb] < ib);
        let kb, lb = hb.length - 1,
            mb = 0;
        for (; lb - mb > 1;)
            kb = mb + lb >> 1, jb(kb) ? mb = kb : lb = kb;
        return {
            lo: mb,
            hi: lb
        };
    }
    const _hb = (a, d, c, e) => _gb(a, c, e ? e => {
            const ib = a[e][d];
            return ib < c || ib === c && a[e + 1][d] === c;
        } : e => a[e][d] < c),
        _ib = (a, d, c) => _gb(a, c, e => a[e][d] >= c);

    function _jb(kb, lb, mb) {
        let nb = 0,
            ob = kb.length;
        for (; nb < ob && kb[nb] < lb;)
            nb++;
        for (; ob > nb && kb[ob - 1] > mb;)
            ob--;
        return nb > 0 || ob < kb.length ? kb.slice(nb, ob) : kb;
    }
    const kb = [
        'push',
        'pop',
        'shift',
        'splice',
        'unshift'
    ];

    function _lb(mb, nb) {
        mb._chartjs ? mb._chartjs.listeners.push(nb) : (Object.defineProperty(mb, '_chartjs', {
            configurable: !0,
            enumerable: !1,
            value: {
                listeners: [nb]
            }
        }), kb.forEach(nb => {
            const ob = '_onData' + _B(nb),
                pb = mb[nb];
            Object.defineProperty(mb, nb, {
                configurable: !0,
                enumerable: !1,
                value(...nb) {
                    const qb = pb.apply(this, nb);
                    return mb._chartjs.listeners.forEach(mb => {
                        'function' == typeof mb[ob] && mb[ob](...nb);
                    }), qb;
                }
            });
        }));
    }

    function _mb(nb, ob) {
        const pb = nb._chartjs;
        if (!pb)
            return;
        const qb = pb.listeners,
            rb = qb.indexOf(ob); -
        1 !== rb && qb.splice(rb, 1), qb.length > 0 || (kb.forEach(ob => {
            delete nb[ob];
        }), delete nb._chartjs);
    }

    function _nb(ob) {
        const pb = new Set();
        let qb, rb;
        for (qb = 0, rb = ob.length; qb < rb; ++qb)
            pb.add(ob[qb]);
        return pb.size === rb ? ob : Array.from(pb);
    }
    const _ob = 'undefined' == typeof window ? function(pb) {
        return pb();
    } : window.requestAnimationFrame;

    function _pb(qb, rb) {
        let sb = [],
            tb = !1;
        return function(...f) {
            sb = f, tb || (tb = !0, _ob.call(window, () => {
                tb = !1, qb.apply(rb, sb);
            }));
        };
    }

    function _qb(rb, sb) {
        let tb;
        return function(...e) {
            return sb ? (clearTimeout(tb), tb = setTimeout(rb, sb, e)) : rb.apply(this, e), sb;
        };
    }
    const _rb = a => 'start' === a ? 'left' : 'end' === a ? 'right' : 'center',
        _sb = (a, d, c) => 'start' === a ? d : 'end' === a ? c : (d + c) / 2,
        _tb = (a, d, c, e) => a === (e ? 'left' : 'right') ? c : 'center' === a ? (d + c) / 2 : d;

    function _ub(vb, wb, xb) {
        const yb = wb.length;
        let zb = 0,
            Ab = yb;
        if (vb._sorted) {
            const {
                iScale: Bb,
                _parsed: Cb
            } = vb, Db = Bb.axis, {
                min: Eb,
                max: Fb,
                minDefined: Gb,
                maxDefined: Hb
            } = Bb.getUserBounds();
            Gb && (zb = _db(Math.min(_hb(Cb, Bb.axis, Eb).lo, xb ? yb : _hb(wb, Db, Bb.getPixelForValue(Eb)).lo), 0, yb - 1)), Ab = Hb ? _db(Math.max(_hb(Cb, Bb.axis, Fb, !0).hi + 1, xb ? 0 : _hb(wb, Db, Bb.getPixelForValue(Fb), !0).hi + 1), zb, yb) - zb : yb - zb;
        }
        return {
            start: zb,
            count: Ab
        };
    }

    function _vb(wb) {
        const {
            xScale: xb,
            yScale: yb,
            _scaleRanges: zb
        } = wb, Ab = {
            xmin: xb.min,
            xmax: xb.max,
            ymin: yb.min,
            ymax: yb.max
        };
        if (!zb)
            return wb._scaleRanges = Ab, !0;
        const Bb = zb.xmin !== xb.min || zb.xmax !== xb.max || zb.ymin !== yb.min || zb.ymax !== yb.max;
        return Object.assign(zb, Ab), Bb;
    }
    const wb = a => 0 === a || 1 === a,
        xb = (a, d, c) => -Math.pow(2, 10 * (a -= 1)) * Math.sin((a - d) * _H / c),
        yb = (a, d, c) => Math.pow(2, -10 * a) * Math.sin((a - d) * _H / c) + 1,
        _zb = {
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
            easeInSine: a => 1 - Math.cos(a * _L),
            easeOutSine: a => Math.sin(a * _L),
            easeInOutSine: a => -0.5 * (Math.cos(_G * a) - 1),
            easeInExpo: a => 0 === a ? 0 : Math.pow(2, 10 * (a - 1)),
            easeOutExpo: a => 1 === a ? 1 : 1 - Math.pow(2, -10 * a),
            easeInOutExpo: a => wb(a) ? a : a < 0.5 ? 0.5 * Math.pow(2, 10 * (2 * a - 1)) : 0.5 * (2 - Math.pow(2, -10 * (2 * a - 1))),
            easeInCirc: a => a >= 1 ? a : -(Math.sqrt(1 - a * a) - 1),
            easeOutCirc: a => Math.sqrt(1 - (a -= 1) * a),
            easeInOutCirc: a => (a /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - a * a) - 1) : 0.5 * (Math.sqrt(1 - (a -= 2) * a) + 1),
            easeInElastic: a => wb(a) ? a : xb(a, 0.075, 0.3),
            easeOutElastic: a => wb(a) ? a : yb(a, 0.075, 0.3),
            easeInOutElastic(Ab) {
                const Bb = 0.1125;
                return wb(Ab) ? Ab : Ab < 0.5 ? 0.5 * xb(2 * Ab, Bb, 0.45) : 0.5 + 0.5 * yb(2 * Ab - 1, Bb, 0.45);
            },
            easeInBack(Ab) {
                const Bb = 1.70158;
                return Ab * Ab * ((Bb + 1) * Ab - Bb);
            },
            easeOutBack(Ab) {
                const Bb = 1.70158;
                return (Ab -= 1) * Ab * ((Bb + 1) * Ab + Bb) + 1;
            },
            easeInOutBack(Ab) {
                let Bb = 1.70158;
                return (Ab /= 0.5) < 1 ? Ab * Ab * ((1 + (Bb *= 1.525)) * Ab - Bb) * 0.5 : 0.5 * ((Ab -= 2) * Ab * ((1 + (Bb *= 1.525)) * Ab + Bb) + 2);
            },
            easeInBounce: a => 1 - _zb.easeOutBounce(1 - a),
            easeOutBounce(Ab) {
                const Bb = 7.5625,
                    Cb = 2.75;
                return Ab < 1 / Cb ? Bb * Ab * Ab : Ab < 2 / Cb ? Bb * (Ab -= 1.5 / Cb) * Ab + 0.75 : Ab < 2.5 / Cb ? Bb * (Ab -= 2.25 / Cb) * Ab + 0.9375 : Bb * (Ab -= 2.625 / Cb) * Ab + 0.984375;
            },
            easeInOutBounce: a => a < 0.5 ? 0.5 * _zb.easeInBounce(2 * a) : 0.5 * _zb.easeOutBounce(2 * a - 1) + 0.5
        };

    function Ab(Bb) {
        if (Bb && 'object' == typeof Bb) {
            const Cb = Bb.toString();
            return '[object CanvasPattern]' === Cb || '[object CanvasGradient]' === Cb;
        }
        return !1;
    }

    function _Bb(Cb) {
        return Ab(Cb) ? Cb : new(0, f.Color)(Cb);
    }

    function Cb(Db) {
        return Ab(Db) ? Db : new(0, f.Color)(Db).saturate(0.5).darken(0.1).hexString();
    }
    const Db = [
            'x',
            'y',
            'borderWidth',
            'radius',
            'tension'
        ],
        Eb = [
            'color',
            'borderColor',
            'backgroundColor'
        ];
    const Fb = new Map();

    function _Gb(Hb, Ib, Jb) {
        return function(Kb, Lb) {
            Lb = Lb || {};
            const Mb = Kb + JSON.stringify(Lb);
            let Nb = Fb.get(Mb);
            return Nb || (Nb = new Intl.NumberFormat(Kb, Lb), Fb.set(Mb, Nb)), Nb;
        }(Ib, Jb).format(Hb);
    }
    const Hb = {
        values: a => _j(a) ? a : '' + a,
        numeric(Ib, Jb, Kb) {
            if (0 === Ib)
                return '0';
            const Lb = this.chart.options.locale;
            let Mb, Nb = Ib;
            if (Kb.length > 1) {
                const Ob = Math.max(Math.abs(Kb[0].value), Math.abs(Kb[Kb.length - 1].value));
                (Ob < 0.0001 || Ob > 1000000000000000) && (Mb = 'scientific'), Nb = function(Pb, Qb) {
                    let Rb = Qb.length > 3 ? Qb[2].value - Qb[1].value : Qb[1].value - Qb[0].value;
                    Math.abs(Rb) >= 1 && Pb !== Math.floor(Pb) && (Rb = Pb - Math.floor(Pb));
                    return Rb;
                }(Ib, Kb);
            }
            const Ob = _O(Math.abs(Nb)),
                Pb = Math.max(Math.min(-1 * Math.floor(Ob), 20), 0),
                Qb = {
                    notation: Mb,
                    minimumFractionDigits: Pb,
                    maximumFractionDigits: Pb
                };
            return Object.assign(Qb, this.options.ticks.format), _Gb(Ib, Lb, Qb);
        },
        logarithmic(Ib, Jb, Kb) {
            if (0 === Ib)
                return '0';
            const Lb = Kb[Jb].significand || Ib / Math.pow(10, Math.floor(_O(Ib)));
            return [
                1,
                2,
                3,
                5,
                10,
                15
            ].includes(Lb) || Jb > 0.8 * Kb.length ? Hb.numeric.call(this, Ib, Jb, Kb) : '';
        }
    };
    var _Ib = {
        formatters: Hb
    };
    const _Jb = Object.create(null),
        _Kb = Object.create(null);

    function Lb(Mb, Nb) {
        if (!Nb)
            return Mb;
        const Ob = Nb.split('.');
        for (let Pb = 0, Qb = Ob.length; Pb < Qb; ++Pb) {
            const Rb = Ob[Pb];
            Mb = Mb[Rb] || (Mb[Rb] = Object.create(null));
        }
        return Mb;
    }

    function Mb(Nb, Ob, Pb) {
        return 'string' == typeof Ob ? _w(Lb(Nb, Ob), Pb) : _w(Lb(Nb, ''), Ob);
    }
    class Nb {
        set(Ob, Pb) {
            return Mb(this, Ob, Pb);
        }
        get(Ob) {
            return Lb(this, Ob);
        }
        describe(Ob, Pb) {
            return Mb(_Kb, Ob, Pb);
        }
        override(Ob, Pb) {
            return Mb(_Jb, Ob, Pb);
        }
        route(Ob, Pb, Qb, Rb) {
            const Sb = Lb(this, Ob),
                Tb = Lb(this, Qb),
                Ub = '_' + Pb;
            Object.defineProperties(Sb, {
                [Ub]: {
                    value: Sb[Pb],
                    writable: !0
                },
                [Pb]: {
                    enumerable: !0,
                    get() {
                        const Vb = this[Ub],
                            Wb = Tb[Rb];
                        return _k(Vb) ? Object.assign({}, Wb, Vb) : _n(Vb, Wb);
                    },
                    set(Vb) {
                        this[Ub] = Vb;
                    }
                }
            });
        }
        apply(Ob) {
            Ob.forEach(Ob => Ob(this));
        }
        constructor(Ob, Pb) {
            this.animation = void 0, this.backgroundColor = 'rgba(0,0,0,0.1)', this.borderColor = 'rgba(0,0,0,0.1)', this.color = '#666', this.datasets = {}, this.devicePixelRatio = Ob => Ob.chart.platform.getDevicePixelRatio(), this.elements = {}, this.events = [
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
            }, this.hover = {}, this.hoverBackgroundColor = (Ob, Pb) => Cb(Pb.backgroundColor), this.hoverBorderColor = (Ob, Pb) => Cb(Pb.borderColor), this.hoverColor = (Ob, Pb) => Cb(Pb.color), this.indexAxis = 'x', this.interaction = {
                mode: 'nearest',
                intersect: !0,
                includeInvisible: !1
            }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.drawActiveElementsOnTop = !0, this.describe(Ob), this.apply(Pb);
        }
    }
    var _Ob = new Nb({
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
        function(Pb) {
            Pb.set('animation', {
                delay: void 0,
                duration: 1000,
                easing: 'easeOutQuart',
                fn: void 0,
                from: void 0,
                loop: void 0,
                to: void 0,
                type: void 0
            }), Pb.describe('animation', {
                _fallback: !1,
                _indexable: !1,
                _scriptable: Pb => 'onProgress' !== Pb && 'onComplete' !== Pb && 'fn' !== Pb
            }), Pb.set('animations', {
                colors: {
                    type: 'color',
                    properties: Eb
                },
                numbers: {
                    type: 'number',
                    properties: Db
                }
            }), Pb.describe('animations', {
                _fallback: 'animation'
            }), Pb.set('transitions', {
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
                            fn: Pb => 0 | Pb
                        }
                    }
                }
            });
        },
        function(Pb) {
            Pb.set('layout', {
                autoPadding: !0,
                padding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                }
            });
        },
        function(Pb) {
            Pb.set('scale', {
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
                    tickWidth: (Pb, d) => d.lineWidth,
                    tickColor: (Pb, d) => d.color,
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
                    callback: _Ib.formatters.values,
                    minor: {},
                    major: {},
                    align: 'center',
                    crossAlign: 'near',
                    showLabelBackdrop: !1,
                    backdropColor: 'rgba(255, 255, 255, 0.75)',
                    backdropPadding: 2
                }
            }), Pb.route('scale.ticks', 'color', '', 'color'), Pb.route('scale.grid', 'color', '', 'borderColor'), Pb.route('scale.border', 'color', '', 'borderColor'), Pb.route('scale.title', 'color', '', 'color'), Pb.describe('scale', {
                _fallback: !1,
                _scriptable: Pb => !Pb.startsWith('before') && !Pb.startsWith('after') && 'callback' !== Pb && 'parser' !== Pb,
                _indexable: Pb => 'borderDash' !== Pb && 'tickBorderDash' !== Pb && 'dash' !== Pb
            }), Pb.describe('scales', {
                _fallback: 'scale'
            }), Pb.describe('scale.ticks', {
                _scriptable: Pb => 'backdropPadding' !== Pb && 'callback' !== Pb,
                _indexable: Pb => 'backdropPadding' !== Pb
            });
        }
    ]);

    function _Pb(Qb, Rb, Sb, Tb, Ub) {
        let Vb = Rb[Ub];
        return Vb || (Vb = Rb[Ub] = Qb.measureText(Ub).width, Sb.push(Ub)), Vb > Tb && (Tb = Vb), Tb;
    }

    function _Qb(Rb, Sb, Tb, Ub) {
        let Vb = (Ub = Ub || {}).data = Ub.data || {},
            Wb = Ub.garbageCollect = Ub.garbageCollect || [];
        Ub.font !== Sb && (Vb = Ub.data = {}, Wb = Ub.garbageCollect = [], Ub.font = Sb), Rb.save(), Rb.font = Sb;
        let Xb = 0;
        const Yb = Tb.length;
        let Zb, $b, ac, bc, cc;
        for (Zb = 0; Zb < Yb; Zb++)
            if (bc = Tb[Zb], null != bc && !0 !== _j(bc))
                Xb = _Pb(Rb, Vb, Wb, Xb, bc);
            else if (_j(bc))
            for ($b = 0, ac = bc.length; $b < ac; $b++)
                cc = bc[$b], null == cc || _j(cc) || (Xb = _Pb(Rb, Vb, Wb, Xb, cc));
        Rb.restore();
        const dc = Wb.length / 2;
        if (dc > Tb.length) {
            for (Zb = 0; Zb < dc; Zb++)
                delete Vb[Wb[Zb]];
            Wb.splice(0, dc);
        }
        return Xb;
    }

    function _Rb(Sb, Tb, Ub) {
        const Vb = Sb.currentDevicePixelRatio,
            Wb = 0 !== Ub ? Math.max(Ub / 2, 0.5) : 0;
        return Math.round((Tb - Wb) * Vb) / Vb + Wb;
    }

    function _Sb(Tb, Ub) {
        (Ub = Ub || Tb.getContext('2d')).save(), Ub.resetTransform(), Ub.clearRect(0, 0, Tb.width, Tb.height), Ub.restore();
    }

    function _Tb(Ub, Vb, Wb, Xb) {
        _Ub(Ub, Vb, Wb, Xb, null);
    }

    function _Ub(Vb, Wb, Xb, Yb, Zb) {
        let $b, ac, bc, cc, dc, ec, fc, gc;
        const hc = Wb.pointStyle,
            ic = Wb.rotation,
            jc = Wb.radius;
        let kc = (ic || 0) * K;
        if (hc && 'object' == typeof hc && ($b = hc.toString(), '[object HTMLImageElement]' === $b || '[object HTMLCanvasElement]' === $b))
            return Vb.save(), Vb.translate(Xb, Yb), Vb.rotate(kc), Vb.drawImage(hc, -hc.width / 2, -hc.height / 2, hc.width, hc.height), void Vb.restore();
        if (!(isNaN(jc) || jc <= 0)) {
            switch (Vb.beginPath(), hc) {
                default:
                    Zb ? Vb.ellipse(Xb, Yb, Zb / 2, jc, 0, 0, _H) : Vb.arc(Xb, Yb, jc, 0, _H), Vb.closePath();
                    break;
                case 'triangle':
                    ec = Zb ? Zb / 2 : jc, Vb.moveTo(Xb + Math.sin(kc) * ec, Yb - Math.cos(kc) * jc), kc += N, Vb.lineTo(Xb + Math.sin(kc) * ec, Yb - Math.cos(kc) * jc), kc += N, Vb.lineTo(Xb + Math.sin(kc) * ec, Yb - Math.cos(kc) * jc), Vb.closePath();
                    break;
                case 'rectRounded':
                    dc = 0.516 * jc, cc = jc - dc, ac = Math.cos(kc + M) * cc, fc = Math.cos(kc + M) * (Zb ? Zb / 2 - dc : cc), bc = Math.sin(kc + M) * cc, gc = Math.sin(kc + M) * (Zb ? Zb / 2 - dc : cc), Vb.arc(Xb - fc, Yb - bc, dc, kc - _G, kc - _L), Vb.arc(Xb + gc, Yb - ac, dc, kc - _L, kc), Vb.arc(Xb + fc, Yb + bc, dc, kc, kc + _L), Vb.arc(Xb - gc, Yb + ac, dc, kc + _L, kc + _G), Vb.closePath();
                    break;
                case 'rect':
                    if (!ic) {
                        cc = Math.SQRT1_2 * jc, ec = Zb ? Zb / 2 : cc, Vb.rect(Xb - ec, Yb - cc, 2 * ec, 2 * cc);
                        break;
                    }
                    kc += M;
                case 'rectRot':
                    fc = Math.cos(kc) * (Zb ? Zb / 2 : jc), ac = Math.cos(kc) * jc, bc = Math.sin(kc) * jc, gc = Math.sin(kc) * (Zb ? Zb / 2 : jc), Vb.moveTo(Xb - fc, Yb - bc), Vb.lineTo(Xb + gc, Yb - ac), Vb.lineTo(Xb + fc, Yb + bc), Vb.lineTo(Xb - gc, Yb + ac), Vb.closePath();
                    break;
                case 'crossRot':
                    kc += M;
                case 'cross':
                    fc = Math.cos(kc) * (Zb ? Zb / 2 : jc), ac = Math.cos(kc) * jc, bc = Math.sin(kc) * jc, gc = Math.sin(kc) * (Zb ? Zb / 2 : jc), Vb.moveTo(Xb - fc, Yb - bc), Vb.lineTo(Xb + fc, Yb + bc), Vb.moveTo(Xb + gc, Yb - ac), Vb.lineTo(Xb - gc, Yb + ac);
                    break;
                case 'star':
                    fc = Math.cos(kc) * (Zb ? Zb / 2 : jc), ac = Math.cos(kc) * jc, bc = Math.sin(kc) * jc, gc = Math.sin(kc) * (Zb ? Zb / 2 : jc), Vb.moveTo(Xb - fc, Yb - bc), Vb.lineTo(Xb + fc, Yb + bc), Vb.moveTo(Xb + gc, Yb - ac), Vb.lineTo(Xb - gc, Yb + ac), kc += M, fc = Math.cos(kc) * (Zb ? Zb / 2 : jc), ac = Math.cos(kc) * jc, bc = Math.sin(kc) * jc, gc = Math.sin(kc) * (Zb ? Zb / 2 : jc), Vb.moveTo(Xb - fc, Yb - bc), Vb.lineTo(Xb + fc, Yb + bc), Vb.moveTo(Xb + gc, Yb - ac), Vb.lineTo(Xb - gc, Yb + ac);
                    break;
                case 'line':
                    ac = Zb ? Zb / 2 : Math.cos(kc) * jc, bc = Math.sin(kc) * jc, Vb.moveTo(Xb - ac, Yb - bc), Vb.lineTo(Xb + ac, Yb + bc);
                    break;
                case 'dash':
                    Vb.moveTo(Xb, Yb), Vb.lineTo(Xb + Math.cos(kc) * (Zb ? Zb / 2 : jc), Yb + Math.sin(kc) * jc);
                    break;
                case !1:
                    Vb.closePath();
            }
            Vb.fill(), Wb.borderWidth > 0 && Vb.stroke();
        }
    }

    function _Vb(Wb, Xb, Yb) {
        return Yb = Yb || 0.5, !Xb || Wb && Wb.x > Xb.left - Yb && Wb.x < Xb.right + Yb && Wb.y > Xb.top - Yb && Wb.y < Xb.bottom + Yb;
    }

    function _Wb(Xb, Yb) {
        Xb.save(), Xb.beginPath(), Xb.rect(Yb.left, Yb.top, Yb.right - Yb.left, Yb.bottom - Yb.top), Xb.clip();
    }

    function _Xb(Yb) {
        Yb.restore();
    }

    function _Yb(Zb, $b, ac, bc, cc) {
        if (!$b)
            return Zb.lineTo(ac.x, ac.y);
        if ('middle' === cc) {
            const dc = ($b.x + ac.x) / 2;
            Zb.lineTo(dc, $b.y), Zb.lineTo(dc, ac.y);
        } else
            'after' === cc != !!bc ? Zb.lineTo($b.x, ac.y) : Zb.lineTo(ac.x, $b.y);
        Zb.lineTo(ac.x, ac.y);
    }

    function _Zb($b, ac, bc, cc) {
        if (!ac)
            return $b.lineTo(bc.x, bc.y);
        $b.bezierCurveTo(cc ? ac.cp1x : ac.cp2x, cc ? ac.cp1y : ac.cp2y, cc ? bc.cp2x : bc.cp1x, cc ? bc.cp2y : bc.cp1y, bc.x, bc.y);
    }

    function _$b(ac, bc, cc, dc, ec, fc = {}) {
        const gc = _j(bc) ? bc : [bc],
            hc = fc.strokeWidth > 0 && '' !== fc.strokeColor;
        let ic, jc;
        for (ac.save(), ac.font = ec.string, function(kc, lc) {
                lc.translation && kc.translate(lc.translation[0], lc.translation[1]);
                _i(lc.rotation) || kc.rotate(lc.rotation);
                lc.color && (kc.fillStyle = lc.color);
                lc.textAlign && (kc.textAlign = lc.textAlign);
                lc.textBaseline && (kc.textBaseline = lc.textBaseline);
            }(ac, fc), ic = 0; ic < gc.length; ++ic)
            jc = gc[ic], fc.backdrop && _bc(ac, fc.backdrop), hc && (fc.strokeColor && (ac.strokeStyle = fc.strokeColor), _i(fc.strokeWidth) || (ac.lineWidth = fc.strokeWidth), ac.strokeText(jc, cc, dc, fc.maxWidth)), ac.fillText(jc, cc, dc, fc.maxWidth), _ac(ac, cc, dc, jc, fc), dc += ec.lineHeight;
        ac.restore();
    }

    function _ac(bc, cc, dc, ec, fc) {
        if (fc.strikethrough || fc.underline) {
            const gc = bc.measureText(ec),
                hc = cc - gc.actualBoundingBoxLeft,
                ic = cc + gc.actualBoundingBoxRight,
                jc = dc - gc.actualBoundingBoxAscent,
                kc = dc + gc.actualBoundingBoxDescent,
                lc = fc.strikethrough ? (jc + kc) / 2 : kc;
            bc.strokeStyle = bc.fillStyle, bc.beginPath(), bc.lineWidth = fc.decorationWidth || 2, bc.moveTo(hc, lc), bc.lineTo(ic, lc), bc.stroke();
        }
    }

    function _bc(cc, dc) {
        const ec = cc.fillStyle;
        cc.fillStyle = dc.color, cc.fillRect(dc.left, dc.top, dc.width, dc.height), cc.fillStyle = ec;
    }

    function _cc(dc, ec) {
        const {
            x: fc,
            y: gc,
            w: hc,
            h: ic,
            radius: jc
        } = ec;
        dc.arc(fc + jc.topLeft, gc + jc.topLeft, jc.topLeft, -_L, _G, !0), dc.lineTo(fc, gc + ic - jc.bottomLeft), dc.arc(fc + jc.bottomLeft, gc + ic - jc.bottomLeft, jc.bottomLeft, _G, _L, !0), dc.lineTo(fc + hc - jc.bottomRight, gc + ic), dc.arc(fc + hc - jc.bottomRight, gc + ic - jc.bottomRight, jc.bottomRight, _L, 0, !0), dc.lineTo(fc + hc, gc + jc.topRight), dc.arc(fc + hc - jc.topRight, gc + jc.topRight, jc.topRight, 0, -_L, !0), dc.lineTo(fc + jc.topLeft, gc);
    }
    const dc = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
        ec = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;

    function fc(gc, hc) {
        const ic = ('' + gc).match(dc);
        if (!ic || 'normal' === ic[1])
            return 1.2 * hc;
        switch (gc = +ic[2], ic[3]) {
            case 'px':
                return gc;
            case '%':
                gc /= 100;
        }
        return hc * gc;
    }

    function _gc(hc, ic) {
        const jc = {},
            kc = _k(ic),
            lc = kc ? Object.keys(ic) : ic,
            mc = _k(hc) ? kc ? jc => _n(hc[jc], hc[ic[jc]]) : ic => hc[ic] : () => hc;
        for (const nc of lc)
            jc[nc] = +mc(nc) || 0;
        return jc;
    }

    function _hc(ic) {
        return _gc(ic, {
            top: 'y',
            right: 'x',
            bottom: 'y',
            left: 'x'
        });
    }

    function _ic(jc) {
        return _gc(jc, [
            'topLeft',
            'topRight',
            'bottomLeft',
            'bottomRight'
        ]);
    }

    function _jc(kc) {
        const lc = _hc(kc);
        return lc.width = lc.left + lc.right, lc.height = lc.top + lc.bottom, lc;
    }

    function _kc(lc, mc) {
        lc = lc || {}, mc = mc || _Ob.font;
        let nc = _n(lc.size, mc.size);
        'string' == typeof nc && (nc = parseInt(nc, 10));
        let oc = _n(lc.style, mc.style);
        oc && !('' + oc).match(ec) && (console.warn('Invalid font style specified: "' + oc + '"'), oc = void 0);
        const pc = {
            family: _n(lc.family, mc.family),
            lineHeight: fc(_n(lc.lineHeight, mc.lineHeight), nc),
            size: nc,
            style: oc,
            weight: _n(lc.weight, mc.weight),
            string: ''
        };
        return pc.string = function(qc) {
            return !qc || _i(qc.size) || _i(qc.family) ? null : (qc.style ? qc.style + ' ' : '') + (qc.weight ? qc.weight + ' ' : '') + qc.size + 'px ' + qc.family;
        }(pc), pc;
    }

    function _lc(mc, nc, oc, pc) {
        let qc, rc, sc, tc = !0;
        for (qc = 0, rc = mc.length; qc < rc; ++qc)
            if (sc = mc[qc], void 0 !== sc && (void 0 !== nc && 'function' == typeof sc && (sc = sc(nc), tc = !1), void 0 !== oc && _j(sc) && (sc = sc[oc % sc.length], tc = !1), void 0 !== sc))
                return pc && !tc && (pc.cacheable = !1), sc;
    }

    function _mc(nc, oc, pc) {
        const {
            min: qc,
            max: rc
        } = nc, sc = _p(oc, (rc - qc) / 2), tc = (nc, oc) => pc && 0 === nc ? 0 : nc + oc;
        return {
            min: tc(qc, -Math.abs(sc)),
            max: tc(rc, sc)
        };
    }

    function _nc(oc, pc) {
        return Object.assign(Object.create(oc), pc);
    }

    function _oc(pc, qc = [''], rc = sc, tc, uc = () => sc[0]) {
        _C(tc) || (tc = _zc('_fallback', sc));
        const vc = {
            [Symbol.toStringTag]: 'Object',
            _cacheable: !0,
            _scopes: sc,
            _rootScopes: rc,
            _fallback: tc,
            _getTarget: uc,
            override: uc => _oc([
                uc,
                ...sc
            ], qc, rc, tc)
        };
        return new Proxy(vc, {
            deleteProperty: (qc, rc) => (delete qc[rc], delete qc._keys, delete sc[0][rc], !0),
            get: (rc, tc) => _tc(rc, tc, () => function(wc, xc, yc, zc) {
                let Ac;
                for (const Bc of xc)
                    if (Ac = _zc(_rc(Bc, wc), yc), _C(Ac))
                        return _sc(wc, Ac) ? _xc(yc, zc, wc, Ac) : Ac;
            }(tc, qc, sc, rc)),
            getOwnPropertyDescriptor: (sc, qc) => Reflect.getOwnPropertyDescriptor(sc._scopes[0], qc),
            getPrototypeOf: () => Reflect.getPrototypeOf(sc[0]),
            has: (sc, qc) => _Ac(sc).includes(qc),
            ownKeys: sc => _Ac(sc),
            set(wc, xc, yc) {
                const zc = wc._storage || (wc._storage = uc());
                return wc[xc] = zc[xc] = yc, delete wc._keys, !0;
            }
        });
    }

    function _pc(qc, rc, sc, tc) {
        const uc = {
            _cacheable: !1,
            _proxy: qc,
            _context: rc,
            _subProxy: sc,
            _stack: new Set(),
            _descriptors: _qc(qc, tc),
            setContext: rc => _pc(qc, rc, sc, tc),
            override: uc => _pc(qc.override(uc), rc, sc, tc)
        };
        return new Proxy(uc, {
            deleteProperty: (rc, sc) => (delete rc[sc], delete qc[sc], !0),
            get: (qc, rc, sc) => _tc(qc, rc, () => function(vc, wc, xc) {
                const {
                    _proxy: yc,
                    _context: zc,
                    _subProxy: Ac,
                    _descriptors: Bc
                } = vc;
                let Cc = yc[wc];
                _D(Cc) && Bc.isScriptable(wc) && (Cc = function(Dc, Ec, Fc, Gc) {
                    const {
                        _proxy: Hc,
                        _context: Ic,
                        _subProxy: Jc,
                        _stack: Kc
                    } = Fc;
                    if (Kc.has(Dc))
                        throw new Error('Recursion detected: ' + Array.from(Kc).join('->') + '->' + Dc);
                    Kc.add(Dc), Ec = Ec(Ic, Jc || Gc), Kc.delete(Dc), _sc(Dc, Ec) && (Ec = _xc(Hc._scopes, Hc, Dc, Ec));
                    return Ec;
                }(wc, Cc, vc, xc));
                _j(Cc) && Cc.length && (Cc = function(Dc, Ec, Fc, Gc) {
                    const {
                        _proxy: Hc,
                        _context: Ic,
                        _subProxy: Jc,
                        _descriptors: Kc
                    } = Fc;
                    if (_C(Ic.index) && Gc(Dc))
                        Ec = Ec[Ic.index % Ec.length];
                    else if (_k(Ec[0])) {
                        const Lc = Ec,
                            Mc = Hc._scopes.filter(Dc => Dc !== Lc);
                        Ec = [];
                        for (const Nc of Lc) {
                            const Oc = _xc(Mc, Hc, Dc, Nc);
                            Ec.push(_pc(Oc, Ic, Jc && Jc[Dc], Kc));
                        }
                    }
                    return Ec;
                }(wc, Cc, vc, Bc.isIndexable));
                _sc(wc, Cc) && (Cc = _pc(Cc, zc, Ac && Ac[wc], Bc));
                return Cc;
            }(qc, rc, sc)),
            getOwnPropertyDescriptor: (rc, sc) => rc._descriptors.allKeys ? Reflect.has(qc, sc) ? {
                enumerable: !0,
                configurable: !0
            } : void 0 : Reflect.getOwnPropertyDescriptor(qc, sc),
            getPrototypeOf: () => Reflect.getPrototypeOf(qc),
            has: (rc, sc) => Reflect.has(qc, sc),
            ownKeys: () => Reflect.ownKeys(qc),
            set: (rc, sc, tc) => (qc[sc] = tc, delete rc[sc], !0)
        });
    }

    function _qc(rc, sc = {
        scriptable: !0,
        indexable: !0
    }) {
        const {
            _scriptable: tc = sc.scriptable,
            _indexable: uc = sc.indexable,
            _allKeys: vc = sc.allKeys
        } = rc;
        return {
            allKeys: vc,
            scriptable: tc,
            indexable: uc,
            isScriptable: _D(tc) ? tc : () => tc,
            isIndexable: _D(uc) ? uc : () => uc
        };
    }
    const _rc = (a, d) => a ? a + _B(d) : d,
        _sc = (a, d) => _k(d) && 'adapters' !== a && (null === Object.getPrototypeOf(d) || d.constructor === Object);

    function _tc(uc, vc, wc) {
        if (Object.prototype.hasOwnProperty.call(uc, vc))
            return uc[vc];
        const xc = wc();
        return uc[vc] = xc, xc;
    }

    function uc(vc, wc, xc) {
        return _D(vc) ? vc(wc, xc) : vc;
    }
    const vc = (a, d) => !0 === a ? d : 'string' == typeof a ? _A(d, a) : void 0;

    function wc(xc, yc, zc, Ac, Bc) {
        for (const Cc of yc) {
            const Dc = vc(zc, Cc);
            if (Dc) {
                xc.add(Dc);
                const Ec = uc(Dc._fallback, zc, Bc);
                if (_C(Ec) && Ec !== zc && Ec !== Ac)
                    return Ec;
            } else if (!1 === Dc && _C(Ac) && zc !== Ac)
                return null;
        }
        return !1;
    }

    function _xc(yc, zc, Ac, Bc) {
        const Cc = zc._rootScopes,
            Dc = uc(zc._fallback, Ac, Bc),
            Ec = [
                ...yc,
                ...Cc
            ],
            Fc = new Set();
        Fc.add(Bc);
        let Gc = _yc(Fc, Ec, Ac, Dc || Ac, Bc);
        return null !== Gc && ((!_C(Dc) || Dc === Ac || (Gc = _yc(Fc, Ec, Dc, Gc, Bc), null !== Gc)) && _oc(Array.from(Fc), [''], Cc, Dc, () => function(Hc, Ic, Jc) {
            const Kc = Hc._getTarget();
            Ic in Kc || (Kc[Ic] = {});
            const Lc = Kc[Ic];
            return _j(Lc) && _k(Jc) ? Jc : Lc || {};
        }(zc, Ac, Bc)));
    }

    function _yc(zc, Ac, Bc, Cc, Dc) {
        for (; Bc;)
            Bc = wc(zc, Ac, Bc, Cc, Dc);
        return Bc;
    }

    function _zc(Ac, Bc) {
        for (const Cc of Bc) {
            if (!Cc)
                continue;
            const Dc = Cc[Ac];
            if (_C(Dc))
                return Dc;
        }
    }

    function _Ac(Bc) {
        let Cc = Bc._keys;
        return Cc || (Cc = Bc._keys = function(Dc) {
            const Ec = new Set();
            for (const Fc of Dc)
                for (const Gc of Object.keys(Fc).filter(Gc => !Gc.startsWith('_')))
                    Ec.add(Gc);
            return Array.from(Ec);
        }(Bc._scopes)), Cc;
    }

    function _Bc(Cc, Dc, Ec, Fc) {
        const {
            iScale: Gc
        } = Cc, {
            key: Hc = 'r'
        } = this._parsing, Ic = new Array(Fc);
        let Jc, Kc, Lc, Mc;
        for (Jc = 0, Kc = Fc; Jc < Kc; ++Jc)
            Lc = Jc + Ec, Mc = Dc[Lc], Ic[Jc] = {
                r: Gc.parse(_A(Mc, Hc), Lc)
            };
        return Ic;
    }
    const Cc = Number.EPSILON || 1e-14,
        Dc = (a, d) => d < a.length && !a[d].skip && a[d],
        Ec = a => 'x' === a ? 'y' : 'x';

    function Fc(Gc, Hc, Ic, Jc) {
        const Kc = Gc.skip ? Hc : Gc,
            Lc = Hc,
            Mc = Ic.skip ? Hc : Ic,
            Nc = _$(Lc, Kc),
            Oc = _$(Mc, Lc);
        let Pc = Nc / (Nc + Oc),
            Qc = Oc / (Nc + Oc);
        Pc = isNaN(Pc) ? 0 : Pc, Qc = isNaN(Qc) ? 0 : Qc;
        const Rc = Jc * Pc,
            Sc = Jc * Qc;
        return {
            previous: {
                x: Lc.x - Rc * (Mc.x - Kc.x),
                y: Lc.y - Rc * (Mc.y - Kc.y)
            },
            next: {
                x: Lc.x + Sc * (Mc.x - Kc.x),
                y: Lc.y + Sc * (Mc.y - Kc.y)
            }
        };
    }

    function Gc(Hc, Ic = 'x') {
        const Jc = Ec(Ic),
            Kc = Hc.length,
            Lc = Array(Kc).fill(0),
            Mc = Array(Kc);
        let Nc, Oc, Pc, Qc = Dc(Hc, 0);
        for (Nc = 0; Nc < Kc; ++Nc)
            if (Oc = Pc, Pc = Qc, Qc = Dc(Hc, Nc + 1), Pc) {
                if (Qc) {
                    const Rc = Qc[Ic] - Pc[Ic];
                    Lc[Nc] = 0 !== Rc ? (Qc[Jc] - Pc[Jc]) / Rc : 0;
                }
                Mc[Nc] = Oc ? Qc ? _P(Lc[Nc - 1]) !== _P(Lc[Nc]) ? 0 : (Lc[Nc - 1] + Lc[Nc]) / 2 : Lc[Nc - 1] : Lc[Nc];
            }!
        function(Rc, Sc, Tc) {
            const Uc = Rc.length;
            let Vc, Wc, Xc, Yc, Zc, $c = Dc(Rc, 0);
            for (let ad = 0; ad < Uc - 1; ++ad)
                Zc = $c, $c = Dc(Rc, ad + 1), Zc && $c && (_Q(Sc[ad], 0, Cc) ? Tc[ad] = Tc[ad + 1] = 0 : (Vc = Tc[ad] / Sc[ad], Wc = Tc[ad + 1] / Sc[ad], Yc = Math.pow(Vc, 2) + Math.pow(Wc, 2), Yc <= 9 || (Xc = 3 / Math.sqrt(Yc), Tc[ad] = Vc * Xc * Sc[ad], Tc[ad + 1] = Wc * Xc * Sc[ad])));
        }(Hc, Lc, Mc),
        function(Rc, Sc, Tc = 'x') {
            const Uc = Ec(Tc),
                Vc = Rc.length;
            let Wc, Xc, Yc, Zc = Dc(Rc, 0);
            for (let $c = 0; $c < Vc; ++$c) {
                if (Xc = Yc, Yc = Zc, Zc = Dc(Rc, $c + 1), !Yc)
                    continue;
                const ad = Yc[Tc],
                    bd = Yc[Uc];
                Xc && (Wc = (ad - Xc[Tc]) / 3, Yc[`cp1${ Tc }`] = ad - Wc, Yc[`cp1${ Uc }`] = bd - Wc * Sc[$c]), Zc && (Wc = (Zc[Tc] - ad) / 3, Yc[`cp2${ Tc }`] = ad + Wc, Yc[`cp2${ Uc }`] = bd + Wc * Sc[$c]);
            }
        }(Hc, Mc, Ic);
    }

    function Hc(Ic, Jc, Kc) {
        return Math.max(Math.min(Ic, Kc), Jc);
    }

    function _Ic(Jc, Kc, Lc, Mc, Nc) {
        let Oc, Pc, Qc, Rc;
        if (Kc.spanGaps && (Jc = Jc.filter(Jc => !Jc.skip)), 'monotone' === Kc.cubicInterpolationMode)
            Gc(Jc, Nc);
        else {
            let Sc = Mc ? Jc[Jc.length - 1] : Jc[0];
            for (Oc = 0, Pc = Jc.length; Oc < Pc; ++Oc)
                Qc = Jc[Oc], Rc = Fc(Sc, Qc, Jc[Math.min(Oc + 1, Pc - (Mc ? 0 : 1)) % Pc], Kc.tension), Qc.cp1x = Rc.previous.x, Qc.cp1y = Rc.previous.y, Qc.cp2x = Rc.next.x, Qc.cp2y = Rc.next.y, Sc = Qc;
        }
        Kc.capBezierPoints && function(Sc, Tc) {
            let Uc, Vc, Wc, Xc, Yc, Zc = _Vb(Sc[0], Tc);
            for (Uc = 0, Vc = Sc.length; Uc < Vc; ++Uc)
                Yc = Xc, Xc = Zc, Zc = Uc < Vc - 1 && _Vb(Sc[Uc + 1], Tc), Xc && (Wc = Sc[Uc], Yc && (Wc.cp1x = Hc(Wc.cp1x, Tc.left, Tc.right), Wc.cp1y = Hc(Wc.cp1y, Tc.top, Tc.bottom)), Zc && (Wc.cp2x = Hc(Wc.cp2x, Tc.left, Tc.right), Wc.cp2y = Hc(Wc.cp2y, Tc.top, Tc.bottom)));
        }(Jc, Lc);
    }

    function _Jc() {
        return 'undefined' != typeof window && 'undefined' != typeof document;
    }

    function _Kc(Lc) {
        let Mc = Lc.parentNode;
        return Mc && '[object ShadowRoot]' === Mc.toString() && (Mc = Mc.host), Mc;
    }

    function Lc(Mc, Nc, Oc) {
        let Pc;
        return 'string' == typeof Mc ? (Pc = parseInt(Mc, 10), -1 !== Mc.indexOf('%') && (Pc = Pc / 100 * Nc.parentNode[Oc])) : Pc = Mc, Pc;
    }
    const Mc = a => a.ownerDocument.defaultView.getComputedStyle(a, null);
    const Nc = [
        'top',
        'right',
        'bottom',
        'left'
    ];

    function Oc(Pc, Qc, Rc) {
        const Sc = {};
        Rc = Rc ? '-' + Rc : '';
        for (let Tc = 0; Tc < 4; Tc++) {
            const Uc = Nc[Tc];
            Sc[Uc] = parseFloat(Pc[Qc + '-' + Uc + Rc]) || 0;
        }
        return Sc.width = Sc.left + Sc.right, Sc.height = Sc.top + Sc.bottom, Sc;
    }

    function _Pc(Qc, Rc) {
        if ('native' in Qc)
            return Qc;
        const {
            canvas: Sc,
            currentDevicePixelRatio: Tc
        } = Rc, Uc = Mc(Sc), Vc = 'border-box' === Uc.boxSizing, Wc = Oc(Uc, 'padding'), Xc = Oc(Uc, 'border', 'width'), {
            x: Yc,
            y: Zc,
            box: $c
        } = function(ad, bd) {
            const cd = ad.touches,
                dd = cd && cd.length ? cd[0] : ad,
                {
                    offsetX: ed,
                    offsetY: fd
                } = dd;
            let gd, hd, id = !1;
            if (((ad, bd, cd) => (ad > 0 || bd > 0) && (!cd || !cd.shadowRoot))(ed, fd, ad.target))
                gd = ed, hd = fd;
            else {
                const jd = bd.getBoundingClientRect();
                gd = dd.clientX - jd.left, hd = dd.clientY - jd.top, id = !0;
            }
            return {
                x: gd,
                y: hd,
                box: id
            };
        }(Qc, Sc), ad = Wc.left + ($c && Xc.left), bd = Wc.top + ($c && Xc.top);
        let {
            width: cd,
            height: dd
        } = Rc;
        return Vc && (cd -= Wc.width + Xc.width, dd -= Wc.height + Xc.height), {
            x: Math.round((Yc - ad) / cd * Sc.width / Tc),
            y: Math.round((Zc - bd) / dd * Sc.height / Tc)
        };
    }
    const Qc = a => Math.round(10 * a) / 10;

    function _Rc(Sc, Tc, Uc, Vc) {
        const Wc = Mc(Sc),
            Xc = Oc(Wc, 'margin'),
            Yc = Lc(Wc.maxWidth, Sc, 'clientWidth') || J,
            Zc = Lc(Wc.maxHeight, Sc, 'clientHeight') || J,
            $c = function(ad, bd, cd) {
                let dd, ed;
                if (void 0 === bd || void 0 === cd) {
                    const fd = _Kc(ad);
                    if (fd) {
                        const gd = fd.getBoundingClientRect(),
                            hd = Mc(fd),
                            id = Oc(hd, 'border', 'width'),
                            jd = Oc(hd, 'padding');
                        bd = gd.width - jd.width - id.width, cd = gd.height - jd.height - id.height, dd = Lc(hd.maxWidth, fd, 'clientWidth'), ed = Lc(hd.maxHeight, fd, 'clientHeight');
                    } else
                        bd = ad.clientWidth, cd = ad.clientHeight;
                }
                return {
                    width: bd,
                    height: cd,
                    maxWidth: dd || J,
                    maxHeight: ed || J
                };
            }(Sc, Tc, Uc);
        let {
            width: ad,
            height: bd
        } = $c;
        if ('content-box' === Wc.boxSizing) {
            const cd = Oc(Wc, 'border', 'width'),
                dd = Oc(Wc, 'padding');
            ad -= dd.width + cd.width, bd -= dd.height + cd.height;
        }
        ad = Math.max(0, ad - Xc.width), bd = Math.max(0, Vc ? ad / Vc : bd - Xc.height), ad = Qc(Math.min(ad, Yc, $c.maxWidth)), bd = Qc(Math.min(bd, Zc, $c.maxHeight)), ad && !bd && (bd = Qc(ad / 2));
        return (void 0 !== Tc || void 0 !== Uc) && Vc && $c.height && bd > $c.height && (bd = $c.height, ad = Qc(Math.floor(bd * Vc))), {
            width: ad,
            height: bd
        };
    }

    function _Sc(Tc, Uc, Vc) {
        const Wc = Uc || 1,
            Xc = Math.floor(Tc.height * Wc),
            Yc = Math.floor(Tc.width * Wc);
        Tc.height = Math.floor(Tc.height), Tc.width = Math.floor(Tc.width);
        const Zc = Tc.canvas;
        return Zc.style && (Vc || !Zc.style.height && !Zc.style.width) && (Zc.style.height = `${ Tc.height }px`, Zc.style.width = `${ Tc.width }px`), (Tc.currentDevicePixelRatio !== Wc || Zc.height !== Xc || Zc.width !== Yc) && (Tc.currentDevicePixelRatio = Wc, Zc.height = Xc, Zc.width = Yc, Tc.ctx.setTransform(Wc, 0, 0, Wc, 0, 0), !0);
    }
    const _Tc = function() {
        let Uc = !1;
        try {
            const Vc = {
                get passive() {
                    return Uc = !0, !1;
                }
            };
            window.addEventListener('test', null, Vc), window.removeEventListener('test', null, Vc);
        } catch (Uc) {}
        return Uc;
    }();

    function _Uc(Vc, Wc) {
        const Xc = function(Yc, Zc) {
                return Mc(Yc).getPropertyValue(Zc);
            }(Vc, Wc),
            Yc = Xc && Xc.match(/^(\d+)(\.\d+)?px$/);
        return Yc ? +Yc[1] : void 0;
    }

    function _Vc(Wc, Xc, Yc, Zc) {
        return {
            x: Wc.x + Yc * (Xc.x - Wc.x),
            y: Wc.y + Yc * (Xc.y - Wc.y)
        };
    }

    function _Wc(Xc, Yc, Zc, $c) {
        return {
            x: Xc.x + Zc * (Yc.x - Xc.x),
            y: 'middle' === $c ? Zc < 0.5 ? Xc.y : Yc.y : 'after' === $c ? Zc < 1 ? Xc.y : Yc.y : Zc > 0 ? Yc.y : Xc.y
        };
    }

    function _Xc(Yc, Zc, $c, ad) {
        const bd = {
                x: Yc.cp2x,
                y: Yc.cp2y
            },
            cd = {
                x: Zc.cp1x,
                y: Zc.cp1y
            },
            dd = _Vc(Yc, bd, $c),
            ed = _Vc(bd, cd, $c),
            fd = _Vc(cd, Zc, $c),
            gd = _Vc(dd, ed, $c),
            hd = _Vc(ed, fd, $c);
        return _Vc(gd, hd, $c);
    }

    function _Yc(Zc, $c, ad) {
        return Zc ? function(bd, cd) {
            return {
                x: ad => bd + bd + cd - ad,
                setWidth(dd) {
                    cd = dd;
                },
                textAlign: bd => 'center' === bd ? bd : 'right' === bd ? 'left' : 'right',
                xPlus: (bd, cd) => bd - cd,
                leftForLtr: (bd, cd) => bd - cd
            };
        }($c, ad) : {
            x: Zc => Zc,
            setWidth(bd) {},
            textAlign: Zc => Zc,
            xPlus: (Zc, $c) => Zc + $c,
            leftForLtr: (Zc, $c) => Zc
        };
    }

    function _Zc($c, ad) {
        let bd, cd;
        'ltr' !== ad && 'rtl' !== ad || (bd = $c.canvas.style, cd = [
            bd.getPropertyValue('direction'),
            bd.getPropertyPriority('direction')
        ], bd.setProperty('direction', ad, 'important'), $c.prevTextDirection = cd);
    }

    function _$c(ad, bd) {
        void 0 !== bd && (delete ad.prevTextDirection, ad.canvas.style.setProperty('direction', bd[0], bd[1]));
    }

    function ad(bd) {
        return 'angle' === bd ? {
            between: _cb,
            compare: ab,
            normalize: _bb
        } : {
            between: _fb,
            compare: (bd, d) => bd - d,
            normalize: bd => bd
        };
    }

    function bd({
        start: cd,
        end: dd,
        count: ed,
        loop: fd,
        style: gd
    }) {
        return {
            start: cd % ed,
            end: dd % ed,
            loop: fd && (dd - cd + 1) % ed == 0,
            style: gd
        };
    }

    function _cd(dd, ed, fd) {
        if (!fd)
            return [dd];
        const {
            property: gd,
            start: hd,
            end: id
        } = fd, jd = ed.length, {
            compare: kd,
            between: ld,
            normalize: md
        } = ad(gd), {
            start: nd,
            end: od,
            loop: pd,
            style: qd
        } = function(rd, sd, td) {
            const {
                property: ud,
                start: vd,
                end: wd
            } = td, {
                between: xd,
                normalize: yd
            } = ad(ud), zd = sd.length;
            let Ad, Bd, {
                start: Cd,
                end: Dd,
                loop: Ed
            } = rd;
            if (Ed) {
                for (Cd += zd, Dd += zd, Ad = 0, Bd = zd; Ad < Bd && xd(yd(sd[Cd % zd][ud]), vd, wd); ++Ad)
                    Cd--, Dd--;
                Cd %= zd, Dd %= zd;
            }
            return Dd < Cd && (Dd += zd), {
                start: Cd,
                end: Dd,
                loop: Ed,
                style: rd.style
            };
        }(dd, ed, fd), rd = [];
        let sd, td, ud, vd = !1,
            wd = null;
        const xd = () => vd || ld(hd, ud, sd) && 0 !== kd(hd, ud),
            yd = () => !vd || 0 === kd(id, sd) || ld(id, ud, sd);
        for (let zd = nd, Ad = nd; zd <= od; ++zd)
            td = ed[zd % jd], td.skip || (sd = md(td[gd]), sd !== ud && (vd = ld(sd, hd, id), null === wd && xd() && (wd = 0 === kd(sd, hd) ? zd : Ad), null !== wd && yd() && (rd.push(bd({
                start: wd,
                end: zd,
                loop: pd,
                count: jd,
                style: qd
            })), wd = null), Ad = zd, ud = sd));
        return null !== wd && rd.push(bd({
            start: wd,
            end: od,
            loop: pd,
            count: jd,
            style: qd
        })), rd;
    }

    function _dd(ed, fd) {
        const gd = [],
            hd = ed.segments;
        for (let id = 0; id < hd.length; id++) {
            const jd = _cd(hd[id], ed.points, fd);
            jd.length && gd.push(...jd);
        }
        return gd;
    }

    function _ed(fd, gd) {
        const hd = fd.points,
            id = fd.options.spanGaps,
            jd = hd.length;
        if (!jd)
            return [];
        const kd = !!fd._loop,
            {
                start: ld,
                end: md
            } = function(nd, od, pd, qd) {
                let rd = 0,
                    sd = od - 1;
                if (pd && !qd)
                    for (; rd < od && !nd[rd].skip;)
                        rd++;
                for (; rd < od && nd[rd].skip;)
                    rd++;
                for (rd %= od, pd && (sd += rd); sd > rd && nd[sd % od].skip;)
                    sd--;
                return sd %= od, {
                    start: rd,
                    end: sd
                };
            }(hd, jd, kd, id);
        if (!0 === id)
            return _fd(fd, [{
                start: ld,
                end: md,
                loop: kd
            }], hd, gd);
        return _fd(fd, function(nd, od, pd, qd) {
            const rd = nd.length,
                sd = [];
            let td, ud = od,
                vd = nd[od];
            for (td = od + 1; td <= pd; ++td) {
                const wd = nd[td % rd];
                wd.skip || wd.stop ? vd.skip || (qd = !1, sd.push({
                    start: od % rd,
                    end: (td - 1) % rd,
                    loop: qd
                }), od = ud = wd.stop ? td : null) : (ud = td, vd.skip && (od = td)), vd = wd;
            }
            return null !== ud && sd.push({
                start: od % rd,
                end: ud % rd,
                loop: qd
            }), sd;
        }(hd, ld, md < ld ? md + jd : md, !!fd._fullLoop && 0 === ld && md === jd - 1), hd, gd);
    }

    function _fd(gd, hd, id, jd) {
        return jd && jd.setContext && id ? function(kd, ld, md, nd) {
            const od = kd._chart.getContext(),
                pd = _gd(kd.options),
                {
                    _datasetIndex: qd,
                    options: {
                        spanGaps: rd
                    }
                } = kd,
                sd = md.length,
                td = [];
            let ud = pd,
                vd = ld[0].start,
                wd = vd;

            function xd(yd, zd, Ad, Bd) {
                const Cd = rd ? -1 : 1;
                if (yd !== zd) {
                    for (yd += sd; md[yd % sd].skip;)
                        yd -= Cd;
                    for (; md[zd % sd].skip;)
                        zd += Cd;
                    yd % sd != zd % sd && (td.push({
                        start: yd % sd,
                        end: zd % sd,
                        loop: Ad,
                        style: Bd
                    }), ud = Bd, vd = zd % sd);
                }
            }
            for (const yd of ld) {
                vd = rd ? vd : yd.start;
                let zd, Ad = md[vd % sd];
                for (wd = vd + 1; wd <= yd.end; wd++) {
                    const Bd = md[wd % sd];
                    zd = _gd(nd.setContext(_nc(od, {
                        type: 'segment',
                        p0: Ad,
                        p1: Bd,
                        p0DataIndex: (wd - 1) % sd,
                        p1DataIndex: wd % sd,
                        datasetIndex: qd
                    }))), _hd(zd, ud) && xd(vd, wd - 1, yd.loop, ud), Ad = Bd, ud = zd;
                }
                vd < wd - 1 && xd(vd, wd - 1, yd.loop, ud);
            }
            return td;
        }(gd, hd, id, jd) : hd;
    }

    function _gd(hd) {
        return {
            backgroundColor: hd.backgroundColor,
            borderCapStyle: hd.borderCapStyle,
            borderDash: hd.borderDash,
            borderDashOffset: hd.borderDashOffset,
            borderJoinStyle: hd.borderJoinStyle,
            borderWidth: hd.borderWidth,
            borderColor: hd.borderColor
        };
    }

    function _hd(id, jd) {
        return jd && JSON.stringify(id) !== JSON.stringify(jd);
    }
}), c.register('l9sZi', function(d, e) {
    function f(g) {
        return g + 0.5 | 0;
    }
    a(d.exports, 'Color', function() {
        return _L;
    });
    const g = (a, d, e) => Math.max(Math.min(a, e), d);

    function h(i) {
        return g(f(2.55 * i), 0, 255);
    }

    function i(j) {
        return g(f(255 * j), 0, 255);
    }

    function j(k) {
        return g(f(k / 2.55) / 100, 0, 1);
    }

    function k(l) {
        return g(f(100 * l), 0, 100);
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
        m = [...'0123456789ABCDEF'],
        n = a => m[15 & a],
        o = a => m[(240 & a) >> 4] + m[15 & a],
        p = a => (240 & a) >> 4 == (15 & a);

    function q(r) {
        var s = (r => p(r.r) && p(r.g) && p(r.b) && p(r.a))(r) ? n : o;
        return r ? '#' + s(r.r) + s(r.g) + s(r.b) + ((r, s) => r < 255 ? s(r) : '')(r.a, s) : void 0;
    }
    const r = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;

    function s(t, u, v) {
        const w = u * Math.min(v, 1 - v),
            x = (u, y = (u + t / 30) % 12) => v - w * Math.max(Math.min(y - 3, 9 - y, 1), -1);
        return [
            y(0),
            y(8),
            y(4)
        ];
    }

    function t(u, v, w) {
        const x = (x, y = (x + u / 60) % 6) => w - w * v * Math.max(Math.min(y, 4 - y, 1), 0);
        return [
            x(5),
            x(3),
            x(1)
        ];
    }

    function u(v, w, x) {
        const y = s(v, 1, 0.5);
        let z;
        for (w + x > 1 && (z = 1 / (w + x), w *= z, x *= z), z = 0; z < 3; z++)
            y[z] *= 1 - w - x, y[z] += w;
        return y;
    }

    function v(w) {
        const x = w.r / 255,
            y = w.g / 255,
            z = w.b / 255,
            A = Math.max(x, y, z),
            B = Math.min(x, y, z),
            C = (A + B) / 2;
        let D, E, F;
        return A !== B && (F = A - B, E = C > 0.5 ? F / (2 - A - B) : F / (A + B), D = function(G, H, I, J, K) {
            return G === K ? (H - I) / J + (H < I ? 6 : 0) : H === K ? (I - G) / J + 2 : (G - H) / J + 4;
        }(x, y, z, F, A), D = 60 * D + 0.5), [
            0 | D,
            E || 0,
            C
        ];
    }

    function w(x, y, z, A) {
        return (Array.isArray(y) ? x(y[0], y[1], y[2]) : x(y, z, A)).map(i);
    }

    function x(y, z, A) {
        return w(s, y, z, A);
    }

    function y(z) {
        return (z % 360 + 360) % 360;
    }

    function z(A) {
        const B = r.exec(A);
        let C, D = 255;
        if (!B)
            return;
        B[5] !== C && (D = B[6] ? h(+B[5]) : i(+B[5]));
        const E = y(+B[2]),
            F = +B[3] / 100,
            G = +B[4] / 100;
        return C = 'hwb' === B[1] ? function(H, I, J) {
            return w(u, H, I, J);
        }(E, F, G) : 'hsv' === B[1] ? function(H, I, J) {
            return w(t, H, I, J);
        }(E, F, G) : x(E, F, G), {
            r: C[0],
            g: C[1],
            b: C[2],
            a: D
        };
    }
    const A = {
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
        B = {
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
    let C;

    function D(E) {
        C || (C = function() {
            const F = {},
                G = Object.keys(B),
                H = Object.keys(A);
            let I, J, K, L, M;
            for (I = 0; I < G.length; I++) {
                for (L = M = G[I], J = 0; J < H.length; J++)
                    K = H[J], M = M.replace(K, A[K]);
                K = parseInt(B[L], 16), F[M] = [
                    K >> 16 & 255,
                    K >> 8 & 255,
                    255 & K
                ];
            }
            return F;
        }(), C.transparent = [
            0,
            0,
            0,
            0
        ]);
        const F = C[E.toLowerCase()];
        return F && {
            r: F[0],
            g: F[1],
            b: F[2],
            a: 4 === F.length ? F[3] : 255
        };
    }
    const E = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
    const F = a => a <= 0.0031308 ? 12.92 * a : 1.055 * Math.pow(a, 1 / 2.4) - 0.055,
        G = a => a <= 0.04045 ? a / 12.92 : Math.pow((a + 0.055) / 1.055, 2.4);

    function H(I, J, K) {
        if (I) {
            let L = v(I);
            L[J] = Math.max(0, Math.min(L[J] + L[J] * K, 0 === J ? 360 : 1)), L = x(L), I.r = L[0], I.g = L[1], I.b = L[2];
        }
    }

    function I(J, K) {
        return J ? Object.assign(K || {}, J) : J;
    }

    function J(K) {
        var L = {
            r: 0,
            g: 0,
            b: 0,
            a: 255
        };
        return Array.isArray(K) ? K.length >= 3 && (L = {
            r: K[0],
            g: K[1],
            b: K[2],
            a: 255
        }, K.length > 3 && (L.a = i(K[3]))) : (L = I(K, {
            r: 0,
            g: 0,
            b: 0,
            a: 1
        })).a = i(L.a), L;
    }

    function K(L) {
        return 'r' === L.charAt(0) ? function(M) {
            const N = E.exec(M);
            let O, P, Q, R = 255;
            if (N) {
                if (N[7] !== O) {
                    const S = +N[7];
                    R = N[8] ? h(S) : g(255 * S, 0, 255);
                }
                return O = +N[1], P = +N[3], Q = +N[5], O = 255 & (N[2] ? h(O) : g(O, 0, 255)), P = 255 & (N[4] ? h(P) : g(P, 0, 255)), Q = 255 & (N[6] ? h(Q) : g(Q, 0, 255)), {
                    r: O,
                    g: P,
                    b: Q,
                    a: R
                };
            }
        }(L) : z(L);
    }
    class _L {
        get valid() {
            return this._valid;
        }
        get rgb() {
            var M = I(this._rgb);
            return M && (M.a = j(M.a)), M;
        }
        set rgb(M) {
            this._rgb = J(M);
        }
        rgbString() {
            return this._valid ? (a = this._rgb) && (a.a < 255 ? `rgba(${ a.r }, ${ a.g }, ${ a.b }, ${ j(a.a) })` : `rgb(${ a.r }, ${ a.g }, ${ a.b })`) : void 0;
            var M;
        }
        hexString() {
            return this._valid ? q(this._rgb) : void 0;
        }
        hslString() {
            return this._valid ? function(M) {
                if (!M)
                    return;
                const N = v(M),
                    O = N[0],
                    P = k(N[1]),
                    Q = k(N[2]);
                return M.a < 255 ? `hsla(${ O }, ${ P }%, ${ Q }%, ${ j(M.a) })` : `hsl(${ O }, ${ P }%, ${ Q }%)`;
            }(this._rgb) : void 0;
        }
        mix(M, N) {
            if (M) {
                const O = this.rgb,
                    P = M.rgb;
                let Q;
                const R = N === Q ? 0.5 : N,
                    S = 2 * R - 1,
                    T = O.a - P.a,
                    U = ((S * T == -1 ? S : (S + T) / (1 + S * T)) + 1) / 2;
                Q = 1 - U, O.r = 255 & U * O.r + Q * P.r + 0.5, O.g = 255 & U * O.g + Q * P.g + 0.5, O.b = 255 & U * O.b + Q * P.b + 0.5, O.a = R * O.a + (1 - R) * P.a, this.rgb = O;
            }
            return this;
        }
        interpolate(M, N) {
            return M && (this._rgb = function(O, P, Q) {
                const R = G(j(O.r)),
                    S = G(j(O.g)),
                    T = G(j(O.b));
                return {
                    r: i(F(R + Q * (G(j(P.r)) - R))),
                    g: i(F(S + Q * (G(j(P.g)) - S))),
                    b: i(F(T + Q * (G(j(P.b)) - T))),
                    a: O.a + Q * (P.a - O.a)
                };
            }(this._rgb, M._rgb, N)), this;
        }
        clone() {
            return new _L(this.rgb);
        }
        alpha(M) {
            return this._rgb.a = i(M), this;
        }
        clearer(M) {
            return this._rgb.a *= 1 - M, this;
        }
        greyscale() {
            const M = this._rgb,
                N = f(0.3 * M.r + 0.59 * M.g + 0.11 * M.b);
            return M.r = M.g = M.b = N, this;
        }
        opaquer(M) {
            return this._rgb.a *= 1 + M, this;
        }
        negate() {
            const M = this._rgb;
            return M.r = 255 - M.r, M.g = 255 - M.g, M.b = 255 - M.b, this;
        }
        lighten(M) {
            return H(this._rgb, 2, M), this;
        }
        darken(M) {
            return H(this._rgb, 2, -M), this;
        }
        saturate(M) {
            return H(this._rgb, 1, M), this;
        }
        desaturate(M) {
            return H(this._rgb, 1, -M), this;
        }
        rotate(M) {
            return function(N, O) {
                var P = v(N);
                P[0] = y(P[0] + O), P = x(P), N.r = P[0], N.g = P[1], N.b = P[2];
            }(this._rgb, M), this;
        }
        constructor(M) {
            if (M instanceof _L)
                return M;
            const N = typeof M;
            let O;
            var P, Q, R;
            'object' === N ? O = J(M) : 'string' === N && (R = (P = M).length, '#' === P[0] && (4 === R || 5 === R ? Q = {
                r: 255 & 17 * l[P[1]],
                g: 255 & 17 * l[P[2]],
                b: 255 & 17 * l[P[3]],
                a: 5 === R ? 17 * l[P[4]] : 255
            } : 7 !== R && 9 !== R || (Q = {
                r: l[P[1]] << 4 | l[P[2]],
                g: l[P[3]] << 4 | l[P[4]],
                b: l[P[5]] << 4 | l[P[6]],
                a: 9 === R ? l[P[7]] << 4 | l[P[8]] : 255
            })), O = Q || D(M) || K(M)), this._rgb = O, this._valid = !!O;
        }
    }
}), c.register('j60gs', function(d, e) {
    a(d.exports, 'Line', function() {
        return _v;
    });
    var f = c('O0Kav'),
        g = c('CtTXA');
    const h = 'label';

    function i(j, k) {
        'function' == typeof j ? j(k) : j && (j.current = k);
    }

    function j(k, l) {
        k.labels = l;
    }

    function k(l, m) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : h;
        const o = [];
        l.datasets = m.map(m => {
            const p = l.datasets.find(l => l[n] === m[n]);
            return p && m.data && !o.includes(p) ? (o.push(p), Object.assign(p, m), p) : {
                ...m
            };
        });
    }

    function l(m) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h;
        const o = {
            labels: [],
            datasets: []
        };
        return j(o, m.labels), k(o, m.datasets, n), o;
    }

    function m(n, o) {
        const {
            height: p = 150,
            width: q = 300,
            redraw: r = !1,
            datasetIdKey: s,
            type: t,
            data: u,
            options: _v,
            plugins: w = [],
            fallbackContent: x,
            updateMode: y,
            ...z
        } = n, A = (0, f.useRef)(null), B = (0, f.useRef)(), C = () => {
            A.current && (B.current = new(0, g.Chart)(A.current, {
                type: t,
                data: l(u, s),
                options: _v && {
                    ..._v
                },
                plugins: w
            }), i(o, B.current));
        }, D = () => {
            i(o, null), B.current && (B.current.destroy(), B.current = null);
        };
        return (0, f.useEffect)(() => {
            !r && B.current && _v && function(E, F) {
                const G = E.options;
                G && F && Object.assign(G, F);
            }(B.current, _v);
        }, [
            r,
            _v
        ]), (0, f.useEffect)(() => {
            !r && B.current && j(B.current.config.data, u.labels);
        }, [
            r,
            u.labels
        ]), (0, f.useEffect)(() => {
            !r && B.current && u.datasets && k(B.current.config.data, u.datasets, s);
        }, [
            r,
            u.datasets
        ]), (0, f.useEffect)(() => {
            B.current && (r ? (D(), setTimeout(C)) : B.current.update(y));
        }, [
            r,
            _v,
            u.labels,
            u.datasets,
            y
        ]), (0, f.useEffect)(() => {
            B.current && (D(), setTimeout(C));
        }, [t]), (0, f.useEffect)(() => (C(), () => D()), []), b(f).createElement('canvas', Object.assign({
            ref: A,
            role: 'img',
            height: p,
            width: q
        }, z), x);
    }
    const n = (0, f.forwardRef)(m);

    function o(p, q) {
        return g.Chart.register(q), (0, f.forwardRef)((q, d) => b(f).createElement(n, Object.assign({}, q, {
            ref: d,
            type: p
        })));
    }
    const p = o('line', g.LineController);
    g.BarController, g.RadarController, g.DoughnutController, g.PolarAreaController, g.BubbleController, g.PieController, g.ScatterController;
});