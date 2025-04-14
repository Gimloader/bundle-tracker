function e(e, t, i, a) {
    Object.defineProperty(e, t, {
        get: i,
        set: a,
        enumerable: !0,
        configurable: !0
    })
}
var t = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
t.register("aeUAR", (function(i, a) {
    var s;
    s = i.exports, Object.defineProperty(s, "__esModule", {
        value: !0,
        configurable: !0
    }), e(i.exports, "default", (function() {
        return j
    }));
    var n = t("divCp"),
        r = t("bNmF9"),
        d = t("84BbZ"),
        h = t("aq3j0"),
        o = t("6Tpu2"),
        u = t("7osw7"),
        m = t("1UlqS"),
        l = t("fhnJp"),
        p = t("4BRdw"),
        c = t("2jbNQ"),
        f = t("9oxA4"),
        v = t("4uojN"),
        g = t("jVQO4"),
        y = t("alREA"),
        w = t("cmvpZ"),
        b = t("3iPiZ");
    class A extends r.default {
        destroy(e) {
            super.destroy(e), this.timeout && clearTimeout(this.timeout)
        }
        constructor(e) {
            super(e), (0, n.default)(this, "isDisabled", !1), (0, n.default)(this, "isAnimationReady", !1), (0, n.default)(this, "size", {
                width: 0,
                height: 0
            }), (0, n.default)(this, "grantJumps", (() => {
                const e = (0, m.default)((0, l.default)());
                e && ((0, g.playSound)({
                    path: (0, y.default)(`devices/jump_granter/collect${(0,w.random)(1,3)}.mp3`),
                    volume: (0, b.getVolume)({
                        volume: .8,
                        type: b.SoundType.soundEffect
                    })
                }), this.options.mode === h.JumpGranterMode.reset ? (e.physics.state.jump.jumpCounter = 0, e.physics.state.jump.jumpsLeft = (0, p.ClassDesignerUtils_GetJumpParams)({
                    characterId: e.id
                }).maxJumps) : this.options.mode === h.JumpGranterMode.grant && (e.physics.state.jump.jumpsLeft += this.options.jumpsNumber))
            })), (0, n.default)(this, "isSensorActive", (() => !this.isDisabled && !this.state.disabled && this.state.active)), (0, n.default)(this, "animateAlpha", (() => {
                var e;
                const t = this.state.active ? 1 : 0;
                (null === (e = this.anim) || void 0 === e ? void 0 : e.view) && this.tweens.add({
                    targets: [this.anim.view],
                    alpha: t,
                    duration: 250
                })
            })), (0, n.default)(this, "onStateChange", (e => {
                "disabled" === e && (!this.isDisabled && this.state.disabled && this.isAnimationReady ? this.anim.view.play(d.AnimNames.activate) : this.isDisabled || this.state.disabled || !this.isAnimationReady || this.startIdleAnimation()), "active" === e && this.animateAlpha()
            })), (0, n.default)(this, "startIdleAnimation", (() => {
                this.anim.view.play(d.AnimNames.idle), this.anim.view.setScale(0), this.tweens.add({
                    targets: this.anim.view,
                    displayWidth: this.size.width,
                    displayHeight: this.size.height,
                    duration: 350,
                    ease: Phaser.Math.Easing.Back.Out
                })
            })), this.anim = this.parts.add.animatedSprite({
                ...d.SpriteAnimAsset,
                onReady: e => {
                    this.size = {
                        ...(0, f.default)({
                            height: e.view.height,
                            width: e.view.width,
                            newWidth: c.JumpGranterDeviceSize.width
                        })
                    }, e.view.displayWidth = this.size.width, e.view.displayHeight = this.size.height, this.tweens.add({
                        targets: e.view,
                        y: e.view.y - 15,
                        duration: 1500,
                        yoyo: !0,
                        repeat: -1,
                        ease: Phaser.Math.Easing.Sine.InOut
                    }), this.isAnimationReady = !0, !this.state.active && (0, o.InGamePhase)() && (e.view.alpha = 0), (this.isDisabled || this.state.disabled) && e.view.play(d.AnimNames.inactive)
                }
            }), (0, v.isSavedVersion)() && (0, o.InPreGamePhase)() || this.sensors.add.circle({
                r: c.JumpGranterDeviceSize.radius,
                type: u.SensorType.around,
                onFresh: () => {
                    if (!this.isSensorActive()) return;
                    const e = (0, m.default)((0, l.default)());
                    e && (e.physics.state.grounded || (this.grantJumps(), this.isDisabled = !0, this.isAnimationReady && this.anim.view.play(d.AnimNames.activate), this.timeout = setTimeout((() => {
                        this.isDestroyed || (this.isDisabled = !1, !this.state.disabled && this.isAnimationReady && this.startIdleAnimation())
                    }), 1e3 * this.options.disabledTime)))
                }
            })
        }
    }
    var j = A
})), t.register("84BbZ", (function(i, a) {
    e(i.exports, "AnimNames", (function() {
        return n
    })), e(i.exports, "SpriteAnimAsset", (function() {
        return d
    }));
    var s = t("alREA");
    let n;
    var r;
    (r = n || (n = {})).idle = "idle", r.activate = "activate", r.inactive = "inactive";
    const d = {
        spritesheetId: (0, s.default)("devices/jump_granter/animation.png"),
        spritesheetUrl: (0, s.default)("devices/jump_granter/animation.png"),
        frameWidth: 391,
        frameHeight: 373,
        animations: [{
            animName: n.idle,
            frameRate: 1,
            repeat: -1,
            animFrames: {
                start: 0,
                end: 0
            }
        }, {
            animName: n.activate,
            frameRate: 36,
            repeat: 0,
            animFrames: {
                start: 0,
                end: 7
            }
        }, {
            animName: n.inactive,
            frameRate: 1,
            repeat: -1,
            animFrames: {
                start: 7,
                end: 7
            }
        }]
    }
})), t.register("aq3j0", (function(t, i) {
    let a;
    var s;
    e(t.exports, "JumpGranterMode", (function() {
        return a
    })), (s = a || (a = {})).reset = "reset", s.grant = "grant"
})), t.register("2jbNQ", (function(i, a) {
    e(i.exports, "JumpGranterDeviceSize", (function() {
        return s
    }));
    const s = {
        radius: (0, t("r04Cv").default)(125),
        width: 125
    }
})), t.register("9oxA4", (function(t, i) {
    e(t.exports, "default", (function() {
        return a
    }));
    var a = e => {
        const t = e.newWidth / e.width;
        return {
            height: e.height * t,
            width: e.width * t
        }
    }
}));