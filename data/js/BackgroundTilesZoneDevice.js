import {
    s as g,
    a as u,
    d as w,
    e as M
} from "./FixSpinePlugin.js";
import {
    F as f,
    R as B
} from "./ReplaceVisualEditingPreview.js";
import {
    aG as d,
    as as T,
    aH as L,
    al as C,
    au as F,
    aI as D,
    am as _,
    an as k
} from "./App-41.js";
import {
    G
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
const b = o => {
        const i = o.options.useFullMapSize ? 0 : y(o.options.zoneX - o.options.width / 2) + 1,
            n = o.options.useFullMapSize ? 0 : y(o.options.zoneY - o.options.height / 2) + 1,
            e = o.options.useFullMapSize ? g.world.width : y(o.options.zoneX + o.options.width / 2),
            s = o.options.useFullMapSize ? g.world.height : y(o.options.zoneY + o.options.height / 2);
        return {
            minX: i,
            minY: n,
            maxX: e,
            maxY: s
        }
    },
    z = o => {
        const i = b(o);
        return {
            minX: i.minX * d.width,
            minY: i.minY * d.height,
            maxX: i.maxX * d.width,
            maxY: i.maxY * d.height
        }
    },
    y = o => Math.floor(o / d.width),
    O = o => {
        const i = {
                x: o.x,
                y: o.y
            },
            {
                minX: n,
                minY: e,
                maxX: s,
                maxY: r
            } = z(o),
            t = {
                x: n,
                y: e,
                width: s - n,
                height: r - e
            },
            p = Math.max(t.x, Math.min(i.x, t.x + t.width)),
            m = Math.max(t.y, Math.min(i.y, t.y + t.height));
        if (i.x >= t.x && i.x <= t.x + t.width && i.y >= t.y && i.y <= t.y + t.height) {
            const a = i.x - t.x,
                l = t.x + t.width - i.x,
                c = i.y - t.y,
                S = t.y + t.height - i.y,
                x = Math.min(a, l, c, S);
            return x === a ? {
                x: t.x,
                y: i.y
            } : x === l ? {
                x: t.x + t.width,
                y: i.y
            } : x === c ? {
                x: i.x,
                y: t.y
            } : {
                x: i.x,
                y: t.y + t.height
            }
        }
        return {
            x: p,
            y: m
        }
    },
    Y = 1e3,
    P = o => {
        const i = L.Fill3 + .1,
            n = (Y - o.options.order + T(o.y) / Y) * .1;
        return i + n
    },
    h = {
        border: {
            alpha: .5,
            width: 5,
            color: 16711935
        }
    },
    X = -999999999;
class ti extends C {
    constructor(i) {
        if (super(i), this.addLayer = () => {
                const e = g.worldOptions.terrainOptions.find(c => c.id === this.options.terrainId);
                if (!e) return;
                const {
                    minX: s,
                    minY: r,
                    maxX: t,
                    maxY: p
                } = b(this), m = P(this), a = u().tileManager.layerManager.backgroundLayersManager.createLayer({
                    layerId: this.id,
                    depth: m
                }), l = {
                    priority: this.layers.getGlobalDepth(),
                    x: s,
                    y: r,
                    width: t - s,
                    height: p - r,
                    terrainOption: e
                };
                a.addFillZone(l), a.setScrollData({
                    scrollFactor: this.options.scrollFactor,
                    speedX: this.options.overrideScrollingSpeed ? this.options.scrollingSpeedX : void 0,
                    speedY: this.options.overrideScrollingSpeed ? this.options.scrollingSpeedY : void 0
                }), a.addTintModifier({
                    tint: F(this.options.tint)
                })
            }, this.removeLayer = () => {
                u().tileManager.layerManager.backgroundLayersManager.removeLayer({
                    layerId: this.id
                })
            }, this.onShow = () => {
                this.addLayer()
            }, this.onHide = () => {
                this.removeLayer()
            }, this.addConnectionLine = () => {
                if (this.options.useFullMapSize) return;
                const e = O(this),
                    s = Phaser.Math.Distance.Between(this.x, this.y, e.x, e.y),
                    r = Phaser.Math.Angle.Between(this.x, this.y, e.x, e.y);
                this.parts.add.rect({
                    x: (e.x - this.x) / 2,
                    y: (e.y - this.y) / 2,
                    width: s,
                    height: h.border.width,
                    angle: D(r),
                    color: h.border.color,
                    alpha: h.border.alpha
                })
            }, this.addBoundsBox = () => {
                const {
                    minX: e,
                    minY: s,
                    maxX: r,
                    maxY: t
                } = z(this), p = e + (r - e) / 2 - this.x, m = s + (t - s) / 2 - this.y;
                this.parts.add.rect({
                    x: p,
                    y: m,
                    ignoreInput: !0,
                    width: r - e,
                    height: t - s,
                    color: 16777215,
                    alpha: 0,
                    borderAlpha: h.border.alpha,
                    borderColor: h.border.color,
                    borderWidth: h.border.width
                })
            }, this.setupVisualEditing = () => {
                if (w() || M() || this.options.useFullMapSize) return;
                const e = f(this, "width"),
                    s = f(this, "height");
                this.visualEditing.add.box({
                    keepRatio: !1,
                    rotable: !1,
                    width: this.options.width,
                    height: this.options.height,
                    minWidth: e.min,
                    maxWidth: e.max,
                    minHeight: s.min,
                    maxHeight: s.max,
                    x: this.options.zoneX - this.x,
                    y: this.options.zoneY - this.y,
                    onChange: r => {
                        B(this.x, this.y, {
                            width: r.width,
                            height: r.height,
                            zoneX: r.x,
                            zoneY: r.y
                        })
                    }
                })
            }, this.destroy = e => {
                super.destroy(e), this.removeLayer()
            }, this.addLayer(), w() || M()) return;
        const n = k.Setting;
        new _({
            device: this,
            baseColor: n.baseColor,
            boxColor: n.boxColor,
            content: {
                icon: {
                    image: G("devices/background_tile_zone/icon.png"),
                    scale: 1
                },
                text: {
                    text: this.options.order + "",
                    shiftY: -9,
                    size: 24
                }
            }
        }), this.options.zoneX === X && (this.options.zoneX = this.x), this.options.zoneY === X && (this.options.zoneY = this.y), this.addConnectionLine(), this.addBoundsBox(), this.setupVisualEditing()
    }
}
export {
    X as ZONE_UNSET_POSITION, ti as
    default
};