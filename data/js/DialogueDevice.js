function a(a, b, g, j) {
    Object.defineProperty(a, b, {
        get: g,
        set: j,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('msFhx', function(g, j) {
    var c;
    c = g.exports, Object.defineProperty(c, '__esModule', {
        value: !0,
        configurable: !0
    }), a(g.exports, 'default', function() {
        return m;
    });
    var d = b('UM8oI'),
        e = b('JJQ0+'),
        f = b('Bpt+p'),
        g = b('5Ux1a'),
        h = b('sgILU'),
        i = b('phu0d'),
        j = b('Gqspz'),
        k = b('xqa8+');
    class l extends h.default {
        constructor(a) {
            if (super(a), (0, d.default)(this, 'openDeviceUI', () => {
                    this.deviceUI.open({
                        message: this.options.message,
                        actions: (0, k.DialogueDevice_GetDialogueActions)(this),
                        send: (a, b) => {
                            this.sendToServerDevice(a, b);
                        },
                        font: this.options.font,
                        character: this.options.character,
                        typewriter: this.options.typewriter,
                        darkenBackground: this.options.darkenBackground
                    });
                }), (0, d.default)(this, 'onDialogueActionChange', () => {
                    this.deviceUI.update({
                        actions: (0, k.DialogueDevice_GetDialogueActions)(this)
                    });
                }), (0, g.InPreGamePhase)() && (0, f.isSavedVersion)()) {
                const m = j.default.Overlay;
                new(0, i.default)({
                    device: this,
                    baseColor: m.baseColor,
                    boxColor: m.boxColor,
                    content: {
                        icon: {
                            image: (0, e.default)('devices/dialogue/icon.png'),
                            scale: 0.92
                        }
                    }
                });
            }
        }
    }
    var m = n;
}), b.register('xqa8+', function(g, j) {
    a(g.exports, 'DialogueDevice_GetDialogueActions', function() {
        return e;
    });
    var c = b('7X8h3'),
        d = b('dAmf5');
    const e = a => {
        const f = [],
            {
                options: g
            } = h;
        for (let i = 1; i <= 4; i++) {
            const j = g[`action${ i }Text`];
            j && f.push({
                text: j,
                index: i
            });
        }
        return (0, d.default)().worldManager.devices.allDevices.filter(i => i.deviceOption.id === c.default.dialogueAction).filter(i => i.options.group === g.group || !i.options.group && !g.group).filter(i => !!i.options.text.length).filter(i => !0 === i.state.active).sort((i, f) => i.y - f.y).forEach(i => {
            f.push({
                text: i.options.text,
                action: i.id
            });
        }), f.slice(0, 10);
    };
});