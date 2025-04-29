function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('iMWn1', function(c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'default', function() {
        return _v;
    });
    var f = b('s/YA9'),
        g = b('ltxDW'),
        h = b('f7A2d'),
        i = b('GIe9o'),
        j = b('+7143'),
        k = b('LARD6'),
        l = b('UYyWT'),
        m = b('cNVx1'),
        n = b('Fp1Dk'),
        o = b('UkCpC'),
        p = b('bwSO3'),
        q = b('hycyg'),
        r = b('uc4mA17'),
        s = b('u/WlI21'),
        t = b('4pQyd');
    class u extends g.default {
        createImage() {
            if (!this.matchesPhase)
                return;
            if ((0, q.isPublishedVersion)() && (0, o.InPreGamePhase)() && 'No' === this.options.visibleOnGameStart)
                return;
            const v = (0, t.GetImageUrl)(this.state.imageUrl || this.options.imageUrl);
            this.lastImageUrl = v, this.parts.add.sprite({
                imageId: v,
                imageUrl: v,
                onReady: b => {
                    if (v !== this.lastImageUrl)
                        return void this.parts.destroySpecificPart(b.id);
                    this.image && this.parts.destroySpecificPart(this.image.id), this.image = b;
                    const w = (0, j.default)(v),
                        x = (0, p.default)({
                            width: w.width,
                            height: w.height,
                            newWidth: 0.75 * Math.abs(this.options.width),
                            newHeight: 0.75 * Math.abs(this.options.height)
                        });
                    b.view.displayWidth = x.width, b.view.displayHeight = x.height, this.boundingBox.clearHardcoded(), b.view.angle = this.options.rotation, (0, o.InGamePhase)() ? b.view.alpha = this.state.visible ? this.options.alpha : 0 : b.view.alpha = this.options.alpha;
                }
            });
        }
        createFrame() {
            if (!this.matchesPhase)
                return;
            this.frame && this.parts.destroySpecificPart(this.frame.id);
            const v = this.state.frameColor || this.options.frameColor;
            if ('Transparent' === v)
                return;
            const w = (0, m.GetNumberFromHexColor)(v);
            this.frame = this.parts.add.rect({
                color: w,
                alpha: 1,
                borderAlpha: 1,
                width: Math.abs(this.options.width),
                height: Math.abs(this.options.height),
                borderColor: (0, m.GetNumberFromHexColor)((0, l.GetContrastColor)(v)),
                borderWidth: 8,
                cornerRadius: 10
            }), this.frame.view.angle = this.options.rotation;
        }
        constructor(v) {
            super(v), (0, f.default)(this, 'matchesPhase', !0), (0, f.default)(this, 'createVisuals', () => {
                this.matchesPhase && (this.createFrame(), this.createImage()), this.boundingBox.setHardcoded((0, k.GetBoundingBoxForRotatedBox)({
                    height: this.options.height,
                    width: this.options.width,
                    rotation: (0, n.ConvertDegToRad)(this.options.rotation)
                }));
            }), (0, f.default)(this, 'onStateChange', v => {
                'frameColor' === v && (this.createFrame(), this.createImage()), 'imageUrl' === v && this.createImage(), 'visible' === v && (0, o.InGamePhase)() && (this.state.visible ? (this.image && (this.image.view.alpha = 1), this.frame && (this.frame.view.alpha = 1)) : (this.image && (this.image.view.alpha = 0), this.frame && (this.frame.view.alpha = 0)));
            }), (0, f.default)(this, 'setupVisualEditing', () => {
                if (!(0, o.InPreGamePhase)() || !(0, q.isSavedVersion)())
                    return;
                const w = (0, r.FetchOptionSchemaProperty)(this, 'width'),
                    x = (0, r.FetchOptionSchemaProperty)(this, 'height');
                this.visualEditing.add.box({
                    width: this.options.width,
                    height: this.options.height,
                    angle: this.options.rotation,
                    minWidth: w.min,
                    maxWidth: w.max,
                    minHeight: x.min,
                    maxHeight: x.max,
                    keepRatio: !1,
                    onChange: w => {
                        (0, s.ReplaceVisualEditingPreview)(w.x, w.y, {
                            width: w.width,
                            height: w.height,
                            rotation: w.angle
                        });
                    }
                });
            }), this.layers.setDefaultLayer(i.default.DevicesAboveCharacters), this.setupVisualEditing();
            let w = !0;
            this.options.visibleDuringPhase === h.VisiblePhases.game && !(0, o.InGamePhase)() && (0, q.isPublishedVersion)() ? w = !1 : this.options.visibleDuringPhase !== h.VisiblePhases.preGame || (0, o.InPreGamePhase)() || (w = !1), this.matchesPhase = w, this.createVisuals();
        }
    }
    var _v = u;
}), b.register('f7A2d', function(c, d) {
    let e;
    var f;
    a(c.exports, 'VisiblePhases', function() {
        return e;
    }), (f = e || (e = {})).all = 'all', f.game = 'game', f.preGame = 'preGame';
}), b.register('LARD6', function(c, d) {
    a(c.exports, 'GetBoundingBoxForRotatedBox', function() {
        return _e;
    });
    const _e = a => {
        var f, g;
        a.originX = null !== (f = a.originX) && void 0 !== f ? f : 0.5, a.originY = null !== (g = a.originY) && void 0 !== g ? g : 0.5;
        const {
            width: h,
            height: i,
            rotation: j,
            originX: k,
            originY: l
        } = a, m = [], n = [];
        [{
                originX: 1,
                originY: 1
            },
            {
                originX: 0,
                originY: 1
            },
            {
                originX: 1,
                originY: 0
            },
            {
                originX: 0,
                originY: 0
            }
        ].forEach(a => {
            const o = Phaser.Math.Angle.Between(0, 0, (a.originX - k) * h, (a.originY - l) * i),
                p = Phaser.Math.Distance.Between(0, 0, (a.originX - k) * h, (a.originY - l) * i);
            m.push(p * Math.cos(o + j)), n.push(p * Math.sin(o + j));
        });
        const o = Math.max(...m) - Math.min(...m),
            p = Math.max(...n) - Math.min(...n);
        return {
            x: -k * o,
            y: -l * p,
            width: o,
            height: p
        };
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
});