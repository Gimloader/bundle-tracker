function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('yoEa0', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _r(b.exports, 'default', function() {
        return _r;
    });
    var e = a('1bFPu'),
        f = a('I35Ay'),
        g = a('N57jq'),
        h = a('h2EGG'),
        i = a('/pbxo'),
        j = a('9tz3H'),
        k = a('R2Ucl10'),
        l = a('IFO6W13'),
        m = a('bu42I0'),
        n = a('ibV5b'),
        o = a('JqBF0');
    const p = 0.35;
    class q extends f.default {
        createPath() {
            if (!this.options.showPath)
                return;
            const _r = Phaser.Math.DegToRad(this.options.angle),
                s = 16 * Math.floor((this.options.distance - 55 - 24) / 16),
                t = Math.cos(_r) * s,
                u = Math.sin(_r) * s,
                v = -t / 2,
                w = -u / 2,
                x = t / 2,
                y = u / 2,
                z = Math.floor(s / 16),
                A = (x - v) / z,
                B = (y - w) / z,
                C = (0, i.InPreGamePhase)() ? p : (1 - this.activeFactor) * p,
                D = (0, i.InPreGamePhase)() ? Phaser.BlendModes.NORMAL : Phaser.BlendModes.ADD;
            for (let E = 0; E <= z; E++) {
                const F = v + E * A,
                    G = w + E * B;
                this.parts.add.sprite({
                    ...g.DotAsset,
                    depthChange: Math.min(w, y) - G,
                    ignoreInput: !0,
                    layerId: o.default.DevicesUnderCharacters,
                    x: F,
                    y: G,
                    onReady: E => {
                        E.view.tint = (0, h.GetNumberFromHexColor)(this.options.laserColor), E.view.alpha = C, E.view.blendMode = D, E.view.setScale(0.2), this.dots.push(E);
                    }
                });
            }
        }
        constructor(r) {
            super(r), (0, e.default)(this, 'activeFactor', 1), (0, e.default)(this, 'animationsReady', !1), (0, e.default)(this, 'dots', []), (0, e.default)(this, 'onUpdate', () => {
                (0, i.InGamePhaseVisible)() && (this.laser.view.scaleY = (0.5 * Math.random() + 0.5) * this.activeFactor, this.origin.view.scale = 0.03 * Math.random() * this.activeFactor + this.base.baseScale, this.endPoint.view.scale = 0.03 * Math.random() * this.activeFactor + this.base.baseScale, this.options.showPath && this.dots.forEach(r => {
                    r.view.alpha = (1 - this.activeFactor) * p;
                }));
            }), (0, e.default)(this, 'onStateChange', r => {
                if ('active' === r) {
                    const s = this.state.active ? 1 : 0;
                    if (this.tweens.add({
                            targets: this,
                            activeFactor: s,
                            duration: 150,
                            delay: 200 * s
                        }), !this.animationsReady)
                        return;
                    this.state.active && !this.prevState.active ? (this.origin.view.play((0, n.GetAnimName)(n.Anims.toActive, this.options.appearance)), this.endPoint.view.play((0, n.GetAnimName)(n.Anims.toActive, this.options.appearance))) : !this.state.active && this.prevState.active && (this.origin.view.play((0, n.GetAnimName)(n.Anims.toInactive, this.options.appearance)), this.endPoint.view.play((0, n.GetAnimName)(n.Anims.toInactive, this.options.appearance)));
                }
            }), (0, e.default)(this, 'onMessage', r => {
                'hit' === r.key && (0, m.OnHit)(r.data);
            }), (0, e.default)(this, 'setupVisualEditing', () => {
                if (!(0, i.InPreGamePhase)() || !(0, j.isSavedVersion)())
                    return;
                const s = (0, k.FetchOptionSchemaProperty)(this, 'distance');
                this.visualEditing.add.circle({
                    radius: this.options.distance / 2 + 40,
                    angle: this.options.angle - 90,
                    minRadius: s.min,
                    maxRadius: s.max,
                    onChange: s => {
                        (0, l.ReplaceVisualEditingPreview)(s.x, s.y, {
                            distance: 2 * (s.radius - 40),
                            angle: s.angle + 90
                        });
                    }
                });
            }), this.base = g.bases[this.options.appearance], this.setupVisualEditing();
            const s = Phaser.Math.DegToRad(this.options.angle),
                t = Math.cos(s) * this.options.distance,
                u = Math.sin(s) * this.options.distance;
            this.createPath(), this.origin = this.parts.add.animatedSprite({
                ...this.base,
                x: -t / 2,
                y: -u / 2
            }), this.endPoint = this.parts.add.animatedSprite({
                ...this.base,
                x: t / 2,
                y: u / 2,
                onReady: r => {
                    this.animationsReady = !0, this.state.active || (0, i.InPreGamePhase)() ? (this.origin.view.play((0, n.GetAnimName)(n.Anims.active, this.options.appearance)), r.view.play((0, n.GetAnimName)(n.Anims.active, this.options.appearance))) : (this.origin.view.play((0, n.GetAnimName)(n.Anims.inactive, this.options.appearance)), r.view.play((0, n.GetAnimName)(n.Anims.inactive, this.options.appearance)));
                }
            }), this.laser = this.parts.add.sprite({
                ...g.LaserAsset,
                layerId: o.default.DevicesAboveCharacters
            }), this.origin.view.rotation = s, this.endPoint.view.rotation = this.origin.view.rotation + Math.PI, this.origin.view.setScale(this.base.baseScale), this.endPoint.view.setScale(this.base.baseScale), this.laser.view.rotation = s, this.laser.view.blendMode = Phaser.BlendModes.ADD, this.laser.view.tint = (0, h.GetNumberFromHexColor)(this.options.laserColor), this.laser.view.scaleX = (this.options.distance - 55) / 600, this.laser.view.scaleY = 0.75, this.options.showOrigin || (this.origin.view.alpha = 0), this.options.showEndPoint || (this.endPoint.view.alpha = 0), (0, i.InGamePhase)() && !this.state.active && (this.activeFactor = 0, this.laser.view.scaleY = 0);
        }
    }
    var _r = q;
}), a.register('N57jq', function(b, c) {
    _m(b.exports, 'LaserAsset', function() {
        return _g;
    }), _m(b.exports, 'DotAsset', function() {
        return _h;
    }), _m(b.exports, 'bases', function() {
        return _k;
    });
    var d = a('2Xvuf'),
        e = a('ibV5b'),
        f = a('WVCjw');
    const _g = {
            imageId: (0, d.default)('devices/laser_beam/laser.png'),
            imageUrl: (0, d.default)('devices/laser_beam/laser.png')
        },
        _h = {
            imageId: (0, d.default)('devices/laser_beam/dot.png'),
            imageUrl: (0, d.default)('devices/laser_beam/dot.png')
        },
        i = f.LaserBeamAppearance.standard,
        j = f.LaserBeamAppearance.plant,
        _k = {
            [i]: {
                baseScale: 0.36,
                spritesheetId: (0, d.default)('devices/laser_beam/standard_base.png'),
                spritesheetUrl: (0, d.default)('devices/laser_beam/standard_base.png'),
                frameWidth: 215,
                frameHeight: 130,
                animations: [{
                        animName: (0, e.GetAnimName)(e.Anims.inactive, i),
                        frameRate: 1,
                        animFrames: {
                            start: 0,
                            end: 0
                        }
                    },
                    {
                        animName: (0, e.GetAnimName)(e.Anims.toActive, i),
                        repeat: 0,
                        frameRate: 24,
                        animFrames: {
                            start: 0,
                            end: 7
                        }
                    },
                    {
                        animName: (0, e.GetAnimName)(e.Anims.active, i),
                        frameRate: 1,
                        animFrames: {
                            start: 7,
                            end: 7
                        }
                    },
                    {
                        animName: (0, e.GetAnimName)(e.Anims.toInactive, i),
                        repeat: 0,
                        frameRate: 24,
                        animFrames: {
                            start: 7,
                            end: 0
                        }
                    }
                ]
            },
            [j]: {
                baseScale: 0.5,
                spritesheetId: (0, d.default)('devices/laser_beam/plant_base.png'),
                spritesheetUrl: (0, d.default)('devices/laser_beam/plant_base.png'),
                frameWidth: 127,
                frameHeight: 122,
                animations: [{
                        animName: (0, e.GetAnimName)(e.Anims.inactive, j),
                        frameRate: 12,
                        animFrames: {
                            start: 0,
                            end: 0
                        }
                    },
                    {
                        animName: (0, e.GetAnimName)(e.Anims.toActive, j),
                        repeat: 0,
                        frameRate: 24,
                        animFrames: {
                            start: 0,
                            end: 4
                        }
                    },
                    {
                        animName: (0, e.GetAnimName)(e.Anims.active, j),
                        frameRate: 12,
                        animFrames: {
                            start: 4,
                            end: 4
                        }
                    },
                    {
                        animName: (0, e.GetAnimName)(e.Anims.toInactive, j),
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
}), a.register('ibV5b', function(b, c) {
    let d;
    var e;
    _m(b.exports, 'Anims', function() {
        return d;
    }), _m(b.exports, 'GetAnimName', function() {
        return _f;
    }), (e = d || (d = {})).active = 'ACTIVE', e.inactive = 'INACTIVE', e.toActive = 'TO_ACTIVE', e.toInactive = 'TO_INACTIVE';
    const _f = (_m, b) => 'LASER_BEAM_DEVICE_ORIGIN_ANIM_' + b + _m;
}), a.register('WVCjw', function(b, c) {
    let d;
    var e;
    _m(b.exports, 'LaserBeamAppearance', function() {
        return d;
    }), (e = d || (d = {})).standard = 'Standard', e.plant = 'Plant';
}), a.register('R2Ucl10', function(b, c) {
    _m(b.exports, 'FetchOptionSchemaProperty', function() {
        return _d;
    });
    const _d = (_m, b) => {
        var e, f, g;
        const h = _m.deviceOption.optionSchema.options.find(_m => _m.key === b);
        return {
            min: null === (e = null == h ? void 0 : h.option.props) || void 0 === e ? void 0 : e.min,
            max: null === (f = null == h ? void 0 : h.option.props) || void 0 === f ? void 0 : f.max,
            step: null === (g = null == h ? void 0 : h.option.props) || void 0 === g ? void 0 : g.step
        };
    };
}), a.register('IFO6W13', function(b, c) {
    _m(b.exports, 'ReplaceVisualEditingPreview', function() {
        return _h;
    });
    var d = a('HqwPM'),
        e = a('+oovY4'),
        f = a('A17vD'),
        g = a('HXXiu');
    const _h = (_m, a, b) => {
        const i = (0, g.FetchVisualEditingPreview)(),
            j = (0, f.FetchCurrentlyEditedDevice)();
        if (!j || !i)
            return;
        const k = j.layers.isOnNaturalDepth() ? void 0 : a + j.layers.getDepthShift();
        (0, e.default)({
            deviceOption: i.deviceOption,
            id: d.VisualEditingConstants.previewId,
            x: _m,
            y: a,
            depth: k,
            layerId: j.layers.getLayer(),
            name: i.name,
            isPreview: !0,
            options: {
                ...i.options,
                ...b
            },
            placedByClient: !0,
            state: i.deviceOption.defaultState
        });
    };
}), a.register('+oovY4', function(b, c) {
    _m(b.exports, 'default', function() {
        return _f;
    });
    var d = a('D5xLI'),
        e = a('aIyMH');
    var _f = _m => {
        (0, d.default)().worldManager.devices.getDeviceById(_m.id) && (0, e.default)(_m);
    };
}), a.register('bu42I0', function(b, c) {
    _m(b.exports, 'OnHit', function() {
        return _i;
    });
    var d = a('Jfada'),
        e = a('B9G/J'),
        f = a('D5xLI'),
        g = a('O4Fyc'),
        h = a('vqFRL');
    const _i = _m => {
        const {
            characterId: j,
            damage: k,
            type: l
        } = _m;
        if (j && k && l) {
            const _m = (0, g.AmISpectator)() ? (0, e.FetchSpectatedId)() : (0, d.default)();
            (0, f.default)().worldManager.projectiles.damageMarkers.characters.applyDamage({
                characterId: j,
                damage: k,
                type: l
            }), j === _m && (0, h.default)({
                type: l
            });
        }
    };
});