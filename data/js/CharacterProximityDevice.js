function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('heGwq', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _o(b.exports, 'default', function() {
        return _o;
    });
    var e = a('1bFPu'),
        f = a('9tz3H'),
        g = a('IFO6W13'),
        h = a('R2Ucl10'),
        i = a('/pbxo'),
        j = a('kg3wN6'),
        k = a('I35Ay'),
        l = a('QYCe9'),
        m = a('K3oEQ');
    class n extends k.default {
        constructor(_o) {
            super(_o), (0, e.default)(this, 'setupVisualEditing', () => {
                if (!(0, i.InPreGamePhase)() || !(0, f.isSavedVersion)())
                    return;
                const p = (0, h.FetchOptionSchemaProperty)(this, 'width'),
                    q = (0, h.FetchOptionSchemaProperty)(this, 'height');
                this.visualEditing.add.box({
                    width: this.options.width,
                    height: this.options.height,
                    minWidth: p.min,
                    maxWidth: p.max,
                    minHeight: q.min,
                    maxHeight: q.max,
                    rotable: !1,
                    keepRatio: !1,
                    onChange: p => {
                        (0, g.ReplaceVisualEditingPreview)(p.x, p.y, {
                            width: p.width,
                            height: p.height
                        });
                    }
                });
            }), (0, i.InGamePhase)() || (this.layers.forceDepthManually(0), this.parts.add.sprite(l.BaseAsset), this.options.detectionArea !== m.DetectionArea.everywhere && j.default.shouldShow(this) && (this.setupVisualEditing(), this.parts.add.rect({
                color: 8375794,
                alpha: j.default.shouldShowInnerZone(this) ? 0.2 : 0,
                borderAlpha: 1,
                width: Math.abs(this.options.width),
                height: Math.abs(this.options.height),
                borderColor: 8375794,
                borderWidth: 4,
                ignoreInput: !0
            })));
        }
    }
    var _o = n;
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
}), a.register('QYCe9', function(b, c) {
    e(b.exports, 'BaseAsset', function() {
        return _d;
    });
    const _d = {
        imageId: 'character_proximity_device',
        imageUrl: (0, a('2Xvuf').default)('devices/character_proximity/radar.png')
    };
}), a.register('K3oEQ', function(b, c) {
    let d;
    var e;
    let f;
    var g;
    e(b.exports, 'DetectionArea', function() {
        return d;
    }), (e = d || (d = {})).everywhere = 'everywhere', e.zone = 'zone', (g = f || (f = {})).everybody = 'everybody', g.sameTeam = 'sameTeam', g.differentTeam = 'differentTeam';
});