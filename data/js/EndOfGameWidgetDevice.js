function a(a, b, r, c) {
    Object.defineProperty(a, b, {
        get: r,
        set: c,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('W+aEg', function(r, c) {
    var c;
    c = r.exports, Object.defineProperty(c, '__esModule', {
        value: !0,
        configurable: !0
    }), a(r.exports, 'default', function() {
        return p;
    });
    var d = b('UM8oI'),
        e = b('hpAcY'),
        f = b('7Sbqr'),
        g = b('JJQ0+'),
        h = b('sZQtn'),
        i = b('Bpt+p'),
        j = b('5Ux1a'),
        k = b('sgILU'),
        l = b('phu0d'),
        m = b('Gqspz'),
        n = b('lG4Ec');
    class o extends k.default {
        constructor(a) {
            if (super(a), (0, d.default)(this, 'onStateChange', a => {
                    this.updateState();
                }), (0, d.default)(this, 'onDestroy', () => {
                    f.default.session.gameSession.widgets.widgets.replace(f.default.session.gameSession.widgets.widgets.filter(a => a.id !== this.id));
                }), (0, d.default)(this, 'updateState', () => {
                    this.options.widgetType === n.WidgetType.image && this.state.active ? this.addImageToListOrUpdateOnList() : this.options.widgetType === n.WidgetType.gameTime && this.state.active ? this.addGameTimeToListOrUpdateOnList() : this.state.active && void 0 !== this.state.value && this.addToListOrUpdateOnList();
                }), (0, d.default)(this, 'addToListOrUpdateOnList', () => {
                    void 0 !== this.state.value && (f.default.session.gameSession.widgets.widgets.find(a => a.id === this.id) && f.default.session.gameSession.widgets.widgets.replace(f.default.session.gameSession.widgets.widgets.map(a => a.id === this.id ? {
                        ...a,
                        statValue: this.state.value
                    } : a)), f.default.session.gameSession.widgets.widgets.push({
                        type: n.WidgetType.statistic,
                        id: this.id,
                        y: this.y,
                        placement: this.options.widgetPlacement,
                        statName: this.options.statisticLabel,
                        statValue: this.state.value
                    }));
                }), (0, d.default)(this, 'addGameTimeToListOrUpdateOnList', () => {
                    if (void 0 === this.state.value)
                        return;
                    const p = this.state.value,
                        q = Math.max(0, p / 1000),
                        r = (0, h.SecondsToDuration)(q);
                    f.default.session.gameSession.widgets.widgets.find(p => p.id === this.id) && f.default.session.gameSession.widgets.widgets.replace(f.default.session.gameSession.widgets.widgets.map(p => p.id === this.id ? {
                        ...p,
                        gameTimeValue: r
                    } : p)), f.default.session.gameSession.widgets.widgets.push({
                        type: n.WidgetType.gameTime,
                        id: this.id,
                        y: this.y,
                        placement: this.options.widgetPlacement,
                        gameTimeName: this.options.gameTimeLabel,
                        gameTimeValue: r
                    });
                }), (0, d.default)(this, 'addImageToListOrUpdateOnList', () => {
                    f.default.session.gameSession.widgets.widgets.find(a => a.id === this.id) && f.default.session.gameSession.widgets.widgets.replace(f.default.session.gameSession.widgets.widgets.map(a => a.id === this.id ? {
                        type: n.WidgetType.image,
                        id: this.id,
                        y: this.y,
                        placement: this.options.widgetPlacement,
                        imageHeight: this.options.imageHeight,
                        imageBackgroundColor: this.options.imageBackgroundColor,
                        imageUrl: (0, e.GetImageUrl)(this.options.imageUrl),
                        imageStyle: this.options.imageStyle
                    } : a)), f.default.session.gameSession.widgets.widgets.push({
                        type: n.WidgetType.image,
                        id: this.id,
                        y: this.y,
                        placement: this.options.widgetPlacement,
                        imageHeight: this.options.imageHeight,
                        imageBackgroundColor: this.options.imageBackgroundColor,
                        imageUrl: (0, e.GetImageUrl)(this.options.imageUrl),
                        imageStyle: this.options.imageStyle
                    });
                }), (0, j.InPreGamePhase)() && (0, i.isSavedVersion)()) {
                const p = m.default.Overlay;
                new(0, l.default)({
                    device: this,
                    baseColor: p.baseColor,
                    boxColor: p.boxColor,
                    content: {
                        icon: {
                            image: (0, g.default)('devices/end_of_game_widget/icon.png')
                        }
                    }
                });
            }
            this.updateState();
        }
    }
    var p = q;
}), b.register('sZQtn', function(b, e) {
    a(b.exports, 'SecondsToDuration', function() {
        return c;
    });
    const c = a => {
            const d = Math.floor(a / 3600),
                e = Math.floor(a % 3600 / 60),
                f = Math.floor(a % 60);
            return d > 0 ? `${ d }:${ d(e) }:${ d(f) }` : `${ e }:${ d(f) }`;
        },
        d = a => a < 10 ? `0${ a }` : `${ a }`;
});