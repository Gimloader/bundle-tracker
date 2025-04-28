function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('xvgoD', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _r(b.exports, 'BlockingZoneDevice', function() {
        return _q;
    }), _r(b.exports, 'default', function() {
        return _r;
    });
    var e = a('1bFPu'),
        f = a('h2EGG'),
        g = a('9tz3H'),
        h = a('/pbxo'),
        i = a('kg3wN6'),
        j = a('I35Ay'),
        k = a('pA31J'),
        l = a('5CmLs'),
        m = a('R2Ucl10'),
        n = a('IFO6W13'),
        o = a('JqBF0'),
        p = a('mgX4S');
    class _q extends j.default {
        getAlpha() {
            return (0, h.InGamePhase)() ? this.state.active ? 1 : 0 : (0, g.isPublishedVersion)() || (0, g.isSavedVersion)() && i.default.shouldShowInnerZone(this) ? 1 : 0;
        }
        constructor(_r) {
            if (super(_r), (0, e.default)(this, 'updatePartAlpha', _r => {
                    const s = this.getAlpha();
                    (0, h.InGamePhase)() && _r.updateAlpha(s > 0 ? 1 : 0);
                }), (0, e.default)(this, 'updateAlpha', () => {
                    const s = this.getAlpha();
                    (0, h.InGamePhase)() && this.parts.forEach(a => {
                        a.updateAlpha(s > 0 ? 1 : 0);
                    }), this.rect && this.rect.updateAlpha(s);
                }), (0, e.default)(this, 'onStateChange', _r => {
                    'active' === _r && this.updateAlpha();
                }), (0, e.default)(this, 'setupVisualEditing', () => {
                    if (!(0, h.InPreGamePhase)() || !(0, g.isSavedVersion)())
                        return;
                    const s = (0, m.FetchOptionSchemaProperty)(this, 'width'),
                        t = (0, m.FetchOptionSchemaProperty)(this, 'height');
                    this.visualEditing.add.box({
                        width: this.options.width,
                        height: this.options.height,
                        angle: 0,
                        rotable: !1,
                        minWidth: s.min,
                        maxWidth: s.max,
                        minHeight: t.min,
                        maxHeight: t.max,
                        keepRatio: !1,
                        onChange: s => {
                            (0, n.ReplaceVisualEditingPreview)(s.x, s.y, {
                                width: s.width,
                                height: s.height
                            });
                        }
                    });
                }), (0, e.default)(this, 'isActive', () => this.state.active), (0, e.default)(this, 'isBlockingBlockBuilding', () => this.options.blockBuilding === k.BlockingZoneBlockOverride.yes), (0, h.InPreGamePhase)() && (0, g.isSavedVersion)()) {
                this.parts.add.sprite({
                    ...p.IconAsset,
                    depthChange: (0, l.default)(2)
                }).view.setScale(0.17);
            }
            if ((0, h.InGamePhase)() || (0, g.isPublishedVersion)() ? this.options.visibleInGame : i.default.shouldShow(this)) {
                this.setupVisualEditing();
                const s = (0, f.GetNumberFromHexColor)(this.options.color);
                this.rect = this.parts.add.rect({
                    color: s,
                    layerId: o.default.DevicesUnderCharacters,
                    alpha: this.getAlpha(),
                    width: Math.abs(this.options.width),
                    height: Math.abs(this.options.height),
                    borderColor: s,
                    borderAlpha: (0, h.InGamePhase)() || (0, g.isPublishedVersion)() ? 0 : 1,
                    borderWidth: 4,
                    depthChange: (0, l.default)(1),
                    ignoreInput: !0
                });
            }
        }
    }
    var _r = _q;
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
}), a.register('pA31J', function(b, c) {
    let d;
    var e;
    e(b.exports, 'BlockingZoneBlockOverride', function() {
        return d;
    }), (e = d || (d = {}))[e.doNotOverride = 1] = 'doNotOverride', e[e.yes = 2] = 'yes', e[e.no = 3] = 'no';
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
}), a.register('mgX4S', function(b, c) {
    e(b.exports, 'IconAsset', function() {
        return _e;
    });
    var d = a('2Xvuf');
    const _e = {
        imageId: (0, d.default)('devices/blocking_zone/icon.png'),
        imageUrl: (0, d.default)('devices/blocking_zone/icon.png')
    };
});