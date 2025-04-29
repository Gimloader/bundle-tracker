var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('9+bDj', function(b, c) {
    var d, e, f, g, h;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), e = b.exports, f = 'default', g = function() {
        return _k;
    }, Object.defineProperty(e, f, {
        get: g,
        set: h,
        enumerable: !0,
        configurable: !0
    });
    var i = a('quE27'),
        j = a('O0Kav');
    var _k = () => (j.useEffect(() => {
        if (window.location.href.includes('/group-subscription/complete')) {
            let l = (0, i.getUrlVariable)('subscriptionId');
            if (!l) {
                const m = window.location.pathname.split('/');
                l = m[m.length - 1];
            }
            window.location.href = `/group-subscription/complete?subscriptionId=${ l }`;
        }
    }, []), null);
});