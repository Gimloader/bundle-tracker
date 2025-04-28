function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('H0TeK', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _p(b.exports, 'default', function() {
        return _p;
    });
    var e = a('1bFPu'),
        f = a('9tz3H'),
        g = a('/pbxo'),
        h = a('IFO6W13'),
        i = a('R2Ucl10'),
        j = a('I35Ay'),
        k = a('2Xvuf'),
        l = a('DWF4E'),
        m = a('5CmLs'),
        n = a('JEGzD');
    class o extends j.default {
        constructor(_p) {
            if (super(_p), (0, e.default)(this, 'currentFallVelocity', 0), (0, g.InGamePhase)() || (0, f.isPublishedVersion)())
                return;
            const q = (0, i.FetchOptionSchemaProperty)(this, 'rangeRadius');
            this.visualEditing.add.circle({
                radius: this.options.rangeRadius,
                minRadius: q.min,
                maxRadius: q.max,
                rotable: !1,
                onChange: _p => {
                    (0, h.ReplaceVisualEditingPreview)(_p.x, _p.y, {
                        rangeRadius: Math.round(_p.radius)
                    });
                }
            });
            const r = this.options.skinId.replace('character_', ''),
                s = (0, k.default)(`characters/spine/normalized_preview/${ r }.png`);
            this.parts.add.sprite({
                y: 30 - 50 * 0.28,
                imageId: s,
                imageUrl: s,
                depthChange: (0, m.default)(2),
                onReady: _p => {
                    _p.view.setScale(0.28 * this.options.scale), _p.view.setOrigin(0.5, 550 / 600);
                }
            }), (0, n.isPlatformer)() || this.parts.add.sprite({
                y: 15 - 5 * this.options.scale,
                imageId: 'character-shadow',
                imageUrl: (0, k.default)('characters/shadow.png'),
                onReady: _p => {
                    _p.view.setOrigin(0.5, 0.5), _p.view.setScale(l.SHADOW_SCALE * this.options.scale), _p.view.setAlpha(l.SHADOW_ALPHA);
                }
            });
        }
    }
    var _p = o;
}), a.register('IFO6W13', function(b, c) {
    e(b.exports, 'ReplaceVisualEditingPreview', function() {
        return _h;
    });
    var d = a('HqwPM'),
        e = a('+oovY4'),
        f = a('A17vD'),
        g = a('HXXiu');
    const _h = (e, a, b) => {
        const i = (0, g.FetchVisualEditingPreview)(),
            j = (0, f.FetchCurrentlyEditedDevice)();
        if (!j || !i)
            return;
        const k = j.layers.isOnNaturalDepth() ? void 0 : a + j.layers.getDepthShift();
        (0, e.default)({
            deviceOption: i.deviceOption,
            id: d.VisualEditingConstants.previewId,
            x: e,
            y: a,
            depth: k,
            layerId: j.layers.getLayer(),
            name: i.name,
            isPreview: !0,
            options: {
                ...i.options,
                ...b
            },
            placedByClient: !0,
            state: i.deviceOption.defaultState
        });
    };
}), a.register('+oovY4', function(b, c) {
    e(b.exports, 'default', function() {
        return _f;
    });
    var d = a('D5xLI'),
        e = a('aIyMH');
    var _f = e => {
        (0, d.default)().worldManager.devices.getDeviceById(e.id) && (0, e.default)(e);
    };
}), a.register('R2Ucl10', function(b, c) {
    e(b.exports, 'FetchOptionSchemaProperty', function() {
        return _d;
    });
    const _d = (e, b) => {
        var e, f, g;
        const h = e.deviceOption.optionSchema.options.find(e => e.key === b);
        return {
            min: null === (e = null == h ? void 0 : h.option.props) || void 0 === e ? void 0 : e.min,
            max: null === (f = null == h ? void 0 : h.option.props) || void 0 === f ? void 0 : f.max,
            step: null === (g = null == h ? void 0 : h.option.props) || void 0 === g ? void 0 : g.step
        };
    };
});