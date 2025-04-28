function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('22EXG', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _q(b.exports, 'default', function() {
        return _q;
    });
    var e = a('1bFPu'),
        f = a('kPDt8'),
        g = a('iWivW'),
        h = a('2Xvuf'),
        i = a('VvINu'),
        j = a('9tz3H'),
        k = a('/pbxo'),
        l = a('I35Ay'),
        m = a('+uQv7'),
        n = a('dTXti'),
        o = a('PgRM6');
    class p extends l.default {
        constructor(_q) {
            if (super(_q), (0, e.default)(this, 'onStateChange', _q => {
                    this.updateState();
                }), (0, e.default)(this, 'onDestroy', () => {
                    g.default.session.gameSession.widgets.widgets.replace(g.default.session.gameSession.widgets.widgets.filter(_q => _q.id !== this.id));
                }), (0, e.default)(this, 'updateState', () => {
                    this.options.widgetType === o.WidgetType.image && this.state.active ? this.addImageToListOrUpdateOnList() : this.options.widgetType === o.WidgetType.gameTime && this.state.active ? this.addGameTimeToListOrUpdateOnList() : this.state.active && void 0 !== this.state.value && this.addToListOrUpdateOnList();
                }), (0, e.default)(this, 'addToListOrUpdateOnList', () => {
                    void 0 !== this.state.value && (g.default.session.gameSession.widgets.widgets.find(_q => _q.id === this.id) && g.default.session.gameSession.widgets.widgets.replace(g.default.session.gameSession.widgets.widgets.map(_q => _q.id === this.id ? {
                        ..._q,
                        statValue: this.state.value
                    } : _q)), g.default.session.gameSession.widgets.widgets.push({
                        type: o.WidgetType.statistic,
                        id: this.id,
                        y: this.y,
                        placement: this.options.widgetPlacement,
                        statName: this.options.statisticLabel,
                        statValue: this.state.value
                    }));
                }), (0, e.default)(this, 'addGameTimeToListOrUpdateOnList', () => {
                    if (void 0 === this.state.value)
                        return;
                    const r = this.state.value,
                        s = Math.max(0, r / 1000),
                        t = (0, i.SecondsToDuration)(s);
                    g.default.session.gameSession.widgets.widgets.find(r => r.id === this.id) && g.default.session.gameSession.widgets.widgets.replace(g.default.session.gameSession.widgets.widgets.map(r => r.id === this.id ? {
                        ...r,
                        gameTimeValue: t
                    } : r)), g.default.session.gameSession.widgets.widgets.push({
                        type: o.WidgetType.gameTime,
                        id: this.id,
                        y: this.y,
                        placement: this.options.widgetPlacement,
                        gameTimeName: this.options.gameTimeLabel,
                        gameTimeValue: t
                    });
                }), (0, e.default)(this, 'addImageToListOrUpdateOnList', () => {
                    g.default.session.gameSession.widgets.widgets.find(_q => _q.id === this.id) && g.default.session.gameSession.widgets.widgets.replace(g.default.session.gameSession.widgets.widgets.map(_q => _q.id === this.id ? {
                        type: o.WidgetType.image,
                        id: this.id,
                        y: this.y,
                        placement: this.options.widgetPlacement,
                        imageHeight: this.options.imageHeight,
                        imageBackgroundColor: this.options.imageBackgroundColor,
                        imageUrl: (0, f.GetImageUrl)(this.options.imageUrl),
                        imageStyle: this.options.imageStyle
                    } : _q)), g.default.session.gameSession.widgets.widgets.push({
                        type: o.WidgetType.image,
                        id: this.id,
                        y: this.y,
                        placement: this.options.widgetPlacement,
                        imageHeight: this.options.imageHeight,
                        imageBackgroundColor: this.options.imageBackgroundColor,
                        imageUrl: (0, f.GetImageUrl)(this.options.imageUrl),
                        imageStyle: this.options.imageStyle
                    });
                }), (0, k.InPreGamePhase)() && (0, j.isSavedVersion)()) {
                const r = n.default.Overlay;
                new(0, m.default)({
                    device: this,
                    baseColor: r.baseColor,
                    boxColor: r.boxColor,
                    content: {
                        icon: {
                            image: (0, h.default)('devices/end_of_game_widget/icon.png')
                        }
                    }
                });
            }
            this.updateState();
        }
    }
    var _q = p;
}), a.register('VvINu', function(b, c) {
    e(b.exports, 'SecondsToDuration', function() {
        return _d;
    });
    const _d = e => {
            const e = Math.floor(e / 3600),
                f = Math.floor(e % 3600 / 60),
                g = Math.floor(e % 60);
            return e > 0 ? `${ e }:${ _e(f) }:${ _e(g) }` : `${ f }:${ _e(g) }`;
        },
        _e = e => e < 10 ? `0${ e }` : `${ e }`;
});