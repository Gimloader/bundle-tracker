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
c.register('.....', function (d, e) {
    var f;
    f = d.exports, Object.defineProperty(f, '__esModule', {
        value: !0,
        configurable: !0
    }), a(d.exports, 'default', function () {
        return _H;
    });
    var g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....'), r = c('.....'), s = c('.....'), t = c('.....'), u = c('.....'), v = c('.....'), w = c('.....'), x = c('.....'), y = c('.....'), z = c('.....'), A = c('.....'), B = c('.....'), C = c('.....'), D = c('.....'), E = c('.....'), F = c('.....');
    class G extends h.default {
        addFullLook() {
            this.boundingBox.setHardcoded({
                width: this.options.width,
                height: this.options.height
            }), this.wirePoints.setBoth(this.x, this.y - this.options.height / 2 + 20), (0, o.AddMachineBody)(this), this.isPreview || ((0, p.AddColliders)(this), this.options.grantAction === i.GrantAction.broadcastOnChannel ? this.options.grantedItemImageUrl && (this.grantedImage = (0, q.AddImageFromUrl)(this)) : this.grantedImage = (0, r.AddItemImage)(this, this.options.grantedItemId, Math.min(k.Consts.ITEM_MAX_SIZE, 0.7 * this.options.width), Math.min(k.Consts.ITEM_MAX_SIZE, 0.5 * this.options.height - k.Consts.PRICE_HEIGHT), (0, n.GetDepthChange)(this, k.Depths.GRANTED_ITEM)), (0, m.AddPriceElement)(this), (0, l.AddRays)(this), (0, t.InitColors)(this));
        }
        addIconLook() {
            this.parts.add.sprite(s.IconAsset).view.setScale(0.25);
        }
        updateFontSize() {
            if (!this.priceText)
                return;
            const H = this.priceText.view.text.length, I = 0.85 * this.options.width;
            let J = k.Consts.PRICE_TEXT_SIZE, K = H * J;
            const L = () => {
                K > I && (J -= 1, K = H * J, L());
            };
            L();
            const M = (0, z.default)().cameraHelper.zoom, N = J * M;
            this.priceText.view.setFontSize(N), this.priceText.view.setScale(1 / M);
            const O = (0, A.TextPadding)();
            this.priceText.view.setPadding(O, O, O, O);
        }
        constructor(H) {
            super(H), (0, g.default)(this, 'grayScalePipelines', []), (0, g.default)(this, 'grayScaleFactor', 0), (0, g.default)(this, 'animationSpeedFactor', 1), (0, g.default)(this, 'rays', []), (0, g.default)(this, 'cumulTime', 0), (0, g.default)(this, 'currentRaysAngle', 0), (0, g.default)(this, 'onUpdate', I => {
                if (this.cull.isInsideView) {
                    if (this.currentRaysAngle += I / 10000 * this.animationSpeedFactor, this.rays.forEach((J, K) => {
                            (0, l.UpdateRay)(this, J, K);
                        }), this.grantedImage && this.grantedImage.view) {
                        this.cumulTime += I;
                        const J = this.y - k.Consts.LEGS_HEIGHT / 2, K = 5;
                        this.grantedImage.view.y = J + this.animationSpeedFactor * Math.sin(this.cumulTime / 550) * K;
                    }
                    (0, u.UpdateGrayscalePipelines)(this), (0, t.UpdateColors)(this), (0, B.default)(this);
                }
            }), (0, g.default)(this, 'onStateChange', I => {
                'active' === I && (this.state.active ? this.tweens.add({
                    targets: this,
                    grayScaleFactor: 0,
                    animationSpeedFactor: 1,
                    duration: 350
                }) : (this.grayScaleFactor = Math.max(this.grayScaleFactor, 0.00001), this.tweens.add({
                    targets: this,
                    grayScaleFactor: k.Consts.INACTIVE_GRAY_SCALE_FACTOR,
                    animationSpeedFactor: k.Consts.INACTIVE_ANIMATION_SLOW_DOWN,
                    duration: 350
                }))), 'fundedAmount' === I && (0, m.AddPriceElement)(this);
            }), (0, g.default)(this, 'onMessage', I => {
                I.key !== i.Messages.purchased && I.key !== i.Messages.funded || I && I.data && I.data.characterId && I.data.characterId === (0, v.default)() && (I.key === i.Messages.purchased && this.options.soundEnabled && (0, x.playSound)({
                    path: (0, w.default)('devices/vending_machine/purchase.mp3'),
                    volume: (0, y.getVolume)({
                        volume: 0.76,
                        type: y.SoundType.soundEffect
                    })
                }), I.key === i.Messages.funded && this.options.soundEnabled && (0, x.playSound)({
                    path: (0, w.default)('devices/vending_machine/fund.mp3'),
                    volume: (0, y.getVolume)({
                        volume: 0.8,
                        type: y.SoundType.soundEffect
                    })
                }));
            }), (0, g.default)(this, 'setupVisualEditing', () => {
                if (!(0, j.InPreGamePhase)() || !(0, D.isSavedVersion)())
                    return;
                const I = (0, E.FetchOptionSchemaProperty)(this, 'width'), J = (0, E.FetchOptionSchemaProperty)(this, 'height');
                this.visualEditing.add.box({
                    width: this.options.width,
                    height: this.options.height,
                    angle: 0,
                    minWidth: I.min,
                    maxWidth: I.max,
                    minHeight: J.min,
                    maxHeight: J.max,
                    rotable: !1,
                    keepRatio: !1,
                    onChange: K => {
                        (0, F.ReplaceVisualEditingPreview)(K.x, K.y, {
                            width: K.width,
                            height: K.height
                        });
                    }
                });
            }), (0, g.default)(this, 'setupVisualEditingInvisible', () => {
                if (!(0, j.InPreGamePhase)() || !(0, D.isSavedVersion)())
                    return;
                const I = (0, E.FetchOptionSchemaProperty)(this, 'radius');
                this.visualEditing.add.circle({
                    radius: this.options.radius,
                    minRadius: I.min,
                    maxRadius: I.max,
                    rotable: !1,
                    resizable: !0,
                    onChange: J => {
                        (0, F.ReplaceVisualEditingPreview)(J.x, J.y, { radius: J.radius });
                    }
                });
            }), (0, j.InPreGamePhase)() && !this.options.activeOnStart && (this.animationSpeedFactor = k.Consts.INACTIVE_ANIMATION_SLOW_DOWN, this.grayScaleFactor = k.Consts.INACTIVE_GRAY_SCALE_FACTOR), (0, j.InGamePhase)() && !this.state.active && (this.animationSpeedFactor = k.Consts.INACTIVE_ANIMATION_SLOW_DOWN, this.grayScaleFactor = k.Consts.INACTIVE_GRAY_SCALE_FACTOR), this.options.visibleInGame ? this.setupVisualEditing() : this.setupVisualEditingInvisible(), (0, C.default)(this), this.options.visibleInGame ? this.options.visibleInGame && this.addFullLook() : (0, j.InPreGamePhase)() && (0, D.isSavedVersion)() ? this.addIconLook() : this.boundingBox.setHardcoded({
                width: 2 * this.options.radius,
                height: 2 * this.options.radius
            });
        }
    }
    var _H = G;
}), c.register('.....', function (d, e) {
    let f;
    var g;
    a(d.exports, 'GrantAction', function () {
        return f;
    }), a(d.exports, 'Messages', function () {
        return _h;
    }), (g = f || (f = {})).grantItem = 'Grant Item', g.broadcastOnChannel = 'Broadcast On Channel';
    const _h = {
        purchase: 'purchase',
        purchased: 'purchased',
        funded: 'funded'
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'Consts', function () {
        return _g;
    }), a(d.exports, 'Depths', function () {
        return _h;
    }), a(d.exports, 'REQUIRED_AMOUNT_TEXT_STYLE', function () {
        return _i;
    }), a(d.exports, 'InteractionMessages', function () {
        return _j;
    }), a(d.exports, 'GRAYSCALE_COLORS', function () {
        return _k;
    });
    var f = c('.....');
    const _g = {
            FRAME_SCALE: 0.4,
            FRAME_MARGINS_NINE_SLICE: 120,
            LEGS_HEIGHT: 40,
            REQUIRED_ITEM_MAX_SIZE: 30,
            ITEM_MAX_SIZE: 150,
            PRICE_HEIGHT: 42,
            INACTIVE_GRAY_SCALE_FACTOR: 1,
            INACTIVE_ANIMATION_SLOW_DOWN: 0.5,
            RAY_TEXTURE_WIDTH: 39,
            RAY_TEXTURE_HEIGHT: 380,
            PRICE_TEXT_SIZE: 24
        }, _h = {
            BG: 1,
            RAYS: 2,
            LEG: 3,
            INFO_BG: 4,
            INFO: 5,
            GRANTED_ITEM: 6,
            FRAME: 7
        }, _i = {
            fontSize: `${ _g.PRICE_TEXT_SIZE }px`,
            fontFamily: 'Fugaz One'
        }, _j = {
            inStock: k => ({
                message: `In Stock (${ k })`,
                color: '#c8e6c9'
            }),
            notEnoughRequiredItem: {
                message: 'Cannot Afford',
                color: '#ffcdd2'
            },
            outOfStock: {
                message: 'Out Of Stock',
                color: '#ffcdd2'
            },
            notAvailable: {
                message: 'Not Available',
                color: '#ffcdd2'
            },
            fundingStatus: { message: (k, l, m) => `${ (0, f.numberWithCommas)(k) }/${ (0, f.numberWithCommas)(l) } ${ m }` },
            defaultItemName: 'Item',
            purchaseAction: 'to purchase',
            fundingAction: 'to fund'
        }, _k = {
            ray: '#CECECE',
            bg1: '#6A6A6A',
            bg2: '#CECECE'
        };
}), c.register('.....', function (d, e) {
    a(d.exports, 'AddRays', function () {
        return _k;
    }), a(d.exports, 'UpdateRay', function () {
        return _l;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = (g = c('.....'), c('.....')), j = c('.....');
    const _k = l => {
            const m = (0, j.GetColors)(l);
            for (let n = 0; n < l.options.numberOfRays; n++)
                l.parts.add.sprite({
                    imageId: h.RayAsset.imageId,
                    imageUrl: h.RayAsset.imageUrl,
                    y: -20,
                    originX: 0.5,
                    originY: 1,
                    ignoreInput: !0,
                    depthChange: (0, i.GetDepthChange)(l, g.Depths.RAYS),
                    onReady: o => {
                        l.rays.push(o), _l(l, o, n), o.view.alpha = l.options.raysAlpha, o.view.blendMode = l.options.raysAdditive ? 1 : 0, o.view.tint = (0, f.GetNumberFromHexColor)(m.rays), n === l.options.numberOfRays - 1 && (0, j.UpdateColors)(l, !0);
                    }
                });
        }, _l = (m, n, o) => {
            const p = o * (2 * Math.PI / m.options.numberOfRays) + m.currentRaysAngle;
            n.view.rotation = p;
            const q = p, r = Math.atan(19.5 * m.options.raysWidthFactor / 380), s = m.options.width / 2, t = (m.options.height - g.Consts.LEGS_HEIGHT) / 2;
            const u = Math.min(Math.abs(t / Math.cos(q - r)), Math.abs(s / Math.cos(Math.PI / 2 - q - r)), Math.abs(t / Math.cos(q + r)), Math.abs(s / Math.cos(Math.PI / 2 - q + r))) / 380;
            n.view.scaleY = u, n.view.scaleX = u * m.options.raysWidthFactor;
        };
}), c.register('.....', function (d, e) {
    a(d.exports, 'BgAAsset', function () {
        return _g;
    }), a(d.exports, 'BgBAsset', function () {
        return _h;
    }), a(d.exports, 'RayAsset', function () {
        return _i;
    }), a(d.exports, 'FrameAsset', function () {
        return _j;
    }), a(d.exports, 'LegAsset', function () {
        return _k;
    }), a(d.exports, 'InfoAsset', function () {
        return _l;
    }), a(d.exports, 'IconAsset', function () {
        return _m;
    });
    var f = c('.....');
    const _g = {
            imageId: 'vending_machine_bg_a',
            imageUrl: (0, f.default)('devices/vending_machine/bg_a.png')
        }, _h = {
            imageId: 'vending_machine_bg_b',
            imageUrl: (0, f.default)('devices/vending_machine/bg_b.png')
        }, _i = ((0, f.default)('devices/vending_machine/rays.png'), {
            imageId: 'vending_machine_ray',
            imageUrl: (0, f.default)('devices/vending_machine/ray.png')
        }), _j = {
            imageId: 'vending_machine_frame',
            imageUrl: (0, f.default)('devices/vending_machine/frame.png')
        }, _k = {
            imageId: 'vending_machine_leg',
            imageUrl: (0, f.default)('devices/vending_machine/leg.png')
        }, _l = {
            imageId: 'vending_machine_info',
            imageUrl: (0, f.default)('devices/vending_machine/info.png')
        }, _m = {
            imageId: 'vending_machine_icon',
            imageUrl: (0, f.default)('devices/vending_machine/previewIcon.png')
        };
    (0, f.default)('devices/item_granter/question-mark-2.png');
}), c.register('.....', function (d, e) {
    a(d.exports, 'GetDepthChange', function () {
        return _g;
    });
    var f = c('.....');
    const _g = (h, i) => h.options.height / 2 + (0, f.default)(i);
}), c.register('.....', function (d, e) {
    a(d.exports, 'GetColors', function () {
        return _o;
    }), a(d.exports, 'InitColors', function () {
        return _p;
    }), a(d.exports, 'UpdateColors', function () {
        return _q;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....');
    const m = (n, o) => {
            const p = Phaser.Display.Color.HexStringToColor(n);
            return {
                grayscale: Phaser.Display.Color.HexStringToColor(o),
                color: p
            };
        }, n = (o, p) => {
            const q = {
                red: Math.round(Phaser.Math.Linear(o.color.red, o.grayscale.red, p)),
                green: Math.round(Phaser.Math.Linear(o.color.green, o.grayscale.green, p)),
                blue: Math.round(Phaser.Math.Linear(o.color.blue, o.grayscale.blue, p))
            };
            return (0, h.GetNumberFromHexColor)((0, j.rgbToColorString)(q));
        }, _o = p => {
            if (p.options.grantAction === l.GrantAction.grantItem && p.options.matchItemRarity) {
                const q = (0, i.FetchItemOption)(p.options.grantedItemId);
                var r;
                const s = null !== (r = null == q ? void 0 : q.rarity) && void 0 !== r ? r : g.InventoryItemRarity.common, t = f.InventoryRarityColorsHex[s];
                return {
                    rays: t.a,
                    bg1: t.b,
                    bg2: t.a
                };
            }
            return {
                rays: p.options.raysColor,
                bg1: p.options.backgroundColor1,
                bg2: p.options.backgroundColor2
            };
        }, _p = q => {
            const r = _o(q);
            q.raysGrayscale = m(r.rays, k.GRAYSCALE_COLORS.ray), q.bg1Grayscale = m(r.bg1, k.GRAYSCALE_COLORS.bg1), q.bg2Grayscale = m(r.bg2, k.GRAYSCALE_COLORS.bg2);
        }, _q = (r, s = !1) => {
            var t, u, v, w;
            if (r.lastGrayscaleFactorUpdate === r.grayScaleFactor && !s)
                return;
            r.lastGrayscaleFactorUpdate = r.grayScaleFactor, r.raysGrayscale || _p(r);
            const x = n(r.raysGrayscale, r.grayScaleFactor), y = n(r.bg1Grayscale, r.grayScaleFactor), z = n(r.bg2Grayscale, r.grayScaleFactor);
            r.rays.forEach(A => {
                A.view.tint = x;
            }), null === (t = r.bg1) || void 0 === t || null === (u = t.view) || void 0 === u || u.setTint(y), null === (v = r.bg2) || void 0 === v || null === (w = v.view) || void 0 === w || w.setTint(z);
        };
}), c.register('.....', function (d, e) {
    a(d.exports, 'AddPriceElement', function () {
        return _l;
    });
    var f = c('.....'), g = c('.....'), h = (f = c('.....'), c('.....')), i = c('.....'), j = c('.....'), k = c('.....');
    const _l = m => {
        if (!m.options.visibleInGame)
            return;
        const n = m.options.height / 2 - 90;
        m.priceAreaInfoRectangle || (m.priceAreaInfoRectangle = m.parts.add.sprite({
            ...g.InfoAsset,
            y: n,
            depthChange: (0, h.GetDepthChange)(m, f.Depths.INFO_BG)
        })), (0, j.default)({
            familyName: f.REQUIRED_AMOUNT_TEXT_STYLE.fontFamily,
            onLoad: () => {
                const o = (0, k.default)(m);
                if (m.priceText)
                    m.priceText.view.setText(o);
                else {
                    const p = m.parts.add.text({
                        text: (0, k.default)(m),
                        y: n,
                        depthChange: (0, h.GetDepthChange)(m, f.Depths.INFO),
                        textStyle: f.REQUIRED_AMOUNT_TEXT_STYLE
                    });
                    m.priceText = p;
                }
                m.updateFontSize();
                const q = f.Consts.REQUIRED_ITEM_MAX_SIZE, r = s => {
                        s.view.y = m.y + n;
                        const t = m.priceText.getBounds().width, u = q + t + 7;
                        s.view.x = -u / 2 + q / 2 + m.x, m.priceText.view.x = u / 2 - t / 2 + m.x;
                    };
                m.requiredImage ? r(m.requiredImage) : m.requiredImage = (0, i.AddItemImage)(m, m.options.requiredItemId, q, 0.8 * f.Consts.PRICE_HEIGHT, f.Depths.INFO, s => {
                    r(s);
                });
            }
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'AddItemImage', function () {
        return _l;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....');
    const _l = (m, n, o, p, q, r) => {
        const s = { ...i.UnknownItemAsset };
        if (n) {
            const t = f.default.worldOptions.itemOptions.find(u => u.id === n);
            t && (s.imageId = t.id, s.imageUrl = t.previewImage);
        }
        const u = (0, g.default)(s.imageId), v = (0, h.default)({
                height: u.height,
                width: u.width,
                newWidth: p,
                newHeight: o
            });
        return t.parts.add.sprite({
            imageId: s.imageId,
            imageUrl: s.imageUrl,
            depthChange: (0, j.GetDepthChange)(t, q),
            displayWidth: v.width,
            displayHeight: v.height,
            onReady: w => {
                t.grayScaleFactor > 0 && (0, k.AddGrayscalePipeline)(t, w), r && r(w);
            }
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'BaseAsset', function () {
        return _g;
    }), a(d.exports, 'UnknownItemAsset', function () {
        return _h;
    });
    var f = c('.....');
    const _g = {
            imageId: (0, f.default)('devices/item_granter/base.png'),
            imageUrl: (0, f.default)('devices/item_granter/base.png')
        }, _h = {
            imageId: '__UNKNOWN_ITEM',
            imageUrl: (0, f.default)('devices/item_granter/question-mark-2.png')
        };
}), c.register('.....', function (d, e) {
    a(d.exports, 'AddGrayscalePipeline', function () {
        return _f;
    }), a(d.exports, 'UpdateGrayscalePipelines', function () {
        return _h;
    });
    const _f = (g, h) => {
            g.grayScalePipelines.push(g.scene.plugins.get('rexGrayScalePipeline').add(h.view, { intensity: g.grayScaleFactor }));
        }, g = (h, i) => {
            h.scene.plugins.get('rexGrayScalePipeline').remove(i.view);
        }, _h = i => {
            i.grayScaleFactor > 0 ? ((j => {
                var k, l;
                j.grayScalePipelines.length > 0 || ((null === (k = j.requiredImage) || void 0 === k ? void 0 : k.view) && _f(j, j.requiredImage), (null === (l = j.grantedImage) || void 0 === l ? void 0 : l.view) && _f(j, j.grantedImage));
            })(i), i.grayScalePipelines.forEach(j => {
                j.intensity = i.grayScaleFactor;
            })) : (j => {
                var k, l;
                0 !== j.grayScalePipelines.length && ((null === (k = j.requiredImage) || void 0 === k ? void 0 : k.view) && g(j, j.requiredImage), (null === (l = j.grantedImage) || void 0 === l ? void 0 : l.view) && g(j, j.grantedImage), j.grayScalePipelines = []);
            })(i);
        };
}), c.register('.....', function (d, e) {
    a(d.exports, 'isGoogleFontLoaded', function () {
        return _h;
    }), a(d.exports, 'default', function () {
        return _i;
    });
    var f = c('.....');
    const g = [], _h = i => g.includes(i);
    var _i = j => {
        const {
            familyName: k,
            onLoad: l
        } = j;
        g.includes(k) ? l && l() : b(f).load({
            google: { families: [`${ k }:400,700`] },
            fontactive: m => {
                g.includes(m) || g.push(m), k === m && l && l();
            }
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....');
    var _h = i => {
        let j = `${ (0, f.numberWithCommas)((0, g.GetCost)(i)) }`;
        return i.options.allowFunding ? `${ (0, f.numberWithCommas)(i.state.fundedAmount || 0) } / ${ j }` : j;
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'GetCost', function () {
        return _g;
    });
    var f = c('.....');
    const _g = h => {
        return (0, f.InPreGamePhase)() ? h.options.amountOfRequiredItem : null !== (d = h.state.cost) && void 0 !== d ? d : h.options.amountOfRequiredItem;
        var i;
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'AddMachineBody', function () {
        return _l;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....');
    const _l = m => {
        const n = -h.Consts.LEGS_HEIGHT / 2, o = {
                displayWidth: m.options.width - 20,
                displayHeight: m.options.height - 20 - h.Consts.LEGS_HEIGHT,
                depthChange: (0, j.GetDepthChange)(m, h.Depths.BG),
                y: n
            };
        m.options.showShadow && !(0, k.isPlatformer)() && m.shadows.add({
            r1: m.options.width / 2 + 20,
            r2: 60,
            y: m.options.height / 2 - 20
        });
        const p = (0, i.GetColors)(m);
        m.parts.add.sprite({
            ...g.BgAAsset,
            ...o,
            onReady: q => {
                m.bg1 = q, q.view.setTint((0, f.GetNumberFromHexColor)(p.bg1)), (0, i.UpdateColors)(m, !0);
            }
        }), m.parts.add.sprite({
            ...g.BgBAsset,
            ...o,
            ignoreInput: !0,
            onReady: q => {
                m.bg2 = q, q.view.setTint((0, f.GetNumberFromHexColor)(p.bg2)), (0, i.UpdateColors)(m, !0);
            }
        });
        const q = {
                ...g.LegAsset,
                y: m.options.height / 2 + n - 2,
                depthChange: (0, j.GetDepthChange)(m, h.Depths.LEG)
            }, r = -m.options.width / 2 + 60;
        m.parts.add.sprite({
            ...q,
            x: r
        }), m.parts.add.sprite({
            ...q,
            x: -r,
            flipX: !0
        });
        const s = h.Consts.FRAME_MARGINS_NINE_SLICE;
        m.parts.add.ninePatch({
            columns: [
                s,
                s
            ],
            rows: [
                s,
                s
            ],
            y: n,
            scale: h.Consts.FRAME_SCALE,
            height: m.options.height - h.Consts.LEGS_HEIGHT,
            width: m.options.width,
            depthChange: (0, j.GetDepthChange)(m, h.Depths.FRAME),
            imageUrl: g.FrameAsset.imageUrl
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'AddColliders', function () {
        return _g;
    });
    var f = c('.....');
    const _g = h => {
        h.colliders.add.box({
            x: 0,
            y: 5 - f.Consts.LEGS_HEIGHT + f.Consts.LEGS_HEIGHT / 2,
            w: h.options.width,
            h: h.options.height - f.Consts.LEGS_HEIGHT + 10
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'AddImageFromUrl', function () {
        return _l;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....');
    const _l = m => {
        const n = (0, k.GetImageUrl)(m.options.grantedItemImageUrl);
        return m.parts.add.sprite({
            imageId: n,
            imageUrl: n,
            y: -h.Consts.LEGS_HEIGHT / 2,
            depthChange: (0, i.GetDepthChange)(m, h.Depths.GRANTED_ITEM),
            onReady: o => {
                const p = (0, f.default)(n), q = (0, g.default)({
                        height: p.height,
                        width: p.width,
                        newWidth: Math.min(h.Consts.ITEM_MAX_SIZE, 0.7 * m.options.width),
                        newHeight: Math.min(h.Consts.ITEM_MAX_SIZE, 0.4 * m.options.height - h.Consts.PRICE_HEIGHT)
                    });
                o.view.setDisplaySize(q.width, q.height), m.grayScaleFactor > 0 && (0, j.AddGrayscalePipeline)(m, o);
            }
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'TextPadding', function () {
        return _f;
    });
    const _f = () => 4;
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _n;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....');
    var _n = (o, p) => {
        if ((0, l.default)(o))
            return void o.interactiveZones.setForceDisabled(!0);
        if (o.interactiveZones.setForceDisabled(!1), !(0, f.IsCurrentInteractive)(o.id) && !p)
            return;
        const q = (0, m.default)(o), r = {
                message: (0, k.default)(o),
                action: (0, g.default)(o),
                topHeader: null == q ? void 0 : q.text,
                topHeaderColor: null == q ? void 0 : q.color,
                bottomHeader: (0, i.default)(o),
                duration: (0, j.default)(o),
                allowedToInteract: (0, h.default)(o)
            };
        o.interactiveZones.setInfo(r);
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'IsCurrentInteractive', function () {
        return _g;
    });
    var f = c('.....');
    const _g = h => {
        var i;
        return (null === (i = (0, f.default)().worldManager.devices.interactives.currentDevice) || void 0 === i ? void 0 : i.id) === h;
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _i;
    });
    var f = c('.....'), g = c('.....'), h = c('.....');
    var _i = j => {
        const k = (0, g.VendingMachineDeviceAmountRequiredToPurchase)(j), l = (0, g.VendingMachineDeviceAmountOfRequiredItemIHave)(j);
        return (0, h.VendingMachineDeviceFundingIsEnabled)(j) && l < k ? f.InteractionMessages.fundingAction : f.InteractionMessages.purchaseAction;
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'VendingMachineDeviceAmountRequiredToPurchase', function () {
        return _i;
    }), a(d.exports, 'VendingMachineDeviceAmountOfRequiredItemIHave', function () {
        return _j;
    });
    var f = c('.....'), g = c('.....'), h = c('.....');
    const _i = j => Math.max(0, (0, g.GetCost)(j) - ((0, h.VendingMachineDeviceFundingIsEnabled)(j) && j.state.fundedAmount || 0)), _j = k => {
            let l = 0;
            const m = f.default.me.inventory.slots.get(k.options.requiredItemId);
            return m && (l = m.amount), l;
        };
}), c.register('.....', function (d, e) {
    a(d.exports, 'VendingMachineDeviceFundingIsEnabled', function () {
        return _f;
    });
    const _f = g => g.options.allowFunding;
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....');
    var _h = i => {
        if (!i.state.active)
            return !1;
        if (i.options.useLimitedStock && i.state.currentStock <= 0)
            return !1;
        const j = (0, f.VendingMachineDeviceAmountRequiredToPurchase)(i), k = (0, f.VendingMachineDeviceAmountOfRequiredItemIHave)(i);
        return (0, g.VendingMachineDeviceFundingIsEnabled)(i) ? !!k : !(k < j);
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _f;
    });
    var _f = g => {
        var h;
        const i = null === (h = g.options.grantedItemDescription) || void 0 === h ? void 0 : h.trim();
        if (null == i ? void 0 : i.length)
            return i;
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _g;
    });
    var f = c('.....');
    var _g = h => {
        const i = (0, f.VendingMachineDeviceAmountOfRequiredItemIHave)(h);
        return (0, f.VendingMachineDeviceAmountOfRequiredItemIHave)(h) >= i ? h.options.interactionDuration : 1;
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....');
    var _k = l => {
        var m;
        let n = null === (m = l.options.grantedItemName) || void 0 === m ? void 0 : m.trim();
        return n || l.options.grantAction !== i.GrantAction.grantItem || (n = (0, g.ItemName)(l.options.grantedItemId)), n || (n = h.InteractionMessages.defaultItemName), l.options.grantAction === i.GrantAction.grantItem && !l.options.visibleInGame && l.options.attachCostToNameWhenHidden && l.options.requiredItemId && (0, j.GetCost)(l) ? `${ n } - ${ (0, f.numberWithCommas)(l.options.amountOfRequiredItem) } ${ (0, g.ItemName)(l.options.requiredItemId) }` : n;
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....');
    var _h = i => !i.options.visibleInGame && !i.state.active || !(!i.options.allowedPurchaseTeam || i.options.allowedPurchaseTeam === f.ANY_TEAM_DEVICE_OPTION || (0, g.default)() === i.options.allowedPurchaseTeam);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....');
    var _k = l => {
        if (!l.state.active)
            return {
                text: g.InteractionMessages.notAvailable.message,
                color: g.InteractionMessages.notAvailable.color
            };
        if (l.options.useLimitedStock && l.state.currentStock <= 0)
            return {
                text: g.InteractionMessages.outOfStock.message,
                color: g.InteractionMessages.outOfStock.color
            };
        const m = (0, i.VendingMachineDeviceAmountRequiredToPurchase)(l), n = (0, i.VendingMachineDeviceAmountOfRequiredItemIHave)(l), o = (0, j.VendingMachineDeviceFundingIsEnabled)(l);
        return n < m && !o ? {
            text: g.InteractionMessages.notEnoughRequiredItem.message,
            color: g.InteractionMessages.notEnoughRequiredItem.color
        } : l.options.useLimitedStock ? {
            text: g.InteractionMessages.inStock(l.state.currentStock).message,
            color: g.InteractionMessages.inStock(l.state.currentStock).color
        } : o ? { text: g.InteractionMessages.fundingStatus.message(l.state.fundedAmount || 0, (0, h.GetCost)(l), (0, f.ItemName)(l.options.requiredItemId)) } : {};
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _i;
    });
    var f = c('.....'), g = c('.....'), h = c('.....');
    var _i = j => {
        (0, f.InPreGamePhase)() || (j.options.visibleInGame ? j.interactiveZones.add.rect({
            y: 25,
            width: j.options.width + 150,
            height: j.options.height + 150
        }) : j.interactiveZones.add.circle({ r: j.options.radius }), j.interactiveZones.setCanInteractThroughColliders(!0), j.interactiveZones.onInteraction = () => {
            j.sendToServerDevice(g.Messages.purchase);
        }, j.interactiveZones.onInteractiveCb = () => {
            (0, h.default)(j, !0);
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'FetchOptionSchemaProperty', function () {
        return _f;
    });
    const _f = (g, h) => {
        var i, j, k;
        const l = g.deviceOption.optionSchema.options.find(m => m.key === h);
        return {
            min: null === (i = null == l ? void 0 : l.option.props) || void 0 === i ? void 0 : i.min,
            max: null === (j = null == l ? void 0 : l.option.props) || void 0 === j ? void 0 : j.max,
            step: null === (k = null == l ? void 0 : l.option.props) || void 0 === k ? void 0 : k.step
        };
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'ReplaceVisualEditingPreview', function () {
        return _j;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....');
    const _j = (k, l, m) => {
        const n = (0, i.FetchVisualEditingPreview)(), o = (0, h.FetchCurrentlyEditedDevice)();
        if (!o || !n)
            return;
        const p = o.layers.isOnNaturalDepth() ? void 0 : l + o.layers.getDepthShift();
        (0, g.default)({
            deviceOption: n.deviceOption,
            id: f.VisualEditingConstants.previewId,
            x: k,
            y: l,
            depth: p,
            layerId: o.layers.getLayer(),
            name: n.name,
            isPreview: !0,
            options: {
                ...n.options,
                ...m
            },
            placedByClient: !0,
            state: n.deviceOption.defaultState
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....');
    var _h = i => {
        (0, f.default)().worldManager.devices.getDeviceById(i.id) && (0, g.default)(i);
    };
});