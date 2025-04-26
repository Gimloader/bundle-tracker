var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('JQskZ', function(a, r) {
    var b, c, d, e, f;
    b = a.exports, Object.defineProperty(b, '__esModule', {
        value: !0,
        configurable: !0
    }), c = a.exports, d = 'default', e = function() {
        return k;
    }, Object.defineProperty(c, d, {
        get: e,
        set: f,
        enumerable: !0,
        configurable: !0
    });
    var g = a('8kSQZ');
    a('uPP4W');
    var h = a('PY40b'),
        i = a('PjB0f'),
        j = a('jrTkz0');
    var k = a => (0, g.jsx)(h.default, {
        ...a,
        isForUpdating: !0,
        handleSubmit: a => new Promise((r, b) => {
            (0, i.request)({
                url: '/api/created-map/listing/create',
                data: {
                    name: a.name,
                    description: a.description,
                    imageUrl: a.imageUrl,
                    educationalRating: a.educationalRating,
                    map: window._mapId
                },
                success: () => {
                    j.default.success('Map updated!'), a.refetch(), r(null);
                },
                error: a => {
                    (0, i.throwMessageError)({
                        e: a,
                        default: {
                            title: 'Error updating map',
                            content: 'Please try again.'
                        }
                    }), b(a);
                }
            });
        })
    });
});