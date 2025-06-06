function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}

function b(c) {
    return c && c.__esModule ? c.default : c;
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('.....', function(d, e) {
    var f;
    f = d.exports, Object.defineProperty(f, '__esModule', {
        value: !0,
        configurable: !0
    }), a(d.exports, 'default', function() {
        return _p;
    });
    var g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....'),
        m = c('.....');
    let n = null,
        o = null;
    var _p = q => {
        const [r, s] = h.useState(!1), [t, u] = h.useState(0);
        h.useEffect(() => {
            if (!r)
                return () => {};
            if (t >= 3)
                return () => {};
            o || (o = document.createElement('div'), o.id = 'character-preview-div', o.className = 'maxWidth maxHeight');
            const v = document.getElementById('character-preview-container');
            return v && o && !v.contains(o) && v.appendChild(o), (0, l.FixSpinePlugin)(), (0, m.FixPhaserBootProcess)(), window.SPINE_GAME_OBJECT_TYPE = 'spinePreview', n || (n = new Phaser.Game({
                ...i.CharacterPreviewPhaserConfig,
                parent: o
            })), n.onError = () => {
                u(w => w + 1), null == n || n.destroy(!0), n = null;
            }, n.skin = q.id, n.editStyles = q.editStyles, null == n || n.scene.remove('CharacterScene'), null == n || n.scene.add('CharacterScene', k.CharacterScene, !0), () => {
                t >= 3 && (null == n || n.destroy(!0), n = null, o = null), null == n || n.scene.remove('CharacterScene');
            };
        }, [
            r,
            t,
            q.id,
            q.editStyles
        ]), (0, j.useDidMount)(() => {
            s(!0);
        });
        return t >= 3 ? q.fallback : (0, g.jsx)('div', {
            id: 'character-preview-container',
            className: 'maxWidth maxHeight',
            onClick: () => {
                var v, w, x, y;
                null === (v = null == n || null === (w = n.scene) || void 0 === w ? void 0 : w.scenes[0]) || void 0 === v || null === (x = v.character) || void 0 === x || null === (y = x.animation) || void 0 === y || y.toggleAnimation();
            }
        });
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'CharacterPreviewPhaserConfig', function() {
        return _h;
    });
    var f = c('.....'),
        g = c('.....');
    const _h = {
        type: b(f).WEBGL,
        roundPixels: !1,
        transparent: !0,
        plugins: {
            scene: [{
                key: 'spine.SpinePlugin',
                plugin: g.SpinePlugin,
                mapping: 'spine'
            }]
        },
        scale: {
            mode: b(f).Scale.NONE,
            autoRound: !0
        },
        parent: 'character-preview-div',
        scene: [],
        banner: !1,
        pipeline: {
            skipPipelinesAtBoot: !0
        }
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'CharacterScene', function() {
        return _k;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....');
    class _k extends Phaser.Scene {
        preload() {
            (0, g.CharacterScenePreload)(this);
        }
        create() {
            const l = this.cache.json.get('data_compressed_' + this.skinId);
            if (!this.cache.json.get('data_' + this.skinId) && l) {
                const m = (0, i.decompress)(l);
                this.cache.json.add('data_' + this.skinId, m);
            }
            try {
                this.character = new(0, j.CharacterSceneCharacter)(this);
            } catch (l) {
                this.game.onError && this.game.onError();
            }
            (0, h.CharacterSceneHandleResize)(this), this.resizeListener = () => {
                (0, h.CharacterSceneHandleResize)(this);
            }, window.addEventListener('resize', this.resizeListener), this.events.on('destroy', () => {
                var n;
                null === (n = this.character) || void 0 === n || n.destroy(), window.removeEventListener('resize', this.resizeListener), this.resizeListener = void 0;
            });
        }
        constructor(...a) {
            super(...a), (0, f.default)(this, 'onError', null);
        }
    }
}), c.register('.....', function(d, e) {
    a(d.exports, 'CharacterScenePreload', function() {
        return _g;
    });
    var f = c('.....');
    const _g = h => {
        h.skinId = h.game.skin, h.editStyles = h.game.editStyles;
        const i = Math.random().toString();
        h.game.cache.json.exists('data_compressed_' + h.skinId) || (h.load.spineJson('data_compressed_' + h.skinId, (0, f.default)(`characters/spine/${ h.skinId }.json?cb=${ i }`)), h.load.spineAtlas('atlas_' + h.skinId, (0, f.default)(`characters/spine/${ h.skinId }.atlas?cb=${ i }`)));
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'CharacterSceneHandleResize', function() {
        return _g;
    });
    var f = c('.....');
    const _g = h => {
        const i = document.getElementById('character-preview-div');
        if (!i)
            return;
        const j = i.clientWidth,
            k = i.clientHeight,
            l = window.devicePixelRatio,
            m = l * j,
            n = l * k,
            o = Math.min(m / j, n / k);
        h.scale.resize(o * j, o * k);
        const p = 1 / o;
        h.game.canvas.style.transform = 'scaleX(' + p + ') scaleY(' + p + ')', h.game.canvas.style.transformOrigin = '0 0', h.cameras.main.setZoom(0.4 * o), (0, f.CharacterSceneCenterCameraOnCharacter)(h), h.scale.refresh();
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'CharacterSceneCenterCameraOnCharacter', function() {
        return _f;
    });
    const _f = g => {
        if (!g.character)
            return;
        const h = g.character.spine.displayWidth,
            i = g.character.spine.displayHeight,
            j = g.add.rectangle(0, 0, h, i, 16711680).setOrigin(g.character.spine.displayOriginX / h, g.character.spine.displayOriginY / i).setVisible(!1),
            k = j.getBounds();
        j.destroy(), g.cameras.main.centerOn(k.centerX, k.centerY);
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'CharacterSceneCharacter', function() {
        return _j;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....');
    class _j {
        destroy() {
            this.animation.destroy();
        }
        constructor(k) {
            this.scene = k, this.skinId = k.skinId, this.editStyles = new(0, g.CharacterSceneCharacterEditStyles)(this), this.animation = new(0, i.CharacterSceneAnimation)(this), this.spine = k.add.spinePreview(0, 0, 'data_' + this.skinId, 'atlas_' + this.skinId, new(0, f.SkinsAndAnimationBoundsProvider)('idle', [this.skinId])), this.spine.skeleton.setSkinByName(this.skinId), this.editStyles.apply(), this.animation.onSkinChanged(), (0, h.CharacterSceneCenterCameraOnCharacter)(k);
        }
    }
}), c.register('.....', function(d, e) {
    a(d.exports, 'CharacterSceneCharacterEditStyles', function() {
        return _h;
    });
    var f = c('.....'),
        g = c('.....');
    class _h {
        constructor(i) {
            (0, f.default)(this, 'apply', () => {
                var j;
                const k = this.character.scene.cache.json.get('data_' + this.character.skinId),
                    l = [];
                null == k || null === (j = k.style) || void 0 === j || j.categories.forEach(m => {
                    const n = this.character.scene.editStyles[m.name];
                    if (m.type === g.CosmeticStyleCategoryType.color && m.color)
                        l.push({
                            type: 'color',
                            slotNames: m.color.slotNames,
                            color: n || m.color.defaultColor
                        });
                    else if (m.options.length) {
                        var o;
                        const p = null !== (o = m.options.find(q => n === q.name)) && void 0 !== o ? o : m.options[0];
                        l.push(...p.applications);
                    }
                }), l.forEach(m => {
                    'color' === m.type && m.slotNames.forEach(n => {
                        const o = this.character.spine.skeleton.slots.find(p => {
                            var q;
                            return (null == p ? void 0 : p.data.name) === n || (null == p || null === (q = p.attachment) || void 0 === q ? void 0 : q.name) === n;
                        });
                        o && (null == o || o.color.setFromString(m.color));
                    });
                });
            }), this.character = i;
        }
    }
}), c.register('.....', function(d, e) {
    a(d.exports, 'CharacterSceneAnimation', function() {
        return _i;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....');
    class _i {
        constructor(j) {
            (0, f.default)(this, 'skinChanged', !1), (0, f.default)(this, 'availableAnimations', []), (0, f.default)(this, 'currentBodyAnimation', g.CharacterBodyAnimationState.rest), (0, f.default)(this, 'bodyAnimationLocked', !1), (0, f.default)(this, 'bodyAnimationStartedAt', 0), (0, f.default)(this, 'currentEyeAnimation', g.CharacterEyeAnimationState.idle), (0, f.default)(this, 'lastGroundedAnimationAt', 0), (0, f.default)(this, 'setupAnimations', () => {
                const k = this.character.spine;
                this.availableAnimations = k.skeleton.data.animations.map(l => l.name), k.animationStateData.defaultMix = g.default.body.transition.defaultDuration, k.animationStateData.setMix(g.default.body.animationNames.jumpMiddleIdle, g.default.body.animationNames.jumpDownIdle, g.default.body.transition.jumpFallingDuration), k.animationStateData.setMix(g.default.eyes.animationNames.blink, g.default.eyes.animationNames.idle, 0), k.animationStateData.setMix(g.default.eyes.animationNames.idle, g.default.eyes.animationNames.blink, 0), this.playBodyAnimation(this.currentBodyAnimation), this.playEyeAnimation(this.currentEyeAnimation), this.availableAnimations.includes(`skins-${ this.character.skinId }-common`) && this.character.spine.animationState.setAnimation(h.ANIMATION_TRACKS.COMMON, `skins-${ this.character.skinId }-common`, !0), this.character.spine.animationState.addListener({
                    complete: l => {
                        this.onAnimationComplete(l);
                    }
                });
            }), (0, f.default)(this, 'playBodyAnimation', k => {
                var l;
                if (k === this.currentBodyAnimation && !this.skinChanged)
                    return;
                if (this.bodyAnimationLocked && !this.skinChanged) {
                    var m, n, o;
                    const p = null !== (o = null === (m = g.default.animationLocks) || void 0 === m || null === (n = m[this.currentBodyAnimation]) || void 0 === n ? void 0 : n[k]) && void 0 !== o ? o : 0;
                    if (p) {
                        if (Date.now() < this.bodyAnimationStartedAt + p)
                            return;
                    }
                }
                const q = !!(null === (p = g.default.animationLocks) || void 0 === p ? void 0 : p[k]);
                this.bodyAnimationLocked = q, this.bodyAnimationStartedAt = Date.now(), k === g.CharacterBodyAnimationState.rest ? this.startBlinkAnimation() : this.stopBlinkAnimation(), this.currentBodyAnimation = k, this.character.spine.animationState.setAnimation(h.ANIMATION_TRACKS.BODY, g.default.body.animationNames[k], g.default.bodyLoopedAnimations.includes(k)), this.playBodySupplementalAnimation(k);
            }), (0, f.default)(this, 'playEyeAnimation', k => {
                (k !== this.currentEyeAnimation || this.skinChanged) && (this.currentEyeAnimation = k, this.character.spine.animationState.setAnimation(h.ANIMATION_TRACKS.EYES, g.default.eyes.animationNames[k], !0));
            }), (0, f.default)(this, 'playAnimationOrClearTrack', (k, l) => {
                let m = !1;
                for (const n of k)
                    if (this.availableAnimations.includes(n)) {
                        this.character.spine.animationState.setAnimation(l, n, !0), m = !0;
                        break;
                    }
                m || this.character.spine.animationState.clearTrack(l);
            }), (0, f.default)(this, 'playBodySupplementalAnimation', k => {
                this.playAnimationOrClearTrack([
                    `skins-${ this.character.skinId }-${ g.default.body.animationNames[k] }`,
                    `skins-${ this.character.skinId }-pose`
                ], h.ANIMATION_TRACKS.BODY_SUPPLEMENTAL), this.playMovementSupplementalAnimation(k), this.playJumpSupplementalAnimation(k);
            }), (0, f.default)(this, 'playMovementSupplementalAnimation', k => {
                this.playAnimationOrClearTrack([`skins-${ this.character.skinId }-movement=${ k === g.CharacterBodyAnimationState.rest ? 'false' : 'true' }`], h.ANIMATION_TRACKS.MOVEMENT_SUPPLEMENTAL);
            }), (0, f.default)(this, 'playJumpSupplementalAnimation', k => {
                const l = g.default.jumpAnimations.includes(k);
                this.playAnimationOrClearTrack([`skins-${ this.character.skinId }-jumping=${ l ? 'true' : 'false' }`], h.ANIMATION_TRACKS.JUMP_SUPPLEMENTAL);
            }), (0, f.default)(this, 'startBlinkAnimation', () => {
                this.blinkTimer || (this.playEyeAnimation(g.CharacterEyeAnimationState.idle), this.blinkTimer = window.setTimeout(() => {
                    this.blinkTimer = null, this.playEyeAnimation(g.CharacterEyeAnimationState.blink);
                }, g.default.eyes.blinkEvery));
            }), (0, f.default)(this, 'stopBlinkAnimation', () => {
                this.playEyeAnimation(g.CharacterEyeAnimationState.idle), this.blinkTimer && (window.clearTimeout(this.blinkTimer), this.blinkTimer = null);
            }), (0, f.default)(this, 'onAnimationComplete', k => {
                k.trackIndex === h.ANIMATION_TRACKS.EYES && this.currentBodyAnimation === g.CharacterBodyAnimationState.rest && this.currentEyeAnimation === g.CharacterEyeAnimationState.blink && this.startBlinkAnimation();
            }), (0, f.default)(this, 'toggleAnimation', () => {
                this.currentBodyAnimation === g.CharacterBodyAnimationState.rest ? this.playBodyAnimation(g.CharacterBodyAnimationState.run) : this.playBodyAnimation(g.CharacterBodyAnimationState.rest);
            }), (0, f.default)(this, 'onSkinChanged', () => {
                this.skinChanged = !0, this.setupAnimations(), this.skinChanged = !1;
            }), (0, f.default)(this, 'destroy', () => {
                this.blinkTimer && (window.clearTimeout(this.blinkTimer), this.blinkTimer = null);
            }), this.character = j;
        }
    }
}), c.register('.....', function(d, e) {
    let f;
    var g;
    a(d.exports, 'MapModeType', function() {
        return f;
    }), (g = f || (f = {})).liveGame = 'liveGame', g.assignment = 'assignment';
}), c.register('.....', function(d, e) {
    let f;
    var g;
    a(d.exports, 'default', function() {
        return _h;
    }), (g = f || (f = {})).topDown = 'topDown', g.platformer = 'platformer';
    var _h = f;
});