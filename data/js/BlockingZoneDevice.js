function e(e, t, i, n) {
    Object.defineProperty(e, t, {
        get: i,
        set: n,
        enumerable: !0,
        configurable: !0
    })
}
var t = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
t.register("5BEMW", (function(i, n) {
    var o;
    o = i.exports, Object.defineProperty(o, "__esModule", {
        value: !0,
        configurable: !0
    }), e(i.exports, "BlockingZoneDevice", (function() {
        return m
    })), e(i.exports, "default", (function() {
        return b
    }));
    var s = t("divCp"),
        r = t("36IJb"),
        a = t("4uojN"),
        d = t("6Tpu2"),
        l = t("lzcjW"),
        h = t("bNmF9"),
        u = t("aomin"),
        c = t("050o1"),
        p = t("cK78N"),
        f = t("cnijD"),
        v = t("bvStP"),
        g = t("iFssO");
    class m extends h.default {
        getAlpha() {
            return (0, d.InGamePhase)() ? this.state.active ? 1 : 0 : (0, a.isPublishedVersion)() || (0, a.isSavedVersion)() && l.default.shouldShowInnerZone(this) ? 1 : 0
        }
        constructor(e) {
            if (super(e), (0, s.default)(this, "updatePartAlpha", (e => {
                    const t = this.getAlpha();
                    (0, d.InGamePhase)() && e.updateAlpha(t > 0 ? 1 : 0)
                })), (0, s.default)(this, "updateAlpha", (() => {
                    const e = this.getAlpha();
                    (0, d.InGamePhase)() && this.parts.forEach((t => {
                        t.updateAlpha(e > 0 ? 1 : 0)
                    })), this.rect && this.rect.updateAlpha(e)
                })), (0, s.default)(this, "onStateChange", (e => {
                    "active" === e && this.updateAlpha()
                })), (0, s.default)(this, "setupVisualEditing", (() => {
                    if (!(0, d.InPreGamePhase)() || !(0, a.isSavedVersion)()) return;
                    const e = (0, p.FetchOptionSchemaProperty)(this, "width"),
                        t = (0, p.FetchOptionSchemaProperty)(this, "height");
                    this.visualEditing.add.box({
                        width: this.options.width,
                        height: this.options.height,
                        angle: 0,
                        rotable: !1,
                        minWidth: e.min,
                        maxWidth: e.max,
                        minHeight: t.min,
                        maxHeight: t.max,
                        keepRatio: !1,
                        onChange: e => {
                            (0, f.ReplaceVisualEditingPreview)(e.x, e.y, {
                                width: e.width,
                                height: e.height
                            })
                        }
                    })
                })), (0, s.default)(this, "isActive", (() => this.state.active)), (0, s.default)(this, "isBlockingBlockBuilding", (() => this.options.blockBuilding === u.BlockingZoneBlockOverride.yes)), (0, d.InPreGamePhase)() && (0, a.isSavedVersion)()) {
                this.parts.add.sprite({
                    ...g.IconAsset,
                    depthChange: (0, c.default)(2)
                }).view.setScale(.17)
            }
            if ((0, d.InGamePhase)() || (0, a.isPublishedVersion)() ? this.options.visibleInGame : l.default.shouldShow(this)) {
                this.setupVisualEditing();
                const e = (0, r.GetNumberFromHexColor)(this.options.color);
                this.rect = this.parts.add.rect({
                    color: e,
                    layerId: v.default.DevicesUnderCharacters,
                    alpha: this.getAlpha(),
                    width: Math.abs(this.options.width),
                    height: Math.abs(this.options.height),
                    borderColor: e,
                    borderAlpha: (0, d.InGamePhase)() || (0, a.isPublishedVersion)() ? 0 : 1,
                    borderWidth: 4,
                    depthChange: (0, c.default)(1),
                    ignoreInput: !0
                })
            }
        }
    }
    var b = m
})), t.register("lzcjW", (function(i, n) {
    e(i.exports, "ZonedDeviceDisplayOptions", (function() {
        return s
    })), e(i.exports, "default", (function() {
        return d
    }));
    var o = t("j8szt");
    let s;
    var r;
    (r = s || (s = {})).visible = "visible", r.bordersOnly = "bordersOnly", r.fullyHidden = "fullyHidden";
    const a = () => {
        const e = localStorage.getItem(o.default.zonedDeviceViews);
        return e || s.bordersOnly
    };
    var d = {
        shouldShow: e => a() !== s.fullyHidden,
        shouldShowInnerZone: e => a() !== s.bordersOnly
    }
})), t.register("j8szt", (function(t, i) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = {
        zonedDeviceViews: "zoned-device-views"
    }
})), t.register("aomin", (function(t, i) {
    let n;
    var o;
    e(t.exports, "BlockingZoneBlockOverride", (function() {
        return n
    })), (o = n || (n = {}))[o.doNotOverride = 1] = "doNotOverride", o[o.yes = 2] = "yes", o[o.no = 3] = "no"
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
        r = t("ittx1"),
        a = t("dNzyU");
    const d = (e, t, i) => {
        const n = (0, a.FetchVisualEditingPreview)(),
            d = (0, r.FetchCurrentlyEditedDevice)();
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
        return r
    }));
    var o = t("gwuwo"),
        s = t("fCcDT");
    var r = e => {
        (0, o.default)().worldManager.devices.getDeviceById(e.id) && (0, s.default)(e)
    }
})), t.register("iFssO", (function(i, n) {
    e(i.exports, "IconAsset", (function() {
        return s
    }));
    var o = t("alREA");
    const s = {
        imageId: (0, o.default)("devices/blocking_zone/icon.png"),
        imageUrl: (0, o.default)("devices/blocking_zone/icon.png")
    }
}));