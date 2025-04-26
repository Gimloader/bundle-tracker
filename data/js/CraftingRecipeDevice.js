function a(a, b, n, o) {
    Object.defineProperty(a, b, {
        get: n,
        set: o,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('PYyKB', function(n, o) {
    var c;
    c = n.exports, Object.defineProperty(c, '__esModule', {
        value: !0,
        configurable: !0
    }), a(n.exports, 'default', function() {
        return m;
    });
    var d = b('JJQ0+'),
        e = b('Bpt+p'),
        f = b('5Ux1a'),
        g = b('0x6bL'),
        h = b('sgILU'),
        i = b('phu0d'),
        j = b('Gqspz'),
        k = b('Sbl6W');
    class l extends h.default {
        constructor(a) {
            if (super(a), (0, e.isPublishedVersion)() || (0, f.InGamePhase)())
                return;
            let m = k.UnknownItemAsset.imageUrl;
            const n = (0, g.default)(this.options.item);
            n && (m = n.previewImage);
            const o = j.default.Overlay;
            new(0, i.default)({
                device: this,
                baseColor: o.baseColor,
                boxColor: o.boxColor,
                content: {
                    topLeftIcon: {
                        image: (0, d.default)('devices/crafting_recipe/icon.png'),
                        scale: 1
                    },
                    icon: {
                        image: m,
                        scale: 1
                    }
                }
            });
        }
    }
    var m = n;
}), b.register('Sbl6W', function(t, i) {
    a(t.exports, 'BaseAsset', function() {
        return d;
    }), a(t.exports, 'UnknownItemAsset', function() {
        return e;
    });
    var c = b('JJQ0+');
    const d = {
            imageId: (0, c.default)('devices/item_granter/base.png'),
            imageUrl: (0, c.default)('devices/item_granter/base.png')
        },
        e = {
            imageId: '__UNKNOWN_ITEM',
            imageUrl: (0, c.default)('devices/item_granter/question-mark-2.png')
        };
});