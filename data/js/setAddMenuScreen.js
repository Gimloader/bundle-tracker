import {
    l as e,
    t
} from "./stores-2.js";
import {
    i as n,
    n as r
} from "./ActionButton.js";
var i = i => {
    i !== e.home && r({
        event: n.OPEN_ADD_SUBMENU,
        menu: i
    }), t.gui.none.addMenu.screen = i
};
export {
    i as t
};