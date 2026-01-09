import {
    G as s
} from "./GetAssetPath.js";
import {
    a,
    I as n,
    i as c
} from "./FixSpinePlugin.js";
import {
    al as l,
    am as d,
    an as h
} from "./App-41.js";
import {
    D as u
} from "./TutorialConsts.js";
import "./_index.js";
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
const m = e => {
    const i = [],
        {
            options: t
        } = e;
    for (let o = 1; o <= 4; o++) {
        const r = t[`action${o}Text`];
        r && i.push({
            text: r,
            index: o
        })
    }
    return a().worldManager.devices.allDevices.filter(o => o.deviceOption.id === u.dialogueAction).filter(o => o.options.group === t.group || !o.options.group && !t.group).filter(o => !!o.options.text.length).filter(o => o.state.active === !0).sort((o, r) => o.y - r.y).forEach(o => {
        i.push({
            text: o.options.text,
            action: o.id
        })
    }), i.slice(0, 10)
};
class To extends l {
    constructor(i) {
        if (super(i), this.openDeviceUI = () => {
                this.deviceUI.open({
                    message: this.options.message,
                    actions: m(this),
                    send: (t, p) => {
                        this.sendToServerDevice(t, p)
                    },
                    font: this.options.font,
                    character: this.options.character,
                    typewriter: this.options.typewriter,
                    darkenBackground: this.options.darkenBackground
                })
            }, this.onDialogueActionChange = () => {
                this.deviceUI.update({
                    actions: m(this)
                })
            }, n() && c()) {
            const t = h.Overlay;
            new d({
                device: this,
                baseColor: t.baseColor,
                boxColor: t.boxColor,
                content: {
                    icon: {
                        image: s("devices/dialogue/icon.png"),
                        scale: .92
                    }
                }
            })
        }
    }
}
export {
    To as
    default
};