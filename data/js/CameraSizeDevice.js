function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('g6jJt', function(c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'default', function() {
        return _o;
    });
    var f = b('s/YA9'),
        g = b('ltxDW'),
        h = b('5Y6la'),
        i = b('UkCpC'),
        j = b('hycyg'),
        k = b('FWW2T6'),
        l = b('u/WlI21'),
        m = b('uc4mA17');
    class n extends g.default {
        constructor(o) {
            if (super(o), (0, f.default)(this, 'notifyManagerAboutUpdate', () => {
                    this.scene.worldManager.devices.cameras.allCamerasNeedsUpdate = !0;
                }), (0, f.default)(this, 'onDestroy', () => {
                    this.notifyManagerAboutUpdate();
                }), (0, f.default)(this, 'setupVisualEditing', () => {
                    if (!(0, i.InPreGamePhase)() || !(0, j.isSavedVersion)())
                        return;
                    const p = (0, m.FetchOptionSchemaProperty)(this, 'width'),
                        q = (0, m.FetchOptionSchemaProperty)(this, 'height');
                    this.visualEditing.add.box({
                        width: this.options.width,
                        height: this.options.height,
                        minWidth: p.min,
                        maxWidth: p.max,
                        minHeight: q.min,
                        maxHeight: q.max,
                        rotable: !1,
                        keepRatio: !1,
                        onChange: p => {
                            (0, l.ReplaceVisualEditingPreview)(p.x, p.y, {
                                width: p.width,
                                height: p.height
                            });
                        }
                    });
                }), this.setupVisualEditing(), this.notifyManagerAboutUpdate(), (0, j.isPublishedVersion)() || (0, i.InGamePhase)())
                return;
            this.layers.forceDepthManually(0);
            this.parts.add.sprite(h.BaseAsset).view.setScale(0.5), k.default.shouldShow(this) && this.parts.add.rect({
                color: 11400448,
                alpha: k.default.shouldShowInnerZone(this) ? 0.2 : 0,
                width: Math.abs(this.options.width),
                height: Math.abs(this.options.height),
                borderColor: 11400448,
                borderAlpha: 1,
                borderWidth: 4,
                ignoreInput: !0
            });
        }
    }
    var _o = n;
}), b.register('5Y6la', function(c, d) {
    a(c.exports, 'BaseAsset', function() {
        return _f;
    });
    var e = b('UaUBz0');
    const _f = {
        imageId: (0, e.default)('devices/camera_size/base.png'),
        imageUrl: (0, e.default)('devices/camera_size/base.png')
    };
}), b.register('FWW2T6', function(c, d) {
    a(c.exports, 'ZonedDeviceDisplayOptions', function() {
        return _f;
    }), a(c.exports, 'default', function() {
        return _i;
    });
    var e = b('OR/wR6');
    let _f;
    var g;
    (g = _f || (_f = {})).visible = 'visible', g.bordersOnly = 'bordersOnly', g.fullyHidden = 'fullyHidden';
    const h = () => {
        const i = localStorage.getItem(e.default.zonedDeviceViews);
        return i || _f.bordersOnly;
    };
    var _i = {
        shouldShow: a => h() !== _f.fullyHidden,
        shouldShowInnerZone: a => h() !== _f.bordersOnly
    };
}), b.register('OR/wR6', function(c, d) {
    a(c.exports, 'default', function() {
        return _e;
    });
    var _e = {
        zonedDeviceViews: 'zoned-device-views'
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