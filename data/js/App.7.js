var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('ciAGL', function(q, r) {
    var b, c, d, e, f;
    b = q.exports, Object.defineProperty(b, '__esModule', {
        value: !0,
        configurable: !0
    }), c = q.exports, d = 'default', e = function() {
        return p;
    }, Object.defineProperty(c, d, {
        get: e,
        set: f,
        enumerable: !0,
        configurable: !0
    });
    var g = a('8kSQZ'),
        h = a('uPP4W'),
        i = a('PjB0f'),
        j = a('jrTkz0');
    const k = h.lazy(() => a('0px8Y')),
        l = h.lazy(() => a('4eQ3l')),
        m = h.lazy(() => a('B19mr'));
    let n;
    var o;
    (o = n || (n = {})).overview = 'overview', o.requirements = 'requirements', o.form = 'form';
    var p = a => {
        const [q, r] = h.useState(n.overview);
        return (0, g.jsx)(h.Suspense, {
            fallback: null,
            children: (() => {
                if (q === n.overview)
                    return (0, g.jsx)(k, {
                        next: () => r(n.requirements)
                    });
                if (q === n.requirements)
                    return (0, g.jsx)(l, {
                        publishRequirementError: a.publishRequirementError,
                        next: () => r(n.form)
                    });
                if (q === n.form) {
                    const s = s => new Promise((r, b) => {
                        (0, i.request)({
                            url: '/api/created-map/listing/create',
                            data: {
                                name: s.name,
                                description: s.description,
                                imageUrl: s.imageUrl,
                                educationalRating: s.educationalRating,
                                map: window._mapId
                            },
                            success: () => {
                                j.default.success('Map published!'), a.refetch(), r(null);
                            },
                            error: a => {
                                (0, i.throwMessageError)({
                                    e: a,
                                    default: {
                                        title: 'Error publishing map',
                                        content: 'Please try again.'
                                    }
                                }), b(a);
                            }
                        });
                    });
                    return (0, g.jsx)(m, {
                        handleSubmit: s
                    });
                }
                return null;
            })()
        });
    };
}), a.register('0px8Y', function(r, i) {
    r.exports = import('./' + a('tIOy4').resolve('23FEm')).then(() => a('ASSvy'));
}), a.register('4eQ3l', function(r, i) {
    r.exports = import('./' + a('tIOy4').resolve('75Mvs')).then(() => a('J9gPG'));
}), a.register('B19mr', function(r, i) {
    r.exports = Promise.all([
        import('./' + a('tIOy4').resolve('cUNwf')),
        import('./' + a('tIOy4').resolve('iQTV4')),
        import('./' + a('tIOy4').resolve('cWZ5T')),
        import('./' + a('tIOy4').resolve('lkHb8'))
    ]).then(() => a('PY40b'));
});