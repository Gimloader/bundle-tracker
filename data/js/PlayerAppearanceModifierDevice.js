function a(a, b, o, c) {
    Object.defineProperty(a, b, {
        get: o,
        set: c,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('QKL32', function(o, c) {
    var c;
    c = o.exports, Object.defineProperty(c, '__esModule', {
        value: !0,
        configurable: !0
    }), a(o.exports, 'default', function() {
        return n;
    });
    var d = b('UM8oI'),
        e = b('JJQ0+'),
        f = b('PUlKf'),
        g = b('Bpt+p'),
        h = b('5Ux1a'),
        i = b('sgILU'),
        j = b('phu0d'),
        k = b('Gqspz'),
        l = b('7nWDH');
    class m extends i.default {
        constructor(a) {
            if (super(a), (0, d.default)(this, 'onMessage', a => {
                    var n;
                    a.key === l.Messages.triggered && (null == a || null === (n = a.data) || void 0 === n ? void 0 : n.characterId) === (0, f.default)() && this.model && this.model.base && this.model.base.view && this.tweens.add({
                        targets: this.model.base.view,
                        duration: 150,
                        alpha: 0.85,
                        scale: 1.15 * this.model.base.view.scale,
                        yoyo: !0
                    });
                }), (0, h.InPreGamePhase)() && (0, g.isSavedVersion)()) {
                const n = k.default.Manager;
                this.model = new(0, j.default)({
                    device: this,
                    baseColor: n.baseColor,
                    boxColor: n.boxColor,
                    content: {
                        icon: {
                            image: (0, e.default)('devices/player_appearance_modifier/icon.png')
                        }
                    }
                });
            }
        }
    }
    var n = o;
}), b.register('7nWDH', function(b, o) {
    let c;
    a(b.exports, 'Messages', function() {
        return c;
    }), (c || (c = {})).triggered = 'triggered';
});