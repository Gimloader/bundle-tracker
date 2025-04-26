function a(a, b, d, c) {
    Object.defineProperty(a, b, {
        get: d,
        set: c,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('vqw6R', function(d, c) {
    var c;
    c = d.exports, Object.defineProperty(c, '__esModule', {
        value: !0,
        configurable: !0
    }), a(d.exports, 'BlockingZoneDevice', function() {
        return p;
    }), a(d.exports, 'default', function() {
        return q;
    });
    var d = b('UM8oI'),
        e = b('fe2aZ'),
        f = b('Bpt+p'),
        g = b('5Ux1a'),
        h = b('SCq5x4'),
        i = b('sgILU'),
        j = b('ldwGs'),
        k = b('Q0Vn8'),
        l = b('/Lvpl17'),
        m = b('wSwKo5'),
        n = b('cMsWT'),
        o = b('NvReb');
    class p extends i.default {
        getAlpha() {
            return (0, g.InGamePhase)() ? this.state.active ? 1 : 0 : (0, f.isPublishedVersion)() || (0, f.isSavedVersion)() && h.default.shouldShowInnerZone(this) ? 1 : 0;
        }
        constructor(a) {
            if (super(a), (0, d.default)(this, 'updatePartAlpha', a => {
                    const q = this.getAlpha();
                    (0, g.InGamePhase)() && a.updateAlpha(q > 0 ? 1 : 0);
                }), (0, d.default)(this, 'updateAlpha', () => {
                    const q = this.getAlpha();
                    (0, g.InGamePhase)() && this.parts.forEach(b => {
                        b.updateAlpha(q > 0 ? 1 : 0);
                    }), this.rect && this.rect.updateAlpha(q);
                }), (0, d.default)(this, 'onStateChange', a => {
                    'active' === a && this.updateAlpha();
                }), (0, d.default)(this, 'setupVisualEditing', () => {
                    if (!(0, g.InPreGamePhase)() || !(0, f.isSavedVersion)())
                        return;
                    const q = (0, l.FetchOptionSchemaProperty)(this, 'width'),
                        r = (0, l.FetchOptionSchemaProperty)(this, 'height');
                    this.visualEditing.add.box({
                        width: this.options.width,
                        height: this.options.height,
                        angle: 0,
                        rotable: !1,
                        minWidth: q.min,
                        maxWidth: q.max,
                        minHeight: r.min,
                        maxHeight: r.max,
                        keepRatio: !1,
                        onChange: q => {
                            (0, m.ReplaceVisualEditingPreview)(q.x, q.y, {
                                width: q.width,
                                height: q.height
                            });
                        }
                    });
                }), (0, d.default)(this, 'isActive', () => this.state.active), (0, d.default)(this, 'isBlockingBlockBuilding', () => this.options.blockBuilding === j.BlockingZoneBlockOverride.yes), (0, g.InPreGamePhase)() && (0, f.isSavedVersion)()) {
                this.parts.add.sprite({
                    ...o.IconAsset,
                    depthChange: (0, k.default)(2)
                }).view.setScale(0.17);
            }
            if ((0, g.InGamePhase)() || (0, f.isPublishedVersion)() ? this.options.visibleInGame : h.default.shouldShow(this)) {
                this.setupVisualEditing();
                const q = (0, e.GetNumberFromHexColor)(this.options.color);
                this.rect = this.parts.add.rect({
                    color: q,
                    layerId: n.default.DevicesUnderCharacters,
                    alpha: this.getAlpha(),
                    width: Math.abs(this.options.width),
                    height: Math.abs(this.options.height),
                    borderColor: q,
                    borderAlpha: (0, g.InGamePhase)() || (0, f.isPublishedVersion)() ? 0 : 1,
                    borderWidth: 4,
                    depthChange: (0, k.default)(1),
                    ignoreInput: !0
                });
            }
        }
    }
    var q = r;
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
}), b.register('ldwGs', function(b, d) {
    let c;
    var d;
    a(b.exports, 'BlockingZoneBlockOverride', function() {
        return c;
    }), (d = c || (c = {}))[d.doNotOverride = 1] = 'doNotOverride', d[d.yes = 2] = 'yes', d[d.no = 3] = 'no';
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
}), b.register('NvReb', function(i, n) {
    a(i.exports, 'IconAsset', function() {
        return d;
    });
    var c = b('JJQ0+');
    const d = {
        imageId: (0, c.default)('devices/blocking_zone/icon.png'),
        imageUrl: (0, c.default)('devices/blocking_zone/icon.png')
    };
});