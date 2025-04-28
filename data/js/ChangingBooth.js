function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('10L9E', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _p(b.exports, 'default', function() {
        return _p;
    });
    var e = a('1bFPu'),
        f = a('I35Ay'),
        g = a('I1Kh+'),
        h = a('Q+eBo'),
        i = a('PMl60'),
        j = a('iWivW'),
        k = a('HWnN/'),
        l = a('/pbxo'),
        m = a('9tz3H'),
        n = a('JqBF0');
    class o extends f.default {
        constructor(_p) {
            super(_p), (0, e.default)(this, 'activityAlpha', 1), (0, e.default)(this, 'createView', () => {
                this.back = this.parts.add.sprite({
                    ...g.BackAsset,
                    onReady: _p => {
                        _p.view.setScale(0.4), _p.view.alpha = this.activityAlpha;
                    }
                }), this.front = this.parts.add.sprite({
                    ...g.FrontAsset,
                    depthChange: 150,
                    onReady: _p => {
                        _p.view.setScale(0.4), _p.view.alpha = this.activityAlpha;
                    }
                }), this.front2 = this.parts.add.sprite({
                    ...g.Front2Asset,
                    depthChange: 100,
                    onReady: _p => {
                        _p.view.setScale(0.4), _p.view.alpha = this.activityAlpha;
                    }
                }), this.shadow = this.shadows.add({
                    x: 0,
                    y: 100,
                    r1: 150,
                    r2: 60,
                    alphaMultip: this.activityAlpha
                });
            }), (0, e.default)(this, 'createColliders', () => {
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
            }), (0, e.default)(this, 'setupInteractiveZones', () => {
                this.interactiveZones.add.circle({
                    x: -20,
                    y: 70,
                    r: 60
                });
                const q = !j.default.session.cosmosBlocked && (0, i.isLoggedIn)(),
                    r = q ? k.ChangingBoothConsts.interactiveInfo.normal : j.default.session.cosmosBlocked ? k.ChangingBoothConsts.interactiveInfo.cosmosBlocked : k.ChangingBoothConsts.interactiveInfo.notLoggedIn,
                    s = q ? void 0 : k.ChangingBoothConsts.interactiveInfo.notAvailableHeader,
                    t = q ? void 0 : k.ChangingBoothConsts.interactiveInfo.notAvailableColor;
                this.interactiveZones.setInfo({
                    message: r,
                    allowedToInteract: q,
                    duration: k.ChangingBoothConsts.interactiveInfo.duration,
                    topHeader: s,
                    topHeaderColor: t
                }), this.interactiveZones.onInteraction = () => {
                    this.sendToServerDevice(h.Messages.open);
                };
            }), (0, e.default)(this, 'openDeviceUI', () => {
                this.deviceUI.open({});
            }), (0, e.default)(this, 'updateActiveState', () => {
                const q = this.state.active ? 1 : 0;
                this.tweens.add({
                    targets: this,
                    activityAlpha: q,
                    duration: 100,
                    onUpdate: () => {
                        var r, s, t, u, v, w;
                        null === (r = this.back) || void 0 === r || null === (s = r.view) || void 0 === s || s.setAlpha(this.activityAlpha), null === (t = this.front) || void 0 === t || null === (u = t.view) || void 0 === u || u.setAlpha(this.activityAlpha), null === (v = this.front2) || void 0 === v || null === (w = v.view) || void 0 === w || w.setAlpha(this.activityAlpha), this.shadow.alphaMultip = this.activityAlpha;
                    }
                }), this.interactiveZones.setForceDisabled(!this.state.active), this.state.active || this.deviceUI.close();
            }), (0, e.default)(this, 'onStateChange', _p => {
                'active' === _p && this.updateActiveState();
            }), (0, e.default)(this, 'checkIfCollidersEnabled', () => this.state.active), this.layers.setDefaultLayer(n.default.DepthSortedCharactersAndDevices), this.activityAlpha = this.state.active ? 1 : 0, (0, l.InPreGamePhase)() && (0, m.isSavedVersion)() && (this.activityAlpha = 1), this.createView(), this.createColliders(), this.setupInteractiveZones();
        }
    }
    var _p = o;
}), a.register('I1Kh+', function(b, c) {
    t(b.exports, 'BackAsset', function() {
        return _e;
    }), t(b.exports, 'FrontAsset', function() {
        return _f;
    }), t(b.exports, 'Front2Asset', function() {
        return _g;
    });
    var d = a('2Xvuf');
    const _e = {
            imageId: (0, d.default)('devices/changing_booth/back.png'),
            imageUrl: (0, d.default)('devices/changing_booth/back.png')
        },
        _f = {
            imageId: (0, d.default)('devices/changing_booth/front.png'),
            imageUrl: (0, d.default)('devices/changing_booth/front.png')
        },
        _g = {
            imageId: (0, d.default)('devices/changing_booth/front_2.png'),
            imageUrl: (0, d.default)('devices/changing_booth/front_2.png')
        };
}), a.register('Q+eBo', function(b, c) {
    let d;
    t(b.exports, 'Messages', function() {
        return d;
    }), (d || (d = {})).open = 'open';
}), a.register('HWnN/', function(b, c) {
    t(b.exports, 'ChangingBoothConsts', function() {
        return _d;
    });
    const _d = {
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