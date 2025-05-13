var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('.....', function(b, c) {
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
    var i = a('.....'),
        j = a('.....'),
        k = a('.....');
    const l = k.lazy(() => a('.....'));
    var _m = () => (0, i.jsxs)(k.Suspense, {
        fallback: (0, i.jsx)('div', {}),
        children: [
            (0, i.jsx)(j.Title, {
                title: 'GiveKit'
            }),
            (0, i.jsx)(l, {})
        ]
    });
}), a.register('.....', function(b, c) {
    b.exports = Promise.all([
        import('./' + a('.....').resolve('gf3XU')),
        import('./' + a('.....').resolve('bviHW')),
        import('./' + a('.....').resolve('jWcbj')),
        import('./' + a('.....').resolve('d6saV')),
        import('./' + a('.....').resolve('6fGMH')),
        import('./' + a('.....').resolve('jS4Db')),
        import('./' + a('.....').resolve('5BLiG')),
        import('./' + a('.....').resolve('83uYn')),
        import('./' + a('.....').resolve('d7huW')),
        import('./' + a('.....').resolve('f3m2d')),
        import('./' + a('.....').resolve('k0ZSq')),
        import('./' + a('.....').resolve('ehnD9')),
        import('./' + a('.....').resolve('4oSLn'))
    ]).then(() => a('.....'));
});