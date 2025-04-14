function e(e, t, i, s) {
    Object.defineProperty(e, t, {
        get: i,
        set: s,
        enumerable: !0,
        configurable: !0
    })
}
var t = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
t.register("3HIyH", (function(i, s) {
    var o;
    o = i.exports, Object.defineProperty(o, "__esModule", {
        value: !0,
        configurable: !0
    }), e(i.exports, "default", (function() {
        return g
    }));
    var n = t("divCp"),
        a = t("bNmF9"),
        c = t("1kCHL"),
        l = t("bvStP"),
        d = t("6Tpu2"),
        r = t("4uojN"),
        h = t("cK78N"),
        u = t("KsBXP"),
        p = t("cnijD");
    let v;
    var y;
    (y = v || (v = {})).idleActive = "idle-active", y.idleInactive = "idle-inactive", y.explode = "explode", y.reactivate = "reactivate";
    class f extends a.default {
        constructor(e) {
            super(e), (0, n.default)(this, "use", (() => {
                this.playAnimation(v.explode)
            })), (0, n.default)(this, "recharge", (() => {
                this.state.active && this.playAnimation(v.reactivate)
            })), (0, n.default)(this, "activate", (() => {
                this.state.charged && this.playAnimation(v.idleActive)
            })), (0, n.default)(this, "deactivate", (() => {
                this.playAnimation(v.idleInactive)
            })), (0, n.default)(this, "playAnimation", (e => {
                if (!this.spine.view) return;
                const t = e === v.idleActive || e === v.idleInactive;
                this.spine.view.animationState.setAnimation(0, e, t)
            })), (0, n.default)(this, "onStateChange", (e => {
                "active" === e && (this.state.active ? this.activate() : this.deactivate()), "charged" === e && !1 === this.prevState.charged && !0 === this.state.charged && this.recharge(), "useCounter" === e && this.state.useCounter > 0 && this.use()
            })), (0, n.default)(this, "setupView", (() => {
                const e = u.LuckyBlockDeviceConsts.boundingBox.width,
                    t = u.LuckyBlockDeviceConsts.boundingBox.height;
                this.spine = this.parts.add.spine({
                    ...c.SpineAsset,
                    spineViewId: this.id,
                    y: (t / 2 - u.LuckyBlockDeviceConsts.spine.yCorrection) * this.options.scale,
                    defaultAnimation: this.options.activeOnGameStart ? v.idleActive : v.idleInactive,
                    boundingBox: {
                        left: -e / 2 * this.options.scale,
                        right: e / 2 * this.options.scale,
                        top: (-t + u.LuckyBlockDeviceConsts.spine.yCorrection) * this.options.scale,
                        bottom: 2 * this.options.scale
                    },
                    onAnimationComplete: e => {
                        e === v.reactivate && this.playAnimation(v.idleActive), e === v.explode && this.state.active && 0 === this.options.rechargeAfterTime && this.playAnimation(v.reactivate)
                    },
                    onReady: e => {
                        e.view.setScale(u.LuckyBlockDeviceConsts.spine.baseScale * this.options.scale)
                    }
                })
            })), (0, n.default)(this, "setupCollider", (() => {
                this.colliders.add.box({
                    x: u.LuckyBlockDeviceConsts.collisions.x * this.options.scale,
                    y: u.LuckyBlockDeviceConsts.collisions.y * this.options.scale,
                    w: u.LuckyBlockDeviceConsts.collisions.width * this.options.scale + u.LuckyBlockDeviceConsts.collisions.margin,
                    h: u.LuckyBlockDeviceConsts.collisions.height * this.options.scale
                })
            })), (0, n.default)(this, "setupShadow", (() => {
                this.options.showShadow && this.shadows.add({
                    x: u.LuckyBlockDeviceConsts.shadow.x * this.options.scale,
                    y: u.LuckyBlockDeviceConsts.shadow.y * this.options.scale,
                    r1: u.LuckyBlockDeviceConsts.shadow.r1 * this.options.scale,
                    r2: u.LuckyBlockDeviceConsts.shadow.r2 * this.options.scale
                })
            })), (0, n.default)(this, "setupVisualEditing", (() => {
                if ((0, d.InGamePhase)() || (0, r.isPublishedVersion)()) return;
                const e = (0, h.FetchOptionSchemaProperty)(this, "scale"),
                    t = u.LuckyBlockDeviceConsts.boundingBox.width,
                    i = u.LuckyBlockDeviceConsts.boundingBox.height;
                this.visualEditing.add.box({
                    keepRatio: !0,
                    rotable: !1,
                    width: t * this.options.scale,
                    height: i * this.options.scale,
                    minWidth: t * e.min,
                    maxWidth: t * e.max,
                    minHeight: i * e.min,
                    maxHeight: i * e.max,
                    onChange: e => {
                        (0, p.ReplaceVisualEditingPreview)(e.x, e.y, {
                            scale: e.width / t
                        })
                    }
                })
            })), this.layers.setDefaultLayer(l.default.DepthSortedCharactersAndDevices), this.setupView(), this.setupShadow(), this.setupCollider(), this.setupVisualEditing()
        }
    }
    var g = f
})), t.register("1kCHL", (function(i, s) {
    e(i.exports, "SpineAsset", (function() {
        return n
    }));
    var o = t("alREA");
    const n = {
        atlasUrl: (0, o.default)("devices/lucky_block/spine/luckyBlock.atlas"),
        jsonUrl: (0, o.default)("devices/lucky_block/spine/luckyBlock.json")
    }
})), t.register("cK78N", (function(t, i) {
    e(t.exports, "FetchOptionSchemaProperty", (function() {
        return s
    }));
    const s = (e, t) => {
        var i, s, o;
        const n = e.deviceOption.optionSchema.options.find((e => e.key === t));
        return {
            min: null === (i = null == n ? void 0 : n.option.props) || void 0 === i ? void 0 : i.min,
            max: null === (s = null == n ? void 0 : n.option.props) || void 0 === s ? void 0 : s.max,
            step: null === (o = null == n ? void 0 : n.option.props) || void 0 === o ? void 0 : o.step
        }
    }
})), t.register("KsBXP", (function(t, i) {
    e(t.exports, "LuckyBlockDeviceConsts", (function() {
        return s
    }));
    const s = {
        boundingBox: {
            width: 110,
            height: 134
        },
        collisions: {
            x: 0,
            y: 17,
            width: 110,
            height: 100,
            margin: 22
        },
        spine: {
            yCorrection: 2,
            baseScale: .2
        },
        shadow: {
            x: 0,
            y: 35,
            r1: 70,
            r2: 60
        }
    }
})), t.register("cnijD", (function(i, s) {
    e(i.exports, "ReplaceVisualEditingPreview", (function() {
        return l
    }));
    var o = t("dWqri"),
        n = t("eCsxR"),
        a = t("ittx1"),
        c = t("dNzyU");
    const l = (e, t, i) => {
        const s = (0, c.FetchVisualEditingPreview)(),
            l = (0, a.FetchCurrentlyEditedDevice)();
        if (!l || !s) return;
        const d = l.layers.isOnNaturalDepth() ? void 0 : t + l.layers.getDepthShift();
        (0, n.default)({
            deviceOption: s.deviceOption,
            id: o.VisualEditingConstants.previewId,
            x: e,
            y: t,
            depth: d,
            layerId: l.layers.getLayer(),
            name: s.name,
            isPreview: !0,
            options: {
                ...s.options,
                ...i
            },
            placedByClient: !0,
            state: s.deviceOption.defaultState
        })
    }
})), t.register("eCsxR", (function(i, s) {
    e(i.exports, "default", (function() {
        return a
    }));
    var o = t("gwuwo"),
        n = t("fCcDT");
    var a = e => {
        (0, o.default)().worldManager.devices.getDeviceById(e.id) && (0, n.default)(e)
    }
}));