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
        return _s;
    });
    var f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....'), k = b('.....'), l = b('.....'), m = b('.....'), n = b('.....'), o = b('.....'), p = b('.....'), q = b('.....');
    class r extends n.default {
        constructor(s) {
            super(s), (0, f.default)(this, 'onStateChange', t => {
                (0, h.InPreGamePhase)() || 'active' === t && (this.state.active ? (this.interactiveZones.setForceDisabled(!1), this.isDown() || this.setButtonState(p.ButtonState.active)) : (this.interactiveZones.setForceDisabled(!0), this.isDown() || this.setButtonState(p.ButtonState.inactive)));
            }), (0, f.default)(this, 'isDown', () => this.currentState === p.ButtonState.pressed), (0, f.default)(this, 'setButtonState', t => {
                var u, v, w, x, y, z;
                this.currentState = t, !1 === this.options.visibleInGame && (0, h.InGamePhase)() || (t === p.ButtonState.pressed && (0, m.playSound)({
                    path: (0, k.default)('devices/button/click.mp3'),
                    volume: (0, l.getVolume)({
                        volume: 0.2,
                        type: l.SoundType.soundEffect
                    })
                }), (null === this || void 0 === this || null === (u = this.active) || void 0 === u ? void 0 : u.view) && (this.active.view.alpha = 0), (null === this || void 0 === this || null === (v = this.pressed) || void 0 === v ? void 0 : v.view) && (this.pressed.view.alpha = 0), (null === this || void 0 === this || null === (w = this.inactive) || void 0 === w ? void 0 : w.view) && (this.inactive.view.alpha = 0), t === p.ButtonState.active ? (null === this || void 0 === this || null === (x = this.active) || void 0 === x ? void 0 : x.view) && (this.active.view.alpha = 1) : t === p.ButtonState.inactive ? (null === this || void 0 === this || null === (y = this.inactive) || void 0 === y ? void 0 : y.view) && (this.inactive.view.alpha = 1) : t === p.ButtonState.pressed && (null === this || void 0 === this || null === (z = this.pressed) || void 0 === z ? void 0 : z.view) && (this.pressed.view.alpha = 1));
            }), (0, f.default)(this, 'setupVisualEditing', () => {
                if (!(0, h.InPreGamePhase)() || !(0, g.isSavedVersion)())
                    return;
                const t = (0, j.FetchOptionSchemaProperty)(this, 'radius'), u = (0, j.FetchOptionSchemaProperty)(this, 'size');
                this.visualEditing.add.circle({
                    radius: this.options.size,
                    angle: -90,
                    minRadius: u.min,
                    maxRadius: u.max,
                    rotable: !1,
                    movable: !1,
                    onChange: v => {
                        (0, i.ReplaceVisualEditingPreview)(v.x, v.y, { size: v.radius });
                    }
                }), this.visualEditing.add.circle({
                    radius: this.options.radius,
                    minRadius: t.min,
                    maxRadius: t.max,
                    rotable: !1,
                    onChange: v => {
                        (0, i.ReplaceVisualEditingPreview)(v.x, v.y, { radius: v.radius });
                    }
                });
            }), this.setupVisualEditing(), (!0 === this.options.visibleInGame || (0, h.InPreGamePhase)() && (0, g.isSavedVersion)()) && (this.colliders.add.circle({
                x: 0,
                y: -10 * this.options.size / 50,
                r: 45 * this.options.size / 50
            }), this.colliders.add.box({
                x: 0,
                y: 0,
                w: 150 * this.options.size / 50,
                h: 80 * this.options.size / 50
            }), this.active = this.parts.add.sprite({
                ...o.Green1,
                onReady: t => {
                    t.view.setScale(this.options.size / 50);
                }
            }), this.pressed = this.parts.add.sprite({
                ...o.Green2,
                onReady: t => {
                    t.view.setScale(this.options.size / 50);
                }
            }), this.inactive = this.parts.add.sprite({
                ...o.Orange,
                onReady: t => {
                    t.view.setScale(this.options.size / 50);
                }
            }), (0, h.InPreGamePhase)() && this.options.activeOnStart || (0, h.InGamePhase)() && this.state.active ? this.setButtonState(p.ButtonState.active) : this.setButtonState(p.ButtonState.inactive));
            const t = 2 * Math.max(1.3 * this.options.size, this.options.radius);
            this.boundingBox.setHardcoded({
                width: t,
                height: t
            }), this.interactiveZone = this.interactiveZones.add.circle({ r: this.options.radius }), this.interactiveZones.setForceDisabled(!this.state.active), this.interactiveZones.setInfo({
                message: this.options.guiMessage,
                allowedToInteract: !0,
                duration: this.options.interactionDuration
            }), this.interactiveZones.setCanInteractThroughColliders(!this.options.visibleInGame), this.interactiveZones.onInteraction = () => {
                this.sendToServerDevice(q.Messages.interacted), this.setButtonState(p.ButtonState.pressed), setTimeout(() => {
                    this.state.active ? this.setButtonState(p.ButtonState.active) : this.setButtonState(p.ButtonState.inactive);
                }, 200);
            };
        }
    }
    var _s = r;
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
    a(c.exports, 'Green1', function () {
        return _f;
    }), a(c.exports, 'Green2', function () {
        return _g;
    }), a(c.exports, 'Orange', function () {
        return _h;
    });
    var e = b('.....');
    const _f = {
            imageId: 'button_device_green_1',
            imageUrl: (0, e.default)('devices/button/button-device-green-1.png')
        }, _g = {
            imageId: 'button_device_green_2',
            imageUrl: (0, e.default)('devices/button/button-device-green-2.png')
        }, _h = {
            imageId: 'button_device_orange',
            imageUrl: (0, e.default)('devices/button/button-device-orange.png')
        };
}), b.register('.....', function (c, d) {
    let e;
    var f;
    a(c.exports, 'ButtonState', function () {
        return e;
    }), (f = e || (e = {})).active = 'active', f.pressed = 'pressed', f.inactive = 'inactive';
}), b.register('.....', function (c, d) {
    a(c.exports, 'Messages', function () {
        return _e;
    });
    let _e;
    (_e || (_e = {})).interacted = 'interacted';
});