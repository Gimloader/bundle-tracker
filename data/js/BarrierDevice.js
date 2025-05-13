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
    }), a(c.exports, 'default', function() {
        return _p;
    });
    var f = b('.....'),
        g = b('.....'),
        h = b('.....'),
        i = b('.....'),
        j = b('.....'),
        k = b('.....'),
        l = b('.....'),
        m = b('.....'),
        n = b('.....');
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
                }), (0, f.default)(this, 'onStateChange', q => {
                    'active' === q && (this.state.active && (0, n.default)(this), this.part.view.setAlpha(this.alpha));
                }), (0, f.default)(this, 'checkIfCollidersEnabled', () => this.state.active), (0, h.InPreGamePhase)() && (0, g.isSavedVersion)())
                if (this.isCircle) {
                    const q = (0, m.FetchOptionSchemaProperty)(this, 'radius');
                    this.visualEditing.add.circle({
                        angle: 0,
                        rotable: !1,
                        radius: this.options.radius,
                        minRadius: q.min,
                        maxRadius: q.max,
                        onChange: r => {
                            (0, l.ReplaceVisualEditingPreview)(r.x, r.y, {
                                radius: r.radius
                            });
                        }
                    });
                } else {
                    const r = (0, m.FetchOptionSchemaProperty)(this, 'width'),
                        s = (0, m.FetchOptionSchemaProperty)(this, 'height');
                    this.visualEditing.add.box({
                        angle: this.options.angle,
                        keepRatio: !1,
                        rotable: !0,
                        width: this.options.width,
                        height: this.options.height,
                        minWidth: r.min,
                        maxWidth: r.max,
                        minHeight: s.min,
                        maxHeight: s.max,
                        onChange: t => {
                            (0, l.ReplaceVisualEditingPreview)(t.x, t.y, {
                                width: t.width,
                                height: t.height,
                                angle: t.angle
                            });
                        }
                    });
                }
            this.createVisuals(), this.createColliders();
        }
    }
    var _p = o;
}), b.register('.....', function(c, d) {
    let e;
    var f;
    a(c.exports, 'BarrierShape', function() {
        return e;
    }), (f = e || (e = {})).rectangle = 'rectangle', f.circle = 'circle';
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
    a(c.exports, 'default', function() {
        return _g;
    });
    var e = b('.....'),
        f = b('.....');
    var _g = h => {
        const i = (0, f.default)((0, e.default)());
        h.colliders.forEach(j => {
            var k, l, m;
            const n = j.bodyId;
            null === (k = null == i ? void 0 : i.physics.getBody()) || void 0 === k || null === (l = k.character) || void 0 === l || null === (m = l.ignoredStaticBodies) || void 0 === m || m.add(n);
        });
    };
});