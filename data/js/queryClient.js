import {
    C as e,
    _ as t,
    a as n,
    b as r,
    c as i,
    d as a,
    f as o,
    g as s,
    h as c,
    i as l,
    l as u,
    m as d,
    o as f,
    p,
    r as m,
    s as h,
    u as g,
    v as _,
    w as v,
    x as y,
    y as b
} from "./QueryClientProvider.js";
import {
    r as x
} from "./infiniteQueryBehavior.js";
var S = console,
    C = class {
        destroy() {
            this.clearGcTimeout()
        }
        scheduleGc() {
            this.clearGcTimeout(), d(this.cacheTime) && (this.gcTimeout = setTimeout(() => {
                this.optionalRemove()
            }, this.cacheTime))
        }
        updateCacheTime(e) {
            this.cacheTime = Math.max(this.cacheTime || 0, e ?? (p ? 1 / 0 : 3e5))
        }
        clearGcTimeout() {
            this.gcTimeout && (clearTimeout(this.gcTimeout), this.gcTimeout = void 0)
        }
    },
    w = class extends C {
        constructor(e) {
            super(), this.abortSignalConsumed = !1, this.defaultOptions = e.defaultOptions, this.setOptions(e.options), this.observers = [], this.cache = e.cache, this.logger = e.logger || S, this.queryKey = e.queryKey, this.queryHash = e.queryHash, this.initialState = e.state || T(this.options), this.state = this.initialState, this.scheduleGc()
        }
        get meta() {
            return this.options.meta
        }
        setOptions(e) {
            this.options = {
                ...this.defaultOptions,
                ...e
            }, this.updateCacheTime(this.options.cacheTime)
        }
        optionalRemove() {
            !this.observers.length && this.state.fetchStatus === `idle` && this.cache.remove(this)
        }
        setData(e, t) {
            let n = y(this.state.data, e, this.options);
            return this.dispatch({
                data: n,
                type: `success`,
                dataUpdatedAt: t == null ? void 0 : t.updatedAt,
                manual: t == null ? void 0 : t.manual
            }), n
        }
        setState(e, t) {
            this.dispatch({
                type: `setState`,
                state: e,
                setStateOptions: t
            })
        }
        cancel(e) {
            var n;
            let r = this.promise;
            return (n = this.retryer) == null || n.cancel(e), r ? r.then(t).catch(t) : Promise.resolve()
        }
        destroy() {
            super.destroy(), this.cancel({
                silent: !0
            })
        }
        reset() {
            this.destroy(), this.setState(this.initialState)
        }
        isActive() {
            return this.observers.some(e => e.options.enabled !== !1)
        }
        isDisabled() {
            return this.getObserversCount() > 0 && !this.isActive()
        }
        isStale() {
            return this.state.isInvalidated || !this.state.dataUpdatedAt || this.observers.some(e => e.getCurrentResult().isStale)
        }
        isStaleByTime(t = 0) {
            return this.state.isInvalidated || !this.state.dataUpdatedAt || !e(this.state.dataUpdatedAt, t)
        }
        onFocus() {
            var e;
            let t = this.observers.find(e => e.shouldFetchOnWindowFocus());
            t && t.refetch({
                cancelRefetch: !1
            }), (e = this.retryer) == null || e.continue()
        }
        onOnline() {
            var e;
            let t = this.observers.find(e => e.shouldFetchOnReconnect());
            t && t.refetch({
                cancelRefetch: !1
            }), (e = this.retryer) == null || e.continue()
        }
        addObserver(e) {
            this.observers.includes(e) || (this.observers.push(e), this.clearGcTimeout(), this.cache.notify({
                type: `observerAdded`,
                query: this,
                observer: e
            }))
        }
        removeObserver(e) {
            this.observers.includes(e) && (this.observers = this.observers.filter(t => t !== e), this.observers.length || (this.retryer && (this.abortSignalConsumed ? this.retryer.cancel({
                revert: !0
            }) : this.retryer.cancelRetry()), this.scheduleGc()), this.cache.notify({
                type: `observerRemoved`,
                query: this,
                observer: e
            }))
        }
        getObserversCount() {
            return this.observers.length
        }
        invalidate() {
            this.state.isInvalidated || this.dispatch({
                type: `invalidate`
            })
        }
        fetch(e, t) {
            var r, i;
            if (this.state.fetchStatus !== `idle`) {
                if (this.state.dataUpdatedAt && t != null && t.cancelRefetch) this.cancel({
                    silent: !0
                });
                else if (this.promise) {
                    var a;
                    return (a = this.retryer) == null || a.continueRetry(), this.promise
                }
            }
            if (e && this.setOptions(e), !this.options.queryFn) {
                let e = this.observers.find(e => e.options.queryFn);
                e && this.setOptions(e.options)
            }
            let o = g(),
                s = {
                    queryKey: this.queryKey,
                    pageParam: void 0,
                    meta: this.meta
                },
                c = e => {
                    Object.defineProperty(e, "signal", {
                        enumerable: !0,
                        get: () => {
                            if (o) return this.abortSignalConsumed = !0, o.signal
                        }
                    })
                };
            c(s);
            let l = {
                fetchOptions: t,
                options: this.options,
                queryKey: this.queryKey,
                state: this.state,
                fetchFn: () => this.options.queryFn ? (this.abortSignalConsumed = !1, this.options.queryFn(s)) : Promise.reject(`Missing queryFn for queryKey '` + this.options.queryHash + `'`)
            };
            if (c(l), (r = this.options.behavior) == null || r.onFetch(l), this.revertState = this.state, this.state.fetchStatus === `idle` || this.state.fetchMeta !== ((i = l.fetchOptions) == null ? void 0 : i.meta)) {
                var u;
                this.dispatch({
                    type: `fetch`,
                    meta: (u = l.fetchOptions) == null ? void 0 : u.meta
                })
            }
            let d = e => {
                if (f(e) && e.silent || this.dispatch({
                        type: `error`,
                        error: e
                    }), !f(e)) {
                    var t, n, r, i;
                    (t = (n = this.cache.config).onError) == null || t.call(n, e, this), (r = (i = this.cache.config).onSettled) == null || r.call(i, this.state.data, e, this)
                }
                this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1
            };
            return this.retryer = n({
                fn: l.fetchFn,
                abort: o == null ? void 0 : o.abort.bind(o),
                onSuccess: e => {
                    var t, n, r, i;
                    e === void 0 ? d(Error(this.queryHash + ` data is undefined`)) : (this.setData(e), (t = (n = this.cache.config).onSuccess) == null || t.call(n, e, this), (r = (i = this.cache.config).onSettled) == null || r.call(i, e, this.state.error, this), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1)
                },
                onError: d,
                onFail: (e, t) => {
                    this.dispatch({
                        type: `failed`,
                        failureCount: e,
                        error: t
                    })
                },
                onPause: () => {
                    this.dispatch({
                        type: `pause`
                    })
                },
                onContinue: () => {
                    this.dispatch({
                        type: `continue`
                    })
                },
                retry: l.options.retry,
                retryDelay: l.options.retryDelay,
                networkMode: l.options.networkMode
            }), this.promise = this.retryer.promise, this.promise
        }
        dispatch(e) {
            let t = t => {
                switch (e.type) {
                    case `failed`:
                        return {
                            ...t, fetchFailureCount: e.failureCount, fetchFailureReason: e.error
                        };
                    case `pause`:
                        return {
                            ...t, fetchStatus: `paused`
                        };
                    case `continue`:
                        return {
                            ...t, fetchStatus: `fetching`
                        };
                    case `fetch`:
                        return {
                            ...t, fetchFailureCount: 0, fetchFailureReason: null, fetchMeta: e.meta ?? null, fetchStatus: l(this.options.networkMode) ? `fetching` : `paused`, ...!t.dataUpdatedAt && {
                                error: null,
                                status: `loading`
                            }
                        };
                    case `success`:
                        return {
                            ...t, data: e.data, dataUpdateCount: t.dataUpdateCount + 1, dataUpdatedAt: e.dataUpdatedAt ?? Date.now(), error: null, isInvalidated: !1, status: `success`, ...!e.manual && {
                                fetchStatus: `idle`,
                                fetchFailureCount: 0,
                                fetchFailureReason: null
                            }
                        };
                    case `error`:
                        let n = e.error;
                        return f(n) && n.revert && this.revertState ? {
                            ...this.revertState,
                            fetchStatus: `idle`
                        } : {
                            ...t,
                            error: n,
                            errorUpdateCount: t.errorUpdateCount + 1,
                            errorUpdatedAt: Date.now(),
                            fetchFailureCount: t.fetchFailureCount + 1,
                            fetchFailureReason: n,
                            fetchStatus: `idle`,
                            status: `error`
                        };
                    case `invalidate`:
                        return {
                            ...t, isInvalidated: !0
                        };
                    case `setState`:
                        return {
                            ...t, ...e.state
                        }
                }
            };
            this.state = t(this.state), m.batch(() => {
                this.observers.forEach(t => {
                    t.onQueryUpdate(e)
                }), this.cache.notify({
                    query: this,
                    type: `updated`,
                    action: e
                })
            })
        }
    };

