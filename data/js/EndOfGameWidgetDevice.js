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
        return _r;
    });
    var f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....'), k = b('.....'), l = b('.....'), m = b('.....'), n = b('.....'), o = b('.....'), p = b('.....');
    class q extends m.default {
        constructor(r) {
            if (super(r), (0, f.default)(this, 'onStateChange', s => {
                    this.updateState();
                }), (0, f.default)(this, 'onDestroy', () => {
                    h.default.session.gameSession.widgets.widgets.replace(h.default.session.gameSession.widgets.widgets.filter(s => s.id !== this.id));
                }), (0, f.default)(this, 'updateState', () => {
                    this.options.widgetType === p.WidgetType.image && this.state.active ? this.addImageToListOrUpdateOnList() : this.options.widgetType === p.WidgetType.gameTime && this.state.active ? this.addGameTimeToListOrUpdateOnList() : this.state.active && void 0 !== this.state.value && this.addToListOrUpdateOnList();
                }), (0, f.default)(this, 'addToListOrUpdateOnList', () => {
                    void 0 !== this.state.value && (h.default.session.gameSession.widgets.widgets.find(s => s.id === this.id) && h.default.session.gameSession.widgets.widgets.replace(h.default.session.gameSession.widgets.widgets.map(s => s.id === this.id ? {
                        ...s,
                        statValue: this.state.value
                    } : s)), h.default.session.gameSession.widgets.widgets.push({
                        type: p.WidgetType.statistic,
                        id: this.id,
                        y: this.y,
                        placement: this.options.widgetPlacement,
                        statName: this.options.statisticLabel,
                        statValue: this.state.value
                    }));
                }), (0, f.default)(this, 'addGameTimeToListOrUpdateOnList', () => {
                    if (void 0 === this.state.value)
                        return;
                    const s = this.state.value, t = Math.max(0, s / 1000), u = (0, j.SecondsToDuration)(t);
                    h.default.session.gameSession.widgets.widgets.find(v => v.id === this.id) && h.default.session.gameSession.widgets.widgets.replace(h.default.session.gameSession.widgets.widgets.map(v => v.id === this.id ? {
                        ...v,
                        gameTimeValue: u
                    } : v)), h.default.session.gameSession.widgets.widgets.push({
                        type: p.WidgetType.gameTime,
                        id: this.id,
                        y: this.y,
                        placement: this.options.widgetPlacement,
                        gameTimeName: this.options.gameTimeLabel,
                        gameTimeValue: u
                    });
                }), (0, f.default)(this, 'addImageToListOrUpdateOnList', () => {
                    h.default.session.gameSession.widgets.widgets.find(s => s.id === this.id) && h.default.session.gameSession.widgets.widgets.replace(h.default.session.gameSession.widgets.widgets.map(s => s.id === this.id ? {
                        type: p.WidgetType.image,
                        id: this.id,
                        y: this.y,
                        placement: this.options.widgetPlacement,
                        imageHeight: this.options.imageHeight,
                        imageBackgroundColor: this.options.imageBackgroundColor,
                        imageUrl: (0, g.GetImageUrl)(this.options.imageUrl),
                        imageStyle: this.options.imageStyle
                    } : s)), h.default.session.gameSession.widgets.widgets.push({
                        type: p.WidgetType.image,
                        id: this.id,
                        y: this.y,
                        placement: this.options.widgetPlacement,
                        imageHeight: this.options.imageHeight,
                        imageBackgroundColor: this.options.imageBackgroundColor,
                        imageUrl: (0, g.GetImageUrl)(this.options.imageUrl),
                        imageStyle: this.options.imageStyle
                    });
                }), (0, l.InPreGamePhase)() && (0, k.isSavedVersion)()) {
                const s = o.default.Overlay;
                new (0, n.default)({
                    device: this,
                    baseColor: s.baseColor,
                    boxColor: s.boxColor,
                    content: { icon: { image: (0, i.default)('devices/end_of_game_widget/icon.png') } }
                });
            }
            this.updateState();
        }
    }
    var _r = q;
}), b.register('.....', function (c, d) {
    a(c.exports, 'SecondsToDuration', function () {
        return _e;
    });
    const _e = f => {
            const g = Math.floor(f / 3600), h = Math.floor(f % 3600 / 60), i = Math.floor(f % 60);
            return g > 0 ? `${ g }:${ _f(h) }:${ _f(i) }` : `${ h }:${ _f(i) }`;
        }, _f = g => g < 10 ? `0${ g }` : `${ g }`;
});