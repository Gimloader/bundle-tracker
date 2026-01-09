import {
    a1 as i
} from "./App-41.js";
const e = [],
    l = a => e.includes(a),
    r = a => {
        const {
            familyName: t,
            onLoad: o
        } = a;
        if (e.includes(t)) {
            o && o();
            return
        }
        i.load({
            google: {
                families: [`${t}:400,700`]
            },
            fontactive: d => {
                e.includes(d) || e.push(d), t === d && o && o()
            }
        })
    };
export {
    r as L, l as i
};