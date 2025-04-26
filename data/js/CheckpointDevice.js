function a(a, b, r, s) {
    Object.defineProperty(a, b, {
        get: r,
        set: s,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('1o5Co', function(r, s) {
    var c;
    c = r.exports, Object.defineProperty(c, '__esModule', {
        value: !0,
        configurable: !0
    }), a(r.exports, 'default', function() {
        return q;
    });
    var d = b('UM8oI'),
        e = b('JJQ0+'),
        f = b('VkIHd0'),
        g = b('Bpt+p'),
        h = b('5Ux1a'),
        i = b('Ena4B'),
        j = b('OlpXx'),
        k = b('wSwKo5'),
        l = b('/Lvpl17'),
        m = b('sgILU');
    const n = 'checkpoint-idle',
        o = 'checkpoint-pop';
    class p extends m.default {
        constructor(a) {
            if (super(a), (0, d.default)(this, 'bubbleIsReady', !1), (0, d.default)(this, 'createdAt', Date.now()), (0, d.default)(this, 'onBubbleActiveChange', () => {
                    this.state.active ? (Date.now() - this.createdAt > 1000 && this.options.playAudio && this.options.visibleInGame && this.cull.isInsideView && (0, j.playSound)({
                        path: (0, e.default)('devices/checkpoint/sound.mp3'),
                        volume: (0, i.getVolume)({
                            volume: 0.75,
                            type: i.SoundType.soundEffect
                        })
                    }), this.bubble.view.play(o)) : (this.bubble.view.setAlpha(0), this.tweens.add({
                        targets: this.bubble.view,
                        alpha: 1,
                        duration: 400
                    }), this.bubble.view.play(n));
                }), (0, d.default)(this, 'onStateChange', () => {
                    this.bubbleIsReady && this.onBubbleActiveChange();
                }), ((0, g.isPublishedVersion)() || (0, h.InGamePhase)()) && (!this.options.visibleInGame || !this.options.enabled))
                return;
            const q = (0, l.FetchOptionSchemaProperty)(this, 'width');
            this.bubble = this.parts.add.animatedSprite({
                spritesheetId: 'checkpoint-device',
                spritesheetUrl: (0, e.default)('devices/checkpoint/bubble.png'),
                frameWidth: 500,
                frameHeight: 492,
                animations: [{
                        animName: n,
                        frameRate: 1,
                        animFrames: {
                            start: 0,
                            end: 0
                        }
                    },
                    {
                        animName: o,
                        frameRate: 34,
                        animFrames: {
                            start: 0,
                            end: 11
                        },
                        repeat: 0
                    }
                ],
                onReady: a => {
                    const r = (0, f.default)({
                        width: a.view.width,
                        height: a.view.height,
                        newWidth: this.options.width
                    });
                    a.view.displayWidth = r.width, a.view.displayHeight = r.height;
                    const s = r.height / a.view.height,
                        t = q.min * s,
                        u = q.max * s;
                    this.visualEditing.add.box({
                        angle: 0,
                        rotable: !1,
                        width: r.width,
                        height: r.height,
                        minWidth: q.min,
                        maxWidth: q.max,
                        minHeight: t,
                        maxHeight: u,
                        onChange: a => {
                            (0, k.ReplaceVisualEditingPreview)(a.x, a.y, {
                                width: a.width
                            });
                        }
                    }), this.tweens.add({
                        targets: a.view,
                        y: a.view.y - r.height / 20,
                        duration: 1500,
                        yoyo: !0,
                        repeat: -1,
                        ease: Phaser.Math.Easing.Sine.InOut
                    }), this.state.active ? (a.view.setAlpha(0), a.view.play(o)) : a.view.play(n), this.bubbleIsReady = !0;
                }
            });
        }
    }
    var q = r;
}), b.register('VkIHd0', function(b, d) {
    a(b.exports, 'default', function() {
        return c;
    });
    var c = a => {
        const d = a.newWidth / a.width;
        return {
            height: a.height * d,
            width: a.width * d
        };
    };
}), b.register('wSwKo5', function(d, h) {
    a(d.exports, 'ReplaceVisualEditingPreview', function() {
        return g;
    });
    var c = b('2pEsK'),
        d = b('Am0b71'),
        e = b('KDS1x'),
        f = b('83+vO');
    const g = (a, b, d) => {
        const h = (0, f.FetchVisualEditingPreview)(),
            i = (0, e.FetchCurrentlyEditedDevice)();
        if (!i || !h)
            return;
        const j = i.layers.isOnNaturalDepth() ? void 0 : b + i.layers.getDepthShift();
        (0, d.default)({
            deviceOption: h.deviceOption,
            id: c.VisualEditingConstants.previewId,
            x: a,
            y: b,
            depth: j,
            layerId: i.layers.getLayer(),
            name: h.name,
            isPreview: !0,
            options: {
                ...h.options,
                ...d
            },
            placedByClient: !0,
            state: h.deviceOption.defaultState
        });
    };
}), b.register('Am0b71', function(d, c) {
    a(d.exports, 'default', function() {
        return e;
    });
    var c = b('dAmf5'),
        d = b('jgFbX');
    var e = a => {
        (0, c.default)().worldManager.devices.getDeviceById(a.id) && (0, d.default)(a);
    };
}), b.register('/Lvpl17', function(b, d) {
    a(b.exports, 'FetchOptionSchemaProperty', function() {
        return c;
    });
    const c = (a, b) => {
        var d, e, f;
        const g = a.deviceOption.optionSchema.options.find(a => a.key === b);
        return {
            min: null === (d = null == g ? void 0 : g.option.props) || void 0 === d ? void 0 : d.min,
            max: null === (e = null == g ? void 0 : g.option.props) || void 0 === e ? void 0 : e.max,
            step: null === (f = null == g ? void 0 : g.option.props) || void 0 === f ? void 0 : f.step
        };
    };
});