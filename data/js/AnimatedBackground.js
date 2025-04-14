var i = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
i.register("cZown", (function(e, t) {
    var l, a, n, d, s;
    l = e.exports, Object.defineProperty(l, "__esModule", {
        value: !0,
        configurable: !0
    }), a = e.exports, n = "default", d = function() {
        return p
    }, Object.defineProperty(a, n, {
        get: d,
        set: s,
        enumerable: !0,
        configurable: !0
    });
    var o = i("hxEiv");
    i("fywoC");
    var h = i("2FDaO");
    let r, c, x = i => i;
    var p = i => (0, o.jsxs)(f, {
        children: [(0, o.jsx)("div", {
            className: "area",
            children: (0, o.jsxs)("ul", {
                className: "circles",
                children: [(0, o.jsx)("li", {}), (0, o.jsx)("li", {}), (0, o.jsx)("li", {}), (0, o.jsx)("li", {}), (0, o.jsx)("li", {}), (0, o.jsx)("li", {}), (0, o.jsx)("li", {}), (0, o.jsx)("li", {}), (0, o.jsx)("li", {}), (0, o.jsx)("li", {})]
            })
        }), (0, o.jsx)(u, {
            children: i.children
        })]
    });
    const f = h.default.div(r || (r = x`
  flex: 1;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  .area {
    background: #3d109b;
    background: linear-gradient(304deg, #a98cff, #3d109b);
    width: 100%;
    height: 100%;
  }

  .circles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .circles li {
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.2);
    animation: animate 25s linear infinite;
    bottom: -150px;
  }

  .circles li:nth-child(1) {
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
  }

  .circles li:nth-child(2) {
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 12s;
  }

  .circles li:nth-child(3) {
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 4s;
  }

  .circles li:nth-child(4) {
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 18s;
  }

  .circles li:nth-child(5) {
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
  }

  .circles li:nth-child(6) {
    left: 75%;
    width: 110px;
    height: 110px;
    animation-delay: 3s;
  }

  .circles li:nth-child(7) {
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 7s;
  }

  .circles li:nth-child(8) {
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 15s;
    animation-duration: 45s;
  }

  .circles li:nth-child(9) {
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 35s;
  }

  .circles li:nth-child(10) {
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
  }

  @keyframes animate {
    0% {
      transform: translateY(0) rotate(0deg);
      opacity: 1;
      border-radius: 0;
    }

    100% {
      transform: translateY(-1000px) rotate(720deg);
      opacity: 0;
      border-radius: 50%;
    }
  }
`)),
        u = h.default.div.attrs({
            className: "maxAll"
        })(c || (c = x`
  position: absolute;
  top: 0;
  left: 0;
`))
}));