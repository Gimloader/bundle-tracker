function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('.....', function(c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'default', function() {
        return _s;
    });
    var f = b('.....'),
        g = b('.....'),
        h = b('.....'),
        i = b('.....'),
        j = b('.....'),
        k = b('.....'),
        l = b('.....'),
        m = b('.....'),
        n = b('.....'),
        o = b('.....');
    const p = 'checkpoint-idle',
        q = 'checkpoint-pop';
    class r extends o.default {
        constructor(s) {
            if (super(s), (0, f.default)(this, 'bubbleIsReady', !1), (0, f.default)(this, 'createdAt', Date.now()), (0, f.default)(this, 'onBubbleActiveChange', () => {
                    this.state.active ? (Date.now() - this.createdAt > 1000 && this.options.playAudio && this.options.visibleInGame && this.cull.isInsideView && (0, l.playSound)({
                        path: (0, g.default)('devices/checkpoint/sound.mp3'),
                        volume: (0, k.getVolume)({
                            volume: 0.75,
                            type: k.SoundType.soundEffect
                        })
                    }), this.bubble.view.play(q)) : (this.bubble.view.setAlpha(0), this.tweens.add({
                        targets: this.bubble.view,
                        alpha: 1,
                        duration: 400
                    }), this.bubble.view.play(p));
                }), (0, f.default)(this, 'onStateChange', () => {
                    this.bubbleIsReady && this.onBubbleActiveChange();
                }), ((0, i.isPublishedVersion)() || (0, j.InGamePhase)()) && (!this.options.visibleInGame || !this.options.enabled))
                return;
            const t = (0, n.FetchOptionSchemaProperty)(this, 'width');
            this.bubble = this.parts.add.animatedSprite({
                spritesheetId: 'checkpoint-device',
                spritesheetUrl: (0, g.default)('devices/checkpoint/bubble.png'),
                frameWidth: 500,
                frameHeight: 492,
                animations: [{
                        animName: p,
                        frameRate: 1,
                        animFrames: {
                            start: 0,
                            end: 0
                        }
                    },
                    {
                        animName: q,
                        frameRate: 34,
                        animFrames: {
                            start: 0,
                            end: 11
                        },
                        repeat: 0
                    }
                ],
                onReady: u => {
                    const v = (0, h.default)({
                        width: u.view.width,
                        height: u.view.height,
                        newWidth: this.options.width
                    });
                    u.view.displayWidth = v.width, u.view.displayHeight = v.height;
                    const w = v.height / u.view.height,
                        x = t.min * w,
                        y = t.max * w;
                    this.visualEditing.add.box({
                        angle: 0,
                        rotable: !1,
                        width: v.width,
                        height: v.height,
                        minWidth: t.min,
                        maxWidth: t.max,
                        minHeight: x,
                        maxHeight: y,
                        onChange: z => {
                            (0, m.ReplaceVisualEditingPreview)(z.x, z.y, {
                                width: z.width
                            });
                        }
                    }), this.tweens.add({
                        targets: u.view,
                        y: u.view.y - v.height / 20,
                        duration: 1500,
                        yoyo: !0,
                        repeat: -1,
                        ease: Phaser.Math.Easing.Sine.InOut
                    }), this.state.active ? (u.view.setAlpha(0), u.view.play(q)) : u.view.play(p), this.bubbleIsReady = !0;
                }
            });
        }
    }
    var _s = r;
}), b.register('.....', function(c, d) {
    a(c.exports, 'default', function() {
        return _e;
    });
    var _e = f => {
        const g = f.newWidth / f.width;
        return {
            height: f.height * g,
            width: f.width * g
        };
    };
}), b.register('.....', function(c, d) {
    a(c.exports, 'ReplaceVisualEditingPreview', function() {
        return _i;
    });
    var e = b('.....'),
        f = b('.....'),
        g = b('.....'),
        h = b('.....');
    const _i = (j, k, l) => {
        const m = (0, h.FetchVisualEditingPreview)(),
            n = (0, g.FetchCurrentlyEditedDevice)();
        if (!n || !m)
            return;
        const o = n.layers.isOnNaturalDepth() ? void 0 : k + n.layers.getDepthShift();
        (0, f.default)({
            deviceOption: m.deviceOption,
            id: e.VisualEditingConstants.previewId,
            x: j,
            y: k,
            depth: o,
            layerId: n.layers.getLayer(),
            name: m.name,
            isPreview: !0,
            options: {
                ...m.options,
                ...l
            },
            placedByClient: !0,
            state: m.deviceOption.defaultState
        });
    };
}), b.register('.....', function(c, d) {
    a(c.exports, 'default', function() {
        return _g;
    });
    var e = b('.....'),
        f = b('.....');
    var _g = h => {
        (0, e.default)().worldManager.devices.getDeviceById(h.id) && (0, f.default)(h);
    };
}), b.register('.....', function(c, d) {
    a(c.exports, 'FetchOptionSchemaProperty', function() {
        return _e;
    });
    const _e = (f, g) => {
        var h, i, j;
        const k = f.deviceOption.optionSchema.options.find(l => l.key === g);
        return {
            min: null === (h = null == k ? void 0 : k.option.props) || void 0 === h ? void 0 : h.min,
            max: null === (i = null == k ? void 0 : k.option.props) || void 0 === i ? void 0 : i.max,
            step: null === (j = null == k ? void 0 : k.option.props) || void 0 === j ? void 0 : j.step
        };
    };
});