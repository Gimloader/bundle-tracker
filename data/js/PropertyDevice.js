function a(a, b, i, c) {
    Object.defineProperty(a, b, {
        get: i,
        set: c,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('SFCtr', function(i, c) {
    var c;
    c = i.exports, Object.defineProperty(c, '__esModule', {
        value: !0,
        configurable: !0
    }), a(i.exports, 'default', function() {
        return n;
    });
    var d = b('UM8oI'),
        e = b('9618n'),
        f = b('5Ux1a'),
        g = b('sgILU'),
        h = b('Bpt+p'),
        i = b('Gqspz'),
        j = b('phu0d'),
        k = b('JJQ0+'),
        l = b('7Sbqr');
    class m extends g.default {
        setStoredValue() {
            this.options.valueType === e.PrimitiveType.boolean ? l.default.me.properties.set(this.options.propertyName, this.state.valueBoolean) : this.options.valueType === e.PrimitiveType.number ? l.default.me.properties.set(this.options.propertyName, this.state.valueNumber) : this.options.valueType === e.PrimitiveType.string && l.default.me.properties.set(this.options.propertyName, this.state.valueString);
        }
        destroy(a) {
            super.destroy(a), l.default.me.properties.delete(this.options.propertyName);
        }
        constructor(a) {
            if (super(a), (0, d.default)(this, 'onStateChange', a => {
                    (this.options.valueType === e.PrimitiveType.boolean && 'valueBoolean' === a || this.options.valueType === e.PrimitiveType.number && 'valueNumber' === a || this.options.valueType === e.PrimitiveType.string && 'valueString' === a) && this.setStoredValue();
                }), this.setStoredValue(), (0, f.InGamePhase)() || (0, h.isPublishedVersion)())
                return;
            const n = i.default.Overlay;
            new(0, j.default)({
                device: this,
                baseColor: n.baseColor,
                boxColor: n.boxColor,
                content: {
                    text: {
                        text: '' === this.options.propertyName ? 'property' : this.options.propertyName,
                        shiftY: 15
                    },
                    icon: {
                        image: (0, k.default)('devices/property/icon.png'),
                        scale: 0.5,
                        shiftY: -15
                    }
                }
            });
        }
    }
    var n = o;
}), b.register('9618n', function(b, i) {
    let c;
    var d;
    a(b.exports, 'PrimitiveType', function() {
        return c;
    }), (d = c || (c = {})).boolean = 'boolean', d.number = 'number', d.string = 'string';
});