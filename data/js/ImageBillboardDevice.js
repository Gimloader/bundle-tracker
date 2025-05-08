function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('.....', function (c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'default', function () {
        return _v;
    });
    var f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....'), k = b('.....'), l = b('.....'), m = b('.....'), n = b('.....'), o = b('.....'), p = b('.....'), q = b('.....'), r = b('.....'), s = b('.....'), t = b('.....');
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
                onReady: w => {
                    if (v !== this.lastImageUrl)
                        return void this.parts.destroySpecificPart(w.id);
                    this.image && this.parts.destroySpecificPart(this.image.id), this.image = w;
                    const x = (0, j.default)(v), y = (0, p.default)({
                            width: x.width,
                            height: x.height,
                            newWidth: 0.75 * Math.abs(this.options.width),
                            newHeight: 0.75 * Math.abs(this.options.height)
                        });
                    w.view.displayWidth = y.width, w.view.displayHeight = y.height, this.boundingBox.clearHardcoded(), w.view.angle = this.options.rotation, (0, o.InGamePhase)() ? w.view.alpha = this.state.visible ? this.options.alpha : 0 : w.view.alpha = this.options.alpha;
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
            }), (0, f.default)(this, 'onStateChange', w => {
                'frameColor' === w && (this.createFrame(), this.createImage()), 'imageUrl' === w && this.createImage(), 'visible' === w && (0, o.InGamePhase)() && (this.state.visible ? (this.image && (this.image.view.alpha = 1), this.frame && (this.frame.view.alpha = 1)) : (this.image && (this.image.view.alpha = 0), this.frame && (this.frame.view.alpha = 0)));
            }), (0, f.default)(this, 'setupVisualEditing', () => {
                if (!(0, o.InPreGamePhase)() || !(0, q.isSavedVersion)())
                    return;
                const w = (0, r.FetchOptionSchemaProperty)(this, 'width'), x = (0, r.FetchOptionSchemaProperty)(this, 'height');
                this.visualEditing.add.box({
                    width: this.options.width,
                    height: this.options.height,
                    angle: this.options.rotation,
                    minWidth: w.min,
                    maxWidth: w.max,
                    minHeight: x.min,
                    maxHeight: x.max,
                    keepRatio: !1,
                    onChange: y => {
                        (0, s.ReplaceVisualEditingPreview)(y.x, y.y, {
                            width: y.width,
                            height: y.height,
                            rotation: y.angle
                        });
                    }
                });
            }), this.layers.setDefaultLayer(i.default.DevicesAboveCharacters), this.setupVisualEditing();
            let w = !0;
            this.options.visibleDuringPhase === h.VisiblePhases.game && !(0, o.InGamePhase)() && (0, q.isPublishedVersion)() ? w = !1 : this.options.visibleDuringPhase !== h.VisiblePhases.preGame || (0, o.InPreGamePhase)() || (w = !1), this.matchesPhase = w, this.createVisuals();
        }
    }
    var _v = u;
}), b.register('.....', function (c, d) {
    let e;
    var f;
    a(c.exports, 'VisiblePhases', function () {
        return e;
    }), (f = e || (e = {})).all = 'all', f.game = 'game', f.preGame = 'preGame';
}), b.register('.....', function (c, d) {
    a(c.exports, 'GetBoundingBoxForRotatedBox', function () {
        return _e;
    });
    const _e = f => {
        var g, h;
        f.originX = null !== (g = f.originX) && void 0 !== g ? g : 0.5, f.originY = null !== (h = f.originY) && void 0 !== h ? h : 0.5;
        const {
                width: i,
                height: j,
                rotation: k,
                originX: l,
                originY: m
            } = f, n = [], o = [];
        [
            {
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
        ].forEach(p => {
            const q = Phaser.Math.Angle.Between(0, 0, (p.originX - l) * i, (p.originY - m) * j), r = Phaser.Math.Distance.Between(0, 0, (p.originX - l) * i, (p.originY - m) * j);
            n.push(r * Math.cos(q + k)), o.push(r * Math.sin(q + k));
        });
        const p = Math.max(...n) - Math.min(...n), q = Math.max(...o) - Math.min(...o);
        return {
            x: -l * p,
            y: -m * q,
            width: p,
            height: q
        };
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'FetchOptionSchemaProperty', function () {
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
}), b.register('.....', function (c, d) {
    a(c.exports, 'ReplaceVisualEditingPreview', function () {
        return _i;
    });
    var e = b('.....'), f = b('.....'), g = b('.....'), h = b('.....');
    const _i = (j, k, l) => {
        const m = (0, h.FetchVisualEditingPreview)(), n = (0, g.FetchCurrentlyEditedDevice)();
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
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _g;
    });
    var e = b('.....'), f = b('.....');
    var _g = h => {
        (0, e.default)().worldManager.devices.getDeviceById(h.id) && (0, f.default)(h);
    };
});