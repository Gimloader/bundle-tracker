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
c.register('en+bc', function(d, e) {
    var f;
    f = d.exports, Object.defineProperty(f, '__esModule', {
        value: !0,
        configurable: !0
    }), a(d.exports, 'default', function() {
        return _p;
    });
    var g = c('gRbUn'),
        h = c('O0Kav'),
        i = c('N+hlj'),
        j = c('lKjHC'),
        k = c('iS3g4'),
        l = c('ur54y'),
        m = c('01s/9');
    let n = null,
        o = null;
    var _p = a => {
        const [q, r] = h.useState(!1), [s, t] = h.useState(0);
        h.useEffect(() => {
            if (!q)
                return () => {};
            if (s >= 3)
                return () => {};
            o || (o = document.createElement('div'), o.id = 'character-preview-div', o.className = 'maxWidth maxHeight');
            const u = document.getElementById('character-preview-container');
            return u && o && !u.contains(o) && u.appendChild(o), (0, l.FixSpinePlugin)(), (0, m.FixPhaserBootProcess)(), window.SPINE_GAME_OBJECT_TYPE = 'spinePreview', n || (n = new Phaser.Game({
                ...i.CharacterPreviewPhaserConfig,
                parent: o
            })), n.onError = () => {
                t(a => a + 1), null == n || n.destroy(!0), n = null;
            }, n.skin = a.id, n.editStyles = a.editStyles, null == n || n.scene.remove('CharacterScene'), null == n || n.scene.add('CharacterScene', k.CharacterScene, !0), () => {
                s >= 3 && (null == n || n.destroy(!0), n = null, o = null), null == n || n.scene.remove('CharacterScene');
            };
        }, [
            q,
            s,
            a.id,
            a.editStyles
        ]), (0, j.useDidMount)(() => {
            r(!0);
        });
        return s >= 3 ? a.fallback : (0, g.jsx)('div', {
            id: 'character-preview-container',
            className: 'maxWidth maxHeight',
            onClick: () => {
                var u, v, w, x;
                null === (u = null == n || null === (v = n.scene) || void 0 === v ? void 0 : v.scenes[0]) || void 0 === u || null === (w = u.character) || void 0 === w || null === (x = w.animation) || void 0 === x || x.toggleAnimation();
            }
        });
    };
}), c.register('N+hlj', function(d, e) {
    a(d.exports, 'CharacterPreviewPhaserConfig', function() {
        return _h;
    });
    var f = c('ddhGF'),
        g = c('jwjRP');
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
}), c.register('iS3g4', function(d, e) {
    a(d.exports, 'CharacterScene', function() {
        return _k;
    });
    var f = c('s/YA9'),
        g = c('N4JO+'),
        h = c('6OHGq'),
        i = c('u4kIB'),
        j = c('i2ykh');
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
                var m;
                null === (m = this.character) || void 0 === m || m.destroy(), window.removeEventListener('resize', this.resizeListener), this.resizeListener = void 0;
            });
        }
        constructor(...a) {
            super(...a), (0, f.default)(this, 'onError', null);
        }
    }
}), c.register('N4JO+', function(d, e) {
    a(d.exports, 'CharacterScenePreload', function() {
        return _g;
    });
    var f = c('UaUBz0');
    const _g = a => {
        a.skinId = a.game.skin, a.editStyles = a.game.editStyles;
        const h = Math.random().toString();
        a.game.cache.json.exists('data_compressed_' + a.skinId) || (a.load.spineJson('data_compressed_' + a.skinId, (0, f.default)(`characters/spine/${ a.skinId }.json?cb=${ h }`)), a.load.spineAtlas('atlas_' + a.skinId, (0, f.default)(`characters/spine/${ a.skinId }.atlas?cb=${ h }`)));
    };
}), c.register('6OHGq', function(d, e) {
    a(d.exports, 'CharacterSceneHandleResize', function() {
        return _g;
    });
    var f = c('BbOuF');
    const _g = a => {
        const h = document.getElementById('character-preview-div');
        if (!h)
            return;
        const i = h.clientWidth,
            j = h.clientHeight,
            k = window.devicePixelRatio,
            l = k * i,
            m = k * j,
            n = Math.min(l / i, m / j);
        a.scale.resize(n * i, n * j);
        const o = 1 / n;
        a.game.canvas.style.transform = 'scaleX(' + o + ') scaleY(' + o + ')', a.game.canvas.style.transformOrigin = '0 0', a.cameras.main.setZoom(0.4 * n), (0, f.CharacterSceneCenterCameraOnCharacter)(a), a.scale.refresh();
    };
}), c.register('BbOuF', function(d, e) {
    a(d.exports, 'CharacterSceneCenterCameraOnCharacter', function() {
        return _f;
    });
    const _f = a => {
        if (!a.character)
            return;
        const g = a.character.spine.displayWidth,
            h = a.character.spine.displayHeight,
            i = a.add.rectangle(0, 0, g, h, 16711680).setOrigin(a.character.spine.displayOriginX / g, a.character.spine.displayOriginY / h).setVisible(!1),
            j = i.getBounds();
        i.destroy(), a.cameras.main.centerOn(j.centerX, j.centerY);
    };
}), c.register('i2ykh', function(d, e) {
    a(d.exports, 'CharacterSceneCharacter', function() {
        return _j;
    });
    var f = c('jwjRP'),
        g = c('xmKXm'),
        h = c('BbOuF'),
        i = c('UhoTt');
    class _j {
        destroy() {
            this.animation.destroy();
        }
        constructor(k) {
            this.scene = k, this.skinId = k.skinId, this.editStyles = new(0, g.CharacterSceneCharacterEditStyles)(this), this.animation = new(0, i.CharacterSceneAnimation)(this), this.spine = k.add.spinePreview(0, 0, 'data_' + this.skinId, 'atlas_' + this.skinId, new(0, f.SkinsAndAnimationBoundsProvider)('idle', [this.skinId])), this.spine.skeleton.setSkinByName(this.skinId), this.editStyles.apply(), this.animation.onSkinChanged(), (0, h.CharacterSceneCenterCameraOnCharacter)(k);
        }
    }
}), c.register('xmKXm', function(d, e) {
    a(d.exports, 'CharacterSceneCharacterEditStyles', function() {
        return _h;
    });
    var f = c('s/YA9'),
        g = c('WrOhL');
    class _h {
        constructor(i) {
            (0, f.default)(this, 'apply', () => {
                var j;
                const k = this.character.scene.cache.json.get('data_' + this.character.skinId),
                    l = [];
                null == k || null === (j = k.style) || void 0 === j || j.categories.forEach(j => {
                    const m = this.character.scene.editStyles[j.name];
                    if (j.type === g.CosmeticStyleCategoryType.color && j.color)
                        l.push({
                            type: 'color',
                            slotNames: j.color.slotNames,
                            color: m || j.color.defaultColor
                        });
                    else if (j.options.length) {
                        var n;
                        const o = null !== (n = j.options.find(j => m === j.name)) && void 0 !== n ? n : j.options[0];
                        l.push(...o.applications);
                    }
                }), l.forEach(j => {
                    'color' === j.type && j.slotNames.forEach(k => {
                        const m = this.character.spine.skeleton.slots.find(j => {
                            var n;
                            return (null == j ? void 0 : j.data.name) === k || (null == j || null === (n = j.attachment) || void 0 === n ? void 0 : n.name) === k;
                        });
                        m && (null == m || m.color.setFromString(j.color));
                    });
                });
            }), this.character = i;
        }
    }
}), c.register('UhoTt', function(d, e) {
    a(d.exports, 'CharacterSceneAnimation', function() {
        return _l;
    });
    var f = c('s/YA9'),
        g = c('wKCPn');
    const h = 0,
        i = 1,
        j = 2,
        k = 3;
    class _l {
        constructor(m) {
            (0, f.default)(this, 'skinChanged', !1), (0, f.default)(this, 'availableAnimations', []), (0, f.default)(this, 'currentBodyAnimation', g.CharacterBodyAnimationState.rest), (0, f.default)(this, 'bodyAnimationLocked', !1), (0, f.default)(this, 'bodyAnimationStartedAt', 0), (0, f.default)(this, 'currentEyeAnimation', g.CharacterEyeAnimationState.idle), (0, f.default)(this, 'lastGroundedAnimationAt', 0), (0, f.default)(this, 'setupAnimations', () => {
                const n = this.character.spine;
                this.availableAnimations = n.skeleton.data.animations.map(n => n.name);
                const o = Object.values(g.default.body.animationNames);
                o.forEach(c => {
                    o.forEach(o => {
                        let p = g.default.body.transition.defaultDuration;
                        c === g.CharacterBodyAnimationState.jumpMiddleIdle && o === g.CharacterBodyAnimationState.jumpDownIdle && (p = g.default.body.transition.jumpFallingDuration), n.animationStateData.setMix(c, o, p);
                    });
                }), this.playBodyAnimation(this.currentBodyAnimation), this.playEyeAnimation(this.currentEyeAnimation), this.availableAnimations.includes(`skins-${ this.character.skinId }-common`) && this.character.spine.animationState.setAnimation(h, `skins-${ this.character.skinId }-common`, !0), this.character.spine.animationState.addListener({
                    complete: n => {
                        this.onAnimationComplete(n);
                    }
                });
            }), (0, f.default)(this, 'playBodyAnimation', m => {
                var n;
                if (m === this.currentBodyAnimation && !this.skinChanged)
                    return;
                if (this.bodyAnimationLocked && !this.skinChanged) {
                    var o, p, q;
                    const r = null !== (q = null === (o = g.default.animationLocks) || void 0 === o || null === (p = o[this.currentBodyAnimation]) || void 0 === p ? void 0 : p[m]) && void 0 !== q ? q : 0;
                    if (r) {
                        if (Date.now() < this.bodyAnimationStartedAt + r)
                            return;
                    }
                }
                const o = !!(null === (n = g.default.animationLocks) || void 0 === n ? void 0 : n[m]);
                this.bodyAnimationLocked = o, this.bodyAnimationStartedAt = Date.now(), m === g.CharacterBodyAnimationState.rest ? this.startBlinkAnimation() : this.stopBlinkAnimation(), this.currentBodyAnimation = m, this.character.spine.animationState.setAnimation(k, g.default.body.animationNames[m], g.default.bodyLoopedAnimations.includes(m)), this.playBodySupplementalAnimation(m);
            }), (0, f.default)(this, 'playEyeAnimation', m => {
                (m !== this.currentEyeAnimation || this.skinChanged) && (this.currentEyeAnimation = m, this.character.spine.animationState.setAnimation(j, g.default.eyes.animationNames[m], !0));
            }), (0, f.default)(this, 'playBodySupplementalAnimation', m => {
                const n = g.default.body.animationNames[m],
                    o = 'skins-' + this.character.skinId + '-' + n;
                this.availableAnimations.includes(o) ? this.character.spine.animationState.setAnimation(i, o, !0) : this.character.spine.animationState.clearTrack(i);
            }), (0, f.default)(this, 'startBlinkAnimation', () => {
                this.blinkTimer || (this.playEyeAnimation(g.CharacterEyeAnimationState.idle), this.blinkTimer = window.setTimeout(() => {
                    this.blinkTimer = null, this.playEyeAnimation(g.CharacterEyeAnimationState.blink);
                }, g.default.eyes.blinkEvery));
            }), (0, f.default)(this, 'stopBlinkAnimation', () => {
                this.playEyeAnimation(g.CharacterEyeAnimationState.idle), this.blinkTimer && (window.clearTimeout(this.blinkTimer), this.blinkTimer = null);
            }), (0, f.default)(this, 'onAnimationComplete', m => {
                m.trackIndex === j && this.currentBodyAnimation === g.CharacterBodyAnimationState.rest && this.currentEyeAnimation === g.CharacterEyeAnimationState.blink && this.startBlinkAnimation();
            }), (0, f.default)(this, 'toggleAnimation', () => {
                this.currentBodyAnimation === g.CharacterBodyAnimationState.rest ? this.playBodyAnimation(g.CharacterBodyAnimationState.run) : this.playBodyAnimation(g.CharacterBodyAnimationState.rest);
            }), (0, f.default)(this, 'onSkinChanged', () => {
                this.skinChanged = !0, this.setupAnimations(), this.skinChanged = !1;
            }), (0, f.default)(this, 'destroy', () => {
                this.blinkTimer && (window.clearTimeout(this.blinkTimer), this.blinkTimer = null);
            }), this.character = m;
        }
    }
});