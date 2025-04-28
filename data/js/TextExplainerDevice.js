function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}

function a(b) {
    return b && b.__esModule ? b.default : b;
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('fkXMC', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _s(b.exports, 'default', function() {
        return _s;
    });
    var e = a('1bFPu'),
        f = a('/pbxo'),
        g = a('I35Ay'),
        h = a('0G3r4'),
        i = a('JGlqN'),
        j = a('sCbH9'),
        k = a('9tz3H'),
        l = a('+uQv7'),
        m = a('2Xvuf'),
        n = a('dTXti'),
        o = a('D5xLI'),
        p = a('EqyfB'),
        q = a('4iV4e');
    class r extends g.default {
        constructor(_s) {
            if (super(_s), (0, e.default)(this, 'getPopupListItems', () => {
                    const t = [],
                        u = (0, o.default)().worldManager.devices.allDevices.filter(t => t.deviceOption.id === p.default.popupListItem).filter(t => t.options.group === this.options.group).filter(t => {
                            var v, w, x, y;
                            return !(!(null === (v = t.options) || void 0 === v || null === (w = v.title) || void 0 === w ? void 0 : w.length) && !(null === (x = t.options) || void 0 === x || null === (y = x.description) || void 0 === y ? void 0 : y.length));
                        }).filter(t => !0 === t.state.active).sort((t, u) => t.y - u.y);
                    return (0, q.take)(u, 25).forEach(u => {
                        t.push({
                            id: u.id,
                            title: u.options.title,
                            description: u.options.description,
                            image: u.options.image
                        });
                    }), t;
                }), (0, e.default)(this, 'onPopupListItemStateChange', () => {
                    this.deviceUI.update({
                        listItems: this.getPopupListItems()
                    });
                }), (0, e.default)(this, 'openDeviceUI', () => {
                    const t = this.options.callToActionStyle === h.TextExplainerCallToActionStyle.list;
                    this.deviceUI.open({
                        style: t ? h.TextExplainerStyle.modal : this.options.style,
                        iconImage: this.options.iconImage,
                        header: this.state.header,
                        content: this.state.content,
                        listItems: t ? this.getPopupListItems() : [],
                        callToActionLabel: this.options.callToActionLabel,
                        secondaryCallToActionLabel: this.options.secondaryCallToActionLabel,
                        fontFamily: this.options.fontFamily,
                        backgroundColor: this.options.backgroundColor,
                        textColor: this.state.textColor,
                        closableByUser: this.options.closableByUser,
                        openPrimaryCallToAction: this.openPrimaryCallToAction,
                        openSecondaryCallToAction: this.openSecondaryCallToAction,
                        onSelectListItem: this.onSelectListItem
                    });
                }), (0, e.default)(this, 'onStateChange', _s => {
                    'header' === _s && this.deviceUI.update({
                        header: this.state.header
                    }), 'content' === _s && this.deviceUI.update({
                        content: this.state.content
                    }), 'textColor' === _s && this.deviceUI.update({
                        textColor: this.state.textColor
                    });
                }), (0, e.default)(this, 'openPrimaryCallToAction', () => {
                    this.sendToServerDevice(i.Messages.primaryCallToAction);
                }), (0, e.default)(this, 'openSecondaryCallToAction', () => {
                    this.sendToServerDevice(i.Messages.secondaryCallToAction);
                }), (0, e.default)(this, 'onSelectListItem', _s => {
                    this.options.closableByUser && this.deviceUI.close(), this.sendToServerDevice(i.Messages.selectListItem, {
                        id: _s
                    });
                }), (0, j.default)({
                    familyName: this.options.fontFamily
                }), (0, f.InPreGamePhase)() && (0, k.isSavedVersion)()) {
                const t = n.default.Overlay;
                new(0, l.default)({
                    device: this,
                    baseColor: t.baseColor,
                    boxColor: t.boxColor,
                    content: {
                        icon: {
                            image: (0, m.default)('devices/text_explainer/icon.png'),
                            scale: 0.92
                        }
                    }
                });
            }
        }
    }
    var _s = r;
}), a.register('JGlqN', function(b, c) {
    let d;
    var e;
    e(b.exports, 'Messages', function() {
        return d;
    }), (e = d || (d = {})).primaryCallToAction = 'primaryCallToAction', e.secondaryCallToAction = 'secondaryCallToAction', e.selectListItem = 'selectListItem';
}), a.register('sCbH9', function(b, c) {
    e(b.exports, 'isGoogleFontLoaded', function() {
        return _f;
    }), e(b.exports, 'default', function() {
        return _g;
    });
    var d = a('/oq/k');
    const e = [],
        _f = e => e.includes(e);
    var _g = e => {
        const {
            familyName: h,
            onLoad: i
        } = e;
        e.includes(h) ? i && i() : t(d).load({
            google: {
                families: [`${ h }:400,700`]
            },
            fontactive: e => {
                e.includes(e) || e.push(e), h === e && i && i();
            }
        });
    };
});