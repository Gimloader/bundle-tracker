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
c.register('A712S', function(d, e) {
    var f;
    f = d.exports, Object.defineProperty(f, '__esModule', {
        value: !0,
        configurable: !0
    }), a(d.exports, 'default', function() {
        return _z;
    });
    var g = c('s/YA9'),
        h = c('ltxDW'),
        i = c('5h8YL'),
        j = c('UkCpC'),
        k = c('9bPKW'),
        l = c('O3yHy'),
        m = c('6OLAn'),
        n = c('XuuCF'),
        o = c('pOINP'),
        p = c('GIe9o'),
        q = c('wpe/2'),
        r = c('KzFw0'),
        s = c('hycyg'),
        t = c('73Aki'),
        u = c('UaUBz0'),
        v = c('AHhkR'),
        w = c('k1XXZ'),
        x = c('kN4Z6');
    class y extends h.default {
        constructor(z) {
            if (super(z), (0, g.default)(this, 'onUpdate', z => {
                    if (!(0, r.UpdateVisibility)(this))
                        return;
                    const A = (0, l.GetTargetParams)(this);
                    if (!A)
                        return;
                    (0, m.IsTargetWithinSafeArea)(this, A) ? (0, n.UpdateWithTargetWithinView)(this, z, A) : (0, o.UpdateWithTargetOutsideView)(this, z, A), (0, w.default)(this, A);
                }), (0, g.default)(this, 'onDestroy', z => {
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
                const A = Phaser.Display.Color.HexStringToColor(this.options.color).color;
                this.pointer = this.parts.add.sprite({
                    ...i.PointerAsset,
                    layerId: p.default.InGameUIElements,
                    onReady: d => {
                        d.view.setTint(A), (0, r.UpdateVisibility)(this);
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
}), c.register('5h8YL', function(d, e) {
    a(d.exports, 'PointerAsset', function() {
        return _f;
    });
    const _f = {
        imageId: 'radar_arrow',
        imageUrl: (0, c('UaUBz0').default)('devices/waypoint/arrow.png')
    };
}), c.register('9bPKW', function(d, e) {
    a(d.exports, 'Consts', function() {
        return _h;
    }), a(d.exports, 'NAME_TEXT_STYLE', function() {
        return _i;
    });
    var f = c('Eh2Wh'),
        g = c('5cIEW');
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
            SafeAreaExtraTopMarginWithScorebar: c('FI1tM').SCOREBAR_HEIGHT,
            SafeAreaBottomMarginWithGUIDevices: 100,
            SafeAreaBottomMarginWithoutGUIDevices: 30,
            SafeAreaLeftRightMargin: 30,
            ShadowBlur: 5
        },
        _i = {
            fontFamily: f.Fonts.ProductSans,
            fontSize: `${ g.default.fontWeight } ${ _h.NameTextFontSize }px`
        };
}), c.register('O3yHy', function(d, e) {
    a(d.exports, 'GetTargetParams', function() {
        return _o;
    });
    var f = c('5Fjxs'),
        g = c('SCxga'),
        h = c('d7UqH'),
        i = c('av19s'),
        j = c('9bPKW'),
        k = c('g1kXX'),
        l = c('W2kIJ'),
        m = c('7zgOC'),
        n = c('ddhGF');
    const _o = a => {
        let p = a.x,
            q = a.y;
        const r = (0, g.FetchCameraData)();
        if (a.options.target === k.WaypointTarget.player) {
            const s = (0, h.default)(a.state.characterId);
            if (!s)
                return;
            if (s.id === (0, f.default)())
                return;
            p = s.body.x, q = s.body.y + j.Consts.CharacterShift;
        } else if (a.options.target === k.WaypointTarget.flag) {
            const s = (0, l.FetchFlagOfColor)(a);
            if (!s)
                return;
            p = s.currentFlagX, q = s.currentFlagY + j.Consts.IdleFlagShift, s.state.currentState !== i.CurrentState.idle && (q = s.currentFlagY + j.Consts.CarriedFlagShift);
        } else if (a.options.target === k.WaypointTarget.ball) {
            var s;
            const t = (0, m.FetchBallOfId)(a);
            if (!t || !(null === (s = t.container) || void 0 === s ? void 0 : s.view))
                return;
            const u = {
                    x: t.container.view.x,
                    y: t.container.view.y
                },
                v = {
                    x: r.x,
                    y: r.y
                },
                w = b(n).Math.Angle.BetweenPoints(u, v),
                x = t.options.radius,
                y = {
                    x: u.x + x * Math.cos(w),
                    y: u.y + x * Math.sin(w)
                };
            p = y.x, q = y.y;
        }
        return {
            x: p,
            y: q,
            camData: r,
            angle: Math.atan2(q - r.y, p - r.x)
        };
    };
}), c.register('SCxga', function(d, e) {
    a(d.exports, 'FetchCameraData', function() {
        return _g;
    });
    var f = c('heTaO');
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
}), c.register('av19s', function(d, e) {
    let f;
    var g;
    let h;
    var i;
    a(d.exports, 'CurrentState', function() {
        return h;
    }), (g = f || (f = {})).black = 'black', g.blue = 'blue', g.green = 'green', g.orange = 'orange', g.purple = 'purple', g.red = 'red', g.white = 'white', (i = h || (h = {})).idle = 'idle', i.carried = 'carried', i.dropped = 'dropped';
    h.idle;
}), c.register('g1kXX', function(d, e) {
    let f;
    var g;
    a(d.exports, 'WaypointTarget', function() {
        return f;
    }), (g = f || (f = {})).deviceLocation = 'deviceLocation', g.player = 'player', g.flag = 'flag', g.ball = 'ball';
}), c.register('W2kIJ', function(d, e) {
    a(d.exports, 'FetchFlagOfColor', function() {
        return _h;
    });
    var f = c('OFuf70'),
        g = c('heTaO');
    const _h = a => {
        if (void 0 === a.options.flagColor)
            return;
        const i = (0, g.default)().worldManager.devices.allDevices.find(i => i.deviceOption.id === f.default.flag && i.options.flagColor === a.options.flagColor && (void 0 === i.pointedByWaypointDeviceID || i.pointedByWaypointDeviceID === a.id));
        return i && (i.pointedByWaypointDeviceID = a.id), i;
    };
}), c.register('7zgOC', function(d, e) {
    a(d.exports, 'FetchBallOfId', function() {
        return _i;
    });
    var f = c('OFuf70'),
        g = c('heTaO'),
        h = c('K2TwF');
    const _i = a => {
        if (void 0 === a.options.ballId)
            return;
        if (a.trackedBallDeviceId) {
            const j = (0, h.FetchDeviceById)(a.trackedBallDeviceId);
            if (j)
                return j;
        }
        const j = (0, g.default)().worldManager.devices.allDevices.find(j => j.deviceOption.id === f.default.ball && j.options.identifier === a.options.ballId);
        return j && (a.trackedBallDeviceId = j.id), j;
    };
}), c.register('6OLAn', function(d, e) {
    a(d.exports, 'IsTargetWithinSafeArea', function() {
        return _g;
    });
    var f = c('izzMq');
    const _g = (a, d) => Phaser.Geom.Intersects.CircleToRectangle(new Phaser.Geom.Circle(d.x, d.y, 1), (0, f.GetSafeAreaRect)(a, d));
}), c.register('izzMq', function(d, e) {
    a(d.exports, 'GetSafeAreaRect', function() {
        return _j;
    });
    var f = c('wpe/2'),
        g = c('fI6of'),
        h = c('VPVJC'),
        i = c('9bPKW');
    const _j = (a, d) => {
        const k = a.scene.cameras.main.zoom / (0, f.default)(),
            l = g.default.gui.guiSlots.find(a => a.position === h.GUIPosition.topLeft || a.position === h.GUIPosition.topRight),
            m = g.default.gui.guiSlots.find(a => a.position === h.GUIPosition.bottomLeft || a.position === h.GUIPosition.bottomRight);
        let n = l ? i.Consts.SafeAreaTopMarginWithGUIDevices : i.Consts.SafeAreaTopMarginWithoutGUIDevices;
        g.default.gui.scorebar && (n += i.Consts.SafeAreaExtraTopMarginWithScorebar), n /= k;
        const o = (m ? i.Consts.SafeAreaBottomMarginWithGUIDevices : i.Consts.SafeAreaBottomMarginWithoutGUIDevices) / k,
            p = i.Consts.SafeAreaLeftRightMargin / k;
        return new Phaser.Geom.Rectangle(d.camData.left + p, d.camData.top + n, d.camData.width - 2 * p, d.camData.height - n - o);
    };
}), c.register('XuuCF', function(d, e) {
    a(d.exports, 'UpdateWithTargetWithinView', function() {
        return _i;
    });
    var f = c('wpe/2'),
        g = c('9bPKW'),
        h = c('g1kXX');
    const _i = (a, d, c) => {
        var j, k, l, m;
        let n = !(null === (j = a.pointer) || void 0 === j ? void 0 : j.view) || !(null === (k = a.nameText) || void 0 === k ? void 0 : k.view);
        var o, p;
        if (a.options.target === h.WaypointTarget.ball && (n = !0), n)
            return (null === (o = a.pointer) || void 0 === o ? void 0 : o.view) && (a.pointer.view.alpha = 0), void((null === (p = a.nameText) || void 0 === p ? void 0 : p.view) && (a.nameText.view.alpha = 0));
        const q = a.scene.cameras.main.zoom / (0, f.default)(),
            r = a.pointer.view.width * g.Consts.PointerBaseScale / q,
            s = a.nameText.view.width / q,
            t = -10 / q;
        c.x > c.camData.x ? (a.pointer.view.x = c.x - r / 2 - 25, a.pointer.view.y = c.y, a.pointer.view.angle = 0, a.nameText.view.x = c.x - r - s / 2 - 25 - t, a.nameText.view.y = c.y) : (a.pointer.view.x = c.x + r / 2 + 25, a.pointer.view.y = c.y, a.pointer.view.angle = 180, a.nameText.view.x = c.x + r + s / 2 + 25 + t, a.nameText.view.y = c.y), a.pointer.view.setScale(g.Consts.PointerBaseScale / q * 0.65), a.nameText.view.setText(`${ a.options.name }`), null === (l = a.icon) || void 0 === l || null === (m = l.view) || void 0 === m || m.setAlpha(0);
    };
}), c.register('pOINP', function(d, e) {
    a(d.exports, 'UpdateWithTargetOutsideView', function() {
        return _l;
    });
    var f = c('wpe/2'),
        g = c('fI6of'),
        h = c('9bPKW'),
        i = c('izzMq'),
        j = c('g1kXX'),
        k = c('z/6MV');
    const _l = (a, d, c) => {
        var m, n;
        const o = a.scene.cameras.main.zoom / (0, f.default)(),
            p = 999999999,
            q = c.camData.x + Math.cos(c.angle) * p,
            r = c.camData.y + Math.sin(c.angle) * p,
            s = Phaser.Geom.Intersects.GetLineToRectangle(new Phaser.Geom.Line(c.camData.x, c.camData.y, q, r), (0, i.GetSafeAreaRect)(a, c));
        var t;
        if (!s[0])
            return void((null === (t = a.pointer) || void 0 === t ? void 0 : t.view) && (a.pointer.view.alpha = 0));
        const u = s[0].x,
            v = s[0].y;
        if ((null === (m = a.pointer) || void 0 === m ? void 0 : m.view) && (a.pointer.view.x = u, a.pointer.view.y = v, a.pointer.view.alpha = 1, a.pointer.view.rotation = c.angle, a.pointer.view.setScale(h.Consts.PointerBaseScale / o)), !(null === (n = a.nameText) || void 0 === n ? void 0 : n.view))
            return;
        const w = a.options.target === j.WaypointTarget.player;
        w && (0, k.UpdateCharacterPreview)(a), a.nameText.view.setScale(1 / o);
        const x = a.nameText.view.getBounds(),
            y = x.width,
            z = x.height,
            A = w ? h.Consts.CharacterPreviewSize : y,
            B = w ? h.Consts.CharacterPreviewSize : z,
            C = h.Consts.PointerCircleRadius / o;
        let D = Phaser.Math.Distance.Between(u, v, c.camData.x, c.camData.y) - C,
            E = c.camData.x + Math.cos(c.angle) * D,
            F = c.camData.y + Math.sin(c.angle) * D,
            G = !0;
        for (; G;) {
            D -= 1 / o, E = c.camData.x + Math.cos(c.angle) * D, F = c.camData.y + Math.sin(c.angle) * D;
            const H = new Phaser.Geom.Circle(u, v, C),
                I = new Phaser.Geom.Rectangle(E - A / 2, F - B / 2, A, B);
            G = Phaser.Geom.Intersects.CircleToRectangle(H, I);
        }
        if (a.nameText.view.x = E, a.nameText.view.y = F, w) {
            var H;
            (null === (H = a.icon) || void 0 === H ? void 0 : H.view) && (a.icon.view.setOrigin(h.Consts.CharacterPreviewOriginX, h.Consts.CharacterPreviewOriginY), a.icon.view.x = E, a.icon.view.y = F, a.icon.view.setScale(h.Consts.CharacterPreviewScale / o), a.icon.view.setAlpha(1));
            const I = y / 2 + h.Consts.CharacterPreviewAndTextSpace;
            a.nameText.view.x = E + I, c.camData.x < E && (a.nameText.view.x = E - I);
        }
        const H = g.default.phaser.mainCharacter;
        if (!H)
            return;
        const I = Phaser.Math.Distance.Between(H.body.x, H.body.y, c.x, c.y),
            J = h.Consts.PixelsPerMeter,
            K = Math.round(I / J);
        a.nameText.view.setText(`${ a.options.name } (${ K }m)`);
    };
}), c.register('z/6MV', function(d, e) {
    a(d.exports, 'UpdateCharacterPreview', function() {
        return _i;
    });
    var f = c('d7UqH'),
        g = c('UaUBz0'),
        h = c('GIe9o');
    const _i = a => {
        var j;
        const k = (0, f.default)(a.state.characterId);
        var l;
        if (!k)
            return void(null === (l = a.icon) || void 0 === l || l.destroy());
        const m = k.skin.skinId.replace('character_', '');
        if (!m)
            return;
        const n = (0, g.default)(`characters/spine/normalized_preview/${ m }.png`);
        (null === (j = a.icon) || void 0 === j ? void 0 : j.options.imageUrl) !== n && a.parts.add.sprite({
            imageId: n,
            imageUrl: n,
            layerId: h.default.InGameUIElements,
            onReady: j => {
                const o = (0, f.default)(a.state.characterId);
                if (!o && o !== k)
                    return;
                const p = o.skin.skinId.replace('character_', '');
                (p || p === m) && (a.icon && a.icon.destroy(), a.icon = j);
            }
        });
    };
}), c.register('KzFw0', function(d, e) {
    a(d.exports, 'UpdateVisibility', function() {
        return _k;
    });
    var f = c('5Fjxs'),
        g = c('UkCpC'),
        h = c('g1kXX'),
        i = c('W2kIJ'),
        j = c('7zgOC');
    const _k = a => {
        var l, m, n;
        let o = 1;
        if ((0, g.InPreGamePhase)() && (o = 0), a.state.active || (o = 0), a.options.target !== h.WaypointTarget.player || a.state.characterId || (o = 0), a.options.target === h.WaypointTarget.player && a.state.characterId === (0, f.default)() && (o = 0), a.options.target === h.WaypointTarget.flag) {
            const p = (0, i.FetchFlagOfColor)(a);
            p ? (p.state.characterId === (0, f.default)() || p.lastCharacterIdToHoldFlag === (0, f.default)() && p.goingBackToBase || a.options.hideWhenFlagIsInBase && p.isInBase()) && (o = 0) : o = 0;
        } else if (a.options.target === h.WaypointTarget.ball) {
            const p = (0, j.FetchBallOfId)(a);
            p && p.state.active || (o = 0);
        }
        return (null === (l = a.pointer) || void 0 === l ? void 0 : l.view) && (a.pointer.view.alpha = o), (null === (m = a.nameText) || void 0 === m ? void 0 : m.view) && (a.nameText.view.alpha = o), (null === (n = a.icon) || void 0 === n ? void 0 : n.view) && (a.icon.view.alpha = o), o;
    };
}), c.register('k1XXZ', function(d, e) {
    a(d.exports, 'default', function() {
        return _j;
    });
    var f = c('fI6of'),
        g = c('9bPKW'),
        h = c('g1kXX'),
        i = c('xteaO');
    var _j = (a, d) => {
        if (!a.options.useDeactivateWithinRange || a.options.target !== h.WaypointTarget.deviceLocation)
            return;
        if (!a.state.active)
            return;
        const k = f.default.phaser.mainCharacter;
        if (!k)
            return;
        const l = Phaser.Math.Distance.Between(k.body.x, k.body.y, d.x, d.y),
            m = g.Consts.PixelsPerMeter;
        Math.round(l / m) < a.options.deactivateWithinRange && a.sendToServerDevice(i.Messages.deactivateWithinRange);
    };
}), c.register('xteaO', function(d, e) {
    let f;
    a(d.exports, 'Messages', function() {
        return f;
    }), (f || (f = {})).deactivateWithinRange = 'deactivateWithinRange';
}), c.register('kN4Z6', function(d, e) {
    a(d.exports, 'ReleasePointedFlagDevice', function() {
        return _h;
    });
    var f = c('heTaO'),
        g = c('OFuf70');
    const _h = a => {
        if (void 0 === a.options.flagColor)
            return;
        const i = (0, f.default)().worldManager.devices.allDevices.find(i => i.deviceOption.id === g.default.flag && i.options.flagColor === a.options.flagColor && i.pointedByWaypointDeviceID === a.id);
        i && (i.pointedByWaypointDeviceID = void 0);
    };
});