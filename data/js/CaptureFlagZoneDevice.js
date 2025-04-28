function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('ZDwK5', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _q(b.exports, 'default', function() {
        return _q;
    });
    var e = a('1bFPu'),
        f = a('25/u70'),
        g = a('h2EGG'),
        h = a('9tz3H'),
        i = a('/pbxo'),
        j = a('kg3wN6'),
        k = a('I35Ay'),
        l = a('yvbyC'),
        m = a('5CmLs'),
        n = a('R2Ucl10'),
        o = a('IFO6W13');
    class p extends k.default {
        getAlpha() {
            return (0, i.InGamePhase)() ? this.state.active ? f.ZoneConstants.alpha : 0 : (0, h.isSavedVersion)() && j.default.shouldShowInnerZone(this) ? f.ZoneConstants.alpha : 0;
        }
        constructor(_q) {
            if (super(_q), (0, e.default)(this, 'onStateChange', _q => {
                    if ('active' === _q) {
                        if (this.rect && this.rect.view) {
                            const r = this.getAlpha();
                            this.rect.updateAlpha(r);
                        }
                        if (this.sprite && this.sprite.view) {
                            const r = this.getAlpha();
                            this.sprite.view.alpha = r;
                        }
                    }
                }), (0, e.default)(this, 'setupVisualEditing', () => {
                    if (!(0, i.InPreGamePhase)() || !(0, h.isSavedVersion)())
                        return;
                    const r = (0, n.FetchOptionSchemaProperty)(this, 'width'),
                        s = (0, n.FetchOptionSchemaProperty)(this, 'height');
                    this.visualEditing.add.box({
                        width: this.options.width,
                        height: this.options.height,
                        angle: this.options.rotation,
                        minWidth: r.min,
                        maxWidth: r.max,
                        minHeight: s.min,
                        maxHeight: s.max,
                        keepRatio: !1,
                        onChange: r => {
                            (0, o.ReplaceVisualEditingPreview)(r.x, r.y, {
                                rotation: r.angle,
                                width: r.width,
                                height: r.height
                            });
                        }
                    });
                }), (0, i.InPreGamePhase)() && (0, h.isSavedVersion)()) {
                const r = this.parts.add.sprite({
                    ...l.BaseAsset,
                    depthChange: (0, m.default)(2)
                });
                r.view.angle = this.options.rotation, r.view.setScale(0.5);
            }
            if ((0, i.InGamePhase)() || (0, h.isPublishedVersion)() ? this.options.visibleInGame : j.default.shouldShow(this)) {
                this.setupVisualEditing();
                const r = (0, g.GetNumberFromHexColor)(this.options.color);
                this.rect = this.parts.add.rect({
                    color: r,
                    alpha: this.getAlpha(),
                    width: Math.abs(this.options.width),
                    height: Math.abs(this.options.height),
                    angle: this.options.rotation,
                    borderColor: r,
                    borderAlpha: (0, i.InGamePhase)() ? 0 : 1,
                    borderWidth: 4,
                    depthChange: (0, m.default)(1),
                    ignoreInput: !0
                }), (0, i.InPreGamePhase)() && (0, h.isSavedVersion)() && (this.sprite = this.parts.add.sprite({
                    ...l.Icon,
                    depthChange: (0, m.default)(2)
                }), this.sprite.view.setScale(0.1));
            }
        }
    }
    var _q = p;
}), a.register('25/u70', function(b, c) {
    _h(b.exports, 'ZoneConstants', function() {
        return _d;
    });
    const _d = {
        alpha: 0.5,
        activateDeactivateTime: 100
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
}), a.register('yvbyC', function(b, c) {
    e(b.exports, 'BaseAsset', function() {
        return _e;
    }), e(b.exports, 'Icon', function() {
        return _f;
    });
    var d = a('2Xvuf');
    const _e = {
            imageId: (0, d.default)('devices/capture_flag_zone/base.png'),
            imageUrl: (0, d.default)('devices/capture_flag_zone/base.png')
        },
        _f = {
            imageId: (0, d.default)('devices/capture_flag_zone/icon.png'),
            imageUrl: (0, d.default)('devices/capture_flag_zone/icon.png')
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