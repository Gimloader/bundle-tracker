function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('h8+db', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _n(b.exports, 'default', function() {
        return _n;
    });
    var e = a('1bFPu'),
        f = a('2Xvuf'),
        g = a('9tz3H'),
        h = a('/pbxo'),
        i = a('I35Ay'),
        j = a('+uQv7'),
        k = a('dTXti'),
        l = a('bu42I0');
    class m extends i.default {
        constructor(_n) {
            if (super(_n), (0, e.default)(this, 'onMessage', _n => {
                    'hit' === _n.key && (0, l.OnHit)(_n.data);
                }), (0, h.InPreGamePhase)() && (0, g.isSavedVersion)()) {
                const o = k.default.Utility;
                new(0, j.default)({
                    device: this,
                    baseColor: o.baseColor,
                    boxColor: o.boxColor,
                    content: {
                        icon: {
                            image: (0, f.default)('devices/damager/icon.png'),
                            scale: 0.85
                        }
                    }
                });
            }
        }
    }
    var _n = m;
}), a.register('bu42I0', function(b, c) {
    _m(b.exports, 'OnHit', function() {
        return _i;
    });
    var d = a('Jfada'),
        e = a('B9G/J'),
        f = a('D5xLI'),
        g = a('O4Fyc'),
        h = a('vqFRL');
    const _i = _m => {
        const {
            characterId: j,
            damage: k,
            type: l
        } = _m;
        if (j && k && l) {
            const _m = (0, g.AmISpectator)() ? (0, e.FetchSpectatedId)() : (0, d.default)();
            (0, f.default)().worldManager.projectiles.damageMarkers.characters.applyDamage({
                characterId: j,
                damage: k,
                type: l
            }), j === _m && (0, h.default)({
                type: l
            });
        }
    };
});