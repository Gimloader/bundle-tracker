var e = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
e.register("gUf2X", (function(o, n) {
    var i, l, f, r, t;
    i = o.exports, Object.defineProperty(i, "__esModule", {
        value: !0,
        configurable: !0
    }), l = o.exports, f = "default", r = function() {
        return d
    }, Object.defineProperty(l, f, {
        get: r,
        set: t,
        enumerable: !0,
        configurable: !0
    });
    var a = e("fywoC");
    var d = () => (a.useEffect((() => {
        window.location.href.includes("/live") && (window.location.href = window.location.href.replace("/live", "/join"))
    }), []), null)
}));