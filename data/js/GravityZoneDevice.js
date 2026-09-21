import {
    Z as y
} from "./ZoneConstants.js";
import {
    aX as T,
    aY as E,
    aZ as F,
    aK as S,
    T as p,
    aO as f,
    aQ as I,
    aU as O,
    aL as R
} from "./App-41.js";
import {
    F as m,
    I as G,
    i as d,
    e as l,
    j as D
} from "./FixSpinePlugin.js";
import {
    Z as w
} from "./ZonedDeviceDisplay.js";
import {
    G as Z
} from "./GetAssetPath.js";
import {
    F as k,
    R as H
} from "./FetchOptionSchemaProperty.js";
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
import "./MapSound.js";
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
import "./CircularProgress.js";
import "./clsx.m.js";
import "./index-6.js";
import "./AccessibleAnchor.js";
import "./index-17.js";
import "./use-force-update.js";
import "./GimkitLiveQuestion.js";
import "./Text.js";
import "./getCloudinaryUrl.js";
import "./LazyLatexRenderer.js";
import "./Tooltip.js";
import "./use-motion-value.js";
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
const L = {
        imageId: Z("devices/zone/base.png"),
        imageUrl: Z("devices/zone/base.png")
    },
    M = o => {
        const {
            character: s
        } = o, a = s.physics.state.jump.lastJumpGravityMultiplier ?? 1, t = T({
            character: s
        });
        if (a === t) return;
        const i = s.physics.state.forces.find(n => n.id === E.jump);
        if (!i || !i.ticks || i.ticks.length === 0) return;
        const e = i.ticks,
            r = e.findIndex(n => n.y === 0),
            h = r === -1 ? e : e.slice(0, r),
            g = r === -1 ? 0 : e.length - r,
            u = h.reduce((n, b) => n + -Math.min(b.y, 0), 0);
        if (u <= 1e-6) {
            i.ticks = Array.from({
                length: g
            }, () => ({
                x: 0,
                y: 0
            }));
            return
        }
        const v = a / t,
            C = h.length;
        let c = Math.round(C * v);
        c < 1 && (c = 1);
        const A = u * v,
            P = [...F({
                count: A,
                numTicks: c,
                ease: Phaser.Math.Easing.Quadratic.Out
            }).map(n => ({
                x: 0,
                y: -n
            })), ...Array.from({
                length: g
            }, () => ({
                x: 0,
                y: 0
            }))];
        i.ticks = P
    },
    V = o => {
        const {
            character: s
        } = o;
        s.physics.state.gravityZones.find(t => t.deviceId === o.deviceId) || (s.physics.state.gravityZones.push({
            deviceId: o.deviceId,
            gravityMultiplier: o.gravityMultiplier
        }), M({
            character: s
        }))
    },
    W = o => {
        const {
            character: s
        } = o;
        s.physics.state.gravityZones.find(t => t.deviceId === o.deviceId) && (s.physics.state.gravityZones = s.physics.state.gravityZones.filter(t => t.deviceId !== o.deviceId), M({
            character: s
        }))
    },
    x = 55;
class hi extends S {
    constructor(s) {
        if (super(s), this.onEnter = () => {
                const t = m(p());
                t && V({
                    character: t,
                    deviceId: this.id,
                    gravityMultiplier: this.options.gravityMultiplier
                })
            }, this.onLeave = () => {
                const t = m(p());
                t && W({
                    character: t,
                    deviceId: this.id,
                    gravityMultiplier: this.options.gravityMultiplier
                })
            }, this.onDestroy = () => {
                var e, r;
                const t = p(),
                    i = f().bodies.find(this.sensor.bodyId);
                (r = (e = i == null ? void 0 : i.sensor) == null ? void 0 : e.charactersInSensor) != null && r.has(t) && this.onLeave()
            }, this.onReconcile = () => {
                const t = p(),
                    i = m(t);
                if (!i) return;
                const e = f().bodies.find(this.sensor.bodyId);
                i.physics.state.gravityZones.find(h => h.deviceId === this.id) !== void 0 ? e.sensor.charactersInSensor.add(t) : e.sensor.charactersInSensor.delete(t)
            }, this.setupVisualEditing = () => {
                if (!G() || !d()) return;
                const t = k(this, "width"),
                    i = k(this, "height");
                this.visualEditing.add.box({
                    width: this.options.width,
                    height: this.options.height,
                    angle: this.options.rotation,
                    minWidth: t.min,
                    maxWidth: t.max,
                    minHeight: i.min,
                    maxHeight: i.max,
                    keepRatio: !1,
                    onChange: e => {
                        H(e.x, e.y, {
                            rotation: e.angle,
                            width: e.width,
                            height: e.height
                        })
                    }
                })
            }, G() && d()) {
            const t = this.parts.add.sprite({
                ...L,
                depthChange: I(2)
            });
            t.view.angle = this.options.rotation, t.view.setScale(.5)
        }
        if (l() || D() ? this.options.visibleInGame : w.shouldShow(this)) {
            this.setupVisualEditing();
            const t = O(this.options.color);
            this.zone = this.parts.add.rect({
                color: t,
                alpha: this.getAlpha(),
                width: Math.abs(this.options.width),
                height: Math.abs(this.options.height),
                angle: this.options.rotation,
                borderColor: t,
                borderAlpha: l() ? 0 : 1,
                borderWidth: 4,
                depthChange: I(1),
                ignoreInput: !0
            })
        }
        this.sensor = this.sensors.add.rect({
            x: 0,
            y: 0,
            w: this.options.width - 2 * x,
            h: this.options.height - 2 * x,
            angle: this.options.rotation,
            type: R.around,
            onFresh: () => {
                this.onEnter()
            },
            onStop: () => {
                this.onLeave()
            }
        })
    }
    getAlpha() {
        return l() ? y.alpha : d() && w.shouldShowInnerZone(this) ? y.alpha : 0
    }
}
export {
    hi as GravityZoneDevice, hi as
    default
};