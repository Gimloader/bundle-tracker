import {
    r as k,
    s as C,
    j as b
} from "./_index.js";
import {
    P as f,
    D as w,
    l as p,
    n as y,
    h as l,
    m as u,
    w as I,
    k as v,
    H as B,
    J as P
} from "./FixSpinePlugin.js";
import {
    G as S
} from "./GetAssetPath.js";
import {
    C as T
} from "./ElementIds.js";
import "./MapModeType.js";
import "./MapStyle.js";
import "./playSound.js";
import "./howler.js";
import "./SeasonTicketName.js";
import "./useQuery.js";
const x = {
        type: f.WEBGL,
        roundPixels: !1,
        transparent: !0,
        plugins: {
            scene: [{
                key: "spine.SpinePlugin",
                plugin: w,
                mapping: "spine"
            }]
        },
        scale: {
            mode: f.Scale.NONE,
            autoRound: !0
        },
        parent: "character-preview-div",
        scene: [],
        banner: !1,
        pipeline: {
            skipPipelinesAtBoot: !0
        }
    },
    M = i => {
        i.skinId = i.game.skin, i.editStyles = i.game.editStyles;
        const a = Math.random().toString();
        i.game.cache.json.exists("data_compressed_" + i.skinId) || (i.load.spineJson("data_compressed_" + i.skinId, S(`characters/spine/${i.skinId}.json?cb=${a}`)), i.load.spineAtlas("atlas_" + i.skinId, S(`characters/spine/${i.skinId}.atlas?cb=${a}`)))
    },
    E = i => {
        if (!i.character) return;
        const a = i.character.spine.displayWidth,
            t = i.character.spine.displayHeight,
            e = i.add.rectangle(0, 0, a, t, 16711680).setOrigin(i.character.spine.displayOriginX / a, i.character.spine.displayOriginY / t).setVisible(!1),
            c = e.getBounds();
        e.destroy(), i.cameras.main.centerOn(c.centerX, c.centerY)
    },
    N = .4,
    g = i => {
        const a = document.getElementById("character-preview-div");
        if (!a) return;
        const t = a.clientWidth,
            e = a.clientHeight,
            c = window.devicePixelRatio,
            s = c * t,
            o = c * e,
            r = Math.min(s / t, o / e);
        i.scale.resize(r * t, r * e);
        const h = 1 / r;
        i.game.canvas.style.transform = "scaleX(" + h + ") scaleY(" + h + ")", i.game.canvas.style.transformOrigin = "0 0", i.cameras.main.setZoom(N * r), E(i), i.scale.refresh()
    };
