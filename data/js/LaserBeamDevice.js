function a(a, b, s, t) {
    Object.defineProperty(a, b, {
        get: s,
        set: t,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('aJUHg', function(s, t) {
    var c;
    c = s.exports, Object.defineProperty(c, '__esModule', {
        value: !0,
        configurable: !0
    }), a(s.exports, 'default', function() {
        return q;
    });
    var d = b('UM8oI'),
        e = b('sgILU'),
        f = b('MQaoo'),
        g = b('fe2aZ'),
        h = b('5Ux1a'),
        i = b('Bpt+p'),
        j = b('/Lvpl17'),
        k = b('wSwKo5'),
        l = b('ZnzPM0'),
        m = b('eCuzb'),
        n = b('cMsWT');
    const o = 0.35;
    class p extends e.default {
        createPath() {
            if (!this.options.showPath)
                return;
            const q = Phaser.Math.DegToRad(this.options.angle),
                r = 16 * Math.floor((this.options.distance - 55 - 24) / 16),
                s = Math.cos(q) * r,
                t = Math.sin(q) * r,
                u = -s / 2,
                v = -t / 2,
                w = s / 2,
                x = t / 2,
                y = Math.floor(r / 16),
                z = (w - u) / y,
                A = (x - v) / y,
                B = (0, h.InPreGamePhase)() ? o : (1 - this.activeFactor) * o,
                C = (0, h.InPreGamePhase)() ? Phaser.BlendModes.NORMAL : Phaser.BlendModes.ADD;
            for (let D = 0; D <= y; D++) {
                const E = u + D * z,
                    F = v + D * A;
                this.parts.add.sprite({
                    ...f.DotAsset,
                    depthChange: Math.min(v, x) - F,
                    ignoreInput: !0,
                    layerId: n.default.DevicesUnderCharacters,
                    x: E,
                    y: F,
                    onReady: D => {
                        D.view.tint = (0, g.GetNumberFromHexColor)(this.options.laserColor), D.view.alpha = B, D.view.blendMode = C, D.view.setScale(0.2), this.dots.push(D);
                    }
                });
            }
        }
        constructor(a) {
            super(a), (0, d.default)(this, 'activeFactor', 1), (0, d.default)(this, 'animationsReady', !1), (0, d.default)(this, 'dots', []), (0, d.default)(this, 'onUpdate', () => {
                (0, h.InGamePhaseVisible)() && (this.laser.view.scaleY = (0.5 * Math.random() + 0.5) * this.activeFactor, this.origin.view.scale = 0.03 * Math.random() * this.activeFactor + this.base.baseScale, this.endPoint.view.scale = 0.03 * Math.random() * this.activeFactor + this.base.baseScale, this.options.showPath && this.dots.forEach(a => {
                    a.view.alpha = (1 - this.activeFactor) * o;
                }));
            }), (0, d.default)(this, 'onStateChange', a => {
                if ('active' === a) {
                    const q = this.state.active ? 1 : 0;
                    if (this.tweens.add({
                            targets: this,
                            activeFactor: q,
                            duration: 150,
                            delay: 200 * q
                        }), !this.animationsReady)
                        return;
                    this.state.active && !this.prevState.active ? (this.origin.view.play((0, m.GetAnimName)(m.Anims.toActive, this.options.appearance)), this.endPoint.view.play((0, m.GetAnimName)(m.Anims.toActive, this.options.appearance))) : !this.state.active && this.prevState.active && (this.origin.view.play((0, m.GetAnimName)(m.Anims.toInactive, this.options.appearance)), this.endPoint.view.play((0, m.GetAnimName)(m.Anims.toInactive, this.options.appearance)));
                }
            }), (0, d.default)(this, 'onMessage', a => {
                'hit' === a.key && (0, l.OnHit)(a.data);
            }), (0, d.default)(this, 'setupVisualEditing', () => {
                if (!(0, h.InPreGamePhase)() || !(0, i.isSavedVersion)())
                    return;
                const q = (0, j.FetchOptionSchemaProperty)(this, 'distance');
                this.visualEditing.add.circle({
                    radius: this.options.distance / 2 + 40,
                    angle: this.options.angle - 90,
                    minRadius: q.min,
                    maxRadius: q.max,
                    onChange: q => {
                        (0, k.ReplaceVisualEditingPreview)(q.x, q.y, {
                            distance: 2 * (q.radius - 40),
                            angle: q.angle + 90
                        });
                    }
                });
            }), this.base = f.bases[this.options.appearance], this.setupVisualEditing();
            const q = Phaser.Math.DegToRad(this.options.angle),
                r = Math.cos(q) * this.options.distance,
                s = Math.sin(q) * this.options.distance;
            this.createPath(), this.origin = this.parts.add.animatedSprite({
                ...this.base,
                x: -r / 2,
                y: -s / 2
            }), this.endPoint = this.parts.add.animatedSprite({
                ...this.base,
                x: r / 2,
                y: s / 2,
                onReady: a => {
                    this.animationsReady = !0, this.state.active || (0, h.InPreGamePhase)() ? (this.origin.view.play((0, m.GetAnimName)(m.Anims.active, this.options.appearance)), a.view.play((0, m.GetAnimName)(m.Anims.active, this.options.appearance))) : (this.origin.view.play((0, m.GetAnimName)(m.Anims.inactive, this.options.appearance)), a.view.play((0, m.GetAnimName)(m.Anims.inactive, this.options.appearance)));
                }
            }), this.laser = this.parts.add.sprite({
                ...f.LaserAsset,
                layerId: n.default.DevicesAboveCharacters
            }), this.origin.view.rotation = q, this.endPoint.view.rotation = this.origin.view.rotation + Math.PI, this.origin.view.setScale(this.base.baseScale), this.endPoint.view.setScale(this.base.baseScale), this.laser.view.rotation = q, this.laser.view.blendMode = Phaser.BlendModes.ADD, this.laser.view.tint = (0, g.GetNumberFromHexColor)(this.options.laserColor), this.laser.view.scaleX = (this.options.distance - 55) / 600, this.laser.view.scaleY = 0.75, this.options.showOrigin || (this.origin.view.alpha = 0), this.options.showEndPoint || (this.endPoint.view.alpha = 0), (0, h.InGamePhase)() && !this.state.active && (this.activeFactor = 0, this.laser.view.scaleY = 0);
        }
    }
    var q = r;
}), b.register('MQaoo', function(d, c) {
    a(d.exports, 'LaserAsset', function() {
        return f;
    }), a(d.exports, 'DotAsset', function() {
        return g;
    }), a(d.exports, 'bases', function() {
        return j;
    });
    var c = b('JJQ0+'),
        d = b('eCuzb'),
        e = b('TAtYv');
    const f = {
            imageId: (0, c.default)('devices/laser_beam/laser.png'),
            imageUrl: (0, c.default)('devices/laser_beam/laser.png')
        },
        g = {
            imageId: (0, c.default)('devices/laser_beam/dot.png'),
            imageUrl: (0, c.default)('devices/laser_beam/dot.png')
        },
        h = e.LaserBeamAppearance.standard,
        i = e.LaserBeamAppearance.plant,
        j = {
            [h]: {
                baseScale: 0.36,
                spritesheetId: (0, c.default)('devices/laser_beam/standard_base.png'),
                spritesheetUrl: (0, c.default)('devices/laser_beam/standard_base.png'),
                frameWidth: 215,
                frameHeight: 130,
                animations: [{
                        animName: (0, d.GetAnimName)(d.Anims.inactive, h),
                        frameRate: 1,
                        animFrames: {
                            start: 0,
                            end: 0
                        }
                    },
                    {
                        animName: (0, d.GetAnimName)(d.Anims.toActive, h),
                        repeat: 0,
                        frameRate: 24,
                        animFrames: {
                            start: 0,
                            end: 7
                        }
                    },
                    {
                        animName: (0, d.GetAnimName)(d.Anims.active, h),
                        frameRate: 1,
                        animFrames: {
                            start: 7,
                            end: 7
                        }
                    },
                    {
                        animName: (0, d.GetAnimName)(d.Anims.toInactive, h),
                        repeat: 0,
                        frameRate: 24,
                        animFrames: {
                            start: 7,
                            end: 0
                        }
                    }
                ]
            },
            [i]: {
                baseScale: 0.5,
                spritesheetId: (0, c.default)('devices/laser_beam/plant_base.png'),
                spritesheetUrl: (0, c.default)('devices/laser_beam/plant_base.png'),
                frameWidth: 127,
                frameHeight: 122,
                animations: [{
                        animName: (0, d.GetAnimName)(d.Anims.inactive, i),
                        frameRate: 12,
                        animFrames: {
                            start: 0,
                            end: 0
                        }
                    },
                    {
                        animName: (0, d.GetAnimName)(d.Anims.toActive, i),
                        repeat: 0,
                        frameRate: 24,
                        animFrames: {
                            start: 0,
                            end: 4
                        }
                    },
                    {
                        animName: (0, d.GetAnimName)(d.Anims.active, i),
                        frameRate: 12,
                        animFrames: {
                            start: 4,
                            end: 4
                        }
                    },
                    {
                        animName: (0, d.GetAnimName)(d.Anims.toInactive, i),
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
}), b.register('eCuzb', function(b, d) {
    let c;
    var d;
    a(b.exports, 'Anims', function() {
        return c;
    }), a(b.exports, 'GetAnimName', function() {
        return e;
    }), (d = c || (c = {})).active = 'ACTIVE', d.inactive = 'INACTIVE', d.toActive = 'TO_ACTIVE', d.toInactive = 'TO_INACTIVE';
    const e = (a, b) => 'LASER_BEAM_DEVICE_ORIGIN_ANIM_' + b + a;
}), b.register('TAtYv', function(b, d) {
    let c;
    var d;
    a(b.exports, 'LaserBeamAppearance', function() {
        return c;
    }), (d = c || (c = {})).standard = 'Standard', d.plant = 'Plant';
}), b.register('/Lvpl17', function(b, d) {
    a(b.exports, 'FetchOptionSchemaProperty', function() {
        return c;
    });
    const c = (a, b) => {
        var d, e, f;
        const g = a.deviceOption.optionSchema.options.find(a => a.key === b);
        return {
            min: null === (d = null == g ? void 0 : g.option.props) || void 0 === d ? void 0 : d.min,
            max: null === (e = null == g ? void 0 : g.option.props) || void 0 === e ? void 0 : e.max,
            step: null === (f = null == g ? void 0 : g.option.props) || void 0 === f ? void 0 : f.step
        };
    };
}), b.register('wSwKo5', function(j, h) {
    a(j.exports, 'ReplaceVisualEditingPreview', function() {
        return g;
    });
    var c = b('2pEsK'),
        d = b('Am0b71'),
        e = b('KDS1x'),
        f = b('83+vO');
    const g = (a, b, j) => {
        const h = (0, f.FetchVisualEditingPreview)(),
            i = (0, e.FetchCurrentlyEditedDevice)();
        if (!i || !h)
            return;
        const j = i.layers.isOnNaturalDepth() ? void 0 : b + i.layers.getDepthShift();
        (0, d.default)({
            deviceOption: h.deviceOption,
            id: c.VisualEditingConstants.previewId,
            x: a,
            y: b,
            depth: j,
            layerId: i.layers.getLayer(),
            name: h.name,
            isPreview: !0,
            options: {
                ...h.options,
                ...j
            },
            placedByClient: !0,
            state: h.deviceOption.defaultState
        });
    };
}), b.register('Am0b71', function(j, k) {
    a(j.exports, 'default', function() {
        return e;
    });
    var c = b('dAmf5'),
        d = b('jgFbX');
    var e = a => {
        (0, c.default)().worldManager.devices.getDeviceById(a.id) && (0, d.default)(a);
    };
}), b.register('ZnzPM0', function(j, k) {
    a(j.exports, 'OnHit', function() {
        return h;
    });
    var c = b('PUlKf'),
        d = b('BEe8M'),
        e = b('dAmf5'),
        f = b('mdnc8'),
        g = b('hTFUq');
    const h = a => {
        const {
            characterId: i,
            damage: j,
            type: k
        } = l;
        if (i && j && k) {
            const m = (0, f.AmISpectator)() ? (0, d.FetchSpectatedId)() : (0, c.default)();
            (0, e.default)().worldManager.projectiles.damageMarkers.characters.applyDamage({
                characterId: i,
                damage: j,
                type: k
            }), i === m && (0, g.default)({
                type: k
            });
        }
    };
});