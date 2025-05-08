var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('.....', function (b, c) {
    var d, e, f, g, h;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), e = b.exports, f = 'default', g = function () {
        return _m;
    }, Object.defineProperty(e, f, {
        get: g,
        set: h,
        enumerable: !0,
        configurable: !0
    });
    var i = a('.....');
    a('.....');
    var j = a('.....'), k = a('.....'), l = a('.....');
    var _m = n => (0, i.jsx)(j.default, {
        ...n,
        isForUpdating: !0,
        handleSubmit: o => new Promise((p, q) => {
            (0, k.request)({
                url: '/api/created-map/listing/create',
                data: {
                    name: o.name,
                    description: o.description,
                    imageUrl: o.imageUrl,
                    educationalRating: o.educationalRating,
                    map: window._mapId
                },
                success: () => {
                    l.default.success('Map updated!'), n.refetch(), p(null);
                },
                error: r => {
                    (0, k.throwMessageError)({
                        e: r,
                        default: {
                            title: 'Error updating map',
                            content: 'Please try again.'
                        }
                    }), q(r);
                }
            });
        })
    });
});