import {
    o as e
} from "./rolldown-runtime.js";
import {
    c as t
} from "./_index.js";
import {
    t as n
} from "./GetAssetPath.js";
import {
    t as r
} from "./phaser.js";
import {
    D as i
} from "./FixPhaserBootProcess.js";
import {
    t as a
} from "./stores-2.js";
import {
    t as o
} from "./FetchScene.js";
import {
    n as s
} from "./isVersion.js";
import {
    r as c,
    t as l
} from "./InPhase.js";
import {
    t as u
} from "./FetchMyId.js";
import {
    o as d,
    t as f
} from "./Device.js";
import {
    n as p
} from "./TutorialConsts.js";
import {
    t as m
} from "./FetchDeviceById.js";
import {
    r as h
} from "./GlobalLocalDepth.js";
import {
    Lt as g,
    Ot as _,
    Tt as v,
    y
} from "./App-42.js";
import {
    t as b
} from "./Interfaces.js";
var x = {
        imageId: `radar_arrow`,
        imageUrl: n(`devices/waypoint/arrow.png`)
    },
    S = {
        NameTextFontSize: 20,
        DistTextFontSize: 16,
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
        SafeAreaExtraTopMarginWithScorebar: 48,
        SafeAreaBottomMarginWithGUIDevices: 100,
        SafeAreaBottomMarginWithoutGUIDevices: 30,
        SafeAreaLeftRightMargin: 30,
        ShadowBlur: 5
    },
    C = {
        fontFamily: t.ProductSans,
        fontSize: `${y.fontWeight} ${S.NameTextFontSize}px`
    },
    w = () => {
        let e = o(),
            t = e.cameras.main.worldView.left,
            n = e.cameras.main.worldView.right,
            r = e.cameras.main.worldView.top,
            i = e.cameras.main.worldView.bottom;
        return {
            left: t,
            right: n,
            top: r,
            bottom: i,
            x: t + (n - t) / 2,
            y: r + (i - r) / 2,
            width: n - t,
            height: i - r
        }
    },
    T = function(e) {
        return e.deviceLocation = `deviceLocation`, e.player = `player`, e.flag = `flag`, e.ball = `ball`, e
    }({}),
    E = e => {
        if (e.options.flagColor === void 0) return;
        let t = o().worldManager.devices.allDevices.find(t => t.deviceOption.id === p.flag && t.options.flagColor === e.options.flagColor && (t.pointedByWaypointDeviceID === void 0 || t.pointedByWaypointDeviceID === e.id));
        return t && (t.pointedByWaypointDeviceID = e.id), t
    },
    D = e => {
        if (e.options.ballId === void 0) return;
        if (e.trackedBallDeviceId) {
            let t = m(e.trackedBallDeviceId);
            if (t) return t
        }
        let t = o().worldManager.devices.allDevices.find(t => t.deviceOption.id === p.ball && t.options.identifier === e.options.ballId);
        return t && (e.trackedBallDeviceId = t.id), t
    },
    O = e(r()),
    k = e => {
        let t = e.x,
            n = e.y,
            r = w();
        if (e.options.target === T.player) {
            let r = i(e.state.characterId);
            if (!r || r.id === u()) return;
            t = r.body.x, n = r.body.y + S.CharacterShift
        } else if (e.options.target === T.flag) {
            let r = E(e);
            if (!r) return;
            t = r.currentFlagX, n = r.currentFlagY + S.IdleFlagShift, r.state.currentState !== b.idle && (n = r.currentFlagY + S.CarriedFlagShift)
        } else if (e.options.target === T.ball) {
            var a;
            let i = D(e);
            if (!i || !((a = i.container) != null && a.view)) return;
            let o = {
                    x: i.container.view.x,
                    y: i.container.view.y
                },
                s = {
                    x: r.x,
                    y: r.y
                },
                c = O.default.Math.Angle.BetweenPoints(o, s),
                l = i.options.radius,
                u = {
                    x: o.x + l * Math.cos(c),
                    y: o.y + l * Math.sin(c)
                };
            t = u.x, n = u.y
        }
        let o = Math.atan2(n - r.y, t - r.x);
        return {
            x: t,
            y: n,
            camData: r,
            angle: o
        }
    },
    A = (e, t) => {
        let n = e.scene.cameras.main.zoom / e.scene.resizeManager.usedDpi,
            r = a.gui.guiSlots.find(e => e.position === g.topLeft || e.position === g.topRight),
            i = a.gui.guiSlots.find(e => e.position === g.bottomLeft || e.position === g.bottomRight),
            o = r ? S.SafeAreaTopMarginWithGUIDevices : S.SafeAreaTopMarginWithoutGUIDevices;
        a.gui.scorebar && (o += S.SafeAreaExtraTopMarginWithScorebar), o /= n;
        let s = (i ? S.SafeAreaBottomMarginWithGUIDevices : S.SafeAreaBottomMarginWithoutGUIDevices) / n,
            c = S.SafeAreaLeftRightMargin / n;
        return new Phaser.Geom.Rectangle(t.camData.left + c, t.camData.top + o, t.camData.width - 2 * c, t.camData.height - o - s)
    },
    j = (e, t) => Phaser.Geom.Intersects.CircleToRectangle(new Phaser.Geom.Circle(t.x, t.y, 1), A(e, t)),
    M = (e, t, n) => {
        var r, i, a;
        let o = !((r = e.pointer) != null && r.view) || !((i = e.nameText) != null && i.view);
        if (e.options.target === T.ball && (o = !0), o) {
            var s, c;
            (s = e.pointer) != null && s.view && (e.pointer.view.alpha = 0), (c = e.nameText) != null && c.view && (e.nameText.view.alpha = 0);
            return
        }
        let l = e.scene.cameras.main.zoom / e.scene.resizeManager.usedDpi;
        e.nameText.view.setText(`${e.options.name}`), e.nameText.view.setScale(1 / l);
        let u = e.pointer.view.width * S.PointerBaseScale / l,
            d = e.nameText.view.width / l,
            f = -10 / l;
        n.x > n.camData.x ? (e.pointer.view.x = n.x - u / 2 - 25, e.pointer.view.y = n.y, e.pointer.view.angle = 0, e.nameText.view.x = n.x - u - d / 2 - 25 - f, e.nameText.view.y = n.y) : (e.pointer.view.x = n.x + u / 2 + 25, e.pointer.view.y = n.y, e.pointer.view.angle = 180, e.nameText.view.x = n.x + u + d / 2 + 25 + f, e.nameText.view.y = n.y), e.pointer.view.setScale(S.PointerBaseScale / l * .65), (a = e.icon) == null || (a = a.view) == null || a.setAlpha(0)
    },
    N = e => {
        var t;
        let r = i(e.state.characterId);
        if (!r) {
            var a;
            (a = e.icon) == null || a.destroy();
            return
        }
        let o = r.skin.skinId.replace(`character_`, ``);
        if (!o) return;
        let s = n(`characters/spine/normalized_preview/${o}.png`);
        ((t = e.icon) == null ? void 0 : t.options.imageUrl) !== s && e.parts.add.sprite({
            imageId: s,
            imageUrl: s,
            layerId: h.InGameUIElements,
            onReady: t => {
                let n = i(e.state.characterId);
                if (!n && n !== r) return;
                let a = n.skin.skinId.replace(`character_`, ``);
                (a || a === o) && (e.icon && e.icon.destroy(), e.icon = t)
            }
        })
    },
    P = (e, t, n) => {
        var r, i;
        let o = e.scene.cameras.main.zoom / e.scene.resizeManager.usedDpi,
            s = 999999999,
            c = n.camData.x + Math.cos(n.angle) * s,
            l = n.camData.y + Math.sin(n.angle) * s,
            u = Phaser.Geom.Intersects.GetLineToRectangle(new Phaser.Geom.Line(n.camData.x, n.camData.y, c, l), A(e, n));
        if (!u[0]) {
            var d;
            (d = e.pointer) != null && d.view && (e.pointer.view.alpha = 0);
            return
        }
        let f = u[0].x,
            p = u[0].y;
        if ((r = e.pointer) != null && r.view && (e.pointer.view.x = f, e.pointer.view.y = p, e.pointer.view.alpha = 1, e.pointer.view.rotation = n.angle, e.pointer.view.setScale(S.PointerBaseScale / o)), !((i = e.nameText) != null && i.view)) return;
        let m = e.options.target === T.player;
        m && N(e), e.nameText.view.setScale(1 / o);
        let h = e.nameText.view.getBounds(),
            g = h.width,
            _ = h.height,
            v = m ? S.CharacterPreviewSize : g,
            y = m ? S.CharacterPreviewSize : _,
            b = S.PointerCircleRadius / o,
            x = Phaser.Math.Distance.Between(f, p, n.camData.x, n.camData.y) - b,
            C = n.camData.x + Math.cos(n.angle) * x,
            w = n.camData.y + Math.sin(n.angle) * x,
            E = !0;
        for (; E;) {
            x -= 1 / o, C = n.camData.x + Math.cos(n.angle) * x, w = n.camData.y + Math.sin(n.angle) * x;
            let e = new Phaser.Geom.Circle(f, p, b),
                t = new Phaser.Geom.Rectangle(C - v / 2, w - y / 2, v, y);
            E = Phaser.Geom.Intersects.CircleToRectangle(e, t)
        }
        if (e.nameText.view.x = C, e.nameText.view.y = w, m) {
            var D;
            (D = e.icon) != null && D.view && (e.icon.view.setOrigin(S.CharacterPreviewOriginX, S.CharacterPreviewOriginY), e.icon.view.x = C, e.icon.view.y = w, e.icon.view.setScale(S.CharacterPreviewScale / o), e.icon.view.setAlpha(1));
            let t = g / 2 + S.CharacterPreviewAndTextSpace;
            e.nameText.view.x = C + t, n.camData.x < C && (e.nameText.view.x = C - t)
        }
        let O = a.phaser.mainCharacter;
        if (!O) return;
        let k = Phaser.Math.Distance.Between(O.body.x, O.body.y, n.x, n.y),
            j = S.PixelsPerMeter,
            M = Math.round(k / j);
        e.nameText.view.setText(`${e.options.name} (${M}m)`)
    },
    F = e => {
        var t, n, r;
        let i = 1;
        if (c() && (i = 0), e.state.active || (i = 0), e.options.target === T.player && !e.state.characterId && (i = 0), e.options.target === T.player && e.state.characterId === u() && (i = 0), e.options.target === T.flag) {
            let t = E(e);
            t ? (t.state.characterId === u() || t.lastCharacterIdToHoldFlag === u() && t.goingBackToBase || e.options.hideWhenFlagIsInBase && t.isInBase()) && (i = 0) : i = 0
        } else if (e.options.target === T.ball) {
            let t = D(e);
            t && t.state.active || (i = 0)
        }
        return (t = e.pointer) != null && t.view && (e.pointer.view.alpha = i), (n = e.nameText) != null && n.view && (e.nameText.view.alpha = i), (r = e.icon) != null && r.view && (e.icon.view.alpha = i), i
    },
    I = function(e) {
        return e.deactivateWithinRange = `deactivateWithinRange`, e
    }({}),
    L = (e, t) => {
        if (!e.options.useDeactivateWithinRange || e.options.target !== T.deviceLocation || !e.state.active) return;
        let n = a.phaser.mainCharacter;
        if (!n) return;
        let r = Phaser.Math.Distance.Between(n.body.x, n.body.y, t.x, t.y),
            i = S.PixelsPerMeter;
        Math.round(r / i) < e.options.deactivateWithinRange && e.sendToServerDevice(I.deactivateWithinRange)
    },
    R = e => {
        if (e.options.flagColor === void 0) return;
        let t = o().worldManager.devices.allDevices.find(t => t.deviceOption.id === p.flag && t.options.flagColor === e.options.flagColor && t.pointedByWaypointDeviceID === e.id);
        t && (t.pointedByWaypointDeviceID = void 0)
    },
    z = class extends f {
        constructor(e) {
            if (super(e), this.onUpdate = e => {
                    if (!F(this)) return;
                    let t = k(this);
                    t && (j(this, t) ? M(this, e, t) : P(this, e, t), L(this, t))
                }, this.onDestroy = e => {
                    R(this)
                }, c() && s()) {
                let e = _.Overlay;
                new v({
                    device: this,
                    baseColor: e.baseColor,
                    boxColor: e.boxColor,
                    content: {
                        icon: {
                            image: n(`devices/waypoint/icon.png`),
                            scale: .9
                        }
                    }
                })
            }
            if (l()) {
                this.cull.ignoreCulling();
                let e = Phaser.Display.Color.HexStringToColor(this.options.color).color;
                this.pointer = this.parts.add.sprite({
                    ...x,
                    layerId: h.InGameUIElements,
                    onReady: t => {
                        t.view.setTint(e), F(this)
                    }
                }), this.nameText = this.parts.add.text({
                    text: this.options.name,
                    layerId: h.InGameUIElements,
                    textStyle: {
                        ...C,
                        color: this.options.color
                    }
                }), this.nameText.view.setPadding(5 * d()), this.nameText.view.setShadow(0, 0, `#333333`, S.ShadowBlur, !1, !0), this.nameText.view.setResolution(d()), F(this)
            }
        }
    };
export {
    z as
    default
};