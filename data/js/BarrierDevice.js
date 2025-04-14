function e(e, i, t, o) {
    Object.defineProperty(e, i, {
        get: t,
        set: o,
        enumerable: !0,
        configurable: !0
    })
}
var i = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
i.register("du29n", (function(t, o) {
    var r;
    r = t.exports, Object.defineProperty(r, "__esModule", {
        value: !0,
        configurable: !0
    }), e(t.exports, "default", (function() {
        return v
    }));
    var s = i("divCp"),
        a = i("4uojN"),
        n = i("6Tpu2"),
        l = i("bNmF9"),
        d = i("dbslX"),
        h = i("cNwrB"),
        c = i("cnijD"),
        p = i("cK78N"),
        u = i("kbbzW");
    class g extends l.default {
        get alpha() {
            return (0, n.InPreGamePhase)() && (0, a.isSavedVersion)() || this.options.visibleInGame && this.state.active ? 1 : 0
        }
        get isCircle() {
            return this.options.shape === d.BarrierShape.circle
        }
        get isRectangle() {
            return this.options.shape === d.BarrierShape.rectangle
        }
        get color() {
            return Phaser.Display.Color.HexStringToColor(this.options.color).color
        }
        get borderWidth() {
            return this.options.showBorder ? 8 : 0
        }
        get borderColor() {
            return Phaser.Display.Color.HexStringToColor((0, h.GetContrastColor)(this.options.color)).color
        }
        constructor(e) {
            if (super(e), (0, s.default)(this, "createVisuals", (() => {
                    this.part || (this.isCircle && (this.part = this.parts.add.circle({
                        x: 0,
                        y: 0,
                        r: this.options.radius,
                        color: this.color,
                        alpha: this.options.alpha,
                        borderColor: this.borderColor,
                        borderAlpha: 1,
                        borderWidth: this.borderWidth
                    })), this.isRectangle && (this.part = this.parts.add.rect({
                        x: 0,
                        y: 0,
                        width: this.options.width,
                        height: this.options.height,
                        angle: this.options.angle,
                        color: this.color,
                        alpha: this.options.alpha,
                        borderColor: this.borderColor,
                        borderAlpha: 1,
                        borderWidth: this.borderWidth,
                        cornerRadius: 8
                    })), this.part.view.alpha = this.alpha)
                })), (0, s.default)(this, "createColliders", (() => {
                    this.options.collisionEnabled && (this.isCircle && this.colliders.add.circle({
                        x: 0,
                        y: 0,
                        r: this.options.radius
                    }), this.isRectangle && this.colliders.add.box({
                        x: 0,
                        y: 0,
                        w: this.options.width,
                        h: this.options.height,
                        angle: this.options.angle
                    }))
                })), (0, s.default)(this, "onStateChange", (e => {
                    "active" === e && (this.state.active && (0, u.default)(this), this.part.view.setAlpha(this.alpha))
                })), (0, s.default)(this, "checkIfCollidersEnabled", (() => this.state.active)), (0, n.InPreGamePhase)() && (0, a.isSavedVersion)())
                if (this.isCircle) {
                    const e = (0, p.FetchOptionSchemaProperty)(this, "radius");
                    this.visualEditing.add.circle({
                        angle: 0,
                        rotable: !1,
                        radius: this.options.radius,
                        minRadius: e.min,
                        maxRadius: e.max,
                        onChange: e => {
                            (0, c.ReplaceVisualEditingPreview)(e.x, e.y, {
                                radius: e.radius
                            })
                        }
                    })
                } else {
                    const e = (0, p.FetchOptionSchemaProperty)(this, "width"),
                        i = (0, p.FetchOptionSchemaProperty)(this, "height");
                    this.visualEditing.add.box({
                        angle: this.options.angle,
                        keepRatio: !1,
                        rotable: !0,
                        width: this.options.width,
                        height: this.options.height,
                        minWidth: e.min,
                        maxWidth: e.max,
                        minHeight: i.min,
                        maxHeight: i.max,
                        onChange: e => {
                            (0, c.ReplaceVisualEditingPreview)(e.x, e.y, {
                                width: e.width,
                                height: e.height,
                                angle: e.angle
                            })
                        }
                    })
                } this.createVisuals(), this.createColliders()
        }
    }
    var v = g
})), i.register("dbslX", (function(i, t) {
    let o;
    var r;
    e(i.exports, "BarrierShape", (function() {
        return o
    })), (r = o || (o = {})).rectangle = "rectangle", r.circle = "circle"
})), i.register("cnijD", (function(t, o) {
    e(t.exports, "ReplaceVisualEditingPreview", (function() {
        return l
    }));
    var r = i("dWqri"),
        s = i("eCsxR"),
        a = i("ittx1"),
        n = i("dNzyU");
    const l = (e, i, t) => {
        const o = (0, n.FetchVisualEditingPreview)(),
            l = (0, a.FetchCurrentlyEditedDevice)();
        if (!l || !o) return;
        const d = l.layers.isOnNaturalDepth() ? void 0 : i + l.layers.getDepthShift();
        (0, s.default)({
            deviceOption: o.deviceOption,
            id: r.VisualEditingConstants.previewId,
            x: e,
            y: i,
            depth: d,
            layerId: l.layers.getLayer(),
            name: o.name,
            isPreview: !0,
            options: {
                ...o.options,
                ...t
            },
            placedByClient: !0,
            state: o.deviceOption.defaultState
        })
    }
})), i.register("eCsxR", (function(t, o) {
    e(t.exports, "default", (function() {
        return a
    }));
    var r = i("gwuwo"),
        s = i("fCcDT");
    var a = e => {
        (0, r.default)().worldManager.devices.getDeviceById(e.id) && (0, s.default)(e)
    }
})), i.register("cK78N", (function(i, t) {
    e(i.exports, "FetchOptionSchemaProperty", (function() {
        return o
    }));
    const o = (e, i) => {
        var t, o, r;
        const s = e.deviceOption.optionSchema.options.find((e => e.key === i));
        return {
            min: null === (t = null == s ? void 0 : s.option.props) || void 0 === t ? void 0 : t.min,
            max: null === (o = null == s ? void 0 : s.option.props) || void 0 === o ? void 0 : o.max,
            step: null === (r = null == s ? void 0 : s.option.props) || void 0 === r ? void 0 : r.step
        }
    }
})), i.register("kbbzW", (function(t, o) {
    e(t.exports, "default", (function() {
        return a
    }));
    var r = i("fhnJp"),
        s = i("1UlqS");
    var a = e => {
        const i = (0, s.default)((0, r.default)());
        e.colliders.forEach((e => {
            var t, o, r;
            const s = e.bodyId;
            null === (t = null == i ? void 0 : i.physics.getBody()) || void 0 === t || null === (o = t.character) || void 0 === o || null === (r = o.ignoredStaticBodies) || void 0 === r || r.add(s)
        }))
    }
}));