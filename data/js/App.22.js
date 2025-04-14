function e(e, t, i, n) {
    Object.defineProperty(e, t, {
        get: i,
        set: n,
        enumerable: !0,
        configurable: !0
    })
}

function t(e) {
    return e && e.__esModule ? e.default : e
}
var i = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
i.register("bgUN0", (function(t, n) {
    var a;
    a = t.exports, Object.defineProperty(a, "__esModule", {
        value: !0,
        configurable: !0
    }), e(t.exports, "default", (function() {
        return p
    }));
    var r = i("hxEiv"),
        s = i("fywoC"),
        o = i("dK60N"),
        c = i("cPGmn"),
        l = i("2VYgP"),
        d = i("guIBQ"),
        h = i("4efLf");
    let u = null,
        m = null;
    var p = e => {
        const [t, i] = s.useState(!1), [n, a] = s.useState(0);
        s.useEffect((() => {
            if (!t) return () => {};
            if (n >= 3) return () => {};
            m || (m = document.createElement("div"), m.id = "character-preview-div", m.className = "maxWidth maxHeight");
            const i = document.getElementById("character-preview-container");
            return i && m && !i.contains(m) && i.appendChild(m), (0, d.FixSpinePlugin)(), (0, h.FixPhaserBootProcess)(), window.SPINE_GAME_OBJECT_TYPE = "spinePreview", u || (u = new Phaser.Game({
                ...o.CharacterPreviewPhaserConfig,
                parent: m
            })), u.onError = () => {
                a((e => e + 1)), null == u || u.destroy(!0), u = null
            }, u.skin = e.id, u.editStyles = e.editStyles, null == u || u.scene.remove("CharacterScene"), null == u || u.scene.add("CharacterScene", l.CharacterScene, !0), () => {
                n >= 3 && (null == u || u.destroy(!0), u = null, m = null), null == u || u.scene.remove("CharacterScene")
            }
        }), [t, n, e.id, e.editStyles]), (0, c.useDidMount)((() => {
            i(!0)
        }));
        return n >= 3 ? e.fallback : (0, r.jsx)("div", {
            id: "character-preview-container",
            className: "maxWidth maxHeight",
            onClick: () => {
                var e, t, i, n;
                null === (e = null == u || null === (t = u.scene) || void 0 === t ? void 0 : t.scenes[0]) || void 0 === e || null === (i = e.character) || void 0 === i || null === (n = i.animation) || void 0 === n || n.toggleAnimation()
            }
        })
    }
})), i.register("dK60N", (function(n, a) {
    e(n.exports, "CharacterPreviewPhaserConfig", (function() {
        return o
    }));
    var r = i("c3ah8"),
        s = i("iU3pJ");
    const o = {
        type: t(r).WEBGL,
        roundPixels: !1,
        transparent: !0,
        plugins: {
            scene: [{
                key: "spine.SpinePlugin",
                plugin: s.SpinePlugin,
                mapping: "spine"
            }]
        },
        scale: {
            mode: t(r).Scale.NONE,
            autoRound: !0
        },
        parent: "character-preview-div",
        scene: [],
        banner: !1,
        pipeline: {
            skipPipelinesAtBoot: !0
        }
    }
})), i.register("2VYgP", (function(t, n) {
    e(t.exports, "CharacterScene", (function() {
        return l
    }));
    var a = i("divCp"),
        r = i("1gdJQ"),
        s = i("lkzku"),
        o = i("j9OPH"),
        c = i("8DYId");
    class l extends Phaser.Scene {
        preload() {
            (0, r.CharacterScenePreload)(this)
        }
        create() {
            const e = this.cache.json.get("data_compressed_" + this.skinId);
            if (!this.cache.json.get("data_" + this.skinId) && e) {
                const t = (0, o.decompress)(e);
                this.cache.json.add("data_" + this.skinId, t)
            }
            try {
                this.character = new(0, c.CharacterSceneCharacter)(this)
            } catch (e) {
                this.game.onError && this.game.onError()
            }(0, s.CharacterSceneHandleResize)(this), this.resizeListener = () => {
                (0, s.CharacterSceneHandleResize)(this)
            }, window.addEventListener("resize", this.resizeListener), this.events.on("destroy", (() => {
                var e;
                null === (e = this.character) || void 0 === e || e.destroy(), window.removeEventListener("resize", this.resizeListener), this.resizeListener = void 0
            }))
        }
        constructor(...e) {
            super(...e), (0, a.default)(this, "onError", null)
        }
    }
})), i.register("1gdJQ", (function(t, n) {
    e(t.exports, "CharacterScenePreload", (function() {
        return r
    }));
    var a = i("alREA");
    const r = e => {
        e.skinId = e.game.skin, e.editStyles = e.game.editStyles;
        const t = Math.random().toString();
        e.game.cache.json.exists("data_compressed_" + e.skinId) || (e.load.spineJson("data_compressed_" + e.skinId, (0, a.default)(`characters/spine/${e.skinId}.json?cb=${t}`)), e.load.spineAtlas("atlas_" + e.skinId, (0, a.default)(`characters/spine/${e.skinId}.atlas?cb=${t}`)))
    }
})), i.register("lkzku", (function(t, n) {
    e(t.exports, "CharacterSceneHandleResize", (function() {
        return r
    }));
    var a = i("8v0T6");
    const r = e => {
        const t = document.getElementById("character-preview-div");
        if (!t) return;
        const i = t.clientWidth,
            n = t.clientHeight,
            r = window.devicePixelRatio,
            s = r * i,
            o = r * n,
            c = Math.min(s / i, o / n);
        e.scale.resize(c * i, c * n);
        const l = 1 / c;
        e.game.canvas.style.transform = "scaleX(" + l + ") scaleY(" + l + ")", e.game.canvas.style.transformOrigin = "0 0", e.cameras.main.setZoom(.4 * c), (0, a.CharacterSceneCenterCameraOnCharacter)(e), e.scale.refresh()
    }
})), i.register("8v0T6", (function(t, i) {
    e(t.exports, "CharacterSceneCenterCameraOnCharacter", (function() {
        return n
    }));
    const n = e => {
        if (!e.character) return;
        const t = e.character.spine.displayWidth,
            i = e.character.spine.displayHeight,
            n = e.add.rectangle(0, 0, t, i, 16711680).setOrigin(e.character.spine.displayOriginX / t, e.character.spine.displayOriginY / i).setVisible(!1),
            a = n.getBounds();
        n.destroy(), e.cameras.main.centerOn(a.centerX, a.centerY)
    }
})), i.register("8DYId", (function(t, n) {
    e(t.exports, "CharacterSceneCharacter", (function() {
        return c
    }));
    var a = i("iU3pJ"),
        r = i("3lExj"),
        s = i("8v0T6"),
        o = i("gwOzO");
    class c {
        destroy() {
            this.animation.destroy()
        }
        constructor(e) {
            this.scene = e, this.skinId = e.skinId, this.editStyles = new(0, r.CharacterSceneCharacterEditStyles)(this), this.animation = new(0, o.CharacterSceneAnimation)(this), this.spine = e.add.spinePreview(0, 0, "data_" + this.skinId, "atlas_" + this.skinId, new(0, a.SkinsAndAnimationBoundsProvider)("idle", [this.skinId])), this.spine.skeleton.setSkinByName(this.skinId), this.editStyles.apply(), this.animation.onSkinChanged(), (0, s.CharacterSceneCenterCameraOnCharacter)(e)
        }
    }
})), i.register("3lExj", (function(t, n) {
    e(t.exports, "CharacterSceneCharacterEditStyles", (function() {
        return s
    }));
    var a = i("divCp"),
        r = i("6a2jS");
    class s {
        constructor(e) {
            (0, a.default)(this, "apply", (() => {
                var e;
                const t = this.character.scene.cache.json.get("data_" + this.character.skinId),
                    i = [];
                null == t || null === (e = t.style) || void 0 === e || e.categories.forEach((e => {
                    const t = this.character.scene.editStyles[e.name];
                    if (e.type === r.CosmeticStyleCategoryType.color && e.color) i.push({
                        type: "color",
                        slotNames: e.color.slotNames,
                        color: t || e.color.defaultColor
                    });
                    else if (e.options.length) {
                        var n;
                        const a = null !== (n = e.options.find((e => t === e.name))) && void 0 !== n ? n : e.options[0];
                        i.push(...a.applications)
                    }
                })), i.forEach((e => {
                    "color" === e.type && e.slotNames.forEach((t => {
                        const i = this.character.spine.skeleton.slots.find((e => {
                            var i;
                            return (null == e ? void 0 : e.data.name) === t || (null == e || null === (i = e.attachment) || void 0 === i ? void 0 : i.name) === t
                        }));
                        i && (null == i || i.color.setFromString(e.color))
                    }))
                }))
            })), this.character = e
        }
    }
})), i.register("gwOzO", (function(t, n) {
    e(t.exports, "CharacterSceneAnimation", (function() {
        return d
    }));
    var a = i("divCp"),
        r = i("dtviq");
    const s = 0,
        o = 1,
        c = 2,
        l = 3;
    class d {
        constructor(e) {
            (0, a.default)(this, "skinChanged", !1), (0, a.default)(this, "availableAnimations", []), (0, a.default)(this, "currentBodyAnimation", r.CharacterBodyAnimationState.rest), (0, a.default)(this, "bodyAnimationLocked", !1), (0, a.default)(this, "bodyAnimationStartedAt", 0), (0, a.default)(this, "currentEyeAnimation", r.CharacterEyeAnimationState.idle), (0, a.default)(this, "lastGroundedAnimationAt", 0), (0, a.default)(this, "setupAnimations", (() => {
                const e = this.character.spine;
                this.availableAnimations = e.skeleton.data.animations.map((e => e.name));
                const t = Object.values(r.default.body.animationNames);
                t.forEach((i => {
                    t.forEach((t => {
                        let n = r.default.body.transition.defaultDuration;
                        i === r.CharacterBodyAnimationState.jumpMiddleIdle && t === r.CharacterBodyAnimationState.jumpDownIdle && (n = r.default.body.transition.jumpFallingDuration), e.animationStateData.setMix(i, t, n)
                    }))
                })), this.playBodyAnimation(this.currentBodyAnimation), this.playEyeAnimation(this.currentEyeAnimation), this.availableAnimations.includes(`skins-${this.character.skinId}-common`) && this.character.spine.animationState.setAnimation(s, `skins-${this.character.skinId}-common`, !0), this.character.spine.animationState.addListener({
                    complete: e => {
                        this.onAnimationComplete(e)
                    }
                })
            })), (0, a.default)(this, "playBodyAnimation", (e => {
                var t;
                if (e === this.currentBodyAnimation && !this.skinChanged) return;
                if (this.bodyAnimationLocked && !this.skinChanged) {
                    var i, n, a;
                    const t = null !== (a = null === (i = r.default.animationLocks) || void 0 === i || null === (n = i[this.currentBodyAnimation]) || void 0 === n ? void 0 : n[e]) && void 0 !== a ? a : 0;
                    if (t) {
                        if (Date.now() < this.bodyAnimationStartedAt + t) return
                    }
                }
                const s = !!(null === (t = r.default.animationLocks) || void 0 === t ? void 0 : t[e]);
                this.bodyAnimationLocked = s, this.bodyAnimationStartedAt = Date.now(), e === r.CharacterBodyAnimationState.rest ? this.startBlinkAnimation() : this.stopBlinkAnimation(), this.currentBodyAnimation = e, this.character.spine.animationState.setAnimation(l, r.default.body.animationNames[e], r.default.bodyLoopedAnimations.includes(e)), this.playBodySupplementalAnimation(e)
            })), (0, a.default)(this, "playEyeAnimation", (e => {
                (e !== this.currentEyeAnimation || this.skinChanged) && (this.currentEyeAnimation = e, this.character.spine.animationState.setAnimation(c, r.default.eyes.animationNames[e], !0))
            })), (0, a.default)(this, "playBodySupplementalAnimation", (e => {
                const t = r.default.body.animationNames[e],
                    i = "skins-" + this.character.skinId + "-" + t;
                this.availableAnimations.includes(i) ? this.character.spine.animationState.setAnimation(o, i, !0) : this.character.spine.animationState.clearTrack(o)
            })), (0, a.default)(this, "startBlinkAnimation", (() => {
                this.blinkTimer || (this.playEyeAnimation(r.CharacterEyeAnimationState.idle), this.blinkTimer = window.setTimeout((() => {
                    this.blinkTimer = null, this.playEyeAnimation(r.CharacterEyeAnimationState.blink)
                }), r.default.eyes.blinkEvery))
            })), (0, a.default)(this, "stopBlinkAnimation", (() => {
                this.playEyeAnimation(r.CharacterEyeAnimationState.idle), this.blinkTimer && (window.clearTimeout(this.blinkTimer), this.blinkTimer = null)
            })), (0, a.default)(this, "onAnimationComplete", (e => {
                e.trackIndex === c && this.currentBodyAnimation === r.CharacterBodyAnimationState.rest && this.currentEyeAnimation === r.CharacterEyeAnimationState.blink && this.startBlinkAnimation()
            })), (0, a.default)(this, "toggleAnimation", (() => {
                this.currentBodyAnimation === r.CharacterBodyAnimationState.rest ? this.playBodyAnimation(r.CharacterBodyAnimationState.run) : this.playBodyAnimation(r.CharacterBodyAnimationState.rest)
            })), (0, a.default)(this, "onSkinChanged", (() => {
                this.skinChanged = !0, this.setupAnimations(), this.skinChanged = !1
            })), (0, a.default)(this, "destroy", (() => {
                this.blinkTimer && (window.clearTimeout(this.blinkTimer), this.blinkTimer = null)
            })), this.character = e
        }
    }
}));