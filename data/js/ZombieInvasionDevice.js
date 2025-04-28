function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('uy68r', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _m(b.exports, 'default', function() {
        return _m;
    });
    var e = a('R2Ucl10'),
        f = a('9tz3H'),
        g = a('/pbxo'),
        h = a('I35Ay'),
        i = a('+uQv7'),
        j = a('dTXti'),
        k = a('IFO6W13');
    class l extends h.default {
        constructor(_m) {
            if (super(_m), (0, g.InPreGamePhase)() && (0, f.isSavedVersion)()) {
                const n = j.default.Zombies,
                    o = (0, e.FetchOptionSchemaProperty)(this, 'targetRadius');
                this.visualEditing.add.circle({
                    angle: 0,
                    rotable: !1,
                    radius: this.options.targetRadius,
                    minRadius: o.min,
                    maxRadius: o.max,
                    onChange: n => {
                        (0, k.ReplaceVisualEditingPreview)(n.x, n.y, {
                            targetRadius: n.radius
                        });
                    }
                }), new(0, i.default)({
                    device: this,
                    baseColor: n.baseColor,
                    boxColor: n.boxColor,
                    content: {
                        text: {
                            text: 'Zombie\nInvasion'
                        }
                    }
                });
            }
        }
    }
    var _m = l;
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
});