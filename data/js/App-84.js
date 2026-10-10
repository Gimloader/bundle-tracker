import {
    o as e
} from "./rolldown-runtime.js";
import {
    t
} from "./react-1.js";
import {
    t as n
} from "./jsx-runtime.js";
import {
    a as r
} from "./_index.js";
import {
    t as i
} from "./GetAssetPath.js";
import {
    l as a
} from "./Navigation.js";
import {
    t as o
} from "./phaser.js";
import {
    A as s,
    F as c,
    M as l,
    N as u,
    P as d,
    j as f,
    n as p,
    r as m,
    t as h
} from "./FixPhaserBootProcess.js";
var g = e(t()),
    _ = e(o()),
    v = {
        type: _.default.WEBGL,
        roundPixels: !1,
        transparent: !0,
        plugins: {
            scene: [{
                key: `spine.SpinePlugin`,
                plugin: d,
                mapping: `spine`
            }]
        },
        scale: {
            mode: _.default.Scale.NONE,
            autoRound: !0
        },
        parent: `character-preview-div`,
        scene: [],
        banner: !1,
        pipeline: {
            skipPipelinesAtBoot: !0
        }
    },
    y = e => {
        e.skinId = e.game.skin, e.editStyles = e.game.editStyles;
        let t = Math.random().toString();
        e.game.cache.json.exists(`data_compressed_` + e.skinId) || (e.load.spineJson(`data_compressed_` + e.skinId, i(`characters/spine/${e.skinId}.json?cb=${t}`)), e.load.spineAtlas(`atlas_` + e.skinId, i(`characters/spine/${e.skinId}.atlas?cb=${t}`)))
    },
    b = e => {
        if (!e.character) return;
        let t = e.character.spine.displayWidth,
            n = e.character.spine.displayHeight,
            r = e.add.rectangle(0, 0, t, n, 16711680).setOrigin(e.character.spine.displayOriginX / t, e.character.spine.displayOriginY / n).setVisible(!1),
            i = r.getBounds();
        r.destroy(), e.cameras.main.centerOn(i.centerX, i.centerY)
    },
    x = .4,
    S = e => {
        let t = document.getElementById(`character-preview-div`);
        if (!t) return;
        let n = t.clientWidth,
            r = t.clientHeight,
            i = window.devicePixelRatio,
            a = i * n,
            o = i * r,
            s = Math.min(a / n, o / r);
        e.scale.resize(s * n, s * r);
        let c = 1 / s;
        e.game.canvas.style.transform = `scaleX(` + c + `) scaleY(` + c + `)`, e.game.canvas.style.transformOrigin = `0 0`, e.cameras.main.setZoom(x * s), b(e), e.scale.refresh()
    },
    C = u(),
    w = class {
        constructor(e) {
            this.apply = () => {
                var e;
                let t = this.character.scene.cache.json.get(`data_` + this.character.skinId),
                    n = [];
                t == null || (e = t.style) == null || e.categories.forEach(e => {
                    let t = this.character.scene.editStyles[e.name];
                    if (e.type === a.color && e.color) n.push({
                        type: `color`,
                        slotNames: e.color.slotNames,
                        color: t || e.color.defaultColor
                    });
                    else if (e.options.length) {
                        let r = e.options.find(e => t === e.name) ?? e.options[0];
                        n.push(...r.applications)
                    }
                }), n.forEach(e => {
                    e.type === `color` && e.slotNames.forEach(t => {
                        let n = this.character.spine.skeleton.slots.find(e => {
                            var n;
                            return (e == null ? void 0 : e.data.name) === t || (e == null || (n = e.attachment) == null ? void 0 : n.name) === t
                        });
                        n && (n == null || n.color.setFromString(e.color))
                    })
                })
            }, this.character = e
        }
    },
    T = class {
        constructor(e) {
            this.skinChanged = !1, this.availableAnimations = [], this.currentBodyAnimation = f.rest, this.bodyAnimationLocked = !1, this.bodyAnimationStartedAt = 0, this.currentEyeAnimation = l.idle, this.lastGroundedAnimationAt = 0, this.setupAnimations = () => {
                let e = this.character.spine;
                this.availableAnimations = e.skeleton.data.animations.map(e => e.name), e.animationStateData.defaultMix = s.body.transition.defaultDuration, e.animationStateData.setMix(s.body.animationNames.jumpMiddleIdle, s.body.animationNames.jumpDownIdle, s.body.transition.jumpFallingDuration), e.animationStateData.setMix(s.eyes.animationNames.blink, s.eyes.animationNames.idle, 0), e.animationStateData.setMix(s.eyes.animationNames.idle, s.eyes.animationNames.blink, 0), this.playBodyAnimation(this.currentBodyAnimation), this.playEyeAnimation(this.currentEyeAnimation), this.availableAnimations.includes(`skins-${this.character.skinId}-common`) && this.character.spine.animationState.setAnimation(m.COMMON, `skins-${this.character.skinId}-common`, !0), this.character.spine.animationState.addListener({
                    complete: e => {
                        this.onAnimationComplete(e)
                    }
                })
            }, this.playBodyAnimation = e => {
                var t;
                if (e === this.currentBodyAnimation && !this.skinChanged) return;
                if (this.bodyAnimationLocked && !this.skinChanged) {
                    var n;
                    let t = ((n = s.animationLocks) == null || (n = n[this.currentBodyAnimation]) == null ? void 0 : n[e]) ?? 0;
                    if (t && Date.now() < this.bodyAnimationStartedAt + t) return
                }
                let r = !!((t = s.animationLocks) != null && t[e]);
                this.bodyAnimationLocked = r, this.bodyAnimationStartedAt = Date.now(), e === f.rest ? this.startBlinkAnimation() : this.stopBlinkAnimation(), this.currentBodyAnimation = e, this.character.spine.animationState.setAnimation(m.BODY, s.body.animationNames[e], s.bodyLoopedAnimations.includes(e)), this.playBodySupplementalAnimation(e)
            }, this.playEyeAnimation = e => {
                (e !== this.currentEyeAnimation || this.skinChanged) && (this.currentEyeAnimation = e, this.character.spine.animationState.setAnimation(m.EYES, s.eyes.animationNames[e], !0))
            }, this.playAnimationOrClearTrack = (e, t) => {
                let n = !1;
                for (let r of e)
                    if (this.availableAnimations.includes(r)) {
                        this.character.spine.animationState.setAnimation(t, r, !0), n = !0;
                        break
                    } n || this.character.spine.animationState.clearTrack(t)
            }, this.playBodySupplementalAnimation = e => {
                this.playAnimationOrClearTrack([`skins-${this.character.skinId}-${s.body.animationNames[e]}`, `skins-${this.character.skinId}-pose`], m.BODY_SUPPLEMENTAL), this.playMovementSupplementalAnimation(e), this.playJumpSupplementalAnimation(e)
            }, this.playMovementSupplementalAnimation = e => {
                this.playAnimationOrClearTrack([`skins-${this.character.skinId}-movement=${e===f.rest?`false`:`true`}`], m.MOVEMENT_SUPPLEMENTAL)
            }, this.playJumpSupplementalAnimation = e => {
                let t = s.jumpAnimations.includes(e);
                this.playAnimationOrClearTrack([`skins-${this.character.skinId}-jumping=${t?`true`:`false`}`], m.JUMP_SUPPLEMENTAL)
            }, this.startBlinkAnimation = () => {
                this.blinkTimer || (this.playEyeAnimation(l.idle), this.blinkTimer = window.setTimeout(() => {
                    this.blinkTimer = null, this.playEyeAnimation(l.blink)
                }, s.eyes.blinkEvery))
            }, this.stopBlinkAnimation = () => {
                this.playEyeAnimation(l.idle), this.blinkTimer && (window.clearTimeout(this.blinkTimer), this.blinkTimer = null)
            }, this.onAnimationComplete = e => {
                e.trackIndex === m.EYES && this.currentBodyAnimation === f.rest && this.currentEyeAnimation === l.blink && this.startBlinkAnimation()
            }, this.toggleAnimation = () => {
                this.currentBodyAnimation === f.rest ? this.playBodyAnimation(f.run) : this.playBodyAnimation(f.rest)
            }, this.onSkinChanged = () => {
                this.skinChanged = !0, this.setupAnimations(), this.skinChanged = !1
            }, this.destroy = () => {
                this.blinkTimer && (window.clearTimeout(this.blinkTimer), this.blinkTimer = null)
            }, this.character = e
        }
    },
    E = class {
        constructor(e) {
            this.scene = e, this.skinId = e.skinId, this.editStyles = new w(this), this.animation = new T(this), this.spine = e.add.spinePreview(0, 0, `data_` + this.skinId, `atlas_` + this.skinId, new c(`idle`, [this.skinId])), this.spine.skeleton.setSkinByName(this.skinId), this.editStyles.apply(), this.animation.onSkinChanged(), b(e)
        }
        destroy() {
            this.animation.destroy()
        }
    },
    D = class extends Phaser.Scene {
        constructor(...e) {
            super(...e), this.onError = null
        }
        preload() {
            y(this)
        }
        create() {
            let e = this.cache.json.get(`data_compressed_` + this.skinId);
            if (!this.cache.json.get(`data_` + this.skinId) && e) {
                let t = (0, C.decompress)(e);
                this.cache.json.add(`data_` + this.skinId, t)
            }
            try {
                this.character = new E(this)
            } catch {
                this.game.onError && this.game.onError()
            }
            S(this), this.resizeListener = () => {
                S(this)
            }, window.addEventListener(`resize`, this.resizeListener), this.events.on(`destroy`, () => {
                var e;
                (e = this.character) == null || e.destroy(), window.removeEventListener(`resize`, this.resizeListener), this.resizeListener = void 0
            })
        }
    },
    O = n(),
    k = 3,
    A = null,
    j = null,
    M = e => {
        let [t, n] = g.useState(!1), [i, a] = g.useState(0);
        return g.useEffect(() => {
            if (!t || i >= k) return () => {};
            j || (j = document.createElement(`div`), j.id = `character-preview-div`, j.className = `maxWidth maxHeight`);
            let n = document.getElementById(`character-preview-container`);
            return n && j && !n.contains(j) && n.appendChild(j), p(), h(), window.SPINE_GAME_OBJECT_TYPE = `spinePreview`, A || (A = new Phaser.Game({
                ...v,
                parent: j
            })), A.onError = () => {
                a(e => e + 1), A == null || A.destroy(!0), A = null
            }, A.skin = e.id, A.editStyles = e.editStyles, A == null || A.scene.remove(`CharacterScene`), A == null || A.scene.add(`CharacterScene`, D, !0), () => {
                i >= k && (A == null || A.destroy(!0), A = null, j = null), A == null || A.scene.remove(`CharacterScene`)
            }
        }, [t, i, e.id, e.editStyles]), r(() => {
            n(!0)
        }), i >= k ? e.fallback : (0, O.jsx)(`div`, {
            id: `character-preview-container`,
            className: `maxWidth maxHeight`,
            onClick: () => {
                var e;
                A == null || (e = A.scene) == null || (e = e.scenes[0]) == null || (e = e.character) == null || (e = e.animation) == null || e.toggleAnimation()
            }
        })
    };
export {
    M as
    default
};