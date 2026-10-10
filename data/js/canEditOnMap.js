import {
    s as e,
    t
} from "./stores-2.js";
import {
    n
} from "./isVersion.js";
import {
    t as r
} from "./FetchMyId.js";
import {
    t as i
} from "./isModeType.js";
var a = () => {
    var a;
    if (!n() || i() || t.gui.none.screen === e.startScreen) return !1;
    let o = r();
    return ((a = t.characters.characters.get(o)) == null || (a = a.permissions) == null ? void 0 : a.editing) || !1
};
export {
    a as t
};