function a(b) {
    return b && b.__esModule ? b.default : b;
}

function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('Imhl6', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _q(b.exports, 'default', function() {
        return _q;
    });
    var e = a('1bFPu'),
        f = a('9tz3H'),
        g = a('/pbxo'),
        h = a('I35Ay'),
        i = a('SiQeJ'),
        j = a('IFO6W13'),
        k = a('R2Ucl10'),
        l = a('btxlR'),
        m = a('2M6xn'),
        n = a('qMN8v'),
        o = a('8WvaZ');
    class p extends h.default {
        constructor(_q) {
            super(_q), (0, e.default)(this, 'createVisuals', () => {
                const r = {
                        ...m.UnknownItemAsset
                    },
                    s = (0, l.default)(this.options.itemId);
                s && (r.imageId = s.previewImage, r.imageUrl = s.previewImage), this.part = this.parts.add.sprite({
                    ...r,
                    onReady: r => {
                        if (r.view.displayWidth = this.options.size, r.view.displayHeight = this.options.size, r.view.angle = this.options.angle, this.options.outline) {
                            let t = this.options.outlineSize === i.OutlineSizeOption.custom ? this.options.customOutlineSize : this.options.size / 25;
                            t > this.options.size / 10 && (t = this.options.size / 10), (0, n.AddOutline)({
                                view: r.view,
                                options: {
                                    outlineColor: _r(o).Display.Color.HexStringToColor(this.options.outlineColor).color,
                                    thickness: t
                                }
                            });
                        }
                    }
                }), this.part.view.alpha = this.getAlpha();
            }), (0, e.default)(this, 'getAlpha', () => (0, g.InPreGamePhase)() ? (0, f.isSavedVersion)() || this.options.visibleOnGameStart ? 1 : 0 : this.state.visible ? 1 : 0), (0, e.default)(this, 'setupVisualEditing', () => {
                if (!(0, g.InPreGamePhase)() || !(0, f.isSavedVersion)())
                    return;
                const _r = (0, k.FetchOptionSchemaProperty)(this, 'size');
                this.visualEditing.add.box({
                    width: this.options.size,
                    height: this.options.size,
                    angle: this.options.angle,
                    minWidth: _r.min,
                    maxWidth: _r.max,
                    minHeight: _r.min,
                    maxHeight: _r.max,
                    rotable: !0,
                    keepRatio: !0,
                    onChange: _r => {
                        (0, j.ReplaceVisualEditingPreview)(_r.x, _r.y, {
                            size: _r.width,
                            angle: _r.angle
                        });
                    }
                });
            }), (0, e.default)(this, 'onStateChange', _b => {
                'visible' === _b && (this.part.view.alpha = this.getAlpha());
            }), this.setupVisualEditing(), this.createVisuals();
        }
    }
    var _q = p;
}), a.register('SiQeJ', function(_b, c) {
    let d;
    var e;
    _f(_b.exports, 'OutlineSizeOption', function() {
        return d;
    }), (e = d || (d = {})).automatic = 'automatic', e.custom = 'custom';
}), a.register('IFO6W13', function(b, c) {
    _f(b.exports, 'ReplaceVisualEditingPreview', function() {
        return _h;
    });
    var d = a('HqwPM'),
        e = a('+oovY4'),
        f = a('A17vD'),
        g = a('HXXiu');
    const _h = (b, _f, a) => {
        const i = (0, g.FetchVisualEditingPreview)(),
            j = (0, f.FetchCurrentlyEditedDevice)();
        if (!j || !i)
            return;
        const k = j.layers.isOnNaturalDepth() ? void 0 : _f + j.layers.getDepthShift();
        (0, e.default)({
            deviceOption: i.deviceOption,
            id: d.VisualEditingConstants.previewId,
            x: b,
            y: _f,
            depth: k,
            layerId: j.layers.getLayer(),
            name: i.name,
            isPreview: !0,
            options: {
                ...i.options,
                ...a
            },
            placedByClient: !0,
            state: i.deviceOption.defaultState
        });
    };
}), a.register('+oovY4', function(b, c) {
    _f(b.exports, 'default', function() {
        return _f;
    });
    var d = a('D5xLI'),
        e = a('aIyMH');
    var _f = b => {
        (0, d.default)().worldManager.devices.getDeviceById(b.id) && (0, e.default)(b);
    };
}), a.register('R2Ucl10', function(b, c) {
    _f(b.exports, 'FetchOptionSchemaProperty', function() {
        return _d;
    });
    const _d = (b, _f) => {
        var e, f, g;
        const h = b.deviceOption.optionSchema.options.find(b => b.key === _f);
        return {
            min: null === (e = null == h ? void 0 : h.option.props) || void 0 === e ? void 0 : e.min,
            max: null === (f = null == h ? void 0 : h.option.props) || void 0 === f ? void 0 : f.max,
            step: null === (g = null == h ? void 0 : h.option.props) || void 0 === g ? void 0 : g.step
        };
    };
}), a.register('2M6xn', function(b, c) {
    _f(b.exports, 'BaseAsset', function() {
        return _e;
    }), _f(b.exports, 'UnknownItemAsset', function() {
        return _f;
    });
    var d = a('2Xvuf');
    const _e = {
            imageId: (0, d.default)('devices/item_granter/base.png'),
            imageUrl: (0, d.default)('devices/item_granter/base.png')
        },
        _f = {
            imageId: '__UNKNOWN_ITEM',
            imageUrl: (0, d.default)('devices/item_granter/question-mark-2.png')
        };
}), a.register('qMN8v', function(b, c) {
    _f(b.exports, 'AddOutline', function() {
        return _e;
    });
    var d = a('D5xLI');
    const _e = b => {
        if (!b.view || !b.view.active)
            return;
        const _f = {
                thickness: 2
            },
            g = b.options ? {
                ..._f,
                ...b.options
            } : {
                ..._f
            };
        (0, d.default)().plugins.get('rexOutlinePipeline').add(b.view, g);
    };
});