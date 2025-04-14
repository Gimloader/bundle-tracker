function e(e, t, i, s) {
    Object.defineProperty(e, t, {
        get: i,
        set: s,
        enumerable: !0,
        configurable: !0
    })
}
var t = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
t.register("lhcdg", (function(i, s) {
    var n;
    n = i.exports, Object.defineProperty(n, "__esModule", {
        value: !0,
        configurable: !0
    }), e(i.exports, "default", (function() {
        return w
    }));
    var r = t("divCp"),
        a = t("6Tpu2"),
        o = t("bNmF9"),
        d = t("2v5dT"),
        u = t("grQGx"),
        p = t("4uojN"),
        l = t("gwuwo");
    const h = e => {
            (0, l.default)().plugins.get("rexGrayScalePipeline").add(e, {
                intensity: 1
            })
        },
        g = e => {
            (0, l.default)().plugins.get("rexGrayScalePipeline").remove(e)
        };
    class f extends o.default {
        constructor(e) {
            super(e), (0, r.default)(this, "stepOnCounter", 0), (0, r.default)(this, "onMessage", (e => {
                if (e.key === u.Messages.steppedOn) {
                    if (!this.up || !this.down) return;
                    this.stepOnCounter += 1;
                    const e = this.stepOnCounter;
                    this.down.view.setAlpha(1), this.up.view.setAlpha(0), this.downTimeout = window.setTimeout((() => {
                        e === this.stepOnCounter && (this.down.view.setAlpha(0), this.up.view.setAlpha(1))
                    }), 350)
                }
            })), (0, r.default)(this, "onDestroy", (() => {
                this.downTimeout && window.clearTimeout(this.downTimeout)
            })), (0, r.default)(this, "onStateChange", (e => {
                "active" === e && this.updateGrayscale()
            })), (0, r.default)(this, "updateGrayscale", (() => {
                if (this.up && this.down) {
                    let e = this.state.active;
                    (0, a.InPreGamePhase)() && (e = this.options.activeOnGameStart), e ? (g(this.up.view), g(this.down.view)) : (h(this.up.view), h(this.down.view))
                }
            })), (this.options.visibleInGame || !(0, a.InGamePhase)() && !(0, p.isPublishedVersion)()) && (this.up = this.parts.add.sprite(d.UpAsset), this.down = this.parts.add.sprite(d.DownAsset), this.up.view.setScale(.4), this.down.view.setScale(.4), this.down.view.setAlpha(0), this.updateGrayscale())
        }
    }
    var w = f
})), t.register("2v5dT", (function(i, s) {
    e(i.exports, "UpAsset", (function() {
        return r
    })), e(i.exports, "DownAsset", (function() {
        return a
    }));
    var n = t("alREA");
    const r = {
            imageId: (0, n.default)("devices/trigger/trigger_up.png"),
            imageUrl: (0, n.default)("devices/trigger/trigger_up.png")
        },
        a = {
            imageId: (0, n.default)("devices/trigger/trigger_down.png"),
            imageUrl: (0, n.default)("devices/trigger/trigger_down.png")
        }
})), t.register("grQGx", (function(t, i) {
    let s;
    e(t.exports, "Messages", (function() {
        return s
    })), (s || (s = {})).steppedOn = "steppedOn"
}));