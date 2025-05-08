function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('.....', function (c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'default', function () {
        return _o;
    });
    var f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....'), k = b('.....'), l = b('.....'), m = b('.....');
    class n extends g.default {
        constructor(o) {
            if (super(o), (0, f.default)(this, 'notifyManagerAboutUpdate', () => {
                    this.scene.worldManager.devices.cameras.allCamerasNeedsUpdate = !0;
                }), (0, f.default)(this, 'onDestroy', () => {
                    this.notifyManagerAboutUpdate();
                }), (0, f.default)(this, 'setupVisualEditing', () => {
                    if (!(0, i.InPreGamePhase)() || !(0, j.isSavedVersion)())
                        return;
                    const p = (0, m.FetchOptionSchemaProperty)(this, 'width'), q = (0, m.FetchOptionSchemaProperty)(this, 'height');
                    this.visualEditing.add.box({
                        width: this.options.width,
                        height: this.options.height,
                        minWidth: p.min,
                        maxWidth: p.max,
                        minHeight: q.min,
                        maxHeight: q.max,
                        rotable: !1,
                        keepRatio: !1,
                        onChange: r => {
                            (0, l.ReplaceVisualEditingPreview)(r.x, r.y, {
                                width: r.width,
                                height: r.height
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
}), b.register('.....', function (c, d) {
    a(c.exports, 'BaseAsset', function () {
        return _f;
    });
    var e = b('.....');
    const _f = {
        imageId: (0, e.default)('devices/camera_size/base.png'),
        imageUrl: (0, e.default)('devices/camera_size/base.png')
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'ZonedDeviceDisplayOptions', function () {
        return _f;
    }), a(c.exports, 'default', function () {
        return _i;
    });
    var e = b('.....');
    let _f;
    var g;
    (g = _f || (_f = {})).visible = 'visible', g.bordersOnly = 'bordersOnly', g.fullyHidden = 'fullyHidden';
    const h = () => {
        const i = localStorage.getItem(e.default.zonedDeviceViews);
        return i || _f.bordersOnly;
    };
    var _i = {
        shouldShow: j => h() !== _f.fullyHidden,
        shouldShowInnerZone: j => h() !== _f.bordersOnly
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _e;
    });
    var _e = { zonedDeviceViews: 'zoned-device-views' };
}), b.register('.....', function (c, d) {
    a(c.exports, 'ReplaceVisualEditingPreview', function () {
        return _i;
    });
    var e = b('.....'), f = b('.....'), g = b('.....'), h = b('.....');
    const _i = (j, k, l) => {
        const m = (0, h.FetchVisualEditingPreview)(), n = (0, g.FetchCurrentlyEditedDevice)();
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
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _g;
    });
    var e = b('.....'), f = b('.....');
    var _g = h => {
        (0, e.default)().worldManager.devices.getDeviceById(h.id) && (0, f.default)(h);
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'FetchOptionSchemaProperty', function () {
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
});