function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('JM8dn', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _r(b.exports, 'default', function() {
        return _r;
    });
    var e = a('1bFPu'),
        f = a('2Xvuf'),
        g = a('SINjC2'),
        h = a('9tz3H'),
        i = a('/pbxo'),
        j = a('1f1YX'),
        k = a('07pQo'),
        l = a('IFO6W13'),
        m = a('R2Ucl10'),
        n = a('I35Ay');
    const o = 'checkpoint-idle',
        p = 'checkpoint-pop';
    class q extends n.default {
        constructor(_r) {
            if (super(_r), (0, e.default)(this, 'bubbleIsReady', !1), (0, e.default)(this, 'createdAt', Date.now()), (0, e.default)(this, 'onBubbleActiveChange', () => {
                    this.state.active ? (Date.now() - this.createdAt > 1000 && this.options.playAudio && this.options.visibleInGame && this.cull.isInsideView && (0, k.playSound)({
                        path: (0, f.default)('devices/checkpoint/sound.mp3'),
                        volume: (0, j.getVolume)({
                            volume: 0.75,
                            type: j.SoundType.soundEffect
                        })
                    }), this.bubble.view.play(p)) : (this.bubble.view.setAlpha(0), this.tweens.add({
                        targets: this.bubble.view,
                        alpha: 1,
                        duration: 400
                    }), this.bubble.view.play(o));
                }), (0, e.default)(this, 'onStateChange', () => {
                    this.bubbleIsReady && this.onBubbleActiveChange();
                }), ((0, h.isPublishedVersion)() || (0, i.InGamePhase)()) && (!this.options.visibleInGame || !this.options.enabled))
                return;
            const s = (0, m.FetchOptionSchemaProperty)(this, 'width');
            this.bubble = this.parts.add.animatedSprite({
                spritesheetId: 'checkpoint-device',
                spritesheetUrl: (0, f.default)('devices/checkpoint/bubble.png'),
                frameWidth: 500,
                frameHeight: 492,
                animations: [{
                        animName: o,
                        frameRate: 1,
                        animFrames: {
                            start: 0,
                            end: 0
                        }
                    },
                    {
                        animName: p,
                        frameRate: 34,
                        animFrames: {
                            start: 0,
                            end: 11
                        },
                        repeat: 0
                    }
                ],
                onReady: _r => {
                    const t = (0, g.default)({
                        width: _r.view.width,
                        height: _r.view.height,
                        newWidth: this.options.width
                    });
                    _r.view.displayWidth = t.width, _r.view.displayHeight = t.height;
                    const u = t.height / _r.view.height,
                        v = s.min * u,
                        w = s.max * u;
                    this.visualEditing.add.box({
                        angle: 0,
                        rotable: !1,
                        width: t.width,
                        height: t.height,
                        minWidth: s.min,
                        maxWidth: s.max,
                        minHeight: v,
                        maxHeight: w,
                        onChange: _r => {
                            (0, l.ReplaceVisualEditingPreview)(_r.x, _r.y, {
                                width: _r.width
                            });
                        }
                    }), this.tweens.add({
                        targets: _r.view,
                        y: _r.view.y - t.height / 20,
                        duration: 1500,
                        yoyo: !0,
                        repeat: -1,
                        ease: Phaser.Math.Easing.Sine.InOut
                    }), this.state.active ? (_r.view.setAlpha(0), _r.view.play(p)) : _r.view.play(o), this.bubbleIsReady = !0;
                }
            });
        }
    }
    var _r = q;
}), a.register('SINjC2', function(b, c) {
    e(b.exports, 'default', function() {
        return _d;
    });
    var _d = e => {
        const e = e.newWidth / e.width;
        return {
            height: e.height * e,
            width: e.width * e
        };
    };
}), a.register('IFO6W13', function(b, c) {
    e(b.exports, 'ReplaceVisualEditingPreview', function() {
        return _h;
    });
    var d = a('HqwPM'),
        e = a('+oovY4'),
        f = a('A17vD'),
        g = a('HXXiu');
    const _h = (e, a, b) => {
        const i = (0, g.FetchVisualEditingPreview)(),
            j = (0, f.FetchCurrentlyEditedDevice)();
        if (!j || !i)
            return;
        const k = j.layers.isOnNaturalDepth() ? void 0 : a + j.layers.getDepthShift();
        (0, e.default)({
            deviceOption: i.deviceOption,
            id: d.VisualEditingConstants.previewId,
            x: e,
            y: a,
            depth: k,
            layerId: j.layers.getLayer(),
            name: i.name,
            isPreview: !0,
            options: {
                ...i.options,
                ...b
            },
            placedByClient: !0,
            state: i.deviceOption.defaultState
        });
    };
}), a.register('+oovY4', function(b, c) {
    e(b.exports, 'default', function() {
        return _f;
    });
    var d = a('D5xLI'),
        e = a('aIyMH');
    var _f = e => {
        (0, d.default)().worldManager.devices.getDeviceById(e.id) && (0, e.default)(e);
    };
}), a.register('R2Ucl10', function(b, c) {
    e(b.exports, 'FetchOptionSchemaProperty', function() {
        return _d;
    });
    const _d = (e, b) => {
        var e, f, g;
        const h = e.deviceOption.optionSchema.options.find(e => e.key === b);
        return {
            min: null === (e = null == h ? void 0 : h.option.props) || void 0 === e ? void 0 : e.min,
            max: null === (f = null == h ? void 0 : h.option.props) || void 0 === f ? void 0 : f.max,
            step: null === (g = null == h ? void 0 : h.option.props) || void 0 === g ? void 0 : g.step
        };
    };
});