function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('jWDNJ', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _x(b.exports, 'ZONE_UNSET_POSITION', function() {
        return _v;
    }), _x(b.exports, 'default', function() {
        return _x;
    });
    var e = a('1bFPu'),
        f = a('9tz3H'),
        g = a('/pbxo'),
        h = a('IFO6W13'),
        i = a('R2Ucl10'),
        j = a('I35Ay'),
        k = a('D5xLI'),
        l = a('iWivW'),
        m = a('dTXti'),
        n = a('+uQv7'),
        o = a('2Xvuf'),
        p = a('CZmOd'),
        q = a('h2EGG'),
        r = a('shybD'),
        s = a('/w59D'),
        t = a('vAe1/'),
        u = a('pPaP1');
    const _v = -999999999;
    class w extends j.default {
        constructor(_x) {
            if (super(_x), (0, e.default)(this, 'addLayer', () => {
                    const y = l.default.worldOptions.terrainOptions.find(y => y.id === this.options.terrainId);
                    if (!y)
                        return;
                    const {
                        minX: z,
                        minY: A,
                        maxX: B,
                        maxY: C
                    } = (0, r.BackgroundTilesZoneUtil_GetTileCoordinatesBounds)(this), D = (0, t.BackgroundTilesZoneUtil_GetLayerDepth)(this), E = (0, k.default)().tileManager.layerManager.backgroundLayersManager.createLayer({
                        layerId: this.id,
                        depth: D
                    }), F = {
                        priority: this.layers.getGlobalDepth(),
                        x: z,
                        y: A,
                        width: B - z,
                        height: C - A,
                        terrainOption: y
                    };
                    E.addFillZone(F), E.setScrollData({
                        scrollFactor: this.options.scrollFactor,
                        speedX: this.options.overrideScrollingSpeed ? this.options.scrollingSpeedX : void 0,
                        speedY: this.options.overrideScrollingSpeed ? this.options.scrollingSpeedY : void 0
                    }), E.addTintModifier({
                        tint: (0, q.GetNumberFromHexColor)(this.options.tint)
                    });
                }), (0, e.default)(this, 'removeLayer', () => {
                    (0, k.default)().tileManager.layerManager.backgroundLayersManager.removeLayer({
                        layerId: this.id
                    });
                }), (0, e.default)(this, 'onShow', () => {
                    this.addLayer();
                }), (0, e.default)(this, 'onHide', () => {
                    this.removeLayer();
                }), (0, e.default)(this, 'addConnectionLine', () => {
                    if (this.options.useFullMapSize)
                        return;
                    const y = (0, s.BackgroundTilesZoneUtil_FindClosestPointOnRect)(this),
                        z = Phaser.Math.Distance.Between(this.x, this.y, y.x, y.y),
                        A = Phaser.Math.Angle.Between(this.x, this.y, y.x, y.y);
                    this.parts.add.rect({
                        x: (y.x - this.x) / 2,
                        y: (y.y - this.y) / 2,
                        width: z,
                        height: u.BackgroundTilesZoneConsts.border.width,
                        angle: (0, p.ConvertRadToDeg)(A),
                        color: u.BackgroundTilesZoneConsts.border.color,
                        alpha: u.BackgroundTilesZoneConsts.border.alpha
                    });
                }), (0, e.default)(this, 'addBoundsBox', () => {
                    const {
                        minX: y,
                        minY: z,
                        maxX: A,
                        maxY: B
                    } = (0, r.BackgroundTilesZoneUtil_GetWorldCoordinatesBounds)(this), C = y + (A - y) / 2 - this.x, D = z + (B - z) / 2 - this.y;
                    this.parts.add.rect({
                        x: C,
                        y: D,
                        ignoreInput: !0,
                        width: A - y,
                        height: B - z,
                        color: 16777215,
                        alpha: 0,
                        borderAlpha: u.BackgroundTilesZoneConsts.border.alpha,
                        borderColor: u.BackgroundTilesZoneConsts.border.color,
                        borderWidth: u.BackgroundTilesZoneConsts.border.width
                    });
                }), (0, e.default)(this, 'setupVisualEditing', () => {
                    if ((0, g.InGamePhase)() || (0, f.isPublishedVersion)())
                        return;
                    if (this.options.useFullMapSize)
                        return;
                    const y = (0, i.FetchOptionSchemaProperty)(this, 'width'),
                        z = (0, i.FetchOptionSchemaProperty)(this, 'height');
                    this.visualEditing.add.box({
                        keepRatio: !1,
                        rotable: !1,
                        width: this.options.width,
                        height: this.options.height,
                        minWidth: y.min,
                        maxWidth: y.max,
                        minHeight: z.min,
                        maxHeight: z.max,
                        x: this.options.zoneX - this.x,
                        y: this.options.zoneY - this.y,
                        onChange: y => {
                            (0, h.ReplaceVisualEditingPreview)(this.x, this.y, {
                                width: y.width,
                                height: y.height,
                                zoneX: y.x,
                                zoneY: y.y
                            });
                        }
                    });
                }), (0, e.default)(this, 'destroy', _x => {
                    super.destroy(_x), this.removeLayer();
                }), this.addLayer(), (0, g.InGamePhase)() || (0, f.isPublishedVersion)())
                return;
            const y = m.default.Setting;
            new(0, n.default)({
                device: this,
                baseColor: y.baseColor,
                boxColor: y.boxColor,
                content: {
                    icon: {
                        image: (0, o.default)('devices/background_tile_zone/icon.png'),
                        scale: 1
                    },
                    text: {
                        text: this.options.order + '',
                        shiftY: -9,
                        size: 24
                    }
                }
            }), this.options.zoneX === _v && (this.options.zoneX = this.x), this.options.zoneY === _v && (this.options.zoneY = this.y), this.addConnectionLine(), this.addBoundsBox(), this.setupVisualEditing();
        }
    }
    var _x = w;
}), a.register('IFO6W13', function(b, c) {
    _n(b.exports, 'ReplaceVisualEditingPreview', function() {
        return _h;
    });
    var d = a('HqwPM'),
        e = a('+oovY4'),
        f = a('A17vD'),
        g = a('HXXiu');
    const _h = (_n, a, b) => {
        const i = (0, g.FetchVisualEditingPreview)(),
            j = (0, f.FetchCurrentlyEditedDevice)();
        if (!j || !i)
            return;
        const k = j.layers.isOnNaturalDepth() ? void 0 : a + j.layers.getDepthShift();
        (0, e.default)({
            deviceOption: i.deviceOption,
            id: d.VisualEditingConstants.previewId,
            x: _n,
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
    _n(b.exports, 'default', function() {
        return _f;
    });
    var d = a('D5xLI'),
        e = a('aIyMH');
    var _f = _n => {
        (0, d.default)().worldManager.devices.getDeviceById(_n.id) && (0, e.default)(_n);
    };
}), a.register('R2Ucl10', function(b, c) {
    _n(b.exports, 'FetchOptionSchemaProperty', function() {
        return _d;
    });
    const _d = (_n, b) => {
        var e, f, g;
        const h = _n.deviceOption.optionSchema.options.find(_n => _n.key === b);
        return {
            min: null === (e = null == h ? void 0 : h.option.props) || void 0 === e ? void 0 : e.min,
            max: null === (f = null == h ? void 0 : h.option.props) || void 0 === f ? void 0 : f.max,
            step: null === (g = null == h ? void 0 : h.option.props) || void 0 === g ? void 0 : g.step
        };
    };
}), a.register('shybD', function(b, c) {
    _n(b.exports, 'BackgroundTilesZoneUtil_GetTileCoordinatesBounds', function() {
        return _f;
    }), _n(b.exports, 'BackgroundTilesZoneUtil_GetWorldCoordinatesBounds', function() {
        return _g;
    });
    var d = a('nDSr0'),
        e = a('iWivW');
    const _f = _n => ({
            minX: _n.options.useFullMapSize ? 0 : _h(_n.options.zoneX - _n.options.width / 2) + 1,
            minY: _n.options.useFullMapSize ? 0 : _h(_n.options.zoneY - _n.options.height / 2) + 1,
            maxX: _n.options.useFullMapSize ? e.default.world.width : _h(_n.options.zoneX + _n.options.width / 2),
            maxY: _n.options.useFullMapSize ? e.default.world.height : _h(_n.options.zoneY + _n.options.height / 2)
        }),
        _g = _n => {
            const h = _f(_n);
            return {
                minX: h.minX * d.default.width,
                minY: h.minY * d.default.height,
                maxX: h.maxX * d.default.width,
                maxY: h.maxY * d.default.height
            };
        },
        _h = _n => Math.floor(_n / d.default.width);
}), a.register('/w59D', function(b, c) {
    _n(b.exports, 'BackgroundTilesZoneUtil_FindClosestPointOnRect', function() {
        return _e;
    });
    var d = a('shybD');
    const _e = _n => {
        const f = {
                x: _n.x,
                y: _n.y
            },
            {
                minX: g,
                minY: h,
                maxX: i,
                maxY: j
            } = (0, d.BackgroundTilesZoneUtil_GetWorldCoordinatesBounds)(_n),
            k = {
                x: g,
                y: h,
                width: i - g,
                height: j - h
            },
            l = Math.max(k.x, Math.min(f.x, k.x + k.width)),
            m = Math.max(k.y, Math.min(f.y, k.y + k.height));
        if (f.x >= k.x && f.x <= k.x + k.width && f.y >= k.y && f.y <= k.y + k.height) {
            const _n = f.x - k.x,
                o = k.x + k.width - f.x,
                p = f.y - k.y,
                q = k.y + k.height - f.y,
                r = Math.min(_n, o, p, q);
            return r === _n ? {
                x: k.x,
                y: f.y
            } : r === o ? {
                x: k.x + k.width,
                y: f.y
            } : r === p ? {
                x: f.x,
                y: k.y
            } : {
                x: f.x,
                y: k.y + k.height
            };
        }
        return {
            x: l,
            y: m
        };
    };
}), a.register('vAe1/', function(b, c) {
    e(b.exports, 'BackgroundTilesZoneUtil_GetLayerDepth', function() {
        return _f;
    });
    var d = a('E78vn'),
        e = a('5CmLs');
    const _f = e => d.default.Fill3 + 0.1 + 0.1 * (1000 - e.options.order + (0, e.default)(e.y) / 1000);
}), a.register('pPaP1', function(b, c) {
    e(b.exports, 'BackgroundTilesZoneConsts', function() {
        return _d;
    });
    const _d = {
        border: {
            alpha: 0.5,
            width: 5,
            color: 16711935
        }
    };
});