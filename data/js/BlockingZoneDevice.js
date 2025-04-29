function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('Wkiho', function(c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'BlockingZoneDevice', function() {
        return _r;
    }), a(c.exports, 'default', function() {
        return _s;
    });
    var f = b('s/YA9'),
        g = b('cNVx1'),
        h = b('hycyg'),
        i = b('UkCpC'),
        j = b('FWW2T6'),
        k = b('ltxDW'),
        l = b('OCt7m'),
        m = b('H4eGM'),
        n = b('uc4mA17'),
        o = b('u/WlI21'),
        p = b('GIe9o'),
        q = b('bkbw6');
    class _r extends k.default {
        getAlpha() {
            return (0, i.InGamePhase)() ? this.state.active ? 1 : 0 : (0, h.isPublishedVersion)() || (0, h.isSavedVersion)() && j.default.shouldShowInnerZone(this) ? 1 : 0;
        }
        constructor(s) {
            if (super(s), (0, f.default)(this, 'updatePartAlpha', s => {
                    const t = this.getAlpha();
                    (0, i.InGamePhase)() && s.updateAlpha(t > 0 ? 1 : 0);
                }), (0, f.default)(this, 'updateAlpha', () => {
                    const t = this.getAlpha();
                    (0, i.InGamePhase)() && this.parts.forEach(b => {
                        b.updateAlpha(t > 0 ? 1 : 0);
                    }), this.rect && this.rect.updateAlpha(t);
                }), (0, f.default)(this, 'onStateChange', s => {
                    'active' === s && this.updateAlpha();
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
                        onChange: t => {
                            (0, o.ReplaceVisualEditingPreview)(t.x, t.y, {
                                width: t.width,
                                height: t.height
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
}), b.register('OCt7m', function(c, d) {
    let e;
    var f;
    a(c.exports, 'BlockingZoneBlockOverride', function() {
        return e;
    }), (f = e || (e = {}))[f.doNotOverride = 1] = 'doNotOverride', f[f.yes = 2] = 'yes', f[f.no = 3] = 'no';
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
}), b.register('bkbw6', function(c, d) {
    a(c.exports, 'IconAsset', function() {
        return _f;
    });
    var e = b('UaUBz0');
    const _f = {
        imageId: (0, e.default)('devices/blocking_zone/icon.png'),
        imageUrl: (0, e.default)('devices/blocking_zone/icon.png')
    };
});