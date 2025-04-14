function e(e) {
    return e && e.__esModule ? e.default : e
}

function i(e, i, t, n) {
    Object.defineProperty(e, i, {
        get: t,
        set: n,
        enumerable: !0,
        configurable: !0
    })
}
var t = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
t.register("lhuaa", (function(n, o) {
    var s;
    s = n.exports, Object.defineProperty(s, "__esModule", {
        value: !0,
        configurable: !0
    }), i(n.exports, "default", (function() {
        return w
    }));
    var a = t("divCp"),
        r = t("4uojN"),
        l = t("6Tpu2"),
        u = t("bNmF9"),
        d = t("6q6Jx"),
        p = t("cnijD"),
        c = t("cK78N"),
        h = t("6EcnK"),
        g = t("fniCL"),
        v = t("rUtvU"),
        f = t("c3ah8");
    class m extends u.default {
        constructor(i) {
            super(i), (0, a.default)(this, "createVisuals", (() => {
                const i = {
                        ...g.UnknownItemAsset
                    },
                    t = (0, h.default)(this.options.itemId);
                t && (i.imageId = t.previewImage, i.imageUrl = t.previewImage), this.part = this.parts.add.sprite({
                    ...i,
                    onReady: i => {
                        if (i.view.displayWidth = this.options.size, i.view.displayHeight = this.options.size, i.view.angle = this.options.angle, this.options.outline) {
                            let t = this.options.outlineSize === d.OutlineSizeOption.custom ? this.options.customOutlineSize : this.options.size / 25;
                            t > this.options.size / 10 && (t = this.options.size / 10), (0, v.AddOutline)({
                                view: i.view,
                                options: {
                                    outlineColor: e(f).Display.Color.HexStringToColor(this.options.outlineColor).color,
                                    thickness: t
                                }
                            })
                        }
                    }
                }), this.part.view.alpha = this.getAlpha()
            })), (0, a.default)(this, "getAlpha", (() => (0, l.InPreGamePhase)() ? (0, r.isSavedVersion)() || this.options.visibleOnGameStart ? 1 : 0 : this.state.visible ? 1 : 0)), (0, a.default)(this, "setupVisualEditing", (() => {
                if (!(0, l.InPreGamePhase)() || !(0, r.isSavedVersion)()) return;
                const e = (0, c.FetchOptionSchemaProperty)(this, "size");
                this.visualEditing.add.box({
                    width: this.options.size,
                    height: this.options.size,
                    angle: this.options.angle,
                    minWidth: e.min,
                    maxWidth: e.max,
                    minHeight: e.min,
                    maxHeight: e.max,
                    rotable: !0,
                    keepRatio: !0,
                    onChange: e => {
                        (0, p.ReplaceVisualEditingPreview)(e.x, e.y, {
                            size: e.width,
                            angle: e.angle
                        })
                    }
                })
            })), (0, a.default)(this, "onStateChange", (e => {
                "visible" === e && (this.part.view.alpha = this.getAlpha())
            })), this.setupVisualEditing(), this.createVisuals()
        }
    }
    var w = m
})), t.register("6q6Jx", (function(e, t) {
    let n;
    var o;
    i(e.exports, "OutlineSizeOption", (function() {
        return n
    })), (o = n || (n = {})).automatic = "automatic", o.custom = "custom"
})), t.register("cnijD", (function(e, n) {
    i(e.exports, "ReplaceVisualEditingPreview", (function() {
        return l
    }));
    var o = t("dWqri"),
        s = t("eCsxR"),
        a = t("ittx1"),
        r = t("dNzyU");
    const l = (e, i, t) => {
        const n = (0, r.FetchVisualEditingPreview)(),
            l = (0, a.FetchCurrentlyEditedDevice)();
        if (!l || !n) return;
        const u = l.layers.isOnNaturalDepth() ? void 0 : i + l.layers.getDepthShift();
        (0, s.default)({
            deviceOption: n.deviceOption,
            id: o.VisualEditingConstants.previewId,
            x: e,
            y: i,
            depth: u,
            layerId: l.layers.getLayer(),
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
})), t.register("eCsxR", (function(e, n) {
    i(e.exports, "default", (function() {
        return a
    }));
    var o = t("gwuwo"),
        s = t("fCcDT");
    var a = e => {
        (0, o.default)().worldManager.devices.getDeviceById(e.id) && (0, s.default)(e)
    }
})), t.register("cK78N", (function(e, t) {
    i(e.exports, "FetchOptionSchemaProperty", (function() {
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
})), t.register("fniCL", (function(e, n) {
    i(e.exports, "BaseAsset", (function() {
        return s
    })), i(e.exports, "UnknownItemAsset", (function() {
        return a
    }));
    var o = t("alREA");
    const s = {
            imageId: (0, o.default)("devices/item_granter/base.png"),
            imageUrl: (0, o.default)("devices/item_granter/base.png")
        },
        a = {
            imageId: "__UNKNOWN_ITEM",
            imageUrl: (0, o.default)("devices/item_granter/question-mark-2.png")
        }
})), t.register("rUtvU", (function(e, n) {
    i(e.exports, "AddOutline", (function() {
        return s
    }));
    var o = t("gwuwo");
    const s = e => {
        if (!e.view || !e.view.active) return;
        const i = {
                thickness: 2
            },
            t = e.options ? {
                ...i,
                ...e.options
            } : {
                ...i
            };
        (0, o.default)().plugins.get("rexOutlinePipeline").add(e.view, t)
    }
}));