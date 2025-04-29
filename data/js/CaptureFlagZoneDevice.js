function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('ijCBI', function(c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'default', function() {
        return _r;
    });
    var f = b('s/YA9'),
        g = b('ZmwqX0'),
        h = b('cNVx1'),
        i = b('hycyg'),
        j = b('UkCpC'),
        k = b('FWW2T6'),
        l = b('ltxDW'),
        m = b('5ML+8'),
        n = b('H4eGM'),
        o = b('uc4mA17'),
        p = b('u/WlI21');
    class q extends l.default {
        getAlpha() {
            return (0, j.InGamePhase)() ? this.state.active ? g.ZoneConstants.alpha : 0 : (0, i.isSavedVersion)() && k.default.shouldShowInnerZone(this) ? g.ZoneConstants.alpha : 0;
        }
        constructor(r) {
            if (super(r), (0, f.default)(this, 'onStateChange', r => {
                    if ('active' === r) {
                        if (this.rect && this.rect.view) {
                            const s = this.getAlpha();
                            this.rect.updateAlpha(s);
                        }
                        if (this.sprite && this.sprite.view) {
                            const s = this.getAlpha();
                            this.sprite.view.alpha = s;
                        }
                    }
                }), (0, f.default)(this, 'setupVisualEditing', () => {
                    if (!(0, j.InPreGamePhase)() || !(0, i.isSavedVersion)())
                        return;
                    const s = (0, o.FetchOptionSchemaProperty)(this, 'width'),
                        t = (0, o.FetchOptionSchemaProperty)(this, 'height');
                    this.visualEditing.add.box({
                        width: this.options.width,
                        height: this.options.height,
                        angle: this.options.rotation,
                        minWidth: s.min,
                        maxWidth: s.max,
                        minHeight: t.min,
                        maxHeight: t.max,
                        keepRatio: !1,
                        onChange: s => {
                            (0, p.ReplaceVisualEditingPreview)(s.x, s.y, {
                                rotation: s.angle,
                                width: s.width,
                                height: s.height
                            });
                        }
                    });
                }), (0, j.InPreGamePhase)() && (0, i.isSavedVersion)()) {
                const s = this.parts.add.sprite({
                    ...m.BaseAsset,
                    depthChange: (0, n.default)(2)
                });
                s.view.angle = this.options.rotation, s.view.setScale(0.5);
            }
            if ((0, j.InGamePhase)() || (0, i.isPublishedVersion)() ? this.options.visibleInGame : k.default.shouldShow(this)) {
                this.setupVisualEditing();
                const s = (0, h.GetNumberFromHexColor)(this.options.color);
                this.rect = this.parts.add.rect({
                    color: s,
                    alpha: this.getAlpha(),
                    width: Math.abs(this.options.width),
                    height: Math.abs(this.options.height),
                    angle: this.options.rotation,
                    borderColor: s,
                    borderAlpha: (0, j.InGamePhase)() ? 0 : 1,
                    borderWidth: 4,
                    depthChange: (0, n.default)(1),
                    ignoreInput: !0
                }), (0, j.InPreGamePhase)() && (0, i.isSavedVersion)() && (this.sprite = this.parts.add.sprite({
                    ...m.Icon,
                    depthChange: (0, n.default)(2)
                }), this.sprite.view.setScale(0.1));
            }
        }
    }
    var _r = q;
}), b.register('ZmwqX0', function(c, d) {
    a(c.exports, 'ZoneConstants', function() {
        return _e;
    });
    const _e = {
        alpha: 0.5,
        activateDeactivateTime: 100
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
}), b.register('5ML+8', function(c, d) {
    a(c.exports, 'BaseAsset', function() {
        return _f;
    }), a(c.exports, 'Icon', function() {
        return _g;
    });
    var e = b('UaUBz0');
    const _f = {
            imageId: (0, e.default)('devices/capture_flag_zone/base.png'),
            imageUrl: (0, e.default)('devices/capture_flag_zone/base.png')
        },
        _g = {
            imageId: (0, e.default)('devices/capture_flag_zone/icon.png'),
            imageUrl: (0, e.default)('devices/capture_flag_zone/icon.png')
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