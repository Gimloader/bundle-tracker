function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('P4zAN', function(c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'ZombieSpawnZoneDevice', function() {
        return _q;
    }), a(c.exports, 'default', function() {
        return _r;
    });
    var f = b('s/YA9'),
        g = b('cNVx1'),
        h = b('hycyg'),
        i = b('UkCpC'),
        j = b('FWW2T6'),
        k = b('ltxDW'),
        l = b('H4eGM'),
        m = b('uc4mA17'),
        n = b('u/WlI21'),
        o = b('GIe9o'),
        p = b('lk5RT');
    class _q extends k.default {
        getAlpha() {
            return (0, i.InGamePhase)() ? 0 : (0, h.isPublishedVersion)() || (0, h.isSavedVersion)() && j.default.shouldShowInnerZone(this) ? 1 : 0;
        }
        constructor(r) {
            if (super(r), (0, f.default)(this, 'updatePartAlpha', r => {
                    const s = this.getAlpha();
                    (0, i.InGamePhase)() && r.updateAlpha(s > 0 ? 1 : 0);
                }), (0, f.default)(this, 'updateAlpha', () => {
                    const s = this.getAlpha();
                    (0, i.InGamePhase)() && this.parts.forEach(b => {
                        b.updateAlpha(s > 0 ? 1 : 0);
                    }), this.rect && this.rect.updateAlpha(s);
                }), (0, f.default)(this, 'setupVisualEditing', () => {
                    if (!(0, i.InPreGamePhase)() || !(0, h.isSavedVersion)())
                        return;
                    const s = (0, m.FetchOptionSchemaProperty)(this, 'width'),
                        t = (0, m.FetchOptionSchemaProperty)(this, 'height');
                    (0, m.FetchOptionSchemaProperty)(this, 'rotation');
                    this.visualEditing.add.box({
                        width: this.options.width,
                        height: this.options.height,
                        angle: this.options.rotation,
                        rotable: !0,
                        minWidth: s.min,
                        maxWidth: s.max,
                        minHeight: t.min,
                        maxHeight: t.max,
                        keepRatio: !1,
                        onChange: s => {
                            (0, n.ReplaceVisualEditingPreview)(s.x, s.y, {
                                width: s.width,
                                height: s.height,
                                rotation: s.angle
                            });
                        }
                    });
                }), (0, i.InPreGamePhase)() && (0, h.isSavedVersion)()) {
                this.parts.add.sprite({
                    ...p.IconAsset,
                    depthChange: (0, l.default)(2)
                }).view.setScale(0.17);
            }
            if ((0, i.InGamePhase)() || (0, h.isPublishedVersion)() ? 0 : j.default.shouldShow(this)) {
                this.setupVisualEditing();
                const s = (0, g.GetNumberFromHexColor)('#00FF00');
                this.rect = this.parts.add.rect({
                    color: s,
                    layerId: o.default.DevicesUnderCharacters,
                    alpha: this.getAlpha(),
                    width: Math.abs(this.options.width),
                    height: Math.abs(this.options.height),
                    borderColor: s,
                    borderAlpha: (0, i.InGamePhase)() || (0, h.isPublishedVersion)() ? 0 : 1,
                    borderWidth: 4,
                    depthChange: (0, l.default)(1),
                    ignoreInput: !0,
                    angle: this.options.rotation
                });
            }
        }
    }
    var _r = _q;
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
}), b.register('lk5RT', function(c, d) {
    a(c.exports, 'IconAsset', function() {
        return _f;
    });
    var e = b('UaUBz0');
    const _f = {
        imageId: (0, e.default)('devices/zombie_spawn_zone/icon.png'),
        imageUrl: (0, e.default)('devices/zombie_spawn_zone/icon.png')
    };
});