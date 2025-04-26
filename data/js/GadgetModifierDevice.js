function a(a, b, n, o) {
    Object.defineProperty(a, b, {
        get: n,
        set: o,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('EVjCc', function(n, o) {
    var c;
    c = n.exports, Object.defineProperty(c, '__esModule', {
        value: !0,
        configurable: !0
    }), a(n.exports, 'default', function() {
        return m;
    });
    var d = b('0x6bL'),
        e = b('JJQ0+'),
        f = b('Bpt+p'),
        g = b('5Ux1a'),
        h = b('sgILU'),
        i = b('phu0d'),
        j = b('Gqspz'),
        k = b('Sbl6W');
    class l extends h.default {
        constructor(a) {
            if (super(a), (0, g.InGamePhase)() || (0, f.isPublishedVersion)())
                return;
            let m = k.UnknownItemAsset.imageUrl;
            const n = (0, d.default)(this.options.itemId);
            n && (m = n.previewImage);
            const o = j.default.Overlay;
            new(0, i.default)({
                device: this,
                baseColor: o.baseColor,
                boxColor: o.boxColor,
                content: {
                    topLeftIcon: {
                        image: (0, e.default)('devices/gadget_modifier/icon.png'),
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
}), b.register('Sbl6W', function(n, o) {
    a(n.exports, 'BaseAsset', function() {
        return d;
    }), a(n.exports, 'UnknownItemAsset', function() {
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