function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('PFz8I', function(c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'default', function() {
        return _l;
    });
    var f = b('hycyg'),
        g = b('UkCpC'),
        h = b('u/WlI21'),
        i = b('uc4mA17'),
        j = b('ltxDW');
    class k extends j.default {
        constructor(l) {
            if (super(l), (0, g.InGamePhase)() || (0, f.isPublishedVersion)())
                return;
            this.parts.add.rect({
                width: this.options.width,
                height: this.options.height,
                color: 65280,
                alpha: 0.15
            });
            const m = (0, i.FetchOptionSchemaProperty)(this, 'width'),
                n = (0, i.FetchOptionSchemaProperty)(this, 'height');
            this.visualEditing.add.box({
                keepRatio: !1,
                rotable: !0,
                width: this.options.width,
                height: this.options.height,
                minWidth: m.min,
                maxWidth: m.max,
                minHeight: n.min,
                maxHeight: n.max,
                onChange: l => {
                    (0, h.ReplaceVisualEditingPreview)(l.x, l.y, {
                        width: l.width,
                        height: l.height
                    });
                }
            });
        }
    }
    var _l = k;
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