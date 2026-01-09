import {
    a as c
} from "./FixSpinePlugin.js";
import {
    w as s,
    P as r,
    x as a
} from "./App-41.js";
const l = e => {
    const t = c().worldManager.devices.getDeviceById(e.id);
    if (!t) return;
    const o = s(e.id);
    if (!o) return;
    const n = e.hooks || o.hooks;
    r({
        ...e,
        hooks: n,
        placeInstantly: !0,
        onPlace: i => {
            i && a({
                id: t.id,
                deviceTypeId: t.deviceOption.id,
                options: JSON.stringify(e.options),
                x: e.x,
                y: e.y,
                depth: i.layers.getOptionsDepth(),
                layerId: i.layers.getOptionsLayer(),
                name: e.name,
                hooks: n
            })
        }
    })
};
export {
    l as R
};