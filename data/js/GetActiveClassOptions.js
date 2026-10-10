import {
    t as e
} from "./stores-2.js";
import {
    t
} from "./FetchMyId.js";
import {
    t as n
} from "./FetchDeviceById.js";
var r = r => {
    let {
        characterId: i
    } = r;
    if (i !== t() || e.me.classDesigner.activeClassDeviceId === void 0) return;
    let a = n(e.me.classDesigner.activeClassDeviceId);
    if (!a) return;
    let o = a.options;
    if (o) return o
};
export {
    r as t
};