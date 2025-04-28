function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('jwQso', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _m(b.exports, 'default', function() {
        return _m;
    });
    var e = a('1bFPu'),
        f = a('Jfada'),
        g = a('9tz3H'),
        h = a('/pbxo'),
        i = a('I35Ay'),
        j = a('K1I+O'),
        k = a('i9d3N');
    class l extends i.default {
        constructor(_m) {
            super(_m), (0, e.default)(this, 'incorrectCounter', 0), (0, e.default)(this, 'guess', _m => {
                this.sendToServerDevice(k.PasswordLockDeviceSentToServerMessages.guess, {
                    password: _m
                });
            }), (0, e.default)(this, 'openDeviceUI', () => {
                this.deviceUI.open({
                    maxAttempts: this.options.maxAttempts,
                    useMaxAttempts: this.options.useMaxAttempts,
                    attempts: this.state.attempts,
                    guess: this.guess,
                    incorrectCounter: this.incorrectCounter
                });
            }), (0, e.default)(this, 'onStateChange', _m => {
                'attempts' === _m && this.deviceUI.update({
                    attempts: this.state.attempts
                });
            }), (0, e.default)(this, 'onMessage', _m => {
                _m.key === k.PasswordLockDeviceSentToClientMessages.incorrect && (null == _m ? void 0 : _m.data) === (0, f.default)() && (this.incorrectCounter += 1, this.deviceUI.update({
                    incorrectCounter: this.incorrectCounter
                }));
            }), (0, g.isPublishedVersion)() || (0, h.InGamePhase)() || (this.layers.forceDepthManually(0), this.parts.add.sprite(j.BaseAsset));
        }
    }
    var _m = l;
}), a.register('K1I+O', function(b, c) {
    e(b.exports, 'BaseAsset', function() {
        return _d;
    });
    const _d = {
        imageId: 'password_lock',
        imageUrl: (0, a('2Xvuf').default)('devices/password_lock/icon.png')
    };
}), a.register('i9d3N', function(b, c) {
    let d;
    let e;
    e(b.exports, 'PasswordLockDeviceSentToServerMessages', function() {
        return d;
    }), e(b.exports, 'PasswordLockDeviceSentToClientMessages', function() {
        return e;
    }), (d || (d = {})).guess = 'guess', (e || (e = {})).incorrect = 'incorrect';
});