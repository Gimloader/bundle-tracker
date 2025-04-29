function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('g5cIS', function(c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'default', function() {
        return _n;
    });
    var f = b('s/YA9'),
        g = b('5Fjxs'),
        h = b('hycyg'),
        i = b('UkCpC'),
        j = b('ltxDW'),
        k = b('2nQoh'),
        l = b('s6dPu');
    class m extends j.default {
        constructor(n) {
            super(n), (0, f.default)(this, 'incorrectCounter', 0), (0, f.default)(this, 'guess', n => {
                this.sendToServerDevice(l.PasswordLockDeviceSentToServerMessages.guess, {
                    password: n
                });
            }), (0, f.default)(this, 'openDeviceUI', () => {
                this.deviceUI.open({
                    maxAttempts: this.options.maxAttempts,
                    useMaxAttempts: this.options.useMaxAttempts,
                    attempts: this.state.attempts,
                    guess: this.guess,
                    incorrectCounter: this.incorrectCounter
                });
            }), (0, f.default)(this, 'onStateChange', n => {
                'attempts' === n && this.deviceUI.update({
                    attempts: this.state.attempts
                });
            }), (0, f.default)(this, 'onMessage', n => {
                n.key === l.PasswordLockDeviceSentToClientMessages.incorrect && (null == n ? void 0 : n.data) === (0, g.default)() && (this.incorrectCounter += 1, this.deviceUI.update({
                    incorrectCounter: this.incorrectCounter
                }));
            }), (0, h.isPublishedVersion)() || (0, i.InGamePhase)() || (this.layers.forceDepthManually(0), this.parts.add.sprite(k.BaseAsset));
        }
    }
    var _n = m;
}), b.register('2nQoh', function(c, d) {
    a(c.exports, 'BaseAsset', function() {
        return _e;
    });
    const _e = {
        imageId: 'password_lock',
        imageUrl: (0, b('UaUBz0').default)('devices/password_lock/icon.png')
    };
}), b.register('s6dPu', function(c, d) {
    let e;
    let f;
    a(c.exports, 'PasswordLockDeviceSentToServerMessages', function() {
        return e;
    }), a(c.exports, 'PasswordLockDeviceSentToClientMessages', function() {
        return f;
    }), (e || (e = {})).guess = 'guess', (f || (f = {})).incorrect = 'incorrect';
});