function a(a, b, i, c) {
    Object.defineProperty(a, b, {
        get: i,
        set: c,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('JIaOs', function(i, c) {
    var c;
    c = i.exports, Object.defineProperty(c, '__esModule', {
        value: !0,
        configurable: !0
    }), a(i.exports, 'default', function() {
        return l;
    });
    var d = b('UM8oI'),
        e = b('VkIHd0'),
        f = b('5Ux1a'),
        g = b('Bpt+p'),
        h = b('sgILU'),
        i = b('NT/OX'),
        j = b('Y2Xz8');
    class k extends h.default {
        constructor(a) {
            super(a), (0, d.default)(this, 'addTeleporterAnim', () => {
                if (!1 === this.options.visibleInGame && ((0, f.InGamePhase)() || (0, g.isPublishedVersion)()))
                    return;
                const l = (0, e.default)({
                    width: j.Consts.FRAME_WIDTH,
                    height: j.Consts.FRAME_HEIGHT,
                    newWidth: j.Consts.TELEPORTER_WIDTH
                });
                this.parts.add.animatedSprite({
                    ...i.SpritesheetAsset,
                    displayWidth: l.width,
                    displayHeight: l.height
                });
            }), this.boundingBox.setHardcoded({
                width: 175,
                height: 175
            }), this.addTeleporterAnim();
        }
    }
    var l = m;
}), b.register('VkIHd0', function(b, i) {
    a(b.exports, 'default', function() {
        return c;
    });
    var c = a => {
        const d = a.newWidth / a.width;
        return {
            height: a.height * d,
            width: a.width * d
        };
    };
}), b.register('NT/OX', function(i, c) {
    a(i.exports, 'SpritesheetAsset', function() {
        return e;
    });
    var c = b('JJQ0+'),
        d = b('Y2Xz8');
    (0, c.default)('devices/teleporter/base.png');
    const e = {
        spritesheetUrl: (0, c.default)('devices/teleporter/anim.png'),
        spritesheetId: '__TELEPORTER_SPRITESHEET',
        frameWidth: d.Consts.FRAME_WIDTH,
        frameHeight: d.Consts.FRAME_HEIGHT,
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
}), b.register('Y2Xz8', function(b, i) {
    a(b.exports, 'Consts', function() {
        return c;
    });
    const c = {
        TELEPORTER_WIDTH: 168,
        FRAME_WIDTH: 258,
        FRAME_HEIGHT: 234
    };
});