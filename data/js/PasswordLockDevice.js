function a(a, b, s, c) {
    Object.defineProperty(a, b, {
        get: s,
        set: c,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('Kr3dR', function(s, c) {
    var c;
    c = s.exports, Object.defineProperty(c, '__esModule', {
        value: !0,
        configurable: !0
    }), a(s.exports, 'default', function() {
        return l;
    });
    var d = b('UM8oI'),
        e = b('PUlKf'),
        f = b('Bpt+p'),
        g = b('5Ux1a'),
        h = b('sgILU'),
        i = b('RC3mS'),
        j = b('kYc89');
    class k extends h.default {
        constructor(a) {
            super(a), (0, d.default)(this, 'incorrectCounter', 0), (0, d.default)(this, 'guess', a => {
                this.sendToServerDevice(j.PasswordLockDeviceSentToServerMessages.guess, {
                    password: a
                });
            }), (0, d.default)(this, 'openDeviceUI', () => {
                this.deviceUI.open({
                    maxAttempts: this.options.maxAttempts,
                    useMaxAttempts: this.options.useMaxAttempts,
                    attempts: this.state.attempts,
                    guess: this.guess,
                    incorrectCounter: this.incorrectCounter
                });
            }), (0, d.default)(this, 'onStateChange', a => {
                'attempts' === a && this.deviceUI.update({
                    attempts: this.state.attempts
                });
            }), (0, d.default)(this, 'onMessage', a => {
                a.key === j.PasswordLockDeviceSentToClientMessages.incorrect && (null == a ? void 0 : a.data) === (0, e.default)() && (this.incorrectCounter += 1, this.deviceUI.update({
                    incorrectCounter: this.incorrectCounter
                }));
            }), (0, f.isPublishedVersion)() || (0, g.InGamePhase)() || (this.layers.forceDepthManually(0), this.parts.add.sprite(i.BaseAsset));
        }
    }
    var l = m;
}), b.register('RC3mS', function(s, c) {
    a(s.exports, 'BaseAsset', function() {
        return c;
    });
    const c = {
        imageId: 'password_lock',
        imageUrl: (0, b('JJQ0+').default)('devices/password_lock/icon.png')
    };
}), b.register('kYc89', function(b, s) {
    let c;
    let d;
    a(b.exports, 'PasswordLockDeviceSentToServerMessages', function() {
        return c;
    }), a(b.exports, 'PasswordLockDeviceSentToClientMessages', function() {
        return d;
    }), (c || (c = {})).guess = 'guess', (d || (d = {})).incorrect = 'incorrect';
});