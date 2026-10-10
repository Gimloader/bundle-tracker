import {
    b as e
} from "./FixPhaserBootProcess.js";
import {
    u as t
} from "./stores-2.js";
var n = function(e) {
        return e._DO_NOT_USE_VISUAL_EDITING = `VisualEditing`, e._DO_NOT_USE_FILL = `Fill`, e._DO_NOT_USE_FILL_2 = `Fill2`, e._DO_NOT_USE_FILL_3 = `Fill3`, e._DO_NOT_USE_PLATFORMER_BOTTOM = `PlatformerBottom`, e.PlayerBuiltTerrain = `PlayerBuiltTerrain`, e._DO_NOT_USE_PREVIEW = `Preview`, e.DevicesUnderCharacters = `DevicesUnderCharacters`, e.DepthSortedCharactersAndDevices = `DepthSortedCharactersAndDevices`, e.DevicesAboveCharacters = `DevicesAboveCharacters`, e.WorldInfo = `WorldInfo`, e.InGameUIElements = `InGameUIElements`, e
    }(n || {}),
    r = 200,
    i = 5,
    a = (a, o) => {
        let s = t.height * e.height + r;
        return o === n.DevicesUnderCharacters ? i + s + a : o === n.DepthSortedCharactersAndDevices ? i + 2 * s + a : o === n.DevicesAboveCharacters ? i + 3 * s + a : o === n.WorldInfo ? i + 4 * s + a : o === n.InGameUIElements ? i + 5 * s + a : a
    },
    o = a => {
        let o = t.height * e.height + r,
            s = Math.floor((a - i) / o),
            c = n.DevicesUnderCharacters;
        s === 2 ? c = n.DepthSortedCharactersAndDevices : s === 3 ? c = n.DevicesAboveCharacters : s === 4 && (c = n.InGameUIElements);
        let l = (a - i) % o;
        return {
            layer: c,
            depthOnLayer: l
        }
    };
export {
    o as n, n as r, a as t
};