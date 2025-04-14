function e(e, t, s, r) {
    Object.defineProperty(e, t, {
        get: s,
        set: r,
        enumerable: !0,
        configurable: !0
    })
}
var t = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
t.register("dTrG4", (function(s, r) {
    var o;
    o = s.exports, Object.defineProperty(o, "__esModule", {
        value: !0,
        configurable: !0
    }), e(s.exports, "default", (function() {
        return f
    }));
    var i = t("divCp"),
        n = t("fhnJp"),
        a = t("4uojN"),
        c = t("6Tpu2"),
        u = t("bNmF9"),
        d = t("3pbGY"),
        l = t("c6gcg");
    class p extends u.default {
        constructor(e) {
            super(e), (0, i.default)(this, "incorrectCounter", 0), (0, i.default)(this, "guess", (e => {
                this.sendToServerDevice(l.PasswordLockDeviceSentToServerMessages.guess, {
                    password: e
                })
            })), (0, i.default)(this, "openDeviceUI", (() => {
                this.deviceUI.open({
                    maxAttempts: this.options.maxAttempts,
                    useMaxAttempts: this.options.useMaxAttempts,
                    attempts: this.state.attempts,
                    guess: this.guess,
                    incorrectCounter: this.incorrectCounter
                })
            })), (0, i.default)(this, "onStateChange", (e => {
                "attempts" === e && this.deviceUI.update({
                    attempts: this.state.attempts
                })
            })), (0, i.default)(this, "onMessage", (e => {
                e.key === l.PasswordLockDeviceSentToClientMessages.incorrect && (null == e ? void 0 : e.data) === (0, n.default)() && (this.incorrectCounter += 1, this.deviceUI.update({
                    incorrectCounter: this.incorrectCounter
                }))
            })), (0, a.isPublishedVersion)() || (0, c.InGamePhase)() || (this.layers.forceDepthManually(0), this.parts.add.sprite(d.BaseAsset))
        }
    }
    var f = p
})), t.register("3pbGY", (function(s, r) {
    e(s.exports, "BaseAsset", (function() {
        return o
    }));
    const o = {
        imageId: "password_lock",
        imageUrl: (0, t("alREA").default)("devices/password_lock/icon.png")
    }
})), t.register("c6gcg", (function(t, s) {
    let r;
    let o;
    e(t.exports, "PasswordLockDeviceSentToServerMessages", (function() {
        return r
    })), e(t.exports, "PasswordLockDeviceSentToClientMessages", (function() {
        return o
    })), (r || (r = {})).guess = "guess", (o || (o = {})).incorrect = "incorrect"
}));