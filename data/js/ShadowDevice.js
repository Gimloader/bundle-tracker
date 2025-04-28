function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('d65Su', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _m(b.exports, 'default', function() {
        return _m;
    });
    var e = a('1bFPu'),
        f = a('I35Ay'),
        g = a('sDV3L'),
        h = a('/pbxo'),
        i = a('9tz3H'),
        j = a('R2Ucl10'),
        k = a('IFO6W13');
    class l extends f.default {
        constructor(_m) {
            super(_m), (0, e.default)(this, 'setupVisualEditing', () => {
                if (!(0, h.InPreGamePhase)() || !(0, i.isSavedVersion)())
                    return;
                const n = (0, j.FetchOptionSchemaProperty)(this, 'width'),
                    o = (0, j.FetchOptionSchemaProperty)(this, 'height');
                this.visualEditing.add.box({
                    width: this.options.width,
                    height: this.options.height,
                    minWidth: n.min,
                    maxWidth: n.max,
                    minHeight: o.min,
                    maxHeight: o.max,
                    rotable: !1,
                    keepRatio: !1,
                    onChange: n => {
                        (0, k.ReplaceVisualEditingPreview)(n.x, n.y, {
                            width: n.width,
                            height: n.height
                        });
                    }
                });
            }), this.setupVisualEditing(), this.icon = this.parts.add.sprite(g.BaseAsset), this.icon.view.alpha = 1e-7, this.icon.view.scaleX = this.options.width / 300, this.icon.view.scaleY = this.options.height / 130, this.shadows.add({
                depth: this.layers.getGlobalDepth(),
                r1: this.options.width / 2,
                r2: this.options.height / 2
            }), this.boundingBox.clearCached();
        }
    }
    var _m = l;
}), a.register('sDV3L', function(b, c) {
    e(b.exports, 'BaseAsset', function() {
        return _d;
    });
    const _d = {
        imageId: 'shadow_device',
        imageUrl: (0, a('2Xvuf').default)('devices/shadow/shadow_device.png')
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
});