function a(a, b, r, s) {
    Object.defineProperty(a, b, {
        get: r,
        set: s,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('BIjv3', function(r, s) {
    var c;
    c = r.exports, Object.defineProperty(c, '__esModule', {
        value: !0,
        configurable: !0
    }), a(r.exports, 'default', function() {
        return q;
    });
    var d = b('UM8oI'),
        e = b('Bpt+p'),
        f = b('5Ux1a'),
        g = b('wSwKo5'),
        h = b('/Lvpl17'),
        i = b('JJQ0+'),
        j = b('Ena4B'),
        k = b('OlpXx'),
        l = b('sgILU'),
        m = b('wQZw2'),
        n = b('4+2h8'),
        o = b('SZ9Pa');
    class p extends l.default {
        constructor(a) {
            super(a), (0, d.default)(this, 'onStateChange', a => {
                (0, f.InPreGamePhase)() || 'active' === a && (this.state.active ? (this.interactiveZones.setForceDisabled(!1), this.isDown() || this.setButtonState(n.ButtonState.active)) : (this.interactiveZones.setForceDisabled(!0), this.isDown() || this.setButtonState(n.ButtonState.inactive)));
            }), (0, d.default)(this, 'isDown', () => this.currentState === n.ButtonState.pressed), (0, d.default)(this, 'setButtonState', a => {
                var q, r, s, t, u, v;
                this.currentState = a, !1 === this.options.visibleInGame && (0, f.InGamePhase)() || (a === n.ButtonState.pressed && (0, k.playSound)({
                    path: (0, i.default)('devices/button/click.mp3'),
                    volume: (0, j.getVolume)({
                        volume: 0.2,
                        type: j.SoundType.soundEffect
                    })
                }), (null === this || void 0 === this || null === (q = this.active) || void 0 === q ? void 0 : q.view) && (this.active.view.alpha = 0), (null === this || void 0 === this || null === (r = this.pressed) || void 0 === r ? void 0 : r.view) && (this.pressed.view.alpha = 0), (null === this || void 0 === this || null === (s = this.inactive) || void 0 === s ? void 0 : s.view) && (this.inactive.view.alpha = 0), a === n.ButtonState.active ? (null === this || void 0 === this || null === (t = this.active) || void 0 === t ? void 0 : t.view) && (this.active.view.alpha = 1) : a === n.ButtonState.inactive ? (null === this || void 0 === this || null === (u = this.inactive) || void 0 === u ? void 0 : u.view) && (this.inactive.view.alpha = 1) : a === n.ButtonState.pressed && (null === this || void 0 === this || null === (v = this.pressed) || void 0 === v ? void 0 : v.view) && (this.pressed.view.alpha = 1));
            }), (0, d.default)(this, 'setupVisualEditing', () => {
                if (!(0, f.InPreGamePhase)() || !(0, e.isSavedVersion)())
                    return;
                const q = (0, h.FetchOptionSchemaProperty)(this, 'radius'),
                    r = (0, h.FetchOptionSchemaProperty)(this, 'size');
                this.visualEditing.add.circle({
                    radius: this.options.size,
                    angle: -90,
                    minRadius: r.min,
                    maxRadius: r.max,
                    rotable: !1,
                    movable: !1,
                    onChange: q => {
                        (0, g.ReplaceVisualEditingPreview)(q.x, q.y, {
                            size: q.radius
                        });
                    }
                }), this.visualEditing.add.circle({
                    radius: this.options.radius,
                    minRadius: q.min,
                    maxRadius: q.max,
                    rotable: !1,
                    onChange: q => {
                        (0, g.ReplaceVisualEditingPreview)(q.x, q.y, {
                            radius: q.radius
                        });
                    }
                });
            }), this.setupVisualEditing(), (!0 === this.options.visibleInGame || (0, f.InPreGamePhase)() && (0, e.isSavedVersion)()) && (this.colliders.add.circle({
                x: 0,
                y: -10 * this.options.size / 50,
                r: 45 * this.options.size / 50
            }), this.colliders.add.box({
                x: 0,
                y: 0,
                w: 150 * this.options.size / 50,
                h: 80 * this.options.size / 50
            }), this.active = this.parts.add.sprite({
                ...m.Green1,
                onReady: a => {
                    a.view.setScale(this.options.size / 50);
                }
            }), this.pressed = this.parts.add.sprite({
                ...m.Green2,
                onReady: a => {
                    a.view.setScale(this.options.size / 50);
                }
            }), this.inactive = this.parts.add.sprite({
                ...m.Orange,
                onReady: a => {
                    a.view.setScale(this.options.size / 50);
                }
            }), (0, f.InPreGamePhase)() && this.options.activeOnStart || (0, f.InGamePhase)() && this.state.active ? this.setButtonState(n.ButtonState.active) : this.setButtonState(n.ButtonState.inactive));
            const q = 2 * Math.max(1.3 * this.options.size, this.options.radius);
            this.boundingBox.setHardcoded({
                width: q,
                height: q
            }), this.interactiveZone = this.interactiveZones.add.circle({
                r: this.options.radius
            }), this.interactiveZones.setForceDisabled(!this.state.active), this.interactiveZones.setInfo({
                message: this.options.guiMessage,
                allowedToInteract: !0,
                duration: this.options.interactionDuration
            }), this.interactiveZones.setCanInteractThroughColliders(!this.options.visibleInGame), this.interactiveZones.onInteraction = () => {
                this.sendToServerDevice(o.Messages.interacted), this.setButtonState(n.ButtonState.pressed), setTimeout(() => {
                    this.state.active ? this.setButtonState(n.ButtonState.active) : this.setButtonState(n.ButtonState.inactive);
                }, 200);
            };
        }
    }
    var q = r;
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
}), b.register('wQZw2', function(i, c) {
    a(i.exports, 'Green1', function() {
        return d;
    }), a(i.exports, 'Green2', function() {
        return e;
    }), a(i.exports, 'Orange', function() {
        return f;
    });
    var c = b('JJQ0+');
    const d = {
            imageId: 'button_device_green_1',
            imageUrl: (0, c.default)('devices/button/button-device-green-1.png')
        },
        e = {
            imageId: 'button_device_green_2',
            imageUrl: (0, c.default)('devices/button/button-device-green-2.png')
        },
        f = {
            imageId: 'button_device_orange',
            imageUrl: (0, c.default)('devices/button/button-device-orange.png')
        };
}), b.register('4+2h8', function(b, i) {
    let c;
    var d;
    a(b.exports, 'ButtonState', function() {
        return c;
    }), (d = c || (c = {})).active = 'active', d.pressed = 'pressed', d.inactive = 'inactive';
}), b.register('SZ9Pa', function(b, i) {
    a(b.exports, 'Messages', function() {
        return c;
    });
    let c;
    (c || (c = {})).interacted = 'interacted';
});