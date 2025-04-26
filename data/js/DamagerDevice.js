function a(a, b, j, k) {
    Object.defineProperty(a, b, {
        get: j,
        set: k,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('kHSoZ', function(j, k) {
    var c;
    c = j.exports, Object.defineProperty(c, '__esModule', {
        value: !0,
        configurable: !0
    }), a(j.exports, 'default', function() {
        return m;
    });
    var d = b('UM8oI'),
        e = b('JJQ0+'),
        f = b('Bpt+p'),
        g = b('5Ux1a'),
        h = b('sgILU'),
        i = b('phu0d'),
        j = b('Gqspz'),
        k = b('ZnzPM0');
    class l extends h.default {
        constructor(a) {
            if (super(a), (0, d.default)(this, 'onMessage', a => {
                    'hit' === a.key && (0, k.OnHit)(a.data);
                }), (0, g.InPreGamePhase)() && (0, f.isSavedVersion)()) {
                const m = j.default.Utility;
                new(0, i.default)({
                    device: this,
                    baseColor: m.baseColor,
                    boxColor: m.boxColor,
                    content: {
                        icon: {
                            image: (0, e.default)('devices/damager/icon.png'),
                            scale: 0.85
                        }
                    }
                });
            }
        }
    }
    var m = n;
}), b.register('ZnzPM0', function(j, k) {
    a(j.exports, 'OnHit', function() {
        return h;
    });
    var c = b('PUlKf'),
        d = b('BEe8M'),
        e = b('dAmf5'),
        f = b('mdnc8'),
        g = b('hTFUq');
    const h = a => {
        const {
            characterId: i,
            damage: j,
            type: k
        } = l;
        if (i && j && k) {
            const m = (0, f.AmISpectator)() ? (0, d.FetchSpectatedId)() : (0, c.default)();
            (0, e.default)().worldManager.projectiles.damageMarkers.characters.applyDamage({
                characterId: i,
                damage: j,
                type: k
            }), i === m && (0, g.default)({
                type: k
            });
        }
    };
});