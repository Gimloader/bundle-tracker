var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('iIx9r', function(b, c) {
    var d, e, f, g, h;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), e = b.exports, f = 'default', g = function() {
        return _w;
    }, Object.defineProperty(e, f, {
        get: g,
        set: h,
        enumerable: !0,
        configurable: !0
    });
    var i = a('gRbUn');
    a('O0Kav');
    var j = a('u4s09'),
        k = a('MgONH'),
        l = a('P1KtI'),
        m = a('VNuyu'),
        n = a('22RS1'),
        o = a('Eh2Wh'),
        p = a('UaUBz0'),
        q = a('FB7HT26'),
        r = a('nKuOQ'),
        s = a('HOIhZ');
    let t, u, v = a => a;
    var _w = a => (0, i.jsxs)(_x, {
        children: [
            (0, i.jsx)(_y, {}),
            (0, i.jsx)(n.default.Title, {
                style: {
                    fontFamily: o.Fonts.FugazOne,
                    textTransform: 'uppercase'
                },
                level: 1,
                children: 'Publish'
            }),
            (0, i.jsxs)(n.default.Text, {
                style: {
                    marginTop: 10
                },
                children: [
                    'Share your map with the world! Publish your map to have it appear on our',
                    ' ',
                    (0, i.jsx)(q.default, {
                        to: r.CREATIVE_DISCOVERY,
                        target: '_blank',
                        style: {
                            color: s.default.Yellow,
                            textDecoration: 'underline'
                        },
                        children: 'Creative Discovery'
                    }),
                    ' ',
                    'page, where anybody can find and play your map!'
                ]
            }),
            (0, i.jsx)(m.default, {}),
            (0, i.jsx)(l.default, {
                size: 'large',
                block: !0,
                type: 'primary',
                style: {
                    height: 55
                },
                onClick: a.next,
                children: 'Continue'
            })
        ]
    });
    const _x = (0, j.default)(k.CenteredColumn).attrs({
            className: 'maxWidth'
        })(t || (t = v`
  text-align: center;
`)),
        _y = j.default.img.attrs({
            src: (0, p.default)('publishing/megaphone.svg')
        })(u || (u = v`
  height: 85px;
  margin-bottom: 17px;
  filter: drop-shadow(0px 1px 6px rgba(0, 0, 0, 0.5));
  transform: rotate(-8deg);
`));
});