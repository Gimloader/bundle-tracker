var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('H7wlM', function(b, c) {
    var d, e, f, g, h;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), e = b.exports, f = 'default', g = function() {
        return _o;
    }, Object.defineProperty(e, f, {
        get: g,
        set: h,
        enumerable: !0,
        configurable: !0
    });
    var i = a('s/YA9'),
        j = a('fI6of'),
        k = a('hycyg'),
        l = a('UkCpC'),
        m = a('ltxDW');
    class n extends m.default {
        constructor(o) {
            super(o), (0, i.default)(this, 'onDestroy', () => {
                j.default.editing.accessPoints.delete(this.id);
            }), (0, l.InPreGamePhase)() && (0, k.isSavedVersion)() && (this.isPreview || j.default.editing.accessPoints.set(this.id, {
                name: this.options.name || '',
                position: {
                    x: this.x,
                    y: this.y
                }
            }), this.parts.add.circle({
                r: 16,
                color: 65280,
                borderColor: 16777215,
                borderWidth: 4,
                alpha: 1,
                borderAlpha: 1
            }));
        }
    }
    var _o = n;
});