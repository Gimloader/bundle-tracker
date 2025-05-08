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
    class n extends i.default {
        constructor(o) {
            if (super(o), (0, h.InGamePhase)() || (0, g.isPublishedVersion)())
                return;
            let p = l.UnknownItemAsset.imageUrl;
            const q = (0, m.default)(this.options.itemId);
            q && (p = q.previewImage);
            const r = k.default.Overlay;
            new (0, j.default)({
                device: this,
                baseColor: r.baseColor,
                boxColor: r.boxColor,
                content: {
                    topLeftIcon: {
                        image: (0, f.default)('devices/starting_inventory/icon.png'),
                        scale: 1
                    },
                    icon: {
                        image: p,
                        scale: 1
                    }
                }
            });
        }
    }
    var _o = n;
}), b.register('.....', function (c, d) {
    a(c.exports, 'BaseAsset', function () {
        return _f;
    }), a(c.exports, 'UnknownItemAsset', function () {
        return _g;
    });
    var e = b('.....');
    const _f = {
            imageId: (0, e.default)('devices/item_granter/base.png'),
            imageUrl: (0, e.default)('devices/item_granter/base.png')
        }, _g = {
            imageId: '__UNKNOWN_ITEM',
            imageUrl: (0, e.default)('devices/item_granter/question-mark-2.png')
        };
});