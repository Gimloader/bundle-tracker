var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('EDFlQ', function(k, i) {
    var b, c, d, e, f;
    b = k.exports, Object.defineProperty(b, '__esModule', {
        value: !0,
        configurable: !0
    }), c = k.exports, d = 'default', e = function() {
        return i;
    }, Object.defineProperty(c, d, {
        get: e,
        set: f,
        enumerable: !0,
        configurable: !0
    });
    var g = a('PjB0f'),
        h = a('uPP4W');
    var i = () => (h.useEffect(() => {
        if (window.location.href.includes('/group-subscription/complete')) {
            let j = (0, g.getUrlVariable)('subscriptionId');
            if (!j) {
                const k = window.location.pathname.split('/');
                j = k[k.length - 1];
            }
            window.location.href = `/group-subscription/complete?subscriptionId=${ j }`;
        }
    }, []), null);
});