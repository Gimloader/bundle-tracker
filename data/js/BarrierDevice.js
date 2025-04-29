function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('oFGwV', function(c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'default', function() {
        return _p;
    });
    var f = b('s/YA9'),
        g = b('hycyg'),
        h = b('UkCpC'),
        i = b('ltxDW'),
        j = b('vvFNE'),
        k = b('UYyWT'),
        l = b('u/WlI21'),
        m = b('uc4mA17'),
        n = b('/YaFu1');
    class o extends i.default {
        get alpha() {
            return (0, h.InPreGamePhase)() && (0, g.isSavedVersion)() || this.options.visibleInGame && this.state.active ? 1 : 0;
        }
        get isCircle() {
            return this.options.shape === j.BarrierShape.circle;
        }
        get isRectangle() {
            return this.options.shape === j.BarrierShape.rectangle;
        }
        get color() {
            return Phaser.Display.Color.HexStringToColor(this.options.color).color;
        }
        get borderWidth() {
            return this.options.showBorder ? 8 : 0;
        }
        get borderColor() {
            return Phaser.Display.Color.HexStringToColor((0, k.GetContrastColor)(this.options.color)).color;
        }
        constructor(p) {
            if (super(p), (0, f.default)(this, 'createVisuals', () => {
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
                }), (0, f.default)(this, 'createColliders', () => {
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
                }), (0, f.default)(this, 'onStateChange', p => {
                    'active' === p && (this.state.active && (0, n.default)(this), this.part.view.setAlpha(this.alpha));
                }), (0, f.default)(this, 'checkIfCollidersEnabled', () => this.state.active), (0, h.InPreGamePhase)() && (0, g.isSavedVersion)())
                if (this.isCircle) {
                    const q = (0, m.FetchOptionSchemaProperty)(this, 'radius');
                    this.visualEditing.add.circle({
                        angle: 0,
                        rotable: !1,
                        radius: this.options.radius,
                        minRadius: q.min,
                        maxRadius: q.max,
                        onChange: q => {
                            (0, l.ReplaceVisualEditingPreview)(q.x, q.y, {
                                radius: q.radius
                            });
                        }
                    });
                } else {
                    const q = (0, m.FetchOptionSchemaProperty)(this, 'width'),
                        r = (0, m.FetchOptionSchemaProperty)(this, 'height');
                    this.visualEditing.add.box({
                        angle: this.options.angle,
                        keepRatio: !1,
                        rotable: !0,
                        width: this.options.width,
                        height: this.options.height,
                        minWidth: q.min,
                        maxWidth: q.max,
                        minHeight: r.min,
                        maxHeight: r.max,
                        onChange: q => {
                            (0, l.ReplaceVisualEditingPreview)(q.x, q.y, {
                                width: q.width,
                                height: q.height,
                                angle: q.angle
                            });
                        }
                    });
                }
            this.createVisuals(), this.createColliders();
        }
    }
    var _p = o;
}), b.register('vvFNE', function(c, d) {
    let e;
    var f;
    a(c.exports, 'BarrierShape', function() {
        return e;
    }), (f = e || (e = {})).rectangle = 'rectangle', f.circle = 'circle';
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
}), b.register('/YaFu1', function(c, d) {
    a(c.exports, 'default', function() {
        return _g;
    });
    var e = b('5Fjxs'),
        f = b('d7UqH');
    var _g = a => {
        const h = (0, f.default)((0, e.default)());
        a.colliders.forEach(a => {
            var i, j, k;
            const l = a.bodyId;
            null === (i = null == h ? void 0 : h.physics.getBody()) || void 0 === i || null === (j = i.character) || void 0 === j || null === (k = j.ignoredStaticBodies) || void 0 === k || k.add(l);
        });
    };
});