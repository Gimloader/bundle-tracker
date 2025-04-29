function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('fdoaT', function(c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'default', function() {
        return _n;
    });
    var f = b('s/YA9'),
        g = b('ltxDW'),
        h = b('iWeih'),
        i = b('UkCpC'),
        j = b('hycyg'),
        k = b('uc4mA17'),
        l = b('u/WlI21');
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
                    onChange: o => {
                        (0, l.ReplaceVisualEditingPreview)(o.x, o.y, {
                            width: o.width,
                            height: o.height
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
}), b.register('iWeih', function(c, d) {
    a(c.exports, 'BaseAsset', function() {
        return _e;
    });
    const _e = {
        imageId: 'shadow_device',
        imageUrl: (0, b('UaUBz0').default)('devices/shadow/shadow_device.png')
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
});