import {
    al as p,
    ao as h,
    L as n
} from "./App-41.js";
import {
    G as a
} from "./GetAssetPath.js";
import {
    g as l,
    S as m,
    I as c,
    d,
    e as u
} from "./FixSpinePlugin.js";
import {
    F as v,
    R as g
} from "./ReplaceVisualEditingPreview.js";
import {
    p as y
} from "./playSound.js";
import {
    ar as w
} from "./_index.js";
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
import "./howler.js";
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
const f = {
        atlasUrl: a("devices/lucky_block/spine/luckyBlock.atlas"),
        jsonUrl: a("devices/lucky_block/spine/luckyBlock.json")
    },
    t = {
        boundingBox: {
            width: 110,
            height: 134
        },
        collisions: {
            x: 0,
            y: 17,
            width: 110,
            height: 100,
            margin: 22
        },
        spine: {
            yCorrection: 2,
            baseScale: .2
        },
        shadow: {
            x: 0,
            y: 35,
            r1: 75,
            r2: 50
        }
    };
class _i extends p {
    constructor(r) {
        super(r), this.use = () => {
            this.cull.isInsideView && y({
                path: a(`devices/lucky_block/sound/impact${w.random(1,2)}.mp3`),
                volume: l({
                    volume: h(this.x, this.y) * .7,
                    type: m.soundEffect
                })
            }), this.playAnimation("explode-short")
        }, this.recharge = () => {
            this.state.active && this.playAnimation("reactivate")
        }, this.activate = () => {
            this.state.charged && this.playAnimation("idle-active")
        }, this.deactivate = () => {
            this.playAnimation("idle-inactive")
        }, this.playAnimation = i => {
            if (!this.spine.view) return;
            const s = i === "idle-active" || i === "idle-inactive";
            this.spine.view.animationState.setAnimation(0, i, s)
        }, this.onStateChange = i => {
            i === "active" && (this.state.active ? this.activate() : this.deactivate()), i === "charged" && this.prevState.charged === !1 && this.state.charged === !0 && this.recharge(), i === "useCounter" && this.state.useCounter > 0 && this.use()
        }, this.setupView = () => {
            const i = t.boundingBox.width,
                s = t.boundingBox.height;
            this.spine = this.parts.add.spine({
                ...f,
                spineViewId: this.id,
                y: (s / 2 - t.spine.yCorrection) * this.options.scale,
                defaultAnimation: this.options.activeOnGameStart ? "idle-active" : "idle-inactive",
                boundingBox: {
                    left: -i / 2 * this.options.scale,
                    right: i / 2 * this.options.scale,
                    top: (-s + t.spine.yCorrection) * this.options.scale,
                    bottom: 2 * this.options.scale
                },
                onAnimationComplete: e => {
                    e === "reactivate" && this.playAnimation("idle-active"), e === "explode-short" && this.state.active && this.options.rechargeAfterTime === 0 && this.playAnimation("reactivate")
                },
                onReady: e => {
                    e.view.setScale(t.spine.baseScale * this.options.scale)
                }
            })
        }, this.setupCollider = () => {
            this.colliders.add.box({
                x: t.collisions.x * this.options.scale,
                y: t.collisions.y * this.options.scale,
                w: t.collisions.width * this.options.scale + t.collisions.margin,
                h: t.collisions.height * this.options.scale
            })
        }, this.setupShadow = () => {
            this.options.showShadow && this.shadows.add({
                x: t.shadow.x * this.options.scale,
                y: t.shadow.y * this.options.scale,
                r1: t.shadow.r1 * this.options.scale,
                r2: t.shadow.r2 * this.options.scale
            })
        }, this.setupInViewCallbacks = () => {
            c() || this.cull.setOnEnterViewCallback(() => {
                var i;
                (i = this.spine) != null && i.view && (this.spine.setMixDuration(0), this.playAnimation(this.state.active && this.state.charged ? "idle-active" : "idle-inactive"), this.spine.view.updatePose(0), this.spine.resetMixDuration())
            })
        }, this.setupVisualEditing = () => {
            if (d() || u()) return;
            const i = v(this, "scale"),
                s = t.boundingBox.width,
                e = t.boundingBox.height;
            this.visualEditing.add.box({
                keepRatio: !0,
                rotable: !1,
                width: s * this.options.scale,
                height: e * this.options.scale,
                minWidth: s * i.min,
                maxWidth: s * i.max,
                minHeight: e * i.min,
                maxHeight: e * i.max,
                onChange: o => {
                    g(o.x, o.y, {
                        scale: o.width / s
                    })
                }
            })
        }, this.layers.setDefaultLayer(n.DepthSortedCharactersAndDevices), this.setupView(), this.setupShadow(), this.setupCollider(), this.setupVisualEditing(), this.setupInViewCallbacks(), this.cull.setMargin(50)
    }
}
export {
    _i as
    default
};