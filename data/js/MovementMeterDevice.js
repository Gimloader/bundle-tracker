function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('3nlnx', function(c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'default', function() {
        return _t;
    });
    var f = b('s/YA9'),
        g = b('UaUBz0'),
        h = b('hycyg'),
        i = b('UkCpC'),
        j = b('ltxDW'),
        k = b('73Aki'),
        l = b('AHhkR'),
        m = b('5Fjxs'),
        n = b('8LRGc'),
        o = b('3jaMj'),
        p = b('CbU7r'),
        q = b('nhwrM'),
        r = b('quE27');
    class s extends j.default {
        constructor(t) {
            if (super(t), (0, f.default)(this, 'onMessage', t => {
                    var u, v, w;
                    if ((null == t || null === (u = t.data) || void 0 === u ? void 0 : u.characterId) === (0, m.default)())
                        if (t.key === n.Messages.warning)
                            this.options.showWarningAlert && (0, o.playSound)({
                                path: (0, g.default)('sounds/alert-notification.mp3'),
                                volume: (0, p.getVolume)({
                                    type: p.SoundType.soundEffect,
                                    volume: 0.4
                                })
                            }), ((null === (v = this.options.warningAlertTitle) || void 0 === v ? void 0 : v.length) || (null === (w = this.options.warningAlertContent) || void 0 === w ? void 0 : w.length)) && (0, q.ShowNotification)({
                                id: (0, r.generateId)(),
                                title: this.options.warningAlertTitle,
                                description: this.options.warningAlertContent,
                                type: q.NotificationType.warning,
                                placement: q.NotificationPlacement.topRight
                            });
                        else if (t.key === n.Messages.outOfItem) {
                        var x, y;
                        (0, o.playSound)({
                            path: (0, g.default)('sounds/power-down.mp3'),
                            volume: (0, p.getVolume)({
                                type: p.SoundType.soundEffect,
                                volume: 0.32
                            })
                        }), ((null === (x = this.options.outOfItemAlertTitle) || void 0 === x ? void 0 : x.length) || (null === (y = this.options.outOfItemAlertTitle) || void 0 === y ? void 0 : y.length)) && (0, q.ShowNotification)({
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
}), b.register('8LRGc', function(c, d) {
    let e;
    var f;
    a(c.exports, 'Messages', function() {
        return e;
    }), (f = e || (e = {})).warning = 'warning', f.outOfItem = 'outOfItem';
});