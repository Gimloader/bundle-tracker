import {
    I as s,
    c,
    i as d
} from "./FixSpinePlugin.js";
import {
    F as l,
    R as u
} from "./ReplaceVisualEditingPreview.js";
import {
    al as v,
    as as w,
    aD as o,
    aE as f,
    aF as p,
    L as g
} from "./App-41.js";
import {
    G as n
} from "./GetAssetPath.js";
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
import "./TutorialConsts.js";
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
var h = (r => (r.interacted = "interacted", r))(h || {});
const a = 34;
class Gt extends v {
    constructor(m) {
        super(m), this.onStateChange = t => {
            s() || t === "active" && (this.state.active ? (this.interactiveZones.setForceDisabled(!1), this.tweenAlpha(1)) : (this.interactiveZones.setForceDisabled(!0), this.tweenAlpha(0)))
        }, this.createPreviewVisuals = () => {
            const t = this.options.skinId.replace("character_", ""),
                i = n(`characters/spine/normalized_preview/${t}.png`);
            this.skin = this.parts.add.sprite({
                y: 50,
                imageId: i,
                imageUrl: i,
                flipX: this.options.flipX,
                manualDepth: this.options.useNaturalDepth ? o(this.y + a, 1) : void 0,
                depthChange: w(2),
                onReady: e => {
                    e.view.setScale(.28), e.view.setOrigin(.5, 1), e.view.alpha = this.state.active ? 1 : 0, !this.options.activeOnStart && s() && (e.view.alpha = .5)
                }
            })
        }, this.createSpineVisuals = () => {
            this.spine = this.parts.add.characterSpine({
                y: a,
                skinId: this.options.skinId,
                manualDepth: this.options.useNaturalDepth ? o(this.y + a, 1) : void 0,
                flipX: this.options.flipX
            })
        }, this.createShadow = () => {
            c() || (this.shadow = this.parts.add.sprite({
                y: 45,
                imageId: "character-shadow",
                imageUrl: n("characters/shadow.png"),
                onReady: t => {
                    t.view.setOrigin(.5, 1), t.view.setScale(f), t.view.alpha = this.state.active ? p : 0, !this.options.activeOnStart && s() && (t.view.alpha = .5 * p)
                }
            }))
        }, this.setupInteractivity = () => {
            this.options.interactionEnabled && (this.interactiveZone = this.interactiveZones.add.circle({
                r: this.options.radius
            }), this.interactiveZones.setForceDisabled(!this.state.active), this.interactiveZones.setInfo({
                message: this.options.interactionMessage,
                allowedToInteract: !0,
                duration: this.options.interactionDuration
            }), this.interactiveZones.setCanInteractThroughColliders(!1), this.interactiveZones.onInteraction = () => {
                this.sendToServerDevice(h.interacted)
            })
        }, this.tweenAlpha = t => {
            var i, e;
            (i = this.spine) != null && i.view && this.tweens.add({
                targets: this.spine.view,
                alpha: t,
                duration: 100
            }), (e = this.shadow) != null && e.view && this.tweens.add({
                targets: this.shadow.view,
                alpha: t,
                duration: 100
            })
        }, this.setupVisualEditing = () => {
            if (!s() || !d() || !this.options.interactionEnabled) return;
            const t = l(this, "radius");
            this.visualEditing.add.circle({
                radius: this.options.radius,
                minRadius: t.min,
                maxRadius: t.max,
                rotable: !1,
                onChange: i => {
                    u(i.x, i.y, {
                        radius: i.radius
                    })
                }
            })
        }, this.layers.setDefaultLayer(g.DepthSortedCharactersAndDevices), s() || this.isPreview ? this.createPreviewVisuals() : this.createSpineVisuals(), this.createShadow(), this.setupInteractivity(), this.setupVisualEditing()
    }
}
export {
    Gt as
    default
};