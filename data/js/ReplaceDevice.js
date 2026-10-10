import {
    t as e
} from "./FetchScene.js";
import {
    r as t
} from "./isModeType.js";
import {
    t as n
} from "./PlaceDevice.js";
import {
    u as r
} from "./App-42.js";
var i = i => {
    let a = e().worldManager.devices.getDeviceById(i.id);
    if (!a) return;
    let o = t(i.id);
    if (!o) return;
    let s = i.hooks || o.hooks;
    n({
        ...i,
        hooks: s,
        placeInstantly: !0,
        onPlace: e => {
            e && r({
                id: a.id,
                deviceTypeId: a.deviceOption.id,
                options: JSON.stringify(i.options),
                x: i.x,
                y: i.y,
                depth: e.layers.getOptionsDepth(),
                layerId: e.layers.getOptionsLayer(),
                name: i.name,
                hooks: s
            })
        }
    })
};
export {
    i as t
};