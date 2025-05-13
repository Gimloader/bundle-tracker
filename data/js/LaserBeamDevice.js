function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('.....', function(c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'default', function() {
        return _s;
    });
    var f = b('.....'),
        g = b('.....'),
        h = b('.....'),
        i = b('.....'),
        j = b('.....'),
        k = b('.....'),
        l = b('.....'),
        m = b('.....'),
        n = b('.....'),
        o = b('.....'),
        p = b('.....');
    const q = 0.35;
    class r extends g.default {
        createPath() {
            if (!this.options.showPath)
                return;
            const s = Phaser.Math.DegToRad(this.options.angle),
                t = 16 * Math.floor((this.options.distance - 55 - 24) / 16),
                u = Math.cos(s) * t,
                v = Math.sin(s) * t,
                w = -u / 2,
                x = -v / 2,
                y = u / 2,
                z = v / 2,
                A = Math.floor(t / 16),
                B = (y - w) / A,
                C = (z - x) / A,
                D = (0, j.InPreGamePhase)() ? q : (1 - this.activeFactor) * q,
                E = (0, j.InPreGamePhase)() ? Phaser.BlendModes.NORMAL : Phaser.BlendModes.ADD;
            for (let F = 0; F <= A; F++) {
                const G = w + F * B,
                    H = x + F * C;
                this.parts.add.sprite({
                    ...h.DotAsset,
                    depthChange: Math.min(x, z) - H,
                    ignoreInput: !0,
                    layerId: p.default.DevicesUnderCharacters,
                    x: G,
                    y: H,
                    onReady: I => {
                        I.view.tint = (0, i.GetNumberFromHexColor)(this.options.laserColor), I.view.alpha = D, I.view.blendMode = E, I.view.setScale(0.2), this.dots.push(I);
                    }
                });
            }
        }
        constructor(s) {
            super(s), (0, f.default)(this, 'activeFactor', 1), (0, f.default)(this, 'animationsReady', !1), (0, f.default)(this, 'dots', []), (0, f.default)(this, 'onUpdate', () => {
                (0, j.InGamePhaseVisible)() && (this.laser.view.scaleY = (0.5 * Math.random() + 0.5) * this.activeFactor, this.origin.view.scale = 0.03 * Math.random() * this.activeFactor + this.base.baseScale, this.endPoint.view.scale = 0.03 * Math.random() * this.activeFactor + this.base.baseScale, this.options.showPath && this.dots.forEach(t => {
                    t.view.alpha = (1 - this.activeFactor) * q;
                }));
            }), (0, f.default)(this, 'onStateChange', t => {
                if ('active' === t) {
                    const u = this.state.active ? 1 : 0;
                    if (this.tweens.add({
                            targets: this,
                            activeFactor: u,
                            duration: 150,
                            delay: 200 * u
                        }), !this.animationsReady)
                        return;
                    this.state.active && !this.prevState.active ? (this.origin.view.play((0, o.GetAnimName)(o.Anims.toActive, this.options.appearance)), this.endPoint.view.play((0, o.GetAnimName)(o.Anims.toActive, this.options.appearance))) : !this.state.active && this.prevState.active && (this.origin.view.play((0, o.GetAnimName)(o.Anims.toInactive, this.options.appearance)), this.endPoint.view.play((0, o.GetAnimName)(o.Anims.toInactive, this.options.appearance)));
                }
            }), (0, f.default)(this, 'onMessage', t => {
                'hit' === t.key && (0, n.OnHit)(t.data);
            }), (0, f.default)(this, 'setupVisualEditing', () => {
                if (!(0, j.InPreGamePhase)() || !(0, k.isSavedVersion)())
                    return;
                const t = (0, l.FetchOptionSchemaProperty)(this, 'distance');
                this.visualEditing.add.circle({
                    radius: this.options.distance / 2 + 40,
                    angle: this.options.angle - 90,
                    minRadius: t.min,
                    maxRadius: t.max,
                    onChange: u => {
                        (0, m.ReplaceVisualEditingPreview)(u.x, u.y, {
                            distance: 2 * (u.radius - 40),
                            angle: u.angle + 90
                        });
                    }
                });
            }), this.base = h.bases[this.options.appearance], this.setupVisualEditing();
            const t = Phaser.Math.DegToRad(this.options.angle),
                u = Math.cos(t) * this.options.distance,
                v = Math.sin(t) * this.options.distance;
            this.createPath(), this.origin = this.parts.add.animatedSprite({
                ...this.base,
                x: -u / 2,
                y: -v / 2
            }), this.endPoint = this.parts.add.animatedSprite({
                ...this.base,
                x: u / 2,
                y: v / 2,
                onReady: w => {
                    this.animationsReady = !0, this.state.active || (0, j.InPreGamePhase)() ? (this.origin.view.play((0, o.GetAnimName)(o.Anims.active, this.options.appearance)), w.view.play((0, o.GetAnimName)(o.Anims.active, this.options.appearance))) : (this.origin.view.play((0, o.GetAnimName)(o.Anims.inactive, this.options.appearance)), w.view.play((0, o.GetAnimName)(o.Anims.inactive, this.options.appearance)));
                }
            }), this.laser = this.parts.add.sprite({
                ...h.LaserAsset,
                layerId: p.default.DevicesAboveCharacters
            }), this.origin.view.rotation = t, this.endPoint.view.rotation = this.origin.view.rotation + Math.PI, this.origin.view.setScale(this.base.baseScale), this.endPoint.view.setScale(this.base.baseScale), this.laser.view.rotation = t, this.laser.view.blendMode = Phaser.BlendModes.ADD, this.laser.view.tint = (0, i.GetNumberFromHexColor)(this.options.laserColor), this.laser.view.scaleX = (this.options.distance - 55) / 600, this.laser.view.scaleY = 0.75, this.options.showOrigin || (this.origin.view.alpha = 0), this.options.showEndPoint || (this.endPoint.view.alpha = 0), (0, j.InGamePhase)() && !this.state.active && (this.activeFactor = 0, this.laser.view.scaleY = 0);
        }
    }
    var _s = r;
}), b.register('.....', function(c, d) {
    a(c.exports, 'LaserAsset', function() {
        return _h;
    }), a(c.exports, 'DotAsset', function() {
        return _i;
    }), a(c.exports, 'bases', function() {
        return _l;
    });
    var e = b('.....'),
        f = b('.....'),
        g = b('.....');
    const _h = {
            imageId: (0, e.default)('devices/laser_beam/laser.png'),
            imageUrl: (0, e.default)('devices/laser_beam/laser.png')
        },
        _i = {
            imageId: (0, e.default)('devices/laser_beam/dot.png'),
            imageUrl: (0, e.default)('devices/laser_beam/dot.png')
        },
        j = g.LaserBeamAppearance.standard,
        k = g.LaserBeamAppearance.plant,
        _l = {
            [j]: {
                baseScale: 0.36,
                spritesheetId: (0, e.default)('devices/laser_beam/standard_base.png'),
                spritesheetUrl: (0, e.default)('devices/laser_beam/standard_base.png'),
                frameWidth: 215,
                frameHeight: 130,
                animations: [{
                        animName: (0, f.GetAnimName)(f.Anims.inactive, j),
                        frameRate: 1,
                        animFrames: {
                            start: 0,
                            end: 0
                        }
                    },
                    {
                        animName: (0, f.GetAnimName)(f.Anims.toActive, j),
                        repeat: 0,
                        frameRate: 24,
                        animFrames: {
                            start: 0,
                            end: 7
                        }
                    },
                    {
                        animName: (0, f.GetAnimName)(f.Anims.active, j),
                        frameRate: 1,
                        animFrames: {
                            start: 7,
                            end: 7
                        }
                    },
                    {
                        animName: (0, f.GetAnimName)(f.Anims.toInactive, j),
                        repeat: 0,
                        frameRate: 24,
                        animFrames: {
                            start: 7,
                            end: 0
                        }
                    }
                ]
            },
            [k]: {
                baseScale: 0.5,
                spritesheetId: (0, e.default)('devices/laser_beam/plant_base.png'),
                spritesheetUrl: (0, e.default)('devices/laser_beam/plant_base.png'),
                frameWidth: 127,
                frameHeight: 122,
                animations: [{
                        animName: (0, f.GetAnimName)(f.Anims.inactive, k),
                        frameRate: 12,
                        animFrames: {
                            start: 0,
                            end: 0
                        }
                    },
                    {
                        animName: (0, f.GetAnimName)(f.Anims.toActive, k),
                        repeat: 0,
                        frameRate: 24,
                        animFrames: {
                            start: 0,
                            end: 4
                        }
                    },
                    {
                        animName: (0, f.GetAnimName)(f.Anims.active, k),
                        frameRate: 12,
                        animFrames: {
                            start: 4,
                            end: 4
                        }
                    },
                    {
                        animName: (0, f.GetAnimName)(f.Anims.toInactive, k),
                        repeat: 0,
                        frameRate: 24,
                        animFrames: {
                            start: 4,
                            end: 0
                        }
                    }
                ]
            }
        };
}), b.register('.....', function(c, d) {
    let e;
    var f;
    a(c.exports, 'Anims', function() {
        return e;
    }), a(c.exports, 'GetAnimName', function() {
        return _g;
    }), (f = e || (e = {})).active = 'ACTIVE', f.inactive = 'INACTIVE', f.toActive = 'TO_ACTIVE', f.toInactive = 'TO_INACTIVE';
    const _g = (h, i) => 'LASER_BEAM_DEVICE_ORIGIN_ANIM_' + i + h;
}), b.register('.....', function(c, d) {
    let e;
    var f;
    a(c.exports, 'LaserBeamAppearance', function() {
        return e;
    }), (f = e || (e = {})).standard = 'Standard', f.plant = 'Plant';
}), b.register('.....', function(c, d) {
    a(c.exports, 'FetchOptionSchemaProperty', function() {
        return _e;
    });
    const _e = (f, g) => {
        var h, i, j;
        const k = f.deviceOption.optionSchema.options.find(l => l.key === g);
        return {
            min: null === (h = null == k ? void 0 : k.option.props) || void 0 === h ? void 0 : h.min,
            max: null === (i = null == k ? void 0 : k.option.props) || void 0 === i ? void 0 : i.max,
            step: null === (j = null == k ? void 0 : k.option.props) || void 0 === j ? void 0 : j.step
        };
    };
}), b.register('.....', function(c, d) {
    a(c.exports, 'ReplaceVisualEditingPreview', function() {
        return _i;
    });
    var e = b('.....'),
        f = b('.....'),
        g = b('.....'),
        h = b('.....');
    const _i = (j, k, l) => {
        const m = (0, h.FetchVisualEditingPreview)(),
            n = (0, g.FetchCurrentlyEditedDevice)();
        if (!n || !m)
            return;
        const o = n.layers.isOnNaturalDepth() ? void 0 : k + n.layers.getDepthShift();
        (0, f.default)({
            deviceOption: m.deviceOption,
            id: e.VisualEditingConstants.previewId,
            x: j,
            y: k,
            depth: o,
            layerId: n.layers.getLayer(),
            name: m.name,
            isPreview: !0,
            options: {
                ...m.options,
                ...l
            },
            placedByClient: !0,
            state: m.deviceOption.defaultState
        });
    };
}), b.register('.....', function(c, d) {
    a(c.exports, 'default', function() {
        return _g;
    });
    var e = b('.....'),
        f = b('.....');
    var _g = h => {
        (0, e.default)().worldManager.devices.getDeviceById(h.id) && (0, f.default)(h);
    };
}), b.register('.....', function(c, d) {
    a(c.exports, 'OnHit', function() {
        return _j;
    });
    var e = b('.....'),
        f = b('.....'),
        g = b('.....'),
        h = b('.....'),
        i = b('.....');
    const _j = k => {
        const {
            characterId: l,
            damage: m,
            type: n
        } = k;
        if (l && m && n) {
            const o = (0, h.AmISpectator)() ? (0, f.FetchSpectatedId)() : (0, e.default)();
            (0, g.default)().worldManager.projectiles.damageMarkers.characters.applyDamage({
                characterId: l,
                damage: m,
                type: n
            }), l === o && (0, i.default)({
                type: n
            });
        }
    };
});