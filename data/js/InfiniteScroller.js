import {
    r as l,
    j as g,
    a as M
} from "./_index.js";
import {
    I as T
} from "./index.es.js";
const R = e => {
    const [h, o] = l.useState([]), [I] = l.useState(e.limit), [n, y] = l.useState(e.defaultPage), [m, d] = l.useState(!0), [a, x] = l.useState([]), [u, r] = l.useState(!1), S = l.useMemo(() => (e.modifyItems ? e.modifyItems(a) : a).map((s, t) => e.toRender(s, t)), [a.length, e.toRender]), f = () => {
        if (h.includes(n)) return;
        o(t => [...t, n]);
        const s = {
            page: n,
            limit: I
        };
        M({
            url: e.url,
            method: "post",
            cacheKey: e.cacheKey,
            data: e.modifyBody ? e.modifyBody(s) : s,
            success: (t, c) => {
                e.onTotalItems && !u && (e.onTotalItems(t.totalItems), r(!0)), t.items.forEach(i => {
                    e.onItemFetched && e.onItemFetched(i, c)
                }), x(i => [...i, ...t.items]), d(t.hasNextPage), y(t.nextPage)
            },
            error: () => {
                e.onTotalItems && !u && (e.onTotalItems(0), r(!0)), d(!1)
            },
            both: () => o(t => t.filter(c => c !== s.page))
        })
    };
    return l.useEffect(f, []), !m && e.forceEmptyMessage || !m && a.length === 0 && e.emptyMessage ? e.emptyMessage(a) : g.jsxs(T, {
        dataLength: a.length,
        hasMore: m,
        style: e.scrollStyle,
        next: f,
        loader: e.loader || g.jsx("div", {}),
        scrollThreshold: e.scrollThreshold,
        endMessage: e.endMessage ? e.endMessage(a) : null,
        scrollableTarget: e.scrollableTarget,
        children: [e.prefix ? e.prefix() : null, S]
    })
};
export {
    R as I
};