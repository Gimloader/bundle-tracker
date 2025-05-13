function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}

function b(c) {
    return c && c.__esModule ? c.default : c;
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('.....', function(d, e) {
    var f;
    f = d.exports, Object.defineProperty(f, '__esModule', {
        value: !0,
        configurable: !0
    }), a(d.exports, 'default', function() {
        return _z;
    });
    var g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....'),
        m = c('.....'),
        n = c('.....'),
        o = c('.....'),
        p = c('.....'),
        q = c('.....'),
        r = c('.....'),
        s = c('.....'),
        t = c('.....'),
        u = c('.....'),
        v = c('.....'),
        w = c('.....'),
        x = c('.....');
    class y extends h.default {
        constructor(z) {
            if (super(z), (0, g.default)(this, 'onUpdate', A => {
                    if (!(0, r.UpdateVisibility)(this))
                        return;
                    const B = (0, l.GetTargetParams)(this);
                    if (!B)
                        return;
                    (0, m.IsTargetWithinSafeArea)(this, B) ? (0, n.UpdateWithTargetWithinView)(this, A, B) : (0, o.UpdateWithTargetOutsideView)(this, A, B), (0, w.default)(this, B);
                }), (0, g.default)(this, 'onDestroy', A => {
                    (0, x.ReleasePointedFlagDevice)(this);
                }), (0, j.InPreGamePhase)() && (0, s.isSavedVersion)()) {
                const A = v.default.Overlay;
                new(0, t.default)({
                    device: this,
                    baseColor: A.baseColor,
                    boxColor: A.boxColor,
                    content: {
                        icon: {
                            image: (0, u.default)('devices/waypoint/icon.png'),
                            scale: 0.9
                        }
                    }
                });
            }
            if ((0, j.InGamePhase)()) {
                this.cull.ignoreCulling();
                const B = Phaser.Display.Color.HexStringToColor(this.options.color).color;
                this.pointer = this.parts.add.sprite({
                    ...i.PointerAsset,
                    layerId: p.default.InGameUIElements,
                    onReady: C => {
                        C.view.setTint(B), (0, r.UpdateVisibility)(this);
                    }
                }), this.nameText = this.parts.add.text({
                    text: this.options.name,
                    layerId: p.default.InGameUIElements,
                    textStyle: {
                        ...k.NAME_TEXT_STYLE,
                        color: this.options.color
                    }
                }), this.nameText.view.setPadding(5 * (0, q.default)()), this.nameText.view.setShadow(0, 0, '#333333', k.Consts.ShadowBlur, !1, !0), this.nameText.view.setResolution((0, q.default)()), (0, r.UpdateVisibility)(this);
            }
        }
    }
    var _z = y;
}), c.register('.....', function(d, e) {
    a(d.exports, 'PointerAsset', function() {
        return _f;
    });
    const _f = {
        imageId: 'radar_arrow',
        imageUrl: (0, c('.....').default)('devices/waypoint/arrow.png')
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'Consts', function() {
        return _h;
    }), a(d.exports, 'NAME_TEXT_STYLE', function() {
        return _i;
    });
    var f = c('.....'),
        g = c('.....');
    const _h = {
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
            SafeAreaExtraTopMarginWithScorebar: c('.....').SCOREBAR_HEIGHT,
            SafeAreaBottomMarginWithGUIDevices: 100,
            SafeAreaBottomMarginWithoutGUIDevices: 30,
            SafeAreaLeftRightMargin: 30,
            ShadowBlur: 5
        },
        _i = {
            fontFamily: f.Fonts.ProductSans,
            fontSize: `${ g.default.fontWeight } ${ _h.NameTextFontSize }px`
        };
}), c.register('.....', function(d, e) {
    a(d.exports, 'GetTargetParams', function() {
        return _o;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....'),
        m = c('.....'),
        n = c('.....');
    const _o = p => {
        let q = p.x,
            r = p.y;
        const s = (0, g.FetchCameraData)();
        if (p.options.target === k.WaypointTarget.player) {
            const t = (0, h.default)(p.state.characterId);
            if (!t)
                return;
            if (t.id === (0, f.default)())
                return;
            q = t.body.x, r = t.body.y + j.Consts.CharacterShift;
        } else if (p.options.target === k.WaypointTarget.flag) {
            const u = (0, l.FetchFlagOfColor)(p);
            if (!u)
                return;
            q = u.currentFlagX, r = u.currentFlagY + j.Consts.IdleFlagShift, u.state.currentState !== i.CurrentState.idle && (r = u.currentFlagY + j.Consts.CarriedFlagShift);
        } else if (p.options.target === k.WaypointTarget.ball) {
            var v;
            const w = (0, m.FetchBallOfId)(p);
            if (!w || !(null === (v = w.container) || void 0 === v ? void 0 : v.view))
                return;
            const x = {
                    x: w.container.view.x,
                    y: w.container.view.y
                },
                y = {
                    x: s.x,
                    y: s.y
                },
                z = u(n).Math.Angle.BetweenPoints(x, y),
                A = w.options.radius,
                B = {
                    x: x.x + A * Math.cos(z),
                    y: x.y + A * Math.sin(z)
                };
            q = B.x, r = B.y;
        }
        return {
            x: q,
            y: r,
            camData: s,
            angle: Math.atan2(r - s.y, q - s.x)
        };
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'FetchCameraData', function() {
        return _g;
    });
    var f = c('.....');
    const _g = () => {
        const h = (0, f.default)(),
            i = h.cameras.main.worldView.left,
            j = h.cameras.main.worldView.right,
            k = h.cameras.main.worldView.top,
            l = h.cameras.main.worldView.bottom;
        return {
            left: i,
            right: j,
            top: k,
            bottom: l,
            x: i + (j - i) / 2,
            y: k + (l - k) / 2,
            width: j - i,
            height: l - k
        };
    };
}), c.register('.....', function(d, e) {
    let f;
    var g;
    let h;
    var i;
    a(d.exports, 'CurrentState', function() {
        return h;
    }), (g = f || (f = {})).black = 'black', g.blue = 'blue', g.green = 'green', g.orange = 'orange', g.purple = 'purple', g.red = 'red', g.white = 'white', (i = h || (h = {})).idle = 'idle', i.carried = 'carried', i.dropped = 'dropped';
    h.idle;
}), c.register('.....', function(d, e) {
    let f;
    var g;
    a(d.exports, 'WaypointTarget', function() {
        return f;
    }), (g = f || (f = {})).deviceLocation = 'deviceLocation', g.player = 'player', g.flag = 'flag', g.ball = 'ball';
}), c.register('.....', function(d, e) {
    a(d.exports, 'FetchFlagOfColor', function() {
        return _h;
    });
    var f = c('.....'),
        g = c('.....');
    const _h = i => {
        if (void 0 === i.options.flagColor)
            return;
        const j = (0, g.default)().worldManager.devices.allDevices.find(k => k.deviceOption.id === f.default.flag && k.options.flagColor === i.options.flagColor && (void 0 === k.pointedByWaypointDeviceID || k.pointedByWaypointDeviceID === i.id));
        return j && (j.pointedByWaypointDeviceID = i.id), j;
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'FetchBallOfId', function() {
        return _i;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....');
    const _i = j => {
        if (void 0 === j.options.ballId)
            return;
        if (j.trackedBallDeviceId) {
            const k = (0, h.FetchDeviceById)(j.trackedBallDeviceId);
            if (k)
                return k;
        }
        const l = (0, g.default)().worldManager.devices.allDevices.find(m => m.deviceOption.id === f.default.ball && m.options.identifier === j.options.ballId);
        return l && (j.trackedBallDeviceId = l.id), l;
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'IsTargetWithinSafeArea', function() {
        return _g;
    });
    var f = c('.....');
    const _g = (h, i) => Phaser.Geom.Intersects.CircleToRectangle(new Phaser.Geom.Circle(i.x, i.y, 1), (0, f.GetSafeAreaRect)(h, i));
}), c.register('.....', function(d, e) {
    a(d.exports, 'GetSafeAreaRect', function() {
        return _j;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....');
    const _j = (k, l) => {
        const m = k.scene.cameras.main.zoom / (0, f.default)(),
            n = g.default.gui.guiSlots.find(o => o.position === h.GUIPosition.topLeft || o.position === h.GUIPosition.topRight),
            o = g.default.gui.guiSlots.find(p => p.position === h.GUIPosition.bottomLeft || p.position === h.GUIPosition.bottomRight);
        let p = n ? i.Consts.SafeAreaTopMarginWithGUIDevices : i.Consts.SafeAreaTopMarginWithoutGUIDevices;
        g.default.gui.scorebar && (p += i.Consts.SafeAreaExtraTopMarginWithScorebar), p /= m;
        const q = (o ? i.Consts.SafeAreaBottomMarginWithGUIDevices : i.Consts.SafeAreaBottomMarginWithoutGUIDevices) / m,
            r = i.Consts.SafeAreaLeftRightMargin / m;
        return new Phaser.Geom.Rectangle(l.camData.left + r, l.camData.top + p, l.camData.width - 2 * r, l.camData.height - p - q);
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'UpdateWithTargetWithinView', function() {
        return _i;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....');
    const _i = (j, k, l) => {
        var m, n, o, p;
        let q = !(null === (m = j.pointer) || void 0 === m ? void 0 : m.view) || !(null === (n = j.nameText) || void 0 === n ? void 0 : n.view);
        var r, s;
        if (j.options.target === h.WaypointTarget.ball && (q = !0), q)
            return (null === (r = j.pointer) || void 0 === r ? void 0 : r.view) && (j.pointer.view.alpha = 0), void((null === (s = j.nameText) || void 0 === s ? void 0 : s.view) && (j.nameText.view.alpha = 0));
        const t = j.scene.cameras.main.zoom / (0, f.default)(),
            u = j.pointer.view.width * g.Consts.PointerBaseScale / t,
            v = j.nameText.view.width / t,
            w = -10 / t;
        l.x > l.camData.x ? (j.pointer.view.x = l.x - u / 2 - 25, j.pointer.view.y = l.y, j.pointer.view.angle = 0, j.nameText.view.x = l.x - u - v / 2 - 25 - w, j.nameText.view.y = l.y) : (j.pointer.view.x = l.x + u / 2 + 25, j.pointer.view.y = l.y, j.pointer.view.angle = 180, j.nameText.view.x = l.x + u + v / 2 + 25 + w, j.nameText.view.y = l.y), j.pointer.view.setScale(g.Consts.PointerBaseScale / t * 0.65), j.nameText.view.setText(`${ j.options.name }`), null === (o = j.icon) || void 0 === o || null === (p = o.view) || void 0 === p || p.setAlpha(0);
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'UpdateWithTargetOutsideView', function() {
        return _l;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....');
    const _l = (m, n, o) => {
        var p, q;
        const r = m.scene.cameras.main.zoom / (0, f.default)(),
            s = 999999999,
            t = o.camData.x + Math.cos(o.angle) * s,
            u = o.camData.y + Math.sin(o.angle) * s,
            v = Phaser.Geom.Intersects.GetLineToRectangle(new Phaser.Geom.Line(o.camData.x, o.camData.y, t, u), (0, i.GetSafeAreaRect)(m, o));
        var w;
        if (!v[0])
            return void((null === (w = m.pointer) || void 0 === w ? void 0 : w.view) && (m.pointer.view.alpha = 0));
        const x = v[0].x,
            y = v[0].y;
        if ((null === (p = m.pointer) || void 0 === p ? void 0 : p.view) && (m.pointer.view.x = x, m.pointer.view.y = y, m.pointer.view.alpha = 1, m.pointer.view.rotation = o.angle, m.pointer.view.setScale(h.Consts.PointerBaseScale / r)), !(null === (q = m.nameText) || void 0 === q ? void 0 : q.view))
            return;
        const z = m.options.target === j.WaypointTarget.player;
        z && (0, k.UpdateCharacterPreview)(m), m.nameText.view.setScale(1 / r);
        const A = m.nameText.view.getBounds(),
            B = A.width,
            C = A.height,
            D = z ? h.Consts.CharacterPreviewSize : B,
            E = z ? h.Consts.CharacterPreviewSize : C,
            F = h.Consts.PointerCircleRadius / r;
        let G = Phaser.Math.Distance.Between(x, y, o.camData.x, o.camData.y) - F,
            H = o.camData.x + Math.cos(o.angle) * G,
            I = o.camData.y + Math.sin(o.angle) * G,
            J = !0;
        for (; J;) {
            G -= 1 / r, H = o.camData.x + Math.cos(o.angle) * G, I = o.camData.y + Math.sin(o.angle) * G;
            const K = new Phaser.Geom.Circle(x, y, F),
                L = new Phaser.Geom.Rectangle(H - D / 2, I - E / 2, D, E);
            J = Phaser.Geom.Intersects.CircleToRectangle(K, L);
        }
        if (K.nameText.view.x = H, K.nameText.view.y = I, z) {
            var M;
            (null === (M = K.icon) || void 0 === M ? void 0 : M.view) && (K.icon.view.setOrigin(h.Consts.CharacterPreviewOriginX, h.Consts.CharacterPreviewOriginY), K.icon.view.x = H, K.icon.view.y = I, K.icon.view.setScale(h.Consts.CharacterPreviewScale / r), K.icon.view.setAlpha(1));
            const N = B / 2 + h.Consts.CharacterPreviewAndTextSpace;
            K.nameText.view.x = H + N, o.camData.x < H && (K.nameText.view.x = H - N);
        }
        const O = g.default.phaser.mainCharacter;
        if (!O)
            return;
        const P = Phaser.Math.Distance.Between(O.body.x, O.body.y, o.x, o.y),
            Q = h.Consts.PixelsPerMeter,
            R = Math.round(P / Q);
        K.nameText.view.setText(`${ K.options.name } (${ R }m)`);
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'UpdateCharacterPreview', function() {
        return _i;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....');
    const _i = j => {
        var k;
        const l = (0, f.default)(j.state.characterId);
        var m;
        if (!l)
            return void(null === (m = j.icon) || void 0 === m || m.destroy());
        const n = l.skin.skinId.replace('character_', '');
        if (!n)
            return;
        const o = (0, g.default)(`characters/spine/normalized_preview/${ n }.png`);
        (null === (k = j.icon) || void 0 === k ? void 0 : k.options.imageUrl) !== o && j.parts.add.sprite({
            imageId: o,
            imageUrl: o,
            layerId: h.default.InGameUIElements,
            onReady: p => {
                const q = (0, f.default)(j.state.characterId);
                if (!q && q !== l)
                    return;
                const r = q.skin.skinId.replace('character_', '');
                (r || r === n) && (j.icon && j.icon.destroy(), j.icon = p);
            }
        });
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'UpdateVisibility', function() {
        return _k;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....');
    const _k = l => {
        var m, n, o;
        let p = 1;
        if ((0, g.InPreGamePhase)() && (p = 0), l.state.active || (p = 0), l.options.target !== h.WaypointTarget.player || l.state.characterId || (p = 0), l.options.target === h.WaypointTarget.player && l.state.characterId === (0, f.default)() && (p = 0), l.options.target === h.WaypointTarget.flag) {
            const q = (0, i.FetchFlagOfColor)(l);
            q ? (q.state.characterId === (0, f.default)() || q.lastCharacterIdToHoldFlag === (0, f.default)() && q.goingBackToBase || l.options.hideWhenFlagIsInBase && q.isInBase()) && (p = 0) : p = 0;
        } else if (l.options.target === h.WaypointTarget.ball) {
            const r = (0, j.FetchBallOfId)(l);
            r && r.state.active || (p = 0);
        }
        return (null === (r = l.pointer) || void 0 === r ? void 0 : r.view) && (l.pointer.view.alpha = p), (null === (n = l.nameText) || void 0 === n ? void 0 : n.view) && (l.nameText.view.alpha = p), (null === (o = l.icon) || void 0 === o ? void 0 : o.view) && (l.icon.view.alpha = p), p;
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _j;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....');
    var _j = (k, l) => {
        if (!k.options.useDeactivateWithinRange || k.options.target !== h.WaypointTarget.deviceLocation)
            return;
        if (!k.state.active)
            return;
        const m = f.default.phaser.mainCharacter;
        if (!m)
            return;
        const n = Phaser.Math.Distance.Between(m.body.x, m.body.y, l.x, l.y),
            o = g.Consts.PixelsPerMeter;
        Math.round(n / o) < k.options.deactivateWithinRange && k.sendToServerDevice(i.Messages.deactivateWithinRange);
    };
}), c.register('.....', function(d, e) {
    let f;
    a(d.exports, 'Messages', function() {
        return f;
    }), (f || (f = {})).deactivateWithinRange = 'deactivateWithinRange';
}), c.register('.....', function(d, e) {
    a(d.exports, 'ReleasePointedFlagDevice', function() {
        return _h;
    });
    var f = c('.....'),
        g = c('.....');
    const _h = i => {
        if (void 0 === i.options.flagColor)
            return;
        const j = (0, f.default)().worldManager.devices.allDevices.find(k => k.deviceOption.id === g.default.flag && k.options.flagColor === i.options.flagColor && k.pointedByWaypointDeviceID === i.id);
        j && (j.pointedByWaypointDeviceID = void 0);
    };
});