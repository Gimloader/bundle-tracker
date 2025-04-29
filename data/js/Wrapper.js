var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('r9N7v', function(b, c) {
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
    var i = a('gRbUn'),
        j = a('quE27'),
        k = a('O0Kav');
    const l = k.lazy(() => a('ulHKB'));
    var _m = () => (0, i.jsxs)(k.Suspense, {
        fallback: (0, i.jsx)('div', {}),
        children: [
            (0, i.jsx)(j.Title, {
                title: 'GiveKit'
            }),
            (0, i.jsx)(l, {})
        ]
    });
}), a.register('ulHKB', function(b, c) {
    b.exports = Promise.all([
        import('./' + a('Dq3qN').resolve('gf3XU')),
        import('./' + a('Dq3qN').resolve('bviHW')),
        import('./' + a('Dq3qN').resolve('jWcbj')),
        import('./' + a('Dq3qN').resolve('d6saV')),
        import('./' + a('Dq3qN').resolve('6fGMH')),
        import('./' + a('Dq3qN').resolve('jS4Db')),
        import('./' + a('Dq3qN').resolve('5BLiG')),
        import('./' + a('Dq3qN').resolve('83uYn')),
        import('./' + a('Dq3qN').resolve('d7huW')),
        import('./' + a('Dq3qN').resolve('f3m2d')),
        import('./' + a('Dq3qN').resolve('k0ZSq')),
        import('./' + a('Dq3qN').resolve('ehnD9')),
        import('./' + a('Dq3qN').resolve('4oSLn'))
    ]).then(() => a('FZ4YD'));
});