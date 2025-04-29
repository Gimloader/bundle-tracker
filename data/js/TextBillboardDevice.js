function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}

function b(c) {
    return c && c.__esModule ? c.default : c;
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('+88wj', function(d, e) {
    var f;
    f = d.exports, Object.defineProperty(f, '__esModule', {
        value: !0,
        configurable: !0
    }), a(d.exports, 'default', function() {
        return _r;
    });
    var g = c('s/YA9'),
        h = c('ltxDW'),
        i = c('bMaPZ2'),
        j = c('vDEcc'),
        k = c('UkCpC'),
        l = c('heTaO'),
        m = c('lnsH90'),
        n = c('hycyg'),
        o = c('u/WlI21'),
        p = c('uc4mA17');
    class q extends h.default {
        constructor(r) {
            super(r), (0, g.default)(this, 'createVisuals', () => {
                if (this.isDestroyed)
                    return;
                const s = (0, i.isGoogleFontLoaded)(this.options.googleFont),
                    t = (0, l.default)().cameraHelper.zoom,
                    u = 1 / t;
                let v = {
                    fontSize: `${ this.options.fontSize * t }px`,
                    align: 'center',
                    fontFamily: s ? `"${ this.options.googleFont }"` : 'Roboto',
                    color: this.state.textColor || this.options.color
                };
                this.options.strokeThickness && this.options.strokeColor && (v.strokeThickness = this.options.strokeThickness * t, v.stroke = this.options.strokeColor);
                let w = this.state.text || this.options.text;
                w || (0, n.isSavedVersion)() && (w = 'Text Here'), this.text = this.parts.add.text({
                    text: w,
                    textStyle: v
                }), this.text.view.scale = u, this.text.view.angle = this.options.rotation, !s && this.options.googleFont ? (0, i.default)({
                    familyName: this.options.googleFont,
                    onLoad: () => {
                        this.isDestroyed || (this.text.view.setFontFamily(`"${ this.options.googleFont }"`), this.updateScale(), this.parts.show(), this.setupVisualEditing());
                    }
                }) : (this.parts.show(), this.setupVisualEditing()), this.text.view.setAlpha(this.getAlpha());
            }), (0, g.default)(this, 'onUpdate', () => {
                this.currentScale !== this.neededScale && this.cull.isInsideView && this.updateScale();
            }), (0, g.default)(this, 'getWidth', () => this.text ? this.text.view.width : 100), (0, g.default)(this, 'getHeight', () => this.text ? 2 * this.text.view.height : 100), (0, g.default)(this, 'updateScale', () => {
                const s = 1 / (0, l.default)().cameraHelper.zoom;
                this.neededScale = s, this.currentScale !== s && this.cull.isInsideView && (this.setFontSize(), this.setStroke(), this.currentScale = s, this.boundingBox.clearCached());
            }), (0, g.default)(this, 'setFontSize', () => {
                const s = this.neededScale;
                this.text.view.scale = s;
                const t = this.options.fontSize * (0, l.default)().cameraHelper.zoom,
                    u = (0, m.TextPadding)();
                this.text.view.setPadding(u, u, u, u), this.text.view.setFontSize(t);
            }), (0, g.default)(this, 'setStroke', () => {
                if (this.options.strokeThickness && this.options.strokeColor) {
                    const s = this.options.strokeThickness * (0, l.default)().cameraHelper.zoom;
                    this.text.view.setStroke(this.options.strokeColor, s);
                }
            }), (0, g.default)(this, 'getAlpha', () => (0, n.isSavedVersion)() && (0, k.InPreGamePhase)() ? this.options.alpha : (0, n.isPublishedVersion)() && (0, k.InPreGamePhase)() ? 'No' === this.options.visibleOnGameStart ? 0 : this.options.alpha : this.state.visible ? this.options.alpha : 0), (0, g.default)(this, 'onStateChange', r => {
                if (this.text) {
                    if ('visible' === r) {
                        if (!(0, k.InGamePhase)())
                            return;
                        this.tweens.add({
                            targets: [this.text.view],
                            alpha: this.getAlpha(),
                            duration: j.default.Animation.Visibility.DurationMS,
                            ease: j.default.Animation.Visibility.Ease
                        });
                    } else
                        'text' === r ? this.text.view.setText(this.state.text) : 'textColor' === r && this.text.view.setColor(this.state.textColor);
                    this.updateScale();
                }
            }), (0, g.default)(this, 'setupVisualEditing', () => {
                if (!(0, k.InPreGamePhase)() || !(0, n.isSavedVersion)())
                    return;
                if (this.visualEditing.uses())
                    return;
                const s = (0, p.FetchOptionSchemaProperty)(this, 'fontSize'),
                    t = this.getWidth() * s.min / this.options.fontSize,
                    u = this.getWidth() * s.max / this.options.fontSize,
                    v = this.getHeight() * s.min / this.options.fontSize,
                    w = this.getHeight() * s.max / this.options.fontSize;
                this.visualEditing.add.box({
                    width: 2 * this.getWidth(),
                    height: this.getHeight(),
                    angle: this.options.rotation,
                    minWidth: t,
                    maxWidth: u,
                    minHeight: v,
                    maxHeight: w,
                    onChange: s => {
                        (0, o.ReplaceVisualEditingPreview)(s.x, s.y, {
                            rotation: s.angle,
                            fontSize: s.height / this.getHeight() * this.options.fontSize
                        });
                    }
                });
            }), this.createVisuals();
        }
    }
    var _r = q;
}), c.register('bMaPZ2', function(d, e) {
    a(d.exports, 'isGoogleFontLoaded', function() {
        return _h;
    }), a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('TptDc');
    const g = [],
        _h = a => g.includes(a);
    var _i = a => {
        const {
            familyName: j,
            onLoad: k
        } = a;
        g.includes(j) ? k && k() : b(f).load({
            google: {
                families: [`${ j }:400,700`]
            },
            fontactive: a => {
                g.includes(a) || g.push(a), j === a && k && k();
            }
        });
    };
}), c.register('vDEcc', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
        TextStyle: {
            BorderWidth: 3,
            BorderRadius: 8
        },
        Animation: {
            Visibility: {
                DurationMS: 400,
                Ease: b(c('ddhGF')).Math.Easing.Linear
            }
        }
    };
}), c.register('lnsH90', function(d, e) {
    a(d.exports, 'TextPadding', function() {
        return _f;
    });
    const _f = () => 4;
}), c.register('u/WlI21', function(d, e) {
    a(d.exports, 'ReplaceVisualEditingPreview', function() {
        return _j;
    });
    var f = c('hemXM'),
        g = c('sWmxu5'),
        h = c('EzUqb'),
        i = c('GQMbT');
    const _j = (a, d, c) => {
        const k = (0, i.FetchVisualEditingPreview)(),
            l = (0, h.FetchCurrentlyEditedDevice)();
        if (!l || !k)
            return;
        const m = l.layers.isOnNaturalDepth() ? void 0 : d + l.layers.getDepthShift();
        (0, g.default)({
            deviceOption: k.deviceOption,
            id: f.VisualEditingConstants.previewId,
            x: a,
            y: d,
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
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('heTaO'),
        g = c('2LtPo');
    var _h = a => {
        (0, f.default)().worldManager.devices.getDeviceById(a.id) && (0, g.default)(a);
    };
}), c.register('uc4mA17', function(d, e) {
    a(d.exports, 'FetchOptionSchemaProperty', function() {
        return _f;
    });
    const _f = (a, d) => {
        var g, h, i;
        const j = a.deviceOption.optionSchema.options.find(a => a.key === d);
        return {
            min: null === (g = null == j ? void 0 : j.option.props) || void 0 === g ? void 0 : g.min,
            max: null === (h = null == j ? void 0 : j.option.props) || void 0 === h ? void 0 : h.max,
            step: null === (i = null == j ? void 0 : j.option.props) || void 0 === i ? void 0 : i.step
        };
    };
});