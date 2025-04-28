function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('0UIli', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _r(b.exports, 'default', function() {
        return _r;
    });
    var e = a('1bFPu'),
        f = a('9tz3H'),
        g = a('/pbxo'),
        h = a('IFO6W13'),
        i = a('R2Ucl10'),
        j = a('2Xvuf'),
        k = a('1f1YX'),
        l = a('07pQo'),
        m = a('I35Ay'),
        n = a('YVysl'),
        o = a('AtbEP'),
        p = a('kmL8E');
    class q extends m.default {
        constructor(_r) {
            super(_r), (0, e.default)(this, 'onStateChange', _r => {
                (0, g.InPreGamePhase)() || 'active' === _r && (this.state.active ? (this.interactiveZones.setForceDisabled(!1), this.isDown() || this.setButtonState(o.ButtonState.active)) : (this.interactiveZones.setForceDisabled(!0), this.isDown() || this.setButtonState(o.ButtonState.inactive)));
            }), (0, e.default)(this, 'isDown', () => this.currentState === o.ButtonState.pressed), (0, e.default)(this, 'setButtonState', _r => {
                var s, t, u, v, w, x;
                this.currentState = _r, !1 === this.options.visibleInGame && (0, g.InGamePhase)() || (_r === o.ButtonState.pressed && (0, l.playSound)({
                    path: (0, j.default)('devices/button/click.mp3'),
                    volume: (0, k.getVolume)({
                        volume: 0.2,
                        type: k.SoundType.soundEffect
                    })
                }), (null === this || void 0 === this || null === (s = this.active) || void 0 === s ? void 0 : s.view) && (this.active.view.alpha = 0), (null === this || void 0 === this || null === (t = this.pressed) || void 0 === t ? void 0 : t.view) && (this.pressed.view.alpha = 0), (null === this || void 0 === this || null === (u = this.inactive) || void 0 === u ? void 0 : u.view) && (this.inactive.view.alpha = 0), _r === o.ButtonState.active ? (null === this || void 0 === this || null === (v = this.active) || void 0 === v ? void 0 : v.view) && (this.active.view.alpha = 1) : _r === o.ButtonState.inactive ? (null === this || void 0 === this || null === (w = this.inactive) || void 0 === w ? void 0 : w.view) && (this.inactive.view.alpha = 1) : _r === o.ButtonState.pressed && (null === this || void 0 === this || null === (x = this.pressed) || void 0 === x ? void 0 : x.view) && (this.pressed.view.alpha = 1));
            }), (0, e.default)(this, 'setupVisualEditing', () => {
                if (!(0, g.InPreGamePhase)() || !(0, f.isSavedVersion)())
                    return;
                const s = (0, i.FetchOptionSchemaProperty)(this, 'radius'),
                    t = (0, i.FetchOptionSchemaProperty)(this, 'size');
                this.visualEditing.add.circle({
                    radius: this.options.size,
                    angle: -90,
                    minRadius: t.min,
                    maxRadius: t.max,
                    rotable: !1,
                    movable: !1,
                    onChange: s => {
                        (0, h.ReplaceVisualEditingPreview)(s.x, s.y, {
                            size: s.radius
                        });
                    }
                }), this.visualEditing.add.circle({
                    radius: this.options.radius,
                    minRadius: s.min,
                    maxRadius: s.max,
                    rotable: !1,
                    onChange: s => {
                        (0, h.ReplaceVisualEditingPreview)(s.x, s.y, {
                            radius: s.radius
                        });
                    }
                });
            }), this.setupVisualEditing(), (!0 === this.options.visibleInGame || (0, g.InPreGamePhase)() && (0, f.isSavedVersion)()) && (this.colliders.add.circle({
                x: 0,
                y: -10 * this.options.size / 50,
                r: 45 * this.options.size / 50
            }), this.colliders.add.box({
                x: 0,
                y: 0,
                w: 150 * this.options.size / 50,
                h: 80 * this.options.size / 50
            }), this.active = this.parts.add.sprite({
                ...n.Green1,
                onReady: _r => {
                    _r.view.setScale(this.options.size / 50);
                }
            }), this.pressed = this.parts.add.sprite({
                ...n.Green2,
                onReady: _r => {
                    _r.view.setScale(this.options.size / 50);
                }
            }), this.inactive = this.parts.add.sprite({
                ...n.Orange,
                onReady: _r => {
                    _r.view.setScale(this.options.size / 50);
                }
            }), (0, g.InPreGamePhase)() && this.options.activeOnStart || (0, g.InGamePhase)() && this.state.active ? this.setButtonState(o.ButtonState.active) : this.setButtonState(o.ButtonState.inactive));
            const s = 2 * Math.max(1.3 * this.options.size, this.options.radius);
            this.boundingBox.setHardcoded({
                width: s,
                height: s
            }), this.interactiveZone = this.interactiveZones.add.circle({
                r: this.options.radius
            }), this.interactiveZones.setForceDisabled(!this.state.active), this.interactiveZones.setInfo({
                message: this.options.guiMessage,
                allowedToInteract: !0,
                duration: this.options.interactionDuration
            }), this.interactiveZones.setCanInteractThroughColliders(!this.options.visibleInGame), this.interactiveZones.onInteraction = () => {
                this.sendToServerDevice(p.Messages.interacted), this.setButtonState(o.ButtonState.pressed), setTimeout(() => {
                    this.state.active ? this.setButtonState(o.ButtonState.active) : this.setButtonState(o.ButtonState.inactive);
                }, 200);
            };
        }
    }
    var _r = q;
}), a.register('IFO6W13', function(b, c) {
    t(b.exports, 'ReplaceVisualEditingPreview', function() {
        return _h;
    });
    var d = a('HqwPM'),
        e = a('+oovY4'),
        f = a('A17vD'),
        g = a('HXXiu');
    const _h = (t, a, b) => {
        const i = (0, g.FetchVisualEditingPreview)(),
            j = (0, f.FetchCurrentlyEditedDevice)();
        if (!j || !i)
            return;
        const k = j.layers.isOnNaturalDepth() ? void 0 : a + j.layers.getDepthShift();
        (0, e.default)({
            deviceOption: i.deviceOption,
            id: d.VisualEditingConstants.previewId,
            x: t,
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
    t(b.exports, 'default', function() {
        return _f;
    });
    var d = a('D5xLI'),
        e = a('aIyMH');
    var _f = t => {
        (0, d.default)().worldManager.devices.getDeviceById(t.id) && (0, e.default)(t);
    };
}), a.register('R2Ucl10', function(b, c) {
    t(b.exports, 'FetchOptionSchemaProperty', function() {
        return _d;
    });
    const _d = (t, b) => {
        var e, f, g;
        const h = t.deviceOption.optionSchema.options.find(t => t.key === b);
        return {
            min: null === (e = null == h ? void 0 : h.option.props) || void 0 === e ? void 0 : e.min,
            max: null === (f = null == h ? void 0 : h.option.props) || void 0 === f ? void 0 : f.max,
            step: null === (g = null == h ? void 0 : h.option.props) || void 0 === g ? void 0 : g.step
        };
    };
}), a.register('YVysl', function(b, c) {
    t(b.exports, 'Green1', function() {
        return _e;
    }), t(b.exports, 'Green2', function() {
        return _f;
    }), t(b.exports, 'Orange', function() {
        return _g;
    });
    var d = a('2Xvuf');
    const _e = {
            imageId: 'button_device_green_1',
            imageUrl: (0, d.default)('devices/button/button-device-green-1.png')
        },
        _f = {
            imageId: 'button_device_green_2',
            imageUrl: (0, d.default)('devices/button/button-device-green-2.png')
        },
        _g = {
            imageId: 'button_device_orange',
            imageUrl: (0, d.default)('devices/button/button-device-orange.png')
        };
}), a.register('AtbEP', function(b, c) {
    let d;
    var e;
    t(b.exports, 'ButtonState', function() {
        return d;
    }), (e = d || (d = {})).active = 'active', e.pressed = 'pressed', e.inactive = 'inactive';
}), a.register('kmL8E', function(b, c) {
    t(b.exports, 'Messages', function() {
        return _d;
    });
    let _d;
    (_d || (_d = {})).interacted = 'interacted';
});