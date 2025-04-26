function a(a) {
    return a && a.__esModule ? a.default : a;
}

function b(a, b, c, d) {
    Object.defineProperty(a, b, {
        get: c,
        set: d,
        enumerable: !0,
        configurable: !0
    });
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('xAWb+', function(d, e) {
    var d;
    d = d.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), b(d.exports, 'default', function() {
        return q;
    });
    var e = c('UM8oI'),
        f = c('Bpt+p'),
        g = c('5Ux1a'),
        h = c('sgILU'),
        i = c('MVCx0'),
        j = c('wSwKo5'),
        k = c('/Lvpl17'),
        l = c('0x6bL'),
        m = c('Sbl6W'),
        n = c('95CV8'),
        o = c('kneek');
    class p extends h.default {
        constructor(b) {
            super(b), (0, e.default)(this, 'createVisuals', () => {
                const q = {
                        ...m.UnknownItemAsset
                    },
                    r = (0, l.default)(this.options.itemId);
                r && (q.imageId = r.previewImage, q.imageUrl = r.previewImage), this.part = this.parts.add.sprite({
                    ...q,
                    onReady: q => {
                        if (q.view.displayWidth = this.options.size, q.view.displayHeight = this.options.size, q.view.angle = this.options.angle, this.options.outline) {
                            let s = this.options.outlineSize === i.OutlineSizeOption.custom ? this.options.customOutlineSize : this.options.size / 25;
                            s > this.options.size / 10 && (s = this.options.size / 10), (0, n.AddOutline)({
                                view: q.view,
                                options: {
                                    outlineColor: a(o).Display.Color.HexStringToColor(this.options.outlineColor).color,
                                    thickness: s
                                }
                            });
                        }
                    }
                }), this.part.view.alpha = this.getAlpha();
            }), (0, e.default)(this, 'getAlpha', () => (0, g.InPreGamePhase)() ? (0, f.isSavedVersion)() || this.options.visibleOnGameStart ? 1 : 0 : this.state.visible ? 1 : 0), (0, e.default)(this, 'setupVisualEditing', () => {
                if (!(0, g.InPreGamePhase)() || !(0, f.isSavedVersion)())
                    return;
                const q = (0, k.FetchOptionSchemaProperty)(this, 'size');
                this.visualEditing.add.box({
                    width: this.options.size,
                    height: this.options.size,
                    angle: this.options.angle,
                    minWidth: q.min,
                    maxWidth: q.max,
                    minHeight: q.min,
                    maxHeight: q.max,
                    rotable: !0,
                    keepRatio: !0,
                    onChange: q => {
                        (0, j.ReplaceVisualEditingPreview)(q.x, q.y, {
                            size: q.width,
                            angle: q.angle
                        });
                    }
                });
            }), (0, e.default)(this, 'onStateChange', a => {
                'visible' === a && (this.part.view.alpha = this.getAlpha());
            }), this.setupVisualEditing(), this.createVisuals();
        }
    }
    var q = r;
}), c.register('MVCx0', function(a, c) {
    let d;
    var e;
    b(a.exports, 'OutlineSizeOption', function() {
        return d;
    }), (e = d || (d = {})).automatic = 'automatic', e.custom = 'custom';
}), c.register('wSwKo5', function(a, i) {
    b(a.exports, 'ReplaceVisualEditingPreview', function() {
        return h;
    });
    var d = c('2pEsK'),
        e = c('Am0b71'),
        f = c('KDS1x'),
        g = c('83+vO');
    const h = (a, b, c) => {
        const i = (0, g.FetchVisualEditingPreview)(),
            j = (0, f.FetchCurrentlyEditedDevice)();
        if (!j || !i)
            return;
        const k = j.layers.isOnNaturalDepth() ? void 0 : b + j.layers.getDepthShift();
        (0, e.default)({
            deviceOption: i.deviceOption,
            id: d.VisualEditingConstants.previewId,
            x: a,
            y: b,
            depth: k,
            layerId: j.layers.getLayer(),
            name: i.name,
            isPreview: !0,
            options: {
                ...i.options,
                ...c
            },
            placedByClient: !0,
            state: i.deviceOption.defaultState
        });
    };
}), c.register('Am0b71', function(a, d) {
    b(a.exports, 'default', function() {
        return f;
    });
    var d = c('dAmf5'),
        e = c('jgFbX');
    var f = a => {
        (0, d.default)().worldManager.devices.getDeviceById(a.id) && (0, e.default)(a);
    };
}), c.register('/Lvpl17', function(a, c) {
    b(a.exports, 'FetchOptionSchemaProperty', function() {
        return d;
    });
    const d = (a, b) => {
        var e, f, g;
        const h = a.deviceOption.optionSchema.options.find(a => a.key === b);
        return {
            min: null === (e = null == h ? void 0 : h.option.props) || void 0 === e ? void 0 : e.min,
            max: null === (f = null == h ? void 0 : h.option.props) || void 0 === f ? void 0 : f.max,
            step: null === (g = null == h ? void 0 : h.option.props) || void 0 === g ? void 0 : g.step
        };
    };
}), c.register('Sbl6W', function(a, n) {
    b(a.exports, 'BaseAsset', function() {
        return e;
    }), b(a.exports, 'UnknownItemAsset', function() {
        return f;
    });
    var d = c('JJQ0+');
    const e = {
            imageId: (0, d.default)('devices/item_granter/base.png'),
            imageUrl: (0, d.default)('devices/item_granter/base.png')
        },
        f = {
            imageId: '__UNKNOWN_ITEM',
            imageUrl: (0, d.default)('devices/item_granter/question-mark-2.png')
        };
}), c.register('95CV8', function(a, n) {
    b(a.exports, 'AddOutline', function() {
        return e;
    });
    var d = c('dAmf5');
    const e = a => {
        if (!a.view || !a.view.active)
            return;
        const f = {
                thickness: 2
            },
            g = a.options ? {
                ...f,
                ...a.options
            } : {
                ...f
            };
        (0, d.default)().plugins.get('rexOutlinePipeline').add(a.view, g);
    };
});