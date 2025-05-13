function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('.....', function(c, d) {
    a(c.exports, 'useQuery', function() {
        return _h;
    });
    var e = b('.....'),
        f = b('.....'),
        g = b('.....');

    function _h(i, j, k) {
        const l = (0, e.parseQueryArgs)(i, j, k);
        return (0, g.useBaseQuery)(l, f.QueryObserver);
    }
}), b.register('.....', function(c, d) {
    a(c.exports, 'QueryObserver', function() {
        return _j;
    });
    var e = b('.....'),
        f = b('.....'),
        g = b('.....'),
        h = b('.....'),
        i = b('.....');
    class _j extends h.Subscribable {
        bindMethods() {
            this.remove = this.remove.bind(this), this.refetch = this.refetch.bind(this);
        }
        onSubscribe() {
            1 === this.listeners.length && (this.currentQuery.addObserver(this), _k(this.currentQuery, this.options) && this.executeFetch(), this.updateTimers());
        }
        onUnsubscribe() {
            this.listeners.length || this.destroy();
        }
        shouldFetchOnReconnect() {
            return _l(this.currentQuery, this.options, this.options.refetchOnReconnect);
        }
        shouldFetchOnWindowFocus() {
            return _l(this.currentQuery, this.options, this.options.refetchOnWindowFocus);
        }
        destroy() {
            this.listeners = [], this.clearStaleTimeout(), this.clearRefetchInterval(), this.currentQuery.removeObserver(this);
        }
        setOptions(k, l) {
            const m = this.options,
                n = this.currentQuery;
            if (this.options = this.client.defaultQueryOptions(k), (0, e.shallowEqualObjects)(m, this.options) || this.client.getQueryCache().notify({
                    type: 'observerOptionsUpdated',
                    query: this.currentQuery,
                    observer: this
                }), void 0 !== this.options.enabled && 'boolean' != typeof this.options.enabled)
                throw new Error('Expected enabled to be a boolean');
            this.options.queryKey || (this.options.queryKey = m.queryKey), this.updateQuery();
            const o = this.hasListeners();
            o && _n(this.currentQuery, n, this.options, m) && this.executeFetch(), this.updateResult(l), !o || this.currentQuery === n && this.options.enabled === m.enabled && this.options.staleTime === m.staleTime || this.updateStaleTimeout();
            const p = this.computeRefetchInterval();
            !o || this.currentQuery === n && this.options.enabled === m.enabled && p === this.currentRefetchInterval || this.updateRefetchInterval(p);
        }
        getOptimisticResult(k) {
            const l = this.client.getQueryCache().build(this.client, k);
            return this.createResult(l, k);
        }
        getCurrentResult() {
            return this.currentResult;
        }
        trackResult(k) {
            const l = {};
            return Object.keys(k).forEach(m => {
                Object.defineProperty(l, m, {
                    configurable: !1,
                    enumerable: !0,
                    get: () => (this.trackedProps.add(m), k[m])
                });
            }), l;
        }
        getCurrentQuery() {
            return this.currentQuery;
        }
        remove() {
            this.client.getQueryCache().remove(this.currentQuery);
        }
        refetch({
            refetchPage: k,
            ...l
        } = {}) {
            return this.fetch({
                ...l,
                meta: {
                    refetchPage: k
                }
            });
        }
        fetchOptimistic(k) {
            const l = this.client.defaultQueryOptions(k),
                m = this.client.getQueryCache().build(this.client, l);
            return m.isFetchingOptimistic = !0, m.fetch().then(() => this.createResult(m, l));
        }
        fetch(k) {
            var l;
            return this.executeFetch({
                ...k,
                cancelRefetch: null == (l = k.cancelRefetch) || l
            }).then(() => (this.updateResult(), this.currentResult));
        }
        executeFetch(k) {
            this.updateQuery();
            let l = this.currentQuery.fetch(this.options, k);
            return null != k && k.throwOnError || (l = l.catch(e.noop)), l;
        }
        updateStaleTimeout() {
            if (this.clearStaleTimeout(), e.isServer || this.currentResult.isStale || !(0, e.isValidTimeout)(this.options.staleTime))
                return;
            const k = (0, e.timeUntilStale)(this.currentResult.dataUpdatedAt, this.options.staleTime) + 1;
            this.staleTimeoutId = setTimeout(() => {
                this.currentResult.isStale || this.updateResult();
            }, k);
        }
        computeRefetchInterval() {
            var k;
            return 'function' == typeof this.options.refetchInterval ? this.options.refetchInterval(this.currentResult.data, this.currentQuery) : null != (k = this.options.refetchInterval) && k;
        }
        updateRefetchInterval(k) {
            this.clearRefetchInterval(), this.currentRefetchInterval = k, !e.isServer && !1 !== this.options.enabled && (0, e.isValidTimeout)(this.currentRefetchInterval) && 0 !== this.currentRefetchInterval && (this.refetchIntervalId = setInterval(() => {
                (this.options.refetchIntervalInBackground || g.focusManager.isFocused()) && this.executeFetch();
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
        createResult(k, l) {
            const m = this.currentQuery,
                n = this.options,
                o = this.currentResult,
                p = this.currentResultState,
                q = this.currentResultOptions,
                r = k !== m,
                s = r ? k.state : this.currentQueryInitialState,
                t = r ? this.currentResult : this.previousQueryResult,
                {
                    state: u
                } = k;
            let v, {
                    dataUpdatedAt: w,
                    error: x,
                    errorUpdatedAt: y,
                    fetchStatus: z,
                    status: A
                } = u,
                B = !1,
                C = !1;
            if (l._optimisticResults) {
                const D = this.hasListeners(),
                    E = !D && _k(k, l),
                    F = D && _n(k, m, l, n);
                (E || F) && (z = (0, i.canFetch)(k.options.networkMode) ? 'fetching' : 'paused', w || (A = 'loading')), 'isRestoring' === l._optimisticResults && (z = 'idle');
            }
            if (l.keepPreviousData && !u.dataUpdatedAt && null != t && t.isSuccess && 'error' !== A)
                v = t.data, w = t.dataUpdatedAt, A = t.status, B = !0;
            else if (l.select && void 0 !== u.data)
                if (E && u.data === (null == F ? void 0 : F.data) && l.select === this.selectFn)
                    v = this.selectResult;
                else
                    try {
                        this.selectFn = l.select, v = l.select(u.data), v = (0, D.replaceData)(null == E ? void 0 : E.data, v, l), this.selectResult = v, this.selectError = null;
                    } catch (k) {
                        this.selectError = k;
                    }
            else
                v = u.data;
            if (void 0 !== l.placeholderData && void 0 === v && 'loading' === A) {
                let G;
                if (null != E && E.isPlaceholderData && l.placeholderData === (null == q ? void 0 : q.placeholderData))
                    G = E.data;
                else if (G = 'function' == typeof l.placeholderData ? l.placeholderData() : l.placeholderData, l.select && void 0 !== G)
                    try {
                        G = l.select(G), this.selectError = null;
                    } catch (G) {
                        this.selectError = G;
                    }
                void 0 !== G && (A = 'success', v = (0, D.replaceData)(null == E ? void 0 : E.data, G, l), C = !0);
            }
            this.selectError && (x = this.selectError, v = this.selectResult, y = Date.now(), A = 'error');
            const G = 'fetching' === z,
                H = 'loading' === A,
                I = 'error' === A;
            return {
                status: A,
                fetchStatus: z,
                isLoading: H,
                isSuccess: 'success' === A,
                isError: I,
                isInitialLoading: H && G,
                data: v,
                dataUpdatedAt: w,
                error: x,
                errorUpdatedAt: y,
                failureCount: u.fetchFailureCount,
                failureReason: u.fetchFailureReason,
                errorUpdateCount: u.errorUpdateCount,
                isFetched: u.dataUpdateCount > 0 || u.errorUpdateCount > 0,
                isFetchedAfterMount: u.dataUpdateCount > s.dataUpdateCount || u.errorUpdateCount > s.errorUpdateCount,
                isFetching: G,
                isRefetching: G && !H,
                isLoadingError: I && 0 === u.dataUpdatedAt,
                isPaused: 'paused' === z,
                isPlaceholderData: C,
                isPreviousData: B,
                isRefetchError: I && 0 !== u.dataUpdatedAt,
                isStale: _o(k, l),
                refetch: this.refetch,
                remove: this.remove
            };
        }
        updateResult(k) {
            const l = this.currentResult,
                m = this.createResult(this.currentQuery, this.options);
            if (this.currentResultState = this.currentQuery.state, this.currentResultOptions = this.options, (0, e.shallowEqualObjects)(m, l))
                return;
            this.currentResult = m;
            const n = {
                cache: !0
            };
            !1 !== (null == k ? void 0 : k.listeners) && (() => {
                if (!l)
                    return !0;
                const {
                    notifyOnChangeProps: o
                } = this.options;
                if ('all' === o || !o && !this.trackedProps.size)
                    return !0;
                const p = new Set(null != o ? o : this.trackedProps);
                return this.options.useErrorBoundary && p.add('error'), Object.keys(this.currentResult).some(q => {
                    const r = q;
                    return this.currentResult[r] !== l[r] && p.has(r);
                });
            })() && (n.listeners = !0), this.notify({
                ...n,
                ...k
            });
        }
        updateQuery() {
            const k = this.client.getQueryCache().build(this.client, this.options);
            if (k === this.currentQuery)
                return;
            const l = this.currentQuery;
            this.currentQuery = k, this.currentQueryInitialState = k.state, this.previousQueryResult = this.currentResult, this.hasListeners() && (null == l || l.removeObserver(this), k.addObserver(this));
        }
        onQueryUpdate(k) {
            const l = {};
            'success' === k.type ? l.onSuccess = !k.manual : 'error' !== k.type || (0, i.isCancelledError)(k.error) || (l.onError = !0), this.updateResult(l), this.hasListeners() && this.updateTimers();
        }
        notify(k) {
            f.notifyManager.batch(() => {
                var l, m, n, o;
                if (k.onSuccess)
                    null == (l = (m = this.options).onSuccess) || l.call(m, this.currentResult.data), null == (n = (o = this.options).onSettled) || n.call(o, this.currentResult.data, null);
                else if (k.onError) {
                    var p, q, r, s;
                    null == (p = (q = this.options).onError) || p.call(q, this.currentResult.error), null == (r = (s = this.options).onSettled) || r.call(s, void 0, this.currentResult.error);
                }
                k.listeners && this.listeners.forEach(t => {
                    t(this.currentResult);
                }), k.cache && this.client.getQueryCache().notify({
                    query: this.currentQuery,
                    type: 'observerResultsUpdated'
                });
            });
        }
        constructor(k, l) {
            super(), this.client = k, this.options = l, this.trackedProps = new Set(), this.selectError = null, this.bindMethods(), this.setOptions(l);
        }
    }

    function _k(l, m) {
        return function(n, o) {
            return !(!1 === o.enabled || n.state.dataUpdatedAt || 'error' === n.state.status && !1 === o.retryOnMount);
        }(l, m) || l.state.dataUpdatedAt > 0 && _l(l, m, m.refetchOnMount);
    }

    function _l(m, n, o) {
        if (!1 !== n.enabled) {
            const p = 'function' == typeof o ? o(m) : o;
            return 'always' === p || !1 !== p && _o(m, n);
        }
        return !1;
    }

    function _n(o, p, q, r) {
        return !1 !== q.enabled && (o !== p || !1 === r.enabled) && (!q.suspense || 'error' !== o.state.status) && _o(o, q);
    }

    function _o(p, q) {
        return p.isStaleByTime(q.staleTime);
    }
}), b.register('.....', function(c, d) {
    a(c.exports, 'useBaseQuery', function() {
        return _m;
    });
    var e = b('.....'),
        f = b('.....'),
        g = b('.....'),
        h = b('.....'),
        i = b('.....'),
        j = b('.....'),
        k = b('.....'),
        l = b('.....');

    function _m(n, o) {
        const p = (0, i.useQueryClient)({
                context: n.context
            }),
            q = (0, j.useIsRestoring)(),
            r = (0, h.useQueryErrorResetBoundary)(),
            s = p.defaultQueryOptions(n);
        s._optimisticResults = q ? 'isRestoring' : 'optimistic', s.onError && (s.onError = g.notifyManager.batchCalls(s.onError)), s.onSuccess && (s.onSuccess = g.notifyManager.batchCalls(s.onSuccess)), s.onSettled && (s.onSettled = g.notifyManager.batchCalls(s.onSettled)), (0, l.ensureStaleTime)(s), (0, k.ensurePreventErrorBoundaryRetry)(s, _m), (0, k.useClearResetErrorBoundary)(_m);
        const [t] = e.useState(() => new o(p, s)), u = t.getOptimisticResult(s);
        if ((0, f.useSyncExternalStore)(e.useCallback(v => q ? () => {} : t.subscribe(g.notifyManager.batchCalls(v)), [
                t,
                q
            ]), () => t.getCurrentResult(), () => t.getCurrentResult()), e.useEffect(() => {
                t.setOptions(s, {
                    listeners: !1
                });
            }, [
                s,
                t
            ]), (0, l.shouldSuspend)(s, u, q))
            throw (0, l.fetchOptimistic)(s, t, _m);
        if ((0, k.getHasError)({
                result: u,
                errorResetBoundary: _m,
                useErrorBoundary: s.useErrorBoundary,
                query: t.getCurrentQuery()
            }))
            throw u.error;
        return s.notifyOnChangeProps ? u : t.trackResult(u);
    }
}), b.register('.....', function(c, d) {
    a(c.exports, 'useSyncExternalStore', function() {
        return _e;
    });
    const _e = b('.....').useSyncExternalStore;
}), b.register('.....', function(c, d) {
    c.exports = b('.....');
}), b.register('.....', function(c, d) {
    var e;
    a(c.exports, 'useSyncExternalStore', function() {
        return e;
    }, function(f) {
        return e = f;
    });
    var f = b('.....');
    var g = 'function' == typeof Object.is ? Object.is : function(h, i) {
            return h === i && (0 !== h || 1 / h == 1 / i) || h != h && i != i;
        },
        h = f.useState,
        i = f.useEffect,
        j = f.useLayoutEffect,
        k = f.useDebugValue;

    function l(m) {
        var n = m.getSnapshot;
        m = m.value;
        try {
            var o = n();
            return !g(m, o);
        } catch (m) {
            return !0;
        }
    }
    var o = 'undefined' == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function(p, q) {
        return q();
    } : function(p, q) {
        var r = q(),
            s = h({
                inst: {
                    value: r,
                    getSnapshot: q
                }
            }),
            t = s[0].inst,
            u = s[1];
        return j(function() {
            t.value = r, t.getSnapshot = q, l(t) && u({
                inst: t
            });
        }, [
            p,
            r,
            q
        ]), i(function() {
            return l(t) && u({
                inst: t
            }), p(function() {
                l(t) && u({
                    inst: t
                });
            });
        }, [p]), k(r), r;
    };
    e = void 0 !== f.useSyncExternalStore ? f.useSyncExternalStore : o;
}), b.register('.....', function(c, d) {
    a(c.exports, 'useQueryErrorResetBoundary', function() {
        return _h;
    });
    var e = b('.....');

    function f() {
        let g = !1;
        return {
            clearReset: () => {
                g = !1;
            },
            reset: () => {
                g = !0;
            },
            isReset: () => g
        };
    }
    const g = e.createContext(f()),
        _h = () => e.useContext(g);
}), b.register('.....', function(c, d) {
    a(c.exports, 'useIsRestoring', function() {
        return _g;
    });
    var e = b('.....');
    const f = e.createContext(!1),
        _g = () => e.useContext(f);
    f.Provider;
}), b.register('.....', function(c, d) {
    a(c.exports, 'ensurePreventErrorBoundaryRetry', function() {
        return _g;
    }), a(c.exports, 'useClearResetErrorBoundary', function() {
        return _h;
    }), a(c.exports, 'getHasError', function() {
        return _i;
    });
    var e = b('.....'),
        f = b('.....');
    const _g = (h, i) => {
            (h.suspense || h.useErrorBoundary) && (i.isReset() || (h.retryOnMount = !1));
        },
        _h = i => {
            e.useEffect(() => {
                i.clearReset();
            }, [i]);
        },
        _i = ({
            result: j,
            errorResetBoundary: k,
            useErrorBoundary: l,
            query: m
        }) => j.isError && !k.isReset() && !j.isFetching && (0, f.shouldThrowError)(l, [
            j.error,
            m
        ]);
}), b.register('.....', function(c, d) {
    function e(f, g) {
        return 'function' == typeof f ? f(...g) : !!f;
    }
    a(c.exports, 'shouldThrowError', function() {
        return e;
    });
}), b.register('.....', function(c, d) {
    a(c.exports, 'ensureStaleTime', function() {
        return _e;
    }), a(c.exports, 'shouldSuspend', function() {
        return _f;
    }), a(c.exports, 'fetchOptimistic', function() {
        return _g;
    });
    const _e = f => {
            f.suspense && 'number' != typeof f.staleTime && (f.staleTime = 1000);
        },
        _f = (g, h, i) => (null == g ? void 0 : g.suspense) && ((j, k) => j.isLoading && j.isFetching && !k)(h, i),
        _g = (h, i, j) => i.fetchOptimistic(h).then(({
            data: k
        }) => {
            null == h.onSuccess || h.onSuccess(k), null == h.onSettled || h.onSettled(k, null);
        }).catch(k => {
            j.clearReset(), null == h.onError || h.onError(k), null == h.onSettled || h.onSettled(void 0, k);
        });
});