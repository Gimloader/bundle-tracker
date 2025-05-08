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
    var f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....'), k = b('.....'), l = b('.....'), m = b('.....'), n = b('.....');
    class o extends k.default {
        constructor(p) {
            if (super(p), (0, f.default)(this, 'onMessage', q => {
                    var r;
                    q.key === n.Messages.triggered && (null == q || null === (r = q.data) || void 0 === r ? void 0 : r.characterId) === (0, h.default)() && this.model && this.model.base && this.model.base.view && this.tweens.add({
                        targets: this.model.base.view,
                        duration: 150,
                        alpha: 0.85,
                        scale: 1.15 * this.model.base.view.scale,
                        yoyo: !0
                    });
                }), (0, j.InPreGamePhase)() && (0, i.isSavedVersion)()) {
                const q = m.default.Manager;
                this.model = new (0, l.default)({
                    device: this,
                    baseColor: q.baseColor,
                    boxColor: q.boxColor,
                    content: { icon: { image: (0, g.default)('devices/player_appearance_modifier/icon.png') } }
                });
            }
        }
    }
    var _p = o;
}), b.register('.....', function (c, d) {
    let e;
    a(c.exports, 'Messages', function () {
        return e;
    }), (e || (e = {})).triggered = 'triggered';
});