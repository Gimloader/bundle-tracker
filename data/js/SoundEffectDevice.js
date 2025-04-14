function e(e, o, t, n) {
    Object.defineProperty(e, o, {
        get: t,
        set: n,
        enumerable: !0,
        configurable: !0
    })
}
var o = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
o.register("eQnrj", (function(t, n) {
    var a;
    a = t.exports, Object.defineProperty(a, "__esModule", {
        value: !0,
        configurable: !0
    }), e(t.exports, "default", (function() {
        return m
    }));
    var r = o("divCp"),
        l = o("3ydpO"),
        i = o("alREA"),
        s = o("lnD8D"),
        u = o("fhnJp"),
        d = o("4uojN"),
        f = o("6Tpu2"),
        p = o("3iPiZ"),
        c = o("jVQO4"),
        y = o("bNmF9"),
        h = o("dPNN3"),
        g = o("h6SIm"),
        b = o("iovRh");
    class v extends y.default {
        play() {
            this.options.audioUrl && (this.options.characterType !== b.SoundEffectCharacterType.gameOwner || (0, s.AmIGameOwner)()) && (0, c.playSound)({
                path: (0, l.GetSoundUrl)(this.options.audioUrl),
                volume: (0, p.getVolume)({
                    volume: this.options.volume / 100,
                    type: p.SoundType.soundEffect
                })
            })
        }
        constructor(e) {
            if (super(e), (0, r.default)(this, "onMessage", (e => {
                    e.key === b.Messages.play && e.data.characterId === (0, u.default)() && this.play()
                })), (0, f.InPreGamePhase)() && (0, d.isSavedVersion)()) {
                const e = g.default.Utility;
                new(0, h.default)({
                    device: this,
                    baseColor: e.baseColor,
                    boxColor: e.boxColor,
                    content: {
                        icon: {
                            image: (0, i.default)("devices/sound_effect/icon.png")
                        }
                    }
                })
            }
        }
    }
    var m = v
})), o.register("iovRh", (function(o, t) {
    let n;
    let a;
    var r;
    e(o.exports, "Messages", (function() {
        return n
    })), e(o.exports, "SoundEffectCharacterType", (function() {
        return a
    })), (n || (n = {})).play = "play", (r = a || (a = {})).all = "all", r.gameOwner = "gameOwner"
}));