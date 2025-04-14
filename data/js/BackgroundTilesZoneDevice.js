function e(e, t, i, o) {
    Object.defineProperty(e, t, {
        get: i,
        set: o,
        enumerable: !0,
        configurable: !0
    })
}
var t = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
t.register("k7H2F", (function(i, o) {
    var n;
    n = i.exports, Object.defineProperty(n, "__esModule", {
        value: !0,
        configurable: !0
    }), e(i.exports, "ZONE_UNSET_POSITION", (function() {
        return C
    })), e(i.exports, "default", (function() {
        return M
    }));
    var s = t("divCp"),
        r = t("4uojN"),
        a = t("6Tpu2"),
        d = t("cnijD"),
        l = t("cK78N"),
        h = t("bNmF9"),
        u = t("gwuwo"),
        p = t("iRjsB"),
        c = t("h6SIm"),
        g = t("dPNN3"),
        x = t("alREA"),
        f = t("4wOjx"),
        y = t("36IJb"),
        m = t("fAjtM"),
        v = t("jin3I"),
        w = t("gNCVu"),
        b = t("6Cx5m");
    const C = -999999999;
    class B extends h.default {
        constructor(e) {
            if (super(e), (0, s.default)(this, "addLayer", (() => {
                    const e = p.default.worldOptions.terrainOptions.find((e => e.id === this.options.terrainId));
                    if (!e) return;
                    const {
                        minX: t,
                        minY: i,
                        maxX: o,
                        maxY: n
                    } = (0, m.BackgroundTilesZoneUtil_GetTileCoordinatesBounds)(this), s = (0, w.BackgroundTilesZoneUtil_GetLayerDepth)(this), r = (0, u.default)().tileManager.layerManager.backgroundLayersManager.createLayer({
                        layerId: this.id,
                        depth: s
                    }), a = {
                        priority: this.layers.getGlobalDepth(),
                        x: t,
                        y: i,
                        width: o - t,
                        height: n - i,
                        terrainOption: e
                    };
                    r.addFillZone(a), r.setScrollData({
                        scrollFactor: this.options.scrollFactor,
                        speedX: this.options.overrideScrollingSpeed ? this.options.scrollingSpeedX : void 0,
                        speedY: this.options.overrideScrollingSpeed ? this.options.scrollingSpeedY : void 0
                    }), r.addTintModifier({
                        tint: (0, y.GetNumberFromHexColor)(this.options.tint)
                    })
                })), (0, s.default)(this, "removeLayer", (() => {
                    (0, u.default)().tileManager.layerManager.backgroundLayersManager.removeLayer({
                        layerId: this.id
                    })
                })), (0, s.default)(this, "onShow", (() => {
                    this.addLayer()
                })), (0, s.default)(this, "onHide", (() => {
                    this.removeLayer()
                })), (0, s.default)(this, "addConnectionLine", (() => {
                    if (this.options.useFullMapSize) return;
                    const e = (0, v.BackgroundTilesZoneUtil_FindClosestPointOnRect)(this),
                        t = Phaser.Math.Distance.Between(this.x, this.y, e.x, e.y),
                        i = Phaser.Math.Angle.Between(this.x, this.y, e.x, e.y);
                    this.parts.add.rect({
                        x: (e.x - this.x) / 2,
                        y: (e.y - this.y) / 2,
                        width: t,
                        height: b.BackgroundTilesZoneConsts.border.width,
                        angle: (0, f.ConvertRadToDeg)(i),
                        color: b.BackgroundTilesZoneConsts.border.color,
                        alpha: b.BackgroundTilesZoneConsts.border.alpha
                    })
                })), (0, s.default)(this, "addBoundsBox", (() => {
                    const {
                        minX: e,
                        minY: t,
                        maxX: i,
                        maxY: o
                    } = (0, m.BackgroundTilesZoneUtil_GetWorldCoordinatesBounds)(this), n = e + (i - e) / 2 - this.x, s = t + (o - t) / 2 - this.y;
                    this.parts.add.rect({
                        x: n,
                        y: s,
                        ignoreInput: !0,
                        width: i - e,
                        height: o - t,
                        color: 16777215,
                        alpha: 0,
                        borderAlpha: b.BackgroundTilesZoneConsts.border.alpha,
                        borderColor: b.BackgroundTilesZoneConsts.border.color,
                        borderWidth: b.BackgroundTilesZoneConsts.border.width
                    })
                })), (0, s.default)(this, "setupVisualEditing", (() => {
                    if ((0, a.InGamePhase)() || (0, r.isPublishedVersion)()) return;
                    if (this.options.useFullMapSize) return;
                    const e = (0, l.FetchOptionSchemaProperty)(this, "width"),
                        t = (0, l.FetchOptionSchemaProperty)(this, "height");
                    this.visualEditing.add.box({
                        keepRatio: !1,
                        rotable: !1,
                        width: this.options.width,
                        height: this.options.height,
                        minWidth: e.min,
                        maxWidth: e.max,
                        minHeight: t.min,
                        maxHeight: t.max,
                        x: this.options.zoneX - this.x,
                        y: this.options.zoneY - this.y,
                        onChange: e => {
                            (0, d.ReplaceVisualEditingPreview)(this.x, this.y, {
                                width: e.width,
                                height: e.height,
                                zoneX: e.x,
                                zoneY: e.y
                            })
                        }
                    })
                })), (0, s.default)(this, "destroy", (e => {
                    super.destroy(e), this.removeLayer()
                })), this.addLayer(), (0, a.InGamePhase)() || (0, r.isPublishedVersion)()) return;
            const t = c.default.Setting;
            new(0, g.default)({
                device: this,
                baseColor: t.baseColor,
                boxColor: t.boxColor,
                content: {
                    icon: {
                        image: (0, x.default)("devices/background_tile_zone/icon.png"),
                        scale: 1
                    },
                    text: {
                        text: this.options.order + "",
                        shiftY: -9,
                        size: 24
                    }
                }
            }), this.options.zoneX === C && (this.options.zoneX = this.x), this.options.zoneY === C && (this.options.zoneY = this.y), this.addConnectionLine(), this.addBoundsBox(), this.setupVisualEditing()
        }
    }
    var M = B
})), t.register("cnijD", (function(i, o) {
    e(i.exports, "ReplaceVisualEditingPreview", (function() {
        return d
    }));
    var n = t("dWqri"),
        s = t("eCsxR"),
        r = t("ittx1"),
        a = t("dNzyU");
    const d = (e, t, i) => {
        const o = (0, a.FetchVisualEditingPreview)(),
            d = (0, r.FetchCurrentlyEditedDevice)();
        if (!d || !o) return;
        const l = d.layers.isOnNaturalDepth() ? void 0 : t + d.layers.getDepthShift();
        (0, s.default)({
            deviceOption: o.deviceOption,
            id: n.VisualEditingConstants.previewId,
            x: e,
            y: t,
            depth: l,
            layerId: d.layers.getLayer(),
            name: o.name,
            isPreview: !0,
            options: {
                ...o.options,
                ...i
            },
            placedByClient: !0,
            state: o.deviceOption.defaultState
        })
    }
})), t.register("eCsxR", (function(i, o) {
    e(i.exports, "default", (function() {
        return r
    }));
    var n = t("gwuwo"),
        s = t("fCcDT");
    var r = e => {
        (0, n.default)().worldManager.devices.getDeviceById(e.id) && (0, s.default)(e)
    }
})), t.register("cK78N", (function(t, i) {
    e(t.exports, "FetchOptionSchemaProperty", (function() {
        return o
    }));
    const o = (e, t) => {
        var i, o, n;
        const s = e.deviceOption.optionSchema.options.find((e => e.key === t));
        return {
            min: null === (i = null == s ? void 0 : s.option.props) || void 0 === i ? void 0 : i.min,
            max: null === (o = null == s ? void 0 : s.option.props) || void 0 === o ? void 0 : o.max,
            step: null === (n = null == s ? void 0 : s.option.props) || void 0 === n ? void 0 : n.step
        }
    }
})), t.register("fAjtM", (function(i, o) {
    e(i.exports, "BackgroundTilesZoneUtil_GetTileCoordinatesBounds", (function() {
        return r
    })), e(i.exports, "BackgroundTilesZoneUtil_GetWorldCoordinatesBounds", (function() {
        return a
    }));
    var n = t("048h9"),
        s = t("iRjsB");
    const r = e => ({
            minX: e.options.useFullMapSize ? 0 : d(e.options.zoneX - e.options.width / 2) + 1,
            minY: e.options.useFullMapSize ? 0 : d(e.options.zoneY - e.options.height / 2) + 1,
            maxX: e.options.useFullMapSize ? s.default.world.width : d(e.options.zoneX + e.options.width / 2),
            maxY: e.options.useFullMapSize ? s.default.world.height : d(e.options.zoneY + e.options.height / 2)
        }),
        a = e => {
            const t = r(e);
            return {
                minX: t.minX * n.default.width,
                minY: t.minY * n.default.height,
                maxX: t.maxX * n.default.width,
                maxY: t.maxY * n.default.height
            }
        },
        d = e => Math.floor(e / n.default.width)
})), t.register("jin3I", (function(i, o) {
    e(i.exports, "BackgroundTilesZoneUtil_FindClosestPointOnRect", (function() {
        return s
    }));
    var n = t("fAjtM");
    const s = e => {
        const t = {
                x: e.x,
                y: e.y
            },
            {
                minX: i,
                minY: o,
                maxX: s,
                maxY: r
            } = (0, n.BackgroundTilesZoneUtil_GetWorldCoordinatesBounds)(e),
            a = {
                x: i,
                y: o,
                width: s - i,
                height: r - o
            },
            d = Math.max(a.x, Math.min(t.x, a.x + a.width)),
            l = Math.max(a.y, Math.min(t.y, a.y + a.height));
        if (t.x >= a.x && t.x <= a.x + a.width && t.y >= a.y && t.y <= a.y + a.height) {
            const e = t.x - a.x,
                i = a.x + a.width - t.x,
                o = t.y - a.y,
                n = a.y + a.height - t.y,
                s = Math.min(e, i, o, n);
            return s === e ? {
                x: a.x,
                y: t.y
            } : s === i ? {
                x: a.x + a.width,
                y: t.y
            } : s === o ? {
                x: t.x,
                y: a.y
            } : {
                x: t.x,
                y: a.y + a.height
            }
        }
        return {
            x: d,
            y: l
        }
    }
})), t.register("gNCVu", (function(i, o) {
    e(i.exports, "BackgroundTilesZoneUtil_GetLayerDepth", (function() {
        return r
    }));
    var n = t("lzqnu"),
        s = t("050o1");
    const r = e => n.default.Fill3 + .1 + .1 * (1e3 - e.options.order + (0, s.default)(e.y) / 1e3)
})), t.register("6Cx5m", (function(t, i) {
    e(t.exports, "BackgroundTilesZoneConsts", (function() {
        return o
    }));
    const o = {
        border: {
            alpha: .5,
            width: 5,
            color: 16711935
        }
    }
}));