function e(e, i, t, n) {
    Object.defineProperty(e, i, {
        get: t,
        set: n,
        enumerable: !0,
        configurable: !0
    })
}
var i = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
i.register("h8xEk", (function(t, n) {
    var a;
    a = t.exports, Object.defineProperty(a, "__esModule", {
        value: !0,
        configurable: !0
    }), e(t.exports, "default", (function() {
        return g
    }));
    var r = i("divCp"),
        o = i("4uojN"),
        s = i("6Tpu2"),
        d = i("cnijD"),
        l = i("cK78N"),
        c = i("bNmF9"),
        u = i("alREA"),
        p = i("81UFP"),
        f = i("050o1"),
        v = i("bDCcz");
    class h extends c.default {
        constructor(e) {
            if (super(e), (0, r.default)(this, "currentFallVelocity", 0), (0, s.InGamePhase)() || (0, o.isPublishedVersion)()) return;
            const i = (0, l.FetchOptionSchemaProperty)(this, "rangeRadius");
            this.visualEditing.add.circle({
                radius: this.options.rangeRadius,
                minRadius: i.min,
                maxRadius: i.max,
                rotable: !1,
                onChange: e => {
                    (0, d.ReplaceVisualEditingPreview)(e.x, e.y, {
                        rangeRadius: Math.round(e.radius)
                    })
                }
            });
            const t = this.options.skinId.replace("character_", ""),
                n = (0, u.default)(`characters/spine/normalized_preview/${t}.png`);
            this.parts.add.sprite({
                y: 30 - 50 * .28,
                imageId: n,
                imageUrl: n,
                depthChange: (0, f.default)(2),
                onReady: e => {
                    e.view.setScale(.28 * this.options.scale), e.view.setOrigin(.5, 550 / 600)
                }
            }), (0, v.isPlatformer)() || this.parts.add.sprite({
                y: 15 - 5 * this.options.scale,
                imageId: "character-shadow",
                imageUrl: (0, u.default)("characters/shadow.png"),
                onReady: e => {
                    e.view.setOrigin(.5, .5), e.view.setScale(p.SHADOW_SCALE * this.options.scale), e.view.setAlpha(p.SHADOW_ALPHA)
                }
            })
        }
    }
    var g = h
})), i.register("cnijD", (function(t, n) {
    e(t.exports, "ReplaceVisualEditingPreview", (function() {
        return d
    }));
    var a = i("dWqri"),
        r = i("eCsxR"),
        o = i("ittx1"),
        s = i("dNzyU");
    const d = (e, i, t) => {
        const n = (0, s.FetchVisualEditingPreview)(),
            d = (0, o.FetchCurrentlyEditedDevice)();
        if (!d || !n) return;
        const l = d.layers.isOnNaturalDepth() ? void 0 : i + d.layers.getDepthShift();
        (0, r.default)({
            deviceOption: n.deviceOption,
            id: a.VisualEditingConstants.previewId,
            x: e,
            y: i,
            depth: l,
            layerId: d.layers.getLayer(),
            name: n.name,
            isPreview: !0,
            options: {
                ...n.options,
                ...t
            },
            placedByClient: !0,
            state: n.deviceOption.defaultState
        })
    }
})), i.register("eCsxR", (function(t, n) {
    e(t.exports, "default", (function() {
        return o
    }));
    var a = i("gwuwo"),
        r = i("fCcDT");
    var o = e => {
        (0, a.default)().worldManager.devices.getDeviceById(e.id) && (0, r.default)(e)
    }
})), i.register("cK78N", (function(i, t) {
    e(i.exports, "FetchOptionSchemaProperty", (function() {
        return n
    }));
    const n = (e, i) => {
        var t, n, a;
        const r = e.deviceOption.optionSchema.options.find((e => e.key === i));
        return {
            min: null === (t = null == r ? void 0 : r.option.props) || void 0 === t ? void 0 : t.min,
            max: null === (n = null == r ? void 0 : r.option.props) || void 0 === n ? void 0 : n.max,
            step: null === (a = null == r ? void 0 : r.option.props) || void 0 === a ? void 0 : a.step
        }
    }
}));