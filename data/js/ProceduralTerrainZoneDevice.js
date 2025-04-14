function e(e, t, i, n) {
    Object.defineProperty(e, t, {
        get: i,
        set: n,
        enumerable: !0,
        configurable: !0
    })
}
var t = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
t.register("cZeWw", (function(i, n) {
    var o;
    o = i.exports, Object.defineProperty(o, "__esModule", {
        value: !0,
        configurable: !0
    }), e(i.exports, "default", (function() {
        return h
    }));
    var r = t("4uojN"),
        d = t("6Tpu2"),
        a = t("cnijD"),
        s = t("cK78N"),
        l = t("bNmF9");
    class p extends l.default {
        constructor(e) {
            if (super(e), (0, d.InGamePhase)() || (0, r.isPublishedVersion)()) return;
            this.parts.add.rect({
                width: this.options.width,
                height: this.options.height,
                color: 65280,
                alpha: .15
            });
            const t = (0, s.FetchOptionSchemaProperty)(this, "width"),
                i = (0, s.FetchOptionSchemaProperty)(this, "height");
            this.visualEditing.add.box({
                keepRatio: !1,
                rotable: !0,
                width: this.options.width,
                height: this.options.height,
                minWidth: t.min,
                maxWidth: t.max,
                minHeight: i.min,
                maxHeight: i.max,
                onChange: e => {
                    (0, a.ReplaceVisualEditingPreview)(e.x, e.y, {
                        width: e.width,
                        height: e.height
                    })
                }
            })
        }
    }
    var h = p
})), t.register("cnijD", (function(i, n) {
    e(i.exports, "ReplaceVisualEditingPreview", (function() {
        return s
    }));
    var o = t("dWqri"),
        r = t("eCsxR"),
        d = t("ittx1"),
        a = t("dNzyU");
    const s = (e, t, i) => {
        const n = (0, a.FetchVisualEditingPreview)(),
            s = (0, d.FetchCurrentlyEditedDevice)();
        if (!s || !n) return;
        const l = s.layers.isOnNaturalDepth() ? void 0 : t + s.layers.getDepthShift();
        (0, r.default)({
            deviceOption: n.deviceOption,
            id: o.VisualEditingConstants.previewId,
            x: e,
            y: t,
            depth: l,
            layerId: s.layers.getLayer(),
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
        return d
    }));
    var o = t("gwuwo"),
        r = t("fCcDT");
    var d = e => {
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
}));