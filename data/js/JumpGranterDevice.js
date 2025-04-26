function a(a, b, i, c) {
    Object.defineProperty(a, b, {
        get: i,
        set: c,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('mUo5m', function(i, c) {
    var c;
    c = i.exports, Object.defineProperty(c, '__esModule', {
        value: !0,
        configurable: !0
    }), a(i.exports, 'default', function() {
        return u;
    });
    var d = b('UM8oI'),
        e = b('sgILU'),
        f = b('U5h8O'),
        g = b('ft+PY'),
        h = b('5Ux1a'),
        i = b('S4uUc'),
        j = b('EdRoV'),
        k = b('PUlKf'),
        l = b('TYrMV'),
        m = b('+5NyR'),
        n = b('VkIHd0'),
        o = b('Bpt+p'),
        p = b('OlpXx'),
        q = b('JJQ0+'),
        r = b('4/f+U'),
        s = b('Ena4B');
    class t extends e.default {
        destroy(a) {
            super.destroy(a), this.timeout && clearTimeout(this.timeout);
        }
        constructor(a) {
            super(a), (0, d.default)(this, 'isDisabled', !1), (0, d.default)(this, 'isAnimationReady', !1), (0, d.default)(this, 'size', {
                width: 0,
                height: 0
            }), (0, d.default)(this, 'grantJumps', () => {
                const u = (0, j.default)((0, k.default)());
                u && ((0, p.playSound)({
                    path: (0, q.default)(`devices/jump_granter/collect${ (0, r.random)(1, 3) }.mp3`),
                    volume: (0, s.getVolume)({
                        volume: 0.8,
                        type: s.SoundType.soundEffect
                    })
                }), this.options.mode === g.JumpGranterMode.reset ? (u.physics.state.jump.jumpCounter = 0, u.physics.state.jump.jumpsLeft = (0, l.ClassDesignerUtils_GetJumpParams)({
                    characterId: u.id
                }).maxJumps) : this.options.mode === g.JumpGranterMode.grant && (u.physics.state.jump.jumpsLeft += this.options.jumpsNumber));
            }), (0, d.default)(this, 'isSensorActive', () => !this.isDisabled && !this.state.disabled && this.state.active), (0, d.default)(this, 'animateAlpha', () => {
                var u;
                const v = this.state.active ? 1 : 0;
                (null === (u = this.anim) || void 0 === u ? void 0 : u.view) && this.tweens.add({
                    targets: [this.anim.view],
                    alpha: v,
                    duration: 250
                });
            }), (0, d.default)(this, 'onStateChange', a => {
                'disabled' === a && (!this.isDisabled && this.state.disabled && this.isAnimationReady ? this.anim.view.play(f.AnimNames.activate) : this.isDisabled || this.state.disabled || !this.isAnimationReady || this.startIdleAnimation()), 'active' === a && this.animateAlpha();
            }), (0, d.default)(this, 'startIdleAnimation', () => {
                this.anim.view.play(f.AnimNames.idle), this.anim.view.setScale(0), this.tweens.add({
                    targets: this.anim.view,
                    displayWidth: this.size.width,
                    displayHeight: this.size.height,
                    duration: 350,
                    ease: Phaser.Math.Easing.Back.Out
                });
            }), this.anim = this.parts.add.animatedSprite({
                ...f.SpriteAnimAsset,
                onReady: a => {
                    this.size = {
                        ...(0, n.default)({
                            height: a.view.height,
                            width: a.view.width,
                            newWidth: m.JumpGranterDeviceSize.width
                        })
                    }, a.view.displayWidth = this.size.width, a.view.displayHeight = this.size.height, this.tweens.add({
                        targets: a.view,
                        y: a.view.y - 15,
                        duration: 1500,
                        yoyo: !0,
                        repeat: -1,
                        ease: Phaser.Math.Easing.Sine.InOut
                    }), this.isAnimationReady = !0, !this.state.active && (0, h.InGamePhase)() && (a.view.alpha = 0), (this.isDisabled || this.state.disabled) && a.view.play(f.AnimNames.inactive);
                }
            }), (0, o.isSavedVersion)() && (0, h.InPreGamePhase)() || this.sensors.add.circle({
                r: m.JumpGranterDeviceSize.radius,
                type: i.SensorType.around,
                onFresh: () => {
                    if (!this.isSensorActive())
                        return;
                    const u = (0, j.default)((0, k.default)());
                    u && (u.physics.state.grounded || (this.grantJumps(), this.isDisabled = !0, this.isAnimationReady && this.anim.view.play(f.AnimNames.activate), this.timeout = setTimeout(() => {
                        this.isDestroyed || (this.isDisabled = !1, !this.state.disabled && this.isAnimationReady && this.startIdleAnimation());
                    }, 1000 * this.options.disabledTime)));
                }
            });
        }
    }
    var u = v;
}), b.register('U5h8O', function(i, c) {
    a(i.exports, 'AnimNames', function() {
        return d;
    }), a(i.exports, 'SpriteAnimAsset', function() {
        return f;
    });
    var c = b('JJQ0+');
    let d;
    var e;
    (e = d || (d = {})).idle = 'idle', e.activate = 'activate', e.inactive = 'inactive';
    const f = {
        spritesheetId: (0, c.default)('devices/jump_granter/animation.png'),
        spritesheetUrl: (0, c.default)('devices/jump_granter/animation.png'),
        frameWidth: 391,
        frameHeight: 373,
        animations: [{
                animName: d.idle,
                frameRate: 1,
                repeat: -1,
                animFrames: {
                    start: 0,
                    end: 0
                }
            },
            {
                animName: d.activate,
                frameRate: 36,
                repeat: 0,
                animFrames: {
                    start: 0,
                    end: 7
                }
            },
            {
                animName: d.inactive,
                frameRate: 1,
                repeat: -1,
                animFrames: {
                    start: 7,
                    end: 7
                }
            }
        ]
    };
}), b.register('ft+PY', function(b, i) {
    let c;
    var d;
    a(b.exports, 'JumpGranterMode', function() {
        return c;
    }), (d = c || (c = {})).reset = 'reset', d.grant = 'grant';
}), b.register('+5NyR', function(i, c) {
    a(i.exports, 'JumpGranterDeviceSize', function() {
        return c;
    });
    const c = {
        radius: (0, b('N50Eu').default)(125),
        width: 125
    };
}), b.register('VkIHd0', function(b, i) {
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
});