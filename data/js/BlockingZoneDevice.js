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
    }), a(c.exports, 'BlockingZoneDevice', function() {
        return _r;
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
    class _r extends k.default {
        getAlpha() {
            return (0, i.InGamePhase)() ? this.state.active ? 1 : 0 : (0, h.isPublishedVersion)() || (0, h.isSavedVersion)() && j.default.shouldShowInnerZone(this) ? 1 : 0;
        }
        constructor(s) {
            if (super(s), (0, f.default)(this, 'updatePartAlpha', t => {
                    const u = this.getAlpha();
                    (0, i.InGamePhase)() && t.updateAlpha(u > 0 ? 1 : 0);
                }), (0, f.default)(this, 'updateAlpha', () => {
                    const t = this.getAlpha();
                    (0, i.InGamePhase)() && this.parts.forEach(u => {
                        u.updateAlpha(t > 0 ? 1 : 0);
                    }), this.rect && this.rect.updateAlpha(t);
                }), (0, f.default)(this, 'onStateChange', t => {
                    'active' === t && this.updateAlpha();
                }), (0, f.default)(this, 'setupVisualEditing', () => {
                    if (!(0, i.InPreGamePhase)() || !(0, h.isSavedVersion)())
                        return;
                    const t = (0, n.FetchOptionSchemaProperty)(this, 'width'),
                        u = (0, n.FetchOptionSchemaProperty)(this, 'height');
                    this.visualEditing.add.box({
                        width: this.options.width,
                        height: this.options.height,
                        angle: 0,
                        rotable: !1,
                        minWidth: t.min,
                        maxWidth: t.max,
                        minHeight: u.min,
                        maxHeight: u.max,
                        keepRatio: !1,
                        onChange: v => {
                            (0, o.ReplaceVisualEditingPreview)(v.x, v.y, {
                                width: v.width,
                                height: v.height
                            });
                        }
                    });
                }), (0, f.default)(this, 'isActive', () => this.state.active), (0, f.default)(this, 'isBlockingBlockBuilding', () => this.options.blockBuilding === l.BlockingZoneBlockOverride.yes), (0, i.InPreGamePhase)() && (0, h.isSavedVersion)()) {
                this.parts.add.sprite({
                    ...q.IconAsset,
                    depthChange: (0, m.default)(2)
                }).view.setScale(0.17);
            }
            if ((0, i.InGamePhase)() || (0, h.isPublishedVersion)() ? this.options.visibleInGame : j.default.shouldShow(this)) {
                this.setupVisualEditing();
                const t = (0, g.GetNumberFromHexColor)(this.options.color);
                this.rect = this.parts.add.rect({
                    color: t,
                    layerId: p.default.DevicesUnderCharacters,
                    alpha: this.getAlpha(),
                    width: Math.abs(this.options.width),
                    height: Math.abs(this.options.height),
                    borderColor: t,
                    borderAlpha: (0, i.InGamePhase)() || (0, h.isPublishedVersion)() ? 0 : 1,
                    borderWidth: 4,
                    depthChange: (0, m.default)(1),
                    ignoreInput: !0
                });
            }
        }
    }
    var _s = _r;
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
    a(c.exports, 'BlockingZoneBlockOverride', function() {
        return e;
    }), (f = e || (e = {}))[f.doNotOverride = 1] = 'doNotOverride', f[f.yes = 2] = 'yes', f[f.no = 3] = 'no';
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
}), b.register('.....', function(c, d) {
    a(c.exports, 'IconAsset', function() {
        return _f;
    });
    var e = b('.....');
    const _f = {
        imageId: (0, e.default)('devices/blocking_zone/icon.png'),
        imageUrl: (0, e.default)('devices/blocking_zone/icon.png')
    };
});