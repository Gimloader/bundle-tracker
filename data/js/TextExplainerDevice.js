function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
function b(c) {
    return c && c.__esModule ? c.default : c;
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('.....', function (d, e) {
    var f;
    f = d.exports, Object.defineProperty(f, '__esModule', {
        value: !0,
        configurable: !0
    }), a(d.exports, 'default', function () {
        return _u;
    });
    var g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....'), r = c('.....'), s = c('.....');
    class t extends i.default {
        constructor(u) {
            if (super(u), (0, g.default)(this, 'getPopupListItems', () => {
                    const v = [], w = (0, q.default)().worldManager.devices.allDevices.filter(x => x.deviceOption.id === r.default.popupListItem).filter(x => x.options.group === this.options.group).filter(x => {
                            var y, z, A, B;
                            return !(!(null === (y = x.options) || void 0 === y || null === (z = y.title) || void 0 === z ? void 0 : z.length) && !(null === (A = x.options) || void 0 === A || null === (B = A.description) || void 0 === B ? void 0 : B.length));
                        }).filter(x => !0 === x.state.active).sort((x, y) => x.y - y.y);
                    return (0, s.take)(w, 25).forEach(x => {
                        v.push({
                            id: x.id,
                            title: x.options.title,
                            description: x.options.description,
                            image: x.options.image
                        });
                    }), v;
                }), (0, g.default)(this, 'onPopupListItemStateChange', () => {
                    this.deviceUI.update({ listItems: this.getPopupListItems() });
                }), (0, g.default)(this, 'openDeviceUI', () => {
                    const v = this.options.callToActionStyle === j.TextExplainerCallToActionStyle.list;
                    this.deviceUI.open({
                        style: v ? j.TextExplainerStyle.modal : this.options.style,
                        iconImage: this.options.iconImage,
                        header: this.state.header,
                        content: this.state.content,
                        listItems: v ? this.getPopupListItems() : [],
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
                }), (0, g.default)(this, 'onStateChange', v => {
                    'header' === v && this.deviceUI.update({ header: this.state.header }), 'content' === v && this.deviceUI.update({ content: this.state.content }), 'textColor' === v && this.deviceUI.update({ textColor: this.state.textColor });
                }), (0, g.default)(this, 'openPrimaryCallToAction', () => {
                    this.sendToServerDevice(k.Messages.primaryCallToAction);
                }), (0, g.default)(this, 'openSecondaryCallToAction', () => {
                    this.sendToServerDevice(k.Messages.secondaryCallToAction);
                }), (0, g.default)(this, 'onSelectListItem', v => {
                    this.options.closableByUser && this.deviceUI.close(), this.sendToServerDevice(k.Messages.selectListItem, { id: v });
                }), (0, l.default)({ familyName: this.options.fontFamily }), (0, h.InPreGamePhase)() && (0, m.isSavedVersion)()) {
                const v = p.default.Overlay;
                new (0, n.default)({
                    device: this,
                    baseColor: v.baseColor,
                    boxColor: v.boxColor,
                    content: {
                        icon: {
                            image: (0, o.default)('devices/text_explainer/icon.png'),
                            scale: 0.92
                        }
                    }
                });
            }
        }
    }
    var _u = t;
}), c.register('.....', function (d, e) {
    let f;
    var g;
    a(d.exports, 'Messages', function () {
        return f;
    }), (g = f || (f = {})).primaryCallToAction = 'primaryCallToAction', g.secondaryCallToAction = 'secondaryCallToAction', g.selectListItem = 'selectListItem';
}), c.register('.....', function (d, e) {
    a(d.exports, 'isGoogleFontLoaded', function () {
        return _h;
    }), a(d.exports, 'default', function () {
        return _i;
    });
    var f = c('.....');
    const g = [], _h = i => g.includes(i);
    var _i = j => {
        const {
            familyName: k,
            onLoad: l
        } = j;
        g.includes(k) ? l && l() : b(f).load({
            google: { families: [`${ k }:400,700`] },
            fontactive: m => {
                g.includes(m) || g.push(m), k === m && l && l();
            }
        });
    };
});