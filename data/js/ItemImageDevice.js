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
c.register('.....', function(d, e) {
    var f;
    f = d.exports, Object.defineProperty(f, '__esModule', {
        value: !0,
        configurable: !0
    }), b(d.exports, 'default', function() {
        return _s;
    });
    var g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....'),
        m = c('.....'),
        n = c('.....'),
        o = c('.....'),
        p = c('.....'),
        q = c('.....');
    class r extends j.default {
        constructor(s) {
            super(s), (0, g.default)(this, 'createVisuals', () => {
                const t = {
                        ...o.UnknownItemAsset
                    },
                    u = (0, n.default)(this.options.itemId);
                u && (t.imageId = u.previewImage, t.imageUrl = u.previewImage), this.part = this.parts.add.sprite({
                    ...t,
                    onReady: v => {
                        if (v.view.displayWidth = this.options.size, v.view.displayHeight = this.options.size, v.view.angle = this.options.angle, this.options.outline) {
                            let w = this.options.outlineSize === k.OutlineSizeOption.custom ? this.options.customOutlineSize : this.options.size / 25;
                            w > this.options.size / 10 && (w = this.options.size / 10), (0, p.AddOutline)({
                                view: v.view,
                                options: {
                                    outlineColor: a(q).Display.Color.HexStringToColor(this.options.outlineColor).color,
                                    thickness: w
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
                    onChange: u => {
                        (0, l.ReplaceVisualEditingPreview)(u.x, u.y, {
                            size: u.width,
                            angle: u.angle
                        });
                    }
                });
            }), (0, g.default)(this, 'onStateChange', t => {
                'visible' === t && (this.part.view.alpha = this.getAlpha());
            }), this.setupVisualEditing(), this.createVisuals();
        }
    }
    var _s = r;
}), c.register('.....', function(d, e) {
    let f;
    var g;
    b(d.exports, 'OutlineSizeOption', function() {
        return f;
    }), (g = f || (f = {})).automatic = 'automatic', g.custom = 'custom';
}), c.register('.....', function(d, e) {
    b(d.exports, 'ReplaceVisualEditingPreview', function() {
        return _j;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....');
    const _j = (k, l, m) => {
        const n = (0, i.FetchVisualEditingPreview)(),
            o = (0, h.FetchCurrentlyEditedDevice)();
        if (!o || !n)
            return;
        const p = o.layers.isOnNaturalDepth() ? void 0 : l + o.layers.getDepthShift();
        (0, g.default)({
            deviceOption: n.deviceOption,
            id: f.VisualEditingConstants.previewId,
            x: k,
            y: l,
            depth: p,
            layerId: o.layers.getLayer(),
            name: n.name,
            isPreview: !0,
            options: {
                ...n.options,
                ...m
            },
            placedByClient: !0,
            state: n.deviceOption.defaultState
        });
    };
}), c.register('.....', function(d, e) {
    b(d.exports, 'default', function() {
        return _h;
    });
    var f = c('.....'),
        g = c('.....');
    var _h = i => {
        (0, f.default)().worldManager.devices.getDeviceById(i.id) && (0, g.default)(i);
    };
}), c.register('.....', function(d, e) {
    b(d.exports, 'FetchOptionSchemaProperty', function() {
        return _f;
    });
    const _f = (g, h) => {
        var i, j, k;
        const l = g.deviceOption.optionSchema.options.find(m => m.key === h);
        return {
            min: null === (i = null == l ? void 0 : l.option.props) || void 0 === i ? void 0 : i.min,
            max: null === (j = null == l ? void 0 : l.option.props) || void 0 === j ? void 0 : j.max,
            step: null === (k = null == l ? void 0 : l.option.props) || void 0 === k ? void 0 : k.step
        };
    };
}), c.register('.....', function(d, e) {
    b(d.exports, 'BaseAsset', function() {
        return _g;
    }), b(d.exports, 'UnknownItemAsset', function() {
        return _h;
    });
    var f = c('.....');
    const _g = {
            imageId: (0, f.default)('devices/item_granter/base.png'),
            imageUrl: (0, f.default)('devices/item_granter/base.png')
        },
        _h = {
            imageId: '__UNKNOWN_ITEM',
            imageUrl: (0, f.default)('devices/item_granter/question-mark-2.png')
        };
}), c.register('.....', function(d, e) {
    b(d.exports, 'AddOutline', function() {
        return _g;
    });
    var f = c('.....');
    const _g = h => {
        if (!h.view || !h.view.active)
            return;
        const i = {
                thickness: 2
            },
            j = h.options ? {
                ...i,
                ...h.options
            } : {
                ...i
            };
        (0, f.default)().plugins.get('rexOutlinePipeline').add(h.view, j);
    };
});