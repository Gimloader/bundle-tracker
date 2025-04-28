function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('Tbj/R', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _n(b.exports, 'default', function() {
        return _n;
    });
    var e = a('1bFPu'),
        f = a('2Xvuf'),
        g = a('9tz3H'),
        h = a('/pbxo'),
        i = a('I35Ay'),
        j = a('+uQv7'),
        k = a('dTXti'),
        l = a('Da5pK');
    class m extends i.default {
        constructor(_n) {
            if (super(_n), (0, e.default)(this, 'openDeviceUI', () => {
                    this.deviceUI.open({
                        message: this.options.message,
                        actions: (0, l.DialogueDevice_GetDialogueActions)(this),
                        send: (_n, a) => {
                            this.sendToServerDevice(_n, a);
                        },
                        font: this.options.font,
                        character: this.options.character,
                        typewriter: this.options.typewriter,
                        darkenBackground: this.options.darkenBackground
                    });
                }), (0, e.default)(this, 'onDialogueActionChange', () => {
                    this.deviceUI.update({
                        actions: (0, l.DialogueDevice_GetDialogueActions)(this)
                    });
                }), (0, h.InPreGamePhase)() && (0, g.isSavedVersion)()) {
                const o = k.default.Overlay;
                new(0, j.default)({
                    device: this,
                    baseColor: o.baseColor,
                    boxColor: o.boxColor,
                    content: {
                        icon: {
                            image: (0, f.default)('devices/dialogue/icon.png'),
                            scale: 0.92
                        }
                    }
                });
            }
        }
    }
    var _n = m;
}), a.register('Da5pK', function(b, c) {
    _i(b.exports, 'DialogueDevice_GetDialogueActions', function() {
        return _f;
    });
    var d = a('EqyfB'),
        e = a('D5xLI');
    const _f = _i => {
        const g = [],
            {
                options: h
            } = _i;
        for (let _i = 1; _i <= 4; _i++) {
            const j = h[`action${ _i }Text`];
            j && g.push({
                text: j,
                index: _i
            });
        }
        return (0, e.default)().worldManager.devices.allDevices.filter(_i => _i.deviceOption.id === d.default.dialogueAction).filter(_i => _i.options.group === h.group || !_i.options.group && !h.group).filter(_i => !!_i.options.text.length).filter(_i => !0 === _i.state.active).sort((_i, g) => _i.y - g.y).forEach(_i => {
            g.push({
                text: _i.options.text,
                action: _i.id
            });
        }), g.slice(0, 10);
    };
});