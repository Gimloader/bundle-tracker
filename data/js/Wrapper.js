var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('TeiKv', function(i, o) {
    var b, c, d, e, f;
    b = i.exports, Object.defineProperty(b, '__esModule', {
        value: !0,
        configurable: !0
    }), c = i.exports, d = 'default', e = function() {
        return k;
    }, Object.defineProperty(c, d, {
        get: e,
        set: f,
        enumerable: !0,
        configurable: !0
    });
    var g = a('8kSQZ'),
        h = a('PjB0f'),
        i = a('uPP4W');
    const j = i.lazy(() => a('N2QtP'));
    var k = () => (0, g.jsxs)(i.Suspense, {
        fallback: (0, g.jsx)('div', {}),
        children: [
            (0, g.jsx)(h.Title, {
                title: 'GiveKit'
            }),
            (0, g.jsx)(j, {})
        ]
    });
}), a.register('N2QtP', function(i, o) {
    i.exports = Promise.all([
        import('./' + a('tIOy4').resolve('iQTV4')),
        import('./' + a('tIOy4').resolve('j5n9a')),
        import('./' + a('tIOy4').resolve('cWZ5T')),
        import('./' + a('tIOy4').resolve('lFChG')),
        import('./' + a('tIOy4').resolve('jnRhB')),
        import('./' + a('tIOy4').resolve('8Pt2G')),
        import('./' + a('tIOy4').resolve('935wq')),
        import('./' + a('tIOy4').resolve('cBIIp')),
        import('./' + a('tIOy4').resolve('lEeFg')),
        import('./' + a('tIOy4').resolve('6T3MR')),
        import('./' + a('tIOy4').resolve('jM8u1')),
        import('./' + a('tIOy4').resolve('99xGA')),
        import('./' + a('tIOy4').resolve('4oSLn'))
    ]).then(() => a('B1poa'));
});