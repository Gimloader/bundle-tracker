function a(a, b, i, c) {
    Object.defineProperty(a, b, {
        get: i,
        set: c,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('GGStz', function(i, c) {
    var c;
    c = i.exports, Object.defineProperty(c, '__esModule', {
        value: !0,
        configurable: !0
    }), a(i.exports, 'default', function() {
        return n;
    });
    var d = b('UM8oI'),
        e = b('7Sbqr'),
        f = b('JJQ0+'),
        g = b('Bpt+p'),
        h = b('5Ux1a'),
        i = b('sgILU'),
        j = b('phu0d'),
        k = b('Gqspz'),
        l = b('ODdE7');
    class m extends i.default {
        constructor(a) {
            if (super(a), (0, d.default)(this, 'addToGUIDevicesList', () => {
                    e.default.gui.guiSlots.some(a => a.id === this.id) || (e.default.gui.guiSlots.push({
                        id: this.id,
                        position: this.options.position,
                        text: this.state.text || this.options.text,
                        trackedItemId: this.options.trackedItemId,
                        showTrackedItemMaximumAmount: this.options.showTrackedItemMaximumAmount,
                        type: this.options.type,
                        priority: this.state.activationTime,
                        color: this.options.color
                    }), e.default.gui.guiSlots.replace(e.default.gui.guiSlots.slice().sort((a, b) => b.priority - a.priority)), e.default.gui.guiSlotsChangeCounter += 1);
                }), (0, d.default)(this, 'removeFromGUIDevicesList', () => {
                    e.default.gui.guiSlots.replace(e.default.gui.guiSlots.filter(a => a.id !== this.id)), e.default.gui.guiSlotsChangeCounter += 1;
                }), (0, d.default)(this, 'onTextUpdated', () => {
                    const n = e.default.gui.guiSlots.find(n => n.id === this.id);
                    n && (n.text = this.state.text || this.options.text, e.default.gui.guiSlotsChangeCounter += 1);
                }), (0, d.default)(this, 'onStateChange', a => {
                    'activationTime' === a && (this.state.activationTime ? this.addToGUIDevicesList() : this.removeFromGUIDevicesList()), 'text' === a && this.onTextUpdated();
                }), (0, d.default)(this, 'onDestroy', () => {
                    this.removeFromGUIDevicesList();
                }), (0, d.default)(this, 'buttonClicked', () => {
                    this.sendToServerDevice(l.Messages.clicked);
                }), (0, h.InPreGamePhase)() && (0, g.isSavedVersion)()) {
                const n = k.default.Overlay;
                new(0, j.default)({
                    device: this,
                    baseColor: n.baseColor,
                    boxColor: n.boxColor,
                    content: {
                        icon: {
                            image: (0, f.default)('devices/gui/icon.png'),
                            scale: 0.9
                        }
                    }
                });
            }
            this.state.activationTime && this.addToGUIDevicesList();
        }
    }
    var n = o;
}), b.register('ODdE7', function(b, i) {
    a(b.exports, 'Messages', function() {
        return c;
    });
    const c = {
        clicked: 'clicked'
    };
});