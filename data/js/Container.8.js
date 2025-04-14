function e(e, t, r, s) {
    Object.defineProperty(e, t, {
        get: r,
        set: s,
        enumerable: !0,
        configurable: !0
    })
}
var t = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
t.register("eMRqp", (function(r, s) {
    e(r.exports, "useQuery", (function() {
        return u
    }));
    var n = t("46kpL"),
        i = t("bo3H2"),
        o = t("bncSc");

    function u(e, t, r) {
        const s = (0, n.parseQueryArgs)(e, t, r);
        return (0, o.useBaseQuery)(s, i.QueryObserver)
    }
})), t.register("bo3H2", (function(r, s) {
    e(r.exports, "QueryObserver", (function() {
        return c
    }));
    var n = t("46kpL"),
        i = t("j6pnp"),
        o = t("5uWxq"),
        u = t("6GJQG"),
        a = t("bgjsc");
    class c extends u.Subscribable {
        bindMethods() {
            this.remove = this.remove.bind(this), this.refetch = this.refetch.bind(this)
        }
        onSubscribe() {
            1 === this.listeners.length && (this.currentQuery.addObserver(this), l(this.currentQuery, this.options) && this.executeFetch(), this.updateTimers())
        }
        onUnsubscribe() {
            this.listeners.length || this.destroy()
        }
        shouldFetchOnReconnect() {
            return h(this.currentQuery, this.options, this.options.refetchOnReconnect)
        }
        shouldFetchOnWindowFocus() {
            return h(this.currentQuery, this.options, this.options.refetchOnWindowFocus)
        }
        destroy() {
            this.listeners = [], this.clearStaleTimeout(), this.clearRefetchInterval(), this.currentQuery.removeObserver(this)
        }
        setOptions(e, t) {
            const r = this.options,
                s = this.currentQuery;
            if (this.options = this.client.defaultQueryOptions(e), (0, n.shallowEqualObjects)(r, this.options) || this.client.getQueryCache().notify({
                    type: "observerOptionsUpdated",
                    query: this.currentQuery,
                    observer: this
                }), void 0 !== this.options.enabled && "boolean" != typeof this.options.enabled) throw new Error("Expected enabled to be a boolean");
            this.options.queryKey || (this.options.queryKey = r.queryKey), this.updateQuery();
            const i = this.hasListeners();
            i && d(this.currentQuery, s, this.options, r) && this.executeFetch(), this.updateResult(t), !i || this.currentQuery === s && this.options.enabled === r.enabled && this.options.staleTime === r.staleTime || this.updateStaleTimeout();
            const o = this.computeRefetchInterval();
            !i || this.currentQuery === s && this.options.enabled === r.enabled && o === this.currentRefetchInterval || this.updateRefetchInterval(o)
        }
        getOptimisticResult(e) {
            const t = this.client.getQueryCache().build(this.client, e);
            return this.createResult(t, e)
        }
        getCurrentResult() {
            return this.currentResult
        }
        trackResult(e) {
            const t = {};
            return Object.keys(e).forEach((r => {
                Object.defineProperty(t, r, {
                    configurable: !1,
                    enumerable: !0,
                    get: () => (this.trackedProps.add(r), e[r])
                })
            })), t
        }
        getCurrentQuery() {
            return this.currentQuery
        }
        remove() {
            this.client.getQueryCache().remove(this.currentQuery)
        }
        refetch({
            refetchPage: e,
            ...t
        } = {}) {
            return this.fetch({
                ...t,
                meta: {
                    refetchPage: e
                }
            })
        }
        fetchOptimistic(e) {
            const t = this.client.defaultQueryOptions(e),
                r = this.client.getQueryCache().build(this.client, t);
            return r.isFetchingOptimistic = !0, r.fetch().then((() => this.createResult(r, t)))
        }
        fetch(e) {
            var t;
            return this.executeFetch({
                ...e,
                cancelRefetch: null == (t = e.cancelRefetch) || t
            }).then((() => (this.updateResult(), this.currentResult)))
        }
        executeFetch(e) {
            this.updateQuery();
            let t = this.currentQuery.fetch(this.options, e);
            return null != e && e.throwOnError || (t = t.catch(n.noop)), t
        }
        updateStaleTimeout() {
            if (this.clearStaleTimeout(), n.isServer || this.currentResult.isStale || !(0, n.isValidTimeout)(this.options.staleTime)) return;
            const e = (0, n.timeUntilStale)(this.currentResult.dataUpdatedAt, this.options.staleTime) + 1;
            this.staleTimeoutId = setTimeout((() => {
                this.currentResult.isStale || this.updateResult()
            }), e)
        }
        computeRefetchInterval() {
            var e;
            return "function" == typeof this.options.refetchInterval ? this.options.refetchInterval(this.currentResult.data, this.currentQuery) : null != (e = this.options.refetchInterval) && e
        }
        updateRefetchInterval(e) {
            this.clearRefetchInterval(), this.currentRefetchInterval = e, !n.isServer && !1 !== this.options.enabled && (0, n.isValidTimeout)(this.currentRefetchInterval) && 0 !== this.currentRefetchInterval && (this.refetchIntervalId = setInterval((() => {
                (this.options.refetchIntervalInBackground || o.focusManager.isFocused()) && this.executeFetch()
            }), this.currentRefetchInterval))
        }
        updateTimers() {
            this.updateStaleTimeout(), this.updateRefetchInterval(this.computeRefetchInterval())
        }
        clearStaleTimeout() {
            this.staleTimeoutId && (clearTimeout(this.staleTimeoutId), this.staleTimeoutId = void 0)
        }
        clearRefetchInterval() {
            this.refetchIntervalId && (clearInterval(this.refetchIntervalId), this.refetchIntervalId = void 0)
        }
        createResult(e, t) {
            const r = this.currentQuery,
                s = this.options,
                i = this.currentResult,
                o = this.currentResultState,
                u = this.currentResultOptions,
                c = e !== r,
                h = c ? e.state : this.currentQueryInitialState,
                p = c ? this.currentResult : this.previousQueryResult,
                {
                    state: y
                } = e;
            let R, {
                    dataUpdatedAt: v,
                    error: g,
                    errorUpdatedAt: b,
                    fetchStatus: S,
                    status: m
                } = y,
                E = !1,
                Q = !1;
            if (t._optimisticResults) {
                const n = this.hasListeners(),
                    i = !n && l(e, t),
                    o = n && d(e, r, t, s);
                (i || o) && (S = (0, a.canFetch)(e.options.networkMode) ? "fetching" : "paused", v || (m = "loading")), "isRestoring" === t._optimisticResults && (S = "idle")
            }
            if (t.keepPreviousData && !y.dataUpdatedAt && null != p && p.isSuccess && "error" !== m) R = p.data, v = p.dataUpdatedAt, m = p.status, E = !0;
            else if (t.select && void 0 !== y.data)
                if (i && y.data === (null == o ? void 0 : o.data) && t.select === this.selectFn) R = this.selectResult;
                else try {
                    this.selectFn = t.select, R = t.select(y.data), R = (0, n.replaceData)(null == i ? void 0 : i.data, R, t), this.selectResult = R, this.selectError = null
                } catch (e) {
                    this.selectError = e
                } else R = y.data;
            if (void 0 !== t.placeholderData && void 0 === R && "loading" === m) {
                let e;
                if (null != i && i.isPlaceholderData && t.placeholderData === (null == u ? void 0 : u.placeholderData)) e = i.data;
                else if (e = "function" == typeof t.placeholderData ? t.placeholderData() : t.placeholderData, t.select && void 0 !== e) try {
                    e = t.select(e), this.selectError = null
                } catch (e) {
                    this.selectError = e
                }
                void 0 !== e && (m = "success", R = (0, n.replaceData)(null == i ? void 0 : i.data, e, t), Q = !0)
            }
            this.selectError && (g = this.selectError, R = this.selectResult, b = Date.now(), m = "error");
            const C = "fetching" === S,
                O = "loading" === m,
                I = "error" === m;
            return {
                status: m,
                fetchStatus: S,
                isLoading: O,
                isSuccess: "success" === m,
                isError: I,
                isInitialLoading: O && C,
                data: R,
                dataUpdatedAt: v,
                error: g,
                errorUpdatedAt: b,
                failureCount: y.fetchFailureCount,
                failureReason: y.fetchFailureReason,
                errorUpdateCount: y.errorUpdateCount,
                isFetched: y.dataUpdateCount > 0 || y.errorUpdateCount > 0,
                isFetchedAfterMount: y.dataUpdateCount > h.dataUpdateCount || y.errorUpdateCount > h.errorUpdateCount,
                isFetching: C,
                isRefetching: C && !O,
                isLoadingError: I && 0 === y.dataUpdatedAt,
                isPaused: "paused" === S,
                isPlaceholderData: Q,
                isPreviousData: E,
                isRefetchError: I && 0 !== y.dataUpdatedAt,
                isStale: f(e, t),
                refetch: this.refetch,
                remove: this.remove
            }
        }
        updateResult(e) {
            const t = this.currentResult,
                r = this.createResult(this.currentQuery, this.options);
            if (this.currentResultState = this.currentQuery.state, this.currentResultOptions = this.options, (0, n.shallowEqualObjects)(r, t)) return;
            this.currentResult = r;
            const s = {
                cache: !0
            };
            !1 !== (null == e ? void 0 : e.listeners) && (() => {
                if (!t) return !0;
                const {
                    notifyOnChangeProps: e
                } = this.options;
                if ("all" === e || !e && !this.trackedProps.size) return !0;
                const r = new Set(null != e ? e : this.trackedProps);
                return this.options.useErrorBoundary && r.add("error"), Object.keys(this.currentResult).some((e => {
                    const s = e;
                    return this.currentResult[s] !== t[s] && r.has(s)
                }))
            })() && (s.listeners = !0), this.notify({
                ...s,
                ...e
            })
        }
        updateQuery() {
            const e = this.client.getQueryCache().build(this.client, this.options);
            if (e === this.currentQuery) return;
            const t = this.currentQuery;
            this.currentQuery = e, this.currentQueryInitialState = e.state, this.previousQueryResult = this.currentResult, this.hasListeners() && (null == t || t.removeObserver(this), e.addObserver(this))
        }
        onQueryUpdate(e) {
            const t = {};
            "success" === e.type ? t.onSuccess = !e.manual : "error" !== e.type || (0, a.isCancelledError)(e.error) || (t.onError = !0), this.updateResult(t), this.hasListeners() && this.updateTimers()
        }
        notify(e) {
            i.notifyManager.batch((() => {
                var t, r, s, n;
                if (e.onSuccess) null == (t = (r = this.options).onSuccess) || t.call(r, this.currentResult.data), null == (s = (n = this.options).onSettled) || s.call(n, this.currentResult.data, null);
                else if (e.onError) {
                    var i, o, u, a;
                    null == (i = (o = this.options).onError) || i.call(o, this.currentResult.error), null == (u = (a = this.options).onSettled) || u.call(a, void 0, this.currentResult.error)
                }
                e.listeners && this.listeners.forEach((e => {
                    e(this.currentResult)
                })), e.cache && this.client.getQueryCache().notify({
                    query: this.currentQuery,
                    type: "observerResultsUpdated"
                })
            }))
        }
        constructor(e, t) {
            super(), this.client = e, this.options = t, this.trackedProps = new Set, this.selectError = null, this.bindMethods(), this.setOptions(t)
        }
    }

    function l(e, t) {
        return function(e, t) {
            return !(!1 === t.enabled || e.state.dataUpdatedAt || "error" === e.state.status && !1 === t.retryOnMount)
        }(e, t) || e.state.dataUpdatedAt > 0 && h(e, t, t.refetchOnMount)
    }

    function h(e, t, r) {
        if (!1 !== t.enabled) {
            const s = "function" == typeof r ? r(e) : r;
            return "always" === s || !1 !== s && f(e, t)
        }
        return !1
    }

    function d(e, t, r, s) {
        return !1 !== r.enabled && (e !== t || !1 === s.enabled) && (!r.suspense || "error" !== e.state.status) && f(e, r)
    }

    function f(e, t) {
        return e.isStaleByTime(t.staleTime)
    }
})), t.register("bncSc", (function(r, s) {
    e(r.exports, "useBaseQuery", (function() {
        return d
    }));
    var n = t("fywoC"),
        i = t("42epJ"),
        o = t("j6pnp"),
        u = t("6ZDNw"),
        a = t("dhSIL"),
        c = t("kRhzV"),
        l = t("fQMWh"),
        h = t("8aW72");

    function d(e, t) {
        const r = (0, a.useQueryClient)({
                context: e.context
            }),
            s = (0, c.useIsRestoring)(),
            d = (0, u.useQueryErrorResetBoundary)(),
            f = r.defaultQueryOptions(e);
        f._optimisticResults = s ? "isRestoring" : "optimistic", f.onError && (f.onError = o.notifyManager.batchCalls(f.onError)), f.onSuccess && (f.onSuccess = o.notifyManager.batchCalls(f.onSuccess)), f.onSettled && (f.onSettled = o.notifyManager.batchCalls(f.onSettled)), (0, h.ensureStaleTime)(f), (0, l.ensurePreventErrorBoundaryRetry)(f, d), (0, l.useClearResetErrorBoundary)(d);
        const [p] = n.useState((() => new t(r, f))), y = p.getOptimisticResult(f);
        if ((0, i.useSyncExternalStore)(n.useCallback((e => s ? () => {} : p.subscribe(o.notifyManager.batchCalls(e))), [p, s]), (() => p.getCurrentResult()), (() => p.getCurrentResult())), n.useEffect((() => {
                p.setOptions(f, {
                    listeners: !1
                })
            }), [f, p]), (0, h.shouldSuspend)(f, y, s)) throw (0, h.fetchOptimistic)(f, p, d);
        if ((0, l.getHasError)({
                result: y,
                errorResetBoundary: d,
                useErrorBoundary: f.useErrorBoundary,
                query: p.getCurrentQuery()
            })) throw y.error;
        return f.notifyOnChangeProps ? y : p.trackResult(y)
    }
})), t.register("42epJ", (function(r, s) {
    e(r.exports, "useSyncExternalStore", (function() {
        return n
    }));
    const n = t("7Y9S5").useSyncExternalStore
})), t.register("7Y9S5", (function(e, r) {
    e.exports = t("cszZ9")
})), t.register("cszZ9", (function(r, s) {
    /**
     * @license React
     * use-sync-external-store-shim.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var n;
    e(r.exports, "useSyncExternalStore", (function() {
        return n
    }), (function(e) {
        return n = e
    }));
    var i = t("fywoC");
    var o = "function" == typeof Object.is ? Object.is : function(e, t) {
            return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
        },
        u = i.useState,
        a = i.useEffect,
        c = i.useLayoutEffect,
        l = i.useDebugValue;

    function h(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var r = t();
            return !o(e, r)
        } catch (e) {
            return !0
        }
    }
    var d = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function(e, t) {
        return t()
    } : function(e, t) {
        var r = t(),
            s = u({
                inst: {
                    value: r,
                    getSnapshot: t
                }
            }),
            n = s[0].inst,
            i = s[1];
        return c((function() {
            n.value = r, n.getSnapshot = t, h(n) && i({
                inst: n
            })
        }), [e, r, t]), a((function() {
            return h(n) && i({
                inst: n
            }), e((function() {
                h(n) && i({
                    inst: n
                })
            }))
        }), [e]), l(r), r
    };
    n = void 0 !== i.useSyncExternalStore ? i.useSyncExternalStore : d
})), t.register("6ZDNw", (function(r, s) {
    e(r.exports, "useQueryErrorResetBoundary", (function() {
        return u
    }));
    var n = t("fywoC");

    function i() {
        let e = !1;
        return {
            clearReset: () => {
                e = !1
            },
            reset: () => {
                e = !0
            },
            isReset: () => e
        }
    }
    const o = n.createContext(i()),
        u = () => n.useContext(o)
})), t.register("kRhzV", (function(r, s) {
    e(r.exports, "useIsRestoring", (function() {
        return o
    }));
    var n = t("fywoC");
    const i = n.createContext(!1),
        o = () => n.useContext(i);
    i.Provider
})), t.register("fQMWh", (function(r, s) {
    e(r.exports, "ensurePreventErrorBoundaryRetry", (function() {
        return o
    })), e(r.exports, "useClearResetErrorBoundary", (function() {
        return u
    })), e(r.exports, "getHasError", (function() {
        return a
    }));
    var n = t("fywoC"),
        i = t("gmsrf");
    const o = (e, t) => {
            (e.suspense || e.useErrorBoundary) && (t.isReset() || (e.retryOnMount = !1))
        },
        u = e => {
            n.useEffect((() => {
                e.clearReset()
            }), [e])
        },
        a = ({
            result: e,
            errorResetBoundary: t,
            useErrorBoundary: r,
            query: s
        }) => e.isError && !t.isReset() && !e.isFetching && (0, i.shouldThrowError)(r, [e.error, s])
})), t.register("gmsrf", (function(t, r) {
    function s(e, t) {
        return "function" == typeof e ? e(...t) : !!e
    }
    e(t.exports, "shouldThrowError", (function() {
        return s
    }))
})), t.register("8aW72", (function(t, r) {
    e(t.exports, "ensureStaleTime", (function() {
        return s
    })), e(t.exports, "shouldSuspend", (function() {
        return n
    })), e(t.exports, "fetchOptimistic", (function() {
        return i
    }));
    const s = e => {
            e.suspense && "number" != typeof e.staleTime && (e.staleTime = 1e3)
        },
        n = (e, t, r) => (null == e ? void 0 : e.suspense) && ((e, t) => e.isLoading && e.isFetching && !t)(t, r),
        i = (e, t, r) => t.fetchOptimistic(e).then((({
            data: t
        }) => {
            null == e.onSuccess || e.onSuccess(t), null == e.onSettled || e.onSettled(t, null)
        })).catch((t => {
            r.clearReset(), null == e.onError || e.onError(t), null == e.onSettled || e.onSettled(void 0, t)
        }))
}));