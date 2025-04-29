function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('4SCOn', function(c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'default', function() {
        return _o;
    });
    var f = b('s/YA9'),
        g = b('UaUBz0'),
        h = b('hycyg'),
        i = b('UkCpC'),
        j = b('ltxDW'),
        k = b('73Aki'),
        l = b('AHhkR'),
        m = b('JCj1N0');
    class n extends j.default {
        constructor(o) {
            if (super(o), (0, f.default)(this, 'onMessage', o => {
                    'hit' === o.key && (0, m.OnHit)(o.data);
                }), (0, i.InPreGamePhase)() && (0, h.isSavedVersion)()) {
                const p = l.default.Utility;
                new(0, k.default)({
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
}), b.register('JCj1N0', function(c, d) {
    a(c.exports, 'OnHit', function() {
        return _j;
    });
    var e = b('5Fjxs'),
        f = b('OuzTs'),
        g = b('heTaO'),
        h = b('RsWIB'),
        i = b('bg2iz');
    const _j = a => {
        const {
            characterId: k,
            damage: l,
            type: m
        } = a;
        if (k && l && m) {
            const n = (0, h.AmISpectator)() ? (0, f.FetchSpectatedId)() : (0, e.default)();
            (0, g.default)().worldManager.projectiles.damageMarkers.characters.applyDamage({
                characterId: k,
                damage: l,
                type: m
            }), k === n && (0, i.default)({
                type: m
            });
        }
    };
});