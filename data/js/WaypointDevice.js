function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}

function a(b) {
    return b && b.__esModule ? b.default : b;
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('c03PH', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _x(b.exports, 'default', function() {
        return _x;
    });
    var e = a('1bFPu'),
        f = a('I35Ay'),
        g = a('5uoY9'),
        h = a('/pbxo'),
        i = a('WXyRn'),
        j = a('PJIQl'),
        k = a('MRGQ9'),
        l = a('Ff48c'),
        m = a('BAMFo'),
        n = a('JqBF0'),
        o = a('Z15KO'),
        p = a('CqqzQ'),
        q = a('9tz3H'),
        r = a('+uQv7'),
        s = a('2Xvuf'),
        t = a('dTXti'),
        u = a('lFuxp'),
        v = a('gOeXU');
    class w extends f.default {
        constructor(_x) {
            if (super(_x), (0, e.default)(this, 'onUpdate', _x => {
                    if (!(0, p.UpdateVisibility)(this))
                        return;
                    const y = (0, j.GetTargetParams)(this);
                    if (!y)
                        return;
                    (0, k.IsTargetWithinSafeArea)(this, y) ? (0, l.UpdateWithTargetWithinView)(this, _x, y) : (0, m.UpdateWithTargetOutsideView)(this, _x, y), (0, u.default)(this, y);
                }), (0, e.default)(this, 'onDestroy', _x => {
                    (0, v.ReleasePointedFlagDevice)(this);
                }), (0, h.InPreGamePhase)() && (0, q.isSavedVersion)()) {
                const y = t.default.Overlay;
                new(0, r.default)({
                    device: this,
                    baseColor: y.baseColor,
                    boxColor: y.boxColor,
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
                const y = Phaser.Display.Color.HexStringToColor(this.options.color).color;
                this.pointer = this.parts.add.sprite({
                    ...g.PointerAsset,
                    layerId: n.default.InGameUIElements,
                    onReady: b => {
                        b.view.setTint(y), (0, p.UpdateVisibility)(this);
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
    var _x = w;
}), a.register('5uoY9', function(b, c) {
    _f(b.exports, 'PointerAsset', function() {
        return _d;
    });
    const _d = {
        imageId: 'radar_arrow',
        imageUrl: (0, a('2Xvuf').default)('devices/waypoint/arrow.png')
    };
}), a.register('WXyRn', function(b, c) {
    _f(b.exports, 'Consts', function() {
        return _f;
    }), _f(b.exports, 'NAME_TEXT_STYLE', function() {
        return _g;
    });
    var d = a('b5kvC'),
        e = a('WWOt8');
    const _f = {
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
            SafeAreaExtraTopMarginWithScorebar: a('kASlx').SCOREBAR_HEIGHT,
            SafeAreaBottomMarginWithGUIDevices: 100,
            SafeAreaBottomMarginWithoutGUIDevices: 30,
            SafeAreaLeftRightMargin: 30,
            ShadowBlur: 5
        },
        _g = {
            fontFamily: d.Fonts.ProductSans,
            fontSize: `${ e.default.fontWeight } ${ _f.NameTextFontSize }px`
        };
}), a.register('PJIQl', function(b, c) {
    _f(b.exports, 'GetTargetParams', function() {
        return _m;
    });
    var d = a('Jfada'),
        e = a('akSSD'),
        f = a('B7ZvS'),
        g = a('s1zbr'),
        h = a('WXyRn'),
        i = a('pvAUg'),
        j = a('k2p3V'),
        k = a('tt0gv'),
        l = a('8WvaZ');
    const _m = _f => {
        let n = _f.x,
            o = _f.y;
        const p = (0, e.FetchCameraData)();
        if (_f.options.target === i.WaypointTarget.player) {
            const q = (0, f.default)(_f.state.characterId);
            if (!q)
                return;
            if (q.id === (0, d.default)())
                return;
            n = q.body.x, o = q.body.y + h.Consts.CharacterShift;
        } else if (_f.options.target === i.WaypointTarget.flag) {
            const q = (0, j.FetchFlagOfColor)(_f);
            if (!q)
                return;
            n = q.currentFlagX, o = q.currentFlagY + h.Consts.IdleFlagShift, q.state.currentState !== g.CurrentState.idle && (o = q.currentFlagY + h.Consts.CarriedFlagShift);
        } else if (_f.options.target === i.WaypointTarget.ball) {
            var q;
            const r = (0, k.FetchBallOfId)(_f);
            if (!r || !(null === (q = r.container) || void 0 === q ? void 0 : q.view))
                return;
            const s = {
                    x: r.container.view.x,
                    y: r.container.view.y
                },
                t = {
                    x: p.x,
                    y: p.y
                },
                u = _b(l).Math.Angle.BetweenPoints(s, t),
                v = r.options.radius,
                w = {
                    x: s.x + v * Math.cos(u),
                    y: s.y + v * Math.sin(u)
                };
            n = w.x, o = w.y;
        }
        return {
            x: n,
            y: o,
            camData: p,
            angle: Math.atan2(o - p.y, n - p.x)
        };
    };
}), a.register('akSSD', function(_b, c) {
    _f(_b.exports, 'FetchCameraData', function() {
        return _e;
    });
    var d = a('D5xLI');
    const _e = () => {
        const _f = (0, d.default)(),
            g = _f.cameras.main.worldView.left,
            h = _f.cameras.main.worldView.right,
            i = _f.cameras.main.worldView.top,
            j = _f.cameras.main.worldView.bottom;
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
}), a.register('s1zbr', function(b, c) {
    let d;
    var e;
    let f;
    var g;
    _F(b.exports, 'CurrentState', function() {
        return f;
    }), (e = d || (d = {})).black = 'black', e.blue = 'blue', e.green = 'green', e.orange = 'orange', e.purple = 'purple', e.red = 'red', e.white = 'white', (g = f || (f = {})).idle = 'idle', g.carried = 'carried', g.dropped = 'dropped';
    f.idle;
}), a.register('pvAUg', function(b, c) {
    let d;
    var e;
    _F(b.exports, 'WaypointTarget', function() {
        return d;
    }), (e = d || (d = {})).deviceLocation = 'deviceLocation', e.player = 'player', e.flag = 'flag', e.ball = 'ball';
}), a.register('k2p3V', function(b, c) {
    _F(b.exports, 'FetchFlagOfColor', function() {
        return _f;
    });
    var d = a('cPBfb'),
        e = a('D5xLI');
    const _f = _F => {
        if (void 0 === _F.options.flagColor)
            return;
        const g = (0, e.default)().worldManager.devices.allDevices.find(g => g.deviceOption.id === d.default.flag && g.options.flagColor === _F.options.flagColor && (void 0 === g.pointedByWaypointDeviceID || g.pointedByWaypointDeviceID === _F.id));
        return g && (g.pointedByWaypointDeviceID = _F.id), g;
    };
}), a.register('tt0gv', function(b, c) {
    _F(b.exports, 'FetchBallOfId', function() {
        return _g;
    });
    var d = a('cPBfb'),
        e = a('D5xLI'),
        f = a('BYRTX');
    const _g = _F => {
        if (void 0 === _F.options.ballId)
            return;
        if (_F.trackedBallDeviceId) {
            const h = (0, f.FetchDeviceById)(_F.trackedBallDeviceId);
            if (h)
                return h;
        }
        const h = (0, e.default)().worldManager.devices.allDevices.find(h => h.deviceOption.id === d.default.ball && h.options.identifier === _F.options.ballId);
        return h && (_F.trackedBallDeviceId = h.id), h;
    };
}), a.register('MRGQ9', function(b, c) {
    _F(b.exports, 'IsTargetWithinSafeArea', function() {
        return _e;
    });
    var d = a('gZftk');
    const _e = (_F, b) => Phaser.Geom.Intersects.CircleToRectangle(new Phaser.Geom.Circle(b.x, b.y, 1), (0, d.GetSafeAreaRect)(_F, b));
}), a.register('gZftk', function(b, c) {
    _F(b.exports, 'GetSafeAreaRect', function() {
        return _h;
    });
    var d = a('Z15KO'),
        e = a('iWivW'),
        f = a('AmERn'),
        g = a('WXyRn');
    const _h = (_F, b) => {
        const i = _F.scene.cameras.main.zoom / (0, d.default)(),
            j = e.default.gui.guiSlots.find(_F => _F.position === f.GUIPosition.topLeft || _F.position === f.GUIPosition.topRight),
            k = e.default.gui.guiSlots.find(_F => _F.position === f.GUIPosition.bottomLeft || _F.position === f.GUIPosition.bottomRight);
        let l = j ? g.Consts.SafeAreaTopMarginWithGUIDevices : g.Consts.SafeAreaTopMarginWithoutGUIDevices;
        e.default.gui.scorebar && (l += g.Consts.SafeAreaExtraTopMarginWithScorebar), l /= i;
        const m = (k ? g.Consts.SafeAreaBottomMarginWithGUIDevices : g.Consts.SafeAreaBottomMarginWithoutGUIDevices) / i,
            n = g.Consts.SafeAreaLeftRightMargin / i;
        return new Phaser.Geom.Rectangle(b.camData.left + n, b.camData.top + l, b.camData.width - 2 * n, b.camData.height - l - m);
    };
}), a.register('Ff48c', function(b, c) {
    _F(b.exports, 'UpdateWithTargetWithinView', function() {
        return _g;
    });
    var d = a('Z15KO'),
        e = a('WXyRn'),
        f = a('pvAUg');
    const _g = (_F, b, a) => {
        var h, i, j, k;
        let l = !(null === (h = _F.pointer) || void 0 === h ? void 0 : h.view) || !(null === (i = _F.nameText) || void 0 === i ? void 0 : i.view);
        var m, n;
        if (_F.options.target === f.WaypointTarget.ball && (l = !0), l)
            return (null === (m = _F.pointer) || void 0 === m ? void 0 : m.view) && (_F.pointer.view.alpha = 0), void((null === (n = _F.nameText) || void 0 === n ? void 0 : n.view) && (_F.nameText.view.alpha = 0));
        const o = _F.scene.cameras.main.zoom / (0, d.default)(),
            p = _F.pointer.view.width * e.Consts.PointerBaseScale / o,
            q = _F.nameText.view.width / o,
            r = -10 / o;
        a.x > a.camData.x ? (_F.pointer.view.x = a.x - p / 2 - 25, _F.pointer.view.y = a.y, _F.pointer.view.angle = 0, _F.nameText.view.x = a.x - p - q / 2 - 25 - r, _F.nameText.view.y = a.y) : (_F.pointer.view.x = a.x + p / 2 + 25, _F.pointer.view.y = a.y, _F.pointer.view.angle = 180, _F.nameText.view.x = a.x + p + q / 2 + 25 + r, _F.nameText.view.y = a.y), _F.pointer.view.setScale(e.Consts.PointerBaseScale / o * 0.65), _F.nameText.view.setText(`${ _F.options.name }`), null === (j = _F.icon) || void 0 === j || null === (k = j.view) || void 0 === k || k.setAlpha(0);
    };
}), a.register('BAMFo', function(b, c) {
    _F(b.exports, 'UpdateWithTargetOutsideView', function() {
        return _j;
    });
    var d = a('Z15KO'),
        e = a('iWivW'),
        f = a('WXyRn'),
        g = a('gZftk'),
        h = a('pvAUg'),
        i = a('5dl5L');
    const _j = (_F, b, a) => {
        var k, l;
        const m = _F.scene.cameras.main.zoom / (0, d.default)(),
            n = 999999999,
            o = a.camData.x + Math.cos(a.angle) * n,
            p = a.camData.y + Math.sin(a.angle) * n,
            q = Phaser.Geom.Intersects.GetLineToRectangle(new Phaser.Geom.Line(a.camData.x, a.camData.y, o, p), (0, g.GetSafeAreaRect)(_F, a));
        var r;
        if (!q[0])
            return void((null === (r = _F.pointer) || void 0 === r ? void 0 : r.view) && (_F.pointer.view.alpha = 0));
        const s = q[0].x,
            t = q[0].y;
        if ((null === (k = _F.pointer) || void 0 === k ? void 0 : k.view) && (_F.pointer.view.x = s, _F.pointer.view.y = t, _F.pointer.view.alpha = 1, _F.pointer.view.rotation = a.angle, _F.pointer.view.setScale(f.Consts.PointerBaseScale / m)), !(null === (l = _F.nameText) || void 0 === l ? void 0 : l.view))
            return;
        const u = _F.options.target === h.WaypointTarget.player;
        u && (0, i.UpdateCharacterPreview)(_F), _F.nameText.view.setScale(1 / m);
        const v = _F.nameText.view.getBounds(),
            w = v.width,
            x = v.height,
            y = u ? f.Consts.CharacterPreviewSize : w,
            z = u ? f.Consts.CharacterPreviewSize : x,
            A = f.Consts.PointerCircleRadius / m;
        let B = Phaser.Math.Distance.Between(s, t, a.camData.x, a.camData.y) - A,
            C = a.camData.x + Math.cos(a.angle) * B,
            D = a.camData.y + Math.sin(a.angle) * B,
            E = !0;
        for (; E;) {
            B -= 1 / m, C = a.camData.x + Math.cos(a.angle) * B, D = a.camData.y + Math.sin(a.angle) * B;
            const _F = new Phaser.Geom.Circle(s, t, A),
                G = new Phaser.Geom.Rectangle(C - y / 2, D - z / 2, y, z);
            E = Phaser.Geom.Intersects.CircleToRectangle(_F, G);
        }
        if (e.nameText.view.x = C, e.nameText.view.y = D, u) {
            var F;
            (null === (F = e.icon) || void 0 === F ? void 0 : F.view) && (e.icon.view.setOrigin(f.Consts.CharacterPreviewOriginX, f.Consts.CharacterPreviewOriginY), e.icon.view.x = C, e.icon.view.y = D, e.icon.view.setScale(f.Consts.CharacterPreviewScale / m), e.icon.view.setAlpha(1));
            const G = w / 2 + f.Consts.CharacterPreviewAndTextSpace;
            e.nameText.view.x = C + G, a.camData.x < C && (e.nameText.view.x = C - G);
        }
        const F = e.default.phaser.mainCharacter;
        if (!F)
            return;
        const G = Phaser.Math.Distance.Between(F.body.x, F.body.y, a.x, a.y),
            H = f.Consts.PixelsPerMeter,
            I = Math.round(G / H);
        e.nameText.view.setText(`${ e.options.name } (${ I }m)`);
    };
}), a.register('5dl5L', function(b, c) {
    e(b.exports, 'UpdateCharacterPreview', function() {
        return _g;
    });
    var d = a('B7ZvS'),
        e = a('2Xvuf'),
        f = a('JqBF0');
    const _g = e => {
        var h;
        const i = (0, d.default)(e.state.characterId);
        var j;
        if (!i)
            return void(null === (j = e.icon) || void 0 === j || j.destroy());
        const k = i.skin.skinId.replace('character_', '');
        if (!k)
            return;
        const l = (0, e.default)(`characters/spine/normalized_preview/${ k }.png`);
        (null === (h = e.icon) || void 0 === h ? void 0 : h.options.imageUrl) !== l && e.parts.add.sprite({
            imageId: l,
            imageUrl: l,
            layerId: f.default.InGameUIElements,
            onReady: h => {
                const m = (0, d.default)(e.state.characterId);
                if (!m && m !== i)
                    return;
                const n = m.skin.skinId.replace('character_', '');
                (n || n === k) && (e.icon && e.icon.destroy(), e.icon = h);
            }
        });
    };
}), a.register('CqqzQ', function(b, c) {
    e(b.exports, 'UpdateVisibility', function() {
        return _i;
    });
    var d = a('Jfada'),
        e = a('/pbxo'),
        f = a('pvAUg'),
        g = a('k2p3V'),
        h = a('tt0gv');
    const _i = e => {
        var j, k, l;
        let m = 1;
        if ((0, e.InPreGamePhase)() && (m = 0), e.state.active || (m = 0), e.options.target !== f.WaypointTarget.player || e.state.characterId || (m = 0), e.options.target === f.WaypointTarget.player && e.state.characterId === (0, d.default)() && (m = 0), e.options.target === f.WaypointTarget.flag) {
            const n = (0, g.FetchFlagOfColor)(e);
            n ? (n.state.characterId === (0, d.default)() || n.lastCharacterIdToHoldFlag === (0, d.default)() && n.goingBackToBase || e.options.hideWhenFlagIsInBase && n.isInBase()) && (m = 0) : m = 0;
        } else if (e.options.target === f.WaypointTarget.ball) {
            const n = (0, h.FetchBallOfId)(e);
            n && n.state.active || (m = 0);
        }
        return (null === (j = e.pointer) || void 0 === j ? void 0 : j.view) && (e.pointer.view.alpha = m), (null === (k = e.nameText) || void 0 === k ? void 0 : k.view) && (e.nameText.view.alpha = m), (null === (l = e.icon) || void 0 === l ? void 0 : l.view) && (e.icon.view.alpha = m), m;
    };
}), a.register('lFuxp', function(b, c) {
    e(b.exports, 'default', function() {
        return _h;
    });
    var d = a('iWivW'),
        e = a('WXyRn'),
        f = a('pvAUg'),
        g = a('1IHmT');
    var _h = (e, b) => {
        if (!e.options.useDeactivateWithinRange || e.options.target !== f.WaypointTarget.deviceLocation)
            return;
        if (!e.state.active)
            return;
        const i = d.default.phaser.mainCharacter;
        if (!i)
            return;
        const j = Phaser.Math.Distance.Between(i.body.x, i.body.y, b.x, b.y),
            k = e.Consts.PixelsPerMeter;
        Math.round(j / k) < e.options.deactivateWithinRange && e.sendToServerDevice(g.Messages.deactivateWithinRange);
    };
}), a.register('1IHmT', function(b, c) {
    let d;
    e(b.exports, 'Messages', function() {
        return d;
    }), (d || (d = {})).deactivateWithinRange = 'deactivateWithinRange';
}), a.register('gOeXU', function(b, c) {
    e(b.exports, 'ReleasePointedFlagDevice', function() {
        return _f;
    });
    var d = a('D5xLI'),
        e = a('cPBfb');
    const _f = e => {
        if (void 0 === e.options.flagColor)
            return;
        const g = (0, d.default)().worldManager.devices.allDevices.find(g => g.deviceOption.id === e.default.flag && g.options.flagColor === e.options.flagColor && g.pointedByWaypointDeviceID === e.id);
        g && (g.pointedByWaypointDeviceID = void 0);
    };
});