import {
    n as e
} from "./isVersion.js";
import {
    r as t
} from "./InPhase.js";
import {
    t as n
} from "./Device.js";
import {
    K as r
} from "./App-42.js";
import {
    n as i,
    t as a
} from "./FetchOptionSchemaProperty.js";
import {
    t as o
} from "./AddIgnoredStaticBodiesWhenCollisionsEnabled.js";
var s = function(e) {
        return e.rectangle = `rectangle`, e.circle = `circle`, e
    }({}),
    c = class extends n {
        constructor(n) {
            if (super(n), this.createVisuals = () => {
                    this.part || (this.isCircle && (this.part = this.parts.add.circle({
                        x: 0,
                        y: 0,
                        r: this.options.radius,
                        color: this.color,
                        alpha: this.options.alpha,
                        borderColor: this.borderColor,
                        borderAlpha: 1,
                        borderWidth: this.borderWidth
                    })), this.isRectangle && (this.part = this.parts.add.rect({
                        x: 0,
                        y: 0,
                        width: this.options.width,
                        height: this.options.height,
                        angle: this.options.angle,
                        color: this.color,
                        alpha: this.options.alpha,
                        borderColor: this.borderColor,
                        borderAlpha: 1,
                        borderWidth: this.borderWidth,
                        cornerRadius: 8
                    })), this.part.view.alpha = this.alpha)
                }, this.createColliders = () => {
                    this.options.collisionEnabled && (this.isCircle && this.colliders.add.circle({
                        x: 0,
                        y: 0,
                        r: this.options.radius
                    }), this.isRectangle && this.colliders.add.box({
                        x: 0,
                        y: 0,
                        w: this.options.width,
                        h: this.options.height,
                        angle: this.options.angle
                    }))
                }, this.onStateChange = e => {
                    e === `active` && (this.state.active && o(this), this.part.view.setAlpha(this.alpha))
                }, this.checkIfCollidersEnabled = () => this.state.active, t() && e()) {
                if (this.isCircle) {
                    let e = a(this, `radius`);
                    this.visualEditing.add.circle({
                        angle: 0,
                        rotable: !1,
                        radius: this.options.radius,
                        minRadius: e.min,
                        maxRadius: e.max,
                        onChange: e => {
                            i(e.x, e.y, {
                                radius: e.radius
                            })
                        }
                    })
                } else {
                    let e = a(this, `width`),
                        t = a(this, `height`);
                    this.visualEditing.add.box({
                        angle: this.options.angle,
                        keepRatio: !1,
                        rotable: !0,
                        width: this.options.width,
                        height: this.options.height,
                        minWidth: e.min,
                        maxWidth: e.max,
                        minHeight: t.min,
                        maxHeight: t.max,
                        onChange: e => {
                            i(e.x, e.y, {
                                width: e.width,
                                height: e.height,
                                angle: e.angle
                            })
                        }
                    })
                }
            }
            this.createVisuals(), this.createColliders()
        }
        get alpha() {
            return t() && e() ? 1 : this.options.visibleInGame ? +!!this.state.active : 0
        }
        get isCircle() {
            return this.options.shape === s.circle
        }
        get isRectangle() {
            return this.options.shape === s.rectangle
        }
        get color() {
            return Phaser.Display.Color.HexStringToColor(this.options.color).color
        }
        get borderWidth() {
            return this.options.showBorder ? 8 : 0
        }
        get borderColor() {
            return Phaser.Display.Color.HexStringToColor(r(this.options.color)).color
        }
    };
export {
    c as
    default
};