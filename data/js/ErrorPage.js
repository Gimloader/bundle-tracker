function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('.....', function (c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'default', function () {
        return _r;
    });
    var f = b('.....');
    b('.....');
    var g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....'), k = b('.....'), l = b('.....'), m = b('.....'), n = b('.....');
    let o, p, q = r => r;
    var _r = () => (0, f.jsxs)(f.Fragment, {
        children: [
            (0, f.jsx)(m.Title, { title: 'Error' }),
            (0, f.jsxs)(_s, {
                className: 'flex-column vc',
                children: [
                    (0, f.jsx)(n.default, { includeSpacer: !0 }),
                    (0, f.jsxs)(_t, {
                        className: 'flex flex-column hc vc wrap',
                        children: [
                            (0, f.jsx)(g.default, {
                                style: {
                                    fontSize: 60,
                                    color: 'red'
                                }
                            }),
                            (0, f.jsx)('div', {
                                style: {
                                    fontSize: 32,
                                    fontWeight: l.FontWeights.UltraBold
                                },
                                children: 'Something went wrong...'
                            }),
                            (0, f.jsx)('div', {
                                style: {
                                    marginTop: -6,
                                    fontSize: 18
                                },
                                children: 'We may be experiencing technical difficulties'
                            }),
                            (0, f.jsx)(i.default, {}),
                            (0, f.jsx)('div', {
                                style: {
                                    fontSize: 25,
                                    fontWeight: l.FontWeights.UltraBold
                                },
                                children: 'Status:'
                            }),
                            (0, f.jsx)('img', {
                                src: 'https://gimkit.crisp.watch/includes/badge/',
                                style: {
                                    height: 70,
                                    width: 70,
                                    borderRadius: '50%',
                                    marginBottom: 10
                                }
                            }),
                            (0, f.jsxs)('div', {
                                style: { fontSize: 18 },
                                children: [
                                    (0, f.jsxs)('div', {
                                        children: [
                                            (0, f.jsx)('span', {
                                                style: { color: 'green' },
                                                children: 'Green:'
                                            }),
                                            ' Servers Healthy'
                                        ]
                                    }),
                                    (0, f.jsxs)('div', {
                                        children: [
                                            (0, f.jsx)('span', {
                                                style: { color: 'orange' },
                                                children: 'Orange:'
                                            }),
                                            ' Servers Slow'
                                        ]
                                    }),
                                    (0, f.jsxs)('div', {
                                        children: [
                                            (0, f.jsx)('span', {
                                                style: { color: 'red' },
                                                children: 'Red:'
                                            }),
                                            ' Servers Not Working'
                                        ]
                                    })
                                ]
                            }),
                            (0, f.jsx)(h.default, {
                                type: 'primary',
                                style: { marginTop: 10 },
                                href: 'https://gimkit.crisp.watch/en/',
                                target: '_blank',
                                children: 'Open Status Page'
                            }),
                            (0, f.jsx)('div', { style: { height: 25 } })
                        ]
                    })
                ]
            })
        ]
    });
    const _s = j.default.div(o || (o = q`
  padding-top: 25px;
  text-align: center;
  width: 100%;
  color: ${ 0 };
  font-family: ${ 0 };
`), k.default.Black, l.Fonts.SFPro), _t = j.default.div(p || (p = q`
  width: 100%;
  width: 90%;
  max-width: 650px;
`));
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _j;
    });
    var e = b('.....'), f = b('.....'), g = b('.....'), h = b('.....'), i = function (j, k) {
            return f.createElement(h.default, (0, e.default)((0, e.default)({}, j), {}, {
                ref: k,
                icon: g.default
            }));
        };
    i.displayName = 'WarningOutlined';
    var _j = f.forwardRef(i);
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _e;
    });
    var _e = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                    tag: 'path',
                    attrs: { d: 'M464 720a48 48 0 1096 0 48 48 0 10-96 0zm16-304v184c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V416c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8zm475.7 440l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zm-783.5-27.9L512 239.9l339.8 588.2H172.2z' }
                }]
        },
        name: 'warning',
        theme: 'outlined'
    };
});