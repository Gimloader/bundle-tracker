import {
    t as e
} from "./GetAssetPath.js";
import {
    n as t,
    t as n
} from "./isVersion.js";
import {
    r,
    t as i
} from "./InPhase.js";
import {
    t as a
} from "./Device.js";
import {
    Et as o,
    v as s
} from "./App-42.js";
import {
    t as c
} from "./ZoneConstants.js";
import {
    t as l
} from "./ZonedDeviceDisplay.js";
import {
    n as u,
    t as d
} from "./FetchOptionSchemaProperty.js";
var f = {
        imageId: e(`devices/capture_flag_zone/base.png`),
        imageUrl: e(`devices/capture_flag_zone/base.png`)
    },
    p = {
        imageId: e(`devices/capture_flag_zone/icon.png`),
        imageUrl: e(`devices/capture_flag_zone/icon.png`)
    },
    m = class extends a {
        constructor(e) {
            if (super(e), this.onStateChange = e => {
                    if (e === `active`) {
                        if (this.rect && this.rect.view) {
                            let e = this.getAlpha();
                            this.rect.updateAlpha(e)
                        }
                        if (this.sprite && this.sprite.view) {
                            let e = this.getAlpha();
                            this.sprite.view.alpha = e
                        }
                    }
                }, this.setupVisualEditing = () => {
                    if (!r() || !t()) return;
                    let e = d(this, `width`),
                        n = d(this, `height`);
                    this.visualEditing.add.box({
                        width: this.options.width,
                        height: this.options.height,
                        angle: this.options.rotation,
                        minWidth: e.min,
                        maxWidth: e.max,
                        minHeight: n.min,
                        maxHeight: n.max,
                        keepRatio: !1,
                        onChange: e => {
                            u(e.x, e.y, {
                                rotation: e.angle,
                                width: e.width,
                                height: e.height
                            })
                        }
                    })
                }, r() && t()) {
                let e = this.parts.add.sprite({
                    ...f,
                    depthChange: o(2)
                });
                e.view.angle = this.options.rotation, e.view.setScale(.5)
            }
            if (i() || n() ? this.options.visibleInGame : l.shouldShow(this)) {
                this.setupVisualEditing();
                let e = s(this.options.color);
                this.rect = this.parts.add.rect({
                    color: e,
                    alpha: this.getAlpha(),
                    width: Math.abs(this.options.width),
                    height: Math.abs(this.options.height),
                    angle: this.options.rotation,
                    borderColor: e,
                    borderAlpha: +!i(),
                    borderWidth: 4,
                    depthChange: o(1),
                    ignoreInput: !0
                }), r() && t() && (this.sprite = this.parts.add.sprite({
                    ...p,
                    depthChange: o(2)
                }), this.sprite.view.setScale(.1))
            }
        }
        getAlpha() {
            return i() ? this.state.active ? c.alpha : 0 : t() && l.shouldShowInnerZone(this) ? c.alpha : 0
        }
    };
export {
    m as
    default
};