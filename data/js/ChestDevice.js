function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('uUQAR', function(c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'default', function() {
        return _n;
    });
    var f = b('s/YA9'),
        g = b('UCu0V'),
        h = b('ltxDW'),
        i = b('JuzUO'),
        j = b('IK+oA0'),
        k = b('UkCpC'),
        l = b('vCpPp');
    class m extends h.default {
        constructor(n) {
            super(n), (0, f.default)(this, 'animateOpen', () => {
                var o;
                if (!this.state.active)
                    return;
                if (1 === (null === (o = this.open.view) || void 0 === o ? void 0 : o.alpha))
                    return;
                this.closed.view && (this.closed.view.alpha = 0), this.closedFlash.view && (this.closedFlash.view.alpha = 0);
                const p = [];
                this.open.view && (this.open.view.alpha = 1, p.push(this.open.view)), this.openFlash.view && (this.openFlash.view.alpha = 1, p.push(this.openFlash.view), this.tweens.add({
                    targets: this.openFlash.view,
                    alpha: 0,
                    duration: 200
                })), p.length && this.tweens.add({
                    targets: p,
                    scaleX: 0.55,
                    scaleY: 0.55,
                    duration: 150,
                    ease: Phaser.Math.Easing.Sine.Out,
                    onComplete: () => {
                        this.tweens.add({
                            targets: p,
                            scaleX: 0.5,
                            scaleY: 0.5,
                            duration: 250,
                            ease: Phaser.Math.Easing.Sine.InOut
                        });
                    }
                });
            }), (0, f.default)(this, 'animateClose', () => {
                var o;
                if (!this.state.active)
                    return;
                if (1 === (null === (o = this.closed.view) || void 0 === o ? void 0 : o.alpha))
                    return;
                this.open.view && (this.open.view.alpha = 0), this.openFlash.view && (this.openFlash.view.alpha = 0);
                const p = [];
                this.closed.view && (this.closed.view.alpha = 1, p.push(this.closed.view)), this.closedFlash.view && (this.closedFlash.view.alpha = 1, p.push(this.closedFlash.view), this.tweens.add({
                    targets: this.closedFlash.view,
                    alpha: 0,
                    duration: 200
                })), p.length && this.tweens.add({
                    targets: p,
                    scaleX: 0.45,
                    scaleY: 0.45,
                    duration: 150,
                    ease: Phaser.Math.Easing.Sine.Out,
                    onComplete: () => {
                        this.tweens.add({
                            targets: p,
                            scaleX: 0.5,
                            scaleY: 0.5,
                            duration: 250,
                            ease: Phaser.Math.Easing.Sine.InOut
                        });
                    }
                });
            }), (0, f.default)(this, 'activate', () => {
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
            }), (0, f.default)(this, 'deactivate', () => {
                const o = [];
                this.open.view && o.push(this.open.view), this.closed.view && o.push(this.closed.view), this.openFlash.view && o.push(this.openFlash.view), this.closedFlash.view && o.push(this.closedFlash.view), o.length && this.tweens.add({
                    targets: o,
                    alpha: 0,
                    duration: 250,
                    ease: Phaser.Math.Easing.Sine.InOut
                });
            }), (0, f.default)(this, 'updateInteractiveZones', () => {
                const o = this.state.open || !this.state.active;
                this.interactiveZones.setForceDisabled(o);
            }), (0, f.default)(this, 'onStateChange', n => {
                'open' === n && (this.state.open ? this.animateOpen() : this.animateClose()), 'active' === n && (this.state.active ? this.activate() : this.deactivate()), this.updateInteractiveZones();
            }), this.open = this.parts.add.sprite({
                ...i.OpenAsset,
                onReady: n => {
                    n.view.setScale(0.5), n.view.alpha = this.state.active && this.state.open ? 1 : 0;
                }
            }), this.openFlash = this.parts.add.sprite({
                ...i.OpenAsset,
                onReady: n => {
                    n.view.setScale(0.5), n.view.tint = 16777215, n.view.tintFill = !0, n.view.alpha = 0;
                }
            }), this.closed = this.parts.add.sprite({
                ...i.ClosedAsset,
                onReady: n => {
                    n.view.setScale(0.5), n.view.alpha = this.state.active && !this.state.open ? 1 : 0, this.isPreview && (0, k.InPreGamePhase)() && (n.view.alpha = 1);
                }
            }), this.closedFlash = this.parts.add.sprite({
                ...i.ClosedAsset,
                onReady: n => {
                    n.view.setScale(0.5), n.view.tint = 16777215, n.view.tintFill = !0, n.view.alpha = 0;
                }
            }), (0, g.isPlatformer)() || (this.shadows.add({
                x: 0,
                y: 0,
                r1: 60,
                r2: 40
            }), this.colliders.add.box({
                ...l.ChestConstants.topDownCollider
            })), this.interactiveZone = this.interactiveZones.add.circle({
                r: l.ChestConstants.interactionRadius
            }), this.interactiveZones.setInfo({
                message: 'Open chest',
                allowedToInteract: !0,
                duration: 1
            }), this.interactiveZones.onInteraction = () => {
                this.sendToServerDevice(j.Messages.open);
            }, this.updateInteractiveZones();
        }
    }
    var _n = m;
}), b.register('JuzUO', function(c, d) {
    a(c.exports, 'OpenAsset', function() {
        return _f;
    }), a(c.exports, 'ClosedAsset', function() {
        return _g;
    });
    var e = b('UaUBz0');
    const _f = {
            imageId: (0, e.default)('devices/chest/open.png'),
            imageUrl: (0, e.default)('devices/chest/open.png'),
            originY: 0.8
        },
        _g = {
            imageId: (0, e.default)('devices/chest/closed.png'),
            imageUrl: (0, e.default)('devices/chest/closed.png'),
            originY: 0.8
        };
}), b.register('IK+oA0', function(c, d) {
    let e;
    a(c.exports, 'Messages', function() {
        return e;
    }), (e || (e = {})).open = 'open';
}), b.register('vCpPp', function(c, d) {
    a(c.exports, 'ChestConstants', function() {
        return _e;
    });
    const _e = {
        interactionRadius: 200,
        topDownCollider: {
            x: 0,
            y: 0,
            w: 120,
            h: 30
        }
    };
});