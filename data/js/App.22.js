function a(a, b, c, q) {
    Object.defineProperty(a, b, {
        get: c,
        set: q,
        enumerable: !0,
        configurable: !0
    });
}

function b(a) {
    return a && a.__esModule ? a.default : a;
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('Du15/', function(b, q) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), a(b.exports, 'default', function() {
        return n;
    });
    var e = c('8kSQZ'),
        f = c('uPP4W'),
        g = c('0Bqnj'),
        h = c('laJ/S'),
        i = c('hOQPw'),
        j = c('tGFT0'),
        k = c('5t9ju');
    let l = null,
        m = null;
    var n = a => {
        const [o, p] = f.useState(!1), [q, r] = f.useState(0);
        f.useEffect(() => {
            if (!o)
                return () => {};
            if (q >= 3)
                return () => {};
            m || (m = document.createElement('div'), m.id = 'character-preview-div', m.className = 'maxWidth maxHeight');
            const s = document.getElementById('character-preview-container');
            return s && m && !s.contains(m) && s.appendChild(m), (0, j.FixSpinePlugin)(), (0, k.FixPhaserBootProcess)(), window.SPINE_GAME_OBJECT_TYPE = 'spinePreview', l || (l = new Phaser.Game({
                ...g.CharacterPreviewPhaserConfig,
                parent: m
            })), l.onError = () => {
                r(a => a + 1), null == l || l.destroy(!0), l = null;
            }, l.skin = a.id, l.editStyles = a.editStyles, null == l || l.scene.remove('CharacterScene'), null == l || l.scene.add('CharacterScene', i.CharacterScene, !0), () => {
                q >= 3 && (null == l || l.destroy(!0), l = null, m = null), null == l || l.scene.remove('CharacterScene');
            };
        }, [
            o,
            q,
            a.id,
            a.editStyles
        ]), (0, h.useDidMount)(() => {
            p(!0);
        });
        return q >= 3 ? a.fallback : (0, e.jsx)('div', {
            id: 'character-preview-container',
            className: 'maxWidth maxHeight',
            onClick: () => {
                var s, t, u, v;
                null === (s = null == l || null === (t = l.scene) || void 0 === t ? void 0 : t.scenes[0]) || void 0 === s || null === (u = s.character) || void 0 === u || null === (v = u.animation) || void 0 === v || v.toggleAnimation();
            }
        });
    };
}), c.register('0Bqnj', function(h, d) {
    a(h.exports, 'CharacterPreviewPhaserConfig', function() {
        return f;
    });
    var d = c('kneek'),
        e = c('Gi5XP');
    const f = {
        type: b(d).WEBGL,
        roundPixels: !1,
        transparent: !0,
        plugins: {
            scene: [{
                key: 'spine.SpinePlugin',
                plugin: e.SpinePlugin,
                mapping: 'spine'
            }]
        },
        scale: {
            mode: b(d).Scale.NONE,
            autoRound: !0
        },
        parent: 'character-preview-div',
        scene: [],
        banner: !1,
        pipeline: {
            skipPipelinesAtBoot: !0
        }
    };
}), c.register('hOQPw', function(b, h) {
    a(b.exports, 'CharacterScene', function() {
        return i;
    });
    var d = c('UM8oI'),
        e = c('T6nHo'),
        f = c('duKb9'),
        g = c('8l81G'),
        h = c('LYQa9');
    class i extends Phaser.Scene {
        preload() {
            (0, e.CharacterScenePreload)(this);
        }
        create() {
            const j = this.cache.json.get('data_compressed_' + this.skinId);
            if (!this.cache.json.get('data_' + this.skinId) && j) {
                const k = (0, g.decompress)(j);
                this.cache.json.add('data_' + this.skinId, k);
            }
            try {
                this.character = new(0, h.CharacterSceneCharacter)(this);
            } catch (j) {
                this.game.onError && this.game.onError();
            }
            (0, f.CharacterSceneHandleResize)(this), this.resizeListener = () => {
                (0, f.CharacterSceneHandleResize)(this);
            }, window.addEventListener('resize', this.resizeListener), this.events.on('destroy', () => {
                var k;
                null === (k = this.character) || void 0 === k || k.destroy(), window.removeEventListener('resize', this.resizeListener), this.resizeListener = void 0;
            });
        }
        constructor(...a) {
            super(...a), (0, d.default)(this, 'onError', null);
        }
    }
}), c.register('T6nHo', function(b, h) {
    a(b.exports, 'CharacterScenePreload', function() {
        return e;
    });
    var d = c('JJQ0+');
    const e = a => {
        a.skinId = a.game.skin, a.editStyles = a.game.editStyles;
        const f = Math.random().toString();
        a.game.cache.json.exists('data_compressed_' + a.skinId) || (a.load.spineJson('data_compressed_' + a.skinId, (0, d.default)(`characters/spine/${ a.skinId }.json?cb=${ f }`)), a.load.spineAtlas('atlas_' + a.skinId, (0, d.default)(`characters/spine/${ a.skinId }.atlas?cb=${ f }`)));
    };
}), c.register('duKb9', function(b, h) {
    a(b.exports, 'CharacterSceneHandleResize', function() {
        return e;
    });
    var d = c('lgleV');
    const e = a => {
        const f = document.getElementById('character-preview-div');
        if (!f)
            return;
        const g = f.clientWidth,
            h = f.clientHeight,
            i = window.devicePixelRatio,
            j = i * g,
            k = i * h,
            l = Math.min(j / g, k / h);
        a.scale.resize(l * g, l * h);
        const m = 1 / l;
        a.game.canvas.style.transform = 'scaleX(' + m + ') scaleY(' + m + ')', a.game.canvas.style.transformOrigin = '0 0', a.cameras.main.setZoom(0.4 * l), (0, d.CharacterSceneCenterCameraOnCharacter)(a), a.scale.refresh();
    };
}), c.register('lgleV', function(b, c) {
    a(b.exports, 'CharacterSceneCenterCameraOnCharacter', function() {
        return d;
    });
    const d = a => {
        if (!a.character)
            return;
        const e = a.character.spine.displayWidth,
            f = a.character.spine.displayHeight,
            g = a.add.rectangle(0, 0, e, f, 16711680).setOrigin(a.character.spine.displayOriginX / e, a.character.spine.displayOriginY / f).setVisible(!1),
            h = g.getBounds();
        g.destroy(), a.cameras.main.centerOn(h.centerX, h.centerY);
    };
}), c.register('LYQa9', function(b, k) {
    a(b.exports, 'CharacterSceneCharacter', function() {
        return h;
    });
    var d = c('Gi5XP'),
        e = c('t7sQ9'),
        f = c('lgleV'),
        g = c('tf586');
    class h {
        destroy() {
            this.animation.destroy();
        }
        constructor(a) {
            this.scene = a, this.skinId = a.skinId, this.editStyles = new(0, e.CharacterSceneCharacterEditStyles)(this), this.animation = new(0, g.CharacterSceneAnimation)(this), this.spine = a.add.spinePreview(0, 0, 'data_' + this.skinId, 'atlas_' + this.skinId, new(0, d.SkinsAndAnimationBoundsProvider)('idle', [this.skinId])), this.spine.skeleton.setSkinByName(this.skinId), this.editStyles.apply(), this.animation.onSkinChanged(), (0, f.CharacterSceneCenterCameraOnCharacter)(a);
        }
    }
}), c.register('t7sQ9', function(b, k) {
    a(b.exports, 'CharacterSceneCharacterEditStyles', function() {
        return f;
    });
    var d = c('UM8oI'),
        e = c('hoTkY');
    class f {
        constructor(a) {
            (0, d.default)(this, 'apply', () => {
                var g;
                const h = this.character.scene.cache.json.get('data_' + this.character.skinId),
                    i = [];
                null == h || null === (g = h.style) || void 0 === g || g.categories.forEach(g => {
                    const j = this.character.scene.editStyles[g.name];
                    if (g.type === e.CosmeticStyleCategoryType.color && g.color)
                        i.push({
                            type: 'color',
                            slotNames: g.color.slotNames,
                            color: j || g.color.defaultColor
                        });
                    else if (g.options.length) {
                        var k;
                        const l = null !== (k = g.options.find(g => j === g.name)) && void 0 !== k ? k : g.options[0];
                        i.push(...l.applications);
                    }
                }), i.forEach(g => {
                    'color' === g.type && g.slotNames.forEach(h => {
                        const j = this.character.spine.skeleton.slots.find(g => {
                            var k;
                            return (null == g ? void 0 : g.data.name) === h || (null == g || null === (k = g.attachment) || void 0 === k ? void 0 : k.name) === h;
                        });
                        j && (null == j || j.color.setFromString(g.color));
                    });
                });
            }), this.character = a;
        }
    }
}), c.register('tf586', function(b, m) {
    a(b.exports, 'CharacterSceneAnimation', function() {
        return j;
    });
    var d = c('UM8oI'),
        e = c('Nllp1');
    const f = 0,
        g = 1,
        h = 2,
        i = 3;
    class j {
        constructor(a) {
            (0, d.default)(this, 'skinChanged', !1), (0, d.default)(this, 'availableAnimations', []), (0, d.default)(this, 'currentBodyAnimation', e.CharacterBodyAnimationState.rest), (0, d.default)(this, 'bodyAnimationLocked', !1), (0, d.default)(this, 'bodyAnimationStartedAt', 0), (0, d.default)(this, 'currentEyeAnimation', e.CharacterEyeAnimationState.idle), (0, d.default)(this, 'lastGroundedAnimationAt', 0), (0, d.default)(this, 'setupAnimations', () => {
                const k = this.character.spine;
                this.availableAnimations = k.skeleton.data.animations.map(k => k.name);
                const l = Object.values(e.default.body.animationNames);
                l.forEach(c => {
                    l.forEach(l => {
                        let m = e.default.body.transition.defaultDuration;
                        c === e.CharacterBodyAnimationState.jumpMiddleIdle && l === e.CharacterBodyAnimationState.jumpDownIdle && (m = e.default.body.transition.jumpFallingDuration), k.animationStateData.setMix(c, l, m);
                    });
                }), this.playBodyAnimation(this.currentBodyAnimation), this.playEyeAnimation(this.currentEyeAnimation), this.availableAnimations.includes(`skins-${ this.character.skinId }-common`) && this.character.spine.animationState.setAnimation(f, `skins-${ this.character.skinId }-common`, !0), this.character.spine.animationState.addListener({
                    complete: k => {
                        this.onAnimationComplete(k);
                    }
                });
            }), (0, d.default)(this, 'playBodyAnimation', a => {
                var k;
                if (a === this.currentBodyAnimation && !this.skinChanged)
                    return;
                if (this.bodyAnimationLocked && !this.skinChanged) {
                    var l, m, n;
                    const o = null !== (n = null === (l = e.default.animationLocks) || void 0 === l || null === (m = l[this.currentBodyAnimation]) || void 0 === m ? void 0 : m[a]) && void 0 !== n ? n : 0;
                    if (o) {
                        if (Date.now() < this.bodyAnimationStartedAt + o)
                            return;
                    }
                }
                const l = !!(null === (k = e.default.animationLocks) || void 0 === k ? void 0 : k[a]);
                this.bodyAnimationLocked = l, this.bodyAnimationStartedAt = Date.now(), a === e.CharacterBodyAnimationState.rest ? this.startBlinkAnimation() : this.stopBlinkAnimation(), this.currentBodyAnimation = a, this.character.spine.animationState.setAnimation(i, e.default.body.animationNames[a], e.default.bodyLoopedAnimations.includes(a)), this.playBodySupplementalAnimation(a);
            }), (0, d.default)(this, 'playEyeAnimation', a => {
                (a !== this.currentEyeAnimation || this.skinChanged) && (this.currentEyeAnimation = a, this.character.spine.animationState.setAnimation(h, e.default.eyes.animationNames[a], !0));
            }), (0, d.default)(this, 'playBodySupplementalAnimation', a => {
                const k = e.default.body.animationNames[a],
                    l = 'skins-' + this.character.skinId + '-' + k;
                this.availableAnimations.includes(l) ? this.character.spine.animationState.setAnimation(g, l, !0) : this.character.spine.animationState.clearTrack(g);
            }), (0, d.default)(this, 'startBlinkAnimation', () => {
                this.blinkTimer || (this.playEyeAnimation(e.CharacterEyeAnimationState.idle), this.blinkTimer = window.setTimeout(() => {
                    this.blinkTimer = null, this.playEyeAnimation(e.CharacterEyeAnimationState.blink);
                }, e.default.eyes.blinkEvery));
            }), (0, d.default)(this, 'stopBlinkAnimation', () => {
                this.playEyeAnimation(e.CharacterEyeAnimationState.idle), this.blinkTimer && (window.clearTimeout(this.blinkTimer), this.blinkTimer = null);
            }), (0, d.default)(this, 'onAnimationComplete', a => {
                a.trackIndex === h && this.currentBodyAnimation === e.CharacterBodyAnimationState.rest && this.currentEyeAnimation === e.CharacterEyeAnimationState.blink && this.startBlinkAnimation();
            }), (0, d.default)(this, 'toggleAnimation', () => {
                this.currentBodyAnimation === e.CharacterBodyAnimationState.rest ? this.playBodyAnimation(e.CharacterBodyAnimationState.run) : this.playBodyAnimation(e.CharacterBodyAnimationState.rest);
            }), (0, d.default)(this, 'onSkinChanged', () => {
                this.skinChanged = !0, this.setupAnimations(), this.skinChanged = !1;
            }), (0, d.default)(this, 'destroy', () => {
                this.blinkTimer && (window.clearTimeout(this.blinkTimer), this.blinkTimer = null);
            }), this.character = a;
        }
    }
});