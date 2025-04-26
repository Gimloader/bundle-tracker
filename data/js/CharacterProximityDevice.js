function a(a, b, d, h) {
    Object.defineProperty(a, b, {
        get: d,
        set: h,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('qrRPG', function(d, h) {
    var c;
    c = d.exports, Object.defineProperty(c, '__esModule', {
        value: !0,
        configurable: !0
    }), a(d.exports, 'default', function() {
        return n;
    });
    var d = b('UM8oI'),
        e = b('Bpt+p'),
        f = b('wSwKo5'),
        g = b('/Lvpl17'),
        h = b('5Ux1a'),
        i = b('SCq5x4'),
        j = b('sgILU'),
        k = b('NiTBJ'),
        l = b('qfGAa');
    class m extends j.default {
        constructor(a) {
            super(a), (0, d.default)(this, 'setupVisualEditing', () => {
                if (!(0, h.InPreGamePhase)() || !(0, e.isSavedVersion)())
                    return;
                const n = (0, g.FetchOptionSchemaProperty)(this, 'width'),
                    o = (0, g.FetchOptionSchemaProperty)(this, 'height');
                this.visualEditing.add.box({
                    width: this.options.width,
                    height: this.options.height,
                    minWidth: n.min,
                    maxWidth: n.max,
                    minHeight: o.min,
                    maxHeight: o.max,
                    rotable: !1,
                    keepRatio: !1,
                    onChange: n => {
                        (0, f.ReplaceVisualEditingPreview)(n.x, n.y, {
                            width: n.width,
                            height: n.height
                        });
                    }
                });
            }), (0, h.InGamePhase)() || (this.layers.forceDepthManually(0), this.parts.add.sprite(k.BaseAsset), this.options.detectionArea !== l.DetectionArea.everywhere && i.default.shouldShow(this) && (this.setupVisualEditing(), this.parts.add.rect({
                color: 8375794,
                alpha: i.default.shouldShowInnerZone(this) ? 0.2 : 0,
                borderAlpha: 1,
                width: Math.abs(this.options.width),
                height: Math.abs(this.options.height),
                borderColor: 8375794,
                borderWidth: 4,
                ignoreInput: !0
            })));
        }
    }
    var n = o;
}), b.register('wSwKo5', function(d, h) {
    a(d.exports, 'ReplaceVisualEditingPreview', function() {
        return g;
    });
    var c = b('2pEsK'),
        d = b('Am0b71'),
        e = b('KDS1x'),
        f = b('83+vO');
    const g = (a, b, d) => {
        const h = (0, f.FetchVisualEditingPreview)(),
            i = (0, e.FetchCurrentlyEditedDevice)();
        if (!i || !h)
            return;
        const j = i.layers.isOnNaturalDepth() ? void 0 : b + i.layers.getDepthShift();
        (0, d.default)({
            deviceOption: h.deviceOption,
            id: c.VisualEditingConstants.previewId,
            x: a,
            y: b,
            depth: j,
            layerId: i.layers.getLayer(),
            name: h.name,
            isPreview: !0,
            options: {
                ...h.options,
                ...d
            },
            placedByClient: !0,
            state: h.deviceOption.defaultState
        });
    };
}), b.register('Am0b71', function(d, c) {
    a(d.exports, 'default', function() {
        return e;
    });
    var c = b('dAmf5'),
        d = b('jgFbX');
    var e = a => {
        (0, c.default)().worldManager.devices.getDeviceById(a.id) && (0, d.default)(a);
    };
}), b.register('/Lvpl17', function(b, d) {
    a(b.exports, 'FetchOptionSchemaProperty', function() {
        return c;
    });
    const c = (a, b) => {
        var d, e, f;
        const g = a.deviceOption.optionSchema.options.find(a => a.key === b);
        return {
            min: null === (d = null == g ? void 0 : g.option.props) || void 0 === d ? void 0 : d.min,
            max: null === (e = null == g ? void 0 : g.option.props) || void 0 === e ? void 0 : e.max,
            step: null === (f = null == g ? void 0 : g.option.props) || void 0 === f ? void 0 : f.step
        };
    };
}), b.register('SCq5x4', function(i, c) {
    a(i.exports, 'ZonedDeviceDisplayOptions', function() {
        return d;
    }), a(i.exports, 'default', function() {
        return g;
    });
    var c = b('aGdJe4');
    let d;
    var e;
    (e = d || (d = {})).visible = 'visible', e.bordersOnly = 'bordersOnly', e.fullyHidden = 'fullyHidden';
    const f = () => {
        const g = localStorage.getItem(c.default.zonedDeviceViews);
        return g || d.bordersOnly;
    };
    var g = {
        shouldShow: a => f() !== d.fullyHidden,
        shouldShowInnerZone: a => f() !== d.bordersOnly
    };
}), b.register('aGdJe4', function(b, i) {
    a(b.exports, 'default', function() {
        return c;
    });
    var c = {
        zonedDeviceViews: 'zoned-device-views'
    };
}), b.register('NiTBJ', function(i, c) {
    a(i.exports, 'BaseAsset', function() {
        return c;
    });
    const c = {
        imageId: 'character_proximity_device',
        imageUrl: (0, b('JJQ0+').default)('devices/character_proximity/radar.png')
    };
}), b.register('qfGAa', function(b, i) {
    let c;
    var d;
    let e;
    var f;
    a(b.exports, 'DetectionArea', function() {
        return c;
    }), (d = c || (c = {})).everywhere = 'everywhere', d.zone = 'zone', (f = e || (e = {})).everybody = 'everybody', f.sameTeam = 'sameTeam', f.differentTeam = 'differentTeam';
});