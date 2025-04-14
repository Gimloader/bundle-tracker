function e(e, t, o, i) {
    Object.defineProperty(e, t, {
        get: o,
        set: i,
        enumerable: !0,
        configurable: !0
    })
}

function t(e) {
    return e && e.__esModule ? e.default : e
}
var o = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
o.register("kvxni", (function(t, i) {
    var s;
    s = t.exports, Object.defineProperty(s, "__esModule", {
        value: !0,
        configurable: !0
    }), e(t.exports, "default", (function() {
        return C
    }));
    var n = o("divCp"),
        l = o("6Tpu2"),
        a = o("bNmF9"),
        r = o("k2fnS"),
        c = o("5XFJB"),
        d = o("2BPYb"),
        u = o("4uojN"),
        p = o("dPNN3"),
        h = o("alREA"),
        f = o("h6SIm"),
        v = o("gwuwo"),
        m = o("z5iun"),
        g = o("cmvpZ");
    class y extends a.default {
        constructor(e) {
            if (super(e), (0, n.default)(this, "getPopupListItems", (() => {
                    const e = [],
                        t = (0, v.default)().worldManager.devices.allDevices.filter((e => e.deviceOption.id === m.default.popupListItem)).filter((e => e.options.group === this.options.group)).filter((e => {
                            var t, o, i, s;
                            return !(!(null === (t = e.options) || void 0 === t || null === (o = t.title) || void 0 === o ? void 0 : o.length) && !(null === (i = e.options) || void 0 === i || null === (s = i.description) || void 0 === s ? void 0 : s.length))
                        })).filter((e => !0 === e.state.active)).sort(((e, t) => e.y - t.y));
                    return (0, g.take)(t, 25).forEach((t => {
                        e.push({
                            id: t.id,
                            title: t.options.title,
                            description: t.options.description,
                            image: t.options.image
                        })
                    })), e
                })), (0, n.default)(this, "onPopupListItemStateChange", (() => {
                    this.deviceUI.update({
                        listItems: this.getPopupListItems()
                    })
                })), (0, n.default)(this, "openDeviceUI", (() => {
                    const e = this.options.callToActionStyle === r.TextExplainerCallToActionStyle.list;
                    this.deviceUI.open({
                        style: e ? r.TextExplainerStyle.modal : this.options.style,
                        iconImage: this.options.iconImage,
                        header: this.state.header,
                        content: this.state.content,
                        listItems: e ? this.getPopupListItems() : [],
                        callToActionLabel: this.options.callToActionLabel,
                        secondaryCallToActionLabel: this.options.secondaryCallToActionLabel,
                        fontFamily: this.options.fontFamily,
                        backgroundColor: this.options.backgroundColor,
                        textColor: this.state.textColor,
                        closableByUser: this.options.closableByUser,
                        openPrimaryCallToAction: this.openPrimaryCallToAction,
                        openSecondaryCallToAction: this.openSecondaryCallToAction,
                        onSelectListItem: this.onSelectListItem
                    })
                })), (0, n.default)(this, "onStateChange", (e => {
                    "header" === e && this.deviceUI.update({
                        header: this.state.header
                    }), "content" === e && this.deviceUI.update({
                        content: this.state.content
                    }), "textColor" === e && this.deviceUI.update({
                        textColor: this.state.textColor
                    })
                })), (0, n.default)(this, "openPrimaryCallToAction", (() => {
                    this.sendToServerDevice(c.Messages.primaryCallToAction)
                })), (0, n.default)(this, "openSecondaryCallToAction", (() => {
                    this.sendToServerDevice(c.Messages.secondaryCallToAction)
                })), (0, n.default)(this, "onSelectListItem", (e => {
                    this.options.closableByUser && this.deviceUI.close(), this.sendToServerDevice(c.Messages.selectListItem, {
                        id: e
                    })
                })), (0, d.default)({
                    familyName: this.options.fontFamily
                }), (0, l.InPreGamePhase)() && (0, u.isSavedVersion)()) {
                const e = f.default.Overlay;
                new(0, p.default)({
                    device: this,
                    baseColor: e.baseColor,
                    boxColor: e.boxColor,
                    content: {
                        icon: {
                            image: (0, h.default)("devices/text_explainer/icon.png"),
                            scale: .92
                        }
                    }
                })
            }
        }
    }
    var C = y
})), o.register("5XFJB", (function(t, o) {
    let i;
    var s;
    e(t.exports, "Messages", (function() {
        return i
    })), (s = i || (i = {})).primaryCallToAction = "primaryCallToAction", s.secondaryCallToAction = "secondaryCallToAction", s.selectListItem = "selectListItem"
})), o.register("2BPYb", (function(i, s) {
    e(i.exports, "isGoogleFontLoaded", (function() {
        return a
    })), e(i.exports, "default", (function() {
        return r
    }));
    var n = o("7P9gc");
    const l = [],
        a = e => l.includes(e);
    var r = e => {
        const {
            familyName: o,
            onLoad: i
        } = e;
        l.includes(o) ? i && i() : t(n).load({
            google: {
                families: [`${o}:400,700`]
            },
            fontactive: e => {
                l.includes(e) || l.push(e), o === e && i && i()
            }
        })
    }
}));