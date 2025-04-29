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
c.register('nj2x1', function(d, e) {
    var f;
    f = d.exports, Object.defineProperty(f, '__esModule', {
        value: !0,
        configurable: !0
    }), a(d.exports, 'default', function() {
        return _u;
    });
    var g = c('s/YA9'),
        h = c('UkCpC'),
        i = c('ltxDW'),
        j = c('l3REq'),
        k = c('d5WQ6'),
        l = c('bMaPZ2'),
        m = c('hycyg'),
        n = c('73Aki'),
        o = c('UaUBz0'),
        p = c('AHhkR'),
        q = c('heTaO'),
        r = c('OFuf70'),
        s = c('9zaF+');
    class t extends i.default {
        constructor(u) {
            if (super(u), (0, g.default)(this, 'getPopupListItems', () => {
                    const v = [],
                        w = (0, q.default)().worldManager.devices.allDevices.filter(v => v.deviceOption.id === r.default.popupListItem).filter(v => v.options.group === this.options.group).filter(v => {
                            var x, y, z, A;
                            return !(!(null === (x = v.options) || void 0 === x || null === (y = x.title) || void 0 === y ? void 0 : y.length) && !(null === (z = v.options) || void 0 === z || null === (A = z.description) || void 0 === A ? void 0 : A.length));
                        }).filter(v => !0 === v.state.active).sort((v, w) => v.y - w.y);
                    return (0, s.take)(w, 25).forEach(w => {
                        v.push({
                            id: w.id,
                            title: w.options.title,
                            description: w.options.description,
                            image: w.options.image
                        });
                    }), v;
                }), (0, g.default)(this, 'onPopupListItemStateChange', () => {
                    this.deviceUI.update({
                        listItems: this.getPopupListItems()
                    });
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
                }), (0, g.default)(this, 'onStateChange', u => {
                    'header' === u && this.deviceUI.update({
                        header: this.state.header
                    }), 'content' === u && this.deviceUI.update({
                        content: this.state.content
                    }), 'textColor' === u && this.deviceUI.update({
                        textColor: this.state.textColor
                    });
                }), (0, g.default)(this, 'openPrimaryCallToAction', () => {
                    this.sendToServerDevice(k.Messages.primaryCallToAction);
                }), (0, g.default)(this, 'openSecondaryCallToAction', () => {
                    this.sendToServerDevice(k.Messages.secondaryCallToAction);
                }), (0, g.default)(this, 'onSelectListItem', u => {
                    this.options.closableByUser && this.deviceUI.close(), this.sendToServerDevice(k.Messages.selectListItem, {
                        id: u
                    });
                }), (0, l.default)({
                    familyName: this.options.fontFamily
                }), (0, h.InPreGamePhase)() && (0, m.isSavedVersion)()) {
                const v = p.default.Overlay;
                new(0, n.default)({
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
}), c.register('d5WQ6', function(d, e) {
    let f;
    var g;
    a(d.exports, 'Messages', function() {
        return f;
    }), (g = f || (f = {})).primaryCallToAction = 'primaryCallToAction', g.secondaryCallToAction = 'secondaryCallToAction', g.selectListItem = 'selectListItem';
}), c.register('bMaPZ2', function(d, e) {
    a(d.exports, 'isGoogleFontLoaded', function() {
        return _h;
    }), a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('TptDc');
    const g = [],
        _h = a => g.includes(a);
    var _i = a => {
        const {
            familyName: j,
            onLoad: k
        } = a;
        g.includes(j) ? k && k() : b(f).load({
            google: {
                families: [`${ j }:400,700`]
            },
            fontactive: a => {
                g.includes(a) || g.push(a), j === a && k && k();
            }
        });
    };
});