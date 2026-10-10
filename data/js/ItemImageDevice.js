import {
    o as e
} from "./rolldown-runtime.js";
import {
    t
} from "./phaser.js";
import {
    n
} from "./isVersion.js";
import {
    r
} from "./InPhase.js";
import {
    t as i
} from "./Device.js";
import {
    t as a
} from "./FetchItemById.js";
import {
    n as o,
    t as s
} from "./FetchOptionSchemaProperty.js";
import {
    n as c
} from "./Assets.js";
import {
    t as l
} from "./AddOutline.js";
var u = function(e) {
        return e.automatic = `automatic`, e.custom = `custom`, e
    }({}),
    d = e(t()),
    f = class extends i {
        constructor(e) {
            super(e), this.createVisuals = () => {
                let e = {
                        ...c
                    },
                    t = a(this.options.itemId);
                t && (e.imageId = t.previewImage, e.imageUrl = t.previewImage), this.part = this.parts.add.sprite({
                    ...e,
                    onReady: e => {
                        if (e.view.displayWidth = this.options.size, e.view.displayHeight = this.options.size, e.view.angle = this.options.angle, this.options.outline) {
                            let t = this.options.outlineSize === u.custom ? this.options.customOutlineSize : this.options.size / 25;
                            t > this.options.size / 10 && (t = this.options.size / 10), l({
                                view: e.view,
                                options: {
                                    outlineColor: d.default.Display.Color.HexStringToColor(this.options.outlineColor).color,
                                    thickness: t
                                }
                            })
                        }
                    }
                }), this.part.view.alpha = this.getAlpha()
            }, this.getAlpha = () => r() ? n() || this.options.visibleOnGameStart ? 1 : 0 : +!!this.state.visible, this.setupVisualEditing = () => {
                if (!r() || !n()) return;
                let e = s(this, `size`);
                this.visualEditing.add.box({
                    width: this.options.size,
                    height: this.options.size,
                    angle: this.options.angle,
                    minWidth: e.min,
                    maxWidth: e.max,
                    minHeight: e.min,
                    maxHeight: e.max,
                    rotable: !0,
                    keepRatio: !0,
                    onChange: e => {
                        o(e.x, e.y, {
                            size: e.width,
                            angle: e.angle
                        })
                    }
                })
            }, this.onStateChange = e => {
                e === `visible` && (this.part.view.alpha = this.getAlpha())
            }, this.setupVisualEditing(), this.createVisuals()
        }
    };
export {
    f as
    default
};