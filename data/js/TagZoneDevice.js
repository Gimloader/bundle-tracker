function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('dvjkY', function(c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'default', function() {
        return _s;
    });
    var f = b('s/YA9'),
        g = b('hycyg'),
        h = b('u/WlI21'),
        i = b('uc4mA17'),
        j = b('UkCpC'),
        k = b('FWW2T6'),
        l = b('ltxDW'),
        m = b('C/wpN'),
        n = b('cx0P/'),
        o = b('73Aki'),
        p = b('AHhkR'),
        q = b('UaUBz0');
    class r extends l.default {
        constructor(s) {
            if (super(s), (0, f.default)(this, 'setupVisualEditing', () => {
                    if (!(0, j.InPreGamePhase)() || !(0, g.isSavedVersion)())
                        return;
                    const t = (0, i.FetchOptionSchemaProperty)(this, 'width'),
                        u = (0, i.FetchOptionSchemaProperty)(this, 'height');
                    this.visualEditing.add.box({
                        width: this.options.width,
                        height: this.options.height,
                        minWidth: t.min,
                        maxWidth: t.max,
                        minHeight: u.min,
                        maxHeight: u.max,
                        rotable: !1,
                        keepRatio: !1,
                        onChange: t => {
                            (0, h.ReplaceVisualEditingPreview)(t.x, t.y, {
                                width: t.width,
                                height: t.height
                            });
                        }
                    });
                }), !(0, j.InGamePhase)() && !(0, g.isPublishedVersion)())
                if (this.options.detectionArea !== n.DetectionArea.everywhere) {
                    if (this.setupVisualEditing(), k.default.shouldShow(this)) {
                        this.layers.forceDepthManually(0);
                        this.parts.add.sprite(m.ZoneIcon).view.setScale(0.15), this.parts.add.rect({
                            color: 4435243,
                            alpha: k.default.shouldShowInnerZone(this) ? 0.2 : 0,
                            borderAlpha: 1,
                            width: Math.abs(this.options.width),
                            height: Math.abs(this.options.height),
                            borderColor: 4435243,
                            borderWidth: 4,
                            ignoreInput: !0
                        });
                    }
                } else {
                    const t = p.default.Manager;
                    new(0, o.default)({
                        device: this,
                        baseColor: t.baseColor,
                        boxColor: t.boxColor,
                        content: {
                            icon: {
                                image: (0, q.default)('devices/tag_zone/icon.png'),
                                scale: 0.8
                            }
                        }
                    });
                }
        }
    }
    var _s = r;
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
}), b.register('C/wpN', function(c, d) {
    a(c.exports, 'ZoneIcon', function() {
        return _f;
    });
    const e = (0, b('UaUBz0').default)('devices/tag_zone/zone_icon.png'),
        _f = {
            imageId: e,
            imageUrl: e
        };
}), b.register('cx0P/', function(c, d) {
    let e;
    var f;
    a(c.exports, 'DetectionArea', function() {
        return e;
    }), (f = e || (e = {})).everywhere = 'everywhere', f.zone = 'zone';
});