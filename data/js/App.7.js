var e = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
e.register("2V3lN", (function(r, i) {
    var t, n, o, l, s;
    t = r.exports, Object.defineProperty(t, "__esModule", {
        value: !0,
        configurable: !0
    }), n = r.exports, o = "default", l = function() {
        return g
    }, Object.defineProperty(n, o, {
        get: l,
        set: s,
        enumerable: !0,
        configurable: !0
    });
    var a = e("hxEiv"),
        u = e("fywoC"),
        c = e("iMOcM"),
        f = e("cy4A6");
    const p = u.lazy((() => e("aUOXT"))),
        m = u.lazy((() => e("89hGO"))),
        d = u.lazy((() => e("2wCcn")));
    let h;
    var v;
    (v = h || (h = {})).overview = "overview", v.requirements = "requirements", v.form = "form";
    var g = e => {
        const [r, i] = u.useState(h.overview);
        return (0, a.jsx)(u.Suspense, {
            fallback: null,
            children: (() => {
                if (r === h.overview) return (0, a.jsx)(p, {
                    next: () => i(h.requirements)
                });
                if (r === h.requirements) return (0, a.jsx)(m, {
                    publishRequirementError: e.publishRequirementError,
                    next: () => i(h.form)
                });
                if (r === h.form) {
                    const r = r => new Promise(((i, t) => {
                        (0, c.request)({
                            url: "/api/created-map/listing/create",
                            data: {
                                name: r.name,
                                description: r.description,
                                imageUrl: r.imageUrl,
                                educationalRating: r.educationalRating,
                                map: window._mapId
                            },
                            success: () => {
                                f.default.success("Map published!"), e.refetch(), i(null)
                            },
                            error: e => {
                                (0, c.throwMessageError)({
                                    e: e,
                                    default: {
                                        title: "Error publishing map",
                                        content: "Please try again."
                                    }
                                }), t(e)
                            }
                        })
                    }));
                    return (0, a.jsx)(d, {
                        handleSubmit: r
                    })
                }
                return null
            })()
        })
    }
})), e.register("aUOXT", (function(r, i) {
    r.exports = import("./" + e("ihc6Q").resolve("23FEm")).then((() => e("6LTxW")))
})), e.register("89hGO", (function(r, i) {
    r.exports = import("./" + e("ihc6Q").resolve("75Mvs")).then((() => e("jRo8V")))
})), e.register("2wCcn", (function(r, i) {
    r.exports = Promise.all([import("./" + e("ihc6Q").resolve("cUNwf")), import("./" + e("ihc6Q").resolve("iQTV4")), import("./" + e("ihc6Q").resolve("cWZ5T")), import("./" + e("ihc6Q").resolve("lkHb8"))]).then((() => e("12Ng4")))
}));