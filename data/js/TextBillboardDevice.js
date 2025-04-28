function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}

function a(b) {
    return b && b.__esModule ? b.default : b;
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('wXYDn', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _p(b.exports, 'default', function() {
        return _p;
    });
    var e = a('1bFPu'),
        f = a('I35Ay'),
        g = a('sCbH9'),
        h = a('RKoHq'),
        i = a('/pbxo'),
        j = a('D5xLI'),
        k = a('vfR2b'),
        l = a('9tz3H'),
        m = a('IFO6W13'),
        n = a('R2Ucl10');
    class o extends f.default {
        constructor(_p) {
            super(_p), (0, e.default)(this, 'createVisuals', () => {
                if (this.isDestroyed)
                    return;
                const q = (0, g.isGoogleFontLoaded)(this.options.googleFont),
                    r = (0, j.default)().cameraHelper.zoom,
                    s = 1 / r;
                let t = {
                    fontSize: `${ this.options.fontSize * r }px`,
                    align: 'center',
                    fontFamily: q ? `"${ this.options.googleFont }"` : 'Roboto',
                    color: this.state.textColor || this.options.color
                };
                this.options.strokeThickness && this.options.strokeColor && (t.strokeThickness = this.options.strokeThickness * r, t.stroke = this.options.strokeColor);
                let u = this.state.text || this.options.text;
                u || (0, l.isSavedVersion)() && (u = 'Text Here'), this.text = this.parts.add.text({
                    text: u,
                    textStyle: t
                }), this.text.view.scale = s, this.text.view.angle = this.options.rotation, !q && this.options.googleFont ? (0, g.default)({
                    familyName: this.options.googleFont,
                    onLoad: () => {
                        this.isDestroyed || (this.text.view.setFontFamily(`"${ this.options.googleFont }"`), this.updateScale(), this.parts.show(), this.setupVisualEditing());
                    }
                }) : (this.parts.show(), this.setupVisualEditing()), this.text.view.setAlpha(this.getAlpha());
            }), (0, e.default)(this, 'onUpdate', () => {
                this.currentScale !== this.neededScale && this.cull.isInsideView && this.updateScale();
            }), (0, e.default)(this, 'getWidth', () => this.text ? this.text.view.width : 100), (0, e.default)(this, 'getHeight', () => this.text ? 2 * this.text.view.height : 100), (0, e.default)(this, 'updateScale', () => {
                const q = 1 / (0, j.default)().cameraHelper.zoom;
                this.neededScale = q, this.currentScale !== q && this.cull.isInsideView && (this.setFontSize(), this.setStroke(), this.currentScale = q, this.boundingBox.clearCached());
            }), (0, e.default)(this, 'setFontSize', () => {
                const q = this.neededScale;
                this.text.view.scale = q;
                const r = this.options.fontSize * (0, j.default)().cameraHelper.zoom,
                    s = (0, k.TextPadding)();
                this.text.view.setPadding(s, s, s, s), this.text.view.setFontSize(r);
            }), (0, e.default)(this, 'setStroke', () => {
                if (this.options.strokeThickness && this.options.strokeColor) {
                    const q = this.options.strokeThickness * (0, j.default)().cameraHelper.zoom;
                    this.text.view.setStroke(this.options.strokeColor, q);
                }
            }), (0, e.default)(this, 'getAlpha', () => (0, l.isSavedVersion)() && (0, i.InPreGamePhase)() ? this.options.alpha : (0, l.isPublishedVersion)() && (0, i.InPreGamePhase)() ? 'No' === this.options.visibleOnGameStart ? 0 : this.options.alpha : this.state.visible ? this.options.alpha : 0), (0, e.default)(this, 'onStateChange', _p => {
                if (this.text) {
                    if ('visible' === _p) {
                        if (!(0, i.InGamePhase)())
                            return;
                        this.tweens.add({
                            targets: [this.text.view],
                            alpha: this.getAlpha(),
                            duration: h.default.Animation.Visibility.DurationMS,
                            ease: h.default.Animation.Visibility.Ease
                        });
                    } else
                        'text' === _p ? this.text.view.setText(this.state.text) : 'textColor' === _p && this.text.view.setColor(this.state.textColor);
                    this.updateScale();
                }
            }), (0, e.default)(this, 'setupVisualEditing', () => {
                if (!(0, i.InPreGamePhase)() || !(0, l.isSavedVersion)())
                    return;
                if (this.visualEditing.uses())
                    return;
                const q = (0, n.FetchOptionSchemaProperty)(this, 'fontSize'),
                    r = this.getWidth() * q.min / this.options.fontSize,
                    s = this.getWidth() * q.max / this.options.fontSize,
                    t = this.getHeight() * q.min / this.options.fontSize,
                    u = this.getHeight() * q.max / this.options.fontSize;
                this.visualEditing.add.box({
                    width: 2 * this.getWidth(),
                    height: this.getHeight(),
                    angle: this.options.rotation,
                    minWidth: r,
                    maxWidth: s,
                    minHeight: t,
                    maxHeight: u,
                    onChange: q => {
                        (0, m.ReplaceVisualEditingPreview)(q.x, q.y, {
                            rotation: q.angle,
                            fontSize: q.height / this.getHeight() * this.options.fontSize
                        });
                    }
                });
            }), this.createVisuals();
        }
    }
    var _p = o;
}), a.register('sCbH9', function(b, c) {
    t(b.exports, 'isGoogleFontLoaded', function() {
        return _f;
    }), t(b.exports, 'default', function() {
        return _g;
    });
    var d = a('/oq/k');
    const e = [],
        _f = t => e.includes(t);
    var _g = t => {
        const {
            familyName: h,
            onLoad: i
        } = t;
        e.includes(h) ? i && i() : _b(d).load({
            google: {
                families: [`${ h }:400,700`]
            },
            fontactive: t => {
                e.includes(t) || e.push(t), h === t && i && i();
            }
        });
    };
}), a.register('RKoHq', function(b, c) {
    t(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        TextStyle: {
            BorderWidth: 3,
            BorderRadius: 8
        },
        Animation: {
            Visibility: {
                DurationMS: 400,
                Ease: _b(a('8WvaZ')).Math.Easing.Linear
            }
        }
    };
}), a.register('vfR2b', function(_b, c) {
    t(_b.exports, 'TextPadding', function() {
        return _d;
    });
    const _d = () => 4;
}), a.register('IFO6W13', function(b, c) {
    t(b.exports, 'ReplaceVisualEditingPreview', function() {
        return _h;
    });
    var d = a('HqwPM'),
        e = a('+oovY4'),
        f = a('A17vD'),
        g = a('HXXiu');
    const _h = (t, b, a) => {
        const i = (0, g.FetchVisualEditingPreview)(),
            j = (0, f.FetchCurrentlyEditedDevice)();
        if (!j || !i)
            return;
        const k = j.layers.isOnNaturalDepth() ? void 0 : b + j.layers.getDepthShift();
        (0, e.default)({
            deviceOption: i.deviceOption,
            id: d.VisualEditingConstants.previewId,
            x: t,
            y: b,
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
    t(b.exports, 'default', function() {
        return _f;
    });
    var d = a('D5xLI'),
        e = a('aIyMH');
    var _f = t => {
        (0, d.default)().worldManager.devices.getDeviceById(t.id) && (0, e.default)(t);
    };
}), a.register('R2Ucl10', function(b, c) {
    t(b.exports, 'FetchOptionSchemaProperty', function() {
        return _d;
    });
    const _d = (t, b) => {
        var e, f, g;
        const h = t.deviceOption.optionSchema.options.find(t => t.key === b);
        return {
            min: null === (e = null == h ? void 0 : h.option.props) || void 0 === e ? void 0 : e.min,
            max: null === (f = null == h ? void 0 : h.option.props) || void 0 === f ? void 0 : f.max,
            step: null === (g = null == h ? void 0 : h.option.props) || void 0 === g ? void 0 : g.step
        };
    };
});