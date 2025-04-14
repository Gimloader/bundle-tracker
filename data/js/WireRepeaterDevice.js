function e(e, r, t, n) {
    Object.defineProperty(e, r, {
        get: t,
        set: n,
        enumerable: !0,
        configurable: !0
    })
}
var r = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
r.register("5SkLq", (function(t, n) {
    var s;
    s = t.exports, Object.defineProperty(s, "__esModule", {
        value: !0,
        configurable: !0
    }), e(t.exports, "default", (function() {
        return l
    }));
    var i = r("4uojN"),
        a = r("6Tpu2"),
        o = r("bNmF9"),
        u = r("cYNgJ");
    class d extends o.default {
        constructor(e) {
            super(e), (0, a.InGamePhase)() || (0, i.isPublishedVersion)() || this.parts.add.sprite({
                ...u.BaseAsset,
                onReady: e => {
                    e.view.setScale(.5)
                }
            })
        }
    }
    var l = d
})), r.register("cYNgJ", (function(t, n) {
    e(t.exports, "BaseAsset", (function() {
        return s
    }));
    const s = {
        imageId: "wire_repeater_device",
        imageUrl: (0, r("alREA").default)("devices/wire_repeater/base.png")
    }
}));