function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('/XdL1', function(c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'default', function() {
        return _n;
    });
    var f = b('uc4mA17'),
        g = b('hycyg'),
        h = b('UkCpC'),
        i = b('ltxDW'),
        j = b('73Aki'),
        k = b('AHhkR'),
        l = b('u/WlI21');
    class m extends i.default {
        constructor(n) {
            if (super(n), (0, h.InPreGamePhase)() && (0, g.isSavedVersion)()) {
                const o = k.default.Zombies,
                    p = (0, f.FetchOptionSchemaProperty)(this, 'targetRadius');
                this.visualEditing.add.circle({
                    angle: 0,
                    rotable: !1,
                    radius: this.options.targetRadius,
                    minRadius: p.min,
                    maxRadius: p.max,
                    onChange: o => {
                        (0, l.ReplaceVisualEditingPreview)(o.x, o.y, {
                            targetRadius: o.radius
                        });
                    }
                }), new(0, j.default)({
                    device: this,
                    baseColor: o.baseColor,
                    boxColor: o.boxColor,
                    content: {
                        text: {
                            text: 'Zombie\nInvasion'
                        }
                    }
                });
            }
        }
    }
    var _n = m;
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
});