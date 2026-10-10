import {
    t as e
} from "./GetAssetPath.js";
import {
    t
} from "./lodash.js";
import {
    t as n
} from "./FetchScene.js";
import {
    n as r
} from "./isVersion.js";
import {
    r as i
} from "./InPhase.js";
import {
    t as a
} from "./Device.js";
import {
    n as o
} from "./TutorialConsts.js";
import {
    F as s,
    I as c,
    Ot as l,
    Tt as u
} from "./App-42.js";
import {
    t as d
} from "./LoadGoogleFontAfterSceneStart.js";
var f = function(e) {
        return e.primaryCallToAction = `primaryCallToAction`, e.secondaryCallToAction = `secondaryCallToAction`, e.selectListItem = `selectListItem`, e
    }({}),
    p = t(),
    m = class extends a {
        constructor(t) {
            if (super(t), this.getPopupListItems = () => {
                    let e = [],
                        t = n().worldManager.devices.allDevices.filter(e => e.deviceOption.id === o.popupListItem).filter(e => e.options.group === this.options.group).filter(e => {
                            var t, n;
                            return !!((t = e.options) != null && (t = t.title) != null && t.length || (n = e.options) != null && (n = n.description) != null && n.length)
                        }).filter(e => e.state.active === !0).sort((e, t) => e.y - t.y);
                    return (0, p.take)(t, 25).forEach(t => {
                        e.push({
                            id: t.id,
                            title: t.options.title,
                            description: t.options.description,
                            image: t.options.image
                        })
                    }), e
                }, this.onPopupListItemStateChange = () => {
                    this.deviceUI.update({
                        listItems: this.getPopupListItems()
                    })
                }, this.openDeviceUI = () => {
                    let e = this.options.callToActionStyle === s.list;
                    this.deviceUI.open({
                        style: e ? c.modal : this.options.style,
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
                }, this.onStateChange = e => {
                    e === `header` && this.deviceUI.update({
                        header: this.state.header
                    }), e === `content` && this.deviceUI.update({
                        content: this.state.content
                    }), e === `textColor` && this.deviceUI.update({
                        textColor: this.state.textColor
                    })
                }, this.openPrimaryCallToAction = () => {
                    this.sendToServerDevice(f.primaryCallToAction)
                }, this.openSecondaryCallToAction = () => {
                    this.sendToServerDevice(f.secondaryCallToAction)
                }, this.onSelectListItem = e => {
                    this.options.closableByUser && this.deviceUI.close(), this.sendToServerDevice(f.selectListItem, {
                        id: e
                    })
                }, d({
                    familyName: this.options.fontFamily
                }), i() && r()) {
                let t = l.Overlay;
                new u({
                    device: this,
                    baseColor: t.baseColor,
                    boxColor: t.boxColor,
                    content: {
                        icon: {
                            image: e(`devices/text_explainer/icon.png`),
                            scale: .92
                        }
                    }
                })
            }
        }
    };
export {
    m as
    default
};