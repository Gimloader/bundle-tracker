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
a.register('eY0+T', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _F(b.exports, 'default', function() {
        return _F;
    });
    var e = a('1bFPu'),
        f = a('I35Ay'),
        g = a('tugRC'),
        h = a('/pbxo'),
        i = a('8s38Y'),
        j = a('lChtH'),
        k = a('Oa9wC'),
        l = a('BClWR'),
        m = a('jL4lN'),
        n = a('jCQEZ'),
        o = a('plbfj'),
        p = a('H7lwa'),
        q = a('82DGx'),
        r = a('evF5h'),
        s = a('H9OuP'),
        t = a('Jfada'),
        u = a('2Xvuf'),
        v = a('07pQo'),
        w = a('1f1YX'),
        x = a('D5xLI'),
        y = a('vfR2b'),
        z = a('A2dXl'),
        A = a('2KeuO'),
        B = a('9tz3H'),
        C = a('R2Ucl10'),
        D = a('IFO6W13');
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
            const _F = this.priceText.view.text.length,
                G = 0.85 * this.options.width;
            let H = i.Consts.PRICE_TEXT_SIZE,
                I = _F * H;
            const J = () => {
                I > G && (H -= 1, I = _F * H, J());
            };
            J();
            const K = (0, x.default)().cameraHelper.zoom,
                L = H * K;
            this.priceText.view.setFontSize(L), this.priceText.view.setScale(1 / K);
            const M = (0, y.TextPadding)();
            this.priceText.view.setPadding(M, M, M, M);
        }
        constructor(F) {
            super(F), (0, e.default)(this, 'grayScalePipelines', []), (0, e.default)(this, 'grayScaleFactor', 0), (0, e.default)(this, 'animationSpeedFactor', 1), (0, e.default)(this, 'rays', []), (0, e.default)(this, 'cumulTime', 0), (0, e.default)(this, 'currentRaysAngle', 0), (0, e.default)(this, 'onUpdate', F => {
                if (this.cull.isInsideView) {
                    if (this.currentRaysAngle += F / 10000 * this.animationSpeedFactor, this.rays.forEach((F, b) => {
                            (0, j.UpdateRay)(this, F, b);
                        }), this.grantedImage && this.grantedImage.view) {
                        this.cumulTime += F;
                        const G = this.y - i.Consts.LEGS_HEIGHT / 2,
                            H = 5;
                        this.grantedImage.view.y = G + this.animationSpeedFactor * Math.sin(this.cumulTime / 550) * H;
                    }
                    (0, s.UpdateGrayscalePipelines)(this), (0, r.UpdateColors)(this), (0, z.default)(this);
                }
            }), (0, e.default)(this, 'onStateChange', F => {
                'active' === F && (this.state.active ? this.tweens.add({
                    targets: this,
                    grayScaleFactor: 0,
                    animationSpeedFactor: 1,
                    duration: 350
                }) : (this.grayScaleFactor = Math.max(this.grayScaleFactor, 0.00001), this.tweens.add({
                    targets: this,
                    grayScaleFactor: i.Consts.INACTIVE_GRAY_SCALE_FACTOR,
                    animationSpeedFactor: i.Consts.INACTIVE_ANIMATION_SLOW_DOWN,
                    duration: 350
                }))), 'fundedAmount' === F && (0, k.AddPriceElement)(this);
            }), (0, e.default)(this, 'onMessage', F => {
                F.key !== g.Messages.purchased && F.key !== g.Messages.funded || F && F.data && F.data.characterId && F.data.characterId === (0, t.default)() && (F.key === g.Messages.purchased && this.options.soundEnabled && (0, v.playSound)({
                    path: (0, u.default)('devices/vending_machine/purchase.mp3'),
                    volume: (0, w.getVolume)({
                        volume: 0.76,
                        type: w.SoundType.soundEffect
                    })
                }), F.key === g.Messages.funded && this.options.soundEnabled && (0, v.playSound)({
                    path: (0, u.default)('devices/vending_machine/fund.mp3'),
                    volume: (0, w.getVolume)({
                        volume: 0.8,
                        type: w.SoundType.soundEffect
                    })
                }));
            }), (0, e.default)(this, 'setupVisualEditing', () => {
                if (!(0, h.InPreGamePhase)() || !(0, B.isSavedVersion)())
                    return;
                const G = (0, C.FetchOptionSchemaProperty)(this, 'width'),
                    H = (0, C.FetchOptionSchemaProperty)(this, 'height');
                this.visualEditing.add.box({
                    width: this.options.width,
                    height: this.options.height,
                    angle: 0,
                    minWidth: G.min,
                    maxWidth: G.max,
                    minHeight: H.min,
                    maxHeight: H.max,
                    rotable: !1,
                    keepRatio: !1,
                    onChange: G => {
                        (0, D.ReplaceVisualEditingPreview)(G.x, G.y, {
                            width: G.width,
                            height: G.height
                        });
                    }
                });
            }), (0, e.default)(this, 'setupVisualEditingInvisible', () => {
                if (!(0, h.InPreGamePhase)() || !(0, B.isSavedVersion)())
                    return;
                const G = (0, C.FetchOptionSchemaProperty)(this, 'radius');
                this.visualEditing.add.circle({
                    radius: this.options.radius,
                    minRadius: G.min,
                    maxRadius: G.max,
                    rotable: !1,
                    resizable: !0,
                    onChange: G => {
                        (0, D.ReplaceVisualEditingPreview)(G.x, G.y, {
                            radius: G.radius
                        });
                    }
                });
            }), (0, h.InPreGamePhase)() && !this.options.activeOnStart && (this.animationSpeedFactor = i.Consts.INACTIVE_ANIMATION_SLOW_DOWN, this.grayScaleFactor = i.Consts.INACTIVE_GRAY_SCALE_FACTOR), (0, h.InGamePhase)() && !this.state.active && (this.animationSpeedFactor = i.Consts.INACTIVE_ANIMATION_SLOW_DOWN, this.grayScaleFactor = i.Consts.INACTIVE_GRAY_SCALE_FACTOR), this.options.visibleInGame ? this.setupVisualEditing() : this.setupVisualEditingInvisible(), (0, A.default)(this), this.options.visibleInGame ? this.options.visibleInGame && this.addFullLook() : (0, h.InPreGamePhase)() && (0, B.isSavedVersion)() ? this.addIconLook() : this.boundingBox.setHardcoded({
                width: 2 * this.options.radius,
                height: 2 * this.options.radius
            });
        }
    }
    var _F = E;
}), a.register('tugRC', function(b, c) {
    let d;
    var e;
    _l(b.exports, 'GrantAction', function() {
        return d;
    }), _l(b.exports, 'Messages', function() {
        return _f;
    }), (e = d || (d = {})).grantItem = 'Grant Item', e.broadcastOnChannel = 'Broadcast On Channel';
    const _f = {
        purchase: 'purchase',
        purchased: 'purchased',
        funded: 'funded'
    };
}), a.register('8s38Y', function(b, c) {
    _l(b.exports, 'Consts', function() {
        return _e;
    }), _l(b.exports, 'Depths', function() {
        return _f;
    }), _l(b.exports, 'REQUIRED_AMOUNT_TEXT_STYLE', function() {
        return _g;
    }), _l(b.exports, 'InteractionMessages', function() {
        return _h;
    }), _l(b.exports, 'GRAYSCALE_COLORS', function() {
        return _i;
    });
    var d = a('PMl60');
    const _e = {
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
        _f = {
            BG: 1,
            RAYS: 2,
            LEG: 3,
            INFO_BG: 4,
            INFO: 5,
            GRANTED_ITEM: 6,
            FRAME: 7
        },
        _g = {
            fontSize: `${ _e.PRICE_TEXT_SIZE }px`,
            fontFamily: 'Fugaz One'
        },
        _h = {
            inStock: _l => ({
                message: `In Stock (${ _l })`,
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
                message: (_l, b, a) => `${ (0, d.numberWithCommas)(_l) }/${ (0, d.numberWithCommas)(b) } ${ a }`
            },
            defaultItemName: 'Item',
            purchaseAction: 'to purchase',
            fundingAction: 'to fund'
        },
        _i = {
            ray: '#CECECE',
            bg1: '#6A6A6A',
            bg2: '#CECECE'
        };
}), a.register('lChtH', function(b, c) {
    _l(b.exports, 'AddRays', function() {
        return _i;
    }), _l(b.exports, 'UpdateRay', function() {
        return _j;
    });
    var d = a('h2EGG'),
        e = a('8s38Y'),
        f = a('82DGx'),
        g = (e = a('8s38Y'), a('BClWR')),
        h = a('evF5h');
    const _i = _l => {
            const j = (0, h.GetColors)(_l);
            for (let k = 0; k < _l.options.numberOfRays; k++)
                _l.parts.add.sprite({
                    imageId: f.RayAsset.imageId,
                    imageUrl: f.RayAsset.imageUrl,
                    y: -20,
                    originX: 0.5,
                    originY: 1,
                    ignoreInput: !0,
                    depthChange: (0, g.GetDepthChange)(_l, e.Depths.RAYS),
                    onReady: c => {
                        _l.rays.push(c), _j(_l, c, k), c.view.alpha = _l.options.raysAlpha, c.view.blendMode = _l.options.raysAdditive ? 1 : 0, c.view.tint = (0, d.GetNumberFromHexColor)(j.rays), k === _l.options.numberOfRays - 1 && (0, h.UpdateColors)(_l, !0);
                    }
                });
        },
        _j = (_l, b, a) => {
            const k = a * (2 * Math.PI / _l.options.numberOfRays) + _l.currentRaysAngle;
            b.view.rotation = k;
            const l = k,
                m = Math.atan(19.5 * _l.options.raysWidthFactor / 380),
                n = _l.options.width / 2,
                o = (_l.options.height - e.Consts.LEGS_HEIGHT) / 2;
            const p = Math.min(Math.abs(o / Math.cos(l - m)), Math.abs(n / Math.cos(Math.PI / 2 - l - m)), Math.abs(o / Math.cos(l + m)), Math.abs(n / Math.cos(Math.PI / 2 - l + m))) / 380;
            b.view.scaleY = p, b.view.scaleX = p * _l.options.raysWidthFactor;
        };
}), a.register('82DGx', function(b, c) {
    _l(b.exports, 'BgAAsset', function() {
        return _e;
    }), _l(b.exports, 'BgBAsset', function() {
        return _f;
    }), _l(b.exports, 'RayAsset', function() {
        return _g;
    }), _l(b.exports, 'FrameAsset', function() {
        return _h;
    }), _l(b.exports, 'LegAsset', function() {
        return _i;
    }), _l(b.exports, 'InfoAsset', function() {
        return _j;
    }), _l(b.exports, 'IconAsset', function() {
        return _k;
    });
    var d = a('2Xvuf');
    const _e = {
            imageId: 'vending_machine_bg_a',
            imageUrl: (0, d.default)('devices/vending_machine/bg_a.png')
        },
        _f = {
            imageId: 'vending_machine_bg_b',
            imageUrl: (0, d.default)('devices/vending_machine/bg_b.png')
        },
        _g = ((0, d.default)('devices/vending_machine/rays.png'), {
            imageId: 'vending_machine_ray',
            imageUrl: (0, d.default)('devices/vending_machine/ray.png')
        }),
        _h = {
            imageId: 'vending_machine_frame',
            imageUrl: (0, d.default)('devices/vending_machine/frame.png')
        },
        _i = {
            imageId: 'vending_machine_leg',
            imageUrl: (0, d.default)('devices/vending_machine/leg.png')
        },
        _j = {
            imageId: 'vending_machine_info',
            imageUrl: (0, d.default)('devices/vending_machine/info.png')
        },
        _k = {
            imageId: 'vending_machine_icon',
            imageUrl: (0, d.default)('devices/vending_machine/previewIcon.png')
        };
    (0, d.default)('devices/item_granter/question-mark-2.png');
}), a.register('BClWR', function(b, c) {
    _l(b.exports, 'GetDepthChange', function() {
        return _e;
    });
    var d = a('5CmLs');
    const _e = (_l, b) => _l.options.height / 2 + (0, d.default)(b);
}), a.register('evF5h', function(b, c) {
    _l(b.exports, 'GetColors', function() {
        return _m;
    }), _l(b.exports, 'InitColors', function() {
        return _n;
    }), _l(b.exports, 'UpdateColors', function() {
        return _o;
    });
    var d = a('SBJDo'),
        e = a('kc9WN'),
        f = a('h2EGG'),
        g = a('exB2i'),
        h = a('GT7Vh'),
        i = a('8s38Y'),
        j = a('tugRC');
    const k = (_l, b) => {
            const l = Phaser.Display.Color.HexStringToColor(_l);
            return {
                grayscale: Phaser.Display.Color.HexStringToColor(b),
                color: l
            };
        },
        l = (_l, b) => {
            const m = {
                red: Math.round(Phaser.Math.Linear(_l.color.red, _l.grayscale.red, b)),
                green: Math.round(Phaser.Math.Linear(_l.color.green, _l.grayscale.green, b)),
                blue: Math.round(Phaser.Math.Linear(_l.color.blue, _l.grayscale.blue, b))
            };
            return (0, f.GetNumberFromHexColor)((0, h.rgbToColorString)(m));
        },
        _m = _l => {
            if (_l.options.grantAction === j.GrantAction.grantItem && _l.options.matchItemRarity) {
                const n = (0, g.FetchItemOption)(_l.options.grantedItemId);
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
                rays: _l.options.raysColor,
                bg1: _l.options.backgroundColor1,
                bg2: _l.options.backgroundColor2
            };
        },
        _n = _l => {
            const o = _m(_l);
            _l.raysGrayscale = k(o.rays, i.GRAYSCALE_COLORS.ray), _l.bg1Grayscale = k(o.bg1, i.GRAYSCALE_COLORS.bg1), _l.bg2Grayscale = k(o.bg2, i.GRAYSCALE_COLORS.bg2);
        },
        _o = (_l, p = !1) => {
            var q, r, s, t;
            if (_l.lastGrayscaleFactorUpdate === _l.grayScaleFactor && !p)
                return;
            _l.lastGrayscaleFactorUpdate = _l.grayScaleFactor, _l.raysGrayscale || _n(_l);
            const u = l(_l.raysGrayscale, _l.grayScaleFactor),
                v = l(_l.bg1Grayscale, _l.grayScaleFactor),
                w = l(_l.bg2Grayscale, _l.grayScaleFactor);
            _l.rays.forEach(_l => {
                _l.view.tint = u;
            }), null === (q = _l.bg1) || void 0 === q || null === (r = q.view) || void 0 === r || r.setTint(v), null === (s = _l.bg2) || void 0 === s || null === (t = s.view) || void 0 === t || t.setTint(w);
        };
}), a.register('Oa9wC', function(b, c) {
    _l(b.exports, 'AddPriceElement', function() {
        return _j;
    });
    var d = a('8s38Y'),
        e = a('82DGx'),
        f = (d = a('8s38Y'), a('BClWR')),
        g = a('H7lwa'),
        h = a('sCbH9'),
        i = a('dxggN');
    const _j = _l => {
        if (!_l.options.visibleInGame)
            return;
        const k = _l.options.height / 2 - 90;
        _l.priceAreaInfoRectangle || (_l.priceAreaInfoRectangle = _l.parts.add.sprite({
            ...e.InfoAsset,
            y: k,
            depthChange: (0, f.GetDepthChange)(_l, d.Depths.INFO_BG)
        })), (0, h.default)({
            familyName: d.REQUIRED_AMOUNT_TEXT_STYLE.fontFamily,
            onLoad: () => {
                const l = (0, i.default)(_l);
                if (_l.priceText)
                    _l.priceText.view.setText(l);
                else {
                    const m = _l.parts.add.text({
                        text: (0, i.default)(_l),
                        y: k,
                        depthChange: (0, f.GetDepthChange)(_l, d.Depths.INFO),
                        textStyle: d.REQUIRED_AMOUNT_TEXT_STYLE
                    });
                    _l.priceText = m;
                }
                _l.updateFontSize();
                const m = d.Consts.REQUIRED_ITEM_MAX_SIZE,
                    n = l => {
                        l.view.y = _l.y + k;
                        const o = _l.priceText.getBounds().width,
                            p = m + o + 7;
                        l.view.x = -p / 2 + m / 2 + _l.x, _l.priceText.view.x = p / 2 - o / 2 + _l.x;
                    };
                _l.requiredImage ? n(_l.requiredImage) : _l.requiredImage = (0, g.AddItemImage)(_l, _l.options.requiredItemId, m, 0.8 * d.Consts.PRICE_HEIGHT, d.Depths.INFO, _l => {
                    n(_l);
                });
            }
        });
    };
}), a.register('H7lwa', function(b, c) {
    _l(b.exports, 'AddItemImage', function() {
        return _j;
    });
    var d = a('iWivW'),
        e = a('1Chka'),
        f = a('AVLqL'),
        g = a('2M6xn'),
        h = a('BClWR'),
        i = a('H9OuP');
    const _j = (_l, b, a, c, _j, _o) => {
        const k = {
            ...g.UnknownItemAsset
        };
        if (b) {
            const _l = d.default.worldOptions.itemOptions.find(_l => _l.id === b);
            _l && (k.imageId = _l.id, k.imageUrl = _l.previewImage);
        }
        const l = (0, e.default)(k.imageId),
            m = (0, f.default)({
                height: l.height,
                width: l.width,
                newWidth: c,
                newHeight: a
            });
        return e.parts.add.sprite({
            imageId: k.imageId,
            imageUrl: k.imageUrl,
            depthChange: (0, h.GetDepthChange)(e, _j),
            displayWidth: m.width,
            displayHeight: m.height,
            onReady: b => {
                e.grayScaleFactor > 0 && (0, i.AddGrayscalePipeline)(e, b), _o && _o(b);
            }
        });
    };
}), a.register('2M6xn', function(b, c) {
    e(b.exports, 'BaseAsset', function() {
        return _e;
    }), e(b.exports, 'UnknownItemAsset', function() {
        return _f;
    });
    var d = a('2Xvuf');
    const _e = {
            imageId: (0, d.default)('devices/item_granter/base.png'),
            imageUrl: (0, d.default)('devices/item_granter/base.png')
        },
        _f = {
            imageId: '__UNKNOWN_ITEM',
            imageUrl: (0, d.default)('devices/item_granter/question-mark-2.png')
        };
}), a.register('H9OuP', function(b, c) {
    e(b.exports, 'AddGrayscalePipeline', function() {
        return _d;
    }), e(b.exports, 'UpdateGrayscalePipelines', function() {
        return _f;
    });
    const _d = (e, b) => {
            e.grayScalePipelines.push(e.scene.plugins.get('rexGrayScalePipeline').add(b.view, {
                intensity: e.grayScaleFactor
            }));
        },
        e = (e, b) => {
            e.scene.plugins.get('rexGrayScalePipeline').remove(b.view);
        },
        _f = e => {
            e.grayScaleFactor > 0 ? ((e => {
                var g, h;
                e.grayScalePipelines.length > 0 || ((null === (g = e.requiredImage) || void 0 === g ? void 0 : g.view) && _d(e, e.requiredImage), (null === (h = e.grantedImage) || void 0 === h ? void 0 : h.view) && _d(e, e.grantedImage));
            })(e), e.grayScalePipelines.forEach(b => {
                b.intensity = e.grayScaleFactor;
            })) : (e => {
                var g, h;
                0 !== e.grayScalePipelines.length && ((null === (g = e.requiredImage) || void 0 === g ? void 0 : g.view) && e(e, e.requiredImage), (null === (h = e.grantedImage) || void 0 === h ? void 0 : h.view) && e(e, e.grantedImage), e.grayScalePipelines = []);
            })(e);
        };
}), a.register('sCbH9', function(b, c) {
    e(b.exports, 'isGoogleFontLoaded', function() {
        return _f;
    }), e(b.exports, 'default', function() {
        return _g;
    });
    var d = a('ARAVZ');
    const e = [],
        _f = e => e.includes(e);
    var _g = e => {
        const {
            familyName: h,
            onLoad: i
        } = e;
        e.includes(h) ? i && i() : _b(d).load({
            google: {
                families: [`${ h }:400,700`]
            },
            fontactive: e => {
                e.includes(e) || e.push(e), h === e && i && i();
            }
        });
    };
}), a.register('dxggN', function(_b, c) {
    e(_b.exports, 'default', function() {
        return _f;
    });
    var d = a('PMl60'),
        e = a('TAzUt');
    var _f = e => {
        let g = `${ (0, d.numberWithCommas)((0, e.GetCost)(e)) }`;
        return e.options.allowFunding ? `${ (0, d.numberWithCommas)(e.state.fundedAmount || 0) } / ${ g }` : g;
    };
}), a.register('TAzUt', function(b, c) {
    e(b.exports, 'GetCost', function() {
        return _e;
    });
    var d = a('/pbxo');
    const _e = e => {
        return (0, d.InPreGamePhase)() ? e.options.amountOfRequiredItem : null !== (b = e.state.cost) && void 0 !== b ? b : e.options.amountOfRequiredItem;
        var f;
    };
}), a.register('jL4lN', function(b, c) {
    e(b.exports, 'AddMachineBody', function() {
        return _j;
    });
    var d = a('h2EGG'),
        e = a('82DGx'),
        f = a('8s38Y'),
        g = a('evF5h'),
        h = a('BClWR'),
        i = a('JEGzD');
    const _j = e => {
        const k = -f.Consts.LEGS_HEIGHT / 2,
            l = {
                displayWidth: e.options.width - 20,
                displayHeight: e.options.height - 20 - f.Consts.LEGS_HEIGHT,
                depthChange: (0, h.GetDepthChange)(e, f.Depths.BG),
                y: k
            };
        e.options.showShadow && !(0, i.isPlatformer)() && e.shadows.add({
            r1: e.options.width / 2 + 20,
            r2: 60,
            y: e.options.height / 2 - 20
        });
        const m = (0, g.GetColors)(e);
        e.parts.add.sprite({
            ...e.BgAAsset,
            ...l,
            onReady: k => {
                e.bg1 = k, k.view.setTint((0, d.GetNumberFromHexColor)(m.bg1)), (0, g.UpdateColors)(e, !0);
            }
        }), e.parts.add.sprite({
            ...e.BgBAsset,
            ...l,
            ignoreInput: !0,
            onReady: k => {
                e.bg2 = k, k.view.setTint((0, d.GetNumberFromHexColor)(m.bg2)), (0, g.UpdateColors)(e, !0);
            }
        });
        const n = {
                ...e.LegAsset,
                y: e.options.height / 2 + k - 2,
                depthChange: (0, h.GetDepthChange)(e, f.Depths.LEG)
            },
            _o = -e.options.width / 2 + 60;
        e.parts.add.sprite({
            ...n,
            x: _o
        }), e.parts.add.sprite({
            ...n,
            x: -_o,
            flipX: !0
        });
        const p = f.Consts.FRAME_MARGINS_NINE_SLICE;
        e.parts.add.ninePatch({
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
            height: e.options.height - f.Consts.LEGS_HEIGHT,
            width: e.options.width,
            depthChange: (0, h.GetDepthChange)(e, f.Depths.FRAME),
            imageUrl: e.FrameAsset.imageUrl
        });
    };
}), a.register('jCQEZ', function(b, c) {
    e(b.exports, 'AddColliders', function() {
        return _e;
    });
    var d = a('8s38Y');
    const _e = e => {
        e.colliders.add.box({
            x: 0,
            y: 5 - d.Consts.LEGS_HEIGHT + d.Consts.LEGS_HEIGHT / 2,
            w: e.options.width,
            h: e.options.height - d.Consts.LEGS_HEIGHT + 10
        });
    };
}), a.register('plbfj', function(b, c) {
    e(b.exports, 'AddImageFromUrl', function() {
        return _j;
    });
    var d = a('1Chka'),
        e = a('AVLqL'),
        f = a('8s38Y'),
        g = a('BClWR'),
        h = a('H9OuP'),
        i = a('kPDt8');
    const _j = e => {
        const k = (0, i.GetImageUrl)(e.options.grantedItemImageUrl);
        return e.parts.add.sprite({
            imageId: k,
            imageUrl: k,
            y: -f.Consts.LEGS_HEIGHT / 2,
            depthChange: (0, g.GetDepthChange)(e, f.Depths.GRANTED_ITEM),
            onReady: a => {
                const l = (0, d.default)(k),
                    m = (0, e.default)({
                        height: l.height,
                        width: l.width,
                        newWidth: Math.min(f.Consts.ITEM_MAX_SIZE, 0.7 * e.options.width),
                        newHeight: Math.min(f.Consts.ITEM_MAX_SIZE, 0.4 * e.options.height - f.Consts.PRICE_HEIGHT)
                    });
                a.view.setDisplaySize(m.width, m.height), e.grayScaleFactor > 0 && (0, h.AddGrayscalePipeline)(e, a);
            }
        });
    };
}), a.register('vfR2b', function(b, c) {
    e(b.exports, 'TextPadding', function() {
        return _d;
    });
    const _d = () => 4;
}), a.register('A2dXl', function(b, c) {
    e(b.exports, 'default', function() {
        return _l;
    });
    var d = a('7Ubfv'),
        e = a('/fx4O'),
        f = a('gWYGD'),
        g = a('SjWsC'),
        h = a('zot+n'),
        i = a('N++y/'),
        j = a('B/ThC'),
        k = a('cSZ9W');
    var _l = (e, b) => {
        if ((0, j.default)(e))
            return void e.interactiveZones.setForceDisabled(!0);
        if (e.interactiveZones.setForceDisabled(!1), !(0, d.IsCurrentInteractive)(e.id) && !b)
            return;
        const m = (0, k.default)(e),
            n = {
                message: (0, i.default)(e),
                action: (0, e.default)(e),
                topHeader: null == m ? void 0 : m.text,
                topHeaderColor: null == m ? void 0 : m.color,
                bottomHeader: (0, g.default)(e),
                duration: (0, h.default)(e),
                allowedToInteract: (0, f.default)(e)
            };
        e.interactiveZones.setInfo(n);
    };
}), a.register('7Ubfv', function(b, c) {
    e(b.exports, 'IsCurrentInteractive', function() {
        return _e;
    });
    var d = a('D5xLI');
    const _e = e => {
        var f;
        return (null === (f = (0, d.default)().worldManager.devices.interactives.currentDevice) || void 0 === f ? void 0 : f.id) === e;
    };
}), a.register('/fx4O', function(b, c) {
    e(b.exports, 'default', function() {
        return _g;
    });
    var d = a('8s38Y'),
        e = a('KCnBM'),
        f = a('zU+QS');
    var _g = e => {
        const h = (0, e.VendingMachineDeviceAmountRequiredToPurchase)(e),
            i = (0, e.VendingMachineDeviceAmountOfRequiredItemIHave)(e);
        return (0, f.VendingMachineDeviceFundingIsEnabled)(e) && i < h ? d.InteractionMessages.fundingAction : d.InteractionMessages.purchaseAction;
    };
}), a.register('KCnBM', function(b, c) {
    e(b.exports, 'VendingMachineDeviceAmountRequiredToPurchase', function() {
        return _g;
    }), e(b.exports, 'VendingMachineDeviceAmountOfRequiredItemIHave', function() {
        return _h;
    });
    var d = a('iWivW'),
        e = a('TAzUt'),
        f = a('zU+QS');
    const _g = e => Math.max(0, (0, e.GetCost)(e) - ((0, f.VendingMachineDeviceFundingIsEnabled)(e) && e.state.fundedAmount || 0)),
        _h = e => {
            let i = 0;
            const j = d.default.me.inventory.slots.get(e.options.requiredItemId);
            return j && (i = j.amount), i;
        };
}), a.register('zU+QS', function(b, c) {
    e(b.exports, 'VendingMachineDeviceFundingIsEnabled', function() {
        return _d;
    });
    const _d = e => e.options.allowFunding;
}), a.register('gWYGD', function(b, c) {
    e(b.exports, 'default', function() {
        return _f;
    });
    var d = a('KCnBM'),
        e = a('zU+QS');
    var _f = e => {
        if (!e.state.active)
            return !1;
        if (e.options.useLimitedStock && e.state.currentStock <= 0)
            return !1;
        const g = (0, d.VendingMachineDeviceAmountRequiredToPurchase)(e),
            h = (0, d.VendingMachineDeviceAmountOfRequiredItemIHave)(e);
        return (0, e.VendingMachineDeviceFundingIsEnabled)(e) ? !!h : !(h < g);
    };
}), a.register('SjWsC', function(b, c) {
    e(b.exports, 'default', function() {
        return _d;
    });
    var _d = e => {
        var e;
        const f = null === (e = e.options.grantedItemDescription) || void 0 === e ? void 0 : e.trim();
        if (null == f ? void 0 : f.length)
            return f;
    };
}), a.register('zot+n', function(b, c) {
    e(b.exports, 'default', function() {
        return _e;
    });
    var d = a('KCnBM');
    var _e = e => {
        const f = (0, d.VendingMachineDeviceAmountOfRequiredItemIHave)(e);
        return (0, d.VendingMachineDeviceAmountOfRequiredItemIHave)(e) >= f ? e.options.interactionDuration : 1;
    };
}), a.register('N++y/', function(b, c) {
    e(b.exports, 'default', function() {
        return _i;
    });
    var d = a('PMl60'),
        e = a('ZCz9W'),
        f = a('8s38Y'),
        g = a('tugRC'),
        h = a('TAzUt');
    var _i = e => {
        var j;
        let k = null === (j = e.options.grantedItemName) || void 0 === j ? void 0 : j.trim();
        return k || e.options.grantAction !== g.GrantAction.grantItem || (k = (0, e.ItemName)(e.options.grantedItemId)), k || (k = f.InteractionMessages.defaultItemName), e.options.grantAction === g.GrantAction.grantItem && !e.options.visibleInGame && e.options.attachCostToNameWhenHidden && e.options.requiredItemId && (0, h.GetCost)(e) ? `${ k } - ${ (0, d.numberWithCommas)(e.options.amountOfRequiredItem) } ${ (0, e.ItemName)(e.options.requiredItemId) }` : k;
    };
}), a.register('B/ThC', function(b, c) {
    e(b.exports, 'default', function() {
        return _f;
    });
    var d = a('AeM98'),
        e = a('k4WXU');
    var _f = e => !e.options.visibleInGame && !e.state.active || !(!e.options.allowedPurchaseTeam || e.options.allowedPurchaseTeam === d.ANY_TEAM_DEVICE_OPTION || (0, e.default)() === e.options.allowedPurchaseTeam);
}), a.register('cSZ9W', function(b, c) {
    e(b.exports, 'default', function() {
        return _i;
    });
    var d = a('ZCz9W'),
        e = a('8s38Y'),
        f = a('TAzUt'),
        g = a('KCnBM'),
        h = a('zU+QS');
    var _i = e => {
        if (!e.state.active)
            return {
                text: e.InteractionMessages.notAvailable.message,
                color: e.InteractionMessages.notAvailable.color
            };
        if (e.options.useLimitedStock && e.state.currentStock <= 0)
            return {
                text: e.InteractionMessages.outOfStock.message,
                color: e.InteractionMessages.outOfStock.color
            };
        const j = (0, g.VendingMachineDeviceAmountRequiredToPurchase)(e),
            k = (0, g.VendingMachineDeviceAmountOfRequiredItemIHave)(e),
            l = (0, h.VendingMachineDeviceFundingIsEnabled)(e);
        return k < j && !l ? {
            text: e.InteractionMessages.notEnoughRequiredItem.message,
            color: e.InteractionMessages.notEnoughRequiredItem.color
        } : e.options.useLimitedStock ? {
            text: e.InteractionMessages.inStock(e.state.currentStock).message,
            color: e.InteractionMessages.inStock(e.state.currentStock).color
        } : l ? {
            text: e.InteractionMessages.fundingStatus.message(e.state.fundedAmount || 0, (0, f.GetCost)(e), (0, d.ItemName)(e.options.requiredItemId))
        } : {};
    };
}), a.register('2KeuO', function(b, c) {
    e(b.exports, 'default', function() {
        return _g;
    });
    var d = a('/pbxo'),
        e = a('tugRC'),
        f = a('A2dXl');
    var _g = e => {
        (0, d.InPreGamePhase)() || (e.options.visibleInGame ? e.interactiveZones.add.rect({
            y: 25,
            width: e.options.width + 150,
            height: e.options.height + 150
        }) : e.interactiveZones.add.circle({
            r: e.options.radius
        }), e.interactiveZones.setCanInteractThroughColliders(!0), e.interactiveZones.onInteraction = () => {
            e.sendToServerDevice(e.Messages.purchase);
        }, e.interactiveZones.onInteractiveCb = () => {
            (0, f.default)(e, !0);
        });
    };
}), a.register('R2Ucl10', function(b, c) {
    e(b.exports, 'FetchOptionSchemaProperty', function() {
        return _d;
    });
    const _d = (e, b) => {
        var e, f, g;
        const h = e.deviceOption.optionSchema.options.find(e => e.key === b);
        return {
            min: null === (e = null == h ? void 0 : h.option.props) || void 0 === e ? void 0 : e.min,
            max: null === (f = null == h ? void 0 : h.option.props) || void 0 === f ? void 0 : f.max,
            step: null === (g = null == h ? void 0 : h.option.props) || void 0 === g ? void 0 : g.step
        };
    };
}), a.register('IFO6W13', function(b, c) {
    e(b.exports, 'ReplaceVisualEditingPreview', function() {
        return _h;
    });
    var d = a('HqwPM'),
        e = a('+oovY4'),
        f = a('A17vD'),
        g = a('HXXiu');
    const _h = (e, b, a) => {
        const i = (0, g.FetchVisualEditingPreview)(),
            j = (0, f.FetchCurrentlyEditedDevice)();
        if (!j || !i)
            return;
        const k = j.layers.isOnNaturalDepth() ? void 0 : b + j.layers.getDepthShift();
        (0, e.default)({
            deviceOption: i.deviceOption,
            id: d.VisualEditingConstants.previewId,
            x: e,
            y: b,
            depth: k,
            layerId: j.layers.getLayer(),
            name: i.name,
            isPreview: !0,
            options: {
                ...i.options,
                ...a
            },
            placedByClient: !0,
            state: i.deviceOption.defaultState
        });
    };
}), a.register('+oovY4', function(b, c) {
    e(b.exports, 'default', function() {
        return _f;
    });
    var d = a('D5xLI'),
        e = a('aIyMH');
    var _f = e => {
        (0, d.default)().worldManager.devices.getDeviceById(e.id) && (0, e.default)(e);
    };
});