function e(e, t, o, i) {
    Object.defineProperty(e, t, {
        get: o,
        set: i,
        enumerable: !0,
        configurable: !0
    })
}
var t = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
t.register("8HCWJ", (function(o, i) {
    var n;
    n = o.exports, Object.defineProperty(n, "__esModule", {
        value: !0,
        configurable: !0
    }), e(o.exports, "default", (function() {
        return g
    }));
    var s = t("divCp"),
        a = t("alREA"),
        r = t("4uojN"),
        l = t("6Tpu2"),
        c = t("bNmF9"),
        u = t("dPNN3"),
        d = t("h6SIm"),
        p = t("2QdpL");
    class f extends c.default {
        constructor(e) {
            if (super(e), (0, s.default)(this, "openDeviceUI", (() => {
                    this.deviceUI.open({
                        message: this.options.message,
                        actions: (0, p.DialogueDevice_GetDialogueActions)(this),
                        send: (e, t) => {
                            this.sendToServerDevice(e, t)
                        },
                        font: this.options.font,
                        character: this.options.character,
                        typewriter: this.options.typewriter,
                        darkenBackground: this.options.darkenBackground
                    })
                })), (0, s.default)(this, "onDialogueActionChange", (() => {
                    this.deviceUI.update({
                        actions: (0, p.DialogueDevice_GetDialogueActions)(this)
                    })
                })), (0, l.InPreGamePhase)() && (0, r.isSavedVersion)()) {
                const e = d.default.Overlay;
                new(0, u.default)({
                    device: this,
                    baseColor: e.baseColor,
                    boxColor: e.boxColor,
                    content: {
                        icon: {
                            image: (0, a.default)("devices/dialogue/icon.png"),
                            scale: .92
                        }
                    }
                })
            }
        }
    }
    var g = f
})), t.register("2QdpL", (function(o, i) {
    e(o.exports, "DialogueDevice_GetDialogueActions", (function() {
        return a
    }));
    var n = t("z5iun"),
        s = t("gwuwo");
    const a = e => {
        const t = [],
            {
                options: o
            } = e;
        for (let e = 1; e <= 4; e++) {
            const i = o[`action${e}Text`];
            i && t.push({
                text: i,
                index: e
            })
        }
        return (0, s.default)().worldManager.devices.allDevices.filter((e => e.deviceOption.id === n.default.dialogueAction)).filter((e => e.options.group === o.group || !e.options.group && !o.group)).filter((e => !!e.options.text.length)).filter((e => !0 === e.state.active)).sort(((e, t) => e.y - t.y)).forEach((e => {
            t.push({
                text: e.options.text,
                action: e.id
            })
        })), t.slice(0, 10)
    }
}));