import {
    aW as r,
    az as l,
    aw as m
} from "./App-41.js";
import {
    s
} from "./FixSpinePlugin.js";
const a = e => {
        const n = r().interactiveItemsSlots,
            t = s.me.inventory.interactiveSlotsOrder;
        for (let o = 0; o < n; o++) {
            const i = t[o],
                c = s.me.inventory.interactiveSlots.get(`${i}`);
            if (e.callback(c, i)) return
        }
    },
    f = e => {
        let n = 0;
        return a({
            callback: t => {
                (t.itemId === e.itemId || t.itemId === "" || !t.itemId) && (n += 1)
            }
        }), n
    },
    v = e => {
        const n = l(e.itemId).maxStackSize ?? 1;
        let t = 0;
        return a({
            ...e,
            callback: o => {
                (o.itemId === e.itemId || o.itemId === "" || !o.itemId) && (t += n)
            }
        }), t
    },
    h = {
        itemWidth: 60,
        interaction: {
            radius: 50,
            message: {
                action: "to collect",
                fullInventory: "Inventory Full",
                fullInventoryColor: "#ffcdd2"
            }
        },
        fall: {
            fallSpeedPerSecond: m(100)
        }
    };
export {
    h as D, f as G, v as a
};