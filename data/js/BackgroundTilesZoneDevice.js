function a(a, b, y, z) {
    Object.defineProperty(a, b, {
        get: y,
        set: z,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('hBPFY', function(y, z) {
    var c;
    c = y.exports, Object.defineProperty(c, '__esModule', {
        value: !0,
        configurable: !0
    }), a(y.exports, 'ZONE_UNSET_POSITION', function() {
        return u;
    }), a(y.exports, 'default', function() {
        return w;
    });
    var d = b('UM8oI'),
        e = b('Bpt+p'),
        f = b('5Ux1a'),
        g = b('wSwKo5'),
        h = b('/Lvpl17'),
        i = b('sgILU'),
        j = b('dAmf5'),
        k = b('7Sbqr'),
        l = b('Gqspz'),
        m = b('phu0d'),
        n = b('JJQ0+'),
        o = b('BdfHX'),
        p = b('fe2aZ'),
        q = b('/GYEj'),
        r = b('n66pL'),
        s = b('ELuF1'),
        t = b('RAqm+');
    const u = -999999999;
    class v extends i.default {
        constructor(a) {
            if (super(a), (0, d.default)(this, 'addLayer', () => {
                    const w = k.default.worldOptions.terrainOptions.find(w => w.id === this.options.terrainId);
                    if (!w)
                        return;
                    const {
                        minX: x,
                        minY: y,
                        maxX: z,
                        maxY: A
                    } = (0, q.BackgroundTilesZoneUtil_GetTileCoordinatesBounds)(this), B = (0, s.BackgroundTilesZoneUtil_GetLayerDepth)(this), C = (0, j.default)().tileManager.layerManager.backgroundLayersManager.createLayer({
                        layerId: this.id,
                        depth: B
                    }), D = {
                        priority: this.layers.getGlobalDepth(),
                        x: x,
                        y: y,
                        width: z - x,
                        height: A - y,
                        terrainOption: w
                    };
                    C.addFillZone(D), C.setScrollData({
                        scrollFactor: this.options.scrollFactor,
                        speedX: this.options.overrideScrollingSpeed ? this.options.scrollingSpeedX : void 0,
                        speedY: this.options.overrideScrollingSpeed ? this.options.scrollingSpeedY : void 0
                    }), C.addTintModifier({
                        tint: (0, p.GetNumberFromHexColor)(this.options.tint)
                    });
                }), (0, d.default)(this, 'removeLayer', () => {
                    (0, j.default)().tileManager.layerManager.backgroundLayersManager.removeLayer({
                        layerId: this.id
                    });
                }), (0, d.default)(this, 'onShow', () => {
                    this.addLayer();
                }), (0, d.default)(this, 'onHide', () => {
                    this.removeLayer();
                }), (0, d.default)(this, 'addConnectionLine', () => {
                    if (this.options.useFullMapSize)
                        return;
                    const w = (0, r.BackgroundTilesZoneUtil_FindClosestPointOnRect)(this),
                        x = Phaser.Math.Distance.Between(this.x, this.y, w.x, w.y),
                        y = Phaser.Math.Angle.Between(this.x, this.y, w.x, w.y);
                    this.parts.add.rect({
                        x: (w.x - this.x) / 2,
                        y: (w.y - this.y) / 2,
                        width: x,
                        height: t.BackgroundTilesZoneConsts.border.width,
                        angle: (0, o.ConvertRadToDeg)(y),
                        color: t.BackgroundTilesZoneConsts.border.color,
                        alpha: t.BackgroundTilesZoneConsts.border.alpha
                    });
                }), (0, d.default)(this, 'addBoundsBox', () => {
                    const {
                        minX: w,
                        minY: x,
                        maxX: y,
                        maxY: z
                    } = (0, q.BackgroundTilesZoneUtil_GetWorldCoordinatesBounds)(this), A = w + (y - w) / 2 - this.x, B = x + (z - x) / 2 - this.y;
                    this.parts.add.rect({
                        x: A,
                        y: B,
                        ignoreInput: !0,
                        width: y - w,
                        height: z - x,
                        color: 16777215,
                        alpha: 0,
                        borderAlpha: t.BackgroundTilesZoneConsts.border.alpha,
                        borderColor: t.BackgroundTilesZoneConsts.border.color,
                        borderWidth: t.BackgroundTilesZoneConsts.border.width
                    });
                }), (0, d.default)(this, 'setupVisualEditing', () => {
                    if ((0, f.InGamePhase)() || (0, e.isPublishedVersion)())
                        return;
                    if (this.options.useFullMapSize)
                        return;
                    const w = (0, h.FetchOptionSchemaProperty)(this, 'width'),
                        x = (0, h.FetchOptionSchemaProperty)(this, 'height');
                    this.visualEditing.add.box({
                        keepRatio: !1,
                        rotable: !1,
                        width: this.options.width,
                        height: this.options.height,
                        minWidth: w.min,
                        maxWidth: w.max,
                        minHeight: x.min,
                        maxHeight: x.max,
                        x: this.options.zoneX - this.x,
                        y: this.options.zoneY - this.y,
                        onChange: w => {
                            (0, g.ReplaceVisualEditingPreview)(this.x, this.y, {
                                width: w.width,
                                height: w.height,
                                zoneX: w.x,
                                zoneY: w.y
                            });
                        }
                    });
                }), (0, d.default)(this, 'destroy', a => {
                    super.destroy(a), this.removeLayer();
                }), this.addLayer(), (0, f.InGamePhase)() || (0, e.isPublishedVersion)())
                return;
            const w = l.default.Setting;
            new(0, m.default)({
                device: this,
                baseColor: w.baseColor,
                boxColor: w.boxColor,
                content: {
                    icon: {
                        image: (0, n.default)('devices/background_tile_zone/icon.png'),
                        scale: 1
                    },
                    text: {
                        text: this.options.order + '',
                        shiftY: -9,
                        size: 24
                    }
                }
            }), this.options.zoneX === u && (this.options.zoneX = this.x), this.options.zoneY === u && (this.options.zoneY = this.y), this.addConnectionLine(), this.addBoundsBox(), this.setupVisualEditing();
        }
    }
    var w = x;
}), b.register('wSwKo5', function(d, h) {
    a(d.exports, 'ReplaceVisualEditingPreview', function() {
        return g;
    });
    var c = b('2pEsK'),
        d = b('Am0b71'),
        e = b('KDS1x'),
        f = b('83+vO');
    const g = (a, b, d) => {
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
                ...d
            },
            placedByClient: !0,
            state: h.deviceOption.defaultState
        });
    };
}), b.register('Am0b71', function(d, c) {
    a(d.exports, 'default', function() {
        return e;
    });
    var c = b('dAmf5'),
        d = b('jgFbX');
    var e = a => {
        (0, c.default)().worldManager.devices.getDeviceById(a.id) && (0, d.default)(a);
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
}), b.register('/GYEj', function(f, g) {
    a(f.exports, 'BackgroundTilesZoneUtil_GetTileCoordinatesBounds', function() {
        return e;
    }), a(f.exports, 'BackgroundTilesZoneUtil_GetWorldCoordinatesBounds', function() {
        return f;
    });
    var c = b('WH3ua'),
        d = b('7Sbqr');
    const e = a => ({
            minX: a.options.useFullMapSize ? 0 : g(a.options.zoneX - a.options.width / 2) + 1,
            minY: a.options.useFullMapSize ? 0 : g(a.options.zoneY - a.options.height / 2) + 1,
            maxX: a.options.useFullMapSize ? d.default.world.width : g(a.options.zoneX + a.options.width / 2),
            maxY: a.options.useFullMapSize ? d.default.world.height : g(a.options.zoneY + a.options.height / 2)
        }),
        f = a => {
            const g = e(a);
            return {
                minX: g.minX * c.default.width,
                minY: g.minY * c.default.height,
                maxX: g.maxX * c.default.width,
                maxY: g.maxY * c.default.height
            };
        },
        g = a => Math.floor(a / c.default.width);
}), b.register('n66pL', function(f, g) {
    a(f.exports, 'BackgroundTilesZoneUtil_FindClosestPointOnRect', function() {
        return d;
    });
    var c = b('/GYEj');
    const d = a => {
        const e = {
                x: a.x,
                y: a.y
            },
            {
                minX: f,
                minY: g,
                maxX: h,
                maxY: i
            } = (0, c.BackgroundTilesZoneUtil_GetWorldCoordinatesBounds)(a),
            j = {
                x: f,
                y: g,
                width: h - f,
                height: i - g
            },
            k = Math.max(j.x, Math.min(e.x, j.x + j.width)),
            l = Math.max(j.y, Math.min(e.y, j.y + j.height));
        if (e.x >= j.x && e.x <= j.x + j.width && e.y >= j.y && e.y <= j.y + j.height) {
            const m = e.x - j.x,
                n = j.x + j.width - e.x,
                o = e.y - j.y,
                p = j.y + j.height - e.y,
                q = Math.min(m, n, o, p);
            return q === m ? {
                x: j.x,
                y: e.y
            } : q === n ? {
                x: j.x + j.width,
                y: e.y
            } : q === o ? {
                x: e.x,
                y: j.y
            } : {
                x: e.x,
                y: j.y + j.height
            };
        }
        return {
            x: k,
            y: l
        };
    };
}), b.register('ELuF1', function(i, c) {
    a(i.exports, 'BackgroundTilesZoneUtil_GetLayerDepth', function() {
        return e;
    });
    var c = b('CfW3Y'),
        d = b('Q0Vn8');
    const e = a => c.default.Fill3 + 0.1 + 0.1 * (1000 - a.options.order + (0, d.default)(a.y) / 1000);
}), b.register('RAqm+', function(b, i) {
    a(b.exports, 'BackgroundTilesZoneConsts', function() {
        return c;
    });
    const c = {
        border: {
            alpha: 0.5,
            width: 5,
            color: 16711935
        }
    };
});