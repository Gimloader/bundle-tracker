function a(a, b, c, o) {
    Object.defineProperty(a, b, {
        get: c,
        set: o,
        enumerable: !0,
        configurable: !0
    });
}

function b(a) {
    return a && a.__esModule ? a.default : a;
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('cLgeI', function(b, o) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), a(b.exports, 'default', function() {
        return x;
    });
    var e = c('UM8oI'),
        f = c('sgILU'),
        g = c('UdF/Z'),
        h = c('5Ux1a'),
        i = c('K8wNY'),
        j = c('7AE/l'),
        k = c('Q/Htb'),
        l = c('zN5Gz'),
        m = c('RDVcQ'),
        n = c('cMsWT'),
        o = c('XbXlP'),
        p = c('tvpal'),
        q = c('Bpt+p'),
        r = c('phu0d'),
        s = c('JJQ0+'),
        t = c('Gqspz'),
        u = c('MyIwn'),
        v = c('CCzCV');
    class w extends f.default {
        constructor(a) {
            if (super(a), (0, e.default)(this, 'onUpdate', a => {
                    if (!(0, p.UpdateVisibility)(this))
                        return;
                    const x = (0, j.GetTargetParams)(this);
                    if (!x)
                        return;
                    (0, k.IsTargetWithinSafeArea)(this, x) ? (0, l.UpdateWithTargetWithinView)(this, a, x) : (0, m.UpdateWithTargetOutsideView)(this, a, x), (0, u.default)(this, x);
                }), (0, e.default)(this, 'onDestroy', a => {
                    (0, v.ReleasePointedFlagDevice)(this);
                }), (0, h.InPreGamePhase)() && (0, q.isSavedVersion)()) {
                const x = t.default.Overlay;
                new(0, r.default)({
                    device: this,
                    baseColor: x.baseColor,
                    boxColor: x.boxColor,
                    content: {
                        icon: {
                            image: (0, s.default)('devices/waypoint/icon.png'),
                            scale: 0.9
                        }
                    }
                });
            }
            if ((0, h.InGamePhase)()) {
                this.cull.ignoreCulling();
                const x = Phaser.Display.Color.HexStringToColor(this.options.color).color;
                this.pointer = this.parts.add.sprite({
                    ...g.PointerAsset,
                    layerId: n.default.InGameUIElements,
                    onReady: b => {
                        b.view.setTint(x), (0, p.UpdateVisibility)(this);
                    }
                }), this.nameText = this.parts.add.text({
                    text: this.options.name,
                    layerId: n.default.InGameUIElements,
                    textStyle: {
                        ...i.NAME_TEXT_STYLE,
                        color: this.options.color
                    }
                }), this.nameText.view.setPadding(5 * (0, o.default)()), this.nameText.view.setShadow(0, 0, '#333333', i.Consts.ShadowBlur, !1, !0), this.nameText.view.setResolution((0, o.default)()), (0, p.UpdateVisibility)(this);
            }
        }
    }
    var x = y;
}), c.register('UdF/Z', function(b, o) {
    a(b.exports, 'PointerAsset', function() {
        return d;
    });
    const d = {
        imageId: 'radar_arrow',
        imageUrl: (0, c('JJQ0+').default)('devices/waypoint/arrow.png')
    };
}), c.register('K8wNY', function(b, o) {
    a(b.exports, 'Consts', function() {
        return f;
    }), a(b.exports, 'NAME_TEXT_STYLE', function() {
        return g;
    });
    var d = c('gSUVO'),
        e = c('Nr0Rz');
    const f = {
            NameTextFontSize: 20,
            DistTextFontSize: 16,
            PointerBaseScale: 0.25,
            PointerCircleRadius: 20,
            CharacterPreviewSize: 75,
            CharacterPreviewScale: 0.2,
            CharacterPreviewOriginX: 0.5,
            CharacterPreviewOriginY: 0.68,
            CharacterPreviewAndTextSpace: 30,
            PixelsPerMeter: 50,
            CarriedFlagShift: -100,
            IdleFlagShift: -65,
            CharacterShift: -25,
            SafeAreaTopMarginWithGUIDevices: 180,
            SafeAreaTopMarginWithoutGUIDevices: 110,
            SafeAreaExtraTopMarginWithScorebar: c('4Vx+C').SCOREBAR_HEIGHT,
            SafeAreaBottomMarginWithGUIDevices: 100,
            SafeAreaBottomMarginWithoutGUIDevices: 30,
            SafeAreaLeftRightMargin: 30,
            ShadowBlur: 5
        },
        g = {
            fontFamily: d.Fonts.ProductSans,
            fontSize: `${ e.default.fontWeight } ${ f.NameTextFontSize }px`
        };
}), c.register('7AE/l', function(o, p) {
    a(o.exports, 'GetTargetParams', function() {
        return m;
    });
    var d = c('PUlKf'),
        e = c('jF/b6'),
        f = c('EdRoV'),
        g = c('oGwma'),
        h = c('K8wNY'),
        i = c('Wi/YU'),
        j = c('V7owG'),
        k = c('ZcKkP'),
        l = c('kneek');
    const m = a => {
        let n = a.x,
            o = a.y;
        const p = (0, e.FetchCameraData)();
        if (a.options.target === i.WaypointTarget.player) {
            const q = (0, f.default)(a.state.characterId);
            if (!q)
                return;
            if (q.id === (0, d.default)())
                return;
            n = q.body.x, o = q.body.y + h.Consts.CharacterShift;
        } else if (a.options.target === i.WaypointTarget.flag) {
            const r = (0, j.FetchFlagOfColor)(a);
            if (!r)
                return;
            n = r.currentFlagX, o = r.currentFlagY + h.Consts.IdleFlagShift, r.state.currentState !== g.CurrentState.idle && (o = r.currentFlagY + h.Consts.CarriedFlagShift);
        } else if (a.options.target === i.WaypointTarget.ball) {
            var s;
            const t = (0, k.FetchBallOfId)(a);
            if (!t || !(null === (s = t.container) || void 0 === s ? void 0 : s.view))
                return;
            const u = {
                    x: t.container.view.x,
                    y: t.container.view.y
                },
                v = {
                    x: p.x,
                    y: p.y
                },
                w = r(l).Math.Angle.BetweenPoints(u, v),
                x = t.options.radius,
                y = {
                    x: u.x + x * Math.cos(w),
                    y: u.y + x * Math.sin(w)
                };
            n = y.x, o = y.y;
        }
        return {
            x: n,
            y: o,
            camData: p,
            angle: Math.atan2(o - p.y, n - p.x)
        };
    };
}), c.register('jF/b6', function(b, i) {
    a(b.exports, 'FetchCameraData', function() {
        return e;
    });
    var d = c('dAmf5');
    const e = () => {
        const f = (0, d.default)(),
            g = f.cameras.main.worldView.left,
            h = f.cameras.main.worldView.right,
            i = f.cameras.main.worldView.top,
            j = f.cameras.main.worldView.bottom;
        return {
            left: g,
            right: h,
            top: i,
            bottom: j,
            x: g + (h - g) / 2,
            y: i + (j - i) / 2,
            width: h - g,
            height: j - i
        };
    };
}), c.register('oGwma', function(b, c) {
    let d;
    var e;
    let f;
    var g;
    a(b.exports, 'CurrentState', function() {
        return f;
    }), (e = d || (d = {})).black = 'black', e.blue = 'blue', e.green = 'green', e.orange = 'orange', e.purple = 'purple', e.red = 'red', e.white = 'white', (g = f || (f = {})).idle = 'idle', g.carried = 'carried', g.dropped = 'dropped';
    f.idle;
}), c.register('Wi/YU', function(b, c) {
    let d;
    var e;
    a(b.exports, 'WaypointTarget', function() {
        return d;
    }), (e = d || (d = {})).deviceLocation = 'deviceLocation', e.player = 'player', e.flag = 'flag', e.ball = 'ball';
}), c.register('V7owG', function(b, j) {
    a(b.exports, 'FetchFlagOfColor', function() {
        return f;
    });
    var d = c('7X8h3'),
        e = c('dAmf5');
    const f = a => {
        if (void 0 === a.options.flagColor)
            return;
        const g = (0, e.default)().worldManager.devices.allDevices.find(g => g.deviceOption.id === d.default.flag && g.options.flagColor === a.options.flagColor && (void 0 === g.pointedByWaypointDeviceID || g.pointedByWaypointDeviceID === a.id));
        return g && (g.pointedByWaypointDeviceID = a.id), g;
    };
}), c.register('ZcKkP', function(b, j) {
    a(b.exports, 'FetchBallOfId', function() {
        return g;
    });
    var d = c('7X8h3'),
        e = c('dAmf5'),
        f = c('vUNls');
    const g = a => {
        if (void 0 === a.options.ballId)
            return;
        if (a.trackedBallDeviceId) {
            const h = (0, f.FetchDeviceById)(a.trackedBallDeviceId);
            if (h)
                return h;
        }
        const h = (0, e.default)().worldManager.devices.allDevices.find(h => h.deviceOption.id === d.default.ball && h.options.identifier === a.options.ballId);
        return h && (a.trackedBallDeviceId = h.id), h;
    };
}), c.register('Q/Htb', function(b, j) {
    a(b.exports, 'IsTargetWithinSafeArea', function() {
        return e;
    });
    var d = c('odwfr');
    const e = (a, b) => Phaser.Geom.Intersects.CircleToRectangle(new Phaser.Geom.Circle(b.x, b.y, 1), (0, d.GetSafeAreaRect)(a, b));
}), c.register('odwfr', function(b, j) {
    a(b.exports, 'GetSafeAreaRect', function() {
        return h;
    });
    var d = c('XbXlP'),
        e = c('7Sbqr'),
        f = c('DGOnf'),
        g = c('K8wNY');
    const h = (a, b) => {
        const i = a.scene.cameras.main.zoom / (0, d.default)(),
            j = e.default.gui.guiSlots.find(a => a.position === f.GUIPosition.topLeft || a.position === f.GUIPosition.topRight),
            k = e.default.gui.guiSlots.find(a => a.position === f.GUIPosition.bottomLeft || a.position === f.GUIPosition.bottomRight);
        let l = j ? g.Consts.SafeAreaTopMarginWithGUIDevices : g.Consts.SafeAreaTopMarginWithoutGUIDevices;
        e.default.gui.scorebar && (l += g.Consts.SafeAreaExtraTopMarginWithScorebar), l /= i;
        const m = (k ? g.Consts.SafeAreaBottomMarginWithGUIDevices : g.Consts.SafeAreaBottomMarginWithoutGUIDevices) / i,
            n = g.Consts.SafeAreaLeftRightMargin / i;
        return new Phaser.Geom.Rectangle(b.camData.left + n, b.camData.top + l, b.camData.width - 2 * n, b.camData.height - l - m);
    };
}), c.register('zN5Gz', function(b, h) {
    a(b.exports, 'UpdateWithTargetWithinView', function() {
        return g;
    });
    var d = c('XbXlP'),
        e = c('K8wNY'),
        f = c('Wi/YU');
    const g = (a, b, c) => {
        var h, i, j, k;
        let l = !(null === (h = a.pointer) || void 0 === h ? void 0 : h.view) || !(null === (i = a.nameText) || void 0 === i ? void 0 : i.view);
        var m, n;
        if (a.options.target === f.WaypointTarget.ball && (l = !0), l)
            return (null === (m = a.pointer) || void 0 === m ? void 0 : m.view) && (a.pointer.view.alpha = 0), void((null === (n = a.nameText) || void 0 === n ? void 0 : n.view) && (a.nameText.view.alpha = 0));
        const o = a.scene.cameras.main.zoom / (0, d.default)(),
            p = a.pointer.view.width * e.Consts.PointerBaseScale / o,
            q = a.nameText.view.width / o,
            r = -10 / o;
        c.x > c.camData.x ? (a.pointer.view.x = c.x - p / 2 - 25, a.pointer.view.y = c.y, a.pointer.view.angle = 0, a.nameText.view.x = c.x - p - q / 2 - 25 - r, a.nameText.view.y = c.y) : (a.pointer.view.x = c.x + p / 2 + 25, a.pointer.view.y = c.y, a.pointer.view.angle = 180, a.nameText.view.x = c.x + p + q / 2 + 25 + r, a.nameText.view.y = c.y), a.pointer.view.setScale(e.Consts.PointerBaseScale / o * 0.65), a.nameText.view.setText(`${ a.options.name }`), null === (j = a.icon) || void 0 === j || null === (k = j.view) || void 0 === k || k.setAlpha(0);
    };
}), c.register('RDVcQ', function(b, k) {
    a(b.exports, 'UpdateWithTargetOutsideView', function() {
        return j;
    });
    var d = c('XbXlP'),
        e = c('7Sbqr'),
        f = c('K8wNY'),
        g = c('odwfr'),
        h = c('Wi/YU'),
        i = c('ESa1+');
    const j = (a, b, c) => {
        var k, l;
        const m = a.scene.cameras.main.zoom / (0, d.default)(),
            n = 999999999,
            o = c.camData.x + Math.cos(c.angle) * n,
            p = c.camData.y + Math.sin(c.angle) * n,
            q = Phaser.Geom.Intersects.GetLineToRectangle(new Phaser.Geom.Line(c.camData.x, c.camData.y, o, p), (0, g.GetSafeAreaRect)(a, c));
        var r;
        if (!q[0])
            return void((null === (r = a.pointer) || void 0 === r ? void 0 : r.view) && (a.pointer.view.alpha = 0));
        const s = q[0].x,
            t = q[0].y;
        if ((null === (k = a.pointer) || void 0 === k ? void 0 : k.view) && (a.pointer.view.x = s, a.pointer.view.y = t, a.pointer.view.alpha = 1, a.pointer.view.rotation = c.angle, a.pointer.view.setScale(f.Consts.PointerBaseScale / m)), !(null === (l = a.nameText) || void 0 === l ? void 0 : l.view))
            return;
        const u = a.options.target === h.WaypointTarget.player;
        u && (0, i.UpdateCharacterPreview)(a), a.nameText.view.setScale(1 / m);
        const v = a.nameText.view.getBounds(),
            w = v.width,
            x = v.height,
            y = u ? f.Consts.CharacterPreviewSize : w,
            z = u ? f.Consts.CharacterPreviewSize : x,
            A = f.Consts.PointerCircleRadius / m;
        let B = Phaser.Math.Distance.Between(s, t, c.camData.x, c.camData.y) - A,
            C = c.camData.x + Math.cos(c.angle) * B,
            D = c.camData.y + Math.sin(c.angle) * B,
            E = !0;
        for (; E;) {
            B -= 1 / m, C = c.camData.x + Math.cos(c.angle) * B, D = c.camData.y + Math.sin(c.angle) * B;
            const F = new Phaser.Geom.Circle(s, t, A),
                G = new Phaser.Geom.Rectangle(C - y / 2, D - z / 2, y, z);
            E = Phaser.Geom.Intersects.CircleToRectangle(F, G);
        }
        if (F.nameText.view.x = C, F.nameText.view.y = D, u) {
            var H;
            (null === (H = F.icon) || void 0 === H ? void 0 : H.view) && (F.icon.view.setOrigin(f.Consts.CharacterPreviewOriginX, f.Consts.CharacterPreviewOriginY), F.icon.view.x = C, F.icon.view.y = D, F.icon.view.setScale(f.Consts.CharacterPreviewScale / m), F.icon.view.setAlpha(1));
            const I = w / 2 + f.Consts.CharacterPreviewAndTextSpace;
            F.nameText.view.x = C + I, c.camData.x < C && (F.nameText.view.x = C - I);
        }
        const F = e.default.phaser.mainCharacter;
        if (!F)
            return;
        const G = Phaser.Math.Distance.Between(F.body.x, F.body.y, c.x, c.y),
            H = f.Consts.PixelsPerMeter,
            I = Math.round(G / H);
        a.nameText.view.setText(`${ a.options.name } (${ I }m)`);
    };
}), c.register('ESa1+', function(b, i) {
    a(b.exports, 'UpdateCharacterPreview', function() {
        return f;
    });
    var d = c('EdRoV'),
        e = c('JJQ0+');
    const f = a => {
        var g;
        const h = (0, d.default)(a.state.characterId);
        var i;
        if (!h)
            return void(null === (i = a.icon) || void 0 === i || i.destroy());
        const j = h.skin.skinId.replace('character_', '');
        if (!j)
            return;
        const k = (0, e.default)(`characters/spine/normalized_preview/${ j }.png`);
        (null === (g = a.icon) || void 0 === g ? void 0 : g.options.imageUrl) !== k && a.parts.add.sprite({
            imageId: k,
            imageUrl: k,
            onReady: g => {
                const l = (0, d.default)(a.state.characterId);
                if (!l && l !== h)
                    return;
                const m = l.skin.skinId.replace('character_', '');
                (m || m === j) && (a.icon && a.icon.destroy(), a.icon = g);
            }
        });
    };
}), c.register('tvpal', function(b, l) {
    a(b.exports, 'UpdateVisibility', function() {
        return i;
    });
    var d = c('PUlKf'),
        e = c('5Ux1a'),
        f = c('Wi/YU'),
        g = c('V7owG'),
        h = c('ZcKkP');
    const i = a => {
        var j, k;
        let l = 1;
        if ((0, e.InPreGamePhase)() && (l = 0), a.state.active || (l = 0), a.options.target !== f.WaypointTarget.player || a.state.characterId || (l = 0), a.options.target === f.WaypointTarget.player && a.state.characterId === (0, d.default)() && (l = 0), a.options.target === f.WaypointTarget.flag) {
            const m = (0, g.FetchFlagOfColor)(a);
            m ? (m.state.characterId === (0, d.default)() || m.lastCharacterIdToHoldFlag === (0, d.default)() && m.goingBackToBase || a.options.hideWhenFlagIsInBase && m.isInBase()) && (l = 0) : l = 0;
        } else if (a.options.target === f.WaypointTarget.ball) {
            const n = (0, h.FetchBallOfId)(a);
            n && n.state.active || (l = 0);
        }
        return (null === (j = a.pointer) || void 0 === j ? void 0 : j.view) && (a.pointer.view.alpha = l), (null === (k = a.nameText) || void 0 === k ? void 0 : k.view) && (a.nameText.view.alpha = l), l;
    };
}), c.register('MyIwn', function(b, j) {
    a(b.exports, 'default', function() {
        return h;
    });
    var d = c('7Sbqr'),
        e = c('K8wNY'),
        f = c('Wi/YU'),
        g = c('vRv6c');
    var h = (a, b) => {
        if (!a.options.useDeactivateWithinRange || a.options.target !== f.WaypointTarget.deviceLocation)
            return;
        if (!a.state.active)
            return;
        const i = d.default.phaser.mainCharacter;
        if (!i)
            return;
        const j = Phaser.Math.Distance.Between(i.body.x, i.body.y, b.x, b.y),
            k = e.Consts.PixelsPerMeter;
        Math.round(j / k) < a.options.deactivateWithinRange && a.sendToServerDevice(g.Messages.deactivateWithinRange);
    };
}), c.register('vRv6c', function(b, c) {
    let d;
    a(b.exports, 'Messages', function() {
        return d;
    }), (d || (d = {})).deactivateWithinRange = 'deactivateWithinRange';
}), c.register('CCzCV', function(b, i) {
    a(b.exports, 'ReleasePointedFlagDevice', function() {
        return f;
    });
    var d = c('dAmf5'),
        e = c('7X8h3');
    const f = a => {
        if (void 0 === a.options.flagColor)
            return;
        const g = (0, d.default)().worldManager.devices.allDevices.find(g => g.deviceOption.id === e.default.flag && g.options.flagColor === a.options.flagColor && g.pointedByWaypointDeviceID === a.id);
        g && (g.pointedByWaypointDeviceID = void 0);
    };
});