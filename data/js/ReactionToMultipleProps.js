import {
    dO as n
} from "./_index.js";
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