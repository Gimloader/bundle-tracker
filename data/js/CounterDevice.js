function e(e, t, i, a) {
    Object.defineProperty(e, t, {
        get: i,
        set: a,
        enumerable: !0,
        configurable: !0
    })
}

function t(e) {
    return e && e.__esModule ? e.default : e
}
var i = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
i.register("4hHI6", (function(t, a) {
    var s;
    s = t.exports, Object.defineProperty(s, "__esModule", {
        value: !0,
        configurable: !0
    }), e(t.exports, "default", (function() {
        return f
    }));
    var n = i("divCp"),
        o = i("bNmF9"),
        r = i("2awpa"),
        u = i("2BPYb"),
        l = i("6Tpu2"),
        d = i("4uojN");
    class c extends o.default {
        constructor(e) {
            if (super(e), (0, n.default)(this, "textScale", 1), (0, n.default)(this, "onStateChange", (e => {
                    var t;
                    "counter" === e && (null === (t = this.text) || void 0 === t ? void 0 : t.view) && (this.text.view.setText(this.state.counter + ""), this.updateTextScale(), this.tweens.add({
                        targets: [this.text.view],
                        duration: 100,
                        scaleX: .8 * this.textScale,
                        scaleY: .8 * this.textScale,
                        yoyo: !0
                    }))
                })), (0, n.default)(this, "updateTextScale", (() => {
                    this.textScale = Math.min(3 / this.text.view.text.length, 1), this.text.view.setScale(this.textScale)
                })), ((0, l.InGamePhase)() || (0, d.isPublishedVersion)()) && !this.options.visibleInGame) return;
            var t, i;
            this.bg = this.parts.add.sprite(r.BackgroundAsset), this.frame = this.parts.add.sprite(r.FrameAsset), this.bg.view.setScale(.5), this.frame.view.setScale(.5);
            const a = (null !== (i = null !== (t = this.state.counter) && void 0 !== t ? t : this.options.startingValue) && void 0 !== i ? i : 0) + "";
            this.text = this.parts.add.text({
                y: 2,
                textStyle: {
                    fontFamily: "Fugaz One"
                },
                text: a
            }), this.text.view.alpha = 0, (0, u.default)({
                familyName: "Fugaz One",
                onLoad: () => {
                    this.isDestroyed || (this.text.view.setFontFamily("'Fugaz One'"), this.text.view.alpha = 1)
                }
            }), this.updateTextScale()
        }
    }
    var f = c
})), i.register("2awpa", (function(t, a) {
    e(t.exports, "FrameAsset", (function() {
        return n
    })), e(t.exports, "BackgroundAsset", (function() {
        return o
    }));
    var s = i("alREA");
    const n = {
            imageId: (0, s.default)("devices/counter/frame.png"),
            imageUrl: (0, s.default)("devices/counter/frame.png")
        },
        o = {
            imageId: (0, s.default)("devices/counter/background.png"),
            imageUrl: (0, s.default)("devices/counter/background.png")
        }
})), i.register("2BPYb", (function(a, s) {
    e(a.exports, "isGoogleFontLoaded", (function() {
        return r
    })), e(a.exports, "default", (function() {
        return u
    }));
    var n = i("7P9gc");
    const o = [],
        r = e => o.includes(e);
    var u = e => {
        const {
            familyName: i,
            onLoad: a
        } = e;
        o.includes(i) ? a && a() : t(n).load({
            google: {
                families: [`${i}:400,700`]
            },
            fontactive: e => {
                o.includes(e) || o.push(e), i === e && a && a()
            }
        })
    }
}));