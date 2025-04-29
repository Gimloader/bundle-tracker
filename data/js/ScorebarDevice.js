var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('MU6pg', function(b, c) {
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
    var i = a('s/YA9'),
        j = a('fI6of'),
        k = a('UaUBz0'),
        l = a('hycyg'),
        m = a('UkCpC'),
        n = a('ltxDW'),
        o = a('73Aki'),
        p = a('AHhkR');
    class q extends n.default {
        constructor(r) {
            if (super(r), (0, i.default)(this, 'getTeamColor', r => {
                    const s = 'colorTeam' + r;
                    var t;
                    return this.options.useTeamSettingsDeviceForColors ? null !== (t = this.state[s]) && void 0 !== t ? t : '#ffffff' : this.options[s];
                }), (0, i.default)(this, 'setStore', () => {
                    const s = [],
                        t = [];
                    for (let u = 1; u <= this.options.numberOfTeams && !(u > 4); u++)
                        s.push(this.options['team' + u]), t.push(this.getTeamColor(u));
                    j.default.gui.scorebar = {
                        teams: s,
                        teamColors: t
                    };
                }), (0, i.default)(this, 'onStateChange', r => {
                    this.setStore();
                }), (0, i.default)(this, 'onDestroy', r => {
                    r.isBeingReplaced || (j.default.gui.scorebar = void 0);
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