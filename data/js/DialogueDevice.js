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
        return _o;
    });
    var f = b('.....'),
        g = b('.....'),
        h = b('.....'),
        i = b('.....'),
        j = b('.....'),
        k = b('.....'),
        l = b('.....'),
        m = b('.....');
    class n extends j.default {
        constructor(o) {
            if (super(o), (0, f.default)(this, 'openDeviceUI', () => {
                    this.deviceUI.open({
                        message: this.options.message,
                        actions: (0, m.DialogueDevice_GetDialogueActions)(this),
                        send: (p, q) => {
                            this.sendToServerDevice(p, q);
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
}), b.register('.....', function(c, d) {
    a(c.exports, 'DialogueDevice_GetDialogueActions', function() {
        return _g;
    });
    var e = b('.....'),
        f = b('.....');
    const _g = h => {
        const i = [],
            {
                options: j
            } = h;
        for (let k = 1; k <= 4; k++) {
            const l = j[`action${ k }Text`];
            l && i.push({
                text: l,
                index: k
            });
        }
        return (0, f.default)().worldManager.devices.allDevices.filter(m => m.deviceOption.id === e.default.dialogueAction).filter(m => m.options.group === j.group || !m.options.group && !j.group).filter(m => !!m.options.text.length).filter(m => !0 === m.state.active).sort((m, n) => m.y - n.y).forEach(m => {
            i.push({
                text: m.options.text,
                action: m.id
            });
        }), i.slice(0, 10);
    };
});