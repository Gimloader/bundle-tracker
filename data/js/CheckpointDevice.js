function e(e, t, i, n) {
    Object.defineProperty(e, t, {
        get: i,
        set: n,
        enumerable: !0,
        configurable: !0
    })
}
var t = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
t.register("iSn9u", (function(i, n) {
    var a;
    a = i.exports, Object.defineProperty(a, "__esModule", {
        value: !0,
        configurable: !0
    }), e(i.exports, "default", (function() {
        return w
    }));
    var s = t("divCp"),
        o = t("alREA"),
        d = t("9oxA4"),
        r = t("4uojN"),
        h = t("6Tpu2"),
        l = t("3iPiZ"),
        u = t("jVQO4"),
        p = t("cnijD"),
        c = t("cK78N"),
        v = t("bNmF9");
    const f = "checkpoint-idle",
        b = "checkpoint-pop";
    class g extends v.default {
        constructor(e) {
            if (super(e), (0, s.default)(this, "bubbleIsReady", !1), (0, s.default)(this, "createdAt", Date.now()), (0, s.default)(this, "onBubbleActiveChange", (() => {
                    this.state.active ? (Date.now() - this.createdAt > 1e3 && this.options.playAudio && this.options.visibleInGame && this.cull.isInsideView && (0, u.playSound)({
                        path: (0, o.default)("devices/checkpoint/sound.mp3"),
                        volume: (0, l.getVolume)({
                            volume: .75,
                            type: l.SoundType.soundEffect
                        })
                    }), this.bubble.view.play(b)) : (this.bubble.view.setAlpha(0), this.tweens.add({
                        targets: this.bubble.view,
                        alpha: 1,
                        duration: 400
                    }), this.bubble.view.play(f))
                })), (0, s.default)(this, "onStateChange", (() => {
                    this.bubbleIsReady && this.onBubbleActiveChange()
                })), ((0, r.isPublishedVersion)() || (0, h.InGamePhase)()) && (!this.options.visibleInGame || !this.options.enabled)) return;
            const t = (0, c.FetchOptionSchemaProperty)(this, "width");
            this.bubble = this.parts.add.animatedSprite({
                spritesheetId: "checkpoint-device",
                spritesheetUrl: (0, o.default)("devices/checkpoint/bubble.png"),
                frameWidth: 500,
                frameHeight: 492,
                animations: [{
                    animName: f,
                    frameRate: 1,
                    animFrames: {
                        start: 0,
                        end: 0
                    }
                }, {
                    animName: b,
                    frameRate: 34,
                    animFrames: {
                        start: 0,
                        end: 11
                    },
                    repeat: 0
                }],
                onReady: e => {
                    const i = (0, d.default)({
                        width: e.view.width,
                        height: e.view.height,
                        newWidth: this.options.width
                    });
                    e.view.displayWidth = i.width, e.view.displayHeight = i.height;
                    const n = i.height / e.view.height,
                        a = t.min * n,
                        s = t.max * n;
                    this.visualEditing.add.box({
                        angle: 0,
                        rotable: !1,
                        width: i.width,
                        height: i.height,
                        minWidth: t.min,
                        maxWidth: t.max,
                        minHeight: a,
                        maxHeight: s,
                        onChange: e => {
                            (0, p.ReplaceVisualEditingPreview)(e.x, e.y, {
                                width: e.width
                            })
                        }
                    }), this.tweens.add({
                        targets: e.view,
                        y: e.view.y - i.height / 20,
                        duration: 1500,
                        yoyo: !0,
                        repeat: -1,
                        ease: Phaser.Math.Easing.Sine.InOut
                    }), this.state.active ? (e.view.setAlpha(0), e.view.play(b)) : e.view.play(f), this.bubbleIsReady = !0
                }
            })
        }
    }
    var w = g
})), t.register("9oxA4", (function(t, i) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = e => {
        const t = e.newWidth / e.width;
        return {
            height: e.height * t,
            width: e.width * t
        }
    }
})), t.register("cnijD", (function(i, n) {
    e(i.exports, "ReplaceVisualEditingPreview", (function() {
        return r
    }));
    var a = t("dWqri"),
        s = t("eCsxR"),
        o = t("ittx1"),
        d = t("dNzyU");
    const r = (e, t, i) => {
        const n = (0, d.FetchVisualEditingPreview)(),
            r = (0, o.FetchCurrentlyEditedDevice)();
        if (!r || !n) return;
        const h = r.layers.isOnNaturalDepth() ? void 0 : t + r.layers.getDepthShift();
        (0, s.default)({
            deviceOption: n.deviceOption,
            id: a.VisualEditingConstants.previewId,
            x: e,
            y: t,
            depth: h,
            layerId: r.layers.getLayer(),
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
        return o
    }));
    var a = t("gwuwo"),
        s = t("fCcDT");
    var o = e => {
        (0, a.default)().worldManager.devices.getDeviceById(e.id) && (0, s.default)(e)
    }
})), t.register("cK78N", (function(t, i) {
    e(t.exports, "FetchOptionSchemaProperty", (function() {
        return n
    }));
    const n = (e, t) => {
        var i, n, a;
        const s = e.deviceOption.optionSchema.options.find((e => e.key === t));
        return {
            min: null === (i = null == s ? void 0 : s.option.props) || void 0 === i ? void 0 : i.min,
            max: null === (n = null == s ? void 0 : s.option.props) || void 0 === n ? void 0 : n.max,
            step: null === (a = null == s ? void 0 : s.option.props) || void 0 === a ? void 0 : a.step
        }
    }
}));