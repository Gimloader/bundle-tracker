import {
    aL as H,
    L as T,
    az as k,
    as as D,
    T as N,
    b9 as B,
    al as V
} from "./App-41.js";
import {
    p as w
} from "./playSound.js";
import {
    G as c
} from "./GetAssetPath.js";
import {
    g as y,
    S as b,
    d as _,
    P as m,
    t as O,
    c as A,
    s as R
} from "./FixSpinePlugin.js";
import {
    F as z,
    C as h,
    a as r,
    b as Y,
    c as M,
    d as F
} from "./ItemNameWithAmount.js";
import {
    N as $
} from "./NewWidthSameAspectRatio.js";
import {
    C as x
} from "./CapitalizeFirstLetter.js";
import {
    ar as Q
} from "./_index.js";
import {
    A as X
} from "./AddOutline.js";
import {
    R as j
} from "./RemoveOutline.js";
import "./Button.js";
import "./polished.esm.js";
import "./inheritsLoose.js";
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
var I = (t => (t.craft = "craft", t.collect = "collect", t))(I || {});
class q {
    constructor(e) {
        this.craft = i => {
            this.device.sendToServerDevice(I.craft, {
                recipe: i
            });
            const s = z(i);
            s && s.timeToCraftMs > 0 && w({
                path: c("devices/crafting_table/appear.mp3"),
                volume: y({
                    volume: .35,
                    type: b.soundEffect
                })
            })
        }, this.collect = () => {
            this.device.sendToServerDevice(I.collect), w({
                path: c("sounds/core/collectItem.mp3"),
                volume: y({
                    volume: .7,
                    type: b.soundEffect
                })
            })
        }, this.device = e
    }
}
class J {
    constructor(e) {
        this.burst = () => {
            this.emitter && (this.emitter.setDepth(this.device.getMaxDepth() + 1), this.emitter.explode(50))
        }, this.destroy = () => {
            this.emitter && this.emitter.destroy(!0)
        }, this.load = () => {
            if (!_()) return;
            const i = c("devices/crafting_table/particle.png");
            H({
                key: i,
                url: i,
                onLoad: () => {
                    this.device.isDestroyed || (this.emitter = this.device.scene.add.particles(this.device.x, this.device.y, i, {
                        speed: {
                            min: -400,
                            max: 400
                        },
                        angle: {
                            min: 180,
                            max: 360
                        },
                        scale: {
                            start: .5,
                            end: 0
                        },
                        blendMode: m.BlendModes.SCREEN,
                        emitting: !1,
                        lifespan: 1e3,
                        gravityY: 250
                    }))
                }
            })
        }, this.device = e
    }
}
const K = t => {
        t.options.style === h.craft && (O() ? t.colliders.add.box({
            x: 0,
            y: 13,
            w: 105,
            h: 70
        }) : A() && (t.colliders.add.box({
            x: 0,
            y: 0,
            w: 105,
            h: 92
        }), t.colliders.add.box({
            x: -39,
            y: 56,
            w: 14,
            h: 24
        }), t.colliders.add.box({
            x: 38,
            y: 56,
            w: 14,
            h: 24
        })))
    },
    P = t => t.newWidth / t.width,
    n = {
        itemCreated: {
            duration: 250,
            ease: m.Math.Easing.Quadratic.Out
        },
        itemDestroyed: {
            duration: 200,
            ease: m.Math.Easing.Sine.Out
        },
        itemReady: {
            applyItemAnimation: (t, e) => {
                const i = e.scale;
                t.tweens.add({
                    targets: e,
                    scale: {
                        from: i,
                        to: i * 1.1
                    },
                    duration: 1e3,
                    ease: m.Math.Easing.Sine.Out,
                    yoyo: !0,
                    repeat: -1
                })
            },
            applyShineAnimation: (t, e) => {
                t.tweens.add({
                    targets: e,
                    alpha: .25,
                    duration: 500,
                    ease: m.Math.Easing.Sine.In,
                    yoyo: !0,
                    repeat: -1
                })
            }
        }
    },
    E = {
        width: 60
    },
    u = t => A() ? t.layers.getLayer() : t.options.style == h.plant ? T.DevicesUnderCharacters : T.DepthSortedCharactersAndDevices,
    L = t => {
        if (!t.state.itemId) return;
        const e = k(t.state.itemId);
        if (e) {
            if (t.pieces.item) {
                if (t.pieces.item.view.texture.key === e.previewImage) return;
                t.pieces.item.destroy(), t.pieces.item = void 0
            }
            t.pieces.item = t.parts.add.sprite({
                imageId: e.previewImage,
                imageUrl: e.previewImage,
                layerId: u(t),
                onReady: i => {
                    i.view.setDepth(t.getMaxDepth() + D(1));
                    const s = t.state.status === r.availableForCollection;
                    i.view.alpha = s ? 1 : 0;
                    const o = P({
                        width: i.view.displayWidth,
                        newWidth: E.width
                    });
                    if (i.view.setScale(o), s) {
                        n.itemReady.applyItemAnimation(t, i.view);
                        return
                    }
                    const p = Number(i.view.scale);
                    i.view.scale = 0, t.tweens.add({
                        targets: i.view,
                        scale: p,
                        duration: n.itemCreated.duration,
                        ease: n.itemCreated.ease
                    })
                }
            })
        }
    },
    Z = t => {
        const e = t.state.itemId;
        if (!e) return;
        const i = k(e);
        i && (t.pieces.itemShine && (t.pieces.itemShine.destroy(), t.pieces.itemShine = null), t.pieces.itemShine = t.parts.add.sprite({
            imageId: i.previewImage,
            imageUrl: i.previewImage,
            layerId: u(t),
            onReady: s => {
                s.view.setDepth(t.getMaxDepth() + D(2));
                const o = P({
                    width: s.view.displayWidth,
                    newWidth: E.width
                });
                s.view.setScale(o), s.view.alpha = 0, s.view.blendMode = m.BlendModes.ADD, n.itemReady.applyShineAnimation(t, s.view)
            }
        }))
    },
    v = t => t.options.style === h.plant ? {
        key: "crafting-table-plant",
        url: c("/devices/crafting_table/dirt.png"),
        displayWidth: 120
    } : {
        key: "crafting-table",
        url: c("/devices/crafting_table/table.png"),
        displayWidth: 110,
        originY: 1,
        y: 67
    },
    tt = t => {
        const {
            key: e,
            url: i,
            displayWidth: s,
            y: o,
            originY: p
        } = v(t);
        t.pieces.base = t.parts.add.sprite({
            imageId: e,
            imageUrl: i,
            originY: p ?? .5,
            y: o ?? 0,
            layerId: u(t),
            depthChange: D(1),
            onReady: l => {
                const f = $({
                    height: l.view.displayHeight,
                    width: l.view.displayWidth,
                    newWidth: s
                });
                l.view.setDisplaySize(f.width, f.height)
            }
        }), t.options.style === h.craft && O() && t.shadows.add({
            r1: 70,
            r2: 30,
            y: 52
        }), t.state.status !== r.idle && (L(t), t.state.status === r.availableForCollection && Z(t)), t.particles.load()
    },
    et = t => {
        t.deviceUI.open({
            status: t.state.status,
            style: t.options.style,
            tableGroup: t.options.group,
            craft: t.callbackHelper.craft,
            collect: t.callbackHelper.collect,
            item: t.state.itemId,
            itemAmount: t.state.itemAmount,
            craftingDurationMs: t.state.craftingDurationMs,
            itemFinishesCraftingAt: t.state.itemFinishesCraftingAt,
            itemDisposalMs: t.state.itemDisposalMs,
            itemDisposedAt: t.state.itemDisposedAt,
            itemCrafterCharacterId: t.state.itemCrafterCharacterId,
            useCrafterCollectionAdvantage: t.options.useCrafterCollectionAdvantage
        })
    },
    it = t => {
        const {
            style: e
        } = t.options;
        if (e === h.plant) {
            t.interactiveZones.add.circle({
                r: 100
            });
            return
        }
        t.interactiveZones.add.circle({
            r: 120,
            y: 10
        })
    },
    d = t => {
        if (t.state.status === r.availableForCollection) {
            let e = 1;
            if (!(t.state.itemCrafterCharacterId === N()) && t.options.useCrafterCollectionAdvantage) {
                const s = t.state.itemFinishesCraftingAt + Y.secondsAdvantage * 1e3,
                    o = Math.ceil((s - R.session.gameTime) / 1e3);
                o < 1 ? e = 1 : (t.refetchInteractionTimeout = window.setTimeout(() => {
                    d(t)
                }, 250), e = o)
            }
            t.interactiveZones.setInfo({
                message: `Collect ${M(t.state.itemId,t.state.itemAmount)}`,
                allowedToInteract: !0,
                duration: e
            }), t.interactiveZones.onInteraction = () => {
                t.callbackHelper.collect()
            }
        } else t.state.status === r.idle ? t.interactiveZones.setInfo({
            message: x(F.baseVerb(t.options.style)),
            allowedToInteract: !0
        }) : t.interactiveZones.setInfo({
            message: `${x(F.preparing(t.options.style))} ${M(t.state.itemId,t.state.itemAmount)}`,
            action: "to check status",
            allowedToInteract: !0
        }), t.interactiveZones.onInteraction = () => {
            t.openDeviceUI()
        }
    },
    st = t => {
        if (t.pieces.item) {
            const e = t.pieces.item;
            t.pieces.item = void 0, t.tweens.add({
                targets: e.view,
                scale: 0,
                opacity: .5,
                duration: n.itemDestroyed.duration,
                ease: n.itemDestroyed.ease,
                onComplete: () => {
                    e.destroy()
                }
            })
        }
        if (t.pieces.itemShine) {
            const e = t.pieces.itemShine;
            t.pieces.itemShine = void 0, t.tweens.add({
                targets: e.view,
                scale: 0,
                opacity: .5,
                duration: n.itemDestroyed.duration,
                ease: n.itemDestroyed.ease,
                onComplete: () => {
                    e.destroy()
                }
            })
        }
    },
    U = t => {
        !t.pieces.progressBar.background || !t.pieces.progressBar.bar || (t.pieces.progressBar.background.view.destroy(), t.pieces.progressBar.bar.view.destroy(), t.pieces.progressBar.background = void 0, t.pieces.progressBar.bar = void 0)
    },
    at = t => {
        const e = t.state.status;
        e === r.idle && (st(t), U(t)), (e === r.crafting || e === r.availableForCollection) && L(t), e === r.availableForCollection && (t.pieces.item && n.itemReady.applyItemAnimation(t, t.pieces.item.view), Z(t), t.state.itemDisposedAt || U(t), t.cull.isInsideView && !R.session.loadingPhase && Date.now() - t.createdAt > 1500 && (w({
            path: c("devices/crafting_table/complete.mp3"),
            volume: y({
                volume: .4,
                type: b.soundEffect
            })
        }), t.particles.burst())), t.deviceUI.update({
            status: t.state.status
        }), d(t)
    },
    rt = (t, e) => {
        t === "status" && at(e), t === "itemId" && (e.deviceUI.update({
            item: e.state.itemId
        }), d(e)), t === "craftingDurationMs" && e.deviceUI.update({
            craftingDurationMs: e.state.craftingDurationMs
        }), t === "itemFinishesCraftingAt" && e.deviceUI.update({
            itemFinishesCraftingAt: e.state.itemFinishesCraftingAt
        }), t === "itemAmount" && e.deviceUI.update({
            itemAmount: e.state.itemAmount
        }), t === "itemDisposedAt" && e.deviceUI.update({
            itemDisposedAt: e.state.itemDisposedAt
        }), t === "itemDisposalMs" && e.deviceUI.update({
            itemDisposalMs: e.state.itemDisposalMs
        }), t === "itemCrafterCharacterId" && e.deviceUI.update({
            itemCrafterCharacterId: e.state.itemCrafterCharacterId
        })
    },
    a = {
        width: 55,
        height: 12,
        backgroundColor: 16777215,
        borderColor: 2503224,
        borderWidth: 5,
        progressColor: 4431943,
        expirationColor: 15092249,
        yOffset: t => t.options.style === h.plant ? 70 : A() ? -75 : 85
    },
    ot = t => {
        t.pieces.progressBar.background && t.pieces.progressBar.background.destroy(), t.pieces.progressBar.bar && t.pieces.progressBar.bar.destroy(), t.pieces.progressBar.background = t.parts.add.rect({
            width: a.width,
            height: a.height,
            y: a.yOffset(t),
            color: a.backgroundColor,
            borderColor: a.borderColor,
            borderWidth: a.borderWidth,
            borderAlpha: 1,
            layerId: u(t)
        }), t.pieces.progressBar.bar = t.parts.add.rect({
            width: a.width,
            height: a.height,
            y: a.yOffset(t),
            color: a.progressColor,
            layerId: u(t)
        }), t.pieces.progressBar.background.view.setScale(0), t.pieces.progressBar.bar.view.setAlpha(0), t.tweens.add({
            targets: t.pieces.progressBar.background.view,
            scale: 1,
            duration: n.itemCreated.duration,
            ease: n.itemCreated.ease,
            onComplete: () => {
                var e;
                (e = t.pieces.progressBar.bar) != null && e.view && t.pieces.progressBar.bar.view.setAlpha(1)
            }
        })
    },
    W = t => {
        const {
            device: e,
            completion: i
        } = t;
        (!e.pieces.progressBar.bar || !e.pieces.progressBar.background) && ot(e), e.pieces.progressBar.bar.updateFillColor({
            color: t.color,
            blockRedraw: !0
        }), e.pieces.progressBar.bar.updateDimensions({
            height: a.height,
            width: a.width * i
        }), e.pieces.progressBar.bar.view.setX(e.x - (a.width - a.width * i) / 2)
    },
    nt = t => {
        var e, i, s, o, p, l, f, S;
        if (t.cull.isInsideView) {
            if (t.state.status === r.crafting) {
                const C = t.state.itemFinishesCraftingAt - t.state.craftingDurationMs,
                    g = (B() - C) / t.state.craftingDurationMs;
                W({
                    device: t,
                    completion: g,
                    color: a.progressColor
                });
                const G = Q.clamp(g, .25, 1);
                (s = (i = (e = t.pieces) == null ? void 0 : e.item) == null ? void 0 : i.view) == null || s.setAlpha(G)
            }
            if (t.state.status === r.availableForCollection && ((l = (p = (o = t.pieces) == null ? void 0 : o.item) == null ? void 0 : p.view) == null || l.setAlpha(1), t.state.itemDisposedAt)) {
                const C = t.state.itemDisposedAt - t.state.itemDisposalMs,
                    g = 1 - (B() - C) / t.state.itemDisposalMs;
                W({
                    device: t,
                    completion: g,
                    color: a.expirationColor
                })
            }
            t.itemIsOutlined && (!t.interactivity.withinBounds || t.state.status !== r.availableForCollection) && (t.itemIsOutlined = !1, (f = t.pieces) != null && f.item && j({
                view: t.pieces.item.view
            })), t.interactivity.withinBounds && t.state.status === r.availableForCollection && !t.itemIsOutlined && (S = t.pieces.item) != null && S.view && (t.itemIsOutlined = !0, X({
                view: t.pieces.item.view
            }))
        }
    };
class Fe extends V {
    constructor(e) {
        super(e), this.pieces = {
            progressBar: {}
        }, this.interactivity = {
            withinBounds: !1
        }, this.itemIsOutlined = !1, this.openDeviceUI = () => {
            et(this)
        }, this.onStateChange = i => {
            rt(i, this)
        }, this.onUpdate = () => {
            nt(this)
        }, this.onDestroy = () => {
            this.particles.destroy(), this.refetchInteractionTimeout && window.clearTimeout(this.refetchInteractionTimeout)
        }, this.createdAt = Date.now(), K(this), this.callbackHelper = new q(this), this.particles = new J(this), it(this), tt(this), d(this), this.interactiveZones.onInteractiveCb = () => {
            this.interactivity.withinBounds = !0
        }, this.interactiveZones.onNonInteractive = () => {
            this.interactivity.withinBounds = !1
        }
    }
}
export {
    Fe as
    default
};