function e(e, n, t, r) {
    Object.defineProperty(e, n, {
        get: t,
        set: r,
        enumerable: !0,
        configurable: !0
    })
}
var n = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
n.register("5j0Lk", (function(t, r) {
    var a;
    a = t.exports, Object.defineProperty(a, "__esModule", {
        value: !0,
        configurable: !0
    }), e(t.exports, "ANIMATION_DURATION", (function() {
        return h
    })), e(t.exports, "default", (function() {
        return m
    }));
    var o = n("hxEiv"),
        i = n("fywoC"),
        l = n("2FDaO"),
        d = n("6vbUb"),
        s = n("5OQ4z"),
        u = n("dmyzc"),
        c = n("d2bV7"),
        f = n("cPghx");
    let b, g, p = e => e;
    const x = i.lazy((() => n("gkBWz"))),
        h = .3;
    var m = (0, c.withDeviceUIWrapper)((e => ((0, s.default)(Phaser.Input.Keyboard.KeyCodes.ESC, e.close, [e.close]), (0, o.jsx)(y, {
        children: (0, o.jsx)(v, {
            initial: {
                background: "rgba(0,0,0,0)"
            },
            animate: {
                background: "rgba(0,0,0,0.7)"
            },
            exit: {
                background: "rgba(0,0,0,0)"
            },
            transition: {
                duration: h
            },
            children: (0, o.jsx)(i.Suspense, {
                fallback: null,
                children: (0, o.jsx)(x, {
                    ...e
                })
            })
        })
    }))));
    const y = (0, l.default)(u.default).attrs({
            className: "maxAll"
        })(b || (b = p`
  overflow: hidden;
  z-index: ${0};
`), f.default.primaryContent),
        v = (0, l.default)(d.motion.div).attrs({
            className: "maxAll"
        })(g || (g = p``))
})), n.register("gkBWz", (function(e, t) {
    e.exports = import("./" + n("ihc6Q").resolve("jcmm2")).then((() => n("inu9S")))
}));