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
        getAlpha() {
            return (0, j.InGamePhase)() ? this.state.active ? g.ZoneConstants.alpha : 0 : (0, i.isSavedVersion)() && k.default.shouldShowInnerZone(this) ? g.ZoneConstants.alpha : 0;
        }
        constructor(s) {
            if (super(s), (0, f.default)(this, 'onStateChange', t => {
                    if ('active' === t && this.zone && this.zone.view) {
                        const u = this.getAlpha();
                        this.zone.updateAlpha(u);
                    }
                }), (0, f.default)(this, 'setupVisualEditing', () => {
                    if (!(0, j.InPreGamePhase)() || !(0, i.isSavedVersion)())
                        return;
                    if (this.options.shape === m.ZoneShape.circle) {
                        const t = (0, p.FetchOptionSchemaProperty)(this, 'radius');
                        return void this.visualEditing.add.circle({
                            radius: this.options.radius,
                            rotable: !1,
                            minRadius: t.min,
                            maxRadius: t.max,
                            onChange: u => {
                                (0, q.ReplaceVisualEditingPreview)(u.x, u.y, {
                                    radius: u.radius
                                });
                            }
                        });
                    }
                    const u = (0, p.FetchOptionSchemaProperty)(this, 'width'),
                        v = (0, p.FetchOptionSchemaProperty)(this, 'height');
                    this.visualEditing.add.box({
                        width: this.options.width,
                        height: this.options.height,
                        angle: this.options.rotation,
                        minWidth: u.min,
                        maxWidth: u.max,
                        minHeight: v.min,
                        maxHeight: v.max,
                        keepRatio: !1,
                        onChange: w => {
                            (0, q.ReplaceVisualEditingPreview)(w.x, w.y, {
                                rotation: w.angle,
                                width: w.width,
                                height: w.height
                            });
                        }
                    });
                }), (0, j.InPreGamePhase)() && (0, i.isSavedVersion)()) {
                const t = this.parts.add.sprite({
                    ...n.BaseAsset,
                    depthChange: (0, o.default)(2)
                });
                t.view.angle = this.options.rotation, t.view.setScale(0.5);
            }
            if ((0, j.InGamePhase)() || (0, i.isPublishedVersion)() ? this.options.visibleInGame : k.default.shouldShow(this)) {
                this.setupVisualEditing();
                const u = (0, h.GetNumberFromHexColor)(this.options.color);
                if (this.options.shape === m.ZoneShape.circle)
                    return void(this.zone = this.parts.add.circle({
                        color: u,
                        alpha: this.getAlpha(),
                        r: this.options.radius,
                        depthChange: (0, o.default)(1),
                        ignoreInput: !0,
                        borderColor: u,
                        borderAlpha: (0, j.InGamePhase)() ? 0 : 1,
                        borderWidth: 4
                    }));
                this.zone = this.parts.add.rect({
                    color: u,
                    alpha: this.getAlpha(),
                    width: Math.abs(this.options.width),
                    height: Math.abs(this.options.height),
                    angle: this.options.rotation,
                    borderColor: u,
                    borderAlpha: (0, j.InGamePhase)() ? 0 : 1,
                    borderWidth: 4,
                    depthChange: (0, o.default)(1),
                    ignoreInput: !0
                });
            }
        }
    }
    var _s = r;
}), b.register('.....', function(c, d) {
    a(c.exports, 'ZoneConstants', function() {
        return _e;
    });
    const _e = {
        alpha: 0.5,
        activateDeactivateTime: 100
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
    let e;
    var f;
    a(c.exports, 'ZoneShape', function() {
        return e;
    }), (f = e || (e = {})).rectangle = 'rectangle', f.circle = 'circle';
}), b.register('.....', function(c, d) {
    a(c.exports, 'BaseAsset', function() {
        return _f;
    });
    var e = b('.....');
    const _f = {
        imageId: (0, e.default)('devices/zone/base.png'),
        imageUrl: (0, e.default)('devices/zone/base.png')
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
});