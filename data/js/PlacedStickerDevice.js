var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('xMhFM', function(b, c) {
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
    var i = a('s/YA9'),
        j = a('YQpGS'),
        k = a('fI6of'),
        l = a('UaUBz0'),
        m = a('5Fjxs'),
        n = a('CbU7r'),
        o = a('3jaMj'),
        p = a('ltxDW');
    class q extends p.default {
        constructor(r) {
            if (super(r), (0, i.default)(this, 'onStateChange', r => {
                    'beingRemoved' === r && this.state.beingRemoved && this.sticker && this.tweens.add({
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
                onReady: r => {
                    const u = k.default.session.gameTime - this.options.placedAtTimeStamp;
                    this.sticker = r, r.view.setScale(this.options.scale), this.boundingBox.setHardcoded({
                        width: r.view.displayWidth,
                        height: r.view.displayHeight
                    }), r.view.setScale(this.options.scale), r.view.setDepth(this.options.depth + j.default.Fill + 0.1), r.view.setAlpha(0);
                    const v = r.view.y;
                    r.view.setY(v - 25), u > 1000 ? (r.view.setAlpha(0.85), r.view.setY(v), r.view.setScale(this.options.scale)) : (this.tweens.add({
                        targets: r.view,
                        scale: this.options.scale,
                        alpha: 0.95,
                        y: v,
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