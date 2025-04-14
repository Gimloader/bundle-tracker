function e(e, t, i, s) {
    Object.defineProperty(e, t, {
        get: i,
        set: s,
        enumerable: !0,
        configurable: !0
    })
}
var t = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
t.register("jo6ww", (function(i, s) {
    var a;
    a = i.exports, Object.defineProperty(a, "__esModule", {
        value: !0,
        configurable: !0
    }), e(i.exports, "default", (function() {
        return w
    }));
    var o = t("divCp"),
        d = t("41SvP"),
        n = t("iRjsB"),
        g = t("alREA"),
        l = t("3QJmn"),
        m = t("4uojN"),
        u = t("6Tpu2"),
        r = t("bNmF9"),
        h = t("dPNN3"),
        p = t("h6SIm"),
        f = t("19A6t");
    class c extends r.default {
        constructor(e) {
            if (super(e), (0, o.default)(this, "onStateChange", (e => {
                    this.updateState()
                })), (0, o.default)(this, "onDestroy", (() => {
                    n.default.session.gameSession.widgets.widgets.replace(n.default.session.gameSession.widgets.widgets.filter((e => e.id !== this.id)))
                })), (0, o.default)(this, "updateState", (() => {
                    this.options.widgetType === f.WidgetType.image && this.state.active ? this.addImageToListOrUpdateOnList() : this.options.widgetType === f.WidgetType.gameTime && this.state.active ? this.addGameTimeToListOrUpdateOnList() : this.state.active && void 0 !== this.state.value && this.addToListOrUpdateOnList()
                })), (0, o.default)(this, "addToListOrUpdateOnList", (() => {
                    void 0 !== this.state.value && (n.default.session.gameSession.widgets.widgets.find((e => e.id === this.id)) && n.default.session.gameSession.widgets.widgets.replace(n.default.session.gameSession.widgets.widgets.map((e => e.id === this.id ? {
                        ...e,
                        statValue: this.state.value
                    } : e))), n.default.session.gameSession.widgets.widgets.push({
                        type: f.WidgetType.statistic,
                        id: this.id,
                        y: this.y,
                        placement: this.options.widgetPlacement,
                        statName: this.options.statisticLabel,
                        statValue: this.state.value
                    }))
                })), (0, o.default)(this, "addGameTimeToListOrUpdateOnList", (() => {
                    if (void 0 === this.state.value) return;
                    const e = this.state.value,
                        t = Math.max(0, e / 1e3),
                        i = (0, l.SecondsToDuration)(t);
                    n.default.session.gameSession.widgets.widgets.find((e => e.id === this.id)) && n.default.session.gameSession.widgets.widgets.replace(n.default.session.gameSession.widgets.widgets.map((e => e.id === this.id ? {
                        ...e,
                        gameTimeValue: i
                    } : e))), n.default.session.gameSession.widgets.widgets.push({
                        type: f.WidgetType.gameTime,
                        id: this.id,
                        y: this.y,
                        placement: this.options.widgetPlacement,
                        gameTimeName: this.options.gameTimeLabel,
                        gameTimeValue: i
                    })
                })), (0, o.default)(this, "addImageToListOrUpdateOnList", (() => {
                    n.default.session.gameSession.widgets.widgets.find((e => e.id === this.id)) && n.default.session.gameSession.widgets.widgets.replace(n.default.session.gameSession.widgets.widgets.map((e => e.id === this.id ? {
                        type: f.WidgetType.image,
                        id: this.id,
                        y: this.y,
                        placement: this.options.widgetPlacement,
                        imageHeight: this.options.imageHeight,
                        imageBackgroundColor: this.options.imageBackgroundColor,
                        imageUrl: (0, d.GetImageUrl)(this.options.imageUrl),
                        imageStyle: this.options.imageStyle
                    } : e))), n.default.session.gameSession.widgets.widgets.push({
                        type: f.WidgetType.image,
                        id: this.id,
                        y: this.y,
                        placement: this.options.widgetPlacement,
                        imageHeight: this.options.imageHeight,
                        imageBackgroundColor: this.options.imageBackgroundColor,
                        imageUrl: (0, d.GetImageUrl)(this.options.imageUrl),
                        imageStyle: this.options.imageStyle
                    })
                })), (0, u.InPreGamePhase)() && (0, m.isSavedVersion)()) {
                const e = p.default.Overlay;
                new(0, h.default)({
                    device: this,
                    baseColor: e.baseColor,
                    boxColor: e.boxColor,
                    content: {
                        icon: {
                            image: (0, g.default)("devices/end_of_game_widget/icon.png")
                        }
                    }
                })
            }
            this.updateState()
        }
    }
    var w = c
})), t.register("3QJmn", (function(t, i) {
    e(t.exports, "SecondsToDuration", (function() {
        return s
    }));
    const s = e => {
            const t = Math.floor(e / 3600),
                i = Math.floor(e % 3600 / 60),
                s = Math.floor(e % 60);
            return t > 0 ? `${t}:${a(i)}:${a(s)}` : `${i}:${a(s)}`
        },
        a = e => e < 10 ? `0${e}` : `${e}`
}));