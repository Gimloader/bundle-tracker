function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('mRnvx', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _o(b.exports, 'default', function() {
        return _o;
    });
    var e = a('1bFPu'),
        f = a('/pbxo'),
        g = a('I35Ay'),
        h = a('MrJ1V'),
        i = a('d0wY5'),
        j = a('9tz3H'),
        k = a('D5xLI');
    const l = _o => {
            (0, k.default)().plugins.get('rexGrayScalePipeline').add(_o, {
                intensity: 1
            });
        },
        m = _o => {
            (0, k.default)().plugins.get('rexGrayScalePipeline').remove(_o);
        };
    class n extends g.default {
        constructor(_o) {
            super(_o), (0, e.default)(this, 'stepOnCounter', 0), (0, e.default)(this, 'onMessage', _o => {
                if (_o.key === i.Messages.steppedOn) {
                    if (!this.up || !this.down)
                        return;
                    this.stepOnCounter += 1;
                    const p = this.stepOnCounter;
                    this.down.view.setAlpha(1), this.up.view.setAlpha(0), this.downTimeout = window.setTimeout(() => {
                        p === this.stepOnCounter && (this.down.view.setAlpha(0), this.up.view.setAlpha(1));
                    }, 350);
                }
            }), (0, e.default)(this, 'onDestroy', () => {
                this.downTimeout && window.clearTimeout(this.downTimeout);
            }), (0, e.default)(this, 'onStateChange', _o => {
                'active' === _o && this.updateGrayscale();
            }), (0, e.default)(this, 'updateGrayscale', () => {
                if (this.up && this.down) {
                    let p = this.state.active;
                    (0, f.InPreGamePhase)() && (p = this.options.activeOnGameStart), p ? (m(this.up.view), m(this.down.view)) : (l(this.up.view), l(this.down.view));
                }
            }), (this.options.visibleInGame || !(0, f.InGamePhase)() && !(0, j.isPublishedVersion)()) && (this.up = this.parts.add.sprite(h.UpAsset), this.down = this.parts.add.sprite(h.DownAsset), this.up.view.setScale(0.4), this.down.view.setScale(0.4), this.down.view.setAlpha(0), this.updateGrayscale());
        }
    }
    var _o = n;
}), a.register('MrJ1V', function(b, c) {
    e(b.exports, 'UpAsset', function() {
        return _e;
    }), e(b.exports, 'DownAsset', function() {
        return _f;
    });
    var d = a('2Xvuf');
    const _e = {
            imageId: (0, d.default)('devices/trigger/trigger_up.png'),
            imageUrl: (0, d.default)('devices/trigger/trigger_up.png')
        },
        _f = {
            imageId: (0, d.default)('devices/trigger/trigger_down.png'),
            imageUrl: (0, d.default)('devices/trigger/trigger_down.png')
        };
}), a.register('d0wY5', function(b, c) {
    let d;
    e(b.exports, 'Messages', function() {
        return d;
    }), (d || (d = {})).steppedOn = 'steppedOn';
});