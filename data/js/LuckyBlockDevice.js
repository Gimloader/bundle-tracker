function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('Y/OME', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _v(b.exports, 'default', function() {
        return _v;
    });
    var e = a('1bFPu'),
        f = a('I35Ay'),
        g = a('zjQC8'),
        h = a('JqBF0'),
        i = a('/pbxo'),
        j = a('9tz3H'),
        k = a('R2Ucl10'),
        l = a('gTBP2'),
        m = a('IFO6W13'),
        n = a('07pQo'),
        o = a('2Xvuf'),
        p = a('fe6E3'),
        q = a('QEfvD'),
        r = a('1f1YX');
    let s;
    var t;
    (t = s || (s = {})).idleActive = 'idle-active', t.idleInactive = 'idle-inactive', t.explode = 'explode-short', t.reactivate = 'reactivate';
    class u extends f.default {
        constructor(_v) {
            super(_v), (0, e.default)(this, 'use', () => {
                this.cull.isInsideView && (0, n.playSound)({
                    path: (0, o.default)(`devices/lucky_block/sound/impact${ (0, p.random)(1, 2) }.mp3`),
                    volume: (0, r.getVolume)({
                        volume: 0.7 * (0, q.GetVolumeFactorByCameraDistance)(this.x, this.y),
                        type: r.SoundType.soundEffect
                    })
                }), this.playAnimation(s.explode);
            }), (0, e.default)(this, 'recharge', () => {
                this.state.active && this.playAnimation(s.reactivate);
            }), (0, e.default)(this, 'activate', () => {
                this.state.charged && this.playAnimation(s.idleActive);
            }), (0, e.default)(this, 'deactivate', () => {
                this.playAnimation(s.idleInactive);
            }), (0, e.default)(this, 'playAnimation', _v => {
                if (!this.spine.view)
                    return;
                const w = _v === s.idleActive || _v === s.idleInactive;
                this.spine.view.animationState.setAnimation(0, _v, w);
            }), (0, e.default)(this, 'onStateChange', _v => {
                'active' === _v && (this.state.active ? this.activate() : this.deactivate()), 'charged' === _v && !1 === this.prevState.charged && !0 === this.state.charged && this.recharge(), 'useCounter' === _v && this.state.useCounter > 0 && this.use();
            }), (0, e.default)(this, 'setupView', () => {
                const w = l.LuckyBlockDeviceConsts.boundingBox.width,
                    x = l.LuckyBlockDeviceConsts.boundingBox.height;
                this.spine = this.parts.add.spine({
                    ...g.SpineAsset,
                    spineViewId: this.id,
                    y: (x / 2 - l.LuckyBlockDeviceConsts.spine.yCorrection) * this.options.scale,
                    defaultAnimation: this.options.activeOnGameStart ? s.idleActive : s.idleInactive,
                    boundingBox: {
                        left: -w / 2 * this.options.scale,
                        right: w / 2 * this.options.scale,
                        top: (-x + l.LuckyBlockDeviceConsts.spine.yCorrection) * this.options.scale,
                        bottom: 2 * this.options.scale
                    },
                    onAnimationComplete: w => {
                        w === s.reactivate && this.playAnimation(s.idleActive), w === s.explode && this.state.active && 0 === this.options.rechargeAfterTime && this.playAnimation(s.reactivate);
                    },
                    onReady: w => {
                        w.view.setScale(l.LuckyBlockDeviceConsts.spine.baseScale * this.options.scale);
                    }
                });
            }), (0, e.default)(this, 'setupCollider', () => {
                this.colliders.add.box({
                    x: l.LuckyBlockDeviceConsts.collisions.x * this.options.scale,
                    y: l.LuckyBlockDeviceConsts.collisions.y * this.options.scale,
                    w: l.LuckyBlockDeviceConsts.collisions.width * this.options.scale + l.LuckyBlockDeviceConsts.collisions.margin,
                    h: l.LuckyBlockDeviceConsts.collisions.height * this.options.scale
                });
            }), (0, e.default)(this, 'setupShadow', () => {
                this.options.showShadow && this.shadows.add({
                    x: l.LuckyBlockDeviceConsts.shadow.x * this.options.scale,
                    y: l.LuckyBlockDeviceConsts.shadow.y * this.options.scale,
                    r1: l.LuckyBlockDeviceConsts.shadow.r1 * this.options.scale,
                    r2: l.LuckyBlockDeviceConsts.shadow.r2 * this.options.scale
                });
            }), (0, e.default)(this, 'setupInViewCallbacks', () => {
                (0, i.InPreGamePhase)() || this.cull.setOnEnterViewCallback(() => {
                    this.spine.setMixDuration(0), this.playAnimation(this.state.active && this.state.charged ? s.idleActive : s.idleInactive), this.spine.view.updatePose(0), this.spine.resetMixDuration();
                });
            }), (0, e.default)(this, 'setupVisualEditing', () => {
                if ((0, i.InGamePhase)() || (0, j.isPublishedVersion)())
                    return;
                const w = (0, k.FetchOptionSchemaProperty)(this, 'scale'),
                    x = l.LuckyBlockDeviceConsts.boundingBox.width,
                    y = l.LuckyBlockDeviceConsts.boundingBox.height;
                this.visualEditing.add.box({
                    keepRatio: !0,
                    rotable: !1,
                    width: x * this.options.scale,
                    height: y * this.options.scale,
                    minWidth: x * w.min,
                    maxWidth: x * w.max,
                    minHeight: y * w.min,
                    maxHeight: y * w.max,
                    onChange: w => {
                        (0, m.ReplaceVisualEditingPreview)(w.x, w.y, {
                            scale: w.width / x
                        });
                    }
                });
            }), this.layers.setDefaultLayer(h.default.DepthSortedCharactersAndDevices), this.setupView(), this.setupShadow(), this.setupCollider(), this.setupVisualEditing(), this.setupInViewCallbacks(), this.cull.setMargin(50);
        }
    }
    var _v = u;
}), a.register('zjQC8', function(b, c) {
    e(b.exports, 'SpineAsset', function() {
        return _e;
    });
    var d = a('2Xvuf');
    const _e = {
        atlasUrl: (0, d.default)('devices/lucky_block/spine/luckyBlock.atlas'),
        jsonUrl: (0, d.default)('devices/lucky_block/spine/luckyBlock.json')
    };
}), a.register('R2Ucl10', function(b, c) {
    e(b.exports, 'FetchOptionSchemaProperty', function() {
        return _d;
    });
    const _d = (e, b) => {
        var e, f, g;
        const h = e.deviceOption.optionSchema.options.find(e => e.key === b);
        return {
            min: null === (e = null == h ? void 0 : h.option.props) || void 0 === e ? void 0 : e.min,
            max: null === (f = null == h ? void 0 : h.option.props) || void 0 === f ? void 0 : f.max,
            step: null === (g = null == h ? void 0 : h.option.props) || void 0 === g ? void 0 : g.step
        };
    };
}), a.register('gTBP2', function(b, c) {
    e(b.exports, 'LuckyBlockDeviceConsts', function() {
        return _d;
    });
    const _d = {
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
}), a.register('IFO6W13', function(b, c) {
    e(b.exports, 'ReplaceVisualEditingPreview', function() {
        return _h;
    });
    var d = a('HqwPM'),
        e = a('+oovY4'),
        f = a('A17vD'),
        g = a('HXXiu');
    const _h = (e, a, b) => {
        const i = (0, g.FetchVisualEditingPreview)(),
            j = (0, f.FetchCurrentlyEditedDevice)();
        if (!j || !i)
            return;
        const k = j.layers.isOnNaturalDepth() ? void 0 : a + j.layers.getDepthShift();
        (0, e.default)({
            deviceOption: i.deviceOption,
            id: d.VisualEditingConstants.previewId,
            x: e,
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
    e(b.exports, 'default', function() {
        return _f;
    });
    var d = a('D5xLI'),
        e = a('aIyMH');
    var _f = e => {
        (0, d.default)().worldManager.devices.getDeviceById(e.id) && (0, e.default)(e);
    };
});