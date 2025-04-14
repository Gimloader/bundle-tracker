function e(e, t, i, a) {
    Object.defineProperty(e, t, {
        get: i,
        set: a,
        enumerable: !0,
        configurable: !0
    })
}
var t = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
t.register("j23nl", (function(i, a) {
    var s;
    s = i.exports, Object.defineProperty(s, "__esModule", {
        value: !0,
        configurable: !0
    }), e(i.exports, "BallZoneDevice", (function() {
        return m
    })), e(i.exports, "default", (function() {
        return w
    }));
    var o = t("divCp"),
        n = t("36IJb"),
        l = t("4uojN"),
        d = t("6Tpu2"),
        r = t("lzcjW"),
        h = t("bNmF9"),
        p = t("eLuP8"),
        u = t("kvI4V"),
        c = t("050o1"),
        f = t("cK78N"),
        g = t("cnijD"),
        v = t("d30j5"),
        b = t("kbbzW"),
        y = t("bvStP");
    class m extends h.default {
        getAlpha() {
            return (0, d.InGamePhase)() ? this.state.active ? this.options.backgroundAlpha : 0 : (0, l.isPublishedVersion)() || (0, l.isSavedVersion)() && r.default.shouldShowInnerZone(this) ? this.options.backgroundAlpha : 0
        }
        constructor(e) {
            if (super(e), (0, o.default)(this, "updatePartAlpha", (e => {
                    const t = this.getAlpha();
                    (0, d.InGamePhase)() && e.updateAlpha(t > 0 ? 1 : 0)
                })), (0, o.default)(this, "updateAlpha", (() => {
                    const e = this.getAlpha();
                    (0, d.InGamePhase)() && this.parts.forEach((t => {
                        t.updateAlpha(e > 0 ? 1 : 0)
                    })), this.rect && this.rect.updateAlpha(e)
                })), (0, o.default)(this, "onStateChange", (e => {
                    "active" === e && (this.updateAlpha(), this.state.active && (0, b.default)(this))
                })), (0, o.default)(this, "checkIfCollidersEnabled", (() => this.state.active)), (0, o.default)(this, "setupVisualEditing", (() => {
                    if (!(0, d.InPreGamePhase)() || !(0, l.isSavedVersion)()) return;
                    const e = (0, f.FetchOptionSchemaProperty)(this, "width"),
                        t = (0, f.FetchOptionSchemaProperty)(this, "height");
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
                            (0, g.ReplaceVisualEditingPreview)(e.x, e.y, {
                                width: e.width,
                                height: e.height
                            })
                        }
                    })
                })), (0, d.InPreGamePhase)() && (0, l.isSavedVersion)()) {
                this.parts.add.sprite({
                    ...u.IconAsset,
                    depthChange: (0, c.default)(2)
                }).view.setScale(.17)
            }
            if ((0, d.InGamePhase)() || (0, l.isPublishedVersion)() ? this.options.visibleInGame : r.default.shouldShow(this)) {
                this.setupVisualEditing();
                const e = (0, n.GetNumberFromHexColor)(this.options.color);
                this.rect = this.parts.add.rect({
                    color: e,
                    layerId: y.default.DevicesUnderCharacters,
                    alpha: this.getAlpha(),
                    width: Math.abs(this.options.width),
                    height: Math.abs(this.options.height),
                    borderColor: e,
                    borderAlpha: (0, d.InGamePhase)() || (0, l.isPublishedVersion)() ? 0 : this.options.backgroundAlpha,
                    borderWidth: 4,
                    depthChange: (0, c.default)(1),
                    ignoreInput: !0
                }), this.options.style === p.Style.blastball && (0, v.CreateBlastBallStyle)(this)
            }
        }
    }
    var w = m
})), t.register("lzcjW", (function(i, a) {
    e(i.exports, "ZonedDeviceDisplayOptions", (function() {
        return o
    })), e(i.exports, "default", (function() {
        return d
    }));
    var s = t("j8szt");
    let o;
    var n;
    (n = o || (o = {})).visible = "visible", n.bordersOnly = "bordersOnly", n.fullyHidden = "fullyHidden";
    const l = () => {
        const e = localStorage.getItem(s.default.zonedDeviceViews);
        return e || o.bordersOnly
    };
    var d = {
        shouldShow: e => l() !== o.fullyHidden,
        shouldShowInnerZone: e => l() !== o.bordersOnly
    }
})), t.register("j8szt", (function(t, i) {
    e(t.exports, "default", (function() {
        return a
    }));
    var a = {
        zonedDeviceViews: "zoned-device-views"
    }
})), t.register("eLuP8", (function(t, i) {
    let a;
    var s;
    let o;
    var n;
    e(t.exports, "Style", (function() {
        return a
    })), e(t.exports, "Side", (function() {
        return o
    })), (s = a || (a = {})).none = "None", s.blastball = "Blastball", (n = o || (o = {})).left = "Left", n.right = "Right"
})), t.register("kvI4V", (function(i, a) {
    e(i.exports, "IconAsset", (function() {
        return o
    })), e(i.exports, "BlastBallAssets", (function() {
        return n
    }));
    var s = t("alREA");
    const o = {
            imageId: (0, s.default)("devices/ball_zone/icon.png"),
            imageUrl: (0, s.default)("devices/ball_zone/icon.png")
        },
        n = {
            side_bottom: {
                imageId: (0, s.default)("devices/ball_zone/blastball_side_bottom.png"),
                imageUrl: (0, s.default)("devices/ball_zone/blastball_side_bottom.png")
            },
            side_top: {
                imageId: (0, s.default)("devices/ball_zone/blastball_side_top.png"),
                imageUrl: (0, s.default)("devices/ball_zone/blastball_side_top.png")
            },
            crossbar: {
                imageId: (0, s.default)("devices/ball_zone/blastball_crossbar.png"),
                imageUrl: (0, s.default)("devices/ball_zone/blastball_crossbar.png")
            },
            dot: {
                imageId: (0, s.default)("devices/ball_zone/blastball_dot.png"),
                imageUrl: (0, s.default)("devices/ball_zone/blastball_dot.png")
            }
        }
})), t.register("cK78N", (function(t, i) {
    e(t.exports, "FetchOptionSchemaProperty", (function() {
        return a
    }));
    const a = (e, t) => {
        var i, a, s;
        const o = e.deviceOption.optionSchema.options.find((e => e.key === t));
        return {
            min: null === (i = null == o ? void 0 : o.option.props) || void 0 === i ? void 0 : i.min,
            max: null === (a = null == o ? void 0 : o.option.props) || void 0 === a ? void 0 : a.max,
            step: null === (s = null == o ? void 0 : o.option.props) || void 0 === s ? void 0 : s.step
        }
    }
})), t.register("cnijD", (function(i, a) {
    e(i.exports, "ReplaceVisualEditingPreview", (function() {
        return d
    }));
    var s = t("dWqri"),
        o = t("eCsxR"),
        n = t("ittx1"),
        l = t("dNzyU");
    const d = (e, t, i) => {
        const a = (0, l.FetchVisualEditingPreview)(),
            d = (0, n.FetchCurrentlyEditedDevice)();
        if (!d || !a) return;
        const r = d.layers.isOnNaturalDepth() ? void 0 : t + d.layers.getDepthShift();
        (0, o.default)({
            deviceOption: a.deviceOption,
            id: s.VisualEditingConstants.previewId,
            x: e,
            y: t,
            depth: r,
            layerId: d.layers.getLayer(),
            name: a.name,
            isPreview: !0,
            options: {
                ...a.options,
                ...i
            },
            placedByClient: !0,
            state: a.deviceOption.defaultState
        })
    }
})), t.register("eCsxR", (function(i, a) {
    e(i.exports, "default", (function() {
        return n
    }));
    var s = t("gwuwo"),
        o = t("fCcDT");
    var n = e => {
        (0, s.default)().worldManager.devices.getDeviceById(e.id) && (0, o.default)(e)
    }
})), t.register("d30j5", (function(i, a) {
    e(i.exports, "CreateBlastBallStyle", (function() {
        return d
    }));
    var s = t("kvI4V"),
        o = t("bvStP"),
        n = t("eLuP8"),
        l = t("050o1");
    const d = e => {
        const t = .15,
            i = t => e.options.side === n.Side.left ? t : -t;
        e.parts.add.ninePatch({
            ...s.BlastBallAssets.crossbar,
            layerId: o.default.DevicesUnderCharacters,
            columns: [0, 0],
            rows: [200, 200],
            height: e.options.height,
            width: 30.45,
            scale: t,
            depthChange: (0, l.default)(2),
            x: i(-e.options.width / 2 + 5),
            onReady: t => {
                e.updatePartAlpha(t)
            }
        }), e.parts.add.ninePatch({
            ...s.BlastBallAssets.side_top,
            layerId: o.default.DepthSortedCharactersAndDevices,
            columns: [850, 850],
            rows: [0, 0],
            height: 606 * t,
            width: i(e.options.width + 30),
            scale: t,
            x: i(-5),
            y: -e.options.height / 2,
            onReady: t => {
                e.updatePartAlpha(t)
            }
        }), e.parts.add.ninePatch({
            ...s.BlastBallAssets.side_bottom,
            layerId: o.default.DepthSortedCharactersAndDevices,
            columns: [850, 850],
            rows: [0, 0],
            height: 606 * t,
            width: i(e.options.width + 30),
            scale: t,
            x: i(-5),
            y: e.options.height / 2,
            onReady: t => {
                e.updatePartAlpha(t)
            }
        }), e.colliders.add.box({
            x: 0,
            y: -e.options.height / 2 + 10,
            w: e.options.width + 16,
            h: 50
        }), e.colliders.add.box({
            x: 0,
            y: e.options.height / 2 + 10,
            w: e.options.width + 16,
            h: 50
        }), e.colliders.add.box({
            x: i(-e.options.width / 2 + 5),
            y: 0,
            w: 28,
            h: e.options.height
        }), e.parts.add.sprite({
            ...s.BlastBallAssets.dot,
            layerId: o.default.DepthSortedCharactersAndDevices,
            x: i(5),
            y: -e.options.height / 2 + 20,
            depthChange: 10,
            onReady: i => {
                e.updatePartAlpha(i), i.view.setScale(t)
            }
        }), e.parts.add.sprite({
            ...s.BlastBallAssets.dot,
            layerId: o.default.DepthSortedCharactersAndDevices,
            x: i(5),
            y: e.options.height / 2 + 20,
            depthChange: 10,
            onReady: i => {
                e.updatePartAlpha(i), i.view.setScale(t)
            }
        })
    }
})), t.register("kbbzW", (function(i, a) {
    e(i.exports, "default", (function() {
        return n
    }));
    var s = t("fhnJp"),
        o = t("1UlqS");
    var n = e => {
        const t = (0, o.default)((0, s.default)());
        e.colliders.forEach((e => {
            var i, a, s;
            const o = e.bodyId;
            null === (i = null == t ? void 0 : t.physics.getBody()) || void 0 === i || null === (a = i.character) || void 0 === a || null === (s = a.ignoredStaticBodies) || void 0 === s || s.add(o)
        }))
    }
}));