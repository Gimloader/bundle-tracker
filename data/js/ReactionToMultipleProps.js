import {
    dP as n
} from "./index-25.js";
const p = (r, t, a) => {
    const c = [];
    return r.forEach(o => {
        const s = n(o, t, a);
        c.push(s)
    }), () => {
        c.forEach(o => {
            o()
        })
    }
};
export {
    p as R
};