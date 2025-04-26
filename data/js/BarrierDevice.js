function a(a, b, d, c) {
    Object.defineProperty(a, b, {
        get: d,
        set: c,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('APGjR', function(d, c) {
    var c;
    c = d.exports, Object.defineProperty(c, '__esModule', {
        value: !0,
        configurable: !0
    }), a(d.exports, 'default', function() {
        return n;
    });
    var d = b('UM8oI'),
        e = b('Bpt+p'),
        f = b('5Ux1a'),
        g = b('sgILU'),
        h = b('aw/Sp'),
        i = b('KRp9M'),
        j = b('wSwKo5'),
        k = b('/Lvpl17'),
        l = b('1Xmw+1');
    class m extends g.default {
        get alpha() {
            return (0, f.InPreGamePhase)() && (0, e.isSavedVersion)() || this.options.visibleInGame && this.state.active ? 1 : 0;
        }
        get isCircle() {
            return this.options.shape === h.BarrierShape.circle;
        }
        get isRectangle() {
            return this.options.shape === h.BarrierShape.rectangle;
        }
        get color() {
            return Phaser.Display.Color.HexStringToColor(this.options.color).color;
        }
        get borderWidth() {
            return this.options.showBorder ? 8 : 0;
        }
        get borderColor() {
            return Phaser.Display.Color.HexStringToColor((0, i.GetContrastColor)(this.options.color)).color;
        }
        constructor(a) {
            if (super(a), (0, d.default)(this, 'createVisuals', () => {
                    this.part || (this.isCircle && (this.part = this.parts.add.circle({
                        x: 0,
                        y: 0,
                        r: this.options.radius,
                        color: this.color,
                        alpha: this.options.alpha,
                        borderColor: this.borderColor,
                        borderAlpha: 1,
                        borderWidth: this.borderWidth
                    })), this.isRectangle && (this.part = this.parts.add.rect({
                        x: 0,
                        y: 0,
                        width: this.options.width,
                        height: this.options.height,
                        angle: this.options.angle,
                        color: this.color,
                        alpha: this.options.alpha,
                        borderColor: this.borderColor,
                        borderAlpha: 1,
                        borderWidth: this.borderWidth,
                        cornerRadius: 8
                    })), this.part.view.alpha = this.alpha);
                }), (0, d.default)(this, 'createColliders', () => {
                    this.options.collisionEnabled && (this.isCircle && this.colliders.add.circle({
                        x: 0,
                        y: 0,
                        r: this.options.radius
                    }), this.isRectangle && this.colliders.add.box({
                        x: 0,
                        y: 0,
                        w: this.options.width,
                        h: this.options.height,
                        angle: this.options.angle
                    }));
                }), (0, d.default)(this, 'onStateChange', a => {
                    'active' === a && (this.state.active && (0, l.default)(this), this.part.view.setAlpha(this.alpha));
                }), (0, d.default)(this, 'checkIfCollidersEnabled', () => this.state.active), (0, f.InPreGamePhase)() && (0, e.isSavedVersion)())
                if (this.isCircle) {
                    const n = (0, k.FetchOptionSchemaProperty)(this, 'radius');
                    this.visualEditing.add.circle({
                        angle: 0,
                        rotable: !1,
                        radius: this.options.radius,
                        minRadius: n.min,
                        maxRadius: n.max,
                        onChange: n => {
                            (0, j.ReplaceVisualEditingPreview)(n.x, n.y, {
                                radius: n.radius
                            });
                        }
                    });
                } else {
                    const o = (0, k.FetchOptionSchemaProperty)(this, 'width'),
                        p = (0, k.FetchOptionSchemaProperty)(this, 'height');
                    this.visualEditing.add.box({
                        angle: this.options.angle,
                        keepRatio: !1,
                        rotable: !0,
                        width: this.options.width,
                        height: this.options.height,
                        minWidth: o.min,
                        maxWidth: o.max,
                        minHeight: p.min,
                        maxHeight: p.max,
                        onChange: o => {
                            (0, j.ReplaceVisualEditingPreview)(o.x, o.y, {
                                width: o.width,
                                height: o.height,
                                angle: o.angle
                            });
                        }
                    });
                }
            this.createVisuals(), this.createColliders();
        }
    }
    var n = o;
}), b.register('aw/Sp', function(b, d) {
    let c;
    var d;
    a(b.exports, 'BarrierShape', function() {
        return c;
    }), (d = c || (c = {})).rectangle = 'rectangle', d.circle = 'circle';
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