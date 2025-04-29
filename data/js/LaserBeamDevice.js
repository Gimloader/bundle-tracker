function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('+2vm5', function(c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'default', function() {
        return _s;
    });
    var f = b('s/YA9'),
        g = b('ltxDW'),
        h = b('gXVUl'),
        i = b('cNVx1'),
        j = b('UkCpC'),
        k = b('hycyg'),
        l = b('uc4mA17'),
        m = b('u/WlI21'),
        n = b('JCj1N0'),
        o = b('ukDJm'),
        p = b('GIe9o');
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
                    onReady: F => {
                        F.view.tint = (0, i.GetNumberFromHexColor)(this.options.laserColor), F.view.alpha = D, F.view.blendMode = E, F.view.setScale(0.2), this.dots.push(F);
                    }
                });
            }
        }
        constructor(s) {
            super(s), (0, f.default)(this, 'activeFactor', 1), (0, f.default)(this, 'animationsReady', !1), (0, f.default)(this, 'dots', []), (0, f.default)(this, 'onUpdate', () => {
                (0, j.InGamePhaseVisible)() && (this.laser.view.scaleY = (0.5 * Math.random() + 0.5) * this.activeFactor, this.origin.view.scale = 0.03 * Math.random() * this.activeFactor + this.base.baseScale, this.endPoint.view.scale = 0.03 * Math.random() * this.activeFactor + this.base.baseScale, this.options.showPath && this.dots.forEach(s => {
                    s.view.alpha = (1 - this.activeFactor) * q;
                }));
            }), (0, f.default)(this, 'onStateChange', s => {
                if ('active' === s) {
                    const t = this.state.active ? 1 : 0;
                    if (this.tweens.add({
                            targets: this,
                            activeFactor: t,
                            duration: 150,
                            delay: 200 * t
                        }), !this.animationsReady)
                        return;
                    this.state.active && !this.prevState.active ? (this.origin.view.play((0, o.GetAnimName)(o.Anims.toActive, this.options.appearance)), this.endPoint.view.play((0, o.GetAnimName)(o.Anims.toActive, this.options.appearance))) : !this.state.active && this.prevState.active && (this.origin.view.play((0, o.GetAnimName)(o.Anims.toInactive, this.options.appearance)), this.endPoint.view.play((0, o.GetAnimName)(o.Anims.toInactive, this.options.appearance)));
                }
            }), (0, f.default)(this, 'onMessage', s => {
                'hit' === s.key && (0, n.OnHit)(s.data);
            }), (0, f.default)(this, 'setupVisualEditing', () => {
                if (!(0, j.InPreGamePhase)() || !(0, k.isSavedVersion)())
                    return;
                const t = (0, l.FetchOptionSchemaProperty)(this, 'distance');
                this.visualEditing.add.circle({
                    radius: this.options.distance / 2 + 40,
                    angle: this.options.angle - 90,
                    minRadius: t.min,
                    maxRadius: t.max,
                    onChange: t => {
                        (0, m.ReplaceVisualEditingPreview)(t.x, t.y, {
                            distance: 2 * (t.radius - 40),
                            angle: t.angle + 90
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
                onReady: s => {
                    this.animationsReady = !0, this.state.active || (0, j.InPreGamePhase)() ? (this.origin.view.play((0, o.GetAnimName)(o.Anims.active, this.options.appearance)), s.view.play((0, o.GetAnimName)(o.Anims.active, this.options.appearance))) : (this.origin.view.play((0, o.GetAnimName)(o.Anims.inactive, this.options.appearance)), s.view.play((0, o.GetAnimName)(o.Anims.inactive, this.options.appearance)));
                }
            }), this.laser = this.parts.add.sprite({
                ...h.LaserAsset,
                layerId: p.default.DevicesAboveCharacters
            }), this.origin.view.rotation = t, this.endPoint.view.rotation = this.origin.view.rotation + Math.PI, this.origin.view.setScale(this.base.baseScale), this.endPoint.view.setScale(this.base.baseScale), this.laser.view.rotation = t, this.laser.view.blendMode = Phaser.BlendModes.ADD, this.laser.view.tint = (0, i.GetNumberFromHexColor)(this.options.laserColor), this.laser.view.scaleX = (this.options.distance - 55) / 600, this.laser.view.scaleY = 0.75, this.options.showOrigin || (this.origin.view.alpha = 0), this.options.showEndPoint || (this.endPoint.view.alpha = 0), (0, j.InGamePhase)() && !this.state.active && (this.activeFactor = 0, this.laser.view.scaleY = 0);
        }
    }
    var _s = r;
}), b.register('gXVUl', function(c, d) {
    a(c.exports, 'LaserAsset', function() {
        return _h;
    }), a(c.exports, 'DotAsset', function() {
        return _i;
    }), a(c.exports, 'bases', function() {
        return _l;
    });
    var e = b('UaUBz0'),
        f = b('ukDJm'),
        g = b('rE5Vv');
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
}), b.register('ukDJm', function(c, d) {
    let e;
    var f;
    a(c.exports, 'Anims', function() {
        return e;
    }), a(c.exports, 'GetAnimName', function() {
        return _g;
    }), (f = e || (e = {})).active = 'ACTIVE', f.inactive = 'INACTIVE', f.toActive = 'TO_ACTIVE', f.toInactive = 'TO_INACTIVE';
    const _g = (a, c) => 'LASER_BEAM_DEVICE_ORIGIN_ANIM_' + c + a;
}), b.register('rE5Vv', function(c, d) {
    let e;
    var f;
    a(c.exports, 'LaserBeamAppearance', function() {
        return e;
    }), (f = e || (e = {})).standard = 'Standard', f.plant = 'Plant';
}), b.register('uc4mA17', function(c, d) {
    a(c.exports, 'FetchOptionSchemaProperty', function() {
        return _e;
    });
    const _e = (a, c) => {
        var f, g, h;
        const i = a.deviceOption.optionSchema.options.find(a => a.key === c);
        return {
            min: null === (f = null == i ? void 0 : i.option.props) || void 0 === f ? void 0 : f.min,
            max: null === (g = null == i ? void 0 : i.option.props) || void 0 === g ? void 0 : g.max,
            step: null === (h = null == i ? void 0 : i.option.props) || void 0 === h ? void 0 : h.step
        };
    };
}), b.register('u/WlI21', function(c, d) {
    a(c.exports, 'ReplaceVisualEditingPreview', function() {
        return _i;
    });
    var e = b('hemXM'),
        f = b('sWmxu5'),
        g = b('EzUqb'),
        h = b('GQMbT');
    const _i = (a, b, c) => {
        const j = (0, h.FetchVisualEditingPreview)(),
            k = (0, g.FetchCurrentlyEditedDevice)();
        if (!k || !j)
            return;
        const l = k.layers.isOnNaturalDepth() ? void 0 : b + k.layers.getDepthShift();
        (0, f.default)({
            deviceOption: j.deviceOption,
            id: e.VisualEditingConstants.previewId,
            x: a,
            y: b,
            depth: l,
            layerId: k.layers.getLayer(),
            name: j.name,
            isPreview: !0,
            options: {
                ...j.options,
                ...c
            },
            placedByClient: !0,
            state: j.deviceOption.defaultState
        });
    };
}), b.register('sWmxu5', function(c, d) {
    a(c.exports, 'default', function() {
        return _g;
    });
    var e = b('heTaO'),
        f = b('2LtPo');
    var _g = a => {
        (0, e.default)().worldManager.devices.getDeviceById(a.id) && (0, f.default)(a);
    };
}), b.register('JCj1N0', function(c, d) {
    a(c.exports, 'OnHit', function() {
        return _j;
    });
    var e = b('5Fjxs'),
        f = b('OuzTs'),
        g = b('heTaO'),
        h = b('RsWIB'),
        i = b('bg2iz');
    const _j = a => {
        const {
            characterId: k,
            damage: l,
            type: m
        } = a;
        if (k && l && m) {
            const n = (0, h.AmISpectator)() ? (0, f.FetchSpectatedId)() : (0, e.default)();
            (0, g.default)().worldManager.projectiles.damageMarkers.characters.applyDamage({
                characterId: k,
                damage: l,
                type: m
            }), k === n && (0, i.default)({
                type: m
            });
        }
    };
});