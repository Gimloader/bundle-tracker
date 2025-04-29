function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('o5HHG', function(c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'default', function() {
        return _w;
    });
    var f = b('s/YA9'),
        g = b('ltxDW'),
        h = b('NYKK8'),
        i = b('GIe9o'),
        j = b('UkCpC'),
        k = b('hycyg'),
        l = b('uc4mA17'),
        m = b('SOnqK'),
        n = b('u/WlI21'),
        o = b('3jaMj'),
        p = b('UaUBz0'),
        q = b('9zaF+'),
        r = b('HNjVJ'),
        s = b('CbU7r');
    let t;
    var u;
    (u = t || (t = {})).idleActive = 'idle-active', u.idleInactive = 'idle-inactive', u.explode = 'explode-short', u.reactivate = 'reactivate';
    class v extends g.default {
        constructor(w) {
            super(w), (0, f.default)(this, 'use', () => {
                this.cull.isInsideView && (0, o.playSound)({
                    path: (0, p.default)(`devices/lucky_block/sound/impact${ (0, q.random)(1, 2) }.mp3`),
                    volume: (0, s.getVolume)({
                        volume: 0.7 * (0, r.GetVolumeFactorByCameraDistance)(this.x, this.y),
                        type: s.SoundType.soundEffect
                    })
                }), this.playAnimation(t.explode);
            }), (0, f.default)(this, 'recharge', () => {
                this.state.active && this.playAnimation(t.reactivate);
            }), (0, f.default)(this, 'activate', () => {
                this.state.charged && this.playAnimation(t.idleActive);
            }), (0, f.default)(this, 'deactivate', () => {
                this.playAnimation(t.idleInactive);
            }), (0, f.default)(this, 'playAnimation', w => {
                if (!this.spine.view)
                    return;
                const x = w === t.idleActive || w === t.idleInactive;
                this.spine.view.animationState.setAnimation(0, w, x);
            }), (0, f.default)(this, 'onStateChange', w => {
                'active' === w && (this.state.active ? this.activate() : this.deactivate()), 'charged' === w && !1 === this.prevState.charged && !0 === this.state.charged && this.recharge(), 'useCounter' === w && this.state.useCounter > 0 && this.use();
            }), (0, f.default)(this, 'setupView', () => {
                const x = m.LuckyBlockDeviceConsts.boundingBox.width,
                    y = m.LuckyBlockDeviceConsts.boundingBox.height;
                this.spine = this.parts.add.spine({
                    ...h.SpineAsset,
                    spineViewId: this.id,
                    y: (y / 2 - m.LuckyBlockDeviceConsts.spine.yCorrection) * this.options.scale,
                    defaultAnimation: this.options.activeOnGameStart ? t.idleActive : t.idleInactive,
                    boundingBox: {
                        left: -x / 2 * this.options.scale,
                        right: x / 2 * this.options.scale,
                        top: (-y + m.LuckyBlockDeviceConsts.spine.yCorrection) * this.options.scale,
                        bottom: 2 * this.options.scale
                    },
                    onAnimationComplete: x => {
                        x === t.reactivate && this.playAnimation(t.idleActive), x === t.explode && this.state.active && 0 === this.options.rechargeAfterTime && this.playAnimation(t.reactivate);
                    },
                    onReady: x => {
                        x.view.setScale(m.LuckyBlockDeviceConsts.spine.baseScale * this.options.scale);
                    }
                });
            }), (0, f.default)(this, 'setupCollider', () => {
                this.colliders.add.box({
                    x: m.LuckyBlockDeviceConsts.collisions.x * this.options.scale,
                    y: m.LuckyBlockDeviceConsts.collisions.y * this.options.scale,
                    w: m.LuckyBlockDeviceConsts.collisions.width * this.options.scale + m.LuckyBlockDeviceConsts.collisions.margin,
                    h: m.LuckyBlockDeviceConsts.collisions.height * this.options.scale
                });
            }), (0, f.default)(this, 'setupShadow', () => {
                this.options.showShadow && this.shadows.add({
                    x: m.LuckyBlockDeviceConsts.shadow.x * this.options.scale,
                    y: m.LuckyBlockDeviceConsts.shadow.y * this.options.scale,
                    r1: m.LuckyBlockDeviceConsts.shadow.r1 * this.options.scale,
                    r2: m.LuckyBlockDeviceConsts.shadow.r2 * this.options.scale
                });
            }), (0, f.default)(this, 'setupInViewCallbacks', () => {
                (0, j.InPreGamePhase)() || this.cull.setOnEnterViewCallback(() => {
                    var x;
                    (null === (x = this.spine) || void 0 === x ? void 0 : x.view) && (this.spine.setMixDuration(0), this.playAnimation(this.state.active && this.state.charged ? t.idleActive : t.idleInactive), this.spine.view.updatePose(0), this.spine.resetMixDuration());
                });
            }), (0, f.default)(this, 'setupVisualEditing', () => {
                if ((0, j.InGamePhase)() || (0, k.isPublishedVersion)())
                    return;
                const x = (0, l.FetchOptionSchemaProperty)(this, 'scale'),
                    y = m.LuckyBlockDeviceConsts.boundingBox.width,
                    z = m.LuckyBlockDeviceConsts.boundingBox.height;
                this.visualEditing.add.box({
                    keepRatio: !0,
                    rotable: !1,
                    width: y * this.options.scale,
                    height: z * this.options.scale,
                    minWidth: y * x.min,
                    maxWidth: y * x.max,
                    minHeight: z * x.min,
                    maxHeight: z * x.max,
                    onChange: x => {
                        (0, n.ReplaceVisualEditingPreview)(x.x, x.y, {
                            scale: x.width / y
                        });
                    }
                });
            }), this.layers.setDefaultLayer(i.default.DepthSortedCharactersAndDevices), this.setupView(), this.setupShadow(), this.setupCollider(), this.setupVisualEditing(), this.setupInViewCallbacks(), this.cull.setMargin(50);
        }
    }
    var _w = v;
}), b.register('NYKK8', function(c, d) {
    a(c.exports, 'SpineAsset', function() {
        return _f;
    });
    var e = b('UaUBz0');
    const _f = {
        atlasUrl: (0, e.default)('devices/lucky_block/spine/luckyBlock.atlas'),
        jsonUrl: (0, e.default)('devices/lucky_block/spine/luckyBlock.json')
    };
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
}), b.register('SOnqK', function(c, d) {
    a(c.exports, 'LuckyBlockDeviceConsts', function() {
        return _e;
    });
    const _e = {
        boundingBox: {
            width: 110,
            height: 134
        },
        collisions: {
            x: 0,
            y: 17,
            width: 110,
            height: 100,
            margin: 22
        },
        spine: {
            yCorrection: 2,
            baseScale: 0.2
        },
        shadow: {
            x: 0,
            y: 35,
            r1: 75,
            r2: 50
        }
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
});