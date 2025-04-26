var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('2tkGq', function(p, q) {
    var b, c, d, e, f;
    b = p.exports, Object.defineProperty(b, '__esModule', {
        value: !0,
        configurable: !0
    }), c = p.exports, d = 'default', e = function() {
        return p;
    }, Object.defineProperty(c, d, {
        get: e,
        set: f,
        enumerable: !0,
        configurable: !0
    });
    var g = a('UM8oI'),
        h = a('CfW3Y'),
        i = a('7Sbqr'),
        j = a('JJQ0+'),
        k = a('PUlKf'),
        l = a('Ena4B'),
        m = a('OlpXx'),
        n = a('sgILU');
    class o extends n.default {
        constructor(a) {
            if (super(a), (0, g.default)(this, 'onStateChange', a => {
                    'beingRemoved' === a && this.state.beingRemoved && this.sticker && this.tweens.add({
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
            const p = this.options.stickerId.replace('sticker_', ''),
                q = (0, j.default)(`stickers/${ p }.png`);
            this.parts.add.sprite({
                imageId: q,
                imageUrl: q,
                onReady: a => {
                    const r = i.default.session.gameTime - this.options.placedAtTimeStamp;
                    this.sticker = a, a.view.setScale(this.options.scale), this.boundingBox.setHardcoded({
                        width: a.view.displayWidth,
                        height: a.view.displayHeight
                    }), a.view.setScale(this.options.scale), a.view.setDepth(this.options.depth + h.default.Fill + 0.1), a.view.setAlpha(0);
                    const s = a.view.y;
                    a.view.setY(s - 25), r > 1000 ? (a.view.setAlpha(0.85), a.view.setY(s), a.view.setScale(this.options.scale)) : (this.tweens.add({
                        targets: a.view,
                        scale: this.options.scale,
                        alpha: 0.95,
                        y: s,
                        duration: 400,
                        ease: Phaser.Math.Easing.Bounce.Out
                    }), this.options.placedByCharacterId === (0, k.default)() && (0, m.playSound)({
                        path: (0, j.default)('devices/placed_sticker/placed.mp3'),
                        volume: (0, l.getVolume)({
                            volume: 0.6,
                            type: l.SoundType.soundEffect
                        })
                    }));
                }
            });
        }
    }
    var p = q;
});