class L {
    constructor(a) {
        this.apply = () => {
            var c;
            const t = this.character.scene.cache.json.get("data_" + this.character.skinId),
                e = [];
            (c = t == null ? void 0 : t.style) == null || c.categories.forEach(s => {
                const o = this.character.scene.editStyles[s.name];
                if (s.type === T.color && s.color) e.push({
                    type: "color",
                    slotNames: s.color.slotNames,
                    color: o || s.color.defaultColor
                });
                else if (s.options.length) {
                    const r = s.options.find(h => o === h.name) ?? s.options[0];
                    e.push(...r.applications)
                }
            }), e.forEach(s => {
                s.type === "color" && s.slotNames.forEach(o => {
                    const r = this.character.spine.skeleton.slots.find(h => {
                        var m;
                        return (h == null ? void 0 : h.data.name) === o || ((m = h == null ? void 0 : h.attachment) == null ? void 0 : m.name) === o
                    });
                    r && (r == null || r.color.setFromString(s.color))
                })
            })
        }, this.character = a
    }
}
class O {
    constructor(a) {
        this.skinChanged = !1, this.availableAnimations = [], this.currentBodyAnimation = p.rest, this.bodyAnimationLocked = !1, this.bodyAnimationStartedAt = 0, this.currentEyeAnimation = y.idle, this.lastGroundedAnimationAt = 0, this.setupAnimations = () => {
            const t = this.character.spine;
            this.availableAnimations = t.skeleton.data.animations.map(e => e.name), t.animationStateData.defaultMix = l.body.transition.defaultDuration, t.animationStateData.setMix(l.body.animationNames.jumpMiddleIdle, l.body.animationNames.jumpDownIdle, l.body.transition.jumpFallingDuration), t.animationStateData.setMix(l.eyes.animationNames.blink, l.eyes.animationNames.idle, 0), t.animationStateData.setMix(l.eyes.animationNames.idle, l.eyes.animationNames.blink, 0), this.playBodyAnimation(this.currentBodyAnimation), this.playEyeAnimation(this.currentEyeAnimation), this.availableAnimations.includes(`skins-${this.character.skinId}-common`) && this.character.spine.animationState.setAnimation(u.COMMON, `skins-${this.character.skinId}-common`, !0), this.character.spine.animationState.addListener({
                complete: e => {
                    this.onAnimationComplete(e)
                }
            })
        }, this.playBodyAnimation = t => {
            var c, s, o;
            if (t === this.currentBodyAnimation && !this.skinChanged) return;
            if (this.bodyAnimationLocked && !this.skinChanged) {
                const r = ((s = (c = l.animationLocks) == null ? void 0 : c[this.currentBodyAnimation]) == null ? void 0 : s[t]) ?? 0;
                if (r) {
                    const h = Date.now(),
                        m = this.bodyAnimationStartedAt + r;
                    if (h < m) return
                }
            }
            const e = !!((o = l.animationLocks) != null && o[t]);
            this.bodyAnimationLocked = e, this.bodyAnimationStartedAt = Date.now(), t === p.rest ? this.startBlinkAnimation() : this.stopBlinkAnimation(), this.currentBodyAnimation = t, this.character.spine.animationState.setAnimation(u.BODY, l.body.animationNames[t], l.bodyLoopedAnimations.includes(t)), this.playBodySupplementalAnimation(t)
        }, this.playEyeAnimation = t => {
            t === this.currentEyeAnimation && !this.skinChanged || (this.currentEyeAnimation = t, this.character.spine.animationState.setAnimation(u.EYES, l.eyes.animationNames[t], !0))
        }, this.playAnimationOrClearTrack = (t, e) => {
            let c = !1;
            for (const s of t)
                if (this.availableAnimations.includes(s)) {
                    this.character.spine.animationState.setAnimation(e, s, !0), c = !0;
                    break
                } c || this.character.spine.animationState.clearTrack(e)
        }, this.playBodySupplementalAnimation = t => {
            this.playAnimationOrClearTrack([`skins-${this.character.skinId}-${l.body.animationNames[t]}`, `skins-${this.character.skinId}-pose`], u.BODY_SUPPLEMENTAL), this.playMovementSupplementalAnimation(t), this.playJumpSupplementalAnimation(t)
        }, this.playMovementSupplementalAnimation = t => {
            this.playAnimationOrClearTrack([`skins-${this.character.skinId}-movement=${t===p.rest?"false":"true"}`], u.MOVEMENT_SUPPLEMENTAL)
        }, this.playJumpSupplementalAnimation = t => {
            const e = l.jumpAnimations.includes(t);
            this.playAnimationOrClearTrack([`skins-${this.character.skinId}-jumping=${e?"true":"false"}`], u.JUMP_SUPPLEMENTAL)
        }, this.startBlinkAnimation = () => {
            this.blinkTimer || (this.playEyeAnimation(y.idle), this.blinkTimer = window.setTimeout(() => {
                this.blinkTimer = null, this.playEyeAnimation(y.blink)
            }, l.eyes.blinkEvery))
        }, this.stopBlinkAnimation = () => {
            this.playEyeAnimation(y.idle), this.blinkTimer && (window.clearTimeout(this.blinkTimer), this.blinkTimer = null)
        }, this.onAnimationComplete = t => {
            t.trackIndex === u.EYES && this.currentBodyAnimation === p.rest && this.currentEyeAnimation === y.blink && this.startBlinkAnimation()
        }, this.toggleAnimation = () => {
            this.currentBodyAnimation === p.rest ? this.playBodyAnimation(p.run) : this.playBodyAnimation(p.rest)
        }, this.onSkinChanged = () => {
            this.skinChanged = !0, this.setupAnimations(), this.skinChanged = !1
        }, this.destroy = () => {
            this.blinkTimer && (window.clearTimeout(this.blinkTimer), this.blinkTimer = null)
        }, this.character = a
    }
}
class _ {
    constructor(a) {
        this.scene = a, this.skinId = a.skinId, this.editStyles = new L(this), this.animation = new O(this), this.spine = a.add.spinePreview(0, 0, "data_" + this.skinId, "atlas_" + this.skinId, new I("idle", [this.skinId])), this.spine.skeleton.setSkinByName(this.skinId), this.editStyles.apply(), this.animation.onSkinChanged(), E(a)
    }
    destroy() {
        this.animation.destroy()
    }
}
class D extends Phaser.Scene {
    constructor() {
        super(...arguments), this.onError = null
    }
    preload() {
        M(this)
    }
    create() {
        const a = this.cache.json.get("data_compressed_" + this.skinId);
        if (!this.cache.json.get("data_" + this.skinId) && a) {
            const e = v.decompress(a);
            this.cache.json.add("data_" + this.skinId, e)
        }
        try {
            this.character = new _(this)
        } catch {
            this.game.onError && this.game.onError()
        }
        g(this), this.resizeListener = () => {
            g(this)
        }, window.addEventListener("resize", this.resizeListener), this.events.on("destroy", () => {
            var e;
            (e = this.character) == null || e.destroy(), window.removeEventListener("resize", this.resizeListener), this.resizeListener = void 0
        })
    }
}
const A = 3;
let n = null,
    d = null;
const X = i => {
    const [a, t] = k.useState(!1), [e, c] = k.useState(0);
    k.useEffect(() => {
        if (!a) return () => {};
        if (e >= A) return () => {};
        d || (d = document.createElement("div"), d.id = "character-preview-div", d.className = "maxWidth maxHeight");
        const o = document.getElementById("character-preview-container");
        return o && d && !o.contains(d) && o.appendChild(d), B(), P(), window.SPINE_GAME_OBJECT_TYPE = "spinePreview", n || (n = new Phaser.Game({
            ...x,
            parent: d
        })), n.onError = () => {
            c(r => r + 1), n == null || n.destroy(!0), n = null
        }, n.skin = i.id, n.editStyles = i.editStyles, n == null || n.scene.remove("CharacterScene"), n == null || n.scene.add("CharacterScene", D, !0), () => {
            e >= A && (n == null || n.destroy(!0), n = null, d = null), n == null || n.scene.remove("CharacterScene")
        }
    }, [a, e, i.id, i.editStyles]), C(() => {
        t(!0)
    });
    const s = () => {
        var o, r, h, m;
        (m = (h = (r = (o = n == null ? void 0 : n.scene) == null ? void 0 : o.scenes[0]) == null ? void 0 : r.character) == null ? void 0 : h.animation) == null || m.toggleAnimation()
    };
    return e >= A ? i.fallback : b.jsx("div", {
        id: "character-preview-container",
        className: "maxWidth maxHeight",
        onClick: s
    })
};
export {
    X as
    default
};