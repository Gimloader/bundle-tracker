function a(a, b, d, c) {
    Object.defineProperty(a, b, {
        get: d,
        set: c,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('smAPX', function(d, c) {
    var c;
    c = d.exports, Object.defineProperty(c, '__esModule', {
        value: !0,
        configurable: !0
    }), a(d.exports, 'default', function() {
        return m;
    });
    var d = b('UM8oI'),
        e = b('sgILU'),
        f = b('gSwce'),
        g = b('5Ux1a'),
        h = b('Bpt+p'),
        i = b('SCq5x4'),
        j = b('wSwKo5'),
        k = b('/Lvpl17');
    class l extends e.default {
        constructor(a) {
            if (super(a), (0, d.default)(this, 'notifyManagerAboutUpdate', () => {
                    this.scene.worldManager.devices.cameras.allCamerasNeedsUpdate = !0;
                }), (0, d.default)(this, 'onDestroy', () => {
                    this.notifyManagerAboutUpdate();
                }), (0, d.default)(this, 'setupVisualEditing', () => {
                    if (!(0, g.InPreGamePhase)() || !(0, h.isSavedVersion)())
                        return;
                    const m = (0, k.FetchOptionSchemaProperty)(this, 'width'),
                        n = (0, k.FetchOptionSchemaProperty)(this, 'height');
                    this.visualEditing.add.box({
                        width: this.options.width,
                        height: this.options.height,
                        minWidth: m.min,
                        maxWidth: m.max,
                        minHeight: n.min,
                        maxHeight: n.max,
                        rotable: !1,
                        keepRatio: !1,
                        onChange: m => {
                            (0, j.ReplaceVisualEditingPreview)(m.x, m.y, {
                                width: m.width,
                                height: m.height
                            });
                        }
                    });
                }), this.setupVisualEditing(), this.notifyManagerAboutUpdate(), (0, h.isPublishedVersion)() || (0, g.InGamePhase)())
                return;
            this.layers.forceDepthManually(0);
            this.parts.add.sprite(f.BaseAsset).view.setScale(0.5), i.default.shouldShow(this) && this.parts.add.rect({
                color: 11400448,
                alpha: i.default.shouldShowInnerZone(this) ? 0.2 : 0,
                width: Math.abs(this.options.width),
                height: Math.abs(this.options.height),
                borderColor: 11400448,
                borderAlpha: 1,
                borderWidth: 4,
                ignoreInput: !0
            });
        }
    }
    var m = n;
}), b.register('gSwce', function(d, c) {
    a(d.exports, 'BaseAsset', function() {
        return d;
    });
    var c = b('JJQ0+');
    const d = {
        imageId: (0, c.default)('devices/camera_size/base.png'),
        imageUrl: (0, c.default)('devices/camera_size/base.png')
    };
}), b.register('SCq5x4', function(d, c) {
    a(d.exports, 'ZonedDeviceDisplayOptions', function() {
        return d;
    }), a(d.exports, 'default', function() {
        return g;
    });
    var c = b('aGdJe4');
    let d;
    var e;
    (e = d || (d = {})).visible = 'visible', e.bordersOnly = 'bordersOnly', e.fullyHidden = 'fullyHidden';
    const f = () => {
        const g = localStorage.getItem(c.default.zonedDeviceViews);
        return g || d.bordersOnly;
    };
    var g = {
        shouldShow: a => f() !== d.fullyHidden,
        shouldShowInnerZone: a => f() !== d.bordersOnly
    };
}), b.register('aGdJe4', function(b, d) {
    a(b.exports, 'default', function() {
        return c;
    });
    var c = {
        zonedDeviceViews: 'zoned-device-views'
    };
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