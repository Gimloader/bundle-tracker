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
        return _p;
    });
    var f = b('.....'),
        g = b('.....'),
        h = b('.....'),
        i = b('.....'),
        j = b('.....'),
        k = b('.....'),
        l = b('.....'),
        m = b('.....'),
        n = b('.....');
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
                    onChange: s => {
                        (0, h.ReplaceVisualEditingPreview)(s.x, s.y, {
                            width: s.width,
                            height: s.height
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
    a(c.exports, 'BaseAsset', function() {
        return _e;
    });
    const _e = {
        imageId: 'character_proximity_device',
        imageUrl: (0, b('.....').default)('devices/character_proximity/radar.png')
    };
}), b.register('.....', function(c, d) {
    let e;
    var f;
    let g;
    var h;
    a(c.exports, 'DetectionArea', function() {
        return e;
    }), (f = e || (e = {})).everywhere = 'everywhere', f.zone = 'zone', (h = g || (g = {})).everybody = 'everybody', h.sameTeam = 'sameTeam', h.differentTeam = 'differentTeam';
});