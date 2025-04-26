function a(a, b, i, c) {
    Object.defineProperty(a, b, {
        get: i,
        set: c,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('sYSW4', function(i, c) {
    var c;
    c = i.exports, Object.defineProperty(c, '__esModule', {
        value: !0,
        configurable: !0
    }), a(i.exports, 'default', function() {
        return n;
    });
    var d = b('UM8oI'),
        e = b('5Ux1a'),
        f = b('sgILU'),
        g = b('KW8vR'),
        h = b('Ft6ks'),
        i = b('Bpt+p'),
        j = b('dAmf5');
    const k = a => {
            (0, j.default)().plugins.get('rexGrayScalePipeline').add(a, {
                intensity: 1
            });
        },
        l = a => {
            (0, j.default)().plugins.get('rexGrayScalePipeline').remove(a);
        };
    class m extends f.default {
        constructor(a) {
            super(a), (0, d.default)(this, 'stepOnCounter', 0), (0, d.default)(this, 'onMessage', a => {
                if (a.key === h.Messages.steppedOn) {
                    if (!this.up || !this.down)
                        return;
                    this.stepOnCounter += 1;
                    const n = this.stepOnCounter;
                    this.down.view.setAlpha(1), this.up.view.setAlpha(0), this.downTimeout = window.setTimeout(() => {
                        n === this.stepOnCounter && (this.down.view.setAlpha(0), this.up.view.setAlpha(1));
                    }, 350);
                }
            }), (0, d.default)(this, 'onDestroy', () => {
                this.downTimeout && window.clearTimeout(this.downTimeout);
            }), (0, d.default)(this, 'onStateChange', a => {
                'active' === a && this.updateGrayscale();
            }), (0, d.default)(this, 'updateGrayscale', () => {
                if (this.up && this.down) {
                    let n = this.state.active;
                    (0, e.InPreGamePhase)() && (n = this.options.activeOnGameStart), n ? (l(this.up.view), l(this.down.view)) : (k(this.up.view), k(this.down.view));
                }
            }), (this.options.visibleInGame || !(0, e.InGamePhase)() && !(0, i.isPublishedVersion)()) && (this.up = this.parts.add.sprite(g.UpAsset), this.down = this.parts.add.sprite(g.DownAsset), this.up.view.setScale(0.4), this.down.view.setScale(0.4), this.down.view.setAlpha(0), this.updateGrayscale());
        }
    }
    var n = o;
}), b.register('KW8vR', function(i, c) {
    a(i.exports, 'UpAsset', function() {
        return d;
    }), a(i.exports, 'DownAsset', function() {
        return e;
    });
    var c = b('JJQ0+');
    const d = {
            imageId: (0, c.default)('devices/trigger/trigger_up.png'),
            imageUrl: (0, c.default)('devices/trigger/trigger_up.png')
        },
        e = {
            imageId: (0, c.default)('devices/trigger/trigger_down.png'),
            imageUrl: (0, c.default)('devices/trigger/trigger_down.png')
        };
}), b.register('Ft6ks', function(b, i) {
    let c;
    a(b.exports, 'Messages', function() {
        return c;
    }), (c || (c = {})).steppedOn = 'steppedOn';
});