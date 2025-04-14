var e = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
e.register("03Wfb", (function(t, i) {
    var a, o, r, n, s;
    a = t.exports, Object.defineProperty(a, "__esModule", {
        value: !0,
        configurable: !0
    }), o = t.exports, r = "default", n = function() {
        return y
    }, Object.defineProperty(o, r, {
        get: n,
        set: s,
        enumerable: !0,
        configurable: !0
    });
    var l = e("hxEiv"),
        d = e("fywoC"),
        c = e("d2bV7"),
        u = e("5OQ4z"),
        f = e("2FDaO"),
        p = e("6vbUb"),
        b = e("dmyzc"),
        m = e("cPghx");
    let x, g, h, v = e => e;
    const C = d.lazy((() => e("lqPNq")));
    var y = (0, c.withDeviceUIWrapper)((e => ((0, u.default)(Phaser.Input.Keyboard.KeyCodes.ESC, e.close, []), (0, l.jsx)(w, {
        children: (0, l.jsx)(A, {
            initial: {
                background: "rgba(0,0,0,0)"
            },
            animate: {
                background: "rgba(0,0,0,0.4)"
            },
            exit: {
                background: "rgba(0,0,0,0)"
            },
            transition: {
                duration: .3
            },
            onClick: e.close,
            children: (0, l.jsx)(j, {
                initial: {
                    x: "125%"
                },
                animate: {
                    x: "0%"
                },
                exit: {
                    x: "125%"
                },
                transition: {
                    duration: .3,
                    ease: "easeOut"
                },
                onClick: e => e.stopPropagation(),
                children: (0, l.jsx)(d.Suspense, {
                    fallback: (0, l.jsx)("div", {}),
                    children: (0, l.jsx)(C, {
                        status: e.status,
                        style: e.style,
                        tableGroup: e.tableGroup,
                        craft: e.craft,
                        collect: e.collect,
                        item: e.item,
                        itemAmount: e.itemAmount,
                        craftingDurationMs: e.craftingDurationMs,
                        itemFinishesCraftingAt: e.itemFinishesCraftingAt,
                        itemDisposalMs: e.itemDisposalMs,
                        itemDisposedAt: e.itemDisposedAt,
                        itemCrafterCharacterId: e.itemCrafterCharacterId,
                        useCrafterCollectionAdvantage: e.useCrafterCollectionAdvantage,
                        close: e.close
                    })
                })
            })
        })
    }))));
    const w = (0, f.default)(b.default).attrs({
            className: "maxAll"
        })(x || (x = v`
  overflow: hidden;
  z-index: ${0};
`), m.default.primaryContent),
        A = (0, f.default)(p.motion.div).attrs({
            className: "maxAll"
        })(g || (g = v`
  position: relative;
`)),
        j = (0, f.default)(p.motion.div)(h || (h = v`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 70%;
  max-width: 420px;
  box-shadow: -13px 2px 54px 1px rgba(0, 0, 0, 0.41);
  overflow: hidden;
`))
})), e.register("lqPNq", (function(t, i) {
    t.exports = import("./" + e("ihc6Q").resolve("82wAP")).then((() => e("2z16z")))
}));