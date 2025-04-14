var e = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
e.register("hNlkR", (function(o, i) {
    var n, t, l, r, f;
    n = o.exports, Object.defineProperty(n, "__esModule", {
        value: !0,
        configurable: !0
    }), t = o.exports, l = "default", r = function() {
        return s
    }, Object.defineProperty(t, l, {
        get: r,
        set: f,
        enumerable: !0,
        configurable: !0
    });
    var u = e("iMOcM"),
        a = e("fywoC");
    var s = () => (a.useEffect((() => {
        if (window.location.href.includes("/group-subscription/complete")) {
            let e = (0, u.getUrlVariable)("subscriptionId");
            if (!e) {
                const o = window.location.pathname.split("/");
                e = o[o.length - 1]
            }
            window.location.href = `/group-subscription/complete?subscriptionId=${e}`
        }
    }), []), null)
}));