function i(i, e, t, a) {
    Object.defineProperty(i, e, {
        get: t,
        set: a,
        enumerable: !0,
        configurable: !0
    })
}
var e = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
e.register("b8Y5I", (function(t, a) {
    var s;
    s = t.exports, Object.defineProperty(s, "__esModule", {
        value: !0,
        configurable: !0
    }), i(t.exports, "default", (function() {
        return y
    }));
    var o = e("divCp"),
        r = e("bNmF9"),
        n = e("1RjiY"),
        h = e("bvStP"),
        d = e("fHf8O"),
        l = e("46yE9"),
        g = e("cNwrB"),
        p = e("36IJb"),
        c = e("8jHbG"),
        u = e("6Tpu2"),
        m = e("cqr0A"),
        f = e("4uojN"),
        v = e("cK78N"),
        w = e("cnijD"),
        b = e("41SvP");
    class P extends r.default {
        createImage() {
            if (!this.matchesPhase) return;
            if ((0, f.isPublishedVersion)() && (0, u.InPreGamePhase)() && "No" === this.options.visibleOnGameStart) return;
            const i = (0, b.GetImageUrl)(this.state.imageUrl || this.options.imageUrl);
            this.lastImageUrl = i, this.parts.add.sprite({
                imageId: i,
                imageUrl: i,
                onReady: e => {
                    if (i !== this.lastImageUrl) return void this.parts.destroySpecificPart(e.id);
                    this.image && this.parts.destroySpecificPart(this.image.id), this.image = e;
                    const t = (0, d.default)(i),
                        a = (0, m.default)({
                            width: t.width,
                            height: t.height,
                            newWidth: .75 * Math.abs(this.options.width),
                            newHeight: .75 * Math.abs(this.options.height)
                        });
                    e.view.displayWidth = a.width, e.view.displayHeight = a.height, this.boundingBox.clearHardcoded(), e.view.angle = this.options.rotation, (0, u.InGamePhase)() ? e.view.alpha = this.state.visible ? this.options.alpha : 0 : e.view.alpha = this.options.alpha
                }
            })
        }
        createFrame() {
            if (!this.matchesPhase) return;
            this.frame && this.parts.destroySpecificPart(this.frame.id);
            const i = this.state.frameColor || this.options.frameColor;
            if ("Transparent" === i) return;
            const e = (0, p.GetNumberFromHexColor)(i);
            this.frame = this.parts.add.rect({
                color: e,
                alpha: 1,
                borderAlpha: 1,
                width: Math.abs(this.options.width),
                height: Math.abs(this.options.height),
                borderColor: (0, p.GetNumberFromHexColor)((0, g.GetContrastColor)(i)),
                borderWidth: 8,
                cornerRadius: 10
            }), this.frame.view.angle = this.options.rotation
        }
        constructor(i) {
            super(i), (0, o.default)(this, "matchesPhase", !0), (0, o.default)(this, "createVisuals", (() => {
                this.matchesPhase && (this.createFrame(), this.createImage()), this.boundingBox.setHardcoded((0, l.GetBoundingBoxForRotatedBox)({
                    height: this.options.height,
                    width: this.options.width,
                    rotation: (0, c.ConvertDegToRad)(this.options.rotation)
                }))
            })), (0, o.default)(this, "onStateChange", (i => {
                "frameColor" === i && (this.createFrame(), this.createImage()), "imageUrl" === i && this.createImage(), "visible" === i && (0, u.InGamePhase)() && (this.state.visible ? (this.image && (this.image.view.alpha = 1), this.frame && (this.frame.view.alpha = 1)) : (this.image && (this.image.view.alpha = 0), this.frame && (this.frame.view.alpha = 0)))
            })), (0, o.default)(this, "setupVisualEditing", (() => {
                if (!(0, u.InPreGamePhase)() || !(0, f.isSavedVersion)()) return;
                const i = (0, v.FetchOptionSchemaProperty)(this, "width"),
                    e = (0, v.FetchOptionSchemaProperty)(this, "height");
                this.visualEditing.add.box({
                    width: this.options.width,
                    height: this.options.height,
                    angle: this.options.rotation,
                    minWidth: i.min,
                    maxWidth: i.max,
                    minHeight: e.min,
                    maxHeight: e.max,
                    keepRatio: !1,
                    onChange: i => {
                        (0, w.ReplaceVisualEditingPreview)(i.x, i.y, {
                            width: i.width,
                            height: i.height,
                            rotation: i.angle
                        })
                    }
                })
            })), this.layers.setDefaultLayer(h.default.DevicesAboveCharacters), this.setupVisualEditing();
            let e = !0;
            this.options.visibleDuringPhase === n.VisiblePhases.game && !(0, u.InGamePhase)() && (0, f.isPublishedVersion)() ? e = !1 : this.options.visibleDuringPhase !== n.VisiblePhases.preGame || (0, u.InPreGamePhase)() || (e = !1), this.matchesPhase = e, this.createVisuals()
        }
    }
    var y = P
})), e.register("1RjiY", (function(e, t) {
    let a;
    var s;
    i(e.exports, "VisiblePhases", (function() {
        return a
    })), (s = a || (a = {})).all = "all", s.game = "game", s.preGame = "preGame"
})), e.register("46yE9", (function(e, t) {
    i(e.exports, "GetBoundingBoxForRotatedBox", (function() {
        return a
    }));
    const a = i => {
        var e, t;
        i.originX = null !== (e = i.originX) && void 0 !== e ? e : .5, i.originY = null !== (t = i.originY) && void 0 !== t ? t : .5;
        const {
            width: a,
            height: s,
            rotation: o,
            originX: r,
            originY: n
        } = i, h = [], d = [];
        [{
            originX: 1,
            originY: 1
        }, {
            originX: 0,
            originY: 1
        }, {
            originX: 1,
            originY: 0
        }, {
            originX: 0,
            originY: 0
        }].forEach((i => {
            const e = Phaser.Math.Angle.Between(0, 0, (i.originX - r) * a, (i.originY - n) * s),
                t = Phaser.Math.Distance.Between(0, 0, (i.originX - r) * a, (i.originY - n) * s);
            h.push(t * Math.cos(e + o)), d.push(t * Math.sin(e + o))
        }));
        const l = Math.max(...h) - Math.min(...h),
            g = Math.max(...d) - Math.min(...d);
        return {
            x: -r * l,
            y: -n * g,
            width: l,
            height: g
        }
    }
})), e.register("cK78N", (function(e, t) {
    i(e.exports, "FetchOptionSchemaProperty", (function() {
        return a
    }));
    const a = (i, e) => {
        var t, a, s;
        const o = i.deviceOption.optionSchema.options.find((i => i.key === e));
        return {
            min: null === (t = null == o ? void 0 : o.option.props) || void 0 === t ? void 0 : t.min,
            max: null === (a = null == o ? void 0 : o.option.props) || void 0 === a ? void 0 : a.max,
            step: null === (s = null == o ? void 0 : o.option.props) || void 0 === s ? void 0 : s.step
        }
    }
})), e.register("cnijD", (function(t, a) {
    i(t.exports, "ReplaceVisualEditingPreview", (function() {
        return h
    }));
    var s = e("dWqri"),
        o = e("eCsxR"),
        r = e("ittx1"),
        n = e("dNzyU");
    const h = (i, e, t) => {
        const a = (0, n.FetchVisualEditingPreview)(),
            h = (0, r.FetchCurrentlyEditedDevice)();
        if (!h || !a) return;
        const d = h.layers.isOnNaturalDepth() ? void 0 : e + h.layers.getDepthShift();
        (0, o.default)({
            deviceOption: a.deviceOption,
            id: s.VisualEditingConstants.previewId,
            x: i,
            y: e,
            depth: d,
            layerId: h.layers.getLayer(),
            name: a.name,
            isPreview: !0,
            options: {
                ...a.options,
                ...t
            },
            placedByClient: !0,
            state: a.deviceOption.defaultState
        })
    }
})), e.register("eCsxR", (function(t, a) {
    i(t.exports, "default", (function() {
        return r
    }));
    var s = e("gwuwo"),
        o = e("fCcDT");
    var r = i => {
        (0, s.default)().worldManager.devices.getDeviceById(i.id) && (0, o.default)(i)
    }
}));