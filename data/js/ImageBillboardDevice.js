import {
    al as P,
    aJ as x,
    L as I,
    aY as C,
    aQ as M,
    aZ as y,
    au as w,
    ai as D
} from "./App-41.js";
import {
    d as p,
    I as g,
    i as G,
    e as v
} from "./FixSpinePlugin.js";
import {
    F as b,
    R as Y
} from "./ReplaceVisualEditingPreview.js";
import "./_index.js";
import "./Button.js";
import "./polished.esm.js";
import "./inheritsLoose.js";
import "./mobxreact.esm.js";
import "./index-21.js";
import "./QuizTypes.js";
import "./MapModeType.js";
import "./GetAssetPath.js";
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
var l = (o => (o.all = "all", o.game = "game", o.preGame = "preGame", o))(l || {});
const H = o => {
    o.originX = o.originX ?? .5, o.originY = o.originY ?? .5;
    const t = [{
            originX: 1,
            originY: 1
        }, {
            originX: 0,
            originY: 1
        }, {
            originX: 1,
            originY: 0
        }, {
            originX: 0,
            originY: 0
        }],
        {
            width: i,
            height: e,
            rotation: s,
            originX: r,
            originY: h
        } = o,
        m = [],
        n = [];
    t.forEach(a => {
        const f = Phaser.Math.Angle.Between(0, 0, (a.originX - r) * i, (a.originY - h) * e),
            u = Phaser.Math.Distance.Between(0, 0, (a.originX - r) * i, (a.originY - h) * e);
        m.push(u * Math.cos(f + s)), n.push(u * Math.sin(f + s))
    });
    const d = Math.max(...m) - Math.min(...m),
        c = Math.max(...n) - Math.min(...n);
    return {
        x: -r * d,
        y: -h * c,
        width: d,
        height: c
    }
};
class qi extends P {
    constructor(t) {
        super(t), this.matchesPhase = !0, this.createVisuals = () => {
            this.matchesPhase && (this.createFrame(), this.createImage()), this.boundingBox.setHardcoded(H({
                height: this.options.height,
                width: this.options.width,
                rotation: x(this.options.rotation)
            }))
        }, this.onStateChange = e => {
            e === "frameColor" && (this.createFrame(), this.createImage()), e === "imageUrl" && this.createImage(), e === "visible" && p() && (this.state.visible ? (this.image && (this.image.view.alpha = 1), this.frame && (this.frame.view.alpha = 1)) : (this.image && (this.image.view.alpha = 0), this.frame && (this.frame.view.alpha = 0)))
        }, this.setupVisualEditing = () => {
            if (!g() || !G()) return;
            const e = b(this, "width"),
                s = b(this, "height");
            this.visualEditing.add.box({
                width: this.options.width,
                height: this.options.height,
                angle: this.options.rotation,
                minWidth: e.min,
                maxWidth: e.max,
                minHeight: s.min,
                maxHeight: s.max,
                keepRatio: !1,
                onChange: r => {
                    Y(r.x, r.y, {
                        width: r.width,
                        height: r.height,
                        rotation: r.angle
                    })
                }
            })
        }, this.layers.setDefaultLayer(I.DevicesAboveCharacters), this.setupVisualEditing();
        let i = !0;
        (this.options.visibleDuringPhase === l.game && !p() && v() || this.options.visibleDuringPhase === l.preGame && !g()) && (i = !1), this.matchesPhase = i, this.createVisuals()
    }
    createImage() {
        if (!this.matchesPhase || v() && g() && this.options.visibleOnGameStart === "No") return;
        const t = C(this.state.imageUrl || this.options.imageUrl);
        this.lastImageUrl = t, this.parts.add.sprite({
            imageId: t,
            imageUrl: t,
            onReady: i => {
                if (t !== this.lastImageUrl) {
                    this.parts.destroySpecificPart(i.id);
                    return
                }
                this.image && this.parts.destroySpecificPart(this.image.id), this.image = i;
                const e = M(t),
                    s = y({
                        width: e.width,
                        height: e.height,
                        newWidth: Math.abs(this.options.width) * .75,
                        newHeight: Math.abs(this.options.height) * .75
                    });
                i.view.displayWidth = s.width, i.view.displayHeight = s.height, this.boundingBox.clearHardcoded(), i.view.angle = this.options.rotation, p() ? i.view.alpha = this.state.visible ? this.options.alpha : 0 : i.view.alpha = this.options.alpha
            }
        })
    }
    createFrame() {
        if (!this.matchesPhase) return;
        this.frame && this.parts.destroySpecificPart(this.frame.id);
        const t = this.state.frameColor || this.options.frameColor;
        if (t === "Transparent") return;
        const i = w(t);
        this.frame = this.parts.add.rect({
            color: i,
            alpha: 1,
            borderAlpha: 1,
            width: Math.abs(this.options.width),
            height: Math.abs(this.options.height),
            borderColor: w(D(t)),
            borderWidth: 8,
            cornerRadius: 10
        }), this.frame.view.angle = this.options.rotation
    }
}
export {
    qi as
    default
};