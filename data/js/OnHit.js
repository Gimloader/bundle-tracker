import {
    aA as s,
    aB as o,
    T as i,
    aC as p
} from "./App-41.js";
import {
    a as m
} from "./FixSpinePlugin.js";
const h = c => {
    const {
        characterId: a,
        damage: e,
        type: t
    } = c;
    if (a && e && t) {
        const r = s() ? o() : i();
        m().worldManager.projectiles.damageMarkers.characters.applyDamage({
            characterId: a,
            damage: e,
            type: t
        }), a === r && p({
            type: t
        })
    }
};
export {
    h as O
};