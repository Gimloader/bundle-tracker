function e(e, t, i, n) {
    Object.defineProperty(e, t, {
        get: i,
        set: n,
        enumerable: !0,
        configurable: !0
    })
}
var t = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
t.register("9DEJM", (function(i, n) {
    var r;
    r = i.exports, Object.defineProperty(r, "__esModule", {
        value: !0,
        configurable: !0
    }), e(i.exports, "default", (function() {
        return v
    }));
    var o = t("divCp"),
        s = t("4uojN"),
        a = t("cnijD"),
        d = t("cK78N"),
        l = t("6Tpu2"),
        u = t("lzcjW"),
        c = t("bNmF9"),
        h = t("lJcj3"),
        p = t("li7NF");
    class f extends c.default {
        constructor(e) {
            super(e), (0, o.default)(this, "setupVisualEditing", (() => {
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
            })), (0, l.InGamePhase)() || (this.layers.forceDepthManually(0), this.parts.add.sprite(h.BaseAsset), this.options.detectionArea !== p.DetectionArea.everywhere && u.default.shouldShow(this) && (this.setupVisualEditing(), this.parts.add.rect({
                color: 8375794,
                alpha: u.default.shouldShowInnerZone(this) ? .2 : 0,
                borderAlpha: 1,
                width: Math.abs(this.options.width),
                height: Math.abs(this.options.height),
                borderColor: 8375794,
                borderWidth: 4,
                ignoreInput: !0
            })))
        }
    }
    var v = f
})), t.register("cnijD", (function(i, n) {
    e(i.exports, "ReplaceVisualEditingPreview", (function() {
        return d
    }));
    var r = t("dWqri"),
        o = t("eCsxR"),
        s = t("ittx1"),
        a = t("dNzyU");
    const d = (e, t, i) => {
        const n = (0, a.FetchVisualEditingPreview)(),
            d = (0, s.FetchCurrentlyEditedDevice)();
        if (!d || !n) return;
        const l = d.layers.isOnNaturalDepth() ? void 0 : t + d.layers.getDepthShift();
        (0, o.default)({
            deviceOption: n.deviceOption,
            id: r.VisualEditingConstants.previewId,
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
    var r = t("gwuwo"),
        o = t("fCcDT");
    var s = e => {
        (0, r.default)().worldManager.devices.getDeviceById(e.id) && (0, o.default)(e)
    }
})), t.register("cK78N", (function(t, i) {
    e(t.exports, "FetchOptionSchemaProperty", (function() {
        return n
    }));
    const n = (e, t) => {
        var i, n, r;
        const o = e.deviceOption.optionSchema.options.find((e => e.key === t));
        return {
            min: null === (i = null == o ? void 0 : o.option.props) || void 0 === i ? void 0 : i.min,
            max: null === (n = null == o ? void 0 : o.option.props) || void 0 === n ? void 0 : n.max,
            step: null === (r = null == o ? void 0 : o.option.props) || void 0 === r ? void 0 : r.step
        }
    }
})), t.register("lzcjW", (function(i, n) {
    e(i.exports, "ZonedDeviceDisplayOptions", (function() {
        return o
    })), e(i.exports, "default", (function() {
        return d
    }));
    var r = t("j8szt");
    let o;
    var s;
    (s = o || (o = {})).visible = "visible", s.bordersOnly = "bordersOnly", s.fullyHidden = "fullyHidden";
    const a = () => {
        const e = localStorage.getItem(r.default.zonedDeviceViews);
        return e || o.bordersOnly
    };
    var d = {
        shouldShow: e => a() !== o.fullyHidden,
        shouldShowInnerZone: e => a() !== o.bordersOnly
    }
})), t.register("j8szt", (function(t, i) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = {
        zonedDeviceViews: "zoned-device-views"
    }
})), t.register("lJcj3", (function(i, n) {
    e(i.exports, "BaseAsset", (function() {
        return r
    }));
    const r = {
        imageId: "character_proximity_device",
        imageUrl: (0, t("alREA").default)("devices/character_proximity/radar.png")
    }
})), t.register("li7NF", (function(t, i) {
    let n;
    var r;
    let o;
    var s;
    e(t.exports, "DetectionArea", (function() {
        return n
    })), (r = n || (n = {})).everywhere = "everywhere", r.zone = "zone", (s = o || (o = {})).everybody = "everybody", s.sameTeam = "sameTeam", s.differentTeam = "differentTeam"
}));