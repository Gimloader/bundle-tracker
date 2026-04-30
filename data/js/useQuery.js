import {
    cv as V,
    cw as x,
    cx as K,
    cy as D,
    cz as P,
    cA as z,
    cB as G,
    cC as H,
    cD as k,
    cE as N,
    cF as b,
    bI as W,
    r as S,
    cG as J,
    cH as X
} from "./_index.js";
class Y extends V {
    constructor(e, t) {
        super(), this.client = e, this.options = t, this.trackedProps = new Set, this.selectError = null, this.bindMethods(), this.setOptions(t)
    }
    bindMethods() {
        this.remove = this.remove.bind(this), this.refetch = this.refetch.bind(this)
    }
    onSubscribe() {
        this.listeners.size === 1 && (this.currentQuery.addObserver(this), A(this.currentQuery, this.options) && this.executeFetch(), this.updateTimers())
    }
    onUnsubscribe() {
        this.hasListeners() || this.destroy()
    }
    shouldFetchOnReconnect() {
        return F(this.currentQuery, this.options, this.options.refetchOnReconnect)
    }
    shouldFetchOnWindowFocus() {
        return F(this.currentQuery, this.options, this.options.refetchOnWindowFocus)
    }
    destroy() {
        this.listeners = new Set, this.clearStaleTimeout(), this.clearRefetchInterval(), this.currentQuery.removeObserver(this)
    }
    setOptions(e, t) {
        const s = this.options,
            c = this.currentQuery;
        if (this.options = this.client.defaultQueryOptions(e), x(s, this.options) || this.client.getQueryCache().notify({
                type: "observerOptionsUpdated",
                query: this.currentQuery,
                observer: this
            }), typeof this.options.enabled < "u" && typeof this.options.enabled != "boolean") throw new Error("Expected enabled to be a boolean");
        this.options.queryKey || (this.options.queryKey = s.queryKey), this.updateQuery();
        const n = this.hasListeners();
        n && L(this.currentQuery, c, this.options, s) && this.executeFetch(), this.updateResult(t), n && (this.currentQuery !== c || this.options.enabled !== s.enabled || this.options.staleTime !== s.staleTime) && this.updateStaleTimeout();
        const u = this.computeRefetchInterval();
        n && (this.currentQuery !== c || this.options.enabled !== s.enabled || u !== this.currentRefetchInterval) && this.updateRefetchInterval(u)
    }
    getOptimisticResult(e) {
        const t = this.client.getQueryCache().build(this.client, e),
            s = this.createResult(t, e);
        return _(this, s, e) && (this.currentResult = s, this.currentResultOptions = this.options, this.currentResultState = this.currentQuery.state), s
    }
    getCurrentResult() {
        return this.currentResult
    }
    trackResult(e) {
        const t = {};
        return Object.keys(e).forEach(s => {
            Object.defineProperty(t, s, {
                configurable: !1,
                enumerable: !0,
                get: () => (this.trackedProps.add(s), e[s])
            })
        }), t
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
            s = this.client.getQueryCache().build(this.client, t);
        return s.isFetchingOptimistic = !0, s.fetch().then(() => this.createResult(s, t))
    }
    fetch(e) {
        var t;
        return this.executeFetch({
            ...e,
            cancelRefetch: (t = e.cancelRefetch) != null ? t : !0
        }).then(() => (this.updateResult(), this.currentResult))
    }
    executeFetch(e) {
        this.updateQuery();
        let t = this.currentQuery.fetch(this.options, e);
        return e != null && e.throwOnError || (t = t.catch(K)), t
    }
    updateStaleTimeout() {
        if (this.clearStaleTimeout(), D || this.currentResult.isStale || !P(this.options.staleTime)) return;
        const t = z(this.currentResult.dataUpdatedAt, this.options.staleTime) + 1;
        this.staleTimeoutId = setTimeout(() => {
            this.currentResult.isStale || this.updateResult()
        }, t)
    }
    computeRefetchInterval() {
        var e;
        return typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(this.currentResult.data, this.currentQuery) : (e = this.options.refetchInterval) != null ? e : !1
    }
    updateRefetchInterval(e) {
        this.clearRefetchInterval(), this.currentRefetchInterval = e, !(D || this.options.enabled === !1 || !P(this.currentRefetchInterval) || this.currentRefetchInterval === 0) && (this.refetchIntervalId = setInterval(() => {
            (this.options.refetchIntervalInBackground || G.isFocused()) && this.executeFetch()
        }, this.currentRefetchInterval))
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
        const s = this.currentQuery,
            c = this.options,
            n = this.currentResult,
            u = this.currentResultState,
            a = this.currentResultOptions,
            l = e !== s,
            y = l ? e.state : this.currentQueryInitialState,
            f = l ? this.currentResult : this.previousQueryResult,
            {
                state: i
            } = e;
        let {
            dataUpdatedAt: o,
            error: R,
            errorUpdatedAt: m,
            fetchStatus: h,
            status: d
        } = i, U = !1, w = !1, v;
        if (t._optimisticResults) {
            const p = this.hasListeners(),
                C = !p && A(e, t),
                q = p && L(e, s, t, c);
            (C || q) && (h = H(e.options.networkMode) ? "fetching" : "paused", o || (d = "loading")), t._optimisticResults === "isRestoring" && (h = "idle")
        }
        if (t.keepPreviousData && !i.dataUpdatedAt && f != null && f.isSuccess && d !== "error") v = f.data, o = f.dataUpdatedAt, d = f.status, U = !0;
        else if (t.select && typeof i.data < "u")
            if (n && i.data === (u == null ? void 0 : u.data) && t.select === this.selectFn) v = this.selectResult;
            else try {
                this.selectFn = t.select, v = t.select(i.data), v = k(n == null ? void 0 : n.data, v, t), this.selectResult = v, this.selectError = null
            } catch (p) {
                this.selectError = p
            } else v = i.data;
        if (typeof t.placeholderData < "u" && typeof v > "u" && d === "loading") {
            let p;
            if (n != null && n.isPlaceholderData && t.placeholderData === (a == null ? void 0 : a.placeholderData)) p = n.data;
            else if (p = typeof t.placeholderData == "function" ? t.placeholderData() : t.placeholderData, t.select && typeof p < "u") try {
                p = t.select(p), this.selectError = null
            } catch (C) {
                this.selectError = C
            }
            typeof p < "u" && (d = "success", v = k(n == null ? void 0 : n.data, p, t), w = !0)
        }
        this.selectError && (R = this.selectError, v = this.selectResult, m = Date.now(), d = "error");
        const E = h === "fetching",
            Q = d === "loading",
            g = d === "error";
        return {
            status: d,
            fetchStatus: h,
            isLoading: Q,
            isSuccess: d === "success",
            isError: g,
            isInitialLoading: Q && E,
            data: v,
            dataUpdatedAt: o,
            error: R,
            errorUpdatedAt: m,
            failureCount: i.fetchFailureCount,
            failureReason: i.fetchFailureReason,
            errorUpdateCount: i.errorUpdateCount,
            isFetched: i.dataUpdateCount > 0 || i.errorUpdateCount > 0,
            isFetchedAfterMount: i.dataUpdateCount > y.dataUpdateCount || i.errorUpdateCount > y.errorUpdateCount,
            isFetching: E,
            isRefetching: E && !Q,
            isLoadingError: g && i.dataUpdatedAt === 0,
            isPaused: h === "paused",
            isPlaceholderData: w,
            isPreviousData: U,
            isRefetchError: g && i.dataUpdatedAt !== 0,
            isStale: T(e, t),
            refetch: this.refetch,
            remove: this.remove
        }
    }
    updateResult(e) {
        const t = this.currentResult,
            s = this.createResult(this.currentQuery, this.options);
        if (this.currentResultState = this.currentQuery.state, this.currentResultOptions = this.options, x(s, t)) return;
        this.currentResult = s;
        const c = {
                cache: !0
            },
            n = () => {
                if (!t) return !0;
                const {
                    notifyOnChangeProps: u
                } = this.options, a = typeof u == "function" ? u() : u;
                if (a === "all" || !a && !this.trackedProps.size) return !0;
                const l = new Set(a ?? this.trackedProps);
                return this.options.useErrorBoundary && l.add("error"), Object.keys(this.currentResult).some(y => {
                    const f = y;
                    return this.currentResult[f] !== t[f] && l.has(f)
                })
            };
        (e == null ? void 0 : e.listeners) !== !1 && n() && (c.listeners = !0), this.notify({
            ...c,
            ...e
        })
    }
    updateQuery() {
        const e = this.client.getQueryCache().build(this.client, this.options);
        if (e === this.currentQuery) return;
        const t = this.currentQuery;
        this.currentQuery = e, this.currentQueryInitialState = e.state, this.previousQueryResult = this.currentResult, this.hasListeners() && (t == null || t.removeObserver(this), e.addObserver(this))
    }
    onQueryUpdate(e) {
        const t = {};
        e.type === "success" ? t.onSuccess = !e.manual : e.type === "error" && !N(e.error) && (t.onError = !0), this.updateResult(t), this.hasListeners() && this.updateTimers()
    }
    notify(e) {
        b.batch(() => {
            if (e.onSuccess) {
                var t, s, c, n;
                (t = (s = this.options).onSuccess) == null || t.call(s, this.currentResult.data), (c = (n = this.options).onSettled) == null || c.call(n, this.currentResult.data, null)
            } else if (e.onError) {
                var u, a, l, y;
                (u = (a = this.options).onError) == null || u.call(a, this.currentResult.error), (l = (y = this.options).onSettled) == null || l.call(y, void 0, this.currentResult.error)
            }
            e.listeners && this.listeners.forEach(({
                listener: f
            }) => {
                f(this.currentResult)
            }), e.cache && this.client.getQueryCache().notify({
                query: this.currentQuery,
                type: "observerResultsUpdated"
            })
        })
    }
}

