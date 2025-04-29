function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('4r3E/', function(c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'default', function() {
        return _p;
    });
    var f = b('s/YA9'),
        g = b('UaUBz0'),
        h = b('5Fjxs'),
        i = b('hycyg'),
        j = b('UkCpC'),
        k = b('ltxDW'),
        l = b('73Aki'),
        m = b('AHhkR'),
        n = b('JsRgZ');
    class o extends k.default {
        constructor(p) {
            if (super(p), (0, f.default)(this, 'onMessage', p => {
                    var q;
                    p.key === n.Messages.triggered && (null == p || null === (q = p.data) || void 0 === q ? void 0 : q.characterId) === (0, h.default)() && this.model && this.model.base && this.model.base.view && this.tweens.add({
                        targets: this.model.base.view,
                        duration: 150,
                        alpha: 0.85,
                        scale: 1.15 * this.model.base.view.scale,
                        yoyo: !0
                    });
                }), (0, j.InPreGamePhase)() && (0, i.isSavedVersion)()) {
                const q = m.default.Manager;
                this.model = new(0, l.default)({
                    device: this,
                    baseColor: q.baseColor,
                    boxColor: q.boxColor,
                    content: {
                        icon: {
                            image: (0, g.default)('devices/player_appearance_modifier/icon.png')
                        }
                    }
                });
            }
        }
    }
    var _p = o;
}), b.register('JsRgZ', function(c, d) {
    let e;
    a(c.exports, 'Messages', function() {
        return e;
    }), (e || (e = {})).triggered = 'triggered';
});