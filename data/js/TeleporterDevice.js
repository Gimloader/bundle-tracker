function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('wPe2l', function(c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'default', function() {
        return _n;
    });
    var f = b('s/YA9'),
        g = b('ktWA02'),
        h = b('UkCpC'),
        i = b('hycyg'),
        j = b('ltxDW'),
        k = b('W2yHY'),
        l = b('QRt7U');
    class m extends j.default {
        constructor(n) {
            super(n), (0, f.default)(this, 'addTeleporterAnim', () => {
                if (!1 === this.options.visibleInGame && ((0, h.InGamePhase)() || (0, i.isPublishedVersion)()))
                    return;
                const o = (0, g.default)({
                    width: l.Consts.FRAME_WIDTH,
                    height: l.Consts.FRAME_HEIGHT,
                    newWidth: l.Consts.TELEPORTER_WIDTH
                });
                this.parts.add.animatedSprite({
                    ...k.SpritesheetAsset,
                    displayWidth: o.width,
                    displayHeight: o.height
                });
            }), this.boundingBox.setHardcoded({
                width: 175,
                height: 175
            }), this.addTeleporterAnim();
        }
    }
    var _n = m;
}), b.register('ktWA02', function(c, d) {
    a(c.exports, 'default', function() {
        return _e;
    });
    var _e = a => {
        const f = a.newWidth / a.width;
        return {
            height: a.height * f,
            width: a.width * f
        };
    };
}), b.register('W2yHY', function(c, d) {
    a(c.exports, 'SpritesheetAsset', function() {
        return _g;
    });
    var e = b('UaUBz0'),
        f = b('QRt7U');
    (0, e.default)('devices/teleporter/base.png');
    const _g = {
        spritesheetUrl: (0, e.default)('devices/teleporter/anim.png'),
        spritesheetId: '__TELEPORTER_SPRITESHEET',
        frameWidth: f.Consts.FRAME_WIDTH,
        frameHeight: f.Consts.FRAME_HEIGHT,
        animations: [{
            animName: 'TELEPORTER_ANIM',
            animFrames: {
                start: 0,
                end: 17
            },
            yoyo: !0,
            frameRate: 12
        }]
    };
}), b.register('QRt7U', function(c, d) {
    a(c.exports, 'Consts', function() {
        return _e;
    });
    const _e = {
        TELEPORTER_WIDTH: 168,
        FRAME_WIDTH: 258,
        FRAME_HEIGHT: 234
    };
});