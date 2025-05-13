var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('.....', function(b, c) {
    var d, e, f, g, h;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), e = b.exports, f = 'default', g = function() {
        return _r;
    }, Object.defineProperty(e, f, {
        get: g,
        set: h,
        enumerable: !0,
        configurable: !0
    });
    var i = a('.....'),
        j = a('.....'),
        k = a('.....'),
        l = a('.....');
    const m = j.lazy(() => a('.....')),
        n = j.lazy(() => a('.....')),
        o = j.lazy(() => a('.....'));
    let p;
    var q;
    (q = p || (p = {})).overview = 'overview', q.requirements = 'requirements', q.form = 'form';
    var _r = s => {
        const [t, u] = j.useState(p.overview);
        return (0, i.jsx)(j.Suspense, {
            fallback: null,
            children: (() => {
                if (t === p.overview)
                    return (0, i.jsx)(m, {
                        next: () => u(p.requirements)
                    });
                if (t === p.requirements)
                    return (0, i.jsx)(n, {
                        publishRequirementError: s.publishRequirementError,
                        next: () => u(p.form)
                    });
                if (t === p.form) {
                    const v = w => new Promise((x, y) => {
                        (0, k.request)({
                            url: '/api/created-map/listing/create',
                            data: {
                                name: w.name,
                                description: w.description,
                                imageUrl: w.imageUrl,
                                educationalRating: w.educationalRating,
                                map: window._mapId
                            },
                            success: () => {
                                l.default.success('Map published!'), s.refetch(), x(null);
                            },
                            error: z => {
                                (0, k.throwMessageError)({
                                    e: z,
                                    default: {
                                        title: 'Error publishing map',
                                        content: 'Please try again.'
                                    }
                                }), y(z);
                            }
                        });
                    });
                    return (0, i.jsx)(o, {
                        handleSubmit: v
                    });
                }
                return null;
            })()
        });
    };
}), a.register('.....', function(b, c) {
    b.exports = import('./' + a('.....').resolve('23FEm')).then(() => a('.....'));
}), a.register('.....', function(b, c) {
    b.exports = import('./' + a('.....').resolve('75Mvs')).then(() => a('.....'));
}), a.register('.....', function(b, c) {
    b.exports = Promise.all([
        import('./' + a('.....').resolve('2bgip')),
        import('./' + a('.....').resolve('gf3XU')),
        import('./' + a('.....').resolve('jWcbj')),
        import('./' + a('.....').resolve('lkHb8'))
    ]).then(() => a('.....'));
});