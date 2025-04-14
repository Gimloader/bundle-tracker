function e(e, a, o, t) {
    Object.defineProperty(e, a, {
        get: o,
        set: t,
        enumerable: !0,
        configurable: !0
    })
}
var a = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
a.register("aEk5T", (function(o, t) {
    var i;
    i = o.exports, Object.defineProperty(i, "__esModule", {
        value: !0,
        configurable: !0
    }), e(o.exports, "default", (function() {
        return p
    }));
    var r = a("divCp"),
        s = a("alREA"),
        n = a("fhnJp"),
        l = a("4uojN"),
        d = a("6Tpu2"),
        u = a("bNmF9"),
        f = a("dPNN3"),
        c = a("h6SIm"),
        g = a("hXO9R");
    class b extends u.default {
        constructor(e) {
            if (super(e), (0, r.default)(this, "onMessage", (e => {
                    var a;
                    e.key === g.Messages.triggered && (null == e || null === (a = e.data) || void 0 === a ? void 0 : a.characterId) === (0, n.default)() && this.model && this.model.base && this.model.base.view && this.tweens.add({
                        targets: this.model.base.view,
                        duration: 150,
                        alpha: .85,
                        scale: 1.15 * this.model.base.view.scale,
                        yoyo: !0
                    })
                })), (0, d.InPreGamePhase)() && (0, l.isSavedVersion)()) {
                const e = c.default.Manager;
                this.model = new(0, f.default)({
                    device: this,
                    baseColor: e.baseColor,
                    boxColor: e.boxColor,
                    content: {
                        icon: {
                            image: (0, s.default)("devices/player_appearance_modifier/icon.png")
                        }
                    }
                })
            }
        }
    }
    var p = b
})), a.register("hXO9R", (function(a, o) {
    let t;
    e(a.exports, "Messages", (function() {
        return t
    })), (t || (t = {})).triggered = "triggered"
}));