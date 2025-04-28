function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('aMmq9', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _m(b.exports, 'default', function() {
        return _m;
    });
    var e = a('1bFPu'),
        f = a('JEGzD'),
        g = a('I35Ay'),
        h = a('oYhMR'),
        i = a('4mnY4'),
        j = a('/pbxo'),
        k = a('6yuPe');
    class l extends g.default {
        constructor(_m) {
            super(_m), (0, e.default)(this, 'animateOpen', () => {
                var n;
                if (!this.state.active)
                    return;
                if (1 === (null === (n = this.open.view) || void 0 === n ? void 0 : n.alpha))
                    return;
                this.closed.view && (this.closed.view.alpha = 0), this.closedFlash.view && (this.closedFlash.view.alpha = 0);
                const o = [];
                this.open.view && (this.open.view.alpha = 1, o.push(this.open.view)), this.openFlash.view && (this.openFlash.view.alpha = 1, o.push(this.openFlash.view), this.tweens.add({
                    targets: this.openFlash.view,
                    alpha: 0,
                    duration: 200
                })), o.length && this.tweens.add({
                    targets: o,
                    scaleX: 0.55,
                    scaleY: 0.55,
                    duration: 150,
                    ease: Phaser.Math.Easing.Sine.Out,
                    onComplete: () => {
                        this.tweens.add({
                            targets: o,
                            scaleX: 0.5,
                            scaleY: 0.5,
                            duration: 250,
                            ease: Phaser.Math.Easing.Sine.InOut
                        });
                    }
                });
            }), (0, e.default)(this, 'animateClose', () => {
                var n;
                if (!this.state.active)
                    return;
                if (1 === (null === (n = this.closed.view) || void 0 === n ? void 0 : n.alpha))
                    return;
                this.open.view && (this.open.view.alpha = 0), this.openFlash.view && (this.openFlash.view.alpha = 0);
                const o = [];
                this.closed.view && (this.closed.view.alpha = 1, o.push(this.closed.view)), this.closedFlash.view && (this.closedFlash.view.alpha = 1, o.push(this.closedFlash.view), this.tweens.add({
                    targets: this.closedFlash.view,
                    alpha: 0,
                    duration: 200
                })), o.length && this.tweens.add({
                    targets: o,
                    scaleX: 0.45,
                    scaleY: 0.45,
                    duration: 150,
                    ease: Phaser.Math.Easing.Sine.Out,
                    onComplete: () => {
                        this.tweens.add({
                            targets: o,
                            scaleX: 0.5,
                            scaleY: 0.5,
                            duration: 250,
                            ease: Phaser.Math.Easing.Sine.InOut
                        });
                    }
                });
            }), (0, e.default)(this, 'activate', () => {
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
            }), (0, e.default)(this, 'deactivate', () => {
                const n = [];
                this.open.view && n.push(this.open.view), this.closed.view && n.push(this.closed.view), this.openFlash.view && n.push(this.openFlash.view), this.closedFlash.view && n.push(this.closedFlash.view), n.length && this.tweens.add({
                    targets: n,
                    alpha: 0,
                    duration: 250,
                    ease: Phaser.Math.Easing.Sine.InOut
                });
            }), (0, e.default)(this, 'updateInteractiveZones', () => {
                const n = this.state.open || !this.state.active;
                this.interactiveZones.setForceDisabled(n);
            }), (0, e.default)(this, 'onStateChange', _m => {
                'open' === _m && (this.state.open ? this.animateOpen() : this.animateClose()), 'active' === _m && (this.state.active ? this.activate() : this.deactivate()), this.updateInteractiveZones();
            }), this.open = this.parts.add.sprite({
                ...h.OpenAsset,
                onReady: _m => {
                    _m.view.setScale(0.5), _m.view.alpha = this.state.active && this.state.open ? 1 : 0;
                }
            }), this.openFlash = this.parts.add.sprite({
                ...h.OpenAsset,
                onReady: _m => {
                    _m.view.setScale(0.5), _m.view.tint = 16777215, _m.view.tintFill = !0, _m.view.alpha = 0;
                }
            }), this.closed = this.parts.add.sprite({
                ...h.ClosedAsset,
                onReady: _m => {
                    _m.view.setScale(0.5), _m.view.alpha = this.state.active && !this.state.open ? 1 : 0, this.isPreview && (0, j.InPreGamePhase)() && (_m.view.alpha = 1);
                }
            }), this.closedFlash = this.parts.add.sprite({
                ...h.ClosedAsset,
                onReady: _m => {
                    _m.view.setScale(0.5), _m.view.tint = 16777215, _m.view.tintFill = !0, _m.view.alpha = 0;
                }
            }), (0, f.isPlatformer)() || (this.shadows.add({
                x: 0,
                y: 0,
                r1: 60,
                r2: 40
            }), this.colliders.add.box({
                ...k.ChestConstants.topDownCollider
            })), this.interactiveZone = this.interactiveZones.add.circle({
                r: k.ChestConstants.interactionRadius
            }), this.interactiveZones.setInfo({
                message: 'Open chest',
                allowedToInteract: !0,
                duration: 1
            }), this.interactiveZones.onInteraction = () => {
                this.sendToServerDevice(i.Messages.open);
            }, this.updateInteractiveZones();
        }
    }
    var _m = l;
}), a.register('oYhMR', function(b, c) {
    e(b.exports, 'OpenAsset', function() {
        return _e;
    }), e(b.exports, 'ClosedAsset', function() {
        return _f;
    });
    var d = a('2Xvuf');
    const _e = {
            imageId: (0, d.default)('devices/chest/open.png'),
            imageUrl: (0, d.default)('devices/chest/open.png'),
            originY: 0.8
        },
        _f = {
            imageId: (0, d.default)('devices/chest/closed.png'),
            imageUrl: (0, d.default)('devices/chest/closed.png'),
            originY: 0.8
        };
}), a.register('4mnY4', function(b, c) {
    let d;
    e(b.exports, 'Messages', function() {
        return d;
    }), (d || (d = {})).open = 'open';
}), a.register('6yuPe', function(b, c) {
    e(b.exports, 'ChestConstants', function() {
        return _d;
    });
    const _d = {
        interactionRadius: 200,
        topDownCollider: {
            x: 0,
            y: 0,
            w: 120,
            h: 30
        }
    };
});