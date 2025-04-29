function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}

function a(b) {
    return b && b.__esModule ? b.default : b;
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('Vbc2Q', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _l(b.exports, 'default', function() {
        return _l;
    });
    var e = a('1bFPu'),
        f = a('I35Ay'),
        g = a('S95UR'),
        h = a('sCbH9'),
        i = a('/pbxo'),
        j = a('9tz3H');
    class k extends f.default {
        constructor(_l) {
            if (super(_l), (0, e.default)(this, 'textScale', 1), (0, e.default)(this, 'onStateChange', _l => {
                    var m;
                    'counter' === _l && (null === (m = this.text) || void 0 === m ? void 0 : m.view) && (this.text.view.setText(this.state.counter + ''), this.updateTextScale(), this.tweens.add({
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
            var m, n;
            this.bg = this.parts.add.sprite(g.BackgroundAsset), this.frame = this.parts.add.sprite(g.FrameAsset), this.bg.view.setScale(0.5), this.frame.view.setScale(0.5);
            const o = (null !== (n = null !== (m = this.state.counter) && void 0 !== m ? m : this.options.startingValue) && void 0 !== n ? n : 0) + '';
            this.text = this.parts.add.text({
                y: 2,
                textStyle: {
                    fontFamily: 'Fugaz One'
                },
                text: o
            }), this.text.view.alpha = 0, (0, h.default)({
                familyName: 'Fugaz One',
                onLoad: () => {
                    this.isDestroyed || (this.text.view.setFontFamily('\'Fugaz One\''), this.text.view.alpha = 1);
                }
            }), this.updateTextScale();
        }
    }
    var _l = k;
}), a.register('S95UR', function(b, c) {
    e(b.exports, 'FrameAsset', function() {
        return _e;
    }), e(b.exports, 'BackgroundAsset', function() {
        return _f;
    });
    var d = a('2Xvuf');
    const _e = {
            imageId: (0, d.default)('devices/counter/frame.png'),
            imageUrl: (0, d.default)('devices/counter/frame.png')
        },
        _f = {
            imageId: (0, d.default)('devices/counter/background.png'),
            imageUrl: (0, d.default)('devices/counter/background.png')
        };
}), a.register('sCbH9', function(b, c) {
    e(b.exports, 'isGoogleFontLoaded', function() {
        return _f;
    }), e(b.exports, 'default', function() {
        return _g;
    });
    var d = a('ARAVZ');
    const e = [],
        _f = e => e.includes(e);
    var _g = e => {
        const {
            familyName: h,
            onLoad: i
        } = e;
        e.includes(h) ? i && i() : t(d).load({
            google: {
                families: [`${ h }:400,700`]
            },
            fontactive: e => {
                e.includes(e) || e.push(e), h === e && i && i();
            }
        });
    };
});