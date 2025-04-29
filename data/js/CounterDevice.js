function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}

function b(c) {
    return c && c.__esModule ? c.default : c;
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('N6Z+0', function(d, e) {
    var f;
    f = d.exports, Object.defineProperty(f, '__esModule', {
        value: !0,
        configurable: !0
    }), a(d.exports, 'default', function() {
        return _n;
    });
    var g = c('s/YA9'),
        h = c('ltxDW'),
        i = c('EcVAG'),
        j = c('bMaPZ2'),
        k = c('UkCpC'),
        l = c('hycyg');
    class m extends h.default {
        constructor(n) {
            if (super(n), (0, g.default)(this, 'textScale', 1), (0, g.default)(this, 'onStateChange', n => {
                    var o;
                    'counter' === n && (null === (o = this.text) || void 0 === o ? void 0 : o.view) && (this.text.view.setText(this.state.counter + ''), this.updateTextScale(), this.tweens.add({
                        targets: [this.text.view],
                        duration: 100,
                        scaleX: 0.8 * this.textScale,
                        scaleY: 0.8 * this.textScale,
                        yoyo: !0
                    }));
                }), (0, g.default)(this, 'updateTextScale', () => {
                    this.textScale = Math.min(3 / this.text.view.text.length, 1), this.text.view.setScale(this.textScale);
                }), ((0, k.InGamePhase)() || (0, l.isPublishedVersion)()) && !this.options.visibleInGame)
                return;
            var o, p;
            this.bg = this.parts.add.sprite(i.BackgroundAsset), this.frame = this.parts.add.sprite(i.FrameAsset), this.bg.view.setScale(0.5), this.frame.view.setScale(0.5);
            const q = (null !== (p = null !== (o = this.state.counter) && void 0 !== o ? o : this.options.startingValue) && void 0 !== p ? p : 0) + '';
            this.text = this.parts.add.text({
                y: 2,
                textStyle: {
                    fontFamily: 'Fugaz One'
                },
                text: q
            }), this.text.view.alpha = 0, (0, j.default)({
                familyName: 'Fugaz One',
                onLoad: () => {
                    this.isDestroyed || (this.text.view.setFontFamily('\'Fugaz One\''), this.text.view.alpha = 1);
                }
            }), this.updateTextScale();
        }
    }
    var _n = m;
}), c.register('EcVAG', function(d, e) {
    a(d.exports, 'FrameAsset', function() {
        return _g;
    }), a(d.exports, 'BackgroundAsset', function() {
        return _h;
    });
    var f = c('UaUBz0');
    const _g = {
            imageId: (0, f.default)('devices/counter/frame.png'),
            imageUrl: (0, f.default)('devices/counter/frame.png')
        },
        _h = {
            imageId: (0, f.default)('devices/counter/background.png'),
            imageUrl: (0, f.default)('devices/counter/background.png')
        };
}), c.register('bMaPZ2', function(d, e) {
    a(d.exports, 'isGoogleFontLoaded', function() {
        return _h;
    }), a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('TptDc');
    const g = [],
        _h = a => g.includes(a);
    var _i = a => {
        const {
            familyName: j,
            onLoad: k
        } = a;
        g.includes(j) ? k && k() : b(f).load({
            google: {
                families: [`${ j }:400,700`]
            },
            fontactive: a => {
                g.includes(a) || g.push(a), j === a && k && k();
            }
        });
    };
});