function t(t, e, i, s) {
    Object.defineProperty(t, e, {
        get: i,
        set: s,
        enumerable: !0,
        configurable: !0
    })
}
var e = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
e.register("6Tfco", (function(i, s) {
    var n;
    n = i.exports, Object.defineProperty(n, "__esModule", {
        value: !0,
        configurable: !0
    }), t(i.exports, "default", (function() {
        return S
    }));
    var a = e("divCp"),
        o = e("4uojN"),
        r = e("6Tpu2"),
        d = e("cnijD"),
        u = e("cK78N"),
        c = e("alREA"),
        l = e("3iPiZ"),
        v = e("jVQO4"),
        h = e("bNmF9"),
        p = e("eqz5b"),
        g = e("eLwxn"),
        f = e("bmaDW");
    class m extends h.default {
        constructor(t) {
            super(t), (0, a.default)(this, "onStateChange", (t => {
                (0, r.InPreGamePhase)() || "active" === t && (this.state.active ? (this.interactiveZones.setForceDisabled(!1), this.isDown() || this.setButtonState(g.ButtonState.active)) : (this.interactiveZones.setForceDisabled(!0), this.isDown() || this.setButtonState(g.ButtonState.inactive)))
            })), (0, a.default)(this, "isDown", (() => this.currentState === g.ButtonState.pressed)), (0, a.default)(this, "setButtonState", (t => {
                var e, i, s, n, a, o;
                this.currentState = t, !1 === this.options.visibleInGame && (0, r.InGamePhase)() || (t === g.ButtonState.pressed && (0, v.playSound)({
                    path: (0, c.default)("devices/button/click.mp3"),
                    volume: (0, l.getVolume)({
                        volume: .2,
                        type: l.SoundType.soundEffect
                    })
                }), (null === this || void 0 === this || null === (e = this.active) || void 0 === e ? void 0 : e.view) && (this.active.view.alpha = 0), (null === this || void 0 === this || null === (i = this.pressed) || void 0 === i ? void 0 : i.view) && (this.pressed.view.alpha = 0), (null === this || void 0 === this || null === (s = this.inactive) || void 0 === s ? void 0 : s.view) && (this.inactive.view.alpha = 0), t === g.ButtonState.active ? (null === this || void 0 === this || null === (n = this.active) || void 0 === n ? void 0 : n.view) && (this.active.view.alpha = 1) : t === g.ButtonState.inactive ? (null === this || void 0 === this || null === (a = this.inactive) || void 0 === a ? void 0 : a.view) && (this.inactive.view.alpha = 1) : t === g.ButtonState.pressed && (null === this || void 0 === this || null === (o = this.pressed) || void 0 === o ? void 0 : o.view) && (this.pressed.view.alpha = 1))
            })), (0, a.default)(this, "setupVisualEditing", (() => {
                if (!(0, r.InPreGamePhase)() || !(0, o.isSavedVersion)()) return;
                const t = (0, u.FetchOptionSchemaProperty)(this, "radius"),
                    e = (0, u.FetchOptionSchemaProperty)(this, "size");
                this.visualEditing.add.circle({
                    radius: this.options.size,
                    angle: -90,
                    minRadius: e.min,
                    maxRadius: e.max,
                    rotable: !1,
                    movable: !1,
                    onChange: t => {
                        (0, d.ReplaceVisualEditingPreview)(t.x, t.y, {
                            size: t.radius
                        })
                    }
                }), this.visualEditing.add.circle({
                    radius: this.options.radius,
                    minRadius: t.min,
                    maxRadius: t.max,
                    rotable: !1,
                    onChange: t => {
                        (0, d.ReplaceVisualEditingPreview)(t.x, t.y, {
                            radius: t.radius
                        })
                    }
                })
            })), this.setupVisualEditing(), (!0 === this.options.visibleInGame || (0, r.InPreGamePhase)() && (0, o.isSavedVersion)()) && (this.colliders.add.circle({
                x: 0,
                y: -10 * this.options.size / 50,
                r: 45 * this.options.size / 50
            }), this.colliders.add.box({
                x: 0,
                y: 0,
                w: 150 * this.options.size / 50,
                h: 80 * this.options.size / 50
            }), this.active = this.parts.add.sprite({
                ...p.Green1,
                onReady: t => {
                    t.view.setScale(this.options.size / 50)
                }
            }), this.pressed = this.parts.add.sprite({
                ...p.Green2,
                onReady: t => {
                    t.view.setScale(this.options.size / 50)
                }
            }), this.inactive = this.parts.add.sprite({
                ...p.Orange,
                onReady: t => {
                    t.view.setScale(this.options.size / 50)
                }
            }), (0, r.InPreGamePhase)() && this.options.activeOnStart || (0, r.InGamePhase)() && this.state.active ? this.setButtonState(g.ButtonState.active) : this.setButtonState(g.ButtonState.inactive));
            const e = 2 * Math.max(1.3 * this.options.size, this.options.radius);
            this.boundingBox.setHardcoded({
                width: e,
                height: e
            }), this.interactiveZone = this.interactiveZones.add.circle({
                r: this.options.radius
            }), this.interactiveZones.setForceDisabled(!this.state.active), this.interactiveZones.setInfo({
                message: this.options.guiMessage,
                allowedToInteract: !0,
                duration: this.options.interactionDuration
            }), this.interactiveZones.setCanInteractThroughColliders(!this.options.visibleInGame), this.interactiveZones.onInteraction = () => {
                this.sendToServerDevice(f.Messages.interacted), this.setButtonState(g.ButtonState.pressed), setTimeout((() => {
                    this.state.active ? this.setButtonState(g.ButtonState.active) : this.setButtonState(g.ButtonState.inactive)
                }), 200)
            }
        }
    }
    var S = m
})), e.register("cnijD", (function(i, s) {
    t(i.exports, "ReplaceVisualEditingPreview", (function() {
        return d
    }));
    var n = e("dWqri"),
        a = e("eCsxR"),
        o = e("ittx1"),
        r = e("dNzyU");
    const d = (t, e, i) => {
        const s = (0, r.FetchVisualEditingPreview)(),
            d = (0, o.FetchCurrentlyEditedDevice)();
        if (!d || !s) return;
        const u = d.layers.isOnNaturalDepth() ? void 0 : e + d.layers.getDepthShift();
        (0, a.default)({
            deviceOption: s.deviceOption,
            id: n.VisualEditingConstants.previewId,
            x: t,
            y: e,
            depth: u,
            layerId: d.layers.getLayer(),
            name: s.name,
            isPreview: !0,
            options: {
                ...s.options,
                ...i
            },
            placedByClient: !0,
            state: s.deviceOption.defaultState
        })
    }
})), e.register("eCsxR", (function(i, s) {
    t(i.exports, "default", (function() {
        return o
    }));
    var n = e("gwuwo"),
        a = e("fCcDT");
    var o = t => {
        (0, n.default)().worldManager.devices.getDeviceById(t.id) && (0, a.default)(t)
    }
})), e.register("cK78N", (function(e, i) {
    t(e.exports, "FetchOptionSchemaProperty", (function() {
        return s
    }));
    const s = (t, e) => {
        var i, s, n;
        const a = t.deviceOption.optionSchema.options.find((t => t.key === e));
        return {
            min: null === (i = null == a ? void 0 : a.option.props) || void 0 === i ? void 0 : i.min,
            max: null === (s = null == a ? void 0 : a.option.props) || void 0 === s ? void 0 : s.max,
            step: null === (n = null == a ? void 0 : a.option.props) || void 0 === n ? void 0 : n.step
        }
    }
})), e.register("eqz5b", (function(i, s) {
    t(i.exports, "Green1", (function() {
        return a
    })), t(i.exports, "Green2", (function() {
        return o
    })), t(i.exports, "Orange", (function() {
        return r
    }));
    var n = e("alREA");
    const a = {
            imageId: "button_device_green_1",
            imageUrl: (0, n.default)("devices/button/button-device-green-1.png")
        },
        o = {
            imageId: "button_device_green_2",
            imageUrl: (0, n.default)("devices/button/button-device-green-2.png")
        },
        r = {
            imageId: "button_device_orange",
            imageUrl: (0, n.default)("devices/button/button-device-orange.png")
        }
})), e.register("eLwxn", (function(e, i) {
    let s;
    var n;
    t(e.exports, "ButtonState", (function() {
        return s
    })), (n = s || (s = {})).active = "active", n.pressed = "pressed", n.inactive = "inactive"
})), e.register("bmaDW", (function(e, i) {
    t(e.exports, "Messages", (function() {
        return s
    }));
    let s;
    (s || (s = {})).interacted = "interacted"
}));