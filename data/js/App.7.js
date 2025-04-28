var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('rrDLV', function(b, c) {
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
    var i = a('0hzx+'),
        j = a('LEQ5w'),
        k = a('PMl60'),
        l = a('MSsQO');
    const m = j.lazy(() => a('RCS1d')),
        n = j.lazy(() => a('5Cibp')),
        o = j.lazy(() => a('XHGLF'));
    let p;
    var q;
    (q = p || (p = {})).overview = 'overview', q.requirements = 'requirements', q.form = 'form';
    var _r = a => {
        const [s, t] = j.useState(p.overview);
        return (0, i.jsx)(j.Suspense, {
            fallback: null,
            children: (() => {
                if (s === p.overview)
                    return (0, i.jsx)(m, {
                        next: () => t(p.requirements)
                    });
                if (s === p.requirements)
                    return (0, i.jsx)(n, {
                        publishRequirementError: a.publishRequirementError,
                        next: () => t(p.form)
                    });
                if (s === p.form) {
                    const u = u => new Promise((t, d) => {
                        (0, k.request)({
                            url: '/api/created-map/listing/create',
                            data: {
                                name: u.name,
                                description: u.description,
                                imageUrl: u.imageUrl,
                                educationalRating: u.educationalRating,
                                map: window._mapId
                            },
                            success: () => {
                                l.default.success('Map published!'), a.refetch(), t(null);
                            },
                            error: a => {
                                (0, k.throwMessageError)({
                                    e: a,
                                    default: {
                                        title: 'Error publishing map',
                                        content: 'Please try again.'
                                    }
                                }), d(a);
                            }
                        });
                    });
                    return (0, i.jsx)(o, {
                        handleSubmit: u
                    });
                }
                return null;
            })()
        });
    };
}), a.register('RCS1d', function(b, c) {
    b.exports = import('./' + a('HmN9A').resolve('23FEm')).then(() => a('iIx9r'));
}), a.register('5Cibp', function(b, c) {
    b.exports = import('./' + a('HmN9A').resolve('75Mvs')).then(() => a('E8iF1'));
}), a.register('XHGLF', function(b, c) {
    b.exports = Promise.all([
        import('./' + a('HmN9A').resolve('cUNwf')),
        import('./' + a('HmN9A').resolve('iQTV4')),
        import('./' + a('HmN9A').resolve('cWZ5T')),
        import('./' + a('HmN9A').resolve('lkHb8'))
    ]).then(() => a('CbO9f'));
});