function T(e) {
    let t = typeof e.initialData == `function` ? e.initialData() : e.initialData,
        n = t !== void 0,
        r = n ? typeof e.initialDataUpdatedAt == `function` ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: n ? r ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: n ? `success` : `loading`,
        fetchStatus: `idle`
    }
}
var E = class extends v {
        constructor(e) {
            super(), this.config = e || {}, this.queries = [], this.queriesMap = {}
        }
        build(e, t, n) {
            let r = t.queryKey,
                i = t.queryHash ?? o(r, t),
                a = this.get(i);
            return a || (a = new w({
                cache: this,
                logger: e.getLogger(),
                queryKey: r,
                queryHash: i,
                options: e.defaultQueryOptions(t),
                state: n,
                defaultOptions: e.getQueryDefaults(r)
            }), this.add(a)), a
        }
        add(e) {
            this.queriesMap[e.queryHash] || (this.queriesMap[e.queryHash] = e, this.queries.push(e), this.notify({
                type: `added`,
                query: e
            }))
        }
        remove(e) {
            let t = this.queriesMap[e.queryHash];
            t && (e.destroy(), this.queries = this.queries.filter(t => t !== e), t === e && delete this.queriesMap[e.queryHash], this.notify({
                type: `removed`,
                query: e
            }))
        }
        clear() {
            m.batch(() => {
                this.queries.forEach(e => {
                    this.remove(e)
                })
            })
        }
        get(e) {
            return this.queriesMap[e]
        }
        getAll() {
            return this.queries
        }
        find(e, t) {
            let [n] = _(e, t);
            return n.exact === void 0 && (n.exact = !0), this.queries.find(e => s(n, e))
        }
        findAll(e, t) {
            let [n] = _(e, t);
            return Object.keys(n).length > 0 ? this.queries.filter(e => s(n, e)) : this.queries
        }
        notify(e) {
            m.batch(() => {
                this.listeners.forEach(({
                    listener: t
                }) => {
                    t(e)
                })
            })
        }
        onFocus() {
            m.batch(() => {
                this.queries.forEach(e => {
                    e.onFocus()
                })
            })
        }
        onOnline() {
            m.batch(() => {
                this.queries.forEach(e => {
                    e.onOnline()
                })
            })
        }
    },
    D = class extends C {
        constructor(e) {
            super(), this.defaultOptions = e.defaultOptions, this.mutationId = e.mutationId, this.mutationCache = e.mutationCache, this.logger = e.logger || S, this.observers = [], this.state = e.state || O(), this.setOptions(e.options), this.scheduleGc()
        }
        setOptions(e) {
            this.options = {
                ...this.defaultOptions,
                ...e
            }, this.updateCacheTime(this.options.cacheTime)
        }
        get meta() {
            return this.options.meta
        }
        setState(e) {
            this.dispatch({
                type: `setState`,
                state: e
            })
        }
        addObserver(e) {
            this.observers.includes(e) || (this.observers.push(e), this.clearGcTimeout(), this.mutationCache.notify({
                type: `observerAdded`,
                mutation: this,
                observer: e
            }))
        }
        removeObserver(e) {
            this.observers = this.observers.filter(t => t !== e), this.scheduleGc(), this.mutationCache.notify({
                type: `observerRemoved`,
                mutation: this,
                observer: e
            })
        }
        optionalRemove() {
            this.observers.length || (this.state.status === `loading` ? this.scheduleGc() : this.mutationCache.remove(this))
        }
        continue () {
            var e;
            return ((e = this.retryer) == null ? void 0 : e.continue()) ?? this.execute()
        }
        async execute() {
            let e = () => (this.retryer = n({
                    fn: () => this.options.mutationFn ? this.options.mutationFn(this.state.variables) : Promise.reject(`No mutationFn found`),
                    onFail: (e, t) => {
                        this.dispatch({
                            type: `failed`,
                            failureCount: e,
                            error: t
                        })
                    },
                    onPause: () => {
                        this.dispatch({
                            type: `pause`
                        })
                    },
                    onContinue: () => {
                        this.dispatch({
                            type: `continue`
                        })
                    },
                    retry: this.options.retry ?? 0,
                    retryDelay: this.options.retryDelay,
                    networkMode: this.options.networkMode
                }), this.retryer.promise),
                t = this.state.status === `loading`;
            try {
                var r, i, a, o, s, c, l, u;
                if (!t) {
                    var d, f, p, m;
                    this.dispatch({
                        type: `loading`,
                        variables: this.options.variables
                    }), await ((d = (f = this.mutationCache.config).onMutate) == null ? void 0 : d.call(f, this.state.variables, this));
                    let e = await ((p = (m = this.options).onMutate) == null ? void 0 : p.call(m, this.state.variables));
                    e !== this.state.context && this.dispatch({
                        type: `loading`,
                        context: e,
                        variables: this.state.variables
                    })
                }
                let n = await e();
                return await ((r = (i = this.mutationCache.config).onSuccess) == null ? void 0 : r.call(i, n, this.state.variables, this.state.context, this)), await ((a = (o = this.options).onSuccess) == null ? void 0 : a.call(o, n, this.state.variables, this.state.context)), await ((s = (c = this.mutationCache.config).onSettled) == null ? void 0 : s.call(c, n, null, this.state.variables, this.state.context, this)), await ((l = (u = this.options).onSettled) == null ? void 0 : l.call(u, n, null, this.state.variables, this.state.context)), this.dispatch({
                    type: `success`,
                    data: n
                }), n
            } catch (e) {
                try {
                    var h, g, _, v, y, b, x, S;
                    throw await ((h = (g = this.mutationCache.config).onError) == null ? void 0 : h.call(g, e, this.state.variables, this.state.context, this)), await ((_ = (v = this.options).onError) == null ? void 0 : _.call(v, e, this.state.variables, this.state.context)), await ((y = (b = this.mutationCache.config).onSettled) == null ? void 0 : y.call(b, void 0, e, this.state.variables, this.state.context, this)), await ((x = (S = this.options).onSettled) == null ? void 0 : x.call(S, void 0, e, this.state.variables, this.state.context)), e
                } finally {
                    this.dispatch({
                        type: `error`,
                        error: e
                    })
                }
            }
        }
        dispatch(e) {
            let t = t => {
                switch (e.type) {
                    case `failed`:
                        return {
                            ...t, failureCount: e.failureCount, failureReason: e.error
                        };
                    case `pause`:
                        return {
                            ...t, isPaused: !0
                        };
                    case `continue`:
                        return {
                            ...t, isPaused: !1
                        };
                    case `loading`:
                        return {
                            ...t, context: e.context, data: void 0, failureCount: 0, failureReason: null, error: null, isPaused: !l(this.options.networkMode), status: `loading`, variables: e.variables
                        };
                    case `success`:
                        return {
                            ...t, data: e.data, failureCount: 0, failureReason: null, error: null, status: `success`, isPaused: !1
                        };
                    case `error`:
                        return {
                            ...t, data: void 0, error: e.error, failureCount: t.failureCount + 1, failureReason: e.error, isPaused: !1, status: `error`
                        };
                    case `setState`:
                        return {
                            ...t, ...e.state
                        }
                }
            };
            this.state = t(this.state), m.batch(() => {
                this.observers.forEach(t => {
                    t.onMutationUpdate(e)
                }), this.mutationCache.notify({
                    mutation: this,
                    type: `updated`,
                    action: e
                })
            })
        }
    };

