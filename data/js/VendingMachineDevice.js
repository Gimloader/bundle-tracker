import {
    x as e
} from "./utils.js";
import {
    t
} from "./GetAssetPath.js";
import {
    r as n
} from "./polished.esm.js";
import {
    t as r
} from "./playSound.js";
import {
    T as i,
    o as a,
    s as o
} from "./FixPhaserBootProcess.js";
import {
    t as s
} from "./stores-2.js";
import {
    t as c
} from "./FetchScene.js";
import {
    n as l
} from "./isVersion.js";
import {
    r as u,
    t as d
} from "./InPhase.js";
import {
    t as f
} from "./FetchMyId.js";
import {
    t as ee
} from "./FetchMyTeam.js";
import {
    t as te
} from "./Device.js";
import {
    n as ne
} from "./RarityBackgrounds.js";
import {
    t as p
} from "./InventoryItemRarity.js";
import {
    t as m
} from "./FetchItemOption.js";
import {
    Dt as h,
    Et as g,
    G as _,
    V as v,
    v as y
} from "./App-42.js";
import {
    n as b,
    t as x
} from "./FetchOptionSchemaProperty.js";
import {
    t as re
} from "./LoadGoogleFontAfterSceneStart.js";
import {
    n as S
} from "./Assets.js";
import {
    t as C
} from "./FetchTextureDimensions.js";
import {
    t as w
} from "./TextPadding.js";
var T = function(e) {
        return e.grantItem = `Grant Item`, e.broadcastOnChannel = `Broadcast On Channel`, e
    }({}),
    E = {
        purchase: `purchase`,
        purchased: `purchased`,
        funded: `funded`
    },
    D = {
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
    O = {
        BG: 1,
        RAYS: 2,
        LEG: 3,
        INFO_BG: 4,
        INFO: 5,
        GRANTED_ITEM: 6,
        FRAME: 7
    },
    k = {
        fontSize: `${D.PRICE_TEXT_SIZE}px`,
        fontFamily: `Fugaz One`
    },
    A = {
        inStock: e => ({
            message: `In Stock (${e})`,
            color: `#c8e6c9`
        }),
        notEnoughRequiredItem: {
            message: `Cannot Afford`,
            color: `#ffcdd2`
        },
        outOfStock: {
            message: `Out Of Stock`,
            color: `#ffcdd2`
        },
        notAvailable: {
            message: `Not Available`,
            color: `#ffcdd2`
        },
        fundingStatus: {
            message: (t, n, r) => `${e(t)}/${e(n)} ${r}`
        },
        defaultItemName: `Item`,
        purchaseAction: `to purchase`,
        fundingAction: `to fund`
    },
    j = {
        ray: `#CECECE`,
        bg1: `#6A6A6A`,
        bg2: `#CECECE`
    },
    ie = {
        imageId: `vending_machine_bg_a`,
        imageUrl: t(`devices/vending_machine/bg_a.png`)
    },
    ae = {
        imageId: `vending_machine_bg_b`,
        imageUrl: t(`devices/vending_machine/bg_b.png`)
    };
t(`devices/vending_machine/rays.png`);
var M = {
        imageId: `vending_machine_ray`,
        imageUrl: t(`devices/vending_machine/ray.png`)
    },
    oe = {
        imageId: `vending_machine_frame`,
        imageUrl: t(`devices/vending_machine/frame.png`)
    },
    se = {
        imageId: `vending_machine_leg`,
        imageUrl: t(`devices/vending_machine/leg.png`)
    },
    ce = {
        imageId: `vending_machine_info`,
        imageUrl: t(`devices/vending_machine/info.png`)
    },
    le = {
        imageId: `vending_machine_icon`,
        imageUrl: t(`devices/vending_machine/previewIcon.png`)
    };
t(`devices/item_granter/question-mark-2.png`);
var N = (e, t) => e.options.height / 2 + g(t),
    P = (e, t) => {
        let n = Phaser.Display.Color.HexStringToColor(e);
        return {
            grayscale: Phaser.Display.Color.HexStringToColor(t),
            color: n
        }
    },
    F = (e, t) => {
        let r = {
            red: Math.round(Phaser.Math.Linear(e.color.red, e.grayscale.red, t)),
            green: Math.round(Phaser.Math.Linear(e.color.green, e.grayscale.green, t)),
            blue: Math.round(Phaser.Math.Linear(e.color.blue, e.grayscale.blue, t))
        };
        return y(n(r))
    },
    I = e => {
        if (e.options.grantAction === T.grantItem && e.options.matchItemRarity) {
            let t = m(e.options.grantedItemId),
                n = (t == null ? void 0 : t.rarity) ?? p.common,
                r = ne[n];
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
    L = e => {
        let t = I(e);
        e.raysGrayscale = P(t.rays, j.ray), e.bg1Grayscale = P(t.bg1, j.bg1), e.bg2Grayscale = P(t.bg2, j.bg2)
    },
    R = (e, t = !1) => {
        var n, r;
        if (e.lastGrayscaleFactorUpdate === e.grayScaleFactor && !t) return;
        e.lastGrayscaleFactorUpdate = e.grayScaleFactor, e.raysGrayscale || L(e);
        let i = F(e.raysGrayscale, e.grayScaleFactor),
            a = F(e.bg1Grayscale, e.grayScaleFactor),
            o = F(e.bg2Grayscale, e.grayScaleFactor);
        e.rays.forEach(e => {
            e.view.tint = i
        }), (n = e.bg1) == null || (n = n.view) == null || n.setTint(a), (r = e.bg2) == null || (r = r.view) == null || r.setTint(o)
    },
    z = e => {
        let t = I(e);
        for (let n = 0; n < e.options.numberOfRays; n++) e.parts.add.sprite({
            imageId: M.imageId,
            imageUrl: M.imageUrl,
            y: -20,
            originX: .5,
            originY: 1,
            ignoreInput: !0,
            depthChange: N(e, O.RAYS),
            onReady: r => {
                e.rays.push(r), B(e, r, n), r.view.alpha = e.options.raysAlpha, r.view.blendMode = +!!e.options.raysAdditive, r.view.tint = y(t.rays), n === e.options.numberOfRays - 1 && R(e, !0)
            }
        })
    },
    B = (e, t, n) => {
        let r = n * (Math.PI * 2 / e.options.numberOfRays) + e.currentRaysAngle;
        t.view.rotation = r;
        let i = r,
            a = Math.atan(39 / 2 * e.options.raysWidthFactor / 380),
            o = e.options.width / 2,
            s = (e.options.height - D.LEGS_HEIGHT) / 2,
            c = Math.min(Math.abs(s / Math.cos(i - a)), Math.abs(o / Math.cos(Math.PI / 2 - i - a)), Math.abs(s / Math.cos(i + a)), Math.abs(o / Math.cos(Math.PI / 2 - i + a))) / 380;
        t.view.scaleY = c, t.view.scaleX = c * e.options.raysWidthFactor
    },
    V = (e, t) => {
        e.grayScalePipelines.push(e.scene.plugins.get(`rexGrayScalePipeline`).add(t.view, {
            intensity: e.grayScaleFactor
        }))
    },
    H = (e, t) => {
        e.scene.plugins.get(`rexGrayScalePipeline`).remove(t.view)
    },
    U = e => {
        var t, n;
        e.grayScalePipelines.length > 0 || ((t = e.requiredImage) != null && t.view && V(e, e.requiredImage), (n = e.grantedImage) != null && n.view && V(e, e.grantedImage))
    },
    W = e => {
        var t, n;
        e.grayScalePipelines.length !== 0 && ((t = e.requiredImage) != null && t.view && H(e, e.requiredImage), (n = e.grantedImage) != null && n.view && H(e, e.grantedImage), e.grayScalePipelines = [])
    },
    ue = e => {
        e.grayScaleFactor > 0 ? (U(e), e.grayScalePipelines.forEach(t => {
            t.intensity = e.grayScaleFactor
        })) : W(e)
    },
    G = (e, t, n, r, i, a) => {
        let o = {
            ...S
        };
        if (t) {
            let e = s.worldOptions.itemOptions.find(e => e.id === t);
            e && (o.imageId = e.id, o.imageUrl = e.previewImage)
        }
        let c = C(o.imageId),
            l = h({
                height: c.height,
                width: c.width,
                newWidth: r,
                newHeight: n
            });
        return e.parts.add.sprite({
            imageId: o.imageId,
            imageUrl: o.imageUrl,
            depthChange: N(e, i),
            displayWidth: l.width,
            displayHeight: l.height,
            onReady: t => {
                e.grayScaleFactor > 0 && V(e, t), a && a(t)
            }
        })
    },
    K = e => u() ? e.options.amountOfRequiredItem : e.state.cost ?? e.options.amountOfRequiredItem,
    q = t => {
        let n = `${e(K(t))}`;
        return t.options.allowFunding ? `${e(t.state.fundedAmount||0)} / ${n}` : n
    },
    J = e => {
        if (!e.options.visibleInGame) return;
        let t = e.options.height / 2 - 90;
        e.priceAreaInfoRectangle || (e.priceAreaInfoRectangle = e.parts.add.sprite({
            ...ce,
            y: t,
            depthChange: N(e, O.INFO_BG)
        })), re({
            familyName: k.fontFamily,
            onLoad: () => {
                let n = q(e);
                e.priceText ? e.priceText.view.setText(n) : e.priceText = e.parts.add.text({
                    text: q(e),
                    y: t,
                    depthChange: N(e, O.INFO),
                    textStyle: k
                }), e.updateFontSize();
                let r = D.REQUIRED_ITEM_MAX_SIZE,
                    i = n => {
                        n.view.y = e.y + t;
                        let i = e.priceText.getBounds().width,
                            a = r + i + 7;
                        n.view.x = -a / 2 + r / 2 + e.x, e.priceText.view.x = a / 2 - i / 2 + e.x
                    };
                e.requiredImage ? i(e.requiredImage) : e.requiredImage = G(e, e.options.requiredItemId, r, D.PRICE_HEIGHT * .8, O.INFO, e => {
                    i(e)
                })
            }
        })
    },
    de = e => {
        let t = -D.LEGS_HEIGHT / 2,
            n = {
                displayWidth: e.options.width - 20,
                displayHeight: e.options.height - 20 - D.LEGS_HEIGHT,
                depthChange: N(e, O.BG),
                y: t
            };
        e.options.showShadow && !i() && e.shadows.add({
            r1: e.options.width / 2 + 20,
            r2: 60,
            y: e.options.height / 2 - 20
        });
        let r = I(e);
        e.parts.add.sprite({
            ...ie,
            ...n,
            onReady: t => {
                e.bg1 = t, t.view.setTint(y(r.bg1)), R(e, !0)
            }
        }), e.parts.add.sprite({
            ...ae,
            ...n,
            ignoreInput: !0,
            onReady: t => {
                e.bg2 = t, t.view.setTint(y(r.bg2)), R(e, !0)
            }
        });
        let a = {
                ...se,
                y: e.options.height / 2 + t - 2,
                depthChange: N(e, O.LEG)
            },
            o = -e.options.width / 2 + 60;
        e.parts.add.sprite({
            ...a,
            x: o
        }), e.parts.add.sprite({
            ...a,
            x: -o,
            flipX: !0
        });
        let s = D.FRAME_MARGINS_NINE_SLICE;
        e.parts.add.ninePatch({
            columns: [s, s],
            rows: [s, s],
            y: t,
            scale: D.FRAME_SCALE,
            height: e.options.height - D.LEGS_HEIGHT,
            width: e.options.width,
            depthChange: N(e, O.FRAME),
            imageUrl: oe.imageUrl
        })
    },
    fe = e => {
        e.colliders.add.box({
            x: 0,
            y: -D.LEGS_HEIGHT + 5 + D.LEGS_HEIGHT / 2,
            w: e.options.width,
            h: e.options.height - D.LEGS_HEIGHT + 10
        })
    },
    pe = e => {
        let t = v(e.options.grantedItemImageUrl);
        return e.parts.add.sprite({
            imageId: t,
            imageUrl: t,
            y: -D.LEGS_HEIGHT / 2,
            depthChange: N(e, O.GRANTED_ITEM),
            onReady: n => {
                let r = C(t),
                    i = h({
                        height: r.height,
                        width: r.width,
                        newWidth: Math.min(D.ITEM_MAX_SIZE, e.options.width * .7),
                        newHeight: Math.min(D.ITEM_MAX_SIZE, e.options.height * .4 - D.PRICE_HEIGHT)
                    });
                n.view.setDisplaySize(i.width, i.height), e.grayScaleFactor > 0 && V(e, n)
            }
        })
    },
    me = e => {
        var t;
        return ((t = c().worldManager.devices.interactives.currentDevice) == null ? void 0 : t.id) === e
    },
    Y = e => e.options.allowFunding,
    X = e => Math.max(0, K(e) - (Y(e) && e.state.fundedAmount || 0)),
    Z = e => {
        let t = 0,
            n = s.me.inventory.slots.get(e.options.requiredItemId);
        return n && (t = n.amount), t
    },
    Q = e => {
        let t = X(e),
            n = Z(e);
        return Y(e) && n < t ? A.fundingAction : A.purchaseAction
    },
    he = e => {
        if (!e.state.active || e.options.useLimitedStock && e.state.currentStock <= 0) return !1;
        let t = X(e),
            n = Z(e);
        return Y(e) ? !!n : !(n < t)
    },
    ge = e => {
        var t;
        let n = (t = e.options.grantedItemDescription) == null ? void 0 : t.trim();
        if (n != null && n.length) return n
    },
    _e = e => {
        let t = Z(e);
        return Z(e) >= t ? e.options.interactionDuration : 1
    },
    ve = t => {
        var n;
        let r = (n = t.options.grantedItemName) == null ? void 0 : n.trim();
        return !r && t.options.grantAction === T.grantItem && (r = _(t.options.grantedItemId)), r || (r = A.defaultItemName), t.options.grantAction === T.grantItem && !t.options.visibleInGame && t.options.attachCostToNameWhenHidden && t.options.requiredItemId && K(t) ? `${r} - ${e(t.options.amountOfRequiredItem)} ${_(t.options.requiredItemId)}` : r
    },
    ye = e => !!(!e.options.visibleInGame && !e.state.active || e.options.allowedPurchaseTeam && e.options.allowedPurchaseTeam !== `__ANY_TEAM__` && ee() !== e.options.allowedPurchaseTeam),
    be = e => {
        if (!e.state.active) return {
            text: A.notAvailable.message,
            color: A.notAvailable.color
        };
        if (e.options.useLimitedStock && e.state.currentStock <= 0) return {
            text: A.outOfStock.message,
            color: A.outOfStock.color
        };
        let t = X(e),
            n = Z(e),
            r = Y(e);
        return n < t && !r ? {
            text: A.notEnoughRequiredItem.message,
            color: A.notEnoughRequiredItem.color
        } : e.options.useLimitedStock ? {
            text: A.inStock(e.state.currentStock).message,
            color: A.inStock(e.state.currentStock).color
        } : r ? {
            text: A.fundingStatus.message(e.state.fundedAmount || 0, K(e), _(e.options.requiredItemId))
        } : {}
    },
    $ = (e, t) => {
        if (ye(e)) {
            e.interactiveZones.setForceDisabled(!0);
            return
        }
        if (e.interactiveZones.setForceDisabled(!1), !me(e.id) && !t) return;
        let n = be(e),
            r = {
                message: ve(e),
                action: Q(e),
                topHeader: n == null ? void 0 : n.text,
                topHeaderColor: n == null ? void 0 : n.color,
                bottomHeader: ge(e),
                duration: _e(e),
                allowedToInteract: he(e)
            };
        e.interactiveZones.setInfo(r)
    },
    xe = e => {
        u() || (e.options.visibleInGame ? e.interactiveZones.add.rect({
            y: 25,
            width: e.options.width + 150,
            height: e.options.height + 150
        }) : e.interactiveZones.add.circle({
            r: e.options.radius
        }), e.interactiveZones.setCanInteractThroughColliders(!0), e.interactiveZones.onInteraction = () => {
            e.sendToServerDevice(E.purchase)
        }, e.interactiveZones.onInteractiveCb = () => {
            $(e, !0)
        })
    },
    Se = class extends te {
        constructor(e) {
            super(e), this.grayScalePipelines = [], this.grayScaleFactor = 0, this.animationSpeedFactor = 1, this.rays = [], this.cumulTime = 0, this.currentRaysAngle = 0, this.onUpdate = e => {
                if (this.cull.isInsideView) {
                    if (this.currentRaysAngle += e / 1e4 * this.animationSpeedFactor, this.rays.forEach((e, t) => {
                            B(this, e, t)
                        }), this.grantedImage && this.grantedImage.view) {
                        this.cumulTime += e;
                        let t = this.y - D.LEGS_HEIGHT / 2;
                        this.grantedImage.view.y = t + this.animationSpeedFactor * Math.sin(this.cumulTime / 550) * 5
                    }
                    ue(this), R(this), $(this)
                }
            }, this.onStateChange = e => {
                e === `active` && (this.state.active ? this.tweens.add({
                    targets: this,
                    grayScaleFactor: 0,
                    animationSpeedFactor: 1,
                    duration: 350
                }) : (this.grayScaleFactor = Math.max(this.grayScaleFactor, 1e-5), this.tweens.add({
                    targets: this,
                    grayScaleFactor: D.INACTIVE_GRAY_SCALE_FACTOR,
                    animationSpeedFactor: D.INACTIVE_ANIMATION_SLOW_DOWN,
                    duration: 350
                }))), e === `fundedAmount` && J(this)
            }, this.onMessage = e => {
                (e.key === E.purchased || e.key === E.funded) && e && e.data && e.data.characterId && e.data.characterId === f() && (e.key === E.purchased && this.options.soundEnabled && r({
                    path: t(`devices/vending_machine/purchase.mp3`),
                    volume: o({
                        volume: .76,
                        type: a.soundEffect
                    })
                }), e.key === E.funded && this.options.soundEnabled && r({
                    path: t(`devices/vending_machine/fund.mp3`),
                    volume: o({
                        volume: .8,
                        type: a.soundEffect
                    })
                }))
            }, this.setupVisualEditing = () => {
                if (!u() || !l()) return;
                let e = x(this, `width`),
                    t = x(this, `height`);
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
                        b(e.x, e.y, {
                            width: e.width,
                            height: e.height
                        })
                    }
                })
            }, this.setupVisualEditingInvisible = () => {
                if (!u() || !l()) return;
                let e = x(this, `radius`);
                this.visualEditing.add.circle({
                    radius: this.options.radius,
                    minRadius: e.min,
                    maxRadius: e.max,
                    rotable: !1,
                    resizable: !0,
                    onChange: e => {
                        b(e.x, e.y, {
                            radius: e.radius
                        })
                    }
                })
            }, u() && !this.options.activeOnStart && (this.animationSpeedFactor = D.INACTIVE_ANIMATION_SLOW_DOWN, this.grayScaleFactor = D.INACTIVE_GRAY_SCALE_FACTOR), d() && !this.state.active && (this.animationSpeedFactor = D.INACTIVE_ANIMATION_SLOW_DOWN, this.grayScaleFactor = D.INACTIVE_GRAY_SCALE_FACTOR), this.options.visibleInGame ? this.setupVisualEditing() : this.setupVisualEditingInvisible(), xe(this), this.options.visibleInGame ? this.options.visibleInGame && this.addFullLook() : u() && l() ? this.addIconLook() : this.boundingBox.setHardcoded({
                width: this.options.radius * 2,
                height: this.options.radius * 2
            })
        }
        addFullLook() {
            this.boundingBox.setHardcoded({
                width: this.options.width,
                height: this.options.height
            }), this.wirePoints.setBoth(this.x, this.y - this.options.height / 2 + 20), de(this), !this.isPreview && (fe(this), this.options.grantAction === T.broadcastOnChannel ? this.options.grantedItemImageUrl && (this.grantedImage = pe(this)) : this.grantedImage = G(this, this.options.grantedItemId, Math.min(D.ITEM_MAX_SIZE, this.options.width * .7), Math.min(D.ITEM_MAX_SIZE, this.options.height * .5 - D.PRICE_HEIGHT), N(this, O.GRANTED_ITEM)), J(this), z(this), L(this))
        }
        addIconLook() {
            this.parts.add.sprite(le).view.setScale(.25)
        }
        updateFontSize() {
            if (!this.priceText) return;
            let e = this.priceText.view.text.length,
                t = this.options.width * .85,
                n = D.PRICE_TEXT_SIZE,
                r = e * n,
                i = () => {
                    r > t && (--n, r = e * n, i())
                };
            i();
            let a = c().cameraHelper.zoom,
                o = n * a;
            this.priceText.view.setFontSize(o), this.priceText.view.setScale(1 / a);
            let s = w();
            this.priceText.view.setPadding(s, s, s, s)
        }
    };
export {
    Se as
    default
};