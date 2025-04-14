function e(e, t, n, i) {
    Object.defineProperty(e, t, {
        get: n,
        set: i,
        enumerable: !0,
        configurable: !0
    })
}

function t(e) {
    return e && e.__esModule ? e.default : e
}
var n = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
n.register("hueZm", (function(t, i) {
    var a;
    a = t.exports, Object.defineProperty(a, "__esModule", {
        value: !0,
        configurable: !0
    }), e(t.exports, "default", (function() {
        return F
    }));
    var o = n("divCp"),
        r = n("bNmF9"),
        s = n("b4KlF"),
        d = n("6Tpu2"),
        c = n("kwxcv"),
        u = n("cYgtB"),
        l = n("kuMVc"),
        g = n("idQfn"),
        h = n("2nzwM"),
        p = n("74zMu"),
        m = n("gAYWM"),
        f = n("bPsfL"),
        I = n("3uF2c"),
        v = n("bEuRh"),
        y = n("zRXDt"),
        E = n("fhnJp"),
        A = n("alREA"),
        C = n("jVQO4"),
        S = n("3iPiZ"),
        x = n("gwuwo"),
        _ = n("gbYDQ"),
        M = n("htXKS"),
        w = n("71gNd"),
        b = n("4uojN"),
        R = n("cK78N"),
        T = n("cnijD");
    class G extends r.default {
        addFullLook() {
            this.boundingBox.setHardcoded({
                width: this.options.width,
                height: this.options.height
            }), this.wirePoints.setBoth(this.x, this.y - this.options.height / 2 + 20), (0, h.AddMachineBody)(this), this.isPreview || ((0, p.AddColliders)(this), this.options.grantAction === s.GrantAction.broadcastOnChannel ? this.options.grantedItemImageUrl && (this.grantedImage = (0, m.AddImageFromUrl)(this)) : this.grantedImage = (0, f.AddItemImage)(this, this.options.grantedItemId, Math.min(c.Consts.ITEM_MAX_SIZE, .7 * this.options.width), Math.min(c.Consts.ITEM_MAX_SIZE, .5 * this.options.height - c.Consts.PRICE_HEIGHT), (0, g.GetDepthChange)(this, c.Depths.GRANTED_ITEM)), (0, l.AddPriceElement)(this), (0, u.AddRays)(this), (0, v.InitColors)(this))
        }
        addIconLook() {
            this.parts.add.sprite(I.IconAsset).view.setScale(.25)
        }
        updateFontSize() {
            if (!this.priceText) return;
            const e = this.priceText.view.text.length,
                t = .85 * this.options.width;
            let n = c.Consts.PRICE_TEXT_SIZE,
                i = e * n;
            const a = () => {
                i > t && (n -= 1, i = e * n, a())
            };
            a();
            const o = (0, x.default)().cameraHelper.zoom,
                r = n * o;
            this.priceText.view.setFontSize(r), this.priceText.view.setScale(1 / o);
            const s = (0, _.TextPadding)();
            this.priceText.view.setPadding(s, s, s, s)
        }
        constructor(e) {
            super(e), (0, o.default)(this, "grayScalePipelines", []), (0, o.default)(this, "grayScaleFactor", 0), (0, o.default)(this, "animationSpeedFactor", 1), (0, o.default)(this, "rays", []), (0, o.default)(this, "cumulTime", 0), (0, o.default)(this, "currentRaysAngle", 0), (0, o.default)(this, "onUpdate", (e => {
                if (this.cull.isInsideView) {
                    if (this.currentRaysAngle += e / 1e4 * this.animationSpeedFactor, this.rays.forEach(((e, t) => {
                            (0, u.UpdateRay)(this, e, t)
                        })), this.grantedImage && this.grantedImage.view) {
                        this.cumulTime += e;
                        const t = this.y - c.Consts.LEGS_HEIGHT / 2,
                            n = 5;
                        this.grantedImage.view.y = t + this.animationSpeedFactor * Math.sin(this.cumulTime / 550) * n
                    }(0, y.UpdateGrayscalePipelines)(this), (0, v.UpdateColors)(this), (0, M.default)(this)
                }
            })), (0, o.default)(this, "onStateChange", (e => {
                "active" === e && (this.state.active ? this.tweens.add({
                    targets: this,
                    grayScaleFactor: 0,
                    animationSpeedFactor: 1,
                    duration: 350
                }) : (this.grayScaleFactor = Math.max(this.grayScaleFactor, 1e-5), this.tweens.add({
                    targets: this,
                    grayScaleFactor: c.Consts.INACTIVE_GRAY_SCALE_FACTOR,
                    animationSpeedFactor: c.Consts.INACTIVE_ANIMATION_SLOW_DOWN,
                    duration: 350
                }))), "fundedAmount" === e && (0, l.AddPriceElement)(this)
            })), (0, o.default)(this, "onMessage", (e => {
                e.key !== s.Messages.purchased && e.key !== s.Messages.funded || e && e.data && e.data.characterId && e.data.characterId === (0, E.default)() && (e.key === s.Messages.purchased && this.options.soundEnabled && (0, C.playSound)({
                    path: (0, A.default)("devices/vending_machine/purchase.mp3"),
                    volume: (0, S.getVolume)({
                        volume: .76,
                        type: S.SoundType.soundEffect
                    })
                }), e.key === s.Messages.funded && this.options.soundEnabled && (0, C.playSound)({
                    path: (0, A.default)("devices/vending_machine/fund.mp3"),
                    volume: (0, S.getVolume)({
                        volume: .8,
                        type: S.SoundType.soundEffect
                    })
                }))
            })), (0, o.default)(this, "setupVisualEditing", (() => {
                if (!(0, d.InPreGamePhase)() || !(0, b.isSavedVersion)()) return;
                const e = (0, R.FetchOptionSchemaProperty)(this, "width"),
                    t = (0, R.FetchOptionSchemaProperty)(this, "height");
                this.visualEditing.add.box({
                    width: this.options.width,
                    height: this.options.height,
                    angle: 0,
                    minWidth: e.min,
                    maxWidth: e.max,
                    minHeight: t.min,
                    maxHeight: t.max,
                    rotable: !1,
                    keepRatio: !1,
                    onChange: e => {
                        (0, T.ReplaceVisualEditingPreview)(e.x, e.y, {
                            width: e.width,
                            height: e.height
                        })
                    }
                })
            })), (0, o.default)(this, "setupVisualEditingInvisible", (() => {
                if (!(0, d.InPreGamePhase)() || !(0, b.isSavedVersion)()) return;
                const e = (0, R.FetchOptionSchemaProperty)(this, "radius");
                this.visualEditing.add.circle({
                    radius: this.options.radius,
                    minRadius: e.min,
                    maxRadius: e.max,
                    rotable: !1,
                    resizable: !0,
                    onChange: e => {
                        (0, T.ReplaceVisualEditingPreview)(e.x, e.y, {
                            radius: e.radius
                        })
                    }
                })
            })), (0, d.InPreGamePhase)() && !this.options.activeOnStart && (this.animationSpeedFactor = c.Consts.INACTIVE_ANIMATION_SLOW_DOWN, this.grayScaleFactor = c.Consts.INACTIVE_GRAY_SCALE_FACTOR), (0, d.InGamePhase)() && !this.state.active && (this.animationSpeedFactor = c.Consts.INACTIVE_ANIMATION_SLOW_DOWN, this.grayScaleFactor = c.Consts.INACTIVE_GRAY_SCALE_FACTOR), this.options.visibleInGame ? this.setupVisualEditing() : this.setupVisualEditingInvisible(), (0, w.default)(this), this.options.visibleInGame ? this.options.visibleInGame && this.addFullLook() : (0, d.InPreGamePhase)() && (0, b.isSavedVersion)() ? this.addIconLook() : this.boundingBox.setHardcoded({
                width: 2 * this.options.radius,
                height: 2 * this.options.radius
            })
        }
    }
    var F = G
})), n.register("b4KlF", (function(t, n) {
    let i;
    var a;
    e(t.exports, "GrantAction", (function() {
        return i
    })), e(t.exports, "Messages", (function() {
        return o
    })), (a = i || (i = {})).grantItem = "Grant Item", a.broadcastOnChannel = "Broadcast On Channel";
    const o = {
        purchase: "purchase",
        purchased: "purchased",
        funded: "funded"
    }
})), n.register("kwxcv", (function(t, i) {
    e(t.exports, "Consts", (function() {
        return o
    })), e(t.exports, "Depths", (function() {
        return r
    })), e(t.exports, "REQUIRED_AMOUNT_TEXT_STYLE", (function() {
        return s
    })), e(t.exports, "InteractionMessages", (function() {
        return d
    })), e(t.exports, "GRAYSCALE_COLORS", (function() {
        return c
    }));
    var a = n("iMOcM");
    const o = {
            FRAME_SCALE: .4,
            FRAME_MARGINS_NINE_SLICE: 120,
            LEGS_HEIGHT: 40,
            REQUIRED_ITEM_MAX_SIZE: 30,
            ITEM_MAX_SIZE: 150,
            PRICE_HEIGHT: 42,
            INACTIVE_GRAY_SCALE_FACTOR: 1,
            INACTIVE_ANIMATION_SLOW_DOWN: .5,
            RAY_TEXTURE_WIDTH: 39,
            RAY_TEXTURE_HEIGHT: 380,
            PRICE_TEXT_SIZE: 24
        },
        r = {
            BG: 1,
            RAYS: 2,
            LEG: 3,
            INFO_BG: 4,
            INFO: 5,
            GRANTED_ITEM: 6,
            FRAME: 7
        },
        s = {
            fontSize: `${o.PRICE_TEXT_SIZE}px`,
            fontFamily: "Fugaz One"
        },
        d = {
            inStock: e => ({
                message: `In Stock (${e})`,
                color: "#c8e6c9"
            }),
            notEnoughRequiredItem: {
                message: "Cannot Afford",
                color: "#ffcdd2"
            },
            outOfStock: {
                message: "Out Of Stock",
                color: "#ffcdd2"
            },
            notAvailable: {
                message: "Not Available",
                color: "#ffcdd2"
            },
            fundingStatus: {
                message: (e, t, n) => `${(0,a.numberWithCommas)(e)}/${(0,a.numberWithCommas)(t)} ${n}`
            },
            defaultItemName: "Item",
            purchaseAction: "to purchase",
            fundingAction: "to fund"
        },
        c = {
            ray: "#CECECE",
            bg1: "#6A6A6A",
            bg2: "#CECECE"
        }
})), n.register("cYgtB", (function(t, i) {
    e(t.exports, "AddRays", (function() {
        return c
    })), e(t.exports, "UpdateRay", (function() {
        return u
    }));
    var a = n("36IJb"),
        o = n("kwxcv"),
        r = n("3uF2c"),
        s = (o = n("kwxcv"), n("idQfn")),
        d = n("bEuRh");
    const c = e => {
            const t = (0, d.GetColors)(e);
            for (let n = 0; n < e.options.numberOfRays; n++) e.parts.add.sprite({
                imageId: r.RayAsset.imageId,
                imageUrl: r.RayAsset.imageUrl,
                y: -20,
                originX: .5,
                originY: 1,
                ignoreInput: !0,
                depthChange: (0, s.GetDepthChange)(e, o.Depths.RAYS),
                onReady: i => {
                    e.rays.push(i), u(e, i, n), i.view.alpha = e.options.raysAlpha, i.view.blendMode = e.options.raysAdditive ? 1 : 0, i.view.tint = (0, a.GetNumberFromHexColor)(t.rays), n === e.options.numberOfRays - 1 && (0, d.UpdateColors)(e, !0)
                }
            })
        },
        u = (e, t, n) => {
            const i = n * (2 * Math.PI / e.options.numberOfRays) + e.currentRaysAngle;
            t.view.rotation = i;
            const a = i,
                r = Math.atan(19.5 * e.options.raysWidthFactor / 380),
                s = e.options.width / 2,
                d = (e.options.height - o.Consts.LEGS_HEIGHT) / 2;
            const c = Math.min(Math.abs(d / Math.cos(a - r)), Math.abs(s / Math.cos(Math.PI / 2 - a - r)), Math.abs(d / Math.cos(a + r)), Math.abs(s / Math.cos(Math.PI / 2 - a + r))) / 380;
            t.view.scaleY = c, t.view.scaleX = c * e.options.raysWidthFactor
        }
})), n.register("3uF2c", (function(t, i) {
    e(t.exports, "BgAAsset", (function() {
        return o
    })), e(t.exports, "BgBAsset", (function() {
        return r
    })), e(t.exports, "RayAsset", (function() {
        return s
    })), e(t.exports, "FrameAsset", (function() {
        return d
    })), e(t.exports, "LegAsset", (function() {
        return c
    })), e(t.exports, "InfoAsset", (function() {
        return u
    })), e(t.exports, "IconAsset", (function() {
        return l
    }));
    var a = n("alREA");
    const o = {
            imageId: "vending_machine_bg_a",
            imageUrl: (0, a.default)("devices/vending_machine/bg_a.png")
        },
        r = {
            imageId: "vending_machine_bg_b",
            imageUrl: (0, a.default)("devices/vending_machine/bg_b.png")
        },
        s = ((0, a.default)("devices/vending_machine/rays.png"), {
            imageId: "vending_machine_ray",
            imageUrl: (0, a.default)("devices/vending_machine/ray.png")
        }),
        d = {
            imageId: "vending_machine_frame",
            imageUrl: (0, a.default)("devices/vending_machine/frame.png")
        },
        c = {
            imageId: "vending_machine_leg",
            imageUrl: (0, a.default)("devices/vending_machine/leg.png")
        },
        u = {
            imageId: "vending_machine_info",
            imageUrl: (0, a.default)("devices/vending_machine/info.png")
        },
        l = {
            imageId: "vending_machine_icon",
            imageUrl: (0, a.default)("devices/vending_machine/previewIcon.png")
        };
    (0, a.default)("devices/item_granter/question-mark-2.png")
})), n.register("idQfn", (function(t, i) {
    e(t.exports, "GetDepthChange", (function() {
        return o
    }));
    var a = n("050o1");
    const o = (e, t) => e.options.height / 2 + (0, a.default)(t)
})), n.register("bEuRh", (function(t, i) {
    e(t.exports, "GetColors", (function() {
        return h
    })), e(t.exports, "InitColors", (function() {
        return p
    })), e(t.exports, "UpdateColors", (function() {
        return m
    }));
    var a = n("41xtr"),
        o = n("jSWV1"),
        r = n("36IJb"),
        s = n("f45q0"),
        d = n("6edaj"),
        c = n("kwxcv"),
        u = n("b4KlF");
    const l = (e, t) => {
            const n = Phaser.Display.Color.HexStringToColor(e);
            return {
                grayscale: Phaser.Display.Color.HexStringToColor(t),
                color: n
            }
        },
        g = (e, t) => {
            const n = {
                red: Math.round(Phaser.Math.Linear(e.color.red, e.grayscale.red, t)),
                green: Math.round(Phaser.Math.Linear(e.color.green, e.grayscale.green, t)),
                blue: Math.round(Phaser.Math.Linear(e.color.blue, e.grayscale.blue, t))
            };
            return (0, r.GetNumberFromHexColor)((0, d.rgbToColorString)(n))
        },
        h = e => {
            if (e.options.grantAction === u.GrantAction.grantItem && e.options.matchItemRarity) {
                const n = (0, s.FetchItemOption)(e.options.grantedItemId);
                var t;
                const i = null !== (t = null == n ? void 0 : n.rarity) && void 0 !== t ? t : o.InventoryItemRarity.common,
                    r = a.InventoryRarityColorsHex[i];
                return {
                    rays: r.a,
                    bg1: r.b,
                    bg2: r.a
                }
            }
            return {
                rays: e.options.raysColor,
                bg1: e.options.backgroundColor1,
                bg2: e.options.backgroundColor2
            }
        },
        p = e => {
            const t = h(e);
            e.raysGrayscale = l(t.rays, c.GRAYSCALE_COLORS.ray), e.bg1Grayscale = l(t.bg1, c.GRAYSCALE_COLORS.bg1), e.bg2Grayscale = l(t.bg2, c.GRAYSCALE_COLORS.bg2)
        },
        m = (e, t = !1) => {
            var n, i, a, o;
            if (e.lastGrayscaleFactorUpdate === e.grayScaleFactor && !t) return;
            e.lastGrayscaleFactorUpdate = e.grayScaleFactor, e.raysGrayscale || p(e);
            const r = g(e.raysGrayscale, e.grayScaleFactor),
                s = g(e.bg1Grayscale, e.grayScaleFactor),
                d = g(e.bg2Grayscale, e.grayScaleFactor);
            e.rays.forEach((e => {
                e.view.tint = r
            })), null === (n = e.bg1) || void 0 === n || null === (i = n.view) || void 0 === i || i.setTint(s), null === (a = e.bg2) || void 0 === a || null === (o = a.view) || void 0 === o || o.setTint(d)
        }
})), n.register("kuMVc", (function(t, i) {
    e(t.exports, "AddPriceElement", (function() {
        return u
    }));
    var a = n("kwxcv"),
        o = n("3uF2c"),
        r = (a = n("kwxcv"), n("idQfn")),
        s = n("bPsfL"),
        d = n("2BPYb"),
        c = n("aJxqr");
    const u = e => {
        if (!e.options.visibleInGame) return;
        const t = e.options.height / 2 - 90;
        e.priceAreaInfoRectangle || (e.priceAreaInfoRectangle = e.parts.add.sprite({
            ...o.InfoAsset,
            y: t,
            depthChange: (0, r.GetDepthChange)(e, a.Depths.INFO_BG)
        })), (0, d.default)({
            familyName: a.REQUIRED_AMOUNT_TEXT_STYLE.fontFamily,
            onLoad: () => {
                const n = (0, c.default)(e);
                if (e.priceText) e.priceText.view.setText(n);
                else {
                    const n = e.parts.add.text({
                        text: (0, c.default)(e),
                        y: t,
                        depthChange: (0, r.GetDepthChange)(e, a.Depths.INFO),
                        textStyle: a.REQUIRED_AMOUNT_TEXT_STYLE
                    });
                    e.priceText = n
                }
                e.updateFontSize();
                const i = a.Consts.REQUIRED_ITEM_MAX_SIZE,
                    o = n => {
                        n.view.y = e.y + t;
                        const a = e.priceText.getBounds().width,
                            o = i + a + 7;
                        n.view.x = -o / 2 + i / 2 + e.x, e.priceText.view.x = o / 2 - a / 2 + e.x
                    };
                e.requiredImage ? o(e.requiredImage) : e.requiredImage = (0, s.AddItemImage)(e, e.options.requiredItemId, i, .8 * a.Consts.PRICE_HEIGHT, a.Depths.INFO, (e => {
                    o(e)
                }))
            }
        })
    }
})), n.register("bPsfL", (function(t, i) {
    e(t.exports, "AddItemImage", (function() {
        return u
    }));
    var a = n("iRjsB"),
        o = n("fHf8O"),
        r = n("cqr0A"),
        s = n("fniCL"),
        d = n("idQfn"),
        c = n("zRXDt");
    const u = (e, t, n, i, u, l) => {
        const g = {
            ...s.UnknownItemAsset
        };
        if (t) {
            const e = a.default.worldOptions.itemOptions.find((e => e.id === t));
            e && (g.imageId = e.id, g.imageUrl = e.previewImage)
        }
        const h = (0, o.default)(g.imageId),
            p = (0, r.default)({
                height: h.height,
                width: h.width,
                newWidth: i,
                newHeight: n
            });
        return e.parts.add.sprite({
            imageId: g.imageId,
            imageUrl: g.imageUrl,
            depthChange: (0, d.GetDepthChange)(e, u),
            displayWidth: p.width,
            displayHeight: p.height,
            onReady: t => {
                e.grayScaleFactor > 0 && (0, c.AddGrayscalePipeline)(e, t), l && l(t)
            }
        })
    }
})), n.register("fniCL", (function(t, i) {
    e(t.exports, "BaseAsset", (function() {
        return o
    })), e(t.exports, "UnknownItemAsset", (function() {
        return r
    }));
    var a = n("alREA");
    const o = {
            imageId: (0, a.default)("devices/item_granter/base.png"),
            imageUrl: (0, a.default)("devices/item_granter/base.png")
        },
        r = {
            imageId: "__UNKNOWN_ITEM",
            imageUrl: (0, a.default)("devices/item_granter/question-mark-2.png")
        }
})), n.register("zRXDt", (function(t, n) {
    e(t.exports, "AddGrayscalePipeline", (function() {
        return i
    })), e(t.exports, "UpdateGrayscalePipelines", (function() {
        return o
    }));
    const i = (e, t) => {
            e.grayScalePipelines.push(e.scene.plugins.get("rexGrayScalePipeline").add(t.view, {
                intensity: e.grayScaleFactor
            }))
        },
        a = (e, t) => {
            e.scene.plugins.get("rexGrayScalePipeline").remove(t.view)
        },
        o = e => {
            e.grayScaleFactor > 0 ? ((e => {
                var t, n;
                e.grayScalePipelines.length > 0 || ((null === (t = e.requiredImage) || void 0 === t ? void 0 : t.view) && i(e, e.requiredImage), (null === (n = e.grantedImage) || void 0 === n ? void 0 : n.view) && i(e, e.grantedImage))
            })(e), e.grayScalePipelines.forEach((t => {
                t.intensity = e.grayScaleFactor
            }))) : (e => {
                var t, n;
                0 !== e.grayScalePipelines.length && ((null === (t = e.requiredImage) || void 0 === t ? void 0 : t.view) && a(e, e.requiredImage), (null === (n = e.grantedImage) || void 0 === n ? void 0 : n.view) && a(e, e.grantedImage), e.grayScalePipelines = [])
            })(e)
        }
})), n.register("2BPYb", (function(i, a) {
    e(i.exports, "isGoogleFontLoaded", (function() {
        return s
    })), e(i.exports, "default", (function() {
        return d
    }));
    var o = n("7P9gc");
    const r = [],
        s = e => r.includes(e);
    var d = e => {
        const {
            familyName: n,
            onLoad: i
        } = e;
        r.includes(n) ? i && i() : t(o).load({
            google: {
                families: [`${n}:400,700`]
            },
            fontactive: e => {
                r.includes(e) || r.push(e), n === e && i && i()
            }
        })
    }
})), n.register("aJxqr", (function(t, i) {
    e(t.exports, "default", (function() {
        return r
    }));
    var a = n("iMOcM"),
        o = n("2MNSy");
    var r = e => {
        let t = `${(0,a.numberWithCommas)((0,o.GetCost)(e))}`;
        return e.options.allowFunding ? `${(0,a.numberWithCommas)(e.state.fundedAmount||0)} / ${t}` : t
    }
})), n.register("2MNSy", (function(t, i) {
    e(t.exports, "GetCost", (function() {
        return o
    }));
    var a = n("6Tpu2");
    const o = e => {
        return (0, a.InPreGamePhase)() ? e.options.amountOfRequiredItem : null !== (t = e.state.cost) && void 0 !== t ? t : e.options.amountOfRequiredItem;
        var t
    }
})), n.register("2nzwM", (function(t, i) {
    e(t.exports, "AddMachineBody", (function() {
        return u
    }));
    var a = n("36IJb"),
        o = n("3uF2c"),
        r = n("kwxcv"),
        s = n("bEuRh"),
        d = n("idQfn"),
        c = n("bDCcz");
    const u = e => {
        const t = -r.Consts.LEGS_HEIGHT / 2,
            n = {
                displayWidth: e.options.width - 20,
                displayHeight: e.options.height - 20 - r.Consts.LEGS_HEIGHT,
                depthChange: (0, d.GetDepthChange)(e, r.Depths.BG),
                y: t
            };
        e.options.showShadow && !(0, c.isPlatformer)() && e.shadows.add({
            r1: e.options.width / 2 + 20,
            r2: 60,
            y: e.options.height / 2 - 20
        });
        const i = (0, s.GetColors)(e);
        e.parts.add.sprite({
            ...o.BgAAsset,
            ...n,
            onReady: t => {
                e.bg1 = t, t.view.setTint((0, a.GetNumberFromHexColor)(i.bg1)), (0, s.UpdateColors)(e, !0)
            }
        }), e.parts.add.sprite({
            ...o.BgBAsset,
            ...n,
            ignoreInput: !0,
            onReady: t => {
                e.bg2 = t, t.view.setTint((0, a.GetNumberFromHexColor)(i.bg2)), (0, s.UpdateColors)(e, !0)
            }
        });
        const u = {
                ...o.LegAsset,
                y: e.options.height / 2 + t - 2,
                depthChange: (0, d.GetDepthChange)(e, r.Depths.LEG)
            },
            l = -e.options.width / 2 + 60;
        e.parts.add.sprite({
            ...u,
            x: l
        }), e.parts.add.sprite({
            ...u,
            x: -l,
            flipX: !0
        });
        const g = r.Consts.FRAME_MARGINS_NINE_SLICE;
        e.parts.add.ninePatch({
            columns: [g, g],
            rows: [g, g],
            y: t,
            scale: r.Consts.FRAME_SCALE,
            height: e.options.height - r.Consts.LEGS_HEIGHT,
            width: e.options.width,
            depthChange: (0, d.GetDepthChange)(e, r.Depths.FRAME),
            imageUrl: o.FrameAsset.imageUrl
        })
    }
})), n.register("74zMu", (function(t, i) {
    e(t.exports, "AddColliders", (function() {
        return o
    }));
    var a = n("kwxcv");
    const o = e => {
        e.colliders.add.box({
            x: 0,
            y: 5 - a.Consts.LEGS_HEIGHT + a.Consts.LEGS_HEIGHT / 2,
            w: e.options.width,
            h: e.options.height - a.Consts.LEGS_HEIGHT + 10
        })
    }
})), n.register("gAYWM", (function(t, i) {
    e(t.exports, "AddImageFromUrl", (function() {
        return u
    }));
    var a = n("fHf8O"),
        o = n("cqr0A"),
        r = n("kwxcv"),
        s = n("idQfn"),
        d = n("zRXDt"),
        c = n("41SvP");
    const u = e => {
        const t = (0, c.GetImageUrl)(e.options.grantedItemImageUrl);
        return e.parts.add.sprite({
            imageId: t,
            imageUrl: t,
            y: -r.Consts.LEGS_HEIGHT / 2,
            depthChange: (0, s.GetDepthChange)(e, r.Depths.GRANTED_ITEM),
            onReady: n => {
                const i = (0, a.default)(t),
                    s = (0, o.default)({
                        height: i.height,
                        width: i.width,
                        newWidth: Math.min(r.Consts.ITEM_MAX_SIZE, .7 * e.options.width),
                        newHeight: Math.min(r.Consts.ITEM_MAX_SIZE, .4 * e.options.height - r.Consts.PRICE_HEIGHT)
                    });
                n.view.setDisplaySize(s.width, s.height), e.grayScaleFactor > 0 && (0, d.AddGrayscalePipeline)(e, n)
            }
        })
    }
})), n.register("gbYDQ", (function(t, n) {
    e(t.exports, "TextPadding", (function() {
        return i
    }));
    const i = () => 4
})), n.register("htXKS", (function(t, i) {
    e(t.exports, "default", (function() {
        return g
    }));
    var a = n("6VXlx"),
        o = n("iXYH7"),
        r = n("d94w4"),
        s = n("47i0R"),
        d = n("8GKNu"),
        c = n("jEAwe"),
        u = n("kKZgG"),
        l = n("4gUfh");
    var g = (e, t) => {
        if ((0, u.default)(e)) return void e.interactiveZones.setForceDisabled(!0);
        if (e.interactiveZones.setForceDisabled(!1), !(0, a.IsCurrentInteractive)(e.id) && !t) return;
        const n = (0, l.default)(e),
            i = {
                message: (0, c.default)(e),
                action: (0, o.default)(e),
                topHeader: null == n ? void 0 : n.text,
                topHeaderColor: null == n ? void 0 : n.color,
                bottomHeader: (0, s.default)(e),
                duration: (0, d.default)(e),
                allowedToInteract: (0, r.default)(e)
            };
        e.interactiveZones.setInfo(i)
    }
})), n.register("6VXlx", (function(t, i) {
    e(t.exports, "IsCurrentInteractive", (function() {
        return o
    }));
    var a = n("gwuwo");
    const o = e => {
        var t;
        return (null === (t = (0, a.default)().worldManager.devices.interactives.currentDevice) || void 0 === t ? void 0 : t.id) === e
    }
})), n.register("iXYH7", (function(t, i) {
    e(t.exports, "default", (function() {
        return s
    }));
    var a = n("kwxcv"),
        o = n("fWvO9"),
        r = n("1kIJl");
    var s = e => {
        const t = (0, o.VendingMachineDeviceAmountRequiredToPurchase)(e),
            n = (0, o.VendingMachineDeviceAmountOfRequiredItemIHave)(e);
        return (0, r.VendingMachineDeviceFundingIsEnabled)(e) && n < t ? a.InteractionMessages.fundingAction : a.InteractionMessages.purchaseAction
    }
})), n.register("fWvO9", (function(t, i) {
    e(t.exports, "VendingMachineDeviceAmountRequiredToPurchase", (function() {
        return s
    })), e(t.exports, "VendingMachineDeviceAmountOfRequiredItemIHave", (function() {
        return d
    }));
    var a = n("iRjsB"),
        o = n("2MNSy"),
        r = n("1kIJl");
    const s = e => Math.max(0, (0, o.GetCost)(e) - ((0, r.VendingMachineDeviceFundingIsEnabled)(e) && e.state.fundedAmount || 0)),
        d = e => {
            let t = 0;
            const n = a.default.me.inventory.slots.get(e.options.requiredItemId);
            return n && (t = n.amount), t
        }
})), n.register("1kIJl", (function(t, n) {
    e(t.exports, "VendingMachineDeviceFundingIsEnabled", (function() {
        return i
    }));
    const i = e => e.options.allowFunding
})), n.register("d94w4", (function(t, i) {
    e(t.exports, "default", (function() {
        return r
    }));
    var a = n("fWvO9"),
        o = n("1kIJl");
    var r = e => {
        if (!e.state.active) return !1;
        if (e.options.useLimitedStock && e.state.currentStock <= 0) return !1;
        const t = (0, a.VendingMachineDeviceAmountRequiredToPurchase)(e),
            n = (0, a.VendingMachineDeviceAmountOfRequiredItemIHave)(e);
        return (0, o.VendingMachineDeviceFundingIsEnabled)(e) ? !!n : !(n < t)
    }
})), n.register("47i0R", (function(t, n) {
    e(t.exports, "default", (function() {
        return i
    }));
    var i = e => {
        var t;
        const n = null === (t = e.options.grantedItemDescription) || void 0 === t ? void 0 : t.trim();
        if (null == n ? void 0 : n.length) return n
    }
})), n.register("8GKNu", (function(t, i) {
    e(t.exports, "default", (function() {
        return o
    }));
    var a = n("fWvO9");
    var o = e => {
        const t = (0, a.VendingMachineDeviceAmountOfRequiredItemIHave)(e);
        return (0, a.VendingMachineDeviceAmountOfRequiredItemIHave)(e) >= t ? e.options.interactionDuration : 1
    }
})), n.register("jEAwe", (function(t, i) {
    e(t.exports, "default", (function() {
        return c
    }));
    var a = n("iMOcM"),
        o = n("3ugly"),
        r = n("kwxcv"),
        s = n("b4KlF"),
        d = n("2MNSy");
    var c = e => {
        var t;
        let n = null === (t = e.options.grantedItemName) || void 0 === t ? void 0 : t.trim();
        return n || e.options.grantAction !== s.GrantAction.grantItem || (n = (0, o.ItemName)(e.options.grantedItemId)), n || (n = r.InteractionMessages.defaultItemName), e.options.grantAction === s.GrantAction.grantItem && !e.options.visibleInGame && e.options.attachCostToNameWhenHidden && e.options.requiredItemId && (0, d.GetCost)(e) ? `${n} - ${(0,a.numberWithCommas)(e.options.amountOfRequiredItem)} ${(0,o.ItemName)(e.options.requiredItemId)}` : n
    }
})), n.register("kKZgG", (function(t, i) {
    e(t.exports, "default", (function() {
        return r
    }));
    var a = n("FQheJ"),
        o = n("aKxRF");
    var r = e => !e.options.visibleInGame && !e.state.active || !(!e.options.allowedPurchaseTeam || e.options.allowedPurchaseTeam === a.ANY_TEAM_DEVICE_OPTION || (0, o.default)() === e.options.allowedPurchaseTeam)
})), n.register("4gUfh", (function(t, i) {
    e(t.exports, "default", (function() {
        return c
    }));
    var a = n("3ugly"),
        o = n("kwxcv"),
        r = n("2MNSy"),
        s = n("fWvO9"),
        d = n("1kIJl");
    var c = e => {
        if (!e.state.active) return {
            text: o.InteractionMessages.notAvailable.message,
            color: o.InteractionMessages.notAvailable.color
        };
        if (e.options.useLimitedStock && e.state.currentStock <= 0) return {
            text: o.InteractionMessages.outOfStock.message,
            color: o.InteractionMessages.outOfStock.color
        };
        const t = (0, s.VendingMachineDeviceAmountRequiredToPurchase)(e),
            n = (0, s.VendingMachineDeviceAmountOfRequiredItemIHave)(e),
            i = (0, d.VendingMachineDeviceFundingIsEnabled)(e);
        return n < t && !i ? {
            text: o.InteractionMessages.notEnoughRequiredItem.message,
            color: o.InteractionMessages.notEnoughRequiredItem.color
        } : e.options.useLimitedStock ? {
            text: o.InteractionMessages.inStock(e.state.currentStock).message,
            color: o.InteractionMessages.inStock(e.state.currentStock).color
        } : i ? {
            text: o.InteractionMessages.fundingStatus.message(e.state.fundedAmount || 0, (0, r.GetCost)(e), (0, a.ItemName)(e.options.requiredItemId))
        } : {}
    }
})), n.register("71gNd", (function(t, i) {
    e(t.exports, "default", (function() {
        return s
    }));
    var a = n("6Tpu2"),
        o = n("b4KlF"),
        r = n("htXKS");
    var s = e => {
        (0, a.InPreGamePhase)() || (e.options.visibleInGame ? e.interactiveZones.add.rect({
            y: 25,
            width: e.options.width + 150,
            height: e.options.height + 150
        }) : e.interactiveZones.add.circle({
            r: e.options.radius
        }), e.interactiveZones.setCanInteractThroughColliders(!0), e.interactiveZones.onInteraction = () => {
            e.sendToServerDevice(o.Messages.purchase)
        }, e.interactiveZones.onInteractiveCb = () => {
            (0, r.default)(e, !0)
        })
    }
})), n.register("cK78N", (function(t, n) {
    e(t.exports, "FetchOptionSchemaProperty", (function() {
        return i
    }));
    const i = (e, t) => {
        var n, i, a;
        const o = e.deviceOption.optionSchema.options.find((e => e.key === t));
        return {
            min: null === (n = null == o ? void 0 : o.option.props) || void 0 === n ? void 0 : n.min,
            max: null === (i = null == o ? void 0 : o.option.props) || void 0 === i ? void 0 : i.max,
            step: null === (a = null == o ? void 0 : o.option.props) || void 0 === a ? void 0 : a.step
        }
    }
})), n.register("cnijD", (function(t, i) {
    e(t.exports, "ReplaceVisualEditingPreview", (function() {
        return d
    }));
    var a = n("dWqri"),
        o = n("eCsxR"),
        r = n("ittx1"),
        s = n("dNzyU");
    const d = (e, t, n) => {
        const i = (0, s.FetchVisualEditingPreview)(),
            d = (0, r.FetchCurrentlyEditedDevice)();
        if (!d || !i) return;
        const c = d.layers.isOnNaturalDepth() ? void 0 : t + d.layers.getDepthShift();
        (0, o.default)({
            deviceOption: i.deviceOption,
            id: a.VisualEditingConstants.previewId,
            x: e,
            y: t,
            depth: c,
            layerId: d.layers.getLayer(),
            name: i.name,
            isPreview: !0,
            options: {
                ...i.options,
                ...n
            },
            placedByClient: !0,
            state: i.deviceOption.defaultState
        })
    }
})), n.register("eCsxR", (function(t, i) {
    e(t.exports, "default", (function() {
        return r
    }));
    var a = n("gwuwo"),
        o = n("fCcDT");
    var r = e => {
        (0, a.default)().worldManager.devices.getDeviceById(e.id) && (0, o.default)(e)
    }
}));