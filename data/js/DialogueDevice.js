function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('vHRGN', function(c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'default', function() {
        return _o;
    });
    var f = b('s/YA9'),
        g = b('UaUBz0'),
        h = b('hycyg'),
        i = b('UkCpC'),
        j = b('ltxDW'),
        k = b('73Aki'),
        l = b('AHhkR'),
        m = b('weHdf');
    class n extends j.default {
        constructor(o) {
            if (super(o), (0, f.default)(this, 'openDeviceUI', () => {
                    this.deviceUI.open({
                        message: this.options.message,
                        actions: (0, m.DialogueDevice_GetDialogueActions)(this),
                        send: (o, b) => {
                            this.sendToServerDevice(o, b);
                        },
                        font: this.options.font,
                        character: this.options.character,
                        typewriter: this.options.typewriter,
                        darkenBackground: this.options.darkenBackground
                    });
                }), (0, f.default)(this, 'onDialogueActionChange', () => {
                    this.deviceUI.update({
                        actions: (0, m.DialogueDevice_GetDialogueActions)(this)
                    });
                }), (0, i.InPreGamePhase)() && (0, h.isSavedVersion)()) {
                const p = l.default.Overlay;
                new(0, k.default)({
                    device: this,
                    baseColor: p.baseColor,
                    boxColor: p.boxColor,
                    content: {
                        icon: {
                            image: (0, g.default)('devices/dialogue/icon.png'),
                            scale: 0.92
                        }
                    }
                });
            }
        }
    }
    var _o = n;
}), b.register('weHdf', function(c, d) {
    a(c.exports, 'DialogueDevice_GetDialogueActions', function() {
        return _g;
    });
    var e = b('OFuf70'),
        f = b('heTaO');
    const _g = a => {
        const h = [],
            {
                options: i
            } = a;
        for (let j = 1; j <= 4; j++) {
            const k = i[`action${ j }Text`];
            k && h.push({
                text: k,
                index: j
            });
        }
        return (0, f.default)().worldManager.devices.allDevices.filter(j => j.deviceOption.id === e.default.dialogueAction).filter(j => j.options.group === i.group || !j.options.group && !i.group).filter(j => !!j.options.text.length).filter(j => !0 === j.state.active).sort((j, h) => j.y - h.y).forEach(j => {
            h.push({
                text: j.options.text,
                action: j.id
            });
        }), h.slice(0, 10);
    };
});