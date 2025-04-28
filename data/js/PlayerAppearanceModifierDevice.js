function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('I51PP', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _o(b.exports, 'default', function() {
        return _o;
    });
    var e = a('1bFPu'),
        f = a('2Xvuf'),
        g = a('Jfada'),
        h = a('9tz3H'),
        i = a('/pbxo'),
        j = a('I35Ay'),
        k = a('+uQv7'),
        l = a('dTXti'),
        m = a('PEl9g');
    class n extends j.default {
        constructor(_o) {
            if (super(_o), (0, e.default)(this, 'onMessage', _o => {
                    var p;
                    _o.key === m.Messages.triggered && (null == _o || null === (p = _o.data) || void 0 === p ? void 0 : p.characterId) === (0, g.default)() && this.model && this.model.base && this.model.base.view && this.tweens.add({
                        targets: this.model.base.view,
                        duration: 150,
                        alpha: 0.85,
                        scale: 1.15 * this.model.base.view.scale,
                        yoyo: !0
                    });
                }), (0, i.InPreGamePhase)() && (0, h.isSavedVersion)()) {
                const p = l.default.Manager;
                this.model = new(0, k.default)({
                    device: this,
                    baseColor: p.baseColor,
                    boxColor: p.boxColor,
                    content: {
                        icon: {
                            image: (0, f.default)('devices/player_appearance_modifier/icon.png')
                        }
                    }
                });
            }
        }
    }
    var _o = n;
}), a.register('PEl9g', function(b, c) {
    let d;
    e(b.exports, 'Messages', function() {
        return d;
    }), (d || (d = {})).triggered = 'triggered';
});