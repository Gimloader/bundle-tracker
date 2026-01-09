import {
    aJ as y,
    al as L
} from "./App-41.js";
import "./_index.js";
import "./Button.js";
import "./polished.esm.js";
import "./inheritsLoose.js";
import "./FixSpinePlugin.js";
import "./GetAssetPath.js";
import "./MapModeType.js";
import "./MapStyle.js";
import "./playSound.js";
import "./howler.js";
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
var C = (t => (t.line = "rectangle", t.circle = "circle", t))(C || {}),
    x = (t => (t.solid = "solid", t.dashed = "dashed", t))(x || {});
const I = (t, s, o, n, i) => {
        n = n ?? t.options.circleRadius + t.options.thickness / 2, i = i ?? t.options.circleRadius - t.options.thickness / 2;
        const r = -Math.PI / 2 - t.options.circlePercentage / 100 * Math.PI,
            a = -Math.PI / 2 + t.options.circlePercentage / 100 * Math.PI;
        let p = Phaser.Math.Angle.Between(0, 0, s, o);
        if (p > Math.PI / 2 && (p -= 2 * Math.PI), p < r || p > a) return !1;
        const l = Phaser.Math.Distance.Between(0, 0, s, o);
        return !(l > n || l < i)
    },
    S = t => {
        const s = t.options.circleRadius * 2 + t.options.thickness / 2,
            o = t.options.circleRadius * 2 + t.options.thickness / 2,
            n = -Math.PI / 2 - t.options.circlePercentage / 100 * Math.PI,
            i = -Math.PI / 2 + t.options.circlePercentage / 100 * Math.PI;
        t.graphics = t.parts.add.graphics({
            x: 0,
            y: 0,
            width: s,
            height: o,
            hitCallback: (m, f) => I(t, m, f)
        }), t.graphics.view.lineStyle(Math.min(t.options.thickness, t.options.circleRadius * 2), Phaser.Display.Color.HexStringToColor(t.options.color).color, t.options.alpha);
        const r = t.options.circlePercentage / 100 * Math.PI * 2,
            a = Math.PI * t.options.circleRadius * 2,
            p = a * t.options.circlePercentage / 100,
            l = t.options.dashLength,
            g = t.options.dashSpacing,
            h = l / a * Math.PI * 2,
            c = g / a * Math.PI * 2;
        if (c >= p) {
            const m = Math.min(n, -h / 2),
                f = Math.max(i, h / 2);
            t.graphics.view.arc(0, 0, t.options.circleRadius, m, f, !1, .01);
            return
        }
        const e = h + c,
            u = Math.max(1, Math.floor(r / e)),
            k = r - u * e,
            M = Math.min(h, (k + h) / 2),
            P = Math.max(0, (k - h) / 2);
        t.graphics.view.beginPath(), t.graphics.view.arc(0, 0, t.options.circleRadius, n + P, n + P + M, !1, .01), t.graphics.view.strokePath();
        let w = n + P + M + c;
        for (let m = 0; m < u - 1; m++) t.graphics.view.beginPath(), t.graphics.view.arc(0, 0, t.options.circleRadius, w, w + h, !1, .01), t.graphics.view.strokePath(), w += e;
        t.graphics.view.beginPath(), t.graphics.view.arc(0, 0, t.options.circleRadius, i - P - M, i - P, !1, .01), t.graphics.view.strokePath(), t.graphics.view.angle = t.options.angle
    },
    R = t => {
        const s = {
                x: t.x,
                y: t.y
            },
            o = y(t.options.angle),
            n = t.options.lineLength / 2,
            i = s.x - n * Math.cos(o),
            r = s.y - n * Math.sin(o),
            a = s.x + n * Math.cos(o),
            p = s.y + n * Math.sin(o),
            l = Math.min(i, a),
            g = Math.min(r, p),
            h = Math.max(i, a),
            c = Math.max(r, p),
            e = h - l,
            u = c - g;
        t.boundingBox.setHardcoded({
            width: e,
            height: u
        })
    },
    A = t => {
        const s = t.options.lineLength,
            o = t.options.thickness;
        t.graphics = t.parts.add.graphics({
            x: 0,
            y: 0,
            width: s,
            height: o
        }), t.graphics.view.fillStyle(Phaser.Display.Color.HexStringToColor(t.options.color).color, t.options.alpha);
        const n = t.options.dashLength,
            i = t.options.dashSpacing;
        if (i >= s) {
            const c = Math.min(n, s);
            t.graphics.view.fillRect(-c / 2, -o / 2, c, o);
            return
        }
        const r = n + i,
            a = Math.max(1, Math.floor(s / r)),
            p = s - a * r,
            l = Math.min(n, (p + n) / 2),
            g = Math.max(0, (p - n) / 2);
        t.graphics.view.fillRect(-s / 2 + g, -o / 2, l, o);
        let h = -s / 2 + g + l + i;
        for (let c = 0; c < a - 1; c++) t.graphics.view.fillRect(h, -o / 2, n, o), h += r;
        t.graphics.view.fillRect(s / 2 - g - l, -o / 2, l, o), t.graphics.view.angle = t.options.angle, R(t)
    },
    D = t => {
        const s = t.options.circleRadius * 2 + t.options.thickness / 2,
            o = t.options.circleRadius * 2 + t.options.thickness / 2,
            n = -Math.PI / 2 - t.options.circlePercentage / 100 * Math.PI,
            i = -Math.PI / 2 + t.options.circlePercentage / 100 * Math.PI;
        t.graphics = t.parts.add.graphics({
            x: 0,
            y: 0,
            width: s,
            height: o,
            hitCallback: (r, a) => I(t, r, a, 0, t.options.circleRadius)
        }), t.graphics.view.fillStyle(Phaser.Display.Color.HexStringToColor(t.options.color).color, t.options.alpha), t.graphics.view.slice(0, 0, t.options.circleRadius, n, i, !1), t.graphics.view.fillPath(), t.graphics.view.angle = t.options.angle
    },
    b = t => {
        const s = t.options.circleRadius * 2 + t.options.thickness / 2,
            o = t.options.circleRadius * 2 + t.options.thickness / 2,
            n = -Math.PI / 2 - t.options.circlePercentage / 100 * Math.PI,
            i = -Math.PI / 2 + t.options.circlePercentage / 100 * Math.PI;
        t.graphics = t.parts.add.graphics({
            x: 0,
            y: 0,
            width: s,
            height: o,
            hitCallback: (r, a) => I(t, r, a)
        }), t.graphics.view.lineStyle(Math.min(t.options.thickness, t.options.circleRadius * 2), Phaser.Display.Color.HexStringToColor(t.options.color).color, t.options.alpha), t.graphics.view.arc(0, 0, t.options.circleRadius, n, i, !1, .01), t.graphics.view.strokePath(), t.graphics.view.angle = t.options.angle
    },
    H = t => {
        const s = t.options.lineLength,
            o = t.options.thickness;
        t.graphics = t.parts.add.graphics({
            x: 0,
            y: 0,
            width: s,
            height: o
        }), t.graphics.view.fillStyle(Phaser.Display.Color.HexStringToColor(t.options.color).color, t.options.alpha), t.graphics.view.fillRect(-s / 2, -o / 2, s, o), t.graphics.view.angle = t.options.angle, R(t)
    },
    T = t => {
        const s = t.options.shape === C.line,
            o = t.options.shape === C.circle,
            n = t.options.style === x.solid,
            i = t.options.style === x.dashed;
        if (t.options.circleFill && o) {
            D(t);
            return
        }
        if (s && n) {
            H(t);
            return
        }
        if (o && n) {
            b(t);
            return
        }
        if (s && i) {
            A(t);
            return
        }
        if (o && i) {
            S(t);
            return
        }
    };
class Zt extends L {
    constructor(s) {
        super(s), this.onStateChange = o => {}, T(this)
    }
}
export {
    Zt as OutlineDevice, Zt as
    default
};