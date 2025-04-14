var e = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
e.register("icsZG", (function(t, o) {
    var s, i, a, r, n;
    s = t.exports, Object.defineProperty(s, "__esModule", {
        value: !0,
        configurable: !0
    }), i = t.exports, a = "default", r = function() {
        return m
    }, Object.defineProperty(i, a, {
        get: r,
        set: n,
        enumerable: !0,
        configurable: !0
    });
    var l = e("divCp"),
        u = e("iRjsB"),
        f = e("alREA"),
        d = e("4uojN"),
        c = e("6Tpu2"),
        h = e("bNmF9"),
        p = e("dPNN3"),
        b = e("h6SIm");
    class g extends h.default {
        constructor(e) {
            if (super(e), (0, l.default)(this, "getTeamColor", (e => {
                    const t = "colorTeam" + e;
                    var o;
                    return this.options.useTeamSettingsDeviceForColors ? null !== (o = this.state[t]) && void 0 !== o ? o : "#ffffff" : this.options[t]
                })), (0, l.default)(this, "setStore", (() => {
                    const e = [],
                        t = [];
                    for (let o = 1; o <= this.options.numberOfTeams && !(o > 4); o++) e.push(this.options["team" + o]), t.push(this.getTeamColor(o));
                    u.default.gui.scorebar = {
                        teams: e,
                        teamColors: t
                    }
                })), (0, l.default)(this, "onStateChange", (e => {
                    this.setStore()
                })), (0, l.default)(this, "onDestroy", (e => {
                    e.isBeingReplaced || (u.default.gui.scorebar = void 0)
                })), (0, c.InPreGamePhase)() && (0, d.isSavedVersion)()) {
                const e = b.default.Overlay;
                new(0, p.default)({
                    device: this,
                    baseColor: e.baseColor,
                    boxColor: e.boxColor,
                    content: {
                        icon: {
                            image: (0, f.default)("devices/gui/icon.png"),
                            scale: .9
                        }
                    }
                })
            }
            this.setStore()
        }
    }
    var m = g
}));