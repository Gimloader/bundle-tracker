function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('Ohd7H', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _t(b.exports, 'BallZoneDevice', function() {
        return _s;
    }), _t(b.exports, 'default', function() {
        return _t;
    });
    var e = a('1bFPu'),
        f = a('h2EGG'),
        g = a('9tz3H'),
        h = a('/pbxo'),
        i = a('kg3wN6'),
        j = a('I35Ay'),
        k = a('6zVq0'),
        l = a('0v2nG'),
        m = a('5CmLs'),
        n = a('R2Ucl10'),
        o = a('IFO6W13'),
        p = a('NE1c5'),
        q = a('NyV64'),
        r = a('JqBF0');
    class _s extends j.default {
        getAlpha() {
            return (0, h.InGamePhase)() ? this.state.active ? this.options.backgroundAlpha : 0 : (0, g.isPublishedVersion)() || (0, g.isSavedVersion)() && i.default.shouldShowInnerZone(this) ? this.options.backgroundAlpha : 0;
        }
        constructor(_t) {
            if (super(_t), (0, e.default)(this, 'updatePartAlpha', _t => {
                    const u = this.getAlpha();
                    (0, h.InGamePhase)() && _t.updateAlpha(u > 0 ? 1 : 0);
                }), (0, e.default)(this, 'updateAlpha', () => {
                    const u = this.getAlpha();
                    (0, h.InGamePhase)() && this.parts.forEach(a => {
                        a.updateAlpha(u > 0 ? 1 : 0);
                    }), this.rect && this.rect.updateAlpha(u);
                }), (0, e.default)(this, 'onStateChange', _t => {
                    'active' === _t && (this.updateAlpha(), this.state.active && (0, q.default)(this));
                }), (0, e.default)(this, 'checkIfCollidersEnabled', () => this.state.active), (0, e.default)(this, 'setupVisualEditing', () => {
                    if (!(0, h.InPreGamePhase)() || !(0, g.isSavedVersion)())
                        return;
                    const u = (0, n.FetchOptionSchemaProperty)(this, 'width'),
                        v = (0, n.FetchOptionSchemaProperty)(this, 'height');
                    this.visualEditing.add.box({
                        width: this.options.width,
                        height: this.options.height,
                        angle: 0,
                        rotable: !1,
                        minWidth: u.min,
                        maxWidth: u.max,
                        minHeight: v.min,
                        maxHeight: v.max,
                        keepRatio: !1,
                        onChange: u => {
                            (0, o.ReplaceVisualEditingPreview)(u.x, u.y, {
                                width: u.width,
                                height: u.height
                            });
                        }
                    });
                }), (0, h.InPreGamePhase)() && (0, g.isSavedVersion)()) {
                this.parts.add.sprite({
                    ...l.IconAsset,
                    depthChange: (0, m.default)(2)
                }).view.setScale(0.17);
            }
            if ((0, h.InGamePhase)() || (0, g.isPublishedVersion)() ? this.options.visibleInGame : i.default.shouldShow(this)) {
                this.setupVisualEditing();
                const u = (0, f.GetNumberFromHexColor)(this.options.color);
                this.rect = this.parts.add.rect({
                    color: u,
                    layerId: r.default.DevicesUnderCharacters,
                    alpha: this.getAlpha(),
                    width: Math.abs(this.options.width),
                    height: Math.abs(this.options.height),
                    borderColor: u,
                    borderAlpha: (0, h.InGamePhase)() || (0, g.isPublishedVersion)() ? 0 : this.options.backgroundAlpha,
                    borderWidth: 4,
                    depthChange: (0, m.default)(1),
                    ignoreInput: !0
                }), this.options.style === k.Style.blastball && (0, p.CreateBlastBallStyle)(this);
            }
        }
    }
    var _t = _s;
}), a.register('kg3wN6', function(b, c) {
    _h(b.exports, 'ZonedDeviceDisplayOptions', function() {
        return _e;
    }), _h(b.exports, 'default', function() {
        return _h;
    });
    var d = a('+MyMe6');
    let _e;
    var f;
    (f = _e || (_e = {})).visible = 'visible', f.bordersOnly = 'bordersOnly', f.fullyHidden = 'fullyHidden';
    const g = () => {
        const _h = localStorage.getItem(d.default.zonedDeviceViews);
        return _h || _e.bordersOnly;
    };
    var _h = {
        shouldShow: e => g() !== _e.fullyHidden,
        shouldShowInnerZone: e => g() !== _e.bordersOnly
    };
}), a.register('+MyMe6', function(b, c) {
    e(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        zonedDeviceViews: 'zoned-device-views'
    };
}), a.register('6zVq0', function(b, c) {
    let d;
    var e;
    let f;
    var g;
    e(b.exports, 'Style', function() {
        return d;
    }), e(b.exports, 'Side', function() {
        return f;
    }), (e = d || (d = {})).none = 'None', e.blastball = 'Blastball', (g = f || (f = {})).left = 'Left', g.right = 'Right';
}), a.register('0v2nG', function(b, c) {
    e(b.exports, 'IconAsset', function() {
        return _e;
    }), e(b.exports, 'BlastBallAssets', function() {
        return _f;
    });
    var d = a('2Xvuf');
    const _e = {
            imageId: (0, d.default)('devices/ball_zone/icon.png'),
            imageUrl: (0, d.default)('devices/ball_zone/icon.png')
        },
        _f = {
            side_bottom: {
                imageId: (0, d.default)('devices/ball_zone/blastball_side_bottom.png'),
                imageUrl: (0, d.default)('devices/ball_zone/blastball_side_bottom.png')
            },
            side_top: {
                imageId: (0, d.default)('devices/ball_zone/blastball_side_top.png'),
                imageUrl: (0, d.default)('devices/ball_zone/blastball_side_top.png')
            },
            crossbar: {
                imageId: (0, d.default)('devices/ball_zone/blastball_crossbar.png'),
                imageUrl: (0, d.default)('devices/ball_zone/blastball_crossbar.png')
            },
            dot: {
                imageId: (0, d.default)('devices/ball_zone/blastball_dot.png'),
                imageUrl: (0, d.default)('devices/ball_zone/blastball_dot.png')
            }
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
}), a.register('NE1c5', function(b, c) {
    e(b.exports, 'CreateBlastBallStyle', function() {
        return _h;
    });
    var d = a('0v2nG'),
        e = a('JqBF0'),
        f = a('6zVq0'),
        g = a('5CmLs');
    const _h = e => {
        const i = 0.15,
            j = i => e.options.side === f.Side.left ? i : -i;
        e.parts.add.ninePatch({
            ...d.BlastBallAssets.crossbar,
            layerId: e.default.DevicesUnderCharacters,
            columns: [
                0,
                0
            ],
            rows: [
                200,
                200
            ],
            height: e.options.height,
            width: 30.45,
            scale: i,
            depthChange: (0, g.default)(2),
            x: j(-e.options.width / 2 + 5),
            onReady: i => {
                e.updatePartAlpha(i);
            }
        }), e.parts.add.ninePatch({
            ...d.BlastBallAssets.side_top,
            layerId: e.default.DepthSortedCharactersAndDevices,
            columns: [
                850,
                850
            ],
            rows: [
                0,
                0
            ],
            height: 606 * i,
            width: j(e.options.width + 30),
            scale: i,
            x: j(-5),
            y: -e.options.height / 2,
            onReady: i => {
                e.updatePartAlpha(i);
            }
        }), e.parts.add.ninePatch({
            ...d.BlastBallAssets.side_bottom,
            layerId: e.default.DepthSortedCharactersAndDevices,
            columns: [
                850,
                850
            ],
            rows: [
                0,
                0
            ],
            height: 606 * i,
            width: j(e.options.width + 30),
            scale: i,
            x: j(-5),
            y: e.options.height / 2,
            onReady: i => {
                e.updatePartAlpha(i);
            }
        }), e.colliders.add.box({
            x: 0,
            y: -e.options.height / 2 + 10,
            w: e.options.width + 16,
            h: 50
        }), e.colliders.add.box({
            x: 0,
            y: e.options.height / 2 + 10,
            w: e.options.width + 16,
            h: 50
        }), e.colliders.add.box({
            x: j(-e.options.width / 2 + 5),
            y: 0,
            w: 28,
            h: e.options.height
        }), e.parts.add.sprite({
            ...d.BlastBallAssets.dot,
            layerId: e.default.DepthSortedCharactersAndDevices,
            x: j(5),
            y: -e.options.height / 2 + 20,
            depthChange: 10,
            onReady: j => {
                e.updatePartAlpha(j), j.view.setScale(i);
            }
        }), e.parts.add.sprite({
            ...d.BlastBallAssets.dot,
            layerId: e.default.DepthSortedCharactersAndDevices,
            x: j(5),
            y: e.options.height / 2 + 20,
            depthChange: 10,
            onReady: j => {
                e.updatePartAlpha(j), j.view.setScale(i);
            }
        });
    };
}), a.register('NyV64', function(b, c) {
    e(b.exports, 'default', function() {
        return _f;
    });
    var d = a('Jfada'),
        e = a('B7ZvS');
    var _f = e => {
        const g = (0, e.default)((0, d.default)());
        e.colliders.forEach(e => {
            var h, i, j;
            const k = e.bodyId;
            null === (h = null == g ? void 0 : g.physics.getBody()) || void 0 === h || null === (i = h.character) || void 0 === i || null === (j = i.ignoredStaticBodies) || void 0 === j || j.add(k);
        });
    };
});