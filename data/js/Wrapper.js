var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('n4BmY', function(b, c) {
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
    const l = k.lazy(() => a('FnwVg'));
    var _m = () => (0, i.jsxs)(k.Suspense, {
        fallback: (0, i.jsx)('div', {}),
        children: [
            (0, i.jsx)(j.Title, {
                title: 'GiveKit'
            }),
            (0, i.jsx)(l, {})
        ]
    });
}), a.register('FnwVg', function(b, c) {
    b.exports = Promise.all([
        import('./' + a('HmN9A').resolve('iQTV4')),
        import('./' + a('HmN9A').resolve('j5n9a')),
        import('./' + a('HmN9A').resolve('cWZ5T')),
        import('./' + a('HmN9A').resolve('lFChG')),
        import('./' + a('HmN9A').resolve('jnRhB')),
        import('./' + a('HmN9A').resolve('8Pt2G')),
        import('./' + a('HmN9A').resolve('935wq')),
        import('./' + a('HmN9A').resolve('cBIIp')),
        import('./' + a('HmN9A').resolve('lEeFg')),
        import('./' + a('HmN9A').resolve('6T3MR')),
        import('./' + a('HmN9A').resolve('jM8u1')),
        import('./' + a('HmN9A').resolve('99xGA')),
        import('./' + a('HmN9A').resolve('4oSLn'))
    ]).then(() => a('/kLzb'));
});