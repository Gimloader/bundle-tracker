import {
    T as i
} from "./TutorialConsts.js";
import {
    u as c,
    r,
    j as e
} from "./_index.js";
import {
    M as p
} from "./Button.js";
import {
    T as I
} from "./index-5.js";
const C = () => window._mapId === i.mapId,
    s = "tutorial_event";
var D = (_ => (_.NEXT = "next", _.OPEN_ADD_MENU = "open_add_menu", _.OPEN_ADD_SUBMENU = "open_add_submenu", _.SELECT_PROP_TO_ADD = "select_prop_to_add", _.SELECT_TERRAIN_TO_ADD = "select_terrain_to_add", _.SELECT_DEVICE_TO_ADD = "select_device_to_add", _.START_COPY_DEVICE = "start_copy_device", _.PLACE_DEVICE_DOWN = "place_device_down", _.START_THE_GAME = "start_the_game", _.ANSWER_A_QUESTION = "answer_a_question", _.END_THE_GAME = "end_the_game", _.END_THE_GAME_BY_DEVICE = "end_the_game_by_device", _.RESTORE_THE_MAP = "restore_the_map", _.OPEN_DEVICE_OPTIONS = "open_device_options", _.CHANGE_DEVICE_OPTION = "change_device_option", _.CLOSE_DEVICE_OPTIONS = "close_device_options", _.START_ADDING_WIRE = "start_adding_wire", _.START_WIRE_FROM_DEVICE = "start_wire_from_device", _.END_WIRE_TO_DEVICE = "end_wire_to_device", _.CONFIGURE_WIRE = "configure_wire", _.GRANT_ITEM = "grant_item", _))(D || {});
window.document.addEventListener(s, _ => {
    t && t(_.detail)
}, !1);
let t;
const T = _ => {
        if (!C() && _.event !== "next") return;
        const o = new CustomEvent(s, {
            detail: _
        });
        window.top.document.dispatchEvent(o)
    },
    S = _ => {
        t = _
    },
    l = _ => {
        const [o, d, E] = c(!1), n = r.useRef(null);
        return e.jsx("div", {
            ref: n,
            children: e.jsx(I, {
                title: _.tooltip,
                placement: "bottom",
                open: o,
                getPopupContainer: () => n.current,
                children: e.jsx("div", {
                    onMouseEnter: d,
                    onMouseLeave: E,
                    children: e.jsx(p, {
                        type: "default",
                        onClick: _.onClick,
                        customHorizontalPadding: 18,
                        customColor: "#4A2C83",
                        ariaLabel: _.tooltip,
                        children: _.children
                    })
                })
            })
        })
    };
export {
    l as A, T as E, C as I, S, D as T
};