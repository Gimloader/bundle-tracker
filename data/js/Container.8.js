function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('UapK50', function(b, c) {
    _h(b.exports, 'useQuery', function() {
        return _g;
    });
    var d = a('2t6d7'),
        e = a('8vKO6'),
        f = a('ieFEX0');

    function _g(_h, i, j) {
        const k = (0, d.parseQueryArgs)(_h, i, j);
        return (0, f.useBaseQuery)(k, e.QueryObserver);
    }
}), a.register('8vKO6', function(b, c) {
    _j(b.exports, 'QueryObserver', function() {
        return _i;
    });
    var d = a('2t6d7'),
        e = a('RIL5Y'),
        f = a('dY97x'),
        g = a('4a43e'),
        h = a('zNMaW');
    class _i extends g.Subscribable {
        bindMethods() {
            this.remove = this.remove.bind(this), this.refetch = this.refetch.bind(this);
        }
        onSubscribe() {
            1 === this.listeners.length && (this.currentQuery.addObserver(this), _j(this.currentQuery, this.options) && this.executeFetch(), this.updateTimers());
        }
        onUnsubscribe() {
            this.listeners.length || this.destroy();
        }
        shouldFetchOnReconnect() {
            return _r(this.currentQuery, this.options, this.options.refetchOnReconnect);
        }
        shouldFetchOnWindowFocus() {
            return _r(this.currentQuery, this.options, this.options.refetchOnWindowFocus);
        }
        destroy() {
            this.listeners = [], this.clearStaleTimeout(), this.clearRefetchInterval(), this.currentQuery.removeObserver(this);
        }
        setOptions(_j, k) {
            const l = this.options,
                m = this.currentQuery;
            if (this.options = this.client.defaultQueryOptions(_j), (0, d.shallowEqualObjects)(l, this.options) || this.client.getQueryCache().notify({
                    type: 'observerOptionsUpdated',
                    query: this.currentQuery,
                    observer: this
                }), void 0 !== this.options.enabled && 'boolean' != typeof this.options.enabled)
                throw new Error('Expected enabled to be a boolean');
            this.options.queryKey || (this.options.queryKey = l.queryKey), this.updateQuery();
            const n = this.hasListeners();
            n && _j(this.currentQuery, m, this.options, l) && this.executeFetch(), this.updateResult(k), !n || this.currentQuery === m && this.options.enabled === l.enabled && this.options.staleTime === l.staleTime || this.updateStaleTimeout();
            const o = this.computeRefetchInterval();
            !n || this.currentQuery === m && this.options.enabled === l.enabled && o === this.currentRefetchInterval || this.updateRefetchInterval(o);
        }
        getOptimisticResult(j) {
            const k = this.client.getQueryCache().build(this.client, j);
            return this.createResult(k, j);
        }
        getCurrentResult() {
            return this.currentResult;
        }
        trackResult(j) {
            const k = {};
            return Object.keys(j).forEach(b => {
                Object.defineProperty(k, b, {
                    configurable: !1,
                    enumerable: !0,
                    get: () => (this.trackedProps.add(b), j[b])
                });
            }), k;
        }
        getCurrentQuery() {
            return this.currentQuery;
        }
        remove() {
            this.client.getQueryCache().remove(this.currentQuery);
        }
        refetch({
            refetchPage: j,
            ...k
        } = {}) {
            return this.fetch({
                ...k,
                meta: {
                    refetchPage: j
                }
            });
        }
        fetchOptimistic(j) {
            const k = this.client.defaultQueryOptions(j),
                l = this.client.getQueryCache().build(this.client, k);
            return l.isFetchingOptimistic = !0, l.fetch().then(() => this.createResult(l, k));
        }
        fetch(j) {
            var k;
            return this.executeFetch({
                ...j,
                cancelRefetch: null == (k = j.cancelRefetch) || k
            }).then(() => (this.updateResult(), this.currentResult));
        }
        executeFetch(j) {
            this.updateQuery();
            let k = this.currentQuery.fetch(this.options, j);
            return null != j && j.throwOnError || (k = k.catch(d.noop)), k;
        }
        updateStaleTimeout() {
            if (this.clearStaleTimeout(), d.isServer || this.currentResult.isStale || !(0, d.isValidTimeout)(this.options.staleTime))
                return;
            const j = (0, d.timeUntilStale)(this.currentResult.dataUpdatedAt, this.options.staleTime) + 1;
            this.staleTimeoutId = setTimeout(() => {
                this.currentResult.isStale || this.updateResult();
            }, j);
        }
        computeRefetchInterval() {
            var j;
            return 'function' == typeof this.options.refetchInterval ? this.options.refetchInterval(this.currentResult.data, this.currentQuery) : null != (j = this.options.refetchInterval) && j;
        }
        updateRefetchInterval(j) {
            this.clearRefetchInterval(), this.currentRefetchInterval = j, !d.isServer && !1 !== this.options.enabled && (0, d.isValidTimeout)(this.currentRefetchInterval) && 0 !== this.currentRefetchInterval && (this.refetchIntervalId = setInterval(() => {
                (this.options.refetchIntervalInBackground || f.focusManager.isFocused()) && this.executeFetch();
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
        createResult(j, k) {
            const l = this.currentQuery,
                m = this.options,
                n = this.currentResult,
                o = this.currentResultState,
                p = this.currentResultOptions,
                q = j !== l,
                _r = q ? j.state : this.currentQueryInitialState,
                s = q ? this.currentResult : this.previousQueryResult,
                {
                    state: t
                } = j;
            let u, {
                    dataUpdatedAt: v,
                    error: w,
                    errorUpdatedAt: x,
                    fetchStatus: y,
                    status: z
                } = t,
                A = !1,
                B = !1;
            if (k._optimisticResults) {
                const C = this.hasListeners(),
                    D = !C && _j(j, k),
                    E = C && _j(j, l, k, m);
                (D || E) && (y = (0, h.canFetch)(j.options.networkMode) ? 'fetching' : 'paused', v || (z = 'loading')), 'isRestoring' === k._optimisticResults && (y = 'idle');
            }
            if (k.keepPreviousData && !t.dataUpdatedAt && null != s && s.isSuccess && 'error' !== z)
                u = s.data, v = s.dataUpdatedAt, z = s.status, A = !0;
            else if (k.select && void 0 !== t.data)
                if (n && t.data === (null == o ? void 0 : o.data) && k.select === this.selectFn)
                    u = this.selectResult;
                else
                    try {
                        this.selectFn = k.select, u = k.select(t.data), u = (0, d.replaceData)(null == n ? void 0 : n.data, u, k), this.selectResult = u, this.selectError = null;
                    } catch (j) {
                        this.selectError = j;
                    }
            else
                u = t.data;
            if (void 0 !== k.placeholderData && void 0 === u && 'loading' === z) {
                let C;
                if (null != n && n.isPlaceholderData && k.placeholderData === (null == p ? void 0 : p.placeholderData))
                    C = n.data;
                else if (C = 'function' == typeof k.placeholderData ? k.placeholderData() : k.placeholderData, k.select && void 0 !== C)
                    try {
                        C = k.select(C), this.selectError = null;
                    } catch (C) {
                        this.selectError = C;
                    }
                void 0 !== C && (z = 'success', u = (0, d.replaceData)(null == n ? void 0 : n.data, C, k), B = !0);
            }
            this.selectError && (w = this.selectError, u = this.selectResult, x = Date.now(), z = 'error');
            const C = 'fetching' === y,
                D = 'loading' === z,
                E = 'error' === z;
            return {
                status: z,
                fetchStatus: y,
                isLoading: D,
                isSuccess: 'success' === z,
                isError: E,
                isInitialLoading: D && C,
                data: u,
                dataUpdatedAt: v,
                error: w,
                errorUpdatedAt: x,
                failureCount: t.fetchFailureCount,
                failureReason: t.fetchFailureReason,
                errorUpdateCount: t.errorUpdateCount,
                isFetched: t.dataUpdateCount > 0 || t.errorUpdateCount > 0,
                isFetchedAfterMount: t.dataUpdateCount > _r.dataUpdateCount || t.errorUpdateCount > _r.errorUpdateCount,
                isFetching: C,
                isRefetching: C && !D,
                isLoadingError: E && 0 === t.dataUpdatedAt,
                isPaused: 'paused' === y,
                isPlaceholderData: B,
                isPreviousData: A,
                isRefetchError: E && 0 !== t.dataUpdatedAt,
                isStale: _j(j, k),
                refetch: this.refetch,
                remove: this.remove
            };
        }
        updateResult(j) {
            const k = this.currentResult,
                l = this.createResult(this.currentQuery, this.options);
            if (this.currentResultState = this.currentQuery.state, this.currentResultOptions = this.options, (0, d.shallowEqualObjects)(l, k))
                return;
            this.currentResult = l;
            const m = {
                cache: !0
            };
            !1 !== (null == j ? void 0 : j.listeners) && (() => {
                if (!k)
                    return !0;
                const {
                    notifyOnChangeProps: n
                } = this.options;
                if ('all' === n || !n && !this.trackedProps.size)
                    return !0;
                const o = new Set(null != n ? n : this.trackedProps);
                return this.options.useErrorBoundary && o.add('error'), Object.keys(this.currentResult).some(n => {
                    const p = n;
                    return this.currentResult[p] !== k[p] && o.has(p);
                });
            })() && (m.listeners = !0), this.notify({
                ...m,
                ...j
            });
        }
        updateQuery() {
            const j = this.client.getQueryCache().build(this.client, this.options);
            if (j === this.currentQuery)
                return;
            const k = this.currentQuery;
            this.currentQuery = j, this.currentQueryInitialState = j.state, this.previousQueryResult = this.currentResult, this.hasListeners() && (null == k || k.removeObserver(this), j.addObserver(this));
        }
        onQueryUpdate(j) {
            const k = {};
            'success' === j.type ? k.onSuccess = !j.manual : 'error' !== j.type || (0, h.isCancelledError)(j.error) || (k.onError = !0), this.updateResult(k), this.hasListeners() && this.updateTimers();
        }
        notify(j) {
            e.notifyManager.batch(() => {
                var k, l, m, n;
                if (j.onSuccess)
                    null == (k = (l = this.options).onSuccess) || k.call(l, this.currentResult.data), null == (m = (n = this.options).onSettled) || m.call(n, this.currentResult.data, null);
                else if (j.onError) {
                    var o, p, q, r;
                    null == (o = (p = this.options).onError) || o.call(p, this.currentResult.error), null == (q = (r = this.options).onSettled) || q.call(r, void 0, this.currentResult.error);
                }
                j.listeners && this.listeners.forEach(j => {
                    j(this.currentResult);
                }), j.cache && this.client.getQueryCache().notify({
                    query: this.currentQuery,
                    type: 'observerResultsUpdated'
                });
            });
        }
        constructor(j, k) {
            super(), this.client = j, this.options = k, this.trackedProps = new Set(), this.selectError = null, this.bindMethods(), this.setOptions(k);
        }
    }

    function _j(k, l) {
        return function(m, n) {
            return !(!1 === n.enabled || m.state.dataUpdatedAt || 'error' === m.state.status && !1 === n.retryOnMount);
        }(k, l) || k.state.dataUpdatedAt > 0 && _j(k, l, l.refetchOnMount);
    }

    function _j(k, l, m) {
        if (!1 !== l.enabled) {
            const n = 'function' == typeof m ? m(k) : m;
            return 'always' === n || !1 !== n && _j(k, l);
        }
        return !1;
    }

    function _j(k, l, m, n) {
        return !1 !== m.enabled && (k !== l || !1 === n.enabled) && (!m.suspense || 'error' !== k.state.status) && _j(k, m);
    }

    function _j(k, l) {
        return k.isStaleByTime(l.staleTime);
    }
}), a.register('ieFEX0', function(b, c) {
    _m(b.exports, 'useBaseQuery', function() {
        return _l;
    });
    var d = a('LEQ5w'),
        e = a('xpX2C0'),
        f = a('RIL5Y'),
        g = a('UNaPz0'),
        h = a('sQsFp'),
        i = a('1fweX0'),
        j = a('4u2XL'),
        k = a('NxV+5');

    function _l(_m, n) {
        const o = (0, h.useQueryClient)({
                context: _m.context
            }),
            p = (0, i.useIsRestoring)(),
            q = (0, g.useQueryErrorResetBoundary)(),
            r = o.defaultQueryOptions(_m);
        r._optimisticResults = p ? 'isRestoring' : 'optimistic', r.onError && (r.onError = f.notifyManager.batchCalls(r.onError)), r.onSuccess && (r.onSuccess = f.notifyManager.batchCalls(r.onSuccess)), r.onSettled && (r.onSettled = f.notifyManager.batchCalls(r.onSettled)), (0, k.ensureStaleTime)(r), (0, j.ensurePreventErrorBoundaryRetry)(r, q), (0, j.useClearResetErrorBoundary)(q);
        const [s] = d.useState(() => new n(o, r)), t = s.getOptimisticResult(r);
        if ((0, e.useSyncExternalStore)(d.useCallback(_m => p ? () => {} : s.subscribe(f.notifyManager.batchCalls(_m)), [
                s,
                p
            ]), () => s.getCurrentResult(), () => s.getCurrentResult()), d.useEffect(() => {
                s.setOptions(r, {
                    listeners: !1
                });
            }, [
                r,
                s
            ]), (0, k.shouldSuspend)(r, t, p))
            throw (0, k.fetchOptimistic)(r, s, q);
        if ((0, j.getHasError)({
                result: t,
                errorResetBoundary: q,
                useErrorBoundary: r.useErrorBoundary,
                query: s.getCurrentQuery()
            }))
            throw t.error;
        return r.notifyOnChangeProps ? t : s.trackResult(t);
    }
}), a.register('xpX2C0', function(b, c) {
    _b(b.exports, 'useSyncExternalStore', function() {
        return _d;
    });
    const _d = a('/iQ5b0').useSyncExternalStore;
}), a.register('/iQ5b0', function(_b, c) {
    _b.exports = a('fpwmq');
}), a.register('fpwmq', function(b, c) {
    var d;
    _e(b.exports, 'useSyncExternalStore', function() {
        return d;
    }, function(_e) {
        return d = _e;
    });
    var e = a('LEQ5w');
    var f = 'function' == typeof Object.is ? Object.is : function(g, h) {
            return g === h && (0 !== g || 1 / g == 1 / h) || g != g && h != h;
        },
        g = e.useState,
        h = e.useEffect,
        i = e.useLayoutEffect,
        j = e.useDebugValue;

    function k(l) {
        var m = l.getSnapshot;
        l = l.value;
        try {
            var n = m();
            return !f(l, n);
        } catch (l) {
            return !0;
        }
    }
    var k = 'undefined' == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function(l, m) {
        return m();
    } : function(l, m) {
        var n = m(),
            o = g({
                inst: {
                    value: n,
                    getSnapshot: m
                }
            }),
            p = o[0].inst,
            q = o[1];
        return i(function() {
            p.value = n, p.getSnapshot = m, h(p) && q({
                inst: p
            });
        }, [
            l,
            n,
            m
        ]), h(function() {
            return h(p) && q({
                inst: p
            }), l(function() {
                h(p) && q({
                    inst: p
                });
            });
        }, [l]), j(n), n;
    };
    d = void 0 !== e.useSyncExternalStore ? e.useSyncExternalStore : k;
}), a.register('UNaPz0', function(b, c) {
    _f(b.exports, 'useQueryErrorResetBoundary', function() {
        return _f;
    });
    var d = a('LEQ5w');

    function e() {
        let _f = !1;
        return {
            clearReset: () => {
                _f = !1;
            },
            reset: () => {
                _f = !0;
            },
            isReset: () => _f
        };
    }
    const e = d.createContext(_e()),
        _f = () => d.useContext(e);
}), a.register('1fweX0', function(b, c) {
    _i(b.exports, 'useIsRestoring', function() {
        return _f;
    });
    var d = a('LEQ5w');
    const _e = d.createContext(!1),
        _f = () => d.useContext(_e);
    _e.Provider;
}), a.register('4u2XL', function(b, c) {
    _i(b.exports, 'ensurePreventErrorBoundaryRetry', function() {
        return _f;
    }), _i(b.exports, 'useClearResetErrorBoundary', function() {
        return _g;
    }), _i(b.exports, 'getHasError', function() {
        return _h;
    });
    var d = a('LEQ5w'),
        e = a('rZKae');
    const _f = (_i, a) => {
            (_i.suspense || _i.useErrorBoundary) && (a.isReset() || (_i.retryOnMount = !1));
        },
        _g = _i => {
            d.useEffect(() => {
                _i.clearReset();
            }, [_i]);
        },
        _h = ({
            result: _i,
            errorResetBoundary: j,
            useErrorBoundary: k,
            query: l
        }) => _i.isError && !j.isReset() && !_i.isFetching && (0, e.shouldThrowError)(k, [
            _i.error,
            l
        ]);
}), a.register('rZKae', function(b, c) {
    function d(e, f) {
        return 'function' == typeof e ? e(...f) : !!e;
    }
    e(b.exports, 'shouldThrowError', function() {
        return _d;
    });
}), a.register('NxV+5', function(b, c) {
    e(b.exports, 'ensureStaleTime', function() {
        return _d;
    }), e(b.exports, 'shouldSuspend', function() {
        return _e;
    }), e(b.exports, 'fetchOptimistic', function() {
        return _f;
    });
    const _d = e => {
            e.suspense && 'number' != typeof e.staleTime && (e.staleTime = 1000);
        },
        _e = (e, b, c) => (null == e ? void 0 : e.suspense) && ((e, b) => e.isLoading && e.isFetching && !b)(b, c),
        _f = (e, b, c) => b.fetchOptimistic(e).then(({
            data: g
        }) => {
            null == e.onSuccess || e.onSuccess(g), null == e.onSettled || e.onSettled(g, null);
        }).catch(g => {
            c.clearReset(), null == e.onError || e.onError(g), null == e.onSettled || e.onSettled(void 0, g);
        });
});