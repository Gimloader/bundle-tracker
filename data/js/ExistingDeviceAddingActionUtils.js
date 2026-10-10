import {
    t as e,
    v as t
} from "./stores-2.js";
import {
    r as n
} from "./isModeType.js";
var r = () => e.me.adding.devices.existingDevice.use,
    i = () => e.me.adding.devices.existingDevice.id,
    a = () => {
        let e = i();
        return n(e)
    },
    o = () => r() && e.me.adding.devices.existingDevice.action === t.cut,
    s = () => r() && e.me.adding.devices.existingDevice.action === t.copy;
export {
    o as a, s as i, i as n, r, a as t
};