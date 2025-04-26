var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('yQn5g', function(p, q) {
    var b, c, d, e, f;
    b = p.exports, Object.defineProperty(b, '__esModule', {
        value: !0,
        configurable: !0
    }), c = p.exports, d = 'default', e = function() {
        return p;
    }, Object.defineProperty(c, d, {
        get: e,
        set: f,
        enumerable: !0,
        configurable: !0
    });
    var g = a('UM8oI'),
        h = a('7Sbqr'),
        i = a('JJQ0+'),
        j = a('Bpt+p'),
        k = a('5Ux1a'),
        l = a('sgILU'),
        m = a('phu0d'),
        n = a('Gqspz');
    class o extends l.default {
        constructor(a) {
            if (super(a), (0, g.default)(this, 'getTeamColor', a => {
                    const p = 'colorTeam' + a;
                    var q;
                    return this.options.useTeamSettingsDeviceForColors ? null !== (q = this.state[p]) && void 0 !== q ? q : '#ffffff' : this.options[p];
                }), (0, g.default)(this, 'setStore', () => {
                    const p = [],
                        q = [];
                    for (let r = 1; r <= this.options.numberOfTeams && !(r > 4); r++)
                        p.push(this.options['team' + r]), q.push(this.getTeamColor(r));
                    h.default.gui.scorebar = {
                        teams: p,
                        teamColors: q
                    };
                }), (0, g.default)(this, 'onStateChange', a => {
                    this.setStore();
                }), (0, g.default)(this, 'onDestroy', a => {
                    a.isBeingReplaced || (h.default.gui.scorebar = void 0);
                }), (0, k.InPreGamePhase)() && (0, j.isSavedVersion)()) {
                const p = n.default.Overlay;
                new(0, m.default)({
                    device: this,
                    baseColor: p.baseColor,
                    boxColor: p.boxColor,
                    content: {
                        icon: {
                            image: (0, i.default)('devices/gui/icon.png'),
                            scale: 0.9
                        }
                    }
                });
            }
            this.setStore();
        }
    }
    var p = q;
});