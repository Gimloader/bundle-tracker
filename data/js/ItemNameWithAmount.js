import {
    s as d
} from "./FixSpinePlugin.js";
import {
    C as f
} from "./CapitalizeFirstLetter.js";
import {
    b5 as l
} from "./_index.js";
import {
    aS as p
} from "./App-41.js";
const $ = e => {
    const n = d.world.devices.devices.get(e);
    if (!n) return null;
    const t = n.options,
        m = new Map,
        i = o => t.numberOfIngredients >= o,
        a = (o, u) => {
            const c = m.get(o);
            c ? c.amount += u : m.set(o, {
                item: o,
                amount: u
            })
        };
    return i(1) && a(t.ingredient1Item, t.ingredient1Amount), i(2) && a(t.ingredient2Item, t.ingredient2Amount), i(3) && a(t.ingredient3Item, t.ingredient3Amount), i(4) && a(t.ingredient4Item, t.ingredient4Amount), i(5) && a(t.ingredient5Item, t.ingredient5Amount), {
        id: e,
        itemId: t.item,
        itemAmount: t.itemAmount,
        ingredients: Array.from(m.values()),
        timeToCraftMs: t.timeToCraftMs,
        timeToDisposeMs: t.itemDisposes ? t.disposeItemAfterMs : 0
    }
};
var r = (e => (e.plant = "plant", e.craft = "craft", e.store = "store", e))(r || {}),
    g = (e => (e.idle = "idle", e.crafting = "crafting", e.availableForCollection = "availableForCollection", e))(g || {});
const s = e => e === r.plant ? "plant" : e === r.craft ? "craft" : "purchase",
    h = {
        noItems: e => `No items currently available to ${s(e)}.`,
        selectItem: e => `Select an item to ${s(e)}...`,
        availableToCraft: e => `Available To ${f(s(e))}`,
        instantNote: e => e === r.store ? "Available immediately" : e === r.plant ? "Grows instantly" : "Crafts instantly",
        durationNote: e => n => n === r.store ? `Takes ${e} to prepare` : n === r.plant ? `Takes ${e} to grow` : `Takes ${e} to craft`,
        expireVerb: e => e === r.plant ? "goes bad" : "expires",
        resource: e => e === r.store ? "resource" : "ingredient",
        preparing: e => e === r.store ? "preparing" : e === r.plant ? "growing" : "crafting",
        baseVerb: s
    },
    w = {
        secondsAdvantage: 5
    },
    F = (e, n) => {
        let t = p(e) || "Item";
        return n > 1 && (t += ` (${l(n)})`), t
    };
export {
    r as C, $ as F, g as a, w as b, F as c, h as d
};