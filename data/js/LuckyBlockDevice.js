function a(a, b, r, c) {
    Object.defineProperty(a, b, {
        get: r,
        set: c,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('TO2ej', function(r, c) {
    var c;
    c = r.exports, Object.defineProperty(c, '__esModule', {
        value: !0,
        configurable: !0
    }), a(r.exports, 'default', function() {
        return p;
    });
    var d = b('UM8oI'),
        e = b('sgILU'),
        f = b('npgvx'),
        g = b('cMsWT'),
        h = b('5Ux1a'),
        i = b('Bpt+p'),
        j = b('/Lvpl17'),
        k = b('3670e'),
        l = b('wSwKo5');
    let m;
    var n;
    (n = m || (m = {})).idleActive = 'idle-active', n.idleInactive = 'idle-inactive', n.explode = 'explode', n.reactivate = 'reactivate';
    class o extends e.default {
        constructor(a) {
            super(a), (0, d.default)(this, 'use', () => {
                this.playAnimation(m.explode);
            }), (0, d.default)(this, 'recharge', () => {
                this.state.active && this.playAnimation(m.reactivate);
            }), (0, d.default)(this, 'activate', () => {
                this.state.charged && this.playAnimation(m.idleActive);
            }), (0, d.default)(this, 'deactivate', () => {
                this.playAnimation(m.idleInactive);
            }), (0, d.default)(this, 'playAnimation', a => {
                if (!this.spine.view)
                    return;
                const p = a === m.idleActive || a === m.idleInactive;
                this.spine.view.animationState.setAnimation(0, a, p);
            }), (0, d.default)(this, 'onStateChange', a => {
                'active' === a && (this.state.active ? this.activate() : this.deactivate()), 'charged' === a && !1 === this.prevState.charged && !0 === this.state.charged && this.recharge(), 'useCounter' === a && this.state.useCounter > 0 && this.use();
            }), (0, d.default)(this, 'setupView', () => {
                const p = k.LuckyBlockDeviceConsts.boundingBox.width,
                    q = k.LuckyBlockDeviceConsts.boundingBox.height;
                this.spine = this.parts.add.spine({
                    ...f.SpineAsset,
                    spineViewId: this.id,
                    y: (q / 2 - k.LuckyBlockDeviceConsts.spine.yCorrection) * this.options.scale,
                    defaultAnimation: this.options.activeOnGameStart ? m.idleActive : m.idleInactive,
                    boundingBox: {
                        left: -p / 2 * this.options.scale,
                        right: p / 2 * this.options.scale,
                        top: (-q + k.LuckyBlockDeviceConsts.spine.yCorrection) * this.options.scale,
                        bottom: 2 * this.options.scale
                    },
                    onAnimationComplete: p => {
                        p === m.reactivate && this.playAnimation(m.idleActive), p === m.explode && this.state.active && 0 === this.options.rechargeAfterTime && this.playAnimation(m.reactivate);
                    },
                    onReady: p => {
                        p.view.setScale(k.LuckyBlockDeviceConsts.spine.baseScale * this.options.scale);
                    }
                });
            }), (0, d.default)(this, 'setupCollider', () => {
                this.colliders.add.box({
                    x: k.LuckyBlockDeviceConsts.collisions.x * this.options.scale,
                    y: k.LuckyBlockDeviceConsts.collisions.y * this.options.scale,
                    w: k.LuckyBlockDeviceConsts.collisions.width * this.options.scale + k.LuckyBlockDeviceConsts.collisions.margin,
                    h: k.LuckyBlockDeviceConsts.collisions.height * this.options.scale
                });
            }), (0, d.default)(this, 'setupShadow', () => {
                this.options.showShadow && this.shadows.add({
                    x: k.LuckyBlockDeviceConsts.shadow.x * this.options.scale,
                    y: k.LuckyBlockDeviceConsts.shadow.y * this.options.scale,
                    r1: k.LuckyBlockDeviceConsts.shadow.r1 * this.options.scale,
                    r2: k.LuckyBlockDeviceConsts.shadow.r2 * this.options.scale
                });
            }), (0, d.default)(this, 'setupVisualEditing', () => {
                if ((0, h.InGamePhase)() || (0, i.isPublishedVersion)())
                    return;
                const p = (0, j.FetchOptionSchemaProperty)(this, 'scale'),
                    q = k.LuckyBlockDeviceConsts.boundingBox.width,
                    r = k.LuckyBlockDeviceConsts.boundingBox.height;
                this.visualEditing.add.box({
                    keepRatio: !0,
                    rotable: !1,
                    width: q * this.options.scale,
                    height: r * this.options.scale,
                    minWidth: q * p.min,
                    maxWidth: q * p.max,
                    minHeight: r * p.min,
                    maxHeight: r * p.max,
                    onChange: p => {
                        (0, l.ReplaceVisualEditingPreview)(p.x, p.y, {
                            scale: p.width / q
                        });
                    }
                });
            }), this.layers.setDefaultLayer(g.default.DepthSortedCharactersAndDevices), this.setupView(), this.setupShadow(), this.setupCollider(), this.setupVisualEditing();
        }
    }
    var p = q;
}), b.register('npgvx', function(d, c) {
    a(d.exports, 'SpineAsset', function() {
        return d;
    });
    var c = b('JJQ0+');
    const d = {
        atlasUrl: (0, c.default)('devices/lucky_block/spine/luckyBlock.atlas'),
        jsonUrl: (0, c.default)('devices/lucky_block/spine/luckyBlock.json')
    };
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
}), b.register('3670e', function(b, i) {
    a(b.exports, 'LuckyBlockDeviceConsts', function() {
        return c;
    });
    const c = {
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
            r1: 70,
            r2: 60
        }
    };
}), b.register('wSwKo5', function(i, h) {
    a(i.exports, 'ReplaceVisualEditingPreview', function() {
        return g;
    });
    var c = b('2pEsK'),
        d = b('Am0b71'),
        e = b('KDS1x'),
        f = b('83+vO');
    const g = (a, b, i) => {
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
                ...i
            },
            placedByClient: !0,
            state: h.deviceOption.defaultState
        });
    };
}), b.register('Am0b71', function(i, s) {
    a(i.exports, 'default', function() {
        return e;
    });
    var c = b('dAmf5'),
        d = b('jgFbX');
    var e = a => {
        (0, c.default)().worldManager.devices.getDeviceById(a.id) && (0, d.default)(a);
    };
});