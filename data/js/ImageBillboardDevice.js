function a(a, b, u, v) {
    Object.defineProperty(a, b, {
        get: u,
        set: v,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('n2pQ5', function(u, v) {
    var c;
    c = u.exports, Object.defineProperty(c, '__esModule', {
        value: !0,
        configurable: !0
    }), a(u.exports, 'default', function() {
        return t;
    });
    var d = b('UM8oI'),
        e = b('sgILU'),
        f = b('zHvBa'),
        g = b('cMsWT'),
        h = b('Mr5c3'),
        i = b('EU1n7'),
        j = b('KRp9M'),
        k = b('fe2aZ'),
        l = b('nEG71'),
        m = b('5Ux1a'),
        n = b('so9lE'),
        o = b('Bpt+p'),
        p = b('/Lvpl17'),
        q = b('wSwKo5'),
        r = b('hpAcY');
    class s extends e.default {
        createImage() {
            if (!this.matchesPhase)
                return;
            if ((0, o.isPublishedVersion)() && (0, m.InPreGamePhase)() && 'No' === this.options.visibleOnGameStart)
                return;
            const t = (0, r.GetImageUrl)(this.state.imageUrl || this.options.imageUrl);
            this.lastImageUrl = t, this.parts.add.sprite({
                imageId: t,
                imageUrl: t,
                onReady: b => {
                    if (t !== this.lastImageUrl)
                        return void this.parts.destroySpecificPart(b.id);
                    this.image && this.parts.destroySpecificPart(this.image.id), this.image = b;
                    const u = (0, h.default)(t),
                        v = (0, n.default)({
                            width: u.width,
                            height: u.height,
                            newWidth: 0.75 * Math.abs(this.options.width),
                            newHeight: 0.75 * Math.abs(this.options.height)
                        });
                    b.view.displayWidth = v.width, b.view.displayHeight = v.height, this.boundingBox.clearHardcoded(), b.view.angle = this.options.rotation, (0, m.InGamePhase)() ? b.view.alpha = this.state.visible ? this.options.alpha : 0 : b.view.alpha = this.options.alpha;
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
            const v = (0, k.GetNumberFromHexColor)(u);
            this.frame = this.parts.add.rect({
                color: v,
                alpha: 1,
                borderAlpha: 1,
                width: Math.abs(this.options.width),
                height: Math.abs(this.options.height),
                borderColor: (0, k.GetNumberFromHexColor)((0, j.GetContrastColor)(u)),
                borderWidth: 8,
                cornerRadius: 10
            }), this.frame.view.angle = this.options.rotation;
        }
        constructor(a) {
            super(a), (0, d.default)(this, 'matchesPhase', !0), (0, d.default)(this, 'createVisuals', () => {
                this.matchesPhase && (this.createFrame(), this.createImage()), this.boundingBox.setHardcoded((0, i.GetBoundingBoxForRotatedBox)({
                    height: this.options.height,
                    width: this.options.width,
                    rotation: (0, l.ConvertDegToRad)(this.options.rotation)
                }));
            }), (0, d.default)(this, 'onStateChange', a => {
                'frameColor' === a && (this.createFrame(), this.createImage()), 'imageUrl' === a && this.createImage(), 'visible' === a && (0, m.InGamePhase)() && (this.state.visible ? (this.image && (this.image.view.alpha = 1), this.frame && (this.frame.view.alpha = 1)) : (this.image && (this.image.view.alpha = 0), this.frame && (this.frame.view.alpha = 0)));
            }), (0, d.default)(this, 'setupVisualEditing', () => {
                if (!(0, m.InPreGamePhase)() || !(0, o.isSavedVersion)())
                    return;
                const t = (0, p.FetchOptionSchemaProperty)(this, 'width'),
                    u = (0, p.FetchOptionSchemaProperty)(this, 'height');
                this.visualEditing.add.box({
                    width: this.options.width,
                    height: this.options.height,
                    angle: this.options.rotation,
                    minWidth: t.min,
                    maxWidth: t.max,
                    minHeight: u.min,
                    maxHeight: u.max,
                    keepRatio: !1,
                    onChange: t => {
                        (0, q.ReplaceVisualEditingPreview)(t.x, t.y, {
                            width: t.width,
                            height: t.height,
                            rotation: t.angle
                        });
                    }
                });
            }), this.layers.setDefaultLayer(g.default.DevicesAboveCharacters), this.setupVisualEditing();
            let t = !0;
            this.options.visibleDuringPhase === f.VisiblePhases.game && !(0, m.InGamePhase)() && (0, o.isPublishedVersion)() ? t = !1 : this.options.visibleDuringPhase !== f.VisiblePhases.preGame || (0, m.InPreGamePhase)() || (t = !1), this.matchesPhase = t, this.createVisuals();
        }
    }
    var t = u;
}), b.register('zHvBa', function(b, e) {
    let c;
    var d;
    a(b.exports, 'VisiblePhases', function() {
        return c;
    }), (d = c || (c = {})).all = 'all', d.game = 'game', d.preGame = 'preGame';
}), b.register('EU1n7', function(b, e) {
    a(b.exports, 'GetBoundingBoxForRotatedBox', function() {
        return c;
    });
    const c = a => {
        var d, e;
        a.originX = null !== (d = a.originX) && void 0 !== d ? d : 0.5, a.originY = null !== (e = a.originY) && void 0 !== e ? e : 0.5;
        const {
            width: f,
            height: g,
            rotation: h,
            originX: i,
            originY: j
        } = k, l = [], m = [];
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
        ].forEach(k => {
            const n = Phaser.Math.Angle.Between(0, 0, (k.originX - i) * f, (k.originY - j) * g),
                o = Phaser.Math.Distance.Between(0, 0, (k.originX - i) * f, (k.originY - j) * g);
            l.push(o * Math.cos(n + h)), m.push(o * Math.sin(n + h));
        });
        const n = Math.max(...l) - Math.min(...l),
            o = Math.max(...m) - Math.min(...m);
        return {
            x: -i * n,
            y: -j * o,
            width: n,
            height: o
        };
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
}), b.register('wSwKo5', function(t, h) {
    a(t.exports, 'ReplaceVisualEditingPreview', function() {
        return g;
    });
    var c = b('2pEsK'),
        d = b('Am0b71'),
        e = b('KDS1x'),
        f = b('83+vO');
    const g = (a, b, t) => {
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
                ...t
            },
            placedByClient: !0,
            state: h.deviceOption.defaultState
        });
    };
}), b.register('Am0b71', function(t, a) {
    a(t.exports, 'default', function() {
        return e;
    });
    var c = b('dAmf5'),
        d = b('jgFbX');
    var e = a => {
        (0, c.default)().worldManager.devices.getDeviceById(a.id) && (0, d.default)(a);
    };
});