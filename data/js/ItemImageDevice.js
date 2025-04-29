function a(b) {
    return b && b.__esModule ? b.default : b;
}

function b(c, d, e, f) {
    Object.defineProperty(c, d, {
        get: e,
        set: f,
        enumerable: !0,
        configurable: !0
    });
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('Xc3cp', function(d, e) {
    var f;
    f = d.exports, Object.defineProperty(f, '__esModule', {
        value: !0,
        configurable: !0
    }), b(d.exports, 'default', function() {
        return _s;
    });
    var g = c('s/YA9'),
        h = c('hycyg'),
        i = c('UkCpC'),
        j = c('ltxDW'),
        k = c('taNL3'),
        l = c('u/WlI21'),
        m = c('uc4mA17'),
        n = c('256sH'),
        o = c('T6zrb'),
        p = c('vRyCf'),
        q = c('ddhGF');
    class r extends j.default {
        constructor(s) {
            super(s), (0, g.default)(this, 'createVisuals', () => {
                const t = {
                        ...o.UnknownItemAsset
                    },
                    u = (0, n.default)(this.options.itemId);
                u && (t.imageId = u.previewImage, t.imageUrl = u.previewImage), this.part = this.parts.add.sprite({
                    ...t,
                    onReady: t => {
                        if (t.view.displayWidth = this.options.size, t.view.displayHeight = this.options.size, t.view.angle = this.options.angle, this.options.outline) {
                            let v = this.options.outlineSize === k.OutlineSizeOption.custom ? this.options.customOutlineSize : this.options.size / 25;
                            v > this.options.size / 10 && (v = this.options.size / 10), (0, p.AddOutline)({
                                view: t.view,
                                options: {
                                    outlineColor: a(q).Display.Color.HexStringToColor(this.options.outlineColor).color,
                                    thickness: v
                                }
                            });
                        }
                    }
                }), this.part.view.alpha = this.getAlpha();
            }), (0, g.default)(this, 'getAlpha', () => (0, i.InPreGamePhase)() ? (0, h.isSavedVersion)() || this.options.visibleOnGameStart ? 1 : 0 : this.state.visible ? 1 : 0), (0, g.default)(this, 'setupVisualEditing', () => {
                if (!(0, i.InPreGamePhase)() || !(0, h.isSavedVersion)())
                    return;
                const t = (0, m.FetchOptionSchemaProperty)(this, 'size');
                this.visualEditing.add.box({
                    width: this.options.size,
                    height: this.options.size,
                    angle: this.options.angle,
                    minWidth: t.min,
                    maxWidth: t.max,
                    minHeight: t.min,
                    maxHeight: t.max,
                    rotable: !0,
                    keepRatio: !0,
                    onChange: t => {
                        (0, l.ReplaceVisualEditingPreview)(t.x, t.y, {
                            size: t.width,
                            angle: t.angle
                        });
                    }
                });
            }), (0, g.default)(this, 'onStateChange', a => {
                'visible' === a && (this.part.view.alpha = this.getAlpha());
            }), this.setupVisualEditing(), this.createVisuals();
        }
    }
    var _s = r;
}), c.register('taNL3', function(d, e) {
    let f;
    var g;
    b(d.exports, 'OutlineSizeOption', function() {
        return f;
    }), (g = f || (f = {})).automatic = 'automatic', g.custom = 'custom';
}), c.register('u/WlI21', function(d, e) {
    b(d.exports, 'ReplaceVisualEditingPreview', function() {
        return _j;
    });
    var f = c('hemXM'),
        g = c('sWmxu5'),
        h = c('EzUqb'),
        i = c('GQMbT');
    const _j = (d, b, c) => {
        const k = (0, i.FetchVisualEditingPreview)(),
            l = (0, h.FetchCurrentlyEditedDevice)();
        if (!l || !k)
            return;
        const m = l.layers.isOnNaturalDepth() ? void 0 : b + l.layers.getDepthShift();
        (0, g.default)({
            deviceOption: k.deviceOption,
            id: f.VisualEditingConstants.previewId,
            x: d,
            y: b,
            depth: m,
            layerId: l.layers.getLayer(),
            name: k.name,
            isPreview: !0,
            options: {
                ...k.options,
                ...c
            },
            placedByClient: !0,
            state: k.deviceOption.defaultState
        });
    };
}), c.register('sWmxu5', function(d, e) {
    b(d.exports, 'default', function() {
        return _h;
    });
    var f = c('heTaO'),
        g = c('2LtPo');
    var _h = d => {
        (0, f.default)().worldManager.devices.getDeviceById(d.id) && (0, g.default)(d);
    };
}), c.register('uc4mA17', function(d, e) {
    b(d.exports, 'FetchOptionSchemaProperty', function() {
        return _f;
    });
    const _f = (d, b) => {
        var g, h, i;
        const j = d.deviceOption.optionSchema.options.find(d => d.key === b);
        return {
            min: null === (g = null == j ? void 0 : j.option.props) || void 0 === g ? void 0 : g.min,
            max: null === (h = null == j ? void 0 : j.option.props) || void 0 === h ? void 0 : h.max,
            step: null === (i = null == j ? void 0 : j.option.props) || void 0 === i ? void 0 : i.step
        };
    };
}), c.register('T6zrb', function(d, e) {
    b(d.exports, 'BaseAsset', function() {
        return _g;
    }), b(d.exports, 'UnknownItemAsset', function() {
        return _h;
    });
    var f = c('UaUBz0');
    const _g = {
            imageId: (0, f.default)('devices/item_granter/base.png'),
            imageUrl: (0, f.default)('devices/item_granter/base.png')
        },
        _h = {
            imageId: '__UNKNOWN_ITEM',
            imageUrl: (0, f.default)('devices/item_granter/question-mark-2.png')
        };
}), c.register('vRyCf', function(d, e) {
    b(d.exports, 'AddOutline', function() {
        return _g;
    });
    var f = c('heTaO');
    const _g = d => {
        if (!d.view || !d.view.active)
            return;
        const h = {
                thickness: 2
            },
            i = d.options ? {
                ...h,
                ...d.options
            } : {
                ...h
            };
        (0, f.default)().plugins.get('rexOutlinePipeline').add(d.view, i);
    };
});