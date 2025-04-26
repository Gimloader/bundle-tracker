function a(a, b, k, h) {
    Object.defineProperty(a, b, {
        get: k,
        set: h,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('/Rza2', function(k, h) {
    var c;
    c = k.exports, Object.defineProperty(c, '__esModule', {
        value: !0,
        configurable: !0
    }), a(k.exports, 'default', function() {
        return j;
    });
    var d = b('Bpt+p'),
        e = b('5Ux1a'),
        f = b('wSwKo5'),
        g = b('/Lvpl17'),
        h = b('sgILU');
    class i extends h.default {
        constructor(a) {
            if (super(a), (0, e.InGamePhase)() || (0, d.isPublishedVersion)())
                return;
            this.parts.add.rect({
                width: this.options.width,
                height: this.options.height,
                color: 65280,
                alpha: 0.15
            });
            const j = (0, g.FetchOptionSchemaProperty)(this, 'width'),
                k = (0, g.FetchOptionSchemaProperty)(this, 'height');
            this.visualEditing.add.box({
                keepRatio: !1,
                rotable: !0,
                width: this.options.width,
                height: this.options.height,
                minWidth: j.min,
                maxWidth: j.max,
                minHeight: k.min,
                maxHeight: k.max,
                onChange: a => {
                    (0, f.ReplaceVisualEditingPreview)(a.x, a.y, {
                        width: a.width,
                        height: a.height
                    });
                }
            });
        }
    }
    var j = k;
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