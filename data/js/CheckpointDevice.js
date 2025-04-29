function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('qr1wu', function(c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'default', function() {
        return _s;
    });
    var f = b('s/YA9'),
        g = b('UaUBz0'),
        h = b('ktWA02'),
        i = b('hycyg'),
        j = b('UkCpC'),
        k = b('CbU7r'),
        l = b('3jaMj'),
        m = b('u/WlI21'),
        n = b('uc4mA17'),
        o = b('ltxDW');
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
                onReady: s => {
                    const u = (0, h.default)({
                        width: s.view.width,
                        height: s.view.height,
                        newWidth: this.options.width
                    });
                    s.view.displayWidth = u.width, s.view.displayHeight = u.height;
                    const v = u.height / s.view.height,
                        w = t.min * v,
                        x = t.max * v;
                    this.visualEditing.add.box({
                        angle: 0,
                        rotable: !1,
                        width: u.width,
                        height: u.height,
                        minWidth: t.min,
                        maxWidth: t.max,
                        minHeight: w,
                        maxHeight: x,
                        onChange: s => {
                            (0, m.ReplaceVisualEditingPreview)(s.x, s.y, {
                                width: s.width
                            });
                        }
                    }), this.tweens.add({
                        targets: s.view,
                        y: s.view.y - u.height / 20,
                        duration: 1500,
                        yoyo: !0,
                        repeat: -1,
                        ease: Phaser.Math.Easing.Sine.InOut
                    }), this.state.active ? (s.view.setAlpha(0), s.view.play(q)) : s.view.play(p), this.bubbleIsReady = !0;
                }
            });
        }
    }
    var _s = r;
}), b.register('ktWA02', function(c, d) {
    a(c.exports, 'default', function() {
        return _e;
    });
    var _e = a => {
        const f = a.newWidth / a.width;
        return {
            height: a.height * f,
            width: a.width * f
        };
    };
}), b.register('u/WlI21', function(c, d) {
    a(c.exports, 'ReplaceVisualEditingPreview', function() {
        return _i;
    });
    var e = b('hemXM'),
        f = b('sWmxu5'),
        g = b('EzUqb'),
        h = b('GQMbT');
    const _i = (a, b, c) => {
        const j = (0, h.FetchVisualEditingPreview)(),
            k = (0, g.FetchCurrentlyEditedDevice)();
        if (!k || !j)
            return;
        const l = k.layers.isOnNaturalDepth() ? void 0 : b + k.layers.getDepthShift();
        (0, f.default)({
            deviceOption: j.deviceOption,
            id: e.VisualEditingConstants.previewId,
            x: a,
            y: b,
            depth: l,
            layerId: k.layers.getLayer(),
            name: j.name,
            isPreview: !0,
            options: {
                ...j.options,
                ...c
            },
            placedByClient: !0,
            state: j.deviceOption.defaultState
        });
    };
}), b.register('sWmxu5', function(c, d) {
    a(c.exports, 'default', function() {
        return _g;
    });
    var e = b('heTaO'),
        f = b('2LtPo');
    var _g = a => {
        (0, e.default)().worldManager.devices.getDeviceById(a.id) && (0, f.default)(a);
    };
}), b.register('uc4mA17', function(c, d) {
    a(c.exports, 'FetchOptionSchemaProperty', function() {
        return _e;
    });
    const _e = (a, c) => {
        var f, g, h;
        const i = a.deviceOption.optionSchema.options.find(a => a.key === c);
        return {
            min: null === (f = null == i ? void 0 : i.option.props) || void 0 === f ? void 0 : f.min,
            max: null === (g = null == i ? void 0 : i.option.props) || void 0 === g ? void 0 : g.max,
            step: null === (h = null == i ? void 0 : i.option.props) || void 0 === h ? void 0 : h.step
        };
    };
});