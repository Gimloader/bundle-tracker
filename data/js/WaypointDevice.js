import {
    aM as j,
    aN as q,
    U as J,
    T as P,
    aO as y,
    aP as C,
    L as B,
    al as K,
    am as Q,
    an as Z
} from "./App-41.js";
import {
    G
} from "./GetAssetPath.js";
import {
    a as M,
    F as b,
    P as tt,
    s as u,
    I as k,
    i as et,
    d as it
} from "./FixSpinePlugin.js";
import {
    U as ot
} from "./_index.js";
import {
    C as at
} from "./Interfaces.js";
import {
    D as W
} from "./TutorialConsts.js";
import "./Button.js";
import "./polished.esm.js";
import "./inheritsLoose.js";
import "./mobxreact.esm.js";
import "./index-21.js";
import "./QuizTypes.js";
import "./MapModeType.js";
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
const rt = {
        imageId: "radar_arrow",
        imageUrl: G("devices/waypoint/arrow.png")
    },
    s = {
        NameTextFontSize: 20,
        PointerBaseScale: .25,
        PointerCircleRadius: 20,
        CharacterPreviewSize: 75,
        CharacterPreviewScale: .2,
        CharacterPreviewOriginX: .5,
        CharacterPreviewOriginY: .68,
        CharacterPreviewAndTextSpace: 30,
        PixelsPerMeter: 50,
        CarriedFlagShift: -100,
        IdleFlagShift: -65,
        CharacterShift: -25,
        SafeAreaTopMarginWithGUIDevices: 180,
        SafeAreaTopMarginWithoutGUIDevices: 110,
        SafeAreaExtraTopMarginWithScorebar: q,
        SafeAreaBottomMarginWithGUIDevices: 100,
        SafeAreaBottomMarginWithoutGUIDevices: 30,
        SafeAreaLeftRightMargin: 30,
        ShadowBlur: 5
    },
    nt = {
        fontFamily: ot.ProductSans,
        fontSize: `${j.fontWeight} ${s.NameTextFontSize}px`
    },
    st = () => {
        const t = M(),
            i = t.cameras.main.worldView.left,
            e = t.cameras.main.worldView.right,
            o = t.cameras.main.worldView.top,
            a = t.cameras.main.worldView.bottom;
        return {
            left: i,
            right: e,
            top: o,
            bottom: a,
            x: i + (e - i) / 2,
            y: o + (a - o) / 2,
            width: e - i,
            height: a - o
        }
    };
