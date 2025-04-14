var e = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
e.register("9UopL", (function(a, r) {
    var t, i, n, o, l;
    t = a.exports, Object.defineProperty(t, "__esModule", {
        value: !0,
        configurable: !0
    }), i = a.exports, n = "default", o = function() {
        return c
    }, Object.defineProperty(i, n, {
        get: o,
        set: l,
        enumerable: !0,
        configurable: !0
    });
    var d = e("hxEiv");
    e("fywoC");
    var u = e("12Ng4"),
        s = e("iMOcM"),
        f = e("cy4A6");
    var c = e => (0, d.jsx)(u.default, {
        ...e,
        isForUpdating: !0,
        handleSubmit: a => new Promise(((r, t) => {
            (0, s.request)({
                url: "/api/created-map/listing/create",
                data: {
                    name: a.name,
                    description: a.description,
                    imageUrl: a.imageUrl,
                    educationalRating: a.educationalRating,
                    map: window._mapId
                },
                success: () => {
                    f.default.success("Map updated!"), e.refetch(), r(null)
                },
                error: e => {
                    (0, s.throwMessageError)({
                        e: e,
                        default: {
                            title: "Error updating map",
                            content: "Please try again."
                        }
                    }), t(e)
                }
            })
        }))
    })
}));