var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('q7CPF', function(o, n) {
    var b, c, d, e, f;
    b = o.exports, Object.defineProperty(b, '__esModule', {
        value: !0,
        configurable: !0
    }), c = o.exports, d = 'default', e = function() {
        return h;
    }, Object.defineProperty(c, d, {
        get: e,
        set: f,
        enumerable: !0,
        configurable: !0
    });
    var g = a('uPP4W');
    var h = () => (g.useEffect(() => {
        window.location.href.includes('/live') && (window.location.href = window.location.href.replace('/live', '/join'));
    }, []), null);
});