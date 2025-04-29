function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('Oqo8K', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _o(b.exports, 'default', function() {
        return _o;
    });
    var e = a('1bFPu'),
        f = a('PMl60'),
        g = a('iWivW'),
        h = a('Jfada'),
        i = a('9tz3H'),
        j = a('/pbxo'),
        k = a('I35Ay'),
        l = a('9LXPl'),
        m = a('I6I6X');
    class n extends k.default {
        constructor(_o) {
            super(_o), (0, e.default)(this, 'onMessage', _o => {
                _o.key === m.Messages.show && (null == _o ? void 0 : _o.data) === (0, h.default)() && g.default.gui.achievement.update(this.id, (0, f.generateId)());
            }), (0, i.isPublishedVersion)() || (0, j.InGamePhase)() || (this.layers.forceDepthManually(0), this.parts.add.sprite(l.BaseAsset));
        }
    }
    var _o = n;
}), a.register('9LXPl', function(b, c) {
    e(b.exports, 'BaseAsset', function() {
        return _d;
    });
    const _d = {
        imageId: 'achievement_device',
        imageUrl: (0, a('2Xvuf').default)('devices/achievement/icon.png')
    };
}), a.register('I6I6X', function(b, c) {
    let d;
    e(b.exports, 'Messages', function() {
        return d;
    }), (d || (d = {})).show = 'show';
});