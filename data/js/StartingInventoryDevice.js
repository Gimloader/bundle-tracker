function a(a, b, n, o) {
    Object.defineProperty(a, b, {
        get: n,
        set: o,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('5N18z', function(n, o) {
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
        g = b('sgILU'),
        h = b('phu0d'),
        i = b('Gqspz'),
        j = b('Sbl6W'),
        k = b('0x6bL');
    class l extends g.default {
        constructor(a) {
            if (super(a), (0, f.InGamePhase)() || (0, e.isPublishedVersion)())
                return;
            let m = j.UnknownItemAsset.imageUrl;
            const n = (0, k.default)(this.options.itemId);
            n && (m = n.previewImage);
            const o = i.default.Overlay;
            new(0, h.default)({
                device: this,
                baseColor: o.baseColor,
                boxColor: o.boxColor,
                content: {
                    topLeftIcon: {
                        image: (0, d.default)('devices/starting_inventory/icon.png'),
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
}), b.register('Sbl6W', function(t, o) {
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