function a(a, b, d, c) {
    Object.defineProperty(a, b, {
        get: d,
        set: c,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('hH16H', function(d, c) {
    var c;
    c = d.exports, Object.defineProperty(c, '__esModule', {
        value: !0,
        configurable: !0
    }), a(d.exports, 'default', function() {
        return p;
    });
    var d = b('UM8oI'),
        e = b('MoC1b0'),
        f = b('fe2aZ'),
        g = b('Bpt+p'),
        h = b('5Ux1a'),
        i = b('SCq5x4'),
        j = b('sgILU'),
        k = b('xnNLQ'),
        l = b('Q0Vn8'),
        m = b('/Lvpl17'),
        n = b('wSwKo5');
    class o extends j.default {
        getAlpha() {
            return (0, h.InGamePhase)() ? this.state.active ? e.ZoneConstants.alpha : 0 : (0, g.isSavedVersion)() && i.default.shouldShowInnerZone(this) ? e.ZoneConstants.alpha : 0;
        }
        constructor(a) {
            if (super(a), (0, d.default)(this, 'onStateChange', a => {
                    if ('active' === a) {
                        if (this.rect && this.rect.view) {
                            const p = this.getAlpha();
                            this.rect.updateAlpha(p);
                        }
                        if (this.sprite && this.sprite.view) {
                            const q = this.getAlpha();
                            this.sprite.view.alpha = q;
                        }
                    }
                }), (0, d.default)(this, 'setupVisualEditing', () => {
                    if (!(0, h.InPreGamePhase)() || !(0, g.isSavedVersion)())
                        return;
                    const p = (0, m.FetchOptionSchemaProperty)(this, 'width'),
                        q = (0, m.FetchOptionSchemaProperty)(this, 'height');
                    this.visualEditing.add.box({
                        width: this.options.width,
                        height: this.options.height,
                        angle: this.options.rotation,
                        minWidth: p.min,
                        maxWidth: p.max,
                        minHeight: q.min,
                        maxHeight: q.max,
                        keepRatio: !1,
                        onChange: p => {
                            (0, n.ReplaceVisualEditingPreview)(p.x, p.y, {
                                rotation: p.angle,
                                width: p.width,
                                height: p.height
                            });
                        }
                    });
                }), (0, h.InPreGamePhase)() && (0, g.isSavedVersion)()) {
                const p = this.parts.add.sprite({
                    ...k.BaseAsset,
                    depthChange: (0, l.default)(2)
                });
                p.view.angle = this.options.rotation, p.view.setScale(0.5);
            }
            if ((0, h.InGamePhase)() || (0, g.isPublishedVersion)() ? this.options.visibleInGame : i.default.shouldShow(this)) {
                this.setupVisualEditing();
                const p = (0, f.GetNumberFromHexColor)(this.options.color);
                this.rect = this.parts.add.rect({
                    color: p,
                    alpha: this.getAlpha(),
                    width: Math.abs(this.options.width),
                    height: Math.abs(this.options.height),
                    angle: this.options.rotation,
                    borderColor: p,
                    borderAlpha: (0, h.InGamePhase)() ? 0 : 1,
                    borderWidth: 4,
                    depthChange: (0, l.default)(1),
                    ignoreInput: !0
                }), (0, h.InPreGamePhase)() && (0, g.isSavedVersion)() && (this.sprite = this.parts.add.sprite({
                    ...k.Icon,
                    depthChange: (0, l.default)(2)
                }), this.sprite.view.setScale(0.1));
            }
        }
    }
    var p = q;
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
}), b.register('xnNLQ', function(d, c) {
    a(d.exports, 'BaseAsset', function() {
        return d;
    }), a(d.exports, 'Icon', function() {
        return e;
    });
    var c = b('JJQ0+');
    const d = {
            imageId: (0, c.default)('devices/capture_flag_zone/base.png'),
            imageUrl: (0, c.default)('devices/capture_flag_zone/base.png')
        },
        e = {
            imageId: (0, c.default)('devices/capture_flag_zone/icon.png'),
            imageUrl: (0, c.default)('devices/capture_flag_zone/icon.png')
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