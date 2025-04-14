function e(e, t, i, n) {
    Object.defineProperty(e, t, {
        get: i,
        set: n,
        enumerable: !0,
        configurable: !0
    })
}
var t = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
t.register("dWgT2", (function(i, n) {
    var o;
    o = i.exports, Object.defineProperty(o, "__esModule", {
        value: !0,
        configurable: !0
    }), e(i.exports, "ZombieSpawnZoneDevice", (function() {
        return g
    })), e(i.exports, "default", (function() {
        return m
    }));
    var r = t("divCp"),
        s = t("36IJb"),
        a = t("4uojN"),
        d = t("6Tpu2"),
        l = t("lzcjW"),
        h = t("bNmF9"),
        u = t("050o1"),
        p = t("cK78N"),
        c = t("cnijD"),
        f = t("bvStP"),
        v = t("4Dzly");
    class g extends h.default {
        getAlpha() {
            return (0, d.InGamePhase)() ? 0 : (0, a.isPublishedVersion)() || (0, a.isSavedVersion)() && l.default.shouldShowInnerZone(this) ? 1 : 0
        }
        constructor(e) {
            if (super(e), (0, r.default)(this, "updatePartAlpha", (e => {
                    const t = this.getAlpha();
                    (0, d.InGamePhase)() && e.updateAlpha(t > 0 ? 1 : 0)
                })), (0, r.default)(this, "updateAlpha", (() => {
                    const e = this.getAlpha();
                    (0, d.InGamePhase)() && this.parts.forEach((t => {
                        t.updateAlpha(e > 0 ? 1 : 0)
                    })), this.rect && this.rect.updateAlpha(e)
                })), (0, r.default)(this, "setupVisualEditing", (() => {
                    if (!(0, d.InPreGamePhase)() || !(0, a.isSavedVersion)()) return;
                    const e = (0, p.FetchOptionSchemaProperty)(this, "width"),
                        t = (0, p.FetchOptionSchemaProperty)(this, "height");
                    (0, p.FetchOptionSchemaProperty)(this, "rotation");
                    this.visualEditing.add.box({
                        width: this.options.width,
                        height: this.options.height,
                        angle: this.options.rotation,
                        rotable: !0,
                        minWidth: e.min,
                        maxWidth: e.max,
                        minHeight: t.min,
                        maxHeight: t.max,
                        keepRatio: !1,
                        onChange: e => {
                            (0, c.ReplaceVisualEditingPreview)(e.x, e.y, {
                                width: e.width,
                                height: e.height,
                                rotation: e.angle
                            })
                        }
                    })
                })), (0, d.InPreGamePhase)() && (0, a.isSavedVersion)()) {
                this.parts.add.sprite({
                    ...v.IconAsset,
                    depthChange: (0, u.default)(2)
                }).view.setScale(.17)
            }
            if ((0, d.InGamePhase)() || (0, a.isPublishedVersion)() ? 0 : l.default.shouldShow(this)) {
                this.setupVisualEditing();
                const e = (0, s.GetNumberFromHexColor)("#00FF00");
                this.rect = this.parts.add.rect({
                    color: e,
                    layerId: f.default.DevicesUnderCharacters,
                    alpha: this.getAlpha(),
                    width: Math.abs(this.options.width),
                    height: Math.abs(this.options.height),
                    borderColor: e,
                    borderAlpha: (0, d.InGamePhase)() || (0, a.isPublishedVersion)() ? 0 : 1,
                    borderWidth: 4,
                    depthChange: (0, u.default)(1),
                    ignoreInput: !0,
                    angle: this.options.rotation
                })
            }
        }
    }
    var m = g
})), t.register("lzcjW", (function(i, n) {
    e(i.exports, "ZonedDeviceDisplayOptions", (function() {
        return r
    })), e(i.exports, "default", (function() {
        return d
    }));
    var o = t("j8szt");
    let r;
    var s;
    (s = r || (r = {})).visible = "visible", s.bordersOnly = "bordersOnly", s.fullyHidden = "fullyHidden";
    const a = () => {
        const e = localStorage.getItem(o.default.zonedDeviceViews);
        return e || r.bordersOnly
    };
    var d = {
        shouldShow: e => a() !== r.fullyHidden,
        shouldShowInnerZone: e => a() !== r.bordersOnly
    }
})), t.register("j8szt", (function(t, i) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = {
        zonedDeviceViews: "zoned-device-views"
    }
})), t.register("cK78N", (function(t, i) {
    e(t.exports, "FetchOptionSchemaProperty", (function() {
        return n
    }));
    const n = (e, t) => {
        var i, n, o;
        const r = e.deviceOption.optionSchema.options.find((e => e.key === t));
        return {
            min: null === (i = null == r ? void 0 : r.option.props) || void 0 === i ? void 0 : i.min,
            max: null === (n = null == r ? void 0 : r.option.props) || void 0 === n ? void 0 : n.max,
            step: null === (o = null == r ? void 0 : r.option.props) || void 0 === o ? void 0 : o.step
        }
    }
})), t.register("cnijD", (function(i, n) {
    e(i.exports, "ReplaceVisualEditingPreview", (function() {
        return d
    }));
    var o = t("dWqri"),
        r = t("eCsxR"),
        s = t("ittx1"),
        a = t("dNzyU");
    const d = (e, t, i) => {
        const n = (0, a.FetchVisualEditingPreview)(),
            d = (0, s.FetchCurrentlyEditedDevice)();
        if (!d || !n) return;
        const l = d.layers.isOnNaturalDepth() ? void 0 : t + d.layers.getDepthShift();
        (0, r.default)({
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
        return s
    }));
    var o = t("gwuwo"),
        r = t("fCcDT");
    var s = e => {
        (0, o.default)().worldManager.devices.getDeviceById(e.id) && (0, r.default)(e)
    }
})), t.register("4Dzly", (function(i, n) {
    e(i.exports, "IconAsset", (function() {
        return r
    }));
    var o = t("alREA");
    const r = {
        imageId: (0, o.default)("devices/zombie_spawn_zone/icon.png"),
        imageUrl: (0, o.default)("devices/zombie_spawn_zone/icon.png")
    }
}));