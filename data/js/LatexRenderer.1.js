var e = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
e.register("9YSp3", (function(t, n) {
    var l, r, a, o, i;
    l = t.exports, Object.defineProperty(l, "__esModule", {
        value: !0,
        configurable: !0
    }), r = t.exports, a = "default", o = function() {
        return y
    }, Object.defineProperty(r, a, {
        get: o,
        set: i,
        enumerable: !0,
        configurable: !0
    });
    var s = e("hxEiv"),
        f = e("fywoC"),
        d = e("mS2fe"),
        u = e("2FDaO");
    let c, x, b = e => e;
    const p = e => {
        const t = f.useRef(null);
        return f.useEffect((() => {
            (0, d.renderMathInElement)(t.current, {})
        }), []), (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsx)(h, {}), (0, s.jsx)(g, {
                children: (0, s.jsx)("math-field", {
                    className: "latex",
                    tabIndex: "-1",
                    ref: t,
                    "read-only": !0,
                    style: {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    },
                    children: e.latex
                })
            })]
        })
    };
    var y = e => (0, s.jsx)(p, {
        ...e
    }, e.latex);
    const g = u.default.div(c || (c = b`
  pointer-events: none;
`)),
        h = (0, u.createGlobalStyle)(x || (x = b`
  .latex {
    .ML__base {
      cursor: inherit !important;
    }
  }
`))
}));