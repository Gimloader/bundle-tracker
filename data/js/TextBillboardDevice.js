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
c.register('.....', function (d, e) {
    var f;
    f = d.exports, Object.defineProperty(f, '__esModule', {
        value: !0,
        configurable: !0
    }), a(d.exports, 'default', function () {
        return _r;
    });
    var g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....');
    class q extends h.default {
        constructor(r) {
            super(r), (0, g.default)(this, 'createVisuals', () => {
                if (this.isDestroyed)
                    return;
                const s = (0, i.isGoogleFontLoaded)(this.options.googleFont), t = (0, l.default)().cameraHelper.zoom, u = 1 / t;
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
                const t = this.options.fontSize * (0, l.default)().cameraHelper.zoom, u = (0, m.TextPadding)();
                this.text.view.setPadding(u, u, u, u), this.text.view.setFontSize(t);
            }), (0, g.default)(this, 'setStroke', () => {
                if (this.options.strokeThickness && this.options.strokeColor) {
                    const s = this.options.strokeThickness * (0, l.default)().cameraHelper.zoom;
                    this.text.view.setStroke(this.options.strokeColor, s);
                }
            }), (0, g.default)(this, 'getAlpha', () => (0, n.isSavedVersion)() && (0, k.InPreGamePhase)() ? this.options.alpha : (0, n.isPublishedVersion)() && (0, k.InPreGamePhase)() ? 'No' === this.options.visibleOnGameStart ? 0 : this.options.alpha : this.state.visible ? this.options.alpha : 0), (0, g.default)(this, 'onStateChange', s => {
                if (this.text) {
                    if ('visible' === s) {
                        if (!(0, k.InGamePhase)())
                            return;
                        this.tweens.add({
                            targets: [this.text.view],
                            alpha: this.getAlpha(),
                            duration: j.default.Animation.Visibility.DurationMS,
                            ease: j.default.Animation.Visibility.Ease
                        });
                    } else
                        'text' === s ? this.text.view.setText(this.state.text) : 'textColor' === s && this.text.view.setColor(this.state.textColor);
                    this.updateScale();
                }
            }), (0, g.default)(this, 'setupVisualEditing', () => {
                if (!(0, k.InPreGamePhase)() || !(0, n.isSavedVersion)())
                    return;
                if (this.visualEditing.uses())
                    return;
                const s = (0, p.FetchOptionSchemaProperty)(this, 'fontSize'), t = this.getWidth() * s.min / this.options.fontSize, u = this.getWidth() * s.max / this.options.fontSize, v = this.getHeight() * s.min / this.options.fontSize, w = this.getHeight() * s.max / this.options.fontSize;
                this.visualEditing.add.box({
                    width: 2 * this.getWidth(),
                    height: this.getHeight(),
                    angle: this.options.rotation,
                    minWidth: t,
                    maxWidth: u,
                    minHeight: v,
                    maxHeight: w,
                    onChange: x => {
                        (0, o.ReplaceVisualEditingPreview)(x.x, x.y, {
                            rotation: x.angle,
                            fontSize: x.height / this.getHeight() * this.options.fontSize
                        });
                    }
                });
            }), this.createVisuals();
        }
    }
    var _r = q;
}), c.register('.....', function (d, e) {
    a(d.exports, 'isGoogleFontLoaded', function () {
        return _h;
    }), a(d.exports, 'default', function () {
        return _i;
    });
    var f = c('.....');
    const g = [], _h = i => g.includes(i);
    var _i = j => {
        const {
            familyName: k,
            onLoad: l
        } = j;
        g.includes(k) ? l && l() : b(f).load({
            google: { families: [`${ k }:400,700`] },
            fontactive: m => {
                g.includes(m) || g.push(m), k === m && l && l();
            }
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
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
                Ease: b(c('.....')).Math.Easing.Linear
            }
        }
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'TextPadding', function () {
        return _f;
    });
    const _f = () => 4;
}), c.register('.....', function (d, e) {
    a(d.exports, 'ReplaceVisualEditingPreview', function () {
        return _j;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....');
    const _j = (k, l, m) => {
        const n = (0, i.FetchVisualEditingPreview)(), o = (0, h.FetchCurrentlyEditedDevice)();
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
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....');
    var _h = i => {
        (0, f.default)().worldManager.devices.getDeviceById(i.id) && (0, g.default)(i);
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'FetchOptionSchemaProperty', function () {
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
});