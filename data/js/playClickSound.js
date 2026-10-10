import {
    t as e
} from "./GetAssetPath.js";
import {
    t
} from "./lodash.js";
import {
    t as n
} from "./playSound.js";
import {
    o as r,
    s as i
} from "./FixPhaserBootProcess.js";
var a = t(),
    o = () => {
        n({
            path: e(`sounds/core/inventory/switch${(0,a.random)(1,3)}.mp3`),
            volume: i({
                volume: .2,
                type: r.soundEffect
            })
        })
    };
export {
    o as t
};