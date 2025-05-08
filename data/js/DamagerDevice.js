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
        return _o;
    });
    var f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....'), k = b('.....'), l = b('.....'), m = b('.....');
    class n extends j.default {
        constructor(o) {
            if (super(o), (0, f.default)(this, 'onMessage', p => {
                    'hit' === p.key && (0, m.OnHit)(p.data);
                }), (0, i.InPreGamePhase)() && (0, h.isSavedVersion)()) {
                const p = l.default.Utility;
                new (0, k.default)({
                    device: this,
                    baseColor: p.baseColor,
                    boxColor: p.boxColor,
                    content: {
                        icon: {
                            image: (0, g.default)('devices/damager/icon.png'),
                            scale: 0.85
                        }
                    }
                });
            }
        }
    }
    var _o = n;
}), b.register('.....', function (c, d) {
    a(c.exports, 'OnHit', function () {
        return _j;
    });
    var e = b('.....'), f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....');
    const _j = k => {
        const {
            characterId: l,
            damage: m,
            type: n
        } = k;
        if (l && m && n) {
            const o = (0, h.AmISpectator)() ? (0, f.FetchSpectatedId)() : (0, e.default)();
            (0, g.default)().worldManager.projectiles.damageMarkers.characters.applyDamage({
                characterId: l,
                damage: m,
                type: n
            }), l === o && (0, i.default)({ type: n });
        }
    };
});