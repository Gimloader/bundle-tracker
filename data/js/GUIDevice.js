function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('GLWjK', function(c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'default', function() {
        return _p;
    });
    var f = b('s/YA9'),
        g = b('fI6of'),
        h = b('UaUBz0'),
        i = b('hycyg'),
        j = b('UkCpC'),
        k = b('ltxDW'),
        l = b('73Aki'),
        m = b('AHhkR'),
        n = b('mODY9');
    class o extends k.default {
        constructor(p) {
            if (super(p), (0, f.default)(this, 'addToGUIDevicesList', () => {
                    g.default.gui.guiSlots.some(p => p.id === this.id) || (g.default.gui.guiSlots.push({
                        id: this.id,
                        position: this.options.position,
                        text: this.state.text || this.options.text,
                        trackedItemId: this.options.trackedItemId,
                        showTrackedItemMaximumAmount: this.options.showTrackedItemMaximumAmount,
                        type: this.options.type,
                        priority: this.state.activationTime,
                        color: this.options.color
                    }), g.default.gui.guiSlots.replace(g.default.gui.guiSlots.slice().sort((p, b) => b.priority - p.priority)), g.default.gui.guiSlotsChangeCounter += 1);
                }), (0, f.default)(this, 'removeFromGUIDevicesList', () => {
                    g.default.gui.guiSlots.replace(g.default.gui.guiSlots.filter(p => p.id !== this.id)), g.default.gui.guiSlotsChangeCounter += 1;
                }), (0, f.default)(this, 'onTextUpdated', () => {
                    const q = g.default.gui.guiSlots.find(q => q.id === this.id);
                    q && (q.text = this.state.text || this.options.text, g.default.gui.guiSlotsChangeCounter += 1);
                }), (0, f.default)(this, 'onStateChange', p => {
                    'activationTime' === p && (this.state.activationTime ? this.addToGUIDevicesList() : this.removeFromGUIDevicesList()), 'text' === p && this.onTextUpdated();
                }), (0, f.default)(this, 'onDestroy', () => {
                    this.removeFromGUIDevicesList();
                }), (0, f.default)(this, 'buttonClicked', () => {
                    this.sendToServerDevice(n.Messages.clicked);
                }), (0, j.InPreGamePhase)() && (0, i.isSavedVersion)()) {
                const q = m.default.Overlay;
                new(0, l.default)({
                    device: this,
                    baseColor: q.baseColor,
                    boxColor: q.boxColor,
                    content: {
                        icon: {
                            image: (0, h.default)('devices/gui/icon.png'),
                            scale: 0.9
                        }
                    }
                });
            }
            this.state.activationTime && this.addToGUIDevicesList();
        }
    }
    var _p = o;
}), b.register('mODY9', function(c, d) {
    a(c.exports, 'Messages', function() {
        return _e;
    });
    const _e = {
        clicked: 'clicked'
    };
});