function Z(r, e) {
    return e.enabled !== !1 && !r.state.dataUpdatedAt && !(r.state.status === "error" && e.retryOnMount === !1)
}

function A(r, e) {
    return Z(r, e) || r.state.dataUpdatedAt > 0 && F(r, e, e.refetchOnMount)
}

function F(r, e, t) {
    if (e.enabled !== !1) {
        const s = typeof t == "function" ? t(r) : t;
        return s === "always" || s !== !1 && T(r, e)
    }
    return !1
}

function L(r, e, t, s) {
    return t.enabled !== !1 && (r !== e || s.enabled === !1) && (!t.suspense || r.state.status !== "error") && T(r, t)
}

function T(r, e) {
    return r.isStaleByTime(e.staleTime)
}

function _(r, e, t) {
    return t.keepPreviousData ? !1 : t.placeholderData !== void 0 ? e.isPlaceholderData : !x(r.getCurrentResult(), e)
}
var I = {
        exports: {}
    },
    O = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var M;

function $() {
    if (M) return O;
    M = 1;
    var r = W();

    function e(i, o) {
        return i === o && (i !== 0 || 1 / i === 1 / o) || i !== i && o !== o
    }
    var t = typeof Object.is == "function" ? Object.is : e,
        s = r.useState,
        c = r.useEffect,
        n = r.useLayoutEffect,
        u = r.useDebugValue;

    function a(i, o) {
        var R = o(),
            m = s({
                inst: {
                    value: R,
                    getSnapshot: o
                }
            }),
            h = m[0].inst,
            d = m[1];
        return n(function() {
            h.value = R, h.getSnapshot = o, l(h) && d({
                inst: h
            })
        }, [i, R, o]), c(function() {
            return l(h) && d({
                inst: h
            }), i(function() {
                l(h) && d({
                    inst: h
                })
            })
        }, [i]), u(R), R
    }

    function l(i) {
        var o = i.getSnapshot;
        i = i.value;
        try {
            var R = o();
            return !t(i, R)
        } catch {
            return !0
        }
    }

    function y(i, o) {
        return o()
    }
    var f = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? y : a;
    return O.useSyncExternalStore = r.useSyncExternalStore !== void 0 ? r.useSyncExternalStore : f, O
}
var B;

