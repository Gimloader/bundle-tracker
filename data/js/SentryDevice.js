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
        return _q;
    });
    var f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....'), k = b('.....'), l = b('.....'), m = b('.....'), n = b('.....'), o = b('.....');
    class p extends k.default {
        constructor(q) {
            if (super(q), (0, f.default)(this, 'currentFallVelocity', 0), (0, h.InGamePhase)() || (0, g.isPublishedVersion)())
                return;
            const r = (0, j.FetchOptionSchemaProperty)(this, 'rangeRadius');
            this.visualEditing.add.circle({
                radius: this.options.rangeRadius,
                minRadius: r.min,
                maxRadius: r.max,
                rotable: !1,
                onChange: s => {
                    (0, i.ReplaceVisualEditingPreview)(s.x, s.y, { rangeRadius: Math.round(s.radius) });
                }
            });
            const s = this.options.skinId.replace('character_', ''), t = (0, l.default)(`characters/spine/normalized_preview/${ s }.png`);
            this.parts.add.sprite({
                y: 30 - 50 * 0.28,
                imageId: t,
                imageUrl: t,
                depthChange: (0, n.default)(2),
                onReady: u => {
                    u.view.setScale(0.28 * this.options.scale), u.view.setOrigin(0.5, 550 / 600);
                }
            }), (0, o.isPlatformer)() || this.parts.add.sprite({
                y: 15 - 5 * this.options.scale,
                imageId: 'character-shadow',
                imageUrl: (0, l.default)('characters/shadow.png'),
                onReady: u => {
                    u.view.setOrigin(0.5, 0.5), u.view.setScale(m.SHADOW_SCALE * this.options.scale), u.view.setAlpha(m.SHADOW_ALPHA);
                }
            });
        }
    }
    var _q = p;
}), b.register('.....', function (c, d) {
    a(c.exports, 'ReplaceVisualEditingPreview', function () {
        return _i;
    });
    var e = b('.....'), f = b('.....'), g = b('.....'), h = b('.....');
    const _i = (j, k, l) => {
        const m = (0, h.FetchVisualEditingPreview)(), n = (0, g.FetchCurrentlyEditedDevice)();
        if (!n || !m)
            return;
        const o = n.layers.isOnNaturalDepth() ? void 0 : k + n.layers.getDepthShift();
        (0, f.default)({
            deviceOption: m.deviceOption,
            id: e.VisualEditingConstants.previewId,
            x: j,
            y: k,
            depth: o,
            layerId: n.layers.getLayer(),
            name: m.name,
            isPreview: !0,
            options: {
                ...m.options,
                ...l
            },
            placedByClient: !0,
            state: m.deviceOption.defaultState
        });
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _g;
    });
    var e = b('.....'), f = b('.....');
    var _g = h => {
        (0, e.default)().worldManager.devices.getDeviceById(h.id) && (0, f.default)(h);
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'FetchOptionSchemaProperty', function () {
        return _e;
    });
    const _e = (f, g) => {
        var h, i, j;
        const k = f.deviceOption.optionSchema.options.find(l => l.key === g);
        return {
            min: null === (h = null == k ? void 0 : k.option.props) || void 0 === h ? void 0 : h.min,
            max: null === (i = null == k ? void 0 : k.option.props) || void 0 === i ? void 0 : i.max,
            step: null === (j = null == k ? void 0 : k.option.props) || void 0 === j ? void 0 : j.step
        };
    };
});