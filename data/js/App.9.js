var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('LbWyu', function(b, c) {
    var d, e, f, g, h;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), e = b.exports, f = 'default', g = function() {
        return _m;
    }, Object.defineProperty(e, f, {
        get: g,
        set: h,
        enumerable: !0,
        configurable: !0
    });
    var i = a('gRbUn');
    a('O0Kav');
    var j = a('nUeuG'),
        k = a('quE27'),
        l = a('Bjl070');
    var _m = a => (0, i.jsx)(j.default, {
        ...a,
        isForUpdating: !0,
        handleSubmit: b => new Promise((c, d) => {
            (0, k.request)({
                url: '/api/created-map/listing/create',
                data: {
                    name: b.name,
                    description: b.description,
                    imageUrl: b.imageUrl,
                    educationalRating: b.educationalRating,
                    map: window._mapId
                },
                success: () => {
                    l.default.success('Map updated!'), a.refetch(), c(null);
                },
                error: a => {
                    (0, k.throwMessageError)({
                        e: a,
                        default: {
                            title: 'Error updating map',
                            content: 'Please try again.'
                        }
                    }), d(a);
                }
            });
        })
    });
});