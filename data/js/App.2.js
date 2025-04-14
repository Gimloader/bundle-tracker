function e(e) {
    return e && e.__esModule ? e.default : e
}
var t = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
t.register("3XuSu", (function(o, a) {
    var n, i, r, d, u;
    n = o.exports, Object.defineProperty(n, "__esModule", {
        value: !0,
        configurable: !0
    }), i = o.exports, r = "default", d = function() {
        return k
    }, Object.defineProperty(i, r, {
        get: d,
        set: u,
        enumerable: !0,
        configurable: !0
    });
    var l = t("hxEiv");
    t("fywoC");
    var s = t("2FDaO"),
        f = t("dmyzc"),
        c = t("aXyEn"),
        b = t("c3ah8"),
        g = t("5OQ4z"),
        p = t("6vbUb"),
        x = t("5JgWp"),
        y = t("dSzUP");
    let h, m, v = e => e;
    const w = {
            out: {
                background: "rgba(0,0,0,0)"
            },
            in: {
                background: "rgba(0,0,0,0.6)"
            }
        },
        j = {
            out: {
                y: "100%",
                opacity: 0
            },
            in: {
                y: 0,
                opacity: 1
            }
        };
    var k = t => {
        const o = (0, x.useIsPresent)() ? .3 : .2,
            a = () => {
                t.setToHomeScreen()
            };
        return (0, g.default)(e(b).Input.Keyboard.KeyCodes.ESC, a, [a]), (0, l.jsxs)(f.default, {
            children: [(0, l.jsx)(C, {
                onClick: a,
                initial: w.out,
                animate: w.in,
                exit: w.out,
                transition: {
                    duration: o,
                    ease: "easeOut"
                },
                children: (0, l.jsx)(O, {
                    onClick: e => e.stopPropagation(),
                    initial: j.out,
                    animate: j.in,
                    exit: j.out,
                    transition: {
                        duration: o,
                        ease: "easeOut"
                    },
                    children: (0, l.jsx)(c.default, {})
                })
            }), (0, l.jsx)(y.default, {
                onClick: a
            })]
        })
    };
    const C = (0, s.default)(p.motion.div).attrs({
            className: "maxAll flex-center"
        })(h || (h = v`
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  overflow: hidden;
`)),
        O = (0, s.default)(p.motion.div).attrs({
            className: "medium-shadow"
        })(m || (m = v`
  background: rgba(48, 28, 86, 0.9);
  width: 90%;
  max-width: 800px;
  height: 80%;
  border-radius: 10px;
  overflow: hidden;
`))
}));