var h = (t => (t.deviceLocation = "deviceLocation", t.player = "player", t.flag = "flag", t.ball = "ball", t))(h || {});
const E = t => {
        if (t.options.flagColor === void 0) return;
        const i = M().worldManager.devices.allDevices.find(e => e.deviceOption.id === W.flag && e.options.flagColor === t.options.flagColor && (e.pointedByWaypointDeviceID === void 0 || e.pointedByWaypointDeviceID === t.id));
        return i && (i.pointedByWaypointDeviceID = t.id), i
    },
    V = t => {
        if (t.options.ballId === void 0) return;
        if (t.trackedBallDeviceId) {
            const e = J(t.trackedBallDeviceId);
            if (e) return e
        }
        const i = M().worldManager.devices.allDevices.find(e => e.deviceOption.id === W.ball && e.options.identifier === t.options.ballId);
        return i && (t.trackedBallDeviceId = i.id), i
    },
    ct = t => {
        var r;
        let i = t.x,
            e = t.y;
        const o = st();
        if (t.options.target === h.player) {
            const n = b(t.state.characterId);
            if (!n || n.id === P()) return;
            i = n.body.x, e = n.body.y + s.CharacterShift
        } else if (t.options.target === h.flag) {
            const n = E(t);
            if (!n) return;
            i = n.currentFlagX, e = n.currentFlagY + s.IdleFlagShift, n.state.currentState !== at.idle && (e = n.currentFlagY + s.CarriedFlagShift)
        } else if (t.options.target === h.ball) {
            const n = V(t);
            if (!n || !((r = n.container) != null && r.view)) return;
            const l = {
                    x: n.container.view.x,
                    y: n.container.view.y
                },
                c = {
                    x: o.x,
                    y: o.y
                },
                m = tt.Math.Angle.BetweenPoints(l, c),
                p = n.options.radius,
                f = {
                    x: l.x + p * Math.cos(m),
                    y: l.y + p * Math.sin(m)
                };
            i = f.x, e = f.y
        }
        const a = Math.atan2(e - o.y, i - o.x);
        return {
            x: i,
            y: e,
            camData: o,
            angle: a
        }
    },
    Y = (t, i) => {
        const e = t.scene.cameras.main.zoom / y(),
            o = u.gui.guiSlots.find(c => c.position === C.topLeft || c.position === C.topRight),
            a = u.gui.guiSlots.find(c => c.position === C.bottomLeft || c.position === C.bottomRight);
        let r = o ? s.SafeAreaTopMarginWithGUIDevices : s.SafeAreaTopMarginWithoutGUIDevices;
        u.gui.scorebar && (r += s.SafeAreaExtraTopMarginWithScorebar), r = r / e;
        const n = (a ? s.SafeAreaBottomMarginWithGUIDevices : s.SafeAreaBottomMarginWithoutGUIDevices) / e,
            l = s.SafeAreaLeftRightMargin / e;
        return new Phaser.Geom.Rectangle(i.camData.left + l, i.camData.top + r, i.camData.width - 2 * l, i.camData.height - r - n)
    },
    lt = (t, i) => Phaser.Geom.Intersects.CircleToRectangle(new Phaser.Geom.Circle(i.x, i.y, 1), Y(t, i)),
    ht = (t, i, e) => {
        var m, p, f, w, I, x;
        let o = !((m = t.pointer) != null && m.view) || !((p = t.nameText) != null && p.view);
        if (t.options.target === h.ball && (o = !0), o) {
            (f = t.pointer) != null && f.view && (t.pointer.view.alpha = 0), (w = t.nameText) != null && w.view && (t.nameText.view.alpha = 0);
            return
        }
        const a = t.scene.cameras.main.zoom / y(),
            r = t.pointer.view.width * s.PointerBaseScale / a,
            n = t.nameText.view.width / a,
            l = -10 / a,
            c = 25;
        e.x > e.camData.x ? (t.pointer.view.x = e.x - r / 2 - c, t.pointer.view.y = e.y, t.pointer.view.angle = 0, t.nameText.view.x = e.x - r - n / 2 - c - l, t.nameText.view.y = e.y) : (t.pointer.view.x = e.x + r / 2 + c, t.pointer.view.y = e.y, t.pointer.view.angle = 180, t.nameText.view.x = e.x + r + n / 2 + c + l, t.nameText.view.y = e.y), t.pointer.view.setScale(s.PointerBaseScale / a * .65), t.nameText.view.setText(`${t.options.name}`), (x = (I = t.icon) == null ? void 0 : I.view) == null || x.setAlpha(0)
    },
    pt = t => {
        var a, r;
        const i = b(t.state.characterId);
        if (!i) {
            (a = t.icon) == null || a.destroy();
            return
        }
        const e = i.skin.skinId.replace("character_", "");
        if (!e) return;
        const o = G(`characters/spine/normalized_preview/${e}.png`);
        ((r = t.icon) == null ? void 0 : r.options.imageUrl) !== o && t.parts.add.sprite({
            imageId: o,
            imageUrl: o,
            layerId: B.InGameUIElements,
            onReady: n => {
                const l = b(t.state.characterId);
                if (!l && l !== i) return;
                const c = l.skin.skinId.replace("character_", "");
                !c && c !== e || (t.icon && t.icon.destroy(), t.icon = n)
            }
        })
    },
    mt = (t, i, e) => {
        var F, L, O, z;
        const o = t.scene.cameras.main.zoom / y(),
            a = 999999999,
            r = e.camData.x + Math.cos(e.angle) * a,
            n = e.camData.y + Math.sin(e.angle) * a,
            l = Phaser.Geom.Intersects.GetLineToRectangle(new Phaser.Geom.Line(e.camData.x, e.camData.y, r, n), Y(t, e));
        if (!l[0]) {
            (F = t.pointer) != null && F.view && (t.pointer.view.alpha = 0);
            return
        }
        const c = l[0].x,
            m = l[0].y;
        if ((L = t.pointer) != null && L.view && (t.pointer.view.x = c, t.pointer.view.y = m, t.pointer.view.alpha = 1, t.pointer.view.rotation = e.angle, t.pointer.view.setScale(s.PointerBaseScale / o)), !((O = t.nameText) != null && O.view)) return;
        const p = t.options.target === h.player;
        p && pt(t), t.nameText.view.setScale(1 / o);
        const f = t.nameText.view.getBounds(),
            w = f.width,
            I = f.height,
            x = p ? s.CharacterPreviewSize : w,
            R = p ? s.CharacterPreviewSize : I,
            A = s.PointerCircleRadius / o;
        let d = Phaser.Math.Distance.Between(c, m, e.camData.x, e.camData.y) - A,
            g = e.camData.x + Math.cos(e.angle) * d,
            S = e.camData.y + Math.sin(e.angle) * d,
            U = !0;
        for (; U;) {
            d -= 1 / o, g = e.camData.x + Math.cos(e.angle) * d, S = e.camData.y + Math.sin(e.angle) * d;
            const T = new Phaser.Geom.Circle(c, m, A),
                N = new Phaser.Geom.Rectangle(g - x / 2, S - R / 2, x, R);
            U = Phaser.Geom.Intersects.CircleToRectangle(T, N)
        }
        if (t.nameText.view.x = g, t.nameText.view.y = S, p) {
            (z = t.icon) != null && z.view && (t.icon.view.setOrigin(s.CharacterPreviewOriginX, s.CharacterPreviewOriginY), t.icon.view.x = g, t.icon.view.y = S, t.icon.view.setScale(s.CharacterPreviewScale / o), t.icon.view.setAlpha(1));
            const T = w / 2 + s.CharacterPreviewAndTextSpace;
            t.nameText.view.x = g + T, e.camData.x < g && (t.nameText.view.x = g - T)
        }
        const D = u.phaser.mainCharacter;
        if (!D) return;
        const H = Phaser.Math.Distance.Between(D.body.x, D.body.y, e.x, e.y),
            X = s.PixelsPerMeter,
            _ = Math.round(H / X);
        t.nameText.view.setText(`${t.options.name} (${_}m)`)
    },
    v = t => {
        var e, o, a;
        let i = 1;
        if (k() && (i = 0), t.state.active || (i = 0), t.options.target === h.player && !t.state.characterId && (i = 0), t.options.target === h.player && t.state.characterId === P() && (i = 0), t.options.target === h.flag) {
            const r = E(t);
            r ? (r.state.characterId === P() || r.lastCharacterIdToHoldFlag === P() && r.goingBackToBase || t.options.hideWhenFlagIsInBase && r.isInBase()) && (i = 0) : i = 0
        } else if (t.options.target === h.ball) {
            const r = V(t);
            r && r.state.active || (i = 0)
        }
        return (e = t.pointer) != null && e.view && (t.pointer.view.alpha = i), (o = t.nameText) != null && o.view && (t.nameText.view.alpha = i), (a = t.icon) != null && a.view && (t.icon.view.alpha = i), i
    };
