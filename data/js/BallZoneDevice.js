function a(a, b, d, c) {
    Object.defineProperty(a, b, {
        get: d,
        set: c,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('XwRr5', function(d, c) {
    var c;
    c = d.exports, Object.defineProperty(c, '__esModule', {
        value: !0,
        configurable: !0
    }), a(d.exports, 'BallZoneDevice', function() {
        return r;
    }), a(d.exports, 'default', function() {
        return s;
    });
    var d = b('UM8oI'),
        e = b('fe2aZ'),
        f = b('Bpt+p'),
        g = b('5Ux1a'),
        h = b('SCq5x4'),
        i = b('sgILU'),
        j = b('I1FpA'),
        k = b('uFhQe'),
        l = b('Q0Vn8'),
        m = b('/Lvpl17'),
        n = b('wSwKo5'),
        o = b('QxBMI'),
        p = b('1Xmw+1'),
        q = b('cMsWT');
    class r extends i.default {
        getAlpha() {
            return (0, g.InGamePhase)() ? this.state.active ? this.options.backgroundAlpha : 0 : (0, f.isPublishedVersion)() || (0, f.isSavedVersion)() && h.default.shouldShowInnerZone(this) ? this.options.backgroundAlpha : 0;
        }
        constructor(a) {
            if (super(a), (0, d.default)(this, 'updatePartAlpha', a => {
                    const s = this.getAlpha();
                    (0, g.InGamePhase)() && a.updateAlpha(s > 0 ? 1 : 0);
                }), (0, d.default)(this, 'updateAlpha', () => {
                    const s = this.getAlpha();
                    (0, g.InGamePhase)() && this.parts.forEach(b => {
                        b.updateAlpha(s > 0 ? 1 : 0);
                    }), this.rect && this.rect.updateAlpha(s);
                }), (0, d.default)(this, 'onStateChange', a => {
                    'active' === a && (this.updateAlpha(), this.state.active && (0, p.default)(this));
                }), (0, d.default)(this, 'checkIfCollidersEnabled', () => this.state.active), (0, d.default)(this, 'setupVisualEditing', () => {
                    if (!(0, g.InPreGamePhase)() || !(0, f.isSavedVersion)())
                        return;
                    const s = (0, m.FetchOptionSchemaProperty)(this, 'width'),
                        t = (0, m.FetchOptionSchemaProperty)(this, 'height');
                    this.visualEditing.add.box({
                        width: this.options.width,
                        height: this.options.height,
                        angle: 0,
                        rotable: !1,
                        minWidth: s.min,
                        maxWidth: s.max,
                        minHeight: t.min,
                        maxHeight: t.max,
                        keepRatio: !1,
                        onChange: s => {
                            (0, n.ReplaceVisualEditingPreview)(s.x, s.y, {
                                width: s.width,
                                height: s.height
                            });
                        }
                    });
                }), (0, g.InPreGamePhase)() && (0, f.isSavedVersion)()) {
                this.parts.add.sprite({
                    ...k.IconAsset,
                    depthChange: (0, l.default)(2)
                }).view.setScale(0.17);
            }
            if ((0, g.InGamePhase)() || (0, f.isPublishedVersion)() ? this.options.visibleInGame : h.default.shouldShow(this)) {
                this.setupVisualEditing();
                const s = (0, e.GetNumberFromHexColor)(this.options.color);
                this.rect = this.parts.add.rect({
                    color: s,
                    layerId: q.default.DevicesUnderCharacters,
                    alpha: this.getAlpha(),
                    width: Math.abs(this.options.width),
                    height: Math.abs(this.options.height),
                    borderColor: s,
                    borderAlpha: (0, g.InGamePhase)() || (0, f.isPublishedVersion)() ? 0 : this.options.backgroundAlpha,
                    borderWidth: 4,
                    depthChange: (0, l.default)(1),
                    ignoreInput: !0
                }), this.options.style === j.Style.blastball && (0, o.CreateBlastBallStyle)(this);
            }
        }
    }
    var s = t;
}), b.register('SCq5x4', function(d, c) {
    a(d.exports, 'ZonedDeviceDisplayOptions', function() {
        return d;
    }), a(d.exports, 'default', function() {
        return g;
    });
    var c = b('aGdJe4');
    let d;
    var e;
    (e = d || (d = {})).visible = 'visible', e.bordersOnly = 'bordersOnly', e.fullyHidden = 'fullyHidden';
    const f = () => {
        const g = localStorage.getItem(c.default.zonedDeviceViews);
        return g || d.bordersOnly;
    };
    var g = {
        shouldShow: a => f() !== d.fullyHidden,
        shouldShowInnerZone: a => f() !== d.bordersOnly
    };
}), b.register('aGdJe4', function(b, d) {
    a(b.exports, 'default', function() {
        return c;
    });
    var c = {
        zonedDeviceViews: 'zoned-device-views'
    };
}), b.register('I1FpA', function(b, d) {
    let c;
    var d;
    let e;
    var f;
    a(b.exports, 'Style', function() {
        return c;
    }), a(b.exports, 'Side', function() {
        return e;
    }), (d = c || (c = {})).none = 'None', d.blastball = 'Blastball', (f = e || (e = {})).left = 'Left', f.right = 'Right';
}), b.register('uFhQe', function(d, c) {
    a(d.exports, 'IconAsset', function() {
        return d;
    }), a(d.exports, 'BlastBallAssets', function() {
        return e;
    });
    var c = b('JJQ0+');
    const d = {
            imageId: (0, c.default)('devices/ball_zone/icon.png'),
            imageUrl: (0, c.default)('devices/ball_zone/icon.png')
        },
        e = {
            side_bottom: {
                imageId: (0, c.default)('devices/ball_zone/blastball_side_bottom.png'),
                imageUrl: (0, c.default)('devices/ball_zone/blastball_side_bottom.png')
            },
            side_top: {
                imageId: (0, c.default)('devices/ball_zone/blastball_side_top.png'),
                imageUrl: (0, c.default)('devices/ball_zone/blastball_side_top.png')
            },
            crossbar: {
                imageId: (0, c.default)('devices/ball_zone/blastball_crossbar.png'),
                imageUrl: (0, c.default)('devices/ball_zone/blastball_crossbar.png')
            },
            dot: {
                imageId: (0, c.default)('devices/ball_zone/blastball_dot.png'),
                imageUrl: (0, c.default)('devices/ball_zone/blastball_dot.png')
            }
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
}), b.register('Am0b71', function(i, h) {
    a(i.exports, 'default', function() {
        return e;
    });
    var c = b('dAmf5'),
        d = b('jgFbX');
    var e = a => {
        (0, c.default)().worldManager.devices.getDeviceById(a.id) && (0, d.default)(a);
    };
}), b.register('QxBMI', function(i, h) {
    a(i.exports, 'CreateBlastBallStyle', function() {
        return g;
    });
    var c = b('uFhQe'),
        d = b('cMsWT'),
        e = b('I1FpA'),
        f = b('Q0Vn8');
    const g = a => {
        const h = 0.15,
            i = h => a.options.side === e.Side.left ? h : -h;
        a.parts.add.ninePatch({
            ...c.BlastBallAssets.crossbar,
            layerId: d.default.DevicesUnderCharacters,
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
            scale: h,
            depthChange: (0, f.default)(2),
            x: i(-a.options.width / 2 + 5),
            onReady: h => {
                a.updatePartAlpha(h);
            }
        }), a.parts.add.ninePatch({
            ...c.BlastBallAssets.side_top,
            layerId: d.default.DepthSortedCharactersAndDevices,
            columns: [
                850,
                850
            ],
            rows: [
                0,
                0
            ],
            height: 606 * h,
            width: i(a.options.width + 30),
            scale: h,
            x: i(-5),
            y: -a.options.height / 2,
            onReady: h => {
                a.updatePartAlpha(h);
            }
        }), a.parts.add.ninePatch({
            ...c.BlastBallAssets.side_bottom,
            layerId: d.default.DepthSortedCharactersAndDevices,
            columns: [
                850,
                850
            ],
            rows: [
                0,
                0
            ],
            height: 606 * h,
            width: i(a.options.width + 30),
            scale: h,
            x: i(-5),
            y: a.options.height / 2,
            onReady: h => {
                a.updatePartAlpha(h);
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
            x: i(-a.options.width / 2 + 5),
            y: 0,
            w: 28,
            h: a.options.height
        }), a.parts.add.sprite({
            ...c.BlastBallAssets.dot,
            layerId: d.default.DepthSortedCharactersAndDevices,
            x: i(5),
            y: -a.options.height / 2 + 20,
            depthChange: 10,
            onReady: i => {
                a.updatePartAlpha(i), i.view.setScale(h);
            }
        }), a.parts.add.sprite({
            ...c.BlastBallAssets.dot,
            layerId: d.default.DepthSortedCharactersAndDevices,
            x: i(5),
            y: a.options.height / 2 + 20,
            depthChange: 10,
            onReady: i => {
                a.updatePartAlpha(i), i.view.setScale(h);
            }
        });
    };
}), b.register('1Xmw+1', function(g, h) {
    a(g.exports, 'default', function() {
        return e;
    });
    var c = b('PUlKf'),
        d = b('EdRoV');
    var e = a => {
        const f = (0, d.default)((0, c.default)());
        a.colliders.forEach(a => {
            var g, h, i;
            const j = a.bodyId;
            null === (g = null == f ? void 0 : f.physics.getBody()) || void 0 === g || null === (h = g.character) || void 0 === h || null === (i = h.ignoredStaticBodies) || void 0 === i || i.add(j);
        });
    };
});