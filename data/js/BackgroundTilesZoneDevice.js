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
    }), a(c.exports, 'ZONE_UNSET_POSITION', function() {
        return _w;
    }), a(c.exports, 'default', function() {
        return _y;
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
        s = b('.....'),
        t = b('.....'),
        u = b('.....'),
        v = b('.....');
    const _w = -999999999;
    class x extends k.default {
        constructor(y) {
            if (super(y), (0, f.default)(this, 'addLayer', () => {
                    const z = m.default.worldOptions.terrainOptions.find(A => A.id === this.options.terrainId);
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
                        onChange: B => {
                            (0, i.ReplaceVisualEditingPreview)(this.x, this.y, {
                                width: B.width,
                                height: B.height,
                                zoneX: B.x,
                                zoneY: B.y
                            });
                        }
                    });
                }), (0, f.default)(this, 'destroy', z => {
                    super.destroy(z), this.removeLayer();
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
    a(c.exports, 'BackgroundTilesZoneUtil_GetTileCoordinatesBounds', function() {
        return _g;
    }), a(c.exports, 'BackgroundTilesZoneUtil_GetWorldCoordinatesBounds', function() {
        return _h;
    });
    var e = b('.....'),
        f = b('.....');
    const _g = h => ({
            minX: h.options.useFullMapSize ? 0 : _i(h.options.zoneX - h.options.width / 2) + 1,
            minY: h.options.useFullMapSize ? 0 : _i(h.options.zoneY - h.options.height / 2) + 1,
            maxX: h.options.useFullMapSize ? f.default.world.width : _i(h.options.zoneX + h.options.width / 2),
            maxY: h.options.useFullMapSize ? f.default.world.height : _i(h.options.zoneY + h.options.height / 2)
        }),
        _h = i => {
            const j = _g(i);
            return {
                minX: j.minX * e.default.width,
                minY: j.minY * e.default.height,
                maxX: j.maxX * e.default.width,
                maxY: j.maxY * e.default.height
            };
        },
        _i = j => Math.floor(j / e.default.width);
}), b.register('.....', function(c, d) {
    a(c.exports, 'BackgroundTilesZoneUtil_FindClosestPointOnRect', function() {
        return _f;
    });
    var e = b('.....');
    const _f = g => {
        const h = {
                x: g.x,
                y: g.y
            },
            {
                minX: i,
                minY: j,
                maxX: k,
                maxY: l
            } = (0, e.BackgroundTilesZoneUtil_GetWorldCoordinatesBounds)(g),
            m = {
                x: i,
                y: j,
                width: k - i,
                height: l - j
            },
            n = Math.max(m.x, Math.min(h.x, m.x + m.width)),
            o = Math.max(m.y, Math.min(h.y, m.y + m.height));
        if (h.x >= m.x && h.x <= m.x + m.width && h.y >= m.y && h.y <= m.y + m.height) {
            const p = h.x - m.x,
                q = m.x + m.width - h.x,
                r = h.y - m.y,
                s = m.y + m.height - h.y,
                t = Math.min(p, q, r, s);
            return t === p ? {
                x: m.x,
                y: h.y
            } : t === q ? {
                x: m.x + m.width,
                y: h.y
            } : t === r ? {
                x: h.x,
                y: m.y
            } : {
                x: h.x,
                y: m.y + m.height
            };
        }
        return {
            x: n,
            y: o
        };
    };
}), b.register('.....', function(c, d) {
    a(c.exports, 'BackgroundTilesZoneUtil_GetLayerDepth', function() {
        return _g;
    });
    var e = b('.....'),
        f = b('.....');
    const _g = h => e.default.Fill3 + 0.1 + 0.1 * (1000 - h.options.order + (0, f.default)(h.y) / 1000);
}), b.register('.....', function(c, d) {
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