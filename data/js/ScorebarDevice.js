var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('.....', function(b, c) {
    var d, e, f, g, h;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), e = b.exports, f = 'default', g = function() {
        return _r;
    }, Object.defineProperty(e, f, {
        get: g,
        set: h,
        enumerable: !0,
        configurable: !0
    });
    var i = a('.....'),
        j = a('.....'),
        k = a('.....'),
        l = a('.....'),
        m = a('.....'),
        n = a('.....'),
        o = a('.....'),
        p = a('.....');
    class q extends n.default {
        constructor(r) {
            if (super(r), (0, i.default)(this, 'getTeamColor', s => {
                    const t = 'colorTeam' + s;
                    var u;
                    return this.options.useTeamSettingsDeviceForColors ? null !== (u = this.state[t]) && void 0 !== u ? u : '#ffffff' : this.options[t];
                }), (0, i.default)(this, 'setStore', () => {
                    const s = [],
                        t = [];
                    for (let u = 1; u <= this.options.numberOfTeams && !(u > 4); u++)
                        s.push(this.options['team' + u]), t.push(this.getTeamColor(u));
                    j.default.gui.scorebar = {
                        teams: s,
                        teamColors: t
                    };
                }), (0, i.default)(this, 'onStateChange', s => {
                    this.setStore();
                }), (0, i.default)(this, 'onDestroy', s => {
                    s.isBeingReplaced || (j.default.gui.scorebar = void 0);
                }), (0, m.InPreGamePhase)() && (0, l.isSavedVersion)()) {
                const s = p.default.Overlay;
                new(0, o.default)({
                    device: this,
                    baseColor: s.baseColor,
                    boxColor: s.boxColor,
                    content: {
                        icon: {
                            image: (0, k.default)('devices/gui/icon.png'),
                            scale: 0.9
                        }
                    }
                });
            }
            this.setStore();
        }
    }
    var _r = q;
});