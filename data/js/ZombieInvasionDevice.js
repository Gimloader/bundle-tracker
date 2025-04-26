function a(a, b, d, c) {
    Object.defineProperty(a, b, {
        get: d,
        set: c,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('8Nm0G', function(d, c) {
    var c;
    c = d.exports, Object.defineProperty(c, '__esModule', {
        value: !0,
        configurable: !0
    }), a(d.exports, 'default', function() {
        return l;
    });
    var d = b('/Lvpl17'),
        e = b('Bpt+p'),
        f = b('5Ux1a'),
        g = b('sgILU'),
        h = b('phu0d'),
        i = b('Gqspz'),
        j = b('wSwKo5');
    class k extends g.default {
        constructor(a) {
            if (super(a), (0, f.InPreGamePhase)() && (0, e.isSavedVersion)()) {
                const l = i.default.Zombies,
                    m = (0, d.FetchOptionSchemaProperty)(this, 'targetRadius');
                this.visualEditing.add.circle({
                    angle: 0,
                    rotable: !1,
                    radius: this.options.targetRadius,
                    minRadius: m.min,
                    maxRadius: m.max,
                    onChange: l => {
                        (0, j.ReplaceVisualEditingPreview)(l.x, l.y, {
                            targetRadius: l.radius
                        });
                    }
                }), new(0, h.default)({
                    device: this,
                    baseColor: l.baseColor,
                    boxColor: l.boxColor,
                    content: {
                        text: {
                            text: 'Zombie\nInvasion'
                        }
                    }
                });
            }
        }
    }
    var l = m;
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
}), b.register('wSwKo5', function(i, h) {
    a(i.exports, 'ReplaceVisualEditingPreview', function() {
        return g;
    });
    var c = b('2pEsK'),
        d = b('Am0b71'),
        e = b('KDS1x'),
        f = b('83+vO');
    const g = (a, b, i) => {
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
                ...i
            },
            placedByClient: !0,
            state: h.deviceOption.defaultState
        });
    };
}), b.register('Am0b71', function(i, n) {
    a(i.exports, 'default', function() {
        return e;
    });
    var c = b('dAmf5'),
        d = b('jgFbX');
    var e = a => {
        (0, c.default)().worldManager.devices.getDeviceById(a.id) && (0, d.default)(a);
    };
});