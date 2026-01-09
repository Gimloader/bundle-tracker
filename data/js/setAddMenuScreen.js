import {
    E as t,
    T as o
} from "./ActionButton.js";
import {
    K as n,
    s
} from "./FixSpinePlugin.js";
const m = e => {
    e !== n.home && t({
        event: o.OPEN_ADD_SUBMENU,
        menu: e
    }), s.gui.none.addMenu.screen = e
};
export {
    m as s
};