function a(a, b, c, w) {
    Object.defineProperty(a, b, {
        get: c,
        set: w,
        enumerable: !0,
        configurable: !0
    });
}

function b(a) {
    return a && a.__esModule ? a.default : a;
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('HK4Aj', function(b, w) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), a(b.exports, 'default', function() {
        return s;
    });
    var e = c('UM8oI'),
        f = c('5Ux1a'),
        g = c('sgILU'),
        h = c('f2ohb'),
        i = c('n8ScY'),
        j = c('crVjo2'),
        k = c('Bpt+p'),
        l = c('phu0d'),
        m = c('JJQ0+'),
        n = c('Gqspz'),
        o = c('dAmf5'),
        p = c('7X8h3'),
        q = c('4/f+U');
    class r extends g.default {
        constructor(a) {
            if (super(a), (0, e.default)(this, 'getPopupListItems', () => {
                    const s = [],
                        t = (0, o.default)().worldManager.devices.allDevices.filter(s => s.deviceOption.id === p.default.popupListItem).filter(s => s.options.group === this.options.group).filter(s => {
                            var u, v, w, x;
                            return !(!(null === (u = s.options) || void 0 === u || null === (v = u.title) || void 0 === v ? void 0 : v.length) && !(null === (w = s.options) || void 0 === w || null === (x = w.description) || void 0 === x ? void 0 : x.length));
                        }).filter(s => !0 === s.state.active).sort((s, t) => s.y - t.y);
                    return (0, q.take)(t, 25).forEach(t => {
                        s.push({
                            id: t.id,
                            title: t.options.title,
                            description: t.options.description,
                            image: t.options.image
                        });
                    }), s;
                }), (0, e.default)(this, 'onPopupListItemStateChange', () => {
                    this.deviceUI.update({
                        listItems: this.getPopupListItems()
                    });
                }), (0, e.default)(this, 'openDeviceUI', () => {
                    const s = this.options.callToActionStyle === h.TextExplainerCallToActionStyle.list;
                    this.deviceUI.open({
                        style: s ? h.TextExplainerStyle.modal : this.options.style,
                        iconImage: this.options.iconImage,
                        header: this.state.header,
                        content: this.state.content,
                        listItems: s ? this.getPopupListItems() : [],
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
                }), (0, e.default)(this, 'onStateChange', a => {
                    'header' === a && this.deviceUI.update({
                        header: this.state.header
                    }), 'content' === a && this.deviceUI.update({
                        content: this.state.content
                    }), 'textColor' === a && this.deviceUI.update({
                        textColor: this.state.textColor
                    });
                }), (0, e.default)(this, 'openPrimaryCallToAction', () => {
                    this.sendToServerDevice(i.Messages.primaryCallToAction);
                }), (0, e.default)(this, 'openSecondaryCallToAction', () => {
                    this.sendToServerDevice(i.Messages.secondaryCallToAction);
                }), (0, e.default)(this, 'onSelectListItem', a => {
                    this.options.closableByUser && this.deviceUI.close(), this.sendToServerDevice(i.Messages.selectListItem, {
                        id: a
                    });
                }), (0, j.default)({
                    familyName: this.options.fontFamily
                }), (0, f.InPreGamePhase)() && (0, k.isSavedVersion)()) {
                const s = n.default.Overlay;
                new(0, l.default)({
                    device: this,
                    baseColor: s.baseColor,
                    boxColor: s.boxColor,
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
    var s = t;
}), c.register('n8ScY', function(b, c) {
    let d;
    var e;
    a(b.exports, 'Messages', function() {
        return d;
    }), (e = d || (d = {})).primaryCallToAction = 'primaryCallToAction', e.secondaryCallToAction = 'secondaryCallToAction', e.selectListItem = 'selectListItem';
}), c.register('crVjo2', function(i, s) {
    a(i.exports, 'isGoogleFontLoaded', function() {
        return f;
    }), a(i.exports, 'default', function() {
        return g;
    });
    var d = c('2qGsE');
    const e = [],
        f = a => e.includes(a);
    var g = a => {
        const {
            familyName: h,
            onLoad: i
        } = j;
        e.includes(h) ? i && i() : b(d).load({
            google: {
                families: [`${ h }:400,700`]
            },
            fontactive: j => {
                e.includes(j) || e.push(j), h === j && i && i();
            }
        });
    };
});