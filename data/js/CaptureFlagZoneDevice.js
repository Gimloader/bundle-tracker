function e(e, t, i, n) {
    Object.defineProperty(e, t, {
        get: i,
        set: n,
        enumerable: !0,
        configurable: !0
    })
}
var t = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
t.register("7D1MP", (function(i, n) {
    var o;
    o = i.exports, Object.defineProperty(o, "__esModule", {
        value: !0,
        configurable: !0
    }), e(i.exports, "default", (function() {
        return m
    }));
    var s = t("divCp"),
        a = t("40e6M"),
        r = t("36IJb"),
        d = t("4uojN"),
        l = t("6Tpu2"),
        h = t("lzcjW"),
        u = t("bNmF9"),
        p = t("6JcXF"),
        c = t("050o1"),
        f = t("cK78N"),
        g = t("cnijD");
    class v extends u.default {
        getAlpha() {
            return (0, l.InGamePhase)() ? this.state.active ? a.ZoneConstants.alpha : 0 : (0, d.isSavedVersion)() && h.default.shouldShowInnerZone(this) ? a.ZoneConstants.alpha : 0
        }
        constructor(e) {
            if (super(e), (0, s.default)(this, "onStateChange", (e => {
                    if ("active" === e) {
                        if (this.rect && this.rect.view) {
                            const e = this.getAlpha();
                            this.rect.updateAlpha(e)
                        }
                        if (this.sprite && this.sprite.view) {
                            const e = this.getAlpha();
                            this.sprite.view.alpha = e
                        }
                    }
                })), (0, s.default)(this, "setupVisualEditing", (() => {
                    if (!(0, l.InPreGamePhase)() || !(0, d.isSavedVersion)()) return;
                    const e = (0, f.FetchOptionSchemaProperty)(this, "width"),
                        t = (0, f.FetchOptionSchemaProperty)(this, "height");
                    this.visualEditing.add.box({
                        width: this.options.width,
                        height: this.options.height,
                        angle: this.options.rotation,
                        minWidth: e.min,
                        maxWidth: e.max,
                        minHeight: t.min,
                        maxHeight: t.max,
                        keepRatio: !1,
                        onChange: e => {
                            (0, g.ReplaceVisualEditingPreview)(e.x, e.y, {
                                rotation: e.angle,
                                width: e.width,
                                height: e.height
                            })
                        }
                    })
                })), (0, l.InPreGamePhase)() && (0, d.isSavedVersion)()) {
                const e = this.parts.add.sprite({
                    ...p.BaseAsset,
                    depthChange: (0, c.default)(2)
                });
                e.view.angle = this.options.rotation, e.view.setScale(.5)
            }
            if ((0, l.InGamePhase)() || (0, d.isPublishedVersion)() ? this.options.visibleInGame : h.default.shouldShow(this)) {
                this.setupVisualEditing();
                const e = (0, r.GetNumberFromHexColor)(this.options.color);
                this.rect = this.parts.add.rect({
                    color: e,
                    alpha: this.getAlpha(),
                    width: Math.abs(this.options.width),
                    height: Math.abs(this.options.height),
                    angle: this.options.rotation,
                    borderColor: e,
                    borderAlpha: (0, l.InGamePhase)() ? 0 : 1,
                    borderWidth: 4,
                    depthChange: (0, c.default)(1),
                    ignoreInput: !0
                }), (0, l.InPreGamePhase)() && (0, d.isSavedVersion)() && (this.sprite = this.parts.add.sprite({
                    ...p.Icon,
                    depthChange: (0, c.default)(2)
                }), this.sprite.view.setScale(.1))
            }
        }
    }
    var m = v
})), t.register("40e6M", (function(t, i) {
    e(t.exports, "ZoneConstants", (function() {
        return n
    }));
    const n = {
        alpha: .5,
        activateDeactivateTime: 100
    }
})), t.register("lzcjW", (function(i, n) {
    e(i.exports, "ZonedDeviceDisplayOptions", (function() {
        return s
    })), e(i.exports, "default", (function() {
        return d
    }));
    var o = t("j8szt");
    let s;
    var a;
    (a = s || (s = {})).visible = "visible", a.bordersOnly = "bordersOnly", a.fullyHidden = "fullyHidden";
    const r = () => {
        const e = localStorage.getItem(o.default.zonedDeviceViews);
        return e || s.bordersOnly
    };
    var d = {
        shouldShow: e => r() !== s.fullyHidden,
        shouldShowInnerZone: e => r() !== s.bordersOnly
    }
})), t.register("j8szt", (function(t, i) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = {
        zonedDeviceViews: "zoned-device-views"
    }
})), t.register("6JcXF", (function(i, n) {
    e(i.exports, "BaseAsset", (function() {
        return s
    })), e(i.exports, "Icon", (function() {
        return a
    }));
    var o = t("alREA");
    const s = {
            imageId: (0, o.default)("devices/capture_flag_zone/base.png"),
            imageUrl: (0, o.default)("devices/capture_flag_zone/base.png")
        },
        a = {
            imageId: (0, o.default)("devices/capture_flag_zone/icon.png"),
            imageUrl: (0, o.default)("devices/capture_flag_zone/icon.png")
        }
})), t.register("cK78N", (function(t, i) {
    e(t.exports, "FetchOptionSchemaProperty", (function() {
        return n
    }));
    const n = (e, t) => {
        var i, n, o;
        const s = e.deviceOption.optionSchema.options.find((e => e.key === t));
        return {
            min: null === (i = null == s ? void 0 : s.option.props) || void 0 === i ? void 0 : i.min,
            max: null === (n = null == s ? void 0 : s.option.props) || void 0 === n ? void 0 : n.max,
            step: null === (o = null == s ? void 0 : s.option.props) || void 0 === o ? void 0 : o.step
        }
    }
})), t.register("cnijD", (function(i, n) {
    e(i.exports, "ReplaceVisualEditingPreview", (function() {
        return d
    }));
    var o = t("dWqri"),
        s = t("eCsxR"),
        a = t("ittx1"),
        r = t("dNzyU");
    const d = (e, t, i) => {
        const n = (0, r.FetchVisualEditingPreview)(),
            d = (0, a.FetchCurrentlyEditedDevice)();
        if (!d || !n) return;
        const l = d.layers.isOnNaturalDepth() ? void 0 : t + d.layers.getDepthShift();
        (0, s.default)({
            deviceOption: n.deviceOption,
            id: o.VisualEditingConstants.previewId,
            x: e,
            y: t,
            depth: l,
            layerId: d.layers.getLayer(),
            name: n.name,
            isPreview: !0,
            options: {
                ...n.options,
                ...i
            },
            placedByClient: !0,
            state: n.deviceOption.defaultState
        })
    }
})), t.register("eCsxR", (function(i, n) {
    e(i.exports, "default", (function() {
        return a
    }));
    var o = t("gwuwo"),
        s = t("fCcDT");
    var a = e => {
        (0, o.default)().worldManager.devices.getDeviceById(e.id) && (0, s.default)(e)
    }
}));