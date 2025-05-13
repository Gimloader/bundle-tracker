var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('.....', function(b, c) {
    var d, e, f, g, h;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), e = b.exports, f = 'default', g = function() {
        return _r;
    }, Object.defineProperty(e, f, {
        get: g,
        set: h,
        enumerable: !0,
        configurable: !0
    });
    var i = a('.....'),
        j = a('.....'),
        k = a('.....'),
        l = a('.....'),
        m = a('.....'),
        n = a('.....'),
        o = a('.....'),
        p = a('.....');
    class q extends p.default {
        constructor(r) {
            if (super(r), (0, i.default)(this, 'onStateChange', s => {
                    'beingRemoved' === s && this.state.beingRemoved && this.sticker && this.tweens.add({
                        targets: this.sticker.view,
                        alpha: 0,
                        scale: 0.25 * this.sticker.view.scale,
                        duration: 400,
                        ease: Phaser.Math.Easing.Quadratic.Out
                    });
                }), this.state.beingRemoved)
                return;
            if (!this.options.stickerId)
                return;
            const s = this.options.stickerId.replace('sticker_', ''),
                t = (0, l.default)(`stickers/${ s }.png`);
            this.parts.add.sprite({
                imageId: t,
                imageUrl: t,
                onReady: u => {
                    const v = k.default.session.gameTime - this.options.placedAtTimeStamp;
                    this.sticker = u, u.view.setScale(this.options.scale), this.boundingBox.setHardcoded({
                        width: u.view.displayWidth,
                        height: u.view.displayHeight
                    }), u.view.setScale(this.options.scale), u.view.setDepth(this.options.depth + j.default.Fill + 0.1), u.view.setAlpha(0);
                    const w = u.view.y;
                    u.view.setY(w - 25), v > 1000 ? (u.view.setAlpha(0.85), u.view.setY(w), u.view.setScale(this.options.scale)) : (this.tweens.add({
                        targets: u.view,
                        scale: this.options.scale,
                        alpha: 0.95,
                        y: w,
                        duration: 400,
                        ease: Phaser.Math.Easing.Bounce.Out
                    }), this.options.placedByCharacterId === (0, m.default)() && (0, o.playSound)({
                        path: (0, l.default)('devices/placed_sticker/placed.mp3'),
                        volume: (0, n.getVolume)({
                            volume: 0.6,
                            type: n.SoundType.soundEffect
                        })
                    }));
                }
            });
        }
    }
    var _r = q;
});