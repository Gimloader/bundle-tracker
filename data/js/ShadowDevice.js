function e(e, i, t, n) {
    Object.defineProperty(e, i, {
        get: t,
        set: n,
        enumerable: !0,
        configurable: !0
    })
}
var i = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
i.register("1E59O", (function(t, n) {
    var o;
    o = t.exports, Object.defineProperty(o, "__esModule", {
        value: !0,
        configurable: !0
    }), e(t.exports, "default", (function() {
        return u
    }));
    var s = i("divCp"),
        a = i("bNmF9"),
        r = i("fnnGB"),
        d = i("6Tpu2"),
        h = i("4uojN"),
        l = i("cK78N"),
        p = i("cnijD");
    class c extends a.default {
        constructor(e) {
            super(e), (0, s.default)(this, "setupVisualEditing", (() => {
                if (!(0, d.InPreGamePhase)() || !(0, h.isSavedVersion)()) return;
                const e = (0, l.FetchOptionSchemaProperty)(this, "width"),
                    i = (0, l.FetchOptionSchemaProperty)(this, "height");
                this.visualEditing.add.box({
                    width: this.options.width,
                    height: this.options.height,
                    minWidth: e.min,
                    maxWidth: e.max,
                    minHeight: i.min,
                    maxHeight: i.max,
                    rotable: !1,
                    keepRatio: !1,
                    onChange: e => {
                        (0, p.ReplaceVisualEditingPreview)(e.x, e.y, {
                            width: e.width,
                            height: e.height
                        })
                    }
                })
            })), this.setupVisualEditing(), this.icon = this.parts.add.sprite(r.BaseAsset), this.icon.view.alpha = 1e-7, this.icon.view.scaleX = this.options.width / 300, this.icon.view.scaleY = this.options.height / 130, this.shadows.add({
                depth: this.layers.getGlobalDepth(),
                r1: this.options.width / 2,
                r2: this.options.height / 2
            }), this.boundingBox.clearCached()
        }
    }
    var u = c
})), i.register("fnnGB", (function(t, n) {
    e(t.exports, "BaseAsset", (function() {
        return o
    }));
    const o = {
        imageId: "shadow_device",
        imageUrl: (0, i("alREA").default)("devices/shadow/shadow_device.png")
    }
})), i.register("cK78N", (function(i, t) {
    e(i.exports, "FetchOptionSchemaProperty", (function() {
        return n
    }));
    const n = (e, i) => {
        var t, n, o;
        const s = e.deviceOption.optionSchema.options.find((e => e.key === i));
        return {
            min: null === (t = null == s ? void 0 : s.option.props) || void 0 === t ? void 0 : t.min,
            max: null === (n = null == s ? void 0 : s.option.props) || void 0 === n ? void 0 : n.max,
            step: null === (o = null == s ? void 0 : s.option.props) || void 0 === o ? void 0 : o.step
        }
    }
})), i.register("cnijD", (function(t, n) {
    e(t.exports, "ReplaceVisualEditingPreview", (function() {
        return d
    }));
    var o = i("dWqri"),
        s = i("eCsxR"),
        a = i("ittx1"),
        r = i("dNzyU");
    const d = (e, i, t) => {
        const n = (0, r.FetchVisualEditingPreview)(),
            d = (0, a.FetchCurrentlyEditedDevice)();
        if (!d || !n) return;
        const h = d.layers.isOnNaturalDepth() ? void 0 : i + d.layers.getDepthShift();
        (0, s.default)({
            deviceOption: n.deviceOption,
            id: o.VisualEditingConstants.previewId,
            x: e,
            y: i,
            depth: h,
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
        return a
    }));
    var o = i("gwuwo"),
        s = i("fCcDT");
    var a = e => {
        (0, o.default)().worldManager.devices.getDeviceById(e.id) && (0, s.default)(e)
    }
}));