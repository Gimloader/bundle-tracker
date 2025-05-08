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
    }), a(c.exports, 'ZombieSpawnZoneDevice', function () {
        return _q;
    }), a(c.exports, 'default', function () {
        return _r;
    });
    var f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....'), k = b('.....'), l = b('.....'), m = b('.....'), n = b('.....'), o = b('.....'), p = b('.....');
    class _q extends k.default {
        getAlpha() {
            return (0, i.InGamePhase)() ? 0 : (0, h.isPublishedVersion)() || (0, h.isSavedVersion)() && j.default.shouldShowInnerZone(this) ? 1 : 0;
        }
        constructor(r) {
            if (super(r), (0, f.default)(this, 'updatePartAlpha', s => {
                    const t = this.getAlpha();
                    (0, i.InGamePhase)() && s.updateAlpha(t > 0 ? 1 : 0);
                }), (0, f.default)(this, 'updateAlpha', () => {
                    const s = this.getAlpha();
                    (0, i.InGamePhase)() && this.parts.forEach(t => {
                        t.updateAlpha(s > 0 ? 1 : 0);
                    }), this.rect && this.rect.updateAlpha(s);
                }), (0, f.default)(this, 'setupVisualEditing', () => {
                    if (!(0, i.InPreGamePhase)() || !(0, h.isSavedVersion)())
                        return;
                    const s = (0, m.FetchOptionSchemaProperty)(this, 'width'), t = (0, m.FetchOptionSchemaProperty)(this, 'height');
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
                        onChange: u => {
                            (0, n.ReplaceVisualEditingPreview)(u.x, u.y, {
                                width: u.width,
                                height: u.height,
                                rotation: u.angle
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
    a(c.exports, 'IconAsset', function () {
        return _f;
    });
    var e = b('.....');
    const _f = {
        imageId: (0, e.default)('devices/zombie_spawn_zone/icon.png'),
        imageUrl: (0, e.default)('devices/zombie_spawn_zone/icon.png')
    };
});