function e(e, t, i, n) {
    Object.defineProperty(e, t, {
        get: i,
        set: n,
        enumerable: !0,
        configurable: !0
    })
}
var t = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
t.register("aYHOi", (function(i, n) {
    var s;
    s = i.exports, Object.defineProperty(s, "__esModule", {
        value: !0,
        configurable: !0
    }), e(i.exports, "default", (function() {
        return p
    }));
    var r = t("divCp"),
        o = t("9oxA4"),
        a = t("6Tpu2"),
        d = t("4uojN"),
        u = t("bNmF9"),
        h = t("1G6VU"),
        f = t("bIzmX");
    class l extends u.default {
        constructor(e) {
            super(e), (0, r.default)(this, "addTeleporterAnim", (() => {
                if (!1 === this.options.visibleInGame && ((0, a.InGamePhase)() || (0, d.isPublishedVersion)())) return;
                const e = (0, o.default)({
                    width: f.Consts.FRAME_WIDTH,
                    height: f.Consts.FRAME_HEIGHT,
                    newWidth: f.Consts.TELEPORTER_WIDTH
                });
                this.parts.add.animatedSprite({
                    ...h.SpritesheetAsset,
                    displayWidth: e.width,
                    displayHeight: e.height
                })
            })), this.boundingBox.setHardcoded({
                width: 175,
                height: 175
            }), this.addTeleporterAnim()
        }
    }
    var p = l
})), t.register("9oxA4", (function(t, i) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = e => {
        const t = e.newWidth / e.width;
        return {
            height: e.height * t,
            width: e.width * t
        }
    }
})), t.register("1G6VU", (function(i, n) {
    e(i.exports, "SpritesheetAsset", (function() {
        return o
    }));
    var s = t("alREA"),
        r = t("bIzmX");
    (0, s.default)("devices/teleporter/base.png");
    const o = {
        spritesheetUrl: (0, s.default)("devices/teleporter/anim.png"),
        spritesheetId: "__TELEPORTER_SPRITESHEET",
        frameWidth: r.Consts.FRAME_WIDTH,
        frameHeight: r.Consts.FRAME_HEIGHT,
        animations: [{
            animName: "TELEPORTER_ANIM",
            animFrames: {
                start: 0,
                end: 17
            },
            yoyo: !0,
            frameRate: 12
        }]
    }
})), t.register("bIzmX", (function(t, i) {
    e(t.exports, "Consts", (function() {
        return n
    }));
    const n = {
        TELEPORTER_WIDTH: 168,
        FRAME_WIDTH: 258,
        FRAME_HEIGHT: 234
    }
}));