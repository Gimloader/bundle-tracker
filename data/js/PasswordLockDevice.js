function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('.....', function(c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'default', function() {
        return _n;
    });
    var f = b('.....'),
        g = b('.....'),
        h = b('.....'),
        i = b('.....'),
        j = b('.....'),
        k = b('.....'),
        l = b('.....');
    class m extends j.default {
        constructor(n) {
            super(n), (0, f.default)(this, 'incorrectCounter', 0), (0, f.default)(this, 'guess', o => {
                this.sendToServerDevice(l.PasswordLockDeviceSentToServerMessages.guess, {
                    password: o
                });
            }), (0, f.default)(this, 'openDeviceUI', () => {
                this.deviceUI.open({
                    maxAttempts: this.options.maxAttempts,
                    useMaxAttempts: this.options.useMaxAttempts,
                    attempts: this.state.attempts,
                    guess: this.guess,
                    incorrectCounter: this.incorrectCounter
                });
            }), (0, f.default)(this, 'onStateChange', o => {
                'attempts' === o && this.deviceUI.update({
                    attempts: this.state.attempts
                });
            }), (0, f.default)(this, 'onMessage', o => {
                o.key === l.PasswordLockDeviceSentToClientMessages.incorrect && (null == o ? void 0 : o.data) === (0, g.default)() && (this.incorrectCounter += 1, this.deviceUI.update({
                    incorrectCounter: this.incorrectCounter
                }));
            }), (0, h.isPublishedVersion)() || (0, i.InGamePhase)() || (this.layers.forceDepthManually(0), this.parts.add.sprite(k.BaseAsset));
        }
    }
    var _n = m;
}), b.register('.....', function(c, d) {
    a(c.exports, 'BaseAsset', function() {
        return _e;
    });
    const _e = {
        imageId: 'password_lock',
        imageUrl: (0, b('.....').default)('devices/password_lock/icon.png')
    };
}), b.register('.....', function(c, d) {
    let e;
    let f;
    a(c.exports, 'PasswordLockDeviceSentToServerMessages', function() {
        return e;
    }), a(c.exports, 'PasswordLockDeviceSentToClientMessages', function() {
        return f;
    }), (e || (e = {})).guess = 'guess', (f || (f = {})).incorrect = 'incorrect';
});