function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('.....', function(c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'default', function() {
        return _p;
    });
    var f = b('.....'),
        g = b('.....'),
        h = b('.....'),
        i = b('.....'),
        j = b('.....'),
        k = b('.....'),
        l = b('.....'),
        m = b('.....'),
        n = b('.....');
    class o extends i.default {
        setStoredValue() {
            this.options.valueType === g.PrimitiveType.boolean ? n.default.me.properties.set(this.options.propertyName, this.state.valueBoolean) : this.options.valueType === g.PrimitiveType.number ? n.default.me.properties.set(this.options.propertyName, this.state.valueNumber) : this.options.valueType === g.PrimitiveType.string && n.default.me.properties.set(this.options.propertyName, this.state.valueString);
        }
        destroy(p) {
            super.destroy(p), n.default.me.properties.delete(this.options.propertyName);
        }
        constructor(p) {
            if (super(p), (0, f.default)(this, 'onStateChange', q => {
                    (this.options.valueType === g.PrimitiveType.boolean && 'valueBoolean' === q || this.options.valueType === g.PrimitiveType.number && 'valueNumber' === q || this.options.valueType === g.PrimitiveType.string && 'valueString' === q) && this.setStoredValue();
                }), this.setStoredValue(), (0, h.InGamePhase)() || (0, j.isPublishedVersion)())
                return;
            const q = k.default.Overlay;
            new(0, l.default)({
                device: this,
                baseColor: q.baseColor,
                boxColor: q.boxColor,
                content: {
                    text: {
                        text: '' === this.options.propertyName ? 'property' : this.options.propertyName,
                        shiftY: 15
                    },
                    icon: {
                        image: (0, m.default)('devices/property/icon.png'),
                        scale: 0.5,
                        shiftY: -15
                    }
                }
            });
        }
    }
    var _p = o;
}), b.register('.....', function(c, d) {
    let e;
    var f;
    a(c.exports, 'PrimitiveType', function() {
        return e;
    }), (f = e || (e = {})).boolean = 'boolean', f.number = 'number', f.string = 'string';
});