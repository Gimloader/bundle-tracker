function a(a, b, d, c) {
    Object.defineProperty(a, b, {
        get: d,
        set: c,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('Hzr8y', function(d, c) {
    var c;
    c = d.exports, Object.defineProperty(c, '__esModule', {
        value: !0,
        configurable: !0
    }), a(d.exports, 'default', function() {
        return l;
    });
    var d = b('UM8oI'),
        e = b('sgILU'),
        f = b('Jok1m'),
        g = b('5Ux1a'),
        h = b('Bpt+p'),
        i = b('/Lvpl17'),
        j = b('wSwKo5');
    class k extends e.default {
        constructor(a) {
            super(a), (0, d.default)(this, 'setupVisualEditing', () => {
                if (!(0, g.InPreGamePhase)() || !(0, h.isSavedVersion)())
                    return;
                const l = (0, i.FetchOptionSchemaProperty)(this, 'width'),
                    m = (0, i.FetchOptionSchemaProperty)(this, 'height');
                this.visualEditing.add.box({
                    width: this.options.width,
                    height: this.options.height,
                    minWidth: l.min,
                    maxWidth: l.max,
                    minHeight: m.min,
                    maxHeight: m.max,
                    rotable: !1,
                    keepRatio: !1,
                    onChange: l => {
                        (0, j.ReplaceVisualEditingPreview)(l.x, l.y, {
                            width: l.width,
                            height: l.height
                        });
                    }
                });
            }), this.setupVisualEditing(), this.icon = this.parts.add.sprite(f.BaseAsset), this.icon.view.alpha = 1e-7, this.icon.view.scaleX = this.options.width / 300, this.icon.view.scaleY = this.options.height / 130, this.shadows.add({
                depth: this.layers.getGlobalDepth(),
                r1: this.options.width / 2,
                r2: this.options.height / 2
            }), this.boundingBox.clearCached();
        }
    }
    var l = m;
}), b.register('Jok1m', function(d, c) {
    a(d.exports, 'BaseAsset', function() {
        return c;
    });
    const c = {
        imageId: 'shadow_device',
        imageUrl: (0, b('JJQ0+').default)('devices/shadow/shadow_device.png')
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
}), b.register('wSwKo5', function(t, h) {
    a(t.exports, 'ReplaceVisualEditingPreview', function() {
        return g;
    });
    var c = b('2pEsK'),
        d = b('Am0b71'),
        e = b('KDS1x'),
        f = b('83+vO');
    const g = (a, b, t) => {
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
                ...t
            },
            placedByClient: !0,
            state: h.deviceOption.defaultState
        });
    };
}), b.register('Am0b71', function(t, n) {
    a(t.exports, 'default', function() {
        return e;
    });
    var c = b('dAmf5'),
        d = b('jgFbX');
    var e = a => {
        (0, c.default)().worldManager.devices.getDeviceById(a.id) && (0, d.default)(a);
    };
});