function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}

function a(b) {
    return b && b.__esModule ? b.default : b;
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('silyI', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _s(b.exports, 'default', function() {
        return _n;
    });
    var e = a('0hzx+'),
        f = a('LEQ5w'),
        g = a('zpXcL'),
        h = a('+i8ep'),
        i = a('ER/9J'),
        j = a('aDAO6'),
        k = a('6ca/4');
    let l = null,
        m = null;
    var _n = _s => {
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
                r(_s => _s + 1), null == l || l.destroy(!0), l = null;
            }, l.skin = _s.id, l.editStyles = _s.editStyles, null == l || l.scene.remove('CharacterScene'), null == l || l.scene.add('CharacterScene', i.CharacterScene, !0), () => {
                q >= 3 && (null == l || l.destroy(!0), l = null, m = null), null == l || l.scene.remove('CharacterScene');
            };
        }, [
            o,
            q,
            _s.id,
            _s.editStyles
        ]), (0, h.useDidMount)(() => {
            p(!0);
        });
        return q >= 3 ? _s.fallback : (0, e.jsx)('div', {
            id: 'character-preview-container',
            className: 'maxWidth maxHeight',
            onClick: () => {
                var _s, t, u, v;
                null === (_s = null == l || null === (t = l.scene) || void 0 === t ? void 0 : t.scenes[0]) || void 0 === _s || null === (u = _s.character) || void 0 === u || null === (v = u.animation) || void 0 === v || v.toggleAnimation();
            }
        });
    };
}), a.register('zpXcL', function(b, c) {
    _j(b.exports, 'CharacterPreviewPhaserConfig', function() {
        return _f;
    });
    var d = a('8WvaZ'),
        e = a('J5MyB');
    const _f = {
        type: _b(d).WEBGL,
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
            mode: _b(d).Scale.NONE,
            autoRound: !0
        },
        parent: 'character-preview-div',
        scene: [],
        banner: !1,
        pipeline: {
            skipPipelinesAtBoot: !0
        }
    };
}), a.register('ER/9J', function(_b, c) {
    _j(_b.exports, 'CharacterScene', function() {
        return _i;
    });
    var d = a('1bFPu'),
        e = a('0kpki'),
        f = a('Pk/F3'),
        g = a('IRBdb'),
        h = a('PzxL9');
    class _i extends Phaser.Scene {
        preload() {
            (0, e.CharacterScenePreload)(this);
        }
        create() {
            const _j = this.cache.json.get('data_compressed_' + this.skinId);
            if (!this.cache.json.get('data_' + this.skinId) && _j) {
                const k = (0, g.decompress)(_j);
                this.cache.json.add('data_' + this.skinId, k);
            }
            try {
                this.character = new(0, h.CharacterSceneCharacter)(this);
            } catch (_j) {
                this.game.onError && this.game.onError();
            }
            (0, f.CharacterSceneHandleResize)(this), this.resizeListener = () => {
                (0, f.CharacterSceneHandleResize)(this);
            }, window.addEventListener('resize', this.resizeListener), this.events.on('destroy', () => {
                var k;
                null === (k = this.character) || void 0 === k || k.destroy(), window.removeEventListener('resize', this.resizeListener), this.resizeListener = void 0;
            });
        }
        constructor(..._i) {
            super(..._i), (0, d.default)(this, 'onError', null);
        }
    }
}), a.register('0kpki', function(b, c) {
    _i(b.exports, 'CharacterScenePreload', function() {
        return _e;
    });
    var d = a('2Xvuf');
    const _e = _i => {
        _i.skinId = _i.game.skin, _i.editStyles = _i.game.editStyles;
        const f = Math.random().toString();
        _i.game.cache.json.exists('data_compressed_' + _i.skinId) || (_i.load.spineJson('data_compressed_' + _i.skinId, (0, d.default)(`characters/spine/${ _i.skinId }.json?cb=${ f }`)), _i.load.spineAtlas('atlas_' + _i.skinId, (0, d.default)(`characters/spine/${ _i.skinId }.atlas?cb=${ f }`)));
    };
}), a.register('Pk/F3', function(b, c) {
    _i(b.exports, 'CharacterSceneHandleResize', function() {
        return _e;
    });
    var d = a('8rInX');
    const _e = _i => {
        const f = document.getElementById('character-preview-div');
        if (!f)
            return;
        const g = f.clientWidth,
            h = f.clientHeight,
            i = window.devicePixelRatio,
            j = i * g,
            k = i * h,
            l = Math.min(j / g, k / h);
        _i.scale.resize(l * g, l * h);
        const m = 1 / l;
        _i.game.canvas.style.transform = 'scaleX(' + m + ') scaleY(' + m + ')', _i.game.canvas.style.transformOrigin = '0 0', _i.cameras.main.setZoom(0.4 * l), (0, d.CharacterSceneCenterCameraOnCharacter)(_i), _i.scale.refresh();
    };
}), a.register('8rInX', function(b, c) {
    _i(b.exports, 'CharacterSceneCenterCameraOnCharacter', function() {
        return _d;
    });
    const _d = _i => {
        if (!_i.character)
            return;
        const e = _i.character.spine.displayWidth,
            f = _i.character.spine.displayHeight,
            g = _i.add.rectangle(0, 0, e, f, 16711680).setOrigin(_i.character.spine.displayOriginX / e, _i.character.spine.displayOriginY / f).setVisible(!1),
            h = g.getBounds();
        g.destroy(), _i.cameras.main.centerOn(h.centerX, h.centerY);
    };
}), a.register('PzxL9', function(b, c) {
    _i(b.exports, 'CharacterSceneCharacter', function() {
        return _h;
    });
    var d = a('J5MyB'),
        e = a('D23T4'),
        f = a('8rInX'),
        g = a('XRrDS');
    class _h {
        destroy() {
            this.animation.destroy();
        }
        constructor(_i) {
            this.scene = _i, this.skinId = _i.skinId, this.editStyles = new(0, e.CharacterSceneCharacterEditStyles)(this), this.animation = new(0, g.CharacterSceneAnimation)(this), this.spine = _i.add.spinePreview(0, 0, 'data_' + this.skinId, 'atlas_' + this.skinId, new(0, d.SkinsAndAnimationBoundsProvider)('idle', [this.skinId])), this.spine.skeleton.setSkinByName(this.skinId), this.editStyles.apply(), this.animation.onSkinChanged(), (0, f.CharacterSceneCenterCameraOnCharacter)(_i);
        }
    }
}), a.register('D23T4', function(b, c) {
    _g(b.exports, 'CharacterSceneCharacterEditStyles', function() {
        return _f;
    });
    var d = a('1bFPu'),
        e = a('RxgVI');
    class _f {
        constructor(_g) {
            (0, d.default)(this, 'apply', () => {
                var h;
                const i = this.character.scene.cache.json.get('data_' + this.character.skinId),
                    j = [];
                null == i || null === (h = i.style) || void 0 === h || h.categories.forEach(h => {
                    const k = this.character.scene.editStyles[h.name];
                    if (h.type === e.CosmeticStyleCategoryType.color && h.color)
                        j.push({
                            type: 'color',
                            slotNames: h.color.slotNames,
                            color: k || h.color.defaultColor
                        });
                    else if (h.options.length) {
                        var l;
                        const m = null !== (l = h.options.find(h => k === h.name)) && void 0 !== l ? l : h.options[0];
                        j.push(...m.applications);
                    }
                }), j.forEach(h => {
                    'color' === h.type && h.slotNames.forEach(i => {
                        const k = this.character.spine.skeleton.slots.find(h => {
                            var l;
                            return (null == h ? void 0 : h.data.name) === i || (null == h || null === (l = h.attachment) || void 0 === l ? void 0 : l.name) === i;
                        });
                        k && (null == k || k.color.setFromString(h.color));
                    });
                });
            }), this.character = _g;
        }
    }
}), a.register('XRrDS', function(b, c) {
    _k(b.exports, 'CharacterSceneAnimation', function() {
        return _j;
    });
    var d = a('1bFPu'),
        e = a('g5sf0');
    const f = 0,
        g = 1,
        h = 2,
        i = 3;
    class _j {
        constructor(_k) {
            (0, d.default)(this, 'skinChanged', !1), (0, d.default)(this, 'availableAnimations', []), (0, d.default)(this, 'currentBodyAnimation', e.CharacterBodyAnimationState.rest), (0, d.default)(this, 'bodyAnimationLocked', !1), (0, d.default)(this, 'bodyAnimationStartedAt', 0), (0, d.default)(this, 'currentEyeAnimation', e.CharacterEyeAnimationState.idle), (0, d.default)(this, 'lastGroundedAnimationAt', 0), (0, d.default)(this, 'setupAnimations', () => {
                const l = this.character.spine;
                this.availableAnimations = l.skeleton.data.animations.map(l => l.name);
                const m = Object.values(e.default.body.animationNames);
                m.forEach(a => {
                    m.forEach(m => {
                        let n = e.default.body.transition.defaultDuration;
                        a === e.CharacterBodyAnimationState.jumpMiddleIdle && m === e.CharacterBodyAnimationState.jumpDownIdle && (n = e.default.body.transition.jumpFallingDuration), l.animationStateData.setMix(a, m, n);
                    });
                }), this.playBodyAnimation(this.currentBodyAnimation), this.playEyeAnimation(this.currentEyeAnimation), this.availableAnimations.includes(`skins-${ this.character.skinId }-common`) && this.character.spine.animationState.setAnimation(f, `skins-${ this.character.skinId }-common`, !0), this.character.spine.animationState.addListener({
                    complete: l => {
                        this.onAnimationComplete(l);
                    }
                });
            }), (0, d.default)(this, 'playBodyAnimation', _k => {
                var l;
                if (_k === this.currentBodyAnimation && !this.skinChanged)
                    return;
                if (this.bodyAnimationLocked && !this.skinChanged) {
                    var m, n, o;
                    const p = null !== (o = null === (m = e.default.animationLocks) || void 0 === m || null === (n = m[this.currentBodyAnimation]) || void 0 === n ? void 0 : n[_k]) && void 0 !== o ? o : 0;
                    if (p) {
                        if (Date.now() < this.bodyAnimationStartedAt + p)
                            return;
                    }
                }
                const m = !!(null === (l = e.default.animationLocks) || void 0 === l ? void 0 : l[_k]);
                this.bodyAnimationLocked = m, this.bodyAnimationStartedAt = Date.now(), _k === e.CharacterBodyAnimationState.rest ? this.startBlinkAnimation() : this.stopBlinkAnimation(), this.currentBodyAnimation = _k, this.character.spine.animationState.setAnimation(i, e.default.body.animationNames[_k], e.default.bodyLoopedAnimations.includes(_k)), this.playBodySupplementalAnimation(_k);
            }), (0, d.default)(this, 'playEyeAnimation', _k => {
                (_k !== this.currentEyeAnimation || this.skinChanged) && (this.currentEyeAnimation = _k, this.character.spine.animationState.setAnimation(h, e.default.eyes.animationNames[_k], !0));
            }), (0, d.default)(this, 'playBodySupplementalAnimation', _k => {
                const l = e.default.body.animationNames[_k],
                    m = 'skins-' + this.character.skinId + '-' + l;
                this.availableAnimations.includes(m) ? this.character.spine.animationState.setAnimation(g, m, !0) : this.character.spine.animationState.clearTrack(g);
            }), (0, d.default)(this, 'startBlinkAnimation', () => {
                this.blinkTimer || (this.playEyeAnimation(e.CharacterEyeAnimationState.idle), this.blinkTimer = window.setTimeout(() => {
                    this.blinkTimer = null, this.playEyeAnimation(e.CharacterEyeAnimationState.blink);
                }, e.default.eyes.blinkEvery));
            }), (0, d.default)(this, 'stopBlinkAnimation', () => {
                this.playEyeAnimation(e.CharacterEyeAnimationState.idle), this.blinkTimer && (window.clearTimeout(this.blinkTimer), this.blinkTimer = null);
            }), (0, d.default)(this, 'onAnimationComplete', _k => {
                _k.trackIndex === h && this.currentBodyAnimation === e.CharacterBodyAnimationState.rest && this.currentEyeAnimation === e.CharacterEyeAnimationState.blink && this.startBlinkAnimation();
            }), (0, d.default)(this, 'toggleAnimation', () => {
                this.currentBodyAnimation === e.CharacterBodyAnimationState.rest ? this.playBodyAnimation(e.CharacterBodyAnimationState.run) : this.playBodyAnimation(e.CharacterBodyAnimationState.rest);
            }), (0, d.default)(this, 'onSkinChanged', () => {
                this.skinChanged = !0, this.setupAnimations(), this.skinChanged = !1;
            }), (0, d.default)(this, 'destroy', () => {
                this.blinkTimer && (window.clearTimeout(this.blinkTimer), this.blinkTimer = null);
            }), this.character = _k;
        }
    }
});