var $ = (t => (t.deactivateWithinRange = "deactivateWithinRange", t))($ || {});
const ft = (t, i) => {
        if (!t.options.useDeactivateWithinRange || t.options.target !== h.deviceLocation || !t.state.active) return;
        const e = u.phaser.mainCharacter;
        if (!e) return;
        const o = Phaser.Math.Distance.Between(e.body.x, e.body.y, i.x, i.y),
            a = s.PixelsPerMeter;
        Math.round(o / a) < t.options.deactivateWithinRange && t.sendToServerDevice($.deactivateWithinRange)
    },
    gt = t => {
        if (t.options.flagColor === void 0) return;
        const i = M().worldManager.devices.allDevices.find(e => e.deviceOption.id === W.flag && e.options.flagColor === t.options.flagColor && e.pointedByWaypointDeviceID === t.id);
        i && (i.pointedByWaypointDeviceID = void 0)
    };
class Re extends K {
    constructor(i) {
        if (super(i), this.onUpdate = e => {
                if (!v(this)) return;
                const a = ct(this);
                if (!a) return;
                lt(this, a) ? ht(this, e, a) : mt(this, e, a), ft(this, a)
            }, this.onDestroy = e => {
                gt(this)
            }, k() && et()) {
            const e = Z.Overlay;
            new Q({
                device: this,
                baseColor: e.baseColor,
                boxColor: e.boxColor,
                content: {
                    icon: {
                        image: G("devices/waypoint/icon.png"),
                        scale: .9
                    }
                }
            })
        }
        if (it()) {
            this.cull.ignoreCulling();
            const e = Phaser.Display.Color.HexStringToColor(this.options.color).color;
            this.pointer = this.parts.add.sprite({
                ...rt,
                layerId: B.InGameUIElements,
                onReady: o => {
                    o.view.setTint(e), v(this)
                }
            }), this.nameText = this.parts.add.text({
                text: this.options.name,
                layerId: B.InGameUIElements,
                textStyle: {
                    ...nt,
                    color: this.options.color
                }
            }), this.nameText.view.setPadding(5 * y()), this.nameText.view.setShadow(0, 0, "#333333", s.ShadowBlur, !1, !0), this.nameText.view.setResolution(y()), v(this)
        }
    }
}
export {
    Re as
    default
};