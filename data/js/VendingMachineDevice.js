import {
    as as K,
    au as A,
    a0 as v,
    b2 as tt,
    b3 as nt,
    aQ as B,
    aZ as X,
    aY as et,
    aS as x,
    b4 as it,
    b5 as ot,
    al as at,
    T as st
} from "./App-41.js";
import {
    s as Y,
    I,
    c as rt,
    a as z,
    g as N,
    S as D,
    i as M,
    d as ht
} from "./FixSpinePlugin.js";
import {
    b5 as f
} from "./_index.js";
import {
    G as l
} from "./GetAssetPath.js";
import {
    b as mt
} from "./polished.esm.js";
import {
    U as gt
} from "./Assets.js";
import {
    L as pt
} from "./LoadGoogleFontAfterSceneStart.js";
import {
    p as L
} from "./playSound.js";
import {
    T as lt
} from "./TextPadding.js";
import {
    F as b,
    R as U
} from "./ReplaceVisualEditingPreview.js";
import "./Button.js";
import "./mobxreact.esm.js";
import "./index-21.js";
import "./QuizTypes.js";
import "./MapModeType.js";
import "./TutorialConsts.js";
import "./ActionButton.js";
import "./index-5.js";
import "./index-18.js";
import "./context.js";
import "./FontAwesomeIcon.js";
import "./Centered.js";
import "./CapitalizeFirstLetter.js";
import "./index-4.js";
import "./motion.js";
import "./index-2.js";
import "./index-14.js";
import "./EditOutlined.js";
import "./styleChecker.js";
import "./index-3.js";
import "./CheckOutlined.js";
import "./CopyOutlined.js";
import "./SixteenByNineScaler.js";
import "./index-20.js";
import "./index-22.js";
import "./index-1.js";
import "./progress.js";
import "./ElementIds.js";
import "./SeasonTicketName.js";
import "./useQuery.js";
import "./___vite-browser-external_commonjs-proxy.js";
import "./util-1.js";
import "./util-2.js";
import "./Shortcut.js";
import "./Names.js";
import "./useWillUnmount.js";
import "./use-motion-value.js";
import "./use-transform.js";
import "./index-6.js";
import "./AccessibleAnchor.js";
import "./CircularProgress.js";
import "./capitalize.js";
import "./inheritsLoose.js";
import "./index-17.js";
import "./use-force-update.js";
import "./GimkitLiveQuestion.js";
import "./Text.js";
import "./getCloudinaryUrl.js";
import "./LazyLatexRenderer.js";
import "./Tooltip.js";
import "./howler.js";
import "./index-9.js";
import "./index-23.js";
import "./useIntervalWhen.js";
import "./index-10.js";
import "./move.js";
import "./react-flip-move.es.js";
import "./sounds.js";
import "./App-5.js";
import "./AnimatedBackground-2.js";
import "./useDebouncedValue.js";
import "./MapStyle.js";
import "./FillRemainingSpace.js";
import "./index-24.js";
var y = (t => (t.grantItem = "Grant Item", t.broadcastOnChannel = "Broadcast On Channel", t))(y || {});
const d = {
        purchase: "purchase",
        purchased: "purchased",
        funded: "funded"
    },
    s = {
        FRAME_SCALE: .4,
        FRAME_MARGINS_NINE_SLICE: 120,
        LEGS_HEIGHT: 40,
        REQUIRED_ITEM_MAX_SIZE: 30,
        ITEM_MAX_SIZE: 150,
        PRICE_HEIGHT: 42,
        INACTIVE_GRAY_SCALE_FACTOR: 1,
        INACTIVE_ANIMATION_SLOW_DOWN: .5,
        PRICE_TEXT_SIZE: 24
    },
    c = {
        BG: 1,
        RAYS: 2,
        LEG: 3,
        INFO_BG: 4,
        INFO: 5,
        GRANTED_ITEM: 6,
        FRAME: 7
    },
    V = {
        fontSize: `${s.PRICE_TEXT_SIZE}px`,
        fontFamily: "Fugaz One"
    },
    g = {
        inStock: t => ({
            message: `In Stock (${t})`,
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
            message: (t, n, e) => `${f(t)}/${f(n)} ${e}`
        },
        defaultItemName: "Item",
        purchaseAction: "to purchase",
        fundingAction: "to fund"
    },
    R = {
        ray: "#CECECE",
        bg1: "#6A6A6A",
        bg2: "#CECECE"
    },
    ct = {
        imageId: "vending_machine_bg_a",
        imageUrl: l("devices/vending_machine/bg_a.png")
    },
    ut = {
        imageId: "vending_machine_bg_b",
        imageUrl: l("devices/vending_machine/bg_b.png")
    };
l("devices/vending_machine/rays.png");
const k = {
        imageId: "vending_machine_ray",
        imageUrl: l("devices/vending_machine/ray.png")
    },
    It = {
        imageUrl: l("devices/vending_machine/frame.png")
    },
    dt = {
        imageId: "vending_machine_leg",
        imageUrl: l("devices/vending_machine/leg.png")
    },
    ft = {
        imageId: "vending_machine_info",
        imageUrl: l("devices/vending_machine/info.png")
    },
    yt = {
        imageId: "vending_machine_icon",
        imageUrl: l("devices/vending_machine/previewIcon.png")
    };
l("devices/item_granter/question-mark-2.png");
const u = (t, n) => t.options.height / 2 + K(n),
    G = (t, n) => {
        const e = Phaser.Display.Color.HexStringToColor(t);
        return {
            grayscale: Phaser.Display.Color.HexStringToColor(n),
            color: e
        }
    },
    F = (t, n) => {
        const e = {
            red: Math.round(Phaser.Math.Linear(t.color.red, t.grayscale.red, n)),
            green: Math.round(Phaser.Math.Linear(t.color.green, t.grayscale.green, n)),
            blue: Math.round(Phaser.Math.Linear(t.color.blue, t.grayscale.blue, n))
        };
        return A(mt(e))
    },
    P = t => {
        if (t.options.grantAction === y.grantItem && t.options.matchItemRarity) {
            const n = v(t.options.grantedItemId),
                e = (n == null ? void 0 : n.rarity) ?? tt.common,
                i = nt[e];
            return {
                rays: i.a,
                bg1: i.b,
                bg2: i.a
            }
        }
        return {
            rays: t.options.raysColor,
            bg1: t.options.backgroundColor1,
            bg2: t.options.backgroundColor2
        }
    },
    $ = t => {
        const n = P(t);
        t.raysGrayscale = G(n.rays, R.ray), t.bg1Grayscale = G(n.bg1, R.bg1), t.bg2Grayscale = G(n.bg2, R.bg2)
    },
    _ = (t, n = !1) => {
        var r, h, m, a;
        if (t.lastGrayscaleFactorUpdate === t.grayScaleFactor && !n) return;
        t.lastGrayscaleFactorUpdate = t.grayScaleFactor, t.raysGrayscale || $(t);
        const e = F(t.raysGrayscale, t.grayScaleFactor),
            i = F(t.bg1Grayscale, t.grayScaleFactor),
            o = F(t.bg2Grayscale, t.grayScaleFactor);
        t.rays.forEach(p => {
            p.view.tint = e
        }), (h = (r = t.bg1) == null ? void 0 : r.view) == null || h.setTint(i), (a = (m = t.bg2) == null ? void 0 : m.view) == null || a.setTint(o)
    },
    St = t => {
        const n = P(t);
        for (let e = 0; e < t.options.numberOfRays; e++) t.parts.add.sprite({
            imageId: k.imageId,
            imageUrl: k.imageUrl,
            y: -20,
            originX: .5,
            originY: 1,
            ignoreInput: !0,
            depthChange: u(t, c.RAYS),
            onReady: i => {
                t.rays.push(i), Q(t, i, e), i.view.alpha = t.options.raysAlpha, i.view.blendMode = t.options.raysAdditive ? 1 : 0, i.view.tint = A(n.rays), e === t.options.numberOfRays - 1 && _(t, !0)
            }
        })
    },
    Q = (t, n, e) => {
        const i = Math.PI * 2 / t.options.numberOfRays,
            o = e * i + t.currentRaysAngle;
        n.view.rotation = o;
        const r = 39,
            h = 380,
            m = o,
            a = Math.atan(r / 2 * t.options.raysWidthFactor / h),
            p = t.options.width / 2,
            E = (t.options.height - s.LEGS_HEIGHT) / 2,
            O = Math.min(Math.abs(E / Math.cos(m - a)), Math.abs(p / Math.cos(Math.PI / 2 - m - a)), Math.abs(E / Math.cos(m + a)), Math.abs(p / Math.cos(Math.PI / 2 - m + a))) / h;
        n.view.scaleY = O, n.view.scaleX = O * t.options.raysWidthFactor
    },
    T = (t, n) => {
        t.grayScalePipelines.push(t.scene.plugins.get("rexGrayScalePipeline").add(n.view, {
            intensity: t.grayScaleFactor
        }))
    },
    W = (t, n) => {
        t.scene.plugins.get("rexGrayScalePipeline").remove(n.view)
    },
    Et = t => {
        var n, e;
        t.grayScalePipelines.length > 0 || ((n = t.requiredImage) != null && n.view && T(t, t.requiredImage), (e = t.grantedImage) != null && e.view && T(t, t.grantedImage))
    },
    At = t => {
        var n, e;
        t.grayScalePipelines.length !== 0 && ((n = t.requiredImage) != null && n.view && W(t, t.requiredImage), (e = t.grantedImage) != null && e.view && W(t, t.grantedImage), t.grayScalePipelines = [])
    },
    _t = t => {
        t.grayScaleFactor > 0 ? (Et(t), t.grayScalePipelines.forEach(n => {
            n.intensity = t.grayScaleFactor
        })) : At(t)
    },
    j = (t, n, e, i, o, r) => {
        const h = {
            ...gt
        };
        if (n) {
            const p = Y.worldOptions.itemOptions.find(E => E.id === n);
            p && (h.imageId = p.id, h.imageUrl = p.previewImage)
        }
        const m = B(h.imageId),
            a = X({
                height: m.height,
                width: m.width,
                newWidth: i,
                newHeight: e
            });
        return t.parts.add.sprite({
            imageId: h.imageId,
            imageUrl: h.imageUrl,
            depthChange: u(t, o),
            displayWidth: a.width,
            displayHeight: a.height,
            onReady: p => {
                t.grayScaleFactor > 0 && T(t, p), r && r(p)
            }
        })
    },
    w = t => I() ? t.options.amountOfRequiredItem : t.state.cost ?? t.options.amountOfRequiredItem,
    q = t => {
        let n = `${f(w(t))}`;
        return t.options.allowFunding ? `${f(t.state.fundedAmount||0)} / ${n}` : n
    },
    Z = t => {
        if (!t.options.visibleInGame) return;
        const n = t.options.height / 2 - 90;
        t.priceAreaInfoRectangle || (t.priceAreaInfoRectangle = t.parts.add.sprite({
            ...ft,
            y: n,
            depthChange: u(t, c.INFO_BG)
        })), pt({
            familyName: V.fontFamily,
            onLoad: () => {
                const e = q(t);
                if (t.priceText) t.priceText.view.setText(e);
                else {
                    const r = t.parts.add.text({
                        text: q(t),
                        y: n,
                        depthChange: u(t, c.INFO),
                        textStyle: V
                    });
                    t.priceText = r
                }
                t.updateFontSize();
                const i = s.REQUIRED_ITEM_MAX_SIZE,
                    o = r => {
                        r.view.y = t.y + n;
                        const h = t.priceText.getBounds().width,
                            a = i + h + 7;
                        r.view.x = -a / 2 + i / 2 + t.x, t.priceText.view.x = a / 2 - h / 2 + t.x
                    };
                t.requiredImage ? o(t.requiredImage) : t.requiredImage = j(t, t.options.requiredItemId, i, s.PRICE_HEIGHT * .8, c.INFO, r => {
                    o(r)
                })
            }
        })
    },
    Tt = t => {
        const i = {
            displayWidth: t.options.width - 20,
            displayHeight: t.options.height - 20 - s.LEGS_HEIGHT,
            depthChange: u(t, c.BG),
            y: -20
        };
        t.options.showShadow && !rt() && t.shadows.add({
            r1: t.options.width / 2 + 20,
            r2: 60,
            y: t.options.height / 2 - 20
        });
        const o = P(t);
        t.parts.add.sprite({
            ...ct,
            ...i,
            onReady: a => {
                t.bg1 = a, a.view.setTint(A(o.bg1)), _(t, !0)
            }
        }), t.parts.add.sprite({
            ...ut,
            ...i,
            ignoreInput: !0,
            onReady: a => {
                t.bg2 = a, a.view.setTint(A(o.bg2)), _(t, !0)
            }
        });
        const r = {
                ...dt,
                y: t.options.height / 2 + -20 - 2,
                depthChange: u(t, c.LEG)
            },
            h = -t.options.width / 2 + 60;
        t.parts.add.sprite({
            ...r,
            x: h
        }), t.parts.add.sprite({
            ...r,
            x: -h,
            flipX: !0
        });
        const m = s.FRAME_MARGINS_NINE_SLICE;
        t.parts.add.ninePatch({
            columns: [m, m],
            rows: [m, m],
            y: -20,
            scale: s.FRAME_SCALE,
            height: t.options.height - s.LEGS_HEIGHT,
            width: t.options.width,
            depthChange: u(t, c.FRAME),
            imageUrl: It.imageUrl
        })
    },
    wt = t => {
        t.colliders.add.box({
            x: 0,
            y: -40 + 10 / 2 + s.LEGS_HEIGHT / 2,
            w: t.options.width,
            h: t.options.height - s.LEGS_HEIGHT + 10
        })
    },
    Ct = t => {
        const n = et(t.options.grantedItemImageUrl);
        return t.parts.add.sprite({
            imageId: n,
            imageUrl: n,
            y: -40 / 2,
            depthChange: u(t, c.GRANTED_ITEM),
            onReady: e => {
                const i = B(n),
                    o = X({
                        height: i.height,
                        width: i.width,
                        newWidth: Math.min(s.ITEM_MAX_SIZE, t.options.width * .7),
                        newHeight: Math.min(s.ITEM_MAX_SIZE, t.options.height * .4 - s.PRICE_HEIGHT)
                    });
                e.view.setDisplaySize(o.width, o.height), t.grayScaleFactor > 0 && T(t, e)
            }
        })
    },
    Mt = t => {
        var n;
        return ((n = z().worldManager.devices.interactives.currentDevice) == null ? void 0 : n.id) === t
    },
    C = t => t.options.allowFunding,
    H = t => Math.max(0, w(t) - (C(t) && t.state.fundedAmount || 0)),
    S = t => {
        let n = 0;
        const e = Y.me.inventory.slots.get(t.options.requiredItemId);
        return e && (n = e.amount), n
    },
    bt = t => {
        const n = H(t),
            e = S(t);
        return C(t) && e < n ? g.fundingAction : g.purchaseAction
    },
    Rt = t => {
        if (!t.state.active || t.options.useLimitedStock && t.state.currentStock <= 0) return !1;
        const n = H(t),
            e = S(t);
        return C(t) ? !!e : !(e < n)
    },
    Gt = t => {
        var e;
        const n = (e = t.options.grantedItemDescription) == null ? void 0 : e.trim();
        if (n != null && n.length) return n
    },
    Ft = t => {
        const n = S(t);
        return S(t) >= n ? t.options.interactionDuration : 1
    },
    xt = t => {
        var e;
        let n = (e = t.options.grantedItemName) == null ? void 0 : e.trim();
        return !n && t.options.grantAction === y.grantItem && (n = x(t.options.grantedItemId)), n || (n = g.defaultItemName), t.options.grantAction === y.grantItem && !t.options.visibleInGame && t.options.attachCostToNameWhenHidden && t.options.requiredItemId && w(t) ? `${n} - ${f(t.options.amountOfRequiredItem)} ${x(t.options.requiredItemId)}` : n
    },
    Pt = t => !!(!t.options.visibleInGame && !t.state.active || t.options.allowedPurchaseTeam && t.options.allowedPurchaseTeam !== it && ot() !== t.options.allowedPurchaseTeam),
    Ht = t => {
        if (!t.state.active) return {
            text: g.notAvailable.message,
            color: g.notAvailable.color
        };
        if (t.options.useLimitedStock && t.state.currentStock <= 0) return {
            text: g.outOfStock.message,
            color: g.outOfStock.color
        };
        const n = H(t),
            e = S(t),
            i = C(t);
        return e < n && !i ? {
            text: g.notEnoughRequiredItem.message,
            color: g.notEnoughRequiredItem.color
        } : t.options.useLimitedStock ? {
            text: g.inStock(t.state.currentStock).message,
            color: g.inStock(t.state.currentStock).color
        } : i ? {
            text: g.fundingStatus.message(t.state.fundedAmount || 0, w(t), x(t.options.requiredItemId))
        } : {}
    },
    J = (t, n) => {
        if (Pt(t)) {
            t.interactiveZones.setForceDisabled(!0);
            return
        } else t.interactiveZones.setForceDisabled(!1);
        if (!Mt(t.id) && !n) return;
        const e = Ht(t),
            i = {
                message: xt(t),
                action: bt(t),
                topHeader: e == null ? void 0 : e.text,
                topHeaderColor: e == null ? void 0 : e.color,
                bottomHeader: Gt(t),
                duration: Ft(t),
                allowedToInteract: Rt(t)
            };
        t.interactiveZones.setInfo(i)
    },
    Ot = t => {
        I() || (t.options.visibleInGame ? t.interactiveZones.add.rect({
            y: 25,
            width: t.options.width + 150,
            height: t.options.height + 150
        }) : t.interactiveZones.add.circle({
            r: t.options.radius
        }), t.interactiveZones.setCanInteractThroughColliders(!0), t.interactiveZones.onInteraction = () => {
            t.sendToServerDevice(d.purchase)
        }, t.interactiveZones.onInteractiveCb = () => {
            J(t, !0)
        })
    };
class ie extends at {
    constructor(n) {
        if (super(n), this.grayScalePipelines = [], this.grayScaleFactor = 0, this.animationSpeedFactor = 1, this.rays = [], this.cumulTime = 0, this.currentRaysAngle = 0, this.onUpdate = e => {
                if (this.cull.isInsideView) {
                    if (this.currentRaysAngle += e / 1e4 * this.animationSpeedFactor, this.rays.forEach((i, o) => {
                            Q(this, i, o)
                        }), this.grantedImage && this.grantedImage.view) {
                        this.cumulTime += e;
                        const i = this.y - s.LEGS_HEIGHT / 2,
                            o = 5;
                        this.grantedImage.view.y = i + this.animationSpeedFactor * Math.sin(this.cumulTime / 550) * o
                    }
                    _t(this), _(this), J(this)
                }
            }, this.onStateChange = e => {
                e === "active" && (this.state.active ? this.tweens.add({
                    targets: this,
                    grayScaleFactor: 0,
                    animationSpeedFactor: 1,
                    duration: 350
                }) : (this.grayScaleFactor = Math.max(this.grayScaleFactor, 1e-5), this.tweens.add({
                    targets: this,
                    grayScaleFactor: s.INACTIVE_GRAY_SCALE_FACTOR,
                    animationSpeedFactor: s.INACTIVE_ANIMATION_SLOW_DOWN,
                    duration: 350
                }))), e === "fundedAmount" && Z(this)
            }, this.onMessage = e => {
                (e.key === d.purchased || e.key === d.funded) && e && e.data && e.data.characterId && e.data.characterId === st() && (e.key === d.purchased && this.options.soundEnabled && L({
                    path: l("devices/vending_machine/purchase.mp3"),
                    volume: N({
                        volume: .76,
                        type: D.soundEffect
                    })
                }), e.key === d.funded && this.options.soundEnabled && L({
                    path: l("devices/vending_machine/fund.mp3"),
                    volume: N({
                        volume: .8,
                        type: D.soundEffect
                    })
                }))
            }, this.setupVisualEditing = () => {
                if (!I() || !M()) return;
                const e = b(this, "width"),
                    i = b(this, "height");
                this.visualEditing.add.box({
                    width: this.options.width,
                    height: this.options.height,
                    angle: 0,
                    minWidth: e.min,
                    maxWidth: e.max,
                    minHeight: i.min,
                    maxHeight: i.max,
                    rotable: !1,
                    keepRatio: !1,
                    onChange: o => {
                        U(o.x, o.y, {
                            width: o.width,
                            height: o.height
                        })
                    }
                })
            }, this.setupVisualEditingInvisible = () => {
                if (!I() || !M()) return;
                const e = b(this, "radius");
                this.visualEditing.add.circle({
                    radius: this.options.radius,
                    minRadius: e.min,
                    maxRadius: e.max,
                    rotable: !1,
                    resizable: !0,
                    onChange: i => {
                        U(i.x, i.y, {
                            radius: i.radius
                        })
                    }
                })
            }, I() && !this.options.activeOnStart && (this.animationSpeedFactor = s.INACTIVE_ANIMATION_SLOW_DOWN, this.grayScaleFactor = s.INACTIVE_GRAY_SCALE_FACTOR), ht() && !this.state.active && (this.animationSpeedFactor = s.INACTIVE_ANIMATION_SLOW_DOWN, this.grayScaleFactor = s.INACTIVE_GRAY_SCALE_FACTOR), this.options.visibleInGame ? this.setupVisualEditing() : this.setupVisualEditingInvisible(), Ot(this), !this.options.visibleInGame) {
            I() && M() ? this.addIconLook() : this.boundingBox.setHardcoded({
                width: this.options.radius * 2,
                height: this.options.radius * 2
            });
            return
        }
        this.options.visibleInGame && this.addFullLook()
    }
    addFullLook() {
        this.boundingBox.setHardcoded({
            width: this.options.width,
            height: this.options.height
        }), this.wirePoints.setBoth(this.x, this.y - this.options.height / 2 + 20), Tt(this), !this.isPreview && (wt(this), this.options.grantAction === y.broadcastOnChannel ? this.options.grantedItemImageUrl && (this.grantedImage = Ct(this)) : this.grantedImage = j(this, this.options.grantedItemId, Math.min(s.ITEM_MAX_SIZE, this.options.width * .7), Math.min(s.ITEM_MAX_SIZE, this.options.height * .5 - s.PRICE_HEIGHT), u(this, c.GRANTED_ITEM)), Z(this), St(this), $(this))
    }
    addIconLook() {
        this.parts.add.sprite(yt).view.setScale(.25)
    }
    updateFontSize() {
        if (!this.priceText) return;
        const n = this.priceText.view.text.length,
            e = this.options.width * .85;
        let i = s.PRICE_TEXT_SIZE,
            o = n * i;
        const r = () => {
            o > e && (i -= 1, o = n * i, r())
        };
        r();
        const h = z().cameraHelper.zoom,
            m = i * h;
        this.priceText.view.setFontSize(m), this.priceText.view.setScale(1 / h);
        const a = lt();
        this.priceText.view.setPadding(a, a, a, a)
    }
}
export {
    ie as
    default
};