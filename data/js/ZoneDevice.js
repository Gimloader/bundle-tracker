function a(a, b, d, c) {
    Object.defineProperty(a, b, {
        get: d,
        set: c,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('GXRth', function(d, c) {
    var c;
    c = d.exports, Object.defineProperty(c, '__esModule', {
        value: !0,
        configurable: !0
    }), a(d.exports, 'default', function() {
        return q;
    });
    var d = b('UM8oI'),
        e = b('MoC1b0'),
        f = b('fe2aZ'),
        g = b('Bpt+p'),
        h = b('5Ux1a'),
        i = b('SCq5x4'),
        j = b('sgILU'),
        k = b('f4ICC'),
        l = b('s7uDP'),
        m = b('Q0Vn8'),
        n = b('/Lvpl17'),
        o = b('wSwKo5');
    class p extends j.default {
        getAlpha() {
            return (0, h.InGamePhase)() ? this.state.active ? e.ZoneConstants.alpha : 0 : (0, g.isSavedVersion)() && i.default.shouldShowInnerZone(this) ? e.ZoneConstants.alpha : 0;
        }
        constructor(a) {
            if (super(a), (0, d.default)(this, 'onStateChange', a => {
                    if ('active' === a && this.zone && this.zone.view) {
                        const q = this.getAlpha();
                        this.zone.updateAlpha(q);
                    }
                }), (0, d.default)(this, 'setupVisualEditing', () => {
                    if (!(0, h.InPreGamePhase)() || !(0, g.isSavedVersion)())
                        return;
                    if (this.options.shape === k.ZoneShape.circle) {
                        const q = (0, n.FetchOptionSchemaProperty)(this, 'radius');
                        return void this.visualEditing.add.circle({
                            radius: this.options.radius,
                            rotable: !1,
                            minRadius: q.min,
                            maxRadius: q.max,
                            onChange: q => {
                                (0, o.ReplaceVisualEditingPreview)(q.x, q.y, {
                                    radius: q.radius
                                });
                            }
                        });
                    }
                    const q = (0, n.FetchOptionSchemaProperty)(this, 'width'),
                        r = (0, n.FetchOptionSchemaProperty)(this, 'height');
                    this.visualEditing.add.box({
                        width: this.options.width,
                        height: this.options.height,
                        angle: this.options.rotation,
                        minWidth: q.min,
                        maxWidth: q.max,
                        minHeight: r.min,
                        maxHeight: r.max,
                        keepRatio: !1,
                        onChange: q => {
                            (0, o.ReplaceVisualEditingPreview)(q.x, q.y, {
                                rotation: q.angle,
                                width: q.width,
                                height: q.height
                            });
                        }
                    });
                }), (0, h.InPreGamePhase)() && (0, g.isSavedVersion)()) {
                const q = this.parts.add.sprite({
                    ...l.BaseAsset,
                    depthChange: (0, m.default)(2)
                });
                q.view.angle = this.options.rotation, q.view.setScale(0.5);
            }
            if ((0, h.InGamePhase)() || (0, g.isPublishedVersion)() ? this.options.visibleInGame : i.default.shouldShow(this)) {
                this.setupVisualEditing();
                const q = (0, f.GetNumberFromHexColor)(this.options.color);
                if (this.options.shape === k.ZoneShape.circle)
                    return void(this.zone = this.parts.add.circle({
                        color: q,
                        alpha: this.getAlpha(),
                        r: this.options.radius,
                        depthChange: (0, m.default)(1),
                        ignoreInput: !0,
                        borderColor: q,
                        borderAlpha: (0, h.InGamePhase)() ? 0 : 1,
                        borderWidth: 4
                    }));
                this.zone = this.parts.add.rect({
                    color: q,
                    alpha: this.getAlpha(),
                    width: Math.abs(this.options.width),
                    height: Math.abs(this.options.height),
                    angle: this.options.rotation,
                    borderColor: q,
                    borderAlpha: (0, h.InGamePhase)() ? 0 : 1,
                    borderWidth: 4,
                    depthChange: (0, m.default)(1),
                    ignoreInput: !0
                });
            }
        }
    }
    var q = r;
}), b.register('MoC1b0', function(b, d) {
    a(b.exports, 'ZoneConstants', function() {
        return c;
    });
    const c = {
        alpha: 0.5,
        activateDeactivateTime: 100
    };
}), b.register('SCq5x4', function(d, c) {
    a(d.exports, 'ZonedDeviceDisplayOptions', function() {
        return d;
    }), a(d.exports, 'default', function() {
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
}), b.register('aGdJe4', function(b, d) {
    a(b.exports, 'default', function() {
        return c;
    });
    var c = {
        zonedDeviceViews: 'zoned-device-views'
    };
}), b.register('f4ICC', function(b, d) {
    let c;
    var d;
    a(b.exports, 'ZoneShape', function() {
        return c;
    }), (d = c || (c = {})).rectangle = 'rectangle', d.circle = 'circle';
}), b.register('s7uDP', function(d, c) {
    a(d.exports, 'BaseAsset', function() {
        return d;
    });
    var c = b('JJQ0+');
    const d = {
        imageId: (0, c.default)('devices/zone/base.png'),
        imageUrl: (0, c.default)('devices/zone/base.png')
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
}), b.register('wSwKo5', function(i, h) {
    a(i.exports, 'ReplaceVisualEditingPreview', function() {
        return g;
    });
    var c = b('2pEsK'),
        d = b('Am0b71'),
        e = b('KDS1x'),
        f = b('83+vO');
    const g = (a, b, i) => {
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
                ...i
            },
            placedByClient: !0,
            state: h.deviceOption.defaultState
        });
    };
}), b.register('Am0b71', function(i, n) {
    a(i.exports, 'default', function() {
        return e;
    });
    var c = b('dAmf5'),
        d = b('jgFbX');
    var e = a => {
        (0, c.default)().worldManager.devices.getDeviceById(a.id) && (0, d.default)(a);
    };
});