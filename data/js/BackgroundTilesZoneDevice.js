import {
    t as e
} from "./GetAssetPath.js";
import {
    b as t
} from "./FixPhaserBootProcess.js";
import {
    t as n
} from "./stores-2.js";
import {
    t as r
} from "./FetchScene.js";
import {
    t as i
} from "./isVersion.js";
import {
    t as a
} from "./InPhase.js";
import {
    t as o
} from "./Device.js";
import {
    A as s,
    Et as c,
    Ot as l,
    Tt as u,
    g as d,
    v as f
} from "./App-42.js";
import {
    n as p,
    t as m
} from "./FetchOptionSchemaProperty.js";
var h = e => {
        let t = v(e),
            r = y(e);
        return {
            minX: t ? 0 : _(e.options.zoneX - e.options.width / 2) + 1,
            minY: r ? 0 : _(e.options.zoneY - e.options.height / 2) + 1,
            maxX: t ? n.world.width : _(e.options.zoneX + e.options.width / 2),
            maxY: r ? n.world.height : _(e.options.zoneY + e.options.height / 2)
        }
    },
    g = e => {
        let n = h(e);
        return {
            minX: n.minX * t.width,
            minY: n.minY * t.height,
            maxX: n.maxX * t.width,
            maxY: n.maxY * t.height
        }
    },
    _ = e => Math.floor(e / t.width),
    v = e => e.options.useFullMapSize || e.options.expandToWorldWidth,
    y = e => e.options.useFullMapSize || e.options.expandToWorldHeight,
    b = e => {
        let t = {
                x: e.x,
                y: e.y
            },
            {
                minX: n,
                minY: r,
                maxX: i,
                maxY: a
            } = g(e),
            o = {
                x: n,
                y: r,
                width: i - n,
                height: a - r
            },
            s = Math.max(o.x, Math.min(t.x, o.x + o.width)),
            c = Math.max(o.y, Math.min(t.y, o.y + o.height));
        if (t.x >= o.x && t.x <= o.x + o.width && t.y >= o.y && t.y <= o.y + o.height) {
            let e = t.x - o.x,
                n = o.x + o.width - t.x,
                r = t.y - o.y,
                i = o.y + o.height - t.y,
                a = Math.min(e, n, r, i);
            return a === e ? {
                x: o.x,
                y: t.y
            } : a === n ? {
                x: o.x + o.width,
                y: t.y
            } : a === r ? {
                x: t.x,
                y: o.y
            } : {
                x: t.x,
                y: o.y + o.height
            }
        }
        return {
            x: s,
            y: c
        }
    },
    x = 1e3,
    S = e => s.Fill3 + .1 + (x - e.options.order + c(e.y) / x) * .1,
    C = {
        border: {
            alpha: .5,
            width: 5,
            color: 16711935
        }
    },
    w = -999999999,
    T = class extends o {
        constructor(t) {
            if (super(t), this.addLayer = () => {
                    let e = n.worldOptions.terrainOptions.find(e => e.id === this.options.terrainId);
                    if (!e) return;
                    let {
                        minX: t,
                        minY: i,
                        maxX: a,
                        maxY: o
                    } = h(this), s = S(this), c = r().tileManager.layerManager.backgroundLayersManager.createLayer({
                        layerId: this.id,
                        depth: s
                    }), l = {
                        priority: this.layers.getGlobalDepth(),
                        x: t,
                        y: i,
                        width: a - t,
                        height: o - i,
                        terrainOption: e,
                        onlyFillTiles: this.options.onlyFillTiles,
                        useAlphaTransition: this.options.useAlphaTransition,
                        transitionDirection: this.options.transitionDirection
                    };
                    c.addFillZone(l), c.setScrollData({
                        scrollFactor: this.options.scrollFactor,
                        speedX: this.options.overrideScrollingSpeed ? this.options.scrollingSpeedX : void 0,
                        speedY: this.options.overrideScrollingSpeed ? this.options.scrollingSpeedY : void 0
                    }), c.addTintModifier({
                        tint: f(this.options.tint)
                    })
                }, this.removeLayer = () => {
                    r().tileManager.layerManager.backgroundLayersManager.removeLayer({
                        layerId: this.id
                    })
                }, this.onShow = () => {
                    this.addLayer()
                }, this.onHide = () => {
                    this.removeLayer()
                }, this.addConnectionLine = () => {
                    if (v(this) && y(this)) return;
                    let e = b(this),
                        t = Phaser.Math.Distance.Between(this.x, this.y, e.x, e.y),
                        n = Phaser.Math.Angle.Between(this.x, this.y, e.x, e.y);
                    this.parts.add.rect({
                        x: (e.x - this.x) / 2,
                        y: (e.y - this.y) / 2,
                        width: t,
                        height: C.border.width,
                        angle: d(n),
                        color: C.border.color,
                        alpha: C.border.alpha
                    })
                }, this.addBoundsBox = () => {
                    let {
                        minX: e,
                        minY: t,
                        maxX: n,
                        maxY: r
                    } = g(this), i = e + (n - e) / 2 - this.x, a = t + (r - t) / 2 - this.y;
                    this.parts.add.rect({
                        x: i,
                        y: a,
                        ignoreInput: !0,
                        width: n - e,
                        height: r - t,
                        color: 16777215,
                        alpha: 0,
                        borderAlpha: C.border.alpha,
                        borderColor: C.border.color,
                        borderWidth: C.border.width
                    })
                }, this.setupVisualEditing = () => {
                    if (a() || i()) return;
                    let e = v(this),
                        t = y(this);
                    if (e && t) return;
                    let n = m(this, `width`),
                        r = m(this, `height`),
                        {
                            minX: o,
                            minY: s,
                            maxX: c,
                            maxY: l
                        } = g(this);
                    this.visualEditing.add.box({
                        keepRatio: !1,
                        rotable: !1,
                        width: e ? c - o : this.options.width,
                        height: t ? l - s : this.options.height,
                        minWidth: n.min,
                        maxWidth: n.max,
                        minHeight: r.min,
                        maxHeight: r.max,
                        x: e ? o + (c - o) / 2 - this.x : this.options.zoneX - this.x,
                        y: t ? s + (l - s) / 2 - this.y : this.options.zoneY - this.y,
                        onChange: n => {
                            p(this.x, this.y, {
                                ...e ? {} : {
                                    width: n.width,
                                    zoneX: n.x
                                },
                                ...t ? {} : {
                                    height: n.height,
                                    zoneY: n.y
                                }
                            })
                        }
                    })
                }, this.destroy = e => {
                    super.destroy(e), this.removeLayer()
                }, this.addLayer(), a() || i()) return;
            let o = l.Setting;
            new u({
                device: this,
                baseColor: o.baseColor,
                boxColor: o.boxColor,
                content: {
                    icon: {
                        image: e(`devices/background_tile_zone/icon.png`),
                        scale: 1
                    },
                    text: {
                        text: this.options.order + ``,
                        shiftY: -9,
                        size: 24
                    }
                }
            }), this.options.zoneX === -999999999 && (this.options.zoneX = this.x), this.options.zoneY === -999999999 && (this.options.zoneY = this.y), this.addConnectionLine(), this.addBoundsBox(), this.setupVisualEditing()
        }
    };
export {
    w as ZONE_UNSET_POSITION, T as
    default
};