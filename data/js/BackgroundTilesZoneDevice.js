function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('zmuk6', function(c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'ZONE_UNSET_POSITION', function() {
        return _w;
    }), a(c.exports, 'default', function() {
        return _y;
    });
    var f = b('s/YA9'),
        g = b('hycyg'),
        h = b('UkCpC'),
        i = b('u/WlI21'),
        j = b('uc4mA17'),
        k = b('ltxDW'),
        l = b('heTaO'),
        m = b('fI6of'),
        n = b('AHhkR'),
        o = b('73Aki'),
        p = b('UaUBz0'),
        q = b('f2Uff'),
        r = b('cNVx1'),
        s = b('KK7/0'),
        t = b('ZMfQS'),
        u = b('Px2rd'),
        v = b('z0TRL');
    const _w = -999999999;
    class x extends k.default {
        constructor(y) {
            if (super(y), (0, f.default)(this, 'addLayer', () => {
                    const z = m.default.worldOptions.terrainOptions.find(z => z.id === this.options.terrainId);
                    if (!z)
                        return;
                    const {
                        minX: A,
                        minY: B,
                        maxX: C,
                        maxY: D
                    } = (0, s.BackgroundTilesZoneUtil_GetTileCoordinatesBounds)(this), E = (0, u.BackgroundTilesZoneUtil_GetLayerDepth)(this), F = (0, l.default)().tileManager.layerManager.backgroundLayersManager.createLayer({
                        layerId: this.id,
                        depth: E
                    }), G = {
                        priority: this.layers.getGlobalDepth(),
                        x: A,
                        y: B,
                        width: C - A,
                        height: D - B,
                        terrainOption: z
                    };
                    F.addFillZone(G), F.setScrollData({
                        scrollFactor: this.options.scrollFactor,
                        speedX: this.options.overrideScrollingSpeed ? this.options.scrollingSpeedX : void 0,
                        speedY: this.options.overrideScrollingSpeed ? this.options.scrollingSpeedY : void 0
                    }), F.addTintModifier({
                        tint: (0, r.GetNumberFromHexColor)(this.options.tint)
                    });
                }), (0, f.default)(this, 'removeLayer', () => {
                    (0, l.default)().tileManager.layerManager.backgroundLayersManager.removeLayer({
                        layerId: this.id
                    });
                }), (0, f.default)(this, 'onShow', () => {
                    this.addLayer();
                }), (0, f.default)(this, 'onHide', () => {
                    this.removeLayer();
                }), (0, f.default)(this, 'addConnectionLine', () => {
                    if (this.options.useFullMapSize)
                        return;
                    const z = (0, t.BackgroundTilesZoneUtil_FindClosestPointOnRect)(this),
                        A = Phaser.Math.Distance.Between(this.x, this.y, z.x, z.y),
                        B = Phaser.Math.Angle.Between(this.x, this.y, z.x, z.y);
                    this.parts.add.rect({
                        x: (z.x - this.x) / 2,
                        y: (z.y - this.y) / 2,
                        width: A,
                        height: v.BackgroundTilesZoneConsts.border.width,
                        angle: (0, q.ConvertRadToDeg)(B),
                        color: v.BackgroundTilesZoneConsts.border.color,
                        alpha: v.BackgroundTilesZoneConsts.border.alpha
                    });
                }), (0, f.default)(this, 'addBoundsBox', () => {
                    const {
                        minX: z,
                        minY: A,
                        maxX: B,
                        maxY: C
                    } = (0, s.BackgroundTilesZoneUtil_GetWorldCoordinatesBounds)(this), D = z + (B - z) / 2 - this.x, E = A + (C - A) / 2 - this.y;
                    this.parts.add.rect({
                        x: D,
                        y: E,
                        ignoreInput: !0,
                        width: B - z,
                        height: C - A,
                        color: 16777215,
                        alpha: 0,
                        borderAlpha: v.BackgroundTilesZoneConsts.border.alpha,
                        borderColor: v.BackgroundTilesZoneConsts.border.color,
                        borderWidth: v.BackgroundTilesZoneConsts.border.width
                    });
                }), (0, f.default)(this, 'setupVisualEditing', () => {
                    if ((0, h.InGamePhase)() || (0, g.isPublishedVersion)())
                        return;
                    if (this.options.useFullMapSize)
                        return;
                    const z = (0, j.FetchOptionSchemaProperty)(this, 'width'),
                        A = (0, j.FetchOptionSchemaProperty)(this, 'height');
                    this.visualEditing.add.box({
                        keepRatio: !1,
                        rotable: !1,
                        width: this.options.width,
                        height: this.options.height,
                        minWidth: z.min,
                        maxWidth: z.max,
                        minHeight: A.min,
                        maxHeight: A.max,
                        x: this.options.zoneX - this.x,
                        y: this.options.zoneY - this.y,
                        onChange: z => {
                            (0, i.ReplaceVisualEditingPreview)(this.x, this.y, {
                                width: z.width,
                                height: z.height,
                                zoneX: z.x,
                                zoneY: z.y
                            });
                        }
                    });
                }), (0, f.default)(this, 'destroy', y => {
                    super.destroy(y), this.removeLayer();
                }), this.addLayer(), (0, h.InGamePhase)() || (0, g.isPublishedVersion)())
                return;
            const z = n.default.Setting;
            new(0, o.default)({
                device: this,
                baseColor: z.baseColor,
                boxColor: z.boxColor,
                content: {
                    icon: {
                        image: (0, p.default)('devices/background_tile_zone/icon.png'),
                        scale: 1
                    },
                    text: {
                        text: this.options.order + '',
                        shiftY: -9,
                        size: 24
                    }
                }
            }), this.options.zoneX === _w && (this.options.zoneX = this.x), this.options.zoneY === _w && (this.options.zoneY = this.y), this.addConnectionLine(), this.addBoundsBox(), this.setupVisualEditing();
        }
    }
    var _y = x;
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
}), b.register('KK7/0', function(c, d) {
    a(c.exports, 'BackgroundTilesZoneUtil_GetTileCoordinatesBounds', function() {
        return _g;
    }), a(c.exports, 'BackgroundTilesZoneUtil_GetWorldCoordinatesBounds', function() {
        return _h;
    });
    var e = b('quTte'),
        f = b('fI6of');
    const _g = a => ({
            minX: a.options.useFullMapSize ? 0 : _i(a.options.zoneX - a.options.width / 2) + 1,
            minY: a.options.useFullMapSize ? 0 : _i(a.options.zoneY - a.options.height / 2) + 1,
            maxX: a.options.useFullMapSize ? f.default.world.width : _i(a.options.zoneX + a.options.width / 2),
            maxY: a.options.useFullMapSize ? f.default.world.height : _i(a.options.zoneY + a.options.height / 2)
        }),
        _h = a => {
            const i = _g(a);
            return {
                minX: i.minX * e.default.width,
                minY: i.minY * e.default.height,
                maxX: i.maxX * e.default.width,
                maxY: i.maxY * e.default.height
            };
        },
        _i = a => Math.floor(a / e.default.width);
}), b.register('ZMfQS', function(c, d) {
    a(c.exports, 'BackgroundTilesZoneUtil_FindClosestPointOnRect', function() {
        return _f;
    });
    var e = b('KK7/0');
    const _f = a => {
        const g = {
                x: a.x,
                y: a.y
            },
            {
                minX: h,
                minY: i,
                maxX: j,
                maxY: k
            } = (0, e.BackgroundTilesZoneUtil_GetWorldCoordinatesBounds)(a),
            l = {
                x: h,
                y: i,
                width: j - h,
                height: k - i
            },
            m = Math.max(l.x, Math.min(g.x, l.x + l.width)),
            n = Math.max(l.y, Math.min(g.y, l.y + l.height));
        if (g.x >= l.x && g.x <= l.x + l.width && g.y >= l.y && g.y <= l.y + l.height) {
            const o = g.x - l.x,
                p = l.x + l.width - g.x,
                q = g.y - l.y,
                r = l.y + l.height - g.y,
                s = Math.min(o, p, q, r);
            return s === o ? {
                x: l.x,
                y: g.y
            } : s === p ? {
                x: l.x + l.width,
                y: g.y
            } : s === q ? {
                x: g.x,
                y: l.y
            } : {
                x: g.x,
                y: l.y + l.height
            };
        }
        return {
            x: m,
            y: n
        };
    };
}), b.register('Px2rd', function(c, d) {
    a(c.exports, 'BackgroundTilesZoneUtil_GetLayerDepth', function() {
        return _g;
    });
    var e = b('YQpGS'),
        f = b('H4eGM');
    const _g = a => e.default.Fill3 + 0.1 + 0.1 * (1000 - a.options.order + (0, f.default)(a.y) / 1000);
}), b.register('z0TRL', function(c, d) {
    a(c.exports, 'BackgroundTilesZoneConsts', function() {
        return _e;
    });
    const _e = {
        border: {
            alpha: 0.5,
            width: 5,
            color: 16711935
        }
    };
});