function e(e, t, i, n) {
    Object.defineProperty(e, t, {
        get: i,
        set: n,
        enumerable: !0,
        configurable: !0
    })
}
var t = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
t.register("8kbXL", (function(i, n) {
    var o;
    o = i.exports, Object.defineProperty(o, "__esModule", {
        value: !0,
        configurable: !0
    }), e(i.exports, "default", (function() {
        return w
    }));
    var r = t("divCp"),
        s = t("4uojN"),
        a = t("cnijD"),
        d = t("cK78N"),
        l = t("6Tpu2"),
        u = t("lzcjW"),
        c = t("bNmF9"),
        h = t("gL2n6"),
        p = t("c7SnZ"),
        f = t("dPNN3"),
        v = t("h6SIm"),
        g = t("alREA");
    class y extends c.default {
        constructor(e) {
            if (super(e), (0, r.default)(this, "setupVisualEditing", (() => {
                    if (!(0, l.InPreGamePhase)() || !(0, s.isSavedVersion)()) return;
                    const e = (0, d.FetchOptionSchemaProperty)(this, "width"),
                        t = (0, d.FetchOptionSchemaProperty)(this, "height");
                    this.visualEditing.add.box({
                        width: this.options.width,
                        height: this.options.height,
                        minWidth: e.min,
                        maxWidth: e.max,
                        minHeight: t.min,
                        maxHeight: t.max,
                        rotable: !1,
                        keepRatio: !1,
                        onChange: e => {
                            (0, a.ReplaceVisualEditingPreview)(e.x, e.y, {
                                width: e.width,
                                height: e.height
                            })
                        }
                    })
                })), !(0, l.InGamePhase)() && !(0, s.isPublishedVersion)())
                if (this.options.detectionArea !== p.DetectionArea.everywhere) {
                    if (this.setupVisualEditing(), u.default.shouldShow(this)) {
                        this.layers.forceDepthManually(0);
                        this.parts.add.sprite(h.ZoneIcon).view.setScale(.15), this.parts.add.rect({
                            color: 4435243,
                            alpha: u.default.shouldShowInnerZone(this) ? .2 : 0,
                            borderAlpha: 1,
                            width: Math.abs(this.options.width),
                            height: Math.abs(this.options.height),
                            borderColor: 4435243,
                            borderWidth: 4,
                            ignoreInput: !0
                        })
                    }
                } else {
                    const e = v.default.Manager;
                    new(0, f.default)({
                        device: this,
                        baseColor: e.baseColor,
                        boxColor: e.boxColor,
                        content: {
                            icon: {
                                image: (0, g.default)("devices/tag_zone/icon.png"),
                                scale: .8
                            }
                        }
                    })
                }
        }
    }
    var w = y
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
})), t.register("gL2n6", (function(i, n) {
    e(i.exports, "ZoneIcon", (function() {
        return r
    }));
    const o = (0, t("alREA").default)("devices/tag_zone/zone_icon.png"),
        r = {
            imageId: o,
            imageUrl: o
        }
})), t.register("c7SnZ", (function(t, i) {
    let n;
    var o;
    e(t.exports, "DetectionArea", (function() {
        return n
    })), (o = n || (n = {})).everywhere = "everywhere", o.zone = "zone"
}));