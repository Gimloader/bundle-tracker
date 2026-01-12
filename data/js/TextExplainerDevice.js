import {
    a as l,
    I as c,
    i as h
} from "./FixSpinePlugin.js";
import {
    al as d,
    a$ as C,
    b0 as y,
    am as I,
    an as v
} from "./App-41.js";
import {
    L as T
} from "./LoadGoogleFontAfterSceneStart.js";
import {
    G as f
} from "./GetAssetPath.js";
import {
    D as u
} from "./TutorialConsts.js";
import {
    ar as A
} from "./_index.js";
import "./MapModeType.js";
import "./MapStyle.js";
import "./playSound.js";
import "./howler.js";
import "./Button.js";
import "./polished.esm.js";
import "./inheritsLoose.js";
import "./mobxreact.esm.js";
import "./index-21.js";
import "./QuizTypes.js";
import "./ActionButton.js";
import "./index-5.js";
import "./index-18.js";
import "./context.js";
import "./FontAwesomeIcon.js";
import "./Centered.js";
import "./CapitalizeFirstLetter.js";
import "./index-4.js";
import "./motion.js";
import "./index-2.js";
import "./index-14.js";
import "./EditOutlined.js";
import "./styleChecker.js";
import "./index-3.js";
import "./CheckOutlined.js";
import "./CopyOutlined.js";
import "./SixteenByNineScaler.js";
import "./index-20.js";
import "./index-22.js";
import "./index-1.js";
import "./progress.js";
import "./ElementIds.js";
import "./SeasonTicketName.js";
import "./useQuery.js";
import "./___vite-browser-external_commonjs-proxy.js";
import "./util-1.js";
import "./util-2.js";
import "./Shortcut.js";
import "./Names.js";
import "./useWillUnmount.js";
import "./use-motion-value.js";
import "./use-transform.js";
import "./index-6.js";
import "./AccessibleAnchor.js";
import "./CircularProgress.js";
import "./capitalize.js";
import "./index-17.js";
import "./use-force-update.js";
import "./GimkitLiveQuestion.js";
import "./Text.js";
import "./getCloudinaryUrl.js";
import "./LazyLatexRenderer.js";
import "./Tooltip.js";
import "./index-9.js";
import "./index-23.js";
import "./useIntervalWhen.js";
import "./index-10.js";
import "./move.js";
import "./react-flip-move.es.js";
import "./sounds.js";
import "./App-5.js";
import "./AnimatedBackground-2.js";
import "./useDebouncedValue.js";
import "./FillRemainingSpace.js";
import "./index-24.js";
var r = (i => (i.primaryCallToAction = "primaryCallToAction", i.secondaryCallToAction = "secondaryCallToAction", i.selectListItem = "selectListItem", i))(r || {});
class Vt extends d {
    constructor(m) {
        if (super(m), this.getPopupListItems = () => {
                const o = [],
                    n = l().worldManager.devices.allDevices.filter(t => t.deviceOption.id === u.popupListItem).filter(t => t.options.group === this.options.group).filter(t => {
                        var e, s, p, a;
                        return !!((s = (e = t.options) == null ? void 0 : e.title) != null && s.length || (a = (p = t.options) == null ? void 0 : p.description) != null && a.length)
                    }).filter(t => t.state.active === !0).sort((t, e) => t.y - e.y);
                return A.take(n, 25).forEach(t => {
                    o.push({
                        id: t.id,
                        title: t.options.title,
                        description: t.options.description,
                        image: t.options.image
                    })
                }), o
            }, this.onPopupListItemStateChange = () => {
                this.deviceUI.update({
                    listItems: this.getPopupListItems()
                })
            }, this.openDeviceUI = () => {
                const o = this.options.callToActionStyle === C.list;
                this.deviceUI.open({
                    style: o ? y.modal : this.options.style,
                    iconImage: this.options.iconImage,
                    header: this.state.header,
                    content: this.state.content,
                    listItems: o ? this.getPopupListItems() : [],
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
            }, this.onStateChange = o => {
                o === "header" && this.deviceUI.update({
                    header: this.state.header
                }), o === "content" && this.deviceUI.update({
                    content: this.state.content
                }), o === "textColor" && this.deviceUI.update({
                    textColor: this.state.textColor
                })
            }, this.openPrimaryCallToAction = () => {
                this.sendToServerDevice(r.primaryCallToAction)
            }, this.openSecondaryCallToAction = () => {
                this.sendToServerDevice(r.secondaryCallToAction)
            }, this.onSelectListItem = o => {
                this.options.closableByUser && this.deviceUI.close(), this.sendToServerDevice(r.selectListItem, {
                    id: o
                })
            }, T({
                familyName: this.options.fontFamily
            }), c() && h()) {
            const o = v.Overlay;
            new I({
                device: this,
                baseColor: o.baseColor,
                boxColor: o.boxColor,
                content: {
                    icon: {
                        image: f("devices/text_explainer/icon.png"),
                        scale: .92
                    }
                }
            })
        }
    }
}
export {
    Vt as
    default
};