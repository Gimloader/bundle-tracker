function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('.....', function(c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'default', function() {
        return _s;
    });
    var f = b('.....'),
        g = b('.....'),
        h = b('.....'),
        i = b('.....'),
        j = b('.....'),
        k = b('.....'),
        l = b('.....'),
        m = b('.....'),
        n = b('.....'),
        o = b('.....'),
        p = b('.....'),
        q = b('.....');
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
                        onChange: v => {
                            (0, h.ReplaceVisualEditingPreview)(v.x, v.y, {
                                width: v.width,
                                height: v.height
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
}), b.register('.....', function(c, d) {
    a(c.exports, 'ReplaceVisualEditingPreview', function() {
        return _i;
    });
    var e = b('.....'),
        f = b('.....'),
        g = b('.....'),
        h = b('.....');
    const _i = (j, k, l) => {
        const m = (0, h.FetchVisualEditingPreview)(),
            n = (0, g.FetchCurrentlyEditedDevice)();
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
}), b.register('.....', function(c, d) {
    a(c.exports, 'default', function() {
        return _g;
    });
    var e = b('.....'),
        f = b('.....');
    var _g = h => {
        (0, e.default)().worldManager.devices.getDeviceById(h.id) && (0, f.default)(h);
    };
}), b.register('.....', function(c, d) {
    a(c.exports, 'FetchOptionSchemaProperty', function() {
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
}), b.register('.....', function(c, d) {
    a(c.exports, 'ZonedDeviceDisplayOptions', function() {
        return _f;
    }), a(c.exports, 'default', function() {
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
}), b.register('.....', function(c, d) {
    a(c.exports, 'default', function() {
        return _e;
    });
    var _e = {
        zonedDeviceViews: 'zoned-device-views'
    };
}), b.register('.....', function(c, d) {
    a(c.exports, 'ZoneIcon', function() {
        return _f;
    });
    const e = (0, b('.....').default)('devices/tag_zone/zone_icon.png'),
        _f = {
            imageId: e,
            imageUrl: e
        };
}), b.register('.....', function(c, d) {
    let e;
    var f;
    a(c.exports, 'DetectionArea', function() {
        return e;
    }), (f = e || (e = {})).everywhere = 'everywhere', f.zone = 'zone';
});