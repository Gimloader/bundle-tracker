var e = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
e.register("cdLEk", (function(t, a) {
    var i, s, r, n, o;
    i = t.exports, Object.defineProperty(i, "__esModule", {
        value: !0,
        configurable: !0
    }), s = t.exports, r = "default", n = function() {
        return P
    }, Object.defineProperty(s, r, {
        get: n,
        set: o,
        enumerable: !0,
        configurable: !0
    });
    var d = e("divCp"),
        l = e("bvStP"),
        u = e("alREA"),
        c = e("4uojN"),
        f = e("6Tpu2"),
        h = e("bNmF9"),
        v = e("gwuwo");
    const p = (0, u.default)("devices/camera_point/icon.png");
    class m extends h.default {
        destroy(e) {
            this.resetCameraPoint(), super.destroy(e)
        }
        constructor(e) {
            super(e), (0, d.default)(this, "resetCameraPoint", (() => {
                (0, v.default)().cameraHelper.resetCameraPointDevice()
            })), (0, d.default)(this, "setCameraPoint", (() => {
                (0, v.default)().cameraHelper.setCameraPointDevice(this.id, this.x, this.y)
            })), (0, d.default)(this, "onStateChange", (e => {
                var t;
                (0, f.InPreGamePhase)() || "active" === e && (!1 === this.state.active && (null === (t = (0, v.default)().cameraHelper.activeCameraPoint) || void 0 === t ? void 0 : t.deviceId) === this.id && this.resetCameraPoint(), this.state.active && this.setCameraPoint())
            })), this.layers.setDefaultLayer(l.default.DevicesUnderCharacters), (0, f.InPreGamePhase)() && (0, c.isSavedVersion)() ? this.parts.add.sprite({
                imageId: p,
                imageUrl: p,
                onReady: e => {
                    e.view.setScale(.15), this.tweens.add({
                        targets: e.view,
                        scale: .17,
                        duration: 1e3,
                        yoyo: !0,
                        repeat: -1,
                        ease: "Sine.easeInOut"
                    })
                }
            }) : this.state.active && this.setCameraPoint()
        }
    }
    var P = m
}));