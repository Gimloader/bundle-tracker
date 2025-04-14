var e = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
e.register("6LTxW", (function(t, a) {
    var l, r, n, o, i;
    l = t.exports, Object.defineProperty(l, "__esModule", {
        value: !0,
        configurable: !0
    }), r = t.exports, n = "default", o = function() {
        return j
    }, Object.defineProperty(r, n, {
        get: o,
        set: i,
        enumerable: !0,
        configurable: !0
    });
    var s = e("hxEiv");
    e("fywoC");
    var d = e("2FDaO"),
        f = e("4ifJF"),
        u = e("93yIm"),
        p = e("fC6cp"),
        y = e("4y75y"),
        c = e("69SUA"),
        g = e("alREA"),
        h = e("kyvf1"),
        x = e("b1oE9"),
        b = e("8UJqa");
    let m, v, w = e => e;
    var j = e => (0, s.jsxs)(C, {
        children: [(0, s.jsx)(T, {}), (0, s.jsx)(y.default.Title, {
            style: {
                fontFamily: c.Fonts.FugazOne,
                textTransform: "uppercase"
            },
            level: 1,
            children: "Publish"
        }), (0, s.jsxs)(y.default.Text, {
            style: {
                marginTop: 10
            },
            children: ["Share your map with the world! Publish your map to have it appear on our", " ", (0, s.jsx)(h.default, {
                to: x.CREATIVE_DISCOVERY,
                target: "_blank",
                style: {
                    color: b.default.Yellow,
                    textDecoration: "underline"
                },
                children: "Creative Discovery"
            }), " ", "page, where anybody can find and play your map!"]
        }), (0, s.jsx)(p.default, {}), (0, s.jsx)(u.default, {
            size: "large",
            block: !0,
            type: "primary",
            style: {
                height: 55
            },
            onClick: e.next,
            children: "Continue"
        })]
    });
    const C = (0, d.default)(f.CenteredColumn).attrs({
            className: "maxWidth"
        })(m || (m = w`
  text-align: center;
`)),
        T = d.default.img.attrs({
            src: (0, g.default)("publishing/megaphone.svg")
        })(v || (v = w`
  height: 85px;
  margin-bottom: 17px;
  filter: drop-shadow(0px 1px 6px rgba(0, 0, 0, 0.5));
  transform: rotate(-8deg);
`))
}));