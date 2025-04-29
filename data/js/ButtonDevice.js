function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('5b9mT', function(c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'default', function() {
        return _s;
    });
    var f = b('s/YA9'),
        g = b('hycyg'),
        h = b('UkCpC'),
        i = b('u/WlI21'),
        j = b('uc4mA17'),
        k = b('UaUBz0'),
        l = b('CbU7r'),
        m = b('3jaMj'),
        n = b('ltxDW'),
        o = b('MbEIr'),
        p = b('jNIkP'),
        q = b('9tJOw');
    class r extends n.default {
        constructor(s) {
            super(s), (0, f.default)(this, 'onStateChange', s => {
                (0, h.InPreGamePhase)() || 'active' === s && (this.state.active ? (this.interactiveZones.setForceDisabled(!1), this.isDown() || this.setButtonState(p.ButtonState.active)) : (this.interactiveZones.setForceDisabled(!0), this.isDown() || this.setButtonState(p.ButtonState.inactive)));
            }), (0, f.default)(this, 'isDown', () => this.currentState === p.ButtonState.pressed), (0, f.default)(this, 'setButtonState', s => {
                var t, u, v, w, x, y;
                this.currentState = s, !1 === this.options.visibleInGame && (0, h.InGamePhase)() || (s === p.ButtonState.pressed && (0, m.playSound)({
                    path: (0, k.default)('devices/button/click.mp3'),
                    volume: (0, l.getVolume)({
                        volume: 0.2,
                        type: l.SoundType.soundEffect
                    })
                }), (null === this || void 0 === this || null === (t = this.active) || void 0 === t ? void 0 : t.view) && (this.active.view.alpha = 0), (null === this || void 0 === this || null === (u = this.pressed) || void 0 === u ? void 0 : u.view) && (this.pressed.view.alpha = 0), (null === this || void 0 === this || null === (v = this.inactive) || void 0 === v ? void 0 : v.view) && (this.inactive.view.alpha = 0), s === p.ButtonState.active ? (null === this || void 0 === this || null === (w = this.active) || void 0 === w ? void 0 : w.view) && (this.active.view.alpha = 1) : s === p.ButtonState.inactive ? (null === this || void 0 === this || null === (x = this.inactive) || void 0 === x ? void 0 : x.view) && (this.inactive.view.alpha = 1) : s === p.ButtonState.pressed && (null === this || void 0 === this || null === (y = this.pressed) || void 0 === y ? void 0 : y.view) && (this.pressed.view.alpha = 1));
            }), (0, f.default)(this, 'setupVisualEditing', () => {
                if (!(0, h.InPreGamePhase)() || !(0, g.isSavedVersion)())
                    return;
                const t = (0, j.FetchOptionSchemaProperty)(this, 'radius'),
                    u = (0, j.FetchOptionSchemaProperty)(this, 'size');
                this.visualEditing.add.circle({
                    radius: this.options.size,
                    angle: -90,
                    minRadius: u.min,
                    maxRadius: u.max,
                    rotable: !1,
                    movable: !1,
                    onChange: t => {
                        (0, i.ReplaceVisualEditingPreview)(t.x, t.y, {
                            size: t.radius
                        });
                    }
                }), this.visualEditing.add.circle({
                    radius: this.options.radius,
                    minRadius: t.min,
                    maxRadius: t.max,
                    rotable: !1,
                    onChange: t => {
                        (0, i.ReplaceVisualEditingPreview)(t.x, t.y, {
                            radius: t.radius
                        });
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
                onReady: s => {
                    s.view.setScale(this.options.size / 50);
                }
            }), this.pressed = this.parts.add.sprite({
                ...o.Green2,
                onReady: s => {
                    s.view.setScale(this.options.size / 50);
                }
            }), this.inactive = this.parts.add.sprite({
                ...o.Orange,
                onReady: s => {
                    s.view.setScale(this.options.size / 50);
                }
            }), (0, h.InPreGamePhase)() && this.options.activeOnStart || (0, h.InGamePhase)() && this.state.active ? this.setButtonState(p.ButtonState.active) : this.setButtonState(p.ButtonState.inactive));
            const t = 2 * Math.max(1.3 * this.options.size, this.options.radius);
            this.boundingBox.setHardcoded({
                width: t,
                height: t
            }), this.interactiveZone = this.interactiveZones.add.circle({
                r: this.options.radius
            }), this.interactiveZones.setForceDisabled(!this.state.active), this.interactiveZones.setInfo({
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
}), b.register('MbEIr', function(c, d) {
    a(c.exports, 'Green1', function() {
        return _f;
    }), a(c.exports, 'Green2', function() {
        return _g;
    }), a(c.exports, 'Orange', function() {
        return _h;
    });
    var e = b('UaUBz0');
    const _f = {
            imageId: 'button_device_green_1',
            imageUrl: (0, e.default)('devices/button/button-device-green-1.png')
        },
        _g = {
            imageId: 'button_device_green_2',
            imageUrl: (0, e.default)('devices/button/button-device-green-2.png')
        },
        _h = {
            imageId: 'button_device_orange',
            imageUrl: (0, e.default)('devices/button/button-device-orange.png')
        };
}), b.register('jNIkP', function(c, d) {
    let e;
    var f;
    a(c.exports, 'ButtonState', function() {
        return e;
    }), (f = e || (e = {})).active = 'active', f.pressed = 'pressed', f.inactive = 'inactive';
}), b.register('9tJOw', function(c, d) {
    a(c.exports, 'Messages', function() {
        return _e;
    });
    let _e;
    (_e || (_e = {})).interacted = 'interacted';
});