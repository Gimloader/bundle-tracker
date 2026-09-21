import {
    Z as I
} from "./ZoneConstants.js";
import {
    aK as M,
    aL as L,
    T as p,
    aM as P,
    aN as V,
    aO as u,
    L as D
} from "./App-41.js";
import {
    I as S,
    i as W,
    a4 as O,
    _ as C,
    F as c,
    e as F,
    j as Z
} from "./FixSpinePlugin.js";
import {
    Z as E
} from "./ZonedDeviceDisplay.js";
import {
    F as y,
    R as v
} from "./FetchOptionSchemaProperty.js";
import {
    G as b
} from "./GetAssetPath.js";
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
const G = {
        atlasUrl: b("devices/air_vent/spine/skeleton.atlas"),
        jsonUrl: b("devices/air_vent/spine/skeleton.json")
    },
    n = {
        zoneBottomOffset: 35,
        zoneWidth: 162,
        collider: {
            width: 190,
            height: 40,
            offsetTop: 20
        },
        view: {
            width: 200,
            height: 80,
            scale: .2,
            offsetLeft: 3
        }
    };
class ei extends M {
    constructor(x) {
        super(x), this.setupCollider = () => {
            const t = this.getDirection(),
                i = n.collider.offsetTop * this.options.scale;
            this.colliders.add.box({
                x: t.x * i,
                y: t.y * i,
                w: n.collider.width * this.options.scale,
                h: n.collider.height * this.options.scale,
                angle: this.options.angle
            })
        }, this.setupView = () => {
            const {
                width: t,
                height: i,
                scale: s,
                offsetLeft: e
            } = n.view, h = this.options.angle * Math.PI / 180, o = Math.sin(h), r = Math.cos(h), a = e * this.options.scale, w = -r * a, z = -o * a, m = t * this.options.scale, l = i * this.options.scale, d = m * Math.abs(r) + l * Math.abs(o), g = m * Math.abs(o) + l * Math.abs(r);
            this.parts.add.spine({
                ...G,
                x: w,
                y: z,
                spineViewId: this.id,
                defaultAnimation: "particles",
                boundingBox: {
                    left: -d / 2,
                    right: d / 2,
                    top: -g / 2,
                    bottom: g / 2
                },
                onReady: f => {
                    f.view.setScale(s * this.options.scale), f.view.angle = this.options.angle
                }
            })
        }, this.setupZonePreview = () => {
            if (!S() || !W() || !E.shouldShow(this)) return;
            const t = this.getDirection(),
                i = n.zoneWidth * this.options.scale,
                e = n.zoneBottomOffset * this.options.scale + this.options.zoneLength / 2;
            this.parts.add.rect({
                x: t.x * e,
                y: t.y * e,
                width: i,
                height: this.options.zoneLength,
                angle: this.options.angle,
                color: 12186879,
                alpha: I.alpha,
                borderColor: 12186879,
                borderAlpha: 1,
                borderWidth: 4,
                ignoreInput: !0
            })
        }, this.setupSensor = () => {
            const t = this.getDirection(),
                i = n.zoneWidth * this.options.scale,
                s = n.zoneBottomOffset * this.options.scale + this.options.zoneLength / 2;
            this.sensor = this.sensors.add.rect({
                x: t.x * s,
                y: t.y * s,
                w: i,
                h: this.options.zoneLength,
                angle: this.options.angle,
                type: L.around,
                onFresh: this.onEnter,
                onStop: this.onLeave
            })
        }, this.onEnter = () => {
            if (!O() && !C()) return;
            const t = c(p());
            if (!t || t.physics.state.airVentZones.includes(this.id)) return;
            const i = this.getDirection();
            t.physics.state.airVentZones.push(this.id);
            const s = this.options.forceMultiplier,
                e = i.x * s,
                h = i.y * s,
                o = t.physics.state.lastUsedVelocityToCalculateMovement.x;
            let r = e;
            Math.sign(o) !== Math.sign(e) ? r = e + o : Math.abs(o) > Math.abs(e) && (r = o), P({
                character: t
            }), V({
                character: t,
                x: r,
                y: h,
                cancelInertiaOnNextGrounded: !1,
                limitControlFactor: !0
            })
        }, this.onLeave = () => {
            const t = c(p());
            t && (t.physics.state.airVentZones = t.physics.state.airVentZones.filter(i => i !== this.id))
        }, this.getDirection = () => {
            const t = this.options.angle * Math.PI / 180,
                i = Math.sin(t),
                s = -Math.cos(t);
            return {
                x: Math.abs(i) < Number.EPSILON * 10 ? 0 : i,
                y: Math.abs(s) < Number.EPSILON * 10 ? 0 : s
            }
        }, this.onReconcile = () => {
            const t = p(),
                i = c(t),
                s = u().bodies.find(this.sensor.bodyId);
            !i || !(s != null && s.sensor) || (i.physics.state.airVentZones.includes(this.id) ? s.sensor.charactersInSensor.add(t) : s.sensor.charactersInSensor.delete(t))
        }, this.onDestroy = () => {
            var s, e;
            const t = p(),
                i = u().bodies.find(this.sensor.bodyId);
            (e = (s = i == null ? void 0 : i.sensor) == null ? void 0 : s.charactersInSensor) != null && e.has(t) && this.onLeave()
        }, this.setupVisualEditing = () => {
            if (F() || Z()) return;
            const t = y(this, "scale"),
                i = y(this, "zoneLength"),
                {
                    width: s,
                    height: e
                } = n.view;
            this.visualEditing.add.box({
                width: s * this.options.scale,
                height: e * this.options.scale,
                minWidth: s * t.min,
                maxWidth: s * t.max,
                minHeight: e * t.min,
                maxHeight: e * t.max,
                angle: this.options.angle,
                rotable: !0,
                keepRatio: !0,
                onChange: a => {
                    v(a.x, a.y, {
                        scale: a.width / s,
                        angle: a.angle
                    })
                }
            });
            const h = this.getDirection(),
                o = n.zoneWidth * this.options.scale,
                r = n.zoneBottomOffset * this.options.scale + this.options.zoneLength / 2;
            this.visualEditing.add.box({
                x: h.x * r,
                y: h.y * r,
                width: o,
                height: this.options.zoneLength,
                minWidth: o,
                maxWidth: o,
                minHeight: i.min,
                maxHeight: i.max,
                angle: this.options.angle,
                movable: !1,
                rotable: !1,
                keepRatio: !1,
                onChange: a => {
                    v(this.x, this.y, {
                        zoneLength: a.height
                    })
                }
            })
        }, this.layers.setDefaultLayer(D.DevicesUnderCharacters), this.setupView(), this.setupCollider(), this.setupZonePreview(), this.setupSensor(), this.setupVisualEditing()
    }
}
export {
    ei as AirVentDevice, ei as
    default
};