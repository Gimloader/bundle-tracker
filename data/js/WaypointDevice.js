function e(e, t, a, i) {
    Object.defineProperty(e, t, {
        get: a,
        set: i,
        enumerable: !0,
        configurable: !0
    })
}

function t(e) {
    return e && e.__esModule ? e.default : e
}
var a = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
a.register("a5Bab", (function(t, i) {
    var n;
    n = t.exports, Object.defineProperty(n, "__esModule", {
        value: !0,
        configurable: !0
    }), e(t.exports, "default", (function() {
        return I
    }));
    var r = a("divCp"),
        o = a("bNmF9"),
        s = a("4Ap9E"),
        l = a("6Tpu2"),
        c = a("eIiOF"),
        d = a("606kH"),
        u = a("1fHvm"),
        v = a("XFFm7"),
        f = a("5AYTb"),
        p = a("bvStP"),
        g = a("a2J3O"),
        h = a("bYRAT"),
        w = a("4uojN"),
        m = a("dPNN3"),
        x = a("alREA"),
        y = a("h6SIm"),
        T = a("9dvV7"),
        C = a("5N0Xl");
    class S extends o.default {
        constructor(e) {
            if (super(e), (0, r.default)(this, "onUpdate", (e => {
                    if (!(0, h.UpdateVisibility)(this)) return;
                    const t = (0, d.GetTargetParams)(this);
                    if (!t) return;
                    (0, u.IsTargetWithinSafeArea)(this, t) ? (0, v.UpdateWithTargetWithinView)(this, e, t) : (0, f.UpdateWithTargetOutsideView)(this, e, t), (0, T.default)(this, t)
                })), (0, r.default)(this, "onDestroy", (e => {
                    (0, C.ReleasePointedFlagDevice)(this)
                })), (0, l.InPreGamePhase)() && (0, w.isSavedVersion)()) {
                const e = y.default.Overlay;
                new(0, m.default)({
                    device: this,
                    baseColor: e.baseColor,
                    boxColor: e.boxColor,
                    content: {
                        icon: {
                            image: (0, x.default)("devices/waypoint/icon.png"),
                            scale: .9
                        }
                    }
                })
            }
            if ((0, l.InGamePhase)()) {
                this.cull.ignoreCulling();
                const e = Phaser.Display.Color.HexStringToColor(this.options.color).color;
                this.pointer = this.parts.add.sprite({
                    ...s.PointerAsset,
                    layerId: p.default.InGameUIElements,
                    onReady: t => {
                        t.view.setTint(e), (0, h.UpdateVisibility)(this)
                    }
                }), this.nameText = this.parts.add.text({
                    text: this.options.name,
                    layerId: p.default.InGameUIElements,
                    textStyle: {
                        ...c.NAME_TEXT_STYLE,
                        color: this.options.color
                    }
                }), this.nameText.view.setPadding(5 * (0, g.default)()), this.nameText.view.setShadow(0, 0, "#333333", c.Consts.ShadowBlur, !1, !0), this.nameText.view.setResolution((0, g.default)()), (0, h.UpdateVisibility)(this)
            }
        }
    }
    var I = S
})), a.register("4Ap9E", (function(t, i) {
    e(t.exports, "PointerAsset", (function() {
        return n
    }));
    const n = {
        imageId: "radar_arrow",
        imageUrl: (0, a("alREA").default)("devices/waypoint/arrow.png")
    }
})), a.register("eIiOF", (function(t, i) {
    e(t.exports, "Consts", (function() {
        return o
    })), e(t.exports, "NAME_TEXT_STYLE", (function() {
        return s
    }));
    var n = a("69SUA"),
        r = a("geeXf");
    const o = {
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
            SafeAreaExtraTopMarginWithScorebar: a("f6ZtK").SCOREBAR_HEIGHT,
            SafeAreaBottomMarginWithGUIDevices: 100,
            SafeAreaBottomMarginWithoutGUIDevices: 30,
            SafeAreaLeftRightMargin: 30,
            ShadowBlur: 5
        },
        s = {
            fontFamily: n.Fonts.ProductSans,
            fontSize: `${r.default.fontWeight} ${o.NameTextFontSize}px`
        }
})), a.register("606kH", (function(i, n) {
    e(i.exports, "GetTargetParams", (function() {
        return p
    }));
    var r = a("fhnJp"),
        o = a("3De56"),
        s = a("1UlqS"),
        l = a("9akbZ"),
        c = a("eIiOF"),
        d = a("3ODqm"),
        u = a("2blpW"),
        v = a("1BOkS"),
        f = a("c3ah8");
    const p = e => {
        let a = e.x,
            i = e.y;
        const n = (0, o.FetchCameraData)();
        if (e.options.target === d.WaypointTarget.player) {
            const t = (0, s.default)(e.state.characterId);
            if (!t) return;
            if (t.id === (0, r.default)()) return;
            a = t.body.x, i = t.body.y + c.Consts.CharacterShift
        } else if (e.options.target === d.WaypointTarget.flag) {
            const t = (0, u.FetchFlagOfColor)(e);
            if (!t) return;
            a = t.currentFlagX, i = t.currentFlagY + c.Consts.IdleFlagShift, t.state.currentState !== l.CurrentState.idle && (i = t.currentFlagY + c.Consts.CarriedFlagShift)
        } else if (e.options.target === d.WaypointTarget.ball) {
            var p;
            const r = (0, v.FetchBallOfId)(e);
            if (!r || !(null === (p = r.container) || void 0 === p ? void 0 : p.view)) return;
            const o = {
                    x: r.container.view.x,
                    y: r.container.view.y
                },
                s = {
                    x: n.x,
                    y: n.y
                },
                l = t(f).Math.Angle.BetweenPoints(o, s),
                c = r.options.radius,
                d = {
                    x: o.x + c * Math.cos(l),
                    y: o.y + c * Math.sin(l)
                };
            a = d.x, i = d.y
        }
        return {
            x: a,
            y: i,
            camData: n,
            angle: Math.atan2(i - n.y, a - n.x)
        }
    }
})), a.register("3De56", (function(t, i) {
    e(t.exports, "FetchCameraData", (function() {
        return r
    }));
    var n = a("gwuwo");
    const r = () => {
        const e = (0, n.default)(),
            t = e.cameras.main.worldView.left,
            a = e.cameras.main.worldView.right,
            i = e.cameras.main.worldView.top,
            r = e.cameras.main.worldView.bottom;
        return {
            left: t,
            right: a,
            top: i,
            bottom: r,
            x: t + (a - t) / 2,
            y: i + (r - i) / 2,
            width: a - t,
            height: r - i
        }
    }
})), a.register("9akbZ", (function(t, a) {
    let i;
    var n;
    let r;
    var o;
    e(t.exports, "CurrentState", (function() {
        return r
    })), (n = i || (i = {})).black = "black", n.blue = "blue", n.green = "green", n.orange = "orange", n.purple = "purple", n.red = "red", n.white = "white", (o = r || (r = {})).idle = "idle", o.carried = "carried", o.dropped = "dropped";
    r.idle
})), a.register("3ODqm", (function(t, a) {
    let i;
    var n;
    e(t.exports, "WaypointTarget", (function() {
        return i
    })), (n = i || (i = {})).deviceLocation = "deviceLocation", n.player = "player", n.flag = "flag", n.ball = "ball"
})), a.register("2blpW", (function(t, i) {
    e(t.exports, "FetchFlagOfColor", (function() {
        return o
    }));
    var n = a("z5iun"),
        r = a("gwuwo");
    const o = e => {
        if (void 0 === e.options.flagColor) return;
        const t = (0, r.default)().worldManager.devices.allDevices.find((t => t.deviceOption.id === n.default.flag && t.options.flagColor === e.options.flagColor && (void 0 === t.pointedByWaypointDeviceID || t.pointedByWaypointDeviceID === e.id)));
        return t && (t.pointedByWaypointDeviceID = e.id), t
    }
})), a.register("1BOkS", (function(t, i) {
    e(t.exports, "FetchBallOfId", (function() {
        return s
    }));
    var n = a("z5iun"),
        r = a("gwuwo"),
        o = a("goohJ");
    const s = e => {
        if (void 0 === e.options.ballId) return;
        if (e.trackedBallDeviceId) {
            const t = (0, o.FetchDeviceById)(e.trackedBallDeviceId);
            if (t) return t
        }
        const t = (0, r.default)().worldManager.devices.allDevices.find((t => t.deviceOption.id === n.default.ball && t.options.identifier === e.options.ballId));
        return t && (e.trackedBallDeviceId = t.id), t
    }
})), a.register("1fHvm", (function(t, i) {
    e(t.exports, "IsTargetWithinSafeArea", (function() {
        return r
    }));
    var n = a("5vgfA");
    const r = (e, t) => Phaser.Geom.Intersects.CircleToRectangle(new Phaser.Geom.Circle(t.x, t.y, 1), (0, n.GetSafeAreaRect)(e, t))
})), a.register("5vgfA", (function(t, i) {
    e(t.exports, "GetSafeAreaRect", (function() {
        return l
    }));
    var n = a("a2J3O"),
        r = a("iRjsB"),
        o = a("1E3gr"),
        s = a("eIiOF");
    const l = (e, t) => {
        const a = e.scene.cameras.main.zoom / (0, n.default)(),
            i = r.default.gui.guiSlots.find((e => e.position === o.GUIPosition.topLeft || e.position === o.GUIPosition.topRight)),
            l = r.default.gui.guiSlots.find((e => e.position === o.GUIPosition.bottomLeft || e.position === o.GUIPosition.bottomRight));
        let c = i ? s.Consts.SafeAreaTopMarginWithGUIDevices : s.Consts.SafeAreaTopMarginWithoutGUIDevices;
        r.default.gui.scorebar && (c += s.Consts.SafeAreaExtraTopMarginWithScorebar), c /= a;
        const d = (l ? s.Consts.SafeAreaBottomMarginWithGUIDevices : s.Consts.SafeAreaBottomMarginWithoutGUIDevices) / a,
            u = s.Consts.SafeAreaLeftRightMargin / a;
        return new Phaser.Geom.Rectangle(t.camData.left + u, t.camData.top + c, t.camData.width - 2 * u, t.camData.height - c - d)
    }
})), a.register("XFFm7", (function(t, i) {
    e(t.exports, "UpdateWithTargetWithinView", (function() {
        return s
    }));
    var n = a("a2J3O"),
        r = a("eIiOF"),
        o = a("3ODqm");
    const s = (e, t, a) => {
        var i, s, l, c;
        let d = !(null === (i = e.pointer) || void 0 === i ? void 0 : i.view) || !(null === (s = e.nameText) || void 0 === s ? void 0 : s.view);
        var u, v;
        if (e.options.target === o.WaypointTarget.ball && (d = !0), d) return (null === (u = e.pointer) || void 0 === u ? void 0 : u.view) && (e.pointer.view.alpha = 0), void((null === (v = e.nameText) || void 0 === v ? void 0 : v.view) && (e.nameText.view.alpha = 0));
        const f = e.scene.cameras.main.zoom / (0, n.default)(),
            p = e.pointer.view.width * r.Consts.PointerBaseScale / f,
            g = e.nameText.view.width / f,
            h = -10 / f;
        a.x > a.camData.x ? (e.pointer.view.x = a.x - p / 2 - 25, e.pointer.view.y = a.y, e.pointer.view.angle = 0, e.nameText.view.x = a.x - p - g / 2 - 25 - h, e.nameText.view.y = a.y) : (e.pointer.view.x = a.x + p / 2 + 25, e.pointer.view.y = a.y, e.pointer.view.angle = 180, e.nameText.view.x = a.x + p + g / 2 + 25 + h, e.nameText.view.y = a.y), e.pointer.view.setScale(r.Consts.PointerBaseScale / f * .65), e.nameText.view.setText(`${e.options.name}`), null === (l = e.icon) || void 0 === l || null === (c = l.view) || void 0 === c || c.setAlpha(0)
    }
})), a.register("5AYTb", (function(t, i) {
    e(t.exports, "UpdateWithTargetOutsideView", (function() {
        return d
    }));
    var n = a("a2J3O"),
        r = a("iRjsB"),
        o = a("eIiOF"),
        s = a("5vgfA"),
        l = a("3ODqm"),
        c = a("7gwaG");
    const d = (e, t, a) => {
        var i, d;
        const u = e.scene.cameras.main.zoom / (0, n.default)(),
            v = 999999999,
            f = a.camData.x + Math.cos(a.angle) * v,
            p = a.camData.y + Math.sin(a.angle) * v,
            g = Phaser.Geom.Intersects.GetLineToRectangle(new Phaser.Geom.Line(a.camData.x, a.camData.y, f, p), (0, s.GetSafeAreaRect)(e, a));
        var h;
        if (!g[0]) return void((null === (h = e.pointer) || void 0 === h ? void 0 : h.view) && (e.pointer.view.alpha = 0));
        const w = g[0].x,
            m = g[0].y;
        if ((null === (i = e.pointer) || void 0 === i ? void 0 : i.view) && (e.pointer.view.x = w, e.pointer.view.y = m, e.pointer.view.alpha = 1, e.pointer.view.rotation = a.angle, e.pointer.view.setScale(o.Consts.PointerBaseScale / u)), !(null === (d = e.nameText) || void 0 === d ? void 0 : d.view)) return;
        const x = e.options.target === l.WaypointTarget.player;
        x && (0, c.UpdateCharacterPreview)(e), e.nameText.view.setScale(1 / u);
        const y = e.nameText.view.getBounds(),
            T = y.width,
            C = y.height,
            S = x ? o.Consts.CharacterPreviewSize : T,
            I = x ? o.Consts.CharacterPreviewSize : C,
            D = o.Consts.PointerCircleRadius / u;
        let P = Phaser.Math.Distance.Between(w, m, a.camData.x, a.camData.y) - D,
            b = a.camData.x + Math.cos(a.angle) * P,
            W = a.camData.y + Math.sin(a.angle) * P,
            M = !0;
        for (; M;) {
            P -= 1 / u, b = a.camData.x + Math.cos(a.angle) * P, W = a.camData.y + Math.sin(a.angle) * P;
            const e = new Phaser.Geom.Circle(w, m, D),
                t = new Phaser.Geom.Rectangle(b - S / 2, W - I / 2, S, I);
            M = Phaser.Geom.Intersects.CircleToRectangle(e, t)
        }
        if (e.nameText.view.x = b, e.nameText.view.y = W, x) {
            var A;
            (null === (A = e.icon) || void 0 === A ? void 0 : A.view) && (e.icon.view.setOrigin(o.Consts.CharacterPreviewOriginX, o.Consts.CharacterPreviewOriginY), e.icon.view.x = b, e.icon.view.y = W, e.icon.view.setScale(o.Consts.CharacterPreviewScale / u), e.icon.view.setAlpha(1));
            const t = T / 2 + o.Consts.CharacterPreviewAndTextSpace;
            e.nameText.view.x = b + t, a.camData.x < b && (e.nameText.view.x = b - t)
        }
        const F = r.default.phaser.mainCharacter;
        if (!F) return;
        const O = Phaser.Math.Distance.Between(F.body.x, F.body.y, a.x, a.y),
            B = o.Consts.PixelsPerMeter,
            R = Math.round(O / B);
        e.nameText.view.setText(`${e.options.name} (${R}m)`)
    }
})), a.register("7gwaG", (function(t, i) {
    e(t.exports, "UpdateCharacterPreview", (function() {
        return o
    }));
    var n = a("1UlqS"),
        r = a("alREA");
    const o = e => {
        var t;
        const a = (0, n.default)(e.state.characterId);
        var i;
        if (!a) return void(null === (i = e.icon) || void 0 === i || i.destroy());
        const o = a.skin.skinId.replace("character_", "");
        if (!o) return;
        const s = (0, r.default)(`characters/spine/normalized_preview/${o}.png`);
        (null === (t = e.icon) || void 0 === t ? void 0 : t.options.imageUrl) !== s && e.parts.add.sprite({
            imageId: s,
            imageUrl: s,
            onReady: t => {
                const i = (0, n.default)(e.state.characterId);
                if (!i && i !== a) return;
                const r = i.skin.skinId.replace("character_", "");
                (r || r === o) && (e.icon && e.icon.destroy(), e.icon = t)
            }
        })
    }
})), a.register("bYRAT", (function(t, i) {
    e(t.exports, "UpdateVisibility", (function() {
        return c
    }));
    var n = a("fhnJp"),
        r = a("6Tpu2"),
        o = a("3ODqm"),
        s = a("2blpW"),
        l = a("1BOkS");
    const c = e => {
        var t, a;
        let i = 1;
        if ((0, r.InPreGamePhase)() && (i = 0), e.state.active || (i = 0), e.options.target !== o.WaypointTarget.player || e.state.characterId || (i = 0), e.options.target === o.WaypointTarget.player && e.state.characterId === (0, n.default)() && (i = 0), e.options.target === o.WaypointTarget.flag) {
            const t = (0, s.FetchFlagOfColor)(e);
            t ? (t.state.characterId === (0, n.default)() || t.lastCharacterIdToHoldFlag === (0, n.default)() && t.goingBackToBase || e.options.hideWhenFlagIsInBase && t.isInBase()) && (i = 0) : i = 0
        } else if (e.options.target === o.WaypointTarget.ball) {
            const t = (0, l.FetchBallOfId)(e);
            t && t.state.active || (i = 0)
        }
        return (null === (t = e.pointer) || void 0 === t ? void 0 : t.view) && (e.pointer.view.alpha = i), (null === (a = e.nameText) || void 0 === a ? void 0 : a.view) && (e.nameText.view.alpha = i), i
    }
})), a.register("9dvV7", (function(t, i) {
    e(t.exports, "default", (function() {
        return l
    }));
    var n = a("iRjsB"),
        r = a("eIiOF"),
        o = a("3ODqm"),
        s = a("dX2KM");
    var l = (e, t) => {
        if (!e.options.useDeactivateWithinRange || e.options.target !== o.WaypointTarget.deviceLocation) return;
        if (!e.state.active) return;
        const a = n.default.phaser.mainCharacter;
        if (!a) return;
        const i = Phaser.Math.Distance.Between(a.body.x, a.body.y, t.x, t.y),
            l = r.Consts.PixelsPerMeter;
        Math.round(i / l) < e.options.deactivateWithinRange && e.sendToServerDevice(s.Messages.deactivateWithinRange)
    }
})), a.register("dX2KM", (function(t, a) {
    let i;
    e(t.exports, "Messages", (function() {
        return i
    })), (i || (i = {})).deactivateWithinRange = "deactivateWithinRange"
})), a.register("5N0Xl", (function(t, i) {
    e(t.exports, "ReleasePointedFlagDevice", (function() {
        return o
    }));
    var n = a("gwuwo"),
        r = a("z5iun");
    const o = e => {
        if (void 0 === e.options.flagColor) return;
        const t = (0, n.default)().worldManager.devices.allDevices.find((t => t.deviceOption.id === r.default.flag && t.options.flagColor === e.options.flagColor && t.pointedByWaypointDeviceID === e.id));
        t && (t.pointedByWaypointDeviceID = void 0)
    }
}));