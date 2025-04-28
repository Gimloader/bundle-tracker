function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('wpD5k', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _u(b.exports, 'default', function() {
        return _u;
    });
    var e = a('1bFPu'),
        f = a('I35Ay'),
        g = a('zoM4j'),
        h = a('JqBF0'),
        i = a('1Chka'),
        j = a('t66nK'),
        k = a('HbVXj'),
        l = a('h2EGG'),
        m = a('MfvC6'),
        n = a('/pbxo'),
        o = a('AVLqL'),
        p = a('9tz3H'),
        q = a('R2Ucl10'),
        r = a('IFO6W13'),
        s = a('kPDt8');
    class t extends f.default {
        createImage() {
            if (!this.matchesPhase)
                return;
            if ((0, p.isPublishedVersion)() && (0, n.InPreGamePhase)() && 'No' === this.options.visibleOnGameStart)
                return;
            const _u = (0, s.GetImageUrl)(this.state.imageUrl || this.options.imageUrl);
            this.lastImageUrl = _u, this.parts.add.sprite({
                imageId: _u,
                imageUrl: _u,
                onReady: a => {
                    if (_u !== this.lastImageUrl)
                        return void this.parts.destroySpecificPart(a.id);
                    this.image && this.parts.destroySpecificPart(this.image.id), this.image = a;
                    const v = (0, i.default)(_u),
                        w = (0, o.default)({
                            width: v.width,
                            height: v.height,
                            newWidth: 0.75 * Math.abs(this.options.width),
                            newHeight: 0.75 * Math.abs(this.options.height)
                        });
                    a.view.displayWidth = w.width, a.view.displayHeight = w.height, this.boundingBox.clearHardcoded(), a.view.angle = this.options.rotation, (0, n.InGamePhase)() ? a.view.alpha = this.state.visible ? this.options.alpha : 0 : a.view.alpha = this.options.alpha;
                }
            });
        }
        createFrame() {
            if (!this.matchesPhase)
                return;
            this.frame && this.parts.destroySpecificPart(this.frame.id);
            const u = this.state.frameColor || this.options.frameColor;
            if ('Transparent' === u)
                return;
            const v = (0, l.GetNumberFromHexColor)(u);
            this.frame = this.parts.add.rect({
                color: v,
                alpha: 1,
                borderAlpha: 1,
                width: Math.abs(this.options.width),
                height: Math.abs(this.options.height),
                borderColor: (0, l.GetNumberFromHexColor)((0, k.GetContrastColor)(u)),
                borderWidth: 8,
                cornerRadius: 10
            }), this.frame.view.angle = this.options.rotation;
        }
        constructor(u) {
            super(u), (0, e.default)(this, 'matchesPhase', !0), (0, e.default)(this, 'createVisuals', () => {
                this.matchesPhase && (this.createFrame(), this.createImage()), this.boundingBox.setHardcoded((0, j.GetBoundingBoxForRotatedBox)({
                    height: this.options.height,
                    width: this.options.width,
                    rotation: (0, m.ConvertDegToRad)(this.options.rotation)
                }));
            }), (0, e.default)(this, 'onStateChange', u => {
                'frameColor' === u && (this.createFrame(), this.createImage()), 'imageUrl' === u && this.createImage(), 'visible' === u && (0, n.InGamePhase)() && (this.state.visible ? (this.image && (this.image.view.alpha = 1), this.frame && (this.frame.view.alpha = 1)) : (this.image && (this.image.view.alpha = 0), this.frame && (this.frame.view.alpha = 0)));
            }), (0, e.default)(this, 'setupVisualEditing', () => {
                if (!(0, n.InPreGamePhase)() || !(0, p.isSavedVersion)())
                    return;
                const v = (0, q.FetchOptionSchemaProperty)(this, 'width'),
                    w = (0, q.FetchOptionSchemaProperty)(this, 'height');
                this.visualEditing.add.box({
                    width: this.options.width,
                    height: this.options.height,
                    angle: this.options.rotation,
                    minWidth: v.min,
                    maxWidth: v.max,
                    minHeight: w.min,
                    maxHeight: w.max,
                    keepRatio: !1,
                    onChange: v => {
                        (0, r.ReplaceVisualEditingPreview)(v.x, v.y, {
                            width: v.width,
                            height: v.height,
                            rotation: v.angle
                        });
                    }
                });
            }), this.layers.setDefaultLayer(h.default.DevicesAboveCharacters), this.setupVisualEditing();
            let v = !0;
            this.options.visibleDuringPhase === g.VisiblePhases.game && !(0, n.InGamePhase)() && (0, p.isPublishedVersion)() ? v = !1 : this.options.visibleDuringPhase !== g.VisiblePhases.preGame || (0, n.InPreGamePhase)() || (v = !1), this.matchesPhase = v, this.createVisuals();
        }
    }
    var _u = t;
}), a.register('zoM4j', function(b, c) {
    let d;
    var e;
    i(b.exports, 'VisiblePhases', function() {
        return d;
    }), (e = d || (d = {})).all = 'all', e.game = 'game', e.preGame = 'preGame';
}), a.register('t66nK', function(b, c) {
    i(b.exports, 'GetBoundingBoxForRotatedBox', function() {
        return _d;
    });
    const _d = i => {
        var e, f;
        i.originX = null !== (e = i.originX) && void 0 !== e ? e : 0.5, i.originY = null !== (f = i.originY) && void 0 !== f ? f : 0.5;
        const {
            width: g,
            height: h,
            rotation: i,
            originX: j,
            originY: k
        } = i, l = [], m = [];
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
        ].forEach(i => {
            const n = Phaser.Math.Angle.Between(0, 0, (i.originX - j) * g, (i.originY - k) * h),
                o = Phaser.Math.Distance.Between(0, 0, (i.originX - j) * g, (i.originY - k) * h);
            l.push(o * Math.cos(n + i)), m.push(o * Math.sin(n + i));
        });
        const n = Math.max(...l) - Math.min(...l),
            o = Math.max(...m) - Math.min(...m);
        return {
            x: -j * n,
            y: -k * o,
            width: n,
            height: o
        };
    };
}), a.register('R2Ucl10', function(b, c) {
    i(b.exports, 'FetchOptionSchemaProperty', function() {
        return _d;
    });
    const _d = (i, b) => {
        var e, f, g;
        const h = i.deviceOption.optionSchema.options.find(i => i.key === b);
        return {
            min: null === (e = null == h ? void 0 : h.option.props) || void 0 === e ? void 0 : e.min,
            max: null === (f = null == h ? void 0 : h.option.props) || void 0 === f ? void 0 : f.max,
            step: null === (g = null == h ? void 0 : h.option.props) || void 0 === g ? void 0 : g.step
        };
    };
}), a.register('IFO6W13', function(b, c) {
    i(b.exports, 'ReplaceVisualEditingPreview', function() {
        return _h;
    });
    var d = a('HqwPM'),
        e = a('+oovY4'),
        f = a('A17vD'),
        g = a('HXXiu');
    const _h = (i, a, b) => {
        const i = (0, g.FetchVisualEditingPreview)(),
            j = (0, f.FetchCurrentlyEditedDevice)();
        if (!j || !i)
            return;
        const k = j.layers.isOnNaturalDepth() ? void 0 : a + j.layers.getDepthShift();
        (0, e.default)({
            deviceOption: i.deviceOption,
            id: d.VisualEditingConstants.previewId,
            x: i,
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
    i(b.exports, 'default', function() {
        return _f;
    });
    var d = a('D5xLI'),
        e = a('aIyMH');
    var _f = i => {
        (0, d.default)().worldManager.devices.getDeviceById(i.id) && (0, e.default)(i);
    };
});