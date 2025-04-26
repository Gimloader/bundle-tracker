var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('EEJ7C', function(p, a) {
    var b, c, d, e, f;
    b = p.exports, Object.defineProperty(b, '__esModule', {
        value: !0,
        configurable: !0
    }), c = p.exports, d = 'default', e = function() {
        return p;
    }, Object.defineProperty(c, d, {
        get: e,
        set: f,
        enumerable: !0,
        configurable: !0
    });
    var g = a('UM8oI'),
        h = a('cMsWT'),
        i = a('JJQ0+'),
        j = a('Bpt+p'),
        k = a('5Ux1a'),
        l = a('sgILU'),
        m = a('dAmf5');
    const n = (0, i.default)('devices/camera_point/icon.png');
    class o extends l.default {
        destroy(a) {
            this.resetCameraPoint(), super.destroy(a);
        }
        constructor(a) {
            super(a), (0, g.default)(this, 'resetCameraPoint', () => {
                (0, m.default)().cameraHelper.resetCameraPointDevice();
            }), (0, g.default)(this, 'setCameraPoint', () => {
                (0, m.default)().cameraHelper.setCameraPointDevice(this.id, this.x, this.y);
            }), (0, g.default)(this, 'onStateChange', a => {
                var p;
                (0, k.InPreGamePhase)() || 'active' === a && (!1 === this.state.active && (null === (p = (0, m.default)().cameraHelper.activeCameraPoint) || void 0 === p ? void 0 : p.deviceId) === this.id && this.resetCameraPoint(), this.state.active && this.setCameraPoint());
            }), this.layers.setDefaultLayer(h.default.DevicesUnderCharacters), (0, k.InPreGamePhase)() && (0, j.isSavedVersion)() ? this.parts.add.sprite({
                imageId: n,
                imageUrl: n,
                onReady: a => {
                    a.view.setScale(0.15), this.tweens.add({
                        targets: a.view,
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
    var p = q;
});