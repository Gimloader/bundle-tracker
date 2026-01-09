import {
    as as d,
    L as e,
    al as w,
    au as f
} from "./App-41.js";
import {
    d as r,
    I as g,
    i as n,
    e as l
} from "./FixSpinePlugin.js";
import {
    a as b
} from "./ZonedDeviceDisplay.js";
import {
    G as o
} from "./GetAssetPath.js";
import {
    F as c,
    R as C
} from "./ReplaceVisualEditingPreview.js";
import {
    A as _
} from "./AddIgnoredStaticBodiesWhenCollisionsEnabled.js";
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
var u = (t => (t.none = "None", t.blastball = "Blastball", t))(u || {}),
    A = (t => (t.left = "Left", t.right = "Right", t))(A || {});
const y = {
        imageId: o("devices/ball_zone/icon.png"),
        imageUrl: o("devices/ball_zone/icon.png")
    },
    p = {
        side_bottom: {
            imageId: o("devices/ball_zone/blastball_side_bottom.png"),
            imageUrl: o("devices/ball_zone/blastball_side_bottom.png")
        },
        side_top: {
            imageId: o("devices/ball_zone/blastball_side_top.png"),
            imageUrl: o("devices/ball_zone/blastball_side_top.png")
        },
        crossbar: {
            imageId: o("devices/ball_zone/blastball_crossbar.png"),
            imageUrl: o("devices/ball_zone/blastball_crossbar.png")
        },
        dot: {
            imageId: o("devices/ball_zone/blastball_dot.png"),
            imageUrl: o("devices/ball_zone/blastball_dot.png")
        }
    },
    I = t => {
        const a = i => t.options.side === A.left ? i : -i;
        t.parts.add.ninePatch({
            ...p.crossbar,
            layerId: e.DevicesUnderCharacters,
            columns: [0, 0],
            rows: [200, 200],
            height: t.options.height,
            width: 203 * .15,
            scale: .15,
            depthChange: d(2),
            x: a(-t.options.width / 2 + 5),
            onReady: i => {
                t.updatePartAlpha(i)
            }
        }), t.parts.add.ninePatch({
            ...p.side_top,
            layerId: e.DepthSortedCharactersAndDevices,
            columns: [850, 850],
            rows: [0, 0],
            height: 606 * .15,
            width: a(t.options.width + 30),
            scale: .15,
            x: a(-5),
            y: -t.options.height / 2,
            onReady: i => {
                t.updatePartAlpha(i)
            }
        }), t.parts.add.ninePatch({
            ...p.side_bottom,
            layerId: e.DepthSortedCharactersAndDevices,
            columns: [850, 850],
            rows: [0, 0],
            height: 606 * .15,
            width: a(t.options.width + 30),
            scale: .15,
            x: a(-5),
            y: t.options.height / 2,
            onReady: i => {
                t.updatePartAlpha(i)
            }
        }), t.colliders.add.box({
            x: 0,
            y: -t.options.height / 2 + 10,
            w: t.options.width + 16,
            h: 50
        }), t.colliders.add.box({
            x: 0,
            y: t.options.height / 2 + 10,
            w: t.options.width + 16,
            h: 50
        }), t.colliders.add.box({
            x: a(-t.options.width / 2 + 5),
            y: 0,
            w: 28,
            h: t.options.height
        }), t.parts.add.sprite({
            ...p.dot,
            layerId: e.DepthSortedCharactersAndDevices,
            x: a(5),
            y: -t.options.height / 2 + 20,
            depthChange: 10,
            onReady: i => {
                t.updatePartAlpha(i), i.view.setScale(.15)
            }
        }), t.parts.add.sprite({
            ...p.dot,
            layerId: e.DepthSortedCharactersAndDevices,
            x: a(5),
            y: t.options.height / 2 + 20,
            depthChange: 10,
            onReady: i => {
                t.updatePartAlpha(i), i.view.setScale(.15)
            }
        })
    };
class Nt extends w {
    constructor(m) {
        if (super(m), this.updatePartAlpha = i => {
                const s = this.getAlpha();
                r() && i.updateAlpha(s > 0 ? 1 : 0)
            }, this.updateAlpha = () => {
                const i = this.getAlpha();
                r() && this.parts.forEach(s => {
                    s.updateAlpha(i > 0 ? 1 : 0)
                }), this.rect && this.rect.updateAlpha(i)
            }, this.onStateChange = i => {
                i === "active" && (this.updateAlpha(), this.state.active && _(this))
            }, this.checkIfCollidersEnabled = () => this.state.active, this.setupVisualEditing = () => {
                if (!g() || !n()) return;
                const i = c(this, "width"),
                    s = c(this, "height");
                this.visualEditing.add.box({
                    width: this.options.width,
                    height: this.options.height,
                    angle: 0,
                    rotable: !1,
                    minWidth: i.min,
                    maxWidth: i.max,
                    minHeight: s.min,
                    maxHeight: s.max,
                    keepRatio: !1,
                    onChange: h => {
                        C(h.x, h.y, {
                            width: h.width,
                            height: h.height
                        })
                    }
                })
            }, g() && n() && this.parts.add.sprite({
                ...y,
                depthChange: d(2)
            }).view.setScale(.17), r() || l() ? this.options.visibleInGame : b.shouldShow(this)) {
            this.setupVisualEditing();
            const i = f(this.options.color);
            this.rect = this.parts.add.rect({
                color: i,
                layerId: e.DevicesUnderCharacters,
                alpha: this.getAlpha(),
                width: Math.abs(this.options.width),
                height: Math.abs(this.options.height),
                borderColor: i,
                borderAlpha: r() || l() ? 0 : this.options.backgroundAlpha,
                borderWidth: 4,
                depthChange: d(1),
                ignoreInput: !0
            }), this.options.style === u.blastball && I(this)
        }
    }
    getAlpha() {
        return r() ? this.state.active ? this.options.backgroundAlpha : 0 : l() ? this.options.backgroundAlpha : n() && b.shouldShowInnerZone(this) ? this.options.backgroundAlpha : 0
    }
}
export {
    Nt as BallZoneDevice, Nt as
    default
};