import {
    E as t,
    T as o
} from "./ActionButton.js";
import {
    a9 as a,
    s as n
} from "./FixSpinePlugin.js";
const m = e => {
    e !== a.home && t({
        event: o.OPEN_ADD_SUBMENU,
        menu: e
    }), n.gui.none.addMenu.screen = e
};
export {
    m as s
};