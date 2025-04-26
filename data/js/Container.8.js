function a(a, b, i, g) {
    Object.defineProperty(a, b, {
        get: i,
        set: g,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('IsAdf', function(i, g) {
    a(i.exports, 'useQuery', function() {
        return f;
    });
    var c = b('pXMSO'),
        d = b('PX4Jh'),
        e = b('LEJ8c');

    function f(a, b, i) {
        const g = (0, c.parseQueryArgs)(a, b, i);
        return (0, e.useBaseQuery)(g, d.QueryObserver);
    }
}), b.register('PX4Jh', function(i, j) {
    a(i.exports, 'QueryObserver', function() {
        return h;
    });
    var c = b('pXMSO'),
        d = b('VvzNu'),
        e = b('t2COX'),
        f = b('pWcNG'),
        g = b('Ayt7A');
    class h extends f.Subscribable {
        bindMethods() {
            this.remove = this.remove.bind(this), this.refetch = this.refetch.bind(this);
        }
        onSubscribe() {
            1 === this.listeners.length && (this.currentQuery.addObserver(this), k(this.currentQuery, this.options) && this.executeFetch(), this.updateTimers());
        }
        onUnsubscribe() {
            this.listeners.length || this.destroy();
        }
        shouldFetchOnReconnect() {
            return q(this.currentQuery, this.options, this.options.refetchOnReconnect);
        }
        shouldFetchOnWindowFocus() {
            return q(this.currentQuery, this.options, this.options.refetchOnWindowFocus);
        }
        destroy() {
            this.listeners = [], this.clearStaleTimeout(), this.clearRefetchInterval(), this.currentQuery.removeObserver(this);
        }
        setOptions(a, b) {
            const i = this.options,
                j = this.currentQuery;
            if (this.options = this.client.defaultQueryOptions(a), (0, c.shallowEqualObjects)(i, this.options) || this.client.getQueryCache().notify({
                    type: 'observerOptionsUpdated',
                    query: this.currentQuery,
                    observer: this
                }), void 0 !== this.options.enabled && 'boolean' != typeof this.options.enabled)
                throw new Error('Expected enabled to be a boolean');
            this.options.queryKey || (this.options.queryKey = i.queryKey), this.updateQuery();
            const k = this.hasListeners();
            k && m(this.currentQuery, j, this.options, i) && this.executeFetch(), this.updateResult(b), !k || this.currentQuery === j && this.options.enabled === i.enabled && this.options.staleTime === i.staleTime || this.updateStaleTimeout();
            const l = this.computeRefetchInterval();
            !k || this.currentQuery === j && this.options.enabled === i.enabled && l === this.currentRefetchInterval || this.updateRefetchInterval(l);
        }
        getOptimisticResult(a) {
            const i = this.client.getQueryCache().build(this.client, a);
            return this.createResult(i, a);
        }
        getCurrentResult() {
            return this.currentResult;
        }
        trackResult(a) {
            const i = {};
            return Object.keys(a).forEach(l => {
                Object.defineProperty(i, l, {
                    configurable: !1,
                    enumerable: !0,
                    get: () => (this.trackedProps.add(l), a[l])
                });
            }), i;
        }
        getCurrentQuery() {
            return this.currentQuery;
        }
        remove() {
            this.client.getQueryCache().remove(this.currentQuery);
        }
        refetch({
            refetchPage: i,
            ...j
        } = {}) {
            return this.fetch({
                ...j,
                meta: {
                    refetchPage: i
                }
            });
        }
        fetchOptimistic(i) {
            const k = this.client.defaultQueryOptions(i),
                l = this.client.getQueryCache().build(this.client, k);
            return l.isFetchingOptimistic = !0, l.fetch().then(() => this.createResult(l, k));
        }
        fetch(i) {
            var k;
            return this.executeFetch({
                ...i,
                cancelRefetch: null == (k = i.cancelRefetch) || k
            }).then(() => (this.updateResult(), this.currentResult));
        }
        executeFetch(i) {
            this.updateQuery();
            let k = this.currentQuery.fetch(this.options, i);
            return null != i && i.throwOnError || (k = k.catch(c.noop)), k;
        }
        updateStaleTimeout() {
            if (this.clearStaleTimeout(), c.isServer || this.currentResult.isStale || !(0, c.isValidTimeout)(this.options.staleTime))
                return;
            const l = (0, c.timeUntilStale)(this.currentResult.dataUpdatedAt, this.options.staleTime) + 1;
            this.staleTimeoutId = setTimeout(() => {
                this.currentResult.isStale || this.updateResult();
            }, l);
        }
        computeRefetchInterval() {
            var m;
            return 'function' == typeof this.options.refetchInterval ? this.options.refetchInterval(this.currentResult.data, this.currentQuery) : null != (m = this.options.refetchInterval) && m;
        }
        updateRefetchInterval(i) {
            this.clearRefetchInterval(), this.currentRefetchInterval = i, !c.isServer && !1 !== this.options.enabled && (0, c.isValidTimeout)(this.currentRefetchInterval) && 0 !== this.currentRefetchInterval && (this.refetchIntervalId = setInterval(() => {
                (this.options.refetchIntervalInBackground || e.focusManager.isFocused()) && this.executeFetch();
            }, this.currentRefetchInterval));
        }
        updateTimers() {
            this.updateStaleTimeout(), this.updateRefetchInterval(this.computeRefetchInterval());
        }
        clearStaleTimeout() {
            this.staleTimeoutId && (clearTimeout(this.staleTimeoutId), this.staleTimeoutId = void 0);
        }
        clearRefetchInterval() {
            this.refetchIntervalId && (clearInterval(this.refetchIntervalId), this.refetchIntervalId = void 0);
        }
        createResult(i, j) {
            const k = this.currentQuery,
                l = this.options,
                m = this.currentResult,
                n = this.currentResultState,
                o = this.currentResultOptions,
                p = i !== k,
                q = p ? i.state : this.currentQueryInitialState,
                r = p ? this.currentResult : this.previousQueryResult,
                {
                    state: s
                } = t;
            let u, {
                    dataUpdatedAt: v,
                    error: w,
                    errorUpdatedAt: x,
                    fetchStatus: y,
                    status: z
                } = A,
                B = !1,
                C = !1;
            if (j._optimisticResults) {
                const D = this.hasListeners(),
                    E = !D && k(t, j),
                    F = D && m(t, k, j, l);
                (E || F) && (y = (0, g.canFetch)(t.options.networkMode) ? 'fetching' : 'paused', v || (z = 'loading')), 'isRestoring' === j._optimisticResults && (y = 'idle');
            }
            if (j.keepPreviousData && !A.dataUpdatedAt && null != r && r.isSuccess && 'error' !== z)
                u = r.data, v = r.dataUpdatedAt, z = r.status, B = !0;
            else if (j.select && void 0 !== A.data)
                if (m && A.data === (null == n ? void 0 : n.data) && j.select === this.selectFn)
                    u = this.selectResult;
                else
                    try {
                        this.selectFn = j.select, u = j.select(A.data), u = (0, c.replaceData)(null == m ? void 0 : m.data, u, j), this.selectResult = u, this.selectError = null;
                    } catch (t) {
                        this.selectError = t;
                    }
            else
                u = A.data;
            if (void 0 !== j.placeholderData && void 0 === u && 'loading' === z) {
                let D;
                if (null != m && m.isPlaceholderData && j.placeholderData === (null == o ? void 0 : o.placeholderData))
                    D = m.data;
                else if (D = 'function' == typeof j.placeholderData ? j.placeholderData() : j.placeholderData, j.select && void 0 !== D)
                    try {
                        D = j.select(D), this.selectError = null;
                    } catch (D) {
                        this.selectError = D;
                    }
                void 0 !== D && (z = 'success', u = (0, c.replaceData)(null == m ? void 0 : m.data, D, j), C = !0);
            }
            this.selectError && (w = this.selectError, u = this.selectResult, x = Date.now(), z = 'error');
            const D = 'fetching' === y,
                E = 'loading' === z,
                F = 'error' === z;
            return {
                status: z,
                fetchStatus: y,
                isLoading: E,
                isSuccess: 'success' === z,
                isError: F,
                isInitialLoading: E && D,
                data: u,
                dataUpdatedAt: v,
                error: w,
                errorUpdatedAt: x,
                failureCount: A.fetchFailureCount,
                failureReason: A.fetchFailureReason,
                errorUpdateCount: A.errorUpdateCount,
                isFetched: A.dataUpdateCount > 0 || A.errorUpdateCount > 0,
                isFetchedAfterMount: A.dataUpdateCount > q.dataUpdateCount || A.errorUpdateCount > q.errorUpdateCount,
                isFetching: D,
                isRefetching: D && !E,
                isLoadingError: F && 0 === A.dataUpdatedAt,
                isPaused: 'paused' === y,
                isPlaceholderData: C,
                isPreviousData: B,
                isRefetchError: F && 0 !== A.dataUpdatedAt,
                isStale: n(t, j),
                refetch: this.refetch,
                remove: this.remove
            };
        }
        updateResult(i) {
            const k = this.currentResult,
                l = this.createResult(this.currentQuery, this.options);
            if (this.currentResultState = this.currentQuery.state, this.currentResultOptions = this.options, (0, c.shallowEqualObjects)(l, k))
                return;
            this.currentResult = l;
            const m = {
                cache: !0
            };
            !1 !== (null == i ? void 0 : i.listeners) && (() => {
                if (!k)
                    return !0;
                const {
                    notifyOnChangeProps: n
                } = this.options;
                if ('all' === n || !n && !this.trackedProps.size)
                    return !0;
                const o = new Set(null != n ? n : this.trackedProps);
                return this.options.useErrorBoundary && o.add('error'), Object.keys(this.currentResult).some(n => {
                    const p = q;
                    return this.currentResult[p] !== k[p] && o.has(p);
                });
            })() && (m.listeners = !0), this.notify({
                ...m,
                ...i
            });
        }
        updateQuery() {
            const n = this.client.getQueryCache().build(this.client, this.options);
            if (n === this.currentQuery)
                return;
            const o = this.currentQuery;
            this.currentQuery = n, this.currentQueryInitialState = n.state, this.previousQueryResult = this.currentResult, this.hasListeners() && (null == o || o.removeObserver(this), n.addObserver(this));
        }
        onQueryUpdate(i) {
            const k = {};
            'success' === i.type ? k.onSuccess = !i.manual : 'error' !== i.type || (0, g.isCancelledError)(i.error) || (k.onError = !0), this.updateResult(k), this.hasListeners() && this.updateTimers();
        }
        notify(i) {
            d.notifyManager.batch(() => {
                var k, l, m, n;
                if (i.onSuccess)
                    null == (k = (l = this.options).onSuccess) || k.call(l, this.currentResult.data), null == (m = (n = this.options).onSettled) || m.call(n, this.currentResult.data, null);
                else if (i.onError) {
                    var o, p, q, r;
                    null == (o = (p = this.options).onError) || o.call(p, this.currentResult.error), null == (q = (r = this.options).onSettled) || q.call(r, void 0, this.currentResult.error);
                }
                i.listeners && this.listeners.forEach(i => {
                    i(this.currentResult);
                }), i.cache && this.client.getQueryCache().notify({
                    query: this.currentQuery,
                    type: 'observerResultsUpdated'
                });
            });
        }
        constructor(i, j) {
            super(), this.client = i, this.options = j, this.trackedProps = new Set(), this.selectError = null, this.bindMethods(), this.setOptions(j);
        }
    }

    function k(i, j) {
        return function(i, j) {
            return !(!1 === j.enabled || i.state.dataUpdatedAt || 'error' === i.state.status && !1 === j.retryOnMount);
        }(i, j) || i.state.dataUpdatedAt > 0 && l(i, j, j.refetchOnMount);
    }

    function l(i, j, l) {
        if (!1 !== j.enabled) {
            const m = 'function' == typeof l ? l(i) : l;
            return 'always' === m || !1 !== m && n(i, j);
        }
        return !1;
    }

    function m(i, j, l, m) {
        return !1 !== l.enabled && (i !== j || !1 === m.enabled) && (!l.suspense || 'error' !== i.state.status) && n(i, l);
    }

    function n(i, j) {
        return i.isStaleByTime(j.staleTime);
    }
}), b.register('LEJ8c', function(l, m) {
    a(l.exports, 'useBaseQuery', function() {
        return k;
    });
    var c = b('uPP4W'),
        d = b('p58GX'),
        e = b('VvzNu'),
        f = b('hiqi3'),
        g = b('bmRaR'),
        h = b('UuP2G'),
        i = b('54ICr'),
        j = b('5LKWG');

    function k(a, b) {
        const l = (0, g.useQueryClient)({
                context: a.context
            }),
            m = (0, h.useIsRestoring)(),
            n = (0, f.useQueryErrorResetBoundary)(),
            o = l.defaultQueryOptions(a);
        o._optimisticResults = m ? 'isRestoring' : 'optimistic', o.onError && (o.onError = e.notifyManager.batchCalls(o.onError)), o.onSuccess && (o.onSuccess = e.notifyManager.batchCalls(o.onSuccess)), o.onSettled && (o.onSettled = e.notifyManager.batchCalls(o.onSettled)), (0, j.ensureStaleTime)(o), (0, i.ensurePreventErrorBoundaryRetry)(o, n), (0, i.useClearResetErrorBoundary)(n);
        const [p] = c.useState(() => new b(l, o)), q = p.getOptimisticResult(o);
        if ((0, d.useSyncExternalStore)(c.useCallback(a => m ? () => {} : p.subscribe(e.notifyManager.batchCalls(a)), [
                p,
                m
            ]), () => p.getCurrentResult(), () => p.getCurrentResult()), c.useEffect(() => {
                p.setOptions(o, {
                    listeners: !1
                });
            }, [
                o,
                p
            ]), (0, j.shouldSuspend)(o, q, m))
            throw (0, j.fetchOptimistic)(o, p, n);
        if ((0, i.getHasError)({
                result: q,
                errorResetBoundary: n,
                useErrorBoundary: o.useErrorBoundary,
                query: p.getCurrentQuery()
            }))
            throw q.error;
        return o.notifyOnChangeProps ? q : p.trackResult(q);
    }
}), b.register('p58GX', function(l, m) {
    a(l.exports, 'useSyncExternalStore', function() {
        return c;
    });
    const c = b('ZnzHs').useSyncExternalStore;
}), b.register('ZnzHs', function(a, l) {
    a.exports = b('MwTGU');
}), b.register('MwTGU', function(l, m) {
    var c;
    a(l.exports, 'useSyncExternalStore', function() {
        return c;
    }, function(a) {
        return c = a;
    });
    var d = b('uPP4W');
    var e = 'function' == typeof Object.is ? Object.is : function(a, b) {
            return a === b && (0 !== a || 1 / a == 1 / b) || a != a && b != b;
        },
        f = d.useState,
        g = d.useEffect,
        h = d.useLayoutEffect,
        i = d.useDebugValue;

    function j(a) {
        var k = a.getSnapshot;
        a = a.value;
        try {
            var l = k();
            return !e(a, l);
        } catch (a) {
            return !0;
        }
    }
    var k = 'undefined' == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function(a, b) {
        return b();
    } : function(a, b) {
        var l = b(),
            m = f({
                inst: {
                    value: l,
                    getSnapshot: b
                }
            }),
            n = m[0].inst,
            o = m[1];
        return h(function() {
            n.value = l, n.getSnapshot = b, j(n) && o({
                inst: n
            });
        }, [
            a,
            l,
            b
        ]), g(function() {
            return j(n) && o({
                inst: n
            }), a(function() {
                j(n) && o({
                    inst: n
                });
            });
        }, [a]), i(l), l;
    };
    c = void 0 !== d.useSyncExternalStore ? d.useSyncExternalStore : k;
}), b.register('hiqi3', function(j, k) {
    a(j.exports, 'useQueryErrorResetBoundary', function() {
        return f;
    });
    var c = b('uPP4W');

    function d() {
        let e = !1;
        return {
            clearReset: () => {
                e = !1;
            },
            reset: () => {
                e = !0;
            },
            isReset: () => e
        };
    }
    const e = c.createContext(d()),
        f = () => c.useContext(e);
}), b.register('UuP2G', function(j, k) {
    a(j.exports, 'useIsRestoring', function() {
        return e;
    });
    var c = b('uPP4W');
    const d = c.createContext(!1),
        e = () => c.useContext(d);
    d.Provider;
}), b.register('54ICr', function(j, k) {
    a(j.exports, 'ensurePreventErrorBoundaryRetry', function() {
        return e;
    }), a(j.exports, 'useClearResetErrorBoundary', function() {
        return f;
    }), a(j.exports, 'getHasError', function() {
        return g;
    });
    var c = b('uPP4W'),
        d = b('WYJGJ');
    const e = (a, b) => {
            (a.suspense || a.useErrorBoundary) && (b.isReset() || (a.retryOnMount = !1));
        },
        f = a => {
            c.useEffect(() => {
                a.clearReset();
            }, [a]);
        },
        g = ({
            result: h,
            errorResetBoundary: i,
            useErrorBoundary: j,
            query: k
        }) => h.isError && !i.isReset() && !h.isFetching && (0, d.shouldThrowError)(j, [
            h.error,
            k
        ]);
}), b.register('WYJGJ', function(b, r) {
    function c(a, b) {
        return 'function' == typeof a ? a(...b) : !!a;
    }
    a(b.exports, 'shouldThrowError', function() {
        return c;
    });
}), b.register('5LKWG', function(b, r) {
    a(b.exports, 'ensureStaleTime', function() {
        return c;
    }), a(b.exports, 'shouldSuspend', function() {
        return d;
    }), a(b.exports, 'fetchOptimistic', function() {
        return e;
    });
    const c = a => {
            a.suspense && 'number' != typeof a.staleTime && (a.staleTime = 1000);
        },
        d = (a, b, r) => (null == a ? void 0 : a.suspense) && ((a, b) => a.isLoading && a.isFetching && !b)(b, r),
        e = (a, b, r) => b.fetchOptimistic(a).then(({
            data: f
        }) => {
            null == a.onSuccess || a.onSuccess(f), null == a.onSettled || a.onSettled(f, null);
        }).catch(f => {
            r.clearReset(), null == a.onError || a.onError(f), null == a.onSettled || a.onSettled(void 0, f);
        });
});