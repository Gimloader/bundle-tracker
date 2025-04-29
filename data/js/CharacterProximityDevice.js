function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('77NlX', function(c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'default', function() {
        return _p;
    });
    var f = b('s/YA9'),
        g = b('hycyg'),
        h = b('u/WlI21'),
        i = b('uc4mA17'),
        j = b('UkCpC'),
        k = b('FWW2T6'),
        l = b('ltxDW'),
        m = b('gIGq3'),
        n = b('tZD9W');
    class o extends l.default {
        constructor(p) {
            super(p), (0, f.default)(this, 'setupVisualEditing', () => {
                if (!(0, j.InPreGamePhase)() || !(0, g.isSavedVersion)())
                    return;
                const q = (0, i.FetchOptionSchemaProperty)(this, 'width'),
                    r = (0, i.FetchOptionSchemaProperty)(this, 'height');
                this.visualEditing.add.box({
                    width: this.options.width,
                    height: this.options.height,
                    minWidth: q.min,
                    maxWidth: q.max,
                    minHeight: r.min,
                    maxHeight: r.max,
                    rotable: !1,
                    keepRatio: !1,
                    onChange: q => {
                        (0, h.ReplaceVisualEditingPreview)(q.x, q.y, {
                            width: q.width,
                            height: q.height
                        });
                    }
                });
            }), (0, j.InGamePhase)() || (this.layers.forceDepthManually(0), this.parts.add.sprite(m.BaseAsset), this.options.detectionArea !== n.DetectionArea.everywhere && k.default.shouldShow(this) && (this.setupVisualEditing(), this.parts.add.rect({
                color: 8375794,
                alpha: k.default.shouldShowInnerZone(this) ? 0.2 : 0,
                borderAlpha: 1,
                width: Math.abs(this.options.width),
                height: Math.abs(this.options.height),
                borderColor: 8375794,
                borderWidth: 4,
                ignoreInput: !0
            })));
        }
    }
    var _p = o;
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
}), b.register('gIGq3', function(c, d) {
    a(c.exports, 'BaseAsset', function() {
        return _e;
    });
    const _e = {
        imageId: 'character_proximity_device',
        imageUrl: (0, b('UaUBz0').default)('devices/character_proximity/radar.png')
    };
}), b.register('tZD9W', function(c, d) {
    let e;
    var f;
    let g;
    var h;
    a(c.exports, 'DetectionArea', function() {
        return e;
    }), (f = e || (e = {})).everywhere = 'everywhere', f.zone = 'zone', (h = g || (g = {})).everybody = 'everybody', h.sameTeam = 'sameTeam', h.differentTeam = 'differentTeam';
});