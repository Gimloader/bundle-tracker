function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('Xk92Y', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _o(b.exports, 'default', function() {
        return _o;
    });
    var e = a('1bFPu'),
        f = a('9tz3H'),
        g = a('/pbxo'),
        h = a('I35Ay'),
        i = a('FyhLk'),
        j = a('HbVXj'),
        k = a('IFO6W13'),
        l = a('R2Ucl10'),
        m = a('NyV64');
    class n extends h.default {
        get alpha() {
            return (0, g.InPreGamePhase)() && (0, f.isSavedVersion)() || this.options.visibleInGame && this.state.active ? 1 : 0;
        }
        get isCircle() {
            return this.options.shape === i.BarrierShape.circle;
        }
        get isRectangle() {
            return this.options.shape === i.BarrierShape.rectangle;
        }
        get color() {
            return Phaser.Display.Color.HexStringToColor(this.options.color).color;
        }
        get borderWidth() {
            return this.options.showBorder ? 8 : 0;
        }
        get borderColor() {
            return Phaser.Display.Color.HexStringToColor((0, j.GetContrastColor)(this.options.color)).color;
        }
        constructor(_o) {
            if (super(_o), (0, e.default)(this, 'createVisuals', () => {
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
                }), (0, e.default)(this, 'createColliders', () => {
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
                }), (0, e.default)(this, 'onStateChange', _o => {
                    'active' === _o && (this.state.active && (0, m.default)(this), this.part.view.setAlpha(this.alpha));
                }), (0, e.default)(this, 'checkIfCollidersEnabled', () => this.state.active), (0, g.InPreGamePhase)() && (0, f.isSavedVersion)())
                if (this.isCircle) {
                    const p = (0, l.FetchOptionSchemaProperty)(this, 'radius');
                    this.visualEditing.add.circle({
                        angle: 0,
                        rotable: !1,
                        radius: this.options.radius,
                        minRadius: p.min,
                        maxRadius: p.max,
                        onChange: p => {
                            (0, k.ReplaceVisualEditingPreview)(p.x, p.y, {
                                radius: p.radius
                            });
                        }
                    });
                } else {
                    const p = (0, l.FetchOptionSchemaProperty)(this, 'width'),
                        q = (0, l.FetchOptionSchemaProperty)(this, 'height');
                    this.visualEditing.add.box({
                        angle: this.options.angle,
                        keepRatio: !1,
                        rotable: !0,
                        width: this.options.width,
                        height: this.options.height,
                        minWidth: p.min,
                        maxWidth: p.max,
                        minHeight: q.min,
                        maxHeight: q.max,
                        onChange: p => {
                            (0, k.ReplaceVisualEditingPreview)(p.x, p.y, {
                                width: p.width,
                                height: p.height,
                                angle: p.angle
                            });
                        }
                    });
                }
            this.createVisuals(), this.createColliders();
        }
    }
    var _o = n;
}), a.register('FyhLk', function(b, c) {
    let d;
    var e;
    e(b.exports, 'BarrierShape', function() {
        return d;
    }), (e = d || (d = {})).rectangle = 'rectangle', e.circle = 'circle';
}), a.register('IFO6W13', function(b, c) {
    e(b.exports, 'ReplaceVisualEditingPreview', function() {
        return _h;
    });
    var d = a('HqwPM'),
        e = a('+oovY4'),
        f = a('A17vD'),
        g = a('HXXiu');
    const _h = (e, a, b) => {
        const i = (0, g.FetchVisualEditingPreview)(),
            j = (0, f.FetchCurrentlyEditedDevice)();
        if (!j || !i)
            return;
        const k = j.layers.isOnNaturalDepth() ? void 0 : a + j.layers.getDepthShift();
        (0, e.default)({
            deviceOption: i.deviceOption,
            id: d.VisualEditingConstants.previewId,
            x: e,
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
    e(b.exports, 'default', function() {
        return _f;
    });
    var d = a('D5xLI'),
        e = a('aIyMH');
    var _f = e => {
        (0, d.default)().worldManager.devices.getDeviceById(e.id) && (0, e.default)(e);
    };
}), a.register('R2Ucl10', function(b, c) {
    e(b.exports, 'FetchOptionSchemaProperty', function() {
        return _d;
    });
    const _d = (e, b) => {
        var e, f, g;
        const h = e.deviceOption.optionSchema.options.find(e => e.key === b);
        return {
            min: null === (e = null == h ? void 0 : h.option.props) || void 0 === e ? void 0 : e.min,
            max: null === (f = null == h ? void 0 : h.option.props) || void 0 === f ? void 0 : f.max,
            step: null === (g = null == h ? void 0 : h.option.props) || void 0 === g ? void 0 : g.step
        };
    };
}), a.register('NyV64', function(b, c) {
    e(b.exports, 'default', function() {
        return _f;
    });
    var d = a('Jfada'),
        e = a('B7ZvS');
    var _f = e => {
        const g = (0, e.default)((0, d.default)());
        e.colliders.forEach(e => {
            var h, i, j;
            const k = e.bodyId;
            null === (h = null == g ? void 0 : g.physics.getBody()) || void 0 === h || null === (i = h.character) || void 0 === i || null === (j = i.ignoredStaticBodies) || void 0 === j || j.add(k);
        });
    };
});