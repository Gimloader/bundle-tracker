var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('.....', function(b, c) {
    var d, e, f, g, h;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), e = b.exports, f = 'default', g = function() {
        return _r;
    }, Object.defineProperty(e, f, {
        get: g,
        set: h,
        enumerable: !0,
        configurable: !0
    });
    var i = a('.....'),
        j = a('.....'),
        k = a('.....'),
        l = a('.....'),
        m = a('.....'),
        n = a('.....'),
        o = a('.....');
    const p = (0, k.default)('devices/camera_point/icon.png');
    class q extends n.default {
        destroy(r) {
            this.resetCameraPoint(), super.destroy(r);
        }
        constructor(r) {
            super(r), (0, i.default)(this, 'resetCameraPoint', () => {
                (0, o.default)().cameraHelper.resetCameraPointDevice();
            }), (0, i.default)(this, 'setCameraPoint', () => {
                (0, o.default)().cameraHelper.setCameraPointDevice(this.id, this.x, this.y);
            }), (0, i.default)(this, 'onStateChange', s => {
                var t;
                (0, m.InPreGamePhase)() || 'active' === s && (!1 === this.state.active && (null === (t = (0, o.default)().cameraHelper.activeCameraPoint) || void 0 === t ? void 0 : t.deviceId) === this.id && this.resetCameraPoint(), this.state.active && this.setCameraPoint());
            }), this.layers.setDefaultLayer(j.default.DevicesUnderCharacters), (0, m.InPreGamePhase)() && (0, l.isSavedVersion)() ? this.parts.add.sprite({
                imageId: p,
                imageUrl: p,
                onReady: s => {
                    s.view.setScale(0.15), this.tweens.add({
                        targets: s.view,
                        scale: 0.17,
                        duration: 1000,
                        yoyo: !0,
                        repeat: -1,
                        ease: 'Sine.easeInOut'
                    });
                }
            }) : this.state.active && this.setCameraPoint();
        }
    }
    var _r = q;
});