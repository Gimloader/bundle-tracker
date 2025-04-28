function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('iUJVD', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _r(b.exports, 'default', function() {
        return _r;
    });
    var e = a('1bFPu'),
        f = a('9tz3H'),
        g = a('IFO6W13'),
        h = a('R2Ucl10'),
        i = a('/pbxo'),
        j = a('kg3wN6'),
        k = a('I35Ay'),
        l = a('KLR5P'),
        m = a('jQvIR'),
        n = a('+uQv7'),
        o = a('dTXti'),
        p = a('2Xvuf');
    class q extends k.default {
        constructor(_r) {
            if (super(_r), (0, e.default)(this, 'setupVisualEditing', () => {
                    if (!(0, i.InPreGamePhase)() || !(0, f.isSavedVersion)())
                        return;
                    const s = (0, h.FetchOptionSchemaProperty)(this, 'width'),
                        t = (0, h.FetchOptionSchemaProperty)(this, 'height');
                    this.visualEditing.add.box({
                        width: this.options.width,
                        height: this.options.height,
                        minWidth: s.min,
                        maxWidth: s.max,
                        minHeight: t.min,
                        maxHeight: t.max,
                        rotable: !1,
                        keepRatio: !1,
                        onChange: s => {
                            (0, g.ReplaceVisualEditingPreview)(s.x, s.y, {
                                width: s.width,
                                height: s.height
                            });
                        }
                    });
                }), !(0, i.InGamePhase)() && !(0, f.isPublishedVersion)())
                if (this.options.detectionArea !== m.DetectionArea.everywhere) {
                    if (this.setupVisualEditing(), j.default.shouldShow(this)) {
                        this.layers.forceDepthManually(0);
                        this.parts.add.sprite(l.ZoneIcon).view.setScale(0.15), this.parts.add.rect({
                            color: 4435243,
                            alpha: j.default.shouldShowInnerZone(this) ? 0.2 : 0,
                            borderAlpha: 1,
                            width: Math.abs(this.options.width),
                            height: Math.abs(this.options.height),
                            borderColor: 4435243,
                            borderWidth: 4,
                            ignoreInput: !0
                        });
                    }
                } else {
                    const s = o.default.Manager;
                    new(0, n.default)({
                        device: this,
                        baseColor: s.baseColor,
                        boxColor: s.boxColor,
                        content: {
                            icon: {
                                image: (0, p.default)('devices/tag_zone/icon.png'),
                                scale: 0.8
                            }
                        }
                    });
                }
        }
    }
    var _r = q;
}), a.register('IFO6W13', function(b, c) {
    _h(b.exports, 'ReplaceVisualEditingPreview', function() {
        return _h;
    });
    var d = a('HqwPM'),
        e = a('+oovY4'),
        f = a('A17vD'),
        g = a('HXXiu');
    const _h = (_h, a, b) => {
        const i = (0, g.FetchVisualEditingPreview)(),
            j = (0, f.FetchCurrentlyEditedDevice)();
        if (!j || !i)
            return;
        const k = j.layers.isOnNaturalDepth() ? void 0 : a + j.layers.getDepthShift();
        (0, e.default)({
            deviceOption: i.deviceOption,
            id: d.VisualEditingConstants.previewId,
            x: _h,
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
    _h(b.exports, 'default', function() {
        return _f;
    });
    var d = a('D5xLI'),
        e = a('aIyMH');
    var _f = _h => {
        (0, d.default)().worldManager.devices.getDeviceById(_h.id) && (0, e.default)(_h);
    };
}), a.register('R2Ucl10', function(b, c) {
    _h(b.exports, 'FetchOptionSchemaProperty', function() {
        return _d;
    });
    const _d = (_h, b) => {
        var e, f, g;
        const h = _h.deviceOption.optionSchema.options.find(_h => _h.key === b);
        return {
            min: null === (e = null == h ? void 0 : h.option.props) || void 0 === e ? void 0 : e.min,
            max: null === (f = null == h ? void 0 : h.option.props) || void 0 === f ? void 0 : f.max,
            step: null === (g = null == h ? void 0 : h.option.props) || void 0 === g ? void 0 : g.step
        };
    };
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
}), a.register('KLR5P', function(b, c) {
    e(b.exports, 'ZoneIcon', function() {
        return _e;
    });
    const d = (0, a('2Xvuf').default)('devices/tag_zone/zone_icon.png'),
        _e = {
            imageId: d,
            imageUrl: d
        };
}), a.register('jQvIR', function(b, c) {
    let d;
    var e;
    e(b.exports, 'DetectionArea', function() {
        return d;
    }), (e = d || (d = {})).everywhere = 'everywhere', e.zone = 'zone';
});