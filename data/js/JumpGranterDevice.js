function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('dalN5', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _v(b.exports, 'default', function() {
        return _v;
    });
    var e = a('1bFPu'),
        f = a('I35Ay'),
        g = a('pUH1t'),
        h = a('VYdcK'),
        i = a('/pbxo'),
        j = a('bJOhp'),
        k = a('B7ZvS'),
        l = a('Jfada'),
        m = a('eXure'),
        n = a('Fzqo2'),
        o = a('SINjC2'),
        p = a('9tz3H'),
        q = a('07pQo'),
        r = a('2Xvuf'),
        s = a('4iV4e'),
        t = a('1f1YX');
    class u extends f.default {
        destroy(_v) {
            super.destroy(_v), this.timeout && clearTimeout(this.timeout);
        }
        constructor(v) {
            super(v), (0, e.default)(this, 'isDisabled', !1), (0, e.default)(this, 'isAnimationReady', !1), (0, e.default)(this, 'size', {
                width: 0,
                height: 0
            }), (0, e.default)(this, 'grantJumps', () => {
                const w = (0, k.default)((0, l.default)());
                w && ((0, q.playSound)({
                    path: (0, r.default)(`devices/jump_granter/collect${ (0, s.random)(1, 3) }.mp3`),
                    volume: (0, t.getVolume)({
                        volume: 0.8,
                        type: t.SoundType.soundEffect
                    })
                }), this.options.mode === h.JumpGranterMode.reset ? (w.physics.state.jump.jumpCounter = 0, w.physics.state.jump.jumpsLeft = (0, m.ClassDesignerUtils_GetJumpParams)({
                    characterId: w.id
                }).maxJumps) : this.options.mode === h.JumpGranterMode.grant && (w.physics.state.jump.jumpsLeft += this.options.jumpsNumber));
            }), (0, e.default)(this, 'isSensorActive', () => !this.isDisabled && !this.state.disabled && this.state.active), (0, e.default)(this, 'animateAlpha', () => {
                var w;
                const x = this.state.active ? 1 : 0;
                (null === (w = this.anim) || void 0 === w ? void 0 : w.view) && this.tweens.add({
                    targets: [this.anim.view],
                    alpha: x,
                    duration: 250
                });
            }), (0, e.default)(this, 'onStateChange', v => {
                'disabled' === v && (!this.isDisabled && this.state.disabled && this.isAnimationReady ? this.anim.view.play(g.AnimNames.activate) : this.isDisabled || this.state.disabled || !this.isAnimationReady || this.startIdleAnimation()), 'active' === v && this.animateAlpha();
            }), (0, e.default)(this, 'startIdleAnimation', () => {
                this.anim.view.play(g.AnimNames.idle), this.anim.view.setScale(0), this.tweens.add({
                    targets: this.anim.view,
                    displayWidth: this.size.width,
                    displayHeight: this.size.height,
                    duration: 350,
                    ease: Phaser.Math.Easing.Back.Out
                });
            }), this.anim = this.parts.add.animatedSprite({
                ...g.SpriteAnimAsset,
                onReady: v => {
                    this.size = {
                        ...(0, o.default)({
                            height: v.view.height,
                            width: v.view.width,
                            newWidth: n.JumpGranterDeviceSize.width
                        })
                    }, v.view.displayWidth = this.size.width, v.view.displayHeight = this.size.height, this.tweens.add({
                        targets: v.view,
                        y: v.view.y - 15,
                        duration: 1500,
                        yoyo: !0,
                        repeat: -1,
                        ease: Phaser.Math.Easing.Sine.InOut
                    }), this.isAnimationReady = !0, !this.state.active && (0, i.InGamePhase)() && (v.view.alpha = 0), (this.isDisabled || this.state.disabled) && v.view.play(g.AnimNames.inactive);
                }
            }), (0, p.isSavedVersion)() && (0, i.InPreGamePhase)() || this.sensors.add.circle({
                r: n.JumpGranterDeviceSize.radius,
                type: j.SensorType.around,
                onFresh: () => {
                    if (!this.isSensorActive())
                        return;
                    const w = (0, k.default)((0, l.default)());
                    w && (w.physics.state.grounded || (this.grantJumps(), this.isDisabled = !0, this.isAnimationReady && this.anim.view.play(g.AnimNames.activate), this.timeout = setTimeout(() => {
                        this.isDestroyed || (this.isDisabled = !1, !this.state.disabled && this.isAnimationReady && this.startIdleAnimation());
                    }, 1000 * this.options.disabledTime)));
                }
            });
        }
    }
    var _v = u;
}), a.register('pUH1t', function(b, c) {
    e(b.exports, 'AnimNames', function() {
        return _e;
    }), e(b.exports, 'SpriteAnimAsset', function() {
        return _g;
    });
    var d = a('2Xvuf');
    let _e;
    var f;
    (f = _e || (_e = {})).idle = 'idle', f.activate = 'activate', f.inactive = 'inactive';
    const _g = {
        spritesheetId: (0, d.default)('devices/jump_granter/animation.png'),
        spritesheetUrl: (0, d.default)('devices/jump_granter/animation.png'),
        frameWidth: 391,
        frameHeight: 373,
        animations: [{
                animName: _e.idle,
                frameRate: 1,
                repeat: -1,
                animFrames: {
                    start: 0,
                    end: 0
                }
            },
            {
                animName: _e.activate,
                frameRate: 36,
                repeat: 0,
                animFrames: {
                    start: 0,
                    end: 7
                }
            },
            {
                animName: _e.inactive,
                frameRate: 1,
                repeat: -1,
                animFrames: {
                    start: 7,
                    end: 7
                }
            }
        ]
    };
}), a.register('VYdcK', function(b, c) {
    let d;
    var e;
    e(b.exports, 'JumpGranterMode', function() {
        return d;
    }), (e = d || (d = {})).reset = 'reset', e.grant = 'grant';
}), a.register('Fzqo2', function(b, c) {
    e(b.exports, 'JumpGranterDeviceSize', function() {
        return _d;
    });
    const _d = {
        radius: (0, a('OILaa').default)(125),
        width: 125
    };
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
});