function a(a, b, d, c) {
    Object.defineProperty(a, b, {
        get: d,
        set: c,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('/1ewk', function(d, c) {
    var c;
    c = d.exports, Object.defineProperty(c, '__esModule', {
        value: !0,
        configurable: !0
    }), a(d.exports, 'ZombieSpawnZoneDevice', function() {
        return o;
    }), a(d.exports, 'default', function() {
        return p;
    });
    var d = b('UM8oI'),
        e = b('fe2aZ'),
        f = b('Bpt+p'),
        g = b('5Ux1a'),
        h = b('SCq5x4'),
        i = b('sgILU'),
        j = b('Q0Vn8'),
        k = b('/Lvpl17'),
        l = b('wSwKo5'),
        m = b('cMsWT'),
        n = b('v8AkV');
    class o extends i.default {
        getAlpha() {
            return (0, g.InGamePhase)() ? 0 : (0, f.isPublishedVersion)() || (0, f.isSavedVersion)() && h.default.shouldShowInnerZone(this) ? 1 : 0;
        }
        constructor(a) {
            if (super(a), (0, d.default)(this, 'updatePartAlpha', a => {
                    const p = this.getAlpha();
                    (0, g.InGamePhase)() && a.updateAlpha(p > 0 ? 1 : 0);
                }), (0, d.default)(this, 'updateAlpha', () => {
                    const p = this.getAlpha();
                    (0, g.InGamePhase)() && this.parts.forEach(b => {
                        b.updateAlpha(p > 0 ? 1 : 0);
                    }), this.rect && this.rect.updateAlpha(p);
                }), (0, d.default)(this, 'setupVisualEditing', () => {
                    if (!(0, g.InPreGamePhase)() || !(0, f.isSavedVersion)())
                        return;
                    const p = (0, k.FetchOptionSchemaProperty)(this, 'width'),
                        q = (0, k.FetchOptionSchemaProperty)(this, 'height');
                    (0, k.FetchOptionSchemaProperty)(this, 'rotation');
                    this.visualEditing.add.box({
                        width: this.options.width,
                        height: this.options.height,
                        angle: this.options.rotation,
                        rotable: !0,
                        minWidth: p.min,
                        maxWidth: p.max,
                        minHeight: q.min,
                        maxHeight: q.max,
                        keepRatio: !1,
                        onChange: p => {
                            (0, l.ReplaceVisualEditingPreview)(p.x, p.y, {
                                width: p.width,
                                height: p.height,
                                rotation: p.angle
                            });
                        }
                    });
                }), (0, g.InPreGamePhase)() && (0, f.isSavedVersion)()) {
                this.parts.add.sprite({
                    ...n.IconAsset,
                    depthChange: (0, j.default)(2)
                }).view.setScale(0.17);
            }
            if ((0, g.InGamePhase)() || (0, f.isPublishedVersion)() ? 0 : h.default.shouldShow(this)) {
                this.setupVisualEditing();
                const p = (0, e.GetNumberFromHexColor)('#00FF00');
                this.rect = this.parts.add.rect({
                    color: p,
                    layerId: m.default.DevicesUnderCharacters,
                    alpha: this.getAlpha(),
                    width: Math.abs(this.options.width),
                    height: Math.abs(this.options.height),
                    borderColor: p,
                    borderAlpha: (0, g.InGamePhase)() || (0, f.isPublishedVersion)() ? 0 : 1,
                    borderWidth: 4,
                    depthChange: (0, j.default)(1),
                    ignoreInput: !0,
                    angle: this.options.rotation
                });
            }
        }
    }
    var p = q;
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
}), b.register('v8AkV', function(i, n) {
    a(i.exports, 'IconAsset', function() {
        return d;
    });
    var c = b('JJQ0+');
    const d = {
        imageId: (0, c.default)('devices/zombie_spawn_zone/icon.png'),
        imageUrl: (0, c.default)('devices/zombie_spawn_zone/icon.png')
    };
});