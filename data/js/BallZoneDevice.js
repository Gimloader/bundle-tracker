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
    }), a(c.exports, 'BallZoneDevice', function() {
        return _t;
    }), a(c.exports, 'default', function() {
        return _u;
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
        p = b('.....'),
        q = b('.....'),
        r = b('.....'),
        s = b('.....');
    class _t extends k.default {
        getAlpha() {
            return (0, i.InGamePhase)() ? this.state.active ? this.options.backgroundAlpha : 0 : (0, h.isPublishedVersion)() || (0, h.isSavedVersion)() && j.default.shouldShowInnerZone(this) ? this.options.backgroundAlpha : 0;
        }
        constructor(u) {
            if (super(u), (0, f.default)(this, 'updatePartAlpha', v => {
                    const w = this.getAlpha();
                    (0, i.InGamePhase)() && v.updateAlpha(w > 0 ? 1 : 0);
                }), (0, f.default)(this, 'updateAlpha', () => {
                    const v = this.getAlpha();
                    (0, i.InGamePhase)() && this.parts.forEach(w => {
                        w.updateAlpha(v > 0 ? 1 : 0);
                    }), this.rect && this.rect.updateAlpha(v);
                }), (0, f.default)(this, 'onStateChange', v => {
                    'active' === v && (this.updateAlpha(), this.state.active && (0, r.default)(this));
                }), (0, f.default)(this, 'checkIfCollidersEnabled', () => this.state.active), (0, f.default)(this, 'setupVisualEditing', () => {
                    if (!(0, i.InPreGamePhase)() || !(0, h.isSavedVersion)())
                        return;
                    const v = (0, o.FetchOptionSchemaProperty)(this, 'width'),
                        w = (0, o.FetchOptionSchemaProperty)(this, 'height');
                    this.visualEditing.add.box({
                        width: this.options.width,
                        height: this.options.height,
                        angle: 0,
                        rotable: !1,
                        minWidth: v.min,
                        maxWidth: v.max,
                        minHeight: w.min,
                        maxHeight: w.max,
                        keepRatio: !1,
                        onChange: x => {
                            (0, p.ReplaceVisualEditingPreview)(x.x, x.y, {
                                width: x.width,
                                height: x.height
                            });
                        }
                    });
                }), (0, i.InPreGamePhase)() && (0, h.isSavedVersion)()) {
                this.parts.add.sprite({
                    ...m.IconAsset,
                    depthChange: (0, n.default)(2)
                }).view.setScale(0.17);
            }
            if ((0, i.InGamePhase)() || (0, h.isPublishedVersion)() ? this.options.visibleInGame : j.default.shouldShow(this)) {
                this.setupVisualEditing();
                const v = (0, g.GetNumberFromHexColor)(this.options.color);
                this.rect = this.parts.add.rect({
                    color: v,
                    layerId: s.default.DevicesUnderCharacters,
                    alpha: this.getAlpha(),
                    width: Math.abs(this.options.width),
                    height: Math.abs(this.options.height),
                    borderColor: v,
                    borderAlpha: (0, i.InGamePhase)() || (0, h.isPublishedVersion)() ? 0 : this.options.backgroundAlpha,
                    borderWidth: 4,
                    depthChange: (0, n.default)(1),
                    ignoreInput: !0
                }), this.options.style === l.Style.blastball && (0, q.CreateBlastBallStyle)(this);
            }
        }
    }
    var _u = _t;
}), b.register('.....', function(c, d) {
    a(c.exports, 'ZonedDeviceDisplayOptions', function() {
        return _f;
    }), a(c.exports, 'default', function() {
        return _i;
    });
    var e = b('.....');
    let _f;
    var g;
    (g = _f || (_f = {})).visible = 'visible', g.bordersOnly = 'bordersOnly', g.fullyHidden = 'fullyHidden';
    const h = () => {
        const i = localStorage.getItem(e.default.zonedDeviceViews);
        return i || _f.bordersOnly;
    };
    var _i = {
        shouldShow: j => h() !== _f.fullyHidden,
        shouldShowInnerZone: j => h() !== _f.bordersOnly
    };
}), b.register('.....', function(c, d) {
    a(c.exports, 'default', function() {
        return _e;
    });
    var _e = {
        zonedDeviceViews: 'zoned-device-views'
    };
}), b.register('.....', function(c, d) {
    let e;
    var f;
    let g;
    var h;
    a(c.exports, 'Style', function() {
        return e;
    }), a(c.exports, 'Side', function() {
        return g;
    }), (f = e || (e = {})).none = 'None', f.blastball = 'Blastball', (h = g || (g = {})).left = 'Left', h.right = 'Right';
}), b.register('.....', function(c, d) {
    a(c.exports, 'IconAsset', function() {
        return _f;
    }), a(c.exports, 'BlastBallAssets', function() {
        return _g;
    });
    var e = b('.....');
    const _f = {
            imageId: (0, e.default)('devices/ball_zone/icon.png'),
            imageUrl: (0, e.default)('devices/ball_zone/icon.png')
        },
        _g = {
            side_bottom: {
                imageId: (0, e.default)('devices/ball_zone/blastball_side_bottom.png'),
                imageUrl: (0, e.default)('devices/ball_zone/blastball_side_bottom.png')
            },
            side_top: {
                imageId: (0, e.default)('devices/ball_zone/blastball_side_top.png'),
                imageUrl: (0, e.default)('devices/ball_zone/blastball_side_top.png')
            },
            crossbar: {
                imageId: (0, e.default)('devices/ball_zone/blastball_crossbar.png'),
                imageUrl: (0, e.default)('devices/ball_zone/blastball_crossbar.png')
            },
            dot: {
                imageId: (0, e.default)('devices/ball_zone/blastball_dot.png'),
                imageUrl: (0, e.default)('devices/ball_zone/blastball_dot.png')
            }
        };
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
    a(c.exports, 'CreateBlastBallStyle', function() {
        return _i;
    });
    var e = b('.....'),
        f = b('.....'),
        g = b('.....'),
        h = b('.....');
    const _i = j => {
        const k = 0.15,
            l = m => j.options.side === g.Side.left ? m : -m;
        j.parts.add.ninePatch({
            ...e.BlastBallAssets.crossbar,
            layerId: f.default.DevicesUnderCharacters,
            columns: [
                0,
                0
            ],
            rows: [
                200,
                200
            ],
            height: j.options.height,
            width: 30.45,
            scale: k,
            depthChange: (0, h.default)(2),
            x: l(-j.options.width / 2 + 5),
            onReady: m => {
                j.updatePartAlpha(m);
            }
        }), j.parts.add.ninePatch({
            ...e.BlastBallAssets.side_top,
            layerId: f.default.DepthSortedCharactersAndDevices,
            columns: [
                850,
                850
            ],
            rows: [
                0,
                0
            ],
            height: 606 * k,
            width: l(j.options.width + 30),
            scale: k,
            x: l(-5),
            y: -j.options.height / 2,
            onReady: m => {
                j.updatePartAlpha(m);
            }
        }), j.parts.add.ninePatch({
            ...e.BlastBallAssets.side_bottom,
            layerId: f.default.DepthSortedCharactersAndDevices,
            columns: [
                850,
                850
            ],
            rows: [
                0,
                0
            ],
            height: 606 * k,
            width: l(j.options.width + 30),
            scale: k,
            x: l(-5),
            y: j.options.height / 2,
            onReady: m => {
                j.updatePartAlpha(m);
            }
        }), j.colliders.add.box({
            x: 0,
            y: -j.options.height / 2 + 10,
            w: j.options.width + 16,
            h: 50
        }), j.colliders.add.box({
            x: 0,
            y: j.options.height / 2 + 10,
            w: j.options.width + 16,
            h: 50
        }), j.colliders.add.box({
            x: l(-j.options.width / 2 + 5),
            y: 0,
            w: 28,
            h: j.options.height
        }), j.parts.add.sprite({
            ...e.BlastBallAssets.dot,
            layerId: f.default.DepthSortedCharactersAndDevices,
            x: l(5),
            y: -j.options.height / 2 + 20,
            depthChange: 10,
            onReady: m => {
                j.updatePartAlpha(m), m.view.setScale(k);
            }
        }), j.parts.add.sprite({
            ...e.BlastBallAssets.dot,
            layerId: f.default.DepthSortedCharactersAndDevices,
            x: l(5),
            y: j.options.height / 2 + 20,
            depthChange: 10,
            onReady: m => {
                j.updatePartAlpha(m), m.view.setScale(k);
            }
        });
    };
}), b.register('.....', function(c, d) {
    a(c.exports, 'default', function() {
        return _g;
    });
    var e = b('.....'),
        f = b('.....');
    var _g = h => {
        const i = (0, f.default)((0, e.default)());
        h.colliders.forEach(j => {
            var k, l, m;
            const n = j.bodyId;
            null === (k = null == i ? void 0 : i.physics.getBody()) || void 0 === k || null === (l = k.character) || void 0 === l || null === (m = l.ignoredStaticBodies) || void 0 === m || m.add(n);
        });
    };
});