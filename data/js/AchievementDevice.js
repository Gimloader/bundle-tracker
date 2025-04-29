function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('HMD//', function(c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'default', function() {
        return _p;
    });
    var f = b('s/YA9'),
        g = b('quE27'),
        h = b('fI6of'),
        i = b('5Fjxs'),
        j = b('hycyg'),
        k = b('UkCpC'),
        l = b('ltxDW'),
        m = b('xyr62'),
        n = b('5twYG');
    class o extends l.default {
        constructor(p) {
            super(p), (0, f.default)(this, 'onMessage', p => {
                p.key === n.Messages.show && (null == p ? void 0 : p.data) === (0, i.default)() && h.default.gui.achievement.update(this.id, (0, g.generateId)());
            }), (0, j.isPublishedVersion)() || (0, k.InGamePhase)() || (this.layers.forceDepthManually(0), this.parts.add.sprite(m.BaseAsset));
        }
    }
    var _p = o;
}), b.register('xyr62', function(c, d) {
    a(c.exports, 'BaseAsset', function() {
        return _e;
    });
    const _e = {
        imageId: 'achievement_device',
        imageUrl: (0, b('UaUBz0').default)('devices/achievement/icon.png')
    };
}), b.register('5twYG', function(c, d) {
    let e;
    a(c.exports, 'Messages', function() {
        return e;
    }), (e || (e = {})).show = 'show';
});