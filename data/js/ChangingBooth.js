function a(a, b, q, r) {
    Object.defineProperty(a, b, {
        get: q,
        set: r,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('vOEdf', function(q, r) {
    var c;
    c = q.exports, Object.defineProperty(c, '__esModule', {
        value: !0,
        configurable: !0
    }), a(q.exports, 'default', function() {
        return o;
    });
    var d = b('UM8oI'),
        e = b('sgILU'),
        f = b('IfbTZ'),
        g = b('wQnLu'),
        h = b('PjB0f'),
        i = b('7Sbqr'),
        j = b('vTaNl'),
        k = b('5Ux1a'),
        l = b('Bpt+p'),
        m = b('cMsWT');
    class n extends e.default {
        constructor(a) {
            super(a), (0, d.default)(this, 'activityAlpha', 1), (0, d.default)(this, 'createView', () => {
                this.back = this.parts.add.sprite({
                    ...f.BackAsset,
                    onReady: a => {
                        a.view.setScale(0.4), a.view.alpha = this.activityAlpha;
                    }
                }), this.front = this.parts.add.sprite({
                    ...f.FrontAsset,
                    depthChange: 150,
                    onReady: a => {
                        a.view.setScale(0.4), a.view.alpha = this.activityAlpha;
                    }
                }), this.front2 = this.parts.add.sprite({
                    ...f.Front2Asset,
                    depthChange: 100,
                    onReady: a => {
                        a.view.setScale(0.4), a.view.alpha = this.activityAlpha;
                    }
                }), this.shadow = this.shadows.add({
                    x: 0,
                    y: 100,
                    r1: 150,
                    r2: 60,
                    alphaMultip: this.activityAlpha
                });
            }), (0, d.default)(this, 'createColliders', () => {
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
            }), (0, d.default)(this, 'setupInteractiveZones', () => {
                this.interactiveZones.add.circle({
                    x: -20,
                    y: 70,
                    r: 60
                });
                const o = !i.default.session.cosmosBlocked && (0, h.isLoggedIn)(),
                    p = o ? j.ChangingBoothConsts.interactiveInfo.normal : i.default.session.cosmosBlocked ? j.ChangingBoothConsts.interactiveInfo.cosmosBlocked : j.ChangingBoothConsts.interactiveInfo.notLoggedIn,
                    q = o ? void 0 : j.ChangingBoothConsts.interactiveInfo.notAvailableHeader,
                    r = o ? void 0 : j.ChangingBoothConsts.interactiveInfo.notAvailableColor;
                this.interactiveZones.setInfo({
                    message: p,
                    allowedToInteract: o,
                    duration: j.ChangingBoothConsts.interactiveInfo.duration,
                    topHeader: q,
                    topHeaderColor: r
                }), this.interactiveZones.onInteraction = () => {
                    this.sendToServerDevice(g.Messages.open);
                };
            }), (0, d.default)(this, 'openDeviceUI', () => {
                this.deviceUI.open({});
            }), (0, d.default)(this, 'updateActiveState', () => {
                const o = this.state.active ? 1 : 0;
                this.tweens.add({
                    targets: this,
                    activityAlpha: o,
                    duration: 100,
                    onUpdate: () => {
                        var p, q, r, s, t, u;
                        null === (p = this.back) || void 0 === p || null === (q = p.view) || void 0 === q || q.setAlpha(this.activityAlpha), null === (r = this.front) || void 0 === r || null === (s = r.view) || void 0 === s || s.setAlpha(this.activityAlpha), null === (t = this.front2) || void 0 === t || null === (u = t.view) || void 0 === u || u.setAlpha(this.activityAlpha), this.shadow.alphaMultip = this.activityAlpha;
                    }
                }), this.interactiveZones.setForceDisabled(!this.state.active), this.state.active || this.deviceUI.close();
            }), (0, d.default)(this, 'onStateChange', a => {
                'active' === a && this.updateActiveState();
            }), (0, d.default)(this, 'checkIfCollidersEnabled', () => this.state.active), this.layers.setDefaultLayer(m.default.DepthSortedCharactersAndDevices), this.activityAlpha = this.state.active ? 1 : 0, (0, k.InPreGamePhase)() && (0, l.isSavedVersion)() && (this.activityAlpha = 1), this.createView(), this.createColliders(), this.setupInteractiveZones();
        }
    }
    var o = p;
}), b.register('IfbTZ', function(i, c) {
    a(i.exports, 'BackAsset', function() {
        return d;
    }), a(i.exports, 'FrontAsset', function() {
        return e;
    }), a(i.exports, 'Front2Asset', function() {
        return f;
    });
    var c = b('JJQ0+');
    const d = {
            imageId: (0, c.default)('devices/changing_booth/back.png'),
            imageUrl: (0, c.default)('devices/changing_booth/back.png')
        },
        e = {
            imageId: (0, c.default)('devices/changing_booth/front.png'),
            imageUrl: (0, c.default)('devices/changing_booth/front.png')
        },
        f = {
            imageId: (0, c.default)('devices/changing_booth/front_2.png'),
            imageUrl: (0, c.default)('devices/changing_booth/front_2.png')
        };
}), b.register('wQnLu', function(b, i) {
    let c;
    a(b.exports, 'Messages', function() {
        return c;
    }), (c || (c = {})).open = 'open';
}), b.register('vTaNl', function(b, i) {
    a(b.exports, 'ChangingBoothConsts', function() {
        return c;
    });
    const c = {
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