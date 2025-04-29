function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('yAK6+', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _s(b.exports, 'default', function() {
        return _s;
    });
    var e = a('1bFPu'),
        f = a('2Xvuf'),
        g = a('9tz3H'),
        h = a('/pbxo'),
        i = a('I35Ay'),
        j = a('+uQv7'),
        k = a('dTXti'),
        l = a('Jfada'),
        m = a('JJsbF'),
        n = a('07pQo'),
        o = a('1f1YX'),
        p = a('pAsXQ'),
        q = a('PMl60');
    class r extends i.default {
        constructor(_s) {
            if (super(_s), (0, e.default)(this, 'onMessage', _s => {
                    var t, u, v;
                    if ((null == _s || null === (t = _s.data) || void 0 === t ? void 0 : t.characterId) === (0, l.default)())
                        if (_s.key === m.Messages.warning)
                            this.options.showWarningAlert && (0, n.playSound)({
                                path: (0, f.default)('sounds/alert-notification.mp3'),
                                volume: (0, o.getVolume)({
                                    type: o.SoundType.soundEffect,
                                    volume: 0.4
                                })
                            }), ((null === (u = this.options.warningAlertTitle) || void 0 === u ? void 0 : u.length) || (null === (v = this.options.warningAlertContent) || void 0 === v ? void 0 : v.length)) && (0, p.ShowNotification)({
                                id: (0, q.generateId)(),
                                title: this.options.warningAlertTitle,
                                description: this.options.warningAlertContent,
                                type: p.NotificationType.warning,
                                placement: p.NotificationPlacement.topRight
                            });
                        else if (_s.key === m.Messages.outOfItem) {
                        var w, x;
                        (0, n.playSound)({
                            path: (0, f.default)('sounds/power-down.mp3'),
                            volume: (0, o.getVolume)({
                                type: o.SoundType.soundEffect,
                                volume: 0.32
                            })
                        }), ((null === (w = this.options.outOfItemAlertTitle) || void 0 === w ? void 0 : w.length) || (null === (x = this.options.outOfItemAlertTitle) || void 0 === x ? void 0 : x.length)) && (0, p.ShowNotification)({
                            id: (0, q.generateId)(),
                            title: this.options.outOfItemAlertTitle,
                            description: this.options.outOfItemAlertContent,
                            type: p.NotificationType.error,
                            placement: p.NotificationPlacement.topRight
                        });
                    }
                }), (0, h.InGamePhase)() || (0, g.isPublishedVersion)())
                return;
            const t = k.default.Manager;
            new(0, j.default)({
                device: this,
                baseColor: t.baseColor,
                boxColor: t.boxColor,
                content: {
                    icon: {
                        image: (0, f.default)('devices/movement_meter/icon.png'),
                        scale: 1
                    }
                }
            });
        }
    }
    var _s = r;
}), a.register('JJsbF', function(b, c) {
    let d;
    var e;
    e(b.exports, 'Messages', function() {
        return d;
    }), (e = d || (d = {})).warning = 'warning', e.outOfItem = 'outOfItem';
});