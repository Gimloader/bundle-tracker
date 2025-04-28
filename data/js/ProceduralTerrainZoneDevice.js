function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('CRAIC', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _k(b.exports, 'default', function() {
        return _k;
    });
    var e = a('9tz3H'),
        f = a('/pbxo'),
        g = a('IFO6W13'),
        h = a('R2Ucl10'),
        i = a('I35Ay');
    class j extends i.default {
        constructor(_k) {
            if (super(_k), (0, f.InGamePhase)() || (0, e.isPublishedVersion)())
                return;
            this.parts.add.rect({
                width: this.options.width,
                height: this.options.height,
                color: 65280,
                alpha: 0.15
            });
            const l = (0, h.FetchOptionSchemaProperty)(this, 'width'),
                m = (0, h.FetchOptionSchemaProperty)(this, 'height');
            this.visualEditing.add.box({
                keepRatio: !1,
                rotable: !0,
                width: this.options.width,
                height: this.options.height,
                minWidth: l.min,
                maxWidth: l.max,
                minHeight: m.min,
                maxHeight: m.max,
                onChange: _k => {
                    (0, g.ReplaceVisualEditingPreview)(_k.x, _k.y, {
                        width: _k.width,
                        height: _k.height
                    });
                }
            });
        }
    }
    var _k = j;
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