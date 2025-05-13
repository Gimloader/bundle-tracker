function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('.....', function(c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'default', function() {
        return _n;
    });
    var f = b('.....'),
        g = b('.....'),
        h = b('.....'),
        i = b('.....'),
        j = b('.....'),
        k = b('.....'),
        l = b('.....');
    class m extends g.default {
        constructor(n) {
            super(n), (0, f.default)(this, 'setupVisualEditing', () => {
                if (!(0, i.InPreGamePhase)() || !(0, j.isSavedVersion)())
                    return;
                const o = (0, k.FetchOptionSchemaProperty)(this, 'width'),
                    p = (0, k.FetchOptionSchemaProperty)(this, 'height');
                this.visualEditing.add.box({
                    width: this.options.width,
                    height: this.options.height,
                    minWidth: o.min,
                    maxWidth: o.max,
                    minHeight: p.min,
                    maxHeight: p.max,
                    rotable: !1,
                    keepRatio: !1,
                    onChange: q => {
                        (0, l.ReplaceVisualEditingPreview)(q.x, q.y, {
                            width: q.width,
                            height: q.height
                        });
                    }
                });
            }), this.setupVisualEditing(), this.icon = this.parts.add.sprite(h.BaseAsset), this.icon.view.alpha = 1e-7, this.icon.view.scaleX = this.options.width / 300, this.icon.view.scaleY = this.options.height / 130, this.shadows.add({
                depth: this.layers.getGlobalDepth(),
                r1: this.options.width / 2,
                r2: this.options.height / 2
            }), this.boundingBox.clearCached();
        }
    }
    var _n = m;
}), b.register('.....', function(c, d) {
    a(c.exports, 'BaseAsset', function() {
        return _e;
    });
    const _e = {
        imageId: 'shadow_device',
        imageUrl: (0, b('.....').default)('devices/shadow/shadow_device.png')
    };
}), b.register('.....', function(c, d) {
    a(c.exports, 'FetchOptionSchemaProperty', function() {
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
}), b.register('.....', function(c, d) {
    a(c.exports, 'ReplaceVisualEditingPreview', function() {
        return _i;
    });
    var e = b('.....'),
        f = b('.....'),
        g = b('.....'),
        h = b('.....');
    const _i = (j, k, l) => {
        const m = (0, h.FetchVisualEditingPreview)(),
            n = (0, g.FetchCurrentlyEditedDevice)();
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
}), b.register('.....', function(c, d) {
    a(c.exports, 'default', function() {
        return _g;
    });
    var e = b('.....'),
        f = b('.....');
    var _g = h => {
        (0, e.default)().worldManager.devices.getDeviceById(h.id) && (0, f.default)(h);
    };
});