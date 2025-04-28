function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('IvDBZ', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _o(b.exports, 'default', function() {
        return _o;
    });
    var e = a('1bFPu'),
        f = a('iWivW'),
        g = a('2Xvuf'),
        h = a('9tz3H'),
        i = a('/pbxo'),
        j = a('I35Ay'),
        k = a('+uQv7'),
        l = a('dTXti'),
        m = a('irK9p');
    class n extends j.default {
        constructor(_o) {
            if (super(_o), (0, e.default)(this, 'addToGUIDevicesList', () => {
                    f.default.gui.guiSlots.some(_o => _o.id === this.id) || (f.default.gui.guiSlots.push({
                        id: this.id,
                        position: this.options.position,
                        text: this.state.text || this.options.text,
                        trackedItemId: this.options.trackedItemId,
                        showTrackedItemMaximumAmount: this.options.showTrackedItemMaximumAmount,
                        type: this.options.type,
                        priority: this.state.activationTime,
                        color: this.options.color
                    }), f.default.gui.guiSlots.replace(f.default.gui.guiSlots.slice().sort((_o, a) => a.priority - _o.priority)), f.default.gui.guiSlotsChangeCounter += 1);
                }), (0, e.default)(this, 'removeFromGUIDevicesList', () => {
                    f.default.gui.guiSlots.replace(f.default.gui.guiSlots.filter(_o => _o.id !== this.id)), f.default.gui.guiSlotsChangeCounter += 1;
                }), (0, e.default)(this, 'onTextUpdated', () => {
                    const p = f.default.gui.guiSlots.find(p => p.id === this.id);
                    p && (p.text = this.state.text || this.options.text, f.default.gui.guiSlotsChangeCounter += 1);
                }), (0, e.default)(this, 'onStateChange', _o => {
                    'activationTime' === _o && (this.state.activationTime ? this.addToGUIDevicesList() : this.removeFromGUIDevicesList()), 'text' === _o && this.onTextUpdated();
                }), (0, e.default)(this, 'onDestroy', () => {
                    this.removeFromGUIDevicesList();
                }), (0, e.default)(this, 'buttonClicked', () => {
                    this.sendToServerDevice(m.Messages.clicked);
                }), (0, i.InPreGamePhase)() && (0, h.isSavedVersion)()) {
                const p = l.default.Overlay;
                new(0, k.default)({
                    device: this,
                    baseColor: p.baseColor,
                    boxColor: p.boxColor,
                    content: {
                        icon: {
                            image: (0, g.default)('devices/gui/icon.png'),
                            scale: 0.9
                        }
                    }
                });
            }
            this.state.activationTime && this.addToGUIDevicesList();
        }
    }
    var _o = n;
}), a.register('irK9p', function(b, c) {
    t(b.exports, 'Messages', function() {
        return _d;
    });
    const _d = {
        clicked: 'clicked'
    };
});