var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('ASSvy', function(t, a) {
    var b, c, d, e, f;
    b = t.exports, Object.defineProperty(b, '__esModule', {
        value: !0,
        configurable: !0
    }), c = t.exports, d = 'default', e = function() {
        return u;
    }, Object.defineProperty(c, d, {
        get: e,
        set: f,
        enumerable: !0,
        configurable: !0
    });
    var g = a('8kSQZ');
    a('uPP4W');
    var h = a('h99Nu'),
        i = a('YimJ0'),
        j = a('IsmrL'),
        k = a('ExtIT'),
        l = a('UzdPH'),
        m = a('gSUVO'),
        n = a('JJQ0+'),
        o = a('iYEuk12'),
        p = a('q721a'),
        q = a('S/jX4');
    let r, s, t = a => a;
    var u = a => (0, g.jsxs)(v, {
        children: [
            (0, g.jsx)(w, {}),
            (0, g.jsx)(l.default.Title, {
                style: {
                    fontFamily: m.Fonts.FugazOne,
                    textTransform: 'uppercase'
                },
                level: 1,
                children: 'Publish'
            }),
            (0, g.jsxs)(l.default.Text, {
                style: {
                    marginTop: 10
                },
                children: [
                    'Share your map with the world! Publish your map to have it appear on our',
                    ' ',
                    (0, g.jsx)(o.default, {
                        to: p.CREATIVE_DISCOVERY,
                        target: '_blank',
                        style: {
                            color: q.default.Yellow,
                            textDecoration: 'underline'
                        },
                        children: 'Creative Discovery'
                    }),
                    ' ',
                    'page, where anybody can find and play your map!'
                ]
            }),
            (0, g.jsx)(k.default, {}),
            (0, g.jsx)(j.default, {
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
    const v = (0, h.default)(i.CenteredColumn).attrs({
            className: 'maxWidth'
        })(r || (r = t`
  text-align: center;
`)),
        w = h.default.img.attrs({
            src: (0, n.default)('publishing/megaphone.svg')
        })(s || (s = t`
  height: 85px;
  margin-bottom: 17px;
  filter: drop-shadow(0px 1px 6px rgba(0, 0, 0, 0.5));
  transform: rotate(-8deg);
`));
});