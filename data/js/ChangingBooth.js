function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('7+Fba', function(c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'default', function() {
        return _q;
    });
    var f = b('s/YA9'),
        g = b('ltxDW'),
        h = b('R2D4j'),
        i = b('IK+oA'),
        j = b('quE27'),
        k = b('fI6of'),
        l = b('Ln49W'),
        m = b('UkCpC'),
        n = b('hycyg'),
        o = b('GIe9o');
    class p extends g.default {
        constructor(q) {
            super(q), (0, f.default)(this, 'activityAlpha', 1), (0, f.default)(this, 'createView', () => {
                this.back = this.parts.add.sprite({
                    ...h.BackAsset,
                    onReady: q => {
                        q.view.setScale(0.4), q.view.alpha = this.activityAlpha;
                    }
                }), this.front = this.parts.add.sprite({
                    ...h.FrontAsset,
                    depthChange: 150,
                    onReady: q => {
                        q.view.setScale(0.4), q.view.alpha = this.activityAlpha;
                    }
                }), this.front2 = this.parts.add.sprite({
                    ...h.Front2Asset,
                    depthChange: 100,
                    onReady: q => {
                        q.view.setScale(0.4), q.view.alpha = this.activityAlpha;
                    }
                }), this.shadow = this.shadows.add({
                    x: 0,
                    y: 100,
                    r1: 150,
                    r2: 60,
                    alphaMultip: this.activityAlpha
                });
            }), (0, f.default)(this, 'createColliders', () => {
                this.colliders.add.box({
                    x: -100,
                    y: 10,
                    w: 20,
                    h: 200
                }), this.colliders.add.box({
                    x: 100,
                    y: 10,
                    w: 20,
                    h: 180
                }), this.colliders.add.box({
                    x: 0,
                    y: -30,
                    w: 200,
                    h: 120
                }), this.colliders.add.box({
                    x: -40,
                    y: 120,
                    w: 120,
                    h: 20,
                    angle: 20
                });
            }), (0, f.default)(this, 'setupInteractiveZones', () => {
                this.interactiveZones.add.circle({
                    x: -20,
                    y: 70,
                    r: 60
                });
                const r = !k.default.session.cosmosBlocked && (0, j.isLoggedIn)(),
                    s = r ? l.ChangingBoothConsts.interactiveInfo.normal : k.default.session.cosmosBlocked ? l.ChangingBoothConsts.interactiveInfo.cosmosBlocked : l.ChangingBoothConsts.interactiveInfo.notLoggedIn,
                    t = r ? void 0 : l.ChangingBoothConsts.interactiveInfo.notAvailableHeader,
                    u = r ? void 0 : l.ChangingBoothConsts.interactiveInfo.notAvailableColor;
                this.interactiveZones.setInfo({
                    message: s,
                    allowedToInteract: r,
                    duration: l.ChangingBoothConsts.interactiveInfo.duration,
                    topHeader: t,
                    topHeaderColor: u
                }), this.interactiveZones.onInteraction = () => {
                    this.sendToServerDevice(i.Messages.open);
                };
            }), (0, f.default)(this, 'openDeviceUI', () => {
                this.deviceUI.open({});
            }), (0, f.default)(this, 'updateActiveState', () => {
                const r = this.state.active ? 1 : 0;
                this.tweens.add({
                    targets: this,
                    activityAlpha: r,
                    duration: 100,
                    onUpdate: () => {
                        var s, t, u, v, w, x;
                        null === (s = this.back) || void 0 === s || null === (t = s.view) || void 0 === t || t.setAlpha(this.activityAlpha), null === (u = this.front) || void 0 === u || null === (v = u.view) || void 0 === v || v.setAlpha(this.activityAlpha), null === (w = this.front2) || void 0 === w || null === (x = w.view) || void 0 === x || x.setAlpha(this.activityAlpha), this.shadow.alphaMultip = this.activityAlpha;
                    }
                }), this.interactiveZones.setForceDisabled(!this.state.active), this.state.active || this.deviceUI.close();
            }), (0, f.default)(this, 'onStateChange', q => {
                'active' === q && this.updateActiveState();
            }), (0, f.default)(this, 'checkIfCollidersEnabled', () => this.state.active), this.layers.setDefaultLayer(o.default.DepthSortedCharactersAndDevices), this.activityAlpha = this.state.active ? 1 : 0, (0, m.InPreGamePhase)() && (0, n.isSavedVersion)() && (this.activityAlpha = 1), this.createView(), this.createColliders(), this.setupInteractiveZones();
        }
    }
    var _q = p;
}), b.register('R2D4j', function(c, d) {
    a(c.exports, 'BackAsset', function() {
        return _f;
    }), a(c.exports, 'FrontAsset', function() {
        return _g;
    }), a(c.exports, 'Front2Asset', function() {
        return _h;
    });
    var e = b('UaUBz0');
    const _f = {
            imageId: (0, e.default)('devices/changing_booth/back.png'),
            imageUrl: (0, e.default)('devices/changing_booth/back.png')
        },
        _g = {
            imageId: (0, e.default)('devices/changing_booth/front.png'),
            imageUrl: (0, e.default)('devices/changing_booth/front.png')
        },
        _h = {
            imageId: (0, e.default)('devices/changing_booth/front_2.png'),
            imageUrl: (0, e.default)('devices/changing_booth/front_2.png')
        };
}), b.register('IK+oA', function(c, d) {
    let e;
    a(c.exports, 'Messages', function() {
        return e;
    }), (e || (e = {})).open = 'open';
}), b.register('Ln49W', function(c, d) {
    a(c.exports, 'ChangingBoothConsts', function() {
        return _e;
    });
    const _e = {
        interactiveInfo: {
            normal: 'Change Your Cosmetics',
            cosmosBlocked: 'Cosmos Blocked',
            notLoggedIn: 'Log In to Use',
            notAvailableHeader: 'Not Available',
            notAvailableColor: '#ffcdd2',
            duration: 1
        }
    };
});