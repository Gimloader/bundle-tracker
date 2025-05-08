function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('.....', function (c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'default', function () {
        return _n;
    });
    var f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....'), k = b('.....'), l = b('.....');
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
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _e;
    });
    var _e = f => {
        const g = f.newWidth / f.width;
        return {
            height: f.height * g,
            width: f.width * g
        };
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'SpritesheetAsset', function () {
        return _g;
    });
    var e = b('.....'), f = b('.....');
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
}), b.register('.....', function (c, d) {
    a(c.exports, 'Consts', function () {
        return _e;
    });
    const _e = {
        TELEPORTER_WIDTH: 168,
        FRAME_WIDTH: 258,
        FRAME_HEIGHT: 234
    };
});