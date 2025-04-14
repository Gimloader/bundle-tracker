function e(e, t, s, i) {
    Object.defineProperty(e, t, {
        get: s,
        set: i,
        enumerable: !0,
        configurable: !0
    })
}
var t = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
t.register("aE5PW", (function(s, i) {
    var a;
    a = s.exports, Object.defineProperty(a, "__esModule", {
        value: !0,
        configurable: !0
    }), e(s.exports, "default", (function() {
        return v
    }));
    var n = t("divCp"),
        h = t("bDCcz"),
        o = t("bNmF9"),
        l = t("fvnY1"),
        d = t("2f8OT"),
        r = t("6Tpu2"),
        p = t("kHzlA");
    class c extends o.default {
        constructor(e) {
            super(e), (0, n.default)(this, "animateOpen", (() => {
                var e;
                if (!this.state.active) return;
                if (1 === (null === (e = this.open.view) || void 0 === e ? void 0 : e.alpha)) return;
                this.closed.view && (this.closed.view.alpha = 0), this.closedFlash.view && (this.closedFlash.view.alpha = 0);
                const t = [];
                this.open.view && (this.open.view.alpha = 1, t.push(this.open.view)), this.openFlash.view && (this.openFlash.view.alpha = 1, t.push(this.openFlash.view), this.tweens.add({
                    targets: this.openFlash.view,
                    alpha: 0,
                    duration: 200
                })), t.length && this.tweens.add({
                    targets: t,
                    scaleX: .55,
                    scaleY: .55,
                    duration: 150,
                    ease: Phaser.Math.Easing.Sine.Out,
                    onComplete: () => {
                        this.tweens.add({
                            targets: t,
                            scaleX: .5,
                            scaleY: .5,
                            duration: 250,
                            ease: Phaser.Math.Easing.Sine.InOut
                        })
                    }
                })
            })), (0, n.default)(this, "animateClose", (() => {
                var e;
                if (!this.state.active) return;
                if (1 === (null === (e = this.closed.view) || void 0 === e ? void 0 : e.alpha)) return;
                this.open.view && (this.open.view.alpha = 0), this.openFlash.view && (this.openFlash.view.alpha = 0);
                const t = [];
                this.closed.view && (this.closed.view.alpha = 1, t.push(this.closed.view)), this.closedFlash.view && (this.closedFlash.view.alpha = 1, t.push(this.closedFlash.view), this.tweens.add({
                    targets: this.closedFlash.view,
                    alpha: 0,
                    duration: 200
                })), t.length && this.tweens.add({
                    targets: t,
                    scaleX: .45,
                    scaleY: .45,
                    duration: 150,
                    ease: Phaser.Math.Easing.Sine.Out,
                    onComplete: () => {
                        this.tweens.add({
                            targets: t,
                            scaleX: .5,
                            scaleY: .5,
                            duration: 250,
                            ease: Phaser.Math.Easing.Sine.InOut
                        })
                    }
                })
            })), (0, n.default)(this, "activate", (() => {
                this.open.view && (this.open.view.alpha = 0), this.closed.view && (this.closed.view.alpha = 0), this.openFlash.view && (this.openFlash.view.alpha = 0), this.closedFlash.view && (this.closedFlash.view.alpha = 0), this.state.open ? this.open.view && this.tweens.add({
                    targets: this.open.view,
                    alpha: 1,
                    duration: 250,
                    ease: Phaser.Math.Easing.Sine.InOut
                }) : this.closed.view && this.tweens.add({
                    targets: this.closed.view,
                    alpha: 1,
                    duration: 250,
                    ease: Phaser.Math.Easing.Sine.InOut
                })
            })), (0, n.default)(this, "deactivate", (() => {
                const e = [];
                this.open.view && e.push(this.open.view), this.closed.view && e.push(this.closed.view), this.openFlash.view && e.push(this.openFlash.view), this.closedFlash.view && e.push(this.closedFlash.view), e.length && this.tweens.add({
                    targets: e,
                    alpha: 0,
                    duration: 250,
                    ease: Phaser.Math.Easing.Sine.InOut
                })
            })), (0, n.default)(this, "updateInteractiveZones", (() => {
                const e = this.state.open || !this.state.active;
                this.interactiveZones.setForceDisabled(e)
            })), (0, n.default)(this, "onStateChange", (e => {
                "open" === e && (this.state.open ? this.animateOpen() : this.animateClose()), "active" === e && (this.state.active ? this.activate() : this.deactivate()), this.updateInteractiveZones()
            })), this.open = this.parts.add.sprite({
                ...l.OpenAsset,
                onReady: e => {
                    e.view.setScale(.5), e.view.alpha = this.state.active && this.state.open ? 1 : 0
                }
            }), this.openFlash = this.parts.add.sprite({
                ...l.OpenAsset,
                onReady: e => {
                    e.view.setScale(.5), e.view.tint = 16777215, e.view.tintFill = !0, e.view.alpha = 0
                }
            }), this.closed = this.parts.add.sprite({
                ...l.ClosedAsset,
                onReady: e => {
                    e.view.setScale(.5), e.view.alpha = this.state.active && !this.state.open ? 1 : 0, this.isPreview && (0, r.InPreGamePhase)() && (e.view.alpha = 1)
                }
            }), this.closedFlash = this.parts.add.sprite({
                ...l.ClosedAsset,
                onReady: e => {
                    e.view.setScale(.5), e.view.tint = 16777215, e.view.tintFill = !0, e.view.alpha = 0
                }
            }), (0, h.isPlatformer)() || (this.shadows.add({
                x: 0,
                y: 0,
                r1: 60,
                r2: 40
            }), this.colliders.add.box({
                ...p.ChestConstants.topDownCollider
            })), this.interactiveZone = this.interactiveZones.add.circle({
                r: p.ChestConstants.interactionRadius
            }), this.interactiveZones.setInfo({
                message: "Open chest",
                allowedToInteract: !0,
                duration: 1
            }), this.interactiveZones.onInteraction = () => {
                this.sendToServerDevice(d.Messages.open)
            }, this.updateInteractiveZones()
        }
    }
    var v = c
})), t.register("fvnY1", (function(s, i) {
    e(s.exports, "OpenAsset", (function() {
        return n
    })), e(s.exports, "ClosedAsset", (function() {
        return h
    }));
    var a = t("alREA");
    const n = {
            imageId: (0, a.default)("devices/chest/open.png"),
            imageUrl: (0, a.default)("devices/chest/open.png"),
            originY: .8
        },
        h = {
            imageId: (0, a.default)("devices/chest/closed.png"),
            imageUrl: (0, a.default)("devices/chest/closed.png"),
            originY: .8
        }
})), t.register("2f8OT", (function(t, s) {
    let i;
    e(t.exports, "Messages", (function() {
        return i
    })), (i || (i = {})).open = "open"
})), t.register("kHzlA", (function(t, s) {
    e(t.exports, "ChestConstants", (function() {
        return i
    }));
    const i = {
        interactionRadius: 200,
        topDownCollider: {
            x: 0,
            y: 0,
            w: 120,
            h: 30
        }
    }
}));