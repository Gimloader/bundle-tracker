function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('xTO+D', function(c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'BallZoneDevice', function() {
        return _t;
    }), a(c.exports, 'default', function() {
        return _u;
    });
    var f = b('s/YA9'),
        g = b('cNVx1'),
        h = b('hycyg'),
        i = b('UkCpC'),
        j = b('FWW2T6'),
        k = b('ltxDW'),
        l = b('LlClK'),
        m = b('qslaC'),
        n = b('H4eGM'),
        o = b('uc4mA17'),
        p = b('u/WlI21'),
        q = b('HAjVr'),
        r = b('/YaFu1'),
        s = b('GIe9o');
    class _t extends k.default {
        getAlpha() {
            return (0, i.InGamePhase)() ? this.state.active ? this.options.backgroundAlpha : 0 : (0, h.isPublishedVersion)() || (0, h.isSavedVersion)() && j.default.shouldShowInnerZone(this) ? this.options.backgroundAlpha : 0;
        }
        constructor(u) {
            if (super(u), (0, f.default)(this, 'updatePartAlpha', u => {
                    const v = this.getAlpha();
                    (0, i.InGamePhase)() && u.updateAlpha(v > 0 ? 1 : 0);
                }), (0, f.default)(this, 'updateAlpha', () => {
                    const v = this.getAlpha();
                    (0, i.InGamePhase)() && this.parts.forEach(b => {
                        b.updateAlpha(v > 0 ? 1 : 0);
                    }), this.rect && this.rect.updateAlpha(v);
                }), (0, f.default)(this, 'onStateChange', u => {
                    'active' === u && (this.updateAlpha(), this.state.active && (0, r.default)(this));
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
                        onChange: v => {
                            (0, p.ReplaceVisualEditingPreview)(v.x, v.y, {
                                width: v.width,
                                height: v.height
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
}), b.register('FWW2T6', function(c, d) {
    a(c.exports, 'ZonedDeviceDisplayOptions', function() {
        return _f;
    }), a(c.exports, 'default', function() {
        return _i;
    });
    var e = b('OR/wR6');
    let _f;
    var g;
    (g = _f || (_f = {})).visible = 'visible', g.bordersOnly = 'bordersOnly', g.fullyHidden = 'fullyHidden';
    const h = () => {
        const i = localStorage.getItem(e.default.zonedDeviceViews);
        return i || _f.bordersOnly;
    };
    var _i = {
        shouldShow: a => h() !== _f.fullyHidden,
        shouldShowInnerZone: a => h() !== _f.bordersOnly
    };
}), b.register('OR/wR6', function(c, d) {
    a(c.exports, 'default', function() {
        return _e;
    });
    var _e = {
        zonedDeviceViews: 'zoned-device-views'
    };
}), b.register('LlClK', function(c, d) {
    let e;
    var f;
    let g;
    var h;
    a(c.exports, 'Style', function() {
        return e;
    }), a(c.exports, 'Side', function() {
        return g;
    }), (f = e || (e = {})).none = 'None', f.blastball = 'Blastball', (h = g || (g = {})).left = 'Left', h.right = 'Right';
}), b.register('qslaC', function(c, d) {
    a(c.exports, 'IconAsset', function() {
        return _f;
    }), a(c.exports, 'BlastBallAssets', function() {
        return _g;
    });
    var e = b('UaUBz0');
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
}), b.register('HAjVr', function(c, d) {
    a(c.exports, 'CreateBlastBallStyle', function() {
        return _i;
    });
    var e = b('qslaC'),
        f = b('GIe9o'),
        g = b('LlClK'),
        h = b('H4eGM');
    const _i = a => {
        const j = 0.15,
            k = j => a.options.side === g.Side.left ? j : -j;
        a.parts.add.ninePatch({
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
            height: a.options.height,
            width: 30.45,
            scale: j,
            depthChange: (0, h.default)(2),
            x: k(-a.options.width / 2 + 5),
            onReady: j => {
                a.updatePartAlpha(j);
            }
        }), a.parts.add.ninePatch({
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
            height: 606 * j,
            width: k(a.options.width + 30),
            scale: j,
            x: k(-5),
            y: -a.options.height / 2,
            onReady: j => {
                a.updatePartAlpha(j);
            }
        }), a.parts.add.ninePatch({
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
            height: 606 * j,
            width: k(a.options.width + 30),
            scale: j,
            x: k(-5),
            y: a.options.height / 2,
            onReady: j => {
                a.updatePartAlpha(j);
            }
        }), a.colliders.add.box({
            x: 0,
            y: -a.options.height / 2 + 10,
            w: a.options.width + 16,
            h: 50
        }), a.colliders.add.box({
            x: 0,
            y: a.options.height / 2 + 10,
            w: a.options.width + 16,
            h: 50
        }), a.colliders.add.box({
            x: k(-a.options.width / 2 + 5),
            y: 0,
            w: 28,
            h: a.options.height
        }), a.parts.add.sprite({
            ...e.BlastBallAssets.dot,
            layerId: f.default.DepthSortedCharactersAndDevices,
            x: k(5),
            y: -a.options.height / 2 + 20,
            depthChange: 10,
            onReady: k => {
                a.updatePartAlpha(k), k.view.setScale(j);
            }
        }), a.parts.add.sprite({
            ...e.BlastBallAssets.dot,
            layerId: f.default.DepthSortedCharactersAndDevices,
            x: k(5),
            y: a.options.height / 2 + 20,
            depthChange: 10,
            onReady: k => {
                a.updatePartAlpha(k), k.view.setScale(j);
            }
        });
    };
}), b.register('/YaFu1', function(c, d) {
    a(c.exports, 'default', function() {
        return _g;
    });
    var e = b('5Fjxs'),
        f = b('d7UqH');
    var _g = a => {
        const h = (0, f.default)((0, e.default)());
        a.colliders.forEach(a => {
            var i, j, k;
            const l = a.bodyId;
            null === (i = null == h ? void 0 : h.physics.getBody()) || void 0 === i || null === (j = i.character) || void 0 === j || null === (k = j.ignoredStaticBodies) || void 0 === k || k.add(l);
        });
    };
});