function O() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: `idle`,
        variables: void 0
    }
}
var k = class extends v {
        constructor(e) {
            super(), this.config = e || {}, this.mutations = [], this.mutationId = 0
        }
        build(e, t, n) {
            let r = new D({
                mutationCache: this,
                logger: e.getLogger(),
                mutationId: ++this.mutationId,
                options: e.defaultMutationOptions(t),
                state: n,
                defaultOptions: t.mutationKey ? e.getMutationDefaults(t.mutationKey) : void 0
            });
            return this.add(r), r
        }
        add(e) {
            this.mutations.push(e), this.notify({
                type: `added`,
                mutation: e
            })
        }
        remove(e) {
            this.mutations = this.mutations.filter(t => t !== e), this.notify({
                type: `removed`,
                mutation: e
            })
        }
        clear() {
            m.batch(() => {
                this.mutations.forEach(e => {
                    this.remove(e)
                })
            })
        }
        getAll() {
            return this.mutations
        }
        find(e) {
            return e.exact === void 0 && (e.exact = !0), this.mutations.find(t => c(e, t))
        }
        findAll(e) {
            return this.mutations.filter(t => c(e, t))
        }
        notify(e) {
            m.batch(() => {
                this.listeners.forEach(({
                    listener: t
                }) => {
                    t(e)
                })
            })
        }
        resumePausedMutations() {
            return this.resuming = (this.resuming ?? Promise.resolve()).then(() => {
                let e = this.mutations.filter(e => e.state.isPaused);
                return m.batch(() => e.reduce((e, n) => e.then(() => n.continue().catch(t)), Promise.resolve()))
            }).then(() => {
                this.resuming = void 0
            }), this.resuming
        }
    },
    A = class {
        constructor(e = {}) {
            this.queryCache = e.queryCache || new E, this.mutationCache = e.mutationCache || new k, this.logger = e.logger || S, this.defaultOptions = e.defaultOptions || {}, this.queryDefaults = [], this.mutationDefaults = [], this.mountCount = 0
        }
        mount() {
            this.mountCount++, this.mountCount === 1 && (this.unsubscribeFocus = i.subscribe(() => {
                i.isFocused() && (this.resumePausedMutations(), this.queryCache.onFocus())
            }), this.unsubscribeOnline = h.subscribe(() => {
                h.isOnline() && (this.resumePausedMutations(), this.queryCache.onOnline())
            }))
        }
        unmount() {
            var e, t;
            this.mountCount--, this.mountCount === 0 && ((e = this.unsubscribeFocus) == null || e.call(this), this.unsubscribeFocus = void 0, (t = this.unsubscribeOnline) == null || t.call(this), this.unsubscribeOnline = void 0)
        }
        isFetching(e, t) {
            let [n] = _(e, t);
            return n.fetchStatus = `fetching`, this.queryCache.findAll(n).length
        }
        isMutating(e) {
            return this.mutationCache.findAll({
                ...e,
                fetching: !0
            }).length
        }
        getQueryData(e, t) {
            var n;
            return (n = this.queryCache.find(e, t)) == null ? void 0 : n.state.data
        }
        ensureQueryData(e, t, n) {
            let r = b(e, t, n),
                i = this.getQueryData(r.queryKey);
            return i ? Promise.resolve(i) : this.fetchQuery(r)
        }
        getQueriesData(e) {
            return this.getQueryCache().findAll(e).map(({
                queryKey: e,
                state: t
            }) => [e, t.data])
        }
        setQueryData(e, t, n) {
            let r = this.queryCache.find(e),
                i = r == null ? void 0 : r.state.data,
                a = u(t, i);
            if (a === void 0) return;
            let o = b(e),
                s = this.defaultQueryOptions(o);
            return this.queryCache.build(this, s).setData(a, {
                ...n,
                manual: !0
            })
        }
        setQueriesData(e, t, n) {
            return m.batch(() => this.getQueryCache().findAll(e).map(({
                queryKey: e
            }) => [e, this.setQueryData(e, t, n)]))
        }
        getQueryState(e, t) {
            var n;
            return (n = this.queryCache.find(e, t)) == null ? void 0 : n.state
        }
        removeQueries(e, t) {
            let [n] = _(e, t), r = this.queryCache;
            m.batch(() => {
                r.findAll(n).forEach(e => {
                    r.remove(e)
                })
            })
        }
        resetQueries(e, t, n) {
            let [r, i] = _(e, t, n), a = this.queryCache, o = {
                type: `active`,
                ...r
            };
            return m.batch(() => (a.findAll(r).forEach(e => {
                e.reset()
            }), this.refetchQueries(o, i)))
        }
        cancelQueries(e, n, r) {
            let [i, a = {}] = _(e, n, r);
            a.revert === void 0 && (a.revert = !0);
            let o = m.batch(() => this.queryCache.findAll(i).map(e => e.cancel(a)));
            return Promise.all(o).then(t).catch(t)
        }
        invalidateQueries(e, t, n) {
            let [r, i] = _(e, t, n);
            return m.batch(() => {
                if (this.queryCache.findAll(r).forEach(e => {
                        e.invalidate()
                    }), r.refetchType === `none`) return Promise.resolve();
                let e = {
                    ...r,
                    type: r.refetchType ?? r.type ?? `active`
                };
                return this.refetchQueries(e, i)
            })
        }
        refetchQueries(e, n, r) {
            let [i, a] = _(e, n, r), o = m.batch(() => this.queryCache.findAll(i).filter(e => !e.isDisabled()).map(e => e.fetch(void 0, {
                ...a,
                cancelRefetch: (a == null ? void 0 : a.cancelRefetch) ?? !0,
                meta: {
                    refetchPage: i.refetchPage
                }
            }))), s = Promise.all(o).then(t);
            return a != null && a.throwOnError || (s = s.catch(t)), s
        }
        fetchQuery(e, t, n) {
            let r = b(e, t, n),
                i = this.defaultQueryOptions(r);
            i.retry === void 0 && (i.retry = !1);
            let a = this.queryCache.build(this, i);
            return a.isStaleByTime(i.staleTime) ? a.fetch(i) : Promise.resolve(a.state.data)
        }
        prefetchQuery(e, n, r) {
            return this.fetchQuery(e, n, r).then(t).catch(t)
        }
        fetchInfiniteQuery(e, t, n) {
            let r = b(e, t, n);
            return r.behavior = x(), this.fetchQuery(r)
        }
        prefetchInfiniteQuery(e, n, r) {
            return this.fetchInfiniteQuery(e, n, r).then(t).catch(t)
        }
        resumePausedMutations() {
            return this.mutationCache.resumePausedMutations()
        }
        getQueryCache() {
            return this.queryCache
        }
        getMutationCache() {
            return this.mutationCache
        }
        getLogger() {
            return this.logger
        }
        getDefaultOptions() {
            return this.defaultOptions
        }
        setDefaultOptions(e) {
            this.defaultOptions = e
        }
        setQueryDefaults(e, t) {
            let n = this.queryDefaults.find(t => a(e) === a(t.queryKey));
            n ? n.defaultOptions = t : this.queryDefaults.push({
                queryKey: e,
                defaultOptions: t
            })
        }
        getQueryDefaults(e) {
            if (!e) return;
            let t = this.queryDefaults.find(t => r(e, t.queryKey));
            return t == null ? void 0 : t.defaultOptions
        }
        setMutationDefaults(e, t) {
            let n = this.mutationDefaults.find(t => a(e) === a(t.mutationKey));
            n ? n.defaultOptions = t : this.mutationDefaults.push({
                mutationKey: e,
                defaultOptions: t
            })
        }
        getMutationDefaults(e) {
            if (!e) return;
            let t = this.mutationDefaults.find(t => r(e, t.mutationKey));
            return t == null ? void 0 : t.defaultOptions
        }
        defaultQueryOptions(e) {
            if (e != null && e._defaulted) return e;
            let t = {
                ...this.defaultOptions.queries,
                ...this.getQueryDefaults(e == null ? void 0 : e.queryKey),
                ...e,
                _defaulted: !0
            };
            return !t.queryHash && t.queryKey && (t.queryHash = o(t.queryKey, t)), t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== `always`), t.useErrorBoundary === void 0 && (t.useErrorBoundary = !!t.suspense), t
        }
        defaultMutationOptions(e) {
            return e != null && e._defaulted ? e : {
                ...this.defaultOptions.mutations,
                ...this.getMutationDefaults(e == null ? void 0 : e.mutationKey),
                ...e,
                _defaulted: !0
            }
        }
        clear() {
            this.queryCache.clear(), this.mutationCache.clear()
        }
    };
export {
    A as t
};