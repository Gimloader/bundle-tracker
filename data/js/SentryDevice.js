function a(a, b, p, q) {
    Object.defineProperty(a, b, {
        get: p,
        set: q,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('kf5Sk', function(p, q) {
    var c;
    c = p.exports, Object.defineProperty(c, '__esModule', {
        value: !0,
        configurable: !0
    }), a(p.exports, 'default', function() {
        return o;
    });
    var d = b('UM8oI'),
        e = b('Bpt+p'),
        f = b('5Ux1a'),
        g = b('wSwKo5'),
        h = b('/Lvpl17'),
        i = b('sgILU'),
        j = b('JJQ0+'),
        k = b('eaWFX'),
        l = b('Q0Vn8'),
        m = b('HMNV0');
    class n extends i.default {
        constructor(a) {
            if (super(a), (0, d.default)(this, 'currentFallVelocity', 0), (0, f.InGamePhase)() || (0, e.isPublishedVersion)())
                return;
            const o = (0, h.FetchOptionSchemaProperty)(this, 'rangeRadius');
            this.visualEditing.add.circle({
                radius: this.options.rangeRadius,
                minRadius: o.min,
                maxRadius: o.max,
                rotable: !1,
                onChange: a => {
                    (0, g.ReplaceVisualEditingPreview)(a.x, a.y, {
                        rangeRadius: Math.round(a.radius)
                    });
                }
            });
            const p = this.options.skinId.replace('character_', ''),
                q = (0, j.default)(`characters/spine/normalized_preview/${ p }.png`);
            this.parts.add.sprite({
                y: 30 - 50 * 0.28,
                imageId: q,
                imageUrl: q,
                depthChange: (0, l.default)(2),
                onReady: a => {
                    a.view.setScale(0.28 * this.options.scale), a.view.setOrigin(0.5, 550 / 600);
                }
            }), (0, m.isPlatformer)() || this.parts.add.sprite({
                y: 15 - 5 * this.options.scale,
                imageId: 'character-shadow',
                imageUrl: (0, j.default)('characters/shadow.png'),
                onReady: a => {
                    a.view.setOrigin(0.5, 0.5), a.view.setScale(k.SHADOW_SCALE * this.options.scale), a.view.setAlpha(k.SHADOW_ALPHA);
                }
            });
        }
    }
    var o = p;
}), b.register('wSwKo5', function(d, h) {
    a(d.exports, 'ReplaceVisualEditingPreview', function() {
        return g;
    });
    var c = b('2pEsK'),
        d = b('Am0b71'),
        e = b('KDS1x'),
        f = b('83+vO');
    const g = (a, b, d) => {
        const h = (0, f.FetchVisualEditingPreview)(),
            i = (0, e.FetchCurrentlyEditedDevice)();
        if (!i || !h)
            return;
        const j = i.layers.isOnNaturalDepth() ? void 0 : b + i.layers.getDepthShift();
        (0, d.default)({
            deviceOption: h.deviceOption,
            id: c.VisualEditingConstants.previewId,
            x: a,
            y: b,
            depth: j,
            layerId: i.layers.getLayer(),
            name: h.name,
            isPreview: !0,
            options: {
                ...h.options,
                ...d
            },
            placedByClient: !0,
            state: h.deviceOption.defaultState
        });
    };
}), b.register('Am0b71', function(d, c) {
    a(d.exports, 'default', function() {
        return e;
    });
    var c = b('dAmf5'),
        d = b('jgFbX');
    var e = a => {
        (0, c.default)().worldManager.devices.getDeviceById(a.id) && (0, d.default)(a);
    };
}), b.register('/Lvpl17', function(b, d) {
    a(b.exports, 'FetchOptionSchemaProperty', function() {
        return c;
    });
    const c = (a, b) => {
        var d, e, f;
        const g = a.deviceOption.optionSchema.options.find(a => a.key === b);
        return {
            min: null === (d = null == g ? void 0 : g.option.props) || void 0 === d ? void 0 : d.min,
            max: null === (e = null == g ? void 0 : g.option.props) || void 0 === e ? void 0 : e.max,
            step: null === (f = null == g ? void 0 : g.option.props) || void 0 === f ? void 0 : f.step
        };
    };
});