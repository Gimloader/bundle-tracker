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
    Ot as o,
    Tt as s
} from "./App-42.js";
import {
    t as c
} from "./ZonedDeviceDisplay.js";
import {
    n as l,
    t as u
} from "./FetchOptionSchemaProperty.js";
var d = e(`devices/tag_zone/zone_icon.png`),
    f = {
        imageId: d,
        imageUrl: d
    },
    p = function(e) {
        return e.everywhere = `everywhere`, e.zone = `zone`, e
    }({}),
    m = class extends a {
        constructor(a) {
            if (super(a), this.setupVisualEditing = () => {
                    if (!r() || !t()) return;
                    let e = u(this, `width`),
                        n = u(this, `height`);
                    this.visualEditing.add.box({
                        width: this.options.width,
                        height: this.options.height,
                        minWidth: e.min,
                        maxWidth: e.max,
                        minHeight: n.min,
                        maxHeight: n.max,
                        rotable: !1,
                        keepRatio: !1,
                        onChange: e => {
                            l(e.x, e.y, {
                                width: e.width,
                                height: e.height
                            })
                        }
                    })
                }, !(i() || n())) {
                if (this.options.detectionArea === p.everywhere) {
                    let t = o.Manager;
                    new s({
                        device: this,
                        baseColor: t.baseColor,
                        boxColor: t.boxColor,
                        content: {
                            icon: {
                                image: e(`devices/tag_zone/icon.png`),
                                scale: .8
                            }
                        }
                    })
                } else this.setupVisualEditing(), c.shouldShow(this) && (this.layers.forceDepthManually(0), this.parts.add.sprite(f).view.setScale(.15), this.parts.add.rect({
                    color: 4435243,
                    alpha: c.shouldShowInnerZone(this) ? .2 : 0,
                    borderAlpha: 1,
                    width: Math.abs(this.options.width),
                    height: Math.abs(this.options.height),
                    borderColor: 4435243,
                    borderWidth: 4,
                    ignoreInput: !0
                }))
            }
        }
    };
export {
    m as
    default
};