function ee() {
    return B || (B = 1, I.exports = $()), I.exports
}
var te = ee();
const re = te.useSyncExternalStore,
    j = S.createContext(!1),
    se = () => S.useContext(j);
j.Provider;

function ne() {
    let r = !1;
    return {
        clearReset: () => {
            r = !1
        },
        reset: () => {
            r = !0
        },
        isReset: () => r
    }
}
const ie = S.createContext(ne()),
    ue = () => S.useContext(ie);

function ce(r, e) {
    return typeof r == "function" ? r(...e) : !!r
}
const ae = (r, e) => {
        (r.suspense || r.useErrorBoundary) && (e.isReset() || (r.retryOnMount = !1))
    },
    oe = r => {
        S.useEffect(() => {
            r.clearReset()
        }, [r])
    },
    le = ({
        result: r,
        errorResetBoundary: e,
        useErrorBoundary: t,
        query: s
    }) => r.isError && !e.isReset() && !r.isFetching && ce(t, [r.error, s]),
    he = r => {
        r.suspense && typeof r.staleTime != "number" && (r.staleTime = 1e3)
    },
    de = (r, e) => r.isLoading && r.isFetching && !e,
    fe = (r, e, t) => (r == null ? void 0 : r.suspense) && de(e, t),
    pe = (r, e, t) => e.fetchOptimistic(r).then(({
        data: s
    }) => {
        r.onSuccess == null || r.onSuccess(s), r.onSettled == null || r.onSettled(s, null)
    }).catch(s => {
        t.clearReset(), r.onError == null || r.onError(s), r.onSettled == null || r.onSettled(void 0, s)
    });

function ye(r, e) {
    const t = J({
            context: r.context
        }),
        s = se(),
        c = ue(),
        n = t.defaultQueryOptions(r);
    n._optimisticResults = s ? "isRestoring" : "optimistic", n.onError && (n.onError = b.batchCalls(n.onError)), n.onSuccess && (n.onSuccess = b.batchCalls(n.onSuccess)), n.onSettled && (n.onSettled = b.batchCalls(n.onSettled)), he(n), ae(n, c), oe(c);
    const [u] = S.useState(() => new e(t, n)), a = u.getOptimisticResult(n);
    if (re(S.useCallback(l => {
            const y = s ? () => {} : u.subscribe(b.batchCalls(l));
            return u.updateResult(), y
        }, [u, s]), () => u.getCurrentResult(), () => u.getCurrentResult()), S.useEffect(() => {
            u.setOptions(n, {
                listeners: !1
            })
        }, [n, u]), fe(n, a, s)) throw pe(n, u, c);
    if (le({
            result: a,
            errorResetBoundary: c,
            useErrorBoundary: n.useErrorBoundary,
            query: u.getCurrentQuery()
        })) throw a.error;
    return n.notifyOnChangeProps ? a : u.trackResult(a)
}

function Se(r, e, t) {
    const s = X(r, e, t);
    return ye(s, Y)
}
export {
    Y as Q, ye as a, Se as u
};