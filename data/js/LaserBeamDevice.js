import {
    al as N,
    L as y,
    au as M
} from "./App-41.js";
import {
    G as r
} from "./GetAssetPath.js";
import {
    z as D,
    I as g,
    i as C,
    d as x
} from "./FixSpinePlugin.js";
import {
    F as T,
    R as G
} from "./ReplaceVisualEditingPreview.js";
import {
    O
} from "./OnHit.js";
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
var t = (e => (e.active = "ACTIVE", e.inactive = "INACTIVE", e.toActive = "TO_ACTIVE", e.toInactive = "TO_INACTIVE", e))(t || {});
const i = (e, n) => "LASER_BEAM_DEVICE_ORIGIN_ANIM_" + n + e;
var I = (e => (e.standard = "Standard", e.plant = "Plant", e))(I || {});
const V = {
        imageId: r("devices/laser_beam/laser.png"),
        imageUrl: r("devices/laser_beam/laser.png")
    },
    L = {
        imageId: r("devices/laser_beam/dot.png"),
        imageUrl: r("devices/laser_beam/dot.png")
    },
    d = I.standard,
    l = I.plant,
    B = {
        baseScale: .36,
        spritesheetId: r("devices/laser_beam/standard_base.png"),
        spritesheetUrl: r("devices/laser_beam/standard_base.png"),
        frameWidth: 215,
        frameHeight: 130,
        animations: [{
            animName: i(t.inactive, d),
            frameRate: 1,
            animFrames: {
                start: 0,
                end: 0
            }
        }, {
            animName: i(t.toActive, d),
            repeat: 0,
            frameRate: 24,
            animFrames: {
                start: 0,
                end: 7
            }
        }, {
            animName: i(t.active, d),
            frameRate: 1,
            animFrames: {
                start: 7,
                end: 7
            }
        }, {
            animName: i(t.toInactive, d),
            repeat: 0,
            frameRate: 24,
            animFrames: {
                start: 7,
                end: 0
            }
        }]
    },
    H = {
        baseScale: .5,
        spritesheetId: r("devices/laser_beam/plant_base.png"),
        spritesheetUrl: r("devices/laser_beam/plant_base.png"),
        frameWidth: 127,
        frameHeight: 122,
        animations: [{
            animName: i(t.inactive, l),
            frameRate: 12,
            animFrames: {
                start: 0,
                end: 0
            }
        }, {
            animName: i(t.toActive, l),
            repeat: 0,
            frameRate: 24,
            animFrames: {
                start: 0,
                end: 4
            }
        }, {
            animName: i(t.active, l),
            frameRate: 12,
            animFrames: {
                start: 4,
                end: 4
            }
        }, {
            animName: i(t.toInactive, l),
            repeat: 0,
            frameRate: 24,
            animFrames: {
                start: 4,
                end: 0
            }
        }]
    },
    U = {
        [d]: B,
        [l]: H
    },
    Y = 600,
    R = 55,
    f = 16,
    b = .35;
class ni extends N {
    constructor(n) {
        super(n), this.activeFactor = 1, this.animationsReady = !1, this.dots = [], this.onUpdate = () => {
            D() && (this.laser.view.scaleY = (Math.random() * .5 + .5) * this.activeFactor, this.origin.view.scale = Math.random() * .03 * this.activeFactor + this.base.baseScale, this.endPoint.view.scale = Math.random() * .03 * this.activeFactor + this.base.baseScale, this.options.showPath && this.dots.forEach(a => {
                a.view.alpha = (1 - this.activeFactor) * b
            }))
        }, this.onStateChange = a => {
            if (a === "active") {
                const s = this.state.active ? 1 : 0;
                if (this.tweens.add({
                        targets: this,
                        activeFactor: s,
                        duration: 150,
                        delay: s * 200
                    }), !this.animationsReady) return;
                this.state.active && !this.prevState.active ? (this.origin.view.play(i(t.toActive, this.options.appearance)), this.endPoint.view.play(i(t.toActive, this.options.appearance))) : !this.state.active && this.prevState.active && (this.origin.view.play(i(t.toInactive, this.options.appearance)), this.endPoint.view.play(i(t.toInactive, this.options.appearance)))
            }
        }, this.onMessage = a => {
            a.key === "hit" && O(a.data)
        }, this.setupVisualEditing = () => {
            if (!g() || !C()) return;
            const a = T(this, "distance"),
                s = 40;
            this.visualEditing.add.circle({
                radius: this.options.distance / 2 + s,
                angle: this.options.angle - 90,
                minRadius: a.min,
                maxRadius: a.max,
                onChange: p => {
                    G(p.x, p.y, {
                        distance: (p.radius - s) * 2,
                        angle: p.angle + 90
                    })
                }
            })
        }, this.base = U[this.options.appearance], this.setupVisualEditing();
        const o = Phaser.Math.DegToRad(this.options.angle),
            m = Math.cos(o) * this.options.distance,
            h = Math.sin(o) * this.options.distance;
        this.createPath(), this.origin = this.parts.add.animatedSprite({
            ...this.base,
            x: -m / 2,
            y: -h / 2
        }), this.endPoint = this.parts.add.animatedSprite({
            ...this.base,
            x: m / 2,
            y: h / 2,
            onReady: a => {
                this.animationsReady = !0, this.state.active || g() ? (this.origin.view.play(i(t.active, this.options.appearance)), a.view.play(i(t.active, this.options.appearance))) : (this.origin.view.play(i(t.inactive, this.options.appearance)), a.view.play(i(t.inactive, this.options.appearance)))
            }
        }), this.laser = this.parts.add.sprite({
            ...V,
            layerId: y.DevicesAboveCharacters
        }), this.origin.view.rotation = o, this.endPoint.view.rotation = this.origin.view.rotation + Math.PI, this.origin.view.setScale(this.base.baseScale), this.endPoint.view.setScale(this.base.baseScale), this.laser.view.rotation = o, this.laser.view.blendMode = Phaser.BlendModes.ADD, this.laser.view.tint = M(this.options.laserColor), this.laser.view.scaleX = (this.options.distance - R) / Y, this.laser.view.scaleY = .75, this.options.showOrigin || (this.origin.view.alpha = 0), this.options.showEndPoint || (this.endPoint.view.alpha = 0), x() && !this.state.active && (this.activeFactor = 0, this.laser.view.scaleY = 0)
    }
    createPath() {
        if (!this.options.showPath) return;
        const n = Phaser.Math.DegToRad(this.options.angle),
            o = Math.floor((this.options.distance - R - f * 1.5) / f) * f,
            m = Math.cos(n) * o,
            h = Math.sin(n) * o,
            a = -m / 2,
            s = -h / 2,
            p = m / 2,
            u = h / 2,
            w = Math.floor(o / f),
            S = (p - a) / w,
            _ = (u - s) / w,
            A = g() ? b : (1 - this.activeFactor) * b,
            F = g() ? Phaser.BlendModes.NORMAL : Phaser.BlendModes.ADD;
        for (let v = 0; v <= w; v++) {
            const E = a + v * S,
                P = s + v * _;
            this.parts.add.sprite({
                ...L,
                depthChange: Math.min(s, u) - P,
                ignoreInput: !0,
                layerId: y.DevicesUnderCharacters,
                x: E,
                y: P,
                onReady: c => {
                    c.view.tint = M(this.options.laserColor), c.view.alpha = A, c.view.blendMode = F, c.view.setScale(.2), this.dots.push(c)
                }
            })
        }
    }
}
export {
    ni as
    default
};