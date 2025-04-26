function a(a, b, s, c) {
    Object.defineProperty(a, b, {
        get: s,
        set: c,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('N9CaD', function(s, c) {
    var c;
    c = s.exports, Object.defineProperty(c, '__esModule', {
        value: !0,
        configurable: !0
    }), a(s.exports, 'default', function() {
        return l;
    });
    var d = b('UM8oI'),
        e = b('HMNV0'),
        f = b('sgILU'),
        g = b('Hwucb'),
        h = b('OdvYD'),
        i = b('5Ux1a'),
        j = b('zlzf+');
    class k extends f.default {
        constructor(a) {
            super(a), (0, d.default)(this, 'animateOpen', () => {
                var l;
                if (!this.state.active)
                    return;
                if (1 === (null === (l = this.open.view) || void 0 === l ? void 0 : l.alpha))
                    return;
                this.closed.view && (this.closed.view.alpha = 0), this.closedFlash.view && (this.closedFlash.view.alpha = 0);
                const m = [];
                this.open.view && (this.open.view.alpha = 1, m.push(this.open.view)), this.openFlash.view && (this.openFlash.view.alpha = 1, m.push(this.openFlash.view), this.tweens.add({
                    targets: this.openFlash.view,
                    alpha: 0,
                    duration: 200
                })), m.length && this.tweens.add({
                    targets: m,
                    scaleX: 0.55,
                    scaleY: 0.55,
                    duration: 150,
                    ease: Phaser.Math.Easing.Sine.Out,
                    onComplete: () => {
                        this.tweens.add({
                            targets: m,
                            scaleX: 0.5,
                            scaleY: 0.5,
                            duration: 250,
                            ease: Phaser.Math.Easing.Sine.InOut
                        });
                    }
                });
            }), (0, d.default)(this, 'animateClose', () => {
                var l;
                if (!this.state.active)
                    return;
                if (1 === (null === (l = this.closed.view) || void 0 === l ? void 0 : l.alpha))
                    return;
                this.open.view && (this.open.view.alpha = 0), this.openFlash.view && (this.openFlash.view.alpha = 0);
                const m = [];
                this.closed.view && (this.closed.view.alpha = 1, m.push(this.closed.view)), this.closedFlash.view && (this.closedFlash.view.alpha = 1, m.push(this.closedFlash.view), this.tweens.add({
                    targets: this.closedFlash.view,
                    alpha: 0,
                    duration: 200
                })), m.length && this.tweens.add({
                    targets: m,
                    scaleX: 0.45,
                    scaleY: 0.45,
                    duration: 150,
                    ease: Phaser.Math.Easing.Sine.Out,
                    onComplete: () => {
                        this.tweens.add({
                            targets: m,
                            scaleX: 0.5,
                            scaleY: 0.5,
                            duration: 250,
                            ease: Phaser.Math.Easing.Sine.InOut
                        });
                    }
                });
            }), (0, d.default)(this, 'activate', () => {
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
                });
            }), (0, d.default)(this, 'deactivate', () => {
                const l = [];
                this.open.view && l.push(this.open.view), this.closed.view && l.push(this.closed.view), this.openFlash.view && l.push(this.openFlash.view), this.closedFlash.view && l.push(this.closedFlash.view), l.length && this.tweens.add({
                    targets: l,
                    alpha: 0,
                    duration: 250,
                    ease: Phaser.Math.Easing.Sine.InOut
                });
            }), (0, d.default)(this, 'updateInteractiveZones', () => {
                const l = this.state.open || !this.state.active;
                this.interactiveZones.setForceDisabled(l);
            }), (0, d.default)(this, 'onStateChange', a => {
                'open' === a && (this.state.open ? this.animateOpen() : this.animateClose()), 'active' === a && (this.state.active ? this.activate() : this.deactivate()), this.updateInteractiveZones();
            }), this.open = this.parts.add.sprite({
                ...g.OpenAsset,
                onReady: a => {
                    a.view.setScale(0.5), a.view.alpha = this.state.active && this.state.open ? 1 : 0;
                }
            }), this.openFlash = this.parts.add.sprite({
                ...g.OpenAsset,
                onReady: a => {
                    a.view.setScale(0.5), a.view.tint = 16777215, a.view.tintFill = !0, a.view.alpha = 0;
                }
            }), this.closed = this.parts.add.sprite({
                ...g.ClosedAsset,
                onReady: a => {
                    a.view.setScale(0.5), a.view.alpha = this.state.active && !this.state.open ? 1 : 0, this.isPreview && (0, i.InPreGamePhase)() && (a.view.alpha = 1);
                }
            }), this.closedFlash = this.parts.add.sprite({
                ...g.ClosedAsset,
                onReady: a => {
                    a.view.setScale(0.5), a.view.tint = 16777215, a.view.tintFill = !0, a.view.alpha = 0;
                }
            }), (0, e.isPlatformer)() || (this.shadows.add({
                x: 0,
                y: 0,
                r1: 60,
                r2: 40
            }), this.colliders.add.box({
                ...j.ChestConstants.topDownCollider
            })), this.interactiveZone = this.interactiveZones.add.circle({
                r: j.ChestConstants.interactionRadius
            }), this.interactiveZones.setInfo({
                message: 'Open chest',
                allowedToInteract: !0,
                duration: 1
            }), this.interactiveZones.onInteraction = () => {
                this.sendToServerDevice(h.Messages.open);
            }, this.updateInteractiveZones();
        }
    }
    var l = m;
}), b.register('Hwucb', function(s, c) {
    a(s.exports, 'OpenAsset', function() {
        return d;
    }), a(s.exports, 'ClosedAsset', function() {
        return e;
    });
    var c = b('JJQ0+');
    const d = {
            imageId: (0, c.default)('devices/chest/open.png'),
            imageUrl: (0, c.default)('devices/chest/open.png'),
            originY: 0.8
        },
        e = {
            imageId: (0, c.default)('devices/chest/closed.png'),
            imageUrl: (0, c.default)('devices/chest/closed.png'),
            originY: 0.8
        };
}), b.register('OdvYD', function(b, s) {
    let c;
    a(b.exports, 'Messages', function() {
        return c;
    }), (c || (c = {})).open = 'open';
}), b.register('zlzf+', function(b, s) {
    a(b.exports, 'ChestConstants', function() {
        return c;
    });
    const c = {
        interactionRadius: 200,
        topDownCollider: {
            x: 0,
            y: 0,
            w: 120,
            h: 30
        }
    };
});