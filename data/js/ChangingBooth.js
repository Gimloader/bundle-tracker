import {
    al as l,
    L as v
} from "./App-41.js";
import {
    G as o
} from "./GetAssetPath.js";
import {
    a3 as g
} from "./_index.js";
import {
    s as c,
    I as f,
    i as A
} from "./FixSpinePlugin.js";
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
const I = {
        imageId: o("devices/changing_booth/back.png"),
        imageUrl: o("devices/changing_booth/back.png")
    },
    y = {
        imageId: o("devices/changing_booth/front.png"),
        imageUrl: o("devices/changing_booth/front.png")
    },
    b = {
        imageId: o("devices/changing_booth/front_2.png"),
        imageUrl: o("devices/changing_booth/front_2.png")
    };
var m = (r => (r.open = "open", r))(m || {});
const i = {
    interactiveInfo: {
        normal: "Change Your Cosmetics",
        cosmosBlocked: "Cosmos Blocked",
        notLoggedIn: "Log In to Use",
        notAvailableHeader: "Not Available",
        notAvailableColor: "#ffcdd2",
        duration: 1
    }
};
class Pt extends l {
    constructor(d) {
        super(d), this.activityAlpha = 1, this.createView = () => {
            this.back = this.parts.add.sprite({
                ...I,
                onReady: t => {
                    t.view.setScale(.4), t.view.alpha = this.activityAlpha
                }
            }), this.front = this.parts.add.sprite({
                ...y,
                depthChange: 150,
                onReady: t => {
                    t.view.setScale(.4), t.view.alpha = this.activityAlpha
                }
            }), this.front2 = this.parts.add.sprite({
                ...b,
                depthChange: 100,
                onReady: t => {
                    t.view.setScale(.4), t.view.alpha = this.activityAlpha
                }
            }), this.shadow = this.shadows.add({
                x: 0,
                y: 100,
                r1: 150,
                r2: 60,
                alphaMultip: this.activityAlpha
            })
        }, this.createColliders = () => {
            this.colliders.add.box({
                x: -100,
                y: 10,
                w: 20,
                h: 200
            }), this.colliders.add.box({
                x: 100,
                y: 10,
                w: 20,
                h: 180
            }), this.colliders.add.box({
                x: 0,
                y: -30,
                w: 200,
                h: 120
            }), this.colliders.add.box({
                x: -40,
                y: 120,
                w: 120,
                h: 20,
                angle: 20
            })
        }, this.setupInteractiveZones = () => {
            this.interactiveZones.add.circle({
                x: -20,
                y: 70,
                r: 60
            });
            const t = !c.session.cosmosBlocked && g(),
                e = t ? i.interactiveInfo.normal : c.session.cosmosBlocked ? i.interactiveInfo.cosmosBlocked : i.interactiveInfo.notLoggedIn,
                a = t ? void 0 : i.interactiveInfo.notAvailableHeader,
                s = t ? void 0 : i.interactiveInfo.notAvailableColor;
            this.interactiveZones.setInfo({
                message: e,
                allowedToInteract: t,
                duration: i.interactiveInfo.duration,
                topHeader: a,
                topHeaderColor: s
            }), this.interactiveZones.onInteraction = () => {
                this.sendToServerDevice(m.open)
            }
        }, this.openDeviceUI = () => {
            this.deviceUI.open({})
        }, this.updateActiveState = () => {
            const t = this.state.active ? 1 : 0;
            this.tweens.add({
                targets: this,
                activityAlpha: t,
                duration: 100,
                onUpdate: () => {
                    var e, a, s, p, n, h;
                    (a = (e = this.back) == null ? void 0 : e.view) == null || a.setAlpha(this.activityAlpha), (p = (s = this.front) == null ? void 0 : s.view) == null || p.setAlpha(this.activityAlpha), (h = (n = this.front2) == null ? void 0 : n.view) == null || h.setAlpha(this.activityAlpha), this.shadow.alphaMultip = this.activityAlpha
                }
            }), this.interactiveZones.setForceDisabled(!this.state.active), this.state.active || this.deviceUI.close()
        }, this.onStateChange = t => {
            t === "active" && this.updateActiveState()
        }, this.checkIfCollidersEnabled = () => this.state.active, this.layers.setDefaultLayer(v.DepthSortedCharactersAndDevices), this.activityAlpha = this.state.active ? 1 : 0, f() && A() && (this.activityAlpha = 1), this.createView(), this.createColliders(), this.setupInteractiveZones()
    }
}
export {
    Pt as
    default
};