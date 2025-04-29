function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('CvN5J', function(c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'default', function() {
        return _s;
    });
    var f = b('s/YA9'),
        g = b('ZmwqX0'),
        h = b('cNVx1'),
        i = b('hycyg'),
        j = b('UkCpC'),
        k = b('FWW2T6'),
        l = b('ltxDW'),
        m = b('7vFb6'),
        n = b('9QzoS'),
        o = b('H4eGM'),
        p = b('uc4mA17'),
        q = b('u/WlI21');
    class r extends l.default {
        getAlpha() {
            return (0, j.InGamePhase)() ? this.state.active ? g.ZoneConstants.alpha : 0 : (0, i.isSavedVersion)() && k.default.shouldShowInnerZone(this) ? g.ZoneConstants.alpha : 0;
        }
        constructor(s) {
            if (super(s), (0, f.default)(this, 'onStateChange', s => {
                    if ('active' === s && this.zone && this.zone.view) {
                        const t = this.getAlpha();
                        this.zone.updateAlpha(t);
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
                            onChange: t => {
                                (0, q.ReplaceVisualEditingPreview)(t.x, t.y, {
                                    radius: t.radius
                                });
                            }
                        });
                    }
                    const t = (0, p.FetchOptionSchemaProperty)(this, 'width'),
                        u = (0, p.FetchOptionSchemaProperty)(this, 'height');
                    this.visualEditing.add.box({
                        width: this.options.width,
                        height: this.options.height,
                        angle: this.options.rotation,
                        minWidth: t.min,
                        maxWidth: t.max,
                        minHeight: u.min,
                        maxHeight: u.max,
                        keepRatio: !1,
                        onChange: t => {
                            (0, q.ReplaceVisualEditingPreview)(t.x, t.y, {
                                rotation: t.angle,
                                width: t.width,
                                height: t.height
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
                const t = (0, h.GetNumberFromHexColor)(this.options.color);
                if (this.options.shape === m.ZoneShape.circle)
                    return void(this.zone = this.parts.add.circle({
                        color: t,
                        alpha: this.getAlpha(),
                        r: this.options.radius,
                        depthChange: (0, o.default)(1),
                        ignoreInput: !0,
                        borderColor: t,
                        borderAlpha: (0, j.InGamePhase)() ? 0 : 1,
                        borderWidth: 4
                    }));
                this.zone = this.parts.add.rect({
                    color: t,
                    alpha: this.getAlpha(),
                    width: Math.abs(this.options.width),
                    height: Math.abs(this.options.height),
                    angle: this.options.rotation,
                    borderColor: t,
                    borderAlpha: (0, j.InGamePhase)() ? 0 : 1,
                    borderWidth: 4,
                    depthChange: (0, o.default)(1),
                    ignoreInput: !0
                });
            }
        }
    }
    var _s = r;
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
}), b.register('7vFb6', function(c, d) {
    let e;
    var f;
    a(c.exports, 'ZoneShape', function() {
        return e;
    }), (f = e || (e = {})).rectangle = 'rectangle', f.circle = 'circle';
}), b.register('9QzoS', function(c, d) {
    a(c.exports, 'BaseAsset', function() {
        return _f;
    });
    var e = b('UaUBz0');
    const _f = {
        imageId: (0, e.default)('devices/zone/base.png'),
        imageUrl: (0, e.default)('devices/zone/base.png')
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