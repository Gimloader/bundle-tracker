import {
    al as m
} from "./App-41.js";
import {
    G as t
} from "./GetAssetPath.js";
import {
    L as p
} from "./LoadGoogleFontAfterSceneStart.js";
import {
    d as s,
    e as a
} from "./FixSpinePlugin.js";
import "./_index.js";
import "./Button.js";
import "./polished.esm.js";
import "./inheritsLoose.js";
import "./mobxreact.esm.js";
import "./index-21.js";
import "./QuizTypes.js";
import "./MapModeType.js";
import "./TutorialConsts.js";
import "./ActionButton.js";
import "./index-5.js";
import "./playSound.js";
import "./howler.js";
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
import "./MapStyle.js";
import "./FillRemainingSpace.js";
import "./index-24.js";
const n = {
        imageId: t("devices/counter/frame.png"),
        imageUrl: t("devices/counter/frame.png")
    },
    h = {
        imageId: t("devices/counter/background.png"),
        imageUrl: t("devices/counter/background.png")
    };
class zt extends m {
    constructor(e) {
        if (super(e), this.textScale = 1, this.onStateChange = o => {
                var i;
                o === "counter" && (i = this.text) != null && i.view && (this.text.view.setText(this.state.counter + ""), this.updateTextScale(), this.tweens.add({
                    targets: [this.text.view],
                    duration: 100,
                    scaleX: this.textScale * .8,
                    scaleY: this.textScale * .8,
                    yoyo: !0
                }))
            }, this.updateTextScale = () => {
                this.textScale = Math.min(3 / this.text.view.text.length, 1), this.text.view.setScale(this.textScale)
            }, (s() || a()) && !this.options.visibleInGame) return;
        this.bg = this.parts.add.sprite(h), this.frame = this.parts.add.sprite(n), this.bg.view.setScale(.5), this.frame.view.setScale(.5);
        const r = (this.state.counter ?? this.options.startingValue ?? 0) + "";
        this.text = this.parts.add.text({
            y: 2,
            textStyle: {
                fontFamily: "Fugaz One"
            },
            text: r
        }), this.text.view.alpha = 0, p({
            familyName: "Fugaz One",
            onLoad: () => {
                this.isDestroyed || (this.text.view.setFontFamily("'Fugaz One'"), this.text.view.alpha = 1)
            }
        }), this.updateTextScale()
    }
}
export {
    zt as
    default
};