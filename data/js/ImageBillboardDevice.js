import {
    n as e,
    t
} from "./isVersion.js";
import {
    r as n,
    t as r
} from "./InPhase.js";
import {
    t as i
} from "./Device.js";
import {
    r as a
} from "./GlobalLocalDepth.js";
import {
    Dt as o,
    K as s,
    V as c,
    v as l,
    w as u
} from "./App-42.js";
import {
    n as d,
    t as f
} from "./FetchOptionSchemaProperty.js";
import {
    t as p
} from "./FetchTextureDimensions.js";
var m = function(e) {
        return e.all = `all`, e.game = `game`, e.preGame = `preGame`, e
    }({}),
    h = e => {
        e.originX = e.originX ?? .5, e.originY = e.originY ?? .5;
        let t = [{
                originX: 1,
                originY: 1
            }, {
                originX: 0,
                originY: 1
            }, {
                originX: 1,
                originY: 0
            }, {
                originX: 0,
                originY: 0
            }],
            {
                width: n,
                height: r,
                rotation: i,
                originX: a,
                originY: o
            } = e,
            s = [],
            c = [];
        t.forEach(e => {
            let t = Phaser.Math.Angle.Between(0, 0, (e.originX - a) * n, (e.originY - o) * r),
                l = Phaser.Math.Distance.Between(0, 0, (e.originX - a) * n, (e.originY - o) * r);
            s.push(l * Math.cos(t + i)), c.push(l * Math.sin(t + i))
        });
        let l = Math.max(...s) - Math.min(...s),
            u = Math.max(...c) - Math.min(...c);
        return {
            x: -a * l,
            y: -o * u,
            width: l,
            height: u
        }
    },
    g = class extends i {
        constructor(i) {
            super(i), this.matchesPhase = !0, this.createVisuals = () => {
                this.matchesPhase && (this.createFrame(), this.createImage()), this.boundingBox.setHardcoded(h({
                    height: this.options.height,
                    width: this.options.width,
                    rotation: u(this.options.rotation)
                }))
            }, this.onStateChange = e => {
                e === `frameColor` && (this.createFrame(), this.createImage()), e === `imageUrl` && this.createImage(), e === `visible` && r() && (this.state.visible ? (this.image && (this.image.view.alpha = 1), this.frame && (this.frame.view.alpha = 1)) : (this.image && (this.image.view.alpha = 0), this.frame && (this.frame.view.alpha = 0)))
            }, this.setupVisualEditing = () => {
                if (!n() || !e()) return;
                let t = f(this, `width`),
                    r = f(this, `height`);
                this.visualEditing.add.box({
                    width: this.options.width,
                    height: this.options.height,
                    angle: this.options.rotation,
                    minWidth: t.min,
                    maxWidth: t.max,
                    minHeight: r.min,
                    maxHeight: r.max,
                    keepRatio: !1,
                    onChange: e => {
                        d(e.x, e.y, {
                            width: e.width,
                            height: e.height,
                            rotation: e.angle
                        })
                    }
                })
            }, this.layers.setDefaultLayer(a.DevicesAboveCharacters), this.setupVisualEditing();
            let o = !0;
            (this.options.visibleDuringPhase === m.game && !r() && t() || this.options.visibleDuringPhase === m.preGame && !n()) && (o = !1), this.matchesPhase = o, this.createVisuals()
        }
        createImage() {
            if (!this.matchesPhase || t() && n() && this.options.visibleOnGameStart === `No`) return;
            let e = c(this.state.imageUrl || this.options.imageUrl);
            this.lastImageUrl = e, this.parts.add.sprite({
                imageId: e,
                imageUrl: e,
                onReady: t => {
                    if (e !== this.lastImageUrl) {
                        this.parts.destroySpecificPart(t.id);
                        return
                    }
                    this.image && this.parts.destroySpecificPart(this.image.id), this.image = t;
                    let n = p(e),
                        i = o({
                            width: n.width,
                            height: n.height,
                            newWidth: Math.abs(this.options.width) * .75,
                            newHeight: Math.abs(this.options.height) * .75
                        });
                    t.view.displayWidth = i.width, t.view.displayHeight = i.height, this.boundingBox.clearHardcoded(), t.view.angle = this.options.rotation, r() ? t.view.alpha = this.state.visible ? this.options.alpha : 0 : t.view.alpha = this.options.alpha
                }
            })
        }
        createFrame() {
            if (!this.matchesPhase) return;
            this.frame && this.parts.destroySpecificPart(this.frame.id);
            let e = this.state.frameColor || this.options.frameColor;
            if (e === `Transparent`) return;
            let t = l(e);
            this.frame = this.parts.add.rect({
                color: t,
                alpha: 1,
                borderAlpha: 1,
                width: Math.abs(this.options.width),
                height: Math.abs(this.options.height),
                borderColor: l(s(e)),
                borderWidth: 8,
                cornerRadius: 10
            }), this.frame.view.angle = this.options.rotation
        }
    };
export {
    g as
    default
};