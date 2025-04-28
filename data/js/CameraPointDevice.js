var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('KUfSh', function(b, c) {
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
    var i = a('1bFPu'),
        j = a('JqBF0'),
        k = a('2Xvuf'),
        l = a('9tz3H'),
        m = a('/pbxo'),
        n = a('I35Ay'),
        o = a('D5xLI');
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
            }), (0, i.default)(this, 'onStateChange', r => {
                var s;
                (0, m.InPreGamePhase)() || 'active' === r && (!1 === this.state.active && (null === (s = (0, o.default)().cameraHelper.activeCameraPoint) || void 0 === s ? void 0 : s.deviceId) === this.id && this.resetCameraPoint(), this.state.active && this.setCameraPoint());
            }), this.layers.setDefaultLayer(j.default.DevicesUnderCharacters), (0, m.InPreGamePhase)() && (0, l.isSavedVersion)() ? this.parts.add.sprite({
                imageId: p,
                imageUrl: p,
                onReady: r => {
                    r.view.setScale(0.15), this.tweens.add({
                        targets: r.view,
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