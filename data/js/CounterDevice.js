function a(a, b, c, n) {
    Object.defineProperty(a, b, {
        get: c,
        set: n,
        enumerable: !0,
        configurable: !0
    });
}

function b(a) {
    return a && a.__esModule ? a.default : a;
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('S0MD9', function(b, n) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), a(b.exports, 'default', function() {
        return l;
    });
    var e = c('UM8oI'),
        f = c('sgILU'),
        g = c('X1QGl'),
        h = c('crVjo2'),
        i = c('5Ux1a'),
        j = c('Bpt+p');
    class k extends f.default {
        constructor(a) {
            if (super(a), (0, e.default)(this, 'textScale', 1), (0, e.default)(this, 'onStateChange', a => {
                    var l;
                    'counter' === a && (null === (l = this.text) || void 0 === l ? void 0 : l.view) && (this.text.view.setText(this.state.counter + ''), this.updateTextScale(), this.tweens.add({
                        targets: [this.text.view],
                        duration: 100,
                        scaleX: 0.8 * this.textScale,
                        scaleY: 0.8 * this.textScale,
                        yoyo: !0
                    }));
                }), (0, e.default)(this, 'updateTextScale', () => {
                    this.textScale = Math.min(3 / this.text.view.text.length, 1), this.text.view.setScale(this.textScale);
                }), ((0, i.InGamePhase)() || (0, j.isPublishedVersion)()) && !this.options.visibleInGame)
                return;
            var l, m;
            this.bg = this.parts.add.sprite(g.BackgroundAsset), this.frame = this.parts.add.sprite(g.FrameAsset), this.bg.view.setScale(0.5), this.frame.view.setScale(0.5);
            const n = (null !== (m = null !== (l = this.state.counter) && void 0 !== l ? l : this.options.startingValue) && void 0 !== m ? m : 0) + '';
            this.text = this.parts.add.text({
                y: 2,
                textStyle: {
                    fontFamily: 'Fugaz One'
                },
                text: n
            }), this.text.view.alpha = 0, (0, h.default)({
                familyName: 'Fugaz One',
                onLoad: () => {
                    this.isDestroyed || (this.text.view.setFontFamily('\'Fugaz One\''), this.text.view.alpha = 1);
                }
            }), this.updateTextScale();
        }
    }
    var l = m;
}), c.register('X1QGl', function(b, i) {
    a(b.exports, 'FrameAsset', function() {
        return e;
    }), a(b.exports, 'BackgroundAsset', function() {
        return f;
    });
    var d = c('JJQ0+');
    const e = {
            imageId: (0, d.default)('devices/counter/frame.png'),
            imageUrl: (0, d.default)('devices/counter/frame.png')
        },
        f = {
            imageId: (0, d.default)('devices/counter/background.png'),
            imageUrl: (0, d.default)('devices/counter/background.png')
        };
}), c.register('crVjo2', function(i, s) {
    a(i.exports, 'isGoogleFontLoaded', function() {
        return f;
    }), a(i.exports, 'default', function() {
        return g;
    });
    var d = c('2qGsE');
    const e = [],
        f = a => e.includes(a);
    var g = a => {
        const {
            familyName: h,
            onLoad: i
        } = j;
        e.includes(h) ? i && i() : b(d).load({
            google: {
                families: [`${ h }:400,700`]
            },
            fontactive: j => {
                e.includes(j) || e.push(j), h === j && i && i();
            }
        });
    };
});