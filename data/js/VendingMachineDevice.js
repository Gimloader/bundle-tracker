function a(a, b, c, I) {
    Object.defineProperty(a, b, {
        get: c,
        set: I,
        enumerable: !0,
        configurable: !0
    });
}

function b(a) {
    return a && a.__esModule ? a.default : a;
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('v3vsZ', function(b, I) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), a(b.exports, 'default', function() {
        return F;
    });
    var e = c('UM8oI'),
        f = c('sgILU'),
        g = c('ktQNN'),
        h = c('5Ux1a'),
        i = c('s7aO+'),
        j = c('oIFjt'),
        k = c('89ZVe'),
        l = c('PCUfD'),
        m = c('hbu+b'),
        n = c('gWXN2'),
        o = c('Aty9y'),
        p = c('TK0dC'),
        q = c('TmkIq'),
        r = c('pvFdX'),
        s = c('FPQII'),
        t = c('PUlKf'),
        u = c('JJQ0+'),
        v = c('OlpXx'),
        w = c('Ena4B'),
        x = c('dAmf5'),
        y = c('qxeBa0'),
        z = c('aePN4'),
        A = c('bu4o6'),
        B = c('Bpt+p'),
        C = c('/Lvpl17'),
        D = c('wSwKo5');
    class E extends f.default {
        addFullLook() {
            this.boundingBox.setHardcoded({
                width: this.options.width,
                height: this.options.height
            }), this.wirePoints.setBoth(this.x, this.y - this.options.height / 2 + 20), (0, m.AddMachineBody)(this), this.isPreview || ((0, n.AddColliders)(this), this.options.grantAction === g.GrantAction.broadcastOnChannel ? this.options.grantedItemImageUrl && (this.grantedImage = (0, o.AddImageFromUrl)(this)) : this.grantedImage = (0, p.AddItemImage)(this, this.options.grantedItemId, Math.min(i.Consts.ITEM_MAX_SIZE, 0.7 * this.options.width), Math.min(i.Consts.ITEM_MAX_SIZE, 0.5 * this.options.height - i.Consts.PRICE_HEIGHT), (0, l.GetDepthChange)(this, i.Depths.GRANTED_ITEM)), (0, k.AddPriceElement)(this), (0, j.AddRays)(this), (0, r.InitColors)(this));
        }
        addIconLook() {
            this.parts.add.sprite(q.IconAsset).view.setScale(0.25);
        }
        updateFontSize() {
            if (!this.priceText)
                return;
            const F = this.priceText.view.text.length,
                G = 0.85 * this.options.width;
            let H = i.Consts.PRICE_TEXT_SIZE,
                I = F * H;
            const J = () => {
                I > G && (H -= 1, I = F * H, J());
            };
            J();
            const K = (0, x.default)().cameraHelper.zoom,
                L = H * K;
            this.priceText.view.setFontSize(L), this.priceText.view.setScale(1 / K);
            const M = (0, y.TextPadding)();
            this.priceText.view.setPadding(M, M, M, M);
        }
        constructor(a) {
            super(a), (0, e.default)(this, 'grayScalePipelines', []), (0, e.default)(this, 'grayScaleFactor', 0), (0, e.default)(this, 'animationSpeedFactor', 1), (0, e.default)(this, 'rays', []), (0, e.default)(this, 'cumulTime', 0), (0, e.default)(this, 'currentRaysAngle', 0), (0, e.default)(this, 'onUpdate', a => {
                if (this.cull.isInsideView) {
                    if (this.currentRaysAngle += a / 10000 * this.animationSpeedFactor, this.rays.forEach((a, b) => {
                            (0, j.UpdateRay)(this, a, b);
                        }), this.grantedImage && this.grantedImage.view) {
                        this.cumulTime += a;
                        const F = this.y - i.Consts.LEGS_HEIGHT / 2,
                            G = 5;
                        this.grantedImage.view.y = F + this.animationSpeedFactor * Math.sin(this.cumulTime / 550) * G;
                    }
                    (0, s.UpdateGrayscalePipelines)(this), (0, r.UpdateColors)(this), (0, z.default)(this);
                }
            }), (0, e.default)(this, 'onStateChange', a => {
                'active' === a && (this.state.active ? this.tweens.add({
                    targets: this,
                    grayScaleFactor: 0,
                    animationSpeedFactor: 1,
                    duration: 350
                }) : (this.grayScaleFactor = Math.max(this.grayScaleFactor, 0.00001), this.tweens.add({
                    targets: this,
                    grayScaleFactor: i.Consts.INACTIVE_GRAY_SCALE_FACTOR,
                    animationSpeedFactor: i.Consts.INACTIVE_ANIMATION_SLOW_DOWN,
                    duration: 350
                }))), 'fundedAmount' === a && (0, k.AddPriceElement)(this);
            }), (0, e.default)(this, 'onMessage', a => {
                a.key !== g.Messages.purchased && a.key !== g.Messages.funded || a && a.data && a.data.characterId && a.data.characterId === (0, t.default)() && (a.key === g.Messages.purchased && this.options.soundEnabled && (0, v.playSound)({
                    path: (0, u.default)('devices/vending_machine/purchase.mp3'),
                    volume: (0, w.getVolume)({
                        volume: 0.76,
                        type: w.SoundType.soundEffect
                    })
                }), a.key === g.Messages.funded && this.options.soundEnabled && (0, v.playSound)({
                    path: (0, u.default)('devices/vending_machine/fund.mp3'),
                    volume: (0, w.getVolume)({
                        volume: 0.8,
                        type: w.SoundType.soundEffect
                    })
                }));
            }), (0, e.default)(this, 'setupVisualEditing', () => {
                if (!(0, h.InPreGamePhase)() || !(0, B.isSavedVersion)())
                    return;
                const F = (0, C.FetchOptionSchemaProperty)(this, 'width'),
                    G = (0, C.FetchOptionSchemaProperty)(this, 'height');
                this.visualEditing.add.box({
                    width: this.options.width,
                    height: this.options.height,
                    angle: 0,
                    minWidth: F.min,
                    maxWidth: F.max,
                    minHeight: G.min,
                    maxHeight: G.max,
                    rotable: !1,
                    keepRatio: !1,
                    onChange: F => {
                        (0, D.ReplaceVisualEditingPreview)(F.x, F.y, {
                            width: F.width,
                            height: F.height
                        });
                    }
                });
            }), (0, e.default)(this, 'setupVisualEditingInvisible', () => {
                if (!(0, h.InPreGamePhase)() || !(0, B.isSavedVersion)())
                    return;
                const F = (0, C.FetchOptionSchemaProperty)(this, 'radius');
                this.visualEditing.add.circle({
                    radius: this.options.radius,
                    minRadius: F.min,
                    maxRadius: F.max,
                    rotable: !1,
                    resizable: !0,
                    onChange: F => {
                        (0, D.ReplaceVisualEditingPreview)(F.x, F.y, {
                            radius: F.radius
                        });
                    }
                });
            }), (0, h.InPreGamePhase)() && !this.options.activeOnStart && (this.animationSpeedFactor = i.Consts.INACTIVE_ANIMATION_SLOW_DOWN, this.grayScaleFactor = i.Consts.INACTIVE_GRAY_SCALE_FACTOR), (0, h.InGamePhase)() && !this.state.active && (this.animationSpeedFactor = i.Consts.INACTIVE_ANIMATION_SLOW_DOWN, this.grayScaleFactor = i.Consts.INACTIVE_GRAY_SCALE_FACTOR), this.options.visibleInGame ? this.setupVisualEditing() : this.setupVisualEditingInvisible(), (0, A.default)(this), this.options.visibleInGame ? this.options.visibleInGame && this.addFullLook() : (0, h.InPreGamePhase)() && (0, B.isSavedVersion)() ? this.addIconLook() : this.boundingBox.setHardcoded({
                width: 2 * this.options.radius,
                height: 2 * this.options.radius
            });
        }
    }
    var F = G;
}), c.register('ktQNN', function(b, c) {
    let d;
    var e;
    a(b.exports, 'GrantAction', function() {
        return d;
    }), a(b.exports, 'Messages', function() {
        return f;
    }), (e = d || (d = {})).grantItem = 'Grant Item', e.broadcastOnChannel = 'Broadcast On Channel';
    const f = {
        purchase: 'purchase',
        purchased: 'purchased',
        funded: 'funded'
    };
}), c.register('s7aO+', function(b, k) {
    a(b.exports, 'Consts', function() {
        return e;
    }), a(b.exports, 'Depths', function() {
        return f;
    }), a(b.exports, 'REQUIRED_AMOUNT_TEXT_STYLE', function() {
        return g;
    }), a(b.exports, 'InteractionMessages', function() {
        return h;
    }), a(b.exports, 'GRAYSCALE_COLORS', function() {
        return i;
    });
    var d = c('PjB0f');
    const e = {
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
        },
        f = {
            BG: 1,
            RAYS: 2,
            LEG: 3,
            INFO_BG: 4,
            INFO: 5,
            GRANTED_ITEM: 6,
            FRAME: 7
        },
        g = {
            fontSize: `${ e.PRICE_TEXT_SIZE }px`,
            fontFamily: 'Fugaz One'
        },
        h = {
            inStock: a => ({
                message: `In Stock (${ a })`,
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
            fundingStatus: {
                message: (a, b, c) => `${ (0, d.numberWithCommas)(a) }/${ (0, d.numberWithCommas)(b) } ${ c }`
            },
            defaultItemName: 'Item',
            purchaseAction: 'to purchase',
            fundingAction: 'to fund'
        },
        i = {
            ray: '#CECECE',
            bg1: '#6A6A6A',
            bg2: '#CECECE'
        };
}), c.register('oIFjt', function(b, k) {
    a(b.exports, 'AddRays', function() {
        return i;
    }), a(b.exports, 'UpdateRay', function() {
        return j;
    });
    var d = c('fe2aZ'),
        e = c('s7aO+'),
        f = c('TmkIq'),
        g = (e = c('s7aO+'), c('PCUfD')),
        h = c('pvFdX');
    const i = a => {
            const j = (0, h.GetColors)(a);
            for (let k = 0; k < a.options.numberOfRays; k++)
                a.parts.add.sprite({
                    imageId: f.RayAsset.imageId,
                    imageUrl: f.RayAsset.imageUrl,
                    y: -20,
                    originX: 0.5,
                    originY: 1,
                    ignoreInput: !0,
                    depthChange: (0, g.GetDepthChange)(a, e.Depths.RAYS),
                    onReady: k => {
                        a.rays.push(k), j(a, k, k), k.view.alpha = a.options.raysAlpha, k.view.blendMode = a.options.raysAdditive ? 1 : 0, k.view.tint = (0, d.GetNumberFromHexColor)(j.rays), k === a.options.numberOfRays - 1 && (0, h.UpdateColors)(a, !0);
                    }
                });
        },
        j = (a, b, c) => {
            const k = c * (2 * Math.PI / a.options.numberOfRays) + a.currentRaysAngle;
            b.view.rotation = k;
            const l = m,
                n = Math.atan(19.5 * a.options.raysWidthFactor / 380),
                o = a.options.width / 2,
                p = (a.options.height - e.Consts.LEGS_HEIGHT) / 2;
            const q = Math.min(Math.abs(p / Math.cos(l - n)), Math.abs(o / Math.cos(Math.PI / 2 - l - n)), Math.abs(p / Math.cos(l + n)), Math.abs(o / Math.cos(Math.PI / 2 - l + n))) / 380;
            b.view.scaleY = q, b.view.scaleX = q * a.options.raysWidthFactor;
        };
}), c.register('TmkIq', function(b, p) {
    a(b.exports, 'BgAAsset', function() {
        return e;
    }), a(b.exports, 'BgBAsset', function() {
        return f;
    }), a(b.exports, 'RayAsset', function() {
        return g;
    }), a(b.exports, 'FrameAsset', function() {
        return h;
    }), a(b.exports, 'LegAsset', function() {
        return i;
    }), a(b.exports, 'InfoAsset', function() {
        return j;
    }), a(b.exports, 'IconAsset', function() {
        return k;
    });
    var d = c('JJQ0+');
    const e = {
            imageId: 'vending_machine_bg_a',
            imageUrl: (0, d.default)('devices/vending_machine/bg_a.png')
        },
        f = {
            imageId: 'vending_machine_bg_b',
            imageUrl: (0, d.default)('devices/vending_machine/bg_b.png')
        },
        g = ((0, d.default)('devices/vending_machine/rays.png'), {
            imageId: 'vending_machine_ray',
            imageUrl: (0, d.default)('devices/vending_machine/ray.png')
        }),
        h = {
            imageId: 'vending_machine_frame',
            imageUrl: (0, d.default)('devices/vending_machine/frame.png')
        },
        i = {
            imageId: 'vending_machine_leg',
            imageUrl: (0, d.default)('devices/vending_machine/leg.png')
        },
        j = {
            imageId: 'vending_machine_info',
            imageUrl: (0, d.default)('devices/vending_machine/info.png')
        },
        k = {
            imageId: 'vending_machine_icon',
            imageUrl: (0, d.default)('devices/vending_machine/previewIcon.png')
        };
    (0, d.default)('devices/item_granter/question-mark-2.png');
}), c.register('PCUfD', function(b, p) {
    a(b.exports, 'GetDepthChange', function() {
        return e;
    });
    var d = c('Q0Vn8');
    const e = (a, b) => a.options.height / 2 + (0, d.default)(b);
}), c.register('pvFdX', function(b, p) {
    a(b.exports, 'GetColors', function() {
        return m;
    }), a(b.exports, 'InitColors', function() {
        return n;
    }), a(b.exports, 'UpdateColors', function() {
        return o;
    });
    var d = c('Ett3+'),
        e = c('idESs'),
        f = c('fe2aZ'),
        g = c('wF1dp'),
        h = c('CDq40'),
        i = c('s7aO+'),
        j = c('ktQNN');
    const k = (a, b) => {
            const l = Phaser.Display.Color.HexStringToColor(a);
            return {
                grayscale: Phaser.Display.Color.HexStringToColor(b),
                color: l
            };
        },
        l = (a, b) => {
            const m = {
                red: Math.round(Phaser.Math.Linear(a.color.red, a.grayscale.red, b)),
                green: Math.round(Phaser.Math.Linear(a.color.green, a.grayscale.green, b)),
                blue: Math.round(Phaser.Math.Linear(a.color.blue, a.grayscale.blue, b))
            };
            return (0, f.GetNumberFromHexColor)((0, h.rgbToColorString)(m));
        },
        m = a => {
            if (a.options.grantAction === j.GrantAction.grantItem && a.options.matchItemRarity) {
                const n = (0, g.FetchItemOption)(a.options.grantedItemId);
                var o;
                const p = null !== (o = null == n ? void 0 : n.rarity) && void 0 !== o ? o : e.InventoryItemRarity.common,
                    q = d.InventoryRarityColorsHex[p];
                return {
                    rays: q.a,
                    bg1: q.b,
                    bg2: q.a
                };
            }
            return {
                rays: a.options.raysColor,
                bg1: a.options.backgroundColor1,
                bg2: a.options.backgroundColor2
            };
        },
        n = a => {
            const o = m(a);
            a.raysGrayscale = k(o.rays, i.GRAYSCALE_COLORS.ray), a.bg1Grayscale = k(o.bg1, i.GRAYSCALE_COLORS.bg1), a.bg2Grayscale = k(o.bg2, i.GRAYSCALE_COLORS.bg2);
        },
        o = (a, p = !1) => {
            var q, r, s, t;
            if (a.lastGrayscaleFactorUpdate === a.grayScaleFactor && !p)
                return;
            a.lastGrayscaleFactorUpdate = a.grayScaleFactor, a.raysGrayscale || n(a);
            const u = l(a.raysGrayscale, a.grayScaleFactor),
                v = l(a.bg1Grayscale, a.grayScaleFactor),
                w = l(a.bg2Grayscale, a.grayScaleFactor);
            a.rays.forEach(a => {
                a.view.tint = u;
            }), null === (q = a.bg1) || void 0 === q || null === (r = q.view) || void 0 === r || r.setTint(v), null === (s = a.bg2) || void 0 === s || null === (t = s.view) || void 0 === t || t.setTint(w);
        };
}), c.register('89ZVe', function(b, m) {
    a(b.exports, 'AddPriceElement', function() {
        return j;
    });
    var d = c('s7aO+'),
        e = c('TmkIq'),
        f = (d = c('s7aO+'), c('PCUfD')),
        g = c('TK0dC'),
        h = c('crVjo2'),
        i = c('bC5MZ');
    const j = a => {
        if (!a.options.visibleInGame)
            return;
        const k = a.options.height / 2 - 90;
        a.priceAreaInfoRectangle || (a.priceAreaInfoRectangle = a.parts.add.sprite({
            ...e.InfoAsset,
            y: k,
            depthChange: (0, f.GetDepthChange)(a, d.Depths.INFO_BG)
        })), (0, h.default)({
            familyName: d.REQUIRED_AMOUNT_TEXT_STYLE.fontFamily,
            onLoad: () => {
                const l = (0, i.default)(a);
                if (a.priceText)
                    a.priceText.view.setText(l);
                else {
                    const m = a.parts.add.text({
                        text: (0, i.default)(a),
                        y: k,
                        depthChange: (0, f.GetDepthChange)(a, d.Depths.INFO),
                        textStyle: d.REQUIRED_AMOUNT_TEXT_STYLE
                    });
                    a.priceText = m;
                }
                a.updateFontSize();
                const m = d.Consts.REQUIRED_ITEM_MAX_SIZE,
                    n = l => {
                        l.view.y = a.y + k;
                        const o = a.priceText.getBounds().width,
                            p = m + o + 7;
                        l.view.x = -p / 2 + m / 2 + a.x, a.priceText.view.x = p / 2 - o / 2 + a.x;
                    };
                a.requiredImage ? n(a.requiredImage) : a.requiredImage = (0, g.AddItemImage)(a, a.options.requiredItemId, m, 0.8 * d.Consts.PRICE_HEIGHT, d.Depths.INFO, a => {
                    n(a);
                });
            }
        });
    };
}), c.register('TK0dC', function(b, d) {
    a(b.exports, 'AddItemImage', function() {
        return j;
    });
    var d = c('7Sbqr'),
        e = c('Mr5c3'),
        f = c('so9lE'),
        g = c('Sbl6W'),
        h = c('PCUfD'),
        i = c('FPQII');
    const j = (a, b, c, d, j, o) => {
        const k = {
            ...g.UnknownItemAsset
        };
        if (b) {
            const l = d.default.worldOptions.itemOptions.find(l => l.id === b);
            l && (k.imageId = l.id, k.imageUrl = l.previewImage);
        }
        const l = (0, e.default)(k.imageId),
            m = (0, f.default)({
                height: l.height,
                width: l.width,
                newWidth: d,
                newHeight: c
            });
        return a.parts.add.sprite({
            imageId: k.imageId,
            imageUrl: k.imageUrl,
            depthChange: (0, h.GetDepthChange)(a, j),
            displayWidth: m.width,
            displayHeight: m.height,
            onReady: b => {
                a.grayScaleFactor > 0 && (0, i.AddGrayscalePipeline)(a, b), o && o(b);
            }
        });
    };
}), c.register('Sbl6W', function(b, d) {
    a(b.exports, 'BaseAsset', function() {
        return e;
    }), a(b.exports, 'UnknownItemAsset', function() {
        return f;
    });
    var d = c('JJQ0+');
    const e = {
            imageId: (0, d.default)('devices/item_granter/base.png'),
            imageUrl: (0, d.default)('devices/item_granter/base.png')
        },
        f = {
            imageId: '__UNKNOWN_ITEM',
            imageUrl: (0, d.default)('devices/item_granter/question-mark-2.png')
        };
}), c.register('FPQII', function(b, c) {
    a(b.exports, 'AddGrayscalePipeline', function() {
        return d;
    }), a(b.exports, 'UpdateGrayscalePipelines', function() {
        return f;
    });
    const d = (a, b) => {
            a.grayScalePipelines.push(a.scene.plugins.get('rexGrayScalePipeline').add(b.view, {
                intensity: a.grayScaleFactor
            }));
        },
        e = (a, b) => {
            a.scene.plugins.get('rexGrayScalePipeline').remove(b.view);
        },
        f = a => {
            a.grayScaleFactor > 0 ? ((a => {
                var g, h;
                a.grayScalePipelines.length > 0 || ((null === (g = a.requiredImage) || void 0 === g ? void 0 : g.view) && d(a, a.requiredImage), (null === (h = a.grantedImage) || void 0 === h ? void 0 : h.view) && d(a, a.grantedImage));
            })(a), a.grayScalePipelines.forEach(b => {
                b.intensity = a.grayScaleFactor;
            })) : (a => {
                var g, h;
                0 !== a.grayScalePipelines.length && ((null === (g = a.requiredImage) || void 0 === g ? void 0 : g.view) && e(a, a.requiredImage), (null === (h = a.grantedImage) || void 0 === h ? void 0 : h.view) && e(a, a.grantedImage), a.grayScalePipelines = []);
            })(a);
        };
}), c.register('crVjo2', function(i, d) {
    a(i.exports, 'isGoogleFontLoaded', function() {
        return f;
    }), a(i.exports, 'default', function() {
        return g;
    });
    var d = c('2qGsE');
    const e = [],
        f = a => e.includes(a);
    var g = a => {
        const {
            familyName: h,
            onLoad: i
        } = j;
        e.includes(h) ? i && i() : b(d).load({
            google: {
                families: [`${ h }:400,700`]
            },
            fontactive: j => {
                e.includes(j) || e.push(j), h === j && i && i();
            }
        });
    };
}), c.register('bC5MZ', function(b, m) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('PjB0f'),
        e = c('3Rm+3');
    var f = a => {
        let g = `${ (0, d.numberWithCommas)((0, e.GetCost)(a)) }`;
        return a.options.allowFunding ? `${ (0, d.numberWithCommas)(a.state.fundedAmount || 0) } / ${ g }` : g;
    };
}), c.register('3Rm+3', function(b, m) {
    a(b.exports, 'GetCost', function() {
        return e;
    });
    var d = c('5Ux1a');
    const e = a => {
        return (0, d.InPreGamePhase)() ? a.options.amountOfRequiredItem : null !== (b = a.state.cost) && void 0 !== b ? b : a.options.amountOfRequiredItem;
        var f;
    };
}), c.register('hbu+b', function(b, m) {
    a(b.exports, 'AddMachineBody', function() {
        return j;
    });
    var d = c('fe2aZ'),
        e = c('TmkIq'),
        f = c('s7aO+'),
        g = c('pvFdX'),
        h = c('PCUfD'),
        i = c('HMNV0');
    const j = a => {
        const k = -f.Consts.LEGS_HEIGHT / 2,
            l = {
                displayWidth: a.options.width - 20,
                displayHeight: a.options.height - 20 - f.Consts.LEGS_HEIGHT,
                depthChange: (0, h.GetDepthChange)(a, f.Depths.BG),
                y: k
            };
        a.options.showShadow && !(0, i.isPlatformer)() && a.shadows.add({
            r1: a.options.width / 2 + 20,
            r2: 60,
            y: a.options.height / 2 - 20
        });
        const m = (0, g.GetColors)(a);
        a.parts.add.sprite({
            ...e.BgAAsset,
            ...l,
            onReady: k => {
                a.bg1 = k, k.view.setTint((0, d.GetNumberFromHexColor)(m.bg1)), (0, g.UpdateColors)(a, !0);
            }
        }), a.parts.add.sprite({
            ...e.BgBAsset,
            ...l,
            ignoreInput: !0,
            onReady: k => {
                a.bg2 = k, k.view.setTint((0, d.GetNumberFromHexColor)(m.bg2)), (0, g.UpdateColors)(a, !0);
            }
        });
        const n = {
                ...e.LegAsset,
                y: a.options.height / 2 + k - 2,
                depthChange: (0, h.GetDepthChange)(a, f.Depths.LEG)
            },
            o = -a.options.width / 2 + 60;
        a.parts.add.sprite({
            ...n,
            x: o
        }), a.parts.add.sprite({
            ...n,
            x: -o,
            flipX: !0
        });
        const p = f.Consts.FRAME_MARGINS_NINE_SLICE;
        a.parts.add.ninePatch({
            columns: [
                p,
                p
            ],
            rows: [
                p,
                p
            ],
            y: k,
            scale: f.Consts.FRAME_SCALE,
            height: a.options.height - f.Consts.LEGS_HEIGHT,
            width: a.options.width,
            depthChange: (0, h.GetDepthChange)(a, f.Depths.FRAME),
            imageUrl: e.FrameAsset.imageUrl
        });
    };
}), c.register('gWXN2', function(b, l) {
    a(b.exports, 'AddColliders', function() {
        return e;
    });
    var d = c('s7aO+');
    const e = a => {
        a.colliders.add.box({
            x: 0,
            y: 5 - d.Consts.LEGS_HEIGHT + d.Consts.LEGS_HEIGHT / 2,
            w: a.options.width,
            h: a.options.height - d.Consts.LEGS_HEIGHT + 10
        });
    };
}), c.register('Aty9y', function(b, l) {
    a(b.exports, 'AddImageFromUrl', function() {
        return j;
    });
    var d = c('Mr5c3'),
        e = c('so9lE'),
        f = c('s7aO+'),
        g = c('PCUfD'),
        h = c('FPQII'),
        i = c('hpAcY');
    const j = a => {
        const k = (0, i.GetImageUrl)(a.options.grantedItemImageUrl);
        return a.parts.add.sprite({
            imageId: k,
            imageUrl: k,
            y: -f.Consts.LEGS_HEIGHT / 2,
            depthChange: (0, g.GetDepthChange)(a, f.Depths.GRANTED_ITEM),
            onReady: c => {
                const l = (0, d.default)(k),
                    m = (0, e.default)({
                        height: l.height,
                        width: l.width,
                        newWidth: Math.min(f.Consts.ITEM_MAX_SIZE, 0.7 * a.options.width),
                        newHeight: Math.min(f.Consts.ITEM_MAX_SIZE, 0.4 * a.options.height - f.Consts.PRICE_HEIGHT)
                    });
                c.view.setDisplaySize(m.width, m.height), a.grayScaleFactor > 0 && (0, h.AddGrayscalePipeline)(a, c);
            }
        });
    };
}), c.register('qxeBa0', function(b, c) {
    a(b.exports, 'TextPadding', function() {
        return d;
    });
    const d = () => 4;
}), c.register('aePN4', function(b, n) {
    a(b.exports, 'default', function() {
        return l;
    });
    var d = c('6pLip'),
        e = c('totz4'),
        f = c('uHgaJ'),
        g = c('IFImv'),
        h = c('EagVW'),
        i = c('/pv5/'),
        j = c('ugvdi'),
        k = c('tLl4R');
    var l = (a, b) => {
        if ((0, j.default)(a))
            return void a.interactiveZones.setForceDisabled(!0);
        if (a.interactiveZones.setForceDisabled(!1), !(0, d.IsCurrentInteractive)(a.id) && !b)
            return;
        const m = (0, k.default)(a),
            n = {
                message: (0, i.default)(a),
                action: (0, e.default)(a),
                topHeader: null == m ? void 0 : m.text,
                topHeaderColor: null == m ? void 0 : m.color,
                bottomHeader: (0, g.default)(a),
                duration: (0, h.default)(a),
                allowedToInteract: (0, f.default)(a)
            };
        a.interactiveZones.setInfo(n);
    };
}), c.register('6pLip', function(b, d) {
    a(b.exports, 'IsCurrentInteractive', function() {
        return e;
    });
    var d = c('dAmf5');
    const e = a => {
        var f;
        return (null === (f = (0, d.default)().worldManager.devices.interactives.currentDevice) || void 0 === f ? void 0 : f.id) === a;
    };
}), c.register('totz4', function(b, d) {
    a(b.exports, 'default', function() {
        return g;
    });
    var d = c('s7aO+'),
        e = c('kbZwa'),
        f = c('Cct/B');
    var g = a => {
        const h = (0, e.VendingMachineDeviceAmountRequiredToPurchase)(a),
            i = (0, e.VendingMachineDeviceAmountOfRequiredItemIHave)(a);
        return (0, f.VendingMachineDeviceFundingIsEnabled)(a) && i < h ? d.InteractionMessages.fundingAction : d.InteractionMessages.purchaseAction;
    };
}), c.register('kbZwa', function(b, d) {
    a(b.exports, 'VendingMachineDeviceAmountRequiredToPurchase', function() {
        return g;
    }), a(b.exports, 'VendingMachineDeviceAmountOfRequiredItemIHave', function() {
        return h;
    });
    var d = c('7Sbqr'),
        e = c('3Rm+3'),
        f = c('Cct/B');
    const g = a => Math.max(0, (0, e.GetCost)(a) - ((0, f.VendingMachineDeviceFundingIsEnabled)(a) && a.state.fundedAmount || 0)),
        h = a => {
            let i = 0;
            const j = d.default.me.inventory.slots.get(a.options.requiredItemId);
            return j && (i = j.amount), i;
        };
}), c.register('Cct/B', function(b, c) {
    a(b.exports, 'VendingMachineDeviceFundingIsEnabled', function() {
        return d;
    });
    const d = a => a.options.allowFunding;
}), c.register('uHgaJ', function(b, d) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('kbZwa'),
        e = c('Cct/B');
    var f = a => {
        if (!a.state.active)
            return !1;
        if (a.options.useLimitedStock && a.state.currentStock <= 0)
            return !1;
        const g = (0, d.VendingMachineDeviceAmountRequiredToPurchase)(a),
            h = (0, d.VendingMachineDeviceAmountOfRequiredItemIHave)(a);
        return (0, e.VendingMachineDeviceFundingIsEnabled)(a) ? !!h : !(h < g);
    };
}), c.register('IFImv', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = a => {
        var e;
        const f = null === (e = a.options.grantedItemDescription) || void 0 === e ? void 0 : e.trim();
        if (null == f ? void 0 : f.length)
            return f;
    };
}), c.register('EagVW', function(b, l) {
    a(b.exports, 'default', function() {
        return e;
    });
    var d = c('kbZwa');
    var e = a => {
        const f = (0, d.VendingMachineDeviceAmountOfRequiredItemIHave)(a);
        return (0, d.VendingMachineDeviceAmountOfRequiredItemIHave)(a) >= f ? a.options.interactionDuration : 1;
    };
}), c.register('/pv5/', function(b, l) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('PjB0f'),
        e = c('bBQb9'),
        f = c('s7aO+'),
        g = c('ktQNN'),
        h = c('3Rm+3');
    var i = a => {
        var j;
        let k = null === (j = a.options.grantedItemName) || void 0 === j ? void 0 : j.trim();
        return k || a.options.grantAction !== g.GrantAction.grantItem || (k = (0, e.ItemName)(a.options.grantedItemId)), k || (k = f.InteractionMessages.defaultItemName), a.options.grantAction === g.GrantAction.grantItem && !a.options.visibleInGame && a.options.attachCostToNameWhenHidden && a.options.requiredItemId && (0, h.GetCost)(a) ? `${ k } - ${ (0, d.numberWithCommas)(a.options.amountOfRequiredItem) } ${ (0, e.ItemName)(a.options.requiredItemId) }` : k;
    };
}), c.register('ugvdi', function(b, l) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('O1hRg'),
        e = c('julgI');
    var f = a => !a.options.visibleInGame && !a.state.active || !(!a.options.allowedPurchaseTeam || a.options.allowedPurchaseTeam === d.ANY_TEAM_DEVICE_OPTION || (0, e.default)() === a.options.allowedPurchaseTeam);
}), c.register('tLl4R', function(b, l) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('bBQb9'),
        e = c('s7aO+'),
        f = c('3Rm+3'),
        g = c('kbZwa'),
        h = c('Cct/B');
    var i = a => {
        if (!a.state.active)
            return {
                text: e.InteractionMessages.notAvailable.message,
                color: e.InteractionMessages.notAvailable.color
            };
        if (a.options.useLimitedStock && a.state.currentStock <= 0)
            return {
                text: e.InteractionMessages.outOfStock.message,
                color: e.InteractionMessages.outOfStock.color
            };
        const j = (0, g.VendingMachineDeviceAmountRequiredToPurchase)(a),
            k = (0, g.VendingMachineDeviceAmountOfRequiredItemIHave)(a),
            l = (0, h.VendingMachineDeviceFundingIsEnabled)(a);
        return k < j && !l ? {
            text: e.InteractionMessages.notEnoughRequiredItem.message,
            color: e.InteractionMessages.notEnoughRequiredItem.color
        } : a.options.useLimitedStock ? {
            text: e.InteractionMessages.inStock(a.state.currentStock).message,
            color: e.InteractionMessages.inStock(a.state.currentStock).color
        } : l ? {
            text: e.InteractionMessages.fundingStatus.message(a.state.fundedAmount || 0, (0, f.GetCost)(a), (0, d.ItemName)(a.options.requiredItemId))
        } : {};
    };
}), c.register('bu4o6', function(b, d) {
    a(b.exports, 'default', function() {
        return g;
    });
    var d = c('5Ux1a'),
        e = c('ktQNN'),
        f = c('aePN4');
    var g = a => {
        (0, d.InPreGamePhase)() || (a.options.visibleInGame ? a.interactiveZones.add.rect({
            y: 25,
            width: a.options.width + 150,
            height: a.options.height + 150
        }) : a.interactiveZones.add.circle({
            r: a.options.radius
        }), a.interactiveZones.setCanInteractThroughColliders(!0), a.interactiveZones.onInteraction = () => {
            a.sendToServerDevice(e.Messages.purchase);
        }, a.interactiveZones.onInteractiveCb = () => {
            (0, f.default)(a, !0);
        });
    };
}), c.register('/Lvpl17', function(b, c) {
    a(b.exports, 'FetchOptionSchemaProperty', function() {
        return d;
    });
    const d = (a, b) => {
        var e, f, g;
        const h = a.deviceOption.optionSchema.options.find(a => a.key === b);
        return {
            min: null === (e = null == h ? void 0 : h.option.props) || void 0 === e ? void 0 : e.min,
            max: null === (f = null == h ? void 0 : h.option.props) || void 0 === f ? void 0 : f.max,
            step: null === (g = null == h ? void 0 : h.option.props) || void 0 === g ? void 0 : g.step
        };
    };
}), c.register('wSwKo5', function(b, i) {
    a(b.exports, 'ReplaceVisualEditingPreview', function() {
        return h;
    });
    var d = c('2pEsK'),
        e = c('Am0b71'),
        f = c('KDS1x'),
        g = c('83+vO');
    const h = (a, b, c) => {
        const i = (0, g.FetchVisualEditingPreview)(),
            j = (0, f.FetchCurrentlyEditedDevice)();
        if (!j || !i)
            return;
        const k = j.layers.isOnNaturalDepth() ? void 0 : b + j.layers.getDepthShift();
        (0, e.default)({
            deviceOption: i.deviceOption,
            id: d.VisualEditingConstants.previewId,
            x: a,
            y: b,
            depth: k,
            layerId: j.layers.getLayer(),
            name: i.name,
            isPreview: !0,
            options: {
                ...i.options,
                ...c
            },
            placedByClient: !0,
            state: i.deviceOption.defaultState
        });
    };
}), c.register('Am0b71', function(b, i) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('dAmf5'),
        e = c('jgFbX');
    var f = a => {
        (0, d.default)().worldManager.devices.getDeviceById(a.id) && (0, e.default)(a);
    };
});