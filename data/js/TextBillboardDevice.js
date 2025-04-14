function t(t, e, i, s) {
    Object.defineProperty(t, e, {
        get: i,
        set: s,
        enumerable: !0,
        configurable: !0
    })
}

function e(t) {
    return t && t.__esModule ? t.default : t
}
var i = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
i.register("eKWDI", (function(e, s) {
    var o;
    o = e.exports, Object.defineProperty(o, "__esModule", {
        value: !0,
        configurable: !0
    }), t(e.exports, "default", (function() {
        return v
    }));
    var n = i("divCp"),
        a = i("bNmF9"),
        r = i("2BPYb"),
        h = i("hcPgY"),
        l = i("6Tpu2"),
        d = i("gwuwo"),
        u = i("gbYDQ"),
        c = i("4uojN"),
        p = i("cnijD"),
        f = i("cK78N");
    class g extends a.default {
        constructor(t) {
            super(t), (0, n.default)(this, "createVisuals", (() => {
                if (this.isDestroyed) return;
                const t = (0, r.isGoogleFontLoaded)(this.options.googleFont),
                    e = (0, d.default)().cameraHelper.zoom,
                    i = 1 / e;
                let s = {
                    fontSize: `${this.options.fontSize*e}px`,
                    align: "center",
                    fontFamily: t ? `"${this.options.googleFont}"` : "Roboto",
                    color: this.state.textColor || this.options.color
                };
                this.options.strokeThickness && this.options.strokeColor && (s.strokeThickness = this.options.strokeThickness * e, s.stroke = this.options.strokeColor);
                let o = this.state.text || this.options.text;
                o || (0, c.isSavedVersion)() && (o = "Text Here"), this.text = this.parts.add.text({
                    text: o,
                    textStyle: s
                }), this.text.view.scale = i, this.text.view.angle = this.options.rotation, !t && this.options.googleFont ? (0, r.default)({
                    familyName: this.options.googleFont,
                    onLoad: () => {
                        this.isDestroyed || (this.text.view.setFontFamily(`"${this.options.googleFont}"`), this.updateScale(), this.parts.show(), this.setupVisualEditing())
                    }
                }) : (this.parts.show(), this.setupVisualEditing()), this.text.view.setAlpha(this.getAlpha())
            })), (0, n.default)(this, "onUpdate", (() => {
                this.currentScale !== this.neededScale && this.cull.isInsideView && this.updateScale()
            })), (0, n.default)(this, "getWidth", (() => this.text ? this.text.view.width : 100)), (0, n.default)(this, "getHeight", (() => this.text ? 2 * this.text.view.height : 100)), (0, n.default)(this, "updateScale", (() => {
                const t = 1 / (0, d.default)().cameraHelper.zoom;
                this.neededScale = t, this.currentScale !== t && this.cull.isInsideView && (this.setFontSize(), this.setStroke(), this.currentScale = t, this.boundingBox.clearCached())
            })), (0, n.default)(this, "setFontSize", (() => {
                const t = this.neededScale;
                this.text.view.scale = t;
                const e = this.options.fontSize * (0, d.default)().cameraHelper.zoom,
                    i = (0, u.TextPadding)();
                this.text.view.setPadding(i, i, i, i), this.text.view.setFontSize(e)
            })), (0, n.default)(this, "setStroke", (() => {
                if (this.options.strokeThickness && this.options.strokeColor) {
                    const t = this.options.strokeThickness * (0, d.default)().cameraHelper.zoom;
                    this.text.view.setStroke(this.options.strokeColor, t)
                }
            })), (0, n.default)(this, "getAlpha", (() => (0, c.isSavedVersion)() && (0, l.InPreGamePhase)() ? this.options.alpha : (0, c.isPublishedVersion)() && (0, l.InPreGamePhase)() ? "No" === this.options.visibleOnGameStart ? 0 : this.options.alpha : this.state.visible ? this.options.alpha : 0)), (0, n.default)(this, "onStateChange", (t => {
                if (this.text) {
                    if ("visible" === t) {
                        if (!(0, l.InGamePhase)()) return;
                        this.tweens.add({
                            targets: [this.text.view],
                            alpha: this.getAlpha(),
                            duration: h.default.Animation.Visibility.DurationMS,
                            ease: h.default.Animation.Visibility.Ease
                        })
                    } else "text" === t ? this.text.view.setText(this.state.text) : "textColor" === t && this.text.view.setColor(this.state.textColor);
                    this.updateScale()
                }
            })), (0, n.default)(this, "setupVisualEditing", (() => {
                if (!(0, l.InPreGamePhase)() || !(0, c.isSavedVersion)()) return;
                if (this.visualEditing.uses()) return;
                const t = (0, f.FetchOptionSchemaProperty)(this, "fontSize"),
                    e = this.getWidth() * t.min / this.options.fontSize,
                    i = this.getWidth() * t.max / this.options.fontSize,
                    s = this.getHeight() * t.min / this.options.fontSize,
                    o = this.getHeight() * t.max / this.options.fontSize;
                this.visualEditing.add.box({
                    width: 2 * this.getWidth(),
                    height: this.getHeight(),
                    angle: this.options.rotation,
                    minWidth: e,
                    maxWidth: i,
                    minHeight: s,
                    maxHeight: o,
                    onChange: t => {
                        (0, p.ReplaceVisualEditingPreview)(t.x, t.y, {
                            rotation: t.angle,
                            fontSize: t.height / this.getHeight() * this.options.fontSize
                        })
                    }
                })
            })), this.createVisuals()
        }
    }
    var v = g
})), i.register("2BPYb", (function(s, o) {
    t(s.exports, "isGoogleFontLoaded", (function() {
        return r
    })), t(s.exports, "default", (function() {
        return h
    }));
    var n = i("7P9gc");
    const a = [],
        r = t => a.includes(t);
    var h = t => {
        const {
            familyName: i,
            onLoad: s
        } = t;
        a.includes(i) ? s && s() : e(n).load({
            google: {
                families: [`${i}:400,700`]
            },
            fontactive: t => {
                a.includes(t) || a.push(t), i === t && s && s()
            }
        })
    }
})), i.register("hcPgY", (function(s, o) {
    t(s.exports, "default", (function() {
        return n
    }));
    var n = {
        TextStyle: {
            BorderWidth: 3,
            BorderRadius: 8
        },
        Animation: {
            Visibility: {
                DurationMS: 400,
                Ease: e(i("c3ah8")).Math.Easing.Linear
            }
        }
    }
})), i.register("gbYDQ", (function(e, i) {
    t(e.exports, "TextPadding", (function() {
        return s
    }));
    const s = () => 4
})), i.register("cnijD", (function(e, s) {
    t(e.exports, "ReplaceVisualEditingPreview", (function() {
        return h
    }));
    var o = i("dWqri"),
        n = i("eCsxR"),
        a = i("ittx1"),
        r = i("dNzyU");
    const h = (t, e, i) => {
        const s = (0, r.FetchVisualEditingPreview)(),
            h = (0, a.FetchCurrentlyEditedDevice)();
        if (!h || !s) return;
        const l = h.layers.isOnNaturalDepth() ? void 0 : e + h.layers.getDepthShift();
        (0, n.default)({
            deviceOption: s.deviceOption,
            id: o.VisualEditingConstants.previewId,
            x: t,
            y: e,
            depth: l,
            layerId: h.layers.getLayer(),
            name: s.name,
            isPreview: !0,
            options: {
                ...s.options,
                ...i
            },
            placedByClient: !0,
            state: s.deviceOption.defaultState
        })
    }
})), i.register("eCsxR", (function(e, s) {
    t(e.exports, "default", (function() {
        return a
    }));
    var o = i("gwuwo"),
        n = i("fCcDT");
    var a = t => {
        (0, o.default)().worldManager.devices.getDeviceById(t.id) && (0, n.default)(t)
    }
})), i.register("cK78N", (function(e, i) {
    t(e.exports, "FetchOptionSchemaProperty", (function() {
        return s
    }));
    const s = (t, e) => {
        var i, s, o;
        const n = t.deviceOption.optionSchema.options.find((t => t.key === e));
        return {
            min: null === (i = null == n ? void 0 : n.option.props) || void 0 === i ? void 0 : i.min,
            max: null === (s = null == n ? void 0 : n.option.props) || void 0 === s ? void 0 : s.max,
            step: null === (o = null == n ? void 0 : n.option.props) || void 0 === o ? void 0 : o.step
        }
    }
}));