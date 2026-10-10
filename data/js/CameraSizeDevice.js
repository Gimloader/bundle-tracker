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
    t as o
} from "./ZonedDeviceDisplay.js";
import {
    n as s,
    t as c
} from "./FetchOptionSchemaProperty.js";
var l = {
        imageId: e(`devices/camera_size/base.png`),
        imageUrl: e(`devices/camera_size/base.png`)
    },
    u = class extends a {
        constructor(e) {
            super(e), this.notifyManagerAboutUpdate = () => {
                this.scene.worldManager.devices.cameras.allCamerasNeedsUpdate = !0
            }, this.onDestroy = () => {
                this.notifyManagerAboutUpdate()
            }, this.setupVisualEditing = () => {
                if (!r() || !t()) return;
                let e = c(this, `width`),
                    n = c(this, `height`);
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
                        s(e.x, e.y, {
                            width: e.width,
                            height: e.height
                        })
                    }
                })
            }, this.setupVisualEditing(), this.notifyManagerAboutUpdate(), !(n() || i()) && (this.layers.forceDepthManually(0), this.parts.add.sprite(l).view.setScale(.5), o.shouldShow(this) && this.parts.add.rect({
                color: 11400448,
                alpha: o.shouldShowInnerZone(this) ? .2 : 0,
                width: Math.abs(this.options.width),
                height: Math.abs(this.options.height),
                borderColor: 11400448,
                borderAlpha: 1,
                borderWidth: 4,
                ignoreInput: !0
            }))
        }
    };
export {
    u as
    default
};