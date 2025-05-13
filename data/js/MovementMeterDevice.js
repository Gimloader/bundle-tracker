function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('.....', function(c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'default', function() {
        return _t;
    });
    var f = b('.....'),
        g = b('.....'),
        h = b('.....'),
        i = b('.....'),
        j = b('.....'),
        k = b('.....'),
        l = b('.....'),
        m = b('.....'),
        n = b('.....'),
        o = b('.....'),
        p = b('.....'),
        q = b('.....'),
        r = b('.....');
    class s extends j.default {
        constructor(t) {
            if (super(t), (0, f.default)(this, 'onMessage', u => {
                    var v, w, x;
                    if ((null == u || null === (v = u.data) || void 0 === v ? void 0 : v.characterId) === (0, m.default)())
                        if (u.key === n.Messages.warning)
                            this.options.showWarningAlert && (0, o.playSound)({
                                path: (0, g.default)('sounds/alert-notification.mp3'),
                                volume: (0, p.getVolume)({
                                    type: p.SoundType.soundEffect,
                                    volume: 0.4
                                })
                            }), ((null === (w = this.options.warningAlertTitle) || void 0 === w ? void 0 : w.length) || (null === (x = this.options.warningAlertContent) || void 0 === x ? void 0 : x.length)) && (0, q.ShowNotification)({
                                id: (0, r.generateId)(),
                                title: this.options.warningAlertTitle,
                                description: this.options.warningAlertContent,
                                type: q.NotificationType.warning,
                                placement: q.NotificationPlacement.topRight
                            });
                        else if (u.key === n.Messages.outOfItem) {
                        var y, z;
                        (0, o.playSound)({
                            path: (0, g.default)('sounds/power-down.mp3'),
                            volume: (0, p.getVolume)({
                                type: p.SoundType.soundEffect,
                                volume: 0.32
                            })
                        }), ((null === (y = this.options.outOfItemAlertTitle) || void 0 === y ? void 0 : y.length) || (null === (z = this.options.outOfItemAlertTitle) || void 0 === z ? void 0 : z.length)) && (0, q.ShowNotification)({
                            id: (0, r.generateId)(),
                            title: this.options.outOfItemAlertTitle,
                            description: this.options.outOfItemAlertContent,
                            type: q.NotificationType.error,
                            placement: q.NotificationPlacement.topRight
                        });
                    }
                }), (0, i.InGamePhase)() || (0, h.isPublishedVersion)())
                return;
            const u = l.default.Manager;
            new(0, k.default)({
                device: this,
                baseColor: u.baseColor,
                boxColor: u.boxColor,
                content: {
                    icon: {
                        image: (0, g.default)('devices/movement_meter/icon.png'),
                        scale: 1
                    }
                }
            });
        }
    }
    var _t = s;
}), b.register('.....', function(c, d) {
    let e;
    var f;
    a(c.exports, 'Messages', function() {
        return e;
    }), (f = e || (e = {})).warning = 'warning', f.outOfItem = 'outOfItem';
});