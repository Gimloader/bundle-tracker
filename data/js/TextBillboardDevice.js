function a(a, b, c, s) {
    Object.defineProperty(a, b, {
        get: c,
        set: s,
        enumerable: !0,
        configurable: !0
    });
}

function b(a) {
    return a && a.__esModule ? a.default : a;
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('Rv/4f', function(b, s) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), a(b.exports, 'default', function() {
        return p;
    });
    var e = c('UM8oI'),
        f = c('sgILU'),
        g = c('crVjo2'),
        h = c('IuVhK'),
        i = c('5Ux1a'),
        j = c('dAmf5'),
        k = c('qxeBa0'),
        l = c('Bpt+p'),
        m = c('wSwKo5'),
        n = c('/Lvpl17');
    class o extends f.default {
        constructor(a) {
            super(a), (0, e.default)(this, 'createVisuals', () => {
                if (this.isDestroyed)
                    return;
                const p = (0, g.isGoogleFontLoaded)(this.options.googleFont),
                    q = (0, j.default)().cameraHelper.zoom,
                    r = 1 / q;
                let s = {
                    fontSize: `${ this.options.fontSize * q }px`,
                    align: 'center',
                    fontFamily: p ? `"${ this.options.googleFont }"` : 'Roboto',
                    color: this.state.textColor || this.options.color
                };
                this.options.strokeThickness && this.options.strokeColor && (s.strokeThickness = this.options.strokeThickness * q, s.stroke = this.options.strokeColor);
                let t = this.state.text || this.options.text;
                t || (0, l.isSavedVersion)() && (t = 'Text Here'), this.text = this.parts.add.text({
                    text: t,
                    textStyle: s
                }), this.text.view.scale = r, this.text.view.angle = this.options.rotation, !p && this.options.googleFont ? (0, g.default)({
                    familyName: this.options.googleFont,
                    onLoad: () => {
                        this.isDestroyed || (this.text.view.setFontFamily(`"${ this.options.googleFont }"`), this.updateScale(), this.parts.show(), this.setupVisualEditing());
                    }
                }) : (this.parts.show(), this.setupVisualEditing()), this.text.view.setAlpha(this.getAlpha());
            }), (0, e.default)(this, 'onUpdate', () => {
                this.currentScale !== this.neededScale && this.cull.isInsideView && this.updateScale();
            }), (0, e.default)(this, 'getWidth', () => this.text ? this.text.view.width : 100), (0, e.default)(this, 'getHeight', () => this.text ? 2 * this.text.view.height : 100), (0, e.default)(this, 'updateScale', () => {
                const p = 1 / (0, j.default)().cameraHelper.zoom;
                this.neededScale = p, this.currentScale !== p && this.cull.isInsideView && (this.setFontSize(), this.setStroke(), this.currentScale = p, this.boundingBox.clearCached());
            }), (0, e.default)(this, 'setFontSize', () => {
                const p = this.neededScale;
                this.text.view.scale = p;
                const q = this.options.fontSize * (0, j.default)().cameraHelper.zoom,
                    r = (0, k.TextPadding)();
                this.text.view.setPadding(r, r, r, r), this.text.view.setFontSize(q);
            }), (0, e.default)(this, 'setStroke', () => {
                if (this.options.strokeThickness && this.options.strokeColor) {
                    const p = this.options.strokeThickness * (0, j.default)().cameraHelper.zoom;
                    this.text.view.setStroke(this.options.strokeColor, p);
                }
            }), (0, e.default)(this, 'getAlpha', () => (0, l.isSavedVersion)() && (0, i.InPreGamePhase)() ? this.options.alpha : (0, l.isPublishedVersion)() && (0, i.InPreGamePhase)() ? 'No' === this.options.visibleOnGameStart ? 0 : this.options.alpha : this.state.visible ? this.options.alpha : 0), (0, e.default)(this, 'onStateChange', a => {
                if (this.text) {
                    if ('visible' === a) {
                        if (!(0, i.InGamePhase)())
                            return;
                        this.tweens.add({
                            targets: [this.text.view],
                            alpha: this.getAlpha(),
                            duration: h.default.Animation.Visibility.DurationMS,
                            ease: h.default.Animation.Visibility.Ease
                        });
                    } else
                        'text' === a ? this.text.view.setText(this.state.text) : 'textColor' === a && this.text.view.setColor(this.state.textColor);
                    this.updateScale();
                }
            }), (0, e.default)(this, 'setupVisualEditing', () => {
                if (!(0, i.InPreGamePhase)() || !(0, l.isSavedVersion)())
                    return;
                if (this.visualEditing.uses())
                    return;
                const p = (0, n.FetchOptionSchemaProperty)(this, 'fontSize'),
                    q = this.getWidth() * p.min / this.options.fontSize,
                    r = this.getWidth() * p.max / this.options.fontSize,
                    s = this.getHeight() * p.min / this.options.fontSize,
                    t = this.getHeight() * p.max / this.options.fontSize;
                this.visualEditing.add.box({
                    width: 2 * this.getWidth(),
                    height: this.getHeight(),
                    angle: this.options.rotation,
                    minWidth: q,
                    maxWidth: r,
                    minHeight: s,
                    maxHeight: t,
                    onChange: p => {
                        (0, m.ReplaceVisualEditingPreview)(p.x, p.y, {
                            rotation: p.angle,
                            fontSize: p.height / this.getHeight() * this.options.fontSize
                        });
                    }
                });
            }), this.createVisuals();
        }
    }
    var p = q;
}), c.register('crVjo2', function(i, d) {
    a(i.exports, 'isGoogleFontLoaded', function() {
        return f;
    }), a(i.exports, 'default', function() {
        return g;
    });
    var d = c('2qGsE');
    const e = [],
        f = a => e.includes(a);
    var g = a => {
        const {
            familyName: h,
            onLoad: i
        } = j;
        e.includes(h) ? i && i() : b(d).load({
            google: {
                families: [`${ h }:400,700`]
            },
            fontactive: j => {
                e.includes(j) || e.push(j), h === j && i && i();
            }
        });
    };
}), c.register('IuVhK', function(d, d) {
    a(d.exports, 'default', function() {
        return d;
    });
    var d = {
        TextStyle: {
            BorderWidth: 3,
            BorderRadius: 8
        },
        Animation: {
            Visibility: {
                DurationMS: 400,
                Ease: b(c('kneek')).Math.Easing.Linear
            }
        }
    };
}), c.register('qxeBa0', function(b, c) {
    a(b.exports, 'TextPadding', function() {
        return d;
    });
    const d = () => 4;
}), c.register('wSwKo5', function(b, i) {
    a(b.exports, 'ReplaceVisualEditingPreview', function() {
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
}), c.register('Am0b71', function(b, d) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('dAmf5'),
        e = c('jgFbX');
    var f = a => {
        (0, d.default)().worldManager.devices.getDeviceById(a.id) && (0, e.default)(a);
    };
}), c.register('/Lvpl17', function(b, c) {
    a(b.exports, 'FetchOptionSchemaProperty', function() {
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
});