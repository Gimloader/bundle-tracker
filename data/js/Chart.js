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
c.register('.....', function(d, e) {
    var f;
    f = d.exports, Object.defineProperty(f, '__esModule', {
        value: !0,
        configurable: !0
    }), a(d.exports, 'default', function() {
        return _t;
    });
    var g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....'),
        m = c('.....'),
        n = c('.....'),
        o = c('.....');
    let p, q, r = s => s;
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
    var _t = u => {
        const v = h.useRef(null),
            w = h.useRef(null),
            [x] = (0, m.default)(v),
            y = h.useRef(0),
            z = h.useMemo(() => ({
                labels: [y.current],
                datasets: [{
                    data: [u.balance],
                    borderColor: o.default.White,
                    borderWidth: 3,
                    pointRadius: 10,
                    pointBackgroundColor: o.default.Gold,
                    tension: 0
                }]
            }), []),
            A = h.useCallback(() => {
                const B = w.current;
                if (!B)
                    return;
                const C = Math.max(1, Math.round(x / 60));
                B.options.scales.x.min = Math.max(0, y.current - C);
                const D = B.data.datasets[0].data,
                    E = Math.max(...D) || 0,
                    F = (0, l.takeRight)(D, C + 1),
                    G = Math.min(...F) || 0;
                let H = G;
                if (G < 0) {
                    const I = Math.abs(G).toString().split('');
                    H = 1 === I.length ? 0 : Number(I.map((J, K) => 0 === K ? '1' : 0).join(''));
                }
                I.options.scales.y.min = H - 1, I.options.scales.y.max = Math.max(E + 1, 1.05 * E);
            }, [x]);
        return h.useEffect(() => {
            var B;
            A(), null === (B = w.current) || void 0 === B || B.update();
        }, [x]), (0, k.useIntervalWhen)(() => {
            const B = w.current;
            B && (B.data.labels.push(y.current++), B.data.datasets[0].data.push(u.balance), A(), B.update());
        }, 5000), (0, g.jsx)(_u, {
            children: (0, g.jsx)(_v, {
                ref: v,
                children: (0, g.jsx)(j.Line, {
                    ref: w,
                    options: s,
                    data: z
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
}), c.register('.....', function(d, e) {
    a(d.exports, 'BarController', function() {
        return _Db;
    }), a(d.exports, 'BubbleController', function() {
        return _Eb;
    }), a(d.exports, 'DoughnutController', function() {
        return _Fb;
    }), a(d.exports, 'LineController', function() {
        return _Gb;
    }), a(d.exports, 'PolarAreaController', function() {
        return _Hb;
    }), a(d.exports, 'PieController', function() {
        return _Ib;
    }), a(d.exports, 'RadarController', function() {
        return _Jb;
    }), a(d.exports, 'ScatterController', function() {
        return _Kb;
    }), a(d.exports, 'Chart', function() {
        return _Ye;
    }), a(d.exports, 'LineElement', function() {
        return _Ig;
    }), a(d.exports, 'PointElement', function() {
        return _Ng;
    }), a(d.exports, 'CategoryScale', function() {
        return _qi;
    }), a(d.exports, 'LinearScale', function() {
        return _wi;
    });
    var f = c('.....'),
        g = c('.....');
    g = c('.....');
    class h {
        _notify(i, j, k, l) {
            const m = j.listeners[l],
                n = j.duration;
            m.forEach(o => o({
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
            this._charts.forEach((k, l) => {
                if (!k.running || !k.items.length)
                    return;
                const m = k.items;
                let n, o = m.length - 1,
                    p = !1;
                for (; o >= 0; --o)
                    n = m[o], n._active ? (n._total > k.duration && (k.duration = n._total), n.tick(i), p = !0) : (m[o] = m[m.length - 1], m.pop());
                p && (l.draw(), this._notify(l, k, i, 'progress')), m.length || (k.running = !1, this._notify(l, k, i, 'complete'), k.initial = !1), j += m.length;
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
            j && (j.running = !0, j.start = Date.now(), j.duration = j.items.reduce((k, l) => Math.max(k, l._duration), 0), this._refresh());
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
            boolean: (l, m, n) => n > 0.5 ? m : l,
            color(l, m, n) {
                const o = (0, g.c)(l || j),
                    p = o.valid && (0, g.c)(m || j);
                return p && p.valid ? p.mix(o, n).hexString() : m;
            },
            number: (l, m, n) => l + (m - l) * n
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
            return new Promise((n, o) => {
                m.push({
                    res: n,
                    rej: o
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
            Object.getOwnPropertyNames(n).forEach(q => {
                const r = n[q];
                if (!(0, g.i)(r))
                    return;
                const s = {};
                for (const t of o)
                    s[t] = r[t];
                ((0, g.b)(r.properties) && r.properties || [q]).forEach(u => {
                    u !== q && p.has(u) || p.set(u, s);
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

    function s(t, u) {
        const v = [],
            w = t._getSortedDatasetMetas(u);
        let x, y;
        for (x = 0, y = w.length; x < y; ++x)
            v.push(w[x].index);
        return v;
    }

    function v(w, x, y, z = {}) {
        const A = w.keys,
            B = 'single' === z.mode;
        let C, D, E, F;
        if (null !== x) {
            for (C = 0, D = A.length; C < D; ++C) {
                if (E = +A[C], E === y) {
                    if (z.all)
                        continue;
                    break;
                }
                F = w.values[E], (0, t.g)(F) && (h || 0 === x || (0, t.s)(x) === (0, t.s)(F)) && (x += F);
            }
            return x;
        }
    }

    function y(z, A) {
        const B = z && z.options.stacked;
        return B || void 0 === B && void 0 !== A.stack;
    }

    function A(B, C, D) {
        const E = B[C] || (B[C] = {});
        return E[D] || (E[D] = {});
    }

    function C(D, E, F, G) {
        for (const H of E.getMatchingVisibleMetas(G).reverse()) {
            const I = D[H.index];
            if (F && E > 0 || !F && E < 0)
                return H.index;
        }
        return null;
    }

    function F(G, H) {
        const {
            chart: I,
            _cachedMeta: J
        } = G, K = I._stacks || (I._stacks = {}), {
            iScale: L,
            vScale: M,
            index: N
        } = J, O = L.axis, P = h.axis, Q = function(R, S, T) {
            return `${ R.id }.${ S.id }.${ T.stack || T.type }`;
        }(L, h, J), R = H.length;
        let S;
        for (let T = 0; T < m; ++T) {
            const U = H[T],
                {
                    [V]: W,
                    [X]: Y
                } = U;
            S = (U._stacks || (U._stacks = {}))[X] = A(K, l, W), S[N] = m, S._top = C(S, h, !0, J.type), S._bottom = C(S, h, !1, J.type);
            (S._visualValues || (S._visualValues = {}))[N] = m;
        }
    }

    function V(W, X) {
        const Y = W.scales;
        return Object.keys(Y).filter(Z => Y[Z].axis === X).shift();
    }

    function X(Y, Z) {
        const $ = Y.controller.index,
            ab = Y.vScale && Y.vScale.axis;
        if (ab) {
            Z = Z || Y._parsed;
            for (const bb of Z) {
                const cb = Y._stacks;
                if (!Z || void 0 === Z[ab] || void 0 === Z[ab][$])
                    return;
                delete Z[ab][$], void 0 !== Z[ab]._visualValues && void 0 !== Z[ab]._visualValues[$] && delete Z[ab]._visualValues[$];
            }
        }
    }
    const bb = cb => 'reset' === cb || 'none' === cb,
        cb = (db, eb) => eb ? db : Object.assign({}, db);
    class db {
        initialize() {
            const eb = this._cachedMeta;
            this.configure(), this.linkScales(), eb._stacked = y(eb.vScale, eb), this.addElements(), this.options.fill && !this.chart.isPluginEnabled('filler') && console.warn('Tried to use the \'fill\' option without the \'Filler\' plugin enabled. Please import and register the \'Filler\' plugin and make sure it is not disabled in the options');
        }
        updateIndex(eb) {
            this.index !== eb && X(this._cachedMeta), this.index = eb;
        }
        linkScales() {
            const eb = this.chart,
                fb = this._cachedMeta,
                gb = this.getDataset(),
                hb = (ib, jb, kb, lb) => 'x' === ib ? jb : 'r' === ib ? lb : kb,
                ib = fb.xAxisID = (0, W.v)(gb.xAxisID, V(eb, 'x')),
                jb = fb.yAxisID = (0, W.v)(gb.yAxisID, V(eb, 'y')),
                kb = fb.rAxisID = (0, W.v)(gb.rAxisID, V(eb, 'r')),
                lb = fb.indexAxis,
                mb = fb.iAxisID = hb(lb, ib, jb, kb),
                nb = fb.vAxisID = hb(lb, jb, ib, kb);
            fb.xScale = this.getScaleForId(ib), fb.yScale = this.getScaleForId(jb), fb.rScale = this.getScaleForId(kb), fb.iScale = this.getScaleForId(mb), fb.vScale = this.getScaleForId(nb);
        }
        getDataset() {
            return this.chart.data.datasets[this.index];
        }
        getMeta() {
            return this.chart.getDatasetMeta(this.index);
        }
        getScaleForId(eb) {
            return this.chart.scales[eb];
        }
        _getOtherScale(eb) {
            const fb = this._cachedMeta;
            return eb === fb.iScale ? fb.vScale : fb.iScale;
        }
        reset() {
            this._update('reset');
        }
        _destroy() {
            const eb = this._cachedMeta;
            this._data && (0, W.u)(this._data, this), eb._stacked && X(eb);
        }
        _dataCheck() {
            const eb = this.getDataset(),
                fb = eb.data || (eb.data = []),
                gb = this._data;
            if ((0, W.i)(fb))
                this._data = function(hb) {
                    const ib = Object.keys(hb),
                        jb = new Array(ib.length);
                    let kb, lb, mb;
                    for (kb = 0, lb = ib.length; kb < lb; ++kb)
                        mb = ib[kb], jb[kb] = {
                            x: mb,
                            y: hb[mb]
                        };
                    return jb;
                }(fb);
            else if (gb !== fb) {
                if (gb) {
                    (0, W.u)(gb, this);
                    const hb = this._cachedMeta;
                    X(hb), hb._parsed = [];
                }
                fb && Object.isExtensible(fb) && (0, W.l)(fb, this), this._syncList = [], this._data = fb;
            }
        }
        addElements() {
            const eb = this._cachedMeta;
            this._dataCheck(), this.datasetElementType && (eb.dataset = new this.datasetElementType());
        }
        buildOrUpdateElements(eb) {
            const fb = this._cachedMeta,
                gb = this.getDataset();
            let hb = !1;
            this._dataCheck();
            const ib = fb._stacked;
            fb._stacked = y(fb.vScale, fb), fb.stack !== gb.stack && (hb = !0, X(fb), fb.stack = gb.stack), this._resyncElements(eb), (hb || ib !== fb._stacked) && F(this, fb._parsed);
        }
        configure() {
            const eb = this.chart.config,
                fb = eb.datasetScopeKeys(this._type),
                gb = eb.getOptionScopes(this.getDataset(), fb, !0);
            this.options = eb.createResolver(gb, this.getContext()), this._parsing = this.options.parsing, this._cachedDataOpts = {};
        }
        parse(eb, fb) {
            const {
                _cachedMeta: gb,
                _data: hb
            } = this, {
                iScale: ib,
                _stacked: jb
            } = gb, kb = ib.axis;
            let lb, mb, nb, ob = 0 === eb && fb === hb.length || gb._sorted,
                pb = eb > 0 && gb._parsed[eb - 1];
            if (!1 === this._parsing)
                gb._parsed = hb, gb._sorted = !0, nb = hb;
            else {
                nb = (0, W.b)(hb[eb]) ? this.parseArrayData(gb, hb, eb, fb) : (0, W.i)(hb[eb]) ? this.parseObjectData(gb, hb, eb, fb) : this.parsePrimitiveData(gb, hb, eb, fb);
                const qb = () => null === mb[kb] || pb && mb[kb] < pb[kb];
                for (lb = 0; lb < fb; ++lb)
                    gb._parsed[lb + eb] = mb = nb[lb], ob && (qb() && (ob = !1), pb = mb);
                gb._sorted = ob;
            }
            jb && F(this, nb);
        }
        parsePrimitiveData(eb, fb, gb, hb) {
            const {
                iScale: ib,
                vScale: jb
            } = eb, kb = ib.axis, lb = jb.axis, mb = ib.getLabels(), nb = ib === jb, ob = new Array(hb);
            let pb, qb, rb;
            for (pb = 0, qb = hb; pb < qb; ++pb)
                rb = pb + gb, ob[pb] = {
                    [kb]: nb || ib.parse(mb[rb], rb),
                    [lb]: jb.parse(fb[rb], rb)
                };
            return ob;
        }
        parseArrayData(eb, fb, gb, hb) {
            const {
                xScale: ib,
                yScale: jb
            } = eb, kb = new Array(hb);
            let lb, mb, nb, ob;
            for (lb = 0, mb = hb; lb < mb; ++lb)
                nb = lb + gb, ob = fb[nb], kb[lb] = {
                    x: ib.parse(ob[0], nb),
                    y: jb.parse(ob[1], nb)
                };
            return kb;
        }
        parseObjectData(eb, fb, gb, hb) {
            const {
                xScale: ib,
                yScale: jb
            } = eb, {
                xAxisKey: kb = 'x',
                yAxisKey: lb = 'y'
            } = this._parsing, mb = new Array(hb);
            let nb, ob, pb, qb;
            for (nb = 0, ob = hb; nb < ob; ++nb)
                pb = nb + gb, qb = fb[pb], mb[nb] = {
                    x: ib.parse((0, W.f)(qb, kb), pb),
                    y: jb.parse((0, W.f)(qb, lb), pb)
                };
            return mb;
        }
        getParsed(eb) {
            return this._cachedMeta._parsed[eb];
        }
        getDataElement(eb) {
            return this._cachedMeta.data[eb];
        }
        applyStack(eb, fb, gb) {
            const hb = this.chart,
                ib = this._cachedMeta,
                jb = fb[eb.axis];
            return v({
                keys: s(hb, !0),
                values: fb._stacks[eb.axis]._visualValues
            }, jb, ib.index, {
                mode: gb
            });
        }
        updateRangeFromParsed(eb, fb, gb, hb) {
            const ib = gb[fb.axis];
            let jb = null === ib ? NaN : ib;
            const kb = hb && gb._stacks[fb.axis];
            hb && kb && (hb.values = kb, jb = v(hb, ib, this._cachedMeta.index)), eb.min = Math.min(eb.min, jb), eb.max = Math.max(eb.max, jb);
        }
        getMinMax(eb, fb) {
            const gb = this._cachedMeta,
                hb = gb._parsed,
                ib = gb._sorted && eb === gb.iScale,
                jb = hb.length,
                kb = this._getOtherScale(eb),
                lb = ((mb, nb, ob) => mb && !nb.hidden && nb._stacked && {
                    keys: s(ob, !0),
                    values: null
                })(fb, gb, this.chart),
                mb = {
                    min: Number.POSITIVE_INFINITY,
                    max: Number.NEGATIVE_INFINITY
                },
                {
                    min: nb,
                    max: ob
                } = function(pb) {
                    const {
                        min: qb,
                        max: rb,
                        minDefined: sb,
                        maxDefined: tb
                    } = pb.getUserBounds();
                    return {
                        min: sb ? qb : Number.NEGATIVE_INFINITY,
                        max: tb ? rb : Number.POSITIVE_INFINITY
                    };
                }(kb);
            let pb, qb;

            function rb() {
                qb = hb[pb];
                const sb = qb[kb.axis];
                return !(0, W.g)(qb[eb.axis]) || nb > sb || ob < sb;
            }
            for (pb = 0; pb < jb && (rb() || (this.updateRangeFromParsed(mb, eb, qb, lb), !ib)); ++pb);
            if (ib)
                for (pb = jb - 1; pb >= 0; --pb)
                    if (!rb()) {
                        this.updateRangeFromParsed(mb, eb, qb, lb);
                        break;
                    }
            return mb;
        }
        getAllParsedValues(eb) {
            const fb = this._cachedMeta._parsed,
                gb = [];
            let hb, ib, jb;
            for (hb = 0, ib = fb.length; hb < ib; ++hb)
                jb = fb[hb][eb.axis], (0, W.g)(jb) && gb.push(jb);
            return gb;
        }
        getMaxOverflow() {
            return !1;
        }
        getLabelAndValue(eb) {
            const fb = this._cachedMeta,
                gb = fb.iScale,
                hb = fb.vScale,
                ib = this.getParsed(eb);
            return {
                label: gb ? '' + gb.getLabelForValue(ib[gb.axis]) : '',
                value: hb ? '' + hb.getLabelForValue(ib[hb.axis]) : ''
            };
        }
        _update(eb) {
            const fb = this._cachedMeta;
            this.update(eb || 'default'), fb._clip = function(gb) {
                let hb, ib, jb, kb;
                return (0, W.i)(gb) ? (hb = gb.top, ib = gb.right, jb = gb.bottom, kb = gb.left) : hb = ib = jb = kb = gb, {
                    top: hb,
                    right: ib,
                    bottom: jb,
                    left: kb,
                    disabled: !1 === gb
                };
            }((0, W.v)(this.options.clip, function(gb, hb, ib) {
                if (!1 === ib)
                    return !1;
                const jb = n(gb, ib),
                    kb = n(hb, ib);
                return {
                    top: kb.end,
                    right: jb.end,
                    bottom: kb.start,
                    left: jb.start
                };
            }(fb.xScale, fb.yScale, this.getMaxOverflow())));
        }
        update(eb) {}
        draw() {
            const eb = this._ctx,
                fb = this.chart,
                gb = this._cachedMeta,
                hb = gb.data || [],
                ib = fb.chartArea,
                jb = [],
                kb = this._drawStart || 0,
                lb = this._drawCount || hb.length - kb,
                mb = this.options.drawActiveElementsOnTop;
            let nb;
            for (gb.dataset && gb.dataset.draw(eb, ib, kb, lb), nb = kb; nb < kb + lb; ++nb) {
                const ob = hb[nb];
                ob.hidden || (ob.active && mb ? jb.push(ob) : ob.draw(eb, ib));
            }
            for (nb = 0; nb < jb.length; ++nb)
                jb[nb].draw(eb, ib);
        }
        getStyle(eb, fb) {
            const gb = fb ? 'active' : 'default';
            return void 0 === eb && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(gb) : this.resolveDataElementOptions(eb || 0, gb);
        }
        getContext(eb, fb, gb) {
            const hb = this.getDataset();
            let ib;
            if (eb >= 0 && eb < this._cachedMeta.data.length) {
                const jb = this._cachedMeta.data[eb];
                ib = jb.$context || (jb.$context = function(kb, lb, mb) {
                    return (0, W.j)(kb, {
                        active: !1,
                        dataIndex: lb,
                        parsed: void 0,
                        raw: void 0,
                        element: mb,
                        index: lb,
                        mode: 'default',
                        type: 'data'
                    });
                }(this.getContext(), eb, jb)), ib.parsed = this.getParsed(eb), ib.raw = hb.data[eb], ib.index = ib.dataIndex = eb;
            } else
                ib = this.$context || (this.$context = function(kb, lb) {
                    return (0, W.j)(kb, {
                        active: !1,
                        dataset: void 0,
                        datasetIndex: lb,
                        index: lb,
                        mode: 'default',
                        type: 'dataset'
                    });
                }(this.chart.getContext(), this.index)), ib.dataset = hb, ib.index = ib.datasetIndex = this.index;
            return ib.active = !!jb, ib.mode = gb, ib;
        }
        resolveDatasetElementOptions(eb) {
            return this._resolveElementOptions(this.datasetElementType.id, eb);
        }
        resolveDataElementOptions(eb, fb) {
            return this._resolveElementOptions(this.dataElementType.id, fb, eb);
        }
        _resolveElementOptions(eb, fb = 'default', gb) {
            const hb = 'active' === fb,
                ib = this._cachedDataOpts,
                jb = eb + '-' + fb,
                kb = ib[jb],
                lb = this.enableOptionSharing && (0, W.h)(gb);
            if (kb)
                return cb(kb, lb);
            const mb = this.chart.config,
                nb = mb.datasetElementScopeKeys(this._type, eb),
                ob = hb ? [
                    `${ eb }Hover`,
                    'hover',
                    eb,
                    ''
                ] : [
                    eb,
                    ''
                ],
                pb = mb.getOptionScopes(this.getDataset(), nb),
                qb = Object.keys(W.d.elements[eb]),
                rb = mb.resolveNamedOptions(pb, qb, () => this.getContext(gb, hb, fb), ob);
            return rb.$shared && (rb.$shared = lb, ib[jb] = Object.freeze(cb(rb, lb))), rb;
        }
        _resolveAnimations(eb, fb, gb) {
            const hb = this.chart,
                ib = this._cachedDataOpts,
                jb = `animation-${ fb }`,
                kb = ib[jb];
            if (kb)
                return kb;
            let lb;
            if (!1 !== hb.options.animation) {
                const mb = this.chart.config,
                    nb = mb.datasetAnimationScopeKeys(this._type, fb),
                    ob = mb.getOptionScopes(this.getDataset(), nb);
                lb = mb.createResolver(ob, this.getContext(eb, gb, fb));
            }
            const pb = new m(mb, lb && lb.animations);
            return lb && lb._cacheable && (nb[ob] = Object.freeze(pb)), pb;
        }
        getSharedOptions(eb) {
            if (eb.$shared)
                return this._sharedOptions || (this._sharedOptions = Object.assign({}, eb));
        }
        includeOptions(eb, fb) {
            return !fb || bb(eb) || this.chart._animationsDisabled;
        }
        _getSharedOptions(eb, fb) {
            const gb = this.resolveDataElementOptions(eb, fb),
                hb = this._sharedOptions,
                ib = this.getSharedOptions(gb),
                jb = this.includeOptions(fb, ib) || ib !== hb;
            return this.updateSharedOptions(ib, fb, gb), {
                sharedOptions: ib,
                includeOptions: jb
            };
        }
        updateElement(eb, fb, gb, hb) {
            bb(hb) ? Object.assign(eb, gb) : this._resolveAnimations(fb, hb).update(eb, gb);
        }
        updateSharedOptions(eb, fb, gb) {
            eb && !bb(fb) && this._resolveAnimations(void 0, fb).update(eb, gb);
        }
        _setStyle(eb, fb, gb, hb) {
            eb.active = hb;
            const ib = this.getStyle(fb, hb);
            this._resolveAnimations(fb, gb, hb).update(eb, {
                options: !hb && this.getSharedOptions(ib) || ib
            });
        }
        removeHoverStyle(eb, fb, gb) {
            this._setStyle(eb, gb, 'active', !1);
        }
        setHoverStyle(eb, fb, gb) {
            this._setStyle(eb, gb, 'active', !0);
        }
        _removeDatasetHoverStyle() {
            const eb = this._cachedMeta.dataset;
            eb && this._setStyle(eb, void 0, 'active', !1);
        }
        _setDatasetHoverStyle() {
            const eb = this._cachedMeta.dataset;
            eb && this._setStyle(eb, void 0, 'active', !0);
        }
        _resyncElements(eb) {
            const fb = this._data,
                gb = this._cachedMeta.data;
            for (const [hb, ib, jb] of this._syncList)
                this[hb](ib, jb);
            this._syncList = [];
            const kb = jb.length,
                lb = ib.length,
                mb = Math.min(lb, kb);
            mb && this.parse(0, mb), lb > kb ? this._insertElements(kb, lb - kb, hb) : lb < kb && this._removeElements(lb, kb - lb);
        }
        _insertElements(eb, fb, gb = !0) {
            const hb = this._cachedMeta,
                ib = hb.data,
                jb = eb + fb;
            let kb;
            const lb = mb => {
                for (mb.length += fb, kb = mb.length - 1; kb >= jb; kb--)
                    mb[kb] = mb[kb - fb];
            };
            for (lb(ib), kb = eb; kb < jb; ++kb)
                ib[kb] = new this.dataElementType();
            this._parsing && lb(hb._parsed), this.parse(eb, fb), gb && this.updateElements(ib, eb, fb, 'reset');
        }
        updateElements(eb, fb, gb, hb) {}
        _removeElements(eb, fb) {
            const gb = this._cachedMeta;
            if (this._parsing) {
                const hb = gb._parsed.splice(eb, fb);
                gb._stacked && X(gb, hb);
            }
            gb.data.splice(eb, fb);
        }
        _sync(eb) {
            if (this._parsing)
                this._syncList.push(eb);
            else {
                const [fb, gb, hb] = eb;
                this[fb](gb, hb);
            }
            this.chart._dataChanges.push([
                this.index,
                ...eb
            ]);
        }
        _onDataPush() {
            const eb = arguments.length;
            this._sync([
                '_insertElements',
                this.getDataset().data.length - eb,
                eb
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
        _onDataSplice(eb, fb) {
            fb && this._sync([
                '_removeElements',
                eb,
                fb
            ]);
            const gb = arguments.length - 2;
            gb && this._sync([
                '_insertElements',
                eb,
                gb
            ]);
        }
        _onDataUnshift() {
            this._sync([
                '_insertElements',
                0,
                arguments.length
            ]);
        }
        constructor(eb, fb) {
            this.chart = eb, this._ctx = eb.ctx, this.index = fb, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = !1, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = !1, this.supportsDecimation = !1, this.$context = void 0, this._syncList = [], this.datasetElementType = new.target.datasetElementType, this.dataElementType = new.target.dataElementType, this.initialize();
        }
    }

    function eb(fb) {
        const gb = fb.iScale,
            hb = function(ib, jb) {
                if (!ib._cache.$bar) {
                    const kb = ib.getMatchingVisibleMetas(jb);
                    let lb = [];
                    for (let mb = 0, nb = kb.length; mb < nb; mb++)
                        lb = lb.concat(kb[mb].controller.getAllParsedValues(ib));
                    ib._cache.$bar = (0, W._)(lb.sort((ob, pb) => ob - pb));
                }
                return ib._cache.$bar;
            }(gb, fb.type);
        let ib, jb, kb, lb, mb = gb._length;
        const nb = () => {
            32767 !== kb && -32768 !== kb && ((0, W.h)(lb) && (mb = Math.min(mb, Math.abs(kb - lb) || mb)), lb = kb);
        };
        for (ib = 0, jb = hb.length; ib < jb; ++ib)
            kb = gb.getPixelForValue(hb[ib]), nb();
        for (lb = void 0, ib = 0, jb = gb.ticks.length; ib < jb; ++ib)
            kb = gb.getPixelForTick(ib), nb();
        return mb;
    }

    function ib(jb, kb, lb, mb) {
        return (0, W.b)(jb) ? function(nb, ob, pb, qb) {
            const rb = pb.parse(nb[0], qb),
                sb = pb.parse(nb[1], qb),
                tb = Math.min(rb, sb),
                ub = Math.max(rb, sb);
            let vb = tb,
                wb = ub;
            Math.abs(tb) > Math.abs(ub) && (vb = ub, wb = tb), ob[pb.axis] = wb, ob._custom = {
                barStart: vb,
                barEnd: wb,
                start: rb,
                end: sb,
                min: tb,
                max: ub
            };
        }(jb, kb, lb, mb) : kb[lb.axis] = lb.parse(jb, mb), kb;
    }

    function jb(kb, lb, mb, nb) {
        const ob = kb.iScale,
            pb = kb.vScale,
            qb = ob.getLabels(),
            rb = ob === pb,
            sb = [];
        let tb, ub, vb, wb;
        for (tb = mb, ub = mb + nb; tb < ub; ++tb)
            wb = lb[tb], vb = {}, vb[ob.axis] = rb || ob.parse(h[tb], tb), sb.push(ib(wb, vb, pb, tb));
        return sb;
    }

    function pb(qb) {
        return qb && void 0 !== qb.barStart && void 0 !== qb.barEnd;
    }

    function qb(rb, sb, tb, ub) {
        let vb = sb.borderSkipped;
        const wb = {};
        if (!vb)
            return void(rb.borderSkipped = wb);
        if (!0 === vb)
            return void(rb.borderSkipped = {
                top: !0,
                right: !0,
                bottom: !0,
                left: !0
            });
        const {
            start: xb,
            end: yb,
            reverse: zb,
            top: Ab,
            bottom: Bb
        } = function(Cb) {
            let Db, Eb, Fb, Gb, Hb;
            return Cb.horizontal ? (Db = Cb.base > Cb.x, Eb = 'left', Fb = 'right') : (Db = Cb.base < Cb.y, Eb = 'bottom', Fb = 'top'), Db ? (Gb = 'end', Hb = 'start') : (Gb = 'start', Hb = 'end'), {
                start: Eb,
                end: Fb,
                reverse: Db,
                top: Gb,
                bottom: Hb
            };
        }(rb);
        'middle' === vb && tb && (rb.enableBorderRadius = !0, (tb._top || 0) === ub ? vb = Ab : (tb._bottom || 0) === ub ? vb = l : (wb[_xb(l, h, yb, zb)] = !0, vb = Ab)), wb[_xb(vb, h, yb, zb)] = !0, rb.borderSkipped = wb;
    }

    function _xb(yb, zb, Ab, Bb) {
        var Cb, Db, Eb;
        return Bb ? (h = Ab, yb = _Bb(yb = (Cb = yb) === (Db = zb) ? h : Cb === h ? Db : Cb, Ab, zb)) : yb = _Bb(yb, zb, Ab), yb;
    }

    function _Bb(Cb, Db, Eb) {
        return 'start' === Cb ? Db : 'end' === Cb ? Eb : Cb;
    }

    function Cb(Db, {
        inflateAmount: Eb
    }, Fb) {
        Db.inflateAmount = 'auto' === Eb ? 1 === Fb ? 0.33 : 0 : Eb;
    }
    (0, Cb.default)(db, 'defaults', {}), (0, Cb.default)(db, 'datasetElementType', null), (0, Cb.default)(db, 'dataElementType', null);
    class _Db extends db {
        parsePrimitiveData(Eb, Fb, Gb, Hb) {
            return jb(Eb, Fb, Gb, Hb);
        }
        parseArrayData(Eb, Fb, Gb, Hb) {
            return jb(Eb, Fb, Gb, Hb);
        }
        parseObjectData(Eb, Fb, Gb, Hb) {
            const {
                iScale: Ib,
                vScale: Jb
            } = Eb, {
                xAxisKey: Kb = 'x',
                yAxisKey: Lb = 'y'
            } = this._parsing, Mb = 'x' === Ib.axis ? Kb : Lb, Nb = 'x' === Jb.axis ? Kb : Lb, Ob = [];
            let Pb, Qb, Rb, Sb;
            for (Pb = Gb, Qb = Gb + Hb; Pb < Qb; ++Pb)
                Sb = Fb[Pb], Rb = {}, Rb[Ib.axis] = Ib.parse((0, Db.f)(Sb, Mb), Pb), Ob.push(ib((0, Db.f)(Sb, Nb), Rb, Jb, Pb));
            return Ob;
        }
        updateRangeFromParsed(Eb, Fb, Gb, Hb) {
            super.updateRangeFromParsed(Eb, Fb, Gb, Hb);
            const Ib = Gb._custom;
            Ib && Fb === this._cachedMeta.vScale && (Eb.min = Math.min(Eb.min, Ib.min), Eb.max = Math.max(Eb.max, Ib.max));
        }
        getMaxOverflow() {
            return 0;
        }
        getLabelAndValue(Eb) {
            const Fb = this._cachedMeta,
                {
                    iScale: Gb,
                    vScale: Hb
                } = Fb,
                Ib = this.getParsed(Eb),
                Jb = Ib._custom,
                Kb = pb(Jb) ? '[' + Jb.start + ', ' + Jb.end + ']' : '' + Hb.getLabelForValue(Ib[Hb.axis]);
            return {
                label: '' + Gb.getLabelForValue(Ib[Gb.axis]),
                value: Kb
            };
        }
        initialize() {
            this.enableOptionSharing = !0, super.initialize();
            this._cachedMeta.stack = this.getDataset().stack;
        }
        update(Eb) {
            const Fb = this._cachedMeta;
            this.updateElements(Fb.data, 0, Fb.data.length, Eb);
        }
        updateElements(Eb, Fb, Gb, Hb) {
            const Ib = 'reset' === Hb,
                {
                    index: Jb,
                    _cachedMeta: {
                        vScale: Kb
                    }
                } = this,
                Lb = Kb.getBasePixel(),
                Mb = Kb.isHorizontal(),
                Nb = this._getRuler(),
                {
                    sharedOptions: Ob,
                    includeOptions: Pb
                } = this._getSharedOptions(Fb, Hb);
            for (let Qb = Fb; Qb < Fb + Gb; Qb++) {
                const Rb = this.getParsed(Qb),
                    Sb = Ib || (0, Db.k)(Rb[Kb.axis]) ? {
                        base: Lb,
                        head: Lb
                    } : this._calculateBarValuePixels(Qb),
                    Tb = this._calculateBarIndexPixels(Qb, Nb),
                    Ub = (Rb._stacks || {})[Kb.axis],
                    Vb = {
                        horizontal: Mb,
                        base: Sb.base,
                        enableBorderRadius: !Ub || pb(Rb._custom) || Jb === Ub._top || Jb === Ub._bottom,
                        x: Mb ? Sb.head : Tb.center,
                        y: Mb ? Tb.center : Sb.head,
                        height: Mb ? Tb.size : Math.abs(Sb.size),
                        width: Mb ? Math.abs(Sb.size) : Tb.size
                    };
                Pb && (Vb.options = Ob || this.resolveDataElementOptions(Qb, Eb[Qb].active ? 'active' : Hb));
                const Wb = Vb.options || Eb[Qb].options;
                qb(Vb, Wb, Ub, Jb), Cb(Vb, Wb, Nb.ratio), this.updateElement(Eb[Qb], Qb, Vb, Hb);
            }
        }
        _getStacks(Eb, Fb) {
            const {
                iScale: Gb
            } = this._cachedMeta, Hb = Gb.getMatchingVisibleMetas(this._type).filter(Ib => Ib.controller.options.grouped), Ib = Gb.options.stacked, Jb = [], Kb = Lb => {
                const Mb = Lb.controller.getParsed(Fb),
                    Nb = Mb && Mb[Lb.vScale.axis];
                if ((0, Db.k)(Nb) || isNaN(Nb))
                    return !0;
            };
            for (const Lb of Hb)
                if ((void 0 === Fb || !Kb(Lb)) && ((!1 === Ib || -1 === Jb.indexOf(Lb.stack) || void 0 === Ib && void 0 === Lb.stack) && Jb.push(Lb.stack), Lb.index === Eb))
                    break;
            return Jb.length || Jb.push(void 0), Jb;
        }
        _getStackCount(Eb) {
            return this._getStacks(void 0, Eb).length;
        }
        _getStackIndex(Eb, Fb, Gb) {
            const Hb = this._getStacks(Eb, Gb),
                Ib = void 0 !== Fb ? Hb.indexOf(Fb) : -1;
            return -1 === Ib ? Hb.length - 1 : Ib;
        }
        _getRuler() {
            const Eb = this.options,
                Fb = this._cachedMeta,
                Gb = Fb.iScale,
                Hb = [];
            let Ib, Jb;
            for (Ib = 0, Jb = Fb.data.length; Ib < Jb; ++Ib)
                Hb.push(Gb.getPixelForValue(this.getParsed(Ib)[Gb.axis], Ib));
            const Kb = Eb.barThickness;
            return {
                min: Kb || eb(Fb),
                pixels: Hb,
                start: Gb._startPixel,
                end: Gb._endPixel,
                stackCount: this._getStackCount(),
                scale: Gb,
                grouped: Eb.grouped,
                ratio: Kb ? 1 : Eb.categoryPercentage * Eb.barPercentage
            };
        }
        _calculateBarValuePixels(Eb) {
            const {
                _cachedMeta: {
                    vScale: Fb,
                    _stacked: Gb,
                    index: Hb
                },
                options: {
                    base: Ib,
                    minBarLength: Jb
                }
            } = this, Kb = Ib || 0, Lb = this.getParsed(Eb), Mb = Lb._custom, Nb = pb(Mb);
            let Ob, Pb, Qb = Lb[Fb.axis],
                Rb = 0,
                Sb = Gb ? this.applyStack(Fb, Lb, Gb) : Qb;
            Sb !== Qb && (Rb = Sb - Qb, Sb = Qb), Nb && (Qb = Mb.barStart, Sb = Mb.barEnd - Mb.barStart, 0 !== Qb && (0, Db.s)(Qb) !== (0, Db.s)(Mb.barEnd) && (Rb = 0), Rb += Qb);
            const Tb = (0, Db.k)(Ib) || Nb ? Rb : Ib;
            let Ub = Fb.getPixelForValue(Tb);
            if (Ob = this.chart.getDataVisibility(Eb) ? Fb.getPixelForValue(Rb + Sb) : Ub, Pb = Ob - Ub, Math.abs(Pb) < Jb) {
                Pb = function(Vb, Wb, Xb) {
                    return 0 !== Vb ? (0, Db.s)(Vb) : (Wb.isHorizontal() ? 1 : -1) * (Wb.min >= Xb ? 1 : -1);
                }(Pb, Fb, Kb) * Jb, Qb === Kb && (Ub -= Pb / 2);
                const Vb = Fb.getPixelForDecimal(0),
                    Wb = Fb.getPixelForDecimal(1),
                    Xb = Math.min(Vb, Wb),
                    Yb = Math.max(Vb, Wb);
                Ub = Math.max(Math.min(Ub, Rb), Xb), Ob = Ub + Pb, Gb && !Nb && (Lb._stacks[Fb.axis]._visualValues[Hb] = Fb.getValueForPixel(Ob) - Fb.getValueForPixel(Ub));
            }
            if (Ub === Fb.getPixelForValue(Kb)) {
                const Zb = (0, Db.s)(Pb) * Fb.getLineWidthForValue(Kb) / 2;
                Ub += Zb, Pb -= Zb;
            }
            return {
                size: Pb,
                base: Ub,
                head: Ob,
                center: Ob + Pb / 2
            };
        }
        _calculateBarIndexPixels(Eb, Fb) {
            const Gb = Fb.scale,
                Hb = this.options,
                Ib = Hb.skipNull,
                Jb = (0, Db.v)(Hb.maxBarThickness, 1 / 0);
            let Kb, Lb;
            if (Fb.grouped) {
                const Mb = Ib ? this._getStackCount(Eb) : Fb.stackCount,
                    Nb = 'flex' === Hb.barThickness ? function(Ob, Pb, Qb, Rb) {
                        const Sb = Pb.pixels,
                            Tb = Sb[Ob];
                        let Ub = Ob > 0 ? Sb[Ob - 1] : null,
                            Vb = Ob < Sb.length - 1 ? Sb[Ob + 1] : null;
                        const Wb = Qb.categoryPercentage;
                        null === Ub && (Ub = Tb - (null === Vb ? Pb.end - Pb.start : Vb - Tb)), null === Vb && (Vb = Tb + Tb - Ub);
                        const Xb = Tb - (Tb - Math.min(Ub, Vb)) / 2 * Wb;
                        return {
                            chunk: Math.abs(Vb - Ub) / 2 * Wb / Rb,
                            ratio: Qb.barPercentage,
                            start: Xb
                        };
                    }(Eb, Fb, Hb, Mb) : function(Ob, Pb, Qb, Rb) {
                        const Sb = Qb.barThickness;
                        let Tb, Ub;
                        return (0, Db.k)(Sb) ? (Tb = Pb.min * Qb.categoryPercentage, Ub = Qb.barPercentage) : (Tb = Sb * Rb, Ub = 1), {
                            chunk: Tb / Rb,
                            ratio: Ub,
                            start: Pb.pixels[Ob] - Tb / 2
                        };
                    }(Eb, Fb, Hb, Mb),
                    Ob = this._getStackIndex(this.index, this._cachedMeta.stack, Ib ? Eb : void 0);
                Kb = Nb.start + Nb.chunk * Ob + Nb.chunk / 2, Lb = Math.min(Jb, Nb.chunk * Nb.ratio);
            } else
                Kb = Mb.getPixelForValue(this.getParsed(Eb)[Mb.axis], Eb), Lb = Math.min(Jb, Fb.min * Fb.ratio);
            return {
                base: Kb - Lb / 2,
                head: Kb + Lb / 2,
                center: Kb,
                size: Lb
            };
        }
        draw() {
            const Eb = this._cachedMeta,
                Fb = Eb.vScale,
                Gb = Eb.data,
                Hb = Gb.length;
            let Ib = 0;
            for (; Ib < Hb; ++Ib)
                null !== this.getParsed(Ib)[Fb.axis] && Gb[Ib].draw(this._ctx);
        }
    }
    (0, Cb.default)(_Db, 'id', 'bar'), (0, Cb.default)(_Db, 'defaults', {
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
    }), (0, Cb.default)(_Db, 'overrides', {
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
    class _Eb extends db {
        initialize() {
            this.enableOptionSharing = !0, super.initialize();
        }
        parsePrimitiveData(Fb, Gb, Hb, Ib) {
            const Jb = super.parsePrimitiveData(Fb, Gb, Hb, Ib);
            for (let Kb = 0; Kb < Jb.length; Kb++)
                Jb[Kb]._custom = this.resolveDataElementOptions(Kb + Hb).radius;
            return Jb;
        }
        parseArrayData(Fb, Gb, Hb, Ib) {
            const Jb = super.parseArrayData(Fb, Gb, Hb, Ib);
            for (let Kb = 0; Kb < Jb.length; Kb++) {
                const Lb = Gb[Hb + Kb];
                Jb[Kb]._custom = (0, Db.v)(Lb[2], this.resolveDataElementOptions(Kb + Hb).radius);
            }
            return Jb;
        }
        parseObjectData(Fb, Gb, Hb, Ib) {
            const Jb = super.parseObjectData(Fb, Gb, Hb, Ib);
            for (let Kb = 0; Kb < Jb.length; Kb++) {
                const Lb = Gb[Hb + Kb];
                Jb[Kb]._custom = (0, Db.v)(Lb && Lb.r && +Lb.r, this.resolveDataElementOptions(Kb + Hb).radius);
            }
            return Jb;
        }
        getMaxOverflow() {
            const Fb = this._cachedMeta.data;
            let Gb = 0;
            for (let Hb = Fb.length - 1; Hb >= 0; --Hb)
                Gb = Math.max(Gb, Fb[Hb].size(this.resolveDataElementOptions(Hb)) / 2);
            return Gb > 0 && Gb;
        }
        getLabelAndValue(Fb) {
            const Gb = this._cachedMeta,
                Hb = this.chart.data.labels || [],
                {
                    xScale: Ib,
                    yScale: Jb
                } = Gb,
                Kb = this.getParsed(Fb),
                Lb = Ib.getLabelForValue(Kb.x),
                Mb = Jb.getLabelForValue(Kb.y),
                Nb = Kb._custom;
            return {
                label: Hb[Fb] || '',
                value: '(' + Lb + ', ' + Mb + (Nb ? ', ' + Nb : '') + ')'
            };
        }
        update(Fb) {
            const Gb = this._cachedMeta.data;
            this.updateElements(Gb, 0, Gb.length, Fb);
        }
        updateElements(Fb, Gb, Hb, Ib) {
            const Jb = 'reset' === Ib,
                {
                    iScale: Kb,
                    vScale: Lb
                } = this._cachedMeta,
                {
                    sharedOptions: Mb,
                    includeOptions: Nb
                } = this._getSharedOptions(Gb, Ib),
                Ob = Kb.axis,
                Pb = Lb.axis;
            for (let Qb = Gb; Qb < Gb + Hb; Qb++) {
                const Rb = Fb[Qb],
                    Sb = !Jb && this.getParsed(Qb),
                    Tb = {},
                    Ub = Tb[Ob] = Jb ? Kb.getPixelForDecimal(0.5) : Kb.getPixelForValue(Sb[Ob]),
                    Vb = Tb[Pb] = Jb ? Lb.getBasePixel() : Lb.getPixelForValue(Sb[Pb]);
                Tb.skip = isNaN(Ub) || isNaN(Vb), Nb && (Tb.options = Mb || this.resolveDataElementOptions(Qb, Rb.active ? 'active' : Ib), Jb && (Tb.options.radius = 0)), this.updateElement(Rb, Qb, Tb, Ib);
            }
        }
        resolveDataElementOptions(Fb, Gb) {
            const Hb = this.getParsed(Fb);
            let Ib = super.resolveDataElementOptions(Fb, Gb);
            Ib.$shared && (Ib = Object.assign({}, Ib, {
                $shared: !1
            }));
            const Jb = Ib.radius;
            return 'active' !== Gb && (Ib.radius = 0), Ib.radius += (0, Db.v)(Hb && Hb._custom, Jb), Ib;
        }
    }
    (0, Cb.default)(_Eb, 'id', 'bubble'), (0, Cb.default)(_Eb, 'defaults', {
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
    }), (0, Cb.default)(_Eb, 'overrides', {
        scales: {
            x: {
                type: 'linear'
            },
            y: {
                type: 'linear'
            }
        }
    });
    class _Fb extends db {
        linkScales() {}
        parse(Gb, Hb) {
            const Ib = this.getDataset().data,
                Jb = this._cachedMeta;
            if (!1 === this._parsing)
                Jb._parsed = Ib;
            else {
                let Kb, Lb, Mb = Nb => +Ib[Nb];
                if ((0, Db.i)(Ib[Gb])) {
                    const {
                        key: Nb = 'value'
                    } = this._parsing;
                    Mb = Ob => +(0, Db.f)(Ib[Ob], Nb);
                }
                for (Kb = Gb, Lb = Gb + Hb; Kb < Lb; ++Kb)
                    Jb._parsed[Kb] = Mb(Kb);
            }
        }
        _getRotation() {
            return (0, Db.t)(this.options.rotation - 90);
        }
        _getCircumference() {
            return (0, Db.t)(this.options.circumference);
        }
        _getRotationExtents() {
            let Gb = Db.T,
                Hb = -Db.T;
            for (let Ib = 0; Ib < this.chart.data.datasets.length; ++Ib)
                if (this.chart.isDatasetVisible(Ib) && this.chart.getDatasetMeta(Ib).type === this._type) {
                    const Jb = this.chart.getDatasetMeta(Ib).controller,
                        Kb = Jb._getRotation(),
                        Lb = Jb._getCircumference();
                    Gb = Math.min(Gb, Kb), Hb = Math.max(Hb, Kb + Lb);
                }
            return {
                rotation: Gb,
                circumference: Hb - Gb
            };
        }
        update(Gb) {
            const Hb = this.chart,
                {
                    chartArea: Ib
                } = Hb,
                Jb = this._cachedMeta,
                Kb = Jb.data,
                Lb = this.getMaxBorderWidth() + this.getMaxOffset(Kb) + this.options.spacing,
                Mb = Math.max((Math.min(Ib.width, Ib.height) - Lb) / 2, 0),
                Nb = Math.min((0, Db.m)(this.options.cutout, Mb), 1),
                Ob = this._getRingWeight(this.index),
                {
                    circumference: Pb,
                    rotation: Qb
                } = this._getRotationExtents(),
                {
                    ratioX: Rb,
                    ratioY: Sb,
                    offsetX: Tb,
                    offsetY: Ub
                } = function(Vb, Wb, Xb) {
                    let Yb = 1,
                        Zb = 1,
                        $b = 0,
                        ac = 0;
                    if (Wb < Db.T) {
                        const bc = Vb,
                            cc = bc + Wb,
                            dc = Math.cos(bc),
                            ec = Math.sin(bc),
                            fc = Math.cos(cc),
                            gc = Math.sin(cc),
                            hc = (ic, jc, kc) => (0, Db.p)(ic, bc, cc, !0) ? 1 : Math.max(jc, jc * Xb, kc, kc * Xb),
                            ic = (jc, kc, lc) => (0, Db.p)(jc, bc, cc, !0) ? -1 : Math.min(kc, kc * Xb, lc, lc * Xb),
                            jc = hc(0, dc, fc),
                            kc = hc(Db.H, ec, gc),
                            lc = ic(Db.P, dc, fc),
                            mc = ic(Db.P + Db.H, ec, gc);
                        Yb = (jc - lc) / 2, Zb = (kc - mc) / 2, $b = -(jc + lc) / 2, ac = -(kc + mc) / 2;
                    }
                    return {
                        ratioX: Yb,
                        ratioY: Zb,
                        offsetX: $b,
                        offsetY: ac
                    };
                }(Qb, Pb, Nb),
                Vb = (Ib.width - Lb) / Rb,
                Wb = (Ib.height - Lb) / Sb,
                Xb = Math.max(Math.min(Vb, Wb) / 2, 0),
                Yb = (0, Db.n)(this.options.radius, Xb),
                Zb = (Yb - Math.max(Yb * Nb, 0)) / this._getVisibleDatasetWeightTotal();
            this.offsetX = Tb * Yb, this.offsetY = Ub * Yb, Jb.total = this.calculateTotal(), this.outerRadius = Yb - Zb * this._getRingWeightOffset(this.index), this.innerRadius = Math.max(this.outerRadius - Zb * Ob, 0), this.updateElements(Kb, 0, Kb.length, Gb);
        }
        _circumference(Gb, Hb) {
            const Ib = this.options,
                Jb = this._cachedMeta,
                Kb = this._getCircumference();
            return Hb && Ib.animation.animateRotate || !this.chart.getDataVisibility(Gb) || null === Jb._parsed[Gb] || Jb.data[Gb].hidden ? 0 : this.calculateCircumference(Jb._parsed[Gb] * Kb / Db.T);
        }
        updateElements(Gb, Hb, Ib, Jb) {
            const Kb = 'reset' === Jb,
                Lb = this.chart,
                Mb = Lb.chartArea,
                Nb = Lb.options.animation,
                Ob = (Mb.left + Mb.right) / 2,
                Pb = (Mb.top + Mb.bottom) / 2,
                Qb = Kb && Nb.animateScale,
                Rb = Qb ? 0 : this.innerRadius,
                Sb = Qb ? 0 : this.outerRadius,
                {
                    sharedOptions: Tb,
                    includeOptions: Ub
                } = this._getSharedOptions(Hb, Jb);
            let Vb, Wb = this._getRotation();
            for (Vb = 0; Vb < Hb; ++Vb)
                Wb += this._circumference(Vb, Kb);
            for (Vb = Hb; Vb < Hb + Ib; ++Vb) {
                const Xb = this._circumference(Vb, Kb),
                    Yb = Gb[Vb],
                    Zb = {
                        x: Ob + this.offsetX,
                        y: Pb + this.offsetY,
                        startAngle: Wb,
                        endAngle: Wb + Xb,
                        circumference: Xb,
                        outerRadius: Sb,
                        innerRadius: Rb
                    };
                Ub && (Zb.options = Tb || this.resolveDataElementOptions(Vb, Yb.active ? 'active' : Jb)), Wb += Xb, this.updateElement(Yb, Vb, Zb, Jb);
            }
        }
        calculateTotal() {
            const Gb = this._cachedMeta,
                Hb = Gb.data;
            let Ib, Jb = 0;
            for (Ib = 0; Ib < Hb.length; Ib++) {
                const Kb = Gb._parsed[Ib];
                null === Kb || isNaN(Kb) || !this.chart.getDataVisibility(Ib) || Hb[Ib].hidden || (Jb += Math.abs(Kb));
            }
            return Jb;
        }
        calculateCircumference(Gb) {
            const Hb = this._cachedMeta.total;
            return Hb > 0 && !isNaN(Gb) ? Db.T * (Math.abs(Gb) / Hb) : 0;
        }
        getLabelAndValue(Gb) {
            const Hb = this._cachedMeta,
                Ib = this.chart,
                Jb = Ib.data.labels || [],
                Kb = (0, Db.o)(Hb._parsed[Gb], Ib.options.locale);
            return {
                label: Jb[Gb] || '',
                value: Kb
            };
        }
        getMaxBorderWidth(Gb) {
            let Hb = 0;
            const Ib = this.chart;
            let Jb, Kb, Lb, Mb, Nb;
            if (!Gb)
                for (Jb = 0, Kb = Ib.data.datasets.length; Jb < Kb; ++Jb)
                    if (Ib.isDatasetVisible(Jb)) {
                        Lb = Ib.getDatasetMeta(Jb), Gb = Lb.data, Mb = Lb.controller;
                        break;
                    }
            if (!Gb)
                return 0;
            for (Jb = 0, Kb = Gb.length; Jb < Kb; ++Jb)
                Nb = Mb.resolveDataElementOptions(Jb), 'inner' !== Nb.borderAlign && (Hb = Math.max(Hb, Nb.borderWidth || 0, Nb.hoverBorderWidth || 0));
            return Hb;
        }
        getMaxOffset(Gb) {
            let Hb = 0;
            for (let Ib = 0, Jb = Gb.length; Ib < Jb; ++Ib) {
                const Kb = this.resolveDataElementOptions(Ib);
                Hb = Math.max(Hb, Kb.offset || 0, Kb.hoverOffset || 0);
            }
            return Hb;
        }
        _getRingWeightOffset(Gb) {
            let Hb = 0;
            for (let Ib = 0; Ib < Gb; ++Ib)
                this.chart.isDatasetVisible(Ib) && (Hb += this._getRingWeight(Ib));
            return Hb;
        }
        _getRingWeight(Gb) {
            return Math.max((0, Db.v)(this.chart.data.datasets[Gb].weight, 1), 0);
        }
        _getVisibleDatasetWeightTotal() {
            return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
        }
        constructor(Gb, Hb) {
            super(Gb, Hb), this.enableOptionSharing = !0, this.innerRadius = void 0, this.outerRadius = void 0, this.offsetX = void 0, this.offsetY = void 0;
        }
    }
    (0, Cb.default)(_Fb, 'id', 'doughnut'), (0, Cb.default)(_Fb, 'defaults', {
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
    }), (0, Cb.default)(_Fb, 'descriptors', {
        _scriptable: Gb => 'spacing' !== Gb,
        _indexable: Gb => 'spacing' !== Gb
    }), (0, Cb.default)(_Fb, 'overrides', {
        aspectRatio: 1,
        plugins: {
            legend: {
                labels: {
                    generateLabels(Gb) {
                        const Hb = Gb.data;
                        if (Hb.labels.length && Hb.datasets.length) {
                            const {
                                labels: {
                                    pointStyle: Ib,
                                    color: Jb
                                }
                            } = Gb.legend.options;
                            return Hb.labels.map((Kb, Lb) => {
                                const Mb = Gb.getDatasetMeta(0).controller.getStyle(Lb);
                                return {
                                    text: Kb,
                                    fillStyle: Mb.backgroundColor,
                                    strokeStyle: Mb.borderColor,
                                    fontColor: Jb,
                                    lineWidth: Mb.borderWidth,
                                    pointStyle: Ib,
                                    hidden: !Gb.getDataVisibility(Lb),
                                    index: Lb
                                };
                            });
                        }
                        return [];
                    }
                },
                onClick(Gb, Hb, Ib) {
                    Ib.chart.toggleDataVisibility(Hb.index), Ib.chart.update();
                }
            }
        }
    });
    class _Gb extends db {
        initialize() {
            this.enableOptionSharing = !0, this.supportsDecimation = !0, super.initialize();
        }
        update(Hb) {
            const Ib = this._cachedMeta,
                {
                    dataset: Jb,
                    data: Kb = [],
                    _dataset: Lb
                } = Ib,
                Mb = this.chart._animationsDisabled;
            let {
                start: Nb,
                count: Ob
            } = (0, Db.q)(Ib, Kb, Mb);
            this._drawStart = Nb, this._drawCount = Ob, (0, Db.w)(Ib) && (Nb = 0, Ob = Kb.length), Jb._chart = this.chart, Jb._datasetIndex = this.index, Jb._decimated = !!Lb._decimated, Jb.points = Kb;
            const Pb = this.resolveDatasetElementOptions(Hb);
            this.options.showLine || (Pb.borderWidth = 0), Pb.segment = this.options.segment, this.updateElement(Jb, void 0, {
                animated: !Mb,
                options: Pb
            }, Hb), this.updateElements(Kb, Nb, Ob, Hb);
        }
        updateElements(Hb, Ib, Jb, Kb) {
            const Lb = 'reset' === Kb,
                {
                    iScale: Mb,
                    vScale: Nb,
                    _stacked: Ob,
                    _dataset: Pb
                } = this._cachedMeta,
                {
                    sharedOptions: Qb,
                    includeOptions: Rb
                } = this._getSharedOptions(Ib, Kb),
                Sb = Mb.axis,
                Tb = Nb.axis,
                {
                    spanGaps: Ub,
                    segment: Vb
                } = this.options,
                Wb = (0, Db.x)(Ub) ? Ub : Number.POSITIVE_INFINITY,
                Xb = this.chart._animationsDisabled || Lb || 'none' === Kb,
                Yb = Ib + Jb,
                Zb = Hb.length;
            let $b = Ib > 0 && this.getParsed(Ib - 1);
            for (let ac = 0; ac < Zb; ++ac) {
                const bc = Hb[ac],
                    cc = Xb ? bc : {};
                if (ac < Ib || ac >= Yb) {
                    cc.skip = !0;
                    continue;
                }
                const dc = this.getParsed(ac),
                    ec = (0, Db.k)(dc[Tb]),
                    fc = cc[Sb] = Mb.getPixelForValue(dc[Sb], ac),
                    gc = cc[Tb] = Lb || ec ? Nb.getBasePixel() : Nb.getPixelForValue(Ob ? this.applyStack(Nb, dc, Ob) : dc[Tb], ac);
                cc.skip = isNaN(fc) || isNaN(gc) || ec, cc.stop = ac > 0 && Math.abs(dc[Sb] - $b[Sb]) > Wb, Vb && (cc.parsed = dc, cc.raw = Pb.data[ac]), Rb && (cc.options = Qb || this.resolveDataElementOptions(ac, bc.active ? 'active' : Kb)), Xb || this.updateElement(bc, ac, cc, Kb), $b = dc;
            }
        }
        getMaxOverflow() {
            const Hb = this._cachedMeta,
                Ib = Hb.dataset,
                Jb = Ib.options && Ib.options.borderWidth || 0,
                Kb = Hb.data || [];
            if (!Kb.length)
                return Jb;
            const Lb = Kb[0].size(this.resolveDataElementOptions(0)),
                Mb = Kb[Kb.length - 1].size(this.resolveDataElementOptions(Kb.length - 1));
            return Math.max(Jb, Lb, Mb) / 2;
        }
        draw() {
            const Hb = this._cachedMeta;
            Hb.dataset.updateControlPoints(this.chart.chartArea, Hb.iScale.axis), super.draw();
        }
    }
    (0, Cb.default)(_Gb, 'id', 'line'), (0, Cb.default)(_Gb, 'defaults', {
        datasetElementType: 'line',
        dataElementType: 'point',
        showLine: !0,
        spanGaps: !1
    }), (0, Cb.default)(_Gb, 'overrides', {
        scales: {
            _index_: {
                type: 'category'
            },
            _value_: {
                type: 'linear'
            }
        }
    });
    class _Hb extends db {
        getLabelAndValue(Ib) {
            const Jb = this._cachedMeta,
                Kb = this.chart,
                Lb = Kb.data.labels || [],
                Mb = (0, Db.o)(Jb._parsed[Ib].r, Kb.options.locale);
            return {
                label: Lb[Ib] || '',
                value: Mb
            };
        }
        parseObjectData(Ib, Jb, Kb, Lb) {
            return Db.y.bind(this)(Ib, Jb, Kb, Lb);
        }
        update(Ib) {
            const Jb = this._cachedMeta.data;
            this._updateRadius(), this.updateElements(Jb, 0, Jb.length, Ib);
        }
        getMinMax() {
            const Ib = this._cachedMeta,
                Jb = {
                    min: Number.POSITIVE_INFINITY,
                    max: Number.NEGATIVE_INFINITY
                };
            return Ib.data.forEach((Kb, Lb) => {
                const Mb = this.getParsed(Lb).r;
                !isNaN(Mb) && this.chart.getDataVisibility(Lb) && (Mb < Jb.min && (Jb.min = Mb), Mb > Jb.max && (Jb.max = Mb));
            }), Jb;
        }
        _updateRadius() {
            const Ib = this.chart,
                Jb = Ib.chartArea,
                Kb = Ib.options,
                Lb = Math.min(Jb.right - Jb.left, Jb.bottom - Jb.top),
                Mb = Math.max(Lb / 2, 0),
                Nb = (Mb - Math.max(Kb.cutoutPercentage ? Mb / 100 * Kb.cutoutPercentage : 1, 0)) / Ib.getVisibleDatasetCount();
            this.outerRadius = Mb - Nb * this.index, this.innerRadius = this.outerRadius - Nb;
        }
        updateElements(Ib, Jb, Kb, Lb) {
            const Mb = 'reset' === Lb,
                Nb = this.chart,
                Ob = Nb.options.animation,
                Pb = this._cachedMeta.rScale,
                Qb = Pb.xCenter,
                Rb = Pb.yCenter,
                Sb = Pb.getIndexAngle(0) - 0.5 * Db.P;
            let Tb, Ub = Sb;
            const Vb = 360 / this.countVisibleElements();
            for (Tb = 0; Tb < Jb; ++Tb)
                Ub += this._computeAngle(Tb, Lb, Vb);
            for (Tb = Jb; Tb < Jb + Kb; Tb++) {
                const Wb = Ib[Tb];
                let Xb = Ub,
                    Yb = Ub + this._computeAngle(Tb, Lb, Vb),
                    Zb = Nb.getDataVisibility(Tb) ? Pb.getDistanceFromCenterForValue(this.getParsed(Tb).r) : 0;
                Ub = Yb, Mb && (Ob.animateScale && (Zb = 0), Ob.animateRotate && (Xb = Yb = Sb));
                const $b = {
                    x: Qb,
                    y: Rb,
                    innerRadius: 0,
                    outerRadius: Zb,
                    startAngle: Xb,
                    endAngle: Yb,
                    options: this.resolveDataElementOptions(Tb, Wb.active ? 'active' : Lb)
                };
                this.updateElement(Wb, Tb, $b, Lb);
            }
        }
        countVisibleElements() {
            const Ib = this._cachedMeta;
            let Jb = 0;
            return Ib.data.forEach((Kb, Lb) => {
                !isNaN(this.getParsed(Lb).r) && this.chart.getDataVisibility(Lb) && Jb++;
            }), Jb;
        }
        _computeAngle(Ib, Jb, Kb) {
            return this.chart.getDataVisibility(Ib) ? (0, Db.t)(this.resolveDataElementOptions(Ib, Jb).angle || Kb) : 0;
        }
        constructor(Ib, Jb) {
            super(Ib, Jb), this.innerRadius = void 0, this.outerRadius = void 0;
        }
    }
    (0, Cb.default)(_Hb, 'id', 'polarArea'), (0, Cb.default)(_Hb, 'defaults', {
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
    }), (0, Cb.default)(_Hb, 'overrides', {
        aspectRatio: 1,
        plugins: {
            legend: {
                labels: {
                    generateLabels(Ib) {
                        const Jb = Ib.data;
                        if (Jb.labels.length && Jb.datasets.length) {
                            const {
                                labels: {
                                    pointStyle: Kb,
                                    color: Lb
                                }
                            } = Ib.legend.options;
                            return Jb.labels.map((Mb, Nb) => {
                                const Ob = Ib.getDatasetMeta(0).controller.getStyle(Nb);
                                return {
                                    text: Mb,
                                    fillStyle: Ob.backgroundColor,
                                    strokeStyle: Ob.borderColor,
                                    fontColor: Lb,
                                    lineWidth: Ob.borderWidth,
                                    pointStyle: Kb,
                                    hidden: !Ib.getDataVisibility(Nb),
                                    index: Nb
                                };
                            });
                        }
                        return [];
                    }
                },
                onClick(Ib, Jb, Kb) {
                    Kb.chart.toggleDataVisibility(Jb.index), Kb.chart.update();
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
    class _Ib extends _Fb {}
    (0, Cb.default)(_Ib, 'id', 'pie'), (0, Cb.default)(_Ib, 'defaults', {
        cutout: 0,
        rotation: 0,
        circumference: 360,
        radius: '100%'
    });
    class _Jb extends db {
        getLabelAndValue(Kb) {
            const Lb = this._cachedMeta.vScale,
                Mb = this.getParsed(Kb);
            return {
                label: Lb.getLabels()[Kb],
                value: '' + Lb.getLabelForValue(Mb[Lb.axis])
            };
        }
        parseObjectData(Kb, Lb, Mb, Nb) {
            return Db.y.bind(this)(Kb, Lb, Mb, Nb);
        }
        update(Kb) {
            const Lb = this._cachedMeta,
                Mb = Lb.dataset,
                Nb = Lb.data || [],
                Ob = Lb.iScale.getLabels();
            if (Mb.points = Nb, 'resize' !== Kb) {
                const Pb = this.resolveDatasetElementOptions(Kb);
                this.options.showLine || (Pb.borderWidth = 0);
                const Qb = {
                    _loop: !0,
                    _fullLoop: Ob.length === Nb.length,
                    options: Pb
                };
                this.updateElement(Mb, void 0, Qb, Kb);
            }
            this.updateElements(Nb, 0, Nb.length, Kb);
        }
        updateElements(Kb, Lb, Mb, Nb) {
            const Ob = this._cachedMeta.rScale,
                Pb = 'reset' === Nb;
            for (let Qb = Lb; Qb < Lb + Mb; Qb++) {
                const Rb = Kb[Qb],
                    Sb = this.resolveDataElementOptions(Qb, Rb.active ? 'active' : Nb),
                    Tb = Ob.getPointPositionForValue(Qb, this.getParsed(Qb).r),
                    Ub = Pb ? Ob.xCenter : Tb.x,
                    Vb = Pb ? Ob.yCenter : Tb.y,
                    Wb = {
                        x: Ub,
                        y: Vb,
                        angle: Tb.angle,
                        skip: isNaN(Ub) || isNaN(Vb),
                        options: Sb
                    };
                this.updateElement(Rb, Qb, Wb, Nb);
            }
        }
    }
    (0, Cb.default)(_Jb, 'id', 'radar'), (0, Cb.default)(_Jb, 'defaults', {
        datasetElementType: 'line',
        dataElementType: 'point',
        indexAxis: 'r',
        showLine: !0,
        elements: {
            line: {
                fill: 'start'
            }
        }
    }), (0, Cb.default)(_Jb, 'overrides', {
        aspectRatio: 1,
        scales: {
            r: {
                type: 'radialLinear'
            }
        }
    });
    class _Kb extends db {
        getLabelAndValue(Lb) {
            const Mb = this._cachedMeta,
                Nb = this.chart.data.labels || [],
                {
                    xScale: Ob,
                    yScale: Pb
                } = Mb,
                Qb = this.getParsed(Lb),
                Rb = Ob.getLabelForValue(Qb.x),
                Sb = Pb.getLabelForValue(Qb.y);
            return {
                label: Nb[Lb] || '',
                value: '(' + Rb + ', ' + Sb + ')'
            };
        }
        update(Lb) {
            const Mb = this._cachedMeta,
                {
                    data: Nb = []
                } = Mb,
                Ob = this.chart._animationsDisabled;
            let {
                start: Pb,
                count: Qb
            } = (0, Db.q)(Mb, Nb, Ob);
            if (this._drawStart = Pb, this._drawCount = Qb, (0, Db.w)(Mb) && (Pb = 0, Qb = Nb.length), this.options.showLine) {
                const {
                    dataset: Rb,
                    _dataset: Sb
                } = Mb;
                Pb._chart = this.chart, Pb._datasetIndex = this.index, Pb._decimated = !!Sb._decimated, Pb.points = Nb;
                const Tb = this.resolveDatasetElementOptions(Lb);
                Qb.segment = this.options.segment, this.updateElement(Pb, void 0, {
                    animated: !Ob,
                    options: Qb
                }, Lb);
            }
            this.updateElements(Nb, Pb, Qb, Lb);
        }
        addElements() {
            const {
                showLine: Lb
            } = this.options;
            !this.datasetElementType && Lb && (this.datasetElementType = this.chart.registry.getElement('line')), super.addElements();
        }
        updateElements(Lb, Mb, Nb, Ob) {
            const Pb = 'reset' === Ob,
                {
                    iScale: Qb,
                    vScale: Rb,
                    _stacked: Sb,
                    _dataset: Tb
                } = this._cachedMeta,
                Ub = this.resolveDataElementOptions(Mb, Ob),
                Vb = this.getSharedOptions(Ub),
                Wb = this.includeOptions(Ob, Vb),
                Xb = Qb.axis,
                Yb = Rb.axis,
                {
                    spanGaps: Zb,
                    segment: $b
                } = this.options,
                ac = (0, Db.x)(Zb) ? Zb : Number.POSITIVE_INFINITY,
                bc = this.chart._animationsDisabled || Pb || 'none' === Ob;
            let cc = Mb > 0 && this.getParsed(Mb - 1);
            for (let dc = Mb; dc < Mb + Nb; ++dc) {
                const ec = Lb[dc],
                    fc = this.getParsed(dc),
                    gc = bc ? ec : {},
                    hc = (0, Db.k)(fc[Yb]),
                    ic = gc[Xb] = Qb.getPixelForValue(fc[Xb], dc),
                    jc = gc[Yb] = Pb || hc ? Rb.getBasePixel() : Rb.getPixelForValue(Sb ? this.applyStack(Rb, fc, Sb) : fc[Yb], dc);
                gc.skip = isNaN(ic) || isNaN(jc) || hc, gc.stop = dc > 0 && Math.abs(fc[Xb] - cc[Xb]) > ac, $b && (gc.parsed = fc, gc.raw = Tb.data[dc]), Wb && (gc.options = Vb || this.resolveDataElementOptions(dc, ec.active ? 'active' : Ob)), bc || this.updateElement(ec, dc, gc, Ob), cc = fc;
            }
            this.updateSharedOptions(Vb, Ob, dc);
        }
        getMaxOverflow() {
            const Lb = this._cachedMeta,
                Mb = Lb.data || [];
            if (!this.options.showLine) {
                let Nb = 0;
                for (let Ob = Mb.length - 1; Ob >= 0; --Ob)
                    Nb = Math.max(Nb, Mb[Ob].size(this.resolveDataElementOptions(Ob)) / 2);
                return Nb > 0 && Nb;
            }
            const Nb = Lb.dataset,
                Ob = Nb.options && Nb.options.borderWidth || 0;
            if (!Mb.length)
                return Ob;
            const Pb = Mb[0].size(this.resolveDataElementOptions(0)),
                Qb = Mb[Mb.length - 1].size(this.resolveDataElementOptions(Mb.length - 1));
            return Math.max(Ob, Pb, Qb) / 2;
        }
    }
    (0, Cb.default)(_Kb, 'id', 'scatter'), (0, Cb.default)(_Kb, 'defaults', {
        datasetElementType: !1,
        dataElementType: 'point',
        showLine: !1,
        fill: !1
    }), (0, Cb.default)(_Kb, 'overrides', {
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

    function Lb() {
        throw new Error('This method is not implemented: Check that a complete date adapter is provided.');
    }
    class Mb {
        static override(Nb) {
            Object.assign(Mb.prototype, Nb);
        }
        init() {}
        formats() {
            return Lb();
        }
        parse() {
            return Lb();
        }
        format() {
            return Lb();
        }
        add() {
            return Lb();
        }
        diff() {
            return Lb();
        }
        startOf() {
            return Lb();
        }
        endOf() {
            return Lb();
        }
        constructor(Nb) {
            this.options = Nb || {};
        }
    }
    var Nb = Mb;

    function Ob(Pb, Qb, Rb, Sb) {
        const {
            controller: Tb,
            data: Ub,
            _sorted: Vb
        } = Pb, Wb = Tb._cachedMeta.iScale;
        if (Wb && Qb === Wb.axis && 'r' !== Qb && Vb && h.length) {
            const Xb = Wb._reversePixels ? Db.A : Db.B;
            if (!Sb)
                return Pb(h, Qb, Rb);
            if (Tb._sharedOptions) {
                const Yb = h[0],
                    Zb = 'function' == typeof Sb.getRange && Sb.getRange(Qb);
                if (Zb) {
                    const $b = Pb(h, Qb, Rb - Zb),
                        ac = Pb(h, Qb, Rb + Zb);
                    return {
                        lo: Sb.lo,
                        hi: ac.hi
                    };
                }
            }
        }
        return {
            lo: 0,
            hi: h.length - 1
        };
    }

    function Yb(Zb, $b, ac, bc, cc) {
        const dc = Zb.getSortedVisibleDatasetMetas(),
            ec = ac[$b];
        for (let fc = 0, gc = dc.length; fc < gc; ++fc) {
            const {
                index: hc,
                data: ic
            } = dc[fc], {
                lo: jc,
                hi: kc
            } = Ob(dc[fc], $b, h, cc);
            for (let lc = jc; lc <= kc; ++lc) {
                const mc = ic[lc];
                $b.skip || bc($b, gc, lc);
            }
        }
    }

    function fc(gc, hc, ic, jc, kc) {
        const lc = [];
        if (!kc && !gc.isPointInArea(hc))
            return h;
        return Yb(gc, ic, hc, function(mc, nc, oc) {
            (kc || (0, dc.C)(mc, gc.chartArea, 0)) && mc.inRange(hc.x, hc.y, jc) && h.push({
                element: mc,
                datasetIndex: nc,
                index: oc
            });
        }, !0), h;
    }

    function hc(ic, jc, kc, lc, mc, nc) {
        let oc = [];
        const pc = function(qc) {
            const rc = -1 !== qc.indexOf('x'),
                sc = -1 !== qc.indexOf('y');
            return function(tc, uc) {
                const vc = rc ? Math.abs(tc.x - uc.x) : 0,
                    wc = sc ? Math.abs(tc.y - uc.y) : 0;
                return Math.sqrt(Math.pow(vc, 2) + Math.pow(wc, 2));
            };
        }(kc);
        let qc = Number.POSITIVE_INFINITY;
        return Yb(ic, kc, jc, function(rc, sc, tc) {
            const uc = rc.inRange(jc.x, jc.y, mc);
            if (lc && !uc)
                return;
            const vc = rc.getCenterPoint(mc);
            if (!(!!nc || ic.isPointInArea(vc)) && !uc)
                return;
            const wc = pc(jc, vc);
            wc < qc ? (oc = [{
                element: rc,
                datasetIndex: sc,
                index: tc
            }], qc = wc) : wc === qc && oc.push({
                element: rc,
                datasetIndex: sc,
                index: tc
            });
        }), oc;
    }

    function jc(kc, lc, mc, nc, oc, pc) {
        return pc || kc.isPointInArea(lc) ? 'r' !== mc || nc ? hc(kc, lc, mc, nc, oc, pc) : function(qc, rc, sc, tc) {
            let uc = [];
            return Yb(qc, sc, rc, function(vc, wc, xc) {
                const {
                    startAngle: yc,
                    endAngle: zc
                } = vc.getProps([
                    'startAngle',
                    'endAngle'
                ], tc), {
                    angle: Ac
                } = (0, dc.D)(vc, {
                    x: rc.x,
                    y: rc.y
                });
                (0, dc.p)(Ac, yc, zc) && uc.push({
                    element: vc,
                    datasetIndex: wc,
                    index: xc
                });
            }), uc;
        }(kc, lc, mc, oc) : [];
    }

    function kc(lc, mc, nc, oc, pc) {
        const qc = [],
            rc = 'x' === nc ? 'inXRange' : 'inYRange';
        let sc = !1;
        return Yb(lc, nc, mc, (tc, uc, vc) => {
            tc[h](mc[nc], pc) && (qc.push({
                element: tc,
                datasetIndex: uc,
                index: vc
            }), sc = sc || tc.inRange(mc.x, mc.y, pc));
        }), oc && !sc ? [] : qc;
    }
    var nc = {
        evaluateInteractionItems: Yb,
        modes: {
            index(oc, pc, qc, rc) {
                const sc = (0, qc.z)(pc, oc),
                    tc = qc.axis || 'x',
                    uc = qc.includeInvisible || !1,
                    vc = qc.intersect ? fc(oc, sc, tc, rc, uc) : jc(oc, sc, tc, !1, rc, uc),
                    wc = [];
                return vc.length ? (oc.getSortedVisibleDatasetMetas().forEach(xc => {
                    const yc = vc[0].index,
                        zc = xc.data[yc];
                    zc && !zc.skip && wc.push({
                        element: zc,
                        datasetIndex: xc.index,
                        index: yc
                    });
                }), wc) : [];
            },
            dataset(oc, pc, qc, rc) {
                const sc = (0, qc.z)(pc, oc),
                    tc = qc.axis || 'xy',
                    uc = qc.includeInvisible || !1;
                let vc = qc.intersect ? fc(oc, sc, tc, rc, uc) : jc(oc, sc, tc, !1, rc, uc);
                if (vc.length > 0) {
                    const wc = vc[0].datasetIndex,
                        xc = oc.getDatasetMeta(wc).data;
                    vc = [];
                    for (let yc = 0; yc < xc.length; ++yc)
                        vc.push({
                            element: xc[yc],
                            datasetIndex: wc,
                            index: yc
                        });
                }
                return vc;
            },
            point: (oc, pc, qc, rc) => fc(oc, (0, qc.z)(pc, oc), qc.axis || 'xy', rc, qc.includeInvisible || !1),
            nearest(oc, pc, qc, rc) {
                const sc = (0, qc.z)(pc, oc),
                    tc = qc.axis || 'xy',
                    uc = qc.includeInvisible || !1;
                return jc(oc, sc, tc, qc.intersect, rc, uc);
            },
            x: (oc, pc, qc, rc) => kc(oc, (0, qc.z)(pc, oc), 'x', qc.intersect, rc),
            y: (oc, pc, qc, rc) => kc(oc, (0, qc.z)(pc, oc), 'y', qc.intersect, rc)
        }
    };
    const oc = [
        'left',
        'top',
        'right',
        'bottom'
    ];

    function pc(qc, rc) {
        return qc.filter(sc => sc.pos === rc);
    }

    function qc(rc, sc) {
        return rc.filter(tc => -1 === oc.indexOf(tc.pos) && tc.box.axis === sc);
    }

    function rc(sc, tc) {
        return sc.sort((uc, vc) => {
            const wc = tc ? vc : uc,
                xc = tc ? uc : vc;
            return wc.weight === xc.weight ? wc.index - xc.index : wc.weight - xc.weight;
        });
    }

    function sc(tc, uc) {
        const vc = function(wc) {
                const xc = {};
                for (const yc of wc) {
                    const {
                        stack: zc,
                        pos: Ac,
                        stackWeight: Bc
                    } = yc;
                    if (!zc || !oc.includes(Ac))
                        continue;
                    const Cc = xc[zc] || (xc[zc] = {
                        count: 0,
                        placed: 0,
                        weight: 0,
                        size: 0
                    });
                    Cc.count++, Cc.weight += Bc;
                }
                return xc;
            }(tc),
            {
                vBoxMaxWidth: wc,
                hBoxMaxHeight: xc
            } = uc;
        let yc, zc, Ac;
        for (yc = 0, zc = tc.length; yc < zc; ++yc) {
            Ac = tc[yc];
            const {
                fullSize: Bc
            } = Ac.box, Cc = vc[Ac.stack], Dc = Cc && Ac.stackWeight / Cc.weight;
            Ac.horizontal ? (Ac.width = Dc ? Dc * wc : zc && uc.availableWidth, Ac.height = xc) : (Ac.width = wc, Ac.height = Dc ? Dc * xc : zc && uc.availableHeight);
        }
        return vc;
    }

    function zc(Ac, Bc, Cc, Dc) {
        return Math.max(Ac[Cc], Bc[Cc]) + Math.max(Ac[Dc], Bc[Dc]);
    }

    function Ac(Bc, Cc) {
        Bc.top = Math.max(Bc.top, Cc.top), Bc.left = Math.max(Bc.left, Cc.left), Bc.bottom = Math.max(Bc.bottom, Cc.bottom), Bc.right = Math.max(Bc.right, Cc.right);
    }

    function Bc(Cc, Dc, Ec, Fc) {
        const {
            pos: Gc,
            box: Hc
        } = Ec, Ic = Cc.maxPadding;
        if (!(0, qc.i)(Gc)) {
            Ec.size && (Cc[Gc] -= Ec.size);
            const Jc = Fc[Ec.stack] || {
                size: 0,
                count: 1
            };
            Dc.size = Math.max(Dc.size, Ec.horizontal ? h.height : h.width), Ec.size = Dc.size / Dc.count, Cc[Gc] += Ec.size;
        }
        h.getPadding && Ac(Ic, h.getPadding());
        const Kc = Math.max(0, Dc.outerWidth - zc(Ic, Cc, 'left', 'right')),
            Lc = Math.max(0, Dc.outerHeight - zc(Ic, Cc, 'top', 'bottom')),
            Mc = Kc !== Cc.w,
            Nc = Lc !== Cc.h;
        return Cc.w = Kc, Cc.h = Lc, Ec.horizontal ? {
            same: l,
            other: m
        } : {
            same: m,
            other: l
        };
    }

    function Kc(Lc, Mc) {
        const Nc = Mc.maxPadding;

        function Oc(Pc) {
            const Qc = {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            };
            return Pc.forEach(Rc => {
                Oc[Rc] = Math.max(Mc[Rc], Nc[Rc]);
            }), Oc;
        }
        return Oc(Lc ? [
            'left',
            'right'
        ] : [
            'top',
            'bottom'
        ]);
    }

    function Nc(Oc, Pc, Qc, Rc) {
        const Sc = [];
        let Tc, Uc, Vc, Wc, Xc, Yc;
        for (Tc = 0, Uc = Oc.length, Xc = 0; Tc < Uc; ++Tc) {
            Vc = Oc[Tc], Wc = Vc.box, Wc.update(Vc.width || Pc.w, Vc.height || Pc.h, Kc(Vc.horizontal, Pc));
            const {
                same: Zc,
                other: $c
            } = Bc(Pc, Qc, Vc, Rc);
            Xc |= Uc && Sc.length, Yc = Yc || m, Wc.fullSize || Sc.push(Vc);
        }
        return Xc && Nc(Sc, Pc, Qc, Rc) || Yc;
    }

    function Rc(Sc, Tc, Uc, Vc, Wc) {
        Sc.top = Uc, Sc.left = Tc, Sc.right = Tc + Vc, Sc.bottom = Uc + Wc, Sc.width = Vc, Sc.height = Wc;
    }

    function Sc(Tc, Uc, Vc, Wc) {
        const Xc = Vc.padding;
        let {
            x: Yc,
            y: Zc
        } = Uc;
        for (const $c of Tc) {
            const ad = $c.box,
                bd = Wc[$c.stack] || {
                    count: 1,
                    placed: 0,
                    weight: 1
                },
                cd = $c.stackWeight / bd.weight || 1;
            if ($c.horizontal) {
                const dd = Uc.w * l,
                    ed = bd.size || Tc.height;
                (0, qc.h)(bd.start) && (Zc = bd.start), Tc.fullSize ? Rc(Tc, Xc.left, Zc, Vc.outerWidth - Xc.right - Xc.left, Yc) : Rc(Tc, Uc.left + bd.placed, Zc, Wc, Yc), bd.start = Zc, bd.placed += Wc, Zc = Tc.bottom;
            } else {
                const fd = Uc.h * l,
                    gd = bd.size || Tc.width;
                (0, qc.h)(bd.start) && (Yc = bd.start), Tc.fullSize ? Rc(Tc, Yc, Xc.top, Zc, Vc.outerHeight - Xc.bottom - Xc.top) : Rc(Tc, Yc, Uc.top + bd.placed, Zc, Wc), bd.start = Yc, bd.placed += Wc, Yc = Tc.right;
            }
        }
        Uc.x = Yc, Uc.y = Zc;
    }
    var bd = {
        addBox(cd, dd) {
            cd.boxes || (cd.boxes = []), dd.fullSize = dd.fullSize || !1, dd.position = dd.position || 'top', dd.weight = dd.weight || 0, dd._layers = dd._layers || function() {
                return [{
                    z: 0,
                    draw(ed) {
                        dd.draw(ed);
                    }
                }];
            }, cd.boxes.push(dd);
        },
        removeBox(cd, dd) {
            const ed = cd.boxes ? cd.boxes.indexOf(dd) : -1; -
            1 !== ed && cd.boxes.splice(ed, 1);
        },
        configure(cd, dd, ed) {
            dd.fullSize = ed.fullSize, dd.position = ed.position, dd.weight = ed.weight;
        },
        update(cd, dd, ed, fd) {
            if (!cd)
                return;
            const gd = (0, qc.E)(cd.options.layout.padding),
                hd = Math.max(dd - gd.width, 0),
                id = Math.max(ed - gd.height, 0),
                jd = function(kd) {
                    const ld = function(md) {
                            const nd = [];
                            let od, pd, qd, rd, sd, td;
                            for (od = 0, pd = (md || []).length; od < pd; ++od)
                                qd = md[od], {
                                    position: ud,
                                    options: {
                                        stack: vd,
                                        stackWeight: wd = 1
                                    }
                                } = qd, nd.push({
                                    index: od,
                                    box: qd,
                                    pos: ud,
                                    horizontal: qd.isHorizontal(),
                                    weight: qd.weight,
                                    stack: vd && ud + vd,
                                    stackWeight: wd
                                });
                            return nd;
                        }(kd),
                        md = rc(ld.filter(nd => nd.box.fullSize), !0),
                        nd = rc(pc(ld, 'left'), !0),
                        od = rc(pc(ld, 'right')),
                        pd = rc(pc(ld, 'top'), !0),
                        qd = rc(pc(ld, 'bottom')),
                        rd = qc(ld, 'x'),
                        sd = qc(ld, 'y');
                    return {
                        fullSize: md,
                        leftAndTop: nd.concat(pd),
                        rightAndBottom: od.concat(sd).concat(qd).concat(rd),
                        chartArea: pc(ld, 'chartArea'),
                        vertical: nd.concat(od).concat(sd),
                        horizontal: pd.concat(qd).concat(rd)
                    };
                }(cd.boxes),
                kd = jd.vertical,
                ld = jd.horizontal;
            (0, qc.F)(cd.boxes, md => {
                'function' == typeof md.beforeLayout && md.beforeLayout();
            });
            const md = kd.reduce((nd, od) => od.box.options && !1 === od.box.options.display ? nd : nd + 1, 0) || 1,
                nd = Object.freeze({
                    outerWidth: dd,
                    outerHeight: ed,
                    padding: gd,
                    availableWidth: hd,
                    availableHeight: id,
                    vBoxMaxWidth: hd / 2 / md,
                    hBoxMaxHeight: id / 2
                }),
                od = Object.assign({}, gd);
            Ac(od, (0, qc.E)(fd));
            const pd = Object.assign({
                    maxPadding: od,
                    w: hd,
                    h: id,
                    x: gd.left,
                    y: gd.top
                }, gd),
                qd = sc(kd.concat(ld), nd);
            Nc(jd.fullSize, pd, nd, qd), Nc(kd, pd, nd, qd), Nc(ld, pd, nd, qd) && Nc(kd, pd, nd, qd),
                function(rd) {
                    const sd = rd.maxPadding;

                    function td(ud) {
                        const vd = Math.max(sd[ud] - rd[ud], 0);
                        return rd[ud] += vd, vd;
                    }
                    rd.y += td('top'), rd.x += td('left'), td('.....'), td('bottom');
                }(pd), Sc(jd.leftAndTop, pd, nd, qd), pd.x += pd.w, pd.y += pd.h, Sc(jd.rightAndBottom, pd, nd, qd), cd.chartArea = {
                    left: pd.left,
                    top: pd.top,
                    right: pd.left + pd.w,
                    bottom: pd.top + pd.h,
                    height: pd.h,
                    width: pd.w
                }, (0, qc.F)(jd.chartArea, rd => {
                    const sd = rd.box;
                    Object.assign(sd, cd.chartArea), sd.update(pd.w, pd.h, {
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0
                    });
                });
        }
    };
    class cd {
        acquireContext(dd, ed) {}
        releaseContext(dd) {
            return !1;
        }
        addEventListener(dd, ed, fd) {}
        removeEventListener(dd, ed, fd) {}
        getDevicePixelRatio() {
            return 1;
        }
        getMaximumSize(dd, ed, fd, gd) {
            return ed = Math.max(0, ed || dd.width), fd = fd || dd.height, {
                width: ed,
                height: Math.max(0, gd ? Math.floor(ed / gd) : fd)
            };
        }
        isAttached(dd) {
            return !0;
        }
        updateConfig(dd) {}
    }
    class dd extends cd {
        acquireContext(ed) {
            return ed && ed.getContext && ed.getContext('2d') || null;
        }
        updateConfig(ed) {
            ed.options.animation = !1;
        }
    }
    const ed = '$chartjs',
        fd = {
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
        gd = hd => null === hd || '' === hd;
    const hd = !!qc.K && {
        passive: !0
    };

    function id(jd, kd, ld) {
        jd.canvas.removeEventListener(kd, ld, hd);
    }

    function jd(kd, ld) {
        for (const md of kd)
            if (md === ld || md.contains(ld))
                return !0;
    }

    function ld(md, nd, od) {
        const pd = md.canvas,
            qd = new MutationObserver(rd => {
                let sd = !1;
                for (const td of rd)
                    sd = sd || jd(td.addedNodes, pd), sd = sd && !jd(td.removedNodes, pd);
                sd && td();
            });
        return qd.observe(document, {
            childList: !0,
            subtree: !0
        }), qd;
    }

    function od(pd, qd, rd) {
        const sd = pd.canvas,
            td = new MutationObserver(ud => {
                let vd = !1;
                for (const wd of ud)
                    vd = vd || jd(wd.removedNodes, sd), vd = vd && !jd(wd.addedNodes, sd);
                vd && wd();
            });
        return td.observe(document, {
            childList: !0,
            subtree: !0
        }), td;
    }
    const rd = new Map();
    let sd = 0;

    function td() {
        const ud = window.devicePixelRatio;
        ud !== sd && (sd = ud, rd.forEach((vd, wd) => {
            wd.currentDevicePixelRatio !== ud && vd();
        }));
    }

    function vd(wd, xd, yd) {
        const zd = wd.canvas,
            Ad = zd && (0, qc.I)(zd);
        if (!Ad)
            return;
        const Bd = (0, qc.L)((Cd, Dd) => {
                const Ed = Ad.clientWidth;
                yd(Cd, Dd), Ed < Ad.clientWidth && yd();
            }, window),
            Cd = new ResizeObserver(Dd => {
                const Ed = Dd[0],
                    Fd = Ed.contentRect.width,
                    Gd = Ed.contentRect.height;
                0 === Fd && 0 === Gd || h(Fd, Gd);
            });
        return Cd.observe(Ad),
            function(Dd, Ed) {
                rd.size || window.addEventListener('resize', td), rd.set(Dd, Ed);
            }(wd, h), Cd;
    }

    function Ad(Bd, Cd, Dd) {
        Dd && Dd.disconnect(), 'resize' === Cd && function(Ed) {
            rd.delete(Ed), rd.size || window.removeEventListener('resize', td);
        }(Bd);
    }

    function Bd(Cd, Dd, Ed) {
        const Fd = Cd.canvas,
            Gd = (0, qc.L)(Hd => {
                null !== Cd.ctx && Ed(function(Id, Jd) {
                    const Kd = fd[Id.type] || Id.type,
                        {
                            x: Ld,
                            y: Md
                        } = (0, qc.z)(Id, Jd);
                    return {
                        type: Kd,
                        chart: Jd,
                        native: Id,
                        x: void 0 !== Ld ? Ld : null,
                        y: void 0 !== Md ? Md : null
                    };
                }(Hd, Cd));
            }, Cd);
        return function(Hd, Id, Jd) {
            Hd.addEventListener(Id, Jd, hd);
        }(Fd, Dd, Gd), Gd;
    }
    class Ed extends cd {
        acquireContext(Fd, Gd) {
            const Hd = Fd && Fd.getContext && Fd.getContext('2d');
            return Hd && Hd.canvas === Fd ? (function(Id, Jd) {
                const Kd = Id.style,
                    Ld = Id.getAttribute('height'),
                    Md = Id.getAttribute('width');
                if (Id[ed] = {
                        initial: {
                            height: Ld,
                            width: Md,
                            style: {
                                display: Kd.display,
                                height: Kd.height,
                                width: Kd.width
                            }
                        }
                    }, Kd.display = Kd.display || 'block', Kd.boxSizing = Kd.boxSizing || 'border-box', gd(Md)) {
                    const Nd = (0, qc.J)(Id, 'width');
                    void 0 !== Nd && (Id.width = Nd);
                }
                if (gd(Ld))
                    if ('' === Id.style.height)
                        Id.height = Id.width / (Nd || 2);
                    else {
                        const Od = (0, qc.J)(Id, 'height');
                        void 0 !== Od && (Id.height = Od);
                    }
            }(Fd, Gd), Hd) : null;
        }
        releaseContext(Fd) {
            const Gd = Fd.canvas;
            if (!Gd[ed])
                return !1;
            const Hd = Gd[ed].initial;
            [
                'height',
                'width'
            ].forEach(Id => {
                const Jd = Hd[Id];
                (0, qc.k)(Jd) ? Gd.removeAttribute(Id): Gd.setAttribute(Id, Jd);
            });
            const Id = Hd.style || {};
            return Object.keys(Id).forEach(Jd => {
                Gd.style[Jd] = Id[Jd];
            }), Gd.width = Gd.width, delete Gd[ed], !0;
        }
        addEventListener(Fd, Gd, Hd) {
            this.removeEventListener(Fd, Gd);
            const Id = Fd.$proxies || (Fd.$proxies = {}),
                Jd = {
                    attach: ld,
                    detach: od,
                    resize: vd
                } [Gd] || Bd;
            Id[Gd] = Jd(Fd, Gd, Hd);
        }
        removeEventListener(Fd, Gd) {
            const Hd = Fd.$proxies || (Fd.$proxies = {}),
                Id = Hd[Gd];
            if (!Id)
                return;
            ({
                attach: Ad,
                detach: Ad,
                resize: Ad
            } [Gd] || id)(Fd, Gd, Id), Hd[Gd] = void 0;
        }
        getDevicePixelRatio() {
            return window.devicePixelRatio;
        }
        getMaximumSize(Fd, Gd, Hd, Id) {
            return (0, qc.G)(Fd, Gd, Hd, Id);
        }
        isAttached(Fd) {
            const Gd = (0, qc.I)(Fd);
            return !(!Gd || !Gd.isConnected);
        }
    }
    class Fd {
        tooltipPosition(Gd) {
            const {
                x: Hd,
                y: Id
            } = this.getProps([
                'x',
                'y'
            ], Gd);
            return {
                x: Hd,
                y: Id
            };
        }
        hasValue() {
            return (0, qc.x)(this.x) && (0, qc.x)(this.y);
        }
        getProps(Gd, Hd) {
            const Id = this.$animations;
            if (!Hd || !Id)
                return this;
            const Jd = {};
            return Gd.forEach(Kd => {
                Jd[Kd] = Id[Kd] && Id[Kd].active() ? Id[Kd]._to : this[Kd];
            }), Jd;
        }
        constructor() {
            (0, Gd.default)(this, 'active', !1);
        }
    }

    function Gd(Hd, Id) {
        const Jd = Hd.options.ticks,
            Kd = function(Ld) {
                const Md = Ld.options.offset,
                    Nd = Ld._tickSize(),
                    Od = Ld._length / Nd + (Md ? 0 : 1),
                    Pd = Ld._maxLength / Nd;
                return Math.floor(Math.min(Od, Pd));
            }(Hd),
            Ld = Math.min(Jd.maxTicksLimit || Kd, Kd),
            Md = Jd.major.enabled ? function(Nd) {
                const Od = [];
                let Pd, Qd;
                for (Pd = 0, Qd = Nd.length; Pd < Qd; Pd++)
                    Nd[Pd].major && Od.push(Pd);
                return Od;
            }(Id) : [],
            Nd = h.length,
            Od = h[0],
            Pd = h[Nd - 1],
            Qd = [];
        if (Nd > Ld)
            return function(Rd, Sd, Td, Ud) {
                let Vd, Wd = 0,
                    Xd = Td[0];
                for (Ud = Math.ceil(Ud), Vd = 0; Vd < Rd.length; Vd++)
                    Vd === Xd && (Sd.push(Rd[Vd]), Wd++, Xd = Td[Wd * Ud]);
            }(Id, l, h, Nd / Ld), l;
        const Rd = function(Sd, Td, Ud) {
            const Vd = function(Wd) {
                    const Xd = Wd.length;
                    let Yd, Zd;
                    if (Xd < 2)
                        return !1;
                    for (Zd = Wd[0], Yd = 1; Yd < Xd; ++Yd)
                        if (Wd[Yd] - Wd[Yd - 1] !== Zd)
                            return !1;
                    return Zd;
                }(Sd),
                Wd = Td.length / Ud;
            if (!Vd)
                return Math.max(Wd, 1);
            const Xd = (0, qc.N)(Vd);
            for (let Yd = 0, Zd = Xd.length - 1; Yd < Zd; Yd++) {
                const $d = Xd[Yd];
                if (Zd > Wd)
                    return Zd;
            }
            return Math.max(Wd, 1);
        }(h, Id, Ld);
        if (Nd > 0) {
            let Sd, Td;
            const Ud = Nd > 1 ? Math.round((Pd - Od) / (Nd - 1)) : null;
            for (_Rd(Id, l, m, (0, qc.k)(Ud) ? 0 : Od - Ud, Od), Sd = 0, Td = Nd - 1; Sd < Td; Sd++)
                _Rd(Id, l, m, h[Sd], h[Sd + 1]);
            return _Rd(Id, l, m, Pd, (0, qc.k)(Ud) ? Id.length : Pd + Ud), l;
        }
        return _Rd(Id, l, m), l;
    }

    function _Rd(Sd, Td, Ud, Vd, Wd) {
        const Xd = (0, qc.v)(Vd, 0),
            Yd = Math.min((0, qc.v)(Wd, Sd.length), Sd.length);
        let Zd, $d, ae, be = 0;
        for (Ud = Math.ceil(Ud), Wd && (Zd = Wd - Vd, Ud = Zd / Math.floor(Zd / Ud)), ae = h; ae < 0;)
            be++, ae = Math.round(h + be * Ud);
        for ($d = Math.max(h, 0); $d < Yd; $d++)
            $d === ae && (Td.push(Sd[$d]), be++, ae = Math.round(h + be * Ud));
    }
    (0, Ld.default)(Fd, 'defaults', {}), (0, Ld.default)(Fd, 'defaultRoutes', void 0);
    const Ud = (Vd, Wd, Xd) => 'top' === Wd || 'left' === Wd ? Vd[Wd] + Xd : Vd[Wd] - Xd;

    function Vd(Wd, Xd) {
        const Yd = [],
            Zd = Wd.length / Xd,
            $d = Wd.length;
        let ae = 0;
        for (; ae < $d; ae += Zd)
            Yd.push(Wd[Math.floor(ae)]);
        return Yd;
    }

    function Zd($d, ae, be) {
        const ce = $d.ticks.length,
            de = Math.min(ae, ce - 1),
            ee = $d._startPixel,
            fe = $d._endPixel,
            ge = 0.000001;
        let he, ie = $d.getPixelForTick(de);
        if (!(be && (he = 1 === ce ? Math.max(ie - ee, h - ie) : 0 === ae ? ($d.getPixelForTick(1) - ie) / 2 : (ie - $d.getPixelForTick(de - 1)) / 2, ie += de < ae ? he : -he, ie < ee - ge || ie > h + ge)))
            return ie;
    }

    function ee(fe) {
        return fe.drawTicks ? fe.tickLength : 0;
    }

    function fe(ge, he) {
        if (!ge.display)
            return 0;
        const ie = (0, ee.a0)(ge.font, he),
            je = (0, ee.E)(ge.padding);
        return ((0, ee.b)(ge.text) ? ge.text.length : 1) * ie.lineHeight + je.height;
    }

    function ie(je, ke, le) {
        let me = (0, ee.a1)(je);
        return (le && 'right' !== ke || !le && 'right' === ke) && (me = (ne => 'left' === ne ? 'right' : 'right' === ne ? 'left' : ne)(me)), me;
    }
    class je extends Fd {
        init(ke) {
            this.options = ke.setContext(this.getContext()), this.axis = ke.axis, this._userMin = this.parse(ke.min), this._userMax = this.parse(ke.max), this._suggestedMin = this.parse(ke.suggestedMin), this._suggestedMax = this.parse(ke.suggestedMax);
        }
        parse(ke, le) {
            return ke;
        }
        getUserBounds() {
            let {
                _userMin: ke,
                _userMax: le,
                _suggestedMin: me,
                _suggestedMax: ne
            } = this;
            return ke = (0, ee.O)(ke, Number.POSITIVE_INFINITY), le = (0, ee.O)(le, Number.NEGATIVE_INFINITY), me = (0, ee.O)(me, Number.POSITIVE_INFINITY), ne = (0, ee.O)(ne, Number.NEGATIVE_INFINITY), {
                min: (0, ee.O)(ke, me),
                max: (0, ee.O)(le, ne),
                minDefined: (0, ee.g)(ke),
                maxDefined: (0, ee.g)(le)
            };
        }
        getMinMax(ke) {
            let le, {
                min: me,
                max: ne,
                minDefined: oe,
                maxDefined: pe
            } = this.getUserBounds();
            if (oe && pe)
                return {
                    min: me,
                    max: ne
                };
            const qe = this.getMatchingVisibleMetas();
            for (let re = 0, se = qe.length; re < se; ++re)
                le = qe[re].controller.getMinMax(this, ke), oe || (me = Math.min(me, le.min)), pe || (ne = Math.max(ne, le.max));
            return me = pe && me > ne ? ne : me, ne = oe && me > ne ? me : ne, {
                min: (0, re.O)(me, (0, re.O)(ne, me)),
                max: (0, re.O)(ne, (0, re.O)(me, ne))
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
            const ke = this.chart.data;
            return this.options.labels || (this.isHorizontal() ? ke.xLabels : ke.yLabels) || ke.labels || [];
        }
        getLabelItems(ke = this.chart.chartArea) {
            return this._labelItems || (this._labelItems = this._computeLabelItems(ke));
        }
        beforeLayout() {
            this._cache = {}, this._dataLimitsCached = !1;
        }
        beforeUpdate() {
            (0, ee.Q)(this.options.beforeUpdate, [this]);
        }
        update(ke, le, me) {
            const {
                beginAtZero: ne,
                grace: oe,
                ticks: pe
            } = this.options, qe = pe.sampleSize;
            this.beforeUpdate(), this.maxWidth = ke, this.maxHeight = le, this._margins = me = Object.assign({
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }, me), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + me.left + me.right : this.height + me.top + me.bottom, this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = (0, ee.R)(this, oe, ne), this._dataLimitsCached = !0), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks();
            const re = qe < this.ticks.length;
            this._convertTicksToLabels(re ? Vd(this.ticks, qe) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), pe.display && (pe.autoSkip || 'auto' === pe.source) && (this.ticks = Gd(this, this.ticks), this._labelSizes = null, this.afterAutoSkip()), re && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate();
        }
        configure() {
            let ke, le, me = this.options.reverse;
            this.isHorizontal() ? (ke = this.left, le = this.right) : (ke = this.top, le = this.bottom, me = !me), this._startPixel = ke, this._endPixel = le, this._reversePixels = me, this._length = le - ke, this._alignToPixels = this.options.alignToPixels;
        }
        afterUpdate() {
            (0, ee.Q)(this.options.afterUpdate, [this]);
        }
        beforeSetDimensions() {
            (0, ee.Q)(this.options.beforeSetDimensions, [this]);
        }
        setDimensions() {
            this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0;
        }
        afterSetDimensions() {
            (0, ee.Q)(this.options.afterSetDimensions, [this]);
        }
        _callHooks(ke) {
            this.chart.notifyPlugins(ke, this.getContext()), (0, ee.Q)(this.options[ke], [this]);
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
            (0, ee.Q)(this.options.beforeTickToLabelConversion, [this]);
        }
        generateTickLabels(ke) {
            const le = this.options.ticks;
            let me, ne, oe;
            for (me = 0, ne = ke.length; me < ne; me++)
                oe = ke[me], oe.label = (0, ee.Q)(le.callback, [
                    oe.value,
                    me,
                    ke
                ], this);
        }
        afterTickToLabelConversion() {
            (0, ee.Q)(this.options.afterTickToLabelConversion, [this]);
        }
        beforeCalculateLabelRotation() {
            (0, ee.Q)(this.options.beforeCalculateLabelRotation, [this]);
        }
        calculateLabelRotation() {
            const ke = this.options,
                le = ke.ticks,
                me = this.ticks.length,
                ne = le.minRotation || 0,
                oe = le.maxRotation;
            let pe, qe, re, se = ne;
            if (!this._isVisible() || !le.display || ne >= oe || me <= 1 || !this.isHorizontal())
                return void(this.labelRotation = ne);
            const te = this._getLabelSizes(),
                ue = te.widest.width,
                ve = te.highest.height,
                we = (0, ee.S)(this.chart.width - ue, 0, this.maxWidth);
            pe = ke.offset ? this.maxWidth / me : we / (me - 1), ue + 6 > pe && (pe = we / (me - (ke.offset ? 0.5 : 1)), qe = this.maxHeight - ee(ke.grid) - le.padding - fe(ke.title, this.chart.options.font), re = Math.sqrt(ue * ue + ve * ve), se = (0, ee.U)(Math.min(Math.asin((0, ee.S)((te.highest.height + 6) / pe, -1, 1)), Math.asin((0, ee.S)(qe / re, -1, 1)) - Math.asin((0, ee.S)(ve / re, -1, 1)))), se = Math.max(ne, Math.min(oe, se))), this.labelRotation = se;
        }
        afterCalculateLabelRotation() {
            (0, ee.Q)(this.options.afterCalculateLabelRotation, [this]);
        }
        afterAutoSkip() {}
        beforeFit() {
            (0, ee.Q)(this.options.beforeFit, [this]);
        }
        fit() {
            const ke = {
                    width: 0,
                    height: 0
                },
                {
                    chart: le,
                    options: {
                        ticks: me,
                        title: ne,
                        grid: oe
                    }
                } = this,
                pe = this._isVisible(),
                qe = this.isHorizontal();
            if (pe) {
                const re = fe(ne, le.options.font);
                if (qe ? (ke.width = this.maxWidth, ke.height = ee(oe) + re) : (ke.height = this.maxHeight, ke.width = ee(oe) + re), me.display && this.ticks.length) {
                    const {
                        first: se,
                        last: te,
                        widest: ue,
                        highest: ve
                    } = this._getLabelSizes(), we = 2 * me.padding, xe = (0, ee.t)(this.labelRotation), ye = Math.cos(xe), ze = Math.sin(xe);
                    if (qe) {
                        const Ae = me.mirror ? 0 : ze * ue.width + ye * ve.height;
                        ke.height = Math.min(this.maxHeight, ke.height + Ae + we);
                    } else {
                        const Be = me.mirror ? 0 : ye * ue.width + ze * ve.height;
                        ke.width = Math.min(this.maxWidth, ke.width + Be + we);
                    }
                    this._calculatePadding(Be, te, ze, ye);
                }
            }
            this._handleMargins(), qe ? (this.width = this._length = Be.width - this._margins.left - this._margins.right, this.height = ke.height) : (this.width = ke.width, this.height = this._length = Be.height - this._margins.top - this._margins.bottom);
        }
        _calculatePadding(ke, le, me, ne) {
            const {
                ticks: {
                    align: oe,
                    padding: pe
                },
                position: qe
            } = this.options, re = 0 !== this.labelRotation, se = 'top' !== qe && 'x' === this.axis;
            if (this.isHorizontal()) {
                const te = this.getPixelForTick(0) - this.left,
                    ue = this.right - this.getPixelForTick(this.ticks.length - 1);
                let ve = 0,
                    we = 0;
                re ? se ? (ve = ne * ke.width, we = me * le.height) : (ve = me * ke.height, we = ne * le.width) : 'start' === oe ? we = le.width : 'end' === oe ? ve = ke.width : 'inner' !== oe && (ve = ke.width / 2, we = le.width / 2), this.paddingLeft = Math.max((ve - te + pe) * this.width / (this.width - te), 0), this.paddingRight = Math.max((we - ue + pe) * this.width / (this.width - ue), 0);
            } else {
                let ve = le.height / 2,
                    we = ke.height / 2;
                'start' === oe ? (ve = 0, we = ke.height) : 'end' === oe && (ve = le.height, we = 0), this.paddingTop = ve + pe, this.paddingBottom = we + pe;
            }
        }
        _handleMargins() {
            this._margins && (this._margins.left = Math.max(this.paddingLeft, this._margins.left), this._margins.top = Math.max(this.paddingTop, this._margins.top), this._margins.right = Math.max(this.paddingRight, this._margins.right), this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom));
        }
        afterFit() {
            (0, ee.Q)(this.options.afterFit, [this]);
        }
        isHorizontal() {
            const {
                axis: ke,
                position: le
            } = this.options;
            return 'top' === le || 'bottom' === le || 'x' === ke;
        }
        isFullSize() {
            return this.options.fullSize;
        }
        _convertTicksToLabels(ke) {
            let le, me;
            for (this.beforeTickToLabelConversion(), this.generateTickLabels(ke), le = 0, me = ke.length; le < me; le++)
                (0, ee.k)(ke[le].label) && (ke.splice(le, 1), me--, le--);
            this.afterTickToLabelConversion();
        }
        _getLabelSizes() {
            let ke = this._labelSizes;
            if (!ke) {
                const le = this.options.ticks.sampleSize;
                let me = this.ticks;
                le < me.length && (me = Vd(me, le)), this._labelSizes = ke = this._computeLabelSizes(me, me.length);
            }
            return ke;
        }
        _computeLabelSizes(ke, le) {
            const {
                ctx: me,
                _longestTextCache: ne
            } = this, oe = [], pe = [];
            let qe, re, se, te, ue, ve, we, xe, ye, ze, Ae, Be = 0,
                Ce = 0;
            for (qe = 0; qe < le; ++qe) {
                if (te = ke[qe].label, ue = this._resolveTickFontOptions(qe), me.font = ve = ue.string, we = ne[ve] = ne[ve] || {
                        data: {},
                        gc: []
                    }, xe = ue.lineHeight, ye = ze = 0, (0, ee.k)(te) || (0, ee.b)(te)) {
                    if ((0, ee.b)(te))
                        for (re = 0, se = te.length; re < se; ++re)
                            Ae = te[re], (0, ee.k)(Ae) || (0, ee.b)(Ae) || (ye = (0, ee.V)(me, we.data, we.gc, ye, Ae), ze += xe);
                } else
                    ye = (0, ee.V)(me, we.data, we.gc, ye, te), ze = xe;
                oe.push(ye), pe.push(ze), Be = Math.max(ye, Be), Ce = Math.max(ze, Ce);
            }! function(De, Ee) {
                (0, ee.F)(De, Fe => {
                    const Ge = Fe.gc,
                        He = Ge.length / 2;
                    let Ie;
                    if (He > Ee) {
                        for (Ie = 0; Ie < He; ++Ie)
                            delete Fe.data[Ge[Ie]];
                        Ge.splice(0, He);
                    }
                });
            }(ne, le);
            const De = oe.indexOf(Be),
                Ee = pe.indexOf(Ce),
                Fe = Ge => ({
                    width: oe[Ge] || 0,
                    height: pe[Ge] || 0
                });
            return {
                first: Fe(0),
                last: Fe(le - 1),
                widest: Fe(De),
                highest: Fe(Ee),
                widths: oe,
                heights: pe
            };
        }
        getLabelForValue(ke) {
            return ke;
        }
        getPixelForValue(ke, le) {
            return NaN;
        }
        getValueForPixel(ke) {}
        getPixelForTick(ke) {
            const le = this.ticks;
            return ke < 0 || ke > le.length - 1 ? null : this.getPixelForValue(le[ke].value);
        }
        getPixelForDecimal(ke) {
            this._reversePixels && (ke = 1 - ke);
            const le = this._startPixel + ke * this._length;
            return (0, ee.W)(this._alignToPixels ? (0, ee.X)(this.chart, le, 0) : le);
        }
        getDecimalForPixel(ke) {
            const le = (ke - this._startPixel) / this._length;
            return this._reversePixels ? 1 - le : le;
        }
        getBasePixel() {
            return this.getPixelForValue(this.getBaseValue());
        }
        getBaseValue() {
            const {
                min: ke,
                max: le
            } = this;
            return ke < 0 && le < 0 ? le : ke > 0 && le > 0 ? ke : 0;
        }
        getContext(ke) {
            const le = this.ticks || [];
            if (ke >= 0 && ke < le.length) {
                const me = le[ke];
                return me.$context || (me.$context = function(ne, oe, pe) {
                    return (0, ee.j)(ne, {
                        tick: pe,
                        index: oe,
                        type: 'tick'
                    });
                }(this.getContext(), ke, me));
            }
            return this.$context || (this.$context = (me = this.chart.getContext(), je = this, (0, ee.j)(me, {
                scale: je,
                type: 'scale'
            })));
            var ne, oe;
        }
        _tickSize() {
            const ke = this.options.ticks,
                le = (0, ee.t)(this.labelRotation),
                me = Math.abs(Math.cos(le)),
                ne = Math.abs(Math.sin(le)),
                oe = this._getLabelSizes(),
                pe = ke.autoSkipPadding || 0,
                qe = oe ? oe.widest.width + pe : 0,
                re = oe ? oe.highest.height + pe : 0;
            return this.isHorizontal() ? re * me > qe * ne ? qe / me : re / ne : re * ne < qe * me ? re / me : qe / ne;
        }
        _isVisible() {
            const ke = this.options.display;
            return 'auto' !== ke ? !!ke : this.getMatchingVisibleMetas().length > 0;
        }
        _computeGridLineItems(ke) {
            const le = this.axis,
                me = this.chart,
                ne = this.options,
                {
                    grid: oe,
                    position: pe,
                    border: qe
                } = ne,
                re = oe.offset,
                se = this.isHorizontal(),
                te = this.ticks.length + (re ? 1 : 0),
                ue = ee(oe),
                ve = [],
                we = qe.setContext(this.getContext()),
                xe = we.display ? we.width : 0,
                ye = xe / 2,
                ze = function(Ae) {
                    return (0, ee.X)(me, Ae, xe);
                };
            let Ae, Be, Ce, De, Ee, Fe, Ge, He, Ie, Je, Ke, Le;
            if ('top' === pe)
                Ae = ze(this.bottom), Fe = this.bottom - ue, He = Ae - ye, Je = ze(ke.top) + ye, Le = ke.bottom;
            else if ('bottom' === pe)
                Ae = ze(this.top), Je = ke.top, Le = ze(ke.bottom) - ye, Fe = Ae + ye, He = this.top + ue;
            else if ('left' === pe)
                Ae = ze(this.right), Ee = this.right - ue, Ge = Ae - ye, Ie = ze(ke.left) + ye, Ke = ke.right;
            else if ('right' === pe)
                Ae = ze(this.left), Ie = ke.left, Ke = ze(ke.right) - ye, Ee = Ae + ye, Ge = this.left + ue;
            else if ('x' === le) {
                if ('center' === pe)
                    Ae = ze((ke.top + ke.bottom) / 2 + 0.5);
                else if ((0, ee.i)(pe)) {
                    const Me = Object.keys(pe)[0],
                        Ne = pe[Me];
                    Ae = ze(this.chart.scales[Me].getPixelForValue(Ne));
                }
                Je = Me.top, Le = Me.bottom, Fe = Ae + ye, He = Fe + ue;
            } else if ('y' === Ne) {
                if ('center' === pe)
                    Ae = ze((Me.left + Me.right) / 2);
                else if ((0, ee.i)(pe)) {
                    const Oe = Object.keys(pe)[0],
                        Pe = pe[Oe];
                    Ae = ze(this.chart.scales[Oe].getPixelForValue(Pe));
                }
                Ee = Ae - ye, Ge = Ee - ue, Ie = Oe.left, Ke = Oe.right;
            }
            const Qe = (0, ee.v)(ne.ticks.maxTicksLimit, te),
                Re = Math.max(1, Math.ceil(te / Qe));
            for (Be = 0; Be < te; Be += Re) {
                const Se = this.getContext(Be),
                    Te = oe.setContext(Se),
                    Ue = qe.setContext(Se),
                    Ve = Te.lineWidth,
                    We = Te.color,
                    Xe = Ue.dash || [],
                    Ye = Ue.dashOffset,
                    Ze = Te.tickWidth,
                    $e = Te.tickColor,
                    af = Te.tickBorderDash || [],
                    bf = Te.tickBorderDashOffset;
                Ce = Zd(this, Be, re), void 0 !== Ce && (De = (0, ee.X)(me, Ce, Ve), se ? Ee = Ge = Ie = Ke = De : Fe = He = Je = Le = De, ve.push({
                    tx1: Ee,
                    ty1: Fe,
                    tx2: Ge,
                    ty2: He,
                    x1: Ie,
                    y1: Je,
                    x2: Ke,
                    y2: Le,
                    width: Ve,
                    color: We,
                    borderDash: Xe,
                    borderDashOffset: Ye,
                    tickWidth: Ze,
                    tickColor: $e,
                    tickBorderDash: af,
                    tickBorderDashOffset: Ae
                }));
            }
            return this._ticksLength = We, this._borderValue = Ae, ve;
        }
        _computeLabelItems(ke) {
            const le = this.axis,
                me = this.options,
                {
                    position: ne,
                    ticks: oe
                } = me,
                pe = this.isHorizontal(),
                qe = this.ticks,
                {
                    align: re,
                    crossAlign: se,
                    padding: te,
                    mirror: ue
                } = oe,
                ve = ee(me.grid),
                we = ve + te,
                xe = ue ? -te : we,
                ye = -(0, ee.t)(this.labelRotation),
                ze = [];
            let Ae, Be, Ce, De, Ee, Fe, Ge, He, Ie, Je, Ke, Le, Me = 'middle';
            if ('top' === ne)
                Fe = this.bottom - xe, Ge = this._getXAxisLabelAlignment();
            else if ('bottom' === ne)
                Fe = this.top + xe, Ge = this._getXAxisLabelAlignment();
            else if ('left' === ne) {
                const Ne = this._getYAxisLabelAlignment(ve);
                Ge = Ne.textAlign, Ee = Ne.x;
            } else if ('right' === ne) {
                const Oe = this._getYAxisLabelAlignment(ve);
                Ge = Oe.textAlign, Ee = Oe.x;
            } else if ('x' === le) {
                if ('center' === ne)
                    Fe = (Oe.top + Oe.bottom) / 2 + we;
                else if ((0, ee.i)(ne)) {
                    const Pe = Object.keys(ne)[0],
                        Qe = ne[Pe];
                    Fe = this.chart.scales[Pe].getPixelForValue(Qe) + we;
                }
                Ge = this._getXAxisLabelAlignment();
            } else if ('y' === Qe) {
                if ('center' === ne)
                    Ee = (Pe.left + Pe.right) / 2 - we;
                else if ((0, ee.i)(ne)) {
                    const Re = Object.keys(ne)[0],
                        Se = ne[Re];
                    Ee = this.chart.scales[Re].getPixelForValue(Se);
                }
                Ge = this._getYAxisLabelAlignment(ve).textAlign;
            }
            'y' === Se && ('start' === re ? Me = 'top' : 'end' === re && (Me = 'bottom'));
            const Te = this._getLabelSizes();
            for (Ae = 0, Be = qe.length; Ae < Be; ++Ae) {
                Ce = qe[Ae], De = Ce.label;
                const Ue = oe.setContext(this.getContext(Ae));
                He = this.getPixelForTick(Ae) + oe.labelOffset, Ie = this._resolveTickFontOptions(Ae), Je = Ie.lineHeight, Ke = (0, ee.b)(De) ? De.length : 1;
                const Ve = Ke / 2,
                    We = Ue.color,
                    Xe = Ue.textStrokeColor,
                    Ye = Ue.textStrokeWidth;
                let Ze, $e = Ge;
                if (pe ? (Ee = He, 'inner' === Ge && ($e = Ae === Be - 1 ? this.options.reverse ? 'left' : 'right' : 0 === Ae ? this.options.reverse ? 'right' : 'left' : 'center'), Le = 'top' === ne ? 'near' === se || 0 !== ye ? -Ke * Je + Je / 2 : 'center' === se ? -Te.highest.height / 2 - Ve * Je + Je : -Te.highest.height + Je / 2 : 'near' === se || 0 !== ye ? Je / 2 : 'center' === se ? Te.highest.height / 2 - Ve * Je : Te.highest.height - Ke * Je, ue && (Le *= -1), 0 === ye || Ue.showLabelBackdrop || (Ee += Je / 2 * Math.sin(ye))) : (Fe = He, Le = (1 - Ke) * Je / 2), Ue.showLabelBackdrop) {
                    const af = (0, ee.E)(Ue.backdropPadding),
                        bf = Te.heights[Ae],
                        cf = Te.widths[Ae];
                    let df = Le - af.top,
                        ef = 0 - af.left;
                    switch (Me) {
                        case 'middle':
                            df -= bf / 2;
                            break;
                        case 'bottom':
                            df -= bf;
                    }
                    switch (Ge) {
                        case 'center':
                            ef -= cf / 2;
                            break;
                        case 'right':
                            ef -= cf;
                    }
                    Ze = {
                        left: ef,
                        top: df,
                        width: cf + af.width,
                        height: bf + af.height,
                        color: Ue.backdropColor
                    };
                }
                ze.push({
                    label: De,
                    font: Ie,
                    textOffset: Le,
                    options: {
                        rotation: ye,
                        color: bf,
                        strokeColor: Xe,
                        strokeWidth: Ye,
                        textAlign: $e,
                        textBaseline: Me,
                        translation: [
                            Ee,
                            Fe
                        ],
                        backdrop: Ze
                    }
                });
            }
            return ze;
        }
        _getXAxisLabelAlignment() {
            const {
                position: ke,
                ticks: le
            } = this.options;
            if (-(0, ee.t)(this.labelRotation))
                return 'top' === ke ? 'left' : 'right';
            let me = 'center';
            return 'start' === le.align ? me = 'left' : 'end' === le.align ? me = 'right' : 'inner' === le.align && (me = 'inner'), me;
        }
        _getYAxisLabelAlignment(ke) {
            const {
                position: le,
                ticks: {
                    crossAlign: me,
                    mirror: ne,
                    padding: oe
                }
            } = this.options, pe = ke + oe, qe = this._getLabelSizes().widest.width;
            let re, se;
            return 'left' === le ? ne ? (se = this.right + oe, 'near' === me ? re = 'left' : 'center' === me ? (re = 'center', se += qe / 2) : (re = 'right', se += qe)) : (se = this.right - pe, 'near' === me ? re = 'right' : 'center' === me ? (re = 'center', se -= qe / 2) : (re = 'left', se = this.left)) : 'right' === le ? ne ? (se = this.left + oe, 'near' === me ? re = 'right' : 'center' === me ? (re = 'center', se -= qe / 2) : (re = 'left', se -= qe)) : (se = this.left + pe, 'near' === me ? re = 'left' : 'center' === me ? (re = 'center', se += qe / 2) : (re = 'right', se = this.right)) : re = 'right', {
                textAlign: re,
                x: se
            };
        }
        _computeLabelArea() {
            if (this.options.ticks.mirror)
                return;
            const ke = this.chart,
                le = this.options.position;
            return 'left' === le || 'right' === le ? {
                top: 0,
                left: this.left,
                bottom: ke.height,
                right: this.right
            } : 'top' === le || 'bottom' === le ? {
                top: this.top,
                left: 0,
                bottom: this.bottom,
                right: ke.width
            } : void 0;
        }
        drawBackground() {
            const {
                ctx: ke,
                options: {
                    backgroundColor: le
                },
                left: me,
                top: ne,
                width: oe,
                height: pe
            } = this;
            le && (ke.save(), ke.fillStyle = le, ke.fillRect(me, ne, oe, pe), ke.restore());
        }
        getLineWidthForValue(ke) {
            const le = this.options.grid;
            if (!this._isVisible() || !le.display)
                return 0;
            const me = this.ticks.findIndex(ne => ne.value === ke);
            if (me >= 0) {
                return le.setContext(this.getContext(me)).lineWidth;
            }
            return 0;
        }
        drawGrid(ke) {
            const le = this.options.grid,
                me = this.ctx,
                ne = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(ke));
            let oe, pe;
            const qe = (re, se, te) => {
                te.width && te.color && (me.save(), me.lineWidth = te.width, me.strokeStyle = te.color, me.setLineDash(te.borderDash || []), me.lineDashOffset = te.borderDashOffset, me.beginPath(), me.moveTo(re.x, re.y), me.lineTo(se.x, se.y), me.stroke(), me.restore());
            };
            if (le.display)
                for (oe = 0, pe = ne.length; oe < pe; ++oe) {
                    const re = ne[oe];
                    le.drawOnChartArea && qe({
                        x: re.x1,
                        y: re.y1
                    }, {
                        x: re.x2,
                        y: re.y2
                    }, re), le.drawTicks && qe({
                        x: re.tx1,
                        y: re.ty1
                    }, {
                        x: re.tx2,
                        y: re.ty2
                    }, {
                        color: re.tickColor,
                        width: re.tickWidth,
                        borderDash: re.tickBorderDash,
                        borderDashOffset: re.tickBorderDashOffset
                    });
                }
        }
        drawBorder() {
            const {
                chart: ke,
                ctx: le,
                options: {
                    border: me,
                    grid: ne
                }
            } = this, oe = me.setContext(this.getContext()), pe = me.display ? oe.width : 0;
            if (!pe)
                return;
            const qe = ne.setContext(this.getContext(0)).lineWidth,
                re = this._borderValue;
            let se, te, ue, ve;
            this.isHorizontal() ? (se = (0, ee.X)(ke, this.left, pe) - pe / 2, te = (0, ee.X)(ke, this.right, qe) + qe / 2, ue = ve = re) : (ue = (0, ee.X)(ke, this.top, pe) - pe / 2, ve = (0, ee.X)(ke, this.bottom, qe) + qe / 2, se = te = re), le.save(), le.lineWidth = oe.width, le.strokeStyle = oe.color, le.beginPath(), le.moveTo(se, ue), le.lineTo(te, ve), le.stroke(), le.restore();
        }
        drawLabels(ke) {
            if (!this.options.ticks.display)
                return;
            const le = this.ctx,
                me = this._computeLabelArea();
            me && (0, ee.Y)(le, me);
            const ne = this.getLabelItems(ke);
            for (const oe of ne) {
                const pe = oe.options,
                    qe = oe.font,
                    re = oe.label,
                    se = oe.textOffset;
                (0, ee.Z)(le, re, 0, se, qe, pe);
            }
            pe && (0, ee.$)(le);
        }
        drawTitle() {
            const {
                ctx: ke,
                options: {
                    position: le,
                    title: me,
                    reverse: ne
                }
            } = this;
            if (!me.display)
                return;
            const oe = (0, ee.a0)(me.font),
                pe = (0, ee.E)(me.padding),
                qe = me.align;
            let re = oe.lineHeight / 2;
            'bottom' === le || 'center' === le || (0, ee.i)(le) ? (re += pe.bottom, (0, ee.b)(me.text) && (re += oe.lineHeight * (me.text.length - 1))) : re += pe.top;
            const {
                titleX: se,
                titleY: te,
                maxWidth: ue,
                rotation: ve
            } = function(we, xe, ye, ze) {
                const {
                    top: Ae,
                    left: Be,
                    bottom: Ce,
                    right: De,
                    chart: Ee
                } = we, {
                    chartArea: Fe,
                    scales: Ge
                } = Ee;
                let He, Ie, Je, Ke = 0;
                const Le = Ce - Ae,
                    Me = De - Be;
                if (we.isHorizontal()) {
                    if (Ie = (0, ee.a2)(ze, Be, De), (0, ee.i)(ye)) {
                        const Ne = Object.keys(ye)[0],
                            Oe = ye[Ne];
                        Je = Ge[Ne].getPixelForValue(Oe) + Le - xe;
                    } else
                        Je = 'center' === ye ? (Fe.bottom + Fe.top) / 2 + Le - xe : Ud(Ne, ye, xe);
                    He = De - Be;
                } else {
                    if ((0, ee.i)(ye)) {
                        const Pe = Object.keys(ye)[0],
                            Qe = ye[Pe];
                        Ie = Ge[Pe].getPixelForValue(Qe) - Me + xe;
                    } else
                        Ie = 'center' === ye ? (Fe.left + Fe.right) / 2 - Me + xe : Ud(Pe, ye, xe);
                    Je = (0, ee.a2)(Qe, Ce, Ae), Ke = 'left' === ye ? -ee.H : ee.H;
                }
                return {
                    titleX: Ie,
                    titleY: Je,
                    maxWidth: He,
                    rotation: Ke
                };
            }(this, re, le, qe);
            (0, ee.Z)(ke, me.text, 0, 0, oe, {
                color: me.color,
                maxWidth: ue,
                rotation: ve,
                textAlign: ie(qe, le, ne),
                textBaseline: 'middle',
                translation: [
                    se,
                    te
                ]
            });
        }
        draw(ke) {
            this._isVisible() && (this.drawBackground(), this.drawGrid(ke), this.drawBorder(), this.drawTitle(), this.drawLabels(ke));
        }
        _layers() {
            const ke = this.options,
                le = ke.ticks && ke.ticks.z || 0,
                me = (0, ee.v)(ke.grid && ke.grid.z, -1),
                ne = (0, ee.v)(ke.border && ke.border.z, 0);
            return this._isVisible() && this.draw === je.prototype.draw ? [{
                    z: me,
                    draw: oe => {
                        this.drawBackground(), this.drawGrid(oe), this.drawTitle();
                    }
                },
                {
                    z: ne,
                    draw: () => {
                        this.drawBorder();
                    }
                },
                {
                    z: le,
                    draw: oe => {
                        this.drawLabels(oe);
                    }
                }
            ] : [{
                z: le,
                draw: oe => {
                    this.draw(oe);
                }
            }];
        }
        getMatchingVisibleMetas(ke) {
            const le = this.chart.getSortedVisibleDatasetMetas(),
                me = this.axis + 'AxisID',
                ne = [];
            let oe, pe;
            for (oe = 0, pe = le.length; oe < pe; ++oe) {
                const qe = le[oe];
                pe[me] !== this.id || ke && pe.type !== ke || ne.push(pe);
            }
            return ne;
        }
        _resolveTickFontOptions(ke) {
            const le = this.options.ticks.setContext(this.getContext(ke));
            return (0, ee.a0)(le.font);
        }
        _maxDigits() {
            const ke = this._resolveTickFontOptions(0).lineHeight;
            return (this.isHorizontal() ? this.width : this.height) / ke;
        }
        constructor(ke) {
            super(), this.id = ke.id, this.type = ke.type, this.options = void 0, this.ctx = ke.ctx, this.chart = ke.chart, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this._margins = {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }, this.maxWidth = void 0, this.maxHeight = void 0, this.paddingTop = void 0, this.paddingBottom = void 0, this.paddingLeft = void 0, this.paddingRight = void 0, this.axis = void 0, this.labelRotation = void 0, this.min = void 0, this.max = void 0, this._range = void 0, this.ticks = [], this._gridLineItems = null, this._labelItems = null, this._labelSizes = null, this._length = 0, this._maxLength = 0, this._longestTextCache = {}, this._startPixel = void 0, this._endPixel = void 0, this._reversePixels = !1, this._userMax = void 0, this._userMin = void 0, this._suggestedMax = void 0, this._suggestedMin = void 0, this._ticksLength = 0, this._borderValue = 0, this._cache = {}, this._dataLimitsCached = !1, this.$context = void 0;
        }
    }
    class ke {
        isForType(le) {
            return Object.prototype.isPrototypeOf.call(this.type.prototype, le.prototype);
        }
        register(le) {
            const me = Object.getPrototypeOf(le);
            let ne;
            (function(oe) {
                return 'id' in oe && 'defaults' in oe;
            }(me) && (ne = this.register(me)));
            const oe = this.items,
                pe = le.id,
                qe = this.scope + '.' + pe;
            if (!pe)
                throw new Error('class does not have id: ' + le);
            return pe in oe || (oe[pe] = le, function(re, se, te) {
                const ue = (0, ee.a4)(Object.create(null), [
                    te ? ee.d.get(te) : {},
                    ee.d.get(se),
                    re.defaults
                ]);
                ee.d.set(se, ue), re.defaultRoutes && function(ve, we) {
                    Object.keys(we).forEach(xe => {
                        const ye = xe.split('.'),
                            ze = ye.pop(),
                            Ae = [ve].concat(ye).join('.'),
                            Be = we[xe].split('.'),
                            Ce = Be.pop(),
                            De = Be.join('.');
                        ee.d.route(Ae, ze, De, Ce);
                    });
                }(se, re.defaultRoutes);
                re.descriptors && ee.d.describe(se, re.descriptors);
            }(le, qe, ne), this.override && ee.d.override(le.id, le.overrides)), qe;
        }
        get(le) {
            return this.items[le];
        }
        unregister(le) {
            const me = this.items,
                ne = le.id,
                oe = this.scope;
            ne in me && delete me[ne], oe && ne in ee.d[oe] && (delete ee.d[oe][ne], this.override && delete ee.a3[ne]);
        }
        constructor(le, me, ne) {
            this.type = le, this.scope = me, this.override = ne, this.items = Object.create(null);
        }
    }
    class le {
        add(...ud) {
            this._each('register', ud);
        }
        remove(...ud) {
            this._each('unregister', ud);
        }
        addControllers(...ud) {
            this._each('register', ud, this.controllers);
        }
        addElements(...ud) {
            this._each('register', ud, this.elements);
        }
        addPlugins(...ud) {
            this._each('register', ud, this.plugins);
        }
        addScales(...ud) {
            this._each('register', ud, this.scales);
        }
        getController(me) {
            return this._get(me, this.controllers, 'controller');
        }
        getElement(me) {
            return this._get(me, this.elements, 'element');
        }
        getPlugin(me) {
            return this._get(me, this.plugins, 'plugin');
        }
        getScale(me) {
            return this._get(me, this.scales, 'scale');
        }
        removeControllers(...ud) {
            this._each('unregister', ud, this.controllers);
        }
        removeElements(...ud) {
            this._each('unregister', ud, this.elements);
        }
        removePlugins(...ud) {
            this._each('unregister', ud, this.plugins);
        }
        removeScales(...ud) {
            this._each('unregister', ud, this.scales);
        }
        _each(me, ne, oe) {
            [...ne].forEach(pe => {
                const qe = oe || this._getRegistryForType(pe);
                oe || qe.isForType(pe) || qe === this.plugins && pe.id ? this._exec(me, qe, pe) : (0, ee.F)(pe, re => {
                    const se = oe || this._getRegistryForType(re);
                    this._exec(me, se, re);
                });
            });
        }
        _exec(me, ne, oe) {
            const pe = (0, ee.a5)(me);
            (0, ee.Q)(oe['before' + pe], [], oe), ne[me](oe), (0, ee.Q)(oe['after' + pe], [], oe);
        }
        _getRegistryForType(me) {
            for (let ne = 0; ne < this._typedRegistries.length; ne++) {
                const oe = this._typedRegistries[ne];
                if (oe.isForType(me))
                    return oe;
            }
            return this.plugins;
        }
        _get(me, ne, oe) {
            const pe = ne.get(me);
            if (void 0 === pe)
                throw new Error('"' + me + '" is not a registered ' + oe + '.');
            return pe;
        }
        constructor() {
            this.controllers = new ke(db, 'datasets', !0), this.elements = new ke(Fd, 'elements'), this.plugins = new ke(Object, 'plugins'), this.scales = new ke(je, 'scales'), this._typedRegistries = [
                this.controllers,
                this.scales,
                this.elements
            ];
        }
    }
    var me = new le();
    class ne {
        notify(oe, pe, qe, re) {
            'beforeInit' === pe && (this._init = this._createDescriptors(oe, !0), this._notify(this._init, oe, 'install'));
            const se = re ? this._descriptors(oe).filter(re) : this._descriptors(oe),
                te = this._notify(se, oe, pe, qe);
            return 'afterDestroy' === pe && (this._notify(se, oe, 'stop'), this._notify(this._init, oe, 'uninstall')), te;
        }
        _notify(oe, pe, qe, re) {
            re = re || {};
            for (const se of oe) {
                const te = se.plugin,
                    ue = te[qe],
                    ve = [
                        pe,
                        re,
                        se.options
                    ];
                if (!1 === (0, ee.Q)(ue, ve, te) && re.cancelable)
                    return !1;
            }
            return !0;
        }
        invalidate() {
            (0, ee.k)(this._cache) || (this._oldCache = this._cache, this._cache = void 0);
        }
        _descriptors(oe) {
            if (this._cache)
                return this._cache;
            const pe = this._cache = this._createDescriptors(oe);
            return this._notifyStateChanges(oe), pe;
        }
        _createDescriptors(oe, pe) {
            const qe = oe && oe.config,
                re = (0, ee.v)(qe.options && qe.options.plugins, {}),
                se = function(te) {
                    const ue = {},
                        ve = [],
                        we = Object.keys(me.plugins.items);
                    for (let xe = 0; xe < we.length; xe++)
                        ve.push(me.getPlugin(we[xe]));
                    const ye = xe.plugins || [];
                    for (let ze = 0; ze < ye.length; ze++) {
                        const Ae = ye[ze]; -
                        1 === ve.indexOf(Ae) && (ve.push(Ae), ue[Ae.id] = !0);
                    }
                    return {
                        plugins: ve,
                        localIds: ue
                    };
                }(qe);
            return !1 !== re || pe ? function(te, {
                plugins: ue,
                localIds: ve
            }, we, xe) {
                const ye = [],
                    ze = te.getContext();
                for (const Ae of ue) {
                    const Be = Ae.id,
                        Ce = _oe(we[Be], xe);
                    null !== Ce && ye.push({
                        plugin: Ae,
                        options: _pe(te.config, {
                            plugin: Ae,
                            local: ve[Be]
                        }, Ce, ze)
                    });
                }
                return ye;
            }(oe, se, re, pe) : [];
        }
        _notifyStateChanges(oe) {
            const pe = this._oldCache || [],
                qe = this._cache,
                re = (se, te) => se.filter(ue => !te.some(ve => ue.plugin.id === ve.plugin.id));
            this._notify(re(pe, qe), oe, 'stop'), this._notify(re(qe, pe), oe, 'start');
        }
        constructor() {
            this._init = [];
        }
    }

    function _oe(pe, qe) {
        return qe || !1 !== pe ? !0 === pe ? {} : pe : null;
    }

    function _pe(qe, {
        plugin: re,
        local: se
    }, te, ue) {
        const ve = qe.pluginScopeKeys(re),
            we = qe.getOptionScopes(te, ve);
        return se && re.defaults && h.push(re.defaults), qe.createResolver(h, ue, [''], {
            scriptable: !1,
            indexable: !1,
            allKeys: !0
        });
    }

    function se(te, ue) {
        const ve = ve.d.datasets[te] || {};
        return ((ue.datasets || {})[te] || {}).indexAxis || ue.indexAxis || ve.indexAxis || 'x';
    }

    function ue(ve, we) {
        if ('x' === ve || 'y' === ve || 'r' === ve)
            return ve;
        var xe;
        if (ve = we.axis || ('top' === (xe = we.position) || 'bottom' === xe ? 'x' : 'left' === xe || 'right' === xe ? 'y' : void 0) || ve.length > 1 && ue(ve[0].toLowerCase(), we))
            return ve;
        throw new Error(`Cannot determine type of '${ name }' axis. Please provide 'axis' or 'position' option.`);
    }

    function we(xe) {
        const ye = xe.options || (xe.options = {});
        ye.plugins = (0, ve.v)(ye.plugins, {}), ye.scales = function(ze, Ae) {
            const Be = ve.a3[ze.type] || {
                    scales: {}
                },
                Ce = Ae.scales || {},
                De = se(ze.type, Ae),
                Ee = Object.create(null);
            return Object.keys(Ce).forEach(Fe => {
                const Ge = Ce[Fe];
                if (!(0, ve.i)(Ge))
                    return console.error(`Invalid scale configuration for scale: ${ Fe }`);
                if (Ge._proxy)
                    return console.warn(`Ignoring resolver passed as options for scale: ${ Fe }`);
                const He = ue(Fe, Ge),
                    Ie = function(Je, Ke) {
                        return Je === Ke ? '_index_' : '_value_';
                    }(He, De),
                    Je = Be.scales || {};
                Ee[Fe] = (0, ve.ab)(Object.create(null), [{
                        axis: He
                    },
                    Ge,
                    Je[He],
                    Je[Ie]
                ]);
            }), ze.data.datasets.forEach(Fe => {
                const Ge = Fe.type || ze.type,
                    He = Fe.indexAxis || se(Ge, Ae),
                    Ie = (ve.a3[Ge] || {}).scales || {};
                Object.keys(Ie).forEach(Je => {
                    const Ke = function(Le, Me) {
                            let Ne = Le;
                            return '_index_' === Le ? Ne = Me : '_value_' === Le && (Ne = 'x' === Me ? 'y' : 'x'), Ne;
                        }(Je, He),
                        Le = Fe[Ke + 'AxisID'] || Ke;
                    Ee[Le] = Ee[Le] || Object.create(null), (0, ve.ab)(Ee[Le], [{
                            axis: Ke
                        },
                        Ce[Le],
                        Ie[Je]
                    ]);
                });
            }), Object.keys(Ee).forEach(Fe => {
                const Ge = Ee[Fe];
                (0, ve.ab)(Ge, [
                    ve.d.scales[Ge.type],
                    ve.d.scale
                ]);
            }), Ee;
        }(xe, ye);
    }

    function ye(ze) {
        return (ze = ze || {}).datasets = ze.datasets || [], ze.labels = ze.labels || [], ze;
    }
    const ze = new Map(),
        Ae = new Set();

    function Be(Ce, De) {
        let Ee = ze.get(Ce);
        return Ee || (Ee = De(), ze.set(Ce, Ee), Ae.add(Ee)), Ee;
    }
    const Ce = (De, Ee, Fe) => {
        const Ge = (0, ve.f)(Ee, Fe);
        void 0 !== Ge && De.add(Ge);
    };
    class De {
        get platform() {
            return this._config.platform;
        }
        get type() {
            return this._config.type;
        }
        set type(Ee) {
            this._config.type = Ee;
        }
        get data() {
            return this._config.data;
        }
        set data(Ee) {
            this._config.data = ye(Ee);
        }
        get options() {
            return this._config.options;
        }
        set options(Ee) {
            this._config.options = Ee;
        }
        get plugins() {
            return this._config.plugins;
        }
        update() {
            const Ee = this._config;
            this.clearCache(), we(Ee);
        }
        clearCache() {
            this._scopeCache.clear(), this._resolverCache.clear();
        }
        datasetScopeKeys(Ee) {
            return Be(Ee, () => [
                [
                    `datasets.${ Ee }`,
                    ''
                ]
            ]);
        }
        datasetAnimationScopeKeys(Ee, Fe) {
            return Be(`${ Ee }.transition.${ Fe }`, () => [
                [
                    `datasets.${ Ee }.transitions.${ Fe }`,
                    `transitions.${ Fe }`
                ],
                [
                    `datasets.${ Ee }`,
                    ''
                ]
            ]);
        }
        datasetElementScopeKeys(Ee, Fe) {
            return Be(`${ Ee }-${ Fe }`, () => [
                [
                    `datasets.${ Ee }.elements.${ Fe }`,
                    `datasets.${ Ee }`,
                    `elements.${ Fe }`,
                    ''
                ]
            ]);
        }
        pluginScopeKeys(Ee) {
            const Fe = Ee.id;
            return Be(`${ this.type }-plugin-${ Fe }`, () => [
                [
                    `plugins.${ Fe }`,
                    ...Ee.additionalOptionScopes || []
                ]
            ]);
        }
        _cachedScopes(Ee, Fe) {
            const Ge = this._scopeCache;
            let He = Ge.get(Ee);
            return He && !Fe || (He = new Map(), Ge.set(Ee, He)), He;
        }
        getOptionScopes(Ee, Fe, Ge) {
            const {
                options: He,
                type: Ie
            } = this, Je = this._cachedScopes(Ee, Ge), Ke = Je.get(Fe);
            if (Ke)
                return Ke;
            const Le = new Set();
            Fe.forEach(Me => {
                Ee && (Le.add(Ee), Me.forEach(Ne => Ce(Le, Ee, Ne))), Me.forEach(Ne => Ce(Le, He, Ne)), Me.forEach(Ne => Ce(Le, ve.a3[Ie] || {}, Ne)), Me.forEach(Ne => Ce(Le, ve.d, Ne)), Me.forEach(Ne => Ce(Le, ve.a6, Ne));
            });
            const Me = Array.from(Le);
            return 0 === Me.length && Me.push(Object.create(null)), Ae.has(Fe) && Je.set(Fe, Me), Me;
        }
        chartOptionScopes() {
            const {
                options: Ee,
                type: Fe
            } = this;
            return [
                Ee,
                ve.a3[Fe] || {},
                ve.d.datasets[Fe] || {},
                {
                    type: Fe
                },
                ve.d,
                ve.a6
            ];
        }
        resolveNamedOptions(Ee, Fe, Ge, He = ['']) {
            const Ie = {
                    $shared: !0
                },
                {
                    resolver: Je,
                    subPrefixes: Ke
                } = _Ee(this._resolverCache, Ee, He);
            let Le = Je;
            if (function(Me, Ne) {
                    const {
                        isScriptable: Oe,
                        isIndexable: Pe
                    } = (0, ve.aa)(Me);
                    for (const Qe of Ne) {
                        const Re = Oe(Qe),
                            Se = Pe(Qe),
                            Te = (Se || Re) && Me[Qe];
                        if (Re && ((0, ve.a7)(Te) || _Ge(Te)) || Se && (0, ve.b)(Te))
                            return !0;
                    }
                    return !1;
                }(Je, Fe)) {
                Ie.$shared = !1, Ge = (0, ve.a7)(Ge) ? Ge() : Ge;
                const Me = this.createResolver(Ee, Ge, Ke);
                Le = (0, ve.a8)(Je, Ge, Me);
            }
            for (const Ne of Me)
                Ie[Ne] = Le[Ne];
            return Ie;
        }
        createResolver(Ee, Fe, Ge = [''], He) {
            const {
                resolver: Ie
            } = _Ee(this._resolverCache, Ee, Ge);
            return (0, ve.i)(Fe) ? (0, ve.a8)(Ie, Fe, void 0, He) : Ie;
        }
        constructor(Ee) {
            this._config = function(Fe) {
                return (Fe = Fe || {}).data = ye(Fe.data), we(Fe), Fe;
            }(Ee), this._scopeCache = new Map(), this._resolverCache = new Map();
        }
    }

    function _Ee(Fe, Ge, He) {
        let Ie = Fe.get(Ge);
        Ie || (Ie = new Map(), Fe.set(Ge, Ie));
        const Je = He.join();
        let Ke = Ie.get(Je);
        if (!Ke) {
            Ke = {
                resolver: (0, ve.a9)(Ge, He),
                subPrefixes: He.filter(Le => !Le.toLowerCase().includes('hover'))
            }, Ie.set(Je, Ke);
        }
        return Ke;
    }
    const _Ge = He => (0, ve.i)(He) && Object.getOwnPropertyNames(He).reduce((Ie, Je) => Ie || (0, ve.a7)(He[Je]), !1);
    const He = [
        'top',
        'bottom',
        'left',
        'right',
        'chartArea'
    ];

    function Ie(Je, Ke) {
        return 'top' === Je || 'bottom' === Je || -1 === He.indexOf(Je) && 'x' === Ke;
    }

    function Je(Ke, Le) {
        return function(Me, Ne) {
            return Me[Ke] === Ne[Ke] ? Me[Le] - Ne[Le] : Me[Ke] - Ne[Ke];
        };
    }

    function Ke(Le) {
        const Me = Le.chart,
            Ne = Me.options.animation;
        Me.notifyPlugins('afterRender'), (0, ve.Q)(Ne && Ne.onComplete, [Le], Me);
    }

    function Ne(Oe) {
        const Pe = Oe.chart,
            Qe = Pe.options.animation;
        (0, ve.Q)(Qe && Qe.onProgress, [Oe], Pe);
    }

    function Qe(Re) {
        return (0, ve.M)() && 'string' == typeof Re ? Re = document.getElementById(Re) : Re && Re.length && (Re = Re[0]), Re && Re.canvas && (Re = Re.canvas), Re;
    }
    const Re = {},
        Se = Te => {
            const Ue = Qe(Te);
            return Object.values(Re).filter(Ve => Ve.canvas === Ue).pop();
        };

    function Te(Ue, Ve, We) {
        const Xe = Object.keys(Ue);
        for (const Ye of Xe) {
            const Ze = +Ye;
            if (Ze >= Ve) {
                const $e = Ue[Ye];
                delete Ue[Ye], (We > 0 || Ze > Ve) && (Ue[Ze + We] = $e);
            }
        }
    }
    class _Ye {
        static register(...ud) {
            me.add(...ud), _Ze();
        }
        static unregister(...ud) {
            me.remove(...ud), _Ze();
        }
        get aspectRatio() {
            const {
                options: {
                    aspectRatio: Ze,
                    maintainAspectRatio: $e
                },
                width: af,
                height: bf,
                _aspectRatio: cf
            } = this;
            return (0, $e.k)(Ze) ? $e && cf ? cf : bf ? af / bf : null : Ze;
        }
        get data() {
            return this.config.data;
        }
        set data(Ze) {
            this.config.data = Ze;
        }
        get options() {
            return this._options;
        }
        set options(Ze) {
            this.config.options = Ze;
        }
        get registry() {
            return me;
        }
        _initialize() {
            return this.notifyPlugins('beforeInit'), this.options.responsive ? this.resize() : (0, $e.ae)(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins('afterInit'), this;
        }
        clear() {
            return (0, $e.af)(this.canvas, this.ctx), this;
        }
        stop() {
            return ge.stop(this), this;
        }
        resize(Ze, $e) {
            ge.running(this) ? this._resizeBeforeDraw = {
                width: Ze,
                height: $e
            } : this._resize(Ze, $e);
        }
        _resize(Ze, $e) {
            const af = this.options,
                bf = this.canvas,
                cf = af.maintainAspectRatio && this.aspectRatio,
                df = this.platform.getMaximumSize(bf, Ze, $e, cf),
                ef = af.devicePixelRatio || this.platform.getDevicePixelRatio(),
                ff = this.width ? 'resize' : 'attach';
            this.width = df.width, this.height = df.height, this._aspectRatio = this.aspectRatio, (0, $e.ae)(this, ef, !0) && (this.notifyPlugins('resize', {
                size: df
            }), (0, $e.Q)(af.onResize, [
                this,
                df
            ], this), this.attached && this._doResize(ff) && this.render());
        }
        ensureScalesHaveIDs() {
            const Ze = this.options.scales || {};
            (0, $e.F)(Ze, ($e, af) => {
                $e.id = af;
            });
        }
        buildOrUpdateScales() {
            const Ze = this.options,
                $e = Ze.scales,
                af = this.scales,
                bf = Object.keys(af).reduce((cf, df) => (cf[df] = !1, cf), {});
            let cf = [];
            $e && (cf = cf.concat(Object.keys($e).map(df => {
                const ef = $e[df],
                    ff = ue(df, ef),
                    gf = 'r' === ff,
                    hf = 'x' === ff;
                return {
                    options: ef,
                    dposition: gf ? 'chartArea' : hf ? 'bottom' : 'left',
                    dtype: gf ? 'radialLinear' : hf ? 'category' : 'linear'
                };
            }))), (0, $e.F)(cf, df => {
                const ef = df.options,
                    ff = ef.id,
                    gf = ue(ff, ef),
                    hf = (0, $e.v)(ef.type, df.dtype);
                void 0 !== ef.position && Ie(ef.position, gf) === Ie(df.dposition) || (ef.position = df.dposition), bf[ff] = !0;
                let jf = null;
                if (ff in af && af[ff].type === hf)
                    jf = af[ff];
                else {
                    jf = new(me.getScale(hf))({
                        id: ff,
                        type: hf,
                        ctx: this.ctx,
                        chart: this
                    }), af[jf.id] = jf;
                }
                jf.init(ef, Ze);
            }), (0, $e.F)(bf, (df, ef) => {
                df || delete af[ef];
            }), (0, $e.F)(af, df => {
                bd.configure(this, df, df.options), bd.addBox(this, df);
            });
        }
        _updateMetasets() {
            const Ze = this._metasets,
                $e = this.data.datasets.length,
                af = Ze.length;
            if (Ze.sort((bf, cf) => bf.index - cf.index), af > $e) {
                for (let bf = $e; bf < af; ++bf)
                    this._destroyDatasetMeta(bf);
                bf.splice($e, af - $e);
            }
            this._sortedMetasets = Ze.slice(0).sort(Je('order', 'index'));
        }
        _removeUnreferencedMetasets() {
            const {
                _metasets: Ze,
                data: {
                    datasets: $e
                }
            } = this;
            Ze.length > $e.length && delete this._stacks, Ze.forEach((af, bf) => {
                0 === $e.filter(cf => cf === af._dataset).length && this._destroyDatasetMeta(bf);
            });
        }
        buildOrUpdateControllers() {
            const Ze = [],
                $e = this.data.datasets;
            let af, bf;
            for (this._removeUnreferencedMetasets(), af = 0, bf = $e.length; af < bf; af++) {
                const cf = $e[af];
                let df = this.getDatasetMeta(af);
                const ef = bf.type || this.config.type;
                if (df.type && df.type !== ef && (this._destroyDatasetMeta(af), df = this.getDatasetMeta(af)), df.type = ef, df.indexAxis = bf.indexAxis || se(ef, this.options), df.order = bf.order || 0, df.index = af, df.label = '' + bf.label, df.visible = this.isDatasetVisible(af), df.controller)
                    df.controller.updateIndex(af), df.controller.linkScales();
                else {
                    const ff = me.getController(ef),
                        {
                            datasetElementType: gf,
                            dataElementType: hf
                        } = $e.d.datasets[ef];
                    Object.assign(ff, {
                        dataElementType: me.getElement(hf),
                        datasetElementType: bf && me.getElement(bf)
                    }), df.controller = new ff(this, af), Ze.push(df.controller);
                }
            }
            return this._updateMetasets(), Ze;
        }
        _resetElements() {
            (0, $e.F)(this.data.datasets, (Ze, $e) => {
                this.getDatasetMeta($e).controller.reset();
            }, this);
        }
        reset() {
            this._resetElements(), this.notifyPlugins('reset');
        }
        update(Ze) {
            const $e = this.config;
            $e.update();
            const af = this._options = $e.createResolver($e.chartOptionScopes(), this.getContext()),
                bf = this._animationsDisabled = !af.animation;
            if (this._updateScales(), this._checkEventBindings(), this._updateHiddenIndices(), this._plugins.invalidate(), !1 === this.notifyPlugins('beforeUpdate', {
                    mode: Ze,
                    cancelable: !0
                }))
                return;
            const cf = this.buildOrUpdateControllers();
            this.notifyPlugins('beforeElementsUpdate');
            let df = 0;
            for (let ef = 0, ff = this.data.datasets.length; ef < ff; ef++) {
                const {
                    controller: gf
                } = this.getDatasetMeta(ef), hf = !bf && -1 === cf.indexOf(ff);
                ff.buildOrUpdateElements(hf), df = Math.max(+ff.getMaxOverflow(), df);
            }
            df = this._minPadding = hf.layout.autoPadding ? df : 0, this._updateLayout(df), bf || (0, $e.F)(cf, jf => {
                jf.reset();
            }), this._updateDatasets(ef), this.notifyPlugins('afterUpdate', {
                mode: ef
            }), this._layers.sort(Je('z', '_idx'));
            const {
                _active: jf,
                _lastEvent: kf
            } = this;
            kf ? this._eventHandler(kf, !0) : jf.length && this._updateHoverStyles(jf, jf, !0), this.render();
        }
        _updateScales() {
            (0, $e.F)(this.scales, Ze => {
                bd.removeBox(this, Ze);
            }), this.ensureScalesHaveIDs(), this.buildOrUpdateScales();
        }
        _checkEventBindings() {
            const Ze = this.options,
                $e = new Set(Object.keys(this._listeners)),
                af = new Set(Ze.events);
            (0, $e.ag)($e, af) && !!this._responsiveListeners === Ze.responsive || (this.unbindEvents(), this.bindEvents());
        }
        _updateHiddenIndices() {
            const {
                _hiddenIndices: Ze
            } = this, $e = this._getUniformDataChanges() || [];
            for (const {
                    method: af,
                    start: bf,
                    count: cf
                }
                of $e) {
                Te(Ze, bf, '_removeElements' === af ? -cf : cf);
            }
        }
        _getUniformDataChanges() {
            const Ze = this._dataChanges;
            if (!Ze || !Ze.length)
                return;
            this._dataChanges = [];
            const $e = this.data.datasets.length,
                af = bf => new Set(Ze.filter(cf => cf[0] === bf).map((cf, df) => df + ',' + cf.splice(1).join(','))),
                bf = af(0);
            for (let cf = 1; cf < $e; cf++)
                if (!(0, $e.ag)(bf, af(cf)))
                    return;
            return Array.from(bf).map(df => df.split(',')).map(df => ({
                method: df[1],
                start: +df[2],
                count: +df[3]
            }));
        }
        _updateLayout(Ze) {
            if (!1 === this.notifyPlugins('beforeLayout', {
                    cancelable: !0
                }))
                return;
            bd.update(this, this.width, this.height, Ze);
            const $e = this.chartArea,
                af = $e.width <= 0 || $e.height <= 0;
            this._layers = [], (0, $e.F)(this.boxes, bf => {
                af && 'chartArea' === bf.position || (bf.configure && bf.configure(), this._layers.push(...bf._layers()));
            }, this), this._layers.forEach((bf, cf) => {
                bf._idx = cf;
            }), this.notifyPlugins('afterLayout');
        }
        _updateDatasets(Ze) {
            if (!1 !== this.notifyPlugins('beforeDatasetsUpdate', {
                    mode: Ze,
                    cancelable: !0
                })) {
                for (let $e = 0, af = this.data.datasets.length; $e < af; ++$e)
                    this.getDatasetMeta($e).controller.configure();
                for (let bf = 0, cf = this.data.datasets.length; bf < cf; ++bf)
                    this._updateDataset(bf, (0, $e.a7)($e) ? $e({
                        datasetIndex: bf
                    }) : $e);
                this.notifyPlugins('afterDatasetsUpdate', {
                    mode: $e
                });
            }
        }
        _updateDataset(Ze, $e) {
            const af = this.getDatasetMeta(Ze),
                bf = {
                    meta: af,
                    index: Ze,
                    mode: $e,
                    cancelable: !0
                };
            !1 !== this.notifyPlugins('beforeDatasetUpdate', bf) && (af.controller._update($e), bf.cancelable = !1, this.notifyPlugins('afterDatasetUpdate', bf));
        }
        render() {
            !1 !== this.notifyPlugins('beforeRender', {
                cancelable: !0
            }) && (ge.has(this) ? this.attached && !ge.running(this) && ge.start(this) : (this.draw(), Ke({
                chart: this
            })));
        }
        draw() {
            let Ze;
            if (this._resizeBeforeDraw) {
                const {
                    width: $e,
                    height: af
                } = this._resizeBeforeDraw;
                this._resize(Ze, af), this._resizeBeforeDraw = null;
            }
            if (this.clear(), this.width <= 0 || this.height <= 0)
                return;
            if (!1 === this.notifyPlugins('beforeDraw', {
                    cancelable: !0
                }))
                return;
            const bf = this._layers;
            for (Ze = 0; Ze < bf.length && bf[Ze].z <= 0; ++Ze)
                bf[Ze].draw(this.chartArea);
            for (this._drawDatasets(); Ze < bf.length; ++Ze)
                bf[Ze].draw(this.chartArea);
            this.notifyPlugins('afterDraw');
        }
        _getSortedDatasetMetas(Ze) {
            const $e = this._sortedMetasets,
                af = [];
            let bf, cf;
            for (bf = 0, cf = $e.length; bf < cf; ++bf) {
                const df = $e[bf];
                Ze && !cf.visible || af.push(cf);
            }
            return af;
        }
        getSortedVisibleDatasetMetas() {
            return this._getSortedDatasetMetas(!0);
        }
        _drawDatasets() {
            if (!1 === this.notifyPlugins('beforeDatasetsDraw', {
                    cancelable: !0
                }))
                return;
            const Ze = this.getSortedVisibleDatasetMetas();
            for (let $e = Ze.length - 1; $e >= 0; --$e)
                this._drawDataset(Ze[$e]);
            this.notifyPlugins('afterDatasetsDraw');
        }
        _drawDataset(Ze) {
            const $e = this.ctx,
                af = Ze._clip,
                bf = !af.disabled,
                cf = function(df) {
                    const {
                        xScale: ef,
                        yScale: ff
                    } = df;
                    if (ef && ff)
                        return {
                            left: ef.left,
                            right: ef.right,
                            top: ff.top,
                            bottom: ff.bottom
                        };
                }(Ze) || this.chartArea,
                df = {
                    meta: Ze,
                    index: Ze.index,
                    cancelable: !0
                };
            !1 !== this.notifyPlugins('beforeDatasetDraw', df) && (bf && (0, $e.Y)($e, {
                left: !1 === af.left ? 0 : cf.left - af.left,
                right: !1 === af.right ? this.width : cf.right + af.right,
                top: !1 === af.top ? 0 : cf.top - af.top,
                bottom: !1 === af.bottom ? this.height : cf.bottom + af.bottom
            }), Ze.controller.draw(), bf && (0, $e.$)($e), df.cancelable = !1, this.notifyPlugins('afterDatasetDraw', df));
        }
        isPointInArea(Ze) {
            return (0, $e.C)(Ze, this.chartArea, this._minPadding);
        }
        getElementsAtEventForMode(Ze, $e, af, bf) {
            const cf = nc.modes[$e];
            return 'function' == typeof cf ? cf(this, Ze, af, bf) : [];
        }
        getDatasetMeta(Ze) {
            const $e = this.data.datasets[Ze],
                af = this._metasets;
            let bf = af.filter(cf => cf && cf._dataset === $e).pop();
            return bf || (bf = {
                type: null,
                data: [],
                dataset: null,
                controller: null,
                hidden: null,
                xAxisID: null,
                yAxisID: null,
                order: $e && $e.order || 0,
                index: Ze,
                _dataset: $e,
                _parsed: [],
                _sorted: !1
            }, af.push(bf)), bf;
        }
        getContext() {
            return this.$context || (this.$context = (0, $e.j)(null, {
                chart: this,
                type: 'chart'
            }));
        }
        getVisibleDatasetCount() {
            return this.getSortedVisibleDatasetMetas().length;
        }
        isDatasetVisible(Ze) {
            const $e = this.data.datasets[Ze];
            if (!$e)
                return !1;
            const af = this.getDatasetMeta(Ze);
            return 'boolean' == typeof af.hidden ? !af.hidden : !$e.hidden;
        }
        setDatasetVisibility(Ze, $e) {
            this.getDatasetMeta(Ze).hidden = !$e;
        }
        toggleDataVisibility(Ze) {
            this._hiddenIndices[Ze] = !this._hiddenIndices[Ze];
        }
        getDataVisibility(Ze) {
            return !this._hiddenIndices[Ze];
        }
        _updateVisibility(Ze, $e, af) {
            const bf = af ? 'show' : 'hide',
                cf = this.getDatasetMeta(Ze),
                df = cf.controller._resolveAnimations(void 0, bf);
            (0, $e.h)($e) ? (cf.data[$e].hidden = !af, this.update()) : (this.setDatasetVisibility(Ze, af), df.update(cf, {
                visible: af
            }), this.update(ef => ef.datasetIndex === Ze ? bf : void 0));
        }
        hide(Ze, $e) {
            this._updateVisibility(Ze, $e, !1);
        }
        show(Ze, $e) {
            this._updateVisibility(Ze, $e, !0);
        }
        _destroyDatasetMeta(Ze) {
            const $e = this._metasets[Ze];
            $e && $e.controller && $e.controller._destroy(), delete this._metasets[Ze];
        }
        _stop() {
            let Ze, $e;
            for (this.stop(), ge.remove(this), Ze = 0, $e = this.data.datasets.length; Ze < $e; ++Ze)
                this._destroyDatasetMeta(Ze);
        }
        destroy() {
            this.notifyPlugins('beforeDestroy');
            const {
                canvas: Ze,
                ctx: $e
            } = this;
            this._stop(), this.config.clearCache(), Ze && (this.unbindEvents(), (0, $e.af)(Ze, $e), this.platform.releaseContext($e), this.canvas = null, this.ctx = null), delete Re[this.id], this.notifyPlugins('afterDestroy');
        }
        toBase64Image(...ud) {
            return this.canvas.toDataURL(...ud);
        }
        bindEvents() {
            this.bindUserEvents(), this.options.responsive ? this.bindResponsiveEvents() : this.attached = !0;
        }
        bindUserEvents() {
            const Ze = this._listeners,
                $e = this.platform,
                af = (bf, cf) => {
                    $e.addEventListener(this, bf, cf), Ze[bf] = cf;
                },
                bf = (cf, df, ef) => {
                    cf.offsetX = df, cf.offsetY = ef, this._eventHandler(cf);
                };
            (0, $e.F)(this.options.events, cf => af(cf, bf));
        }
        bindResponsiveEvents() {
            this._responsiveListeners || (this._responsiveListeners = {});
            const Ze = this._responsiveListeners,
                $e = this.platform,
                af = (bf, cf) => {
                    $e.addEventListener(this, bf, cf), Ze[bf] = cf;
                },
                bf = (cf, df) => {
                    Ze[cf] && ($e.removeEventListener(this, cf, df), delete Ze[cf]);
                },
                cf = (df, ef) => {
                    this.canvas && this.resize(df, ef);
                };
            let df;
            const ef = () => {
                bf('attach', ef), this.attached = !0, this.resize(), af('resize', cf), af('detach', df);
            };
            df = () => {
                this.attached = !1, bf('resize', cf), this._stop(), this._resize(0, 0), af('attach', ef);
            }, $e.isAttached(this.canvas) ? ef() : df();
        }
        unbindEvents() {
            (0, $e.F)(this._listeners, (Ze, $e) => {
                this.platform.removeEventListener(this, $e, Ze);
            }), this._listeners = {}, (0, $e.F)(this._responsiveListeners, (Ze, $e) => {
                this.platform.removeEventListener(this, $e, Ze);
            }), this._responsiveListeners = void 0;
        }
        updateHoverStyle(Ze, $e, af) {
            const bf = af ? 'set' : 'remove';
            let cf, df, ef, ff;
            for ('dataset' === $e && (cf = this.getDatasetMeta(Ze[0].datasetIndex), cf.controller['_' + bf + 'DatasetHoverStyle']()), ef = 0, ff = Ze.length; ef < ff; ++ef) {
                df = Ze[ef];
                const gf = df && this.getDatasetMeta(df.datasetIndex).controller;
                gf && gf[bf + 'HoverStyle'](df.element, df.datasetIndex, df.index);
            }
        }
        getActiveElements() {
            return this._active || [];
        }
        setActiveElements(Ze) {
            const $e = this._active || [],
                af = Ze.map(({
                    datasetIndex: bf,
                    index: cf
                }) => {
                    const df = this.getDatasetMeta(bf);
                    if (!df)
                        throw new Error('No dataset found at index ' + bf);
                    return {
                        datasetIndex: bf,
                        element: df.data[cf],
                        index: cf
                    };
                });
            !(0, $e.ah)(af, $e) && (this._active = af, this._lastEvent = null, this._updateHoverStyles(af, $e));
        }
        notifyPlugins(Ze, $e, af) {
            return this._plugins.notify(this, Ze, $e, af);
        }
        isPluginEnabled(Ze) {
            return 1 === this._plugins._cache.filter($e => $e.plugin.id === Ze).length;
        }
        _updateHoverStyles(Ze, $e, af) {
            const bf = this.options.hover,
                cf = (df, ef) => df.filter(ff => !ef.some(gf => ff.datasetIndex === gf.datasetIndex && ff.index === gf.index)),
                df = cf($e, Ze),
                ef = af ? Ze : cf(Ze, $e);
            df.length && this.updateHoverStyle(df, bf.mode, !1), ef.length && bf.mode && this.updateHoverStyle(ef, bf.mode, !0);
        }
        _eventHandler(Ze, $e) {
            const af = {
                    event: Ze,
                    replay: $e,
                    cancelable: !0,
                    inChartArea: this.isPointInArea(Ze)
                },
                bf = cf => (cf.options.events || this.options.events).includes(Ze.native.type);
            if (!1 === this.notifyPlugins('beforeEvent', af, bf))
                return;
            const cf = this._handleEvent(Ze, $e, af.inChartArea);
            return af.cancelable = !1, this.notifyPlugins('afterEvent', af, bf), (cf || af.changed) && this.render(), this;
        }
        _handleEvent(Ze, $e, af) {
            const {
                _active: bf = [],
                options: cf
            } = this, df = $e, ef = this._getActiveElements(Ze, bf, af, df), ff = (0, $e.ai)(Ze), gf = function(hf, jf, kf, lf) {
                return kf && 'mouseout' !== hf.type ? lf ? jf : hf : null;
            }(Ze, this._lastEvent, af, ff);
            af && (this._lastEvent = null, (0, $e.Q)(cf.onHover, [
                Ze,
                ef,
                this
            ], this), ff && (0, $e.Q)(cf.onClick, [
                Ze,
                ef,
                this
            ], this));
            const hf = !(0, $e.ah)(ef, bf);
            return (hf || $e) && (this._active = ef, this._updateHoverStyles(ef, bf, $e)), this._lastEvent = gf, hf;
        }
        _getActiveElements(Ze, $e, af, bf) {
            if ('mouseout' === Ze.type)
                return [];
            if (!af)
                return $e;
            const cf = this.options.hover;
            return this.getElementsAtEventForMode(Ze, cf.mode, cf, bf);
        }
        constructor(Ze, $e) {
            const af = this.config = new De($e),
                bf = Qe(Ze),
                cf = Se(bf);
            if (cf)
                throw new Error('Canvas is already in use. Chart with ID \'' + cf.id + '\' must be destroyed before the canvas with ID \'' + cf.canvas.id + '\' can be reused.');
            const df = af.createResolver(af.chartOptionScopes(), this.getContext());
            this.platform = new(af.platform || (function(ef) {
                return !(0, $e.M)() || 'undefined' != typeof OffscreenCanvas && ef instanceof OffscreenCanvas ? dd : Ed;
            }(bf)))(), this.platform.updateConfig(af);
            const ef = this.platform.acquireContext(bf, df.aspectRatio),
                ff = ef && ef.canvas,
                gf = ff && ff.height,
                hf = ff && ff.width;
            this.id = (0, $e.ac)(), this.ctx = ef, this.canvas = ff, this.width = hf, this.height = gf, this._options = df, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new ne(), this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = (0, $e.ad)(jf => this.update(jf), df.resizeDelay || 0), this._dataChanges = [], Re[this.id] = this, ef && ff ? (ge.listen(this, 'complete', Ke), ge.listen(this, 'progress', Ne), this._initialize(), this.attached && this.update()) : console.error('Failed to create chart: can\'t acquire context from the given item');
        }
    }

    function _Ze() {
        return (0, $e.F)(_Ye.instances, $e => $e._plugins.invalidate());
    }

    function $e(af, bf, cf, df) {
        const ef = (h = af.options.borderRadius, (0, $e.ak)(h, [
            'outerStart',
            'outerEnd',
            'innerStart',
            'innerEnd'
        ]));
        var ff;
        const gf = (cf - bf) / 2,
            hf = Math.min(gf, df * bf / 2),
            jf = kf => {
                const lf = (cf - Math.min(gf, kf)) * df / 2;
                return (0, $e.S)(kf, 0, Math.min(gf, lf));
            };
        return {
            outerStart: jf(ef.outerStart),
            outerEnd: jf(ef.outerEnd),
            innerStart: (0, $e.S)(ef.innerStart, 0, hf),
            innerEnd: (0, $e.S)(ef.innerEnd, 0, hf)
        };
    }

    function ff(gf, hf, jf, kf) {
        return {
            x: jf + gf * Math.cos(hf),
            y: kf + gf * Math.sin(hf)
        };
    }

    function gf(hf, jf, kf, lf, mf, nf) {
        const {
            x: pf,
            y: qf,
            startAngle: rf,
            pixelMargin: sf,
            innerRadius: tf
        } = jf, uf = Math.max(jf.outerRadius + lf + kf - l, 0), vf = m > 0 ? m + lf + kf + l : 0;
        let wf = 0;
        const xf = mf - rf;
        if (lf) {
            const yf = ((m > 0 ? m - lf : 0) + (n > 0 ? n - lf : 0)) / 2;
            wf = (y - (0 !== hf ? y * hf / (hf + lf) : y)) / 2;
        }
        const zf = (y - Math.max(0.001, y * n - kf / $e.P) / n) / 2,
            Af = rf + A + wf,
            Bf = mf - A - wf,
            {
                outerStart: Cf,
                outerEnd: Df,
                innerStart: Ef,
                innerEnd: Ff
            } = $e(jf, s, n, F - C),
            Gf = n - V,
            Hf = n - X,
            If = C + V / db,
            Jf = F - X / eb,
            Kf = s + Ef,
            Lf = s + Ff,
            Mf = C + Ef / pb,
            Nf = F - Ff / qb;
        if (hf.beginPath(), nf) {
            const Of = (ib + jb) / 2;
            if (hf.arc(pf, qf, n, ib, jf), hf.arc(pf, qf, n, jf, jb), X > 0) {
                const Pf = ff(eb, jb, pf, qf);
                hf.arc(jf.x, jf.y, X, jb, F + $e.H);
            }
            const Qf = ff(qb, F, pf, qf);
            if (hf.lineTo(kf.x, kf.y), Ff > 0) {
                const Rf = ff(qb, _Bb, pf, qf);
                hf.arc(jf.x, jf.y, Ff, F + $e.H, _Bb + Math.PI);
            }
            const Sf = (F - Ff / s + (C + Ef / s)) / 2;
            if (hf.arc(pf, qf, s, F - Ff / s, lf, !0), hf.arc(pf, qf, s, lf, C + Ef / s, !0), Ef > 0) {
                const Tf = ff(pb, _xb, pf, qf);
                hf.arc(jf.x, jf.y, Ef, _xb + Math.PI, C - $e.H);
            }
            const Uf = ff(db, C, pf, qf);
            if (hf.lineTo(mf.x, mf.y), V > 0) {
                const Vf = ff(db, ib, pf, qf);
                hf.arc(jf.x, jf.y, V, C - $e.H, ib);
            }
        } else {
            hf.moveTo(pf, qf);
            const Wf = Math.cos(ib) * n + pf,
                Xf = Math.sin(ib) * n + qf;
            hf.lineTo(jf, kf);
            const Yf = Math.cos(jb) * n + pf,
                Zf = Math.sin(jb) * n + qf;
            hf.lineTo(lf, mf);
        }
        hf.closePath();
    }

    function Tf(Uf, Vf, Wf, Xf, Yf) {
        const {
            fullCircles: Zf,
            startAngle: $f,
            circumference: ag,
            options: bg
        } = Vf, {
            borderWidth: cg,
            borderJoinStyle: dg
        } = bg, eg = 'inner' === bg.borderAlign;
        if (!l)
            return;
        n ? (Uf.lineWidth = 2 * l, Uf.lineJoin = m || 'round') : (Uf.lineWidth = l, Uf.lineJoin = m || 'bevel');
        let fg = Vf.endAngle;
        if (h) {
            gf(Uf, Vf, Wf, Xf, fg, Yf);
            for (let gg = 0; gg < h; ++gg)
                Uf.stroke();
            isNaN(ag) || (fg = $f + (ag % $e.T || $e.T));
        }
        n && function(gg, hg, ig) {
            const {
                startAngle: jg,
                pixelMargin: kg,
                x: lg,
                y: mg,
                outerRadius: ng,
                innerRadius: og
            } = hg;
            let pg = kg / ng;
            gg.beginPath(), gg.arc(lg, mg, ng, jg - pg, ig + pg), og > kg ? (pg = kg / og, gg.arc(lg, mg, og, ig + pg, jg - pg, !0)) : gg.arc(lg, mg, kg, ig + $e.H, jg - $e.H), gg.closePath(), gg.clip();
        }(Uf, Vf, fg), h || (gf(Uf, Vf, Wf, Xf, fg, Yf), Uf.stroke());
    }
    (0, Zf.default)(_Ye, 'defaults', $e.d), (0, Zf.default)(_Ye, 'instances', Re), (0, Zf.default)(_Ye, 'overrides', $e.a3), (0, Zf.default)(_Ye, 'registry', me), (0, Zf.default)(_Ye, 'version', '4.2.0'), (0, Zf.default)(_Ye, 'getChart', Se);
    class ag extends Fd {
        inRange(bg, cg, dg) {
            const eg = this.getProps([
                    'x',
                    'y'
                ], dg),
                {
                    angle: fg,
                    distance: gg
                } = (0, $e.D)(eg, {
                    x: bg,
                    y: cg
                }),
                {
                    startAngle: hg,
                    endAngle: ig,
                    innerRadius: jg,
                    outerRadius: kg,
                    circumference: lg
                } = this.getProps([
                    'startAngle',
                    'endAngle',
                    'innerRadius',
                    'outerRadius',
                    'circumference'
                ], dg),
                mg = this.options.spacing / 2,
                ng = (0, $e.v)(lg, ig - hg) >= $e.T || (0, $e.p)(fg, hg, ig),
                og = (0, $e.aj)(gg, jg + mg, kg + mg);
            return ng && og;
        }
        getCenterPoint(bg) {
            const {
                x: cg,
                y: dg,
                startAngle: eg,
                endAngle: fg,
                innerRadius: gg,
                outerRadius: hg
            } = this.getProps([
                'x',
                'y',
                'startAngle',
                'endAngle',
                'innerRadius',
                'outerRadius',
                'circumference'
            ], bg), {
                offset: ig,
                spacing: jg
            } = this.options, kg = (eg + fg) / 2, lg = (gg + hg + jg + ig) / 2;
            return {
                x: cg + Math.cos(kg) * lg,
                y: dg + Math.sin(kg) * lg
            };
        }
        tooltipPosition(bg) {
            return this.getCenterPoint(bg);
        }
        draw(bg) {
            const {
                options: cg,
                circumference: dg
            } = this, eg = (cg.offset || 0) / 4, fg = (cg.spacing || 0) / 2, gg = cg.circular;
            if (this.pixelMargin = 'inner' === cg.borderAlign ? 0.33 : 0, this.fullCircles = dg > $e.T ? Math.floor(dg / $e.T) : 0, 0 === dg || this.innerRadius < 0 || this.outerRadius < 0)
                return;
            bg.save();
            const hg = (this.startAngle + this.endAngle) / 2;
            bg.translate(Math.cos(hg) * eg, Math.sin(hg) * eg);
            const ig = eg * (1 - Math.sin(Math.min($e.P, dg || 0)));
            bg.fillStyle = cg.backgroundColor, bg.strokeStyle = cg.borderColor,
                function(jg, kg, lg, mg, ng) {
                    const {
                        fullCircles: og,
                        startAngle: pg,
                        circumference: qg
                    } = kg;
                    let rg = kg.endAngle;
                    if (og) {
                        gf(jg, kg, lg, mg, rg, ng);
                        for (let sg = 0; sg < og; ++sg)
                            jg.fill();
                        isNaN(qg) || (rg = pg + (qg % $e.T || $e.T));
                    }
                    gf(jg, kg, lg, mg, rg, ng), jg.fill();
                }(bg, this, ig, fg, gg), Tf(bg, this, ig, fg, gg), bg.restore();
        }
        constructor(bg) {
            super(), this.options = void 0, this.circumference = void 0, this.startAngle = void 0, this.endAngle = void 0, this.innerRadius = void 0, this.outerRadius = void 0, this.pixelMargin = 0, this.fullCircles = 0, bg && Object.assign(this, bg);
        }
    }

    function bg(cg, dg, eg = fg) {
        cg.lineCap = (0, $e.v)(eg.borderCapStyle, fg.borderCapStyle), cg.setLineDash((0, $e.v)(eg.borderDash, fg.borderDash)), cg.lineDashOffset = (0, $e.v)(eg.borderDashOffset, fg.borderDashOffset), cg.lineJoin = (0, $e.v)(eg.borderJoinStyle, fg.borderJoinStyle), cg.lineWidth = (0, $e.v)(eg.borderWidth, fg.borderWidth), cg.strokeStyle = (0, $e.v)(eg.borderColor, fg.borderColor);
    }

    function cg(dg, eg, fg) {
        dg.lineTo(fg.x, fg.y);
    }

    function dg(eg, fg, gg = {}) {
        const hg = eg.length,
            {
                start: ig = 0,
                end: jg = hg - 1
            } = gg,
            {
                start: kg,
                end: lg
            } = fg,
            mg = Math.max(ig, h),
            ng = Math.min(jg, lg),
            og = ig < h && jg < h || ig > lg && jg > lg;
        return {
            count: hg,
            start: mg,
            loop: fg.loop,
            ilen: ng < mg && !l ? hg + ng - mg : ng - mg
        };
    }

    function kg(lg, mg, ng, og) {
        const {
            points: pg,
            options: qg
        } = mg, {
            count: rg,
            start: sg,
            loop: tg,
            ilen: ug
        } = dg(pg, ng, og), vg = function(wg) {
            return wg.stepped ? $e.ar : wg.tension || 'monotone' === wg.cubicInterpolationMode ? $e.as : cg;
        }(h);
        let wg, xg, yg, {
            move: zg = !0,
            reverse: Ag
        } = og || {};
        for (wg = 0; wg <= l; ++wg)
            xg = pg[(sg + (Ag ? l - wg : wg)) % rg], xg.skip || (zg ? (lg.moveTo(xg.x, xg.y), zg = !1) : m(lg, yg, xg, Ag, h.stepped), yg = xg);
        return tg && (xg = pg[(sg + (Ag ? l : 0)) % rg], m(lg, yg, xg, Ag, h.stepped)), !!tg;
    }

    function sg(tg, ug, vg, wg) {
        const xg = ug.points,
            {
                count: yg,
                start: zg,
                ilen: Ag
            } = dg(xg, vg, wg),
            {
                move: Bg = !0,
                reverse: Cg
            } = wg || {};
        let Dg, Eg, Fg, Gg, Hg, Ig, Jg = 0,
            Kg = 0;
        const Lg = Mg => (h + (Cg ? Ag - Mg : Mg)) % yg,
            Mg = () => {
                Gg !== Hg && (tg.lineTo(Jg, Hg), tg.lineTo(Jg, Gg), tg.lineTo(Jg, Ig));
            };
        for (Bg && (Eg = xg[F(0)], tg.moveTo(Eg.x, Eg.y)), Dg = 0; Dg <= Ag; ++Dg) {
            if (Eg = xg[F(Dg)], Eg.skip)
                continue;
            const Ng = Eg.x,
                Og = Eg.y,
                Pg = 0 | ug;
            wg === Fg ? (vg < Gg ? Gg = vg : vg > Hg && (Hg = vg), Jg = (Kg * Jg + ug) / ++Kg) : (V(), tg.lineTo(ug, vg), Fg = wg, Kg = 0, Gg = Hg = vg), Ig = vg;
        }
        V();
    }

    function Dg(Eg) {
        const Fg = Eg.options,
            Gg = Fg.borderDash && Fg.borderDash.length;
        return !(Eg._decimated || Eg._loop || Fg.tension || 'monotone' === Fg.cubicInterpolationMode || Fg.stepped || Gg) ? sg : kg;
    }
    (0, xg.default)(ag, 'id', 'arc'), (0, xg.default)(ag, 'defaults', {
        borderAlign: 'center',
        borderColor: '#fff',
        borderJoinStyle: void 0,
        borderRadius: 0,
        borderWidth: 2,
        offset: 0,
        spacing: 0,
        angle: void 0,
        circular: !0
    }), (0, xg.default)(ag, 'defaultRoutes', {
        backgroundColor: 'backgroundColor'
    });
    const Gg = 'function' == typeof Path2D;

    function Hg(Ig, Jg, Kg, Lg) {
        Gg && !Jg.options.segment ? function(Mg, Ng, Og, Pg) {
            let Qg = Ng._path;
            Qg || (Qg = Ng._path = new Path2D(), Ng.path(Qg, Og, Pg) && Qg.closePath()), bg(Mg, Ng.options), Mg.stroke(Qg);
        }(Ig, Jg, Kg, Lg) : function(Mg, Ng, Og, Pg) {
            const {
                segments: Qg,
                options: Rg
            } = Ng, Sg = Dg(Ng);
            for (const Tg of Qg)
                bg(Mg, Rg, Tg.style), Mg.beginPath(), Sg(Mg, Ng, Tg, {
                    start: Og,
                    end: Og + Pg - 1
                }) && Mg.closePath(), Mg.stroke();
        }(Ig, Jg, Kg, Lg);
    }
    class _Ig extends Fd {
        updateControlPoints(Jg, Kg) {
            const Lg = this.options;
            if ((Lg.tension || 'monotone' === Lg.cubicInterpolationMode) && !Lg.stepped && !this._pointsUpdated) {
                const Mg = Lg.spanGaps ? this._loop : this._fullLoop;
                (0, yg.al)(this._points, Lg, Jg, Mg, Kg), this._pointsUpdated = !0;
            }
        }
        set points(Jg) {
            this._points = Jg, delete this._segments, delete this._path, this._pointsUpdated = !1;
        }
        get points() {
            return this._points;
        }
        get segments() {
            return this._segments || (this._segments = (0, yg.am)(this, this.options.segment));
        }
        first() {
            const Jg = this.segments,
                Kg = this.points;
            return Jg.length && Kg[Jg[0].start];
        }
        last() {
            const Jg = this.segments,
                Kg = this.points,
                Lg = Jg.length;
            return Lg && Kg[Jg[Lg - 1].end];
        }
        interpolate(Jg, Kg) {
            const Lg = this.options,
                Mg = Jg[Kg],
                Ng = this.points,
                Og = (0, yg.an)(this, {
                    property: Kg,
                    start: Mg,
                    end: Mg
                });
            if (!Og.length)
                return;
            const Pg = [],
                Qg = function(Rg) {
                    return Rg.stepped ? yg.ao : Rg.tension || 'monotone' === Rg.cubicInterpolationMode ? yg.ap : yg.aq;
                }(Lg);
            let Rg, Sg;
            for (Rg = 0, Sg = Og.length; Rg < Sg; ++Rg) {
                const {
                    start: Tg,
                    end: Ug
                } = Og[Rg], Vg = Ng[Tg], Wg = Ng[Sg];
                if (Vg === Wg) {
                    Pg.push(Vg);
                    continue;
                }
                const Xg = Qg(Vg, Wg, Math.abs((Mg - Vg[Kg]) / (Wg[Kg] - Vg[Kg])), Lg.stepped);
                Xg[Kg] = Jg[Kg], Pg.push(Xg);
            }
            return 1 === Pg.length ? Pg[0] : Pg;
        }
        pathSegment(Jg, Kg, Lg) {
            return Dg(this)(Jg, this, Kg, Lg);
        }
        path(Jg, Kg, Lg) {
            const Mg = this.segments,
                Ng = Dg(this);
            let Og = this._loop;
            Kg = Kg || 0, Lg = Lg || this.points.length - Kg;
            for (const Pg of Mg)
                Og &= Ng(Jg, this, Pg, {
                    start: Kg,
                    end: Kg + Lg - 1
                });
            return !!Og;
        }
        draw(Jg, Kg, Lg, Mg) {
            const Ng = this.options || {};
            (this.points || []).length && Ng.borderWidth && (Jg.save(), Hg(Jg, this, Lg, Mg), Jg.restore()), this.animated && (this._pointsUpdated = !1, this._path = void 0);
        }
        constructor(Jg) {
            super(), this.animated = !0, this.options = void 0, this._chart = void 0, this._loop = void 0, this._fullLoop = void 0, this._path = void 0, this._points = void 0, this._segments = void 0, this._decimated = !1, this._pointsUpdated = !1, this._datasetIndex = void 0, Jg && Object.assign(this, Jg);
        }
    }

    function Jg(Kg, Lg, Mg, Ng) {
        const Og = Kg.options,
            {
                [Pg]: Qg
            } = Kg.getProps([Mg], Ng);
        return Math.abs(Lg - Qg) < Og.radius + Og.hitRadius;
    }
    (0, Og.default)(_Ig, 'id', 'line'), (0, Og.default)(_Ig, 'defaults', {
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
    }), (0, Og.default)(_Ig, 'defaultRoutes', {
        backgroundColor: 'backgroundColor',
        borderColor: 'borderColor'
    }), (0, Og.default)(_Ig, 'descriptors', {
        _scriptable: !0,
        _indexable: Ng => 'borderDash' !== Ng && 'fill' !== Ng
    });
    class _Ng extends Fd {
        inRange(Og, Pg, Qg) {
            const Rg = this.options,
                {
                    x: Sg,
                    y: Tg
                } = this.getProps([
                    'x',
                    'y'
                ], Qg);
            return Math.pow(Og - Sg, 2) + Math.pow(Pg - Tg, 2) < Math.pow(Rg.hitRadius + Rg.radius, 2);
        }
        inXRange(Og, Pg) {
            return Jg(this, Og, 'x', Pg);
        }
        inYRange(Og, Pg) {
            return Jg(this, Og, 'y', Pg);
        }
        getCenterPoint(Og) {
            const {
                x: Pg,
                y: Qg
            } = this.getProps([
                'x',
                'y'
            ], Og);
            return {
                x: Pg,
                y: Qg
            };
        }
        size(Og) {
            let Pg = (Og = Og || this.options || {}).radius || 0;
            Pg = Math.max(Pg, Pg && Og.hoverRadius || 0);
            return 2 * (Pg + (Pg && Og.borderWidth || 0));
        }
        draw(Og, Pg) {
            const Qg = this.options;
            this.skip || Qg.radius < 0.1 || !(0, Qg.C)(this, Pg, this.size(Qg) / 2) || (Og.strokeStyle = Qg.borderColor, Og.lineWidth = Qg.borderWidth, Og.fillStyle = Qg.backgroundColor, (0, Qg.at)(Og, Qg, this.x, this.y));
        }
        getRange() {
            const Og = this.options || {};
            return Og.radius + Og.hitRadius;
        }
        constructor(Og) {
            super(), this.options = void 0, this.parsed = void 0, this.skip = void 0, this.stop = void 0, Og && Object.assign(this, Og);
        }
    }

    function Og(Pg, Qg) {
        const {
            x: Rg,
            y: Sg,
            base: Tg,
            width: Ug,
            height: Vg
        } = Pg.getProps([
            'x',
            'y',
            'base',
            'width',
            'height'
        ], Qg);
        let Wg, Xg, Yg, Zg, $g;
        return Pg.horizontal ? ($g = h / 2, Wg = Math.min(Rg, Tg), Xg = Math.max(Rg, Tg), Yg = Sg - $g, Zg = Sg + $g) : ($g = Ug / 2, Wg = Rg - $g, Xg = Rg + $g, Yg = Math.min(Sg, Tg), Zg = Math.max(Sg, Tg)), {
            left: Wg,
            top: Yg,
            right: Xg,
            bottom: Zg
        };
    }

    function Ug(Vg, Wg, Xg, Yg) {
        return Vg ? 0 : (0, Ug.S)(Wg, Xg, Yg);
    }

    function Vg(Wg) {
        const Xg = Og(Wg),
            Yg = Xg.right - Xg.left,
            Zg = Xg.bottom - Xg.top,
            $g = function(ah, bh, ch) {
                const dh = ah.options.borderWidth,
                    eh = ah.borderSkipped,
                    fh = (0, Ug.av)(dh);
                return {
                    t: Ug(eh.top, fh.top, 0, ch),
                    r: Ug(eh.right, fh.right, 0, bh),
                    b: Ug(eh.bottom, fh.bottom, 0, ch),
                    l: Ug(eh.left, fh.left, 0, bh)
                };
            }(Wg, Yg / 2, Zg / 2),
            ah = function(bh, ch, dh) {
                const {
                    enableBorderRadius: eh
                } = bh.getProps(['enableBorderRadius']), fh = bh.options.borderRadius, gh = (0, Ug.aw)(fh), hh = Math.min(ch, dh), ih = bh.borderSkipped, jh = eh || (0, Ug.i)(fh);
                return {
                    topLeft: Ug(!jh || ih.top || ih.left, gh.topLeft, 0, hh),
                    topRight: Ug(!jh || ih.top || ih.right, gh.topRight, 0, hh),
                    bottomLeft: Ug(!jh || ih.bottom || ih.left, gh.bottomLeft, 0, hh),
                    bottomRight: Ug(!jh || ih.bottom || ih.right, gh.bottomRight, 0, hh)
                };
            }(Wg, Yg / 2, Zg / 2);
        return {
            outer: {
                x: Xg.left,
                y: Xg.top,
                w: Yg,
                h: Zg,
                radius: h
            },
            inner: {
                x: Xg.left + $g.l,
                y: Xg.top + $g.t,
                w: Yg - $g.l - $g.r,
                h: Zg - $g.t - $g.b,
                radius: {
                    topLeft: Math.max(0, h.topLeft - Math.max($g.t, $g.l)),
                    topRight: Math.max(0, h.topRight - Math.max($g.t, $g.r)),
                    bottomLeft: Math.max(0, h.bottomLeft - Math.max($g.b, $g.l)),
                    bottomRight: Math.max(0, h.bottomRight - Math.max($g.b, $g.r))
                }
            }
        };
    }

    function ah(bh, ch, dh, eh) {
        const fh = null === ch,
            gh = null === dh,
            hh = bh && !(fh && h) && Og(bh, eh);
        return hh && (fh || (0, Ug.aj)(ch, hh.left, hh.right)) && (h || (0, Ug.aj)(dh, hh.top, hh.bottom));
    }

    function eh(fh, gh) {
        fh.rect(gh.x, gh.y, gh.w, gh.h);
    }

    function fh(gh, hh, ih = {}) {
        const jh = gh.x !== ih.x ? -hh : 0,
            kh = gh.y !== ih.y ? -hh : 0,
            lh = (gh.x + gh.w !== ih.x + ih.w ? hh : 0) - jh,
            mh = (gh.y + gh.h !== ih.y + ih.h ? hh : 0) - kh;
        return {
            x: gh.x + jh,
            y: gh.y + kh,
            w: gh.w + lh,
            h: gh.h + h,
            radius: gh.radius
        };
    }
    (0, kh.default)(_Ng, 'id', 'point'), (0, kh.default)(_Ng, 'defaults', {
        borderWidth: 1,
        hitRadius: 1,
        hoverBorderWidth: 1,
        hoverRadius: 4,
        pointStyle: 'circle',
        radius: 3,
        rotation: 0
    }), (0, kh.default)(_Ng, 'defaultRoutes', {
        backgroundColor: 'backgroundColor',
        borderColor: 'borderColor'
    });
    class kh extends Fd {
        draw(lh) {
            const {
                inflateAmount: mh,
                options: {
                    borderColor: nh,
                    backgroundColor: oh
                }
            } = this, {
                inner: ph,
                outer: qh
            } = Vg(this), rh = (sg = qh.radius).topLeft || sg.topRight || sg.bottomLeft || sg.bottomRight ? lh.au : eh;
            var sh;
            lh.save(), qh.w === ph.w && qh.h === ph.h || (lh.beginPath(), rh(lh, fh(qh, mh, ph)), lh.clip(), rh(lh, fh(ph, -mh, qh)), lh.fillStyle = nh, lh.fill('evenodd')), lh.beginPath(), rh(lh, fh(ph, mh)), lh.fillStyle = oh, lh.fill(), lh.restore();
        }
        inRange(lh, mh, nh) {
            return ah(this, lh, mh, nh);
        }
        inXRange(lh, mh) {
            return ah(this, lh, null, mh);
        }
        inYRange(lh, mh) {
            return ah(this, null, lh, mh);
        }
        getCenterPoint(lh) {
            const {
                x: mh,
                y: nh,
                base: oh,
                horizontal: ph
            } = this.getProps([
                'x',
                'y',
                'base',
                'horizontal'
            ], lh);
            return {
                x: ph ? (mh + oh) / 2 : mh,
                y: ph ? nh : (nh + oh) / 2
            };
        }
        getRange(lh) {
            return 'x' === lh ? this.width / 2 : this.height / 2;
        }
        constructor(lh) {
            super(), this.options = void 0, this.horizontal = void 0, this.base = void 0, this.width = void 0, this.height = void 0, this.inflateAmount = void 0, lh && Object.assign(this, lh);
        }
    }
    (0, kh.default)(kh, 'id', 'bar'), (0, kh.default)(kh, 'defaults', {
        borderSkipped: 'start',
        borderWidth: 0,
        borderRadius: 0,
        inflateAmount: 'auto',
        pointStyle: void 0
    }), (0, kh.default)(kh, 'defaultRoutes', {
        backgroundColor: 'backgroundColor',
        borderColor: 'borderColor'
    });
    new WeakMap();
    const lh = {
        average(mh) {
            if (!mh.length)
                return !1;
            let nh, oh, ph = 0,
                qh = 0,
                rh = 0;
            for (nh = 0, oh = mh.length; nh < oh; ++nh) {
                const sh = mh[nh].element;
                if (oh && oh.hasValue()) {
                    const th = oh.tooltipPosition();
                    ph += th.x, qh += th.y, ++rh;
                }
            }
            return {
                x: ph / rh,
                y: qh / rh
            };
        },
        nearest(mh, nh) {
            if (!mh.length)
                return !1;
            let oh, ph, qh, rh = nh.x,
                sh = nh.y,
                th = Number.POSITIVE_INFINITY;
            for (oh = 0, ph = mh.length; oh < ph; ++oh) {
                const uh = mh[oh].element;
                if (ph && ph.hasValue()) {
                    const vh = ph.getCenterPoint(),
                        wh = (0, lh.aE)(nh, vh);
                    oh < th && (th = oh, qh = ph);
                }
            }
            if (qh) {
                const xh = qh.tooltipPosition();
                rh = xh.x, sh = xh.y;
            }
            return {
                x: rh,
                y: sh
            };
        }
    };

    function mh(nh, oh) {
        return oh && ((0, lh.b)(oh) ? Array.prototype.push.apply(nh, oh) : nh.push(oh)), nh;
    }

    function nh(oh) {
        return ('string' == typeof oh || oh instanceof String) && oh.indexOf('\n') > -1 ? oh.split('\n') : oh;
    }

    function oh(ph, qh) {
        const {
            element: rh,
            datasetIndex: sh,
            index: th
        } = qh, uh = ph.getDatasetMeta(sh).controller, {
            label: vh,
            value: wh
        } = uh.getLabelAndValue(th);
        return {
            chart: ph,
            label: h,
            parsed: uh.getParsed(th),
            raw: ph.data.datasets[sh].data[th],
            formattedValue: wh,
            dataset: uh.getDataset(),
            dataIndex: th,
            datasetIndex: sh,
            element: rh
        };
    }

    function vh(wh, xh) {
        const yh = wh.chart.ctx,
            {
                body: zh,
                footer: Ah,
                title: Bh
            } = wh,
            {
                boxWidth: Ch,
                boxHeight: Dh
            } = xh,
            Eh = (0, uh.a0)(xh.bodyFont),
            Fh = (0, uh.a0)(xh.titleFont),
            Gh = (0, uh.a0)(xh.footerFont),
            Hh = h.length,
            Ih = Ah.length,
            Jh = zh.length,
            Kh = (0, uh.E)(xh.padding);
        let Lh = y.height,
            Mh = 0,
            Nh = zh.reduce((Oh, Ph) => Oh + Ph.before.length + Ph.lines.length + Ph.after.length, 0);
        if (Nh += wh.beforeBody.length + wh.afterBody.length, n && (Lh += n * l.lineHeight + (n - 1) * xh.titleSpacing + xh.titleMarginBottom), Nh) {
            Lh += v * (xh.displayColors ? Math.max(Dh, Eh.lineHeight) : Eh.lineHeight) + (Nh - v) * Eh.lineHeight + (Nh - 1) * xh.bodySpacing;
        }
        s && (Lh += xh.footerMarginTop + s * m.lineHeight + (s - 1) * xh.footerSpacing);
        let Oh = 0;
        const Ph = function(Qh) {
            Mh = Math.max(Mh, yh.measureText(Qh).width + Oh);
        };
        return yh.save(), yh.font = l.string, (0, uh.F)(wh.title, X), yh.font = Eh.string, (0, uh.F)(wh.beforeBody.concat(wh.afterBody), X), Oh = xh.displayColors ? Ch + 2 + xh.boxPadding : 0, (0, uh.F)(zh, Qh => {
            (0, uh.F)(Qh.before, X), (0, uh.F)(Qh.lines, X), (0, uh.F)(Qh.after, X);
        }), Oh = 0, yh.font = m.string, (0, uh.F)(wh.footer, X), yh.restore(), Mh += y.width, {
            width: Mh,
            height: Lh
        };
    }

    function Kh(Lh, Mh, Nh, Oh) {
        const {
            x: Ph,
            width: Qh
        } = Nh, {
            width: Rh,
            chartArea: {
                left: Sh,
                right: Th
            }
        } = Lh;
        let Uh = 'center';
        return 'center' === Oh ? Uh = Ph <= (Sh + Th) / 2 ? 'left' : 'right' : Ph <= Qh / 2 ? Uh = 'left' : Ph >= h - Qh / 2 && (Uh = 'right'),
            function(Vh, Wh, Xh, Yh) {
                const {
                    x: Zh,
                    width: $h
                } = Yh, ai = Xh.caretSize + Xh.caretPadding;
                return 'left' === Vh && Zh + $h + ai > Wh.width || 'right' === Vh && Zh - $h - ai < 0 || void 0;
            }(Uh, Lh, Mh, Nh) && (Uh = 'center'), Uh;
    }

    function Qh(Rh, Sh, Th) {
        const Uh = Th.yAlign || Sh.yAlign || function(Vh, Wh) {
            const {
                y: Xh,
                height: Yh
            } = Wh;
            return Xh < Yh / 2 ? 'top' : Xh > Vh.height - Yh / 2 ? 'bottom' : 'center';
        }(Rh, Th);
        return {
            xAlign: Th.xAlign || Sh.xAlign || Kh(Rh, Sh, Th, Uh),
            yAlign: Uh
        };
    }

    function Sh(Th, Uh, Vh, Wh) {
        const {
            caretSize: Xh,
            caretPadding: Yh,
            cornerRadius: Zh
        } = Th, {
            xAlign: $h,
            yAlign: ai
        } = Vh, bi = Xh + h, {
            topLeft: ci,
            topRight: di,
            bottomLeft: ei,
            bottomRight: fi
        } = (0, Qh.aw)(Zh);
        let gi = function(hi, ii) {
            let {
                x: ji,
                width: ki
            } = hi;
            return 'right' === ii ? ji -= ki : 'center' === ii && (ji -= ki / 2), ji;
        }(Uh, $h);
        const hi = function(ii, ji, ki) {
            let {
                y: li,
                height: mi
            } = ii;
            return 'top' === ji ? li += ki : li -= 'bottom' === ji ? mi + ki : mi / 2, li;
        }(Uh, ai, l);
        return 'center' === ai ? 'left' === $h ? gi += l : 'right' === $h && (gi -= l) : 'left' === $h ? gi -= Math.max(m, s) + Xh : 'right' === $h && (gi += Math.max(n, v) + Xh), {
            x: (0, Qh.S)(gi, 0, Wh.width - Uh.width),
            y: (0, Qh.S)(A, 0, Wh.height - Uh.height)
        };
    }

    function di(ei, fi, gi) {
        const hi = (0, Qh.E)(gi.padding);
        return 'center' === fi ? ei.x + ei.width / 2 : 'right' === fi ? ei.x + ei.width - hi.right : ei.x + hi.left;
    }

    function fi(gi) {
        return mh([], nh(gi));
    }

    function gi(hi, ii) {
        const ji = ii && ii.dataset && ii.dataset.tooltip && ii.dataset.tooltip.callbacks;
        return ji ? hi.override(ji) : hi;
    }
    const ii = {
        beforeTitle: Qh.aF,
        title(ji) {
            if (ji.length > 0) {
                const ki = ji[0],
                    li = ki.chart.data.labels,
                    mi = li ? li.length : 0;
                if (this && this.options && 'dataset' === this.options.mode)
                    return ki.dataset.label || '';
                if (ki.label)
                    return ki.label;
                if (mi > 0 && ki.dataIndex < mi)
                    return li[ki.dataIndex];
            }
            return '';
        },
        afterTitle: Qh.aF,
        beforeBody: Qh.aF,
        beforeLabel: Qh.aF,
        label(ji) {
            if (this && this.options && 'dataset' === this.options.mode)
                return ji.label + ': ' + ji.formattedValue || ji.formattedValue;
            let ki = ji.dataset.label || '';
            ki && (ki += ': ');
            const li = ji.formattedValue;
            return (0, Qh.k)(li) || (ki += li), ki;
        },
        labelColor(ji) {
            const ki = ji.chart.getDatasetMeta(ji.datasetIndex).controller.getStyle(ji.dataIndex);
            return {
                borderColor: ki.borderColor,
                backgroundColor: ki.backgroundColor,
                borderWidth: ki.borderWidth,
                borderDash: ki.borderDash,
                borderDashOffset: ki.borderDashOffset,
                borderRadius: 0
            };
        },
        labelTextColor() {
            return this.options.bodyColor;
        },
        labelPointStyle(ji) {
            const ki = ji.chart.getDatasetMeta(ji.datasetIndex).controller.getStyle(ji.dataIndex);
            return {
                pointStyle: ki.pointStyle,
                rotation: ki.rotation
            };
        },
        afterLabel: Qh.aF,
        afterBody: Qh.aF,
        beforeFooter: Qh.aF,
        footer: Qh.aF,
        afterFooter: Qh.aF
    };

    function ji(ki, li, mi, ni) {
        const oi = ki[li].call(mi, ni);
        return void 0 === oi ? ii[li].call(mi, ni) : oi;
    }
    class li extends Fd {
        initialize(mi) {
            this.options = mi, this._cachedAnimations = void 0, this.$context = void 0;
        }
        _resolveAnimations() {
            const mi = this._cachedAnimations;
            if (mi)
                return mi;
            const ni = this.chart,
                oi = this.options.setContext(this.getContext()),
                pi = oi.enabled && ni.options.animation && oi.animations,
                qi = new m(this.chart, pi);
            return pi._cacheable && (this._cachedAnimations = Object.freeze(qi)), qi;
        }
        getContext() {
            return this.$context || (this.$context = (yf = this.chart.getContext(), Xg = this, ji = this._tooltipItems, (0, Qh.j)(yf, {
                tooltip: Xg,
                tooltipItems: ji,
                type: 'tooltip'
            })));
            var mi, ni, oi;
        }
        getTitle(mi, ni) {
            const {
                callbacks: oi
            } = ni, pi = ji(oi, 'beforeTitle', this, mi), qi = ji(oi, 'title', this, mi), ri = ji(oi, 'afterTitle', this, mi);
            let si = [];
            return si = mh(si, nh(pi)), si = mh(si, nh(qi)), si = mh(si, nh(ri)), si;
        }
        getBeforeBody(mi, ni) {
            return fi(ji(ni.callbacks, 'beforeBody', this, mi));
        }
        getBody(mi, ni) {
            const {
                callbacks: oi
            } = ni, pi = [];
            return (0, Qh.F)(mi, qi => {
                const ri = {
                        before: [],
                        lines: [],
                        after: []
                    },
                    si = gi(oi, qi);
                mh(ri.before, nh(ji(si, 'beforeLabel', this, qi))), mh(ri.lines, ji(si, 'label', this, qi)), mh(ri.after, nh(ji(si, 'afterLabel', this, qi))), pi.push(ri);
            }), pi;
        }
        getAfterBody(mi, ni) {
            return fi(ji(ni.callbacks, 'afterBody', this, mi));
        }
        getFooter(mi, ni) {
            const {
                callbacks: oi
            } = ni, pi = ji(oi, 'beforeFooter', this, mi), qi = ji(oi, 'footer', this, mi), ri = ji(oi, 'afterFooter', this, mi);
            let si = [];
            return si = mh(si, nh(pi)), si = mh(si, nh(qi)), si = mh(si, nh(ri)), si;
        }
        _createItems(mi) {
            const ni = this._active,
                oi = this.chart.data,
                pi = [],
                qi = [],
                ri = [];
            let si, ti, ui = [];
            for (si = 0, ti = ni.length; si < ti; ++si)
                ui.push(oh(this.chart, ni[si]));
            return mi.filter && (ui = ui.filter((vi, wi, xi) => mi.filter(vi, wi, xi, oi))), mi.itemSort && (ui = ui.sort((vi, wi) => mi.itemSort(vi, wi, oi))), (0, Qh.F)(ui, vi => {
                const wi = gi(mi.callbacks, vi);
                pi.push(ji(wi, 'labelColor', this, vi)), qi.push(ji(wi, 'labelPointStyle', this, vi)), ri.push(ji(wi, 'labelTextColor', this, vi));
            }), this.labelColors = pi, this.labelPointStyles = qi, this.labelTextColors = ri, this.dataPoints = ui, ui;
        }
        update(mi, ni) {
            const oi = this.options.setContext(this.getContext()),
                pi = this._active;
            let qi, ri = [];
            if (pi.length) {
                const si = lh[oi.position].call(this, pi, this._eventPosition);
                ri = this._createItems(oi), this.title = this.getTitle(ri, oi), this.beforeBody = this.getBeforeBody(ri, oi), this.body = this.getBody(ri, oi), this.afterBody = this.getAfterBody(ri, oi), this.footer = this.getFooter(ri, oi);
                const ti = this._size = vh(this, oi),
                    ui = Object.assign({}, si, ti),
                    vi = Qh(this.chart, oi, ui),
                    wi = Sh(oi, ui, vi, this.chart);
                this.xAlign = vi.xAlign, this.yAlign = vi.yAlign, qi = {
                    opacity: 1,
                    x: wi.x,
                    y: wi.y,
                    width: ti.width,
                    height: ti.height,
                    caretX: si.x,
                    caretY: si.y
                };
            } else
                0 !== this.opacity && (qi = {
                    opacity: 0
                });
            this._tooltipItems = ri, this.$context = void 0, qi && this._resolveAnimations().update(this, qi), si && oi.external && oi.external.call(this, {
                chart: this.chart,
                tooltip: this,
                replay: ti
            });
        }
        drawCaret(mi, ni, oi, pi) {
            const qi = this.getCaretPosition(mi, oi, pi);
            ni.lineTo(qi.x1, qi.y1), ni.lineTo(qi.x2, qi.y2), ni.lineTo(qi.x3, qi.y3);
        }
        getCaretPosition(mi, ni, oi) {
            const {
                xAlign: pi,
                yAlign: qi
            } = this, {
                caretSize: ri,
                cornerRadius: si
            } = oi, {
                topLeft: ti,
                topRight: ui,
                bottomLeft: vi,
                bottomRight: wi
            } = (0, Qh.aw)(si), {
                x: xi,
                y: yi
            } = mi, {
                width: zi,
                height: Ai
            } = ni;
            let Bi, Ci, Di, Ei, Fi, Gi;
            return 'center' === qi ? (Fi = yi + Ai / 2, 'left' === pi ? (Bi = xi, Ci = Bi - ri, Ei = Fi + ri, Gi = Fi - ri) : (Bi = xi + zi, Ci = Bi + ri, Ei = Fi - ri, Gi = Fi + ri), Di = Bi) : (Ci = 'left' === pi ? xi + Math.max(ti, vi) + ri : 'right' === pi ? xi + zi - Math.max(ui, wi) - ri : this.caretX, 'top' === qi ? (Ei = yi, Fi = Ei - ri, Bi = Ci - ri, Di = Ci + ri) : (Ei = yi + Ai, Fi = Ei + ri, Bi = Ci + ri, Di = Ci - ri), Gi = Ei), {
                x1: Bi,
                x2: Ci,
                x3: Di,
                y1: Ei,
                y2: Fi,
                y3: Gi
            };
        }
        drawTitle(mi, ni, oi) {
            const pi = this.title,
                qi = pi.length;
            let ri, si, ti;
            if (qi) {
                const ui = (0, Qh.az)(oi.rtl, this.x, this.width);
                for (mi.x = di(this, oi.titleAlign, oi), ni.textAlign = ui.textAlign(oi.titleAlign), ni.textBaseline = 'middle', ri = (0, Qh.a0)(oi.titleFont), si = oi.titleSpacing, ni.fillStyle = oi.titleColor, ni.font = ri.string, ti = 0; ti < qi; ++ti)
                    ni.fillText(pi[ti], ui.x(mi.x), mi.y + ri.lineHeight / 2), mi.y += ri.lineHeight + si, ti + 1 === qi && (mi.y += oi.titleMarginBottom - si);
            }
        }
        _drawColorBox(mi, ni, oi, pi, qi) {
            const ri = this.labelColors[oi],
                si = this.labelPointStyles[oi],
                {
                    boxHeight: ti,
                    boxWidth: ui,
                    boxPadding: vi
                } = qi,
                wi = (0, Qh.a0)(qi.bodyFont),
                xi = di(this, 'left', qi),
                yi = pi.x(xi),
                zi = ti < wi.lineHeight ? (wi.lineHeight - ti) / 2 : 0,
                Ai = ni.y + zi;
            if (qi.usePointStyle) {
                const Bi = {
                        radius: Math.min(ui, ti) / 2,
                        pointStyle: si.pointStyle,
                        rotation: si.rotation,
                        borderWidth: 1
                    },
                    Ci = pi.leftForLtr(yi, ui) + ui / 2,
                    Di = Ai + ti / 2;
                mi.strokeStyle = qi.multiKeyBackground, mi.fillStyle = qi.multiKeyBackground, (0, Qh.at)(mi, Bi, Ci, Di), mi.strokeStyle = ri.borderColor, mi.fillStyle = ri.backgroundColor, (0, Qh.at)(mi, Bi, Ci, Di);
            } else {
                mi.lineWidth = (0, Qh.i)(ri.borderWidth) ? Math.max(...Object.values(ri.borderWidth)) : ri.borderWidth || 1, mi.strokeStyle = ri.borderColor, mi.setLineDash(ri.borderDash || []), mi.lineDashOffset = ri.borderDashOffset || 0;
                const Ei = pi.leftForLtr(yi, ui - Di),
                    Fi = pi.leftForLtr(pi.xPlus(yi, 1), ui - Di - 2),
                    Gi = (0, Qh.aw)(ri.borderRadius);
                Object.values(Gi).some(Hi => 0 !== Hi) ? (mi.beginPath(), mi.fillStyle = qi.multiKeyBackground, (0, Qh.au)(mi, {
                    x: Ei,
                    y: Ai,
                    w: ui,
                    h: ti,
                    radius: Gi
                }), mi.fill(), mi.stroke(), mi.fillStyle = ri.backgroundColor, mi.beginPath(), (0, Qh.au)(mi, {
                    x: Fi,
                    y: Ai + 1,
                    w: ui - 2,
                    h: ti - 2,
                    radius: Gi
                }), mi.fill()) : (mi.fillStyle = qi.multiKeyBackground, mi.fillRect(Ei, Ai, ui, ti), mi.strokeRect(Ei, Ai, ui, ti), mi.fillStyle = ri.backgroundColor, mi.fillRect(Fi, Ai + 1, ui - 2, ti - 2));
            }
            mi.fillStyle = this.labelTextColors[Fi];
        }
        drawBody(mi, ni, oi) {
            const {
                body: pi
            } = this, {
                bodySpacing: qi,
                bodyAlign: ri,
                displayColors: si,
                boxHeight: ti,
                boxWidth: ui,
                boxPadding: vi
            } = oi, wi = (0, Qh.a0)(oi.bodyFont);
            let xi = wi.lineHeight,
                yi = 0;
            const zi = (0, Qh.az)(oi.rtl, this.x, this.width),
                Ai = function(Bi) {
                    ni.fillText(Bi, zi.x(mi.x + yi), mi.y + xi / 2), mi.y += xi + qi;
                },
                Bi = zi.textAlign(ri);
            let Ci, Di, Ei, Fi, Gi, Hi, Ii;
            for (ni.textAlign = ri, ni.textBaseline = 'middle', ni.font = wi.string, mi.x = di(this, Bi, oi), ni.fillStyle = oi.bodyColor, (0, Qh.F)(this.beforeBody, Ai), yi = si && 'right' !== Bi ? 'center' === ri ? ui / 2 + vi : ui + 2 + vi : 0, Fi = 0, Hi = pi.length; Fi < Hi; ++Fi) {
                for (Ci = pi[Fi], Di = this.labelTextColors[Fi], ni.fillStyle = Di, (0, Qh.F)(Ci.before, Ai), Ei = Ci.lines, si && Ei.length && (this._drawColorBox(ni, mi, Fi, zi, oi), xi = Math.max(wi.lineHeight, ti)), Gi = 0, Ii = Ei.length; Gi < Ii; ++Gi)
                    Ai(Ei[Gi]), xi = wi.lineHeight;
                (0, Qh.F)(Ci.after, Ai);
            }
            yi = 0, xi = wi.lineHeight, (0, Qh.F)(this.afterBody, Ai), mi.y -= qi;
        }
        drawFooter(mi, ni, oi) {
            const pi = this.footer,
                qi = pi.length;
            let ri, si;
            if (qi) {
                const ti = (0, Qh.az)(oi.rtl, this.x, this.width);
                for (mi.x = di(this, oi.footerAlign, oi), mi.y += oi.footerMarginTop, ni.textAlign = ti.textAlign(oi.footerAlign), ni.textBaseline = 'middle', ri = (0, Qh.a0)(oi.footerFont), ni.fillStyle = oi.footerColor, ni.font = ri.string, si = 0; si < qi; ++si)
                    ni.fillText(pi[si], ti.x(mi.x), mi.y + ri.lineHeight / 2), mi.y += ri.lineHeight + oi.footerSpacing;
            }
        }
        drawBackground(mi, ni, oi, pi) {
            const {
                xAlign: qi,
                yAlign: ri
            } = this, {
                x: si,
                y: ti
            } = mi, {
                width: ui,
                height: vi
            } = oi, {
                topLeft: wi,
                topRight: xi,
                bottomLeft: yi,
                bottomRight: zi
            } = (0, Qh.aw)(pi.cornerRadius);
            ni.fillStyle = pi.backgroundColor, ni.strokeStyle = pi.borderColor, ni.lineWidth = pi.borderWidth, ni.beginPath(), ni.moveTo(si + wi, ti), 'top' === ri && this.drawCaret(mi, ni, oi, pi), ni.lineTo(si + ui - xi, ti), ni.quadraticCurveTo(si + ui, ti, si + ui, ti + xi), 'center' === ri && 'right' === qi && this.drawCaret(mi, ni, oi, pi), ni.lineTo(si + ui, ti + vi - zi), ni.quadraticCurveTo(si + ui, ti + vi, si + ui - zi, ti + vi), 'bottom' === ri && this.drawCaret(mi, ni, oi, pi), ni.lineTo(si + yi, ti + vi), ni.quadraticCurveTo(si, ti + vi, si, ti + vi - yi), 'center' === ri && 'left' === qi && this.drawCaret(mi, ni, oi, pi), ni.lineTo(si, ti + wi), ni.quadraticCurveTo(si, ti, si + wi, ti), ni.closePath(), ni.fill(), pi.borderWidth > 0 && ni.stroke();
        }
        _updateAnimationTarget(mi) {
            const ni = this.chart,
                oi = this.$animations,
                pi = oi && oi.x,
                qi = oi && oi.y;
            if (pi || qi) {
                const ri = lh[mi.position].call(this, this._active, this._eventPosition);
                if (!ri)
                    return;
                const si = this._size = vh(this, mi),
                    ti = Object.assign({}, ri, this._size),
                    ui = Qh(ni, mi, ti),
                    vi = Sh(mi, ti, ui, ni);
                pi._to === vi.x && qi._to === vi.y || (this.xAlign = ui.xAlign, this.yAlign = ui.yAlign, this.width = si.width, this.height = si.height, this.caretX = ri.x, this.caretY = ri.y, this._resolveAnimations().update(this, vi));
            }
        }
        _willRender() {
            return !!this.opacity;
        }
        draw(mi) {
            const ni = this.options.setContext(this.getContext());
            let oi = this.opacity;
            if (!oi)
                return;
            this._updateAnimationTarget(ni);
            const pi = {
                    width: this.width,
                    height: this.height
                },
                qi = {
                    x: this.x,
                    y: this.y
                };
            oi = Math.abs(oi) < 0.001 ? 0 : oi;
            const ri = (0, Qh.E)(ni.padding),
                si = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
            ni.enabled && si && (mi.save(), mi.globalAlpha = oi, this.drawBackground(qi, mi, pi, ni), (0, Qh.aA)(mi, ni.textDirection), qi.y += ri.top, this.drawTitle(qi, mi, ni), this.drawBody(qi, mi, ni), this.drawFooter(qi, mi, ni), (0, Qh.aC)(mi, ni.textDirection), mi.restore());
        }
        getActiveElements() {
            return this._active || [];
        }
        setActiveElements(mi, ni) {
            const oi = this._active,
                pi = mi.map(({
                    datasetIndex: qi,
                    index: ri
                }) => {
                    const si = this.chart.getDatasetMeta(qi);
                    if (!si)
                        throw new Error('Cannot find a dataset at index ' + qi);
                    return {
                        datasetIndex: qi,
                        element: si.data[ri],
                        index: ri
                    };
                }),
                qi = !(0, Qh.ah)(oi, pi),
                ri = this._positionChanged(pi, ni);
            (qi || ri) && (this._active = pi, this._eventPosition = ni, this._ignoreReplayEvents = !0, this.update(!0));
        }
        handleEvent(mi, ni, oi = !0) {
            if (ni && this._ignoreReplayEvents)
                return !1;
            this._ignoreReplayEvents = !1;
            const pi = this.options,
                qi = this._active || [],
                ri = this._getActiveElements(mi, qi, ni, oi),
                si = this._positionChanged(ri, mi),
                ti = ni || !(0, Qh.ah)(ri, qi) || si;
            return ti && (this._active = ri, (pi.enabled || pi.external) && (this._eventPosition = {
                x: mi.x,
                y: mi.y
            }, this.update(!0, ni))), ti;
        }
        _getActiveElements(mi, ni, oi, pi) {
            const qi = this.options;
            if ('mouseout' === mi.type)
                return [];
            if (!pi)
                return ni;
            const ri = this.chart.getElementsAtEventForMode(mi, qi.mode, qi, oi);
            return qi.reverse && ri.reverse(), ri;
        }
        _positionChanged(mi, ni) {
            const {
                caretX: oi,
                caretY: pi,
                options: qi
            } = this, ri = lh[qi.position].call(this, mi, ni);
            return !1 !== ri && (oi !== ri.x || pi !== ri.y);
        }
        constructor(mi) {
            super(), this.opacity = 0, this._active = [], this._eventPosition = void 0, this._size = void 0, this._cachedAnimations = void 0, this._tooltipItems = [], this.$animations = void 0, this.$context = void 0, this.chart = mi.chart, this.options = mi.options, this.dataPoints = void 0, this.title = void 0, this.beforeBody = void 0, this.body = void 0, this.afterBody = void 0, this.footer = void 0, this.xAlign = void 0, this.yAlign = void 0, this.x = void 0, this.y = void 0, this.height = void 0, this.width = void 0, this.caretX = void 0, this.caretY = void 0, this.labelColors = void 0, this.labelPointStyles = void 0, this.labelTextColors = void 0;
        }
    }
    (0, oi.default)(li, 'positioners', lh);

    function mi(ni, oi, pi, qi) {
        const ri = ni.indexOf(oi);
        if (-1 === ri)
            return ((si, ti, ui, vi) => ('string' == typeof ti ? (ui = si.push(ti) - 1, vi.unshift({
                index: ui,
                label: ti
            })) : isNaN(ti) && (ui = null), ui))(ni, oi, pi, qi);
        return ri !== ni.lastIndexOf(oi) ? pi : ri;
    }

    function oi(pi) {
        const qi = this.getLabels();
        return pi >= 0 && pi < qi.length ? qi[pi] : pi;
    }
    class _qi extends je {
        init(ri) {
            const si = this._addedLabels;
            if (si.length) {
                const ti = this.getLabels();
                for (const {
                        index: ui,
                        label: vi
                    }
                    of si)
                    ti[ui] === vi && ti.splice(ui, 1);
                this._addedLabels = [];
            }
            super.init(ti);
        }
        parse(ri, si) {
            if ((0, Qh.k)(ri))
                return null;
            const ti = this.getLabels();
            return ((ui, vi) => null === ui ? null : (0, Qh.S)(Math.round(ui), 0, vi))(si = isFinite(si) && ti[si] === ri ? si : mi(ti, ri, (0, Qh.v)(si, ri), this._addedLabels), ti.length - 1);
        }
        determineDataLimits() {
            const {
                minDefined: ri,
                maxDefined: si
            } = this.getUserBounds();
            let {
                min: ti,
                max: ui
            } = this.getMinMax(!0);
            'ticks' === this.options.bounds && (ri || (ti = 0), si || (ui = this.getLabels().length - 1)), this.min = ti, this.max = ui;
        }
        buildTicks() {
            const ri = this.min,
                si = this.max,
                ti = this.options.offset,
                ui = [];
            let vi = this.getLabels();
            vi = 0 === ri && si === vi.length - 1 ? vi : vi.slice(ri, si + 1), this._valueRange = Math.max(vi.length - (ti ? 0 : 1), 1), this._startValue = this.min - (ti ? 0.5 : 0);
            for (let wi = ri; wi <= si; wi++)
                ui.push({
                    value: wi
                });
            return ui;
        }
        getLabelForValue(ri) {
            return oi.call(this, ri);
        }
        configure() {
            super.configure(), this.isHorizontal() || (this._reversePixels = !this._reversePixels);
        }
        getPixelForValue(ri) {
            return 'number' != typeof ri && (ri = this.parse(ri)), null === ri ? NaN : this.getPixelForDecimal((ri - this._startValue) / this._valueRange);
        }
        getPixelForTick(ri) {
            const si = this.ticks;
            return ri < 0 || ri > si.length - 1 ? null : this.getPixelForValue(si[ri].value);
        }
        getValueForPixel(ri) {
            return Math.round(this._startValue + this.getDecimalForPixel(ri) * this._valueRange);
        }
        getBasePixel() {
            return this.bottom;
        }
        constructor(ri) {
            super(ri), this._startValue = void 0, this._valueRange = 0, this._addedLabels = [];
        }
    }

    function ri(si, ti, {
        horizontal: ui,
        minRotation: vi
    }) {
        const wi = (0, Qh.t)(vi),
            xi = (ui ? Math.sin(wi) : Math.cos(wi)) || 0.001,
            yi = 0.75 * ti * ('' + si).length;
        return Math.min(ti / h, yi);
    }
    (0, wi.default)(_qi, 'id', 'category'), (0, wi.default)(_qi, 'defaults', {
        ticks: {
            callback: oi
        }
    });
    class vi extends je {
        parse(wi, xi) {
            return (0, Qh.k)(wi) || ('number' == typeof wi || wi instanceof Number) && !isFinite(+wi) ? null : +wi;
        }
        handleTickRangeOptions() {
            const {
                beginAtZero: wi
            } = this.options, {
                minDefined: xi,
                maxDefined: yi
            } = this.getUserBounds();
            let {
                min: zi,
                max: Ai
            } = this;
            const Bi = Ci => zi = xi ? zi : Ci,
                Ci = Di => Ai = yi ? Ai : Di;
            if (wi) {
                const Di = (0, Qh.s)(zi),
                    Ei = (0, Qh.s)(Ai);
                Di < 0 && Ei < 0 ? Ci(0) : Di > 0 && Ei > 0 && Bi(0);
            }
            if (zi === Ai) {
                let Fi = 0 === Ai ? 1 : Math.abs(0.05 * Ai);
                Ci(Ai + Fi), Di || Bi(zi - Fi);
            }
            this.min = zi, this.max = Ai;
        }
        getTickLimit() {
            const wi = this.options.ticks;
            let xi, {
                maxTicksLimit: yi,
                stepSize: zi
            } = wi;
            return zi ? (xi = Math.ceil(this.max / zi) - Math.floor(this.min / zi) + 1, xi > 1000 && (console.warn(`scales.${ this.id }.ticks.stepSize: ${ zi } would result generating up to ${ xi } ticks. Limiting to 1000.`), xi = 1000)) : (xi = this.computeTickLimit(), yi = yi || 11), yi && (xi = Math.min(yi, xi)), xi;
        }
        computeTickLimit() {
            return Number.POSITIVE_INFINITY;
        }
        buildTicks() {
            const wi = this.options,
                xi = wi.ticks;
            let yi = this.getTickLimit();
            yi = Math.max(2, yi);
            const zi = function(Ai, Bi) {
                const Ci = [],
                    {
                        bounds: Di,
                        step: Ei,
                        min: Fi,
                        max: Gi,
                        precision: Hi,
                        count: Ii,
                        maxTicks: Ji,
                        maxDigits: Ki,
                        includeBounds: Li
                    } = Ai,
                    Mi = Ei || 1,
                    Ni = Ji - 1,
                    {
                        min: Oi,
                        max: Pi
                    } = Bi,
                    Qi = !(0, Qh.k)(Fi),
                    Ri = !(0, Qh.k)(Gi),
                    Si = !(0, Qh.k)(Ii),
                    Ti = (Pi - Oi) / (Ki + 1);
                let Ui, Vi, Wi, Xi, Yi = (0, Qh.aH)((Pi - Oi) / Ni / Mi) * Mi;
                if (Yi < 1e-14 && !Qi && !Ri)
                    return [{
                            value: Oi
                        },
                        {
                            value: Pi
                        }
                    ];
                Xi = Math.ceil(Pi / Yi) - Math.floor(Oi / Yi), Xi > Ni && (Yi = (0, Qh.aH)(Xi * Yi / Ni / Mi) * Mi), (0, Qh.k)(Hi) || (Ui = Math.pow(10, Hi), Yi = Math.ceil(Yi * Ui) / Ui), 'ticks' === Di ? (Vi = Math.floor(Oi / Yi) * Yi, Wi = Math.ceil(Pi / Yi) * Yi) : (Vi = Oi, Wi = Pi), Qi && Ri && Ei && (0, Qh.aI)((Gi - Fi) / Ei, Yi / 1000) ? (Xi = Math.round(Math.min((Gi - Fi) / Yi, Ji)), Yi = (Gi - Fi) / Xi, Vi = Fi, Wi = Gi) : Si ? (Vi = Qi ? Fi : Vi, Wi = Ri ? Gi : Wi, Xi = Ii - 1, Yi = (Wi - Vi) / Xi) : (Xi = (Wi - Vi) / Yi, Xi = (0, Qh.aJ)(Xi, Math.round(Xi), Yi / 1000) ? Math.round(Xi) : Math.ceil(Xi));
                const Zi = Math.max((0, Qh.aK)(Yi), (0, Qh.aK)(Vi));
                Ui = Math.pow(10, (0, Qh.k)(Hi) ? Zi : Hi), Vi = Math.round(Vi * Ui) / Ui, Wi = Math.round(Wi * Ui) / Ui;
                let $i = 0;
                for (Qi && (Li && Vi !== Fi ? (Ci.push({
                        value: Fi
                    }), Vi < Fi && $i++, (0, Qh.aJ)(Math.round((Vi + $i * Yi) * Ui) / Ui, Fi, ri(Fi, Ti, Ai)) && $i++) : Vi < Fi && $i++); $i < Xi; ++$i)
                    Ci.push({
                        value: Math.round((Vi + $i * Yi) * Ui) / Ui
                    });
                return Ri && Li && Wi !== Gi ? Ci.length && (0, Qh.aJ)(Ci[Ci.length - 1].value, Gi, ri(Gi, Ti, Ai)) ? Ci[Ci.length - 1].value = Gi : Ci.push({
                    value: Gi
                }) : Ri && Wi !== Gi || Ci.push({
                    value: Wi
                }), Ci;
            }({
                maxTicks: yi,
                bounds: wi.bounds,
                min: wi.min,
                max: wi.max,
                precision: xi.precision,
                step: xi.stepSize,
                count: xi.count,
                maxDigits: this._maxDigits(),
                horizontal: this.isHorizontal(),
                minRotation: xi.minRotation || 0,
                includeBounds: !1 !== xi.includeBounds
            }, this._range || this);
            return 'ticks' === wi.bounds && (0, Qh.aG)(zi, this, 'value'), wi.reverse ? (zi.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), zi;
        }
        configure() {
            const wi = this.ticks;
            let xi = this.min,
                yi = this.max;
            if (super.configure(), this.options.offset && wi.length) {
                const zi = (yi - xi) / Math.max(wi.length - 1, 1) / 2;
                xi -= zi, yi += zi;
            }
            this._startValue = xi, this._endValue = yi, this._valueRange = yi - xi;
        }
        getLabelForValue(wi) {
            return (0, Qh.o)(wi, this.chart.options.locale, this.options.ticks.format);
        }
        constructor(wi) {
            super(wi), this.start = void 0, this.end = void 0, this._startValue = void 0, this._endValue = void 0, this._valueRange = 0;
        }
    }
    class _wi extends vi {
        determineDataLimits() {
            const {
                min: xi,
                max: yi
            } = this.getMinMax(!0);
            this.min = (0, Qh.g)(xi) ? xi : 0, this.max = (0, Qh.g)(yi) ? yi : 1, this.handleTickRangeOptions();
        }
        computeTickLimit() {
            const xi = this.isHorizontal(),
                yi = xi ? this.width : this.height,
                zi = (0, Qh.t)(this.options.ticks.minRotation),
                Ai = (xi ? Math.sin(zi) : Math.cos(zi)) || 0.001,
                Bi = this._resolveTickFontOptions(0);
            return Math.ceil(yi / Math.min(40, Bi.lineHeight / Ai));
        }
        getPixelForValue(xi) {
            return null === xi ? NaN : this.getPixelForDecimal((xi - this._startValue) / this._valueRange);
        }
        getValueForPixel(xi) {
            return this._startValue + this.getDecimalForPixel(xi) * this._valueRange;
        }
    }
    (0, wi.default)(_wi, 'id', 'linear'), (0, wi.default)(_wi, 'defaults', {
        ticks: {
            callback: Qh.aL.formatters.numeric
        }
    });
    const xi = yi => Math.floor((0, Qh.aM)(yi)),
        yi = (zi, Ai) => Math.pow(10, xi(zi) + Ai);

    function zi(Ai) {
        return 1 === Ai / Math.pow(10, xi(Ai));
    }

    function Ai(Bi, Ci, Di) {
        const Ei = Math.pow(10, Di),
            Fi = Math.floor(Bi / Ei);
        return Math.ceil(Ci / Ei) - Fi;
    }

    function Di(Ei, {
        min: Fi,
        max: Gi
    }) {
        Fi = (0, Qh.O)(Ei.min, Fi);
        const Hi = [],
            Ii = xi(Fi);
        let Ji = function(Ki, Li) {
                let Mi = xi(Li - Ki);
                for (; Ai(Ki, Li, Mi) > 10;)
                    Mi++;
                for (; Ai(Ki, Li, Mi) < 10;)
                    Mi--;
                return Math.min(Mi, xi(Ki));
            }(Fi, Gi),
            Ki = Ji < 0 ? Math.pow(10, Math.abs(Ji)) : 1;
        const Li = Math.pow(10, Ji),
            Mi = Ii > Ji ? Math.pow(10, Ii) : 0,
            Ni = Math.round((Fi - Mi) * Ki) / Ki,
            Oi = Math.floor((Fi - Mi) / Li / 10) * Li * 10;
        let Pi = Math.floor((l - m) / Math.pow(10, Ji)),
            Qi = (0, Qh.O)(Ei.min, Math.round((Mi + m + Pi * Math.pow(10, Ji)) * Ki) / Ki);
        for (; Qi < Gi;)
            Hi.push({
                value: Qi,
                major: zi(Qi),
                significand: Pi
            }), Pi >= 10 ? Pi = Pi < 15 ? 15 : 20 : Pi++, Pi >= 20 && (Ji++, Pi = 2, Ki = Ji >= 0 ? 1 : Ki), Qi = Math.round((Mi + m + Pi * Math.pow(10, Ji)) * Ki) / Ki;
        const Ri = (0, Qh.O)(Ei.max, Qi);
        return Hi.push({
            value: v,
            major: zi(v),
            significand: Pi
        }), Hi;
    }
    class Li extends je {
        parse(Mi, Ni) {
            const Oi = vi.prototype.parse.apply(this, [
                Mi,
                Ni
            ]);
            if (0 !== Oi)
                return (0, Qh.g)(Oi) && Oi > 0 ? Oi : null;
            this._zero = !0;
        }
        determineDataLimits() {
            const {
                min: Mi,
                max: Ni
            } = this.getMinMax(!0);
            this.min = (0, Qh.g)(Mi) ? Math.max(0, Mi) : null, this.max = (0, Qh.g)(Ni) ? Math.max(0, Ni) : null, this.options.beginAtZero && (this._zero = !0), this._zero && this.min !== this._suggestedMin && !(0, Qh.g)(this._userMin) && (this.min = Mi === yi(this.min, 0) ? yi(this.min, -1) : yi(this.min, 0)), this.handleTickRangeOptions();
        }
        handleTickRangeOptions() {
            const {
                minDefined: Mi,
                maxDefined: Ni
            } = this.getUserBounds();
            let Oi = this.min,
                Pi = this.max;
            const Qi = Ri => Oi = Mi ? Oi : Ri,
                Ri = Si => Pi = Ni ? Pi : Si;
            Oi === Pi && (Oi <= 0 ? (Qi(1), Ri(10)) : (Qi(yi(Oi, -1)), Ri(yi(Pi, 1)))), Oi <= 0 && Qi(yi(Pi, -1)), Pi <= 0 && Ri(yi(Oi, 1)), this.min = Oi, this.max = Pi;
        }
        buildTicks() {
            const Mi = this.options,
                Ni = Di({
                    min: this._userMin,
                    max: this._userMax
                }, this);
            return 'ticks' === Mi.bounds && (0, Qh.aG)(Ni, this, 'value'), Mi.reverse ? (Ni.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), Ni;
        }
        getLabelForValue(Mi) {
            return void 0 === Mi ? '0' : (0, Qh.o)(Mi, this.chart.options.locale, this.options.ticks.format);
        }
        configure() {
            const Mi = this.min;
            super.configure(), this._startValue = (0, Qh.aM)(Mi), this._valueRange = (0, Qh.aM)(this.max) - (0, Qh.aM)(Mi);
        }
        getPixelForValue(Mi) {
            return void 0 !== Mi && 0 !== Mi || (Mi = this.min), null === Mi || isNaN(Mi) ? NaN : this.getPixelForDecimal(Mi === this.min ? 0 : ((0, Qh.aM)(Mi) - this._startValue) / this._valueRange);
        }
        getValueForPixel(Mi) {
            const Ni = this.getDecimalForPixel(Mi);
            return Math.pow(10, this._startValue + Ni * this._valueRange);
        }
        constructor(Mi) {
            super(Mi), this.start = void 0, this.end = void 0, this._startValue = void 0, this._valueRange = 0;
        }
    }

    function Mi(Ni) {
        const Oi = Ni.ticks;
        if (Oi.display && Ni.display) {
            const Pi = (0, Qh.E)(Oi.backdropPadding);
            return (0, Qh.v)(Oi.font && Oi.font.size, Qh.d.font.size) + Ni.height;
        }
        return 0;
    }

    function Pi(Qi, Ri, Si, Ti, Ui) {
        return Qi === Ti || Qi === Ui ? {
            start: Ri - Si / 2,
            end: Ri + Si / 2
        } : Qi < Ti || Qi > Ui ? {
            start: Ri - Si,
            end: Ri
        } : {
            start: Ri,
            end: Ri + Si
        };
    }

    function Qi(Ri) {
        const Si = {
                l: Ri.left + Ri._padding.left,
                r: Ri.right - Ri._padding.right,
                t: Ri.top + Ri._padding.top,
                b: Ri.bottom - Ri._padding.bottom
            },
            Ti = Object.assign({}, Si),
            Ui = [],
            Vi = [],
            Wi = Ri._pointLabels.length,
            Xi = Ri.options.pointLabels,
            Yi = Xi.centerPointLabels ? Qh.P / h : 0;
        for (let Zi = 0; Zi < h; Zi++) {
            const $i = Xi.setContext(Ri.getPointLabelContext(Zi));
            Vi[Zi] = h.padding;
            const aj = Ri.getPointPosition(Zi, Ri.drawingArea + Vi[Zi], Yi),
                bj = (0, Qh.a0)(h.font),
                cj = (Mi = Ri.ctx, l = v, m = Ri._pointLabels[Zi], m = (0, Qh.b)(m) ? m : [m], {
                    w: (0, Qh.aN)(Mi, l.string, m),
                    h: m.length * l.lineHeight
                });
            Ui[Zi] = y;
            const dj = (0, Qh.ay)(Ri.getIndexAngle(Zi) + Yi),
                ej = Math.round((0, Qh.U)(A));
            _gj(Ti, Si, A, Pi(C, s.x, y.w, 0, 180), Pi(C, s.y, y.h, 90, 270));
        }
        var fj, gj, hj;
        Ri.setCenterPoint(Si.l - Ti.l, Ti.r - Si.r, Si.t - Ti.t, Ti.b - Si.b), Ri._pointLabelItems = function(ij, jj, kj) {
            const lj = [],
                mj = ij._pointLabels.length,
                nj = ij.options,
                oj = Mi(nj) / 2,
                pj = ij.drawingArea,
                qj = nj.pointLabels.centerPointLabels ? Qh.P / mj : 0;
            for (let rj = 0; rj < mj; rj++) {
                const sj = ij.getPointPosition(rj, pj + oj + kj[rj], qj),
                    tj = Math.round((0, Qh.U)((0, Qh.ay)(sj.angle + Qh.H))),
                    uj = jj[rj],
                    vj = _lj(sj.y, uj.h, tj),
                    wj = _jj(tj),
                    xj = _kj(sj.x, uj.w, wj);
                lj.push({
                    x: sj.x,
                    y: vj,
                    textAlign: wj,
                    left: xj,
                    top: vj,
                    right: xj + uj.w,
                    bottom: vj + uj.h
                });
            }
            return lj;
        }(Ri, Ui, Vi);
    }

    function _gj(hj, ij, jj, kj, lj) {
        const mj = Math.abs(Math.sin(jj)),
            nj = Math.abs(Math.cos(jj));
        let oj = 0,
            pj = 0;
        kj.start < ij.l ? (oj = (ij.l - kj.start) / mj, hj.l = Math.min(hj.l, ij.l - oj)) : kj.end > ij.r && (oj = (kj.end - ij.r) / mj, hj.r = Math.max(hj.r, ij.r + oj)), lj.start < ij.t ? (pj = (ij.t - lj.start) / h, hj.t = Math.min(hj.t, ij.t - pj)) : lj.end > ij.b && (pj = (lj.end - ij.b) / h, hj.b = Math.max(hj.b, ij.b + pj));
    }

    function _jj(kj) {
        return 0 === kj || 180 === kj ? 'center' : kj < 180 ? 'left' : 'right';
    }

    function _kj(lj, mj, nj) {
        return 'right' === nj ? lj -= mj : 'center' === nj && (lj -= mj / 2), lj;
    }

    function _lj(mj, nj, oj) {
        return 90 === oj || 270 === oj ? mj -= nj / 2 : (oj > 270 || oj < 90) && (mj -= nj), mj;
    }

    function mj(nj, oj, pj, qj) {
        const {
            ctx: rj
        } = nj;
        if (pj)
            rj.arc(nj.xCenter, nj.yCenter, oj, 0, mj.T);
        else {
            let sj = nj.getPointPosition(0, oj);
            rj.moveTo(sj.x, sj.y);
            for (let tj = 1; tj < qj; tj++)
                sj = nj.getPointPosition(tj, oj), rj.lineTo(sj.x, sj.y);
        }
    }
    (0, rj.default)(Li, 'id', 'logarithmic'), (0, rj.default)(Li, 'defaults', {
        ticks: {
            callback: mj.aL.formatters.logarithmic,
            major: {
                enabled: !0
            }
        }
    });
    class oj extends vi {
        setDimensions() {
            const pj = this._padding = (0, mj.E)(Mi(this.options) / 2),
                qj = this.width = this.maxWidth - pj.width,
                rj = this.height = this.maxHeight - pj.height;
            this.xCenter = Math.floor(this.left + qj / 2 + pj.left), this.yCenter = Math.floor(this.top + rj / 2 + pj.top), this.drawingArea = Math.floor(Math.min(qj, rj) / 2);
        }
        determineDataLimits() {
            const {
                min: pj,
                max: qj
            } = this.getMinMax(!1);
            this.min = (0, mj.g)(pj) && !isNaN(pj) ? pj : 0, this.max = (0, mj.g)(qj) && !isNaN(qj) ? qj : 0, this.handleTickRangeOptions();
        }
        computeTickLimit() {
            return Math.ceil(this.drawingArea / Mi(this.options));
        }
        generateTickLabels(pj) {
            vi.prototype.generateTickLabels.call(this, pj), this._pointLabels = this.getLabels().map((qj, rj) => {
                const sj = (0, mj.Q)(this.options.pointLabels.callback, [
                    qj,
                    rj
                ], this);
                return sj || 0 === sj ? sj : '';
            }).filter((qj, rj) => this.chart.getDataVisibility(rj));
        }
        fit() {
            const pj = this.options;
            pj.display && pj.pointLabels.display ? Qi(this) : this.setCenterPoint(0, 0, 0, 0);
        }
        setCenterPoint(pj, qj, rj, sj) {
            this.xCenter += Math.floor((pj - qj) / 2), this.yCenter += Math.floor((rj - sj) / 2), this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(pj, qj, rj, sj));
        }
        getIndexAngle(pj) {
            const qj = mj.T / (this._pointLabels.length || 1),
                rj = this.options.startAngle || 0;
            return (0, mj.ay)(pj * qj + (0, mj.t)(rj));
        }
        getDistanceFromCenterForValue(pj) {
            if ((0, mj.k)(pj))
                return NaN;
            const qj = this.drawingArea / (this.max - this.min);
            return this.options.reverse ? (this.max - pj) * qj : (pj - this.min) * qj;
        }
        getValueForDistanceFromCenter(pj) {
            if ((0, mj.k)(pj))
                return NaN;
            const qj = pj / (this.drawingArea / (this.max - this.min));
            return this.options.reverse ? this.max - qj : this.min + qj;
        }
        getPointLabelContext(pj) {
            const qj = this._pointLabels || [];
            if (pj >= 0 && pj < qj.length) {
                const rj = qj[pj];
                return function(sj, tj, uj) {
                    return (0, mj.j)(sj, {
                        label: uj,
                        index: tj,
                        type: 'pointLabel'
                    });
                }(this.getContext(), pj, rj);
            }
        }
        getPointPosition(pj, qj, rj = 0) {
            const sj = this.getIndexAngle(pj) - mj.H + rj;
            return {
                x: Math.cos(sj) * qj + this.xCenter,
                y: Math.sin(sj) * qj + this.yCenter,
                angle: sj
            };
        }
        getPointPositionForValue(pj, qj) {
            return this.getPointPosition(pj, this.getDistanceFromCenterForValue(qj));
        }
        getBasePosition(pj) {
            return this.getPointPositionForValue(pj || 0, this.getBaseValue());
        }
        getPointLabelPosition(pj) {
            const {
                left: qj,
                top: rj,
                right: sj,
                bottom: tj
            } = this._pointLabelItems[pj];
            return {
                left: qj,
                top: rj,
                right: sj,
                bottom: tj
            };
        }
        drawBackground() {
            const {
                backgroundColor: pj,
                grid: {
                    circular: qj
                }
            } = this.options;
            if (pj) {
                const rj = this.ctx;
                rj.save(), rj.beginPath(), mj(this, this.getDistanceFromCenterForValue(this._endValue), qj, this._pointLabels.length), rj.closePath(), rj.fillStyle = pj, rj.fill(), rj.restore();
            }
        }
        drawGrid() {
            const pj = this.ctx,
                qj = this.options,
                {
                    angleLines: rj,
                    grid: sj,
                    border: tj
                } = qj,
                uj = this._pointLabels.length;
            let vj, wj, xj;
            if (qj.pointLabels.display && function(yj, zj) {
                    const {
                        ctx: Aj,
                        options: {
                            pointLabels: Bj
                        }
                    } = yj;
                    for (let Cj = zj - 1; Cj >= 0; Cj--) {
                        const Dj = Bj.setContext(yj.getPointLabelContext(Cj)),
                            Ej = (0, mj.a0)(Dj.font),
                            {
                                x: Fj,
                                y: Gj,
                                textAlign: Hj,
                                left: Ij,
                                top: Jj,
                                right: Kj,
                                bottom: Lj
                            } = yj._pointLabelItems[Cj],
                            {
                                backdropColor: Mj
                            } = Dj;
                        if (!(0, mj.k)(Mj)) {
                            const Nj = (0, mj.aw)(Dj.borderRadius),
                                Oj = (0, mj.E)(Dj.backdropPadding);
                            Aj.fillStyle = Mj;
                            const Pj = Ij - Oj.left,
                                Qj = Jj - Oj.top,
                                Rj = Kj - Ij + Oj.width,
                                Sj = Lj - Jj + Oj.height;
                            Object.values(Nj).some(Tj => 0 !== Tj) ? (Aj.beginPath(), (0, mj.au)(Aj, {
                                x: Cj,
                                y: Qj,
                                w: Rj,
                                h: Sj,
                                radius: Nj
                            }), Aj.fill()) : Aj.fillRect(Cj, Qj, Rj, Sj);
                        }
                        (0, mj.Z)(Aj, Nj._pointLabels[Cj], Rj, Sj + Qj.lineHeight / 2, Qj, {
                            color: Dj.color,
                            textAlign: Hj,
                            textBaseline: 'middle'
                        });
                    }
                }(this, uj), sj.display && this.ticks.forEach((yj, zj) => {
                    if (0 !== zj) {
                        wj = this.getDistanceFromCenterForValue(yj.value);
                        const Aj = this.getContext(zj),
                            Bj = sj.setContext(Aj),
                            Cj = tj.setContext(Aj);
                        ! function(Dj, Ej, Fj, Gj, Hj) {
                            const Ij = Dj.ctx,
                                Jj = Ej.circular,
                                {
                                    color: Kj,
                                    lineWidth: Lj
                                } = Ej;
                            !Jj && !Gj || !Kj || !Lj || Fj < 0 || (Ij.save(), Ij.strokeStyle = Kj, Ij.lineWidth = Lj, Ij.setLineDash(Hj.dash), Ij.lineDashOffset = Hj.dashOffset, Ij.beginPath(), mj(Dj, Fj, Jj, Gj), Ij.closePath(), Ij.stroke(), Ij.restore());
                        }(this, Bj, wj, uj, Cj);
                    }
                }), rj.display) {
                for (pj.save(), vj = uj - 1; vj >= 0; vj--) {
                    const yj = rj.setContext(this.getPointLabelContext(vj)),
                        {
                            color: zj,
                            lineWidth: Aj
                        } = yj;
                    Aj && zj && (pj.lineWidth = Aj, pj.strokeStyle = zj, pj.setLineDash(yj.borderDash), pj.lineDashOffset = yj.borderDashOffset, wj = this.getDistanceFromCenterForValue(qj.ticks.reverse ? this.min : this.max), xj = this.getPointPosition(vj, wj), pj.beginPath(), pj.moveTo(this.xCenter, this.yCenter), pj.lineTo(xj.x, xj.y), pj.stroke());
                }
                pj.restore();
            }
        }
        drawBorder() {}
        drawLabels() {
            const pj = this.ctx,
                qj = this.options,
                rj = qj.ticks;
            if (!rj.display)
                return;
            const sj = this.getIndexAngle(0);
            let tj, uj;
            pj.save(), pj.translate(this.xCenter, this.yCenter), pj.rotate(sj), pj.textAlign = 'center', pj.textBaseline = 'middle', this.ticks.forEach((vj, wj) => {
                if (0 === wj && !qj.reverse)
                    return;
                const xj = rj.setContext(this.getContext(wj)),
                    yj = (0, mj.a0)(xj.font);
                if (tj = this.getDistanceFromCenterForValue(this.ticks[wj].value), xj.showLabelBackdrop) {
                    pj.font = yj.string, uj = pj.measureText(vj.label).width, pj.fillStyle = xj.backdropColor;
                    const zj = (0, mj.E)(xj.backdropPadding);
                    pj.fillRect(-uj / 2 - zj.left, -tj - yj.size / 2 - zj.top, uj + zj.width, yj.size + zj.height);
                }
                (0, mj.Z)(pj, vj.label, 0, -tj, yj, {
                    color: xj.color
                });
            }), pj.restore();
        }
        drawTitle() {}
        constructor(pj) {
            super(pj), this.xCenter = void 0, this.yCenter = void 0, this.drawingArea = void 0, this._pointLabels = [], this._pointLabelItems = [];
        }
    }
    (0, rj.default)(oj, 'id', 'radialLinear'), (0, rj.default)(oj, 'defaults', {
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
            callback: mj.aL.formatters.numeric
        },
        pointLabels: {
            backdropColor: void 0,
            backdropPadding: 2,
            display: !0,
            font: {
                size: 10
            },
            callback: pj => pj,
            padding: 5,
            centerPointLabels: !1
        }
    }), (0, rj.default)(oj, 'defaultRoutes', {
        'angleLines.color': 'borderColor',
        'pointLabels.color': 'color',
        'ticks.color': 'color'
    }), (0, rj.default)(oj, 'descriptors', {
        angleLines: {
            _fallback: 'grid'
        }
    });
    const pj = {
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
        qj = Object.keys(pj);

    function rj(sj, tj) {
        return sj - tj;
    }

    function sj(tj, uj) {
        if ((0, mj.k)(uj))
            return null;
        const vj = tj._adapter,
            {
                parser: wj,
                round: xj,
                isoWeekday: yj
            } = tj._parseOpts;
        let zj = uj;
        return 'function' == typeof wj && (zj = wj(zj)), (0, mj.g)(zj) || (zj = 'string' == typeof wj ? vj.parse(zj, wj) : vj.parse(zj)), null === zj ? null : (xj && (zj = 'week' !== xj || !(0, mj.x)(h) && !0 !== h ? vj.startOf(zj, xj) : vj.startOf(zj, 'isoWeek', h)), +zj);
    }

    function xj(yj, zj, Aj, Bj) {
        const Cj = qj.length;
        for (let Dj = qj.indexOf(yj); Dj < Cj - 1; ++Dj) {
            const Ej = pj[qj[Dj]],
                Fj = yj.steps ? yj.steps : Number.MAX_SAFE_INTEGER;
            if (yj.common && Math.ceil((Aj - zj) / (Fj * yj.size)) <= Bj)
                return qj[Dj];
        }
        return qj[Fj - 1];
    }

    function Bj(Cj, Dj, Ej) {
        if (Ej) {
            if (Ej.length) {
                const {
                    lo: Fj,
                    hi: Gj
                } = (0, mj.aP)(Ej, Dj);
                Cj[Ej[Fj] >= Dj ? Ej[Fj] : Ej[Gj]] = !0;
            }
        } else
            Cj[Dj] = !0;
    }

    function Ej(Fj, Gj, Hj) {
        const Ij = [],
            Jj = {},
            Kj = Gj.length;
        let Lj, Mj;
        for (Lj = 0; Lj < Kj; ++Lj)
            Mj = Gj[Lj], Jj[Mj] = Lj, Ij.push({
                value: Mj,
                major: !1
            });
        return 0 !== Kj && Hj ? function(Nj, Oj, Pj, Qj) {
            const Rj = Nj._adapter,
                Sj = +Rj.startOf(Oj[0].value, Qj),
                Tj = Oj[Oj.length - 1].value;
            let Uj, Vj;
            for (Uj = Sj; Uj <= Tj; Uj = +Rj.add(Uj, 1, Qj))
                Vj = Pj[Uj], Vj >= 0 && (Oj[Vj].major = !0);
            return Oj;
        }(Fj, Ij, Jj, Hj) : Ij;
    }
    class Ij extends je {
        init(Jj, Kj = {}) {
            const Lj = Jj.time || (Jj.time = {}),
                Mj = this._adapter = new Nb(Jj.adapters.date);
            Mj.init(Kj), (0, Kj.ab)(Lj.displayFormats, Mj.formats()), this._parseOpts = {
                parser: Lj.parser,
                round: Lj.round,
                isoWeekday: Lj.isoWeekday
            }, super.init(Jj), this._normalized = Kj.normalized;
        }
        parse(Jj, Kj) {
            return void 0 === Jj ? null : sj(this, Jj);
        }
        beforeLayout() {
            super.beforeLayout(), this._cache = {
                data: [],
                labels: [],
                all: []
            };
        }
        determineDataLimits() {
            const Jj = this.options,
                Kj = this._adapter,
                Lj = Jj.time.unit || 'day';
            let {
                min: Mj,
                max: Nj,
                minDefined: Oj,
                maxDefined: Pj
            } = this.getUserBounds();

            function Qj(Rj) {
                Oj || isNaN(Rj.min) || (Mj = Math.min(Mj, Rj.min)), Pj || isNaN(Rj.max) || (Nj = Math.max(Nj, Rj.max));
            }
            Oj && Pj || (Qj(this._getLabelBounds()), 'ticks' === Jj.bounds && 'labels' === Jj.ticks.source || Qj(this.getMinMax(!1))), Mj = (0, Kj.g)(Mj) && !isNaN(Mj) ? Mj : +Kj.startOf(Date.now(), Lj), Nj = (0, Kj.g)(Nj) && !isNaN(Nj) ? Nj : +Kj.endOf(Date.now(), Lj) + 1, this.min = Math.min(Mj, Nj - 1), this.max = Math.max(Mj + 1, Nj);
        }
        _getLabelBounds() {
            const Jj = this.getLabelTimestamps();
            let Kj = Number.POSITIVE_INFINITY,
                Lj = Number.NEGATIVE_INFINITY;
            return Jj.length && (Kj = Jj[0], Lj = Jj[Jj.length - 1]), {
                min: Kj,
                max: Lj
            };
        }
        buildTicks() {
            const Jj = this.options,
                Kj = Jj.time,
                Lj = Jj.ticks,
                Mj = 'labels' === Lj.source ? this.getLabelTimestamps() : this._generate();
            'ticks' === Jj.bounds && Mj.length && (this.min = this._userMin || Mj[0], this.max = this._userMax || Mj[Mj.length - 1]);
            const Nj = this.min,
                Oj = this.max,
                Pj = (0, Kj.aO)(Mj, Nj, Oj);
            return this._unit = Kj.unit || (Lj.autoSkip ? xj(Kj.minUnit, this.min, this.max, this._getLabelCapacity(Nj)) : function(Qj, Rj, Sj, Tj, Uj) {
                for (let Vj = qj.length - 1; Vj >= qj.indexOf(Sj); Vj--) {
                    const Wj = qj[Vj];
                    if (pj[Wj].common && Qj._adapter.diff(Uj, Tj, Wj) >= Rj - 1)
                        return Wj;
                }
                return qj[Wj ? qj.indexOf(Wj) : 0];
            }(this, Pj.length, Kj.minUnit, this.min, this.max)), this._majorUnit = Lj.major.enabled && 'year' !== this._unit ? function(Qj) {
                for (let Rj = qj.indexOf(Qj) + 1, Sj = qj.length; Rj < Sj; ++Rj)
                    if (pj[qj[Rj]].common)
                        return qj[Rj];
            }(this._unit) : void 0, this.initOffsets(Mj), Jj.reverse && Pj.reverse(), Ej(this, Pj, this._majorUnit);
        }
        afterAutoSkip() {
            this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map(Jj => +Jj.value));
        }
        initOffsets(Jj = []) {
            let Kj, Lj, Mj = 0,
                Nj = 0;
            this.options.offset && Jj.length && (Kj = this.getDecimalForValue(Jj[0]), Mj = 1 === Jj.length ? 1 - Kj : (this.getDecimalForValue(Jj[1]) - Kj) / 2, Lj = this.getDecimalForValue(Jj[Jj.length - 1]), Nj = 1 === Jj.length ? Lj : (Lj - this.getDecimalForValue(Jj[Jj.length - 2])) / 2);
            const Oj = Jj.length < 3 ? 0.5 : 0.25;
            Mj = (0, Kj.S)(Mj, 0, Oj), Nj = (0, Kj.S)(Nj, 0, Oj), this._offsets = {
                start: Mj,
                end: Nj,
                factor: 1 / (Mj + 1 + Nj)
            };
        }
        _generate() {
            const Jj = this._adapter,
                Kj = this.min,
                Lj = this.max,
                Mj = this.options,
                Nj = Mj.time,
                Oj = Nj.unit || xj(Nj.minUnit, Kj, Lj, this._getLabelCapacity(Kj)),
                Pj = (0, Kj.v)(Mj.ticks.stepSize, 1),
                Qj = 'week' === Oj && Nj.isoWeekday,
                Rj = (0, Kj.x)(Qj) || !0 === Qj,
                Sj = {};
            let Tj, Uj, Vj = Kj;
            if (Rj && (Vj = +Jj.startOf(Vj, 'isoWeek', Qj)), Vj = +Jj.startOf(Vj, Rj ? 'day' : Oj), Jj.diff(Lj, Kj, Oj) > 100000 * Pj)
                throw new Error(Kj + ' and ' + Lj + ' are too far apart with stepSize of ' + Pj + ' ' + Oj);
            const Wj = 'data' === Mj.ticks.source && this.getDataTimestamps();
            for (Tj = Vj, Uj = 0; Tj < Lj; Tj = +Jj.add(Tj, Pj, Oj), Uj++)
                Bj(Sj, Tj, Wj);
            return Tj !== Lj && 'ticks' !== Mj.bounds && 1 !== Uj || Bj(Sj, Tj, Wj), Object.keys(Sj).sort((Xj, Yj) => Xj - Yj).map(Xj => +Xj);
        }
        getLabelForValue(Jj) {
            const Kj = this._adapter,
                Lj = this.options.time;
            return Lj.tooltipFormat ? Kj.format(Jj, Lj.tooltipFormat) : Kj.format(Jj, Lj.displayFormats.datetime);
        }
        format(Jj, Kj) {
            const Lj = this.options.time.displayFormats,
                Mj = this._unit,
                Nj = Kj || Lj[Mj];
            return this._adapter.format(Jj, Nj);
        }
        _tickFormatFunction(Jj, Kj, Lj, Mj) {
            const Nj = this.options,
                Oj = Nj.ticks.callback;
            if (Oj)
                return (0, Kj.Q)(Oj, [
                    Jj,
                    Kj,
                    Lj
                ], this);
            const Pj = Nj.time.displayFormats,
                Qj = this._unit,
                Rj = this._majorUnit,
                Sj = Qj && Pj[Qj],
                Tj = Rj && Pj[Rj],
                Uj = Lj[Kj],
                Vj = Rj && Tj && Uj && Uj.major;
            return this._adapter.format(Jj, Mj || (Vj ? Tj : Sj));
        }
        generateTickLabels(Jj) {
            let Kj, Lj, Mj;
            for (Kj = 0, Lj = Jj.length; Kj < Lj; ++Kj)
                Mj = Jj[Kj], Mj.label = this._tickFormatFunction(Mj.value, Kj, Jj);
        }
        getDecimalForValue(Jj) {
            return null === Jj ? NaN : (Jj - this.min) / (this.max - this.min);
        }
        getPixelForValue(Jj) {
            const Kj = this._offsets,
                Lj = this.getDecimalForValue(Jj);
            return this.getPixelForDecimal((Kj.start + Lj) * Kj.factor);
        }
        getValueForPixel(Jj) {
            const Kj = this._offsets,
                Lj = this.getDecimalForPixel(Jj) / Kj.factor - Kj.end;
            return this.min + Lj * (this.max - this.min);
        }
        _getLabelSize(Jj) {
            const Kj = this.options.ticks,
                Lj = this.ctx.measureText(Jj).width,
                Mj = (0, Kj.t)(this.isHorizontal() ? Kj.maxRotation : Kj.minRotation),
                Nj = Math.cos(Mj),
                Oj = Math.sin(Mj),
                Pj = this._resolveTickFontOptions(0).size;
            return {
                w: Lj * Nj + Pj * Oj,
                h: Lj * Oj + Pj * Nj
            };
        }
        _getLabelCapacity(Jj) {
            const Kj = this.options.time,
                Lj = Kj.displayFormats,
                Mj = Lj[Kj.unit] || Lj.millisecond,
                Nj = this._tickFormatFunction(Jj, 0, Ej(this, [Jj], this._majorUnit), Mj),
                Oj = this._getLabelSize(Nj),
                Pj = Math.floor(this.isHorizontal() ? this.width / Oj.w : this.height / Oj.h) - 1;
            return Pj > 0 ? Pj : 1;
        }
        getDataTimestamps() {
            let Jj, Kj, Lj = this._cache.data || [];
            if (Lj.length)
                return Lj;
            const Mj = this.getMatchingVisibleMetas();
            if (this._normalized && Mj.length)
                return this._cache.data = Mj[0].controller.getAllParsedValues(this);
            for (Jj = 0, Kj = Mj.length; Jj < Kj; ++Jj)
                Lj = Lj.concat(Mj[Jj].controller.getAllParsedValues(this));
            return this._cache.data = this.normalize(Lj);
        }
        getLabelTimestamps() {
            const Jj = this._cache.labels || [];
            let Kj, Lj;
            if (Jj.length)
                return Jj;
            const Mj = this.getLabels();
            for (Kj = 0, Lj = Mj.length; Kj < Lj; ++Kj)
                Jj.push(sj(this, Mj[Kj]));
            return this._cache.labels = this._normalized ? Jj : this.normalize(Jj);
        }
        normalize(Jj) {
            return (0, Kj._)(Jj.sort(rj));
        }
        constructor(Jj) {
            super(Jj), this._cache = {
                data: [],
                labels: [],
                all: []
            }, this._unit = 'day', this._majorUnit = void 0, this._offsets = {}, this._normalized = !1, this._parseOpts = void 0;
        }
    }

    function Jj(Kj, Lj, Mj) {
        let Nj, Oj, Pj, Qj, Rj = 0,
            Sj = Kj.length - 1;
        Mj ? (Lj >= Kj[Rj].pos && Lj <= Kj[Sj].pos && ({
            lo: Tj,
            hi: Uj
        } = (0, Kj.B)(Kj, 'pos', Lj)), {
            pos: Vj,
            time: Wj
        } = Kj[Tj], {
            pos: Xj,
            time: Yj
        } = Kj[Uj]) : (Lj >= Kj[Tj].time && Lj <= Kj[Uj].time && ({
            lo: Zj,
            hi: $j
        } = (0, Kj.B)(Kj, 'time', Lj)), {
            time: ak,
            pos: bk
        } = Kj[Zj], {
            time: ck,
            pos: dk
        } = Kj[$j]);
        const ek = ck - ak;
        return l ? bk + (dk - bk) * (Lj - ak) / l : bk;
    }
    (0, Jj.default)(Ij, 'id', 'time'), (0, Jj.default)(Ij, 'defaults', {
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
    class Lj extends Ij {
        initOffsets() {
            const Mj = this._getTimestampsForTable(),
                Nj = this._table = this.buildLookupTable(Mj);
            this._minPos = Jj(Nj, this.min), this._tableRange = Jj(Nj, this.max) - this._minPos, super.initOffsets(Mj);
        }
        buildLookupTable(Mj) {
            const {
                min: Nj,
                max: Oj
            } = this, Pj = [], Qj = [];
            let Rj, Sj, Tj, Uj, Vj;
            for (Rj = 0, Sj = Mj.length; Rj < Sj; ++Rj)
                Uj = Mj[Rj], Uj >= Nj && Uj <= Oj && Pj.push(Uj);
            if (Pj.length < 2)
                return [{
                        time: Nj,
                        pos: 0
                    },
                    {
                        time: Oj,
                        pos: 1
                    }
                ];
            for (Rj = 0, Sj = Pj.length; Rj < Sj; ++Rj)
                Vj = Pj[Rj + 1], Tj = Pj[Rj - 1], Uj = Pj[Rj], Math.round((Vj + Tj) / 2) !== Uj && Qj.push({
                    time: Uj,
                    pos: Rj / (Sj - 1)
                });
            return Qj;
        }
        _getTimestampsForTable() {
            let Mj = this._cache.all || [];
            if (Mj.length)
                return Mj;
            const Nj = this.getDataTimestamps(),
                Oj = this.getLabelTimestamps();
            return Mj = Nj.length && Oj.length ? this.normalize(Nj.concat(Oj)) : Nj.length ? Nj : Oj, Mj = this._cache.all = Mj, Mj;
        }
        getDecimalForValue(Mj) {
            return (Jj(this._table, Mj) - this._minPos) / this._tableRange;
        }
        getValueForPixel(Mj) {
            const Nj = this._offsets,
                Oj = this.getDecimalForPixel(Mj) / Nj.factor - Nj.end;
            return Jj(this._table, Oj * this._tableRange + this._minPos, !0);
        }
        constructor(Mj) {
            super(Mj), this._table = [], this._minPos = void 0, this._tableRange = void 0;
        }
    }
    (0, Jj.default)(Lj, 'id', 'timeseries'), (0, Jj.default)(Lj, 'defaults', Ij.defaults);
}), c.register('.....', function(d, e) {
    a(d.exports, 'aF', function() {
        return _g;
    }), a(d.exports, 'ac', function() {
        return _h;
    }), a(d.exports, 'k', function() {
        return _i;
    }), a(d.exports, 'b', function() {
        return _j;
    }), a(d.exports, 'i', function() {
        return _l;
    }), a(d.exports, 'g', function() {
        return _m;
    }), a(d.exports, 'O', function() {
        return _n;
    }), a(d.exports, 'v', function() {
        return _o;
    }), a(d.exports, 'm', function() {
        return _p;
    }), a(d.exports, 'n', function() {
        return _q;
    }), a(d.exports, 'Q', function() {
        return _r;
    }), a(d.exports, 'F', function() {
        return _s;
    }), a(d.exports, 'ah', function() {
        return _t;
    }), a(d.exports, 'a4', function() {
        return _C;
    }), a(d.exports, 'ab', function() {
        return _H;
    }), a(d.exports, 'f', function() {
        return _M;
    }), a(d.exports, 'a5', function() {
        return _O;
    }), a(d.exports, 'h', function() {
        return _P;
    }), a(d.exports, 'a7', function() {
        return _Q;
    }), a(d.exports, 'ag', function() {
        return _R;
    }), a(d.exports, 'ai', function() {
        return _S;
    }), a(d.exports, 'P', function() {
        return _T;
    }), a(d.exports, 'T', function() {
        return _U;
    }), a(d.exports, 'H', function() {
        return _Y;
    }), a(d.exports, 'aM', function() {
        return _ab;
    }), a(d.exports, 's', function() {
        return _bb;
    }), a(d.exports, 'aJ', function() {
        return _cb;
    }), a(d.exports, 'aH', function() {
        return _db;
    }), a(d.exports, 'N', function() {
        return _hb;
    }), a(d.exports, 'x', function() {
        return _kb;
    }), a(d.exports, 'aI', function() {
        return _lb;
    }), a(d.exports, 'aG', function() {
        return _nb;
    }), a(d.exports, 't', function() {
        return _ob;
    }), a(d.exports, 'U', function() {
        return _pb;
    }), a(d.exports, 'aK', function() {
        return _qb;
    }), a(d.exports, 'D', function() {
        return _rb;
    }), a(d.exports, 'aE', function() {
        return _vb;
    }), a(d.exports, 'ay', function() {
        return _xb;
    }), a(d.exports, 'p', function() {
        return _yb;
    }), a(d.exports, 'S', function() {
        return _Gb;
    }), a(d.exports, 'W', function() {
        return _Hb;
    }), a(d.exports, 'aj', function() {
        return _Ib;
    }), a(d.exports, 'aP', function() {
        return _Jb;
    }), a(d.exports, 'B', function() {
        return _Kb;
    }), a(d.exports, 'A', function() {
        return _Lb;
    }), a(d.exports, 'aO', function() {
        return _Mb;
    }), a(d.exports, 'l', function() {
        return _Ob;
    }), a(d.exports, 'u', function() {
        return _Pb;
    }), a(d.exports, '_', function() {
        return _Tb;
    }), a(d.exports, 'r', function() {
        return _Vb;
    }), a(d.exports, 'L', function() {
        return _Wb;
    }), a(d.exports, 'ad', function() {
        return _Xb;
    }), a(d.exports, 'a1', function() {
        return _Yb;
    }), a(d.exports, 'a2', function() {
        return _Zb;
    }), a(d.exports, 'aB', function() {
        return _$b;
    }), a(d.exports, 'q', function() {
        return _ac;
    }), a(d.exports, 'w', function() {
        return _jc;
    }), a(d.exports, 'e', function() {
        return _sc;
    }), a(d.exports, 'c', function() {
        return _vc;
    }), a(d.exports, 'o', function() {
        return _Ac;
    }), a(d.exports, 'aL', function() {
        return _Cc;
    }), a(d.exports, 'a3', function() {
        return _Dc;
    }), a(d.exports, 'a6', function() {
        return _Ec;
    }), a(d.exports, 'd', function() {
        return _Kc;
    }), a(d.exports, 'V', function() {
        return _Lc;
    }), a(d.exports, 'aN', function() {
        return _Mc;
    }), a(d.exports, 'X', function() {
        return _Pc;
    }), a(d.exports, 'af', function() {
        return _Sc;
    }), a(d.exports, 'at', function() {
        return _Tc;
    }), a(d.exports, 'aD', function() {
        return _Uc;
    }), a(d.exports, 'C', function() {
        return _Yc;
    }), a(d.exports, 'Y', function() {
        return _Zc;
    }), a(d.exports, '$', function() {
        return _$c;
    }), a(d.exports, 'ar', function() {
        return _ad;
    }), a(d.exports, 'as', function() {
        return _cd;
    }), a(d.exports, 'Z', function() {
        return _dd;
    }), a(d.exports, 'au', function() {
        return _pd;
    }), a(d.exports, 'ak', function() {
        return _zd;
    }), a(d.exports, 'av', function() {
        return _Fd;
    }), a(d.exports, 'aw', function() {
        return _Gd;
    }), a(d.exports, 'E', function() {
        return _Hd;
    }), a(d.exports, 'a0', function() {
        return _Jd;
    }), a(d.exports, 'a', function() {
        return _Ld;
    }), a(d.exports, 'R', function() {
        return _Md;
    }), a(d.exports, 'j', function() {
        return _Rd;
    }), a(d.exports, 'a9', function() {
        return _Sd;
    }), a(d.exports, 'a8', function() {
        return _Ud;
    }), a(d.exports, 'aa', function() {
        return _Wd;
    }), a(d.exports, 'y', function() {
        return _qe;
    }), a(d.exports, 'al', function() {
        return _Le;
    }), a(d.exports, 'M', function() {
        return _Me;
    }), a(d.exports, 'I', function() {
        return _Ne;
    }), a(d.exports, 'z', function() {
        return _Ue;
    }), a(d.exports, 'G', function() {
        return _gf;
    }), a(d.exports, 'ae', function() {
        return _qf;
    }), a(d.exports, 'K', function() {
        return _vf;
    }), a(d.exports, 'J', function() {
        return _wf;
    }), a(d.exports, 'aq', function() {
        return _zf;
    }), a(d.exports, 'ao', function() {
        return _Af;
    }), a(d.exports, 'ap', function() {
        return _Bf;
    }), a(d.exports, 'az', function() {
        return _Jf;
    }), a(d.exports, 'aA', function() {
        return _Kf;
    }), a(d.exports, 'aC', function() {
        return _Lf;
    }), a(d.exports, 'ax', function() {
        return _Of;
    }), a(d.exports, 'an', function() {
        return _cg;
    }), a(d.exports, 'am', function() {
        return _gg;
    });
    var f = c('.....');

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

    function _l(m) {
        return null !== m && '[object Object]' === Object.prototype.toString.call(m);
    }

    function _m(n) {
        return ('number' == typeof n || n instanceof Number) && isFinite(+n);
    }

    function _n(o, p) {
        return _m(o) ? o : p;
    }

    function _o(p, q) {
        return void 0 === p ? q : p;
    }
    const _p = (q, r) => 'string' == typeof q && q.endsWith('%') ? parseFloat(q) / 100 : +q / r,
        _q = (r, s) => 'string' == typeof r && r.endsWith('%') ? parseFloat(r) / 100 * s : +r;

    function _r(s, t, u) {
        if (s && 'function' == typeof s.call)
            return s.apply(u, t);
    }

    function _s(t, u, v, w) {
        let x, y, z;
        if (_j(t))
            if (y = t.length, w)
                for (x = y - 1; x >= 0; x--)
                    u.call(v, t[x], x);
            else
                for (x = 0; x < y; x++)
                    u.call(v, t[x], x);
        else if (_l(t))
            for (z = Object.keys(t), y = z.length, x = 0; x < y; x++)
                u.call(v, t[z[x]], z[x]);
    }

    function _t(u, v) {
        let w, x, y, z;
        if (!u || !v || u.length !== v.length)
            return !1;
        for (w = 0, x = u.length; w < x; ++w)
            if (y = u[w], z = v[w], y.datasetIndex !== z.datasetIndex || y.index !== z.index)
                return !1;
        return !0;
    }

    function u(v) {
        if (_j(v))
            return v.map(u);
        if (_l(v)) {
            const w = Object.create(null),
                x = Object.keys(v),
                y = x.length;
            let z = 0;
            for (; z < y; ++z)
                w[x[z]] = u(v[x[z]]);
            return w;
        }
        return v;
    }

    function y(z) {
        return -1 === [
            '__proto__',
            'prototype',
            'constructor'
        ].indexOf(z);
    }

    function z(A, B, C, D) {
        if (!y(A))
            return;
        const E = B[A],
            F = C[A];
        _l(E) && _l(_g) ? _C(E, _g, D) : B[A] = u(_g);
    }

    function _C(D, E, F) {
        const G = _j(E) ? E : [E],
            H = G.length;
        if (!_l(D))
            return D;
        const I = (F = F || {}).merger || z;
        let J;
        for (let K = 0; K < H; ++K) {
            if (J = G[K], !_l(J))
                continue;
            const L = Object.keys(J);
            for (let M = 0, N = L.length; M < N; ++M)
                _g(L[M], D, J, F);
        }
        return D;
    }

    function _H(I, J) {
        return _C(I, J, {
            merger: _I
        });
    }

    function _I(J, K, L) {
        if (!y(J))
            return;
        const M = K[J],
            N = L[J];
        _l(M) && _l(N) ? _H(M, N) : Object.prototype.hasOwnProperty.call(K, J) || (K[J] = u(N));
    }
    const L = {
        '': M => M,
        x: M => M.x,
        y: M => M.y
    };

    function _M(N, O) {
        const P = L[O] || (L[O] = function(Q) {
            const R = function(S) {
                const T = S.split('.'),
                    U = [];
                let V = '';
                for (const W of T)
                    V += W, V.endsWith('\\') ? V = V.slice(0, -1) + '.' : (U.push(V), V = '');
                return U;
            }(Q);
            return S => {
                for (const T of R) {
                    if ('' === T)
                        break;
                    S = S && S[T];
                }
                return S;
            };
        }(O));
        return P(N);
    }

    function _O(P) {
        return P.charAt(0).toUpperCase() + P.slice(1);
    }
    const _P = Q => void 0 !== Q,
        _Q = R => 'function' == typeof R,
        _R = (S, T) => {
            if (S.size !== T.size)
                return !1;
            for (const U of S)
                if (!T.has(U))
                    return !1;
            return !0;
        };

    function _S(T) {
        return 'mouseup' === T.type || 'click' === T.type || 'contextmenu' === T.type;
    }
    const _T = Math.PI,
        _U = 2 * _T,
        V = _U + _T,
        W = Number.POSITIVE_INFINITY,
        X = _T / 180,
        _Y = _T / 2,
        Z = _T / 4,
        $ = 2 * _T / 3,
        _ab = Math.log10,
        _bb = Math.sign;

    function _cb(db, eb, fb) {
        return Math.abs(db - eb) < fb;
    }

    function _db(eb) {
        const fb = Math.round(eb);
        eb = _cb(eb, fb, eb / 1000) ? fb : eb;
        const gb = Math.pow(10, Math.floor(_ab(eb))),
            hb = eb / gb;
        return (hb <= 1 ? 1 : hb <= 2 ? 2 : hb <= 5 ? 5 : 10) * gb;
    }

    function _hb(ib) {
        const jb = [],
            kb = Math.sqrt(ib);
        let lb;
        for (lb = 1; lb < kb; lb++)
            ib % lb == 0 && (jb.push(lb), jb.push(ib / lb));
        return kb === (0 | kb) && jb.push(kb), jb.sort((mb, nb) => mb - nb).pop(), jb;
    }

    function _kb(lb) {
        return !isNaN(parseFloat(lb)) && isFinite(lb);
    }

    function _lb(mb, nb) {
        const ob = Math.round(mb);
        return ob - nb <= mb && ob + nb >= mb;
    }

    function _nb(ob, pb, qb) {
        let rb, sb, tb;
        for (rb = 0, sb = ob.length; rb < sb; rb++)
            tb = ob[rb][qb], isNaN(tb) || (pb.min = Math.min(pb.min, tb), pb.max = Math.max(pb.max, tb));
    }

    function _ob(pb) {
        return pb * (_T / 180);
    }

    function _pb(qb) {
        return qb * (180 / _T);
    }

    function _qb(rb) {
        if (!_m(rb))
            return;
        let sb = 1,
            tb = 0;
        for (; Math.round(rb * sb) / sb !== rb;)
            sb *= 10, tb++;
        return tb;
    }

    function _rb(sb, tb) {
        const ub = tb.x - sb.x,
            vb = tb.y - sb.y,
            wb = Math.sqrt(ub * ub + vb * vb);
        let xb = Math.atan2(vb, ub);
        return xb < -0.5 * _T && (xb += _U), {
            angle: xb,
            distance: wb
        };
    }

    function _vb(wb, xb) {
        return Math.sqrt(Math.pow(xb.x - wb.x, 2) + Math.pow(xb.y - wb.y, 2));
    }

    function wb(xb, yb) {
        return (xb - yb + V) % _U - _T;
    }

    function _xb(yb) {
        return (yb % _U + _U) % _U;
    }

    function _yb(zb, Ab, Bb, Cb) {
        const Db = _xb(zb),
            Eb = _xb(Ab),
            Fb = _xb(Bb),
            Gb = _xb(_g - Db),
            Hb = _xb(Fb - Db),
            Ib = _xb(Db - _g),
            Jb = _xb(Db - Fb);
        return Db === _g || Db === Fb || Cb && _g === Fb || _i > _j && _l < _m;
    }

    function _Gb(Hb, Ib, Jb) {
        return Math.max(Ib, Math.min(Jb, Hb));
    }

    function _Hb(Ib) {
        return _Gb(Ib, -32768, 32767);
    }

    function _Ib(Jb, Kb, Lb, Mb = 0.000001) {
        return Jb >= Math.min(Kb, Lb) - Mb && Jb <= Math.max(Kb, Lb) + Mb;
    }

    function _Jb(Kb, Lb, Mb) {
        Mb = Mb || (Nb => Kb[Nb] < Lb);
        let Nb, Ob = Kb.length - 1,
            Pb = 0;
        for (; Ob - Pb > 1;)
            Nb = Pb + Ob >> 1, Mb(Nb) ? Pb = Nb : Ob = Nb;
        return {
            lo: Pb,
            hi: Ob
        };
    }
    const _Kb = (Lb, Mb, Nb, Ob) => _Jb(Lb, Nb, Ob ? Pb => {
            const Qb = Lb[Pb][Mb];
            return Qb < Nb || Qb === Nb && Lb[Pb + 1][Mb] === Nb;
        } : Pb => Lb[Pb][Mb] < Nb),
        _Lb = (Mb, Nb, Ob) => _Jb(Mb, Ob, Pb => Mb[Pb][Nb] >= Ob);

    function _Mb(Nb, Ob, Pb) {
        let Qb = 0,
            Rb = Nb.length;
        for (; Qb < Rb && Nb[Qb] < Ob;)
            Qb++;
        for (; Rb > Qb && Nb[Rb - 1] > Pb;)
            Rb--;
        return Qb > 0 || Rb < Nb.length ? Nb.slice(Qb, Rb) : Nb;
    }
    const Nb = [
        'push',
        'pop',
        'shift',
        'splice',
        'unshift'
    ];

    function _Ob(Pb, Qb) {
        Pb._chartjs ? Pb._chartjs.listeners.push(Qb) : (Object.defineProperty(Pb, '_chartjs', {
            configurable: !0,
            enumerable: !1,
            value: {
                listeners: [Qb]
            }
        }), Nb.forEach(Rb => {
            const Sb = '_onData' + _O(Rb),
                Tb = Pb[Rb];
            Object.defineProperty(Pb, Rb, {
                configurable: !0,
                enumerable: !1,
                value(...Rb) {
                    const Ub = Tb.apply(this, Rb);
                    return Pb._chartjs.listeners.forEach(Vb => {
                        'function' == typeof Vb[Sb] && Vb[Sb](...Rb);
                    }), Ub;
                }
            });
        }));
    }

    function _Pb(Qb, Rb) {
        const Sb = Qb._chartjs;
        if (!Sb)
            return;
        const Tb = Sb.listeners,
            Ub = Tb.indexOf(Rb); -
        1 !== Ub && Tb.splice(Ub, 1), Tb.length > 0 || (Nb.forEach(Vb => {
            delete Qb[Vb];
        }), delete Qb._chartjs);
    }

    function _Tb(Ub) {
        const Vb = new Set();
        let Wb, Xb;
        for (Wb = 0, Xb = Ub.length; Wb < Xb; ++Wb)
            Vb.add(Ub[Wb]);
        return Vb.size === Xb ? Ub : Array.from(Vb);
    }
    const _Vb = 'undefined' == typeof window ? function(Wb) {
        return Wb();
    } : window.requestAnimationFrame;

    function _Wb(Xb, Yb) {
        let Zb = [],
            $b = !1;
        return function(...Ub) {
            Zb = Ub, $b || ($b = !0, _Vb.call(window, () => {
                $b = !1, Xb.apply(Yb, Zb);
            }));
        };
    }

    function _Xb(Yb, Zb) {
        let $b;
        return function(...Tb) {
            return Zb ? (clearTimeout($b), $b = setTimeout(Yb, Zb, Tb)) : Yb.apply(this, Tb), Zb;
        };
    }
    const _Yb = Zb => 'start' === Zb ? 'left' : 'end' === Zb ? 'right' : 'center',
        _Zb = ($b, ac, bc) => 'start' === $b ? ac : 'end' === $b ? bc : (ac + bc) / 2,
        _$b = (ac, bc, cc, dc) => ac === (dc ? 'left' : 'right') ? cc : 'center' === ac ? (bc + cc) / 2 : bc;

    function _ac(bc, cc, dc) {
        const ec = cc.length;
        let fc = 0,
            gc = ec;
        if (bc._sorted) {
            const {
                iScale: hc,
                _parsed: ic
            } = bc, jc = hc.axis, {
                min: kc,
                max: lc,
                minDefined: mc,
                maxDefined: nc
            } = hc.getUserBounds();
            _n && (fc = _Gb(Math.min(_Kb(_i, hc.axis, _l).lo, dc ? ec : _Kb(cc, _j, hc.getPixelForValue(_l)).lo), 0, ec - 1)), gc = _o ? _Gb(Math.max(_Kb(_i, hc.axis, _m, !0).hi + 1, dc ? 0 : _Kb(cc, _j, hc.getPixelForValue(_m), !0).hi + 1), fc, ec) - fc : ec - fc;
        }
        return {
            start: fc,
            count: gc
        };
    }

    function _jc(kc) {
        const {
            xScale: lc,
            yScale: mc,
            _scaleRanges: nc
        } = kc, oc = {
            xmin: lc.min,
            xmax: lc.max,
            ymin: mc.min,
            ymax: mc.max
        };
        if (!nc)
            return kc._scaleRanges = oc, !0;
        const pc = nc.xmin !== lc.min || nc.xmax !== lc.max || nc.ymin !== mc.min || nc.ymax !== mc.max;
        return Object.assign(nc, oc), _g;
    }
    const pc = qc => 0 === qc || 1 === qc,
        qc = (rc, sc, tc) => -Math.pow(2, 10 * (rc -= 1)) * Math.sin((rc - sc) * _U / tc),
        rc = (sc, tc, uc) => Math.pow(2, -10 * sc) * Math.sin((sc - tc) * _U / uc) + 1,
        _sc = {
            linear: tc => tc,
            easeInQuad: tc => tc * tc,
            easeOutQuad: tc => -tc * (tc - 2),
            easeInOutQuad: tc => (tc /= 0.5) < 1 ? 0.5 * tc * tc : -0.5 * (--tc * (tc - 2) - 1),
            easeInCubic: tc => tc * tc * tc,
            easeOutCubic: tc => (tc -= 1) * tc * tc + 1,
            easeInOutCubic: tc => (tc /= 0.5) < 1 ? 0.5 * tc * tc * tc : 0.5 * ((tc -= 2) * tc * tc + 2),
            easeInQuart: tc => tc * tc * tc * tc,
            easeOutQuart: tc => -((tc -= 1) * tc * tc * tc - 1),
            easeInOutQuart: tc => (tc /= 0.5) < 1 ? 0.5 * tc * tc * tc * tc : -0.5 * ((tc -= 2) * tc * tc * tc - 2),
            easeInQuint: tc => tc * tc * tc * tc * tc,
            easeOutQuint: tc => (tc -= 1) * tc * tc * tc * tc + 1,
            easeInOutQuint: tc => (tc /= 0.5) < 1 ? 0.5 * tc * tc * tc * tc * tc : 0.5 * ((tc -= 2) * tc * tc * tc * tc + 2),
            easeInSine: tc => 1 - Math.cos(tc * _Y),
            easeOutSine: tc => Math.sin(tc * _Y),
            easeInOutSine: tc => -0.5 * (Math.cos(_T * tc) - 1),
            easeInExpo: tc => 0 === tc ? 0 : Math.pow(2, 10 * (tc - 1)),
            easeOutExpo: tc => 1 === tc ? 1 : 1 - Math.pow(2, -10 * tc),
            easeInOutExpo: tc => pc(tc) ? tc : tc < 0.5 ? 0.5 * Math.pow(2, 10 * (2 * tc - 1)) : 0.5 * (2 - Math.pow(2, -10 * (2 * tc - 1))),
            easeInCirc: tc => tc >= 1 ? tc : -(Math.sqrt(1 - tc * tc) - 1),
            easeOutCirc: tc => Math.sqrt(1 - (tc -= 1) * tc),
            easeInOutCirc: tc => (tc /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - tc * tc) - 1) : 0.5 * (Math.sqrt(1 - (tc -= 2) * tc) + 1),
            easeInElastic: tc => pc(tc) ? tc : qc(tc, 0.075, 0.3),
            easeOutElastic: tc => pc(tc) ? tc : rc(tc, 0.075, 0.3),
            easeInOutElastic(tc) {
                const uc = 0.1125;
                return pc(tc) ? tc : tc < 0.5 ? 0.5 * qc(2 * tc, uc, 0.45) : 0.5 + 0.5 * rc(2 * tc - 1, uc, 0.45);
            },
            easeInBack(tc) {
                const uc = 1.70158;
                return tc * tc * ((uc + 1) * tc - uc);
            },
            easeOutBack(tc) {
                const uc = 1.70158;
                return (tc -= 1) * tc * ((uc + 1) * tc + uc) + 1;
            },
            easeInOutBack(tc) {
                let uc = 1.70158;
                return (tc /= 0.5) < 1 ? tc * tc * ((1 + (uc *= 1.525)) * tc - uc) * 0.5 : 0.5 * ((tc -= 2) * tc * ((1 + (uc *= 1.525)) * tc + uc) + 2);
            },
            easeInBounce: tc => 1 - _sc.easeOutBounce(1 - tc),
            easeOutBounce(tc) {
                const uc = 7.5625,
                    vc = 2.75;
                return tc < 1 / vc ? uc * tc * tc : tc < 2 / vc ? uc * (tc -= 1.5 / vc) * tc + 0.75 : tc < 2.5 / vc ? uc * (tc -= 2.25 / vc) * tc + 0.9375 : uc * (tc -= 2.625 / vc) * tc + 0.984375;
            },
            easeInOutBounce: tc => tc < 0.5 ? 0.5 * _sc.easeInBounce(2 * tc) : 0.5 * _sc.easeOutBounce(2 * tc - 1) + 0.5
        };

    function tc(uc) {
        if (uc && 'object' == typeof uc) {
            const vc = uc.toString();
            return '[object CanvasPattern]' === vc || '[object CanvasGradient]' === vc;
        }
        return !1;
    }

    function _vc(wc) {
        return tc(wc) ? wc : new(0, oc.Color)(wc);
    }

    function wc(xc) {
        return tc(xc) ? xc : new(0, oc.Color)(xc).saturate(0.5).darken(0.1).hexString();
    }
    const xc = [
            'x',
            'y',
            'borderWidth',
            'radius',
            'tension'
        ],
        yc = [
            'color',
            'borderColor',
            'backgroundColor'
        ];
    const zc = new Map();

    function _Ac(Bc, Cc, Dc) {
        return function(Ec, Fc) {
            Fc = Fc || {};
            const Gc = Ec + JSON.stringify(Fc);
            let Hc = zc.get(Gc);
            return Hc || (Hc = new Intl.NumberFormat(Ec, Fc), zc.set(Gc, Hc)), Hc;
        }(Cc, Dc).format(Bc);
    }
    const Bc = {
        values: Cc => _j(Cc) ? Cc : '' + Cc,
        numeric(Cc, Dc, Ec) {
            if (0 === Cc)
                return '0';
            const Fc = this.chart.options.locale;
            let Gc, Hc = Cc;
            if (Ec.length > 1) {
                const Ic = Math.max(Math.abs(Ec[0].value), Math.abs(Ec[Ec.length - 1].value));
                (Ic < 0.0001 || Ic > 1000000000000000) && (Gc = 'scientific'), Hc = function(Jc, Kc) {
                    let Lc = Kc.length > 3 ? Kc[2].value - Kc[1].value : Kc[1].value - Kc[0].value;
                    Math.abs(Lc) >= 1 && Jc !== Math.floor(Jc) && (Lc = Jc - Math.floor(Jc));
                    return Lc;
                }(Cc, Ec);
            }
            const Jc = _ab(Math.abs(Hc)),
                Kc = Math.max(Math.min(-1 * Math.floor(Jc), 20), 0),
                Lc = {
                    notation: Gc,
                    minimumFractionDigits: Kc,
                    maximumFractionDigits: Kc
                };
            return Object.assign(Lc, this.options.ticks.format), _Ac(Cc, Fc, Lc);
        },
        logarithmic(Cc, Dc, Ec) {
            if (0 === Cc)
                return '0';
            const Fc = Ec[Dc].significand || Cc / Math.pow(10, Math.floor(_ab(Cc)));
            return [
                1,
                2,
                3,
                5,
                10,
                15
            ].includes(Fc) || Dc > 0.8 * Ec.length ? Bc.numeric.call(this, Cc, Dc, Ec) : '';
        }
    };
    var _Cc = {
        formatters: Bc
    };
    const _Dc = Object.create(null),
        _Ec = Object.create(null);

    function Fc(Gc, Hc) {
        if (!Hc)
            return Gc;
        const Ic = Hc.split('.');
        for (let Jc = 0, Kc = Ic.length; Jc < Kc; ++Jc) {
            const Lc = Ic[Jc];
            Gc = Gc[Kc] || (Gc[Kc] = Object.create(null));
        }
        return Gc;
    }

    function Ic(Jc, Kc, Lc) {
        return 'string' == typeof Kc ? _C(Fc(Jc, Kc), Lc) : _C(Fc(Jc, ''), Kc);
    }
    class Jc {
        set(Kc, Lc) {
            return Ic(this, Kc, Lc);
        }
        get(Kc) {
            return Fc(this, Kc);
        }
        describe(Kc, Lc) {
            return Ic(_Ec, Kc, Lc);
        }
        override(Kc, Lc) {
            return Ic(_Dc, Kc, Lc);
        }
        route(Kc, Lc, Mc, Nc) {
            const Oc = Fc(this, Kc),
                Pc = Fc(this, Mc),
                Qc = '_' + Lc;
            Object.defineProperties(Oc, {
                [Qc]: {
                    value: Oc[Lc],
                    writable: !0
                },
                [Lc]: {
                    enumerable: !0,
                    get() {
                        const Rc = this[Qc],
                            Sc = Pc[Nc];
                        return _l(Rc) ? Object.assign({}, Sc, Rc) : _o(Rc, Sc);
                    },
                    set(Rc) {
                        this[Qc] = Rc;
                    }
                }
            });
        }
        apply(Kc) {
            Kc.forEach(Lc => Lc(this));
        }
        constructor(Kc, Lc) {
            this.animation = void 0, this.backgroundColor = 'rgba(0,0,0,0.1)', this.borderColor = 'rgba(0,0,0,0.1)', this.color = '#666', this.datasets = {}, this.devicePixelRatio = Mc => Mc.chart.platform.getDevicePixelRatio(), this.elements = {}, this.events = [
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
            }, this.hover = {}, this.hoverBackgroundColor = (Mc, Nc) => wc(Nc.backgroundColor), this.hoverBorderColor = (Mc, Nc) => wc(Nc.borderColor), this.hoverColor = (Mc, Nc) => wc(Nc.color), this.indexAxis = 'x', this.interaction = {
                mode: 'nearest',
                intersect: !0,
                includeInvisible: !1
            }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.drawActiveElementsOnTop = !0, this.describe(Kc), this.apply(Lc);
        }
    }
    var _Kc = new Jc({
        _scriptable: Lc => !Lc.startsWith('on'),
        _indexable: Lc => 'events' !== Lc,
        hover: {
            _fallback: 'interaction'
        },
        interaction: {
            _scriptable: !1,
            _indexable: !1
        }
    }, [
        function(Lc) {
            Lc.set('animation', {
                delay: void 0,
                duration: 1000,
                easing: 'easeOutQuart',
                fn: void 0,
                from: void 0,
                loop: void 0,
                to: void 0,
                type: void 0
            }), Lc.describe('animation', {
                _fallback: !1,
                _indexable: !1,
                _scriptable: Mc => 'onProgress' !== Mc && 'onComplete' !== Mc && 'fn' !== Mc
            }), Lc.set('animations', {
                colors: {
                    type: 'color',
                    properties: yc
                },
                numbers: {
                    type: 'number',
                    properties: xc
                }
            }), Lc.describe('animations', {
                _fallback: 'animation'
            }), Lc.set('transitions', {
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
                            fn: Mc => 0 | Mc
                        }
                    }
                }
            });
        },
        function(Lc) {
            Lc.set('layout', {
                autoPadding: !0,
                padding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                }
            });
        },
        function(Lc) {
            Lc.set('scale', {
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
                    tickWidth: (Mc, Nc) => Nc.lineWidth,
                    tickColor: (Mc, Nc) => Nc.color,
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
                    callback: _Cc.formatters.values,
                    minor: {},
                    major: {},
                    align: 'center',
                    crossAlign: 'near',
                    showLabelBackdrop: !1,
                    backdropColor: 'rgba(255, 255, 255, 0.75)',
                    backdropPadding: 2
                }
            }), Lc.route('scale.ticks', 'color', '', 'color'), Lc.route('scale.grid', 'color', '', 'borderColor'), Lc.route('scale.border', 'color', '', 'borderColor'), Lc.route('scale.title', 'color', '', 'color'), Lc.describe('scale', {
                _fallback: !1,
                _scriptable: Mc => !Mc.startsWith('before') && !Mc.startsWith('after') && 'callback' !== Mc && 'parser' !== Mc,
                _indexable: Mc => 'borderDash' !== Mc && 'tickBorderDash' !== Mc && 'dash' !== Mc
            }), Lc.describe('scales', {
                _fallback: 'scale'
            }), Lc.describe('scale.ticks', {
                _scriptable: Mc => 'backdropPadding' !== Mc && 'callback' !== Mc,
                _indexable: Mc => 'backdropPadding' !== Mc
            });
        }
    ]);

    function _Lc(Mc, Nc, Oc, Pc, Qc) {
        let Rc = Nc[Qc];
        return Rc || (Rc = Nc[Qc] = Mc.measureText(Qc).width, Oc.push(Qc)), Rc > Pc && (Pc = Rc), Pc;
    }

    function _Mc(Nc, Oc, Pc, Qc) {
        let Rc = (Qc = Qc || {}).data = Qc.data || {},
            Sc = Qc.garbageCollect = Qc.garbageCollect || [];
        Qc.font !== Oc && (Rc = Qc.data = {}, Sc = Qc.garbageCollect = [], Qc.font = Oc), Nc.save(), Nc.font = Oc;
        let Tc = 0;
        const Uc = Pc.length;
        let Vc, Wc, Xc, Yc, Zc;
        for (Vc = 0; Vc < _i; Vc++)
            if (Yc = Pc[Vc], null != Yc && !0 !== _j(Yc))
                Tc = _Lc(Nc, Rc, Sc, Tc, Yc);
            else if (_j(Yc))
            for (Wc = 0, Xc = Yc.length; Wc < Xc; Wc++)
                Zc = Yc[Wc], null == Zc || _j(Zc) || (Tc = _Lc(Nc, Rc, Sc, Tc, Zc));
        Nc.restore();
        const $c = Sc.length / 2;
        if ($c > Pc.length) {
            for (Vc = 0; Vc < $c; Vc++)
                delete Rc[Sc[Vc]];
            Sc.splice(0, $c);
        }
        return Tc;
    }

    function _Pc(Qc, Rc, Sc) {
        const Tc = Qc.currentDevicePixelRatio,
            Uc = 0 !== Sc ? Math.max(Sc / 2, 0.5) : 0;
        return Math.round((Rc - Uc) * Tc) / Tc + Uc;
    }

    function _Sc(Tc, Uc) {
        (Uc = Uc || Tc.getContext('2d')).save(), Uc.resetTransform(), Uc.clearRect(0, 0, Tc.width, Tc.height), Uc.restore();
    }

    function _Tc(Uc, Vc, Wc, Xc) {
        _Uc(Uc, Vc, Wc, Xc, null);
    }

    function _Uc(Vc, Wc, Xc, Yc, Zc) {
        let $c, ad, bd, cd, dd, ed, fd, gd;
        const hd = Wc.pointStyle,
            id = Wc.rotation,
            jd = Wc.radius;
        let kd = (id || 0) * X;
        if (hd && 'object' == typeof hd && ($c = hd.toString(), '[object HTMLImageElement]' === $c || '[object HTMLCanvasElement]' === $c))
            return Vc.save(), Vc.translate(Xc, Yc), Vc.rotate(kd), Vc.drawImage(hd, -hd.width / 2, -hd.height / 2, hd.width, hd.height), void Vc.restore();
        if (!(isNaN(_r) || _r <= 0)) {
            switch (Vc.beginPath(), hd) {
                default:
                    Zc ? Vc.ellipse(Xc, Yc, Zc / 2, _r, 0, 0, _U) : Vc.arc(Xc, Yc, _r, 0, _U), Vc.closePath();
                    break;
                case 'triangle':
                    ed = Zc ? Zc / 2 : _r, Vc.moveTo(Xc + Math.sin(kd) * ed, Yc - Math.cos(kd) * _r), kd += $, Vc.lineTo(Xc + Math.sin(kd) * ed, Yc - Math.cos(kd) * _r), kd += $, Vc.lineTo(Xc + Math.sin(kd) * ed, Yc - Math.cos(kd) * _r), Vc.closePath();
                    break;
                case 'rectRounded':
                    dd = 0.516 * _r, cd = _r - dd, ad = Math.cos(kd + Z) * cd, fd = Math.cos(kd + Z) * (Zc ? Zc / 2 - dd : cd), bd = Math.sin(kd + Z) * cd, gd = Math.sin(kd + Z) * (Zc ? Zc / 2 - dd : cd), Vc.arc(Xc - fd, Yc - bd, dd, kd - _T, kd - _Y), Vc.arc(Xc + gd, Yc - ad, dd, kd - _Y, kd), Vc.arc(Xc + fd, Yc + bd, dd, kd, kd + _Y), Vc.arc(Xc - gd, Yc + ad, dd, kd + _Y, kd + _T), Vc.closePath();
                    break;
                case 'rect':
                    if (!id) {
                        cd = Math.SQRT1_2 * _r, ed = Zc ? Zc / 2 : cd, Vc.rect(Xc - ed, Yc - cd, 2 * ed, 2 * cd);
                        break;
                    }
                    kd += Z;
                case 'rectRot':
                    fd = Math.cos(kd) * (Zc ? Zc / 2 : _r), ad = Math.cos(kd) * _r, bd = Math.sin(kd) * _r, gd = Math.sin(kd) * (Zc ? Zc / 2 : _r), Vc.moveTo(Xc - fd, Yc - bd), Vc.lineTo(Xc + gd, Yc - ad), Vc.lineTo(Xc + fd, Yc + bd), Vc.lineTo(Xc - gd, Yc + ad), Vc.closePath();
                    break;
                case 'crossRot':
                    kd += Z;
                case 'cross':
                    fd = Math.cos(kd) * (Zc ? Zc / 2 : _r), ad = Math.cos(kd) * _r, bd = Math.sin(kd) * _r, gd = Math.sin(kd) * (Zc ? Zc / 2 : _r), Vc.moveTo(Xc - fd, Yc - bd), Vc.lineTo(Xc + fd, Yc + bd), Vc.moveTo(Xc + gd, Yc - ad), Vc.lineTo(Xc - gd, Yc + ad);
                    break;
                case 'star':
                    fd = Math.cos(kd) * (Zc ? Zc / 2 : _r), ad = Math.cos(kd) * _r, bd = Math.sin(kd) * _r, gd = Math.sin(kd) * (Zc ? Zc / 2 : _r), Vc.moveTo(Xc - fd, Yc - bd), Vc.lineTo(Xc + fd, Yc + bd), Vc.moveTo(Xc + gd, Yc - ad), Vc.lineTo(Xc - gd, Yc + ad), kd += Z, fd = Math.cos(kd) * (Zc ? Zc / 2 : _r), ad = Math.cos(kd) * _r, bd = Math.sin(kd) * _r, gd = Math.sin(kd) * (Zc ? Zc / 2 : _r), Vc.moveTo(Xc - fd, Yc - bd), Vc.lineTo(Xc + fd, Yc + bd), Vc.moveTo(Xc + gd, Yc - ad), Vc.lineTo(Xc - gd, Yc + ad);
                    break;
                case 'line':
                    ad = Zc ? Zc / 2 : Math.cos(kd) * _r, bd = Math.sin(kd) * _r, Vc.moveTo(Xc - ad, Yc - bd), Vc.lineTo(Xc + ad, Yc + bd);
                    break;
                case 'dash':
                    Vc.moveTo(Xc, Yc), Vc.lineTo(Xc + Math.cos(kd) * (Zc ? Zc / 2 : _r), Yc + Math.sin(kd) * _r);
                    break;
                case !1:
                    Vc.closePath();
            }
            Vc.fill(), Wc.borderWidth > 0 && Vc.stroke();
        }
    }

    function _Yc(Zc, $c, ad) {
        return ad = ad || 0.5, !$c || Zc && Zc.x > $c.left - ad && Zc.x < $c.right + ad && Zc.y > $c.top - ad && Zc.y < $c.bottom + ad;
    }

    function _Zc($c, ad) {
        $c.save(), $c.beginPath(), $c.rect(ad.left, ad.top, ad.right - ad.left, ad.bottom - ad.top), $c.clip();
    }

    function _$c(ad) {
        ad.restore();
    }

    function _ad(bd, cd, dd, ed, fd) {
        if (!cd)
            return bd.lineTo(dd.x, dd.y);
        if ('middle' === fd) {
            const gd = (cd.x + dd.x) / 2;
            bd.lineTo(ed, cd.y), bd.lineTo(ed, dd.y);
        } else
            'after' === fd != !!ed ? bd.lineTo(cd.x, dd.y) : bd.lineTo(dd.x, cd.y);
        bd.lineTo(dd.x, dd.y);
    }

    function _cd(dd, ed, fd, gd) {
        if (!ed)
            return dd.lineTo(fd.x, fd.y);
        dd.bezierCurveTo(gd ? ed.cp1x : ed.cp2x, gd ? ed.cp1y : ed.cp2y, gd ? fd.cp2x : fd.cp1x, gd ? fd.cp2y : fd.cp1y, fd.x, fd.y);
    }

    function _dd(ed, fd, gd, hd, id, jd = {}) {
        const kd = _j(fd) ? fd : [fd],
            ld = jd.strokeWidth > 0 && '' !== jd.strokeColor;
        let md, nd;
        for (ed.save(), ed.font = id.string, function(od, pd) {
                pd.translation && od.translate(pd.translation[0], pd.translation[1]);
                _i(pd.rotation) || od.rotate(pd.rotation);
                pd.color && (od.fillStyle = pd.color);
                pd.textAlign && (od.textAlign = pd.textAlign);
                pd.textBaseline && (od.textBaseline = pd.textBaseline);
            }(ed, jd), md = 0; md < kd.length; ++md)
            nd = kd[md], jd.backdrop && _nd(ed, jd.backdrop), _l && (jd.strokeColor && (ed.strokeStyle = jd.strokeColor), _i(jd.strokeWidth) || (ed.lineWidth = jd.strokeWidth), ed.strokeText(nd, gd, hd, jd.maxWidth)), ed.fillText(nd, gd, hd, jd.maxWidth), _gd(ed, gd, hd, nd, jd), hd += id.lineHeight;
        ed.restore();
    }

    function _gd(hd, id, jd, kd, ld) {
        if (ld.strikethrough || ld.underline) {
            const md = hd.measureText(kd),
                nd = id - _g.actualBoundingBoxLeft,
                od = id + _g.actualBoundingBoxRight,
                pd = jd - _g.actualBoundingBoxAscent,
                qd = jd + _g.actualBoundingBoxDescent,
                rd = ld.strikethrough ? (_j + _l) / 2 : _l;
            hd.strokeStyle = hd.fillStyle, hd.beginPath(), hd.lineWidth = ld.decorationWidth || 2, hd.moveTo(nd, _m), hd.lineTo(_i, _m), hd.stroke();
        }
    }

    function _nd(od, pd) {
        const qd = od.fillStyle;
        od.fillStyle = pd.color, od.fillRect(pd.left, pd.top, pd.width, pd.height), od.fillStyle = qd;
    }

    function _pd(qd, rd) {
        const {
            x: sd,
            y: td,
            w: ud,
            h: vd,
            radius: wd
        } = rd;
        qd.arc(sd + wd.topLeft, td + wd.topLeft, wd.topLeft, -_Y, _T, !0), qd.lineTo(sd, td + _g - wd.bottomLeft), qd.arc(sd + wd.bottomLeft, td + _g - wd.bottomLeft, wd.bottomLeft, _T, _Y, !0), qd.lineTo(sd + ud - wd.bottomRight, td + _g), qd.arc(sd + ud - wd.bottomRight, td + _g - wd.bottomRight, wd.bottomRight, _Y, 0, !0), qd.lineTo(sd + ud, td + wd.topRight), qd.arc(sd + ud - wd.topRight, td + wd.topRight, wd.topRight, 0, -_Y, !0), qd.lineTo(sd + wd.topLeft, td);
    }
    const vd = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
        wd = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;

    function xd(yd, zd) {
        const Ad = ('' + yd).match(vd);
        if (!Ad || 'normal' === Ad[1])
            return 1.2 * zd;
        switch (yd = +Ad[2], Ad[3]) {
            case 'px':
                return yd;
            case '%':
                yd /= 100;
        }
        return zd * yd;
    }

    function _zd(Ad, Bd) {
        const Cd = {},
            Dd = _l(Bd),
            Ed = Dd ? Object.keys(Bd) : Bd,
            Fd = _l(Ad) ? Dd ? Gd => _o(Ad[Gd], Ad[Bd[Gd]]) : Gd => Ad[Gd] : () => Ad;
        for (const Gd of Ed)
            Cd[Ad] = +_g(Ad) || 0;
        return Cd;
    }

    function _Fd(Gd) {
        return _zd(Gd, {
            top: 'y',
            right: 'x',
            bottom: 'y',
            left: 'x'
        });
    }

    function _Gd(Hd) {
        return _zd(Hd, [
            'topLeft',
            'topRight',
            'bottomLeft',
            'bottomRight'
        ]);
    }

    function _Hd(Id) {
        const Jd = _Fd(Id);
        return Jd.width = Jd.left + Jd.right, Jd.height = Jd.top + Jd.bottom, Jd;
    }

    function _Jd(Kd, Ld) {
        Kd = Kd || {}, Ld = Ld || _Kc.font;
        let Md = _o(Kd.size, Ld.size);
        'string' == typeof Md && (Md = parseInt(Md, 10));
        let Nd = _o(Kd.style, Ld.style);
        Nd && !('' + Nd).match(wd) && (console.warn('Invalid font style specified: "' + Nd + '"'), Nd = void 0);
        const Od = {
            family: _o(Kd.family, Ld.family),
            lineHeight: xd(_o(Kd.lineHeight, Ld.lineHeight), Md),
            size: Md,
            style: Nd,
            weight: _o(Kd.weight, Ld.weight),
            string: ''
        };
        return Od.string = function(Pd) {
            return !Pd || _i(Pd.size) || _i(Pd.family) ? null : (Pd.style ? Pd.style + ' ' : '') + (Pd.weight ? Pd.weight + ' ' : '') + Pd.size + 'px ' + Pd.family;
        }(Od), Od;
    }

    function _Ld(Md, Nd, Od, Pd) {
        let Qd, Rd, Sd, Td = !0;
        for (Qd = 0, Rd = Md.length; Qd < Rd; ++Qd)
            if (Sd = Md[Qd], void 0 !== Sd && (void 0 !== Nd && 'function' == typeof Sd && (Sd = Sd(Nd), Td = !1), void 0 !== Od && _j(Sd) && (Sd = Sd[Od % Sd.length], Td = !1), void 0 !== Sd))
                return Pd && !Td && (Pd.cacheable = !1), Sd;
    }

    function _Md(Nd, Od, Pd) {
        const {
            min: Qd,
            max: Rd
        } = Nd, Sd = id(Od, (Rd - Qd) / 2), Td = (Ud, Vd) => Pd && 0 === Ud ? 0 : Ud + Vd;
        return {
            min: Td(Qd, -Math.abs(_g)),
            max: Td(Rd, _g)
        };
    }

    function _Rd(Sd, Td) {
        return Object.assign(Object.create(Sd), Td);
    }

    function _Sd(Td, Ud = [''], Vd = Wd, Xd, Yd = () => Wd[0]) {
        _P(Xd) || (Xd = _me('_fallback', Wd));
        const Zd = {
            [Symbol.toStringTag]: 'Object',
            _cacheable: !0,
            _scopes: Wd,
            _rootScopes: Vd,
            _fallback: Xd,
            _getTarget: Yd,
            override: $d => _Sd([
                $d,
                ...Wd
            ], Ud, Vd, Xd)
        };
        return new Proxy(_g, {
            deleteProperty: ($d, ae) => (delete $d[ae], delete $d._keys, delete Wd[0][ae], !0),
            get: ($d, ae) => _Zd($d, ae, () => function(be, ce, de, ee) {
                let fe;
                for (const ge of ce)
                    if (fe = _me(_Xd(ge, be), de), _P(fe))
                        return _Yd(be, fe) ? _ge(de, ee, be, fe) : fe;
            }(ae, Ud, Wd, $d)),
            getOwnPropertyDescriptor: ($d, ae) => Reflect.getOwnPropertyDescriptor($d._scopes[0], ae),
            getPrototypeOf: () => Reflect.getPrototypeOf(Wd[0]),
            has: ($d, ae) => _pe($d).includes(ae),
            ownKeys: $d => _pe($d),
            set($d, ae, be) {
                const ce = $d._storage || ($d._storage = Yd());
                return $d[ae] = ce[ae] = be, delete $d._keys, !0;
            }
        });
    }

    function _Ud(Vd, Wd, Xd, Yd) {
        const Zd = {
            _cacheable: !1,
            _proxy: Vd,
            _context: Wd,
            _subProxy: Xd,
            _stack: new Set(),
            _descriptors: _Wd(Vd, Yd),
            setContext: $d => _Ud(Vd, $d, Xd, Yd),
            override: $d => _Ud(Vd.override($d), Wd, Xd, Yd)
        };
        return new Proxy(Zd, {
            deleteProperty: ($d, ae) => (delete $d[ae], delete Vd[ae], !0),
            get: ($d, ae, be) => _Zd($d, ae, () => function(ce, de, ee) {
                const {
                    _proxy: fe,
                    _context: ge,
                    _subProxy: he,
                    _descriptors: ie
                } = ce;
                let je = fe[de];
                _Q(je) && ie.isScriptable(de) && (je = function(ke, le, me, ne) {
                    const {
                        _proxy: oe,
                        _context: pe,
                        _subProxy: qe,
                        _stack: re
                    } = me;
                    if (re.has(ke))
                        throw new Error('Recursion detected: ' + Array.from(re).join('->') + '->' + ke);
                    re.add(ke), le = le(pe, qe || ne), re.delete(ke), _Yd(ke, le) && (le = _ge(oe._scopes, oe, ke, le));
                    return le;
                }(de, je, ce, ee));
                _j(je) && je.length && (je = function(ke, le, me, ne) {
                    const {
                        _proxy: oe,
                        _context: pe,
                        _subProxy: qe,
                        _descriptors: re
                    } = me;
                    if (_P(pe.index) && ne(ke))
                        le = le[pe.index % le.length];
                    else if (_l(le[0])) {
                        const se = le,
                            te = oe._scopes.filter(ue => ue !== se);
                        le = [];
                        for (const ue of se) {
                            const ve = _ge(te, oe, ke, ue);
                            le.push(_Ud(ve, pe, qe && qe[ke], re));
                        }
                    }
                    return le;
                }(de, je, ce, ie.isIndexable));
                _Yd(de, je) && (je = _Ud(je, ge, he && he[de], ie));
                return je;
            }($d, ae, be)),
            getOwnPropertyDescriptor: ($d, ae) => $d._descriptors.allKeys ? Reflect.has(Vd, ae) ? {
                enumerable: !0,
                configurable: !0
            } : void 0 : Reflect.getOwnPropertyDescriptor(Vd, ae),
            getPrototypeOf: () => Reflect.getPrototypeOf(Vd),
            has: ($d, ae) => Reflect.has(Vd, ae),
            ownKeys: () => Reflect.ownKeys(Vd),
            set: ($d, ae, be) => (Vd[ae] = be, delete $d[ae], !0)
        });
    }

    function _Wd(Xd, Yd = {
        scriptable: !0,
        indexable: !0
    }) {
        const {
            _scriptable: Zd = Yd.scriptable,
            _indexable: $d = Yd.indexable,
            _allKeys: ae = Yd.allKeys
        } = Xd;
        return {
            allKeys: ae,
            scriptable: Zd,
            indexable: $d,
            isScriptable: _Q(Zd) ? Zd : () => Zd,
            isIndexable: _Q($d) ? $d : () => $d
        };
    }
    const _Xd = (Yd, Zd) => Yd ? Yd + _O(Zd) : Zd,
        _Yd = (Zd, $d) => _l($d) && 'adapters' !== Zd && (null === Object.getPrototypeOf($d) || $d.constructor === Object);

    function _Zd($d, ae, be) {
        if (Object.prototype.hasOwnProperty.call($d, ae))
            return $d[ae];
        const ce = be();
        return $d[ae] = ce, ce;
    }

    function ae(be, ce, de) {
        return _Q(be) ? be(ce, de) : be;
    }
    const be = (ce, de) => !0 === ce ? de : 'string' == typeof ce ? _M(de, ce) : void 0;

    function ce(de, ee, fe, ge, he) {
        for (const ie of ee) {
            const je = be(fe, _g);
            if (ee) {
                de.add(ee);
                const ke = ae(ee._fallback, fe, he);
                if (_P(_g) && _g !== fe && _g !== ge)
                    return _g;
            } else if (!1 === ee && _P(ge) && fe !== ge)
                return null;
        }
        return !1;
    }

    function _ge(he, ie, je, ke) {
        const le = ie._rootScopes,
            me = ae(ie._fallback, je, ke),
            ne = [
                ...he,
                ...le
            ],
            oe = new Set();
        _i.add(ke);
        let pe = _le(_i, ne, je, _g || je, ke);
        return null !== pe && ((!_P(_g) || _g === je || (pe = _le(_i, ne, _g, pe, ke), null !== pe)) && _Sd(Array.from(_i), [''], le, _g, () => function(qe, re, se) {
            const te = qe._getTarget();
            re in te || (te[re] = {});
            const ue = te[re];
            return _j(ue) && _l(se) ? se : ue || {};
        }(ie, je, ke)));
    }

    function _le(me, ne, oe, pe, qe) {
        for (; oe;)
            oe = ce(me, ne, oe, pe, qe);
        return oe;
    }

    function _me(ne, oe) {
        for (const pe of oe) {
            if (!pe)
                continue;
            const qe = pe[ne];
            if (_P(oe))
                return oe;
        }
    }

    function _pe(qe) {
        let re = qe._keys;
        return re || (re = qe._keys = function(se) {
            const te = new Set();
            for (const ue of se)
                for (const ve of Object.keys(ue).filter(we => !we.startsWith('_')))
                    te.add(ve);
            return Array.from(te);
        }(qe._scopes)), re;
    }

    function _qe(re, se, te, ue) {
        const {
            iScale: ve
        } = re, {
            key: we = 'r'
        } = this._parsing, xe = new Array(ue);
        let ye, ze, Ae, Be;
        for (ye = 0, ze = ue; ye < ze; ++ye)
            Ae = ye + te, Be = se[Ae], xe[ye] = {
                r: ve.parse(_M(Be, we), Ae)
            };
        return xe;
    }
    const te = Number.EPSILON || 1e-14,
        ue = (ve, we) => we < ve.length && !ve[we].skip && ve[we],
        ve = we => 'x' === we ? 'y' : 'x';

    function we(xe, ye, ze, Ae) {
        const Be = xe.skip ? ye : xe,
            Ce = ye,
            De = ze.skip ? ye : ze,
            Ee = _vb(_g, Be),
            Fe = _vb(De, _g);
        let Ge = _i / (_i + _j),
            He = _j / (_i + _j);
        Ge = isNaN(Ge) ? 0 : Ge, He = isNaN(He) ? 0 : He;
        const Ie = Ae * Ge,
            Je = Ae * He;
        return {
            previous: {
                x: _g.x - _n * (De.x - Be.x),
                y: _g.y - _n * (De.y - Be.y)
            },
            next: {
                x: _g.x + _o * (De.x - Be.x),
                y: _g.y + _o * (De.y - Be.y)
            }
        };
    }

    function Ee(Fe, Ge = 'x') {
        const He = ve(Ge),
            Ie = Fe.length,
            Je = Array(Ie).fill(0),
            Ke = Array(Ie);
        let Le, Me, Ne, Oe = ue(Fe, 0);
        for (Le = 0; Le < Ie; ++Le)
            if (Me = Ne, Ne = Oe, Oe = ue(Fe, Le + 1), Ne) {
                if (Oe) {
                    const Pe = Oe[Ge] - Ne[Ge];
                    Je[Le] = 0 !== Fe ? (Oe[He] - Ne[He]) / Fe : 0;
                }
                _g[Le] = Me ? Oe ? _bb(Je[Le - 1]) !== _bb(Je[Le]) ? 0 : (Je[Le - 1] + Je[Le]) / 2 : Je[Le - 1] : Je[Le];
            }!
        function(Qe, Re, Se) {
            const Te = Qe.length;
            let Ue, Ve, We, Xe, Ye, Ze = ue(Qe, 0);
            for (let $e = 0; $e < Te - 1; ++$e)
                Ye = Ze, Ze = ue(Qe, $e + 1), Ye && Ze && (_cb(Re[$e], 0, te) ? Se[$e] = Se[$e + 1] = 0 : (Ue = Se[$e] / Re[$e], Ve = Se[$e + 1] / Re[$e], Xe = Math.pow(Ue, 2) + Math.pow(Ve, 2), Xe <= 9 || (We = 3 / Math.sqrt(Xe), Se[$e] = Ue * We * Re[$e], Se[$e + 1] = Ve * We * Re[$e])));
        }(Fe, Je, _g),
        function(Qe, Re, Se = 'x') {
            const Te = ve(Se),
                Ue = Qe.length;
            let Ve, We, Xe, Ye = ue(Qe, 0);
            for (let Ze = 0; Ze < Ue; ++Ze) {
                if (We = Xe, Xe = Ye, Ye = ue(Qe, Ze + 1), !Xe)
                    continue;
                const $e = Xe[Se],
                    af = Xe[Te];
                We && (Ve = ($e - We[Se]) / 3, Xe[`cp1${ Se }`] = $e - Ve, Xe[`cp1${ Te }`] = af - Ve * Re[Ze]), Ye && (Ve = (Ye[Se] - $e) / 3, Xe[`cp2${ Se }`] = $e + Ve, Xe[`cp2${ Te }`] = af + Ve * Re[Ze]);
            }
        }(Fe, _g, Ge);
    }

    function Ke(Le, Me, Ne) {
        return Math.max(Math.min(Le, Ne), Me);
    }

    function _Le(Me, Ne, Oe, Pe, Qe) {
        let Re, Se, Te, Ue;
        if (Ne.spanGaps && (Me = Me.filter(Ve => !Ve.skip)), 'monotone' === Ne.cubicInterpolationMode)
            Ee(Me, Qe);
        else {
            let Ve = Pe ? Me[Me.length - 1] : Me[0];
            for (Re = 0, Se = Me.length; Re < Se; ++Re)
                Te = Me[Re], Ue = we(Ve, Te, Me[Math.min(Re + 1, Se - (Pe ? 0 : 1)) % Se], Ne.tension), Te.cp1x = Ue.previous.x, Te.cp1y = Ue.previous.y, Te.cp2x = Ue.next.x, Te.cp2y = Ue.next.y, Ve = Te;
        }
        Ne.capBezierPoints && function(Ve, We) {
            let Xe, Ye, Ze, $e, af, bf = _Yc(Ve[0], We);
            for (Xe = 0, Ye = Ve.length; Xe < Ye; ++Xe)
                af = $e, $e = bf, bf = Xe < Ye - 1 && _Yc(Ve[Xe + 1], We), $e && (Ze = Ve[Xe], af && (Ze.cp1x = Ke(Ze.cp1x, We.left, We.right), Ze.cp1y = Ke(Ze.cp1y, We.top, We.bottom)), bf && (Ze.cp2x = Ke(Ze.cp2x, We.left, We.right), Ze.cp2y = Ke(Ze.cp2y, We.top, We.bottom)));
        }(Me, Oe);
    }

    function _Me() {
        return 'undefined' != typeof window && 'undefined' != typeof document;
    }

    function _Ne(Oe) {
        let Pe = Oe.parentNode;
        return Pe && '[object ShadowRoot]' === Pe.toString() && (Pe = Pe.host), Pe;
    }

    function Oe(Pe, Qe, Re) {
        let Se;
        return 'string' == typeof Pe ? (Se = parseInt(Pe, 10), -1 !== Pe.indexOf('%') && (Se = Se / 100 * Qe.parentNode[Re])) : Se = Pe, Se;
    }
    const Pe = Qe => Qe.ownerDocument.defaultView.getComputedStyle(Qe, null);
    const Qe = [
        'top',
        'right',
        'bottom',
        'left'
    ];

    function Re(Se, Te, Ue) {
        const Ve = {};
        Ue = Ue ? '-' + Ue : '';
        for (let We = 0; We < 4; We++) {
            const Xe = Qe[We];
            Ve[_g] = parseFloat(Se[Te + '-' + _g + Ue]) || 0;
        }
        return Ve.width = Ve.left + Ve.right, Ve.height = Ve.top + Ve.bottom, Ve;
    }

    function _Ue(Ve, We) {
        if ('native' in Ve)
            return Ve;
        const {
            canvas: Xe,
            currentDevicePixelRatio: Ye
        } = We, Ze = Pe(Xe), $e = 'border-box' === Ze.boxSizing, af = Re(Ze, 'padding'), bf = Re(Ze, 'border', 'width'), {
            x: cf,
            y: df,
            box: ef
        } = function(ff, gf) {
            const hf = ff.touches,
                jf = hf && hf.length ? hf[0] : ff,
                {
                    offsetX: kf,
                    offsetY: lf
                } = jf;
            let mf, nf, pf = !1;
            if (((qf, rf, sf) => (qf > 0 || rf > 0) && (!sf || !sf.shadowRoot))(kf, lf, ff.target))
                mf = kf, nf = lf;
            else {
                const qf = gf.getBoundingClientRect();
                mf = jf.clientX - qf.left, nf = jf.clientY - qf.top, pf = !0;
            }
            return {
                x: mf,
                y: nf,
                box: pf
            };
        }(Ve, Xe), ff = af.left + (_m && _i.left), gf = af.top + (_m && _i.top);
        let {
            width: hf,
            height: jf
        } = We;
        return _g && (hf -= af.width + _i.width, jf -= af.height + _i.height), {
            x: Math.round((_j - _n) / hf * Xe.width / Ye),
            y: Math.round((_l - _o) / jf * Xe.height / Ye)
        };
    }
    const ff = gf => Math.round(10 * gf) / 10;

    function _gf(hf, jf, kf, lf) {
        const mf = Pe(hf),
            nf = Re(mf, 'margin'),
            pf = Oe(mf.maxWidth, hf, 'clientWidth') || W,
            qf = Oe(mf.maxHeight, hf, 'clientHeight') || W,
            rf = function(sf, tf, uf) {
                let vf, wf;
                if (void 0 === tf || void 0 === uf) {
                    const xf = _Ne(sf);
                    if (xf) {
                        const yf = xf.getBoundingClientRect(),
                            zf = Pe(xf),
                            Af = Re(zf, 'border', 'width'),
                            Bf = Re(zf, 'padding');
                        tf = yf.width - Bf.width - Af.width, uf = yf.height - Bf.height - Af.height, vf = Oe(zf.maxWidth, xf, 'clientWidth'), wf = Oe(zf.maxHeight, xf, 'clientHeight');
                    } else
                        tf = yf.clientWidth, uf = yf.clientHeight;
                }
                return {
                    width: tf,
                    height: uf,
                    maxWidth: vf || W,
                    maxHeight: wf || W
                };
            }(hf, jf, kf);
        let {
            width: sf,
            height: tf
        } = _j;
        if ('content-box' === mf.boxSizing) {
            const uf = Re(mf, 'border', 'width'),
                vf = Re(mf, 'padding');
            sf -= jf.width + hf.width, tf -= jf.height + hf.height;
        }
        sf = Math.max(0, sf - _g.width), tf = Math.max(0, lf ? sf / lf : tf - _g.height), sf = ff(Math.min(sf, pf, _j.maxWidth)), tf = ff(Math.min(tf, _i, _j.maxHeight)), sf && !tf && (tf = ff(sf / 2));
        return (void 0 !== jf || void 0 !== kf) && lf && _j.height && tf > _j.height && (tf = _j.height, sf = ff(Math.floor(tf * lf))), {
            width: sf,
            height: tf
        };
    }

    function _qf(rf, sf, tf) {
        const uf = sf || 1,
            vf = Math.floor(rf.height * uf),
            wf = Math.floor(rf.width * uf);
        rf.height = Math.floor(rf.height), rf.width = Math.floor(rf.width);
        const xf = rf.canvas;
        return xf.style && (tf || !xf.style.height && !xf.style.width) && (xf.style.height = `${ rf.height }px`, xf.style.width = `${ rf.width }px`), (rf.currentDevicePixelRatio !== uf || xf.height !== vf || xf.width !== _g) && (rf.currentDevicePixelRatio = uf, xf.height = vf, xf.width = _g, rf.ctx.setTransform(uf, 0, 0, uf, 0, 0), !0);
    }
    const _vf = function() {
        let wf = !1;
        try {
            const xf = {
                get passive() {
                    return wf = !0, !1;
                }
            };
            window.addEventListener('test', null, xf), window.removeEventListener('test', null, xf);
        } catch (wf) {}
        return wf;
    }();

    function _wf(xf, yf) {
        const zf = function(Af, Bf) {
                return Pe(Af).getPropertyValue(Bf);
            }(xf, yf),
            Af = zf && zf.match(/^(\d+)(\.\d+)?px$/);
        return Af ? +Af[1] : void 0;
    }

    function _zf(Af, Bf, Cf, Df) {
        return {
            x: Af.x + Cf * (Bf.x - Af.x),
            y: Af.y + Cf * (Bf.y - Af.y)
        };
    }

    function _Af(Bf, Cf, Df, Ef) {
        return {
            x: Bf.x + Df * (Cf.x - Bf.x),
            y: 'middle' === Ef ? Df < 0.5 ? Bf.y : Cf.y : 'after' === Ef ? Df < 1 ? Bf.y : Cf.y : Df > 0 ? Cf.y : Bf.y
        };
    }

    function _Bf(Cf, Df, Ef, Ff) {
        const Gf = {
                x: Cf.cp2x,
                y: Cf.cp2y
            },
            Hf = {
                x: Df.cp1x,
                y: Df.cp1y
            },
            If = _zf(Cf, Gf, Ef),
            Jf = _zf(Gf, _g, Ef),
            Kf = _zf(_g, Df, Ef),
            Lf = _zf(If, _i, Ef),
            Mf = _zf(_i, _j, Ef);
        return _zf(_l, _m, Ef);
    }

    function _Jf(Kf, Lf, Mf) {
        return Kf ? function(Nf, Of) {
            return {
                x: Pf => Nf + Nf + Of - Pf,
                setWidth(Pf) {
                    Of = Pf;
                },
                textAlign: Pf => 'center' === Pf ? Pf : 'right' === Pf ? 'left' : 'right',
                xPlus: (Pf, Qf) => Pf - Qf,
                leftForLtr: (Pf, Qf) => Pf - Qf
            };
        }(Lf, Mf) : {
            x: Nf => Nf,
            setWidth(Nf) {},
            textAlign: Nf => Nf,
            xPlus: (Nf, Of) => Nf + Of,
            leftForLtr: (Nf, Of) => Nf
        };
    }

    function _Kf(Lf, Mf) {
        let Nf, Of;
        'ltr' !== Mf && 'rtl' !== Mf || (Nf = Lf.canvas.style, Of = [
            Nf.getPropertyValue('direction'),
            Nf.getPropertyPriority('direction')
        ], Nf.setProperty('direction', Mf, 'important'), Lf.prevTextDirection = Of);
    }

    function _Lf(Mf, Nf) {
        void 0 !== Nf && (delete Mf.prevTextDirection, Mf.canvas.style.setProperty('direction', Nf[0], Nf[1]));
    }

    function Mf(Nf) {
        return 'angle' === Nf ? {
            between: _yb,
            compare: wb,
            normalize: _xb
        } : {
            between: _Ib,
            compare: (Of, Pf) => Of - Pf,
            normalize: Of => Of
        };
    }

    function Nf({
        start: Of,
        end: Pf,
        count: Qf,
        loop: Rf,
        style: Sf
    }) {
        return {
            start: Of % Qf,
            end: Pf % Qf,
            loop: Rf && (Pf - Of + 1) % Qf == 0,
            style: Sf
        };
    }

    function _Of(Pf, Qf, Rf) {
        if (!Rf)
            return [Pf];
        const {
            property: Sf,
            start: Tf,
            end: Uf
        } = Rf, Vf = Qf.length, {
            compare: Wf,
            between: Xf,
            normalize: Yf
        } = Mf(Sf), {
            start: Zf,
            end: $f,
            loop: ag,
            style: bg
        } = function(cg, dg, eg) {
            const {
                property: fg,
                start: gg,
                end: hg
            } = eg, {
                between: ig,
                normalize: jg
            } = Mf(fg), kg = dg.length;
            let lg, mg, {
                start: ng,
                end: og,
                loop: pg
            } = cg;
            if (pg) {
                for (ng += kg, og += kg, lg = 0, mg = kg; lg < mg && ig(jg(dg[ng % kg][fg]), gg, hg); ++lg)
                    ng--, og--;
                ng %= kg, og %= kg;
            }
            return og < ng && (og += kg), {
                start: ng,
                end: og,
                loop: pg,
                style: cg.style
            };
        }(Pf, Qf, Rf), cg = [];
        let dg, eg, fg, gg = !1,
            hg = null;
        const ig = () => gg || _j(Tf, fg, dg) && 0 !== _i(Tf, fg),
            jg = () => !gg || 0 === _i(_g, dg) || _j(_g, fg, dg);
        for (let kg = _m, lg = _m; kg <= _n; ++kg)
            eg = Qf[kg % Vf], eg.skip || (dg = _l(eg[Sf]), dg !== fg && (gg = _j(dg, Tf, _g), null === hg && z() && (hg = 0 === _i(dg, Tf) ? kg : lg), null !== hg && _C() && (cg.push(Nf({
                start: hg,
                end: kg,
                loop: _o,
                count: Vf,
                style: bg
            })), hg = null), lg = kg, fg = dg));
        return null !== hg && cg.push(Nf({
            start: hg,
            end: _n,
            loop: _o,
            count: Vf,
            style: bg
        })), cg;
    }

    function _cg(dg, eg) {
        const fg = [],
            gg = dg.segments;
        for (let hg = 0; hg < gg.length; hg++) {
            const ig = _Of(gg[hg], dg.points, eg);
            _g.length && fg.push(..._g);
        }
        return fg;
    }

    function _gg(hg, ig) {
        const jg = hg.points,
            kg = hg.options.spanGaps,
            lg = jg.length;
        if (!lg)
            return [];
        const mg = !!hg._loop,
            {
                start: ng,
                end: og
            } = function(pg, qg, rg, sg) {
                let tg = 0,
                    ug = qg - 1;
                if (rg && !sg)
                    for (; tg < qg && !pg[tg].skip;)
                        tg++;
                for (; tg < qg && pg[tg].skip;)
                    tg++;
                for (tg %= qg, rg && (ug += tg); ug > tg && pg[ug % qg].skip;)
                    ug--;
                return ug %= qg, {
                    start: tg,
                    end: ug
                };
            }(jg, lg, _g, kg);
        if (!0 === kg)
            return _ng(hg, [{
                start: ng,
                end: _i,
                loop: _g
            }], jg, ig);
        return _ng(hg, function(pg, qg, rg, sg) {
            const tg = pg.length,
                ug = [];
            let vg, wg = qg,
                xg = pg[qg];
            for (vg = qg + 1; vg <= rg; ++vg) {
                const yg = pg[vg % tg];
                yg.skip || yg.stop ? xg.skip || (sg = !1, ug.push({
                    start: qg % tg,
                    end: (vg - 1) % tg,
                    loop: sg
                }), qg = wg = yg.stop ? vg : null) : (wg = vg, xg.skip && (qg = vg)), xg = yg;
            }
            return null !== wg && ug.push({
                start: qg % tg,
                end: wg % tg,
                loop: sg
            }), ug;
        }(jg, ng, _i < ng ? _i + lg : _i, !!hg._fullLoop && 0 === ng && _i === lg - 1), jg, ig);
    }

    function _ng(og, pg, qg, rg) {
        return rg && rg.setContext && qg ? function(sg, tg, ug, vg) {
            const wg = sg._chart.getContext(),
                xg = _og(sg.options),
                {
                    _datasetIndex: yg,
                    options: {
                        spanGaps: zg
                    }
                } = sg,
                Ag = ug.length,
                Bg = [];
            let Cg = xg,
                Dg = tg[0].start,
                Eg = Dg;

            function Fg(Gg, Hg, Ig, Jg) {
                const Kg = zg ? -1 : 1;
                if (Gg !== Hg) {
                    for (Gg += Ag; ug[Gg % Ag].skip;)
                        Gg -= Kg;
                    for (; ug[Hg % Ag].skip;)
                        Hg += Kg;
                    Gg % Ag != Hg % Ag && (Bg.push({
                        start: Gg % Ag,
                        end: Hg % Ag,
                        loop: Ig,
                        style: Jg
                    }), Cg = Jg, Dg = Hg % Ag);
                }
            }
            for (const Hg of tg) {
                Dg = zg ? Dg : Hg.start;
                let Ig, Jg = ug[Dg % Ag];
                for (Eg = Dg + 1; Eg <= Hg.end; Eg++) {
                    const Kg = ug[Eg % Ag];
                    Ig = _og(vg.setContext(_Rd(wg, {
                        type: 'segment',
                        p0: Jg,
                        p1: Kg,
                        p0DataIndex: (Eg - 1) % Ag,
                        p1DataIndex: Eg % Ag,
                        datasetIndex: yg
                    }))), _pg(Ig, Cg) && Fg(Dg, Eg - 1, Hg.loop, Cg), Jg = Kg, Cg = Ig;
                }
                Dg < Eg - 1 && Fg(Dg, Eg - 1, Hg.loop, Cg);
            }
            return Bg;
        }(og, pg, qg, rg) : pg;
    }

    function _og(pg) {
        return {
            backgroundColor: pg.backgroundColor,
            borderCapStyle: pg.borderCapStyle,
            borderDash: pg.borderDash,
            borderDashOffset: pg.borderDashOffset,
            borderJoinStyle: pg.borderJoinStyle,
            borderWidth: pg.borderWidth,
            borderColor: pg.borderColor
        };
    }

    function _pg(qg, rg) {
        return rg && JSON.stringify(qg) !== JSON.stringify(rg);
    }
}), c.register('.....', function(d, e) {
    function f(g) {
        return g + 0.5 | 0;
    }
    a(d.exports, 'Color', function() {
        return _bb;
    });
    const g = (h, i, j) => Math.max(Math.min(h, j), i);

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
        n = o => m[15 & o],
        o = p => m[(240 & p) >> 4] + m[15 & p],
        p = q => (240 & q) >> 4 == (15 & q);

    function q(r) {
        var s = (t => p(t.r) && p(t.g) && p(t.b) && p(t.a))(r) ? n : o;
        return r ? '#' + s(r.r) + s(r.g) + s(r.b) + ((t, u) => t < 255 ? u(t) : '')(r.a, s) : void 0;
    }
    const s = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;

    function t(u, v, w) {
        const x = v * Math.min(w, 1 - w),
            y = (z, A = (z + u / 30) % 12) => w - f * Math.max(Math.min(A - 3, 9 - A, 1), -1);
        return [
            y(0),
            y(8),
            y(4)
        ];
    }

    function w(x, y, z) {
        const A = (B, C = (B + x / 60) % 6) => z - z * y * Math.max(Math.min(C, 4 - C, 1), 0);
        return [
            f(5),
            f(3),
            f(1)
        ];
    }

    function y(z, A, B) {
        const C = t(z, 1, 0.5);
        let D;
        for (A + B > 1 && (D = 1 / (A + B), A *= D, B *= D), D = 0; D < 3; D++)
            f[D] *= 1 - A - B, f[D] += A;
        return f;
    }

    function A(B) {
        const C = B.r / 255,
            D = B.g / 255,
            E = B.b / 255,
            F = Math.max(C, D, f),
            G = Math.min(C, D, f),
            H = (F + h) / 2;
        let I, J, K;
        return F !== h && (K = F - h, J = i > 0.5 ? K / (2 - F - h) : K / (F + h), I = function(L, M, N, O, P) {
            return L === P ? (M - N) / O + (M < N ? 6 : 0) : M === P ? (N - L) / O + 2 : (L - M) / O + 4;
        }(C, D, f, K, F), I = 60 * I + 0.5), [
            0 | I,
            J || 0,
            i
        ];
    }

    function H(I, J, K, L) {
        return (Array.isArray(J) ? I(J[0], J[1], J[2]) : I(J, K, L)).map(i);
    }

    function I(J, K, L) {
        return H(t, J, K, L);
    }

    function J(K) {
        return (K % 360 + 360) % 360;
    }

    function K(L) {
        const M = s.exec(L);
        let N, O = 255;
        if (!M)
            return;
        M[5] !== N && (O = M[6] ? h(+M[5]) : i(+M[5]));
        const P = J(+M[2]),
            Q = +M[3] / 100,
            R = +M[4] / 100;
        return N = 'hwb' === M[1] ? function(S, T, U) {
            return H(y, S, T, U);
        }(P, j, k) : 'hsv' === M[1] ? function(S, T, U) {
            return H(w, S, T, U);
        }(P, j, k) : I(P, j, k), {
            r: N[0],
            g: N[1],
            b: N[2],
            a: O
        };
    }
    const P = {
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
        Q = {
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
    let R;

    function S(T) {
        R || (R = function() {
            const U = {},
                V = Object.keys(Q),
                W = Object.keys(P);
            let X, Y, Z, $, ab;
            for (X = 0; X < V.length; X++) {
                for ($ = ab = V[X], Y = 0; Y < W.length; Y++)
                    Z = W[Y], ab = ab.replace(Z, P[Z]);
                Z = parseInt(Q[$], 16), U[ab] = [
                    Z >> 16 & 255,
                    Z >> 8 & 255,
                    255 & Z
                ];
            }
            return U;
        }(), R.transparent = [
            0,
            0,
            0,
            0
        ]);
        const U = R[T.toLowerCase()];
        return U && {
            r: U[0],
            g: U[1],
            b: U[2],
            a: 4 === U.length ? U[3] : 255
        };
    }
    const U = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
    const V = W => W <= 0.0031308 ? 12.92 * W : 1.055 * Math.pow(W, 1 / 2.4) - 0.055,
        W = X => X <= 0.04045 ? X / 12.92 : Math.pow((X + 0.055) / 1.055, 2.4);

    function X(Y, Z, $) {
        if (Y) {
            let ab = A(Y);
            ab[Z] = Math.max(0, Math.min(ab[Z] + ab[Z] * $, 0 === Z ? 360 : 1)), ab = I(ab), Y.r = ab[0], Y.g = ab[1], Y.b = ab[2];
        }
    }

    function Y(Z, $) {
        return Z ? Object.assign($ || {}, Z) : Z;
    }

    function Z($) {
        var ab = {
            r: 0,
            g: 0,
            b: 0,
            a: 255
        };
        return Array.isArray($) ? $.length >= 3 && (ab = {
            r: $[0],
            g: $[1],
            b: $[2],
            a: 255
        }, $.length > 3 && (ab.a = i($[3]))) : (ab = Y($, {
            r: 0,
            g: 0,
            b: 0,
            a: 1
        })).a = i(ab.a), ab;
    }

    function ab(bb) {
        return 'r' === bb.charAt(0) ? function(cb) {
            const db = U.exec(cb);
            let eb, fb, gb, hb = 255;
            if (db) {
                if (db[7] !== eb) {
                    const ib = +db[7];
                    hb = db[8] ? h(ib) : P(255 * ib, 0, 255);
                }
                return eb = +db[1], fb = +db[3], gb = +db[5], eb = 255 & (db[2] ? h(eb) : P(eb, 0, 255)), fb = 255 & (db[4] ? h(fb) : P(fb, 0, 255)), gb = 255 & (db[6] ? h(gb) : P(gb, 0, 255)), {
                    r: eb,
                    g: fb,
                    b: gb,
                    a: hb
                };
            }
        }(bb) : K(bb);
    }
    class _bb {
        get valid() {
            return this._valid;
        }
        get rgb() {
            var cb = Y(this._rgb);
            return cb && (cb.a = j(cb.a)), cb;
        }
        set rgb(cb) {
            this._rgb = Z(cb);
        }
        rgbString() {
            return this._valid ? (a = this._rgb) && (a.a < 255 ? `rgba(${ a.r }, ${ a.g }, ${ a.b }, ${ j(a.a) })` : `rgb(${ a.r }, ${ a.g }, ${ a.b })`) : void 0;
            var cb;
        }
        hexString() {
            return this._valid ? q(this._rgb) : void 0;
        }
        hslString() {
            return this._valid ? function(cb) {
                if (!cb)
                    return;
                const db = A(cb),
                    eb = db[0],
                    fb = k(db[1]),
                    gb = k(db[2]);
                return cb.a < 255 ? `hsla(${ eb }, ${ fb }%, ${ gb }%, ${ j(cb.a) })` : `hsl(${ eb }, ${ fb }%, ${ gb }%)`;
            }(this._rgb) : void 0;
        }
        mix(cb, db) {
            if (cb) {
                const eb = this.rgb,
                    fb = cb.rgb;
                let gb;
                const hb = db === gb ? 0.5 : db,
                    ib = 2 * hb - 1,
                    jb = eb.a - fb.a,
                    kb = ((ib * jb == -1 ? ib : (ib + jb) / (1 + ib * jb)) + 1) / 2;
                gb = 1 - kb, eb.r = 255 & kb * eb.r + gb * fb.r + 0.5, eb.g = 255 & kb * eb.g + gb * fb.g + 0.5, eb.b = 255 & kb * eb.b + gb * fb.b + 0.5, eb.a = hb * eb.a + (1 - hb) * fb.a, this.rgb = eb;
            }
            return this;
        }
        interpolate(cb, db) {
            return cb && (this._rgb = function(eb, fb, gb) {
                const hb = W(j(eb.r)),
                    ib = W(j(eb.g)),
                    jb = W(j(eb.b));
                return {
                    r: i(V(hb + gb * (W(j(fb.r)) - hb))),
                    g: i(V(ib + gb * (W(j(fb.g)) - ib))),
                    b: i(V(jb + gb * (W(j(fb.b)) - jb))),
                    a: eb.a + gb * (fb.a - eb.a)
                };
            }(this._rgb, cb._rgb, db)), this;
        }
        clone() {
            return new _bb(this.rgb);
        }
        alpha(cb) {
            return this._rgb.a = i(cb), this;
        }
        clearer(cb) {
            return this._rgb.a *= 1 - cb, this;
        }
        greyscale() {
            const cb = this._rgb,
                db = f(0.3 * cb.r + 0.59 * cb.g + 0.11 * cb.b);
            return cb.r = cb.g = cb.b = db, this;
        }
        opaquer(cb) {
            return this._rgb.a *= 1 + cb, this;
        }
        negate() {
            const cb = this._rgb;
            return cb.r = 255 - cb.r, cb.g = 255 - cb.g, cb.b = 255 - cb.b, this;
        }
        lighten(cb) {
            return X(this._rgb, 2, cb), this;
        }
        darken(cb) {
            return X(this._rgb, 2, -cb), this;
        }
        saturate(cb) {
            return X(this._rgb, 1, cb), this;
        }
        desaturate(cb) {
            return X(this._rgb, 1, -cb), this;
        }
        rotate(cb) {
            return function(db, eb) {
                var fb = A(db);
                fb[0] = J(fb[0] + eb), fb = I(fb), db.r = fb[0], db.g = fb[1], db.b = fb[2];
            }(this._rgb, cb), this;
        }
        constructor(cb) {
            if (cb instanceof _bb)
                return cb;
            const db = typeof cb;
            let eb;
            var fb, gb, hb;
            'object' === db ? eb = Z(cb) : 'string' === db && (hb = (fb = cb).length, '#' === fb[0] && (4 === hb || 5 === hb ? gb = {
                r: 255 & 17 * l[fb[1]],
                g: 255 & 17 * l[fb[2]],
                b: 255 & 17 * l[fb[3]],
                a: 5 === hb ? 17 * l[fb[4]] : 255
            } : 7 !== hb && 9 !== hb || (gb = {
                r: l[fb[1]] << 4 | l[fb[2]],
                g: l[fb[3]] << 4 | l[fb[4]],
                b: l[fb[5]] << 4 | l[fb[6]],
                a: 9 === hb ? l[fb[7]] << 4 | l[fb[8]] : 255
            })), eb = gb || S(cb) || ab(cb)), this._rgb = eb, this._valid = !!eb;
        }
    }
}), c.register('.....', function(d, e) {
    a(d.exports, 'Line', function() {
        return _x;
    });
    var f = c('.....'),
        g = c('.....');
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
        l.datasets = m.map(p => {
            const q = l.datasets.find(r => r[n] === p[n]);
            return q && p.data && !o.includes(q) ? (o.push(q), Object.assign(q, p), q) : {
                ...p
            };
        });
    }

    function m(n) {
        let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h;
        const p = {
            labels: [],
            datasets: []
        };
        return j(p, n.labels), k(p, n.datasets, o), p;
    }

    function o(p, q) {
        const {
            height: r = 150,
            width: s = 300,
            redraw: t = !1,
            datasetIdKey: u,
            type: v,
            data: w,
            options: _x,
            plugins: y = [],
            fallbackContent: z,
            updateMode: A,
            ...B
        } = p, C = (0, f.useRef)(null), D = (0, f.useRef)(), E = () => {
            C.current && (D.current = new(0, g.Chart)(C.current, {
                type: v,
                data: m(w, o),
                options: _x && {
                    ..._x
                },
                plugins: y
            }), i(q, D.current));
        }, F = () => {
            i(q, null), D.current && (D.current.destroy(), D.current = null);
        };
        return (0, f.useEffect)(() => {
            !t && D.current && _x && function(G, H) {
                const I = G.options;
                I && H && Object.assign(I, H);
            }(D.current, _x);
        }, [
            t,
            _x
        ]), (0, f.useEffect)(() => {
            !t && D.current && j(D.current.config.data, w.labels);
        }, [
            t,
            w.labels
        ]), (0, f.useEffect)(() => {
            !t && D.current && w.datasets && k(D.current.config.data, w.datasets, o);
        }, [
            t,
            w.datasets
        ]), (0, f.useEffect)(() => {
            D.current && (t ? (F(), setTimeout(E)) : D.current.update(A));
        }, [
            t,
            _x,
            w.labels,
            w.datasets,
            A
        ]), (0, f.useEffect)(() => {
            D.current && (F(), setTimeout(E));
        }, [v]), (0, f.useEffect)(() => (E(), () => F()), []), b(f).createElement('canvas', Object.assign({
            ref: C,
            role: 'img',
            height: r,
            width: s
        }, B), z);
    }
    const A = (0, f.forwardRef)(o);

    function B(C, D) {
        return g.Chart.register(D), (0, f.forwardRef)((E, F) => b(f).createElement(A, Object.assign({}, E, {
            ref: F,
            type: C
        })));
    }
    const C = B('line', g.LineController);
    g.BarController, g.RadarController, g.DoughnutController, g.PolarAreaController, g.BubbleController, g.PieController, g.ScatterController;
});