function a(a, b, d, h) {
    Object.defineProperty(a, b, {
        get: d,
        set: h,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('t7jyz', function(d, h) {
    var c;
    c = d.exports, Object.defineProperty(c, '__esModule', {
        value: !0,
        configurable: !0
    }), a(d.exports, 'default', function() {
        return q;
    });
    var d = b('UM8oI'),
        e = b('Bpt+p'),
        f = b('wSwKo5'),
        g = b('/Lvpl17'),
        h = b('5Ux1a'),
        i = b('SCq5x4'),
        j = b('sgILU'),
        k = b('eIsVc'),
        l = b('/2vvF'),
        m = b('phu0d'),
        n = b('Gqspz'),
        o = b('JJQ0+');
    class p extends j.default {
        constructor(a) {
            if (super(a), (0, d.default)(this, 'setupVisualEditing', () => {
                    if (!(0, h.InPreGamePhase)() || !(0, e.isSavedVersion)())
                        return;
                    const q = (0, g.FetchOptionSchemaProperty)(this, 'width'),
                        r = (0, g.FetchOptionSchemaProperty)(this, 'height');
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
                            (0, f.ReplaceVisualEditingPreview)(q.x, q.y, {
                                width: q.width,
                                height: q.height
                            });
                        }
                    });
                }), !(0, h.InGamePhase)() && !(0, e.isPublishedVersion)())
                if (this.options.detectionArea !== l.DetectionArea.everywhere) {
                    if (this.setupVisualEditing(), i.default.shouldShow(this)) {
                        this.layers.forceDepthManually(0);
                        this.parts.add.sprite(k.ZoneIcon).view.setScale(0.15), this.parts.add.rect({
                            color: 4435243,
                            alpha: i.default.shouldShowInnerZone(this) ? 0.2 : 0,
                            borderAlpha: 1,
                            width: Math.abs(this.options.width),
                            height: Math.abs(this.options.height),
                            borderColor: 4435243,
                            borderWidth: 4,
                            ignoreInput: !0
                        });
                    }
                } else {
                    const q = n.default.Manager;
                    new(0, m.default)({
                        device: this,
                        baseColor: q.baseColor,
                        boxColor: q.boxColor,
                        content: {
                            icon: {
                                image: (0, o.default)('devices/tag_zone/icon.png'),
                                scale: 0.8
                            }
                        }
                    });
                }
        }
    }
    var q = r;
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
}), b.register('eIsVc', function(i, c) {
    a(i.exports, 'ZoneIcon', function() {
        return d;
    });
    const c = (0, b('JJQ0+').default)('devices/tag_zone/zone_icon.png'),
        d = {
            imageId: c,
            imageUrl: c
        };
}), b.register('/2vvF', function(b, i) {
    let c;
    var d;
    a(b.exports, 'DetectionArea', function() {
        return c;
    }), (d = c || (c = {})).everywhere = 'everywhere', d.zone = 'zone';
});