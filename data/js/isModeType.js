import {
    t as e
} from "./stores-2.js";
import {
    t
} from "./MapModeType.js";
var n = t => e.world.devices.devices.get(t),
    r = () => e.session.modeType === t.liveGame,
    i = () => e.session.modeType === t.assignment;
export {
    r as n, n as r, i as t
};