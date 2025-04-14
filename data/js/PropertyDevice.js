function e(e, t, i, o) {
    Object.defineProperty(e, t, {
        get: i,
        set: o,
        enumerable: !0,
        configurable: !0
    })
}
var t = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
t.register("04rSz", (function(i, o) {
    var r;
    r = i.exports, Object.defineProperty(r, "__esModule", {
        value: !0,
        configurable: !0
    }), e(i.exports, "default", (function() {
        return m
    }));
    var s = t("divCp"),
        n = t("9avGs"),
        a = t("6Tpu2"),
        p = t("bNmF9"),
        l = t("4uojN"),
        u = t("h6SIm"),
        d = t("dPNN3"),
        f = t("alREA"),
        v = t("iRjsB");
    class y extends p.default {
        setStoredValue() {
            this.options.valueType === n.PrimitiveType.boolean ? v.default.me.properties.set(this.options.propertyName, this.state.valueBoolean) : this.options.valueType === n.PrimitiveType.number ? v.default.me.properties.set(this.options.propertyName, this.state.valueNumber) : this.options.valueType === n.PrimitiveType.string && v.default.me.properties.set(this.options.propertyName, this.state.valueString)
        }
        destroy(e) {
            super.destroy(e), v.default.me.properties.delete(this.options.propertyName)
        }
        constructor(e) {
            if (super(e), (0, s.default)(this, "onStateChange", (e => {
                    (this.options.valueType === n.PrimitiveType.boolean && "valueBoolean" === e || this.options.valueType === n.PrimitiveType.number && "valueNumber" === e || this.options.valueType === n.PrimitiveType.string && "valueString" === e) && this.setStoredValue()
                })), this.setStoredValue(), (0, a.InGamePhase)() || (0, l.isPublishedVersion)()) return;
            const t = u.default.Overlay;
            new(0, d.default)({
                device: this,
                baseColor: t.baseColor,
                boxColor: t.boxColor,
                content: {
                    text: {
                        text: "" === this.options.propertyName ? "property" : this.options.propertyName,
                        shiftY: 15
                    },
                    icon: {
                        image: (0, f.default)("devices/property/icon.png"),
                        scale: .5,
                        shiftY: -15
                    }
                }
            })
        }
    }
    var m = y
})), t.register("9avGs", (function(t, i) {
    let o;
    var r;
    e(t.exports, "PrimitiveType", (function() {
        return o
    })), (r = o || (o = {})).boolean = "boolean", r.number = "number", r.string = "string"
}));