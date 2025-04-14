function e(e, t, i, n) {
    Object.defineProperty(e, t, {
        get: i,
        set: n,
        enumerable: !0,
        configurable: !0
    })
}
var t = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
t.register("bAATY", (function(i, n) {
    var o;
    o = i.exports, Object.defineProperty(o, "__esModule", {
        value: !0,
        configurable: !0
    }), e(i.exports, "default", (function() {
        return f
    }));
    var r = t("cK78N"),
        a = t("4uojN"),
        s = t("6Tpu2"),
        d = t("bNmF9"),
        l = t("dPNN3"),
        u = t("h6SIm"),
        c = t("cnijD");
    class p extends d.default {
        constructor(e) {
            if (super(e), (0, s.InPreGamePhase)() && (0, a.isSavedVersion)()) {
                const e = u.default.Zombies,
                    t = (0, r.FetchOptionSchemaProperty)(this, "targetRadius");
                this.visualEditing.add.circle({
                    angle: 0,
                    rotable: !1,
                    radius: this.options.targetRadius,
                    minRadius: t.min,
                    maxRadius: t.max,
                    onChange: e => {
                        (0, c.ReplaceVisualEditingPreview)(e.x, e.y, {
                            targetRadius: e.radius
                        })
                    }
                }), new(0, l.default)({
                    device: this,
                    baseColor: e.baseColor,
                    boxColor: e.boxColor,
                    content: {
                        text: {
                            text: "Zombie\nInvasion"
                        }
                    }
                })
            }
        }
    }
    var f = p
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
        a = t("ittx1"),
        s = t("dNzyU");
    const d = (e, t, i) => {
        const n = (0, s.FetchVisualEditingPreview)(),
            d = (0, a.FetchCurrentlyEditedDevice)();
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
        return a
    }));
    var o = t("gwuwo"),
        r = t("fCcDT");
    var a = e => {
        (0, o.default)().worldManager.devices.getDeviceById(e.id) && (0, r.default)(e)
    }
}));