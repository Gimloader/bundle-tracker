function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('B1tV8', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _m(b.exports, 'default', function() {
        return _m;
    });
    var e = a('1bFPu'),
        f = a('SINjC2'),
        g = a('/pbxo'),
        h = a('9tz3H'),
        i = a('I35Ay'),
        j = a('meQR6'),
        k = a('Bt5KN');
    class l extends i.default {
        constructor(_m) {
            super(_m), (0, e.default)(this, 'addTeleporterAnim', () => {
                if (!1 === this.options.visibleInGame && ((0, g.InGamePhase)() || (0, h.isPublishedVersion)()))
                    return;
                const n = (0, f.default)({
                    width: k.Consts.FRAME_WIDTH,
                    height: k.Consts.FRAME_HEIGHT,
                    newWidth: k.Consts.TELEPORTER_WIDTH
                });
                this.parts.add.animatedSprite({
                    ...j.SpritesheetAsset,
                    displayWidth: n.width,
                    displayHeight: n.height
                });
            }), this.boundingBox.setHardcoded({
                width: 175,
                height: 175
            }), this.addTeleporterAnim();
        }
    }
    var _m = l;
}), a.register('SINjC2', function(b, c) {
    e(b.exports, 'default', function() {
        return _d;
    });
    var _d = e => {
        const e = e.newWidth / e.width;
        return {
            height: e.height * e,
            width: e.width * e
        };
    };
}), a.register('meQR6', function(b, c) {
    e(b.exports, 'SpritesheetAsset', function() {
        return _f;
    });
    var d = a('2Xvuf'),
        e = a('Bt5KN');
    (0, d.default)('devices/teleporter/base.png');
    const _f = {
        spritesheetUrl: (0, d.default)('devices/teleporter/anim.png'),
        spritesheetId: '__TELEPORTER_SPRITESHEET',
        frameWidth: e.Consts.FRAME_WIDTH,
        frameHeight: e.Consts.FRAME_HEIGHT,
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
}), a.register('Bt5KN', function(b, c) {
    e(b.exports, 'Consts', function() {
        return _d;
    });
    const _d = {
        TELEPORTER_WIDTH: 168,
        FRAME_WIDTH: 258,
        FRAME_HEIGHT: 234
    };
});