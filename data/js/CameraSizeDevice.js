function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('SJE8Y', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _n(b.exports, 'default', function() {
        return _n;
    });
    var e = a('1bFPu'),
        f = a('I35Ay'),
        g = a('6w1oh'),
        h = a('/pbxo'),
        i = a('9tz3H'),
        j = a('kg3wN6'),
        k = a('IFO6W13'),
        l = a('R2Ucl10');
    class m extends f.default {
        constructor(_n) {
            if (super(_n), (0, e.default)(this, 'notifyManagerAboutUpdate', () => {
                    this.scene.worldManager.devices.cameras.allCamerasNeedsUpdate = !0;
                }), (0, e.default)(this, 'onDestroy', () => {
                    this.notifyManagerAboutUpdate();
                }), (0, e.default)(this, 'setupVisualEditing', () => {
                    if (!(0, h.InPreGamePhase)() || !(0, i.isSavedVersion)())
                        return;
                    const o = (0, l.FetchOptionSchemaProperty)(this, 'width'),
                        p = (0, l.FetchOptionSchemaProperty)(this, 'height');
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
                            (0, k.ReplaceVisualEditingPreview)(o.x, o.y, {
                                width: o.width,
                                height: o.height
                            });
                        }
                    });
                }), this.setupVisualEditing(), this.notifyManagerAboutUpdate(), (0, i.isPublishedVersion)() || (0, h.InGamePhase)())
                return;
            this.layers.forceDepthManually(0);
            this.parts.add.sprite(g.BaseAsset).view.setScale(0.5), j.default.shouldShow(this) && this.parts.add.rect({
                color: 11400448,
                alpha: j.default.shouldShowInnerZone(this) ? 0.2 : 0,
                width: Math.abs(this.options.width),
                height: Math.abs(this.options.height),
                borderColor: 11400448,
                borderAlpha: 1,
                borderWidth: 4,
                ignoreInput: !0
            });
        }
    }
    var _n = m;
}), a.register('6w1oh', function(b, c) {
    _h(b.exports, 'BaseAsset', function() {
        return _e;
    });
    var d = a('2Xvuf');
    const _e = {
        imageId: (0, d.default)('devices/camera_size/base.png'),
        imageUrl: (0, d.default)('devices/camera_size/base.png')
    };
}), a.register('kg3wN6', function(b, c) {
    _h(b.exports, 'ZonedDeviceDisplayOptions', function() {
        return _e;
    }), _h(b.exports, 'default', function() {
        return _h;
    });
    var d = a('+MyMe6');
    let _e;
    var f;
    (f = _e || (_e = {})).visible = 'visible', f.bordersOnly = 'bordersOnly', f.fullyHidden = 'fullyHidden';
    const g = () => {
        const _h = localStorage.getItem(d.default.zonedDeviceViews);
        return _h || _e.bordersOnly;
    };
    var _h = {
        shouldShow: e => g() !== _e.fullyHidden,
        shouldShowInnerZone: e => g() !== _e.bordersOnly
    };
}), a.register('+MyMe6', function(b, c) {
    e(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        zonedDeviceViews: 'zoned-device-views'
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