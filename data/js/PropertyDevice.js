function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('APryM', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _o(b.exports, 'default', function() {
        return _o;
    });
    var e = a('1bFPu'),
        f = a('LP9lx'),
        g = a('/pbxo'),
        h = a('I35Ay'),
        i = a('9tz3H'),
        j = a('dTXti'),
        k = a('+uQv7'),
        l = a('2Xvuf'),
        m = a('iWivW');
    class n extends h.default {
        setStoredValue() {
            this.options.valueType === f.PrimitiveType.boolean ? m.default.me.properties.set(this.options.propertyName, this.state.valueBoolean) : this.options.valueType === f.PrimitiveType.number ? m.default.me.properties.set(this.options.propertyName, this.state.valueNumber) : this.options.valueType === f.PrimitiveType.string && m.default.me.properties.set(this.options.propertyName, this.state.valueString);
        }
        destroy(_o) {
            super.destroy(_o), m.default.me.properties.delete(this.options.propertyName);
        }
        constructor(o) {
            if (super(o), (0, e.default)(this, 'onStateChange', o => {
                    (this.options.valueType === f.PrimitiveType.boolean && 'valueBoolean' === o || this.options.valueType === f.PrimitiveType.number && 'valueNumber' === o || this.options.valueType === f.PrimitiveType.string && 'valueString' === o) && this.setStoredValue();
                }), this.setStoredValue(), (0, g.InGamePhase)() || (0, i.isPublishedVersion)())
                return;
            const p = j.default.Overlay;
            new(0, k.default)({
                device: this,
                baseColor: p.baseColor,
                boxColor: p.boxColor,
                content: {
                    text: {
                        text: '' === this.options.propertyName ? 'property' : this.options.propertyName,
                        shiftY: 15
                    },
                    icon: {
                        image: (0, l.default)('devices/property/icon.png'),
                        scale: 0.5,
                        shiftY: -15
                    }
                }
            });
        }
    }
    var _o = n;
}), a.register('LP9lx', function(b, c) {
    let d;
    var e;
    e(b.exports, 'PrimitiveType', function() {
        return d;
    }), (e = d || (d = {})).boolean = 'boolean', e.number = 'number', e.string = 'string';
});