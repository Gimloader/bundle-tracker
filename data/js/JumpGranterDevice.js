function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('.....', function (c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'default', function () {
        return _w;
    });
    var f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....'), k = b('.....'), l = b('.....'), m = b('.....'), n = b('.....'), o = b('.....'), p = b('.....'), q = b('.....'), r = b('.....'), s = b('.....'), t = b('.....'), u = b('.....');
    class v extends g.default {
        destroy(w) {
            super.destroy(w), this.timeout && clearTimeout(this.timeout);
        }
        constructor(w) {
            super(w), (0, f.default)(this, 'isDisabled', !1), (0, f.default)(this, 'isAnimationReady', !1), (0, f.default)(this, 'size', {
                width: 0,
                height: 0
            }), (0, f.default)(this, 'grantJumps', () => {
                const x = (0, l.default)((0, m.default)());
                x && ((0, r.playSound)({
                    path: (0, s.default)(`devices/jump_granter/collect${ (0, t.random)(1, 3) }.mp3`),
                    volume: (0, u.getVolume)({
                        volume: 0.8,
                        type: u.SoundType.soundEffect
                    })
                }), this.options.mode === i.JumpGranterMode.reset ? (x.physics.state.jump.jumpCounter = 0, x.physics.state.jump.jumpsLeft = (0, n.ClassDesignerUtils_GetJumpParams)({ characterId: x.id }).maxJumps) : this.options.mode === i.JumpGranterMode.grant && (x.physics.state.jump.jumpsLeft += this.options.jumpsNumber));
            }), (0, f.default)(this, 'isSensorActive', () => !this.isDisabled && !this.state.disabled && this.state.active), (0, f.default)(this, 'animateAlpha', () => {
                var x;
                const y = this.state.active ? 1 : 0;
                (null === (x = this.anim) || void 0 === x ? void 0 : x.view) && this.tweens.add({
                    targets: [this.anim.view],
                    alpha: y,
                    duration: 250
                });
            }), (0, f.default)(this, 'onStateChange', x => {
                'disabled' === x && (!this.isDisabled && this.state.disabled && this.isAnimationReady ? this.anim.view.play(h.AnimNames.activate) : this.isDisabled || this.state.disabled || !this.isAnimationReady || this.startIdleAnimation()), 'active' === x && this.animateAlpha();
            }), (0, f.default)(this, 'startIdleAnimation', () => {
                this.anim.view.play(h.AnimNames.idle), this.anim.view.setScale(0), this.tweens.add({
                    targets: this.anim.view,
                    displayWidth: this.size.width,
                    displayHeight: this.size.height,
                    duration: 350,
                    ease: Phaser.Math.Easing.Back.Out
                });
            }), this.anim = this.parts.add.animatedSprite({
                ...h.SpriteAnimAsset,
                onReady: x => {
                    this.size = {
                        ...(0, p.default)({
                            height: x.view.height,
                            width: x.view.width,
                            newWidth: o.JumpGranterDeviceSize.width
                        })
                    }, x.view.displayWidth = this.size.width, x.view.displayHeight = this.size.height, this.tweens.add({
                        targets: x.view,
                        y: x.view.y - 15,
                        duration: 1500,
                        yoyo: !0,
                        repeat: -1,
                        ease: Phaser.Math.Easing.Sine.InOut
                    }), this.isAnimationReady = !0, !this.state.active && (0, j.InGamePhase)() && (x.view.alpha = 0), (this.isDisabled || this.state.disabled) && x.view.play(h.AnimNames.inactive);
                }
            }), (0, q.isSavedVersion)() && (0, j.InPreGamePhase)() || this.sensors.add.circle({
                r: o.JumpGranterDeviceSize.radius,
                type: k.SensorType.around,
                onFresh: () => {
                    if (!this.isSensorActive())
                        return;
                    const x = (0, l.default)((0, m.default)());
                    x && (x.physics.state.grounded || (this.grantJumps(), this.isDisabled = !0, this.isAnimationReady && this.anim.view.play(h.AnimNames.activate), this.timeout = setTimeout(() => {
                        this.isDestroyed || (this.isDisabled = !1, !this.state.disabled && this.isAnimationReady && this.startIdleAnimation());
                    }, 1000 * this.options.disabledTime)));
                }
            });
        }
    }
    var _w = v;
}), b.register('.....', function (c, d) {
    a(c.exports, 'AnimNames', function () {
        return _f;
    }), a(c.exports, 'SpriteAnimAsset', function () {
        return _h;
    });
    var e = b('.....');
    let _f;
    var g;
    (g = _f || (_f = {})).idle = 'idle', g.activate = 'activate', g.inactive = 'inactive';
    const _h = {
        spritesheetId: (0, e.default)('devices/jump_granter/animation.png'),
        spritesheetUrl: (0, e.default)('devices/jump_granter/animation.png'),
        frameWidth: 391,
        frameHeight: 373,
        animations: [
            {
                animName: _f.idle,
                frameRate: 1,
                repeat: -1,
                animFrames: {
                    start: 0,
                    end: 0
                }
            },
            {
                animName: _f.activate,
                frameRate: 36,
                repeat: 0,
                animFrames: {
                    start: 0,
                    end: 7
                }
            },
            {
                animName: _f.inactive,
                frameRate: 1,
                repeat: -1,
                animFrames: {
                    start: 7,
                    end: 7
                }
            }
        ]
    };
}), b.register('.....', function (c, d) {
    let e;
    var f;
    a(c.exports, 'JumpGranterMode', function () {
        return e;
    }), (f = e || (e = {})).reset = 'reset', f.grant = 'grant';
}), b.register('.....', function (c, d) {
    a(c.exports, 'JumpGranterDeviceSize', function () {
        return _e;
    });
    const _e = {
        radius: (0, b('.....').default)(125),
        width: 125
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _e;
    });
    var _e = f => {
        const g = f.newWidth / f.width;
        return {
            height: f.height * g,
            width: f.width * g
        };
    };
});