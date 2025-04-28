function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('lXyLB', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _q(b.exports, 'ZombieSpawnZoneDevice', function() {
        return _p;
    }), _q(b.exports, 'default', function() {
        return _q;
    });
    var e = a('1bFPu'),
        f = a('h2EGG'),
        g = a('9tz3H'),
        h = a('/pbxo'),
        i = a('kg3wN6'),
        j = a('I35Ay'),
        k = a('5CmLs'),
        l = a('R2Ucl10'),
        m = a('IFO6W13'),
        n = a('JqBF0'),
        o = a('PyVwZ');
    class _p extends j.default {
        getAlpha() {
            return (0, h.InGamePhase)() ? 0 : (0, g.isPublishedVersion)() || (0, g.isSavedVersion)() && i.default.shouldShowInnerZone(this) ? 1 : 0;
        }
        constructor(_q) {
            if (super(_q), (0, e.default)(this, 'updatePartAlpha', _q => {
                    const r = this.getAlpha();
                    (0, h.InGamePhase)() && _q.updateAlpha(r > 0 ? 1 : 0);
                }), (0, e.default)(this, 'updateAlpha', () => {
                    const r = this.getAlpha();
                    (0, h.InGamePhase)() && this.parts.forEach(a => {
                        a.updateAlpha(r > 0 ? 1 : 0);
                    }), this.rect && this.rect.updateAlpha(r);
                }), (0, e.default)(this, 'setupVisualEditing', () => {
                    if (!(0, h.InPreGamePhase)() || !(0, g.isSavedVersion)())
                        return;
                    const r = (0, l.FetchOptionSchemaProperty)(this, 'width'),
                        s = (0, l.FetchOptionSchemaProperty)(this, 'height');
                    (0, l.FetchOptionSchemaProperty)(this, 'rotation');
                    this.visualEditing.add.box({
                        width: this.options.width,
                        height: this.options.height,
                        angle: this.options.rotation,
                        rotable: !0,
                        minWidth: r.min,
                        maxWidth: r.max,
                        minHeight: s.min,
                        maxHeight: s.max,
                        keepRatio: !1,
                        onChange: r => {
                            (0, m.ReplaceVisualEditingPreview)(r.x, r.y, {
                                width: r.width,
                                height: r.height,
                                rotation: r.angle
                            });
                        }
                    });
                }), (0, h.InPreGamePhase)() && (0, g.isSavedVersion)()) {
                this.parts.add.sprite({
                    ...o.IconAsset,
                    depthChange: (0, k.default)(2)
                }).view.setScale(0.17);
            }
            if ((0, h.InGamePhase)() || (0, g.isPublishedVersion)() ? 0 : i.default.shouldShow(this)) {
                this.setupVisualEditing();
                const r = (0, f.GetNumberFromHexColor)('#00FF00');
                this.rect = this.parts.add.rect({
                    color: r,
                    layerId: n.default.DevicesUnderCharacters,
                    alpha: this.getAlpha(),
                    width: Math.abs(this.options.width),
                    height: Math.abs(this.options.height),
                    borderColor: r,
                    borderAlpha: (0, h.InGamePhase)() || (0, g.isPublishedVersion)() ? 0 : 1,
                    borderWidth: 4,
                    depthChange: (0, k.default)(1),
                    ignoreInput: !0,
                    angle: this.options.rotation
                });
            }
        }
    }
    var _q = _p;
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
}), a.register('PyVwZ', function(b, c) {
    e(b.exports, 'IconAsset', function() {
        return _e;
    });
    var d = a('2Xvuf');
    const _e = {
        imageId: (0, d.default)('devices/zombie_spawn_zone/icon.png'),
        imageUrl: (0, d.default)('devices/zombie_spawn_zone/icon.png')
    };
});