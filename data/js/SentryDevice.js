function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('G7Ovc', function(c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'default', function() {
        return _q;
    });
    var f = b('s/YA9'),
        g = b('hycyg'),
        h = b('UkCpC'),
        i = b('u/WlI21'),
        j = b('uc4mA17'),
        k = b('ltxDW'),
        l = b('UaUBz0'),
        m = b('RZJBP'),
        n = b('H4eGM'),
        o = b('UCu0V');
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
                onChange: q => {
                    (0, i.ReplaceVisualEditingPreview)(q.x, q.y, {
                        rangeRadius: Math.round(q.radius)
                    });
                }
            });
            const s = this.options.skinId.replace('character_', ''),
                t = (0, l.default)(`characters/spine/normalized_preview/${ s }.png`);
            this.parts.add.sprite({
                y: 30 - 50 * 0.28,
                imageId: t,
                imageUrl: t,
                depthChange: (0, n.default)(2),
                onReady: q => {
                    q.view.setScale(0.28 * this.options.scale), q.view.setOrigin(0.5, 550 / 600);
                }
            }), (0, o.isPlatformer)() || this.parts.add.sprite({
                y: 15 - 5 * this.options.scale,
                imageId: 'character-shadow',
                imageUrl: (0, l.default)('characters/shadow.png'),
                onReady: q => {
                    q.view.setOrigin(0.5, 0.5), q.view.setScale(m.SHADOW_SCALE * this.options.scale), q.view.setAlpha(m.SHADOW_ALPHA);
                }
            });
        }
    }
    var _q = p;
}), b.register('u/WlI21', function(c, d) {
    a(c.exports, 'ReplaceVisualEditingPreview', function() {
        return _i;
    });
    var e = b('hemXM'),
        f = b('sWmxu5'),
        g = b('EzUqb'),
        h = b('GQMbT');
    const _i = (a, b, c) => {
        const j = (0, h.FetchVisualEditingPreview)(),
            k = (0, g.FetchCurrentlyEditedDevice)();
        if (!k || !j)
            return;
        const l = k.layers.isOnNaturalDepth() ? void 0 : b + k.layers.getDepthShift();
        (0, f.default)({
            deviceOption: j.deviceOption,
            id: e.VisualEditingConstants.previewId,
            x: a,
            y: b,
            depth: l,
            layerId: k.layers.getLayer(),
            name: j.name,
            isPreview: !0,
            options: {
                ...j.options,
                ...c
            },
            placedByClient: !0,
            state: j.deviceOption.defaultState
        });
    };
}), b.register('sWmxu5', function(c, d) {
    a(c.exports, 'default', function() {
        return _g;
    });
    var e = b('heTaO'),
        f = b('2LtPo');
    var _g = a => {
        (0, e.default)().worldManager.devices.getDeviceById(a.id) && (0, f.default)(a);
    };
}), b.register('uc4mA17', function(c, d) {
    a(c.exports, 'FetchOptionSchemaProperty', function() {
        return _e;
    });
    const _e = (a, c) => {
        var f, g, h;
        const i = a.deviceOption.optionSchema.options.find(a => a.key === c);
        return {
            min: null === (f = null == i ? void 0 : i.option.props) || void 0 === f ? void 0 : f.min,
            max: null === (g = null == i ? void 0 : i.option.props) || void 0 === g ? void 0 : g.max,
            step: null === (h = null == i ? void 0 : i.option.props) || void 0 === h ? void 0 : h.step
        };
    };
});