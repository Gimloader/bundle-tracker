function t(t, e, i, o) {
    Object.defineProperty(t, e, {
        get: i,
        set: o,
        enumerable: !0,
        configurable: !0
    })
}
var e = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
e.register("8CEc3", (function(i, o) {
    var s;
    s = i.exports, Object.defineProperty(s, "__esModule", {
        value: !0,
        configurable: !0
    }), t(i.exports, "default", (function() {
        return p
    }));
    var a = e("divCp"),
        u = e("iRjsB"),
        d = e("alREA"),
        n = e("4uojN"),
        l = e("6Tpu2"),
        r = e("bNmF9"),
        c = e("dPNN3"),
        f = e("h6SIm"),
        h = e("78379");
    class g extends r.default {
        constructor(t) {
            if (super(t), (0, a.default)(this, "addToGUIDevicesList", (() => {
                    u.default.gui.guiSlots.some((t => t.id === this.id)) || (u.default.gui.guiSlots.push({
                        id: this.id,
                        position: this.options.position,
                        text: this.state.text || this.options.text,
                        trackedItemId: this.options.trackedItemId,
                        showTrackedItemMaximumAmount: this.options.showTrackedItemMaximumAmount,
                        type: this.options.type,
                        priority: this.state.activationTime,
                        color: this.options.color
                    }), u.default.gui.guiSlots.replace(u.default.gui.guiSlots.slice().sort(((t, e) => e.priority - t.priority))), u.default.gui.guiSlotsChangeCounter += 1)
                })), (0, a.default)(this, "removeFromGUIDevicesList", (() => {
                    u.default.gui.guiSlots.replace(u.default.gui.guiSlots.filter((t => t.id !== this.id))), u.default.gui.guiSlotsChangeCounter += 1
                })), (0, a.default)(this, "onTextUpdated", (() => {
                    const t = u.default.gui.guiSlots.find((t => t.id === this.id));
                    t && (t.text = this.state.text || this.options.text, u.default.gui.guiSlotsChangeCounter += 1)
                })), (0, a.default)(this, "onStateChange", (t => {
                    "activationTime" === t && (this.state.activationTime ? this.addToGUIDevicesList() : this.removeFromGUIDevicesList()), "text" === t && this.onTextUpdated()
                })), (0, a.default)(this, "onDestroy", (() => {
                    this.removeFromGUIDevicesList()
                })), (0, a.default)(this, "buttonClicked", (() => {
                    this.sendToServerDevice(h.Messages.clicked)
                })), (0, l.InPreGamePhase)() && (0, n.isSavedVersion)()) {
                const t = f.default.Overlay;
                new(0, c.default)({
                    device: this,
                    baseColor: t.baseColor,
                    boxColor: t.boxColor,
                    content: {
                        icon: {
                            image: (0, d.default)("devices/gui/icon.png"),
                            scale: .9
                        }
                    }
                })
            }
            this.state.activationTime && this.addToGUIDevicesList()
        }
    }
    var p = g
})), e.register("78379", (function(e, i) {
    t(e.exports, "Messages", (function() {
        return o
    }));
    const o = {
        clicked: "clicked"
    }
}));