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
    var i = a('0hzx+'),
        j = a('PMl60'),
        k = a('LEQ5w');
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
        import('./' + a('HmN9A').resolve('gf3XU')),
        import('./' + a('HmN9A').resolve('bviHW')),
        import('./' + a('HmN9A').resolve('jWcbj')),
        import('./' + a('HmN9A').resolve('d6saV')),
        import('./' + a('HmN9A').resolve('6fGMH')),
        import('./' + a('HmN9A').resolve('jS4Db')),
        import('./' + a('HmN9A').resolve('5BLiG')),
        import('./' + a('HmN9A').resolve('83uYn')),
        import('./' + a('HmN9A').resolve('d7huW')),
        import('./' + a('HmN9A').resolve('f3m2d')),
        import('./' + a('HmN9A').resolve('k0ZSq')),
        import('./' + a('HmN9A').resolve('ehnD9')),
        import('./' + a('HmN9A').resolve('4oSLn'))
    ]).then(() => a('/kLzb'));
});