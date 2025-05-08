function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('.....', function (c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'default', function () {
        return _p;
    });
    var f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....'), k = b('.....'), l = b('.....');
    const m = n => {
            (0, l.default)().plugins.get('rexGrayScalePipeline').add(n, { intensity: 1 });
        }, n = o => {
            (0, l.default)().plugins.get('rexGrayScalePipeline').remove(o);
        };
    class o extends h.default {
        constructor(p) {
            super(p), (0, f.default)(this, 'stepOnCounter', 0), (0, f.default)(this, 'onMessage', q => {
                if (q.key === j.Messages.steppedOn) {
                    if (!this.up || !this.down)
                        return;
                    this.stepOnCounter += 1;
                    const r = this.stepOnCounter;
                    this.down.view.setAlpha(1), this.up.view.setAlpha(0), this.downTimeout = window.setTimeout(() => {
                        r === this.stepOnCounter && (this.down.view.setAlpha(0), this.up.view.setAlpha(1));
                    }, 350);
                }
            }), (0, f.default)(this, 'onDestroy', () => {
                this.downTimeout && window.clearTimeout(this.downTimeout);
            }), (0, f.default)(this, 'onStateChange', q => {
                'active' === q && this.updateGrayscale();
            }), (0, f.default)(this, 'updateGrayscale', () => {
                if (this.up && this.down) {
                    let q = this.state.active;
                    (0, g.InPreGamePhase)() && (q = this.options.activeOnGameStart), q ? (n(this.up.view), n(this.down.view)) : (m(this.up.view), m(this.down.view));
                }
            }), (this.options.visibleInGame || !(0, g.InGamePhase)() && !(0, k.isPublishedVersion)()) && (this.up = this.parts.add.sprite(i.UpAsset), this.down = this.parts.add.sprite(i.DownAsset), this.up.view.setScale(0.4), this.down.view.setScale(0.4), this.down.view.setAlpha(0), this.updateGrayscale());
        }
    }
    var _p = o;
}), b.register('.....', function (c, d) {
    a(c.exports, 'UpAsset', function () {
        return _f;
    }), a(c.exports, 'DownAsset', function () {
        return _g;
    });
    var e = b('.....');
    const _f = {
            imageId: (0, e.default)('devices/trigger/trigger_up.png'),
            imageUrl: (0, e.default)('devices/trigger/trigger_up.png')
        }, _g = {
            imageId: (0, e.default)('devices/trigger/trigger_down.png'),
            imageUrl: (0, e.default)('devices/trigger/trigger_down.png')
        };
}), b.register('.....', function (c, d) {
    let e;
    a(c.exports, 'Messages', function () {
        return e;
    }), (e || (e = {})).steppedOn = 'steppedOn';
});