var e = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
e.register("emHhD", (function(t, i) {
    var s, a, o, n, d;
    s = t.exports, Object.defineProperty(s, "__esModule", {
        value: !0,
        configurable: !0
    }), a = t.exports, o = "default", n = function() {
        return w
    }, Object.defineProperty(a, o, {
        get: n,
        set: d,
        enumerable: !0,
        configurable: !0
    });
    var l = e("divCp"),
        r = e("lzqnu"),
        c = e("iRjsB"),
        p = e("alREA"),
        h = e("fhnJp"),
        u = e("3iPiZ"),
        f = e("jVQO4"),
        v = e("bNmF9");
    class g extends v.default {
        constructor(e) {
            if (super(e), (0, l.default)(this, "onStateChange", (e => {
                    "beingRemoved" === e && this.state.beingRemoved && this.sticker && this.tweens.add({
                        targets: this.sticker.view,
                        alpha: 0,
                        scale: .25 * this.sticker.view.scale,
                        duration: 400,
                        ease: Phaser.Math.Easing.Quadratic.Out
                    })
                })), this.state.beingRemoved) return;
            if (!this.options.stickerId) return;
            const t = this.options.stickerId.replace("sticker_", ""),
                i = (0, p.default)(`stickers/${t}.png`);
            this.parts.add.sprite({
                imageId: i,
                imageUrl: i,
                onReady: e => {
                    const t = c.default.session.gameTime - this.options.placedAtTimeStamp;
                    this.sticker = e, e.view.setScale(this.options.scale), this.boundingBox.setHardcoded({
                        width: e.view.displayWidth,
                        height: e.view.displayHeight
                    }), e.view.setScale(this.options.scale), e.view.setDepth(this.options.depth + r.default.Fill + .1), e.view.setAlpha(0);
                    const i = e.view.y;
                    e.view.setY(i - 25), t > 1e3 ? (e.view.setAlpha(.85), e.view.setY(i), e.view.setScale(this.options.scale)) : (this.tweens.add({
                        targets: e.view,
                        scale: this.options.scale,
                        alpha: .95,
                        y: i,
                        duration: 400,
                        ease: Phaser.Math.Easing.Bounce.Out
                    }), this.options.placedByCharacterId === (0, h.default)() && (0, f.playSound)({
                        path: (0, p.default)("devices/placed_sticker/placed.mp3"),
                        volume: (0, u.getVolume)({
                            volume: .6,
                            type: u.SoundType.soundEffect
                        })
                    }))
                }
            })
        }
    }
    var w = g
}));