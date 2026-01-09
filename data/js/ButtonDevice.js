import {
    I as r,
    d as c,
    g as w,
    S as b,
    i as v
} from "./FixSpinePlugin.js";
import {
    F as u,
    R as l
} from "./ReplaceVisualEditingPreview.js";
import {
    G as a
} from "./GetAssetPath.js";
import {
    p as S
} from "./playSound.js";
import {
    al as x
} from "./App-41.js";
import "./_index.js";
import "./MapModeType.js";
import "./MapStyle.js";
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
const z = {
        imageId: "button_device_green_1",
        imageUrl: a("devices/button/button-device-green-1.png")
    },
    I = {
        imageId: "button_device_green_2",
        imageUrl: a("devices/button/button-device-green-2.png")
    },
    y = {
        imageId: "button_device_orange",
        imageUrl: a("devices/button/button-device-orange.png")
    };
var t = (s => (s.active = "active", s.pressed = "pressed", s.inactive = "inactive", s))(t || {}),
    f = (s => (s.interacted = "interacted", s))(f || {});
class Hi extends x {
    constructor(g) {
        super(g), this.onStateChange = i => {
            r() || i === "active" && (this.state.active ? (this.interactiveZones.setForceDisabled(!1), this.isDown() || this.setButtonState(t.active)) : (this.interactiveZones.setForceDisabled(!0), this.isDown() || this.setButtonState(t.inactive)))
        }, this.isDown = () => this.currentState === t.pressed, this.setButtonState = i => {
            var o, e, p, m, h, d;
            this.currentState = i, !(this.options.visibleInGame === !1 && c()) && (i === t.pressed && S({
                path: a("devices/button/click.mp3"),
                volume: w({
                    volume: .2,
                    type: b.soundEffect
                })
            }), (o = this == null ? void 0 : this.active) != null && o.view && (this.active.view.alpha = 0), (e = this == null ? void 0 : this.pressed) != null && e.view && (this.pressed.view.alpha = 0), (p = this == null ? void 0 : this.inactive) != null && p.view && (this.inactive.view.alpha = 0), i === t.active ? (m = this == null ? void 0 : this.active) != null && m.view && (this.active.view.alpha = 1) : i === t.inactive ? (h = this == null ? void 0 : this.inactive) != null && h.view && (this.inactive.view.alpha = 1) : i === t.pressed && (d = this == null ? void 0 : this.pressed) != null && d.view && (this.pressed.view.alpha = 1))
        }, this.setupVisualEditing = () => {
            if (!r() || !v()) return;
            const i = u(this, "radius"),
                o = u(this, "size");
            this.visualEditing.add.circle({
                radius: this.options.size,
                angle: -90,
                minRadius: o.min,
                maxRadius: o.max,
                rotable: !1,
                movable: !1,
                onChange: e => {
                    l(e.x, e.y, {
                        size: e.radius
                    })
                }
            }), this.visualEditing.add.circle({
                radius: this.options.radius,
                minRadius: i.min,
                maxRadius: i.max,
                rotable: !1,
                onChange: e => {
                    l(e.x, e.y, {
                        radius: e.radius
                    })
                }
            })
        }, this.setupVisualEditing(), (this.options.visibleInGame === !0 || r() && v()) && (this.colliders.add.circle({
            x: 0,
            y: -10 * this.options.size / 50,
            r: 45 * this.options.size / 50
        }), this.colliders.add.box({
            x: 0,
            y: 0,
            w: 150 * this.options.size / 50,
            h: 80 * this.options.size / 50
        }), this.active = this.parts.add.sprite({
            ...z,
            onReady: i => {
                i.view.setScale(this.options.size / 50)
            }
        }), this.pressed = this.parts.add.sprite({
            ...I,
            onReady: i => {
                i.view.setScale(this.options.size / 50)
            }
        }), this.inactive = this.parts.add.sprite({
            ...y,
            onReady: i => {
                i.view.setScale(this.options.size / 50)
            }
        }), r() && this.options.activeOnStart ? this.setButtonState(t.active) : c() && this.state.active ? this.setButtonState(t.active) : this.setButtonState(t.inactive));
        const n = 2 * Math.max(this.options.size * 1.3, this.options.radius);
        this.boundingBox.setHardcoded({
            width: n,
            height: n
        }), this.interactiveZone = this.interactiveZones.add.circle({
            r: this.options.radius
        }), this.interactiveZones.setForceDisabled(!this.state.active), this.interactiveZones.setInfo({
            message: this.options.guiMessage,
            allowedToInteract: !0,
            duration: this.options.interactionDuration
        }), this.interactiveZones.setCanInteractThroughColliders(!this.options.visibleInGame), this.interactiveZones.onInteraction = () => {
            this.sendToServerDevice(f.interacted), this.setButtonState(t.pressed), setTimeout(() => {
                this.state.active ? this.setButtonState(t.active) : this.setButtonState(t.inactive)
            }, 200)
        }
    }
}
export {
    Hi as
    default
};