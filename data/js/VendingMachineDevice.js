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
c.register('xgS1i', function(d, e) {
    var f;
    f = d.exports, Object.defineProperty(f, '__esModule', {
        value: !0,
        configurable: !0
    }), a(d.exports, 'default', function() {
        return _H;
    });
    var g = c('s/YA9'),
        h = c('ltxDW'),
        i = c('iH+cr'),
        j = c('UkCpC'),
        k = c('3Fknw'),
        l = c('ndxRd'),
        m = c('colFa'),
        n = c('0EMo0'),
        o = c('X7kIM'),
        p = c('omrib'),
        q = c('K2ru3'),
        r = c('QyPlq'),
        s = c('TkEMW'),
        t = c('pMcSb'),
        u = c('QwL62'),
        v = c('5Fjxs'),
        w = c('UaUBz0'),
        x = c('3jaMj'),
        y = c('CbU7r'),
        z = c('heTaO'),
        A = c('lnsH90'),
        B = c('GpPqI'),
        C = c('56Ofo'),
        D = c('hycyg'),
        E = c('uc4mA17'),
        F = c('u/WlI21');
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
            const H = this.priceText.view.text.length,
                I = 0.85 * this.options.width;
            let J = k.Consts.PRICE_TEXT_SIZE,
                K = H * J;
            const L = () => {
                K > I && (J -= 1, K = H * J, L());
            };
            L();
            const M = (0, z.default)().cameraHelper.zoom,
                N = J * M;
            this.priceText.view.setFontSize(N), this.priceText.view.setScale(1 / M);
            const O = (0, A.TextPadding)();
            this.priceText.view.setPadding(O, O, O, O);
        }
        constructor(H) {
            super(H), (0, g.default)(this, 'grayScalePipelines', []), (0, g.default)(this, 'grayScaleFactor', 0), (0, g.default)(this, 'animationSpeedFactor', 1), (0, g.default)(this, 'rays', []), (0, g.default)(this, 'cumulTime', 0), (0, g.default)(this, 'currentRaysAngle', 0), (0, g.default)(this, 'onUpdate', H => {
                if (this.cull.isInsideView) {
                    if (this.currentRaysAngle += H / 10000 * this.animationSpeedFactor, this.rays.forEach((H, d) => {
                            (0, l.UpdateRay)(this, H, d);
                        }), this.grantedImage && this.grantedImage.view) {
                        this.cumulTime += H;
                        const I = this.y - k.Consts.LEGS_HEIGHT / 2,
                            J = 5;
                        this.grantedImage.view.y = I + this.animationSpeedFactor * Math.sin(this.cumulTime / 550) * J;
                    }
                    (0, u.UpdateGrayscalePipelines)(this), (0, t.UpdateColors)(this), (0, B.default)(this);
                }
            }), (0, g.default)(this, 'onStateChange', H => {
                'active' === H && (this.state.active ? this.tweens.add({
                    targets: this,
                    grayScaleFactor: 0,
                    animationSpeedFactor: 1,
                    duration: 350
                }) : (this.grayScaleFactor = Math.max(this.grayScaleFactor, 0.00001), this.tweens.add({
                    targets: this,
                    grayScaleFactor: k.Consts.INACTIVE_GRAY_SCALE_FACTOR,
                    animationSpeedFactor: k.Consts.INACTIVE_ANIMATION_SLOW_DOWN,
                    duration: 350
                }))), 'fundedAmount' === H && (0, m.AddPriceElement)(this);
            }), (0, g.default)(this, 'onMessage', H => {
                H.key !== i.Messages.purchased && H.key !== i.Messages.funded || H && H.data && H.data.characterId && H.data.characterId === (0, v.default)() && (H.key === i.Messages.purchased && this.options.soundEnabled && (0, x.playSound)({
                    path: (0, w.default)('devices/vending_machine/purchase.mp3'),
                    volume: (0, y.getVolume)({
                        volume: 0.76,
                        type: y.SoundType.soundEffect
                    })
                }), H.key === i.Messages.funded && this.options.soundEnabled && (0, x.playSound)({
                    path: (0, w.default)('devices/vending_machine/fund.mp3'),
                    volume: (0, y.getVolume)({
                        volume: 0.8,
                        type: y.SoundType.soundEffect
                    })
                }));
            }), (0, g.default)(this, 'setupVisualEditing', () => {
                if (!(0, j.InPreGamePhase)() || !(0, D.isSavedVersion)())
                    return;
                const I = (0, E.FetchOptionSchemaProperty)(this, 'width'),
                    J = (0, E.FetchOptionSchemaProperty)(this, 'height');
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
                    onChange: I => {
                        (0, F.ReplaceVisualEditingPreview)(I.x, I.y, {
                            width: I.width,
                            height: I.height
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
                    onChange: I => {
                        (0, F.ReplaceVisualEditingPreview)(I.x, I.y, {
                            radius: I.radius
                        });
                    }
                });
            }), (0, j.InPreGamePhase)() && !this.options.activeOnStart && (this.animationSpeedFactor = k.Consts.INACTIVE_ANIMATION_SLOW_DOWN, this.grayScaleFactor = k.Consts.INACTIVE_GRAY_SCALE_FACTOR), (0, j.InGamePhase)() && !this.state.active && (this.animationSpeedFactor = k.Consts.INACTIVE_ANIMATION_SLOW_DOWN, this.grayScaleFactor = k.Consts.INACTIVE_GRAY_SCALE_FACTOR), this.options.visibleInGame ? this.setupVisualEditing() : this.setupVisualEditingInvisible(), (0, C.default)(this), this.options.visibleInGame ? this.options.visibleInGame && this.addFullLook() : (0, j.InPreGamePhase)() && (0, D.isSavedVersion)() ? this.addIconLook() : this.boundingBox.setHardcoded({
                width: 2 * this.options.radius,
                height: 2 * this.options.radius
            });
        }
    }
    var _H = G;
}), c.register('iH+cr', function(d, e) {
    let f;
    var g;
    a(d.exports, 'GrantAction', function() {
        return f;
    }), a(d.exports, 'Messages', function() {
        return _h;
    }), (g = f || (f = {})).grantItem = 'Grant Item', g.broadcastOnChannel = 'Broadcast On Channel';
    const _h = {
        purchase: 'purchase',
        purchased: 'purchased',
        funded: 'funded'
    };
}), c.register('3Fknw', function(d, e) {
    a(d.exports, 'Consts', function() {
        return _g;
    }), a(d.exports, 'Depths', function() {
        return _h;
    }), a(d.exports, 'REQUIRED_AMOUNT_TEXT_STYLE', function() {
        return _i;
    }), a(d.exports, 'InteractionMessages', function() {
        return _j;
    }), a(d.exports, 'GRAYSCALE_COLORS', function() {
        return _k;
    });
    var f = c('quE27');
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
        },
        _h = {
            BG: 1,
            RAYS: 2,
            LEG: 3,
            INFO_BG: 4,
            INFO: 5,
            GRANTED_ITEM: 6,
            FRAME: 7
        },
        _i = {
            fontSize: `${ _g.PRICE_TEXT_SIZE }px`,
            fontFamily: 'Fugaz One'
        },
        _j = {
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
                message: (a, d, c) => `${ (0, f.numberWithCommas)(a) }/${ (0, f.numberWithCommas)(d) } ${ c }`
            },
            defaultItemName: 'Item',
            purchaseAction: 'to purchase',
            fundingAction: 'to fund'
        },
        _k = {
            ray: '#CECECE',
            bg1: '#6A6A6A',
            bg2: '#CECECE'
        };
}), c.register('ndxRd', function(d, e) {
    a(d.exports, 'AddRays', function() {
        return _k;
    }), a(d.exports, 'UpdateRay', function() {
        return _l;
    });
    var f = c('cNVx1'),
        g = c('3Fknw'),
        h = c('TkEMW'),
        i = (g = c('3Fknw'), c('0EMo0')),
        j = c('pMcSb');
    const _k = a => {
            const l = (0, j.GetColors)(a);
            for (let m = 0; m < a.options.numberOfRays; m++)
                a.parts.add.sprite({
                    imageId: h.RayAsset.imageId,
                    imageUrl: h.RayAsset.imageUrl,
                    y: -20,
                    originX: 0.5,
                    originY: 1,
                    ignoreInput: !0,
                    depthChange: (0, i.GetDepthChange)(a, g.Depths.RAYS),
                    onReady: e => {
                        a.rays.push(e), _l(a, e, m), e.view.alpha = a.options.raysAlpha, e.view.blendMode = a.options.raysAdditive ? 1 : 0, e.view.tint = (0, f.GetNumberFromHexColor)(l.rays), m === a.options.numberOfRays - 1 && (0, j.UpdateColors)(a, !0);
                    }
                });
        },
        _l = (a, d, c) => {
            const m = c * (2 * Math.PI / a.options.numberOfRays) + a.currentRaysAngle;
            d.view.rotation = m;
            const n = m,
                o = Math.atan(19.5 * a.options.raysWidthFactor / 380),
                p = a.options.width / 2,
                q = (a.options.height - g.Consts.LEGS_HEIGHT) / 2;
            const r = Math.min(Math.abs(q / Math.cos(n - o)), Math.abs(p / Math.cos(Math.PI / 2 - n - o)), Math.abs(q / Math.cos(n + o)), Math.abs(p / Math.cos(Math.PI / 2 - n + o))) / 380;
            d.view.scaleY = r, d.view.scaleX = r * a.options.raysWidthFactor;
        };
}), c.register('TkEMW', function(d, e) {
    a(d.exports, 'BgAAsset', function() {
        return _g;
    }), a(d.exports, 'BgBAsset', function() {
        return _h;
    }), a(d.exports, 'RayAsset', function() {
        return _i;
    }), a(d.exports, 'FrameAsset', function() {
        return _j;
    }), a(d.exports, 'LegAsset', function() {
        return _k;
    }), a(d.exports, 'InfoAsset', function() {
        return _l;
    }), a(d.exports, 'IconAsset', function() {
        return _m;
    });
    var f = c('UaUBz0');
    const _g = {
            imageId: 'vending_machine_bg_a',
            imageUrl: (0, f.default)('devices/vending_machine/bg_a.png')
        },
        _h = {
            imageId: 'vending_machine_bg_b',
            imageUrl: (0, f.default)('devices/vending_machine/bg_b.png')
        },
        _i = ((0, f.default)('devices/vending_machine/rays.png'), {
            imageId: 'vending_machine_ray',
            imageUrl: (0, f.default)('devices/vending_machine/ray.png')
        }),
        _j = {
            imageId: 'vending_machine_frame',
            imageUrl: (0, f.default)('devices/vending_machine/frame.png')
        },
        _k = {
            imageId: 'vending_machine_leg',
            imageUrl: (0, f.default)('devices/vending_machine/leg.png')
        },
        _l = {
            imageId: 'vending_machine_info',
            imageUrl: (0, f.default)('devices/vending_machine/info.png')
        },
        _m = {
            imageId: 'vending_machine_icon',
            imageUrl: (0, f.default)('devices/vending_machine/previewIcon.png')
        };
    (0, f.default)('devices/item_granter/question-mark-2.png');
}), c.register('0EMo0', function(d, e) {
    a(d.exports, 'GetDepthChange', function() {
        return _g;
    });
    var f = c('H4eGM');
    const _g = (a, d) => a.options.height / 2 + (0, f.default)(d);
}), c.register('pMcSb', function(d, e) {
    a(d.exports, 'GetColors', function() {
        return _o;
    }), a(d.exports, 'InitColors', function() {
        return _p;
    }), a(d.exports, 'UpdateColors', function() {
        return _q;
    });
    var f = c('BYiVP'),
        g = c('4eTy+'),
        h = c('cNVx1'),
        i = c('OsQuU'),
        j = c('SAYZy'),
        k = c('3Fknw'),
        l = c('iH+cr');
    const m = (a, d) => {
            const n = Phaser.Display.Color.HexStringToColor(a);
            return {
                grayscale: Phaser.Display.Color.HexStringToColor(d),
                color: n
            };
        },
        n = (a, d) => {
            const o = {
                red: Math.round(Phaser.Math.Linear(a.color.red, a.grayscale.red, d)),
                green: Math.round(Phaser.Math.Linear(a.color.green, a.grayscale.green, d)),
                blue: Math.round(Phaser.Math.Linear(a.color.blue, a.grayscale.blue, d))
            };
            return (0, h.GetNumberFromHexColor)((0, j.rgbToColorString)(o));
        },
        _o = a => {
            if (a.options.grantAction === l.GrantAction.grantItem && a.options.matchItemRarity) {
                const p = (0, i.FetchItemOption)(a.options.grantedItemId);
                var q;
                const r = null !== (q = null == p ? void 0 : p.rarity) && void 0 !== q ? q : g.InventoryItemRarity.common,
                    s = f.InventoryRarityColorsHex[r];
                return {
                    rays: s.a,
                    bg1: s.b,
                    bg2: s.a
                };
            }
            return {
                rays: a.options.raysColor,
                bg1: a.options.backgroundColor1,
                bg2: a.options.backgroundColor2
            };
        },
        _p = a => {
            const q = _o(a);
            a.raysGrayscale = m(q.rays, k.GRAYSCALE_COLORS.ray), a.bg1Grayscale = m(q.bg1, k.GRAYSCALE_COLORS.bg1), a.bg2Grayscale = m(q.bg2, k.GRAYSCALE_COLORS.bg2);
        },
        _q = (a, r = !1) => {
            var s, t, u, v;
            if (a.lastGrayscaleFactorUpdate === a.grayScaleFactor && !r)
                return;
            a.lastGrayscaleFactorUpdate = a.grayScaleFactor, a.raysGrayscale || _p(a);
            const w = n(a.raysGrayscale, a.grayScaleFactor),
                x = n(a.bg1Grayscale, a.grayScaleFactor),
                y = n(a.bg2Grayscale, a.grayScaleFactor);
            a.rays.forEach(a => {
                a.view.tint = w;
            }), null === (s = a.bg1) || void 0 === s || null === (t = s.view) || void 0 === t || t.setTint(x), null === (u = a.bg2) || void 0 === u || null === (v = u.view) || void 0 === v || v.setTint(y);
        };
}), c.register('colFa', function(d, e) {
    a(d.exports, 'AddPriceElement', function() {
        return _l;
    });
    var f = c('3Fknw'),
        g = c('TkEMW'),
        h = (f = c('3Fknw'), c('0EMo0')),
        i = c('QyPlq'),
        j = c('bMaPZ2'),
        k = c('UgeNz');
    const _l = a => {
        if (!a.options.visibleInGame)
            return;
        const m = a.options.height / 2 - 90;
        a.priceAreaInfoRectangle || (a.priceAreaInfoRectangle = a.parts.add.sprite({
            ...g.InfoAsset,
            y: m,
            depthChange: (0, h.GetDepthChange)(a, f.Depths.INFO_BG)
        })), (0, j.default)({
            familyName: f.REQUIRED_AMOUNT_TEXT_STYLE.fontFamily,
            onLoad: () => {
                const n = (0, k.default)(a);
                if (a.priceText)
                    a.priceText.view.setText(n);
                else {
                    const o = a.parts.add.text({
                        text: (0, k.default)(a),
                        y: m,
                        depthChange: (0, h.GetDepthChange)(a, f.Depths.INFO),
                        textStyle: f.REQUIRED_AMOUNT_TEXT_STYLE
                    });
                    a.priceText = o;
                }
                a.updateFontSize();
                const o = f.Consts.REQUIRED_ITEM_MAX_SIZE,
                    p = n => {
                        n.view.y = a.y + m;
                        const q = a.priceText.getBounds().width,
                            r = o + q + 7;
                        n.view.x = -r / 2 + o / 2 + a.x, a.priceText.view.x = r / 2 - q / 2 + a.x;
                    };
                a.requiredImage ? p(a.requiredImage) : a.requiredImage = (0, i.AddItemImage)(a, a.options.requiredItemId, o, 0.8 * f.Consts.PRICE_HEIGHT, f.Depths.INFO, a => {
                    p(a);
                });
            }
        });
    };
}), c.register('QyPlq', function(d, e) {
    a(d.exports, 'AddItemImage', function() {
        return _l;
    });
    var f = c('fI6of'),
        g = c('+7143'),
        h = c('bwSO3'),
        i = c('T6zrb'),
        j = c('0EMo0'),
        k = c('QwL62');
    const _l = (a, d, c, e, _l, _q) => {
        const m = {
            ...i.UnknownItemAsset
        };
        if (d) {
            const n = f.default.worldOptions.itemOptions.find(n => n.id === d);
            n && (m.imageId = n.id, m.imageUrl = n.previewImage);
        }
        const n = (0, g.default)(m.imageId),
            o = (0, h.default)({
                height: n.height,
                width: n.width,
                newWidth: e,
                newHeight: c
            });
        return a.parts.add.sprite({
            imageId: m.imageId,
            imageUrl: m.imageUrl,
            depthChange: (0, j.GetDepthChange)(a, _l),
            displayWidth: o.width,
            displayHeight: o.height,
            onReady: d => {
                a.grayScaleFactor > 0 && (0, k.AddGrayscalePipeline)(a, d), _q && _q(d);
            }
        });
    };
}), c.register('T6zrb', function(d, e) {
    a(d.exports, 'BaseAsset', function() {
        return _g;
    }), a(d.exports, 'UnknownItemAsset', function() {
        return _h;
    });
    var f = c('UaUBz0');
    const _g = {
            imageId: (0, f.default)('devices/item_granter/base.png'),
            imageUrl: (0, f.default)('devices/item_granter/base.png')
        },
        _h = {
            imageId: '__UNKNOWN_ITEM',
            imageUrl: (0, f.default)('devices/item_granter/question-mark-2.png')
        };
}), c.register('QwL62', function(d, e) {
    a(d.exports, 'AddGrayscalePipeline', function() {
        return _f;
    }), a(d.exports, 'UpdateGrayscalePipelines', function() {
        return _h;
    });
    const _f = (a, d) => {
            a.grayScalePipelines.push(a.scene.plugins.get('rexGrayScalePipeline').add(d.view, {
                intensity: a.grayScaleFactor
            }));
        },
        g = (a, d) => {
            a.scene.plugins.get('rexGrayScalePipeline').remove(d.view);
        },
        _h = a => {
            a.grayScaleFactor > 0 ? ((a => {
                var i, j;
                a.grayScalePipelines.length > 0 || ((null === (i = a.requiredImage) || void 0 === i ? void 0 : i.view) && _f(a, a.requiredImage), (null === (j = a.grantedImage) || void 0 === j ? void 0 : j.view) && _f(a, a.grantedImage));
            })(a), a.grayScalePipelines.forEach(d => {
                d.intensity = a.grayScaleFactor;
            })) : (a => {
                var i, j;
                0 !== a.grayScalePipelines.length && ((null === (i = a.requiredImage) || void 0 === i ? void 0 : i.view) && g(a, a.requiredImage), (null === (j = a.grantedImage) || void 0 === j ? void 0 : j.view) && g(a, a.grantedImage), a.grayScalePipelines = []);
            })(a);
        };
}), c.register('bMaPZ2', function(d, e) {
    a(d.exports, 'isGoogleFontLoaded', function() {
        return _h;
    }), a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('TptDc');
    const g = [],
        _h = a => g.includes(a);
    var _i = a => {
        const {
            familyName: j,
            onLoad: k
        } = a;
        g.includes(j) ? k && k() : b(f).load({
            google: {
                families: [`${ j }:400,700`]
            },
            fontactive: a => {
                g.includes(a) || g.push(a), j === a && k && k();
            }
        });
    };
}), c.register('UgeNz', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('quE27'),
        g = c('D0Q5k');
    var _h = a => {
        let i = `${ (0, f.numberWithCommas)((0, g.GetCost)(a)) }`;
        return a.options.allowFunding ? `${ (0, f.numberWithCommas)(a.state.fundedAmount || 0) } / ${ i }` : i;
    };
}), c.register('D0Q5k', function(d, e) {
    a(d.exports, 'GetCost', function() {
        return _g;
    });
    var f = c('UkCpC');
    const _g = a => {
        return (0, f.InPreGamePhase)() ? a.options.amountOfRequiredItem : null !== (d = a.state.cost) && void 0 !== d ? d : a.options.amountOfRequiredItem;
        var h;
    };
}), c.register('X7kIM', function(d, e) {
    a(d.exports, 'AddMachineBody', function() {
        return _l;
    });
    var f = c('cNVx1'),
        g = c('TkEMW'),
        h = c('3Fknw'),
        i = c('pMcSb'),
        j = c('0EMo0'),
        k = c('UCu0V');
    const _l = a => {
        const m = -h.Consts.LEGS_HEIGHT / 2,
            n = {
                displayWidth: a.options.width - 20,
                displayHeight: a.options.height - 20 - h.Consts.LEGS_HEIGHT,
                depthChange: (0, j.GetDepthChange)(a, h.Depths.BG),
                y: m
            };
        a.options.showShadow && !(0, k.isPlatformer)() && a.shadows.add({
            r1: a.options.width / 2 + 20,
            r2: 60,
            y: a.options.height / 2 - 20
        });
        const o = (0, i.GetColors)(a);
        a.parts.add.sprite({
            ...g.BgAAsset,
            ...n,
            onReady: m => {
                a.bg1 = m, m.view.setTint((0, f.GetNumberFromHexColor)(o.bg1)), (0, i.UpdateColors)(a, !0);
            }
        }), a.parts.add.sprite({
            ...g.BgBAsset,
            ...n,
            ignoreInput: !0,
            onReady: m => {
                a.bg2 = m, m.view.setTint((0, f.GetNumberFromHexColor)(o.bg2)), (0, i.UpdateColors)(a, !0);
            }
        });
        const p = {
                ...g.LegAsset,
                y: a.options.height / 2 + m - 2,
                depthChange: (0, j.GetDepthChange)(a, h.Depths.LEG)
            },
            _q = -a.options.width / 2 + 60;
        a.parts.add.sprite({
            ...p,
            x: _q
        }), a.parts.add.sprite({
            ...p,
            x: -_q,
            flipX: !0
        });
        const r = h.Consts.FRAME_MARGINS_NINE_SLICE;
        a.parts.add.ninePatch({
            columns: [
                r,
                r
            ],
            rows: [
                r,
                r
            ],
            y: m,
            scale: h.Consts.FRAME_SCALE,
            height: a.options.height - h.Consts.LEGS_HEIGHT,
            width: a.options.width,
            depthChange: (0, j.GetDepthChange)(a, h.Depths.FRAME),
            imageUrl: g.FrameAsset.imageUrl
        });
    };
}), c.register('omrib', function(d, e) {
    a(d.exports, 'AddColliders', function() {
        return _g;
    });
    var f = c('3Fknw');
    const _g = a => {
        a.colliders.add.box({
            x: 0,
            y: 5 - f.Consts.LEGS_HEIGHT + f.Consts.LEGS_HEIGHT / 2,
            w: a.options.width,
            h: a.options.height - f.Consts.LEGS_HEIGHT + 10
        });
    };
}), c.register('K2ru3', function(d, e) {
    a(d.exports, 'AddImageFromUrl', function() {
        return _l;
    });
    var f = c('+7143'),
        g = c('bwSO3'),
        h = c('3Fknw'),
        i = c('0EMo0'),
        j = c('QwL62'),
        k = c('4pQyd');
    const _l = a => {
        const m = (0, k.GetImageUrl)(a.options.grantedItemImageUrl);
        return a.parts.add.sprite({
            imageId: m,
            imageUrl: m,
            y: -h.Consts.LEGS_HEIGHT / 2,
            depthChange: (0, i.GetDepthChange)(a, h.Depths.GRANTED_ITEM),
            onReady: c => {
                const n = (0, f.default)(m),
                    o = (0, g.default)({
                        height: n.height,
                        width: n.width,
                        newWidth: Math.min(h.Consts.ITEM_MAX_SIZE, 0.7 * a.options.width),
                        newHeight: Math.min(h.Consts.ITEM_MAX_SIZE, 0.4 * a.options.height - h.Consts.PRICE_HEIGHT)
                    });
                c.view.setDisplaySize(o.width, o.height), a.grayScaleFactor > 0 && (0, j.AddGrayscalePipeline)(a, c);
            }
        });
    };
}), c.register('lnsH90', function(d, e) {
    a(d.exports, 'TextPadding', function() {
        return _f;
    });
    const _f = () => 4;
}), c.register('GpPqI', function(d, e) {
    a(d.exports, 'default', function() {
        return _n;
    });
    var f = c('V7S+o'),
        g = c('L2YJu'),
        h = c('mBmBg'),
        i = c('guo2p'),
        j = c('QjxHN'),
        k = c('12Pmw'),
        l = c('e1v/m'),
        m = c('3Cbxw');
    var _n = (a, d) => {
        if ((0, l.default)(a))
            return void a.interactiveZones.setForceDisabled(!0);
        if (a.interactiveZones.setForceDisabled(!1), !(0, f.IsCurrentInteractive)(a.id) && !d)
            return;
        const o = (0, m.default)(a),
            p = {
                message: (0, k.default)(a),
                action: (0, g.default)(a),
                topHeader: null == o ? void 0 : o.text,
                topHeaderColor: null == o ? void 0 : o.color,
                bottomHeader: (0, i.default)(a),
                duration: (0, j.default)(a),
                allowedToInteract: (0, h.default)(a)
            };
        a.interactiveZones.setInfo(p);
    };
}), c.register('V7S+o', function(d, e) {
    a(d.exports, 'IsCurrentInteractive', function() {
        return _g;
    });
    var f = c('heTaO');
    const _g = a => {
        var h;
        return (null === (h = (0, f.default)().worldManager.devices.interactives.currentDevice) || void 0 === h ? void 0 : h.id) === a;
    };
}), c.register('L2YJu', function(d, e) {
    a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('3Fknw'),
        g = c('f2D53'),
        h = c('mUaLY');
    var _i = a => {
        const j = (0, g.VendingMachineDeviceAmountRequiredToPurchase)(a),
            k = (0, g.VendingMachineDeviceAmountOfRequiredItemIHave)(a);
        return (0, h.VendingMachineDeviceFundingIsEnabled)(a) && k < j ? f.InteractionMessages.fundingAction : f.InteractionMessages.purchaseAction;
    };
}), c.register('f2D53', function(d, e) {
    a(d.exports, 'VendingMachineDeviceAmountRequiredToPurchase', function() {
        return _i;
    }), a(d.exports, 'VendingMachineDeviceAmountOfRequiredItemIHave', function() {
        return _j;
    });
    var f = c('fI6of'),
        g = c('D0Q5k'),
        h = c('mUaLY');
    const _i = a => Math.max(0, (0, g.GetCost)(a) - ((0, h.VendingMachineDeviceFundingIsEnabled)(a) && a.state.fundedAmount || 0)),
        _j = a => {
            let k = 0;
            const l = f.default.me.inventory.slots.get(a.options.requiredItemId);
            return l && (k = l.amount), k;
        };
}), c.register('mUaLY', function(d, e) {
    a(d.exports, 'VendingMachineDeviceFundingIsEnabled', function() {
        return _f;
    });
    const _f = a => a.options.allowFunding;
}), c.register('mBmBg', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('f2D53'),
        g = c('mUaLY');
    var _h = a => {
        if (!a.state.active)
            return !1;
        if (a.options.useLimitedStock && a.state.currentStock <= 0)
            return !1;
        const i = (0, f.VendingMachineDeviceAmountRequiredToPurchase)(a),
            j = (0, f.VendingMachineDeviceAmountOfRequiredItemIHave)(a);
        return (0, g.VendingMachineDeviceFundingIsEnabled)(a) ? !!j : !(j < i);
    };
}), c.register('guo2p', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = a => {
        var g;
        const h = null === (g = a.options.grantedItemDescription) || void 0 === g ? void 0 : g.trim();
        if (null == h ? void 0 : h.length)
            return h;
    };
}), c.register('QjxHN', function(d, e) {
    a(d.exports, 'default', function() {
        return _g;
    });
    var f = c('f2D53');
    var _g = a => {
        const h = (0, f.VendingMachineDeviceAmountOfRequiredItemIHave)(a);
        return (0, f.VendingMachineDeviceAmountOfRequiredItemIHave)(a) >= h ? a.options.interactionDuration : 1;
    };
}), c.register('12Pmw', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('quE27'),
        g = c('G0Kso'),
        h = c('3Fknw'),
        i = c('iH+cr'),
        j = c('D0Q5k');
    var _k = a => {
        var l;
        let m = null === (l = a.options.grantedItemName) || void 0 === l ? void 0 : l.trim();
        return m || a.options.grantAction !== i.GrantAction.grantItem || (m = (0, g.ItemName)(a.options.grantedItemId)), m || (m = h.InteractionMessages.defaultItemName), a.options.grantAction === i.GrantAction.grantItem && !a.options.visibleInGame && a.options.attachCostToNameWhenHidden && a.options.requiredItemId && (0, j.GetCost)(a) ? `${ m } - ${ (0, f.numberWithCommas)(a.options.amountOfRequiredItem) } ${ (0, g.ItemName)(a.options.requiredItemId) }` : m;
    };
}), c.register('e1v/m', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('G2BYq'),
        g = c('09Gub');
    var _h = a => !a.options.visibleInGame && !a.state.active || !(!a.options.allowedPurchaseTeam || a.options.allowedPurchaseTeam === f.ANY_TEAM_DEVICE_OPTION || (0, g.default)() === a.options.allowedPurchaseTeam);
}), c.register('3Cbxw', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('G0Kso'),
        g = c('3Fknw'),
        h = c('D0Q5k'),
        i = c('f2D53'),
        j = c('mUaLY');
    var _k = a => {
        if (!a.state.active)
            return {
                text: g.InteractionMessages.notAvailable.message,
                color: g.InteractionMessages.notAvailable.color
            };
        if (a.options.useLimitedStock && a.state.currentStock <= 0)
            return {
                text: g.InteractionMessages.outOfStock.message,
                color: g.InteractionMessages.outOfStock.color
            };
        const l = (0, i.VendingMachineDeviceAmountRequiredToPurchase)(a),
            m = (0, i.VendingMachineDeviceAmountOfRequiredItemIHave)(a),
            n = (0, j.VendingMachineDeviceFundingIsEnabled)(a);
        return m < l && !n ? {
            text: g.InteractionMessages.notEnoughRequiredItem.message,
            color: g.InteractionMessages.notEnoughRequiredItem.color
        } : a.options.useLimitedStock ? {
            text: g.InteractionMessages.inStock(a.state.currentStock).message,
            color: g.InteractionMessages.inStock(a.state.currentStock).color
        } : n ? {
            text: g.InteractionMessages.fundingStatus.message(a.state.fundedAmount || 0, (0, h.GetCost)(a), (0, f.ItemName)(a.options.requiredItemId))
        } : {};
    };
}), c.register('56Ofo', function(d, e) {
    a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('UkCpC'),
        g = c('iH+cr'),
        h = c('GpPqI');
    var _i = a => {
        (0, f.InPreGamePhase)() || (a.options.visibleInGame ? a.interactiveZones.add.rect({
            y: 25,
            width: a.options.width + 150,
            height: a.options.height + 150
        }) : a.interactiveZones.add.circle({
            r: a.options.radius
        }), a.interactiveZones.setCanInteractThroughColliders(!0), a.interactiveZones.onInteraction = () => {
            a.sendToServerDevice(g.Messages.purchase);
        }, a.interactiveZones.onInteractiveCb = () => {
            (0, h.default)(a, !0);
        });
    };
}), c.register('uc4mA17', function(d, e) {
    a(d.exports, 'FetchOptionSchemaProperty', function() {
        return _f;
    });
    const _f = (a, d) => {
        var g, h, i;
        const j = a.deviceOption.optionSchema.options.find(a => a.key === d);
        return {
            min: null === (g = null == j ? void 0 : j.option.props) || void 0 === g ? void 0 : g.min,
            max: null === (h = null == j ? void 0 : j.option.props) || void 0 === h ? void 0 : h.max,
            step: null === (i = null == j ? void 0 : j.option.props) || void 0 === i ? void 0 : i.step
        };
    };
}), c.register('u/WlI21', function(d, e) {
    a(d.exports, 'ReplaceVisualEditingPreview', function() {
        return _j;
    });
    var f = c('hemXM'),
        g = c('sWmxu5'),
        h = c('EzUqb'),
        i = c('GQMbT');
    const _j = (a, d, c) => {
        const k = (0, i.FetchVisualEditingPreview)(),
            l = (0, h.FetchCurrentlyEditedDevice)();
        if (!l || !k)
            return;
        const m = l.layers.isOnNaturalDepth() ? void 0 : d + l.layers.getDepthShift();
        (0, g.default)({
            deviceOption: k.deviceOption,
            id: f.VisualEditingConstants.previewId,
            x: a,
            y: d,
            depth: m,
            layerId: l.layers.getLayer(),
            name: k.name,
            isPreview: !0,
            options: {
                ...k.options,
                ...c
            },
            placedByClient: !0,
            state: k.deviceOption.defaultState
        });
    };
}), c.register('sWmxu5', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('heTaO'),
        g = c('2LtPo');
    var _h = a => {
        (0, f.default)().worldManager.devices.getDeviceById(a.id) && (0, g.default)(a);
    };
});